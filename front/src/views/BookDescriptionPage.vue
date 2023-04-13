<script setup>
    import SliderVue from '../components/Slider.vue'
    import QuestionsAnswersVue from '../components/QuestionsAnswers.vue'
    
</script>

<template>

    <div class="book-description-page-wrapper">
        <div class="slider">
            <SliderVue />
        </div>

        
        <div class="book-content">
            <div class="title-button-flex">
                <h2>{{ single_book.postTitle }}</h2>

                <div class="favourite-button-flex">
                    <div class="-favourite-icon-wrapper">
                        <img src="../assets/images/favourite-icon.svg" alt="">
                    </div>
                    <button class="primary_button">Add to Basket</button>
                </div>
            </div>
        

            <div class="author-tags-price-wrapper">
                <div class="left-wrapper">
                    <h4>{{ single_book.author }}</h4>
                    <div class="tags">
                        <span>#Tags</span><h4 v-for="tag in single_book.searchTags">{{ tag }}</h4>
                    </div>
                    
                </div>
                <h2><span>$</span>{{ single_book.price }}</h2>
            </div>

            <div class="book-description">
                <h2>Description</h2>
                <p>{{ single_book.description }}</p>
            </div>

            <div class="product-details-wrapper">
                <h2>Product Details</h2>
                <div class="product-details">
                    <div class="box-1">
                        <div class="row-flex">
                            <h3>Condition:</h3>
                            <p>{{ single_book.condition }}</p>
                        </div>

                        <div class="row-flex">
                            <h3>Language:</h3>
                            <p>{{ single_book.language }}</p>
                        </div>
                    </div>

                    <div class="box-1">
                        <div class="row-flex">
                            <h3>Cover style:</h3>
                            <p v-if="single_book.coverstyle.soft">Soft</p>
                            <p v-if="!single_book.coverstyle.soft">Hard</p>
                        </div>

                        <div class="row-flex">
                            <h3>Publish year:</h3>
                            <p>{{ single_book.yearPub.$numberDecimal }}</p>
                        </div>
                    </div>

                    <div class="box-1">
                        <div class="row-flex">
                            <h3>First edition:</h3>
                            <p v-if="single_book.notable.firstEdition">Yes</p>
                            <p v-if="!single_book.notable.firstEdition">No</p>
                        </div>

                        <div class="row-flex">
                            <h3>Limited edition:</h3>
                            <p v-if="single_book.notable.limitedEdition">Yes</p>
                            <p v-if="!single_book.notable.limitedEdition">No</p>
                        </div>
                    </div>

                    <div class="box-1">
                        <div class="row-flex">
                            <h3>Signed by author:</h3>
                            <p v-if="single_book.notable.signedEdition">Yes</p>
                            <p v-if="!single_book.notable.signedEdition">No</p>
                        </div>

                        <div class="row-flex">
                            <h3>Delivery method:</h3>
                            <p v-if="single_book.shipping.delivery.option1.method">Pickup</p>
                            <p></p>
                            <p></p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="questions-answers-section">
                    <QuestionsAnswersVue />
            </div>
        </div>
            
        
    </div>
</template>

<style scoped>
    /* BOOK WRAPPER */
    .book-description-page-wrapper{
        width: 90%;
        padding: 50px 20px;
        /* background-color: blue; */
    }
    .book-content{
        padding: 20px 0;
        color: var(--book_brown);
        /* background-color: aquamarine; */
    }

    .title-button-flex, .author-tags-price-wrapper{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .favourite-button-flex{
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: clamp(180px, 50vw, 200px)
    }

    .left-wrapper > *{
        padding-bottom: 10px;
    }

    .book-description > p:first-of-type{
        padding-bottom: 20px;
    }

    h2{
        padding: 18px 0;
    }

    .primary_button{
        margin: 0;
    }


    .tags{
        display: flex;
        width: 300px;
        justify-content: space-between;
    }

    span{
        font-family: 'Quicksand_Regular';

    }

    /* PRODUCT DETAILS CSS */

    .product-details-wrapper{
        padding: 20px 0;
    }
    .product-details{
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
    }

    .box-1{
        display: flex;
        flex-direction: column;
        flex: 1;
    }

    .row-flex{
        flex: 1;
        display: flex;
    }

    h3, p{
        font-size: 16px;
    }

    .row-flex > h3{
        padding-bottom: 15px;
        width: 150px;
    }
    /* MEDIA QUERY */

    @media (max-width: 500px){
        .product-details{
            flex-direction: column;
        }
    }

        /* MEDIA QUERY */

        @media (max-width: 500px){
        .product-details{
            flex-direction: column;
        }
    }

</style>



<script>

export default {
    data(){
        return{
            bookID:'',
            single_book:{
            }
        }
    },

    methods:{
        receive_book_id(){
            this.bookID = localStorage.getItem('book_id_received')
            console.log(this.bookID);
            this.fetch_single_book();
        },
        
        async fetch_single_book(){
        const response = await fetch ('http://localhost:3000/getsinglebook/'+ this.bookID);
        const mybook = await response.json();
        console.log(mybook)
        this.single_book = mybook;
      }

    },

    created(){
        this.receive_book_id()
    }
}
</script>




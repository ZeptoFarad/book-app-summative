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
                <h2></h2>
                <div class="favourite-button-flex">
                    <div class="-favourite-icon-wrapper">
                        <img src="../assets/images/favourite-icon.svg" alt="">
                    </div>
                    <button class="primary_button">Add to Basket</button>
                </div>
            </div>
        

            <div class="author-tags-price-wrapper">
                <div class="left-wrapper">
                    <h4></h4>
                    <h4></h4>
                </div>
                <h2></h2>
            </div>

            <div class="book-description">
                <h2></h2>
                <p></p>
            </div>

            <div class="product-details-wrapper">
                <h2>Product Details</h2>
                <div class="product-details">
                    <div class="box-1">
                        <div class="row-flex">
                            <h3>Condition:</h3>
                            <p></p>
                        </div>

                        <div class="row-flex">
                            <h3>Language:</h3>
                            <p></p>
                        </div>
                    </div>

                    <div class="box-1">
                        <div class="row-flex">
                            <h3>Cover style:</h3>
                            <p></p>
                        </div>

                        <div class="row-flex">
                            <h3>Publish year:</h3>
                            <p></p>
                        </div>
                    </div>

                    <div class="box-1">
                        <div class="row-flex">
                            <h3>First edition:</h3>
                            <p></p>
                        </div>

                        <div class="row-flex">
                            <h3>Limited edition:</h3>
                            <p></p>
                        </div>
                    </div>

                    <div class="box-1">
                        <div class="row-flex">
                            <h3>Signed by author:</h3>
                            <p></p>
                        </div>

                        <div class="row-flex">
                            <h3>Delivery method:</h3>
                            <p></p>
                        </div>
                    </div>
                </div>
                <div class="questions-answers-section">
                    <QuestionsAnswersVue />
                </div>
            </div>
            
        </div>
    {{ book_id_received }}
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
    .carousel{
        max-width: 1400px;
        height: 400px;
    }

    .carousel-slide{
        width: 100%;
        height: 100%;
        object-fit: cover;
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

    /* PRODUCT DETAILS CSS */
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

</style>

<script>

export default {

    methods:{
        receive_book_id(){
            localStorage.getItem('book_id_received')
        }
    }
}
</script>


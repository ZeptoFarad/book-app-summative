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
                <h2>Title</h2>
                <div class="favourite-button-flex">
                    <div class="-favourite-icon-wrapper">
                        <img src="../assets/images/favourite-icon.svg" alt="">
                    </div>
                    <button class="primary_button">Add to Basket</button>
                </div>
            </div>
        

            <div class="author-tags-price-wrapper">
                <div class="left-wrapper">
                    <h4>Author</h4>
                    <h4>Post Tags</h4>
                </div>
                <h2>$25</h2>
            </div>

            <div class="book-description">
                <h2>Description</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, eaque voluptatem accusamus, id rem placeat tempore autem temporibus voluptates accusantium a praesentium aperiam, quis necessitatibus veritatis laudantium error saepe provident commodi ea eius quas. Commodi corrupti distinctio enim eaque id. Voluptates rem eum voluptatibus iusto dicta natus, animi ipsum recusandae. Laborum dicta, neque cum maxime itaque omnis animi dolore consequatur fugiat, illo quibusdam recusandae unde voluptas odit quos, earum officiis quaerat molestias nulla sed. Exercitationem ipsam tempora totam nulla eius, porro, quam cum quas earum laudantium voluptas nostrum, consectetur dicta esse? Tempore fuga nisi quis sint repudiandae amet ipsum asperiores.</p>

                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio eligendi harum expedita eius ullam rerum, aperiam sit! Deleniti totam unde rem error excepturi reiciendis officia eius recusandae similique aspernatur. Consectetur?</p>
            </div>

            <div class="product-details-wrapper">
                <h2>Product Details</h2>
                <div class="product-details">
                    <div class="box-1">
                        <div class="row-flex">
                            <h3>Condition:</h3>
                            <p>Good</p>
                        </div>

                        <div class="row-flex">
                            <h3>Language:</h3>
                            <p>English</p>
                        </div>
                    </div>

                    <div class="box-1">
                        <div class="row-flex">
                            <h3>Cover style:</h3>
                            <p>Hard</p>
                        </div>

                        <div class="row-flex">
                            <h3>Publish year:</h3>
                            <p>2022</p>
                        </div>
                    </div>

                    <div class="box-1">
                        <div class="row-flex">
                            <h3>First edition:</h3>
                            <p>No</p>
                        </div>

                        <div class="row-flex">
                            <h3>Limited edition:</h3>
                            <p>No</p>
                        </div>
                    </div>

                    <div class="box-1">
                        <div class="row-flex">
                            <h3>Signed by author:</h3>
                            <p>No</p>
                        </div>

                        <div class="row-flex">
                            <h3>Delivery method:</h3>
                            <p>Pickup</p>
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

</style>
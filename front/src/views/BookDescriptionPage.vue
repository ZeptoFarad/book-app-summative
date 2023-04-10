<template>
    <div class="book-description-page-wrapper">
        <div class="carousel">
            <img class="carousel-slide" src="../assets/images/collector-book-img.jpeg" alt="">
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

            <div class="product-details">
                <div class="box-1">
                    <h3>Condition: <span class="regular-font">Good</span></h3>
                    <h3>Language: <span class="regular-font">English</span></h3>
                </div>

                <div class="box-1">
                    <h3>Condition: <span class="regular-font">Good</span></h3>
                    <h3>Language: <span class="regular-font">English</span></h3>
                </div>

                <div class="box-1">
                    <h3>Condition: <span class="regular-font">Good</span></h3>
                    <h3>Language: <span class="regular-font">English</span></h3>
                </div>

                <div class="box-1">
                    <h3>Condition: <span class="regular-font">Good</span></h3>
                    <h3>Language: <span class="regular-font">English</span></h3>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .book-description-page-wrapper{
        width: 90%;
        padding: 50px 20px;
        background-color: blue;
    }
    .book-content{
        padding: 20px 0;
        color: var(--book_brown);
        background-color: aquamarine;
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

    .book-description > *{
        padding-bottom: 20px;
    }

    .product-details{
        display: flex;
        justify-content: space-between;
    }
    .regular-font{
        font-family: 'Quicksand_Regular';
        font-weight: 400;
        font-size: 16px;
    }

    h3{
        font-size: 16px;
    }

    h3:first-child{
        padding-bottom: 18px;
    }

    h2{
        padding: 15px 0;
    }

</style>
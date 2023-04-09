<template>
    <div class="main-features-wrapper">
        <div class="img-wrapper">
            <img class="top-image" src="../assets/images/surprise-me-img.jpeg" alt="girl-holding-books">
            <div class="title-wrapper">
                <h2 class="img-title">Suprise Me</h2>
                <div class="line"></div>
            </div>
        </div>

        <div class="img-wrapper">
            <img src="../assets/images/under-20-dollars-img.jpeg" alt="girl-reading">
            <div class="title-wrapper">
                <h2 class="img-title">Under $20</h2>
                <div class="line"></div>
            </div>
        </div>

        <div class="img-wrapper">
            <img src="../assets/images/collector-book-img.jpeg" alt="books-collection">
            <div class="title-wrapper">
                <h2 class="img-title">Collector Books</h2>
                <div class="line"></div>
            </div>
        </div>
    </div>
</template>

<style scoped>

    .main-features-wrapper{
        display: flex;
        gap: 48px;
        max-width: 1288px;
        justify-content: center;
        margin: 0 5%;
    }

    .img-wrapper{
        flex: 1;
        position: relative;
    }

    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 10px;
        object-position: right top;
    }

    .title-wrapper{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        position: absolute;
        color: white;
        top: 5%;
        right: clamp(30px,10%,60px);
        max-width: 130px;
    }

    .img-title{
        padding-bottom: 10px;
        font-size: clamp(20px, 3vw, 30px);
    }
    .line{
        background: white;
        height: 10px;
        width: 143px;
    }

    @media (max-width: 900px){
        .main-features-wrapper{
            width: 600px;
            flex-direction: column;
            align-items: center;
            gap: 20px;
        }

        .img-wrapper{
            flex: none;
            height: 110px;
            width: 100%;
        }

        img{
            object-position: 50% 50%;
        }

        .top-image{
            object-position: 50% 20%;
        }
    }


</style>
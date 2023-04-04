<template>
    <div class="popular-categories-wrapper">
        
        <div class="single-category-wrapper">
            <div class="category">
                <div class="icon-wrapper">
                    <img src="../assets/images/thriller-icon.svg" alt="">
                </div>
            </div>
            <h3 class="category-title">Thriller</h3>
        </div>

        <div class="single-category-wrapper">
            <div class="category">
                <div class="icon-wrapper">
                    <img src="../assets/images/scifi-icon.svg" alt="">
                </div>
            </div>
            <h3 class="category-title">Sci-Fi</h3>
        </div>

        <div class="single-category-wrapper">
            <div class="category">
                <div class="icon-wrapper">
                    <img src="../assets/images/romance-icon.svg" alt="">
                </div>
            </div>
            <h3 class="category-title">Romance</h3>
        </div>

        <div class="single-category-wrapper">
            <div class="category">
                <div class="icon-wrapper">
                    <img src="../assets/images/kids-icon.svg" alt="">
                </div>
            </div>
            <h3 class="category-title">Children's</h3>
        </div>

    </div>
</template>

<style scoped>
    .popular-categories-wrapper{
        padding-bottom: 50px;
        max-width: 1288px;
        display: flex;
        gap: 70px;
    }

    .single-category-wrapper{
        display: flex;
        flex-direction: column;
        text-align: center;
        height: 305px;
        justify-content: space-between;
    }

    .category{
        background-color: var(--book_wheat);
        border-radius: 50%;
        width: 240px;
        height: 240px;
    }

    .category > *{
        margin: 47px auto;
    }

    .icon-wrapper{
        width: 150px;
        height: 150px;
    }

    img{
        width: 100%;
        height: 100%;
        object-fit: fill;
    }

    .category-title{
        font-size: clamp(20px, 3vw, 30px);
    }


</style>
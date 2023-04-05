<template>
    <div class="popular-categories-wrapper">
        <div class="top-div">
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
        </div>



        <div class="bottom-div">
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


    </div>
</template>

<style scoped>
    .popular-categories-wrapper{
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
        gap: 3vw;
        padding-bottom: 50px;
    }

    .top-div, .bottom-div{
        display: flex;
        gap: 3vw;
    }

    .single-category-wrapper{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        flex: 1;
        min-width: 240px;
    }

    .category{
        background-color: var(--book_wheat);
        border-radius: 50%;
        width: 14vw;
        position: relative;
        aspect-ratio: 1/1;
        margin-bottom: 25px;
    }

    .icon-wrapper{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    img{
        width: 100%;
        height: 100%;
        object-fit: fill;
    }

    .category-title{
        font-size: clamp(20px, 3vw, 30px);
        color: var(--book_brown)
    }

    @media (max-width: 1100px){

        .single-category-wrapper{
            min-width: 200px;
        }
        .category{
            width: 30vw;
        }

        .top-div{
            padding-bottom: 10px;
        }
    }
</style>
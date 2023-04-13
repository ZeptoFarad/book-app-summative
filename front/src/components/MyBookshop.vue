<script setup>
    import BookshopBookCard from './BookshopBookCard.vue';
</script>

<template>
    <div class="bookshop_container">
    <div class="bookshop_wrapper">
        <div class="title_section">
            <h2>My Bookshop</h2>
            <button class="brown_button">List a book</button>
        </div>
        <div @click="Bool1=!Bool1" class="current_listings">
            <h3>Current Listings</h3>
            <i class="arrow"></i>
        </div>
            <div v-if="Bool1">
            <div class="books_wrapper">
                <div class="bookcard_wrapper">
                    <BookshopBookCard />
                </div>
                <div class="bookcard_wrapper">
                    <BookshopBookCard />
                </div>
                <div class="bookcard_wrapper">
                    <BookshopBookCard />
                </div>
            </div>
            </div>
        <div @click="Bool2=!Bool2" class="sold">
            <h3>Sold</h3>
            <i class="arrow"></i>
        </div>
        <div v-if="Bool2">
            <div class="books_wrapper">
            
            </div>
        </div>
        <div @click="Bool3=!Bool3" class="unsold">
            <h3>Unsold</h3>
            <i class="arrow"></i>
        </div>
        <div v-if="Bool3">
            <div class="books_wrapper">
            
            </div>
        </div>
        
    </div>
</div>
</template>

<style scoped>
    .bookshop_container {
        display: flex;
        justify-content: center;
    }
    .bookshop_wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background-color: var(--book_wheat);
        width: 80vw;
        margin-top: 5vw;
        margin-bottom: 5vw;

    }
    .arrow {
        border: solid var(--book_brown);
        border-width: 0 3px 3px 0;
        display: inline-block;
        padding: 3px;
        transform: rotate(-45deg);
        margin-right: 10px;
    }
    
    .unsold:hover > .arrow{transform: rotate(45deg) !important;}
    .sold:hover > .arrow{transform: rotate(45deg) !important;}
    .current_listings:hover > .arrow{transform: rotate(45deg) !important;}


    .title_section {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        width: 70vw;
        padding-top: 4vw;
        padding-bottom: 4vw;
    }
    .current_listings, .sold, .unsold {
        display: flex;
        justify-content: space-between;
        width: 70vw;
        background-color: var(--book_cream);
        height: 5vw;
        align-items: center;
        border-bottom: 1px solid var(--book_brown);
        border-top: 1px solid var(--book_brown);

    }
    .unsold {margin-bottom: 5vw;}
    .books_wrapper {
            display: flex;
            justify-content: center;
            width: 70vw;
            gap: 5vw;
            padding-top: 2vw;
            padding-bottom: 2vw;
            flex-wrap: wrap;
    }
    h3 {
        padding-left: 10px;
    }
    h2 {    
        font-size: clamp(38px, 5vw, 56px);
    }
    
    .brown_button {
        margin-bottom: 0.5rem;
        background: var(--book_brown);
        border: solid 2px var(--book_brown);
        border-radius: 8px;
        padding: 12px 20px;
        /* display: flex; */
        color: var(--book_cream);
        /* text-align: left; */
        font-family: 'Quicksand', sans-serif;
        font-weight: 700;
        font-size: clamp(0.875rem, 2.5vw, 1rem);
        align-items: center;
        justify-content: center;
        box-sizing: border-box;
        }
    button.brown_button:hover {
        background: var(--book_cream, darkbrown);
        color: var(--book_brown, seashell);
        border: solid 2px var(--book_brown);
        }
    
    @media screen and (max-width: 700px){
        .title_section {flex-direction: column; padding: 10px;}
        h2 {padding: 10px;}
        .bookshop_wrapper {
            width: 100vw;
        }
        .current_listings, .sold, .unsold {width: 90vw;}

    }

</style>

<script>
    
    export default {
        data() {
            return {
                Bool1: false,
                Bool2: false,
                Bool3: false

            }
        }

    }
</script>
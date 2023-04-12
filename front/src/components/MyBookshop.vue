<script setup>
    import BookshopBookCard from './BookshopBookCard.vue';
</script>

<template>
    <div class="bookshop_wrapper">
        <div class="title_section">
            <h2>My Bookshop</h2>
            <button class="brown_button">List a book</button>
        </div>
        <div class="current_listings">
            <h3>Current Listings</h3>
        </div>
        <div class="sold">
            <h3>Sold</h3>
        </div>
        <div class="unsold">
            <h3>Unsold</h3>
        </div>
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
            <div class="bookcard_wrapper">
                <BookshopBookCard />
            </div>
        
        </div>
    </div>
</template>

<style scoped>
    .bookshop_wrapper {
        /* padding: 100px; */
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: var(--book_wheat);
        width: 80vw;
    }
    .title_section {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        width: 80vw;
        padding: 10px;
    }
    .current_listings, .sold, .unsold {
        display: flex;
        width: 80vw;
        background-color: var(--book_cream);
        height: 5vw;
        align-items: center;
    }
    .book_wrapper {
        
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
    }

</style>
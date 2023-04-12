<template>
    <!-- <div class="book-card-wrapper">
        <div class="book-card-content">
            <div class="book-card-img-wrapper">
                <img class="book-card-img" src="https://ubscan.co.nz/wp-content/uploads/9781681888866-1.jpg" alt="book_cover">
            </div>
            <div class="title-favourite">
                <h3 class="title">Magnificent Cats</h3>
                <img src="../assets/images/favourite-icon.svg" alt="">
            </div>
            <div class="book-info">
                <h4>Barbara Taylor</h4>
                <h4>Nature</h4>
                <h4>Good</h4>
                <h2 class="book-price">$25</h2>
            </div>
            <button class="tertiary_button" id="button-full-width">Add to Basket</button>
        </div>
    </div> -->

    <div class="book-card-wrapper">
        <div class="book-card-content">
            <div class="book-card-img-wrapper">
                <img class="book-card-img" src="https://ubscan.co.nz/wp-content/uploads/9781681888866-1.jpg" alt="book_cover">
            </div>
            <div class="title-favourite">
                <h3 class="title">Book Title Placeholder</h3>
                <img src="../assets/images/favourite-icon.svg" alt="">
            </div>
            <div class="book-info">
                <h4>Book Author Placeholder</h4>
                <h4>Book Category Placeholder</h4>
                <h4>Book Condition Placeholder</h4>
                <h2 class="book-price"><span>$</span>Book Price Placeholder</h2>
            </div>
            <!-- <div class="book-info">
                <h4>{{ Book.author }}</h4>
                <h4>{{ Book.category }}</h4>
                <h4>{{ Book.condition }}</h4>
                <h2 class="book-price"><span>$</span>{{ Book.price }}</h2>
            </div> -->
            <button class="tertiary_button" id="button-full-width">Add to Basket</button>
        </div>
    </div>
    <div class="edit_delete">
        <h3 id="edit">Edit</h3>
        <h3>|</h3>
        <h3 id="delete">Delete</h3>
    </div>

   
</template>

<style scoped>
.edit_delete {
    display: flex;
    justify-content: space-between;
    padding: 2vw 4vw 1vw 4vw;
}
#delete {color: red;}

.book-card-wrapper{
    background-color: white;
    width: 272px;
    height: 519px;
    border: 2px solid var(--book_brown);
    border-radius: 10px;
    display: flex;
    justify-content: center;
}

.book-card-content{
    max-width: 234px;
    padding: 20px;
}

.title-favourite{
    display: flex;
    padding: 12px 0;
}

.title{
    width: 250px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: clamp(16px, 3vw, 24px);
}
.book-card-img-wrapper{
    width: 229px;
    height: 231px;
}

.book-card-img{
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
}

.book-info{
    display: flex;
    flex-direction: column;
}
.book-info > *{
    padding-bottom: 8px;
}

.book-price{
    padding: 15px 0;
    align-self: flex-end;
}

#button-full-width{
    width: 100%;
}
</style>

<script setup>

// defineProps({
//     Book: {
//         type: Object,
//         required: true,
//     }
// })

</script>
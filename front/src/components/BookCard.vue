<template>
    <div class="book-card-wrapper">
        <div class="book-card-content">
            <div class="book-card-img-wrapper">
                <img class="book-card-img" src="https://ubscan.co.nz/wp-content/uploads/9781681888866-1.jpg" alt="book_cover">
            </div>
            <div class="title-favourite">
                <h2>Magnificent Cats</h2>
                
            </div>
        </div>
        
    </div>
</template>

<style scoped>

.book-card-content{
    
    width: 234px;
    height: 470px;
}
.book-card-wrapper{
    width: 272px;
    height: 519px;
    border: 2px solid var(--book_brown);
    border-radius: 10px;
}

.book-card-img-wrapper{
    width: 229px;
    height: 231px;
}

.book-card-img{
    width: 100%;
    height: 100%;
    object-fit: contain;
}


</style>
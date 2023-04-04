<script setup>
import BookCard from './components/BookCard.vue'
import MainFeatures from './components/MainFeatures.vue'
import PopularCategories from './components/PopularCategories.vue'
</script>

<template>
  <section class="main-features-section">
    <MainFeatures />
  </section>

  <h1 class="main-h1-title">Latest Listings</h1>

  <section class="cards-section">
    <BookCard  v-for="book in 8"/>
  </section>

  <h1 class="main-h1-title">Popular Categories</h1>
  <section class="popular-categories-section">
    <PopularCategories />
  </section>


</template>

<style scoped>
  .cards-section{
    
    background-color: var(--book_wheat);
    display: flex;
    justify-content: center;
    margin: auto;
    flex-wrap: wrap;
    gap: 50px;
    width: 100%;
    padding: 60px 0;
  }

  .main-features-section{
    display: flex;
    justify-content: center;
    padding: 30px 0 0 0;
  }

  .main-h1-title{
    padding: 50px 0;
    width: 400px;
    color: var(--book_brown);
  }

  .popular-categories-section{
    display: flex;
    justify-content: center;
    
  }

</style>




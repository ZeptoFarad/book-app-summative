<script setup>
import BookCard from './components/BookCard.vue'
</script>

<template>
  <div class="cards-section">
    <BookCard  v-for="book in 8"/>
  </div>
</template>

<style scoped>
  .cards-section{
    background-color: var(--book_wheat);
    display: flex;
    justify-content: center;
    margin: auto;
    flex-wrap: wrap;
    gap: 20px;
    width: 100%;
    padding: 20px 0;
  }
</style>

<script>
export default {

}
</script>



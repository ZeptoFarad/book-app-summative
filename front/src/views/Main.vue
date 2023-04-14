<script setup>
import BookCard from "../components/BookCard.vue";
import MainFeatures from "../components/MainFeatures.vue";
import PopularCategories from "../components/PopularCategories.vue";
import WideImage from "../components/WideImage.vue";
</script>

<template>
  <section class="main-features-section">
    <MainFeatures />
  </section>

  <h1 class="main-h1-title">Latest Listings</h1>


  <section class="cards-section">
      <BookCard 
      v-for="book of books_list"
      :Book="book"
      @click="on_click_local_storage(book._id)"
      />
  </section>

  

  <h1 class="main-h1-title">Popular Categories</h1>
  <section class="popular-categories-section">
    <PopularCategories
    />
  </section>

  <section class="wide-image-section">
    <WideImage />
  </section>
</template>

<style scoped>
.cards-section {
  background-color: var(--book_wheat);
  display: flex;
  justify-content: center;
  margin: auto;
  flex-wrap: wrap;
  gap: 50px;
  width: 100%;
  padding: 60px 0;
}

.main-features-section {
  display: flex;
  justify-content: center;
  padding: 30px 0 0 0;
}

.main-h1-title {
  padding: 50px 0;
  width: 400px;
  color: var(--book_brown);
  margin: auto 6%;
}

.popular-categories-section {
  display: flex;
  justify-content: center;
}
</style>

<script>

export default{
    data(){
      return{
        //Model creation code for main page starts
        books_list:[],
        book_id:'',
        // category: '',
      }
    },

    methods:{
      //Fetch all books function starts
      async fetch_all_books(){
        const response = await fetch ('http://localhost:3000/getbookdata/')
        const received_data = await response.json();
        this.books_list = received_data;
      },
      ////Fetch all books function ends

      //Fetch book ID function starts
      on_click_local_storage(bookID){
        localStorage.setItem('book_id_received', bookID);
        console.log(bookID);
        this.$router.push('/bookdescription')
      },
      //Fetch book ID function ends
    },

    created(){
      this.fetch_all_books();
      // this.fetch_category();
    }
  }

</script>

<script setup>
  import BookCard from '../components/BookCard.vue'
  import MainFeatures from '../components/MainFeatures.vue'
  import PopularCategories from '../components/PopularCategories.vue'
  import WideImage from '../components/WideImage.vue'
</script>


<template>
  <section class="main-features-section">
    <MainFeatures />
  </section>

  <h1 class="main-h1-title">Latest Listings</h1>

  <!-- <section class="cards-section">
    <BookCard 
    />
  </section> -->

  <section class="cards-section">
    <div class="book-card-wrapper" v-for="book in data">
        <div class="book-card-content">
            <div class="book-card-img-wrapper">
                <img class="book-card-img" src="https://ubscan.co.nz/wp-content/uploads/9781681888866-1.jpg" alt="book_cover">
            </div>
            <div class="title-favourite">
                <h3 class="title">{{ data.postTitle }}</h3>
                <img src="../assets/images/favourite-icon.svg" alt="">
            </div>
            <div class="book-info">
                <h4>{{ data.author }}</h4>
                <h4>{{ data.category }}</h4>
                <h4>{{ data.condition }}</h4>
                <h2 class="book-price"><span>$</span>{{ data.price }}</h2>
            </div>
            <button class="tertiary_button" id="button-full-width">Add to Basket</button>
        </div>
    </div>
  </section>

{{ data.postTitle }}

  <h1 class="main-h1-title">Popular Categories</h1>
  <section class="popular-categories-section">
    <PopularCategories />
  </section>

  <section class="wide-image-section">
    <WideImage />
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
    margin: auto 6%;
  }

  .popular-categories-section{
    display: flex;
    justify-content: center;
    
  }




  /* CARD STYLE */
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

<script>
    import bookJson from '../TestData.json'

    export default {
      data(){
          return{
              data: bookJson
          }
      },


    }
</script>






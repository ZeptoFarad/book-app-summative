<template>
    <swiper-container id="container" 
      :slides-per-view="3"
      :space-between="spaceBetween"
      :centered-slides="true"
      :pagination="{
        hideOnClick: true
      }"
      :breakpoints="{
        768: {
          slidesPerView: 3,
        },
      }"
      @progress="onProgress"
      @slidechange="onSlideChange"
    >
      <swiper-slide v-for="slide in slides" class="img-wrapper">
        <img :src="slide.img" alt="">
      </swiper-slide>
    </swiper-container>
  </template>
  
   <script>
    export default {
      data(){
        return{
          slides:[
            {
              img: 'https://www.briscoes.co.nz/globalassets/productimages/briscoes/1103657001/1103657001_default_1.jpg/CatalogContentDetails-1282347-600-600-75-0,0'
            },
  
            {
              img: 'https://www.briscoes.co.nz/globalassets/productimages/briscoes/1086865_00/1086865_00_default_1.jpg/CatalogContentDetails-179331-600-600-75-0,0'
            },
  
            {
              img: 'https://www.briscoes.co.nz/globalassets/productimages/briscoes/1091600_00/1091600_00_default_1.jpg/CatalogContentDetails-630170-600-600-75-0,0'
            }
          ]
        }
      },
  
      methods: {
        setup(){
          const spaceBetween = 10;
          const onProgress = (e) => {
          const [swiper, progress] = e.detail;
          console.log(progress)
        };
  
          const onSlideChange = (e) => {
          console.log('slide changed')
        }
  
          return {
            spaceBetween,
            onProgress,
            onSlideChange,
          };
        }
      },
    }
    
  </script>
  
  <style scoped>
    #container{
      max-width: 1400px;
    }
    
    .img-wrapper{
      width: 800px;
      height: 300px;
    }
    img{
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  </style>
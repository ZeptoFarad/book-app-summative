<template>
    <swiper-container 
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
              img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/681px-Placeholder_view_vector.svg.png'
            },
  
            {
              img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/681px-Placeholder_view_vector.svg.png'
            },
  
            {
              img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/681px-Placeholder_view_vector.svg.png'
            },

            {
              img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/681px-Placeholder_view_vector.svg.png'
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
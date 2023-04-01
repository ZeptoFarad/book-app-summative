<script setup>
 import HeaderVue from './assets/components/header.vue'
 import bookcards from './assets/components/bookcards.vue'
 import footerVue from './assets/components/footer.vue'
</script>


<template>
  <div class="home-box">
     <div class="header-area">
     <HeaderVue />
     </div>
     <div class="body-arae">
     <bookcards />
     </div>
     <div class="footer-area">
     <footerVue />
     </div>
  
  </div>
</template>
<style scoped>
  .home-box{
    display: grid;
    grid-template-rows: auto 1fr auto;
    min-height: 100vh;
    background-color:rgba(254, 248, 243, 1) ;
  }

</style>

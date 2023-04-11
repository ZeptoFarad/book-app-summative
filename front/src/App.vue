<script setup>
  import Header from './components/Header.vue'
  import Footer from './components/Footer.vue'
  
</script>

<template>
  <div>
    <Header />
  </div>
  <div>
   <router-view></router-view>
  </div>

  <Footer />
</template>


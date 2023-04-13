<script setup>
  import HeaderVue from './components/newHeader.vue';
  import FooterVue from './components/Footer.vue'
</script>


<template>
  <HeaderVue />
    
  <router-view></router-view>
 
  <FooterVue />
</template>







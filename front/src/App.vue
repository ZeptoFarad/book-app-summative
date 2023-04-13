<script setup>
  import HeaderVue from './components/newHeader.vue';
  import FooterVue from './components/Footer.vue'
</script>


<template>
  <HeaderVue />
  <div>
    <router-view></router-view>   
  </div>
  <FooterVue />
</template>






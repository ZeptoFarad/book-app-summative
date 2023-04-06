<script setup>
import headerVue from './components/Header.vue'
import itemAddedCarVue from './components/itemAddedCar.vue';
</script>

<template>
   <div class="header-area">
     <headerVue />
   </div>
  <div class="add-to-car-button">Add to Basket</div>
  <div class="added-item-car">
    <itemAddedCarVue />
  </div>
</template>
<style scoped>
    .add-to-car-button{
      background-color: rgba(62, 26, 9, 1);
      width: fit-content;
      margin: 10px;
      padding: 10px 20px;
      color: white;
      border-radius: 8px;
    }
</style>


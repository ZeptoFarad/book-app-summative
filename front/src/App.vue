<script setup>
  import HeaderVue from './components/newHeader.vue';
  // import LoginVue from './components/LoginModal.vue'
</script>

<template>
  <HeaderVue />

  <div class="login-modal">
    <!-- <LoginVue /> -->
  </div>
  <div>
    <router-view></router-view>
  </div>

</template>


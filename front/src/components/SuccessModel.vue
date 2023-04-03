<template>
  <main>
    <div class="background_div">
      <div class="model_body">
        <div class="image_wrapper">
          <img src="../assets/images/smileyface.svg" alt="Smiley Face" />
        </div>
        <h1>Success!</h1>
        <h3>Your purchase is complete</h3>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  setup() {
    return {};
  }
};
</script>

<style scoped>
main {
  position: relative;
}
.background_div {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  height: 100vh;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 2;
}
.model_body {
  display: flex;
  border-radius: 10px;
  margin: 0 auto;
  height: 521px;
  width: 820px;
  background-color: var(--book_wheat, wheat);
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

h1 {
  margin-bottom: 2rem;
}

@media screen and (max-width: 820px) {
  .model_body {
    border-radius: 0px;
  }
}
</style>

<template>
  <div class="book-card-wrapper">
    <div class="book-card-content">
      <div class="book-card-img-wrapper">
        <img
          class="book-card-img"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/681px-Placeholder_view_vector.svg.png"
          alt="book_cover"
        />
      </div>
      <div class="title-favourite">
        <h3 class="title">{{ Book.postTitle }}</h3>
        <img src="../assets/images/favourite-icon.svg" alt="" />
      </div>
      <div class="book-info">
        <h4>{{ Book.author }}</h4>
        <h4>{{ Book.category }}</h4>
        <h4>{{ Book.condition }}</h4>
        <h2 class="book-price"><span>$</span>{{ Book.price }}</h2>
      </div>
      <button class="tertiary_button" id="button-full-width">
        Add to Basket
      </button>
    </div>
  </div>
</template>

<style scoped>
.book-card-wrapper {
  background-color: white;
  width: 272px;
  height: 519px;
  border: 2px solid var(--book_brown);
  border-radius: 10px;
  display: flex;
  justify-content: center;
}

.book-card-content {
  max-width: 234px;
  padding: 20px;
}

.title-favourite {
  display: flex;
  padding: 12px 0;
}

.title {
  width: 250px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: clamp(16px, 3vw, 24px);
}
.book-card-img-wrapper {
  width: 229px;
  height: 231px;
}

.book-card-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
}

.book-info {
  display: flex;
  flex-direction: column;
}
.book-info > * {
  padding-bottom: 8px;
}

.book-price {
  padding: 15px 0;
  align-self: flex-end;
}

#button-full-width {
  width: 100%;
}
</style>

<script setup>
defineProps({
  Book: {
    type: Object,
    required: true
  }
});
</script>

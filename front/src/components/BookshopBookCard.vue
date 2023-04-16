<template>
  <div>
    <div class="book-card-wrapper">
      <div class="book-card-content">
        <div class="book-card-img-wrapper">
          <img
            class="book-card-img"
            src="https://ubscan.co.nz/wp-content/uploads/9781681888866-1.jpg"
            alt="book_cover"
          />
        </div>
        <div class="title-favourite">
          <h3 class="title">{{ bookData.postTitle }}</h3>
          <img src="../assets/images/favourite-icon.svg" alt="" />
        </div>
        <div class="book-info">
          <h4>{{ bookData.author }}</h4>
          <h4>{{ bookData.category }}</h4>
          <h4>{{ bookData.condition }}</h4>
          <h2 class="book-price"><span>$</span>{{ bookData.price }}</h2>
        </div>

        <button class="tertiary_button" id="button-full-width">
          View Listing
        </button>
      </div>
    </div>
    <div class="edit_delete">
      <h3 id="delete" @click="deleteListing(bookData._id)">Delete</h3>
      <h3>|</h3>
      <h3 id="edit">Edit</h3>
    </div>
  </div>
</template>

<style scoped>
#delete {
  color: red;
}

.book-card-wrapper {
  background-color: white;
  border: 2px solid var(--book_brown);
  border-radius: 10px;
}
.edit_delete {
  display: flex;
  justify-content: space-around;
  padding-top: 0.5rem;
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

<script>
export default {
  props: ["bookData"],
  return() {},
  methods: {
    async deleteListing(id) {
      const deletedbook = await fetch("http://localhost:3000/deletebook", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ _id: id })
      });
      console.log(deletedbook.body);
      this.$emit("RefreshState");
    }
  }
};
</script>

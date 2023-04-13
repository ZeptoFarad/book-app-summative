<template>
    {{ books_by_category}}
</template>

<style scoped>

</style>

<script>
    export default {
        data(){
            return{
                bookCategory: '',
                books_by_category: []
            }
        },

        methods: {
            // FUNCTION TO RECEIVE LOCAL STORAGE CATEGORY STARTS
            received_book_category(){
                this.bookCategory = localStorage.getItem('book_category_passed_data')
                console.log(this.bookCategory);
                this.fetch_book_by_category()
            },
            // FUNCTION TO RECEIVE LOCAL STORAGE CATEGORY ENDS

            // FUNCTION TO FETCH BOOKS BY STORED CATEGORY STARTS
            async fetch_book_by_category(){ 
                const response = await fetch('http://localhost:3000/getbycategory/' + this.bookCategory);
                const mycategory = await response.json();
                console.log(mycategory);
                this.books_by_category = mycategory;
            }
            // FUNCTION TO FETCH BOOKS BY STORED CATEGORY ENDS
        },

        created(){
            this.received_book_category()
        }

    }
</script>
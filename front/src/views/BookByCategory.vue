<template>
    <div>
        
    </div>
</template>

<style scoped>

</style>

<script>
    export default {
        data(){
            return{
                bookCategory: '',
                single_book:{

                }
            }
        },

        methods: {
            // FUNCTION TO RECEIVE LOCAL STORAGE CATEGORY STARTS
            received_book_category(){
                this.bookCategory = localStorage.getItem('book_category_passed_data')
                console.log(this.bookCategory);
            },
            // FUNCTION TO RECEIVE LOCAL STORAGE CATEGORY ENDS

            // FUNCTION TO FETCH BOOKS BY STORED CATEGORY STARTS
            async fetch_book_by_category(){ 
                const response = await fetch('http://localhost:3000/getbycategory/' + this.bookCategory);
                const mybook = await response.json();
                console.log(mybook);
                this.single_book = mybook;
            }
            // FUNCTION TO FETCH BOOKS BY STORED CATEGORY ENDS

                //Fetch book category function start
            // async fetch_category(){
            //   const response = await fetch ('http://localhost:3000//getbycategory/:id')
            //   const received_category = await response.json();
            //   this.book_categories = received_category;
            //   console.log(this.book_categories);
            // }

            // on_click_local_storage_category(categoryID){
            //   localStorage.setItem('category_received', categoryID)
            //   console.log(categoryID);
            // }
        },

        created(){
            this.received_book_category()
        }

    }
</script>
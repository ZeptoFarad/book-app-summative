

<template>
    <div class="popular-categories-wrapper">
        <div class="single-category-wrapper" 
        v-for="category in popular_categories" @click="send_category_to_parent(category.db_category)">
            <div class="category">
                <div class="icon-wrapper">
                    <img :src="category.img" alt="">
                </div>
            </div>
            <h3 class="category-title" >{{ category.category_name }}</h3>
        </div>
    </div>
</template>

<style scoped>
    .popular-categories-wrapper{
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
        gap: 3vw;
        padding-bottom: 50px;
    }

    .single-category-wrapper{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        flex: 1;
        min-width: 240px;
    }

    .category{
        background-color: var(--book_wheat);
        border-radius: 50%;
        width: 14vw;
        position: relative;
        aspect-ratio: 1/1;
        margin-bottom: 25px;
    }

    .icon-wrapper{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    img{
        width: 100%;
        height: 100%;
        object-fit: fill;
    }

    .category-title{
        font-size: clamp(20px, 3vw, 30px);
        color: var(--book_brown)
    }

    @media (max-width: 1100px){

        .single-category-wrapper{
            min-width: 200px;
        }
        .category{
            width: 25vw;
        }

    }
</style>

<script>
    import ThrillerIcon from '../assets/images/thriller-icon.svg'
    import ScifiIcon from '../assets/images/scifi-icon.svg'
    import RomanceIcon from '../assets/images/romance-icon.svg'
    import ChildrenIcon from '../assets/images/kids-icon.svg'
    export default {
        data(){
            return{
                // ARRAY TO POPULATE CATEGORY DIV STARTS
                popular_categories:[
                    {
                        category_name:'Thriller',
                        img: ThrillerIcon,
                        db_category:'800 - Thriller'
                       
                    },
                    {
                        category_name:'Scifi',
                        img: ScifiIcon,
                        db_category:'800 - Scifi'
                        
                    },
                    {
                        category_name:'Romance',
                        img: RomanceIcon,
                        db_category:'800 - Romance'
                        
                    },
                    {
                        category_name:'Children',
                        img: ChildrenIcon,
                        db_category:'800 - Children'
                        
                    },
                ]
                // ARRAY TO POPULATE CATEGORY DIV ENDS
            }
        },

        methods: {
            // FUNCTION TO LOCAL STORAGE CATEGORY AND ROUTER TO BOOK BY CATEGORY PAGE STARTS
            send_category_to_parent(categoryName){
                localStorage.setItem('book_category_passed_data', categoryName)
                this.$router.push('/bookbycategory')
            }
            // FUNCTION TO LOCAL STORAGE CATEGORY AND ROUTER TO BOOK BY CATEGORY PAGE ENDS
        },

        created() {
            // this.send_category_to_parent();
        },
    }
</script>
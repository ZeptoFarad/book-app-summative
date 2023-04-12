<template>
    <div class="header-box1">
        <div class="book-logo">
            <img src="../assets/images/headerlogo1.svg" alt="" srcset="">
            
        </div>
        <input type="text" placeholder="please enter your search book name or author name" class="search-box1">
        <div class="primary_button">My Account</div>
        <div class="secondary_button">Sign Up</div>
        <div class="header-manu-logo">
            <img src="../assets/images/manu.svg" alt="" srcset="">
        </div>
        <div class="shopping-car">
           <div class="basket">
             <img src="../assets/images/basket.svg" alt="" srcset="">
             
            <!-- <img src="../assets/images/basket.svg" alt="" srcset=""> -->
           </div>
           <p class="increat-item">{{ amount }}</p>
        </div>
    </div>
    <div class="header-box2">
       <h5 class="header-box2-catle" @click="show_on = !show_on">Shop by catergory</h5>
       <input type="text" placeholder="please enter your search book name or author name" class="search-box2">
    </div>
    <div class="drop-box-skin" v-if="show_on">
       <hr class="head-line"  />
       <div class="drop-box-body">
       
            <div class="categorie-box-skin">
                <p>TOP CATEGORIES</p>
                    <ul class="categorie-box">
                    <li v-for="top_cat in  top_cate">{{ top_cat }}</li>
                    </ul>
            </div>
            <div class="categorie-box-skin">
                <p>MORE CATEGORIES</p>
                    <ul class="categorie-box">
                    <li v-for="more_cate in more_cates">{{ more_cate }}</li>
                    </ul>
            </div>
            <div class="categorie-box-skin">
                <p>TOP AUTHORS</p>
                    <ul class="categorie-box">
                    <li v-for="top_author in  top_authors">{{ top_author }}</li>
                    </ul>
            </div>
            <div class="categorie-box-skin">
                <p>TOP SELLERS</p>
                    <ul class="categorie-box">
                    <li v-for="top_seler in top_sellers">{{ top_seler }}</li>
                    </ul>
            </div>
        </div>
    </div>
    
</template>

<style scoped>
   .header-box2-catle{
        cursor: pointer;
    }
    .drop-box-skin{
        background-color: white;
        border-radius: 0px 0px 8px 8px;
        max-height: 250px;
        position: fixed;
    }
    .drop-box-body{
        display: flex;
        justify-content: space-around;
        padding: 35px;
        gap: 5px;
        font-family: 'Quicksand_SemiBold';
    }
    .categorie-box-skin{
        display: grid;
        grid-template-columns: auto;
        gap: 6px;
    }
    .categorie-box-skin p{
        font-family: Quicksand;
        margin-bottom: 10px;
        font-size: 12px;
        font-weight: bold;
        margin: 0px;
        padding: 3px;
    }
    .categorie-box{
        display:flex;
        flex-wrap: wrap;
        gap: 5px;
        max-height: 200px;
        min-width: 100px;
    }
    li{padding: 4px; font-size: 12px; cursor: pointer;}
    .head-line{ margin: 0px; border: 2.5px solid #feb000 ;}

    #logo1{ height: 60px;
        padding: 5px 5px 5px 0px;
    }
    #logo2{
        height:13px;
    }
    .book-logo{
        flex: 3.5;
        margin-left: 12px;
        margin-top: 6px;
        margin-bottom: 5px;
        cursor: pointer;
        padding-left: 13px;
    }
    .header-box1{
        background-color:rgba(62, 26, 9, 1) ;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding:6px 10px 0px 2px;
        margin: 0px;
       
    }
    .header-manu-logo{
        display: none;
    }
    .primary_button{
        /* padding: 13px 10px 0px 10px;  */
       margin-right: 5px;
       margin-left: 20px;
    }
    .secondary_button{
         padding: 0px 15px 0px 15px; 
        margin-left: 10px;
        margin-right: 5px;
    }
    
    .shopping-car{
        display: flex;
        align-items: center;
        flex: 0.5;
        cursor: pointer;
    }
    .increat-item{
        color:white;
        padding: 4px 0px 0px 0px; 
        font-size: 10px;

    }
    .search-box1{
        border: 2px solid rgb(43, 60, 7);
        padding: 3px;
        margin: 5px 15px 5px 20px;
        border-radius: 4px;
        flex: 7;
    }
   .header-box2{
        background-color:rgba(228, 205, 179, 1) ;
        margin: 0px;
        padding: 6px 6px 10px 17px;
        color:rgba(62, 26, 9, 1) ;
     
    
    }
    .search-box2{display: none;}


@media screen and (max-width:661px){

    .drop-box-skin{display: none;}
    .header-box1{display: flex; }
    #logo1{height:65px; padding: 0px; }
    .search-box1{ display: none;}
    .primary_button{ display: none;}
    .secondary_button{ display: none;}
    .shopping-car{ display:none;}
    .header-manu-logo{ 
        margin-right: 6px;
        display: block;
    }
    .header-box2-catle{
        display: none;
    }
    .search-box2{
    display: block;
        margin: 13px auto;
        padding: 12px 20px ;
        width: 60vw;
        text-align: end;
        border-radius: 6px;
        border: 1px solid whitesmoke;
    }
    .book-logo{
        flex: 3.5;
        margin-left: 0px;
        margin-top: 6px;
        margin-bottom: 5px;
        cursor: pointer;
        padding-left: 13px;
    }
}

</style>

<script>
   export default {
     data(){
        return{
            amount:0,
            top_cate:['Top categorie 1', 'Top categorie 2','Top categorie 3','Top categorie 4','Top categorie 5'],
            more_cates:['More categorie 1', 'More categorie 2','More categorie 3','More categorie 4','More categorie 5','More categorie 6', 'More categorie 7','More categorie 8','More categorie 9','More categorie 10'],
            top_authors:['Top_authors 1','Top_authors 2', 'Top_authors 3','Top_authors 4','Top_authors 5','Top_authors 6','Top_authors 7', 'Top_authors 8','Top_authors 9','Top_authors 10'],
            top_sellers:['Top seller book 1','Top seller book 2', 'Top seller book 3','Top seller book 4','Top seller book 5',],
            show_on:false
        }

     }
     
   }
</script>

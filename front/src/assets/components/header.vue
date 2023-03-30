<template>
    <div class="header-box1">
        <img src="" alt="" height="70px" width="100px">
        <input type="text" placeholder="please enter your search book name or author name" class="search-box">
        <h5 class="account-btn">My Account</h5>
        <h5 class="sign-btn">Sign Up</h5>
        <div class="shopping-car">
           <img src="./img/logo2.png" alt="" height="12px" width="9px">
           <p class="increat-item">0</p>
        </div>
    </div>
    <div>
       <h5 class="header-box2">Shop by catergory</h5>
    </div>
    
</template>
<style scoped>
    .header-box1{
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding:6px 10px 0px 2px;
        border: 1px solid rgb(43, 60, 7);
        min-width:480px;
        margin: 0px;
    }
    .shopping-car{
        display: flex;
        align-items: center;
    }
    .increat-item{
        font-size: 12px;
    }
    .search-box{
        border: 2px solid rgb(43, 60, 7);
        padding: 3px;
        margin: 5px;
        border-radius: 6px;
        min-width: 150px;
    }
    .account-btn{
        background-color: rgb(255, 221, 0);
        padding: 5px;
        margin:5px;
        border-radius: 6px;
        min-width: 70px;
    }
    .sign-btn{
        background-color: rgb(43, 60, 7);
        color: white;
        padding: 5px;
        margin: 5px;
        border-radius: 6px;
        min-width: 46px;
    }
    .header-box2{
        background-color: rgb(43, 60, 7);
        margin: 0px;
        padding: 6px 6px 10px 17px;
        color: white;
    }

</style>
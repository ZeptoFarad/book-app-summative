<template>
    <div class="item-added-box">
       <div class="grey-back-gd"></div>
       <div class="item-added-content">
           <div class="item-added-text">
             <p>YOUR ITEM WAS ADDED TO </p>
             <p>YOUR CART!</p>
             <h3>What do you want to do next?</h3>
           </div>
           <div class="item-added-buttons" >
            <div class="continu-shopping-button">Continue shopping</div>
            <div class="checkout-button">Go to checkout</div>
           </div> 
       </div>
    </div>
</template>
<style scoped>
    .item-added-buttons{
        display: flex;
        justify-content: center;
        margin:18px;
    }
    .continu-shopping-button{
        background-color: rgba(62, 26, 9, 1);
        color: white;
        margin: 5px;
        padding: 9px;
        border-radius: 8px;
    }
    .checkout-button{
        background-color: #feb000;
        color:black;
        margin: 5px;
        padding: 9px;
        border-radius: 8px;
    }

    .item-added-box{
        position: fixed;
        text-align: center;
        top: 39%; bottom: 25%; left: 15%; right: 15%;
        border: 1px solid rgba(62, 26, 9, 1);
        width: fit-content;
        padding: 25px;
        z-index: 10;
    }
    .item-added-box p{
        color:rgba(62, 26, 9, 1) ;
        font-weight: bold;
        font-style: Amatic SC;
        font-size: 30px;
        margin: 21px;
    }
</style>
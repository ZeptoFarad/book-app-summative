<template>
    <div class="item-added-box">
       
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
       <div class="grey-back-gd"></div>
    </div>
</template>
<style scoped>
@media screen and (max-width:1440px){
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
        cursor: pointer;
    }
    .checkout-button{
        background-color: #feb000;
        color:black;
        margin: 5px;
        padding: 9px;
        border-radius: 8px;
        cursor: pointer;
    }
    .grey-back-gd{
        background-color: rgba(0, 0, 0, 0.3);
        position: fixed;
        top: 0; bottom: 0; left: 0; right: 0;
        z-index: 9;
        display: none;
    }
    .item-added-content{
        position: fixed;
        text-align: center;
        top: 37%; bottom: 30%; left: 16%; right: 16%;
        border: 1px solid rgba(62, 26, 9, 1);
        width: fit-content;
        padding: 25px;
        z-index: 10;
        background-color: white;
    }
    .item-added-box p{
        color:rgba(62, 26, 9, 1) ;
        font-weight: bold;
        font-style: Amatic SC;
        font-size: 30px;
        margin: 21px;
    }
}
@media screen and (max-width:610px){
    .item-added-content{
        position: fixed;
        text-align: center;
        top: 40%; bottom: 31%; left: 15%; right: 15%;
        border: 1px solid rgba(62, 26, 9, 1);
        width: fit-content;
        padding: 20px;
        z-index: 10;
        background-color: white;
    }
    .item-added-box p{
        color:rgba(62, 26, 9, 1) ;
        font-weight: bold;
        font-style: Amatic SC;
        font-size: 20px;
        margin: 21px;
    }
    .continu-shopping-button{
        background-color: rgba(62, 26, 9, 1);
        color: white;
        margin: 5px;
        padding: 9px;
        border-radius: 8px;
        cursor: pointer;
        font-size: 14px;
    }
    .checkout-button{
        background-color: #feb000;
        color:black;
        margin: 5px;
        padding: 9px;
        border-radius: 8px;
        cursor: pointer;
        font-size: 14px;
    }
}
</style>
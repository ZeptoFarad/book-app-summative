<template>
    <div class="item-added-box">
       
       <div class="item-added-content">
           <div class="item-added-text">
             <h1>YOUR ITEM WAS ADDED TO </h1>
             <h1>YOUR CART!</h1>
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
        margin:10px;
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
        top: 37%; left:32%; right: 32%;
        border: 1px solid rgba(62, 26, 9, 1);
        padding: 25px;
        z-index: 10;
        width: fit-content;
        background-color: white;
        height: fit-content;
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
        top: 37%;  right:13%; left: 13%;
        border: 1px solid rgba(62, 26, 9, 1);
        width:fit-content;
        height: fit-content;
        padding: 20px;
        z-index: 10;
        background-color: white;
    }
    .item-added-box p{
        color:rgba(62, 26, 9, 1) ;
        font-weight: bold;
        font-family: 'Courier New', Courier, monospace;
        font-size: 23px;
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
@media screen and (max-width:1000px){
    .item-added-content{
        position: fixed;
        text-align: center;
        top: 37%;  right:13%; left: 13%;
        border: 1px solid rgba(62, 26, 9, 1);
        width:fit-content;
        height: fit-content;
        padding: 25px;
        z-index: 10;
        background-color: white;
    }
}
@media screen and (max-width:900px){
    .item-added-content{
        position: fixed;
        text-align: center;
        top: 37%;  right:13%; left: 13%;
        border: 1px solid rgba(62, 26, 9, 1);
        width:fit-content;
        height: fit-content;
        padding: 25px;
        z-index: 10;
        background-color: white;
    }
}
@media screen and (max-width:320px){
    .item-added-content{
        position: fixed;
        text-align: center;
        top: 37%;  right:10.5%; left: 11%;
        border: 1px solid rgba(62, 26, 9, 1);
        width:fit-content;
        height: fit-content;
        padding: 29px 6px 23px 6px;
        z-index: 10;
        background-color: white;
    }
    .item-added-content h1{
           font-size:32px ;
           font-weight:600 ;
           color:rgba(62, 26, 9, 1 );
        }
        .continu-shopping-button{
        background-color: rgba(62, 26, 9, 1);
        color: white;
        margin-right: 5px;
        padding: 7px;
        border-radius: 8px;
        cursor: pointer;
        font-size: 12px;
    }
    .checkout-button{
        background-color: #feb000;
        color:black;
        padding: 7px;
        border-radius: 8px;
        cursor: pointer;
        font-size: 12px;
    }    
    .item-added-buttons{
        display: flex;
        justify-content: center;
        margin:3px;
    }      
    .item-added-content h3{
          margin-top: 5px;
          margin-bottom: 5px;
        }
}
</style>
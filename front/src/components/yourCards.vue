<template>
    <div class="your-card-box">
        <h1>YOUR CART</h1>
        <div class="box-skin">
           <div class="box-information">
              <div class="card-pic-right">
                    <div class="card-pic">
                    <img src="../assets/images/YoCardImg.jpg" alt="" height="190px">
                    </div>
                    <div class="card-information">
                    <h2>Title</h2>
                    <h5>Author</h5>
                    <h5 class="take-away1">Category</h5>
                    <h5 class="take-away1">Condition</h5>
                    <h2 class="add-in1">$25</h2>
                    
                    </div>
              </div>
              <div class="price-part">
                  <div>
                    <h2 class="take-away1">$25</h2>
                    <div class="space"></div>
                  </div>
                    
                    
                    <div class="button-skin">
                        <h3 class="remove-button">
                        Remove
                        </h3>
                        <div class="space"></div>
                    </div>
                </div>
              
            </div>
           <div class="box-payment style3">
               <h3>You have 1 item in your cart:</h3>
               <div class="item-price-box">
                  <h4 class="item-name">Item</h4>
                  <h4 class="price1">$25</h4>
               </div>
               <div class="item-price-box">
                  <h4 class="item-name">Delevery</h4>
                  <h4 class="price1">$5</h4>
                </div>
               <div class="item-price-box">
                  <h4 class="item-name1">Total</h4>
                  <h4 class="price">$30</h4>
               </div>
               <h3 class="checkout-button">CHECKOUT</h3>
           </div>
        </div>
        <div class="box-payment2 style4">
               <h3>You have 1 item in your cart:</h3>
               <div class="item-price-box">
                  <h4 class="item-name">Item</h4>
                  <h4 class="price1">$25</h4>
               </div>
               <div class="item-price-box">
                  <h4 class="item-name">Delevery</h4>
                  <h4 class="price1">$5</h4>
               </div>
               <div class="item-price-box">
                  <h4 class="item-name1">Total</h4>
                  <h4 class="price">$30</h4>
               </div>
               <div class="checkout-button">CHECKOUT</div>
           </div>
    
    </div>
    
</template>
<style scoped>
.style4{ display:none}
.style-button{
    display: none;
}
    .add-in1{display: none;}
    .box-information{
        display: flex;
        justify-content: space-between;
        width: 53vw;
        background-color: rgba(228, 205, 179, 1);
        margin-left: 8%;
        margin-top: 5%;
        border-radius: 8px;
        
    }
    .card-pic-right{
        display: flex;
        margin: 15px;
    }
    .card-information{
        margin-left: 10px;
    }
    .card-pic img{
        border-radius: 10px;
    }
    .remove-button{
        background-color:rgba(62, 26, 9, 1) ;
        color: whitesmoke;
        width: fit-content;
        padding: 5px 10px 5px 10px;
        border-radius: 5px;
        margin-bottom: 15px;
        font-family: Quick;
    }
    .price-part{
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      
    }
    .price-part h2{
        padding-top: 15px;
        text-align: end;
        padding-right: 5px;
    }
    .button-skin{
        display: flex;
    }
    .space{
        width: 15px;
    }
    .box-payment{
        width:20vw;
        background-color: white;
        margin-right:8%;
        margin-top: 5%;
        border-radius: 8px;
        padding: 25px 25px 0px 25px;
        border: 1px solid rgba(62, 26, 9, 1) ;

    }
    .box-skin{
        display: flex;
        justify-content: space-between;
    }
    .item-price-box{
        display: flex;
        justify-content: space-between;
        margin-top: 12px;
        margin-bottom: 5px;
    }
    .checkout-button{
        background-color: rgba(254, 176, 0, 1);
        width: fit-content;
        margin: 9px auto;
        padding: 10px;
        border-radius: 8px;
    }
    .price1{ padding-right: 30px;}
    .price{ color: red; padding-right: 30px;}
    .item-name1{color: red;}
    h1{margin-left:8%; margin-top:100px;}



    @media screen and (max-width:690px){
        h1{
            margin-left: 31%;
        }
        .box-information{
        display: flex;
        justify-content: space-between;
        width: fit-content;
        background-color: rgba(228, 205, 179, 1);
        margin-left: 16%;
        margin-right: 19%;
        margin-top: 5%;
        border-radius: 8px;
        }
        .box-payment{
        width: fit-content;
        background-color: white;
        margin-right:12%;
        margin-top: 5%;
        border-radius: 8px;
        padding: 25px 25px 0px 25px;
        border: 1px solid rgba(62, 26, 9, 1) ;
        }
       .style3{display: none;}
      .style4{
        display: block;
       }
      .box-payment2{
        width: fit-content;
        background-color: white;
        margin-left:23%;
        margin-right: 20%;
        margin-top: 3%;
        border-radius: 8px;
        padding: 25px 25px 0px 25px;
        border: 1px solid rgba(62, 26, 9, 1) ;
        }
        .card-pic img{
            height: 150px;
        }
    }
    @media screen and (max-width:448px){
        .box-information{
        display: flex;
        justify-content: space-between;
        background-color: rgba(228, 205, 179, 1);
        width: 100vw;
        margin-left: 0px;
        margin-right: 1px;
        border-radius: 1px;
        }
        /* .box-payment{
        width: 45%;
        background-color: white;
        margin-right:12%;
        margin-top: 5%;
        border-radius: 8px;
        padding: 25px 25px 0px 25px;
        border: 1px solid rgba(62, 26, 9, 1) ;
        } */
       .style3{display: none;}
      .style4{
        display: block;
       }
      .box-payment2{
        width:82%;
        margin-left: 0.5%;
        margin-right: 0.1%;
        background-color: white;
        margin-top: 3%;
        border-radius: 8px;
        padding: 25px 25px 0px 25px;
        border: 1px solid rgba(62, 26, 9, 1) ;
        text-align: center;
        }
        .card-pic img{
            height: 100px;
        }
        .take-away1{
            display: none;
        }
        .style-button1{
            display: none;
        }
        .style-button{
            display: block;
        }
        h1{
             margin-left: 25%;
            margin-top:60px;}
        .add-in1{
            display: block;
        }
        
        .item-price-box{ padding: 10px 10px 10px 24px;}
    }
</style>



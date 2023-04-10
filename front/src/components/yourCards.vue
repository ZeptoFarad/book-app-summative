<template>
    <div class="your-card-box">
        <h1>YOUR CART</h1>
        <div class="box-skin">
           <div class="box-information">
              <div class="card-pic-right">
                    <div class="card-pic">
                    <img src="../assets/images/YoCardImg.jpg" alt="" height="210px">
                    </div>
                    <div class="card-information">
                    <h2>Title</h2>
                    <h5>Author</h5>
                    <h5>Category</h5>
                    <h5>Condition</h5>
                    </div>
              </div>
              <div class="price-part">
                    <h2>$25</h2>
                    <div class="button-skin">
                        <div class="remove-button">
                        Remove
                        </div>
                        <div class="space"></div>
                    </div>
                </div>
              
            </div>
           <div class="box-payment">
           
           </div>
        </div>
    
    </div>
    
</template>
<style scoped>
    .box-information{
        display: flex;
        justify-content: space-between;
        width: 55vw;
        background-color: rgba(228, 205, 179, 1);
        margin-left: 3%;
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
    
</style>



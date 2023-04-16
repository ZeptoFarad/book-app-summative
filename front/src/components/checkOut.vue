<template>
    <div class="check-box-body">
            <h1>CHECKOUT</h1>
                <div class="check-box-skin-out">
                    <div class="check-box-skin">
                        <div class="check-box-long-1">
                            <div class="check-box-short-1">
                               <h6>Choose a shipping option</h6>
                               <input type="text"  placeholder="shipping" class="input-box">
                            </div>
                            <div class="check-box-short-2">
                               <h6>Choose Phone number</h6>
                               <input type="text"  class="input-box" >
                            </div>
                        </div>

                        <div class="check-box-long">
                            <h6>Delivery address </h6>
                            <input type="text"  class="input-box2">
                        </div>

                        <div class="check-box-long">
                            <h6>Email</h6>
                            <input type="text"  class="input-box2">
                        </div>

                        <div class="check-box-long">
                            <h6>Card number</h6>
                            <input type="text"  class="input-box2">
                        </div>
                        <div class="check-box-long-1">
                            <div class="check-box-short-1">
                            <h6>Expiry date</h6>
                            <input type="text"   class="input-box" >
                           </div>

                           <div class="check-box-short-2">
                            <h6>CVV</h6>
                            <input type="text" class="input-box" >
                            </div>
                        </div>
                    </div>
                    <div class="button-box">
                        <div class="button-Cancel">Cancel</div>
                        <div class="button-buy-now">Buy now</div>
                    </div>
                
                </div>
                    

        </div>
</template>
<style scoped>
     .button-box{
        width:54vw;
        margin: 5px;
        display: flex;
        justify-content: space-between;
        margin-left: 5vw;
        margin-top: 50px;
    }
    .button-Cancel{background-color: aliceblue; 
        padding: 3px 10px 3px 10px;  
        border-radius: 6px;  border: 0.5px solid grey; }
    .button-buy-now{background-color:rgba(62, 26, 9, 1) ; 
        padding: 3px 10px 3px 10px;  
        border-radius: 6px;  border: 0.5px solid grey; color: aliceblue; }
    h1{margin-left: 15vw;
    margin-top: 2vh;
     font-family: Amatic SC;
     font-size: 64px;
     font-weight: bold ;
}
    .check-box-skin-out{
        margin-left: 15vw;
        margin-top: 0px;
        background-color: bisque;
        width:64vw ;
        padding-bottom: 5vw;
        font-family: Quicksand;
    }
    .check-box-short-1{margin-right: 1vw; width: 25vw; }
    .check-box-short-2{margin-left: 1vw; width: 25vw;}
    .input-box{ width: 24vw;  border-radius: 5px; height: 28px; border: 0.5px solid grey;}
    .input-box2{border-radius: 5px; height: 28px; border: 0.5px solid grey; }
  
    .check-box-skin{
        width:64vw ;
        justify-content: center;
        display: flex;
        flex-wrap: wrap;
        padding-left: 0vw;
        padding-right: 0vw;
        padding-top: 5vw;
        margin: 2px auto;
        
    }
    .check-box-long{
        width:55vw;
        margin: 5px;
        
    }
    .check-box-long input{
         width: 54vw;
    }

    .check-box-short{
        width: 23vw;
        margin:5px;
    }
    .check-box-short input{
        width: 23vw;
    }
    .check-box-long-1{
        display: flex;
        justify-content: space-between;
        width: 55vw;
        
    }
   
    @media screen and (max-width:560px){
        .check-box-long-1{
            display: flex;
            flex-direction: column;
            width:55vw;
            margin: 5px;
    }
    .check-box-long-1 input{
        width: 54vw;
    
    }
    .check-box-short-1{
     width: 54vw;
     margin-left: 1px;
     margin-bottom: 12px;
    }
    .check-box-short-2{
        width: 54vw;
        margin-left: 1px;
    }
    .button-box{
        width:54vw;
        margin: 5px;
        display: flex;
        justify-content: space-between;
        margin-left: 5vw;
        margin-top: 22px;
    }
    
    h1{margin-left: 23vw;
    margin-top: 16px;
     font-family: Amatic SC;
     font-size: 40px;
     font-weight: bold ;
    }
   
    .check-box-skin-out{
        margin-top: 20px;
    }
    }

</style>
       
                


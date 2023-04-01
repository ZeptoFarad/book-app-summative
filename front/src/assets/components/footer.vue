<template>

    <div class="footer">
                
                    <div class="footer-section">
                            <div class="footer-box1">
                                <h5>About us</h5>
                                <span>About peekabook</span>
                                <span>Careers</span>
                                <span>Privacy policy</span>
                            </div>
                            <div class="footer-box1">
                                <h5>Shopping online</h5>
                                <span>FAQ'S</span>
                                <span>Delivery information</span>
                                <span>Returns and Exchange</span>
                            </div>
                            <div class="footer-box1">
                                <h5>Contact us</h5>
                            </div>
                    
                
                          <div class="footer-pic">
                              <img src="../img/logo1b.png" alt="" height="60px">
                              <div class="footer-btn-box">
                                  <span class="yellow-box">Sign up</span>
                                  <span  class="white-box">Login</span>
                              </div>
                          </div>
                    </div>
                
                <p class="copy">@2023.Peekabook</p>   
       </div>

    
    
    
</template>
<style scoped>
.footer{
    background-color: rgba(62, 26, 9, 1);
    min-width: 480px;
    padding: 5px;
    align-content: center;
}

  .footer-section{
      display: flex;
   justify-content: space-between;
  }
  .footer-box1{
    padding: 10px;
    text-align: start;
    margin: 7px;
    display: flex;
    flex-direction: column;
    color: white;
  }
  .footer-box1 p{
    font-size: x-small;
    margin: 2px;
  }
  h5{
    margin:2px
  }
  p{
    color: white;
    font-size: x-small;
    text-align: right;
    
  }
  .footer-pic{
    padding:5px 0px 0px 0px;
  }
  .yellow-box{
    background-color:rgb(255, 221, 0) ;
    padding: 5px;
        margin:5px;
        border-radius: 6px;
        width: fit-content;
        
  }
  .white-box{
    background-color: white;
    padding: 5px;
        margin:5px;
        border-radius: 6px;
        width: fit-content;
  }
  span{
    font-size: x-small;
    margin: 1px;
  }
  .footer-btn-box{
    display: flex;
    justify-content: center;
  }
  .copy{
    font-size: xx-small;
    margin-right: 10px;
  }
</style>
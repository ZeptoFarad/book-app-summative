<template>
    <div class="background-modal">
        <div class="welcome-modal">
        <div class="centered-modal-section">
            <div class="img-logo-wrapper">
                <img class= 'logo' src="../assets/images/PeekabookLogo.svg" alt="">
            </div>
            <h1>Welcome to Peekabook</h1>
            <h2>Why are you visiting?</h2>
            <div class="buttons-flex">
                <button class="tertiary_button">Sell Books</button>
                <button class="tertiary_button">Buy Books</button>
            </div>
        </div>
    </div>
    </div>

    
</template>

<style scoped>
    .background-modal{
        background-color: grey;
        height: 100vh;
        
    }
    .welcome-modal{
        height: 521px;
        width: 819px;
        background-color: var(--book_cream);
        border: 2px solid var(--book_brown);
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 10px;
        color: var(--book_brown);
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);

    }

  
    .centered-modal-section{
        display: flex;
        flex-direction: column;
        
        
    }

    .centered-modal-section > * {
        margin-bottom: 15px;
        text-align: center;
    }

    .buttons-flex{
        display: flex;
        justify-content: space-between;
        width: 300px;
        margin: auto; 
       
       
    }

    @media (max-width: 900px){
        
        .welcome-modal{
            width: 90%;
        }
       
        
        h1{
            font-size: clamp()
        }

     
   
      
    }

</style>
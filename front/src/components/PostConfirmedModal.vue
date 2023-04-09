<template>
    <div class="background_div">
        <div class="post_confirmed_modal">
            <div>
                <h1>Congrats!</h1>
                <h1>Your listing <br> is posted</h1>
                <h2>What do you want to do next?</h2>
            </div>
            <div class="buttons">
                <button class="primary_button">List More Books</button>
                <button class="tertiary_button">Browse Books</button>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .post_confirmed_modal {
        background-color: var(--book_cream);
        width: 820px;
        height: 521px;
        border: 2px solid black;
        border-radius: 10px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%
        );
        
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        justify-content: center;
        margin: auto;
    }
    .post_confirmed_modal h1, h2 {
        padding: 10px;
    }
    h1 {
        font-size: clamp(52px, 12vw, 64px);
    }
    .buttons {
        display: flex;
        flex-wrap: wrap;
        gap: 40px;
        padding: 20px;
        justify-content: center;
    }
    .background_div {
        background-color: rgba(0, 0, 0, 0.212);
        height: 100vh;
    }

    @media (max-width: 840px) {
        .post_confirmed_modal   {
            width: 90%;
        }  
    }
    @media (max-width: 410px) {
        .buttons{
            gap: 10px;
        }
    }
</style>
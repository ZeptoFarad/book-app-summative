<template>
    <div class="wide-image-wrapper">
        <div class="bottom-image-wrapper">
            <img src="../assets/images/index-bottom-img.jpeg" alt="open book">
        </div>
        <div class="overlay-text">
            <div class="logo-wrapper">
                <img src="../assets/images/PeekabookLogo_brown.svg" alt="Peekabook Logo">
            </div>
            <h2>Your second hand bookstore</h2>
            <h3>Are you wanting to sell?</h3>
            <button class="primary_button" @click="router_to_sign_up()">Sign Up Now!</button>
        </div>
    </div>
</template>

<style scoped>

    .wide-image-wrapper{
        position: relative;
    }
    .bottom-image-wrapper{
        width: 100%;
        height: 60vh;
    }

    img{
        width: 100%;
        height: 100%;
        object-fit:cover;
        object-position: 50% 95%;
    }
    .overlay-text{
        position: absolute;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        top: 10%;
        left: clamp(30px, 10%, 60px);
        background-color:rgba(254, 248, 243, 0.54);
        color: var(--book_brown);
        padding: 3vw;
        border-radius: 10px;
        height: 30vh;
    }

    h2, h3{
        padding-bottom: 15px;
    }

    @media (max-width: 500px){
        .overlay-text{
           display: none;
        }
        .bottom-image-wrapper{
            height: 35vh;
        }
        img{
            object-fit:contain;
        }
    }
</style>

<script>
    export default {
        methods:{
            router_to_sign_up(){
                this.$router.push('/signup')
            }
        }
    }
</script>
<template>
    <div class="sign-up-page-wrapper">
        <h1>Welcome to Peekabook! Ready to sign up?</h1>
        <div class="div-row-flex">
            <div class="sign-up-form">
                <h2 class="sign-up-title">Sign Up</h2>
                <div class="input-form">
                    <div class="input_box">
                        <label class="" for="username">Username</label>
                        <input class="" id="username" type="text" placeholder="Username" />
                    </div>

                    <div class="input_box">
                        <label class="" for="first_name">First Name</label>
                        <input class="" id="first_name" type="text" placeholder="First name" />
                    </div>

                    <div class="input_box">
                        <label class="" for="last_name">Last Name</label>
                        <input class="" id="last_name" type="text" placeholder="Last Name" />
                    </div>

                    <div class="input_box">
                        <label class="" for="email">Email</label>
                        <input class="" id="email" type="text" placeholder="Email" />
                    </div>

                    <div class="input_box">
                        <label class="" for="password">Password</label>
                        <input class="" id="password" type="text" placeholder="Password" />
                    </div>

                    <div class="input_box">
                        <label class="" for="confirm_pass">Confirm Password</label>
                        <input class="" id="confirm_pass" type="text" placeholder="Confirm Password" />
                    </div>
                </div>
                <button class="tertiary_button">Create your account</button>
            </div>
        

            <div class="sign-up-benefit-wrapper">
                <div class="sign-up-img-wrapper">
                    <img src="../assets/images/sign-up-img.jpeg" alt="" class="sign-up-img">
                </div>
                <div class="benefit-paragraph">
                    <h2 class="h2-title">Enjoy the benefits</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni consequuntur eaque ex aliquam autem totam, iste maxime repudiandae, accusamus fugiat non suscipit delectus ipsum praesentium. Nobis numquam temporibus corporis modi.</p>
                </div>
             
            </div>     
        </div>

    </div>
</template>

<style scoped>
.div-row-flex{
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    max-width: 1400px;
    padding-bottom: 30px;
    margin: auto;
}
h1{
    padding: 50px 9%;
    font-size: clamp(40px, 4vw, 64px);
}
.sign-up-title{
    padding-bottom: 30px;
}
.sign-up-page-wrapper{
    color: var(--book_brown)
}
.sign-up-form{
    width: clamp(400px, 40vw, 550px);
    padding: 50px;
    background-color: var(--book_wheat);
    height: 78vh;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.input-form{
    width: clamp(310px, 50vw, 400px);
}

.sign-up-benefit-wrapper{
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
}

.sign-up-img-wrapper{
    max-width: 35vw;
    width: 26vw;
    height: 40vh;
}

.sign-up-img{
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.benefit-paragraph{
    max-width: 27vw;
    
}
.h2-title{
    padding: 15px 0;
}

@media (max-width: 900px){

    .sign-up-benefit-wrapper{
        display: none;
    }

    .sign-up-form{
        border-radius: 0;
        width: 100%;
    }
}

</style>
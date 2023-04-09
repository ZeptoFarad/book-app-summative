<template>
    <div class="background-modal">
        <div class="login-modal-wrapper">
            <div class="close-modal-icon">
                <img src="../assets/images/cross.svg" alt="">
            </div>
            <div class="modal-centered">
                <h1>Login</h1>
                <div class="input_box">
                    <label class="" for="username">Username</label>
                    <input class="" id="username" type="text" placeholder="Username" />
                </div>
                <div class="input_box">
                    <label class="" for="password">Password</label>
                    <input class="" id="password" type="text" placeholder="Password" />
                </div>
                <button class="tertiary_button">Login</button>
                <h4>Don't have an account?<span class="sign-up">Sign Up</span></h4>
            </div>
        </div>
    </div>
</template>

<style scoped>

    /* main css for login modal */
    .close-modal-icon{
        display: flex;
        justify-content: flex-end;
    }

    .modal-centered{
        display: flex;
        flex-direction: column;
        align-items: center;
        width: clamp(250px, 30vw, 400px);
        margin: auto;
    }

    .modal-centered > *{
        padding-bottom: 10px;
    }
    .background-modal{
        background-color: grey;
        height: 100vh;
    }

    .login-modal-wrapper{
        padding: 10px;
        background-color: var(--book_cream);
        position: absolute;
        /* width: 35vw; */
        width: clamp(300px, 55vw, 550px );
        height: 70vh;
        color: var(--book_brown);
        border: 2px solid var(--book_brown);
        border-radius: 10px;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        display: flex;
        flex-direction: column;
    }

    .sign-up{
        color: red;
        text-decoration: underline;
        font-weight: 900;
        padding-left: 5px;
    }

    .input_box{
        width: 100%;
    }

    /* Input Box Correct  (Import Google Material Icons Required) */

    /* labels for correct input starts */
    label.correct {
        color: green;
    }

    input.correct {
        border: 2px green solid;
    }

    label.correct::after {
        font-family: "Material Icons";
        content: "check";
        font-size: clamp(1.2rem, 0.5vw, 2rem);
        margin-left: 1rem;
        vertical-align: text-bottom;
    }

    /* labels for correct input finish*/

    /* labels for error input starts*/
    label.error {
        color: red;
    }

    input.error {
        border: 2px red solid;
    }

    label.error::after {
        font-family: "Material Icons";
        content: "close";
        font-size: clamp(1.2rem, 0.5vw, 2rem);
        margin-left: 1rem;
        vertical-align: text-bottom;
    }

    /* labels for error input finish*/


</style>
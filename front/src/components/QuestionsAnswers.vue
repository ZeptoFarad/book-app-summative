<template>
    <div class="questions-answers-wrapper">
        <div class="title-flex">
            <h2>Questions</h2>
            <button class="tertiary_button" @click="isHidden = !isHidden">Ask a Question</button>
        </div>

        <div class="question-wrapper">
            <div class="user-question">
                <h3>username</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime, vitae? <span>Reply</span></p>
            </div>

            <div class="seller-answer-wrapper">
                <h3>User</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A, eius?</p>
            </div>
        </div>

        <div class="question-input-wrapper" v-if="isHidden">
            <div class="input_box">
            <label class="" for="question">Enter your question:</label>
            <textarea class="question-box" id="question" type="text" placeholder="Please enter your question in a maximum of 100 characters" maxlength="100" />
            <div class="button-flex-end">
                <button class="primary_button">Submit</button>
            </div>
        </div>

            
        </div>
    </div>
</template>

<style scoped>
    /* Question wrapper style */
    .questions-answers-wrapper{
        background-color: white;
        border: 1px solid var(--book_brown);
        max-width: 1400px;
        border-radius: 10px;
        margin: auto;
        padding: 20px;
    }

    .title-flex{
        display: flex;
        justify-content: space-between;
    }

    .question-wrapper{
        display: flex;
        flex-direction: column;
        border-bottom: 2px solid var(--book_wheat);
    }

    .question-input-wrapper{
        padding: 10px;
        width: clamp(250px, 40vw, 800px);
        background-color: var(--book_wheat);
        border-radius: 10px;
        margin: 10px;
    }
  

    .question-box{
        width: clamp(240px, 40vw, 800px);
        height: 100px;
        font-family: 'Quicksand_Regular';
        margin-bottom: 10px;
        margin: 0;
    }

    .button-flex-end{
        display: flex;
        justify-content: flex-end;
        align-items: center;
    }
    .primary_button{
        width: fit-content;
        margin: 0;
        
    }

    .seller-answer-wrapper{
        background-color: var(--book_wheat);
        padding: 10px;
        width: clamp(300px, 50vw, 600px);
        border-radius: 10px;
        margin-bottom: 10px;
        align-self: flex-end;
    }

    span{
        padding-left: 10px;
        font-size: 18px;
    }
    p{
        font-size: 16px;
    }
</style>

<script>
    export default {
        data(){
            return{
                isHidden: false,
            }
        }
    }
</script>
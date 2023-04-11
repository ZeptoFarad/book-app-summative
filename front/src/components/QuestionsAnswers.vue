<template>
    <div class="questions-answers-wrapper">
        <div class="title-flex">
            <h2>Questions</h2>
            <button class="tertiary_button" @click="isHidden = !isHidden">Ask a Question</button>
        </div>

        <div class="question-wrapper">
            <div class="user-question-wrapper">
                <h3>username</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque fugiat, suscipit autem inventore laudantium dolores officiis asperiores libero, quas voluptas a ullam. Dicta doloremque, magnam dolores quis maxime enim obcaecati ad eligendi, aliquid nemo, commodi inventore asperiores assumenda consectetur eveniet! <span class="reply-button" @click="isHidden = !isHidden">Reply</span></p>
            </div>

            <div class="buyer-answer-wrapper">
                <h3>User</h3>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis, quaerat?</p>
            </div>
        </div>

        <div class="question-input-wrapper" v-if="isHidden">
            <div class="input_box">
            <label class="" for="question">Enter your question/reply:</label>
            <textarea class="question-box" id="question" type="text" placeholder="Please enter your question/reply in a maximum of 100 characters" maxlength="100" />
            <div class="button-flex-end">
                <button class="primary_button">Submit</button>
            </div>
        </div>

            
        </div>
    </div>
</template>

<style scoped>
    /* component wrapper */
    .questions-answers-wrapper{
        background-color: white;
        border: 1px solid var(--book_brown);
        max-width: 1400px;
        border-radius: 10px;
        margin: auto;
        padding: 20px;
    }

    /* Flexing of the title and button */
    .title-flex{
        display: flex;
        justify-content: space-between;
    }

    /* User and seller questions/answer styling */

    .question-wrapper{
        display: flex;
        flex-direction: column;
        border-bottom: 2px solid var(--book_wheat);
        margin-bottom: 20px;
        padding-bottom: 20px;
    }

    .user-question-wrapper{
        padding-bottom: 20px;
        width: clamp(250px, 70vw, 1000px)
    }
    .buyer-answer-wrapper{
        background-color: var(--book_wheat);
        width: clamp(200px, 50vw, 900px);
        padding: 20px;
        align-self: flex-end;
        border-radius: 10px;
    }

    span{
        padding-left: 10px;
        font-size: 18px;
    }
    p{
        font-size: 16px;
    }

    .reply-button{
        font-family: 'Quicksand_SemiBold';
        font-weight: 600;
        text-decoration: underline;
    }

    /* Question input styling */
    .question-input-wrapper{
        margin: auto;
        padding: 20px;
        width: clamp(250px, 40vw, 800px);
        background-color: var(--book_wheat);
        border-radius: 10px;
    }
  
    .question-box{
        width: clamp(240px, 40vw, 800px);
        height: 100px;
        font-family: 'Quicksand_Regular';
        margin-bottom: 10px;
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
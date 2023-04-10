<template>
    <div class="questions-answers-wrapper">
        <div class="title-flex">
            <h2>Questions</h2>
            <button class="tertiary_button">Ask a Question</button>
        </div>


        <div class="question-input-wrapper">
            <div class="input_box">
            <label class="" for="question">Enter your question:</label>
            <textarea class="question" id="question" type="text" placeholder="Please enter your question in a maximum of 100 characters" maxlength="100" />
            <div class="button-flex-end">
                <button class="primary_button">Submit</button>
            </div>
        </div>

            
        </div>
    </div>
</template>

<style scoped>
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

    .question-input-wrapper{
        padding: 10px;
        max-width: 500px;
        background-color: var(--book_wheat);
        border-radius: 10px;
    }
  

    .question{
        max-width: 500px;
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
import throttle from "lodash.throttle";
// import debounce from 'lodash.debounce';
const KEY_FEEDBACK ="feedback-form-state";
const feedbackForm = document.querySelector(".feedback-form")
const feedbackEmailInput = document.querySelector('[name="email"]')
const feedbackMessageInput = document.querySelector('[name="message"]')
const feedbackObj = {
        email: "",
        message: "",        
}

feedbackEmailInput.value =feedbackObj.email;
feedbackMessageInput.value =feedbackObj.message;

feedbackForm.addEventListener("submit", onSubmit)

feedbackForm.addEventListener("input",  throttle((event) => onInput(event), 1000))

function onSubmit(event){
    event.preventDefault();
    console.log(JSON.parse(localStorage.getItem(KEY_FEEDBACK)));
    localStorage.removeItem(KEY_FEEDBACK)
    setFeedbackObjFromLocaleStorege()
    feedbackEmailInput.value ="";
    feedbackMessageInput.value ="";
}

function onInput(event){
    const currentInput = event.target;
    switch(currentInput) {
        case feedbackEmailInput:
            feedbackObj.email = feedbackEmailInput.value;
          break;
        case feedbackMessageInput:
            feedbackObj.message = feedbackMessageInput.value;
          break;
      }
    localStorage.setItem(KEY_FEEDBACK,JSON.stringify(feedbackObj))
}
function setFeedbackObjFromLocaleStorege(){
    try{
        const localeFeedbackObj = JSON.parse(localStorage.getItem(KEY_FEEDBACK))
        feedbackObj.email= localeFeedbackObj.email;
        feedbackObj.message= localeFeedbackObj.message;
    }
    catch{
    }   
}
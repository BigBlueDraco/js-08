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
try{
    feedbackObj.email= JSON.parse(localStorage.getItem(KEY_FEEDBACK)).email;
    feedbackObj.message= JSON.parse(localStorage.getItem(KEY_FEEDBACK)).message;
}
catch{
}

feedbackEmailInput.value =feedbackObj.email;
feedbackMessageInput.value =feedbackObj.message;

feedbackForm.addEventListener("submit", onSubmit)

feedbackForm.addEventListener("input",  throttle((event) => onInput(event), 1000))

function onSubmit(event){
    event.preventDefault();
    console.log(JSON.parse(localStorage.getItem(KEY_FEEDBACK)));
    localStorage.clear()
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
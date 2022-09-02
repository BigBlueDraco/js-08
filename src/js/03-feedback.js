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
setFeedbackObjFromLocaleStorege()
const {email, message} = feedbackObj

feedbackEmailInput.value =email;
feedbackMessageInput.value =message;

feedbackForm.addEventListener("submit", onSubmit)
feedbackForm.addEventListener("input",  throttle((event)=>onInput(event), 1000))

function onSubmit(event){
    event.preventDefault();
    console.log(JSON.parse(localStorage.getItem(KEY_FEEDBACK)));
    localStorage.removeItem(KEY_FEEDBACK)
    setFeedbackObjFromLocaleStorege()
    event.target.value ="";
    event.target.value ="";
}

function onInput(event){
    const currentInputName = event.target.name;
    switch(currentInputName) {
        case "email":
            feedbackObj.email = event.target.value;
          break;
        case "message":
            feedbackObj.message = event.target.value;
          break;
      }
    localStorage.setItem(KEY_FEEDBACK,JSON.stringify(feedbackObj))
}
function setFeedbackObjFromLocaleStorege(){
    try{
        const {email, message} = JSON.parse(localStorage.getItem(KEY_FEEDBACK))
        feedbackObj.email= email;
        feedbackObj.message= message;
    }
    catch{
    }   
}
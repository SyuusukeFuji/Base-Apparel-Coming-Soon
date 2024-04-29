
const mailField= document.getElementById("mail-field");
const send= document.getElementById("btSubmit");
const errorMsg= document.getElementById("errorDisplay");
const errorIcon= document.getElementById("error-icon");
const mailValidation= /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const mailBorder= getComputedStyle(document.documentElement).getPropertyValue("--SoftRed");


send.addEventListener("click", function(){
    console.log("button clicked!");
    if(mailField.value.match(mailValidation)){
        errorMsg.textContent="Thanks for joining our list!";
        errorMsg.classList.add("visibilityOn");
        errorIcon.classList.remove("visibilityOn");
        
    }else{
        errorMsg.textContent="Please use a valid email format";
        errorMsg.classList.add("visibilityOn");
        mailField.classList.toggle("errorBorder");    
        errorIcon.classList.add("visibilityOn");
    }
})



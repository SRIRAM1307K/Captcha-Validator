let captchaDisplay = document.getElementById("captchaDisplay")
let captchaInput = document.getElementById("captchaInput")

let btn1 = document.getElementById("btn1")
let btn2 = document.getElementById("btn2")
let reset = document.getElementById("btn3")

function generate(){
    let alphabets="AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz1234567890!@#$%^&*"

    let captcha = "";
    for( i=0; i<5; i=i+1){
        captcha += alphabets.charAt(Math.floor(Math.random()*alphabets.length))
    }
    captchaDisplay.innerText=captcha;
    captchaInput.value=''
}



btn2.addEventListener("click", function(){
    if(captchaDisplay.textContent===captchaInput.value){
        alert("You're Correct")
                captchaInput.value=''     
                generate()
    }else{
        alert("You're Wrong,Try again")
        captchaInput.value=''
    }



})

reset.addEventListener("click",function(){
    captchaDisplay.innerHTML=''
    captchaInput.value=''
})


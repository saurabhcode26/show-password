let eyeicon = document.querySelector(".eye-icon");
let password = document.querySelector(".input");

eyeicon.onclick = function(){
    if(password.type == "password"){
        password.type = "text"
        eyeicon.src = "eye-open.png"
    }else{
        password.type = "password"
    }
}
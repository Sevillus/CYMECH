const email = document.querySelector("#email")
const name = document.querySelector("#username")
const msg = document.querySelector("#msg")
const errorMsg = document.querySelectorAll(".err")
const btn = document.querySelector('#sendMail')
const phone = document.querySelector("#phone")

const inputs = [email, phone, name, msg]



const checkErrors = () =>{
    let errors = 4;
    errorMsg.forEach( er =>{
        if(er.style.display !== "block"){
            errors--;
        }
    })

    if(errors !== 0){
        btn.type ="button"
    }else{
        btn.type ="submit"
    }
}

const showError = (i) =>{
    errorMsg[i].style.display = "block";
}
const hideError = (i) =>{
    errorMsg[i].style.display = "none"
}


const isEmpty = () =>{
    inputs.forEach((el,i) =>{
        if (el.value.trim() === "") {
            showError(i)
        }else{
            hideError(i)
        }
    })
}

const properNumber = () =>{
    if(phone.value.length < 9 && phone.value.length !== 0){
        errorMsg[1].textContent = "Podany numer telefonu jest za krótki!"
        showError(1)
    }
    else if(phone.value.length === 0){
        errorMsg[1].textContent = "Podaj swój numer telefonu"
    }
    else if(phone.value.length > 9){
        errorMsg[1].textContent = "Błędny numer telefonu"
        showError(1)
    }
    else if(phone.value.length === 9){
       hideError(1)
    }
}


const isTooShort = () =>{
    if(name.value.length< 3 && name.value.trim() !== ''){
        errorMsg[2].textContent = "Podane imię jest za krótkie!"
        showError(2)
    }
    else{
        errorMsg[2].textContent = "Podaj swoje imię"
    }
}

const checkEmail = email => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (re.test(email.value)) {
    } else if(email.value !== ''){
        errorMsg[0].style.display = "block";
        errorMsg[0].textContent = "Niepoprawny adres e-mail!"
    } else {
        errorMsg[0].textContent = "Podaj swój adres e-mail"
    }
}


const checkInputs = () =>{

    isEmpty();
    isTooShort();
    properNumber();
    checkEmail(email)
    checkErrors();
}




btn.addEventListener("click", checkInputs)
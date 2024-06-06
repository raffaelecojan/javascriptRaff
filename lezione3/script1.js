class Utente{
    constructor(nome,cognome,eta,email,password,termCond){
        this.nome=nome;
        this.cognome=cognome;
        this.eta=eta,
        this.email=email;
        this.password=password;
        this.termCond=termCond;
    }
}
let formReg = document.querySelector("#formReg");
let demo = document.querySelector("#demo");

function validate(event){
    demo.innerHTML="";
    let inputColorati = document.querySelectorAll("input.borderRed");
    inputColorati.forEach(inputColorato =>{
        // inputColorato.removeAttribute("class");
        inputColorato.classList.remove("borderRed");
    })


    let nome = String(document.querySelector("#nome").value);
    let cognome = document.querySelector("#cognome").value;
    let eta = Number(document.querySelector("#eta").value);
    let email = document.querySelector("#email").value;
    let password = document.querySelector("#password").value;
    let termCond = document.querySelector("#termCond");

    validateName(nome, event);
    validateCognome(cognome, event);
    validateEta(eta, event);
    validateEmail(email, event);
    validatePassword(password, event);

    if(!termCond.checked){
        demo.innerHTML +="<p>non hai spuntato i termini dicondizione</p>";
        event.preventDefault();
    }
}


function validateName(nome, event){
    if(nome == "" || nome.length < 2){
        demo.innerHTML +="<p> Hai dimenticato il nome</p>";
        document.querySelector("#nome").setAttribute("class", "borderRed");
        event.preventDefault();
        event.stopImmediatePropagation();
    }else{
        localStorage.setItem("nomeUser", nome);
    }
}

function validateCognome(cognome, event){
    if(cognome == "" || cognome.length < 2){
        demo.innerHTML += "<p> Hai dimenticato il cognome</p>";
        document.querySelector("#cognome").setAttribute("class", "borderRed");
        event.preventDefault();
        event.stopImmediatePropagation();
    }else{
        localStorage.setItem("cognomeUser", cognome);
    }
}

function validateEta(eta, event){
    if(eta<18){
        demo.innerHTML += "<p>mi spiace, non puoi entrare, non sei maggiorenne</p>";
        document.querySelector("#eta").setAttribute("class", "borderRed");
        event.preventDefault();
        event.stopImmediatePropagation();
    }else{
        localStorage.setItem("etaUser", eta);
    }
}
function validateEmail(email, event){
    let regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if(!email.match(regexEmail)){
        demo.innerHTML += "<p> la tua mail non è valida</p>";
        document.querySelector("#email").setAttribute("class", "borderRed");
        event.preventDefault();
        event.stopImmediatePropagation();
    }else{
        localStorage.setItem("emailUser", email);
    }
    
}
function validatePassword(password, event){
    let regexPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
    if(!password.match(regexPassword)){
        demo.innerHTML += "<p> la tua password non è valida</p>";
        document.querySelector("#password").setAttribute("class", "borderRed");
        event.preventDefault();
        event.stopImmediatePropagation();
    }else{
        localStorage.setItem("passwordUser", password);
    }
    
}

formReg.addEventListener("submit", validate);

let elNome = document.querySelector("#nome");
let elCognome = document.querySelector("#cognome");
let elEta = document.querySelector("#eta");
let elEmail = document.querySelector("#email");
let elPassword = document.querySelector("#password");

elNome.addEventListener("blur", function(){validateName(this.value, event);});
elCognome.addEventListener("blur", function(){validateCognome(this.value, event);});
elEta.addEventListener("blur", function(){validateEta(this.value, event);});
elEmail.addEventListener("blur", function(){validateEmail(this.value, event);});
elPassword.addEventListener("blur", function(){validatePassword(this.value, event);});




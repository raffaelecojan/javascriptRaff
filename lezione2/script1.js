let mioForm = document.querySelector("#mioForm");

let demo = document.querySelector("#demo");

class Utente{
    constructor(username,email,dataNascita){
        this.username=username;
        this.email=email;
        this.dataNascita;
    }
}
function validate(){
    let username = document.querySelector("#username").value;
    let email = document.querySelector("#email").value;
    let dataNascita = document.querySelector("#dataNascita").value;
    if(username=="" || email=="" || dataNascita==""){
        event.preventDefault();
        demo.innerHTML="Caro utente,vedi, che haidimenticato qualcosa!!";
    }else{
        // let utente={
        //     username: username,
        //     email: email,
        //     datanascita: dataNascita
        // }
        let utente = new Utente(username, email, dataNascita);
        console.log(utente);
    }
    /**
     * 
     * @param {Utente} utente 
     */
    function registraUtente(utente){
        let utenteJSON = JSON.stringify(utente);
        console.log(utenteJSON);
    }

}

mioForm.addEventListener("submit", validate);
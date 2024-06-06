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
let dettaglioUtente = document.querySelector("#dettaglioUtente");

function createUser(){
    if(localStorage.length != 0){
        utente = new Utente(
            localStorage.getItem("nomeUser"),
            localStorage.getItem("cognomeUser"),
            localStorage.getItem("etaUser"),
            localStorage.getItem("emailUser"),
            localStorage.getItem("passwordUser")
        )
            stampautente(utente);
    }else{
        console.log("non c'è nessuono registrato");
    }
}

/**
 * 
 * @param {Utente} utente 
 */
function stampautente(utente){
    dettaglioUtente.innerHTML = `<p>${utente.nome} ${utente.cognome}</p>
    <p>${utente.email}</p>
    <p>${utente.eta}</p>
    <p>password:****</p>`;
}

window.addEventListener("DOMContentLoaded", createUser)

let btn = document.querySelector("#btn");

function logout(){
    localStorage.clear();
}

btn.addEventListener("click", logout)
let btnReg = document.querySelector("#btn");
let last = document.querySelector/("#lastUser");
let casse = document.querySelector("#casse");
btnShowStudenti.addEventListener("click",mostraTutti);


class Studente{
    constructor(nome, cognome, corso, matricola){
        this.nome=nome;
        this.cognome=cognome;
        this.corso=corso;
        this.matricola=matricola;
    }
}

function validate(){
    console.log("sono qui")
    let nome = document.querySelector("#nome").value;
    let cognome = document.querySelector("#cognome").value;
    let corso = document.querySelector("#corso").value;
    let matricola = document.querySelector("#matricola").value;
    if(nome=="" || cognome=="" || corso=="" || matricola==""){
        event.preventDefault();
        last.innerHTML="Caro utente,vedi, che hai dimenticato qualcosa!!";
    }else{
        let studente = new Studente(nome, cognome, corso, matricola);
        mioArray.push(studente);
        last.innerHTML = studente;
    }   
}

function mostraTutti(){
    for(const key in mioArray){
        console.log(mioArray[key]);
    }
}


btnReg.addEventListener("click",validate);
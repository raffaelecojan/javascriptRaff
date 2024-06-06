let studente = {
    nome: "pippo",
    cognome: "Rossi",
    matr:123,
    studia: function(){
        return this.nome +" "+cognome+" sta studiando";
    }
}

class Docente{
    constructor(nome, cognome, corso){
    this.nome = nome;
    this.cognome = cognome;
    this.corso = corso;

    this.insegna = function(){
        return "il docente "+thisnome+" "+this.cognome+" sta insegnando su corso "+this.corso;
    };
}
}

let docenteJava = new Docente("Mauro", "cog", "java");
let docenteJS = new Docente("Dario", "cog", "java");
let docenteDB = new Docente("Oscar", "cog", "java");

let studenteJSON = JSON.stringify(studente);
console.log(studente);
console.log(studenteJSON);
console.log(typeof studenteJSON);
console.log(studenteJSON.nome);



let studente4JSON = '{"nome": "Arianna", "cognome": "verdi", "matricola": 321}';
let studente4 = JSON.parse(studente4JSON);
console.log(studente4);

let docente4JSON = '{"nome": "dario", "cognome": "verdi", "matricola": 321}';
let docente4OBJ = JSON.parse(docente4JSON);
console.log(docente4OBJ);

let docente4= new Docente(docente4JSON.nome, docente4JSON.cognome,docente4JSON.corso);
console.log(docente4);


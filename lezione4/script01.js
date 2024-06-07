const URL = "https://reqres.in/api/users?page=2";

let utenti =[];

let elListaUtenti = document.querySelector("#listaUtenti");

fetch(URL)
    .then(data =>{
        console.log(data);
        return data.json();
    }
    )
    .then(response=>{
        response.data.forEach(user => {
            console.log(user.first_name + "  "+user.last_name);
            elListaUtenti.innerHTML += stampaInfoUser(user);
        });
       
    });

    // setTimeout(()=>{
        // console.log(utenti);
    // }, 2000)

    function stampaInfoUser(user){
        let info = `
        <li>
            <p>Nome ${user.first_name}</p>
            <p>Cognome ${user.last_name}</p>
            <img src ='${user.avatar}'/>
        </li>
        `
        return info;
    }
//Gestione data colloquiato
document.getElementById('inputDataCol').addEventListener('input', function(e) {
    var value = e.target.value.replace(/\D/g, ''); // Rimuove tutto tranne i numeri
    if (value.length > 2) {
        value = value.substring(0, 2) + '/' + value.substring(2);
    }
    if (value.length > 5) {
        value = value.substring(0, 5) + '/' + value.substring(5);
    }
    e.target.value = value;
});






// Funzione per svuotare i campi del form
function reset() {
    document.getElementById('inputNome').value = '';
    document.getElementById('inputCognome').value = '';
    document.getElementById('inputDataCol').value = '';
    document.getElementById('inputCitta').value = '';
    document.getElementById('inputColDa').value = '';
    document.getElementById('inputAmbito').value = '';
    document.getElementById('inputEsito').value = '';
    document.getElementById('inputProvenienza').value = '';
    document.getElementById('inputNote').value = '';

    // Chiudi il pop-up se è aperto
    closePopup();
}

// Funzione per validare il form
function validateForm() {
    const form = document.getElementById('myForm');
    let valid = true;
    const elements = form.elements;

    for (let i = 0; i < elements.length; i++) {
        elements[i].classList.remove('is-invalid');
    }

    for (let i = 0; i < elements.length; i++) {
        if (!elements[i].checkValidity()) {
            elements[i].classList.add('is-invalid');
            valid = false;
        }
    }
    return valid;
}

// Funzione per gestire il pop-up di recap dei dati
function updatePopupContent() {
    var nome = document.getElementById("inputNome").value;
    var cognome = document.getElementById("inputCognome").value;
    var dataCol = document.getElementById("inputDataCol").value;
    var citta = document.getElementById("inputCitta").value;
    var colDa = document.getElementById("inputColDa").value;
    var ambito = document.getElementById("inputAmbito").value;
    var esito = document.getElementById("inputEsito").value;
    var provenenza = document.getElementById("inputProvenienza").value;
    var note = document.getElementById("inputNote").value;

    document.getElementById("popupNome").textContent = nome;
    document.getElementById("popupCog").textContent =  cognome;
    document.getElementById("popupDataCol").textContent = dataCol;
    document.getElementById("popupCitta").textContent = citta;
    document.getElementById("popupColDa").textContent = colDa;
    document.getElementById("popupAmbito").textContent = ambito;
    document.getElementById("popupEsito").textContent = esito;
    document.getElementById("popupProv").textContent = provenenza;
    document.getElementById("popupNote").textContent = note;
}

// Funzione per mostrare il pop-up
function showPopup() {
    updatePopupContent(); // Aggiorna il contenuto del pop-up con i dati attuali del form

    var modal = document.getElementById("popupModal");
    modal.style.display = "block";
}

// Funzione per chiudere il pop-up
function closePopup() {
    var modal = document.getElementById("popupModal");
    modal.style.display = "none";
}


// Funzione per il pulsante Invia
function sendData() {
    var modal = new bootstrap.Modal(document.getElementById('exampleModal'));
    modal.show();
}

// Funzione per aprire il secondo pop-up per inserire destinatario e oggetto
function openSecondPopup() {
    document.getElementById('exampleModal').style.display = 'block';
}

// Event listener per il pulsante Salva
document.getElementById("saveButton").addEventListener("click", function() {
    if (validateForm()) {
        showPopup(); // Mostra il pop-up con il recap dei dati
    } else {
        alert('Campo mancante');
    }
});

// Event listener per il pulsante Reset
document.querySelector('button[type="reset"]').addEventListener("click", reset);



// Chiudi il pop-up quando si clicca fuori dal contenuto del pop-up
window.addEventListener("click", function(event) {
    var modal = document.getElementById("popupModal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
});

function showInputField(selectElement) {
    var selectedValue = selectElement.value;
    var altroInputDiv = document.getElementById('altroInput');

    if (selectedValue === 'Altro') {
        altroInputDiv.style.display = 'block';
    } else {
        altroInputDiv.style.display = 'none';
    }
}

document.getElementById('inputDataCol').addEventListener('keypress', function (e) {
    const char = String.fromCharCode(e.which);
    if (!/[0-9\/]/.test(char)) {
        e.preventDefault();
    }
});

document.getElementById('inputDataCol').addEventListener('paste', function (e) {
    const pastedData = (e.clipboardData || window.clipboardData).getData('text');
    if (/[^0-9\/]/.test(pastedData)) {
        e.preventDefault();
    }
});

// Chiudi il pop-up quando si clicca sulla 'x'
function closePopup1() {
    var modal2 = document.getElementById("exampleModal");
    modal2.classList.remove('show');
    
    setTimeout(() => {
        modal2.classList.remove('fade');
        modal2.style.display = "none";
    }, 1); // corrisponde al tempo della transizione del fade

    document.body.classList.remove('modal-open');
    
    var backdrop = document.querySelector('.modal-backdrop');
    if (backdrop) {
        backdrop.remove();
    }
}

function closePopup2() {
    var modal3 = document.getElementById("popupModal");
    modal3.style.display = "none";
}


/*const response = await fetch('//localhost:9056/api/email', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({ nome, cognome, dataCol, citta, colDa, ambito, esito, provenenza, note})
});

const result = await response.json();
const messageDiv = document.getElementById('message');

if (response.ok) {
    messageDiv.textContent = 'email inviata con successo';
    // Redirect to another page or perform other actions on successful login
} else {
    messageDiv.textContent = 'email non mandata' + result.message;
}*/


// Funzione per inviare i dati al backend
async function sendFormData() {
    const formData = {
        nome: document.getElementById('inputNome').value,
        cognome: document.getElementById('inputCognome').value,
        dataCol: document.getElementById('inputDataCol').value,
        citta: document.getElementById('inputCitta').value,
        colDa: document.getElementById('inputColDa').value,
        ambito: document.getElementById('inputAmbito').value,
        esito: document.getElementById('inputEsito').value,
        provenienza: document.getElementById('inputProvenienza').value,
        note: document.getElementById('inputNote').value,
        destinatario: document.getElementById('destinatario').value,
        destinatarioCC: document.getElementById('destinatarioCC').value,
        altroOggetto: document.getElementById('altroOggetto').value
    };

    try {
        // Effettua la richiesta POST al backend
        const response = await fetch('/api/submit-form', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });

        // Controlla se la risposta è stata ricevuta correttamente
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }

        const result = await response.json();
        
        // Gestisci la risposta del server
        if (result.success) {
            alert('Dati inviati con successo!');
        } else {
            alert('Errore: ' + result.message);
        }

    } catch (error) {
        console.error('problema con la fatch', error);
    }
}

// Funzione per il pulsante Invia
function sendEmail() {
    sendFormData(); // Invia i dati al backend
    closePopup();   // Chiudi il pop-up dopo aver inviato i dati
}


const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 9056;

// Middleware per il parsing del corpo della richiesta
app.use(bodyParser.json());

app.post('/api/submit-form', (req, res) => {
    const formData = req.body;

    // Gestisci i dati ricevuti
    console.log('Dati ricevuti:', formData);

    // Simula una risposta di successo
    res.json({ success: true });
    // In un caso reale, potresti voler fare operazioni come salvare i dati in un database
});

app.listen(port, () => {
    console.log(`Server in ascolto sulla porta ${port}`);
});
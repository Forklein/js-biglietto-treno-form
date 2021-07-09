console.log('Ciao Peppe!')

/*
Quali campi inserire nel form:
Una casella di testo per il form del passeggero
Una casella numerica per i km
Una tendina per selezionare la fascia d'età (Maggiorenne, Minorenne, Over65)
NON E' NECESSARIA ALCUNA VALIDAZIONE
Come calcolare  il prezzo:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali,
Cosa stampare sul biglietto:
Nome passeggero
Codice treno (inseriamo una stringa a caso, per ora)
Numero carrozza (randomizziamo una carrozza da 1 a 12)
Prezzo (stampato con due decimali)
Tariffa applicata all'utente (Tariffa minori, Tariffa ordinaria, Tariffa Over65)
Per la parte grafica
Facciamola solo se tutto il resto della logica è funzionante, vi allego uno screen dell'esercizio fatto in classe senza stile e una da prendere come esempio per la parte visiva. Sentitevi liberi di personalizzare ulteriormente la grafica se vi va.
Bonus
Nascondiamo la sezione del biglietto se non è ancora stato generato il biglietto stesso.
Aggiungiamo una funzione che ci permetta di resettare i campi del form ai valori originali.
*/



//! TARGET FOR OUTPUT

var userTicket = document.getElementById('userTicket');
var userDiscount = document.getElementById('userDiscount');
var userCar = document.getElementById('userCar');
var userCode = document.getElementById('userCode');
var userPrice = document.getElementById('userPrice');
var dispalyText = document.getElementById('d-text');
var displayBox = document.getElementById('box-ticket');


//! TARGET FOR ALERT
var alertElement = document.getElementById('alert');
var closeElement = document.getElementById('close');


//! SET VARIABLES

var generate = document.getElementById('generate');
var reset = document.getElementById('reset');
var discount = 'Offerta Standard';

//! ADD EVENTO TO BUTTON

generate.addEventListener('click', function () {
    //! GET VALUE FROM INPUT
    var userField = document.getElementById('user');
    var kmsField = document.getElementById('kms');
    //Control check
    if (!userField.value || !isNaN(userField.value) || !kmsField.value) {
        alertElement.classList.remove('d-none');
    } else {
        var price = 0.21 * kmsField.value;
        var ageField = document.getElementById('age');
        if (ageField.value === "minor") {
            price *= 0.8;
            discount = 'Offerta Minorenni';
        }
        if (ageField.value === "over") {
            price *= 0.6;
            discount = 'Offerta Over 65';
        }
        userTicket.innerHTML = userField.value;
        userDiscount.innerHTML = discount;
        userCar.innerHTML = Math.floor(Math.random() * 12) + 1;
        userCode.innerHTML = Math.floor(Math.random() * 9999);
        userPrice.innerHTML = price.toFixed(2) + ' ' + '€';
        dispalyText.innerHTML = `<i class="fas fa-arrow-circle-down"></i>
        ECCO IL TUO BIGLIETTO
        <i class="fas fa-arrow-circle-down"></i>`;
        displayBox.classList.remove('d-none');
        alertElement.classList.add('d-none');
    }
    //CODE FIRST BUTTON
});


reset.addEventListener('click', function () {
    displayBox.classList.add('d-none');
    dispalyText.innerHTML = `<i class="fas fa-arrow-circle-down"></i>
    IL TUO BIGLIETTO SARA' VISIBILE QUI SOTTO
    <i class="fas fa-arrow-circle-down"></i>`;
    var defField = document.getElementsByClassName('def');
    var defValue = '';
    for (var i = 0; i < defField.length; i++) {
        defField[i].value = defValue;
    }
    var ageField = document.getElementById('age');
    ageField.selectedIndex = 0;
    //CODE SECOND BUTTON
});


closeElement.addEventListener('click', function () {
    alertElement.classList.add('d-none');
})

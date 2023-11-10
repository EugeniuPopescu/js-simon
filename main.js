/** 
    CONSEGNA:
    Visualizzare in pagina 5 numeri casuali. 
    Da lì parte un timer di 30 secondi.
    Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
    Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
**/
/********** functions **********/
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

// faccio sparire il paragrafo dopo 10 secondi
function shatush() {
    return document.querySelector('#random').style.display = 'none';
}

// faccio apparire i prompt dopo che tolgo il paragrafo
function remember() {
    // ripeto 5 volte il prompt
    while (userNumbers.length < 5) {
        let number = Number(prompt(`Inserisci numero ${userNumbers}`));
        userNumbers.push(number);

    }
    console.log(`numeri inseriti dall'utente: ${userNumbers}`);

    for (let i = 0; i < randomNumbers.length; i++) {
        if (randomNumbers[i] !== userNumbers[i]) {
            console.log(`I numeri sono uguali in posizione: ${randomNumbers[i] === userNumbers[i]}`);
        }
    }
}

/********** calc **********/
// mi creo l'array con 5 numeri random non ripetuti 
let randomNumbers = [];
let userNumbers = [];
let uguali = false;

while (randomNumbers.length < 5) {
    numeroRandom = randomNumber(1, 9);
    
    if (!randomNumbers.includes(numeroRandom)) {
        Number(randomNumbers.push(numeroRandom));
    }
}    

// inserisco i numeri random nel paragrafo 
document.querySelector('#random').innerHTML = `I tuoi numeri da ricordare sono ${randomNumbers}`;
console.log(`numeri random: ${randomNumbers}`);


// faccio scomparire i numeri random del paragrafo dopo 10 secondi
// dico solo qual'è il nome della funzione
setTimeout(shatush, 5 * 1000)


// ricchiamo la funzione
setTimeout(remember, 6 * 1000)




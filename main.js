/** 
    CONSEGNA:
    Visualizzare in pagina 5 numeri casuali. 
    Da lì parte un timer di 30 secondi.
    Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
    Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
**/

/********** calc **********/
// mi creo l'array con 5 numeri random (non ripetuti) minim 1 e massimo 5
let randomNumbers = getRandomNumbers(5, 1, 5);
let uguali = false;



// inserisco i numeri random nel paragrafo
// metodo join mi stampa l'array con lo spazio che voglio tra di loro
document.querySelector('#random').innerHTML = `I tuoi numeri da ricordare sono ${randomNumbers.join(' - ')}`;
console.log(`numeri random: ${randomNumbers}`);


// faccio scomparire i numeri random del paragrafo dopo 10 secondi
// dico solo qual'è il nome della funzione
setTimeout(shatush, 5 * 1000)


// ricchiamo la funzione
setTimeout( function() {
    let userNumbers = getUserNumbers()
    let confronto = okNumbers(userNumbers, randomNumbers)

    // stampo in pagina i numeri indovinati
    document.querySelector('#indovinato').innerHTML = `Hai indovinato ${confronto.length} numeri, e sono ${confronto.join(' - ')}`
    
}, 5.3 * 1000)




/********** FUNCTIONS **********/
// funzionche restituisce un numero casuale tra min e max 
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

// funzione generica che genera un array di N numeri random
// parametri: quanti numeri nell'array, minimo, massimo 
function getRandomNumbers(quanti, min, max) {
    let numbers = [];

    while (numbers.length < quanti) {
        let newRandomNumber = randomNumber(min, max);
        
        if (!numbers.includes(newRandomNumber)) {
            Number(numbers.push(newRandomNumber));
        }
    }

    return numbers;
}

// faccio sparire il paragrafo dopo 10 secondi
function shatush() {
    return document.querySelector('#random').style.display = 'none';
}

// faccio apparire i prompt dopo che tolgo il paragrafo
function getUserNumbers() {
    let numbers = [];

    // ripeto 5 volte il prompt
    while (numbers.length < 5) {

        let number = Number(prompt(`Inserisci numero ${numbers}`));

        if (!numbers.includes(number)) {
            numbers.push(number);
        } else {
            alert('Non iserire doppioni');
        }

    }
    console.log(`numeri utente: ${numbers}`);

    return numbers;
}

function okNumbers(array1, array2) {
    console.log(array1);
    console.log(array2);
    // array di appoggio con il risultato
    let result = [];

    // per ogni elemento dell'array1 controllo l'arra2
    for (let i = 0; i < array1.length; i++) {
        const elemento = array1[i];

        if (array2.includes(elemento)) {
            result.push(elemento);
        }
        
    }

    return result;
}

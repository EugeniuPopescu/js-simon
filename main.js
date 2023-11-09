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


/********** calc **********/
// mi creo l'array con 5 numeri random non ripetuti 
let randomNumbers = [];

while (randomNumbers.length < 5) {
    numeroRandom = randomNumber(1, 99);

    if (!randomNumbers.includes(numeroRandom)) {
        randomNumbers.push(numeroRandom);
    }


}

console.log(`numeri random: ${randomNumbers}`);
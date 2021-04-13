//1. Crea 10 oggetti che rappresentano una zucchina, indicandone per ognuno varietà, peso e lunghezza. 
//   Calcola la somma del peso di tutte le zucchine.
//2, Crea 10 oggetti che rappresentano una zucchina.
//   Dividi in due array separati le zucchine che misurano meno o più di 15cm. 
//3. Infine stampa separatamente quanto pesano i due gruppi di zucchine.

//1a/2a. creo 10 oggetti con varietà peso e lunghezza in un array 
var arrayZucchine = [
    {
        //zucchina 0
        'varieta' : 'Zucchino nero',
        'peso' : 3,
        'lunghezza' : 18
    },
    {
        //zucchina 1
        'varieta' : 'Zucchino giallo',
        'peso' : 2,
        'lunghezza' : 12
    },
    {
        //zucchina 2
        'varieta' : 'Zucchino nero',
        'peso' : 1,
        'lunghezza' : 14
    },
    {
        //zucchina 3
        'varieta' : 'Zucchina bianca',
        'peso' : 2,
        'lunghezza' : 13
    },
    {
        //zucchina 4
        'varieta' : 'Zucchina bianca',
        'peso' : 4,
        'lunghezza' : 11
    },
    {
        //zucchina 5
        'varieta' : 'Zucchino nero',
        'peso' : 3,
        'lunghezza' : 16
    },
    {
        //zucchina 6
        'varieta' : 'Zucchino giallo',
        'peso' : 2,
        'lunghezza' : 15
    },
    {
        //zucchina 7
        'varieta' : 'Zucchino nero',
        'peso' : 4,
        'lunghezza' : 16
    },
    {
        //zucchina 8
        'varieta' : 'Zucchina bianca',
        'peso' : 1,
        'lunghezza' : 17
    },
    {
        //zucchina 9
        'varieta' : 'Zucchino giallo',
        'peso' : 3,
        'lunghezza' : 10
    },
];
console.log(arrayZucchine);

//1b. imposto il totale della somma dei pesi a 0 per sommare il peso di ogni zuchhina
var sommaPesoTotale = 0;

//1c. creo un ciclo for 
for ( i = 0; i < arrayZucchine.length; i++ ) {
    var thisZucchina = arrayZucchine[i];
    //1d. per prendere il peso di ogni zucchina e sommarlo alla sommaPesoTotale
    sommaPesoTotale = sommaPesoTotale + thisZucchina.peso;
}

console.log('La somma del peso totale delle zucchine è:' + sommaPesoTotale );

//2b. creo due array per dividere le zucchine che misurano meno o più di 15cm
var zucchineGrandi = [];
var zucchinePiccole = [];

//2c. imposto il totale della somma del peso delle zucchine piccole e grandi a zero per sommare poi il peso delle rispettive zucchine
var pesoZucchineGrandi = 0;
var pesoZucchinePiccole = 0;

//2d. creo un ciclo for 
for ( i = 0; i < arrayZucchine.length; i++ ) {
    var thisZucchina = arrayZucchine[i];
    //2e. se la lunghezza della zucchina è piu grande di 15 la aggiungo alle zucchine grandi
    if ( thisZucchina.lunghezza > 15 ) {
        zucchineGrandi.push(thisZucchina);
        //2g. prendo i pesi di ogni zuchina grande e li sommo per avere il peso delle zucchine grandi
        pesoZucchineGrandi = pesoZucchineGrandi + thisZucchina.peso;

    //2f. se la lunghezza della zucchina è piu piccola di 15 la aggiungo alle zucchine piccole
    } else if ( thisZucchina.lunghezza < 15 ) {
        zucchinePiccole.push(thisZucchina);
        //2h. prendo i pesi di ogni zucchina piccola e li sommo per avere il peso delle zucchine piccole
        pesoZucchinePiccole = pesoZucchinePiccole + thisZucchina.peso;
    }
}

//3a. stampo le zucchine che misurano più o meno di 15 nei due array 
console.log(zucchineGrandi);
console.log(zucchinePiccole);

//3b. stampo la somma del peso delle zucchine grandi e piccole 
console.log('La somma del peso delle zucchine grandi è:' + pesoZucchineGrandi)
console.log('La somma del peso delle zucchine piccole è:' + pesoZucchinePiccole)
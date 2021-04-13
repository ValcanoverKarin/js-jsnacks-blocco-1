//1. Crea 10 oggetti che rappresentano una zucchina, indicandone per ognuno varietà, peso e lunghezza. 
//   Calcola la somma del peso di tutte le zucchine.
//2, Crea 10 oggetti che rappresentano una zucchina.
//   Dividi in due array separati le zucchine che misurano meno o più di 15cm. 
//3. Infine stampa separatamente quanto pesano i due gruppi di zucchine.

//1a. creo 10 oggetti con varietà peso e lunghezza in un array 
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

//1b. imposto la il totale della somma dei pesi a 0 per sommare il peso di ogni zuchhina
var sommaPesoTotale = 0;

//1c. creo un ciclo for 
for ( i = 0; i < arrayZucchine.length; i++ ) {
    var thisZucchina = arrayZucchine[i];
    //1d. per prendere il peso di ogni zucchina e sommarlo alla sommaPesoTotale
    sommaPesoTotale = sommaPesoTotale + thisZucchina.peso;
}

console.log('La somma del peso totale delle zucchine è:' + sommaPesoTotale );
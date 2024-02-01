window.onload = function () {
  inizializzaTabellone();

  randBtn.addEventListener("click", function () {
    //1)ASCOLTATORE sul bottone "fai uscire un numero"
    console.log("prova");
    generaNumeroCasuale();
  });

  randBtn2.addEventListener("click", function () {
    // ASCOLTATORE sul bottone "Crea Cartelline"
    console.log("prova");
  });
};

//2) FUNZIONE INIZIALIZZAZIONE

// La funzione inizializzaTabellone ha lo scopo di generare dinamicamente un tabellone composto da righe e colonne di elementi <span> all'interno di elementi <div>. // Ha lo scopo di creare lato js il tabellone all'interno del div vuoto che sta su html (putTheBoard)
const inizializzaTabellone = function () {
  // variabili: htmlDinamico viene inizializzato come una stringa vuota che conterrà l'HTML generato dinamicamente.
  // contatore viene inizializzato a 0 e sarà utilizzato per incrementare gli ID degli elementi HTML all'interno delle iterazioni.
  let htmlDinamico = "  ";
  let contatore = 0;
  // CICLO ESTERNO Si itera attraverso 4 "righe" del tabellone, dove ciascuna "riga" è rappresentata da un elemento <div>
  for (let i = 0; i <= 3; i++) {
    htmlDinamico += "<div>";
    // CICLO INTERNO Per ogni "riga", si itera attraverso 19 "colonne", rappresentate da elementi <span>.
    for (let j = 1; j <= 19; j++) {
      // Gli elementi <div> e <span> vengono concatenati a htmlDinamico durante le iterazioni dei cicli.
      // Alla fine di ciascuna "riga", viene chiuso il tag <div>.
      htmlDinamico += `<span id="${j + contatore}">${j + contatore}</span>`;
    }
    htmlDinamico += "</div>";
    // Dopo ogni "riga", il contatore viene incrementato di 19. Questo assicura che gli ID degli elementi siano univoci in tutto il tabellone.
    contatore += 19;
  }
  //   Viene stampato l'HTML dinamico nella console per il debug e per visualizzare la struttura del tabellone.
  console.log(htmlDinamico);

  const vuoto = document.getElementById("putTheBoard");

  vuoto.innerHTML = htmlDinamico; //Imposta l'HTML dinamico come contenuto dell'elemento con l'ID "putTheBoard". In pratica, questo inserisce il tabellone dinamicamente creato all'interno dell'elemento nel documento HTML.
};

// 3)FUNZIONE GENERA NUMERI RANDOM

function generaNumeroCasuale(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Genera un numero casuale tra 1 e 76
let numeroCasualeTra1e76 = generaNumeroCasuale(1, 76);
console.log(numeroCasualeTra1e76);

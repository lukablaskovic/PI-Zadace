let studenti = [
  {
    ime: "Marko",
    prezime: "Marković",
    grad: "Pula",
  },
  {
    ime: "Iva",
    prezime: "Ivić",
    grad: "Našice",
  },
  {
    ime: "Lucija",
    prezime: "Lucić",
    grad: "Zagreb",
  },
  {
    ime: "Nikola",
    prezime: "Nikolić",
    grad: "Rijeka",
  },
];
function napredna_pretraga(lista, pojam) {
  var x = [];
  var term = "";

  for (let i = 0; i < pojam.length; i++) {
    if (pojam[i] == " ") {
      x.push(term);
      term = "";
      continue;
    }
    term += pojam[i].toLowerCase();
    if (i == pojam.length - 1) x.push(term);
  }
  var counter;
  var maxFound = 0;
  var found;
  //Prolazak kroz sve studente
  for (let i = 0; i < lista.length; i++) {
    counter = 0;
    //Prolazak kroz sve pojmove
    for (let j = 0; j < x.length; j++) {
      if (lista[i].ime.toLowerCase().includes(x[j])) counter++;

      if (lista[i].prezime.toLowerCase().includes(x[j])) counter++;

      if (lista[i].grad.toLowerCase().includes(x[j])) counter++;
    }
    if (counter > maxFound) {
      maxFound = counter;
      found = i;
    }
  }
  return found;
}

console.assert(napredna_pretraga(studenti, "ma ić") == 0); // → prvi student
console.assert(napredna_pretraga(studenti, "ko lić ri") == 3); // → zadnji student
console.assert(napredna_pretraga(studenti, "ić za") == 2); // → treći student
console.assert(napredna_pretraga(studenti, "ić ko la ri") == 3); // → zadnji student
console.assert(napredna_pretraga(studenti, "ić ko la ri") == 2); // → treći student, baca grešku

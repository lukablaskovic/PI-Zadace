let student = [
  {
    ime: "Petar",
    prezime: "Horvat",
    upisan: true,
  },
  {
    ime: "Ivan",
    prezime: "Petrovic",
    upisan: false,
  },
  {
    ime: "Marko",
    prezime: "Ivanovic",
    upisan: true,
  },
  {
    ime: "Pero",
    prezime: "Peric",
    upisan: true,
  },
  {
    ime: "Ivanka",
    prezime: "Slavkovic",
    upisan: true,
  },
  {
    ime: "Slavko",
    prezime: "Ivanovic",
    upisan: true,
  },
  {
    ime: "Sanja",
    prezime: "Sanjic",
    upisan: false,
  },
  {
    ime: "Stjepan",
    prezime: "Pavlovic",
    upisan: true,
  },
  {
    ime: "Petra",
    prezime: "Durakovic",
    upisan: true,
  },
  {
    ime: "Nicole",
    prezime: "Nicolinic",
    upisan: false,
  },
];
function provjeri(lista, pojam) {
  for (let i = 0; i < lista.length; i++) {
    if (lista[i].upisan) {
      if (lista[i].ime == pojam) return true;
      else if (lista[i].prezime == pojam) return true;
    }
  }
  return false;
}
console.log(provjeri(student, "Petra"));
console.log(provjeri(student, "Sanjic"));
console.log(provjeri(student, "Frankovic"));

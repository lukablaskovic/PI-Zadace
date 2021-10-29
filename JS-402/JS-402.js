let student = [
  {
    ime: "Petar",
    prezime: "Horvat",
    upisan: true,
    status: "upisan",
  },
  {
    ime: "Ivan",
    prezime: "Petrovic",
    upisan: false,
    status: "u-procesu-upisa",
  },
  {
    ime: "Marko",
    prezime: "Ivanovic",
    upisan: true,
    status: "upisan",
  },
  {
    ime: "Pero",
    prezime: "Peric",
    upisan: true,
    status: "upisan",
  },
  {
    ime: "Ivanka",
    prezime: "Slavkovic",
    upisan: true,
    status: "upisan",
  },
  {
    ime: "Slavko",
    prezime: "Ivanovic",
    upisan: true,
    status: "upisan",
  },
  {
    ime: "Sanja",
    prezime: "Sanjic",
    upisan: false,
    status: "ispisan",
  },
  {
    ime: "Stjepan",
    prezime: "Pavlovic",
    upisan: true,
    status: "upisan",
  },
  {
    ime: "Petra",
    prezime: "Durakovic",
    upisan: true,
    status: "upisan",
  },
  {
    ime: "Nicole",
    prezime: "Nicolinic",
    upisan: false,
    status: "u-procesu-upisa",
  },
];
function provjeri(lista, pojam, status) {
  for (let i = 0; i < lista.length; i++) {
    if (lista[i].upisan || lista[i].status == status) {
      if (lista[i].ime.includes(pojam)) return true;
      else if (lista[i].prezime.includes(pojam)) return true;
    }
  }
  return false;
}
console.log(provjeri(student, "Petra"));
console.log(provjeri(student, "Sanjic"));
console.log(provjeri(student, "Frankovic"));

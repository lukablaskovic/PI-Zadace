let bodovi = prompt("Unesi broj bodova");
let ocjena;
let poruka;
let ostvareniBodovi = parseFloat(bodovi);
if (ostvareniBodovi < 50) {
  ocjena = 1;
} else if (ostvareniBodovi > 49.9 && ostvareniBodovi < 63) {
  ocjena = 2;
} else if (ostvareniBodovi > 62.9 && ostvareniBodovi < 76) {
  ocjena = 3;
} else if (ostvareniBodovi > 75.9 && ostvareniBodovi < 89) {
  ocjena = 4;
} else {
  ocjena = 5;
  poruka = "Čestitke na odličnom uspjehu!";
}
console.log("Ostvarili ste ocjenu " + ocjena);
if (ocjena == 5) console.log(poruka);

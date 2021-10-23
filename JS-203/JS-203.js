let velicina = 8;
let red0 = "";
let red1 = "";
for (let i = 0; i < velicina; i++) {
  if (i % 2 == 0) red0 += " ";
  else red0 += "#";
}
for (let i = 0; i < velicina; i++) {
  if (i % 2 != 0) red1 += " ";
  else red1 += "#";
}
for (let i = 0; i < velicina; i++) {
  if (i % 2 == 0) console.log(red0);
  else console.log(red1);
}

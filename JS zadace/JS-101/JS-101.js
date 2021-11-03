let a = prompt("Unesi prvi broj");
let b = prompt("Unesi drugi broj");
let c = prompt("Unesi treći broj");
let d = prompt("Unesi četvrti broj");
let maks;
let nums = [a, b, c, d];
maks = 0;
for (let i = 0; i < 4; i++) {
  if (parseFloat(nums[i]) > maks) maks = nums[i];
}
console.log("Najveći između njih je: " + maks);

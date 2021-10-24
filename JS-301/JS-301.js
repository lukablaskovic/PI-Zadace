let min = (x, y) => {
  if (x < y) return x;
  else return y;
};

console.log(min(0, 4)); //-> 0
console.log(min(0, -4)); // -> -4

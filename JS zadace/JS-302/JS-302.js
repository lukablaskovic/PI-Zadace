function istiZnakovi(string) {
  let temp = [];
  for (let i = 0; i < string.length; i++) {
    temp.push(string.charAt(i));
  }
  let counter = 1;
  let longest = 1;
  let current = temp[0];
  for (let i = 0; i < string.length; i++) {
    if (temp[i] != current) counter = 1;
    if (temp[i] == temp[i + 1]) {
      counter++;
      current = temp[i];
      if (counter >= longest) {
        longest = counter;
      }
    }
  }
  return longest;
}

console.log(istiZnakovi("baaaccd")); // -> 3
console.log(istiZnakovi("ba2dll")); //-> 2

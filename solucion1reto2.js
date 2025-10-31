function countSheep(letters) {
  const target = "sheep";
  const letterCount = {};

  // Count letters in input
  for (const char of letters) {
    letterCount[char] = (letterCount[char] || 0) + 1;
  }

  // Count letters needed for 'sheep'
  const targetCount = {};
  for (const char of target) {
    targetCount[char] = (targetCount[char] || 0) + 1;
  }

  // Find minimum number of complete 'sheep' words possible
  let minSheep = Infinity;
  for (const char in targetCount) {
    const available = letterCount[char] || 0;
    const needed = targetCount[char];
    minSheep = Math.min(minSheep, Math.floor(available / needed));
  }

  return minSheep === Infinity ? 0 : minSheep;
}

console.log(countSheep("sheepxsheepy"));
// → 2 (puedes formar "sheep" dos veces)

console.log(countSheep("sshhheeeepppp"));
// → 2 (s=2, h=3, e=4, p=4 → solo 2 "sheep" completas)

console.log(countSheep("hola"));
// → 0 (no hay suficientes letras)

console.log(countSheep("peesh"));
// → 1 (las letras están desordenadas pero están todas)

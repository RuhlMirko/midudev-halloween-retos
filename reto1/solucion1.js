function translatePossessed(str) {
  return str
    .split(" ")
    .map((word) => word.split("").reverse().join(""))
    .join(" ");
}

console.log(translatePossessed("dlroW olleH")); // Output: ""
console.log(translatePossessed("siht si gnorw")); // Output: ""

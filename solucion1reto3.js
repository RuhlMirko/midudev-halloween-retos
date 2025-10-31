function myersCalendar(year) {
  if (year <= 0 || typeof year !== "number" || !year) {
    return [];
  }
  const unluckyDates = [];
  const months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  for (const month of months) {
    const date = new Date(year, month - 1, 13);

    if (date.getDay() === 5) {
      unluckyDates.push(`${year}-${String(month).padStart(2, "0")}-13`);
    }
    if (month === 9) {
      unluckyDates.push(`${year}-10-31`);
    }
  }

  return unluckyDates;
}

console.log(myersCalendar(2025));
// → ['2025-06-13', '2025-09-13', '2025-10-31']

console.log(myersCalendar(2026));
// → ['2026-02-13', '2026-03-13', '2026-10-31', '2026-11-13']

console.log(myersCalendar(2024));
// → ['2024-09-13', '2024-10-31', '2024-12-13']

console.log(myersCalendar(-1)); // → []
console.log(myersCalendar("aaa")); // → []
console.log(myersCalendar(NaN)); // → []

function getQuarter(date) {
  const month = date.getUTCMonth();

  if (month >= 0 && month <= 2) {
    return 1;
  }
  if (month >= 3 && month <= 5) {
    return 2;
  }
  if (month >= 6 && month <= 8) {
    return 3;
  }
  return 4;
}
console.log(getQuarter(new Date(2024, 10, 10)));

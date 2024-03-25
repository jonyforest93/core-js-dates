function getWeekNumberByDate(date) {
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();

  const firstDayOfYear = new Date(Date.UTC(year, 0, 1));

  const targetDate = new Date(Date.UTC(year, month, day));

  let weekNumber = 1;

  const currentDate = new Date(firstDayOfYear);
  currentDate.setUTCDate(currentDate.getUTCDate() + 1);

  while (currentDate.getTime() <= targetDate.getTime()) {
    if (currentDate.getUTCDay() === 1) {
      weekNumber += 1;
    }
    currentDate.setUTCDate(currentDate.getUTCDate() + 1);
  }

  return weekNumber;
}

console.log(getWeekNumberByDate(new Date(2023, 1, 23)));

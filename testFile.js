function getWorkSchedule(period, countWorkDays, countOffDays) {
  const startDayParts = period.start.split('-');
  const endDayParts = period.end.split('-');
  const startDay = new Date(
    Date.UTC(startDayParts[2], startDayParts[1] - 1, startDayParts[0])
  );
  const endDay = new Date(
    Date.UTC(endDayParts[2], endDayParts[1] - 1, endDayParts[0])
  );

  let currentDay = startDay;
  const schedule = [];
  let work = 0;
  let dayOff = 0;

  while (currentDay.getTime() <= endDay.getTime()) {
    if (work >= countWorkDays) {
      work = 0;
      currentDay.setDate(currentDay.getDate() + 1);
      continue;
    }
  }
}
getWorkSchedule({ start: '01-01-2024', end: '15-01-2024' }, 1, 3);

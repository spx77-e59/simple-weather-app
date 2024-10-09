export default function processDataForSevenDays(data) {
  const sevenDaysData = [];
  for (let i = 1; i < 8; i++) {
    sevenDaysData.push({
      datetime: data.days[i].datetime,
      resolvedAddress: data.resolvedAddress,
      temp: data.days[i].temp,
      conditions: data.days[i].conditions,
      icon: data.days[i].icon,
      sunrise: data.days[i].sunrise,
      sunset: data.days[i].sunset,
    });
  }
  // TODO: to remove
  console.table("seven days data:",sevenDaysData);
  return sevenDaysData;
}

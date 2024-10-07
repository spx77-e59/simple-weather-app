export default function processDataForSevenDays(data) {
  const sevenDaysData = [];
  for (let i = 0; i < 6; i++) {
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
  return sevenDaysData;
}

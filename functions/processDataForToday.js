export default function processDataForToday(data) {
  const hourData = [];
  const daysData = data.days[0];
  for (let i = 0; i < 24; i++) {
    hourData.push({
      datetime: daysData.hours[i].datetime,
      temp: daysData.hours[i].temp,
      conditions: daysData.hours[i].conditions,
      icon: daysData.hours[i].icon,
    });
  }
  const todayData = {
    today: {
      datetime: data.days[0].datetime,
      resolvedAddress: data.resolvedAddress,
      temp: data.days[0].temp,
      conditions: data.days[0].conditions,
      icon: data.days[0].icon,
      sunrise: data.days[0].sunrise,
      sunset: data.days[0].sunset,
    },
    currentConditions: {
      temp: data.currentConditions.temp,
      conditions: data.currentConditions.conditions,
      icon: data.currentConditions.icon,
    },
    hours: hourData,
  };

  // to remove
  console.log(todayData);

  return todayData;
}

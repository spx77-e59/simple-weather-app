export default async function processDataForToday(data) {
  const hourData = [];
  const daysData = data.days[0];
  for (let i = 0; i < 24; i++) {
    hourData.push({
      datetime: daysData.hours[i].datetime,
      temp: daysData.hours[i].temp,
      feelslike: daysData.hours[i].feelslike,
      humidity: daysData.hours[i].humidity,
      precip: daysData.hours[i].precip,
      precipprob: daysData.hours[i].precipprob,
      snow: daysData.hours[i].snow,
      snowdepth: daysData.hours[i].snowdepth,
      preciptype: daysData.hours[i].preciptype,
      windgust: daysData.hours[i].windgust,
      windspeed: daysData.hours[i].windspeed,
      winddir: daysData.hours[i].winddir,
      conditions: daysData.hours[i].conditions,
      icon: daysData.hours[i].icon,
    });
  }
  const todayData = {
    today: {
      datetime: data.days[0].datetime,
      resolvedAddress: data.resolvedAddress,
      temp: data.days[0].temp,
      tempmax: data.days[0].tempmax,
      tempmin: data.days[0].tempmin,
      feelslikemax: data.days[0].feelslikemax,
      feelslikemin: data.days[0].feelslikemin,
      feelslike: data.days[0].feelslike,
      feelslike: data.days[0].feelslike,
      humidity: data.days[0].humidity,
      precip: data.days[0].precip,
      precipprob: data.days[0].precipprob,
      snow: data.days[0].snow,
      snowdepth: data.days[0].snowdepth,
      preciptype: data.days[0].preciptype,
      windgust: data.days[0].windgust,
      windspeed: data.days[0].windspeed,
      winddir: data.days[0].winddir,
      conditions: data.days[0].conditions,
      icon: data.days[0].icon,
      sunrise: data.sunrise,
      sunset: data.sunset,
    },
    currentConditions: {
      resolvedAddress: data.resolvedAddress,
      temp: data.currentConditions.temp,
      feelslike: data.currentConditions.feelslike,
      humidity: data.currentConditions.humidity,
      precip: data.currentConditions.precip,
      precipprob: data.currentConditions.precipprob,
      snow: data.currentConditions.snow,
      snowdepth: data.currentConditions.snowdepth,
      preciptype: data.currentConditions.preciptype,
      windgust: data.currentConditions.windgust,
      windspeed: data.currentConditions.windspeed,
      winddir: data.currentConditions.winddir,
      conditions: data.currentConditions.conditions,
      icon: data.currentConditions.icon,
    },
    hours: hourData,
  };

  return todayData;
}

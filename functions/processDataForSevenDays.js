export default function processDataForSevenDays(data) {
  const sevenDaysData = [];
  for (let i = 0; i < 6; i++) {
    sevenDaysData.push({
      datetime: data.days[i].datetime,
      resolvedAddress: data.resolvedAddress,
      temp: data.days[i].temp,
      tempmax: data.days[i].tempmax,
      tempmin: data.days[i].tempmin,
      feelslikemax: data.days[i].feelslikemax,
      feelslikemin: data.days[i].feelslikemin,
      feelslike: data.days[i].feelslike,
      feelslike: data.days[i].feelslike,
      humidity: data.days[i].humidity,
      precip: data.days[i].precip,
      precipprob: data.days[i].precipprob,
      snow: data.days[i].snow,
      snowdepth: data.days[i].snowdepth,
      preciptype: data.days[i].preciptype,
      windgust: data.days[i].windgust,
      windspeed: data.days[i].windspeed,
      winddir: data.days[i].winddir,
      conditions: data.days[i].conditions,
      icon: data.days[i].icon,
      sunrise: data.days[i].sunrise,
      sunset: data.days[i].sunset,
    });
  }
  return sevenDaysData;
}

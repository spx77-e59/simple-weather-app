export default async function processDataForYesterday() {
  const oneDayData = {
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
    sunrise: data.days[0].sunrise,
    sunset: data.days[0].sunset,
  };

  return oneDayData;
}

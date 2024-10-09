export default function processDataForOneDay(data) {
  const oneDayData = {
    datetime: data.days[0].datetime,
    resolvedAddress: data.resolvedAddress,
    temp: data.days[0].temp,
    conditions: data.days[0].conditions,
    description: data.days[0].description,
    icon: data.days[0].icon,
    sunrise: data.days[0].sunrise,
    sunset: data.days[0].sunset,
  };

  return oneDayData;
}

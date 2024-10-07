import decideUnits from "./decideUnits.js";

export default function displayDataForOneDay(
  processedData,
  containerDiv,
  unitGroup
) {
  const temp = decideUnits(unitGroup).temp;
  const oneDayDiv = containerDiv.querySelector("div");

  const dateTime = document.createElement("h2");
  const resolvedAddress = document.createElement("h2");
  dateTime.textContent = processedData.datetime;
  resolvedAddress.textContent = processedData.resolvedAddress;

  const sunriseTitle = document.createElement("h2");
  const sunriseText = document.createElement("p");
  sunriseTitle.textContent = "Sunrise";
  sunriseText.textContent = processedData.sunrise;

  const sunsetTitle = document.createElement("h2");
  const sunsetText = document.createElement("p");
  sunsetTitle.textContent = "Sunset";
  sunsetText.textContent = processedData.sunset;

  const tempTitle = document.createElement("h3");
  const tempText = document.createElement("p");
  tempTitle.textContent = "Temperature";
  tempText.textContent = processedData.temp + temp;

  const conditionsTitle = document.createElement("h3");
  const conditionsText = document.createElement("p");
  conditionsTitle.textContent = "Conditions";
  conditionsText.textContent = processedData.conditions;

  oneDayDiv.append(
    dateTime,
    resolvedAddress,
    sunriseTitle,
    sunriseText,
    sunsetTitle,
    sunsetText,
    tempTitle,
    tempText,
    conditionsTitle,
    conditionsText
  );

  containerDiv.style.display = "";
}

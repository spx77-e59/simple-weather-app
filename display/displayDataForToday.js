import decideUnits from "../utils/decideUnits.js";

export default function displayDataForToday(
  processedData,
  containerDiv,
  unitGroup
) {
  const temp = decideUnits(unitGroup).temp;

  const childDivs = containerDiv.querySelectorAll("div");

  const todayInfoDiv = childDivs[0];
  const currentDiv = childDivs[1];
  const todayDiv = childDivs[2];
  const hoursDiv = childDivs[3];

  todayInfoDiv.innerHTML = "";
  currentDiv.innerHTML = "";
  todayDiv.innerHTML = "";
  hoursDiv.innerHTML = "";

  const currentTempTitle = document.createElement("h3");
  const currentTempText = document.createElement("p");
  currentTempTitle.textContent = "Temperature";
  currentTempText.textContent = processedData.currentConditions.temp + temp;

  const currentConditionsTitle = document.createElement("h3");
  const currentConditionsText = document.createElement("p");
  currentConditionsTitle.textContent = "Conditions";
  currentConditionsText.textContent =
    processedData.currentConditions.conditions;

  currentDiv.append(
    currentTempTitle,
    currentTempText,
    currentConditionsTitle,
    currentConditionsText
  );

  const todayTempTitle = document.createElement("h3");
  const todayTempText = document.createElement("p");
  todayTempTitle.textContent = "Temperature";
  todayTempText.textContent = processedData.today.temp + temp;

  const todayConditionsTitle = document.createElement("h3");
  const todayConditionsText = document.createElement("p");
  todayConditionsTitle.textContent = "Conditions";
  todayConditionsText.textContent = processedData.currentConditions.conditions;

  todayDiv.append(
    todayTempTitle,
    todayTempText,
    todayConditionsTitle,
    todayConditionsText
  );

  processedData.hours.forEach((hour) => {
    const dateTime = document.createElement("h2");
    dateTime.textContent = hour.datetime;

    const tempTitle = document.createElement("h3");
    const tempText = document.createElement("p");
    tempTitle.textContent = "Temperature";
    tempText.textContent = hour.temp + temp;

    const conditionsTitle = document.createElement("h3");
    const conditionsText = document.createElement("p");
    conditionsTitle.textContent = "Conditions";
    conditionsText.textContent = hour.conditions;

    const div = document.createElement("div");
    div.append(dateTime, tempTitle, tempText, conditionsTitle, conditionsText);

    hoursDiv.append(div);
  });

  const dateTime = document.createElement("h2");
  const resolvedAddress = document.createElement("h2");
  dateTime.textContent = processedData.today.datetime;
  resolvedAddress.textContent = processedData.today.resolvedAddress;

  const sunriseTitle = document.createElement("h2");
  const sunriseText = document.createElement("p");
  sunriseTitle.textContent = "Sunrise";
  sunriseText.textContent = processedData.today.sunrise;

  const sunsetTitle = document.createElement("h2");
  const sunsetText = document.createElement("p");
  sunsetTitle.textContent = "Sunset";
  sunsetText.textContent = processedData.today.sunset;

  todayInfoDiv.prepend(
    dateTime,
    resolvedAddress,
    sunriseTitle,
    sunriseText,
    sunsetTitle,
    sunsetText
  );

  containerDiv.style.display = "";
}

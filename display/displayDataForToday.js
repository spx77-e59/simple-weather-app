import decideUnits from "../utils/decideUnits.js";
import selectImgSrc from "../utils/selectImgSrc.js";

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

  const dateTime = document.createElement("h2");
  const resolvedAddress = document.createElement("h2");
  dateTime.textContent = processedData.today.datetime;
  resolvedAddress.textContent = processedData.today.resolvedAddress;

  const sunriseTitle = document.createElement("h2");
  const sunriseText = document.createElement("p");
  sunriseTitle.textContent = "Sunrise";
  sunriseText.textContent = processedData.today.sunrise;
  const srdiv = document.createElement("div");
  srdiv.append(sunriseTitle, sunriseText);

  const sunsetTitle = document.createElement("h2");
  const sunsetText = document.createElement("p");
  sunsetTitle.textContent = "Sunset";
  sunsetText.textContent = processedData.today.sunset;
  const ssdiv = document.createElement("div");
  ssdiv.append(sunsetTitle, sunsetText);

  todayInfoDiv.append(dateTime, resolvedAddress, srdiv, ssdiv);

  const img = document.createElement("img");
  img.className = "weather-img";
  img.src = selectImgSrc(processedData.currentConditions.conditions);
  const cimgdiv = document.createElement("div");
  cimgdiv.className = "img-div";
  cimgdiv.append(img);

  const currentConditionsTitle = document.createElement("h3");
  const currentConditionsText = document.createElement("p");
  currentConditionsTitle.textContent = "Conditions";
  currentConditionsText.textContent =
    processedData.currentConditions.conditions;
  const ccdiv = document.createElement("div");
  ccdiv.append(currentConditionsTitle, currentConditionsText);

  const currentTempTitle = document.createElement("h3");
  const currentTempText = document.createElement("p");
  currentTempTitle.textContent = "Temperature";
  currentTempText.textContent = processedData.currentConditions.temp + temp;
  const ctdiv = document.createElement("div");
  ctdiv.append(currentTempTitle, currentTempText);

  currentDiv.append(cimgdiv, ccdiv, ctdiv);

  const todayImg = document.createElement("img");
  todayImg.className = "weather-img";
  todayImg.src = selectImgSrc(processedData.today.conditions);
  const timgdiv = document.createElement("div");
  timgdiv.className = "img-div";
  timgdiv.append(todayImg);

  const todayConditionsTitle = document.createElement("h3");
  const todayConditionsText = document.createElement("p");
  todayConditionsTitle.textContent = "Conditions";
  todayConditionsText.textContent = processedData.currentConditions.conditions;
  const tcdiv = document.createElement("div");
  tcdiv.append(todayConditionsTitle, todayConditionsText);

  const todayDescriptionTitle = document.createElement("h3");
  const todayDescriptionText = document.createElement("p");
  todayDescriptionTitle.textContent = "Description";
  todayDescriptionText.textContent = processedData.today.description;
  const tddiv = document.createElement("div");
  tddiv.append(todayDescriptionTitle, todayDescriptionText);

  const todayTempTitle = document.createElement("h3");
  const todayTempText = document.createElement("p");
  todayTempTitle.textContent = "Temperature";
  todayTempText.textContent = processedData.today.temp + temp;
  const ttdiv = document.createElement("div");
  ttdiv.append(todayTempTitle, todayTempText);

  todayDiv.append(timgdiv, tcdiv, tddiv, ttdiv);

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

  containerDiv.style.display = "";
}

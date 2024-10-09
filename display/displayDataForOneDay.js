import decideUnits from "../utils/decideUnits.js";
import selectImgSrc from "../utils/selectImgSrc.js";

export default function displayDataForOneDay(
  processedData,
  containerDiv,
  unitGroup
) {
  const temp = decideUnits(unitGroup).temp;
  const oneDayDiv = containerDiv.querySelector("div");
  oneDayDiv.innerHTML = "";

  const dateTime = document.createElement("h2");
  const resolvedAddress = document.createElement("h2");
  dateTime.textContent = processedData.datetime;
  resolvedAddress.textContent = processedData.resolvedAddress;

  const img = document.createElement("img");
  img.className = "weather-img";

  img.src = selectImgSrc(processedData.conditions);
  const div = document.createElement("div");
  div.className = "img-div";
  div.append(img);

  const conditionsTitle = document.createElement("h3");
  const conditionsText = document.createElement("p");
  conditionsTitle.textContent = "Conditions";
  conditionsText.textContent = processedData.conditions;
  const div1 = document.createElement("div");
  div1.append(conditionsTitle, conditionsText);

  const descriptionTitle = document.createElement("h3");
  const descriptionText = document.createElement("p");
  descriptionTitle.textContent = "Description";
  descriptionText.textContent = processedData.description;
  const div2 = document.createElement("div");
  div2.append(descriptionTitle, descriptionText);

  const tempTitle = document.createElement("h3");
  const tempText = document.createElement("p");
  tempTitle.textContent = "Temperature";
  tempText.textContent = processedData.temp + temp;
  const div3 = document.createElement("div");
  div3.append(tempTitle, tempText);

  const sunriseTitle = document.createElement("h2");
  const sunriseText = document.createElement("p");
  sunriseTitle.textContent = "Sunrise";
  sunriseText.textContent = processedData.sunrise;
  const div4 = document.createElement("div");
  div4.append(sunriseTitle, sunriseText);

  const sunsetTitle = document.createElement("h2");
  const sunsetText = document.createElement("p");
  sunsetTitle.textContent = "Sunset";
  sunsetText.textContent = processedData.sunset;
  const div5 = document.createElement("div");
  div5.append(sunsetTitle, sunsetText);

  oneDayDiv.append(
    dateTime,
    resolvedAddress,
    div,
    div1,
    div2,
    div3,
    div4,
    div5
  );

  containerDiv.style.display = "";
}

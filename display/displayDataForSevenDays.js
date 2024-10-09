import decideUnits from "../utils/decideUnits.js";
import selectImgSrc from "../utils/selectImgSrc.js";

export default function displayDataForOneDay(
  processedData,
  containerDiv,
  unitGroup
) {
  const temp = decideUnits(unitGroup).temp;

  const sevenDayDiv = containerDiv.querySelector("div");
  sevenDayDiv.innerHTML = "";

  for (let i = 0; i < 7; i++) {
    const dateTime = document.createElement("h2");
    const resolvedAddress = document.createElement("h2");
    dateTime.textContent = processedData[i].datetime;
    resolvedAddress.textContent = processedData.resolvedAddress;

    const img = document.createElement("img");
    img.className = "weather-img";
    img.src = selectImgSrc(processedData[i].conditions);

    const conditionsTitle = document.createElement("h3");
    const conditionsText = document.createElement("p");
    conditionsTitle.textContent = "Conditions";
    conditionsText.textContent = processedData[i].conditions;

    const descriptionTitle = document.createElement("h3");
    const descriptionText = document.createElement("p");
    descriptionTitle.textContent = "Description";
    descriptionText.textContent = processedData[i].description;

    const sunriseTitle = document.createElement("h2");
    const sunriseText = document.createElement("p");
    sunriseTitle.textContent = "Sunrise";
    sunriseText.textContent = processedData[i].sunrise;

    const sunsetTitle = document.createElement("h2");
    const sunsetText = document.createElement("p");
    sunsetTitle.textContent = "Sunset";
    sunsetText.textContent = processedData[i].sunset;

    const tempTitle = document.createElement("h3");
    const tempText = document.createElement("p");
    tempTitle.textContent = "Temperature";
    tempText.textContent = processedData[i].temp + temp;

    const oneDayDiv = document.createElement("div");
    oneDayDiv.append(
      dateTime,
      resolvedAddress,
      img,
      conditionsTitle,
      conditionsText,
      descriptionTitle,
      descriptionText,
      tempTitle,
      tempText,
      sunriseTitle,
      sunriseText,
      sunsetTitle,
      sunsetText
    );

    sevenDayDiv.append(oneDayDiv);
  }

  containerDiv.style.display = "";
}

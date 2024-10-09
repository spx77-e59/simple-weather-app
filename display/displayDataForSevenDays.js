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
    const idiv = document.createElement("div");
    idiv.className = "img-div";
    idiv.append(img);

    const conditionsTitle = document.createElement("h3");
    const conditionsText = document.createElement("p");
    conditionsTitle.textContent = "Conditions";
    conditionsText.textContent = processedData[i].conditions;
    const cdiv = document.createElement("div");
    cdiv.append(conditionsTitle, conditionsText);

    const descriptionTitle = document.createElement("h3");
    const descriptionText = document.createElement("p");
    descriptionTitle.textContent = "Description";
    descriptionText.textContent = processedData[i].description;
    const ddiv = document.createElement("div");
    ddiv.append(descriptionTitle, descriptionText);

    const sunriseTitle = document.createElement("h2");
    const sunriseText = document.createElement("p");
    sunriseTitle.textContent = "Sunrise";
    sunriseText.textContent = processedData[i].sunrise;
    const srdiv = document.createElement("div");
    srdiv.append(sunriseTitle, sunriseText);

    const sunsetTitle = document.createElement("h2");
    const sunsetText = document.createElement("p");
    sunsetTitle.textContent = "Sunset";
    sunsetText.textContent = processedData[i].sunset;
    const ssdiv = document.createElement("div");
    ssdiv.append(sunsetTitle, sunsetText);

    const tempTitle = document.createElement("h3");
    const tempText = document.createElement("p");
    tempTitle.textContent = "Temperature";
    tempText.textContent = processedData[i].temp + temp;
    const tdiv = document.createElement("div");
    tdiv.append(tempTitle, tempText);

    const oneDayDiv = document.createElement("div");
    oneDayDiv.append(
      dateTime,
      resolvedAddress,
      idiv,
      cdiv,
      ddiv,
      tdiv,
      srdiv,
      ssdiv
    );

    sevenDayDiv.append(oneDayDiv);
  }

  containerDiv.style.display = "";
}

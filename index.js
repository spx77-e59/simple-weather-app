import processDataForSevenDays from "./functions/processDataForSevenDays.js";
import processDataForToday from "./functions/processDataForToday.js";
import processDataForOneDay from "./functions/processDataForOneDay.js";
import fetchData from "./functions/fetchData.js";
import displayDataForToday from "./display/displayDataForToday.js";
import displayDataForOneDay from "./display/displayDataForOneDay.js";
import displayDataForSevenDays from "./display/displayDataForSevenDays.js";

const contentDiv = document.querySelector("#content");
const todaycontainer = document.querySelector("#todayContainer");
const yesterdayContainer = document.querySelector("#yesterdayContainer");
const tomorrowContainer = document.querySelector("#tomorrowContainer");
const lastSevenDaysContainer = document.querySelector(
  "#lastSevenDaysContainer"
);
const nextSevenDaysContainer = document.querySelector(
  "#nextSevenDaysContainer"
);

const form = document.querySelector("form");
form.addEventListener("submit", async (e) => {
  e.preventDefault();

  todaycontainer.style.display = "none";
  yesterdayContainer.style.display = "none";
  tomorrowContainer.style.display = "none";
  lastSevenDaysContainer.style.display = "none";
  nextSevenDaysContainer.style.display = "none";

  const location = form.location.value;
  const period = form.period.value;
  const unitGroup = form.unitGroup.value;

  const loadingMessage = document.createElement("h1");
  loadingMessage.className = "loading-message";
  loadingMessage.textContent = "Fetching Data Please Wait...";
  contentDiv.append(loadingMessage);

  const data = await fetchData(location, period, unitGroup);

  if (data === "too many requests") {
    loadingMessage.textContent =
      "Can't fetch data right now. Please try again later...";
    setTimeout(() => {
      loadingMessage.remove();
    }, 3000);
    return;
  }

  if (data === "bad location") {
    loadingMessage.textContent =
      "No data found for that location. Please try another location.";
    setTimeout(() => {
      loadingMessage.remove();
    }, 3000);
    return;
  }

  loadingMessage.remove();
  getProcessedDataAndDisplay(period, data, unitGroup);
});

function getProcessedDataAndDisplay(period, data, unitGroup) {
  let processedData;
  switch (period) {
    case "today":
      processedData = processDataForToday(data);
      displayDataForToday(processedData, todaycontainer, unitGroup);
      break;
    case "yesterday":
      processedData = processDataForOneDay(data);
      displayDataForOneDay(processedData, yesterdayContainer, unitGroup);
      break;
    case "tomorrow":
      processedData = processDataForOneDay(data);
      displayDataForOneDay(processedData, tomorrowContainer, unitGroup);
      break;
    case "last7days":
      processedData = processDataForSevenDays(data);
      displayDataForSevenDays(processedData, lastSevenDaysContainer, unitGroup);
      break;
    case "next7days":
      processedData = processDataForSevenDays(data);
      displayDataForSevenDays(processedData, nextSevenDaysContainer, unitGroup);
      break;
  }
}

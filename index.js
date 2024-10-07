import processDataForSevenDays from "./functions/processDataForSevenDays.js";
import processDataForToday from "./functions/processDataForToday.js";
import processDataForOneDay from "./functions/processDataForOneDay.js";
import fetchData from "./functions/fetchData.js";
import displayDataForToday from "./display/displayDataForToday.js";
import displayDataForOneDay from "./display/displayDataForOneDay.js";

const todaycontainer = document.querySelector("#todayContainer");
const yesterdayContainer = document.querySelector("#yesterdayContainer");
const tomorrowContainer = document.querySelector("#tomorrowContainer");
const sevenDaysContainer = document.querySelector("#sevenDaysContainer");

const form = document.querySelector("form");
form.addEventListener("submit", async (e) => {
  todaycontainer.style.display = "none";
  yesterdayContainer.style.display = "none";
  tomorrowContainer.style.display = "none";
  sevenDaysContainer.style.display = "none";
  e.preventDefault();
  const location = form.location.value;
  const period = form.period.value;
  const unitGroup = form.unitGroup.value;

  const data = await fetchData(location, period, unitGroup);

  getProcessedDataAndDisplay(period, data);
});

function getProcessedDataAndDisplay(period, data) {
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
    case "next7days":
      return processDataForSevenDays(data);
  }
}

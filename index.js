import processDataForSevenDays from "./functions/processDataForSevenDays.js";
import processDataForToday from "./functions/processDataForToday.js";
import processDataForOneDay from "./functions/processDataForOneDay.js";
import fetchData from "./functions/fetchData.js";

const form = document.querySelector("form");
form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const location = form.location.value;
  const period = form.period.value;
  const unitGroup = form.unitGroup.value;
  console.log(location, period, unitGroup);

  const data = await fetchData(location, period, unitGroup);
  console.log("data", data);

  const processedData = getProcessedData(period, data);
  console.log("processed data", processedData);
});

function getProcessedData(period, data) {
  console.log(data);
  switch (period) {
    case "today":
      return processDataForToday(data);
    case "yesterday":
    case "tomorrow":
      return processDataForOneDay(data);
    case "last7days":
    case "next7days":
      return processDataForSevenDays(data);
  }
}

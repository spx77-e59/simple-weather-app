export default function decideUnits(unitGroup) {
  let temp;

  if (unitGroup === "metric" || unitGroup === "uk") {
    temp = "°C";
  } else {
    temp = "°F";
  }

  return { temp };
}

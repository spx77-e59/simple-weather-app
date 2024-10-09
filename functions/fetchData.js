export default async function fetchData(location, period, unitGroup) {
  const API_KEY = "C8DS7WBLWMLTABC2WZD8XBWNE";
  const BASE_URL =
    "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/";
  const url = `${BASE_URL}${location}/${period}?unitGroup=${unitGroup}&key=${API_KEY}&contentType=json`;

  try {
    const response = await fetch(url, { mode: "cors" });
    if (!response.ok) {
      throw new Error(`Error fetching data: ${response.status}`);
    }
    const data = await response.json();

    return data;
  } catch (error) {
    console.error("Error:", error);
  }
}

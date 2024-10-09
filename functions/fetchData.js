export default async function fetchData(location, period, unitGroup) {
  const API_KEY = "9ZWJP8DXHVBVKJGL3WGLBZBLX";
  const BASE_URL =
    "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/";
  const url = `${BASE_URL}${location}/${period}?unitGroup=${unitGroup}&key=${API_KEY}&contentType=json`;

  // TODO: remove
  console.log(url);
  try {
    const response = await fetch(url, { mode: "cors" });
    if (!response.ok) {
      throw new Error(`Error fetching data: ${response.status}`);
    }
    const data = await response.json();

    console.log("data", data);
    return data;
  } catch (error) {
    console.error("Error:", error);
  }
}

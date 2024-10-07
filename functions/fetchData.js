export default async function fetchData(location, unitGroup, period) {
  const API_KEY = "9ZWJP8DXHVBVKJGL3WGLBZBLX";
  try {
    const response = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?/${period}?${unitGroup}=us&key=${API_KEY}&contentType=json`,
      { mode: "cors" }
    );
    if (!response.ok) {
      throw new Error(`Error fetching data: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error:", error);
  }
}

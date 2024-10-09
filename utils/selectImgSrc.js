export default function selectImgSrc(condition) {

  if (condition === "Rain") {
    return "../img/rainy.png";
  }
  if (condition === "Snow") {
    return "../img/snowy.png";
  }
  if (condition === "Overcast") {
    return "../img/cloudy.png";
  }
  if (condition === "Clear") {
    return "../img/sunny.png";
  }
  if (condition === "Partially cloudy") {
    return "../img/partially-cloudy.png";
  }
  if (condition === "Rain, Partially cloudy") {
    return "../img/cloudy2.png";
  }
  if (condition === "Rain, Overcast") {
    return "../img/rainy.png";
  }
  if (condition === "Rain, Snow") {
    return "../img/snowy2.png";
  }
  if (condition === "Snow, Overcast") {
    return "../img/snowy.png";
  }
  if (condition === "Rain, Snow, Overcast") {
    return "../img/snowy2.png";
  }
  return "#";
}

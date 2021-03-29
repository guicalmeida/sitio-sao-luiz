import { generate, multiAppend } from "./shortcutFunctions";

const map = generate("iframe", "map");
map.setAttribute(
  "src",
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14631.53322444712!2d-47.72204890137226!3d-23.536699182187807!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xcc9ce0441e260b99!2zU8OtdGlvIFPDo28gTHVpeg!5e0!3m2!1spt-BR!2sbr!4v1616552850573!5m2!1spt-BR!2sbr"
);
map.setAttribute("allowfullscreen", true);
map.setAttribute("loading", "lazy");

const weatherDiv = generate("div", "weatherDiv");
let weatherTitle = generate("h1", "weatherTitle");
let tempDiv = generate("div", "allTempDiv");

let tempNowDiv = generate("div", "tempDiv");
let tempNow = generate("p", "temp");
let tempNowTxt = generate("p", "tempTxt", "Temperatura");
multiAppend(tempNowDiv, tempNowTxt, tempNow);

let tempFeelDiv = generate("div", "tempDiv");
let tempFeel = generate("p", "temp");
let tempFeelTxt = generate("p", "tempTxt", "Sensação térmica");
multiAppend(tempFeelDiv, tempFeelTxt, tempFeel);

let moreInfo = generate("a", "moreInfo", "Open Weather Map >");
moreInfo.href = "https://openweathermap.org/city/3471849";
moreInfo.target = "_blank";
multiAppend(tempDiv, tempNowDiv, tempFeelDiv);
multiAppend(weatherDiv, weatherTitle, tempDiv, moreInfo);
(async function getWeather() {
  const response = await fetch(
    "http://api.openweathermap.org/data/2.5/weather?q=Ara%C3%A7oiaba%20da%20serra&lang=pt_br&appid=ee5f5677a63d2406b5a967e5d2beee70&units=metric",
    { mode: "cors" }
  );
  const weatherData = await response.json();
  tempNow.innerText = Math.round(weatherData.main.temp) + "ºC";
  tempFeel.innerText = Math.round(weatherData.main.feels_like) + "ºC";
  weatherTitle.innerText =
    weatherData.weather[0].description + " em Araçoiaba da Serra - SP";
})();
export { map, weatherDiv };

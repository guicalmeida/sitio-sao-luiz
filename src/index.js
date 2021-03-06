import {
  renderElement,
  generateMenu,
  generate,
  changeTab,
} from "./shortcutFunctions";
import { loadHome } from "./home";
import { resumo } from "./espaco";
import { calendar, lodgingValue, priceH1 } from "./calendario";
import { map, weatherDiv } from "./localizacao";
import { contatoDiv } from "./contato";

let body = document.querySelector("body");
let contentDiv = document.querySelector("#content");
let menu = generateMenu("Home", "Espaço", "Preço", "Mapa", "Contato");
let active = generate("div", "activeMenu");
menu.appendChild(active);
body.insertBefore(menu, contentDiv);

//firstRender
renderElement(loadHome());
active.setAttribute("style", "margin: 0 auto 0 8%");

//function to add motion do the active Div when areas are accessed via home buttons
function homeBtnsListener() {
  let leftBtn = document.querySelector(".button1");
  let rightBtn = document.querySelector(".button2");
  leftBtn.addEventListener("click", (e) => {
    changeTab(resumo());
    active.setAttribute("style", "margin: 0 auto 0 26%");
  });
  rightBtn.addEventListener("click", (e) => {
    changeTab(priceH1, calendar);
    active.setAttribute("style", "margin: 0 auto 0 44%");
    lodgingValue();
  });
}
homeBtnsListener();

//Buttons
let homeBtn = document.querySelector("#item1");
homeBtn.addEventListener("click", (e) => {
  changeTab(loadHome());
  active.setAttribute("style", "margin: 0 auto 0 8%");
  homeBtnsListener();
});

let espacoBtn = document.querySelector("#item2");
espacoBtn.addEventListener("click", function () {
  changeTab(resumo());
  active.setAttribute("style", "margin: 0 auto 0 26%");
});

let datasBtn = document.querySelector("#item3");
datasBtn.addEventListener("click", function () {
  changeTab(priceH1, calendar);
  active.setAttribute("style", "margin: 0 auto 0 44%");
  lodgingValue();
});

let localBtn = document.querySelector("#item4");
localBtn.addEventListener("click", function () {
  changeTab(weatherDiv, map);
  active.setAttribute("style", "margin: 0 auto 0 62%");
});

let contatoBtn = document.querySelector("#item5");
contatoBtn.addEventListener("click", function () {
  changeTab(contatoDiv);
  active.setAttribute("style", "margin: 0 auto 0 80%");
});

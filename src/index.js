import {renderElement, generateMenu, changeTab} from "./shortcutFunctions";
import {createHeader, background, overlay} from "./home";
import {resumo} from "./espaco";
import { createCalendar } from "./disponibilidade";

let body = document.querySelector("body");
let contentDiv = document.querySelector("#content");
let menu = generateMenu("Home", "Espaço", "Preço", "Localização", "Contato");
body.insertBefore(menu, contentDiv);

(function firstLoad() {
    renderElement(createHeader());
    renderElement(overlay());
    renderElement(background());
})();

let homeBtn = document.querySelector("#item1");
homeBtn.addEventListener("click", e => {
    changeTab(
        createHeader(),
        overlay(),
        background()
    );
})

let espacoBtn = document.querySelector("#item2");
espacoBtn.addEventListener("click", function(){
    changeTab(
        resumo()
    );
})

let disponBtn = document.querySelector("#item3");
disponBtn.addEventListener("click", function(){   
    changeTab(
        createCalendar()
    );
    calendar.render();
})


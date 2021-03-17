import {renderElement, generateMenu, changeTab} from "./shortcutFunctions";
import {createHeader, background, overlay} from "./home";
import {resumo} from "./espaco";

let body = document.querySelector("body");
let contentDiv = document.querySelector("#content");
body.insertBefore(generateMenu("Home", "Espaço", "Preço", "Localização", "Contato"), contentDiv)

function firstLoad() {
    renderElement(createHeader());
    renderElement(overlay());
    renderElement(background());
}

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

firstLoad()








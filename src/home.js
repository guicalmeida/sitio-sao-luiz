import { construcao } from "./construcao";
import { resumo } from "./espaco";
import { changeTab, generate, multiAppend } from "./shortcutFunctions";

function loadHome() {
    let homeDiv = generate("div", "homeDiv");
    (function createHeader() {
        let header = generate("header", "header");
        let title = generate("h1", "title", "SÍTIO SÃO LUIZ");
        let subtitle = generate("h2", "subtitle", "O refúgio verde da sua família");
        let btnDiv = generate("div", "btnDiv");
        let saibaMaisBtn = generate("button", "button", "Conheça o sítio");
            saibaMaisBtn.addEventListener("click", e => {
                changeTab(resumo());
                active.setAttribute("style", "margin: 0 auto 0 26%");
            })
        let agendeBtn = generate("button", "button", "Marque uma data");
            agendeBtn.addEventListener("click", e => {
            changeTab(construcao());
            active.setAttribute("style", "margin: 0 auto 0 44%");
            })
        multiAppend(btnDiv, saibaMaisBtn, agendeBtn);
        multiAppend(header, title, subtitle, btnDiv)
        homeDiv.appendChild(header);
    })();

    (function background() {
        let videoBG = document.createElement("video");
        videoBG.setAttribute("autoplay", true);
        videoBG.setAttribute("loop", true);
        videoBG.setAttribute("id", "videoBG");

        let videoSource = document.createElement("source");
        videoSource.src = "./Resources/sitiodrone2.mp4";
        videoSource.type = "video/mp4";

        videoBG.appendChild(videoSource);
        homeDiv.appendChild(videoBG);
    })();

    (function overlay() {
        let overlay = generate("div", "overlay");
        homeDiv.appendChild(overlay);
    })();
    return homeDiv;
}


export {loadHome};
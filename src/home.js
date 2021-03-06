import { generate, multiAppend } from "./shortcutFunctions";

function loadHome() {
    let homeDiv = generate("div", "homeDiv");
    (function createHeader() {
        let header = generate("header", "header");
        let title = generate("h1", "title", "SÍTIO SÃO LUIZ");
        let subtitle = generate("h2", "subtitle", "O refúgio verde da sua família");
        let btnDiv = generate("div", "btnDiv");
        let saibaMaisBtn = generate("button", "button1", "Conheça o sítio");
        let agendeBtn = generate("button", "button2", "Marque uma data");
        multiAppend(btnDiv, saibaMaisBtn, agendeBtn);
        multiAppend(header, title, subtitle, btnDiv)
        homeDiv.appendChild(header);
    })();

    (function background() {
        let videoBG = document.createElement("video");
        videoBG.setAttribute("autoplay", true);
        videoBG.setAttribute("loop", true);
        videoBG.setAttribute("id", "videoBG");
        videoBG.setAttribute("muted", true);

        let videoSource = document.createElement("source");
        videoSource.src = "./Resources/Sitiodrone-1.m4v";
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
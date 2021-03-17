import {generate} from "./shortcutFunctions";

function createHeader () {
    let header = generate("header", "header");
    let title = generate("h1", "title", "SÍTIO SÃO LUIZ");
    let subtitle = generate("h2", "subtitle", "Bem-vindo ao paraíso");
    header.appendChild(title);
    header.appendChild(subtitle);
    return (header);
}

function background () {
    let videoBG = document.createElement("video");
    videoBG.setAttribute("autoplay",true);
    videoBG.setAttribute("loop", true);
    videoBG.setAttribute("id", "videoBG");

    let videoSource = document.createElement("source");
    videoSource.src = "./Resources/sitiodrone2.mp4";
    videoSource.type = "video/mp4";

    videoBG.appendChild(videoSource);
    return videoBG;
};

function overlay() {
    let overlay = generate("div", "overlay");
    return overlay;
}

export {createHeader, background, overlay};
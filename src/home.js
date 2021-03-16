import {generate, toBody} from "./shortcutFunctions";

function createHeader () {
    let header = generate("header", "header");
    let title = generate("h1", "title", "SÍTIO SÃO LUIZ");
    let subtitle = generate("h2", "subtitle", "Bem-vindo ao paraíso");
    header.created.appendChild(title.created);
    header.created.appendChild(subtitle.created);
    return (header.created);
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
    return overlay.created;
}

export {createHeader, background, overlay};
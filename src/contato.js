import { generate, multiAppend } from "./shortcutFunctions";

let contatoDiv = generate("div", "contatoDiv")
let duvidaDiv = generate("div", "duvidaDiv")
let titulo = generate("h1","duvidaTitulo","Ficou alguma dúvida?");
let subtitulo = generate("p", "duvidaSub", "Envie uma mensagem!");
let duvidaBtn = generate("button","airbnbBtn", "Fale conosco");
let airbnbIco = generate("i", "fab");
  airbnbIco.classList.add("fa-airbnb");
  duvidaBtn.addEventListener("click", e =>{return window.open("https://www.airbnb.com.br/rooms/43450708")})
  duvidaBtn.appendChild(airbnbIco);
multiAppend(duvidaDiv, titulo, subtitulo);
multiAppend(contatoDiv, duvidaDiv, duvidaBtn)

export {contatoDiv}
import { generate } from "./shortcutFunctions";


let map = generate("iframe", "map");
map.setAttribute("src", "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14631.53322444712!2d-47.72204890137226!3d-23.536699182187807!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xcc9ce0441e260b99!2zU8OtdGlvIFPDo28gTHVpeg!5e0!3m2!1spt-BR!2sbr!4v1616552850573!5m2!1spt-BR!2sbr");
map.setAttribute("allowfullscreen", true);
map.setAttribute("loading", "lazy");

export{map}
import {generateMenu} from "./shortcutFunctions";

function createMenu () {
    return generateMenu("Home", "Quartos", "Preço", "Localização", "Contato").navNode;
}

export {createMenu}
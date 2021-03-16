import {createHeader, background, overlay} from "./home";
import {toBody} from "./shortcutFunctions";
import {createMenu} from "./menu";


toBody(createHeader());
toBody(background());
toBody(overlay());
toBody(createMenu());





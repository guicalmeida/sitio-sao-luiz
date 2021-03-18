/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/disponibilidade.js":
/*!********************************!*\
  !*** ./src/disponibilidade.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createCalendar\": () => (/* binding */ createCalendar)\n/* harmony export */ });\n/* harmony import */ var _shortcutFunctions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shortcutFunctions */ \"./src/shortcutFunctions.js\");\n\n\nfunction createCalendar() {\n    let calendarDiv = (0,_shortcutFunctions__WEBPACK_IMPORTED_MODULE_0__.generate)(\"div\", \"calendarDiv\");\n    calendarDiv.setAttribute(\"style\", \"height: 80vh; width: 80vw; display: block; top: 50%; left: 50%; margin-right: -50%; transform: translate(-50%, -50%)\");\n    let calendarEl = (0,_shortcutFunctions__WEBPACK_IMPORTED_MODULE_0__.generate)(\"div\");\n    calendarEl.setAttribute(\"id\", \"calendar\");\n    (function () {\n        var calendar = new FullCalendar.Calendar(calendarEl, {\n          initialView: 'dayGridMonth',\n          height: \"100%\",\n          locale: \"pt-br\"\n\n        });\n      })();\n    calendarDiv.appendChild(calendarEl)\n    return calendarDiv;\n}\n\n\n\n\n\n//# sourceURL=webpack://sitiosaoluiz/./src/disponibilidade.js?");

/***/ }),

/***/ "./src/espaco.js":
/*!***********************!*\
  !*** ./src/espaco.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"resumo\": () => (/* binding */ resumo)\n/* harmony export */ });\n/* harmony import */ var _shortcutFunctions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shortcutFunctions */ \"./src/shortcutFunctions.js\");\n\n\nfunction resumo () {\n    let ficha = (0,_shortcutFunctions__WEBPACK_IMPORTED_MODULE_0__.generate)(\"div\", \"resumo\");\n\n    let tamanho = (0,_shortcutFunctions__WEBPACK_IMPORTED_MODULE_0__.generate)(\"div\", \"tamanho\");\n        let textoSuperior = (0,_shortcutFunctions__WEBPACK_IMPORTED_MODULE_0__.generate)(\"p\", \"tamanhoPre\", \"mais de\");\n        let textoDestaque = (0,_shortcutFunctions__WEBPACK_IMPORTED_MODULE_0__.generate)(\"p\", \"tamanhoN\", \"15.000m²\");\n        let textoInferior = (0,_shortcutFunctions__WEBPACK_IMPORTED_MODULE_0__.generate)(\"p\", \"tamanhoPos\", \"de área útil para sua família\");\n    (0,_shortcutFunctions__WEBPACK_IMPORTED_MODULE_0__.multiAppend)(tamanho, textoSuperior, textoDestaque, textoInferior);\n    \n    let areaExterna = (0,_shortcutFunctions__WEBPACK_IMPORTED_MODULE_0__.generate)(\"div\", \"areaExternaDiv\");\n        let piscinaTitulo = (0,_shortcutFunctions__WEBPACK_IMPORTED_MODULE_0__.generate)(\"h2\", \"areaExternaTitulo\", \"Piscina com borda infinita\");\n        let piscinaDesc = (0,_shortcutFunctions__WEBPACK_IMPORTED_MODULE_0__.generate)(\"p\", \"areaExternaDesc\", \"Com 10m de comprimento, a borda infinita aponta para uma profunda vista bucólica, com montes verdes que marcam o território da Floresta Nacional de Ipanema\");\n        let vegetacaoTitulo = (0,_shortcutFunctions__WEBPACK_IMPORTED_MODULE_0__.generate)(\"h2\", \"areaExternaTitulo\", \"Vegetação\");\n        let vegetacaoDesc = (0,_shortcutFunctions__WEBPACK_IMPORTED_MODULE_0__.generate)(\"p\", \"areaExternaDesc\", \"Flores coloridas, árvores frutíferas, arbustos de ervas finas e plantas nativas se misturam na paisagem verde que compõe a área em que ficarão no sítio.\");\n        let cozExtTitulo = (0,_shortcutFunctions__WEBPACK_IMPORTED_MODULE_0__.generate)(\"h2\", \"areaExternaTitulo\", \"Cozinha Externa\");\n        let cozExtDesc = (0,_shortcutFunctions__WEBPACK_IMPORTED_MODULE_0__.generate)(\"p\", \"areaExternaDesc\", \"Próximo ao salão de jogos e à piscina, um forno de pizza e churrasqueira, equipados com todos utensílios necessários.\");\n        let entretTitulo = (0,_shortcutFunctions__WEBPACK_IMPORTED_MODULE_0__.generate)(\"h2\", \"areaExternaTitulo\", \"Entretenimento\");\n        let entretDesc = (0,_shortcutFunctions__WEBPACK_IMPORTED_MODULE_0__.generate)(\"p\", \"areaExternaDesc\", \"Campo de futebol, mesa para carteado, mesa de ping-pong, piscina, espaço para fogueira e muita área livre para brincadeiras são algumas opções para sua família - e para aproveitar um filme a noite, há TV a cabo e Netflix.\");\n    (0,_shortcutFunctions__WEBPACK_IMPORTED_MODULE_0__.multiAppend)(areaExterna, piscinaTitulo, piscinaDesc, vegetacaoTitulo, vegetacaoDesc, cozExtTitulo, cozExtDesc, entretTitulo, entretDesc);\n\n    let casa = (0,_shortcutFunctions__WEBPACK_IMPORTED_MODULE_0__.generate)(\"div\", \"casaDiv\");\n        let quartosTitulo = (0,_shortcutFunctions__WEBPACK_IMPORTED_MODULE_0__.generate)(\"h2\", \"casaTitulo\", \"7 suítes\");\n        let quartosDesc = (0,_shortcutFunctions__WEBPACK_IMPORTED_MODULE_0__.generate)(\"p\", \"casaDesc\", \"4 camas de casal e 8 camas de solteiro - sendo 4 em beliches, perfeito para crianças - dividas em 7 quartos com banheiros completos e chuveiro a gás\");\n        let cozinhaTitulo = (0,_shortcutFunctions__WEBPACK_IMPORTED_MODULE_0__.generate)(\"h2\", \"casaTitulo\", \"Cozinha completa e copa\");\n        let cozinhaDesc = (0,_shortcutFunctions__WEBPACK_IMPORTED_MODULE_0__.generate)(\"p\", \"casaDesc\", \"Com infraestrutura e louça para todos seus hóspedes, a cozinha ainda conta com uma copa em anexo ideal para o café da manhã.\");\n        let salasTitulo = (0,_shortcutFunctions__WEBPACK_IMPORTED_MODULE_0__.generate)(\"h2\", \"casaTitulo\", \"Salas de estar e Jantar\");\n        let salasDesc = (0,_shortcutFunctions__WEBPACK_IMPORTED_MODULE_0__.generate)(\"p\", \"casaDesc\", \"Além de uma ampla sala de estar, o sítio conta com uma sala de jantar e outra de leitura.\");\n        let equipeTitulo = (0,_shortcutFunctions__WEBPACK_IMPORTED_MODULE_0__.generate)(\"h2\", \"casaTitulo\", \"Equipe profissional\");\n        let equipeDesc = (0,_shortcutFunctions__WEBPACK_IMPORTED_MODULE_0__.generate)(\"p\", \"casaDesc\", \"Sua estadia será acompanhada pela Lu, auxiliar da casa encarregada da limpeza e culinária, e Pedro, gestor do sítio que ajudará com qualquer problema que possa surgir. Opcionalmente, você poderá também contratar churrasqueiro e pizzaiolo.\");\n    (0,_shortcutFunctions__WEBPACK_IMPORTED_MODULE_0__.multiAppend)(casa, quartosTitulo, quartosDesc, cozinhaTitulo, cozinhaDesc, salasTitulo, salasDesc, equipeTitulo, equipeDesc)\n \n    ;(0,_shortcutFunctions__WEBPACK_IMPORTED_MODULE_0__.multiAppend)(ficha, tamanho, areaExterna, casa);\n    return ficha;\n}\n\n\n\n\n//# sourceURL=webpack://sitiosaoluiz/./src/espaco.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createHeader\": () => (/* binding */ createHeader),\n/* harmony export */   \"background\": () => (/* binding */ background),\n/* harmony export */   \"overlay\": () => (/* binding */ overlay)\n/* harmony export */ });\n/* harmony import */ var _shortcutFunctions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shortcutFunctions */ \"./src/shortcutFunctions.js\");\n\n\nfunction createHeader () {\n    let header = (0,_shortcutFunctions__WEBPACK_IMPORTED_MODULE_0__.generate)(\"header\", \"header\");\n    let title = (0,_shortcutFunctions__WEBPACK_IMPORTED_MODULE_0__.generate)(\"h1\", \"title\", \"SÍTIO SÃO LUIZ\");\n    let subtitle = (0,_shortcutFunctions__WEBPACK_IMPORTED_MODULE_0__.generate)(\"h2\", \"subtitle\", \"Bem-vindo ao paraíso\");\n    header.appendChild(title);\n    header.appendChild(subtitle);\n    return (header);\n}\n\nfunction background () {\n    let videoBG = document.createElement(\"video\");\n    videoBG.setAttribute(\"autoplay\",true);\n    videoBG.setAttribute(\"loop\", true);\n    videoBG.setAttribute(\"id\", \"videoBG\");\n\n    let videoSource = document.createElement(\"source\");\n    videoSource.src = \"./Resources/sitiodrone2.mp4\";\n    videoSource.type = \"video/mp4\";\n\n    videoBG.appendChild(videoSource);\n    return videoBG;\n};\n\nfunction overlay() {\n    let overlay = (0,_shortcutFunctions__WEBPACK_IMPORTED_MODULE_0__.generate)(\"div\", \"overlay\");\n    return overlay;\n}\n\n\n\n//# sourceURL=webpack://sitiosaoluiz/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _shortcutFunctions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shortcutFunctions */ \"./src/shortcutFunctions.js\");\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _espaco__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./espaco */ \"./src/espaco.js\");\n/* harmony import */ var _disponibilidade__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./disponibilidade */ \"./src/disponibilidade.js\");\n\n\n\n\n\nlet body = document.querySelector(\"body\");\nlet contentDiv = document.querySelector(\"#content\");\nlet menu = (0,_shortcutFunctions__WEBPACK_IMPORTED_MODULE_0__.generateMenu)(\"Home\", \"Espaço\", \"Preço\", \"Localização\", \"Contato\");\nbody.insertBefore(menu, contentDiv);\n\n(function firstLoad() {\n    (0,_shortcutFunctions__WEBPACK_IMPORTED_MODULE_0__.renderElement)((0,_home__WEBPACK_IMPORTED_MODULE_1__.createHeader)());\n    (0,_shortcutFunctions__WEBPACK_IMPORTED_MODULE_0__.renderElement)((0,_home__WEBPACK_IMPORTED_MODULE_1__.overlay)());\n    (0,_shortcutFunctions__WEBPACK_IMPORTED_MODULE_0__.renderElement)((0,_home__WEBPACK_IMPORTED_MODULE_1__.background)());\n})();\n\nlet homeBtn = document.querySelector(\"#item1\");\nhomeBtn.addEventListener(\"click\", e => {\n    (0,_shortcutFunctions__WEBPACK_IMPORTED_MODULE_0__.changeTab)(\n        (0,_home__WEBPACK_IMPORTED_MODULE_1__.createHeader)(),\n        (0,_home__WEBPACK_IMPORTED_MODULE_1__.overlay)(),\n        (0,_home__WEBPACK_IMPORTED_MODULE_1__.background)()\n    );\n})\n\nlet espacoBtn = document.querySelector(\"#item2\");\nespacoBtn.addEventListener(\"click\", function(){\n    (0,_shortcutFunctions__WEBPACK_IMPORTED_MODULE_0__.changeTab)(\n        (0,_espaco__WEBPACK_IMPORTED_MODULE_2__.resumo)()\n    );\n})\n\nlet disponBtn = document.querySelector(\"#item3\");\ndisponBtn.addEventListener(\"click\", function(){   \n    (0,_shortcutFunctions__WEBPACK_IMPORTED_MODULE_0__.changeTab)(\n        (0,_disponibilidade__WEBPACK_IMPORTED_MODULE_3__.createCalendar)()\n    );\n    calendar.render();\n})\n\n\n\n//# sourceURL=webpack://sitiosaoluiz/./src/index.js?");

/***/ }),

/***/ "./src/shortcutFunctions.js":
/*!**********************************!*\
  !*** ./src/shortcutFunctions.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"generate\": () => (/* binding */ generate),\n/* harmony export */   \"renderElement\": () => (/* binding */ renderElement),\n/* harmony export */   \"generateMenu\": () => (/* binding */ generateMenu),\n/* harmony export */   \"multiAppend\": () => (/* binding */ multiAppend),\n/* harmony export */   \"changeTab\": () => (/* binding */ changeTab)\n/* harmony export */ });\n// create element with type, class and text content built-in\nfunction generate (element, elementClass, text) {\n    let created = document.createElement(element);\n    if (elementClass != undefined){\n        created.classList.add(elementClass);\n    }\n    created.textContent = text;\n    return (created);\n}\n\n// create nav menu with ul nested and as many items as needed\nfunction generateMenu (...listItems) {\n    let menu = generate(\"ul\", \"menu\");\n    let nav = generate(\"nav\", \"navbar\");\n    let count = 1;\n    listItems.forEach (a => {\n        let menuItem = generate(\"li\", \"menuItem\", `${a}`);\n        menuItem.setAttribute(\"id\", `item${count}`);\n        count += 1;\n        menu.appendChild(menuItem);\n    })\n    nav.appendChild(menu);\n    return nav;\n}\n\n// append element to Body's content div\nfunction renderElement (element) {\n    let bodyContent = document.querySelector(\"#content\");\n    let elementToAppend = element;\n    bodyContent.appendChild(elementToAppend); \n}\n\n// append multiple childs to an element\nfunction multiAppend(parent, ...childs){\n    childs.forEach (e => {\n        parent.appendChild(e);\n    })\n    return parent;\n}\n\n//Change tabs\nfunction changeTab(...functionsToRender) {\n    let contentDiv = document.querySelector(\"#content\");\n    if (!contentDiv.firstElementChild.isEqualNode(functionsToRender[0])) {\n        contentDiv.innerHTML = \"\";\n        functionsToRender.forEach(e => {\n            renderElement(e);\n        })\n    } \n}\n\n\n//# sourceURL=webpack://sitiosaoluiz/./src/shortcutFunctions.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
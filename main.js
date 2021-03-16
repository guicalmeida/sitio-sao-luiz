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

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createHeader\": () => (/* binding */ createHeader),\n/* harmony export */   \"background\": () => (/* binding */ background),\n/* harmony export */   \"overlay\": () => (/* binding */ overlay)\n/* harmony export */ });\n/* harmony import */ var _shortcutFunctions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shortcutFunctions */ \"./src/shortcutFunctions.js\");\n\n\nfunction createHeader () {\n    let header = (0,_shortcutFunctions__WEBPACK_IMPORTED_MODULE_0__.generate)(\"header\", \"header\");\n    let title = (0,_shortcutFunctions__WEBPACK_IMPORTED_MODULE_0__.generate)(\"h1\", \"title\", \"SÍTIO SÃO LUIZ\");\n    let subtitle = (0,_shortcutFunctions__WEBPACK_IMPORTED_MODULE_0__.generate)(\"h2\", \"subtitle\", \"Bem-vindo ao paraíso\");\n    header.created.appendChild(title.created);\n    header.created.appendChild(subtitle.created);\n    return (header.created);\n}\n\nfunction background () {\n    let videoBG = document.createElement(\"video\");\n    videoBG.setAttribute(\"autoplay\",true);\n    videoBG.setAttribute(\"loop\", true);\n    videoBG.setAttribute(\"id\", \"videoBG\");\n\n    let videoSource = document.createElement(\"source\");\n    videoSource.src = \"./Resources/sitiodrone2.mp4\";\n    videoSource.type = \"video/mp4\";\n\n    videoBG.appendChild(videoSource);\n    return videoBG;\n};\n\nfunction overlay() {\n    let overlay = (0,_shortcutFunctions__WEBPACK_IMPORTED_MODULE_0__.generate)(\"div\", \"overlay\");\n    return overlay.created;\n}\n\n\n\n//# sourceURL=webpack://sitiosaoluiz/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _shortcutFunctions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shortcutFunctions */ \"./src/shortcutFunctions.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n\n\n\n\n\n(0,_shortcutFunctions__WEBPACK_IMPORTED_MODULE_1__.toBody)((0,_home__WEBPACK_IMPORTED_MODULE_0__.createHeader)());\n(0,_shortcutFunctions__WEBPACK_IMPORTED_MODULE_1__.toBody)((0,_home__WEBPACK_IMPORTED_MODULE_0__.background)());\n(0,_shortcutFunctions__WEBPACK_IMPORTED_MODULE_1__.toBody)((0,_home__WEBPACK_IMPORTED_MODULE_0__.overlay)());\n(0,_shortcutFunctions__WEBPACK_IMPORTED_MODULE_1__.toBody)((0,_menu__WEBPACK_IMPORTED_MODULE_2__.createMenu)());\n\n\n\n\n\n\n//# sourceURL=webpack://sitiosaoluiz/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createMenu\": () => (/* binding */ createMenu)\n/* harmony export */ });\n/* harmony import */ var _shortcutFunctions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shortcutFunctions */ \"./src/shortcutFunctions.js\");\n\n\nfunction createMenu () {\n    return (0,_shortcutFunctions__WEBPACK_IMPORTED_MODULE_0__.generateMenu)(\"Home\", \"Quartos\", \"Preço\", \"Localização\", \"Contato\").navNode;\n}\n\n\n\n//# sourceURL=webpack://sitiosaoluiz/./src/menu.js?");

/***/ }),

/***/ "./src/shortcutFunctions.js":
/*!**********************************!*\
  !*** ./src/shortcutFunctions.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"generate\": () => (/* binding */ generate),\n/* harmony export */   \"toBody\": () => (/* binding */ toBody),\n/* harmony export */   \"generateMenu\": () => (/* binding */ generateMenu)\n/* harmony export */ });\n// create element with type, class and text content built-in\nlet generate =  (element, elementClass, text) => {\n    let created = document.createElement(element);\n    created.classList.add(elementClass);\n    created.textContent = text;\n    return {created}\n}\n\nlet generateMenu = (...listItems) => {\n    let nav = generate(\"nav\", \"navbar\");\n    let navNode = nav.created;\n    let menu = generate(\"ul\", \"menu\");\n    navNode.appendChild(menu.created);\n    let counter = 1;\n    listItems.forEach (e => {\n        let menuItem = document.createElement(\"li\");\n        menuItem.classList.add(`menuItem`);\n        counter += 1;\n        menuItem.textContent = `${e}`;\n        menu.created.appendChild(menuItem);\n    })\n    console.log(navNode)\n    return {navNode};\n}\n\nfunction toBody (element) {\n    let bodyContent = document.querySelector(\"#content\");\n    let elementToAppend = element;\n    bodyContent.appendChild(elementToAppend); \n}\n\n\n\n//# sourceURL=webpack://sitiosaoluiz/./src/shortcutFunctions.js?");

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
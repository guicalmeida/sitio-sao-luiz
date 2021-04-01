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

/***/ "./src/calendario.js":
/*!***************************!*\
  !*** ./src/calendario.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"calendar\": () => (/* binding */ calendar),\n/* harmony export */   \"priceH1\": () => (/* binding */ priceH1),\n/* harmony export */   \"lodgingValue\": () => (/* binding */ lodgingValue)\n/* harmony export */ });\n/* harmony import */ var _shortcutFunctions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shortcutFunctions */ \"./src/shortcutFunctions.js\");\n\n\n  let priceH1 = (0,_shortcutFunctions__WEBPACK_IMPORTED_MODULE_0__.generate)(\"h1\", \"priceH1\", \"Clique nas datas para simular o preço de sua estadia\");\n  let calendar = (0,_shortcutFunctions__WEBPACK_IMPORTED_MODULE_0__.generate)(\"div\", \"calendar\");\n  let month = (0,_shortcutFunctions__WEBPACK_IMPORTED_MODULE_0__.generate)(\"div\", \"month\");\n  let prev = (0,_shortcutFunctions__WEBPACK_IMPORTED_MODULE_0__.generate)(\"i\", \"fas\");\n  prev.classList.add(\"fa-angle-left\");\n  prev.classList.add(\"prev\");\n  let calDate = (0,_shortcutFunctions__WEBPACK_IMPORTED_MODULE_0__.generate)(\"div\", \"date\");\n  let monthTitle = (0,_shortcutFunctions__WEBPACK_IMPORTED_MODULE_0__.generate)(\"h1\", \"monthTitle\");\n  let subtitleDiv = (0,_shortcutFunctions__WEBPACK_IMPORTED_MODULE_0__.generate)(\"div\", \"subtitleDiv\");\n  let subtitleP = (0,_shortcutFunctions__WEBPACK_IMPORTED_MODULE_0__.generate)(\"p\");\n  let airbnbBtn = (0,_shortcutFunctions__WEBPACK_IMPORTED_MODULE_0__.generate)(\"button\",\"airbnbBtn\", \"reserve agora\");\n  let airbnbIco = (0,_shortcutFunctions__WEBPACK_IMPORTED_MODULE_0__.generate)(\"i\", \"fab\");\n    airbnbIco.classList.add(\"fa-airbnb\");\n    airbnbBtn.addEventListener(\"click\", e =>{return window.open(\"https://www.airbnb.com.br/rooms/43450708\")})\n    airbnbBtn.appendChild(airbnbIco);\n  let next = (0,_shortcutFunctions__WEBPACK_IMPORTED_MODULE_0__.generate)(\"i\", \"fas\");\n  next.classList.add(\"fa-angle-right\");\n  next.classList.add(\"next\");\n  let weekDays = (0,_shortcutFunctions__WEBPACK_IMPORTED_MODULE_0__.generate)(\"div\", \"weekdays\");\n  let dom = (0,_shortcutFunctions__WEBPACK_IMPORTED_MODULE_0__.generate)(\"div\", \"day\", \"dom\");\n  let seg = (0,_shortcutFunctions__WEBPACK_IMPORTED_MODULE_0__.generate)(\"div\", \"day\", \"seg\");\n  let ter = (0,_shortcutFunctions__WEBPACK_IMPORTED_MODULE_0__.generate)(\"div\", \"day\", \"ter\");\n  let qua = (0,_shortcutFunctions__WEBPACK_IMPORTED_MODULE_0__.generate)(\"div\", \"day\", \"qua\");\n  let qui = (0,_shortcutFunctions__WEBPACK_IMPORTED_MODULE_0__.generate)(\"div\", \"day\", \"qui\");\n  let sex = (0,_shortcutFunctions__WEBPACK_IMPORTED_MODULE_0__.generate)(\"div\", \"day\", \"sex\");\n  let sab = (0,_shortcutFunctions__WEBPACK_IMPORTED_MODULE_0__.generate)(\"div\", \"day\", \"sab\");\n  let allDays = (0,_shortcutFunctions__WEBPACK_IMPORTED_MODULE_0__.generate)(\"div\", \"days\");\n  allDays.setAttribute(\"id\", \"days\");\n  (0,_shortcutFunctions__WEBPACK_IMPORTED_MODULE_0__.multiAppend)(subtitleDiv, subtitleP, airbnbBtn)\n  ;(0,_shortcutFunctions__WEBPACK_IMPORTED_MODULE_0__.multiAppend)(calDate, monthTitle, subtitleDiv);\n  (0,_shortcutFunctions__WEBPACK_IMPORTED_MODULE_0__.multiAppend)(month, prev, calDate, next);\n  (0,_shortcutFunctions__WEBPACK_IMPORTED_MODULE_0__.multiAppend)(weekDays, dom, seg, ter, qua, qui, sex, sab);\n  (0,_shortcutFunctions__WEBPACK_IMPORTED_MODULE_0__.multiAppend)(calendar, month, weekDays, allDays);\n\n\n(function calendarJS() {\n  const date = new Date();\n\n  const renderCalendar = () => {\n\n    date.setDate(1);\n\n    const monthDays = allDays;\n\n    const lastDay = new Date(\n      date.getFullYear(),\n      date.getMonth() + 1,\n      0\n    ).getDate();\n\n    const prevLastDay = new Date(\n      date.getFullYear(),\n      date.getMonth(),\n      0\n    ).getDate();\n\n    const firstDayIndex = date.getDay();\n\n    const lastDayIndex = new Date(\n      date.getFullYear(),\n      date.getMonth() + 1,\n      0\n    ).getDay();\n\n    const nextDays = 7 - lastDayIndex - 1;\n\n    const months = [\n      \"Janeiro\",\n      \"Fevereiro\",\n      \"Março\",\n      \"Abril\",\n      \"Maio\",\n      \"Junho\",\n      \"Julho\",\n      \"Agosto\",\n      \"Setembro\",\n      \"Outubro\",\n      \"Novembro\",\n      \"Dezembro\",\n    ];\n\n    monthTitle.innerHTML = months[date.getMonth()];\n\n    let days = \"\";\n\n    for (let x = firstDayIndex; x > 0; x--) {\n      days += `<div class=\"prev-date\" value=\"${prevLastDay - x + 1}\">${prevLastDay - x + 1}</div>`;\n    }\n\n    for (let i = 1; i <= lastDay; i++) {\n      if (\n        i === new Date().getDate() &&\n        date.getMonth() === new Date().getMonth()\n      ) {\n        days += `<div class=\"today\" value=\"${i}\">${i}</div>`;\n      } else {\n        days += `<div value=\"${i}\">${i}</div>`;\n      }\n    }\n\n    for (let j = 1; j <= nextDays; j++) {\n      days += `<div class=\"next-date\" value=\"${j}\">${j}</div>`;\n      monthDays.innerHTML = days;\n    }\n  };\n\n  prev.addEventListener(\"click\", () => {\n    date.setMonth(date.getMonth() - 1);\n    renderCalendar();\n    lodgingValue();\n  });\n  \n  next.addEventListener(\"click\", () => {\n    date.setMonth(date.getMonth() + 1);\n    renderCalendar();\n    lodgingValue();\n  });\n\n  return renderCalendar();\n})();\n\nfunction lodgingValue() {\n  let days = document.getElementById(\"days\").querySelectorAll(\"div\");\n  let userQuery = [];\n  let price;\n  let costPerNight = 749;\n  let cleaningCost = 300;\n  let today = document.querySelector(\".today\");\n\n  days.forEach(day => {\n    if (\n    day.getAttribute(\"class\") == undefined &&\n    (today === null ||\n      Number(day.getAttribute(\"value\")) > Number(today.getAttribute(\"value\")))\n\n    ) {\n      day.addEventListener(\"click\", i => {\n        if (userQuery.length == 0) {\n          userQuery.push(Number(day.getAttribute(\"value\")));\n          day.style.background = \"#b5fad2\";\n          price = costPerNight + cleaningCost;\n          subtitleP.textContent = `R$${price}`;\n        } else if (userQuery.length == 1) {\n          userQuery.push(Number(day.getAttribute(\"value\")));\n          userQuery.sort(function (a, b) { return a - b; });\n          for (let value of days.values()) {\n            if (\n              Number(value.getAttribute(\"value\")) >= userQuery[0] &&\n              Number(value.getAttribute(\"value\")) <= userQuery[1] &&\n              value.getAttribute(\"class\") == undefined\n            ) {\n              value.style.background = \"#b5fad2\";\n            };\n          }\n          price = (userQuery[1] - userQuery[0]) * costPerNight + cleaningCost;\n          subtitleP.textContent = `R$${price}`;\n\n        } else {\n          userQuery = [];\n          for (let value of days.values()) {\n            value.style.background = \"rgba(0,0,0,0)\";\n          }\n          day.style.background = \"#b5fad2\";\n          subtitleP.textContent = `R$${costPerNight + cleaningCost}`;\n          userQuery.push(Number(day.getAttribute(\"value\")));\n        }\n      })\n    } else {day.setAttribute(\"style\", \"cursor: not-allowed; opacity: 0.5\")};\n  })\n}\n\n\n\n//# sourceURL=webpack://sitiosaoluiz/./src/calendario.js?");

/***/ }),

/***/ "./src/contato.js":
/*!************************!*\
  !*** ./src/contato.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"contatoDiv\": () => (/* binding */ contatoDiv)\n/* harmony export */ });\n/* harmony import */ var _shortcutFunctions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shortcutFunctions */ \"./src/shortcutFunctions.js\");\n\n\nlet contatoDiv = (0,_shortcutFunctions__WEBPACK_IMPORTED_MODULE_0__.generate)(\"div\", \"contatoDiv\")\nlet duvidaDiv = (0,_shortcutFunctions__WEBPACK_IMPORTED_MODULE_0__.generate)(\"div\", \"duvidaDiv\")\nlet titulo = (0,_shortcutFunctions__WEBPACK_IMPORTED_MODULE_0__.generate)(\"h1\",\"duvidaTitulo\",\"Ficou alguma dúvida?\");\nlet subtitulo = (0,_shortcutFunctions__WEBPACK_IMPORTED_MODULE_0__.generate)(\"p\", \"duvidaSub\", \"Envie uma mensagem!\");\nlet duvidaBtn = (0,_shortcutFunctions__WEBPACK_IMPORTED_MODULE_0__.generate)(\"button\",\"airbnbBtn\", \"Fale conosco\");\nlet airbnbIco = (0,_shortcutFunctions__WEBPACK_IMPORTED_MODULE_0__.generate)(\"i\", \"fab\");\n  airbnbIco.classList.add(\"fa-airbnb\");\n  duvidaBtn.addEventListener(\"click\", e =>{return window.open(\"https://www.airbnb.com.br/rooms/43450708\")})\n  duvidaBtn.appendChild(airbnbIco);\n(0,_shortcutFunctions__WEBPACK_IMPORTED_MODULE_0__.multiAppend)(duvidaDiv, titulo, subtitulo);\n(0,_shortcutFunctions__WEBPACK_IMPORTED_MODULE_0__.multiAppend)(contatoDiv, duvidaDiv, duvidaBtn)\n\n\n\n//# sourceURL=webpack://sitiosaoluiz/./src/contato.js?");

/***/ }),

/***/ "./src/espaco.js":
/*!***********************!*\
  !*** ./src/espaco.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"resumo\": () => (/* binding */ resumo)\n/* harmony export */ });\n/* harmony import */ var _shortcutFunctions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shortcutFunctions */ \"./src/shortcutFunctions.js\");\n\n\nfunction resumo () {\n    let ficha = (0,_shortcutFunctions__WEBPACK_IMPORTED_MODULE_0__.generate)(\"div\", \"resumo\");\n\n    let tamanho = (0,_shortcutFunctions__WEBPACK_IMPORTED_MODULE_0__.generate)(\"div\", \"tamanho\");\n        let textoSuperior = (0,_shortcutFunctions__WEBPACK_IMPORTED_MODULE_0__.generate)(\"p\", \"tamanhoPre\", \"mais de\");\n        let textoDestaque = (0,_shortcutFunctions__WEBPACK_IMPORTED_MODULE_0__.generate)(\"p\", \"tamanhoN\", \"15.000m²\");\n        let textoInferior = (0,_shortcutFunctions__WEBPACK_IMPORTED_MODULE_0__.generate)(\"p\", \"tamanhoPos\", \"de área útil para sua família\");\n    (0,_shortcutFunctions__WEBPACK_IMPORTED_MODULE_0__.multiAppend)(tamanho, textoSuperior, textoDestaque, textoInferior);\n    \n    let areaExterna = (0,_shortcutFunctions__WEBPACK_IMPORTED_MODULE_0__.generate)(\"div\", \"areaExternaDiv\");\n        let piscinaTitulo = (0,_shortcutFunctions__WEBPACK_IMPORTED_MODULE_0__.generate)(\"h2\", \"areaExternaTitulo\", \"Piscina com borda infinita\");\n        let piscinaDesc = (0,_shortcutFunctions__WEBPACK_IMPORTED_MODULE_0__.generate)(\"p\", \"areaExternaDesc\", \"Com 10m de comprimento, a borda infinita aponta para uma profunda vista bucólica, com montes verdes que marcam o território da Floresta Nacional de Ipanema\");\n        let vegetacaoTitulo = (0,_shortcutFunctions__WEBPACK_IMPORTED_MODULE_0__.generate)(\"h2\", \"areaExternaTitulo\", \"Vegetação\");\n        let vegetacaoDesc = (0,_shortcutFunctions__WEBPACK_IMPORTED_MODULE_0__.generate)(\"p\", \"areaExternaDesc\", \"Flores coloridas, árvores frutíferas, arbustos de ervas finas e plantas nativas se misturam na paisagem verde que compõe a área em que ficarão no sítio.\");\n        let cozExtTitulo = (0,_shortcutFunctions__WEBPACK_IMPORTED_MODULE_0__.generate)(\"h2\", \"areaExternaTitulo\", \"Cozinha Externa\");\n        let cozExtDesc = (0,_shortcutFunctions__WEBPACK_IMPORTED_MODULE_0__.generate)(\"p\", \"areaExternaDesc\", \"Próximo ao salão de jogos e à piscina, um forno de pizza e churrasqueira, equipados com todos utensílios necessários.\");\n        let entretTitulo = (0,_shortcutFunctions__WEBPACK_IMPORTED_MODULE_0__.generate)(\"h2\", \"areaExternaTitulo\", \"Entretenimento\");\n        let entretDesc = (0,_shortcutFunctions__WEBPACK_IMPORTED_MODULE_0__.generate)(\"p\", \"areaExternaDesc\", \"Campo de futebol, mesa para carteado, mesa de ping-pong, piscina, espaço para fogueira e muita área livre para brincadeiras são algumas opções para sua família - e para aproveitar um filme a noite, há TV a cabo e Netflix.\");\n        let contatoExtBtn = (0,_shortcutFunctions__WEBPACK_IMPORTED_MODULE_0__.generate)(\"button\", \"contatoBtn\", \"Traga sua família\");\n        contatoExtBtn.addEventListener(\"click\", e =>{return window.open(\"https://www.airbnb.com.br/rooms/43450708\")});\n    (0,_shortcutFunctions__WEBPACK_IMPORTED_MODULE_0__.multiAppend)(areaExterna, piscinaTitulo, piscinaDesc, vegetacaoTitulo, vegetacaoDesc, cozExtTitulo, cozExtDesc, entretTitulo, entretDesc, contatoExtBtn);\n\n    let fotoFachada = (0,_shortcutFunctions__WEBPACK_IMPORTED_MODULE_0__.generate)(\"img\", \"foto\");\n    fotoFachada.setAttribute(\"src\", \"./Resources/fachada.jpeg\");\n\n    let cafedaManha = (0,_shortcutFunctions__WEBPACK_IMPORTED_MODULE_0__.generate)(\"img\", \"foto\");\n    cafedaManha.setAttribute(\"src\", \"./Resources/cafedamanha.jpg\")\n\n\n    let casa = (0,_shortcutFunctions__WEBPACK_IMPORTED_MODULE_0__.generate)(\"div\", \"casaDiv\");\n        let quartosTitulo = (0,_shortcutFunctions__WEBPACK_IMPORTED_MODULE_0__.generate)(\"h2\", \"casaTitulo\", \"7 suítes\");\n        let quartosDesc = (0,_shortcutFunctions__WEBPACK_IMPORTED_MODULE_0__.generate)(\"p\", \"casaDesc\", \"4 camas de casal e 8 camas de solteiro - sendo 4 em beliches, perfeito para crianças - dividas em 7 quartos com banheiros completos e chuveiro a gás\");\n        let cozinhaTitulo = (0,_shortcutFunctions__WEBPACK_IMPORTED_MODULE_0__.generate)(\"h2\", \"casaTitulo\", \"Cozinha completa e copa\");\n        let cozinhaDesc = (0,_shortcutFunctions__WEBPACK_IMPORTED_MODULE_0__.generate)(\"p\", \"casaDesc\", \"Com infraestrutura e louça para todos seus hóspedes, a cozinha ainda conta com uma copa em anexo ideal para o café da manhã.\");\n        let salasTitulo = (0,_shortcutFunctions__WEBPACK_IMPORTED_MODULE_0__.generate)(\"h2\", \"casaTitulo\", \"Salas de estar e Jantar\");\n        let salasDesc = (0,_shortcutFunctions__WEBPACK_IMPORTED_MODULE_0__.generate)(\"p\", \"casaDesc\", \"Além de uma ampla sala de estar, o sítio conta com uma sala de jantar e outra de leitura.\");\n        let equipeTitulo = (0,_shortcutFunctions__WEBPACK_IMPORTED_MODULE_0__.generate)(\"h2\", \"casaTitulo\", \"Equipe profissional\");\n        let equipeDesc = (0,_shortcutFunctions__WEBPACK_IMPORTED_MODULE_0__.generate)(\"p\", \"casaDesc\", \"Sua estadia será acompanhada pela Lu, auxiliar da casa encarregada da limpeza e culinária, e Pedro, gestor do sítio que ajudará com qualquer problema que possa surgir. Opcionalmente, você poderá também contratar churrasqueiro e pizzaiolo.\");\n        let contatoCasaBtn = (0,_shortcutFunctions__WEBPACK_IMPORTED_MODULE_0__.generate)(\"button\", \"contatoBtn\", \"Reserve agora\");\n        contatoCasaBtn.addEventListener(\"click\", e =>{return window.open(\"https://www.airbnb.com.br/rooms/43450708\")});\n    (0,_shortcutFunctions__WEBPACK_IMPORTED_MODULE_0__.multiAppend)(casa, quartosTitulo, quartosDesc, cozinhaTitulo, cozinhaDesc, salasTitulo, salasDesc, equipeTitulo, equipeDesc, contatoCasaBtn)\n    \n    let contato = (0,_shortcutFunctions__WEBPACK_IMPORTED_MODULE_0__.generate)(\"button\", \"fotosBtn\", \"Veja mais fotos\");\n    contato.addEventListener(\"click\", e =>{return window.open(\"https://www.airbnb.com.br/rooms/43450708\")});\n\n    (0,_shortcutFunctions__WEBPACK_IMPORTED_MODULE_0__.multiAppend)(ficha, tamanho, areaExterna, fotoFachada, cafedaManha, casa, contato);\n    \n    return ficha;\n}\n\n\n\n\n\n\n//# sourceURL=webpack://sitiosaoluiz/./src/espaco.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loadHome\": () => (/* binding */ loadHome)\n/* harmony export */ });\n/* harmony import */ var _shortcutFunctions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shortcutFunctions */ \"./src/shortcutFunctions.js\");\n\n\nfunction loadHome() {\n    let homeDiv = (0,_shortcutFunctions__WEBPACK_IMPORTED_MODULE_0__.generate)(\"div\", \"homeDiv\");\n    (function createHeader() {\n        let header = (0,_shortcutFunctions__WEBPACK_IMPORTED_MODULE_0__.generate)(\"header\", \"header\");\n        let title = (0,_shortcutFunctions__WEBPACK_IMPORTED_MODULE_0__.generate)(\"h1\", \"title\", \"SÍTIO SÃO LUIZ\");\n        let subtitle = (0,_shortcutFunctions__WEBPACK_IMPORTED_MODULE_0__.generate)(\"h2\", \"subtitle\", \"O refúgio verde da sua família\");\n        let btnDiv = (0,_shortcutFunctions__WEBPACK_IMPORTED_MODULE_0__.generate)(\"div\", \"btnDiv\");\n        let saibaMaisBtn = (0,_shortcutFunctions__WEBPACK_IMPORTED_MODULE_0__.generate)(\"button\", \"button1\", \"Conheça o sítio\");\n        let agendeBtn = (0,_shortcutFunctions__WEBPACK_IMPORTED_MODULE_0__.generate)(\"button\", \"button2\", \"Marque uma data\");\n        (0,_shortcutFunctions__WEBPACK_IMPORTED_MODULE_0__.multiAppend)(btnDiv, saibaMaisBtn, agendeBtn);\n        (0,_shortcutFunctions__WEBPACK_IMPORTED_MODULE_0__.multiAppend)(header, title, subtitle, btnDiv)\n        homeDiv.appendChild(header);\n    })();\n\n    (function background() {\n        let videoBG = document.createElement(\"video\");\n        videoBG.setAttribute(\"autoplay\", true);\n        videoBG.setAttribute(\"loop\", true);\n        videoBG.setAttribute(\"id\", \"videoBG\");\n        videoBG.setAttribute(\"muted\", true);\n\n        let videoSource = document.createElement(\"source\");\n        videoSource.src = \"./Resources/Sitiodrone-1.m4v\";\n        videoSource.type = \"video/mp4\";\n\n        videoBG.appendChild(videoSource);\n        homeDiv.appendChild(videoBG);\n    })();\n\n    (function overlay() {\n        let overlay = (0,_shortcutFunctions__WEBPACK_IMPORTED_MODULE_0__.generate)(\"div\", \"overlay\");\n        homeDiv.appendChild(overlay);\n    })();\n    return homeDiv;\n}\n\n\n\n\n//# sourceURL=webpack://sitiosaoluiz/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _shortcutFunctions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shortcutFunctions */ \"./src/shortcutFunctions.js\");\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _espaco__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./espaco */ \"./src/espaco.js\");\n/* harmony import */ var _calendario__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./calendario */ \"./src/calendario.js\");\n/* harmony import */ var _localizacao__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./localizacao */ \"./src/localizacao.js\");\n/* harmony import */ var _contato__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./contato */ \"./src/contato.js\");\n\n\n\n\n\n\n\nlet body = document.querySelector(\"body\");\nlet contentDiv = document.querySelector(\"#content\");\nlet menu = (0,_shortcutFunctions__WEBPACK_IMPORTED_MODULE_0__.generateMenu)(\"Home\", \"Espaço\", \"Preço\", \"Mapa\", \"Contato\");\nlet active = (0,_shortcutFunctions__WEBPACK_IMPORTED_MODULE_0__.generate)(\"div\", \"activeMenu\");\nmenu.appendChild(active);\nbody.insertBefore(menu, contentDiv);\n\n//firstRender\n(0,_shortcutFunctions__WEBPACK_IMPORTED_MODULE_0__.renderElement)((0,_home__WEBPACK_IMPORTED_MODULE_1__.loadHome)());\nactive.setAttribute(\"style\", \"margin: 0 auto 0 8%\");\n\n//function to add motion do the active Div when areas are accessed via home buttons\nfunction homeBtnsListener() {\n  let leftBtn = document.querySelector(\".button1\");\n  let rightBtn = document.querySelector(\".button2\");\n  leftBtn.addEventListener(\"click\", (e) => {\n    (0,_shortcutFunctions__WEBPACK_IMPORTED_MODULE_0__.changeTab)((0,_espaco__WEBPACK_IMPORTED_MODULE_2__.resumo)());\n    active.setAttribute(\"style\", \"margin: 0 auto 0 26%\");\n  });\n  rightBtn.addEventListener(\"click\", (e) => {\n    (0,_shortcutFunctions__WEBPACK_IMPORTED_MODULE_0__.changeTab)(_calendario__WEBPACK_IMPORTED_MODULE_3__.priceH1, _calendario__WEBPACK_IMPORTED_MODULE_3__.calendar);\n    active.setAttribute(\"style\", \"margin: 0 auto 0 44%\");\n    (0,_calendario__WEBPACK_IMPORTED_MODULE_3__.lodgingValue)();\n  });\n}\nhomeBtnsListener();\n\n//Buttons\nlet homeBtn = document.querySelector(\"#item1\");\nhomeBtn.addEventListener(\"click\", (e) => {\n  (0,_shortcutFunctions__WEBPACK_IMPORTED_MODULE_0__.changeTab)((0,_home__WEBPACK_IMPORTED_MODULE_1__.loadHome)());\n  active.setAttribute(\"style\", \"margin: 0 auto 0 8%\");\n  homeBtnsListener();\n});\n\nlet espacoBtn = document.querySelector(\"#item2\");\nespacoBtn.addEventListener(\"click\", function () {\n  (0,_shortcutFunctions__WEBPACK_IMPORTED_MODULE_0__.changeTab)((0,_espaco__WEBPACK_IMPORTED_MODULE_2__.resumo)());\n  active.setAttribute(\"style\", \"margin: 0 auto 0 26%\");\n});\n\nlet datasBtn = document.querySelector(\"#item3\");\ndatasBtn.addEventListener(\"click\", function () {\n  (0,_shortcutFunctions__WEBPACK_IMPORTED_MODULE_0__.changeTab)(_calendario__WEBPACK_IMPORTED_MODULE_3__.priceH1, _calendario__WEBPACK_IMPORTED_MODULE_3__.calendar);\n  active.setAttribute(\"style\", \"margin: 0 auto 0 44%\");\n  (0,_calendario__WEBPACK_IMPORTED_MODULE_3__.lodgingValue)();\n});\n\nlet localBtn = document.querySelector(\"#item4\");\nlocalBtn.addEventListener(\"click\", function () {\n  (0,_shortcutFunctions__WEBPACK_IMPORTED_MODULE_0__.changeTab)(_localizacao__WEBPACK_IMPORTED_MODULE_4__.weatherDiv, _localizacao__WEBPACK_IMPORTED_MODULE_4__.map);\n  active.setAttribute(\"style\", \"margin: 0 auto 0 62%\");\n});\n\nlet contatoBtn = document.querySelector(\"#item5\");\ncontatoBtn.addEventListener(\"click\", function () {\n  (0,_shortcutFunctions__WEBPACK_IMPORTED_MODULE_0__.changeTab)(_contato__WEBPACK_IMPORTED_MODULE_5__.contatoDiv);\n  active.setAttribute(\"style\", \"margin: 0 auto 0 80%\");\n});\n\n\n//# sourceURL=webpack://sitiosaoluiz/./src/index.js?");

/***/ }),

/***/ "./src/localizacao.js":
/*!****************************!*\
  !*** ./src/localizacao.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"map\": () => (/* binding */ map),\n/* harmony export */   \"weatherDiv\": () => (/* binding */ weatherDiv)\n/* harmony export */ });\n/* harmony import */ var _shortcutFunctions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shortcutFunctions */ \"./src/shortcutFunctions.js\");\n\n\nconst map = (0,_shortcutFunctions__WEBPACK_IMPORTED_MODULE_0__.generate)(\"iframe\", \"map\");\nmap.setAttribute(\n  \"src\",\n  \"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14631.53322444712!2d-47.72204890137226!3d-23.536699182187807!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xcc9ce0441e260b99!2zU8OtdGlvIFPDo28gTHVpeg!5e0!3m2!1spt-BR!2sbr!4v1616552850573!5m2!1spt-BR!2sbr\"\n);\nmap.setAttribute(\"allowfullscreen\", true);\nmap.setAttribute(\"loading\", \"lazy\");\n\nconst weatherDiv = (0,_shortcutFunctions__WEBPACK_IMPORTED_MODULE_0__.generate)(\"div\", \"weatherDiv\");\nlet weatherTitle = (0,_shortcutFunctions__WEBPACK_IMPORTED_MODULE_0__.generate)(\"h1\", \"weatherTitle\");\nlet tempDiv = (0,_shortcutFunctions__WEBPACK_IMPORTED_MODULE_0__.generate)(\"div\", \"allTempDiv\");\n\nlet tempNowDiv = (0,_shortcutFunctions__WEBPACK_IMPORTED_MODULE_0__.generate)(\"div\", \"tempDiv\");\nlet tempNow = (0,_shortcutFunctions__WEBPACK_IMPORTED_MODULE_0__.generate)(\"p\", \"temp\");\nlet tempNowTxt = (0,_shortcutFunctions__WEBPACK_IMPORTED_MODULE_0__.generate)(\"p\", \"tempTxt\", \"Temperatura\");\n(0,_shortcutFunctions__WEBPACK_IMPORTED_MODULE_0__.multiAppend)(tempNowDiv, tempNowTxt, tempNow);\n\nlet tempFeelDiv = (0,_shortcutFunctions__WEBPACK_IMPORTED_MODULE_0__.generate)(\"div\", \"tempDiv\");\nlet tempFeel = (0,_shortcutFunctions__WEBPACK_IMPORTED_MODULE_0__.generate)(\"p\", \"temp\");\nlet tempFeelTxt = (0,_shortcutFunctions__WEBPACK_IMPORTED_MODULE_0__.generate)(\"p\", \"tempTxt\", \"Sensação térmica\");\n(0,_shortcutFunctions__WEBPACK_IMPORTED_MODULE_0__.multiAppend)(tempFeelDiv, tempFeelTxt, tempFeel);\n\nlet moreInfo = (0,_shortcutFunctions__WEBPACK_IMPORTED_MODULE_0__.generate)(\"a\", \"moreInfo\", \"Open Weather Map >\");\nmoreInfo.href = \"https://openweathermap.org/city/3471849\";\nmoreInfo.target = \"_blank\";\n(0,_shortcutFunctions__WEBPACK_IMPORTED_MODULE_0__.multiAppend)(tempDiv, tempNowDiv, tempFeelDiv);\n(0,_shortcutFunctions__WEBPACK_IMPORTED_MODULE_0__.multiAppend)(weatherDiv, weatherTitle, tempDiv, moreInfo);\n(async function getWeather() {\n  const response = await fetch(\n    \"https://api.openweathermap.org/data/2.5/weather?q=Ara%C3%A7oiaba%20da%20serra&lang=pt_br&appid=ee5f5677a63d2406b5a967e5d2beee70&units=metric\",\n    { mode: \"cors\" }\n  );\n  const weatherData = await response.json();\n  tempNow.innerText = Math.round(weatherData.main.temp) + \"ºC\";\n  tempFeel.innerText = Math.round(weatherData.main.feels_like) + \"ºC\";\n  weatherTitle.innerText =\n    weatherData.weather[0].description + \" em Araçoiaba da Serra - SP\";\n})();\n\n\n\n//# sourceURL=webpack://sitiosaoluiz/./src/localizacao.js?");

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

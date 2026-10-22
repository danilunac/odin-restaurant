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

/***/ "./src/images/logo-beertato.webp"
/*!***************************************!*\
  !*** ./src/images/logo-beertato.webp ***!
  \***************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"e541660911dba885ce9e.webp\";\n\n//# sourceURL=webpack://odin-restaurant/./src/images/logo-beertato.webp?\n}");

/***/ },

/***/ "./src/images/menu/bravas.webp"
/*!*************************************!*\
  !*** ./src/images/menu/bravas.webp ***!
  \*************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"a85c417670b371f72ee9.webp\";\n\n//# sourceURL=webpack://odin-restaurant/./src/images/menu/bravas.webp?\n}");

/***/ },

/***/ "./src/images/menu/craft-beers.webp"
/*!******************************************!*\
  !*** ./src/images/menu/craft-beers.webp ***!
  \******************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"684d9f1261eecc1fd7a9.webp\";\n\n//# sourceURL=webpack://odin-restaurant/./src/images/menu/craft-beers.webp?\n}");

/***/ },

/***/ "./src/images/menu/fritas.webp"
/*!*************************************!*\
  !*** ./src/images/menu/fritas.webp ***!
  \*************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"6e5bb18557d673d68e1c.webp\";\n\n//# sourceURL=webpack://odin-restaurant/./src/images/menu/fritas.webp?\n}");

/***/ },

/***/ "./src/images/menu/tortilla.webp"
/*!***************************************!*\
  !*** ./src/images/menu/tortilla.webp ***!
  \***************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"a129901ae8e014a83ae5.webp\";\n\n//# sourceURL=webpack://odin-restaurant/./src/images/menu/tortilla.webp?\n}");

/***/ },

/***/ "./src/contact.js"
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction createContact() {\n    const contact = document.createElement('div');\n    contact.id = 'contact';\n\n    const phoneNumber = document.createElement('strong');\n    phoneNumber.textContent = 'Phone number: ';\n    const email = document.createElement('strong');\n    email.textContent = 'Email: '\n    const address = document.createElement('strong');\n    address.textContent = 'Address: '\n\n    contact.appendChild(createParagraph(phoneNumber, '+34 933 526 719'));\n    contact.appendChild(createParagraph(email, 'beertato@beertato.com'));\n    contact.appendChild(createParagraph(address, 'Passatge Utset, 4, Barcelona (Spain)'));\n\n    return contact;\n}\n\nfunction createParagraph(strong, text) {\n    const p = document.createElement('p');\n\n    p.appendChild(strong);\n    p.appendChild(document.createTextNode(text));\n\n    return p;\n}\n\nfunction loadContact() {\n    const content = document.getElementById('content');\n    content.textContent = '';\n    content.appendChild(createContact());\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadContact);\n\n//# sourceURL=webpack://odin-restaurant/./src/contact.js?\n}");

/***/ },

/***/ "./src/home.js"
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _images_logo_beertato_webp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/logo-beertato.webp */ \"./src/images/logo-beertato.webp\");\n\n\nfunction createHome() {\n    const home = document.createElement('div');\n    home.id = 'home';\n\n    home.appendChild(addImage(_images_logo_beertato_webp__WEBPACK_IMPORTED_MODULE_0__, 'Pub logo: beer with french fries'));\n\n    home.appendChild(createTitle('Welcome to our craft beer pub'));\n    home.appendChild(createParagraph('We want to be good at what we do. That\\'s why we focus on offering a small selection of high-quality products. We offer three types of craft beer and three homemade tapas, all featuring potatoes as their main ingredient. A beer always tastes better with something to eat'));\n    home.appendChild(createParagraph('Our goal is for you to enjoy drinking our beers and eating our tapas, but above all, to enjoy the good conversations that happen around them'));\n\n    return home;\n}\n\nfunction addImage(src, alt) {\n    const img = document.createElement('img');\n    img.src = src;\n    img.alt = alt;\n\n    return img;\n}\n\nfunction createTitle(text) { // La borro si no la uso?\n    const title = document.createElement('h1');\n    title.textContent = text;\n\n    return title;\n}\n\nfunction createParagraph(text) {\n    const p = document.createElement('p');\n    p.textContent = text;\n\n    return p;\n}\n\nfunction loadHome() {\n    const content = document.getElementById('content');\n    content.textContent= '';\n    content.appendChild(createHome());\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadHome);\n\n//# sourceURL=webpack://odin-restaurant/./src/home.js?\n}");

/***/ },

/***/ "./src/index.js"
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.js */ \"./src/home.js\");\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.js */ \"./src/menu.js\");\n/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact.js */ \"./src/contact.js\");\n\n\n\n\n\n(0,_home_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\nconst homeButton = document.querySelector('button[data-nav=\"home\"]');\nhomeButton.classList.add('active');\n\nconst navElement = document.querySelector('nav');\n\nnavElement.addEventListener('click', (e) => {\n    const button = e.target.closest('button');\n    if (!button) return;\n\n    const buttons = document.querySelectorAll('button');\n    for (let btn of buttons) {\n        btn.classList.remove('active');\n    }\n\n    if (button) {\n        button.classList.add('active');\n    }\n\n    if (button.dataset.nav === 'home') {\n        (0,_home_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n    } else if (button.dataset.nav === 'menu') {\n        (0,_menu_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n    } else if (button.dataset.nav === 'contact') {\n        (0,_contact_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n    }\n});\n\n//# sourceURL=webpack://odin-restaurant/./src/index.js?\n}");

/***/ },

/***/ "./src/menu.js"
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _images_menu_bravas_webp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/menu/bravas.webp */ \"./src/images/menu/bravas.webp\");\n/* harmony import */ var _images_menu_craft_beers_webp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/menu/craft-beers.webp */ \"./src/images/menu/craft-beers.webp\");\n/* harmony import */ var _images_menu_fritas_webp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/menu/fritas.webp */ \"./src/images/menu/fritas.webp\");\n/* harmony import */ var _images_menu_tortilla_webp__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/menu/tortilla.webp */ \"./src/images/menu/tortilla.webp\");\n\n\n\n\n\nfunction createMenu() {\n    const menu = document.createElement('div');\n    menu.id = 'menu';\n\n    const beerPost = postContainer();\n    beerPost.classList.add('beer');\n    beerPost.appendChild(addImage(_images_menu_craft_beers_webp__WEBPACK_IMPORTED_MODULE_1__, 'Craft beers'));\n    beerPost.appendChild(createTitle('Our craft beers'));\n\n    const lager = document.createElement('strong');\n    lager.textContent = 'Lager - ';\n    const paleAle = document.createElement('strong');\n    paleAle.textContent = 'Pale Ale - ';\n    const ipa = document.createElement('strong');\n    ipa.textContent = 'IPA - ';\n    const wheatBeer = document.createElement('strong');\n    wheatBeer.textContent = 'Wheat Beer - ';\n    const stout = document.createElement('strong');\n    stout.textContent = 'Stout - ';\n\n    beerPost.appendChild(createBeerDescription(lager, 'light and refreshing, with a smooth malt flavor.'));\n    beerPost.appendChild(createBeerDescription(paleAle, 'balanced, with malty notes and a touch of hops.'));\n    beerPost.appendChild(createBeerDescription(ipa, 'intense and bitter, with a strong hop character.'));\n    beerPost.appendChild(createBeerDescription(wheatBeer, 'smooth and refreshing, with citrus notes.'));\n    beerPost.appendChild(createBeerDescription(stout, 'dark and creamy, with coffee and chocolate notes.'));\n\n    const tapasContainer = document.createElement('div');\n    tapasContainer.id = 'tapas';\n    tapasContainer.appendChild(createTitle('Our tapas'));\n\n    const bravasPost = postContainer();\n    bravasPost.appendChild(addImage(_images_menu_bravas_webp__WEBPACK_IMPORTED_MODULE_0__, 'Spanish tapa: patatas bravas'));\n    bravasPost.appendChild(createSmallTitle('Patatas bravas'));\n    bravasPost.appendChild(createParagraph('Crispy and golden, with a spicy brava sauce.'));\n\n    const tortillaPost = postContainer();\n    tortillaPost.appendChild(addImage(_images_menu_tortilla_webp__WEBPACK_IMPORTED_MODULE_3__, 'Spanish dish: tortilla de patatas.'));\n    tortillaPost.appendChild(createSmallTitle('Tortilla de patatas'));\n    tortillaPost.appendChild(createParagraph('Juicy and homemade, with tender potatoes and onion.'));\n\n    const fritasPost = postContainer();\n    fritasPost.appendChild(addImage(_images_menu_fritas_webp__WEBPACK_IMPORTED_MODULE_2__, 'French fries'));\n    fritasPost.appendChild(createSmallTitle('French fries'));\n    fritasPost.appendChild(createParagraph('Crispy outside, tender inside, perfect for sharing.'));\n\n    tapasContainer.appendChild(bravasPost);\n    tapasContainer.appendChild(tortillaPost);\n    tapasContainer.appendChild(fritasPost);\n\n    menu.appendChild(beerPost);\n    menu.appendChild(tapasContainer);\n\n    return menu;\n}\n\nfunction postContainer() {\n    const container = document.createElement('div');\n    container.classList.add('post');\n\n    return container;\n}\n\nfunction addImage(src, alt) {\n    const img = document.createElement('img');\n    img.src = src;\n    img.alt = alt;\n\n    return img;\n}\n\nfunction createTitle(text) {\n    const title = document.createElement('h2');\n    title.textContent = text;\n\n    return title;\n}\n\nfunction createSmallTitle(text) {\n    const smallTitle = document.createElement('h3');\n    smallTitle.textContent = text;\n\n    return smallTitle;\n}\n\nfunction createBeerDescription(nameStrong, description) {\n    const p = document.createElement('p');\n\n    p.appendChild(nameStrong);\n    p.appendChild(document.createTextNode(description));\n\n    return p;\n}\n\nfunction createParagraph(text) {\n    const p = document.createElement('p');\n    p.textContent = text;\n\n    return p;\n}\n\nfunction loadMenu() {\n    const content = document.getElementById('content');\n    content.textContent = '';\n    content.appendChild(createMenu());\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadMenu);\n\n\n//# sourceURL=webpack://odin-restaurant/./src/menu.js?\n}");

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	const __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		const cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		const module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			const e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	// define getter/value functions for harmony exports
/******/ 	__webpack_require__.d = (exports, definition) => {
/******/ 		for(var key in definition) {
/******/ 			if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 				Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 			}
/******/ 		}
/******/ 	};
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	__webpack_require__.g = (function() {
/******/ 		if (typeof globalThis === 'object') return globalThis;
/******/ 		try {
/******/ 			return this || new Function('return this')();
/******/ 		} catch (e) {
/******/ 			if (typeof window === 'object') return window;
/******/ 		}
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop));
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = (exports) => {
/******/ 		Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		let scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		const document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript?.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				const scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					let i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^https?:/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/^blob:|[?#].*$/g, "").replace(/\/[^/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	let __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
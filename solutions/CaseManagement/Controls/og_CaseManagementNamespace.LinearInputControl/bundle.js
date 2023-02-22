/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
var pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad;
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./LinearInputControl/index.ts":
/*!*************************************!*\
  !*** ./LinearInputControl/index.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"LinearInputControl\": () => (/* binding */ LinearInputControl)\n/* harmony export */ });\nclass LinearInputControl {\n  init(context, notifyOutputChanged, state, container) {\n    this._context = context;\n    this._container = document.createElement(\"div\");\n    this._notifyOutputChanged = notifyOutputChanged;\n    this._refreshData = this.refreshData.bind(this);\n    this.inputElement = document.createElement(\"input\");\n    this.inputElement.setAttribute(\"type\", \"range\");\n    this.inputElement.addEventListener(\"input\", this._refreshData);\n    this.inputElement.setAttribute(\"min\", \"1\");\n    this.inputElement.setAttribute(\"max\", \"100\");\n    this.inputElement.setAttribute(\"class\", \"linearslider\");\n    this.inputElement.setAttribute(\"id\", \"linearrangeinput\");\n    this.labelElement = document.createElement(\"label\");\n    this.labelElement.setAttribute(\"class\", \"LinearRangeLabel\");\n    this.labelElement.setAttribute(\"id\", \"lrclabel\");\n    this._value = context.parameters.controlValue.raw;\n    this.inputElement.setAttribute(\"value\", context.parameters.controlValue.formatted ? context.parameters.controlValue.formatted : \"0\");\n    this.labelElement.innerHTML = context.parameters.controlValue.formatted ? context.parameters.controlValue.formatted : \"0\";\n    this._container.appendChild(this.inputElement);\n    this._container.appendChild(this.labelElement);\n    container.appendChild(this._container);\n  }\n  refreshData(evt) {\n    this._value = this.inputElement.value;\n    this.labelElement.innerHTML = this.inputElement.value;\n    this._notifyOutputChanged();\n  }\n  updateView(context) {\n    this._value = context.parameters.controlValue.raw;\n    this._context = context;\n    this.inputElement.setAttribute(\"value\", context.parameters.controlValue.formatted ? context.parameters.controlValue.formatted : \"\");\n    this.labelElement.innerHTML = context.parameters.controlValue.formatted ? context.parameters.controlValue.formatted : \"\";\n  }\n  getOutputs() {\n    return {\n      controlValue: this._value\n    };\n  }\n  destroy() {\n    this.inputElement.removeEventListener(\"input\", this._refreshData);\n  }\n}\n\n\n//# sourceURL=webpack://pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad/./LinearInputControl/index.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
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
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./LinearInputControl/index.ts"](0, __webpack_exports__, __webpack_require__);
/******/ 	pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad = __webpack_exports__;
/******/ 	
/******/ })()
;
if (window.ComponentFramework && window.ComponentFramework.registerControl) {
	ComponentFramework.registerControl('CaseManagementNamespace.LinearInputControl', pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad.LinearInputControl);
} else {
	var CaseManagementNamespace = CaseManagementNamespace || {};
	CaseManagementNamespace.LinearInputControl = pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad.LinearInputControl;
	pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad = undefined;
}
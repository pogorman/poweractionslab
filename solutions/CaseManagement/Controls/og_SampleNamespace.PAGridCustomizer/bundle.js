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

/***/ "./PAGridCustomizer/customizers/CellEditorOverrides.tsx":
/*!**************************************************************!*\
  !*** ./PAGridCustomizer/customizers/CellEditorOverrides.tsx ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\n\nvar _a;\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports.cellEditorOverrides = void 0;\nexports.cellEditorOverrides = (_a = {}, _a[\"Text\"] = function (props, col) {\n  // TODO: Add your custom cell editor overrides here\n  return null;\n}, _a);\n\n//# sourceURL=webpack://pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad/./PAGridCustomizer/customizers/CellEditorOverrides.tsx?");

/***/ }),

/***/ "./PAGridCustomizer/customizers/CellRendererOverrides.tsx":
/*!****************************************************************!*\
  !*** ./PAGridCustomizer/customizers/CellRendererOverrides.tsx ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nvar _a;\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports.cellRendererOverrides = void 0;\n\nvar React = __webpack_require__(/*! react */ \"react\");\n\nvar react_1 = __webpack_require__(/*! @fluentui/react */ \"@fluentui/react\");\n\nexports.cellRendererOverrides = (_a = {}, _a[\"Text\"] = function (props, col) {\n  if (col.colDefs[col.columnIndex].name === 'statusreason') {\n    // Render the cell value in green when the value is blue than $100,000 and red otherwise\n    if (props.value == \"In Progress\") {\n      return React.createElement(react_1.Label, {\n        style: {\n          color: 'blue'\n        }\n      }, props.formattedValue);\n    } else {\n      return React.createElement(react_1.Label, {\n        style: {\n          color: 'red'\n        }\n      }, props.formattedValue);\n    }\n  }\n\n  return null;\n}, _a);\n\n//# sourceURL=webpack://pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad/./PAGridCustomizer/customizers/CellRendererOverrides.tsx?");

/***/ }),

/***/ "./PAGridCustomizer/index.ts":
/*!***********************************!*\
  !*** ./PAGridCustomizer/index.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports.PAGridCustomizer = void 0;\n\nvar CellRendererOverrides_1 = __webpack_require__(/*! ./customizers/CellRendererOverrides */ \"./PAGridCustomizer/customizers/CellRendererOverrides.tsx\");\n\nvar CellEditorOverrides_1 = __webpack_require__(/*! ./customizers/CellEditorOverrides */ \"./PAGridCustomizer/customizers/CellEditorOverrides.tsx\");\n\nvar React = __webpack_require__(/*! react */ \"react\");\n\nvar PAGridCustomizer =\n/** @class */\nfunction () {\n  /**\r\n   * Empty constructor.\r\n   */\n  function PAGridCustomizer() {}\n  /**\r\n   * Used to initialize the control instance. Controls can kick off remote server calls and other initialization actions here.\r\n   * Data-set values are not initialized here, use updateView.\r\n   * @param context The entire property bag available to control via Context Object; It contains values as set up by the customizer mapped to property names defined in the manifest, as well as utility functions.\r\n   * @param notifyOutputChanged A callback method to alert the framework that the control has new outputs ready to be retrieved asynchronously.\r\n   * @param state A piece of data that persists in one session for a single user. Can be set at any point in a controls life cycle by calling 'setControlState' in the Mode interface.\r\n   */\n\n\n  PAGridCustomizer.prototype.init = function (context, notifyOutputChanged, state) {\n    var eventName = context.parameters.EventName.raw;\n\n    if (eventName) {\n      var paOneGridCustomizer = {\n        cellRendererOverrides: CellRendererOverrides_1.cellRendererOverrides,\n        cellEditorOverrides: CellEditorOverrides_1.cellEditorOverrides\n      };\n      context.factory.fireEvent(eventName, paOneGridCustomizer);\n    }\n  };\n  /**\r\n   * Called when any value in the property bag has changed. This includes field values, data-sets, global values such as container height and width, offline status, control metadata values such as label, visible, etc.\r\n   * @param context The entire property bag available to control via Context Object; It contains values as set up by the customizer mapped to names defined in the manifest, as well as utility functions\r\n   * @returns ReactElement root react element for the control\r\n   */\n\n\n  PAGridCustomizer.prototype.updateView = function (context) {\n    return React.createElement(React.Fragment);\n  };\n  /**\r\n   * It is called by the framework prior to a control receiving new data.\r\n   * @returns an object based on nomenclature defined in manifest, expecting object[s] for property marked as “bound” or “output”\r\n   */\n\n\n  PAGridCustomizer.prototype.getOutputs = function () {\n    return {};\n  };\n  /**\r\n   * Called when the control is to be removed from the DOM tree. Controls should use this call for cleanup.\r\n   * i.e. cancelling any pending remote calls, removing listeners, etc.\r\n   */\n\n\n  PAGridCustomizer.prototype.destroy = function () {// Add code to cleanup control if necessary\n  };\n\n  return PAGridCustomizer;\n}();\n\nexports.PAGridCustomizer = PAGridCustomizer;\n\n//# sourceURL=webpack://pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad/./PAGridCustomizer/index.ts?");

/***/ }),

/***/ "@fluentui/react":
/*!*************************************!*\
  !*** external "FluentUIReactv8290" ***!
  \*************************************/
/***/ ((module) => {

module.exports = FluentUIReactv8290;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

module.exports = React;

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./PAGridCustomizer/index.ts");
/******/ 	pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad = __webpack_exports__;
/******/ 	
/******/ })()
;
if (window.ComponentFramework && window.ComponentFramework.registerControl) {
	ComponentFramework.registerControl('SampleNamespace.PAGridCustomizer', pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad.PAGridCustomizer);
} else {
	var SampleNamespace = SampleNamespace || {};
	SampleNamespace.PAGridCustomizer = pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad.PAGridCustomizer;
	pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad = undefined;
}
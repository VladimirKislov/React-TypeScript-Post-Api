webpackHotUpdate("main",{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js!./src/shared/NotFound/notFound.scss":
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-1!./node_modules/sass-loader/dist/cjs.js!./src/shared/NotFound/notFound.scss ***!
  \**********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \".notFound__wrapperNotFound--10QtB {\\n  height: 100vh;\\n  display: flex;\\n  align-items: center;\\n  justify-content: center;\\n  font-size: 26px;\\n}\", \"\"]);\n// Exports\nexports.locals = {\n\t\"wrapperNotFound\": \"notFound__wrapperNotFound--10QtB\"\n};\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/shared/NotFound/notFound.scss?./node_modules/css-loader/dist/cjs.js??ref--5-1!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./src/shared/NotFound/NotFound.tsx":
/*!******************************************!*\
  !*** ./src/shared/NotFound/NotFound.tsx ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.NotFound = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\r\nvar notFound_scss_1 = __importDefault(__webpack_require__(/*! ./notFound.scss */ \"./src/shared/NotFound/notFound.scss\"));\r\nfunction NotFound() {\r\n    return (react_1.default.createElement(\"div\", { className: notFound_scss_1.default })\r\n        ,\r\n            react_1.default.createElement(\"h2\", null, \"404 Not Found\"));\r\n}\r\nexports.NotFound = NotFound;\r\n\n\n//# sourceURL=webpack:///./src/shared/NotFound/NotFound.tsx?");

/***/ }),

/***/ "./src/shared/NotFound/index.ts":
/*!**************************************!*\
  !*** ./src/shared/NotFound/index.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./NotFound */ \"./src/shared/NotFound/NotFound.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/NotFound/index.ts?");

/***/ }),

/***/ "./src/shared/NotFound/notFound.scss":
/*!*******************************************!*\
  !*** ./src/shared/NotFound/notFound.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-1!../../../node_modules/sass-loader/dist/cjs.js!./notFound.scss */ \"./node_modules/css-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js!./src/shared/NotFound/notFound.scss\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\nvar exported = content.locals ? content.locals : {};\n\n\nif (true) {\n  if (!content.locals) {\n    module.hot.accept(\n      /*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-1!../../../node_modules/sass-loader/dist/cjs.js!./notFound.scss */ \"./node_modules/css-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js!./src/shared/NotFound/notFound.scss\",\n      function () {\n        var newContent = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-1!../../../node_modules/sass-loader/dist/cjs.js!./notFound.scss */ \"./node_modules/css-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js!./src/shared/NotFound/notFound.scss\");\n\n              newContent = newContent.__esModule ? newContent.default : newContent;\n\n              if (typeof newContent === 'string') {\n                newContent = [[module.i, newContent, '']];\n              }\n\n              update(newContent);\n      }\n    )\n  }\n\n  module.hot.dispose(function() { \n    update();\n  });\n}\n\nmodule.exports = exported;\n\n//# sourceURL=webpack:///./src/shared/NotFound/notFound.scss?");

/***/ })

})
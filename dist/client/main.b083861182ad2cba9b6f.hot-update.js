webpackHotUpdate("main",{

/***/ "./src/shared/Atom/Atom.tsx":
/*!**********************************!*\
  !*** ./src/shared/Atom/Atom.tsx ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Atom = void 0;\r\nvar recoil_1 = __webpack_require__(/*! recoil */ \"./node_modules/recoil/es/index.js\");\r\nfunction Atom() {\r\n    var textValueState = (0, recoil_1.atom)({\r\n        key: 'textState',\r\n        default: 'Your comment should be here and now!',\r\n    });\r\n    return textValueState;\r\n}\r\nexports.Atom = Atom;\r\n\n\n//# sourceURL=webpack:///./src/shared/Atom/Atom.tsx?");

/***/ }),

/***/ "./src/shared/Atom/index.ts":
/*!**********************************!*\
  !*** ./src/shared/Atom/index.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./Atom */ \"./src/shared/Atom/Atom.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Atom/index.ts?");

/***/ })

})
webpackHotUpdate("main",{

/***/ "./src/shared/Dropdown/Dropdown.tsx":
/*!******************************************!*\
  !*** ./src/shared/Dropdown/Dropdown.tsx ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Dropdown = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\r\nvar dropdown_scss_1 = __importDefault(__webpack_require__(/*! ./dropdown.scss */ \"./src/shared/Dropdown/dropdown.scss\"));\r\nfunction Dropdown(_a) {\r\n    var button = _a.button, children = _a.children, isOpen = _a.isOpen, onOpen = _a.onOpen, onClose = _a.onClose;\r\n    var _b = react_1.default.useState(false), isDropdownOpen = _b[0], setIsDropdownOpen = _b[1];\r\n    var handleOpen;\r\n    return (react_1.default.createElement(\"div\", { className: dropdown_scss_1.default.container },\r\n        react_1.default.createElement(\"div\", { onClick: function () { return setIsDropdownOpen(!isDropdownOpen); } },\r\n            \" \",\r\n            button,\r\n            \" \"),\r\n        isDropdownOpen && (react_1.default.createElement(\"div\", { className: dropdown_scss_1.default.listContainer },\r\n            react_1.default.createElement(\"div\", { className: dropdown_scss_1.default.list, onClick: function () { return setIsDropdownOpen(false); } }, children)))));\r\n}\r\nexports.Dropdown = Dropdown;\r\n\n\n//# sourceURL=webpack:///./src/shared/Dropdown/Dropdown.tsx?");

/***/ }),

/***/ "./src/shared/Dropdown/index.ts":
/*!**************************************!*\
  !*** ./src/shared/Dropdown/index.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./Dropdown */ \"./src/shared/Dropdown/Dropdown.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Dropdown/index.ts?");

/***/ })

})
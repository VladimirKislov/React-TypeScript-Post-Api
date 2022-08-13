webpackHotUpdate("main",{

/***/ "./src/shared/Header/ThreadTitle/ThreadTitle.tsx":
/*!*******************************************************!*\
  !*** ./src/shared/Header/ThreadTitle/ThreadTitle.tsx ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.ThreadTitle = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\r\nvar recoil_1 = __webpack_require__(/*! recoil */ \"./node_modules/recoil/es/index.js\");\r\nvar threadtitle_scss_1 = __importDefault(__webpack_require__(/*! ./threadtitle.scss */ \"./src/shared/Header/ThreadTitle/threadtitle.scss\"));\r\nvar textState = (0, recoil_1.atom)({\r\n    key: 'textState',\r\n    default: 'test',\r\n});\r\nvar selectorText = (0, recoil_1.selector)({\r\n    key: 'selectorText',\r\n    get: function (_a) {\r\n        var get = _a.get;\r\n        var count = get(textState);\r\n        return count.length;\r\n    }\r\n});\r\nfunction ThreadTitle() {\r\n    var _a = (0, recoil_1.useRecoilState)(textState), text = _a[0], setText = _a[1];\r\n    var count = (0, recoil_1.useRecoilValue)();\r\n    function onChange(event) {\r\n        setText(event.target.value);\r\n        console.log(event.target.value);\r\n        console.log(event.target.value);\r\n    }\r\n    return (react_1.default.createElement(\"div\", null,\r\n        react_1.default.createElement(\"h1\", { className: threadtitle_scss_1.default.threadTitle }, \"Header\"),\r\n        react_1.default.createElement(\"input\", { type: \"text\", value: text, onChange: onChange })));\r\n}\r\nexports.ThreadTitle = ThreadTitle;\r\n\n\n//# sourceURL=webpack:///./src/shared/Header/ThreadTitle/ThreadTitle.tsx?");

/***/ })

})
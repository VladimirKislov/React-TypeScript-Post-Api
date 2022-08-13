webpackHotUpdate("main",{

/***/ "./src/shared/Header/ThreadTitle/ThreadTitle.tsx":
/*!*******************************************************!*\
  !*** ./src/shared/Header/ThreadTitle/ThreadTitle.tsx ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {\r\n    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {\r\n        if (ar || !(i in from)) {\r\n            if (!ar) ar = Array.prototype.slice.call(from, 0, i);\r\n            ar[i] = from[i];\r\n        }\r\n    }\r\n    return to.concat(ar || Array.prototype.slice.call(from));\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.ThreadTitle = void 0;\r\nvar recoil_1 = __webpack_require__(/*! recoil */ \"./node_modules/recoil/es/index.js\");\r\nvar textState = (0, recoil_1.atom)({\r\n    key: 'textState',\r\n    default: { text: 'test' },\r\n});\r\nfunction ThreadTitle() {\r\n    var _a = (0, recoil_1.useRecoilState)(textState), text = _a[0], setText = _a[1];\r\n    function onChange(_a) {\r\n        var value = _a.target.value;\r\n        var newText = text.map.apply(text, __spreadArray(__spreadArray([function (todo) { }], todo, false), [text, value], false));\r\n    }\r\n    ;\r\n    setText(newText);\r\n}\r\nexports.ThreadTitle = ThreadTitle;\r\nreturn (react_1.default.createElement(\"div\", null,\r\n    react_1.default.createElement(\"h1\", { className: threadtitle_scss_1.default.threadTitle }, \"Header\"),\r\n    react_1.default.createElement(\"input\", { type: \"text\", value: '', onChange: onChange })));\r\n\n\n//# sourceURL=webpack:///./src/shared/Header/ThreadTitle/ThreadTitle.tsx?");

/***/ })

})
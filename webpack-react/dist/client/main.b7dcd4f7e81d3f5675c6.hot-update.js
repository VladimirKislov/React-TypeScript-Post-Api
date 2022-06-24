webpackHotUpdate("main",{

/***/ "./src/shared/CardList/Card/TextContent/TextContent.tsx":
/*!**************************************************************!*\
  !*** ./src/shared/CardList/Card/TextContent/TextContent.tsx ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.TextContent = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\r\nvar textcontent_scss_1 = __importDefault(__webpack_require__(/*! ./textcontent.scss */ \"./src/shared/CardList/Card/TextContent/textcontent.scss\"));\r\nfunction TextContent(_a) {\r\n    var author = _a.author, date = _a.date, title = _a.title, avatar = _a.avatar;\r\n    return (react_1.default.createElement(\"div\", { className: textcontent_scss_1.default.textContent },\r\n        react_1.default.createElement(\"div\", { className: textcontent_scss_1.default.metaData },\r\n            react_1.default.createElement(\"div\", { className: textcontent_scss_1.default.userLink },\r\n                react_1.default.createElement(\"img\", { src: (avatar !== undefined || image.image.endsWith('.jpg')) ? \"\".concat(avatar) : \"http://spovv.com/file/2020/10/Group-47-1.png\", alt: \"avatar\", className: textcontent_scss_1.default.avatar }),\r\n                react_1.default.createElement(\"a\", { href: \"#\", className: textcontent_scss_1.default.username }, author || 'Дмитрий Гришин')),\r\n            react_1.default.createElement(\"span\", { className: textcontent_scss_1.default.createdAt },\r\n                react_1.default.createElement(\"span\", { className: textcontent_scss_1.default.publishedLabel }, \"\\u043E\\u043F\\u0443\\u0431\\u043B\\u0438\\u043A\\u043E\\u0432\\u0430\\u043D\\u043E \"),\r\n                \" \",\r\n                date || 4,\r\n                \" \\u0447\\u0430\\u0441\\u0430 \\u043D\\u0430\\u0437\\u0430\\u0434\")),\r\n        react_1.default.createElement(\"h2\", { className: textcontent_scss_1.default.title },\r\n            react_1.default.createElement(\"a\", { href: \"#\", className: textcontent_scss_1.default.postLink }, title || 'Следует отметить, что новая модель организационной деятельности...'))));\r\n}\r\nexports.TextContent = TextContent;\r\n\n\n//# sourceURL=webpack:///./src/shared/CardList/Card/TextContent/TextContent.tsx?");

/***/ })

})
webpackHotUpdate("main",{

/***/ "./src/shared/Header/SearchBlock/UserBlock/UserBlock.tsx":
/*!***************************************************************!*\
  !*** ./src/shared/Header/SearchBlock/UserBlock/UserBlock.tsx ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.UserBlock = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\r\nvar Icons_1 = __webpack_require__(/*! ../../../Icons */ \"./src/shared/Icons/index.ts\");\r\nvar userblock_scss_1 = __importDefault(__webpack_require__(/*! ./userblock.scss */ \"./src/shared/Header/SearchBlock/UserBlock/userblock.scss\"));\r\nfunction UserBlock(_a) {\r\n    var avatarSrc = _a.avatarSrc, username = _a.username;\r\n    return (react_1.default.createElement(\"a\", { href: 'https://www.reddit.com/api/v1/authorize?client_id=LTCW2f7TVj4zTVCfmNFpoA&response_type=code&state=random_string&redirect_uri=http://localhost:3000/auth&scope=read submit identity', className: userblock_scss_1.default.userBox },\r\n        react_1.default.createElement(\"div\", { className: userblock_scss_1.default.avatarBox }, avatarSrc\r\n            ? react_1.default.createElement(\"img\", { src: avatarSrc, alt: \"user_avatar\", className: userblock_scss_1.default.avatarImage })\r\n            : react_1.default.createElement(Icons_1.IconAnon, null)),\r\n        react_1.default.createElement(\"div\", { className: userblock_scss_1.default.username },\r\n            react_1.default.createElement(\"span\", null, username || 'Аноним'))));\r\n}\r\nexports.UserBlock = UserBlock;\r\n\n\n//# sourceURL=webpack:///./src/shared/Header/SearchBlock/UserBlock/UserBlock.tsx?");

/***/ })

})
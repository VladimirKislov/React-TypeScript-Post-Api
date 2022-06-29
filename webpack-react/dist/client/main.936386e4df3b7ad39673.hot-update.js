webpackHotUpdate("main",{

/***/ "./src/shared/CardList/Card/Menu/Menu.tsx":
/*!************************************************!*\
  !*** ./src/shared/CardList/Card/Menu/Menu.tsx ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Menu = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\r\nvar Dropdown_1 = __webpack_require__(/*! ../../../Dropdown */ \"./src/shared/Dropdown/index.ts\");\r\nvar menu_scss_1 = __importDefault(__webpack_require__(/*! ./menu.scss */ \"./src/shared/CardList/Card/Menu/menu.scss\"));\r\nvar MenuItemsList_1 = __webpack_require__(/*! ./MenuItemsList */ \"./src/shared/CardList/Card/Menu/MenuItemsList/index.ts\");\r\nvar Icon_1 = __webpack_require__(/*! ../../../Icons/Icon */ \"./src/shared/Icons/Icon.tsx\");\r\nvar react_dom_1 = __importDefault(__webpack_require__(/*! react-dom */ \"./node_modules/@hot-loader/react-dom/index.js\"));\r\nfunction Menu() {\r\n    var node = document.querySelector('#modal');\r\n    if (!node)\r\n        return react_dom_1.default.createPortal((react_1.default.createElement(\"div\", { className: menu_scss_1.default.menu },\r\n            react_1.default.createElement(Dropdown_1.Dropdown, { button: react_1.default.createElement(\"button\", { className: menu_scss_1.default.menuButton },\r\n                    react_1.default.createElement(Icon_1.Icons, { name: Icon_1.EIcons.menu, size: 16, mobileSize: 12 })) },\r\n                react_1.default.createElement(\"div\", { className: menu_scss_1.default.dropdownWrapper },\r\n                    react_1.default.createElement(MenuItemsList_1.MenuItemsList, null),\r\n                    react_1.default.createElement(\"button\", { className: menu_scss_1.default.dropdownClose }, \"\\u0417\\u0430\\u043A\\u0440\\u044B\\u0442\\u044C\"))))), node);\r\n}\r\nexports.Menu = Menu;\r\n\n\n//# sourceURL=webpack:///./src/shared/CardList/Card/Menu/Menu.tsx?");

/***/ })

})
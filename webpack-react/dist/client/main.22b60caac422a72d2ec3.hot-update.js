webpackHotUpdate("main",{

/***/ "./src/shared/CardList/Card/Menu/MenuItemsList/MenuItemsList.tsx":
/*!***********************************************************************!*\
  !*** ./src/shared/CardList/Card/Menu/MenuItemsList/MenuItemsList.tsx ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.MenuItemsList = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\r\nvar menuitemslist_scss_1 = __importDefault(__webpack_require__(/*! ./menuitemslist.scss */ \"./src/shared/CardList/Card/Menu/MenuItemsList/menuitemslist.scss\"));\r\nvar GenericList_1 = __webpack_require__(/*! ../../../../GenericList */ \"./src/shared/GenericList/index.ts\");\r\nvar generateRandomIndex_1 = __webpack_require__(/*! ../../../../../utils/react/generateRandomIndex */ \"./src/utils/react/generateRandomIndex.tsx\");\r\nvar merge_1 = __webpack_require__(/*! ../../../../../utils/js/merge */ \"./src/utils/js/merge.ts\");\r\nvar Icon_1 = __webpack_require__(/*! ../../../../Icons/Icon */ \"./src/shared/Icons/Icon.tsx\");\r\nvar list = [\r\n    {\r\n        As: 'li', text: 'Комментарии', className: \"\".concat(menuitemslist_scss_1.default.dropdownItem), classNameSpan: \"\".concat(menuitemslist_scss_1.default.dropdownSpan), svg: react_1.default.createElement(Icon_1.Icons, { name: Icon_1.EIcons.comment })\r\n    },\r\n    {\r\n        As: 'div', className: \"\".concat(menuitemslist_scss_1.default.divider)\r\n    },\r\n    {\r\n        As: 'li', text: 'Поделиться', className: \"\".concat(menuitemslist_scss_1.default.dropdownItem), classNameSpan: \"\".concat(menuitemslist_scss_1.default.dropdownSpan), svg: react_1.default.createElement(Icon_1.Icons, { name: Icon_1.EIcons.share })\r\n    },\r\n    {\r\n        As: 'div', className: \"\".concat(menuitemslist_scss_1.default.divider)\r\n    },\r\n    {\r\n        As: 'li', text: 'Скрыть', className: \"\".concat(menuitemslist_scss_1.default.dropdownItemMobile), classNameSpan: \"\".concat(menuitemslist_scss_1.default.dropdownSpan), svg: react_1.default.createElement(Icon_1.Icons, { name: Icon_1.EIcons.hidden })\r\n    },\r\n    {\r\n        As: 'div', className: \"\".concat(menuitemslist_scss_1.default.divider)\r\n    },\r\n    {\r\n        As: 'li', text: 'Сохранить', className: \"\".concat(menuitemslist_scss_1.default.dropdownItem), classNameSpan: \"\".concat(menuitemslist_scss_1.default.dropdownSpan), svg: react_1.default.createElement(Icon_1.Icons, { name: Icon_1.EIcons.save, size: 16, mobileSize: 12 })\r\n    },\r\n    {\r\n        As: 'div', className: \"\".concat(menuitemslist_scss_1.default.divider)\r\n    },\r\n    {\r\n        As: 'li', text: 'Пожаловаться', className: \"\".concat(menuitemslist_scss_1.default.dropdownItemMobile), classNameSpan: \"\".concat(menuitemslist_scss_1.default.dropdownSpan), svg: react_1.default.createElement(Icon_1.Icons, { name: Icon_1.EIcons.comPlain, size: 16, mobileSize: 12 })\r\n    },\r\n].map(generateRandomIndex_1.generateId);\r\nfunction MenuItemsList() {\r\n    var handleItemClick = function (id) {\r\n        console.log(id);\r\n    };\r\n    return (react_1.default.createElement(\"ul\", { className: menuitemslist_scss_1.default.dropdownList },\r\n        react_1.default.createElement(GenericList_1.GenericList, { list: list.map((0, merge_1.merge)({ onClick: handleItemClick })) })));\r\n}\r\nexports.MenuItemsList = MenuItemsList;\r\n\n\n//# sourceURL=webpack:///./src/shared/CardList/Card/Menu/MenuItemsList/MenuItemsList.tsx?");

/***/ }),

/***/ "./src/shared/CardList/Card/Menu/MenuItemsList/index.ts":
/*!**************************************************************!*\
  !*** ./src/shared/CardList/Card/Menu/MenuItemsList/index.ts ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./MenuItemsList */ \"./src/shared/CardList/Card/Menu/MenuItemsList/MenuItemsList.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/CardList/Card/Menu/MenuItemsList/index.ts?");

/***/ })

})
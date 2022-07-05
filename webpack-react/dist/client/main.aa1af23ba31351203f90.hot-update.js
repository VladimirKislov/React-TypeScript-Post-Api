webpackHotUpdate("main",{

/***/ "./node_modules/classnames/index.js":
false,

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js!./src/shared/Icons/icon.scss":
false,

/***/ "./src/shared/CardList/Card/Menu/Menu.tsx":
/*!************************************************!*\
  !*** ./src/shared/CardList/Card/Menu/Menu.tsx ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Menu = void 0;\r\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\r\nvar Dropdown_1 = __webpack_require__(/*! ../../../Dropdown */ \"./src/shared/Dropdown/index.ts\");\r\nvar menu_scss_1 = __importDefault(__webpack_require__(/*! ./menu.scss */ \"./src/shared/CardList/Card/Menu/menu.scss\"));\r\nvar MenuItemsList_1 = __webpack_require__(/*! ./MenuItemsList */ \"./src/shared/CardList/Card/Menu/MenuItemsList/index.ts\");\r\nvar Icon_1 = __webpack_require__(/*! ../../../Icons/Icon */ \"./src/shared/Icons/Icon.tsx\");\r\nfunction Menu() {\r\n    var _a = (0, react_1.useState)(false), isDropdownOpen = _a[0], setIsDropdownOpen = _a[1];\r\n    var _b = (0, react_1.useState)(), coordinate = _b[0], setCoordinate = _b[1];\r\n    var ref = (0, react_1.useRef)(null);\r\n    (0, react_1.useEffect)(function () {\r\n        function handleClick(element) {\r\n            setCoordinate(element.target.getBoundingClientRect().bottom + window.scrollY);\r\n        }\r\n        document.addEventListener('click', function (element) {\r\n            return handleClick(element);\r\n        });\r\n    }, []);\r\n    return (react_1.default.createElement(\"div\", { className: menu_scss_1.default.menu },\r\n        react_1.default.createElement(\"button\", { className: menu_scss_1.default.menuButton, onClick: function () { setIsDropdownOpen(true); }, ref: ref },\r\n            react_1.default.createElement(Icon_1.Icons, { name: Icon_1.EIcons.menu, size: 16, mobileSize: 12 })),\r\n        isDropdownOpen &&\r\n            react_1.default.createElement(Dropdown_1.Dropdown, { coordinate: coordinate, onClose: function () { setIsDropdownOpen(false); } },\r\n                react_1.default.createElement(\"div\", { className: menu_scss_1.default.dropdownWrapper },\r\n                    react_1.default.createElement(MenuItemsList_1.MenuItemsList, { onClose: function () { setIsDropdownOpen(false); } }),\r\n                    react_1.default.createElement(\"button\", { onClick: function () { setIsDropdownOpen(false); }, className: menu_scss_1.default.dropdownClose }, \"\\u0417\\u0430\\u043A\\u0440\\u044B\\u0442\\u044C\")))));\r\n}\r\nexports.Menu = Menu;\r\n\n\n//# sourceURL=webpack:///./src/shared/CardList/Card/Menu/Menu.tsx?");

/***/ }),

/***/ "./src/shared/CardList/Card/Menu/MenuItemsList/MenuItemsList.tsx":
/*!***********************************************************************!*\
  !*** ./src/shared/CardList/Card/Menu/MenuItemsList/MenuItemsList.tsx ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.MenuItemsList = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\r\nvar menuitemslist_scss_1 = __importDefault(__webpack_require__(/*! ./menuitemslist.scss */ \"./src/shared/CardList/Card/Menu/MenuItemsList/menuitemslist.scss\"));\r\nvar GenericList_1 = __webpack_require__(/*! ../../../../GenericList */ \"./src/shared/GenericList/index.ts\");\r\nvar generateRandomIndex_1 = __webpack_require__(/*! ../../../../../utils/react/generateRandomIndex */ \"./src/utils/react/generateRandomIndex.tsx\");\r\nvar merge_1 = __webpack_require__(/*! ../../../../../utils/js/merge */ \"./src/utils/js/merge.ts\");\r\nvar Icon_1 = __webpack_require__(/*! ../../../../Icons/Icon */ \"./src/shared/Icons/Icon.tsx\");\r\nvar list = [\r\n    {\r\n        As: 'li', text: 'Комментарии', className: \"\".concat(menuitemslist_scss_1.default.dropdownItem), classNameSpan: \"\".concat(menuitemslist_scss_1.default.dropdownSpan), svg: react_1.default.createElement(Icon_1.Icons, { name: Icon_1.EIcons.comment, size: 16, mobileSize: 12 })\r\n    },\r\n    {\r\n        As: 'div', className: \"\".concat(menuitemslist_scss_1.default.divider)\r\n    },\r\n    {\r\n        As: 'li', text: 'Поделиться', className: \"\".concat(menuitemslist_scss_1.default.dropdownItem), classNameSpan: \"\".concat(menuitemslist_scss_1.default.dropdownSpan), svg: react_1.default.createElement(Icon_1.Icons, { name: Icon_1.EIcons.share, size: 16, mobileSize: 12 })\r\n    },\r\n    {\r\n        As: 'div', className: \"\".concat(menuitemslist_scss_1.default.divider)\r\n    },\r\n    {\r\n        As: 'li', text: 'Скрыть', className: \"\".concat(menuitemslist_scss_1.default.dropdownItemMobile), classNameSpan: \"\".concat(menuitemslist_scss_1.default.dropdownSpan), svg: react_1.default.createElement(Icon_1.Icons, { name: Icon_1.EIcons.hidden, size: 16, mobileSize: 12 })\r\n    },\r\n    {\r\n        As: 'div', className: \"\".concat(menuitemslist_scss_1.default.divider)\r\n    },\r\n    {\r\n        As: 'li', text: 'Сохранить', className: \"\".concat(menuitemslist_scss_1.default.dropdownItem), classNameSpan: \"\".concat(menuitemslist_scss_1.default.dropdownSpan), svg: react_1.default.createElement(Icon_1.Icons, { name: Icon_1.EIcons.save, size: 16, mobileSize: 12 })\r\n    },\r\n    {\r\n        As: 'div', className: \"\".concat(menuitemslist_scss_1.default.divider)\r\n    },\r\n    {\r\n        As: 'li', text: 'Пожаловаться', className: \"\".concat(menuitemslist_scss_1.default.dropdownItemMobile), classNameSpan: \"\".concat(menuitemslist_scss_1.default.dropdownSpan), svg: react_1.default.createElement(Icon_1.Icons, { name: Icon_1.EIcons.comPlain, size: 16, mobileSize: 12 })\r\n    },\r\n].map(generateRandomIndex_1.generateId);\r\nfunction MenuItemsList(_a) {\r\n    var onClose = _a.onClose;\r\n    var handleItemClick = function (id) {\r\n        onClose === null || onClose === void 0 ? void 0 : onClose();\r\n        console.log(id);\r\n    };\r\n    return (react_1.default.createElement(\"ul\", { className: menuitemslist_scss_1.default.dropdownList },\r\n        react_1.default.createElement(GenericList_1.GenericList, { list: list.map((0, merge_1.merge)({ onClick: handleItemClick })) })));\r\n}\r\nexports.MenuItemsList = MenuItemsList;\r\n\n\n//# sourceURL=webpack:///./src/shared/CardList/Card/Menu/MenuItemsList/MenuItemsList.tsx?");

/***/ }),

/***/ "./src/shared/Icons/Icon.tsx":
/*!***********************************!*\
  !*** ./src/shared/Icons/Icon.tsx ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unexpected token (48:20)\\nFile was processed with these loaders:\\n * ./node_modules/ts-loader/index.js\\nYou may need an additional loader to handle the result of these loaders.\\n|             children = react_1.default.createElement(ShareIcon_1.ShareIcon, null);\\n|             break;\\n>         case EIcons.:\\n|             children = react_1.default.createElement(IconAnon_1.IconAnon, null);\\n|             break;\");\n\n//# sourceURL=webpack:///./src/shared/Icons/Icon.tsx?");

/***/ }),

/***/ "./src/shared/Icons/icon.scss":
false

})
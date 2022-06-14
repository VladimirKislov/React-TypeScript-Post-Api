webpackHotUpdate("main",{

/***/ "./src/shared/Icons/CommentIcon.tsx":
/*!******************************************!*\
  !*** ./src/shared/Icons/CommentIcon.tsx ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unexpected token (13:12)\\nFile was processed with these loaders:\\n * ./node_modules/ts-loader/index.js\\nYou may need an additional loader to handle the result of these loaders.\\n|     var _b, _c, _d;\\n|     var size = _a.size, mobileSize = _a.mobileSize, tabletSize = _a.tabletSize, desktopSize = _a.desktopSize;\\n>     switch () {\\n|     }\\n|     var classes = (0, classnames_1.default)(icon_scss_1.default[\\\"s\\\".concat(size)], (_b = {}, _b[icon_scss_1.default[\\\"m\\\".concat(mobileSize)]] = mobileSize, _b), (_c = {}, _c[icon_scss_1.default[\\\"t\\\".concat(tabletSize)]] = tabletSize, _c), (_d = {}, _d[icon_scss_1.default[\\\"d\\\".concat(desktopSize)]] = desktopSize, _d));\");\n\n//# sourceURL=webpack:///./src/shared/Icons/CommentIcon.tsx?");

/***/ }),

/***/ "./src/shared/Icons/Icon.tsx":
/*!***********************************!*\
  !*** ./src/shared/Icons/Icon.tsx ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Icons = exports.EIcons = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\r\nvar icon_scss_1 = __importDefault(__webpack_require__(/*! ./icon.scss */ \"./src/shared/Icons/icon.scss\"));\r\nvar classnames_1 = __importDefault(__webpack_require__(/*! classnames */ \"./node_modules/classnames/index.js\"));\r\nvar CommentIcon_1 = __webpack_require__(/*! ./CommentIcon */ \"./src/shared/Icons/CommentIcon.tsx\");\r\nvar ComplainIcon_1 = __webpack_require__(/*! ./ComplainIcon */ \"./src/shared/Icons/ComplainIcon.tsx\");\r\nvar HiddenIcon_1 = __webpack_require__(/*! ./HiddenIcon */ \"./src/shared/Icons/HiddenIcon.tsx\");\r\nvar MenuIcon_1 = __webpack_require__(/*! ./MenuIcon */ \"./src/shared/Icons/MenuIcon.tsx\");\r\nvar SaveIcon_1 = __webpack_require__(/*! ./SaveIcon */ \"./src/shared/Icons/SaveIcon.tsx\");\r\nvar ShareIcon_1 = __webpack_require__(/*! ./ShareIcon */ \"./src/shared/Icons/ShareIcon.tsx\");\r\nvar IconAnon_1 = __webpack_require__(/*! ./IconAnon */ \"./src/shared/Icons/IconAnon.tsx\");\r\nvar EIcons;\r\n(function (EIcons) {\r\n    EIcons[\"comment\"] = \"comment\";\r\n    EIcons[\"comPlain\"] = \"comPlain\";\r\n    EIcons[\"hidden\"] = \"hidden\";\r\n    EIcons[\"menu\"] = \"menu\";\r\n    EIcons[\"save\"] = \"save\";\r\n    EIcons[\"share\"] = \"share\";\r\n})(EIcons = exports.EIcons || (exports.EIcons = {}));\r\nfunction Icons(_a) {\r\n    var _b, _c, _d;\r\n    var _e = _a.As, As = _e === void 0 ? 'span' : _e, children = _a.children, name = _a.name, size = _a.size, mobileSize = _a.mobileSize, tabletSize = _a.tabletSize, desktopSize = _a.desktopSize;\r\n    switch (name) {\r\n        case EIcons.comment:\r\n            children = react_1.default.createElement(CommentIcon_1.CommentIcon, { idSize: 16 });\r\n            break;\r\n        case EIcons.comPlain:\r\n            children = react_1.default.createElement(ComplainIcon_1.ComplainIcon, null);\r\n            break;\r\n        case EIcons.hidden:\r\n            children = react_1.default.createElement(HiddenIcon_1.HiddenIcon, null);\r\n            break;\r\n        case EIcons.menu:\r\n            children = react_1.default.createElement(MenuIcon_1.MenuIcon, null);\r\n            break;\r\n        case EIcons.save:\r\n            children = react_1.default.createElement(SaveIcon_1.SaveIcon, null);\r\n            break;\r\n        case EIcons.share:\r\n            children = react_1.default.createElement(ShareIcon_1.ShareIcon, null);\r\n            break;\r\n        case EIcons.share:\r\n            children = react_1.default.createElement(IconAnon_1.IconAnon, null);\r\n            break;\r\n    }\r\n    var classes = (0, classnames_1.default)(icon_scss_1.default[\"s\".concat(size)], (_b = {}, _b[icon_scss_1.default[\"m\".concat(mobileSize)]] = mobileSize, _b), (_c = {}, _c[icon_scss_1.default[\"t\".concat(tabletSize)]] = tabletSize, _c), (_d = {}, _d[icon_scss_1.default[\"d\".concat(desktopSize)]] = desktopSize, _d));\r\n    return (react_1.default.createElement(As, { className: classes }, children));\r\n}\r\nexports.Icons = Icons;\r\n\n\n//# sourceURL=webpack:///./src/shared/Icons/Icon.tsx?");

/***/ }),

/***/ "./src/shared/Icons/index.ts":
/*!***********************************!*\
  !*** ./src/shared/Icons/index.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./MenuIcon */ \"./src/shared/Icons/MenuIcon.tsx\"), exports);\r\n__exportStar(__webpack_require__(/*! ./CommentIcon */ \"./src/shared/Icons/CommentIcon.tsx\"), exports);\r\n__exportStar(__webpack_require__(/*! ./ShareIcon */ \"./src/shared/Icons/ShareIcon.tsx\"), exports);\r\n__exportStar(__webpack_require__(/*! ./HiddenIcon */ \"./src/shared/Icons/HiddenIcon.tsx\"), exports);\r\n__exportStar(__webpack_require__(/*! ./SaveIcon */ \"./src/shared/Icons/SaveIcon.tsx\"), exports);\r\n__exportStar(__webpack_require__(/*! ./ComplainIcon */ \"./src/shared/Icons/ComplainIcon.tsx\"), exports);\r\n__exportStar(__webpack_require__(/*! ./IconAnon */ \"./src/shared/Icons/IconAnon.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Icons/index.ts?");

/***/ })

})
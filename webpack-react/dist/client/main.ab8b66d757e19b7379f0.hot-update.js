webpackHotUpdate("main",{

/***/ "./src/shared/CommentUsers/CommentUsers.tsx":
/*!**************************************************!*\
  !*** ./src/shared/CommentUsers/CommentUsers.tsx ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.CommentUsers = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\r\nvar Comment_1 = __webpack_require__(/*! ./Comment */ \"./src/shared/CommentUsers/Comment/index.ts\");\r\nfunction CommentUsers(data) {\r\n    // console.log(data)\r\n    // console.log(data.data[0])\r\n    return (react_1.default.createElement(\"div\", null,\r\n        react_1.default.createElement(\"h2\", null, \"Comments\"),\r\n        data.data[0].map(function (item) { return (\r\n        // console.log(item),\r\n        react_1.default.createElement(Comment_1.Comment\r\n        // avatar={item.data.all_awardings[0].resized_icons[0].url}\r\n        , { \r\n            // avatar={item.data.all_awardings[0].resized_icons[0].url}\r\n            key: item.data.id, author: item.data.author, date: item.data.created, body: item.data.body, replies: item.data.replies })); })));\r\n}\r\nexports.CommentUsers = CommentUsers;\r\n\n\n//# sourceURL=webpack:///./src/shared/CommentUsers/CommentUsers.tsx?");

/***/ }),

/***/ "./src/shared/CommentUsers/index.ts":
/*!******************************************!*\
  !*** ./src/shared/CommentUsers/index.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./CommentUsers */ \"./src/shared/CommentUsers/CommentUsers.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/CommentUsers/index.ts?");

/***/ })

})
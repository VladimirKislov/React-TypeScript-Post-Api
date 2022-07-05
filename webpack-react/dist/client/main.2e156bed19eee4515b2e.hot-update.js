webpackHotUpdate("main",{

/***/ "./src/shared/CommentUsers/CommentUsers.tsx":
/*!**************************************************!*\
  !*** ./src/shared/CommentUsers/CommentUsers.tsx ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.CommentUsers = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\r\nvar Comment_1 = __webpack_require__(/*! ./Comment */ \"./src/shared/CommentUsers/Comment/index.ts\");\r\nfunction CommentUsers(data) {\r\n    // console.log(data)\r\n    // console.log(data.data[0])\r\n    return (react_1.default.createElement(\"h2\", null, \"Comments\")\r\n        ,\r\n            react_1.default.createElement(\"div\", null, data.data[0].map(function (item) { return (\r\n            // console.log(item),\r\n            react_1.default.createElement(Comment_1.Comment\r\n            // avatar={item.data.all_awardings[0].resized_icons[0].url}\r\n            , { \r\n                // avatar={item.data.all_awardings[0].resized_icons[0].url}\r\n                author: item.data.author, date: item.data.created, body: item.data.body })); })));\r\n}\r\nexports.CommentUsers = CommentUsers;\r\n\n\n//# sourceURL=webpack:///./src/shared/CommentUsers/CommentUsers.tsx?");

/***/ })

})
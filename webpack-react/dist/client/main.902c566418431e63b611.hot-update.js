webpackHotUpdate("main",{

/***/ "./src/shared/CommentUsers/Comment/Comment.tsx":
/*!*****************************************************!*\
  !*** ./src/shared/CommentUsers/Comment/Comment.tsx ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Comment = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\r\nvar comment_scss_1 = __importDefault(__webpack_require__(/*! ./comment.scss */ \"./src/shared/CommentUsers/Comment/comment.scss\"));\r\nvar generateRandomIndex_1 = __importDefault(__webpack_require__(/*! ./../../../utils/react/generateRandomIndex */ \"./src/utils/react/generateRandomIndex.tsx\"));\r\nfunction Comment(_a) {\r\n    var avatar = _a.avatar, author = _a.author, date = _a.date, body = _a.body, replies = _a.replies;\r\n    function viewAvatar() {\r\n        if (avatar === undefined || (!avatar.endsWith('.jpg') && !avatar.endsWith('.jpeg') && !avatar.endsWith('.gif') && !avatar.endsWith('.png'))) {\r\n            return \"http://spovv.com/file/2020/10/Group-47-1.png\";\r\n        }\r\n        else {\r\n            return avatar;\r\n        }\r\n    }\r\n    console.log(generateRandomIndex_1.default);\r\n    function postTime() {\r\n        var currentDate = Math.floor(Date.now() / 1000);\r\n        if (!date)\r\n            return null;\r\n        var getDate = parseInt(date);\r\n        var setDate = Math.floor((currentDate - getDate) / 360);\r\n        if (setDate > 24) {\r\n            var postData = Math.floor(setDate / 24);\r\n            return \"\".concat(postData, \" \\u0434\\u043D\\u0435\\u0439\");\r\n        }\r\n        else {\r\n            return \"\".concat(setDate, \" \\u0447\\u0430\\u0441\\u043E\\u0432\");\r\n        }\r\n    }\r\n    return (react_1.default.createElement(\"div\", null,\r\n        react_1.default.createElement(\"div\", null,\r\n            react_1.default.createElement(\"div\", null,\r\n                react_1.default.createElement(\"a\", { href: \"#\", className: comment_scss_1.default.username }, author || 'Дмитрий Гришин'),\r\n                react_1.default.createElement(\"span\", { className: comment_scss_1.default.createdAt },\r\n                    react_1.default.createElement(\"span\", { className: comment_scss_1.default.publishedLabel },\r\n                        \"\\u043E\\u043F\\u0443\\u0431\\u043B\\u0438\\u043A\\u043E\\u0432\\u0430\\u043D\\u043E  \",\r\n                        postTime() || \"4 часа\",\r\n                        \" \\u043D\\u0430\\u0437\\u0430\\u0434\"))),\r\n            react_1.default.createElement(\"div\", null,\r\n                react_1.default.createElement(\"h3\", null, body))),\r\n        react_1.default.createElement(\"div\", { className: comment_scss_1.default.s }, replies !== ''\r\n            ? replies.data.children.map(function (item) { return ((item.data.author && item.data.created && item.data.body && item.data.id && item.data.replies)\r\n                ?\r\n                    react_1.default.createElement(Comment, { key: generateRandomIndex_1.default, author: item.data.author, date: item.data.created, body: item.data.body, replies: item.data.replies })\r\n                : react_1.default.createElement(react_1.default.Fragment, null)); })\r\n            : react_1.default.createElement(react_1.default.Fragment, null))));\r\n}\r\nexports.Comment = Comment;\r\n\n\n//# sourceURL=webpack:///./src/shared/CommentUsers/Comment/Comment.tsx?");

/***/ }),

/***/ "./src/shared/CommentUsers/Comment/index.ts":
/*!**************************************************!*\
  !*** ./src/shared/CommentUsers/Comment/index.ts ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./Comment */ \"./src/shared/CommentUsers/Comment/Comment.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/CommentUsers/Comment/index.ts?");

/***/ })

})
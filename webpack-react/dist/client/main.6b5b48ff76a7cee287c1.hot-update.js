webpackHotUpdate("main",{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js!./src/shared/CommentUsers/Comment/comment.scss":
/*!*********************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-1!./node_modules/sass-loader/dist/cjs.js!./src/shared/CommentUsers/Comment/comment.scss ***!
  \*********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \".comment__s--jLw6M {\\n  padding: 0 0 0 30px;\\n}\", \"\"]);\n// Exports\nexports.locals = {\n\t\"s\": \"comment__s--jLw6M\"\n};\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/shared/CommentUsers/Comment/comment.scss?./node_modules/css-loader/dist/cjs.js??ref--5-1!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./src/shared/CommentUsers/Comment/Comment.tsx":
/*!*****************************************************!*\
  !*** ./src/shared/CommentUsers/Comment/Comment.tsx ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Comment = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\r\nvar comment_scss_1 = __importDefault(__webpack_require__(/*! ./comment.scss */ \"./src/shared/CommentUsers/Comment/comment.scss\"));\r\nfunction Comment(_a) {\r\n    var avatar = _a.avatar, author = _a.author, date = _a.date, body = _a.body, replies = _a.replies;\r\n    function viewAvatar() {\r\n        if (avatar === undefined || (!avatar.endsWith('.jpg') && !avatar.endsWith('.jpeg') && !avatar.endsWith('.gif') && !avatar.endsWith('.png'))) {\r\n            return \"http://spovv.com/file/2020/10/Group-47-1.png\";\r\n        }\r\n        else {\r\n            return avatar;\r\n        }\r\n    }\r\n    function postTime() {\r\n        var currentDate = Math.floor(Date.now() / 1000);\r\n        if (!date)\r\n            return null;\r\n        var getDate = parseInt(date);\r\n        var setDate = Math.floor((currentDate - getDate) / 360);\r\n        if (setDate > 24) {\r\n            var postData = Math.floor(setDate / 24);\r\n            return \"\".concat(postData, \" \\u0434\\u043D\\u0435\\u0439\");\r\n        }\r\n        else {\r\n            return \"\".concat(setDate, \" \\u0447\\u0430\\u0441\\u043E\\u0432\");\r\n        }\r\n    }\r\n    // const [newArrayReplies, setNewArrayReplies] = useState([])\r\n    // if (replies !== '' && replies !== undefined && replies.data !== undefined) {\r\n    //   const newReplies = replies.data.children.filter((element: any) => {\r\n    //     if (element.data !== undefined) return true\r\n    //   })\r\n    //   // setNewArrayReplies(newReplies)\r\n    // }\r\n    // // console.log(newArrayReplies)\r\n    return (react_1.default.createElement(\"div\", null,\r\n        react_1.default.createElement(\"div\", null,\r\n            react_1.default.createElement(\"div\", null,\r\n                react_1.default.createElement(\"a\", { href: \"#\", className: comment_scss_1.default.username }, author || 'Дмитрий Гришин'),\r\n                react_1.default.createElement(\"span\", { className: comment_scss_1.default.createdAt },\r\n                    react_1.default.createElement(\"span\", { className: comment_scss_1.default.publishedLabel },\r\n                        \"\\u043E\\u043F\\u0443\\u0431\\u043B\\u0438\\u043A\\u043E\\u0432\\u0430\\u043D\\u043E  \",\r\n                        postTime() || \"4 часа\",\r\n                        \" \\u043D\\u0430\\u0437\\u0430\\u0434\"))),\r\n            react_1.default.createElement(\"div\", null,\r\n                react_1.default.createElement(\"h3\", null, body))),\r\n        react_1.default.createElement(\"div\", { className: comment_scss_1.default.s }, replies !== '' && replies !== undefined && replies.data !== undefined\r\n            ? replies.data.children.filter(function (element) {\r\n                if (element.data !== undefined)\r\n                    return true;\r\n            }).map(function (item) { return (react_1.default.createElement(Comment, { key: item.data.id, author: item.data.author, date: item.data.created, body: item.data.body, replies: item.data.replies })); })\r\n            : react_1.default.createElement(react_1.default.Fragment, null))));\r\n}\r\nexports.Comment = Comment;\r\n\n\n//# sourceURL=webpack:///./src/shared/CommentUsers/Comment/Comment.tsx?");

/***/ }),

/***/ "./src/shared/CommentUsers/Comment/comment.scss":
/*!******************************************************!*\
  !*** ./src/shared/CommentUsers/Comment/comment.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--5-1!../../../../node_modules/sass-loader/dist/cjs.js!./comment.scss */ \"./node_modules/css-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js!./src/shared/CommentUsers/Comment/comment.scss\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\nvar exported = content.locals ? content.locals : {};\n\n\nif (true) {\n  if (!content.locals) {\n    module.hot.accept(\n      /*! !../../../../node_modules/css-loader/dist/cjs.js??ref--5-1!../../../../node_modules/sass-loader/dist/cjs.js!./comment.scss */ \"./node_modules/css-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js!./src/shared/CommentUsers/Comment/comment.scss\",\n      function () {\n        var newContent = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--5-1!../../../../node_modules/sass-loader/dist/cjs.js!./comment.scss */ \"./node_modules/css-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js!./src/shared/CommentUsers/Comment/comment.scss\");\n\n              newContent = newContent.__esModule ? newContent.default : newContent;\n\n              if (typeof newContent === 'string') {\n                newContent = [[module.i, newContent, '']];\n              }\n\n              update(newContent);\n      }\n    )\n  }\n\n  module.hot.dispose(function() { \n    update();\n  });\n}\n\nmodule.exports = exported;\n\n//# sourceURL=webpack:///./src/shared/CommentUsers/Comment/comment.scss?");

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
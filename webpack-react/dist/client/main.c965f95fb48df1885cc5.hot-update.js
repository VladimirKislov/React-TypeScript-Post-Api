webpackHotUpdate("main",{

/***/ "./src/hooks/useCommentUsers.ts":
/*!**************************************!*\
  !*** ./src/hooks/useCommentUsers.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.useCommentUsers = void 0;\r\nvar react_1 = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\r\nvar axios_1 = __importDefault(__webpack_require__(/*! axios */ \"./node_modules/axios/index.js\"));\r\nfunction useCommentUsers(_a) {\r\n    var subreddit = _a.subreddit, postId = _a.postId;\r\n    var _b = (0, react_1.useState)([]), comment = _b[0], setComment = _b[1];\r\n    (0, react_1.useEffect)(function () {\r\n        if (!subreddit)\r\n            return;\r\n        axios_1.default.get(\"http://api.reddit.com/\".concat(subreddit, \"/comments/\").concat(postId))\r\n            .then(function (response) {\r\n            setComment(response.data[1].data.children);\r\n        })\r\n            .catch(console.log);\r\n    }, []);\r\n    return comment;\r\n}\r\nexports.useCommentUsers = useCommentUsers;\r\n\n\n//# sourceURL=webpack:///./src/hooks/useCommentUsers.ts?");

/***/ })

})
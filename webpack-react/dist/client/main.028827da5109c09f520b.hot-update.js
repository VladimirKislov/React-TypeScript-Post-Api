webpackHotUpdate("main",{

/***/ "./src/shared/CardList/Card/TextContent/TextContent.tsx":
/*!**************************************************************!*\
  !*** ./src/shared/CardList/Card/TextContent/TextContent.tsx ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.TextContent = void 0;\r\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\r\nvar react_router_dom_1 = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/index.js\");\r\nvar useCommentUsers_1 = __webpack_require__(/*! ../../../../hooks/useCommentUsers */ \"./src/hooks/useCommentUsers.ts\");\r\nvar NotFound_1 = __webpack_require__(/*! ../../../NotFound/NotFound */ \"./src/shared/NotFound/NotFound.tsx\");\r\nvar Post_1 = __webpack_require__(/*! ../../../Post */ \"./src/shared/Post/index.ts\");\r\nvar textcontent_scss_1 = __importDefault(__webpack_require__(/*! ./textcontent.scss */ \"./src/shared/CardList/Card/TextContent/textcontent.scss\"));\r\nfunction TextContent(_a) {\r\n    var author = _a.author, date = _a.date, title = _a.title, avatar = _a.avatar, image = _a.image, subreddit = _a.subreddit, postId = _a.postId;\r\n    var _b = (0, react_1.useState)(false), isModalOpened = _b[0], setIsModalOpened = _b[1];\r\n    var data = (0, useCommentUsers_1.useCommentUsers)({ subreddit: subreddit, postId: postId });\r\n    function viewAvatar() {\r\n        if (avatar === undefined || (!avatar.endsWith('.jpg') && !avatar.endsWith('.jpeg') && !avatar.endsWith('.gif') && !avatar.endsWith('.png'))) {\r\n            return \"http://spovv.com/file/2020/10/Group-47-1.png\";\r\n        }\r\n        else {\r\n            return avatar;\r\n        }\r\n    }\r\n    function postTime() {\r\n        var currentDate = Math.floor(Date.now() / 1000);\r\n        if (!date)\r\n            return null;\r\n        var getDate = parseInt(date);\r\n        var setDate = Math.floor((currentDate - getDate) / 360);\r\n        if (setDate > 24) {\r\n            var postData = Math.floor(setDate / 24);\r\n            return \"\".concat(postData, \" \\u0434\\u043D\\u0435\\u0439\");\r\n        }\r\n        else {\r\n            return \"\".concat(setDate, \" \\u0447\\u0430\\u0441\\u043E\\u0432\");\r\n        }\r\n    }\r\n    return (react_1.default.createElement(\"div\", { className: textcontent_scss_1.default.textContent },\r\n        react_1.default.createElement(\"div\", { className: textcontent_scss_1.default.metaData },\r\n            react_1.default.createElement(\"div\", { className: textcontent_scss_1.default.userLink },\r\n                react_1.default.createElement(\"img\", { src: viewAvatar(), alt: \"avatar\", className: textcontent_scss_1.default.avatar }),\r\n                react_1.default.createElement(\"a\", { href: \"#\", className: textcontent_scss_1.default.username }, author || 'Дмитрий Гришин')),\r\n            react_1.default.createElement(\"span\", { className: textcontent_scss_1.default.createdAt },\r\n                react_1.default.createElement(\"span\", { className: textcontent_scss_1.default.publishedLabel },\r\n                    \"\\u043E\\u043F\\u0443\\u0431\\u043B\\u0438\\u043A\\u043E\\u0432\\u0430\\u043D\\u043E  \",\r\n                    postTime() || \"4 часа\",\r\n                    \" \\u043D\\u0430\\u0437\\u0430\\u0434\"))),\r\n        react_1.default.createElement(\"h2\", { className: textcontent_scss_1.default.title },\r\n            react_1.default.createElement(react_router_dom_1.Link, { to: \"posts/\".concat(postId), className: textcontent_scss_1.default.postLink, onClick: function () { setIsModalOpened(true); } }, title || 'Следует отметить, что новая модель организационной деятельности...')),\r\n        react_1.default.createElement(react_router_dom_1.Route, { path: '/posts/:id' }, isModalOpened && (react_1.default.createElement(Post_1.Post, { onClose: function () { setIsModalOpened(false); }, title: title, image: image, data: data }))),\r\n        react_1.default.createElement(react_router_dom_1.Redirect, { to: \"/dashboard\" }),\r\n        \" : \",\r\n        react_1.default.createElement(NotFound_1.NotFound, null),\r\n        \" />\"));\r\n}\r\nexports.TextContent = TextContent;\r\n\n\n//# sourceURL=webpack:///./src/shared/CardList/Card/TextContent/TextContent.tsx?");

/***/ }),

/***/ "./src/shared/CardList/Card/TextContent/index.ts":
/*!*******************************************************!*\
  !*** ./src/shared/CardList/Card/TextContent/index.ts ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./TextContent */ \"./src/shared/CardList/Card/TextContent/TextContent.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/CardList/Card/TextContent/index.ts?");

/***/ }),

/***/ "./src/shared/NotFound/NotFound.tsx":
/*!******************************************!*\
  !*** ./src/shared/NotFound/NotFound.tsx ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.NotFound = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\r\nvar layout_scss_1 = __importDefault(__webpack_require__(!(function webpackMissingModule() { var e = new Error(\"Cannot find module './layout.scss'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())));\r\nfunction NotFound() {\r\n    return (react_1.default.createElement(\"h2\", { className: layout_scss_1.default.notFound }, \"404 Not Found\"));\r\n}\r\nexports.NotFound = NotFound;\r\n\n\n//# sourceURL=webpack:///./src/shared/NotFound/NotFound.tsx?");

/***/ })

})
webpackHotUpdate("main",{

/***/ "./src/hooks/usePostsData.ts":
/*!***********************************!*\
  !*** ./src/hooks/usePostsData.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.usePostsData = void 0;\r\nvar react_1 = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\r\nvar axios_1 = __importDefault(__webpack_require__(/*! axios */ \"./node_modules/axios/index.js\"));\r\nvar react_redux_1 = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\r\nvar store_1 = __webpack_require__(/*! ../store/store */ \"./src/store/store.ts\");\r\nfunction usePostsData() {\r\n    var dispatch = (0, react_redux_1.useDispatch)();\r\n    var token = (0, react_redux_1.useSelector)(function (state) { return state.token.token; });\r\n    (0, react_1.useEffect)(function () {\r\n        if (token === '')\r\n            return;\r\n        axios_1.default.get('https://oauth.reddit.com/best', {\r\n            headers: { Authorization: \"bearer \".concat(token) }\r\n        })\r\n            .then(function (resp) {\r\n            var posts = resp.data.data.children;\r\n            dispatch((0, store_1.updatePosts)(posts));\r\n        })\r\n            .catch(console.log);\r\n    }, [token]);\r\n}\r\nexports.usePostsData = usePostsData;\r\n\n\n//# sourceURL=webpack:///./src/hooks/usePostsData.ts?");

/***/ }),

/***/ "./src/hooks/useUserData.ts":
/*!**********************************!*\
  !*** ./src/hooks/useUserData.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.useUserData = void 0;\r\nvar react_1 = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\r\nvar axios_1 = __importDefault(__webpack_require__(/*! axios */ \"./node_modules/axios/index.js\"));\r\nvar react_redux_1 = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\r\nvar meAction_1 = __webpack_require__(/*! ../store/me/meAction */ \"./src/store/me/meAction.ts\");\r\nfunction useUserData() {\r\n    var _a = (0, react_1.useState)({}), data = _a[0], setData = _a[1];\r\n    var token = (0, react_redux_1.useSelector)(function (state) { return state.token.token; });\r\n    var dispatch = (0, react_redux_1.useDispatch)();\r\n    (0, react_1.useEffect)(function () {\r\n        if (token === '')\r\n            return;\r\n        dispatch((0, meAction_1.MeRequest)());\r\n        axios_1.default.get('https://oauth.reddit.com/api/v1/me', {\r\n            headers: { Authorization: \"bearer \".concat(token) }\r\n        })\r\n            .then(function (resp) {\r\n            var userData = resp.data;\r\n            setData({ name: userData.name, iconImg: userData.icon_img.split('?').shift() });\r\n            dispatch((0, meAction_1.MeRequestSuccess)({ name: userData.name, iconImg: userData.icon_img.split('?').shift() }));\r\n        })\r\n            .catch(function (error) {\r\n            console.log(error);\r\n            dispatch((0, meAction_1.MeRequestError)(error));\r\n        });\r\n    }, [token]);\r\n    return [data];\r\n}\r\nexports.useUserData = useUserData;\r\n\n\n//# sourceURL=webpack:///./src/hooks/useUserData.ts?");

/***/ }),

/***/ "./src/store/me/meAction.ts":
/*!**********************************!*\
  !*** ./src/store/me/meAction.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.MeRequestError = exports.ME_REQUEST_ERROR = exports.MeRequestSuccess = exports.ME_REQUEST_SUCCESS = exports.MeRequest = exports.ME_REQUEST = void 0;\r\nexports.ME_REQUEST = 'ME_REQUEST';\r\nvar MeRequest = function () { return ({\r\n    type: exports.ME_REQUEST,\r\n}); };\r\nexports.MeRequest = MeRequest;\r\nexports.ME_REQUEST_SUCCESS = 'ME_REQUEST_SUCCESS';\r\nvar MeRequestSuccess = function (data) { return ({\r\n    type: exports.ME_REQUEST_SUCCESS,\r\n    data: data,\r\n}); };\r\nexports.MeRequestSuccess = MeRequestSuccess;\r\nexports.ME_REQUEST_ERROR = 'ME_REQUEST_ERROR';\r\nvar MeRequestError = function (error) { return ({\r\n    type: exports.ME_REQUEST_ERROR,\r\n    error: error,\r\n}); };\r\nexports.MeRequestError = MeRequestError;\r\n\n\n//# sourceURL=webpack:///./src/store/me/meAction.ts?");

/***/ }),

/***/ "./src/store/store.ts":
/*!****************************!*\
  !*** ./src/store/store.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unexpected token (27:4)\\nFile was processed with these loaders:\\n * ./node_modules/ts-loader/index.js\\nYou may need an additional loader to handle the result of these loaders.\\n|     me: {\\n|         loading: \\n>     }\\n| };\\n| var UPDATE_COMMENT = 'UPDATE_COMMENT';\");\n\n//# sourceURL=webpack:///./src/store/store.ts?");

/***/ }),

/***/ "./src/store/token/action.ts":
/*!***********************************!*\
  !*** ./src/store/token/action.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.RequestToken = exports.TokenRequestSuccess = exports.TOKEN_REQUEST_SUCCESS = void 0;\r\nexports.TOKEN_REQUEST_SUCCESS = 'TOKEN_REQUEST_SUCCESS';\r\nvar TokenRequestSuccess = function (token) { return ({\r\n    type: exports.TOKEN_REQUEST_SUCCESS,\r\n    token: token,\r\n}); };\r\nexports.TokenRequestSuccess = TokenRequestSuccess;\r\nvar RequestToken = function () { return function (dispatch) {\r\n    if (window.__token__ !== 'undefined') {\r\n        dispatch((0, exports.TokenRequestSuccess)(window.__token__));\r\n    }\r\n}; };\r\nexports.RequestToken = RequestToken;\r\n\n\n//# sourceURL=webpack:///./src/store/token/action.ts?");

/***/ })

})
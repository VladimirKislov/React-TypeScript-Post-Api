webpackHotUpdate("main",{

/***/ "./src/hooks/useToken.ts":
/*!*******************************!*\
  !*** ./src/hooks/useToken.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.useToken = void 0;\r\nvar react_1 = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\r\nvar react_redux_1 = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\r\nvar action_1 = __webpack_require__(/*! ../store/token/action */ \"./src/store/token/action.ts\");\r\nfunction useToken() {\r\n    var dispatch = (0, react_redux_1.useDispatch)();\r\n    dispatch({ type: 'TOKEN_REQUEST' });\r\n    (0, react_1.useEffect)(function () {\r\n        if (window.__token__ !== 'undefined') {\r\n            // dispatch(updateToken(window.__token__))\r\n            dispatch((0, action_1.TokenRequestSuccess)(window.__token__));\r\n        }\r\n        else {\r\n            console.log('error');\r\n            dispatch((0, action_1.TokenRequestError)('error'));\r\n        }\r\n    }, []);\r\n}\r\nexports.useToken = useToken;\r\n\n\n//# sourceURL=webpack:///./src/hooks/useToken.ts?");

/***/ }),

/***/ "./src/store.ts":
/*!**********************!*\
  !*** ./src/store.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __assign = (this && this.__assign) || function () {\r\n    __assign = Object.assign || function(t) {\r\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\r\n            s = arguments[i];\r\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\r\n                t[p] = s[p];\r\n        }\r\n        return t;\r\n    };\r\n    return __assign.apply(this, arguments);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.tokenReducer = exports.updatePosts = exports.updateToken = exports.updateComment = void 0;\r\nvar action_1 = __webpack_require__(/*! ./store/token/action */ \"./src/store/token/action.ts\");\r\nvar reducer_1 = __webpack_require__(/*! ./store/token/reducer */ \"./src/store/token/reducer.ts\");\r\nvar initialState = {\r\n    commentText: 'Your comment should be here',\r\n    token: '',\r\n    postsData: [],\r\n    meToken: {\r\n        loading: false,\r\n        error: '',\r\n        token: '',\r\n    }\r\n};\r\nvar DATA_TOKEN = 'DATA_TOKEN';\r\nvar UPDATE_COMMENT = 'UPDATE_COMMENT';\r\nvar UPDATE_POSTS_DATA = 'UPDATE_POSTS_DATA';\r\nvar updateComment = function (text) { return ({\r\n    type: UPDATE_COMMENT,\r\n    text: text,\r\n}); };\r\nexports.updateComment = updateComment;\r\nvar updateToken = function (data) { return ({\r\n    type: DATA_TOKEN,\r\n    data: data,\r\n}); };\r\nexports.updateToken = updateToken;\r\nvar updatePosts = function (posts) { return ({\r\n    type: UPDATE_POSTS_DATA,\r\n    posts: posts,\r\n}); };\r\nexports.updatePosts = updatePosts;\r\nvar tokenReducer = function (state, action) {\r\n    if (state === void 0) { state = initialState; }\r\n    switch (action.type) {\r\n        case DATA_TOKEN:\r\n            return __assign(__assign({}, state), { token: action.data });\r\n        case UPDATE_COMMENT:\r\n            return __assign(__assign({}, state), { commentText: action.text });\r\n        case UPDATE_POSTS_DATA:\r\n            return __assign(__assign({}, state), { postsData: action.posts });\r\n        case action_1.TOKEN_REQUEST:\r\n        case action_1.TOKEN_REQUEST_SUCCESS:\r\n        case action_1.TOKEN_REQUEST_ERROR:\r\n            return __assign(__assign({}, state), { meToken: (0, reducer_1.meReducer)(state.meToken, action) });\r\n        default:\r\n            return state;\r\n    }\r\n};\r\nexports.tokenReducer = tokenReducer;\r\n\n\n//# sourceURL=webpack:///./src/store.ts?");

/***/ }),

/***/ "./src/store/token/action.ts":
/*!***********************************!*\
  !*** ./src/store/token/action.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.MeRequest = exports.TokenRequestError = exports.TOKEN_REQUEST_ERROR = exports.TokenRequestSuccess = exports.TOKEN_REQUEST_SUCCESS = exports.TokenRequest = exports.TOKEN_REQUEST = void 0;\r\nexports.TOKEN_REQUEST = 'TOKEN_REQUEST';\r\nvar TokenRequest = function () { return ({\r\n    type: exports.TOKEN_REQUEST,\r\n}); };\r\nexports.TokenRequest = TokenRequest;\r\nexports.TOKEN_REQUEST_SUCCESS = 'TOKEN_REQUEST_SUCCESS';\r\nvar TokenRequestSuccess = function (token) { return ({\r\n    type: exports.TOKEN_REQUEST_SUCCESS,\r\n    token: token,\r\n}); };\r\nexports.TokenRequestSuccess = TokenRequestSuccess;\r\nexports.TOKEN_REQUEST_ERROR = 'TOKEN_REQUEST_ERROR';\r\nvar TokenRequestError = function (error) { return ({\r\n    type: exports.TOKEN_REQUEST_ERROR,\r\n    error: error,\r\n}); };\r\nexports.TokenRequestError = TokenRequestError;\r\n\n\n//# sourceURL=webpack:///./src/store/token/action.ts?");

/***/ }),

/***/ "./src/store/token/reducer.ts":
/*!************************************!*\
  !*** ./src/store/token/reducer.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __assign = (this && this.__assign) || function () {\r\n    __assign = Object.assign || function(t) {\r\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\r\n            s = arguments[i];\r\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\r\n                t[p] = s[p];\r\n        }\r\n        return t;\r\n    };\r\n    return __assign.apply(this, arguments);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.meReducer = void 0;\r\nvar action_1 = __webpack_require__(/*! ./action */ \"./src/store/token/action.ts\");\r\nvar meReducer = function (state, action) {\r\n    switch (action.type) {\r\n        case action_1.TOKEN_REQUEST:\r\n            return __assign(__assign({}, state), { loading: true });\r\n        case action_1.TOKEN_REQUEST_ERROR:\r\n            return __assign(__assign({}, state), { error: action.error });\r\n        case action_1.TOKEN_REQUEST_SUCCESS:\r\n            return __assign(__assign({}, state), { token: action.token });\r\n        default:\r\n            return state;\r\n    }\r\n};\r\nexports.meReducer = meReducer;\r\n\n\n//# sourceURL=webpack:///./src/store/token/reducer.ts?");

/***/ })

})
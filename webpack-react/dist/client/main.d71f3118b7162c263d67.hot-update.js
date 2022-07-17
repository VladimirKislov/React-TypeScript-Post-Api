webpackHotUpdate("main",{

/***/ "./src/store/me/meReducer.ts":
/*!***********************************!*\
  !*** ./src/store/me/meReducer.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __assign = (this && this.__assign) || function () {\r\n    __assign = Object.assign || function(t) {\r\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\r\n            s = arguments[i];\r\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\r\n                t[p] = s[p];\r\n        }\r\n        return t;\r\n    };\r\n    return __assign.apply(this, arguments);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.meReducer = void 0;\r\nvar meReducer = function (state, action) {\r\n    switch (action.type) {\r\n        case TOKEN_REQUEST:\r\n            return __assign(__assign({}, state), { loading: true });\r\n        case TOKEN_REQUEST_ERROR:\r\n            return __assign(__assign({}, state), { error: action.error, loading: false });\r\n        case ME_REQUEST_SUCCESS:\r\n            return __assign(__assign({}, state), { token: action.token, loading: false });\r\n        default:\r\n            return state;\r\n    }\r\n};\r\nexports.meReducer = meReducer;\r\n\n\n//# sourceURL=webpack:///./src/store/me/meReducer.ts?");

/***/ }),

/***/ "./src/store/store.ts":
/*!****************************!*\
  !*** ./src/store/store.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __assign = (this && this.__assign) || function () {\r\n    __assign = Object.assign || function(t) {\r\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\r\n            s = arguments[i];\r\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\r\n                t[p] = s[p];\r\n        }\r\n        return t;\r\n    };\r\n    return __assign.apply(this, arguments);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.tokenReducer = exports.updatePosts = exports.updateComment = void 0;\r\nvar meAction_1 = __webpack_require__(/*! ./me/meAction */ \"./src/store/me/meAction.ts\");\r\nvar meReducer_1 = __webpack_require__(/*! ./me/meReducer */ \"./src/store/me/meReducer.ts\");\r\nvar action_1 = __webpack_require__(/*! ./token/action */ \"./src/store/token/action.ts\");\r\nvar reducer_1 = __webpack_require__(/*! ./token/reducer */ \"./src/store/token/reducer.ts\");\r\nvar initialState = {\r\n    commentText: 'Your comment should be here',\r\n    postsData: [],\r\n    token: {\r\n        loading: false,\r\n        token: '',\r\n    },\r\n    me: {\r\n        loading: false,\r\n    }\r\n};\r\nvar UPDATE_COMMENT = 'UPDATE_COMMENT';\r\nvar UPDATE_POSTS_DATA = 'UPDATE_POSTS_DATA';\r\nvar updateComment = function (text) { return ({\r\n    type: UPDATE_COMMENT,\r\n    text: text,\r\n}); };\r\nexports.updateComment = updateComment;\r\nvar updatePosts = function (posts) { return ({\r\n    type: UPDATE_POSTS_DATA,\r\n    posts: posts,\r\n}); };\r\nexports.updatePosts = updatePosts;\r\nvar tokenReducer = function (state, action) {\r\n    if (state === void 0) { state = initialState; }\r\n    switch (action.type) {\r\n        case UPDATE_COMMENT:\r\n            return __assign(__assign({}, state), { commentText: action.text });\r\n        case UPDATE_POSTS_DATA:\r\n            return __assign(__assign({}, state), { postsData: action.posts });\r\n        case action_1.TOKEN_REQUEST_SUCCESS:\r\n            return __assign(__assign({}, state), { token: (0, reducer_1.tokenReducerSuccess)(state.token, action) });\r\n        case meAction_1.ME_REQUEST:\r\n        case meAction_1.ME_REQUEST_SUCCESS:\r\n        case meAction_1.ME_REQUEST_ERROR:\r\n            return __assign(__assign({}, state), { me: (0, meReducer_1.meReducer)(state.me, action) });\r\n        default:\r\n            return state;\r\n    }\r\n};\r\nexports.tokenReducer = tokenReducer;\r\n\n\n//# sourceURL=webpack:///./src/store/store.ts?");

/***/ })

})
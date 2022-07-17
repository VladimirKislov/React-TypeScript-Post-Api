webpackHotUpdate("main",{

/***/ "./src/shared/Header/SearchBlock/SearchBlock.tsx":
/*!*******************************************************!*\
  !*** ./src/shared/Header/SearchBlock/SearchBlock.tsx ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.SearchBlock = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\r\nvar react_redux_1 = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\r\nvar searchblock_scss_1 = __importDefault(__webpack_require__(/*! ./searchblock.scss */ \"./src/shared/Header/SearchBlock/searchblock.scss\"));\r\nvar UserBlock_1 = __webpack_require__(/*! ./UserBlock/UserBlock */ \"./src/shared/Header/SearchBlock/UserBlock/UserBlock.tsx\");\r\nfunction SearchBlock() {\r\n    // const data  = useUserData()\r\n    var data = (0, react_redux_1.useSelector)(function (state) { return state.me.data; });\r\n    return (react_1.default.createElement(\"div\", { className: searchblock_scss_1.default.searchBlock },\r\n        react_1.default.createElement(UserBlock_1.UserBlock, { avatarSrc: data.iconImg, username: data.name })));\r\n}\r\nexports.SearchBlock = SearchBlock;\r\n\n\n//# sourceURL=webpack:///./src/shared/Header/SearchBlock/SearchBlock.tsx?");

/***/ }),

/***/ "./src/store/me/meAction.ts":
/*!**********************************!*\
  !*** ./src/store/me/meAction.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.MeRequestAsync = exports.MeRequestError = exports.ME_REQUEST_ERROR = exports.MeRequestSuccess = exports.ME_REQUEST_SUCCESS = exports.MeRequest = exports.ME_REQUEST = void 0;\r\nexports.ME_REQUEST = 'ME_REQUEST';\r\nvar MeRequest = function () { return ({\r\n    type: exports.ME_REQUEST,\r\n}); };\r\nexports.MeRequest = MeRequest;\r\nexports.ME_REQUEST_SUCCESS = 'ME_REQUEST_SUCCESS';\r\nvar MeRequestSuccess = function (data) { return ({\r\n    type: exports.ME_REQUEST_SUCCESS,\r\n    data: data,\r\n}); };\r\nexports.MeRequestSuccess = MeRequestSuccess;\r\nexports.ME_REQUEST_ERROR = 'ME_REQUEST_ERROR';\r\nvar MeRequestError = function (error) { return ({\r\n    type: exports.ME_REQUEST_ERROR,\r\n    error: error,\r\n}); };\r\nexports.MeRequestError = MeRequestError;\r\nvar MeRequestAsync = function () { return function (dispatch) {\r\n    dispatch((0, exports.MeRequest)());\r\n    axios.get('https://oauth.reddit.com/api/v1/me', {\r\n        headers: { Authorization: \"bearer \".concat(token) }\r\n    })\r\n        .then(function (resp) {\r\n        var userData = resp.data;\r\n        dispatch((0, exports.MeRequestSuccess)({ name: userData.name, iconImg: userData.icon_img.split('?').shift() }));\r\n    })\r\n        .catch(function (error) {\r\n        console.log(error);\r\n        dispatch((0, exports.MeRequestError)(error.message));\r\n    });\r\n}; };\r\nexports.MeRequestAsync = MeRequestAsync;\r\n\n\n//# sourceURL=webpack:///./src/store/me/meAction.ts?");

/***/ }),

/***/ "./src/store/me/meReducer.ts":
/*!***********************************!*\
  !*** ./src/store/me/meReducer.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __assign = (this && this.__assign) || function () {\r\n    __assign = Object.assign || function(t) {\r\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\r\n            s = arguments[i];\r\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\r\n                t[p] = s[p];\r\n        }\r\n        return t;\r\n    };\r\n    return __assign.apply(this, arguments);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.meReducer = void 0;\r\nvar meAction_1 = __webpack_require__(/*! ./meAction */ \"./src/store/me/meAction.ts\");\r\nvar meReducer = function (state, action) {\r\n    switch (action.type) {\r\n        case meAction_1.ME_REQUEST:\r\n            return __assign(__assign({}, state), { loading: true });\r\n        case meAction_1.ME_REQUEST_ERROR:\r\n            return __assign(__assign({}, state), { error: action.error, loading: false });\r\n        case meAction_1.ME_REQUEST_SUCCESS:\r\n            return __assign(__assign({}, state), { data: action.data, loading: false });\r\n        default:\r\n            return state;\r\n    }\r\n};\r\nexports.meReducer = meReducer;\r\n\n\n//# sourceURL=webpack:///./src/store/me/meReducer.ts?");

/***/ }),

/***/ "./src/store/store.ts":
/*!****************************!*\
  !*** ./src/store/store.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __assign = (this && this.__assign) || function () {\r\n    __assign = Object.assign || function(t) {\r\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\r\n            s = arguments[i];\r\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\r\n                t[p] = s[p];\r\n        }\r\n        return t;\r\n    };\r\n    return __assign.apply(this, arguments);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.tokenReducer = exports.updatePosts = exports.updateComment = void 0;\r\nvar meReducer_1 = __webpack_require__(/*! ./me/meReducer */ \"./src/store/me/meReducer.ts\");\r\nvar action_1 = __webpack_require__(/*! ./token/action */ \"./src/store/token/action.ts\");\r\nvar reducer_1 = __webpack_require__(/*! ./token/reducer */ \"./src/store/token/reducer.ts\");\r\nvar meAction_1 = __webpack_require__(/*! ./me/meAction */ \"./src/store/me/meAction.ts\");\r\nvar initialState = {\r\n    commentText: 'Your comment should be here',\r\n    postsData: [],\r\n    token: {\r\n        loading: false,\r\n        token: '',\r\n    },\r\n    me: {\r\n        loading: false,\r\n        error: '',\r\n        data: {\r\n            name: '',\r\n            iconImg: '',\r\n        }\r\n    },\r\n};\r\nvar UPDATE_COMMENT = 'UPDATE_COMMENT';\r\nvar UPDATE_POSTS_DATA = 'UPDATE_POSTS_DATA';\r\nvar updateComment = function (text) { return ({\r\n    type: UPDATE_COMMENT,\r\n    text: text,\r\n}); };\r\nexports.updateComment = updateComment;\r\nvar updatePosts = function (posts) { return ({\r\n    type: UPDATE_POSTS_DATA,\r\n    posts: posts,\r\n}); };\r\nexports.updatePosts = updatePosts;\r\nvar tokenReducer = function (state, action) {\r\n    if (state === void 0) { state = initialState; }\r\n    switch (action.type) {\r\n        case UPDATE_COMMENT:\r\n            return __assign(__assign({}, state), { commentText: action.text });\r\n        case UPDATE_POSTS_DATA:\r\n            return __assign(__assign({}, state), { postsData: action.posts });\r\n        case action_1.TOKEN_REQUEST_SUCCESS:\r\n            return __assign(__assign({}, state), { token: (0, reducer_1.tokenReducerSuccess)(state.token, action) });\r\n        case meAction_1.ME_REQUEST:\r\n        case meAction_1.ME_REQUEST_SUCCESS:\r\n        case meAction_1.ME_REQUEST_ERROR:\r\n            return __assign(__assign({}, state), { me: (0, meReducer_1.meReducer)(state.me, action) });\r\n        default:\r\n            return state;\r\n    }\r\n};\r\nexports.tokenReducer = tokenReducer;\r\n\n\n//# sourceURL=webpack:///./src/store/store.ts?");

/***/ })

})
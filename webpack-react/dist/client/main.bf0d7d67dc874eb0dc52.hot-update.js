webpackHotUpdate("main",{

/***/ "./src/store/token/action.ts":
/*!***********************************!*\
  !*** ./src/store/token/action.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.RequestToken = exports.TokenRequestError = exports.TOKEN_REQUEST_ERROR = exports.TokenRequestSuccess = exports.TOKEN_REQUEST_SUCCESS = exports.TokenRequest = exports.TOKEN_REQUEST = void 0;\r\nexports.TOKEN_REQUEST = 'TOKEN_REQUEST';\r\nvar TokenRequest = function () { return ({\r\n    type: exports.TOKEN_REQUEST,\r\n}); };\r\nexports.TokenRequest = TokenRequest;\r\nexports.TOKEN_REQUEST_SUCCESS = 'TOKEN_REQUEST_SUCCESS';\r\nvar TokenRequestSuccess = function (token) { return ({\r\n    type: exports.TOKEN_REQUEST_SUCCESS,\r\n    token: token,\r\n}); };\r\nexports.TokenRequestSuccess = TokenRequestSuccess;\r\nexports.TOKEN_REQUEST_ERROR = 'TOKEN_REQUEST_ERROR';\r\nvar TokenRequestError = function (error) { return ({\r\n    type: exports.TOKEN_REQUEST_ERROR,\r\n    error: error,\r\n}); };\r\nexports.TokenRequestError = TokenRequestError;\r\nvar RequestToken = function () { return function (dispatch) {\r\n    dispatch((0, exports.TokenRequest)());\r\n    if (window.__token__ !== 'undefined') {\r\n        dispatch((0, exports.TokenRequestSuccess)(window.__token__));\r\n    }\r\n    //  else {\r\n    //     dispatch(TokenRequestError('error'))\r\n    // }\r\n}; };\r\nexports.RequestToken = RequestToken;\r\n\n\n//# sourceURL=webpack:///./src/store/token/action.ts?");

/***/ })

})
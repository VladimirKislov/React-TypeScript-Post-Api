webpackHotUpdate("main",{

/***/ "./src/store/me/meAction.ts":
/*!**********************************!*\
  !*** ./src/store/me/meAction.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.MeRequestAsync = exports.MeRequestError = exports.ME_REQUEST_ERROR = exports.MeRequestSuccess = exports.ME_REQUEST_SUCCESS = exports.MeRequest = exports.ME_REQUEST = void 0;\r\nvar axios_1 = __importDefault(__webpack_require__(/*! axios */ \"./node_modules/axios/index.js\"));\r\nexports.ME_REQUEST = 'ME_REQUEST';\r\nvar MeRequest = function () { return ({\r\n    type: exports.ME_REQUEST,\r\n}); };\r\nexports.MeRequest = MeRequest;\r\nexports.ME_REQUEST_SUCCESS = 'ME_REQUEST_SUCCESS';\r\nvar MeRequestSuccess = function (data) { return ({\r\n    type: exports.ME_REQUEST_SUCCESS,\r\n    data: data,\r\n}); };\r\nexports.MeRequestSuccess = MeRequestSuccess;\r\nexports.ME_REQUEST_ERROR = 'ME_REQUEST_ERROR';\r\nvar MeRequestError = function (error) { return ({\r\n    type: exports.ME_REQUEST_ERROR,\r\n    error: error,\r\n}); };\r\nexports.MeRequestError = MeRequestError;\r\nvar MeRequestAsync = function () { return function (dispatch, getState) {\r\n    dispatch((0, exports.MeRequest)());\r\n    axios_1.default.get('https://oauth.reddit.com/api/v1/me', {\r\n        headers: { Authorization: \"bearer \".concat(getStatetoken) }\r\n    })\r\n        .then(function (resp) {\r\n        var userData = resp.data;\r\n        dispatch((0, exports.MeRequestSuccess)({ name: userData.name, iconImg: userData.icon_img.split('?').shift() }));\r\n    })\r\n        .catch(function (error) {\r\n        console.log(error);\r\n        dispatch((0, exports.MeRequestError)(error.message));\r\n    });\r\n}; };\r\nexports.MeRequestAsync = MeRequestAsync;\r\n\n\n//# sourceURL=webpack:///./src/store/me/meAction.ts?");

/***/ })

})
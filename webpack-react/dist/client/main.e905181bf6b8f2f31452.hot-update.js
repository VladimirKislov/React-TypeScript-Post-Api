webpackHotUpdate("main",{

/***/ "./src/store/token/reducer.ts":
/*!************************************!*\
  !*** ./src/store/token/reducer.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __assign = (this && this.__assign) || function () {\r\n    __assign = Object.assign || function(t) {\r\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\r\n            s = arguments[i];\r\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\r\n                t[p] = s[p];\r\n        }\r\n        return t;\r\n    };\r\n    return __assign.apply(this, arguments);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.tokenReducerS = void 0;\r\nvar action_1 = __webpack_require__(/*! ./action */ \"./src/store/token/action.ts\");\r\nvar tokenReducerS = function (state, action) {\r\n    switch (action.type) {\r\n        // case TOKEN_REQUEST:\r\n        //     return {\r\n        //         ...state,\r\n        //         loading: true,\r\n        //     }\r\n        // case TOKEN_REQUEST_ERROR:\r\n        //     return {\r\n        //         ...state,\r\n        //         error: action.error,\r\n        //         loading: false,\r\n        //     }\r\n        case action_1.TOKEN_REQUEST_SUCCESS:\r\n            return __assign(__assign({}, state), { token: action.token, loading: false });\r\n        default:\r\n            return state;\r\n    }\r\n};\r\nexports.tokenReducerS = tokenReducerS;\r\n\n\n//# sourceURL=webpack:///./src/store/token/reducer.ts?");

/***/ })

})
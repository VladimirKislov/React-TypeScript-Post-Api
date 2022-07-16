webpackHotUpdate("main",{

/***/ "./src/hooks/useToken.ts":
/*!*******************************!*\
  !*** ./src/hooks/useToken.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.useToken = void 0;\r\nvar react_redux_1 = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\r\nfunction useToken() {\r\n    var dispatch = (0, react_redux_1.useDispatch)();\r\n    MeRequestAsync();\r\n    // dispatch({ type: 'TOKEN_REQUEST' })\r\n    // useEffect(() => {\r\n    //     if (window.__token__ !== 'undefined') {\r\n    //         // dispatch(updateToken(window.__token__))\r\n    //         dispatch(TokenRequestSuccess(window.__token__))\r\n    //     } else {\r\n    //         dispatch(TokenRequestError('error: token is not defined'))\r\n    //     }\r\n    // }, [])\r\n}\r\nexports.useToken = useToken;\r\n\n\n//# sourceURL=webpack:///./src/hooks/useToken.ts?");

/***/ })

})
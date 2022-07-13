webpackHotUpdate("main",{

/***/ "./src/App.tsx":
/*!*********************!*\
  !*** ./src/App.tsx ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.App = void 0;\r\nvar root_1 = __webpack_require__(/*! react-hot-loader/root */ \"./node_modules/react-hot-loader/root.js\");\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\r\n__webpack_require__(/*! ./main.global.css */ \"./src/main.global.css\");\r\nvar Layout_1 = __webpack_require__(/*! ./shared/Layout/Layout */ \"./src/shared/Layout/Layout.tsx\");\r\nvar Header_1 = __webpack_require__(/*! ./shared/Header/Header */ \"./src/shared/Header/Header.tsx\");\r\nvar Content_1 = __webpack_require__(/*! ./shared/Content/Content */ \"./src/shared/Content/Content.tsx\");\r\nvar CardList_1 = __webpack_require__(/*! ./shared/CardList */ \"./src/shared/CardList/index.ts\");\r\nvar useToken_1 = __webpack_require__(/*! ./hooks/useToken */ \"./src/hooks/useToken.ts\");\r\nvar userContext_1 = __webpack_require__(/*! ./context/userContext */ \"./src/context/userContext.tsx\");\r\nvar PostsContext_1 = __webpack_require__(/*! ./context/PostsContext */ \"./src/context/PostsContext.ts\");\r\nvar usePostsData_1 = __webpack_require__(/*! ./hooks/usePostsData */ \"./src/hooks/usePostsData.ts\");\r\nvar redux_1 = __webpack_require__(/*! redux */ \"./node_modules/redux/es/redux.js\");\r\nvar react_redux_1 = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\r\nvar redux_devtools_extension_1 = __webpack_require__(/*! redux-devtools-extension */ \"./node_modules/redux-devtools-extension/index.js\");\r\nvar storeToken_1 = __webpack_require__(/*! ./storeToken */ \"./src/storeToken.ts\");\r\n// const store = createStore(rootReducer, composeWithDevTools())\r\nvar storeToken = (0, redux_1.createStore)(storeToken_1.tokenReducer, (0, redux_devtools_extension_1.composeWithDevTools)());\r\nfunction AppComponent() {\r\n    var token = (0, useToken_1.useToken)()[0];\r\n    var postData = (0, usePostsData_1.usePostsData)(token);\r\n    return (\r\n    // <Provider store={store}>\r\n    react_1.default.createElement(react_redux_1.Provider, { store: storeToken },\r\n        react_1.default.createElement(userContext_1.UserContextProvider, null,\r\n            react_1.default.createElement(PostsContext_1.PostsContext.Provider, { value: [postData] },\r\n                react_1.default.createElement(Layout_1.Layout, null,\r\n                    react_1.default.createElement(Header_1.Header, null),\r\n                    react_1.default.createElement(Content_1.Content, null,\r\n                        react_1.default.createElement(CardList_1.CardList, null))))))\r\n    // </Provider>\r\n    );\r\n}\r\nexports.App = (0, root_1.hot)(function () {\r\n    return react_1.default.createElement(react_redux_1.Provider, { store: storeToken },\r\n        react_1.default.createElement(AppComponent, null));\r\n});\r\n\n\n//# sourceURL=webpack:///./src/App.tsx?");

/***/ }),

/***/ "./src/context/userContext.tsx":
/*!*************************************!*\
  !*** ./src/context/userContext.tsx ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\n// import React from 'react';\r\n// import { useUserData } from '../hooks/useUserData';\r\n// export interface IUserContextData {\r\n//     name?: string;\r\n//     iconImg?: string;\r\n// }\r\n// export const userContext = React.createContext<IUserContextData>({})\r\n// export function UserContextProvider({ children }: { children: React.ReactNode}) {\r\n//     const [data] = useUserData()\r\n//     return (\r\n//         <userContext.Provider value={data}>\r\n//             { children }\r\n//         </userContext.Provider>\r\n//     )\r\n// }\r\n\n\n//# sourceURL=webpack:///./src/context/userContext.tsx?");

/***/ }),

/***/ "./src/shared/Header/SearchBlock/SearchBlock.tsx":
/*!*******************************************************!*\
  !*** ./src/shared/Header/SearchBlock/SearchBlock.tsx ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.SearchBlock = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\r\nvar useUserData_1 = __webpack_require__(/*! ../../../hooks/useUserData */ \"./src/hooks/useUserData.ts\");\r\nvar searchblock_scss_1 = __importDefault(__webpack_require__(/*! ./searchblock.scss */ \"./src/shared/Header/SearchBlock/searchblock.scss\"));\r\nvar UserBlock_1 = __webpack_require__(/*! ./UserBlock/UserBlock */ \"./src/shared/Header/SearchBlock/UserBlock/UserBlock.tsx\");\r\nfunction SearchBlock() {\r\n    // const { iconImg, name } = useContext(userContext)\r\n    // const [{iconImg, name}]  = useUserData()\r\n    var data = (0, useUserData_1.useUserData)();\r\n    return (react_1.default.createElement(\"div\", { className: searchblock_scss_1.default.searchBlock },\r\n        react_1.default.createElement(UserBlock_1.UserBlock, { avatarSrc: data[0].iconImg, username: data[0].name })));\r\n}\r\nexports.SearchBlock = SearchBlock;\r\n\n\n//# sourceURL=webpack:///./src/shared/Header/SearchBlock/SearchBlock.tsx?");

/***/ })

})
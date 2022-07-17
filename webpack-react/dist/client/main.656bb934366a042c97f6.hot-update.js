webpackHotUpdate("main",{

/***/ "./src/App.tsx":
/*!*********************!*\
  !*** ./src/App.tsx ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.App = void 0;\r\nvar root_1 = __webpack_require__(/*! react-hot-loader/root */ \"./node_modules/react-hot-loader/root.js\");\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\r\n__webpack_require__(/*! ./main.global.css */ \"./src/main.global.css\");\r\nvar Layout_1 = __webpack_require__(/*! ./shared/Layout/Layout */ \"./src/shared/Layout/Layout.tsx\");\r\nvar Header_1 = __webpack_require__(/*! ./shared/Header/Header */ \"./src/shared/Header/Header.tsx\");\r\nvar Content_1 = __webpack_require__(/*! ./shared/Content/Content */ \"./src/shared/Content/Content.tsx\");\r\nvar CardList_1 = __webpack_require__(/*! ./shared/CardList */ \"./src/shared/CardList/index.ts\");\r\nvar useToken_1 = __webpack_require__(/*! ./hooks/useToken */ \"./src/hooks/useToken.ts\");\r\nvar usePostsData_1 = __webpack_require__(/*! ./hooks/usePostsData */ \"./src/hooks/usePostsData.ts\");\r\nvar redux_1 = __webpack_require__(/*! redux */ \"./node_modules/redux/es/redux.js\");\r\nvar react_redux_1 = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\r\nvar redux_devtools_extension_1 = __webpack_require__(/*! redux-devtools-extension */ \"./node_modules/redux-devtools-extension/index.js\");\r\nvar store_1 = __webpack_require__(/*! ./store/store */ \"./src/store/store.ts\");\r\nvar redux_thunk_1 = __importDefault(__webpack_require__(/*! redux-thunk */ \"./node_modules/redux-thunk/es/index.js\"));\r\nvar store = (0, redux_1.createStore)(store_1.tokenReducer, (0, redux_devtools_extension_1.composeWithDevTools)((0, redux_1.applyMiddleware)(redux_thunk_1.default)));\r\nfunction AppComponent() {\r\n    (0, useToken_1.useToken)();\r\n    (0, usePostsData_1.usePostsData)();\r\n    return (react_1.default.createElement(Layout_1.Layout, null,\r\n        react_1.default.createElement(Header_1.Header, null),\r\n        react_1.default.createElement(Content_1.Content, null,\r\n            react_1.default.createElement(CardList_1.CardList, null))));\r\n}\r\nexports.App = (0, root_1.hot)(function () {\r\n    return react_1.default.createElement(react_redux_1.Provider, { store: store },\r\n        react_1.default.createElement(AppComponent, null));\r\n});\r\n\n\n//# sourceURL=webpack:///./src/App.tsx?");

/***/ }),

/***/ "./src/hooks/usePostsData.ts":
/*!***********************************!*\
  !*** ./src/hooks/usePostsData.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.usePostsData = void 0;\r\nvar react_1 = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\r\nvar axios_1 = __importDefault(__webpack_require__(/*! axios */ \"./node_modules/axios/index.js\"));\r\nvar react_redux_1 = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\r\nvar store_1 = __webpack_require__(/*! ../store/store */ \"./src/store/store.ts\");\r\nfunction usePostsData() {\r\n    var dispatch = (0, react_redux_1.useDispatch)();\r\n    var token = (0, react_redux_1.useSelector)(function (state) { return state.meToken.token; });\r\n    (0, react_1.useEffect)(function () {\r\n        if (token === '')\r\n            return;\r\n        axios_1.default.get('https://oauth.reddit.com/best', {\r\n            headers: { Authorization: \"bearer \".concat(token) }\r\n        })\r\n            .then(function (resp) {\r\n            var posts = resp.data.data.children;\r\n            dispatch((0, store_1.updatePosts)(posts));\r\n        })\r\n            .catch(console.log);\r\n    }, [token]);\r\n}\r\nexports.usePostsData = usePostsData;\r\n\n\n//# sourceURL=webpack:///./src/hooks/usePostsData.ts?");

/***/ }),

/***/ "./src/hooks/useUserData.ts":
/*!**********************************!*\
  !*** ./src/hooks/useUserData.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.useUserData = void 0;\r\nvar react_1 = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\r\nvar axios_1 = __importDefault(__webpack_require__(/*! axios */ \"./node_modules/axios/index.js\"));\r\nvar react_redux_1 = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\r\nfunction useUserData() {\r\n    var _a = (0, react_1.useState)({}), data = _a[0], setData = _a[1];\r\n    var token = (0, react_redux_1.useSelector)(function (state) { return state.meToken.token; });\r\n    (0, react_1.useEffect)(function () {\r\n        if (token === '')\r\n            return;\r\n        axios_1.default.get('https://oauth.reddit.com/api/v1/me', {\r\n            headers: { Authorization: \"bearer \".concat(token) }\r\n        })\r\n            .then(function (resp) {\r\n            var userData = resp.data;\r\n            setData({ name: userData.name, iconImg: userData.icon_img.split('?').shift() });\r\n        })\r\n            .catch(console.log);\r\n    }, [token]);\r\n    return [data];\r\n}\r\nexports.useUserData = useUserData;\r\n\n\n//# sourceURL=webpack:///./src/hooks/useUserData.ts?");

/***/ }),

/***/ "./src/shared/CardList/CardList.tsx":
/*!******************************************!*\
  !*** ./src/shared/CardList/CardList.tsx ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.CardList = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\r\nvar Card_1 = __webpack_require__(/*! ./Card */ \"./src/shared/CardList/Card/index.ts\");\r\nvar cardlist_scss_1 = __importDefault(__webpack_require__(/*! ./cardlist.scss */ \"./src/shared/CardList/cardlist.scss\"));\r\nvar react_redux_1 = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\r\nfunction CardList() {\r\n    var posts = (0, react_redux_1.useSelector)(function (state) { return state.postsData; });\r\n    return (react_1.default.createElement(\"ul\", { className: cardlist_scss_1.default.cardList }, posts.length <= 0\r\n        ? react_1.default.createElement(Card_1.Card, null)\r\n        : posts.map(function (item) { return (react_1.default.createElement(Card_1.Card, { key: item.data.id, image: item.data.url, title: item.data.title, avatar: item.data.thumbnail, author: item.data.author, date: item.data.created, like: item.data.ups, subreddit: item.data.subreddit_name_prefixed, postId: item.data.id })); })));\r\n}\r\nexports.CardList = CardList;\r\n\n\n//# sourceURL=webpack:///./src/shared/CardList/CardList.tsx?");

/***/ }),

/***/ "./src/shared/CommentForm/CommentForm.tsx":
/*!************************************************!*\
  !*** ./src/shared/CommentForm/CommentForm.tsx ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.CommentForm = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\r\nvar react_redux_1 = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\r\nvar store_1 = __webpack_require__(/*! ../../store/store */ \"./src/store/store.ts\");\r\nvar commentform_scss_1 = __importDefault(__webpack_require__(/*! ./commentform.scss */ \"./src/shared/CommentForm/commentform.scss\"));\r\nvar formik_1 = __webpack_require__(/*! formik */ \"./node_modules/formik/dist/formik.esm.js\");\r\nvar yup = __importStar(__webpack_require__(/*! yup */ \"./node_modules/yup/es/index.js\"));\r\nfunction CommentForm() {\r\n    var value = (0, react_redux_1.useSelector)(function (state) { return state.commentText; });\r\n    var dispatch = (0, react_redux_1.useDispatch)();\r\n    function handleSubmitDispatch(event) {\r\n        event.preventDefault();\r\n    }\r\n    function handleChangeDispatch(event) {\r\n        dispatch((0, store_1.updateComment)(event.target.value));\r\n    }\r\n    var userCommentValidation = yup.object().shape({\r\n        textarea: yup.string().min(4, 'Должно быть больше 3-х символов!').required('Обязательное поле!'),\r\n    });\r\n    return (react_1.default.createElement(\"div\", null,\r\n        react_1.default.createElement(formik_1.Formik, { initialValues: { textarea: '' }, validate: function () { }, validationSchema: userCommentValidation, onSubmit: function (values) { console.log(values); } }, function (_a) {\r\n            var values = _a.values, errors = _a.errors, touched = _a.touched, handleChange = _a.handleChange, handleBlur = _a.handleBlur, handleSubmit = _a.handleSubmit, isSubmitting = _a.isSubmitting;\r\n            return (react_1.default.createElement(\"form\", { className: commentform_scss_1.default.form, onSubmit: handleSubmit },\r\n                react_1.default.createElement(\"div\", { className: commentform_scss_1.default.wrapperError }, touched.textarea && errors.textarea && react_1.default.createElement(\"div\", { className: commentform_scss_1.default.error }, errors.textarea)),\r\n                react_1.default.createElement(formik_1.Field, { as: \"textarea\", name: \"textarea\", onChange: handleChange, onBlur: handleBlur, value: values.textarea, className: commentform_scss_1.default.input }),\r\n                react_1.default.createElement(\"div\", null,\r\n                    react_1.default.createElement(\"button\", { type: 'submit', disabled: isSubmitting, className: commentform_scss_1.default.button }, \"\\u041A\\u043E\\u043C\\u0435\\u043D\\u0442\\u0438\\u0440\\u043E\\u0432\\u0430\\u0442\\u044C\"))));\r\n        }))\r\n    // <form className={styles.form} onSubmit={ handleSubmit }>\r\n    //   <textarea className={styles.input} value={value} onChange={handleChange} ></textarea>\r\n    //   <button type='submit' className={styles.button}>Коментировать</button>\r\n    // </form>\r\n    );\r\n}\r\nexports.CommentForm = CommentForm;\r\n\n\n//# sourceURL=webpack:///./src/shared/CommentForm/CommentForm.tsx?");

/***/ }),

/***/ "./src/store/store.ts":
/*!****************************!*\
  !*** ./src/store/store.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __assign = (this && this.__assign) || function () {\r\n    __assign = Object.assign || function(t) {\r\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\r\n            s = arguments[i];\r\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\r\n                t[p] = s[p];\r\n        }\r\n        return t;\r\n    };\r\n    return __assign.apply(this, arguments);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.tokenReducer = exports.updatePosts = exports.updateComment = void 0;\r\nvar action_1 = __webpack_require__(/*! ./token/action */ \"./src/store/token/action.ts\");\r\nvar reducer_1 = __webpack_require__(/*! ./token/reducer */ \"./src/store/token/reducer.ts\");\r\nvar initialState = {\r\n    commentText: 'Your comment should be here',\r\n    postsData: [],\r\n    meToken: {\r\n        loading: false,\r\n        error: '',\r\n        token: '',\r\n    }\r\n};\r\nvar UPDATE_COMMENT = 'UPDATE_COMMENT';\r\nvar UPDATE_POSTS_DATA = 'UPDATE_POSTS_DATA';\r\nvar updateComment = function (text) { return ({\r\n    type: UPDATE_COMMENT,\r\n    text: text,\r\n}); };\r\nexports.updateComment = updateComment;\r\nvar updatePosts = function (posts) { return ({\r\n    type: UPDATE_POSTS_DATA,\r\n    posts: posts,\r\n}); };\r\nexports.updatePosts = updatePosts;\r\nvar tokenReducer = function (state, action) {\r\n    if (state === void 0) { state = initialState; }\r\n    switch (action.type) {\r\n        case UPDATE_COMMENT:\r\n            return __assign(__assign({}, state), { commentText: action.text });\r\n        case UPDATE_POSTS_DATA:\r\n            return __assign(__assign({}, state), { postsData: action.posts });\r\n        case action_1.TOKEN_REQUEST_SUCCESS:\r\n            return __assign(__assign({}, state), { meToken: (0, reducer_1.tokenReducerSuccess)(state.meToken, action) });\r\n        default:\r\n            return state;\r\n    }\r\n};\r\nexports.tokenReducer = tokenReducer;\r\n\n\n//# sourceURL=webpack:///./src/store/store.ts?");

/***/ }),

/***/ "./src/store/token/action.ts":
/*!***********************************!*\
  !*** ./src/store/token/action.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.RequestToken = exports.TokenRequestSuccess = exports.TOKEN_REQUEST_SUCCESS = void 0;\r\n// export const TOKEN_REQUEST = 'TOKEN_REQUEST';\r\n// export type TokenRequestAction = {\r\n//     type: typeof TOKEN_REQUEST,\r\n// }\r\n// export const TokenRequest: ActionCreator<TokenRequestAction> = () => ({\r\n//     type: TOKEN_REQUEST,\r\n// })\r\nexports.TOKEN_REQUEST_SUCCESS = 'TOKEN_REQUEST_SUCCESS';\r\nvar TokenRequestSuccess = function (token) { return ({\r\n    type: exports.TOKEN_REQUEST_SUCCESS,\r\n    token: token,\r\n}); };\r\nexports.TokenRequestSuccess = TokenRequestSuccess;\r\n// export const TOKEN_REQUEST_ERROR = 'TOKEN_REQUEST_ERROR';\r\n// export type TokenRequestErrorAction = {\r\n//     type: typeof TOKEN_REQUEST_ERROR,\r\n//     error: string,\r\n// }\r\n// export const TokenRequestError: ActionCreator<TokenRequestErrorAction> = (error) => ({\r\n//     type: TOKEN_REQUEST_ERROR,\r\n//     error,\r\n// })\r\nvar RequestToken = function () { return function (dispatch) {\r\n    // dispatch(TokenRequest())\r\n    if (window.__token__ !== 'undefined') {\r\n        dispatch((0, exports.TokenRequestSuccess)(window.__token__));\r\n    }\r\n    //  else {\r\n    //     dispatch(TokenRequestError('error'))\r\n    // }\r\n}; };\r\nexports.RequestToken = RequestToken;\r\n\n\n//# sourceURL=webpack:///./src/store/token/action.ts?");

/***/ })

})
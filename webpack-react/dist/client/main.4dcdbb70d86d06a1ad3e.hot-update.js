webpackHotUpdate("main",{

/***/ "./src/shared/CommentForm/CommentForm.tsx":
/*!************************************************!*\
  !*** ./src/shared/CommentForm/CommentForm.tsx ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.CommentForm = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\r\nvar react_redux_1 = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\r\nvar store_1 = __webpack_require__(/*! ../../store/store */ \"./src/store/store.ts\");\r\nvar commentform_scss_1 = __importDefault(__webpack_require__(/*! ./commentform.scss */ \"./src/shared/CommentForm/commentform.scss\"));\r\nvar formik_1 = __webpack_require__(/*! formik */ \"./node_modules/formik/dist/formik.esm.js\");\r\nfunction CommentForm() {\r\n    var value = (0, react_redux_1.useSelector)(function (state) { return state.commentText; });\r\n    var dispatch = (0, react_redux_1.useDispatch)();\r\n    function handleSubmitDispatch(event) {\r\n        event.preventDefault();\r\n        console.log(value);\r\n    }\r\n    function handleChangeDispatch(event) {\r\n        dispatch((0, store_1.updateComment)(event.target.value));\r\n    }\r\n    // const userCommentValidation = yup.object().shape({\r\n    //   textarea: yup.string().min(4, 'Должно быть больше 3-х символов!').required('Обязательное поле!'),\r\n    // })\r\n    return (react_1.default.createElement(\"div\", null,\r\n        react_1.default.createElement(formik_1.Formik, { initialValues: { textarea: \"\" }, \r\n            // validationSchema={userCommentValidation}\r\n            validateon: function (values) {\r\n                debugger;\r\n                var errors = {};\r\n                if (values.textarea.length <= 3) {\r\n                    errors.textarea = 'Должно быть больше 3-х символов!';\r\n                }\r\n                return errors;\r\n            }, onSubmit: function (values) { console.log(values); } }, function (_a) {\r\n            var values = _a.values, errors = _a.errors, touched = _a.touched, handleBlur = _a.handleBlur, handleChange = _a.handleChange, isSubmitting = _a.isSubmitting;\r\n            return (react_1.default.createElement(\"form\", { className: commentform_scss_1.default.form, onSubmit: handleSubmitDispatch },\r\n                react_1.default.createElement(\"div\", { className: commentform_scss_1.default.wrapperError }, touched.textarea && errors.textarea && react_1.default.createElement(\"div\", { className: commentform_scss_1.default.error }, errors.textarea)),\r\n                react_1.default.createElement(formik_1.Field, { as: \"textarea\", name: \"textarea\", onChange: handleChange, onBlur: handleBlur, value: values.textarea, className: commentform_scss_1.default.input }),\r\n                react_1.default.createElement(\"div\", null,\r\n                    react_1.default.createElement(\"button\", { type: 'submit', disabled: isSubmitting, className: commentform_scss_1.default.button }, \"\\u041A\\u043E\\u043C\\u0435\\u043D\\u0442\\u0438\\u0440\\u043E\\u0432\\u0430\\u0442\\u044C\"))));\r\n        }))\r\n    // <form className={styles.form} onSubmit={ handleSubmit }>\r\n    //   <textarea className={styles.input} value={value} onChange={handleChange} ></textarea>\r\n    //   <button type='submit' className={styles.button}>Коментировать</button>\r\n    // </form>\r\n    );\r\n}\r\nexports.CommentForm = CommentForm;\r\n\n\n//# sourceURL=webpack:///./src/shared/CommentForm/CommentForm.tsx?");

/***/ }),

/***/ "./src/shared/CommentForm/index.ts":
/*!*****************************************!*\
  !*** ./src/shared/CommentForm/index.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./CommentForm */ \"./src/shared/CommentForm/CommentForm.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/CommentForm/index.ts?");

/***/ })

})
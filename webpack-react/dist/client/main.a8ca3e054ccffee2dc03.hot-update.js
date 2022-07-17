webpackHotUpdate("main",{

/***/ "./src/shared/CommentForm/CommentForm.tsx":
/*!************************************************!*\
  !*** ./src/shared/CommentForm/CommentForm.tsx ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.CommentForm = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\r\nvar react_redux_1 = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\r\nvar store_1 = __webpack_require__(/*! ../../store/store */ \"./src/store/store.ts\");\r\nvar commentform_scss_1 = __importDefault(__webpack_require__(/*! ./commentform.scss */ \"./src/shared/CommentForm/commentform.scss\"));\r\nvar formik_1 = __webpack_require__(/*! formik */ \"./node_modules/formik/dist/formik.esm.js\");\r\nvar yup = __importStar(__webpack_require__(/*! yup */ \"./node_modules/yup/es/index.js\"));\r\nfunction CommentForm() {\r\n    var value = (0, react_redux_1.useSelector)(function (state) { return state.commentText; });\r\n    var dispatch = (0, react_redux_1.useDispatch)();\r\n    function handleSubmitDispatch(event) {\r\n        event.preventDefault();\r\n    }\r\n    function handleChangeDispatch(event) {\r\n        dispatch((0, store_1.updateComment)(event.target.value));\r\n    }\r\n    var userCommentValidation = yup.object().shape({\r\n        textarea: yup.string().min(3, 'Должно быть больше 3-х символов!').required('Обязательное поле!'),\r\n    });\r\n    return (react_1.default.createElement(\"div\", null,\r\n        react_1.default.createElement(formik_1.Formik, { initialValues: { textarea: '' }, validate: function () { }, validationSchema: userCommentValidation, onSubmit: function (values) { console.log(values); } }, function (_a) {\r\n            var values = _a.values, errors = _a.errors, touched = _a.touched, handleChange = _a.handleChange, handleBlur = _a.handleBlur, handleSubmit = _a.handleSubmit, isSubmitting = _a.isSubmitting;\r\n            return (react_1.default.createElement(\"form\", { className: commentform_scss_1.default.form, onSubmit: handleSubmit },\r\n                react_1.default.createElement(formik_1.Field, { as: \"textarea\", name: \"textarea\", onChange: handleChange, onBlur: handleBlur, value: values.textarea, className: commentform_scss_1.default.input }),\r\n                react_1.default.createElement(\"button\", { type: 'submit', disabled: isSubmitting, className: commentform_scss_1.default.button }, \"\\u041A\\u043E\\u043C\\u0435\\u043D\\u0442\\u0438\\u0440\\u043E\\u0432\\u0430\\u0442\\u044C\"))\r\n                ,\r\n                    react_1.default.createElement(\"div\", null, touched.textarea && errors.textarea && react_1.default.createElement(\"div\", null, errors.textarea)));\r\n        }))\r\n    // <form className={styles.form} onSubmit={ handleSubmit }>\r\n    //   <textarea className={styles.input} value={value} onChange={handleChange} ></textarea>\r\n    //   <button type='submit' className={styles.button}>Коментировать</button>\r\n    // </form>\r\n    );\r\n}\r\nexports.CommentForm = CommentForm;\r\n\n\n//# sourceURL=webpack:///./src/shared/CommentForm/CommentForm.tsx?");

/***/ })

})
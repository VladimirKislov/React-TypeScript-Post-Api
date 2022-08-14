webpackHotUpdate("main",{

/***/ "./src/shared/CommentForm/CommentForm.tsx":
/*!************************************************!*\
  !*** ./src/shared/CommentForm/CommentForm.tsx ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.CommentForm = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\r\nvar commentform_scss_1 = __importDefault(__webpack_require__(/*! ./commentform.scss */ \"./src/shared/CommentForm/commentform.scss\"));\r\nvar easy_peasy_1 = __webpack_require__(/*! easy-peasy */ \"./node_modules/easy-peasy/dist/index.js\");\r\nfunction CommentForm() {\r\n    // const value = useSelector<RootState, string>(state => state.commentText)\r\n    // const dispatch = useDispatch()\r\n    // function handleSubmitDispatch(event: FormEvent) {\r\n    //   event.preventDefault()\r\n    // }\r\n    // function handleChangeDispatch(event: ChangeEvent<HTMLTextAreaElement>) {\r\n    //   dispatch(updateComment(event.target.value))\r\n    // }\r\n    var value = (0, easy_peasy_1.useStoreState)(function (state) { return state.values; });\r\n    var add = (0, easy_peasy_1.useStoreActions)(function (actions) { return actions.add; });\r\n    var onChange = function (event) {\r\n        ad;\r\n    };\r\n    return (react_1.default.createElement(\"div\", null,\r\n        react_1.default.createElement(\"form\", { action: \"\" },\r\n            react_1.default.createElement(\"textarea\", { className: commentform_scss_1.default.input, value: value, onChange: onChange }),\r\n            react_1.default.createElement(\"button\", { className: commentform_scss_1.default.button, disabled: true, type: 'submit' }, \"\\u041A\\u043E\\u043C\\u0435\\u043D\\u0442\\u0438\\u0440\\u043E\\u0432\\u0430\\u0442\\u044C\")))\r\n    // <div>\r\n    //   <Formik\r\n    //     initialValues={{ textarea: \"\" }}\r\n    //     validate={(values) => {\r\n    //       const errors: any = {};\r\n    //       if (value.length > 0 && value.length <= 3) {\r\n    //         errors.textarea = 'Должно быть больше 3-х символов!';\r\n    //       } else if (value.length === 0) {\r\n    //         errors.textarea = 'Поле не должно быть Пустое!';\r\n    //       }\r\n    //       return errors;\r\n    //     }}\r\n    //     onSubmit={(values) => { console.log(values) }}\r\n    //   >\r\n    //     {({ values, errors, touched, handleBlur, isSubmitting, }) => (\r\n    //       <form className={styles.form} onSubmit={handleSubmitDispatch}>\r\n    //         <div className={styles.wrapperError}>{touched.textarea && errors.textarea && <div className={styles.error}>{errors.textarea}</div>}</div>\r\n    //         <Field\r\n    //           as=\"textarea\"\r\n    //           name=\"textarea\"\r\n    //           onChange={handleChangeDispatch}\r\n    //           onBlur={handleBlur}\r\n    //           value={value}\r\n    //           className={styles.input}\r\n    //         />\r\n    //         <div>\r\n    //           <button\r\n    //             type='submit'\r\n    //             disabled={isSubmitting}\r\n    //             className={styles.button}\r\n    //           >Коментировать</button>\r\n    //         </div>\r\n    //       </form>\r\n    //     )}\r\n    //   </Formik>\r\n    // </div>\r\n    );\r\n}\r\nexports.CommentForm = CommentForm;\r\n\n\n//# sourceURL=webpack:///./src/shared/CommentForm/CommentForm.tsx?");

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
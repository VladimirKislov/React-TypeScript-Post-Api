webpackHotUpdate("main",{

/***/ "./src/shared/Header/ThreadTitle/ThreadTitle.tsx":
/*!*******************************************************!*\
  !*** ./src/shared/Header/ThreadTitle/ThreadTitle.tsx ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nvar __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {\r\n    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {\r\n        if (ar || !(i in from)) {\r\n            if (!ar) ar = Array.prototype.slice.call(from, 0, i);\r\n            ar[i] = from[i];\r\n        }\r\n    }\r\n    return to.concat(ar || Array.prototype.slice.call(from));\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.ThreadTitle = void 0;\r\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\r\nvar recoil_1 = __webpack_require__(/*! recoil */ \"./node_modules/recoil/es/index.js\");\r\nvar threadtitle_scss_1 = __importDefault(__webpack_require__(/*! ./threadtitle.scss */ \"./src/shared/Header/ThreadTitle/threadtitle.scss\"));\r\nvar namesState = (0, recoil_1.atom)({\r\n    key: 'namesState',\r\n    default: ['Ella', 'Chris', 'Paul'],\r\n});\r\nvar setNamesState = (0, recoil_1.useSetRecoilState)(namesState);\r\nfunction ThreadTitle(setNamesState) {\r\n    // const textValueState = atom({\r\n    //   key: 'textStateQ',\r\n    //   default: 'be here and now!'\r\n    // });\r\n    // const onChange = (event: { target: { value: string | ((currVal: string) => string); }; }) => {\r\n    //   setTextValue(event.target.value);\r\n    // };\r\n    // const [textValue, setTextValue] = useRecoilState(textValueState);\r\n    var _a = (0, react_1.useState)(''), name = _a[0], setName = _a[1];\r\n    return (react_1.default.createElement(\"div\", null,\r\n        react_1.default.createElement(\"h1\", { className: threadtitle_scss_1.default.threadTitle }, \"Header\"),\r\n        react_1.default.createElement(\"input\", { type: \"text\", value: name, onChange: function (e) { return setName(e.target.value); } }),\r\n        react_1.default.createElement(\"button\", { onClick: function () { return setNamesState(function (names) { return __spreadArray(__spreadArray([], names, true), [name], false); }); } }, \"Add Name\")));\r\n}\r\nexports.ThreadTitle = ThreadTitle;\r\nThreadTitle;\r\n\n\n//# sourceURL=webpack:///./src/shared/Header/ThreadTitle/ThreadTitle.tsx?");

/***/ })

})
webpackHotUpdate("main",{

/***/ "./src/shared/CardList/CardList.tsx":
/*!******************************************!*\
  !*** ./src/shared/CardList/CardList.tsx ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.CardList = void 0;\r\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\r\nvar Card_1 = __webpack_require__(/*! ./Card */ \"./src/shared/CardList/Card/index.ts\");\r\nvar cardlist_scss_1 = __importDefault(__webpack_require__(/*! ./cardlist.scss */ \"./src/shared/CardList/cardlist.scss\"));\r\nvar react_redux_1 = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\r\nvar postAction_1 = __webpack_require__(/*! ../../store/post/postAction */ \"./src/store/post/postAction.ts\");\r\nvar generateRandomIndex_1 = __webpack_require__(/*! ../../utils/react/generateRandomIndex */ \"./src/utils/react/generateRandomIndex.tsx\");\r\nfunction CardList() {\r\n    var posts = (0, react_redux_1.useSelector)(function (state) { return state.post.post; });\r\n    var after = (0, react_redux_1.useSelector)(function (state) { return state.after; });\r\n    var loading = (0, react_redux_1.useSelector)(function (state) { return state.post.loading; });\r\n    var errorLoading = (0, react_redux_1.useSelector)(function (state) { return state.post.error; });\r\n    var token = (0, react_redux_1.useSelector)(function (state) { return state.token.token; });\r\n    var bottomOfList = (0, react_1.useRef)(null);\r\n    var dispatch = (0, react_redux_1.useDispatch)();\r\n    var _a = (0, react_1.useState)([]), data = _a[0], setData = _a[1];\r\n    var _b = (0, react_1.useState)(''), nextAfter = _b[0], setNextAfter = _b[1];\r\n    var _c = (0, react_1.useState)(0), count = _c[0], setCount = _c[1];\r\n    (0, react_1.useEffect)(function () {\r\n        if (posts.length === 0)\r\n            return;\r\n        setNextAfter(after);\r\n        setData(function (prevChildren) { return prevChildren.concat.apply(prevChildren, posts); });\r\n    }, [posts]);\r\n    function handleClick() {\r\n        dispatch((0, postAction_1.PostRequestAsync)(nextAfter));\r\n        setCount(function (prevCount) { return prevCount + 1; });\r\n    }\r\n    (0, react_1.useEffect)(function () {\r\n        if (token === '')\r\n            return;\r\n        function load() {\r\n            dispatch((0, postAction_1.PostRequestAsync)(nextAfter));\r\n        }\r\n        var observer = new IntersectionObserver(function (entries) {\r\n            if (entries[0].isIntersecting) {\r\n                load();\r\n                setCount(function (prevCount) { return prevCount + 1; });\r\n            }\r\n        }, {\r\n            threshold: 0.5,\r\n        });\r\n        if (bottomOfList.current)\r\n            observer.observe(bottomOfList.current);\r\n        return function () {\r\n            if (bottomOfList.current)\r\n                observer.unobserve(bottomOfList.current);\r\n        };\r\n    }, [bottomOfList.current, nextAfter]);\r\n    return (react_1.default.createElement(\"ul\", { className: cardlist_scss_1.default.cardList },\r\n        posts.length === 0 && !loading && !errorLoading && (react_1.default.createElement(\"div\", { className: cardlist_scss_1.default.post }, 'Нет ни одного поста')),\r\n        data.map(function (item) { return (react_1.default.createElement(Card_1.Card\r\n        // key={item.data.id}\r\n        , { \r\n            // key={item.data.id}\r\n            key: (0, generateRandomIndex_1.generateRandomString)(), image: item.data.url, title: item.data.title, avatar: item.data.thumbnail, author: item.data.author, date: item.data.created, like: item.data.ups, subreddit: item.data.subreddit_name_prefixed, postId: item.data.id, loading: loading })); }),\r\n        loading && (react_1.default.createElement(\"div\", { className: cardlist_scss_1.default.loading }, 'Загрузка...')),\r\n        errorLoading && (react_1.default.createElement(\"div\", { className: cardlist_scss_1.default.errorLoading }, errorLoading)),\r\n        count !== 0 && count % 2 === 0 && !loading && !errorLoading\r\n            ? (react_1.default.createElement(\"button\", { className: cardlist_scss_1.default.button, onClick: function () { return handleClick(); } }, \"Next\"))\r\n            : (react_1.default.createElement(\"div\", { ref: bottomOfList }))));\r\n}\r\nexports.CardList = CardList;\r\n\n\n//# sourceURL=webpack:///./src/shared/CardList/CardList.tsx?");

/***/ })

})
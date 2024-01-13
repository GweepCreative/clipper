"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/clip/page",{

/***/ "(app-pages-browser)/./src/app/clip/page.js":
/*!******************************!*\
  !*** ./src/app/clip/page.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Clip; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_navbar_navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/navbar/navbar */ \"(app-pages-browser)/./src/components/navbar/navbar.jsx\");\n/* harmony import */ var _component_download__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./component/download */ \"(app-pages-browser)/./src/app/clip/component/download.jsx\");\n/* harmony import */ var _component_detail__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./component/detail */ \"(app-pages-browser)/./src/app/clip/component/detail.jsx\");\n/* harmony import */ var _components_trend_trend__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/trend/trend */ \"(app-pages-browser)/./src/components/trend/trend.jsx\");\n/* harmony import */ var twitcher__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! twitcher */ \"(app-pages-browser)/./node_modules/twitcher/index.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_7__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst twitch = new twitcher__WEBPACK_IMPORTED_MODULE_6__[\"default\"]({\n    client_id: \"v6ohqfkvqli7puf7zfrib670q7fxay\",\n    token: \"ro46w7kbf3l7afbox3562oyodg2lmt\",\n    client_secret: \"k1xcirs5mt92rd0w3282hygscwk7hu\"\n});\nfunction Clip() {\n    _s();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_7__.useRouter)();\n    const searchParams = (0,next_navigation__WEBPACK_IMPORTED_MODULE_7__.useSearchParams)();\n    const clipUrl = searchParams.get(\"clipUrl\");\n    if (!clipUrl || clipUrl.length < 24) return router.push(\"/\");\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [gamedata, setGameData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        getClip();\n    }, []);\n    async function getClip() {\n        if (!clipUrl.includes(\"https://clips.twitch.tv/\") && clipUrl.length < 28) {\n            setData(null);\n            setLoading(false);\n            setError(true);\n            return;\n        }\n        if (!clipUrl.includes(\"https://www.twitch.tv/\") && clipUrl.length < 26) {\n            setData(null);\n            setLoading(false);\n            setError(true);\n            return;\n        }\n        const twdata = await twitch.getClip(clipUrl);\n        console.log(twdata);\n        if (!twdata.success || twdata.error) {\n            setData(null);\n            setLoading(false);\n            setError(twdata.error);\n            return;\n        }\n        const gameData = await twitch.getGameById(twdata.clip.game_id);\n        setData(twdata);\n        setGameData(gameData);\n        setLoading(false);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_navbar_navbar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"E:\\\\tclip-main\\\\src\\\\app\\\\clip\\\\page.js\",\n                lineNumber: 57,\n                columnNumber: 7\n            }, this),\n            loading && !data ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"justify-center items-center flex\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"font-bold text-4xl\",\n                    children: \"Loading...\"\n                }, void 0, false, {\n                    fileName: \"E:\\\\tclip-main\\\\src\\\\app\\\\clip\\\\page.js\",\n                    lineNumber: 60,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"E:\\\\tclip-main\\\\src\\\\app\\\\clip\\\\page.js\",\n                lineNumber: 59,\n                columnNumber: 9\n            }, this) : error ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: [\n                    \"Error: \",\n                    error\n                ]\n            }, void 0, true) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_component_download__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        clipData: data.clip\n                    }, void 0, false, {\n                        fileName: \"E:\\\\tclip-main\\\\src\\\\app\\\\clip\\\\page.js\",\n                        lineNumber: 66,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_component_detail__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        clipData: data,\n                        gameData: gamedata\n                    }, void 0, false, {\n                        fileName: \"E:\\\\tclip-main\\\\src\\\\app\\\\clip\\\\page.js\",\n                        lineNumber: 67,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true)\n        ]\n    }, void 0, true);\n}\n_s(Clip, \"a2kOFG1jUKACefE7b8o/f8FLycE=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_7__.useRouter,\n        next_navigation__WEBPACK_IMPORTED_MODULE_7__.useSearchParams\n    ];\n});\n_c = Clip;\nvar _c;\n$RefreshReg$(_c, \"Clip\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY2xpcC9wYWdlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDNEM7QUFDSTtBQUNKO0FBQ0o7QUFDSztBQUNiO0FBQzZCO0FBQzdELE1BQU1TLFNBQVMsSUFBSUgsZ0RBQVFBLENBQUM7SUFDMUJJLFdBQVdDLGdDQUE0QjtJQUN2Q0csT0FBT0gsZ0NBQWdDO0lBQ3ZDSyxlQUFlTCxnQ0FBNEI7QUFDN0M7QUFDZSxTQUFTTzs7SUFDdEIsTUFBTUMsU0FBU1osMERBQVNBO0lBQ3hCLE1BQU1hLGVBQWVaLGdFQUFlQTtJQUNwQyxNQUFNYSxVQUFVRCxhQUFhRSxHQUFHLENBQUM7SUFDakMsSUFBSSxDQUFDRCxXQUFXQSxRQUFRRSxNQUFNLEdBQUcsSUFBSSxPQUFPSixPQUFPSyxJQUFJLENBQUM7SUFDeEQsTUFBTSxDQUFDQyxTQUFTQyxXQUFXLEdBQUd6QiwrQ0FBUUEsQ0FBQztJQUN2QyxNQUFNLENBQUMwQixPQUFPQyxTQUFTLEdBQUczQiwrQ0FBUUEsQ0FBQztJQUNuQyxNQUFNLENBQUM0QixNQUFNQyxRQUFRLEdBQUc3QiwrQ0FBUUEsQ0FBQztJQUNqQyxNQUFNLENBQUM4QixVQUFVQyxZQUFZLEdBQUcvQiwrQ0FBUUEsQ0FBQztJQUN6Q0QsZ0RBQVNBLENBQUM7UUFDUmlDO0lBQ0YsR0FBRyxFQUFFO0lBQ0wsZUFBZUE7UUFFYixJQUFJLENBQUNaLFFBQVFhLFFBQVEsQ0FBQywrQkFBK0JiLFFBQVFFLE1BQU0sR0FBRyxJQUFJO1lBQ3hFTyxRQUFRO1lBQ1JKLFdBQVc7WUFDWEUsU0FBUztZQUNUO1FBQ0Y7UUFDQSxJQUFJLENBQUNQLFFBQVFhLFFBQVEsQ0FBQyw2QkFBNkJiLFFBQVFFLE1BQU0sR0FBRyxJQUFJO1lBQ3RFTyxRQUFRO1lBQ1JKLFdBQVc7WUFDWEUsU0FBUztZQUNUO1FBQ0Y7UUFDQSxNQUFNTyxTQUFTLE1BQU0xQixPQUFPd0IsT0FBTyxDQUFDWjtRQUVwQ2UsUUFBUUMsR0FBRyxDQUFDRjtRQUVaLElBQUksQ0FBQ0EsT0FBT0csT0FBTyxJQUFJSCxPQUFPUixLQUFLLEVBQUU7WUFDbkNHLFFBQVE7WUFDUkosV0FBVztZQUNYRSxTQUFTTyxPQUFPUixLQUFLO1lBQ3JCO1FBQ0Y7UUFDQSxNQUFNWSxXQUFXLE1BQU05QixPQUFPK0IsV0FBVyxDQUFDTCxPQUFPTSxJQUFJLENBQUNDLE9BQU87UUFDN0RaLFFBQVFLO1FBQ1JILFlBQVlPO1FBQ1piLFdBQVc7SUFDYjtJQUNBLHFCQUNFOzswQkFDRSw4REFBQ3hCLGlFQUFNQTs7Ozs7WUFDTnVCLFdBQVcsQ0FBQ0kscUJBQ1gsOERBQUNjO2dCQUFJQyxXQUFVOzBCQUNiLDRFQUFDQztvQkFBR0QsV0FBVTs4QkFBcUI7Ozs7Ozs7Ozs7dUJBRW5DakIsc0JBQ0Y7O29CQUFFO29CQUFRQTs7NkNBRVY7O2tDQUNFLDhEQUFDeEIsMkRBQVFBO3dCQUFDMkMsVUFBVWpCLEtBQUtZLElBQUk7Ozs7OztrQ0FDN0IsOERBQUNyQyx5REFBTUE7d0JBQUMwQyxVQUFVakI7d0JBQU1VLFVBQVVSOzs7Ozs7Ozs7O0FBTzVDO0dBNUR3QmI7O1FBQ1BYLHNEQUFTQTtRQUNIQyw0REFBZUE7OztLQUZkVSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL2NsaXAvcGFnZS5qcz9lY2NhIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBOYXZiYXIgZnJvbSBcIkAvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyXCI7XHJcbmltcG9ydCBEb3dubG9hZCBmcm9tIFwiLi9jb21wb25lbnQvZG93bmxvYWRcIjtcclxuaW1wb3J0IERldGFpbCBmcm9tIFwiLi9jb21wb25lbnQvZGV0YWlsXCI7XHJcbmltcG9ydCBUcmVuZCBmcm9tIFwiQC9jb21wb25lbnRzL3RyZW5kL3RyZW5kXCI7XHJcbmltcG9ydCBUd2l0Y2hlciBmcm9tIFwidHdpdGNoZXJcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyLCB1c2VTZWFyY2hQYXJhbXMgfSBmcm9tIFwibmV4dC9uYXZpZ2F0aW9uXCI7XHJcbmNvbnN0IHR3aXRjaCA9IG5ldyBUd2l0Y2hlcih7XHJcbiAgY2xpZW50X2lkOiBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19UV0lELFxyXG4gIHRva2VuOiBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19UV0NMSUVOVCxcclxuICBjbGllbnRfc2VjcmV0OiBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19QQVNTLFxyXG59KTtcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2xpcCgpIHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCBzZWFyY2hQYXJhbXMgPSB1c2VTZWFyY2hQYXJhbXMoKTtcclxuICBjb25zdCBjbGlwVXJsID0gc2VhcmNoUGFyYW1zLmdldChcImNsaXBVcmxcIik7XHJcbiAgaWYgKCFjbGlwVXJsIHx8IGNsaXBVcmwubGVuZ3RoIDwgMjQpIHJldHVybiByb3V0ZXIucHVzaChcIi9cIik7XHJcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XHJcbiAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBbZ2FtZWRhdGEsIHNldEdhbWVEYXRhXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBnZXRDbGlwKCk7XHJcbiAgfSwgW10pO1xyXG4gIGFzeW5jIGZ1bmN0aW9uIGdldENsaXAoKSB7XHJcbiAgIFxyXG4gICAgaWYgKCFjbGlwVXJsLmluY2x1ZGVzKFwiaHR0cHM6Ly9jbGlwcy50d2l0Y2gudHYvXCIpICYmIGNsaXBVcmwubGVuZ3RoIDwgMjgpIHtcclxuICAgICAgc2V0RGF0YShudWxsKTtcclxuICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICAgIHNldEVycm9yKHRydWUpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBpZiAoIWNsaXBVcmwuaW5jbHVkZXMoXCJodHRwczovL3d3dy50d2l0Y2gudHYvXCIpICYmIGNsaXBVcmwubGVuZ3RoIDwgMjYpIHtcclxuICAgICAgc2V0RGF0YShudWxsKTtcclxuICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICAgIHNldEVycm9yKHRydWUpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBjb25zdCB0d2RhdGEgPSBhd2FpdCB0d2l0Y2guZ2V0Q2xpcChjbGlwVXJsKTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyh0d2RhdGEpO1xyXG5cclxuICAgIGlmICghdHdkYXRhLnN1Y2Nlc3MgfHwgdHdkYXRhLmVycm9yKSB7XHJcbiAgICAgIHNldERhdGEobnVsbCk7XHJcbiAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgICBzZXRFcnJvcih0d2RhdGEuZXJyb3IpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBjb25zdCBnYW1lRGF0YSA9IGF3YWl0IHR3aXRjaC5nZXRHYW1lQnlJZCh0d2RhdGEuY2xpcC5nYW1lX2lkKTtcclxuICAgIHNldERhdGEodHdkYXRhKTtcclxuICAgIHNldEdhbWVEYXRhKGdhbWVEYXRhKTtcclxuICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gIH1cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPE5hdmJhciAvPlxyXG4gICAgICB7bG9hZGluZyAmJiAhZGF0YSA/IChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBmbGV4XCI+XHJcbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiZm9udC1ib2xkIHRleHQtNHhsXCI+TG9hZGluZy4uLjwvaDE+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICkgOiBlcnJvciA/IChcclxuICAgICAgICA8PkVycm9yOiB7ZXJyb3J9PC8+XHJcbiAgICAgICkgOiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgIDxEb3dubG9hZCBjbGlwRGF0YT17ZGF0YS5jbGlwfSAvPlxyXG4gICAgICAgICAgPERldGFpbCBjbGlwRGF0YT17ZGF0YX0gZ2FtZURhdGE9e2dhbWVkYXRhfSAvPlxyXG4gICAgICAgIDwvPlxyXG4gICAgICApfVxyXG5cclxuICAgICAgey8qIDxUcmVuZCAvPiAqL31cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiTmF2YmFyIiwiRG93bmxvYWQiLCJEZXRhaWwiLCJUcmVuZCIsIlR3aXRjaGVyIiwidXNlUm91dGVyIiwidXNlU2VhcmNoUGFyYW1zIiwidHdpdGNoIiwiY2xpZW50X2lkIiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX1RXSUQiLCJ0b2tlbiIsIk5FWFRfUFVCTElDX1RXQ0xJRU5UIiwiY2xpZW50X3NlY3JldCIsIk5FWFRfUFVCTElDX1BBU1MiLCJDbGlwIiwicm91dGVyIiwic2VhcmNoUGFyYW1zIiwiY2xpcFVybCIsImdldCIsImxlbmd0aCIsInB1c2giLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsImVycm9yIiwic2V0RXJyb3IiLCJkYXRhIiwic2V0RGF0YSIsImdhbWVkYXRhIiwic2V0R2FtZURhdGEiLCJnZXRDbGlwIiwiaW5jbHVkZXMiLCJ0d2RhdGEiLCJjb25zb2xlIiwibG9nIiwic3VjY2VzcyIsImdhbWVEYXRhIiwiZ2V0R2FtZUJ5SWQiLCJjbGlwIiwiZ2FtZV9pZCIsImRpdiIsImNsYXNzTmFtZSIsImgxIiwiY2xpcERhdGEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/clip/page.js\n"));

/***/ })

});
"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _component_ProductTable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/component/ProductTable */ \"./src/component/ProductTable.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _barrel_optimize_names_Modal_antd__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! __barrel_optimize__?names=Modal!=!antd */ \"__barrel_optimize__?names=Modal!=!./node_modules/antd/es/index.js\");\n/* harmony import */ var _component_AddForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/component/AddForm */ \"./src/component/AddForm.tsx\");\n/* harmony import */ var _store_hooks_hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/store/hooks/hooks */ \"./src/store/hooks/hooks.ts\");\n/* harmony import */ var _store_hooks_useActions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/store/hooks/useActions */ \"./src/store/hooks/useActions.ts\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_6__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nfunction Home() {\n    _s();\n    const open = (0,_store_hooks_hooks__WEBPACK_IMPORTED_MODULE_4__.useAppSelector)((state)=>state.uiState.formModal);\n    const { toggleFormModal, setData } = (0,_store_hooks_useActions__WEBPACK_IMPORTED_MODULE_5__.useActions)();\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        const data = localStorage.getItem(\"fahm-data\");\n        if (data && data !== undefined) {\n            setData(JSON.parse(data).data);\n        }\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_6___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                    children: \"Crud in Next.js with Redux\"\n                }, void 0, false, {\n                    fileName: \"/home/hardik/Prakash/next-to-do/new2/src/pages/index.tsx\",\n                    lineNumber: 26,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/hardik/Prakash/next-to-do/new2/src/pages/index.tsx\",\n                lineNumber: 25,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: \"flex w-full flex-col   items-center gap-4 text-center p-1\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        className: \"text-2xl font-semibold text-purple-800 mb-2 mt-1 underline underline-offset-2  \",\n                        children: \"Crud in Next js\"\n                    }, void 0, false, {\n                        fileName: \"/home/hardik/Prakash/next-to-do/new2/src/pages/index.tsx\",\n                        lineNumber: 29,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \" w-[90%] h-auto items-center flex flex-col   gap-5 \",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex w-full flex-row justify-between mb-3 mt-4 item-center\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                        className: \"text-xl font-semibold text-blue-800 text-center flex justify-center items-center \",\n                                        children: [\n                                            \"Your Product Table\",\n                                            \" \"\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/home/hardik/Prakash/next-to-do/new2/src/pages/index.tsx\",\n                                        lineNumber: 35,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        className: \"button\",\n                                        onClick: ()=>toggleFormModal(),\n                                        children: \"Add Product\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/hardik/Prakash/next-to-do/new2/src/pages/index.tsx\",\n                                        lineNumber: 38,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/hardik/Prakash/next-to-do/new2/src/pages/index.tsx\",\n                                lineNumber: 34,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"w-full\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_component_ProductTable__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                                    fileName: \"/home/hardik/Prakash/next-to-do/new2/src/pages/index.tsx\",\n                                    lineNumber: 43,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/home/hardik/Prakash/next-to-do/new2/src/pages/index.tsx\",\n                                lineNumber: 42,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/hardik/Prakash/next-to-do/new2/src/pages/index.tsx\",\n                        lineNumber: 33,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/hardik/Prakash/next-to-do/new2/src/pages/index.tsx\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, this),\n            open && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Modal_antd__WEBPACK_IMPORTED_MODULE_7__.Modal, {\n                title: \"Add Product\",\n                open: open,\n                cancelButtonProps: {\n                    style: {\n                        display: \"none\"\n                    }\n                },\n                okButtonProps: {\n                    style: {\n                        display: \"none\"\n                    }\n                },\n                onCancel: ()=>toggleFormModal(),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_component_AddForm__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                    fileName: \"/home/hardik/Prakash/next-to-do/new2/src/pages/index.tsx\",\n                    lineNumber: 55,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/hardik/Prakash/next-to-do/new2/src/pages/index.tsx\",\n                lineNumber: 49,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Home, \"eiS5ZQ1CZCg/NN8mOQR8n5DJNqw=\", false, function() {\n    return [\n        _store_hooks_hooks__WEBPACK_IMPORTED_MODULE_4__.useAppSelector,\n        _store_hooks_useActions__WEBPACK_IMPORTED_MODULE_5__.useActions\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXgudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBVU1BO0FBUjhDO0FBQ1I7QUFDZjtBQUNhO0FBQ1c7QUFDQztBQUN6QjtBQUlkLFNBQVNROztJQUN0QixNQUFNQyxPQUFPSixrRUFBY0EsQ0FBQyxDQUFDSyxRQUFVQSxNQUFNQyxPQUFPLENBQUNDLFNBQVM7SUFDOUQsTUFBTSxFQUFFQyxlQUFlLEVBQUVDLE9BQU8sRUFBRSxHQUFHUixtRUFBVUE7SUFFL0NKLGdEQUFTQSxDQUFDO1FBQ1IsTUFBTWEsT0FBT0MsYUFBYUMsT0FBTyxDQUFDO1FBQ2xDLElBQUlGLFFBQVFBLFNBQVNHLFdBQVc7WUFDOUJKLFFBQVFLLEtBQUtDLEtBQUssQ0FBQ0wsTUFBTUEsSUFBSTtRQUMvQjtJQUNGLEdBQUcsRUFBRTtJQUNMLHFCQUNFOzswQkFDRSw4REFBQ1Isa0RBQUlBOzBCQUNILDRFQUFDYzs4QkFBTTs7Ozs7Ozs7Ozs7MEJBRVQsOERBQUNDO2dCQUFLQyxXQUFVOztrQ0FDZCw4REFBQ0M7d0JBQUdELFdBQVU7a0NBQWtGOzs7Ozs7a0NBSWhHLDhEQUFDRTt3QkFBSUYsV0FBVTs7MENBQ2IsOERBQUNFO2dDQUFJRixXQUFVOztrREFDYiw4REFBQ0M7d0NBQUdELFdBQVU7OzRDQUFvRjs0Q0FDN0U7Ozs7Ozs7a0RBRXJCLDhEQUFDRzt3Q0FBT0gsV0FBVTt3Q0FBU0ksU0FBUyxJQUFNZDtrREFBbUI7Ozs7Ozs7Ozs7OzswQ0FJL0QsOERBQUNZO2dDQUFJRixXQUFVOzBDQUNiLDRFQUFDdEIsK0RBQVlBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBS2xCUSxzQkFDQyw4REFBQ04sb0VBQUtBO2dCQUNKa0IsT0FBTTtnQkFDTlosTUFBTUE7Z0JBQ05tQixtQkFBbUI7b0JBQUVDLE9BQU87d0JBQUVDLFNBQVM7b0JBQU87Z0JBQUU7Z0JBQ2hEQyxlQUFlO29CQUFFRixPQUFPO3dCQUFFQyxTQUFTO29CQUFPO2dCQUFFO2dCQUM1Q0UsVUFBVSxJQUFNbkI7MEJBQ2hCLDRFQUFDVCwwREFBT0E7Ozs7Ozs7Ozs7OztBQUtsQjtHQS9Dd0JJOztRQUNUSCw4REFBY0E7UUFDVUMsK0RBQVVBOzs7S0FGekJFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9pbmRleC50c3g/MTlhMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCB7IEludGVyIH0gZnJvbSBcIm5leHQvZm9udC9nb29nbGVcIjtcbmltcG9ydCBQcm9kdWN0VGFibGUgZnJvbSBcIkAvY29tcG9uZW50L1Byb2R1Y3RUYWJsZVwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgTW9kYWwgfSBmcm9tIFwiYW50ZFwiO1xuaW1wb3J0IEFkZEZvcm0gZnJvbSBcIkAvY29tcG9uZW50L0FkZEZvcm1cIjtcbmltcG9ydCB7IHVzZUFwcFNlbGVjdG9yIH0gZnJvbSBcIkAvc3RvcmUvaG9va3MvaG9va3NcIjtcbmltcG9ydCB7IHVzZUFjdGlvbnMgfSBmcm9tIFwiQC9zdG9yZS9ob29rcy91c2VBY3Rpb25zXCI7XG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5cbmNvbnN0IGludGVyID0gSW50ZXIoeyBzdWJzZXRzOiBbXCJsYXRpblwiXSB9KTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3Qgb3BlbiA9IHVzZUFwcFNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUudWlTdGF0ZS5mb3JtTW9kYWwpO1xuICBjb25zdCB7IHRvZ2dsZUZvcm1Nb2RhbCwgc2V0RGF0YSB9ID0gdXNlQWN0aW9ucygpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgZGF0YSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiZmFobS1kYXRhXCIpO1xuICAgIGlmIChkYXRhICYmIGRhdGEgIT09IHVuZGVmaW5lZCkge1xuICAgICAgc2V0RGF0YShKU09OLnBhcnNlKGRhdGEpLmRhdGEpO1xuICAgIH1cbiAgfSwgW10pO1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPkNydWQgaW4gTmV4dC5qcyB3aXRoIFJlZHV4PC90aXRsZT5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxtYWluIGNsYXNzTmFtZT1cImZsZXggdy1mdWxsIGZsZXgtY29sICAgaXRlbXMtY2VudGVyIGdhcC00IHRleHQtY2VudGVyIHAtMVwiPlxuICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC0yeGwgZm9udC1zZW1pYm9sZCB0ZXh0LXB1cnBsZS04MDAgbWItMiBtdC0xIHVuZGVybGluZSB1bmRlcmxpbmUtb2Zmc2V0LTIgIFwiPlxuICAgICAgICAgIENydWQgaW4gTmV4dCBqc1xuICAgICAgICA8L2gyPlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIHctWzkwJV0gaC1hdXRvIGl0ZW1zLWNlbnRlciBmbGV4IGZsZXgtY29sICAgZ2FwLTUgXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IHctZnVsbCBmbGV4LXJvdyBqdXN0aWZ5LWJldHdlZW4gbWItMyBtdC00IGl0ZW0tY2VudGVyXCI+XG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC14bCBmb250LXNlbWlib2xkIHRleHQtYmx1ZS04MDAgdGV4dC1jZW50ZXIgZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgXCI+XG4gICAgICAgICAgICAgIFlvdXIgUHJvZHVjdCBUYWJsZXtcIiBcIn1cbiAgICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ1dHRvblwiIG9uQ2xpY2s9eygpID0+IHRvZ2dsZUZvcm1Nb2RhbCgpfT5cbiAgICAgICAgICAgICAgQWRkIFByb2R1Y3RcbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsXCI+XG4gICAgICAgICAgICA8UHJvZHVjdFRhYmxlIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9tYWluPlxuXG4gICAgICB7b3BlbiAmJiAoXG4gICAgICAgIDxNb2RhbFxuICAgICAgICAgIHRpdGxlPVwiQWRkIFByb2R1Y3RcIlxuICAgICAgICAgIG9wZW49e29wZW59XG4gICAgICAgICAgY2FuY2VsQnV0dG9uUHJvcHM9e3sgc3R5bGU6IHsgZGlzcGxheTogXCJub25lXCIgfSB9fVxuICAgICAgICAgIG9rQnV0dG9uUHJvcHM9e3sgc3R5bGU6IHsgZGlzcGxheTogXCJub25lXCIgfSB9fVxuICAgICAgICAgIG9uQ2FuY2VsPXsoKSA9PiB0b2dnbGVGb3JtTW9kYWwoKX0+XG4gICAgICAgICAgPEFkZEZvcm0gLz5cbiAgICAgICAgPC9Nb2RhbD5cbiAgICAgICl9XG4gICAgPC8+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiaW50ZXIiLCJQcm9kdWN0VGFibGUiLCJ1c2VFZmZlY3QiLCJNb2RhbCIsIkFkZEZvcm0iLCJ1c2VBcHBTZWxlY3RvciIsInVzZUFjdGlvbnMiLCJIZWFkIiwiSG9tZSIsIm9wZW4iLCJzdGF0ZSIsInVpU3RhdGUiLCJmb3JtTW9kYWwiLCJ0b2dnbGVGb3JtTW9kYWwiLCJzZXREYXRhIiwiZGF0YSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJ1bmRlZmluZWQiLCJKU09OIiwicGFyc2UiLCJ0aXRsZSIsIm1haW4iLCJjbGFzc05hbWUiLCJoMiIsImRpdiIsImJ1dHRvbiIsIm9uQ2xpY2siLCJjYW5jZWxCdXR0b25Qcm9wcyIsInN0eWxlIiwiZGlzcGxheSIsIm9rQnV0dG9uUHJvcHMiLCJvbkNhbmNlbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n"));

/***/ })

});
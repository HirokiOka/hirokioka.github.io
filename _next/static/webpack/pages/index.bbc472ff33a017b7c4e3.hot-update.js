/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; },\n/* harmony export */   \"SketchComponent\": function() { return /* binding */ SketchComponent; }\n/* harmony export */ });\n/* harmony import */ var _Users_Hiroki_src_github_com_HirokiOka_HirokiOka_github_io_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/layout */ \"./components/layout.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/dynamic */ \"./node_modules/next/dynamic.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_4__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nvar _jsxFileName = \"/Users/Hiroki/src/github.com/HirokiOka/HirokiOka.github.io/pages/index.js\",\n    _this = undefined;\n\n\n\n\n\nfunction Home() {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_layout__WEBPACK_IMPORTED_MODULE_3__.default, {\n    home: true,\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"title\", {\n        children: _components_layout__WEBPACK_IMPORTED_MODULE_3__.siteTitle\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 10,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n      children: \"HirokiOka Web.\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(SketchComponent, {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 8,\n    columnNumber: 5\n  }, this);\n}\n_c = Home;\nvar Sketch = next_dynamic__WEBPACK_IMPORTED_MODULE_4___default()(_c2 = function _c2() {\n  return __webpack_require__.e(/*! import() */ \"vendors-node_modules_react-p5_build_index_js\").then(__webpack_require__.t.bind(__webpack_require__, /*! react-p5 */ \"./node_modules/react-p5/build/index.js\", 23));\n}, {\n  loading: function loading() {\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {}, void 0, false);\n  },\n  ssr: false,\n  loadableGenerated: {\n    webpack: function webpack() {\n      return [/*require.resolve*/(/*! react-p5 */ \"./node_modules/react-p5/build/index.js\")];\n    },\n    modules: [\"index.js -> \" + 'react-p5']\n  }\n});\n_c3 = Sketch;\nvar SketchComponent = function SketchComponent() {\n  var width = 840;\n  var height = 480;\n  var distance = 60;\n  var offset = 20;\n  var digitFont;\n  var backgroundColor = 0;\n  var num;\n  var values;\n\n  var preload = function preload(p5) {\n    digitFont = p5.loadFont('https://stat.neort.io/externalResource/bqj6tps3p9f48fkipv9g.ttf');\n  };\n\n  var setup = function setup(p5, canvasParentRef) {\n    p5.createCanvas(width, height).parent(canvasParentRef);\n    p5.noStroke();\n    p5.textAlign(p5.CENTER, p5.CENTER);\n    p5.rectMode(p5.CENTER);\n    num = width / distance * (height / distance);\n    values = (0,_Users_Hiroki_src_github_com_HirokiOka_HirokiOka_github_io_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.default)(Array(num).keys());\n  };\n\n  var draw = function draw(p5) {\n    var fc = p5.frameCount;\n    p5.textFont(digitFont);\n    backgroundColor = p5.sin(fc * 0.004) * 255;\n    p5.background(backgroundColor);\n    p5.fill(255 - backgroundColor);\n    var y = 0;\n    values.forEach(function (i, v) {\n      var x = i * distance % width;\n      var val = Math.floor(fc * p5.noise(x, y) * 0.04 % 10);\n      p5.textSize(Math.abs(Math.sin(fc * (x + y) * 0.00002)) * 25);\n      p5.text(val, x + offset, y + offset);\n      if (++i % 10 === 0) y += distance;\n    });\n    p5.fill(backgroundColor);\n    p5.rect(width / 2, height / 2, 620, height / 4);\n    p5.textSize(64);\n    p5.fill(255 - backgroundColor);\n    p5.text(\"HELLO,  WORLD\", width / 2, height / 2);\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Sketch, {\n    preload: preload,\n    setup: setup,\n    draw: draw\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 67,\n    columnNumber: 10\n  }, _this);\n};\n_c4 = SketchComponent;\n\nvar _c, _c2, _c3, _c4;\n\n$RefreshReg$(_c, \"Home\");\n$RefreshReg$(_c2, \"Sketch$dynamic\");\n$RefreshReg$(_c3, \"Sketch\");\n$RefreshReg$(_c4, \"SketchComponent\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJIb21lIiwic2l0ZVRpdGxlIiwiU2tldGNoIiwiZHluYW1pYyIsImxvYWRpbmciLCJzc3IiLCJTa2V0Y2hDb21wb25lbnQiLCJ3aWR0aCIsImhlaWdodCIsImRpc3RhbmNlIiwib2Zmc2V0IiwiZGlnaXRGb250IiwiYmFja2dyb3VuZENvbG9yIiwibnVtIiwidmFsdWVzIiwicHJlbG9hZCIsInA1IiwibG9hZEZvbnQiLCJzZXR1cCIsImNhbnZhc1BhcmVudFJlZiIsImNyZWF0ZUNhbnZhcyIsInBhcmVudCIsIm5vU3Ryb2tlIiwidGV4dEFsaWduIiwiQ0VOVEVSIiwicmVjdE1vZGUiLCJBcnJheSIsImtleXMiLCJkcmF3IiwiZmMiLCJmcmFtZUNvdW50IiwidGV4dEZvbnQiLCJzaW4iLCJiYWNrZ3JvdW5kIiwiZmlsbCIsInkiLCJmb3JFYWNoIiwiaSIsInYiLCJ4IiwidmFsIiwiTWF0aCIsImZsb29yIiwibm9pc2UiLCJ0ZXh0U2l6ZSIsImFicyIsInRleHQiLCJyZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLElBQVQsR0FBZ0I7QUFDN0Isc0JBQ0UsOERBQUMsdURBQUQ7QUFBUSxRQUFJLE1BQVo7QUFBQSw0QkFDRSw4REFBQyxrREFBRDtBQUFBLDZCQUNFO0FBQUEsa0JBQVFDLHlEQUFTQTtBQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBSUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFKRixlQUtFLDhEQUFDLGVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBU0Q7S0FWdUJELEk7QUFZeEIsSUFBTUUsTUFBTSxHQUFHQyxtREFBTztBQUFBLFNBQUMseU1B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QUFkLEVBQWlCQyxNQUFNLEdBQUMsQ0FBeEIsRUFBMkIsR0FBM0IsRUFBZ0NBLE1BQU0sR0FBQyxDQUF2QztBQUNBUSxNQUFFLENBQUM0QixRQUFILENBQVksRUFBWjtBQUNBNUIsTUFBRSxDQUFDa0IsSUFBSCxDQUFRLE1BQU10QixlQUFkO0FBQ0FJLE1BQUUsQ0FBQzhCLElBQUgsQ0FBUSxlQUFSLEVBQXlCdkMsS0FBSyxHQUFDLENBQS9CLEVBQWtDQyxNQUFNLEdBQUMsQ0FBekM7QUFDRCxHQW5CRDs7QUFxQkEsc0JBQU8sOERBQUMsTUFBRDtBQUFRLFdBQU8sRUFBRU8sT0FBakI7QUFBMEIsU0FBSyxFQUFFRyxLQUFqQztBQUF3QyxRQUFJLEVBQUVVO0FBQTlDO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBUDtBQUNELENBN0NNO01BQU10QixlIiwiZmlsZSI6Ii4vcGFnZXMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgTGF5b3V0LCB7IHNpdGVUaXRsZSB9IGZyb20gJy4uL2NvbXBvbmVudHMvbGF5b3V0J1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvdXRpbHMubW9kdWxlLmNzcydcbmltcG9ydCBkeW5hbWljIGZyb20gJ25leHQvZHluYW1pYydcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0IGhvbWU+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPntzaXRlVGl0bGV9PC90aXRsZT5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxoMT5IaXJva2lPa2EgV2ViLjwvaDE+XG4gICAgICA8U2tldGNoQ29tcG9uZW50IC8+XG4gICAgPC9MYXlvdXQ+XG4gICk7XG59XG5cbmNvbnN0IFNrZXRjaCA9IGR5bmFtaWMoaW1wb3J0KCdyZWFjdC1wNScpLCB7XG4gIGxvYWRpbmc6ICgpID0+IDw+PC8+LFxuICBzc3I6IGZhbHNlXG59KTtcblxuZXhwb3J0IGNvbnN0IFNrZXRjaENvbXBvbmVudCA9ICgpID0+ICB7XG4gIGNvbnN0IHdpZHRoID0gODQwO1xuICBjb25zdCBoZWlnaHQgPSA0ODA7XG4gIGNvbnN0IGRpc3RhbmNlID0gNjA7XG4gIGNvbnN0IG9mZnNldCA9IDIwO1xuICBsZXQgZGlnaXRGb250O1xuICBsZXQgYmFja2dyb3VuZENvbG9yID0gMDtcbiAgbGV0IG51bTtcbiAgbGV0IHZhbHVlcztcblxuICBjb25zdCBwcmVsb2FkID0gKHA1KSA9PiB7XG4gICAgZGlnaXRGb250ID0gcDUubG9hZEZvbnQoJ2h0dHBzOi8vc3RhdC5uZW9ydC5pby9leHRlcm5hbFJlc291cmNlL2JxajZ0cHMzcDlmNDhma2lwdjlnLnR0ZicpO1xuICB9O1xuICBcbiAgY29uc3Qgc2V0dXAgPSAocDUsIGNhbnZhc1BhcmVudFJlZikgPT4ge1xuICAgIHA1LmNyZWF0ZUNhbnZhcyh3aWR0aCwgaGVpZ2h0KS5wYXJlbnQoY2FudmFzUGFyZW50UmVmKTtcbiAgICBwNS5ub1N0cm9rZSgpO1xuICAgIHA1LnRleHRBbGlnbihwNS5DRU5URVIsIHA1LkNFTlRFUik7XG4gICAgcDUucmVjdE1vZGUocDUuQ0VOVEVSKTtcbiAgICBudW0gPSAod2lkdGggLyBkaXN0YW5jZSkgKiAoaGVpZ2h0IC8gZGlzdGFuY2UpXG4gICAgdmFsdWVzID0gWy4uLkFycmF5KG51bSkua2V5cygpXVxuICB9O1xuXG4gIGNvbnN0IGRyYXcgPSAocDUpID0+IHtcbiAgICBsZXQgZmMgPSBwNS5mcmFtZUNvdW50O1xuICAgIHA1LnRleHRGb250KGRpZ2l0Rm9udCk7XG4gICAgYmFja2dyb3VuZENvbG9yID0gcDUuc2luKGZjICogMC4wMDQpICogMjU1O1xuICAgIHA1LmJhY2tncm91bmQoYmFja2dyb3VuZENvbG9yKTtcbiAgICBwNS5maWxsKDI1NSAtIGJhY2tncm91bmRDb2xvcik7XG4gICAgbGV0IHkgPSAwO1xuICAgIHZhbHVlcy5mb3JFYWNoKChpLCB2KSA9PiB7XG4gICAgICBjb25zdCB4ID0gKGkgKiBkaXN0YW5jZSkgJSB3aWR0aDtcbiAgICAgIGNvbnN0IHZhbCA9IE1hdGguZmxvb3IoZmMgKiBwNS5ub2lzZSh4LCB5KSAqIDAuMDQgJSAxMCk7XG4gICAgICBwNS50ZXh0U2l6ZShNYXRoLmFicyhNYXRoLnNpbihmYyAqICh4ICsgeSkgKiAwLjAwMDAyKSkgKiAyNSk7XG4gICAgICBwNS50ZXh0KHZhbCwgeCArIG9mZnNldCwgeSArIG9mZnNldCk7XG4gICAgICBpZiAoKytpICUgMTAgPT09IDApIHkgKz0gZGlzdGFuY2U7XG4gICAgfSk7XG4gICAgcDUuZmlsbChiYWNrZ3JvdW5kQ29sb3IpO1xuICAgIHA1LnJlY3Qod2lkdGgvMiwgaGVpZ2h0LzIsIDYyMCwgaGVpZ2h0LzQpO1xuICAgIHA1LnRleHRTaXplKDY0KTtcbiAgICBwNS5maWxsKDI1NSAtIGJhY2tncm91bmRDb2xvcik7XG4gICAgcDUudGV4dChcIkhFTExPLCAgV09STERcIiwgd2lkdGgvMiwgaGVpZ2h0LzIpO1xuICB9O1xuXG4gIHJldHVybiA8U2tldGNoIHByZWxvYWQ9e3ByZWxvYWR9IHNldHVwPXtzZXR1cH0gZHJhdz17ZHJhd30gLz47XG59XG5cblxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});
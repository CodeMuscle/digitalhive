"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/checkout/[priceId]";
exports.ids = ["pages/api/checkout/[priceId]"];
exports.modules = {

/***/ "stripe":
/*!*************************!*\
  !*** external "stripe" ***!
  \*************************/
/***/ ((module) => {

module.exports = import("stripe");;

/***/ }),

/***/ "(api)/./src/core/utils/index.js":
/*!*********************************!*\
  !*** ./src/core/utils/index.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"SITE_URL\": () => (/* binding */ SITE_URL)\n/* harmony export */ });\nconst production = \"development\" === \"production\";\nconst SITE_URL = production ? \"prod-url\" : \"http://localhost:3000\";\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvY29yZS91dGlscy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUEsTUFBTUEsYUFBYUMsa0JBQXlCO0FBRXJDLE1BQU1DLFdBQVdGLGFBQWEsYUFBYSx1QkFBdUIsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2VwaWMtc2Fhcy8uL3NyYy9jb3JlL3V0aWxzL2luZGV4LmpzPzc2MDYiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgcHJvZHVjdGlvbiA9IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbidcblxuZXhwb3J0IGNvbnN0IFNJVEVfVVJMID0gcHJvZHVjdGlvbiA/ICdwcm9kLXVybCcgOiAnaHR0cDovL2xvY2FsaG9zdDozMDAwJztcblxuIl0sIm5hbWVzIjpbInByb2R1Y3Rpb24iLCJwcm9jZXNzIiwiU0lURV9VUkwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./src/core/utils/index.js\n");

/***/ }),

/***/ "(api)/./src/pages/api/checkout/[priceId].js":
/*!*********************************************!*\
  !*** ./src/pages/api/checkout/[priceId].js ***!
  \*********************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var src_core_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/core/utils */ \"(api)/./src/core/utils/index.js\");\n/* harmony import */ var src_pricing_utils_stripe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/pricing/utils/stripe */ \"(api)/./src/pricing/utils/stripe.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([src_pricing_utils_stripe__WEBPACK_IMPORTED_MODULE_1__]);\nsrc_pricing_utils_stripe__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\nasync function handler(req, res) {\n    const { priceId  } = req.query;\n    const session = await src_pricing_utils_stripe__WEBPACK_IMPORTED_MODULE_1__.stripe.checkout.sessions.create({\n        mode: \"subscription\",\n        payment_method_types: [\n            \"card\"\n        ],\n        line_items: [\n            {\n                price: priceId,\n                quantity: 1\n            }\n        ],\n        success_url: `${src_core_utils__WEBPACK_IMPORTED_MODULE_0__.SITE_URL}/success`,\n        cancel_url: `${src_core_utils__WEBPACK_IMPORTED_MODULE_0__.SITE_URL}/pricing`\n    });\n    res.send({\n        id: session.id\n    });\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL2NoZWNrb3V0L1twcmljZUlkXS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBeUM7QUFDUTtBQUVsQyxlQUFlRSxRQUFRQyxHQUFHLEVBQUVDLEdBQUcsRUFBRTtJQUM1QyxNQUFNLEVBQUVDLFFBQU8sRUFBRSxHQUFHRixJQUFJRyxLQUFLO0lBRTdCLE1BQU1DLFVBQVUsTUFBTU4scUZBQStCLENBQUM7UUFDbERVLE1BQU07UUFDTkMsc0JBQXNCO1lBQUM7U0FBTztRQUM5QkMsWUFBWTtZQUFDO2dCQUFFQyxPQUFPVDtnQkFBU1UsVUFBVTtZQUFFO1NBQUU7UUFDN0NDLGFBQWEsQ0FBQyxFQUFFaEIsb0RBQVFBLENBQUMsUUFBUSxDQUFDO1FBQ2xDaUIsWUFBWSxDQUFDLEVBQUVqQixvREFBUUEsQ0FBQyxRQUFRLENBQUM7SUFDckM7SUFFQUksSUFBSWMsSUFBSSxDQUFDO1FBQUVDLElBQUlaLFFBQVFZLEVBQUU7SUFBQztBQUM5QixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXBpYy1zYWFzLy4vc3JjL3BhZ2VzL2FwaS9jaGVja291dC9bcHJpY2VJZF0uanM/YjBmZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTSVRFX1VSTCB9IGZyb20gXCJzcmMvY29yZS91dGlsc1wiXG5pbXBvcnQgeyBzdHJpcGUgfSBmcm9tIFwic3JjL3ByaWNpbmcvdXRpbHMvc3RyaXBlXCJcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xuICAgIGNvbnN0IHsgcHJpY2VJZCB9ID0gcmVxLnF1ZXJ5XG5cbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgc3RyaXBlLmNoZWNrb3V0LnNlc3Npb25zLmNyZWF0ZSh7XG4gICAgICAgIG1vZGU6ICdzdWJzY3JpcHRpb24nLFxuICAgICAgICBwYXltZW50X21ldGhvZF90eXBlczogWydjYXJkJ10sXG4gICAgICAgIGxpbmVfaXRlbXM6IFt7IHByaWNlOiBwcmljZUlkLCBxdWFudGl0eTogMSB9XSxcbiAgICAgICAgc3VjY2Vzc191cmw6IGAke1NJVEVfVVJMfS9zdWNjZXNzYCxcbiAgICAgICAgY2FuY2VsX3VybDogYCR7U0lURV9VUkx9L3ByaWNpbmdgLFxuICAgIH0pXG5cbiAgICByZXMuc2VuZCh7IGlkOiBzZXNzaW9uLmlkIH0pO1xufVxuIl0sIm5hbWVzIjpbIlNJVEVfVVJMIiwic3RyaXBlIiwiaGFuZGxlciIsInJlcSIsInJlcyIsInByaWNlSWQiLCJxdWVyeSIsInNlc3Npb24iLCJjaGVja291dCIsInNlc3Npb25zIiwiY3JlYXRlIiwibW9kZSIsInBheW1lbnRfbWV0aG9kX3R5cGVzIiwibGluZV9pdGVtcyIsInByaWNlIiwicXVhbnRpdHkiLCJzdWNjZXNzX3VybCIsImNhbmNlbF91cmwiLCJzZW5kIiwiaWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/checkout/[priceId].js\n");

/***/ }),

/***/ "(api)/./src/pricing/utils/stripe.js":
/*!*************************************!*\
  !*** ./src/pricing/utils/stripe.js ***!
  \*************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"stripe\": () => (/* binding */ stripe)\n/* harmony export */ });\n/* harmony import */ var stripe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! stripe */ \"stripe\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([stripe__WEBPACK_IMPORTED_MODULE_0__]);\nstripe__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\nconst stripe = new stripe__WEBPACK_IMPORTED_MODULE_0__[\"default\"](process.env.STRIPE_SECRET_KEY, {\n    apiVersion: \"2022-11-15\"\n});\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcHJpY2luZy91dGlscy9zdHJpcGUuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBNEI7QUFFckIsTUFBTUMsU0FBUyxJQUFJRCw4Q0FBTUEsQ0FBQ0UsUUFBUUMsR0FBRyxDQUFDQyxpQkFBaUIsRUFBRTtJQUM1REMsWUFBWTtBQUNoQixHQUFHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXBpYy1zYWFzLy4vc3JjL3ByaWNpbmcvdXRpbHMvc3RyaXBlLmpzP2ViZWYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFN0cmlwZSBmcm9tIFwic3RyaXBlXCI7XG5cbmV4cG9ydCBjb25zdCBzdHJpcGUgPSBuZXcgU3RyaXBlKHByb2Nlc3MuZW52LlNUUklQRV9TRUNSRVRfS0VZLCB7XG4gICAgYXBpVmVyc2lvbjogXCIyMDIyLTExLTE1XCJcbn0pO1xuIl0sIm5hbWVzIjpbIlN0cmlwZSIsInN0cmlwZSIsInByb2Nlc3MiLCJlbnYiLCJTVFJJUEVfU0VDUkVUX0tFWSIsImFwaVZlcnNpb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./src/pricing/utils/stripe.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/checkout/[priceId].js"));
module.exports = __webpack_exports__;

})();
"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/rc-resize-observer";
exports.ids = ["vendor-chunks/rc-resize-observer"];
exports.modules = {

/***/ "(ssr)/./node_modules/rc-resize-observer/es/Collection.js":
/*!**********************************************************!*\
  !*** ./node_modules/rc-resize-observer/es/Collection.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Collection: () => (/* binding */ Collection),\n/* harmony export */   CollectionContext: () => (/* binding */ CollectionContext)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"(ssr)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nvar CollectionContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext(null);\n/**\n * Collect all the resize event from children ResizeObserver\n */\nfunction Collection(_ref) {\n  var children = _ref.children,\n    onBatchResize = _ref.onBatchResize;\n  var resizeIdRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(0);\n  var resizeInfosRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef([]);\n  var onCollectionResize = react__WEBPACK_IMPORTED_MODULE_0__.useContext(CollectionContext);\n  var onResize = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(function (size, element, data) {\n    resizeIdRef.current += 1;\n    var currentId = resizeIdRef.current;\n    resizeInfosRef.current.push({\n      size: size,\n      element: element,\n      data: data\n    });\n    Promise.resolve().then(function () {\n      if (currentId === resizeIdRef.current) {\n        onBatchResize === null || onBatchResize === void 0 || onBatchResize(resizeInfosRef.current);\n        resizeInfosRef.current = [];\n      }\n    });\n\n    // Continue bubbling if parent exist\n    onCollectionResize === null || onCollectionResize === void 0 || onCollectionResize(size, element, data);\n  }, [onBatchResize, onCollectionResize]);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(CollectionContext.Provider, {\n    value: onResize\n  }, children);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvcmMtcmVzaXplLW9ic2VydmVyL2VzL0NvbGxlY3Rpb24uanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUErQjtBQUN4QixxQ0FBcUMsZ0RBQW1CO0FBQy9EO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBLG9CQUFvQix5Q0FBWTtBQUNoQyx1QkFBdUIseUNBQVk7QUFDbkMsMkJBQTJCLDZDQUFnQjtBQUMzQyxpQkFBaUIsOENBQWlCO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsR0FBRztBQUNILHNCQUFzQixnREFBbUI7QUFDekM7QUFDQSxHQUFHO0FBQ0giLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pbnZlbnRvcnktc29mdHdhcmUvLi9ub2RlX21vZHVsZXMvcmMtcmVzaXplLW9ic2VydmVyL2VzL0NvbGxlY3Rpb24uanM/NTQwYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5leHBvcnQgdmFyIENvbGxlY3Rpb25Db250ZXh0ID0gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUNvbnRleHQobnVsbCk7XG4vKipcbiAqIENvbGxlY3QgYWxsIHRoZSByZXNpemUgZXZlbnQgZnJvbSBjaGlsZHJlbiBSZXNpemVPYnNlcnZlclxuICovXG5leHBvcnQgZnVuY3Rpb24gQ29sbGVjdGlvbihfcmVmKSB7XG4gIHZhciBjaGlsZHJlbiA9IF9yZWYuY2hpbGRyZW4sXG4gICAgb25CYXRjaFJlc2l6ZSA9IF9yZWYub25CYXRjaFJlc2l6ZTtcbiAgdmFyIHJlc2l6ZUlkUmVmID0gUmVhY3QudXNlUmVmKDApO1xuICB2YXIgcmVzaXplSW5mb3NSZWYgPSBSZWFjdC51c2VSZWYoW10pO1xuICB2YXIgb25Db2xsZWN0aW9uUmVzaXplID0gUmVhY3QudXNlQ29udGV4dChDb2xsZWN0aW9uQ29udGV4dCk7XG4gIHZhciBvblJlc2l6ZSA9IFJlYWN0LnVzZUNhbGxiYWNrKGZ1bmN0aW9uIChzaXplLCBlbGVtZW50LCBkYXRhKSB7XG4gICAgcmVzaXplSWRSZWYuY3VycmVudCArPSAxO1xuICAgIHZhciBjdXJyZW50SWQgPSByZXNpemVJZFJlZi5jdXJyZW50O1xuICAgIHJlc2l6ZUluZm9zUmVmLmN1cnJlbnQucHVzaCh7XG4gICAgICBzaXplOiBzaXplLFxuICAgICAgZWxlbWVudDogZWxlbWVudCxcbiAgICAgIGRhdGE6IGRhdGFcbiAgICB9KTtcbiAgICBQcm9taXNlLnJlc29sdmUoKS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmIChjdXJyZW50SWQgPT09IHJlc2l6ZUlkUmVmLmN1cnJlbnQpIHtcbiAgICAgICAgb25CYXRjaFJlc2l6ZSA9PT0gbnVsbCB8fCBvbkJhdGNoUmVzaXplID09PSB2b2lkIDAgfHwgb25CYXRjaFJlc2l6ZShyZXNpemVJbmZvc1JlZi5jdXJyZW50KTtcbiAgICAgICAgcmVzaXplSW5mb3NSZWYuY3VycmVudCA9IFtdO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgLy8gQ29udGludWUgYnViYmxpbmcgaWYgcGFyZW50IGV4aXN0XG4gICAgb25Db2xsZWN0aW9uUmVzaXplID09PSBudWxsIHx8IG9uQ29sbGVjdGlvblJlc2l6ZSA9PT0gdm9pZCAwIHx8IG9uQ29sbGVjdGlvblJlc2l6ZShzaXplLCBlbGVtZW50LCBkYXRhKTtcbiAgfSwgW29uQmF0Y2hSZXNpemUsIG9uQ29sbGVjdGlvblJlc2l6ZV0pO1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoQ29sbGVjdGlvbkNvbnRleHQuUHJvdmlkZXIsIHtcbiAgICB2YWx1ZTogb25SZXNpemVcbiAgfSwgY2hpbGRyZW4pO1xufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/rc-resize-observer/es/Collection.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/rc-resize-observer/es/SingleObserver/DomWrapper.js":
/*!*************************************************************************!*\
  !*** ./node_modules/rc-resize-observer/es/SingleObserver/DomWrapper.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ DomWrapper)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"(ssr)/./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"(ssr)/./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ \"(ssr)/./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createSuper */ \"(ssr)/./node_modules/@babel/runtime/helpers/esm/createSuper.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"(ssr)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\n/**\n * Fallback to findDOMNode if origin ref do not provide any dom element\n */\nvar DomWrapper = /*#__PURE__*/function (_React$Component) {\n  (0,_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(DomWrapper, _React$Component);\n  var _super = (0,_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(DomWrapper);\n  function DomWrapper() {\n    (0,_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, DomWrapper);\n    return _super.apply(this, arguments);\n  }\n  (0,_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(DomWrapper, [{\n    key: \"render\",\n    value: function render() {\n      return this.props.children;\n    }\n  }]);\n  return DomWrapper;\n}(react__WEBPACK_IMPORTED_MODULE_4__.Component);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvcmMtcmVzaXplLW9ic2VydmVyL2VzL1NpbmdsZU9ic2VydmVyL0RvbVdyYXBwZXIuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUF3RTtBQUNOO0FBQ047QUFDTTtBQUNuQztBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsK0VBQVM7QUFDWCxlQUFlLGtGQUFZO0FBQzNCO0FBQ0EsSUFBSSxxRkFBZTtBQUNuQjtBQUNBO0FBQ0EsRUFBRSxrRkFBWTtBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsQ0FBQyxDQUFDLDRDQUFlIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaW52ZW50b3J5LXNvZnR3YXJlLy4vbm9kZV9tb2R1bGVzL3JjLXJlc2l6ZS1vYnNlcnZlci9lcy9TaW5nbGVPYnNlcnZlci9Eb21XcmFwcGVyLmpzP2I1NGIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IF9jbGFzc0NhbGxDaGVjayBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vY2xhc3NDYWxsQ2hlY2tcIjtcbmltcG9ydCBfY3JlYXRlQ2xhc3MgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2NyZWF0ZUNsYXNzXCI7XG5pbXBvcnQgX2luaGVyaXRzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9pbmhlcml0c1wiO1xuaW1wb3J0IF9jcmVhdGVTdXBlciBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vY3JlYXRlU3VwZXJcIjtcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0Jztcbi8qKlxuICogRmFsbGJhY2sgdG8gZmluZERPTU5vZGUgaWYgb3JpZ2luIHJlZiBkbyBub3QgcHJvdmlkZSBhbnkgZG9tIGVsZW1lbnRcbiAqL1xudmFyIERvbVdyYXBwZXIgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgX2luaGVyaXRzKERvbVdyYXBwZXIsIF9SZWFjdCRDb21wb25lbnQpO1xuICB2YXIgX3N1cGVyID0gX2NyZWF0ZVN1cGVyKERvbVdyYXBwZXIpO1xuICBmdW5jdGlvbiBEb21XcmFwcGVyKCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBEb21XcmFwcGVyKTtcbiAgICByZXR1cm4gX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH1cbiAgX2NyZWF0ZUNsYXNzKERvbVdyYXBwZXIsIFt7XG4gICAga2V5OiBcInJlbmRlclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICByZXR1cm4gdGhpcy5wcm9wcy5jaGlsZHJlbjtcbiAgICB9XG4gIH1dKTtcbiAgcmV0dXJuIERvbVdyYXBwZXI7XG59KFJlYWN0LkNvbXBvbmVudCk7XG5leHBvcnQgeyBEb21XcmFwcGVyIGFzIGRlZmF1bHQgfTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/rc-resize-observer/es/SingleObserver/DomWrapper.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/rc-resize-observer/es/SingleObserver/index.js":
/*!********************************************************************!*\
  !*** ./node_modules/rc-resize-observer/es/SingleObserver/index.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectSpread2 */ \"(ssr)/./node_modules/@babel/runtime/helpers/esm/objectSpread2.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/typeof */ \"(ssr)/./node_modules/@babel/runtime/helpers/esm/typeof.js\");\n/* harmony import */ var rc_util_es_Dom_findDOMNode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rc-util/es/Dom/findDOMNode */ \"(ssr)/./node_modules/rc-util/es/Dom/findDOMNode.js\");\n/* harmony import */ var rc_util_es_ref__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rc-util/es/ref */ \"(ssr)/./node_modules/rc-util/es/ref.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"(ssr)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _Collection__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Collection */ \"(ssr)/./node_modules/rc-resize-observer/es/Collection.js\");\n/* harmony import */ var _utils_observerUtil__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/observerUtil */ \"(ssr)/./node_modules/rc-resize-observer/es/utils/observerUtil.js\");\n/* harmony import */ var _DomWrapper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./DomWrapper */ \"(ssr)/./node_modules/rc-resize-observer/es/SingleObserver/DomWrapper.js\");\n\n\n\n\n\n\n\n\nfunction SingleObserver(props, ref) {\n  var children = props.children,\n    disabled = props.disabled;\n  var elementRef = react__WEBPACK_IMPORTED_MODULE_4__.useRef(null);\n  var wrapperRef = react__WEBPACK_IMPORTED_MODULE_4__.useRef(null);\n  var onCollectionResize = react__WEBPACK_IMPORTED_MODULE_4__.useContext(_Collection__WEBPACK_IMPORTED_MODULE_5__.CollectionContext);\n\n  // =========================== Children ===========================\n  var isRenderProps = typeof children === 'function';\n  var mergedChildren = isRenderProps ? children(elementRef) : children;\n\n  // ============================= Size =============================\n  var sizeRef = react__WEBPACK_IMPORTED_MODULE_4__.useRef({\n    width: -1,\n    height: -1,\n    offsetWidth: -1,\n    offsetHeight: -1\n  });\n\n  // ============================= Ref ==============================\n  var canRef = !isRenderProps && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.isValidElement(mergedChildren) && (0,rc_util_es_ref__WEBPACK_IMPORTED_MODULE_3__.supportRef)(mergedChildren);\n  var originRef = canRef ? mergedChildren.ref : null;\n  var mergedRef = (0,rc_util_es_ref__WEBPACK_IMPORTED_MODULE_3__.useComposeRef)(originRef, elementRef);\n  var getDom = function getDom() {\n    var _elementRef$current;\n    return (0,rc_util_es_Dom_findDOMNode__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(elementRef.current) || (\n    // Support `nativeElement` format\n    elementRef.current && (0,_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(elementRef.current) === 'object' ? (0,rc_util_es_Dom_findDOMNode__WEBPACK_IMPORTED_MODULE_2__[\"default\"])((_elementRef$current = elementRef.current) === null || _elementRef$current === void 0 ? void 0 : _elementRef$current.nativeElement) : null) || (0,rc_util_es_Dom_findDOMNode__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(wrapperRef.current);\n  };\n  react__WEBPACK_IMPORTED_MODULE_4__.useImperativeHandle(ref, function () {\n    return getDom();\n  });\n\n  // =========================== Observe ============================\n  var propsRef = react__WEBPACK_IMPORTED_MODULE_4__.useRef(props);\n  propsRef.current = props;\n\n  // Handler\n  var onInternalResize = react__WEBPACK_IMPORTED_MODULE_4__.useCallback(function (target) {\n    var _propsRef$current = propsRef.current,\n      onResize = _propsRef$current.onResize,\n      data = _propsRef$current.data;\n    var _target$getBoundingCl = target.getBoundingClientRect(),\n      width = _target$getBoundingCl.width,\n      height = _target$getBoundingCl.height;\n    var offsetWidth = target.offsetWidth,\n      offsetHeight = target.offsetHeight;\n\n    /**\n     * Resize observer trigger when content size changed.\n     * In most case we just care about element size,\n     * let's use `boundary` instead of `contentRect` here to avoid shaking.\n     */\n    var fixedWidth = Math.floor(width);\n    var fixedHeight = Math.floor(height);\n    if (sizeRef.current.width !== fixedWidth || sizeRef.current.height !== fixedHeight || sizeRef.current.offsetWidth !== offsetWidth || sizeRef.current.offsetHeight !== offsetHeight) {\n      var size = {\n        width: fixedWidth,\n        height: fixedHeight,\n        offsetWidth: offsetWidth,\n        offsetHeight: offsetHeight\n      };\n      sizeRef.current = size;\n\n      // IE is strange, right?\n      var mergedOffsetWidth = offsetWidth === Math.round(width) ? width : offsetWidth;\n      var mergedOffsetHeight = offsetHeight === Math.round(height) ? height : offsetHeight;\n      var sizeInfo = (0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[\"default\"])((0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, size), {}, {\n        offsetWidth: mergedOffsetWidth,\n        offsetHeight: mergedOffsetHeight\n      });\n\n      // Let collection know what happened\n      onCollectionResize === null || onCollectionResize === void 0 || onCollectionResize(sizeInfo, target, data);\n      if (onResize) {\n        // defer the callback but not defer to next frame\n        Promise.resolve().then(function () {\n          onResize(sizeInfo, target);\n        });\n      }\n    }\n  }, []);\n\n  // Dynamic observe\n  react__WEBPACK_IMPORTED_MODULE_4__.useEffect(function () {\n    var currentElement = getDom();\n    if (currentElement && !disabled) {\n      (0,_utils_observerUtil__WEBPACK_IMPORTED_MODULE_6__.observe)(currentElement, onInternalResize);\n    }\n    return function () {\n      return (0,_utils_observerUtil__WEBPACK_IMPORTED_MODULE_6__.unobserve)(currentElement, onInternalResize);\n    };\n  }, [elementRef.current, disabled]);\n\n  // ============================ Render ============================\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(_DomWrapper__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    ref: wrapperRef\n  }, canRef ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.cloneElement(mergedChildren, {\n    ref: mergedRef\n  }) : mergedChildren);\n}\nvar RefSingleObserver = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.forwardRef(SingleObserver);\nif (true) {\n  RefSingleObserver.displayName = 'SingleObserver';\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RefSingleObserver);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvcmMtcmVzaXplLW9ic2VydmVyL2VzL1NpbmdsZU9ic2VydmVyL2luZGV4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBcUU7QUFDYjtBQUNIO0FBQ007QUFDNUI7QUFDbUI7QUFDUztBQUNyQjtBQUN0QztBQUNBO0FBQ0E7QUFDQSxtQkFBbUIseUNBQVk7QUFDL0IsbUJBQW1CLHlDQUFZO0FBQy9CLDJCQUEyQiw2Q0FBZ0IsQ0FBQywwREFBaUI7O0FBRTdEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGdCQUFnQix5Q0FBWTtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQSw4Q0FBOEMsaURBQW9CLG9CQUFvQiwwREFBVTtBQUNoRztBQUNBLGtCQUFrQiw2REFBYTtBQUMvQjtBQUNBO0FBQ0EsV0FBVyxzRUFBVztBQUN0QjtBQUNBLDBCQUEwQiw2RUFBTyxvQ0FBb0Msc0VBQVcsZ0pBQWdKLHNFQUFXO0FBQzNPO0FBQ0EsRUFBRSxzREFBeUI7QUFDM0I7QUFDQSxHQUFHOztBQUVIO0FBQ0EsaUJBQWlCLHlDQUFZO0FBQzdCOztBQUVBO0FBQ0EseUJBQXlCLDhDQUFpQjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsb0ZBQWEsQ0FBQyxvRkFBYSxHQUFHLFdBQVc7QUFDOUQ7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0EsRUFBRSw0Q0FBZTtBQUNqQjtBQUNBO0FBQ0EsTUFBTSw0REFBTztBQUNiO0FBQ0E7QUFDQSxhQUFhLDhEQUFTO0FBQ3RCO0FBQ0EsR0FBRzs7QUFFSDtBQUNBLHNCQUFzQixnREFBbUIsQ0FBQyxtREFBVTtBQUNwRDtBQUNBLEdBQUcsd0JBQXdCLCtDQUFrQjtBQUM3QztBQUNBLEdBQUc7QUFDSDtBQUNBLHFDQUFxQyw2Q0FBZ0I7QUFDckQsSUFBSSxJQUFxQztBQUN6QztBQUNBO0FBQ0EsaUVBQWUsaUJBQWlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaW52ZW50b3J5LXNvZnR3YXJlLy4vbm9kZV9tb2R1bGVzL3JjLXJlc2l6ZS1vYnNlcnZlci9lcy9TaW5nbGVPYnNlcnZlci9pbmRleC5qcz82MTc2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBfb2JqZWN0U3ByZWFkIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RTcHJlYWQyXCI7XG5pbXBvcnQgX3R5cGVvZiBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vdHlwZW9mXCI7XG5pbXBvcnQgZmluZERPTU5vZGUgZnJvbSBcInJjLXV0aWwvZXMvRG9tL2ZpbmRET01Ob2RlXCI7XG5pbXBvcnQgeyBzdXBwb3J0UmVmLCB1c2VDb21wb3NlUmVmIH0gZnJvbSBcInJjLXV0aWwvZXMvcmVmXCI7XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBDb2xsZWN0aW9uQ29udGV4dCB9IGZyb20gXCIuLi9Db2xsZWN0aW9uXCI7XG5pbXBvcnQgeyBvYnNlcnZlLCB1bm9ic2VydmUgfSBmcm9tIFwiLi4vdXRpbHMvb2JzZXJ2ZXJVdGlsXCI7XG5pbXBvcnQgRG9tV3JhcHBlciBmcm9tIFwiLi9Eb21XcmFwcGVyXCI7XG5mdW5jdGlvbiBTaW5nbGVPYnNlcnZlcihwcm9wcywgcmVmKSB7XG4gIHZhciBjaGlsZHJlbiA9IHByb3BzLmNoaWxkcmVuLFxuICAgIGRpc2FibGVkID0gcHJvcHMuZGlzYWJsZWQ7XG4gIHZhciBlbGVtZW50UmVmID0gUmVhY3QudXNlUmVmKG51bGwpO1xuICB2YXIgd3JhcHBlclJlZiA9IFJlYWN0LnVzZVJlZihudWxsKTtcbiAgdmFyIG9uQ29sbGVjdGlvblJlc2l6ZSA9IFJlYWN0LnVzZUNvbnRleHQoQ29sbGVjdGlvbkNvbnRleHQpO1xuXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PSBDaGlsZHJlbiA9PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgdmFyIGlzUmVuZGVyUHJvcHMgPSB0eXBlb2YgY2hpbGRyZW4gPT09ICdmdW5jdGlvbic7XG4gIHZhciBtZXJnZWRDaGlsZHJlbiA9IGlzUmVuZGVyUHJvcHMgPyBjaGlsZHJlbihlbGVtZW50UmVmKSA6IGNoaWxkcmVuO1xuXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09IFNpemUgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgdmFyIHNpemVSZWYgPSBSZWFjdC51c2VSZWYoe1xuICAgIHdpZHRoOiAtMSxcbiAgICBoZWlnaHQ6IC0xLFxuICAgIG9mZnNldFdpZHRoOiAtMSxcbiAgICBvZmZzZXRIZWlnaHQ6IC0xXG4gIH0pO1xuXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09IFJlZiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgdmFyIGNhblJlZiA9ICFpc1JlbmRlclByb3BzICYmIC8qI19fUFVSRV9fKi9SZWFjdC5pc1ZhbGlkRWxlbWVudChtZXJnZWRDaGlsZHJlbikgJiYgc3VwcG9ydFJlZihtZXJnZWRDaGlsZHJlbik7XG4gIHZhciBvcmlnaW5SZWYgPSBjYW5SZWYgPyBtZXJnZWRDaGlsZHJlbi5yZWYgOiBudWxsO1xuICB2YXIgbWVyZ2VkUmVmID0gdXNlQ29tcG9zZVJlZihvcmlnaW5SZWYsIGVsZW1lbnRSZWYpO1xuICB2YXIgZ2V0RG9tID0gZnVuY3Rpb24gZ2V0RG9tKCkge1xuICAgIHZhciBfZWxlbWVudFJlZiRjdXJyZW50O1xuICAgIHJldHVybiBmaW5kRE9NTm9kZShlbGVtZW50UmVmLmN1cnJlbnQpIHx8IChcbiAgICAvLyBTdXBwb3J0IGBuYXRpdmVFbGVtZW50YCBmb3JtYXRcbiAgICBlbGVtZW50UmVmLmN1cnJlbnQgJiYgX3R5cGVvZihlbGVtZW50UmVmLmN1cnJlbnQpID09PSAnb2JqZWN0JyA/IGZpbmRET01Ob2RlKChfZWxlbWVudFJlZiRjdXJyZW50ID0gZWxlbWVudFJlZi5jdXJyZW50KSA9PT0gbnVsbCB8fCBfZWxlbWVudFJlZiRjdXJyZW50ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZWxlbWVudFJlZiRjdXJyZW50Lm5hdGl2ZUVsZW1lbnQpIDogbnVsbCkgfHwgZmluZERPTU5vZGUod3JhcHBlclJlZi5jdXJyZW50KTtcbiAgfTtcbiAgUmVhY3QudXNlSW1wZXJhdGl2ZUhhbmRsZShyZWYsIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gZ2V0RG9tKCk7XG4gIH0pO1xuXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PSBPYnNlcnZlID09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgdmFyIHByb3BzUmVmID0gUmVhY3QudXNlUmVmKHByb3BzKTtcbiAgcHJvcHNSZWYuY3VycmVudCA9IHByb3BzO1xuXG4gIC8vIEhhbmRsZXJcbiAgdmFyIG9uSW50ZXJuYWxSZXNpemUgPSBSZWFjdC51c2VDYWxsYmFjayhmdW5jdGlvbiAodGFyZ2V0KSB7XG4gICAgdmFyIF9wcm9wc1JlZiRjdXJyZW50ID0gcHJvcHNSZWYuY3VycmVudCxcbiAgICAgIG9uUmVzaXplID0gX3Byb3BzUmVmJGN1cnJlbnQub25SZXNpemUsXG4gICAgICBkYXRhID0gX3Byb3BzUmVmJGN1cnJlbnQuZGF0YTtcbiAgICB2YXIgX3RhcmdldCRnZXRCb3VuZGluZ0NsID0gdGFyZ2V0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLFxuICAgICAgd2lkdGggPSBfdGFyZ2V0JGdldEJvdW5kaW5nQ2wud2lkdGgsXG4gICAgICBoZWlnaHQgPSBfdGFyZ2V0JGdldEJvdW5kaW5nQ2wuaGVpZ2h0O1xuICAgIHZhciBvZmZzZXRXaWR0aCA9IHRhcmdldC5vZmZzZXRXaWR0aCxcbiAgICAgIG9mZnNldEhlaWdodCA9IHRhcmdldC5vZmZzZXRIZWlnaHQ7XG5cbiAgICAvKipcbiAgICAgKiBSZXNpemUgb2JzZXJ2ZXIgdHJpZ2dlciB3aGVuIGNvbnRlbnQgc2l6ZSBjaGFuZ2VkLlxuICAgICAqIEluIG1vc3QgY2FzZSB3ZSBqdXN0IGNhcmUgYWJvdXQgZWxlbWVudCBzaXplLFxuICAgICAqIGxldCdzIHVzZSBgYm91bmRhcnlgIGluc3RlYWQgb2YgYGNvbnRlbnRSZWN0YCBoZXJlIHRvIGF2b2lkIHNoYWtpbmcuXG4gICAgICovXG4gICAgdmFyIGZpeGVkV2lkdGggPSBNYXRoLmZsb29yKHdpZHRoKTtcbiAgICB2YXIgZml4ZWRIZWlnaHQgPSBNYXRoLmZsb29yKGhlaWdodCk7XG4gICAgaWYgKHNpemVSZWYuY3VycmVudC53aWR0aCAhPT0gZml4ZWRXaWR0aCB8fCBzaXplUmVmLmN1cnJlbnQuaGVpZ2h0ICE9PSBmaXhlZEhlaWdodCB8fCBzaXplUmVmLmN1cnJlbnQub2Zmc2V0V2lkdGggIT09IG9mZnNldFdpZHRoIHx8IHNpemVSZWYuY3VycmVudC5vZmZzZXRIZWlnaHQgIT09IG9mZnNldEhlaWdodCkge1xuICAgICAgdmFyIHNpemUgPSB7XG4gICAgICAgIHdpZHRoOiBmaXhlZFdpZHRoLFxuICAgICAgICBoZWlnaHQ6IGZpeGVkSGVpZ2h0LFxuICAgICAgICBvZmZzZXRXaWR0aDogb2Zmc2V0V2lkdGgsXG4gICAgICAgIG9mZnNldEhlaWdodDogb2Zmc2V0SGVpZ2h0XG4gICAgICB9O1xuICAgICAgc2l6ZVJlZi5jdXJyZW50ID0gc2l6ZTtcblxuICAgICAgLy8gSUUgaXMgc3RyYW5nZSwgcmlnaHQ/XG4gICAgICB2YXIgbWVyZ2VkT2Zmc2V0V2lkdGggPSBvZmZzZXRXaWR0aCA9PT0gTWF0aC5yb3VuZCh3aWR0aCkgPyB3aWR0aCA6IG9mZnNldFdpZHRoO1xuICAgICAgdmFyIG1lcmdlZE9mZnNldEhlaWdodCA9IG9mZnNldEhlaWdodCA9PT0gTWF0aC5yb3VuZChoZWlnaHQpID8gaGVpZ2h0IDogb2Zmc2V0SGVpZ2h0O1xuICAgICAgdmFyIHNpemVJbmZvID0gX29iamVjdFNwcmVhZChfb2JqZWN0U3ByZWFkKHt9LCBzaXplKSwge30sIHtcbiAgICAgICAgb2Zmc2V0V2lkdGg6IG1lcmdlZE9mZnNldFdpZHRoLFxuICAgICAgICBvZmZzZXRIZWlnaHQ6IG1lcmdlZE9mZnNldEhlaWdodFxuICAgICAgfSk7XG5cbiAgICAgIC8vIExldCBjb2xsZWN0aW9uIGtub3cgd2hhdCBoYXBwZW5lZFxuICAgICAgb25Db2xsZWN0aW9uUmVzaXplID09PSBudWxsIHx8IG9uQ29sbGVjdGlvblJlc2l6ZSA9PT0gdm9pZCAwIHx8IG9uQ29sbGVjdGlvblJlc2l6ZShzaXplSW5mbywgdGFyZ2V0LCBkYXRhKTtcbiAgICAgIGlmIChvblJlc2l6ZSkge1xuICAgICAgICAvLyBkZWZlciB0aGUgY2FsbGJhY2sgYnV0IG5vdCBkZWZlciB0byBuZXh0IGZyYW1lXG4gICAgICAgIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgIG9uUmVzaXplKHNpemVJbmZvLCB0YXJnZXQpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtdKTtcblxuICAvLyBEeW5hbWljIG9ic2VydmVcbiAgUmVhY3QudXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgY3VycmVudEVsZW1lbnQgPSBnZXREb20oKTtcbiAgICBpZiAoY3VycmVudEVsZW1lbnQgJiYgIWRpc2FibGVkKSB7XG4gICAgICBvYnNlcnZlKGN1cnJlbnRFbGVtZW50LCBvbkludGVybmFsUmVzaXplKTtcbiAgICB9XG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiB1bm9ic2VydmUoY3VycmVudEVsZW1lbnQsIG9uSW50ZXJuYWxSZXNpemUpO1xuICAgIH07XG4gIH0sIFtlbGVtZW50UmVmLmN1cnJlbnQsIGRpc2FibGVkXSk7XG5cbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PSBSZW5kZXIgPT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoRG9tV3JhcHBlciwge1xuICAgIHJlZjogd3JhcHBlclJlZlxuICB9LCBjYW5SZWYgPyAvKiNfX1BVUkVfXyovUmVhY3QuY2xvbmVFbGVtZW50KG1lcmdlZENoaWxkcmVuLCB7XG4gICAgcmVmOiBtZXJnZWRSZWZcbiAgfSkgOiBtZXJnZWRDaGlsZHJlbik7XG59XG52YXIgUmVmU2luZ2xlT2JzZXJ2ZXIgPSAvKiNfX1BVUkVfXyovUmVhY3QuZm9yd2FyZFJlZihTaW5nbGVPYnNlcnZlcik7XG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICBSZWZTaW5nbGVPYnNlcnZlci5kaXNwbGF5TmFtZSA9ICdTaW5nbGVPYnNlcnZlcic7XG59XG5leHBvcnQgZGVmYXVsdCBSZWZTaW5nbGVPYnNlcnZlcjsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/rc-resize-observer/es/SingleObserver/index.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/rc-resize-observer/es/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/rc-resize-observer/es/index.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   _rs: () => (/* reexport safe */ _utils_observerUtil__WEBPACK_IMPORTED_MODULE_6__._rs),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ \"(ssr)/./node_modules/@babel/runtime/helpers/esm/extends.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(ssr)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var rc_util_es_Children_toArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rc-util/es/Children/toArray */ \"(ssr)/./node_modules/rc-util/es/Children/toArray.js\");\n/* harmony import */ var rc_util_es_warning__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rc-util/es/warning */ \"(ssr)/./node_modules/rc-util/es/warning.js\");\n/* harmony import */ var _SingleObserver__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SingleObserver */ \"(ssr)/./node_modules/rc-resize-observer/es/SingleObserver/index.js\");\n/* harmony import */ var _Collection__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Collection */ \"(ssr)/./node_modules/rc-resize-observer/es/Collection.js\");\n/* harmony import */ var _utils_observerUtil__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils/observerUtil */ \"(ssr)/./node_modules/rc-resize-observer/es/utils/observerUtil.js\");\n\n\n\n\n\n\nvar INTERNAL_PREFIX_KEY = 'rc-observer-key';\n\n\nfunction ResizeObserver(props, ref) {\n  var children = props.children;\n  var childNodes = typeof children === 'function' ? [children] : (0,rc_util_es_Children_toArray__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(children);\n  if (true) {\n    if (childNodes.length > 1) {\n      (0,rc_util_es_warning__WEBPACK_IMPORTED_MODULE_3__.warning)(false, 'Find more than one child node with `children` in ResizeObserver. Please use ResizeObserver.Collection instead.');\n    } else if (childNodes.length === 0) {\n      (0,rc_util_es_warning__WEBPACK_IMPORTED_MODULE_3__.warning)(false, '`children` of ResizeObserver is empty. Nothing is in observe.');\n    }\n  }\n  return childNodes.map(function (child, index) {\n    var key = (child === null || child === void 0 ? void 0 : child.key) || \"\".concat(INTERNAL_PREFIX_KEY, \"-\").concat(index);\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_SingleObserver__WEBPACK_IMPORTED_MODULE_4__[\"default\"], (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, props, {\n      key: key,\n      ref: index === 0 ? ref : undefined\n    }), child);\n  });\n}\nvar RefResizeObserver = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(ResizeObserver);\nif (true) {\n  RefResizeObserver.displayName = 'ResizeObserver';\n}\nRefResizeObserver.Collection = _Collection__WEBPACK_IMPORTED_MODULE_5__.Collection;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RefResizeObserver);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvcmMtcmVzaXplLW9ic2VydmVyL2VzL2luZGV4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBMEQ7QUFDM0I7QUFDbUI7QUFDTDtBQUNDO0FBQ0o7QUFDMUM7QUFDMkM7QUFFckM7QUFDTjtBQUNBO0FBQ0EsaUVBQWlFLHVFQUFPO0FBQ3hFLE1BQU0sSUFBcUM7QUFDM0M7QUFDQSxNQUFNLDJEQUFPO0FBQ2IsTUFBTTtBQUNOLE1BQU0sMkRBQU87QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixnREFBbUIsQ0FBQyx1REFBYyxFQUFFLDhFQUFRLEdBQUc7QUFDdkU7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQSxxQ0FBcUMsNkNBQWdCO0FBQ3JELElBQUksSUFBcUM7QUFDekM7QUFDQTtBQUNBLCtCQUErQixtREFBVTtBQUN6QyxpRUFBZSxpQkFBaUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pbnZlbnRvcnktc29mdHdhcmUvLi9ub2RlX21vZHVsZXMvcmMtcmVzaXplLW9ic2VydmVyL2VzL2luZGV4LmpzPzQxMmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IF9leHRlbmRzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzXCI7XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgdG9BcnJheSBmcm9tIFwicmMtdXRpbC9lcy9DaGlsZHJlbi90b0FycmF5XCI7XG5pbXBvcnQgeyB3YXJuaW5nIH0gZnJvbSBcInJjLXV0aWwvZXMvd2FybmluZ1wiO1xuaW1wb3J0IFNpbmdsZU9ic2VydmVyIGZyb20gXCIuL1NpbmdsZU9ic2VydmVyXCI7XG5pbXBvcnQgeyBDb2xsZWN0aW9uIH0gZnJvbSBcIi4vQ29sbGVjdGlvblwiO1xudmFyIElOVEVSTkFMX1BSRUZJWF9LRVkgPSAncmMtb2JzZXJ2ZXIta2V5JztcbmltcG9ydCB7IF9ycyB9IGZyb20gXCIuL3V0aWxzL29ic2VydmVyVXRpbFwiO1xuZXhwb3J0IHsgLyoqIEBwcml2YXRlIFRlc3Qgb25seSBmb3IgbW9jayB0cmlnZ2VyIHJlc2l6ZSBldmVudCAqL1xuX3JzIH07XG5mdW5jdGlvbiBSZXNpemVPYnNlcnZlcihwcm9wcywgcmVmKSB7XG4gIHZhciBjaGlsZHJlbiA9IHByb3BzLmNoaWxkcmVuO1xuICB2YXIgY2hpbGROb2RlcyA9IHR5cGVvZiBjaGlsZHJlbiA9PT0gJ2Z1bmN0aW9uJyA/IFtjaGlsZHJlbl0gOiB0b0FycmF5KGNoaWxkcmVuKTtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpZiAoY2hpbGROb2Rlcy5sZW5ndGggPiAxKSB7XG4gICAgICB3YXJuaW5nKGZhbHNlLCAnRmluZCBtb3JlIHRoYW4gb25lIGNoaWxkIG5vZGUgd2l0aCBgY2hpbGRyZW5gIGluIFJlc2l6ZU9ic2VydmVyLiBQbGVhc2UgdXNlIFJlc2l6ZU9ic2VydmVyLkNvbGxlY3Rpb24gaW5zdGVhZC4nKTtcbiAgICB9IGVsc2UgaWYgKGNoaWxkTm9kZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICB3YXJuaW5nKGZhbHNlLCAnYGNoaWxkcmVuYCBvZiBSZXNpemVPYnNlcnZlciBpcyBlbXB0eS4gTm90aGluZyBpcyBpbiBvYnNlcnZlLicpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gY2hpbGROb2Rlcy5tYXAoZnVuY3Rpb24gKGNoaWxkLCBpbmRleCkge1xuICAgIHZhciBrZXkgPSAoY2hpbGQgPT09IG51bGwgfHwgY2hpbGQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGNoaWxkLmtleSkgfHwgXCJcIi5jb25jYXQoSU5URVJOQUxfUFJFRklYX0tFWSwgXCItXCIpLmNvbmNhdChpbmRleCk7XG4gICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFNpbmdsZU9ic2VydmVyLCBfZXh0ZW5kcyh7fSwgcHJvcHMsIHtcbiAgICAgIGtleToga2V5LFxuICAgICAgcmVmOiBpbmRleCA9PT0gMCA/IHJlZiA6IHVuZGVmaW5lZFxuICAgIH0pLCBjaGlsZCk7XG4gIH0pO1xufVxudmFyIFJlZlJlc2l6ZU9ic2VydmVyID0gLyojX19QVVJFX18qL1JlYWN0LmZvcndhcmRSZWYoUmVzaXplT2JzZXJ2ZXIpO1xuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgUmVmUmVzaXplT2JzZXJ2ZXIuZGlzcGxheU5hbWUgPSAnUmVzaXplT2JzZXJ2ZXInO1xufVxuUmVmUmVzaXplT2JzZXJ2ZXIuQ29sbGVjdGlvbiA9IENvbGxlY3Rpb247XG5leHBvcnQgZGVmYXVsdCBSZWZSZXNpemVPYnNlcnZlcjsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/rc-resize-observer/es/index.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/rc-resize-observer/es/utils/observerUtil.js":
/*!******************************************************************!*\
  !*** ./node_modules/rc-resize-observer/es/utils/observerUtil.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   _el: () => (/* binding */ _el),\n/* harmony export */   _rs: () => (/* binding */ _rs),\n/* harmony export */   observe: () => (/* binding */ observe),\n/* harmony export */   unobserve: () => (/* binding */ unobserve)\n/* harmony export */ });\n/* harmony import */ var resize_observer_polyfill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! resize-observer-polyfill */ \"(ssr)/./node_modules/resize-observer-polyfill/dist/ResizeObserver.es.js\");\n\n// =============================== Const ===============================\nvar elementListeners = new Map();\nfunction onResize(entities) {\n  entities.forEach(function (entity) {\n    var _elementListeners$get;\n    var target = entity.target;\n    (_elementListeners$get = elementListeners.get(target)) === null || _elementListeners$get === void 0 || _elementListeners$get.forEach(function (listener) {\n      return listener(target);\n    });\n  });\n}\n\n// Note: ResizeObserver polyfill not support option to measure border-box resize\nvar resizeObserver = new resize_observer_polyfill__WEBPACK_IMPORTED_MODULE_0__[\"default\"](onResize);\n\n// Dev env only\nvar _el =  true ? elementListeners : 0; // eslint-disable-line\nvar _rs =  true ? onResize : 0; // eslint-disable-line\n\n// ============================== Observe ==============================\nfunction observe(element, callback) {\n  if (!elementListeners.has(element)) {\n    elementListeners.set(element, new Set());\n    resizeObserver.observe(element);\n  }\n  elementListeners.get(element).add(callback);\n}\nfunction unobserve(element, callback) {\n  if (elementListeners.has(element)) {\n    elementListeners.get(element).delete(callback);\n    if (!elementListeners.get(element).size) {\n      resizeObserver.unobserve(element);\n      elementListeners.delete(element);\n    }\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvcmMtcmVzaXplLW9ic2VydmVyL2VzL3V0aWxzL29ic2VydmVyVXRpbC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFzRDtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDs7QUFFQTtBQUNBLHlCQUF5QixnRUFBYzs7QUFFdkM7QUFDTyxVQUFVLEtBQXFDLHNCQUFzQixDQUFJLEVBQUU7QUFDM0UsVUFBVSxLQUFxQyxjQUFjLENBQUksRUFBRTs7QUFFMUU7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2ludmVudG9yeS1zb2Z0d2FyZS8uL25vZGVfbW9kdWxlcy9yYy1yZXNpemUtb2JzZXJ2ZXIvZXMvdXRpbHMvb2JzZXJ2ZXJVdGlsLmpzPzMwZWYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlc2l6ZU9ic2VydmVyIGZyb20gJ3Jlc2l6ZS1vYnNlcnZlci1wb2x5ZmlsbCc7XG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09IENvbnN0ID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbnZhciBlbGVtZW50TGlzdGVuZXJzID0gbmV3IE1hcCgpO1xuZnVuY3Rpb24gb25SZXNpemUoZW50aXRpZXMpIHtcbiAgZW50aXRpZXMuZm9yRWFjaChmdW5jdGlvbiAoZW50aXR5KSB7XG4gICAgdmFyIF9lbGVtZW50TGlzdGVuZXJzJGdldDtcbiAgICB2YXIgdGFyZ2V0ID0gZW50aXR5LnRhcmdldDtcbiAgICAoX2VsZW1lbnRMaXN0ZW5lcnMkZ2V0ID0gZWxlbWVudExpc3RlbmVycy5nZXQodGFyZ2V0KSkgPT09IG51bGwgfHwgX2VsZW1lbnRMaXN0ZW5lcnMkZ2V0ID09PSB2b2lkIDAgfHwgX2VsZW1lbnRMaXN0ZW5lcnMkZ2V0LmZvckVhY2goZnVuY3Rpb24gKGxpc3RlbmVyKSB7XG4gICAgICByZXR1cm4gbGlzdGVuZXIodGFyZ2V0KTtcbiAgICB9KTtcbiAgfSk7XG59XG5cbi8vIE5vdGU6IFJlc2l6ZU9ic2VydmVyIHBvbHlmaWxsIG5vdCBzdXBwb3J0IG9wdGlvbiB0byBtZWFzdXJlIGJvcmRlci1ib3ggcmVzaXplXG52YXIgcmVzaXplT2JzZXJ2ZXIgPSBuZXcgUmVzaXplT2JzZXJ2ZXIob25SZXNpemUpO1xuXG4vLyBEZXYgZW52IG9ubHlcbmV4cG9ydCB2YXIgX2VsID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyA/IGVsZW1lbnRMaXN0ZW5lcnMgOiBudWxsOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG5leHBvcnQgdmFyIF9ycyA9IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgPyBvblJlc2l6ZSA6IG51bGw7IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09IE9ic2VydmUgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5leHBvcnQgZnVuY3Rpb24gb2JzZXJ2ZShlbGVtZW50LCBjYWxsYmFjaykge1xuICBpZiAoIWVsZW1lbnRMaXN0ZW5lcnMuaGFzKGVsZW1lbnQpKSB7XG4gICAgZWxlbWVudExpc3RlbmVycy5zZXQoZWxlbWVudCwgbmV3IFNldCgpKTtcbiAgICByZXNpemVPYnNlcnZlci5vYnNlcnZlKGVsZW1lbnQpO1xuICB9XG4gIGVsZW1lbnRMaXN0ZW5lcnMuZ2V0KGVsZW1lbnQpLmFkZChjYWxsYmFjayk7XG59XG5leHBvcnQgZnVuY3Rpb24gdW5vYnNlcnZlKGVsZW1lbnQsIGNhbGxiYWNrKSB7XG4gIGlmIChlbGVtZW50TGlzdGVuZXJzLmhhcyhlbGVtZW50KSkge1xuICAgIGVsZW1lbnRMaXN0ZW5lcnMuZ2V0KGVsZW1lbnQpLmRlbGV0ZShjYWxsYmFjayk7XG4gICAgaWYgKCFlbGVtZW50TGlzdGVuZXJzLmdldChlbGVtZW50KS5zaXplKSB7XG4gICAgICByZXNpemVPYnNlcnZlci51bm9ic2VydmUoZWxlbWVudCk7XG4gICAgICBlbGVtZW50TGlzdGVuZXJzLmRlbGV0ZShlbGVtZW50KTtcbiAgICB9XG4gIH1cbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/rc-resize-observer/es/utils/observerUtil.js\n");

/***/ })

};
;
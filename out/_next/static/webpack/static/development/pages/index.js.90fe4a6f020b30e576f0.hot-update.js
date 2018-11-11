webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index/components/HomepageHeroSection.js":
/*!*******************************************************!*\
  !*** ./pages/index/components/HomepageHeroSection.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return HomepageHero; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var grommet_components_Hero__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! grommet/components/Hero */ "./node_modules/grommet/components/Hero.js");
/* harmony import */ var grommet_components_Hero__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(grommet_components_Hero__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var grommet_components_Box__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! grommet/components/Box */ "./node_modules/grommet/components/Box.js");
/* harmony import */ var grommet_components_Box__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(grommet_components_Box__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var grommet_components_Headline__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! grommet/components/Headline */ "./node_modules/grommet/components/Headline.js");
/* harmony import */ var grommet_components_Headline__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(grommet_components_Headline__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var grommet_components_Image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! grommet/components/Image */ "./node_modules/grommet/components/Image.js");
/* harmony import */ var grommet_components_Image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(grommet_components_Image__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/Users/skanodia/dev/bread-n-butter/pages/index/components/HomepageHeroSection.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }







var HomepageHero =
/*#__PURE__*/
function (_Component) {
  _inherits(HomepageHero, _Component);

  function HomepageHero() {
    _classCallCheck(this, HomepageHero);

    return _possibleConstructorReturn(this, _getPrototypeOf(HomepageHero).apply(this, arguments));
  }

  _createClass(HomepageHero, [{
    key: "render",
    value: function render() {
      var hero = this.props.hero;
      var heroImg = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(grommet_components_Image__WEBPACK_IMPORTED_MODULE_4___default.a, {
        src: hero.backgroundImage.url,
        fit: "cover",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        },
        __self: this
      });
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(grommet_components_Hero__WEBPACK_IMPORTED_MODULE_1___default.a, {
        background: heroImg,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(grommet_components_Box__WEBPACK_IMPORTED_MODULE_2___default.a, {
        direction: "row",
        justify: "center",
        align: "center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(grommet_components_Box__WEBPACK_IMPORTED_MODULE_2___default.a, {
        basis: "1/2",
        align: "start",
        pad: "medium",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(grommet_components_Headline__WEBPACK_IMPORTED_MODULE_3___default.a, {
        size: "medium",
        strong: true,
        className: "homepage__hero-text",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }, hero.title)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(grommet_components_Headline__WEBPACK_IMPORTED_MODULE_3___default.a, {
        strong: true,
        size: "small",
        className: "homepage__hero-text",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }, hero.subTitle))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(grommet_components_Box__WEBPACK_IMPORTED_MODULE_2___default.a, {
        basis: "1/2",
        align: "start",
        pad: "medium",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("iframe", {
        src: hero.videoUrl,
        width: "100%",
        height: "360",
        frameBorder: "0",
        allowFullScreen: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }))));
    }
  }]);

  return HomepageHero;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);


    (function (Component, route) {
      if(!Component) return
      if (false) {}
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/index/components/HomepageHeroSection")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=index.js.90fe4a6f020b30e576f0.hot-update.js.map
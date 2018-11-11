webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index/components/TeamSection.js":
/*!***********************************************!*\
  !*** ./pages/index/components/TeamSection.js ***!
  \***********************************************/
/*! exports provided: TeamSection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamSection", function() { return TeamSection; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var grommet_components_Section__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! grommet/components/Section */ "./node_modules/grommet/components/Section.js");
/* harmony import */ var grommet_components_Section__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(grommet_components_Section__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var grommet_components_Heading__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! grommet/components/Heading */ "./node_modules/grommet/components/Heading.js");
/* harmony import */ var grommet_components_Heading__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(grommet_components_Heading__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var grommet_components_Tiles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! grommet/components/Tiles */ "./node_modules/grommet/components/Tiles.js");
/* harmony import */ var grommet_components_Tiles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(grommet_components_Tiles__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var grommet_components_Tile__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! grommet/components/Tile */ "./node_modules/grommet/components/Tile.js");
/* harmony import */ var grommet_components_Tile__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(grommet_components_Tile__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var grommet_components_Image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! grommet/components/Image */ "./node_modules/grommet/components/Image.js");
/* harmony import */ var grommet_components_Image__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(grommet_components_Image__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "/Users/skanodia/dev/bread-n-butter/pages/index/components/TeamSection.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }







var TeamSection =
/*#__PURE__*/
function (_Component) {
  _inherits(TeamSection, _Component);

  function TeamSection() {
    _classCallCheck(this, TeamSection);

    return _possibleConstructorReturn(this, _getPrototypeOf(TeamSection).apply(this, arguments));
  }

  _createClass(TeamSection, [{
    key: "render",
    value: function render() {
      var team = this.props.team;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(grommet_components_Section__WEBPACK_IMPORTED_MODULE_1___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(grommet_components_Heading__WEBPACK_IMPORTED_MODULE_2___default.a, {
        tag: "h2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        },
        __self: this
      }, team.title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(grommet_components_Tiles__WEBPACK_IMPORTED_MODULE_3___default.a, {
        fill: false,
        flush: false,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        },
        __self: this
      }, team.members.map(function (member) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(grommet_components_Tile__WEBPACK_IMPORTED_MODULE_4___default.a, {
          key: member.name + member.photo.url,
          basis: "1/3",
          alignSelf: "start",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 20
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(grommet_components_Image__WEBPACK_IMPORTED_MODULE_5___default.a, {
          src: member.photo.url,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 21
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(grommet_components_Heading__WEBPACK_IMPORTED_MODULE_2___default.a, {
          tag: "h4",
          strong: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 22
          },
          __self: this
        }, member.name));
      })));
    }
  }]);

  return TeamSection;
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/index/components/TeamSection")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=index.js.db6f001fafdeef1a9c8c.hot-update.js.map
webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index/index.js":
/*!******************************!*\
  !*** ./pages/index/index.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/Layout */ "./components/Layout.js");
/* harmony import */ var _components_TeamSection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/TeamSection */ "./pages/index/components/TeamSection.js");
/* harmony import */ var _components_TestimonialsSection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/TestimonialsSection */ "./pages/index/components/TestimonialsSection.js");
/* harmony import */ var _components_HowItWorksSection__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/HowItWorksSection */ "./pages/index/components/HowItWorksSection.js");
/* harmony import */ var _components_HomepageHeroSection__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/HomepageHeroSection */ "./pages/index/components/HomepageHeroSection.js");
/* harmony import */ var _utils_contentful__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/contentful */ "./utils/contentful.js");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./index.scss */ "./pages/index/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_7__);
var _jsxFileName = "/Users/skanodia/dev/bread-n-butter/pages/index/index.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









var homepage = {
  hero: {
    background: 'https://images.unsplash.com/photo-1509744445554-d5cdda81d0bd?ixlib=rb-0.3.5&s=9121f5af1a245817863c9a64ea71b1f5&auto=format&fit=crop&w=2850&q=80',
    title: 'Join us in reducing food waste',
    subtext: 'Here\'s a two line text that explains things better',
    video: 'https://player.vimeo.com/video/97589595?color=ffffff&title=0&byline=0&portrait=0'
  },
  howItWorks: {
    title: 'How it works',
    steps: [{
      img: 'https://image.flaticon.com/icons/svg/149/149444.svg',
      label: 'Step 1',
      title: 'Do something',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    }, {
      img: 'https://image.flaticon.com/icons/svg/149/149444.svg',
      label: 'Step 2',
      title: 'Do something more',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    }, {
      img: 'https://image.flaticon.com/icons/svg/149/149444.svg',
      label: 'Step 3',
      title: 'Do even more',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    }]
  },
  team: {
    title: 'The team',
    members: [{
      name: 'Name 1',
      photo: 'https://tinyfac.es/data/avatars/475605E3-69C5-4D2B-8727-61B7BB8C4699-500w.jpeg'
    }, {
      name: 'Name 2',
      photo: 'https://d3iw72m71ie81c.cloudfront.net/male-5.jpg'
    }, {
      name: 'Name 3',
      photo: 'https://d3iw72m71ie81c.cloudfront.net/male-77.jpg'
    }, {
      name: 'Name 4',
      photo: 'https://d3iw72m71ie81c.cloudfront.net/female-20.jpeg'
    }]
  },
  testimonials: {
    title: 'What others have to say...',
    items: [{
      img: 'https://image.flaticon.com/icons/svg/149/149444.svg',
      name: 'https://image.flaticon.com/icons/svg/149/149444.svg',
      designation: 'Step 1',
      review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    }, {
      img: 'https://image.flaticon.com/icons/svg/149/149444.svg',
      name: 'Step 2',
      designation: 'Do something more',
      review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    }, {
      img: 'https://image.flaticon.com/icons/svg/149/149444.svg',
      name: 'Step 3',
      designation: 'Do something more',
      review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    }]
  }
};

var Index =
/*#__PURE__*/
function (_Component) {
  _inherits(Index, _Component);

  function Index() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Index);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Index)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      links: [],
      hero: {
        backgroundImage: {}
      },
      howItWorksSection: {
        steps: []
      },
      teamSection: {
        members: []
      }
    });

    return _this;
  }

  _createClass(Index, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      Promise.all([Object(_utils_contentful__WEBPACK_IMPORTED_MODULE_6__["getHero"])(), Object(_utils_contentful__WEBPACK_IMPORTED_MODULE_6__["getHowItWorksSection"])(), Object(_utils_contentful__WEBPACK_IMPORTED_MODULE_6__["getTeamSection"])()]).then(function (result) {
        var _result = _slicedToArray(result, 3),
            hero = _result[0],
            howItWorksSection = _result[1],
            teamSection = _result[2];

        _this2.setState({
          hero: hero,
          howItWorksSection: howItWorksSection,
          teamSection: teamSection
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
          hero = _this$state.hero,
          howItWorksSection = _this$state.howItWorksSection,
          teamSection = _this$state.teamSection;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_HomepageHeroSection__WEBPACK_IMPORTED_MODULE_5__["HomepageHero"], {
        hero: hero,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_HowItWorksSection__WEBPACK_IMPORTED_MODULE_4__["HowItWorksSection"], {
        howItWorks: howItWorksSection,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_TeamSection__WEBPACK_IMPORTED_MODULE_2__["TeamSection"], {
        team: teamSection,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_TestimonialsSection__WEBPACK_IMPORTED_MODULE_3__["TestimonialsSection"], {
        testimonials: homepage.testimonials,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120
        },
        __self: this
      }));
    }
  }]);

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Index);
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/index")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=index.js.9e3888908de10109aaa5.hot-update.js.map
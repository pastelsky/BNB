webpackHotUpdate("static/development/pages/index.js",{

/***/ "./utils/contentful.js":
/*!*****************************!*\
  !*** ./utils/contentful.js ***!
  \*****************************/
/*! exports provided: getHomepageLinks, getHero, getHowItWorksSection, getTeamSection, getTestimonialsSection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getHomepageLinks", function() { return getHomepageLinks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getHero", function() { return getHero; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getHowItWorksSection", function() { return getHowItWorksSection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTeamSection", function() { return getTeamSection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTestimonialsSection", function() { return getTestimonialsSection; });
/* harmony import */ var contentful__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! contentful */ "./node_modules/contentful/dist/es-modules/contentful.js");
/* harmony import */ var contentful_resolve_response__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! contentful-resolve-response */ "./node_modules/contentful-resolve-response/dist/esm/index.js");
/* harmony import */ var _contentful_rich_text_html_renderer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @contentful/rich-text-html-renderer */ "./node_modules/@contentful/rich-text-html-renderer/dist/rich-text-html-renderer.es5.js");
/* harmony import */ var _contentful_rich_text_html_renderer__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_contentful_rich_text_html_renderer__WEBPACK_IMPORTED_MODULE_2__);
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var client = contentful__WEBPACK_IMPORTED_MODULE_0__["createClient"]({
  space: 'codv21t7zkss',
  accessToken: '35582c3e1386d1379d3f406b801982af4561e94702a7a1b17c2ea17118bc80e4'
});

function getEntriesByType(type) {
  return client.getEntries({
    content_type: type
  }).then(contentful_resolve_response__WEBPACK_IMPORTED_MODULE_1__["default"]).then(function (res) {
    return res.map(function (item) {
      return item.fields;
    });
  }).catch(function (err) {
    return console.error(err);
  });
}

function getHomepageLinks() {
  return getEntriesByType('headerLinks');
}
function getHero() {
  return getEntriesByType('hero').then(function (res) {
    return _objectSpread({}, res[0], {
      backgroundImage: res[0].backgroundImage.fields.file
    });
  });
}
function getHowItWorksSection() {
  return getEntriesByType('howItWorksSection').then(function (res) {
    return _objectSpread({}, res[0], {
      steps: res[0].steps.map(function (step) {
        return step.fields;
      }).map(function (step) {
        return _objectSpread({}, step, {
          photo: step.photo.fields.file,
          description: Object(_contentful_rich_text_html_renderer__WEBPACK_IMPORTED_MODULE_2__["documentToHtmlString"])(step.description)
        });
      })
    });
  });
}
function getTeamSection() {
  return getEntriesByType('teamSection').then(function (res) {
    return _objectSpread({}, res[0], {
      members: res[0].members.map(function (member) {
        return member.fields;
      }).map(function (member) {
        return _objectSpread({}, member, {
          photo: member.photo.fields.file
        });
      })
    });
  });
}
function getTestimonialsSection() {
  return getEntriesByType('testimonials').then(function (res) {
    return _objectSpread({}, res[0], {
      testimonials: res[0].testimonials.map(function (t) {
        return t.fields;
      })
    });
  });
}
getTestimonialsSection().then(console.log.bind(console));

/***/ })

})
//# sourceMappingURL=index.js.34338a4e2c6e84aaebbd.hot-update.js.map
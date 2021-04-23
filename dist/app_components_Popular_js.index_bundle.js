/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkgithub_battle"] = self["webpackChunkgithub_battle"] || []).push([["app_components_Popular_js"],{

/***/ "./app/components/Popular.js":
/*!***********************************!*\
  !*** ./app/components/Popular.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Popular)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _utils_fetchPopularRepos__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/fetchPopularRepos */ \"./app/utils/fetchPopularRepos.js\");\n/* harmony import */ var _CardBlock__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CardBlock */ \"./app/components/CardBlock.js\");\n/* harmony import */ var _Loading__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Loading */ \"./app/components/Loading.js\");\n/* harmony import */ var _Tooltip__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Tooltip */ \"./app/components/Tooltip.js\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\n\n\n\n\n\n //import { FaUser, FaStar, FaCodeBranch, FaExclamationTriangle } from 'react-icons/fa'\n\nfunction LanguageList(_ref) {\n  var selected = _ref.selected,\n      onUpadateHandler = _ref.onUpadateHandler;\n  var languages = ['All', 'JavaScript', 'Java', 'Ruby', 'CSS', 'Python'];\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"ul\", {\n    className: \"flex-center\"\n  }, languages.map(function (lng) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"li\", {\n      key: lng\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"button\", {\n      className: \"btn-clear nav-link\",\n      style: lng === selected ? {\n        color: 'red'\n      } : null,\n      onClick: function onClick() {\n        return onUpadateHandler(lng);\n      }\n    }, lng));\n  }));\n}\n\nLanguageList.propTypes = {\n  selected: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string.isRequired),\n  onUpadateHandler: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func.isRequired)\n};\n\nfunction GridViewPopularRepos(_ref2) {\n  var repos = _ref2.repos;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"ul\", {\n    className: \"grid space-around\"\n  }, repos.map(function (repo, i) {\n    var id = repo.id,\n        name = repo.name,\n        owner = repo.owner,\n        html_url = repo.html_url,\n        stargazers_count = repo.stargazers_count,\n        forks = repo.forks,\n        open_issues = repo.open_issues;\n    var login = owner.login,\n        avatar_url = owner.avatar_url;\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"li\", {\n      className: \"prod-cards bg-light\",\n      key: id\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_CardBlock__WEBPACK_IMPORTED_MODULE_3__.default, {\n      header: \"#\".concat(i + 1),\n      avatar: avatar_url,\n      href: html_url,\n      username: login\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"ul\", {\n      className: \"card-list\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"li\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Tooltip__WEBPACK_IMPORTED_MODULE_5__.default, {\n      text: \"Github username\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"a\", {\n      href: \"https://github.com/\".concat(login)\n    }, login))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"li\", null, stargazers_count.toLocaleString(), \" stars\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"li\", null, forks.toLocaleString(), \" forks\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"li\", null, open_issues.toLocaleString(), \" open\"))));\n  }));\n}\n\nGridViewPopularRepos.propTypes = {\n  repos: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().array.isRequired)\n};\n\nvar Popular = /*#__PURE__*/function (_React$Component) {\n  _inherits(Popular, _React$Component);\n\n  var _super = _createSuper(Popular);\n\n  function Popular(props) {\n    var _this;\n\n    _classCallCheck(this, Popular);\n\n    _this = _super.call(this, props);\n    _this.state = {\n      selectlng: 'All',\n      error: null,\n      repos: {}\n    };\n    _this.updateLng = _this.updateLng.bind(_assertThisInitialized(_this));\n    _this.isLoading = _this.isLoading.bind(_assertThisInitialized(_this));\n    return _this;\n  }\n\n  _createClass(Popular, [{\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      this.updateLng(this.state.selectlng);\n    }\n  }, {\n    key: \"updateLng\",\n    value: function updateLng(selectlng) {\n      var _this2 = this;\n\n      this.setState({\n        selectlng: selectlng,\n        error: null\n      });\n      (0,_utils_fetchPopularRepos__WEBPACK_IMPORTED_MODULE_2__.fetchPopularRepos)(this.state.selectlng).then(function (data) {\n        _this2.setState(function (_ref3) {\n          var repos = _ref3.repos;\n          return {\n            repos: _defineProperty({\n              repos: repos\n            }, selectlng, data)\n          };\n        });\n      })[\"catch\"](function (err) {\n        _this2.setState({\n          error: err\n        });\n      });\n    }\n  }, {\n    key: \"isLoading\",\n    value: function isLoading() {\n      var _this$state = this.state,\n          selectlng = _this$state.selectlng,\n          repos = _this$state.repos,\n          error = _this$state.error;\n      return !repos[selectlng] && this.state.error === null;\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var selectlng = this.state.selectlng;\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(LanguageList, {\n        selected: selectlng,\n        onUpadateHandler: this.updateLng\n      }), this.isLoading() && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"p\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Loading__WEBPACK_IMPORTED_MODULE_4__.default, null)), this.state.error && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"p\", null, \"Error while fetching the repos\"), this.state.repos[this.state.selectlng] && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(GridViewPopularRepos, {\n        repos: this.state.repos[selectlng]\n      }));\n    }\n  }]);\n\n  return Popular;\n}(react__WEBPACK_IMPORTED_MODULE_0__.Component);\n\n\n\n//# sourceURL=webpack://github-battle/./app/components/Popular.js?");

/***/ })

}]);
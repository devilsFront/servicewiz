/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./assets/scripts/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/scripts/app.js":
/*!*******************************!*\
  !*** ./assets/scripts/app.js ***!
  \*******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_client_stories__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/client-stories */ "./assets/scripts/components/client-stories.js");
/* harmony import */ var _components_client_stories__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_components_client_stories__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_expert_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/expert-data */ "./assets/scripts/components/expert-data.js");
/* harmony import */ var _components_expert_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_components_expert_data__WEBPACK_IMPORTED_MODULE_1__);



/***/ }),

/***/ "./assets/scripts/components/client-stories.js":
/*!*****************************************************!*\
  !*** ./assets/scripts/components/client-stories.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var clientStories = document.querySelector('[data-element="client-stories"]');
if (clientStories) setTimeout(clientStoriesInit, 0);

function clientStoriesInit() {
  var clientStoriesItemArray = document.querySelectorAll('[data-element="client-stories__item"]');
  var clientStoriesSlider = document.querySelector('[data-element="client-stories__slider"]');
  var clientStoriesNext = document.querySelector('[data-element="client-stories__btn_next"]');
  var clientStoriesPrev = document.querySelector('[data-element="client-stories__btn_prev"]');
  var clientStoriesCurrent = document.querySelector('[data-element="client-stories__current"]');
  clientStoriesNext.addEventListener("click", nextSlide);
  clientStoriesPrev.addEventListener("click", prevSlide);
  var activeIndex = 0;

  function nextSlide() {
    if (!clientStoriesNext.classList.contains("client-stories__btn_next-active")) return;
    clientStoriesPrev.classList.add("client-stories__btn_prev-active");
    var oldActiveSlide = clientStoriesSlider.getElementsByClassName("client-stories__item_active")[0];
    oldActiveSlide.classList.remove("client-stories__item_active");
    activeIndex = +activeIndex + 1;

    if (activeIndex === clientStoriesItemArray.length - 1) {
      clientStoriesNext.classList.remove("client-stories__btn_next-active");
    }

    clientStoriesItemArray[activeIndex].classList.add("client-stories__item_active");
    refreshCurrentSlideNumber();
  }

  function prevSlide() {
    if (!clientStoriesPrev.classList.contains("client-stories__btn_prev-active")) return;
    clientStoriesNext.classList.add("client-stories__btn_next-active");
    var oldActiveSlide = clientStoriesSlider.getElementsByClassName("client-stories__item_active")[0];
    oldActiveSlide.classList.remove("client-stories__item_active");
    activeIndex = +activeIndex - 1;

    if (activeIndex === 0) {
      clientStoriesPrev.classList.remove("client-stories__btn_prev-active");
    }

    clientStoriesItemArray[activeIndex].classList.add("client-stories__item_active");
    refreshCurrentSlideNumber();
  }

  function refreshCurrentButtons() {
    if (activeIndex === 0) {
      clientStoriesPrev.disabled;
    }
  }

  function refreshCurrentSlideNumber() {
    clientStoriesCurrent.innerHTML = +activeIndex + 1;
  }
}

/***/ }),

/***/ "./assets/scripts/components/expert-data.js":
/*!**************************************************!*\
  !*** ./assets/scripts/components/expert-data.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var expertData = document.querySelector('[data-element="expert-data"]');
if (expertData) setTimeout(expertDataInit, 0);

function expertDataInit() {
  var slider = expertData.querySelector('[data-element="expert-data__slider"]');
  var sliderItems = slider.querySelectorAll('[data-element="expert-data__slider-item"]');
  var nav = expertData.querySelector('[data-element="expert-data__nav"]');
  var navItems = nav.querySelectorAll('[data-element="expert-data__nav-item"]');

  for (var i = 0; i < navItems.length; i++) {
    navItems[i].addEventListener("click", checkoutNavItem);
  }

  function checkoutNavItem() {
    var oldActiveItem = nav.getElementsByClassName("expert-data__nav-item_active")[0];
    oldActiveItem.classList.remove("expert-data__nav-item_active");
    this.classList.add("expert-data__nav-item_active");
    var index = this.getAttribute("data-index");
    checkoutSlide(index);
  }

  function checkoutSlide(index) {
    var oldActiveSlide = slider.getElementsByClassName("expert-data__slider-item_active")[0];
    oldActiveSlide.classList.remove("expert-data__slider-item_active");
    sliderItems[index].classList.add("expert-data__slider-item_active");
  }
}

/***/ })

/******/ });
//# sourceMappingURL=app.js.map
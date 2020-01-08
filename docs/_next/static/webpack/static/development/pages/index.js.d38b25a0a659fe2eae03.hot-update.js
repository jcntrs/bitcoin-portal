webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_MasterPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/MasterPage */ "./components/MasterPage.js");
/* harmony import */ var _components_BitcoinPrice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/BitcoinPrice */ "./components/BitcoinPrice.js");
/* harmony import */ var _components_BitcoinNews__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/BitcoinNews */ "./components/BitcoinNews.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/next/dist/build/polyfills/fetch/index.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5__);

var _jsxFileName = "D:\\Learning\\React\\39.-Bitcoin-Portal\\12.-Upload-To-Github\\bitcoin-portal\\pages\\index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





var Index = function Index(_ref) {
  var bitcoinPrice = _ref.bitcoinPrice,
      bitcoinNews = _ref.bitcoinNews;
  return __jsx(_components_MasterPage__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, __jsx("div", {
    className: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, __jsx("div", {
    className: "col-12",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, __jsx("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, "Precio del Bitcoin"), __jsx(_components_BitcoinPrice__WEBPACK_IMPORTED_MODULE_3__["default"], {
    bitcoinPrice: bitcoinPrice,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  })), __jsx("div", {
    className: "col-md-12",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, __jsx("h2", {
    className: "mb-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, "Noticias sobre Bitcoin"), __jsx(_components_BitcoinNews__WEBPACK_IMPORTED_MODULE_4__["default"], {
    bitcoinNews: bitcoinNews,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }))));
};

Index.getInitialProps = function _callee() {
  var date, from, price, news, priceResponse, newsResponse;
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          date = new Date();
          from = "".concat(date.getFullYear(), "-").concat(date.getMonth() + 1, "-").concat(date.getDate());
          _context.next = 4;
          return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5___default()('https://api.coinmarketcap.com/v2/ticker/1/'));

        case 4:
          price = _context.sent;
          _context.next = 7;
          return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5___default()("https://newsapi.org/v2/everything?q=bitcoin&from=".concat(from, "&sortBy=publishedAt&apiKey=0be8624741a24c83aacfec3de6653319&language=es")));

        case 7:
          news = _context.sent;
          _context.next = 10;
          return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(price.json());

        case 10:
          priceResponse = _context.sent;
          _context.next = 13;
          return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(news.json());

        case 13:
          newsResponse = _context.sent;
          return _context.abrupt("return", {
            bitcoinPrice: priceResponse.data.quotes.USD,
            bitcoinNews: newsResponse.articles
          });

        case 15:
        case "end":
          return _context.stop();
      }
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.d38b25a0a659fe2eae03.hot-update.js.map
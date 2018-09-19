webpackJsonp([0],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var listingsData = [{
  address: '3345 American Yams Rd.',
  city: 'Eaglewood',
  state: 'CA',
  rooms: 4,
  price: 455000,
  floorSpace: 2000,
  extras: ['elevator', 'basketball court'],
  homeType: 'Apartment',
  image: 'http://www.billgriffinrealestate.com/wp-content/uploads/Luxury-Contemporary-Homes-in-Dallas-1-1080x675.jpg'
}, {
  address: '9832 James Logan Cir.',
  city: 'Fremont',
  state: 'CA',
  rooms: 3,
  price: 1055000,
  floorSpace: 2500,
  extras: ['basketball court', 'swimming pool'],
  homeType: 'house',
  image: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=350'
}, {
  address: '5683 Lake Shermand dr.',
  city: 'Sacramento',
  state: 'CA',
  rooms: 5,
  price: 855000,
  floorSpace: 4500,
  extras: ['bowling alley', 'Billard'],
  homeType: 'house',
  image: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
}, {
  address: '2398 Ashley way.',
  city: 'Oakland',
  state: 'CA',
  rooms: 2,
  price: 955000,
  floorSpace: 2800,
  extras: ['theater room', 'skate park backyard'],
  homeType: 'Condo',
  image: 'https://images.pexels.com/photos/273683/pexels-photo-273683.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
}, {
  address: '1147 HummingBeach Cir.',
  city: 'San Rafael',
  state: 'CA',
  rooms: 4,
  price: 565000,
  floorSpace: 2400,
  extras: ['hot tub', 'bbq grill'],
  homeType: 'apartment',
  image: 'https://ap.rdcpix.com/446966594/12d1b9e197de4a6c5bb0ce62fa9ae96cl-m0xd-w1020_h770_q80.jpg'
}, {
  address: '1714 Mission Ave.',
  city: 'San Rosa',
  state: 'CA',
  rooms: 3,
  price: 765000,
  floorSpace: 3400,
  extras: ['Game Room', 'Boat'],
  homeType: 'Condo',
  image: 'http://www.domaza.ru/upload/userfiles/75418/%D0%B4%D0%BE%D0%BC%20%D0%B2%20%D0%B1%D0%BE%D0%BB%D0%B3%D0%B0%D1%80%D0%B8%D0%B8.jpg'
}, {
  address: '202 Ridgewood Dr.',
  city: 'Milpitas',
  state: 'CA',
  rooms: 5,
  price: 965000,
  floorSpace: 3400,
  extras: ['Swimming Pool', 'Game Room'],
  homeType: 'house',
  image: 'http://www.domaza.ru/upload/userfiles/26/%D0%BF%D1%80%D0%BE%D0%B4%D0%B0%D0%B6%D0%B0_%D0%B4%D0%BE%D0%BC%D0%BE%D0%B2_%D0%B2_%D0%B1%D0%BE%D0%BB%D0%B3%D0%B0%D1%80%D0%B8%D0%B8.jpg'
}, {
  address: '201 Center St.',
  city: 'Santa Clara',
  state: 'CA',
  rooms: 2,
  price: 765000,
  floorSpace: 2400,
  extras: ['Hot Tub', 'No Neighbors'],
  homeType: 'house',
  image: 'https://ap.rdcpix.com/146421606/247044e7106649e1b01773936c0aaf0bl-m0xd-w1020_h770_q80.jpg'
}];

/* harmony default export */ __webpack_exports__["a"] = (listingsData);

/***/ }),

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Header_js__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Filter_js__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Listings_js__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__data_listingsData_js__ = __webpack_require__(100);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }








var App = function (_Component) {
  _inherits(App, _Component);

  function App() {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this));

    _this.state = {
      name: 'Ken',
      listingsData: __WEBPACK_IMPORTED_MODULE_5__data_listingsData_js__["a" /* default */],
      min_price: 0,
      max_price: 1000000,
      min_floor_space: 0,
      max_floor_space: 50000,
      elevator: false,
      finished_basement: false,
      gym: false,
      swimming_pool: false,
      filteredData: __WEBPACK_IMPORTED_MODULE_5__data_listingsData_js__["a" /* default */]
    };

    _this.change = _this.change.bind(_this);
    _this.filteredData = _this.filteredData.bind(_this);
    return _this;
  }

  _createClass(App, [{
    key: 'change',
    value: function change(event) {
      var _this2 = this;

      var name = event.target.name;
      var value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;

      this.setState(_defineProperty({}, name, value), function () {
        console.log(_this2.state);
        _this2.filteredData();
      });
    }
  }, {
    key: 'filteredData',
    value: function filteredData() {
      var _this3 = this;

      var newData = this.state.listingsData.filter(function (item) {
        return item.price >= _this3.state.min_price && item.price <= _this3.state.max_price && item.floorSpace >= _this3.state.min_floor_space && item.floorSpace <= _this3.state.max_floor_space;
      });
      this.setState({
        filteredData: newData
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        null,
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__Header_js__["a" /* default */], null),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'section',
          { id: 'content-area' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__Filter_js__["a" /* default */], { change: this.change, globalState: this.state }),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__Listings_js__["a" /* default */], { listingsData: this.state.filteredData })
        )
      );
    }
  }]);

  return App;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

var app = document.getElementById('app');

__WEBPACK_IMPORTED_MODULE_1_react_dom___default.a.render(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(App, null), app);

/***/ }),

/***/ 97:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var Filter = function (_Component) {
  _inherits(Filter, _Component);

  function Filter() {
    _classCallCheck(this, Filter);

    var _this = _possibleConstructorReturn(this, (Filter.__proto__ || Object.getPrototypeOf(Filter)).call(this));

    _this.state = {
      name: 'Ken'
    };
    return _this;
  }

  _createClass(Filter, [{
    key: 'render',
    value: function render() {
      var _React$createElement;

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'section',
        { id: 'filter' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'inside' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'h4',
            null,
            'Filter'
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'select',
            { name: 'neighbourhood', className: 'filters neighborhood', onChange: this.props.change },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'option',
              { value: 'Meadows' },
              'Meadows'
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'option',
              { value: 'Oakland' },
              'Oakland'
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'option',
              { value: 'SanRafael' },
              'San Rafael'
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'option',
              { value: 'SanRosa' },
              'San Rosa'
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'option',
              { value: 'SantaClara' },
              'Santa Clara'
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'option',
              { value: 'Milpitas' },
              'Milpitas'
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'select',
            (_React$createElement = { name: 'housetype' }, _defineProperty(_React$createElement, 'name', 'neighbourhood'), _defineProperty(_React$createElement, 'className', 'filters housetype'), _defineProperty(_React$createElement, 'onChange', this.props.change), _React$createElement),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'option',
              { value: 'ranch' },
              'Ranch'
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'option',
              { value: 'house' },
              'House'
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'option',
              { value: 'apartment' },
              'Apartment'
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'option',
              { value: 'condo' },
              'Condo'
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'select',
            { name: 'bedrooms', className: 'filters bedrooms', onChange: this.props.change },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'option',
              { value: '2' },
              '2 BR'
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'option',
              { value: '3' },
              '3 BR'
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'option',
              { value: '4' },
              '4 BR'
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'option',
              { value: '5' },
              '5+ BR'
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'filters price' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'span',
              { className: 'title' },
              'Price'
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { type: 'text', name: 'min_price', className: 'min-price', onChange: this.props.change, value: this.props.globalState.min_price }),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { type: 'text', name: 'max_price', className: 'max-price', onChange: this.props.change, value: this.props.globalState.max_price })
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'filters floor-space' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'span',
              { className: 'title' },
              'Floor Space'
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { type: 'text', name: 'min_floor_space', className: 'min-floor-space', onChange: this.props.change, value: this.props.globalState.min_floor_space }),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { type: 'text', name: 'max_floor_space', className: 'max-floor-space', onChange: this.props.change, value: this.props.globalState.max_floor_space })
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'filters extras' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'span',
              { className: 'title' },
              'Extras'
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'label',
              { htmlFor: 'extras' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'span',
                null,
                'Elevators'
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { name: 'elevator', value: 'elevator', type: 'checkbox', onChange: this.props.change })
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'label',
              { htmlFor: 'extras' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'span',
                null,
                'Swimming Pool'
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { name: 'swimming_pool', value: 'swimming_pool', type: 'checkbox', onChange: this.props.change })
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'label',
              { htmlFor: 'extras' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'span',
                null,
                'Finished Basement'
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { name: 'finished_basement', value: 'finished_basement', type: 'checkbox', onChange: this.props.change })
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'label',
              { htmlFor: 'extras' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'span',
                null,
                'Gym'
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { name: 'gym', value: 'gym', type: 'checkbox', onChange: this.props.change })
            )
          )
        )
      );
    }
  }]);

  return Filter;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (Filter);

/***/ }),

/***/ 98:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var Header = function (_Component) {
  _inherits(Header, _Component);

  function Header() {
    _classCallCheck(this, Header);

    var _this = _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).call(this));

    _this.state = {
      name: 'Ken'
    };
    return _this;
  }

  _createClass(Header, [{
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'header',
        null,
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'logo' },
          ' Logo '
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'nav',
          null,
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'a',
            { href: '#' },
            'Create Ads'
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'a',
            { href: '#' },
            'About Us'
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'a',
            { href: '#' },
            'Log In'
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'a',
            { href: '#', className: 'register-btn' },
            'Register'
          )
        )
      );
    }
  }]);

  return Header;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (Header);

/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var Listings = function (_Component) {
  _inherits(Listings, _Component);

  function Listings() {
    _classCallCheck(this, Listings);

    var _this = _possibleConstructorReturn(this, (Listings.__proto__ || Object.getPrototypeOf(Listings)).call(this));

    _this.state = {
      name: 'Ken'
    };
    _this.loopListings = _this.loopListings.bind(_this);
    return _this;
  }

  _createClass(Listings, [{
    key: 'loopListings',
    value: function loopListings() {
      var listingsData = this.props.listingsData;


      if (listingsData == undefined || listingsData.length == 0) {
        return "Sorry your filter did not match any listings";
      }

      return listingsData.map(function (listing, index) {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'col-md-3', key: index },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'listing' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              { className: 'listing-img', style: { background: 'url("' + listing.image + '") no-repeat center center' } },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'span',
                { className: 'address' },
                listing.address
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { className: 'details' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'div',
                  { className: 'col-md-3' },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'user-img' })
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'div',
                  { className: 'col-md-9' },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'div',
                    { className: 'user-details' },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'span',
                      { className: 'user-name' },
                      'Nina Smith'
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'span',
                      { className: 'post-date' },
                      '06/25/2018'
                    )
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'div',
                    { className: 'listing-details' },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'div',
                      { className: 'floor-space' },
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', { className: 'far fa-square', 'aria-hidden': 'true' }),
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'span',
                        null,
                        '1000 ft\xB2'
                      )
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'div',
                      { className: 'bedrooms' },
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', { className: 'fa fa-bed', 'aria-hidden': 'true' }),
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'span',
                        null,
                        listing.rooms,
                        ' bedrooms'
                      )
                    )
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'div',
                    { className: 'view-btn' },
                    'View Listing'
                  )
                )
              )
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              { className: 'bottom-info' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'span',
                { className: 'price' },
                '$',
                listing.price
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'span',
                { className: 'location' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', { className: 'fa fa-map-marker', 'aria-hidden': 'true' }),
                listing.city,
                ', ',
                listing.state
              )
            )
          )
        );
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'section',
        { id: 'listings' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'section',
          { className: 'search-area' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { type: 'text', name: 'search' })
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'section',
          { className: 'sortby-area' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'results' },
            '390 results found'
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'sort-options' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'select',
              { name: 'sortby', className: 'sortby' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'option',
                { value: 'price-asc' },
                'Highest Price'
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'option',
                { value: 'price-dsc' },
                'Lowest Price'
              )
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              { className: 'view' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', { className: 'fa fa-th-list', 'aria-hidden': 'true' }),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', { className: 'fa fa-th', 'aria-hidden': 'true' })
            )
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'section',
          { className: 'listings-results' },
          this.loopListings()
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'section',
          { id: 'pagination' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'ul',
            { className: 'pages' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'li',
              null,
              'Prev'
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'li',
              { className: 'active' },
              '1'
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'li',
              null,
              '2'
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'li',
              null,
              '3'
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'li',
              null,
              '4'
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'li',
              null,
              '5'
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'li',
              null,
              'Next'
            )
          )
        )
      );
    }
  }]);

  return Listings;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (Listings);

/***/ })

},[102]);
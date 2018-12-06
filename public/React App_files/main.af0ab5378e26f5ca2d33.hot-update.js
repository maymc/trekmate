webpackHotUpdate("main",{

/***/ "./src/actions/actions.js":
/*!********************************!*\
  !*** ./src/actions/actions.js ***!
  \********************************/
/*! exports provided: GET_ALL_USERS, ADD_USER, GET_USER_BY_ID, GET_ALL_DREAMS, ADD_DREAM, GET_DREAM_BY_ID, GET_DREAM_BY_STORE_ID, GET_DREAM_BY_USER_ID, EDIT_DREAM, DELETE_DREAM, GET_ALL_STORES, GET_STORE_BY_ID, GET_STORE_BY_USER_ID, ADD_STORE, EDIT_STORE, GET_ALL_PURCHASES, GET_PURCHASE_BY_ID, ADD_PURCHASE, getAllUsers, getUser, addUser, getAllDreams, getDream, getDreamByStore, getDreamsByUser, editDream, addDream, deleteDream, getAllStores, getStore, editStore, addStore, getStoreByUser, getAllPurchases, getPurchase, addPurchase, logout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_ALL_USERS", function() { return GET_ALL_USERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_USER", function() { return ADD_USER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_USER_BY_ID", function() { return GET_USER_BY_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_ALL_DREAMS", function() { return GET_ALL_DREAMS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_DREAM", function() { return ADD_DREAM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_DREAM_BY_ID", function() { return GET_DREAM_BY_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_DREAM_BY_STORE_ID", function() { return GET_DREAM_BY_STORE_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_DREAM_BY_USER_ID", function() { return GET_DREAM_BY_USER_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EDIT_DREAM", function() { return EDIT_DREAM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE_DREAM", function() { return DELETE_DREAM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_ALL_STORES", function() { return GET_ALL_STORES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_STORE_BY_ID", function() { return GET_STORE_BY_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_STORE_BY_USER_ID", function() { return GET_STORE_BY_USER_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_STORE", function() { return ADD_STORE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EDIT_STORE", function() { return EDIT_STORE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_ALL_PURCHASES", function() { return GET_ALL_PURCHASES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_PURCHASE_BY_ID", function() { return GET_PURCHASE_BY_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_PURCHASE", function() { return ADD_PURCHASE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllUsers", function() { return getAllUsers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUser", function() { return getUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addUser", function() { return addUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllDreams", function() { return getAllDreams; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDream", function() { return getDream; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDreamByStore", function() { return getDreamByStore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDreamsByUser", function() { return getDreamsByUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "editDream", function() { return editDream; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addDream", function() { return addDream; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteDream", function() { return deleteDream; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllStores", function() { return getAllStores; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStore", function() { return getStore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "editStore", function() { return editStore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addStore", function() { return addStore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStoreByUser", function() { return getStoreByUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllPurchases", function() { return getAllPurchases; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPurchase", function() { return getPurchase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addPurchase", function() { return addPurchase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logout", function() { return logout; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

var GET_ALL_USERS = 'GET_ALL_USERS';
var ADD_USER = 'ADD_USER';
var GET_USER_BY_ID = 'GET_USER_BY_ID';
var GET_ALL_DREAMS = 'GET_ALL_DREAMS';
var ADD_DREAM = 'ADD_DREAM';
var GET_DREAM_BY_ID = 'GET_DREAM_BY_ID';
var GET_DREAM_BY_STORE_ID = 'GET_DREAM_BY_STORE_ID';
var GET_DREAM_BY_USER_ID = 'GET_DREAM_BY_USER_ID';
var EDIT_DREAM = 'EDIT_DREAM';
var DELETE_DREAM = 'DELETE_DREAM';
var GET_ALL_STORES = 'GET_ALL_STORES';
var GET_STORE_BY_ID = 'GET_STORE_BY_ID';
var GET_STORE_BY_USER_ID = 'GET_STORE_BY_USER_ID';
var ADD_STORE = 'ADD_STORE';
var EDIT_STORE = 'EDIT_STORE';
var GET_ALL_PURCHASES = 'GET_ALL_PURCHASES';
var GET_PURCHASE_BY_ID = 'GET_PURCHASE_BY_ID';
var ADD_PURCHASE = 'ADD_PURCHASE'; //~~~~~~~~~~ USER ACTIONS ~~~~~~~~~~//

var getAllUsers = function getAllUsers() {
  return function (dispatch) {
    axios__WEBPACK_IMPORTED_MODULE_0___default.a.get('http://ohanadaily.com:8080/api/users').then(function (items) {
      dispatch({
        type: GET_ALL_USERS,
        task: items.data
      });
    });
  };
}; //~~~ REQUEST TO GET A USER BY ITS ID ~~~//

var getUser = function getUser(id) {
  return function (dispatch) {
    // axios.get('http://34.219.218.138:8080/api/dreams/' + id)
    axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("http://ohanadaily.com:8080/api/users/".concat(id)).then(function (response) {
      // console.log('ACTION USER BY ID DATA: ', response.data)
      dispatch({
        type: GET_USER_BY_ID,
        payload: response.data
      });
    }).catch(function (err) {
      console.log('ERROR IN GETTING INDIVIDUAL USER');
    });
  };
}; //~~~ REQUEST TO POST A USER ~~~//

var addUser = function addUser(user) {
  console.log('ACTION ADD HITTING');
  return function (dispatch) {
    axios__WEBPACK_IMPORTED_MODULE_0___default.a.post('http://ohanadaily.com:8080/register', user).then(function (response) {
      console.log('new user', user);
      dispatch({
        type: ADD_USER,
        payload: response.data
      });
    }).catch(function (err) {
      console.log('ERROR in ACTION ADD USER');
    });
  };
}; //~~~~~~~~~~ DREAM ACTIONS ~~~~~~~~~~//
//~~~ REQUEST TO GET ALL DREAMS ~~~//

var getAllDreams = function getAllDreams() {
  return function (dispatch) {
    axios__WEBPACK_IMPORTED_MODULE_0___default.a.get('http://ohanadaily.com:8080/api/dreams').then(function (response) {
      dispatch({
        type: GET_ALL_DREAMS,
        payload: response.data
      });
    }).catch(function (err) {
      dispatch({
        type: 'DISPLAY_ERROR_NOTIFICATION'
      });
    });
  };
}; //~~~ REQUEST TO GET A DREAM BY ITS ID ~~~//

var getDream = function getDream(id) {
  // console.log('ACTION GET BY ID FIRING', id)
  return function (dispatch) {
    axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("http://ohanadaily.com:8080/api/dreams/".concat(id)).then(function (response) {
      dispatch({
        type: GET_DREAM_BY_ID,
        payload: response.data[0]
      });
    }).catch(function (err) {
      console.log('ERROR IN GETTING INDIVIDUAL DREAM', err);
    });
  };
}; //~~~ REQUEST TO GET A DREAM BY STORE ID ~~~//

var getDreamByStore = function getDreamByStore(id) {
  // console.log('ACTION GET BY ID FIRING', id)
  return function (dispatch) {
    // axios.get('http://34.219.218.138:8080/api/dreams/' + id)
    axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("http://ohanadaily.com:8080/api/dreams/").then(function (response) {
      var dreams = response.data.filter(function (dream) {
        // console.log('inception', dream)
        return id.toString() === dream.store_id.id.toString();
      }); // console.log('ACTION DREAM BY ID DATA: ', dreams)

      dispatch({
        type: GET_DREAM_BY_STORE_ID,
        payload: dreams
      });
    }).catch(function (err) {
      console.log('ERROR IN GETTING INDIVIDUAL DREAM');
    });
  };
}; //~~~ REQUEST TO GET A DREAM BY USER ID ~~~//

var getDreamsByUser = function getDreamsByUser(id) {
  // console.log('ACTION GET DREAM BY USER ID FIRING', id)
  return function (dispatch) {
    axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("http://ohanadaily.com:8080/api/dreams/").then(function (response) {
      var dreams = response.data.filter(function (dream) {
        // console.log('insheeption', dream)
        return id.toString() === dream.user_id.id.toString();
      }); // console.log('ACTION DREAM BY ID DATA: ', dreams)

      dispatch({
        type: GET_DREAM_BY_USER_ID,
        payload: dreams
      });
    }).catch(function (err) {
      console.log('ERROR IN GETTING INDIVIDUAL DREAM');
    });
  };
}; //~~~ REQUEST TO EDIT A DREAM ~~~//

var editDream = function editDream(id, data) {
  console.log('ACTION EDIT DREAM FIRED ;)');
  console.log("object:", data);
  return function (dispatch) {
    axios__WEBPACK_IMPORTED_MODULE_0___default.a.put("http://ohanadaily.com:8080/api/dreams/edit_dream/".concat(id), data).then(function (response) {
      console.log('ACTION EDIT DATA: ', response.data);
      dispatch({
        type: EDIT_DREAM,
        payload: response.data
      });
    }).catch(function (err) {
      console.log('ERROR IN EDIT DREAM', err);
    });
  };
}; //~~~ REQUEST TO POST A DREAM ~~~//

var addDream = function addDream(dream) {
  console.log('ACTION ADD DREAM HITTING'); // console.log('ACTION DREAM PARAM: ', dream);

  return function (dispatch) {
    axios__WEBPACK_IMPORTED_MODULE_0___default.a.post('http://ohanadaily.com:8080/api/dreams/new_dream').then(function (response) {
      console.log('ADD DREAM RESPONSE: ', response.data);
      dispatch({
        ADD_DREAM: ADD_DREAM,
        payload: response.data
      });
    }).catch(function (err) {
      console.log('ERROR in ACTION ADD DREAM', err);
    });
  };
}; //~~~ REQUEST TO DELETE A DREAM ~~~//

var deleteDream = function deleteDream(id) {
  // console.log('ACTION DELETE DREAM HIT');
  return function (dispatch) {
    axios__WEBPACK_IMPORTED_MODULE_0___default.a.delete('http://ohanadaily.com:8080/api/dreams/delete_dream', {
      data: {
        id: id
      }
    }).then(function (response) {
      console.log("response: ", response.data);
      dispatch({
        type: DELETE_DREAM,
        payload: id
      });
    }).catch(function (err) {
      console.log('ERROR IN DELETE ', err);
    });
  };
}; //~~~~~~~~~~ STORE ACTIONS ~~~~~~~~~~//
//~~~ REQUEST TO GET ALL STORES ~~~//

var getAllStores = function getAllStores() {
  // console.log('ACTION GET STORES HITTING');
  return function (dispatch) {
    axios__WEBPACK_IMPORTED_MODULE_0___default.a.get('http://ohanadaily.com:8080/api/stores').then(function (response) {
      dispatch({
        type: GET_ALL_STORES,
        payload: response.data
      });
      console.log('actions.js dispatch payload: ', response.data);
    }).catch(function (err) {
      console.log('ERROR IN ACTION GET ALL STORES');
    });
  };
}; //~~~ REQUEST TO GET A STORE BY ITS ID ~~~//

var getStore = function getStore(id) {
  // console.log('ACTION GET BY ID FIRING', id)
  return function (dispatch) {
    axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("http://ohanadaily.com:8080/api/stores/".concat(id)).then(function (response) {
      // console.log('ACTION STORE DATA: ', response.data)
      dispatch({
        type: GET_STORE_BY_ID,
        payload: response.data
      });
    }).catch(function (err) {
      console.log('ERROR IN GETTING INDIVIDUAL STORE');
    });
  };
}; //~~~ REQUEST TO EDIT A STORE ~~~//

var editStore = function editStore(id, data) {
  return function (dispatch) {
    axios__WEBPACK_IMPORTED_MODULE_0___default.a.put("http://ohanadaily.com:8080/api/stores/edit_store/".concat(id), data).then(function (response) {
      // console.log('ACTION EDIT DATA: ', response.data)
      dispatch({
        type: EDIT_STORE,
        payload: response.data
      });
    }).catch(function (err) {
      console.log('ERROR IN EDIT STORE', err);
    });
  };
}; //~~~ REQUEST TO ADD A NEW STORE ~~~//

var addStore = function addStore(store) {
  // console.log('ACTION ADD STORE FIRED');
  // console.log("ACTION STORE PARAM: ", store)
  return function (dispatch) {
    axios__WEBPACK_IMPORTED_MODULE_0___default.a.post("http://ohanadaily.com:8080/api/stores/create_store", store).then(function (response) {
      // console.log('ADD STORE RESPONSE: ', response.data)
      dispatch({
        type: ADD_STORE,
        payload: response.data
      });
    }).catch(function (err) {
      console.log("ERROR IN ACTION ADD STORE");
    });
  };
}; //~~~ REQUEST TO GET A STORE BY USER ID ~~~//

var getStoreByUser = function getStoreByUser(id) {
  // console.log('ACTION GET BY ID FIRING', id)
  return function (dispatch) {
    // axios.get('http://34.219.218.138:8080/api/dreams/' + id)
    axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("http://ohanadaily.com:8080/api/stores/").then(function (response) {
      var stores = response.data.filter(function (store) {
        // console.log('inception', dream)
        return id.toString() === store.created_by.id.toString();
      }); // console.log('ACTION DREAM BY ID DATA: ', stores[0])

      dispatch({
        type: GET_STORE_BY_USER_ID,
        payload: stores
      });
    }).catch(function (err) {
      console.log('ERROR IN GETTING INDIVIDUAL STORE');
    });
  };
}; //~~~~~~~~~~ PURCHASE ACTIONS ~~~~~~~~~~//
//~~~ REQUEST TO GET ALL PURCHASES ~~~//

var getAllPurchases = function getAllPurchases() {
  return function (dispatch) {
    axios__WEBPACK_IMPORTED_MODULE_0___default.a.get('http://ohanadaily.com:8080/api/purchased').then(function (items) {
      // console.log('hello?', items);
      dispatch({
        type: GET_ALL_PURCHASES,
        task: items.data
      });
    });
  };
}; //~~~ REQUEST TO GET A PURCHASE BY ITS ID ~~~//

var getPurchase = function getPurchase(id) {
  // console.log('ACTION GET BY ID FIRING', id)
  return function (dispatch) {
    axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("http://ohanadaily.com:8080/api/purchased/".concat(id)).then(function (response) {
      console.log('ACTION PURCHASE BY ID DATA: ', response.data);
      dispatch({
        type: GET_PURCHASE_BY_ID,
        payload: response.data
      });
    }).catch(function (err) {
      console.log('ERROR IN GETTING INDIVIDUAL PURCHASE');
    });
  };
}; //~~~ REQUEST TO POST A PURCHASE ~~~//

var addPurchase = function addPurchase() {
  console.log('ACTION ADD HITTING');
  return function (dispatch) {
    axios__WEBPACK_IMPORTED_MODULE_0___default.a.post('http://ohanadaily.com:8080/api/purchased/new_purchase').then(function (response) {
      dispatch({
        type: ADD_PURCHASE,
        payload: response.data
      });
    }).catch(function (err) {
      console.log('ERROR in ACTION ADD PURCHASE');
    });
  };
};
var logout = function logout() {
  localStorage.clear();
};

/***/ }),

/***/ "./src/containers/Account/AuthDreamInventory.js":
/*!******************************************************!*\
  !*** ./src/containers/Account/AuthDreamInventory.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_jamiefrady_Desktop_JS_eeden_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_jamiefrady_Desktop_JS_eeden_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_jamiefrady_Desktop_JS_eeden_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_jamiefrady_Desktop_JS_eeden_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_jamiefrady_Desktop_JS_eeden_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _Users_jamiefrady_Desktop_JS_eeden_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _actions_actions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../actions/actions */ "./src/actions/actions.js");






var _jsxFileName = "/Users/jamiefrady/Desktop/JS/eeden/src/containers/Account/AuthDreamInventory.js";
 // import UserInfoComponent from './UserInfoComponent';
// import StoreInventoryComponent from './StoreInventoryComponent';
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";





var AuthDreamInventory =
/*#__PURE__*/
function (_Component) {
  Object(_Users_jamiefrady_Desktop_JS_eeden_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(AuthDreamInventory, _Component);

  function AuthDreamInventory(props) {
    var _this;

    Object(_Users_jamiefrady_Desktop_JS_eeden_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, AuthDreamInventory);

    _this = Object(_Users_jamiefrady_Desktop_JS_eeden_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_Users_jamiefrady_Desktop_JS_eeden_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(AuthDreamInventory).call(this, props));

    _this.deleteDream = function (id) {
      console.log('DELETE: ', id);

      _this.props.dispatch(_this.deleteDream(id));

      window.alert('are you sure?');
    };

    _this.state = {};
    _this.deleteDream = _actions_actions__WEBPACK_IMPORTED_MODULE_9__["deleteDream"].bind(Object(_Users_jamiefrady_Desktop_JS_eeden_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(Object(_Users_jamiefrady_Desktop_JS_eeden_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this)));
    return _this;
  }

  Object(_Users_jamiefrady_Desktop_JS_eeden_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(AuthDreamInventory, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      console.log(this.props, 'wya');

      if (this.props.dreamProps !== undefined) {
        return this.props.dreamProps.map(function (dreams) {
          return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
            className: "AuthDreamInventory",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 28
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__["Link"], {
            key: dreams.id,
            to: "/dreams/" + dreams.id,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 29
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
            className: "dream-list",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 30
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
            className: "img-wrapper",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 31
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("img", {
            className: "dream-images",
            src: dreams.dream_images,
            alt: "No Images",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 32
            },
            __self: this
          })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
            className: "copy",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 34
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h3", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 35
            },
            __self: this
          }, dreams.title), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 36
            },
            __self: this
          }, "$", dreams.price)))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("button", {
            onClick: function onClick() {
              return _this2.props.deleteDream(dreams.id);
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 40
            },
            __self: this
          }, "Delete"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__["Link"], {
            to: '/edit_dream/' + dreams.id,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 41
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("button", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 41
            },
            __self: this
          }, "Edit")));
        });
      } else {
        return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 46
          },
          __self: this
        }, "Hi");
      }
    }
  }]);

  return AuthDreamInventory;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (AuthDreamInventory);

/***/ }),

/***/ "./src/containers/Auth/index.js":
/*!**************************************!*\
  !*** ./src/containers/Auth/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_jamiefrady_Desktop_JS_eeden_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _Users_jamiefrady_Desktop_JS_eeden_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_jamiefrady_Desktop_JS_eeden_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_jamiefrady_Desktop_JS_eeden_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_jamiefrady_Desktop_JS_eeden_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_jamiefrady_Desktop_JS_eeden_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _actions_actions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../actions/actions */ "./src/actions/actions.js");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./styles.css */ "./src/containers/Auth/styles.css");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_styles_css__WEBPACK_IMPORTED_MODULE_10__);






var _jsxFileName = "/Users/jamiefrady/Desktop/JS/eeden/src/containers/Auth/index.js";






var Login =
/*#__PURE__*/
function (_Component) {
  Object(_Users_jamiefrady_Desktop_JS_eeden_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Login, _Component);

  function Login(props) {
    var _this;

    Object(_Users_jamiefrady_Desktop_JS_eeden_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Login);

    _this = Object(_Users_jamiefrady_Desktop_JS_eeden_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_Users_jamiefrady_Desktop_JS_eeden_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Login).call(this, props));

    _this.handleChange = function (event) {
      var target = event.target;
      var name = target.name,
          value = target.value;

      _this.setState(Object(_Users_jamiefrady_Desktop_JS_eeden_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, name, value));

      console.log(_this.props);
    };

    _this.handleSubmit = function (event) {
      event.preventDefault();

      var user = _this.props.userProps.filter(function (x) {
        return x.email === _this.state.email && x.password === _this.state.password;
      });

      if (user.length === 1) {
        _this.setState({
          loggedIn: true
        });

        localStorage.setItem('loggedIn', true);
        localStorage.setItem('user_id', user[0].id);
        localStorage.setItem('has_store', user[0].has_store);
        console.log('hitting?');
      } else {
        console.log('email and password do not match');
      }

      ;
    };

    _this.state = {
      email: '',
      password: ''
    };
    return _this;
  }

  Object(_Users_jamiefrady_Desktop_JS_eeden_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Login, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.props.dispatch(Object(_actions_actions__WEBPACK_IMPORTED_MODULE_9__["getAllUsers"])());
    }
  }, {
    key: "render",
    value: function render() {
      if (this.state.loggedIn) {
        return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__["Redirect"], {
          to: {
            pathname: "/users/".concat(localStorage.getItem('user_id'), "/userInfo")
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 48
          },
          __self: this
        });
      } else {
        return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
          className: "form-container",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 52
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
          className: "form",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 53
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h2", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 54
          },
          __self: this
        }, "Login"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("form", {
          className: "login-form",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 55
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("label", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 56
          },
          __self: this
        }, "Email:", react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("input", {
          type: "email",
          name: "email",
          placeholder: "Enter Email",
          onChange: this.handleChange,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 57
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("br", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 59
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("label", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 60
          },
          __self: this
        }, "Password:", react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("input", {
          type: "password",
          name: "password",
          placeholder: "Enter Password",
          onChange: this.handleChange,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 61
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("br", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 63
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("button", {
          type: "submit",
          onClick: this.handleSubmit,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 64
          },
          __self: this
        }, "Login"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 65
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 66
          },
          __self: this
        }, "Don't have an account?"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__["Link"], {
          className: "form-link",
          to: "/register",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 69
          },
          __self: this
        }, "Register here")))));
      }
    }
  }]);

  return Login;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

function mapStateToProps(state) {
  return {
    userProps: state
  };
}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_8__["connect"])(mapStateToProps)(Login));

/***/ })

})
//# sourceMappingURL=main.af0ab5378e26f5ca2d33.hot-update.js.map
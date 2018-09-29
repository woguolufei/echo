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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/echo.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/channel/socket-channel.js":
/*!***************************************!*\
  !*** ./src/channel/socket-channel.js ***!
  \***************************************/
/*! exports provided: SocketChannel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocketChannel", function() { return SocketChannel; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var SocketChannel =
/*#__PURE__*/
function () {
  /**
   * @param connector
   * @param channel
   */
  function SocketChannel(connector, channel) {
    _classCallCheck(this, SocketChannel);

    this.connector = connector;
    this.channel = channel;
    this.events = {};
  }

  _createClass(SocketChannel, [{
    key: "listen",
    value: function listen(event, callback) {
      var _this = this;

      this.events[event] = function (e) {
        if (e.channel === _this.channel && e.event === event) {
          callback(e.data);
        }
      };

      return this;
    }
  }]);

  return SocketChannel;
}();

/***/ }),

/***/ "./src/connector/socket-connector.js":
/*!*******************************************!*\
  !*** ./src/connector/socket-connector.js ***!
  \*******************************************/
/*! exports provided: SocketConnector */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocketConnector", function() { return SocketConnector; });
/* harmony import */ var _channel_socket_channel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../channel/socket-channel */ "./src/channel/socket-channel.js");
/* harmony import */ var _util_uuid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/uuid */ "./src/util/uuid.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var SocketConnector =
/*#__PURE__*/
function () {
  /**
   * @param options  {host : ws://192.168.10.10:8081/a82393d886a0e6ddfae5}
   * @returns {SocketConnector}
   */
  function SocketConnector(options) {
    _classCallCheck(this, SocketConnector);

    this.options = options;

    this._init();

    return this.run();
  }

  _createClass(SocketConnector, [{
    key: "_init",
    value: function _init() {
      var _this = this;

      //订阅的频道
      this.channels = {};
      this.socket = this.getSocketIo();
      this.socket.uuid = this.getUuid();

      this.socket.onclose = function (e) {
        _this.closeCallBack(e);
      };

      this.socket.onopen = function (e) {
        _this.authorization();
      };
    }
  }, {
    key: "closeCallBack",
    value: function closeCallBack(e) {
      if (this.socket.readyState == WebSocket.CLOSED) {
        if (e.type == 'close') {
          console.error('socket服务已断开!!');
        } else if (e.type == 'message') {
          console.error(e.data);
        } else {
          console.error('已断开!!');
        }
      }
    }
  }, {
    key: "run",
    value: function run() {
      return this;
    }
  }, {
    key: "getSocketIo",
    value: function getSocketIo() {
      return new WebSocket(this.options.host);
    }
  }, {
    key: "getUuid",
    value: function getUuid() {
      if (this.socket.uuid === undefined) {
        return Object(_util_uuid__WEBPACK_IMPORTED_MODULE_1__["uuid"])(8, 16);
      }

      return this.socket.uuid;
    }
  }, {
    key: "authorization",
    value: function authorization() {
      this.send({
        uuid: this.getUuid()
      }, this.authorizationCallBack());
    }
  }, {
    key: "authorizationCallBack",
    value: function authorizationCallBack() {
      var _this2 = this;

      return function (e) {
        if (e.status === 401) {
          console.error(e.error);
        }

        if (e.status === 200) {
          for (var i in _this2.channels) {
            var channel = _this2.channels[i];

            for (var j in channel.events) {
              _this2.send({
                uuid: _this2.getUuid(),
                channel: channel.channel,
                event: j
              }, channel.events[j]);
            }
          }
        }
      };
    }
  }, {
    key: "send",
    value: function send(json, callback) {
      this.socket.send(JSON.stringify(json));
      this.socket.addEventListener('message', function (e) {
        var json = JSON.parse(e.data);
        callback(json);
      });
    }
  }, {
    key: "channel",
    value: function channel(_channel) {
      if (this.channels[_channel] === undefined) {
        this.channels[_channel] = new _channel_socket_channel__WEBPACK_IMPORTED_MODULE_0__["SocketChannel"](this, _channel);
      }

      return this.channels[_channel];
    }
  }]);

  return SocketConnector;
}();

/***/ }),

/***/ "./src/echo.js":
/*!*********************!*\
  !*** ./src/echo.js ***!
  \*********************/
/*! exports provided: Echo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Echo", function() { return Echo; });
/* harmony import */ var _connector_socket_connector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./connector/socket-connector */ "./src/connector/socket-connector.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


var Echo =
/*#__PURE__*/
function () {
  function Echo(options) {
    _classCallCheck(this, Echo);

    this.options = options;
    this.connector = new _connector_socket_connector__WEBPACK_IMPORTED_MODULE_0__["SocketConnector"](options);
  }

  _createClass(Echo, [{
    key: "channel",
    value: function channel(_channel) {
      return this.connector.channel(_channel);
    }
  }]);

  return Echo;
}();
window.Echo = Echo;

/***/ }),

/***/ "./src/util/uuid.js":
/*!**************************!*\
  !*** ./src/util/uuid.js ***!
  \**************************/
/*! exports provided: uuid */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uuid", function() { return uuid; });
function uuid(len, radix) {
  var chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('');
  var uuid = [],
      i;
  radix = radix || chars.length;

  if (len) {
    // Compact form
    for (i = 0; i < len; i++) {
      uuid[i] = chars[0 | Math.random() * radix];
    }
  } else {
    // rfc4122, version 4 form
    var r; // rfc4122 requires these characters

    uuid[8] = uuid[13] = uuid[18] = uuid[23] = '-';
    uuid[14] = '4'; // Fill in random data. At i==19 set the high bits of clock sequence as
    // per rfc4122, sec. 4.1.5

    for (i = 0; i < 36; i++) {
      if (!uuid[i]) {
        r = 0 | Math.random() * 16;
        uuid[i] = chars[i == 19 ? r & 0x3 | 0x8 : r];
      }
    }
  }

  return uuid.join('');
}

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NoYW5uZWwvc29ja2V0LWNoYW5uZWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Nvbm5lY3Rvci9zb2NrZXQtY29ubmVjdG9yLmpzIiwid2VicGFjazovLy8uL3NyYy9lY2hvLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlsL3V1aWQuanMiXSwibmFtZXMiOlsiU29ja2V0Q2hhbm5lbCIsImNvbm5lY3RvciIsImNoYW5uZWwiLCJldmVudHMiLCJldmVudCIsImNhbGxiYWNrIiwiZSIsImRhdGEiLCJTb2NrZXRDb25uZWN0b3IiLCJvcHRpb25zIiwiX2luaXQiLCJydW4iLCJjaGFubmVscyIsInNvY2tldCIsImdldFNvY2tldElvIiwidXVpZCIsImdldFV1aWQiLCJvbmNsb3NlIiwiY2xvc2VDYWxsQmFjayIsIm9ub3BlbiIsImF1dGhvcml6YXRpb24iLCJyZWFkeVN0YXRlIiwiV2ViU29ja2V0IiwiQ0xPU0VEIiwidHlwZSIsImNvbnNvbGUiLCJlcnJvciIsImhvc3QiLCJ1bmRlZmluZWQiLCJzZW5kIiwiYXV0aG9yaXphdGlvbkNhbGxCYWNrIiwic3RhdHVzIiwiaSIsImoiLCJqc29uIiwiSlNPTiIsInN0cmluZ2lmeSIsImFkZEV2ZW50TGlzdGVuZXIiLCJwYXJzZSIsIkVjaG8iLCJ3aW5kb3ciLCJsZW4iLCJyYWRpeCIsImNoYXJzIiwic3BsaXQiLCJsZW5ndGgiLCJNYXRoIiwicmFuZG9tIiwiciIsImpvaW4iXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtB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LEtBQUssSUFBSUMsS0FBSyxDQUFDRSxNQUF2Qjs7QUFFQSxNQUFJSixHQUFKLEVBQVM7QUFDTDtBQUNBLFNBQUtULENBQUMsR0FBRyxDQUFULEVBQVlBLENBQUMsR0FBR1MsR0FBaEIsRUFBcUJULENBQUMsRUFBdEI7QUFBMEJqQixVQUFJLENBQUNpQixDQUFELENBQUosR0FBVVcsS0FBSyxDQUFDLElBQUlHLElBQUksQ0FBQ0MsTUFBTCxLQUFnQkwsS0FBckIsQ0FBZjtBQUExQjtBQUNILEdBSEQsTUFHTztBQUNIO0FBQ0EsUUFBSU0sQ0FBSixDQUZHLENBSUg7O0FBQ0FqQyxRQUFJLENBQUMsQ0FBRCxDQUFKLEdBQVVBLElBQUksQ0FBQyxFQUFELENBQUosR0FBV0EsSUFBSSxDQUFDLEVBQUQsQ0FBSixHQUFXQSxJQUFJLENBQUMsRUFBRCxDQUFKLEdBQVcsR0FBM0M7QUFDQUEsUUFBSSxDQUFDLEVBQUQsQ0FBSixHQUFXLEdBQVgsQ0FORyxDQVFIO0FBQ0E7O0FBQ0EsU0FBS2lCLENBQUMsR0FBRyxDQUFULEVBQVlBLENBQUMsR0FBRyxFQUFoQixFQUFvQkEsQ0FBQyxFQUFyQixFQUF5QjtBQUNyQixVQUFJLENBQUNqQixJQUFJLENBQUNpQixDQUFELENBQVQsRUFBYztBQUNWZ0IsU0FBQyxHQUFHLElBQUlGLElBQUksQ0FBQ0MsTUFBTCxLQUFnQixFQUF4QjtBQUNBaEMsWUFBSSxDQUFDaUIsQ0FBRCxDQUFKLEdBQVVXLEtBQUssQ0FBRVgsQ0FBQyxJQUFJLEVBQU4sR0FBYWdCLENBQUMsR0FBRyxHQUFMLEdBQVksR0FBeEIsR0FBOEJBLENBQS9CLENBQWY7QUFDSDtBQUNKO0FBQ0o7O0FBRUQsU0FBT2pDLElBQUksQ0FBQ2tDLElBQUwsQ0FBVSxFQUFWLENBQVA7QUFDSCxDIiwiZmlsZSI6ImVjaG8uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9lY2hvLmpzXCIpO1xuIiwiZXhwb3J0IGNsYXNzIFNvY2tldENoYW5uZWwge1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQHBhcmFtIGNvbm5lY3RvclxyXG4gICAgICogQHBhcmFtIGNoYW5uZWxcclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IoY29ubmVjdG9yLCBjaGFubmVsKSB7XHJcbiAgICAgICAgdGhpcy5jb25uZWN0b3IgPSBjb25uZWN0b3I7XHJcbiAgICAgICAgdGhpcy5jaGFubmVsID0gY2hhbm5lbDtcclxuXHJcbiAgICAgICAgdGhpcy5ldmVudHMgPSB7fTtcclxuICAgIH1cclxuXHJcbiAgICBsaXN0ZW4oZXZlbnQsIGNhbGxiYWNrKSB7XHJcbiAgICAgICAgdGhpcy5ldmVudHNbZXZlbnRdID0gKGUpID0+IHtcclxuICAgICAgICAgICAgaWYgKGUuY2hhbm5lbCA9PT0gdGhpcy5jaGFubmVsICYmIGUuZXZlbnQgPT09IGV2ZW50KSB7XHJcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhlLmRhdGEpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxufSIsImltcG9ydCB7U29ja2V0Q2hhbm5lbH0gZnJvbSAnLi4vY2hhbm5lbC9zb2NrZXQtY2hhbm5lbCdcclxuaW1wb3J0IHt1dWlkfSBmcm9tIFwiLi4vdXRpbC91dWlkXCJcclxuXHJcbmV4cG9ydCBjbGFzcyBTb2NrZXRDb25uZWN0b3Ige1xyXG4gICAgLyoqXHJcbiAgICAgKiBAcGFyYW0gb3B0aW9ucyAge2hvc3QgOiB3czovLzE5Mi4xNjguMTAuMTA6ODA4MS9hODIzOTNkODg2YTBlNmRkZmFlNX1cclxuICAgICAqIEByZXR1cm5zIHtTb2NrZXRDb25uZWN0b3J9XHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcclxuICAgICAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xyXG5cclxuICAgICAgICB0aGlzLl9pbml0KCk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucnVuKCk7XHJcbiAgICB9XHJcblxyXG4gICAgX2luaXQoKSB7XHJcbiAgICAgICAgLy/orqLpmIXnmoTpopHpgZNcclxuICAgICAgICB0aGlzLmNoYW5uZWxzID0ge307XHJcblxyXG4gICAgICAgIHRoaXMuc29ja2V0ID0gdGhpcy5nZXRTb2NrZXRJbygpO1xyXG4gICAgICAgIHRoaXMuc29ja2V0LnV1aWQgPSB0aGlzLmdldFV1aWQoKTtcclxuXHJcbiAgICAgICAgdGhpcy5zb2NrZXQub25jbG9zZSA9IChlKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuY2xvc2VDYWxsQmFjayhlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zb2NrZXQub25vcGVuID0gKGUpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5hdXRob3JpemF0aW9uKClcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY2xvc2VDYWxsQmFjayhlKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuc29ja2V0LnJlYWR5U3RhdGUgPT0gV2ViU29ja2V0LkNMT1NFRCkge1xyXG4gICAgICAgICAgICBpZiAoZS50eXBlID09ICdjbG9zZScpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ3NvY2tldOacjeWKoeW3suaWreW8gCEhJylcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChlLnR5cGUgPT0gJ21lc3NhZ2UnKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGUuZGF0YSlcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ+W3suaWreW8gCEhJylcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBydW4oKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0U29ja2V0SW8oKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBXZWJTb2NrZXQodGhpcy5vcHRpb25zLmhvc3QpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFV1aWQoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuc29ja2V0LnV1aWQgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdXVpZCg4LCAxNik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLnNvY2tldC51dWlkO1xyXG4gICAgfVxyXG5cclxuICAgIGF1dGhvcml6YXRpb24oKSB7XHJcblxyXG4gICAgICAgIHRoaXMuc2VuZCh7XHJcbiAgICAgICAgICAgIHV1aWQ6IHRoaXMuZ2V0VXVpZCgpXHJcbiAgICAgICAgfSwgdGhpcy5hdXRob3JpemF0aW9uQ2FsbEJhY2soKSlcclxuICAgIH1cclxuXHJcbiAgICBhdXRob3JpemF0aW9uQ2FsbEJhY2soKSB7XHJcbiAgICAgICAgcmV0dXJuIChlKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChlLnN0YXR1cyA9PT0gNDAxKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGUuZXJyb3IpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoZS5zdGF0dXMgPT09IDIwMCkge1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSBpbiB0aGlzLmNoYW5uZWxzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGNoYW5uZWwgPSB0aGlzLmNoYW5uZWxzW2ldO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBqIGluIGNoYW5uZWwuZXZlbnRzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2VuZCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1dWlkOiB0aGlzLmdldFV1aWQoKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoYW5uZWw6IGNoYW5uZWwuY2hhbm5lbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50OiBqXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIGNoYW5uZWwuZXZlbnRzW2pdKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc2VuZChqc29uLCBjYWxsYmFjaykge1xyXG4gICAgICAgIHRoaXMuc29ja2V0LnNlbmQoSlNPTi5zdHJpbmdpZnkoanNvbikpO1xyXG5cclxuICAgICAgICB0aGlzLnNvY2tldC5hZGRFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgKGUpID0+IHtcclxuICAgICAgICAgICAgbGV0IGpzb24gPSBKU09OLnBhcnNlKGUuZGF0YSk7XHJcbiAgICAgICAgICAgIGNhbGxiYWNrKGpzb24pXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgY2hhbm5lbChjaGFubmVsKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuY2hhbm5lbHNbY2hhbm5lbF0gPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB0aGlzLmNoYW5uZWxzW2NoYW5uZWxdID0gbmV3IFNvY2tldENoYW5uZWwodGhpcywgY2hhbm5lbCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5jaGFubmVsc1tjaGFubmVsXTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQge1NvY2tldENvbm5lY3Rvcn0gZnJvbSAnLi9jb25uZWN0b3Ivc29ja2V0LWNvbm5lY3RvcidcclxuXHJcbmV4cG9ydCBjbGFzcyBFY2hvIHtcclxuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcclxuICAgICAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xyXG5cclxuICAgICAgICB0aGlzLmNvbm5lY3RvciA9IG5ldyBTb2NrZXRDb25uZWN0b3Iob3B0aW9ucyk7XHJcbiAgICB9XHJcblxyXG4gICAgY2hhbm5lbChjaGFubmVsKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY29ubmVjdG9yLmNoYW5uZWwoY2hhbm5lbCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbndpbmRvdy5FY2hvID0gRWNobzsiLCJleHBvcnQgZnVuY3Rpb24gdXVpZChsZW4sIHJhZGl4KSB7XHJcbiAgICB2YXIgY2hhcnMgPSAnMDEyMzQ1Njc4OUFCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXonLnNwbGl0KCcnKTtcclxuICAgIHZhciB1dWlkID0gW10sIGk7XHJcbiAgICByYWRpeCA9IHJhZGl4IHx8IGNoYXJzLmxlbmd0aDtcclxuXHJcbiAgICBpZiAobGVuKSB7XHJcbiAgICAgICAgLy8gQ29tcGFjdCBmb3JtXHJcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGxlbjsgaSsrKSB1dWlkW2ldID0gY2hhcnNbMCB8IE1hdGgucmFuZG9tKCkgKiByYWRpeF07XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8vIHJmYzQxMjIsIHZlcnNpb24gNCBmb3JtXHJcbiAgICAgICAgdmFyIHI7XHJcblxyXG4gICAgICAgIC8vIHJmYzQxMjIgcmVxdWlyZXMgdGhlc2UgY2hhcmFjdGVyc1xyXG4gICAgICAgIHV1aWRbOF0gPSB1dWlkWzEzXSA9IHV1aWRbMThdID0gdXVpZFsyM10gPSAnLSc7XHJcbiAgICAgICAgdXVpZFsxNF0gPSAnNCc7XHJcblxyXG4gICAgICAgIC8vIEZpbGwgaW4gcmFuZG9tIGRhdGEuIEF0IGk9PTE5IHNldCB0aGUgaGlnaCBiaXRzIG9mIGNsb2NrIHNlcXVlbmNlIGFzXHJcbiAgICAgICAgLy8gcGVyIHJmYzQxMjIsIHNlYy4gNC4xLjVcclxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgMzY7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAoIXV1aWRbaV0pIHtcclxuICAgICAgICAgICAgICAgIHIgPSAwIHwgTWF0aC5yYW5kb20oKSAqIDE2O1xyXG4gICAgICAgICAgICAgICAgdXVpZFtpXSA9IGNoYXJzWyhpID09IDE5KSA/IChyICYgMHgzKSB8IDB4OCA6IHJdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB1dWlkLmpvaW4oJycpO1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==
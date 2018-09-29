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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NoYW5uZWwvc29ja2V0LWNoYW5uZWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Nvbm5lY3Rvci9zb2NrZXQtY29ubmVjdG9yLmpzIiwid2VicGFjazovLy8uL3NyYy9lY2hvLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlsL3V1aWQuanMiXSwibmFtZXMiOlsiU29ja2V0Q2hhbm5lbCIsImNvbm5lY3RvciIsImNoYW5uZWwiLCJldmVudHMiLCJldmVudCIsImNhbGxiYWNrIiwiZSIsImRhdGEiLCJTb2NrZXRDb25uZWN0b3IiLCJvcHRpb25zIiwiX2luaXQiLCJydW4iLCJjaGFubmVscyIsInNvY2tldCIsImdldFNvY2tldElvIiwidXVpZCIsImdldFV1aWQiLCJvbmNsb3NlIiwiY2xvc2VDYWxsQmFjayIsIm9ub3BlbiIsImF1dGhvcml6YXRpb24iLCJyZWFkeVN0YXRlIiwiV2ViU29ja2V0IiwiQ0xPU0VEIiwidHlwZSIsImNvbnNvbGUiLCJlcnJvciIsImhvc3QiLCJ1bmRlZmluZWQiLCJzZW5kIiwiYXV0aG9yaXphdGlvbkNhbGxCYWNrIiwic3RhdHVzIiwiaSIsImoiLCJqc29uIiwiSlNPTiIsInN0cmluZ2lmeSIsImFkZEV2ZW50TGlzdGVuZXIiLCJwYXJzZSIsIkVjaG8iLCJsZW4iLCJyYWRpeCIsImNoYXJzIiwic3BsaXQiLCJsZW5ndGgiLCJNYXRoIiwicmFuZG9tIiwiciIsImpvaW4iXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7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SixFQUFTO0FBQ0w7QUFDQSxTQUFLUixDQUFDLEdBQUcsQ0FBVCxFQUFZQSxDQUFDLEdBQUdRLEdBQWhCLEVBQXFCUixDQUFDLEVBQXRCO0FBQTBCakIsVUFBSSxDQUFDaUIsQ0FBRCxDQUFKLEdBQVVVLEtBQUssQ0FBQyxJQUFJRyxJQUFJLENBQUNDLE1BQUwsS0FBZ0JMLEtBQXJCLENBQWY7QUFBMUI7QUFDSCxHQUhELE1BR087QUFDSDtBQUNBLFFBQUlNLENBQUosQ0FGRyxDQUlIOztBQUNBaEMsUUFBSSxDQUFDLENBQUQsQ0FBSixHQUFVQSxJQUFJLENBQUMsRUFBRCxDQUFKLEdBQVdBLElBQUksQ0FBQyxFQUFELENBQUosR0FBV0EsSUFBSSxDQUFDLEVBQUQsQ0FBSixHQUFXLEdBQTNDO0FBQ0FBLFFBQUksQ0FBQyxFQUFELENBQUosR0FBVyxHQUFYLENBTkcsQ0FRSDtBQUNBOztBQUNBLFNBQUtpQixDQUFDLEdBQUcsQ0FBVCxFQUFZQSxDQUFDLEdBQUcsRUFBaEIsRUFBb0JBLENBQUMsRUFBckIsRUFBeUI7QUFDckIsVUFBSSxDQUFDakIsSUFBSSxDQUFDaUIsQ0FBRCxDQUFULEVBQWM7QUFDVmUsU0FBQyxHQUFHLElBQUlGLElBQUksQ0FBQ0MsTUFBTCxLQUFnQixFQUF4QjtBQUNBL0IsWUFBSSxDQUFDaUIsQ0FBRCxDQUFKLEdBQVVVLEtBQUssQ0FBRVYsQ0FBQyxJQUFJLEVBQU4sR0FBYWUsQ0FBQyxHQUFHLEdBQUwsR0FBWSxHQUF4QixHQUE4QkEsQ0FBL0IsQ0FBZjtBQUNIO0FBQ0o7QUFDSjs7QUFFRCxTQUFPaEMsSUFBSSxDQUFDaUMsSUFBTCxDQUFVLEVBQVYsQ0FBUDtBQUNILEMiLCJmaWxlIjoiZWNoby5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2VjaG8uanNcIik7XG4iLCJleHBvcnQgY2xhc3MgU29ja2V0Q2hhbm5lbCB7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAcGFyYW0gY29ubmVjdG9yXHJcbiAgICAgKiBAcGFyYW0gY2hhbm5lbFxyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3Rvcihjb25uZWN0b3IsIGNoYW5uZWwpIHtcclxuICAgICAgICB0aGlzLmNvbm5lY3RvciA9IGNvbm5lY3RvcjtcclxuICAgICAgICB0aGlzLmNoYW5uZWwgPSBjaGFubmVsO1xyXG5cclxuICAgICAgICB0aGlzLmV2ZW50cyA9IHt9O1xyXG4gICAgfVxyXG5cclxuICAgIGxpc3RlbihldmVudCwgY2FsbGJhY2spIHtcclxuICAgICAgICB0aGlzLmV2ZW50c1tldmVudF0gPSAoZSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZS5jaGFubmVsID09PSB0aGlzLmNoYW5uZWwgJiYgZS5ldmVudCA9PT0gZXZlbnQpIHtcclxuICAgICAgICAgICAgICAgIGNhbGxiYWNrKGUuZGF0YSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG59IiwiaW1wb3J0IHtTb2NrZXRDaGFubmVsfSBmcm9tICcuLi9jaGFubmVsL3NvY2tldC1jaGFubmVsJ1xyXG5pbXBvcnQge3V1aWR9IGZyb20gXCIuLi91dGlsL3V1aWRcIlxyXG5cclxuZXhwb3J0IGNsYXNzIFNvY2tldENvbm5lY3RvciB7XHJcbiAgICAvKipcclxuICAgICAqIEBwYXJhbSBvcHRpb25zICB7aG9zdCA6IHdzOi8vMTkyLjE2OC4xMC4xMDo4MDgxL2E4MjM5M2Q4ODZhMGU2ZGRmYWU1fVxyXG4gICAgICogQHJldHVybnMge1NvY2tldENvbm5lY3Rvcn1cclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3Iob3B0aW9ucykge1xyXG4gICAgICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XHJcblxyXG4gICAgICAgIHRoaXMuX2luaXQoKTtcclxuICAgICAgICByZXR1cm4gdGhpcy5ydW4oKTtcclxuICAgIH1cclxuXHJcbiAgICBfaW5pdCgpIHtcclxuICAgICAgICAvL+iuoumYheeahOmikemBk1xyXG4gICAgICAgIHRoaXMuY2hhbm5lbHMgPSB7fTtcclxuXHJcbiAgICAgICAgdGhpcy5zb2NrZXQgPSB0aGlzLmdldFNvY2tldElvKCk7XHJcbiAgICAgICAgdGhpcy5zb2NrZXQudXVpZCA9IHRoaXMuZ2V0VXVpZCgpO1xyXG5cclxuICAgICAgICB0aGlzLnNvY2tldC5vbmNsb3NlID0gKGUpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5jbG9zZUNhbGxCYWNrKGUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNvY2tldC5vbm9wZW4gPSAoZSkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmF1dGhvcml6YXRpb24oKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjbG9zZUNhbGxCYWNrKGUpIHtcclxuICAgICAgICBpZiAodGhpcy5zb2NrZXQucmVhZHlTdGF0ZSA9PSBXZWJTb2NrZXQuQ0xPU0VEKSB7XHJcbiAgICAgICAgICAgIGlmIChlLnR5cGUgPT0gJ2Nsb3NlJykge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignc29ja2V05pyN5Yqh5bey5pat5byAISEnKVxyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGUudHlwZSA9PSAnbWVzc2FnZScpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZS5kYXRhKVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcign5bey5pat5byAISEnKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJ1bigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBnZXRTb2NrZXRJbygpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFdlYlNvY2tldCh0aGlzLm9wdGlvbnMuaG9zdCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0VXVpZCgpIHtcclxuICAgICAgICBpZiAodGhpcy5zb2NrZXQudXVpZCA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB1dWlkKDgsIDE2KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc29ja2V0LnV1aWQ7XHJcbiAgICB9XHJcblxyXG4gICAgYXV0aG9yaXphdGlvbigpIHtcclxuXHJcbiAgICAgICAgdGhpcy5zZW5kKHtcclxuICAgICAgICAgICAgdXVpZDogdGhpcy5nZXRVdWlkKClcclxuICAgICAgICB9LCB0aGlzLmF1dGhvcml6YXRpb25DYWxsQmFjaygpKVxyXG4gICAgfVxyXG5cclxuICAgIGF1dGhvcml6YXRpb25DYWxsQmFjaygpIHtcclxuICAgICAgICByZXR1cm4gKGUpID0+IHtcclxuICAgICAgICAgICAgaWYgKGUuc3RhdHVzID09PSA0MDEpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZS5lcnJvcik7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChlLnN0YXR1cyA9PT0gMjAwKSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpIGluIHRoaXMuY2hhbm5lbHMpIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgY2hhbm5lbCA9IHRoaXMuY2hhbm5lbHNbaV07XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGogaW4gY2hhbm5lbC5ldmVudHMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZW5kKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHV1aWQ6IHRoaXMuZ2V0VXVpZCgpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hhbm5lbDogY2hhbm5lbC5jaGFubmVsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnQ6IGpcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSwgY2hhbm5lbC5ldmVudHNbal0pXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzZW5kKGpzb24sIGNhbGxiYWNrKSB7XHJcbiAgICAgICAgdGhpcy5zb2NrZXQuc2VuZChKU09OLnN0cmluZ2lmeShqc29uKSk7XHJcblxyXG4gICAgICAgIHRoaXMuc29ja2V0LmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICBsZXQganNvbiA9IEpTT04ucGFyc2UoZS5kYXRhKTtcclxuICAgICAgICAgICAgY2FsbGJhY2soanNvbilcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBjaGFubmVsKGNoYW5uZWwpIHtcclxuICAgICAgICBpZiAodGhpcy5jaGFubmVsc1tjaGFubmVsXSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2hhbm5lbHNbY2hhbm5lbF0gPSBuZXcgU29ja2V0Q2hhbm5lbCh0aGlzLCBjaGFubmVsKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLmNoYW5uZWxzW2NoYW5uZWxdO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7U29ja2V0Q29ubmVjdG9yfSBmcm9tICcuL2Nvbm5lY3Rvci9zb2NrZXQtY29ubmVjdG9yJ1xyXG5cclxuZXhwb3J0IGNsYXNzIEVjaG8ge1xyXG4gICAgY29uc3RydWN0b3Iob3B0aW9ucykge1xyXG4gICAgICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XHJcblxyXG4gICAgICAgIHRoaXMuY29ubmVjdG9yID0gbmV3IFNvY2tldENvbm5lY3RvcihvcHRpb25zKTtcclxuICAgIH1cclxuXHJcbiAgICBjaGFubmVsKGNoYW5uZWwpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jb25uZWN0b3IuY2hhbm5lbChjaGFubmVsKTtcclxuICAgIH1cclxufSIsImV4cG9ydCBmdW5jdGlvbiB1dWlkKGxlbiwgcmFkaXgpIHtcclxuICAgIHZhciBjaGFycyA9ICcwMTIzNDU2Nzg5QUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVphYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5eicuc3BsaXQoJycpO1xyXG4gICAgdmFyIHV1aWQgPSBbXSwgaTtcclxuICAgIHJhZGl4ID0gcmFkaXggfHwgY2hhcnMubGVuZ3RoO1xyXG5cclxuICAgIGlmIChsZW4pIHtcclxuICAgICAgICAvLyBDb21wYWN0IGZvcm1cclxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbGVuOyBpKyspIHV1aWRbaV0gPSBjaGFyc1swIHwgTWF0aC5yYW5kb20oKSAqIHJhZGl4XTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgLy8gcmZjNDEyMiwgdmVyc2lvbiA0IGZvcm1cclxuICAgICAgICB2YXIgcjtcclxuXHJcbiAgICAgICAgLy8gcmZjNDEyMiByZXF1aXJlcyB0aGVzZSBjaGFyYWN0ZXJzXHJcbiAgICAgICAgdXVpZFs4XSA9IHV1aWRbMTNdID0gdXVpZFsxOF0gPSB1dWlkWzIzXSA9ICctJztcclxuICAgICAgICB1dWlkWzE0XSA9ICc0JztcclxuXHJcbiAgICAgICAgLy8gRmlsbCBpbiByYW5kb20gZGF0YS4gQXQgaT09MTkgc2V0IHRoZSBoaWdoIGJpdHMgb2YgY2xvY2sgc2VxdWVuY2UgYXNcclxuICAgICAgICAvLyBwZXIgcmZjNDEyMiwgc2VjLiA0LjEuNVxyXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCAzNjsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmICghdXVpZFtpXSkge1xyXG4gICAgICAgICAgICAgICAgciA9IDAgfCBNYXRoLnJhbmRvbSgpICogMTY7XHJcbiAgICAgICAgICAgICAgICB1dWlkW2ldID0gY2hhcnNbKGkgPT0gMTkpID8gKHIgJiAweDMpIHwgMHg4IDogcl07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHV1aWQuam9pbignJyk7XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9
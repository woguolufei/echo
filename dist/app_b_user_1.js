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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app_b_user_1.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/luffy-pusher/dist/pusher.js":
/*!**************************************************!*\
  !*** ./node_modules/luffy-pusher/dist/pusher.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pusher.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/axios/index.js":
/*!*************************************!*\
  !*** ./node_modules/axios/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./lib/axios */ "./node_modules/axios/lib/axios.js");

/***/ }),

/***/ "./node_modules/axios/lib/adapters/xhr.js":
/*!************************************************!*\
  !*** ./node_modules/axios/lib/adapters/xhr.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");
var settle = __webpack_require__(/*! ./../core/settle */ "./node_modules/axios/lib/core/settle.js");
var buildURL = __webpack_require__(/*! ./../helpers/buildURL */ "./node_modules/axios/lib/helpers/buildURL.js");
var parseHeaders = __webpack_require__(/*! ./../helpers/parseHeaders */ "./node_modules/axios/lib/helpers/parseHeaders.js");
var isURLSameOrigin = __webpack_require__(/*! ./../helpers/isURLSameOrigin */ "./node_modules/axios/lib/helpers/isURLSameOrigin.js");
var createError = __webpack_require__(/*! ../core/createError */ "./node_modules/axios/lib/core/createError.js");
var btoa = (typeof window !== 'undefined' && window.btoa && window.btoa.bind(window)) || __webpack_require__(/*! ./../helpers/btoa */ "./node_modules/axios/lib/helpers/btoa.js");

module.exports = function xhrAdapter(config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    var requestData = config.data;
    var requestHeaders = config.headers;

    if (utils.isFormData(requestData)) {
      delete requestHeaders['Content-Type']; // Let the browser set it
    }

    var request = new XMLHttpRequest();
    var loadEvent = 'onreadystatechange';
    var xDomain = false;

    // For IE 8/9 CORS support
    // Only supports POST and GET calls and doesn't returns the response headers.
    // DON'T do this for testing b/c XMLHttpRequest is mocked, not XDomainRequest.
    if ("development" !== 'test' &&
        typeof window !== 'undefined' &&
        window.XDomainRequest && !('withCredentials' in request) &&
        !isURLSameOrigin(config.url)) {
      request = new window.XDomainRequest();
      loadEvent = 'onload';
      xDomain = true;
      request.onprogress = function handleProgress() {};
      request.ontimeout = function handleTimeout() {};
    }

    // HTTP basic authentication
    if (config.auth) {
      var username = config.auth.username || '';
      var password = config.auth.password || '';
      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
    }

    request.open(config.method.toUpperCase(), buildURL(config.url, config.params, config.paramsSerializer), true);

    // Set the request timeout in MS
    request.timeout = config.timeout;

    // Listen for ready state
    request[loadEvent] = function handleLoad() {
      if (!request || (request.readyState !== 4 && !xDomain)) {
        return;
      }

      // The request errored out and we didn't get a response, this will be
      // handled by onerror instead
      // With one exception: request that using file: protocol, most browsers
      // will return status as 0 even though it's a successful request
      if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
        return;
      }

      // Prepare the response
      var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
      var responseData = !config.responseType || config.responseType === 'text' ? request.responseText : request.response;
      var response = {
        data: responseData,
        // IE sends 1223 instead of 204 (https://github.com/axios/axios/issues/201)
        status: request.status === 1223 ? 204 : request.status,
        statusText: request.status === 1223 ? 'No Content' : request.statusText,
        headers: responseHeaders,
        config: config,
        request: request
      };

      settle(resolve, reject, response);

      // Clean up request
      request = null;
    };

    // Handle low level network errors
    request.onerror = function handleError() {
      // Real errors are hidden from us by the browser
      // onerror should only fire if it's a network error
      reject(createError('Network Error', config, null, request));

      // Clean up request
      request = null;
    };

    // Handle timeout
    request.ontimeout = function handleTimeout() {
      reject(createError('timeout of ' + config.timeout + 'ms exceeded', config, 'ECONNABORTED',
        request));

      // Clean up request
      request = null;
    };

    // Add xsrf header
    // This is only done if running in a standard browser environment.
    // Specifically not if we're in a web worker, or react-native.
    if (utils.isStandardBrowserEnv()) {
      var cookies = __webpack_require__(/*! ./../helpers/cookies */ "./node_modules/axios/lib/helpers/cookies.js");

      // Add xsrf header
      var xsrfValue = (config.withCredentials || isURLSameOrigin(config.url)) && config.xsrfCookieName ?
          cookies.read(config.xsrfCookieName) :
          undefined;

      if (xsrfValue) {
        requestHeaders[config.xsrfHeaderName] = xsrfValue;
      }
    }

    // Add headers to the request
    if ('setRequestHeader' in request) {
      utils.forEach(requestHeaders, function setRequestHeader(val, key) {
        if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
          // Remove Content-Type if data is undefined
          delete requestHeaders[key];
        } else {
          // Otherwise add header to the request
          request.setRequestHeader(key, val);
        }
      });
    }

    // Add withCredentials to request if needed
    if (config.withCredentials) {
      request.withCredentials = true;
    }

    // Add responseType to request if needed
    if (config.responseType) {
      try {
        request.responseType = config.responseType;
      } catch (e) {
        // Expected DOMException thrown by browsers not compatible XMLHttpRequest Level 2.
        // But, this can be suppressed for 'json' type as it can be parsed by default 'transformResponse' function.
        if (config.responseType !== 'json') {
          throw e;
        }
      }
    }

    // Handle progress if needed
    if (typeof config.onDownloadProgress === 'function') {
      request.addEventListener('progress', config.onDownloadProgress);
    }

    // Not all browsers support upload events
    if (typeof config.onUploadProgress === 'function' && request.upload) {
      request.upload.addEventListener('progress', config.onUploadProgress);
    }

    if (config.cancelToken) {
      // Handle cancellation
      config.cancelToken.promise.then(function onCanceled(cancel) {
        if (!request) {
          return;
        }

        request.abort();
        reject(cancel);
        // Clean up request
        request = null;
      });
    }

    if (requestData === undefined) {
      requestData = null;
    }

    // Send the request
    request.send(requestData);
  });
};


/***/ }),

/***/ "./node_modules/axios/lib/axios.js":
/*!*****************************************!*\
  !*** ./node_modules/axios/lib/axios.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./utils */ "./node_modules/axios/lib/utils.js");
var bind = __webpack_require__(/*! ./helpers/bind */ "./node_modules/axios/lib/helpers/bind.js");
var Axios = __webpack_require__(/*! ./core/Axios */ "./node_modules/axios/lib/core/Axios.js");
var defaults = __webpack_require__(/*! ./defaults */ "./node_modules/axios/lib/defaults.js");

/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 * @return {Axios} A new instance of Axios
 */
function createInstance(defaultConfig) {
  var context = new Axios(defaultConfig);
  var instance = bind(Axios.prototype.request, context);

  // Copy axios.prototype to instance
  utils.extend(instance, Axios.prototype, context);

  // Copy context to instance
  utils.extend(instance, context);

  return instance;
}

// Create the default instance to be exported
var axios = createInstance(defaults);

// Expose Axios class to allow class inheritance
axios.Axios = Axios;

// Factory for creating new instances
axios.create = function create(instanceConfig) {
  return createInstance(utils.merge(defaults, instanceConfig));
};

// Expose Cancel & CancelToken
axios.Cancel = __webpack_require__(/*! ./cancel/Cancel */ "./node_modules/axios/lib/cancel/Cancel.js");
axios.CancelToken = __webpack_require__(/*! ./cancel/CancelToken */ "./node_modules/axios/lib/cancel/CancelToken.js");
axios.isCancel = __webpack_require__(/*! ./cancel/isCancel */ "./node_modules/axios/lib/cancel/isCancel.js");

// Expose all/spread
axios.all = function all(promises) {
  return Promise.all(promises);
};
axios.spread = __webpack_require__(/*! ./helpers/spread */ "./node_modules/axios/lib/helpers/spread.js");

module.exports = axios;

// Allow use of default import syntax in TypeScript
module.exports.default = axios;


/***/ }),

/***/ "./node_modules/axios/lib/cancel/Cancel.js":
/*!*************************************************!*\
  !*** ./node_modules/axios/lib/cancel/Cancel.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * A `Cancel` is an object that is thrown when an operation is canceled.
 *
 * @class
 * @param {string=} message The message.
 */
function Cancel(message) {
  this.message = message;
}

Cancel.prototype.toString = function toString() {
  return 'Cancel' + (this.message ? ': ' + this.message : '');
};

Cancel.prototype.__CANCEL__ = true;

module.exports = Cancel;


/***/ }),

/***/ "./node_modules/axios/lib/cancel/CancelToken.js":
/*!******************************************************!*\
  !*** ./node_modules/axios/lib/cancel/CancelToken.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Cancel = __webpack_require__(/*! ./Cancel */ "./node_modules/axios/lib/cancel/Cancel.js");

/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @class
 * @param {Function} executor The executor function.
 */
function CancelToken(executor) {
  if (typeof executor !== 'function') {
    throw new TypeError('executor must be a function.');
  }

  var resolvePromise;
  this.promise = new Promise(function promiseExecutor(resolve) {
    resolvePromise = resolve;
  });

  var token = this;
  executor(function cancel(message) {
    if (token.reason) {
      // Cancellation has already been requested
      return;
    }

    token.reason = new Cancel(message);
    resolvePromise(token.reason);
  });
}

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
CancelToken.prototype.throwIfRequested = function throwIfRequested() {
  if (this.reason) {
    throw this.reason;
  }
};

/**
 * Returns an object that contains a new `CancelToken` and a function that, when called,
 * cancels the `CancelToken`.
 */
CancelToken.source = function source() {
  var cancel;
  var token = new CancelToken(function executor(c) {
    cancel = c;
  });
  return {
    token: token,
    cancel: cancel
  };
};

module.exports = CancelToken;


/***/ }),

/***/ "./node_modules/axios/lib/cancel/isCancel.js":
/*!***************************************************!*\
  !*** ./node_modules/axios/lib/cancel/isCancel.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function isCancel(value) {
  return !!(value && value.__CANCEL__);
};


/***/ }),

/***/ "./node_modules/axios/lib/core/Axios.js":
/*!**********************************************!*\
  !*** ./node_modules/axios/lib/core/Axios.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var defaults = __webpack_require__(/*! ./../defaults */ "./node_modules/axios/lib/defaults.js");
var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");
var InterceptorManager = __webpack_require__(/*! ./InterceptorManager */ "./node_modules/axios/lib/core/InterceptorManager.js");
var dispatchRequest = __webpack_require__(/*! ./dispatchRequest */ "./node_modules/axios/lib/core/dispatchRequest.js");

/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 */
function Axios(instanceConfig) {
  this.defaults = instanceConfig;
  this.interceptors = {
    request: new InterceptorManager(),
    response: new InterceptorManager()
  };
}

/**
 * Dispatch a request
 *
 * @param {Object} config The config specific for this request (merged with this.defaults)
 */
Axios.prototype.request = function request(config) {
  /*eslint no-param-reassign:0*/
  // Allow for axios('example/url'[, config]) a la fetch API
  if (typeof config === 'string') {
    config = utils.merge({
      url: arguments[0]
    }, arguments[1]);
  }

  config = utils.merge(defaults, {method: 'get'}, this.defaults, config);
  config.method = config.method.toLowerCase();

  // Hook up interceptors middleware
  var chain = [dispatchRequest, undefined];
  var promise = Promise.resolve(config);

  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
    chain.unshift(interceptor.fulfilled, interceptor.rejected);
  });

  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
    chain.push(interceptor.fulfilled, interceptor.rejected);
  });

  while (chain.length) {
    promise = promise.then(chain.shift(), chain.shift());
  }

  return promise;
};

// Provide aliases for supported request methods
utils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url
    }));
  };
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, data, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url,
      data: data
    }));
  };
});

module.exports = Axios;


/***/ }),

/***/ "./node_modules/axios/lib/core/InterceptorManager.js":
/*!***********************************************************!*\
  !*** ./node_modules/axios/lib/core/InterceptorManager.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

function InterceptorManager() {
  this.handlers = [];
}

/**
 * Add a new interceptor to the stack
 *
 * @param {Function} fulfilled The function to handle `then` for a `Promise`
 * @param {Function} rejected The function to handle `reject` for a `Promise`
 *
 * @return {Number} An ID used to remove interceptor later
 */
InterceptorManager.prototype.use = function use(fulfilled, rejected) {
  this.handlers.push({
    fulfilled: fulfilled,
    rejected: rejected
  });
  return this.handlers.length - 1;
};

/**
 * Remove an interceptor from the stack
 *
 * @param {Number} id The ID that was returned by `use`
 */
InterceptorManager.prototype.eject = function eject(id) {
  if (this.handlers[id]) {
    this.handlers[id] = null;
  }
};

/**
 * Iterate over all the registered interceptors
 *
 * This method is particularly useful for skipping over any
 * interceptors that may have become `null` calling `eject`.
 *
 * @param {Function} fn The function to call for each interceptor
 */
InterceptorManager.prototype.forEach = function forEach(fn) {
  utils.forEach(this.handlers, function forEachHandler(h) {
    if (h !== null) {
      fn(h);
    }
  });
};

module.exports = InterceptorManager;


/***/ }),

/***/ "./node_modules/axios/lib/core/createError.js":
/*!****************************************************!*\
  !*** ./node_modules/axios/lib/core/createError.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var enhanceError = __webpack_require__(/*! ./enhanceError */ "./node_modules/axios/lib/core/enhanceError.js");

/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The created error.
 */
module.exports = function createError(message, config, code, request, response) {
  var error = new Error(message);
  return enhanceError(error, config, code, request, response);
};


/***/ }),

/***/ "./node_modules/axios/lib/core/dispatchRequest.js":
/*!********************************************************!*\
  !*** ./node_modules/axios/lib/core/dispatchRequest.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");
var transformData = __webpack_require__(/*! ./transformData */ "./node_modules/axios/lib/core/transformData.js");
var isCancel = __webpack_require__(/*! ../cancel/isCancel */ "./node_modules/axios/lib/cancel/isCancel.js");
var defaults = __webpack_require__(/*! ../defaults */ "./node_modules/axios/lib/defaults.js");
var isAbsoluteURL = __webpack_require__(/*! ./../helpers/isAbsoluteURL */ "./node_modules/axios/lib/helpers/isAbsoluteURL.js");
var combineURLs = __webpack_require__(/*! ./../helpers/combineURLs */ "./node_modules/axios/lib/helpers/combineURLs.js");

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }
}

/**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 * @returns {Promise} The Promise to be fulfilled
 */
module.exports = function dispatchRequest(config) {
  throwIfCancellationRequested(config);

  // Support baseURL config
  if (config.baseURL && !isAbsoluteURL(config.url)) {
    config.url = combineURLs(config.baseURL, config.url);
  }

  // Ensure headers exist
  config.headers = config.headers || {};

  // Transform request data
  config.data = transformData(
    config.data,
    config.headers,
    config.transformRequest
  );

  // Flatten headers
  config.headers = utils.merge(
    config.headers.common || {},
    config.headers[config.method] || {},
    config.headers || {}
  );

  utils.forEach(
    ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
    function cleanHeaderConfig(method) {
      delete config.headers[method];
    }
  );

  var adapter = config.adapter || defaults.adapter;

  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config);

    // Transform response data
    response.data = transformData(
      response.data,
      response.headers,
      config.transformResponse
    );

    return response;
  }, function onAdapterRejection(reason) {
    if (!isCancel(reason)) {
      throwIfCancellationRequested(config);

      // Transform response data
      if (reason && reason.response) {
        reason.response.data = transformData(
          reason.response.data,
          reason.response.headers,
          config.transformResponse
        );
      }
    }

    return Promise.reject(reason);
  });
};


/***/ }),

/***/ "./node_modules/axios/lib/core/enhanceError.js":
/*!*****************************************************!*\
  !*** ./node_modules/axios/lib/core/enhanceError.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Update an Error with the specified config, error code, and response.
 *
 * @param {Error} error The error to update.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The error.
 */
module.exports = function enhanceError(error, config, code, request, response) {
  error.config = config;
  if (code) {
    error.code = code;
  }
  error.request = request;
  error.response = response;
  return error;
};


/***/ }),

/***/ "./node_modules/axios/lib/core/settle.js":
/*!***********************************************!*\
  !*** ./node_modules/axios/lib/core/settle.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var createError = __webpack_require__(/*! ./createError */ "./node_modules/axios/lib/core/createError.js");

/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 */
module.exports = function settle(resolve, reject, response) {
  var validateStatus = response.config.validateStatus;
  // Note: status is not exposed by XDomainRequest
  if (!response.status || !validateStatus || validateStatus(response.status)) {
    resolve(response);
  } else {
    reject(createError(
      'Request failed with status code ' + response.status,
      response.config,
      null,
      response.request,
      response
    ));
  }
};


/***/ }),

/***/ "./node_modules/axios/lib/core/transformData.js":
/*!******************************************************!*\
  !*** ./node_modules/axios/lib/core/transformData.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

/**
 * Transform the data for a request or a response
 *
 * @param {Object|String} data The data to be transformed
 * @param {Array} headers The headers for the request or response
 * @param {Array|Function} fns A single function or Array of functions
 * @returns {*} The resulting transformed data
 */
module.exports = function transformData(data, headers, fns) {
  /*eslint no-param-reassign:0*/
  utils.forEach(fns, function transform(fn) {
    data = fn(data, headers);
  });

  return data;
};


/***/ }),

/***/ "./node_modules/axios/lib/defaults.js":
/*!********************************************!*\
  !*** ./node_modules/axios/lib/defaults.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var utils = __webpack_require__(/*! ./utils */ "./node_modules/axios/lib/utils.js");
var normalizeHeaderName = __webpack_require__(/*! ./helpers/normalizeHeaderName */ "./node_modules/axios/lib/helpers/normalizeHeaderName.js");

var DEFAULT_CONTENT_TYPE = {
  'Content-Type': 'application/x-www-form-urlencoded'
};

function setContentTypeIfUnset(headers, value) {
  if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
    headers['Content-Type'] = value;
  }
}

function getDefaultAdapter() {
  var adapter;
  if (typeof XMLHttpRequest !== 'undefined') {
    // For browsers use XHR adapter
    adapter = __webpack_require__(/*! ./adapters/xhr */ "./node_modules/axios/lib/adapters/xhr.js");
  } else if (typeof process !== 'undefined') {
    // For node use HTTP adapter
    adapter = __webpack_require__(/*! ./adapters/http */ "./node_modules/axios/lib/adapters/xhr.js");
  }
  return adapter;
}

var defaults = {
  adapter: getDefaultAdapter(),

  transformRequest: [function transformRequest(data, headers) {
    normalizeHeaderName(headers, 'Content-Type');
    if (utils.isFormData(data) ||
      utils.isArrayBuffer(data) ||
      utils.isBuffer(data) ||
      utils.isStream(data) ||
      utils.isFile(data) ||
      utils.isBlob(data)
    ) {
      return data;
    }
    if (utils.isArrayBufferView(data)) {
      return data.buffer;
    }
    if (utils.isURLSearchParams(data)) {
      setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
      return data.toString();
    }
    if (utils.isObject(data)) {
      setContentTypeIfUnset(headers, 'application/json;charset=utf-8');
      return JSON.stringify(data);
    }
    return data;
  }],

  transformResponse: [function transformResponse(data) {
    /*eslint no-param-reassign:0*/
    if (typeof data === 'string') {
      try {
        data = JSON.parse(data);
      } catch (e) { /* Ignore */ }
    }
    return data;
  }],

  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,

  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',

  maxContentLength: -1,

  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  }
};

defaults.headers = {
  common: {
    'Accept': 'application/json, text/plain, */*'
  }
};

utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
  defaults.headers[method] = {};
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
});

module.exports = defaults;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/axios/lib/helpers/bind.js":
/*!************************************************!*\
  !*** ./node_modules/axios/lib/helpers/bind.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function bind(fn, thisArg) {
  return function wrap() {
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }
    return fn.apply(thisArg, args);
  };
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/btoa.js":
/*!************************************************!*\
  !*** ./node_modules/axios/lib/helpers/btoa.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// btoa polyfill for IE<10 courtesy https://github.com/davidchambers/Base64.js

var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';

function E() {
  this.message = 'String contains an invalid character';
}
E.prototype = new Error;
E.prototype.code = 5;
E.prototype.name = 'InvalidCharacterError';

function btoa(input) {
  var str = String(input);
  var output = '';
  for (
    // initialize result and counter
    var block, charCode, idx = 0, map = chars;
    // if the next str index does not exist:
    //   change the mapping table to "="
    //   check if d has no fractional digits
    str.charAt(idx | 0) || (map = '=', idx % 1);
    // "8 - idx % 1 * 8" generates the sequence 2, 4, 6, 8
    output += map.charAt(63 & block >> 8 - idx % 1 * 8)
  ) {
    charCode = str.charCodeAt(idx += 3 / 4);
    if (charCode > 0xFF) {
      throw new E();
    }
    block = block << 8 | charCode;
  }
  return output;
}

module.exports = btoa;


/***/ }),

/***/ "./node_modules/axios/lib/helpers/buildURL.js":
/*!****************************************************!*\
  !*** ./node_modules/axios/lib/helpers/buildURL.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

function encode(val) {
  return encodeURIComponent(val).
    replace(/%40/gi, '@').
    replace(/%3A/gi, ':').
    replace(/%24/g, '$').
    replace(/%2C/gi, ',').
    replace(/%20/g, '+').
    replace(/%5B/gi, '[').
    replace(/%5D/gi, ']');
}

/**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @returns {string} The formatted url
 */
module.exports = function buildURL(url, params, paramsSerializer) {
  /*eslint no-param-reassign:0*/
  if (!params) {
    return url;
  }

  var serializedParams;
  if (paramsSerializer) {
    serializedParams = paramsSerializer(params);
  } else if (utils.isURLSearchParams(params)) {
    serializedParams = params.toString();
  } else {
    var parts = [];

    utils.forEach(params, function serialize(val, key) {
      if (val === null || typeof val === 'undefined') {
        return;
      }

      if (utils.isArray(val)) {
        key = key + '[]';
      } else {
        val = [val];
      }

      utils.forEach(val, function parseValue(v) {
        if (utils.isDate(v)) {
          v = v.toISOString();
        } else if (utils.isObject(v)) {
          v = JSON.stringify(v);
        }
        parts.push(encode(key) + '=' + encode(v));
      });
    });

    serializedParams = parts.join('&');
  }

  if (serializedParams) {
    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }

  return url;
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/combineURLs.js":
/*!*******************************************************!*\
  !*** ./node_modules/axios/lib/helpers/combineURLs.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 * @returns {string} The combined URL
 */
module.exports = function combineURLs(baseURL, relativeURL) {
  return relativeURL
    ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '')
    : baseURL;
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/cookies.js":
/*!***************************************************!*\
  !*** ./node_modules/axios/lib/helpers/cookies.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs support document.cookie
  (function standardBrowserEnv() {
    return {
      write: function write(name, value, expires, path, domain, secure) {
        var cookie = [];
        cookie.push(name + '=' + encodeURIComponent(value));

        if (utils.isNumber(expires)) {
          cookie.push('expires=' + new Date(expires).toGMTString());
        }

        if (utils.isString(path)) {
          cookie.push('path=' + path);
        }

        if (utils.isString(domain)) {
          cookie.push('domain=' + domain);
        }

        if (secure === true) {
          cookie.push('secure');
        }

        document.cookie = cookie.join('; ');
      },

      read: function read(name) {
        var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
        return (match ? decodeURIComponent(match[3]) : null);
      },

      remove: function remove(name) {
        this.write(name, '', Date.now() - 86400000);
      }
    };
  })() :

  // Non standard browser env (web workers, react-native) lack needed support.
  (function nonStandardBrowserEnv() {
    return {
      write: function write() {},
      read: function read() { return null; },
      remove: function remove() {}
    };
  })()
);


/***/ }),

/***/ "./node_modules/axios/lib/helpers/isAbsoluteURL.js":
/*!*********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/isAbsoluteURL.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */
module.exports = function isAbsoluteURL(url) {
  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
  // by any combination of letters, digits, plus, period, or hyphen.
  return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/isURLSameOrigin.js":
/*!***********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/isURLSameOrigin.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
  (function standardBrowserEnv() {
    var msie = /(msie|trident)/i.test(navigator.userAgent);
    var urlParsingNode = document.createElement('a');
    var originURL;

    /**
    * Parse a URL to discover it's components
    *
    * @param {String} url The URL to be parsed
    * @returns {Object}
    */
    function resolveURL(url) {
      var href = url;

      if (msie) {
        // IE needs attribute set twice to normalize properties
        urlParsingNode.setAttribute('href', href);
        href = urlParsingNode.href;
      }

      urlParsingNode.setAttribute('href', href);

      // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
      return {
        href: urlParsingNode.href,
        protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
        host: urlParsingNode.host,
        search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
        hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
        hostname: urlParsingNode.hostname,
        port: urlParsingNode.port,
        pathname: (urlParsingNode.pathname.charAt(0) === '/') ?
                  urlParsingNode.pathname :
                  '/' + urlParsingNode.pathname
      };
    }

    originURL = resolveURL(window.location.href);

    /**
    * Determine if a URL shares the same origin as the current location
    *
    * @param {String} requestURL The URL to test
    * @returns {boolean} True if URL shares the same origin, otherwise false
    */
    return function isURLSameOrigin(requestURL) {
      var parsed = (utils.isString(requestURL)) ? resolveURL(requestURL) : requestURL;
      return (parsed.protocol === originURL.protocol &&
            parsed.host === originURL.host);
    };
  })() :

  // Non standard browser envs (web workers, react-native) lack needed support.
  (function nonStandardBrowserEnv() {
    return function isURLSameOrigin() {
      return true;
    };
  })()
);


/***/ }),

/***/ "./node_modules/axios/lib/helpers/normalizeHeaderName.js":
/*!***************************************************************!*\
  !*** ./node_modules/axios/lib/helpers/normalizeHeaderName.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ../utils */ "./node_modules/axios/lib/utils.js");

module.exports = function normalizeHeaderName(headers, normalizedName) {
  utils.forEach(headers, function processHeader(value, name) {
    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
      headers[normalizedName] = value;
      delete headers[name];
    }
  });
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/parseHeaders.js":
/*!********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/parseHeaders.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

// Headers whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers
var ignoreDuplicateOf = [
  'age', 'authorization', 'content-length', 'content-type', 'etag',
  'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since',
  'last-modified', 'location', 'max-forwards', 'proxy-authorization',
  'referer', 'retry-after', 'user-agent'
];

/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} headers Headers needing to be parsed
 * @returns {Object} Headers parsed into an object
 */
module.exports = function parseHeaders(headers) {
  var parsed = {};
  var key;
  var val;
  var i;

  if (!headers) { return parsed; }

  utils.forEach(headers.split('\n'), function parser(line) {
    i = line.indexOf(':');
    key = utils.trim(line.substr(0, i)).toLowerCase();
    val = utils.trim(line.substr(i + 1));

    if (key) {
      if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {
        return;
      }
      if (key === 'set-cookie') {
        parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);
      } else {
        parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
      }
    }
  });

  return parsed;
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/spread.js":
/*!**************************************************!*\
  !*** ./node_modules/axios/lib/helpers/spread.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Syntactic sugar for invoking a function and expanding an array for arguments.
 *
 * Common use case would be to use `Function.prototype.apply`.
 *
 *  ```js
 *  function f(x, y, z) {}
 *  var args = [1, 2, 3];
 *  f.apply(null, args);
 *  ```
 *
 * With `spread` this example can be re-written.
 *
 *  ```js
 *  spread(function(x, y, z) {})([1, 2, 3]);
 *  ```
 *
 * @param {Function} callback
 * @returns {Function}
 */
module.exports = function spread(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
};


/***/ }),

/***/ "./node_modules/axios/lib/utils.js":
/*!*****************************************!*\
  !*** ./node_modules/axios/lib/utils.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bind = __webpack_require__(/*! ./helpers/bind */ "./node_modules/axios/lib/helpers/bind.js");
var isBuffer = __webpack_require__(/*! is-buffer */ "./node_modules/is-buffer/index.js");

/*global toString:true*/

// utils is a library of generic helper functions non-specific to axios

var toString = Object.prototype.toString;

/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Array, otherwise false
 */
function isArray(val) {
  return toString.call(val) === '[object Array]';
}

/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */
function isArrayBuffer(val) {
  return toString.call(val) === '[object ArrayBuffer]';
}

/**
 * Determine if a value is a FormData
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an FormData, otherwise false
 */
function isFormData(val) {
  return (typeof FormData !== 'undefined') && (val instanceof FormData);
}

/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */
function isArrayBufferView(val) {
  var result;
  if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
    result = ArrayBuffer.isView(val);
  } else {
    result = (val) && (val.buffer) && (val.buffer instanceof ArrayBuffer);
  }
  return result;
}

/**
 * Determine if a value is a String
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a String, otherwise false
 */
function isString(val) {
  return typeof val === 'string';
}

/**
 * Determine if a value is a Number
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Number, otherwise false
 */
function isNumber(val) {
  return typeof val === 'number';
}

/**
 * Determine if a value is undefined
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if the value is undefined, otherwise false
 */
function isUndefined(val) {
  return typeof val === 'undefined';
}

/**
 * Determine if a value is an Object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Object, otherwise false
 */
function isObject(val) {
  return val !== null && typeof val === 'object';
}

/**
 * Determine if a value is a Date
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Date, otherwise false
 */
function isDate(val) {
  return toString.call(val) === '[object Date]';
}

/**
 * Determine if a value is a File
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a File, otherwise false
 */
function isFile(val) {
  return toString.call(val) === '[object File]';
}

/**
 * Determine if a value is a Blob
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Blob, otherwise false
 */
function isBlob(val) {
  return toString.call(val) === '[object Blob]';
}

/**
 * Determine if a value is a Function
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */
function isFunction(val) {
  return toString.call(val) === '[object Function]';
}

/**
 * Determine if a value is a Stream
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Stream, otherwise false
 */
function isStream(val) {
  return isObject(val) && isFunction(val.pipe);
}

/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */
function isURLSearchParams(val) {
  return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
}

/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 * @returns {String} The String freed of excess whitespace
 */
function trim(str) {
  return str.replace(/^\s*/, '').replace(/\s*$/, '');
}

/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 */
function isStandardBrowserEnv() {
  if (typeof navigator !== 'undefined' && navigator.product === 'ReactNative') {
    return false;
  }
  return (
    typeof window !== 'undefined' &&
    typeof document !== 'undefined'
  );
}

/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 */
function forEach(obj, fn) {
  // Don't bother if no value provided
  if (obj === null || typeof obj === 'undefined') {
    return;
  }

  // Force an array if not already something iterable
  if (typeof obj !== 'object') {
    /*eslint no-param-reassign:0*/
    obj = [obj];
  }

  if (isArray(obj)) {
    // Iterate over array values
    for (var i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    // Iterate over object keys
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        fn.call(null, obj[key], key, obj);
      }
    }
  }
}

/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */
function merge(/* obj1, obj2, obj3, ... */) {
  var result = {};
  function assignValue(val, key) {
    if (typeof result[key] === 'object' && typeof val === 'object') {
      result[key] = merge(result[key], val);
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 * @return {Object} The resulting value of object a
 */
function extend(a, b, thisArg) {
  forEach(b, function assignValue(val, key) {
    if (thisArg && typeof val === 'function') {
      a[key] = bind(val, thisArg);
    } else {
      a[key] = val;
    }
  });
  return a;
}

module.exports = {
  isArray: isArray,
  isArrayBuffer: isArrayBuffer,
  isBuffer: isBuffer,
  isFormData: isFormData,
  isArrayBufferView: isArrayBufferView,
  isString: isString,
  isNumber: isNumber,
  isObject: isObject,
  isUndefined: isUndefined,
  isDate: isDate,
  isFile: isFile,
  isBlob: isBlob,
  isFunction: isFunction,
  isStream: isStream,
  isURLSearchParams: isURLSearchParams,
  isStandardBrowserEnv: isStandardBrowserEnv,
  forEach: forEach,
  merge: merge,
  extend: extend,
  trim: trim
};


/***/ }),

/***/ "./node_modules/is-buffer/index.js":
/*!*****************************************!*\
  !*** ./node_modules/is-buffer/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */

// The _isBuffer check is for Safari 5-7 support, because it's missing
// Object.prototype.constructor. Remove this eventually
module.exports = function (obj) {
  return obj != null && (isBuffer(obj) || isSlowBuffer(obj) || !!obj._isBuffer)
}

function isBuffer (obj) {
  return !!obj.constructor && typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj)
}

// For Node v0.10 support. Remove this eventually.
function isSlowBuffer (obj) {
  return typeof obj.readFloatLE === 'function' && typeof obj.slice === 'function' && isBuffer(obj.slice(0, 0))
}


/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./src/channels/channel.js":
/*!*********************************!*\
  !*** ./src/channels/channel.js ***!
  \*********************************/
/*! exports provided: Channel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Channel", function() { return Channel; });
/* harmony import */ var _events_dispatcher__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../events/dispatcher */ "./src/events/dispatcher.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }


var Channel =
/*#__PURE__*/
function (_Dispatcher) {
  _inherits(Channel, _Dispatcher);

  function Channel(name, pusher) {
    var _this;

    _classCallCheck(this, Channel);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Channel).call(this));
    _this.name = name;
    _this.pusher = pusher;

    if (_this.pusher.socket.state == 1) {
      _this.subscribe();
    }

    return _this;
  }

  _createClass(Channel, [{
    key: "subscribe",
    value: function subscribe() {
      this.pusher.send({
        event: 'subscribe',
        data: {
          channel: this.name
        }
      });
    }
  }]);

  return Channel;
}(_events_dispatcher__WEBPACK_IMPORTED_MODULE_0__["Dispatcher"]);

/***/ }),

/***/ "./src/channels/mannager.js":
/*!**********************************!*\
  !*** ./src/channels/mannager.js ***!
  \**********************************/
/*! exports provided: Mannager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Mannager", function() { return Mannager; });
/* harmony import */ var _channel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./channel */ "./src/channels/channel.js");
/* harmony import */ var _presence_channel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./presence_channel */ "./src/channels/presence_channel.js");
/* harmony import */ var _private_channel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./private_channel */ "./src/channels/private_channel.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




var Mannager =
/*#__PURE__*/
function () {
  function Mannager() {
    _classCallCheck(this, Mannager);

    this.channels = {};
  }

  _createClass(Mannager, [{
    key: "add",
    value: function add(name, pusher) {
      if (!this.channels[name]) {
        this.channels[name] = createChannel(name, pusher);
      }

      return this.channels[name];
    }
  }, {
    key: "all",
    value: function all() {
      return Object.keys(this.channels);
    }
  }, {
    key: "find",
    value: function find(name) {
      return this.channels[name];
    }
  }, {
    key: "remove",
    value: function remove(name) {
      var channel = this.channels[name];
      delete this.channels[name];
      return channel;
    }
  }, {
    key: "subscribe",
    value: function subscribe() {
      for (var i in this.channels) {
        this.channels[i].subscribe();
      }
    }
  }]);

  return Mannager;
}();

function createChannel(name, pusher) {
  if (name.indexOf('private-') === 0) {
    return new _private_channel__WEBPACK_IMPORTED_MODULE_2__["PrivateChannel"](name, pusher);
  } else if (name.indexOf('presence-') === 0) {
    return new _presence_channel__WEBPACK_IMPORTED_MODULE_1__["PresenceChannel"](name, pusher);
  } else {
    return new _channel__WEBPACK_IMPORTED_MODULE_0__["Channel"](name, pusher);
  }
}

/***/ }),

/***/ "./src/channels/presence_channel.js":
/*!******************************************!*\
  !*** ./src/channels/presence_channel.js ***!
  \******************************************/
/*! exports provided: PresenceChannel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PresenceChannel", function() { return PresenceChannel; });
/* harmony import */ var _events_dispatcher__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../events/dispatcher */ "./src/events/dispatcher.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }


var PresenceChannel =
/*#__PURE__*/
function (_Dispatcher) {
  _inherits(PresenceChannel, _Dispatcher);

  function PresenceChannel(name, pusher) {
    var _this;

    _classCallCheck(this, PresenceChannel);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(PresenceChannel).call(this));
    _this.name = name;
    _this.pusher = pusher;
    _this.auth = null;

    if (_this.pusher.socket.state == 1) {
      _this.subscribe();
    }

    return _this;
  }

  _createClass(PresenceChannel, [{
    key: "subscribe",
    value: function subscribe() {
      var _this2 = this;

      this.pusher.auth(this.name, function (e) {
        _this2.auth = e.data.auth;

        _this2.pusher.send({
          event: 'subscribe',
          data: {
            channel: _this2.name,
            auth: _this2.auth,
            channel_data: e.data.channel_data
          }
        });
      });
    }
  }]);

  return PresenceChannel;
}(_events_dispatcher__WEBPACK_IMPORTED_MODULE_0__["Dispatcher"]);

/***/ }),

/***/ "./src/channels/private_channel.js":
/*!*****************************************!*\
  !*** ./src/channels/private_channel.js ***!
  \*****************************************/
/*! exports provided: PrivateChannel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrivateChannel", function() { return PrivateChannel; });
/* harmony import */ var _events_dispatcher__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../events/dispatcher */ "./src/events/dispatcher.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }


var PrivateChannel =
/*#__PURE__*/
function (_Dispatcher) {
  _inherits(PrivateChannel, _Dispatcher);

  function PrivateChannel(name, pusher) {
    var _this;

    _classCallCheck(this, PrivateChannel);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(PrivateChannel).call(this));
    _this.name = name;
    _this.pusher = pusher;
    _this.auth = null;

    if (_this.pusher.socket.state == 1) {
      _this.subscribe();
    }

    return _this;
  }

  _createClass(PrivateChannel, [{
    key: "subscribe",
    value: function subscribe() {
      var _this2 = this;

      this.pusher.auth(this.name, function (e) {
        _this2.auth = e.data.auth;

        _this2.pusher.send({
          event: 'subscribe',
          data: {
            channel: _this2.name,
            auth: _this2.auth
          }
        });
      });
    }
  }]);

  return PrivateChannel;
}(_events_dispatcher__WEBPACK_IMPORTED_MODULE_0__["Dispatcher"]);

/***/ }),

/***/ "./src/connection/socket.js":
/*!**********************************!*\
  !*** ./src/connection/socket.js ***!
  \**********************************/
/*! exports provided: Socket */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Socket", function() { return Socket; });
/* harmony import */ var _events_dispatcher__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../events/dispatcher */ "./src/events/dispatcher.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }


var Socket =
/*#__PURE__*/
function (_Dispatcher) {
  _inherits(Socket, _Dispatcher);

  function Socket(pusher, host) {
    var _this;

    _classCallCheck(this, Socket);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Socket).call(this));
    _this.pusher = pusher;
    _this.socket = new WebSocket(host + '/' + _this.pusher.key);

    _this.bindListeners();

    return _this;
  }

  _createClass(Socket, [{
    key: "bindListeners",
    value: function bindListeners() {
      var _this2 = this;

      this.socket.onopen = function () {
        _this2.onOpen();
      };

      this.socket.onerror = function (error) {
        _this2.onError(error);
      };

      this.socket.onclose = function (closeEvent) {
        _this2.onClose(closeEvent);
      };

      this.socket.onmessage = function (message) {
        _this2.onMessage(message);
      };
    }
  }, {
    key: "onOpen",
    value: function onOpen() {
      var _this3 = this;

      //初始状态
      this.state = 0;
      this.bind('connected', function (e) {
        _this3.socket.socket_id = e.socket_id;
        _this3.state = 1; //订阅

        _this3.pusher.channels.subscribe();
      });
      this.bind('connection_failed', function (e) {
        _this3.state = -1;
        console.error(e.error);
      });
      /*this.send({
          event: 'authorization'
      });*/
    }
  }, {
    key: "onError",
    value: function onError(error) {
      console.error(error);
    }
  }, {
    key: "onClose",
    value: function onClose(closeEvent) {
      if (this.socket.readyState == WebSocket.CLOSED) {
        if (closeEvent.type == 'close') {
          console.error('socket服务已断开!!');
        } else if (closeEvent.type == 'message') {
          console.error(closeEvent.data);
        } else {
          console.error('已断开!!');
        }
      }
    }
  }, {
    key: "onMessage",
    value: function onMessage(message) {
      var eData = JSON.parse(message.data);
      var event = eData.event;
      var data = eData.data;

      if (eData.channel !== undefined) {
        this.pusher.channels.find(eData.channel).emit(event, data);
      } else {
        this.emit(event, data);
      }
    }
  }, {
    key: "send",
    value: function send(json) {
      if (this.state !== -1) {
        this.socket.send(JSON.stringify(json));
      }
    }
  }]);

  return Socket;
}(_events_dispatcher__WEBPACK_IMPORTED_MODULE_0__["Dispatcher"]);

/***/ }),

/***/ "./src/events/callback_registry.js":
/*!*****************************************!*\
  !*** ./src/events/callback_registry.js ***!
  \*****************************************/
/*! exports provided: CallbackRegistry */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CallbackRegistry", function() { return CallbackRegistry; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var CallbackRegistry =
/*#__PURE__*/
function () {
  function CallbackRegistry() {
    _classCallCheck(this, CallbackRegistry);

    this._callbacks = {};
  }

  _createClass(CallbackRegistry, [{
    key: "get",
    value: function get(name) {
      return this._callbacks[prefix(name)];
    }
  }, {
    key: "add",
    value: function add(name, callback, context) {
      var prefixedEventName = prefix(name);
      this._callbacks[prefixedEventName] = this._callbacks[prefixedEventName] || [];

      this._callbacks[prefixedEventName].push({
        fn: callback,
        context: context
      });
    }
  }, {
    key: "remove",
    value: function remove(name, callback, context) {
      if (!name && !callback && !context) {
        this._callbacks = {};
        return;
      }

      var names = name ? [prefix(name)] : Object.keys(this._callbacks);

      if (callback || context) {
        this.removeCallback(names, callback, context);
      } else {
        this.removeAllCallbacks(names);
      }
    }
  }, {
    key: "removeCallback",
    value: function removeCallback(names, callback, context) {
      for (var name in names) {
        for (var key in this._callbacks[name]) {
          if (this._callbacks[name][key].fn == callback || this._callbacks[name][key].context == context) {
            delete this._callbacks[name][key];
          }
        }

        if (this._callbacks[name].length === 0) {
          delete this._callbacks[name];
        }
      }
    }
  }, {
    key: "removeAllCallbacks",
    value: function removeAllCallbacks(names) {
      for (var name in names) {
        delete this._callbacks[name];
      }
    }
  }]);

  return CallbackRegistry;
}();

function prefix(name) {
  return "_" + name;
}

/***/ }),

/***/ "./src/events/dispatcher.js":
/*!**********************************!*\
  !*** ./src/events/dispatcher.js ***!
  \**********************************/
/*! exports provided: Dispatcher */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Dispatcher", function() { return Dispatcher; });
/* harmony import */ var _callback_registry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./callback_registry */ "./src/events/callback_registry.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


var Dispatcher =
/*#__PURE__*/
function () {
  function Dispatcher() {
    _classCallCheck(this, Dispatcher);

    this.callbacks = new _callback_registry__WEBPACK_IMPORTED_MODULE_0__["CallbackRegistry"]();
    this.global_callbacks = [];
  }

  _createClass(Dispatcher, [{
    key: "bind",
    value: function bind(eventName, callback, context) {
      this.callbacks.add(eventName, callback, context);
      return this;
    }
  }, {
    key: "bind_global",
    value: function bind_global(callback) {
      this.global_callbacks.push(callback);
      return this;
    }
  }, {
    key: "unbind",
    value: function unbind(eventName, callback, context) {
      this.callbacks.remove(eventName, callback, context);
      return this;
    }
  }, {
    key: "unbind_global",
    value: function unbind_global(callback) {
      if (!callback) {
        this.global_callbacks = [];
        return this;
      }

      for (var i in this.global_callbacks) {
        if (callback == this.global_callbacks[i]) {
          delete this.global_callbacks[i];
        }
      }

      return this;
    }
  }, {
    key: "unbind_all",
    value: function unbind_all() {
      this.unbind();
      this.unbind_global();
      return this;
    }
  }, {
    key: "emit",
    value: function emit(eventName, data) {
      for (var i = 0; i < this.global_callbacks.length; i++) {
        this.global_callbacks[i](eventName, data);
      }

      var callbacks = this.callbacks.get(eventName);

      if (callbacks && callbacks.length > 0) {
        for (var _i = 0; _i < callbacks.length; _i++) {
          callbacks[_i].fn.call(callbacks[_i].context, data);
        }
      }

      return this;
    }
  }]);

  return Dispatcher;
}();

/***/ }),

/***/ "./src/pusher.js":
/*!***********************!*\
  !*** ./src/pusher.js ***!
  \***********************/
/*! exports provided: Pusher */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Pusher", function() { return Pusher; });
/* harmony import */ var _connection_socket__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./connection/socket */ "./src/connection/socket.js");
/* harmony import */ var _events_dispatcher__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./events/dispatcher */ "./src/events/dispatcher.js");
/* harmony import */ var _channels_mannager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./channels/mannager */ "./src/channels/mannager.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }





var Pusher =
/*#__PURE__*/
function () {
  function Pusher(app_key, options) {
    _classCallCheck(this, Pusher);

    this.checkAppKey(app_key);
    this.key = app_key;
    this.options = options || {};
    this.dispatcher = new _events_dispatcher__WEBPACK_IMPORTED_MODULE_1__["Dispatcher"]();
    this.channels = new _channels_mannager__WEBPACK_IMPORTED_MODULE_2__["Mannager"]();
    this.connect();
  }

  _createClass(Pusher, [{
    key: "connect",
    value: function connect() {
      this.socket = new _connection_socket__WEBPACK_IMPORTED_MODULE_0__["Socket"](this, this.options.host);
    }
  }, {
    key: "subscribe",
    value: function subscribe(channel_name) {
      return this.channels.add(channel_name, this);
    }
  }, {
    key: "unsubscribe",
    value: function unsubscribe(channel_name) {
      this.channels.remove(channel_name);
    }
  }, {
    key: "getSocketId",
    value: function getSocketId() {
      return this.socket.socket.socket_id;
    }
  }, {
    key: "send",
    value: function send(json) {
      this.socket.send(json);
    }
  }, {
    key: "checkAppKey",
    value: function checkAppKey(key) {
      return true;
    }
  }, {
    key: "auth",
    value: function auth(name, callback) {
      var method = this.options.auth.method || 'post';
      var data = {};
      var params = {};

      if (method == 'post') {
        data = Object.assign({
          channel_name: name,
          socket_id: this.getSocketId()
        });
      } else {
        params = Object.assign({
          channel_name: name,
          socket_id: this.getSocketId()
        });
      }

      axios__WEBPACK_IMPORTED_MODULE_3___default()({
        url: this.options.auth.url,
        method: method,
        headers: this.options.auth.headers || {},
        params: params,
        data: data
      }).then(function (e) {
        callback(e);
      }).catch(function (e) {
        console.error('私有频道权限不足!');
      });
    }
  }]);

  return Pusher;
}();
window.Pusher = Pusher;

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvYWRhcHRlcnMveGhyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvYXhpb3MuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jYW5jZWwvQ2FuY2VsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY2FuY2VsL0NhbmNlbFRva2VuLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY2FuY2VsL2lzQ2FuY2VsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9BeGlvcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvSW50ZXJjZXB0b3JNYW5hZ2VyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9jcmVhdGVFcnJvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvZGlzcGF0Y2hSZXF1ZXN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9lbmhhbmNlRXJyb3IuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL3NldHRsZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvdHJhbnNmb3JtRGF0YS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2RlZmF1bHRzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9iaW5kLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9idG9hLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9idWlsZFVSTC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvY29tYmluZVVSTHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2Nvb2tpZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2lzQWJzb2x1dGVVUkwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2lzVVJMU2FtZU9yaWdpbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvbm9ybWFsaXplSGVhZGVyTmFtZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvcGFyc2VIZWFkZXJzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9zcHJlYWQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi91dGlscy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaXMtYnVmZmVyL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9wcm9jZXNzL2Jyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NoYW5uZWxzL2NoYW5uZWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NoYW5uZWxzL21hbm5hZ2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9jaGFubmVscy9wcmVzZW5jZV9jaGFubmVsLmpzIiwid2VicGFjazovLy8uL3NyYy9jaGFubmVscy9wcml2YXRlX2NoYW5uZWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Nvbm5lY3Rpb24vc29ja2V0LmpzIiwid2VicGFjazovLy8uL3NyYy9ldmVudHMvY2FsbGJhY2tfcmVnaXN0cnkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2V2ZW50cy9kaXNwYXRjaGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9wdXNoZXIuanMiXSwibmFtZXMiOlsiQ2hhbm5lbCIsIm5hbWUiLCJwdXNoZXIiLCJzb2NrZXQiLCJzdGF0ZSIsInN1YnNjcmliZSIsInNlbmQiLCJldmVudCIsImRhdGEiLCJjaGFubmVsIiwiRGlzcGF0Y2hlciIsIk1hbm5hZ2VyIiwiY2hhbm5lbHMiLCJjcmVhdGVDaGFubmVsIiwiT2JqZWN0Iiwia2V5cyIsImkiLCJpbmRleE9mIiwiUHJpdmF0ZUNoYW5uZWwiLCJQcmVzZW5jZUNoYW5uZWwiLCJhdXRoIiwiZSIsImNoYW5uZWxfZGF0YSIsIlNvY2tldCIsImhvc3QiLCJXZWJTb2NrZXQiLCJrZXkiLCJiaW5kTGlzdGVuZXJzIiwib25vcGVuIiwib25PcGVuIiwib25lcnJvciIsImVycm9yIiwib25FcnJvciIsIm9uY2xvc2UiLCJjbG9zZUV2ZW50Iiwib25DbG9zZSIsIm9ubWVzc2FnZSIsIm1lc3NhZ2UiLCJvbk1lc3NhZ2UiLCJiaW5kIiwic29ja2V0X2lkIiwiY29uc29sZSIsInJlYWR5U3RhdGUiLCJDTE9TRUQiLCJ0eXBlIiwiZURhdGEiLCJKU09OIiwicGFyc2UiLCJ1bmRlZmluZWQiLCJmaW5kIiwiZW1pdCIsImpzb24iLCJzdHJpbmdpZnkiLCJDYWxsYmFja1JlZ2lzdHJ5IiwiX2NhbGxiYWNrcyIsInByZWZpeCIsImNhbGxiYWNrIiwiY29udGV4dCIsInByZWZpeGVkRXZlbnROYW1lIiwicHVzaCIsImZuIiwibmFtZXMiLCJyZW1vdmVDYWxsYmFjayIsInJlbW92ZUFsbENhbGxiYWNrcyIsImxlbmd0aCIsImNhbGxiYWNrcyIsImdsb2JhbF9jYWxsYmFja3MiLCJldmVudE5hbWUiLCJhZGQiLCJyZW1vdmUiLCJ1bmJpbmQiLCJ1bmJpbmRfZ2xvYmFsIiwiZ2V0IiwiY2FsbCIsIlB1c2hlciIsImFwcF9rZXkiLCJvcHRpb25zIiwiY2hlY2tBcHBLZXkiLCJkaXNwYXRjaGVyIiwiY29ubmVjdCIsImNoYW5uZWxfbmFtZSIsIm1ldGhvZCIsInBhcmFtcyIsImFzc2lnbiIsImdldFNvY2tldElkIiwiYXhpb3MiLCJ1cmwiLCJoZWFkZXJzIiwidGhlbiIsImNhdGNoIiwid2luZG93Il0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNsRkEsaUJBQWlCLG1CQUFPLENBQUMsc0RBQWEsRTs7Ozs7Ozs7Ozs7O0FDQXpCOztBQUViLFlBQVksbUJBQU8sQ0FBQyxxREFBWTtBQUNoQyxhQUFhLG1CQUFPLENBQUMsaUVBQWtCO0FBQ3ZDLGVBQWUsbUJBQU8sQ0FBQywyRUFBdUI7QUFDOUMsbUJBQW1CLG1CQUFPLENBQUMsbUZBQTJCO0FBQ3RELHNCQUFzQixtQkFBTyxDQUFDLHlGQUE4QjtBQUM1RCxrQkFBa0IsbUJBQU8sQ0FBQyx5RUFBcUI7QUFDL0MseUZBQXlGLG1CQUFPLENBQUMsbUVB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QUNBLFVBQUkwRSxNQUFNLEdBQUcsRUFBYjs7QUFFQSxVQUFJRCxNQUFNLElBQUksTUFBZCxFQUFzQjtBQUNsQnpFLFlBQUksR0FBR00sTUFBTSxDQUFDcUUsTUFBUCxDQUFjO0FBQ2pCSCxzQkFBWSxFQUFFL0UsSUFERztBQUVqQnVDLG1CQUFTLEVBQUUsS0FBSzRDLFdBQUw7QUFGTSxTQUFkLENBQVA7QUFJSCxPQUxELE1BS087QUFDSEYsY0FBTSxHQUFHcEUsTUFBTSxDQUFDcUUsTUFBUCxDQUFjO0FBQ25CSCxzQkFBWSxFQUFFL0UsSUFESztBQUVuQnVDLG1CQUFTLEVBQUUsS0FBSzRDLFdBQUw7QUFGUSxTQUFkLENBQVQ7QUFJSDs7QUFFREMsa0RBQUssQ0FBQztBQUNGQyxXQUFHLEVBQUUsS0FBS1YsT0FBTCxDQUFheEQsSUFBYixDQUFrQmtFLEdBRHJCO0FBRUZMLGNBQU0sRUFBRUEsTUFGTjtBQUdGTSxlQUFPLEVBQUUsS0FBS1gsT0FBTCxDQUFheEQsSUFBYixDQUFrQm1FLE9BQWxCLElBQTZCLEVBSHBDO0FBSUZMLGNBQU0sRUFBRUEsTUFKTjtBQUtGMUUsWUFBSSxFQUFFQTtBQUxKLE9BQUQsQ0FBTCxDQU1HZ0YsSUFOSCxDQU1RLFVBQUNuRSxDQUFELEVBQU87QUFDWG1DLGdCQUFRLENBQUNuQyxDQUFELENBQVI7QUFDSCxPQVJELEVBUUdvRSxLQVJILENBUVMsVUFBQ3BFLENBQUQsRUFBTztBQUNab0IsZUFBTyxDQUFDVixLQUFSLENBQWMsV0FBZDtBQUNILE9BVkQ7QUFXSDtBQWhFTDs7QUFBQTtBQUFBO0FBbUVBMkQsTUFBTSxDQUFDaEIsTUFBUCxHQUFnQkEsTUFBaEIsQyIsImZpbGUiOiJwdXNoZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9wdXNoZXIuanNcIik7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vbGliL2F4aW9zJyk7IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLy4uL3V0aWxzJyk7XG52YXIgc2V0dGxlID0gcmVxdWlyZSgnLi8uLi9jb3JlL3NldHRsZScpO1xudmFyIGJ1aWxkVVJMID0gcmVxdWlyZSgnLi8uLi9oZWxwZXJzL2J1aWxkVVJMJyk7XG52YXIgcGFyc2VIZWFkZXJzID0gcmVxdWlyZSgnLi8uLi9oZWxwZXJzL3BhcnNlSGVhZGVycycpO1xudmFyIGlzVVJMU2FtZU9yaWdpbiA9IHJlcXVpcmUoJy4vLi4vaGVscGVycy9pc1VSTFNhbWVPcmlnaW4nKTtcbnZhciBjcmVhdGVFcnJvciA9IHJlcXVpcmUoJy4uL2NvcmUvY3JlYXRlRXJyb3InKTtcbnZhciBidG9hID0gKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5idG9hICYmIHdpbmRvdy5idG9hLmJpbmQod2luZG93KSkgfHwgcmVxdWlyZSgnLi8uLi9oZWxwZXJzL2J0b2EnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiB4aHJBZGFwdGVyKGNvbmZpZykge1xuICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gZGlzcGF0Y2hYaHJSZXF1ZXN0KHJlc29sdmUsIHJlamVjdCkge1xuICAgIHZhciByZXF1ZXN0RGF0YSA9IGNvbmZpZy5kYXRhO1xuICAgIHZhciByZXF1ZXN0SGVhZGVycyA9IGNvbmZpZy5oZWFkZXJzO1xuXG4gICAgaWYgKHV0aWxzLmlzRm9ybURhdGEocmVxdWVzdERhdGEpKSB7XG4gICAgICBkZWxldGUgcmVxdWVzdEhlYWRlcnNbJ0NvbnRlbnQtVHlwZSddOyAvLyBMZXQgdGhlIGJyb3dzZXIgc2V0IGl0XG4gICAgfVxuXG4gICAgdmFyIHJlcXVlc3QgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICB2YXIgbG9hZEV2ZW50ID0gJ29ucmVhZHlzdGF0ZWNoYW5nZSc7XG4gICAgdmFyIHhEb21haW4gPSBmYWxzZTtcblxuICAgIC8vIEZvciBJRSA4LzkgQ09SUyBzdXBwb3J0XG4gICAgLy8gT25seSBzdXBwb3J0cyBQT1NUIGFuZCBHRVQgY2FsbHMgYW5kIGRvZXNuJ3QgcmV0dXJucyB0aGUgcmVzcG9uc2UgaGVhZGVycy5cbiAgICAvLyBET04nVCBkbyB0aGlzIGZvciB0ZXN0aW5nIGIvYyBYTUxIdHRwUmVxdWVzdCBpcyBtb2NrZWQsIG5vdCBYRG9tYWluUmVxdWVzdC5cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICd0ZXN0JyAmJlxuICAgICAgICB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJlxuICAgICAgICB3aW5kb3cuWERvbWFpblJlcXVlc3QgJiYgISgnd2l0aENyZWRlbnRpYWxzJyBpbiByZXF1ZXN0KSAmJlxuICAgICAgICAhaXNVUkxTYW1lT3JpZ2luKGNvbmZpZy51cmwpKSB7XG4gICAgICByZXF1ZXN0ID0gbmV3IHdpbmRvdy5YRG9tYWluUmVxdWVzdCgpO1xuICAgICAgbG9hZEV2ZW50ID0gJ29ubG9hZCc7XG4gICAgICB4RG9tYWluID0gdHJ1ZTtcbiAgICAgIHJlcXVlc3Qub25wcm9ncmVzcyA9IGZ1bmN0aW9uIGhhbmRsZVByb2dyZXNzKCkge307XG4gICAgICByZXF1ZXN0Lm9udGltZW91dCA9IGZ1bmN0aW9uIGhhbmRsZVRpbWVvdXQoKSB7fTtcbiAgICB9XG5cbiAgICAvLyBIVFRQIGJhc2ljIGF1dGhlbnRpY2F0aW9uXG4gICAgaWYgKGNvbmZpZy5hdXRoKSB7XG4gICAgICB2YXIgdXNlcm5hbWUgPSBjb25maWcuYXV0aC51c2VybmFtZSB8fCAnJztcbiAgICAgIHZhciBwYXNzd29yZCA9IGNvbmZpZy5hdXRoLnBhc3N3b3JkIHx8ICcnO1xuICAgICAgcmVxdWVzdEhlYWRlcnMuQXV0aG9yaXphdGlvbiA9ICdCYXNpYyAnICsgYnRvYSh1c2VybmFtZSArICc6JyArIHBhc3N3b3JkKTtcbiAgICB9XG5cbiAgICByZXF1ZXN0Lm9wZW4oY29uZmlnLm1ldGhvZC50b1VwcGVyQ2FzZSgpLCBidWlsZFVSTChjb25maWcudXJsLCBjb25maWcucGFyYW1zLCBjb25maWcucGFyYW1zU2VyaWFsaXplciksIHRydWUpO1xuXG4gICAgLy8gU2V0IHRoZSByZXF1ZXN0IHRpbWVvdXQgaW4gTVNcbiAgICByZXF1ZXN0LnRpbWVvdXQgPSBjb25maWcudGltZW91dDtcblxuICAgIC8vIExpc3RlbiBmb3IgcmVhZHkgc3RhdGVcbiAgICByZXF1ZXN0W2xvYWRFdmVudF0gPSBmdW5jdGlvbiBoYW5kbGVMb2FkKCkge1xuICAgICAgaWYgKCFyZXF1ZXN0IHx8IChyZXF1ZXN0LnJlYWR5U3RhdGUgIT09IDQgJiYgIXhEb21haW4pKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgLy8gVGhlIHJlcXVlc3QgZXJyb3JlZCBvdXQgYW5kIHdlIGRpZG4ndCBnZXQgYSByZXNwb25zZSwgdGhpcyB3aWxsIGJlXG4gICAgICAvLyBoYW5kbGVkIGJ5IG9uZXJyb3IgaW5zdGVhZFxuICAgICAgLy8gV2l0aCBvbmUgZXhjZXB0aW9uOiByZXF1ZXN0IHRoYXQgdXNpbmcgZmlsZTogcHJvdG9jb2wsIG1vc3QgYnJvd3NlcnNcbiAgICAgIC8vIHdpbGwgcmV0dXJuIHN0YXR1cyBhcyAwIGV2ZW4gdGhvdWdoIGl0J3MgYSBzdWNjZXNzZnVsIHJlcXVlc3RcbiAgICAgIGlmIChyZXF1ZXN0LnN0YXR1cyA9PT0gMCAmJiAhKHJlcXVlc3QucmVzcG9uc2VVUkwgJiYgcmVxdWVzdC5yZXNwb25zZVVSTC5pbmRleE9mKCdmaWxlOicpID09PSAwKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8vIFByZXBhcmUgdGhlIHJlc3BvbnNlXG4gICAgICB2YXIgcmVzcG9uc2VIZWFkZXJzID0gJ2dldEFsbFJlc3BvbnNlSGVhZGVycycgaW4gcmVxdWVzdCA/IHBhcnNlSGVhZGVycyhyZXF1ZXN0LmdldEFsbFJlc3BvbnNlSGVhZGVycygpKSA6IG51bGw7XG4gICAgICB2YXIgcmVzcG9uc2VEYXRhID0gIWNvbmZpZy5yZXNwb25zZVR5cGUgfHwgY29uZmlnLnJlc3BvbnNlVHlwZSA9PT0gJ3RleHQnID8gcmVxdWVzdC5yZXNwb25zZVRleHQgOiByZXF1ZXN0LnJlc3BvbnNlO1xuICAgICAgdmFyIHJlc3BvbnNlID0ge1xuICAgICAgICBkYXRhOiByZXNwb25zZURhdGEsXG4gICAgICAgIC8vIElFIHNlbmRzIDEyMjMgaW5zdGVhZCBvZiAyMDQgKGh0dHBzOi8vZ2l0aHViLmNvbS9heGlvcy9heGlvcy9pc3N1ZXMvMjAxKVxuICAgICAgICBzdGF0dXM6IHJlcXVlc3Quc3RhdHVzID09PSAxMjIzID8gMjA0IDogcmVxdWVzdC5zdGF0dXMsXG4gICAgICAgIHN0YXR1c1RleHQ6IHJlcXVlc3Quc3RhdHVzID09PSAxMjIzID8gJ05vIENvbnRlbnQnIDogcmVxdWVzdC5zdGF0dXNUZXh0LFxuICAgICAgICBoZWFkZXJzOiByZXNwb25zZUhlYWRlcnMsXG4gICAgICAgIGNvbmZpZzogY29uZmlnLFxuICAgICAgICByZXF1ZXN0OiByZXF1ZXN0XG4gICAgICB9O1xuXG4gICAgICBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCByZXNwb25zZSk7XG5cbiAgICAgIC8vIENsZWFuIHVwIHJlcXVlc3RcbiAgICAgIHJlcXVlc3QgPSBudWxsO1xuICAgIH07XG5cbiAgICAvLyBIYW5kbGUgbG93IGxldmVsIG5ldHdvcmsgZXJyb3JzXG4gICAgcmVxdWVzdC5vbmVycm9yID0gZnVuY3Rpb24gaGFuZGxlRXJyb3IoKSB7XG4gICAgICAvLyBSZWFsIGVycm9ycyBhcmUgaGlkZGVuIGZyb20gdXMgYnkgdGhlIGJyb3dzZXJcbiAgICAgIC8vIG9uZXJyb3Igc2hvdWxkIG9ubHkgZmlyZSBpZiBpdCdzIGEgbmV0d29yayBlcnJvclxuICAgICAgcmVqZWN0KGNyZWF0ZUVycm9yKCdOZXR3b3JrIEVycm9yJywgY29uZmlnLCBudWxsLCByZXF1ZXN0KSk7XG5cbiAgICAgIC8vIENsZWFuIHVwIHJlcXVlc3RcbiAgICAgIHJlcXVlc3QgPSBudWxsO1xuICAgIH07XG5cbiAgICAvLyBIYW5kbGUgdGltZW91dFxuICAgIHJlcXVlc3Qub250aW1lb3V0ID0gZnVuY3Rpb24gaGFuZGxlVGltZW91dCgpIHtcbiAgICAgIHJlamVjdChjcmVhdGVFcnJvcigndGltZW91dCBvZiAnICsgY29uZmlnLnRpbWVvdXQgKyAnbXMgZXhjZWVkZWQnLCBjb25maWcsICdFQ09OTkFCT1JURUQnLFxuICAgICAgICByZXF1ZXN0KSk7XG5cbiAgICAgIC8vIENsZWFuIHVwIHJlcXVlc3RcbiAgICAgIHJlcXVlc3QgPSBudWxsO1xuICAgIH07XG5cbiAgICAvLyBBZGQgeHNyZiBoZWFkZXJcbiAgICAvLyBUaGlzIGlzIG9ubHkgZG9uZSBpZiBydW5uaW5nIGluIGEgc3RhbmRhcmQgYnJvd3NlciBlbnZpcm9ubWVudC5cbiAgICAvLyBTcGVjaWZpY2FsbHkgbm90IGlmIHdlJ3JlIGluIGEgd2ViIHdvcmtlciwgb3IgcmVhY3QtbmF0aXZlLlxuICAgIGlmICh1dGlscy5pc1N0YW5kYXJkQnJvd3NlckVudigpKSB7XG4gICAgICB2YXIgY29va2llcyA9IHJlcXVpcmUoJy4vLi4vaGVscGVycy9jb29raWVzJyk7XG5cbiAgICAgIC8vIEFkZCB4c3JmIGhlYWRlclxuICAgICAgdmFyIHhzcmZWYWx1ZSA9IChjb25maWcud2l0aENyZWRlbnRpYWxzIHx8IGlzVVJMU2FtZU9yaWdpbihjb25maWcudXJsKSkgJiYgY29uZmlnLnhzcmZDb29raWVOYW1lID9cbiAgICAgICAgICBjb29raWVzLnJlYWQoY29uZmlnLnhzcmZDb29raWVOYW1lKSA6XG4gICAgICAgICAgdW5kZWZpbmVkO1xuXG4gICAgICBpZiAoeHNyZlZhbHVlKSB7XG4gICAgICAgIHJlcXVlc3RIZWFkZXJzW2NvbmZpZy54c3JmSGVhZGVyTmFtZV0gPSB4c3JmVmFsdWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gQWRkIGhlYWRlcnMgdG8gdGhlIHJlcXVlc3RcbiAgICBpZiAoJ3NldFJlcXVlc3RIZWFkZXInIGluIHJlcXVlc3QpIHtcbiAgICAgIHV0aWxzLmZvckVhY2gocmVxdWVzdEhlYWRlcnMsIGZ1bmN0aW9uIHNldFJlcXVlc3RIZWFkZXIodmFsLCBrZXkpIHtcbiAgICAgICAgaWYgKHR5cGVvZiByZXF1ZXN0RGF0YSA9PT0gJ3VuZGVmaW5lZCcgJiYga2V5LnRvTG93ZXJDYXNlKCkgPT09ICdjb250ZW50LXR5cGUnKSB7XG4gICAgICAgICAgLy8gUmVtb3ZlIENvbnRlbnQtVHlwZSBpZiBkYXRhIGlzIHVuZGVmaW5lZFxuICAgICAgICAgIGRlbGV0ZSByZXF1ZXN0SGVhZGVyc1trZXldO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIE90aGVyd2lzZSBhZGQgaGVhZGVyIHRvIHRoZSByZXF1ZXN0XG4gICAgICAgICAgcmVxdWVzdC5zZXRSZXF1ZXN0SGVhZGVyKGtleSwgdmFsKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gQWRkIHdpdGhDcmVkZW50aWFscyB0byByZXF1ZXN0IGlmIG5lZWRlZFxuICAgIGlmIChjb25maWcud2l0aENyZWRlbnRpYWxzKSB7XG4gICAgICByZXF1ZXN0LndpdGhDcmVkZW50aWFscyA9IHRydWU7XG4gICAgfVxuXG4gICAgLy8gQWRkIHJlc3BvbnNlVHlwZSB0byByZXF1ZXN0IGlmIG5lZWRlZFxuICAgIGlmIChjb25maWcucmVzcG9uc2VUeXBlKSB7XG4gICAgICB0cnkge1xuICAgICAgICByZXF1ZXN0LnJlc3BvbnNlVHlwZSA9IGNvbmZpZy5yZXNwb25zZVR5cGU7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIEV4cGVjdGVkIERPTUV4Y2VwdGlvbiB0aHJvd24gYnkgYnJvd3NlcnMgbm90IGNvbXBhdGlibGUgWE1MSHR0cFJlcXVlc3QgTGV2ZWwgMi5cbiAgICAgICAgLy8gQnV0LCB0aGlzIGNhbiBiZSBzdXBwcmVzc2VkIGZvciAnanNvbicgdHlwZSBhcyBpdCBjYW4gYmUgcGFyc2VkIGJ5IGRlZmF1bHQgJ3RyYW5zZm9ybVJlc3BvbnNlJyBmdW5jdGlvbi5cbiAgICAgICAgaWYgKGNvbmZpZy5yZXNwb25zZVR5cGUgIT09ICdqc29uJykge1xuICAgICAgICAgIHRocm93IGU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBIYW5kbGUgcHJvZ3Jlc3MgaWYgbmVlZGVkXG4gICAgaWYgKHR5cGVvZiBjb25maWcub25Eb3dubG9hZFByb2dyZXNzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICByZXF1ZXN0LmFkZEV2ZW50TGlzdGVuZXIoJ3Byb2dyZXNzJywgY29uZmlnLm9uRG93bmxvYWRQcm9ncmVzcyk7XG4gICAgfVxuXG4gICAgLy8gTm90IGFsbCBicm93c2VycyBzdXBwb3J0IHVwbG9hZCBldmVudHNcbiAgICBpZiAodHlwZW9mIGNvbmZpZy5vblVwbG9hZFByb2dyZXNzID09PSAnZnVuY3Rpb24nICYmIHJlcXVlc3QudXBsb2FkKSB7XG4gICAgICByZXF1ZXN0LnVwbG9hZC5hZGRFdmVudExpc3RlbmVyKCdwcm9ncmVzcycsIGNvbmZpZy5vblVwbG9hZFByb2dyZXNzKTtcbiAgICB9XG5cbiAgICBpZiAoY29uZmlnLmNhbmNlbFRva2VuKSB7XG4gICAgICAvLyBIYW5kbGUgY2FuY2VsbGF0aW9uXG4gICAgICBjb25maWcuY2FuY2VsVG9rZW4ucHJvbWlzZS50aGVuKGZ1bmN0aW9uIG9uQ2FuY2VsZWQoY2FuY2VsKSB7XG4gICAgICAgIGlmICghcmVxdWVzdCkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHJlcXVlc3QuYWJvcnQoKTtcbiAgICAgICAgcmVqZWN0KGNhbmNlbCk7XG4gICAgICAgIC8vIENsZWFuIHVwIHJlcXVlc3RcbiAgICAgICAgcmVxdWVzdCA9IG51bGw7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAocmVxdWVzdERhdGEgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmVxdWVzdERhdGEgPSBudWxsO1xuICAgIH1cblxuICAgIC8vIFNlbmQgdGhlIHJlcXVlc3RcbiAgICByZXF1ZXN0LnNlbmQocmVxdWVzdERhdGEpO1xuICB9KTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vdXRpbHMnKTtcbnZhciBiaW5kID0gcmVxdWlyZSgnLi9oZWxwZXJzL2JpbmQnKTtcbnZhciBBeGlvcyA9IHJlcXVpcmUoJy4vY29yZS9BeGlvcycpO1xudmFyIGRlZmF1bHRzID0gcmVxdWlyZSgnLi9kZWZhdWx0cycpO1xuXG4vKipcbiAqIENyZWF0ZSBhbiBpbnN0YW5jZSBvZiBBeGlvc1xuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBkZWZhdWx0Q29uZmlnIFRoZSBkZWZhdWx0IGNvbmZpZyBmb3IgdGhlIGluc3RhbmNlXG4gKiBAcmV0dXJuIHtBeGlvc30gQSBuZXcgaW5zdGFuY2Ugb2YgQXhpb3NcbiAqL1xuZnVuY3Rpb24gY3JlYXRlSW5zdGFuY2UoZGVmYXVsdENvbmZpZykge1xuICB2YXIgY29udGV4dCA9IG5ldyBBeGlvcyhkZWZhdWx0Q29uZmlnKTtcbiAgdmFyIGluc3RhbmNlID0gYmluZChBeGlvcy5wcm90b3R5cGUucmVxdWVzdCwgY29udGV4dCk7XG5cbiAgLy8gQ29weSBheGlvcy5wcm90b3R5cGUgdG8gaW5zdGFuY2VcbiAgdXRpbHMuZXh0ZW5kKGluc3RhbmNlLCBBeGlvcy5wcm90b3R5cGUsIGNvbnRleHQpO1xuXG4gIC8vIENvcHkgY29udGV4dCB0byBpbnN0YW5jZVxuICB1dGlscy5leHRlbmQoaW5zdGFuY2UsIGNvbnRleHQpO1xuXG4gIHJldHVybiBpbnN0YW5jZTtcbn1cblxuLy8gQ3JlYXRlIHRoZSBkZWZhdWx0IGluc3RhbmNlIHRvIGJlIGV4cG9ydGVkXG52YXIgYXhpb3MgPSBjcmVhdGVJbnN0YW5jZShkZWZhdWx0cyk7XG5cbi8vIEV4cG9zZSBBeGlvcyBjbGFzcyB0byBhbGxvdyBjbGFzcyBpbmhlcml0YW5jZVxuYXhpb3MuQXhpb3MgPSBBeGlvcztcblxuLy8gRmFjdG9yeSBmb3IgY3JlYXRpbmcgbmV3IGluc3RhbmNlc1xuYXhpb3MuY3JlYXRlID0gZnVuY3Rpb24gY3JlYXRlKGluc3RhbmNlQ29uZmlnKSB7XG4gIHJldHVybiBjcmVhdGVJbnN0YW5jZSh1dGlscy5tZXJnZShkZWZhdWx0cywgaW5zdGFuY2VDb25maWcpKTtcbn07XG5cbi8vIEV4cG9zZSBDYW5jZWwgJiBDYW5jZWxUb2tlblxuYXhpb3MuQ2FuY2VsID0gcmVxdWlyZSgnLi9jYW5jZWwvQ2FuY2VsJyk7XG5heGlvcy5DYW5jZWxUb2tlbiA9IHJlcXVpcmUoJy4vY2FuY2VsL0NhbmNlbFRva2VuJyk7XG5heGlvcy5pc0NhbmNlbCA9IHJlcXVpcmUoJy4vY2FuY2VsL2lzQ2FuY2VsJyk7XG5cbi8vIEV4cG9zZSBhbGwvc3ByZWFkXG5heGlvcy5hbGwgPSBmdW5jdGlvbiBhbGwocHJvbWlzZXMpIHtcbiAgcmV0dXJuIFByb21pc2UuYWxsKHByb21pc2VzKTtcbn07XG5heGlvcy5zcHJlYWQgPSByZXF1aXJlKCcuL2hlbHBlcnMvc3ByZWFkJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gYXhpb3M7XG5cbi8vIEFsbG93IHVzZSBvZiBkZWZhdWx0IGltcG9ydCBzeW50YXggaW4gVHlwZVNjcmlwdFxubW9kdWxlLmV4cG9ydHMuZGVmYXVsdCA9IGF4aW9zO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIEEgYENhbmNlbGAgaXMgYW4gb2JqZWN0IHRoYXQgaXMgdGhyb3duIHdoZW4gYW4gb3BlcmF0aW9uIGlzIGNhbmNlbGVkLlxuICpcbiAqIEBjbGFzc1xuICogQHBhcmFtIHtzdHJpbmc9fSBtZXNzYWdlIFRoZSBtZXNzYWdlLlxuICovXG5mdW5jdGlvbiBDYW5jZWwobWVzc2FnZSkge1xuICB0aGlzLm1lc3NhZ2UgPSBtZXNzYWdlO1xufVxuXG5DYW5jZWwucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gIHJldHVybiAnQ2FuY2VsJyArICh0aGlzLm1lc3NhZ2UgPyAnOiAnICsgdGhpcy5tZXNzYWdlIDogJycpO1xufTtcblxuQ2FuY2VsLnByb3RvdHlwZS5fX0NBTkNFTF9fID0gdHJ1ZTtcblxubW9kdWxlLmV4cG9ydHMgPSBDYW5jZWw7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBDYW5jZWwgPSByZXF1aXJlKCcuL0NhbmNlbCcpO1xuXG4vKipcbiAqIEEgYENhbmNlbFRva2VuYCBpcyBhbiBvYmplY3QgdGhhdCBjYW4gYmUgdXNlZCB0byByZXF1ZXN0IGNhbmNlbGxhdGlvbiBvZiBhbiBvcGVyYXRpb24uXG4gKlxuICogQGNsYXNzXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBleGVjdXRvciBUaGUgZXhlY3V0b3IgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIENhbmNlbFRva2VuKGV4ZWN1dG9yKSB7XG4gIGlmICh0eXBlb2YgZXhlY3V0b3IgIT09ICdmdW5jdGlvbicpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdleGVjdXRvciBtdXN0IGJlIGEgZnVuY3Rpb24uJyk7XG4gIH1cblxuICB2YXIgcmVzb2x2ZVByb21pc2U7XG4gIHRoaXMucHJvbWlzZSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uIHByb21pc2VFeGVjdXRvcihyZXNvbHZlKSB7XG4gICAgcmVzb2x2ZVByb21pc2UgPSByZXNvbHZlO1xuICB9KTtcblxuICB2YXIgdG9rZW4gPSB0aGlzO1xuICBleGVjdXRvcihmdW5jdGlvbiBjYW5jZWwobWVzc2FnZSkge1xuICAgIGlmICh0b2tlbi5yZWFzb24pIHtcbiAgICAgIC8vIENhbmNlbGxhdGlvbiBoYXMgYWxyZWFkeSBiZWVuIHJlcXVlc3RlZFxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRva2VuLnJlYXNvbiA9IG5ldyBDYW5jZWwobWVzc2FnZSk7XG4gICAgcmVzb2x2ZVByb21pc2UodG9rZW4ucmVhc29uKTtcbiAgfSk7XG59XG5cbi8qKlxuICogVGhyb3dzIGEgYENhbmNlbGAgaWYgY2FuY2VsbGF0aW9uIGhhcyBiZWVuIHJlcXVlc3RlZC5cbiAqL1xuQ2FuY2VsVG9rZW4ucHJvdG90eXBlLnRocm93SWZSZXF1ZXN0ZWQgPSBmdW5jdGlvbiB0aHJvd0lmUmVxdWVzdGVkKCkge1xuICBpZiAodGhpcy5yZWFzb24pIHtcbiAgICB0aHJvdyB0aGlzLnJlYXNvbjtcbiAgfVxufTtcblxuLyoqXG4gKiBSZXR1cm5zIGFuIG9iamVjdCB0aGF0IGNvbnRhaW5zIGEgbmV3IGBDYW5jZWxUb2tlbmAgYW5kIGEgZnVuY3Rpb24gdGhhdCwgd2hlbiBjYWxsZWQsXG4gKiBjYW5jZWxzIHRoZSBgQ2FuY2VsVG9rZW5gLlxuICovXG5DYW5jZWxUb2tlbi5zb3VyY2UgPSBmdW5jdGlvbiBzb3VyY2UoKSB7XG4gIHZhciBjYW5jZWw7XG4gIHZhciB0b2tlbiA9IG5ldyBDYW5jZWxUb2tlbihmdW5jdGlvbiBleGVjdXRvcihjKSB7XG4gICAgY2FuY2VsID0gYztcbiAgfSk7XG4gIHJldHVybiB7XG4gICAgdG9rZW46IHRva2VuLFxuICAgIGNhbmNlbDogY2FuY2VsXG4gIH07XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IENhbmNlbFRva2VuO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGlzQ2FuY2VsKHZhbHVlKSB7XG4gIHJldHVybiAhISh2YWx1ZSAmJiB2YWx1ZS5fX0NBTkNFTF9fKTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBkZWZhdWx0cyA9IHJlcXVpcmUoJy4vLi4vZGVmYXVsdHMnKTtcbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vLi4vdXRpbHMnKTtcbnZhciBJbnRlcmNlcHRvck1hbmFnZXIgPSByZXF1aXJlKCcuL0ludGVyY2VwdG9yTWFuYWdlcicpO1xudmFyIGRpc3BhdGNoUmVxdWVzdCA9IHJlcXVpcmUoJy4vZGlzcGF0Y2hSZXF1ZXN0Jyk7XG5cbi8qKlxuICogQ3JlYXRlIGEgbmV3IGluc3RhbmNlIG9mIEF4aW9zXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGluc3RhbmNlQ29uZmlnIFRoZSBkZWZhdWx0IGNvbmZpZyBmb3IgdGhlIGluc3RhbmNlXG4gKi9cbmZ1bmN0aW9uIEF4aW9zKGluc3RhbmNlQ29uZmlnKSB7XG4gIHRoaXMuZGVmYXVsdHMgPSBpbnN0YW5jZUNvbmZpZztcbiAgdGhpcy5pbnRlcmNlcHRvcnMgPSB7XG4gICAgcmVxdWVzdDogbmV3IEludGVyY2VwdG9yTWFuYWdlcigpLFxuICAgIHJlc3BvbnNlOiBuZXcgSW50ZXJjZXB0b3JNYW5hZ2VyKClcbiAgfTtcbn1cblxuLyoqXG4gKiBEaXNwYXRjaCBhIHJlcXVlc3RcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gY29uZmlnIFRoZSBjb25maWcgc3BlY2lmaWMgZm9yIHRoaXMgcmVxdWVzdCAobWVyZ2VkIHdpdGggdGhpcy5kZWZhdWx0cylcbiAqL1xuQXhpb3MucHJvdG90eXBlLnJlcXVlc3QgPSBmdW5jdGlvbiByZXF1ZXN0KGNvbmZpZykge1xuICAvKmVzbGludCBuby1wYXJhbS1yZWFzc2lnbjowKi9cbiAgLy8gQWxsb3cgZm9yIGF4aW9zKCdleGFtcGxlL3VybCdbLCBjb25maWddKSBhIGxhIGZldGNoIEFQSVxuICBpZiAodHlwZW9mIGNvbmZpZyA9PT0gJ3N0cmluZycpIHtcbiAgICBjb25maWcgPSB1dGlscy5tZXJnZSh7XG4gICAgICB1cmw6IGFyZ3VtZW50c1swXVxuICAgIH0sIGFyZ3VtZW50c1sxXSk7XG4gIH1cblxuICBjb25maWcgPSB1dGlscy5tZXJnZShkZWZhdWx0cywge21ldGhvZDogJ2dldCd9LCB0aGlzLmRlZmF1bHRzLCBjb25maWcpO1xuICBjb25maWcubWV0aG9kID0gY29uZmlnLm1ldGhvZC50b0xvd2VyQ2FzZSgpO1xuXG4gIC8vIEhvb2sgdXAgaW50ZXJjZXB0b3JzIG1pZGRsZXdhcmVcbiAgdmFyIGNoYWluID0gW2Rpc3BhdGNoUmVxdWVzdCwgdW5kZWZpbmVkXTtcbiAgdmFyIHByb21pc2UgPSBQcm9taXNlLnJlc29sdmUoY29uZmlnKTtcblxuICB0aGlzLmludGVyY2VwdG9ycy5yZXF1ZXN0LmZvckVhY2goZnVuY3Rpb24gdW5zaGlmdFJlcXVlc3RJbnRlcmNlcHRvcnMoaW50ZXJjZXB0b3IpIHtcbiAgICBjaGFpbi51bnNoaWZ0KGludGVyY2VwdG9yLmZ1bGZpbGxlZCwgaW50ZXJjZXB0b3IucmVqZWN0ZWQpO1xuICB9KTtcblxuICB0aGlzLmludGVyY2VwdG9ycy5yZXNwb25zZS5mb3JFYWNoKGZ1bmN0aW9uIHB1c2hSZXNwb25zZUludGVyY2VwdG9ycyhpbnRlcmNlcHRvcikge1xuICAgIGNoYWluLnB1c2goaW50ZXJjZXB0b3IuZnVsZmlsbGVkLCBpbnRlcmNlcHRvci5yZWplY3RlZCk7XG4gIH0pO1xuXG4gIHdoaWxlIChjaGFpbi5sZW5ndGgpIHtcbiAgICBwcm9taXNlID0gcHJvbWlzZS50aGVuKGNoYWluLnNoaWZ0KCksIGNoYWluLnNoaWZ0KCkpO1xuICB9XG5cbiAgcmV0dXJuIHByb21pc2U7XG59O1xuXG4vLyBQcm92aWRlIGFsaWFzZXMgZm9yIHN1cHBvcnRlZCByZXF1ZXN0IG1ldGhvZHNcbnV0aWxzLmZvckVhY2goWydkZWxldGUnLCAnZ2V0JywgJ2hlYWQnLCAnb3B0aW9ucyddLCBmdW5jdGlvbiBmb3JFYWNoTWV0aG9kTm9EYXRhKG1ldGhvZCkge1xuICAvKmVzbGludCBmdW5jLW5hbWVzOjAqL1xuICBBeGlvcy5wcm90b3R5cGVbbWV0aG9kXSA9IGZ1bmN0aW9uKHVybCwgY29uZmlnKSB7XG4gICAgcmV0dXJuIHRoaXMucmVxdWVzdCh1dGlscy5tZXJnZShjb25maWcgfHwge30sIHtcbiAgICAgIG1ldGhvZDogbWV0aG9kLFxuICAgICAgdXJsOiB1cmxcbiAgICB9KSk7XG4gIH07XG59KTtcblxudXRpbHMuZm9yRWFjaChbJ3Bvc3QnLCAncHV0JywgJ3BhdGNoJ10sIGZ1bmN0aW9uIGZvckVhY2hNZXRob2RXaXRoRGF0YShtZXRob2QpIHtcbiAgLyplc2xpbnQgZnVuYy1uYW1lczowKi9cbiAgQXhpb3MucHJvdG90eXBlW21ldGhvZF0gPSBmdW5jdGlvbih1cmwsIGRhdGEsIGNvbmZpZykge1xuICAgIHJldHVybiB0aGlzLnJlcXVlc3QodXRpbHMubWVyZ2UoY29uZmlnIHx8IHt9LCB7XG4gICAgICBtZXRob2Q6IG1ldGhvZCxcbiAgICAgIHVybDogdXJsLFxuICAgICAgZGF0YTogZGF0YVxuICAgIH0pKTtcbiAgfTtcbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEF4aW9zO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLy4uL3V0aWxzJyk7XG5cbmZ1bmN0aW9uIEludGVyY2VwdG9yTWFuYWdlcigpIHtcbiAgdGhpcy5oYW5kbGVycyA9IFtdO1xufVxuXG4vKipcbiAqIEFkZCBhIG5ldyBpbnRlcmNlcHRvciB0byB0aGUgc3RhY2tcbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdWxmaWxsZWQgVGhlIGZ1bmN0aW9uIHRvIGhhbmRsZSBgdGhlbmAgZm9yIGEgYFByb21pc2VgXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSByZWplY3RlZCBUaGUgZnVuY3Rpb24gdG8gaGFuZGxlIGByZWplY3RgIGZvciBhIGBQcm9taXNlYFxuICpcbiAqIEByZXR1cm4ge051bWJlcn0gQW4gSUQgdXNlZCB0byByZW1vdmUgaW50ZXJjZXB0b3IgbGF0ZXJcbiAqL1xuSW50ZXJjZXB0b3JNYW5hZ2VyLnByb3RvdHlwZS51c2UgPSBmdW5jdGlvbiB1c2UoZnVsZmlsbGVkLCByZWplY3RlZCkge1xuICB0aGlzLmhhbmRsZXJzLnB1c2goe1xuICAgIGZ1bGZpbGxlZDogZnVsZmlsbGVkLFxuICAgIHJlamVjdGVkOiByZWplY3RlZFxuICB9KTtcbiAgcmV0dXJuIHRoaXMuaGFuZGxlcnMubGVuZ3RoIC0gMTtcbn07XG5cbi8qKlxuICogUmVtb3ZlIGFuIGludGVyY2VwdG9yIGZyb20gdGhlIHN0YWNrXG4gKlxuICogQHBhcmFtIHtOdW1iZXJ9IGlkIFRoZSBJRCB0aGF0IHdhcyByZXR1cm5lZCBieSBgdXNlYFxuICovXG5JbnRlcmNlcHRvck1hbmFnZXIucHJvdG90eXBlLmVqZWN0ID0gZnVuY3Rpb24gZWplY3QoaWQpIHtcbiAgaWYgKHRoaXMuaGFuZGxlcnNbaWRdKSB7XG4gICAgdGhpcy5oYW5kbGVyc1tpZF0gPSBudWxsO1xuICB9XG59O1xuXG4vKipcbiAqIEl0ZXJhdGUgb3ZlciBhbGwgdGhlIHJlZ2lzdGVyZWQgaW50ZXJjZXB0b3JzXG4gKlxuICogVGhpcyBtZXRob2QgaXMgcGFydGljdWxhcmx5IHVzZWZ1bCBmb3Igc2tpcHBpbmcgb3ZlciBhbnlcbiAqIGludGVyY2VwdG9ycyB0aGF0IG1heSBoYXZlIGJlY29tZSBgbnVsbGAgY2FsbGluZyBgZWplY3RgLlxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuIFRoZSBmdW5jdGlvbiB0byBjYWxsIGZvciBlYWNoIGludGVyY2VwdG9yXG4gKi9cbkludGVyY2VwdG9yTWFuYWdlci5wcm90b3R5cGUuZm9yRWFjaCA9IGZ1bmN0aW9uIGZvckVhY2goZm4pIHtcbiAgdXRpbHMuZm9yRWFjaCh0aGlzLmhhbmRsZXJzLCBmdW5jdGlvbiBmb3JFYWNoSGFuZGxlcihoKSB7XG4gICAgaWYgKGggIT09IG51bGwpIHtcbiAgICAgIGZuKGgpO1xuICAgIH1cbiAgfSk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEludGVyY2VwdG9yTWFuYWdlcjtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIGVuaGFuY2VFcnJvciA9IHJlcXVpcmUoJy4vZW5oYW5jZUVycm9yJyk7XG5cbi8qKlxuICogQ3JlYXRlIGFuIEVycm9yIHdpdGggdGhlIHNwZWNpZmllZCBtZXNzYWdlLCBjb25maWcsIGVycm9yIGNvZGUsIHJlcXVlc3QgYW5kIHJlc3BvbnNlLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBtZXNzYWdlIFRoZSBlcnJvciBtZXNzYWdlLlxuICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZyBUaGUgY29uZmlnLlxuICogQHBhcmFtIHtzdHJpbmd9IFtjb2RlXSBUaGUgZXJyb3IgY29kZSAoZm9yIGV4YW1wbGUsICdFQ09OTkFCT1JURUQnKS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbcmVxdWVzdF0gVGhlIHJlcXVlc3QuXG4gKiBAcGFyYW0ge09iamVjdH0gW3Jlc3BvbnNlXSBUaGUgcmVzcG9uc2UuXG4gKiBAcmV0dXJucyB7RXJyb3J9IFRoZSBjcmVhdGVkIGVycm9yLlxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNyZWF0ZUVycm9yKG1lc3NhZ2UsIGNvbmZpZywgY29kZSwgcmVxdWVzdCwgcmVzcG9uc2UpIHtcbiAgdmFyIGVycm9yID0gbmV3IEVycm9yKG1lc3NhZ2UpO1xuICByZXR1cm4gZW5oYW5jZUVycm9yKGVycm9yLCBjb25maWcsIGNvZGUsIHJlcXVlc3QsIHJlc3BvbnNlKTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vLi4vdXRpbHMnKTtcbnZhciB0cmFuc2Zvcm1EYXRhID0gcmVxdWlyZSgnLi90cmFuc2Zvcm1EYXRhJyk7XG52YXIgaXNDYW5jZWwgPSByZXF1aXJlKCcuLi9jYW5jZWwvaXNDYW5jZWwnKTtcbnZhciBkZWZhdWx0cyA9IHJlcXVpcmUoJy4uL2RlZmF1bHRzJyk7XG52YXIgaXNBYnNvbHV0ZVVSTCA9IHJlcXVpcmUoJy4vLi4vaGVscGVycy9pc0Fic29sdXRlVVJMJyk7XG52YXIgY29tYmluZVVSTHMgPSByZXF1aXJlKCcuLy4uL2hlbHBlcnMvY29tYmluZVVSTHMnKTtcblxuLyoqXG4gKiBUaHJvd3MgYSBgQ2FuY2VsYCBpZiBjYW5jZWxsYXRpb24gaGFzIGJlZW4gcmVxdWVzdGVkLlxuICovXG5mdW5jdGlvbiB0aHJvd0lmQ2FuY2VsbGF0aW9uUmVxdWVzdGVkKGNvbmZpZykge1xuICBpZiAoY29uZmlnLmNhbmNlbFRva2VuKSB7XG4gICAgY29uZmlnLmNhbmNlbFRva2VuLnRocm93SWZSZXF1ZXN0ZWQoKTtcbiAgfVxufVxuXG4vKipcbiAqIERpc3BhdGNoIGEgcmVxdWVzdCB0byB0aGUgc2VydmVyIHVzaW5nIHRoZSBjb25maWd1cmVkIGFkYXB0ZXIuXG4gKlxuICogQHBhcmFtIHtvYmplY3R9IGNvbmZpZyBUaGUgY29uZmlnIHRoYXQgaXMgdG8gYmUgdXNlZCBmb3IgdGhlIHJlcXVlc3RcbiAqIEByZXR1cm5zIHtQcm9taXNlfSBUaGUgUHJvbWlzZSB0byBiZSBmdWxmaWxsZWRcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBkaXNwYXRjaFJlcXVlc3QoY29uZmlnKSB7XG4gIHRocm93SWZDYW5jZWxsYXRpb25SZXF1ZXN0ZWQoY29uZmlnKTtcblxuICAvLyBTdXBwb3J0IGJhc2VVUkwgY29uZmlnXG4gIGlmIChjb25maWcuYmFzZVVSTCAmJiAhaXNBYnNvbHV0ZVVSTChjb25maWcudXJsKSkge1xuICAgIGNvbmZpZy51cmwgPSBjb21iaW5lVVJMcyhjb25maWcuYmFzZVVSTCwgY29uZmlnLnVybCk7XG4gIH1cblxuICAvLyBFbnN1cmUgaGVhZGVycyBleGlzdFxuICBjb25maWcuaGVhZGVycyA9IGNvbmZpZy5oZWFkZXJzIHx8IHt9O1xuXG4gIC8vIFRyYW5zZm9ybSByZXF1ZXN0IGRhdGFcbiAgY29uZmlnLmRhdGEgPSB0cmFuc2Zvcm1EYXRhKFxuICAgIGNvbmZpZy5kYXRhLFxuICAgIGNvbmZpZy5oZWFkZXJzLFxuICAgIGNvbmZpZy50cmFuc2Zvcm1SZXF1ZXN0XG4gICk7XG5cbiAgLy8gRmxhdHRlbiBoZWFkZXJzXG4gIGNvbmZpZy5oZWFkZXJzID0gdXRpbHMubWVyZ2UoXG4gICAgY29uZmlnLmhlYWRlcnMuY29tbW9uIHx8IHt9LFxuICAgIGNvbmZpZy5oZWFkZXJzW2NvbmZpZy5tZXRob2RdIHx8IHt9LFxuICAgIGNvbmZpZy5oZWFkZXJzIHx8IHt9XG4gICk7XG5cbiAgdXRpbHMuZm9yRWFjaChcbiAgICBbJ2RlbGV0ZScsICdnZXQnLCAnaGVhZCcsICdwb3N0JywgJ3B1dCcsICdwYXRjaCcsICdjb21tb24nXSxcbiAgICBmdW5jdGlvbiBjbGVhbkhlYWRlckNvbmZpZyhtZXRob2QpIHtcbiAgICAgIGRlbGV0ZSBjb25maWcuaGVhZGVyc1ttZXRob2RdO1xuICAgIH1cbiAgKTtcblxuICB2YXIgYWRhcHRlciA9IGNvbmZpZy5hZGFwdGVyIHx8IGRlZmF1bHRzLmFkYXB0ZXI7XG5cbiAgcmV0dXJuIGFkYXB0ZXIoY29uZmlnKS50aGVuKGZ1bmN0aW9uIG9uQWRhcHRlclJlc29sdXRpb24ocmVzcG9uc2UpIHtcbiAgICB0aHJvd0lmQ2FuY2VsbGF0aW9uUmVxdWVzdGVkKGNvbmZpZyk7XG5cbiAgICAvLyBUcmFuc2Zvcm0gcmVzcG9uc2UgZGF0YVxuICAgIHJlc3BvbnNlLmRhdGEgPSB0cmFuc2Zvcm1EYXRhKFxuICAgICAgcmVzcG9uc2UuZGF0YSxcbiAgICAgIHJlc3BvbnNlLmhlYWRlcnMsXG4gICAgICBjb25maWcudHJhbnNmb3JtUmVzcG9uc2VcbiAgICApO1xuXG4gICAgcmV0dXJuIHJlc3BvbnNlO1xuICB9LCBmdW5jdGlvbiBvbkFkYXB0ZXJSZWplY3Rpb24ocmVhc29uKSB7XG4gICAgaWYgKCFpc0NhbmNlbChyZWFzb24pKSB7XG4gICAgICB0aHJvd0lmQ2FuY2VsbGF0aW9uUmVxdWVzdGVkKGNvbmZpZyk7XG5cbiAgICAgIC8vIFRyYW5zZm9ybSByZXNwb25zZSBkYXRhXG4gICAgICBpZiAocmVhc29uICYmIHJlYXNvbi5yZXNwb25zZSkge1xuICAgICAgICByZWFzb24ucmVzcG9uc2UuZGF0YSA9IHRyYW5zZm9ybURhdGEoXG4gICAgICAgICAgcmVhc29uLnJlc3BvbnNlLmRhdGEsXG4gICAgICAgICAgcmVhc29uLnJlc3BvbnNlLmhlYWRlcnMsXG4gICAgICAgICAgY29uZmlnLnRyYW5zZm9ybVJlc3BvbnNlXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIFByb21pc2UucmVqZWN0KHJlYXNvbik7XG4gIH0pO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBVcGRhdGUgYW4gRXJyb3Igd2l0aCB0aGUgc3BlY2lmaWVkIGNvbmZpZywgZXJyb3IgY29kZSwgYW5kIHJlc3BvbnNlLlxuICpcbiAqIEBwYXJhbSB7RXJyb3J9IGVycm9yIFRoZSBlcnJvciB0byB1cGRhdGUuXG4gKiBAcGFyYW0ge09iamVjdH0gY29uZmlnIFRoZSBjb25maWcuXG4gKiBAcGFyYW0ge3N0cmluZ30gW2NvZGVdIFRoZSBlcnJvciBjb2RlIChmb3IgZXhhbXBsZSwgJ0VDT05OQUJPUlRFRCcpLlxuICogQHBhcmFtIHtPYmplY3R9IFtyZXF1ZXN0XSBUaGUgcmVxdWVzdC5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbcmVzcG9uc2VdIFRoZSByZXNwb25zZS5cbiAqIEByZXR1cm5zIHtFcnJvcn0gVGhlIGVycm9yLlxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGVuaGFuY2VFcnJvcihlcnJvciwgY29uZmlnLCBjb2RlLCByZXF1ZXN0LCByZXNwb25zZSkge1xuICBlcnJvci5jb25maWcgPSBjb25maWc7XG4gIGlmIChjb2RlKSB7XG4gICAgZXJyb3IuY29kZSA9IGNvZGU7XG4gIH1cbiAgZXJyb3IucmVxdWVzdCA9IHJlcXVlc3Q7XG4gIGVycm9yLnJlc3BvbnNlID0gcmVzcG9uc2U7XG4gIHJldHVybiBlcnJvcjtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBjcmVhdGVFcnJvciA9IHJlcXVpcmUoJy4vY3JlYXRlRXJyb3InKTtcblxuLyoqXG4gKiBSZXNvbHZlIG9yIHJlamVjdCBhIFByb21pc2UgYmFzZWQgb24gcmVzcG9uc2Ugc3RhdHVzLlxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IHJlc29sdmUgQSBmdW5jdGlvbiB0aGF0IHJlc29sdmVzIHRoZSBwcm9taXNlLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gcmVqZWN0IEEgZnVuY3Rpb24gdGhhdCByZWplY3RzIHRoZSBwcm9taXNlLlxuICogQHBhcmFtIHtvYmplY3R9IHJlc3BvbnNlIFRoZSByZXNwb25zZS5cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCByZXNwb25zZSkge1xuICB2YXIgdmFsaWRhdGVTdGF0dXMgPSByZXNwb25zZS5jb25maWcudmFsaWRhdGVTdGF0dXM7XG4gIC8vIE5vdGU6IHN0YXR1cyBpcyBub3QgZXhwb3NlZCBieSBYRG9tYWluUmVxdWVzdFxuICBpZiAoIXJlc3BvbnNlLnN0YXR1cyB8fCAhdmFsaWRhdGVTdGF0dXMgfHwgdmFsaWRhdGVTdGF0dXMocmVzcG9uc2Uuc3RhdHVzKSkge1xuICAgIHJlc29sdmUocmVzcG9uc2UpO1xuICB9IGVsc2Uge1xuICAgIHJlamVjdChjcmVhdGVFcnJvcihcbiAgICAgICdSZXF1ZXN0IGZhaWxlZCB3aXRoIHN0YXR1cyBjb2RlICcgKyByZXNwb25zZS5zdGF0dXMsXG4gICAgICByZXNwb25zZS5jb25maWcsXG4gICAgICBudWxsLFxuICAgICAgcmVzcG9uc2UucmVxdWVzdCxcbiAgICAgIHJlc3BvbnNlXG4gICAgKSk7XG4gIH1cbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vLi4vdXRpbHMnKTtcblxuLyoqXG4gKiBUcmFuc2Zvcm0gdGhlIGRhdGEgZm9yIGEgcmVxdWVzdCBvciBhIHJlc3BvbnNlXG4gKlxuICogQHBhcmFtIHtPYmplY3R8U3RyaW5nfSBkYXRhIFRoZSBkYXRhIHRvIGJlIHRyYW5zZm9ybWVkXG4gKiBAcGFyYW0ge0FycmF5fSBoZWFkZXJzIFRoZSBoZWFkZXJzIGZvciB0aGUgcmVxdWVzdCBvciByZXNwb25zZVxuICogQHBhcmFtIHtBcnJheXxGdW5jdGlvbn0gZm5zIEEgc2luZ2xlIGZ1bmN0aW9uIG9yIEFycmF5IG9mIGZ1bmN0aW9uc1xuICogQHJldHVybnMgeyp9IFRoZSByZXN1bHRpbmcgdHJhbnNmb3JtZWQgZGF0YVxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHRyYW5zZm9ybURhdGEoZGF0YSwgaGVhZGVycywgZm5zKSB7XG4gIC8qZXNsaW50IG5vLXBhcmFtLXJlYXNzaWduOjAqL1xuICB1dGlscy5mb3JFYWNoKGZucywgZnVuY3Rpb24gdHJhbnNmb3JtKGZuKSB7XG4gICAgZGF0YSA9IGZuKGRhdGEsIGhlYWRlcnMpO1xuICB9KTtcblxuICByZXR1cm4gZGF0YTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vdXRpbHMnKTtcbnZhciBub3JtYWxpemVIZWFkZXJOYW1lID0gcmVxdWlyZSgnLi9oZWxwZXJzL25vcm1hbGl6ZUhlYWRlck5hbWUnKTtcblxudmFyIERFRkFVTFRfQ09OVEVOVF9UWVBFID0ge1xuICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCdcbn07XG5cbmZ1bmN0aW9uIHNldENvbnRlbnRUeXBlSWZVbnNldChoZWFkZXJzLCB2YWx1ZSkge1xuICBpZiAoIXV0aWxzLmlzVW5kZWZpbmVkKGhlYWRlcnMpICYmIHV0aWxzLmlzVW5kZWZpbmVkKGhlYWRlcnNbJ0NvbnRlbnQtVHlwZSddKSkge1xuICAgIGhlYWRlcnNbJ0NvbnRlbnQtVHlwZSddID0gdmFsdWU7XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0RGVmYXVsdEFkYXB0ZXIoKSB7XG4gIHZhciBhZGFwdGVyO1xuICBpZiAodHlwZW9mIFhNTEh0dHBSZXF1ZXN0ICE9PSAndW5kZWZpbmVkJykge1xuICAgIC8vIEZvciBicm93c2VycyB1c2UgWEhSIGFkYXB0ZXJcbiAgICBhZGFwdGVyID0gcmVxdWlyZSgnLi9hZGFwdGVycy94aHInKTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgcHJvY2VzcyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAvLyBGb3Igbm9kZSB1c2UgSFRUUCBhZGFwdGVyXG4gICAgYWRhcHRlciA9IHJlcXVpcmUoJy4vYWRhcHRlcnMvaHR0cCcpO1xuICB9XG4gIHJldHVybiBhZGFwdGVyO1xufVxuXG52YXIgZGVmYXVsdHMgPSB7XG4gIGFkYXB0ZXI6IGdldERlZmF1bHRBZGFwdGVyKCksXG5cbiAgdHJhbnNmb3JtUmVxdWVzdDogW2Z1bmN0aW9uIHRyYW5zZm9ybVJlcXVlc3QoZGF0YSwgaGVhZGVycykge1xuICAgIG5vcm1hbGl6ZUhlYWRlck5hbWUoaGVhZGVycywgJ0NvbnRlbnQtVHlwZScpO1xuICAgIGlmICh1dGlscy5pc0Zvcm1EYXRhKGRhdGEpIHx8XG4gICAgICB1dGlscy5pc0FycmF5QnVmZmVyKGRhdGEpIHx8XG4gICAgICB1dGlscy5pc0J1ZmZlcihkYXRhKSB8fFxuICAgICAgdXRpbHMuaXNTdHJlYW0oZGF0YSkgfHxcbiAgICAgIHV0aWxzLmlzRmlsZShkYXRhKSB8fFxuICAgICAgdXRpbHMuaXNCbG9iKGRhdGEpXG4gICAgKSB7XG4gICAgICByZXR1cm4gZGF0YTtcbiAgICB9XG4gICAgaWYgKHV0aWxzLmlzQXJyYXlCdWZmZXJWaWV3KGRhdGEpKSB7XG4gICAgICByZXR1cm4gZGF0YS5idWZmZXI7XG4gICAgfVxuICAgIGlmICh1dGlscy5pc1VSTFNlYXJjaFBhcmFtcyhkYXRhKSkge1xuICAgICAgc2V0Q29udGVudFR5cGVJZlVuc2V0KGhlYWRlcnMsICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQ7Y2hhcnNldD11dGYtOCcpO1xuICAgICAgcmV0dXJuIGRhdGEudG9TdHJpbmcoKTtcbiAgICB9XG4gICAgaWYgKHV0aWxzLmlzT2JqZWN0KGRhdGEpKSB7XG4gICAgICBzZXRDb250ZW50VHlwZUlmVW5zZXQoaGVhZGVycywgJ2FwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtOCcpO1xuICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KGRhdGEpO1xuICAgIH1cbiAgICByZXR1cm4gZGF0YTtcbiAgfV0sXG5cbiAgdHJhbnNmb3JtUmVzcG9uc2U6IFtmdW5jdGlvbiB0cmFuc2Zvcm1SZXNwb25zZShkYXRhKSB7XG4gICAgLyplc2xpbnQgbm8tcGFyYW0tcmVhc3NpZ246MCovXG4gICAgaWYgKHR5cGVvZiBkYXRhID09PSAnc3RyaW5nJykge1xuICAgICAgdHJ5IHtcbiAgICAgICAgZGF0YSA9IEpTT04ucGFyc2UoZGF0YSk7XG4gICAgICB9IGNhdGNoIChlKSB7IC8qIElnbm9yZSAqLyB9XG4gICAgfVxuICAgIHJldHVybiBkYXRhO1xuICB9XSxcblxuICAvKipcbiAgICogQSB0aW1lb3V0IGluIG1pbGxpc2Vjb25kcyB0byBhYm9ydCBhIHJlcXVlc3QuIElmIHNldCB0byAwIChkZWZhdWx0KSBhXG4gICAqIHRpbWVvdXQgaXMgbm90IGNyZWF0ZWQuXG4gICAqL1xuICB0aW1lb3V0OiAwLFxuXG4gIHhzcmZDb29raWVOYW1lOiAnWFNSRi1UT0tFTicsXG4gIHhzcmZIZWFkZXJOYW1lOiAnWC1YU1JGLVRPS0VOJyxcblxuICBtYXhDb250ZW50TGVuZ3RoOiAtMSxcblxuICB2YWxpZGF0ZVN0YXR1czogZnVuY3Rpb24gdmFsaWRhdGVTdGF0dXMoc3RhdHVzKSB7XG4gICAgcmV0dXJuIHN0YXR1cyA+PSAyMDAgJiYgc3RhdHVzIDwgMzAwO1xuICB9XG59O1xuXG5kZWZhdWx0cy5oZWFkZXJzID0ge1xuICBjb21tb246IHtcbiAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24sIHRleHQvcGxhaW4sICovKidcbiAgfVxufTtcblxudXRpbHMuZm9yRWFjaChbJ2RlbGV0ZScsICdnZXQnLCAnaGVhZCddLCBmdW5jdGlvbiBmb3JFYWNoTWV0aG9kTm9EYXRhKG1ldGhvZCkge1xuICBkZWZhdWx0cy5oZWFkZXJzW21ldGhvZF0gPSB7fTtcbn0pO1xuXG51dGlscy5mb3JFYWNoKFsncG9zdCcsICdwdXQnLCAncGF0Y2gnXSwgZnVuY3Rpb24gZm9yRWFjaE1ldGhvZFdpdGhEYXRhKG1ldGhvZCkge1xuICBkZWZhdWx0cy5oZWFkZXJzW21ldGhvZF0gPSB1dGlscy5tZXJnZShERUZBVUxUX0NPTlRFTlRfVFlQRSk7XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBkZWZhdWx0cztcbiIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBiaW5kKGZuLCB0aGlzQXJnKSB7XG4gIHJldHVybiBmdW5jdGlvbiB3cmFwKCkge1xuICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGgpO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJncy5sZW5ndGg7IGkrKykge1xuICAgICAgYXJnc1tpXSA9IGFyZ3VtZW50c1tpXTtcbiAgICB9XG4gICAgcmV0dXJuIGZuLmFwcGx5KHRoaXNBcmcsIGFyZ3MpO1xuICB9O1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxuLy8gYnRvYSBwb2x5ZmlsbCBmb3IgSUU8MTAgY291cnRlc3kgaHR0cHM6Ly9naXRodWIuY29tL2RhdmlkY2hhbWJlcnMvQmFzZTY0LmpzXG5cbnZhciBjaGFycyA9ICdBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWmFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6MDEyMzQ1Njc4OSsvPSc7XG5cbmZ1bmN0aW9uIEUoKSB7XG4gIHRoaXMubWVzc2FnZSA9ICdTdHJpbmcgY29udGFpbnMgYW4gaW52YWxpZCBjaGFyYWN0ZXInO1xufVxuRS5wcm90b3R5cGUgPSBuZXcgRXJyb3I7XG5FLnByb3RvdHlwZS5jb2RlID0gNTtcbkUucHJvdG90eXBlLm5hbWUgPSAnSW52YWxpZENoYXJhY3RlckVycm9yJztcblxuZnVuY3Rpb24gYnRvYShpbnB1dCkge1xuICB2YXIgc3RyID0gU3RyaW5nKGlucHV0KTtcbiAgdmFyIG91dHB1dCA9ICcnO1xuICBmb3IgKFxuICAgIC8vIGluaXRpYWxpemUgcmVzdWx0IGFuZCBjb3VudGVyXG4gICAgdmFyIGJsb2NrLCBjaGFyQ29kZSwgaWR4ID0gMCwgbWFwID0gY2hhcnM7XG4gICAgLy8gaWYgdGhlIG5leHQgc3RyIGluZGV4IGRvZXMgbm90IGV4aXN0OlxuICAgIC8vICAgY2hhbmdlIHRoZSBtYXBwaW5nIHRhYmxlIHRvIFwiPVwiXG4gICAgLy8gICBjaGVjayBpZiBkIGhhcyBubyBmcmFjdGlvbmFsIGRpZ2l0c1xuICAgIHN0ci5jaGFyQXQoaWR4IHwgMCkgfHwgKG1hcCA9ICc9JywgaWR4ICUgMSk7XG4gICAgLy8gXCI4IC0gaWR4ICUgMSAqIDhcIiBnZW5lcmF0ZXMgdGhlIHNlcXVlbmNlIDIsIDQsIDYsIDhcbiAgICBvdXRwdXQgKz0gbWFwLmNoYXJBdCg2MyAmIGJsb2NrID4+IDggLSBpZHggJSAxICogOClcbiAgKSB7XG4gICAgY2hhckNvZGUgPSBzdHIuY2hhckNvZGVBdChpZHggKz0gMyAvIDQpO1xuICAgIGlmIChjaGFyQ29kZSA+IDB4RkYpIHtcbiAgICAgIHRocm93IG5ldyBFKCk7XG4gICAgfVxuICAgIGJsb2NrID0gYmxvY2sgPDwgOCB8IGNoYXJDb2RlO1xuICB9XG4gIHJldHVybiBvdXRwdXQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYnRvYTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi8uLi91dGlscycpO1xuXG5mdW5jdGlvbiBlbmNvZGUodmFsKSB7XG4gIHJldHVybiBlbmNvZGVVUklDb21wb25lbnQodmFsKS5cbiAgICByZXBsYWNlKC8lNDAvZ2ksICdAJykuXG4gICAgcmVwbGFjZSgvJTNBL2dpLCAnOicpLlxuICAgIHJlcGxhY2UoLyUyNC9nLCAnJCcpLlxuICAgIHJlcGxhY2UoLyUyQy9naSwgJywnKS5cbiAgICByZXBsYWNlKC8lMjAvZywgJysnKS5cbiAgICByZXBsYWNlKC8lNUIvZ2ksICdbJykuXG4gICAgcmVwbGFjZSgvJTVEL2dpLCAnXScpO1xufVxuXG4vKipcbiAqIEJ1aWxkIGEgVVJMIGJ5IGFwcGVuZGluZyBwYXJhbXMgdG8gdGhlIGVuZFxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSB1cmwgVGhlIGJhc2Ugb2YgdGhlIHVybCAoZS5nLiwgaHR0cDovL3d3dy5nb29nbGUuY29tKVxuICogQHBhcmFtIHtvYmplY3R9IFtwYXJhbXNdIFRoZSBwYXJhbXMgdG8gYmUgYXBwZW5kZWRcbiAqIEByZXR1cm5zIHtzdHJpbmd9IFRoZSBmb3JtYXR0ZWQgdXJsXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gYnVpbGRVUkwodXJsLCBwYXJhbXMsIHBhcmFtc1NlcmlhbGl6ZXIpIHtcbiAgLyplc2xpbnQgbm8tcGFyYW0tcmVhc3NpZ246MCovXG4gIGlmICghcGFyYW1zKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuXG4gIHZhciBzZXJpYWxpemVkUGFyYW1zO1xuICBpZiAocGFyYW1zU2VyaWFsaXplcikge1xuICAgIHNlcmlhbGl6ZWRQYXJhbXMgPSBwYXJhbXNTZXJpYWxpemVyKHBhcmFtcyk7XG4gIH0gZWxzZSBpZiAodXRpbHMuaXNVUkxTZWFyY2hQYXJhbXMocGFyYW1zKSkge1xuICAgIHNlcmlhbGl6ZWRQYXJhbXMgPSBwYXJhbXMudG9TdHJpbmcoKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgcGFydHMgPSBbXTtcblxuICAgIHV0aWxzLmZvckVhY2gocGFyYW1zLCBmdW5jdGlvbiBzZXJpYWxpemUodmFsLCBrZXkpIHtcbiAgICAgIGlmICh2YWwgPT09IG51bGwgfHwgdHlwZW9mIHZhbCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAodXRpbHMuaXNBcnJheSh2YWwpKSB7XG4gICAgICAgIGtleSA9IGtleSArICdbXSc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YWwgPSBbdmFsXTtcbiAgICAgIH1cblxuICAgICAgdXRpbHMuZm9yRWFjaCh2YWwsIGZ1bmN0aW9uIHBhcnNlVmFsdWUodikge1xuICAgICAgICBpZiAodXRpbHMuaXNEYXRlKHYpKSB7XG4gICAgICAgICAgdiA9IHYudG9JU09TdHJpbmcoKTtcbiAgICAgICAgfSBlbHNlIGlmICh1dGlscy5pc09iamVjdCh2KSkge1xuICAgICAgICAgIHYgPSBKU09OLnN0cmluZ2lmeSh2KTtcbiAgICAgICAgfVxuICAgICAgICBwYXJ0cy5wdXNoKGVuY29kZShrZXkpICsgJz0nICsgZW5jb2RlKHYpKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgc2VyaWFsaXplZFBhcmFtcyA9IHBhcnRzLmpvaW4oJyYnKTtcbiAgfVxuXG4gIGlmIChzZXJpYWxpemVkUGFyYW1zKSB7XG4gICAgdXJsICs9ICh1cmwuaW5kZXhPZignPycpID09PSAtMSA/ICc/JyA6ICcmJykgKyBzZXJpYWxpemVkUGFyYW1zO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbi8qKlxuICogQ3JlYXRlcyBhIG5ldyBVUkwgYnkgY29tYmluaW5nIHRoZSBzcGVjaWZpZWQgVVJMc1xuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBiYXNlVVJMIFRoZSBiYXNlIFVSTFxuICogQHBhcmFtIHtzdHJpbmd9IHJlbGF0aXZlVVJMIFRoZSByZWxhdGl2ZSBVUkxcbiAqIEByZXR1cm5zIHtzdHJpbmd9IFRoZSBjb21iaW5lZCBVUkxcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjb21iaW5lVVJMcyhiYXNlVVJMLCByZWxhdGl2ZVVSTCkge1xuICByZXR1cm4gcmVsYXRpdmVVUkxcbiAgICA/IGJhc2VVUkwucmVwbGFjZSgvXFwvKyQvLCAnJykgKyAnLycgKyByZWxhdGl2ZVVSTC5yZXBsYWNlKC9eXFwvKy8sICcnKVxuICAgIDogYmFzZVVSTDtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vLi4vdXRpbHMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSAoXG4gIHV0aWxzLmlzU3RhbmRhcmRCcm93c2VyRW52KCkgP1xuXG4gIC8vIFN0YW5kYXJkIGJyb3dzZXIgZW52cyBzdXBwb3J0IGRvY3VtZW50LmNvb2tpZVxuICAoZnVuY3Rpb24gc3RhbmRhcmRCcm93c2VyRW52KCkge1xuICAgIHJldHVybiB7XG4gICAgICB3cml0ZTogZnVuY3Rpb24gd3JpdGUobmFtZSwgdmFsdWUsIGV4cGlyZXMsIHBhdGgsIGRvbWFpbiwgc2VjdXJlKSB7XG4gICAgICAgIHZhciBjb29raWUgPSBbXTtcbiAgICAgICAgY29va2llLnB1c2gobmFtZSArICc9JyArIGVuY29kZVVSSUNvbXBvbmVudCh2YWx1ZSkpO1xuXG4gICAgICAgIGlmICh1dGlscy5pc051bWJlcihleHBpcmVzKSkge1xuICAgICAgICAgIGNvb2tpZS5wdXNoKCdleHBpcmVzPScgKyBuZXcgRGF0ZShleHBpcmVzKS50b0dNVFN0cmluZygpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh1dGlscy5pc1N0cmluZyhwYXRoKSkge1xuICAgICAgICAgIGNvb2tpZS5wdXNoKCdwYXRoPScgKyBwYXRoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh1dGlscy5pc1N0cmluZyhkb21haW4pKSB7XG4gICAgICAgICAgY29va2llLnB1c2goJ2RvbWFpbj0nICsgZG9tYWluKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChzZWN1cmUgPT09IHRydWUpIHtcbiAgICAgICAgICBjb29raWUucHVzaCgnc2VjdXJlJyk7XG4gICAgICAgIH1cblxuICAgICAgICBkb2N1bWVudC5jb29raWUgPSBjb29raWUuam9pbignOyAnKTtcbiAgICAgIH0sXG5cbiAgICAgIHJlYWQ6IGZ1bmN0aW9uIHJlYWQobmFtZSkge1xuICAgICAgICB2YXIgbWF0Y2ggPSBkb2N1bWVudC5jb29raWUubWF0Y2gobmV3IFJlZ0V4cCgnKF58O1xcXFxzKikoJyArIG5hbWUgKyAnKT0oW147XSopJykpO1xuICAgICAgICByZXR1cm4gKG1hdGNoID8gZGVjb2RlVVJJQ29tcG9uZW50KG1hdGNoWzNdKSA6IG51bGwpO1xuICAgICAgfSxcblxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUobmFtZSkge1xuICAgICAgICB0aGlzLndyaXRlKG5hbWUsICcnLCBEYXRlLm5vdygpIC0gODY0MDAwMDApO1xuICAgICAgfVxuICAgIH07XG4gIH0pKCkgOlxuXG4gIC8vIE5vbiBzdGFuZGFyZCBicm93c2VyIGVudiAod2ViIHdvcmtlcnMsIHJlYWN0LW5hdGl2ZSkgbGFjayBuZWVkZWQgc3VwcG9ydC5cbiAgKGZ1bmN0aW9uIG5vblN0YW5kYXJkQnJvd3NlckVudigpIHtcbiAgICByZXR1cm4ge1xuICAgICAgd3JpdGU6IGZ1bmN0aW9uIHdyaXRlKCkge30sXG4gICAgICByZWFkOiBmdW5jdGlvbiByZWFkKCkgeyByZXR1cm4gbnVsbDsgfSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9KSgpXG4pO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIERldGVybWluZXMgd2hldGhlciB0aGUgc3BlY2lmaWVkIFVSTCBpcyBhYnNvbHV0ZVxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSB1cmwgVGhlIFVSTCB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB0aGUgc3BlY2lmaWVkIFVSTCBpcyBhYnNvbHV0ZSwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaXNBYnNvbHV0ZVVSTCh1cmwpIHtcbiAgLy8gQSBVUkwgaXMgY29uc2lkZXJlZCBhYnNvbHV0ZSBpZiBpdCBiZWdpbnMgd2l0aCBcIjxzY2hlbWU+Oi8vXCIgb3IgXCIvL1wiIChwcm90b2NvbC1yZWxhdGl2ZSBVUkwpLlxuICAvLyBSRkMgMzk4NiBkZWZpbmVzIHNjaGVtZSBuYW1lIGFzIGEgc2VxdWVuY2Ugb2YgY2hhcmFjdGVycyBiZWdpbm5pbmcgd2l0aCBhIGxldHRlciBhbmQgZm9sbG93ZWRcbiAgLy8gYnkgYW55IGNvbWJpbmF0aW9uIG9mIGxldHRlcnMsIGRpZ2l0cywgcGx1cywgcGVyaW9kLCBvciBoeXBoZW4uXG4gIHJldHVybiAvXihbYS16XVthLXpcXGRcXCtcXC1cXC5dKjopP1xcL1xcLy9pLnRlc3QodXJsKTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vLi4vdXRpbHMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSAoXG4gIHV0aWxzLmlzU3RhbmRhcmRCcm93c2VyRW52KCkgP1xuXG4gIC8vIFN0YW5kYXJkIGJyb3dzZXIgZW52cyBoYXZlIGZ1bGwgc3VwcG9ydCBvZiB0aGUgQVBJcyBuZWVkZWQgdG8gdGVzdFxuICAvLyB3aGV0aGVyIHRoZSByZXF1ZXN0IFVSTCBpcyBvZiB0aGUgc2FtZSBvcmlnaW4gYXMgY3VycmVudCBsb2NhdGlvbi5cbiAgKGZ1bmN0aW9uIHN0YW5kYXJkQnJvd3NlckVudigpIHtcbiAgICB2YXIgbXNpZSA9IC8obXNpZXx0cmlkZW50KS9pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCk7XG4gICAgdmFyIHVybFBhcnNpbmdOb2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgIHZhciBvcmlnaW5VUkw7XG5cbiAgICAvKipcbiAgICAqIFBhcnNlIGEgVVJMIHRvIGRpc2NvdmVyIGl0J3MgY29tcG9uZW50c1xuICAgICpcbiAgICAqIEBwYXJhbSB7U3RyaW5nfSB1cmwgVGhlIFVSTCB0byBiZSBwYXJzZWRcbiAgICAqIEByZXR1cm5zIHtPYmplY3R9XG4gICAgKi9cbiAgICBmdW5jdGlvbiByZXNvbHZlVVJMKHVybCkge1xuICAgICAgdmFyIGhyZWYgPSB1cmw7XG5cbiAgICAgIGlmIChtc2llKSB7XG4gICAgICAgIC8vIElFIG5lZWRzIGF0dHJpYnV0ZSBzZXQgdHdpY2UgdG8gbm9ybWFsaXplIHByb3BlcnRpZXNcbiAgICAgICAgdXJsUGFyc2luZ05vZGUuc2V0QXR0cmlidXRlKCdocmVmJywgaHJlZik7XG4gICAgICAgIGhyZWYgPSB1cmxQYXJzaW5nTm9kZS5ocmVmO1xuICAgICAgfVxuXG4gICAgICB1cmxQYXJzaW5nTm9kZS5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCBocmVmKTtcblxuICAgICAgLy8gdXJsUGFyc2luZ05vZGUgcHJvdmlkZXMgdGhlIFVybFV0aWxzIGludGVyZmFjZSAtIGh0dHA6Ly91cmwuc3BlYy53aGF0d2cub3JnLyN1cmx1dGlsc1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgaHJlZjogdXJsUGFyc2luZ05vZGUuaHJlZixcbiAgICAgICAgcHJvdG9jb2w6IHVybFBhcnNpbmdOb2RlLnByb3RvY29sID8gdXJsUGFyc2luZ05vZGUucHJvdG9jb2wucmVwbGFjZSgvOiQvLCAnJykgOiAnJyxcbiAgICAgICAgaG9zdDogdXJsUGFyc2luZ05vZGUuaG9zdCxcbiAgICAgICAgc2VhcmNoOiB1cmxQYXJzaW5nTm9kZS5zZWFyY2ggPyB1cmxQYXJzaW5nTm9kZS5zZWFyY2gucmVwbGFjZSgvXlxcPy8sICcnKSA6ICcnLFxuICAgICAgICBoYXNoOiB1cmxQYXJzaW5nTm9kZS5oYXNoID8gdXJsUGFyc2luZ05vZGUuaGFzaC5yZXBsYWNlKC9eIy8sICcnKSA6ICcnLFxuICAgICAgICBob3N0bmFtZTogdXJsUGFyc2luZ05vZGUuaG9zdG5hbWUsXG4gICAgICAgIHBvcnQ6IHVybFBhcnNpbmdOb2RlLnBvcnQsXG4gICAgICAgIHBhdGhuYW1lOiAodXJsUGFyc2luZ05vZGUucGF0aG5hbWUuY2hhckF0KDApID09PSAnLycpID9cbiAgICAgICAgICAgICAgICAgIHVybFBhcnNpbmdOb2RlLnBhdGhuYW1lIDpcbiAgICAgICAgICAgICAgICAgICcvJyArIHVybFBhcnNpbmdOb2RlLnBhdGhuYW1lXG4gICAgICB9O1xuICAgIH1cblxuICAgIG9yaWdpblVSTCA9IHJlc29sdmVVUkwod2luZG93LmxvY2F0aW9uLmhyZWYpO1xuXG4gICAgLyoqXG4gICAgKiBEZXRlcm1pbmUgaWYgYSBVUkwgc2hhcmVzIHRoZSBzYW1lIG9yaWdpbiBhcyB0aGUgY3VycmVudCBsb2NhdGlvblxuICAgICpcbiAgICAqIEBwYXJhbSB7U3RyaW5nfSByZXF1ZXN0VVJMIFRoZSBVUkwgdG8gdGVzdFxuICAgICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgVVJMIHNoYXJlcyB0aGUgc2FtZSBvcmlnaW4sIG90aGVyd2lzZSBmYWxzZVxuICAgICovXG4gICAgcmV0dXJuIGZ1bmN0aW9uIGlzVVJMU2FtZU9yaWdpbihyZXF1ZXN0VVJMKSB7XG4gICAgICB2YXIgcGFyc2VkID0gKHV0aWxzLmlzU3RyaW5nKHJlcXVlc3RVUkwpKSA/IHJlc29sdmVVUkwocmVxdWVzdFVSTCkgOiByZXF1ZXN0VVJMO1xuICAgICAgcmV0dXJuIChwYXJzZWQucHJvdG9jb2wgPT09IG9yaWdpblVSTC5wcm90b2NvbCAmJlxuICAgICAgICAgICAgcGFyc2VkLmhvc3QgPT09IG9yaWdpblVSTC5ob3N0KTtcbiAgICB9O1xuICB9KSgpIDpcblxuICAvLyBOb24gc3RhbmRhcmQgYnJvd3NlciBlbnZzICh3ZWIgd29ya2VycywgcmVhY3QtbmF0aXZlKSBsYWNrIG5lZWRlZCBzdXBwb3J0LlxuICAoZnVuY3Rpb24gbm9uU3RhbmRhcmRCcm93c2VyRW52KCkge1xuICAgIHJldHVybiBmdW5jdGlvbiBpc1VSTFNhbWVPcmlnaW4oKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9O1xuICB9KSgpXG4pO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLi91dGlscycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIG5vcm1hbGl6ZUhlYWRlck5hbWUoaGVhZGVycywgbm9ybWFsaXplZE5hbWUpIHtcbiAgdXRpbHMuZm9yRWFjaChoZWFkZXJzLCBmdW5jdGlvbiBwcm9jZXNzSGVhZGVyKHZhbHVlLCBuYW1lKSB7XG4gICAgaWYgKG5hbWUgIT09IG5vcm1hbGl6ZWROYW1lICYmIG5hbWUudG9VcHBlckNhc2UoKSA9PT0gbm9ybWFsaXplZE5hbWUudG9VcHBlckNhc2UoKSkge1xuICAgICAgaGVhZGVyc1tub3JtYWxpemVkTmFtZV0gPSB2YWx1ZTtcbiAgICAgIGRlbGV0ZSBoZWFkZXJzW25hbWVdO1xuICAgIH1cbiAgfSk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLy4uL3V0aWxzJyk7XG5cbi8vIEhlYWRlcnMgd2hvc2UgZHVwbGljYXRlcyBhcmUgaWdub3JlZCBieSBub2RlXG4vLyBjLmYuIGh0dHBzOi8vbm9kZWpzLm9yZy9hcGkvaHR0cC5odG1sI2h0dHBfbWVzc2FnZV9oZWFkZXJzXG52YXIgaWdub3JlRHVwbGljYXRlT2YgPSBbXG4gICdhZ2UnLCAnYXV0aG9yaXphdGlvbicsICdjb250ZW50LWxlbmd0aCcsICdjb250ZW50LXR5cGUnLCAnZXRhZycsXG4gICdleHBpcmVzJywgJ2Zyb20nLCAnaG9zdCcsICdpZi1tb2RpZmllZC1zaW5jZScsICdpZi11bm1vZGlmaWVkLXNpbmNlJyxcbiAgJ2xhc3QtbW9kaWZpZWQnLCAnbG9jYXRpb24nLCAnbWF4LWZvcndhcmRzJywgJ3Byb3h5LWF1dGhvcml6YXRpb24nLFxuICAncmVmZXJlcicsICdyZXRyeS1hZnRlcicsICd1c2VyLWFnZW50J1xuXTtcblxuLyoqXG4gKiBQYXJzZSBoZWFkZXJzIGludG8gYW4gb2JqZWN0XG4gKlxuICogYGBgXG4gKiBEYXRlOiBXZWQsIDI3IEF1ZyAyMDE0IDA4OjU4OjQ5IEdNVFxuICogQ29udGVudC1UeXBlOiBhcHBsaWNhdGlvbi9qc29uXG4gKiBDb25uZWN0aW9uOiBrZWVwLWFsaXZlXG4gKiBUcmFuc2Zlci1FbmNvZGluZzogY2h1bmtlZFxuICogYGBgXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGhlYWRlcnMgSGVhZGVycyBuZWVkaW5nIHRvIGJlIHBhcnNlZFxuICogQHJldHVybnMge09iamVjdH0gSGVhZGVycyBwYXJzZWQgaW50byBhbiBvYmplY3RcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBwYXJzZUhlYWRlcnMoaGVhZGVycykge1xuICB2YXIgcGFyc2VkID0ge307XG4gIHZhciBrZXk7XG4gIHZhciB2YWw7XG4gIHZhciBpO1xuXG4gIGlmICghaGVhZGVycykgeyByZXR1cm4gcGFyc2VkOyB9XG5cbiAgdXRpbHMuZm9yRWFjaChoZWFkZXJzLnNwbGl0KCdcXG4nKSwgZnVuY3Rpb24gcGFyc2VyKGxpbmUpIHtcbiAgICBpID0gbGluZS5pbmRleE9mKCc6Jyk7XG4gICAga2V5ID0gdXRpbHMudHJpbShsaW5lLnN1YnN0cigwLCBpKSkudG9Mb3dlckNhc2UoKTtcbiAgICB2YWwgPSB1dGlscy50cmltKGxpbmUuc3Vic3RyKGkgKyAxKSk7XG5cbiAgICBpZiAoa2V5KSB7XG4gICAgICBpZiAocGFyc2VkW2tleV0gJiYgaWdub3JlRHVwbGljYXRlT2YuaW5kZXhPZihrZXkpID49IDApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKGtleSA9PT0gJ3NldC1jb29raWUnKSB7XG4gICAgICAgIHBhcnNlZFtrZXldID0gKHBhcnNlZFtrZXldID8gcGFyc2VkW2tleV0gOiBbXSkuY29uY2F0KFt2YWxdKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHBhcnNlZFtrZXldID0gcGFyc2VkW2tleV0gPyBwYXJzZWRba2V5XSArICcsICcgKyB2YWwgOiB2YWw7XG4gICAgICB9XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gcGFyc2VkO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBTeW50YWN0aWMgc3VnYXIgZm9yIGludm9raW5nIGEgZnVuY3Rpb24gYW5kIGV4cGFuZGluZyBhbiBhcnJheSBmb3IgYXJndW1lbnRzLlxuICpcbiAqIENvbW1vbiB1c2UgY2FzZSB3b3VsZCBiZSB0byB1c2UgYEZ1bmN0aW9uLnByb3RvdHlwZS5hcHBseWAuXG4gKlxuICogIGBgYGpzXG4gKiAgZnVuY3Rpb24gZih4LCB5LCB6KSB7fVxuICogIHZhciBhcmdzID0gWzEsIDIsIDNdO1xuICogIGYuYXBwbHkobnVsbCwgYXJncyk7XG4gKiAgYGBgXG4gKlxuICogV2l0aCBgc3ByZWFkYCB0aGlzIGV4YW1wbGUgY2FuIGJlIHJlLXdyaXR0ZW4uXG4gKlxuICogIGBgYGpzXG4gKiAgc3ByZWFkKGZ1bmN0aW9uKHgsIHksIHopIHt9KShbMSwgMiwgM10pO1xuICogIGBgYFxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259XG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gc3ByZWFkKGNhbGxiYWNrKSB7XG4gIHJldHVybiBmdW5jdGlvbiB3cmFwKGFycikge1xuICAgIHJldHVybiBjYWxsYmFjay5hcHBseShudWxsLCBhcnIpO1xuICB9O1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIGJpbmQgPSByZXF1aXJlKCcuL2hlbHBlcnMvYmluZCcpO1xudmFyIGlzQnVmZmVyID0gcmVxdWlyZSgnaXMtYnVmZmVyJyk7XG5cbi8qZ2xvYmFsIHRvU3RyaW5nOnRydWUqL1xuXG4vLyB1dGlscyBpcyBhIGxpYnJhcnkgb2YgZ2VuZXJpYyBoZWxwZXIgZnVuY3Rpb25zIG5vbi1zcGVjaWZpYyB0byBheGlvc1xuXG52YXIgdG9TdHJpbmcgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nO1xuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGFuIEFycmF5XG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYW4gQXJyYXksIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0FycmF5KHZhbCkge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbCh2YWwpID09PSAnW29iamVjdCBBcnJheV0nO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGFuIEFycmF5QnVmZmVyXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYW4gQXJyYXlCdWZmZXIsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0FycmF5QnVmZmVyKHZhbCkge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbCh2YWwpID09PSAnW29iamVjdCBBcnJheUJ1ZmZlcl0nO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgRm9ybURhdGFcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhbiBGb3JtRGF0YSwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzRm9ybURhdGEodmFsKSB7XG4gIHJldHVybiAodHlwZW9mIEZvcm1EYXRhICE9PSAndW5kZWZpbmVkJykgJiYgKHZhbCBpbnN0YW5jZW9mIEZvcm1EYXRhKTtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIHZpZXcgb24gYW4gQXJyYXlCdWZmZXJcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIHZpZXcgb24gYW4gQXJyYXlCdWZmZXIsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0FycmF5QnVmZmVyVmlldyh2YWwpIHtcbiAgdmFyIHJlc3VsdDtcbiAgaWYgKCh0eXBlb2YgQXJyYXlCdWZmZXIgIT09ICd1bmRlZmluZWQnKSAmJiAoQXJyYXlCdWZmZXIuaXNWaWV3KSkge1xuICAgIHJlc3VsdCA9IEFycmF5QnVmZmVyLmlzVmlldyh2YWwpO1xuICB9IGVsc2Uge1xuICAgIHJlc3VsdCA9ICh2YWwpICYmICh2YWwuYnVmZmVyKSAmJiAodmFsLmJ1ZmZlciBpbnN0YW5jZW9mIEFycmF5QnVmZmVyKTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgU3RyaW5nXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBTdHJpbmcsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc1N0cmluZyh2YWwpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWwgPT09ICdzdHJpbmcnO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgTnVtYmVyXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBOdW1iZXIsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc051bWJlcih2YWwpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWwgPT09ICdudW1iZXInO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIHVuZGVmaW5lZFxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHRoZSB2YWx1ZSBpcyB1bmRlZmluZWQsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc1VuZGVmaW5lZCh2YWwpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWwgPT09ICd1bmRlZmluZWQnO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGFuIE9iamVjdFxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGFuIE9iamVjdCwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzT2JqZWN0KHZhbCkge1xuICByZXR1cm4gdmFsICE9PSBudWxsICYmIHR5cGVvZiB2YWwgPT09ICdvYmplY3QnO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgRGF0ZVxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgRGF0ZSwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzRGF0ZSh2YWwpIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwodmFsKSA9PT0gJ1tvYmplY3QgRGF0ZV0nO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgRmlsZVxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgRmlsZSwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzRmlsZSh2YWwpIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwodmFsKSA9PT0gJ1tvYmplY3QgRmlsZV0nO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgQmxvYlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgQmxvYiwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzQmxvYih2YWwpIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwodmFsKSA9PT0gJ1tvYmplY3QgQmxvYl0nO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgRnVuY3Rpb25cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIEZ1bmN0aW9uLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNGdW5jdGlvbih2YWwpIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwodmFsKSA9PT0gJ1tvYmplY3QgRnVuY3Rpb25dJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIFN0cmVhbVxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgU3RyZWFtLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNTdHJlYW0odmFsKSB7XG4gIHJldHVybiBpc09iamVjdCh2YWwpICYmIGlzRnVuY3Rpb24odmFsLnBpcGUpO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgVVJMU2VhcmNoUGFyYW1zIG9iamVjdFxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgVVJMU2VhcmNoUGFyYW1zIG9iamVjdCwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzVVJMU2VhcmNoUGFyYW1zKHZhbCkge1xuICByZXR1cm4gdHlwZW9mIFVSTFNlYXJjaFBhcmFtcyAhPT0gJ3VuZGVmaW5lZCcgJiYgdmFsIGluc3RhbmNlb2YgVVJMU2VhcmNoUGFyYW1zO1xufVxuXG4vKipcbiAqIFRyaW0gZXhjZXNzIHdoaXRlc3BhY2Ugb2ZmIHRoZSBiZWdpbm5pbmcgYW5kIGVuZCBvZiBhIHN0cmluZ1xuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHIgVGhlIFN0cmluZyB0byB0cmltXG4gKiBAcmV0dXJucyB7U3RyaW5nfSBUaGUgU3RyaW5nIGZyZWVkIG9mIGV4Y2VzcyB3aGl0ZXNwYWNlXG4gKi9cbmZ1bmN0aW9uIHRyaW0oc3RyKSB7XG4gIHJldHVybiBzdHIucmVwbGFjZSgvXlxccyovLCAnJykucmVwbGFjZSgvXFxzKiQvLCAnJyk7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIHdlJ3JlIHJ1bm5pbmcgaW4gYSBzdGFuZGFyZCBicm93c2VyIGVudmlyb25tZW50XG4gKlxuICogVGhpcyBhbGxvd3MgYXhpb3MgdG8gcnVuIGluIGEgd2ViIHdvcmtlciwgYW5kIHJlYWN0LW5hdGl2ZS5cbiAqIEJvdGggZW52aXJvbm1lbnRzIHN1cHBvcnQgWE1MSHR0cFJlcXVlc3QsIGJ1dCBub3QgZnVsbHkgc3RhbmRhcmQgZ2xvYmFscy5cbiAqXG4gKiB3ZWIgd29ya2VyczpcbiAqICB0eXBlb2Ygd2luZG93IC0+IHVuZGVmaW5lZFxuICogIHR5cGVvZiBkb2N1bWVudCAtPiB1bmRlZmluZWRcbiAqXG4gKiByZWFjdC1uYXRpdmU6XG4gKiAgbmF2aWdhdG9yLnByb2R1Y3QgLT4gJ1JlYWN0TmF0aXZlJ1xuICovXG5mdW5jdGlvbiBpc1N0YW5kYXJkQnJvd3NlckVudigpIHtcbiAgaWYgKHR5cGVvZiBuYXZpZ2F0b3IgIT09ICd1bmRlZmluZWQnICYmIG5hdmlnYXRvci5wcm9kdWN0ID09PSAnUmVhY3ROYXRpdmUnKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHJldHVybiAoXG4gICAgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgICB0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnXG4gICk7XG59XG5cbi8qKlxuICogSXRlcmF0ZSBvdmVyIGFuIEFycmF5IG9yIGFuIE9iamVjdCBpbnZva2luZyBhIGZ1bmN0aW9uIGZvciBlYWNoIGl0ZW0uXG4gKlxuICogSWYgYG9iamAgaXMgYW4gQXJyYXkgY2FsbGJhY2sgd2lsbCBiZSBjYWxsZWQgcGFzc2luZ1xuICogdGhlIHZhbHVlLCBpbmRleCwgYW5kIGNvbXBsZXRlIGFycmF5IGZvciBlYWNoIGl0ZW0uXG4gKlxuICogSWYgJ29iaicgaXMgYW4gT2JqZWN0IGNhbGxiYWNrIHdpbGwgYmUgY2FsbGVkIHBhc3NpbmdcbiAqIHRoZSB2YWx1ZSwga2V5LCBhbmQgY29tcGxldGUgb2JqZWN0IGZvciBlYWNoIHByb3BlcnR5LlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fEFycmF5fSBvYmogVGhlIG9iamVjdCB0byBpdGVyYXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmbiBUaGUgY2FsbGJhY2sgdG8gaW52b2tlIGZvciBlYWNoIGl0ZW1cbiAqL1xuZnVuY3Rpb24gZm9yRWFjaChvYmosIGZuKSB7XG4gIC8vIERvbid0IGJvdGhlciBpZiBubyB2YWx1ZSBwcm92aWRlZFxuICBpZiAob2JqID09PSBudWxsIHx8IHR5cGVvZiBvYmogPT09ICd1bmRlZmluZWQnKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLy8gRm9yY2UgYW4gYXJyYXkgaWYgbm90IGFscmVhZHkgc29tZXRoaW5nIGl0ZXJhYmxlXG4gIGlmICh0eXBlb2Ygb2JqICE9PSAnb2JqZWN0Jykge1xuICAgIC8qZXNsaW50IG5vLXBhcmFtLXJlYXNzaWduOjAqL1xuICAgIG9iaiA9IFtvYmpdO1xuICB9XG5cbiAgaWYgKGlzQXJyYXkob2JqKSkge1xuICAgIC8vIEl0ZXJhdGUgb3ZlciBhcnJheSB2YWx1ZXNcbiAgICBmb3IgKHZhciBpID0gMCwgbCA9IG9iai5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGZuLmNhbGwobnVsbCwgb2JqW2ldLCBpLCBvYmopO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICAvLyBJdGVyYXRlIG92ZXIgb2JqZWN0IGtleXNcbiAgICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XG4gICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkge1xuICAgICAgICBmbi5jYWxsKG51bGwsIG9ialtrZXldLCBrZXksIG9iaik7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogQWNjZXB0cyB2YXJhcmdzIGV4cGVjdGluZyBlYWNoIGFyZ3VtZW50IHRvIGJlIGFuIG9iamVjdCwgdGhlblxuICogaW1tdXRhYmx5IG1lcmdlcyB0aGUgcHJvcGVydGllcyBvZiBlYWNoIG9iamVjdCBhbmQgcmV0dXJucyByZXN1bHQuXG4gKlxuICogV2hlbiBtdWx0aXBsZSBvYmplY3RzIGNvbnRhaW4gdGhlIHNhbWUga2V5IHRoZSBsYXRlciBvYmplY3QgaW5cbiAqIHRoZSBhcmd1bWVudHMgbGlzdCB3aWxsIHRha2UgcHJlY2VkZW5jZS5cbiAqXG4gKiBFeGFtcGxlOlxuICpcbiAqIGBgYGpzXG4gKiB2YXIgcmVzdWx0ID0gbWVyZ2Uoe2ZvbzogMTIzfSwge2ZvbzogNDU2fSk7XG4gKiBjb25zb2xlLmxvZyhyZXN1bHQuZm9vKTsgLy8gb3V0cHV0cyA0NTZcbiAqIGBgYFxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmoxIE9iamVjdCB0byBtZXJnZVxuICogQHJldHVybnMge09iamVjdH0gUmVzdWx0IG9mIGFsbCBtZXJnZSBwcm9wZXJ0aWVzXG4gKi9cbmZ1bmN0aW9uIG1lcmdlKC8qIG9iajEsIG9iajIsIG9iajMsIC4uLiAqLykge1xuICB2YXIgcmVzdWx0ID0ge307XG4gIGZ1bmN0aW9uIGFzc2lnblZhbHVlKHZhbCwga2V5KSB7XG4gICAgaWYgKHR5cGVvZiByZXN1bHRba2V5XSA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIHZhbCA9PT0gJ29iamVjdCcpIHtcbiAgICAgIHJlc3VsdFtrZXldID0gbWVyZ2UocmVzdWx0W2tleV0sIHZhbCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3VsdFtrZXldID0gdmFsO1xuICAgIH1cbiAgfVxuXG4gIGZvciAodmFyIGkgPSAwLCBsID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIGZvckVhY2goYXJndW1lbnRzW2ldLCBhc3NpZ25WYWx1ZSk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBFeHRlbmRzIG9iamVjdCBhIGJ5IG11dGFibHkgYWRkaW5nIHRvIGl0IHRoZSBwcm9wZXJ0aWVzIG9mIG9iamVjdCBiLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBhIFRoZSBvYmplY3QgdG8gYmUgZXh0ZW5kZWRcbiAqIEBwYXJhbSB7T2JqZWN0fSBiIFRoZSBvYmplY3QgdG8gY29weSBwcm9wZXJ0aWVzIGZyb21cbiAqIEBwYXJhbSB7T2JqZWN0fSB0aGlzQXJnIFRoZSBvYmplY3QgdG8gYmluZCBmdW5jdGlvbiB0b1xuICogQHJldHVybiB7T2JqZWN0fSBUaGUgcmVzdWx0aW5nIHZhbHVlIG9mIG9iamVjdCBhXG4gKi9cbmZ1bmN0aW9uIGV4dGVuZChhLCBiLCB0aGlzQXJnKSB7XG4gIGZvckVhY2goYiwgZnVuY3Rpb24gYXNzaWduVmFsdWUodmFsLCBrZXkpIHtcbiAgICBpZiAodGhpc0FyZyAmJiB0eXBlb2YgdmFsID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBhW2tleV0gPSBiaW5kKHZhbCwgdGhpc0FyZyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFba2V5XSA9IHZhbDtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gYTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGlzQXJyYXk6IGlzQXJyYXksXG4gIGlzQXJyYXlCdWZmZXI6IGlzQXJyYXlCdWZmZXIsXG4gIGlzQnVmZmVyOiBpc0J1ZmZlcixcbiAgaXNGb3JtRGF0YTogaXNGb3JtRGF0YSxcbiAgaXNBcnJheUJ1ZmZlclZpZXc6IGlzQXJyYXlCdWZmZXJWaWV3LFxuICBpc1N0cmluZzogaXNTdHJpbmcsXG4gIGlzTnVtYmVyOiBpc051bWJlcixcbiAgaXNPYmplY3Q6IGlzT2JqZWN0LFxuICBpc1VuZGVmaW5lZDogaXNVbmRlZmluZWQsXG4gIGlzRGF0ZTogaXNEYXRlLFxuICBpc0ZpbGU6IGlzRmlsZSxcbiAgaXNCbG9iOiBpc0Jsb2IsXG4gIGlzRnVuY3Rpb246IGlzRnVuY3Rpb24sXG4gIGlzU3RyZWFtOiBpc1N0cmVhbSxcbiAgaXNVUkxTZWFyY2hQYXJhbXM6IGlzVVJMU2VhcmNoUGFyYW1zLFxuICBpc1N0YW5kYXJkQnJvd3NlckVudjogaXNTdGFuZGFyZEJyb3dzZXJFbnYsXG4gIGZvckVhY2g6IGZvckVhY2gsXG4gIG1lcmdlOiBtZXJnZSxcbiAgZXh0ZW5kOiBleHRlbmQsXG4gIHRyaW06IHRyaW1cbn07XG4iLCIvKiFcbiAqIERldGVybWluZSBpZiBhbiBvYmplY3QgaXMgYSBCdWZmZXJcbiAqXG4gKiBAYXV0aG9yICAgRmVyb3NzIEFib3VraGFkaWplaCA8aHR0cHM6Ly9mZXJvc3Mub3JnPlxuICogQGxpY2Vuc2UgIE1JVFxuICovXG5cbi8vIFRoZSBfaXNCdWZmZXIgY2hlY2sgaXMgZm9yIFNhZmFyaSA1LTcgc3VwcG9ydCwgYmVjYXVzZSBpdCdzIG1pc3Npbmdcbi8vIE9iamVjdC5wcm90b3R5cGUuY29uc3RydWN0b3IuIFJlbW92ZSB0aGlzIGV2ZW50dWFsbHlcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG9iaikge1xuICByZXR1cm4gb2JqICE9IG51bGwgJiYgKGlzQnVmZmVyKG9iaikgfHwgaXNTbG93QnVmZmVyKG9iaikgfHwgISFvYmouX2lzQnVmZmVyKVxufVxuXG5mdW5jdGlvbiBpc0J1ZmZlciAob2JqKSB7XG4gIHJldHVybiAhIW9iai5jb25zdHJ1Y3RvciAmJiB0eXBlb2Ygb2JqLmNvbnN0cnVjdG9yLmlzQnVmZmVyID09PSAnZnVuY3Rpb24nICYmIG9iai5jb25zdHJ1Y3Rvci5pc0J1ZmZlcihvYmopXG59XG5cbi8vIEZvciBOb2RlIHYwLjEwIHN1cHBvcnQuIFJlbW92ZSB0aGlzIGV2ZW50dWFsbHkuXG5mdW5jdGlvbiBpc1Nsb3dCdWZmZXIgKG9iaikge1xuICByZXR1cm4gdHlwZW9mIG9iai5yZWFkRmxvYXRMRSA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2Ygb2JqLnNsaWNlID09PSAnZnVuY3Rpb24nICYmIGlzQnVmZmVyKG9iai5zbGljZSgwLCAwKSlcbn1cbiIsIi8vIHNoaW0gZm9yIHVzaW5nIHByb2Nlc3MgaW4gYnJvd3NlclxudmFyIHByb2Nlc3MgPSBtb2R1bGUuZXhwb3J0cyA9IHt9O1xuXG4vLyBjYWNoZWQgZnJvbSB3aGF0ZXZlciBnbG9iYWwgaXMgcHJlc2VudCBzbyB0aGF0IHRlc3QgcnVubmVycyB0aGF0IHN0dWIgaXRcbi8vIGRvbid0IGJyZWFrIHRoaW5ncy4gIEJ1dCB3ZSBuZWVkIHRvIHdyYXAgaXQgaW4gYSB0cnkgY2F0Y2ggaW4gY2FzZSBpdCBpc1xuLy8gd3JhcHBlZCBpbiBzdHJpY3QgbW9kZSBjb2RlIHdoaWNoIGRvZXNuJ3QgZGVmaW5lIGFueSBnbG9iYWxzLiAgSXQncyBpbnNpZGUgYVxuLy8gZnVuY3Rpb24gYmVjYXVzZSB0cnkvY2F0Y2hlcyBkZW9wdGltaXplIGluIGNlcnRhaW4gZW5naW5lcy5cblxudmFyIGNhY2hlZFNldFRpbWVvdXQ7XG52YXIgY2FjaGVkQ2xlYXJUaW1lb3V0O1xuXG5mdW5jdGlvbiBkZWZhdWx0U2V0VGltb3V0KCkge1xuICAgIHRocm93IG5ldyBFcnJvcignc2V0VGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuZnVuY3Rpb24gZGVmYXVsdENsZWFyVGltZW91dCAoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdjbGVhclRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbihmdW5jdGlvbiAoKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBzZXRUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBjbGVhclRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgfVxufSAoKSlcbmZ1bmN0aW9uIHJ1blRpbWVvdXQoZnVuKSB7XG4gICAgaWYgKGNhY2hlZFNldFRpbWVvdXQgPT09IHNldFRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIC8vIGlmIHNldFRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRTZXRUaW1lb3V0ID09PSBkZWZhdWx0U2V0VGltb3V0IHx8ICFjYWNoZWRTZXRUaW1lb3V0KSAmJiBzZXRUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfSBjYXRjaChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbChudWxsLCBmdW4sIDApO1xuICAgICAgICB9IGNhdGNoKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3JcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwodGhpcywgZnVuLCAwKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG59XG5mdW5jdGlvbiBydW5DbGVhclRpbWVvdXQobWFya2VyKSB7XG4gICAgaWYgKGNhY2hlZENsZWFyVGltZW91dCA9PT0gY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIC8vIGlmIGNsZWFyVGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZENsZWFyVGltZW91dCA9PT0gZGVmYXVsdENsZWFyVGltZW91dCB8fCAhY2FjaGVkQ2xlYXJUaW1lb3V0KSAmJiBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0ICB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKG51bGwsIG1hcmtlcik7XG4gICAgICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3IuXG4gICAgICAgICAgICAvLyBTb21lIHZlcnNpb25zIG9mIEkuRS4gaGF2ZSBkaWZmZXJlbnQgcnVsZXMgZm9yIGNsZWFyVGltZW91dCB2cyBzZXRUaW1lb3V0XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwodGhpcywgbWFya2VyKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG5cbn1cbnZhciBxdWV1ZSA9IFtdO1xudmFyIGRyYWluaW5nID0gZmFsc2U7XG52YXIgY3VycmVudFF1ZXVlO1xudmFyIHF1ZXVlSW5kZXggPSAtMTtcblxuZnVuY3Rpb24gY2xlYW5VcE5leHRUaWNrKCkge1xuICAgIGlmICghZHJhaW5pbmcgfHwgIWN1cnJlbnRRdWV1ZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgaWYgKGN1cnJlbnRRdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgcXVldWUgPSBjdXJyZW50UXVldWUuY29uY2F0KHF1ZXVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgfVxuICAgIGlmIChxdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgZHJhaW5RdWV1ZSgpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZHJhaW5RdWV1ZSgpIHtcbiAgICBpZiAoZHJhaW5pbmcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgdGltZW91dCA9IHJ1blRpbWVvdXQoY2xlYW5VcE5leHRUaWNrKTtcbiAgICBkcmFpbmluZyA9IHRydWU7XG5cbiAgICB2YXIgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIHdoaWxlKGxlbikge1xuICAgICAgICBjdXJyZW50UXVldWUgPSBxdWV1ZTtcbiAgICAgICAgcXVldWUgPSBbXTtcbiAgICAgICAgd2hpbGUgKCsrcXVldWVJbmRleCA8IGxlbikge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRRdWV1ZSkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRRdWV1ZVtxdWV1ZUluZGV4XS5ydW4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgICAgIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB9XG4gICAgY3VycmVudFF1ZXVlID0gbnVsbDtcbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIHJ1bkNsZWFyVGltZW91dCh0aW1lb3V0KTtcbn1cblxucHJvY2Vzcy5uZXh0VGljayA9IGZ1bmN0aW9uIChmdW4pIHtcbiAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoIC0gMSk7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBhcmdzW2kgLSAxXSA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBxdWV1ZS5wdXNoKG5ldyBJdGVtKGZ1biwgYXJncykpO1xuICAgIGlmIChxdWV1ZS5sZW5ndGggPT09IDEgJiYgIWRyYWluaW5nKSB7XG4gICAgICAgIHJ1blRpbWVvdXQoZHJhaW5RdWV1ZSk7XG4gICAgfVxufTtcblxuLy8gdjggbGlrZXMgcHJlZGljdGlibGUgb2JqZWN0c1xuZnVuY3Rpb24gSXRlbShmdW4sIGFycmF5KSB7XG4gICAgdGhpcy5mdW4gPSBmdW47XG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xufVxuSXRlbS5wcm90b3R5cGUucnVuID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuZnVuLmFwcGx5KG51bGwsIHRoaXMuYXJyYXkpO1xufTtcbnByb2Nlc3MudGl0bGUgPSAnYnJvd3Nlcic7XG5wcm9jZXNzLmJyb3dzZXIgPSB0cnVlO1xucHJvY2Vzcy5lbnYgPSB7fTtcbnByb2Nlc3MuYXJndiA9IFtdO1xucHJvY2Vzcy52ZXJzaW9uID0gJyc7IC8vIGVtcHR5IHN0cmluZyB0byBhdm9pZCByZWdleHAgaXNzdWVzXG5wcm9jZXNzLnZlcnNpb25zID0ge307XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5wcm9jZXNzLm9uID0gbm9vcDtcbnByb2Nlc3MuYWRkTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5vbmNlID0gbm9vcDtcbnByb2Nlc3Mub2ZmID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVBbGxMaXN0ZW5lcnMgPSBub29wO1xucHJvY2Vzcy5lbWl0ID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZE9uY2VMaXN0ZW5lciA9IG5vb3A7XG5cbnByb2Nlc3MubGlzdGVuZXJzID0gZnVuY3Rpb24gKG5hbWUpIHsgcmV0dXJuIFtdIH1cblxucHJvY2Vzcy5iaW5kaW5nID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuYmluZGluZyBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xuXG5wcm9jZXNzLmN3ZCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICcvJyB9O1xucHJvY2Vzcy5jaGRpciA9IGZ1bmN0aW9uIChkaXIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuY2hkaXIgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcbnByb2Nlc3MudW1hc2sgPSBmdW5jdGlvbigpIHsgcmV0dXJuIDA7IH07XG4iLCJpbXBvcnQge0Rpc3BhdGNoZXJ9IGZyb20gXCIuLi9ldmVudHMvZGlzcGF0Y2hlclwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIENoYW5uZWwgZXh0ZW5kcyBEaXNwYXRjaGVyIHtcclxuICAgIGNvbnN0cnVjdG9yKG5hbWUsIHB1c2hlcikge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcblxyXG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICAgICAgdGhpcy5wdXNoZXIgPSBwdXNoZXI7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnB1c2hlci5zb2NrZXQuc3RhdGUgPT0gMSkge1xyXG4gICAgICAgICAgICB0aGlzLnN1YnNjcmliZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzdWJzY3JpYmUoKSB7XHJcbiAgICAgICAgdGhpcy5wdXNoZXIuc2VuZCh7XHJcbiAgICAgICAgICAgIGV2ZW50OiAnc3Vic2NyaWJlJyxcclxuICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgY2hhbm5lbDogdGhpcy5uYW1lXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxufSIsImltcG9ydCB7Q2hhbm5lbH0gZnJvbSBcIi4vY2hhbm5lbFwiO1xyXG5pbXBvcnQge1ByZXNlbmNlQ2hhbm5lbH0gZnJvbSBcIi4vcHJlc2VuY2VfY2hhbm5lbFwiO1xyXG5pbXBvcnQge1ByaXZhdGVDaGFubmVsfSBmcm9tIFwiLi9wcml2YXRlX2NoYW5uZWxcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBNYW5uYWdlciB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLmNoYW5uZWxzID0ge307XHJcbiAgICB9XHJcblxyXG4gICAgYWRkKG5hbWUsIHB1c2hlcikge1xyXG4gICAgICAgIGlmICghdGhpcy5jaGFubmVsc1tuYW1lXSkge1xyXG4gICAgICAgICAgICB0aGlzLmNoYW5uZWxzW25hbWVdID0gY3JlYXRlQ2hhbm5lbChuYW1lLCBwdXNoZXIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy5jaGFubmVsc1tuYW1lXTtcclxuICAgIH1cclxuXHJcbiAgICBhbGwoKSB7XHJcbiAgICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKHRoaXMuY2hhbm5lbHMpO1xyXG4gICAgfVxyXG5cclxuICAgIGZpbmQobmFtZSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNoYW5uZWxzW25hbWVdO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbW92ZShuYW1lKSB7XHJcbiAgICAgICAgbGV0IGNoYW5uZWwgPSB0aGlzLmNoYW5uZWxzW25hbWVdO1xyXG4gICAgICAgIGRlbGV0ZSB0aGlzLmNoYW5uZWxzW25hbWVdO1xyXG4gICAgICAgIHJldHVybiBjaGFubmVsO1xyXG4gICAgfVxyXG5cclxuICAgIHN1YnNjcmliZSgpIHtcclxuICAgICAgICBmb3IgKGxldCBpIGluIHRoaXMuY2hhbm5lbHMpIHtcclxuICAgICAgICAgICAgdGhpcy5jaGFubmVsc1tpXS5zdWJzY3JpYmUoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVDaGFubmVsKG5hbWUsIHB1c2hlcikge1xyXG4gICAgaWYgKG5hbWUuaW5kZXhPZigncHJpdmF0ZS0nKSA9PT0gMCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJpdmF0ZUNoYW5uZWwobmFtZSwgcHVzaGVyKTtcclxuICAgIH0gZWxzZSBpZiAobmFtZS5pbmRleE9mKCdwcmVzZW5jZS0nKSA9PT0gMCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJlc2VuY2VDaGFubmVsKG5hbWUsIHB1c2hlcik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiBuZXcgQ2hhbm5lbChuYW1lLCBwdXNoZXIpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHtEaXNwYXRjaGVyfSBmcm9tIFwiLi4vZXZlbnRzL2Rpc3BhdGNoZXJcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBQcmVzZW5jZUNoYW5uZWwgZXh0ZW5kcyBEaXNwYXRjaGVyIHtcclxuICAgIGNvbnN0cnVjdG9yKG5hbWUsIHB1c2hlcikge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcblxyXG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICAgICAgdGhpcy5wdXNoZXIgPSBwdXNoZXI7XHJcbiAgICAgICAgdGhpcy5hdXRoID0gbnVsbDtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMucHVzaGVyLnNvY2tldC5zdGF0ZSA9PSAxKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3Vic2NyaWJlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHN1YnNjcmliZSgpIHtcclxuICAgICAgICB0aGlzLnB1c2hlci5hdXRoKHRoaXMubmFtZSwgKGUpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5hdXRoID0gZS5kYXRhLmF1dGg7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnB1c2hlci5zZW5kKHtcclxuICAgICAgICAgICAgICAgIGV2ZW50OiAnc3Vic2NyaWJlJyxcclxuICAgICAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgICAgICBjaGFubmVsOiB0aGlzLm5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgYXV0aDogdGhpcy5hdXRoLFxyXG4gICAgICAgICAgICAgICAgICAgIGNoYW5uZWxfZGF0YTogZS5kYXRhLmNoYW5uZWxfZGF0YVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufSIsImltcG9ydCB7RGlzcGF0Y2hlcn0gZnJvbSBcIi4uL2V2ZW50cy9kaXNwYXRjaGVyXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgUHJpdmF0ZUNoYW5uZWwgZXh0ZW5kcyBEaXNwYXRjaGVyIHtcclxuICAgIGNvbnN0cnVjdG9yKG5hbWUsIHB1c2hlcikge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcblxyXG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICAgICAgdGhpcy5wdXNoZXIgPSBwdXNoZXI7XHJcbiAgICAgICAgdGhpcy5hdXRoID0gbnVsbDtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMucHVzaGVyLnNvY2tldC5zdGF0ZSA9PSAxKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3Vic2NyaWJlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHN1YnNjcmliZSgpIHtcclxuICAgICAgICB0aGlzLnB1c2hlci5hdXRoKHRoaXMubmFtZSwgKGUpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5hdXRoID0gZS5kYXRhLmF1dGg7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnB1c2hlci5zZW5kKHtcclxuICAgICAgICAgICAgICAgIGV2ZW50OiAnc3Vic2NyaWJlJyxcclxuICAgICAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgICAgICBjaGFubmVsOiB0aGlzLm5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgYXV0aDogdGhpcy5hdXRoXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHtEaXNwYXRjaGVyfSBmcm9tIFwiLi4vZXZlbnRzL2Rpc3BhdGNoZXJcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBTb2NrZXQgZXh0ZW5kcyBEaXNwYXRjaGVyIHtcclxuICAgIGNvbnN0cnVjdG9yKHB1c2hlciwgaG9zdCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcblxyXG4gICAgICAgIHRoaXMucHVzaGVyID0gcHVzaGVyO1xyXG4gICAgICAgIHRoaXMuc29ja2V0ID0gbmV3IFdlYlNvY2tldChob3N0ICsgJy8nICsgdGhpcy5wdXNoZXIua2V5KTtcclxuXHJcbiAgICAgICAgdGhpcy5iaW5kTGlzdGVuZXJzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgYmluZExpc3RlbmVycygpIHtcclxuICAgICAgICB0aGlzLnNvY2tldC5vbm9wZW4gPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMub25PcGVuKCk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLnNvY2tldC5vbmVycm9yID0gKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMub25FcnJvcihlcnJvcik7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLnNvY2tldC5vbmNsb3NlID0gKGNsb3NlRXZlbnQpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5vbkNsb3NlKGNsb3NlRXZlbnQpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5zb2NrZXQub25tZXNzYWdlID0gKG1lc3NhZ2UpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5vbk1lc3NhZ2UobWVzc2FnZSk7XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBvbk9wZW4oKSB7XHJcbiAgICAgICAgLy/liJ3lp4vnirbmgIFcclxuICAgICAgICB0aGlzLnN0YXRlID0gMDtcclxuXHJcbiAgICAgICAgdGhpcy5iaW5kKCdjb25uZWN0ZWQnLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnNvY2tldC5zb2NrZXRfaWQgPSBlLnNvY2tldF9pZDtcclxuICAgICAgICAgICAgdGhpcy5zdGF0ZSA9IDE7XHJcblxyXG4gICAgICAgICAgICAvL+iuoumYhVxyXG4gICAgICAgICAgICB0aGlzLnB1c2hlci5jaGFubmVscy5zdWJzY3JpYmUoKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5iaW5kKCdjb25uZWN0aW9uX2ZhaWxlZCcsIChlKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhdGUgPSAtMTtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihlLmVycm9yKVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvKnRoaXMuc2VuZCh7XHJcbiAgICAgICAgICAgIGV2ZW50OiAnYXV0aG9yaXphdGlvbidcclxuICAgICAgICB9KTsqL1xyXG4gICAgfVxyXG5cclxuICAgIG9uRXJyb3IoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKVxyXG4gICAgfVxyXG5cclxuICAgIG9uQ2xvc2UoY2xvc2VFdmVudCkge1xyXG4gICAgICAgIGlmICh0aGlzLnNvY2tldC5yZWFkeVN0YXRlID09IFdlYlNvY2tldC5DTE9TRUQpIHtcclxuICAgICAgICAgICAgaWYgKGNsb3NlRXZlbnQudHlwZSA9PSAnY2xvc2UnKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdzb2NrZXTmnI3liqHlt7Lmlq3lvIAhIScpXHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoY2xvc2VFdmVudC50eXBlID09ICdtZXNzYWdlJykge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihjbG9zZUV2ZW50LmRhdGEpXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCflt7Lmlq3lvIAhIScpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25NZXNzYWdlKG1lc3NhZ2UpIHtcclxuICAgICAgICBsZXQgZURhdGEgPSBKU09OLnBhcnNlKG1lc3NhZ2UuZGF0YSk7XHJcbiAgICAgICAgbGV0IGV2ZW50ID0gZURhdGEuZXZlbnQ7XHJcbiAgICAgICAgbGV0IGRhdGEgPSBlRGF0YS5kYXRhO1xyXG5cclxuICAgICAgICBpZiAoZURhdGEuY2hhbm5lbCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMucHVzaGVyLmNoYW5uZWxzLmZpbmQoZURhdGEuY2hhbm5lbCkuZW1pdChldmVudCwgZGF0YSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5lbWl0KGV2ZW50LCBkYXRhKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHNlbmQoanNvbikge1xyXG4gICAgICAgIGlmICh0aGlzLnN0YXRlICE9PSAtMSkge1xyXG4gICAgICAgICAgICB0aGlzLnNvY2tldC5zZW5kKEpTT04uc3RyaW5naWZ5KGpzb24pKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsImV4cG9ydCBjbGFzcyBDYWxsYmFja1JlZ2lzdHJ5IHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuX2NhbGxiYWNrcyA9IHt9O1xyXG4gICAgfVxyXG5cclxuICAgIGdldChuYW1lKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NhbGxiYWNrc1twcmVmaXgobmFtZSldO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZChuYW1lLCBjYWxsYmFjaywgY29udGV4dCkge1xyXG4gICAgICAgIGxldCBwcmVmaXhlZEV2ZW50TmFtZSA9IHByZWZpeChuYW1lKTtcclxuICAgICAgICB0aGlzLl9jYWxsYmFja3NbcHJlZml4ZWRFdmVudE5hbWVdID0gdGhpcy5fY2FsbGJhY2tzW3ByZWZpeGVkRXZlbnROYW1lXSB8fCBbXTtcclxuICAgICAgICB0aGlzLl9jYWxsYmFja3NbcHJlZml4ZWRFdmVudE5hbWVdLnB1c2goe1xyXG4gICAgICAgICAgICBmbjogY2FsbGJhY2ssXHJcbiAgICAgICAgICAgIGNvbnRleHQ6IGNvbnRleHRcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICByZW1vdmUobmFtZSwgY2FsbGJhY2ssIGNvbnRleHQpIHtcclxuICAgICAgICBpZiAoIW5hbWUgJiYgIWNhbGxiYWNrICYmICFjb250ZXh0KSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2NhbGxiYWNrcyA9IHt9O1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2YXIgbmFtZXMgPSBuYW1lID8gW3ByZWZpeChuYW1lKV0gOiBPYmplY3Qua2V5cyh0aGlzLl9jYWxsYmFja3MpO1xyXG5cclxuICAgICAgICBpZiAoY2FsbGJhY2sgfHwgY29udGV4dCkge1xyXG4gICAgICAgICAgICB0aGlzLnJlbW92ZUNhbGxiYWNrKG5hbWVzLCBjYWxsYmFjaywgY29udGV4dCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5yZW1vdmVBbGxDYWxsYmFja3MobmFtZXMpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZW1vdmVDYWxsYmFjayhuYW1lcywgY2FsbGJhY2ssIGNvbnRleHQpIHtcclxuICAgICAgICBmb3IgKGxldCBuYW1lIGluIG5hbWVzKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGtleSBpbiB0aGlzLl9jYWxsYmFja3NbbmFtZV0pIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9jYWxsYmFja3NbbmFtZV1ba2V5XS5mbiA9PSBjYWxsYmFjayB8fCB0aGlzLl9jYWxsYmFja3NbbmFtZV1ba2V5XS5jb250ZXh0ID09IGNvbnRleHQpIHtcclxuICAgICAgICAgICAgICAgICAgICBkZWxldGUgdGhpcy5fY2FsbGJhY2tzW25hbWVdW2tleV07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9jYWxsYmFja3NbbmFtZV0ubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICBkZWxldGUgdGhpcy5fY2FsbGJhY2tzW25hbWVdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJlbW92ZUFsbENhbGxiYWNrcyhuYW1lcykge1xyXG4gICAgICAgIGZvciAobGV0IG5hbWUgaW4gbmFtZXMpIHtcclxuICAgICAgICAgICAgZGVsZXRlIHRoaXMuX2NhbGxiYWNrc1tuYW1lXTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHByZWZpeChuYW1lKSB7XHJcbiAgICByZXR1cm4gXCJfXCIgKyBuYW1lO1xyXG59IiwiaW1wb3J0IHtDYWxsYmFja1JlZ2lzdHJ5fSBmcm9tICcuL2NhbGxiYWNrX3JlZ2lzdHJ5JztcclxuXHJcbmV4cG9ydCBjbGFzcyBEaXNwYXRjaGVyIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuY2FsbGJhY2tzID0gbmV3IENhbGxiYWNrUmVnaXN0cnkoKTtcclxuICAgICAgICB0aGlzLmdsb2JhbF9jYWxsYmFja3MgPSBbXTtcclxuICAgIH1cclxuXHJcbiAgICBiaW5kKGV2ZW50TmFtZSwgY2FsbGJhY2ssIGNvbnRleHQpIHtcclxuICAgICAgICB0aGlzLmNhbGxiYWNrcy5hZGQoZXZlbnROYW1lLCBjYWxsYmFjaywgY29udGV4dCk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgYmluZF9nbG9iYWwoY2FsbGJhY2spIHtcclxuICAgICAgICB0aGlzLmdsb2JhbF9jYWxsYmFja3MucHVzaChjYWxsYmFjayk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgdW5iaW5kKGV2ZW50TmFtZSwgY2FsbGJhY2ssIGNvbnRleHQpIHtcclxuICAgICAgICB0aGlzLmNhbGxiYWNrcy5yZW1vdmUoZXZlbnROYW1lLCBjYWxsYmFjaywgY29udGV4dCk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgdW5iaW5kX2dsb2JhbChjYWxsYmFjaykge1xyXG4gICAgICAgIGlmICghY2FsbGJhY2spIHtcclxuICAgICAgICAgICAgdGhpcy5nbG9iYWxfY2FsbGJhY2tzID0gW107XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSBpbiB0aGlzLmdsb2JhbF9jYWxsYmFja3MpIHtcclxuICAgICAgICAgICAgaWYgKGNhbGxiYWNrID09IHRoaXMuZ2xvYmFsX2NhbGxiYWNrc1tpXSkge1xyXG4gICAgICAgICAgICAgICAgZGVsZXRlIHRoaXMuZ2xvYmFsX2NhbGxiYWNrc1tpXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICB1bmJpbmRfYWxsKCkge1xyXG4gICAgICAgIHRoaXMudW5iaW5kKCk7XHJcbiAgICAgICAgdGhpcy51bmJpbmRfZ2xvYmFsKCk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgZW1pdChldmVudE5hbWUsIGRhdGEpIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuZ2xvYmFsX2NhbGxiYWNrcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICB0aGlzLmdsb2JhbF9jYWxsYmFja3NbaV0oZXZlbnROYW1lLCBkYXRhKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciBjYWxsYmFja3MgPSB0aGlzLmNhbGxiYWNrcy5nZXQoZXZlbnROYW1lKTtcclxuICAgICAgICBpZiAoY2FsbGJhY2tzICYmIGNhbGxiYWNrcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2FsbGJhY2tzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBjYWxsYmFja3NbaV0uZm4uY2FsbChjYWxsYmFja3NbaV0uY29udGV4dCwgZGF0YSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHtTb2NrZXR9IGZyb20gJy4vY29ubmVjdGlvbi9zb2NrZXQnO1xyXG5pbXBvcnQge0Rpc3BhdGNoZXJ9IGZyb20gJy4vZXZlbnRzL2Rpc3BhdGNoZXInO1xyXG5pbXBvcnQge01hbm5hZ2VyfSBmcm9tIFwiLi9jaGFubmVscy9tYW5uYWdlclwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgUHVzaGVyIHtcclxuICAgIGNvbnN0cnVjdG9yKGFwcF9rZXksIG9wdGlvbnMpIHtcclxuICAgICAgICB0aGlzLmNoZWNrQXBwS2V5KGFwcF9rZXkpO1xyXG5cclxuICAgICAgICB0aGlzLmtleSA9IGFwcF9rZXk7XHJcbiAgICAgICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcclxuICAgICAgICB0aGlzLmRpc3BhdGNoZXIgPSBuZXcgRGlzcGF0Y2hlcigpO1xyXG4gICAgICAgIHRoaXMuY2hhbm5lbHMgPSBuZXcgTWFubmFnZXIoKTtcclxuXHJcbiAgICAgICAgdGhpcy5jb25uZWN0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29ubmVjdCgpIHtcclxuICAgICAgICB0aGlzLnNvY2tldCA9IG5ldyBTb2NrZXQodGhpcywgdGhpcy5vcHRpb25zLmhvc3QpO1xyXG4gICAgfVxyXG5cclxuICAgIHN1YnNjcmliZShjaGFubmVsX25hbWUpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jaGFubmVscy5hZGQoY2hhbm5lbF9uYW1lLCB0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICB1bnN1YnNjcmliZShjaGFubmVsX25hbWUpIHtcclxuICAgICAgICB0aGlzLmNoYW5uZWxzLnJlbW92ZShjaGFubmVsX25hbWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFNvY2tldElkKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnNvY2tldC5zb2NrZXQuc29ja2V0X2lkO1xyXG4gICAgfVxyXG5cclxuICAgIHNlbmQoanNvbikge1xyXG4gICAgICAgIHRoaXMuc29ja2V0LnNlbmQoanNvbik7XHJcbiAgICB9XHJcblxyXG4gICAgY2hlY2tBcHBLZXkoa2V5KSB7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgYXV0aChuYW1lLCBjYWxsYmFjaykge1xyXG4gICAgICAgIGxldCBtZXRob2QgPSB0aGlzLm9wdGlvbnMuYXV0aC5tZXRob2QgfHwgJ3Bvc3QnO1xyXG4gICAgICAgIGxldCBkYXRhID0ge307XHJcbiAgICAgICAgbGV0IHBhcmFtcyA9IHt9O1xyXG5cclxuICAgICAgICBpZiAobWV0aG9kID09ICdwb3N0Jykge1xyXG4gICAgICAgICAgICBkYXRhID0gT2JqZWN0LmFzc2lnbih7XHJcbiAgICAgICAgICAgICAgICBjaGFubmVsX25hbWU6IG5hbWUsXHJcbiAgICAgICAgICAgICAgICBzb2NrZXRfaWQ6IHRoaXMuZ2V0U29ja2V0SWQoKVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBwYXJhbXMgPSBPYmplY3QuYXNzaWduKHtcclxuICAgICAgICAgICAgICAgIGNoYW5uZWxfbmFtZTogbmFtZSxcclxuICAgICAgICAgICAgICAgIHNvY2tldF9pZDogdGhpcy5nZXRTb2NrZXRJZCgpXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgYXhpb3Moe1xyXG4gICAgICAgICAgICB1cmw6IHRoaXMub3B0aW9ucy5hdXRoLnVybCxcclxuICAgICAgICAgICAgbWV0aG9kOiBtZXRob2QsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHRoaXMub3B0aW9ucy5hdXRoLmhlYWRlcnMgfHwge30sXHJcbiAgICAgICAgICAgIHBhcmFtczogcGFyYW1zLFxyXG4gICAgICAgICAgICBkYXRhOiBkYXRhXHJcbiAgICAgICAgfSkudGhlbigoZSkgPT4ge1xyXG4gICAgICAgICAgICBjYWxsYmFjayhlKVxyXG4gICAgICAgIH0pLmNhdGNoKChlKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ+engeaciemikemBk+adg+mZkOS4jei2syEnKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxud2luZG93LlB1c2hlciA9IFB1c2hlcjsiXSwic291cmNlUm9vdCI6IiJ9

/***/ }),

/***/ "./node_modules/luffy-pusher/src/channels/channel.js":
/*!***********************************************************!*\
  !*** ./node_modules/luffy-pusher/src/channels/channel.js ***!
  \***********************************************************/
/*! exports provided: Channel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Channel", function() { return Channel; });
/* harmony import */ var _events_dispatcher__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../events/dispatcher */ "./node_modules/luffy-pusher/src/events/dispatcher.js");


class Channel extends _events_dispatcher__WEBPACK_IMPORTED_MODULE_0__["Dispatcher"] {
    constructor(name, pusher) {
        super();

        this.name = name;
        this.pusher = pusher;

        if (this.pusher.socket.state == 1) {
            this.subscribe();
        }
    }

    subscribe() {
        this.pusher.send({
            event: 'subscribe',
            data: {
                channel: this.name
            }
        });
    }
}

/***/ }),

/***/ "./node_modules/luffy-pusher/src/channels/presence_channel.js":
/*!********************************************************************!*\
  !*** ./node_modules/luffy-pusher/src/channels/presence_channel.js ***!
  \********************************************************************/
/*! exports provided: PresenceChannel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PresenceChannel", function() { return PresenceChannel; });
/* harmony import */ var _events_dispatcher__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../events/dispatcher */ "./node_modules/luffy-pusher/src/events/dispatcher.js");


class PresenceChannel extends _events_dispatcher__WEBPACK_IMPORTED_MODULE_0__["Dispatcher"] {
    constructor(name, pusher) {
        super();

        this.name = name;
        this.pusher = pusher;
        this.auth = null;

        if (this.pusher.socket.state == 1) {
            this.subscribe();
        }
    }

    subscribe() {
        this.pusher.auth(this.name, (e) => {
            this.auth = e.data.auth;

            this.pusher.send({
                event: 'subscribe',
                data: {
                    channel: this.name,
                    auth: this.auth,
                    channel_data: e.data.channel_data
                }
            });
        });
    }
}

/***/ }),

/***/ "./node_modules/luffy-pusher/src/channels/private_channel.js":
/*!*******************************************************************!*\
  !*** ./node_modules/luffy-pusher/src/channels/private_channel.js ***!
  \*******************************************************************/
/*! exports provided: PrivateChannel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrivateChannel", function() { return PrivateChannel; });
/* harmony import */ var _events_dispatcher__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../events/dispatcher */ "./node_modules/luffy-pusher/src/events/dispatcher.js");


class PrivateChannel extends _events_dispatcher__WEBPACK_IMPORTED_MODULE_0__["Dispatcher"] {
    constructor(name, pusher) {
        super();

        this.name = name;
        this.pusher = pusher;
        this.auth = null;

        if (this.pusher.socket.state == 1) {
            this.subscribe();
        }
    }

    subscribe() {
        this.pusher.auth(this.name, (e) => {
            this.auth = e.data.auth;

            this.pusher.send({
                event: 'subscribe',
                data: {
                    channel: this.name,
                    auth: this.auth
                }
            });
        });
    }
}

/***/ }),

/***/ "./node_modules/luffy-pusher/src/events/callback_registry.js":
/*!*******************************************************************!*\
  !*** ./node_modules/luffy-pusher/src/events/callback_registry.js ***!
  \*******************************************************************/
/*! exports provided: CallbackRegistry */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CallbackRegistry", function() { return CallbackRegistry; });
class CallbackRegistry {
    constructor() {
        this._callbacks = {};
    }

    get(name) {
        return this._callbacks[prefix(name)];
    }

    add(name, callback, context) {
        let prefixedEventName = prefix(name);
        this._callbacks[prefixedEventName] = this._callbacks[prefixedEventName] || [];
        this._callbacks[prefixedEventName].push({
            fn: callback,
            context: context
        });
    }

    remove(name, callback, context) {
        if (!name && !callback && !context) {
            this._callbacks = {};
            return;
        }

        var names = name ? [prefix(name)] : Object.keys(this._callbacks);

        if (callback || context) {
            this.removeCallback(names, callback, context);
        } else {
            this.removeAllCallbacks(names);
        }
    }

    removeCallback(names, callback, context) {
        for (let name in names) {
            for (let key in this._callbacks[name]) {
                if (this._callbacks[name][key].fn == callback || this._callbacks[name][key].context == context) {
                    delete this._callbacks[name][key];
                }
            }

            if (this._callbacks[name].length === 0) {
                delete this._callbacks[name];
            }
        }
    }

    removeAllCallbacks(names) {
        for (let name in names) {
            delete this._callbacks[name];
        }
    }
}

function prefix(name) {
    return "_" + name;
}

/***/ }),

/***/ "./node_modules/luffy-pusher/src/events/dispatcher.js":
/*!************************************************************!*\
  !*** ./node_modules/luffy-pusher/src/events/dispatcher.js ***!
  \************************************************************/
/*! exports provided: Dispatcher */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Dispatcher", function() { return Dispatcher; });
/* harmony import */ var _callback_registry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./callback_registry */ "./node_modules/luffy-pusher/src/events/callback_registry.js");


class Dispatcher {
    constructor() {
        this.callbacks = new _callback_registry__WEBPACK_IMPORTED_MODULE_0__["CallbackRegistry"]();
        this.global_callbacks = [];
    }

    bind(eventName, callback, context) {
        this.callbacks.add(eventName, callback, context);
        return this;
    }

    bind_global(callback) {
        this.global_callbacks.push(callback);
        return this;
    }

    unbind(eventName, callback, context) {
        this.callbacks.remove(eventName, callback, context);
        return this;
    }

    unbind_global(callback) {
        if (!callback) {
            this.global_callbacks = [];
            return this;
        }

        for (let i in this.global_callbacks) {
            if (callback == this.global_callbacks[i]) {
                delete this.global_callbacks[i];
            }
        }
        return this;
    }

    unbind_all() {
        this.unbind();
        this.unbind_global();
        return this;
    }

    emit(eventName, data) {
        for (let i = 0; i < this.global_callbacks.length; i++) {
            this.global_callbacks[i](eventName, data);
        }

        var callbacks = this.callbacks.get(eventName);
        if (callbacks && callbacks.length > 0) {
            for (let i = 0; i < callbacks.length; i++) {
                callbacks[i].fn.call(callbacks[i].context, data);
            }
        }

        return this;
    }
}

/***/ }),

/***/ "./src/app_b_user_1.js":
/*!*****************************!*\
  !*** ./src/app_b_user_1.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _echo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./echo */ "./src/echo.js");

window.Echo = new _echo__WEBPACK_IMPORTED_MODULE_0__["Echo"]('b82393d886a0e6ddfae5', {
  host: 'ws://192.168.10.10:8081',
  auth: {
    method: 'post',
    url: 'http://tests.test/api/pusher/auth',
    headers: {
      'Accept': 'application/json',
      'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC90ZXN0cy50ZXN0IiwiaWF0IjoxNTM5MjU0MjczLCJleHAiOjE1MzkyNTc4NzMsIm5iZiI6MTUzOTI1NDI3MywianRpIjoiS2lvUWZYd2hLc0M4RTdEZCIsInN1YiI6MiwicHJ2IjoiODdlMGFmMWVmOWZkMTU4MTJmZGVjOTcxNTNhMTRlMGIwNDc1NDZhYSJ9.Jw11aEPqe8KOcBhKw2f7jCaOtF0tdQBN_TPO7pb1dEo'
    },
    params: {}
  }
});
/*window.Echo.channel('order').listen('new', (e) => {
    console.log(e)
}).listen('make', (e) => {
});*/

window.Echo.private('user.1').listen('a', function (e) {
  alert('aaa');
}).listen('b', function (e) {
  alert('bbb');
});
window.Echo.join("chat.1").here(function (users) {
  console.log('全部人员');
  console.log(users);
}).joining(function (user) {
  console.log('新人加入');
  console.log(user);
}).leaving(function (user) {
  console.log('有人退出');
  console.log(user);
}).listen('NewMessage', function (e) {
  console.log(e);
});

/***/ }),

/***/ "./src/channel/channel.js":
/*!********************************!*\
  !*** ./src/channel/channel.js ***!
  \********************************/
/*! exports provided: Channel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Channel", function() { return Channel; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Channel =
/*#__PURE__*/
function () {
  function Channel(pusher, name) {
    _classCallCheck(this, Channel);

    this.pusher = pusher;
    this.name = name;
    this.subscribe();
  }

  _createClass(Channel, [{
    key: "subscribe",
    value: function subscribe() {
      this.subscription = this.pusher.subscribe(this.name);
    }
  }, {
    key: "unsubscribe",
    value: function unsubscribe() {
      this.pusher.unsubscribe(this.name);
    }
  }, {
    key: "listen",
    value: function listen(event, callback) {
      this.on(event, callback);
      return this;
    }
  }, {
    key: "stopListening",
    value: function stopListening(event) {
      this.subscription.unbind(event);
      return this;
    }
  }, {
    key: "on",
    value: function on(event, callback) {
      this.subscription.bind(event, callback);
      return this;
    }
  }, {
    key: "whisper",
    value: function whisper(event, data) {
      this.pusher.send({
        channel: this.name,
        data: data,
        event: 'client-' + event
      });
      return this;
    }
  }, {
    key: "listenForWhisper",
    value: function listenForWhisper(event, callback) {
      this.on('client-' + event, callback);
      return this;
    }
  }]);

  return Channel;
}();

/***/ }),

/***/ "./src/channel/pusher-channel.js":
/*!***************************************!*\
  !*** ./src/channel/pusher-channel.js ***!
  \***************************************/
/*! exports provided: PusherChannel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PusherChannel", function() { return PusherChannel; });
/* harmony import */ var _channel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./channel */ "./src/channel/channel.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }


var PusherChannel =
/*#__PURE__*/
function (_Channel) {
  _inherits(PusherChannel, _Channel);

  /**
   * @param pusher
   * @param channel
   */
  function PusherChannel(pusher, name) {
    _classCallCheck(this, PusherChannel);

    return _possibleConstructorReturn(this, _getPrototypeOf(PusherChannel).call(this, pusher, name));
  }

  return PusherChannel;
}(_channel__WEBPACK_IMPORTED_MODULE_0__["Channel"]);

/***/ }),

/***/ "./src/channel/pusher-presence-channel.js":
/*!************************************************!*\
  !*** ./src/channel/pusher-presence-channel.js ***!
  \************************************************/
/*! exports provided: PusherPresenceChannel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PusherPresenceChannel", function() { return PusherPresenceChannel; });
/* harmony import */ var _channel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./channel */ "./src/channel/channel.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }


var PusherPresenceChannel =
/*#__PURE__*/
function (_Channel) {
  _inherits(PusherPresenceChannel, _Channel);

  /**
   * @param pusher
   * @param channel
   */
  function PusherPresenceChannel(pusher, name) {
    _classCallCheck(this, PusherPresenceChannel);

    return _possibleConstructorReturn(this, _getPrototypeOf(PusherPresenceChannel).call(this, pusher, name));
  }

  _createClass(PusherPresenceChannel, [{
    key: "here",
    value: function here(callback) {
      var back = function back(e) {
        callback(e.presence);
      };

      this.on('subscription_succeeded', back);
      return this;
    }
  }, {
    key: "joining",
    value: function joining(callback) {
      this.on('member_added', callback);
      return this;
    }
  }, {
    key: "leaving",
    value: function leaving(callback) {
      this.on('member_removed', callback);
      return this;
    }
  }]);

  return PusherPresenceChannel;
}(_channel__WEBPACK_IMPORTED_MODULE_0__["Channel"]);

/***/ }),

/***/ "./src/channel/pusher-private-channel.js":
/*!***********************************************!*\
  !*** ./src/channel/pusher-private-channel.js ***!
  \***********************************************/
/*! exports provided: PusherPrivateChannel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PusherPrivateChannel", function() { return PusherPrivateChannel; });
/* harmony import */ var _channel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./channel */ "./src/channel/channel.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }


var PusherPrivateChannel =
/*#__PURE__*/
function (_Channel) {
  _inherits(PusherPrivateChannel, _Channel);

  /**
   * @param pusher
   * @param channel
   */
  function PusherPrivateChannel(pusher, name) {
    _classCallCheck(this, PusherPrivateChannel);

    return _possibleConstructorReturn(this, _getPrototypeOf(PusherPrivateChannel).call(this, pusher, name));
  }

  return PusherPrivateChannel;
}(_channel__WEBPACK_IMPORTED_MODULE_0__["Channel"]);

/***/ }),

/***/ "./src/connector/pusher_connector.js":
/*!*******************************************!*\
  !*** ./src/connector/pusher_connector.js ***!
  \*******************************************/
/*! exports provided: PusherConnector */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PusherConnector", function() { return PusherConnector; });
/* harmony import */ var luffy_pusher__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! luffy-pusher */ "./node_modules/luffy-pusher/dist/pusher.js");
/* harmony import */ var luffy_pusher__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(luffy_pusher__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _channel_pusher_channel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../channel/pusher-channel */ "./src/channel/pusher-channel.js");
/* harmony import */ var _channel_pusher_private_channel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../channel/pusher-private-channel */ "./src/channel/pusher-private-channel.js");
/* harmony import */ var _channel_pusher_presence_channel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../channel/pusher-presence-channel */ "./src/channel/pusher-presence-channel.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }





var PusherConnector =
/*#__PURE__*/
function () {
  function PusherConnector(app_key, options) {
    _classCallCheck(this, PusherConnector);

    this.pusher = new Pusher(app_key, options);
    this.channels = {};
  }

  _createClass(PusherConnector, [{
    key: "channel",
    value: function channel(_channel) {
      if (this.channels[_channel] === undefined) {
        this.channels[_channel] = new _channel_pusher_channel__WEBPACK_IMPORTED_MODULE_1__["PusherChannel"](this.pusher, _channel);
      }

      return this.channels[_channel];
    }
  }, {
    key: "privateChannel",
    value: function privateChannel(channel) {
      if (this.channels['private-' + channel] === undefined) {
        this.channels['private-' + channel] = new _channel_pusher_private_channel__WEBPACK_IMPORTED_MODULE_2__["PusherPrivateChannel"](this.pusher, 'private-' + channel);
      }

      return this.channels['private-' + channel];
    }
  }, {
    key: "presenceChannel",
    value: function presenceChannel(channel) {
      if (this.channels['presence-' + channel] === undefined) {
        this.channels['presence-' + channel] = new _channel_pusher_presence_channel__WEBPACK_IMPORTED_MODULE_3__["PusherPresenceChannel"](this.pusher, 'presence-' + channel);
      }

      return this.channels['presence-' + channel];
    }
  }]);

  return PusherConnector;
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
/* harmony import */ var _connector_pusher_connector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./connector/pusher_connector */ "./src/connector/pusher_connector.js");
/* harmony import */ var luffy_pusher_src_channels_private_channel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! luffy-pusher/src/channels/private_channel */ "./node_modules/luffy-pusher/src/channels/private_channel.js");
/* harmony import */ var luffy_pusher_src_channels_presence_channel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! luffy-pusher/src/channels/presence_channel */ "./node_modules/luffy-pusher/src/channels/presence_channel.js");
/* harmony import */ var luffy_pusher_src_channels_channel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! luffy-pusher/src/channels/channel */ "./node_modules/luffy-pusher/src/channels/channel.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }





var Echo =
/*#__PURE__*/
function () {
  function Echo(appkey, options) {
    _classCallCheck(this, Echo);

    this.options = options;
    this.connector = new _connector_pusher_connector__WEBPACK_IMPORTED_MODULE_0__["PusherConnector"](appkey, this.options);
  }

  _createClass(Echo, [{
    key: "channel",
    value: function channel(_channel) {
      return this.connector.channel(_channel);
    }
  }, {
    key: "private",
    value: function _private(channel) {
      return this.connector.privateChannel(channel);
    }
  }, {
    key: "join",
    value: function join(channel) {
      return this.connector.presenceChannel(channel);
    }
  }, {
    key: "subscribe",
    value: function subscribe(name) {
      if (name.indexOf('private-') === 0) {
        return this.private(name);
      } else if (name.indexOf('presence-') === 0) {
        return this.join(name);
      } else {
        return this.channel(name);
      }
    }
    /**
     * 退出频道,暂留
     * @param channel
     */

  }, {
    key: "leave",
    value: function leave(channel) {}
  }]);

  return Echo;
}();
window.Echo = Echo;

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2x1ZmZ5LXB1c2hlci9kaXN0L3B1c2hlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbHVmZnktcHVzaGVyL3NyYy9jaGFubmVscy9jaGFubmVsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sdWZmeS1wdXNoZXIvc3JjL2NoYW5uZWxzL3ByZXNlbmNlX2NoYW5uZWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2x1ZmZ5LXB1c2hlci9zcmMvY2hhbm5lbHMvcHJpdmF0ZV9jaGFubmVsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sdWZmeS1wdXNoZXIvc3JjL2V2ZW50cy9jYWxsYmFja19yZWdpc3RyeS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbHVmZnktcHVzaGVyL3NyYy9ldmVudHMvZGlzcGF0Y2hlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwX2JfdXNlcl8xLmpzIiwid2VicGFjazovLy8uL3NyYy9jaGFubmVsL2NoYW5uZWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NoYW5uZWwvcHVzaGVyLWNoYW5uZWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NoYW5uZWwvcHVzaGVyLXByZXNlbmNlLWNoYW5uZWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NoYW5uZWwvcHVzaGVyLXByaXZhdGUtY2hhbm5lbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29ubmVjdG9yL3B1c2hlcl9jb25uZWN0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VjaG8uanMiXSwibmFtZXMiOlsid2luZG93IiwiRWNobyIsImhvc3QiLCJhdXRoIiwibWV0aG9kIiwidXJsIiwiaGVhZGVycyIsInBhcmFtcyIsInByaXZhdGUiLCJsaXN0ZW4iLCJlIiwiYWxlcnQiLCJqb2luIiwiaGVyZSIsInVzZXJzIiwiY29uc29sZSIsImxvZyIsImpvaW5pbmciLCJ1c2VyIiwibGVhdmluZyIsIkNoYW5uZWwiLCJwdXNoZXIiLCJuYW1lIiwic3Vic2NyaWJlIiwic3Vic2NyaXB0aW9uIiwidW5zdWJzY3JpYmUiLCJldmVudCIsImNhbGxiYWNrIiwib24iLCJ1bmJpbmQiLCJiaW5kIiwiZGF0YSIsInNlbmQiLCJjaGFubmVsIiwiUHVzaGVyQ2hhbm5lbCIsIlB1c2hlclByZXNlbmNlQ2hhbm5lbCIsImJhY2siLCJwcmVzZW5jZSIsIlB1c2hlclByaXZhdGVDaGFubmVsIiwiUHVzaGVyQ29ubmVjdG9yIiwiYXBwX2tleSIsIm9wdGlvbnMiLCJQdXNoZXIiLCJjaGFubmVscyIsInVuZGVmaW5lZCIsImFwcGtleSIsImNvbm5lY3RvciIsInByaXZhdGVDaGFubmVsIiwicHJlc2VuY2VDaGFubmVsIiwiaW5kZXhPZiJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDbEZBLDZCQUE2QjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtEQUFrRCxnQ0FBZ0M7QUFDbEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0VBQWdFLGtCQUFrQjtBQUNsRjtBQUNBLHlEQUF5RCxjQUFjO0FBQ3ZFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQWlELGlDQUFpQztBQUNsRix3SEFBd0gsbUJBQW1CLEVBQUU7QUFDN0k7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DLDBCQUEwQixFQUFFO0FBQy9ELHlDQUF5QyxlQUFlO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4REFBOEQsK0RBQStEO0FBQzdIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDRDQUE0QztBQUM1Qzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIOzs7QUFHQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFlBQVksTUFBTTtBQUNsQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOzs7QUFHQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFFBQVE7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOzs7QUFHQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFNBQVM7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7QUFHQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBOzs7QUFHQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBLGtDQUFrQyxjQUFjO0FBQ2hEOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdEQUFnRDtBQUNoRDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQSxnREFBZ0Q7QUFDaEQ7QUFD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QUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLGFBQWE7QUFDeEIsV0FBVyxTQUFTO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxtQ0FBbUMsT0FBTztBQUMxQztBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsU0FBUyxHQUFHLFNBQVM7QUFDNUMsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsYUFBYSxPQUFPO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUEsdUNBQXVDLE9BQU87QUFDOUM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsWUFBWSxPQUFPO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNB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LE9BQUwsQ0FBYSxXQUFiLE1BQThCLENBQWxDLEVBQXFDO0FBQ3hDLGVBQU8sS0FBS3JDLElBQUwsQ0FBVVUsSUFBVixDQUFQO0FBQ0gsT0FGTSxNQUVBO0FBQ0gsZUFBTyxLQUFLVyxPQUFMLENBQWFYLElBQWIsQ0FBUDtBQUNIO0FBQ0o7QUFFRDs7Ozs7QUE1Qko7QUFBQTtBQUFBLDBCQWdDVVcsT0FoQ1YsRUFnQ21CLENBRWQ7QUFsQ0w7O0FBQUE7QUFBQTtBQXFDQWpDLE1BQU0sQ0FBQ0MsSUFBUCxHQUFjQSxJQUFkLEMiLCJmaWxlIjoiYXBwX2JfdXNlcl8xLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvYXBwX2JfdXNlcl8xLmpzXCIpO1xuIiwiLyoqKioqKi8gKGZ1bmN0aW9uKG1vZHVsZXMpIHsgLy8gd2VicGFja0Jvb3RzdHJhcFxuLyoqKioqKi8gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4vKioqKioqLyBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuLyoqKioqKi8gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuLyoqKioqKi8gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4vKioqKioqLyBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbi8qKioqKiovIFx0XHR9XG4vKioqKioqLyBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbi8qKioqKiovIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4vKioqKioqLyBcdFx0XHRpOiBtb2R1bGVJZCxcbi8qKioqKiovIFx0XHRcdGw6IGZhbHNlLFxuLyoqKioqKi8gXHRcdFx0ZXhwb3J0czoge31cbi8qKioqKiovIFx0XHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbi8qKioqKiovIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuLyoqKioqKi8gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbi8qKioqKiovIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4vKioqKioqLyBcdH1cbi8qKioqKiovXG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbi8qKioqKiovIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4vKioqKioqLyBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbi8qKioqKiovIFx0XHR9XG4vKioqKioqLyBcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbi8qKioqKiovIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbi8qKioqKiovIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuLyoqKioqKi8gXHRcdH1cbi8qKioqKiovIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuLyoqKioqKi8gXHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4vKioqKioqLyBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuLyoqKioqKi8gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbi8qKioqKiovIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4vKioqKioqLyBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbi8qKioqKiovIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbi8qKioqKiovIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuLyoqKioqKi8gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4vKioqKioqLyBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbi8qKioqKiovIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuLyoqKioqKi8gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbi8qKioqKiovIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4vKioqKioqLyBcdFx0cmV0dXJuIG5zO1xuLyoqKioqKi8gXHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4vKioqKioqLyBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4vKioqKioqLyBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuLyoqKioqKi8gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbi8qKioqKiovIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4vKioqKioqLyBcdFx0cmV0dXJuIGdldHRlcjtcbi8qKioqKiovIFx0fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuLyoqKioqKi9cbi8qKioqKiovXG4vKioqKioqLyBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLyoqKioqKi8gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL3B1c2hlci5qc1wiKTtcbi8qKioqKiovIH0pXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKi8gKHtcblxuLyoqKi8gXCIuL25vZGVfbW9kdWxlcy9heGlvcy9pbmRleC5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL25vZGVfbW9kdWxlcy9heGlvcy9pbmRleC5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5tb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vbGliL2F4aW9zICovIFwiLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2F4aW9zLmpzXCIpO1xuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvYWRhcHRlcnMveGhyLmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2FkYXB0ZXJzL3hoci5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5cbnZhciB1dGlscyA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vLi4vdXRpbHMgKi8gXCIuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvdXRpbHMuanNcIik7XG52YXIgc2V0dGxlID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi8uLi9jb3JlL3NldHRsZSAqLyBcIi4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL3NldHRsZS5qc1wiKTtcbnZhciBidWlsZFVSTCA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vLi4vaGVscGVycy9idWlsZFVSTCAqLyBcIi4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2J1aWxkVVJMLmpzXCIpO1xudmFyIHBhcnNlSGVhZGVycyA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vLi4vaGVscGVycy9wYXJzZUhlYWRlcnMgKi8gXCIuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9wYXJzZUhlYWRlcnMuanNcIik7XG52YXIgaXNVUkxTYW1lT3JpZ2luID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi8uLi9oZWxwZXJzL2lzVVJMU2FtZU9yaWdpbiAqLyBcIi4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2lzVVJMU2FtZU9yaWdpbi5qc1wiKTtcbnZhciBjcmVhdGVFcnJvciA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4uL2NvcmUvY3JlYXRlRXJyb3IgKi8gXCIuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9jcmVhdGVFcnJvci5qc1wiKTtcbnZhciBidG9hID0gKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5idG9hICYmIHdpbmRvdy5idG9hLmJpbmQod2luZG93KSkgfHwgX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi8uLi9oZWxwZXJzL2J0b2EgKi8gXCIuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9idG9hLmpzXCIpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHhockFkYXB0ZXIoY29uZmlnKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiBkaXNwYXRjaFhoclJlcXVlc3QocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgdmFyIHJlcXVlc3REYXRhID0gY29uZmlnLmRhdGE7XG4gICAgdmFyIHJlcXVlc3RIZWFkZXJzID0gY29uZmlnLmhlYWRlcnM7XG5cbiAgICBpZiAodXRpbHMuaXNGb3JtRGF0YShyZXF1ZXN0RGF0YSkpIHtcbiAgICAgIGRlbGV0ZSByZXF1ZXN0SGVhZGVyc1snQ29udGVudC1UeXBlJ107IC8vIExldCB0aGUgYnJvd3NlciBzZXQgaXRcbiAgICB9XG5cbiAgICB2YXIgcmVxdWVzdCA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgIHZhciBsb2FkRXZlbnQgPSAnb25yZWFkeXN0YXRlY2hhbmdlJztcbiAgICB2YXIgeERvbWFpbiA9IGZhbHNlO1xuXG4gICAgLy8gRm9yIElFIDgvOSBDT1JTIHN1cHBvcnRcbiAgICAvLyBPbmx5IHN1cHBvcnRzIFBPU1QgYW5kIEdFVCBjYWxscyBhbmQgZG9lc24ndCByZXR1cm5zIHRoZSByZXNwb25zZSBoZWFkZXJzLlxuICAgIC8vIERPTidUIGRvIHRoaXMgZm9yIHRlc3RpbmcgYi9jIFhNTEh0dHBSZXF1ZXN0IGlzIG1vY2tlZCwgbm90IFhEb21haW5SZXF1ZXN0LlxuICAgIGlmIChcImRldmVsb3BtZW50XCIgIT09ICd0ZXN0JyAmJlxuICAgICAgICB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJlxuICAgICAgICB3aW5kb3cuWERvbWFpblJlcXVlc3QgJiYgISgnd2l0aENyZWRlbnRpYWxzJyBpbiByZXF1ZXN0KSAmJlxuICAgICAgICAhaXNVUkxTYW1lT3JpZ2luKGNvbmZpZy51cmwpKSB7XG4gICAgICByZXF1ZXN0ID0gbmV3IHdpbmRvdy5YRG9tYWluUmVxdWVzdCgpO1xuICAgICAgbG9hZEV2ZW50ID0gJ29ubG9hZCc7XG4gICAgICB4RG9tYWluID0gdHJ1ZTtcbiAgICAgIHJlcXVlc3Qub25wcm9ncmVzcyA9IGZ1bmN0aW9uIGhhbmRsZVByb2dyZXNzKCkge307XG4gICAgICByZXF1ZXN0Lm9udGltZW91dCA9IGZ1bmN0aW9uIGhhbmRsZVRpbWVvdXQoKSB7fTtcbiAgICB9XG5cbiAgICAvLyBIVFRQIGJhc2ljIGF1dGhlbnRpY2F0aW9uXG4gICAgaWYgKGNvbmZpZy5hdXRoKSB7XG4gICAgICB2YXIgdXNlcm5hbWUgPSBjb25maWcuYXV0aC51c2VybmFtZSB8fCAnJztcbiAgICAgIHZhciBwYXNzd29yZCA9IGNvbmZpZy5hdXRoLnBhc3N3b3JkIHx8ICcnO1xuICAgICAgcmVxdWVzdEhlYWRlcnMuQXV0aG9yaXphdGlvbiA9ICdCYXNpYyAnICsgYnRvYSh1c2VybmFtZSArICc6JyArIHBhc3N3b3JkKTtcbiAgICB9XG5cbiAgICByZXF1ZXN0Lm9wZW4oY29uZmlnLm1ldGhvZC50b1VwcGVyQ2FzZSgpLCBidWlsZFVSTChjb25maWcudXJsLCBjb25maWcucGFyYW1zLCBjb25maWcucGFyYW1zU2VyaWFsaXplciksIHRydWUpO1xuXG4gICAgLy8gU2V0IHRoZSByZXF1ZXN0IHRpbWVvdXQgaW4gTVNcbiAgICByZXF1ZXN0LnRpbWVvdXQgPSBjb25maWcudGltZW91dDtcblxuICAgIC8vIExpc3RlbiBmb3IgcmVhZHkgc3RhdGVcbiAgICByZXF1ZXN0W2xvYWRFdmVudF0gPSBmdW5jdGlvbiBoYW5kbGVMb2FkKCkge1xuICAgICAgaWYgKCFyZXF1ZXN0IHx8IChyZXF1ZXN0LnJlYWR5U3RhdGUgIT09IDQgJiYgIXhEb21haW4pKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgLy8gVGhlIHJlcXVlc3QgZXJyb3JlZCBvdXQgYW5kIHdlIGRpZG4ndCBnZXQgYSByZXNwb25zZSwgdGhpcyB3aWxsIGJlXG4gICAgICAvLyBoYW5kbGVkIGJ5IG9uZXJyb3IgaW5zdGVhZFxuICAgICAgLy8gV2l0aCBvbmUgZXhjZXB0aW9uOiByZXF1ZXN0IHRoYXQgdXNpbmcgZmlsZTogcHJvdG9jb2wsIG1vc3QgYnJvd3NlcnNcbiAgICAgIC8vIHdpbGwgcmV0dXJuIHN0YXR1cyBhcyAwIGV2ZW4gdGhvdWdoIGl0J3MgYSBzdWNjZXNzZnVsIHJlcXVlc3RcbiAgICAgIGlmIChyZXF1ZXN0LnN0YXR1cyA9PT0gMCAmJiAhKHJlcXVlc3QucmVzcG9uc2VVUkwgJiYgcmVxdWVzdC5yZXNwb25zZVVSTC5pbmRleE9mKCdmaWxlOicpID09PSAwKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8vIFByZXBhcmUgdGhlIHJlc3BvbnNlXG4gICAgICB2YXIgcmVzcG9uc2VIZWFkZXJzID0gJ2dldEFsbFJlc3BvbnNlSGVhZGVycycgaW4gcmVxdWVzdCA/IHBhcnNlSGVhZGVycyhyZXF1ZXN0LmdldEFsbFJlc3BvbnNlSGVhZGVycygpKSA6IG51bGw7XG4gICAgICB2YXIgcmVzcG9uc2VEYXRhID0gIWNvbmZpZy5yZXNwb25zZVR5cGUgfHwgY29uZmlnLnJlc3BvbnNlVHlwZSA9PT0gJ3RleHQnID8gcmVxdWVzdC5yZXNwb25zZVRleHQgOiByZXF1ZXN0LnJlc3BvbnNlO1xuICAgICAgdmFyIHJlc3BvbnNlID0ge1xuICAgICAgICBkYXRhOiByZXNwb25zZURhdGEsXG4gICAgICAgIC8vIElFIHNlbmRzIDEyMjMgaW5zdGVhZCBvZiAyMDQgKGh0dHBzOi8vZ2l0aHViLmNvbS9heGlvcy9heGlvcy9pc3N1ZXMvMjAxKVxuICAgICAgICBzdGF0dXM6IHJlcXVlc3Quc3RhdHVzID09PSAxMjIzID8gMjA0IDogcmVxdWVzdC5zdGF0dXMsXG4gICAgICAgIHN0YXR1c1RleHQ6IHJlcXVlc3Quc3RhdHVzID09PSAxMjIzID8gJ05vIENvbnRlbnQnIDogcmVxdWVzdC5zdGF0dXNUZXh0LFxuICAgICAgICBoZWFkZXJzOiByZXNwb25zZUhlYWRlcnMsXG4gICAgICAgIGNvbmZpZzogY29uZmlnLFxuICAgICAgICByZXF1ZXN0OiByZXF1ZXN0XG4gICAgICB9O1xuXG4gICAgICBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCByZXNwb25zZSk7XG5cbiAgICAgIC8vIENsZWFuIHVwIHJlcXVlc3RcbiAgICAgIHJlcXVlc3QgPSBudWxsO1xuICAgIH07XG5cbiAgICAvLyBIYW5kbGUgbG93IGxldmVsIG5ldHdvcmsgZXJyb3JzXG4gICAgcmVxdWVzdC5vbmVycm9yID0gZnVuY3Rpb24gaGFuZGxlRXJyb3IoKSB7XG4gICAgICAvLyBSZWFsIGVycm9ycyBhcmUgaGlkZGVuIGZyb20gdXMgYnkgdGhlIGJyb3dzZXJcbiAgICAgIC8vIG9uZXJyb3Igc2hvdWxkIG9ubHkgZmlyZSBpZiBpdCdzIGEgbmV0d29yayBlcnJvclxuICAgICAgcmVqZWN0KGNyZWF0ZUVycm9yKCdOZXR3b3JrIEVycm9yJywgY29uZmlnLCBudWxsLCByZXF1ZXN0KSk7XG5cbiAgICAgIC8vIENsZWFuIHVwIHJlcXVlc3RcbiAgICAgIHJlcXVlc3QgPSBudWxsO1xuICAgIH07XG5cbiAgICAvLyBIYW5kbGUgdGltZW91dFxuICAgIHJlcXVlc3Qub250aW1lb3V0ID0gZnVuY3Rpb24gaGFuZGxlVGltZW91dCgpIHtcbiAgICAgIHJlamVjdChjcmVhdGVFcnJvcigndGltZW91dCBvZiAnICsgY29uZmlnLnRpbWVvdXQgKyAnbXMgZXhjZWVkZWQnLCBjb25maWcsICdFQ09OTkFCT1JURUQnLFxuICAgICAgICByZXF1ZXN0KSk7XG5cbiAgICAgIC8vIENsZWFuIHVwIHJlcXVlc3RcbiAgICAgIHJlcXVlc3QgPSBudWxsO1xuICAgIH07XG5cbiAgICAvLyBBZGQgeHNyZiBoZWFkZXJcbiAgICAvLyBUaGlzIGlzIG9ubHkgZG9uZSBpZiBydW5uaW5nIGluIGEgc3RhbmRhcmQgYnJvd3NlciBlbnZpcm9ubWVudC5cbiAgICAvLyBTcGVjaWZpY2FsbHkgbm90IGlmIHdlJ3JlIGluIGEgd2ViIHdvcmtlciwgb3IgcmVhY3QtbmF0aXZlLlxuICAgIGlmICh1dGlscy5pc1N0YW5kYXJkQnJvd3NlckVudigpKSB7XG4gICAgICB2YXIgY29va2llcyA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vLi4vaGVscGVycy9jb29raWVzICovIFwiLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvY29va2llcy5qc1wiKTtcblxuICAgICAgLy8gQWRkIHhzcmYgaGVhZGVyXG4gICAgICB2YXIgeHNyZlZhbHVlID0gKGNvbmZpZy53aXRoQ3JlZGVudGlhbHMgfHwgaXNVUkxTYW1lT3JpZ2luKGNvbmZpZy51cmwpKSAmJiBjb25maWcueHNyZkNvb2tpZU5hbWUgP1xuICAgICAgICAgIGNvb2tpZXMucmVhZChjb25maWcueHNyZkNvb2tpZU5hbWUpIDpcbiAgICAgICAgICB1bmRlZmluZWQ7XG5cbiAgICAgIGlmICh4c3JmVmFsdWUpIHtcbiAgICAgICAgcmVxdWVzdEhlYWRlcnNbY29uZmlnLnhzcmZIZWFkZXJOYW1lXSA9IHhzcmZWYWx1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBBZGQgaGVhZGVycyB0byB0aGUgcmVxdWVzdFxuICAgIGlmICgnc2V0UmVxdWVzdEhlYWRlcicgaW4gcmVxdWVzdCkge1xuICAgICAgdXRpbHMuZm9yRWFjaChyZXF1ZXN0SGVhZGVycywgZnVuY3Rpb24gc2V0UmVxdWVzdEhlYWRlcih2YWwsIGtleSkge1xuICAgICAgICBpZiAodHlwZW9mIHJlcXVlc3REYXRhID09PSAndW5kZWZpbmVkJyAmJiBrZXkudG9Mb3dlckNhc2UoKSA9PT0gJ2NvbnRlbnQtdHlwZScpIHtcbiAgICAgICAgICAvLyBSZW1vdmUgQ29udGVudC1UeXBlIGlmIGRhdGEgaXMgdW5kZWZpbmVkXG4gICAgICAgICAgZGVsZXRlIHJlcXVlc3RIZWFkZXJzW2tleV07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gT3RoZXJ3aXNlIGFkZCBoZWFkZXIgdG8gdGhlIHJlcXVlc3RcbiAgICAgICAgICByZXF1ZXN0LnNldFJlcXVlc3RIZWFkZXIoa2V5LCB2YWwpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBBZGQgd2l0aENyZWRlbnRpYWxzIHRvIHJlcXVlc3QgaWYgbmVlZGVkXG4gICAgaWYgKGNvbmZpZy53aXRoQ3JlZGVudGlhbHMpIHtcbiAgICAgIHJlcXVlc3Qud2l0aENyZWRlbnRpYWxzID0gdHJ1ZTtcbiAgICB9XG5cbiAgICAvLyBBZGQgcmVzcG9uc2VUeXBlIHRvIHJlcXVlc3QgaWYgbmVlZGVkXG4gICAgaWYgKGNvbmZpZy5yZXNwb25zZVR5cGUpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHJlcXVlc3QucmVzcG9uc2VUeXBlID0gY29uZmlnLnJlc3BvbnNlVHlwZTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gRXhwZWN0ZWQgRE9NRXhjZXB0aW9uIHRocm93biBieSBicm93c2VycyBub3QgY29tcGF0aWJsZSBYTUxIdHRwUmVxdWVzdCBMZXZlbCAyLlxuICAgICAgICAvLyBCdXQsIHRoaXMgY2FuIGJlIHN1cHByZXNzZWQgZm9yICdqc29uJyB0eXBlIGFzIGl0IGNhbiBiZSBwYXJzZWQgYnkgZGVmYXVsdCAndHJhbnNmb3JtUmVzcG9uc2UnIGZ1bmN0aW9uLlxuICAgICAgICBpZiAoY29uZmlnLnJlc3BvbnNlVHlwZSAhPT0gJ2pzb24nKSB7XG4gICAgICAgICAgdGhyb3cgZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIEhhbmRsZSBwcm9ncmVzcyBpZiBuZWVkZWRcbiAgICBpZiAodHlwZW9mIGNvbmZpZy5vbkRvd25sb2FkUHJvZ3Jlc3MgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHJlcXVlc3QuYWRkRXZlbnRMaXN0ZW5lcigncHJvZ3Jlc3MnLCBjb25maWcub25Eb3dubG9hZFByb2dyZXNzKTtcbiAgICB9XG5cbiAgICAvLyBOb3QgYWxsIGJyb3dzZXJzIHN1cHBvcnQgdXBsb2FkIGV2ZW50c1xuICAgIGlmICh0eXBlb2YgY29uZmlnLm9uVXBsb2FkUHJvZ3Jlc3MgPT09ICdmdW5jdGlvbicgJiYgcmVxdWVzdC51cGxvYWQpIHtcbiAgICAgIHJlcXVlc3QudXBsb2FkLmFkZEV2ZW50TGlzdGVuZXIoJ3Byb2dyZXNzJywgY29uZmlnLm9uVXBsb2FkUHJvZ3Jlc3MpO1xuICAgIH1cblxuICAgIGlmIChjb25maWcuY2FuY2VsVG9rZW4pIHtcbiAgICAgIC8vIEhhbmRsZSBjYW5jZWxsYXRpb25cbiAgICAgIGNvbmZpZy5jYW5jZWxUb2tlbi5wcm9taXNlLnRoZW4oZnVuY3Rpb24gb25DYW5jZWxlZChjYW5jZWwpIHtcbiAgICAgICAgaWYgKCFyZXF1ZXN0KSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgcmVxdWVzdC5hYm9ydCgpO1xuICAgICAgICByZWplY3QoY2FuY2VsKTtcbiAgICAgICAgLy8gQ2xlYW4gdXAgcmVxdWVzdFxuICAgICAgICByZXF1ZXN0ID0gbnVsbDtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmIChyZXF1ZXN0RGF0YSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXF1ZXN0RGF0YSA9IG51bGw7XG4gICAgfVxuXG4gICAgLy8gU2VuZCB0aGUgcmVxdWVzdFxuICAgIHJlcXVlc3Quc2VuZChyZXF1ZXN0RGF0YSk7XG4gIH0pO1xufTtcblxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvYXhpb3MuanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9heGlvcy5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cblxudmFyIHV0aWxzID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi91dGlscyAqLyBcIi4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi91dGlscy5qc1wiKTtcbnZhciBiaW5kID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9oZWxwZXJzL2JpbmQgKi8gXCIuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9iaW5kLmpzXCIpO1xudmFyIEF4aW9zID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9jb3JlL0F4aW9zICovIFwiLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvQXhpb3MuanNcIik7XG52YXIgZGVmYXVsdHMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL2RlZmF1bHRzICovIFwiLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2RlZmF1bHRzLmpzXCIpO1xuXG4vKipcbiAqIENyZWF0ZSBhbiBpbnN0YW5jZSBvZiBBeGlvc1xuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBkZWZhdWx0Q29uZmlnIFRoZSBkZWZhdWx0IGNvbmZpZyBmb3IgdGhlIGluc3RhbmNlXG4gKiBAcmV0dXJuIHtBeGlvc30gQSBuZXcgaW5zdGFuY2Ugb2YgQXhpb3NcbiAqL1xuZnVuY3Rpb24gY3JlYXRlSW5zdGFuY2UoZGVmYXVsdENvbmZpZykge1xuICB2YXIgY29udGV4dCA9IG5ldyBBeGlvcyhkZWZhdWx0Q29uZmlnKTtcbiAgdmFyIGluc3RhbmNlID0gYmluZChBeGlvcy5wcm90b3R5cGUucmVxdWVzdCwgY29udGV4dCk7XG5cbiAgLy8gQ29weSBheGlvcy5wcm90b3R5cGUgdG8gaW5zdGFuY2VcbiAgdXRpbHMuZXh0ZW5kKGluc3RhbmNlLCBBeGlvcy5wcm90b3R5cGUsIGNvbnRleHQpO1xuXG4gIC8vIENvcHkgY29udGV4dCB0byBpbnN0YW5jZVxuICB1dGlscy5leHRlbmQoaW5zdGFuY2UsIGNvbnRleHQpO1xuXG4gIHJldHVybiBpbnN0YW5jZTtcbn1cblxuLy8gQ3JlYXRlIHRoZSBkZWZhdWx0IGluc3RhbmNlIHRvIGJlIGV4cG9ydGVkXG52YXIgYXhpb3MgPSBjcmVhdGVJbnN0YW5jZShkZWZhdWx0cyk7XG5cbi8vIEV4cG9zZSBBeGlvcyBjbGFzcyB0byBhbGxvdyBjbGFzcyBpbmhlcml0YW5jZVxuYXhpb3MuQXhpb3MgPSBBeGlvcztcblxuLy8gRmFjdG9yeSBmb3IgY3JlYXRpbmcgbmV3IGluc3RhbmNlc1xuYXhpb3MuY3JlYXRlID0gZnVuY3Rpb24gY3JlYXRlKGluc3RhbmNlQ29uZmlnKSB7XG4gIHJldHVybiBjcmVhdGVJbnN0YW5jZSh1dGlscy5tZXJnZShkZWZhdWx0cywgaW5zdGFuY2VDb25maWcpKTtcbn07XG5cbi8vIEV4cG9zZSBDYW5jZWwgJiBDYW5jZWxUb2tlblxuYXhpb3MuQ2FuY2VsID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9jYW5jZWwvQ2FuY2VsICovIFwiLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NhbmNlbC9DYW5jZWwuanNcIik7XG5heGlvcy5DYW5jZWxUb2tlbiA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vY2FuY2VsL0NhbmNlbFRva2VuICovIFwiLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NhbmNlbC9DYW5jZWxUb2tlbi5qc1wiKTtcbmF4aW9zLmlzQ2FuY2VsID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9jYW5jZWwvaXNDYW5jZWwgKi8gXCIuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY2FuY2VsL2lzQ2FuY2VsLmpzXCIpO1xuXG4vLyBFeHBvc2UgYWxsL3NwcmVhZFxuYXhpb3MuYWxsID0gZnVuY3Rpb24gYWxsKHByb21pc2VzKSB7XG4gIHJldHVybiBQcm9taXNlLmFsbChwcm9taXNlcyk7XG59O1xuYXhpb3Muc3ByZWFkID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9oZWxwZXJzL3NwcmVhZCAqLyBcIi4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL3NwcmVhZC5qc1wiKTtcblxubW9kdWxlLmV4cG9ydHMgPSBheGlvcztcblxuLy8gQWxsb3cgdXNlIG9mIGRlZmF1bHQgaW1wb3J0IHN5bnRheCBpbiBUeXBlU2NyaXB0XG5tb2R1bGUuZXhwb3J0cy5kZWZhdWx0ID0gYXhpb3M7XG5cblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NhbmNlbC9DYW5jZWwuanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NhbmNlbC9DYW5jZWwuanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cblxuLyoqXG4gKiBBIGBDYW5jZWxgIGlzIGFuIG9iamVjdCB0aGF0IGlzIHRocm93biB3aGVuIGFuIG9wZXJhdGlvbiBpcyBjYW5jZWxlZC5cbiAqXG4gKiBAY2xhc3NcbiAqIEBwYXJhbSB7c3RyaW5nPX0gbWVzc2FnZSBUaGUgbWVzc2FnZS5cbiAqL1xuZnVuY3Rpb24gQ2FuY2VsKG1lc3NhZ2UpIHtcbiAgdGhpcy5tZXNzYWdlID0gbWVzc2FnZTtcbn1cblxuQ2FuY2VsLnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICByZXR1cm4gJ0NhbmNlbCcgKyAodGhpcy5tZXNzYWdlID8gJzogJyArIHRoaXMubWVzc2FnZSA6ICcnKTtcbn07XG5cbkNhbmNlbC5wcm90b3R5cGUuX19DQU5DRUxfXyA9IHRydWU7XG5cbm1vZHVsZS5leHBvcnRzID0gQ2FuY2VsO1xuXG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jYW5jZWwvQ2FuY2VsVG9rZW4uanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY2FuY2VsL0NhbmNlbFRva2VuLmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cblxudmFyIENhbmNlbCA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vQ2FuY2VsICovIFwiLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NhbmNlbC9DYW5jZWwuanNcIik7XG5cbi8qKlxuICogQSBgQ2FuY2VsVG9rZW5gIGlzIGFuIG9iamVjdCB0aGF0IGNhbiBiZSB1c2VkIHRvIHJlcXVlc3QgY2FuY2VsbGF0aW9uIG9mIGFuIG9wZXJhdGlvbi5cbiAqXG4gKiBAY2xhc3NcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGV4ZWN1dG9yIFRoZSBleGVjdXRvciBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gQ2FuY2VsVG9rZW4oZXhlY3V0b3IpIHtcbiAgaWYgKHR5cGVvZiBleGVjdXRvciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ2V4ZWN1dG9yIG11c3QgYmUgYSBmdW5jdGlvbi4nKTtcbiAgfVxuXG4gIHZhciByZXNvbHZlUHJvbWlzZTtcbiAgdGhpcy5wcm9taXNlID0gbmV3IFByb21pc2UoZnVuY3Rpb24gcHJvbWlzZUV4ZWN1dG9yKHJlc29sdmUpIHtcbiAgICByZXNvbHZlUHJvbWlzZSA9IHJlc29sdmU7XG4gIH0pO1xuXG4gIHZhciB0b2tlbiA9IHRoaXM7XG4gIGV4ZWN1dG9yKGZ1bmN0aW9uIGNhbmNlbChtZXNzYWdlKSB7XG4gICAgaWYgKHRva2VuLnJlYXNvbikge1xuICAgICAgLy8gQ2FuY2VsbGF0aW9uIGhhcyBhbHJlYWR5IGJlZW4gcmVxdWVzdGVkXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdG9rZW4ucmVhc29uID0gbmV3IENhbmNlbChtZXNzYWdlKTtcbiAgICByZXNvbHZlUHJvbWlzZSh0b2tlbi5yZWFzb24pO1xuICB9KTtcbn1cblxuLyoqXG4gKiBUaHJvd3MgYSBgQ2FuY2VsYCBpZiBjYW5jZWxsYXRpb24gaGFzIGJlZW4gcmVxdWVzdGVkLlxuICovXG5DYW5jZWxUb2tlbi5wcm90b3R5cGUudGhyb3dJZlJlcXVlc3RlZCA9IGZ1bmN0aW9uIHRocm93SWZSZXF1ZXN0ZWQoKSB7XG4gIGlmICh0aGlzLnJlYXNvbikge1xuICAgIHRocm93IHRoaXMucmVhc29uO1xuICB9XG59O1xuXG4vKipcbiAqIFJldHVybnMgYW4gb2JqZWN0IHRoYXQgY29udGFpbnMgYSBuZXcgYENhbmNlbFRva2VuYCBhbmQgYSBmdW5jdGlvbiB0aGF0LCB3aGVuIGNhbGxlZCxcbiAqIGNhbmNlbHMgdGhlIGBDYW5jZWxUb2tlbmAuXG4gKi9cbkNhbmNlbFRva2VuLnNvdXJjZSA9IGZ1bmN0aW9uIHNvdXJjZSgpIHtcbiAgdmFyIGNhbmNlbDtcbiAgdmFyIHRva2VuID0gbmV3IENhbmNlbFRva2VuKGZ1bmN0aW9uIGV4ZWN1dG9yKGMpIHtcbiAgICBjYW5jZWwgPSBjO1xuICB9KTtcbiAgcmV0dXJuIHtcbiAgICB0b2tlbjogdG9rZW4sXG4gICAgY2FuY2VsOiBjYW5jZWxcbiAgfTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gQ2FuY2VsVG9rZW47XG5cblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NhbmNlbC9pc0NhbmNlbC5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jYW5jZWwvaXNDYW5jZWwuanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGlzQ2FuY2VsKHZhbHVlKSB7XG4gIHJldHVybiAhISh2YWx1ZSAmJiB2YWx1ZS5fX0NBTkNFTF9fKTtcbn07XG5cblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvQXhpb3MuanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvQXhpb3MuanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cblxudmFyIGRlZmF1bHRzID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi8uLi9kZWZhdWx0cyAqLyBcIi4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9kZWZhdWx0cy5qc1wiKTtcbnZhciB1dGlscyA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vLi4vdXRpbHMgKi8gXCIuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvdXRpbHMuanNcIik7XG52YXIgSW50ZXJjZXB0b3JNYW5hZ2VyID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9JbnRlcmNlcHRvck1hbmFnZXIgKi8gXCIuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9JbnRlcmNlcHRvck1hbmFnZXIuanNcIik7XG52YXIgZGlzcGF0Y2hSZXF1ZXN0ID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9kaXNwYXRjaFJlcXVlc3QgKi8gXCIuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9kaXNwYXRjaFJlcXVlc3QuanNcIik7XG5cbi8qKlxuICogQ3JlYXRlIGEgbmV3IGluc3RhbmNlIG9mIEF4aW9zXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGluc3RhbmNlQ29uZmlnIFRoZSBkZWZhdWx0IGNvbmZpZyBmb3IgdGhlIGluc3RhbmNlXG4gKi9cbmZ1bmN0aW9uIEF4aW9zKGluc3RhbmNlQ29uZmlnKSB7XG4gIHRoaXMuZGVmYXVsdHMgPSBpbnN0YW5jZUNvbmZpZztcbiAgdGhpcy5pbnRlcmNlcHRvcnMgPSB7XG4gICAgcmVxdWVzdDogbmV3IEludGVyY2VwdG9yTWFuYWdlcigpLFxuICAgIHJlc3BvbnNlOiBuZXcgSW50ZXJjZXB0b3JNYW5hZ2VyKClcbiAgfTtcbn1cblxuLyoqXG4gKiBEaXNwYXRjaCBhIHJlcXVlc3RcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gY29uZmlnIFRoZSBjb25maWcgc3BlY2lmaWMgZm9yIHRoaXMgcmVxdWVzdCAobWVyZ2VkIHdpdGggdGhpcy5kZWZhdWx0cylcbiAqL1xuQXhpb3MucHJvdG90eXBlLnJlcXVlc3QgPSBmdW5jdGlvbiByZXF1ZXN0KGNvbmZpZykge1xuICAvKmVzbGludCBuby1wYXJhbS1yZWFzc2lnbjowKi9cbiAgLy8gQWxsb3cgZm9yIGF4aW9zKCdleGFtcGxlL3VybCdbLCBjb25maWddKSBhIGxhIGZldGNoIEFQSVxuICBpZiAodHlwZW9mIGNvbmZpZyA9PT0gJ3N0cmluZycpIHtcbiAgICBjb25maWcgPSB1dGlscy5tZXJnZSh7XG4gICAgICB1cmw6IGFyZ3VtZW50c1swXVxuICAgIH0sIGFyZ3VtZW50c1sxXSk7XG4gIH1cblxuICBjb25maWcgPSB1dGlscy5tZXJnZShkZWZhdWx0cywge21ldGhvZDogJ2dldCd9LCB0aGlzLmRlZmF1bHRzLCBjb25maWcpO1xuICBjb25maWcubWV0aG9kID0gY29uZmlnLm1ldGhvZC50b0xvd2VyQ2FzZSgpO1xuXG4gIC8vIEhvb2sgdXAgaW50ZXJjZXB0b3JzIG1pZGRsZXdhcmVcbiAgdmFyIGNoYWluID0gW2Rpc3BhdGNoUmVxdWVzdCwgdW5kZWZpbmVkXTtcbiAgdmFyIHByb21pc2UgPSBQcm9taXNlLnJlc29sdmUoY29uZmlnKTtcblxuICB0aGlzLmludGVyY2VwdG9ycy5yZXF1ZXN0LmZvckVhY2goZnVuY3Rpb24gdW5zaGlmdFJlcXVlc3RJbnRlcmNlcHRvcnMoaW50ZXJjZXB0b3IpIHtcbiAgICBjaGFpbi51bnNoaWZ0KGludGVyY2VwdG9yLmZ1bGZpbGxlZCwgaW50ZXJjZXB0b3IucmVqZWN0ZWQpO1xuICB9KTtcblxuICB0aGlzLmludGVyY2VwdG9ycy5yZXNwb25zZS5mb3JFYWNoKGZ1bmN0aW9uIHB1c2hSZXNwb25zZUludGVyY2VwdG9ycyhpbnRlcmNlcHRvcikge1xuICAgIGNoYWluLnB1c2goaW50ZXJjZXB0b3IuZnVsZmlsbGVkLCBpbnRlcmNlcHRvci5yZWplY3RlZCk7XG4gIH0pO1xuXG4gIHdoaWxlIChjaGFpbi5sZW5ndGgpIHtcbiAgICBwcm9taXNlID0gcHJvbWlzZS50aGVuKGNoYWluLnNoaWZ0KCksIGNoYWluLnNoaWZ0KCkpO1xuICB9XG5cbiAgcmV0dXJuIHByb21pc2U7XG59O1xuXG4vLyBQcm92aWRlIGFsaWFzZXMgZm9yIHN1cHBvcnRlZCByZXF1ZXN0IG1ldGhvZHNcbnV0aWxzLmZvckVhY2goWydkZWxldGUnLCAnZ2V0JywgJ2hlYWQnLCAnb3B0aW9ucyddLCBmdW5jdGlvbiBmb3JFYWNoTWV0aG9kTm9EYXRhKG1ldGhvZCkge1xuICAvKmVzbGludCBmdW5jLW5hbWVzOjAqL1xuICBBeGlvcy5wcm90b3R5cGVbbWV0aG9kXSA9IGZ1bmN0aW9uKHVybCwgY29uZmlnKSB7XG4gICAgcmV0dXJuIHRoaXMucmVxdWVzdCh1dGlscy5tZXJnZShjb25maWcgfHwge30sIHtcbiAgICAgIG1ldGhvZDogbWV0aG9kLFxuICAgICAgdXJsOiB1cmxcbiAgICB9KSk7XG4gIH07XG59KTtcblxudXRpbHMuZm9yRWFjaChbJ3Bvc3QnLCAncHV0JywgJ3BhdGNoJ10sIGZ1bmN0aW9uIGZvckVhY2hNZXRob2RXaXRoRGF0YShtZXRob2QpIHtcbiAgLyplc2xpbnQgZnVuYy1uYW1lczowKi9cbiAgQXhpb3MucHJvdG90eXBlW21ldGhvZF0gPSBmdW5jdGlvbih1cmwsIGRhdGEsIGNvbmZpZykge1xuICAgIHJldHVybiB0aGlzLnJlcXVlc3QodXRpbHMubWVyZ2UoY29uZmlnIHx8IHt9LCB7XG4gICAgICBtZXRob2Q6IG1ldGhvZCxcbiAgICAgIHVybDogdXJsLFxuICAgICAgZGF0YTogZGF0YVxuICAgIH0pKTtcbiAgfTtcbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEF4aW9zO1xuXG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL0ludGVyY2VwdG9yTWFuYWdlci5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvSW50ZXJjZXB0b3JNYW5hZ2VyLmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG52YXIgdXRpbHMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuLy4uL3V0aWxzICovIFwiLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL3V0aWxzLmpzXCIpO1xuXG5mdW5jdGlvbiBJbnRlcmNlcHRvck1hbmFnZXIoKSB7XG4gIHRoaXMuaGFuZGxlcnMgPSBbXTtcbn1cblxuLyoqXG4gKiBBZGQgYSBuZXcgaW50ZXJjZXB0b3IgdG8gdGhlIHN0YWNrXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVsZmlsbGVkIFRoZSBmdW5jdGlvbiB0byBoYW5kbGUgYHRoZW5gIGZvciBhIGBQcm9taXNlYFxuICogQHBhcmFtIHtGdW5jdGlvbn0gcmVqZWN0ZWQgVGhlIGZ1bmN0aW9uIHRvIGhhbmRsZSBgcmVqZWN0YCBmb3IgYSBgUHJvbWlzZWBcbiAqXG4gKiBAcmV0dXJuIHtOdW1iZXJ9IEFuIElEIHVzZWQgdG8gcmVtb3ZlIGludGVyY2VwdG9yIGxhdGVyXG4gKi9cbkludGVyY2VwdG9yTWFuYWdlci5wcm90b3R5cGUudXNlID0gZnVuY3Rpb24gdXNlKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpIHtcbiAgdGhpcy5oYW5kbGVycy5wdXNoKHtcbiAgICBmdWxmaWxsZWQ6IGZ1bGZpbGxlZCxcbiAgICByZWplY3RlZDogcmVqZWN0ZWRcbiAgfSk7XG4gIHJldHVybiB0aGlzLmhhbmRsZXJzLmxlbmd0aCAtIDE7XG59O1xuXG4vKipcbiAqIFJlbW92ZSBhbiBpbnRlcmNlcHRvciBmcm9tIHRoZSBzdGFja1xuICpcbiAqIEBwYXJhbSB7TnVtYmVyfSBpZCBUaGUgSUQgdGhhdCB3YXMgcmV0dXJuZWQgYnkgYHVzZWBcbiAqL1xuSW50ZXJjZXB0b3JNYW5hZ2VyLnByb3RvdHlwZS5lamVjdCA9IGZ1bmN0aW9uIGVqZWN0KGlkKSB7XG4gIGlmICh0aGlzLmhhbmRsZXJzW2lkXSkge1xuICAgIHRoaXMuaGFuZGxlcnNbaWRdID0gbnVsbDtcbiAgfVxufTtcblxuLyoqXG4gKiBJdGVyYXRlIG92ZXIgYWxsIHRoZSByZWdpc3RlcmVkIGludGVyY2VwdG9yc1xuICpcbiAqIFRoaXMgbWV0aG9kIGlzIHBhcnRpY3VsYXJseSB1c2VmdWwgZm9yIHNraXBwaW5nIG92ZXIgYW55XG4gKiBpbnRlcmNlcHRvcnMgdGhhdCBtYXkgaGF2ZSBiZWNvbWUgYG51bGxgIGNhbGxpbmcgYGVqZWN0YC5cbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmbiBUaGUgZnVuY3Rpb24gdG8gY2FsbCBmb3IgZWFjaCBpbnRlcmNlcHRvclxuICovXG5JbnRlcmNlcHRvck1hbmFnZXIucHJvdG90eXBlLmZvckVhY2ggPSBmdW5jdGlvbiBmb3JFYWNoKGZuKSB7XG4gIHV0aWxzLmZvckVhY2godGhpcy5oYW5kbGVycywgZnVuY3Rpb24gZm9yRWFjaEhhbmRsZXIoaCkge1xuICAgIGlmIChoICE9PSBudWxsKSB7XG4gICAgICBmbihoKTtcbiAgICB9XG4gIH0pO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBJbnRlcmNlcHRvck1hbmFnZXI7XG5cblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvY3JlYXRlRXJyb3IuanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvY3JlYXRlRXJyb3IuanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cblxudmFyIGVuaGFuY2VFcnJvciA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vZW5oYW5jZUVycm9yICovIFwiLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvZW5oYW5jZUVycm9yLmpzXCIpO1xuXG4vKipcbiAqIENyZWF0ZSBhbiBFcnJvciB3aXRoIHRoZSBzcGVjaWZpZWQgbWVzc2FnZSwgY29uZmlnLCBlcnJvciBjb2RlLCByZXF1ZXN0IGFuZCByZXNwb25zZS5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gbWVzc2FnZSBUaGUgZXJyb3IgbWVzc2FnZS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWcgVGhlIGNvbmZpZy5cbiAqIEBwYXJhbSB7c3RyaW5nfSBbY29kZV0gVGhlIGVycm9yIGNvZGUgKGZvciBleGFtcGxlLCAnRUNPTk5BQk9SVEVEJykuXG4gKiBAcGFyYW0ge09iamVjdH0gW3JlcXVlc3RdIFRoZSByZXF1ZXN0LlxuICogQHBhcmFtIHtPYmplY3R9IFtyZXNwb25zZV0gVGhlIHJlc3BvbnNlLlxuICogQHJldHVybnMge0Vycm9yfSBUaGUgY3JlYXRlZCBlcnJvci5cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjcmVhdGVFcnJvcihtZXNzYWdlLCBjb25maWcsIGNvZGUsIHJlcXVlc3QsIHJlc3BvbnNlKSB7XG4gIHZhciBlcnJvciA9IG5ldyBFcnJvcihtZXNzYWdlKTtcbiAgcmV0dXJuIGVuaGFuY2VFcnJvcihlcnJvciwgY29uZmlnLCBjb2RlLCByZXF1ZXN0LCByZXNwb25zZSk7XG59O1xuXG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL2Rpc3BhdGNoUmVxdWVzdC5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvZGlzcGF0Y2hSZXF1ZXN0LmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG52YXIgdXRpbHMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuLy4uL3V0aWxzICovIFwiLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL3V0aWxzLmpzXCIpO1xudmFyIHRyYW5zZm9ybURhdGEgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL3RyYW5zZm9ybURhdGEgKi8gXCIuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS90cmFuc2Zvcm1EYXRhLmpzXCIpO1xudmFyIGlzQ2FuY2VsID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi4vY2FuY2VsL2lzQ2FuY2VsICovIFwiLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NhbmNlbC9pc0NhbmNlbC5qc1wiKTtcbnZhciBkZWZhdWx0cyA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4uL2RlZmF1bHRzICovIFwiLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2RlZmF1bHRzLmpzXCIpO1xudmFyIGlzQWJzb2x1dGVVUkwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuLy4uL2hlbHBlcnMvaXNBYnNvbHV0ZVVSTCAqLyBcIi4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2lzQWJzb2x1dGVVUkwuanNcIik7XG52YXIgY29tYmluZVVSTHMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuLy4uL2hlbHBlcnMvY29tYmluZVVSTHMgKi8gXCIuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9jb21iaW5lVVJMcy5qc1wiKTtcblxuLyoqXG4gKiBUaHJvd3MgYSBgQ2FuY2VsYCBpZiBjYW5jZWxsYXRpb24gaGFzIGJlZW4gcmVxdWVzdGVkLlxuICovXG5mdW5jdGlvbiB0aHJvd0lmQ2FuY2VsbGF0aW9uUmVxdWVzdGVkKGNvbmZpZykge1xuICBpZiAoY29uZmlnLmNhbmNlbFRva2VuKSB7XG4gICAgY29uZmlnLmNhbmNlbFRva2VuLnRocm93SWZSZXF1ZXN0ZWQoKTtcbiAgfVxufVxuXG4vKipcbiAqIERpc3BhdGNoIGEgcmVxdWVzdCB0byB0aGUgc2VydmVyIHVzaW5nIHRoZSBjb25maWd1cmVkIGFkYXB0ZXIuXG4gKlxuICogQHBhcmFtIHtvYmplY3R9IGNvbmZpZyBUaGUgY29uZmlnIHRoYXQgaXMgdG8gYmUgdXNlZCBmb3IgdGhlIHJlcXVlc3RcbiAqIEByZXR1cm5zIHtQcm9taXNlfSBUaGUgUHJvbWlzZSB0byBiZSBmdWxmaWxsZWRcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBkaXNwYXRjaFJlcXVlc3QoY29uZmlnKSB7XG4gIHRocm93SWZDYW5jZWxsYXRpb25SZXF1ZXN0ZWQoY29uZmlnKTtcblxuICAvLyBTdXBwb3J0IGJhc2VVUkwgY29uZmlnXG4gIGlmIChjb25maWcuYmFzZVVSTCAmJiAhaXNBYnNvbHV0ZVVSTChjb25maWcudXJsKSkge1xuICAgIGNvbmZpZy51cmwgPSBjb21iaW5lVVJMcyhjb25maWcuYmFzZVVSTCwgY29uZmlnLnVybCk7XG4gIH1cblxuICAvLyBFbnN1cmUgaGVhZGVycyBleGlzdFxuICBjb25maWcuaGVhZGVycyA9IGNvbmZpZy5oZWFkZXJzIHx8IHt9O1xuXG4gIC8vIFRyYW5zZm9ybSByZXF1ZXN0IGRhdGFcbiAgY29uZmlnLmRhdGEgPSB0cmFuc2Zvcm1EYXRhKFxuICAgIGNvbmZpZy5kYXRhLFxuICAgIGNvbmZpZy5oZWFkZXJzLFxuICAgIGNvbmZpZy50cmFuc2Zvcm1SZXF1ZXN0XG4gICk7XG5cbiAgLy8gRmxhdHRlbiBoZWFkZXJzXG4gIGNvbmZpZy5oZWFkZXJzID0gdXRpbHMubWVyZ2UoXG4gICAgY29uZmlnLmhlYWRlcnMuY29tbW9uIHx8IHt9LFxuICAgIGNvbmZpZy5oZWFkZXJzW2NvbmZpZy5tZXRob2RdIHx8IHt9LFxuICAgIGNvbmZpZy5oZWFkZXJzIHx8IHt9XG4gICk7XG5cbiAgdXRpbHMuZm9yRWFjaChcbiAgICBbJ2RlbGV0ZScsICdnZXQnLCAnaGVhZCcsICdwb3N0JywgJ3B1dCcsICdwYXRjaCcsICdjb21tb24nXSxcbiAgICBmdW5jdGlvbiBjbGVhbkhlYWRlckNvbmZpZyhtZXRob2QpIHtcbiAgICAgIGRlbGV0ZSBjb25maWcuaGVhZGVyc1ttZXRob2RdO1xuICAgIH1cbiAgKTtcblxuICB2YXIgYWRhcHRlciA9IGNvbmZpZy5hZGFwdGVyIHx8IGRlZmF1bHRzLmFkYXB0ZXI7XG5cbiAgcmV0dXJuIGFkYXB0ZXIoY29uZmlnKS50aGVuKGZ1bmN0aW9uIG9uQWRhcHRlclJlc29sdXRpb24ocmVzcG9uc2UpIHtcbiAgICB0aHJvd0lmQ2FuY2VsbGF0aW9uUmVxdWVzdGVkKGNvbmZpZyk7XG5cbiAgICAvLyBUcmFuc2Zvcm0gcmVzcG9uc2UgZGF0YVxuICAgIHJlc3BvbnNlLmRhdGEgPSB0cmFuc2Zvcm1EYXRhKFxuICAgICAgcmVzcG9uc2UuZGF0YSxcbiAgICAgIHJlc3BvbnNlLmhlYWRlcnMsXG4gICAgICBjb25maWcudHJhbnNmb3JtUmVzcG9uc2VcbiAgICApO1xuXG4gICAgcmV0dXJuIHJlc3BvbnNlO1xuICB9LCBmdW5jdGlvbiBvbkFkYXB0ZXJSZWplY3Rpb24ocmVhc29uKSB7XG4gICAgaWYgKCFpc0NhbmNlbChyZWFzb24pKSB7XG4gICAgICB0aHJvd0lmQ2FuY2VsbGF0aW9uUmVxdWVzdGVkKGNvbmZpZyk7XG5cbiAgICAgIC8vIFRyYW5zZm9ybSByZXNwb25zZSBkYXRhXG4gICAgICBpZiAocmVhc29uICYmIHJlYXNvbi5yZXNwb25zZSkge1xuICAgICAgICByZWFzb24ucmVzcG9uc2UuZGF0YSA9IHRyYW5zZm9ybURhdGEoXG4gICAgICAgICAgcmVhc29uLnJlc3BvbnNlLmRhdGEsXG4gICAgICAgICAgcmVhc29uLnJlc3BvbnNlLmhlYWRlcnMsXG4gICAgICAgICAgY29uZmlnLnRyYW5zZm9ybVJlc3BvbnNlXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIFByb21pc2UucmVqZWN0KHJlYXNvbik7XG4gIH0pO1xufTtcblxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9lbmhhbmNlRXJyb3IuanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL2VuaGFuY2VFcnJvci5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cblxuLyoqXG4gKiBVcGRhdGUgYW4gRXJyb3Igd2l0aCB0aGUgc3BlY2lmaWVkIGNvbmZpZywgZXJyb3IgY29kZSwgYW5kIHJlc3BvbnNlLlxuICpcbiAqIEBwYXJhbSB7RXJyb3J9IGVycm9yIFRoZSBlcnJvciB0byB1cGRhdGUuXG4gKiBAcGFyYW0ge09iamVjdH0gY29uZmlnIFRoZSBjb25maWcuXG4gKiBAcGFyYW0ge3N0cmluZ30gW2NvZGVdIFRoZSBlcnJvciBjb2RlIChmb3IgZXhhbXBsZSwgJ0VDT05OQUJPUlRFRCcpLlxuICogQHBhcmFtIHtPYmplY3R9IFtyZXF1ZXN0XSBUaGUgcmVxdWVzdC5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbcmVzcG9uc2VdIFRoZSByZXNwb25zZS5cbiAqIEByZXR1cm5zIHtFcnJvcn0gVGhlIGVycm9yLlxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGVuaGFuY2VFcnJvcihlcnJvciwgY29uZmlnLCBjb2RlLCByZXF1ZXN0LCByZXNwb25zZSkge1xuICBlcnJvci5jb25maWcgPSBjb25maWc7XG4gIGlmIChjb2RlKSB7XG4gICAgZXJyb3IuY29kZSA9IGNvZGU7XG4gIH1cbiAgZXJyb3IucmVxdWVzdCA9IHJlcXVlc3Q7XG4gIGVycm9yLnJlc3BvbnNlID0gcmVzcG9uc2U7XG4gIHJldHVybiBlcnJvcjtcbn07XG5cblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvc2V0dGxlLmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9zZXR0bGUuanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5cbnZhciBjcmVhdGVFcnJvciA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vY3JlYXRlRXJyb3IgKi8gXCIuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9jcmVhdGVFcnJvci5qc1wiKTtcblxuLyoqXG4gKiBSZXNvbHZlIG9yIHJlamVjdCBhIFByb21pc2UgYmFzZWQgb24gcmVzcG9uc2Ugc3RhdHVzLlxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IHJlc29sdmUgQSBmdW5jdGlvbiB0aGF0IHJlc29sdmVzIHRoZSBwcm9taXNlLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gcmVqZWN0IEEgZnVuY3Rpb24gdGhhdCByZWplY3RzIHRoZSBwcm9taXNlLlxuICogQHBhcmFtIHtvYmplY3R9IHJlc3BvbnNlIFRoZSByZXNwb25zZS5cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCByZXNwb25zZSkge1xuICB2YXIgdmFsaWRhdGVTdGF0dXMgPSByZXNwb25zZS5jb25maWcudmFsaWRhdGVTdGF0dXM7XG4gIC8vIE5vdGU6IHN0YXR1cyBpcyBub3QgZXhwb3NlZCBieSBYRG9tYWluUmVxdWVzdFxuICBpZiAoIXJlc3BvbnNlLnN0YXR1cyB8fCAhdmFsaWRhdGVTdGF0dXMgfHwgdmFsaWRhdGVTdGF0dXMocmVzcG9uc2Uuc3RhdHVzKSkge1xuICAgIHJlc29sdmUocmVzcG9uc2UpO1xuICB9IGVsc2Uge1xuICAgIHJlamVjdChjcmVhdGVFcnJvcihcbiAgICAgICdSZXF1ZXN0IGZhaWxlZCB3aXRoIHN0YXR1cyBjb2RlICcgKyByZXNwb25zZS5zdGF0dXMsXG4gICAgICByZXNwb25zZS5jb25maWcsXG4gICAgICBudWxsLFxuICAgICAgcmVzcG9uc2UucmVxdWVzdCxcbiAgICAgIHJlc3BvbnNlXG4gICAgKSk7XG4gIH1cbn07XG5cblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvdHJhbnNmb3JtRGF0YS5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL3RyYW5zZm9ybURhdGEuanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG52YXIgdXRpbHMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuLy4uL3V0aWxzICovIFwiLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL3V0aWxzLmpzXCIpO1xuXG4vKipcbiAqIFRyYW5zZm9ybSB0aGUgZGF0YSBmb3IgYSByZXF1ZXN0IG9yIGEgcmVzcG9uc2VcbiAqXG4gKiBAcGFyYW0ge09iamVjdHxTdHJpbmd9IGRhdGEgVGhlIGRhdGEgdG8gYmUgdHJhbnNmb3JtZWRcbiAqIEBwYXJhbSB7QXJyYXl9IGhlYWRlcnMgVGhlIGhlYWRlcnMgZm9yIHRoZSByZXF1ZXN0IG9yIHJlc3BvbnNlXG4gKiBAcGFyYW0ge0FycmF5fEZ1bmN0aW9ufSBmbnMgQSBzaW5nbGUgZnVuY3Rpb24gb3IgQXJyYXkgb2YgZnVuY3Rpb25zXG4gKiBAcmV0dXJucyB7Kn0gVGhlIHJlc3VsdGluZyB0cmFuc2Zvcm1lZCBkYXRhXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gdHJhbnNmb3JtRGF0YShkYXRhLCBoZWFkZXJzLCBmbnMpIHtcbiAgLyplc2xpbnQgbm8tcGFyYW0tcmVhc3NpZ246MCovXG4gIHV0aWxzLmZvckVhY2goZm5zLCBmdW5jdGlvbiB0cmFuc2Zvcm0oZm4pIHtcbiAgICBkYXRhID0gZm4oZGF0YSwgaGVhZGVycyk7XG4gIH0pO1xuXG4gIHJldHVybiBkYXRhO1xufTtcblxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvZGVmYXVsdHMuanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9kZWZhdWx0cy5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG4vKiBXRUJQQUNLIFZBUiBJTkpFQ1RJT04gKi8oZnVuY3Rpb24ocHJvY2Vzcykge1xuXG52YXIgdXRpbHMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL3V0aWxzICovIFwiLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL3V0aWxzLmpzXCIpO1xudmFyIG5vcm1hbGl6ZUhlYWRlck5hbWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL2hlbHBlcnMvbm9ybWFsaXplSGVhZGVyTmFtZSAqLyBcIi4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL25vcm1hbGl6ZUhlYWRlck5hbWUuanNcIik7XG5cbnZhciBERUZBVUxUX0NPTlRFTlRfVFlQRSA9IHtcbiAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnXG59O1xuXG5mdW5jdGlvbiBzZXRDb250ZW50VHlwZUlmVW5zZXQoaGVhZGVycywgdmFsdWUpIHtcbiAgaWYgKCF1dGlscy5pc1VuZGVmaW5lZChoZWFkZXJzKSAmJiB1dGlscy5pc1VuZGVmaW5lZChoZWFkZXJzWydDb250ZW50LVR5cGUnXSkpIHtcbiAgICBoZWFkZXJzWydDb250ZW50LVR5cGUnXSA9IHZhbHVlO1xuICB9XG59XG5cbmZ1bmN0aW9uIGdldERlZmF1bHRBZGFwdGVyKCkge1xuICB2YXIgYWRhcHRlcjtcbiAgaWYgKHR5cGVvZiBYTUxIdHRwUmVxdWVzdCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAvLyBGb3IgYnJvd3NlcnMgdXNlIFhIUiBhZGFwdGVyXG4gICAgYWRhcHRlciA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vYWRhcHRlcnMveGhyICovIFwiLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2FkYXB0ZXJzL3hoci5qc1wiKTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgcHJvY2VzcyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAvLyBGb3Igbm9kZSB1c2UgSFRUUCBhZGFwdGVyXG4gICAgYWRhcHRlciA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vYWRhcHRlcnMvaHR0cCAqLyBcIi4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9hZGFwdGVycy94aHIuanNcIik7XG4gIH1cbiAgcmV0dXJuIGFkYXB0ZXI7XG59XG5cbnZhciBkZWZhdWx0cyA9IHtcbiAgYWRhcHRlcjogZ2V0RGVmYXVsdEFkYXB0ZXIoKSxcblxuICB0cmFuc2Zvcm1SZXF1ZXN0OiBbZnVuY3Rpb24gdHJhbnNmb3JtUmVxdWVzdChkYXRhLCBoZWFkZXJzKSB7XG4gICAgbm9ybWFsaXplSGVhZGVyTmFtZShoZWFkZXJzLCAnQ29udGVudC1UeXBlJyk7XG4gICAgaWYgKHV0aWxzLmlzRm9ybURhdGEoZGF0YSkgfHxcbiAgICAgIHV0aWxzLmlzQXJyYXlCdWZmZXIoZGF0YSkgfHxcbiAgICAgIHV0aWxzLmlzQnVmZmVyKGRhdGEpIHx8XG4gICAgICB1dGlscy5pc1N0cmVhbShkYXRhKSB8fFxuICAgICAgdXRpbHMuaXNGaWxlKGRhdGEpIHx8XG4gICAgICB1dGlscy5pc0Jsb2IoZGF0YSlcbiAgICApIHtcbiAgICAgIHJldHVybiBkYXRhO1xuICAgIH1cbiAgICBpZiAodXRpbHMuaXNBcnJheUJ1ZmZlclZpZXcoZGF0YSkpIHtcbiAgICAgIHJldHVybiBkYXRhLmJ1ZmZlcjtcbiAgICB9XG4gICAgaWYgKHV0aWxzLmlzVVJMU2VhcmNoUGFyYW1zKGRhdGEpKSB7XG4gICAgICBzZXRDb250ZW50VHlwZUlmVW5zZXQoaGVhZGVycywgJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZDtjaGFyc2V0PXV0Zi04Jyk7XG4gICAgICByZXR1cm4gZGF0YS50b1N0cmluZygpO1xuICAgIH1cbiAgICBpZiAodXRpbHMuaXNPYmplY3QoZGF0YSkpIHtcbiAgICAgIHNldENvbnRlbnRUeXBlSWZVbnNldChoZWFkZXJzLCAnYXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04Jyk7XG4gICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoZGF0YSk7XG4gICAgfVxuICAgIHJldHVybiBkYXRhO1xuICB9XSxcblxuICB0cmFuc2Zvcm1SZXNwb25zZTogW2Z1bmN0aW9uIHRyYW5zZm9ybVJlc3BvbnNlKGRhdGEpIHtcbiAgICAvKmVzbGludCBuby1wYXJhbS1yZWFzc2lnbjowKi9cbiAgICBpZiAodHlwZW9mIGRhdGEgPT09ICdzdHJpbmcnKSB7XG4gICAgICB0cnkge1xuICAgICAgICBkYXRhID0gSlNPTi5wYXJzZShkYXRhKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHsgLyogSWdub3JlICovIH1cbiAgICB9XG4gICAgcmV0dXJuIGRhdGE7XG4gIH1dLFxuXG4gIC8qKlxuICAgKiBBIHRpbWVvdXQgaW4gbWlsbGlzZWNvbmRzIHRvIGFib3J0IGEgcmVxdWVzdC4gSWYgc2V0IHRvIDAgKGRlZmF1bHQpIGFcbiAgICogdGltZW91dCBpcyBub3QgY3JlYXRlZC5cbiAgICovXG4gIHRpbWVvdXQ6IDAsXG5cbiAgeHNyZkNvb2tpZU5hbWU6ICdYU1JGLVRPS0VOJyxcbiAgeHNyZkhlYWRlck5hbWU6ICdYLVhTUkYtVE9LRU4nLFxuXG4gIG1heENvbnRlbnRMZW5ndGg6IC0xLFxuXG4gIHZhbGlkYXRlU3RhdHVzOiBmdW5jdGlvbiB2YWxpZGF0ZVN0YXR1cyhzdGF0dXMpIHtcbiAgICByZXR1cm4gc3RhdHVzID49IDIwMCAmJiBzdGF0dXMgPCAzMDA7XG4gIH1cbn07XG5cbmRlZmF1bHRzLmhlYWRlcnMgPSB7XG4gIGNvbW1vbjoge1xuICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbiwgdGV4dC9wbGFpbiwgKi8qJ1xuICB9XG59O1xuXG51dGlscy5mb3JFYWNoKFsnZGVsZXRlJywgJ2dldCcsICdoZWFkJ10sIGZ1bmN0aW9uIGZvckVhY2hNZXRob2ROb0RhdGEobWV0aG9kKSB7XG4gIGRlZmF1bHRzLmhlYWRlcnNbbWV0aG9kXSA9IHt9O1xufSk7XG5cbnV0aWxzLmZvckVhY2goWydwb3N0JywgJ3B1dCcsICdwYXRjaCddLCBmdW5jdGlvbiBmb3JFYWNoTWV0aG9kV2l0aERhdGEobWV0aG9kKSB7XG4gIGRlZmF1bHRzLmhlYWRlcnNbbWV0aG9kXSA9IHV0aWxzLm1lcmdlKERFRkFVTFRfQ09OVEVOVF9UWVBFKTtcbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGRlZmF1bHRzO1xuXG4vKiBXRUJQQUNLIFZBUiBJTkpFQ1RJT04gKi99LmNhbGwodGhpcywgX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi8uLi8uLi9wcm9jZXNzL2Jyb3dzZXIuanMgKi8gXCIuL25vZGVfbW9kdWxlcy9wcm9jZXNzL2Jyb3dzZXIuanNcIikpKVxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9iaW5kLmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvYmluZC5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gYmluZChmbiwgdGhpc0FyZykge1xuICByZXR1cm4gZnVuY3Rpb24gd3JhcCgpIHtcbiAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoKTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3MubGVuZ3RoOyBpKyspIHtcbiAgICAgIGFyZ3NbaV0gPSBhcmd1bWVudHNbaV07XG4gICAgfVxuICAgIHJldHVybiBmbi5hcHBseSh0aGlzQXJnLCBhcmdzKTtcbiAgfTtcbn07XG5cblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvYnRvYS5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2J0b2EuanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG4vLyBidG9hIHBvbHlmaWxsIGZvciBJRTwxMCBjb3VydGVzeSBodHRwczovL2dpdGh1Yi5jb20vZGF2aWRjaGFtYmVycy9CYXNlNjQuanNcblxudmFyIGNoYXJzID0gJ0FCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXowMTIzNDU2Nzg5Ky89JztcblxuZnVuY3Rpb24gRSgpIHtcbiAgdGhpcy5tZXNzYWdlID0gJ1N0cmluZyBjb250YWlucyBhbiBpbnZhbGlkIGNoYXJhY3Rlcic7XG59XG5FLnByb3RvdHlwZSA9IG5ldyBFcnJvcjtcbkUucHJvdG90eXBlLmNvZGUgPSA1O1xuRS5wcm90b3R5cGUubmFtZSA9ICdJbnZhbGlkQ2hhcmFjdGVyRXJyb3InO1xuXG5mdW5jdGlvbiBidG9hKGlucHV0KSB7XG4gIHZhciBzdHIgPSBTdHJpbmcoaW5wdXQpO1xuICB2YXIgb3V0cHV0ID0gJyc7XG4gIGZvciAoXG4gICAgLy8gaW5pdGlhbGl6ZSByZXN1bHQgYW5kIGNvdW50ZXJcbiAgICB2YXIgYmxvY2ssIGNoYXJDb2RlLCBpZHggPSAwLCBtYXAgPSBjaGFycztcbiAgICAvLyBpZiB0aGUgbmV4dCBzdHIgaW5kZXggZG9lcyBub3QgZXhpc3Q6XG4gICAgLy8gICBjaGFuZ2UgdGhlIG1hcHBpbmcgdGFibGUgdG8gXCI9XCJcbiAgICAvLyAgIGNoZWNrIGlmIGQgaGFzIG5vIGZyYWN0aW9uYWwgZGlnaXRzXG4gICAgc3RyLmNoYXJBdChpZHggfCAwKSB8fCAobWFwID0gJz0nLCBpZHggJSAxKTtcbiAgICAvLyBcIjggLSBpZHggJSAxICogOFwiIGdlbmVyYXRlcyB0aGUgc2VxdWVuY2UgMiwgNCwgNiwgOFxuICAgIG91dHB1dCArPSBtYXAuY2hhckF0KDYzICYgYmxvY2sgPj4gOCAtIGlkeCAlIDEgKiA4KVxuICApIHtcbiAgICBjaGFyQ29kZSA9IHN0ci5jaGFyQ29kZUF0KGlkeCArPSAzIC8gNCk7XG4gICAgaWYgKGNoYXJDb2RlID4gMHhGRikge1xuICAgICAgdGhyb3cgbmV3IEUoKTtcbiAgICB9XG4gICAgYmxvY2sgPSBibG9jayA8PCA4IHwgY2hhckNvZGU7XG4gIH1cbiAgcmV0dXJuIG91dHB1dDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBidG9hO1xuXG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2J1aWxkVVJMLmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2J1aWxkVVJMLmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5cbnZhciB1dGlscyA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vLi4vdXRpbHMgKi8gXCIuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvdXRpbHMuanNcIik7XG5cbmZ1bmN0aW9uIGVuY29kZSh2YWwpIHtcbiAgcmV0dXJuIGVuY29kZVVSSUNvbXBvbmVudCh2YWwpLlxuICAgIHJlcGxhY2UoLyU0MC9naSwgJ0AnKS5cbiAgICByZXBsYWNlKC8lM0EvZ2ksICc6JykuXG4gICAgcmVwbGFjZSgvJTI0L2csICckJykuXG4gICAgcmVwbGFjZSgvJTJDL2dpLCAnLCcpLlxuICAgIHJlcGxhY2UoLyUyMC9nLCAnKycpLlxuICAgIHJlcGxhY2UoLyU1Qi9naSwgJ1snKS5cbiAgICByZXBsYWNlKC8lNUQvZ2ksICddJyk7XG59XG5cbi8qKlxuICogQnVpbGQgYSBVUkwgYnkgYXBwZW5kaW5nIHBhcmFtcyB0byB0aGUgZW5kXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHVybCBUaGUgYmFzZSBvZiB0aGUgdXJsIChlLmcuLCBodHRwOi8vd3d3Lmdvb2dsZS5jb20pXG4gKiBAcGFyYW0ge29iamVjdH0gW3BhcmFtc10gVGhlIHBhcmFtcyB0byBiZSBhcHBlbmRlZFxuICogQHJldHVybnMge3N0cmluZ30gVGhlIGZvcm1hdHRlZCB1cmxcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBidWlsZFVSTCh1cmwsIHBhcmFtcywgcGFyYW1zU2VyaWFsaXplcikge1xuICAvKmVzbGludCBuby1wYXJhbS1yZWFzc2lnbjowKi9cbiAgaWYgKCFwYXJhbXMpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG5cbiAgdmFyIHNlcmlhbGl6ZWRQYXJhbXM7XG4gIGlmIChwYXJhbXNTZXJpYWxpemVyKSB7XG4gICAgc2VyaWFsaXplZFBhcmFtcyA9IHBhcmFtc1NlcmlhbGl6ZXIocGFyYW1zKTtcbiAgfSBlbHNlIGlmICh1dGlscy5pc1VSTFNlYXJjaFBhcmFtcyhwYXJhbXMpKSB7XG4gICAgc2VyaWFsaXplZFBhcmFtcyA9IHBhcmFtcy50b1N0cmluZygpO1xuICB9IGVsc2Uge1xuICAgIHZhciBwYXJ0cyA9IFtdO1xuXG4gICAgdXRpbHMuZm9yRWFjaChwYXJhbXMsIGZ1bmN0aW9uIHNlcmlhbGl6ZSh2YWwsIGtleSkge1xuICAgICAgaWYgKHZhbCA9PT0gbnVsbCB8fCB0eXBlb2YgdmFsID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmICh1dGlscy5pc0FycmF5KHZhbCkpIHtcbiAgICAgICAga2V5ID0ga2V5ICsgJ1tdJztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhbCA9IFt2YWxdO1xuICAgICAgfVxuXG4gICAgICB1dGlscy5mb3JFYWNoKHZhbCwgZnVuY3Rpb24gcGFyc2VWYWx1ZSh2KSB7XG4gICAgICAgIGlmICh1dGlscy5pc0RhdGUodikpIHtcbiAgICAgICAgICB2ID0gdi50b0lTT1N0cmluZygpO1xuICAgICAgICB9IGVsc2UgaWYgKHV0aWxzLmlzT2JqZWN0KHYpKSB7XG4gICAgICAgICAgdiA9IEpTT04uc3RyaW5naWZ5KHYpO1xuICAgICAgICB9XG4gICAgICAgIHBhcnRzLnB1c2goZW5jb2RlKGtleSkgKyAnPScgKyBlbmNvZGUodikpO1xuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICBzZXJpYWxpemVkUGFyYW1zID0gcGFydHMuam9pbignJicpO1xuICB9XG5cbiAgaWYgKHNlcmlhbGl6ZWRQYXJhbXMpIHtcbiAgICB1cmwgKz0gKHVybC5pbmRleE9mKCc/JykgPT09IC0xID8gJz8nIDogJyYnKSArIHNlcmlhbGl6ZWRQYXJhbXM7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTtcblxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9jb21iaW5lVVJMcy5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9jb21iaW5lVVJMcy5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG4vKipcbiAqIENyZWF0ZXMgYSBuZXcgVVJMIGJ5IGNvbWJpbmluZyB0aGUgc3BlY2lmaWVkIFVSTHNcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gYmFzZVVSTCBUaGUgYmFzZSBVUkxcbiAqIEBwYXJhbSB7c3RyaW5nfSByZWxhdGl2ZVVSTCBUaGUgcmVsYXRpdmUgVVJMXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBUaGUgY29tYmluZWQgVVJMXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY29tYmluZVVSTHMoYmFzZVVSTCwgcmVsYXRpdmVVUkwpIHtcbiAgcmV0dXJuIHJlbGF0aXZlVVJMXG4gICAgPyBiYXNlVVJMLnJlcGxhY2UoL1xcLyskLywgJycpICsgJy8nICsgcmVsYXRpdmVVUkwucmVwbGFjZSgvXlxcLysvLCAnJylcbiAgICA6IGJhc2VVUkw7XG59O1xuXG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2Nvb2tpZXMuanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9jb29raWVzLmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cblxudmFyIHV0aWxzID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi8uLi91dGlscyAqLyBcIi4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi91dGlscy5qc1wiKTtcblxubW9kdWxlLmV4cG9ydHMgPSAoXG4gIHV0aWxzLmlzU3RhbmRhcmRCcm93c2VyRW52KCkgP1xuXG4gIC8vIFN0YW5kYXJkIGJyb3dzZXIgZW52cyBzdXBwb3J0IGRvY3VtZW50LmNvb2tpZVxuICAoZnVuY3Rpb24gc3RhbmRhcmRCcm93c2VyRW52KCkge1xuICAgIHJldHVybiB7XG4gICAgICB3cml0ZTogZnVuY3Rpb24gd3JpdGUobmFtZSwgdmFsdWUsIGV4cGlyZXMsIHBhdGgsIGRvbWFpbiwgc2VjdXJlKSB7XG4gICAgICAgIHZhciBjb29raWUgPSBbXTtcbiAgICAgICAgY29va2llLnB1c2gobmFtZSArICc9JyArIGVuY29kZVVSSUNvbXBvbmVudCh2YWx1ZSkpO1xuXG4gICAgICAgIGlmICh1dGlscy5pc051bWJlcihleHBpcmVzKSkge1xuICAgICAgICAgIGNvb2tpZS5wdXNoKCdleHBpcmVzPScgKyBuZXcgRGF0ZShleHBpcmVzKS50b0dNVFN0cmluZygpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh1dGlscy5pc1N0cmluZyhwYXRoKSkge1xuICAgICAgICAgIGNvb2tpZS5wdXNoKCdwYXRoPScgKyBwYXRoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh1dGlscy5pc1N0cmluZyhkb21haW4pKSB7XG4gICAgICAgICAgY29va2llLnB1c2goJ2RvbWFpbj0nICsgZG9tYWluKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChzZWN1cmUgPT09IHRydWUpIHtcbiAgICAgICAgICBjb29raWUucHVzaCgnc2VjdXJlJyk7XG4gICAgICAgIH1cblxuICAgICAgICBkb2N1bWVudC5jb29raWUgPSBjb29raWUuam9pbignOyAnKTtcbiAgICAgIH0sXG5cbiAgICAgIHJlYWQ6IGZ1bmN0aW9uIHJlYWQobmFtZSkge1xuICAgICAgICB2YXIgbWF0Y2ggPSBkb2N1bWVudC5jb29raWUubWF0Y2gobmV3IFJlZ0V4cCgnKF58O1xcXFxzKikoJyArIG5hbWUgKyAnKT0oW147XSopJykpO1xuICAgICAgICByZXR1cm4gKG1hdGNoID8gZGVjb2RlVVJJQ29tcG9uZW50KG1hdGNoWzNdKSA6IG51bGwpO1xuICAgICAgfSxcblxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUobmFtZSkge1xuICAgICAgICB0aGlzLndyaXRlKG5hbWUsICcnLCBEYXRlLm5vdygpIC0gODY0MDAwMDApO1xuICAgICAgfVxuICAgIH07XG4gIH0pKCkgOlxuXG4gIC8vIE5vbiBzdGFuZGFyZCBicm93c2VyIGVudiAod2ViIHdvcmtlcnMsIHJlYWN0LW5hdGl2ZSkgbGFjayBuZWVkZWQgc3VwcG9ydC5cbiAgKGZ1bmN0aW9uIG5vblN0YW5kYXJkQnJvd3NlckVudigpIHtcbiAgICByZXR1cm4ge1xuICAgICAgd3JpdGU6IGZ1bmN0aW9uIHdyaXRlKCkge30sXG4gICAgICByZWFkOiBmdW5jdGlvbiByZWFkKCkgeyByZXR1cm4gbnVsbDsgfSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9KSgpXG4pO1xuXG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2lzQWJzb2x1dGVVUkwuanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9pc0Fic29sdXRlVVJMLmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cblxuLyoqXG4gKiBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIHNwZWNpZmllZCBVUkwgaXMgYWJzb2x1dGVcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gdXJsIFRoZSBVUkwgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdGhlIHNwZWNpZmllZCBVUkwgaXMgYWJzb2x1dGUsIG90aGVyd2lzZSBmYWxzZVxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGlzQWJzb2x1dGVVUkwodXJsKSB7XG4gIC8vIEEgVVJMIGlzIGNvbnNpZGVyZWQgYWJzb2x1dGUgaWYgaXQgYmVnaW5zIHdpdGggXCI8c2NoZW1lPjovL1wiIG9yIFwiLy9cIiAocHJvdG9jb2wtcmVsYXRpdmUgVVJMKS5cbiAgLy8gUkZDIDM5ODYgZGVmaW5lcyBzY2hlbWUgbmFtZSBhcyBhIHNlcXVlbmNlIG9mIGNoYXJhY3RlcnMgYmVnaW5uaW5nIHdpdGggYSBsZXR0ZXIgYW5kIGZvbGxvd2VkXG4gIC8vIGJ5IGFueSBjb21iaW5hdGlvbiBvZiBsZXR0ZXJzLCBkaWdpdHMsIHBsdXMsIHBlcmlvZCwgb3IgaHlwaGVuLlxuICByZXR1cm4gL14oW2Etel1bYS16XFxkXFwrXFwtXFwuXSo6KT9cXC9cXC8vaS50ZXN0KHVybCk7XG59O1xuXG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2lzVVJMU2FtZU9yaWdpbi5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvaXNVUkxTYW1lT3JpZ2luLmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG52YXIgdXRpbHMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuLy4uL3V0aWxzICovIFwiLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL3V0aWxzLmpzXCIpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IChcbiAgdXRpbHMuaXNTdGFuZGFyZEJyb3dzZXJFbnYoKSA/XG5cbiAgLy8gU3RhbmRhcmQgYnJvd3NlciBlbnZzIGhhdmUgZnVsbCBzdXBwb3J0IG9mIHRoZSBBUElzIG5lZWRlZCB0byB0ZXN0XG4gIC8vIHdoZXRoZXIgdGhlIHJlcXVlc3QgVVJMIGlzIG9mIHRoZSBzYW1lIG9yaWdpbiBhcyBjdXJyZW50IGxvY2F0aW9uLlxuICAoZnVuY3Rpb24gc3RhbmRhcmRCcm93c2VyRW52KCkge1xuICAgIHZhciBtc2llID0gLyhtc2llfHRyaWRlbnQpL2kudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KTtcbiAgICB2YXIgdXJsUGFyc2luZ05vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgdmFyIG9yaWdpblVSTDtcblxuICAgIC8qKlxuICAgICogUGFyc2UgYSBVUkwgdG8gZGlzY292ZXIgaXQncyBjb21wb25lbnRzXG4gICAgKlxuICAgICogQHBhcmFtIHtTdHJpbmd9IHVybCBUaGUgVVJMIHRvIGJlIHBhcnNlZFxuICAgICogQHJldHVybnMge09iamVjdH1cbiAgICAqL1xuICAgIGZ1bmN0aW9uIHJlc29sdmVVUkwodXJsKSB7XG4gICAgICB2YXIgaHJlZiA9IHVybDtcblxuICAgICAgaWYgKG1zaWUpIHtcbiAgICAgICAgLy8gSUUgbmVlZHMgYXR0cmlidXRlIHNldCB0d2ljZSB0byBub3JtYWxpemUgcHJvcGVydGllc1xuICAgICAgICB1cmxQYXJzaW5nTm9kZS5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCBocmVmKTtcbiAgICAgICAgaHJlZiA9IHVybFBhcnNpbmdOb2RlLmhyZWY7XG4gICAgICB9XG5cbiAgICAgIHVybFBhcnNpbmdOb2RlLnNldEF0dHJpYnV0ZSgnaHJlZicsIGhyZWYpO1xuXG4gICAgICAvLyB1cmxQYXJzaW5nTm9kZSBwcm92aWRlcyB0aGUgVXJsVXRpbHMgaW50ZXJmYWNlIC0gaHR0cDovL3VybC5zcGVjLndoYXR3Zy5vcmcvI3VybHV0aWxzXG4gICAgICByZXR1cm4ge1xuICAgICAgICBocmVmOiB1cmxQYXJzaW5nTm9kZS5ocmVmLFxuICAgICAgICBwcm90b2NvbDogdXJsUGFyc2luZ05vZGUucHJvdG9jb2wgPyB1cmxQYXJzaW5nTm9kZS5wcm90b2NvbC5yZXBsYWNlKC86JC8sICcnKSA6ICcnLFxuICAgICAgICBob3N0OiB1cmxQYXJzaW5nTm9kZS5ob3N0LFxuICAgICAgICBzZWFyY2g6IHVybFBhcnNpbmdOb2RlLnNlYXJjaCA/IHVybFBhcnNpbmdOb2RlLnNlYXJjaC5yZXBsYWNlKC9eXFw/LywgJycpIDogJycsXG4gICAgICAgIGhhc2g6IHVybFBhcnNpbmdOb2RlLmhhc2ggPyB1cmxQYXJzaW5nTm9kZS5oYXNoLnJlcGxhY2UoL14jLywgJycpIDogJycsXG4gICAgICAgIGhvc3RuYW1lOiB1cmxQYXJzaW5nTm9kZS5ob3N0bmFtZSxcbiAgICAgICAgcG9ydDogdXJsUGFyc2luZ05vZGUucG9ydCxcbiAgICAgICAgcGF0aG5hbWU6ICh1cmxQYXJzaW5nTm9kZS5wYXRobmFtZS5jaGFyQXQoMCkgPT09ICcvJykgP1xuICAgICAgICAgICAgICAgICAgdXJsUGFyc2luZ05vZGUucGF0aG5hbWUgOlxuICAgICAgICAgICAgICAgICAgJy8nICsgdXJsUGFyc2luZ05vZGUucGF0aG5hbWVcbiAgICAgIH07XG4gICAgfVxuXG4gICAgb3JpZ2luVVJMID0gcmVzb2x2ZVVSTCh3aW5kb3cubG9jYXRpb24uaHJlZik7XG5cbiAgICAvKipcbiAgICAqIERldGVybWluZSBpZiBhIFVSTCBzaGFyZXMgdGhlIHNhbWUgb3JpZ2luIGFzIHRoZSBjdXJyZW50IGxvY2F0aW9uXG4gICAgKlxuICAgICogQHBhcmFtIHtTdHJpbmd9IHJlcXVlc3RVUkwgVGhlIFVSTCB0byB0ZXN0XG4gICAgKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiBVUkwgc2hhcmVzIHRoZSBzYW1lIG9yaWdpbiwgb3RoZXJ3aXNlIGZhbHNlXG4gICAgKi9cbiAgICByZXR1cm4gZnVuY3Rpb24gaXNVUkxTYW1lT3JpZ2luKHJlcXVlc3RVUkwpIHtcbiAgICAgIHZhciBwYXJzZWQgPSAodXRpbHMuaXNTdHJpbmcocmVxdWVzdFVSTCkpID8gcmVzb2x2ZVVSTChyZXF1ZXN0VVJMKSA6IHJlcXVlc3RVUkw7XG4gICAgICByZXR1cm4gKHBhcnNlZC5wcm90b2NvbCA9PT0gb3JpZ2luVVJMLnByb3RvY29sICYmXG4gICAgICAgICAgICBwYXJzZWQuaG9zdCA9PT0gb3JpZ2luVVJMLmhvc3QpO1xuICAgIH07XG4gIH0pKCkgOlxuXG4gIC8vIE5vbiBzdGFuZGFyZCBicm93c2VyIGVudnMgKHdlYiB3b3JrZXJzLCByZWFjdC1uYXRpdmUpIGxhY2sgbmVlZGVkIHN1cHBvcnQuXG4gIChmdW5jdGlvbiBub25TdGFuZGFyZEJyb3dzZXJFbnYoKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIGlzVVJMU2FtZU9yaWdpbigpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH07XG4gIH0pKClcbik7XG5cblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvbm9ybWFsaXplSGVhZGVyTmFtZS5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL25vcm1hbGl6ZUhlYWRlck5hbWUuanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG52YXIgdXRpbHMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuLi91dGlscyAqLyBcIi4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi91dGlscy5qc1wiKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBub3JtYWxpemVIZWFkZXJOYW1lKGhlYWRlcnMsIG5vcm1hbGl6ZWROYW1lKSB7XG4gIHV0aWxzLmZvckVhY2goaGVhZGVycywgZnVuY3Rpb24gcHJvY2Vzc0hlYWRlcih2YWx1ZSwgbmFtZSkge1xuICAgIGlmIChuYW1lICE9PSBub3JtYWxpemVkTmFtZSAmJiBuYW1lLnRvVXBwZXJDYXNlKCkgPT09IG5vcm1hbGl6ZWROYW1lLnRvVXBwZXJDYXNlKCkpIHtcbiAgICAgIGhlYWRlcnNbbm9ybWFsaXplZE5hbWVdID0gdmFsdWU7XG4gICAgICBkZWxldGUgaGVhZGVyc1tuYW1lXTtcbiAgICB9XG4gIH0pO1xufTtcblxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9wYXJzZUhlYWRlcnMuanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL3BhcnNlSGVhZGVycy5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cblxudmFyIHV0aWxzID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi8uLi91dGlscyAqLyBcIi4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi91dGlscy5qc1wiKTtcblxuLy8gSGVhZGVycyB3aG9zZSBkdXBsaWNhdGVzIGFyZSBpZ25vcmVkIGJ5IG5vZGVcbi8vIGMuZi4gaHR0cHM6Ly9ub2RlanMub3JnL2FwaS9odHRwLmh0bWwjaHR0cF9tZXNzYWdlX2hlYWRlcnNcbnZhciBpZ25vcmVEdXBsaWNhdGVPZiA9IFtcbiAgJ2FnZScsICdhdXRob3JpemF0aW9uJywgJ2NvbnRlbnQtbGVuZ3RoJywgJ2NvbnRlbnQtdHlwZScsICdldGFnJyxcbiAgJ2V4cGlyZXMnLCAnZnJvbScsICdob3N0JywgJ2lmLW1vZGlmaWVkLXNpbmNlJywgJ2lmLXVubW9kaWZpZWQtc2luY2UnLFxuICAnbGFzdC1tb2RpZmllZCcsICdsb2NhdGlvbicsICdtYXgtZm9yd2FyZHMnLCAncHJveHktYXV0aG9yaXphdGlvbicsXG4gICdyZWZlcmVyJywgJ3JldHJ5LWFmdGVyJywgJ3VzZXItYWdlbnQnXG5dO1xuXG4vKipcbiAqIFBhcnNlIGhlYWRlcnMgaW50byBhbiBvYmplY3RcbiAqXG4gKiBgYGBcbiAqIERhdGU6IFdlZCwgMjcgQXVnIDIwMTQgMDg6NTg6NDkgR01UXG4gKiBDb250ZW50LVR5cGU6IGFwcGxpY2F0aW9uL2pzb25cbiAqIENvbm5lY3Rpb246IGtlZXAtYWxpdmVcbiAqIFRyYW5zZmVyLUVuY29kaW5nOiBjaHVua2VkXG4gKiBgYGBcbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gaGVhZGVycyBIZWFkZXJzIG5lZWRpbmcgdG8gYmUgcGFyc2VkXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBIZWFkZXJzIHBhcnNlZCBpbnRvIGFuIG9iamVjdFxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHBhcnNlSGVhZGVycyhoZWFkZXJzKSB7XG4gIHZhciBwYXJzZWQgPSB7fTtcbiAgdmFyIGtleTtcbiAgdmFyIHZhbDtcbiAgdmFyIGk7XG5cbiAgaWYgKCFoZWFkZXJzKSB7IHJldHVybiBwYXJzZWQ7IH1cblxuICB1dGlscy5mb3JFYWNoKGhlYWRlcnMuc3BsaXQoJ1xcbicpLCBmdW5jdGlvbiBwYXJzZXIobGluZSkge1xuICAgIGkgPSBsaW5lLmluZGV4T2YoJzonKTtcbiAgICBrZXkgPSB1dGlscy50cmltKGxpbmUuc3Vic3RyKDAsIGkpKS50b0xvd2VyQ2FzZSgpO1xuICAgIHZhbCA9IHV0aWxzLnRyaW0obGluZS5zdWJzdHIoaSArIDEpKTtcblxuICAgIGlmIChrZXkpIHtcbiAgICAgIGlmIChwYXJzZWRba2V5XSAmJiBpZ25vcmVEdXBsaWNhdGVPZi5pbmRleE9mKGtleSkgPj0gMCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAoa2V5ID09PSAnc2V0LWNvb2tpZScpIHtcbiAgICAgICAgcGFyc2VkW2tleV0gPSAocGFyc2VkW2tleV0gPyBwYXJzZWRba2V5XSA6IFtdKS5jb25jYXQoW3ZhbF0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcGFyc2VkW2tleV0gPSBwYXJzZWRba2V5XSA/IHBhcnNlZFtrZXldICsgJywgJyArIHZhbCA6IHZhbDtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBwYXJzZWQ7XG59O1xuXG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL3NwcmVhZC5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvc3ByZWFkLmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG4vKipcbiAqIFN5bnRhY3RpYyBzdWdhciBmb3IgaW52b2tpbmcgYSBmdW5jdGlvbiBhbmQgZXhwYW5kaW5nIGFuIGFycmF5IGZvciBhcmd1bWVudHMuXG4gKlxuICogQ29tbW9uIHVzZSBjYXNlIHdvdWxkIGJlIHRvIHVzZSBgRnVuY3Rpb24ucHJvdG90eXBlLmFwcGx5YC5cbiAqXG4gKiAgYGBganNcbiAqICBmdW5jdGlvbiBmKHgsIHksIHopIHt9XG4gKiAgdmFyIGFyZ3MgPSBbMSwgMiwgM107XG4gKiAgZi5hcHBseShudWxsLCBhcmdzKTtcbiAqICBgYGBcbiAqXG4gKiBXaXRoIGBzcHJlYWRgIHRoaXMgZXhhbXBsZSBjYW4gYmUgcmUtd3JpdHRlbi5cbiAqXG4gKiAgYGBganNcbiAqICBzcHJlYWQoZnVuY3Rpb24oeCwgeSwgeikge30pKFsxLCAyLCAzXSk7XG4gKiAgYGBgXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2tcbiAqIEByZXR1cm5zIHtGdW5jdGlvbn1cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBzcHJlYWQoY2FsbGJhY2spIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIHdyYXAoYXJyKSB7XG4gICAgcmV0dXJuIGNhbGxiYWNrLmFwcGx5KG51bGwsIGFycik7XG4gIH07XG59O1xuXG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi91dGlscy5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL3V0aWxzLmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG52YXIgYmluZCA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vaGVscGVycy9iaW5kICovIFwiLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvYmluZC5qc1wiKTtcbnZhciBpc0J1ZmZlciA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIGlzLWJ1ZmZlciAqLyBcIi4vbm9kZV9tb2R1bGVzL2lzLWJ1ZmZlci9pbmRleC5qc1wiKTtcblxuLypnbG9iYWwgdG9TdHJpbmc6dHJ1ZSovXG5cbi8vIHV0aWxzIGlzIGEgbGlicmFyeSBvZiBnZW5lcmljIGhlbHBlciBmdW5jdGlvbnMgbm9uLXNwZWNpZmljIHRvIGF4aW9zXG5cbnZhciB0b1N0cmluZyA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmc7XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYW4gQXJyYXlcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhbiBBcnJheSwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzQXJyYXkodmFsKSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKHZhbCkgPT09ICdbb2JqZWN0IEFycmF5XSc7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYW4gQXJyYXlCdWZmZXJcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhbiBBcnJheUJ1ZmZlciwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzQXJyYXlCdWZmZXIodmFsKSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKHZhbCkgPT09ICdbb2JqZWN0IEFycmF5QnVmZmVyXSc7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBGb3JtRGF0YVxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGFuIEZvcm1EYXRhLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNGb3JtRGF0YSh2YWwpIHtcbiAgcmV0dXJuICh0eXBlb2YgRm9ybURhdGEgIT09ICd1bmRlZmluZWQnKSAmJiAodmFsIGluc3RhbmNlb2YgRm9ybURhdGEpO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgdmlldyBvbiBhbiBBcnJheUJ1ZmZlclxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgdmlldyBvbiBhbiBBcnJheUJ1ZmZlciwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzQXJyYXlCdWZmZXJWaWV3KHZhbCkge1xuICB2YXIgcmVzdWx0O1xuICBpZiAoKHR5cGVvZiBBcnJheUJ1ZmZlciAhPT0gJ3VuZGVmaW5lZCcpICYmIChBcnJheUJ1ZmZlci5pc1ZpZXcpKSB7XG4gICAgcmVzdWx0ID0gQXJyYXlCdWZmZXIuaXNWaWV3KHZhbCk7XG4gIH0gZWxzZSB7XG4gICAgcmVzdWx0ID0gKHZhbCkgJiYgKHZhbC5idWZmZXIpICYmICh2YWwuYnVmZmVyIGluc3RhbmNlb2YgQXJyYXlCdWZmZXIpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBTdHJpbmdcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIFN0cmluZywgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzU3RyaW5nKHZhbCkge1xuICByZXR1cm4gdHlwZW9mIHZhbCA9PT0gJ3N0cmluZyc7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBOdW1iZXJcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIE51bWJlciwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzTnVtYmVyKHZhbCkge1xuICByZXR1cm4gdHlwZW9mIHZhbCA9PT0gJ251bWJlcic7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgdW5kZWZpbmVkXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdGhlIHZhbHVlIGlzIHVuZGVmaW5lZCwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzVW5kZWZpbmVkKHZhbCkge1xuICByZXR1cm4gdHlwZW9mIHZhbCA9PT0gJ3VuZGVmaW5lZCc7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYW4gT2JqZWN0XG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYW4gT2JqZWN0LCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNPYmplY3QodmFsKSB7XG4gIHJldHVybiB2YWwgIT09IG51bGwgJiYgdHlwZW9mIHZhbCA9PT0gJ29iamVjdCc7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBEYXRlXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBEYXRlLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNEYXRlKHZhbCkge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbCh2YWwpID09PSAnW29iamVjdCBEYXRlXSc7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBGaWxlXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBGaWxlLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNGaWxlKHZhbCkge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbCh2YWwpID09PSAnW29iamVjdCBGaWxlXSc7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBCbG9iXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBCbG9iLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNCbG9iKHZhbCkge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbCh2YWwpID09PSAnW29iamVjdCBCbG9iXSc7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBGdW5jdGlvblxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgRnVuY3Rpb24sIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0Z1bmN0aW9uKHZhbCkge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbCh2YWwpID09PSAnW29iamVjdCBGdW5jdGlvbl0nO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgU3RyZWFtXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBTdHJlYW0sIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc1N0cmVhbSh2YWwpIHtcbiAgcmV0dXJuIGlzT2JqZWN0KHZhbCkgJiYgaXNGdW5jdGlvbih2YWwucGlwZSk7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBVUkxTZWFyY2hQYXJhbXMgb2JqZWN0XG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBVUkxTZWFyY2hQYXJhbXMgb2JqZWN0LCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNVUkxTZWFyY2hQYXJhbXModmFsKSB7XG4gIHJldHVybiB0eXBlb2YgVVJMU2VhcmNoUGFyYW1zICE9PSAndW5kZWZpbmVkJyAmJiB2YWwgaW5zdGFuY2VvZiBVUkxTZWFyY2hQYXJhbXM7XG59XG5cbi8qKlxuICogVHJpbSBleGNlc3Mgd2hpdGVzcGFjZSBvZmYgdGhlIGJlZ2lubmluZyBhbmQgZW5kIG9mIGEgc3RyaW5nXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHN0ciBUaGUgU3RyaW5nIHRvIHRyaW1cbiAqIEByZXR1cm5zIHtTdHJpbmd9IFRoZSBTdHJpbmcgZnJlZWQgb2YgZXhjZXNzIHdoaXRlc3BhY2VcbiAqL1xuZnVuY3Rpb24gdHJpbShzdHIpIHtcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKC9eXFxzKi8sICcnKS5yZXBsYWNlKC9cXHMqJC8sICcnKTtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgd2UncmUgcnVubmluZyBpbiBhIHN0YW5kYXJkIGJyb3dzZXIgZW52aXJvbm1lbnRcbiAqXG4gKiBUaGlzIGFsbG93cyBheGlvcyB0byBydW4gaW4gYSB3ZWIgd29ya2VyLCBhbmQgcmVhY3QtbmF0aXZlLlxuICogQm90aCBlbnZpcm9ubWVudHMgc3VwcG9ydCBYTUxIdHRwUmVxdWVzdCwgYnV0IG5vdCBmdWxseSBzdGFuZGFyZCBnbG9iYWxzLlxuICpcbiAqIHdlYiB3b3JrZXJzOlxuICogIHR5cGVvZiB3aW5kb3cgLT4gdW5kZWZpbmVkXG4gKiAgdHlwZW9mIGRvY3VtZW50IC0+IHVuZGVmaW5lZFxuICpcbiAqIHJlYWN0LW5hdGl2ZTpcbiAqICBuYXZpZ2F0b3IucHJvZHVjdCAtPiAnUmVhY3ROYXRpdmUnXG4gKi9cbmZ1bmN0aW9uIGlzU3RhbmRhcmRCcm93c2VyRW52KCkge1xuICBpZiAodHlwZW9mIG5hdmlnYXRvciAhPT0gJ3VuZGVmaW5lZCcgJiYgbmF2aWdhdG9yLnByb2R1Y3QgPT09ICdSZWFjdE5hdGl2ZScpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgcmV0dXJuIChcbiAgICB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJlxuICAgIHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCdcbiAgKTtcbn1cblxuLyoqXG4gKiBJdGVyYXRlIG92ZXIgYW4gQXJyYXkgb3IgYW4gT2JqZWN0IGludm9raW5nIGEgZnVuY3Rpb24gZm9yIGVhY2ggaXRlbS5cbiAqXG4gKiBJZiBgb2JqYCBpcyBhbiBBcnJheSBjYWxsYmFjayB3aWxsIGJlIGNhbGxlZCBwYXNzaW5nXG4gKiB0aGUgdmFsdWUsIGluZGV4LCBhbmQgY29tcGxldGUgYXJyYXkgZm9yIGVhY2ggaXRlbS5cbiAqXG4gKiBJZiAnb2JqJyBpcyBhbiBPYmplY3QgY2FsbGJhY2sgd2lsbCBiZSBjYWxsZWQgcGFzc2luZ1xuICogdGhlIHZhbHVlLCBrZXksIGFuZCBjb21wbGV0ZSBvYmplY3QgZm9yIGVhY2ggcHJvcGVydHkuXG4gKlxuICogQHBhcmFtIHtPYmplY3R8QXJyYXl9IG9iaiBUaGUgb2JqZWN0IHRvIGl0ZXJhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuIFRoZSBjYWxsYmFjayB0byBpbnZva2UgZm9yIGVhY2ggaXRlbVxuICovXG5mdW5jdGlvbiBmb3JFYWNoKG9iaiwgZm4pIHtcbiAgLy8gRG9uJ3QgYm90aGVyIGlmIG5vIHZhbHVlIHByb3ZpZGVkXG4gIGlmIChvYmogPT09IG51bGwgfHwgdHlwZW9mIG9iaiA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvLyBGb3JjZSBhbiBhcnJheSBpZiBub3QgYWxyZWFkeSBzb21ldGhpbmcgaXRlcmFibGVcbiAgaWYgKHR5cGVvZiBvYmogIT09ICdvYmplY3QnKSB7XG4gICAgLyplc2xpbnQgbm8tcGFyYW0tcmVhc3NpZ246MCovXG4gICAgb2JqID0gW29ial07XG4gIH1cblxuICBpZiAoaXNBcnJheShvYmopKSB7XG4gICAgLy8gSXRlcmF0ZSBvdmVyIGFycmF5IHZhbHVlc1xuICAgIGZvciAodmFyIGkgPSAwLCBsID0gb2JqLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgZm4uY2FsbChudWxsLCBvYmpbaV0sIGksIG9iaik7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIC8vIEl0ZXJhdGUgb3ZlciBvYmplY3Qga2V5c1xuICAgIGZvciAodmFyIGtleSBpbiBvYmopIHtcbiAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSB7XG4gICAgICAgIGZuLmNhbGwobnVsbCwgb2JqW2tleV0sIGtleSwgb2JqKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBBY2NlcHRzIHZhcmFyZ3MgZXhwZWN0aW5nIGVhY2ggYXJndW1lbnQgdG8gYmUgYW4gb2JqZWN0LCB0aGVuXG4gKiBpbW11dGFibHkgbWVyZ2VzIHRoZSBwcm9wZXJ0aWVzIG9mIGVhY2ggb2JqZWN0IGFuZCByZXR1cm5zIHJlc3VsdC5cbiAqXG4gKiBXaGVuIG11bHRpcGxlIG9iamVjdHMgY29udGFpbiB0aGUgc2FtZSBrZXkgdGhlIGxhdGVyIG9iamVjdCBpblxuICogdGhlIGFyZ3VtZW50cyBsaXN0IHdpbGwgdGFrZSBwcmVjZWRlbmNlLlxuICpcbiAqIEV4YW1wbGU6XG4gKlxuICogYGBganNcbiAqIHZhciByZXN1bHQgPSBtZXJnZSh7Zm9vOiAxMjN9LCB7Zm9vOiA0NTZ9KTtcbiAqIGNvbnNvbGUubG9nKHJlc3VsdC5mb28pOyAvLyBvdXRwdXRzIDQ1NlxuICogYGBgXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IG9iajEgT2JqZWN0IHRvIG1lcmdlXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXN1bHQgb2YgYWxsIG1lcmdlIHByb3BlcnRpZXNcbiAqL1xuZnVuY3Rpb24gbWVyZ2UoLyogb2JqMSwgb2JqMiwgb2JqMywgLi4uICovKSB7XG4gIHZhciByZXN1bHQgPSB7fTtcbiAgZnVuY3Rpb24gYXNzaWduVmFsdWUodmFsLCBrZXkpIHtcbiAgICBpZiAodHlwZW9mIHJlc3VsdFtrZXldID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgdmFsID09PSAnb2JqZWN0Jykge1xuICAgICAgcmVzdWx0W2tleV0gPSBtZXJnZShyZXN1bHRba2V5XSwgdmFsKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzdWx0W2tleV0gPSB2YWw7XG4gICAgfVxuICB9XG5cbiAgZm9yICh2YXIgaSA9IDAsIGwgPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgZm9yRWFjaChhcmd1bWVudHNbaV0sIGFzc2lnblZhbHVlKTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIEV4dGVuZHMgb2JqZWN0IGEgYnkgbXV0YWJseSBhZGRpbmcgdG8gaXQgdGhlIHByb3BlcnRpZXMgb2Ygb2JqZWN0IGIuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGEgVGhlIG9iamVjdCB0byBiZSBleHRlbmRlZFxuICogQHBhcmFtIHtPYmplY3R9IGIgVGhlIG9iamVjdCB0byBjb3B5IHByb3BlcnRpZXMgZnJvbVxuICogQHBhcmFtIHtPYmplY3R9IHRoaXNBcmcgVGhlIG9iamVjdCB0byBiaW5kIGZ1bmN0aW9uIHRvXG4gKiBAcmV0dXJuIHtPYmplY3R9IFRoZSByZXN1bHRpbmcgdmFsdWUgb2Ygb2JqZWN0IGFcbiAqL1xuZnVuY3Rpb24gZXh0ZW5kKGEsIGIsIHRoaXNBcmcpIHtcbiAgZm9yRWFjaChiLCBmdW5jdGlvbiBhc3NpZ25WYWx1ZSh2YWwsIGtleSkge1xuICAgIGlmICh0aGlzQXJnICYmIHR5cGVvZiB2YWwgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGFba2V5XSA9IGJpbmQodmFsLCB0aGlzQXJnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYVtrZXldID0gdmFsO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiBhO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgaXNBcnJheTogaXNBcnJheSxcbiAgaXNBcnJheUJ1ZmZlcjogaXNBcnJheUJ1ZmZlcixcbiAgaXNCdWZmZXI6IGlzQnVmZmVyLFxuICBpc0Zvcm1EYXRhOiBpc0Zvcm1EYXRhLFxuICBpc0FycmF5QnVmZmVyVmlldzogaXNBcnJheUJ1ZmZlclZpZXcsXG4gIGlzU3RyaW5nOiBpc1N0cmluZyxcbiAgaXNOdW1iZXI6IGlzTnVtYmVyLFxuICBpc09iamVjdDogaXNPYmplY3QsXG4gIGlzVW5kZWZpbmVkOiBpc1VuZGVmaW5lZCxcbiAgaXNEYXRlOiBpc0RhdGUsXG4gIGlzRmlsZTogaXNGaWxlLFxuICBpc0Jsb2I6IGlzQmxvYixcbiAgaXNGdW5jdGlvbjogaXNGdW5jdGlvbixcbiAgaXNTdHJlYW06IGlzU3RyZWFtLFxuICBpc1VSTFNlYXJjaFBhcmFtczogaXNVUkxTZWFyY2hQYXJhbXMsXG4gIGlzU3RhbmRhcmRCcm93c2VyRW52OiBpc1N0YW5kYXJkQnJvd3NlckVudixcbiAgZm9yRWFjaDogZm9yRWFjaCxcbiAgbWVyZ2U6IG1lcmdlLFxuICBleHRlbmQ6IGV4dGVuZCxcbiAgdHJpbTogdHJpbVxufTtcblxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL25vZGVfbW9kdWxlcy9pcy1idWZmZXIvaW5kZXguanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vbm9kZV9tb2R1bGVzL2lzLWJ1ZmZlci9pbmRleC5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxuLyohXG4gKiBEZXRlcm1pbmUgaWYgYW4gb2JqZWN0IGlzIGEgQnVmZmVyXG4gKlxuICogQGF1dGhvciAgIEZlcm9zcyBBYm91a2hhZGlqZWggPGh0dHBzOi8vZmVyb3NzLm9yZz5cbiAqIEBsaWNlbnNlICBNSVRcbiAqL1xuXG4vLyBUaGUgX2lzQnVmZmVyIGNoZWNrIGlzIGZvciBTYWZhcmkgNS03IHN1cHBvcnQsIGJlY2F1c2UgaXQncyBtaXNzaW5nXG4vLyBPYmplY3QucHJvdG90eXBlLmNvbnN0cnVjdG9yLiBSZW1vdmUgdGhpcyBldmVudHVhbGx5XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChvYmopIHtcbiAgcmV0dXJuIG9iaiAhPSBudWxsICYmIChpc0J1ZmZlcihvYmopIHx8IGlzU2xvd0J1ZmZlcihvYmopIHx8ICEhb2JqLl9pc0J1ZmZlcilcbn1cblxuZnVuY3Rpb24gaXNCdWZmZXIgKG9iaikge1xuICByZXR1cm4gISFvYmouY29uc3RydWN0b3IgJiYgdHlwZW9mIG9iai5jb25zdHJ1Y3Rvci5pc0J1ZmZlciA9PT0gJ2Z1bmN0aW9uJyAmJiBvYmouY29uc3RydWN0b3IuaXNCdWZmZXIob2JqKVxufVxuXG4vLyBGb3IgTm9kZSB2MC4xMCBzdXBwb3J0LiBSZW1vdmUgdGhpcyBldmVudHVhbGx5LlxuZnVuY3Rpb24gaXNTbG93QnVmZmVyIChvYmopIHtcbiAgcmV0dXJuIHR5cGVvZiBvYmoucmVhZEZsb2F0TEUgPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIG9iai5zbGljZSA9PT0gJ2Z1bmN0aW9uJyAmJiBpc0J1ZmZlcihvYmouc2xpY2UoMCwgMCkpXG59XG5cblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9ub2RlX21vZHVsZXMvcHJvY2Vzcy9icm93c2VyLmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL25vZGVfbW9kdWxlcy9wcm9jZXNzL2Jyb3dzZXIuanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cbi8vIHNoaW0gZm9yIHVzaW5nIHByb2Nlc3MgaW4gYnJvd3NlclxudmFyIHByb2Nlc3MgPSBtb2R1bGUuZXhwb3J0cyA9IHt9O1xuXG4vLyBjYWNoZWQgZnJvbSB3aGF0ZXZlciBnbG9iYWwgaXMgcHJlc2VudCBzbyB0aGF0IHRlc3QgcnVubmVycyB0aGF0IHN0dWIgaXRcbi8vIGRvbid0IGJyZWFrIHRoaW5ncy4gIEJ1dCB3ZSBuZWVkIHRvIHdyYXAgaXQgaW4gYSB0cnkgY2F0Y2ggaW4gY2FzZSBpdCBpc1xuLy8gd3JhcHBlZCBpbiBzdHJpY3QgbW9kZSBjb2RlIHdoaWNoIGRvZXNuJ3QgZGVmaW5lIGFueSBnbG9iYWxzLiAgSXQncyBpbnNpZGUgYVxuLy8gZnVuY3Rpb24gYmVjYXVzZSB0cnkvY2F0Y2hlcyBkZW9wdGltaXplIGluIGNlcnRhaW4gZW5naW5lcy5cblxudmFyIGNhY2hlZFNldFRpbWVvdXQ7XG52YXIgY2FjaGVkQ2xlYXJUaW1lb3V0O1xuXG5mdW5jdGlvbiBkZWZhdWx0U2V0VGltb3V0KCkge1xuICAgIHRocm93IG5ldyBFcnJvcignc2V0VGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuZnVuY3Rpb24gZGVmYXVsdENsZWFyVGltZW91dCAoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdjbGVhclRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbihmdW5jdGlvbiAoKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBzZXRUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBjbGVhclRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgfVxufSAoKSlcbmZ1bmN0aW9uIHJ1blRpbWVvdXQoZnVuKSB7XG4gICAgaWYgKGNhY2hlZFNldFRpbWVvdXQgPT09IHNldFRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIC8vIGlmIHNldFRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRTZXRUaW1lb3V0ID09PSBkZWZhdWx0U2V0VGltb3V0IHx8ICFjYWNoZWRTZXRUaW1lb3V0KSAmJiBzZXRUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfSBjYXRjaChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbChudWxsLCBmdW4sIDApO1xuICAgICAgICB9IGNhdGNoKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3JcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwodGhpcywgZnVuLCAwKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG59XG5mdW5jdGlvbiBydW5DbGVhclRpbWVvdXQobWFya2VyKSB7XG4gICAgaWYgKGNhY2hlZENsZWFyVGltZW91dCA9PT0gY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIC8vIGlmIGNsZWFyVGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZENsZWFyVGltZW91dCA9PT0gZGVmYXVsdENsZWFyVGltZW91dCB8fCAhY2FjaGVkQ2xlYXJUaW1lb3V0KSAmJiBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0ICB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKG51bGwsIG1hcmtlcik7XG4gICAgICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3IuXG4gICAgICAgICAgICAvLyBTb21lIHZlcnNpb25zIG9mIEkuRS4gaGF2ZSBkaWZmZXJlbnQgcnVsZXMgZm9yIGNsZWFyVGltZW91dCB2cyBzZXRUaW1lb3V0XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwodGhpcywgbWFya2VyKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG5cbn1cbnZhciBxdWV1ZSA9IFtdO1xudmFyIGRyYWluaW5nID0gZmFsc2U7XG52YXIgY3VycmVudFF1ZXVlO1xudmFyIHF1ZXVlSW5kZXggPSAtMTtcblxuZnVuY3Rpb24gY2xlYW5VcE5leHRUaWNrKCkge1xuICAgIGlmICghZHJhaW5pbmcgfHwgIWN1cnJlbnRRdWV1ZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgaWYgKGN1cnJlbnRRdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgcXVldWUgPSBjdXJyZW50UXVldWUuY29uY2F0KHF1ZXVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgfVxuICAgIGlmIChxdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgZHJhaW5RdWV1ZSgpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZHJhaW5RdWV1ZSgpIHtcbiAgICBpZiAoZHJhaW5pbmcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgdGltZW91dCA9IHJ1blRpbWVvdXQoY2xlYW5VcE5leHRUaWNrKTtcbiAgICBkcmFpbmluZyA9IHRydWU7XG5cbiAgICB2YXIgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIHdoaWxlKGxlbikge1xuICAgICAgICBjdXJyZW50UXVldWUgPSBxdWV1ZTtcbiAgICAgICAgcXVldWUgPSBbXTtcbiAgICAgICAgd2hpbGUgKCsrcXVldWVJbmRleCA8IGxlbikge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRRdWV1ZSkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRRdWV1ZVtxdWV1ZUluZGV4XS5ydW4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgICAgIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB9XG4gICAgY3VycmVudFF1ZXVlID0gbnVsbDtcbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIHJ1bkNsZWFyVGltZW91dCh0aW1lb3V0KTtcbn1cblxucHJvY2Vzcy5uZXh0VGljayA9IGZ1bmN0aW9uIChmdW4pIHtcbiAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoIC0gMSk7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBhcmdzW2kgLSAxXSA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBxdWV1ZS5wdXNoKG5ldyBJdGVtKGZ1biwgYXJncykpO1xuICAgIGlmIChxdWV1ZS5sZW5ndGggPT09IDEgJiYgIWRyYWluaW5nKSB7XG4gICAgICAgIHJ1blRpbWVvdXQoZHJhaW5RdWV1ZSk7XG4gICAgfVxufTtcblxuLy8gdjggbGlrZXMgcHJlZGljdGlibGUgb2JqZWN0c1xuZnVuY3Rpb24gSXRlbShmdW4sIGFycmF5KSB7XG4gICAgdGhpcy5mdW4gPSBmdW47XG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xufVxuSXRlbS5wcm90b3R5cGUucnVuID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuZnVuLmFwcGx5KG51bGwsIHRoaXMuYXJyYXkpO1xufTtcbnByb2Nlc3MudGl0bGUgPSAnYnJvd3Nlcic7XG5wcm9jZXNzLmJyb3dzZXIgPSB0cnVlO1xucHJvY2Vzcy5lbnYgPSB7fTtcbnByb2Nlc3MuYXJndiA9IFtdO1xucHJvY2Vzcy52ZXJzaW9uID0gJyc7IC8vIGVtcHR5IHN0cmluZyB0byBhdm9pZCByZWdleHAgaXNzdWVzXG5wcm9jZXNzLnZlcnNpb25zID0ge307XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5wcm9jZXNzLm9uID0gbm9vcDtcbnByb2Nlc3MuYWRkTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5vbmNlID0gbm9vcDtcbnByb2Nlc3Mub2ZmID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVBbGxMaXN0ZW5lcnMgPSBub29wO1xucHJvY2Vzcy5lbWl0ID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZE9uY2VMaXN0ZW5lciA9IG5vb3A7XG5cbnByb2Nlc3MubGlzdGVuZXJzID0gZnVuY3Rpb24gKG5hbWUpIHsgcmV0dXJuIFtdIH1cblxucHJvY2Vzcy5iaW5kaW5nID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuYmluZGluZyBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xuXG5wcm9jZXNzLmN3ZCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICcvJyB9O1xucHJvY2Vzcy5jaGRpciA9IGZ1bmN0aW9uIChkaXIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuY2hkaXIgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcbnByb2Nlc3MudW1hc2sgPSBmdW5jdGlvbigpIHsgcmV0dXJuIDA7IH07XG5cblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9zcmMvY2hhbm5lbHMvY2hhbm5lbC5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vc3JjL2NoYW5uZWxzL2NoYW5uZWwuanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBleHBvcnRzIHByb3ZpZGVkOiBDaGFubmVsICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBfX3dlYnBhY2tfZXhwb3J0c19fLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yKF9fd2VicGFja19leHBvcnRzX18pO1xuLyogaGFybW9ueSBleHBvcnQgKGJpbmRpbmcpICovIF9fd2VicGFja19yZXF1aXJlX18uZChfX3dlYnBhY2tfZXhwb3J0c19fLCBcIkNoYW5uZWxcIiwgZnVuY3Rpb24oKSB7IHJldHVybiBDaGFubmVsOyB9KTtcbi8qIGhhcm1vbnkgaW1wb3J0ICovIHZhciBfZXZlbnRzX2Rpc3BhdGNoZXJfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfXyA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4uL2V2ZW50cy9kaXNwYXRjaGVyICovIFwiLi9zcmMvZXZlbnRzL2Rpc3BhdGNoZXIuanNcIik7XG5mdW5jdGlvbiBfdHlwZW9mKG9iaikgeyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9OyB9IGVsc2UgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07IH0gcmV0dXJuIF90eXBlb2Yob2JqKTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9XG5cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKGNhbGwgJiYgKF90eXBlb2YoY2FsbCkgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikpIHsgcmV0dXJuIGNhbGw7IH0gcmV0dXJuIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZik7IH1cblxuZnVuY3Rpb24gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKSB7IGlmIChzZWxmID09PSB2b2lkIDApIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IF9nZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5nZXRQcm90b3R5cGVPZiA6IGZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IHJldHVybiBvLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2Yobyk7IH07IHJldHVybiBfZ2V0UHJvdG90eXBlT2Yobyk7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uXCIpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIF9zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcyk7IH1cblxuZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgX3NldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IG8uX19wcm90b19fID0gcDsgcmV0dXJuIG87IH07IHJldHVybiBfc2V0UHJvdG90eXBlT2YobywgcCk7IH1cblxuXG52YXIgQ2hhbm5lbCA9XG4vKiNfX1BVUkVfXyovXG5mdW5jdGlvbiAoX0Rpc3BhdGNoZXIpIHtcbiAgX2luaGVyaXRzKENoYW5uZWwsIF9EaXNwYXRjaGVyKTtcblxuICBmdW5jdGlvbiBDaGFubmVsKG5hbWUsIHB1c2hlcikge1xuICAgIHZhciBfdGhpcztcblxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBDaGFubmVsKTtcblxuICAgIF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX2dldFByb3RvdHlwZU9mKENoYW5uZWwpLmNhbGwodGhpcykpO1xuICAgIF90aGlzLm5hbWUgPSBuYW1lO1xuICAgIF90aGlzLnB1c2hlciA9IHB1c2hlcjtcblxuICAgIGlmIChfdGhpcy5wdXNoZXIuc29ja2V0LnN0YXRlID09IDEpIHtcbiAgICAgIF90aGlzLnN1YnNjcmliZSgpO1xuICAgIH1cblxuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhDaGFubmVsLCBbe1xuICAgIGtleTogXCJzdWJzY3JpYmVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gc3Vic2NyaWJlKCkge1xuICAgICAgdGhpcy5wdXNoZXIuc2VuZCh7XG4gICAgICAgIGV2ZW50OiAnc3Vic2NyaWJlJyxcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgIGNoYW5uZWw6IHRoaXMubmFtZVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gQ2hhbm5lbDtcbn0oX2V2ZW50c19kaXNwYXRjaGVyX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX19bXCJEaXNwYXRjaGVyXCJdKTtcblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9zcmMvY2hhbm5lbHMvbWFubmFnZXIuanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9zcmMvY2hhbm5lbHMvbWFubmFnZXIuanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgZXhwb3J0cyBwcm92aWRlZDogTWFubmFnZXIgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIF9fd2VicGFja19leHBvcnRzX18sIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIoX193ZWJwYWNrX2V4cG9ydHNfXyk7XG4vKiBoYXJtb255IGV4cG9ydCAoYmluZGluZykgKi8gX193ZWJwYWNrX3JlcXVpcmVfXy5kKF9fd2VicGFja19leHBvcnRzX18sIFwiTWFubmFnZXJcIiwgZnVuY3Rpb24oKSB7IHJldHVybiBNYW5uYWdlcjsgfSk7XG4vKiBoYXJtb255IGltcG9ydCAqLyB2YXIgX2NoYW5uZWxfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfXyA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vY2hhbm5lbCAqLyBcIi4vc3JjL2NoYW5uZWxzL2NoYW5uZWwuanNcIik7XG4vKiBoYXJtb255IGltcG9ydCAqLyB2YXIgX3ByZXNlbmNlX2NoYW5uZWxfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzFfXyA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vcHJlc2VuY2VfY2hhbm5lbCAqLyBcIi4vc3JjL2NoYW5uZWxzL3ByZXNlbmNlX2NoYW5uZWwuanNcIik7XG4vKiBoYXJtb255IGltcG9ydCAqLyB2YXIgX3ByaXZhdGVfY2hhbm5lbF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMl9fID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9wcml2YXRlX2NoYW5uZWwgKi8gXCIuL3NyYy9jaGFubmVscy9wcml2YXRlX2NoYW5uZWwuanNcIik7XG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9XG5cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9XG5cblxuXG5cbnZhciBNYW5uYWdlciA9XG4vKiNfX1BVUkVfXyovXG5mdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIE1hbm5hZ2VyKCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBNYW5uYWdlcik7XG5cbiAgICB0aGlzLmNoYW5uZWxzID0ge307XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoTWFubmFnZXIsIFt7XG4gICAga2V5OiBcImFkZFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBhZGQobmFtZSwgcHVzaGVyKSB7XG4gICAgICBpZiAoIXRoaXMuY2hhbm5lbHNbbmFtZV0pIHtcbiAgICAgICAgdGhpcy5jaGFubmVsc1tuYW1lXSA9IGNyZWF0ZUNoYW5uZWwobmFtZSwgcHVzaGVyKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuY2hhbm5lbHNbbmFtZV07XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImFsbFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBhbGwoKSB7XG4gICAgICByZXR1cm4gT2JqZWN0LmtleXModGhpcy5jaGFubmVscyk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImZpbmRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZmluZChuYW1lKSB7XG4gICAgICByZXR1cm4gdGhpcy5jaGFubmVsc1tuYW1lXTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwicmVtb3ZlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbW92ZShuYW1lKSB7XG4gICAgICB2YXIgY2hhbm5lbCA9IHRoaXMuY2hhbm5lbHNbbmFtZV07XG4gICAgICBkZWxldGUgdGhpcy5jaGFubmVsc1tuYW1lXTtcbiAgICAgIHJldHVybiBjaGFubmVsO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJzdWJzY3JpYmVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gc3Vic2NyaWJlKCkge1xuICAgICAgZm9yICh2YXIgaSBpbiB0aGlzLmNoYW5uZWxzKSB7XG4gICAgICAgIHRoaXMuY2hhbm5lbHNbaV0uc3Vic2NyaWJlKCk7XG4gICAgICB9XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIE1hbm5hZ2VyO1xufSgpO1xuXG5mdW5jdGlvbiBjcmVhdGVDaGFubmVsKG5hbWUsIHB1c2hlcikge1xuICBpZiAobmFtZS5pbmRleE9mKCdwcml2YXRlLScpID09PSAwKSB7XG4gICAgcmV0dXJuIG5ldyBfcHJpdmF0ZV9jaGFubmVsX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8yX19bXCJQcml2YXRlQ2hhbm5lbFwiXShuYW1lLCBwdXNoZXIpO1xuICB9IGVsc2UgaWYgKG5hbWUuaW5kZXhPZigncHJlc2VuY2UtJykgPT09IDApIHtcbiAgICByZXR1cm4gbmV3IF9wcmVzZW5jZV9jaGFubmVsX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8xX19bXCJQcmVzZW5jZUNoYW5uZWxcIl0obmFtZSwgcHVzaGVyKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gbmV3IF9jaGFubmVsX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX19bXCJDaGFubmVsXCJdKG5hbWUsIHB1c2hlcik7XG4gIH1cbn1cblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9zcmMvY2hhbm5lbHMvcHJlc2VuY2VfY2hhbm5lbC5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vc3JjL2NoYW5uZWxzL3ByZXNlbmNlX2NoYW5uZWwuanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBleHBvcnRzIHByb3ZpZGVkOiBQcmVzZW5jZUNoYW5uZWwgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIF9fd2VicGFja19leHBvcnRzX18sIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIoX193ZWJwYWNrX2V4cG9ydHNfXyk7XG4vKiBoYXJtb255IGV4cG9ydCAoYmluZGluZykgKi8gX193ZWJwYWNrX3JlcXVpcmVfXy5kKF9fd2VicGFja19leHBvcnRzX18sIFwiUHJlc2VuY2VDaGFubmVsXCIsIGZ1bmN0aW9uKCkgeyByZXR1cm4gUHJlc2VuY2VDaGFubmVsOyB9KTtcbi8qIGhhcm1vbnkgaW1wb3J0ICovIHZhciBfZXZlbnRzX2Rpc3BhdGNoZXJfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfXyA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4uL2V2ZW50cy9kaXNwYXRjaGVyICovIFwiLi9zcmMvZXZlbnRzL2Rpc3BhdGNoZXIuanNcIik7XG5mdW5jdGlvbiBfdHlwZW9mKG9iaikgeyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9OyB9IGVsc2UgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07IH0gcmV0dXJuIF90eXBlb2Yob2JqKTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9XG5cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKGNhbGwgJiYgKF90eXBlb2YoY2FsbCkgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikpIHsgcmV0dXJuIGNhbGw7IH0gcmV0dXJuIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZik7IH1cblxuZnVuY3Rpb24gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKSB7IGlmIChzZWxmID09PSB2b2lkIDApIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IF9nZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5nZXRQcm90b3R5cGVPZiA6IGZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IHJldHVybiBvLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2Yobyk7IH07IHJldHVybiBfZ2V0UHJvdG90eXBlT2Yobyk7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uXCIpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIF9zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcyk7IH1cblxuZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgX3NldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IG8uX19wcm90b19fID0gcDsgcmV0dXJuIG87IH07IHJldHVybiBfc2V0UHJvdG90eXBlT2YobywgcCk7IH1cblxuXG52YXIgUHJlc2VuY2VDaGFubmVsID1cbi8qI19fUFVSRV9fKi9cbmZ1bmN0aW9uIChfRGlzcGF0Y2hlcikge1xuICBfaW5oZXJpdHMoUHJlc2VuY2VDaGFubmVsLCBfRGlzcGF0Y2hlcik7XG5cbiAgZnVuY3Rpb24gUHJlc2VuY2VDaGFubmVsKG5hbWUsIHB1c2hlcikge1xuICAgIHZhciBfdGhpcztcblxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBQcmVzZW5jZUNoYW5uZWwpO1xuXG4gICAgX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfZ2V0UHJvdG90eXBlT2YoUHJlc2VuY2VDaGFubmVsKS5jYWxsKHRoaXMpKTtcbiAgICBfdGhpcy5uYW1lID0gbmFtZTtcbiAgICBfdGhpcy5wdXNoZXIgPSBwdXNoZXI7XG4gICAgX3RoaXMuYXV0aCA9IG51bGw7XG5cbiAgICBpZiAoX3RoaXMucHVzaGVyLnNvY2tldC5zdGF0ZSA9PSAxKSB7XG4gICAgICBfdGhpcy5zdWJzY3JpYmUoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoUHJlc2VuY2VDaGFubmVsLCBbe1xuICAgIGtleTogXCJzdWJzY3JpYmVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gc3Vic2NyaWJlKCkge1xuICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgIHRoaXMucHVzaGVyLmF1dGgodGhpcy5uYW1lLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICBfdGhpczIuYXV0aCA9IGUuZGF0YS5hdXRoO1xuXG4gICAgICAgIF90aGlzMi5wdXNoZXIuc2VuZCh7XG4gICAgICAgICAgZXZlbnQ6ICdzdWJzY3JpYmUnLFxuICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgIGNoYW5uZWw6IF90aGlzMi5uYW1lLFxuICAgICAgICAgICAgYXV0aDogX3RoaXMyLmF1dGgsXG4gICAgICAgICAgICBjaGFubmVsX2RhdGE6IGUuZGF0YS5jaGFubmVsX2RhdGFcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIFByZXNlbmNlQ2hhbm5lbDtcbn0oX2V2ZW50c19kaXNwYXRjaGVyX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX19bXCJEaXNwYXRjaGVyXCJdKTtcblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9zcmMvY2hhbm5lbHMvcHJpdmF0ZV9jaGFubmVsLmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL3NyYy9jaGFubmVscy9wcml2YXRlX2NoYW5uZWwuanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIGV4cG9ydHMgcHJvdmlkZWQ6IFByaXZhdGVDaGFubmVsICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBfX3dlYnBhY2tfZXhwb3J0c19fLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yKF9fd2VicGFja19leHBvcnRzX18pO1xuLyogaGFybW9ueSBleHBvcnQgKGJpbmRpbmcpICovIF9fd2VicGFja19yZXF1aXJlX18uZChfX3dlYnBhY2tfZXhwb3J0c19fLCBcIlByaXZhdGVDaGFubmVsXCIsIGZ1bmN0aW9uKCkgeyByZXR1cm4gUHJpdmF0ZUNoYW5uZWw7IH0pO1xuLyogaGFybW9ueSBpbXBvcnQgKi8gdmFyIF9ldmVudHNfZGlzcGF0Y2hlcl9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi4vZXZlbnRzL2Rpc3BhdGNoZXIgKi8gXCIuL3NyYy9ldmVudHMvZGlzcGF0Y2hlci5qc1wiKTtcbmZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH07IH0gZWxzZSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTsgfSByZXR1cm4gX3R5cGVvZihvYmopOyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoY2FsbCAmJiAoX3R5cGVvZihjYWxsKSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSkgeyByZXR1cm4gY2FsbDsgfSByZXR1cm4gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKTsgfVxuXG5mdW5jdGlvbiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpIHsgaWYgKHNlbGYgPT09IHZvaWQgMCkgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIHNlbGY7IH1cblxuZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgX2dldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LmdldFByb3RvdHlwZU9mIDogZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgcmV0dXJuIG8uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihvKTsgfTsgcmV0dXJuIF9nZXRQcm90b3R5cGVPZihvKTsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgX3NldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKTsgfVxuXG5mdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgby5fX3Byb3RvX18gPSBwOyByZXR1cm4gbzsgfTsgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihvLCBwKTsgfVxuXG5cbnZhciBQcml2YXRlQ2hhbm5lbCA9XG4vKiNfX1BVUkVfXyovXG5mdW5jdGlvbiAoX0Rpc3BhdGNoZXIpIHtcbiAgX2luaGVyaXRzKFByaXZhdGVDaGFubmVsLCBfRGlzcGF0Y2hlcik7XG5cbiAgZnVuY3Rpb24gUHJpdmF0ZUNoYW5uZWwobmFtZSwgcHVzaGVyKSB7XG4gICAgdmFyIF90aGlzO1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFByaXZhdGVDaGFubmVsKTtcblxuICAgIF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX2dldFByb3RvdHlwZU9mKFByaXZhdGVDaGFubmVsKS5jYWxsKHRoaXMpKTtcbiAgICBfdGhpcy5uYW1lID0gbmFtZTtcbiAgICBfdGhpcy5wdXNoZXIgPSBwdXNoZXI7XG4gICAgX3RoaXMuYXV0aCA9IG51bGw7XG5cbiAgICBpZiAoX3RoaXMucHVzaGVyLnNvY2tldC5zdGF0ZSA9PSAxKSB7XG4gICAgICBfdGhpcy5zdWJzY3JpYmUoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoUHJpdmF0ZUNoYW5uZWwsIFt7XG4gICAga2V5OiBcInN1YnNjcmliZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzdWJzY3JpYmUoKSB7XG4gICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgdGhpcy5wdXNoZXIuYXV0aCh0aGlzLm5hbWUsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIF90aGlzMi5hdXRoID0gZS5kYXRhLmF1dGg7XG5cbiAgICAgICAgX3RoaXMyLnB1c2hlci5zZW5kKHtcbiAgICAgICAgICBldmVudDogJ3N1YnNjcmliZScsXG4gICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgY2hhbm5lbDogX3RoaXMyLm5hbWUsXG4gICAgICAgICAgICBhdXRoOiBfdGhpczIuYXV0aFxuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gUHJpdmF0ZUNoYW5uZWw7XG59KF9ldmVudHNfZGlzcGF0Y2hlcl9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fW1wiRGlzcGF0Y2hlclwiXSk7XG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vc3JjL2Nvbm5lY3Rpb24vc29ja2V0LmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vc3JjL2Nvbm5lY3Rpb24vc29ja2V0LmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIGV4cG9ydHMgcHJvdmlkZWQ6IFNvY2tldCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgX193ZWJwYWNrX2V4cG9ydHNfXywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcbl9fd2VicGFja19yZXF1aXJlX18ucihfX3dlYnBhY2tfZXhwb3J0c19fKTtcbi8qIGhhcm1vbnkgZXhwb3J0IChiaW5kaW5nKSAqLyBfX3dlYnBhY2tfcmVxdWlyZV9fLmQoX193ZWJwYWNrX2V4cG9ydHNfXywgXCJTb2NrZXRcIiwgZnVuY3Rpb24oKSB7IHJldHVybiBTb2NrZXQ7IH0pO1xuLyogaGFybW9ueSBpbXBvcnQgKi8gdmFyIF9ldmVudHNfZGlzcGF0Y2hlcl9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi4vZXZlbnRzL2Rpc3BhdGNoZXIgKi8gXCIuL3NyYy9ldmVudHMvZGlzcGF0Y2hlci5qc1wiKTtcbmZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH07IH0gZWxzZSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTsgfSByZXR1cm4gX3R5cGVvZihvYmopOyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoY2FsbCAmJiAoX3R5cGVvZihjYWxsKSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSkgeyByZXR1cm4gY2FsbDsgfSByZXR1cm4gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKTsgfVxuXG5mdW5jdGlvbiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpIHsgaWYgKHNlbGYgPT09IHZvaWQgMCkgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIHNlbGY7IH1cblxuZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgX2dldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LmdldFByb3RvdHlwZU9mIDogZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgcmV0dXJuIG8uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihvKTsgfTsgcmV0dXJuIF9nZXRQcm90b3R5cGVPZihvKTsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgX3NldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKTsgfVxuXG5mdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgby5fX3Byb3RvX18gPSBwOyByZXR1cm4gbzsgfTsgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihvLCBwKTsgfVxuXG5cbnZhciBTb2NrZXQgPVxuLyojX19QVVJFX18qL1xuZnVuY3Rpb24gKF9EaXNwYXRjaGVyKSB7XG4gIF9pbmhlcml0cyhTb2NrZXQsIF9EaXNwYXRjaGVyKTtcblxuICBmdW5jdGlvbiBTb2NrZXQocHVzaGVyLCBob3N0KSB7XG4gICAgdmFyIF90aGlzO1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFNvY2tldCk7XG5cbiAgICBfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9nZXRQcm90b3R5cGVPZihTb2NrZXQpLmNhbGwodGhpcykpO1xuICAgIF90aGlzLnB1c2hlciA9IHB1c2hlcjtcbiAgICBfdGhpcy5zb2NrZXQgPSBuZXcgV2ViU29ja2V0KGhvc3QgKyAnLycgKyBfdGhpcy5wdXNoZXIua2V5KTtcblxuICAgIF90aGlzLmJpbmRMaXN0ZW5lcnMoKTtcblxuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhTb2NrZXQsIFt7XG4gICAga2V5OiBcImJpbmRMaXN0ZW5lcnNcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gYmluZExpc3RlbmVycygpIHtcbiAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICB0aGlzLnNvY2tldC5vbm9wZW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIF90aGlzMi5vbk9wZW4oKTtcbiAgICAgIH07XG5cbiAgICAgIHRoaXMuc29ja2V0Lm9uZXJyb3IgPSBmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgX3RoaXMyLm9uRXJyb3IoZXJyb3IpO1xuICAgICAgfTtcblxuICAgICAgdGhpcy5zb2NrZXQub25jbG9zZSA9IGZ1bmN0aW9uIChjbG9zZUV2ZW50KSB7XG4gICAgICAgIF90aGlzMi5vbkNsb3NlKGNsb3NlRXZlbnQpO1xuICAgICAgfTtcblxuICAgICAgdGhpcy5zb2NrZXQub25tZXNzYWdlID0gZnVuY3Rpb24gKG1lc3NhZ2UpIHtcbiAgICAgICAgX3RoaXMyLm9uTWVzc2FnZShtZXNzYWdlKTtcbiAgICAgIH07XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcIm9uT3BlblwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBvbk9wZW4oKSB7XG4gICAgICB2YXIgX3RoaXMzID0gdGhpcztcblxuICAgICAgLy/liJ3lp4vnirbmgIFcbiAgICAgIHRoaXMuc3RhdGUgPSAwO1xuICAgICAgdGhpcy5iaW5kKCdjb25uZWN0ZWQnLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICBfdGhpczMuc29ja2V0LnNvY2tldF9pZCA9IGUuc29ja2V0X2lkO1xuICAgICAgICBfdGhpczMuc3RhdGUgPSAxOyAvL+iuoumYhVxuXG4gICAgICAgIF90aGlzMy5wdXNoZXIuY2hhbm5lbHMuc3Vic2NyaWJlKCk7XG4gICAgICB9KTtcbiAgICAgIHRoaXMuYmluZCgnY29ubmVjdGlvbl9mYWlsZWQnLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICBfdGhpczMuc3RhdGUgPSAtMTtcbiAgICAgICAgY29uc29sZS5lcnJvcihlLmVycm9yKTtcbiAgICAgIH0pO1xuICAgICAgLyp0aGlzLnNlbmQoe1xyXG4gICAgICAgICAgZXZlbnQ6ICdhdXRob3JpemF0aW9uJ1xyXG4gICAgICB9KTsqL1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJvbkVycm9yXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG9uRXJyb3IoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJvbkNsb3NlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG9uQ2xvc2UoY2xvc2VFdmVudCkge1xuICAgICAgaWYgKHRoaXMuc29ja2V0LnJlYWR5U3RhdGUgPT0gV2ViU29ja2V0LkNMT1NFRCkge1xuICAgICAgICBpZiAoY2xvc2VFdmVudC50eXBlID09ICdjbG9zZScpIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCdzb2NrZXTmnI3liqHlt7Lmlq3lvIAhIScpO1xuICAgICAgICB9IGVsc2UgaWYgKGNsb3NlRXZlbnQudHlwZSA9PSAnbWVzc2FnZScpIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGNsb3NlRXZlbnQuZGF0YSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcign5bey5pat5byAISEnKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJvbk1lc3NhZ2VcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gb25NZXNzYWdlKG1lc3NhZ2UpIHtcbiAgICAgIHZhciBlRGF0YSA9IEpTT04ucGFyc2UobWVzc2FnZS5kYXRhKTtcbiAgICAgIHZhciBldmVudCA9IGVEYXRhLmV2ZW50O1xuICAgICAgdmFyIGRhdGEgPSBlRGF0YS5kYXRhO1xuXG4gICAgICBpZiAoZURhdGEuY2hhbm5lbCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHRoaXMucHVzaGVyLmNoYW5uZWxzLmZpbmQoZURhdGEuY2hhbm5lbCkuZW1pdChldmVudCwgZGF0YSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmVtaXQoZXZlbnQsIGRhdGEpO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJzZW5kXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNlbmQoanNvbikge1xuICAgICAgaWYgKHRoaXMuc3RhdGUgIT09IC0xKSB7XG4gICAgICAgIHRoaXMuc29ja2V0LnNlbmQoSlNPTi5zdHJpbmdpZnkoanNvbikpO1xuICAgICAgfVxuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBTb2NrZXQ7XG59KF9ldmVudHNfZGlzcGF0Y2hlcl9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fW1wiRGlzcGF0Y2hlclwiXSk7XG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vc3JjL2V2ZW50cy9jYWxsYmFja19yZWdpc3RyeS5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9zcmMvZXZlbnRzL2NhbGxiYWNrX3JlZ2lzdHJ5LmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBleHBvcnRzIHByb3ZpZGVkOiBDYWxsYmFja1JlZ2lzdHJ5ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBfX3dlYnBhY2tfZXhwb3J0c19fLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yKF9fd2VicGFja19leHBvcnRzX18pO1xuLyogaGFybW9ueSBleHBvcnQgKGJpbmRpbmcpICovIF9fd2VicGFja19yZXF1aXJlX18uZChfX3dlYnBhY2tfZXhwb3J0c19fLCBcIkNhbGxiYWNrUmVnaXN0cnlcIiwgZnVuY3Rpb24oKSB7IHJldHVybiBDYWxsYmFja1JlZ2lzdHJ5OyB9KTtcbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH1cblxudmFyIENhbGxiYWNrUmVnaXN0cnkgPVxuLyojX19QVVJFX18qL1xuZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBDYWxsYmFja1JlZ2lzdHJ5KCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBDYWxsYmFja1JlZ2lzdHJ5KTtcblxuICAgIHRoaXMuX2NhbGxiYWNrcyA9IHt9O1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKENhbGxiYWNrUmVnaXN0cnksIFt7XG4gICAga2V5OiBcImdldFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXQobmFtZSkge1xuICAgICAgcmV0dXJuIHRoaXMuX2NhbGxiYWNrc1twcmVmaXgobmFtZSldO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJhZGRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gYWRkKG5hbWUsIGNhbGxiYWNrLCBjb250ZXh0KSB7XG4gICAgICB2YXIgcHJlZml4ZWRFdmVudE5hbWUgPSBwcmVmaXgobmFtZSk7XG4gICAgICB0aGlzLl9jYWxsYmFja3NbcHJlZml4ZWRFdmVudE5hbWVdID0gdGhpcy5fY2FsbGJhY2tzW3ByZWZpeGVkRXZlbnROYW1lXSB8fCBbXTtcblxuICAgICAgdGhpcy5fY2FsbGJhY2tzW3ByZWZpeGVkRXZlbnROYW1lXS5wdXNoKHtcbiAgICAgICAgZm46IGNhbGxiYWNrLFxuICAgICAgICBjb250ZXh0OiBjb250ZXh0XG4gICAgICB9KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwicmVtb3ZlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbW92ZShuYW1lLCBjYWxsYmFjaywgY29udGV4dCkge1xuICAgICAgaWYgKCFuYW1lICYmICFjYWxsYmFjayAmJiAhY29udGV4dCkge1xuICAgICAgICB0aGlzLl9jYWxsYmFja3MgPSB7fTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB2YXIgbmFtZXMgPSBuYW1lID8gW3ByZWZpeChuYW1lKV0gOiBPYmplY3Qua2V5cyh0aGlzLl9jYWxsYmFja3MpO1xuXG4gICAgICBpZiAoY2FsbGJhY2sgfHwgY29udGV4dCkge1xuICAgICAgICB0aGlzLnJlbW92ZUNhbGxiYWNrKG5hbWVzLCBjYWxsYmFjaywgY29udGV4dCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnJlbW92ZUFsbENhbGxiYWNrcyhuYW1lcyk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInJlbW92ZUNhbGxiYWNrXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbW92ZUNhbGxiYWNrKG5hbWVzLCBjYWxsYmFjaywgY29udGV4dCkge1xuICAgICAgZm9yICh2YXIgbmFtZSBpbiBuYW1lcykge1xuICAgICAgICBmb3IgKHZhciBrZXkgaW4gdGhpcy5fY2FsbGJhY2tzW25hbWVdKSB7XG4gICAgICAgICAgaWYgKHRoaXMuX2NhbGxiYWNrc1tuYW1lXVtrZXldLmZuID09IGNhbGxiYWNrIHx8IHRoaXMuX2NhbGxiYWNrc1tuYW1lXVtrZXldLmNvbnRleHQgPT0gY29udGV4dCkge1xuICAgICAgICAgICAgZGVsZXRlIHRoaXMuX2NhbGxiYWNrc1tuYW1lXVtrZXldO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLl9jYWxsYmFja3NbbmFtZV0ubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgZGVsZXRlIHRoaXMuX2NhbGxiYWNrc1tuYW1lXTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJyZW1vdmVBbGxDYWxsYmFja3NcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVtb3ZlQWxsQ2FsbGJhY2tzKG5hbWVzKSB7XG4gICAgICBmb3IgKHZhciBuYW1lIGluIG5hbWVzKSB7XG4gICAgICAgIGRlbGV0ZSB0aGlzLl9jYWxsYmFja3NbbmFtZV07XG4gICAgICB9XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIENhbGxiYWNrUmVnaXN0cnk7XG59KCk7XG5cbmZ1bmN0aW9uIHByZWZpeChuYW1lKSB7XG4gIHJldHVybiBcIl9cIiArIG5hbWU7XG59XG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vc3JjL2V2ZW50cy9kaXNwYXRjaGVyLmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vc3JjL2V2ZW50cy9kaXNwYXRjaGVyLmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIGV4cG9ydHMgcHJvdmlkZWQ6IERpc3BhdGNoZXIgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIF9fd2VicGFja19leHBvcnRzX18sIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIoX193ZWJwYWNrX2V4cG9ydHNfXyk7XG4vKiBoYXJtb255IGV4cG9ydCAoYmluZGluZykgKi8gX193ZWJwYWNrX3JlcXVpcmVfXy5kKF9fd2VicGFja19leHBvcnRzX18sIFwiRGlzcGF0Y2hlclwiLCBmdW5jdGlvbigpIHsgcmV0dXJuIERpc3BhdGNoZXI7IH0pO1xuLyogaGFybW9ueSBpbXBvcnQgKi8gdmFyIF9jYWxsYmFja19yZWdpc3RyeV9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9jYWxsYmFja19yZWdpc3RyeSAqLyBcIi4vc3JjL2V2ZW50cy9jYWxsYmFja19yZWdpc3RyeS5qc1wiKTtcbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH1cblxuXG52YXIgRGlzcGF0Y2hlciA9XG4vKiNfX1BVUkVfXyovXG5mdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIERpc3BhdGNoZXIoKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIERpc3BhdGNoZXIpO1xuXG4gICAgdGhpcy5jYWxsYmFja3MgPSBuZXcgX2NhbGxiYWNrX3JlZ2lzdHJ5X19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX19bXCJDYWxsYmFja1JlZ2lzdHJ5XCJdKCk7XG4gICAgdGhpcy5nbG9iYWxfY2FsbGJhY2tzID0gW107XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoRGlzcGF0Y2hlciwgW3tcbiAgICBrZXk6IFwiYmluZFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBiaW5kKGV2ZW50TmFtZSwgY2FsbGJhY2ssIGNvbnRleHQpIHtcbiAgICAgIHRoaXMuY2FsbGJhY2tzLmFkZChldmVudE5hbWUsIGNhbGxiYWNrLCBjb250ZXh0KTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJiaW5kX2dsb2JhbFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBiaW5kX2dsb2JhbChjYWxsYmFjaykge1xuICAgICAgdGhpcy5nbG9iYWxfY2FsbGJhY2tzLnB1c2goY2FsbGJhY2spO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInVuYmluZFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiB1bmJpbmQoZXZlbnROYW1lLCBjYWxsYmFjaywgY29udGV4dCkge1xuICAgICAgdGhpcy5jYWxsYmFja3MucmVtb3ZlKGV2ZW50TmFtZSwgY2FsbGJhY2ssIGNvbnRleHQpO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInVuYmluZF9nbG9iYWxcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gdW5iaW5kX2dsb2JhbChjYWxsYmFjaykge1xuICAgICAgaWYgKCFjYWxsYmFjaykge1xuICAgICAgICB0aGlzLmdsb2JhbF9jYWxsYmFja3MgPSBbXTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICB9XG5cbiAgICAgIGZvciAodmFyIGkgaW4gdGhpcy5nbG9iYWxfY2FsbGJhY2tzKSB7XG4gICAgICAgIGlmIChjYWxsYmFjayA9PSB0aGlzLmdsb2JhbF9jYWxsYmFja3NbaV0pIHtcbiAgICAgICAgICBkZWxldGUgdGhpcy5nbG9iYWxfY2FsbGJhY2tzW2ldO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJ1bmJpbmRfYWxsXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHVuYmluZF9hbGwoKSB7XG4gICAgICB0aGlzLnVuYmluZCgpO1xuICAgICAgdGhpcy51bmJpbmRfZ2xvYmFsKCk7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZW1pdFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBlbWl0KGV2ZW50TmFtZSwgZGF0YSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmdsb2JhbF9jYWxsYmFja3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdGhpcy5nbG9iYWxfY2FsbGJhY2tzW2ldKGV2ZW50TmFtZSwgZGF0YSk7XG4gICAgICB9XG5cbiAgICAgIHZhciBjYWxsYmFja3MgPSB0aGlzLmNhbGxiYWNrcy5nZXQoZXZlbnROYW1lKTtcblxuICAgICAgaWYgKGNhbGxiYWNrcyAmJiBjYWxsYmFja3MubGVuZ3RoID4gMCkge1xuICAgICAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgY2FsbGJhY2tzLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgIGNhbGxiYWNrc1tfaV0uZm4uY2FsbChjYWxsYmFja3NbX2ldLmNvbnRleHQsIGRhdGEpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBEaXNwYXRjaGVyO1xufSgpO1xuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL3NyYy9wdXNoZXIuanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vc3JjL3B1c2hlci5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgZXhwb3J0cyBwcm92aWRlZDogUHVzaGVyICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBfX3dlYnBhY2tfZXhwb3J0c19fLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yKF9fd2VicGFja19leHBvcnRzX18pO1xuLyogaGFybW9ueSBleHBvcnQgKGJpbmRpbmcpICovIF9fd2VicGFja19yZXF1aXJlX18uZChfX3dlYnBhY2tfZXhwb3J0c19fLCBcIlB1c2hlclwiLCBmdW5jdGlvbigpIHsgcmV0dXJuIFB1c2hlcjsgfSk7XG4vKiBoYXJtb255IGltcG9ydCAqLyB2YXIgX2Nvbm5lY3Rpb25fc29ja2V0X19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL2Nvbm5lY3Rpb24vc29ja2V0ICovIFwiLi9zcmMvY29ubmVjdGlvbi9zb2NrZXQuanNcIik7XG4vKiBoYXJtb255IGltcG9ydCAqLyB2YXIgX2V2ZW50c19kaXNwYXRjaGVyX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8xX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL2V2ZW50cy9kaXNwYXRjaGVyICovIFwiLi9zcmMvZXZlbnRzL2Rpc3BhdGNoZXIuanNcIik7XG4vKiBoYXJtb255IGltcG9ydCAqLyB2YXIgX2NoYW5uZWxzX21hbm5hZ2VyX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8yX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL2NoYW5uZWxzL21hbm5hZ2VyICovIFwiLi9zcmMvY2hhbm5lbHMvbWFubmFnZXIuanNcIik7XG4vKiBoYXJtb255IGltcG9ydCAqLyB2YXIgYXhpb3NfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIGF4aW9zICovIFwiLi9ub2RlX21vZHVsZXMvYXhpb3MvaW5kZXguanNcIik7XG4vKiBoYXJtb255IGltcG9ydCAqLyB2YXIgYXhpb3NfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzNfX19kZWZhdWx0ID0gLyojX19QVVJFX18qL19fd2VicGFja19yZXF1aXJlX18ubihheGlvc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfM19fKTtcbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH1cblxuXG5cblxuXG52YXIgUHVzaGVyID1cbi8qI19fUFVSRV9fKi9cbmZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gUHVzaGVyKGFwcF9rZXksIG9wdGlvbnMpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgUHVzaGVyKTtcblxuICAgIHRoaXMuY2hlY2tBcHBLZXkoYXBwX2tleSk7XG4gICAgdGhpcy5rZXkgPSBhcHBfa2V5O1xuICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gICAgdGhpcy5kaXNwYXRjaGVyID0gbmV3IF9ldmVudHNfZGlzcGF0Y2hlcl9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMV9fW1wiRGlzcGF0Y2hlclwiXSgpO1xuICAgIHRoaXMuY2hhbm5lbHMgPSBuZXcgX2NoYW5uZWxzX21hbm5hZ2VyX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8yX19bXCJNYW5uYWdlclwiXSgpO1xuICAgIHRoaXMuY29ubmVjdCgpO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKFB1c2hlciwgW3tcbiAgICBrZXk6IFwiY29ubmVjdFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb25uZWN0KCkge1xuICAgICAgdGhpcy5zb2NrZXQgPSBuZXcgX2Nvbm5lY3Rpb25fc29ja2V0X19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX19bXCJTb2NrZXRcIl0odGhpcywgdGhpcy5vcHRpb25zLmhvc3QpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJzdWJzY3JpYmVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gc3Vic2NyaWJlKGNoYW5uZWxfbmFtZSkge1xuICAgICAgcmV0dXJuIHRoaXMuY2hhbm5lbHMuYWRkKGNoYW5uZWxfbmFtZSwgdGhpcyk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInVuc3Vic2NyaWJlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHVuc3Vic2NyaWJlKGNoYW5uZWxfbmFtZSkge1xuICAgICAgdGhpcy5jaGFubmVscy5yZW1vdmUoY2hhbm5lbF9uYW1lKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZ2V0U29ja2V0SWRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0U29ja2V0SWQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5zb2NrZXQuc29ja2V0LnNvY2tldF9pZDtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwic2VuZFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzZW5kKGpzb24pIHtcbiAgICAgIHRoaXMuc29ja2V0LnNlbmQoanNvbik7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImNoZWNrQXBwS2V5XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNoZWNrQXBwS2V5KGtleSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImF1dGhcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gYXV0aChuYW1lLCBjYWxsYmFjaykge1xuICAgICAgdmFyIG1ldGhvZCA9IHRoaXMub3B0aW9ucy5hdXRoLm1ldGhvZCB8fCAncG9zdCc7XG4gICAgICB2YXIgZGF0YSA9IHt9O1xuICAgICAgdmFyIHBhcmFtcyA9IHt9O1xuXG4gICAgICBpZiAobWV0aG9kID09ICdwb3N0Jykge1xuICAgICAgICBkYXRhID0gT2JqZWN0LmFzc2lnbih7XG4gICAgICAgICAgY2hhbm5lbF9uYW1lOiBuYW1lLFxuICAgICAgICAgIHNvY2tldF9pZDogdGhpcy5nZXRTb2NrZXRJZCgpXG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcGFyYW1zID0gT2JqZWN0LmFzc2lnbih7XG4gICAgICAgICAgY2hhbm5lbF9uYW1lOiBuYW1lLFxuICAgICAgICAgIHNvY2tldF9pZDogdGhpcy5nZXRTb2NrZXRJZCgpXG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBheGlvc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfM19fX2RlZmF1bHQoKSh7XG4gICAgICAgIHVybDogdGhpcy5vcHRpb25zLmF1dGgudXJsLFxuICAgICAgICBtZXRob2Q6IG1ldGhvZCxcbiAgICAgICAgaGVhZGVyczogdGhpcy5vcHRpb25zLmF1dGguaGVhZGVycyB8fCB7fSxcbiAgICAgICAgcGFyYW1zOiBwYXJhbXMsXG4gICAgICAgIGRhdGE6IGRhdGFcbiAgICAgIH0pLnRoZW4oZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgY2FsbGJhY2soZSk7XG4gICAgICB9KS5jYXRjaChmdW5jdGlvbiAoZSkge1xuICAgICAgICBjb25zb2xlLmVycm9yKCfnp4HmnInpopHpgZPmnYPpmZDkuI3otrMhJyk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gUHVzaGVyO1xufSgpO1xud2luZG93LlB1c2hlciA9IFB1c2hlcjtcblxuLyoqKi8gfSlcblxuLyoqKioqKi8gfSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbmRsWW5CaFkyczZMeTh2ZDJWaWNHRmpheTlpYjI5MGMzUnlZWEFpTENKM1pXSndZV05yT2k4dkx5NHZibTlrWlY5dGIyUjFiR1Z6TDJGNGFXOXpMMmx1WkdWNExtcHpJaXdpZDJWaWNHRmphem92THk4dUwyNXZaR1ZmYlc5a2RXeGxjeTloZUdsdmN5OXNhV0l2WVdSaGNIUmxjbk12ZUdoeUxtcHpJaXdpZDJWaWNHRmphem92THk4dUwyNXZaR1ZmYlc5a2RXeGxjeTloZUdsdmN5OXNhV0l2WVhocGIzTXVhbk1pTENKM1pXSndZV05yT2k4dkx5NHZibTlrWlY5dGIyUjFiR1Z6TDJGNGFXOXpMMnhwWWk5allXNWpaV3d2UTJGdVkyVnNMbXB6SWl3aWQyVmljR0ZqYXpvdkx5OHVMMjV2WkdWZmJXOWtkV3hsY3k5aGVHbHZjeTlzYVdJdlkyRnVZMlZzTDBOaGJtTmxiRlJ2YTJWdUxtcHpJaXdpZDJWaWNHRmphem92THk4dUwyNXZaR1ZmYlc5a2RXeGxjeTloZUdsdmN5OXNhV0l2WTJGdVkyVnNMMmx6UTJGdVkyVnNMbXB6SWl3aWQyVmljR0ZqYXpvdkx5OHVMMjV2WkdWZmJXOWtkV3hsY3k5aGVHbHZjeTlzYVdJdlkyOXlaUzlCZUdsdmN5NXFjeUlzSW5kbFluQmhZMnM2THk4dkxpOXViMlJsWDIxdlpIVnNaWE12WVhocGIzTXZiR2xpTDJOdmNtVXZTVzUwWlhKalpYQjBiM0pOWVc1aFoyVnlMbXB6SWl3aWQyVmljR0ZqYXpvdkx5OHVMMjV2WkdWZmJXOWtkV3hsY3k5aGVHbHZjeTlzYVdJdlkyOXlaUzlqY21WaGRHVkZjbkp2Y2k1cWN5SXNJbmRsWW5CaFkyczZMeTh2TGk5dWIyUmxYMjF2WkhWc1pYTXZZWGhwYjNNdmJHbGlMMk52Y21VdlpHbHpjR0YwWTJoU1pYRjFaWE4wTG1weklpd2lkMlZpY0dGamF6b3ZMeTh1TDI1dlpHVmZiVzlrZFd4bGN5OWhlR2x2Y3k5c2FXSXZZMjl5WlM5bGJtaGhibU5sUlhKeWIzSXVhbk1pTENKM1pXSndZV05yT2k4dkx5NHZibTlrWlY5dGIyUjFiR1Z6TDJGNGFXOXpMMnhwWWk5amIzSmxMM05sZEhSc1pTNXFjeUlzSW5kbFluQmhZMnM2THk4dkxpOXViMlJsWDIxdlpIVnNaWE12WVhocGIzTXZiR2xpTDJOdmNtVXZkSEpoYm5ObWIzSnRSR0YwWVM1cWN5SXNJbmRsWW5CaFkyczZMeTh2TGk5dWIyUmxYMjF2WkhWc1pYTXZZWGhwYjNNdmJHbGlMMlJsWm1GMWJIUnpMbXB6SWl3aWQyVmljR0ZqYXpvdkx5OHVMMjV2WkdWZmJXOWtkV3hsY3k5aGVHbHZjeTlzYVdJdmFHVnNjR1Z5Y3k5aWFXNWtMbXB6SWl3aWQyVmljR0ZqYXpvdkx5OHVMMjV2WkdWZmJXOWtkV3hsY3k5aGVHbHZjeTlzYVdJdmFHVnNjR1Z5Y3k5aWRHOWhMbXB6SWl3aWQyVmljR0ZqYXpvdkx5OHVMMjV2WkdWZmJXOWtkV3hsY3k5aGVHbHZjeTlzYVdJdmFHVnNjR1Z5Y3k5aWRXbHNaRlZTVEM1cWN5SXNJbmRsWW5CaFkyczZMeTh2TGk5dWIyUmxYMjF2WkhWc1pYTXZZWGhwYjNNdmJHbGlMMmhsYkhCbGNuTXZZMjl0WW1sdVpWVlNUSE11YW5NaUxDSjNaV0p3WVdOck9pOHZMeTR2Ym05a1pWOXRiMlIxYkdWekwyRjRhVzl6TDJ4cFlpOW9aV3h3WlhKekwyTnZiMnRwWlhNdWFuTWlMQ0ozWldKd1lXTnJPaTh2THk0dmJtOWtaVjl0YjJSMWJHVnpMMkY0YVc5ekwyeHBZaTlvWld4d1pYSnpMMmx6UVdKemIyeDFkR1ZWVWt3dWFuTWlMQ0ozWldKd1lXTnJPaTh2THk0dmJtOWtaVjl0YjJSMWJHVnpMMkY0YVc5ekwyeHBZaTlvWld4d1pYSnpMMmx6VlZKTVUyRnRaVTl5YVdkcGJpNXFjeUlzSW5kbFluQmhZMnM2THk4dkxpOXViMlJsWDIxdlpIVnNaWE12WVhocGIzTXZiR2xpTDJobGJIQmxjbk12Ym05eWJXRnNhWHBsU0dWaFpHVnlUbUZ0WlM1cWN5SXNJbmRsWW5CaFkyczZMeTh2TGk5dWIyUmxYMjF2WkhWc1pYTXZZWGhwYjNNdmJHbGlMMmhsYkhCbGNuTXZjR0Z5YzJWSVpXRmtaWEp6TG1weklpd2lkMlZpY0dGamF6b3ZMeTh1TDI1dlpHVmZiVzlrZFd4bGN5OWhlR2x2Y3k5c2FXSXZhR1ZzY0dWeWN5OXpjSEpsWVdRdWFuTWlMQ0ozWldKd1lXTnJPaTh2THk0dmJtOWtaVjl0YjJSMWJHVnpMMkY0YVc5ekwyeHBZaTkxZEdsc2N5NXFjeUlzSW5kbFluQmhZMnM2THk4dkxpOXViMlJsWDIxdlpIVnNaWE12YVhNdFluVm1abVZ5TDJsdVpHVjRMbXB6SWl3aWQyVmljR0ZqYXpvdkx5OHVMMjV2WkdWZmJXOWtkV3hsY3k5d2NtOWpaWE56TDJKeWIzZHpaWEl1YW5NaUxDSjNaV0p3WVdOck9pOHZMeTR2YzNKakwyTm9ZVzV1Wld4ekwyTm9ZVzV1Wld3dWFuTWlMQ0ozWldKd1lXTnJPaTh2THk0dmMzSmpMMk5vWVc1dVpXeHpMMjFoYm01aFoyVnlMbXB6SWl3aWQyVmljR0ZqYXpvdkx5OHVMM055WXk5amFHRnVibVZzY3k5d2NtVnpaVzVqWlY5amFHRnVibVZzTG1weklpd2lkMlZpY0dGamF6b3ZMeTh1TDNOeVl5OWphR0Z1Ym1Wc2N5OXdjbWwyWVhSbFgyTm9ZVzV1Wld3dWFuTWlMQ0ozWldKd1lXTnJPaTh2THk0dmMzSmpMMk52Ym01bFkzUnBiMjR2YzI5amEyVjBMbXB6SWl3aWQyVmljR0ZqYXpvdkx5OHVMM055WXk5bGRtVnVkSE12WTJGc2JHSmhZMnRmY21WbmFYTjBjbmt1YW5NaUxDSjNaV0p3WVdOck9pOHZMeTR2YzNKakwyVjJaVzUwY3k5a2FYTndZWFJqYUdWeUxtcHpJaXdpZDJWaWNHRmphem92THk4dUwzTnlZeTl3ZFhOb1pYSXVhbk1pWFN3aWJtRnRaWE1pT2xzaVEyaGhibTVsYkNJc0ltNWhiV1VpTENKd2RYTm9aWElpTENKemIyTnJaWFFpTENKemRHRjBaU0lzSW5OMVluTmpjbWxpWlNJc0luTmxibVFpTENKbGRtVnVkQ0lzSW1SaGRHRWlMQ0pqYUdGdWJtVnNJaXdpUkdsemNHRjBZMmhsY2lJc0lrMWhibTVoWjJWeUlpd2lZMmhoYm01bGJITWlMQ0pqY21WaGRHVkRhR0Z1Ym1Wc0lpd2lUMkpxWldOMElpd2lhMlY1Y3lJc0lta2lMQ0pwYm1SbGVFOW1JaXdpVUhKcGRtRjBaVU5vWVc1dVpXd2lMQ0pRY21WelpXNWpaVU5vWVc1dVpXd2lMQ0poZFhSb0lpd2laU0lzSW1Ob1lXNXVaV3hmWkdGMFlTSXNJbE52WTJ0bGRDSXNJbWh2YzNRaUxDSlhaV0pUYjJOclpYUWlMQ0pyWlhraUxDSmlhVzVrVEdsemRHVnVaWEp6SWl3aWIyNXZjR1Z1SWl3aWIyNVBjR1Z1SWl3aWIyNWxjbkp2Y2lJc0ltVnljbTl5SWl3aWIyNUZjbkp2Y2lJc0ltOXVZMnh2YzJVaUxDSmpiRzl6WlVWMlpXNTBJaXdpYjI1RGJHOXpaU0lzSW05dWJXVnpjMkZuWlNJc0ltMWxjM05oWjJVaUxDSnZiazFsYzNOaFoyVWlMQ0ppYVc1a0lpd2ljMjlqYTJWMFgybGtJaXdpWTI5dWMyOXNaU0lzSW5KbFlXUjVVM1JoZEdVaUxDSkRURTlUUlVRaUxDSjBlWEJsSWl3aVpVUmhkR0VpTENKS1UwOU9JaXdpY0dGeWMyVWlMQ0oxYm1SbFptbHVaV1FpTENKbWFXNWtJaXdpWlcxcGRDSXNJbXB6YjI0aUxDSnpkSEpwYm1kcFpua2lMQ0pEWVd4c1ltRmphMUpsWjJsemRISjVJaXdpWDJOaGJHeGlZV05yY3lJc0luQnlaV1pwZUNJc0ltTmhiR3hpWVdOcklpd2lZMjl1ZEdWNGRDSXNJbkJ5WldacGVHVmtSWFpsYm5ST1lXMWxJaXdpY0hWemFDSXNJbVp1SWl3aWJtRnRaWE1pTENKeVpXMXZkbVZEWVd4c1ltRmpheUlzSW5KbGJXOTJaVUZzYkVOaGJHeGlZV05yY3lJc0lteGxibWQwYUNJc0ltTmhiR3hpWVdOcmN5SXNJbWRzYjJKaGJGOWpZV3hzWW1GamEzTWlMQ0psZG1WdWRFNWhiV1VpTENKaFpHUWlMQ0p5WlcxdmRtVWlMQ0oxYm1KcGJtUWlMQ0oxYm1KcGJtUmZaMnh2WW1Gc0lpd2laMlYwSWl3aVkyRnNiQ0lzSWxCMWMyaGxjaUlzSW1Gd2NGOXJaWGtpTENKdmNIUnBiMjV6SWl3aVkyaGxZMnRCY0hCTFpYa2lMQ0prYVhOd1lYUmphR1Z5SWl3aVkyOXVibVZqZENJc0ltTm9ZVzV1Wld4ZmJtRnRaU0lzSW0xbGRHaHZaQ0lzSW5CaGNtRnRjeUlzSW1GemMybG5iaUlzSW1kbGRGTnZZMnRsZEVsa0lpd2lZWGhwYjNNaUxDSjFjbXdpTENKb1pXRmtaWEp6SWl3aWRHaGxiaUlzSW1OaGRHTm9JaXdpZDJsdVpHOTNJbDBzSW0xaGNIQnBibWR6SWpvaU8wRkJRVUU3UVVGRFFUczdRVUZGUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdPenRCUVVkQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeHJSRUZCTUVNc1owTkJRV2RETzBGQlF6RkZPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRXNaMFZCUVhkRUxHdENRVUZyUWp0QlFVTXhSVHRCUVVOQkxIbEVRVUZwUkN4alFVRmpPMEZCUXk5RU96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4cFJFRkJlVU1zYVVOQlFXbERPMEZCUXpGRkxIZElRVUZuU0N4dFFrRkJiVUlzUlVGQlJUdEJRVU55U1R0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEcxRFFVRXlRaXd3UWtGQk1FSXNSVUZCUlR0QlFVTjJSQ3g1UTBGQmFVTXNaVUZCWlR0QlFVTm9SRHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVN3NFJFRkJjMFFzSzBSQlFTdEVPenRCUVVWeVNEdEJRVU5CT3pzN1FVRkhRVHRCUVVOQk96czdPenM3T3pzN096czdRVU5zUmtFc2FVSkJRV2xDTEcxQ1FVRlBMRU5CUVVNc2MwUkJRV0VzUlRzN096czdPenM3T3pzN08wRkRRWHBDT3p0QlFVVmlMRmxCUVZrc2JVSkJRVThzUTBGQlF5eHhSRUZCV1R0QlFVTm9ReXhoUVVGaExHMUNRVUZQTEVOQlFVTXNhVVZCUVd0Q08wRkJRM1pETEdWQlFXVXNiVUpCUVU4c1EwRkJReXd5UlVGQmRVSTdRVUZET1VNc2JVSkJRVzFDTEcxQ1FVRlBMRU5CUVVNc2JVWkJRVEpDTzBGQlEzUkVMSE5DUVVGelFpeHRRa0ZCVHl4RFFVRkRMSGxHUVVFNFFqdEJRVU0xUkN4clFrRkJhMElzYlVKQlFVOHNRMEZCUXl4NVJVRkJjVUk3UVVGREwwTXNlVVpCUVhsR0xHMUNRVUZQTEVOQlFVTXNiVVZCUVcxQ096dEJRVVZ3U0R0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTERSRFFVRTBRenRCUVVNMVF6czdRVUZGUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRXNVVUZCVVN4aFFVRnZRanRCUVVNMVFqdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCT3p0QlFVVkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEc5Q1FVRnZRaXh0UWtGQlR5eERRVUZETEhsRlFVRnpRanM3UVVGRmJFUTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRXNVMEZCVXp0QlFVTlVPMEZCUTBFN1FVRkRRVHRCUVVOQkxFOUJRVTg3UVVGRFVEczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJMRTlCUVU4N1FVRkRVRHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4UFFVRlBPMEZCUTFBN08wRkJSVUU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRU3hIUVVGSE8wRkJRMGc3T3pzN096czdPenM3T3pzN1FVTnVUR0U3TzBGQlJXSXNXVUZCV1N4dFFrRkJUeXhEUVVGRExHdEVRVUZUTzBGQlF6ZENMRmRCUVZjc2JVSkJRVThzUTBGQlF5eG5SVUZCWjBJN1FVRkRia01zV1VGQldTeHRRa0ZCVHl4RFFVRkRMRFJFUVVGak8wRkJRMnhETEdWQlFXVXNiVUpCUVU4c1EwRkJReXgzUkVGQldUczdRVUZGYmtNN1FVRkRRVHRCUVVOQk8wRkJRMEVzVjBGQlZ5eFBRVUZQTzBGQlEyeENMRmxCUVZrc1RVRkJUVHRCUVVOc1FqdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHM3UVVGRlFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRU3hsUVVGbExHMUNRVUZQTEVOQlFVTXNhMFZCUVdsQ08wRkJRM2hETEc5Q1FVRnZRaXh0UWtGQlR5eERRVUZETERSRlFVRnpRanRCUVVOc1JDeHBRa0ZCYVVJc2JVSkJRVThzUTBGQlF5eHpSVUZCYlVJN08wRkJSVFZETzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFc1pVRkJaU3h0UWtGQlR5eERRVUZETEc5RlFVRnJRanM3UVVGRmVrTTdPMEZCUlVFN1FVRkRRVHM3T3pzN096czdPenM3T3p0QlEyNUVZVHM3UVVGRllqdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJMRmRCUVZjc1VVRkJVVHRCUVVOdVFqdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdPMEZCUlVFN096czdPenM3T3pzN096czdRVU5zUW1FN08wRkJSV0lzWVVGQllTeHRRa0ZCVHl4RFFVRkRMREpFUVVGVk96dEJRVVV2UWp0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxGZEJRVmNzVTBGQlV6dEJRVU53UWp0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJMRWRCUVVjN08wRkJSVWc3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFTeEhRVUZITzBGQlEwZzdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFc1IwRkJSenRCUVVOSU8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN096czdPenM3T3pzN096czdRVU40UkdFN08wRkJSV0k3UVVGRFFUdEJRVU5CT3pzN096czdPenM3T3pzN08wRkRTbUU3TzBGQlJXSXNaVUZCWlN4dFFrRkJUeXhEUVVGRExESkVRVUZsTzBGQlEzUkRMRmxCUVZrc2JVSkJRVThzUTBGQlF5eHhSRUZCV1R0QlFVTm9ReXg1UWtGQmVVSXNiVUpCUVU4c1EwRkJReXhwUmtGQmMwSTdRVUZEZGtRc2MwSkJRWE5DTEcxQ1FVRlBMRU5CUVVNc01rVkJRVzFDT3p0QlFVVnFSRHRCUVVOQk8wRkJRMEU3UVVGRFFTeFhRVUZYTEU5QlFVODdRVUZEYkVJN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeFhRVUZYTEU5QlFVODdRVUZEYkVJN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4TFFVRkxPMEZCUTB3N08wRkJSVUVzYTBOQlFXdERMR05CUVdNN1FVRkRhRVE3TzBGQlJVRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFTeEhRVUZIT3p0QlFVVklPMEZCUTBFN1FVRkRRU3hIUVVGSE96dEJRVVZJTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFc1owUkJRV2RFTzBGQlEyaEVPMEZCUTBFN1FVRkRRU3hMUVVGTE8wRkJRMHc3UVVGRFFTeERRVUZET3p0QlFVVkVPMEZCUTBFN1FVRkRRVHRCUVVOQkxHZEVRVUZuUkR0QlFVTm9SRHRCUVVOQk8wRkJRMEU3UVVGRFFTeExRVUZMTzBGQlEwdzdRVUZEUVN4RFFVRkRPenRCUVVWRU96czdPenM3T3pzN096czdPMEZET1VWaE96dEJRVVZpTEZsQlFWa3NiVUpCUVU4c1EwRkJReXh4UkVGQldUczdRVUZGYUVNN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJMRmRCUVZjc1UwRkJVenRCUVVOd1FpeFhRVUZYTEZOQlFWTTdRVUZEY0VJN1FVRkRRU3haUVVGWkxFOUJRVTg3UVVGRGJrSTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxFZEJRVWM3UVVGRFNEdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxGZEJRVmNzVDBGQlR6dEJRVU5zUWp0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEVzVjBGQlZ5eFRRVUZUTzBGQlEzQkNPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEVkQlFVYzdRVUZEU0RzN1FVRkZRVHM3T3pzN096czdPenM3T3p0QlEyNUVZVHM3UVVGRllpeHRRa0ZCYlVJc2JVSkJRVThzUTBGQlF5eHhSVUZCWjBJN08wRkJSVE5ETzBGQlEwRTdRVUZEUVR0QlFVTkJMRmRCUVZjc1QwRkJUenRCUVVOc1FpeFhRVUZYTEU5QlFVODdRVUZEYkVJc1YwRkJWeXhQUVVGUE8wRkJRMnhDTEZkQlFWY3NUMEZCVHp0QlFVTnNRaXhYUVVGWExFOUJRVTg3UVVGRGJFSXNZVUZCWVN4TlFVRk5PMEZCUTI1Q08wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPenM3T3pzN096czdPenM3UVVOcVFtRTdPMEZCUldJc1dVRkJXU3h0UWtGQlR5eERRVUZETEhGRVFVRlpPMEZCUTJoRExHOUNRVUZ2UWl4dFFrRkJUeXhEUVVGRExIVkZRVUZwUWp0QlFVTTNReXhsUVVGbExHMUNRVUZQTEVOQlFVTXNkVVZCUVc5Q08wRkJRek5ETEdWQlFXVXNiVUpCUVU4c1EwRkJReXg1UkVGQllUdEJRVU53UXl4dlFrRkJiMElzYlVKQlFVOHNRMEZCUXl4eFJrRkJORUk3UVVGRGVFUXNhMEpCUVd0Q0xHMUNRVUZQTEVOQlFVTXNhVVpCUVRCQ096dEJRVVZ3UkR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxGZEJRVmNzVDBGQlR6dEJRVU5zUWl4aFFVRmhMRkZCUVZFN1FVRkRja0k3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRU3dyUWtGQkswSTdRVUZETDBJc2RVTkJRWFZETzBGQlEzWkRPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk96dEJRVVZCTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFc1IwRkJSenRCUVVOSU8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFc1IwRkJSenRCUVVOSU96czdPenM3T3pzN096czdPMEZEY2taaE96dEJRVVZpTzBGQlEwRTdRVUZEUVR0QlFVTkJMRmRCUVZjc1RVRkJUVHRCUVVOcVFpeFhRVUZYTEU5QlFVODdRVUZEYkVJc1YwRkJWeXhQUVVGUE8wRkJRMnhDTEZkQlFWY3NUMEZCVHp0QlFVTnNRaXhYUVVGWExFOUJRVTg3UVVGRGJFSXNZVUZCWVN4TlFVRk5PMEZCUTI1Q08wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96czdPenM3T3pzN096czdPMEZEY0VKaE96dEJRVVZpTEd0Q1FVRnJRaXh0UWtGQlR5eERRVUZETEcxRlFVRmxPenRCUVVWNlF6dEJRVU5CTzBGQlEwRTdRVUZEUVN4WFFVRlhMRk5CUVZNN1FVRkRjRUlzVjBGQlZ5eFRRVUZUTzBGQlEzQkNMRmRCUVZjc1QwRkJUenRCUVVOc1FqdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3hIUVVGSE8wRkJRMGc3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96czdPenM3T3pzN096czdPMEZEZWtKaE96dEJRVVZpTEZsQlFWa3NiVUpCUVU4c1EwRkJReXh4UkVGQldUczdRVUZGYUVNN1FVRkRRVHRCUVVOQk8wRkJRMEVzVjBGQlZ5eGpRVUZqTzBGQlEzcENMRmRCUVZjc1RVRkJUVHRCUVVOcVFpeFhRVUZYTEdWQlFXVTdRVUZETVVJc1lVRkJZU3hGUVVGRk8wRkJRMlk3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJMRWRCUVVjN08wRkJSVWc3UVVGRFFUczdPenM3T3pzN096czdPenRCUTI1Q1FTd3JRMEZCWVRzN1FVRkZZaXhaUVVGWkxHMUNRVUZQTEVOQlFVTXNhMFJCUVZNN1FVRkROMElzTUVKQlFUQkNMRzFDUVVGUExFTkJRVU1zT0VaQlFTdENPenRCUVVWcVJUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxHTkJRV01zYlVKQlFVOHNRMEZCUXl4blJVRkJaMEk3UVVGRGRFTXNSMEZCUnp0QlFVTklPMEZCUTBFc1kwRkJZeXh0UWtGQlR5eERRVUZETEdsRlFVRnBRanRCUVVOMlF6dEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3gzUlVGQmQwVTdRVUZEZUVVN1FVRkRRVHRCUVVOQk8wRkJRMEVzZFVSQlFYVkVPMEZCUTNaRU8wRkJRMEU3UVVGRFFUdEJRVU5CTEVkQlFVYzdPMEZCUlVnN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEU5QlFVOHNXVUZCV1R0QlFVTnVRanRCUVVOQk8wRkJRMEVzUjBGQlJ6czdRVUZGU0R0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdPMEZCUlVFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFc1EwRkJRenM3UVVGRlJEdEJRVU5CTzBGQlEwRXNRMEZCUXpzN1FVRkZSRHM3T3pzN096czdPenM3T3pzN1FVTXZSbUU3TzBGQlJXSTdRVUZEUVR0QlFVTkJPMEZCUTBFc2JVSkJRVzFDTEdsQ1FVRnBRanRCUVVOd1F6dEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPenM3T3pzN096czdPenM3TzBGRFZtRTdPMEZCUldJN08wRkJSVUU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHM3T3pzN096czdPenM3T3p0QlEyNURZVHM3UVVGRllpeFpRVUZaTEcxQ1FVRlBMRU5CUVVNc2NVUkJRVms3TzBGQlJXaERPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEZkQlFWY3NUMEZCVHp0QlFVTnNRaXhYUVVGWExFOUJRVTg3UVVGRGJFSXNZVUZCWVN4UFFVRlBPMEZCUTNCQ08wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeEhRVUZITzBGQlEwZzdRVUZEUVN4SFFVRkhPMEZCUTBnN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQkxFOUJRVTg3UVVGRFVEdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxGTkJRVk03UVVGRFZEdEJRVU5CTzBGQlEwRTdRVUZEUVN4UFFVRlBPMEZCUTFBc1MwRkJTenM3UVVGRlREdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CT3pzN096czdPenM3T3pzN08wRkRha1ZoT3p0QlFVVmlPMEZCUTBFN1FVRkRRVHRCUVVOQkxGZEJRVmNzVDBGQlR6dEJRVU5zUWl4WFFVRlhMRTlCUVU4N1FVRkRiRUlzWVVGQllTeFBRVUZQTzBGQlEzQkNPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdPenM3T3pzN096czdPenRCUTJKaE96dEJRVVZpTEZsQlFWa3NiVUpCUVU4c1EwRkJReXh4UkVGQldUczdRVUZGYUVNN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk96dEJRVVZCTEhkRFFVRjNRenRCUVVONFF5eFBRVUZQT3p0QlFVVlFPMEZCUTBFc01FUkJRVEJFTEhkQ1FVRjNRanRCUVVOc1JqdEJRVU5CTEU5QlFVODdPMEZCUlZBN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeEhRVUZIT3p0QlFVVklPMEZCUTBFN1FVRkRRVHRCUVVOQkxHZERRVUZuUXp0QlFVTm9ReXcyUWtGQk5rSXNZVUZCWVN4RlFVRkZPMEZCUXpWRE8wRkJRMEU3UVVGRFFTeEhRVUZITzBGQlEwZzdPenM3T3pzN096czdPenM3UVVOd1JHRTdPMEZCUldJN1FVRkRRVHRCUVVOQk8wRkJRMEVzVjBGQlZ5eFBRVUZQTzBGQlEyeENMR0ZCUVdFc1VVRkJVVHRCUVVOeVFqdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3T3pzN096czdPenM3T3p0QlEySmhPenRCUVVWaUxGbEJRVmtzYlVKQlFVOHNRMEZCUXl4eFJFRkJXVHM3UVVGRmFFTTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEVzWTBGQll5eFBRVUZQTzBGQlEzSkNMR2RDUVVGblFqdEJRVU5vUWp0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJMR05CUVdNc1QwRkJUenRCUVVOeVFpeG5Ra0ZCWjBJc1VVRkJVVHRCUVVONFFqdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3hIUVVGSE96dEJRVVZJTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3hIUVVGSE8wRkJRMGc3T3pzN096czdPenM3T3pzN1FVTnVSV0U3TzBGQlJXSXNXVUZCV1N4dFFrRkJUeXhEUVVGRExHMUVRVUZWT3p0QlFVVTVRanRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4SFFVRkhPMEZCUTBnN096czdPenM3T3pzN096czdRVU5ZWVRzN1FVRkZZaXhaUVVGWkxHMUNRVUZQTEVOQlFVTXNjVVJCUVZrN08wRkJSV2hETzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4WFFVRlhMRTlCUVU4N1FVRkRiRUlzWVVGQllTeFBRVUZQTzBGQlEzQkNPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVN4cFFrRkJhVUlzWlVGQlpUczdRVUZGYUVNN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEVzVDBGQlR6dEJRVU5RTzBGQlEwRTdRVUZEUVR0QlFVTkJMRWRCUVVjN08wRkJSVWc3UVVGRFFUczdPenM3T3pzN096czdPenRCUTNCRVlUczdRVUZGWWp0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEVzSzBKQlFTdENPMEZCUXk5Q08wRkJRMEU3UVVGRFFTeFhRVUZYTEZOQlFWTTdRVUZEY0VJc1lVRkJZVHRCUVVOaU8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN096czdPenM3T3pzN096dEJRekZDWVRzN1FVRkZZaXhYUVVGWExHMUNRVUZQTEVOQlFVTXNaMFZCUVdkQ08wRkJRMjVETEdWQlFXVXNiVUpCUVU4c1EwRkJReXh2UkVGQlZ6czdRVUZGYkVNN08wRkJSVUU3TzBGQlJVRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEVzVjBGQlZ5eFBRVUZQTzBGQlEyeENMR0ZCUVdFc1VVRkJVVHRCUVVOeVFqdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeFhRVUZYTEU5QlFVODdRVUZEYkVJc1lVRkJZU3hSUVVGUk8wRkJRM0pDTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEZkQlFWY3NUMEZCVHp0QlFVTnNRaXhoUVVGaExGRkJRVkU3UVVGRGNrSTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRXNWMEZCVnl4UFFVRlBPMEZCUTJ4Q0xHRkJRV0VzVVVGQlVUdEJRVU55UWp0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEVzUjBGQlJ6dEJRVU5JTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEZkQlFWY3NUMEZCVHp0QlFVTnNRaXhoUVVGaExGRkJRVkU3UVVGRGNrSTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRXNWMEZCVnl4UFFVRlBPMEZCUTJ4Q0xHRkJRV0VzVVVGQlVUdEJRVU55UWp0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4WFFVRlhMRTlCUVU4N1FVRkRiRUlzWVVGQllTeFJRVUZSTzBGQlEzSkNPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJMRmRCUVZjc1QwRkJUenRCUVVOc1FpeGhRVUZoTEZGQlFWRTdRVUZEY2tJN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFc1YwRkJWeXhQUVVGUE8wRkJRMnhDTEdGQlFXRXNVVUZCVVR0QlFVTnlRanRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3hYUVVGWExFOUJRVTg3UVVGRGJFSXNZVUZCWVN4UlFVRlJPMEZCUTNKQ08wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxGZEJRVmNzVDBGQlR6dEJRVU5zUWl4aFFVRmhMRkZCUVZFN1FVRkRja0k3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEVzVjBGQlZ5eFBRVUZQTzBGQlEyeENMR0ZCUVdFc1VVRkJVVHRCUVVOeVFqdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeFhRVUZYTEU5QlFVODdRVUZEYkVJc1lVRkJZU3hSUVVGUk8wRkJRM0pDTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEZkQlFWY3NUMEZCVHp0QlFVTnNRaXhoUVVGaExGRkJRVkU3UVVGRGNrSTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRXNWMEZCVnl4UFFVRlBPMEZCUTJ4Q0xHRkJRV0VzVDBGQlR6dEJRVU53UWp0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3hYUVVGWExHRkJRV0U3UVVGRGVFSXNWMEZCVnl4VFFVRlRPMEZCUTNCQ08wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRU3h0UTBGQmJVTXNUMEZCVHp0QlFVTXhRenRCUVVOQk8wRkJRMEVzUjBGQlJ6dEJRVU5JTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4MVFrRkJkVUlzVTBGQlV5eEhRVUZITEZOQlFWTTdRVUZETlVNc01rSkJRVEpDTzBGQlF6TkNPMEZCUTBFN1FVRkRRU3hYUVVGWExFOUJRVTg3UVVGRGJFSXNZVUZCWVN4UFFVRlBPMEZCUTNCQ08wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJMRXRCUVVzN1FVRkRURHRCUVVOQk8wRkJRMEU3TzBGQlJVRXNkVU5CUVhWRExFOUJRVTg3UVVGRE9VTTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRXNWMEZCVnl4UFFVRlBPMEZCUTJ4Q0xGZEJRVmNzVDBGQlR6dEJRVU5zUWl4WFFVRlhMRTlCUVU4N1FVRkRiRUlzV1VGQldTeFBRVUZQTzBGQlEyNUNPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeExRVUZMTzBGQlEwdzdRVUZEUVR0QlFVTkJMRWRCUVVjN1FVRkRTRHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPenM3T3pzN096czdPenM3UVVNNVUwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96czdPenM3T3pzN096czdRVU53UWtFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRXNVMEZCVXp0QlFVTlVPMEZCUTBFN1FVRkRRU3hMUVVGTE8wRkJRMHc3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJMRk5CUVZNN1FVRkRWRHRCUVVOQk8wRkJRMEVzUzBGQlN6dEJRVU5NTzBGQlEwRTdRVUZEUVN4RFFVRkRPMEZCUTBRN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeExRVUZMTzBGQlEwdzdRVUZEUVR0QlFVTkJPMEZCUTBFc1UwRkJVenRCUVVOVU8wRkJRMEU3UVVGRFFUdEJRVU5CT3pzN1FVRkhRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRXNTMEZCU3p0QlFVTk1PMEZCUTBFN1FVRkRRVHRCUVVOQkxGTkJRVk03UVVGRFZEdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPenM3TzBGQlNVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxFdEJRVXM3UVVGRFREdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEhWQ1FVRjFRaXh6UWtGQmMwSTdRVUZETjBNN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeHhRa0ZCY1VJN1FVRkRja0k3TzBGQlJVRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQkxIRkRRVUZ4UXpzN1FVRkZja003UVVGRFFUdEJRVU5CT3p0QlFVVkJMREpDUVVFeVFqdEJRVU16UWp0QlFVTkJPMEZCUTBFN1FVRkRRU3cwUWtGQk5FSXNWVUZCVlRzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenRCUTNaTWRFTTdRVUZGVHl4SlFVRk5RU3hQUVVGaU8wRkJRVUU3UVVGQlFUdEJRVUZCT3p0QlFVTkpMRzFDUVVGWlF5eEpRVUZhTEVWQlFXdENReXhOUVVGc1FpeEZRVUV3UWp0QlFVRkJPenRCUVVGQk96dEJRVU4wUWp0QlFVVkJMRlZCUVV0RUxFbEJRVXdzUjBGQldVRXNTVUZCV2p0QlFVTkJMRlZCUVV0RExFMUJRVXdzUjBGQlkwRXNUVUZCWkRzN1FVRkZRU3hSUVVGSkxFMUJRVXRCTEUxQlFVd3NRMEZCV1VNc1RVRkJXaXhEUVVGdFFrTXNTMEZCYmtJc1NVRkJORUlzUTBGQmFFTXNSVUZCYlVNN1FVRkRMMElzV1VGQlMwTXNVMEZCVER0QlFVTklPenRCUVZKeFFqdEJRVk42UWpzN1FVRldURHRCUVVGQk8wRkJRVUVzWjBOQldXZENPMEZCUTFJc1YwRkJTMGdzVFVGQlRDeERRVUZaU1N4SlFVRmFMRU5CUVdsQ08wRkJRMkpETEdGQlFVc3NSVUZCUlN4WFFVUk5PMEZCUldKRExGbEJRVWtzUlVGQlJUdEJRVU5HUXl4cFFrRkJUeXhGUVVGRkxFdEJRVXRTTzBGQlJGbzdRVUZHVHl4UFFVRnFRanRCUVUxSU8wRkJia0pNT3p0QlFVRkJPMEZCUVVFc1JVRkJOa0pUTERaRVFVRTNRaXhGT3pzN096czdPenM3T3pzN096czdPenM3T3pzN096dEJRMFpCTzBGQlEwRTdRVUZEUVR0QlFVVlBMRWxCUVUxRExGRkJRV0k3UVVGQlFUdEJRVUZCTzBGQlEwa3NjMEpCUVdNN1FVRkJRVHM3UVVGRFZpeFRRVUZMUXl4UlFVRk1MRWRCUVdkQ0xFVkJRV2hDTzBGQlEwZzdPMEZCU0V3N1FVRkJRVHRCUVVGQkxIZENRVXRSV0N4SlFVeFNMRVZCUzJORExFMUJUR1FzUlVGTGMwSTdRVUZEWkN4VlFVRkpMRU5CUVVNc1MwRkJTMVVzVVVGQlRDeERRVUZqV0N4SlFVRmtMRU5CUVV3c1JVRkJNRUk3UVVGRGRFSXNZVUZCUzFjc1VVRkJUQ3hEUVVGaldDeEpRVUZrTEVsQlFYTkNXU3hoUVVGaExFTkJRVU5hTEVsQlFVUXNSVUZCVDBNc1RVRkJVQ3hEUVVGdVF6dEJRVU5JT3p0QlFVTkVMR0ZCUVU4c1MwRkJTMVVzVVVGQlRDeERRVUZqV0N4SlFVRmtMRU5CUVZBN1FVRkRTRHRCUVZaTU8wRkJRVUU3UVVGQlFTd3dRa0ZaVlR0QlFVTkdMR0ZCUVU5aExFMUJRVTBzUTBGQlEwTXNTVUZCVUN4RFFVRlpMRXRCUVV0SUxGRkJRV3BDTEVOQlFWQTdRVUZEU0R0QlFXUk1PMEZCUVVFN1FVRkJRU3g1UWtGblFsTllMRWxCYUVKVUxFVkJaMEpsTzBGQlExQXNZVUZCVHl4TFFVRkxWeXhSUVVGTUxFTkJRV05ZTEVsQlFXUXNRMEZCVUR0QlFVTklPMEZCYkVKTU8wRkJRVUU3UVVGQlFTd3lRa0Z2UWxkQkxFbEJjRUpZTEVWQmIwSnBRanRCUVVOVUxGVkJRVWxSTEU5QlFVOHNSMEZCUnl4TFFVRkxSeXhSUVVGTUxFTkJRV05ZTEVsQlFXUXNRMEZCWkR0QlFVTkJMR0ZCUVU4c1MwRkJTMWNzVVVGQlRDeERRVUZqV0N4SlFVRmtMRU5CUVZBN1FVRkRRU3hoUVVGUFVTeFBRVUZRTzBGQlEwZzdRVUY0UWt3N1FVRkJRVHRCUVVGQkxHZERRVEJDWjBJN1FVRkRVaXhYUVVGTExFbEJRVWxQTEVOQlFWUXNTVUZCWXl4TFFVRkxTaXhSUVVGdVFpeEZRVUUyUWp0QlFVTjZRaXhoUVVGTFFTeFJRVUZNTEVOQlFXTkpMRU5CUVdRc1JVRkJhVUpZTEZOQlFXcENPMEZCUTBnN1FVRkZTanRCUVM5Q1REczdRVUZCUVR0QlFVRkJPenRCUVd0RFFTeFRRVUZUVVN4aFFVRlVMRU5CUVhWQ1dpeEpRVUYyUWl4RlFVRTJRa01zVFVGQk4wSXNSVUZCY1VNN1FVRkRha01zVFVGQlNVUXNTVUZCU1N4RFFVRkRaMElzVDBGQlRDeERRVUZoTEZWQlFXSXNUVUZCTmtJc1EwRkJha01zUlVGQmIwTTdRVUZEYUVNc1YwRkJUeXhKUVVGSlF5d3JSRUZCU2l4RFFVRnRRbXBDTEVsQlFXNUNMRVZCUVhsQ1F5eE5RVUY2UWl4RFFVRlFPMEZCUTBnc1IwRkdSQ3hOUVVWUExFbEJRVWxFTEVsQlFVa3NRMEZCUTJkQ0xFOUJRVXdzUTBGQllTeFhRVUZpTEUxQlFUaENMRU5CUVd4RExFVkJRWEZETzBGQlEzaERMRmRCUVU4c1NVRkJTVVVzYVVWQlFVb3NRMEZCYjBKc1FpeEpRVUZ3UWl4RlFVRXdRa01zVFVGQk1VSXNRMEZCVUR0QlFVTklMRWRCUmswc1RVRkZRVHRCUVVOSUxGZEJRVThzU1VGQlNVWXNaMFJCUVVvc1EwRkJXVU1zU1VGQldpeEZRVUZyUWtNc1RVRkJiRUlzUTBGQlVEdEJRVU5JTzBGQlEwb3NRenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN08wRkRPVU5FTzBGQlJVOHNTVUZCVFdsQ0xHVkJRV0k3UVVGQlFUdEJRVUZCTzBGQlFVRTdPMEZCUTBrc01rSkJRVmxzUWl4SlFVRmFMRVZCUVd0Q1F5eE5RVUZzUWl4RlFVRXdRanRCUVVGQk96dEJRVUZCT3p0QlFVTjBRanRCUVVWQkxGVkJRVXRFTEVsQlFVd3NSMEZCV1VFc1NVRkJXanRCUVVOQkxGVkJRVXRETEUxQlFVd3NSMEZCWTBFc1RVRkJaRHRCUVVOQkxGVkJRVXRyUWl4SlFVRk1MRWRCUVZrc1NVRkJXanM3UVVGRlFTeFJRVUZKTEUxQlFVdHNRaXhOUVVGTUxFTkJRVmxETEUxQlFWb3NRMEZCYlVKRExFdEJRVzVDTEVsQlFUUkNMRU5CUVdoRExFVkJRVzFETzBGQlF5OUNMRmxCUVV0RExGTkJRVXc3UVVGRFNEczdRVUZVY1VJN1FVRlZla0k3TzBGQldFdzdRVUZCUVR0QlFVRkJMR2REUVdGblFqdEJRVUZCT3p0QlFVTlNMRmRCUVV0SUxFMUJRVXdzUTBGQldXdENMRWxCUVZvc1EwRkJhVUlzUzBGQlMyNUNMRWxCUVhSQ0xFVkJRVFJDTEZWQlFVTnZRaXhEUVVGRUxFVkJRVTg3UVVGREwwSXNZMEZCU1N4RFFVRkRSQ3hKUVVGTUxFZEJRVmxETEVOQlFVTXNRMEZCUTJJc1NVRkJSaXhEUVVGUFdTeEpRVUZ1UWpzN1FVRkZRU3hqUVVGSkxFTkJRVU5zUWl4TlFVRk1MRU5CUVZsSkxFbEJRVm9zUTBGQmFVSTdRVUZEWWtNc1pVRkJTeXhGUVVGRkxGZEJSRTA3UVVGRllrTXNZMEZCU1N4RlFVRkZPMEZCUTBaRExHMUNRVUZQTEVWQlFVVXNUVUZCU1N4RFFVRkRVaXhKUVVSYU8wRkJSVVp0UWl4blFrRkJTU3hGUVVGRkxFMUJRVWtzUTBGQlEwRXNTVUZHVkR0QlFVZEdSU3gzUWtGQldTeEZRVUZGUkN4RFFVRkRMRU5CUVVOaUxFbEJRVVlzUTBGQlQyTTdRVUZJYmtJN1FVRkdUeXhUUVVGcVFqdEJRVkZJTEU5QldFUTdRVUZaU0R0QlFURkNURHM3UVVGQlFUdEJRVUZCTEVWQlFYRkRXaXcyUkVGQmNrTXNSVHM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN08wRkRSa0U3UVVGRlR5eEpRVUZOVVN4alFVRmlPMEZCUVVFN1FVRkJRVHRCUVVGQk96dEJRVU5KTERCQ1FVRlpha0lzU1VGQldpeEZRVUZyUWtNc1RVRkJiRUlzUlVGQk1FSTdRVUZCUVRzN1FVRkJRVHM3UVVGRGRFSTdRVUZGUVN4VlFVRkxSQ3hKUVVGTUxFZEJRVmxCTEVsQlFWbzdRVUZEUVN4VlFVRkxReXhOUVVGTUxFZEJRV05CTEUxQlFXUTdRVUZEUVN4VlFVRkxhMElzU1VGQlRDeEhRVUZaTEVsQlFWbzdPMEZCUlVFc1VVRkJTU3hOUVVGTGJFSXNUVUZCVEN4RFFVRlpReXhOUVVGYUxFTkJRVzFDUXl4TFFVRnVRaXhKUVVFMFFpeERRVUZvUXl4RlFVRnRRenRCUVVNdlFpeFpRVUZMUXl4VFFVRk1PMEZCUTBnN08wRkJWSEZDTzBGQlZYcENPenRCUVZoTU8wRkJRVUU3UVVGQlFTeG5RMEZoWjBJN1FVRkJRVHM3UVVGRFVpeFhRVUZMU0N4TlFVRk1MRU5CUVZsclFpeEpRVUZhTEVOQlFXbENMRXRCUVV0dVFpeEpRVUYwUWl4RlFVRTBRaXhWUVVGRGIwSXNRMEZCUkN4RlFVRlBPMEZCUXk5Q0xHTkJRVWtzUTBGQlEwUXNTVUZCVEN4SFFVRlpReXhEUVVGRExFTkJRVU5pTEVsQlFVWXNRMEZCVDFrc1NVRkJia0k3TzBGQlJVRXNZMEZCU1N4RFFVRkRiRUlzVFVGQlRDeERRVUZaU1N4SlFVRmFMRU5CUVdsQ08wRkJRMkpETEdWQlFVc3NSVUZCUlN4WFFVUk5PMEZCUldKRExHTkJRVWtzUlVGQlJUdEJRVU5HUXl4dFFrRkJUeXhGUVVGRkxFMUJRVWtzUTBGQlExSXNTVUZFV2p0QlFVVkdiVUlzWjBKQlFVa3NSVUZCUlN4TlFVRkpMRU5CUVVOQk8wRkJSbFE3UVVGR1R5eFRRVUZxUWp0QlFVOUlMRTlCVmtRN1FVRlhTRHRCUVhwQ1REczdRVUZCUVR0QlFVRkJMRVZCUVc5RFZpdzJSRUZCY0VNc1JUczdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3TzBGRFJrRTdRVUZGVHl4SlFVRk5ZU3hOUVVGaU8wRkJRVUU3UVVGQlFUdEJRVUZCT3p0QlFVTkpMR3RDUVVGWmNrSXNUVUZCV2l4RlFVRnZRbk5DTEVsQlFYQkNMRVZCUVRCQ08wRkJRVUU3TzBGQlFVRTdPMEZCUTNSQ08wRkJSVUVzVlVGQlMzUkNMRTFCUVV3c1IwRkJZMEVzVFVGQlpEdEJRVU5CTEZWQlFVdERMRTFCUVV3c1IwRkJZeXhKUVVGSmMwSXNVMEZCU2l4RFFVRmpSQ3hKUVVGSkxFZEJRVWNzUjBGQlVDeEhRVUZoTEUxQlFVdDBRaXhOUVVGTUxFTkJRVmwzUWl4SFFVRjJReXhEUVVGa096dEJRVVZCTEZWQlFVdERMR0ZCUVV3N08wRkJUbk5DTzBGQlQzcENPenRCUVZKTU8wRkJRVUU3UVVGQlFTeHZRMEZWYjBJN1FVRkJRVHM3UVVGRFdpeFhRVUZMZUVJc1RVRkJUQ3hEUVVGWmVVSXNUVUZCV2l4SFFVRnhRaXhaUVVGTk8wRkJRM1pDTEdOQlFVa3NRMEZCUTBNc1RVRkJURHRCUVVOSUxFOUJSa1E3TzBGQlIwRXNWMEZCU3pGQ0xFMUJRVXdzUTBGQldUSkNMRTlCUVZvc1IwRkJjMElzVlVGQlEwTXNTMEZCUkN4RlFVRlhPMEZCUXpkQ0xHTkJRVWtzUTBGQlEwTXNUMEZCVEN4RFFVRmhSQ3hMUVVGaU8wRkJRMGdzVDBGR1JEczdRVUZIUVN4WFFVRkxOVUlzVFVGQlRDeERRVUZaT0VJc1QwRkJXaXhIUVVGelFpeFZRVUZEUXl4VlFVRkVMRVZCUVdkQ08wRkJRMnhETEdOQlFVa3NRMEZCUTBNc1QwRkJUQ3hEUVVGaFJDeFZRVUZpTzBGQlEwZ3NUMEZHUkRzN1FVRkhRU3hYUVVGTEwwSXNUVUZCVEN4RFFVRlphVU1zVTBGQldpeEhRVUYzUWl4VlFVRkRReXhQUVVGRUxFVkJRV0U3UVVGRGFrTXNZMEZCU1N4RFFVRkRReXhUUVVGTUxFTkJRV1ZFTEU5QlFXWTdRVUZEU0N4UFFVWkVPMEZCUjBnN1FVRjJRa3c3UVVGQlFUdEJRVUZCTERaQ1FYbENZVHRCUVVGQk96dEJRVU5NTzBGQlEwRXNWMEZCUzJwRExFdEJRVXdzUjBGQllTeERRVUZpTzBGQlJVRXNWMEZCUzIxRExFbEJRVXdzUTBGQlZTeFhRVUZXTEVWQlFYVkNMRlZCUVVOc1FpeERRVUZFTEVWQlFVODdRVUZETVVJc1kwRkJTU3hEUVVGRGJFSXNUVUZCVEN4RFFVRlpjVU1zVTBGQldpeEhRVUYzUW01Q0xFTkJRVU1zUTBGQlEyMUNMRk5CUVRGQ08wRkJRMEVzWTBGQlNTeERRVUZEY0VNc1MwRkJUQ3hIUVVGaExFTkJRV0lzUTBGR01FSXNRMEZKTVVJN08wRkJRMEVzWTBGQlNTeERRVUZEUml4TlFVRk1MRU5CUVZsVkxGRkJRVm9zUTBGQmNVSlFMRk5CUVhKQ08wRkJRMGdzVDBGT1JEdEJRVkZCTEZkQlFVdHJReXhKUVVGTUxFTkJRVlVzYlVKQlFWWXNSVUZCSzBJc1ZVRkJRMnhDTEVOQlFVUXNSVUZCVHp0QlFVTnNReXhqUVVGSkxFTkJRVU5xUWl4TFFVRk1MRWRCUVdFc1EwRkJReXhEUVVGa08wRkJRMEZ4UXl4bFFVRlBMRU5CUVVOV0xFdEJRVklzUTBGQlkxWXNRMEZCUXl4RFFVRkRWU3hMUVVGb1FqdEJRVU5JTEU5QlNFUTdRVUZMUVRzN08wRkJSMGc3UVVFM1EwdzdRVUZCUVR0QlFVRkJMRFJDUVN0RFdVRXNTMEV2UTFvc1JVRXJRMjFDTzBGQlExaFZMR0ZCUVU4c1EwRkJRMVlzUzBGQlVpeERRVUZqUVN4TFFVRmtPMEZCUTBnN1FVRnFSRXc3UVVGQlFUdEJRVUZCTERSQ1FXMUVXVWNzVlVGdVJGb3NSVUZ0UkhkQ08wRkJRMmhDTEZWQlFVa3NTMEZCU3k5Q0xFMUJRVXdzUTBGQldYVkRMRlZCUVZvc1NVRkJNRUpxUWl4VFFVRlRMRU5CUVVOclFpeE5RVUY0UXl4RlFVRm5SRHRCUVVNMVF5eFpRVUZKVkN4VlFVRlZMRU5CUVVOVkxFbEJRVmdzU1VGQmJVSXNUMEZCZGtJc1JVRkJaME03UVVGRE5VSklMR2xDUVVGUExFTkJRVU5XTEV0QlFWSXNRMEZCWXl4bFFVRmtPMEZCUTBnc1UwRkdSQ3hOUVVWUExFbEJRVWxITEZWQlFWVXNRMEZCUTFVc1NVRkJXQ3hKUVVGdFFpeFRRVUYyUWl4RlFVRnJRenRCUVVOeVEwZ3NhVUpCUVU4c1EwRkJRMVlzUzBGQlVpeERRVUZqUnl4VlFVRlZMRU5CUVVNeFFpeEpRVUY2UWp0QlFVTklMRk5CUmswc1RVRkZRVHRCUVVOSWFVTXNhVUpCUVU4c1EwRkJRMVlzUzBGQlVpeERRVUZqTEU5QlFXUTdRVUZEU0R0QlFVTktPMEZCUTBvN1FVRTNSRXc3UVVGQlFUdEJRVUZCTERoQ1FTdEVZMDBzVDBFdlJHUXNSVUVyUkhWQ08wRkJRMllzVlVGQlNWRXNTMEZCU3l4SFFVRkhReXhKUVVGSkxFTkJRVU5ETEV0QlFVd3NRMEZCVjFZc1QwRkJUeXhEUVVGRE4wSXNTVUZCYmtJc1EwRkJXanRCUVVOQkxGVkJRVWxFTEV0QlFVc3NSMEZCUjNORExFdEJRVXNzUTBGQlEzUkRMRXRCUVd4Q08wRkJRMEVzVlVGQlNVTXNTVUZCU1N4SFFVRkhjVU1zUzBGQlN5eERRVUZEY2tNc1NVRkJha0k3TzBGQlJVRXNWVUZCU1hGRExFdEJRVXNzUTBGQlEzQkRMRTlCUVU0c1MwRkJhMEoxUXl4VFFVRjBRaXhGUVVGcFF6dEJRVU0zUWl4aFFVRkxPVU1zVFVGQlRDeERRVUZaVlN4UlFVRmFMRU5CUVhGQ2NVTXNTVUZCY2tJc1EwRkJNRUpLTEV0QlFVc3NRMEZCUTNCRExFOUJRV2hETEVWQlFYbERlVU1zU1VGQmVrTXNRMEZCT0VNelF5eExRVUU1UXl4RlFVRnhSRU1zU1VGQmNrUTdRVUZEU0N4UFFVWkVMRTFCUlU4N1FVRkRTQ3hoUVVGTE1FTXNTVUZCVEN4RFFVRlZNME1zUzBGQlZpeEZRVUZwUWtNc1NVRkJha0k3UVVGRFNEdEJRVVZLTzBGQk1VVk1PMEZCUVVFN1FVRkJRU3g1UWtFMFJWTXlReXhKUVRWRlZDeEZRVFJGWlR0QlFVTlFMRlZCUVVrc1MwRkJTeTlETEV0QlFVd3NTMEZCWlN4RFFVRkRMRU5CUVhCQ0xFVkJRWFZDTzBGQlEyNUNMR0ZCUVV0RUxFMUJRVXdzUTBGQldVY3NTVUZCV2l4RFFVRnBRbmRETEVsQlFVa3NRMEZCUTAwc1UwRkJUQ3hEUVVGbFJDeEpRVUZtTEVOQlFXcENPMEZCUTBnN1FVRkRTanRCUVdoR1REczdRVUZCUVR0QlFVRkJMRVZCUVRSQ2VrTXNOa1JCUVRWQ0xFVTdPenM3T3pzN096czdPenM3T3pzN096czdPMEZEUms4c1NVRkJUVEpETEdkQ1FVRmlPMEZCUVVFN1FVRkJRVHRCUVVOSkxEaENRVUZqTzBGQlFVRTdPMEZCUTFZc1UwRkJTME1zVlVGQlRDeEhRVUZyUWl4RlFVRnNRanRCUVVOSU96dEJRVWhNTzBGQlFVRTdRVUZCUVN4M1FrRkxVWEpFTEVsQlRGSXNSVUZMWXp0QlFVTk9MR0ZCUVU4c1MwRkJTM0ZFTEZWQlFVd3NRMEZCWjBKRExFMUJRVTBzUTBGQlEzUkVMRWxCUVVRc1EwRkJkRUlzUTBGQlVEdEJRVU5JTzBGQlVFdzdRVUZCUVR0QlFVRkJMSGRDUVZOUlFTeEpRVlJTTEVWQlUyTjFSQ3hSUVZSa0xFVkJVM2RDUXl4UFFWUjRRaXhGUVZOcFF6dEJRVU42UWl4VlFVRkpReXhwUWtGQmFVSXNSMEZCUjBnc1RVRkJUU3hEUVVGRGRFUXNTVUZCUkN4RFFVRTVRanRCUVVOQkxGZEJRVXR4UkN4VlFVRk1MRU5CUVdkQ1NTeHBRa0ZCYUVJc1NVRkJjVU1zUzBGQlMwb3NWVUZCVEN4RFFVRm5Ra2tzYVVKQlFXaENMRXRCUVhORExFVkJRVE5GT3p0QlFVTkJMRmRCUVV0S0xGVkJRVXdzUTBGQlowSkpMR2xDUVVGb1FpeEZRVUZ0UTBNc1NVRkJia01zUTBGQmQwTTdRVUZEY0VORExGVkJRVVVzUlVGQlJVb3NVVUZFWjBNN1FVRkZjRU5ETEdWQlFVOHNSVUZCUlVFN1FVRkdNa0lzVDBGQmVFTTdRVUZKU0R0QlFXaENURHRCUVVGQk8wRkJRVUVzTWtKQmEwSlhlRVFzU1VGc1FsZ3NSVUZyUW1sQ2RVUXNVVUZzUW1wQ0xFVkJhMEl5UWtNc1QwRnNRak5DTEVWQmEwSnZRenRCUVVNMVFpeFZRVUZKTEVOQlFVTjRSQ3hKUVVGRUxFbEJRVk1zUTBGQlEzVkVMRkZCUVZZc1NVRkJjMElzUTBGQlEwTXNUMEZCTTBJc1JVRkJiME03UVVGRGFFTXNZVUZCUzBnc1ZVRkJUQ3hIUVVGclFpeEZRVUZzUWp0QlFVTkJPMEZCUTBnN08wRkJSVVFzVlVGQlNVOHNTMEZCU3l4SFFVRkhOVVFzU1VGQlNTeEhRVUZITEVOQlFVTnpSQ3hOUVVGTkxFTkJRVU4wUkN4SlFVRkVMRU5CUVZBc1EwRkJTQ3hIUVVGdlFtRXNUVUZCVFN4RFFVRkRReXhKUVVGUUxFTkJRVmtzUzBGQlMzVkRMRlZCUVdwQ0xFTkJRWEJET3p0QlFVVkJMRlZCUVVsRkxGRkJRVkVzU1VGQlNVTXNUMEZCYUVJc1JVRkJlVUk3UVVGRGNrSXNZVUZCUzBzc1kwRkJUQ3hEUVVGdlFrUXNTMEZCY0VJc1JVRkJNa0pNTEZGQlFUTkNMRVZCUVhGRFF5eFBRVUZ5UXp0QlFVTklMRTlCUmtRc1RVRkZUenRCUVVOSUxHRkJRVXROTEd0Q1FVRk1MRU5CUVhkQ1JpeExRVUY0UWp0QlFVTklPMEZCUTBvN1FVRXZRa3c3UVVGQlFUdEJRVUZCTEcxRFFXbERiVUpCTEV0QmFrTnVRaXhGUVdsRE1FSk1MRkZCYWtNeFFpeEZRV2xEYjBORExFOUJha053UXl4RlFXbEROa003UVVGRGNrTXNWMEZCU3l4SlFVRkplRVFzU1VGQlZDeEpRVUZwUWpSRUxFdEJRV3BDTEVWQlFYZENPMEZCUTNCQ0xHRkJRVXNzU1VGQlNXNURMRWRCUVZRc1NVRkJaMElzUzBGQlN6UkNMRlZCUVV3c1EwRkJaMEp5UkN4SlFVRm9RaXhEUVVGb1FpeEZRVUYxUXp0QlFVTnVReXhqUVVGSkxFdEJRVXR4UkN4VlFVRk1MRU5CUVdkQ2NrUXNTVUZCYUVJc1JVRkJjMEo1UWl4SFFVRjBRaXhGUVVFeVFtdERMRVZCUVROQ0xFbEJRV2xEU2l4UlFVRnFReXhKUVVFMlF5eExRVUZMUml4VlFVRk1MRU5CUVdkQ2NrUXNTVUZCYUVJc1JVRkJjMEo1UWl4SFFVRjBRaXhGUVVFeVFpdENMRTlCUVROQ0xFbEJRWE5EUVN4UFFVRjJSaXhGUVVGblJ6dEJRVU0xUml4dFFrRkJUeXhMUVVGTFNDeFZRVUZNTEVOQlFXZENja1FzU1VGQmFFSXNSVUZCYzBKNVFpeEhRVUYwUWl4RFFVRlFPMEZCUTBnN1FVRkRTanM3UVVGRlJDeFpRVUZKTEV0QlFVczBRaXhWUVVGTUxFTkJRV2RDY2tRc1NVRkJhRUlzUlVGQmMwSXJSQ3hOUVVGMFFpeExRVUZwUXl4RFFVRnlReXhGUVVGM1F6dEJRVU53UXl4cFFrRkJUeXhMUVVGTFZpeFZRVUZNTEVOQlFXZENja1FzU1VGQmFFSXNRMEZCVUR0QlFVTklPMEZCUTBvN1FVRkRTanRCUVRkRFREdEJRVUZCTzBGQlFVRXNkVU5CSzBOMVFqUkVMRXRCTDBOMlFpeEZRU3RET0VJN1FVRkRkRUlzVjBGQlN5eEpRVUZKTlVRc1NVRkJWQ3hKUVVGcFFqUkVMRXRCUVdwQ0xFVkJRWGRDTzBGQlEzQkNMR1ZCUVU4c1MwRkJTMUFzVlVGQlRDeERRVUZuUW5KRUxFbEJRV2hDTEVOQlFWQTdRVUZEU0R0QlFVTktPMEZCYmtSTU96dEJRVUZCTzBGQlFVRTdPMEZCYzBSQkxGTkJRVk56UkN4TlFVRlVMRU5CUVdkQ2RFUXNTVUZCYUVJc1JVRkJjMEk3UVVGRGJFSXNVMEZCVHl4TlFVRk5RU3hKUVVGaU8wRkJRMGdzUXpzN096czdPenM3T3pzN096czdPenM3T3pzN08wRkRlRVJFTzBGQlJVOHNTVUZCVFZNc1ZVRkJZanRCUVVGQk8wRkJRVUU3UVVGRFNTeDNRa0ZCWXp0QlFVRkJPenRCUVVOV0xGTkJRVXQxUkN4VFFVRk1MRWRCUVdsQ0xFbEJRVWxhTEcxRlFVRktMRVZCUVdwQ08wRkJRMEVzVTBGQlMyRXNaMEpCUVV3c1IwRkJkMElzUlVGQmVFSTdRVUZEU0RzN1FVRktURHRCUVVGQk8wRkJRVUVzZVVKQlRWTkRMRk5CVGxRc1JVRk5iMEpZTEZGQlRuQkNMRVZCVFRoQ1F5eFBRVTQ1UWl4RlFVMTFRenRCUVVNdlFpeFhRVUZMVVN4VFFVRk1MRU5CUVdWSExFZEJRV1lzUTBGQmJVSkVMRk5CUVc1Q0xFVkJRVGhDV0N4UlFVRTVRaXhGUVVGM1EwTXNUMEZCZUVNN1FVRkRRU3hoUVVGUExFbEJRVkE3UVVGRFNEdEJRVlJNTzBGQlFVRTdRVUZCUVN4blEwRlhaMEpFTEZGQldHaENMRVZCVnpCQ08wRkJRMnhDTEZkQlFVdFZMR2RDUVVGTUxFTkJRWE5DVUN4SlFVRjBRaXhEUVVFeVFrZ3NVVUZCTTBJN1FVRkRRU3hoUVVGUExFbEJRVkE3UVVGRFNEdEJRV1JNTzBGQlFVRTdRVUZCUVN3eVFrRm5RbGRYTEZOQmFFSllMRVZCWjBKelFsZ3NVVUZvUW5SQ0xFVkJaMEpuUTBNc1QwRm9RbWhETEVWQlowSjVRenRCUVVOcVF5eFhRVUZMVVN4VFFVRk1MRU5CUVdWSkxFMUJRV1lzUTBGQmMwSkdMRk5CUVhSQ0xFVkJRV2xEV0N4UlFVRnFReXhGUVVFeVEwTXNUMEZCTTBNN1FVRkRRU3hoUVVGUExFbEJRVkE3UVVGRFNEdEJRVzVDVER0QlFVRkJPMEZCUVVFc2EwTkJjVUpyUWtRc1VVRnlRbXhDTEVWQmNVSTBRanRCUVVOd1FpeFZRVUZKTEVOQlFVTkJMRkZCUVV3c1JVRkJaVHRCUVVOWUxHRkJRVXRWTEdkQ1FVRk1MRWRCUVhkQ0xFVkJRWGhDTzBGQlEwRXNaVUZCVHl4SlFVRlFPMEZCUTBnN08wRkJSVVFzVjBGQlN5eEpRVUZKYkVRc1EwRkJWQ3hKUVVGakxFdEJRVXRyUkN4blFrRkJia0lzUlVGQmNVTTdRVUZEYWtNc1dVRkJTVllzVVVGQlVTeEpRVUZKTEV0QlFVdFZMR2RDUVVGTUxFTkJRWE5DYkVRc1EwRkJkRUlzUTBGQmFFSXNSVUZCTUVNN1FVRkRkRU1zYVVKQlFVOHNTMEZCUzJ0RUxHZENRVUZNTEVOQlFYTkNiRVFzUTBGQmRFSXNRMEZCVUR0QlFVTklPMEZCUTBvN08wRkJRMFFzWVVGQlR5eEpRVUZRTzBGQlEwZzdRVUZxUTB3N1FVRkJRVHRCUVVGQkxHbERRVzFEYVVJN1FVRkRWQ3hYUVVGTGMwUXNUVUZCVER0QlFVTkJMRmRCUVV0RExHRkJRVXc3UVVGRFFTeGhRVUZQTEVsQlFWQTdRVUZEU0R0QlFYWkRURHRCUVVGQk8wRkJRVUVzZVVKQmVVTlRTaXhUUVhwRFZDeEZRWGxEYjBJelJDeEpRWHBEY0VJc1JVRjVRekJDTzBGQlEyeENMRmRCUVVzc1NVRkJTVkVzUTBGQlF5eEhRVUZITEVOQlFXSXNSVUZCWjBKQkxFTkJRVU1zUjBGQlJ5eExRVUZMYTBRc1owSkJRVXdzUTBGQmMwSkdMRTFCUVRGRExFVkJRV3RFYUVRc1EwRkJReXhGUVVGdVJDeEZRVUYxUkR0QlFVTnVSQ3hoUVVGTGEwUXNaMEpCUVV3c1EwRkJjMEpzUkN4RFFVRjBRaXhGUVVGNVFtMUVMRk5CUVhwQ0xFVkJRVzlETTBRc1NVRkJjRU03UVVGRFNEczdRVUZGUkN4VlFVRkplVVFzVTBGQlV5eEhRVUZITEV0QlFVdEJMRk5CUVV3c1EwRkJaVThzUjBGQlppeERRVUZ0UWt3c1UwRkJia0lzUTBGQmFFSTdPMEZCUTBFc1ZVRkJTVVlzVTBGQlV5eEpRVUZKUVN4VFFVRlRMRU5CUVVORUxFMUJRVllzUjBGQmJVSXNRMEZCY0VNc1JVRkJkVU03UVVGRGJrTXNZVUZCU3l4SlFVRkphRVFzUlVGQlF5eEhRVUZITEVOQlFXSXNSVUZCWjBKQkxFVkJRVU1zUjBGQlIybEVMRk5CUVZNc1EwRkJRMFFzVFVGQk9VSXNSVUZCYzBOb1JDeEZRVUZETEVWQlFYWkRMRVZCUVRKRE8wRkJRM1pEYVVRc2JVSkJRVk1zUTBGQlEycEVMRVZCUVVRc1EwRkJWQ3hEUVVGaE5FTXNSVUZCWWl4RFFVRm5RbUVzU1VGQmFFSXNRMEZCY1VKU0xGTkJRVk1zUTBGQlEycEVMRVZCUVVRc1EwRkJWQ3hEUVVGaGVVTXNUMEZCYkVNc1JVRkJNa05xUkN4SlFVRXpRenRCUVVOSU8wRkJRMG83TzBGQlJVUXNZVUZCVHl4SlFVRlFPMEZCUTBnN1FVRjBSRXc3TzBGQlFVRTdRVUZCUVN4Sk96czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3TzBGRFJrRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkZUeXhKUVVGTmEwVXNUVUZCWWp0QlFVRkJPMEZCUVVFN1FVRkRTU3hyUWtGQldVTXNUMEZCV2l4RlFVRnhRa01zVDBGQmNrSXNSVUZCT0VJN1FVRkJRVHM3UVVGRE1VSXNVMEZCUzBNc1YwRkJUQ3hEUVVGcFFrWXNUMEZCYWtJN1FVRkZRU3hUUVVGTGFrUXNSMEZCVEN4SFFVRlhhVVFzVDBGQldEdEJRVU5CTEZOQlFVdERMRTlCUVV3c1IwRkJaVUVzVDBGQlR5eEpRVUZKTEVWQlFURkNPMEZCUTBFc1UwRkJTMFVzVlVGQlRDeEhRVUZyUWl4SlFVRkpjRVVzTmtSQlFVb3NSVUZCYkVJN1FVRkRRU3hUUVVGTFJTeFJRVUZNTEVkQlFXZENMRWxCUVVsRUxESkVRVUZLTEVWQlFXaENPMEZCUlVFc1UwRkJTMjlGTEU5QlFVdzdRVUZEU0RzN1FVRldURHRCUVVGQk8wRkJRVUVzT0VKQldXTTdRVUZEVGl4WFFVRkxOVVVzVFVGQlRDeEhRVUZqTEVsQlFVbHZRaXg1UkVGQlNpeERRVUZYTEVsQlFWZ3NSVUZCYVVJc1MwRkJTM0ZFTEU5QlFVd3NRMEZCWVhCRUxFbEJRVGxDTEVOQlFXUTdRVUZEU0R0QlFXUk1PMEZCUVVFN1FVRkJRU3c0UWtGblFtTjNSQ3haUVdoQ1pDeEZRV2RDTkVJN1FVRkRjRUlzWVVGQlR5eExRVUZMY0VVc1VVRkJUQ3hEUVVGamQwUXNSMEZCWkN4RFFVRnJRbGtzV1VGQmJFSXNSVUZCWjBNc1NVRkJhRU1zUTBGQlVEdEJRVU5JTzBGQmJFSk1PMEZCUVVFN1FVRkJRU3huUTBGdlFtZENRU3haUVhCQ2FFSXNSVUZ2UWpoQ08wRkJRM1JDTEZkQlFVdHdSU3hSUVVGTUxFTkJRV041UkN4TlFVRmtMRU5CUVhGQ1Z5eFpRVUZ5UWp0QlFVTklPMEZCZEVKTU8wRkJRVUU3UVVGQlFTeHJRMEYzUW10Q08wRkJRMVlzWVVGQlR5eExRVUZMTjBVc1RVRkJUQ3hEUVVGWlFTeE5RVUZhTEVOQlFXMUNjVU1zVTBGQk1VSTdRVUZEU0R0QlFURkNURHRCUVVGQk8wRkJRVUVzZVVKQk5FSlRWeXhKUVRWQ1ZDeEZRVFJDWlR0QlFVTlFMRmRCUVV0b1JDeE5RVUZNTEVOQlFWbEhMRWxCUVZvc1EwRkJhVUkyUXl4SlFVRnFRanRCUVVOSU8wRkJPVUpNTzBGQlFVRTdRVUZCUVN4blEwRm5RMmRDZWtJc1IwRm9RMmhDTEVWQlowTnhRanRCUVVOaUxHRkJRVThzU1VGQlVEdEJRVU5JTzBGQmJFTk1PMEZCUVVFN1FVRkJRU3g1UWtGdlExTjZRaXhKUVhCRFZDeEZRVzlEWlhWRUxGRkJjRU5tTEVWQmIwTjVRanRCUVVOcVFpeFZRVUZKZVVJc1RVRkJUU3hIUVVGSExFdEJRVXRNTEU5QlFVd3NRMEZCWVhoRUxFbEJRV0lzUTBGQmEwSTJSQ3hOUVVGc1FpeEpRVUUwUWl4TlFVRjZRenRCUVVOQkxGVkJRVWw2UlN4SlFVRkpMRWRCUVVjc1JVRkJXRHRCUVVOQkxGVkJRVWt3UlN4TlFVRk5MRWRCUVVjc1JVRkJZanM3UVVGRlFTeFZRVUZKUkN4TlFVRk5MRWxCUVVrc1RVRkJaQ3hGUVVGelFqdEJRVU5zUW5wRkxGbEJRVWtzUjBGQlIwMHNUVUZCVFN4RFFVRkRjVVVzVFVGQlVDeERRVUZqTzBGQlEycENTQ3h6UWtGQldTeEZRVUZGTDBVc1NVRkVSenRCUVVWcVFuVkRMRzFDUVVGVExFVkJRVVVzUzBGQlN6UkRMRmRCUVV3N1FVRkdUU3hUUVVGa0xFTkJRVkE3UVVGSlNDeFBRVXhFTEUxQlMwODdRVUZEU0VZc1kwRkJUU3hIUVVGSGNFVXNUVUZCVFN4RFFVRkRjVVVzVFVGQlVDeERRVUZqTzBGQlEyNUNTQ3h6UWtGQldTeEZRVUZGTDBVc1NVRkVTenRCUVVWdVFuVkRMRzFDUVVGVExFVkJRVVVzUzBGQlN6UkRMRmRCUVV3N1FVRkdVU3hUUVVGa0xFTkJRVlE3UVVGSlNEczdRVUZGUkVNc2EwUkJRVXNzUTBGQlF6dEJRVU5HUXl4WFFVRkhMRVZCUVVVc1MwRkJTMVlzVDBGQlRDeERRVUZoZUVRc1NVRkJZaXhEUVVGclFtdEZMRWRCUkhKQ08wRkJSVVpNTEdOQlFVMHNSVUZCUlVFc1RVRkdUanRCUVVkR1RTeGxRVUZQTEVWQlFVVXNTMEZCUzFnc1QwRkJUQ3hEUVVGaGVFUXNTVUZCWWl4RFFVRnJRbTFGTEU5QlFXeENMRWxCUVRaQ0xFVkJTSEJETzBGQlNVWk1MR05CUVUwc1JVRkJSVUVzVFVGS1RqdEJRVXRHTVVVc1dVRkJTU3hGUVVGRlFUdEJRVXhLTEU5QlFVUXNRMEZCVEN4RFFVMUhaMFlzU1VGT1NDeERRVTFSTEZWQlFVTnVSU3hEUVVGRUxFVkJRVTg3UVVGRFdHMURMR2RDUVVGUkxFTkJRVU51UXl4RFFVRkVMRU5CUVZJN1FVRkRTQ3hQUVZKRUxFVkJVVWR2UlN4TFFWSklMRU5CVVZNc1ZVRkJRM0JGTEVOQlFVUXNSVUZCVHp0QlFVTmFiMElzWlVGQlR5eERRVUZEVml4TFFVRlNMRU5CUVdNc1YwRkJaRHRCUVVOSUxFOUJWa1E3UVVGWFNEdEJRV2hGVERzN1FVRkJRVHRCUVVGQk8wRkJiVVZCTWtRc1RVRkJUU3hEUVVGRGFFSXNUVUZCVUN4SFFVRm5Ra0VzVFVGQmFFSXNReUlzSW1acGJHVWlPaUp3ZFhOb1pYSXVhbk1pTENKemIzVnlZMlZ6UTI5dWRHVnVkQ0k2V3lJZ1hIUXZMeUJVYUdVZ2JXOWtkV3hsSUdOaFkyaGxYRzRnWEhSMllYSWdhVzV6ZEdGc2JHVmtUVzlrZFd4bGN5QTlJSHQ5TzF4dVhHNGdYSFF2THlCVWFHVWdjbVZ4ZFdseVpTQm1kVzVqZEdsdmJseHVJRngwWm5WdVkzUnBiMjRnWDE5M1pXSndZV05yWDNKbGNYVnBjbVZmWHlodGIyUjFiR1ZKWkNrZ2UxeHVYRzRnWEhSY2RDOHZJRU5vWldOcklHbG1JRzF2WkhWc1pTQnBjeUJwYmlCallXTm9aVnh1SUZ4MFhIUnBaaWhwYm5OMFlXeHNaV1JOYjJSMWJHVnpXMjF2WkhWc1pVbGtYU2tnZTF4dUlGeDBYSFJjZEhKbGRIVnliaUJwYm5OMFlXeHNaV1JOYjJSMWJHVnpXMjF2WkhWc1pVbGtYUzVsZUhCdmNuUnpPMXh1SUZ4MFhIUjlYRzRnWEhSY2RDOHZJRU55WldGMFpTQmhJRzVsZHlCdGIyUjFiR1VnS0dGdVpDQndkWFFnYVhRZ2FXNTBieUIwYUdVZ1kyRmphR1VwWEc0Z1hIUmNkSFpoY2lCdGIyUjFiR1VnUFNCcGJuTjBZV3hzWldSTmIyUjFiR1Z6VzIxdlpIVnNaVWxrWFNBOUlIdGNiaUJjZEZ4MFhIUnBPaUJ0YjJSMWJHVkpaQ3hjYmlCY2RGeDBYSFJzT2lCbVlXeHpaU3hjYmlCY2RGeDBYSFJsZUhCdmNuUnpPaUI3ZlZ4dUlGeDBYSFI5TzF4dVhHNGdYSFJjZEM4dklFVjRaV04xZEdVZ2RHaGxJRzF2WkhWc1pTQm1kVzVqZEdsdmJseHVJRngwWEhSdGIyUjFiR1Z6VzIxdlpIVnNaVWxrWFM1allXeHNLRzF2WkhWc1pTNWxlSEJ2Y25SekxDQnRiMlIxYkdVc0lHMXZaSFZzWlM1bGVIQnZjblJ6TENCZlgzZGxZbkJoWTJ0ZmNtVnhkV2x5WlY5ZktUdGNibHh1SUZ4MFhIUXZMeUJHYkdGbklIUm9aU0J0YjJSMWJHVWdZWE1nYkc5aFpHVmtYRzRnWEhSY2RHMXZaSFZzWlM1c0lEMGdkSEoxWlR0Y2JseHVJRngwWEhRdkx5QlNaWFIxY200Z2RHaGxJR1Y0Y0c5eWRITWdiMllnZEdobElHMXZaSFZzWlZ4dUlGeDBYSFJ5WlhSMWNtNGdiVzlrZFd4bExtVjRjRzl5ZEhNN1hHNGdYSFI5WEc1Y2JseHVJRngwTHk4Z1pYaHdiM05sSUhSb1pTQnRiMlIxYkdWeklHOWlhbVZqZENBb1gxOTNaV0p3WVdOclgyMXZaSFZzWlhOZlh5bGNiaUJjZEY5ZmQyVmljR0ZqYTE5eVpYRjFhWEpsWDE4dWJTQTlJRzF2WkhWc1pYTTdYRzVjYmlCY2RDOHZJR1Y0Y0c5elpTQjBhR1VnYlc5a2RXeGxJR05oWTJobFhHNGdYSFJmWDNkbFluQmhZMnRmY21WeGRXbHlaVjlmTG1NZ1BTQnBibk4wWVd4c1pXUk5iMlIxYkdWek8xeHVYRzRnWEhRdkx5QmtaV1pwYm1VZ1oyVjBkR1Z5SUdaMWJtTjBhVzl1SUdadmNpQm9ZWEp0YjI1NUlHVjRjRzl5ZEhOY2JpQmNkRjlmZDJWaWNHRmphMTl5WlhGMWFYSmxYMTh1WkNBOUlHWjFibU4wYVc5dUtHVjRjRzl5ZEhNc0lHNWhiV1VzSUdkbGRIUmxjaWtnZTF4dUlGeDBYSFJwWmlnaFgxOTNaV0p3WVdOclgzSmxjWFZwY21WZlh5NXZLR1Y0Y0c5eWRITXNJRzVoYldVcEtTQjdYRzRnWEhSY2RGeDBUMkpxWldOMExtUmxabWx1WlZCeWIzQmxjblI1S0dWNGNHOXlkSE1zSUc1aGJXVXNJSHNnWlc1MWJXVnlZV0pzWlRvZ2RISjFaU3dnWjJWME9pQm5aWFIwWlhJZ2ZTazdYRzRnWEhSY2RIMWNiaUJjZEgwN1hHNWNiaUJjZEM4dklHUmxabWx1WlNCZlgyVnpUVzlrZFd4bElHOXVJR1Y0Y0c5eWRITmNiaUJjZEY5ZmQyVmljR0ZqYTE5eVpYRjFhWEpsWDE4dWNpQTlJR1oxYm1OMGFXOXVLR1Y0Y0c5eWRITXBJSHRjYmlCY2RGeDBhV1lvZEhsd1pXOW1JRk41YldKdmJDQWhQVDBnSjNWdVpHVm1hVzVsWkNjZ0ppWWdVM2x0WW05c0xuUnZVM1J5YVc1blZHRm5LU0I3WEc0Z1hIUmNkRngwVDJKcVpXTjBMbVJsWm1sdVpWQnliM0JsY25SNUtHVjRjRzl5ZEhNc0lGTjViV0p2YkM1MGIxTjBjbWx1WjFSaFp5d2dleUIyWVd4MVpUb2dKMDF2WkhWc1pTY2dmU2s3WEc0Z1hIUmNkSDFjYmlCY2RGeDBUMkpxWldOMExtUmxabWx1WlZCeWIzQmxjblI1S0dWNGNHOXlkSE1zSUNkZlgyVnpUVzlrZFd4bEp5d2dleUIyWVd4MVpUb2dkSEoxWlNCOUtUdGNiaUJjZEgwN1hHNWNiaUJjZEM4dklHTnlaV0YwWlNCaElHWmhhMlVnYm1GdFpYTndZV05sSUc5aWFtVmpkRnh1SUZ4MEx5OGdiVzlrWlNBbUlERTZJSFpoYkhWbElHbHpJR0VnYlc5a2RXeGxJR2xrTENCeVpYRjFhWEpsSUdsMFhHNGdYSFF2THlCdGIyUmxJQ1lnTWpvZ2JXVnlaMlVnWVd4c0lIQnliM0JsY25ScFpYTWdiMllnZG1Gc2RXVWdhVzUwYnlCMGFHVWdibk5jYmlCY2RDOHZJRzF2WkdVZ0ppQTBPaUJ5WlhSMWNtNGdkbUZzZFdVZ2QyaGxiaUJoYkhKbFlXUjVJRzV6SUc5aWFtVmpkRnh1SUZ4MEx5OGdiVzlrWlNBbUlEaDhNVG9nWW1Wb1lYWmxJR3hwYTJVZ2NtVnhkV2x5WlZ4dUlGeDBYMTkzWldKd1lXTnJYM0psY1hWcGNtVmZYeTUwSUQwZ1puVnVZM1JwYjI0b2RtRnNkV1VzSUcxdlpHVXBJSHRjYmlCY2RGeDBhV1lvYlc5a1pTQW1JREVwSUhaaGJIVmxJRDBnWDE5M1pXSndZV05yWDNKbGNYVnBjbVZmWHloMllXeDFaU2s3WEc0Z1hIUmNkR2xtS0cxdlpHVWdKaUE0S1NCeVpYUjFjbTRnZG1Gc2RXVTdYRzRnWEhSY2RHbG1LQ2h0YjJSbElDWWdOQ2tnSmlZZ2RIbHdaVzltSUhaaGJIVmxJRDA5UFNBbmIySnFaV04wSnlBbUppQjJZV3gxWlNBbUppQjJZV3gxWlM1ZlgyVnpUVzlrZFd4bEtTQnlaWFIxY200Z2RtRnNkV1U3WEc0Z1hIUmNkSFpoY2lCdWN5QTlJRTlpYW1WamRDNWpjbVZoZEdVb2JuVnNiQ2s3WEc0Z1hIUmNkRjlmZDJWaWNHRmphMTl5WlhGMWFYSmxYMTh1Y2lodWN5azdYRzRnWEhSY2RFOWlhbVZqZEM1a1pXWnBibVZRY205d1pYSjBlU2h1Y3l3Z0oyUmxabUYxYkhRbkxDQjdJR1Z1ZFcxbGNtRmliR1U2SUhSeWRXVXNJSFpoYkhWbE9pQjJZV3gxWlNCOUtUdGNiaUJjZEZ4MGFXWW9iVzlrWlNBbUlESWdKaVlnZEhsd1pXOW1JSFpoYkhWbElDRTlJQ2R6ZEhKcGJtY25LU0JtYjNJb2RtRnlJR3RsZVNCcGJpQjJZV3gxWlNrZ1gxOTNaV0p3WVdOclgzSmxjWFZwY21WZlh5NWtLRzV6TENCclpYa3NJR1oxYm1OMGFXOXVLR3RsZVNrZ2V5QnlaWFIxY200Z2RtRnNkV1ZiYTJWNVhUc2dmUzVpYVc1a0tHNTFiR3dzSUd0bGVTa3BPMXh1SUZ4MFhIUnlaWFIxY200Z2JuTTdYRzRnWEhSOU8xeHVYRzRnWEhRdkx5Qm5aWFJFWldaaGRXeDBSWGh3YjNKMElHWjFibU4wYVc5dUlHWnZjaUJqYjIxd1lYUnBZbWxzYVhSNUlIZHBkR2dnYm05dUxXaGhjbTF2Ym5rZ2JXOWtkV3hsYzF4dUlGeDBYMTkzWldKd1lXTnJYM0psY1hWcGNtVmZYeTV1SUQwZ1puVnVZM1JwYjI0b2JXOWtkV3hsS1NCN1hHNGdYSFJjZEhaaGNpQm5aWFIwWlhJZ1BTQnRiMlIxYkdVZ0ppWWdiVzlrZFd4bExsOWZaWE5OYjJSMWJHVWdQMXh1SUZ4MFhIUmNkR1oxYm1OMGFXOXVJR2RsZEVSbFptRjFiSFFvS1NCN0lISmxkSFZ5YmlCdGIyUjFiR1ZiSjJSbFptRjFiSFFuWFRzZ2ZTQTZYRzRnWEhSY2RGeDBablZ1WTNScGIyNGdaMlYwVFc5a2RXeGxSWGh3YjNKMGN5Z3BJSHNnY21WMGRYSnVJRzF2WkhWc1pUc2dmVHRjYmlCY2RGeDBYMTkzWldKd1lXTnJYM0psY1hWcGNtVmZYeTVrS0dkbGRIUmxjaXdnSjJFbkxDQm5aWFIwWlhJcE8xeHVJRngwWEhSeVpYUjFjbTRnWjJWMGRHVnlPMXh1SUZ4MGZUdGNibHh1SUZ4MEx5OGdUMkpxWldOMExuQnliM1J2ZEhsd1pTNW9ZWE5QZDI1UWNtOXdaWEowZVM1allXeHNYRzRnWEhSZlgzZGxZbkJoWTJ0ZmNtVnhkV2x5WlY5ZkxtOGdQU0JtZFc1amRHbHZiaWh2WW1wbFkzUXNJSEJ5YjNCbGNuUjVLU0I3SUhKbGRIVnliaUJQWW1wbFkzUXVjSEp2ZEc5MGVYQmxMbWhoYzA5M2JsQnliM0JsY25SNUxtTmhiR3dvYjJKcVpXTjBMQ0J3Y205d1pYSjBlU2s3SUgwN1hHNWNiaUJjZEM4dklGOWZkMlZpY0dGamExOXdkV0pzYVdOZmNHRjBhRjlmWEc0Z1hIUmZYM2RsWW5CaFkydGZjbVZ4ZFdseVpWOWZMbkFnUFNCY0lsd2lPMXh1WEc1Y2JpQmNkQzh2SUV4dllXUWdaVzUwY25rZ2JXOWtkV3hsSUdGdVpDQnlaWFIxY200Z1pYaHdiM0owYzF4dUlGeDBjbVYwZFhKdUlGOWZkMlZpY0dGamExOXlaWEYxYVhKbFgxOG9YMTkzWldKd1lXTnJYM0psY1hWcGNtVmZYeTV6SUQwZ1hDSXVMM055WXk5d2RYTm9aWEl1YW5OY0lpazdYRzRpTENKdGIyUjFiR1V1Wlhod2IzSjBjeUE5SUhKbGNYVnBjbVVvSnk0dmJHbGlMMkY0YVc5ekp5azdJaXdpSjNWelpTQnpkSEpwWTNRbk8xeHVYRzUyWVhJZ2RYUnBiSE1nUFNCeVpYRjFhWEpsS0NjdUx5NHVMM1YwYVd4ekp5azdYRzUyWVhJZ2MyVjBkR3hsSUQwZ2NtVnhkV2x5WlNnbkxpOHVMaTlqYjNKbEwzTmxkSFJzWlNjcE8xeHVkbUZ5SUdKMWFXeGtWVkpNSUQwZ2NtVnhkV2x5WlNnbkxpOHVMaTlvWld4d1pYSnpMMkoxYVd4a1ZWSk1KeWs3WEc1MllYSWdjR0Z5YzJWSVpXRmtaWEp6SUQwZ2NtVnhkV2x5WlNnbkxpOHVMaTlvWld4d1pYSnpMM0JoY25ObFNHVmhaR1Z5Y3ljcE8xeHVkbUZ5SUdselZWSk1VMkZ0WlU5eWFXZHBiaUE5SUhKbGNYVnBjbVVvSnk0dkxpNHZhR1ZzY0dWeWN5OXBjMVZTVEZOaGJXVlBjbWxuYVc0bktUdGNiblpoY2lCamNtVmhkR1ZGY25KdmNpQTlJSEpsY1hWcGNtVW9KeTR1TDJOdmNtVXZZM0psWVhSbFJYSnliM0luS1R0Y2JuWmhjaUJpZEc5aElEMGdLSFI1Y0dWdlppQjNhVzVrYjNjZ0lUMDlJQ2QxYm1SbFptbHVaV1FuSUNZbUlIZHBibVJ2ZHk1aWRHOWhJQ1ltSUhkcGJtUnZkeTVpZEc5aExtSnBibVFvZDJsdVpHOTNLU2tnZkh3Z2NtVnhkV2x5WlNnbkxpOHVMaTlvWld4d1pYSnpMMkowYjJFbktUdGNibHh1Ylc5a2RXeGxMbVY0Y0c5eWRITWdQU0JtZFc1amRHbHZiaUI0YUhKQlpHRndkR1Z5S0dOdmJtWnBaeWtnZTF4dUlDQnlaWFIxY200Z2JtVjNJRkJ5YjIxcGMyVW9ablZ1WTNScGIyNGdaR2x6Y0dGMFkyaFlhSEpTWlhGMVpYTjBLSEpsYzI5c2RtVXNJSEpsYW1WamRDa2dlMXh1SUNBZ0lIWmhjaUJ5WlhGMVpYTjBSR0YwWVNBOUlHTnZibVpwWnk1a1lYUmhPMXh1SUNBZ0lIWmhjaUJ5WlhGMVpYTjBTR1ZoWkdWeWN5QTlJR052Ym1acFp5NW9aV0ZrWlhKek8xeHVYRzRnSUNBZ2FXWWdLSFYwYVd4ekxtbHpSbTl5YlVSaGRHRW9jbVZ4ZFdWemRFUmhkR0VwS1NCN1hHNGdJQ0FnSUNCa1pXeGxkR1VnY21WeGRXVnpkRWhsWVdSbGNuTmJKME52Ym5SbGJuUXRWSGx3WlNkZE95QXZMeUJNWlhRZ2RHaGxJR0p5YjNkelpYSWdjMlYwSUdsMFhHNGdJQ0FnZlZ4dVhHNGdJQ0FnZG1GeUlISmxjWFZsYzNRZ1BTQnVaWGNnV0UxTVNIUjBjRkpsY1hWbGMzUW9LVHRjYmlBZ0lDQjJZWElnYkc5aFpFVjJaVzUwSUQwZ0oyOXVjbVZoWkhsemRHRjBaV05vWVc1blpTYzdYRzRnSUNBZ2RtRnlJSGhFYjIxaGFXNGdQU0JtWVd4elpUdGNibHh1SUNBZ0lDOHZJRVp2Y2lCSlJTQTRMemtnUTA5U1V5QnpkWEJ3YjNKMFhHNGdJQ0FnTHk4Z1QyNXNlU0J6ZFhCd2IzSjBjeUJRVDFOVUlHRnVaQ0JIUlZRZ1kyRnNiSE1nWVc1a0lHUnZaWE51SjNRZ2NtVjBkWEp1Y3lCMGFHVWdjbVZ6Y0c5dWMyVWdhR1ZoWkdWeWN5NWNiaUFnSUNBdkx5QkVUMDRuVkNCa2J5QjBhR2x6SUdadmNpQjBaWE4wYVc1bklHSXZZeUJZVFV4SWRIUndVbVZ4ZFdWemRDQnBjeUJ0YjJOclpXUXNJRzV2ZENCWVJHOXRZV2x1VW1WeGRXVnpkQzVjYmlBZ0lDQnBaaUFvY0hKdlkyVnpjeTVsYm5ZdVRrOUVSVjlGVGxZZ0lUMDlJQ2QwWlhOMEp5QW1KbHh1SUNBZ0lDQWdJQ0IwZVhCbGIyWWdkMmx1Wkc5M0lDRTlQU0FuZFc1a1pXWnBibVZrSnlBbUpseHVJQ0FnSUNBZ0lDQjNhVzVrYjNjdVdFUnZiV0ZwYmxKbGNYVmxjM1FnSmlZZ0lTZ25kMmwwYUVOeVpXUmxiblJwWVd4ekp5QnBiaUJ5WlhGMVpYTjBLU0FtSmx4dUlDQWdJQ0FnSUNBaGFYTlZVa3hUWVcxbFQzSnBaMmx1S0dOdmJtWnBaeTUxY213cEtTQjdYRzRnSUNBZ0lDQnlaWEYxWlhOMElEMGdibVYzSUhkcGJtUnZkeTVZUkc5dFlXbHVVbVZ4ZFdWemRDZ3BPMXh1SUNBZ0lDQWdiRzloWkVWMlpXNTBJRDBnSjI5dWJHOWhaQ2M3WEc0Z0lDQWdJQ0I0Ukc5dFlXbHVJRDBnZEhKMVpUdGNiaUFnSUNBZ0lISmxjWFZsYzNRdWIyNXdjbTluY21WemN5QTlJR1oxYm1OMGFXOXVJR2hoYm1Sc1pWQnliMmR5WlhOektDa2dlMzA3WEc0Z0lDQWdJQ0J5WlhGMVpYTjBMbTl1ZEdsdFpXOTFkQ0E5SUdaMWJtTjBhVzl1SUdoaGJtUnNaVlJwYldWdmRYUW9LU0I3ZlR0Y2JpQWdJQ0I5WEc1Y2JpQWdJQ0F2THlCSVZGUlFJR0poYzJsaklHRjFkR2hsYm5ScFkyRjBhVzl1WEc0Z0lDQWdhV1lnS0dOdmJtWnBaeTVoZFhSb0tTQjdYRzRnSUNBZ0lDQjJZWElnZFhObGNtNWhiV1VnUFNCamIyNW1hV2N1WVhWMGFDNTFjMlZ5Ym1GdFpTQjhmQ0FuSnp0Y2JpQWdJQ0FnSUhaaGNpQndZWE56ZDI5eVpDQTlJR052Ym1acFp5NWhkWFJvTG5CaGMzTjNiM0prSUh4OElDY25PMXh1SUNBZ0lDQWdjbVZ4ZFdWemRFaGxZV1JsY25NdVFYVjBhRzl5YVhwaGRHbHZiaUE5SUNkQ1lYTnBZeUFuSUNzZ1luUnZZU2gxYzJWeWJtRnRaU0FySUNjNkp5QXJJSEJoYzNOM2IzSmtLVHRjYmlBZ0lDQjlYRzVjYmlBZ0lDQnlaWEYxWlhOMExtOXdaVzRvWTI5dVptbG5MbTFsZEdodlpDNTBiMVZ3Y0dWeVEyRnpaU2dwTENCaWRXbHNaRlZTVENoamIyNW1hV2N1ZFhKc0xDQmpiMjVtYVdjdWNHRnlZVzF6TENCamIyNW1hV2N1Y0dGeVlXMXpVMlZ5YVdGc2FYcGxjaWtzSUhSeWRXVXBPMXh1WEc0Z0lDQWdMeThnVTJWMElIUm9aU0J5WlhGMVpYTjBJSFJwYldWdmRYUWdhVzRnVFZOY2JpQWdJQ0J5WlhGMVpYTjBMblJwYldWdmRYUWdQU0JqYjI1bWFXY3VkR2x0Wlc5MWREdGNibHh1SUNBZ0lDOHZJRXhwYzNSbGJpQm1iM0lnY21WaFpIa2djM1JoZEdWY2JpQWdJQ0J5WlhGMVpYTjBXMnh2WVdSRmRtVnVkRjBnUFNCbWRXNWpkR2x2YmlCb1lXNWtiR1ZNYjJGa0tDa2dlMXh1SUNBZ0lDQWdhV1lnS0NGeVpYRjFaWE4wSUh4OElDaHlaWEYxWlhOMExuSmxZV1I1VTNSaGRHVWdJVDA5SURRZ0ppWWdJWGhFYjIxaGFXNHBLU0I3WEc0Z0lDQWdJQ0FnSUhKbGRIVnlianRjYmlBZ0lDQWdJSDFjYmx4dUlDQWdJQ0FnTHk4Z1ZHaGxJSEpsY1hWbGMzUWdaWEp5YjNKbFpDQnZkWFFnWVc1a0lIZGxJR1JwWkc0bmRDQm5aWFFnWVNCeVpYTndiMjV6WlN3Z2RHaHBjeUIzYVd4c0lHSmxYRzRnSUNBZ0lDQXZMeUJvWVc1a2JHVmtJR0o1SUc5dVpYSnliM0lnYVc1emRHVmhaRnh1SUNBZ0lDQWdMeThnVjJsMGFDQnZibVVnWlhoalpYQjBhVzl1T2lCeVpYRjFaWE4wSUhSb1lYUWdkWE5wYm1jZ1ptbHNaVG9nY0hKdmRHOWpiMndzSUcxdmMzUWdZbkp2ZDNObGNuTmNiaUFnSUNBZ0lDOHZJSGRwYkd3Z2NtVjBkWEp1SUhOMFlYUjFjeUJoY3lBd0lHVjJaVzRnZEdodmRXZG9JR2wwSjNNZ1lTQnpkV05qWlhOelpuVnNJSEpsY1hWbGMzUmNiaUFnSUNBZ0lHbG1JQ2h5WlhGMVpYTjBMbk4wWVhSMWN5QTlQVDBnTUNBbUppQWhLSEpsY1hWbGMzUXVjbVZ6Y0c5dWMyVlZVa3dnSmlZZ2NtVnhkV1Z6ZEM1eVpYTndiMjV6WlZWU1RDNXBibVJsZUU5bUtDZG1hV3hsT2ljcElEMDlQU0F3S1NrZ2UxeHVJQ0FnSUNBZ0lDQnlaWFIxY200N1hHNGdJQ0FnSUNCOVhHNWNiaUFnSUNBZ0lDOHZJRkJ5WlhCaGNtVWdkR2hsSUhKbGMzQnZibk5sWEc0Z0lDQWdJQ0IyWVhJZ2NtVnpjRzl1YzJWSVpXRmtaWEp6SUQwZ0oyZGxkRUZzYkZKbGMzQnZibk5sU0dWaFpHVnljeWNnYVc0Z2NtVnhkV1Z6ZENBL0lIQmhjbk5sU0dWaFpHVnljeWh5WlhGMVpYTjBMbWRsZEVGc2JGSmxjM0J2Ym5ObFNHVmhaR1Z5Y3lncEtTQTZJRzUxYkd3N1hHNGdJQ0FnSUNCMllYSWdjbVZ6Y0c5dWMyVkVZWFJoSUQwZ0lXTnZibVpwWnk1eVpYTndiMjV6WlZSNWNHVWdmSHdnWTI5dVptbG5MbkpsYzNCdmJuTmxWSGx3WlNBOVBUMGdKM1JsZUhRbklEOGdjbVZ4ZFdWemRDNXlaWE53YjI1elpWUmxlSFFnT2lCeVpYRjFaWE4wTG5KbGMzQnZibk5sTzF4dUlDQWdJQ0FnZG1GeUlISmxjM0J2Ym5ObElEMGdlMXh1SUNBZ0lDQWdJQ0JrWVhSaE9pQnlaWE53YjI1elpVUmhkR0VzWEc0Z0lDQWdJQ0FnSUM4dklFbEZJSE5sYm1SeklERXlNak1nYVc1emRHVmhaQ0J2WmlBeU1EUWdLR2gwZEhCek9pOHZaMmwwYUhWaUxtTnZiUzloZUdsdmN5OWhlR2x2Y3k5cGMzTjFaWE12TWpBeEtWeHVJQ0FnSUNBZ0lDQnpkR0YwZFhNNklISmxjWFZsYzNRdWMzUmhkSFZ6SUQwOVBTQXhNakl6SUQ4Z01qQTBJRG9nY21WeGRXVnpkQzV6ZEdGMGRYTXNYRzRnSUNBZ0lDQWdJSE4wWVhSMWMxUmxlSFE2SUhKbGNYVmxjM1F1YzNSaGRIVnpJRDA5UFNBeE1qSXpJRDhnSjA1dklFTnZiblJsYm5RbklEb2djbVZ4ZFdWemRDNXpkR0YwZFhOVVpYaDBMRnh1SUNBZ0lDQWdJQ0JvWldGa1pYSnpPaUJ5WlhOd2IyNXpaVWhsWVdSbGNuTXNYRzRnSUNBZ0lDQWdJR052Ym1acFp6b2dZMjl1Wm1sbkxGeHVJQ0FnSUNBZ0lDQnlaWEYxWlhOME9pQnlaWEYxWlhOMFhHNGdJQ0FnSUNCOU8xeHVYRzRnSUNBZ0lDQnpaWFIwYkdVb2NtVnpiMngyWlN3Z2NtVnFaV04wTENCeVpYTndiMjV6WlNrN1hHNWNiaUFnSUNBZ0lDOHZJRU5zWldGdUlIVndJSEpsY1hWbGMzUmNiaUFnSUNBZ0lISmxjWFZsYzNRZ1BTQnVkV3hzTzF4dUlDQWdJSDA3WEc1Y2JpQWdJQ0F2THlCSVlXNWtiR1VnYkc5M0lHeGxkbVZzSUc1bGRIZHZjbXNnWlhKeWIzSnpYRzRnSUNBZ2NtVnhkV1Z6ZEM1dmJtVnljbTl5SUQwZ1puVnVZM1JwYjI0Z2FHRnVaR3hsUlhKeWIzSW9LU0I3WEc0Z0lDQWdJQ0F2THlCU1pXRnNJR1Z5Y205eWN5QmhjbVVnYUdsa1pHVnVJR1p5YjIwZ2RYTWdZbmtnZEdobElHSnliM2R6WlhKY2JpQWdJQ0FnSUM4dklHOXVaWEp5YjNJZ2MyaHZkV3hrSUc5dWJIa2dabWx5WlNCcFppQnBkQ2R6SUdFZ2JtVjBkMjl5YXlCbGNuSnZjbHh1SUNBZ0lDQWdjbVZxWldOMEtHTnlaV0YwWlVWeWNtOXlLQ2RPWlhSM2IzSnJJRVZ5Y205eUp5d2dZMjl1Wm1sbkxDQnVkV3hzTENCeVpYRjFaWE4wS1NrN1hHNWNiaUFnSUNBZ0lDOHZJRU5zWldGdUlIVndJSEpsY1hWbGMzUmNiaUFnSUNBZ0lISmxjWFZsYzNRZ1BTQnVkV3hzTzF4dUlDQWdJSDA3WEc1Y2JpQWdJQ0F2THlCSVlXNWtiR1VnZEdsdFpXOTFkRnh1SUNBZ0lISmxjWFZsYzNRdWIyNTBhVzFsYjNWMElEMGdablZ1WTNScGIyNGdhR0Z1Wkd4bFZHbHRaVzkxZENncElIdGNiaUFnSUNBZ0lISmxhbVZqZENoamNtVmhkR1ZGY25KdmNpZ25kR2x0Wlc5MWRDQnZaaUFuSUNzZ1kyOXVabWxuTG5ScGJXVnZkWFFnS3lBbmJYTWdaWGhqWldWa1pXUW5MQ0JqYjI1bWFXY3NJQ2RGUTA5T1RrRkNUMUpVUlVRbkxGeHVJQ0FnSUNBZ0lDQnlaWEYxWlhOMEtTazdYRzVjYmlBZ0lDQWdJQzh2SUVOc1pXRnVJSFZ3SUhKbGNYVmxjM1JjYmlBZ0lDQWdJSEpsY1hWbGMzUWdQU0J1ZFd4c08xeHVJQ0FnSUgwN1hHNWNiaUFnSUNBdkx5QkJaR1FnZUhOeVppQm9aV0ZrWlhKY2JpQWdJQ0F2THlCVWFHbHpJR2x6SUc5dWJIa2daRzl1WlNCcFppQnlkVzV1YVc1bklHbHVJR0VnYzNSaGJtUmhjbVFnWW5KdmQzTmxjaUJsYm5acGNtOXViV1Z1ZEM1Y2JpQWdJQ0F2THlCVGNHVmphV1pwWTJGc2JIa2dibTkwSUdsbUlIZGxKM0psSUdsdUlHRWdkMlZpSUhkdmNtdGxjaXdnYjNJZ2NtVmhZM1F0Ym1GMGFYWmxMbHh1SUNBZ0lHbG1JQ2gxZEdsc2N5NXBjMU4wWVc1a1lYSmtRbkp2ZDNObGNrVnVkaWdwS1NCN1hHNGdJQ0FnSUNCMllYSWdZMjl2YTJsbGN5QTlJSEpsY1hWcGNtVW9KeTR2TGk0dmFHVnNjR1Z5Y3k5amIyOXJhV1Z6SnlrN1hHNWNiaUFnSUNBZ0lDOHZJRUZrWkNCNGMzSm1JR2hsWVdSbGNseHVJQ0FnSUNBZ2RtRnlJSGh6Y21aV1lXeDFaU0E5SUNoamIyNW1hV2N1ZDJsMGFFTnlaV1JsYm5ScFlXeHpJSHg4SUdselZWSk1VMkZ0WlU5eWFXZHBiaWhqYjI1bWFXY3VkWEpzS1NrZ0ppWWdZMjl1Wm1sbkxuaHpjbVpEYjI5cmFXVk9ZVzFsSUQ5Y2JpQWdJQ0FnSUNBZ0lDQmpiMjlyYVdWekxuSmxZV1FvWTI5dVptbG5Mbmh6Y21aRGIyOXJhV1ZPWVcxbEtTQTZYRzRnSUNBZ0lDQWdJQ0FnZFc1a1pXWnBibVZrTzF4dVhHNGdJQ0FnSUNCcFppQW9lSE55WmxaaGJIVmxLU0I3WEc0Z0lDQWdJQ0FnSUhKbGNYVmxjM1JJWldGa1pYSnpXMk52Ym1acFp5NTRjM0ptU0dWaFpHVnlUbUZ0WlYwZ1BTQjRjM0ptVm1Gc2RXVTdYRzRnSUNBZ0lDQjlYRzRnSUNBZ2ZWeHVYRzRnSUNBZ0x5OGdRV1JrSUdobFlXUmxjbk1nZEc4Z2RHaGxJSEpsY1hWbGMzUmNiaUFnSUNCcFppQW9KM05sZEZKbGNYVmxjM1JJWldGa1pYSW5JR2x1SUhKbGNYVmxjM1FwSUh0Y2JpQWdJQ0FnSUhWMGFXeHpMbVp2Y2tWaFkyZ29jbVZ4ZFdWemRFaGxZV1JsY25Nc0lHWjFibU4wYVc5dUlITmxkRkpsY1hWbGMzUklaV0ZrWlhJb2RtRnNMQ0JyWlhrcElIdGNiaUFnSUNBZ0lDQWdhV1lnS0hSNWNHVnZaaUJ5WlhGMVpYTjBSR0YwWVNBOVBUMGdKM1Z1WkdWbWFXNWxaQ2NnSmlZZ2EyVjVMblJ2VEc5M1pYSkRZWE5sS0NrZ1BUMDlJQ2RqYjI1MFpXNTBMWFI1Y0dVbktTQjdYRzRnSUNBZ0lDQWdJQ0FnTHk4Z1VtVnRiM1psSUVOdmJuUmxiblF0Vkhsd1pTQnBaaUJrWVhSaElHbHpJSFZ1WkdWbWFXNWxaRnh1SUNBZ0lDQWdJQ0FnSUdSbGJHVjBaU0J5WlhGMVpYTjBTR1ZoWkdWeWMxdHJaWGxkTzF4dUlDQWdJQ0FnSUNCOUlHVnNjMlVnZTF4dUlDQWdJQ0FnSUNBZ0lDOHZJRTkwYUdWeWQybHpaU0JoWkdRZ2FHVmhaR1Z5SUhSdklIUm9aU0J5WlhGMVpYTjBYRzRnSUNBZ0lDQWdJQ0FnY21WeGRXVnpkQzV6WlhSU1pYRjFaWE4wU0dWaFpHVnlLR3RsZVN3Z2RtRnNLVHRjYmlBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnZlNrN1hHNGdJQ0FnZlZ4dVhHNGdJQ0FnTHk4Z1FXUmtJSGRwZEdoRGNtVmtaVzUwYVdGc2N5QjBieUJ5WlhGMVpYTjBJR2xtSUc1bFpXUmxaRnh1SUNBZ0lHbG1JQ2hqYjI1bWFXY3VkMmwwYUVOeVpXUmxiblJwWVd4ektTQjdYRzRnSUNBZ0lDQnlaWEYxWlhOMExuZHBkR2hEY21Wa1pXNTBhV0ZzY3lBOUlIUnlkV1U3WEc0Z0lDQWdmVnh1WEc0Z0lDQWdMeThnUVdSa0lISmxjM0J2Ym5ObFZIbHdaU0IwYnlCeVpYRjFaWE4wSUdsbUlHNWxaV1JsWkZ4dUlDQWdJR2xtSUNoamIyNW1hV2N1Y21WemNHOXVjMlZVZVhCbEtTQjdYRzRnSUNBZ0lDQjBjbmtnZTF4dUlDQWdJQ0FnSUNCeVpYRjFaWE4wTG5KbGMzQnZibk5sVkhsd1pTQTlJR052Ym1acFp5NXlaWE53YjI1elpWUjVjR1U3WEc0Z0lDQWdJQ0I5SUdOaGRHTm9JQ2hsS1NCN1hHNGdJQ0FnSUNBZ0lDOHZJRVY0Y0dWamRHVmtJRVJQVFVWNFkyVndkR2x2YmlCMGFISnZkMjRnWW5rZ1luSnZkM05sY25NZ2JtOTBJR052YlhCaGRHbGliR1VnV0UxTVNIUjBjRkpsY1hWbGMzUWdUR1YyWld3Z01pNWNiaUFnSUNBZ0lDQWdMeThnUW5WMExDQjBhR2x6SUdOaGJpQmlaU0J6ZFhCd2NtVnpjMlZrSUdadmNpQW5hbk52YmljZ2RIbHdaU0JoY3lCcGRDQmpZVzRnWW1VZ2NHRnljMlZrSUdKNUlHUmxabUYxYkhRZ0ozUnlZVzV6Wm05eWJWSmxjM0J2Ym5ObEp5Qm1kVzVqZEdsdmJpNWNiaUFnSUNBZ0lDQWdhV1lnS0dOdmJtWnBaeTV5WlhOd2IyNXpaVlI1Y0dVZ0lUMDlJQ2RxYzI5dUp5a2dlMXh1SUNBZ0lDQWdJQ0FnSUhSb2NtOTNJR1U3WEc0Z0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUgxY2JpQWdJQ0I5WEc1Y2JpQWdJQ0F2THlCSVlXNWtiR1VnY0hKdlozSmxjM01nYVdZZ2JtVmxaR1ZrWEc0Z0lDQWdhV1lnS0hSNWNHVnZaaUJqYjI1bWFXY3ViMjVFYjNkdWJHOWhaRkJ5YjJkeVpYTnpJRDA5UFNBblpuVnVZM1JwYjI0bktTQjdYRzRnSUNBZ0lDQnlaWEYxWlhOMExtRmtaRVYyWlc1MFRHbHpkR1Z1WlhJb0ozQnliMmR5WlhOekp5d2dZMjl1Wm1sbkxtOXVSRzkzYm14dllXUlFjbTluY21WemN5azdYRzRnSUNBZ2ZWeHVYRzRnSUNBZ0x5OGdUbTkwSUdGc2JDQmljbTkzYzJWeWN5QnpkWEJ3YjNKMElIVndiRzloWkNCbGRtVnVkSE5jYmlBZ0lDQnBaaUFvZEhsd1pXOW1JR052Ym1acFp5NXZibFZ3Ykc5aFpGQnliMmR5WlhOeklEMDlQU0FuWm5WdVkzUnBiMjRuSUNZbUlISmxjWFZsYzNRdWRYQnNiMkZrS1NCN1hHNGdJQ0FnSUNCeVpYRjFaWE4wTG5Wd2JHOWhaQzVoWkdSRmRtVnVkRXhwYzNSbGJtVnlLQ2R3Y205bmNtVnpjeWNzSUdOdmJtWnBaeTV2YmxWd2JHOWhaRkJ5YjJkeVpYTnpLVHRjYmlBZ0lDQjlYRzVjYmlBZ0lDQnBaaUFvWTI5dVptbG5MbU5oYm1ObGJGUnZhMlZ1S1NCN1hHNGdJQ0FnSUNBdkx5QklZVzVrYkdVZ1kyRnVZMlZzYkdGMGFXOXVYRzRnSUNBZ0lDQmpiMjVtYVdjdVkyRnVZMlZzVkc5clpXNHVjSEp2YldselpTNTBhR1Z1S0daMWJtTjBhVzl1SUc5dVEyRnVZMlZzWldRb1kyRnVZMlZzS1NCN1hHNGdJQ0FnSUNBZ0lHbG1JQ2doY21WeGRXVnpkQ2tnZTF4dUlDQWdJQ0FnSUNBZ0lISmxkSFZ5Ymp0Y2JpQWdJQ0FnSUNBZ2ZWeHVYRzRnSUNBZ0lDQWdJSEpsY1hWbGMzUXVZV0p2Y25Rb0tUdGNiaUFnSUNBZ0lDQWdjbVZxWldOMEtHTmhibU5sYkNrN1hHNGdJQ0FnSUNBZ0lDOHZJRU5zWldGdUlIVndJSEpsY1hWbGMzUmNiaUFnSUNBZ0lDQWdjbVZ4ZFdWemRDQTlJRzUxYkd3N1hHNGdJQ0FnSUNCOUtUdGNiaUFnSUNCOVhHNWNiaUFnSUNCcFppQW9jbVZ4ZFdWemRFUmhkR0VnUFQwOUlIVnVaR1ZtYVc1bFpDa2dlMXh1SUNBZ0lDQWdjbVZ4ZFdWemRFUmhkR0VnUFNCdWRXeHNPMXh1SUNBZ0lIMWNibHh1SUNBZ0lDOHZJRk5sYm1RZ2RHaGxJSEpsY1hWbGMzUmNiaUFnSUNCeVpYRjFaWE4wTG5ObGJtUW9jbVZ4ZFdWemRFUmhkR0VwTzF4dUlDQjlLVHRjYm4wN1hHNGlMQ0luZFhObElITjBjbWxqZENjN1hHNWNiblpoY2lCMWRHbHNjeUE5SUhKbGNYVnBjbVVvSnk0dmRYUnBiSE1uS1R0Y2JuWmhjaUJpYVc1a0lEMGdjbVZ4ZFdseVpTZ25MaTlvWld4d1pYSnpMMkpwYm1RbktUdGNiblpoY2lCQmVHbHZjeUE5SUhKbGNYVnBjbVVvSnk0dlkyOXlaUzlCZUdsdmN5Y3BPMXh1ZG1GeUlHUmxabUYxYkhSeklEMGdjbVZ4ZFdseVpTZ25MaTlrWldaaGRXeDBjeWNwTzF4dVhHNHZLaXBjYmlBcUlFTnlaV0YwWlNCaGJpQnBibk4wWVc1alpTQnZaaUJCZUdsdmMxeHVJQ3BjYmlBcUlFQndZWEpoYlNCN1QySnFaV04wZlNCa1pXWmhkV3gwUTI5dVptbG5JRlJvWlNCa1pXWmhkV3gwSUdOdmJtWnBaeUJtYjNJZ2RHaGxJR2x1YzNSaGJtTmxYRzRnS2lCQWNtVjBkWEp1SUh0QmVHbHZjMzBnUVNCdVpYY2dhVzV6ZEdGdVkyVWdiMllnUVhocGIzTmNiaUFxTDF4dVpuVnVZM1JwYjI0Z1kzSmxZWFJsU1c1emRHRnVZMlVvWkdWbVlYVnNkRU52Ym1acFp5a2dlMXh1SUNCMllYSWdZMjl1ZEdWNGRDQTlJRzVsZHlCQmVHbHZjeWhrWldaaGRXeDBRMjl1Wm1sbktUdGNiaUFnZG1GeUlHbHVjM1JoYm1ObElEMGdZbWx1WkNoQmVHbHZjeTV3Y205MGIzUjVjR1V1Y21WeGRXVnpkQ3dnWTI5dWRHVjRkQ2s3WEc1Y2JpQWdMeThnUTI5d2VTQmhlR2x2Y3k1d2NtOTBiM1I1Y0dVZ2RHOGdhVzV6ZEdGdVkyVmNiaUFnZFhScGJITXVaWGgwWlc1a0tHbHVjM1JoYm1ObExDQkJlR2x2Y3k1d2NtOTBiM1I1Y0dVc0lHTnZiblJsZUhRcE8xeHVYRzRnSUM4dklFTnZjSGtnWTI5dWRHVjRkQ0IwYnlCcGJuTjBZVzVqWlZ4dUlDQjFkR2xzY3k1bGVIUmxibVFvYVc1emRHRnVZMlVzSUdOdmJuUmxlSFFwTzF4dVhHNGdJSEpsZEhWeWJpQnBibk4wWVc1alpUdGNibjFjYmx4dUx5OGdRM0psWVhSbElIUm9aU0JrWldaaGRXeDBJR2x1YzNSaGJtTmxJSFJ2SUdKbElHVjRjRzl5ZEdWa1hHNTJZWElnWVhocGIzTWdQU0JqY21WaGRHVkpibk4wWVc1alpTaGtaV1poZFd4MGN5azdYRzVjYmk4dklFVjRjRzl6WlNCQmVHbHZjeUJqYkdGemN5QjBieUJoYkd4dmR5QmpiR0Z6Y3lCcGJtaGxjbWwwWVc1alpWeHVZWGhwYjNNdVFYaHBiM01nUFNCQmVHbHZjenRjYmx4dUx5OGdSbUZqZEc5eWVTQm1iM0lnWTNKbFlYUnBibWNnYm1WM0lHbHVjM1JoYm1ObGMxeHVZWGhwYjNNdVkzSmxZWFJsSUQwZ1puVnVZM1JwYjI0Z1kzSmxZWFJsS0dsdWMzUmhibU5sUTI5dVptbG5LU0I3WEc0Z0lISmxkSFZ5YmlCamNtVmhkR1ZKYm5OMFlXNWpaU2gxZEdsc2N5NXRaWEpuWlNoa1pXWmhkV3gwY3l3Z2FXNXpkR0Z1WTJWRGIyNW1hV2NwS1R0Y2JuMDdYRzVjYmk4dklFVjRjRzl6WlNCRFlXNWpaV3dnSmlCRFlXNWpaV3hVYjJ0bGJseHVZWGhwYjNNdVEyRnVZMlZzSUQwZ2NtVnhkV2x5WlNnbkxpOWpZVzVqWld3dlEyRnVZMlZzSnlrN1hHNWhlR2x2Y3k1RFlXNWpaV3hVYjJ0bGJpQTlJSEpsY1hWcGNtVW9KeTR2WTJGdVkyVnNMME5oYm1ObGJGUnZhMlZ1SnlrN1hHNWhlR2x2Y3k1cGMwTmhibU5sYkNBOUlISmxjWFZwY21Vb0p5NHZZMkZ1WTJWc0wybHpRMkZ1WTJWc0p5azdYRzVjYmk4dklFVjRjRzl6WlNCaGJHd3ZjM0J5WldGa1hHNWhlR2x2Y3k1aGJHd2dQU0JtZFc1amRHbHZiaUJoYkd3b2NISnZiV2x6WlhNcElIdGNiaUFnY21WMGRYSnVJRkJ5YjIxcGMyVXVZV3hzS0hCeWIyMXBjMlZ6S1R0Y2JuMDdYRzVoZUdsdmN5NXpjSEpsWVdRZ1BTQnlaWEYxYVhKbEtDY3VMMmhsYkhCbGNuTXZjM0J5WldGa0p5azdYRzVjYm0xdlpIVnNaUzVsZUhCdmNuUnpJRDBnWVhocGIzTTdYRzVjYmk4dklFRnNiRzkzSUhWelpTQnZaaUJrWldaaGRXeDBJR2x0Y0c5eWRDQnplVzUwWVhnZ2FXNGdWSGx3WlZOamNtbHdkRnh1Ylc5a2RXeGxMbVY0Y0c5eWRITXVaR1ZtWVhWc2RDQTlJR0Y0YVc5ek8xeHVJaXdpSjNWelpTQnpkSEpwWTNRbk8xeHVYRzR2S2lwY2JpQXFJRUVnWUVOaGJtTmxiR0FnYVhNZ1lXNGdiMkpxWldOMElIUm9ZWFFnYVhNZ2RHaHliM2R1SUhkb1pXNGdZVzRnYjNCbGNtRjBhVzl1SUdseklHTmhibU5sYkdWa0xseHVJQ3BjYmlBcUlFQmpiR0Z6YzF4dUlDb2dRSEJoY21GdElIdHpkSEpwYm1jOWZTQnRaWE56WVdkbElGUm9aU0J0WlhOellXZGxMbHh1SUNvdlhHNW1kVzVqZEdsdmJpQkRZVzVqWld3b2JXVnpjMkZuWlNrZ2UxeHVJQ0IwYUdsekxtMWxjM05oWjJVZ1BTQnRaWE56WVdkbE8xeHVmVnh1WEc1RFlXNWpaV3d1Y0hKdmRHOTBlWEJsTG5SdlUzUnlhVzVuSUQwZ1puVnVZM1JwYjI0Z2RHOVRkSEpwYm1jb0tTQjdYRzRnSUhKbGRIVnliaUFuUTJGdVkyVnNKeUFySUNoMGFHbHpMbTFsYzNOaFoyVWdQeUFuT2lBbklDc2dkR2hwY3k1dFpYTnpZV2RsSURvZ0p5Y3BPMXh1ZlR0Y2JseHVRMkZ1WTJWc0xuQnliM1J2ZEhsd1pTNWZYME5CVGtORlRGOWZJRDBnZEhKMVpUdGNibHh1Ylc5a2RXeGxMbVY0Y0c5eWRITWdQU0JEWVc1alpXdzdYRzRpTENJbmRYTmxJSE4wY21samRDYzdYRzVjYm5aaGNpQkRZVzVqWld3Z1BTQnlaWEYxYVhKbEtDY3VMME5oYm1ObGJDY3BPMXh1WEc0dktpcGNiaUFxSUVFZ1lFTmhibU5sYkZSdmEyVnVZQ0JwY3lCaGJpQnZZbXBsWTNRZ2RHaGhkQ0JqWVc0Z1ltVWdkWE5sWkNCMGJ5QnlaWEYxWlhOMElHTmhibU5sYkd4aGRHbHZiaUJ2WmlCaGJpQnZjR1Z5WVhScGIyNHVYRzRnS2x4dUlDb2dRR05zWVhOelhHNGdLaUJBY0dGeVlXMGdlMFoxYm1OMGFXOXVmU0JsZUdWamRYUnZjaUJVYUdVZ1pYaGxZM1YwYjNJZ1puVnVZM1JwYjI0dVhHNGdLaTljYm1aMWJtTjBhVzl1SUVOaGJtTmxiRlJ2YTJWdUtHVjRaV04xZEc5eUtTQjdYRzRnSUdsbUlDaDBlWEJsYjJZZ1pYaGxZM1YwYjNJZ0lUMDlJQ2RtZFc1amRHbHZiaWNwSUh0Y2JpQWdJQ0IwYUhKdmR5QnVaWGNnVkhsd1pVVnljbTl5S0NkbGVHVmpkWFJ2Y2lCdGRYTjBJR0psSUdFZ1puVnVZM1JwYjI0dUp5azdYRzRnSUgxY2JseHVJQ0IyWVhJZ2NtVnpiMngyWlZCeWIyMXBjMlU3WEc0Z0lIUm9hWE11Y0hKdmJXbHpaU0E5SUc1bGR5QlFjbTl0YVhObEtHWjFibU4wYVc5dUlIQnliMjFwYzJWRmVHVmpkWFJ2Y2loeVpYTnZiSFpsS1NCN1hHNGdJQ0FnY21WemIyeDJaVkJ5YjIxcGMyVWdQU0J5WlhOdmJIWmxPMXh1SUNCOUtUdGNibHh1SUNCMllYSWdkRzlyWlc0Z1BTQjBhR2x6TzF4dUlDQmxlR1ZqZFhSdmNpaG1kVzVqZEdsdmJpQmpZVzVqWld3b2JXVnpjMkZuWlNrZ2UxeHVJQ0FnSUdsbUlDaDBiMnRsYmk1eVpXRnpiMjRwSUh0Y2JpQWdJQ0FnSUM4dklFTmhibU5sYkd4aGRHbHZiaUJvWVhNZ1lXeHlaV0ZrZVNCaVpXVnVJSEpsY1hWbGMzUmxaRnh1SUNBZ0lDQWdjbVYwZFhKdU8xeHVJQ0FnSUgxY2JseHVJQ0FnSUhSdmEyVnVMbkpsWVhOdmJpQTlJRzVsZHlCRFlXNWpaV3dvYldWemMyRm5aU2s3WEc0Z0lDQWdjbVZ6YjJ4MlpWQnliMjFwYzJVb2RHOXJaVzR1Y21WaGMyOXVLVHRjYmlBZ2ZTazdYRzU5WEc1Y2JpOHFLbHh1SUNvZ1ZHaHliM2R6SUdFZ1lFTmhibU5sYkdBZ2FXWWdZMkZ1WTJWc2JHRjBhVzl1SUdoaGN5QmlaV1Z1SUhKbGNYVmxjM1JsWkM1Y2JpQXFMMXh1UTJGdVkyVnNWRzlyWlc0dWNISnZkRzkwZVhCbExuUm9jbTkzU1daU1pYRjFaWE4wWldRZ1BTQm1kVzVqZEdsdmJpQjBhSEp2ZDBsbVVtVnhkV1Z6ZEdWa0tDa2dlMXh1SUNCcFppQW9kR2hwY3k1eVpXRnpiMjRwSUh0Y2JpQWdJQ0IwYUhKdmR5QjBhR2x6TG5KbFlYTnZianRjYmlBZ2ZWeHVmVHRjYmx4dUx5b3FYRzRnS2lCU1pYUjFjbTV6SUdGdUlHOWlhbVZqZENCMGFHRjBJR052Ym5SaGFXNXpJR0VnYm1WM0lHQkRZVzVqWld4VWIydGxibUFnWVc1a0lHRWdablZ1WTNScGIyNGdkR2hoZEN3Z2QyaGxiaUJqWVd4c1pXUXNYRzRnS2lCallXNWpaV3h6SUhSb1pTQmdRMkZ1WTJWc1ZHOXJaVzVnTGx4dUlDb3ZYRzVEWVc1alpXeFViMnRsYmk1emIzVnlZMlVnUFNCbWRXNWpkR2x2YmlCemIzVnlZMlVvS1NCN1hHNGdJSFpoY2lCallXNWpaV3c3WEc0Z0lIWmhjaUIwYjJ0bGJpQTlJRzVsZHlCRFlXNWpaV3hVYjJ0bGJpaG1kVzVqZEdsdmJpQmxlR1ZqZFhSdmNpaGpLU0I3WEc0Z0lDQWdZMkZ1WTJWc0lEMGdZenRjYmlBZ2ZTazdYRzRnSUhKbGRIVnliaUI3WEc0Z0lDQWdkRzlyWlc0NklIUnZhMlZ1TEZ4dUlDQWdJR05oYm1ObGJEb2dZMkZ1WTJWc1hHNGdJSDA3WEc1OU8xeHVYRzV0YjJSMWJHVXVaWGh3YjNKMGN5QTlJRU5oYm1ObGJGUnZhMlZ1TzF4dUlpd2lKM1Z6WlNCemRISnBZM1FuTzF4dVhHNXRiMlIxYkdVdVpYaHdiM0owY3lBOUlHWjFibU4wYVc5dUlHbHpRMkZ1WTJWc0tIWmhiSFZsS1NCN1hHNGdJSEpsZEhWeWJpQWhJU2gyWVd4MVpTQW1KaUIyWVd4MVpTNWZYME5CVGtORlRGOWZLVHRjYm4wN1hHNGlMQ0luZFhObElITjBjbWxqZENjN1hHNWNiblpoY2lCa1pXWmhkV3gwY3lBOUlISmxjWFZwY21Vb0p5NHZMaTR2WkdWbVlYVnNkSE1uS1R0Y2JuWmhjaUIxZEdsc2N5QTlJSEpsY1hWcGNtVW9KeTR2TGk0dmRYUnBiSE1uS1R0Y2JuWmhjaUJKYm5SbGNtTmxjSFJ2Y2sxaGJtRm5aWElnUFNCeVpYRjFhWEpsS0NjdUwwbHVkR1Z5WTJWd2RHOXlUV0Z1WVdkbGNpY3BPMXh1ZG1GeUlHUnBjM0JoZEdOb1VtVnhkV1Z6ZENBOUlISmxjWFZwY21Vb0p5NHZaR2x6Y0dGMFkyaFNaWEYxWlhOMEp5azdYRzVjYmk4cUtseHVJQ29nUTNKbFlYUmxJR0VnYm1WM0lHbHVjM1JoYm1ObElHOW1JRUY0YVc5elhHNGdLbHh1SUNvZ1FIQmhjbUZ0SUh0UFltcGxZM1I5SUdsdWMzUmhibU5sUTI5dVptbG5JRlJvWlNCa1pXWmhkV3gwSUdOdmJtWnBaeUJtYjNJZ2RHaGxJR2x1YzNSaGJtTmxYRzRnS2k5Y2JtWjFibU4wYVc5dUlFRjRhVzl6S0dsdWMzUmhibU5sUTI5dVptbG5LU0I3WEc0Z0lIUm9hWE11WkdWbVlYVnNkSE1nUFNCcGJuTjBZVzVqWlVOdmJtWnBaenRjYmlBZ2RHaHBjeTVwYm5SbGNtTmxjSFJ2Y25NZ1BTQjdYRzRnSUNBZ2NtVnhkV1Z6ZERvZ2JtVjNJRWx1ZEdWeVkyVndkRzl5VFdGdVlXZGxjaWdwTEZ4dUlDQWdJSEpsYzNCdmJuTmxPaUJ1WlhjZ1NXNTBaWEpqWlhCMGIzSk5ZVzVoWjJWeUtDbGNiaUFnZlR0Y2JuMWNibHh1THlvcVhHNGdLaUJFYVhOd1lYUmphQ0JoSUhKbGNYVmxjM1JjYmlBcVhHNGdLaUJBY0dGeVlXMGdlMDlpYW1WamRIMGdZMjl1Wm1sbklGUm9aU0JqYjI1bWFXY2djM0JsWTJsbWFXTWdabTl5SUhSb2FYTWdjbVZ4ZFdWemRDQW9iV1Z5WjJWa0lIZHBkR2dnZEdocGN5NWtaV1poZFd4MGN5bGNiaUFxTDF4dVFYaHBiM011Y0hKdmRHOTBlWEJsTG5KbGNYVmxjM1FnUFNCbWRXNWpkR2x2YmlCeVpYRjFaWE4wS0dOdmJtWnBaeWtnZTF4dUlDQXZLbVZ6YkdsdWRDQnVieTF3WVhKaGJTMXlaV0Z6YzJsbmJqb3dLaTljYmlBZ0x5OGdRV3hzYjNjZ1ptOXlJR0Y0YVc5ektDZGxlR0Z0Y0d4bEwzVnliQ2RiTENCamIyNW1hV2RkS1NCaElHeGhJR1psZEdOb0lFRlFTVnh1SUNCcFppQW9kSGx3Wlc5bUlHTnZibVpwWnlBOVBUMGdKM04wY21sdVp5Y3BJSHRjYmlBZ0lDQmpiMjVtYVdjZ1BTQjFkR2xzY3k1dFpYSm5aU2g3WEc0Z0lDQWdJQ0IxY213NklHRnlaM1Z0Wlc1MGMxc3dYVnh1SUNBZ0lIMHNJR0Z5WjNWdFpXNTBjMXN4WFNrN1hHNGdJSDFjYmx4dUlDQmpiMjVtYVdjZ1BTQjFkR2xzY3k1dFpYSm5aU2hrWldaaGRXeDBjeXdnZTIxbGRHaHZaRG9nSjJkbGRDZDlMQ0IwYUdsekxtUmxabUYxYkhSekxDQmpiMjVtYVdjcE8xeHVJQ0JqYjI1bWFXY3ViV1YwYUc5a0lEMGdZMjl1Wm1sbkxtMWxkR2h2WkM1MGIweHZkMlZ5UTJGelpTZ3BPMXh1WEc0Z0lDOHZJRWh2YjJzZ2RYQWdhVzUwWlhKalpYQjBiM0p6SUcxcFpHUnNaWGRoY21WY2JpQWdkbUZ5SUdOb1lXbHVJRDBnVzJScGMzQmhkR05vVW1WeGRXVnpkQ3dnZFc1a1pXWnBibVZrWFR0Y2JpQWdkbUZ5SUhCeWIyMXBjMlVnUFNCUWNtOXRhWE5sTG5KbGMyOXNkbVVvWTI5dVptbG5LVHRjYmx4dUlDQjBhR2x6TG1sdWRHVnlZMlZ3ZEc5eWN5NXlaWEYxWlhOMExtWnZja1ZoWTJnb1puVnVZM1JwYjI0Z2RXNXphR2xtZEZKbGNYVmxjM1JKYm5SbGNtTmxjSFJ2Y25Nb2FXNTBaWEpqWlhCMGIzSXBJSHRjYmlBZ0lDQmphR0ZwYmk1MWJuTm9hV1owS0dsdWRHVnlZMlZ3ZEc5eUxtWjFiR1pwYkd4bFpDd2dhVzUwWlhKalpYQjBiM0l1Y21WcVpXTjBaV1FwTzF4dUlDQjlLVHRjYmx4dUlDQjBhR2x6TG1sdWRHVnlZMlZ3ZEc5eWN5NXlaWE53YjI1elpTNW1iM0pGWVdOb0tHWjFibU4wYVc5dUlIQjFjMmhTWlhOd2IyNXpaVWx1ZEdWeVkyVndkRzl5Y3locGJuUmxjbU5sY0hSdmNpa2dlMXh1SUNBZ0lHTm9ZV2x1TG5CMWMyZ29hVzUwWlhKalpYQjBiM0l1Wm5Wc1ptbHNiR1ZrTENCcGJuUmxjbU5sY0hSdmNpNXlaV3BsWTNSbFpDazdYRzRnSUgwcE8xeHVYRzRnSUhkb2FXeGxJQ2hqYUdGcGJpNXNaVzVuZEdncElIdGNiaUFnSUNCd2NtOXRhWE5sSUQwZ2NISnZiV2x6WlM1MGFHVnVLR05vWVdsdUxuTm9hV1owS0Nrc0lHTm9ZV2x1TG5Ob2FXWjBLQ2twTzF4dUlDQjlYRzVjYmlBZ2NtVjBkWEp1SUhCeWIyMXBjMlU3WEc1OU8xeHVYRzR2THlCUWNtOTJhV1JsSUdGc2FXRnpaWE1nWm05eUlITjFjSEJ2Y25SbFpDQnlaWEYxWlhOMElHMWxkR2h2WkhOY2JuVjBhV3h6TG1admNrVmhZMmdvV3lka1pXeGxkR1VuTENBbloyVjBKeXdnSjJobFlXUW5MQ0FuYjNCMGFXOXVjeWRkTENCbWRXNWpkR2x2YmlCbWIzSkZZV05vVFdWMGFHOWtUbTlFWVhSaEtHMWxkR2h2WkNrZ2UxeHVJQ0F2S21WemJHbHVkQ0JtZFc1akxXNWhiV1Z6T2pBcUwxeHVJQ0JCZUdsdmN5NXdjbTkwYjNSNWNHVmJiV1YwYUc5a1hTQTlJR1oxYm1OMGFXOXVLSFZ5YkN3Z1kyOXVabWxuS1NCN1hHNGdJQ0FnY21WMGRYSnVJSFJvYVhNdWNtVnhkV1Z6ZENoMWRHbHNjeTV0WlhKblpTaGpiMjVtYVdjZ2ZId2dlMzBzSUh0Y2JpQWdJQ0FnSUcxbGRHaHZaRG9nYldWMGFHOWtMRnh1SUNBZ0lDQWdkWEpzT2lCMWNteGNiaUFnSUNCOUtTazdYRzRnSUgwN1hHNTlLVHRjYmx4dWRYUnBiSE11Wm05eVJXRmphQ2hiSjNCdmMzUW5MQ0FuY0hWMEp5d2dKM0JoZEdOb0oxMHNJR1oxYm1OMGFXOXVJR1p2Y2tWaFkyaE5aWFJvYjJSWGFYUm9SR0YwWVNodFpYUm9iMlFwSUh0Y2JpQWdMeXBsYzJ4cGJuUWdablZ1WXkxdVlXMWxjem93S2k5Y2JpQWdRWGhwYjNNdWNISnZkRzkwZVhCbFcyMWxkR2h2WkYwZ1BTQm1kVzVqZEdsdmJpaDFjbXdzSUdSaGRHRXNJR052Ym1acFp5a2dlMXh1SUNBZ0lISmxkSFZ5YmlCMGFHbHpMbkpsY1hWbGMzUW9kWFJwYkhNdWJXVnlaMlVvWTI5dVptbG5JSHg4SUh0OUxDQjdYRzRnSUNBZ0lDQnRaWFJvYjJRNklHMWxkR2h2WkN4Y2JpQWdJQ0FnSUhWeWJEb2dkWEpzTEZ4dUlDQWdJQ0FnWkdGMFlUb2daR0YwWVZ4dUlDQWdJSDBwS1R0Y2JpQWdmVHRjYm4wcE8xeHVYRzV0YjJSMWJHVXVaWGh3YjNKMGN5QTlJRUY0YVc5ek8xeHVJaXdpSjNWelpTQnpkSEpwWTNRbk8xeHVYRzUyWVhJZ2RYUnBiSE1nUFNCeVpYRjFhWEpsS0NjdUx5NHVMM1YwYVd4ekp5azdYRzVjYm1aMWJtTjBhVzl1SUVsdWRHVnlZMlZ3ZEc5eVRXRnVZV2RsY2lncElIdGNiaUFnZEdocGN5NW9ZVzVrYkdWeWN5QTlJRnRkTzF4dWZWeHVYRzR2S2lwY2JpQXFJRUZrWkNCaElHNWxkeUJwYm5SbGNtTmxjSFJ2Y2lCMGJ5QjBhR1VnYzNSaFkydGNiaUFxWEc0Z0tpQkFjR0Z5WVcwZ2UwWjFibU4wYVc5dWZTQm1kV3htYVd4c1pXUWdWR2hsSUdaMWJtTjBhVzl1SUhSdklHaGhibVJzWlNCZ2RHaGxibUFnWm05eUlHRWdZRkJ5YjIxcGMyVmdYRzRnS2lCQWNHRnlZVzBnZTBaMWJtTjBhVzl1ZlNCeVpXcGxZM1JsWkNCVWFHVWdablZ1WTNScGIyNGdkRzhnYUdGdVpHeGxJR0J5WldwbFkzUmdJR1p2Y2lCaElHQlFjbTl0YVhObFlGeHVJQ3BjYmlBcUlFQnlaWFIxY200Z2UwNTFiV0psY24wZ1FXNGdTVVFnZFhObFpDQjBieUJ5WlcxdmRtVWdhVzUwWlhKalpYQjBiM0lnYkdGMFpYSmNiaUFxTDF4dVNXNTBaWEpqWlhCMGIzSk5ZVzVoWjJWeUxuQnliM1J2ZEhsd1pTNTFjMlVnUFNCbWRXNWpkR2x2YmlCMWMyVW9ablZzWm1sc2JHVmtMQ0J5WldwbFkzUmxaQ2tnZTF4dUlDQjBhR2x6TG1oaGJtUnNaWEp6TG5CMWMyZ29lMXh1SUNBZ0lHWjFiR1pwYkd4bFpEb2dablZzWm1sc2JHVmtMRnh1SUNBZ0lISmxhbVZqZEdWa09pQnlaV3BsWTNSbFpGeHVJQ0I5S1R0Y2JpQWdjbVYwZFhKdUlIUm9hWE11YUdGdVpHeGxjbk11YkdWdVozUm9JQzBnTVR0Y2JuMDdYRzVjYmk4cUtseHVJQ29nVW1WdGIzWmxJR0Z1SUdsdWRHVnlZMlZ3ZEc5eUlHWnliMjBnZEdobElITjBZV05yWEc0Z0tseHVJQ29nUUhCaGNtRnRJSHRPZFcxaVpYSjlJR2xrSUZSb1pTQkpSQ0IwYUdGMElIZGhjeUJ5WlhSMWNtNWxaQ0JpZVNCZ2RYTmxZRnh1SUNvdlhHNUpiblJsY21ObGNIUnZjazFoYm1GblpYSXVjSEp2ZEc5MGVYQmxMbVZxWldOMElEMGdablZ1WTNScGIyNGdaV3BsWTNRb2FXUXBJSHRjYmlBZ2FXWWdLSFJvYVhNdWFHRnVaR3hsY25OYmFXUmRLU0I3WEc0Z0lDQWdkR2hwY3k1b1lXNWtiR1Z5YzF0cFpGMGdQU0J1ZFd4c08xeHVJQ0I5WEc1OU8xeHVYRzR2S2lwY2JpQXFJRWwwWlhKaGRHVWdiM1psY2lCaGJHd2dkR2hsSUhKbFoybHpkR1Z5WldRZ2FXNTBaWEpqWlhCMGIzSnpYRzRnS2x4dUlDb2dWR2hwY3lCdFpYUm9iMlFnYVhNZ2NHRnlkR2xqZFd4aGNteDVJSFZ6WldaMWJDQm1iM0lnYzJ0cGNIQnBibWNnYjNabGNpQmhibmxjYmlBcUlHbHVkR1Z5WTJWd2RHOXljeUIwYUdGMElHMWhlU0JvWVhabElHSmxZMjl0WlNCZ2JuVnNiR0FnWTJGc2JHbHVaeUJnWldwbFkzUmdMbHh1SUNwY2JpQXFJRUJ3WVhKaGJTQjdSblZ1WTNScGIyNTlJR1p1SUZSb1pTQm1kVzVqZEdsdmJpQjBieUJqWVd4c0lHWnZjaUJsWVdOb0lHbHVkR1Z5WTJWd2RHOXlYRzRnS2k5Y2JrbHVkR1Z5WTJWd2RHOXlUV0Z1WVdkbGNpNXdjbTkwYjNSNWNHVXVabTl5UldGamFDQTlJR1oxYm1OMGFXOXVJR1p2Y2tWaFkyZ29abTRwSUh0Y2JpQWdkWFJwYkhNdVptOXlSV0ZqYUNoMGFHbHpMbWhoYm1Sc1pYSnpMQ0JtZFc1amRHbHZiaUJtYjNKRllXTm9TR0Z1Wkd4bGNpaG9LU0I3WEc0Z0lDQWdhV1lnS0dnZ0lUMDlJRzUxYkd3cElIdGNiaUFnSUNBZ0lHWnVLR2dwTzF4dUlDQWdJSDFjYmlBZ2ZTazdYRzU5TzF4dVhHNXRiMlIxYkdVdVpYaHdiM0owY3lBOUlFbHVkR1Z5WTJWd2RHOXlUV0Z1WVdkbGNqdGNiaUlzSWlkMWMyVWdjM1J5YVdOMEp6dGNibHh1ZG1GeUlHVnVhR0Z1WTJWRmNuSnZjaUE5SUhKbGNYVnBjbVVvSnk0dlpXNW9ZVzVqWlVWeWNtOXlKeWs3WEc1Y2JpOHFLbHh1SUNvZ1EzSmxZWFJsSUdGdUlFVnljbTl5SUhkcGRHZ2dkR2hsSUhOd1pXTnBabWxsWkNCdFpYTnpZV2RsTENCamIyNW1hV2NzSUdWeWNtOXlJR052WkdVc0lISmxjWFZsYzNRZ1lXNWtJSEpsYzNCdmJuTmxMbHh1SUNwY2JpQXFJRUJ3WVhKaGJTQjdjM1J5YVc1bmZTQnRaWE56WVdkbElGUm9aU0JsY25KdmNpQnRaWE56WVdkbExseHVJQ29nUUhCaGNtRnRJSHRQWW1wbFkzUjlJR052Ym1acFp5QlVhR1VnWTI5dVptbG5MbHh1SUNvZ1FIQmhjbUZ0SUh0emRISnBibWQ5SUZ0amIyUmxYU0JVYUdVZ1pYSnliM0lnWTI5a1pTQW9abTl5SUdWNFlXMXdiR1VzSUNkRlEwOU9Ua0ZDVDFKVVJVUW5LUzVjYmlBcUlFQndZWEpoYlNCN1QySnFaV04wZlNCYmNtVnhkV1Z6ZEYwZ1ZHaGxJSEpsY1hWbGMzUXVYRzRnS2lCQWNHRnlZVzBnZTA5aWFtVmpkSDBnVzNKbGMzQnZibk5sWFNCVWFHVWdjbVZ6Y0c5dWMyVXVYRzRnS2lCQWNtVjBkWEp1Y3lCN1JYSnliM0o5SUZSb1pTQmpjbVZoZEdWa0lHVnljbTl5TGx4dUlDb3ZYRzV0YjJSMWJHVXVaWGh3YjNKMGN5QTlJR1oxYm1OMGFXOXVJR055WldGMFpVVnljbTl5S0cxbGMzTmhaMlVzSUdOdmJtWnBaeXdnWTI5a1pTd2djbVZ4ZFdWemRDd2djbVZ6Y0c5dWMyVXBJSHRjYmlBZ2RtRnlJR1Z5Y205eUlEMGdibVYzSUVWeWNtOXlLRzFsYzNOaFoyVXBPMXh1SUNCeVpYUjFjbTRnWlc1b1lXNWpaVVZ5Y205eUtHVnljbTl5TENCamIyNW1hV2NzSUdOdlpHVXNJSEpsY1hWbGMzUXNJSEpsYzNCdmJuTmxLVHRjYm4wN1hHNGlMQ0luZFhObElITjBjbWxqZENjN1hHNWNiblpoY2lCMWRHbHNjeUE5SUhKbGNYVnBjbVVvSnk0dkxpNHZkWFJwYkhNbktUdGNiblpoY2lCMGNtRnVjMlp2Y20xRVlYUmhJRDBnY21WeGRXbHlaU2duTGk5MGNtRnVjMlp2Y20xRVlYUmhKeWs3WEc1MllYSWdhWE5EWVc1alpXd2dQU0J5WlhGMWFYSmxLQ2N1TGk5allXNWpaV3d2YVhORFlXNWpaV3duS1R0Y2JuWmhjaUJrWldaaGRXeDBjeUE5SUhKbGNYVnBjbVVvSnk0dUwyUmxabUYxYkhSekp5azdYRzUyWVhJZ2FYTkJZbk52YkhWMFpWVlNUQ0E5SUhKbGNYVnBjbVVvSnk0dkxpNHZhR1ZzY0dWeWN5OXBjMEZpYzI5c2RYUmxWVkpNSnlrN1hHNTJZWElnWTI5dFltbHVaVlZTVEhNZ1BTQnlaWEYxYVhKbEtDY3VMeTR1TDJobGJIQmxjbk12WTI5dFltbHVaVlZTVEhNbktUdGNibHh1THlvcVhHNGdLaUJVYUhKdmQzTWdZU0JnUTJGdVkyVnNZQ0JwWmlCallXNWpaV3hzWVhScGIyNGdhR0Z6SUdKbFpXNGdjbVZ4ZFdWemRHVmtMbHh1SUNvdlhHNW1kVzVqZEdsdmJpQjBhSEp2ZDBsbVEyRnVZMlZzYkdGMGFXOXVVbVZ4ZFdWemRHVmtLR052Ym1acFp5a2dlMXh1SUNCcFppQW9ZMjl1Wm1sbkxtTmhibU5sYkZSdmEyVnVLU0I3WEc0Z0lDQWdZMjl1Wm1sbkxtTmhibU5sYkZSdmEyVnVMblJvY205M1NXWlNaWEYxWlhOMFpXUW9LVHRjYmlBZ2ZWeHVmVnh1WEc0dktpcGNiaUFxSUVScGMzQmhkR05vSUdFZ2NtVnhkV1Z6ZENCMGJ5QjBhR1VnYzJWeWRtVnlJSFZ6YVc1bklIUm9aU0JqYjI1bWFXZDFjbVZrSUdGa1lYQjBaWEl1WEc0Z0tseHVJQ29nUUhCaGNtRnRJSHR2WW1wbFkzUjlJR052Ym1acFp5QlVhR1VnWTI5dVptbG5JSFJvWVhRZ2FYTWdkRzhnWW1VZ2RYTmxaQ0JtYjNJZ2RHaGxJSEpsY1hWbGMzUmNiaUFxSUVCeVpYUjFjbTV6SUh0UWNtOXRhWE5sZlNCVWFHVWdVSEp2YldselpTQjBieUJpWlNCbWRXeG1hV3hzWldSY2JpQXFMMXh1Ylc5a2RXeGxMbVY0Y0c5eWRITWdQU0JtZFc1amRHbHZiaUJrYVhOd1lYUmphRkpsY1hWbGMzUW9ZMjl1Wm1sbktTQjdYRzRnSUhSb2NtOTNTV1pEWVc1alpXeHNZWFJwYjI1U1pYRjFaWE4wWldRb1kyOXVabWxuS1R0Y2JseHVJQ0F2THlCVGRYQndiM0owSUdKaGMyVlZVa3dnWTI5dVptbG5YRzRnSUdsbUlDaGpiMjVtYVdjdVltRnpaVlZTVENBbUppQWhhWE5CWW5OdmJIVjBaVlZTVENoamIyNW1hV2N1ZFhKc0tTa2dlMXh1SUNBZ0lHTnZibVpwWnk1MWNtd2dQU0JqYjIxaWFXNWxWVkpNY3loamIyNW1hV2N1WW1GelpWVlNUQ3dnWTI5dVptbG5MblZ5YkNrN1hHNGdJSDFjYmx4dUlDQXZMeUJGYm5OMWNtVWdhR1ZoWkdWeWN5QmxlR2x6ZEZ4dUlDQmpiMjVtYVdjdWFHVmhaR1Z5Y3lBOUlHTnZibVpwWnk1b1pXRmtaWEp6SUh4OElIdDlPMXh1WEc0Z0lDOHZJRlJ5WVc1elptOXliU0J5WlhGMVpYTjBJR1JoZEdGY2JpQWdZMjl1Wm1sbkxtUmhkR0VnUFNCMGNtRnVjMlp2Y20xRVlYUmhLRnh1SUNBZ0lHTnZibVpwWnk1a1lYUmhMRnh1SUNBZ0lHTnZibVpwWnk1b1pXRmtaWEp6TEZ4dUlDQWdJR052Ym1acFp5NTBjbUZ1YzJadmNtMVNaWEYxWlhOMFhHNGdJQ2s3WEc1Y2JpQWdMeThnUm14aGRIUmxiaUJvWldGa1pYSnpYRzRnSUdOdmJtWnBaeTVvWldGa1pYSnpJRDBnZFhScGJITXViV1Z5WjJVb1hHNGdJQ0FnWTI5dVptbG5MbWhsWVdSbGNuTXVZMjl0Ylc5dUlIeDhJSHQ5TEZ4dUlDQWdJR052Ym1acFp5NW9aV0ZrWlhKelcyTnZibVpwWnk1dFpYUm9iMlJkSUh4OElIdDlMRnh1SUNBZ0lHTnZibVpwWnk1b1pXRmtaWEp6SUh4OElIdDlYRzRnSUNrN1hHNWNiaUFnZFhScGJITXVabTl5UldGamFDaGNiaUFnSUNCYkoyUmxiR1YwWlNjc0lDZG5aWFFuTENBbmFHVmhaQ2NzSUNkd2IzTjBKeXdnSjNCMWRDY3NJQ2R3WVhSamFDY3NJQ2RqYjIxdGIyNG5YU3hjYmlBZ0lDQm1kVzVqZEdsdmJpQmpiR1ZoYmtobFlXUmxja052Ym1acFp5aHRaWFJvYjJRcElIdGNiaUFnSUNBZ0lHUmxiR1YwWlNCamIyNW1hV2N1YUdWaFpHVnljMXR0WlhSb2IyUmRPMXh1SUNBZ0lIMWNiaUFnS1R0Y2JseHVJQ0IyWVhJZ1lXUmhjSFJsY2lBOUlHTnZibVpwWnk1aFpHRndkR1Z5SUh4OElHUmxabUYxYkhSekxtRmtZWEIwWlhJN1hHNWNiaUFnY21WMGRYSnVJR0ZrWVhCMFpYSW9ZMjl1Wm1sbktTNTBhR1Z1S0daMWJtTjBhVzl1SUc5dVFXUmhjSFJsY2xKbGMyOXNkWFJwYjI0b2NtVnpjRzl1YzJVcElIdGNiaUFnSUNCMGFISnZkMGxtUTJGdVkyVnNiR0YwYVc5dVVtVnhkV1Z6ZEdWa0tHTnZibVpwWnlrN1hHNWNiaUFnSUNBdkx5QlVjbUZ1YzJadmNtMGdjbVZ6Y0c5dWMyVWdaR0YwWVZ4dUlDQWdJSEpsYzNCdmJuTmxMbVJoZEdFZ1BTQjBjbUZ1YzJadmNtMUVZWFJoS0Z4dUlDQWdJQ0FnY21WemNHOXVjMlV1WkdGMFlTeGNiaUFnSUNBZ0lISmxjM0J2Ym5ObExtaGxZV1JsY25Nc1hHNGdJQ0FnSUNCamIyNW1hV2N1ZEhKaGJuTm1iM0p0VW1WemNHOXVjMlZjYmlBZ0lDQXBPMXh1WEc0Z0lDQWdjbVYwZFhKdUlISmxjM0J2Ym5ObE8xeHVJQ0I5TENCbWRXNWpkR2x2YmlCdmJrRmtZWEIwWlhKU1pXcGxZM1JwYjI0b2NtVmhjMjl1S1NCN1hHNGdJQ0FnYVdZZ0tDRnBjME5oYm1ObGJDaHlaV0Z6YjI0cEtTQjdYRzRnSUNBZ0lDQjBhSEp2ZDBsbVEyRnVZMlZzYkdGMGFXOXVVbVZ4ZFdWemRHVmtLR052Ym1acFp5azdYRzVjYmlBZ0lDQWdJQzh2SUZSeVlXNXpabTl5YlNCeVpYTndiMjV6WlNCa1lYUmhYRzRnSUNBZ0lDQnBaaUFvY21WaGMyOXVJQ1ltSUhKbFlYTnZiaTV5WlhOd2IyNXpaU2tnZTF4dUlDQWdJQ0FnSUNCeVpXRnpiMjR1Y21WemNHOXVjMlV1WkdGMFlTQTlJSFJ5WVc1elptOXliVVJoZEdFb1hHNGdJQ0FnSUNBZ0lDQWdjbVZoYzI5dUxuSmxjM0J2Ym5ObExtUmhkR0VzWEc0Z0lDQWdJQ0FnSUNBZ2NtVmhjMjl1TG5KbGMzQnZibk5sTG1obFlXUmxjbk1zWEc0Z0lDQWdJQ0FnSUNBZ1kyOXVabWxuTG5SeVlXNXpabTl5YlZKbGMzQnZibk5sWEc0Z0lDQWdJQ0FnSUNrN1hHNGdJQ0FnSUNCOVhHNGdJQ0FnZlZ4dVhHNGdJQ0FnY21WMGRYSnVJRkJ5YjIxcGMyVXVjbVZxWldOMEtISmxZWE52YmlrN1hHNGdJSDBwTzF4dWZUdGNiaUlzSWlkMWMyVWdjM1J5YVdOMEp6dGNibHh1THlvcVhHNGdLaUJWY0dSaGRHVWdZVzRnUlhKeWIzSWdkMmwwYUNCMGFHVWdjM0JsWTJsbWFXVmtJR052Ym1acFp5d2daWEp5YjNJZ1kyOWtaU3dnWVc1a0lISmxjM0J2Ym5ObExseHVJQ3BjYmlBcUlFQndZWEpoYlNCN1JYSnliM0o5SUdWeWNtOXlJRlJvWlNCbGNuSnZjaUIwYnlCMWNHUmhkR1V1WEc0Z0tpQkFjR0Z5WVcwZ2UwOWlhbVZqZEgwZ1kyOXVabWxuSUZSb1pTQmpiMjVtYVdjdVhHNGdLaUJBY0dGeVlXMGdlM04wY21sdVozMGdXMk52WkdWZElGUm9aU0JsY25KdmNpQmpiMlJsSUNobWIzSWdaWGhoYlhCc1pTd2dKMFZEVDA1T1FVSlBVbFJGUkNjcExseHVJQ29nUUhCaGNtRnRJSHRQWW1wbFkzUjlJRnR5WlhGMVpYTjBYU0JVYUdVZ2NtVnhkV1Z6ZEM1Y2JpQXFJRUJ3WVhKaGJTQjdUMkpxWldOMGZTQmJjbVZ6Y0c5dWMyVmRJRlJvWlNCeVpYTndiMjV6WlM1Y2JpQXFJRUJ5WlhSMWNtNXpJSHRGY25KdmNuMGdWR2hsSUdWeWNtOXlMbHh1SUNvdlhHNXRiMlIxYkdVdVpYaHdiM0owY3lBOUlHWjFibU4wYVc5dUlHVnVhR0Z1WTJWRmNuSnZjaWhsY25KdmNpd2dZMjl1Wm1sbkxDQmpiMlJsTENCeVpYRjFaWE4wTENCeVpYTndiMjV6WlNrZ2UxeHVJQ0JsY25KdmNpNWpiMjVtYVdjZ1BTQmpiMjVtYVdjN1hHNGdJR2xtSUNoamIyUmxLU0I3WEc0Z0lDQWdaWEp5YjNJdVkyOWtaU0E5SUdOdlpHVTdYRzRnSUgxY2JpQWdaWEp5YjNJdWNtVnhkV1Z6ZENBOUlISmxjWFZsYzNRN1hHNGdJR1Z5Y205eUxuSmxjM0J2Ym5ObElEMGdjbVZ6Y0c5dWMyVTdYRzRnSUhKbGRIVnliaUJsY25KdmNqdGNibjA3WEc0aUxDSW5kWE5sSUhOMGNtbGpkQ2M3WEc1Y2JuWmhjaUJqY21WaGRHVkZjbkp2Y2lBOUlISmxjWFZwY21Vb0p5NHZZM0psWVhSbFJYSnliM0luS1R0Y2JseHVMeW9xWEc0Z0tpQlNaWE52YkhabElHOXlJSEpsYW1WamRDQmhJRkJ5YjIxcGMyVWdZbUZ6WldRZ2IyNGdjbVZ6Y0c5dWMyVWdjM1JoZEhWekxseHVJQ3BjYmlBcUlFQndZWEpoYlNCN1JuVnVZM1JwYjI1OUlISmxjMjlzZG1VZ1FTQm1kVzVqZEdsdmJpQjBhR0YwSUhKbGMyOXNkbVZ6SUhSb1pTQndjbTl0YVhObExseHVJQ29nUUhCaGNtRnRJSHRHZFc1amRHbHZibjBnY21WcVpXTjBJRUVnWm5WdVkzUnBiMjRnZEdoaGRDQnlaV3BsWTNSeklIUm9aU0J3Y205dGFYTmxMbHh1SUNvZ1FIQmhjbUZ0SUh0dlltcGxZM1I5SUhKbGMzQnZibk5sSUZSb1pTQnlaWE53YjI1elpTNWNiaUFxTDF4dWJXOWtkV3hsTG1WNGNHOXlkSE1nUFNCbWRXNWpkR2x2YmlCelpYUjBiR1VvY21WemIyeDJaU3dnY21WcVpXTjBMQ0J5WlhOd2IyNXpaU2tnZTF4dUlDQjJZWElnZG1Gc2FXUmhkR1ZUZEdGMGRYTWdQU0J5WlhOd2IyNXpaUzVqYjI1bWFXY3VkbUZzYVdSaGRHVlRkR0YwZFhNN1hHNGdJQzh2SUU1dmRHVTZJSE4wWVhSMWN5QnBjeUJ1YjNRZ1pYaHdiM05sWkNCaWVTQllSRzl0WVdsdVVtVnhkV1Z6ZEZ4dUlDQnBaaUFvSVhKbGMzQnZibk5sTG5OMFlYUjFjeUI4ZkNBaGRtRnNhV1JoZEdWVGRHRjBkWE1nZkh3Z2RtRnNhV1JoZEdWVGRHRjBkWE1vY21WemNHOXVjMlV1YzNSaGRIVnpLU2tnZTF4dUlDQWdJSEpsYzI5c2RtVW9jbVZ6Y0c5dWMyVXBPMXh1SUNCOUlHVnNjMlVnZTF4dUlDQWdJSEpsYW1WamRDaGpjbVZoZEdWRmNuSnZjaWhjYmlBZ0lDQWdJQ2RTWlhGMVpYTjBJR1poYVd4bFpDQjNhWFJvSUhOMFlYUjFjeUJqYjJSbElDY2dLeUJ5WlhOd2IyNXpaUzV6ZEdGMGRYTXNYRzRnSUNBZ0lDQnlaWE53YjI1elpTNWpiMjVtYVdjc1hHNGdJQ0FnSUNCdWRXeHNMRnh1SUNBZ0lDQWdjbVZ6Y0c5dWMyVXVjbVZ4ZFdWemRDeGNiaUFnSUNBZ0lISmxjM0J2Ym5ObFhHNGdJQ0FnS1NrN1hHNGdJSDFjYm4wN1hHNGlMQ0luZFhObElITjBjbWxqZENjN1hHNWNiblpoY2lCMWRHbHNjeUE5SUhKbGNYVnBjbVVvSnk0dkxpNHZkWFJwYkhNbktUdGNibHh1THlvcVhHNGdLaUJVY21GdWMyWnZjbTBnZEdobElHUmhkR0VnWm05eUlHRWdjbVZ4ZFdWemRDQnZjaUJoSUhKbGMzQnZibk5sWEc0Z0tseHVJQ29nUUhCaGNtRnRJSHRQWW1wbFkzUjhVM1J5YVc1bmZTQmtZWFJoSUZSb1pTQmtZWFJoSUhSdklHSmxJSFJ5WVc1elptOXliV1ZrWEc0Z0tpQkFjR0Z5WVcwZ2UwRnljbUY1ZlNCb1pXRmtaWEp6SUZSb1pTQm9aV0ZrWlhKeklHWnZjaUIwYUdVZ2NtVnhkV1Z6ZENCdmNpQnlaWE53YjI1elpWeHVJQ29nUUhCaGNtRnRJSHRCY25KaGVYeEdkVzVqZEdsdmJuMGdabTV6SUVFZ2MybHVaMnhsSUdaMWJtTjBhVzl1SUc5eUlFRnljbUY1SUc5bUlHWjFibU4wYVc5dWMxeHVJQ29nUUhKbGRIVnlibk1nZXlwOUlGUm9aU0J5WlhOMWJIUnBibWNnZEhKaGJuTm1iM0p0WldRZ1pHRjBZVnh1SUNvdlhHNXRiMlIxYkdVdVpYaHdiM0owY3lBOUlHWjFibU4wYVc5dUlIUnlZVzV6Wm05eWJVUmhkR0VvWkdGMFlTd2dhR1ZoWkdWeWN5d2dabTV6S1NCN1hHNGdJQzhxWlhOc2FXNTBJRzV2TFhCaGNtRnRMWEpsWVhOemFXZHVPakFxTDF4dUlDQjFkR2xzY3k1bWIzSkZZV05vS0dadWN5d2dablZ1WTNScGIyNGdkSEpoYm5ObWIzSnRLR1p1S1NCN1hHNGdJQ0FnWkdGMFlTQTlJR1p1S0dSaGRHRXNJR2hsWVdSbGNuTXBPMXh1SUNCOUtUdGNibHh1SUNCeVpYUjFjbTRnWkdGMFlUdGNibjA3WEc0aUxDSW5kWE5sSUhOMGNtbGpkQ2M3WEc1Y2JuWmhjaUIxZEdsc2N5QTlJSEpsY1hWcGNtVW9KeTR2ZFhScGJITW5LVHRjYm5aaGNpQnViM0p0WVd4cGVtVklaV0ZrWlhKT1lXMWxJRDBnY21WeGRXbHlaU2duTGk5b1pXeHdaWEp6TDI1dmNtMWhiR2w2WlVobFlXUmxjazVoYldVbktUdGNibHh1ZG1GeUlFUkZSa0ZWVEZSZlEwOU9WRVZPVkY5VVdWQkZJRDBnZTF4dUlDQW5RMjl1ZEdWdWRDMVVlWEJsSnpvZ0oyRndjR3hwWTJGMGFXOXVMM2d0ZDNkM0xXWnZjbTB0ZFhKc1pXNWpiMlJsWkNkY2JuMDdYRzVjYm1aMWJtTjBhVzl1SUhObGRFTnZiblJsYm5SVWVYQmxTV1pWYm5ObGRDaG9aV0ZrWlhKekxDQjJZV3gxWlNrZ2UxeHVJQ0JwWmlBb0lYVjBhV3h6TG1selZXNWtaV1pwYm1Wa0tHaGxZV1JsY25NcElDWW1JSFYwYVd4ekxtbHpWVzVrWldacGJtVmtLR2hsWVdSbGNuTmJKME52Ym5SbGJuUXRWSGx3WlNkZEtTa2dlMXh1SUNBZ0lHaGxZV1JsY25OYkowTnZiblJsYm5RdFZIbHdaU2RkSUQwZ2RtRnNkV1U3WEc0Z0lIMWNibjFjYmx4dVpuVnVZM1JwYjI0Z1oyVjBSR1ZtWVhWc2RFRmtZWEIwWlhJb0tTQjdYRzRnSUhaaGNpQmhaR0Z3ZEdWeU8xeHVJQ0JwWmlBb2RIbHdaVzltSUZoTlRFaDBkSEJTWlhGMVpYTjBJQ0U5UFNBbmRXNWtaV1pwYm1Wa0p5a2dlMXh1SUNBZ0lDOHZJRVp2Y2lCaWNtOTNjMlZ5Y3lCMWMyVWdXRWhTSUdGa1lYQjBaWEpjYmlBZ0lDQmhaR0Z3ZEdWeUlEMGdjbVZ4ZFdseVpTZ25MaTloWkdGd2RHVnljeTk0YUhJbktUdGNiaUFnZlNCbGJITmxJR2xtSUNoMGVYQmxiMllnY0hKdlkyVnpjeUFoUFQwZ0ozVnVaR1ZtYVc1bFpDY3BJSHRjYmlBZ0lDQXZMeUJHYjNJZ2JtOWtaU0IxYzJVZ1NGUlVVQ0JoWkdGd2RHVnlYRzRnSUNBZ1lXUmhjSFJsY2lBOUlISmxjWFZwY21Vb0p5NHZZV1JoY0hSbGNuTXZhSFIwY0NjcE8xeHVJQ0I5WEc0Z0lISmxkSFZ5YmlCaFpHRndkR1Z5TzF4dWZWeHVYRzUyWVhJZ1pHVm1ZWFZzZEhNZ1BTQjdYRzRnSUdGa1lYQjBaWEk2SUdkbGRFUmxabUYxYkhSQlpHRndkR1Z5S0Nrc1hHNWNiaUFnZEhKaGJuTm1iM0p0VW1WeGRXVnpkRG9nVzJaMWJtTjBhVzl1SUhSeVlXNXpabTl5YlZKbGNYVmxjM1FvWkdGMFlTd2dhR1ZoWkdWeWN5a2dlMXh1SUNBZ0lHNXZjbTFoYkdsNlpVaGxZV1JsY2s1aGJXVW9hR1ZoWkdWeWN5d2dKME52Ym5SbGJuUXRWSGx3WlNjcE8xeHVJQ0FnSUdsbUlDaDFkR2xzY3k1cGMwWnZjbTFFWVhSaEtHUmhkR0VwSUh4OFhHNGdJQ0FnSUNCMWRHbHNjeTVwYzBGeWNtRjVRblZtWm1WeUtHUmhkR0VwSUh4OFhHNGdJQ0FnSUNCMWRHbHNjeTVwYzBKMVptWmxjaWhrWVhSaEtTQjhmRnh1SUNBZ0lDQWdkWFJwYkhNdWFYTlRkSEpsWVcwb1pHRjBZU2tnZkh4Y2JpQWdJQ0FnSUhWMGFXeHpMbWx6Um1sc1pTaGtZWFJoS1NCOGZGeHVJQ0FnSUNBZ2RYUnBiSE11YVhOQ2JHOWlLR1JoZEdFcFhHNGdJQ0FnS1NCN1hHNGdJQ0FnSUNCeVpYUjFjbTRnWkdGMFlUdGNiaUFnSUNCOVhHNGdJQ0FnYVdZZ0tIVjBhV3h6TG1selFYSnlZWGxDZFdabVpYSldhV1YzS0dSaGRHRXBLU0I3WEc0Z0lDQWdJQ0J5WlhSMWNtNGdaR0YwWVM1aWRXWm1aWEk3WEc0Z0lDQWdmVnh1SUNBZ0lHbG1JQ2gxZEdsc2N5NXBjMVZTVEZObFlYSmphRkJoY21GdGN5aGtZWFJoS1NrZ2UxeHVJQ0FnSUNBZ2MyVjBRMjl1ZEdWdWRGUjVjR1ZKWmxWdWMyVjBLR2hsWVdSbGNuTXNJQ2RoY0hCc2FXTmhkR2x2Ymk5NExYZDNkeTFtYjNKdExYVnliR1Z1WTI5a1pXUTdZMmhoY25ObGREMTFkR1l0T0NjcE8xeHVJQ0FnSUNBZ2NtVjBkWEp1SUdSaGRHRXVkRzlUZEhKcGJtY29LVHRjYmlBZ0lDQjlYRzRnSUNBZ2FXWWdLSFYwYVd4ekxtbHpUMkpxWldOMEtHUmhkR0VwS1NCN1hHNGdJQ0FnSUNCelpYUkRiMjUwWlc1MFZIbHdaVWxtVlc1elpYUW9hR1ZoWkdWeWN5d2dKMkZ3Y0d4cFkyRjBhVzl1TDJwemIyNDdZMmhoY25ObGREMTFkR1l0T0NjcE8xeHVJQ0FnSUNBZ2NtVjBkWEp1SUVwVFQwNHVjM1J5YVc1bmFXWjVLR1JoZEdFcE8xeHVJQ0FnSUgxY2JpQWdJQ0J5WlhSMWNtNGdaR0YwWVR0Y2JpQWdmVjBzWEc1Y2JpQWdkSEpoYm5ObWIzSnRVbVZ6Y0c5dWMyVTZJRnRtZFc1amRHbHZiaUIwY21GdWMyWnZjbTFTWlhOd2IyNXpaU2hrWVhSaEtTQjdYRzRnSUNBZ0x5cGxjMnhwYm5RZ2JtOHRjR0Z5WVcwdGNtVmhjM05wWjI0Nk1Db3ZYRzRnSUNBZ2FXWWdLSFI1Y0dWdlppQmtZWFJoSUQwOVBTQW5jM1J5YVc1bkp5a2dlMXh1SUNBZ0lDQWdkSEo1SUh0Y2JpQWdJQ0FnSUNBZ1pHRjBZU0E5SUVwVFQwNHVjR0Z5YzJVb1pHRjBZU2s3WEc0Z0lDQWdJQ0I5SUdOaGRHTm9JQ2hsS1NCN0lDOHFJRWxuYm05eVpTQXFMeUI5WEc0Z0lDQWdmVnh1SUNBZ0lISmxkSFZ5YmlCa1lYUmhPMXh1SUNCOVhTeGNibHh1SUNBdktpcGNiaUFnSUNvZ1FTQjBhVzFsYjNWMElHbHVJRzFwYkd4cGMyVmpiMjVrY3lCMGJ5QmhZbTl5ZENCaElISmxjWFZsYzNRdUlFbG1JSE5sZENCMGJ5QXdJQ2hrWldaaGRXeDBLU0JoWEc0Z0lDQXFJSFJwYldWdmRYUWdhWE1nYm05MElHTnlaV0YwWldRdVhHNGdJQ0FxTDF4dUlDQjBhVzFsYjNWME9pQXdMRnh1WEc0Z0lIaHpjbVpEYjI5cmFXVk9ZVzFsT2lBbldGTlNSaTFVVDB0RlRpY3NYRzRnSUhoemNtWklaV0ZrWlhKT1lXMWxPaUFuV0MxWVUxSkdMVlJQUzBWT0p5eGNibHh1SUNCdFlYaERiMjUwWlc1MFRHVnVaM1JvT2lBdE1TeGNibHh1SUNCMllXeHBaR0YwWlZOMFlYUjFjem9nWm5WdVkzUnBiMjRnZG1Gc2FXUmhkR1ZUZEdGMGRYTW9jM1JoZEhWektTQjdYRzRnSUNBZ2NtVjBkWEp1SUhOMFlYUjFjeUErUFNBeU1EQWdKaVlnYzNSaGRIVnpJRHdnTXpBd08xeHVJQ0I5WEc1OU8xeHVYRzVrWldaaGRXeDBjeTVvWldGa1pYSnpJRDBnZTF4dUlDQmpiMjF0YjI0NklIdGNiaUFnSUNBblFXTmpaWEIwSnpvZ0oyRndjR3hwWTJGMGFXOXVMMnB6YjI0c0lIUmxlSFF2Y0d4aGFXNHNJQ292S2lkY2JpQWdmVnh1ZlR0Y2JseHVkWFJwYkhNdVptOXlSV0ZqYUNoYkoyUmxiR1YwWlNjc0lDZG5aWFFuTENBbmFHVmhaQ2RkTENCbWRXNWpkR2x2YmlCbWIzSkZZV05vVFdWMGFHOWtUbTlFWVhSaEtHMWxkR2h2WkNrZ2UxeHVJQ0JrWldaaGRXeDBjeTVvWldGa1pYSnpXMjFsZEdodlpGMGdQU0I3ZlR0Y2JuMHBPMXh1WEc1MWRHbHNjeTVtYjNKRllXTm9LRnNuY0c5emRDY3NJQ2R3ZFhRbkxDQW5jR0YwWTJnblhTd2dablZ1WTNScGIyNGdabTl5UldGamFFMWxkR2h2WkZkcGRHaEVZWFJoS0cxbGRHaHZaQ2tnZTF4dUlDQmtaV1poZFd4MGN5NW9aV0ZrWlhKelcyMWxkR2h2WkYwZ1BTQjFkR2xzY3k1dFpYSm5aU2hFUlVaQlZVeFVYME5QVGxSRlRsUmZWRmxRUlNrN1hHNTlLVHRjYmx4dWJXOWtkV3hsTG1WNGNHOXlkSE1nUFNCa1pXWmhkV3gwY3p0Y2JpSXNJaWQxYzJVZ2MzUnlhV04wSnp0Y2JseHViVzlrZFd4bExtVjRjRzl5ZEhNZ1BTQm1kVzVqZEdsdmJpQmlhVzVrS0dadUxDQjBhR2x6UVhKbktTQjdYRzRnSUhKbGRIVnliaUJtZFc1amRHbHZiaUIzY21Gd0tDa2dlMXh1SUNBZ0lIWmhjaUJoY21keklEMGdibVYzSUVGeWNtRjVLR0Z5WjNWdFpXNTBjeTVzWlc1bmRHZ3BPMXh1SUNBZ0lHWnZjaUFvZG1GeUlHa2dQU0F3T3lCcElEd2dZWEpuY3k1c1pXNW5kR2c3SUdrckt5a2dlMXh1SUNBZ0lDQWdZWEpuYzF0cFhTQTlJR0Z5WjNWdFpXNTBjMXRwWFR0Y2JpQWdJQ0I5WEc0Z0lDQWdjbVYwZFhKdUlHWnVMbUZ3Y0d4NUtIUm9hWE5CY21jc0lHRnlaM01wTzF4dUlDQjlPMXh1ZlR0Y2JpSXNJaWQxYzJVZ2MzUnlhV04wSnp0Y2JseHVMeThnWW5SdllTQndiMng1Wm1sc2JDQm1iM0lnU1VVOE1UQWdZMjkxY25SbGMza2dhSFIwY0hNNkx5OW5hWFJvZFdJdVkyOXRMMlJoZG1sa1kyaGhiV0psY25NdlFtRnpaVFkwTG1welhHNWNiblpoY2lCamFHRnljeUE5SUNkQlFrTkVSVVpIU0VsS1MweE5UazlRVVZKVFZGVldWMWhaV21GaVkyUmxabWRvYVdwcmJHMXViM0J4Y25OMGRYWjNlSGw2TURFeU16UTFOamM0T1NzdlBTYzdYRzVjYm1aMWJtTjBhVzl1SUVVb0tTQjdYRzRnSUhSb2FYTXViV1Z6YzJGblpTQTlJQ2RUZEhKcGJtY2dZMjl1ZEdGcGJuTWdZVzRnYVc1MllXeHBaQ0JqYUdGeVlXTjBaWEluTzF4dWZWeHVSUzV3Y205MGIzUjVjR1VnUFNCdVpYY2dSWEp5YjNJN1hHNUZMbkJ5YjNSdmRIbHdaUzVqYjJSbElEMGdOVHRjYmtVdWNISnZkRzkwZVhCbExtNWhiV1VnUFNBblNXNTJZV3hwWkVOb1lYSmhZM1JsY2tWeWNtOXlKenRjYmx4dVpuVnVZM1JwYjI0Z1luUnZZU2hwYm5CMWRDa2dlMXh1SUNCMllYSWdjM1J5SUQwZ1UzUnlhVzVuS0dsdWNIVjBLVHRjYmlBZ2RtRnlJRzkxZEhCMWRDQTlJQ2NuTzF4dUlDQm1iM0lnS0Z4dUlDQWdJQzh2SUdsdWFYUnBZV3hwZW1VZ2NtVnpkV3gwSUdGdVpDQmpiM1Z1ZEdWeVhHNGdJQ0FnZG1GeUlHSnNiMk5yTENCamFHRnlRMjlrWlN3Z2FXUjRJRDBnTUN3Z2JXRndJRDBnWTJoaGNuTTdYRzRnSUNBZ0x5OGdhV1lnZEdobElHNWxlSFFnYzNSeUlHbHVaR1Y0SUdSdlpYTWdibTkwSUdWNGFYTjBPbHh1SUNBZ0lDOHZJQ0FnWTJoaGJtZGxJSFJvWlNCdFlYQndhVzVuSUhSaFlteGxJSFJ2SUZ3aVBWd2lYRzRnSUNBZ0x5OGdJQ0JqYUdWamF5QnBaaUJrSUdoaGN5QnVieUJtY21GamRHbHZibUZzSUdScFoybDBjMXh1SUNBZ0lITjBjaTVqYUdGeVFYUW9hV1I0SUh3Z01Da2dmSHdnS0cxaGNDQTlJQ2M5Snl3Z2FXUjRJQ1VnTVNrN1hHNGdJQ0FnTHk4Z1hDSTRJQzBnYVdSNElDVWdNU0FxSURoY0lpQm5aVzVsY21GMFpYTWdkR2hsSUhObGNYVmxibU5sSURJc0lEUXNJRFlzSURoY2JpQWdJQ0J2ZFhSd2RYUWdLejBnYldGd0xtTm9ZWEpCZENnMk15QW1JR0pzYjJOcklENCtJRGdnTFNCcFpIZ2dKU0F4SUNvZ09DbGNiaUFnS1NCN1hHNGdJQ0FnWTJoaGNrTnZaR1VnUFNCemRISXVZMmhoY2tOdlpHVkJkQ2hwWkhnZ0t6MGdNeUF2SURRcE8xeHVJQ0FnSUdsbUlDaGphR0Z5UTI5a1pTQStJREI0UmtZcElIdGNiaUFnSUNBZ0lIUm9jbTkzSUc1bGR5QkZLQ2s3WEc0Z0lDQWdmVnh1SUNBZ0lHSnNiMk5ySUQwZ1lteHZZMnNnUER3Z09DQjhJR05vWVhKRGIyUmxPMXh1SUNCOVhHNGdJSEpsZEhWeWJpQnZkWFJ3ZFhRN1hHNTlYRzVjYm0xdlpIVnNaUzVsZUhCdmNuUnpJRDBnWW5SdllUdGNiaUlzSWlkMWMyVWdjM1J5YVdOMEp6dGNibHh1ZG1GeUlIVjBhV3h6SUQwZ2NtVnhkV2x5WlNnbkxpOHVMaTkxZEdsc2N5Y3BPMXh1WEc1bWRXNWpkR2x2YmlCbGJtTnZaR1VvZG1Gc0tTQjdYRzRnSUhKbGRIVnliaUJsYm1OdlpHVlZVa2xEYjIxd2IyNWxiblFvZG1Gc0tTNWNiaUFnSUNCeVpYQnNZV05sS0M4bE5EQXZaMmtzSUNkQUp5a3VYRzRnSUNBZ2NtVndiR0ZqWlNndkpUTkJMMmRwTENBbk9pY3BMbHh1SUNBZ0lISmxjR3hoWTJVb0x5VXlOQzluTENBbkpDY3BMbHh1SUNBZ0lISmxjR3hoWTJVb0x5VXlReTluYVN3Z0p5d25LUzVjYmlBZ0lDQnlaWEJzWVdObEtDOGxNakF2Wnl3Z0p5c25LUzVjYmlBZ0lDQnlaWEJzWVdObEtDOGxOVUl2WjJrc0lDZGJKeWt1WEc0Z0lDQWdjbVZ3YkdGalpTZ3ZKVFZFTDJkcExDQW5YU2NwTzF4dWZWeHVYRzR2S2lwY2JpQXFJRUoxYVd4a0lHRWdWVkpNSUdKNUlHRndjR1Z1WkdsdVp5QndZWEpoYlhNZ2RHOGdkR2hsSUdWdVpGeHVJQ3BjYmlBcUlFQndZWEpoYlNCN2MzUnlhVzVuZlNCMWNtd2dWR2hsSUdKaGMyVWdiMllnZEdobElIVnliQ0FvWlM1bkxpd2dhSFIwY0RvdkwzZDNkeTVuYjI5bmJHVXVZMjl0S1Z4dUlDb2dRSEJoY21GdElIdHZZbXBsWTNSOUlGdHdZWEpoYlhOZElGUm9aU0J3WVhKaGJYTWdkRzhnWW1VZ1lYQndaVzVrWldSY2JpQXFJRUJ5WlhSMWNtNXpJSHR6ZEhKcGJtZDlJRlJvWlNCbWIzSnRZWFIwWldRZ2RYSnNYRzRnS2k5Y2JtMXZaSFZzWlM1bGVIQnZjblJ6SUQwZ1puVnVZM1JwYjI0Z1luVnBiR1JWVWt3b2RYSnNMQ0J3WVhKaGJYTXNJSEJoY21GdGMxTmxjbWxoYkdsNlpYSXBJSHRjYmlBZ0x5cGxjMnhwYm5RZ2JtOHRjR0Z5WVcwdGNtVmhjM05wWjI0Nk1Db3ZYRzRnSUdsbUlDZ2hjR0Z5WVcxektTQjdYRzRnSUNBZ2NtVjBkWEp1SUhWeWJEdGNiaUFnZlZ4dVhHNGdJSFpoY2lCelpYSnBZV3hwZW1Wa1VHRnlZVzF6TzF4dUlDQnBaaUFvY0dGeVlXMXpVMlZ5YVdGc2FYcGxjaWtnZTF4dUlDQWdJSE5sY21saGJHbDZaV1JRWVhKaGJYTWdQU0J3WVhKaGJYTlRaWEpwWVd4cGVtVnlLSEJoY21GdGN5azdYRzRnSUgwZ1pXeHpaU0JwWmlBb2RYUnBiSE11YVhOVlVreFRaV0Z5WTJoUVlYSmhiWE1vY0dGeVlXMXpLU2tnZTF4dUlDQWdJSE5sY21saGJHbDZaV1JRWVhKaGJYTWdQU0J3WVhKaGJYTXVkRzlUZEhKcGJtY29LVHRjYmlBZ2ZTQmxiSE5sSUh0Y2JpQWdJQ0IyWVhJZ2NHRnlkSE1nUFNCYlhUdGNibHh1SUNBZ0lIVjBhV3h6TG1admNrVmhZMmdvY0dGeVlXMXpMQ0JtZFc1amRHbHZiaUJ6WlhKcFlXeHBlbVVvZG1Gc0xDQnJaWGtwSUh0Y2JpQWdJQ0FnSUdsbUlDaDJZV3dnUFQwOUlHNTFiR3dnZkh3Z2RIbHdaVzltSUhaaGJDQTlQVDBnSjNWdVpHVm1hVzVsWkNjcElIdGNiaUFnSUNBZ0lDQWdjbVYwZFhKdU8xeHVJQ0FnSUNBZ2ZWeHVYRzRnSUNBZ0lDQnBaaUFvZFhScGJITXVhWE5CY25KaGVTaDJZV3dwS1NCN1hHNGdJQ0FnSUNBZ0lHdGxlU0E5SUd0bGVTQXJJQ2RiWFNjN1hHNGdJQ0FnSUNCOUlHVnNjMlVnZTF4dUlDQWdJQ0FnSUNCMllXd2dQU0JiZG1Gc1hUdGNiaUFnSUNBZ0lIMWNibHh1SUNBZ0lDQWdkWFJwYkhNdVptOXlSV0ZqYUNoMllXd3NJR1oxYm1OMGFXOXVJSEJoY25ObFZtRnNkV1VvZGlrZ2UxeHVJQ0FnSUNBZ0lDQnBaaUFvZFhScGJITXVhWE5FWVhSbEtIWXBLU0I3WEc0Z0lDQWdJQ0FnSUNBZ2RpQTlJSFl1ZEc5SlUwOVRkSEpwYm1jb0tUdGNiaUFnSUNBZ0lDQWdmU0JsYkhObElHbG1JQ2gxZEdsc2N5NXBjMDlpYW1WamRDaDJLU2tnZTF4dUlDQWdJQ0FnSUNBZ0lIWWdQU0JLVTA5T0xuTjBjbWx1WjJsbWVTaDJLVHRjYmlBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnSUNCd1lYSjBjeTV3ZFhOb0tHVnVZMjlrWlNoclpYa3BJQ3NnSnowbklDc2daVzVqYjJSbEtIWXBLVHRjYmlBZ0lDQWdJSDBwTzF4dUlDQWdJSDBwTzF4dVhHNGdJQ0FnYzJWeWFXRnNhWHBsWkZCaGNtRnRjeUE5SUhCaGNuUnpMbXB2YVc0b0p5WW5LVHRjYmlBZ2ZWeHVYRzRnSUdsbUlDaHpaWEpwWVd4cGVtVmtVR0Z5WVcxektTQjdYRzRnSUNBZ2RYSnNJQ3M5SUNoMWNtd3VhVzVrWlhoUFppZ25QeWNwSUQwOVBTQXRNU0EvSUNjL0p5QTZJQ2NtSnlrZ0t5QnpaWEpwWVd4cGVtVmtVR0Z5WVcxek8xeHVJQ0I5WEc1Y2JpQWdjbVYwZFhKdUlIVnliRHRjYm4wN1hHNGlMQ0luZFhObElITjBjbWxqZENjN1hHNWNiaThxS2x4dUlDb2dRM0psWVhSbGN5QmhJRzVsZHlCVlVrd2dZbmtnWTI5dFltbHVhVzVuSUhSb1pTQnpjR1ZqYVdacFpXUWdWVkpNYzF4dUlDcGNiaUFxSUVCd1lYSmhiU0I3YzNSeWFXNW5mU0JpWVhObFZWSk1JRlJvWlNCaVlYTmxJRlZTVEZ4dUlDb2dRSEJoY21GdElIdHpkSEpwYm1kOUlISmxiR0YwYVhabFZWSk1JRlJvWlNCeVpXeGhkR2wyWlNCVlVreGNiaUFxSUVCeVpYUjFjbTV6SUh0emRISnBibWQ5SUZSb1pTQmpiMjFpYVc1bFpDQlZVa3hjYmlBcUwxeHViVzlrZFd4bExtVjRjRzl5ZEhNZ1BTQm1kVzVqZEdsdmJpQmpiMjFpYVc1bFZWSk1jeWhpWVhObFZWSk1MQ0J5Wld4aGRHbDJaVlZTVENrZ2UxeHVJQ0J5WlhSMWNtNGdjbVZzWVhScGRtVlZVa3hjYmlBZ0lDQS9JR0poYzJWVlVrd3VjbVZ3YkdGalpTZ3ZYRnd2S3lRdkxDQW5KeWtnS3lBbkx5Y2dLeUJ5Wld4aGRHbDJaVlZTVEM1eVpYQnNZV05sS0M5ZVhGd3ZLeThzSUNjbktWeHVJQ0FnSURvZ1ltRnpaVlZTVER0Y2JuMDdYRzRpTENJbmRYTmxJSE4wY21samRDYzdYRzVjYm5aaGNpQjFkR2xzY3lBOUlISmxjWFZwY21Vb0p5NHZMaTR2ZFhScGJITW5LVHRjYmx4dWJXOWtkV3hsTG1WNGNHOXlkSE1nUFNBb1hHNGdJSFYwYVd4ekxtbHpVM1JoYm1SaGNtUkNjbTkzYzJWeVJXNTJLQ2tnUDF4dVhHNGdJQzh2SUZOMFlXNWtZWEprSUdKeWIzZHpaWElnWlc1MmN5QnpkWEJ3YjNKMElHUnZZM1Z0Wlc1MExtTnZiMnRwWlZ4dUlDQW9ablZ1WTNScGIyNGdjM1JoYm1SaGNtUkNjbTkzYzJWeVJXNTJLQ2tnZTF4dUlDQWdJSEpsZEhWeWJpQjdYRzRnSUNBZ0lDQjNjbWwwWlRvZ1puVnVZM1JwYjI0Z2QzSnBkR1VvYm1GdFpTd2dkbUZzZFdVc0lHVjRjR2x5WlhNc0lIQmhkR2dzSUdSdmJXRnBiaXdnYzJWamRYSmxLU0I3WEc0Z0lDQWdJQ0FnSUhaaGNpQmpiMjlyYVdVZ1BTQmJYVHRjYmlBZ0lDQWdJQ0FnWTI5dmEybGxMbkIxYzJnb2JtRnRaU0FySUNjOUp5QXJJR1Z1WTI5a1pWVlNTVU52YlhCdmJtVnVkQ2gyWVd4MVpTa3BPMXh1WEc0Z0lDQWdJQ0FnSUdsbUlDaDFkR2xzY3k1cGMwNTFiV0psY2lobGVIQnBjbVZ6S1NrZ2UxeHVJQ0FnSUNBZ0lDQWdJR052YjJ0cFpTNXdkWE5vS0NkbGVIQnBjbVZ6UFNjZ0t5QnVaWGNnUkdGMFpTaGxlSEJwY21WektTNTBiMGROVkZOMGNtbHVaeWdwS1R0Y2JpQWdJQ0FnSUNBZ2ZWeHVYRzRnSUNBZ0lDQWdJR2xtSUNoMWRHbHNjeTVwYzFOMGNtbHVaeWh3WVhSb0tTa2dlMXh1SUNBZ0lDQWdJQ0FnSUdOdmIydHBaUzV3ZFhOb0tDZHdZWFJvUFNjZ0t5QndZWFJvS1R0Y2JpQWdJQ0FnSUNBZ2ZWeHVYRzRnSUNBZ0lDQWdJR2xtSUNoMWRHbHNjeTVwYzFOMGNtbHVaeWhrYjIxaGFXNHBLU0I3WEc0Z0lDQWdJQ0FnSUNBZ1kyOXZhMmxsTG5CMWMyZ29KMlJ2YldGcGJqMG5JQ3NnWkc5dFlXbHVLVHRjYmlBZ0lDQWdJQ0FnZlZ4dVhHNGdJQ0FnSUNBZ0lHbG1JQ2h6WldOMWNtVWdQVDA5SUhSeWRXVXBJSHRjYmlBZ0lDQWdJQ0FnSUNCamIyOXJhV1V1Y0hWemFDZ25jMlZqZFhKbEp5azdYRzRnSUNBZ0lDQWdJSDFjYmx4dUlDQWdJQ0FnSUNCa2IyTjFiV1Z1ZEM1amIyOXJhV1VnUFNCamIyOXJhV1V1YW05cGJpZ25PeUFuS1R0Y2JpQWdJQ0FnSUgwc1hHNWNiaUFnSUNBZ0lISmxZV1E2SUdaMWJtTjBhVzl1SUhKbFlXUW9ibUZ0WlNrZ2UxeHVJQ0FnSUNBZ0lDQjJZWElnYldGMFkyZ2dQU0JrYjJOMWJXVnVkQzVqYjI5cmFXVXViV0YwWTJnb2JtVjNJRkpsWjBWNGNDZ25LRjU4TzF4Y1hGeHpLaWtvSnlBcklHNWhiV1VnS3lBbktUMG9XMTQ3WFNvcEp5a3BPMXh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdLRzFoZEdOb0lEOGdaR1ZqYjJSbFZWSkpRMjl0Y0c5dVpXNTBLRzFoZEdOb1d6TmRLU0E2SUc1MWJHd3BPMXh1SUNBZ0lDQWdmU3hjYmx4dUlDQWdJQ0FnY21WdGIzWmxPaUJtZFc1amRHbHZiaUJ5WlcxdmRtVW9ibUZ0WlNrZ2UxeHVJQ0FnSUNBZ0lDQjBhR2x6TG5keWFYUmxLRzVoYldVc0lDY25MQ0JFWVhSbExtNXZkeWdwSUMwZ09EWTBNREF3TURBcE8xeHVJQ0FnSUNBZ2ZWeHVJQ0FnSUgwN1hHNGdJSDBwS0NrZ09seHVYRzRnSUM4dklFNXZiaUJ6ZEdGdVpHRnlaQ0JpY205M2MyVnlJR1Z1ZGlBb2QyVmlJSGR2Y210bGNuTXNJSEpsWVdOMExXNWhkR2wyWlNrZ2JHRmpheUJ1WldWa1pXUWdjM1Z3Y0c5eWRDNWNiaUFnS0daMWJtTjBhVzl1SUc1dmJsTjBZVzVrWVhKa1FuSnZkM05sY2tWdWRpZ3BJSHRjYmlBZ0lDQnlaWFIxY200Z2UxeHVJQ0FnSUNBZ2QzSnBkR1U2SUdaMWJtTjBhVzl1SUhkeWFYUmxLQ2tnZTMwc1hHNGdJQ0FnSUNCeVpXRmtPaUJtZFc1amRHbHZiaUJ5WldGa0tDa2dleUJ5WlhSMWNtNGdiblZzYkRzZ2ZTeGNiaUFnSUNBZ0lISmxiVzkyWlRvZ1puVnVZM1JwYjI0Z2NtVnRiM1psS0NrZ2UzMWNiaUFnSUNCOU8xeHVJQ0I5S1NncFhHNHBPMXh1SWl3aUozVnpaU0J6ZEhKcFkzUW5PMXh1WEc0dktpcGNiaUFxSUVSbGRHVnliV2x1WlhNZ2QyaGxkR2hsY2lCMGFHVWdjM0JsWTJsbWFXVmtJRlZTVENCcGN5QmhZbk52YkhWMFpWeHVJQ3BjYmlBcUlFQndZWEpoYlNCN2MzUnlhVzVuZlNCMWNtd2dWR2hsSUZWU1RDQjBieUIwWlhOMFhHNGdLaUJBY21WMGRYSnVjeUI3WW05dmJHVmhibjBnVkhKMVpTQnBaaUIwYUdVZ2MzQmxZMmxtYVdWa0lGVlNUQ0JwY3lCaFluTnZiSFYwWlN3Z2IzUm9aWEozYVhObElHWmhiSE5sWEc0Z0tpOWNibTF2WkhWc1pTNWxlSEJ2Y25SeklEMGdablZ1WTNScGIyNGdhWE5CWW5OdmJIVjBaVlZTVENoMWNtd3BJSHRjYmlBZ0x5OGdRU0JWVWt3Z2FYTWdZMjl1YzJsa1pYSmxaQ0JoWW5OdmJIVjBaU0JwWmlCcGRDQmlaV2RwYm5NZ2QybDBhQ0JjSWp4elkyaGxiV1UrT2k4dlhDSWdiM0lnWENJdkwxd2lJQ2h3Y205MGIyTnZiQzF5Wld4aGRHbDJaU0JWVWt3cExseHVJQ0F2THlCU1JrTWdNems0TmlCa1pXWnBibVZ6SUhOamFHVnRaU0J1WVcxbElHRnpJR0VnYzJWeGRXVnVZMlVnYjJZZ1kyaGhjbUZqZEdWeWN5QmlaV2RwYm01cGJtY2dkMmwwYUNCaElHeGxkSFJsY2lCaGJtUWdabTlzYkc5M1pXUmNiaUFnTHk4Z1lua2dZVzU1SUdOdmJXSnBibUYwYVc5dUlHOW1JR3hsZEhSbGNuTXNJR1JwWjJsMGN5d2djR3gxY3l3Z2NHVnlhVzlrTENCdmNpQm9lWEJvWlc0dVhHNGdJSEpsZEhWeWJpQXZYaWhiWVMxNlhWdGhMWHBjWEdSY1hDdGNYQzFjWEM1ZEtqb3BQMXhjTDF4Y0x5OXBMblJsYzNRb2RYSnNLVHRjYm4wN1hHNGlMQ0luZFhObElITjBjbWxqZENjN1hHNWNiblpoY2lCMWRHbHNjeUE5SUhKbGNYVnBjbVVvSnk0dkxpNHZkWFJwYkhNbktUdGNibHh1Ylc5a2RXeGxMbVY0Y0c5eWRITWdQU0FvWEc0Z0lIVjBhV3h6TG1selUzUmhibVJoY21SQ2NtOTNjMlZ5Ulc1MktDa2dQMXh1WEc0Z0lDOHZJRk4wWVc1a1lYSmtJR0p5YjNkelpYSWdaVzUyY3lCb1lYWmxJR1oxYkd3Z2MzVndjRzl5ZENCdlppQjBhR1VnUVZCSmN5QnVaV1ZrWldRZ2RHOGdkR1Z6ZEZ4dUlDQXZMeUIzYUdWMGFHVnlJSFJvWlNCeVpYRjFaWE4wSUZWU1RDQnBjeUJ2WmlCMGFHVWdjMkZ0WlNCdmNtbG5hVzRnWVhNZ1kzVnljbVZ1ZENCc2IyTmhkR2x2Ymk1Y2JpQWdLR1oxYm1OMGFXOXVJSE4wWVc1a1lYSmtRbkp2ZDNObGNrVnVkaWdwSUh0Y2JpQWdJQ0IyWVhJZ2JYTnBaU0E5SUM4b2JYTnBaWHgwY21sa1pXNTBLUzlwTG5SbGMzUW9ibUYyYVdkaGRHOXlMblZ6WlhKQloyVnVkQ2s3WEc0Z0lDQWdkbUZ5SUhWeWJGQmhjbk5wYm1kT2IyUmxJRDBnWkc5amRXMWxiblF1WTNKbFlYUmxSV3hsYldWdWRDZ25ZU2NwTzF4dUlDQWdJSFpoY2lCdmNtbG5hVzVWVWt3N1hHNWNiaUFnSUNBdktpcGNiaUFnSUNBcUlGQmhjbk5sSUdFZ1ZWSk1JSFJ2SUdScGMyTnZkbVZ5SUdsMEozTWdZMjl0Y0c5dVpXNTBjMXh1SUNBZ0lDcGNiaUFnSUNBcUlFQndZWEpoYlNCN1UzUnlhVzVuZlNCMWNtd2dWR2hsSUZWU1RDQjBieUJpWlNCd1lYSnpaV1JjYmlBZ0lDQXFJRUJ5WlhSMWNtNXpJSHRQWW1wbFkzUjlYRzRnSUNBZ0tpOWNiaUFnSUNCbWRXNWpkR2x2YmlCeVpYTnZiSFpsVlZKTUtIVnliQ2tnZTF4dUlDQWdJQ0FnZG1GeUlHaHlaV1lnUFNCMWNtdzdYRzVjYmlBZ0lDQWdJR2xtSUNodGMybGxLU0I3WEc0Z0lDQWdJQ0FnSUM4dklFbEZJRzVsWldSeklHRjBkSEpwWW5WMFpTQnpaWFFnZEhkcFkyVWdkRzhnYm05eWJXRnNhWHBsSUhCeWIzQmxjblJwWlhOY2JpQWdJQ0FnSUNBZ2RYSnNVR0Z5YzJsdVowNXZaR1V1YzJWMFFYUjBjbWxpZFhSbEtDZG9jbVZtSnl3Z2FISmxaaWs3WEc0Z0lDQWdJQ0FnSUdoeVpXWWdQU0IxY214UVlYSnphVzVuVG05a1pTNW9jbVZtTzF4dUlDQWdJQ0FnZlZ4dVhHNGdJQ0FnSUNCMWNteFFZWEp6YVc1blRtOWtaUzV6WlhSQmRIUnlhV0oxZEdVb0oyaHlaV1luTENCb2NtVm1LVHRjYmx4dUlDQWdJQ0FnTHk4Z2RYSnNVR0Z5YzJsdVowNXZaR1VnY0hKdmRtbGtaWE1nZEdobElGVnliRlYwYVd4eklHbHVkR1Z5Wm1GalpTQXRJR2gwZEhBNkx5OTFjbXd1YzNCbFl5NTNhR0YwZDJjdWIzSm5MeU4xY214MWRHbHNjMXh1SUNBZ0lDQWdjbVYwZFhKdUlIdGNiaUFnSUNBZ0lDQWdhSEpsWmpvZ2RYSnNVR0Z5YzJsdVowNXZaR1V1YUhKbFppeGNiaUFnSUNBZ0lDQWdjSEp2ZEc5amIydzZJSFZ5YkZCaGNuTnBibWRPYjJSbExuQnliM1J2WTI5c0lEOGdkWEpzVUdGeWMybHVaMDV2WkdVdWNISnZkRzlqYjJ3dWNtVndiR0ZqWlNndk9pUXZMQ0FuSnlrZ09pQW5KeXhjYmlBZ0lDQWdJQ0FnYUc5emREb2dkWEpzVUdGeWMybHVaMDV2WkdVdWFHOXpkQ3hjYmlBZ0lDQWdJQ0FnYzJWaGNtTm9PaUIxY214UVlYSnphVzVuVG05a1pTNXpaV0Z5WTJnZ1B5QjFjbXhRWVhKemFXNW5UbTlrWlM1elpXRnlZMmd1Y21Wd2JHRmpaU2d2WGx4Y1B5OHNJQ2NuS1NBNklDY25MRnh1SUNBZ0lDQWdJQ0JvWVhOb09pQjFjbXhRWVhKemFXNW5UbTlrWlM1b1lYTm9JRDhnZFhKc1VHRnljMmx1WjA1dlpHVXVhR0Z6YUM1eVpYQnNZV05sS0M5ZUl5OHNJQ2NuS1NBNklDY25MRnh1SUNBZ0lDQWdJQ0JvYjNOMGJtRnRaVG9nZFhKc1VHRnljMmx1WjA1dlpHVXVhRzl6ZEc1aGJXVXNYRzRnSUNBZ0lDQWdJSEJ2Y25RNklIVnliRkJoY25OcGJtZE9iMlJsTG5CdmNuUXNYRzRnSUNBZ0lDQWdJSEJoZEdodVlXMWxPaUFvZFhKc1VHRnljMmx1WjA1dlpHVXVjR0YwYUc1aGJXVXVZMmhoY2tGMEtEQXBJRDA5UFNBbkx5Y3BJRDljYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUhWeWJGQmhjbk5wYm1kT2IyUmxMbkJoZEdodVlXMWxJRHBjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNjdkp5QXJJSFZ5YkZCaGNuTnBibWRPYjJSbExuQmhkR2h1WVcxbFhHNGdJQ0FnSUNCOU8xeHVJQ0FnSUgxY2JseHVJQ0FnSUc5eWFXZHBibFZTVENBOUlISmxjMjlzZG1WVlVrd29kMmx1Wkc5M0xteHZZMkYwYVc5dUxtaHlaV1lwTzF4dVhHNGdJQ0FnTHlvcVhHNGdJQ0FnS2lCRVpYUmxjbTFwYm1VZ2FXWWdZU0JWVWt3Z2MyaGhjbVZ6SUhSb1pTQnpZVzFsSUc5eWFXZHBiaUJoY3lCMGFHVWdZM1Z5Y21WdWRDQnNiMk5oZEdsdmJseHVJQ0FnSUNwY2JpQWdJQ0FxSUVCd1lYSmhiU0I3VTNSeWFXNW5mU0J5WlhGMVpYTjBWVkpNSUZSb1pTQlZVa3dnZEc4Z2RHVnpkRnh1SUNBZ0lDb2dRSEpsZEhWeWJuTWdlMkp2YjJ4bFlXNTlJRlJ5ZFdVZ2FXWWdWVkpNSUhOb1lYSmxjeUIwYUdVZ2MyRnRaU0J2Y21sbmFXNHNJRzkwYUdWeWQybHpaU0JtWVd4elpWeHVJQ0FnSUNvdlhHNGdJQ0FnY21WMGRYSnVJR1oxYm1OMGFXOXVJR2x6VlZKTVUyRnRaVTl5YVdkcGJpaHlaWEYxWlhOMFZWSk1LU0I3WEc0Z0lDQWdJQ0IyWVhJZ2NHRnljMlZrSUQwZ0tIVjBhV3h6TG1selUzUnlhVzVuS0hKbGNYVmxjM1JWVWt3cEtTQS9JSEpsYzI5c2RtVlZVa3dvY21WeGRXVnpkRlZTVENrZ09pQnlaWEYxWlhOMFZWSk1PMXh1SUNBZ0lDQWdjbVYwZFhKdUlDaHdZWEp6WldRdWNISnZkRzlqYjJ3Z1BUMDlJRzl5YVdkcGJsVlNUQzV3Y205MGIyTnZiQ0FtSmx4dUlDQWdJQ0FnSUNBZ0lDQWdjR0Z5YzJWa0xtaHZjM1FnUFQwOUlHOXlhV2RwYmxWU1RDNW9iM04wS1R0Y2JpQWdJQ0I5TzF4dUlDQjlLU2dwSURwY2JseHVJQ0F2THlCT2IyNGdjM1JoYm1SaGNtUWdZbkp2ZDNObGNpQmxiblp6SUNoM1pXSWdkMjl5YTJWeWN5d2djbVZoWTNRdGJtRjBhWFpsS1NCc1lXTnJJRzVsWldSbFpDQnpkWEJ3YjNKMExseHVJQ0FvWm5WdVkzUnBiMjRnYm05dVUzUmhibVJoY21SQ2NtOTNjMlZ5Ulc1MktDa2dlMXh1SUNBZ0lISmxkSFZ5YmlCbWRXNWpkR2x2YmlCcGMxVlNURk5oYldWUGNtbG5hVzRvS1NCN1hHNGdJQ0FnSUNCeVpYUjFjbTRnZEhKMVpUdGNiaUFnSUNCOU8xeHVJQ0I5S1NncFhHNHBPMXh1SWl3aUozVnpaU0J6ZEhKcFkzUW5PMXh1WEc1MllYSWdkWFJwYkhNZ1BTQnlaWEYxYVhKbEtDY3VMaTkxZEdsc2N5Y3BPMXh1WEc1dGIyUjFiR1V1Wlhod2IzSjBjeUE5SUdaMWJtTjBhVzl1SUc1dmNtMWhiR2w2WlVobFlXUmxjazVoYldVb2FHVmhaR1Z5Y3l3Z2JtOXliV0ZzYVhwbFpFNWhiV1VwSUh0Y2JpQWdkWFJwYkhNdVptOXlSV0ZqYUNob1pXRmtaWEp6TENCbWRXNWpkR2x2YmlCd2NtOWpaWE56U0dWaFpHVnlLSFpoYkhWbExDQnVZVzFsS1NCN1hHNGdJQ0FnYVdZZ0tHNWhiV1VnSVQwOUlHNXZjbTFoYkdsNlpXUk9ZVzFsSUNZbUlHNWhiV1V1ZEc5VmNIQmxja05oYzJVb0tTQTlQVDBnYm05eWJXRnNhWHBsWkU1aGJXVXVkRzlWY0hCbGNrTmhjMlVvS1NrZ2UxeHVJQ0FnSUNBZ2FHVmhaR1Z5YzF0dWIzSnRZV3hwZW1Wa1RtRnRaVjBnUFNCMllXeDFaVHRjYmlBZ0lDQWdJR1JsYkdWMFpTQm9aV0ZrWlhKelcyNWhiV1ZkTzF4dUlDQWdJSDFjYmlBZ2ZTazdYRzU5TzF4dUlpd2lKM1Z6WlNCemRISnBZM1FuTzF4dVhHNTJZWElnZFhScGJITWdQU0J5WlhGMWFYSmxLQ2N1THk0dUwzVjBhV3h6SnlrN1hHNWNiaTh2SUVobFlXUmxjbk1nZDJodmMyVWdaSFZ3YkdsallYUmxjeUJoY21VZ2FXZHViM0psWkNCaWVTQnViMlJsWEc0dkx5QmpMbVl1SUdoMGRIQnpPaTh2Ym05a1pXcHpMbTl5Wnk5aGNHa3ZhSFIwY0M1b2RHMXNJMmgwZEhCZmJXVnpjMkZuWlY5b1pXRmtaWEp6WEc1MllYSWdhV2R1YjNKbFJIVndiR2xqWVhSbFQyWWdQU0JiWEc0Z0lDZGhaMlVuTENBbllYVjBhRzl5YVhwaGRHbHZiaWNzSUNkamIyNTBaVzUwTFd4bGJtZDBhQ2NzSUNkamIyNTBaVzUwTFhSNWNHVW5MQ0FuWlhSaFp5Y3NYRzRnSUNkbGVIQnBjbVZ6Snl3Z0oyWnliMjBuTENBbmFHOXpkQ2NzSUNkcFppMXRiMlJwWm1sbFpDMXphVzVqWlNjc0lDZHBaaTExYm0xdlpHbG1hV1ZrTFhOcGJtTmxKeXhjYmlBZ0oyeGhjM1F0Ylc5a2FXWnBaV1FuTENBbmJHOWpZWFJwYjI0bkxDQW5iV0Y0TFdadmNuZGhjbVJ6Snl3Z0ozQnliM2g1TFdGMWRHaHZjbWw2WVhScGIyNG5MRnh1SUNBbmNtVm1aWEpsY2ljc0lDZHlaWFJ5ZVMxaFpuUmxjaWNzSUNkMWMyVnlMV0ZuWlc1MEoxeHVYVHRjYmx4dUx5b3FYRzRnS2lCUVlYSnpaU0JvWldGa1pYSnpJR2x1ZEc4Z1lXNGdiMkpxWldOMFhHNGdLbHh1SUNvZ1lHQmdYRzRnS2lCRVlYUmxPaUJYWldRc0lESTNJRUYxWnlBeU1ERTBJREE0T2pVNE9qUTVJRWROVkZ4dUlDb2dRMjl1ZEdWdWRDMVVlWEJsT2lCaGNIQnNhV05oZEdsdmJpOXFjMjl1WEc0Z0tpQkRiMjV1WldOMGFXOXVPaUJyWldWd0xXRnNhWFpsWEc0Z0tpQlVjbUZ1YzJabGNpMUZibU52WkdsdVp6b2dZMmgxYm10bFpGeHVJQ29nWUdCZ1hHNGdLbHh1SUNvZ1FIQmhjbUZ0SUh0VGRISnBibWQ5SUdobFlXUmxjbk1nU0dWaFpHVnljeUJ1WldWa2FXNW5JSFJ2SUdKbElIQmhjbk5sWkZ4dUlDb2dRSEpsZEhWeWJuTWdlMDlpYW1WamRIMGdTR1ZoWkdWeWN5QndZWEp6WldRZ2FXNTBieUJoYmlCdlltcGxZM1JjYmlBcUwxeHViVzlrZFd4bExtVjRjRzl5ZEhNZ1BTQm1kVzVqZEdsdmJpQndZWEp6WlVobFlXUmxjbk1vYUdWaFpHVnljeWtnZTF4dUlDQjJZWElnY0dGeWMyVmtJRDBnZTMwN1hHNGdJSFpoY2lCclpYazdYRzRnSUhaaGNpQjJZV3c3WEc0Z0lIWmhjaUJwTzF4dVhHNGdJR2xtSUNnaGFHVmhaR1Z5Y3lrZ2V5QnlaWFIxY200Z2NHRnljMlZrT3lCOVhHNWNiaUFnZFhScGJITXVabTl5UldGamFDaG9aV0ZrWlhKekxuTndiR2wwS0NkY1hHNG5LU3dnWm5WdVkzUnBiMjRnY0dGeWMyVnlLR3hwYm1VcElIdGNiaUFnSUNCcElEMGdiR2x1WlM1cGJtUmxlRTltS0NjNkp5azdYRzRnSUNBZ2EyVjVJRDBnZFhScGJITXVkSEpwYlNoc2FXNWxMbk4xWW5OMGNpZ3dMQ0JwS1NrdWRHOU1iM2RsY2tOaGMyVW9LVHRjYmlBZ0lDQjJZV3dnUFNCMWRHbHNjeTUwY21sdEtHeHBibVV1YzNWaWMzUnlLR2tnS3lBeEtTazdYRzVjYmlBZ0lDQnBaaUFvYTJWNUtTQjdYRzRnSUNBZ0lDQnBaaUFvY0dGeWMyVmtXMnRsZVYwZ0ppWWdhV2R1YjNKbFJIVndiR2xqWVhSbFQyWXVhVzVrWlhoUFppaHJaWGtwSUQ0OUlEQXBJSHRjYmlBZ0lDQWdJQ0FnY21WMGRYSnVPMXh1SUNBZ0lDQWdmVnh1SUNBZ0lDQWdhV1lnS0d0bGVTQTlQVDBnSjNObGRDMWpiMjlyYVdVbktTQjdYRzRnSUNBZ0lDQWdJSEJoY25ObFpGdHJaWGxkSUQwZ0tIQmhjbk5sWkZ0clpYbGRJRDhnY0dGeWMyVmtXMnRsZVYwZ09pQmJYU2t1WTI5dVkyRjBLRnQyWVd4ZEtUdGNiaUFnSUNBZ0lIMGdaV3h6WlNCN1hHNGdJQ0FnSUNBZ0lIQmhjbk5sWkZ0clpYbGRJRDBnY0dGeWMyVmtXMnRsZVYwZ1B5QndZWEp6WldSYmEyVjVYU0FySUNjc0lDY2dLeUIyWVd3Z09pQjJZV3c3WEc0Z0lDQWdJQ0I5WEc0Z0lDQWdmVnh1SUNCOUtUdGNibHh1SUNCeVpYUjFjbTRnY0dGeWMyVmtPMXh1ZlR0Y2JpSXNJaWQxYzJVZ2MzUnlhV04wSnp0Y2JseHVMeW9xWEc0Z0tpQlRlVzUwWVdOMGFXTWdjM1ZuWVhJZ1ptOXlJR2x1ZG05cmFXNW5JR0VnWm5WdVkzUnBiMjRnWVc1a0lHVjRjR0Z1WkdsdVp5QmhiaUJoY25KaGVTQm1iM0lnWVhKbmRXMWxiblJ6TGx4dUlDcGNiaUFxSUVOdmJXMXZiaUIxYzJVZ1kyRnpaU0IzYjNWc1pDQmlaU0IwYnlCMWMyVWdZRVoxYm1OMGFXOXVMbkJ5YjNSdmRIbHdaUzVoY0hCc2VXQXVYRzRnS2x4dUlDb2dJR0JnWUdwelhHNGdLaUFnWm5WdVkzUnBiMjRnWmloNExDQjVMQ0I2S1NCN2ZWeHVJQ29nSUhaaGNpQmhjbWR6SUQwZ1d6RXNJRElzSUROZE8xeHVJQ29nSUdZdVlYQndiSGtvYm5Wc2JDd2dZWEpuY3lrN1hHNGdLaUFnWUdCZ1hHNGdLbHh1SUNvZ1YybDBhQ0JnYzNCeVpXRmtZQ0IwYUdseklHVjRZVzF3YkdVZ1kyRnVJR0psSUhKbExYZHlhWFIwWlc0dVhHNGdLbHh1SUNvZ0lHQmdZR3B6WEc0Z0tpQWdjM0J5WldGa0tHWjFibU4wYVc5dUtIZ3NJSGtzSUhvcElIdDlLU2hiTVN3Z01pd2dNMTBwTzF4dUlDb2dJR0JnWUZ4dUlDcGNiaUFxSUVCd1lYSmhiU0I3Um5WdVkzUnBiMjU5SUdOaGJHeGlZV05yWEc0Z0tpQkFjbVYwZFhKdWN5QjdSblZ1WTNScGIyNTlYRzRnS2k5Y2JtMXZaSFZzWlM1bGVIQnZjblJ6SUQwZ1puVnVZM1JwYjI0Z2MzQnlaV0ZrS0dOaGJHeGlZV05yS1NCN1hHNGdJSEpsZEhWeWJpQm1kVzVqZEdsdmJpQjNjbUZ3S0dGeWNpa2dlMXh1SUNBZ0lISmxkSFZ5YmlCallXeHNZbUZqYXk1aGNIQnNlU2h1ZFd4c0xDQmhjbklwTzF4dUlDQjlPMXh1ZlR0Y2JpSXNJaWQxYzJVZ2MzUnlhV04wSnp0Y2JseHVkbUZ5SUdKcGJtUWdQU0J5WlhGMWFYSmxLQ2N1TDJobGJIQmxjbk12WW1sdVpDY3BPMXh1ZG1GeUlHbHpRblZtWm1WeUlEMGdjbVZ4ZFdseVpTZ25hWE10WW5WbVptVnlKeWs3WEc1Y2JpOHFaMnh2WW1Gc0lIUnZVM1J5YVc1bk9uUnlkV1VxTDF4dVhHNHZMeUIxZEdsc2N5QnBjeUJoSUd4cFluSmhjbmtnYjJZZ1oyVnVaWEpwWXlCb1pXeHdaWElnWm5WdVkzUnBiMjV6SUc1dmJpMXpjR1ZqYVdacFl5QjBieUJoZUdsdmMxeHVYRzUyWVhJZ2RHOVRkSEpwYm1jZ1BTQlBZbXBsWTNRdWNISnZkRzkwZVhCbExuUnZVM1J5YVc1bk8xeHVYRzR2S2lwY2JpQXFJRVJsZEdWeWJXbHVaU0JwWmlCaElIWmhiSFZsSUdseklHRnVJRUZ5Y21GNVhHNGdLbHh1SUNvZ1FIQmhjbUZ0SUh0UFltcGxZM1I5SUhaaGJDQlVhR1VnZG1Gc2RXVWdkRzhnZEdWemRGeHVJQ29nUUhKbGRIVnlibk1nZTJKdmIyeGxZVzU5SUZSeWRXVWdhV1lnZG1Gc2RXVWdhWE1nWVc0Z1FYSnlZWGtzSUc5MGFHVnlkMmx6WlNCbVlXeHpaVnh1SUNvdlhHNW1kVzVqZEdsdmJpQnBjMEZ5Y21GNUtIWmhiQ2tnZTF4dUlDQnlaWFIxY200Z2RHOVRkSEpwYm1jdVkyRnNiQ2gyWVd3cElEMDlQU0FuVzI5aWFtVmpkQ0JCY25KaGVWMG5PMXh1ZlZ4dVhHNHZLaXBjYmlBcUlFUmxkR1Z5YldsdVpTQnBaaUJoSUhaaGJIVmxJR2x6SUdGdUlFRnljbUY1UW5WbVptVnlYRzRnS2x4dUlDb2dRSEJoY21GdElIdFBZbXBsWTNSOUlIWmhiQ0JVYUdVZ2RtRnNkV1VnZEc4Z2RHVnpkRnh1SUNvZ1FISmxkSFZ5Ym5NZ2UySnZiMnhsWVc1OUlGUnlkV1VnYVdZZ2RtRnNkV1VnYVhNZ1lXNGdRWEp5WVhsQ2RXWm1aWElzSUc5MGFHVnlkMmx6WlNCbVlXeHpaVnh1SUNvdlhHNW1kVzVqZEdsdmJpQnBjMEZ5Y21GNVFuVm1abVZ5S0haaGJDa2dlMXh1SUNCeVpYUjFjbTRnZEc5VGRISnBibWN1WTJGc2JDaDJZV3dwSUQwOVBTQW5XMjlpYW1WamRDQkJjbkpoZVVKMVptWmxjbDBuTzF4dWZWeHVYRzR2S2lwY2JpQXFJRVJsZEdWeWJXbHVaU0JwWmlCaElIWmhiSFZsSUdseklHRWdSbTl5YlVSaGRHRmNiaUFxWEc0Z0tpQkFjR0Z5WVcwZ2UwOWlhbVZqZEgwZ2RtRnNJRlJvWlNCMllXeDFaU0IwYnlCMFpYTjBYRzRnS2lCQWNtVjBkWEp1Y3lCN1ltOXZiR1ZoYm4wZ1ZISjFaU0JwWmlCMllXeDFaU0JwY3lCaGJpQkdiM0p0UkdGMFlTd2diM1JvWlhKM2FYTmxJR1poYkhObFhHNGdLaTljYm1aMWJtTjBhVzl1SUdselJtOXliVVJoZEdFb2RtRnNLU0I3WEc0Z0lISmxkSFZ5YmlBb2RIbHdaVzltSUVadmNtMUVZWFJoSUNFOVBTQW5kVzVrWldacGJtVmtKeWtnSmlZZ0tIWmhiQ0JwYm5OMFlXNWpaVzltSUVadmNtMUVZWFJoS1R0Y2JuMWNibHh1THlvcVhHNGdLaUJFWlhSbGNtMXBibVVnYVdZZ1lTQjJZV3gxWlNCcGN5QmhJSFpwWlhjZ2IyNGdZVzRnUVhKeVlYbENkV1ptWlhKY2JpQXFYRzRnS2lCQWNHRnlZVzBnZTA5aWFtVmpkSDBnZG1Gc0lGUm9aU0IyWVd4MVpTQjBieUIwWlhOMFhHNGdLaUJBY21WMGRYSnVjeUI3WW05dmJHVmhibjBnVkhKMVpTQnBaaUIyWVd4MVpTQnBjeUJoSUhacFpYY2diMjRnWVc0Z1FYSnlZWGxDZFdabVpYSXNJRzkwYUdWeWQybHpaU0JtWVd4elpWeHVJQ292WEc1bWRXNWpkR2x2YmlCcGMwRnljbUY1UW5WbVptVnlWbWxsZHloMllXd3BJSHRjYmlBZ2RtRnlJSEpsYzNWc2REdGNiaUFnYVdZZ0tDaDBlWEJsYjJZZ1FYSnlZWGxDZFdabVpYSWdJVDA5SUNkMWJtUmxabWx1WldRbktTQW1KaUFvUVhKeVlYbENkV1ptWlhJdWFYTldhV1YzS1NrZ2UxeHVJQ0FnSUhKbGMzVnNkQ0E5SUVGeWNtRjVRblZtWm1WeUxtbHpWbWxsZHloMllXd3BPMXh1SUNCOUlHVnNjMlVnZTF4dUlDQWdJSEpsYzNWc2RDQTlJQ2gyWVd3cElDWW1JQ2gyWVd3dVluVm1abVZ5S1NBbUppQW9kbUZzTG1KMVptWmxjaUJwYm5OMFlXNWpaVzltSUVGeWNtRjVRblZtWm1WeUtUdGNiaUFnZlZ4dUlDQnlaWFIxY200Z2NtVnpkV3gwTzF4dWZWeHVYRzR2S2lwY2JpQXFJRVJsZEdWeWJXbHVaU0JwWmlCaElIWmhiSFZsSUdseklHRWdVM1J5YVc1blhHNGdLbHh1SUNvZ1FIQmhjbUZ0SUh0UFltcGxZM1I5SUhaaGJDQlVhR1VnZG1Gc2RXVWdkRzhnZEdWemRGeHVJQ29nUUhKbGRIVnlibk1nZTJKdmIyeGxZVzU5SUZSeWRXVWdhV1lnZG1Gc2RXVWdhWE1nWVNCVGRISnBibWNzSUc5MGFHVnlkMmx6WlNCbVlXeHpaVnh1SUNvdlhHNW1kVzVqZEdsdmJpQnBjMU4wY21sdVp5aDJZV3dwSUh0Y2JpQWdjbVYwZFhKdUlIUjVjR1Z2WmlCMllXd2dQVDA5SUNkemRISnBibWNuTzF4dWZWeHVYRzR2S2lwY2JpQXFJRVJsZEdWeWJXbHVaU0JwWmlCaElIWmhiSFZsSUdseklHRWdUblZ0WW1WeVhHNGdLbHh1SUNvZ1FIQmhjbUZ0SUh0UFltcGxZM1I5SUhaaGJDQlVhR1VnZG1Gc2RXVWdkRzhnZEdWemRGeHVJQ29nUUhKbGRIVnlibk1nZTJKdmIyeGxZVzU5SUZSeWRXVWdhV1lnZG1Gc2RXVWdhWE1nWVNCT2RXMWlaWElzSUc5MGFHVnlkMmx6WlNCbVlXeHpaVnh1SUNvdlhHNW1kVzVqZEdsdmJpQnBjMDUxYldKbGNpaDJZV3dwSUh0Y2JpQWdjbVYwZFhKdUlIUjVjR1Z2WmlCMllXd2dQVDA5SUNkdWRXMWlaWEluTzF4dWZWeHVYRzR2S2lwY2JpQXFJRVJsZEdWeWJXbHVaU0JwWmlCaElIWmhiSFZsSUdseklIVnVaR1ZtYVc1bFpGeHVJQ3BjYmlBcUlFQndZWEpoYlNCN1QySnFaV04wZlNCMllXd2dWR2hsSUhaaGJIVmxJSFJ2SUhSbGMzUmNiaUFxSUVCeVpYUjFjbTV6SUh0aWIyOXNaV0Z1ZlNCVWNuVmxJR2xtSUhSb1pTQjJZV3gxWlNCcGN5QjFibVJsWm1sdVpXUXNJRzkwYUdWeWQybHpaU0JtWVd4elpWeHVJQ292WEc1bWRXNWpkR2x2YmlCcGMxVnVaR1ZtYVc1bFpDaDJZV3dwSUh0Y2JpQWdjbVYwZFhKdUlIUjVjR1Z2WmlCMllXd2dQVDA5SUNkMWJtUmxabWx1WldRbk8xeHVmVnh1WEc0dktpcGNiaUFxSUVSbGRHVnliV2x1WlNCcFppQmhJSFpoYkhWbElHbHpJR0Z1SUU5aWFtVmpkRnh1SUNwY2JpQXFJRUJ3WVhKaGJTQjdUMkpxWldOMGZTQjJZV3dnVkdobElIWmhiSFZsSUhSdklIUmxjM1JjYmlBcUlFQnlaWFIxY201eklIdGliMjlzWldGdWZTQlVjblZsSUdsbUlIWmhiSFZsSUdseklHRnVJRTlpYW1WamRDd2diM1JvWlhKM2FYTmxJR1poYkhObFhHNGdLaTljYm1aMWJtTjBhVzl1SUdselQySnFaV04wS0haaGJDa2dlMXh1SUNCeVpYUjFjbTRnZG1Gc0lDRTlQU0J1ZFd4c0lDWW1JSFI1Y0dWdlppQjJZV3dnUFQwOUlDZHZZbXBsWTNRbk8xeHVmVnh1WEc0dktpcGNiaUFxSUVSbGRHVnliV2x1WlNCcFppQmhJSFpoYkhWbElHbHpJR0VnUkdGMFpWeHVJQ3BjYmlBcUlFQndZWEpoYlNCN1QySnFaV04wZlNCMllXd2dWR2hsSUhaaGJIVmxJSFJ2SUhSbGMzUmNiaUFxSUVCeVpYUjFjbTV6SUh0aWIyOXNaV0Z1ZlNCVWNuVmxJR2xtSUhaaGJIVmxJR2x6SUdFZ1JHRjBaU3dnYjNSb1pYSjNhWE5sSUdaaGJITmxYRzRnS2k5Y2JtWjFibU4wYVc5dUlHbHpSR0YwWlNoMllXd3BJSHRjYmlBZ2NtVjBkWEp1SUhSdlUzUnlhVzVuTG1OaGJHd29kbUZzS1NBOVBUMGdKMXR2WW1wbFkzUWdSR0YwWlYwbk8xeHVmVnh1WEc0dktpcGNiaUFxSUVSbGRHVnliV2x1WlNCcFppQmhJSFpoYkhWbElHbHpJR0VnUm1sc1pWeHVJQ3BjYmlBcUlFQndZWEpoYlNCN1QySnFaV04wZlNCMllXd2dWR2hsSUhaaGJIVmxJSFJ2SUhSbGMzUmNiaUFxSUVCeVpYUjFjbTV6SUh0aWIyOXNaV0Z1ZlNCVWNuVmxJR2xtSUhaaGJIVmxJR2x6SUdFZ1JtbHNaU3dnYjNSb1pYSjNhWE5sSUdaaGJITmxYRzRnS2k5Y2JtWjFibU4wYVc5dUlHbHpSbWxzWlNoMllXd3BJSHRjYmlBZ2NtVjBkWEp1SUhSdlUzUnlhVzVuTG1OaGJHd29kbUZzS1NBOVBUMGdKMXR2WW1wbFkzUWdSbWxzWlYwbk8xeHVmVnh1WEc0dktpcGNiaUFxSUVSbGRHVnliV2x1WlNCcFppQmhJSFpoYkhWbElHbHpJR0VnUW14dllseHVJQ3BjYmlBcUlFQndZWEpoYlNCN1QySnFaV04wZlNCMllXd2dWR2hsSUhaaGJIVmxJSFJ2SUhSbGMzUmNiaUFxSUVCeVpYUjFjbTV6SUh0aWIyOXNaV0Z1ZlNCVWNuVmxJR2xtSUhaaGJIVmxJR2x6SUdFZ1FteHZZaXdnYjNSb1pYSjNhWE5sSUdaaGJITmxYRzRnS2k5Y2JtWjFibU4wYVc5dUlHbHpRbXh2WWloMllXd3BJSHRjYmlBZ2NtVjBkWEp1SUhSdlUzUnlhVzVuTG1OaGJHd29kbUZzS1NBOVBUMGdKMXR2WW1wbFkzUWdRbXh2WWwwbk8xeHVmVnh1WEc0dktpcGNiaUFxSUVSbGRHVnliV2x1WlNCcFppQmhJSFpoYkhWbElHbHpJR0VnUm5WdVkzUnBiMjVjYmlBcVhHNGdLaUJBY0dGeVlXMGdlMDlpYW1WamRIMGdkbUZzSUZSb1pTQjJZV3gxWlNCMGJ5QjBaWE4wWEc0Z0tpQkFjbVYwZFhKdWN5QjdZbTl2YkdWaGJuMGdWSEoxWlNCcFppQjJZV3gxWlNCcGN5QmhJRVoxYm1OMGFXOXVMQ0J2ZEdobGNuZHBjMlVnWm1Gc2MyVmNiaUFxTDF4dVpuVnVZM1JwYjI0Z2FYTkdkVzVqZEdsdmJpaDJZV3dwSUh0Y2JpQWdjbVYwZFhKdUlIUnZVM1J5YVc1bkxtTmhiR3dvZG1Gc0tTQTlQVDBnSjF0dlltcGxZM1FnUm5WdVkzUnBiMjVkSnp0Y2JuMWNibHh1THlvcVhHNGdLaUJFWlhSbGNtMXBibVVnYVdZZ1lTQjJZV3gxWlNCcGN5QmhJRk4wY21WaGJWeHVJQ3BjYmlBcUlFQndZWEpoYlNCN1QySnFaV04wZlNCMllXd2dWR2hsSUhaaGJIVmxJSFJ2SUhSbGMzUmNiaUFxSUVCeVpYUjFjbTV6SUh0aWIyOXNaV0Z1ZlNCVWNuVmxJR2xtSUhaaGJIVmxJR2x6SUdFZ1UzUnlaV0Z0TENCdmRHaGxjbmRwYzJVZ1ptRnNjMlZjYmlBcUwxeHVablZ1WTNScGIyNGdhWE5UZEhKbFlXMG9kbUZzS1NCN1hHNGdJSEpsZEhWeWJpQnBjMDlpYW1WamRDaDJZV3dwSUNZbUlHbHpSblZ1WTNScGIyNG9kbUZzTG5CcGNHVXBPMXh1ZlZ4dVhHNHZLaXBjYmlBcUlFUmxkR1Z5YldsdVpTQnBaaUJoSUhaaGJIVmxJR2x6SUdFZ1ZWSk1VMlZoY21Ob1VHRnlZVzF6SUc5aWFtVmpkRnh1SUNwY2JpQXFJRUJ3WVhKaGJTQjdUMkpxWldOMGZTQjJZV3dnVkdobElIWmhiSFZsSUhSdklIUmxjM1JjYmlBcUlFQnlaWFIxY201eklIdGliMjlzWldGdWZTQlVjblZsSUdsbUlIWmhiSFZsSUdseklHRWdWVkpNVTJWaGNtTm9VR0Z5WVcxeklHOWlhbVZqZEN3Z2IzUm9aWEozYVhObElHWmhiSE5sWEc0Z0tpOWNibVoxYm1OMGFXOXVJR2x6VlZKTVUyVmhjbU5vVUdGeVlXMXpLSFpoYkNrZ2UxeHVJQ0J5WlhSMWNtNGdkSGx3Wlc5bUlGVlNURk5sWVhKamFGQmhjbUZ0Y3lBaFBUMGdKM1Z1WkdWbWFXNWxaQ2NnSmlZZ2RtRnNJR2x1YzNSaGJtTmxiMllnVlZKTVUyVmhjbU5vVUdGeVlXMXpPMXh1ZlZ4dVhHNHZLaXBjYmlBcUlGUnlhVzBnWlhoalpYTnpJSGRvYVhSbGMzQmhZMlVnYjJabUlIUm9aU0JpWldkcGJtNXBibWNnWVc1a0lHVnVaQ0J2WmlCaElITjBjbWx1WjF4dUlDcGNiaUFxSUVCd1lYSmhiU0I3VTNSeWFXNW5mU0J6ZEhJZ1ZHaGxJRk4wY21sdVp5QjBieUIwY21sdFhHNGdLaUJBY21WMGRYSnVjeUI3VTNSeWFXNW5mU0JVYUdVZ1UzUnlhVzVuSUdaeVpXVmtJRzltSUdWNFkyVnpjeUIzYUdsMFpYTndZV05sWEc0Z0tpOWNibVoxYm1OMGFXOXVJSFJ5YVcwb2MzUnlLU0I3WEc0Z0lISmxkSFZ5YmlCemRISXVjbVZ3YkdGalpTZ3ZYbHhjY3lvdkxDQW5KeWt1Y21Wd2JHRmpaU2d2WEZ4ektpUXZMQ0FuSnlrN1hHNTlYRzVjYmk4cUtseHVJQ29nUkdWMFpYSnRhVzVsSUdsbUlIZGxKM0psSUhKMWJtNXBibWNnYVc0Z1lTQnpkR0Z1WkdGeVpDQmljbTkzYzJWeUlHVnVkbWx5YjI1dFpXNTBYRzRnS2x4dUlDb2dWR2hwY3lCaGJHeHZkM01nWVhocGIzTWdkRzhnY25WdUlHbHVJR0VnZDJWaUlIZHZjbXRsY2l3Z1lXNWtJSEpsWVdOMExXNWhkR2wyWlM1Y2JpQXFJRUp2ZEdnZ1pXNTJhWEp2Ym0xbGJuUnpJSE4xY0hCdmNuUWdXRTFNU0hSMGNGSmxjWFZsYzNRc0lHSjFkQ0J1YjNRZ1puVnNiSGtnYzNSaGJtUmhjbVFnWjJ4dlltRnNjeTVjYmlBcVhHNGdLaUIzWldJZ2QyOXlhMlZ5Y3pwY2JpQXFJQ0IwZVhCbGIyWWdkMmx1Wkc5M0lDMCtJSFZ1WkdWbWFXNWxaRnh1SUNvZ0lIUjVjR1Z2WmlCa2IyTjFiV1Z1ZENBdFBpQjFibVJsWm1sdVpXUmNiaUFxWEc0Z0tpQnlaV0ZqZEMxdVlYUnBkbVU2WEc0Z0tpQWdibUYyYVdkaGRHOXlMbkJ5YjJSMVkzUWdMVDRnSjFKbFlXTjBUbUYwYVhabEoxeHVJQ292WEc1bWRXNWpkR2x2YmlCcGMxTjBZVzVrWVhKa1FuSnZkM05sY2tWdWRpZ3BJSHRjYmlBZ2FXWWdLSFI1Y0dWdlppQnVZWFpwWjJGMGIzSWdJVDA5SUNkMWJtUmxabWx1WldRbklDWW1JRzVoZG1sbllYUnZjaTV3Y205a2RXTjBJRDA5UFNBblVtVmhZM1JPWVhScGRtVW5LU0I3WEc0Z0lDQWdjbVYwZFhKdUlHWmhiSE5sTzF4dUlDQjlYRzRnSUhKbGRIVnliaUFvWEc0Z0lDQWdkSGx3Wlc5bUlIZHBibVJ2ZHlBaFBUMGdKM1Z1WkdWbWFXNWxaQ2NnSmlaY2JpQWdJQ0IwZVhCbGIyWWdaRzlqZFcxbGJuUWdJVDA5SUNkMWJtUmxabWx1WldRblhHNGdJQ2s3WEc1OVhHNWNiaThxS2x4dUlDb2dTWFJsY21GMFpTQnZkbVZ5SUdGdUlFRnljbUY1SUc5eUlHRnVJRTlpYW1WamRDQnBiblp2YTJsdVp5QmhJR1oxYm1OMGFXOXVJR1p2Y2lCbFlXTm9JR2wwWlcwdVhHNGdLbHh1SUNvZ1NXWWdZRzlpYW1BZ2FYTWdZVzRnUVhKeVlYa2dZMkZzYkdKaFkyc2dkMmxzYkNCaVpTQmpZV3hzWldRZ2NHRnpjMmx1WjF4dUlDb2dkR2hsSUhaaGJIVmxMQ0JwYm1SbGVDd2dZVzVrSUdOdmJYQnNaWFJsSUdGeWNtRjVJR1p2Y2lCbFlXTm9JR2wwWlcwdVhHNGdLbHh1SUNvZ1NXWWdKMjlpYWljZ2FYTWdZVzRnVDJKcVpXTjBJR05oYkd4aVlXTnJJSGRwYkd3Z1ltVWdZMkZzYkdWa0lIQmhjM05wYm1kY2JpQXFJSFJvWlNCMllXeDFaU3dnYTJWNUxDQmhibVFnWTI5dGNHeGxkR1VnYjJKcVpXTjBJR1p2Y2lCbFlXTm9JSEJ5YjNCbGNuUjVMbHh1SUNwY2JpQXFJRUJ3WVhKaGJTQjdUMkpxWldOMGZFRnljbUY1ZlNCdlltb2dWR2hsSUc5aWFtVmpkQ0IwYnlCcGRHVnlZWFJsWEc0Z0tpQkFjR0Z5WVcwZ2UwWjFibU4wYVc5dWZTQm1iaUJVYUdVZ1kyRnNiR0poWTJzZ2RHOGdhVzUyYjJ0bElHWnZjaUJsWVdOb0lHbDBaVzFjYmlBcUwxeHVablZ1WTNScGIyNGdabTl5UldGamFDaHZZbW9zSUdadUtTQjdYRzRnSUM4dklFUnZiaWQwSUdKdmRHaGxjaUJwWmlCdWJ5QjJZV3gxWlNCd2NtOTJhV1JsWkZ4dUlDQnBaaUFvYjJKcUlEMDlQU0J1ZFd4c0lIeDhJSFI1Y0dWdlppQnZZbW9nUFQwOUlDZDFibVJsWm1sdVpXUW5LU0I3WEc0Z0lDQWdjbVYwZFhKdU8xeHVJQ0I5WEc1Y2JpQWdMeThnUm05eVkyVWdZVzRnWVhKeVlYa2dhV1lnYm05MElHRnNjbVZoWkhrZ2MyOXRaWFJvYVc1bklHbDBaWEpoWW14bFhHNGdJR2xtSUNoMGVYQmxiMllnYjJKcUlDRTlQU0FuYjJKcVpXTjBKeWtnZTF4dUlDQWdJQzhxWlhOc2FXNTBJRzV2TFhCaGNtRnRMWEpsWVhOemFXZHVPakFxTDF4dUlDQWdJRzlpYWlBOUlGdHZZbXBkTzF4dUlDQjlYRzVjYmlBZ2FXWWdLR2x6UVhKeVlYa29iMkpxS1NrZ2UxeHVJQ0FnSUM4dklFbDBaWEpoZEdVZ2IzWmxjaUJoY25KaGVTQjJZV3gxWlhOY2JpQWdJQ0JtYjNJZ0tIWmhjaUJwSUQwZ01Dd2diQ0E5SUc5aWFpNXNaVzVuZEdnN0lHa2dQQ0JzT3lCcEt5c3BJSHRjYmlBZ0lDQWdJR1p1TG1OaGJHd29iblZzYkN3Z2IySnFXMmxkTENCcExDQnZZbW9wTzF4dUlDQWdJSDFjYmlBZ2ZTQmxiSE5sSUh0Y2JpQWdJQ0F2THlCSmRHVnlZWFJsSUc5MlpYSWdiMkpxWldOMElHdGxlWE5jYmlBZ0lDQm1iM0lnS0haaGNpQnJaWGtnYVc0Z2IySnFLU0I3WEc0Z0lDQWdJQ0JwWmlBb1QySnFaV04wTG5CeWIzUnZkSGx3WlM1b1lYTlBkMjVRY205d1pYSjBlUzVqWVd4c0tHOWlhaXdnYTJWNUtTa2dlMXh1SUNBZ0lDQWdJQ0JtYmk1allXeHNLRzUxYkd3c0lHOWlhbHRyWlhsZExDQnJaWGtzSUc5aWFpazdYRzRnSUNBZ0lDQjlYRzRnSUNBZ2ZWeHVJQ0I5WEc1OVhHNWNiaThxS2x4dUlDb2dRV05qWlhCMGN5QjJZWEpoY21keklHVjRjR1ZqZEdsdVp5QmxZV05vSUdGeVozVnRaVzUwSUhSdklHSmxJR0Z1SUc5aWFtVmpkQ3dnZEdobGJseHVJQ29nYVcxdGRYUmhZbXg1SUcxbGNtZGxjeUIwYUdVZ2NISnZjR1Z5ZEdsbGN5QnZaaUJsWVdOb0lHOWlhbVZqZENCaGJtUWdjbVYwZFhKdWN5QnlaWE4xYkhRdVhHNGdLbHh1SUNvZ1YyaGxiaUJ0ZFd4MGFYQnNaU0J2WW1wbFkzUnpJR052Ym5SaGFXNGdkR2hsSUhOaGJXVWdhMlY1SUhSb1pTQnNZWFJsY2lCdlltcGxZM1FnYVc1Y2JpQXFJSFJvWlNCaGNtZDFiV1Z1ZEhNZ2JHbHpkQ0IzYVd4c0lIUmhhMlVnY0hKbFkyVmtaVzVqWlM1Y2JpQXFYRzRnS2lCRmVHRnRjR3hsT2x4dUlDcGNiaUFxSUdCZ1lHcHpYRzRnS2lCMllYSWdjbVZ6ZFd4MElEMGdiV1Z5WjJVb2UyWnZiem9nTVRJemZTd2dlMlp2YnpvZ05EVTJmU2s3WEc0Z0tpQmpiMjV6YjJ4bExteHZaeWh5WlhOMWJIUXVabTl2S1RzZ0x5OGdiM1YwY0hWMGN5QTBOVFpjYmlBcUlHQmdZRnh1SUNwY2JpQXFJRUJ3WVhKaGJTQjdUMkpxWldOMGZTQnZZbW94SUU5aWFtVmpkQ0IwYnlCdFpYSm5aVnh1SUNvZ1FISmxkSFZ5Ym5NZ2UwOWlhbVZqZEgwZ1VtVnpkV3gwSUc5bUlHRnNiQ0J0WlhKblpTQndjbTl3WlhKMGFXVnpYRzRnS2k5Y2JtWjFibU4wYVc5dUlHMWxjbWRsS0M4cUlHOWlhakVzSUc5aWFqSXNJRzlpYWpNc0lDNHVMaUFxTHlrZ2UxeHVJQ0IyWVhJZ2NtVnpkV3gwSUQwZ2UzMDdYRzRnSUdaMWJtTjBhVzl1SUdGemMybG5ibFpoYkhWbEtIWmhiQ3dnYTJWNUtTQjdYRzRnSUNBZ2FXWWdLSFI1Y0dWdlppQnlaWE4xYkhSYmEyVjVYU0E5UFQwZ0oyOWlhbVZqZENjZ0ppWWdkSGx3Wlc5bUlIWmhiQ0E5UFQwZ0oyOWlhbVZqZENjcElIdGNiaUFnSUNBZ0lISmxjM1ZzZEZ0clpYbGRJRDBnYldWeVoyVW9jbVZ6ZFd4MFcydGxlVjBzSUhaaGJDazdYRzRnSUNBZ2ZTQmxiSE5sSUh0Y2JpQWdJQ0FnSUhKbGMzVnNkRnRyWlhsZElEMGdkbUZzTzF4dUlDQWdJSDFjYmlBZ2ZWeHVYRzRnSUdadmNpQW9kbUZ5SUdrZ1BTQXdMQ0JzSUQwZ1lYSm5kVzFsYm5SekxteGxibWQwYURzZ2FTQThJR3c3SUdrckt5a2dlMXh1SUNBZ0lHWnZja1ZoWTJnb1lYSm5kVzFsYm5SelcybGRMQ0JoYzNOcFoyNVdZV3gxWlNrN1hHNGdJSDFjYmlBZ2NtVjBkWEp1SUhKbGMzVnNkRHRjYm4xY2JseHVMeW9xWEc0Z0tpQkZlSFJsYm1SeklHOWlhbVZqZENCaElHSjVJRzExZEdGaWJIa2dZV1JrYVc1bklIUnZJR2wwSUhSb1pTQndjbTl3WlhKMGFXVnpJRzltSUc5aWFtVmpkQ0JpTGx4dUlDcGNiaUFxSUVCd1lYSmhiU0I3VDJKcVpXTjBmU0JoSUZSb1pTQnZZbXBsWTNRZ2RHOGdZbVVnWlhoMFpXNWtaV1JjYmlBcUlFQndZWEpoYlNCN1QySnFaV04wZlNCaUlGUm9aU0J2WW1wbFkzUWdkRzhnWTI5d2VTQndjbTl3WlhKMGFXVnpJR1p5YjIxY2JpQXFJRUJ3WVhKaGJTQjdUMkpxWldOMGZTQjBhR2x6UVhKbklGUm9aU0J2WW1wbFkzUWdkRzhnWW1sdVpDQm1kVzVqZEdsdmJpQjBiMXh1SUNvZ1FISmxkSFZ5YmlCN1QySnFaV04wZlNCVWFHVWdjbVZ6ZFd4MGFXNW5JSFpoYkhWbElHOW1JRzlpYW1WamRDQmhYRzRnS2k5Y2JtWjFibU4wYVc5dUlHVjRkR1Z1WkNoaExDQmlMQ0IwYUdselFYSm5LU0I3WEc0Z0lHWnZja1ZoWTJnb1lpd2dablZ1WTNScGIyNGdZWE56YVdkdVZtRnNkV1VvZG1Gc0xDQnJaWGtwSUh0Y2JpQWdJQ0JwWmlBb2RHaHBjMEZ5WnlBbUppQjBlWEJsYjJZZ2RtRnNJRDA5UFNBblpuVnVZM1JwYjI0bktTQjdYRzRnSUNBZ0lDQmhXMnRsZVYwZ1BTQmlhVzVrS0haaGJDd2dkR2hwYzBGeVp5azdYRzRnSUNBZ2ZTQmxiSE5sSUh0Y2JpQWdJQ0FnSUdGYmEyVjVYU0E5SUhaaGJEdGNiaUFnSUNCOVhHNGdJSDBwTzF4dUlDQnlaWFIxY200Z1lUdGNibjFjYmx4dWJXOWtkV3hsTG1WNGNHOXlkSE1nUFNCN1hHNGdJR2x6UVhKeVlYazZJR2x6UVhKeVlYa3NYRzRnSUdselFYSnlZWGxDZFdabVpYSTZJR2x6UVhKeVlYbENkV1ptWlhJc1hHNGdJR2x6UW5WbVptVnlPaUJwYzBKMVptWmxjaXhjYmlBZ2FYTkdiM0p0UkdGMFlUb2dhWE5HYjNKdFJHRjBZU3hjYmlBZ2FYTkJjbkpoZVVKMVptWmxjbFpwWlhjNklHbHpRWEp5WVhsQ2RXWm1aWEpXYVdWM0xGeHVJQ0JwYzFOMGNtbHVaem9nYVhOVGRISnBibWNzWEc0Z0lHbHpUblZ0WW1WeU9pQnBjMDUxYldKbGNpeGNiaUFnYVhOUFltcGxZM1E2SUdselQySnFaV04wTEZ4dUlDQnBjMVZ1WkdWbWFXNWxaRG9nYVhOVmJtUmxabWx1WldRc1hHNGdJR2x6UkdGMFpUb2dhWE5FWVhSbExGeHVJQ0JwYzBacGJHVTZJR2x6Um1sc1pTeGNiaUFnYVhOQ2JHOWlPaUJwYzBKc2IySXNYRzRnSUdselJuVnVZM1JwYjI0NklHbHpSblZ1WTNScGIyNHNYRzRnSUdselUzUnlaV0Z0T2lCcGMxTjBjbVZoYlN4Y2JpQWdhWE5WVWt4VFpXRnlZMmhRWVhKaGJYTTZJR2x6VlZKTVUyVmhjbU5vVUdGeVlXMXpMRnh1SUNCcGMxTjBZVzVrWVhKa1FuSnZkM05sY2tWdWRqb2dhWE5UZEdGdVpHRnlaRUp5YjNkelpYSkZibllzWEc0Z0lHWnZja1ZoWTJnNklHWnZja1ZoWTJnc1hHNGdJRzFsY21kbE9pQnRaWEpuWlN4Y2JpQWdaWGgwWlc1a09pQmxlSFJsYm1Rc1hHNGdJSFJ5YVcwNklIUnlhVzFjYm4wN1hHNGlMQ0l2S2lGY2JpQXFJRVJsZEdWeWJXbHVaU0JwWmlCaGJpQnZZbXBsWTNRZ2FYTWdZU0JDZFdabVpYSmNiaUFxWEc0Z0tpQkFZWFYwYUc5eUlDQWdSbVZ5YjNOeklFRmliM1ZyYUdGa2FXcGxhQ0E4YUhSMGNITTZMeTltWlhKdmMzTXViM0puUGx4dUlDb2dRR3hwWTJWdWMyVWdJRTFKVkZ4dUlDb3ZYRzVjYmk4dklGUm9aU0JmYVhOQ2RXWm1aWElnWTJobFkyc2dhWE1nWm05eUlGTmhabUZ5YVNBMUxUY2djM1Z3Y0c5eWRDd2dZbVZqWVhWelpTQnBkQ2R6SUcxcGMzTnBibWRjYmk4dklFOWlhbVZqZEM1d2NtOTBiM1I1Y0dVdVkyOXVjM1J5ZFdOMGIzSXVJRkpsYlc5MlpTQjBhR2x6SUdWMlpXNTBkV0ZzYkhsY2JtMXZaSFZzWlM1bGVIQnZjblJ6SUQwZ1puVnVZM1JwYjI0Z0tHOWlhaWtnZTF4dUlDQnlaWFIxY200Z2IySnFJQ0U5SUc1MWJHd2dKaVlnS0dselFuVm1abVZ5S0c5aWFpa2dmSHdnYVhOVGJHOTNRblZtWm1WeUtHOWlhaWtnZkh3Z0lTRnZZbW91WDJselFuVm1abVZ5S1Z4dWZWeHVYRzVtZFc1amRHbHZiaUJwYzBKMVptWmxjaUFvYjJKcUtTQjdYRzRnSUhKbGRIVnliaUFoSVc5aWFpNWpiMjV6ZEhKMVkzUnZjaUFtSmlCMGVYQmxiMllnYjJKcUxtTnZibk4wY25WamRHOXlMbWx6UW5WbVptVnlJRDA5UFNBblpuVnVZM1JwYjI0bklDWW1JRzlpYWk1amIyNXpkSEoxWTNSdmNpNXBjMEoxWm1abGNpaHZZbW9wWEc1OVhHNWNiaTh2SUVadmNpQk9iMlJsSUhZd0xqRXdJSE4xY0hCdmNuUXVJRkpsYlc5MlpTQjBhR2x6SUdWMlpXNTBkV0ZzYkhrdVhHNW1kVzVqZEdsdmJpQnBjMU5zYjNkQ2RXWm1aWElnS0c5aWFpa2dlMXh1SUNCeVpYUjFjbTRnZEhsd1pXOW1JRzlpYWk1eVpXRmtSbXh2WVhSTVJTQTlQVDBnSjJaMWJtTjBhVzl1SnlBbUppQjBlWEJsYjJZZ2IySnFMbk5zYVdObElEMDlQU0FuWm5WdVkzUnBiMjRuSUNZbUlHbHpRblZtWm1WeUtHOWlhaTV6YkdsalpTZ3dMQ0F3S1NsY2JuMWNiaUlzSWk4dklITm9hVzBnWm05eUlIVnphVzVuSUhCeWIyTmxjM01nYVc0Z1luSnZkM05sY2x4dWRtRnlJSEJ5YjJObGMzTWdQU0J0YjJSMWJHVXVaWGh3YjNKMGN5QTlJSHQ5TzF4dVhHNHZMeUJqWVdOb1pXUWdabkp2YlNCM2FHRjBaWFpsY2lCbmJHOWlZV3dnYVhNZ2NISmxjMlZ1ZENCemJ5QjBhR0YwSUhSbGMzUWdjblZ1Ym1WeWN5QjBhR0YwSUhOMGRXSWdhWFJjYmk4dklHUnZiaWQwSUdKeVpXRnJJSFJvYVc1bmN5NGdJRUoxZENCM1pTQnVaV1ZrSUhSdklIZHlZWEFnYVhRZ2FXNGdZU0IwY25rZ1kyRjBZMmdnYVc0Z1kyRnpaU0JwZENCcGMxeHVMeThnZDNKaGNIQmxaQ0JwYmlCemRISnBZM1FnYlc5a1pTQmpiMlJsSUhkb2FXTm9JR1J2WlhOdUozUWdaR1ZtYVc1bElHRnVlU0JuYkc5aVlXeHpMaUFnU1hRbmN5QnBibk5wWkdVZ1lWeHVMeThnWm5WdVkzUnBiMjRnWW1WallYVnpaU0IwY25rdlkyRjBZMmhsY3lCa1pXOXdkR2x0YVhwbElHbHVJR05sY25SaGFXNGdaVzVuYVc1bGN5NWNibHh1ZG1GeUlHTmhZMmhsWkZObGRGUnBiV1Z2ZFhRN1hHNTJZWElnWTJGamFHVmtRMnhsWVhKVWFXMWxiM1YwTzF4dVhHNW1kVzVqZEdsdmJpQmtaV1poZFd4MFUyVjBWR2x0YjNWMEtDa2dlMXh1SUNBZ0lIUm9jbTkzSUc1bGR5QkZjbkp2Y2lnbmMyVjBWR2x0Wlc5MWRDQm9ZWE1nYm05MElHSmxaVzRnWkdWbWFXNWxaQ2NwTzF4dWZWeHVablZ1WTNScGIyNGdaR1ZtWVhWc2RFTnNaV0Z5VkdsdFpXOTFkQ0FvS1NCN1hHNGdJQ0FnZEdoeWIzY2dibVYzSUVWeWNtOXlLQ2RqYkdWaGNsUnBiV1Z2ZFhRZ2FHRnpJRzV2ZENCaVpXVnVJR1JsWm1sdVpXUW5LVHRjYm4xY2JpaG1kVzVqZEdsdmJpQW9LU0I3WEc0Z0lDQWdkSEo1SUh0Y2JpQWdJQ0FnSUNBZ2FXWWdLSFI1Y0dWdlppQnpaWFJVYVcxbGIzVjBJRDA5UFNBblpuVnVZM1JwYjI0bktTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCallXTm9aV1JUWlhSVWFXMWxiM1YwSUQwZ2MyVjBWR2x0Wlc5MWREdGNiaUFnSUNBZ0lDQWdmU0JsYkhObElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUdOaFkyaGxaRk5sZEZScGJXVnZkWFFnUFNCa1pXWmhkV3gwVTJWMFZHbHRiM1YwTzF4dUlDQWdJQ0FnSUNCOVhHNGdJQ0FnZlNCallYUmphQ0FvWlNrZ2UxeHVJQ0FnSUNBZ0lDQmpZV05vWldSVFpYUlVhVzFsYjNWMElEMGdaR1ZtWVhWc2RGTmxkRlJwYlc5MWREdGNiaUFnSUNCOVhHNGdJQ0FnZEhKNUlIdGNiaUFnSUNBZ0lDQWdhV1lnS0hSNWNHVnZaaUJqYkdWaGNsUnBiV1Z2ZFhRZ1BUMDlJQ2RtZFc1amRHbHZiaWNwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJR05oWTJobFpFTnNaV0Z5VkdsdFpXOTFkQ0E5SUdOc1pXRnlWR2x0Wlc5MWREdGNiaUFnSUNBZ0lDQWdmU0JsYkhObElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUdOaFkyaGxaRU5zWldGeVZHbHRaVzkxZENBOUlHUmxabUYxYkhSRGJHVmhjbFJwYldWdmRYUTdYRzRnSUNBZ0lDQWdJSDFjYmlBZ0lDQjlJR05oZEdOb0lDaGxLU0I3WEc0Z0lDQWdJQ0FnSUdOaFkyaGxaRU5zWldGeVZHbHRaVzkxZENBOUlHUmxabUYxYkhSRGJHVmhjbFJwYldWdmRYUTdYRzRnSUNBZ2ZWeHVmU0FvS1NsY2JtWjFibU4wYVc5dUlISjFibFJwYldWdmRYUW9ablZ1S1NCN1hHNGdJQ0FnYVdZZ0tHTmhZMmhsWkZObGRGUnBiV1Z2ZFhRZ1BUMDlJSE5sZEZScGJXVnZkWFFwSUh0Y2JpQWdJQ0FnSUNBZ0x5OXViM0p0WVd3Z1pXNTJhWEp2YldWdWRITWdhVzRnYzJGdVpTQnphWFIxWVhScGIyNXpYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQnpaWFJVYVcxbGIzVjBLR1oxYml3Z01DazdYRzRnSUNBZ2ZWeHVJQ0FnSUM4dklHbG1JSE5sZEZScGJXVnZkWFFnZDJGemJpZDBJR0YyWVdsc1lXSnNaU0JpZFhRZ2QyRnpJR3hoZEhSbGNpQmtaV1pwYm1Wa1hHNGdJQ0FnYVdZZ0tDaGpZV05vWldSVFpYUlVhVzFsYjNWMElEMDlQU0JrWldaaGRXeDBVMlYwVkdsdGIzVjBJSHg4SUNGallXTm9aV1JUWlhSVWFXMWxiM1YwS1NBbUppQnpaWFJVYVcxbGIzVjBLU0I3WEc0Z0lDQWdJQ0FnSUdOaFkyaGxaRk5sZEZScGJXVnZkWFFnUFNCelpYUlVhVzFsYjNWME8xeHVJQ0FnSUNBZ0lDQnlaWFIxY200Z2MyVjBWR2x0Wlc5MWRDaG1kVzRzSURBcE8xeHVJQ0FnSUgxY2JpQWdJQ0IwY25rZ2UxeHVJQ0FnSUNBZ0lDQXZMeUIzYUdWdUlIZG9aVzRnYzI5dFpXSnZaSGtnYUdGeklITmpjbVYzWldRZ2QybDBhQ0J6WlhSVWFXMWxiM1YwSUdKMWRDQnVieUJKTGtVdUlHMWhaR1J1WlhOelhHNGdJQ0FnSUNBZ0lISmxkSFZ5YmlCallXTm9aV1JUWlhSVWFXMWxiM1YwS0daMWJpd2dNQ2s3WEc0Z0lDQWdmU0JqWVhSamFDaGxLWHRjYmlBZ0lDQWdJQ0FnZEhKNUlIdGNiaUFnSUNBZ0lDQWdJQ0FnSUM4dklGZG9aVzRnZDJVZ1lYSmxJR2x1SUVrdVJTNGdZblYwSUhSb1pTQnpZM0pwY0hRZ2FHRnpJR0psWlc0Z1pYWmhiR1ZrSUhOdklFa3VSUzRnWkc5bGMyNG5kQ0IwY25WemRDQjBhR1VnWjJ4dlltRnNJRzlpYW1WamRDQjNhR1Z1SUdOaGJHeGxaQ0J1YjNKdFlXeHNlVnh1SUNBZ0lDQWdJQ0FnSUNBZ2NtVjBkWEp1SUdOaFkyaGxaRk5sZEZScGJXVnZkWFF1WTJGc2JDaHVkV3hzTENCbWRXNHNJREFwTzF4dUlDQWdJQ0FnSUNCOUlHTmhkR05vS0dVcGUxeHVJQ0FnSUNBZ0lDQWdJQ0FnTHk4Z2MyRnRaU0JoY3lCaFltOTJaU0JpZFhRZ2QyaGxiaUJwZENkeklHRWdkbVZ5YzJsdmJpQnZaaUJKTGtVdUlIUm9ZWFFnYlhWemRDQm9ZWFpsSUhSb1pTQm5iRzlpWVd3Z2IySnFaV04wSUdadmNpQW5kR2hwY3ljc0lHaHZjR1oxYkd4NUlHOTFjaUJqYjI1MFpYaDBJR052Y25KbFkzUWdiM1JvWlhKM2FYTmxJR2wwSUhkcGJHd2dkR2h5YjNjZ1lTQm5iRzlpWVd3Z1pYSnliM0pjYmlBZ0lDQWdJQ0FnSUNBZ0lISmxkSFZ5YmlCallXTm9aV1JUWlhSVWFXMWxiM1YwTG1OaGJHd29kR2hwY3l3Z1puVnVMQ0F3S1R0Y2JpQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUgxY2JseHVYRzU5WEc1bWRXNWpkR2x2YmlCeWRXNURiR1ZoY2xScGJXVnZkWFFvYldGeWEyVnlLU0I3WEc0Z0lDQWdhV1lnS0dOaFkyaGxaRU5zWldGeVZHbHRaVzkxZENBOVBUMGdZMnhsWVhKVWFXMWxiM1YwS1NCN1hHNGdJQ0FnSUNBZ0lDOHZibTl5YldGc0lHVnVkbWx5YjIxbGJuUnpJR2x1SUhOaGJtVWdjMmwwZFdGMGFXOXVjMXh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdZMnhsWVhKVWFXMWxiM1YwS0cxaGNtdGxjaWs3WEc0Z0lDQWdmVnh1SUNBZ0lDOHZJR2xtSUdOc1pXRnlWR2x0Wlc5MWRDQjNZWE51SjNRZ1lYWmhhV3hoWW14bElHSjFkQ0IzWVhNZ2JHRjBkR1Z5SUdSbFptbHVaV1JjYmlBZ0lDQnBaaUFvS0dOaFkyaGxaRU5zWldGeVZHbHRaVzkxZENBOVBUMGdaR1ZtWVhWc2RFTnNaV0Z5VkdsdFpXOTFkQ0I4ZkNBaFkyRmphR1ZrUTJ4bFlYSlVhVzFsYjNWMEtTQW1KaUJqYkdWaGNsUnBiV1Z2ZFhRcElIdGNiaUFnSUNBZ0lDQWdZMkZqYUdWa1EyeGxZWEpVYVcxbGIzVjBJRDBnWTJ4bFlYSlVhVzFsYjNWME8xeHVJQ0FnSUNBZ0lDQnlaWFIxY200Z1kyeGxZWEpVYVcxbGIzVjBLRzFoY210bGNpazdYRzRnSUNBZ2ZWeHVJQ0FnSUhSeWVTQjdYRzRnSUNBZ0lDQWdJQzh2SUhkb1pXNGdkMmhsYmlCemIyMWxZbTlrZVNCb1lYTWdjMk55WlhkbFpDQjNhWFJvSUhObGRGUnBiV1Z2ZFhRZ1luVjBJRzV2SUVrdVJTNGdiV0ZrWkc1bGMzTmNiaUFnSUNBZ0lDQWdjbVYwZFhKdUlHTmhZMmhsWkVOc1pXRnlWR2x0Wlc5MWRDaHRZWEpyWlhJcE8xeHVJQ0FnSUgwZ1kyRjBZMmdnS0dVcGUxeHVJQ0FnSUNBZ0lDQjBjbmtnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdMeThnVjJobGJpQjNaU0JoY21VZ2FXNGdTUzVGTGlCaWRYUWdkR2hsSUhOamNtbHdkQ0JvWVhNZ1ltVmxiaUJsZG1Gc1pXUWdjMjhnU1M1RkxpQmtiMlZ6YmlkMElDQjBjblZ6ZENCMGFHVWdaMnh2WW1Gc0lHOWlhbVZqZENCM2FHVnVJR05oYkd4bFpDQnViM0p0WVd4c2VWeHVJQ0FnSUNBZ0lDQWdJQ0FnY21WMGRYSnVJR05oWTJobFpFTnNaV0Z5VkdsdFpXOTFkQzVqWVd4c0tHNTFiR3dzSUcxaGNtdGxjaWs3WEc0Z0lDQWdJQ0FnSUgwZ1kyRjBZMmdnS0dVcGUxeHVJQ0FnSUNBZ0lDQWdJQ0FnTHk4Z2MyRnRaU0JoY3lCaFltOTJaU0JpZFhRZ2QyaGxiaUJwZENkeklHRWdkbVZ5YzJsdmJpQnZaaUJKTGtVdUlIUm9ZWFFnYlhWemRDQm9ZWFpsSUhSb1pTQm5iRzlpWVd3Z2IySnFaV04wSUdadmNpQW5kR2hwY3ljc0lHaHZjR1oxYkd4NUlHOTFjaUJqYjI1MFpYaDBJR052Y25KbFkzUWdiM1JvWlhKM2FYTmxJR2wwSUhkcGJHd2dkR2h5YjNjZ1lTQm5iRzlpWVd3Z1pYSnliM0l1WEc0Z0lDQWdJQ0FnSUNBZ0lDQXZMeUJUYjIxbElIWmxjbk5wYjI1eklHOW1JRWt1UlM0Z2FHRjJaU0JrYVdabVpYSmxiblFnY25Wc1pYTWdabTl5SUdOc1pXRnlWR2x0Wlc5MWRDQjJjeUJ6WlhSVWFXMWxiM1YwWEc0Z0lDQWdJQ0FnSUNBZ0lDQnlaWFIxY200Z1kyRmphR1ZrUTJ4bFlYSlVhVzFsYjNWMExtTmhiR3dvZEdocGN5d2diV0Z5YTJWeUtUdGNiaUFnSUNBZ0lDQWdmVnh1SUNBZ0lIMWNibHh1WEc1Y2JuMWNiblpoY2lCeGRXVjFaU0E5SUZ0ZE8xeHVkbUZ5SUdSeVlXbHVhVzVuSUQwZ1ptRnNjMlU3WEc1MllYSWdZM1Z5Y21WdWRGRjFaWFZsTzF4dWRtRnlJSEYxWlhWbFNXNWtaWGdnUFNBdE1UdGNibHh1Wm5WdVkzUnBiMjRnWTJ4bFlXNVZjRTVsZUhSVWFXTnJLQ2tnZTF4dUlDQWdJR2xtSUNnaFpISmhhVzVwYm1jZ2ZId2dJV04xY25KbGJuUlJkV1YxWlNrZ2UxeHVJQ0FnSUNBZ0lDQnlaWFIxY200N1hHNGdJQ0FnZlZ4dUlDQWdJR1J5WVdsdWFXNW5JRDBnWm1Gc2MyVTdYRzRnSUNBZ2FXWWdLR04xY25KbGJuUlJkV1YxWlM1c1pXNW5kR2dwSUh0Y2JpQWdJQ0FnSUNBZ2NYVmxkV1VnUFNCamRYSnlaVzUwVVhWbGRXVXVZMjl1WTJGMEtIRjFaWFZsS1R0Y2JpQWdJQ0I5SUdWc2MyVWdlMXh1SUNBZ0lDQWdJQ0J4ZFdWMVpVbHVaR1Y0SUQwZ0xURTdYRzRnSUNBZ2ZWeHVJQ0FnSUdsbUlDaHhkV1YxWlM1c1pXNW5kR2dwSUh0Y2JpQWdJQ0FnSUNBZ1pISmhhVzVSZFdWMVpTZ3BPMXh1SUNBZ0lIMWNibjFjYmx4dVpuVnVZM1JwYjI0Z1pISmhhVzVSZFdWMVpTZ3BJSHRjYmlBZ0lDQnBaaUFvWkhKaGFXNXBibWNwSUh0Y2JpQWdJQ0FnSUNBZ2NtVjBkWEp1TzF4dUlDQWdJSDFjYmlBZ0lDQjJZWElnZEdsdFpXOTFkQ0E5SUhKMWJsUnBiV1Z2ZFhRb1kyeGxZVzVWY0U1bGVIUlVhV05yS1R0Y2JpQWdJQ0JrY21GcGJtbHVaeUE5SUhSeWRXVTdYRzVjYmlBZ0lDQjJZWElnYkdWdUlEMGdjWFZsZFdVdWJHVnVaM1JvTzF4dUlDQWdJSGRvYVd4bEtHeGxiaWtnZTF4dUlDQWdJQ0FnSUNCamRYSnlaVzUwVVhWbGRXVWdQU0J4ZFdWMVpUdGNiaUFnSUNBZ0lDQWdjWFZsZFdVZ1BTQmJYVHRjYmlBZ0lDQWdJQ0FnZDJocGJHVWdLQ3NyY1hWbGRXVkpibVJsZUNBOElHeGxiaWtnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdhV1lnS0dOMWNuSmxiblJSZFdWMVpTa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR04xY25KbGJuUlJkV1YxWlZ0eGRXVjFaVWx1WkdWNFhTNXlkVzRvS1R0Y2JpQWdJQ0FnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnSUNCeGRXVjFaVWx1WkdWNElEMGdMVEU3WEc0Z0lDQWdJQ0FnSUd4bGJpQTlJSEYxWlhWbExteGxibWQwYUR0Y2JpQWdJQ0I5WEc0Z0lDQWdZM1Z5Y21WdWRGRjFaWFZsSUQwZ2JuVnNiRHRjYmlBZ0lDQmtjbUZwYm1sdVp5QTlJR1poYkhObE8xeHVJQ0FnSUhKMWJrTnNaV0Z5VkdsdFpXOTFkQ2gwYVcxbGIzVjBLVHRjYm4xY2JseHVjSEp2WTJWemN5NXVaWGgwVkdsamF5QTlJR1oxYm1OMGFXOXVJQ2htZFc0cElIdGNiaUFnSUNCMllYSWdZWEpuY3lBOUlHNWxkeUJCY25KaGVTaGhjbWQxYldWdWRITXViR1Z1WjNSb0lDMGdNU2s3WEc0Z0lDQWdhV1lnS0dGeVozVnRaVzUwY3k1c1pXNW5kR2dnUGlBeEtTQjdYRzRnSUNBZ0lDQWdJR1p2Y2lBb2RtRnlJR2tnUFNBeE95QnBJRHdnWVhKbmRXMWxiblJ6TG14bGJtZDBhRHNnYVNzcktTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCaGNtZHpXMmtnTFNBeFhTQTlJR0Z5WjNWdFpXNTBjMXRwWFR0Y2JpQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUgxY2JpQWdJQ0J4ZFdWMVpTNXdkWE5vS0c1bGR5QkpkR1Z0S0daMWJpd2dZWEpuY3lrcE8xeHVJQ0FnSUdsbUlDaHhkV1YxWlM1c1pXNW5kR2dnUFQwOUlERWdKaVlnSVdSeVlXbHVhVzVuS1NCN1hHNGdJQ0FnSUNBZ0lISjFibFJwYldWdmRYUW9aSEpoYVc1UmRXVjFaU2s3WEc0Z0lDQWdmVnh1ZlR0Y2JseHVMeThnZGpnZ2JHbHJaWE1nY0hKbFpHbGpkR2xpYkdVZ2IySnFaV04wYzF4dVpuVnVZM1JwYjI0Z1NYUmxiU2htZFc0c0lHRnljbUY1S1NCN1hHNGdJQ0FnZEdocGN5NW1kVzRnUFNCbWRXNDdYRzRnSUNBZ2RHaHBjeTVoY25KaGVTQTlJR0Z5Y21GNU8xeHVmVnh1U1hSbGJTNXdjbTkwYjNSNWNHVXVjblZ1SUQwZ1puVnVZM1JwYjI0Z0tDa2dlMXh1SUNBZ0lIUm9hWE11Wm5WdUxtRndjR3g1S0c1MWJHd3NJSFJvYVhNdVlYSnlZWGtwTzF4dWZUdGNibkJ5YjJObGMzTXVkR2wwYkdVZ1BTQW5Zbkp2ZDNObGNpYzdYRzV3Y205alpYTnpMbUp5YjNkelpYSWdQU0IwY25WbE8xeHVjSEp2WTJWemN5NWxibllnUFNCN2ZUdGNibkJ5YjJObGMzTXVZWEpuZGlBOUlGdGRPMXh1Y0hKdlkyVnpjeTUyWlhKemFXOXVJRDBnSnljN0lDOHZJR1Z0Y0hSNUlITjBjbWx1WnlCMGJ5QmhkbTlwWkNCeVpXZGxlSEFnYVhOemRXVnpYRzV3Y205alpYTnpMblpsY25OcGIyNXpJRDBnZTMwN1hHNWNibVoxYm1OMGFXOXVJRzV2YjNBb0tTQjdmVnh1WEc1d2NtOWpaWE56TG05dUlEMGdibTl2Y0R0Y2JuQnliMk5sYzNNdVlXUmtUR2x6ZEdWdVpYSWdQU0J1YjI5d08xeHVjSEp2WTJWemN5NXZibU5sSUQwZ2JtOXZjRHRjYm5CeWIyTmxjM011YjJabUlEMGdibTl2Y0R0Y2JuQnliMk5sYzNNdWNtVnRiM1psVEdsemRHVnVaWElnUFNCdWIyOXdPMXh1Y0hKdlkyVnpjeTV5WlcxdmRtVkJiR3hNYVhOMFpXNWxjbk1nUFNCdWIyOXdPMXh1Y0hKdlkyVnpjeTVsYldsMElEMGdibTl2Y0R0Y2JuQnliMk5sYzNNdWNISmxjR1Z1WkV4cGMzUmxibVZ5SUQwZ2JtOXZjRHRjYm5CeWIyTmxjM011Y0hKbGNHVnVaRTl1WTJWTWFYTjBaVzVsY2lBOUlHNXZiM0E3WEc1Y2JuQnliMk5sYzNNdWJHbHpkR1Z1WlhKeklEMGdablZ1WTNScGIyNGdLRzVoYldVcElIc2djbVYwZFhKdUlGdGRJSDFjYmx4dWNISnZZMlZ6Y3k1aWFXNWthVzVuSUQwZ1puVnVZM1JwYjI0Z0tHNWhiV1VwSUh0Y2JpQWdJQ0IwYUhKdmR5QnVaWGNnUlhKeWIzSW9KM0J5YjJObGMzTXVZbWx1WkdsdVp5QnBjeUJ1YjNRZ2MzVndjRzl5ZEdWa0p5azdYRzU5TzF4dVhHNXdjbTlqWlhOekxtTjNaQ0E5SUdaMWJtTjBhVzl1SUNncElIc2djbVYwZFhKdUlDY3ZKeUI5TzF4dWNISnZZMlZ6Y3k1amFHUnBjaUE5SUdaMWJtTjBhVzl1SUNoa2FYSXBJSHRjYmlBZ0lDQjBhSEp2ZHlCdVpYY2dSWEp5YjNJb0ozQnliMk5sYzNNdVkyaGthWElnYVhNZ2JtOTBJSE4xY0hCdmNuUmxaQ2NwTzF4dWZUdGNibkJ5YjJObGMzTXVkVzFoYzJzZ1BTQm1kVzVqZEdsdmJpZ3BJSHNnY21WMGRYSnVJREE3SUgwN1hHNGlMQ0pwYlhCdmNuUWdlMFJwYzNCaGRHTm9aWEo5SUdaeWIyMGdYQ0l1TGk5bGRtVnVkSE12WkdsemNHRjBZMmhsY2x3aU8xeHlYRzVjY2x4dVpYaHdiM0owSUdOc1lYTnpJRU5vWVc1dVpXd2daWGgwWlc1a2N5QkVhWE53WVhSamFHVnlJSHRjY2x4dUlDQWdJR052Ym5OMGNuVmpkRzl5S0c1aGJXVXNJSEIxYzJobGNpa2dlMXh5WEc0Z0lDQWdJQ0FnSUhOMWNHVnlLQ2s3WEhKY2JseHlYRzRnSUNBZ0lDQWdJSFJvYVhNdWJtRnRaU0E5SUc1aGJXVTdYSEpjYmlBZ0lDQWdJQ0FnZEdocGN5NXdkWE5vWlhJZ1BTQndkWE5vWlhJN1hISmNibHh5WEc0Z0lDQWdJQ0FnSUdsbUlDaDBhR2x6TG5CMWMyaGxjaTV6YjJOclpYUXVjM1JoZEdVZ1BUMGdNU2tnZTF4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0IwYUdsekxuTjFZbk5qY21saVpTZ3BPMXh5WEc0Z0lDQWdJQ0FnSUgxY2NseHVJQ0FnSUgxY2NseHVYSEpjYmlBZ0lDQnpkV0p6WTNKcFltVW9LU0I3WEhKY2JpQWdJQ0FnSUNBZ2RHaHBjeTV3ZFhOb1pYSXVjMlZ1WkNoN1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUdWMlpXNTBPaUFuYzNWaWMyTnlhV0psSnl4Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnWkdGMFlUb2dlMXh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnWTJoaGJtNWxiRG9nZEdocGN5NXVZVzFsWEhKY2JpQWdJQ0FnSUNBZ0lDQWdJSDFjY2x4dUlDQWdJQ0FnSUNCOUtUdGNjbHh1SUNBZ0lIMWNjbHh1ZlNJc0ltbHRjRzl5ZENCN1EyaGhibTVsYkgwZ1puSnZiU0JjSWk0dlkyaGhibTVsYkZ3aU8xeHlYRzVwYlhCdmNuUWdlMUJ5WlhObGJtTmxRMmhoYm01bGJIMGdabkp2YlNCY0lpNHZjSEpsYzJWdVkyVmZZMmhoYm01bGJGd2lPMXh5WEc1cGJYQnZjblFnZTFCeWFYWmhkR1ZEYUdGdWJtVnNmU0JtY205dElGd2lMaTl3Y21sMllYUmxYMk5vWVc1dVpXeGNJanRjY2x4dVhISmNibVY0Y0c5eWRDQmpiR0Z6Y3lCTllXNXVZV2RsY2lCN1hISmNiaUFnSUNCamIyNXpkSEoxWTNSdmNpZ3BJSHRjY2x4dUlDQWdJQ0FnSUNCMGFHbHpMbU5vWVc1dVpXeHpJRDBnZTMwN1hISmNiaUFnSUNCOVhISmNibHh5WEc0Z0lDQWdZV1JrS0c1aGJXVXNJSEIxYzJobGNpa2dlMXh5WEc0Z0lDQWdJQ0FnSUdsbUlDZ2hkR2hwY3k1amFHRnVibVZzYzF0dVlXMWxYU2tnZTF4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0IwYUdsekxtTm9ZVzV1Wld4elcyNWhiV1ZkSUQwZ1kzSmxZWFJsUTJoaGJtNWxiQ2h1WVcxbExDQndkWE5vWlhJcE8xeHlYRzRnSUNBZ0lDQWdJSDFjY2x4dUlDQWdJQ0FnSUNCeVpYUjFjbTRnZEdocGN5NWphR0Z1Ym1Wc2MxdHVZVzFsWFR0Y2NseHVJQ0FnSUgxY2NseHVYSEpjYmlBZ0lDQmhiR3dvS1NCN1hISmNiaUFnSUNBZ0lDQWdjbVYwZFhKdUlFOWlhbVZqZEM1clpYbHpLSFJvYVhNdVkyaGhibTVsYkhNcE8xeHlYRzRnSUNBZ2ZWeHlYRzVjY2x4dUlDQWdJR1pwYm1Rb2JtRnRaU2tnZTF4eVhHNGdJQ0FnSUNBZ0lISmxkSFZ5YmlCMGFHbHpMbU5vWVc1dVpXeHpXMjVoYldWZE8xeHlYRzRnSUNBZ2ZWeHlYRzVjY2x4dUlDQWdJSEpsYlc5MlpTaHVZVzFsS1NCN1hISmNiaUFnSUNBZ0lDQWdiR1YwSUdOb1lXNXVaV3dnUFNCMGFHbHpMbU5vWVc1dVpXeHpXMjVoYldWZE8xeHlYRzRnSUNBZ0lDQWdJR1JsYkdWMFpTQjBhR2x6TG1Ob1lXNXVaV3h6VzI1aGJXVmRPMXh5WEc0Z0lDQWdJQ0FnSUhKbGRIVnliaUJqYUdGdWJtVnNPMXh5WEc0Z0lDQWdmVnh5WEc1Y2NseHVJQ0FnSUhOMVluTmpjbWxpWlNncElIdGNjbHh1SUNBZ0lDQWdJQ0JtYjNJZ0tHeGxkQ0JwSUdsdUlIUm9hWE11WTJoaGJtNWxiSE1wSUh0Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnZEdocGN5NWphR0Z1Ym1Wc2MxdHBYUzV6ZFdKelkzSnBZbVVvS1R0Y2NseHVJQ0FnSUNBZ0lDQjlYSEpjYmx4eVhHNGdJQ0FnZlZ4eVhHNTlYSEpjYmx4eVhHNW1kVzVqZEdsdmJpQmpjbVZoZEdWRGFHRnVibVZzS0c1aGJXVXNJSEIxYzJobGNpa2dlMXh5WEc0Z0lDQWdhV1lnS0c1aGJXVXVhVzVrWlhoUFppZ25jSEpwZG1GMFpTMG5LU0E5UFQwZ01Da2dlMXh5WEc0Z0lDQWdJQ0FnSUhKbGRIVnliaUJ1WlhjZ1VISnBkbUYwWlVOb1lXNXVaV3dvYm1GdFpTd2djSFZ6YUdWeUtUdGNjbHh1SUNBZ0lIMGdaV3h6WlNCcFppQW9ibUZ0WlM1cGJtUmxlRTltS0Nkd2NtVnpaVzVqWlMwbktTQTlQVDBnTUNrZ2UxeHlYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQnVaWGNnVUhKbGMyVnVZMlZEYUdGdWJtVnNLRzVoYldVc0lIQjFjMmhsY2lrN1hISmNiaUFnSUNCOUlHVnNjMlVnZTF4eVhHNGdJQ0FnSUNBZ0lISmxkSFZ5YmlCdVpYY2dRMmhoYm01bGJDaHVZVzFsTENCd2RYTm9aWElwTzF4eVhHNGdJQ0FnZlZ4eVhHNTlJaXdpYVcxd2IzSjBJSHRFYVhOd1lYUmphR1Z5ZlNCbWNtOXRJRndpTGk0dlpYWmxiblJ6TDJScGMzQmhkR05vWlhKY0lqdGNjbHh1WEhKY2JtVjRjRzl5ZENCamJHRnpjeUJRY21WelpXNWpaVU5vWVc1dVpXd2daWGgwWlc1a2N5QkVhWE53WVhSamFHVnlJSHRjY2x4dUlDQWdJR052Ym5OMGNuVmpkRzl5S0c1aGJXVXNJSEIxYzJobGNpa2dlMXh5WEc0Z0lDQWdJQ0FnSUhOMWNHVnlLQ2s3WEhKY2JseHlYRzRnSUNBZ0lDQWdJSFJvYVhNdWJtRnRaU0E5SUc1aGJXVTdYSEpjYmlBZ0lDQWdJQ0FnZEdocGN5NXdkWE5vWlhJZ1BTQndkWE5vWlhJN1hISmNiaUFnSUNBZ0lDQWdkR2hwY3k1aGRYUm9JRDBnYm5Wc2JEdGNjbHh1WEhKY2JpQWdJQ0FnSUNBZ2FXWWdLSFJvYVhNdWNIVnphR1Z5TG5OdlkydGxkQzV6ZEdGMFpTQTlQU0F4S1NCN1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUhSb2FYTXVjM1ZpYzJOeWFXSmxLQ2s3WEhKY2JpQWdJQ0FnSUNBZ2ZWeHlYRzRnSUNBZ2ZWeHlYRzVjY2x4dUlDQWdJSE4xWW5OamNtbGlaU2dwSUh0Y2NseHVJQ0FnSUNBZ0lDQjBhR2x6TG5CMWMyaGxjaTVoZFhSb0tIUm9hWE11Ym1GdFpTd2dLR1VwSUQwK0lIdGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ2RHaHBjeTVoZFhSb0lEMGdaUzVrWVhSaExtRjFkR2c3WEhKY2JseHlYRzRnSUNBZ0lDQWdJQ0FnSUNCMGFHbHpMbkIxYzJobGNpNXpaVzVrS0h0Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHVjJaVzUwT2lBbmMzVmljMk55YVdKbEp5eGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR1JoZEdFNklIdGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCamFHRnVibVZzT2lCMGFHbHpMbTVoYldVc1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnWVhWMGFEb2dkR2hwY3k1aGRYUm9MRnh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHTm9ZVzV1Wld4ZlpHRjBZVG9nWlM1a1lYUmhMbU5vWVc1dVpXeGZaR0YwWVZ4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2ZWeHlYRzRnSUNBZ0lDQWdJQ0FnSUNCOUtUdGNjbHh1SUNBZ0lDQWdJQ0I5S1R0Y2NseHVJQ0FnSUgxY2NseHVmU0lzSW1sdGNHOXlkQ0I3UkdsemNHRjBZMmhsY24wZ1puSnZiU0JjSWk0dUwyVjJaVzUwY3k5a2FYTndZWFJqYUdWeVhDSTdYSEpjYmx4eVhHNWxlSEJ2Y25RZ1kyeGhjM01nVUhKcGRtRjBaVU5vWVc1dVpXd2daWGgwWlc1a2N5QkVhWE53WVhSamFHVnlJSHRjY2x4dUlDQWdJR052Ym5OMGNuVmpkRzl5S0c1aGJXVXNJSEIxYzJobGNpa2dlMXh5WEc0Z0lDQWdJQ0FnSUhOMWNHVnlLQ2s3WEhKY2JseHlYRzRnSUNBZ0lDQWdJSFJvYVhNdWJtRnRaU0E5SUc1aGJXVTdYSEpjYmlBZ0lDQWdJQ0FnZEdocGN5NXdkWE5vWlhJZ1BTQndkWE5vWlhJN1hISmNiaUFnSUNBZ0lDQWdkR2hwY3k1aGRYUm9JRDBnYm5Wc2JEdGNjbHh1WEhKY2JpQWdJQ0FnSUNBZ2FXWWdLSFJvYVhNdWNIVnphR1Z5TG5OdlkydGxkQzV6ZEdGMFpTQTlQU0F4S1NCN1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUhSb2FYTXVjM1ZpYzJOeWFXSmxLQ2s3WEhKY2JpQWdJQ0FnSUNBZ2ZWeHlYRzRnSUNBZ2ZWeHlYRzVjY2x4dUlDQWdJSE4xWW5OamNtbGlaU2dwSUh0Y2NseHVJQ0FnSUNBZ0lDQjBhR2x6TG5CMWMyaGxjaTVoZFhSb0tIUm9hWE11Ym1GdFpTd2dLR1VwSUQwK0lIdGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ2RHaHBjeTVoZFhSb0lEMGdaUzVrWVhSaExtRjFkR2c3WEhKY2JseHlYRzRnSUNBZ0lDQWdJQ0FnSUNCMGFHbHpMbkIxYzJobGNpNXpaVzVrS0h0Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHVjJaVzUwT2lBbmMzVmljMk55YVdKbEp5eGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR1JoZEdFNklIdGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCamFHRnVibVZzT2lCMGFHbHpMbTVoYldVc1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnWVhWMGFEb2dkR2hwY3k1aGRYUm9YSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0I5WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJSDBwTzF4eVhHNGdJQ0FnSUNBZ0lIMHBPMXh5WEc0Z0lDQWdmVnh5WEc1OUlpd2lhVzF3YjNKMElIdEVhWE53WVhSamFHVnlmU0JtY205dElGd2lMaTR2WlhabGJuUnpMMlJwYzNCaGRHTm9aWEpjSWp0Y2NseHVYSEpjYm1WNGNHOXlkQ0JqYkdGemN5QlRiMk5yWlhRZ1pYaDBaVzVrY3lCRWFYTndZWFJqYUdWeUlIdGNjbHh1SUNBZ0lHTnZibk4wY25WamRHOXlLSEIxYzJobGNpd2dhRzl6ZENrZ2UxeHlYRzRnSUNBZ0lDQWdJSE4xY0dWeUtDazdYSEpjYmx4eVhHNGdJQ0FnSUNBZ0lIUm9hWE11Y0hWemFHVnlJRDBnY0hWemFHVnlPMXh5WEc0Z0lDQWdJQ0FnSUhSb2FYTXVjMjlqYTJWMElEMGdibVYzSUZkbFlsTnZZMnRsZENob2IzTjBJQ3NnSnk4bklDc2dkR2hwY3k1d2RYTm9aWEl1YTJWNUtUdGNjbHh1WEhKY2JpQWdJQ0FnSUNBZ2RHaHBjeTVpYVc1a1RHbHpkR1Z1WlhKektDazdYSEpjYmlBZ0lDQjlYSEpjYmx4eVhHNGdJQ0FnWW1sdVpFeHBjM1JsYm1WeWN5Z3BJSHRjY2x4dUlDQWdJQ0FnSUNCMGFHbHpMbk52WTJ0bGRDNXZibTl3Wlc0Z1BTQW9LU0E5UGlCN1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUhSb2FYTXViMjVQY0dWdUtDazdYSEpjYmlBZ0lDQWdJQ0FnZlR0Y2NseHVJQ0FnSUNBZ0lDQjBhR2x6TG5OdlkydGxkQzV2Ym1WeWNtOXlJRDBnS0dWeWNtOXlLU0E5UGlCN1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUhSb2FYTXViMjVGY25KdmNpaGxjbkp2Y2lrN1hISmNiaUFnSUNBZ0lDQWdmVHRjY2x4dUlDQWdJQ0FnSUNCMGFHbHpMbk52WTJ0bGRDNXZibU5zYjNObElEMGdLR05zYjNObFJYWmxiblFwSUQwK0lIdGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ2RHaHBjeTV2YmtOc2IzTmxLR05zYjNObFJYWmxiblFwTzF4eVhHNGdJQ0FnSUNBZ0lIMDdYSEpjYmlBZ0lDQWdJQ0FnZEdocGN5NXpiMk5yWlhRdWIyNXRaWE56WVdkbElEMGdLRzFsYzNOaFoyVXBJRDArSUh0Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnZEdocGN5NXZiazFsYzNOaFoyVW9iV1Z6YzJGblpTazdYSEpjYmlBZ0lDQWdJQ0FnZlR0Y2NseHVJQ0FnSUgxY2NseHVYSEpjYmlBZ0lDQnZiazl3Wlc0b0tTQjdYSEpjYmlBZ0lDQWdJQ0FnTHkvbGlKM2xwNHZuaXJibWdJRmNjbHh1SUNBZ0lDQWdJQ0IwYUdsekxuTjBZWFJsSUQwZ01EdGNjbHh1WEhKY2JpQWdJQ0FnSUNBZ2RHaHBjeTVpYVc1a0tDZGpiMjV1WldOMFpXUW5MQ0FvWlNrZ1BUNGdlMXh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQjBhR2x6TG5OdlkydGxkQzV6YjJOclpYUmZhV1FnUFNCbExuTnZZMnRsZEY5cFpEdGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ2RHaHBjeTV6ZEdGMFpTQTlJREU3WEhKY2JseHlYRzRnSUNBZ0lDQWdJQ0FnSUNBdkwraXVvdW1ZaFZ4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0IwYUdsekxuQjFjMmhsY2k1amFHRnVibVZzY3k1emRXSnpZM0pwWW1Vb0tUdGNjbHh1SUNBZ0lDQWdJQ0I5S1R0Y2NseHVYSEpjYmlBZ0lDQWdJQ0FnZEdocGN5NWlhVzVrS0NkamIyNXVaV04wYVc5dVgyWmhhV3hsWkNjc0lDaGxLU0E5UGlCN1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUhSb2FYTXVjM1JoZEdVZ1BTQXRNVHRjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdZMjl1YzI5c1pTNWxjbkp2Y2lobExtVnljbTl5S1Z4eVhHNGdJQ0FnSUNBZ0lIMHBPMXh5WEc1Y2NseHVJQ0FnSUNBZ0lDQXZLblJvYVhNdWMyVnVaQ2g3WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJR1YyWlc1ME9pQW5ZWFYwYUc5eWFYcGhkR2x2YmlkY2NseHVJQ0FnSUNBZ0lDQjlLVHNxTDF4eVhHNGdJQ0FnZlZ4eVhHNWNjbHh1SUNBZ0lHOXVSWEp5YjNJb1pYSnliM0lwSUh0Y2NseHVJQ0FnSUNBZ0lDQmpiMjV6YjJ4bExtVnljbTl5S0dWeWNtOXlLVnh5WEc0Z0lDQWdmVnh5WEc1Y2NseHVJQ0FnSUc5dVEyeHZjMlVvWTJ4dmMyVkZkbVZ1ZENrZ2UxeHlYRzRnSUNBZ0lDQWdJR2xtSUNoMGFHbHpMbk52WTJ0bGRDNXlaV0ZrZVZOMFlYUmxJRDA5SUZkbFlsTnZZMnRsZEM1RFRFOVRSVVFwSUh0Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnYVdZZ0tHTnNiM05sUlhabGJuUXVkSGx3WlNBOVBTQW5ZMnh2YzJVbktTQjdYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JqYjI1emIyeGxMbVZ5Y205eUtDZHpiMk5yWlhUbW5JM2xpcUhsdDdMbWxxM2x2SUFoSVNjcFhISmNiaUFnSUNBZ0lDQWdJQ0FnSUgwZ1pXeHpaU0JwWmlBb1kyeHZjMlZGZG1WdWRDNTBlWEJsSUQwOUlDZHRaWE56WVdkbEp5a2dlMXh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnWTI5dWMyOXNaUzVsY25KdmNpaGpiRzl6WlVWMlpXNTBMbVJoZEdFcFhISmNiaUFnSUNBZ0lDQWdJQ0FnSUgwZ1pXeHpaU0I3WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCamIyNXpiMnhsTG1WeWNtOXlLQ2ZsdDdMbWxxM2x2SUFoSVNjcFhISmNiaUFnSUNBZ0lDQWdJQ0FnSUgxY2NseHVJQ0FnSUNBZ0lDQjlYSEpjYmlBZ0lDQjlYSEpjYmx4eVhHNGdJQ0FnYjI1TlpYTnpZV2RsS0cxbGMzTmhaMlVwSUh0Y2NseHVJQ0FnSUNBZ0lDQnNaWFFnWlVSaGRHRWdQU0JLVTA5T0xuQmhjbk5sS0cxbGMzTmhaMlV1WkdGMFlTazdYSEpjYmlBZ0lDQWdJQ0FnYkdWMElHVjJaVzUwSUQwZ1pVUmhkR0V1WlhabGJuUTdYSEpjYmlBZ0lDQWdJQ0FnYkdWMElHUmhkR0VnUFNCbFJHRjBZUzVrWVhSaE8xeHlYRzVjY2x4dUlDQWdJQ0FnSUNCcFppQW9aVVJoZEdFdVkyaGhibTVsYkNBaFBUMGdkVzVrWldacGJtVmtLU0I3WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJSFJvYVhNdWNIVnphR1Z5TG1Ob1lXNXVaV3h6TG1acGJtUW9aVVJoZEdFdVkyaGhibTVsYkNrdVpXMXBkQ2hsZG1WdWRDd2daR0YwWVNrN1hISmNiaUFnSUNBZ0lDQWdmU0JsYkhObElIdGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ2RHaHBjeTVsYldsMEtHVjJaVzUwTENCa1lYUmhLVHRjY2x4dUlDQWdJQ0FnSUNCOVhISmNibHh5WEc0Z0lDQWdmVnh5WEc1Y2NseHVJQ0FnSUhObGJtUW9hbk52YmlrZ2UxeHlYRzRnSUNBZ0lDQWdJR2xtSUNoMGFHbHpMbk4wWVhSbElDRTlQU0F0TVNrZ2UxeHlYRzRnSUNBZ0lDQWdJQ0FnSUNCMGFHbHpMbk52WTJ0bGRDNXpaVzVrS0VwVFQwNHVjM1J5YVc1bmFXWjVLR3B6YjI0cEtWeHlYRzRnSUNBZ0lDQWdJSDFjY2x4dUlDQWdJSDFjY2x4dWZTSXNJbVY0Y0c5eWRDQmpiR0Z6Y3lCRFlXeHNZbUZqYTFKbFoybHpkSEo1SUh0Y2NseHVJQ0FnSUdOdmJuTjBjblZqZEc5eUtDa2dlMXh5WEc0Z0lDQWdJQ0FnSUhSb2FYTXVYMk5oYkd4aVlXTnJjeUE5SUh0OU8xeHlYRzRnSUNBZ2ZWeHlYRzVjY2x4dUlDQWdJR2RsZENodVlXMWxLU0I3WEhKY2JpQWdJQ0FnSUNBZ2NtVjBkWEp1SUhSb2FYTXVYMk5oYkd4aVlXTnJjMXR3Y21WbWFYZ29ibUZ0WlNsZE8xeHlYRzRnSUNBZ2ZWeHlYRzVjY2x4dUlDQWdJR0ZrWkNodVlXMWxMQ0JqWVd4c1ltRmpheXdnWTI5dWRHVjRkQ2tnZTF4eVhHNGdJQ0FnSUNBZ0lHeGxkQ0J3Y21WbWFYaGxaRVYyWlc1MFRtRnRaU0E5SUhCeVpXWnBlQ2h1WVcxbEtUdGNjbHh1SUNBZ0lDQWdJQ0IwYUdsekxsOWpZV3hzWW1GamEzTmJjSEpsWm1sNFpXUkZkbVZ1ZEU1aGJXVmRJRDBnZEdocGN5NWZZMkZzYkdKaFkydHpXM0J5WldacGVHVmtSWFpsYm5ST1lXMWxYU0I4ZkNCYlhUdGNjbHh1SUNBZ0lDQWdJQ0IwYUdsekxsOWpZV3hzWW1GamEzTmJjSEpsWm1sNFpXUkZkbVZ1ZEU1aGJXVmRMbkIxYzJnb2UxeHlYRzRnSUNBZ0lDQWdJQ0FnSUNCbWJqb2dZMkZzYkdKaFkyc3NYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lHTnZiblJsZUhRNklHTnZiblJsZUhSY2NseHVJQ0FnSUNBZ0lDQjlLVHRjY2x4dUlDQWdJSDFjY2x4dVhISmNiaUFnSUNCeVpXMXZkbVVvYm1GdFpTd2dZMkZzYkdKaFkyc3NJR052Ym5SbGVIUXBJSHRjY2x4dUlDQWdJQ0FnSUNCcFppQW9JVzVoYldVZ0ppWWdJV05oYkd4aVlXTnJJQ1ltSUNGamIyNTBaWGgwS1NCN1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUhSb2FYTXVYMk5oYkd4aVlXTnJjeUE5SUh0OU8xeHlYRzRnSUNBZ0lDQWdJQ0FnSUNCeVpYUjFjbTQ3WEhKY2JpQWdJQ0FnSUNBZ2ZWeHlYRzVjY2x4dUlDQWdJQ0FnSUNCMllYSWdibUZ0WlhNZ1BTQnVZVzFsSUQ4Z1czQnlaV1pwZUNodVlXMWxLVjBnT2lCUFltcGxZM1F1YTJWNWN5aDBhR2x6TGw5allXeHNZbUZqYTNNcE8xeHlYRzVjY2x4dUlDQWdJQ0FnSUNCcFppQW9ZMkZzYkdKaFkyc2dmSHdnWTI5dWRHVjRkQ2tnZTF4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0IwYUdsekxuSmxiVzkyWlVOaGJHeGlZV05yS0c1aGJXVnpMQ0JqWVd4c1ltRmpheXdnWTI5dWRHVjRkQ2s3WEhKY2JpQWdJQ0FnSUNBZ2ZTQmxiSE5sSUh0Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnZEdocGN5NXlaVzF2ZG1WQmJHeERZV3hzWW1GamEzTW9ibUZ0WlhNcE8xeHlYRzRnSUNBZ0lDQWdJSDFjY2x4dUlDQWdJSDFjY2x4dVhISmNiaUFnSUNCeVpXMXZkbVZEWVd4c1ltRmpheWh1WVcxbGN5d2dZMkZzYkdKaFkyc3NJR052Ym5SbGVIUXBJSHRjY2x4dUlDQWdJQ0FnSUNCbWIzSWdLR3hsZENCdVlXMWxJR2x1SUc1aGJXVnpLU0I3WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJR1p2Y2lBb2JHVjBJR3RsZVNCcGJpQjBhR2x6TGw5allXeHNZbUZqYTNOYmJtRnRaVjBwSUh0Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHbG1JQ2gwYUdsekxsOWpZV3hzWW1GamEzTmJibUZ0WlYxYmEyVjVYUzVtYmlBOVBTQmpZV3hzWW1GamF5QjhmQ0IwYUdsekxsOWpZV3hzWW1GamEzTmJibUZ0WlYxYmEyVjVYUzVqYjI1MFpYaDBJRDA5SUdOdmJuUmxlSFFwSUh0Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JrWld4bGRHVWdkR2hwY3k1ZlkyRnNiR0poWTJ0elcyNWhiV1ZkVzJ0bGVWMDdYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0I5WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJSDFjY2x4dVhISmNiaUFnSUNBZ0lDQWdJQ0FnSUdsbUlDaDBhR2x6TGw5allXeHNZbUZqYTNOYmJtRnRaVjB1YkdWdVozUm9JRDA5UFNBd0tTQjdYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JrWld4bGRHVWdkR2hwY3k1ZlkyRnNiR0poWTJ0elcyNWhiV1ZkTzF4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0I5WEhKY2JpQWdJQ0FnSUNBZ2ZWeHlYRzRnSUNBZ2ZWeHlYRzVjY2x4dUlDQWdJSEpsYlc5MlpVRnNiRU5oYkd4aVlXTnJjeWh1WVcxbGN5a2dlMXh5WEc0Z0lDQWdJQ0FnSUdadmNpQW9iR1YwSUc1aGJXVWdhVzRnYm1GdFpYTXBJSHRjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdaR1ZzWlhSbElIUm9hWE11WDJOaGJHeGlZV05yYzF0dVlXMWxYVHRjY2x4dUlDQWdJQ0FnSUNCOVhISmNiaUFnSUNCOVhISmNibjFjY2x4dVhISmNibVoxYm1OMGFXOXVJSEJ5WldacGVDaHVZVzFsS1NCN1hISmNiaUFnSUNCeVpYUjFjbTRnWENKZlhDSWdLeUJ1WVcxbE8xeHlYRzU5SWl3aWFXMXdiM0owSUh0RFlXeHNZbUZqYTFKbFoybHpkSEo1ZlNCbWNtOXRJQ2N1TDJOaGJHeGlZV05yWDNKbFoybHpkSEo1Snp0Y2NseHVYSEpjYm1WNGNHOXlkQ0JqYkdGemN5QkVhWE53WVhSamFHVnlJSHRjY2x4dUlDQWdJR052Ym5OMGNuVmpkRzl5S0NrZ2UxeHlYRzRnSUNBZ0lDQWdJSFJvYVhNdVkyRnNiR0poWTJ0eklEMGdibVYzSUVOaGJHeGlZV05yVW1WbmFYTjBjbmtvS1R0Y2NseHVJQ0FnSUNBZ0lDQjBhR2x6TG1kc2IySmhiRjlqWVd4c1ltRmphM01nUFNCYlhUdGNjbHh1SUNBZ0lIMWNjbHh1WEhKY2JpQWdJQ0JpYVc1a0tHVjJaVzUwVG1GdFpTd2dZMkZzYkdKaFkyc3NJR052Ym5SbGVIUXBJSHRjY2x4dUlDQWdJQ0FnSUNCMGFHbHpMbU5oYkd4aVlXTnJjeTVoWkdRb1pYWmxiblJPWVcxbExDQmpZV3hzWW1GamF5d2dZMjl1ZEdWNGRDazdYSEpjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJSFJvYVhNN1hISmNiaUFnSUNCOVhISmNibHh5WEc0Z0lDQWdZbWx1WkY5bmJHOWlZV3dvWTJGc2JHSmhZMnNwSUh0Y2NseHVJQ0FnSUNBZ0lDQjBhR2x6TG1kc2IySmhiRjlqWVd4c1ltRmphM011Y0hWemFDaGpZV3hzWW1GamF5azdYSEpjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJSFJvYVhNN1hISmNiaUFnSUNCOVhISmNibHh5WEc0Z0lDQWdkVzVpYVc1a0tHVjJaVzUwVG1GdFpTd2dZMkZzYkdKaFkyc3NJR052Ym5SbGVIUXBJSHRjY2x4dUlDQWdJQ0FnSUNCMGFHbHpMbU5oYkd4aVlXTnJjeTV5WlcxdmRtVW9aWFpsYm5ST1lXMWxMQ0JqWVd4c1ltRmpheXdnWTI5dWRHVjRkQ2s3WEhKY2JpQWdJQ0FnSUNBZ2NtVjBkWEp1SUhSb2FYTTdYSEpjYmlBZ0lDQjlYSEpjYmx4eVhHNGdJQ0FnZFc1aWFXNWtYMmRzYjJKaGJDaGpZV3hzWW1GamF5a2dlMXh5WEc0Z0lDQWdJQ0FnSUdsbUlDZ2hZMkZzYkdKaFkyc3BJSHRjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdkR2hwY3k1bmJHOWlZV3hmWTJGc2JHSmhZMnR6SUQwZ1cxMDdYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lISmxkSFZ5YmlCMGFHbHpPMXh5WEc0Z0lDQWdJQ0FnSUgxY2NseHVYSEpjYmlBZ0lDQWdJQ0FnWm05eUlDaHNaWFFnYVNCcGJpQjBhR2x6TG1kc2IySmhiRjlqWVd4c1ltRmphM01wSUh0Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnYVdZZ0tHTmhiR3hpWVdOcklEMDlJSFJvYVhNdVoyeHZZbUZzWDJOaGJHeGlZV05yYzF0cFhTa2dlMXh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnWkdWc1pYUmxJSFJvYVhNdVoyeHZZbUZzWDJOaGJHeGlZV05yYzF0cFhUdGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ2ZWeHlYRzRnSUNBZ0lDQWdJSDFjY2x4dUlDQWdJQ0FnSUNCeVpYUjFjbTRnZEdocGN6dGNjbHh1SUNBZ0lIMWNjbHh1WEhKY2JpQWdJQ0IxYm1KcGJtUmZZV3hzS0NrZ2UxeHlYRzRnSUNBZ0lDQWdJSFJvYVhNdWRXNWlhVzVrS0NrN1hISmNiaUFnSUNBZ0lDQWdkR2hwY3k1MWJtSnBibVJmWjJ4dlltRnNLQ2s3WEhKY2JpQWdJQ0FnSUNBZ2NtVjBkWEp1SUhSb2FYTTdYSEpjYmlBZ0lDQjlYSEpjYmx4eVhHNGdJQ0FnWlcxcGRDaGxkbVZ1ZEU1aGJXVXNJR1JoZEdFcElIdGNjbHh1SUNBZ0lDQWdJQ0JtYjNJZ0tHeGxkQ0JwSUQwZ01Ec2dhU0E4SUhSb2FYTXVaMnh2WW1Gc1gyTmhiR3hpWVdOcmN5NXNaVzVuZEdnN0lHa3JLeWtnZTF4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0IwYUdsekxtZHNiMkpoYkY5allXeHNZbUZqYTNOYmFWMG9aWFpsYm5ST1lXMWxMQ0JrWVhSaEtUdGNjbHh1SUNBZ0lDQWdJQ0I5WEhKY2JseHlYRzRnSUNBZ0lDQWdJSFpoY2lCallXeHNZbUZqYTNNZ1BTQjBhR2x6TG1OaGJHeGlZV05yY3k1blpYUW9aWFpsYm5ST1lXMWxLVHRjY2x4dUlDQWdJQ0FnSUNCcFppQW9ZMkZzYkdKaFkydHpJQ1ltSUdOaGJHeGlZV05yY3k1c1pXNW5kR2dnUGlBd0tTQjdYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lHWnZjaUFvYkdWMElHa2dQU0F3T3lCcElEd2dZMkZzYkdKaFkydHpMbXhsYm1kMGFEc2dhU3NyS1NCN1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQmpZV3hzWW1GamEzTmJhVjB1Wm00dVkyRnNiQ2hqWVd4c1ltRmphM05iYVYwdVkyOXVkR1Y0ZEN3Z1pHRjBZU2s3WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJSDFjY2x4dUlDQWdJQ0FnSUNCOVhISmNibHh5WEc0Z0lDQWdJQ0FnSUhKbGRIVnliaUIwYUdsek8xeHlYRzRnSUNBZ2ZWeHlYRzU5SWl3aWFXMXdiM0owSUh0VGIyTnJaWFI5SUdaeWIyMGdKeTR2WTI5dWJtVmpkR2x2Ymk5emIyTnJaWFFuTzF4eVhHNXBiWEJ2Y25RZ2UwUnBjM0JoZEdOb1pYSjlJR1p5YjIwZ0p5NHZaWFpsYm5SekwyUnBjM0JoZEdOb1pYSW5PMXh5WEc1cGJYQnZjblFnZTAxaGJtNWhaMlZ5ZlNCbWNtOXRJRndpTGk5amFHRnVibVZzY3k5dFlXNXVZV2RsY2x3aU8xeHlYRzVwYlhCdmNuUWdZWGhwYjNNZ1puSnZiU0JjSW1GNGFXOXpYQ0k3WEhKY2JseHlYRzVsZUhCdmNuUWdZMnhoYzNNZ1VIVnphR1Z5SUh0Y2NseHVJQ0FnSUdOdmJuTjBjblZqZEc5eUtHRndjRjlyWlhrc0lHOXdkR2x2Ym5NcElIdGNjbHh1SUNBZ0lDQWdJQ0IwYUdsekxtTm9aV05yUVhCd1MyVjVLR0Z3Y0Y5clpYa3BPMXh5WEc1Y2NseHVJQ0FnSUNBZ0lDQjBhR2x6TG10bGVTQTlJR0Z3Y0Y5clpYazdYSEpjYmlBZ0lDQWdJQ0FnZEdocGN5NXZjSFJwYjI1eklEMGdiM0IwYVc5dWN5QjhmQ0I3ZlR0Y2NseHVJQ0FnSUNBZ0lDQjBhR2x6TG1ScGMzQmhkR05vWlhJZ1BTQnVaWGNnUkdsemNHRjBZMmhsY2lncE8xeHlYRzRnSUNBZ0lDQWdJSFJvYVhNdVkyaGhibTVsYkhNZ1BTQnVaWGNnVFdGdWJtRm5aWElvS1R0Y2NseHVYSEpjYmlBZ0lDQWdJQ0FnZEdocGN5NWpiMjV1WldOMEtDazdYSEpjYmlBZ0lDQjlYSEpjYmx4eVhHNGdJQ0FnWTI5dWJtVmpkQ2dwSUh0Y2NseHVJQ0FnSUNBZ0lDQjBhR2x6TG5OdlkydGxkQ0E5SUc1bGR5QlRiMk5yWlhRb2RHaHBjeXdnZEdocGN5NXZjSFJwYjI1ekxtaHZjM1FwTzF4eVhHNGdJQ0FnZlZ4eVhHNWNjbHh1SUNBZ0lITjFZbk5qY21saVpTaGphR0Z1Ym1Wc1gyNWhiV1VwSUh0Y2NseHVJQ0FnSUNBZ0lDQnlaWFIxY200Z2RHaHBjeTVqYUdGdWJtVnNjeTVoWkdRb1kyaGhibTVsYkY5dVlXMWxMQ0IwYUdsektUdGNjbHh1SUNBZ0lIMWNjbHh1WEhKY2JpQWdJQ0IxYm5OMVluTmpjbWxpWlNoamFHRnVibVZzWDI1aGJXVXBJSHRjY2x4dUlDQWdJQ0FnSUNCMGFHbHpMbU5vWVc1dVpXeHpMbkpsYlc5MlpTaGphR0Z1Ym1Wc1gyNWhiV1VwTzF4eVhHNGdJQ0FnZlZ4eVhHNWNjbHh1SUNBZ0lHZGxkRk52WTJ0bGRFbGtLQ2tnZTF4eVhHNGdJQ0FnSUNBZ0lISmxkSFZ5YmlCMGFHbHpMbk52WTJ0bGRDNXpiMk5yWlhRdWMyOWphMlYwWDJsa08xeHlYRzRnSUNBZ2ZWeHlYRzVjY2x4dUlDQWdJSE5sYm1Rb2FuTnZiaWtnZTF4eVhHNGdJQ0FnSUNBZ0lIUm9hWE11YzI5amEyVjBMbk5sYm1Rb2FuTnZiaWs3WEhKY2JpQWdJQ0I5WEhKY2JseHlYRzRnSUNBZ1kyaGxZMnRCY0hCTFpYa29hMlY1S1NCN1hISmNiaUFnSUNBZ0lDQWdjbVYwZFhKdUlIUnlkV1U3WEhKY2JpQWdJQ0I5WEhKY2JseHlYRzRnSUNBZ1lYVjBhQ2h1WVcxbExDQmpZV3hzWW1GamF5a2dlMXh5WEc0Z0lDQWdJQ0FnSUd4bGRDQnRaWFJvYjJRZ1BTQjBhR2x6TG05d2RHbHZibk11WVhWMGFDNXRaWFJvYjJRZ2ZId2dKM0J2YzNRbk8xeHlYRzRnSUNBZ0lDQWdJR3hsZENCa1lYUmhJRDBnZTMwN1hISmNiaUFnSUNBZ0lDQWdiR1YwSUhCaGNtRnRjeUE5SUh0OU8xeHlYRzVjY2x4dUlDQWdJQ0FnSUNCcFppQW9iV1YwYUc5a0lEMDlJQ2R3YjNOMEp5a2dlMXh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQmtZWFJoSUQwZ1QySnFaV04wTG1GemMybG5iaWg3WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCamFHRnVibVZzWDI1aGJXVTZJRzVoYldVc1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQnpiMk5yWlhSZmFXUTZJSFJvYVhNdVoyVjBVMjlqYTJWMFNXUW9LVnh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQjlLVHRjY2x4dUlDQWdJQ0FnSUNCOUlHVnNjMlVnZTF4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0J3WVhKaGJYTWdQU0JQWW1wbFkzUXVZWE56YVdkdUtIdGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR05vWVc1dVpXeGZibUZ0WlRvZ2JtRnRaU3hjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUhOdlkydGxkRjlwWkRvZ2RHaHBjeTVuWlhSVGIyTnJaWFJKWkNncFhISmNiaUFnSUNBZ0lDQWdJQ0FnSUgwcE8xeHlYRzRnSUNBZ0lDQWdJSDFjY2x4dVhISmNiaUFnSUNBZ0lDQWdZWGhwYjNNb2UxeHlYRzRnSUNBZ0lDQWdJQ0FnSUNCMWNtdzZJSFJvYVhNdWIzQjBhVzl1Y3k1aGRYUm9MblZ5YkN4Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnYldWMGFHOWtPaUJ0WlhSb2IyUXNYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lHaGxZV1JsY25NNklIUm9hWE11YjNCMGFXOXVjeTVoZFhSb0xtaGxZV1JsY25NZ2ZId2dlMzBzWEhKY2JpQWdJQ0FnSUNBZ0lDQWdJSEJoY21GdGN6b2djR0Z5WVcxekxGeHlYRzRnSUNBZ0lDQWdJQ0FnSUNCa1lYUmhPaUJrWVhSaFhISmNiaUFnSUNBZ0lDQWdmU2t1ZEdobGJpZ29aU2tnUFQ0Z2UxeHlYRzRnSUNBZ0lDQWdJQ0FnSUNCallXeHNZbUZqYXlobEtWeHlYRzRnSUNBZ0lDQWdJSDBwTG1OaGRHTm9LQ2hsS1NBOVBpQjdYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lHTnZibk52YkdVdVpYSnliM0lvSitlbmdlYWNpZW1pa2VtQmsrYWRnK21aa09TNGplaTJzeUVuS1R0Y2NseHVJQ0FnSUNBZ0lDQjlLVHRjY2x4dUlDQWdJSDFjY2x4dWZWeHlYRzVjY2x4dWQybHVaRzkzTGxCMWMyaGxjaUE5SUZCMWMyaGxjanNpWFN3aWMyOTFjbU5sVW05dmRDSTZJaUo5IiwiaW1wb3J0IHtEaXNwYXRjaGVyfSBmcm9tIFwiLi4vZXZlbnRzL2Rpc3BhdGNoZXJcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBDaGFubmVsIGV4dGVuZHMgRGlzcGF0Y2hlciB7XHJcbiAgICBjb25zdHJ1Y3RvcihuYW1lLCBwdXNoZXIpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG5cclxuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgICAgIHRoaXMucHVzaGVyID0gcHVzaGVyO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5wdXNoZXIuc29ja2V0LnN0YXRlID09IDEpIHtcclxuICAgICAgICAgICAgdGhpcy5zdWJzY3JpYmUoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc3Vic2NyaWJlKCkge1xyXG4gICAgICAgIHRoaXMucHVzaGVyLnNlbmQoe1xyXG4gICAgICAgICAgICBldmVudDogJ3N1YnNjcmliZScsXHJcbiAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgIGNoYW5uZWw6IHRoaXMubmFtZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQge0Rpc3BhdGNoZXJ9IGZyb20gXCIuLi9ldmVudHMvZGlzcGF0Y2hlclwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFByZXNlbmNlQ2hhbm5lbCBleHRlbmRzIERpc3BhdGNoZXIge1xyXG4gICAgY29uc3RydWN0b3IobmFtZSwgcHVzaGVyKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuXHJcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICAgICAgICB0aGlzLnB1c2hlciA9IHB1c2hlcjtcclxuICAgICAgICB0aGlzLmF1dGggPSBudWxsO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5wdXNoZXIuc29ja2V0LnN0YXRlID09IDEpIHtcclxuICAgICAgICAgICAgdGhpcy5zdWJzY3JpYmUoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc3Vic2NyaWJlKCkge1xyXG4gICAgICAgIHRoaXMucHVzaGVyLmF1dGgodGhpcy5uYW1lLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmF1dGggPSBlLmRhdGEuYXV0aDtcclxuXHJcbiAgICAgICAgICAgIHRoaXMucHVzaGVyLnNlbmQoe1xyXG4gICAgICAgICAgICAgICAgZXZlbnQ6ICdzdWJzY3JpYmUnLFxyXG4gICAgICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgICAgIGNoYW5uZWw6IHRoaXMubmFtZSxcclxuICAgICAgICAgICAgICAgICAgICBhdXRoOiB0aGlzLmF1dGgsXHJcbiAgICAgICAgICAgICAgICAgICAgY2hhbm5lbF9kYXRhOiBlLmRhdGEuY2hhbm5lbF9kYXRhXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHtEaXNwYXRjaGVyfSBmcm9tIFwiLi4vZXZlbnRzL2Rpc3BhdGNoZXJcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBQcml2YXRlQ2hhbm5lbCBleHRlbmRzIERpc3BhdGNoZXIge1xyXG4gICAgY29uc3RydWN0b3IobmFtZSwgcHVzaGVyKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuXHJcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICAgICAgICB0aGlzLnB1c2hlciA9IHB1c2hlcjtcclxuICAgICAgICB0aGlzLmF1dGggPSBudWxsO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5wdXNoZXIuc29ja2V0LnN0YXRlID09IDEpIHtcclxuICAgICAgICAgICAgdGhpcy5zdWJzY3JpYmUoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc3Vic2NyaWJlKCkge1xyXG4gICAgICAgIHRoaXMucHVzaGVyLmF1dGgodGhpcy5uYW1lLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmF1dGggPSBlLmRhdGEuYXV0aDtcclxuXHJcbiAgICAgICAgICAgIHRoaXMucHVzaGVyLnNlbmQoe1xyXG4gICAgICAgICAgICAgICAgZXZlbnQ6ICdzdWJzY3JpYmUnLFxyXG4gICAgICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgICAgIGNoYW5uZWw6IHRoaXMubmFtZSxcclxuICAgICAgICAgICAgICAgICAgICBhdXRoOiB0aGlzLmF1dGhcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn0iLCJleHBvcnQgY2xhc3MgQ2FsbGJhY2tSZWdpc3RyeSB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLl9jYWxsYmFja3MgPSB7fTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQobmFtZSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9jYWxsYmFja3NbcHJlZml4KG5hbWUpXTtcclxuICAgIH1cclxuXHJcbiAgICBhZGQobmFtZSwgY2FsbGJhY2ssIGNvbnRleHQpIHtcclxuICAgICAgICBsZXQgcHJlZml4ZWRFdmVudE5hbWUgPSBwcmVmaXgobmFtZSk7XHJcbiAgICAgICAgdGhpcy5fY2FsbGJhY2tzW3ByZWZpeGVkRXZlbnROYW1lXSA9IHRoaXMuX2NhbGxiYWNrc1twcmVmaXhlZEV2ZW50TmFtZV0gfHwgW107XHJcbiAgICAgICAgdGhpcy5fY2FsbGJhY2tzW3ByZWZpeGVkRXZlbnROYW1lXS5wdXNoKHtcclxuICAgICAgICAgICAgZm46IGNhbGxiYWNrLFxyXG4gICAgICAgICAgICBjb250ZXh0OiBjb250ZXh0XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVtb3ZlKG5hbWUsIGNhbGxiYWNrLCBjb250ZXh0KSB7XHJcbiAgICAgICAgaWYgKCFuYW1lICYmICFjYWxsYmFjayAmJiAhY29udGV4dCkge1xyXG4gICAgICAgICAgICB0aGlzLl9jYWxsYmFja3MgPSB7fTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIG5hbWVzID0gbmFtZSA/IFtwcmVmaXgobmFtZSldIDogT2JqZWN0LmtleXModGhpcy5fY2FsbGJhY2tzKTtcclxuXHJcbiAgICAgICAgaWYgKGNhbGxiYWNrIHx8IGNvbnRleHQpIHtcclxuICAgICAgICAgICAgdGhpcy5yZW1vdmVDYWxsYmFjayhuYW1lcywgY2FsbGJhY2ssIGNvbnRleHQpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlQWxsQ2FsbGJhY2tzKG5hbWVzKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmVtb3ZlQ2FsbGJhY2sobmFtZXMsIGNhbGxiYWNrLCBjb250ZXh0KSB7XHJcbiAgICAgICAgZm9yIChsZXQgbmFtZSBpbiBuYW1lcykge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBrZXkgaW4gdGhpcy5fY2FsbGJhY2tzW25hbWVdKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fY2FsbGJhY2tzW25hbWVdW2tleV0uZm4gPT0gY2FsbGJhY2sgfHwgdGhpcy5fY2FsbGJhY2tzW25hbWVdW2tleV0uY29udGV4dCA9PSBjb250ZXh0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIHRoaXMuX2NhbGxiYWNrc1tuYW1lXVtrZXldO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5fY2FsbGJhY2tzW25hbWVdLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgZGVsZXRlIHRoaXMuX2NhbGxiYWNrc1tuYW1lXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZW1vdmVBbGxDYWxsYmFja3MobmFtZXMpIHtcclxuICAgICAgICBmb3IgKGxldCBuYW1lIGluIG5hbWVzKSB7XHJcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLl9jYWxsYmFja3NbbmFtZV07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBwcmVmaXgobmFtZSkge1xyXG4gICAgcmV0dXJuIFwiX1wiICsgbmFtZTtcclxufSIsImltcG9ydCB7Q2FsbGJhY2tSZWdpc3RyeX0gZnJvbSAnLi9jYWxsYmFja19yZWdpc3RyeSc7XHJcblxyXG5leHBvcnQgY2xhc3MgRGlzcGF0Y2hlciB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLmNhbGxiYWNrcyA9IG5ldyBDYWxsYmFja1JlZ2lzdHJ5KCk7XHJcbiAgICAgICAgdGhpcy5nbG9iYWxfY2FsbGJhY2tzID0gW107XHJcbiAgICB9XHJcblxyXG4gICAgYmluZChldmVudE5hbWUsIGNhbGxiYWNrLCBjb250ZXh0KSB7XHJcbiAgICAgICAgdGhpcy5jYWxsYmFja3MuYWRkKGV2ZW50TmFtZSwgY2FsbGJhY2ssIGNvbnRleHQpO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIGJpbmRfZ2xvYmFsKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgdGhpcy5nbG9iYWxfY2FsbGJhY2tzLnB1c2goY2FsbGJhY2spO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHVuYmluZChldmVudE5hbWUsIGNhbGxiYWNrLCBjb250ZXh0KSB7XHJcbiAgICAgICAgdGhpcy5jYWxsYmFja3MucmVtb3ZlKGV2ZW50TmFtZSwgY2FsbGJhY2ssIGNvbnRleHQpO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHVuYmluZF9nbG9iYWwoY2FsbGJhY2spIHtcclxuICAgICAgICBpZiAoIWNhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZ2xvYmFsX2NhbGxiYWNrcyA9IFtdO1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgaW4gdGhpcy5nbG9iYWxfY2FsbGJhY2tzKSB7XHJcbiAgICAgICAgICAgIGlmIChjYWxsYmFjayA9PSB0aGlzLmdsb2JhbF9jYWxsYmFja3NbaV0pIHtcclxuICAgICAgICAgICAgICAgIGRlbGV0ZSB0aGlzLmdsb2JhbF9jYWxsYmFja3NbaV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgdW5iaW5kX2FsbCgpIHtcclxuICAgICAgICB0aGlzLnVuYmluZCgpO1xyXG4gICAgICAgIHRoaXMudW5iaW5kX2dsb2JhbCgpO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIGVtaXQoZXZlbnROYW1lLCBkYXRhKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmdsb2JhbF9jYWxsYmFja3MubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgdGhpcy5nbG9iYWxfY2FsbGJhY2tzW2ldKGV2ZW50TmFtZSwgZGF0YSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2YXIgY2FsbGJhY2tzID0gdGhpcy5jYWxsYmFja3MuZ2V0KGV2ZW50TmFtZSk7XHJcbiAgICAgICAgaWYgKGNhbGxiYWNrcyAmJiBjYWxsYmFja3MubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNhbGxiYWNrcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgY2FsbGJhY2tzW2ldLmZuLmNhbGwoY2FsbGJhY2tzW2ldLmNvbnRleHQsIGRhdGEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxufSIsImltcG9ydCB7RWNob30gZnJvbSAnLi9lY2hvJ1xyXG5cclxud2luZG93LkVjaG8gPSBuZXcgRWNobygnYjgyMzkzZDg4NmEwZTZkZGZhZTUnLCB7XHJcbiAgICBob3N0OiAnd3M6Ly8xOTIuMTY4LjEwLjEwOjgwODEnLFxyXG4gICAgYXV0aDoge1xyXG4gICAgICAgIG1ldGhvZDogJ3Bvc3QnLFxyXG4gICAgICAgIHVybDogJ2h0dHA6Ly90ZXN0cy50ZXN0L2FwaS9wdXNoZXIvYXV0aCcsXHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgICAnQXV0aG9yaXphdGlvbic6ICdCZWFyZXIgZXlKMGVYQWlPaUpLVjFRaUxDSmhiR2NpT2lKSVV6STFOaUo5LmV5SnBjM01pT2lKb2RIUndPbHd2WEM5MFpYTjBjeTUwWlhOMElpd2lhV0YwSWpveE5UTTVNalUwTWpjekxDSmxlSEFpT2pFMU16a3lOVGM0TnpNc0ltNWlaaUk2TVRVek9USTFOREkzTXl3aWFuUnBJam9pUzJsdlVXWllkMmhMYzBNNFJUZEVaQ0lzSW5OMVlpSTZNaXdpY0hKMklqb2lPRGRsTUdGbU1XVm1PV1prTVRVNE1USm1aR1ZqT1RjeE5UTmhNVFJsTUdJd05EYzFORFpoWVNKOS5KdzExYUVQcWU4S09jQmhLdzJmN2pDYU90RjB0ZFFCTl9UUE83cGIxZEVvJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHBhcmFtczoge31cclxuICAgIH0sXHJcbn0pXHJcblxyXG4vKndpbmRvdy5FY2hvLmNoYW5uZWwoJ29yZGVyJykubGlzdGVuKCduZXcnLCAoZSkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coZSlcclxufSkubGlzdGVuKCdtYWtlJywgKGUpID0+IHtcclxufSk7Ki9cclxuXHJcblxyXG53aW5kb3cuRWNoby5wcml2YXRlKCd1c2VyLjEnKS5saXN0ZW4oJ2EnLCAoZSkgPT4ge1xyXG4gICAgYWxlcnQoJ2FhYScpO1xyXG59KS5saXN0ZW4oJ2InLCAoZSkgPT4ge1xyXG4gICAgYWxlcnQoJ2JiYicpO1xyXG59KTtcclxuXHJcbndpbmRvdy5FY2hvLmpvaW4oYGNoYXQuMWApXHJcbiAgICAuaGVyZSgodXNlcnMpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZygn5YWo6YOo5Lq65ZGYJyk7XHJcbiAgICAgICAgY29uc29sZS5sb2codXNlcnMpXHJcbiAgICB9KVxyXG4gICAgLmpvaW5pbmcoKHVzZXIpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZygn5paw5Lq65Yqg5YWlJyk7XHJcbiAgICAgICAgY29uc29sZS5sb2codXNlcik7XHJcbiAgICB9KVxyXG4gICAgLmxlYXZpbmcoKHVzZXIpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZygn5pyJ5Lq66YCA5Ye6Jyk7XHJcbiAgICAgICAgY29uc29sZS5sb2codXNlcik7XHJcbiAgICB9KS5saXN0ZW4oJ05ld01lc3NhZ2UnLCAoZSkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coZSk7XHJcbn0pO1xyXG4iLCJleHBvcnQgY2xhc3MgQ2hhbm5lbCB7XHJcbiAgICBjb25zdHJ1Y3RvcihwdXNoZXIsIG5hbWUpIHtcclxuICAgICAgICB0aGlzLnB1c2hlciA9IHB1c2hlcjtcclxuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG5cclxuICAgICAgICB0aGlzLnN1YnNjcmliZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHN1YnNjcmliZSgpIHtcclxuICAgICAgICB0aGlzLnN1YnNjcmlwdGlvbiA9IHRoaXMucHVzaGVyLnN1YnNjcmliZSh0aGlzLm5hbWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHVuc3Vic2NyaWJlKCkge1xyXG4gICAgICAgIHRoaXMucHVzaGVyLnVuc3Vic2NyaWJlKHRoaXMubmFtZSk7XHJcbiAgICB9XHJcblxyXG4gICAgbGlzdGVuKGV2ZW50LCBjYWxsYmFjaykge1xyXG4gICAgICAgIHRoaXMub24oZXZlbnQsIGNhbGxiYWNrKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgc3RvcExpc3RlbmluZyhldmVudCkge1xyXG4gICAgICAgIHRoaXMuc3Vic2NyaXB0aW9uLnVuYmluZChldmVudCk7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIG9uKGV2ZW50LCBjYWxsYmFjaykge1xyXG4gICAgICAgIHRoaXMuc3Vic2NyaXB0aW9uLmJpbmQoZXZlbnQsIGNhbGxiYWNrKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgd2hpc3BlcihldmVudCwgZGF0YSkge1xyXG4gICAgICAgIHRoaXMucHVzaGVyLnNlbmQoe1xyXG4gICAgICAgICAgICBjaGFubmVsOiB0aGlzLm5hbWUsXHJcbiAgICAgICAgICAgIGRhdGE6IGRhdGEsXHJcbiAgICAgICAgICAgIGV2ZW50OiAnY2xpZW50LScgKyBldmVudFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBsaXN0ZW5Gb3JXaGlzcGVyKGV2ZW50LCBjYWxsYmFjaykge1xyXG4gICAgICAgIHRoaXMub24oJ2NsaWVudC0nICsgZXZlbnQsIGNhbGxiYWNrKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQge0NoYW5uZWx9IGZyb20gXCIuL2NoYW5uZWxcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBQdXNoZXJDaGFubmVsIGV4dGVuZHMgQ2hhbm5lbCB7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAcGFyYW0gcHVzaGVyXHJcbiAgICAgKiBAcGFyYW0gY2hhbm5lbFxyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3RvcihwdXNoZXIsIG5hbWUpIHtcclxuICAgICAgICBzdXBlcihwdXNoZXIsIG5hbWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbn0iLCJpbXBvcnQge0NoYW5uZWx9IGZyb20gXCIuL2NoYW5uZWxcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBQdXNoZXJQcmVzZW5jZUNoYW5uZWwgZXh0ZW5kcyBDaGFubmVsIHtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEBwYXJhbSBwdXNoZXJcclxuICAgICAqIEBwYXJhbSBjaGFubmVsXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKHB1c2hlciwgbmFtZSkge1xyXG4gICAgICAgIHN1cGVyKHB1c2hlciwgbmFtZSk7XHJcbiAgICB9XHJcblxyXG4gICAgaGVyZShjYWxsYmFjaykge1xyXG4gICAgICAgIGxldCBiYWNrID0gKGUpID0+IHtcclxuICAgICAgICAgICAgY2FsbGJhY2soZS5wcmVzZW5jZSlcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5vbignc3Vic2NyaXB0aW9uX3N1Y2NlZWRlZCcsIGJhY2spO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIGpvaW5pbmcoY2FsbGJhY2spIHtcclxuICAgICAgICB0aGlzLm9uKCdtZW1iZXJfYWRkZWQnLCBjYWxsYmFjayk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgbGVhdmluZyhjYWxsYmFjaykge1xyXG4gICAgICAgIHRoaXMub24oJ21lbWJlcl9yZW1vdmVkJywgY2FsbGJhY2spO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHtDaGFubmVsfSBmcm9tIFwiLi9jaGFubmVsXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgUHVzaGVyUHJpdmF0ZUNoYW5uZWwgZXh0ZW5kcyBDaGFubmVsIHtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEBwYXJhbSBwdXNoZXJcclxuICAgICAqIEBwYXJhbSBjaGFubmVsXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKHB1c2hlciwgbmFtZSkge1xyXG4gICAgICAgIHN1cGVyKHB1c2hlciwgbmFtZSk7XHJcbiAgICB9XHJcblxyXG59IiwiaW1wb3J0ICdsdWZmeS1wdXNoZXInO1xyXG5pbXBvcnQge1B1c2hlckNoYW5uZWx9IGZyb20gXCIuLi9jaGFubmVsL3B1c2hlci1jaGFubmVsXCI7XHJcbmltcG9ydCB7UHVzaGVyUHJpdmF0ZUNoYW5uZWx9IGZyb20gXCIuLi9jaGFubmVsL3B1c2hlci1wcml2YXRlLWNoYW5uZWxcIjtcclxuaW1wb3J0IHtQdXNoZXJQcmVzZW5jZUNoYW5uZWx9IGZyb20gXCIuLi9jaGFubmVsL3B1c2hlci1wcmVzZW5jZS1jaGFubmVsXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgUHVzaGVyQ29ubmVjdG9yIHtcclxuICAgIGNvbnN0cnVjdG9yKGFwcF9rZXksIG9wdGlvbnMpIHtcclxuICAgICAgICB0aGlzLnB1c2hlciA9IG5ldyBQdXNoZXIoYXBwX2tleSwgb3B0aW9ucyk7XHJcbiAgICAgICAgdGhpcy5jaGFubmVscyA9IHt9O1xyXG4gICAgfVxyXG5cclxuICAgIGNoYW5uZWwoY2hhbm5lbCkge1xyXG4gICAgICAgIGlmICh0aGlzLmNoYW5uZWxzW2NoYW5uZWxdID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5jaGFubmVsc1tjaGFubmVsXSA9IG5ldyBQdXNoZXJDaGFubmVsKHRoaXMucHVzaGVyLCBjaGFubmVsKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLmNoYW5uZWxzW2NoYW5uZWxdO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGVDaGFubmVsKGNoYW5uZWwpIHtcclxuICAgICAgICBpZiAodGhpcy5jaGFubmVsc1sncHJpdmF0ZS0nICsgY2hhbm5lbF0gPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB0aGlzLmNoYW5uZWxzWydwcml2YXRlLScgKyBjaGFubmVsXSA9IG5ldyBQdXNoZXJQcml2YXRlQ2hhbm5lbCh0aGlzLnB1c2hlciwgJ3ByaXZhdGUtJyArIGNoYW5uZWwpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy5jaGFubmVsc1sncHJpdmF0ZS0nICsgY2hhbm5lbF07XHJcbiAgICB9XHJcblxyXG4gICAgcHJlc2VuY2VDaGFubmVsKGNoYW5uZWwpIHtcclxuICAgICAgICBpZiAodGhpcy5jaGFubmVsc1sncHJlc2VuY2UtJyArIGNoYW5uZWxdID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5jaGFubmVsc1sncHJlc2VuY2UtJyArIGNoYW5uZWxdID0gbmV3IFB1c2hlclByZXNlbmNlQ2hhbm5lbCh0aGlzLnB1c2hlciwgJ3ByZXNlbmNlLScgKyBjaGFubmVsKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY2hhbm5lbHNbJ3ByZXNlbmNlLScgKyBjaGFubmVsXTtcclxuICAgIH1cclxufSIsImltcG9ydCB7UHVzaGVyQ29ubmVjdG9yfSBmcm9tIFwiLi9jb25uZWN0b3IvcHVzaGVyX2Nvbm5lY3RvclwiO1xyXG5pbXBvcnQge1ByaXZhdGVDaGFubmVsfSBmcm9tIFwibHVmZnktcHVzaGVyL3NyYy9jaGFubmVscy9wcml2YXRlX2NoYW5uZWxcIjtcclxuaW1wb3J0IHtQcmVzZW5jZUNoYW5uZWx9IGZyb20gXCJsdWZmeS1wdXNoZXIvc3JjL2NoYW5uZWxzL3ByZXNlbmNlX2NoYW5uZWxcIjtcclxuaW1wb3J0IHtDaGFubmVsfSBmcm9tIFwibHVmZnktcHVzaGVyL3NyYy9jaGFubmVscy9jaGFubmVsXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgRWNobyB7XHJcbiAgICBjb25zdHJ1Y3RvcihhcHBrZXksIG9wdGlvbnMpIHtcclxuICAgICAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xyXG4gICAgICAgIHRoaXMuY29ubmVjdG9yID0gbmV3IFB1c2hlckNvbm5lY3RvcihhcHBrZXksIHRoaXMub3B0aW9ucyk7XHJcbiAgICB9XHJcblxyXG4gICAgY2hhbm5lbChjaGFubmVsKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY29ubmVjdG9yLmNoYW5uZWwoY2hhbm5lbCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZShjaGFubmVsKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY29ubmVjdG9yLnByaXZhdGVDaGFubmVsKGNoYW5uZWwpO1xyXG4gICAgfVxyXG5cclxuICAgIGpvaW4oY2hhbm5lbCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNvbm5lY3Rvci5wcmVzZW5jZUNoYW5uZWwoY2hhbm5lbCk7XHJcbiAgICB9XHJcblxyXG4gICAgc3Vic2NyaWJlKG5hbWUpIHtcclxuICAgICAgICBpZiAobmFtZS5pbmRleE9mKCdwcml2YXRlLScpID09PSAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnByaXZhdGUobmFtZSk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChuYW1lLmluZGV4T2YoJ3ByZXNlbmNlLScpID09PSAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmpvaW4obmFtZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY2hhbm5lbChuYW1lKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDpgIDlh7rpopHpgZMs5pqC55WZXHJcbiAgICAgKiBAcGFyYW0gY2hhbm5lbFxyXG4gICAgICovXHJcbiAgICBsZWF2ZShjaGFubmVsKSB7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbn1cclxuXHJcbndpbmRvdy5FY2hvID0gRWNobztcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==
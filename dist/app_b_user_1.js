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
      this.bind('authorization_success', function (e) {
        _this3.socket.socket_id = e.socket_id;
        _this3.state = 1; //订阅

        _this3.pusher.channels.subscribe();
      });
      this.bind('authorization_error', function (e) {
        _this3.state = -1;
        console.error(e.error);
      });
      this.send({
        event: 'authorization'
      });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvYWRhcHRlcnMveGhyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvYXhpb3MuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jYW5jZWwvQ2FuY2VsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY2FuY2VsL0NhbmNlbFRva2VuLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY2FuY2VsL2lzQ2FuY2VsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9BeGlvcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvSW50ZXJjZXB0b3JNYW5hZ2VyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9jcmVhdGVFcnJvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvZGlzcGF0Y2hSZXF1ZXN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9lbmhhbmNlRXJyb3IuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL3NldHRsZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvdHJhbnNmb3JtRGF0YS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2RlZmF1bHRzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9iaW5kLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9idG9hLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9idWlsZFVSTC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvY29tYmluZVVSTHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2Nvb2tpZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2lzQWJzb2x1dGVVUkwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2lzVVJMU2FtZU9yaWdpbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvbm9ybWFsaXplSGVhZGVyTmFtZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvcGFyc2VIZWFkZXJzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9zcHJlYWQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi91dGlscy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaXMtYnVmZmVyL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9wcm9jZXNzL2Jyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NoYW5uZWxzL2NoYW5uZWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NoYW5uZWxzL21hbm5hZ2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9jaGFubmVscy9wcmVzZW5jZV9jaGFubmVsLmpzIiwid2VicGFjazovLy8uL3NyYy9jaGFubmVscy9wcml2YXRlX2NoYW5uZWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Nvbm5lY3Rpb24vc29ja2V0LmpzIiwid2VicGFjazovLy8uL3NyYy9ldmVudHMvY2FsbGJhY2tfcmVnaXN0cnkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2V2ZW50cy9kaXNwYXRjaGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9wdXNoZXIuanMiXSwibmFtZXMiOlsiQ2hhbm5lbCIsIm5hbWUiLCJwdXNoZXIiLCJzb2NrZXQiLCJzdGF0ZSIsInN1YnNjcmliZSIsInNlbmQiLCJldmVudCIsImRhdGEiLCJjaGFubmVsIiwiRGlzcGF0Y2hlciIsIk1hbm5hZ2VyIiwiY2hhbm5lbHMiLCJjcmVhdGVDaGFubmVsIiwiT2JqZWN0Iiwia2V5cyIsImkiLCJpbmRleE9mIiwiUHJpdmF0ZUNoYW5uZWwiLCJQcmVzZW5jZUNoYW5uZWwiLCJhdXRoIiwiZSIsImNoYW5uZWxfZGF0YSIsIlNvY2tldCIsImhvc3QiLCJXZWJTb2NrZXQiLCJrZXkiLCJiaW5kTGlzdGVuZXJzIiwib25vcGVuIiwib25PcGVuIiwib25lcnJvciIsImVycm9yIiwib25FcnJvciIsIm9uY2xvc2UiLCJjbG9zZUV2ZW50Iiwib25DbG9zZSIsIm9ubWVzc2FnZSIsIm1lc3NhZ2UiLCJvbk1lc3NhZ2UiLCJiaW5kIiwic29ja2V0X2lkIiwiY29uc29sZSIsInJlYWR5U3RhdGUiLCJDTE9TRUQiLCJ0eXBlIiwiZURhdGEiLCJKU09OIiwicGFyc2UiLCJ1bmRlZmluZWQiLCJmaW5kIiwiZW1pdCIsImpzb24iLCJzdHJpbmdpZnkiLCJDYWxsYmFja1JlZ2lzdHJ5IiwiX2NhbGxiYWNrcyIsInByZWZpeCIsImNhbGxiYWNrIiwiY29udGV4dCIsInByZWZpeGVkRXZlbnROYW1lIiwicHVzaCIsImZuIiwibmFtZXMiLCJyZW1vdmVDYWxsYmFjayIsInJlbW92ZUFsbENhbGxiYWNrcyIsImxlbmd0aCIsImNhbGxiYWNrcyIsImdsb2JhbF9jYWxsYmFja3MiLCJldmVudE5hbWUiLCJhZGQiLCJyZW1vdmUiLCJ1bmJpbmQiLCJ1bmJpbmRfZ2xvYmFsIiwiZ2V0IiwiY2FsbCIsIlB1c2hlciIsImFwcF9rZXkiLCJvcHRpb25zIiwiY2hlY2tBcHBLZXkiLCJkaXNwYXRjaGVyIiwiY29ubmVjdCIsImNoYW5uZWxfbmFtZSIsIm1ldGhvZCIsInBhcmFtcyIsImFzc2lnbiIsImdldFNvY2tldElkIiwiYXhpb3MiLCJ1cmwiLCJoZWFkZXJzIiwidGhlbiIsImNhdGNoIiwid2luZG93Il0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNsRkEsaUJBQWlCLG1CQUFPLENBQUMsc0RBQWEsRTs7Ozs7Ozs7Ozs7O0FDQXpCOztBQUViLFlBQVksbUJBQU8sQ0FBQyxxREFBWTtBQUNoQyxhQUFhLG1CQUFPLENBQUMsaUVBQWtCO0FBQ3ZDLGVBQWUsbUJBQU8sQ0FBQywyRUFBdUI7QUFDOUMsbUJBQW1CLG1CQUFPLENBQUMsbUZBQTJCO0FBQ3RELHNCQUFzQixtQkFBTyxDQUFDLHlGQUE4QjtBQUM1RCxrQkFBa0IsbUJBQU8sQ0FBQyx5RUFBcUI7QUFDL0MseUZBQXlGLG1CQUFPLENBQUMsbUVBQW1COztBQUVwSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDRDQUE0QztBQUM1Qzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsUUFBUSxhQUFvQjtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixtQkFBTyxDQUFDLHlFQUFzQjs7QUFFbEQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7Ozs7Ozs7Ozs7Ozs7QUNuTGE7O0FBRWIsWUFBWSxtQkFBTyxDQUFDLGtEQUFTO0FBQzdCLFdBQVcsbUJBQU8sQ0FBQyxnRUFBZ0I7QUFDbkMsWUFBWSxtQkFBTyxDQUFDLDREQUFjO0FBQ2xDLGVBQWUsbUJBQU8sQ0FBQyx3REFBWTs7QUFFbkM7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFlBQVksTUFBTTtBQUNsQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxlQUFlLG1CQUFPLENBQUMsa0VBQWlCO0FBQ3hDLG9CQUFvQixtQkFBTyxDQUFDLDRFQUFzQjtBQUNsRCxpQkFBaUIsbUJBQU8sQ0FBQyxzRUFBbUI7O0FBRTVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxtQkFBTyxDQUFDLG9FQUFrQjs7QUFFekM7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7OztBQ25EYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7QUNsQmE7O0FBRWIsYUFBYSxtQkFBTyxDQUFDLDJEQUFVOztBQUUvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsU0FBUztBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7QUN4RGE7O0FBRWI7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDSmE7O0FBRWIsZUFBZSxtQkFBTyxDQUFDLDJEQUFlO0FBQ3RDLFlBQVksbUJBQU8sQ0FBQyxxREFBWTtBQUNoQyx5QkFBeUIsbUJBQU8sQ0FBQyxpRkFBc0I7QUFDdkQsc0JBQXNCLG1CQUFPLENBQUMsMkVBQW1COztBQUVqRDtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUEsa0NBQWtDLGNBQWM7QUFDaEQ7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0RBQWdEO0FBQ2hEO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBLGdEQUFnRDtBQUNoRDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxDQUFDOztBQUVEOzs7Ozs7Ozs7Ozs7O0FDOUVhOztBQUViLFlBQVksbUJBQU8sQ0FBQyxxREFBWTs7QUFFaEM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsU0FBUztBQUNwQixXQUFXLFNBQVM7QUFDcEI7QUFDQSxZQUFZLE9BQU87QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxTQUFTO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTs7Ozs7Ozs7Ozs7OztBQ25EYTs7QUFFYixtQkFBbUIsbUJBQU8sQ0FBQyxxRUFBZ0I7O0FBRTNDO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsYUFBYSxNQUFNO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNqQmE7O0FBRWIsWUFBWSxtQkFBTyxDQUFDLHFEQUFZO0FBQ2hDLG9CQUFvQixtQkFBTyxDQUFDLHVFQUFpQjtBQUM3QyxlQUFlLG1CQUFPLENBQUMsdUVBQW9CO0FBQzNDLGVBQWUsbUJBQU8sQ0FBQyx5REFBYTtBQUNwQyxvQkFBb0IsbUJBQU8sQ0FBQyxxRkFBNEI7QUFDeEQsa0JBQWtCLG1CQUFPLENBQUMsaUZBQTBCOztBQUVwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSwrQkFBK0I7QUFDL0IsdUNBQXVDO0FBQ3ZDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRztBQUNIOzs7Ozs7Ozs7Ozs7O0FDckZhOztBQUViO0FBQ0E7QUFDQTtBQUNBLFdBQVcsTUFBTTtBQUNqQixXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsYUFBYSxNQUFNO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDcEJhOztBQUViLGtCQUFrQixtQkFBTyxDQUFDLG1FQUFlOztBQUV6QztBQUNBO0FBQ0E7QUFDQSxXQUFXLFNBQVM7QUFDcEIsV0FBVyxTQUFTO0FBQ3BCLFdBQVcsT0FBTztBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDekJhOztBQUViLFlBQVksbUJBQU8sQ0FBQyxxREFBWTs7QUFFaEM7QUFDQTtBQUNBO0FBQ0EsV0FBVyxjQUFjO0FBQ3pCLFdBQVcsTUFBTTtBQUNqQixXQUFXLGVBQWU7QUFDMUIsYUFBYSxFQUFFO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTs7Ozs7Ozs7Ozs7OztBQ25CQSwrQ0FBYTs7QUFFYixZQUFZLG1CQUFPLENBQUMsa0RBQVM7QUFDN0IsMEJBQTBCLG1CQUFPLENBQUMsOEZBQStCOztBQUVqRTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsbUJBQU8sQ0FBQyxnRUFBZ0I7QUFDdEMsR0FBRztBQUNIO0FBQ0EsY0FBYyxtQkFBTyxDQUFDLGlFQUFpQjtBQUN2QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3RUFBd0U7QUFDeEU7QUFDQTtBQUNBO0FBQ0EsdURBQXVEO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sWUFBWTtBQUNuQjtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDs7Ozs7Ozs7Ozs7Ozs7QUMvRmE7O0FBRWI7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLGlCQUFpQjtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDVmE7O0FBRWI7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7OztBQ25DYTs7QUFFYixZQUFZLG1CQUFPLENBQUMscURBQVk7O0FBRWhDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsYUFBYSxPQUFPO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDakVhOztBQUViO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsYUFBYSxPQUFPO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ2JhOztBQUViLFlBQVksbUJBQU8sQ0FBQyxxREFBWTs7QUFFaEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLHdDQUF3QztBQUN4QyxPQUFPOztBQUVQO0FBQ0EsMERBQTBELHdCQUF3QjtBQUNsRjtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQztBQUNoQyw2QkFBNkIsYUFBYSxFQUFFO0FBQzVDO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7Ozs7Ozs7Ozs7Ozs7QUNwRGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ2JhOztBQUViLFlBQVksbUJBQU8sQ0FBQyxxREFBWTs7QUFFaEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsY0FBYyxPQUFPO0FBQ3JCLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsT0FBTztBQUNyQixnQkFBZ0IsUUFBUTtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7Ozs7Ozs7Ozs7Ozs7QUNuRWE7O0FBRWIsWUFBWSxtQkFBTyxDQUFDLG1EQUFVOztBQUU5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7Ozs7Ozs7Ozs7Ozs7QUNYYTs7QUFFYixZQUFZLG1CQUFPLENBQUMscURBQVk7O0FBRWhDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsYUFBYSxPQUFPO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpQkFBaUIsZUFBZTs7QUFFaEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTs7Ozs7Ozs7Ozs7OztBQ3BEYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCO0FBQy9CO0FBQ0E7QUFDQSxXQUFXLFNBQVM7QUFDcEIsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQzFCYTs7QUFFYixXQUFXLG1CQUFPLENBQUMsZ0VBQWdCO0FBQ25DLGVBQWUsbUJBQU8sQ0FBQyxvREFBVzs7QUFFbEM7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLGFBQWE7QUFDeEIsV0FBVyxTQUFTO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxtQ0FBbUMsT0FBTztBQUMxQztBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsU0FBUyxHQUFHLFNBQVM7QUFDNUMsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsYUFBYSxPQUFPO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUEsdUNBQXVDLE9BQU87QUFDOUM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsWUFBWSxPQUFPO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUM5U0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNwQkE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixzQkFBc0I7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHFDQUFxQzs7QUFFckM7QUFDQTtBQUNBOztBQUVBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsVUFBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZMdEM7QUFFTyxJQUFNQSxPQUFiO0FBQUE7QUFBQTtBQUFBOztBQUNJLG1CQUFZQyxJQUFaLEVBQWtCQyxNQUFsQixFQUEwQjtBQUFBOztBQUFBOztBQUN0QjtBQUVBLFVBQUtELElBQUwsR0FBWUEsSUFBWjtBQUNBLFVBQUtDLE1BQUwsR0FBY0EsTUFBZDs7QUFFQSxRQUFJLE1BQUtBLE1BQUwsQ0FBWUMsTUFBWixDQUFtQkMsS0FBbkIsSUFBNEIsQ0FBaEMsRUFBbUM7QUFDL0IsWUFBS0MsU0FBTDtBQUNIOztBQVJxQjtBQVN6Qjs7QUFWTDtBQUFBO0FBQUEsZ0NBWWdCO0FBQ1IsV0FBS0gsTUFBTCxDQUFZSSxJQUFaLENBQWlCO0FBQ2JDLGFBQUssRUFBRSxXQURNO0FBRWJDLFlBQUksRUFBRTtBQUNGQyxpQkFBTyxFQUFFLEtBQUtSO0FBRFo7QUFGTyxPQUFqQjtBQU1IO0FBbkJMOztBQUFBO0FBQUEsRUFBNkJTLDZEQUE3QixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0ZBO0FBQ0E7QUFDQTtBQUVPLElBQU1DLFFBQWI7QUFBQTtBQUFBO0FBQ0ksc0JBQWM7QUFBQTs7QUFDVixTQUFLQyxRQUFMLEdBQWdCLEVBQWhCO0FBQ0g7O0FBSEw7QUFBQTtBQUFBLHdCQUtRWCxJQUxSLEVBS2NDLE1BTGQsRUFLc0I7QUFDZCxVQUFJLENBQUMsS0FBS1UsUUFBTCxDQUFjWCxJQUFkLENBQUwsRUFBMEI7QUFDdEIsYUFBS1csUUFBTCxDQUFjWCxJQUFkLElBQXNCWSxhQUFhLENBQUNaLElBQUQsRUFBT0MsTUFBUCxDQUFuQztBQUNIOztBQUNELGFBQU8sS0FBS1UsUUFBTCxDQUFjWCxJQUFkLENBQVA7QUFDSDtBQVZMO0FBQUE7QUFBQSwwQkFZVTtBQUNGLGFBQU9hLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZLEtBQUtILFFBQWpCLENBQVA7QUFDSDtBQWRMO0FBQUE7QUFBQSx5QkFnQlNYLElBaEJULEVBZ0JlO0FBQ1AsYUFBTyxLQUFLVyxRQUFMLENBQWNYLElBQWQsQ0FBUDtBQUNIO0FBbEJMO0FBQUE7QUFBQSwyQkFvQldBLElBcEJYLEVBb0JpQjtBQUNULFVBQUlRLE9BQU8sR0FBRyxLQUFLRyxRQUFMLENBQWNYLElBQWQsQ0FBZDtBQUNBLGFBQU8sS0FBS1csUUFBTCxDQUFjWCxJQUFkLENBQVA7QUFDQSxhQUFPUSxPQUFQO0FBQ0g7QUF4Qkw7QUFBQTtBQUFBLGdDQTBCZ0I7QUFDUixXQUFLLElBQUlPLENBQVQsSUFBYyxLQUFLSixRQUFuQixFQUE2QjtBQUN6QixhQUFLQSxRQUFMLENBQWNJLENBQWQsRUFBaUJYLFNBQWpCO0FBQ0g7QUFFSjtBQS9CTDs7QUFBQTtBQUFBOztBQWtDQSxTQUFTUSxhQUFULENBQXVCWixJQUF2QixFQUE2QkMsTUFBN0IsRUFBcUM7QUFDakMsTUFBSUQsSUFBSSxDQUFDZ0IsT0FBTCxDQUFhLFVBQWIsTUFBNkIsQ0FBakMsRUFBb0M7QUFDaEMsV0FBTyxJQUFJQywrREFBSixDQUFtQmpCLElBQW5CLEVBQXlCQyxNQUF6QixDQUFQO0FBQ0gsR0FGRCxNQUVPLElBQUlELElBQUksQ0FBQ2dCLE9BQUwsQ0FBYSxXQUFiLE1BQThCLENBQWxDLEVBQXFDO0FBQ3hDLFdBQU8sSUFBSUUsaUVBQUosQ0FBb0JsQixJQUFwQixFQUEwQkMsTUFBMUIsQ0FBUDtBQUNILEdBRk0sTUFFQTtBQUNILFdBQU8sSUFBSUYsZ0RBQUosQ0FBWUMsSUFBWixFQUFrQkMsTUFBbEIsQ0FBUDtBQUNIO0FBQ0osQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOUNEO0FBRU8sSUFBTWlCLGVBQWI7QUFBQTtBQUFBO0FBQUE7O0FBQ0ksMkJBQVlsQixJQUFaLEVBQWtCQyxNQUFsQixFQUEwQjtBQUFBOztBQUFBOztBQUN0QjtBQUVBLFVBQUtELElBQUwsR0FBWUEsSUFBWjtBQUNBLFVBQUtDLE1BQUwsR0FBY0EsTUFBZDtBQUNBLFVBQUtrQixJQUFMLEdBQVksSUFBWjs7QUFFQSxRQUFJLE1BQUtsQixNQUFMLENBQVlDLE1BQVosQ0FBbUJDLEtBQW5CLElBQTRCLENBQWhDLEVBQW1DO0FBQy9CLFlBQUtDLFNBQUw7QUFDSDs7QUFUcUI7QUFVekI7O0FBWEw7QUFBQTtBQUFBLGdDQWFnQjtBQUFBOztBQUNSLFdBQUtILE1BQUwsQ0FBWWtCLElBQVosQ0FBaUIsS0FBS25CLElBQXRCLEVBQTRCLFVBQUNvQixDQUFELEVBQU87QUFDL0IsY0FBSSxDQUFDRCxJQUFMLEdBQVlDLENBQUMsQ0FBQ2IsSUFBRixDQUFPWSxJQUFuQjs7QUFFQSxjQUFJLENBQUNsQixNQUFMLENBQVlJLElBQVosQ0FBaUI7QUFDYkMsZUFBSyxFQUFFLFdBRE07QUFFYkMsY0FBSSxFQUFFO0FBQ0ZDLG1CQUFPLEVBQUUsTUFBSSxDQUFDUixJQURaO0FBRUZtQixnQkFBSSxFQUFFLE1BQUksQ0FBQ0EsSUFGVDtBQUdGRSx3QkFBWSxFQUFFRCxDQUFDLENBQUNiLElBQUYsQ0FBT2M7QUFIbkI7QUFGTyxTQUFqQjtBQVFILE9BWEQ7QUFZSDtBQTFCTDs7QUFBQTtBQUFBLEVBQXFDWiw2REFBckMsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRkE7QUFFTyxJQUFNUSxjQUFiO0FBQUE7QUFBQTtBQUFBOztBQUNJLDBCQUFZakIsSUFBWixFQUFrQkMsTUFBbEIsRUFBMEI7QUFBQTs7QUFBQTs7QUFDdEI7QUFFQSxVQUFLRCxJQUFMLEdBQVlBLElBQVo7QUFDQSxVQUFLQyxNQUFMLEdBQWNBLE1BQWQ7QUFDQSxVQUFLa0IsSUFBTCxHQUFZLElBQVo7O0FBRUEsUUFBSSxNQUFLbEIsTUFBTCxDQUFZQyxNQUFaLENBQW1CQyxLQUFuQixJQUE0QixDQUFoQyxFQUFtQztBQUMvQixZQUFLQyxTQUFMO0FBQ0g7O0FBVHFCO0FBVXpCOztBQVhMO0FBQUE7QUFBQSxnQ0FhZ0I7QUFBQTs7QUFDUixXQUFLSCxNQUFMLENBQVlrQixJQUFaLENBQWlCLEtBQUtuQixJQUF0QixFQUE0QixVQUFDb0IsQ0FBRCxFQUFPO0FBQy9CLGNBQUksQ0FBQ0QsSUFBTCxHQUFZQyxDQUFDLENBQUNiLElBQUYsQ0FBT1ksSUFBbkI7O0FBRUEsY0FBSSxDQUFDbEIsTUFBTCxDQUFZSSxJQUFaLENBQWlCO0FBQ2JDLGVBQUssRUFBRSxXQURNO0FBRWJDLGNBQUksRUFBRTtBQUNGQyxtQkFBTyxFQUFFLE1BQUksQ0FBQ1IsSUFEWjtBQUVGbUIsZ0JBQUksRUFBRSxNQUFJLENBQUNBO0FBRlQ7QUFGTyxTQUFqQjtBQU9ILE9BVkQ7QUFXSDtBQXpCTDs7QUFBQTtBQUFBLEVBQW9DViw2REFBcEMsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRkE7QUFFTyxJQUFNYSxNQUFiO0FBQUE7QUFBQTtBQUFBOztBQUNJLGtCQUFZckIsTUFBWixFQUFvQnNCLElBQXBCLEVBQTBCO0FBQUE7O0FBQUE7O0FBQ3RCO0FBRUEsVUFBS3RCLE1BQUwsR0FBY0EsTUFBZDtBQUNBLFVBQUtDLE1BQUwsR0FBYyxJQUFJc0IsU0FBSixDQUFjRCxJQUFJLEdBQUcsR0FBUCxHQUFhLE1BQUt0QixNQUFMLENBQVl3QixHQUF2QyxDQUFkOztBQUVBLFVBQUtDLGFBQUw7O0FBTnNCO0FBT3pCOztBQVJMO0FBQUE7QUFBQSxvQ0FVb0I7QUFBQTs7QUFDWixXQUFLeEIsTUFBTCxDQUFZeUIsTUFBWixHQUFxQixZQUFNO0FBQ3ZCLGNBQUksQ0FBQ0MsTUFBTDtBQUNILE9BRkQ7O0FBR0EsV0FBSzFCLE1BQUwsQ0FBWTJCLE9BQVosR0FBc0IsVUFBQ0MsS0FBRCxFQUFXO0FBQzdCLGNBQUksQ0FBQ0MsT0FBTCxDQUFhRCxLQUFiO0FBQ0gsT0FGRDs7QUFHQSxXQUFLNUIsTUFBTCxDQUFZOEIsT0FBWixHQUFzQixVQUFDQyxVQUFELEVBQWdCO0FBQ2xDLGNBQUksQ0FBQ0MsT0FBTCxDQUFhRCxVQUFiO0FBQ0gsT0FGRDs7QUFHQSxXQUFLL0IsTUFBTCxDQUFZaUMsU0FBWixHQUF3QixVQUFDQyxPQUFELEVBQWE7QUFDakMsY0FBSSxDQUFDQyxTQUFMLENBQWVELE9BQWY7QUFDSCxPQUZEO0FBR0g7QUF2Qkw7QUFBQTtBQUFBLDZCQXlCYTtBQUFBOztBQUNMO0FBQ0EsV0FBS2pDLEtBQUwsR0FBYSxDQUFiO0FBRUEsV0FBS21DLElBQUwsQ0FBVSx1QkFBVixFQUFtQyxVQUFDbEIsQ0FBRCxFQUFPO0FBQ3RDLGNBQUksQ0FBQ2xCLE1BQUwsQ0FBWXFDLFNBQVosR0FBd0JuQixDQUFDLENBQUNtQixTQUExQjtBQUNBLGNBQUksQ0FBQ3BDLEtBQUwsR0FBYSxDQUFiLENBRnNDLENBSXRDOztBQUNBLGNBQUksQ0FBQ0YsTUFBTCxDQUFZVSxRQUFaLENBQXFCUCxTQUFyQjtBQUNILE9BTkQ7QUFRQSxXQUFLa0MsSUFBTCxDQUFVLHFCQUFWLEVBQWlDLFVBQUNsQixDQUFELEVBQU87QUFDcEMsY0FBSSxDQUFDakIsS0FBTCxHQUFhLENBQUMsQ0FBZDtBQUNBcUMsZUFBTyxDQUFDVixLQUFSLENBQWNWLENBQUMsQ0FBQ1UsS0FBaEI7QUFDSCxPQUhEO0FBS0EsV0FBS3pCLElBQUwsQ0FBVTtBQUNOQyxhQUFLLEVBQUU7QUFERCxPQUFWO0FBR0g7QUE3Q0w7QUFBQTtBQUFBLDRCQStDWXdCLEtBL0NaLEVBK0NtQjtBQUNYVSxhQUFPLENBQUNWLEtBQVIsQ0FBY0EsS0FBZDtBQUNIO0FBakRMO0FBQUE7QUFBQSw0QkFtRFlHLFVBbkRaLEVBbUR3QjtBQUNoQixVQUFJLEtBQUsvQixNQUFMLENBQVl1QyxVQUFaLElBQTBCakIsU0FBUyxDQUFDa0IsTUFBeEMsRUFBZ0Q7QUFDNUMsWUFBSVQsVUFBVSxDQUFDVSxJQUFYLElBQW1CLE9BQXZCLEVBQWdDO0FBQzVCSCxpQkFBTyxDQUFDVixLQUFSLENBQWMsZUFBZDtBQUNILFNBRkQsTUFFTyxJQUFJRyxVQUFVLENBQUNVLElBQVgsSUFBbUIsU0FBdkIsRUFBa0M7QUFDckNILGlCQUFPLENBQUNWLEtBQVIsQ0FBY0csVUFBVSxDQUFDMUIsSUFBekI7QUFDSCxTQUZNLE1BRUE7QUFDSGlDLGlCQUFPLENBQUNWLEtBQVIsQ0FBYyxPQUFkO0FBQ0g7QUFDSjtBQUNKO0FBN0RMO0FBQUE7QUFBQSw4QkErRGNNLE9BL0RkLEVBK0R1QjtBQUNmLFVBQUlRLEtBQUssR0FBR0MsSUFBSSxDQUFDQyxLQUFMLENBQVdWLE9BQU8sQ0FBQzdCLElBQW5CLENBQVo7QUFDQSxVQUFJRCxLQUFLLEdBQUdzQyxLQUFLLENBQUN0QyxLQUFsQjtBQUNBLFVBQUlDLElBQUksR0FBR3FDLEtBQUssQ0FBQ3JDLElBQWpCOztBQUVBLFVBQUlxQyxLQUFLLENBQUNwQyxPQUFOLEtBQWtCdUMsU0FBdEIsRUFBaUM7QUFDN0IsYUFBSzlDLE1BQUwsQ0FBWVUsUUFBWixDQUFxQnFDLElBQXJCLENBQTBCSixLQUFLLENBQUNwQyxPQUFoQyxFQUF5Q3lDLElBQXpDLENBQThDM0MsS0FBOUMsRUFBcURDLElBQXJEO0FBQ0gsT0FGRCxNQUVPO0FBQ0gsYUFBSzBDLElBQUwsQ0FBVTNDLEtBQVYsRUFBaUJDLElBQWpCO0FBQ0g7QUFFSjtBQTFFTDtBQUFBO0FBQUEseUJBNEVTMkMsSUE1RVQsRUE0RWU7QUFDUCxVQUFJLEtBQUsvQyxLQUFMLEtBQWUsQ0FBQyxDQUFwQixFQUF1QjtBQUNuQixhQUFLRCxNQUFMLENBQVlHLElBQVosQ0FBaUJ3QyxJQUFJLENBQUNNLFNBQUwsQ0FBZUQsSUFBZixDQUFqQjtBQUNIO0FBQ0o7QUFoRkw7O0FBQUE7QUFBQSxFQUE0QnpDLDZEQUE1QixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0ZPLElBQU0yQyxnQkFBYjtBQUFBO0FBQUE7QUFDSSw4QkFBYztBQUFBOztBQUNWLFNBQUtDLFVBQUwsR0FBa0IsRUFBbEI7QUFDSDs7QUFITDtBQUFBO0FBQUEsd0JBS1FyRCxJQUxSLEVBS2M7QUFDTixhQUFPLEtBQUtxRCxVQUFMLENBQWdCQyxNQUFNLENBQUN0RCxJQUFELENBQXRCLENBQVA7QUFDSDtBQVBMO0FBQUE7QUFBQSx3QkFTUUEsSUFUUixFQVNjdUQsUUFUZCxFQVN3QkMsT0FUeEIsRUFTaUM7QUFDekIsVUFBSUMsaUJBQWlCLEdBQUdILE1BQU0sQ0FBQ3RELElBQUQsQ0FBOUI7QUFDQSxXQUFLcUQsVUFBTCxDQUFnQkksaUJBQWhCLElBQXFDLEtBQUtKLFVBQUwsQ0FBZ0JJLGlCQUFoQixLQUFzQyxFQUEzRTs7QUFDQSxXQUFLSixVQUFMLENBQWdCSSxpQkFBaEIsRUFBbUNDLElBQW5DLENBQXdDO0FBQ3BDQyxVQUFFLEVBQUVKLFFBRGdDO0FBRXBDQyxlQUFPLEVBQUVBO0FBRjJCLE9BQXhDO0FBSUg7QUFoQkw7QUFBQTtBQUFBLDJCQWtCV3hELElBbEJYLEVBa0JpQnVELFFBbEJqQixFQWtCMkJDLE9BbEIzQixFQWtCb0M7QUFDNUIsVUFBSSxDQUFDeEQsSUFBRCxJQUFTLENBQUN1RCxRQUFWLElBQXNCLENBQUNDLE9BQTNCLEVBQW9DO0FBQ2hDLGFBQUtILFVBQUwsR0FBa0IsRUFBbEI7QUFDQTtBQUNIOztBQUVELFVBQUlPLEtBQUssR0FBRzVELElBQUksR0FBRyxDQUFDc0QsTUFBTSxDQUFDdEQsSUFBRCxDQUFQLENBQUgsR0FBb0JhLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZLEtBQUt1QyxVQUFqQixDQUFwQzs7QUFFQSxVQUFJRSxRQUFRLElBQUlDLE9BQWhCLEVBQXlCO0FBQ3JCLGFBQUtLLGNBQUwsQ0FBb0JELEtBQXBCLEVBQTJCTCxRQUEzQixFQUFxQ0MsT0FBckM7QUFDSCxPQUZELE1BRU87QUFDSCxhQUFLTSxrQkFBTCxDQUF3QkYsS0FBeEI7QUFDSDtBQUNKO0FBL0JMO0FBQUE7QUFBQSxtQ0FpQ21CQSxLQWpDbkIsRUFpQzBCTCxRQWpDMUIsRUFpQ29DQyxPQWpDcEMsRUFpQzZDO0FBQ3JDLFdBQUssSUFBSXhELElBQVQsSUFBaUI0RCxLQUFqQixFQUF3QjtBQUNwQixhQUFLLElBQUluQyxHQUFULElBQWdCLEtBQUs0QixVQUFMLENBQWdCckQsSUFBaEIsQ0FBaEIsRUFBdUM7QUFDbkMsY0FBSSxLQUFLcUQsVUFBTCxDQUFnQnJELElBQWhCLEVBQXNCeUIsR0FBdEIsRUFBMkJrQyxFQUEzQixJQUFpQ0osUUFBakMsSUFBNkMsS0FBS0YsVUFBTCxDQUFnQnJELElBQWhCLEVBQXNCeUIsR0FBdEIsRUFBMkIrQixPQUEzQixJQUFzQ0EsT0FBdkYsRUFBZ0c7QUFDNUYsbUJBQU8sS0FBS0gsVUFBTCxDQUFnQnJELElBQWhCLEVBQXNCeUIsR0FBdEIsQ0FBUDtBQUNIO0FBQ0o7O0FBRUQsWUFBSSxLQUFLNEIsVUFBTCxDQUFnQnJELElBQWhCLEVBQXNCK0QsTUFBdEIsS0FBaUMsQ0FBckMsRUFBd0M7QUFDcEMsaUJBQU8sS0FBS1YsVUFBTCxDQUFnQnJELElBQWhCLENBQVA7QUFDSDtBQUNKO0FBQ0o7QUE3Q0w7QUFBQTtBQUFBLHVDQStDdUI0RCxLQS9DdkIsRUErQzhCO0FBQ3RCLFdBQUssSUFBSTVELElBQVQsSUFBaUI0RCxLQUFqQixFQUF3QjtBQUNwQixlQUFPLEtBQUtQLFVBQUwsQ0FBZ0JyRCxJQUFoQixDQUFQO0FBQ0g7QUFDSjtBQW5ETDs7QUFBQTtBQUFBOztBQXNEQSxTQUFTc0QsTUFBVCxDQUFnQnRELElBQWhCLEVBQXNCO0FBQ2xCLFNBQU8sTUFBTUEsSUFBYjtBQUNILEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hERDtBQUVPLElBQU1TLFVBQWI7QUFBQTtBQUFBO0FBQ0ksd0JBQWM7QUFBQTs7QUFDVixTQUFLdUQsU0FBTCxHQUFpQixJQUFJWixtRUFBSixFQUFqQjtBQUNBLFNBQUthLGdCQUFMLEdBQXdCLEVBQXhCO0FBQ0g7O0FBSkw7QUFBQTtBQUFBLHlCQU1TQyxTQU5ULEVBTW9CWCxRQU5wQixFQU04QkMsT0FOOUIsRUFNdUM7QUFDL0IsV0FBS1EsU0FBTCxDQUFlRyxHQUFmLENBQW1CRCxTQUFuQixFQUE4QlgsUUFBOUIsRUFBd0NDLE9BQXhDO0FBQ0EsYUFBTyxJQUFQO0FBQ0g7QUFUTDtBQUFBO0FBQUEsZ0NBV2dCRCxRQVhoQixFQVcwQjtBQUNsQixXQUFLVSxnQkFBTCxDQUFzQlAsSUFBdEIsQ0FBMkJILFFBQTNCO0FBQ0EsYUFBTyxJQUFQO0FBQ0g7QUFkTDtBQUFBO0FBQUEsMkJBZ0JXVyxTQWhCWCxFQWdCc0JYLFFBaEJ0QixFQWdCZ0NDLE9BaEJoQyxFQWdCeUM7QUFDakMsV0FBS1EsU0FBTCxDQUFlSSxNQUFmLENBQXNCRixTQUF0QixFQUFpQ1gsUUFBakMsRUFBMkNDLE9BQTNDO0FBQ0EsYUFBTyxJQUFQO0FBQ0g7QUFuQkw7QUFBQTtBQUFBLGtDQXFCa0JELFFBckJsQixFQXFCNEI7QUFDcEIsVUFBSSxDQUFDQSxRQUFMLEVBQWU7QUFDWCxhQUFLVSxnQkFBTCxHQUF3QixFQUF4QjtBQUNBLGVBQU8sSUFBUDtBQUNIOztBQUVELFdBQUssSUFBSWxELENBQVQsSUFBYyxLQUFLa0QsZ0JBQW5CLEVBQXFDO0FBQ2pDLFlBQUlWLFFBQVEsSUFBSSxLQUFLVSxnQkFBTCxDQUFzQmxELENBQXRCLENBQWhCLEVBQTBDO0FBQ3RDLGlCQUFPLEtBQUtrRCxnQkFBTCxDQUFzQmxELENBQXRCLENBQVA7QUFDSDtBQUNKOztBQUNELGFBQU8sSUFBUDtBQUNIO0FBakNMO0FBQUE7QUFBQSxpQ0FtQ2lCO0FBQ1QsV0FBS3NELE1BQUw7QUFDQSxXQUFLQyxhQUFMO0FBQ0EsYUFBTyxJQUFQO0FBQ0g7QUF2Q0w7QUFBQTtBQUFBLHlCQXlDU0osU0F6Q1QsRUF5Q29CM0QsSUF6Q3BCLEVBeUMwQjtBQUNsQixXQUFLLElBQUlRLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUcsS0FBS2tELGdCQUFMLENBQXNCRixNQUExQyxFQUFrRGhELENBQUMsRUFBbkQsRUFBdUQ7QUFDbkQsYUFBS2tELGdCQUFMLENBQXNCbEQsQ0FBdEIsRUFBeUJtRCxTQUF6QixFQUFvQzNELElBQXBDO0FBQ0g7O0FBRUQsVUFBSXlELFNBQVMsR0FBRyxLQUFLQSxTQUFMLENBQWVPLEdBQWYsQ0FBbUJMLFNBQW5CLENBQWhCOztBQUNBLFVBQUlGLFNBQVMsSUFBSUEsU0FBUyxDQUFDRCxNQUFWLEdBQW1CLENBQXBDLEVBQXVDO0FBQ25DLGFBQUssSUFBSWhELEVBQUMsR0FBRyxDQUFiLEVBQWdCQSxFQUFDLEdBQUdpRCxTQUFTLENBQUNELE1BQTlCLEVBQXNDaEQsRUFBQyxFQUF2QyxFQUEyQztBQUN2Q2lELG1CQUFTLENBQUNqRCxFQUFELENBQVQsQ0FBYTRDLEVBQWIsQ0FBZ0JhLElBQWhCLENBQXFCUixTQUFTLENBQUNqRCxFQUFELENBQVQsQ0FBYXlDLE9BQWxDLEVBQTJDakQsSUFBM0M7QUFDSDtBQUNKOztBQUVELGFBQU8sSUFBUDtBQUNIO0FBdERMOztBQUFBO0FBQUEsSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0ZBO0FBQ0E7QUFDQTtBQUNBO0FBRU8sSUFBTWtFLE1BQWI7QUFBQTtBQUFBO0FBQ0ksa0JBQVlDLE9BQVosRUFBcUJDLE9BQXJCLEVBQThCO0FBQUE7O0FBQzFCLFNBQUtDLFdBQUwsQ0FBaUJGLE9BQWpCO0FBRUEsU0FBS2pELEdBQUwsR0FBV2lELE9BQVg7QUFDQSxTQUFLQyxPQUFMLEdBQWVBLE9BQU8sSUFBSSxFQUExQjtBQUNBLFNBQUtFLFVBQUwsR0FBa0IsSUFBSXBFLDZEQUFKLEVBQWxCO0FBQ0EsU0FBS0UsUUFBTCxHQUFnQixJQUFJRCwyREFBSixFQUFoQjtBQUVBLFNBQUtvRSxPQUFMO0FBQ0g7O0FBVkw7QUFBQTtBQUFBLDhCQVljO0FBQ04sV0FBSzVFLE1BQUwsR0FBYyxJQUFJb0IseURBQUosQ0FBVyxJQUFYLEVBQWlCLEtBQUtxRCxPQUFMLENBQWFwRCxJQUE5QixDQUFkO0FBQ0g7QUFkTDtBQUFBO0FBQUEsOEJBZ0Jjd0QsWUFoQmQsRUFnQjRCO0FBQ3BCLGFBQU8sS0FBS3BFLFFBQUwsQ0FBY3dELEdBQWQsQ0FBa0JZLFlBQWxCLEVBQWdDLElBQWhDLENBQVA7QUFDSDtBQWxCTDtBQUFBO0FBQUEsZ0NBb0JnQkEsWUFwQmhCLEVBb0I4QjtBQUN0QixXQUFLcEUsUUFBTCxDQUFjeUQsTUFBZCxDQUFxQlcsWUFBckI7QUFDSDtBQXRCTDtBQUFBO0FBQUEsa0NBd0JrQjtBQUNWLGFBQU8sS0FBSzdFLE1BQUwsQ0FBWUEsTUFBWixDQUFtQnFDLFNBQTFCO0FBQ0g7QUExQkw7QUFBQTtBQUFBLHlCQTRCU1csSUE1QlQsRUE0QmU7QUFDUCxXQUFLaEQsTUFBTCxDQUFZRyxJQUFaLENBQWlCNkMsSUFBakI7QUFDSDtBQTlCTDtBQUFBO0FBQUEsZ0NBZ0NnQnpCLEdBaENoQixFQWdDcUI7QUFDYixhQUFPLElBQVA7QUFDSDtBQWxDTDtBQUFBO0FBQUEseUJBb0NTekIsSUFwQ1QsRUFvQ2V1RCxRQXBDZixFQW9DeUI7QUFDakIsVUFBSXlCLE1BQU0sR0FBRyxLQUFLTCxPQUFMLENBQWF4RCxJQUFiLENBQWtCNkQsTUFBbEIsSUFBNEIsTUFBekM7QUFDQSxVQUFJekUsSUFBSSxHQUFHLEVBQVg7QUFDQSxVQUFJMEUsTUFBTSxHQUFHLEVBQWI7O0FBRUEsVUFBSUQsTUFBTSxJQUFJLE1BQWQsRUFBc0I7QUFDbEJ6RSxZQUFJLEdBQUdNLE1BQU0sQ0FBQ3FFLE1BQVAsQ0FBYztBQUNqQkgsc0JBQVksRUFBRS9FLElBREc7QUFFakJ1QyxtQkFBUyxFQUFFLEtBQUs0QyxXQUFMO0FBRk0sU0FBZCxDQUFQO0FBSUgsT0FMRCxNQUtPO0FBQ0hGLGNBQU0sR0FBR3BFLE1BQU0sQ0FBQ3FFLE1BQVAsQ0FBYztBQUNuQkgsc0JBQVksRUFBRS9FLElBREs7QUFFbkJ1QyxtQkFBUyxFQUFFLEtBQUs0QyxXQUFMO0FBRlEsU0FBZCxDQUFUO0FBSUg7O0FBRURDLGtEQUFLLENBQUM7QUFDRkMsV0FBRyxFQUFFLEtBQUtWLE9BQUwsQ0FBYXhELElBQWIsQ0FBa0JrRSxHQURyQjtBQUVGTCxjQUFNLEVBQUVBLE1BRk47QUFHRk0sZUFBTyxFQUFFLEtBQUtYLE9BQUwsQ0FBYXhELElBQWIsQ0FBa0JtRSxPQUFsQixJQUE2QixFQUhwQztBQUlGTCxjQUFNLEVBQUVBLE1BSk47QUFLRjFFLFlBQUksRUFBRUE7QUFMSixPQUFELENBQUwsQ0FNR2dGLElBTkgsQ0FNUSxVQUFDbkUsQ0FBRCxFQUFPO0FBQ1htQyxnQkFBUSxDQUFDbkMsQ0FBRCxDQUFSO0FBQ0gsT0FSRCxFQVFHb0UsS0FSSCxDQVFTLFVBQUNwRSxDQUFELEVBQU87QUFDWm9CLGVBQU8sQ0FBQ1YsS0FBUixDQUFjLFdBQWQ7QUFDSCxPQVZEO0FBV0g7QUFoRUw7O0FBQUE7QUFBQTtBQW1FQTJELE1BQU0sQ0FBQ2hCLE1BQVAsR0FBZ0JBLE1BQWhCLEMiLCJmaWxlIjoicHVzaGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvcHVzaGVyLmpzXCIpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2xpYi9heGlvcycpOyIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi8uLi91dGlscycpO1xudmFyIHNldHRsZSA9IHJlcXVpcmUoJy4vLi4vY29yZS9zZXR0bGUnKTtcbnZhciBidWlsZFVSTCA9IHJlcXVpcmUoJy4vLi4vaGVscGVycy9idWlsZFVSTCcpO1xudmFyIHBhcnNlSGVhZGVycyA9IHJlcXVpcmUoJy4vLi4vaGVscGVycy9wYXJzZUhlYWRlcnMnKTtcbnZhciBpc1VSTFNhbWVPcmlnaW4gPSByZXF1aXJlKCcuLy4uL2hlbHBlcnMvaXNVUkxTYW1lT3JpZ2luJyk7XG52YXIgY3JlYXRlRXJyb3IgPSByZXF1aXJlKCcuLi9jb3JlL2NyZWF0ZUVycm9yJyk7XG52YXIgYnRvYSA9ICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuYnRvYSAmJiB3aW5kb3cuYnRvYS5iaW5kKHdpbmRvdykpIHx8IHJlcXVpcmUoJy4vLi4vaGVscGVycy9idG9hJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24geGhyQWRhcHRlcihjb25maWcpIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIGRpc3BhdGNoWGhyUmVxdWVzdChyZXNvbHZlLCByZWplY3QpIHtcbiAgICB2YXIgcmVxdWVzdERhdGEgPSBjb25maWcuZGF0YTtcbiAgICB2YXIgcmVxdWVzdEhlYWRlcnMgPSBjb25maWcuaGVhZGVycztcblxuICAgIGlmICh1dGlscy5pc0Zvcm1EYXRhKHJlcXVlc3REYXRhKSkge1xuICAgICAgZGVsZXRlIHJlcXVlc3RIZWFkZXJzWydDb250ZW50LVR5cGUnXTsgLy8gTGV0IHRoZSBicm93c2VyIHNldCBpdFxuICAgIH1cblxuICAgIHZhciByZXF1ZXN0ID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgdmFyIGxvYWRFdmVudCA9ICdvbnJlYWR5c3RhdGVjaGFuZ2UnO1xuICAgIHZhciB4RG9tYWluID0gZmFsc2U7XG5cbiAgICAvLyBGb3IgSUUgOC85IENPUlMgc3VwcG9ydFxuICAgIC8vIE9ubHkgc3VwcG9ydHMgUE9TVCBhbmQgR0VUIGNhbGxzIGFuZCBkb2Vzbid0IHJldHVybnMgdGhlIHJlc3BvbnNlIGhlYWRlcnMuXG4gICAgLy8gRE9OJ1QgZG8gdGhpcyBmb3IgdGVzdGluZyBiL2MgWE1MSHR0cFJlcXVlc3QgaXMgbW9ja2VkLCBub3QgWERvbWFpblJlcXVlc3QuXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAndGVzdCcgJiZcbiAgICAgICAgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgICAgICAgd2luZG93LlhEb21haW5SZXF1ZXN0ICYmICEoJ3dpdGhDcmVkZW50aWFscycgaW4gcmVxdWVzdCkgJiZcbiAgICAgICAgIWlzVVJMU2FtZU9yaWdpbihjb25maWcudXJsKSkge1xuICAgICAgcmVxdWVzdCA9IG5ldyB3aW5kb3cuWERvbWFpblJlcXVlc3QoKTtcbiAgICAgIGxvYWRFdmVudCA9ICdvbmxvYWQnO1xuICAgICAgeERvbWFpbiA9IHRydWU7XG4gICAgICByZXF1ZXN0Lm9ucHJvZ3Jlc3MgPSBmdW5jdGlvbiBoYW5kbGVQcm9ncmVzcygpIHt9O1xuICAgICAgcmVxdWVzdC5vbnRpbWVvdXQgPSBmdW5jdGlvbiBoYW5kbGVUaW1lb3V0KCkge307XG4gICAgfVxuXG4gICAgLy8gSFRUUCBiYXNpYyBhdXRoZW50aWNhdGlvblxuICAgIGlmIChjb25maWcuYXV0aCkge1xuICAgICAgdmFyIHVzZXJuYW1lID0gY29uZmlnLmF1dGgudXNlcm5hbWUgfHwgJyc7XG4gICAgICB2YXIgcGFzc3dvcmQgPSBjb25maWcuYXV0aC5wYXNzd29yZCB8fCAnJztcbiAgICAgIHJlcXVlc3RIZWFkZXJzLkF1dGhvcml6YXRpb24gPSAnQmFzaWMgJyArIGJ0b2EodXNlcm5hbWUgKyAnOicgKyBwYXNzd29yZCk7XG4gICAgfVxuXG4gICAgcmVxdWVzdC5vcGVuKGNvbmZpZy5tZXRob2QudG9VcHBlckNhc2UoKSwgYnVpbGRVUkwoY29uZmlnLnVybCwgY29uZmlnLnBhcmFtcywgY29uZmlnLnBhcmFtc1NlcmlhbGl6ZXIpLCB0cnVlKTtcblxuICAgIC8vIFNldCB0aGUgcmVxdWVzdCB0aW1lb3V0IGluIE1TXG4gICAgcmVxdWVzdC50aW1lb3V0ID0gY29uZmlnLnRpbWVvdXQ7XG5cbiAgICAvLyBMaXN0ZW4gZm9yIHJlYWR5IHN0YXRlXG4gICAgcmVxdWVzdFtsb2FkRXZlbnRdID0gZnVuY3Rpb24gaGFuZGxlTG9hZCgpIHtcbiAgICAgIGlmICghcmVxdWVzdCB8fCAocmVxdWVzdC5yZWFkeVN0YXRlICE9PSA0ICYmICF4RG9tYWluKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8vIFRoZSByZXF1ZXN0IGVycm9yZWQgb3V0IGFuZCB3ZSBkaWRuJ3QgZ2V0IGEgcmVzcG9uc2UsIHRoaXMgd2lsbCBiZVxuICAgICAgLy8gaGFuZGxlZCBieSBvbmVycm9yIGluc3RlYWRcbiAgICAgIC8vIFdpdGggb25lIGV4Y2VwdGlvbjogcmVxdWVzdCB0aGF0IHVzaW5nIGZpbGU6IHByb3RvY29sLCBtb3N0IGJyb3dzZXJzXG4gICAgICAvLyB3aWxsIHJldHVybiBzdGF0dXMgYXMgMCBldmVuIHRob3VnaCBpdCdzIGEgc3VjY2Vzc2Z1bCByZXF1ZXN0XG4gICAgICBpZiAocmVxdWVzdC5zdGF0dXMgPT09IDAgJiYgIShyZXF1ZXN0LnJlc3BvbnNlVVJMICYmIHJlcXVlc3QucmVzcG9uc2VVUkwuaW5kZXhPZignZmlsZTonKSA9PT0gMCkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICAvLyBQcmVwYXJlIHRoZSByZXNwb25zZVxuICAgICAgdmFyIHJlc3BvbnNlSGVhZGVycyA9ICdnZXRBbGxSZXNwb25zZUhlYWRlcnMnIGluIHJlcXVlc3QgPyBwYXJzZUhlYWRlcnMocmVxdWVzdC5nZXRBbGxSZXNwb25zZUhlYWRlcnMoKSkgOiBudWxsO1xuICAgICAgdmFyIHJlc3BvbnNlRGF0YSA9ICFjb25maWcucmVzcG9uc2VUeXBlIHx8IGNvbmZpZy5yZXNwb25zZVR5cGUgPT09ICd0ZXh0JyA/IHJlcXVlc3QucmVzcG9uc2VUZXh0IDogcmVxdWVzdC5yZXNwb25zZTtcbiAgICAgIHZhciByZXNwb25zZSA9IHtcbiAgICAgICAgZGF0YTogcmVzcG9uc2VEYXRhLFxuICAgICAgICAvLyBJRSBzZW5kcyAxMjIzIGluc3RlYWQgb2YgMjA0IChodHRwczovL2dpdGh1Yi5jb20vYXhpb3MvYXhpb3MvaXNzdWVzLzIwMSlcbiAgICAgICAgc3RhdHVzOiByZXF1ZXN0LnN0YXR1cyA9PT0gMTIyMyA/IDIwNCA6IHJlcXVlc3Quc3RhdHVzLFxuICAgICAgICBzdGF0dXNUZXh0OiByZXF1ZXN0LnN0YXR1cyA9PT0gMTIyMyA/ICdObyBDb250ZW50JyA6IHJlcXVlc3Quc3RhdHVzVGV4dCxcbiAgICAgICAgaGVhZGVyczogcmVzcG9uc2VIZWFkZXJzLFxuICAgICAgICBjb25maWc6IGNvbmZpZyxcbiAgICAgICAgcmVxdWVzdDogcmVxdWVzdFxuICAgICAgfTtcblxuICAgICAgc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgcmVzcG9uc2UpO1xuXG4gICAgICAvLyBDbGVhbiB1cCByZXF1ZXN0XG4gICAgICByZXF1ZXN0ID0gbnVsbDtcbiAgICB9O1xuXG4gICAgLy8gSGFuZGxlIGxvdyBsZXZlbCBuZXR3b3JrIGVycm9yc1xuICAgIHJlcXVlc3Qub25lcnJvciA9IGZ1bmN0aW9uIGhhbmRsZUVycm9yKCkge1xuICAgICAgLy8gUmVhbCBlcnJvcnMgYXJlIGhpZGRlbiBmcm9tIHVzIGJ5IHRoZSBicm93c2VyXG4gICAgICAvLyBvbmVycm9yIHNob3VsZCBvbmx5IGZpcmUgaWYgaXQncyBhIG5ldHdvcmsgZXJyb3JcbiAgICAgIHJlamVjdChjcmVhdGVFcnJvcignTmV0d29yayBFcnJvcicsIGNvbmZpZywgbnVsbCwgcmVxdWVzdCkpO1xuXG4gICAgICAvLyBDbGVhbiB1cCByZXF1ZXN0XG4gICAgICByZXF1ZXN0ID0gbnVsbDtcbiAgICB9O1xuXG4gICAgLy8gSGFuZGxlIHRpbWVvdXRcbiAgICByZXF1ZXN0Lm9udGltZW91dCA9IGZ1bmN0aW9uIGhhbmRsZVRpbWVvdXQoKSB7XG4gICAgICByZWplY3QoY3JlYXRlRXJyb3IoJ3RpbWVvdXQgb2YgJyArIGNvbmZpZy50aW1lb3V0ICsgJ21zIGV4Y2VlZGVkJywgY29uZmlnLCAnRUNPTk5BQk9SVEVEJyxcbiAgICAgICAgcmVxdWVzdCkpO1xuXG4gICAgICAvLyBDbGVhbiB1cCByZXF1ZXN0XG4gICAgICByZXF1ZXN0ID0gbnVsbDtcbiAgICB9O1xuXG4gICAgLy8gQWRkIHhzcmYgaGVhZGVyXG4gICAgLy8gVGhpcyBpcyBvbmx5IGRvbmUgaWYgcnVubmluZyBpbiBhIHN0YW5kYXJkIGJyb3dzZXIgZW52aXJvbm1lbnQuXG4gICAgLy8gU3BlY2lmaWNhbGx5IG5vdCBpZiB3ZSdyZSBpbiBhIHdlYiB3b3JrZXIsIG9yIHJlYWN0LW5hdGl2ZS5cbiAgICBpZiAodXRpbHMuaXNTdGFuZGFyZEJyb3dzZXJFbnYoKSkge1xuICAgICAgdmFyIGNvb2tpZXMgPSByZXF1aXJlKCcuLy4uL2hlbHBlcnMvY29va2llcycpO1xuXG4gICAgICAvLyBBZGQgeHNyZiBoZWFkZXJcbiAgICAgIHZhciB4c3JmVmFsdWUgPSAoY29uZmlnLndpdGhDcmVkZW50aWFscyB8fCBpc1VSTFNhbWVPcmlnaW4oY29uZmlnLnVybCkpICYmIGNvbmZpZy54c3JmQ29va2llTmFtZSA/XG4gICAgICAgICAgY29va2llcy5yZWFkKGNvbmZpZy54c3JmQ29va2llTmFtZSkgOlxuICAgICAgICAgIHVuZGVmaW5lZDtcblxuICAgICAgaWYgKHhzcmZWYWx1ZSkge1xuICAgICAgICByZXF1ZXN0SGVhZGVyc1tjb25maWcueHNyZkhlYWRlck5hbWVdID0geHNyZlZhbHVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIEFkZCBoZWFkZXJzIHRvIHRoZSByZXF1ZXN0XG4gICAgaWYgKCdzZXRSZXF1ZXN0SGVhZGVyJyBpbiByZXF1ZXN0KSB7XG4gICAgICB1dGlscy5mb3JFYWNoKHJlcXVlc3RIZWFkZXJzLCBmdW5jdGlvbiBzZXRSZXF1ZXN0SGVhZGVyKHZhbCwga2V5KSB7XG4gICAgICAgIGlmICh0eXBlb2YgcmVxdWVzdERhdGEgPT09ICd1bmRlZmluZWQnICYmIGtleS50b0xvd2VyQ2FzZSgpID09PSAnY29udGVudC10eXBlJykge1xuICAgICAgICAgIC8vIFJlbW92ZSBDb250ZW50LVR5cGUgaWYgZGF0YSBpcyB1bmRlZmluZWRcbiAgICAgICAgICBkZWxldGUgcmVxdWVzdEhlYWRlcnNba2V5XTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBPdGhlcndpc2UgYWRkIGhlYWRlciB0byB0aGUgcmVxdWVzdFxuICAgICAgICAgIHJlcXVlc3Quc2V0UmVxdWVzdEhlYWRlcihrZXksIHZhbCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIEFkZCB3aXRoQ3JlZGVudGlhbHMgdG8gcmVxdWVzdCBpZiBuZWVkZWRcbiAgICBpZiAoY29uZmlnLndpdGhDcmVkZW50aWFscykge1xuICAgICAgcmVxdWVzdC53aXRoQ3JlZGVudGlhbHMgPSB0cnVlO1xuICAgIH1cblxuICAgIC8vIEFkZCByZXNwb25zZVR5cGUgdG8gcmVxdWVzdCBpZiBuZWVkZWRcbiAgICBpZiAoY29uZmlnLnJlc3BvbnNlVHlwZSkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgcmVxdWVzdC5yZXNwb25zZVR5cGUgPSBjb25maWcucmVzcG9uc2VUeXBlO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBFeHBlY3RlZCBET01FeGNlcHRpb24gdGhyb3duIGJ5IGJyb3dzZXJzIG5vdCBjb21wYXRpYmxlIFhNTEh0dHBSZXF1ZXN0IExldmVsIDIuXG4gICAgICAgIC8vIEJ1dCwgdGhpcyBjYW4gYmUgc3VwcHJlc3NlZCBmb3IgJ2pzb24nIHR5cGUgYXMgaXQgY2FuIGJlIHBhcnNlZCBieSBkZWZhdWx0ICd0cmFuc2Zvcm1SZXNwb25zZScgZnVuY3Rpb24uXG4gICAgICAgIGlmIChjb25maWcucmVzcG9uc2VUeXBlICE9PSAnanNvbicpIHtcbiAgICAgICAgICB0aHJvdyBlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gSGFuZGxlIHByb2dyZXNzIGlmIG5lZWRlZFxuICAgIGlmICh0eXBlb2YgY29uZmlnLm9uRG93bmxvYWRQcm9ncmVzcyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcmVxdWVzdC5hZGRFdmVudExpc3RlbmVyKCdwcm9ncmVzcycsIGNvbmZpZy5vbkRvd25sb2FkUHJvZ3Jlc3MpO1xuICAgIH1cblxuICAgIC8vIE5vdCBhbGwgYnJvd3NlcnMgc3VwcG9ydCB1cGxvYWQgZXZlbnRzXG4gICAgaWYgKHR5cGVvZiBjb25maWcub25VcGxvYWRQcm9ncmVzcyA9PT0gJ2Z1bmN0aW9uJyAmJiByZXF1ZXN0LnVwbG9hZCkge1xuICAgICAgcmVxdWVzdC51cGxvYWQuYWRkRXZlbnRMaXN0ZW5lcigncHJvZ3Jlc3MnLCBjb25maWcub25VcGxvYWRQcm9ncmVzcyk7XG4gICAgfVxuXG4gICAgaWYgKGNvbmZpZy5jYW5jZWxUb2tlbikge1xuICAgICAgLy8gSGFuZGxlIGNhbmNlbGxhdGlvblxuICAgICAgY29uZmlnLmNhbmNlbFRva2VuLnByb21pc2UudGhlbihmdW5jdGlvbiBvbkNhbmNlbGVkKGNhbmNlbCkge1xuICAgICAgICBpZiAoIXJlcXVlc3QpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICByZXF1ZXN0LmFib3J0KCk7XG4gICAgICAgIHJlamVjdChjYW5jZWwpO1xuICAgICAgICAvLyBDbGVhbiB1cCByZXF1ZXN0XG4gICAgICAgIHJlcXVlc3QgPSBudWxsO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKHJlcXVlc3REYXRhID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJlcXVlc3REYXRhID0gbnVsbDtcbiAgICB9XG5cbiAgICAvLyBTZW5kIHRoZSByZXF1ZXN0XG4gICAgcmVxdWVzdC5zZW5kKHJlcXVlc3REYXRhKTtcbiAgfSk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuL3V0aWxzJyk7XG52YXIgYmluZCA9IHJlcXVpcmUoJy4vaGVscGVycy9iaW5kJyk7XG52YXIgQXhpb3MgPSByZXF1aXJlKCcuL2NvcmUvQXhpb3MnKTtcbnZhciBkZWZhdWx0cyA9IHJlcXVpcmUoJy4vZGVmYXVsdHMnKTtcblxuLyoqXG4gKiBDcmVhdGUgYW4gaW5zdGFuY2Ugb2YgQXhpb3NcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gZGVmYXVsdENvbmZpZyBUaGUgZGVmYXVsdCBjb25maWcgZm9yIHRoZSBpbnN0YW5jZVxuICogQHJldHVybiB7QXhpb3N9IEEgbmV3IGluc3RhbmNlIG9mIEF4aW9zXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZUluc3RhbmNlKGRlZmF1bHRDb25maWcpIHtcbiAgdmFyIGNvbnRleHQgPSBuZXcgQXhpb3MoZGVmYXVsdENvbmZpZyk7XG4gIHZhciBpbnN0YW5jZSA9IGJpbmQoQXhpb3MucHJvdG90eXBlLnJlcXVlc3QsIGNvbnRleHQpO1xuXG4gIC8vIENvcHkgYXhpb3MucHJvdG90eXBlIHRvIGluc3RhbmNlXG4gIHV0aWxzLmV4dGVuZChpbnN0YW5jZSwgQXhpb3MucHJvdG90eXBlLCBjb250ZXh0KTtcblxuICAvLyBDb3B5IGNvbnRleHQgdG8gaW5zdGFuY2VcbiAgdXRpbHMuZXh0ZW5kKGluc3RhbmNlLCBjb250ZXh0KTtcblxuICByZXR1cm4gaW5zdGFuY2U7XG59XG5cbi8vIENyZWF0ZSB0aGUgZGVmYXVsdCBpbnN0YW5jZSB0byBiZSBleHBvcnRlZFxudmFyIGF4aW9zID0gY3JlYXRlSW5zdGFuY2UoZGVmYXVsdHMpO1xuXG4vLyBFeHBvc2UgQXhpb3MgY2xhc3MgdG8gYWxsb3cgY2xhc3MgaW5oZXJpdGFuY2VcbmF4aW9zLkF4aW9zID0gQXhpb3M7XG5cbi8vIEZhY3RvcnkgZm9yIGNyZWF0aW5nIG5ldyBpbnN0YW5jZXNcbmF4aW9zLmNyZWF0ZSA9IGZ1bmN0aW9uIGNyZWF0ZShpbnN0YW5jZUNvbmZpZykge1xuICByZXR1cm4gY3JlYXRlSW5zdGFuY2UodXRpbHMubWVyZ2UoZGVmYXVsdHMsIGluc3RhbmNlQ29uZmlnKSk7XG59O1xuXG4vLyBFeHBvc2UgQ2FuY2VsICYgQ2FuY2VsVG9rZW5cbmF4aW9zLkNhbmNlbCA9IHJlcXVpcmUoJy4vY2FuY2VsL0NhbmNlbCcpO1xuYXhpb3MuQ2FuY2VsVG9rZW4gPSByZXF1aXJlKCcuL2NhbmNlbC9DYW5jZWxUb2tlbicpO1xuYXhpb3MuaXNDYW5jZWwgPSByZXF1aXJlKCcuL2NhbmNlbC9pc0NhbmNlbCcpO1xuXG4vLyBFeHBvc2UgYWxsL3NwcmVhZFxuYXhpb3MuYWxsID0gZnVuY3Rpb24gYWxsKHByb21pc2VzKSB7XG4gIHJldHVybiBQcm9taXNlLmFsbChwcm9taXNlcyk7XG59O1xuYXhpb3Muc3ByZWFkID0gcmVxdWlyZSgnLi9oZWxwZXJzL3NwcmVhZCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGF4aW9zO1xuXG4vLyBBbGxvdyB1c2Ugb2YgZGVmYXVsdCBpbXBvcnQgc3ludGF4IGluIFR5cGVTY3JpcHRcbm1vZHVsZS5leHBvcnRzLmRlZmF1bHQgPSBheGlvcztcbiIsIid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBBIGBDYW5jZWxgIGlzIGFuIG9iamVjdCB0aGF0IGlzIHRocm93biB3aGVuIGFuIG9wZXJhdGlvbiBpcyBjYW5jZWxlZC5cbiAqXG4gKiBAY2xhc3NcbiAqIEBwYXJhbSB7c3RyaW5nPX0gbWVzc2FnZSBUaGUgbWVzc2FnZS5cbiAqL1xuZnVuY3Rpb24gQ2FuY2VsKG1lc3NhZ2UpIHtcbiAgdGhpcy5tZXNzYWdlID0gbWVzc2FnZTtcbn1cblxuQ2FuY2VsLnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICByZXR1cm4gJ0NhbmNlbCcgKyAodGhpcy5tZXNzYWdlID8gJzogJyArIHRoaXMubWVzc2FnZSA6ICcnKTtcbn07XG5cbkNhbmNlbC5wcm90b3R5cGUuX19DQU5DRUxfXyA9IHRydWU7XG5cbm1vZHVsZS5leHBvcnRzID0gQ2FuY2VsO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgQ2FuY2VsID0gcmVxdWlyZSgnLi9DYW5jZWwnKTtcblxuLyoqXG4gKiBBIGBDYW5jZWxUb2tlbmAgaXMgYW4gb2JqZWN0IHRoYXQgY2FuIGJlIHVzZWQgdG8gcmVxdWVzdCBjYW5jZWxsYXRpb24gb2YgYW4gb3BlcmF0aW9uLlxuICpcbiAqIEBjbGFzc1xuICogQHBhcmFtIHtGdW5jdGlvbn0gZXhlY3V0b3IgVGhlIGV4ZWN1dG9yIGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiBDYW5jZWxUb2tlbihleGVjdXRvcikge1xuICBpZiAodHlwZW9mIGV4ZWN1dG9yICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignZXhlY3V0b3IgbXVzdCBiZSBhIGZ1bmN0aW9uLicpO1xuICB9XG5cbiAgdmFyIHJlc29sdmVQcm9taXNlO1xuICB0aGlzLnByb21pc2UgPSBuZXcgUHJvbWlzZShmdW5jdGlvbiBwcm9taXNlRXhlY3V0b3IocmVzb2x2ZSkge1xuICAgIHJlc29sdmVQcm9taXNlID0gcmVzb2x2ZTtcbiAgfSk7XG5cbiAgdmFyIHRva2VuID0gdGhpcztcbiAgZXhlY3V0b3IoZnVuY3Rpb24gY2FuY2VsKG1lc3NhZ2UpIHtcbiAgICBpZiAodG9rZW4ucmVhc29uKSB7XG4gICAgICAvLyBDYW5jZWxsYXRpb24gaGFzIGFscmVhZHkgYmVlbiByZXF1ZXN0ZWRcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0b2tlbi5yZWFzb24gPSBuZXcgQ2FuY2VsKG1lc3NhZ2UpO1xuICAgIHJlc29sdmVQcm9taXNlKHRva2VuLnJlYXNvbik7XG4gIH0pO1xufVxuXG4vKipcbiAqIFRocm93cyBhIGBDYW5jZWxgIGlmIGNhbmNlbGxhdGlvbiBoYXMgYmVlbiByZXF1ZXN0ZWQuXG4gKi9cbkNhbmNlbFRva2VuLnByb3RvdHlwZS50aHJvd0lmUmVxdWVzdGVkID0gZnVuY3Rpb24gdGhyb3dJZlJlcXVlc3RlZCgpIHtcbiAgaWYgKHRoaXMucmVhc29uKSB7XG4gICAgdGhyb3cgdGhpcy5yZWFzb247XG4gIH1cbn07XG5cbi8qKlxuICogUmV0dXJucyBhbiBvYmplY3QgdGhhdCBjb250YWlucyBhIG5ldyBgQ2FuY2VsVG9rZW5gIGFuZCBhIGZ1bmN0aW9uIHRoYXQsIHdoZW4gY2FsbGVkLFxuICogY2FuY2VscyB0aGUgYENhbmNlbFRva2VuYC5cbiAqL1xuQ2FuY2VsVG9rZW4uc291cmNlID0gZnVuY3Rpb24gc291cmNlKCkge1xuICB2YXIgY2FuY2VsO1xuICB2YXIgdG9rZW4gPSBuZXcgQ2FuY2VsVG9rZW4oZnVuY3Rpb24gZXhlY3V0b3IoYykge1xuICAgIGNhbmNlbCA9IGM7XG4gIH0pO1xuICByZXR1cm4ge1xuICAgIHRva2VuOiB0b2tlbixcbiAgICBjYW5jZWw6IGNhbmNlbFxuICB9O1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBDYW5jZWxUb2tlbjtcbiIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpc0NhbmNlbCh2YWx1ZSkge1xuICByZXR1cm4gISEodmFsdWUgJiYgdmFsdWUuX19DQU5DRUxfXyk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgZGVmYXVsdHMgPSByZXF1aXJlKCcuLy4uL2RlZmF1bHRzJyk7XG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLy4uL3V0aWxzJyk7XG52YXIgSW50ZXJjZXB0b3JNYW5hZ2VyID0gcmVxdWlyZSgnLi9JbnRlcmNlcHRvck1hbmFnZXInKTtcbnZhciBkaXNwYXRjaFJlcXVlc3QgPSByZXF1aXJlKCcuL2Rpc3BhdGNoUmVxdWVzdCcpO1xuXG4vKipcbiAqIENyZWF0ZSBhIG5ldyBpbnN0YW5jZSBvZiBBeGlvc1xuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBpbnN0YW5jZUNvbmZpZyBUaGUgZGVmYXVsdCBjb25maWcgZm9yIHRoZSBpbnN0YW5jZVxuICovXG5mdW5jdGlvbiBBeGlvcyhpbnN0YW5jZUNvbmZpZykge1xuICB0aGlzLmRlZmF1bHRzID0gaW5zdGFuY2VDb25maWc7XG4gIHRoaXMuaW50ZXJjZXB0b3JzID0ge1xuICAgIHJlcXVlc3Q6IG5ldyBJbnRlcmNlcHRvck1hbmFnZXIoKSxcbiAgICByZXNwb25zZTogbmV3IEludGVyY2VwdG9yTWFuYWdlcigpXG4gIH07XG59XG5cbi8qKlxuICogRGlzcGF0Y2ggYSByZXF1ZXN0XG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZyBUaGUgY29uZmlnIHNwZWNpZmljIGZvciB0aGlzIHJlcXVlc3QgKG1lcmdlZCB3aXRoIHRoaXMuZGVmYXVsdHMpXG4gKi9cbkF4aW9zLnByb3RvdHlwZS5yZXF1ZXN0ID0gZnVuY3Rpb24gcmVxdWVzdChjb25maWcpIHtcbiAgLyplc2xpbnQgbm8tcGFyYW0tcmVhc3NpZ246MCovXG4gIC8vIEFsbG93IGZvciBheGlvcygnZXhhbXBsZS91cmwnWywgY29uZmlnXSkgYSBsYSBmZXRjaCBBUElcbiAgaWYgKHR5cGVvZiBjb25maWcgPT09ICdzdHJpbmcnKSB7XG4gICAgY29uZmlnID0gdXRpbHMubWVyZ2Uoe1xuICAgICAgdXJsOiBhcmd1bWVudHNbMF1cbiAgICB9LCBhcmd1bWVudHNbMV0pO1xuICB9XG5cbiAgY29uZmlnID0gdXRpbHMubWVyZ2UoZGVmYXVsdHMsIHttZXRob2Q6ICdnZXQnfSwgdGhpcy5kZWZhdWx0cywgY29uZmlnKTtcbiAgY29uZmlnLm1ldGhvZCA9IGNvbmZpZy5tZXRob2QudG9Mb3dlckNhc2UoKTtcblxuICAvLyBIb29rIHVwIGludGVyY2VwdG9ycyBtaWRkbGV3YXJlXG4gIHZhciBjaGFpbiA9IFtkaXNwYXRjaFJlcXVlc3QsIHVuZGVmaW5lZF07XG4gIHZhciBwcm9taXNlID0gUHJvbWlzZS5yZXNvbHZlKGNvbmZpZyk7XG5cbiAgdGhpcy5pbnRlcmNlcHRvcnMucmVxdWVzdC5mb3JFYWNoKGZ1bmN0aW9uIHVuc2hpZnRSZXF1ZXN0SW50ZXJjZXB0b3JzKGludGVyY2VwdG9yKSB7XG4gICAgY2hhaW4udW5zaGlmdChpbnRlcmNlcHRvci5mdWxmaWxsZWQsIGludGVyY2VwdG9yLnJlamVjdGVkKTtcbiAgfSk7XG5cbiAgdGhpcy5pbnRlcmNlcHRvcnMucmVzcG9uc2UuZm9yRWFjaChmdW5jdGlvbiBwdXNoUmVzcG9uc2VJbnRlcmNlcHRvcnMoaW50ZXJjZXB0b3IpIHtcbiAgICBjaGFpbi5wdXNoKGludGVyY2VwdG9yLmZ1bGZpbGxlZCwgaW50ZXJjZXB0b3IucmVqZWN0ZWQpO1xuICB9KTtcblxuICB3aGlsZSAoY2hhaW4ubGVuZ3RoKSB7XG4gICAgcHJvbWlzZSA9IHByb21pc2UudGhlbihjaGFpbi5zaGlmdCgpLCBjaGFpbi5zaGlmdCgpKTtcbiAgfVxuXG4gIHJldHVybiBwcm9taXNlO1xufTtcblxuLy8gUHJvdmlkZSBhbGlhc2VzIGZvciBzdXBwb3J0ZWQgcmVxdWVzdCBtZXRob2RzXG51dGlscy5mb3JFYWNoKFsnZGVsZXRlJywgJ2dldCcsICdoZWFkJywgJ29wdGlvbnMnXSwgZnVuY3Rpb24gZm9yRWFjaE1ldGhvZE5vRGF0YShtZXRob2QpIHtcbiAgLyplc2xpbnQgZnVuYy1uYW1lczowKi9cbiAgQXhpb3MucHJvdG90eXBlW21ldGhvZF0gPSBmdW5jdGlvbih1cmwsIGNvbmZpZykge1xuICAgIHJldHVybiB0aGlzLnJlcXVlc3QodXRpbHMubWVyZ2UoY29uZmlnIHx8IHt9LCB7XG4gICAgICBtZXRob2Q6IG1ldGhvZCxcbiAgICAgIHVybDogdXJsXG4gICAgfSkpO1xuICB9O1xufSk7XG5cbnV0aWxzLmZvckVhY2goWydwb3N0JywgJ3B1dCcsICdwYXRjaCddLCBmdW5jdGlvbiBmb3JFYWNoTWV0aG9kV2l0aERhdGEobWV0aG9kKSB7XG4gIC8qZXNsaW50IGZ1bmMtbmFtZXM6MCovXG4gIEF4aW9zLnByb3RvdHlwZVttZXRob2RdID0gZnVuY3Rpb24odXJsLCBkYXRhLCBjb25maWcpIHtcbiAgICByZXR1cm4gdGhpcy5yZXF1ZXN0KHV0aWxzLm1lcmdlKGNvbmZpZyB8fCB7fSwge1xuICAgICAgbWV0aG9kOiBtZXRob2QsXG4gICAgICB1cmw6IHVybCxcbiAgICAgIGRhdGE6IGRhdGFcbiAgICB9KSk7XG4gIH07XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBBeGlvcztcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi8uLi91dGlscycpO1xuXG5mdW5jdGlvbiBJbnRlcmNlcHRvck1hbmFnZXIoKSB7XG4gIHRoaXMuaGFuZGxlcnMgPSBbXTtcbn1cblxuLyoqXG4gKiBBZGQgYSBuZXcgaW50ZXJjZXB0b3IgdG8gdGhlIHN0YWNrXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVsZmlsbGVkIFRoZSBmdW5jdGlvbiB0byBoYW5kbGUgYHRoZW5gIGZvciBhIGBQcm9taXNlYFxuICogQHBhcmFtIHtGdW5jdGlvbn0gcmVqZWN0ZWQgVGhlIGZ1bmN0aW9uIHRvIGhhbmRsZSBgcmVqZWN0YCBmb3IgYSBgUHJvbWlzZWBcbiAqXG4gKiBAcmV0dXJuIHtOdW1iZXJ9IEFuIElEIHVzZWQgdG8gcmVtb3ZlIGludGVyY2VwdG9yIGxhdGVyXG4gKi9cbkludGVyY2VwdG9yTWFuYWdlci5wcm90b3R5cGUudXNlID0gZnVuY3Rpb24gdXNlKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpIHtcbiAgdGhpcy5oYW5kbGVycy5wdXNoKHtcbiAgICBmdWxmaWxsZWQ6IGZ1bGZpbGxlZCxcbiAgICByZWplY3RlZDogcmVqZWN0ZWRcbiAgfSk7XG4gIHJldHVybiB0aGlzLmhhbmRsZXJzLmxlbmd0aCAtIDE7XG59O1xuXG4vKipcbiAqIFJlbW92ZSBhbiBpbnRlcmNlcHRvciBmcm9tIHRoZSBzdGFja1xuICpcbiAqIEBwYXJhbSB7TnVtYmVyfSBpZCBUaGUgSUQgdGhhdCB3YXMgcmV0dXJuZWQgYnkgYHVzZWBcbiAqL1xuSW50ZXJjZXB0b3JNYW5hZ2VyLnByb3RvdHlwZS5lamVjdCA9IGZ1bmN0aW9uIGVqZWN0KGlkKSB7XG4gIGlmICh0aGlzLmhhbmRsZXJzW2lkXSkge1xuICAgIHRoaXMuaGFuZGxlcnNbaWRdID0gbnVsbDtcbiAgfVxufTtcblxuLyoqXG4gKiBJdGVyYXRlIG92ZXIgYWxsIHRoZSByZWdpc3RlcmVkIGludGVyY2VwdG9yc1xuICpcbiAqIFRoaXMgbWV0aG9kIGlzIHBhcnRpY3VsYXJseSB1c2VmdWwgZm9yIHNraXBwaW5nIG92ZXIgYW55XG4gKiBpbnRlcmNlcHRvcnMgdGhhdCBtYXkgaGF2ZSBiZWNvbWUgYG51bGxgIGNhbGxpbmcgYGVqZWN0YC5cbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmbiBUaGUgZnVuY3Rpb24gdG8gY2FsbCBmb3IgZWFjaCBpbnRlcmNlcHRvclxuICovXG5JbnRlcmNlcHRvck1hbmFnZXIucHJvdG90eXBlLmZvckVhY2ggPSBmdW5jdGlvbiBmb3JFYWNoKGZuKSB7XG4gIHV0aWxzLmZvckVhY2godGhpcy5oYW5kbGVycywgZnVuY3Rpb24gZm9yRWFjaEhhbmRsZXIoaCkge1xuICAgIGlmIChoICE9PSBudWxsKSB7XG4gICAgICBmbihoKTtcbiAgICB9XG4gIH0pO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBJbnRlcmNlcHRvck1hbmFnZXI7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBlbmhhbmNlRXJyb3IgPSByZXF1aXJlKCcuL2VuaGFuY2VFcnJvcicpO1xuXG4vKipcbiAqIENyZWF0ZSBhbiBFcnJvciB3aXRoIHRoZSBzcGVjaWZpZWQgbWVzc2FnZSwgY29uZmlnLCBlcnJvciBjb2RlLCByZXF1ZXN0IGFuZCByZXNwb25zZS5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gbWVzc2FnZSBUaGUgZXJyb3IgbWVzc2FnZS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWcgVGhlIGNvbmZpZy5cbiAqIEBwYXJhbSB7c3RyaW5nfSBbY29kZV0gVGhlIGVycm9yIGNvZGUgKGZvciBleGFtcGxlLCAnRUNPTk5BQk9SVEVEJykuXG4gKiBAcGFyYW0ge09iamVjdH0gW3JlcXVlc3RdIFRoZSByZXF1ZXN0LlxuICogQHBhcmFtIHtPYmplY3R9IFtyZXNwb25zZV0gVGhlIHJlc3BvbnNlLlxuICogQHJldHVybnMge0Vycm9yfSBUaGUgY3JlYXRlZCBlcnJvci5cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjcmVhdGVFcnJvcihtZXNzYWdlLCBjb25maWcsIGNvZGUsIHJlcXVlc3QsIHJlc3BvbnNlKSB7XG4gIHZhciBlcnJvciA9IG5ldyBFcnJvcihtZXNzYWdlKTtcbiAgcmV0dXJuIGVuaGFuY2VFcnJvcihlcnJvciwgY29uZmlnLCBjb2RlLCByZXF1ZXN0LCByZXNwb25zZSk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLy4uL3V0aWxzJyk7XG52YXIgdHJhbnNmb3JtRGF0YSA9IHJlcXVpcmUoJy4vdHJhbnNmb3JtRGF0YScpO1xudmFyIGlzQ2FuY2VsID0gcmVxdWlyZSgnLi4vY2FuY2VsL2lzQ2FuY2VsJyk7XG52YXIgZGVmYXVsdHMgPSByZXF1aXJlKCcuLi9kZWZhdWx0cycpO1xudmFyIGlzQWJzb2x1dGVVUkwgPSByZXF1aXJlKCcuLy4uL2hlbHBlcnMvaXNBYnNvbHV0ZVVSTCcpO1xudmFyIGNvbWJpbmVVUkxzID0gcmVxdWlyZSgnLi8uLi9oZWxwZXJzL2NvbWJpbmVVUkxzJyk7XG5cbi8qKlxuICogVGhyb3dzIGEgYENhbmNlbGAgaWYgY2FuY2VsbGF0aW9uIGhhcyBiZWVuIHJlcXVlc3RlZC5cbiAqL1xuZnVuY3Rpb24gdGhyb3dJZkNhbmNlbGxhdGlvblJlcXVlc3RlZChjb25maWcpIHtcbiAgaWYgKGNvbmZpZy5jYW5jZWxUb2tlbikge1xuICAgIGNvbmZpZy5jYW5jZWxUb2tlbi50aHJvd0lmUmVxdWVzdGVkKCk7XG4gIH1cbn1cblxuLyoqXG4gKiBEaXNwYXRjaCBhIHJlcXVlc3QgdG8gdGhlIHNlcnZlciB1c2luZyB0aGUgY29uZmlndXJlZCBhZGFwdGVyLlxuICpcbiAqIEBwYXJhbSB7b2JqZWN0fSBjb25maWcgVGhlIGNvbmZpZyB0aGF0IGlzIHRvIGJlIHVzZWQgZm9yIHRoZSByZXF1ZXN0XG4gKiBAcmV0dXJucyB7UHJvbWlzZX0gVGhlIFByb21pc2UgdG8gYmUgZnVsZmlsbGVkXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZGlzcGF0Y2hSZXF1ZXN0KGNvbmZpZykge1xuICB0aHJvd0lmQ2FuY2VsbGF0aW9uUmVxdWVzdGVkKGNvbmZpZyk7XG5cbiAgLy8gU3VwcG9ydCBiYXNlVVJMIGNvbmZpZ1xuICBpZiAoY29uZmlnLmJhc2VVUkwgJiYgIWlzQWJzb2x1dGVVUkwoY29uZmlnLnVybCkpIHtcbiAgICBjb25maWcudXJsID0gY29tYmluZVVSTHMoY29uZmlnLmJhc2VVUkwsIGNvbmZpZy51cmwpO1xuICB9XG5cbiAgLy8gRW5zdXJlIGhlYWRlcnMgZXhpc3RcbiAgY29uZmlnLmhlYWRlcnMgPSBjb25maWcuaGVhZGVycyB8fCB7fTtcblxuICAvLyBUcmFuc2Zvcm0gcmVxdWVzdCBkYXRhXG4gIGNvbmZpZy5kYXRhID0gdHJhbnNmb3JtRGF0YShcbiAgICBjb25maWcuZGF0YSxcbiAgICBjb25maWcuaGVhZGVycyxcbiAgICBjb25maWcudHJhbnNmb3JtUmVxdWVzdFxuICApO1xuXG4gIC8vIEZsYXR0ZW4gaGVhZGVyc1xuICBjb25maWcuaGVhZGVycyA9IHV0aWxzLm1lcmdlKFxuICAgIGNvbmZpZy5oZWFkZXJzLmNvbW1vbiB8fCB7fSxcbiAgICBjb25maWcuaGVhZGVyc1tjb25maWcubWV0aG9kXSB8fCB7fSxcbiAgICBjb25maWcuaGVhZGVycyB8fCB7fVxuICApO1xuXG4gIHV0aWxzLmZvckVhY2goXG4gICAgWydkZWxldGUnLCAnZ2V0JywgJ2hlYWQnLCAncG9zdCcsICdwdXQnLCAncGF0Y2gnLCAnY29tbW9uJ10sXG4gICAgZnVuY3Rpb24gY2xlYW5IZWFkZXJDb25maWcobWV0aG9kKSB7XG4gICAgICBkZWxldGUgY29uZmlnLmhlYWRlcnNbbWV0aG9kXTtcbiAgICB9XG4gICk7XG5cbiAgdmFyIGFkYXB0ZXIgPSBjb25maWcuYWRhcHRlciB8fCBkZWZhdWx0cy5hZGFwdGVyO1xuXG4gIHJldHVybiBhZGFwdGVyKGNvbmZpZykudGhlbihmdW5jdGlvbiBvbkFkYXB0ZXJSZXNvbHV0aW9uKHJlc3BvbnNlKSB7XG4gICAgdGhyb3dJZkNhbmNlbGxhdGlvblJlcXVlc3RlZChjb25maWcpO1xuXG4gICAgLy8gVHJhbnNmb3JtIHJlc3BvbnNlIGRhdGFcbiAgICByZXNwb25zZS5kYXRhID0gdHJhbnNmb3JtRGF0YShcbiAgICAgIHJlc3BvbnNlLmRhdGEsXG4gICAgICByZXNwb25zZS5oZWFkZXJzLFxuICAgICAgY29uZmlnLnRyYW5zZm9ybVJlc3BvbnNlXG4gICAgKTtcblxuICAgIHJldHVybiByZXNwb25zZTtcbiAgfSwgZnVuY3Rpb24gb25BZGFwdGVyUmVqZWN0aW9uKHJlYXNvbikge1xuICAgIGlmICghaXNDYW5jZWwocmVhc29uKSkge1xuICAgICAgdGhyb3dJZkNhbmNlbGxhdGlvblJlcXVlc3RlZChjb25maWcpO1xuXG4gICAgICAvLyBUcmFuc2Zvcm0gcmVzcG9uc2UgZGF0YVxuICAgICAgaWYgKHJlYXNvbiAmJiByZWFzb24ucmVzcG9uc2UpIHtcbiAgICAgICAgcmVhc29uLnJlc3BvbnNlLmRhdGEgPSB0cmFuc2Zvcm1EYXRhKFxuICAgICAgICAgIHJlYXNvbi5yZXNwb25zZS5kYXRhLFxuICAgICAgICAgIHJlYXNvbi5yZXNwb25zZS5oZWFkZXJzLFxuICAgICAgICAgIGNvbmZpZy50cmFuc2Zvcm1SZXNwb25zZVxuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBQcm9taXNlLnJlamVjdChyZWFzb24pO1xuICB9KTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbi8qKlxuICogVXBkYXRlIGFuIEVycm9yIHdpdGggdGhlIHNwZWNpZmllZCBjb25maWcsIGVycm9yIGNvZGUsIGFuZCByZXNwb25zZS5cbiAqXG4gKiBAcGFyYW0ge0Vycm9yfSBlcnJvciBUaGUgZXJyb3IgdG8gdXBkYXRlLlxuICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZyBUaGUgY29uZmlnLlxuICogQHBhcmFtIHtzdHJpbmd9IFtjb2RlXSBUaGUgZXJyb3IgY29kZSAoZm9yIGV4YW1wbGUsICdFQ09OTkFCT1JURUQnKS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbcmVxdWVzdF0gVGhlIHJlcXVlc3QuXG4gKiBAcGFyYW0ge09iamVjdH0gW3Jlc3BvbnNlXSBUaGUgcmVzcG9uc2UuXG4gKiBAcmV0dXJucyB7RXJyb3J9IFRoZSBlcnJvci5cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBlbmhhbmNlRXJyb3IoZXJyb3IsIGNvbmZpZywgY29kZSwgcmVxdWVzdCwgcmVzcG9uc2UpIHtcbiAgZXJyb3IuY29uZmlnID0gY29uZmlnO1xuICBpZiAoY29kZSkge1xuICAgIGVycm9yLmNvZGUgPSBjb2RlO1xuICB9XG4gIGVycm9yLnJlcXVlc3QgPSByZXF1ZXN0O1xuICBlcnJvci5yZXNwb25zZSA9IHJlc3BvbnNlO1xuICByZXR1cm4gZXJyb3I7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgY3JlYXRlRXJyb3IgPSByZXF1aXJlKCcuL2NyZWF0ZUVycm9yJyk7XG5cbi8qKlxuICogUmVzb2x2ZSBvciByZWplY3QgYSBQcm9taXNlIGJhc2VkIG9uIHJlc3BvbnNlIHN0YXR1cy5cbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSByZXNvbHZlIEEgZnVuY3Rpb24gdGhhdCByZXNvbHZlcyB0aGUgcHJvbWlzZS5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IHJlamVjdCBBIGZ1bmN0aW9uIHRoYXQgcmVqZWN0cyB0aGUgcHJvbWlzZS5cbiAqIEBwYXJhbSB7b2JqZWN0fSByZXNwb25zZSBUaGUgcmVzcG9uc2UuXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgcmVzcG9uc2UpIHtcbiAgdmFyIHZhbGlkYXRlU3RhdHVzID0gcmVzcG9uc2UuY29uZmlnLnZhbGlkYXRlU3RhdHVzO1xuICAvLyBOb3RlOiBzdGF0dXMgaXMgbm90IGV4cG9zZWQgYnkgWERvbWFpblJlcXVlc3RcbiAgaWYgKCFyZXNwb25zZS5zdGF0dXMgfHwgIXZhbGlkYXRlU3RhdHVzIHx8IHZhbGlkYXRlU3RhdHVzKHJlc3BvbnNlLnN0YXR1cykpIHtcbiAgICByZXNvbHZlKHJlc3BvbnNlKTtcbiAgfSBlbHNlIHtcbiAgICByZWplY3QoY3JlYXRlRXJyb3IoXG4gICAgICAnUmVxdWVzdCBmYWlsZWQgd2l0aCBzdGF0dXMgY29kZSAnICsgcmVzcG9uc2Uuc3RhdHVzLFxuICAgICAgcmVzcG9uc2UuY29uZmlnLFxuICAgICAgbnVsbCxcbiAgICAgIHJlc3BvbnNlLnJlcXVlc3QsXG4gICAgICByZXNwb25zZVxuICAgICkpO1xuICB9XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLy4uL3V0aWxzJyk7XG5cbi8qKlxuICogVHJhbnNmb3JtIHRoZSBkYXRhIGZvciBhIHJlcXVlc3Qgb3IgYSByZXNwb25zZVxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fFN0cmluZ30gZGF0YSBUaGUgZGF0YSB0byBiZSB0cmFuc2Zvcm1lZFxuICogQHBhcmFtIHtBcnJheX0gaGVhZGVycyBUaGUgaGVhZGVycyBmb3IgdGhlIHJlcXVlc3Qgb3IgcmVzcG9uc2VcbiAqIEBwYXJhbSB7QXJyYXl8RnVuY3Rpb259IGZucyBBIHNpbmdsZSBmdW5jdGlvbiBvciBBcnJheSBvZiBmdW5jdGlvbnNcbiAqIEByZXR1cm5zIHsqfSBUaGUgcmVzdWx0aW5nIHRyYW5zZm9ybWVkIGRhdGFcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiB0cmFuc2Zvcm1EYXRhKGRhdGEsIGhlYWRlcnMsIGZucykge1xuICAvKmVzbGludCBuby1wYXJhbS1yZWFzc2lnbjowKi9cbiAgdXRpbHMuZm9yRWFjaChmbnMsIGZ1bmN0aW9uIHRyYW5zZm9ybShmbikge1xuICAgIGRhdGEgPSBmbihkYXRhLCBoZWFkZXJzKTtcbiAgfSk7XG5cbiAgcmV0dXJuIGRhdGE7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuL3V0aWxzJyk7XG52YXIgbm9ybWFsaXplSGVhZGVyTmFtZSA9IHJlcXVpcmUoJy4vaGVscGVycy9ub3JtYWxpemVIZWFkZXJOYW1lJyk7XG5cbnZhciBERUZBVUxUX0NPTlRFTlRfVFlQRSA9IHtcbiAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnXG59O1xuXG5mdW5jdGlvbiBzZXRDb250ZW50VHlwZUlmVW5zZXQoaGVhZGVycywgdmFsdWUpIHtcbiAgaWYgKCF1dGlscy5pc1VuZGVmaW5lZChoZWFkZXJzKSAmJiB1dGlscy5pc1VuZGVmaW5lZChoZWFkZXJzWydDb250ZW50LVR5cGUnXSkpIHtcbiAgICBoZWFkZXJzWydDb250ZW50LVR5cGUnXSA9IHZhbHVlO1xuICB9XG59XG5cbmZ1bmN0aW9uIGdldERlZmF1bHRBZGFwdGVyKCkge1xuICB2YXIgYWRhcHRlcjtcbiAgaWYgKHR5cGVvZiBYTUxIdHRwUmVxdWVzdCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAvLyBGb3IgYnJvd3NlcnMgdXNlIFhIUiBhZGFwdGVyXG4gICAgYWRhcHRlciA9IHJlcXVpcmUoJy4vYWRhcHRlcnMveGhyJyk7XG4gIH0gZWxzZSBpZiAodHlwZW9mIHByb2Nlc3MgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgLy8gRm9yIG5vZGUgdXNlIEhUVFAgYWRhcHRlclxuICAgIGFkYXB0ZXIgPSByZXF1aXJlKCcuL2FkYXB0ZXJzL2h0dHAnKTtcbiAgfVxuICByZXR1cm4gYWRhcHRlcjtcbn1cblxudmFyIGRlZmF1bHRzID0ge1xuICBhZGFwdGVyOiBnZXREZWZhdWx0QWRhcHRlcigpLFxuXG4gIHRyYW5zZm9ybVJlcXVlc3Q6IFtmdW5jdGlvbiB0cmFuc2Zvcm1SZXF1ZXN0KGRhdGEsIGhlYWRlcnMpIHtcbiAgICBub3JtYWxpemVIZWFkZXJOYW1lKGhlYWRlcnMsICdDb250ZW50LVR5cGUnKTtcbiAgICBpZiAodXRpbHMuaXNGb3JtRGF0YShkYXRhKSB8fFxuICAgICAgdXRpbHMuaXNBcnJheUJ1ZmZlcihkYXRhKSB8fFxuICAgICAgdXRpbHMuaXNCdWZmZXIoZGF0YSkgfHxcbiAgICAgIHV0aWxzLmlzU3RyZWFtKGRhdGEpIHx8XG4gICAgICB1dGlscy5pc0ZpbGUoZGF0YSkgfHxcbiAgICAgIHV0aWxzLmlzQmxvYihkYXRhKVxuICAgICkge1xuICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfVxuICAgIGlmICh1dGlscy5pc0FycmF5QnVmZmVyVmlldyhkYXRhKSkge1xuICAgICAgcmV0dXJuIGRhdGEuYnVmZmVyO1xuICAgIH1cbiAgICBpZiAodXRpbHMuaXNVUkxTZWFyY2hQYXJhbXMoZGF0YSkpIHtcbiAgICAgIHNldENvbnRlbnRUeXBlSWZVbnNldChoZWFkZXJzLCAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkO2NoYXJzZXQ9dXRmLTgnKTtcbiAgICAgIHJldHVybiBkYXRhLnRvU3RyaW5nKCk7XG4gICAgfVxuICAgIGlmICh1dGlscy5pc09iamVjdChkYXRhKSkge1xuICAgICAgc2V0Q29udGVudFR5cGVJZlVuc2V0KGhlYWRlcnMsICdhcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTgnKTtcbiAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShkYXRhKTtcbiAgICB9XG4gICAgcmV0dXJuIGRhdGE7XG4gIH1dLFxuXG4gIHRyYW5zZm9ybVJlc3BvbnNlOiBbZnVuY3Rpb24gdHJhbnNmb3JtUmVzcG9uc2UoZGF0YSkge1xuICAgIC8qZXNsaW50IG5vLXBhcmFtLXJlYXNzaWduOjAqL1xuICAgIGlmICh0eXBlb2YgZGF0YSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGRhdGEgPSBKU09OLnBhcnNlKGRhdGEpO1xuICAgICAgfSBjYXRjaCAoZSkgeyAvKiBJZ25vcmUgKi8gfVxuICAgIH1cbiAgICByZXR1cm4gZGF0YTtcbiAgfV0sXG5cbiAgLyoqXG4gICAqIEEgdGltZW91dCBpbiBtaWxsaXNlY29uZHMgdG8gYWJvcnQgYSByZXF1ZXN0LiBJZiBzZXQgdG8gMCAoZGVmYXVsdCkgYVxuICAgKiB0aW1lb3V0IGlzIG5vdCBjcmVhdGVkLlxuICAgKi9cbiAgdGltZW91dDogMCxcblxuICB4c3JmQ29va2llTmFtZTogJ1hTUkYtVE9LRU4nLFxuICB4c3JmSGVhZGVyTmFtZTogJ1gtWFNSRi1UT0tFTicsXG5cbiAgbWF4Q29udGVudExlbmd0aDogLTEsXG5cbiAgdmFsaWRhdGVTdGF0dXM6IGZ1bmN0aW9uIHZhbGlkYXRlU3RhdHVzKHN0YXR1cykge1xuICAgIHJldHVybiBzdGF0dXMgPj0gMjAwICYmIHN0YXR1cyA8IDMwMDtcbiAgfVxufTtcblxuZGVmYXVsdHMuaGVhZGVycyA9IHtcbiAgY29tbW9uOiB7XG4gICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uLCB0ZXh0L3BsYWluLCAqLyonXG4gIH1cbn07XG5cbnV0aWxzLmZvckVhY2goWydkZWxldGUnLCAnZ2V0JywgJ2hlYWQnXSwgZnVuY3Rpb24gZm9yRWFjaE1ldGhvZE5vRGF0YShtZXRob2QpIHtcbiAgZGVmYXVsdHMuaGVhZGVyc1ttZXRob2RdID0ge307XG59KTtcblxudXRpbHMuZm9yRWFjaChbJ3Bvc3QnLCAncHV0JywgJ3BhdGNoJ10sIGZ1bmN0aW9uIGZvckVhY2hNZXRob2RXaXRoRGF0YShtZXRob2QpIHtcbiAgZGVmYXVsdHMuaGVhZGVyc1ttZXRob2RdID0gdXRpbHMubWVyZ2UoREVGQVVMVF9DT05URU5UX1RZUEUpO1xufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gZGVmYXVsdHM7XG4iLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gYmluZChmbiwgdGhpc0FyZykge1xuICByZXR1cm4gZnVuY3Rpb24gd3JhcCgpIHtcbiAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoKTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3MubGVuZ3RoOyBpKyspIHtcbiAgICAgIGFyZ3NbaV0gPSBhcmd1bWVudHNbaV07XG4gICAgfVxuICAgIHJldHVybiBmbi5hcHBseSh0aGlzQXJnLCBhcmdzKTtcbiAgfTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbi8vIGJ0b2EgcG9seWZpbGwgZm9yIElFPDEwIGNvdXJ0ZXN5IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXZpZGNoYW1iZXJzL0Jhc2U2NC5qc1xuXG52YXIgY2hhcnMgPSAnQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVphYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ejAxMjM0NTY3ODkrLz0nO1xuXG5mdW5jdGlvbiBFKCkge1xuICB0aGlzLm1lc3NhZ2UgPSAnU3RyaW5nIGNvbnRhaW5zIGFuIGludmFsaWQgY2hhcmFjdGVyJztcbn1cbkUucHJvdG90eXBlID0gbmV3IEVycm9yO1xuRS5wcm90b3R5cGUuY29kZSA9IDU7XG5FLnByb3RvdHlwZS5uYW1lID0gJ0ludmFsaWRDaGFyYWN0ZXJFcnJvcic7XG5cbmZ1bmN0aW9uIGJ0b2EoaW5wdXQpIHtcbiAgdmFyIHN0ciA9IFN0cmluZyhpbnB1dCk7XG4gIHZhciBvdXRwdXQgPSAnJztcbiAgZm9yIChcbiAgICAvLyBpbml0aWFsaXplIHJlc3VsdCBhbmQgY291bnRlclxuICAgIHZhciBibG9jaywgY2hhckNvZGUsIGlkeCA9IDAsIG1hcCA9IGNoYXJzO1xuICAgIC8vIGlmIHRoZSBuZXh0IHN0ciBpbmRleCBkb2VzIG5vdCBleGlzdDpcbiAgICAvLyAgIGNoYW5nZSB0aGUgbWFwcGluZyB0YWJsZSB0byBcIj1cIlxuICAgIC8vICAgY2hlY2sgaWYgZCBoYXMgbm8gZnJhY3Rpb25hbCBkaWdpdHNcbiAgICBzdHIuY2hhckF0KGlkeCB8IDApIHx8IChtYXAgPSAnPScsIGlkeCAlIDEpO1xuICAgIC8vIFwiOCAtIGlkeCAlIDEgKiA4XCIgZ2VuZXJhdGVzIHRoZSBzZXF1ZW5jZSAyLCA0LCA2LCA4XG4gICAgb3V0cHV0ICs9IG1hcC5jaGFyQXQoNjMgJiBibG9jayA+PiA4IC0gaWR4ICUgMSAqIDgpXG4gICkge1xuICAgIGNoYXJDb2RlID0gc3RyLmNoYXJDb2RlQXQoaWR4ICs9IDMgLyA0KTtcbiAgICBpZiAoY2hhckNvZGUgPiAweEZGKSB7XG4gICAgICB0aHJvdyBuZXcgRSgpO1xuICAgIH1cbiAgICBibG9jayA9IGJsb2NrIDw8IDggfCBjaGFyQ29kZTtcbiAgfVxuICByZXR1cm4gb3V0cHV0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJ0b2E7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vLi4vdXRpbHMnKTtcblxuZnVuY3Rpb24gZW5jb2RlKHZhbCkge1xuICByZXR1cm4gZW5jb2RlVVJJQ29tcG9uZW50KHZhbCkuXG4gICAgcmVwbGFjZSgvJTQwL2dpLCAnQCcpLlxuICAgIHJlcGxhY2UoLyUzQS9naSwgJzonKS5cbiAgICByZXBsYWNlKC8lMjQvZywgJyQnKS5cbiAgICByZXBsYWNlKC8lMkMvZ2ksICcsJykuXG4gICAgcmVwbGFjZSgvJTIwL2csICcrJykuXG4gICAgcmVwbGFjZSgvJTVCL2dpLCAnWycpLlxuICAgIHJlcGxhY2UoLyU1RC9naSwgJ10nKTtcbn1cblxuLyoqXG4gKiBCdWlsZCBhIFVSTCBieSBhcHBlbmRpbmcgcGFyYW1zIHRvIHRoZSBlbmRcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gdXJsIFRoZSBiYXNlIG9mIHRoZSB1cmwgKGUuZy4sIGh0dHA6Ly93d3cuZ29vZ2xlLmNvbSlcbiAqIEBwYXJhbSB7b2JqZWN0fSBbcGFyYW1zXSBUaGUgcGFyYW1zIHRvIGJlIGFwcGVuZGVkXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBUaGUgZm9ybWF0dGVkIHVybFxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGJ1aWxkVVJMKHVybCwgcGFyYW1zLCBwYXJhbXNTZXJpYWxpemVyKSB7XG4gIC8qZXNsaW50IG5vLXBhcmFtLXJlYXNzaWduOjAqL1xuICBpZiAoIXBhcmFtcykge1xuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICB2YXIgc2VyaWFsaXplZFBhcmFtcztcbiAgaWYgKHBhcmFtc1NlcmlhbGl6ZXIpIHtcbiAgICBzZXJpYWxpemVkUGFyYW1zID0gcGFyYW1zU2VyaWFsaXplcihwYXJhbXMpO1xuICB9IGVsc2UgaWYgKHV0aWxzLmlzVVJMU2VhcmNoUGFyYW1zKHBhcmFtcykpIHtcbiAgICBzZXJpYWxpemVkUGFyYW1zID0gcGFyYW1zLnRvU3RyaW5nKCk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHBhcnRzID0gW107XG5cbiAgICB1dGlscy5mb3JFYWNoKHBhcmFtcywgZnVuY3Rpb24gc2VyaWFsaXplKHZhbCwga2V5KSB7XG4gICAgICBpZiAodmFsID09PSBudWxsIHx8IHR5cGVvZiB2YWwgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKHV0aWxzLmlzQXJyYXkodmFsKSkge1xuICAgICAgICBrZXkgPSBrZXkgKyAnW10nO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFsID0gW3ZhbF07XG4gICAgICB9XG5cbiAgICAgIHV0aWxzLmZvckVhY2godmFsLCBmdW5jdGlvbiBwYXJzZVZhbHVlKHYpIHtcbiAgICAgICAgaWYgKHV0aWxzLmlzRGF0ZSh2KSkge1xuICAgICAgICAgIHYgPSB2LnRvSVNPU3RyaW5nKCk7XG4gICAgICAgIH0gZWxzZSBpZiAodXRpbHMuaXNPYmplY3QodikpIHtcbiAgICAgICAgICB2ID0gSlNPTi5zdHJpbmdpZnkodik7XG4gICAgICAgIH1cbiAgICAgICAgcGFydHMucHVzaChlbmNvZGUoa2V5KSArICc9JyArIGVuY29kZSh2KSk7XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIHNlcmlhbGl6ZWRQYXJhbXMgPSBwYXJ0cy5qb2luKCcmJyk7XG4gIH1cblxuICBpZiAoc2VyaWFsaXplZFBhcmFtcykge1xuICAgIHVybCArPSAodXJsLmluZGV4T2YoJz8nKSA9PT0gLTEgPyAnPycgOiAnJicpICsgc2VyaWFsaXplZFBhcmFtcztcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBuZXcgVVJMIGJ5IGNvbWJpbmluZyB0aGUgc3BlY2lmaWVkIFVSTHNcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gYmFzZVVSTCBUaGUgYmFzZSBVUkxcbiAqIEBwYXJhbSB7c3RyaW5nfSByZWxhdGl2ZVVSTCBUaGUgcmVsYXRpdmUgVVJMXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBUaGUgY29tYmluZWQgVVJMXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY29tYmluZVVSTHMoYmFzZVVSTCwgcmVsYXRpdmVVUkwpIHtcbiAgcmV0dXJuIHJlbGF0aXZlVVJMXG4gICAgPyBiYXNlVVJMLnJlcGxhY2UoL1xcLyskLywgJycpICsgJy8nICsgcmVsYXRpdmVVUkwucmVwbGFjZSgvXlxcLysvLCAnJylcbiAgICA6IGJhc2VVUkw7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLy4uL3V0aWxzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gKFxuICB1dGlscy5pc1N0YW5kYXJkQnJvd3NlckVudigpID9cblxuICAvLyBTdGFuZGFyZCBicm93c2VyIGVudnMgc3VwcG9ydCBkb2N1bWVudC5jb29raWVcbiAgKGZ1bmN0aW9uIHN0YW5kYXJkQnJvd3NlckVudigpIHtcbiAgICByZXR1cm4ge1xuICAgICAgd3JpdGU6IGZ1bmN0aW9uIHdyaXRlKG5hbWUsIHZhbHVlLCBleHBpcmVzLCBwYXRoLCBkb21haW4sIHNlY3VyZSkge1xuICAgICAgICB2YXIgY29va2llID0gW107XG4gICAgICAgIGNvb2tpZS5wdXNoKG5hbWUgKyAnPScgKyBlbmNvZGVVUklDb21wb25lbnQodmFsdWUpKTtcblxuICAgICAgICBpZiAodXRpbHMuaXNOdW1iZXIoZXhwaXJlcykpIHtcbiAgICAgICAgICBjb29raWUucHVzaCgnZXhwaXJlcz0nICsgbmV3IERhdGUoZXhwaXJlcykudG9HTVRTdHJpbmcoKSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodXRpbHMuaXNTdHJpbmcocGF0aCkpIHtcbiAgICAgICAgICBjb29raWUucHVzaCgncGF0aD0nICsgcGF0aCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodXRpbHMuaXNTdHJpbmcoZG9tYWluKSkge1xuICAgICAgICAgIGNvb2tpZS5wdXNoKCdkb21haW49JyArIGRvbWFpbik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoc2VjdXJlID09PSB0cnVlKSB7XG4gICAgICAgICAgY29va2llLnB1c2goJ3NlY3VyZScpO1xuICAgICAgICB9XG5cbiAgICAgICAgZG9jdW1lbnQuY29va2llID0gY29va2llLmpvaW4oJzsgJyk7XG4gICAgICB9LFxuXG4gICAgICByZWFkOiBmdW5jdGlvbiByZWFkKG5hbWUpIHtcbiAgICAgICAgdmFyIG1hdGNoID0gZG9jdW1lbnQuY29va2llLm1hdGNoKG5ldyBSZWdFeHAoJyhefDtcXFxccyopKCcgKyBuYW1lICsgJyk9KFteO10qKScpKTtcbiAgICAgICAgcmV0dXJuIChtYXRjaCA/IGRlY29kZVVSSUNvbXBvbmVudChtYXRjaFszXSkgOiBudWxsKTtcbiAgICAgIH0sXG5cbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKG5hbWUpIHtcbiAgICAgICAgdGhpcy53cml0ZShuYW1lLCAnJywgRGF0ZS5ub3coKSAtIDg2NDAwMDAwKTtcbiAgICAgIH1cbiAgICB9O1xuICB9KSgpIDpcblxuICAvLyBOb24gc3RhbmRhcmQgYnJvd3NlciBlbnYgKHdlYiB3b3JrZXJzLCByZWFjdC1uYXRpdmUpIGxhY2sgbmVlZGVkIHN1cHBvcnQuXG4gIChmdW5jdGlvbiBub25TdGFuZGFyZEJyb3dzZXJFbnYoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHdyaXRlOiBmdW5jdGlvbiB3cml0ZSgpIHt9LFxuICAgICAgcmVhZDogZnVuY3Rpb24gcmVhZCgpIHsgcmV0dXJuIG51bGw7IH0sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfSkoKVxuKTtcbiIsIid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIHNwZWNpZmllZCBVUkwgaXMgYWJzb2x1dGVcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gdXJsIFRoZSBVUkwgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdGhlIHNwZWNpZmllZCBVUkwgaXMgYWJzb2x1dGUsIG90aGVyd2lzZSBmYWxzZVxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGlzQWJzb2x1dGVVUkwodXJsKSB7XG4gIC8vIEEgVVJMIGlzIGNvbnNpZGVyZWQgYWJzb2x1dGUgaWYgaXQgYmVnaW5zIHdpdGggXCI8c2NoZW1lPjovL1wiIG9yIFwiLy9cIiAocHJvdG9jb2wtcmVsYXRpdmUgVVJMKS5cbiAgLy8gUkZDIDM5ODYgZGVmaW5lcyBzY2hlbWUgbmFtZSBhcyBhIHNlcXVlbmNlIG9mIGNoYXJhY3RlcnMgYmVnaW5uaW5nIHdpdGggYSBsZXR0ZXIgYW5kIGZvbGxvd2VkXG4gIC8vIGJ5IGFueSBjb21iaW5hdGlvbiBvZiBsZXR0ZXJzLCBkaWdpdHMsIHBsdXMsIHBlcmlvZCwgb3IgaHlwaGVuLlxuICByZXR1cm4gL14oW2Etel1bYS16XFxkXFwrXFwtXFwuXSo6KT9cXC9cXC8vaS50ZXN0KHVybCk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLy4uL3V0aWxzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gKFxuICB1dGlscy5pc1N0YW5kYXJkQnJvd3NlckVudigpID9cblxuICAvLyBTdGFuZGFyZCBicm93c2VyIGVudnMgaGF2ZSBmdWxsIHN1cHBvcnQgb2YgdGhlIEFQSXMgbmVlZGVkIHRvIHRlc3RcbiAgLy8gd2hldGhlciB0aGUgcmVxdWVzdCBVUkwgaXMgb2YgdGhlIHNhbWUgb3JpZ2luIGFzIGN1cnJlbnQgbG9jYXRpb24uXG4gIChmdW5jdGlvbiBzdGFuZGFyZEJyb3dzZXJFbnYoKSB7XG4gICAgdmFyIG1zaWUgPSAvKG1zaWV8dHJpZGVudCkvaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpO1xuICAgIHZhciB1cmxQYXJzaW5nTm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICB2YXIgb3JpZ2luVVJMO1xuXG4gICAgLyoqXG4gICAgKiBQYXJzZSBhIFVSTCB0byBkaXNjb3ZlciBpdCdzIGNvbXBvbmVudHNcbiAgICAqXG4gICAgKiBAcGFyYW0ge1N0cmluZ30gdXJsIFRoZSBVUkwgdG8gYmUgcGFyc2VkXG4gICAgKiBAcmV0dXJucyB7T2JqZWN0fVxuICAgICovXG4gICAgZnVuY3Rpb24gcmVzb2x2ZVVSTCh1cmwpIHtcbiAgICAgIHZhciBocmVmID0gdXJsO1xuXG4gICAgICBpZiAobXNpZSkge1xuICAgICAgICAvLyBJRSBuZWVkcyBhdHRyaWJ1dGUgc2V0IHR3aWNlIHRvIG5vcm1hbGl6ZSBwcm9wZXJ0aWVzXG4gICAgICAgIHVybFBhcnNpbmdOb2RlLnNldEF0dHJpYnV0ZSgnaHJlZicsIGhyZWYpO1xuICAgICAgICBocmVmID0gdXJsUGFyc2luZ05vZGUuaHJlZjtcbiAgICAgIH1cblxuICAgICAgdXJsUGFyc2luZ05vZGUuc2V0QXR0cmlidXRlKCdocmVmJywgaHJlZik7XG5cbiAgICAgIC8vIHVybFBhcnNpbmdOb2RlIHByb3ZpZGVzIHRoZSBVcmxVdGlscyBpbnRlcmZhY2UgLSBodHRwOi8vdXJsLnNwZWMud2hhdHdnLm9yZy8jdXJsdXRpbHNcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGhyZWY6IHVybFBhcnNpbmdOb2RlLmhyZWYsXG4gICAgICAgIHByb3RvY29sOiB1cmxQYXJzaW5nTm9kZS5wcm90b2NvbCA/IHVybFBhcnNpbmdOb2RlLnByb3RvY29sLnJlcGxhY2UoLzokLywgJycpIDogJycsXG4gICAgICAgIGhvc3Q6IHVybFBhcnNpbmdOb2RlLmhvc3QsXG4gICAgICAgIHNlYXJjaDogdXJsUGFyc2luZ05vZGUuc2VhcmNoID8gdXJsUGFyc2luZ05vZGUuc2VhcmNoLnJlcGxhY2UoL15cXD8vLCAnJykgOiAnJyxcbiAgICAgICAgaGFzaDogdXJsUGFyc2luZ05vZGUuaGFzaCA/IHVybFBhcnNpbmdOb2RlLmhhc2gucmVwbGFjZSgvXiMvLCAnJykgOiAnJyxcbiAgICAgICAgaG9zdG5hbWU6IHVybFBhcnNpbmdOb2RlLmhvc3RuYW1lLFxuICAgICAgICBwb3J0OiB1cmxQYXJzaW5nTm9kZS5wb3J0LFxuICAgICAgICBwYXRobmFtZTogKHVybFBhcnNpbmdOb2RlLnBhdGhuYW1lLmNoYXJBdCgwKSA9PT0gJy8nKSA/XG4gICAgICAgICAgICAgICAgICB1cmxQYXJzaW5nTm9kZS5wYXRobmFtZSA6XG4gICAgICAgICAgICAgICAgICAnLycgKyB1cmxQYXJzaW5nTm9kZS5wYXRobmFtZVxuICAgICAgfTtcbiAgICB9XG5cbiAgICBvcmlnaW5VUkwgPSByZXNvbHZlVVJMKHdpbmRvdy5sb2NhdGlvbi5ocmVmKTtcblxuICAgIC8qKlxuICAgICogRGV0ZXJtaW5lIGlmIGEgVVJMIHNoYXJlcyB0aGUgc2FtZSBvcmlnaW4gYXMgdGhlIGN1cnJlbnQgbG9jYXRpb25cbiAgICAqXG4gICAgKiBAcGFyYW0ge1N0cmluZ30gcmVxdWVzdFVSTCBUaGUgVVJMIHRvIHRlc3RcbiAgICAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIFVSTCBzaGFyZXMgdGhlIHNhbWUgb3JpZ2luLCBvdGhlcndpc2UgZmFsc2VcbiAgICAqL1xuICAgIHJldHVybiBmdW5jdGlvbiBpc1VSTFNhbWVPcmlnaW4ocmVxdWVzdFVSTCkge1xuICAgICAgdmFyIHBhcnNlZCA9ICh1dGlscy5pc1N0cmluZyhyZXF1ZXN0VVJMKSkgPyByZXNvbHZlVVJMKHJlcXVlc3RVUkwpIDogcmVxdWVzdFVSTDtcbiAgICAgIHJldHVybiAocGFyc2VkLnByb3RvY29sID09PSBvcmlnaW5VUkwucHJvdG9jb2wgJiZcbiAgICAgICAgICAgIHBhcnNlZC5ob3N0ID09PSBvcmlnaW5VUkwuaG9zdCk7XG4gICAgfTtcbiAgfSkoKSA6XG5cbiAgLy8gTm9uIHN0YW5kYXJkIGJyb3dzZXIgZW52cyAod2ViIHdvcmtlcnMsIHJlYWN0LW5hdGl2ZSkgbGFjayBuZWVkZWQgc3VwcG9ydC5cbiAgKGZ1bmN0aW9uIG5vblN0YW5kYXJkQnJvd3NlckVudigpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gaXNVUkxTYW1lT3JpZ2luKCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfTtcbiAgfSkoKVxuKTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi4vdXRpbHMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBub3JtYWxpemVIZWFkZXJOYW1lKGhlYWRlcnMsIG5vcm1hbGl6ZWROYW1lKSB7XG4gIHV0aWxzLmZvckVhY2goaGVhZGVycywgZnVuY3Rpb24gcHJvY2Vzc0hlYWRlcih2YWx1ZSwgbmFtZSkge1xuICAgIGlmIChuYW1lICE9PSBub3JtYWxpemVkTmFtZSAmJiBuYW1lLnRvVXBwZXJDYXNlKCkgPT09IG5vcm1hbGl6ZWROYW1lLnRvVXBwZXJDYXNlKCkpIHtcbiAgICAgIGhlYWRlcnNbbm9ybWFsaXplZE5hbWVdID0gdmFsdWU7XG4gICAgICBkZWxldGUgaGVhZGVyc1tuYW1lXTtcbiAgICB9XG4gIH0pO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi8uLi91dGlscycpO1xuXG4vLyBIZWFkZXJzIHdob3NlIGR1cGxpY2F0ZXMgYXJlIGlnbm9yZWQgYnkgbm9kZVxuLy8gYy5mLiBodHRwczovL25vZGVqcy5vcmcvYXBpL2h0dHAuaHRtbCNodHRwX21lc3NhZ2VfaGVhZGVyc1xudmFyIGlnbm9yZUR1cGxpY2F0ZU9mID0gW1xuICAnYWdlJywgJ2F1dGhvcml6YXRpb24nLCAnY29udGVudC1sZW5ndGgnLCAnY29udGVudC10eXBlJywgJ2V0YWcnLFxuICAnZXhwaXJlcycsICdmcm9tJywgJ2hvc3QnLCAnaWYtbW9kaWZpZWQtc2luY2UnLCAnaWYtdW5tb2RpZmllZC1zaW5jZScsXG4gICdsYXN0LW1vZGlmaWVkJywgJ2xvY2F0aW9uJywgJ21heC1mb3J3YXJkcycsICdwcm94eS1hdXRob3JpemF0aW9uJyxcbiAgJ3JlZmVyZXInLCAncmV0cnktYWZ0ZXInLCAndXNlci1hZ2VudCdcbl07XG5cbi8qKlxuICogUGFyc2UgaGVhZGVycyBpbnRvIGFuIG9iamVjdFxuICpcbiAqIGBgYFxuICogRGF0ZTogV2VkLCAyNyBBdWcgMjAxNCAwODo1ODo0OSBHTVRcbiAqIENvbnRlbnQtVHlwZTogYXBwbGljYXRpb24vanNvblxuICogQ29ubmVjdGlvbjoga2VlcC1hbGl2ZVxuICogVHJhbnNmZXItRW5jb2Rpbmc6IGNodW5rZWRcbiAqIGBgYFxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBoZWFkZXJzIEhlYWRlcnMgbmVlZGluZyB0byBiZSBwYXJzZWRcbiAqIEByZXR1cm5zIHtPYmplY3R9IEhlYWRlcnMgcGFyc2VkIGludG8gYW4gb2JqZWN0XG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gcGFyc2VIZWFkZXJzKGhlYWRlcnMpIHtcbiAgdmFyIHBhcnNlZCA9IHt9O1xuICB2YXIga2V5O1xuICB2YXIgdmFsO1xuICB2YXIgaTtcblxuICBpZiAoIWhlYWRlcnMpIHsgcmV0dXJuIHBhcnNlZDsgfVxuXG4gIHV0aWxzLmZvckVhY2goaGVhZGVycy5zcGxpdCgnXFxuJyksIGZ1bmN0aW9uIHBhcnNlcihsaW5lKSB7XG4gICAgaSA9IGxpbmUuaW5kZXhPZignOicpO1xuICAgIGtleSA9IHV0aWxzLnRyaW0obGluZS5zdWJzdHIoMCwgaSkpLnRvTG93ZXJDYXNlKCk7XG4gICAgdmFsID0gdXRpbHMudHJpbShsaW5lLnN1YnN0cihpICsgMSkpO1xuXG4gICAgaWYgKGtleSkge1xuICAgICAgaWYgKHBhcnNlZFtrZXldICYmIGlnbm9yZUR1cGxpY2F0ZU9mLmluZGV4T2Yoa2V5KSA+PSAwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmIChrZXkgPT09ICdzZXQtY29va2llJykge1xuICAgICAgICBwYXJzZWRba2V5XSA9IChwYXJzZWRba2V5XSA/IHBhcnNlZFtrZXldIDogW10pLmNvbmNhdChbdmFsXSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwYXJzZWRba2V5XSA9IHBhcnNlZFtrZXldID8gcGFyc2VkW2tleV0gKyAnLCAnICsgdmFsIDogdmFsO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIHBhcnNlZDtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbi8qKlxuICogU3ludGFjdGljIHN1Z2FyIGZvciBpbnZva2luZyBhIGZ1bmN0aW9uIGFuZCBleHBhbmRpbmcgYW4gYXJyYXkgZm9yIGFyZ3VtZW50cy5cbiAqXG4gKiBDb21tb24gdXNlIGNhc2Ugd291bGQgYmUgdG8gdXNlIGBGdW5jdGlvbi5wcm90b3R5cGUuYXBwbHlgLlxuICpcbiAqICBgYGBqc1xuICogIGZ1bmN0aW9uIGYoeCwgeSwgeikge31cbiAqICB2YXIgYXJncyA9IFsxLCAyLCAzXTtcbiAqICBmLmFwcGx5KG51bGwsIGFyZ3MpO1xuICogIGBgYFxuICpcbiAqIFdpdGggYHNwcmVhZGAgdGhpcyBleGFtcGxlIGNhbiBiZSByZS13cml0dGVuLlxuICpcbiAqICBgYGBqc1xuICogIHNwcmVhZChmdW5jdGlvbih4LCB5LCB6KSB7fSkoWzEsIDIsIDNdKTtcbiAqICBgYGBcbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFja1xuICogQHJldHVybnMge0Z1bmN0aW9ufVxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHNwcmVhZChjYWxsYmFjaykge1xuICByZXR1cm4gZnVuY3Rpb24gd3JhcChhcnIpIHtcbiAgICByZXR1cm4gY2FsbGJhY2suYXBwbHkobnVsbCwgYXJyKTtcbiAgfTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBiaW5kID0gcmVxdWlyZSgnLi9oZWxwZXJzL2JpbmQnKTtcbnZhciBpc0J1ZmZlciA9IHJlcXVpcmUoJ2lzLWJ1ZmZlcicpO1xuXG4vKmdsb2JhbCB0b1N0cmluZzp0cnVlKi9cblxuLy8gdXRpbHMgaXMgYSBsaWJyYXJ5IG9mIGdlbmVyaWMgaGVscGVyIGZ1bmN0aW9ucyBub24tc3BlY2lmaWMgdG8gYXhpb3NcblxudmFyIHRvU3RyaW5nID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZztcblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhbiBBcnJheVxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGFuIEFycmF5LCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNBcnJheSh2YWwpIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwodmFsKSA9PT0gJ1tvYmplY3QgQXJyYXldJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhbiBBcnJheUJ1ZmZlclxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGFuIEFycmF5QnVmZmVyLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNBcnJheUJ1ZmZlcih2YWwpIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwodmFsKSA9PT0gJ1tvYmplY3QgQXJyYXlCdWZmZXJdJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIEZvcm1EYXRhXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYW4gRm9ybURhdGEsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0Zvcm1EYXRhKHZhbCkge1xuICByZXR1cm4gKHR5cGVvZiBGb3JtRGF0YSAhPT0gJ3VuZGVmaW5lZCcpICYmICh2YWwgaW5zdGFuY2VvZiBGb3JtRGF0YSk7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSB2aWV3IG9uIGFuIEFycmF5QnVmZmVyXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSB2aWV3IG9uIGFuIEFycmF5QnVmZmVyLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNBcnJheUJ1ZmZlclZpZXcodmFsKSB7XG4gIHZhciByZXN1bHQ7XG4gIGlmICgodHlwZW9mIEFycmF5QnVmZmVyICE9PSAndW5kZWZpbmVkJykgJiYgKEFycmF5QnVmZmVyLmlzVmlldykpIHtcbiAgICByZXN1bHQgPSBBcnJheUJ1ZmZlci5pc1ZpZXcodmFsKTtcbiAgfSBlbHNlIHtcbiAgICByZXN1bHQgPSAodmFsKSAmJiAodmFsLmJ1ZmZlcikgJiYgKHZhbC5idWZmZXIgaW5zdGFuY2VvZiBBcnJheUJ1ZmZlcik7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIFN0cmluZ1xuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgU3RyaW5nLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNTdHJpbmcodmFsKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsID09PSAnc3RyaW5nJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIE51bWJlclxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgTnVtYmVyLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNOdW1iZXIodmFsKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsID09PSAnbnVtYmVyJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyB1bmRlZmluZWRcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB0aGUgdmFsdWUgaXMgdW5kZWZpbmVkLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNVbmRlZmluZWQodmFsKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsID09PSAndW5kZWZpbmVkJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhbiBPYmplY3RcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhbiBPYmplY3QsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc09iamVjdCh2YWwpIHtcbiAgcmV0dXJuIHZhbCAhPT0gbnVsbCAmJiB0eXBlb2YgdmFsID09PSAnb2JqZWN0Jztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIERhdGVcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIERhdGUsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0RhdGUodmFsKSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKHZhbCkgPT09ICdbb2JqZWN0IERhdGVdJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIEZpbGVcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIEZpbGUsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0ZpbGUodmFsKSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKHZhbCkgPT09ICdbb2JqZWN0IEZpbGVdJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIEJsb2JcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIEJsb2IsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0Jsb2IodmFsKSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKHZhbCkgPT09ICdbb2JqZWN0IEJsb2JdJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIEZ1bmN0aW9uXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBGdW5jdGlvbiwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzRnVuY3Rpb24odmFsKSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKHZhbCkgPT09ICdbb2JqZWN0IEZ1bmN0aW9uXSc7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBTdHJlYW1cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIFN0cmVhbSwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzU3RyZWFtKHZhbCkge1xuICByZXR1cm4gaXNPYmplY3QodmFsKSAmJiBpc0Z1bmN0aW9uKHZhbC5waXBlKTtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIFVSTFNlYXJjaFBhcmFtcyBvYmplY3RcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIFVSTFNlYXJjaFBhcmFtcyBvYmplY3QsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc1VSTFNlYXJjaFBhcmFtcyh2YWwpIHtcbiAgcmV0dXJuIHR5cGVvZiBVUkxTZWFyY2hQYXJhbXMgIT09ICd1bmRlZmluZWQnICYmIHZhbCBpbnN0YW5jZW9mIFVSTFNlYXJjaFBhcmFtcztcbn1cblxuLyoqXG4gKiBUcmltIGV4Y2VzcyB3aGl0ZXNwYWNlIG9mZiB0aGUgYmVnaW5uaW5nIGFuZCBlbmQgb2YgYSBzdHJpbmdcbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RyIFRoZSBTdHJpbmcgdG8gdHJpbVxuICogQHJldHVybnMge1N0cmluZ30gVGhlIFN0cmluZyBmcmVlZCBvZiBleGNlc3Mgd2hpdGVzcGFjZVxuICovXG5mdW5jdGlvbiB0cmltKHN0cikge1xuICByZXR1cm4gc3RyLnJlcGxhY2UoL15cXHMqLywgJycpLnJlcGxhY2UoL1xccyokLywgJycpO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiB3ZSdyZSBydW5uaW5nIGluIGEgc3RhbmRhcmQgYnJvd3NlciBlbnZpcm9ubWVudFxuICpcbiAqIFRoaXMgYWxsb3dzIGF4aW9zIHRvIHJ1biBpbiBhIHdlYiB3b3JrZXIsIGFuZCByZWFjdC1uYXRpdmUuXG4gKiBCb3RoIGVudmlyb25tZW50cyBzdXBwb3J0IFhNTEh0dHBSZXF1ZXN0LCBidXQgbm90IGZ1bGx5IHN0YW5kYXJkIGdsb2JhbHMuXG4gKlxuICogd2ViIHdvcmtlcnM6XG4gKiAgdHlwZW9mIHdpbmRvdyAtPiB1bmRlZmluZWRcbiAqICB0eXBlb2YgZG9jdW1lbnQgLT4gdW5kZWZpbmVkXG4gKlxuICogcmVhY3QtbmF0aXZlOlxuICogIG5hdmlnYXRvci5wcm9kdWN0IC0+ICdSZWFjdE5hdGl2ZSdcbiAqL1xuZnVuY3Rpb24gaXNTdGFuZGFyZEJyb3dzZXJFbnYoKSB7XG4gIGlmICh0eXBlb2YgbmF2aWdhdG9yICE9PSAndW5kZWZpbmVkJyAmJiBuYXZpZ2F0b3IucHJvZHVjdCA9PT0gJ1JlYWN0TmF0aXZlJykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICByZXR1cm4gKFxuICAgIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmXG4gICAgdHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJ1xuICApO1xufVxuXG4vKipcbiAqIEl0ZXJhdGUgb3ZlciBhbiBBcnJheSBvciBhbiBPYmplY3QgaW52b2tpbmcgYSBmdW5jdGlvbiBmb3IgZWFjaCBpdGVtLlxuICpcbiAqIElmIGBvYmpgIGlzIGFuIEFycmF5IGNhbGxiYWNrIHdpbGwgYmUgY2FsbGVkIHBhc3NpbmdcbiAqIHRoZSB2YWx1ZSwgaW5kZXgsIGFuZCBjb21wbGV0ZSBhcnJheSBmb3IgZWFjaCBpdGVtLlxuICpcbiAqIElmICdvYmonIGlzIGFuIE9iamVjdCBjYWxsYmFjayB3aWxsIGJlIGNhbGxlZCBwYXNzaW5nXG4gKiB0aGUgdmFsdWUsIGtleSwgYW5kIGNvbXBsZXRlIG9iamVjdCBmb3IgZWFjaCBwcm9wZXJ0eS5cbiAqXG4gKiBAcGFyYW0ge09iamVjdHxBcnJheX0gb2JqIFRoZSBvYmplY3QgdG8gaXRlcmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm4gVGhlIGNhbGxiYWNrIHRvIGludm9rZSBmb3IgZWFjaCBpdGVtXG4gKi9cbmZ1bmN0aW9uIGZvckVhY2gob2JqLCBmbikge1xuICAvLyBEb24ndCBib3RoZXIgaWYgbm8gdmFsdWUgcHJvdmlkZWRcbiAgaWYgKG9iaiA9PT0gbnVsbCB8fCB0eXBlb2Ygb2JqID09PSAndW5kZWZpbmVkJykge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8vIEZvcmNlIGFuIGFycmF5IGlmIG5vdCBhbHJlYWR5IHNvbWV0aGluZyBpdGVyYWJsZVxuICBpZiAodHlwZW9mIG9iaiAhPT0gJ29iamVjdCcpIHtcbiAgICAvKmVzbGludCBuby1wYXJhbS1yZWFzc2lnbjowKi9cbiAgICBvYmogPSBbb2JqXTtcbiAgfVxuXG4gIGlmIChpc0FycmF5KG9iaikpIHtcbiAgICAvLyBJdGVyYXRlIG92ZXIgYXJyYXkgdmFsdWVzXG4gICAgZm9yICh2YXIgaSA9IDAsIGwgPSBvYmoubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBmbi5jYWxsKG51bGwsIG9ialtpXSwgaSwgb2JqKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgLy8gSXRlcmF0ZSBvdmVyIG9iamVjdCBrZXlzXG4gICAgZm9yICh2YXIga2V5IGluIG9iaikge1xuICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIHtcbiAgICAgICAgZm4uY2FsbChudWxsLCBvYmpba2V5XSwga2V5LCBvYmopO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIEFjY2VwdHMgdmFyYXJncyBleHBlY3RpbmcgZWFjaCBhcmd1bWVudCB0byBiZSBhbiBvYmplY3QsIHRoZW5cbiAqIGltbXV0YWJseSBtZXJnZXMgdGhlIHByb3BlcnRpZXMgb2YgZWFjaCBvYmplY3QgYW5kIHJldHVybnMgcmVzdWx0LlxuICpcbiAqIFdoZW4gbXVsdGlwbGUgb2JqZWN0cyBjb250YWluIHRoZSBzYW1lIGtleSB0aGUgbGF0ZXIgb2JqZWN0IGluXG4gKiB0aGUgYXJndW1lbnRzIGxpc3Qgd2lsbCB0YWtlIHByZWNlZGVuY2UuXG4gKlxuICogRXhhbXBsZTpcbiAqXG4gKiBgYGBqc1xuICogdmFyIHJlc3VsdCA9IG1lcmdlKHtmb286IDEyM30sIHtmb286IDQ1Nn0pO1xuICogY29uc29sZS5sb2cocmVzdWx0LmZvbyk7IC8vIG91dHB1dHMgNDU2XG4gKiBgYGBcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqMSBPYmplY3QgdG8gbWVyZ2VcbiAqIEByZXR1cm5zIHtPYmplY3R9IFJlc3VsdCBvZiBhbGwgbWVyZ2UgcHJvcGVydGllc1xuICovXG5mdW5jdGlvbiBtZXJnZSgvKiBvYmoxLCBvYmoyLCBvYmozLCAuLi4gKi8pIHtcbiAgdmFyIHJlc3VsdCA9IHt9O1xuICBmdW5jdGlvbiBhc3NpZ25WYWx1ZSh2YWwsIGtleSkge1xuICAgIGlmICh0eXBlb2YgcmVzdWx0W2tleV0gPT09ICdvYmplY3QnICYmIHR5cGVvZiB2YWwgPT09ICdvYmplY3QnKSB7XG4gICAgICByZXN1bHRba2V5XSA9IG1lcmdlKHJlc3VsdFtrZXldLCB2YWwpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXN1bHRba2V5XSA9IHZhbDtcbiAgICB9XG4gIH1cblxuICBmb3IgKHZhciBpID0gMCwgbCA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBmb3JFYWNoKGFyZ3VtZW50c1tpXSwgYXNzaWduVmFsdWUpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogRXh0ZW5kcyBvYmplY3QgYSBieSBtdXRhYmx5IGFkZGluZyB0byBpdCB0aGUgcHJvcGVydGllcyBvZiBvYmplY3QgYi5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gYSBUaGUgb2JqZWN0IHRvIGJlIGV4dGVuZGVkXG4gKiBAcGFyYW0ge09iamVjdH0gYiBUaGUgb2JqZWN0IHRvIGNvcHkgcHJvcGVydGllcyBmcm9tXG4gKiBAcGFyYW0ge09iamVjdH0gdGhpc0FyZyBUaGUgb2JqZWN0IHRvIGJpbmQgZnVuY3Rpb24gdG9cbiAqIEByZXR1cm4ge09iamVjdH0gVGhlIHJlc3VsdGluZyB2YWx1ZSBvZiBvYmplY3QgYVxuICovXG5mdW5jdGlvbiBleHRlbmQoYSwgYiwgdGhpc0FyZykge1xuICBmb3JFYWNoKGIsIGZ1bmN0aW9uIGFzc2lnblZhbHVlKHZhbCwga2V5KSB7XG4gICAgaWYgKHRoaXNBcmcgJiYgdHlwZW9mIHZhbCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgYVtrZXldID0gYmluZCh2YWwsIHRoaXNBcmcpO1xuICAgIH0gZWxzZSB7XG4gICAgICBhW2tleV0gPSB2YWw7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIGE7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBpc0FycmF5OiBpc0FycmF5LFxuICBpc0FycmF5QnVmZmVyOiBpc0FycmF5QnVmZmVyLFxuICBpc0J1ZmZlcjogaXNCdWZmZXIsXG4gIGlzRm9ybURhdGE6IGlzRm9ybURhdGEsXG4gIGlzQXJyYXlCdWZmZXJWaWV3OiBpc0FycmF5QnVmZmVyVmlldyxcbiAgaXNTdHJpbmc6IGlzU3RyaW5nLFxuICBpc051bWJlcjogaXNOdW1iZXIsXG4gIGlzT2JqZWN0OiBpc09iamVjdCxcbiAgaXNVbmRlZmluZWQ6IGlzVW5kZWZpbmVkLFxuICBpc0RhdGU6IGlzRGF0ZSxcbiAgaXNGaWxlOiBpc0ZpbGUsXG4gIGlzQmxvYjogaXNCbG9iLFxuICBpc0Z1bmN0aW9uOiBpc0Z1bmN0aW9uLFxuICBpc1N0cmVhbTogaXNTdHJlYW0sXG4gIGlzVVJMU2VhcmNoUGFyYW1zOiBpc1VSTFNlYXJjaFBhcmFtcyxcbiAgaXNTdGFuZGFyZEJyb3dzZXJFbnY6IGlzU3RhbmRhcmRCcm93c2VyRW52LFxuICBmb3JFYWNoOiBmb3JFYWNoLFxuICBtZXJnZTogbWVyZ2UsXG4gIGV4dGVuZDogZXh0ZW5kLFxuICB0cmltOiB0cmltXG59O1xuIiwiLyohXG4gKiBEZXRlcm1pbmUgaWYgYW4gb2JqZWN0IGlzIGEgQnVmZmVyXG4gKlxuICogQGF1dGhvciAgIEZlcm9zcyBBYm91a2hhZGlqZWggPGh0dHBzOi8vZmVyb3NzLm9yZz5cbiAqIEBsaWNlbnNlICBNSVRcbiAqL1xuXG4vLyBUaGUgX2lzQnVmZmVyIGNoZWNrIGlzIGZvciBTYWZhcmkgNS03IHN1cHBvcnQsIGJlY2F1c2UgaXQncyBtaXNzaW5nXG4vLyBPYmplY3QucHJvdG90eXBlLmNvbnN0cnVjdG9yLiBSZW1vdmUgdGhpcyBldmVudHVhbGx5XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChvYmopIHtcbiAgcmV0dXJuIG9iaiAhPSBudWxsICYmIChpc0J1ZmZlcihvYmopIHx8IGlzU2xvd0J1ZmZlcihvYmopIHx8ICEhb2JqLl9pc0J1ZmZlcilcbn1cblxuZnVuY3Rpb24gaXNCdWZmZXIgKG9iaikge1xuICByZXR1cm4gISFvYmouY29uc3RydWN0b3IgJiYgdHlwZW9mIG9iai5jb25zdHJ1Y3Rvci5pc0J1ZmZlciA9PT0gJ2Z1bmN0aW9uJyAmJiBvYmouY29uc3RydWN0b3IuaXNCdWZmZXIob2JqKVxufVxuXG4vLyBGb3IgTm9kZSB2MC4xMCBzdXBwb3J0LiBSZW1vdmUgdGhpcyBldmVudHVhbGx5LlxuZnVuY3Rpb24gaXNTbG93QnVmZmVyIChvYmopIHtcbiAgcmV0dXJuIHR5cGVvZiBvYmoucmVhZEZsb2F0TEUgPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIG9iai5zbGljZSA9PT0gJ2Z1bmN0aW9uJyAmJiBpc0J1ZmZlcihvYmouc2xpY2UoMCwgMCkpXG59XG4iLCIvLyBzaGltIGZvciB1c2luZyBwcm9jZXNzIGluIGJyb3dzZXJcbnZhciBwcm9jZXNzID0gbW9kdWxlLmV4cG9ydHMgPSB7fTtcblxuLy8gY2FjaGVkIGZyb20gd2hhdGV2ZXIgZ2xvYmFsIGlzIHByZXNlbnQgc28gdGhhdCB0ZXN0IHJ1bm5lcnMgdGhhdCBzdHViIGl0XG4vLyBkb24ndCBicmVhayB0aGluZ3MuICBCdXQgd2UgbmVlZCB0byB3cmFwIGl0IGluIGEgdHJ5IGNhdGNoIGluIGNhc2UgaXQgaXNcbi8vIHdyYXBwZWQgaW4gc3RyaWN0IG1vZGUgY29kZSB3aGljaCBkb2Vzbid0IGRlZmluZSBhbnkgZ2xvYmFscy4gIEl0J3MgaW5zaWRlIGFcbi8vIGZ1bmN0aW9uIGJlY2F1c2UgdHJ5L2NhdGNoZXMgZGVvcHRpbWl6ZSBpbiBjZXJ0YWluIGVuZ2luZXMuXG5cbnZhciBjYWNoZWRTZXRUaW1lb3V0O1xudmFyIGNhY2hlZENsZWFyVGltZW91dDtcblxuZnVuY3Rpb24gZGVmYXVsdFNldFRpbW91dCgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3NldFRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbmZ1bmN0aW9uIGRlZmF1bHRDbGVhclRpbWVvdXQgKCkge1xuICAgIHRocm93IG5ldyBFcnJvcignY2xlYXJUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG4oZnVuY3Rpb24gKCkge1xuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2Ygc2V0VGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2YgY2xlYXJUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgIH1cbn0gKCkpXG5mdW5jdGlvbiBydW5UaW1lb3V0KGZ1bikge1xuICAgIGlmIChjYWNoZWRTZXRUaW1lb3V0ID09PSBzZXRUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICAvLyBpZiBzZXRUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkU2V0VGltZW91dCA9PT0gZGVmYXVsdFNldFRpbW91dCB8fCAhY2FjaGVkU2V0VGltZW91dCkgJiYgc2V0VGltZW91dCkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dChmdW4sIDApO1xuICAgIH0gY2F0Y2goZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwobnVsbCwgZnVuLCAwKTtcbiAgICAgICAgfSBjYXRjaChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yXG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKHRoaXMsIGZ1biwgMCk7XG4gICAgICAgIH1cbiAgICB9XG5cblxufVxuZnVuY3Rpb24gcnVuQ2xlYXJUaW1lb3V0KG1hcmtlcikge1xuICAgIGlmIChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGNsZWFyVGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICAvLyBpZiBjbGVhclRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGRlZmF1bHRDbGVhclRpbWVvdXQgfHwgIWNhY2hlZENsZWFyVGltZW91dCkgJiYgY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCAgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbChudWxsLCBtYXJrZXIpO1xuICAgICAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yLlxuICAgICAgICAgICAgLy8gU29tZSB2ZXJzaW9ucyBvZiBJLkUuIGhhdmUgZGlmZmVyZW50IHJ1bGVzIGZvciBjbGVhclRpbWVvdXQgdnMgc2V0VGltZW91dFxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKHRoaXMsIG1hcmtlcik7XG4gICAgICAgIH1cbiAgICB9XG5cblxuXG59XG52YXIgcXVldWUgPSBbXTtcbnZhciBkcmFpbmluZyA9IGZhbHNlO1xudmFyIGN1cnJlbnRRdWV1ZTtcbnZhciBxdWV1ZUluZGV4ID0gLTE7XG5cbmZ1bmN0aW9uIGNsZWFuVXBOZXh0VGljaygpIHtcbiAgICBpZiAoIWRyYWluaW5nIHx8ICFjdXJyZW50UXVldWUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIGlmIChjdXJyZW50UXVldWUubGVuZ3RoKSB7XG4gICAgICAgIHF1ZXVlID0gY3VycmVudFF1ZXVlLmNvbmNhdChxdWV1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgIH1cbiAgICBpZiAocXVldWUubGVuZ3RoKSB7XG4gICAgICAgIGRyYWluUXVldWUoKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGRyYWluUXVldWUoKSB7XG4gICAgaWYgKGRyYWluaW5nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIHRpbWVvdXQgPSBydW5UaW1lb3V0KGNsZWFuVXBOZXh0VGljayk7XG4gICAgZHJhaW5pbmcgPSB0cnVlO1xuXG4gICAgdmFyIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB3aGlsZShsZW4pIHtcbiAgICAgICAgY3VycmVudFF1ZXVlID0gcXVldWU7XG4gICAgICAgIHF1ZXVlID0gW107XG4gICAgICAgIHdoaWxlICgrK3F1ZXVlSW5kZXggPCBsZW4pIHtcbiAgICAgICAgICAgIGlmIChjdXJyZW50UXVldWUpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50UXVldWVbcXVldWVJbmRleF0ucnVuKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgICAgICBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgfVxuICAgIGN1cnJlbnRRdWV1ZSA9IG51bGw7XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBydW5DbGVhclRpbWVvdXQodGltZW91dCk7XG59XG5cbnByb2Nlc3MubmV4dFRpY2sgPSBmdW5jdGlvbiAoZnVuKSB7XG4gICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCAtIDEpO1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgYXJnc1tpIC0gMV0gPSBhcmd1bWVudHNbaV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcXVldWUucHVzaChuZXcgSXRlbShmdW4sIGFyZ3MpKTtcbiAgICBpZiAocXVldWUubGVuZ3RoID09PSAxICYmICFkcmFpbmluZykge1xuICAgICAgICBydW5UaW1lb3V0KGRyYWluUXVldWUpO1xuICAgIH1cbn07XG5cbi8vIHY4IGxpa2VzIHByZWRpY3RpYmxlIG9iamVjdHNcbmZ1bmN0aW9uIEl0ZW0oZnVuLCBhcnJheSkge1xuICAgIHRoaXMuZnVuID0gZnVuO1xuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbn1cbkl0ZW0ucHJvdG90eXBlLnJ1biA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmZ1bi5hcHBseShudWxsLCB0aGlzLmFycmF5KTtcbn07XG5wcm9jZXNzLnRpdGxlID0gJ2Jyb3dzZXInO1xucHJvY2Vzcy5icm93c2VyID0gdHJ1ZTtcbnByb2Nlc3MuZW52ID0ge307XG5wcm9jZXNzLmFyZ3YgPSBbXTtcbnByb2Nlc3MudmVyc2lvbiA9ICcnOyAvLyBlbXB0eSBzdHJpbmcgdG8gYXZvaWQgcmVnZXhwIGlzc3Vlc1xucHJvY2Vzcy52ZXJzaW9ucyA9IHt9O1xuXG5mdW5jdGlvbiBub29wKCkge31cblxucHJvY2Vzcy5vbiA9IG5vb3A7XG5wcm9jZXNzLmFkZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3Mub25jZSA9IG5vb3A7XG5wcm9jZXNzLm9mZiA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUxpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlQWxsTGlzdGVuZXJzID0gbm9vcDtcbnByb2Nlc3MuZW1pdCA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRPbmNlTGlzdGVuZXIgPSBub29wO1xuXG5wcm9jZXNzLmxpc3RlbmVycyA9IGZ1bmN0aW9uIChuYW1lKSB7IHJldHVybiBbXSB9XG5cbnByb2Nlc3MuYmluZGluZyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmJpbmRpbmcgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcblxucHJvY2Vzcy5jd2QgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAnLycgfTtcbnByb2Nlc3MuY2hkaXIgPSBmdW5jdGlvbiAoZGlyKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmNoZGlyIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5wcm9jZXNzLnVtYXNrID0gZnVuY3Rpb24oKSB7IHJldHVybiAwOyB9O1xuIiwiaW1wb3J0IHtEaXNwYXRjaGVyfSBmcm9tIFwiLi4vZXZlbnRzL2Rpc3BhdGNoZXJcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBDaGFubmVsIGV4dGVuZHMgRGlzcGF0Y2hlciB7XHJcbiAgICBjb25zdHJ1Y3RvcihuYW1lLCBwdXNoZXIpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG5cclxuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgICAgIHRoaXMucHVzaGVyID0gcHVzaGVyO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5wdXNoZXIuc29ja2V0LnN0YXRlID09IDEpIHtcclxuICAgICAgICAgICAgdGhpcy5zdWJzY3JpYmUoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc3Vic2NyaWJlKCkge1xyXG4gICAgICAgIHRoaXMucHVzaGVyLnNlbmQoe1xyXG4gICAgICAgICAgICBldmVudDogJ3N1YnNjcmliZScsXHJcbiAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgIGNoYW5uZWw6IHRoaXMubmFtZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQge0NoYW5uZWx9IGZyb20gXCIuL2NoYW5uZWxcIjtcclxuaW1wb3J0IHtQcmVzZW5jZUNoYW5uZWx9IGZyb20gXCIuL3ByZXNlbmNlX2NoYW5uZWxcIjtcclxuaW1wb3J0IHtQcml2YXRlQ2hhbm5lbH0gZnJvbSBcIi4vcHJpdmF0ZV9jaGFubmVsXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgTWFubmFnZXIge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5jaGFubmVscyA9IHt9O1xyXG4gICAgfVxyXG5cclxuICAgIGFkZChuYW1lLCBwdXNoZXIpIHtcclxuICAgICAgICBpZiAoIXRoaXMuY2hhbm5lbHNbbmFtZV0pIHtcclxuICAgICAgICAgICAgdGhpcy5jaGFubmVsc1tuYW1lXSA9IGNyZWF0ZUNoYW5uZWwobmFtZSwgcHVzaGVyKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY2hhbm5lbHNbbmFtZV07XHJcbiAgICB9XHJcblxyXG4gICAgYWxsKCkge1xyXG4gICAgICAgIHJldHVybiBPYmplY3Qua2V5cyh0aGlzLmNoYW5uZWxzKTtcclxuICAgIH1cclxuXHJcbiAgICBmaW5kKG5hbWUpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jaGFubmVsc1tuYW1lXTtcclxuICAgIH1cclxuXHJcbiAgICByZW1vdmUobmFtZSkge1xyXG4gICAgICAgIGxldCBjaGFubmVsID0gdGhpcy5jaGFubmVsc1tuYW1lXTtcclxuICAgICAgICBkZWxldGUgdGhpcy5jaGFubmVsc1tuYW1lXTtcclxuICAgICAgICByZXR1cm4gY2hhbm5lbDtcclxuICAgIH1cclxuXHJcbiAgICBzdWJzY3JpYmUoKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaSBpbiB0aGlzLmNoYW5uZWxzKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2hhbm5lbHNbaV0uc3Vic2NyaWJlKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlQ2hhbm5lbChuYW1lLCBwdXNoZXIpIHtcclxuICAgIGlmIChuYW1lLmluZGV4T2YoJ3ByaXZhdGUtJykgPT09IDApIHtcclxuICAgICAgICByZXR1cm4gbmV3IFByaXZhdGVDaGFubmVsKG5hbWUsIHB1c2hlcik7XHJcbiAgICB9IGVsc2UgaWYgKG5hbWUuaW5kZXhPZigncHJlc2VuY2UtJykgPT09IDApIHtcclxuICAgICAgICByZXR1cm4gbmV3IFByZXNlbmNlQ2hhbm5lbChuYW1lLCBwdXNoZXIpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4gbmV3IENoYW5uZWwobmFtZSwgcHVzaGVyKTtcclxuICAgIH1cclxufSIsImltcG9ydCB7RGlzcGF0Y2hlcn0gZnJvbSBcIi4uL2V2ZW50cy9kaXNwYXRjaGVyXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgUHJlc2VuY2VDaGFubmVsIGV4dGVuZHMgRGlzcGF0Y2hlciB7XHJcbiAgICBjb25zdHJ1Y3RvcihuYW1lLCBwdXNoZXIpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG5cclxuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgICAgIHRoaXMucHVzaGVyID0gcHVzaGVyO1xyXG4gICAgICAgIHRoaXMuYXV0aCA9IG51bGw7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnB1c2hlci5zb2NrZXQuc3RhdGUgPT0gMSkge1xyXG4gICAgICAgICAgICB0aGlzLnN1YnNjcmliZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzdWJzY3JpYmUoKSB7XHJcbiAgICAgICAgdGhpcy5wdXNoZXIuYXV0aCh0aGlzLm5hbWUsIChlKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuYXV0aCA9IGUuZGF0YS5hdXRoO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5wdXNoZXIuc2VuZCh7XHJcbiAgICAgICAgICAgICAgICBldmVudDogJ3N1YnNjcmliZScsXHJcbiAgICAgICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2hhbm5lbDogdGhpcy5uYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgIGF1dGg6IHRoaXMuYXV0aCxcclxuICAgICAgICAgICAgICAgICAgICBjaGFubmVsX2RhdGE6IGUuZGF0YS5jaGFubmVsX2RhdGFcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQge0Rpc3BhdGNoZXJ9IGZyb20gXCIuLi9ldmVudHMvZGlzcGF0Y2hlclwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFByaXZhdGVDaGFubmVsIGV4dGVuZHMgRGlzcGF0Y2hlciB7XHJcbiAgICBjb25zdHJ1Y3RvcihuYW1lLCBwdXNoZXIpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG5cclxuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgICAgIHRoaXMucHVzaGVyID0gcHVzaGVyO1xyXG4gICAgICAgIHRoaXMuYXV0aCA9IG51bGw7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnB1c2hlci5zb2NrZXQuc3RhdGUgPT0gMSkge1xyXG4gICAgICAgICAgICB0aGlzLnN1YnNjcmliZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzdWJzY3JpYmUoKSB7XHJcbiAgICAgICAgdGhpcy5wdXNoZXIuYXV0aCh0aGlzLm5hbWUsIChlKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuYXV0aCA9IGUuZGF0YS5hdXRoO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5wdXNoZXIuc2VuZCh7XHJcbiAgICAgICAgICAgICAgICBldmVudDogJ3N1YnNjcmliZScsXHJcbiAgICAgICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2hhbm5lbDogdGhpcy5uYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgIGF1dGg6IHRoaXMuYXV0aFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufSIsImltcG9ydCB7RGlzcGF0Y2hlcn0gZnJvbSBcIi4uL2V2ZW50cy9kaXNwYXRjaGVyXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgU29ja2V0IGV4dGVuZHMgRGlzcGF0Y2hlciB7XHJcbiAgICBjb25zdHJ1Y3RvcihwdXNoZXIsIGhvc3QpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG5cclxuICAgICAgICB0aGlzLnB1c2hlciA9IHB1c2hlcjtcclxuICAgICAgICB0aGlzLnNvY2tldCA9IG5ldyBXZWJTb2NrZXQoaG9zdCArICcvJyArIHRoaXMucHVzaGVyLmtleSk7XHJcblxyXG4gICAgICAgIHRoaXMuYmluZExpc3RlbmVycygpO1xyXG4gICAgfVxyXG5cclxuICAgIGJpbmRMaXN0ZW5lcnMoKSB7XHJcbiAgICAgICAgdGhpcy5zb2NrZXQub25vcGVuID0gKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLm9uT3BlbigpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5zb2NrZXQub25lcnJvciA9IChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLm9uRXJyb3IoZXJyb3IpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5zb2NrZXQub25jbG9zZSA9IChjbG9zZUV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMub25DbG9zZShjbG9zZUV2ZW50KTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuc29ja2V0Lm9ubWVzc2FnZSA9IChtZXNzYWdlKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMub25NZXNzYWdlKG1lc3NhZ2UpO1xyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgb25PcGVuKCkge1xyXG4gICAgICAgIC8v5Yid5aeL54q25oCBXHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IDA7XHJcblxyXG4gICAgICAgIHRoaXMuYmluZCgnYXV0aG9yaXphdGlvbl9zdWNjZXNzJywgKGUpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5zb2NrZXQuc29ja2V0X2lkID0gZS5zb2NrZXRfaWQ7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhdGUgPSAxO1xyXG5cclxuICAgICAgICAgICAgLy/orqLpmIVcclxuICAgICAgICAgICAgdGhpcy5wdXNoZXIuY2hhbm5lbHMuc3Vic2NyaWJlKCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuYmluZCgnYXV0aG9yaXphdGlvbl9lcnJvcicsIChlKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhdGUgPSAtMTtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihlLmVycm9yKVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLnNlbmQoe1xyXG4gICAgICAgICAgICBldmVudDogJ2F1dGhvcml6YXRpb24nXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25FcnJvcihlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpXHJcbiAgICB9XHJcblxyXG4gICAgb25DbG9zZShjbG9zZUV2ZW50KSB7XHJcbiAgICAgICAgaWYgKHRoaXMuc29ja2V0LnJlYWR5U3RhdGUgPT0gV2ViU29ja2V0LkNMT1NFRCkge1xyXG4gICAgICAgICAgICBpZiAoY2xvc2VFdmVudC50eXBlID09ICdjbG9zZScpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ3NvY2tldOacjeWKoeW3suaWreW8gCEhJylcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChjbG9zZUV2ZW50LnR5cGUgPT0gJ21lc3NhZ2UnKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGNsb3NlRXZlbnQuZGF0YSlcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ+W3suaWreW8gCEhJylcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvbk1lc3NhZ2UobWVzc2FnZSkge1xyXG4gICAgICAgIGxldCBlRGF0YSA9IEpTT04ucGFyc2UobWVzc2FnZS5kYXRhKTtcclxuICAgICAgICBsZXQgZXZlbnQgPSBlRGF0YS5ldmVudDtcclxuICAgICAgICBsZXQgZGF0YSA9IGVEYXRhLmRhdGE7XHJcblxyXG4gICAgICAgIGlmIChlRGF0YS5jaGFubmVsICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5wdXNoZXIuY2hhbm5lbHMuZmluZChlRGF0YS5jaGFubmVsKS5lbWl0KGV2ZW50LCBkYXRhKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmVtaXQoZXZlbnQsIGRhdGEpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgc2VuZChqc29uKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUgIT09IC0xKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc29ja2V0LnNlbmQoSlNPTi5zdHJpbmdpZnkoanNvbikpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiZXhwb3J0IGNsYXNzIENhbGxiYWNrUmVnaXN0cnkge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5fY2FsbGJhY2tzID0ge307XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0KG5hbWUpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fY2FsbGJhY2tzW3ByZWZpeChuYW1lKV07XHJcbiAgICB9XHJcblxyXG4gICAgYWRkKG5hbWUsIGNhbGxiYWNrLCBjb250ZXh0KSB7XHJcbiAgICAgICAgbGV0IHByZWZpeGVkRXZlbnROYW1lID0gcHJlZml4KG5hbWUpO1xyXG4gICAgICAgIHRoaXMuX2NhbGxiYWNrc1twcmVmaXhlZEV2ZW50TmFtZV0gPSB0aGlzLl9jYWxsYmFja3NbcHJlZml4ZWRFdmVudE5hbWVdIHx8IFtdO1xyXG4gICAgICAgIHRoaXMuX2NhbGxiYWNrc1twcmVmaXhlZEV2ZW50TmFtZV0ucHVzaCh7XHJcbiAgICAgICAgICAgIGZuOiBjYWxsYmFjayxcclxuICAgICAgICAgICAgY29udGV4dDogY29udGV4dFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbW92ZShuYW1lLCBjYWxsYmFjaywgY29udGV4dCkge1xyXG4gICAgICAgIGlmICghbmFtZSAmJiAhY2FsbGJhY2sgJiYgIWNvbnRleHQpIHtcclxuICAgICAgICAgICAgdGhpcy5fY2FsbGJhY2tzID0ge307XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciBuYW1lcyA9IG5hbWUgPyBbcHJlZml4KG5hbWUpXSA6IE9iamVjdC5rZXlzKHRoaXMuX2NhbGxiYWNrcyk7XHJcblxyXG4gICAgICAgIGlmIChjYWxsYmFjayB8fCBjb250ZXh0KSB7XHJcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlQ2FsbGJhY2sobmFtZXMsIGNhbGxiYWNrLCBjb250ZXh0KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnJlbW92ZUFsbENhbGxiYWNrcyhuYW1lcyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJlbW92ZUNhbGxiYWNrKG5hbWVzLCBjYWxsYmFjaywgY29udGV4dCkge1xyXG4gICAgICAgIGZvciAobGV0IG5hbWUgaW4gbmFtZXMpIHtcclxuICAgICAgICAgICAgZm9yIChsZXQga2V5IGluIHRoaXMuX2NhbGxiYWNrc1tuYW1lXSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX2NhbGxiYWNrc1tuYW1lXVtrZXldLmZuID09IGNhbGxiYWNrIHx8IHRoaXMuX2NhbGxiYWNrc1tuYW1lXVtrZXldLmNvbnRleHQgPT0gY29udGV4dCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZSB0aGlzLl9jYWxsYmFja3NbbmFtZV1ba2V5XTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuX2NhbGxiYWNrc1tuYW1lXS5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgICAgIGRlbGV0ZSB0aGlzLl9jYWxsYmFja3NbbmFtZV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmVtb3ZlQWxsQ2FsbGJhY2tzKG5hbWVzKSB7XHJcbiAgICAgICAgZm9yIChsZXQgbmFtZSBpbiBuYW1lcykge1xyXG4gICAgICAgICAgICBkZWxldGUgdGhpcy5fY2FsbGJhY2tzW25hbWVdO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gcHJlZml4KG5hbWUpIHtcclxuICAgIHJldHVybiBcIl9cIiArIG5hbWU7XHJcbn0iLCJpbXBvcnQge0NhbGxiYWNrUmVnaXN0cnl9IGZyb20gJy4vY2FsbGJhY2tfcmVnaXN0cnknO1xyXG5cclxuZXhwb3J0IGNsYXNzIERpc3BhdGNoZXIge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5jYWxsYmFja3MgPSBuZXcgQ2FsbGJhY2tSZWdpc3RyeSgpO1xyXG4gICAgICAgIHRoaXMuZ2xvYmFsX2NhbGxiYWNrcyA9IFtdO1xyXG4gICAgfVxyXG5cclxuICAgIGJpbmQoZXZlbnROYW1lLCBjYWxsYmFjaywgY29udGV4dCkge1xyXG4gICAgICAgIHRoaXMuY2FsbGJhY2tzLmFkZChldmVudE5hbWUsIGNhbGxiYWNrLCBjb250ZXh0KTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBiaW5kX2dsb2JhbChjYWxsYmFjaykge1xyXG4gICAgICAgIHRoaXMuZ2xvYmFsX2NhbGxiYWNrcy5wdXNoKGNhbGxiYWNrKTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICB1bmJpbmQoZXZlbnROYW1lLCBjYWxsYmFjaywgY29udGV4dCkge1xyXG4gICAgICAgIHRoaXMuY2FsbGJhY2tzLnJlbW92ZShldmVudE5hbWUsIGNhbGxiYWNrLCBjb250ZXh0KTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICB1bmJpbmRfZ2xvYmFsKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgaWYgKCFjYWxsYmFjaykge1xyXG4gICAgICAgICAgICB0aGlzLmdsb2JhbF9jYWxsYmFja3MgPSBbXTtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmb3IgKGxldCBpIGluIHRoaXMuZ2xvYmFsX2NhbGxiYWNrcykge1xyXG4gICAgICAgICAgICBpZiAoY2FsbGJhY2sgPT0gdGhpcy5nbG9iYWxfY2FsbGJhY2tzW2ldKSB7XHJcbiAgICAgICAgICAgICAgICBkZWxldGUgdGhpcy5nbG9iYWxfY2FsbGJhY2tzW2ldO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHVuYmluZF9hbGwoKSB7XHJcbiAgICAgICAgdGhpcy51bmJpbmQoKTtcclxuICAgICAgICB0aGlzLnVuYmluZF9nbG9iYWwoKTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBlbWl0KGV2ZW50TmFtZSwgZGF0YSkge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5nbG9iYWxfY2FsbGJhY2tzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZ2xvYmFsX2NhbGxiYWNrc1tpXShldmVudE5hbWUsIGRhdGEpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIGNhbGxiYWNrcyA9IHRoaXMuY2FsbGJhY2tzLmdldChldmVudE5hbWUpO1xyXG4gICAgICAgIGlmIChjYWxsYmFja3MgJiYgY2FsbGJhY2tzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjYWxsYmFja3MubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGNhbGxiYWNrc1tpXS5mbi5jYWxsKGNhbGxiYWNrc1tpXS5jb250ZXh0LCBkYXRhKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQge1NvY2tldH0gZnJvbSAnLi9jb25uZWN0aW9uL3NvY2tldCc7XHJcbmltcG9ydCB7RGlzcGF0Y2hlcn0gZnJvbSAnLi9ldmVudHMvZGlzcGF0Y2hlcic7XHJcbmltcG9ydCB7TWFubmFnZXJ9IGZyb20gXCIuL2NoYW5uZWxzL21hbm5hZ2VyXCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBQdXNoZXIge1xyXG4gICAgY29uc3RydWN0b3IoYXBwX2tleSwgb3B0aW9ucykge1xyXG4gICAgICAgIHRoaXMuY2hlY2tBcHBLZXkoYXBwX2tleSk7XHJcblxyXG4gICAgICAgIHRoaXMua2V5ID0gYXBwX2tleTtcclxuICAgICAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xyXG4gICAgICAgIHRoaXMuZGlzcGF0Y2hlciA9IG5ldyBEaXNwYXRjaGVyKCk7XHJcbiAgICAgICAgdGhpcy5jaGFubmVscyA9IG5ldyBNYW5uYWdlcigpO1xyXG5cclxuICAgICAgICB0aGlzLmNvbm5lY3QoKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25uZWN0KCkge1xyXG4gICAgICAgIHRoaXMuc29ja2V0ID0gbmV3IFNvY2tldCh0aGlzLCB0aGlzLm9wdGlvbnMuaG9zdCk7XHJcbiAgICB9XHJcblxyXG4gICAgc3Vic2NyaWJlKGNoYW5uZWxfbmFtZSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNoYW5uZWxzLmFkZChjaGFubmVsX25hbWUsIHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHVuc3Vic2NyaWJlKGNoYW5uZWxfbmFtZSkge1xyXG4gICAgICAgIHRoaXMuY2hhbm5lbHMucmVtb3ZlKGNoYW5uZWxfbmFtZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0U29ja2V0SWQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc29ja2V0LnNvY2tldC5zb2NrZXRfaWQ7XHJcbiAgICB9XHJcblxyXG4gICAgc2VuZChqc29uKSB7XHJcbiAgICAgICAgdGhpcy5zb2NrZXQuc2VuZChqc29uKTtcclxuICAgIH1cclxuXHJcbiAgICBjaGVja0FwcEtleShrZXkpIHtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBhdXRoKG5hbWUsIGNhbGxiYWNrKSB7XHJcbiAgICAgICAgbGV0IG1ldGhvZCA9IHRoaXMub3B0aW9ucy5hdXRoLm1ldGhvZCB8fCAncG9zdCc7XHJcbiAgICAgICAgbGV0IGRhdGEgPSB7fTtcclxuICAgICAgICBsZXQgcGFyYW1zID0ge307XHJcblxyXG4gICAgICAgIGlmIChtZXRob2QgPT0gJ3Bvc3QnKSB7XHJcbiAgICAgICAgICAgIGRhdGEgPSBPYmplY3QuYXNzaWduKHtcclxuICAgICAgICAgICAgICAgIGNoYW5uZWxfbmFtZTogbmFtZSxcclxuICAgICAgICAgICAgICAgIHNvY2tldF9pZDogdGhpcy5nZXRTb2NrZXRJZCgpXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHBhcmFtcyA9IE9iamVjdC5hc3NpZ24oe1xyXG4gICAgICAgICAgICAgICAgY2hhbm5lbF9uYW1lOiBuYW1lLFxyXG4gICAgICAgICAgICAgICAgc29ja2V0X2lkOiB0aGlzLmdldFNvY2tldElkKClcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBheGlvcyh7XHJcbiAgICAgICAgICAgIHVybDogdGhpcy5vcHRpb25zLmF1dGgudXJsLFxyXG4gICAgICAgICAgICBtZXRob2Q6IG1ldGhvZCxcclxuICAgICAgICAgICAgaGVhZGVyczogdGhpcy5vcHRpb25zLmF1dGguaGVhZGVycyB8fCB7fSxcclxuICAgICAgICAgICAgcGFyYW1zOiBwYXJhbXMsXHJcbiAgICAgICAgICAgIGRhdGE6IGRhdGFcclxuICAgICAgICB9KS50aGVuKChlKSA9PiB7XHJcbiAgICAgICAgICAgIGNhbGxiYWNrKGUpXHJcbiAgICAgICAgfSkuY2F0Y2goKGUpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcign56eB5pyJ6aKR6YGT5p2D6ZmQ5LiN6LazIScpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG53aW5kb3cuUHVzaGVyID0gUHVzaGVyOyJdLCJzb3VyY2VSb290IjoiIn0=

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
    }
  }, {
    key: "listenForWhisper",
    value: function listenForWhisper(event, callback) {
      this.on('client-' + event, callback);
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

      this.on('pusher_internal:subscription_succeeded', back);
      return this;
    }
  }, {
    key: "joining",
    value: function joining(callback) {
      this.on('pusher_internal:member_added', callback);
      return this;
    }
  }, {
    key: "leaving",
    value: function leaving(callback) {
      this.on('pusher_internal:member_removed', callback);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2x1ZmZ5LXB1c2hlci9kaXN0L3B1c2hlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbHVmZnktcHVzaGVyL3NyYy9jaGFubmVscy9jaGFubmVsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sdWZmeS1wdXNoZXIvc3JjL2NoYW5uZWxzL3ByZXNlbmNlX2NoYW5uZWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2x1ZmZ5LXB1c2hlci9zcmMvY2hhbm5lbHMvcHJpdmF0ZV9jaGFubmVsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sdWZmeS1wdXNoZXIvc3JjL2V2ZW50cy9jYWxsYmFja19yZWdpc3RyeS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbHVmZnktcHVzaGVyL3NyYy9ldmVudHMvZGlzcGF0Y2hlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwX2JfdXNlcl8xLmpzIiwid2VicGFjazovLy8uL3NyYy9jaGFubmVsL2NoYW5uZWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NoYW5uZWwvcHVzaGVyLWNoYW5uZWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NoYW5uZWwvcHVzaGVyLXByZXNlbmNlLWNoYW5uZWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NoYW5uZWwvcHVzaGVyLXByaXZhdGUtY2hhbm5lbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29ubmVjdG9yL3B1c2hlcl9jb25uZWN0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VjaG8uanMiXSwibmFtZXMiOlsid2luZG93IiwiRWNobyIsImhvc3QiLCJhdXRoIiwibWV0aG9kIiwidXJsIiwiaGVhZGVycyIsInBhcmFtcyIsInByaXZhdGUiLCJsaXN0ZW4iLCJlIiwiYWxlcnQiLCJqb2luIiwiaGVyZSIsInVzZXJzIiwiY29uc29sZSIsImxvZyIsImpvaW5pbmciLCJ1c2VyIiwibGVhdmluZyIsIkNoYW5uZWwiLCJwdXNoZXIiLCJuYW1lIiwic3Vic2NyaWJlIiwic3Vic2NyaXB0aW9uIiwidW5zdWJzY3JpYmUiLCJldmVudCIsImNhbGxiYWNrIiwib24iLCJ1bmJpbmQiLCJiaW5kIiwiZGF0YSIsInNlbmQiLCJjaGFubmVsIiwiUHVzaGVyQ2hhbm5lbCIsIlB1c2hlclByZXNlbmNlQ2hhbm5lbCIsImJhY2siLCJwcmVzZW5jZSIsIlB1c2hlclByaXZhdGVDaGFubmVsIiwiUHVzaGVyQ29ubmVjdG9yIiwiYXBwX2tleSIsIm9wdGlvbnMiLCJQdXNoZXIiLCJjaGFubmVscyIsInVuZGVmaW5lZCIsImFwcGtleSIsImNvbm5lY3RvciIsInByaXZhdGVDaGFubmVsIiwicHJlc2VuY2VDaGFubmVsIiwiaW5kZXhPZiJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDbEZBLDZCQUE2QjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtEQUFrRCxnQ0FBZ0M7QUFDbEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0VBQWdFLGtCQUFrQjtBQUNsRjtBQUNBLHlEQUF5RCxjQUFjO0FBQ3ZFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQWlELGlDQUFpQztBQUNsRix3SEFBd0gsbUJBQW1CLEVBQUU7QUFDN0k7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DLDBCQUEwQixFQUFFO0FBQy9ELHlDQUF5QyxlQUFlO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4REFBOEQsK0RBQStEO0FBQzdIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDRDQUE0QztBQUM1Qzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIOzs7QUFHQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFlBQVksTUFBTTtBQUNsQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOzs7QUFHQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFFBQVE7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOzs7QUFHQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFNBQVM7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7QUFHQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBOzs7QUFHQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBLGtDQUFrQyxjQUFjO0FBQ2hEOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdEQUFnRDtBQUNoRDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQSxnREFBZ0Q7QUFDaEQ7QUFD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QUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLGFBQWE7QUFDeEIsV0FBVyxTQUFTO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxtQ0FBbUMsT0FBTztBQUMxQztBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsU0FBUyxHQUFHLFNBQVM7QUFDNUMsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsYUFBYSxPQUFPO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUEsdUNBQXVDLE9BQU87QUFDOUM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsWUFBWSxPQUFPO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNB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QUFDeEMsZUFBTyxLQUFLckMsSUFBTCxDQUFVVSxJQUFWLENBQVA7QUFDSCxPQUZNLE1BRUE7QUFDSCxlQUFPLEtBQUtXLE9BQUwsQ0FBYVgsSUFBYixDQUFQO0FBQ0g7QUFDSjtBQUVEOzs7OztBQTVCSjtBQUFBO0FBQUEsMEJBZ0NVVyxPQWhDVixFQWdDbUIsQ0FFZDtBQWxDTDs7QUFBQTtBQUFBO0FBcUNBakMsTUFBTSxDQUFDQyxJQUFQLEdBQWNBLElBQWQsQyIsImZpbGUiOiJhcHBfYl91c2VyXzEuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9hcHBfYl91c2VyXzEuanNcIik7XG4iLCIvKioqKioqLyAoZnVuY3Rpb24obW9kdWxlcykgeyAvLyB3ZWJwYWNrQm9vdHN0cmFwXG4vKioqKioqLyBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbi8qKioqKiovIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4vKioqKioqLyBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4vKioqKioqLyBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbi8qKioqKiovIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuLyoqKioqKi8gXHRcdH1cbi8qKioqKiovIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuLyoqKioqKi8gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbi8qKioqKiovIFx0XHRcdGk6IG1vZHVsZUlkLFxuLyoqKioqKi8gXHRcdFx0bDogZmFsc2UsXG4vKioqKioqLyBcdFx0XHRleHBvcnRzOiB7fVxuLyoqKioqKi8gXHRcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuLyoqKioqKi8gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4vKioqKioqLyBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuLyoqKioqKi8gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbi8qKioqKiovIFx0fVxuLyoqKioqKi9cbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuLyoqKioqKi8gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbi8qKioqKiovIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuLyoqKioqKi8gXHRcdH1cbi8qKioqKiovIFx0fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuLyoqKioqKi8gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuLyoqKioqKi8gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4vKioqKioqLyBcdFx0fVxuLyoqKioqKi8gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4vKioqKioqLyBcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3Rcbi8qKioqKiovIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4vKioqKioqLyBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuLyoqKioqKi8gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3Rcbi8qKioqKiovIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuLyoqKioqKi8gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuLyoqKioqKi8gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4vKioqKioqLyBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbi8qKioqKiovIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuLyoqKioqKi8gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4vKioqKioqLyBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuLyoqKioqKi8gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbi8qKioqKiovIFx0XHRyZXR1cm4gbnM7XG4vKioqKioqLyBcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbi8qKioqKiovIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbi8qKioqKiovIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4vKioqKioqLyBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuLyoqKioqKi8gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbi8qKioqKiovIFx0XHRyZXR1cm4gZ2V0dGVyO1xuLyoqKioqKi8gXHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG4vKioqKioqL1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vKioqKioqLyBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvcHVzaGVyLmpzXCIpO1xuLyoqKioqKi8gfSlcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqLyAoe1xuXG4vKioqLyBcIi4vbm9kZV9tb2R1bGVzL2F4aW9zL2luZGV4LmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vbm9kZV9tb2R1bGVzL2F4aW9zL2luZGV4LmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cbm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9saWIvYXhpb3MgKi8gXCIuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvYXhpb3MuanNcIik7XG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9hZGFwdGVycy94aHIuanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvYWRhcHRlcnMveGhyLmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cblxudmFyIHV0aWxzID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi8uLi91dGlscyAqLyBcIi4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi91dGlscy5qc1wiKTtcbnZhciBzZXR0bGUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuLy4uL2NvcmUvc2V0dGxlICovIFwiLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvc2V0dGxlLmpzXCIpO1xudmFyIGJ1aWxkVVJMID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi8uLi9oZWxwZXJzL2J1aWxkVVJMICovIFwiLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvYnVpbGRVUkwuanNcIik7XG52YXIgcGFyc2VIZWFkZXJzID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi8uLi9oZWxwZXJzL3BhcnNlSGVhZGVycyAqLyBcIi4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL3BhcnNlSGVhZGVycy5qc1wiKTtcbnZhciBpc1VSTFNhbWVPcmlnaW4gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuLy4uL2hlbHBlcnMvaXNVUkxTYW1lT3JpZ2luICovIFwiLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvaXNVUkxTYW1lT3JpZ2luLmpzXCIpO1xudmFyIGNyZWF0ZUVycm9yID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi4vY29yZS9jcmVhdGVFcnJvciAqLyBcIi4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL2NyZWF0ZUVycm9yLmpzXCIpO1xudmFyIGJ0b2EgPSAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93LmJ0b2EgJiYgd2luZG93LmJ0b2EuYmluZCh3aW5kb3cpKSB8fCBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuLy4uL2hlbHBlcnMvYnRvYSAqLyBcIi4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2J0b2EuanNcIik7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24geGhyQWRhcHRlcihjb25maWcpIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIGRpc3BhdGNoWGhyUmVxdWVzdChyZXNvbHZlLCByZWplY3QpIHtcbiAgICB2YXIgcmVxdWVzdERhdGEgPSBjb25maWcuZGF0YTtcbiAgICB2YXIgcmVxdWVzdEhlYWRlcnMgPSBjb25maWcuaGVhZGVycztcblxuICAgIGlmICh1dGlscy5pc0Zvcm1EYXRhKHJlcXVlc3REYXRhKSkge1xuICAgICAgZGVsZXRlIHJlcXVlc3RIZWFkZXJzWydDb250ZW50LVR5cGUnXTsgLy8gTGV0IHRoZSBicm93c2VyIHNldCBpdFxuICAgIH1cblxuICAgIHZhciByZXF1ZXN0ID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgdmFyIGxvYWRFdmVudCA9ICdvbnJlYWR5c3RhdGVjaGFuZ2UnO1xuICAgIHZhciB4RG9tYWluID0gZmFsc2U7XG5cbiAgICAvLyBGb3IgSUUgOC85IENPUlMgc3VwcG9ydFxuICAgIC8vIE9ubHkgc3VwcG9ydHMgUE9TVCBhbmQgR0VUIGNhbGxzIGFuZCBkb2Vzbid0IHJldHVybnMgdGhlIHJlc3BvbnNlIGhlYWRlcnMuXG4gICAgLy8gRE9OJ1QgZG8gdGhpcyBmb3IgdGVzdGluZyBiL2MgWE1MSHR0cFJlcXVlc3QgaXMgbW9ja2VkLCBub3QgWERvbWFpblJlcXVlc3QuXG4gICAgaWYgKFwiZGV2ZWxvcG1lbnRcIiAhPT0gJ3Rlc3QnICYmXG4gICAgICAgIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmXG4gICAgICAgIHdpbmRvdy5YRG9tYWluUmVxdWVzdCAmJiAhKCd3aXRoQ3JlZGVudGlhbHMnIGluIHJlcXVlc3QpICYmXG4gICAgICAgICFpc1VSTFNhbWVPcmlnaW4oY29uZmlnLnVybCkpIHtcbiAgICAgIHJlcXVlc3QgPSBuZXcgd2luZG93LlhEb21haW5SZXF1ZXN0KCk7XG4gICAgICBsb2FkRXZlbnQgPSAnb25sb2FkJztcbiAgICAgIHhEb21haW4gPSB0cnVlO1xuICAgICAgcmVxdWVzdC5vbnByb2dyZXNzID0gZnVuY3Rpb24gaGFuZGxlUHJvZ3Jlc3MoKSB7fTtcbiAgICAgIHJlcXVlc3Qub250aW1lb3V0ID0gZnVuY3Rpb24gaGFuZGxlVGltZW91dCgpIHt9O1xuICAgIH1cblxuICAgIC8vIEhUVFAgYmFzaWMgYXV0aGVudGljYXRpb25cbiAgICBpZiAoY29uZmlnLmF1dGgpIHtcbiAgICAgIHZhciB1c2VybmFtZSA9IGNvbmZpZy5hdXRoLnVzZXJuYW1lIHx8ICcnO1xuICAgICAgdmFyIHBhc3N3b3JkID0gY29uZmlnLmF1dGgucGFzc3dvcmQgfHwgJyc7XG4gICAgICByZXF1ZXN0SGVhZGVycy5BdXRob3JpemF0aW9uID0gJ0Jhc2ljICcgKyBidG9hKHVzZXJuYW1lICsgJzonICsgcGFzc3dvcmQpO1xuICAgIH1cblxuICAgIHJlcXVlc3Qub3Blbihjb25maWcubWV0aG9kLnRvVXBwZXJDYXNlKCksIGJ1aWxkVVJMKGNvbmZpZy51cmwsIGNvbmZpZy5wYXJhbXMsIGNvbmZpZy5wYXJhbXNTZXJpYWxpemVyKSwgdHJ1ZSk7XG5cbiAgICAvLyBTZXQgdGhlIHJlcXVlc3QgdGltZW91dCBpbiBNU1xuICAgIHJlcXVlc3QudGltZW91dCA9IGNvbmZpZy50aW1lb3V0O1xuXG4gICAgLy8gTGlzdGVuIGZvciByZWFkeSBzdGF0ZVxuICAgIHJlcXVlc3RbbG9hZEV2ZW50XSA9IGZ1bmN0aW9uIGhhbmRsZUxvYWQoKSB7XG4gICAgICBpZiAoIXJlcXVlc3QgfHwgKHJlcXVlc3QucmVhZHlTdGF0ZSAhPT0gNCAmJiAheERvbWFpbikpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICAvLyBUaGUgcmVxdWVzdCBlcnJvcmVkIG91dCBhbmQgd2UgZGlkbid0IGdldCBhIHJlc3BvbnNlLCB0aGlzIHdpbGwgYmVcbiAgICAgIC8vIGhhbmRsZWQgYnkgb25lcnJvciBpbnN0ZWFkXG4gICAgICAvLyBXaXRoIG9uZSBleGNlcHRpb246IHJlcXVlc3QgdGhhdCB1c2luZyBmaWxlOiBwcm90b2NvbCwgbW9zdCBicm93c2Vyc1xuICAgICAgLy8gd2lsbCByZXR1cm4gc3RhdHVzIGFzIDAgZXZlbiB0aG91Z2ggaXQncyBhIHN1Y2Nlc3NmdWwgcmVxdWVzdFxuICAgICAgaWYgKHJlcXVlc3Quc3RhdHVzID09PSAwICYmICEocmVxdWVzdC5yZXNwb25zZVVSTCAmJiByZXF1ZXN0LnJlc3BvbnNlVVJMLmluZGV4T2YoJ2ZpbGU6JykgPT09IDApKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgLy8gUHJlcGFyZSB0aGUgcmVzcG9uc2VcbiAgICAgIHZhciByZXNwb25zZUhlYWRlcnMgPSAnZ2V0QWxsUmVzcG9uc2VIZWFkZXJzJyBpbiByZXF1ZXN0ID8gcGFyc2VIZWFkZXJzKHJlcXVlc3QuZ2V0QWxsUmVzcG9uc2VIZWFkZXJzKCkpIDogbnVsbDtcbiAgICAgIHZhciByZXNwb25zZURhdGEgPSAhY29uZmlnLnJlc3BvbnNlVHlwZSB8fCBjb25maWcucmVzcG9uc2VUeXBlID09PSAndGV4dCcgPyByZXF1ZXN0LnJlc3BvbnNlVGV4dCA6IHJlcXVlc3QucmVzcG9uc2U7XG4gICAgICB2YXIgcmVzcG9uc2UgPSB7XG4gICAgICAgIGRhdGE6IHJlc3BvbnNlRGF0YSxcbiAgICAgICAgLy8gSUUgc2VuZHMgMTIyMyBpbnN0ZWFkIG9mIDIwNCAoaHR0cHM6Ly9naXRodWIuY29tL2F4aW9zL2F4aW9zL2lzc3Vlcy8yMDEpXG4gICAgICAgIHN0YXR1czogcmVxdWVzdC5zdGF0dXMgPT09IDEyMjMgPyAyMDQgOiByZXF1ZXN0LnN0YXR1cyxcbiAgICAgICAgc3RhdHVzVGV4dDogcmVxdWVzdC5zdGF0dXMgPT09IDEyMjMgPyAnTm8gQ29udGVudCcgOiByZXF1ZXN0LnN0YXR1c1RleHQsXG4gICAgICAgIGhlYWRlcnM6IHJlc3BvbnNlSGVhZGVycyxcbiAgICAgICAgY29uZmlnOiBjb25maWcsXG4gICAgICAgIHJlcXVlc3Q6IHJlcXVlc3RcbiAgICAgIH07XG5cbiAgICAgIHNldHRsZShyZXNvbHZlLCByZWplY3QsIHJlc3BvbnNlKTtcblxuICAgICAgLy8gQ2xlYW4gdXAgcmVxdWVzdFxuICAgICAgcmVxdWVzdCA9IG51bGw7XG4gICAgfTtcblxuICAgIC8vIEhhbmRsZSBsb3cgbGV2ZWwgbmV0d29yayBlcnJvcnNcbiAgICByZXF1ZXN0Lm9uZXJyb3IgPSBmdW5jdGlvbiBoYW5kbGVFcnJvcigpIHtcbiAgICAgIC8vIFJlYWwgZXJyb3JzIGFyZSBoaWRkZW4gZnJvbSB1cyBieSB0aGUgYnJvd3NlclxuICAgICAgLy8gb25lcnJvciBzaG91bGQgb25seSBmaXJlIGlmIGl0J3MgYSBuZXR3b3JrIGVycm9yXG4gICAgICByZWplY3QoY3JlYXRlRXJyb3IoJ05ldHdvcmsgRXJyb3InLCBjb25maWcsIG51bGwsIHJlcXVlc3QpKTtcblxuICAgICAgLy8gQ2xlYW4gdXAgcmVxdWVzdFxuICAgICAgcmVxdWVzdCA9IG51bGw7XG4gICAgfTtcblxuICAgIC8vIEhhbmRsZSB0aW1lb3V0XG4gICAgcmVxdWVzdC5vbnRpbWVvdXQgPSBmdW5jdGlvbiBoYW5kbGVUaW1lb3V0KCkge1xuICAgICAgcmVqZWN0KGNyZWF0ZUVycm9yKCd0aW1lb3V0IG9mICcgKyBjb25maWcudGltZW91dCArICdtcyBleGNlZWRlZCcsIGNvbmZpZywgJ0VDT05OQUJPUlRFRCcsXG4gICAgICAgIHJlcXVlc3QpKTtcblxuICAgICAgLy8gQ2xlYW4gdXAgcmVxdWVzdFxuICAgICAgcmVxdWVzdCA9IG51bGw7XG4gICAgfTtcblxuICAgIC8vIEFkZCB4c3JmIGhlYWRlclxuICAgIC8vIFRoaXMgaXMgb25seSBkb25lIGlmIHJ1bm5pbmcgaW4gYSBzdGFuZGFyZCBicm93c2VyIGVudmlyb25tZW50LlxuICAgIC8vIFNwZWNpZmljYWxseSBub3QgaWYgd2UncmUgaW4gYSB3ZWIgd29ya2VyLCBvciByZWFjdC1uYXRpdmUuXG4gICAgaWYgKHV0aWxzLmlzU3RhbmRhcmRCcm93c2VyRW52KCkpIHtcbiAgICAgIHZhciBjb29raWVzID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi8uLi9oZWxwZXJzL2Nvb2tpZXMgKi8gXCIuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9jb29raWVzLmpzXCIpO1xuXG4gICAgICAvLyBBZGQgeHNyZiBoZWFkZXJcbiAgICAgIHZhciB4c3JmVmFsdWUgPSAoY29uZmlnLndpdGhDcmVkZW50aWFscyB8fCBpc1VSTFNhbWVPcmlnaW4oY29uZmlnLnVybCkpICYmIGNvbmZpZy54c3JmQ29va2llTmFtZSA/XG4gICAgICAgICAgY29va2llcy5yZWFkKGNvbmZpZy54c3JmQ29va2llTmFtZSkgOlxuICAgICAgICAgIHVuZGVmaW5lZDtcblxuICAgICAgaWYgKHhzcmZWYWx1ZSkge1xuICAgICAgICByZXF1ZXN0SGVhZGVyc1tjb25maWcueHNyZkhlYWRlck5hbWVdID0geHNyZlZhbHVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIEFkZCBoZWFkZXJzIHRvIHRoZSByZXF1ZXN0XG4gICAgaWYgKCdzZXRSZXF1ZXN0SGVhZGVyJyBpbiByZXF1ZXN0KSB7XG4gICAgICB1dGlscy5mb3JFYWNoKHJlcXVlc3RIZWFkZXJzLCBmdW5jdGlvbiBzZXRSZXF1ZXN0SGVhZGVyKHZhbCwga2V5KSB7XG4gICAgICAgIGlmICh0eXBlb2YgcmVxdWVzdERhdGEgPT09ICd1bmRlZmluZWQnICYmIGtleS50b0xvd2VyQ2FzZSgpID09PSAnY29udGVudC10eXBlJykge1xuICAgICAgICAgIC8vIFJlbW92ZSBDb250ZW50LVR5cGUgaWYgZGF0YSBpcyB1bmRlZmluZWRcbiAgICAgICAgICBkZWxldGUgcmVxdWVzdEhlYWRlcnNba2V5XTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBPdGhlcndpc2UgYWRkIGhlYWRlciB0byB0aGUgcmVxdWVzdFxuICAgICAgICAgIHJlcXVlc3Quc2V0UmVxdWVzdEhlYWRlcihrZXksIHZhbCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIEFkZCB3aXRoQ3JlZGVudGlhbHMgdG8gcmVxdWVzdCBpZiBuZWVkZWRcbiAgICBpZiAoY29uZmlnLndpdGhDcmVkZW50aWFscykge1xuICAgICAgcmVxdWVzdC53aXRoQ3JlZGVudGlhbHMgPSB0cnVlO1xuICAgIH1cblxuICAgIC8vIEFkZCByZXNwb25zZVR5cGUgdG8gcmVxdWVzdCBpZiBuZWVkZWRcbiAgICBpZiAoY29uZmlnLnJlc3BvbnNlVHlwZSkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgcmVxdWVzdC5yZXNwb25zZVR5cGUgPSBjb25maWcucmVzcG9uc2VUeXBlO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBFeHBlY3RlZCBET01FeGNlcHRpb24gdGhyb3duIGJ5IGJyb3dzZXJzIG5vdCBjb21wYXRpYmxlIFhNTEh0dHBSZXF1ZXN0IExldmVsIDIuXG4gICAgICAgIC8vIEJ1dCwgdGhpcyBjYW4gYmUgc3VwcHJlc3NlZCBmb3IgJ2pzb24nIHR5cGUgYXMgaXQgY2FuIGJlIHBhcnNlZCBieSBkZWZhdWx0ICd0cmFuc2Zvcm1SZXNwb25zZScgZnVuY3Rpb24uXG4gICAgICAgIGlmIChjb25maWcucmVzcG9uc2VUeXBlICE9PSAnanNvbicpIHtcbiAgICAgICAgICB0aHJvdyBlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gSGFuZGxlIHByb2dyZXNzIGlmIG5lZWRlZFxuICAgIGlmICh0eXBlb2YgY29uZmlnLm9uRG93bmxvYWRQcm9ncmVzcyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcmVxdWVzdC5hZGRFdmVudExpc3RlbmVyKCdwcm9ncmVzcycsIGNvbmZpZy5vbkRvd25sb2FkUHJvZ3Jlc3MpO1xuICAgIH1cblxuICAgIC8vIE5vdCBhbGwgYnJvd3NlcnMgc3VwcG9ydCB1cGxvYWQgZXZlbnRzXG4gICAgaWYgKHR5cGVvZiBjb25maWcub25VcGxvYWRQcm9ncmVzcyA9PT0gJ2Z1bmN0aW9uJyAmJiByZXF1ZXN0LnVwbG9hZCkge1xuICAgICAgcmVxdWVzdC51cGxvYWQuYWRkRXZlbnRMaXN0ZW5lcigncHJvZ3Jlc3MnLCBjb25maWcub25VcGxvYWRQcm9ncmVzcyk7XG4gICAgfVxuXG4gICAgaWYgKGNvbmZpZy5jYW5jZWxUb2tlbikge1xuICAgICAgLy8gSGFuZGxlIGNhbmNlbGxhdGlvblxuICAgICAgY29uZmlnLmNhbmNlbFRva2VuLnByb21pc2UudGhlbihmdW5jdGlvbiBvbkNhbmNlbGVkKGNhbmNlbCkge1xuICAgICAgICBpZiAoIXJlcXVlc3QpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICByZXF1ZXN0LmFib3J0KCk7XG4gICAgICAgIHJlamVjdChjYW5jZWwpO1xuICAgICAgICAvLyBDbGVhbiB1cCByZXF1ZXN0XG4gICAgICAgIHJlcXVlc3QgPSBudWxsO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKHJlcXVlc3REYXRhID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJlcXVlc3REYXRhID0gbnVsbDtcbiAgICB9XG5cbiAgICAvLyBTZW5kIHRoZSByZXF1ZXN0XG4gICAgcmVxdWVzdC5zZW5kKHJlcXVlc3REYXRhKTtcbiAgfSk7XG59O1xuXG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9heGlvcy5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2F4aW9zLmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG52YXIgdXRpbHMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL3V0aWxzICovIFwiLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL3V0aWxzLmpzXCIpO1xudmFyIGJpbmQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL2hlbHBlcnMvYmluZCAqLyBcIi4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2JpbmQuanNcIik7XG52YXIgQXhpb3MgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL2NvcmUvQXhpb3MgKi8gXCIuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9BeGlvcy5qc1wiKTtcbnZhciBkZWZhdWx0cyA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vZGVmYXVsdHMgKi8gXCIuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvZGVmYXVsdHMuanNcIik7XG5cbi8qKlxuICogQ3JlYXRlIGFuIGluc3RhbmNlIG9mIEF4aW9zXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGRlZmF1bHRDb25maWcgVGhlIGRlZmF1bHQgY29uZmlnIGZvciB0aGUgaW5zdGFuY2VcbiAqIEByZXR1cm4ge0F4aW9zfSBBIG5ldyBpbnN0YW5jZSBvZiBBeGlvc1xuICovXG5mdW5jdGlvbiBjcmVhdGVJbnN0YW5jZShkZWZhdWx0Q29uZmlnKSB7XG4gIHZhciBjb250ZXh0ID0gbmV3IEF4aW9zKGRlZmF1bHRDb25maWcpO1xuICB2YXIgaW5zdGFuY2UgPSBiaW5kKEF4aW9zLnByb3RvdHlwZS5yZXF1ZXN0LCBjb250ZXh0KTtcblxuICAvLyBDb3B5IGF4aW9zLnByb3RvdHlwZSB0byBpbnN0YW5jZVxuICB1dGlscy5leHRlbmQoaW5zdGFuY2UsIEF4aW9zLnByb3RvdHlwZSwgY29udGV4dCk7XG5cbiAgLy8gQ29weSBjb250ZXh0IHRvIGluc3RhbmNlXG4gIHV0aWxzLmV4dGVuZChpbnN0YW5jZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIGluc3RhbmNlO1xufVxuXG4vLyBDcmVhdGUgdGhlIGRlZmF1bHQgaW5zdGFuY2UgdG8gYmUgZXhwb3J0ZWRcbnZhciBheGlvcyA9IGNyZWF0ZUluc3RhbmNlKGRlZmF1bHRzKTtcblxuLy8gRXhwb3NlIEF4aW9zIGNsYXNzIHRvIGFsbG93IGNsYXNzIGluaGVyaXRhbmNlXG5heGlvcy5BeGlvcyA9IEF4aW9zO1xuXG4vLyBGYWN0b3J5IGZvciBjcmVhdGluZyBuZXcgaW5zdGFuY2VzXG5heGlvcy5jcmVhdGUgPSBmdW5jdGlvbiBjcmVhdGUoaW5zdGFuY2VDb25maWcpIHtcbiAgcmV0dXJuIGNyZWF0ZUluc3RhbmNlKHV0aWxzLm1lcmdlKGRlZmF1bHRzLCBpbnN0YW5jZUNvbmZpZykpO1xufTtcblxuLy8gRXhwb3NlIENhbmNlbCAmIENhbmNlbFRva2VuXG5heGlvcy5DYW5jZWwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL2NhbmNlbC9DYW5jZWwgKi8gXCIuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY2FuY2VsL0NhbmNlbC5qc1wiKTtcbmF4aW9zLkNhbmNlbFRva2VuID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9jYW5jZWwvQ2FuY2VsVG9rZW4gKi8gXCIuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY2FuY2VsL0NhbmNlbFRva2VuLmpzXCIpO1xuYXhpb3MuaXNDYW5jZWwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL2NhbmNlbC9pc0NhbmNlbCAqLyBcIi4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jYW5jZWwvaXNDYW5jZWwuanNcIik7XG5cbi8vIEV4cG9zZSBhbGwvc3ByZWFkXG5heGlvcy5hbGwgPSBmdW5jdGlvbiBhbGwocHJvbWlzZXMpIHtcbiAgcmV0dXJuIFByb21pc2UuYWxsKHByb21pc2VzKTtcbn07XG5heGlvcy5zcHJlYWQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL2hlbHBlcnMvc3ByZWFkICovIFwiLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvc3ByZWFkLmpzXCIpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGF4aW9zO1xuXG4vLyBBbGxvdyB1c2Ugb2YgZGVmYXVsdCBpbXBvcnQgc3ludGF4IGluIFR5cGVTY3JpcHRcbm1vZHVsZS5leHBvcnRzLmRlZmF1bHQgPSBheGlvcztcblxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY2FuY2VsL0NhbmNlbC5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY2FuY2VsL0NhbmNlbC5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG4vKipcbiAqIEEgYENhbmNlbGAgaXMgYW4gb2JqZWN0IHRoYXQgaXMgdGhyb3duIHdoZW4gYW4gb3BlcmF0aW9uIGlzIGNhbmNlbGVkLlxuICpcbiAqIEBjbGFzc1xuICogQHBhcmFtIHtzdHJpbmc9fSBtZXNzYWdlIFRoZSBtZXNzYWdlLlxuICovXG5mdW5jdGlvbiBDYW5jZWwobWVzc2FnZSkge1xuICB0aGlzLm1lc3NhZ2UgPSBtZXNzYWdlO1xufVxuXG5DYW5jZWwucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gIHJldHVybiAnQ2FuY2VsJyArICh0aGlzLm1lc3NhZ2UgPyAnOiAnICsgdGhpcy5tZXNzYWdlIDogJycpO1xufTtcblxuQ2FuY2VsLnByb3RvdHlwZS5fX0NBTkNFTF9fID0gdHJ1ZTtcblxubW9kdWxlLmV4cG9ydHMgPSBDYW5jZWw7XG5cblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NhbmNlbC9DYW5jZWxUb2tlbi5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jYW5jZWwvQ2FuY2VsVG9rZW4uanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG52YXIgQ2FuY2VsID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9DYW5jZWwgKi8gXCIuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY2FuY2VsL0NhbmNlbC5qc1wiKTtcblxuLyoqXG4gKiBBIGBDYW5jZWxUb2tlbmAgaXMgYW4gb2JqZWN0IHRoYXQgY2FuIGJlIHVzZWQgdG8gcmVxdWVzdCBjYW5jZWxsYXRpb24gb2YgYW4gb3BlcmF0aW9uLlxuICpcbiAqIEBjbGFzc1xuICogQHBhcmFtIHtGdW5jdGlvbn0gZXhlY3V0b3IgVGhlIGV4ZWN1dG9yIGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiBDYW5jZWxUb2tlbihleGVjdXRvcikge1xuICBpZiAodHlwZW9mIGV4ZWN1dG9yICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignZXhlY3V0b3IgbXVzdCBiZSBhIGZ1bmN0aW9uLicpO1xuICB9XG5cbiAgdmFyIHJlc29sdmVQcm9taXNlO1xuICB0aGlzLnByb21pc2UgPSBuZXcgUHJvbWlzZShmdW5jdGlvbiBwcm9taXNlRXhlY3V0b3IocmVzb2x2ZSkge1xuICAgIHJlc29sdmVQcm9taXNlID0gcmVzb2x2ZTtcbiAgfSk7XG5cbiAgdmFyIHRva2VuID0gdGhpcztcbiAgZXhlY3V0b3IoZnVuY3Rpb24gY2FuY2VsKG1lc3NhZ2UpIHtcbiAgICBpZiAodG9rZW4ucmVhc29uKSB7XG4gICAgICAvLyBDYW5jZWxsYXRpb24gaGFzIGFscmVhZHkgYmVlbiByZXF1ZXN0ZWRcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0b2tlbi5yZWFzb24gPSBuZXcgQ2FuY2VsKG1lc3NhZ2UpO1xuICAgIHJlc29sdmVQcm9taXNlKHRva2VuLnJlYXNvbik7XG4gIH0pO1xufVxuXG4vKipcbiAqIFRocm93cyBhIGBDYW5jZWxgIGlmIGNhbmNlbGxhdGlvbiBoYXMgYmVlbiByZXF1ZXN0ZWQuXG4gKi9cbkNhbmNlbFRva2VuLnByb3RvdHlwZS50aHJvd0lmUmVxdWVzdGVkID0gZnVuY3Rpb24gdGhyb3dJZlJlcXVlc3RlZCgpIHtcbiAgaWYgKHRoaXMucmVhc29uKSB7XG4gICAgdGhyb3cgdGhpcy5yZWFzb247XG4gIH1cbn07XG5cbi8qKlxuICogUmV0dXJucyBhbiBvYmplY3QgdGhhdCBjb250YWlucyBhIG5ldyBgQ2FuY2VsVG9rZW5gIGFuZCBhIGZ1bmN0aW9uIHRoYXQsIHdoZW4gY2FsbGVkLFxuICogY2FuY2VscyB0aGUgYENhbmNlbFRva2VuYC5cbiAqL1xuQ2FuY2VsVG9rZW4uc291cmNlID0gZnVuY3Rpb24gc291cmNlKCkge1xuICB2YXIgY2FuY2VsO1xuICB2YXIgdG9rZW4gPSBuZXcgQ2FuY2VsVG9rZW4oZnVuY3Rpb24gZXhlY3V0b3IoYykge1xuICAgIGNhbmNlbCA9IGM7XG4gIH0pO1xuICByZXR1cm4ge1xuICAgIHRva2VuOiB0b2tlbixcbiAgICBjYW5jZWw6IGNhbmNlbFxuICB9O1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBDYW5jZWxUb2tlbjtcblxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY2FuY2VsL2lzQ2FuY2VsLmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NhbmNlbC9pc0NhbmNlbC5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaXNDYW5jZWwodmFsdWUpIHtcbiAgcmV0dXJuICEhKHZhbHVlICYmIHZhbHVlLl9fQ0FOQ0VMX18pO1xufTtcblxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9BeGlvcy5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9BeGlvcy5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG52YXIgZGVmYXVsdHMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuLy4uL2RlZmF1bHRzICovIFwiLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2RlZmF1bHRzLmpzXCIpO1xudmFyIHV0aWxzID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi8uLi91dGlscyAqLyBcIi4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi91dGlscy5qc1wiKTtcbnZhciBJbnRlcmNlcHRvck1hbmFnZXIgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL0ludGVyY2VwdG9yTWFuYWdlciAqLyBcIi4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL0ludGVyY2VwdG9yTWFuYWdlci5qc1wiKTtcbnZhciBkaXNwYXRjaFJlcXVlc3QgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL2Rpc3BhdGNoUmVxdWVzdCAqLyBcIi4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL2Rpc3BhdGNoUmVxdWVzdC5qc1wiKTtcblxuLyoqXG4gKiBDcmVhdGUgYSBuZXcgaW5zdGFuY2Ugb2YgQXhpb3NcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gaW5zdGFuY2VDb25maWcgVGhlIGRlZmF1bHQgY29uZmlnIGZvciB0aGUgaW5zdGFuY2VcbiAqL1xuZnVuY3Rpb24gQXhpb3MoaW5zdGFuY2VDb25maWcpIHtcbiAgdGhpcy5kZWZhdWx0cyA9IGluc3RhbmNlQ29uZmlnO1xuICB0aGlzLmludGVyY2VwdG9ycyA9IHtcbiAgICByZXF1ZXN0OiBuZXcgSW50ZXJjZXB0b3JNYW5hZ2VyKCksXG4gICAgcmVzcG9uc2U6IG5ldyBJbnRlcmNlcHRvck1hbmFnZXIoKVxuICB9O1xufVxuXG4vKipcbiAqIERpc3BhdGNoIGEgcmVxdWVzdFxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWcgVGhlIGNvbmZpZyBzcGVjaWZpYyBmb3IgdGhpcyByZXF1ZXN0IChtZXJnZWQgd2l0aCB0aGlzLmRlZmF1bHRzKVxuICovXG5BeGlvcy5wcm90b3R5cGUucmVxdWVzdCA9IGZ1bmN0aW9uIHJlcXVlc3QoY29uZmlnKSB7XG4gIC8qZXNsaW50IG5vLXBhcmFtLXJlYXNzaWduOjAqL1xuICAvLyBBbGxvdyBmb3IgYXhpb3MoJ2V4YW1wbGUvdXJsJ1ssIGNvbmZpZ10pIGEgbGEgZmV0Y2ggQVBJXG4gIGlmICh0eXBlb2YgY29uZmlnID09PSAnc3RyaW5nJykge1xuICAgIGNvbmZpZyA9IHV0aWxzLm1lcmdlKHtcbiAgICAgIHVybDogYXJndW1lbnRzWzBdXG4gICAgfSwgYXJndW1lbnRzWzFdKTtcbiAgfVxuXG4gIGNvbmZpZyA9IHV0aWxzLm1lcmdlKGRlZmF1bHRzLCB7bWV0aG9kOiAnZ2V0J30sIHRoaXMuZGVmYXVsdHMsIGNvbmZpZyk7XG4gIGNvbmZpZy5tZXRob2QgPSBjb25maWcubWV0aG9kLnRvTG93ZXJDYXNlKCk7XG5cbiAgLy8gSG9vayB1cCBpbnRlcmNlcHRvcnMgbWlkZGxld2FyZVxuICB2YXIgY2hhaW4gPSBbZGlzcGF0Y2hSZXF1ZXN0LCB1bmRlZmluZWRdO1xuICB2YXIgcHJvbWlzZSA9IFByb21pc2UucmVzb2x2ZShjb25maWcpO1xuXG4gIHRoaXMuaW50ZXJjZXB0b3JzLnJlcXVlc3QuZm9yRWFjaChmdW5jdGlvbiB1bnNoaWZ0UmVxdWVzdEludGVyY2VwdG9ycyhpbnRlcmNlcHRvcikge1xuICAgIGNoYWluLnVuc2hpZnQoaW50ZXJjZXB0b3IuZnVsZmlsbGVkLCBpbnRlcmNlcHRvci5yZWplY3RlZCk7XG4gIH0pO1xuXG4gIHRoaXMuaW50ZXJjZXB0b3JzLnJlc3BvbnNlLmZvckVhY2goZnVuY3Rpb24gcHVzaFJlc3BvbnNlSW50ZXJjZXB0b3JzKGludGVyY2VwdG9yKSB7XG4gICAgY2hhaW4ucHVzaChpbnRlcmNlcHRvci5mdWxmaWxsZWQsIGludGVyY2VwdG9yLnJlamVjdGVkKTtcbiAgfSk7XG5cbiAgd2hpbGUgKGNoYWluLmxlbmd0aCkge1xuICAgIHByb21pc2UgPSBwcm9taXNlLnRoZW4oY2hhaW4uc2hpZnQoKSwgY2hhaW4uc2hpZnQoKSk7XG4gIH1cblxuICByZXR1cm4gcHJvbWlzZTtcbn07XG5cbi8vIFByb3ZpZGUgYWxpYXNlcyBmb3Igc3VwcG9ydGVkIHJlcXVlc3QgbWV0aG9kc1xudXRpbHMuZm9yRWFjaChbJ2RlbGV0ZScsICdnZXQnLCAnaGVhZCcsICdvcHRpb25zJ10sIGZ1bmN0aW9uIGZvckVhY2hNZXRob2ROb0RhdGEobWV0aG9kKSB7XG4gIC8qZXNsaW50IGZ1bmMtbmFtZXM6MCovXG4gIEF4aW9zLnByb3RvdHlwZVttZXRob2RdID0gZnVuY3Rpb24odXJsLCBjb25maWcpIHtcbiAgICByZXR1cm4gdGhpcy5yZXF1ZXN0KHV0aWxzLm1lcmdlKGNvbmZpZyB8fCB7fSwge1xuICAgICAgbWV0aG9kOiBtZXRob2QsXG4gICAgICB1cmw6IHVybFxuICAgIH0pKTtcbiAgfTtcbn0pO1xuXG51dGlscy5mb3JFYWNoKFsncG9zdCcsICdwdXQnLCAncGF0Y2gnXSwgZnVuY3Rpb24gZm9yRWFjaE1ldGhvZFdpdGhEYXRhKG1ldGhvZCkge1xuICAvKmVzbGludCBmdW5jLW5hbWVzOjAqL1xuICBBeGlvcy5wcm90b3R5cGVbbWV0aG9kXSA9IGZ1bmN0aW9uKHVybCwgZGF0YSwgY29uZmlnKSB7XG4gICAgcmV0dXJuIHRoaXMucmVxdWVzdCh1dGlscy5tZXJnZShjb25maWcgfHwge30sIHtcbiAgICAgIG1ldGhvZDogbWV0aG9kLFxuICAgICAgdXJsOiB1cmwsXG4gICAgICBkYXRhOiBkYXRhXG4gICAgfSkpO1xuICB9O1xufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gQXhpb3M7XG5cblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvSW50ZXJjZXB0b3JNYW5hZ2VyLmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9JbnRlcmNlcHRvck1hbmFnZXIuanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5cbnZhciB1dGlscyA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vLi4vdXRpbHMgKi8gXCIuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvdXRpbHMuanNcIik7XG5cbmZ1bmN0aW9uIEludGVyY2VwdG9yTWFuYWdlcigpIHtcbiAgdGhpcy5oYW5kbGVycyA9IFtdO1xufVxuXG4vKipcbiAqIEFkZCBhIG5ldyBpbnRlcmNlcHRvciB0byB0aGUgc3RhY2tcbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdWxmaWxsZWQgVGhlIGZ1bmN0aW9uIHRvIGhhbmRsZSBgdGhlbmAgZm9yIGEgYFByb21pc2VgXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSByZWplY3RlZCBUaGUgZnVuY3Rpb24gdG8gaGFuZGxlIGByZWplY3RgIGZvciBhIGBQcm9taXNlYFxuICpcbiAqIEByZXR1cm4ge051bWJlcn0gQW4gSUQgdXNlZCB0byByZW1vdmUgaW50ZXJjZXB0b3IgbGF0ZXJcbiAqL1xuSW50ZXJjZXB0b3JNYW5hZ2VyLnByb3RvdHlwZS51c2UgPSBmdW5jdGlvbiB1c2UoZnVsZmlsbGVkLCByZWplY3RlZCkge1xuICB0aGlzLmhhbmRsZXJzLnB1c2goe1xuICAgIGZ1bGZpbGxlZDogZnVsZmlsbGVkLFxuICAgIHJlamVjdGVkOiByZWplY3RlZFxuICB9KTtcbiAgcmV0dXJuIHRoaXMuaGFuZGxlcnMubGVuZ3RoIC0gMTtcbn07XG5cbi8qKlxuICogUmVtb3ZlIGFuIGludGVyY2VwdG9yIGZyb20gdGhlIHN0YWNrXG4gKlxuICogQHBhcmFtIHtOdW1iZXJ9IGlkIFRoZSBJRCB0aGF0IHdhcyByZXR1cm5lZCBieSBgdXNlYFxuICovXG5JbnRlcmNlcHRvck1hbmFnZXIucHJvdG90eXBlLmVqZWN0ID0gZnVuY3Rpb24gZWplY3QoaWQpIHtcbiAgaWYgKHRoaXMuaGFuZGxlcnNbaWRdKSB7XG4gICAgdGhpcy5oYW5kbGVyc1tpZF0gPSBudWxsO1xuICB9XG59O1xuXG4vKipcbiAqIEl0ZXJhdGUgb3ZlciBhbGwgdGhlIHJlZ2lzdGVyZWQgaW50ZXJjZXB0b3JzXG4gKlxuICogVGhpcyBtZXRob2QgaXMgcGFydGljdWxhcmx5IHVzZWZ1bCBmb3Igc2tpcHBpbmcgb3ZlciBhbnlcbiAqIGludGVyY2VwdG9ycyB0aGF0IG1heSBoYXZlIGJlY29tZSBgbnVsbGAgY2FsbGluZyBgZWplY3RgLlxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuIFRoZSBmdW5jdGlvbiB0byBjYWxsIGZvciBlYWNoIGludGVyY2VwdG9yXG4gKi9cbkludGVyY2VwdG9yTWFuYWdlci5wcm90b3R5cGUuZm9yRWFjaCA9IGZ1bmN0aW9uIGZvckVhY2goZm4pIHtcbiAgdXRpbHMuZm9yRWFjaCh0aGlzLmhhbmRsZXJzLCBmdW5jdGlvbiBmb3JFYWNoSGFuZGxlcihoKSB7XG4gICAgaWYgKGggIT09IG51bGwpIHtcbiAgICAgIGZuKGgpO1xuICAgIH1cbiAgfSk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEludGVyY2VwdG9yTWFuYWdlcjtcblxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9jcmVhdGVFcnJvci5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9jcmVhdGVFcnJvci5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG52YXIgZW5oYW5jZUVycm9yID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9lbmhhbmNlRXJyb3IgKi8gXCIuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9lbmhhbmNlRXJyb3IuanNcIik7XG5cbi8qKlxuICogQ3JlYXRlIGFuIEVycm9yIHdpdGggdGhlIHNwZWNpZmllZCBtZXNzYWdlLCBjb25maWcsIGVycm9yIGNvZGUsIHJlcXVlc3QgYW5kIHJlc3BvbnNlLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBtZXNzYWdlIFRoZSBlcnJvciBtZXNzYWdlLlxuICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZyBUaGUgY29uZmlnLlxuICogQHBhcmFtIHtzdHJpbmd9IFtjb2RlXSBUaGUgZXJyb3IgY29kZSAoZm9yIGV4YW1wbGUsICdFQ09OTkFCT1JURUQnKS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbcmVxdWVzdF0gVGhlIHJlcXVlc3QuXG4gKiBAcGFyYW0ge09iamVjdH0gW3Jlc3BvbnNlXSBUaGUgcmVzcG9uc2UuXG4gKiBAcmV0dXJucyB7RXJyb3J9IFRoZSBjcmVhdGVkIGVycm9yLlxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNyZWF0ZUVycm9yKG1lc3NhZ2UsIGNvbmZpZywgY29kZSwgcmVxdWVzdCwgcmVzcG9uc2UpIHtcbiAgdmFyIGVycm9yID0gbmV3IEVycm9yKG1lc3NhZ2UpO1xuICByZXR1cm4gZW5oYW5jZUVycm9yKGVycm9yLCBjb25maWcsIGNvZGUsIHJlcXVlc3QsIHJlc3BvbnNlKTtcbn07XG5cblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvZGlzcGF0Y2hSZXF1ZXN0LmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9kaXNwYXRjaFJlcXVlc3QuanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5cbnZhciB1dGlscyA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vLi4vdXRpbHMgKi8gXCIuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvdXRpbHMuanNcIik7XG52YXIgdHJhbnNmb3JtRGF0YSA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vdHJhbnNmb3JtRGF0YSAqLyBcIi4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL3RyYW5zZm9ybURhdGEuanNcIik7XG52YXIgaXNDYW5jZWwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuLi9jYW5jZWwvaXNDYW5jZWwgKi8gXCIuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY2FuY2VsL2lzQ2FuY2VsLmpzXCIpO1xudmFyIGRlZmF1bHRzID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi4vZGVmYXVsdHMgKi8gXCIuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvZGVmYXVsdHMuanNcIik7XG52YXIgaXNBYnNvbHV0ZVVSTCA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vLi4vaGVscGVycy9pc0Fic29sdXRlVVJMICovIFwiLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvaXNBYnNvbHV0ZVVSTC5qc1wiKTtcbnZhciBjb21iaW5lVVJMcyA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vLi4vaGVscGVycy9jb21iaW5lVVJMcyAqLyBcIi4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2NvbWJpbmVVUkxzLmpzXCIpO1xuXG4vKipcbiAqIFRocm93cyBhIGBDYW5jZWxgIGlmIGNhbmNlbGxhdGlvbiBoYXMgYmVlbiByZXF1ZXN0ZWQuXG4gKi9cbmZ1bmN0aW9uIHRocm93SWZDYW5jZWxsYXRpb25SZXF1ZXN0ZWQoY29uZmlnKSB7XG4gIGlmIChjb25maWcuY2FuY2VsVG9rZW4pIHtcbiAgICBjb25maWcuY2FuY2VsVG9rZW4udGhyb3dJZlJlcXVlc3RlZCgpO1xuICB9XG59XG5cbi8qKlxuICogRGlzcGF0Y2ggYSByZXF1ZXN0IHRvIHRoZSBzZXJ2ZXIgdXNpbmcgdGhlIGNvbmZpZ3VyZWQgYWRhcHRlci5cbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gY29uZmlnIFRoZSBjb25maWcgdGhhdCBpcyB0byBiZSB1c2VkIGZvciB0aGUgcmVxdWVzdFxuICogQHJldHVybnMge1Byb21pc2V9IFRoZSBQcm9taXNlIHRvIGJlIGZ1bGZpbGxlZFxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGRpc3BhdGNoUmVxdWVzdChjb25maWcpIHtcbiAgdGhyb3dJZkNhbmNlbGxhdGlvblJlcXVlc3RlZChjb25maWcpO1xuXG4gIC8vIFN1cHBvcnQgYmFzZVVSTCBjb25maWdcbiAgaWYgKGNvbmZpZy5iYXNlVVJMICYmICFpc0Fic29sdXRlVVJMKGNvbmZpZy51cmwpKSB7XG4gICAgY29uZmlnLnVybCA9IGNvbWJpbmVVUkxzKGNvbmZpZy5iYXNlVVJMLCBjb25maWcudXJsKTtcbiAgfVxuXG4gIC8vIEVuc3VyZSBoZWFkZXJzIGV4aXN0XG4gIGNvbmZpZy5oZWFkZXJzID0gY29uZmlnLmhlYWRlcnMgfHwge307XG5cbiAgLy8gVHJhbnNmb3JtIHJlcXVlc3QgZGF0YVxuICBjb25maWcuZGF0YSA9IHRyYW5zZm9ybURhdGEoXG4gICAgY29uZmlnLmRhdGEsXG4gICAgY29uZmlnLmhlYWRlcnMsXG4gICAgY29uZmlnLnRyYW5zZm9ybVJlcXVlc3RcbiAgKTtcblxuICAvLyBGbGF0dGVuIGhlYWRlcnNcbiAgY29uZmlnLmhlYWRlcnMgPSB1dGlscy5tZXJnZShcbiAgICBjb25maWcuaGVhZGVycy5jb21tb24gfHwge30sXG4gICAgY29uZmlnLmhlYWRlcnNbY29uZmlnLm1ldGhvZF0gfHwge30sXG4gICAgY29uZmlnLmhlYWRlcnMgfHwge31cbiAgKTtcblxuICB1dGlscy5mb3JFYWNoKFxuICAgIFsnZGVsZXRlJywgJ2dldCcsICdoZWFkJywgJ3Bvc3QnLCAncHV0JywgJ3BhdGNoJywgJ2NvbW1vbiddLFxuICAgIGZ1bmN0aW9uIGNsZWFuSGVhZGVyQ29uZmlnKG1ldGhvZCkge1xuICAgICAgZGVsZXRlIGNvbmZpZy5oZWFkZXJzW21ldGhvZF07XG4gICAgfVxuICApO1xuXG4gIHZhciBhZGFwdGVyID0gY29uZmlnLmFkYXB0ZXIgfHwgZGVmYXVsdHMuYWRhcHRlcjtcblxuICByZXR1cm4gYWRhcHRlcihjb25maWcpLnRoZW4oZnVuY3Rpb24gb25BZGFwdGVyUmVzb2x1dGlvbihyZXNwb25zZSkge1xuICAgIHRocm93SWZDYW5jZWxsYXRpb25SZXF1ZXN0ZWQoY29uZmlnKTtcblxuICAgIC8vIFRyYW5zZm9ybSByZXNwb25zZSBkYXRhXG4gICAgcmVzcG9uc2UuZGF0YSA9IHRyYW5zZm9ybURhdGEoXG4gICAgICByZXNwb25zZS5kYXRhLFxuICAgICAgcmVzcG9uc2UuaGVhZGVycyxcbiAgICAgIGNvbmZpZy50cmFuc2Zvcm1SZXNwb25zZVxuICAgICk7XG5cbiAgICByZXR1cm4gcmVzcG9uc2U7XG4gIH0sIGZ1bmN0aW9uIG9uQWRhcHRlclJlamVjdGlvbihyZWFzb24pIHtcbiAgICBpZiAoIWlzQ2FuY2VsKHJlYXNvbikpIHtcbiAgICAgIHRocm93SWZDYW5jZWxsYXRpb25SZXF1ZXN0ZWQoY29uZmlnKTtcblxuICAgICAgLy8gVHJhbnNmb3JtIHJlc3BvbnNlIGRhdGFcbiAgICAgIGlmIChyZWFzb24gJiYgcmVhc29uLnJlc3BvbnNlKSB7XG4gICAgICAgIHJlYXNvbi5yZXNwb25zZS5kYXRhID0gdHJhbnNmb3JtRGF0YShcbiAgICAgICAgICByZWFzb24ucmVzcG9uc2UuZGF0YSxcbiAgICAgICAgICByZWFzb24ucmVzcG9uc2UuaGVhZGVycyxcbiAgICAgICAgICBjb25maWcudHJhbnNmb3JtUmVzcG9uc2VcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QocmVhc29uKTtcbiAgfSk7XG59O1xuXG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL2VuaGFuY2VFcnJvci5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvZW5oYW5jZUVycm9yLmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG4vKipcbiAqIFVwZGF0ZSBhbiBFcnJvciB3aXRoIHRoZSBzcGVjaWZpZWQgY29uZmlnLCBlcnJvciBjb2RlLCBhbmQgcmVzcG9uc2UuXG4gKlxuICogQHBhcmFtIHtFcnJvcn0gZXJyb3IgVGhlIGVycm9yIHRvIHVwZGF0ZS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWcgVGhlIGNvbmZpZy5cbiAqIEBwYXJhbSB7c3RyaW5nfSBbY29kZV0gVGhlIGVycm9yIGNvZGUgKGZvciBleGFtcGxlLCAnRUNPTk5BQk9SVEVEJykuXG4gKiBAcGFyYW0ge09iamVjdH0gW3JlcXVlc3RdIFRoZSByZXF1ZXN0LlxuICogQHBhcmFtIHtPYmplY3R9IFtyZXNwb25zZV0gVGhlIHJlc3BvbnNlLlxuICogQHJldHVybnMge0Vycm9yfSBUaGUgZXJyb3IuXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZW5oYW5jZUVycm9yKGVycm9yLCBjb25maWcsIGNvZGUsIHJlcXVlc3QsIHJlc3BvbnNlKSB7XG4gIGVycm9yLmNvbmZpZyA9IGNvbmZpZztcbiAgaWYgKGNvZGUpIHtcbiAgICBlcnJvci5jb2RlID0gY29kZTtcbiAgfVxuICBlcnJvci5yZXF1ZXN0ID0gcmVxdWVzdDtcbiAgZXJyb3IucmVzcG9uc2UgPSByZXNwb25zZTtcbiAgcmV0dXJuIGVycm9yO1xufTtcblxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9zZXR0bGUuanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL3NldHRsZS5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cblxudmFyIGNyZWF0ZUVycm9yID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9jcmVhdGVFcnJvciAqLyBcIi4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL2NyZWF0ZUVycm9yLmpzXCIpO1xuXG4vKipcbiAqIFJlc29sdmUgb3IgcmVqZWN0IGEgUHJvbWlzZSBiYXNlZCBvbiByZXNwb25zZSBzdGF0dXMuXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gcmVzb2x2ZSBBIGZ1bmN0aW9uIHRoYXQgcmVzb2x2ZXMgdGhlIHByb21pc2UuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSByZWplY3QgQSBmdW5jdGlvbiB0aGF0IHJlamVjdHMgdGhlIHByb21pc2UuXG4gKiBAcGFyYW0ge29iamVjdH0gcmVzcG9uc2UgVGhlIHJlc3BvbnNlLlxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHNldHRsZShyZXNvbHZlLCByZWplY3QsIHJlc3BvbnNlKSB7XG4gIHZhciB2YWxpZGF0ZVN0YXR1cyA9IHJlc3BvbnNlLmNvbmZpZy52YWxpZGF0ZVN0YXR1cztcbiAgLy8gTm90ZTogc3RhdHVzIGlzIG5vdCBleHBvc2VkIGJ5IFhEb21haW5SZXF1ZXN0XG4gIGlmICghcmVzcG9uc2Uuc3RhdHVzIHx8ICF2YWxpZGF0ZVN0YXR1cyB8fCB2YWxpZGF0ZVN0YXR1cyhyZXNwb25zZS5zdGF0dXMpKSB7XG4gICAgcmVzb2x2ZShyZXNwb25zZSk7XG4gIH0gZWxzZSB7XG4gICAgcmVqZWN0KGNyZWF0ZUVycm9yKFxuICAgICAgJ1JlcXVlc3QgZmFpbGVkIHdpdGggc3RhdHVzIGNvZGUgJyArIHJlc3BvbnNlLnN0YXR1cyxcbiAgICAgIHJlc3BvbnNlLmNvbmZpZyxcbiAgICAgIG51bGwsXG4gICAgICByZXNwb25zZS5yZXF1ZXN0LFxuICAgICAgcmVzcG9uc2VcbiAgICApKTtcbiAgfVxufTtcblxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS90cmFuc2Zvcm1EYXRhLmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvdHJhbnNmb3JtRGF0YS5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5cbnZhciB1dGlscyA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vLi4vdXRpbHMgKi8gXCIuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvdXRpbHMuanNcIik7XG5cbi8qKlxuICogVHJhbnNmb3JtIHRoZSBkYXRhIGZvciBhIHJlcXVlc3Qgb3IgYSByZXNwb25zZVxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fFN0cmluZ30gZGF0YSBUaGUgZGF0YSB0byBiZSB0cmFuc2Zvcm1lZFxuICogQHBhcmFtIHtBcnJheX0gaGVhZGVycyBUaGUgaGVhZGVycyBmb3IgdGhlIHJlcXVlc3Qgb3IgcmVzcG9uc2VcbiAqIEBwYXJhbSB7QXJyYXl8RnVuY3Rpb259IGZucyBBIHNpbmdsZSBmdW5jdGlvbiBvciBBcnJheSBvZiBmdW5jdGlvbnNcbiAqIEByZXR1cm5zIHsqfSBUaGUgcmVzdWx0aW5nIHRyYW5zZm9ybWVkIGRhdGFcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiB0cmFuc2Zvcm1EYXRhKGRhdGEsIGhlYWRlcnMsIGZucykge1xuICAvKmVzbGludCBuby1wYXJhbS1yZWFzc2lnbjowKi9cbiAgdXRpbHMuZm9yRWFjaChmbnMsIGZ1bmN0aW9uIHRyYW5zZm9ybShmbikge1xuICAgIGRhdGEgPSBmbihkYXRhLCBoZWFkZXJzKTtcbiAgfSk7XG5cbiAgcmV0dXJuIGRhdGE7XG59O1xuXG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9kZWZhdWx0cy5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2RlZmF1bHRzLmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcbi8qIFdFQlBBQ0sgVkFSIElOSkVDVElPTiAqLyhmdW5jdGlvbihwcm9jZXNzKSB7XG5cbnZhciB1dGlscyA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vdXRpbHMgKi8gXCIuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvdXRpbHMuanNcIik7XG52YXIgbm9ybWFsaXplSGVhZGVyTmFtZSA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vaGVscGVycy9ub3JtYWxpemVIZWFkZXJOYW1lICovIFwiLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvbm9ybWFsaXplSGVhZGVyTmFtZS5qc1wiKTtcblxudmFyIERFRkFVTFRfQ09OVEVOVF9UWVBFID0ge1xuICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCdcbn07XG5cbmZ1bmN0aW9uIHNldENvbnRlbnRUeXBlSWZVbnNldChoZWFkZXJzLCB2YWx1ZSkge1xuICBpZiAoIXV0aWxzLmlzVW5kZWZpbmVkKGhlYWRlcnMpICYmIHV0aWxzLmlzVW5kZWZpbmVkKGhlYWRlcnNbJ0NvbnRlbnQtVHlwZSddKSkge1xuICAgIGhlYWRlcnNbJ0NvbnRlbnQtVHlwZSddID0gdmFsdWU7XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0RGVmYXVsdEFkYXB0ZXIoKSB7XG4gIHZhciBhZGFwdGVyO1xuICBpZiAodHlwZW9mIFhNTEh0dHBSZXF1ZXN0ICE9PSAndW5kZWZpbmVkJykge1xuICAgIC8vIEZvciBicm93c2VycyB1c2UgWEhSIGFkYXB0ZXJcbiAgICBhZGFwdGVyID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9hZGFwdGVycy94aHIgKi8gXCIuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvYWRhcHRlcnMveGhyLmpzXCIpO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBwcm9jZXNzICE9PSAndW5kZWZpbmVkJykge1xuICAgIC8vIEZvciBub2RlIHVzZSBIVFRQIGFkYXB0ZXJcbiAgICBhZGFwdGVyID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9hZGFwdGVycy9odHRwICovIFwiLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2FkYXB0ZXJzL3hoci5qc1wiKTtcbiAgfVxuICByZXR1cm4gYWRhcHRlcjtcbn1cblxudmFyIGRlZmF1bHRzID0ge1xuICBhZGFwdGVyOiBnZXREZWZhdWx0QWRhcHRlcigpLFxuXG4gIHRyYW5zZm9ybVJlcXVlc3Q6IFtmdW5jdGlvbiB0cmFuc2Zvcm1SZXF1ZXN0KGRhdGEsIGhlYWRlcnMpIHtcbiAgICBub3JtYWxpemVIZWFkZXJOYW1lKGhlYWRlcnMsICdDb250ZW50LVR5cGUnKTtcbiAgICBpZiAodXRpbHMuaXNGb3JtRGF0YShkYXRhKSB8fFxuICAgICAgdXRpbHMuaXNBcnJheUJ1ZmZlcihkYXRhKSB8fFxuICAgICAgdXRpbHMuaXNCdWZmZXIoZGF0YSkgfHxcbiAgICAgIHV0aWxzLmlzU3RyZWFtKGRhdGEpIHx8XG4gICAgICB1dGlscy5pc0ZpbGUoZGF0YSkgfHxcbiAgICAgIHV0aWxzLmlzQmxvYihkYXRhKVxuICAgICkge1xuICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfVxuICAgIGlmICh1dGlscy5pc0FycmF5QnVmZmVyVmlldyhkYXRhKSkge1xuICAgICAgcmV0dXJuIGRhdGEuYnVmZmVyO1xuICAgIH1cbiAgICBpZiAodXRpbHMuaXNVUkxTZWFyY2hQYXJhbXMoZGF0YSkpIHtcbiAgICAgIHNldENvbnRlbnRUeXBlSWZVbnNldChoZWFkZXJzLCAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkO2NoYXJzZXQ9dXRmLTgnKTtcbiAgICAgIHJldHVybiBkYXRhLnRvU3RyaW5nKCk7XG4gICAgfVxuICAgIGlmICh1dGlscy5pc09iamVjdChkYXRhKSkge1xuICAgICAgc2V0Q29udGVudFR5cGVJZlVuc2V0KGhlYWRlcnMsICdhcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTgnKTtcbiAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShkYXRhKTtcbiAgICB9XG4gICAgcmV0dXJuIGRhdGE7XG4gIH1dLFxuXG4gIHRyYW5zZm9ybVJlc3BvbnNlOiBbZnVuY3Rpb24gdHJhbnNmb3JtUmVzcG9uc2UoZGF0YSkge1xuICAgIC8qZXNsaW50IG5vLXBhcmFtLXJlYXNzaWduOjAqL1xuICAgIGlmICh0eXBlb2YgZGF0YSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGRhdGEgPSBKU09OLnBhcnNlKGRhdGEpO1xuICAgICAgfSBjYXRjaCAoZSkgeyAvKiBJZ25vcmUgKi8gfVxuICAgIH1cbiAgICByZXR1cm4gZGF0YTtcbiAgfV0sXG5cbiAgLyoqXG4gICAqIEEgdGltZW91dCBpbiBtaWxsaXNlY29uZHMgdG8gYWJvcnQgYSByZXF1ZXN0LiBJZiBzZXQgdG8gMCAoZGVmYXVsdCkgYVxuICAgKiB0aW1lb3V0IGlzIG5vdCBjcmVhdGVkLlxuICAgKi9cbiAgdGltZW91dDogMCxcblxuICB4c3JmQ29va2llTmFtZTogJ1hTUkYtVE9LRU4nLFxuICB4c3JmSGVhZGVyTmFtZTogJ1gtWFNSRi1UT0tFTicsXG5cbiAgbWF4Q29udGVudExlbmd0aDogLTEsXG5cbiAgdmFsaWRhdGVTdGF0dXM6IGZ1bmN0aW9uIHZhbGlkYXRlU3RhdHVzKHN0YXR1cykge1xuICAgIHJldHVybiBzdGF0dXMgPj0gMjAwICYmIHN0YXR1cyA8IDMwMDtcbiAgfVxufTtcblxuZGVmYXVsdHMuaGVhZGVycyA9IHtcbiAgY29tbW9uOiB7XG4gICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uLCB0ZXh0L3BsYWluLCAqLyonXG4gIH1cbn07XG5cbnV0aWxzLmZvckVhY2goWydkZWxldGUnLCAnZ2V0JywgJ2hlYWQnXSwgZnVuY3Rpb24gZm9yRWFjaE1ldGhvZE5vRGF0YShtZXRob2QpIHtcbiAgZGVmYXVsdHMuaGVhZGVyc1ttZXRob2RdID0ge307XG59KTtcblxudXRpbHMuZm9yRWFjaChbJ3Bvc3QnLCAncHV0JywgJ3BhdGNoJ10sIGZ1bmN0aW9uIGZvckVhY2hNZXRob2RXaXRoRGF0YShtZXRob2QpIHtcbiAgZGVmYXVsdHMuaGVhZGVyc1ttZXRob2RdID0gdXRpbHMubWVyZ2UoREVGQVVMVF9DT05URU5UX1RZUEUpO1xufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gZGVmYXVsdHM7XG5cbi8qIFdFQlBBQ0sgVkFSIElOSkVDVElPTiAqL30uY2FsbCh0aGlzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuLy4uLy4uL3Byb2Nlc3MvYnJvd3Nlci5qcyAqLyBcIi4vbm9kZV9tb2R1bGVzL3Byb2Nlc3MvYnJvd3Nlci5qc1wiKSkpXG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2JpbmQuanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9iaW5kLmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBiaW5kKGZuLCB0aGlzQXJnKSB7XG4gIHJldHVybiBmdW5jdGlvbiB3cmFwKCkge1xuICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGgpO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJncy5sZW5ndGg7IGkrKykge1xuICAgICAgYXJnc1tpXSA9IGFyZ3VtZW50c1tpXTtcbiAgICB9XG4gICAgcmV0dXJuIGZuLmFwcGx5KHRoaXNBcmcsIGFyZ3MpO1xuICB9O1xufTtcblxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9idG9hLmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvYnRvYS5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5cbi8vIGJ0b2EgcG9seWZpbGwgZm9yIElFPDEwIGNvdXJ0ZXN5IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXZpZGNoYW1iZXJzL0Jhc2U2NC5qc1xuXG52YXIgY2hhcnMgPSAnQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVphYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ejAxMjM0NTY3ODkrLz0nO1xuXG5mdW5jdGlvbiBFKCkge1xuICB0aGlzLm1lc3NhZ2UgPSAnU3RyaW5nIGNvbnRhaW5zIGFuIGludmFsaWQgY2hhcmFjdGVyJztcbn1cbkUucHJvdG90eXBlID0gbmV3IEVycm9yO1xuRS5wcm90b3R5cGUuY29kZSA9IDU7XG5FLnByb3RvdHlwZS5uYW1lID0gJ0ludmFsaWRDaGFyYWN0ZXJFcnJvcic7XG5cbmZ1bmN0aW9uIGJ0b2EoaW5wdXQpIHtcbiAgdmFyIHN0ciA9IFN0cmluZyhpbnB1dCk7XG4gIHZhciBvdXRwdXQgPSAnJztcbiAgZm9yIChcbiAgICAvLyBpbml0aWFsaXplIHJlc3VsdCBhbmQgY291bnRlclxuICAgIHZhciBibG9jaywgY2hhckNvZGUsIGlkeCA9IDAsIG1hcCA9IGNoYXJzO1xuICAgIC8vIGlmIHRoZSBuZXh0IHN0ciBpbmRleCBkb2VzIG5vdCBleGlzdDpcbiAgICAvLyAgIGNoYW5nZSB0aGUgbWFwcGluZyB0YWJsZSB0byBcIj1cIlxuICAgIC8vICAgY2hlY2sgaWYgZCBoYXMgbm8gZnJhY3Rpb25hbCBkaWdpdHNcbiAgICBzdHIuY2hhckF0KGlkeCB8IDApIHx8IChtYXAgPSAnPScsIGlkeCAlIDEpO1xuICAgIC8vIFwiOCAtIGlkeCAlIDEgKiA4XCIgZ2VuZXJhdGVzIHRoZSBzZXF1ZW5jZSAyLCA0LCA2LCA4XG4gICAgb3V0cHV0ICs9IG1hcC5jaGFyQXQoNjMgJiBibG9jayA+PiA4IC0gaWR4ICUgMSAqIDgpXG4gICkge1xuICAgIGNoYXJDb2RlID0gc3RyLmNoYXJDb2RlQXQoaWR4ICs9IDMgLyA0KTtcbiAgICBpZiAoY2hhckNvZGUgPiAweEZGKSB7XG4gICAgICB0aHJvdyBuZXcgRSgpO1xuICAgIH1cbiAgICBibG9jayA9IGJsb2NrIDw8IDggfCBjaGFyQ29kZTtcbiAgfVxuICByZXR1cm4gb3V0cHV0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJ0b2E7XG5cblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvYnVpbGRVUkwuanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvYnVpbGRVUkwuanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cblxudmFyIHV0aWxzID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi8uLi91dGlscyAqLyBcIi4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi91dGlscy5qc1wiKTtcblxuZnVuY3Rpb24gZW5jb2RlKHZhbCkge1xuICByZXR1cm4gZW5jb2RlVVJJQ29tcG9uZW50KHZhbCkuXG4gICAgcmVwbGFjZSgvJTQwL2dpLCAnQCcpLlxuICAgIHJlcGxhY2UoLyUzQS9naSwgJzonKS5cbiAgICByZXBsYWNlKC8lMjQvZywgJyQnKS5cbiAgICByZXBsYWNlKC8lMkMvZ2ksICcsJykuXG4gICAgcmVwbGFjZSgvJTIwL2csICcrJykuXG4gICAgcmVwbGFjZSgvJTVCL2dpLCAnWycpLlxuICAgIHJlcGxhY2UoLyU1RC9naSwgJ10nKTtcbn1cblxuLyoqXG4gKiBCdWlsZCBhIFVSTCBieSBhcHBlbmRpbmcgcGFyYW1zIHRvIHRoZSBlbmRcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gdXJsIFRoZSBiYXNlIG9mIHRoZSB1cmwgKGUuZy4sIGh0dHA6Ly93d3cuZ29vZ2xlLmNvbSlcbiAqIEBwYXJhbSB7b2JqZWN0fSBbcGFyYW1zXSBUaGUgcGFyYW1zIHRvIGJlIGFwcGVuZGVkXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBUaGUgZm9ybWF0dGVkIHVybFxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGJ1aWxkVVJMKHVybCwgcGFyYW1zLCBwYXJhbXNTZXJpYWxpemVyKSB7XG4gIC8qZXNsaW50IG5vLXBhcmFtLXJlYXNzaWduOjAqL1xuICBpZiAoIXBhcmFtcykge1xuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICB2YXIgc2VyaWFsaXplZFBhcmFtcztcbiAgaWYgKHBhcmFtc1NlcmlhbGl6ZXIpIHtcbiAgICBzZXJpYWxpemVkUGFyYW1zID0gcGFyYW1zU2VyaWFsaXplcihwYXJhbXMpO1xuICB9IGVsc2UgaWYgKHV0aWxzLmlzVVJMU2VhcmNoUGFyYW1zKHBhcmFtcykpIHtcbiAgICBzZXJpYWxpemVkUGFyYW1zID0gcGFyYW1zLnRvU3RyaW5nKCk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHBhcnRzID0gW107XG5cbiAgICB1dGlscy5mb3JFYWNoKHBhcmFtcywgZnVuY3Rpb24gc2VyaWFsaXplKHZhbCwga2V5KSB7XG4gICAgICBpZiAodmFsID09PSBudWxsIHx8IHR5cGVvZiB2YWwgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKHV0aWxzLmlzQXJyYXkodmFsKSkge1xuICAgICAgICBrZXkgPSBrZXkgKyAnW10nO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFsID0gW3ZhbF07XG4gICAgICB9XG5cbiAgICAgIHV0aWxzLmZvckVhY2godmFsLCBmdW5jdGlvbiBwYXJzZVZhbHVlKHYpIHtcbiAgICAgICAgaWYgKHV0aWxzLmlzRGF0ZSh2KSkge1xuICAgICAgICAgIHYgPSB2LnRvSVNPU3RyaW5nKCk7XG4gICAgICAgIH0gZWxzZSBpZiAodXRpbHMuaXNPYmplY3QodikpIHtcbiAgICAgICAgICB2ID0gSlNPTi5zdHJpbmdpZnkodik7XG4gICAgICAgIH1cbiAgICAgICAgcGFydHMucHVzaChlbmNvZGUoa2V5KSArICc9JyArIGVuY29kZSh2KSk7XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIHNlcmlhbGl6ZWRQYXJhbXMgPSBwYXJ0cy5qb2luKCcmJyk7XG4gIH1cblxuICBpZiAoc2VyaWFsaXplZFBhcmFtcykge1xuICAgIHVybCArPSAodXJsLmluZGV4T2YoJz8nKSA9PT0gLTEgPyAnPycgOiAnJicpICsgc2VyaWFsaXplZFBhcmFtcztcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59O1xuXG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2NvbWJpbmVVUkxzLmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2NvbWJpbmVVUkxzLmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5cbi8qKlxuICogQ3JlYXRlcyBhIG5ldyBVUkwgYnkgY29tYmluaW5nIHRoZSBzcGVjaWZpZWQgVVJMc1xuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBiYXNlVVJMIFRoZSBiYXNlIFVSTFxuICogQHBhcmFtIHtzdHJpbmd9IHJlbGF0aXZlVVJMIFRoZSByZWxhdGl2ZSBVUkxcbiAqIEByZXR1cm5zIHtzdHJpbmd9IFRoZSBjb21iaW5lZCBVUkxcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjb21iaW5lVVJMcyhiYXNlVVJMLCByZWxhdGl2ZVVSTCkge1xuICByZXR1cm4gcmVsYXRpdmVVUkxcbiAgICA/IGJhc2VVUkwucmVwbGFjZSgvXFwvKyQvLCAnJykgKyAnLycgKyByZWxhdGl2ZVVSTC5yZXBsYWNlKC9eXFwvKy8sICcnKVxuICAgIDogYmFzZVVSTDtcbn07XG5cblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvY29va2llcy5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2Nvb2tpZXMuanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG52YXIgdXRpbHMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuLy4uL3V0aWxzICovIFwiLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL3V0aWxzLmpzXCIpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IChcbiAgdXRpbHMuaXNTdGFuZGFyZEJyb3dzZXJFbnYoKSA/XG5cbiAgLy8gU3RhbmRhcmQgYnJvd3NlciBlbnZzIHN1cHBvcnQgZG9jdW1lbnQuY29va2llXG4gIChmdW5jdGlvbiBzdGFuZGFyZEJyb3dzZXJFbnYoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHdyaXRlOiBmdW5jdGlvbiB3cml0ZShuYW1lLCB2YWx1ZSwgZXhwaXJlcywgcGF0aCwgZG9tYWluLCBzZWN1cmUpIHtcbiAgICAgICAgdmFyIGNvb2tpZSA9IFtdO1xuICAgICAgICBjb29raWUucHVzaChuYW1lICsgJz0nICsgZW5jb2RlVVJJQ29tcG9uZW50KHZhbHVlKSk7XG5cbiAgICAgICAgaWYgKHV0aWxzLmlzTnVtYmVyKGV4cGlyZXMpKSB7XG4gICAgICAgICAgY29va2llLnB1c2goJ2V4cGlyZXM9JyArIG5ldyBEYXRlKGV4cGlyZXMpLnRvR01UU3RyaW5nKCkpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHV0aWxzLmlzU3RyaW5nKHBhdGgpKSB7XG4gICAgICAgICAgY29va2llLnB1c2goJ3BhdGg9JyArIHBhdGgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHV0aWxzLmlzU3RyaW5nKGRvbWFpbikpIHtcbiAgICAgICAgICBjb29raWUucHVzaCgnZG9tYWluPScgKyBkb21haW4pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHNlY3VyZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgIGNvb2tpZS5wdXNoKCdzZWN1cmUnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGRvY3VtZW50LmNvb2tpZSA9IGNvb2tpZS5qb2luKCc7ICcpO1xuICAgICAgfSxcblxuICAgICAgcmVhZDogZnVuY3Rpb24gcmVhZChuYW1lKSB7XG4gICAgICAgIHZhciBtYXRjaCA9IGRvY3VtZW50LmNvb2tpZS5tYXRjaChuZXcgUmVnRXhwKCcoXnw7XFxcXHMqKSgnICsgbmFtZSArICcpPShbXjtdKiknKSk7XG4gICAgICAgIHJldHVybiAobWF0Y2ggPyBkZWNvZGVVUklDb21wb25lbnQobWF0Y2hbM10pIDogbnVsbCk7XG4gICAgICB9LFxuXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZShuYW1lKSB7XG4gICAgICAgIHRoaXMud3JpdGUobmFtZSwgJycsIERhdGUubm93KCkgLSA4NjQwMDAwMCk7XG4gICAgICB9XG4gICAgfTtcbiAgfSkoKSA6XG5cbiAgLy8gTm9uIHN0YW5kYXJkIGJyb3dzZXIgZW52ICh3ZWIgd29ya2VycywgcmVhY3QtbmF0aXZlKSBsYWNrIG5lZWRlZCBzdXBwb3J0LlxuICAoZnVuY3Rpb24gbm9uU3RhbmRhcmRCcm93c2VyRW52KCkge1xuICAgIHJldHVybiB7XG4gICAgICB3cml0ZTogZnVuY3Rpb24gd3JpdGUoKSB7fSxcbiAgICAgIHJlYWQ6IGZ1bmN0aW9uIHJlYWQoKSB7IHJldHVybiBudWxsOyB9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH0pKClcbik7XG5cblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvaXNBYnNvbHV0ZVVSTC5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2lzQWJzb2x1dGVVUkwuanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG4vKipcbiAqIERldGVybWluZXMgd2hldGhlciB0aGUgc3BlY2lmaWVkIFVSTCBpcyBhYnNvbHV0ZVxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSB1cmwgVGhlIFVSTCB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB0aGUgc3BlY2lmaWVkIFVSTCBpcyBhYnNvbHV0ZSwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaXNBYnNvbHV0ZVVSTCh1cmwpIHtcbiAgLy8gQSBVUkwgaXMgY29uc2lkZXJlZCBhYnNvbHV0ZSBpZiBpdCBiZWdpbnMgd2l0aCBcIjxzY2hlbWU+Oi8vXCIgb3IgXCIvL1wiIChwcm90b2NvbC1yZWxhdGl2ZSBVUkwpLlxuICAvLyBSRkMgMzk4NiBkZWZpbmVzIHNjaGVtZSBuYW1lIGFzIGEgc2VxdWVuY2Ugb2YgY2hhcmFjdGVycyBiZWdpbm5pbmcgd2l0aCBhIGxldHRlciBhbmQgZm9sbG93ZWRcbiAgLy8gYnkgYW55IGNvbWJpbmF0aW9uIG9mIGxldHRlcnMsIGRpZ2l0cywgcGx1cywgcGVyaW9kLCBvciBoeXBoZW4uXG4gIHJldHVybiAvXihbYS16XVthLXpcXGRcXCtcXC1cXC5dKjopP1xcL1xcLy9pLnRlc3QodXJsKTtcbn07XG5cblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvaXNVUkxTYW1lT3JpZ2luLmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9pc1VSTFNhbWVPcmlnaW4uanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5cbnZhciB1dGlscyA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vLi4vdXRpbHMgKi8gXCIuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvdXRpbHMuanNcIik7XG5cbm1vZHVsZS5leHBvcnRzID0gKFxuICB1dGlscy5pc1N0YW5kYXJkQnJvd3NlckVudigpID9cblxuICAvLyBTdGFuZGFyZCBicm93c2VyIGVudnMgaGF2ZSBmdWxsIHN1cHBvcnQgb2YgdGhlIEFQSXMgbmVlZGVkIHRvIHRlc3RcbiAgLy8gd2hldGhlciB0aGUgcmVxdWVzdCBVUkwgaXMgb2YgdGhlIHNhbWUgb3JpZ2luIGFzIGN1cnJlbnQgbG9jYXRpb24uXG4gIChmdW5jdGlvbiBzdGFuZGFyZEJyb3dzZXJFbnYoKSB7XG4gICAgdmFyIG1zaWUgPSAvKG1zaWV8dHJpZGVudCkvaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpO1xuICAgIHZhciB1cmxQYXJzaW5nTm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICB2YXIgb3JpZ2luVVJMO1xuXG4gICAgLyoqXG4gICAgKiBQYXJzZSBhIFVSTCB0byBkaXNjb3ZlciBpdCdzIGNvbXBvbmVudHNcbiAgICAqXG4gICAgKiBAcGFyYW0ge1N0cmluZ30gdXJsIFRoZSBVUkwgdG8gYmUgcGFyc2VkXG4gICAgKiBAcmV0dXJucyB7T2JqZWN0fVxuICAgICovXG4gICAgZnVuY3Rpb24gcmVzb2x2ZVVSTCh1cmwpIHtcbiAgICAgIHZhciBocmVmID0gdXJsO1xuXG4gICAgICBpZiAobXNpZSkge1xuICAgICAgICAvLyBJRSBuZWVkcyBhdHRyaWJ1dGUgc2V0IHR3aWNlIHRvIG5vcm1hbGl6ZSBwcm9wZXJ0aWVzXG4gICAgICAgIHVybFBhcnNpbmdOb2RlLnNldEF0dHJpYnV0ZSgnaHJlZicsIGhyZWYpO1xuICAgICAgICBocmVmID0gdXJsUGFyc2luZ05vZGUuaHJlZjtcbiAgICAgIH1cblxuICAgICAgdXJsUGFyc2luZ05vZGUuc2V0QXR0cmlidXRlKCdocmVmJywgaHJlZik7XG5cbiAgICAgIC8vIHVybFBhcnNpbmdOb2RlIHByb3ZpZGVzIHRoZSBVcmxVdGlscyBpbnRlcmZhY2UgLSBodHRwOi8vdXJsLnNwZWMud2hhdHdnLm9yZy8jdXJsdXRpbHNcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGhyZWY6IHVybFBhcnNpbmdOb2RlLmhyZWYsXG4gICAgICAgIHByb3RvY29sOiB1cmxQYXJzaW5nTm9kZS5wcm90b2NvbCA/IHVybFBhcnNpbmdOb2RlLnByb3RvY29sLnJlcGxhY2UoLzokLywgJycpIDogJycsXG4gICAgICAgIGhvc3Q6IHVybFBhcnNpbmdOb2RlLmhvc3QsXG4gICAgICAgIHNlYXJjaDogdXJsUGFyc2luZ05vZGUuc2VhcmNoID8gdXJsUGFyc2luZ05vZGUuc2VhcmNoLnJlcGxhY2UoL15cXD8vLCAnJykgOiAnJyxcbiAgICAgICAgaGFzaDogdXJsUGFyc2luZ05vZGUuaGFzaCA/IHVybFBhcnNpbmdOb2RlLmhhc2gucmVwbGFjZSgvXiMvLCAnJykgOiAnJyxcbiAgICAgICAgaG9zdG5hbWU6IHVybFBhcnNpbmdOb2RlLmhvc3RuYW1lLFxuICAgICAgICBwb3J0OiB1cmxQYXJzaW5nTm9kZS5wb3J0LFxuICAgICAgICBwYXRobmFtZTogKHVybFBhcnNpbmdOb2RlLnBhdGhuYW1lLmNoYXJBdCgwKSA9PT0gJy8nKSA/XG4gICAgICAgICAgICAgICAgICB1cmxQYXJzaW5nTm9kZS5wYXRobmFtZSA6XG4gICAgICAgICAgICAgICAgICAnLycgKyB1cmxQYXJzaW5nTm9kZS5wYXRobmFtZVxuICAgICAgfTtcbiAgICB9XG5cbiAgICBvcmlnaW5VUkwgPSByZXNvbHZlVVJMKHdpbmRvdy5sb2NhdGlvbi5ocmVmKTtcblxuICAgIC8qKlxuICAgICogRGV0ZXJtaW5lIGlmIGEgVVJMIHNoYXJlcyB0aGUgc2FtZSBvcmlnaW4gYXMgdGhlIGN1cnJlbnQgbG9jYXRpb25cbiAgICAqXG4gICAgKiBAcGFyYW0ge1N0cmluZ30gcmVxdWVzdFVSTCBUaGUgVVJMIHRvIHRlc3RcbiAgICAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIFVSTCBzaGFyZXMgdGhlIHNhbWUgb3JpZ2luLCBvdGhlcndpc2UgZmFsc2VcbiAgICAqL1xuICAgIHJldHVybiBmdW5jdGlvbiBpc1VSTFNhbWVPcmlnaW4ocmVxdWVzdFVSTCkge1xuICAgICAgdmFyIHBhcnNlZCA9ICh1dGlscy5pc1N0cmluZyhyZXF1ZXN0VVJMKSkgPyByZXNvbHZlVVJMKHJlcXVlc3RVUkwpIDogcmVxdWVzdFVSTDtcbiAgICAgIHJldHVybiAocGFyc2VkLnByb3RvY29sID09PSBvcmlnaW5VUkwucHJvdG9jb2wgJiZcbiAgICAgICAgICAgIHBhcnNlZC5ob3N0ID09PSBvcmlnaW5VUkwuaG9zdCk7XG4gICAgfTtcbiAgfSkoKSA6XG5cbiAgLy8gTm9uIHN0YW5kYXJkIGJyb3dzZXIgZW52cyAod2ViIHdvcmtlcnMsIHJlYWN0LW5hdGl2ZSkgbGFjayBuZWVkZWQgc3VwcG9ydC5cbiAgKGZ1bmN0aW9uIG5vblN0YW5kYXJkQnJvd3NlckVudigpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gaXNVUkxTYW1lT3JpZ2luKCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfTtcbiAgfSkoKVxuKTtcblxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9ub3JtYWxpemVIZWFkZXJOYW1lLmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvbm9ybWFsaXplSGVhZGVyTmFtZS5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5cbnZhciB1dGlscyA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4uL3V0aWxzICovIFwiLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL3V0aWxzLmpzXCIpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIG5vcm1hbGl6ZUhlYWRlck5hbWUoaGVhZGVycywgbm9ybWFsaXplZE5hbWUpIHtcbiAgdXRpbHMuZm9yRWFjaChoZWFkZXJzLCBmdW5jdGlvbiBwcm9jZXNzSGVhZGVyKHZhbHVlLCBuYW1lKSB7XG4gICAgaWYgKG5hbWUgIT09IG5vcm1hbGl6ZWROYW1lICYmIG5hbWUudG9VcHBlckNhc2UoKSA9PT0gbm9ybWFsaXplZE5hbWUudG9VcHBlckNhc2UoKSkge1xuICAgICAgaGVhZGVyc1tub3JtYWxpemVkTmFtZV0gPSB2YWx1ZTtcbiAgICAgIGRlbGV0ZSBoZWFkZXJzW25hbWVdO1xuICAgIH1cbiAgfSk7XG59O1xuXG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL3BhcnNlSGVhZGVycy5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvcGFyc2VIZWFkZXJzLmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG52YXIgdXRpbHMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuLy4uL3V0aWxzICovIFwiLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL3V0aWxzLmpzXCIpO1xuXG4vLyBIZWFkZXJzIHdob3NlIGR1cGxpY2F0ZXMgYXJlIGlnbm9yZWQgYnkgbm9kZVxuLy8gYy5mLiBodHRwczovL25vZGVqcy5vcmcvYXBpL2h0dHAuaHRtbCNodHRwX21lc3NhZ2VfaGVhZGVyc1xudmFyIGlnbm9yZUR1cGxpY2F0ZU9mID0gW1xuICAnYWdlJywgJ2F1dGhvcml6YXRpb24nLCAnY29udGVudC1sZW5ndGgnLCAnY29udGVudC10eXBlJywgJ2V0YWcnLFxuICAnZXhwaXJlcycsICdmcm9tJywgJ2hvc3QnLCAnaWYtbW9kaWZpZWQtc2luY2UnLCAnaWYtdW5tb2RpZmllZC1zaW5jZScsXG4gICdsYXN0LW1vZGlmaWVkJywgJ2xvY2F0aW9uJywgJ21heC1mb3J3YXJkcycsICdwcm94eS1hdXRob3JpemF0aW9uJyxcbiAgJ3JlZmVyZXInLCAncmV0cnktYWZ0ZXInLCAndXNlci1hZ2VudCdcbl07XG5cbi8qKlxuICogUGFyc2UgaGVhZGVycyBpbnRvIGFuIG9iamVjdFxuICpcbiAqIGBgYFxuICogRGF0ZTogV2VkLCAyNyBBdWcgMjAxNCAwODo1ODo0OSBHTVRcbiAqIENvbnRlbnQtVHlwZTogYXBwbGljYXRpb24vanNvblxuICogQ29ubmVjdGlvbjoga2VlcC1hbGl2ZVxuICogVHJhbnNmZXItRW5jb2Rpbmc6IGNodW5rZWRcbiAqIGBgYFxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBoZWFkZXJzIEhlYWRlcnMgbmVlZGluZyB0byBiZSBwYXJzZWRcbiAqIEByZXR1cm5zIHtPYmplY3R9IEhlYWRlcnMgcGFyc2VkIGludG8gYW4gb2JqZWN0XG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gcGFyc2VIZWFkZXJzKGhlYWRlcnMpIHtcbiAgdmFyIHBhcnNlZCA9IHt9O1xuICB2YXIga2V5O1xuICB2YXIgdmFsO1xuICB2YXIgaTtcblxuICBpZiAoIWhlYWRlcnMpIHsgcmV0dXJuIHBhcnNlZDsgfVxuXG4gIHV0aWxzLmZvckVhY2goaGVhZGVycy5zcGxpdCgnXFxuJyksIGZ1bmN0aW9uIHBhcnNlcihsaW5lKSB7XG4gICAgaSA9IGxpbmUuaW5kZXhPZignOicpO1xuICAgIGtleSA9IHV0aWxzLnRyaW0obGluZS5zdWJzdHIoMCwgaSkpLnRvTG93ZXJDYXNlKCk7XG4gICAgdmFsID0gdXRpbHMudHJpbShsaW5lLnN1YnN0cihpICsgMSkpO1xuXG4gICAgaWYgKGtleSkge1xuICAgICAgaWYgKHBhcnNlZFtrZXldICYmIGlnbm9yZUR1cGxpY2F0ZU9mLmluZGV4T2Yoa2V5KSA+PSAwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmIChrZXkgPT09ICdzZXQtY29va2llJykge1xuICAgICAgICBwYXJzZWRba2V5XSA9IChwYXJzZWRba2V5XSA/IHBhcnNlZFtrZXldIDogW10pLmNvbmNhdChbdmFsXSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwYXJzZWRba2V5XSA9IHBhcnNlZFtrZXldID8gcGFyc2VkW2tleV0gKyAnLCAnICsgdmFsIDogdmFsO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIHBhcnNlZDtcbn07XG5cblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvc3ByZWFkLmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9zcHJlYWQuanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5cbi8qKlxuICogU3ludGFjdGljIHN1Z2FyIGZvciBpbnZva2luZyBhIGZ1bmN0aW9uIGFuZCBleHBhbmRpbmcgYW4gYXJyYXkgZm9yIGFyZ3VtZW50cy5cbiAqXG4gKiBDb21tb24gdXNlIGNhc2Ugd291bGQgYmUgdG8gdXNlIGBGdW5jdGlvbi5wcm90b3R5cGUuYXBwbHlgLlxuICpcbiAqICBgYGBqc1xuICogIGZ1bmN0aW9uIGYoeCwgeSwgeikge31cbiAqICB2YXIgYXJncyA9IFsxLCAyLCAzXTtcbiAqICBmLmFwcGx5KG51bGwsIGFyZ3MpO1xuICogIGBgYFxuICpcbiAqIFdpdGggYHNwcmVhZGAgdGhpcyBleGFtcGxlIGNhbiBiZSByZS13cml0dGVuLlxuICpcbiAqICBgYGBqc1xuICogIHNwcmVhZChmdW5jdGlvbih4LCB5LCB6KSB7fSkoWzEsIDIsIDNdKTtcbiAqICBgYGBcbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFja1xuICogQHJldHVybnMge0Z1bmN0aW9ufVxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHNwcmVhZChjYWxsYmFjaykge1xuICByZXR1cm4gZnVuY3Rpb24gd3JhcChhcnIpIHtcbiAgICByZXR1cm4gY2FsbGJhY2suYXBwbHkobnVsbCwgYXJyKTtcbiAgfTtcbn07XG5cblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL3V0aWxzLmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvdXRpbHMuanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5cbnZhciBiaW5kID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9oZWxwZXJzL2JpbmQgKi8gXCIuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9iaW5kLmpzXCIpO1xudmFyIGlzQnVmZmVyID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgaXMtYnVmZmVyICovIFwiLi9ub2RlX21vZHVsZXMvaXMtYnVmZmVyL2luZGV4LmpzXCIpO1xuXG4vKmdsb2JhbCB0b1N0cmluZzp0cnVlKi9cblxuLy8gdXRpbHMgaXMgYSBsaWJyYXJ5IG9mIGdlbmVyaWMgaGVscGVyIGZ1bmN0aW9ucyBub24tc3BlY2lmaWMgdG8gYXhpb3NcblxudmFyIHRvU3RyaW5nID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZztcblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhbiBBcnJheVxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGFuIEFycmF5LCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNBcnJheSh2YWwpIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwodmFsKSA9PT0gJ1tvYmplY3QgQXJyYXldJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhbiBBcnJheUJ1ZmZlclxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGFuIEFycmF5QnVmZmVyLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNBcnJheUJ1ZmZlcih2YWwpIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwodmFsKSA9PT0gJ1tvYmplY3QgQXJyYXlCdWZmZXJdJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIEZvcm1EYXRhXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYW4gRm9ybURhdGEsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0Zvcm1EYXRhKHZhbCkge1xuICByZXR1cm4gKHR5cGVvZiBGb3JtRGF0YSAhPT0gJ3VuZGVmaW5lZCcpICYmICh2YWwgaW5zdGFuY2VvZiBGb3JtRGF0YSk7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSB2aWV3IG9uIGFuIEFycmF5QnVmZmVyXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSB2aWV3IG9uIGFuIEFycmF5QnVmZmVyLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNBcnJheUJ1ZmZlclZpZXcodmFsKSB7XG4gIHZhciByZXN1bHQ7XG4gIGlmICgodHlwZW9mIEFycmF5QnVmZmVyICE9PSAndW5kZWZpbmVkJykgJiYgKEFycmF5QnVmZmVyLmlzVmlldykpIHtcbiAgICByZXN1bHQgPSBBcnJheUJ1ZmZlci5pc1ZpZXcodmFsKTtcbiAgfSBlbHNlIHtcbiAgICByZXN1bHQgPSAodmFsKSAmJiAodmFsLmJ1ZmZlcikgJiYgKHZhbC5idWZmZXIgaW5zdGFuY2VvZiBBcnJheUJ1ZmZlcik7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIFN0cmluZ1xuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgU3RyaW5nLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNTdHJpbmcodmFsKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsID09PSAnc3RyaW5nJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIE51bWJlclxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgTnVtYmVyLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNOdW1iZXIodmFsKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsID09PSAnbnVtYmVyJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyB1bmRlZmluZWRcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB0aGUgdmFsdWUgaXMgdW5kZWZpbmVkLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNVbmRlZmluZWQodmFsKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsID09PSAndW5kZWZpbmVkJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhbiBPYmplY3RcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhbiBPYmplY3QsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc09iamVjdCh2YWwpIHtcbiAgcmV0dXJuIHZhbCAhPT0gbnVsbCAmJiB0eXBlb2YgdmFsID09PSAnb2JqZWN0Jztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIERhdGVcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIERhdGUsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0RhdGUodmFsKSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKHZhbCkgPT09ICdbb2JqZWN0IERhdGVdJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIEZpbGVcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIEZpbGUsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0ZpbGUodmFsKSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKHZhbCkgPT09ICdbb2JqZWN0IEZpbGVdJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIEJsb2JcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIEJsb2IsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0Jsb2IodmFsKSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKHZhbCkgPT09ICdbb2JqZWN0IEJsb2JdJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIEZ1bmN0aW9uXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBGdW5jdGlvbiwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzRnVuY3Rpb24odmFsKSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKHZhbCkgPT09ICdbb2JqZWN0IEZ1bmN0aW9uXSc7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBTdHJlYW1cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIFN0cmVhbSwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzU3RyZWFtKHZhbCkge1xuICByZXR1cm4gaXNPYmplY3QodmFsKSAmJiBpc0Z1bmN0aW9uKHZhbC5waXBlKTtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIFVSTFNlYXJjaFBhcmFtcyBvYmplY3RcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIFVSTFNlYXJjaFBhcmFtcyBvYmplY3QsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc1VSTFNlYXJjaFBhcmFtcyh2YWwpIHtcbiAgcmV0dXJuIHR5cGVvZiBVUkxTZWFyY2hQYXJhbXMgIT09ICd1bmRlZmluZWQnICYmIHZhbCBpbnN0YW5jZW9mIFVSTFNlYXJjaFBhcmFtcztcbn1cblxuLyoqXG4gKiBUcmltIGV4Y2VzcyB3aGl0ZXNwYWNlIG9mZiB0aGUgYmVnaW5uaW5nIGFuZCBlbmQgb2YgYSBzdHJpbmdcbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RyIFRoZSBTdHJpbmcgdG8gdHJpbVxuICogQHJldHVybnMge1N0cmluZ30gVGhlIFN0cmluZyBmcmVlZCBvZiBleGNlc3Mgd2hpdGVzcGFjZVxuICovXG5mdW5jdGlvbiB0cmltKHN0cikge1xuICByZXR1cm4gc3RyLnJlcGxhY2UoL15cXHMqLywgJycpLnJlcGxhY2UoL1xccyokLywgJycpO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiB3ZSdyZSBydW5uaW5nIGluIGEgc3RhbmRhcmQgYnJvd3NlciBlbnZpcm9ubWVudFxuICpcbiAqIFRoaXMgYWxsb3dzIGF4aW9zIHRvIHJ1biBpbiBhIHdlYiB3b3JrZXIsIGFuZCByZWFjdC1uYXRpdmUuXG4gKiBCb3RoIGVudmlyb25tZW50cyBzdXBwb3J0IFhNTEh0dHBSZXF1ZXN0LCBidXQgbm90IGZ1bGx5IHN0YW5kYXJkIGdsb2JhbHMuXG4gKlxuICogd2ViIHdvcmtlcnM6XG4gKiAgdHlwZW9mIHdpbmRvdyAtPiB1bmRlZmluZWRcbiAqICB0eXBlb2YgZG9jdW1lbnQgLT4gdW5kZWZpbmVkXG4gKlxuICogcmVhY3QtbmF0aXZlOlxuICogIG5hdmlnYXRvci5wcm9kdWN0IC0+ICdSZWFjdE5hdGl2ZSdcbiAqL1xuZnVuY3Rpb24gaXNTdGFuZGFyZEJyb3dzZXJFbnYoKSB7XG4gIGlmICh0eXBlb2YgbmF2aWdhdG9yICE9PSAndW5kZWZpbmVkJyAmJiBuYXZpZ2F0b3IucHJvZHVjdCA9PT0gJ1JlYWN0TmF0aXZlJykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICByZXR1cm4gKFxuICAgIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmXG4gICAgdHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJ1xuICApO1xufVxuXG4vKipcbiAqIEl0ZXJhdGUgb3ZlciBhbiBBcnJheSBvciBhbiBPYmplY3QgaW52b2tpbmcgYSBmdW5jdGlvbiBmb3IgZWFjaCBpdGVtLlxuICpcbiAqIElmIGBvYmpgIGlzIGFuIEFycmF5IGNhbGxiYWNrIHdpbGwgYmUgY2FsbGVkIHBhc3NpbmdcbiAqIHRoZSB2YWx1ZSwgaW5kZXgsIGFuZCBjb21wbGV0ZSBhcnJheSBmb3IgZWFjaCBpdGVtLlxuICpcbiAqIElmICdvYmonIGlzIGFuIE9iamVjdCBjYWxsYmFjayB3aWxsIGJlIGNhbGxlZCBwYXNzaW5nXG4gKiB0aGUgdmFsdWUsIGtleSwgYW5kIGNvbXBsZXRlIG9iamVjdCBmb3IgZWFjaCBwcm9wZXJ0eS5cbiAqXG4gKiBAcGFyYW0ge09iamVjdHxBcnJheX0gb2JqIFRoZSBvYmplY3QgdG8gaXRlcmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm4gVGhlIGNhbGxiYWNrIHRvIGludm9rZSBmb3IgZWFjaCBpdGVtXG4gKi9cbmZ1bmN0aW9uIGZvckVhY2gob2JqLCBmbikge1xuICAvLyBEb24ndCBib3RoZXIgaWYgbm8gdmFsdWUgcHJvdmlkZWRcbiAgaWYgKG9iaiA9PT0gbnVsbCB8fCB0eXBlb2Ygb2JqID09PSAndW5kZWZpbmVkJykge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8vIEZvcmNlIGFuIGFycmF5IGlmIG5vdCBhbHJlYWR5IHNvbWV0aGluZyBpdGVyYWJsZVxuICBpZiAodHlwZW9mIG9iaiAhPT0gJ29iamVjdCcpIHtcbiAgICAvKmVzbGludCBuby1wYXJhbS1yZWFzc2lnbjowKi9cbiAgICBvYmogPSBbb2JqXTtcbiAgfVxuXG4gIGlmIChpc0FycmF5KG9iaikpIHtcbiAgICAvLyBJdGVyYXRlIG92ZXIgYXJyYXkgdmFsdWVzXG4gICAgZm9yICh2YXIgaSA9IDAsIGwgPSBvYmoubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBmbi5jYWxsKG51bGwsIG9ialtpXSwgaSwgb2JqKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgLy8gSXRlcmF0ZSBvdmVyIG9iamVjdCBrZXlzXG4gICAgZm9yICh2YXIga2V5IGluIG9iaikge1xuICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIHtcbiAgICAgICAgZm4uY2FsbChudWxsLCBvYmpba2V5XSwga2V5LCBvYmopO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIEFjY2VwdHMgdmFyYXJncyBleHBlY3RpbmcgZWFjaCBhcmd1bWVudCB0byBiZSBhbiBvYmplY3QsIHRoZW5cbiAqIGltbXV0YWJseSBtZXJnZXMgdGhlIHByb3BlcnRpZXMgb2YgZWFjaCBvYmplY3QgYW5kIHJldHVybnMgcmVzdWx0LlxuICpcbiAqIFdoZW4gbXVsdGlwbGUgb2JqZWN0cyBjb250YWluIHRoZSBzYW1lIGtleSB0aGUgbGF0ZXIgb2JqZWN0IGluXG4gKiB0aGUgYXJndW1lbnRzIGxpc3Qgd2lsbCB0YWtlIHByZWNlZGVuY2UuXG4gKlxuICogRXhhbXBsZTpcbiAqXG4gKiBgYGBqc1xuICogdmFyIHJlc3VsdCA9IG1lcmdlKHtmb286IDEyM30sIHtmb286IDQ1Nn0pO1xuICogY29uc29sZS5sb2cocmVzdWx0LmZvbyk7IC8vIG91dHB1dHMgNDU2XG4gKiBgYGBcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqMSBPYmplY3QgdG8gbWVyZ2VcbiAqIEByZXR1cm5zIHtPYmplY3R9IFJlc3VsdCBvZiBhbGwgbWVyZ2UgcHJvcGVydGllc1xuICovXG5mdW5jdGlvbiBtZXJnZSgvKiBvYmoxLCBvYmoyLCBvYmozLCAuLi4gKi8pIHtcbiAgdmFyIHJlc3VsdCA9IHt9O1xuICBmdW5jdGlvbiBhc3NpZ25WYWx1ZSh2YWwsIGtleSkge1xuICAgIGlmICh0eXBlb2YgcmVzdWx0W2tleV0gPT09ICdvYmplY3QnICYmIHR5cGVvZiB2YWwgPT09ICdvYmplY3QnKSB7XG4gICAgICByZXN1bHRba2V5XSA9IG1lcmdlKHJlc3VsdFtrZXldLCB2YWwpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXN1bHRba2V5XSA9IHZhbDtcbiAgICB9XG4gIH1cblxuICBmb3IgKHZhciBpID0gMCwgbCA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBmb3JFYWNoKGFyZ3VtZW50c1tpXSwgYXNzaWduVmFsdWUpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogRXh0ZW5kcyBvYmplY3QgYSBieSBtdXRhYmx5IGFkZGluZyB0byBpdCB0aGUgcHJvcGVydGllcyBvZiBvYmplY3QgYi5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gYSBUaGUgb2JqZWN0IHRvIGJlIGV4dGVuZGVkXG4gKiBAcGFyYW0ge09iamVjdH0gYiBUaGUgb2JqZWN0IHRvIGNvcHkgcHJvcGVydGllcyBmcm9tXG4gKiBAcGFyYW0ge09iamVjdH0gdGhpc0FyZyBUaGUgb2JqZWN0IHRvIGJpbmQgZnVuY3Rpb24gdG9cbiAqIEByZXR1cm4ge09iamVjdH0gVGhlIHJlc3VsdGluZyB2YWx1ZSBvZiBvYmplY3QgYVxuICovXG5mdW5jdGlvbiBleHRlbmQoYSwgYiwgdGhpc0FyZykge1xuICBmb3JFYWNoKGIsIGZ1bmN0aW9uIGFzc2lnblZhbHVlKHZhbCwga2V5KSB7XG4gICAgaWYgKHRoaXNBcmcgJiYgdHlwZW9mIHZhbCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgYVtrZXldID0gYmluZCh2YWwsIHRoaXNBcmcpO1xuICAgIH0gZWxzZSB7XG4gICAgICBhW2tleV0gPSB2YWw7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIGE7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBpc0FycmF5OiBpc0FycmF5LFxuICBpc0FycmF5QnVmZmVyOiBpc0FycmF5QnVmZmVyLFxuICBpc0J1ZmZlcjogaXNCdWZmZXIsXG4gIGlzRm9ybURhdGE6IGlzRm9ybURhdGEsXG4gIGlzQXJyYXlCdWZmZXJWaWV3OiBpc0FycmF5QnVmZmVyVmlldyxcbiAgaXNTdHJpbmc6IGlzU3RyaW5nLFxuICBpc051bWJlcjogaXNOdW1iZXIsXG4gIGlzT2JqZWN0OiBpc09iamVjdCxcbiAgaXNVbmRlZmluZWQ6IGlzVW5kZWZpbmVkLFxuICBpc0RhdGU6IGlzRGF0ZSxcbiAgaXNGaWxlOiBpc0ZpbGUsXG4gIGlzQmxvYjogaXNCbG9iLFxuICBpc0Z1bmN0aW9uOiBpc0Z1bmN0aW9uLFxuICBpc1N0cmVhbTogaXNTdHJlYW0sXG4gIGlzVVJMU2VhcmNoUGFyYW1zOiBpc1VSTFNlYXJjaFBhcmFtcyxcbiAgaXNTdGFuZGFyZEJyb3dzZXJFbnY6IGlzU3RhbmRhcmRCcm93c2VyRW52LFxuICBmb3JFYWNoOiBmb3JFYWNoLFxuICBtZXJnZTogbWVyZ2UsXG4gIGV4dGVuZDogZXh0ZW5kLFxuICB0cmltOiB0cmltXG59O1xuXG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vbm9kZV9tb2R1bGVzL2lzLWJ1ZmZlci9pbmRleC5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9ub2RlX21vZHVsZXMvaXMtYnVmZmVyL2luZGV4LmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG4vKiFcbiAqIERldGVybWluZSBpZiBhbiBvYmplY3QgaXMgYSBCdWZmZXJcbiAqXG4gKiBAYXV0aG9yICAgRmVyb3NzIEFib3VraGFkaWplaCA8aHR0cHM6Ly9mZXJvc3Mub3JnPlxuICogQGxpY2Vuc2UgIE1JVFxuICovXG5cbi8vIFRoZSBfaXNCdWZmZXIgY2hlY2sgaXMgZm9yIFNhZmFyaSA1LTcgc3VwcG9ydCwgYmVjYXVzZSBpdCdzIG1pc3Npbmdcbi8vIE9iamVjdC5wcm90b3R5cGUuY29uc3RydWN0b3IuIFJlbW92ZSB0aGlzIGV2ZW50dWFsbHlcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG9iaikge1xuICByZXR1cm4gb2JqICE9IG51bGwgJiYgKGlzQnVmZmVyKG9iaikgfHwgaXNTbG93QnVmZmVyKG9iaikgfHwgISFvYmouX2lzQnVmZmVyKVxufVxuXG5mdW5jdGlvbiBpc0J1ZmZlciAob2JqKSB7XG4gIHJldHVybiAhIW9iai5jb25zdHJ1Y3RvciAmJiB0eXBlb2Ygb2JqLmNvbnN0cnVjdG9yLmlzQnVmZmVyID09PSAnZnVuY3Rpb24nICYmIG9iai5jb25zdHJ1Y3Rvci5pc0J1ZmZlcihvYmopXG59XG5cbi8vIEZvciBOb2RlIHYwLjEwIHN1cHBvcnQuIFJlbW92ZSB0aGlzIGV2ZW50dWFsbHkuXG5mdW5jdGlvbiBpc1Nsb3dCdWZmZXIgKG9iaikge1xuICByZXR1cm4gdHlwZW9mIG9iai5yZWFkRmxvYXRMRSA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2Ygb2JqLnNsaWNlID09PSAnZnVuY3Rpb24nICYmIGlzQnVmZmVyKG9iai5zbGljZSgwLCAwKSlcbn1cblxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL25vZGVfbW9kdWxlcy9wcm9jZXNzL2Jyb3dzZXIuanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vbm9kZV9tb2R1bGVzL3Byb2Nlc3MvYnJvd3Nlci5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxuLy8gc2hpbSBmb3IgdXNpbmcgcHJvY2VzcyBpbiBicm93c2VyXG52YXIgcHJvY2VzcyA9IG1vZHVsZS5leHBvcnRzID0ge307XG5cbi8vIGNhY2hlZCBmcm9tIHdoYXRldmVyIGdsb2JhbCBpcyBwcmVzZW50IHNvIHRoYXQgdGVzdCBydW5uZXJzIHRoYXQgc3R1YiBpdFxuLy8gZG9uJ3QgYnJlYWsgdGhpbmdzLiAgQnV0IHdlIG5lZWQgdG8gd3JhcCBpdCBpbiBhIHRyeSBjYXRjaCBpbiBjYXNlIGl0IGlzXG4vLyB3cmFwcGVkIGluIHN0cmljdCBtb2RlIGNvZGUgd2hpY2ggZG9lc24ndCBkZWZpbmUgYW55IGdsb2JhbHMuICBJdCdzIGluc2lkZSBhXG4vLyBmdW5jdGlvbiBiZWNhdXNlIHRyeS9jYXRjaGVzIGRlb3B0aW1pemUgaW4gY2VydGFpbiBlbmdpbmVzLlxuXG52YXIgY2FjaGVkU2V0VGltZW91dDtcbnZhciBjYWNoZWRDbGVhclRpbWVvdXQ7XG5cbmZ1bmN0aW9uIGRlZmF1bHRTZXRUaW1vdXQoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdzZXRUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG5mdW5jdGlvbiBkZWZhdWx0Q2xlYXJUaW1lb3V0ICgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2NsZWFyVGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuKGZ1bmN0aW9uICgpIHtcbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIHNldFRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIGNsZWFyVGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICB9XG59ICgpKVxuZnVuY3Rpb24gcnVuVGltZW91dChmdW4pIHtcbiAgICBpZiAoY2FjaGVkU2V0VGltZW91dCA9PT0gc2V0VGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgLy8gaWYgc2V0VGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZFNldFRpbWVvdXQgPT09IGRlZmF1bHRTZXRUaW1vdXQgfHwgIWNhY2hlZFNldFRpbWVvdXQpICYmIHNldFRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9IGNhdGNoKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0IHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKG51bGwsIGZ1biwgMCk7XG4gICAgICAgIH0gY2F0Y2goZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvclxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbCh0aGlzLCBmdW4sIDApO1xuICAgICAgICB9XG4gICAgfVxuXG5cbn1cbmZ1bmN0aW9uIHJ1bkNsZWFyVGltZW91dChtYXJrZXIpIHtcbiAgICBpZiAoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgLy8gaWYgY2xlYXJUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBkZWZhdWx0Q2xlYXJUaW1lb3V0IHx8ICFjYWNoZWRDbGVhclRpbWVvdXQpICYmIGNsZWFyVGltZW91dCkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfSBjYXRjaCAoZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgIHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwobnVsbCwgbWFya2VyKTtcbiAgICAgICAgfSBjYXRjaCAoZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvci5cbiAgICAgICAgICAgIC8vIFNvbWUgdmVyc2lvbnMgb2YgSS5FLiBoYXZlIGRpZmZlcmVudCBydWxlcyBmb3IgY2xlYXJUaW1lb3V0IHZzIHNldFRpbWVvdXRcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbCh0aGlzLCBtYXJrZXIpO1xuICAgICAgICB9XG4gICAgfVxuXG5cblxufVxudmFyIHF1ZXVlID0gW107XG52YXIgZHJhaW5pbmcgPSBmYWxzZTtcbnZhciBjdXJyZW50UXVldWU7XG52YXIgcXVldWVJbmRleCA9IC0xO1xuXG5mdW5jdGlvbiBjbGVhblVwTmV4dFRpY2soKSB7XG4gICAgaWYgKCFkcmFpbmluZyB8fCAhY3VycmVudFF1ZXVlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBpZiAoY3VycmVudFF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBxdWV1ZSA9IGN1cnJlbnRRdWV1ZS5jb25jYXQocXVldWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICB9XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBkcmFpblF1ZXVlKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBkcmFpblF1ZXVlKCkge1xuICAgIGlmIChkcmFpbmluZykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciB0aW1lb3V0ID0gcnVuVGltZW91dChjbGVhblVwTmV4dFRpY2spO1xuICAgIGRyYWluaW5nID0gdHJ1ZTtcblxuICAgIHZhciBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgd2hpbGUobGVuKSB7XG4gICAgICAgIGN1cnJlbnRRdWV1ZSA9IHF1ZXVlO1xuICAgICAgICBxdWV1ZSA9IFtdO1xuICAgICAgICB3aGlsZSAoKytxdWV1ZUluZGV4IDwgbGVuKSB7XG4gICAgICAgICAgICBpZiAoY3VycmVudFF1ZXVlKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudFF1ZXVlW3F1ZXVlSW5kZXhdLnJ1bigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICAgICAgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIH1cbiAgICBjdXJyZW50UXVldWUgPSBudWxsO1xuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgcnVuQ2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xufVxuXG5wcm9jZXNzLm5leHRUaWNrID0gZnVuY3Rpb24gKGZ1bikge1xuICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGggLSAxKTtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGFyZ3NbaSAtIDFdID0gYXJndW1lbnRzW2ldO1xuICAgICAgICB9XG4gICAgfVxuICAgIHF1ZXVlLnB1c2gobmV3IEl0ZW0oZnVuLCBhcmdzKSk7XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCA9PT0gMSAmJiAhZHJhaW5pbmcpIHtcbiAgICAgICAgcnVuVGltZW91dChkcmFpblF1ZXVlKTtcbiAgICB9XG59O1xuXG4vLyB2OCBsaWtlcyBwcmVkaWN0aWJsZSBvYmplY3RzXG5mdW5jdGlvbiBJdGVtKGZ1biwgYXJyYXkpIHtcbiAgICB0aGlzLmZ1biA9IGZ1bjtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG59XG5JdGVtLnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5mdW4uYXBwbHkobnVsbCwgdGhpcy5hcnJheSk7XG59O1xucHJvY2Vzcy50aXRsZSA9ICdicm93c2VyJztcbnByb2Nlc3MuYnJvd3NlciA9IHRydWU7XG5wcm9jZXNzLmVudiA9IHt9O1xucHJvY2Vzcy5hcmd2ID0gW107XG5wcm9jZXNzLnZlcnNpb24gPSAnJzsgLy8gZW1wdHkgc3RyaW5nIHRvIGF2b2lkIHJlZ2V4cCBpc3N1ZXNcbnByb2Nlc3MudmVyc2lvbnMgPSB7fTtcblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbnByb2Nlc3Mub24gPSBub29wO1xucHJvY2Vzcy5hZGRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLm9uY2UgPSBub29wO1xucHJvY2Vzcy5vZmYgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUFsbExpc3RlbmVycyA9IG5vb3A7XG5wcm9jZXNzLmVtaXQgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kT25jZUxpc3RlbmVyID0gbm9vcDtcblxucHJvY2Vzcy5saXN0ZW5lcnMgPSBmdW5jdGlvbiAobmFtZSkgeyByZXR1cm4gW10gfVxuXG5wcm9jZXNzLmJpbmRpbmcgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5iaW5kaW5nIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5cbnByb2Nlc3MuY3dkID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gJy8nIH07XG5wcm9jZXNzLmNoZGlyID0gZnVuY3Rpb24gKGRpcikge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5jaGRpciBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xucHJvY2Vzcy51bWFzayA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gMDsgfTtcblxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL3NyYy9jaGFubmVscy9jaGFubmVsLmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9zcmMvY2hhbm5lbHMvY2hhbm5lbC5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIGV4cG9ydHMgcHJvdmlkZWQ6IENoYW5uZWwgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIF9fd2VicGFja19leHBvcnRzX18sIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIoX193ZWJwYWNrX2V4cG9ydHNfXyk7XG4vKiBoYXJtb255IGV4cG9ydCAoYmluZGluZykgKi8gX193ZWJwYWNrX3JlcXVpcmVfXy5kKF9fd2VicGFja19leHBvcnRzX18sIFwiQ2hhbm5lbFwiLCBmdW5jdGlvbigpIHsgcmV0dXJuIENoYW5uZWw7IH0pO1xuLyogaGFybW9ueSBpbXBvcnQgKi8gdmFyIF9ldmVudHNfZGlzcGF0Y2hlcl9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi4vZXZlbnRzL2Rpc3BhdGNoZXIgKi8gXCIuL3NyYy9ldmVudHMvZGlzcGF0Y2hlci5qc1wiKTtcbmZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH07IH0gZWxzZSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTsgfSByZXR1cm4gX3R5cGVvZihvYmopOyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoY2FsbCAmJiAoX3R5cGVvZihjYWxsKSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSkgeyByZXR1cm4gY2FsbDsgfSByZXR1cm4gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKTsgfVxuXG5mdW5jdGlvbiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpIHsgaWYgKHNlbGYgPT09IHZvaWQgMCkgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIHNlbGY7IH1cblxuZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgX2dldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LmdldFByb3RvdHlwZU9mIDogZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgcmV0dXJuIG8uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihvKTsgfTsgcmV0dXJuIF9nZXRQcm90b3R5cGVPZihvKTsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgX3NldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKTsgfVxuXG5mdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgby5fX3Byb3RvX18gPSBwOyByZXR1cm4gbzsgfTsgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihvLCBwKTsgfVxuXG5cbnZhciBDaGFubmVsID1cbi8qI19fUFVSRV9fKi9cbmZ1bmN0aW9uIChfRGlzcGF0Y2hlcikge1xuICBfaW5oZXJpdHMoQ2hhbm5lbCwgX0Rpc3BhdGNoZXIpO1xuXG4gIGZ1bmN0aW9uIENoYW5uZWwobmFtZSwgcHVzaGVyKSB7XG4gICAgdmFyIF90aGlzO1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIENoYW5uZWwpO1xuXG4gICAgX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfZ2V0UHJvdG90eXBlT2YoQ2hhbm5lbCkuY2FsbCh0aGlzKSk7XG4gICAgX3RoaXMubmFtZSA9IG5hbWU7XG4gICAgX3RoaXMucHVzaGVyID0gcHVzaGVyO1xuXG4gICAgaWYgKF90aGlzLnB1c2hlci5zb2NrZXQuc3RhdGUgPT0gMSkge1xuICAgICAgX3RoaXMuc3Vic2NyaWJlKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKENoYW5uZWwsIFt7XG4gICAga2V5OiBcInN1YnNjcmliZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzdWJzY3JpYmUoKSB7XG4gICAgICB0aGlzLnB1c2hlci5zZW5kKHtcbiAgICAgICAgZXZlbnQ6ICdzdWJzY3JpYmUnLFxuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgY2hhbm5lbDogdGhpcy5uYW1lXG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBDaGFubmVsO1xufShfZXZlbnRzX2Rpc3BhdGNoZXJfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfX1tcIkRpc3BhdGNoZXJcIl0pO1xuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL3NyYy9jaGFubmVscy9tYW5uYWdlci5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL3NyYy9jaGFubmVscy9tYW5uYWdlci5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBleHBvcnRzIHByb3ZpZGVkOiBNYW5uYWdlciAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgX193ZWJwYWNrX2V4cG9ydHNfXywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcbl9fd2VicGFja19yZXF1aXJlX18ucihfX3dlYnBhY2tfZXhwb3J0c19fKTtcbi8qIGhhcm1vbnkgZXhwb3J0IChiaW5kaW5nKSAqLyBfX3dlYnBhY2tfcmVxdWlyZV9fLmQoX193ZWJwYWNrX2V4cG9ydHNfXywgXCJNYW5uYWdlclwiLCBmdW5jdGlvbigpIHsgcmV0dXJuIE1hbm5hZ2VyOyB9KTtcbi8qIGhhcm1vbnkgaW1wb3J0ICovIHZhciBfY2hhbm5lbF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9jaGFubmVsICovIFwiLi9zcmMvY2hhbm5lbHMvY2hhbm5lbC5qc1wiKTtcbi8qIGhhcm1vbnkgaW1wb3J0ICovIHZhciBfcHJlc2VuY2VfY2hhbm5lbF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMV9fID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9wcmVzZW5jZV9jaGFubmVsICovIFwiLi9zcmMvY2hhbm5lbHMvcHJlc2VuY2VfY2hhbm5lbC5qc1wiKTtcbi8qIGhhcm1vbnkgaW1wb3J0ICovIHZhciBfcHJpdmF0ZV9jaGFubmVsX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8yX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL3ByaXZhdGVfY2hhbm5lbCAqLyBcIi4vc3JjL2NoYW5uZWxzL3ByaXZhdGVfY2hhbm5lbC5qc1wiKTtcbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH1cblxuXG5cblxudmFyIE1hbm5hZ2VyID1cbi8qI19fUFVSRV9fKi9cbmZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gTWFubmFnZXIoKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIE1hbm5hZ2VyKTtcblxuICAgIHRoaXMuY2hhbm5lbHMgPSB7fTtcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhNYW5uYWdlciwgW3tcbiAgICBrZXk6IFwiYWRkXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGFkZChuYW1lLCBwdXNoZXIpIHtcbiAgICAgIGlmICghdGhpcy5jaGFubmVsc1tuYW1lXSkge1xuICAgICAgICB0aGlzLmNoYW5uZWxzW25hbWVdID0gY3JlYXRlQ2hhbm5lbChuYW1lLCBwdXNoZXIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5jaGFubmVsc1tuYW1lXTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiYWxsXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGFsbCgpIHtcbiAgICAgIHJldHVybiBPYmplY3Qua2V5cyh0aGlzLmNoYW5uZWxzKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZmluZFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBmaW5kKG5hbWUpIHtcbiAgICAgIHJldHVybiB0aGlzLmNoYW5uZWxzW25hbWVdO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJyZW1vdmVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVtb3ZlKG5hbWUpIHtcbiAgICAgIHZhciBjaGFubmVsID0gdGhpcy5jaGFubmVsc1tuYW1lXTtcbiAgICAgIGRlbGV0ZSB0aGlzLmNoYW5uZWxzW25hbWVdO1xuICAgICAgcmV0dXJuIGNoYW5uZWw7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInN1YnNjcmliZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzdWJzY3JpYmUoKSB7XG4gICAgICBmb3IgKHZhciBpIGluIHRoaXMuY2hhbm5lbHMpIHtcbiAgICAgICAgdGhpcy5jaGFubmVsc1tpXS5zdWJzY3JpYmUoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gTWFubmFnZXI7XG59KCk7XG5cbmZ1bmN0aW9uIGNyZWF0ZUNoYW5uZWwobmFtZSwgcHVzaGVyKSB7XG4gIGlmIChuYW1lLmluZGV4T2YoJ3ByaXZhdGUtJykgPT09IDApIHtcbiAgICByZXR1cm4gbmV3IF9wcml2YXRlX2NoYW5uZWxfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzJfX1tcIlByaXZhdGVDaGFubmVsXCJdKG5hbWUsIHB1c2hlcik7XG4gIH0gZWxzZSBpZiAobmFtZS5pbmRleE9mKCdwcmVzZW5jZS0nKSA9PT0gMCkge1xuICAgIHJldHVybiBuZXcgX3ByZXNlbmNlX2NoYW5uZWxfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzFfX1tcIlByZXNlbmNlQ2hhbm5lbFwiXShuYW1lLCBwdXNoZXIpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBuZXcgX2NoYW5uZWxfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfX1tcIkNoYW5uZWxcIl0obmFtZSwgcHVzaGVyKTtcbiAgfVxufVxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL3NyYy9jaGFubmVscy9wcmVzZW5jZV9jaGFubmVsLmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9zcmMvY2hhbm5lbHMvcHJlc2VuY2VfY2hhbm5lbC5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIGV4cG9ydHMgcHJvdmlkZWQ6IFByZXNlbmNlQ2hhbm5lbCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgX193ZWJwYWNrX2V4cG9ydHNfXywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcbl9fd2VicGFja19yZXF1aXJlX18ucihfX3dlYnBhY2tfZXhwb3J0c19fKTtcbi8qIGhhcm1vbnkgZXhwb3J0IChiaW5kaW5nKSAqLyBfX3dlYnBhY2tfcmVxdWlyZV9fLmQoX193ZWJwYWNrX2V4cG9ydHNfXywgXCJQcmVzZW5jZUNoYW5uZWxcIiwgZnVuY3Rpb24oKSB7IHJldHVybiBQcmVzZW5jZUNoYW5uZWw7IH0pO1xuLyogaGFybW9ueSBpbXBvcnQgKi8gdmFyIF9ldmVudHNfZGlzcGF0Y2hlcl9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi4vZXZlbnRzL2Rpc3BhdGNoZXIgKi8gXCIuL3NyYy9ldmVudHMvZGlzcGF0Y2hlci5qc1wiKTtcbmZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH07IH0gZWxzZSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTsgfSByZXR1cm4gX3R5cGVvZihvYmopOyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoY2FsbCAmJiAoX3R5cGVvZihjYWxsKSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSkgeyByZXR1cm4gY2FsbDsgfSByZXR1cm4gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKTsgfVxuXG5mdW5jdGlvbiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpIHsgaWYgKHNlbGYgPT09IHZvaWQgMCkgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIHNlbGY7IH1cblxuZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgX2dldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LmdldFByb3RvdHlwZU9mIDogZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgcmV0dXJuIG8uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihvKTsgfTsgcmV0dXJuIF9nZXRQcm90b3R5cGVPZihvKTsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgX3NldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKTsgfVxuXG5mdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgby5fX3Byb3RvX18gPSBwOyByZXR1cm4gbzsgfTsgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihvLCBwKTsgfVxuXG5cbnZhciBQcmVzZW5jZUNoYW5uZWwgPVxuLyojX19QVVJFX18qL1xuZnVuY3Rpb24gKF9EaXNwYXRjaGVyKSB7XG4gIF9pbmhlcml0cyhQcmVzZW5jZUNoYW5uZWwsIF9EaXNwYXRjaGVyKTtcblxuICBmdW5jdGlvbiBQcmVzZW5jZUNoYW5uZWwobmFtZSwgcHVzaGVyKSB7XG4gICAgdmFyIF90aGlzO1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFByZXNlbmNlQ2hhbm5lbCk7XG5cbiAgICBfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9nZXRQcm90b3R5cGVPZihQcmVzZW5jZUNoYW5uZWwpLmNhbGwodGhpcykpO1xuICAgIF90aGlzLm5hbWUgPSBuYW1lO1xuICAgIF90aGlzLnB1c2hlciA9IHB1c2hlcjtcbiAgICBfdGhpcy5hdXRoID0gbnVsbDtcblxuICAgIGlmIChfdGhpcy5wdXNoZXIuc29ja2V0LnN0YXRlID09IDEpIHtcbiAgICAgIF90aGlzLnN1YnNjcmliZSgpO1xuICAgIH1cblxuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhQcmVzZW5jZUNoYW5uZWwsIFt7XG4gICAga2V5OiBcInN1YnNjcmliZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzdWJzY3JpYmUoKSB7XG4gICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgdGhpcy5wdXNoZXIuYXV0aCh0aGlzLm5hbWUsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIF90aGlzMi5hdXRoID0gZS5kYXRhLmF1dGg7XG5cbiAgICAgICAgX3RoaXMyLnB1c2hlci5zZW5kKHtcbiAgICAgICAgICBldmVudDogJ3N1YnNjcmliZScsXG4gICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgY2hhbm5lbDogX3RoaXMyLm5hbWUsXG4gICAgICAgICAgICBhdXRoOiBfdGhpczIuYXV0aCxcbiAgICAgICAgICAgIGNoYW5uZWxfZGF0YTogZS5kYXRhLmNoYW5uZWxfZGF0YVxuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gUHJlc2VuY2VDaGFubmVsO1xufShfZXZlbnRzX2Rpc3BhdGNoZXJfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfX1tcIkRpc3BhdGNoZXJcIl0pO1xuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL3NyYy9jaGFubmVscy9wcml2YXRlX2NoYW5uZWwuanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vc3JjL2NoYW5uZWxzL3ByaXZhdGVfY2hhbm5lbC5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgZXhwb3J0cyBwcm92aWRlZDogUHJpdmF0ZUNoYW5uZWwgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIF9fd2VicGFja19leHBvcnRzX18sIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIoX193ZWJwYWNrX2V4cG9ydHNfXyk7XG4vKiBoYXJtb255IGV4cG9ydCAoYmluZGluZykgKi8gX193ZWJwYWNrX3JlcXVpcmVfXy5kKF9fd2VicGFja19leHBvcnRzX18sIFwiUHJpdmF0ZUNoYW5uZWxcIiwgZnVuY3Rpb24oKSB7IHJldHVybiBQcml2YXRlQ2hhbm5lbDsgfSk7XG4vKiBoYXJtb255IGltcG9ydCAqLyB2YXIgX2V2ZW50c19kaXNwYXRjaGVyX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuLi9ldmVudHMvZGlzcGF0Y2hlciAqLyBcIi4vc3JjL2V2ZW50cy9kaXNwYXRjaGVyLmpzXCIpO1xuZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfTsgfSBlbHNlIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9OyB9IHJldHVybiBfdHlwZW9mKG9iaik7IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfVxuXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmIChjYWxsICYmIChfdHlwZW9mKGNhbGwpID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpKSB7IHJldHVybiBjYWxsOyB9IHJldHVybiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpOyB9XG5cbmZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikgeyBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gc2VsZjsgfVxuXG5mdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyBfZ2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3QuZ2V0UHJvdG90eXBlT2YgOiBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyByZXR1cm4gby5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKG8pOyB9OyByZXR1cm4gX2dldFByb3RvdHlwZU9mKG8pOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBfc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpOyB9XG5cbmZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBvLl9fcHJvdG9fXyA9IHA7IHJldHVybiBvOyB9OyByZXR1cm4gX3NldFByb3RvdHlwZU9mKG8sIHApOyB9XG5cblxudmFyIFByaXZhdGVDaGFubmVsID1cbi8qI19fUFVSRV9fKi9cbmZ1bmN0aW9uIChfRGlzcGF0Y2hlcikge1xuICBfaW5oZXJpdHMoUHJpdmF0ZUNoYW5uZWwsIF9EaXNwYXRjaGVyKTtcblxuICBmdW5jdGlvbiBQcml2YXRlQ2hhbm5lbChuYW1lLCBwdXNoZXIpIHtcbiAgICB2YXIgX3RoaXM7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgUHJpdmF0ZUNoYW5uZWwpO1xuXG4gICAgX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfZ2V0UHJvdG90eXBlT2YoUHJpdmF0ZUNoYW5uZWwpLmNhbGwodGhpcykpO1xuICAgIF90aGlzLm5hbWUgPSBuYW1lO1xuICAgIF90aGlzLnB1c2hlciA9IHB1c2hlcjtcbiAgICBfdGhpcy5hdXRoID0gbnVsbDtcblxuICAgIGlmIChfdGhpcy5wdXNoZXIuc29ja2V0LnN0YXRlID09IDEpIHtcbiAgICAgIF90aGlzLnN1YnNjcmliZSgpO1xuICAgIH1cblxuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhQcml2YXRlQ2hhbm5lbCwgW3tcbiAgICBrZXk6IFwic3Vic2NyaWJlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHN1YnNjcmliZSgpIHtcbiAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICB0aGlzLnB1c2hlci5hdXRoKHRoaXMubmFtZSwgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgX3RoaXMyLmF1dGggPSBlLmRhdGEuYXV0aDtcblxuICAgICAgICBfdGhpczIucHVzaGVyLnNlbmQoe1xuICAgICAgICAgIGV2ZW50OiAnc3Vic2NyaWJlJyxcbiAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICBjaGFubmVsOiBfdGhpczIubmFtZSxcbiAgICAgICAgICAgIGF1dGg6IF90aGlzMi5hdXRoXG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBQcml2YXRlQ2hhbm5lbDtcbn0oX2V2ZW50c19kaXNwYXRjaGVyX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX19bXCJEaXNwYXRjaGVyXCJdKTtcblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9zcmMvY29ubmVjdGlvbi9zb2NrZXQuanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9zcmMvY29ubmVjdGlvbi9zb2NrZXQuanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgZXhwb3J0cyBwcm92aWRlZDogU29ja2V0ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBfX3dlYnBhY2tfZXhwb3J0c19fLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yKF9fd2VicGFja19leHBvcnRzX18pO1xuLyogaGFybW9ueSBleHBvcnQgKGJpbmRpbmcpICovIF9fd2VicGFja19yZXF1aXJlX18uZChfX3dlYnBhY2tfZXhwb3J0c19fLCBcIlNvY2tldFwiLCBmdW5jdGlvbigpIHsgcmV0dXJuIFNvY2tldDsgfSk7XG4vKiBoYXJtb255IGltcG9ydCAqLyB2YXIgX2V2ZW50c19kaXNwYXRjaGVyX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuLi9ldmVudHMvZGlzcGF0Y2hlciAqLyBcIi4vc3JjL2V2ZW50cy9kaXNwYXRjaGVyLmpzXCIpO1xuZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfTsgfSBlbHNlIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9OyB9IHJldHVybiBfdHlwZW9mKG9iaik7IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfVxuXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmIChjYWxsICYmIChfdHlwZW9mKGNhbGwpID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpKSB7IHJldHVybiBjYWxsOyB9IHJldHVybiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpOyB9XG5cbmZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikgeyBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gc2VsZjsgfVxuXG5mdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyBfZ2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3QuZ2V0UHJvdG90eXBlT2YgOiBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyByZXR1cm4gby5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKG8pOyB9OyByZXR1cm4gX2dldFByb3RvdHlwZU9mKG8pOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBfc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpOyB9XG5cbmZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBvLl9fcHJvdG9fXyA9IHA7IHJldHVybiBvOyB9OyByZXR1cm4gX3NldFByb3RvdHlwZU9mKG8sIHApOyB9XG5cblxudmFyIFNvY2tldCA9XG4vKiNfX1BVUkVfXyovXG5mdW5jdGlvbiAoX0Rpc3BhdGNoZXIpIHtcbiAgX2luaGVyaXRzKFNvY2tldCwgX0Rpc3BhdGNoZXIpO1xuXG4gIGZ1bmN0aW9uIFNvY2tldChwdXNoZXIsIGhvc3QpIHtcbiAgICB2YXIgX3RoaXM7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgU29ja2V0KTtcblxuICAgIF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX2dldFByb3RvdHlwZU9mKFNvY2tldCkuY2FsbCh0aGlzKSk7XG4gICAgX3RoaXMucHVzaGVyID0gcHVzaGVyO1xuICAgIF90aGlzLnNvY2tldCA9IG5ldyBXZWJTb2NrZXQoaG9zdCArICcvJyArIF90aGlzLnB1c2hlci5rZXkpO1xuXG4gICAgX3RoaXMuYmluZExpc3RlbmVycygpO1xuXG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKFNvY2tldCwgW3tcbiAgICBrZXk6IFwiYmluZExpc3RlbmVyc1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBiaW5kTGlzdGVuZXJzKCkge1xuICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgIHRoaXMuc29ja2V0Lm9ub3BlbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgX3RoaXMyLm9uT3BlbigpO1xuICAgICAgfTtcblxuICAgICAgdGhpcy5zb2NrZXQub25lcnJvciA9IGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICBfdGhpczIub25FcnJvcihlcnJvcik7XG4gICAgICB9O1xuXG4gICAgICB0aGlzLnNvY2tldC5vbmNsb3NlID0gZnVuY3Rpb24gKGNsb3NlRXZlbnQpIHtcbiAgICAgICAgX3RoaXMyLm9uQ2xvc2UoY2xvc2VFdmVudCk7XG4gICAgICB9O1xuXG4gICAgICB0aGlzLnNvY2tldC5vbm1lc3NhZ2UgPSBmdW5jdGlvbiAobWVzc2FnZSkge1xuICAgICAgICBfdGhpczIub25NZXNzYWdlKG1lc3NhZ2UpO1xuICAgICAgfTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwib25PcGVuXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG9uT3BlbigpIHtcbiAgICAgIHZhciBfdGhpczMgPSB0aGlzO1xuXG4gICAgICAvL+WIneWni+eKtuaAgVxuICAgICAgdGhpcy5zdGF0ZSA9IDA7XG4gICAgICB0aGlzLmJpbmQoJ2F1dGhvcml6YXRpb25fc3VjY2VzcycsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIF90aGlzMy5zb2NrZXQuc29ja2V0X2lkID0gZS5zb2NrZXRfaWQ7XG4gICAgICAgIF90aGlzMy5zdGF0ZSA9IDE7IC8v6K6i6ZiFXG5cbiAgICAgICAgX3RoaXMzLnB1c2hlci5jaGFubmVscy5zdWJzY3JpYmUoKTtcbiAgICAgIH0pO1xuICAgICAgdGhpcy5iaW5kKCdhdXRob3JpemF0aW9uX2Vycm9yJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgX3RoaXMzLnN0YXRlID0gLTE7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZS5lcnJvcik7XG4gICAgICB9KTtcbiAgICAgIHRoaXMuc2VuZCh7XG4gICAgICAgIGV2ZW50OiAnYXV0aG9yaXphdGlvbidcbiAgICAgIH0pO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJvbkVycm9yXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG9uRXJyb3IoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJvbkNsb3NlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG9uQ2xvc2UoY2xvc2VFdmVudCkge1xuICAgICAgaWYgKHRoaXMuc29ja2V0LnJlYWR5U3RhdGUgPT0gV2ViU29ja2V0LkNMT1NFRCkge1xuICAgICAgICBpZiAoY2xvc2VFdmVudC50eXBlID09ICdjbG9zZScpIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCdzb2NrZXTmnI3liqHlt7Lmlq3lvIAhIScpO1xuICAgICAgICB9IGVsc2UgaWYgKGNsb3NlRXZlbnQudHlwZSA9PSAnbWVzc2FnZScpIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGNsb3NlRXZlbnQuZGF0YSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcign5bey5pat5byAISEnKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJvbk1lc3NhZ2VcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gb25NZXNzYWdlKG1lc3NhZ2UpIHtcbiAgICAgIHZhciBlRGF0YSA9IEpTT04ucGFyc2UobWVzc2FnZS5kYXRhKTtcbiAgICAgIHZhciBldmVudCA9IGVEYXRhLmV2ZW50O1xuICAgICAgdmFyIGRhdGEgPSBlRGF0YS5kYXRhO1xuXG4gICAgICBpZiAoZURhdGEuY2hhbm5lbCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHRoaXMucHVzaGVyLmNoYW5uZWxzLmZpbmQoZURhdGEuY2hhbm5lbCkuZW1pdChldmVudCwgZGF0YSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmVtaXQoZXZlbnQsIGRhdGEpO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJzZW5kXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNlbmQoanNvbikge1xuICAgICAgaWYgKHRoaXMuc3RhdGUgIT09IC0xKSB7XG4gICAgICAgIHRoaXMuc29ja2V0LnNlbmQoSlNPTi5zdHJpbmdpZnkoanNvbikpO1xuICAgICAgfVxuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBTb2NrZXQ7XG59KF9ldmVudHNfZGlzcGF0Y2hlcl9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fW1wiRGlzcGF0Y2hlclwiXSk7XG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vc3JjL2V2ZW50cy9jYWxsYmFja19yZWdpc3RyeS5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9zcmMvZXZlbnRzL2NhbGxiYWNrX3JlZ2lzdHJ5LmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBleHBvcnRzIHByb3ZpZGVkOiBDYWxsYmFja1JlZ2lzdHJ5ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBfX3dlYnBhY2tfZXhwb3J0c19fLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yKF9fd2VicGFja19leHBvcnRzX18pO1xuLyogaGFybW9ueSBleHBvcnQgKGJpbmRpbmcpICovIF9fd2VicGFja19yZXF1aXJlX18uZChfX3dlYnBhY2tfZXhwb3J0c19fLCBcIkNhbGxiYWNrUmVnaXN0cnlcIiwgZnVuY3Rpb24oKSB7IHJldHVybiBDYWxsYmFja1JlZ2lzdHJ5OyB9KTtcbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH1cblxudmFyIENhbGxiYWNrUmVnaXN0cnkgPVxuLyojX19QVVJFX18qL1xuZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBDYWxsYmFja1JlZ2lzdHJ5KCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBDYWxsYmFja1JlZ2lzdHJ5KTtcblxuICAgIHRoaXMuX2NhbGxiYWNrcyA9IHt9O1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKENhbGxiYWNrUmVnaXN0cnksIFt7XG4gICAga2V5OiBcImdldFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXQobmFtZSkge1xuICAgICAgcmV0dXJuIHRoaXMuX2NhbGxiYWNrc1twcmVmaXgobmFtZSldO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJhZGRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gYWRkKG5hbWUsIGNhbGxiYWNrLCBjb250ZXh0KSB7XG4gICAgICB2YXIgcHJlZml4ZWRFdmVudE5hbWUgPSBwcmVmaXgobmFtZSk7XG4gICAgICB0aGlzLl9jYWxsYmFja3NbcHJlZml4ZWRFdmVudE5hbWVdID0gdGhpcy5fY2FsbGJhY2tzW3ByZWZpeGVkRXZlbnROYW1lXSB8fCBbXTtcblxuICAgICAgdGhpcy5fY2FsbGJhY2tzW3ByZWZpeGVkRXZlbnROYW1lXS5wdXNoKHtcbiAgICAgICAgZm46IGNhbGxiYWNrLFxuICAgICAgICBjb250ZXh0OiBjb250ZXh0XG4gICAgICB9KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwicmVtb3ZlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbW92ZShuYW1lLCBjYWxsYmFjaywgY29udGV4dCkge1xuICAgICAgaWYgKCFuYW1lICYmICFjYWxsYmFjayAmJiAhY29udGV4dCkge1xuICAgICAgICB0aGlzLl9jYWxsYmFja3MgPSB7fTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB2YXIgbmFtZXMgPSBuYW1lID8gW3ByZWZpeChuYW1lKV0gOiBPYmplY3Qua2V5cyh0aGlzLl9jYWxsYmFja3MpO1xuXG4gICAgICBpZiAoY2FsbGJhY2sgfHwgY29udGV4dCkge1xuICAgICAgICB0aGlzLnJlbW92ZUNhbGxiYWNrKG5hbWVzLCBjYWxsYmFjaywgY29udGV4dCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnJlbW92ZUFsbENhbGxiYWNrcyhuYW1lcyk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInJlbW92ZUNhbGxiYWNrXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbW92ZUNhbGxiYWNrKG5hbWVzLCBjYWxsYmFjaywgY29udGV4dCkge1xuICAgICAgZm9yICh2YXIgbmFtZSBpbiBuYW1lcykge1xuICAgICAgICBmb3IgKHZhciBrZXkgaW4gdGhpcy5fY2FsbGJhY2tzW25hbWVdKSB7XG4gICAgICAgICAgaWYgKHRoaXMuX2NhbGxiYWNrc1tuYW1lXVtrZXldLmZuID09IGNhbGxiYWNrIHx8IHRoaXMuX2NhbGxiYWNrc1tuYW1lXVtrZXldLmNvbnRleHQgPT0gY29udGV4dCkge1xuICAgICAgICAgICAgZGVsZXRlIHRoaXMuX2NhbGxiYWNrc1tuYW1lXVtrZXldO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLl9jYWxsYmFja3NbbmFtZV0ubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgZGVsZXRlIHRoaXMuX2NhbGxiYWNrc1tuYW1lXTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJyZW1vdmVBbGxDYWxsYmFja3NcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVtb3ZlQWxsQ2FsbGJhY2tzKG5hbWVzKSB7XG4gICAgICBmb3IgKHZhciBuYW1lIGluIG5hbWVzKSB7XG4gICAgICAgIGRlbGV0ZSB0aGlzLl9jYWxsYmFja3NbbmFtZV07XG4gICAgICB9XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIENhbGxiYWNrUmVnaXN0cnk7XG59KCk7XG5cbmZ1bmN0aW9uIHByZWZpeChuYW1lKSB7XG4gIHJldHVybiBcIl9cIiArIG5hbWU7XG59XG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vc3JjL2V2ZW50cy9kaXNwYXRjaGVyLmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vc3JjL2V2ZW50cy9kaXNwYXRjaGVyLmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIGV4cG9ydHMgcHJvdmlkZWQ6IERpc3BhdGNoZXIgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIF9fd2VicGFja19leHBvcnRzX18sIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIoX193ZWJwYWNrX2V4cG9ydHNfXyk7XG4vKiBoYXJtb255IGV4cG9ydCAoYmluZGluZykgKi8gX193ZWJwYWNrX3JlcXVpcmVfXy5kKF9fd2VicGFja19leHBvcnRzX18sIFwiRGlzcGF0Y2hlclwiLCBmdW5jdGlvbigpIHsgcmV0dXJuIERpc3BhdGNoZXI7IH0pO1xuLyogaGFybW9ueSBpbXBvcnQgKi8gdmFyIF9jYWxsYmFja19yZWdpc3RyeV9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9jYWxsYmFja19yZWdpc3RyeSAqLyBcIi4vc3JjL2V2ZW50cy9jYWxsYmFja19yZWdpc3RyeS5qc1wiKTtcbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH1cblxuXG52YXIgRGlzcGF0Y2hlciA9XG4vKiNfX1BVUkVfXyovXG5mdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIERpc3BhdGNoZXIoKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIERpc3BhdGNoZXIpO1xuXG4gICAgdGhpcy5jYWxsYmFja3MgPSBuZXcgX2NhbGxiYWNrX3JlZ2lzdHJ5X19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX19bXCJDYWxsYmFja1JlZ2lzdHJ5XCJdKCk7XG4gICAgdGhpcy5nbG9iYWxfY2FsbGJhY2tzID0gW107XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoRGlzcGF0Y2hlciwgW3tcbiAgICBrZXk6IFwiYmluZFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBiaW5kKGV2ZW50TmFtZSwgY2FsbGJhY2ssIGNvbnRleHQpIHtcbiAgICAgIHRoaXMuY2FsbGJhY2tzLmFkZChldmVudE5hbWUsIGNhbGxiYWNrLCBjb250ZXh0KTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJiaW5kX2dsb2JhbFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBiaW5kX2dsb2JhbChjYWxsYmFjaykge1xuICAgICAgdGhpcy5nbG9iYWxfY2FsbGJhY2tzLnB1c2goY2FsbGJhY2spO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInVuYmluZFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiB1bmJpbmQoZXZlbnROYW1lLCBjYWxsYmFjaywgY29udGV4dCkge1xuICAgICAgdGhpcy5jYWxsYmFja3MucmVtb3ZlKGV2ZW50TmFtZSwgY2FsbGJhY2ssIGNvbnRleHQpO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInVuYmluZF9nbG9iYWxcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gdW5iaW5kX2dsb2JhbChjYWxsYmFjaykge1xuICAgICAgaWYgKCFjYWxsYmFjaykge1xuICAgICAgICB0aGlzLmdsb2JhbF9jYWxsYmFja3MgPSBbXTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICB9XG5cbiAgICAgIGZvciAodmFyIGkgaW4gdGhpcy5nbG9iYWxfY2FsbGJhY2tzKSB7XG4gICAgICAgIGlmIChjYWxsYmFjayA9PSB0aGlzLmdsb2JhbF9jYWxsYmFja3NbaV0pIHtcbiAgICAgICAgICBkZWxldGUgdGhpcy5nbG9iYWxfY2FsbGJhY2tzW2ldO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJ1bmJpbmRfYWxsXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHVuYmluZF9hbGwoKSB7XG4gICAgICB0aGlzLnVuYmluZCgpO1xuICAgICAgdGhpcy51bmJpbmRfZ2xvYmFsKCk7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZW1pdFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBlbWl0KGV2ZW50TmFtZSwgZGF0YSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmdsb2JhbF9jYWxsYmFja3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdGhpcy5nbG9iYWxfY2FsbGJhY2tzW2ldKGV2ZW50TmFtZSwgZGF0YSk7XG4gICAgICB9XG5cbiAgICAgIHZhciBjYWxsYmFja3MgPSB0aGlzLmNhbGxiYWNrcy5nZXQoZXZlbnROYW1lKTtcblxuICAgICAgaWYgKGNhbGxiYWNrcyAmJiBjYWxsYmFja3MubGVuZ3RoID4gMCkge1xuICAgICAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgY2FsbGJhY2tzLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgIGNhbGxiYWNrc1tfaV0uZm4uY2FsbChjYWxsYmFja3NbX2ldLmNvbnRleHQsIGRhdGEpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBEaXNwYXRjaGVyO1xufSgpO1xuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL3NyYy9wdXNoZXIuanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vc3JjL3B1c2hlci5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgZXhwb3J0cyBwcm92aWRlZDogUHVzaGVyICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBfX3dlYnBhY2tfZXhwb3J0c19fLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yKF9fd2VicGFja19leHBvcnRzX18pO1xuLyogaGFybW9ueSBleHBvcnQgKGJpbmRpbmcpICovIF9fd2VicGFja19yZXF1aXJlX18uZChfX3dlYnBhY2tfZXhwb3J0c19fLCBcIlB1c2hlclwiLCBmdW5jdGlvbigpIHsgcmV0dXJuIFB1c2hlcjsgfSk7XG4vKiBoYXJtb255IGltcG9ydCAqLyB2YXIgX2Nvbm5lY3Rpb25fc29ja2V0X19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL2Nvbm5lY3Rpb24vc29ja2V0ICovIFwiLi9zcmMvY29ubmVjdGlvbi9zb2NrZXQuanNcIik7XG4vKiBoYXJtb255IGltcG9ydCAqLyB2YXIgX2V2ZW50c19kaXNwYXRjaGVyX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8xX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL2V2ZW50cy9kaXNwYXRjaGVyICovIFwiLi9zcmMvZXZlbnRzL2Rpc3BhdGNoZXIuanNcIik7XG4vKiBoYXJtb255IGltcG9ydCAqLyB2YXIgX2NoYW5uZWxzX21hbm5hZ2VyX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8yX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL2NoYW5uZWxzL21hbm5hZ2VyICovIFwiLi9zcmMvY2hhbm5lbHMvbWFubmFnZXIuanNcIik7XG4vKiBoYXJtb255IGltcG9ydCAqLyB2YXIgYXhpb3NfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIGF4aW9zICovIFwiLi9ub2RlX21vZHVsZXMvYXhpb3MvaW5kZXguanNcIik7XG4vKiBoYXJtb255IGltcG9ydCAqLyB2YXIgYXhpb3NfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzNfX19kZWZhdWx0ID0gLyojX19QVVJFX18qL19fd2VicGFja19yZXF1aXJlX18ubihheGlvc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfM19fKTtcbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH1cblxuXG5cblxuXG52YXIgUHVzaGVyID1cbi8qI19fUFVSRV9fKi9cbmZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gUHVzaGVyKGFwcF9rZXksIG9wdGlvbnMpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgUHVzaGVyKTtcblxuICAgIHRoaXMuY2hlY2tBcHBLZXkoYXBwX2tleSk7XG4gICAgdGhpcy5rZXkgPSBhcHBfa2V5O1xuICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gICAgdGhpcy5kaXNwYXRjaGVyID0gbmV3IF9ldmVudHNfZGlzcGF0Y2hlcl9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMV9fW1wiRGlzcGF0Y2hlclwiXSgpO1xuICAgIHRoaXMuY2hhbm5lbHMgPSBuZXcgX2NoYW5uZWxzX21hbm5hZ2VyX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8yX19bXCJNYW5uYWdlclwiXSgpO1xuICAgIHRoaXMuY29ubmVjdCgpO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKFB1c2hlciwgW3tcbiAgICBrZXk6IFwiY29ubmVjdFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb25uZWN0KCkge1xuICAgICAgdGhpcy5zb2NrZXQgPSBuZXcgX2Nvbm5lY3Rpb25fc29ja2V0X19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX19bXCJTb2NrZXRcIl0odGhpcywgdGhpcy5vcHRpb25zLmhvc3QpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJzdWJzY3JpYmVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gc3Vic2NyaWJlKGNoYW5uZWxfbmFtZSkge1xuICAgICAgcmV0dXJuIHRoaXMuY2hhbm5lbHMuYWRkKGNoYW5uZWxfbmFtZSwgdGhpcyk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInVuc3Vic2NyaWJlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHVuc3Vic2NyaWJlKGNoYW5uZWxfbmFtZSkge1xuICAgICAgdGhpcy5jaGFubmVscy5yZW1vdmUoY2hhbm5lbF9uYW1lKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZ2V0U29ja2V0SWRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0U29ja2V0SWQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5zb2NrZXQuc29ja2V0LnNvY2tldF9pZDtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwic2VuZFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzZW5kKGpzb24pIHtcbiAgICAgIHRoaXMuc29ja2V0LnNlbmQoanNvbik7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImNoZWNrQXBwS2V5XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNoZWNrQXBwS2V5KGtleSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImF1dGhcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gYXV0aChuYW1lLCBjYWxsYmFjaykge1xuICAgICAgdmFyIG1ldGhvZCA9IHRoaXMub3B0aW9ucy5hdXRoLm1ldGhvZCB8fCAncG9zdCc7XG4gICAgICB2YXIgZGF0YSA9IHt9O1xuICAgICAgdmFyIHBhcmFtcyA9IHt9O1xuXG4gICAgICBpZiAobWV0aG9kID09ICdwb3N0Jykge1xuICAgICAgICBkYXRhID0gT2JqZWN0LmFzc2lnbih7XG4gICAgICAgICAgY2hhbm5lbF9uYW1lOiBuYW1lLFxuICAgICAgICAgIHNvY2tldF9pZDogdGhpcy5nZXRTb2NrZXRJZCgpXG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcGFyYW1zID0gT2JqZWN0LmFzc2lnbih7XG4gICAgICAgICAgY2hhbm5lbF9uYW1lOiBuYW1lLFxuICAgICAgICAgIHNvY2tldF9pZDogdGhpcy5nZXRTb2NrZXRJZCgpXG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBheGlvc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfM19fX2RlZmF1bHQoKSh7XG4gICAgICAgIHVybDogdGhpcy5vcHRpb25zLmF1dGgudXJsLFxuICAgICAgICBtZXRob2Q6IG1ldGhvZCxcbiAgICAgICAgaGVhZGVyczogdGhpcy5vcHRpb25zLmF1dGguaGVhZGVycyB8fCB7fSxcbiAgICAgICAgcGFyYW1zOiBwYXJhbXMsXG4gICAgICAgIGRhdGE6IGRhdGFcbiAgICAgIH0pLnRoZW4oZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgY2FsbGJhY2soZSk7XG4gICAgICB9KS5jYXRjaChmdW5jdGlvbiAoZSkge1xuICAgICAgICBjb25zb2xlLmVycm9yKCfnp4HmnInpopHpgZPmnYPpmZDkuI3otrMhJyk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gUHVzaGVyO1xufSgpO1xud2luZG93LlB1c2hlciA9IFB1c2hlcjtcblxuLyoqKi8gfSlcblxuLyoqKioqKi8gfSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbmRsWW5CaFkyczZMeTh2ZDJWaWNHRmpheTlpYjI5MGMzUnlZWEFpTENKM1pXSndZV05yT2k4dkx5NHZibTlrWlY5dGIyUjFiR1Z6TDJGNGFXOXpMMmx1WkdWNExtcHpJaXdpZDJWaWNHRmphem92THk4dUwyNXZaR1ZmYlc5a2RXeGxjeTloZUdsdmN5OXNhV0l2WVdSaGNIUmxjbk12ZUdoeUxtcHpJaXdpZDJWaWNHRmphem92THk4dUwyNXZaR1ZmYlc5a2RXeGxjeTloZUdsdmN5OXNhV0l2WVhocGIzTXVhbk1pTENKM1pXSndZV05yT2k4dkx5NHZibTlrWlY5dGIyUjFiR1Z6TDJGNGFXOXpMMnhwWWk5allXNWpaV3d2UTJGdVkyVnNMbXB6SWl3aWQyVmljR0ZqYXpvdkx5OHVMMjV2WkdWZmJXOWtkV3hsY3k5aGVHbHZjeTlzYVdJdlkyRnVZMlZzTDBOaGJtTmxiRlJ2YTJWdUxtcHpJaXdpZDJWaWNHRmphem92THk4dUwyNXZaR1ZmYlc5a2RXeGxjeTloZUdsdmN5OXNhV0l2WTJGdVkyVnNMMmx6UTJGdVkyVnNMbXB6SWl3aWQyVmljR0ZqYXpvdkx5OHVMMjV2WkdWZmJXOWtkV3hsY3k5aGVHbHZjeTlzYVdJdlkyOXlaUzlCZUdsdmN5NXFjeUlzSW5kbFluQmhZMnM2THk4dkxpOXViMlJsWDIxdlpIVnNaWE12WVhocGIzTXZiR2xpTDJOdmNtVXZTVzUwWlhKalpYQjBiM0pOWVc1aFoyVnlMbXB6SWl3aWQyVmljR0ZqYXpvdkx5OHVMMjV2WkdWZmJXOWtkV3hsY3k5aGVHbHZjeTlzYVdJdlkyOXlaUzlqY21WaGRHVkZjbkp2Y2k1cWN5SXNJbmRsWW5CaFkyczZMeTh2TGk5dWIyUmxYMjF2WkhWc1pYTXZZWGhwYjNNdmJHbGlMMk52Y21VdlpHbHpjR0YwWTJoU1pYRjFaWE4wTG1weklpd2lkMlZpY0dGamF6b3ZMeTh1TDI1dlpHVmZiVzlrZFd4bGN5OWhlR2x2Y3k5c2FXSXZZMjl5WlM5bGJtaGhibU5sUlhKeWIzSXVhbk1pTENKM1pXSndZV05yT2k4dkx5NHZibTlrWlY5dGIyUjFiR1Z6TDJGNGFXOXpMMnhwWWk5amIzSmxMM05sZEhSc1pTNXFjeUlzSW5kbFluQmhZMnM2THk4dkxpOXViMlJsWDIxdlpIVnNaWE12WVhocGIzTXZiR2xpTDJOdmNtVXZkSEpoYm5ObWIzSnRSR0YwWVM1cWN5SXNJbmRsWW5CaFkyczZMeTh2TGk5dWIyUmxYMjF2WkhWc1pYTXZZWGhwYjNNdmJHbGlMMlJsWm1GMWJIUnpMbXB6SWl3aWQyVmljR0ZqYXpvdkx5OHVMMjV2WkdWZmJXOWtkV3hsY3k5aGVHbHZjeTlzYVdJdmFHVnNjR1Z5Y3k5aWFXNWtMbXB6SWl3aWQyVmljR0ZqYXpvdkx5OHVMMjV2WkdWZmJXOWtkV3hsY3k5aGVHbHZjeTlzYVdJdmFHVnNjR1Z5Y3k5aWRHOWhMbXB6SWl3aWQyVmljR0ZqYXpvdkx5OHVMMjV2WkdWZmJXOWtkV3hsY3k5aGVHbHZjeTlzYVdJdmFHVnNjR1Z5Y3k5aWRXbHNaRlZTVEM1cWN5SXNJbmRsWW5CaFkyczZMeTh2TGk5dWIyUmxYMjF2WkhWc1pYTXZZWGhwYjNNdmJHbGlMMmhsYkhCbGNuTXZZMjl0WW1sdVpWVlNUSE11YW5NaUxDSjNaV0p3WVdOck9pOHZMeTR2Ym05a1pWOXRiMlIxYkdWekwyRjRhVzl6TDJ4cFlpOW9aV3h3WlhKekwyTnZiMnRwWlhNdWFuTWlMQ0ozWldKd1lXTnJPaTh2THk0dmJtOWtaVjl0YjJSMWJHVnpMMkY0YVc5ekwyeHBZaTlvWld4d1pYSnpMMmx6UVdKemIyeDFkR1ZWVWt3dWFuTWlMQ0ozWldKd1lXTnJPaTh2THk0dmJtOWtaVjl0YjJSMWJHVnpMMkY0YVc5ekwyeHBZaTlvWld4d1pYSnpMMmx6VlZKTVUyRnRaVTl5YVdkcGJpNXFjeUlzSW5kbFluQmhZMnM2THk4dkxpOXViMlJsWDIxdlpIVnNaWE12WVhocGIzTXZiR2xpTDJobGJIQmxjbk12Ym05eWJXRnNhWHBsU0dWaFpHVnlUbUZ0WlM1cWN5SXNJbmRsWW5CaFkyczZMeTh2TGk5dWIyUmxYMjF2WkhWc1pYTXZZWGhwYjNNdmJHbGlMMmhsYkhCbGNuTXZjR0Z5YzJWSVpXRmtaWEp6TG1weklpd2lkMlZpY0dGamF6b3ZMeTh1TDI1dlpHVmZiVzlrZFd4bGN5OWhlR2x2Y3k5c2FXSXZhR1ZzY0dWeWN5OXpjSEpsWVdRdWFuTWlMQ0ozWldKd1lXTnJPaTh2THk0dmJtOWtaVjl0YjJSMWJHVnpMMkY0YVc5ekwyeHBZaTkxZEdsc2N5NXFjeUlzSW5kbFluQmhZMnM2THk4dkxpOXViMlJsWDIxdlpIVnNaWE12YVhNdFluVm1abVZ5TDJsdVpHVjRMbXB6SWl3aWQyVmljR0ZqYXpvdkx5OHVMMjV2WkdWZmJXOWtkV3hsY3k5d2NtOWpaWE56TDJKeWIzZHpaWEl1YW5NaUxDSjNaV0p3WVdOck9pOHZMeTR2YzNKakwyTm9ZVzV1Wld4ekwyTm9ZVzV1Wld3dWFuTWlMQ0ozWldKd1lXTnJPaTh2THk0dmMzSmpMMk5vWVc1dVpXeHpMMjFoYm01aFoyVnlMbXB6SWl3aWQyVmljR0ZqYXpvdkx5OHVMM055WXk5amFHRnVibVZzY3k5d2NtVnpaVzVqWlY5amFHRnVibVZzTG1weklpd2lkMlZpY0dGamF6b3ZMeTh1TDNOeVl5OWphR0Z1Ym1Wc2N5OXdjbWwyWVhSbFgyTm9ZVzV1Wld3dWFuTWlMQ0ozWldKd1lXTnJPaTh2THk0dmMzSmpMMk52Ym01bFkzUnBiMjR2YzI5amEyVjBMbXB6SWl3aWQyVmljR0ZqYXpvdkx5OHVMM055WXk5bGRtVnVkSE12WTJGc2JHSmhZMnRmY21WbmFYTjBjbmt1YW5NaUxDSjNaV0p3WVdOck9pOHZMeTR2YzNKakwyVjJaVzUwY3k5a2FYTndZWFJqYUdWeUxtcHpJaXdpZDJWaWNHRmphem92THk4dUwzTnlZeTl3ZFhOb1pYSXVhbk1pWFN3aWJtRnRaWE1pT2xzaVEyaGhibTVsYkNJc0ltNWhiV1VpTENKd2RYTm9aWElpTENKemIyTnJaWFFpTENKemRHRjBaU0lzSW5OMVluTmpjbWxpWlNJc0luTmxibVFpTENKbGRtVnVkQ0lzSW1SaGRHRWlMQ0pqYUdGdWJtVnNJaXdpUkdsemNHRjBZMmhsY2lJc0lrMWhibTVoWjJWeUlpd2lZMmhoYm01bGJITWlMQ0pqY21WaGRHVkRhR0Z1Ym1Wc0lpd2lUMkpxWldOMElpd2lhMlY1Y3lJc0lta2lMQ0pwYm1SbGVFOW1JaXdpVUhKcGRtRjBaVU5vWVc1dVpXd2lMQ0pRY21WelpXNWpaVU5vWVc1dVpXd2lMQ0poZFhSb0lpd2laU0lzSW1Ob1lXNXVaV3hmWkdGMFlTSXNJbE52WTJ0bGRDSXNJbWh2YzNRaUxDSlhaV0pUYjJOclpYUWlMQ0pyWlhraUxDSmlhVzVrVEdsemRHVnVaWEp6SWl3aWIyNXZjR1Z1SWl3aWIyNVBjR1Z1SWl3aWIyNWxjbkp2Y2lJc0ltVnljbTl5SWl3aWIyNUZjbkp2Y2lJc0ltOXVZMnh2YzJVaUxDSmpiRzl6WlVWMlpXNTBJaXdpYjI1RGJHOXpaU0lzSW05dWJXVnpjMkZuWlNJc0ltMWxjM05oWjJVaUxDSnZiazFsYzNOaFoyVWlMQ0ppYVc1a0lpd2ljMjlqYTJWMFgybGtJaXdpWTI5dWMyOXNaU0lzSW5KbFlXUjVVM1JoZEdVaUxDSkRURTlUUlVRaUxDSjBlWEJsSWl3aVpVUmhkR0VpTENKS1UwOU9JaXdpY0dGeWMyVWlMQ0oxYm1SbFptbHVaV1FpTENKbWFXNWtJaXdpWlcxcGRDSXNJbXB6YjI0aUxDSnpkSEpwYm1kcFpua2lMQ0pEWVd4c1ltRmphMUpsWjJsemRISjVJaXdpWDJOaGJHeGlZV05yY3lJc0luQnlaV1pwZUNJc0ltTmhiR3hpWVdOcklpd2lZMjl1ZEdWNGRDSXNJbkJ5WldacGVHVmtSWFpsYm5ST1lXMWxJaXdpY0hWemFDSXNJbVp1SWl3aWJtRnRaWE1pTENKeVpXMXZkbVZEWVd4c1ltRmpheUlzSW5KbGJXOTJaVUZzYkVOaGJHeGlZV05yY3lJc0lteGxibWQwYUNJc0ltTmhiR3hpWVdOcmN5SXNJbWRzYjJKaGJGOWpZV3hzWW1GamEzTWlMQ0psZG1WdWRFNWhiV1VpTENKaFpHUWlMQ0p5WlcxdmRtVWlMQ0oxYm1KcGJtUWlMQ0oxYm1KcGJtUmZaMnh2WW1Gc0lpd2laMlYwSWl3aVkyRnNiQ0lzSWxCMWMyaGxjaUlzSW1Gd2NGOXJaWGtpTENKdmNIUnBiMjV6SWl3aVkyaGxZMnRCY0hCTFpYa2lMQ0prYVhOd1lYUmphR1Z5SWl3aVkyOXVibVZqZENJc0ltTm9ZVzV1Wld4ZmJtRnRaU0lzSW0xbGRHaHZaQ0lzSW5CaGNtRnRjeUlzSW1GemMybG5iaUlzSW1kbGRGTnZZMnRsZEVsa0lpd2lZWGhwYjNNaUxDSjFjbXdpTENKb1pXRmtaWEp6SWl3aWRHaGxiaUlzSW1OaGRHTm9JaXdpZDJsdVpHOTNJbDBzSW0xaGNIQnBibWR6SWpvaU8wRkJRVUU3UVVGRFFUczdRVUZGUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdPenRCUVVkQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeHJSRUZCTUVNc1owTkJRV2RETzBGQlF6RkZPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRXNaMFZCUVhkRUxHdENRVUZyUWp0QlFVTXhSVHRCUVVOQkxIbEVRVUZwUkN4alFVRmpPMEZCUXk5RU96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4cFJFRkJlVU1zYVVOQlFXbERPMEZCUXpGRkxIZElRVUZuU0N4dFFrRkJiVUlzUlVGQlJUdEJRVU55U1R0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEcxRFFVRXlRaXd3UWtGQk1FSXNSVUZCUlR0QlFVTjJSQ3g1UTBGQmFVTXNaVUZCWlR0QlFVTm9SRHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVN3NFJFRkJjMFFzSzBSQlFTdEVPenRCUVVWeVNEdEJRVU5CT3pzN1FVRkhRVHRCUVVOQk96czdPenM3T3pzN096czdRVU5zUmtFc2FVSkJRV2xDTEcxQ1FVRlBMRU5CUVVNc2MwUkJRV0VzUlRzN096czdPenM3T3pzN08wRkRRWHBDT3p0QlFVVmlMRmxCUVZrc2JVSkJRVThzUTBGQlF5eHhSRUZCV1R0QlFVTm9ReXhoUVVGaExHMUNRVUZQTEVOQlFVTXNhVVZCUVd0Q08wRkJRM1pETEdWQlFXVXNiVUpCUVU4c1EwRkJReXd5UlVGQmRVSTdRVUZET1VNc2JVSkJRVzFDTEcxQ1FVRlBMRU5CUVVNc2JVWkJRVEpDTzBGQlEzUkVMSE5DUVVGelFpeHRRa0ZCVHl4RFFVRkRMSGxHUVVFNFFqdEJRVU0xUkN4clFrRkJhMElzYlVKQlFVOHNRMEZCUXl4NVJVRkJjVUk3UVVGREwwTXNlVVpCUVhsR0xHMUNRVUZQTEVOQlFVTXNiVVZCUVcxQ096dEJRVVZ3U0R0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTERSRFFVRTBRenRCUVVNMVF6czdRVUZGUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRXNVVUZCVVN4aFFVRnZRanRCUVVNMVFqdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCT3p0QlFVVkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEc5Q1FVRnZRaXh0UWtGQlR5eERRVUZETEhsRlFVRnpRanM3UVVGRmJFUTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRXNVMEZCVXp0QlFVTlVPMEZCUTBFN1FVRkRRVHRCUVVOQkxFOUJRVTg3UVVGRFVEczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJMRTlCUVU4N1FVRkRVRHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4UFFVRlBPMEZCUTFBN08wRkJSVUU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRU3hIUVVGSE8wRkJRMGc3T3pzN096czdPenM3T3pzN1FVTnVUR0U3TzBGQlJXSXNXVUZCV1N4dFFrRkJUeXhEUVVGRExHdEVRVUZUTzBGQlF6ZENMRmRCUVZjc2JVSkJRVThzUTBGQlF5eG5SVUZCWjBJN1FVRkRia01zV1VGQldTeHRRa0ZCVHl4RFFVRkRMRFJFUVVGak8wRkJRMnhETEdWQlFXVXNiVUpCUVU4c1EwRkJReXgzUkVGQldUczdRVUZGYmtNN1FVRkRRVHRCUVVOQk8wRkJRMEVzVjBGQlZ5eFBRVUZQTzBGQlEyeENMRmxCUVZrc1RVRkJUVHRCUVVOc1FqdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHM3UVVGRlFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRU3hsUVVGbExHMUNRVUZQTEVOQlFVTXNhMFZCUVdsQ08wRkJRM2hETEc5Q1FVRnZRaXh0UWtGQlR5eERRVUZETERSRlFVRnpRanRCUVVOc1JDeHBRa0ZCYVVJc2JVSkJRVThzUTBGQlF5eHpSVUZCYlVJN08wRkJSVFZETzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFc1pVRkJaU3h0UWtGQlR5eERRVUZETEc5RlFVRnJRanM3UVVGRmVrTTdPMEZCUlVFN1FVRkRRVHM3T3pzN096czdPenM3T3p0QlEyNUVZVHM3UVVGRllqdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJMRmRCUVZjc1VVRkJVVHRCUVVOdVFqdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdPMEZCUlVFN096czdPenM3T3pzN096czdRVU5zUW1FN08wRkJSV0lzWVVGQllTeHRRa0ZCVHl4RFFVRkRMREpFUVVGVk96dEJRVVV2UWp0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxGZEJRVmNzVTBGQlV6dEJRVU53UWp0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJMRWRCUVVjN08wRkJSVWc3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFTeEhRVUZITzBGQlEwZzdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFc1IwRkJSenRCUVVOSU8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN096czdPenM3T3pzN096czdRVU40UkdFN08wRkJSV0k3UVVGRFFUdEJRVU5CT3pzN096czdPenM3T3pzN08wRkRTbUU3TzBGQlJXSXNaVUZCWlN4dFFrRkJUeXhEUVVGRExESkVRVUZsTzBGQlEzUkRMRmxCUVZrc2JVSkJRVThzUTBGQlF5eHhSRUZCV1R0QlFVTm9ReXg1UWtGQmVVSXNiVUpCUVU4c1EwRkJReXhwUmtGQmMwSTdRVUZEZGtRc2MwSkJRWE5DTEcxQ1FVRlBMRU5CUVVNc01rVkJRVzFDT3p0QlFVVnFSRHRCUVVOQk8wRkJRMEU3UVVGRFFTeFhRVUZYTEU5QlFVODdRVUZEYkVJN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeFhRVUZYTEU5QlFVODdRVUZEYkVJN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4TFFVRkxPMEZCUTB3N08wRkJSVUVzYTBOQlFXdERMR05CUVdNN1FVRkRhRVE3TzBGQlJVRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFTeEhRVUZIT3p0QlFVVklPMEZCUTBFN1FVRkRRU3hIUVVGSE96dEJRVVZJTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFc1owUkJRV2RFTzBGQlEyaEVPMEZCUTBFN1FVRkRRU3hMUVVGTE8wRkJRMHc3UVVGRFFTeERRVUZET3p0QlFVVkVPMEZCUTBFN1FVRkRRVHRCUVVOQkxHZEVRVUZuUkR0QlFVTm9SRHRCUVVOQk8wRkJRMEU3UVVGRFFTeExRVUZMTzBGQlEwdzdRVUZEUVN4RFFVRkRPenRCUVVWRU96czdPenM3T3pzN096czdPMEZET1VWaE96dEJRVVZpTEZsQlFWa3NiVUpCUVU4c1EwRkJReXh4UkVGQldUczdRVUZGYUVNN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJMRmRCUVZjc1UwRkJVenRCUVVOd1FpeFhRVUZYTEZOQlFWTTdRVUZEY0VJN1FVRkRRU3haUVVGWkxFOUJRVTg3UVVGRGJrSTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxFZEJRVWM3UVVGRFNEdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxGZEJRVmNzVDBGQlR6dEJRVU5zUWp0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEVzVjBGQlZ5eFRRVUZUTzBGQlEzQkNPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEVkQlFVYzdRVUZEU0RzN1FVRkZRVHM3T3pzN096czdPenM3T3p0QlEyNUVZVHM3UVVGRllpeHRRa0ZCYlVJc2JVSkJRVThzUTBGQlF5eHhSVUZCWjBJN08wRkJSVE5ETzBGQlEwRTdRVUZEUVR0QlFVTkJMRmRCUVZjc1QwRkJUenRCUVVOc1FpeFhRVUZYTEU5QlFVODdRVUZEYkVJc1YwRkJWeXhQUVVGUE8wRkJRMnhDTEZkQlFWY3NUMEZCVHp0QlFVTnNRaXhYUVVGWExFOUJRVTg3UVVGRGJFSXNZVUZCWVN4TlFVRk5PMEZCUTI1Q08wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPenM3T3pzN096czdPenM3UVVOcVFtRTdPMEZCUldJc1dVRkJXU3h0UWtGQlR5eERRVUZETEhGRVFVRlpPMEZCUTJoRExHOUNRVUZ2UWl4dFFrRkJUeXhEUVVGRExIVkZRVUZwUWp0QlFVTTNReXhsUVVGbExHMUNRVUZQTEVOQlFVTXNkVVZCUVc5Q08wRkJRek5ETEdWQlFXVXNiVUpCUVU4c1EwRkJReXg1UkVGQllUdEJRVU53UXl4dlFrRkJiMElzYlVKQlFVOHNRMEZCUXl4eFJrRkJORUk3UVVGRGVFUXNhMEpCUVd0Q0xHMUNRVUZQTEVOQlFVTXNhVVpCUVRCQ096dEJRVVZ3UkR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxGZEJRVmNzVDBGQlR6dEJRVU5zUWl4aFFVRmhMRkZCUVZFN1FVRkRja0k3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRU3dyUWtGQkswSTdRVUZETDBJc2RVTkJRWFZETzBGQlEzWkRPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk96dEJRVVZCTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFc1IwRkJSenRCUVVOSU8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFc1IwRkJSenRCUVVOSU96czdPenM3T3pzN096czdPMEZEY2taaE96dEJRVVZpTzBGQlEwRTdRVUZEUVR0QlFVTkJMRmRCUVZjc1RVRkJUVHRCUVVOcVFpeFhRVUZYTEU5QlFVODdRVUZEYkVJc1YwRkJWeXhQUVVGUE8wRkJRMnhDTEZkQlFWY3NUMEZCVHp0QlFVTnNRaXhYUVVGWExFOUJRVTg3UVVGRGJFSXNZVUZCWVN4TlFVRk5PMEZCUTI1Q08wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96czdPenM3T3pzN096czdPMEZEY0VKaE96dEJRVVZpTEd0Q1FVRnJRaXh0UWtGQlR5eERRVUZETEcxRlFVRmxPenRCUVVWNlF6dEJRVU5CTzBGQlEwRTdRVUZEUVN4WFFVRlhMRk5CUVZNN1FVRkRjRUlzVjBGQlZ5eFRRVUZUTzBGQlEzQkNMRmRCUVZjc1QwRkJUenRCUVVOc1FqdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3hIUVVGSE8wRkJRMGc3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96czdPenM3T3pzN096czdPMEZEZWtKaE96dEJRVVZpTEZsQlFWa3NiVUpCUVU4c1EwRkJReXh4UkVGQldUczdRVUZGYUVNN1FVRkRRVHRCUVVOQk8wRkJRMEVzVjBGQlZ5eGpRVUZqTzBGQlEzcENMRmRCUVZjc1RVRkJUVHRCUVVOcVFpeFhRVUZYTEdWQlFXVTdRVUZETVVJc1lVRkJZU3hGUVVGRk8wRkJRMlk3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJMRWRCUVVjN08wRkJSVWc3UVVGRFFUczdPenM3T3pzN096czdPenRCUTI1Q1FTd3JRMEZCWVRzN1FVRkZZaXhaUVVGWkxHMUNRVUZQTEVOQlFVTXNhMFJCUVZNN1FVRkROMElzTUVKQlFUQkNMRzFDUVVGUExFTkJRVU1zT0VaQlFTdENPenRCUVVWcVJUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxHTkJRV01zYlVKQlFVOHNRMEZCUXl4blJVRkJaMEk3UVVGRGRFTXNSMEZCUnp0QlFVTklPMEZCUTBFc1kwRkJZeXh0UWtGQlR5eERRVUZETEdsRlFVRnBRanRCUVVOMlF6dEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3gzUlVGQmQwVTdRVUZEZUVVN1FVRkRRVHRCUVVOQk8wRkJRMEVzZFVSQlFYVkVPMEZCUTNaRU8wRkJRMEU3UVVGRFFUdEJRVU5CTEVkQlFVYzdPMEZCUlVnN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEU5QlFVOHNXVUZCV1R0QlFVTnVRanRCUVVOQk8wRkJRMEVzUjBGQlJ6czdRVUZGU0R0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdPMEZCUlVFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFc1EwRkJRenM3UVVGRlJEdEJRVU5CTzBGQlEwRXNRMEZCUXpzN1FVRkZSRHM3T3pzN096czdPenM3T3pzN1FVTXZSbUU3TzBGQlJXSTdRVUZEUVR0QlFVTkJPMEZCUTBFc2JVSkJRVzFDTEdsQ1FVRnBRanRCUVVOd1F6dEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPenM3T3pzN096czdPenM3TzBGRFZtRTdPMEZCUldJN08wRkJSVUU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHM3T3pzN096czdPenM3T3p0QlEyNURZVHM3UVVGRllpeFpRVUZaTEcxQ1FVRlBMRU5CUVVNc2NVUkJRVms3TzBGQlJXaERPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEZkQlFWY3NUMEZCVHp0QlFVTnNRaXhYUVVGWExFOUJRVTg3UVVGRGJFSXNZVUZCWVN4UFFVRlBPMEZCUTNCQ08wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeEhRVUZITzBGQlEwZzdRVUZEUVN4SFFVRkhPMEZCUTBnN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQkxFOUJRVTg3UVVGRFVEdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxGTkJRVk03UVVGRFZEdEJRVU5CTzBGQlEwRTdRVUZEUVN4UFFVRlBPMEZCUTFBc1MwRkJTenM3UVVGRlREdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CT3pzN096czdPenM3T3pzN08wRkRha1ZoT3p0QlFVVmlPMEZCUTBFN1FVRkRRVHRCUVVOQkxGZEJRVmNzVDBGQlR6dEJRVU5zUWl4WFFVRlhMRTlCUVU4N1FVRkRiRUlzWVVGQllTeFBRVUZQTzBGQlEzQkNPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdPenM3T3pzN096czdPenRCUTJKaE96dEJRVVZpTEZsQlFWa3NiVUpCUVU4c1EwRkJReXh4UkVGQldUczdRVUZGYUVNN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk96dEJRVVZCTEhkRFFVRjNRenRCUVVONFF5eFBRVUZQT3p0QlFVVlFPMEZCUTBFc01FUkJRVEJFTEhkQ1FVRjNRanRCUVVOc1JqdEJRVU5CTEU5QlFVODdPMEZCUlZBN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeEhRVUZIT3p0QlFVVklPMEZCUTBFN1FVRkRRVHRCUVVOQkxHZERRVUZuUXp0QlFVTm9ReXcyUWtGQk5rSXNZVUZCWVN4RlFVRkZPMEZCUXpWRE8wRkJRMEU3UVVGRFFTeEhRVUZITzBGQlEwZzdPenM3T3pzN096czdPenM3UVVOd1JHRTdPMEZCUldJN1FVRkRRVHRCUVVOQk8wRkJRMEVzVjBGQlZ5eFBRVUZQTzBGQlEyeENMR0ZCUVdFc1VVRkJVVHRCUVVOeVFqdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3T3pzN096czdPenM3T3p0QlEySmhPenRCUVVWaUxGbEJRVmtzYlVKQlFVOHNRMEZCUXl4eFJFRkJXVHM3UVVGRmFFTTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEVzWTBGQll5eFBRVUZQTzBGQlEzSkNMR2RDUVVGblFqdEJRVU5vUWp0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJMR05CUVdNc1QwRkJUenRCUVVOeVFpeG5Ra0ZCWjBJc1VVRkJVVHRCUVVONFFqdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3hIUVVGSE96dEJRVVZJTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3hIUVVGSE8wRkJRMGc3T3pzN096czdPenM3T3pzN1FVTnVSV0U3TzBGQlJXSXNXVUZCV1N4dFFrRkJUeXhEUVVGRExHMUVRVUZWT3p0QlFVVTVRanRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4SFFVRkhPMEZCUTBnN096czdPenM3T3pzN096czdRVU5ZWVRzN1FVRkZZaXhaUVVGWkxHMUNRVUZQTEVOQlFVTXNjVVJCUVZrN08wRkJSV2hETzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4WFFVRlhMRTlCUVU4N1FVRkRiRUlzWVVGQllTeFBRVUZQTzBGQlEzQkNPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVN4cFFrRkJhVUlzWlVGQlpUczdRVUZGYUVNN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEVzVDBGQlR6dEJRVU5RTzBGQlEwRTdRVUZEUVR0QlFVTkJMRWRCUVVjN08wRkJSVWc3UVVGRFFUczdPenM3T3pzN096czdPenRCUTNCRVlUczdRVUZGWWp0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEVzSzBKQlFTdENPMEZCUXk5Q08wRkJRMEU3UVVGRFFTeFhRVUZYTEZOQlFWTTdRVUZEY0VJc1lVRkJZVHRCUVVOaU8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN096czdPenM3T3pzN096dEJRekZDWVRzN1FVRkZZaXhYUVVGWExHMUNRVUZQTEVOQlFVTXNaMFZCUVdkQ08wRkJRMjVETEdWQlFXVXNiVUpCUVU4c1EwRkJReXh2UkVGQlZ6czdRVUZGYkVNN08wRkJSVUU3TzBGQlJVRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEVzVjBGQlZ5eFBRVUZQTzBGQlEyeENMR0ZCUVdFc1VVRkJVVHRCUVVOeVFqdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeFhRVUZYTEU5QlFVODdRVUZEYkVJc1lVRkJZU3hSUVVGUk8wRkJRM0pDTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEZkQlFWY3NUMEZCVHp0QlFVTnNRaXhoUVVGaExGRkJRVkU3UVVGRGNrSTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRXNWMEZCVnl4UFFVRlBPMEZCUTJ4Q0xHRkJRV0VzVVVGQlVUdEJRVU55UWp0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEVzUjBGQlJ6dEJRVU5JTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEZkQlFWY3NUMEZCVHp0QlFVTnNRaXhoUVVGaExGRkJRVkU3UVVGRGNrSTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRXNWMEZCVnl4UFFVRlBPMEZCUTJ4Q0xHRkJRV0VzVVVGQlVUdEJRVU55UWp0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4WFFVRlhMRTlCUVU4N1FVRkRiRUlzWVVGQllTeFJRVUZSTzBGQlEzSkNPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJMRmRCUVZjc1QwRkJUenRCUVVOc1FpeGhRVUZoTEZGQlFWRTdRVUZEY2tJN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFc1YwRkJWeXhQUVVGUE8wRkJRMnhDTEdGQlFXRXNVVUZCVVR0QlFVTnlRanRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3hYUVVGWExFOUJRVTg3UVVGRGJFSXNZVUZCWVN4UlFVRlJPMEZCUTNKQ08wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxGZEJRVmNzVDBGQlR6dEJRVU5zUWl4aFFVRmhMRkZCUVZFN1FVRkRja0k3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEVzVjBGQlZ5eFBRVUZQTzBGQlEyeENMR0ZCUVdFc1VVRkJVVHRCUVVOeVFqdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeFhRVUZYTEU5QlFVODdRVUZEYkVJc1lVRkJZU3hSUVVGUk8wRkJRM0pDTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEZkQlFWY3NUMEZCVHp0QlFVTnNRaXhoUVVGaExGRkJRVkU3UVVGRGNrSTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRXNWMEZCVnl4UFFVRlBPMEZCUTJ4Q0xHRkJRV0VzVDBGQlR6dEJRVU53UWp0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3hYUVVGWExHRkJRV0U3UVVGRGVFSXNWMEZCVnl4VFFVRlRPMEZCUTNCQ08wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRU3h0UTBGQmJVTXNUMEZCVHp0QlFVTXhRenRCUVVOQk8wRkJRMEVzUjBGQlJ6dEJRVU5JTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4MVFrRkJkVUlzVTBGQlV5eEhRVUZITEZOQlFWTTdRVUZETlVNc01rSkJRVEpDTzBGQlF6TkNPMEZCUTBFN1FVRkRRU3hYUVVGWExFOUJRVTg3UVVGRGJFSXNZVUZCWVN4UFFVRlBPMEZCUTNCQ08wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJMRXRCUVVzN1FVRkRURHRCUVVOQk8wRkJRMEU3TzBGQlJVRXNkVU5CUVhWRExFOUJRVTg3UVVGRE9VTTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRXNWMEZCVnl4UFFVRlBPMEZCUTJ4Q0xGZEJRVmNzVDBGQlR6dEJRVU5zUWl4WFFVRlhMRTlCUVU4N1FVRkRiRUlzV1VGQldTeFBRVUZQTzBGQlEyNUNPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeExRVUZMTzBGQlEwdzdRVUZEUVR0QlFVTkJMRWRCUVVjN1FVRkRTRHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPenM3T3pzN096czdPenM3UVVNNVUwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96czdPenM3T3pzN096czdRVU53UWtFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRXNVMEZCVXp0QlFVTlVPMEZCUTBFN1FVRkRRU3hMUVVGTE8wRkJRMHc3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJMRk5CUVZNN1FVRkRWRHRCUVVOQk8wRkJRMEVzUzBGQlN6dEJRVU5NTzBGQlEwRTdRVUZEUVN4RFFVRkRPMEZCUTBRN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeExRVUZMTzBGQlEwdzdRVUZEUVR0QlFVTkJPMEZCUTBFc1UwRkJVenRCUVVOVU8wRkJRMEU3UVVGRFFUdEJRVU5CT3pzN1FVRkhRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRXNTMEZCU3p0QlFVTk1PMEZCUTBFN1FVRkRRVHRCUVVOQkxGTkJRVk03UVVGRFZEdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPenM3TzBGQlNVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxFdEJRVXM3UVVGRFREdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEhWQ1FVRjFRaXh6UWtGQmMwSTdRVUZETjBNN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeHhRa0ZCY1VJN1FVRkRja0k3TzBGQlJVRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQkxIRkRRVUZ4UXpzN1FVRkZja003UVVGRFFUdEJRVU5CT3p0QlFVVkJMREpDUVVFeVFqdEJRVU16UWp0QlFVTkJPMEZCUTBFN1FVRkRRU3cwUWtGQk5FSXNWVUZCVlRzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenRCUTNaTWRFTTdRVUZGVHl4SlFVRk5RU3hQUVVGaU8wRkJRVUU3UVVGQlFUdEJRVUZCT3p0QlFVTkpMRzFDUVVGWlF5eEpRVUZhTEVWQlFXdENReXhOUVVGc1FpeEZRVUV3UWp0QlFVRkJPenRCUVVGQk96dEJRVU4wUWp0QlFVVkJMRlZCUVV0RUxFbEJRVXdzUjBGQldVRXNTVUZCV2p0QlFVTkJMRlZCUVV0RExFMUJRVXdzUjBGQlkwRXNUVUZCWkRzN1FVRkZRU3hSUVVGSkxFMUJRVXRCTEUxQlFVd3NRMEZCV1VNc1RVRkJXaXhEUVVGdFFrTXNTMEZCYmtJc1NVRkJORUlzUTBGQmFFTXNSVUZCYlVNN1FVRkRMMElzV1VGQlMwTXNVMEZCVER0QlFVTklPenRCUVZKeFFqdEJRVk42UWpzN1FVRldURHRCUVVGQk8wRkJRVUVzWjBOQldXZENPMEZCUTFJc1YwRkJTMGdzVFVGQlRDeERRVUZaU1N4SlFVRmFMRU5CUVdsQ08wRkJRMkpETEdGQlFVc3NSVUZCUlN4WFFVUk5PMEZCUldKRExGbEJRVWtzUlVGQlJUdEJRVU5HUXl4cFFrRkJUeXhGUVVGRkxFdEJRVXRTTzBGQlJGbzdRVUZHVHl4UFFVRnFRanRCUVUxSU8wRkJia0pNT3p0QlFVRkJPMEZCUVVFc1JVRkJOa0pUTERaRVFVRTNRaXhGT3pzN096czdPenM3T3pzN096czdPenM3T3pzN096dEJRMFpCTzBGQlEwRTdRVUZEUVR0QlFVVlBMRWxCUVUxRExGRkJRV0k3UVVGQlFUdEJRVUZCTzBGQlEwa3NjMEpCUVdNN1FVRkJRVHM3UVVGRFZpeFRRVUZMUXl4UlFVRk1MRWRCUVdkQ0xFVkJRV2hDTzBGQlEwZzdPMEZCU0V3N1FVRkJRVHRCUVVGQkxIZENRVXRSV0N4SlFVeFNMRVZCUzJORExFMUJUR1FzUlVGTGMwSTdRVUZEWkN4VlFVRkpMRU5CUVVNc1MwRkJTMVVzVVVGQlRDeERRVUZqV0N4SlFVRmtMRU5CUVV3c1JVRkJNRUk3UVVGRGRFSXNZVUZCUzFjc1VVRkJUQ3hEUVVGaldDeEpRVUZrTEVsQlFYTkNXU3hoUVVGaExFTkJRVU5hTEVsQlFVUXNSVUZCVDBNc1RVRkJVQ3hEUVVGdVF6dEJRVU5JT3p0QlFVTkVMR0ZCUVU4c1MwRkJTMVVzVVVGQlRDeERRVUZqV0N4SlFVRmtMRU5CUVZBN1FVRkRTRHRCUVZaTU8wRkJRVUU3UVVGQlFTd3dRa0ZaVlR0QlFVTkdMR0ZCUVU5aExFMUJRVTBzUTBGQlEwTXNTVUZCVUN4RFFVRlpMRXRCUVV0SUxGRkJRV3BDTEVOQlFWQTdRVUZEU0R0QlFXUk1PMEZCUVVFN1FVRkJRU3g1UWtGblFsTllMRWxCYUVKVUxFVkJaMEpsTzBGQlExQXNZVUZCVHl4TFFVRkxWeXhSUVVGTUxFTkJRV05ZTEVsQlFXUXNRMEZCVUR0QlFVTklPMEZCYkVKTU8wRkJRVUU3UVVGQlFTd3lRa0Z2UWxkQkxFbEJjRUpZTEVWQmIwSnBRanRCUVVOVUxGVkJRVWxSTEU5QlFVOHNSMEZCUnl4TFFVRkxSeXhSUVVGTUxFTkJRV05ZTEVsQlFXUXNRMEZCWkR0QlFVTkJMR0ZCUVU4c1MwRkJTMWNzVVVGQlRDeERRVUZqV0N4SlFVRmtMRU5CUVZBN1FVRkRRU3hoUVVGUFVTeFBRVUZRTzBGQlEwZzdRVUY0UWt3N1FVRkJRVHRCUVVGQkxHZERRVEJDWjBJN1FVRkRVaXhYUVVGTExFbEJRVWxQTEVOQlFWUXNTVUZCWXl4TFFVRkxTaXhSUVVGdVFpeEZRVUUyUWp0QlFVTjZRaXhoUVVGTFFTeFJRVUZNTEVOQlFXTkpMRU5CUVdRc1JVRkJhVUpZTEZOQlFXcENPMEZCUTBnN1FVRkZTanRCUVM5Q1REczdRVUZCUVR0QlFVRkJPenRCUVd0RFFTeFRRVUZUVVN4aFFVRlVMRU5CUVhWQ1dpeEpRVUYyUWl4RlFVRTJRa01zVFVGQk4wSXNSVUZCY1VNN1FVRkRha01zVFVGQlNVUXNTVUZCU1N4RFFVRkRaMElzVDBGQlRDeERRVUZoTEZWQlFXSXNUVUZCTmtJc1EwRkJha01zUlVGQmIwTTdRVUZEYUVNc1YwRkJUeXhKUVVGSlF5d3JSRUZCU2l4RFFVRnRRbXBDTEVsQlFXNUNMRVZCUVhsQ1F5eE5RVUY2UWl4RFFVRlFPMEZCUTBnc1IwRkdSQ3hOUVVWUExFbEJRVWxFTEVsQlFVa3NRMEZCUTJkQ0xFOUJRVXdzUTBGQllTeFhRVUZpTEUxQlFUaENMRU5CUVd4RExFVkJRWEZETzBGQlEzaERMRmRCUVU4c1NVRkJTVVVzYVVWQlFVb3NRMEZCYjBKc1FpeEpRVUZ3UWl4RlFVRXdRa01zVFVGQk1VSXNRMEZCVUR0QlFVTklMRWRCUmswc1RVRkZRVHRCUVVOSUxGZEJRVThzU1VGQlNVWXNaMFJCUVVvc1EwRkJXVU1zU1VGQldpeEZRVUZyUWtNc1RVRkJiRUlzUTBGQlVEdEJRVU5JTzBGQlEwb3NRenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN08wRkRPVU5FTzBGQlJVOHNTVUZCVFdsQ0xHVkJRV0k3UVVGQlFUdEJRVUZCTzBGQlFVRTdPMEZCUTBrc01rSkJRVmxzUWl4SlFVRmFMRVZCUVd0Q1F5eE5RVUZzUWl4RlFVRXdRanRCUVVGQk96dEJRVUZCT3p0QlFVTjBRanRCUVVWQkxGVkJRVXRFTEVsQlFVd3NSMEZCV1VFc1NVRkJXanRCUVVOQkxGVkJRVXRETEUxQlFVd3NSMEZCWTBFc1RVRkJaRHRCUVVOQkxGVkJRVXRyUWl4SlFVRk1MRWRCUVZrc1NVRkJXanM3UVVGRlFTeFJRVUZKTEUxQlFVdHNRaXhOUVVGTUxFTkJRVmxETEUxQlFWb3NRMEZCYlVKRExFdEJRVzVDTEVsQlFUUkNMRU5CUVdoRExFVkJRVzFETzBGQlF5OUNMRmxCUVV0RExGTkJRVXc3UVVGRFNEczdRVUZVY1VJN1FVRlZla0k3TzBGQldFdzdRVUZCUVR0QlFVRkJMR2REUVdGblFqdEJRVUZCT3p0QlFVTlNMRmRCUVV0SUxFMUJRVXdzUTBGQldXdENMRWxCUVZvc1EwRkJhVUlzUzBGQlMyNUNMRWxCUVhSQ0xFVkJRVFJDTEZWQlFVTnZRaXhEUVVGRUxFVkJRVTg3UVVGREwwSXNZMEZCU1N4RFFVRkRSQ3hKUVVGTUxFZEJRVmxETEVOQlFVTXNRMEZCUTJJc1NVRkJSaXhEUVVGUFdTeEpRVUZ1UWpzN1FVRkZRU3hqUVVGSkxFTkJRVU5zUWl4TlFVRk1MRU5CUVZsSkxFbEJRVm9zUTBGQmFVSTdRVUZEWWtNc1pVRkJTeXhGUVVGRkxGZEJSRTA3UVVGRllrTXNZMEZCU1N4RlFVRkZPMEZCUTBaRExHMUNRVUZQTEVWQlFVVXNUVUZCU1N4RFFVRkRVaXhKUVVSYU8wRkJSVVp0UWl4blFrRkJTU3hGUVVGRkxFMUJRVWtzUTBGQlEwRXNTVUZHVkR0QlFVZEdSU3gzUWtGQldTeEZRVUZGUkN4RFFVRkRMRU5CUVVOaUxFbEJRVVlzUTBGQlQyTTdRVUZJYmtJN1FVRkdUeXhUUVVGcVFqdEJRVkZJTEU5QldFUTdRVUZaU0R0QlFURkNURHM3UVVGQlFUdEJRVUZCTEVWQlFYRkRXaXcyUkVGQmNrTXNSVHM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN08wRkRSa0U3UVVGRlR5eEpRVUZOVVN4alFVRmlPMEZCUVVFN1FVRkJRVHRCUVVGQk96dEJRVU5KTERCQ1FVRlpha0lzU1VGQldpeEZRVUZyUWtNc1RVRkJiRUlzUlVGQk1FSTdRVUZCUVRzN1FVRkJRVHM3UVVGRGRFSTdRVUZGUVN4VlFVRkxSQ3hKUVVGTUxFZEJRVmxCTEVsQlFWbzdRVUZEUVN4VlFVRkxReXhOUVVGTUxFZEJRV05CTEUxQlFXUTdRVUZEUVN4VlFVRkxhMElzU1VGQlRDeEhRVUZaTEVsQlFWbzdPMEZCUlVFc1VVRkJTU3hOUVVGTGJFSXNUVUZCVEN4RFFVRlpReXhOUVVGYUxFTkJRVzFDUXl4TFFVRnVRaXhKUVVFMFFpeERRVUZvUXl4RlFVRnRRenRCUVVNdlFpeFpRVUZMUXl4VFFVRk1PMEZCUTBnN08wRkJWSEZDTzBGQlZYcENPenRCUVZoTU8wRkJRVUU3UVVGQlFTeG5RMEZoWjBJN1FVRkJRVHM3UVVGRFVpeFhRVUZMU0N4TlFVRk1MRU5CUVZsclFpeEpRVUZhTEVOQlFXbENMRXRCUVV0dVFpeEpRVUYwUWl4RlFVRTBRaXhWUVVGRGIwSXNRMEZCUkN4RlFVRlBPMEZCUXk5Q0xHTkJRVWtzUTBGQlEwUXNTVUZCVEN4SFFVRlpReXhEUVVGRExFTkJRVU5pTEVsQlFVWXNRMEZCVDFrc1NVRkJia0k3TzBGQlJVRXNZMEZCU1N4RFFVRkRiRUlzVFVGQlRDeERRVUZaU1N4SlFVRmFMRU5CUVdsQ08wRkJRMkpETEdWQlFVc3NSVUZCUlN4WFFVUk5PMEZCUldKRExHTkJRVWtzUlVGQlJUdEJRVU5HUXl4dFFrRkJUeXhGUVVGRkxFMUJRVWtzUTBGQlExSXNTVUZFV2p0QlFVVkdiVUlzWjBKQlFVa3NSVUZCUlN4TlFVRkpMRU5CUVVOQk8wRkJSbFE3UVVGR1R5eFRRVUZxUWp0QlFVOUlMRTlCVmtRN1FVRlhTRHRCUVhwQ1REczdRVUZCUVR0QlFVRkJMRVZCUVc5RFZpdzJSRUZCY0VNc1JUczdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3TzBGRFJrRTdRVUZGVHl4SlFVRk5ZU3hOUVVGaU8wRkJRVUU3UVVGQlFUdEJRVUZCT3p0QlFVTkpMR3RDUVVGWmNrSXNUVUZCV2l4RlFVRnZRbk5DTEVsQlFYQkNMRVZCUVRCQ08wRkJRVUU3TzBGQlFVRTdPMEZCUTNSQ08wRkJSVUVzVlVGQlMzUkNMRTFCUVV3c1IwRkJZMEVzVFVGQlpEdEJRVU5CTEZWQlFVdERMRTFCUVV3c1IwRkJZeXhKUVVGSmMwSXNVMEZCU2l4RFFVRmpSQ3hKUVVGSkxFZEJRVWNzUjBGQlVDeEhRVUZoTEUxQlFVdDBRaXhOUVVGTUxFTkJRVmwzUWl4SFFVRjJReXhEUVVGa096dEJRVVZCTEZWQlFVdERMR0ZCUVV3N08wRkJUbk5DTzBGQlQzcENPenRCUVZKTU8wRkJRVUU3UVVGQlFTeHZRMEZWYjBJN1FVRkJRVHM3UVVGRFdpeFhRVUZMZUVJc1RVRkJUQ3hEUVVGWmVVSXNUVUZCV2l4SFFVRnhRaXhaUVVGTk8wRkJRM1pDTEdOQlFVa3NRMEZCUTBNc1RVRkJURHRCUVVOSUxFOUJSa1E3TzBGQlIwRXNWMEZCU3pGQ0xFMUJRVXdzUTBGQldUSkNMRTlCUVZvc1IwRkJjMElzVlVGQlEwTXNTMEZCUkN4RlFVRlhPMEZCUXpkQ0xHTkJRVWtzUTBGQlEwTXNUMEZCVEN4RFFVRmhSQ3hMUVVGaU8wRkJRMGdzVDBGR1JEczdRVUZIUVN4WFFVRkxOVUlzVFVGQlRDeERRVUZaT0VJc1QwRkJXaXhIUVVGelFpeFZRVUZEUXl4VlFVRkVMRVZCUVdkQ08wRkJRMnhETEdOQlFVa3NRMEZCUTBNc1QwRkJUQ3hEUVVGaFJDeFZRVUZpTzBGQlEwZ3NUMEZHUkRzN1FVRkhRU3hYUVVGTEwwSXNUVUZCVEN4RFFVRlphVU1zVTBGQldpeEhRVUYzUWl4VlFVRkRReXhQUVVGRUxFVkJRV0U3UVVGRGFrTXNZMEZCU1N4RFFVRkRReXhUUVVGTUxFTkJRV1ZFTEU5QlFXWTdRVUZEU0N4UFFVWkVPMEZCUjBnN1FVRjJRa3c3UVVGQlFUdEJRVUZCTERaQ1FYbENZVHRCUVVGQk96dEJRVU5NTzBGQlEwRXNWMEZCUzJwRExFdEJRVXdzUjBGQllTeERRVUZpTzBGQlJVRXNWMEZCUzIxRExFbEJRVXdzUTBGQlZTeDFRa0ZCVml4RlFVRnRReXhWUVVGRGJFSXNRMEZCUkN4RlFVRlBPMEZCUTNSRExHTkJRVWtzUTBGQlEyeENMRTFCUVV3c1EwRkJXWEZETEZOQlFWb3NSMEZCZDBKdVFpeERRVUZETEVOQlFVTnRRaXhUUVVFeFFqdEJRVU5CTEdOQlFVa3NRMEZCUTNCRExFdEJRVXdzUjBGQllTeERRVUZpTEVOQlJuTkRMRU5CU1hSRE96dEJRVU5CTEdOQlFVa3NRMEZCUTBZc1RVRkJUQ3hEUVVGWlZTeFJRVUZhTEVOQlFYRkNVQ3hUUVVGeVFqdEJRVU5JTEU5QlRrUTdRVUZSUVN4WFFVRkxhME1zU1VGQlRDeERRVUZWTEhGQ1FVRldMRVZCUVdsRExGVkJRVU5zUWl4RFFVRkVMRVZCUVU4N1FVRkRjRU1zWTBGQlNTeERRVUZEYWtJc1MwRkJUQ3hIUVVGaExFTkJRVU1zUTBGQlpEdEJRVU5CY1VNc1pVRkJUeXhEUVVGRFZpeExRVUZTTEVOQlFXTldMRU5CUVVNc1EwRkJRMVVzUzBGQmFFSTdRVUZEU0N4UFFVaEVPMEZCUzBFc1YwRkJTM3BDTEVsQlFVd3NRMEZCVlR0QlFVTk9ReXhoUVVGTExFVkJRVVU3UVVGRVJDeFBRVUZXTzBGQlIwZzdRVUUzUTB3N1FVRkJRVHRCUVVGQkxEUkNRU3REV1hkQ0xFdEJMME5hTEVWQkswTnRRanRCUVVOWVZTeGhRVUZQTEVOQlFVTldMRXRCUVZJc1EwRkJZMEVzUzBGQlpEdEJRVU5JTzBGQmFrUk1PMEZCUVVFN1FVRkJRU3cwUWtGdFJGbEhMRlZCYmtSYUxFVkJiVVIzUWp0QlFVTm9RaXhWUVVGSkxFdEJRVXN2UWl4TlFVRk1MRU5CUVZsMVF5eFZRVUZhTEVsQlFUQkNha0lzVTBGQlV5eERRVUZEYTBJc1RVRkJlRU1zUlVGQlowUTdRVUZETlVNc1dVRkJTVlFzVlVGQlZTeERRVUZEVlN4SlFVRllMRWxCUVcxQ0xFOUJRWFpDTEVWQlFXZERPMEZCUXpWQ1NDeHBRa0ZCVHl4RFFVRkRWaXhMUVVGU0xFTkJRV01zWlVGQlpEdEJRVU5JTEZOQlJrUXNUVUZGVHl4SlFVRkpSeXhWUVVGVkxFTkJRVU5WTEVsQlFWZ3NTVUZCYlVJc1UwRkJka0lzUlVGQmEwTTdRVUZEY2tOSUxHbENRVUZQTEVOQlFVTldMRXRCUVZJc1EwRkJZMGNzVlVGQlZTeERRVUZETVVJc1NVRkJla0k3UVVGRFNDeFRRVVpOTEUxQlJVRTdRVUZEU0dsRExHbENRVUZQTEVOQlFVTldMRXRCUVZJc1EwRkJZeXhQUVVGa08wRkJRMGc3UVVGRFNqdEJRVU5LTzBGQk4wUk1PMEZCUVVFN1FVRkJRU3c0UWtFclJHTk5MRTlCTDBSa0xFVkJLMFIxUWp0QlFVTm1MRlZCUVVsUkxFdEJRVXNzUjBGQlIwTXNTVUZCU1N4RFFVRkRReXhMUVVGTUxFTkJRVmRXTEU5QlFVOHNRMEZCUXpkQ0xFbEJRVzVDTEVOQlFWbzdRVUZEUVN4VlFVRkpSQ3hMUVVGTExFZEJRVWR6UXl4TFFVRkxMRU5CUVVOMFF5eExRVUZzUWp0QlFVTkJMRlZCUVVsRExFbEJRVWtzUjBGQlIzRkRMRXRCUVVzc1EwRkJRM0pETEVsQlFXcENPenRCUVVWQkxGVkJRVWx4UXl4TFFVRkxMRU5CUVVOd1F5eFBRVUZPTEV0QlFXdENkVU1zVTBGQmRFSXNSVUZCYVVNN1FVRkROMElzWVVGQlN6bERMRTFCUVV3c1EwRkJXVlVzVVVGQldpeERRVUZ4UW5GRExFbEJRWEpDTEVOQlFUQkNTaXhMUVVGTExFTkJRVU53UXl4UFFVRm9ReXhGUVVGNVEzbERMRWxCUVhwRExFTkJRVGhETTBNc1MwRkJPVU1zUlVGQmNVUkRMRWxCUVhKRU8wRkJRMGdzVDBGR1JDeE5RVVZQTzBGQlEwZ3NZVUZCU3pCRExFbEJRVXdzUTBGQlZUTkRMRXRCUVZZc1JVRkJhVUpETEVsQlFXcENPMEZCUTBnN1FVRkZTanRCUVRGRlREdEJRVUZCTzBGQlFVRXNlVUpCTkVWVE1rTXNTVUUxUlZRc1JVRTBSV1U3UVVGRFVDeFZRVUZKTEV0QlFVc3ZReXhMUVVGTUxFdEJRV1VzUTBGQlF5eERRVUZ3UWl4RlFVRjFRanRCUVVOdVFpeGhRVUZMUkN4TlFVRk1MRU5CUVZsSExFbEJRVm9zUTBGQmFVSjNReXhKUVVGSkxFTkJRVU5OTEZOQlFVd3NRMEZCWlVRc1NVRkJaaXhEUVVGcVFqdEJRVU5JTzBGQlEwbzdRVUZvUmt3N08wRkJRVUU3UVVGQlFTeEZRVUUwUW5wRExEWkVRVUUxUWl4Rk96czdPenM3T3pzN096czdPenM3T3pzN096dEJRMFpQTEVsQlFVMHlReXhuUWtGQllqdEJRVUZCTzBGQlFVRTdRVUZEU1N3NFFrRkJZenRCUVVGQk96dEJRVU5XTEZOQlFVdERMRlZCUVV3c1IwRkJhMElzUlVGQmJFSTdRVUZEU0RzN1FVRklURHRCUVVGQk8wRkJRVUVzZDBKQlMxRnlSQ3hKUVV4U0xFVkJTMk03UVVGRFRpeGhRVUZQTEV0QlFVdHhSQ3hWUVVGTUxFTkJRV2RDUXl4TlFVRk5MRU5CUVVOMFJDeEpRVUZFTEVOQlFYUkNMRU5CUVZBN1FVRkRTRHRCUVZCTU8wRkJRVUU3UVVGQlFTeDNRa0ZUVVVFc1NVRlVVaXhGUVZOamRVUXNVVUZVWkN4RlFWTjNRa01zVDBGVWVFSXNSVUZUYVVNN1FVRkRla0lzVlVGQlNVTXNhVUpCUVdsQ0xFZEJRVWRJTEUxQlFVMHNRMEZCUTNSRUxFbEJRVVFzUTBGQk9VSTdRVUZEUVN4WFFVRkxjVVFzVlVGQlRDeERRVUZuUWtrc2FVSkJRV2hDTEVsQlFYRkRMRXRCUVV0S0xGVkJRVXdzUTBGQlowSkpMR2xDUVVGb1FpeExRVUZ6UXl4RlFVRXpSVHM3UVVGRFFTeFhRVUZMU2l4VlFVRk1MRU5CUVdkQ1NTeHBRa0ZCYUVJc1JVRkJiVU5ETEVsQlFXNURMRU5CUVhkRE8wRkJRM0JEUXl4VlFVRkZMRVZCUVVWS0xGRkJSR2RETzBGQlJYQkRReXhsUVVGUExFVkJRVVZCTzBGQlJqSkNMRTlCUVhoRE8wRkJTVWc3UVVGb1FrdzdRVUZCUVR0QlFVRkJMREpDUVd0Q1YzaEVMRWxCYkVKWUxFVkJhMEpwUW5WRUxGRkJiRUpxUWl4RlFXdENNa0pETEU5QmJFSXpRaXhGUVd0Q2IwTTdRVUZETlVJc1ZVRkJTU3hEUVVGRGVFUXNTVUZCUkN4SlFVRlRMRU5CUVVOMVJDeFJRVUZXTEVsQlFYTkNMRU5CUVVORExFOUJRVE5DTEVWQlFXOURPMEZCUTJoRExHRkJRVXRJTEZWQlFVd3NSMEZCYTBJc1JVRkJiRUk3UVVGRFFUdEJRVU5JT3p0QlFVVkVMRlZCUVVsUExFdEJRVXNzUjBGQlJ6VkVMRWxCUVVrc1IwRkJSeXhEUVVGRGMwUXNUVUZCVFN4RFFVRkRkRVFzU1VGQlJDeERRVUZRTEVOQlFVZ3NSMEZCYjBKaExFMUJRVTBzUTBGQlEwTXNTVUZCVUN4RFFVRlpMRXRCUVV0MVF5eFZRVUZxUWl4RFFVRndRenM3UVVGRlFTeFZRVUZKUlN4UlFVRlJMRWxCUVVsRExFOUJRV2hDTEVWQlFYbENPMEZCUTNKQ0xHRkJRVXRMTEdOQlFVd3NRMEZCYjBKRUxFdEJRWEJDTEVWQlFUSkNUQ3hSUVVFelFpeEZRVUZ4UTBNc1QwRkJja003UVVGRFNDeFBRVVpFTEUxQlJVODdRVUZEU0N4aFFVRkxUU3hyUWtGQlRDeERRVUYzUWtZc1MwRkJlRUk3UVVGRFNEdEJRVU5LTzBGQkwwSk1PMEZCUVVFN1FVRkJRU3h0UTBGcFEyMUNRU3hMUVdwRGJrSXNSVUZwUXpCQ1RDeFJRV3BETVVJc1JVRnBRMjlEUXl4UFFXcERjRU1zUlVGcFF6WkRPMEZCUTNKRExGZEJRVXNzU1VGQlNYaEVMRWxCUVZRc1NVRkJhVUkwUkN4TFFVRnFRaXhGUVVGM1FqdEJRVU53UWl4aFFVRkxMRWxCUVVsdVF5eEhRVUZVTEVsQlFXZENMRXRCUVVzMFFpeFZRVUZNTEVOQlFXZENja1FzU1VGQmFFSXNRMEZCYUVJc1JVRkJkVU03UVVGRGJrTXNZMEZCU1N4TFFVRkxjVVFzVlVGQlRDeERRVUZuUW5KRUxFbEJRV2hDTEVWQlFYTkNlVUlzUjBGQmRFSXNSVUZCTWtKclF5eEZRVUV6UWl4SlFVRnBRMG9zVVVGQmFrTXNTVUZCTmtNc1MwRkJTMFlzVlVGQlRDeERRVUZuUW5KRUxFbEJRV2hDTEVWQlFYTkNlVUlzUjBGQmRFSXNSVUZCTWtJclFpeFBRVUV6UWl4SlFVRnpRMEVzVDBGQmRrWXNSVUZCWjBjN1FVRkROVVlzYlVKQlFVOHNTMEZCUzBnc1ZVRkJUQ3hEUVVGblFuSkVMRWxCUVdoQ0xFVkJRWE5DZVVJc1IwRkJkRUlzUTBGQlVEdEJRVU5JTzBGQlEwbzdPMEZCUlVRc1dVRkJTU3hMUVVGTE5FSXNWVUZCVEN4RFFVRm5RbkpFTEVsQlFXaENMRVZCUVhOQ0swUXNUVUZCZEVJc1MwRkJhVU1zUTBGQmNrTXNSVUZCZDBNN1FVRkRjRU1zYVVKQlFVOHNTMEZCUzFZc1ZVRkJUQ3hEUVVGblFuSkVMRWxCUVdoQ0xFTkJRVkE3UVVGRFNEdEJRVU5LTzBGQlEwbzdRVUUzUTB3N1FVRkJRVHRCUVVGQkxIVkRRU3REZFVJMFJDeExRUzlEZGtJc1JVRXJRemhDTzBGQlEzUkNMRmRCUVVzc1NVRkJTVFZFTEVsQlFWUXNTVUZCYVVJMFJDeExRVUZxUWl4RlFVRjNRanRCUVVOd1FpeGxRVUZQTEV0QlFVdFFMRlZCUVV3c1EwRkJaMEp5UkN4SlFVRm9RaXhEUVVGUU8wRkJRMGc3UVVGRFNqdEJRVzVFVERzN1FVRkJRVHRCUVVGQk96dEJRWE5FUVN4VFFVRlRjMFFzVFVGQlZDeERRVUZuUW5SRUxFbEJRV2hDTEVWQlFYTkNPMEZCUTJ4Q0xGTkJRVThzVFVGQlRVRXNTVUZCWWp0QlFVTklMRU03T3pzN096czdPenM3T3pzN096czdPenM3T3p0QlEzaEVSRHRCUVVWUExFbEJRVTFUTEZWQlFXSTdRVUZCUVR0QlFVRkJPMEZCUTBrc2QwSkJRV003UVVGQlFUczdRVUZEVml4VFFVRkxkVVFzVTBGQlRDeEhRVUZwUWl4SlFVRkpXaXh0UlVGQlNpeEZRVUZxUWp0QlFVTkJMRk5CUVV0aExHZENRVUZNTEVkQlFYZENMRVZCUVhoQ08wRkJRMGc3TzBGQlNrdzdRVUZCUVR0QlFVRkJMSGxDUVUxVFF5eFRRVTVVTEVWQlRXOUNXQ3hSUVU1d1FpeEZRVTA0UWtNc1QwRk9PVUlzUlVGTmRVTTdRVUZETDBJc1YwRkJTMUVzVTBGQlRDeERRVUZsUnl4SFFVRm1MRU5CUVcxQ1JDeFRRVUZ1UWl4RlFVRTRRbGdzVVVGQk9VSXNSVUZCZDBORExFOUJRWGhETzBGQlEwRXNZVUZCVHl4SlFVRlFPMEZCUTBnN1FVRlVURHRCUVVGQk8wRkJRVUVzWjBOQlYyZENSQ3hSUVZob1FpeEZRVmN3UWp0QlFVTnNRaXhYUVVGTFZTeG5Ra0ZCVEN4RFFVRnpRbEFzU1VGQmRFSXNRMEZCTWtKSUxGRkJRVE5DTzBGQlEwRXNZVUZCVHl4SlFVRlFPMEZCUTBnN1FVRmtURHRCUVVGQk8wRkJRVUVzTWtKQlowSlhWeXhUUVdoQ1dDeEZRV2RDYzBKWUxGRkJhRUowUWl4RlFXZENaME5ETEU5QmFFSm9ReXhGUVdkQ2VVTTdRVUZEYWtNc1YwRkJTMUVzVTBGQlRDeERRVUZsU1N4TlFVRm1MRU5CUVhOQ1JpeFRRVUYwUWl4RlFVRnBRMWdzVVVGQmFrTXNSVUZCTWtORExFOUJRVE5ETzBGQlEwRXNZVUZCVHl4SlFVRlFPMEZCUTBnN1FVRnVRa3c3UVVGQlFUdEJRVUZCTEd0RFFYRkNhMEpFTEZGQmNrSnNRaXhGUVhGQ05FSTdRVUZEY0VJc1ZVRkJTU3hEUVVGRFFTeFJRVUZNTEVWQlFXVTdRVUZEV0N4aFFVRkxWU3huUWtGQlRDeEhRVUYzUWl4RlFVRjRRanRCUVVOQkxHVkJRVThzU1VGQlVEdEJRVU5JT3p0QlFVVkVMRmRCUVVzc1NVRkJTV3hFTEVOQlFWUXNTVUZCWXl4TFFVRkxhMFFzWjBKQlFXNUNMRVZCUVhGRE8wRkJRMnBETEZsQlFVbFdMRkZCUVZFc1NVRkJTU3hMUVVGTFZTeG5Ra0ZCVEN4RFFVRnpRbXhFTEVOQlFYUkNMRU5CUVdoQ0xFVkJRVEJETzBGQlEzUkRMR2xDUVVGUExFdEJRVXRyUkN4blFrRkJUQ3hEUVVGelFteEVMRU5CUVhSQ0xFTkJRVkE3UVVGRFNEdEJRVU5LT3p0QlFVTkVMR0ZCUVU4c1NVRkJVRHRCUVVOSU8wRkJha05NTzBGQlFVRTdRVUZCUVN4cFEwRnRRMmxDTzBGQlExUXNWMEZCUzNORUxFMUJRVXc3UVVGRFFTeFhRVUZMUXl4aFFVRk1PMEZCUTBFc1lVRkJUeXhKUVVGUU8wRkJRMGc3UVVGMlEwdzdRVUZCUVR0QlFVRkJMSGxDUVhsRFUwb3NVMEY2UTFRc1JVRjVRMjlDTTBRc1NVRjZRM0JDTEVWQmVVTXdRanRCUVVOc1FpeFhRVUZMTEVsQlFVbFJMRU5CUVVNc1IwRkJSeXhEUVVGaUxFVkJRV2RDUVN4RFFVRkRMRWRCUVVjc1MwRkJTMnRFTEdkQ1FVRk1MRU5CUVhOQ1JpeE5RVUV4UXl4RlFVRnJSR2hFTEVOQlFVTXNSVUZCYmtRc1JVRkJkVVE3UVVGRGJrUXNZVUZCUzJ0RUxHZENRVUZNTEVOQlFYTkNiRVFzUTBGQmRFSXNSVUZCZVVKdFJDeFRRVUY2UWl4RlFVRnZRek5FTEVsQlFYQkRPMEZCUTBnN08wRkJSVVFzVlVGQlNYbEVMRk5CUVZNc1IwRkJSeXhMUVVGTFFTeFRRVUZNTEVOQlFXVlBMRWRCUVdZc1EwRkJiVUpNTEZOQlFXNUNMRU5CUVdoQ096dEJRVU5CTEZWQlFVbEdMRk5CUVZNc1NVRkJTVUVzVTBGQlV5eERRVUZEUkN4TlFVRldMRWRCUVcxQ0xFTkJRWEJETEVWQlFYVkRPMEZCUTI1RExHRkJRVXNzU1VGQlNXaEVMRVZCUVVNc1IwRkJSeXhEUVVGaUxFVkJRV2RDUVN4RlFVRkRMRWRCUVVkcFJDeFRRVUZUTEVOQlFVTkVMRTFCUVRsQ0xFVkJRWE5EYUVRc1JVRkJReXhGUVVGMlF5eEZRVUV5UXp0QlFVTjJRMmxFTEcxQ1FVRlRMRU5CUVVOcVJDeEZRVUZFTEVOQlFWUXNRMEZCWVRSRExFVkJRV0lzUTBGQlowSmhMRWxCUVdoQ0xFTkJRWEZDVWl4VFFVRlRMRU5CUVVOcVJDeEZRVUZFTEVOQlFWUXNRMEZCWVhsRExFOUJRV3hETEVWQlFUSkRha1FzU1VGQk0wTTdRVUZEU0R0QlFVTktPenRCUVVWRUxHRkJRVThzU1VGQlVEdEJRVU5JTzBGQmRFUk1PenRCUVVGQk8wRkJRVUVzU1RzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenRCUTBaQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlJVOHNTVUZCVFd0RkxFMUJRV0k3UVVGQlFUdEJRVUZCTzBGQlEwa3NhMEpCUVZsRExFOUJRVm9zUlVGQmNVSkRMRTlCUVhKQ0xFVkJRVGhDTzBGQlFVRTdPMEZCUXpGQ0xGTkJRVXRETEZkQlFVd3NRMEZCYVVKR0xFOUJRV3BDTzBGQlJVRXNVMEZCUzJwRUxFZEJRVXdzUjBGQlYybEVMRTlCUVZnN1FVRkRRU3hUUVVGTFF5eFBRVUZNTEVkQlFXVkJMRTlCUVU4c1NVRkJTU3hGUVVFeFFqdEJRVU5CTEZOQlFVdEZMRlZCUVV3c1IwRkJhMElzU1VGQlNYQkZMRFpFUVVGS0xFVkJRV3hDTzBGQlEwRXNVMEZCUzBVc1VVRkJUQ3hIUVVGblFpeEpRVUZKUkN3eVJFRkJTaXhGUVVGb1FqdEJRVVZCTEZOQlFVdHZSU3hQUVVGTU8wRkJRMGc3TzBGQlZrdzdRVUZCUVR0QlFVRkJMRGhDUVZsak8wRkJRMDRzVjBGQlN6VkZMRTFCUVV3c1IwRkJZeXhKUVVGSmIwSXNlVVJCUVVvc1EwRkJWeXhKUVVGWUxFVkJRV2xDTEV0QlFVdHhSQ3hQUVVGTUxFTkJRV0Z3UkN4SlFVRTVRaXhEUVVGa08wRkJRMGc3UVVGa1REdEJRVUZCTzBGQlFVRXNPRUpCWjBKamQwUXNXVUZvUW1Rc1JVRm5RalJDTzBGQlEzQkNMR0ZCUVU4c1MwRkJTM0JGTEZGQlFVd3NRMEZCWTNkRUxFZEJRV1FzUTBGQmEwSlpMRmxCUVd4Q0xFVkJRV2RETEVsQlFXaERMRU5CUVZBN1FVRkRTRHRCUVd4Q1REdEJRVUZCTzBGQlFVRXNaME5CYjBKblFrRXNXVUZ3UW1oQ0xFVkJiMEk0UWp0QlFVTjBRaXhYUVVGTGNFVXNVVUZCVEN4RFFVRmplVVFzVFVGQlpDeERRVUZ4UWxjc1dVRkJja0k3UVVGRFNEdEJRWFJDVER0QlFVRkJPMEZCUVVFc2EwTkJkMEpyUWp0QlFVTldMR0ZCUVU4c1MwRkJTemRGTEUxQlFVd3NRMEZCV1VFc1RVRkJXaXhEUVVGdFFuRkRMRk5CUVRGQ08wRkJRMGc3UVVFeFFrdzdRVUZCUVR0QlFVRkJMSGxDUVRSQ1UxY3NTVUUxUWxRc1JVRTBRbVU3UVVGRFVDeFhRVUZMYUVRc1RVRkJUQ3hEUVVGWlJ5eEpRVUZhTEVOQlFXbENOa01zU1VGQmFrSTdRVUZEU0R0QlFUbENURHRCUVVGQk8wRkJRVUVzWjBOQlowTm5RbnBDTEVkQmFFTm9RaXhGUVdkRGNVSTdRVUZEWWl4aFFVRlBMRWxCUVZBN1FVRkRTRHRCUVd4RFREdEJRVUZCTzBGQlFVRXNlVUpCYjBOVGVrSXNTVUZ3UTFRc1JVRnZRMlYxUkN4UlFYQkRaaXhGUVc5RGVVSTdRVUZEYWtJc1ZVRkJTWGxDTEUxQlFVMHNSMEZCUnl4TFFVRkxUQ3hQUVVGTUxFTkJRV0Y0UkN4SlFVRmlMRU5CUVd0Q05rUXNUVUZCYkVJc1NVRkJORUlzVFVGQmVrTTdRVUZEUVN4VlFVRkpla1VzU1VGQlNTeEhRVUZITEVWQlFWZzdRVUZEUVN4VlFVRkpNRVVzVFVGQlRTeEhRVUZITEVWQlFXSTdPMEZCUlVFc1ZVRkJTVVFzVFVGQlRTeEpRVUZKTEUxQlFXUXNSVUZCYzBJN1FVRkRiRUo2UlN4WlFVRkpMRWRCUVVkTkxFMUJRVTBzUTBGQlEzRkZMRTFCUVZBc1EwRkJZenRCUVVOcVFrZ3NjMEpCUVZrc1JVRkJSUzlGTEVsQlJFYzdRVUZGYWtKMVF5eHRRa0ZCVXl4RlFVRkZMRXRCUVVzMFF5eFhRVUZNTzBGQlJrMHNVMEZCWkN4RFFVRlFPMEZCU1Vnc1QwRk1SQ3hOUVV0UE8wRkJRMGhHTEdOQlFVMHNSMEZCUjNCRkxFMUJRVTBzUTBGQlEzRkZMRTFCUVZBc1EwRkJZenRCUVVOdVFrZ3NjMEpCUVZrc1JVRkJSUzlGTEVsQlJFczdRVUZGYmtKMVF5eHRRa0ZCVXl4RlFVRkZMRXRCUVVzMFF5eFhRVUZNTzBGQlJsRXNVMEZCWkN4RFFVRlVPMEZCU1VnN08wRkJSVVJETEd0RVFVRkxMRU5CUVVNN1FVRkRSa01zVjBGQlJ5eEZRVUZGTEV0QlFVdFdMRTlCUVV3c1EwRkJZWGhFTEVsQlFXSXNRMEZCYTBKclJTeEhRVVJ5UWp0QlFVVkdUQ3hqUVVGTkxFVkJRVVZCTEUxQlJrNDdRVUZIUmswc1pVRkJUeXhGUVVGRkxFdEJRVXRZTEU5QlFVd3NRMEZCWVhoRUxFbEJRV0lzUTBGQmEwSnRSU3hQUVVGc1FpeEpRVUUyUWl4RlFVaHdRenRCUVVsR1RDeGpRVUZOTEVWQlFVVkJMRTFCU2s0N1FVRkxSakZGTEZsQlFVa3NSVUZCUlVFN1FVRk1TaXhQUVVGRUxFTkJRVXdzUTBGTlIyZEdMRWxCVGtnc1EwRk5VU3hWUVVGRGJrVXNRMEZCUkN4RlFVRlBPMEZCUTFodFF5eG5Ra0ZCVVN4RFFVRkRia01zUTBGQlJDeERRVUZTTzBGQlEwZ3NUMEZTUkN4RlFWRkhiMFVzUzBGU1NDeERRVkZUTEZWQlFVTndSU3hEUVVGRUxFVkJRVTg3UVVGRFdtOUNMR1ZCUVU4c1EwRkJRMVlzUzBGQlVpeERRVUZqTEZkQlFXUTdRVUZEU0N4UFFWWkVPMEZCVjBnN1FVRm9SVXc3TzBGQlFVRTdRVUZCUVR0QlFXMUZRVEpFTEUxQlFVMHNRMEZCUTJoQ0xFMUJRVkFzUjBGQlowSkJMRTFCUVdoQ0xFTWlMQ0ptYVd4bElqb2ljSFZ6YUdWeUxtcHpJaXdpYzI5MWNtTmxjME52Ym5SbGJuUWlPbHNpSUZ4MEx5OGdWR2hsSUcxdlpIVnNaU0JqWVdOb1pWeHVJRngwZG1GeUlHbHVjM1JoYkd4bFpFMXZaSFZzWlhNZ1BTQjdmVHRjYmx4dUlGeDBMeThnVkdobElISmxjWFZwY21VZ1puVnVZM1JwYjI1Y2JpQmNkR1oxYm1OMGFXOXVJRjlmZDJWaWNHRmphMTl5WlhGMWFYSmxYMThvYlc5a2RXeGxTV1FwSUh0Y2JseHVJRngwWEhRdkx5QkRhR1ZqYXlCcFppQnRiMlIxYkdVZ2FYTWdhVzRnWTJGamFHVmNiaUJjZEZ4MGFXWW9hVzV6ZEdGc2JHVmtUVzlrZFd4bGMxdHRiMlIxYkdWSlpGMHBJSHRjYmlCY2RGeDBYSFJ5WlhSMWNtNGdhVzV6ZEdGc2JHVmtUVzlrZFd4bGMxdHRiMlIxYkdWSlpGMHVaWGh3YjNKMGN6dGNiaUJjZEZ4MGZWeHVJRngwWEhRdkx5QkRjbVZoZEdVZ1lTQnVaWGNnYlc5a2RXeGxJQ2hoYm1RZ2NIVjBJR2wwSUdsdWRHOGdkR2hsSUdOaFkyaGxLVnh1SUZ4MFhIUjJZWElnYlc5a2RXeGxJRDBnYVc1emRHRnNiR1ZrVFc5a2RXeGxjMXR0YjJSMWJHVkpaRjBnUFNCN1hHNGdYSFJjZEZ4MGFUb2diVzlrZFd4bFNXUXNYRzRnWEhSY2RGeDBiRG9nWm1Gc2MyVXNYRzRnWEhSY2RGeDBaWGh3YjNKMGN6b2dlMzFjYmlCY2RGeDBmVHRjYmx4dUlGeDBYSFF2THlCRmVHVmpkWFJsSUhSb1pTQnRiMlIxYkdVZ1puVnVZM1JwYjI1Y2JpQmNkRngwYlc5a2RXeGxjMXR0YjJSMWJHVkpaRjB1WTJGc2JDaHRiMlIxYkdVdVpYaHdiM0owY3l3Z2JXOWtkV3hsTENCdGIyUjFiR1V1Wlhod2IzSjBjeXdnWDE5M1pXSndZV05yWDNKbGNYVnBjbVZmWHlrN1hHNWNiaUJjZEZ4MEx5OGdSbXhoWnlCMGFHVWdiVzlrZFd4bElHRnpJR3h2WVdSbFpGeHVJRngwWEhSdGIyUjFiR1V1YkNBOUlIUnlkV1U3WEc1Y2JpQmNkRngwTHk4Z1VtVjBkWEp1SUhSb1pTQmxlSEJ2Y25SeklHOW1JSFJvWlNCdGIyUjFiR1ZjYmlCY2RGeDBjbVYwZFhKdUlHMXZaSFZzWlM1bGVIQnZjblJ6TzF4dUlGeDBmVnh1WEc1Y2JpQmNkQzh2SUdWNGNHOXpaU0IwYUdVZ2JXOWtkV3hsY3lCdlltcGxZM1FnS0Y5ZmQyVmljR0ZqYTE5dGIyUjFiR1Z6WDE4cFhHNGdYSFJmWDNkbFluQmhZMnRmY21WeGRXbHlaVjlmTG0wZ1BTQnRiMlIxYkdWek8xeHVYRzRnWEhRdkx5QmxlSEJ2YzJVZ2RHaGxJRzF2WkhWc1pTQmpZV05vWlZ4dUlGeDBYMTkzWldKd1lXTnJYM0psY1hWcGNtVmZYeTVqSUQwZ2FXNXpkR0ZzYkdWa1RXOWtkV3hsY3p0Y2JseHVJRngwTHk4Z1pHVm1hVzVsSUdkbGRIUmxjaUJtZFc1amRHbHZiaUJtYjNJZ2FHRnliVzl1ZVNCbGVIQnZjblJ6WEc0Z1hIUmZYM2RsWW5CaFkydGZjbVZ4ZFdseVpWOWZMbVFnUFNCbWRXNWpkR2x2YmlobGVIQnZjblJ6TENCdVlXMWxMQ0JuWlhSMFpYSXBJSHRjYmlCY2RGeDBhV1lvSVY5ZmQyVmljR0ZqYTE5eVpYRjFhWEpsWDE4dWJ5aGxlSEJ2Y25SekxDQnVZVzFsS1NrZ2UxeHVJRngwWEhSY2RFOWlhbVZqZEM1a1pXWnBibVZRY205d1pYSjBlU2hsZUhCdmNuUnpMQ0J1WVcxbExDQjdJR1Z1ZFcxbGNtRmliR1U2SUhSeWRXVXNJR2RsZERvZ1oyVjBkR1Z5SUgwcE8xeHVJRngwWEhSOVhHNGdYSFI5TzF4dVhHNGdYSFF2THlCa1pXWnBibVVnWDE5bGMwMXZaSFZzWlNCdmJpQmxlSEJ2Y25SelhHNGdYSFJmWDNkbFluQmhZMnRmY21WeGRXbHlaVjlmTG5JZ1BTQm1kVzVqZEdsdmJpaGxlSEJ2Y25SektTQjdYRzRnWEhSY2RHbG1LSFI1Y0dWdlppQlRlVzFpYjJ3Z0lUMDlJQ2QxYm1SbFptbHVaV1FuSUNZbUlGTjViV0p2YkM1MGIxTjBjbWx1WjFSaFp5a2dlMXh1SUZ4MFhIUmNkRTlpYW1WamRDNWtaV1pwYm1WUWNtOXdaWEowZVNobGVIQnZjblJ6TENCVGVXMWliMnd1ZEc5VGRISnBibWRVWVdjc0lIc2dkbUZzZFdVNklDZE5iMlIxYkdVbklIMHBPMXh1SUZ4MFhIUjlYRzRnWEhSY2RFOWlhbVZqZEM1a1pXWnBibVZRY205d1pYSjBlU2hsZUhCdmNuUnpMQ0FuWDE5bGMwMXZaSFZzWlNjc0lIc2dkbUZzZFdVNklIUnlkV1VnZlNrN1hHNGdYSFI5TzF4dVhHNGdYSFF2THlCamNtVmhkR1VnWVNCbVlXdGxJRzVoYldWemNHRmpaU0J2WW1wbFkzUmNiaUJjZEM4dklHMXZaR1VnSmlBeE9pQjJZV3gxWlNCcGN5QmhJRzF2WkhWc1pTQnBaQ3dnY21WeGRXbHlaU0JwZEZ4dUlGeDBMeThnYlc5a1pTQW1JREk2SUcxbGNtZGxJR0ZzYkNCd2NtOXdaWEowYVdWeklHOW1JSFpoYkhWbElHbHVkRzhnZEdobElHNXpYRzRnWEhRdkx5QnRiMlJsSUNZZ05Eb2djbVYwZFhKdUlIWmhiSFZsSUhkb1pXNGdZV3h5WldGa2VTQnVjeUJ2WW1wbFkzUmNiaUJjZEM4dklHMXZaR1VnSmlBNGZERTZJR0psYUdGMlpTQnNhV3RsSUhKbGNYVnBjbVZjYmlCY2RGOWZkMlZpY0dGamExOXlaWEYxYVhKbFgxOHVkQ0E5SUdaMWJtTjBhVzl1S0haaGJIVmxMQ0J0YjJSbEtTQjdYRzRnWEhSY2RHbG1LRzF2WkdVZ0ppQXhLU0IyWVd4MVpTQTlJRjlmZDJWaWNHRmphMTl5WlhGMWFYSmxYMThvZG1Gc2RXVXBPMXh1SUZ4MFhIUnBaaWh0YjJSbElDWWdPQ2tnY21WMGRYSnVJSFpoYkhWbE8xeHVJRngwWEhScFppZ29iVzlrWlNBbUlEUXBJQ1ltSUhSNWNHVnZaaUIyWVd4MVpTQTlQVDBnSjI5aWFtVmpkQ2NnSmlZZ2RtRnNkV1VnSmlZZ2RtRnNkV1V1WDE5bGMwMXZaSFZzWlNrZ2NtVjBkWEp1SUhaaGJIVmxPMXh1SUZ4MFhIUjJZWElnYm5NZ1BTQlBZbXBsWTNRdVkzSmxZWFJsS0c1MWJHd3BPMXh1SUZ4MFhIUmZYM2RsWW5CaFkydGZjbVZ4ZFdseVpWOWZMbklvYm5NcE8xeHVJRngwWEhSUFltcGxZM1F1WkdWbWFXNWxVSEp2Y0dWeWRIa29ibk1zSUNka1pXWmhkV3gwSnl3Z2V5QmxiblZ0WlhKaFlteGxPaUIwY25WbExDQjJZV3gxWlRvZ2RtRnNkV1VnZlNrN1hHNGdYSFJjZEdsbUtHMXZaR1VnSmlBeUlDWW1JSFI1Y0dWdlppQjJZV3gxWlNBaFBTQW5jM1J5YVc1bkp5a2dabTl5S0haaGNpQnJaWGtnYVc0Z2RtRnNkV1VwSUY5ZmQyVmljR0ZqYTE5eVpYRjFhWEpsWDE4dVpDaHVjeXdnYTJWNUxDQm1kVzVqZEdsdmJpaHJaWGtwSUhzZ2NtVjBkWEp1SUhaaGJIVmxXMnRsZVYwN0lIMHVZbWx1WkNodWRXeHNMQ0JyWlhrcEtUdGNiaUJjZEZ4MGNtVjBkWEp1SUc1ek8xeHVJRngwZlR0Y2JseHVJRngwTHk4Z1oyVjBSR1ZtWVhWc2RFVjRjRzl5ZENCbWRXNWpkR2x2YmlCbWIzSWdZMjl0Y0dGMGFXSnBiR2wwZVNCM2FYUm9JRzV2Ymkxb1lYSnRiMjU1SUcxdlpIVnNaWE5jYmlCY2RGOWZkMlZpY0dGamExOXlaWEYxYVhKbFgxOHViaUE5SUdaMWJtTjBhVzl1S0cxdlpIVnNaU2tnZTF4dUlGeDBYSFIyWVhJZ1oyVjBkR1Z5SUQwZ2JXOWtkV3hsSUNZbUlHMXZaSFZzWlM1ZlgyVnpUVzlrZFd4bElEOWNiaUJjZEZ4MFhIUm1kVzVqZEdsdmJpQm5aWFJFWldaaGRXeDBLQ2tnZXlCeVpYUjFjbTRnYlc5a2RXeGxXeWRrWldaaGRXeDBKMTA3SUgwZ09seHVJRngwWEhSY2RHWjFibU4wYVc5dUlHZGxkRTF2WkhWc1pVVjRjRzl5ZEhNb0tTQjdJSEpsZEhWeWJpQnRiMlIxYkdVN0lIMDdYRzRnWEhSY2RGOWZkMlZpY0dGamExOXlaWEYxYVhKbFgxOHVaQ2huWlhSMFpYSXNJQ2RoSnl3Z1oyVjBkR1Z5S1R0Y2JpQmNkRngwY21WMGRYSnVJR2RsZEhSbGNqdGNiaUJjZEgwN1hHNWNiaUJjZEM4dklFOWlhbVZqZEM1d2NtOTBiM1I1Y0dVdWFHRnpUM2R1VUhKdmNHVnlkSGt1WTJGc2JGeHVJRngwWDE5M1pXSndZV05yWDNKbGNYVnBjbVZmWHk1dklEMGdablZ1WTNScGIyNG9iMkpxWldOMExDQndjbTl3WlhKMGVTa2dleUJ5WlhSMWNtNGdUMkpxWldOMExuQnliM1J2ZEhsd1pTNW9ZWE5QZDI1UWNtOXdaWEowZVM1allXeHNLRzlpYW1WamRDd2djSEp2Y0dWeWRIa3BPeUI5TzF4dVhHNGdYSFF2THlCZlgzZGxZbkJoWTJ0ZmNIVmliR2xqWDNCaGRHaGZYMXh1SUZ4MFgxOTNaV0p3WVdOclgzSmxjWFZwY21WZlh5NXdJRDBnWENKY0lqdGNibHh1WEc0Z1hIUXZMeUJNYjJGa0lHVnVkSEo1SUcxdlpIVnNaU0JoYm1RZ2NtVjBkWEp1SUdWNGNHOXlkSE5jYmlCY2RISmxkSFZ5YmlCZlgzZGxZbkJoWTJ0ZmNtVnhkV2x5WlY5ZktGOWZkMlZpY0dGamExOXlaWEYxYVhKbFgxOHVjeUE5SUZ3aUxpOXpjbU12Y0hWemFHVnlMbXB6WENJcE8xeHVJaXdpYlc5a2RXeGxMbVY0Y0c5eWRITWdQU0J5WlhGMWFYSmxLQ2N1TDJ4cFlpOWhlR2x2Y3ljcE95SXNJaWQxYzJVZ2MzUnlhV04wSnp0Y2JseHVkbUZ5SUhWMGFXeHpJRDBnY21WeGRXbHlaU2duTGk4dUxpOTFkR2xzY3ljcE8xeHVkbUZ5SUhObGRIUnNaU0E5SUhKbGNYVnBjbVVvSnk0dkxpNHZZMjl5WlM5elpYUjBiR1VuS1R0Y2JuWmhjaUJpZFdsc1pGVlNUQ0E5SUhKbGNYVnBjbVVvSnk0dkxpNHZhR1ZzY0dWeWN5OWlkV2xzWkZWU1RDY3BPMXh1ZG1GeUlIQmhjbk5sU0dWaFpHVnljeUE5SUhKbGNYVnBjbVVvSnk0dkxpNHZhR1ZzY0dWeWN5OXdZWEp6WlVobFlXUmxjbk1uS1R0Y2JuWmhjaUJwYzFWU1RGTmhiV1ZQY21sbmFXNGdQU0J5WlhGMWFYSmxLQ2N1THk0dUwyaGxiSEJsY25NdmFYTlZVa3hUWVcxbFQzSnBaMmx1SnlrN1hHNTJZWElnWTNKbFlYUmxSWEp5YjNJZ1BTQnlaWEYxYVhKbEtDY3VMaTlqYjNKbEwyTnlaV0YwWlVWeWNtOXlKeWs3WEc1MllYSWdZblJ2WVNBOUlDaDBlWEJsYjJZZ2QybHVaRzkzSUNFOVBTQW5kVzVrWldacGJtVmtKeUFtSmlCM2FXNWtiM2N1WW5SdllTQW1KaUIzYVc1a2IzY3VZblJ2WVM1aWFXNWtLSGRwYm1SdmR5a3BJSHg4SUhKbGNYVnBjbVVvSnk0dkxpNHZhR1ZzY0dWeWN5OWlkRzloSnlrN1hHNWNibTF2WkhWc1pTNWxlSEJ2Y25SeklEMGdablZ1WTNScGIyNGdlR2h5UVdSaGNIUmxjaWhqYjI1bWFXY3BJSHRjYmlBZ2NtVjBkWEp1SUc1bGR5QlFjbTl0YVhObEtHWjFibU4wYVc5dUlHUnBjM0JoZEdOb1dHaHlVbVZ4ZFdWemRDaHlaWE52YkhabExDQnlaV3BsWTNRcElIdGNiaUFnSUNCMllYSWdjbVZ4ZFdWemRFUmhkR0VnUFNCamIyNW1hV2N1WkdGMFlUdGNiaUFnSUNCMllYSWdjbVZ4ZFdWemRFaGxZV1JsY25NZ1BTQmpiMjVtYVdjdWFHVmhaR1Z5Y3p0Y2JseHVJQ0FnSUdsbUlDaDFkR2xzY3k1cGMwWnZjbTFFWVhSaEtISmxjWFZsYzNSRVlYUmhLU2tnZTF4dUlDQWdJQ0FnWkdWc1pYUmxJSEpsY1hWbGMzUklaV0ZrWlhKeld5ZERiMjUwWlc1MExWUjVjR1VuWFRzZ0x5OGdUR1YwSUhSb1pTQmljbTkzYzJWeUlITmxkQ0JwZEZ4dUlDQWdJSDFjYmx4dUlDQWdJSFpoY2lCeVpYRjFaWE4wSUQwZ2JtVjNJRmhOVEVoMGRIQlNaWEYxWlhOMEtDazdYRzRnSUNBZ2RtRnlJR3h2WVdSRmRtVnVkQ0E5SUNkdmJuSmxZV1I1YzNSaGRHVmphR0Z1WjJVbk8xeHVJQ0FnSUhaaGNpQjRSRzl0WVdsdUlEMGdabUZzYzJVN1hHNWNiaUFnSUNBdkx5QkdiM0lnU1VVZ09DODVJRU5QVWxNZ2MzVndjRzl5ZEZ4dUlDQWdJQzh2SUU5dWJIa2djM1Z3Y0c5eWRITWdVRTlUVkNCaGJtUWdSMFZVSUdOaGJHeHpJR0Z1WkNCa2IyVnpiaWQwSUhKbGRIVnlibk1nZEdobElISmxjM0J2Ym5ObElHaGxZV1JsY25NdVhHNGdJQ0FnTHk4Z1JFOU9KMVFnWkc4Z2RHaHBjeUJtYjNJZ2RHVnpkR2x1WnlCaUwyTWdXRTFNU0hSMGNGSmxjWFZsYzNRZ2FYTWdiVzlqYTJWa0xDQnViM1FnV0VSdmJXRnBibEpsY1hWbGMzUXVYRzRnSUNBZ2FXWWdLSEJ5YjJObGMzTXVaVzUyTGs1UFJFVmZSVTVXSUNFOVBTQW5kR1Z6ZENjZ0ppWmNiaUFnSUNBZ0lDQWdkSGx3Wlc5bUlIZHBibVJ2ZHlBaFBUMGdKM1Z1WkdWbWFXNWxaQ2NnSmlaY2JpQWdJQ0FnSUNBZ2QybHVaRzkzTGxoRWIyMWhhVzVTWlhGMVpYTjBJQ1ltSUNFb0ozZHBkR2hEY21Wa1pXNTBhV0ZzY3ljZ2FXNGdjbVZ4ZFdWemRDa2dKaVpjYmlBZ0lDQWdJQ0FnSVdselZWSk1VMkZ0WlU5eWFXZHBiaWhqYjI1bWFXY3VkWEpzS1NrZ2UxeHVJQ0FnSUNBZ2NtVnhkV1Z6ZENBOUlHNWxkeUIzYVc1a2IzY3VXRVJ2YldGcGJsSmxjWFZsYzNRb0tUdGNiaUFnSUNBZ0lHeHZZV1JGZG1WdWRDQTlJQ2R2Ym14dllXUW5PMXh1SUNBZ0lDQWdlRVJ2YldGcGJpQTlJSFJ5ZFdVN1hHNGdJQ0FnSUNCeVpYRjFaWE4wTG05dWNISnZaM0psYzNNZ1BTQm1kVzVqZEdsdmJpQm9ZVzVrYkdWUWNtOW5jbVZ6Y3lncElIdDlPMXh1SUNBZ0lDQWdjbVZ4ZFdWemRDNXZiblJwYldWdmRYUWdQU0JtZFc1amRHbHZiaUJvWVc1a2JHVlVhVzFsYjNWMEtDa2dlMzA3WEc0Z0lDQWdmVnh1WEc0Z0lDQWdMeThnU0ZSVVVDQmlZWE5wWXlCaGRYUm9aVzUwYVdOaGRHbHZibHh1SUNBZ0lHbG1JQ2hqYjI1bWFXY3VZWFYwYUNrZ2UxeHVJQ0FnSUNBZ2RtRnlJSFZ6WlhKdVlXMWxJRDBnWTI5dVptbG5MbUYxZEdndWRYTmxjbTVoYldVZ2ZId2dKeWM3WEc0Z0lDQWdJQ0IyWVhJZ2NHRnpjM2R2Y21RZ1BTQmpiMjVtYVdjdVlYVjBhQzV3WVhOemQyOXlaQ0I4ZkNBbkp6dGNiaUFnSUNBZ0lISmxjWFZsYzNSSVpXRmtaWEp6TGtGMWRHaHZjbWw2WVhScGIyNGdQU0FuUW1GemFXTWdKeUFySUdKMGIyRW9kWE5sY201aGJXVWdLeUFuT2ljZ0t5QndZWE56ZDI5eVpDazdYRzRnSUNBZ2ZWeHVYRzRnSUNBZ2NtVnhkV1Z6ZEM1dmNHVnVLR052Ym1acFp5NXRaWFJvYjJRdWRHOVZjSEJsY2tOaGMyVW9LU3dnWW5WcGJHUlZVa3dvWTI5dVptbG5MblZ5YkN3Z1kyOXVabWxuTG5CaGNtRnRjeXdnWTI5dVptbG5MbkJoY21GdGMxTmxjbWxoYkdsNlpYSXBMQ0IwY25WbEtUdGNibHh1SUNBZ0lDOHZJRk5sZENCMGFHVWdjbVZ4ZFdWemRDQjBhVzFsYjNWMElHbHVJRTFUWEc0Z0lDQWdjbVZ4ZFdWemRDNTBhVzFsYjNWMElEMGdZMjl1Wm1sbkxuUnBiV1Z2ZFhRN1hHNWNiaUFnSUNBdkx5Qk1hWE4wWlc0Z1ptOXlJSEpsWVdSNUlITjBZWFJsWEc0Z0lDQWdjbVZ4ZFdWemRGdHNiMkZrUlhabGJuUmRJRDBnWm5WdVkzUnBiMjRnYUdGdVpHeGxURzloWkNncElIdGNiaUFnSUNBZ0lHbG1JQ2doY21WeGRXVnpkQ0I4ZkNBb2NtVnhkV1Z6ZEM1eVpXRmtlVk4wWVhSbElDRTlQU0EwSUNZbUlDRjRSRzl0WVdsdUtTa2dlMXh1SUNBZ0lDQWdJQ0J5WlhSMWNtNDdYRzRnSUNBZ0lDQjlYRzVjYmlBZ0lDQWdJQzh2SUZSb1pTQnlaWEYxWlhOMElHVnljbTl5WldRZ2IzVjBJR0Z1WkNCM1pTQmthV1J1SjNRZ1oyVjBJR0VnY21WemNHOXVjMlVzSUhSb2FYTWdkMmxzYkNCaVpWeHVJQ0FnSUNBZ0x5OGdhR0Z1Wkd4bFpDQmllU0J2Ym1WeWNtOXlJR2x1YzNSbFlXUmNiaUFnSUNBZ0lDOHZJRmRwZEdnZ2IyNWxJR1Y0WTJWd2RHbHZiam9nY21WeGRXVnpkQ0IwYUdGMElIVnphVzVuSUdacGJHVTZJSEJ5YjNSdlkyOXNMQ0J0YjNOMElHSnliM2R6WlhKelhHNGdJQ0FnSUNBdkx5QjNhV3hzSUhKbGRIVnliaUJ6ZEdGMGRYTWdZWE1nTUNCbGRtVnVJSFJvYjNWbmFDQnBkQ2R6SUdFZ2MzVmpZMlZ6YzJaMWJDQnlaWEYxWlhOMFhHNGdJQ0FnSUNCcFppQW9jbVZ4ZFdWemRDNXpkR0YwZFhNZ1BUMDlJREFnSmlZZ0lTaHlaWEYxWlhOMExuSmxjM0J2Ym5ObFZWSk1JQ1ltSUhKbGNYVmxjM1F1Y21WemNHOXVjMlZWVWt3dWFXNWtaWGhQWmlnblptbHNaVG9uS1NBOVBUMGdNQ2twSUh0Y2JpQWdJQ0FnSUNBZ2NtVjBkWEp1TzF4dUlDQWdJQ0FnZlZ4dVhHNGdJQ0FnSUNBdkx5QlFjbVZ3WVhKbElIUm9aU0J5WlhOd2IyNXpaVnh1SUNBZ0lDQWdkbUZ5SUhKbGMzQnZibk5sU0dWaFpHVnljeUE5SUNkblpYUkJiR3hTWlhOd2IyNXpaVWhsWVdSbGNuTW5JR2x1SUhKbGNYVmxjM1FnUHlCd1lYSnpaVWhsWVdSbGNuTW9jbVZ4ZFdWemRDNW5aWFJCYkd4U1pYTndiMjV6WlVobFlXUmxjbk1vS1NrZ09pQnVkV3hzTzF4dUlDQWdJQ0FnZG1GeUlISmxjM0J2Ym5ObFJHRjBZU0E5SUNGamIyNW1hV2N1Y21WemNHOXVjMlZVZVhCbElIeDhJR052Ym1acFp5NXlaWE53YjI1elpWUjVjR1VnUFQwOUlDZDBaWGgwSnlBL0lISmxjWFZsYzNRdWNtVnpjRzl1YzJWVVpYaDBJRG9nY21WeGRXVnpkQzV5WlhOd2IyNXpaVHRjYmlBZ0lDQWdJSFpoY2lCeVpYTndiMjV6WlNBOUlIdGNiaUFnSUNBZ0lDQWdaR0YwWVRvZ2NtVnpjRzl1YzJWRVlYUmhMRnh1SUNBZ0lDQWdJQ0F2THlCSlJTQnpaVzVrY3lBeE1qSXpJR2x1YzNSbFlXUWdiMllnTWpBMElDaG9kSFJ3Y3pvdkwyZHBkR2gxWWk1amIyMHZZWGhwYjNNdllYaHBiM012YVhOemRXVnpMekl3TVNsY2JpQWdJQ0FnSUNBZ2MzUmhkSFZ6T2lCeVpYRjFaWE4wTG5OMFlYUjFjeUE5UFQwZ01USXlNeUEvSURJd05DQTZJSEpsY1hWbGMzUXVjM1JoZEhWekxGeHVJQ0FnSUNBZ0lDQnpkR0YwZFhOVVpYaDBPaUJ5WlhGMVpYTjBMbk4wWVhSMWN5QTlQVDBnTVRJeU15QS9JQ2RPYnlCRGIyNTBaVzUwSnlBNklISmxjWFZsYzNRdWMzUmhkSFZ6VkdWNGRDeGNiaUFnSUNBZ0lDQWdhR1ZoWkdWeWN6b2djbVZ6Y0c5dWMyVklaV0ZrWlhKekxGeHVJQ0FnSUNBZ0lDQmpiMjVtYVdjNklHTnZibVpwWnl4Y2JpQWdJQ0FnSUNBZ2NtVnhkV1Z6ZERvZ2NtVnhkV1Z6ZEZ4dUlDQWdJQ0FnZlR0Y2JseHVJQ0FnSUNBZ2MyVjBkR3hsS0hKbGMyOXNkbVVzSUhKbGFtVmpkQ3dnY21WemNHOXVjMlVwTzF4dVhHNGdJQ0FnSUNBdkx5QkRiR1ZoYmlCMWNDQnlaWEYxWlhOMFhHNGdJQ0FnSUNCeVpYRjFaWE4wSUQwZ2JuVnNiRHRjYmlBZ0lDQjlPMXh1WEc0Z0lDQWdMeThnU0dGdVpHeGxJR3h2ZHlCc1pYWmxiQ0J1WlhSM2IzSnJJR1Z5Y205eWMxeHVJQ0FnSUhKbGNYVmxjM1F1YjI1bGNuSnZjaUE5SUdaMWJtTjBhVzl1SUdoaGJtUnNaVVZ5Y205eUtDa2dlMXh1SUNBZ0lDQWdMeThnVW1WaGJDQmxjbkp2Y25NZ1lYSmxJR2hwWkdSbGJpQm1jbTl0SUhWeklHSjVJSFJvWlNCaWNtOTNjMlZ5WEc0Z0lDQWdJQ0F2THlCdmJtVnljbTl5SUhOb2IzVnNaQ0J2Ym14NUlHWnBjbVVnYVdZZ2FYUW5jeUJoSUc1bGRIZHZjbXNnWlhKeWIzSmNiaUFnSUNBZ0lISmxhbVZqZENoamNtVmhkR1ZGY25KdmNpZ25UbVYwZDI5eWF5QkZjbkp2Y2ljc0lHTnZibVpwWnl3Z2JuVnNiQ3dnY21WeGRXVnpkQ2twTzF4dVhHNGdJQ0FnSUNBdkx5QkRiR1ZoYmlCMWNDQnlaWEYxWlhOMFhHNGdJQ0FnSUNCeVpYRjFaWE4wSUQwZ2JuVnNiRHRjYmlBZ0lDQjlPMXh1WEc0Z0lDQWdMeThnU0dGdVpHeGxJSFJwYldWdmRYUmNiaUFnSUNCeVpYRjFaWE4wTG05dWRHbHRaVzkxZENBOUlHWjFibU4wYVc5dUlHaGhibVJzWlZScGJXVnZkWFFvS1NCN1hHNGdJQ0FnSUNCeVpXcGxZM1FvWTNKbFlYUmxSWEp5YjNJb0ozUnBiV1Z2ZFhRZ2IyWWdKeUFySUdOdmJtWnBaeTUwYVcxbGIzVjBJQ3NnSjIxeklHVjRZMlZsWkdWa0p5d2dZMjl1Wm1sbkxDQW5SVU5QVGs1QlFrOVNWRVZFSnl4Y2JpQWdJQ0FnSUNBZ2NtVnhkV1Z6ZENrcE8xeHVYRzRnSUNBZ0lDQXZMeUJEYkdWaGJpQjFjQ0J5WlhGMVpYTjBYRzRnSUNBZ0lDQnlaWEYxWlhOMElEMGdiblZzYkR0Y2JpQWdJQ0I5TzF4dVhHNGdJQ0FnTHk4Z1FXUmtJSGh6Y21ZZ2FHVmhaR1Z5WEc0Z0lDQWdMeThnVkdocGN5QnBjeUJ2Ym14NUlHUnZibVVnYVdZZ2NuVnVibWx1WnlCcGJpQmhJSE4wWVc1a1lYSmtJR0p5YjNkelpYSWdaVzUyYVhKdmJtMWxiblF1WEc0Z0lDQWdMeThnVTNCbFkybG1hV05oYkd4NUlHNXZkQ0JwWmlCM1pTZHlaU0JwYmlCaElIZGxZaUIzYjNKclpYSXNJRzl5SUhKbFlXTjBMVzVoZEdsMlpTNWNiaUFnSUNCcFppQW9kWFJwYkhNdWFYTlRkR0Z1WkdGeVpFSnliM2R6WlhKRmJuWW9LU2tnZTF4dUlDQWdJQ0FnZG1GeUlHTnZiMnRwWlhNZ1BTQnlaWEYxYVhKbEtDY3VMeTR1TDJobGJIQmxjbk12WTI5dmEybGxjeWNwTzF4dVhHNGdJQ0FnSUNBdkx5QkJaR1FnZUhOeVppQm9aV0ZrWlhKY2JpQWdJQ0FnSUhaaGNpQjRjM0ptVm1Gc2RXVWdQU0FvWTI5dVptbG5MbmRwZEdoRGNtVmtaVzUwYVdGc2N5QjhmQ0JwYzFWU1RGTmhiV1ZQY21sbmFXNG9ZMjl1Wm1sbkxuVnliQ2twSUNZbUlHTnZibVpwWnk1NGMzSm1RMjl2YTJsbFRtRnRaU0EvWEc0Z0lDQWdJQ0FnSUNBZ1kyOXZhMmxsY3k1eVpXRmtLR052Ym1acFp5NTRjM0ptUTI5dmEybGxUbUZ0WlNrZ09seHVJQ0FnSUNBZ0lDQWdJSFZ1WkdWbWFXNWxaRHRjYmx4dUlDQWdJQ0FnYVdZZ0tIaHpjbVpXWVd4MVpTa2dlMXh1SUNBZ0lDQWdJQ0J5WlhGMVpYTjBTR1ZoWkdWeWMxdGpiMjVtYVdjdWVITnlaa2hsWVdSbGNrNWhiV1ZkSUQwZ2VITnlabFpoYkhWbE8xeHVJQ0FnSUNBZ2ZWeHVJQ0FnSUgxY2JseHVJQ0FnSUM4dklFRmtaQ0JvWldGa1pYSnpJSFJ2SUhSb1pTQnlaWEYxWlhOMFhHNGdJQ0FnYVdZZ0tDZHpaWFJTWlhGMVpYTjBTR1ZoWkdWeUp5QnBiaUJ5WlhGMVpYTjBLU0I3WEc0Z0lDQWdJQ0IxZEdsc2N5NW1iM0pGWVdOb0tISmxjWFZsYzNSSVpXRmtaWEp6TENCbWRXNWpkR2x2YmlCelpYUlNaWEYxWlhOMFNHVmhaR1Z5S0haaGJDd2dhMlY1S1NCN1hHNGdJQ0FnSUNBZ0lHbG1JQ2gwZVhCbGIyWWdjbVZ4ZFdWemRFUmhkR0VnUFQwOUlDZDFibVJsWm1sdVpXUW5JQ1ltSUd0bGVTNTBiMHh2ZDJWeVEyRnpaU2dwSUQwOVBTQW5ZMjl1ZEdWdWRDMTBlWEJsSnlrZ2UxeHVJQ0FnSUNBZ0lDQWdJQzh2SUZKbGJXOTJaU0JEYjI1MFpXNTBMVlI1Y0dVZ2FXWWdaR0YwWVNCcGN5QjFibVJsWm1sdVpXUmNiaUFnSUNBZ0lDQWdJQ0JrWld4bGRHVWdjbVZ4ZFdWemRFaGxZV1JsY25OYmEyVjVYVHRjYmlBZ0lDQWdJQ0FnZlNCbGJITmxJSHRjYmlBZ0lDQWdJQ0FnSUNBdkx5QlBkR2hsY25kcGMyVWdZV1JrSUdobFlXUmxjaUIwYnlCMGFHVWdjbVZ4ZFdWemRGeHVJQ0FnSUNBZ0lDQWdJSEpsY1hWbGMzUXVjMlYwVW1WeGRXVnpkRWhsWVdSbGNpaHJaWGtzSUhaaGJDazdYRzRnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJSDBwTzF4dUlDQWdJSDFjYmx4dUlDQWdJQzh2SUVGa1pDQjNhWFJvUTNKbFpHVnVkR2xoYkhNZ2RHOGdjbVZ4ZFdWemRDQnBaaUJ1WldWa1pXUmNiaUFnSUNCcFppQW9ZMjl1Wm1sbkxuZHBkR2hEY21Wa1pXNTBhV0ZzY3lrZ2UxeHVJQ0FnSUNBZ2NtVnhkV1Z6ZEM1M2FYUm9RM0psWkdWdWRHbGhiSE1nUFNCMGNuVmxPMXh1SUNBZ0lIMWNibHh1SUNBZ0lDOHZJRUZrWkNCeVpYTndiMjV6WlZSNWNHVWdkRzhnY21WeGRXVnpkQ0JwWmlCdVpXVmtaV1JjYmlBZ0lDQnBaaUFvWTI5dVptbG5MbkpsYzNCdmJuTmxWSGx3WlNrZ2UxeHVJQ0FnSUNBZ2RISjVJSHRjYmlBZ0lDQWdJQ0FnY21WeGRXVnpkQzV5WlhOd2IyNXpaVlI1Y0dVZ1BTQmpiMjVtYVdjdWNtVnpjRzl1YzJWVWVYQmxPMXh1SUNBZ0lDQWdmU0JqWVhSamFDQW9aU2tnZTF4dUlDQWdJQ0FnSUNBdkx5QkZlSEJsWTNSbFpDQkVUMDFGZUdObGNIUnBiMjRnZEdoeWIzZHVJR0o1SUdKeWIzZHpaWEp6SUc1dmRDQmpiMjF3WVhScFlteGxJRmhOVEVoMGRIQlNaWEYxWlhOMElFeGxkbVZzSURJdVhHNGdJQ0FnSUNBZ0lDOHZJRUoxZEN3Z2RHaHBjeUJqWVc0Z1ltVWdjM1Z3Y0hKbGMzTmxaQ0JtYjNJZ0oycHpiMjRuSUhSNWNHVWdZWE1nYVhRZ1kyRnVJR0psSUhCaGNuTmxaQ0JpZVNCa1pXWmhkV3gwSUNkMGNtRnVjMlp2Y20xU1pYTndiMjV6WlNjZ1puVnVZM1JwYjI0dVhHNGdJQ0FnSUNBZ0lHbG1JQ2hqYjI1bWFXY3VjbVZ6Y0c5dWMyVlVlWEJsSUNFOVBTQW5hbk52YmljcElIdGNiaUFnSUNBZ0lDQWdJQ0IwYUhKdmR5QmxPMXh1SUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0I5WEc0Z0lDQWdmVnh1WEc0Z0lDQWdMeThnU0dGdVpHeGxJSEJ5YjJkeVpYTnpJR2xtSUc1bFpXUmxaRnh1SUNBZ0lHbG1JQ2gwZVhCbGIyWWdZMjl1Wm1sbkxtOXVSRzkzYm14dllXUlFjbTluY21WemN5QTlQVDBnSjJaMWJtTjBhVzl1SnlrZ2UxeHVJQ0FnSUNBZ2NtVnhkV1Z6ZEM1aFpHUkZkbVZ1ZEV4cGMzUmxibVZ5S0Nkd2NtOW5jbVZ6Y3ljc0lHTnZibVpwWnk1dmJrUnZkMjVzYjJGa1VISnZaM0psYzNNcE8xeHVJQ0FnSUgxY2JseHVJQ0FnSUM4dklFNXZkQ0JoYkd3Z1luSnZkM05sY25NZ2MzVndjRzl5ZENCMWNHeHZZV1FnWlhabGJuUnpYRzRnSUNBZ2FXWWdLSFI1Y0dWdlppQmpiMjVtYVdjdWIyNVZjR3h2WVdSUWNtOW5jbVZ6Y3lBOVBUMGdKMloxYm1OMGFXOXVKeUFtSmlCeVpYRjFaWE4wTG5Wd2JHOWhaQ2tnZTF4dUlDQWdJQ0FnY21WeGRXVnpkQzUxY0d4dllXUXVZV1JrUlhabGJuUk1hWE4wWlc1bGNpZ25jSEp2WjNKbGMzTW5MQ0JqYjI1bWFXY3ViMjVWY0d4dllXUlFjbTluY21WemN5azdYRzRnSUNBZ2ZWeHVYRzRnSUNBZ2FXWWdLR052Ym1acFp5NWpZVzVqWld4VWIydGxiaWtnZTF4dUlDQWdJQ0FnTHk4Z1NHRnVaR3hsSUdOaGJtTmxiR3hoZEdsdmJseHVJQ0FnSUNBZ1kyOXVabWxuTG1OaGJtTmxiRlJ2YTJWdUxuQnliMjFwYzJVdWRHaGxiaWhtZFc1amRHbHZiaUJ2YmtOaGJtTmxiR1ZrS0dOaGJtTmxiQ2tnZTF4dUlDQWdJQ0FnSUNCcFppQW9JWEpsY1hWbGMzUXBJSHRjYmlBZ0lDQWdJQ0FnSUNCeVpYUjFjbTQ3WEc0Z0lDQWdJQ0FnSUgxY2JseHVJQ0FnSUNBZ0lDQnlaWEYxWlhOMExtRmliM0owS0NrN1hHNGdJQ0FnSUNBZ0lISmxhbVZqZENoallXNWpaV3dwTzF4dUlDQWdJQ0FnSUNBdkx5QkRiR1ZoYmlCMWNDQnlaWEYxWlhOMFhHNGdJQ0FnSUNBZ0lISmxjWFZsYzNRZ1BTQnVkV3hzTzF4dUlDQWdJQ0FnZlNrN1hHNGdJQ0FnZlZ4dVhHNGdJQ0FnYVdZZ0tISmxjWFZsYzNSRVlYUmhJRDA5UFNCMWJtUmxabWx1WldRcElIdGNiaUFnSUNBZ0lISmxjWFZsYzNSRVlYUmhJRDBnYm5Wc2JEdGNiaUFnSUNCOVhHNWNiaUFnSUNBdkx5QlRaVzVrSUhSb1pTQnlaWEYxWlhOMFhHNGdJQ0FnY21WeGRXVnpkQzV6Wlc1a0tISmxjWFZsYzNSRVlYUmhLVHRjYmlBZ2ZTazdYRzU5TzF4dUlpd2lKM1Z6WlNCemRISnBZM1FuTzF4dVhHNTJZWElnZFhScGJITWdQU0J5WlhGMWFYSmxLQ2N1TDNWMGFXeHpKeWs3WEc1MllYSWdZbWx1WkNBOUlISmxjWFZwY21Vb0p5NHZhR1ZzY0dWeWN5OWlhVzVrSnlrN1hHNTJZWElnUVhocGIzTWdQU0J5WlhGMWFYSmxLQ2N1TDJOdmNtVXZRWGhwYjNNbktUdGNiblpoY2lCa1pXWmhkV3gwY3lBOUlISmxjWFZwY21Vb0p5NHZaR1ZtWVhWc2RITW5LVHRjYmx4dUx5b3FYRzRnS2lCRGNtVmhkR1VnWVc0Z2FXNXpkR0Z1WTJVZ2IyWWdRWGhwYjNOY2JpQXFYRzRnS2lCQWNHRnlZVzBnZTA5aWFtVmpkSDBnWkdWbVlYVnNkRU52Ym1acFp5QlVhR1VnWkdWbVlYVnNkQ0JqYjI1bWFXY2dabTl5SUhSb1pTQnBibk4wWVc1alpWeHVJQ29nUUhKbGRIVnliaUI3UVhocGIzTjlJRUVnYm1WM0lHbHVjM1JoYm1ObElHOW1JRUY0YVc5elhHNGdLaTljYm1aMWJtTjBhVzl1SUdOeVpXRjBaVWx1YzNSaGJtTmxLR1JsWm1GMWJIUkRiMjVtYVdjcElIdGNiaUFnZG1GeUlHTnZiblJsZUhRZ1BTQnVaWGNnUVhocGIzTW9aR1ZtWVhWc2RFTnZibVpwWnlrN1hHNGdJSFpoY2lCcGJuTjBZVzVqWlNBOUlHSnBibVFvUVhocGIzTXVjSEp2ZEc5MGVYQmxMbkpsY1hWbGMzUXNJR052Ym5SbGVIUXBPMXh1WEc0Z0lDOHZJRU52Y0hrZ1lYaHBiM011Y0hKdmRHOTBlWEJsSUhSdklHbHVjM1JoYm1ObFhHNGdJSFYwYVd4ekxtVjRkR1Z1WkNocGJuTjBZVzVqWlN3Z1FYaHBiM011Y0hKdmRHOTBlWEJsTENCamIyNTBaWGgwS1R0Y2JseHVJQ0F2THlCRGIzQjVJR052Ym5SbGVIUWdkRzhnYVc1emRHRnVZMlZjYmlBZ2RYUnBiSE11WlhoMFpXNWtLR2x1YzNSaGJtTmxMQ0JqYjI1MFpYaDBLVHRjYmx4dUlDQnlaWFIxY200Z2FXNXpkR0Z1WTJVN1hHNTlYRzVjYmk4dklFTnlaV0YwWlNCMGFHVWdaR1ZtWVhWc2RDQnBibk4wWVc1alpTQjBieUJpWlNCbGVIQnZjblJsWkZ4dWRtRnlJR0Y0YVc5eklEMGdZM0psWVhSbFNXNXpkR0Z1WTJVb1pHVm1ZWFZzZEhNcE8xeHVYRzR2THlCRmVIQnZjMlVnUVhocGIzTWdZMnhoYzNNZ2RHOGdZV3hzYjNjZ1kyeGhjM01nYVc1b1pYSnBkR0Z1WTJWY2JtRjRhVzl6TGtGNGFXOXpJRDBnUVhocGIzTTdYRzVjYmk4dklFWmhZM1J2Y25rZ1ptOXlJR055WldGMGFXNW5JRzVsZHlCcGJuTjBZVzVqWlhOY2JtRjRhVzl6TG1OeVpXRjBaU0E5SUdaMWJtTjBhVzl1SUdOeVpXRjBaU2hwYm5OMFlXNWpaVU52Ym1acFp5a2dlMXh1SUNCeVpYUjFjbTRnWTNKbFlYUmxTVzV6ZEdGdVkyVW9kWFJwYkhNdWJXVnlaMlVvWkdWbVlYVnNkSE1zSUdsdWMzUmhibU5sUTI5dVptbG5LU2s3WEc1OU8xeHVYRzR2THlCRmVIQnZjMlVnUTJGdVkyVnNJQ1lnUTJGdVkyVnNWRzlyWlc1Y2JtRjRhVzl6TGtOaGJtTmxiQ0E5SUhKbGNYVnBjbVVvSnk0dlkyRnVZMlZzTDBOaGJtTmxiQ2NwTzF4dVlYaHBiM011UTJGdVkyVnNWRzlyWlc0Z1BTQnlaWEYxYVhKbEtDY3VMMk5oYm1ObGJDOURZVzVqWld4VWIydGxiaWNwTzF4dVlYaHBiM011YVhORFlXNWpaV3dnUFNCeVpYRjFhWEpsS0NjdUwyTmhibU5sYkM5cGMwTmhibU5sYkNjcE8xeHVYRzR2THlCRmVIQnZjMlVnWVd4c0wzTndjbVZoWkZ4dVlYaHBiM011WVd4c0lEMGdablZ1WTNScGIyNGdZV3hzS0hCeWIyMXBjMlZ6S1NCN1hHNGdJSEpsZEhWeWJpQlFjbTl0YVhObExtRnNiQ2h3Y205dGFYTmxjeWs3WEc1OU8xeHVZWGhwYjNNdWMzQnlaV0ZrSUQwZ2NtVnhkV2x5WlNnbkxpOW9aV3h3WlhKekwzTndjbVZoWkNjcE8xeHVYRzV0YjJSMWJHVXVaWGh3YjNKMGN5QTlJR0Y0YVc5ek8xeHVYRzR2THlCQmJHeHZkeUIxYzJVZ2IyWWdaR1ZtWVhWc2RDQnBiWEJ2Y25RZ2MzbHVkR0Y0SUdsdUlGUjVjR1ZUWTNKcGNIUmNibTF2WkhWc1pTNWxlSEJ2Y25SekxtUmxabUYxYkhRZ1BTQmhlR2x2Y3p0Y2JpSXNJaWQxYzJVZ2MzUnlhV04wSnp0Y2JseHVMeW9xWEc0Z0tpQkJJR0JEWVc1alpXeGdJR2x6SUdGdUlHOWlhbVZqZENCMGFHRjBJR2x6SUhSb2NtOTNiaUIzYUdWdUlHRnVJRzl3WlhKaGRHbHZiaUJwY3lCallXNWpaV3hsWkM1Y2JpQXFYRzRnS2lCQVkyeGhjM05jYmlBcUlFQndZWEpoYlNCN2MzUnlhVzVuUFgwZ2JXVnpjMkZuWlNCVWFHVWdiV1Z6YzJGblpTNWNiaUFxTDF4dVpuVnVZM1JwYjI0Z1EyRnVZMlZzS0cxbGMzTmhaMlVwSUh0Y2JpQWdkR2hwY3k1dFpYTnpZV2RsSUQwZ2JXVnpjMkZuWlR0Y2JuMWNibHh1UTJGdVkyVnNMbkJ5YjNSdmRIbHdaUzUwYjFOMGNtbHVaeUE5SUdaMWJtTjBhVzl1SUhSdlUzUnlhVzVuS0NrZ2UxeHVJQ0J5WlhSMWNtNGdKME5oYm1ObGJDY2dLeUFvZEdocGN5NXRaWE56WVdkbElEOGdKem9nSnlBcklIUm9hWE11YldWemMyRm5aU0E2SUNjbktUdGNibjA3WEc1Y2JrTmhibU5sYkM1d2NtOTBiM1I1Y0dVdVgxOURRVTVEUlV4Zlh5QTlJSFJ5ZFdVN1hHNWNibTF2WkhWc1pTNWxlSEJ2Y25SeklEMGdRMkZ1WTJWc08xeHVJaXdpSjNWelpTQnpkSEpwWTNRbk8xeHVYRzUyWVhJZ1EyRnVZMlZzSUQwZ2NtVnhkV2x5WlNnbkxpOURZVzVqWld3bktUdGNibHh1THlvcVhHNGdLaUJCSUdCRFlXNWpaV3hVYjJ0bGJtQWdhWE1nWVc0Z2IySnFaV04wSUhSb1lYUWdZMkZ1SUdKbElIVnpaV1FnZEc4Z2NtVnhkV1Z6ZENCallXNWpaV3hzWVhScGIyNGdiMllnWVc0Z2IzQmxjbUYwYVc5dUxseHVJQ3BjYmlBcUlFQmpiR0Z6YzF4dUlDb2dRSEJoY21GdElIdEdkVzVqZEdsdmJuMGdaWGhsWTNWMGIzSWdWR2hsSUdWNFpXTjFkRzl5SUdaMWJtTjBhVzl1TGx4dUlDb3ZYRzVtZFc1amRHbHZiaUJEWVc1alpXeFViMnRsYmlobGVHVmpkWFJ2Y2lrZ2UxeHVJQ0JwWmlBb2RIbHdaVzltSUdWNFpXTjFkRzl5SUNFOVBTQW5ablZ1WTNScGIyNG5LU0I3WEc0Z0lDQWdkR2h5YjNjZ2JtVjNJRlI1Y0dWRmNuSnZjaWduWlhobFkzVjBiM0lnYlhWemRDQmlaU0JoSUdaMWJtTjBhVzl1TGljcE8xeHVJQ0I5WEc1Y2JpQWdkbUZ5SUhKbGMyOXNkbVZRY205dGFYTmxPMXh1SUNCMGFHbHpMbkJ5YjIxcGMyVWdQU0J1WlhjZ1VISnZiV2x6WlNobWRXNWpkR2x2YmlCd2NtOXRhWE5sUlhobFkzVjBiM0lvY21WemIyeDJaU2tnZTF4dUlDQWdJSEpsYzI5c2RtVlFjbTl0YVhObElEMGdjbVZ6YjJ4MlpUdGNiaUFnZlNrN1hHNWNiaUFnZG1GeUlIUnZhMlZ1SUQwZ2RHaHBjenRjYmlBZ1pYaGxZM1YwYjNJb1puVnVZM1JwYjI0Z1kyRnVZMlZzS0cxbGMzTmhaMlVwSUh0Y2JpQWdJQ0JwWmlBb2RHOXJaVzR1Y21WaGMyOXVLU0I3WEc0Z0lDQWdJQ0F2THlCRFlXNWpaV3hzWVhScGIyNGdhR0Z6SUdGc2NtVmhaSGtnWW1WbGJpQnlaWEYxWlhOMFpXUmNiaUFnSUNBZ0lISmxkSFZ5Ymp0Y2JpQWdJQ0I5WEc1Y2JpQWdJQ0IwYjJ0bGJpNXlaV0Z6YjI0Z1BTQnVaWGNnUTJGdVkyVnNLRzFsYzNOaFoyVXBPMXh1SUNBZ0lISmxjMjlzZG1WUWNtOXRhWE5sS0hSdmEyVnVMbkpsWVhOdmJpazdYRzRnSUgwcE8xeHVmVnh1WEc0dktpcGNiaUFxSUZSb2NtOTNjeUJoSUdCRFlXNWpaV3hnSUdsbUlHTmhibU5sYkd4aGRHbHZiaUJvWVhNZ1ltVmxiaUJ5WlhGMVpYTjBaV1F1WEc0Z0tpOWNia05oYm1ObGJGUnZhMlZ1TG5CeWIzUnZkSGx3WlM1MGFISnZkMGxtVW1WeGRXVnpkR1ZrSUQwZ1puVnVZM1JwYjI0Z2RHaHliM2RKWmxKbGNYVmxjM1JsWkNncElIdGNiaUFnYVdZZ0tIUm9hWE11Y21WaGMyOXVLU0I3WEc0Z0lDQWdkR2h5YjNjZ2RHaHBjeTV5WldGemIyNDdYRzRnSUgxY2JuMDdYRzVjYmk4cUtseHVJQ29nVW1WMGRYSnVjeUJoYmlCdlltcGxZM1FnZEdoaGRDQmpiMjUwWVdsdWN5QmhJRzVsZHlCZ1EyRnVZMlZzVkc5clpXNWdJR0Z1WkNCaElHWjFibU4wYVc5dUlIUm9ZWFFzSUhkb1pXNGdZMkZzYkdWa0xGeHVJQ29nWTJGdVkyVnNjeUIwYUdVZ1lFTmhibU5sYkZSdmEyVnVZQzVjYmlBcUwxeHVRMkZ1WTJWc1ZHOXJaVzR1YzI5MWNtTmxJRDBnWm5WdVkzUnBiMjRnYzI5MWNtTmxLQ2tnZTF4dUlDQjJZWElnWTJGdVkyVnNPMXh1SUNCMllYSWdkRzlyWlc0Z1BTQnVaWGNnUTJGdVkyVnNWRzlyWlc0b1puVnVZM1JwYjI0Z1pYaGxZM1YwYjNJb1l5a2dlMXh1SUNBZ0lHTmhibU5sYkNBOUlHTTdYRzRnSUgwcE8xeHVJQ0J5WlhSMWNtNGdlMXh1SUNBZ0lIUnZhMlZ1T2lCMGIydGxiaXhjYmlBZ0lDQmpZVzVqWld3NklHTmhibU5sYkZ4dUlDQjlPMXh1ZlR0Y2JseHViVzlrZFd4bExtVjRjRzl5ZEhNZ1BTQkRZVzVqWld4VWIydGxianRjYmlJc0lpZDFjMlVnYzNSeWFXTjBKenRjYmx4dWJXOWtkV3hsTG1WNGNHOXlkSE1nUFNCbWRXNWpkR2x2YmlCcGMwTmhibU5sYkNoMllXeDFaU2tnZTF4dUlDQnlaWFIxY200Z0lTRW9kbUZzZFdVZ0ppWWdkbUZzZFdVdVgxOURRVTVEUlV4Zlh5azdYRzU5TzF4dUlpd2lKM1Z6WlNCemRISnBZM1FuTzF4dVhHNTJZWElnWkdWbVlYVnNkSE1nUFNCeVpYRjFhWEpsS0NjdUx5NHVMMlJsWm1GMWJIUnpKeWs3WEc1MllYSWdkWFJwYkhNZ1BTQnlaWEYxYVhKbEtDY3VMeTR1TDNWMGFXeHpKeWs3WEc1MllYSWdTVzUwWlhKalpYQjBiM0pOWVc1aFoyVnlJRDBnY21WeGRXbHlaU2duTGk5SmJuUmxjbU5sY0hSdmNrMWhibUZuWlhJbktUdGNiblpoY2lCa2FYTndZWFJqYUZKbGNYVmxjM1FnUFNCeVpYRjFhWEpsS0NjdUwyUnBjM0JoZEdOb1VtVnhkV1Z6ZENjcE8xeHVYRzR2S2lwY2JpQXFJRU55WldGMFpTQmhJRzVsZHlCcGJuTjBZVzVqWlNCdlppQkJlR2x2YzF4dUlDcGNiaUFxSUVCd1lYSmhiU0I3VDJKcVpXTjBmU0JwYm5OMFlXNWpaVU52Ym1acFp5QlVhR1VnWkdWbVlYVnNkQ0JqYjI1bWFXY2dabTl5SUhSb1pTQnBibk4wWVc1alpWeHVJQ292WEc1bWRXNWpkR2x2YmlCQmVHbHZjeWhwYm5OMFlXNWpaVU52Ym1acFp5a2dlMXh1SUNCMGFHbHpMbVJsWm1GMWJIUnpJRDBnYVc1emRHRnVZMlZEYjI1bWFXYzdYRzRnSUhSb2FYTXVhVzUwWlhKalpYQjBiM0p6SUQwZ2UxeHVJQ0FnSUhKbGNYVmxjM1E2SUc1bGR5QkpiblJsY21ObGNIUnZjazFoYm1GblpYSW9LU3hjYmlBZ0lDQnlaWE53YjI1elpUb2dibVYzSUVsdWRHVnlZMlZ3ZEc5eVRXRnVZV2RsY2lncFhHNGdJSDA3WEc1OVhHNWNiaThxS2x4dUlDb2dSR2x6Y0dGMFkyZ2dZU0J5WlhGMVpYTjBYRzRnS2x4dUlDb2dRSEJoY21GdElIdFBZbXBsWTNSOUlHTnZibVpwWnlCVWFHVWdZMjl1Wm1sbklITndaV05wWm1saklHWnZjaUIwYUdseklISmxjWFZsYzNRZ0tHMWxjbWRsWkNCM2FYUm9JSFJvYVhNdVpHVm1ZWFZzZEhNcFhHNGdLaTljYmtGNGFXOXpMbkJ5YjNSdmRIbHdaUzV5WlhGMVpYTjBJRDBnWm5WdVkzUnBiMjRnY21WeGRXVnpkQ2hqYjI1bWFXY3BJSHRjYmlBZ0x5cGxjMnhwYm5RZ2JtOHRjR0Z5WVcwdGNtVmhjM05wWjI0Nk1Db3ZYRzRnSUM4dklFRnNiRzkzSUdadmNpQmhlR2x2Y3lnblpYaGhiWEJzWlM5MWNtd25XeXdnWTI5dVptbG5YU2tnWVNCc1lTQm1aWFJqYUNCQlVFbGNiaUFnYVdZZ0tIUjVjR1Z2WmlCamIyNW1hV2NnUFQwOUlDZHpkSEpwYm1jbktTQjdYRzRnSUNBZ1kyOXVabWxuSUQwZ2RYUnBiSE11YldWeVoyVW9lMXh1SUNBZ0lDQWdkWEpzT2lCaGNtZDFiV1Z1ZEhOYk1GMWNiaUFnSUNCOUxDQmhjbWQxYldWdWRITmJNVjBwTzF4dUlDQjlYRzVjYmlBZ1kyOXVabWxuSUQwZ2RYUnBiSE11YldWeVoyVW9aR1ZtWVhWc2RITXNJSHR0WlhSb2IyUTZJQ2RuWlhRbmZTd2dkR2hwY3k1a1pXWmhkV3gwY3l3Z1kyOXVabWxuS1R0Y2JpQWdZMjl1Wm1sbkxtMWxkR2h2WkNBOUlHTnZibVpwWnk1dFpYUm9iMlF1ZEc5TWIzZGxja05oYzJVb0tUdGNibHh1SUNBdkx5QkliMjlySUhWd0lHbHVkR1Z5WTJWd2RHOXljeUJ0YVdSa2JHVjNZWEpsWEc0Z0lIWmhjaUJqYUdGcGJpQTlJRnRrYVhOd1lYUmphRkpsY1hWbGMzUXNJSFZ1WkdWbWFXNWxaRjA3WEc0Z0lIWmhjaUJ3Y205dGFYTmxJRDBnVUhKdmJXbHpaUzV5WlhOdmJIWmxLR052Ym1acFp5azdYRzVjYmlBZ2RHaHBjeTVwYm5SbGNtTmxjSFJ2Y25NdWNtVnhkV1Z6ZEM1bWIzSkZZV05vS0daMWJtTjBhVzl1SUhWdWMyaHBablJTWlhGMVpYTjBTVzUwWlhKalpYQjBiM0p6S0dsdWRHVnlZMlZ3ZEc5eUtTQjdYRzRnSUNBZ1kyaGhhVzR1ZFc1emFHbG1kQ2hwYm5SbGNtTmxjSFJ2Y2k1bWRXeG1hV3hzWldRc0lHbHVkR1Z5WTJWd2RHOXlMbkpsYW1WamRHVmtLVHRjYmlBZ2ZTazdYRzVjYmlBZ2RHaHBjeTVwYm5SbGNtTmxjSFJ2Y25NdWNtVnpjRzl1YzJVdVptOXlSV0ZqYUNobWRXNWpkR2x2YmlCd2RYTm9VbVZ6Y0c5dWMyVkpiblJsY21ObGNIUnZjbk1vYVc1MFpYSmpaWEIwYjNJcElIdGNiaUFnSUNCamFHRnBiaTV3ZFhOb0tHbHVkR1Z5WTJWd2RHOXlMbVoxYkdacGJHeGxaQ3dnYVc1MFpYSmpaWEIwYjNJdWNtVnFaV04wWldRcE8xeHVJQ0I5S1R0Y2JseHVJQ0IzYUdsc1pTQW9ZMmhoYVc0dWJHVnVaM1JvS1NCN1hHNGdJQ0FnY0hKdmJXbHpaU0E5SUhCeWIyMXBjMlV1ZEdobGJpaGphR0ZwYmk1emFHbG1kQ2dwTENCamFHRnBiaTV6YUdsbWRDZ3BLVHRjYmlBZ2ZWeHVYRzRnSUhKbGRIVnliaUJ3Y205dGFYTmxPMXh1ZlR0Y2JseHVMeThnVUhKdmRtbGtaU0JoYkdsaGMyVnpJR1p2Y2lCemRYQndiM0owWldRZ2NtVnhkV1Z6ZENCdFpYUm9iMlJ6WEc1MWRHbHNjeTVtYjNKRllXTm9LRnNuWkdWc1pYUmxKeXdnSjJkbGRDY3NJQ2RvWldGa0p5d2dKMjl3ZEdsdmJuTW5YU3dnWm5WdVkzUnBiMjRnWm05eVJXRmphRTFsZEdodlpFNXZSR0YwWVNodFpYUm9iMlFwSUh0Y2JpQWdMeXBsYzJ4cGJuUWdablZ1WXkxdVlXMWxjem93S2k5Y2JpQWdRWGhwYjNNdWNISnZkRzkwZVhCbFcyMWxkR2h2WkYwZ1BTQm1kVzVqZEdsdmJpaDFjbXdzSUdOdmJtWnBaeWtnZTF4dUlDQWdJSEpsZEhWeWJpQjBhR2x6TG5KbGNYVmxjM1FvZFhScGJITXViV1Z5WjJVb1kyOXVabWxuSUh4OElIdDlMQ0I3WEc0Z0lDQWdJQ0J0WlhSb2IyUTZJRzFsZEdodlpDeGNiaUFnSUNBZ0lIVnliRG9nZFhKc1hHNGdJQ0FnZlNrcE8xeHVJQ0I5TzF4dWZTazdYRzVjYm5WMGFXeHpMbVp2Y2tWaFkyZ29XeWR3YjNOMEp5d2dKM0IxZENjc0lDZHdZWFJqYUNkZExDQm1kVzVqZEdsdmJpQm1iM0pGWVdOb1RXVjBhRzlrVjJsMGFFUmhkR0VvYldWMGFHOWtLU0I3WEc0Z0lDOHFaWE5zYVc1MElHWjFibU10Ym1GdFpYTTZNQ292WEc0Z0lFRjRhVzl6TG5CeWIzUnZkSGx3WlZ0dFpYUm9iMlJkSUQwZ1puVnVZM1JwYjI0b2RYSnNMQ0JrWVhSaExDQmpiMjVtYVdjcElIdGNiaUFnSUNCeVpYUjFjbTRnZEdocGN5NXlaWEYxWlhOMEtIVjBhV3h6TG0xbGNtZGxLR052Ym1acFp5QjhmQ0I3ZlN3Z2UxeHVJQ0FnSUNBZ2JXVjBhRzlrT2lCdFpYUm9iMlFzWEc0Z0lDQWdJQ0IxY213NklIVnliQ3hjYmlBZ0lDQWdJR1JoZEdFNklHUmhkR0ZjYmlBZ0lDQjlLU2s3WEc0Z0lIMDdYRzU5S1R0Y2JseHViVzlrZFd4bExtVjRjRzl5ZEhNZ1BTQkJlR2x2Y3p0Y2JpSXNJaWQxYzJVZ2MzUnlhV04wSnp0Y2JseHVkbUZ5SUhWMGFXeHpJRDBnY21WeGRXbHlaU2duTGk4dUxpOTFkR2xzY3ljcE8xeHVYRzVtZFc1amRHbHZiaUJKYm5SbGNtTmxjSFJ2Y2sxaGJtRm5aWElvS1NCN1hHNGdJSFJvYVhNdWFHRnVaR3hsY25NZ1BTQmJYVHRjYm4xY2JseHVMeW9xWEc0Z0tpQkJaR1FnWVNCdVpYY2dhVzUwWlhKalpYQjBiM0lnZEc4Z2RHaGxJSE4wWVdOclhHNGdLbHh1SUNvZ1FIQmhjbUZ0SUh0R2RXNWpkR2x2Ym4wZ1puVnNabWxzYkdWa0lGUm9aU0JtZFc1amRHbHZiaUIwYnlCb1lXNWtiR1VnWUhSb1pXNWdJR1p2Y2lCaElHQlFjbTl0YVhObFlGeHVJQ29nUUhCaGNtRnRJSHRHZFc1amRHbHZibjBnY21WcVpXTjBaV1FnVkdobElHWjFibU4wYVc5dUlIUnZJR2hoYm1Sc1pTQmdjbVZxWldOMFlDQm1iM0lnWVNCZ1VISnZiV2x6WldCY2JpQXFYRzRnS2lCQWNtVjBkWEp1SUh0T2RXMWlaWEo5SUVGdUlFbEVJSFZ6WldRZ2RHOGdjbVZ0YjNabElHbHVkR1Z5WTJWd2RHOXlJR3hoZEdWeVhHNGdLaTljYmtsdWRHVnlZMlZ3ZEc5eVRXRnVZV2RsY2k1d2NtOTBiM1I1Y0dVdWRYTmxJRDBnWm5WdVkzUnBiMjRnZFhObEtHWjFiR1pwYkd4bFpDd2djbVZxWldOMFpXUXBJSHRjYmlBZ2RHaHBjeTVvWVc1a2JHVnljeTV3ZFhOb0tIdGNiaUFnSUNCbWRXeG1hV3hzWldRNklHWjFiR1pwYkd4bFpDeGNiaUFnSUNCeVpXcGxZM1JsWkRvZ2NtVnFaV04wWldSY2JpQWdmU2s3WEc0Z0lISmxkSFZ5YmlCMGFHbHpMbWhoYm1Sc1pYSnpMbXhsYm1kMGFDQXRJREU3WEc1OU8xeHVYRzR2S2lwY2JpQXFJRkpsYlc5MlpTQmhiaUJwYm5SbGNtTmxjSFJ2Y2lCbWNtOXRJSFJvWlNCemRHRmphMXh1SUNwY2JpQXFJRUJ3WVhKaGJTQjdUblZ0WW1WeWZTQnBaQ0JVYUdVZ1NVUWdkR2hoZENCM1lYTWdjbVYwZFhKdVpXUWdZbmtnWUhWelpXQmNiaUFxTDF4dVNXNTBaWEpqWlhCMGIzSk5ZVzVoWjJWeUxuQnliM1J2ZEhsd1pTNWxhbVZqZENBOUlHWjFibU4wYVc5dUlHVnFaV04wS0dsa0tTQjdYRzRnSUdsbUlDaDBhR2x6TG1oaGJtUnNaWEp6VzJsa1hTa2dlMXh1SUNBZ0lIUm9hWE11YUdGdVpHeGxjbk5iYVdSZElEMGdiblZzYkR0Y2JpQWdmVnh1ZlR0Y2JseHVMeW9xWEc0Z0tpQkpkR1Z5WVhSbElHOTJaWElnWVd4c0lIUm9aU0J5WldkcGMzUmxjbVZrSUdsdWRHVnlZMlZ3ZEc5eWMxeHVJQ3BjYmlBcUlGUm9hWE1nYldWMGFHOWtJR2x6SUhCaGNuUnBZM1ZzWVhKc2VTQjFjMlZtZFd3Z1ptOXlJSE5yYVhCd2FXNW5JRzkyWlhJZ1lXNTVYRzRnS2lCcGJuUmxjbU5sY0hSdmNuTWdkR2hoZENCdFlYa2dhR0YyWlNCaVpXTnZiV1VnWUc1MWJHeGdJR05oYkd4cGJtY2dZR1ZxWldOMFlDNWNiaUFxWEc0Z0tpQkFjR0Z5WVcwZ2UwWjFibU4wYVc5dWZTQm1iaUJVYUdVZ1puVnVZM1JwYjI0Z2RHOGdZMkZzYkNCbWIzSWdaV0ZqYUNCcGJuUmxjbU5sY0hSdmNseHVJQ292WEc1SmJuUmxjbU5sY0hSdmNrMWhibUZuWlhJdWNISnZkRzkwZVhCbExtWnZja1ZoWTJnZ1BTQm1kVzVqZEdsdmJpQm1iM0pGWVdOb0tHWnVLU0I3WEc0Z0lIVjBhV3h6TG1admNrVmhZMmdvZEdocGN5NW9ZVzVrYkdWeWN5d2dablZ1WTNScGIyNGdabTl5UldGamFFaGhibVJzWlhJb2FDa2dlMXh1SUNBZ0lHbG1JQ2hvSUNFOVBTQnVkV3hzS1NCN1hHNGdJQ0FnSUNCbWJpaG9LVHRjYmlBZ0lDQjlYRzRnSUgwcE8xeHVmVHRjYmx4dWJXOWtkV3hsTG1WNGNHOXlkSE1nUFNCSmJuUmxjbU5sY0hSdmNrMWhibUZuWlhJN1hHNGlMQ0luZFhObElITjBjbWxqZENjN1hHNWNiblpoY2lCbGJtaGhibU5sUlhKeWIzSWdQU0J5WlhGMWFYSmxLQ2N1TDJWdWFHRnVZMlZGY25KdmNpY3BPMXh1WEc0dktpcGNiaUFxSUVOeVpXRjBaU0JoYmlCRmNuSnZjaUIzYVhSb0lIUm9aU0J6Y0dWamFXWnBaV1FnYldWemMyRm5aU3dnWTI5dVptbG5MQ0JsY25KdmNpQmpiMlJsTENCeVpYRjFaWE4wSUdGdVpDQnlaWE53YjI1elpTNWNiaUFxWEc0Z0tpQkFjR0Z5WVcwZ2UzTjBjbWx1WjMwZ2JXVnpjMkZuWlNCVWFHVWdaWEp5YjNJZ2JXVnpjMkZuWlM1Y2JpQXFJRUJ3WVhKaGJTQjdUMkpxWldOMGZTQmpiMjVtYVdjZ1ZHaGxJR052Ym1acFp5NWNiaUFxSUVCd1lYSmhiU0I3YzNSeWFXNW5mU0JiWTI5a1pWMGdWR2hsSUdWeWNtOXlJR052WkdVZ0tHWnZjaUJsZUdGdGNHeGxMQ0FuUlVOUFRrNUJRazlTVkVWRUp5a3VYRzRnS2lCQWNHRnlZVzBnZTA5aWFtVmpkSDBnVzNKbGNYVmxjM1JkSUZSb1pTQnlaWEYxWlhOMExseHVJQ29nUUhCaGNtRnRJSHRQWW1wbFkzUjlJRnR5WlhOd2IyNXpaVjBnVkdobElISmxjM0J2Ym5ObExseHVJQ29nUUhKbGRIVnlibk1nZTBWeWNtOXlmU0JVYUdVZ1kzSmxZWFJsWkNCbGNuSnZjaTVjYmlBcUwxeHViVzlrZFd4bExtVjRjRzl5ZEhNZ1BTQm1kVzVqZEdsdmJpQmpjbVZoZEdWRmNuSnZjaWh0WlhOellXZGxMQ0JqYjI1bWFXY3NJR052WkdVc0lISmxjWFZsYzNRc0lISmxjM0J2Ym5ObEtTQjdYRzRnSUhaaGNpQmxjbkp2Y2lBOUlHNWxkeUJGY25KdmNpaHRaWE56WVdkbEtUdGNiaUFnY21WMGRYSnVJR1Z1YUdGdVkyVkZjbkp2Y2lobGNuSnZjaXdnWTI5dVptbG5MQ0JqYjJSbExDQnlaWEYxWlhOMExDQnlaWE53YjI1elpTazdYRzU5TzF4dUlpd2lKM1Z6WlNCemRISnBZM1FuTzF4dVhHNTJZWElnZFhScGJITWdQU0J5WlhGMWFYSmxLQ2N1THk0dUwzVjBhV3h6SnlrN1hHNTJZWElnZEhKaGJuTm1iM0p0UkdGMFlTQTlJSEpsY1hWcGNtVW9KeTR2ZEhKaGJuTm1iM0p0UkdGMFlTY3BPMXh1ZG1GeUlHbHpRMkZ1WTJWc0lEMGdjbVZ4ZFdseVpTZ25MaTR2WTJGdVkyVnNMMmx6UTJGdVkyVnNKeWs3WEc1MllYSWdaR1ZtWVhWc2RITWdQU0J5WlhGMWFYSmxLQ2N1TGk5a1pXWmhkV3gwY3ljcE8xeHVkbUZ5SUdselFXSnpiMngxZEdWVlVrd2dQU0J5WlhGMWFYSmxLQ2N1THk0dUwyaGxiSEJsY25NdmFYTkJZbk52YkhWMFpWVlNUQ2NwTzF4dWRtRnlJR052YldKcGJtVlZVa3h6SUQwZ2NtVnhkV2x5WlNnbkxpOHVMaTlvWld4d1pYSnpMMk52YldKcGJtVlZVa3h6SnlrN1hHNWNiaThxS2x4dUlDb2dWR2h5YjNkeklHRWdZRU5oYm1ObGJHQWdhV1lnWTJGdVkyVnNiR0YwYVc5dUlHaGhjeUJpWldWdUlISmxjWFZsYzNSbFpDNWNiaUFxTDF4dVpuVnVZM1JwYjI0Z2RHaHliM2RKWmtOaGJtTmxiR3hoZEdsdmJsSmxjWFZsYzNSbFpDaGpiMjVtYVdjcElIdGNiaUFnYVdZZ0tHTnZibVpwWnk1allXNWpaV3hVYjJ0bGJpa2dlMXh1SUNBZ0lHTnZibVpwWnk1allXNWpaV3hVYjJ0bGJpNTBhSEp2ZDBsbVVtVnhkV1Z6ZEdWa0tDazdYRzRnSUgxY2JuMWNibHh1THlvcVhHNGdLaUJFYVhOd1lYUmphQ0JoSUhKbGNYVmxjM1FnZEc4Z2RHaGxJSE5sY25abGNpQjFjMmx1WnlCMGFHVWdZMjl1Wm1sbmRYSmxaQ0JoWkdGd2RHVnlMbHh1SUNwY2JpQXFJRUJ3WVhKaGJTQjdiMkpxWldOMGZTQmpiMjVtYVdjZ1ZHaGxJR052Ym1acFp5QjBhR0YwSUdseklIUnZJR0psSUhWelpXUWdabTl5SUhSb1pTQnlaWEYxWlhOMFhHNGdLaUJBY21WMGRYSnVjeUI3VUhKdmJXbHpaWDBnVkdobElGQnliMjFwYzJVZ2RHOGdZbVVnWm5Wc1ptbHNiR1ZrWEc0Z0tpOWNibTF2WkhWc1pTNWxlSEJ2Y25SeklEMGdablZ1WTNScGIyNGdaR2x6Y0dGMFkyaFNaWEYxWlhOMEtHTnZibVpwWnlrZ2UxeHVJQ0IwYUhKdmQwbG1RMkZ1WTJWc2JHRjBhVzl1VW1WeGRXVnpkR1ZrS0dOdmJtWnBaeWs3WEc1Y2JpQWdMeThnVTNWd2NHOXlkQ0JpWVhObFZWSk1JR052Ym1acFoxeHVJQ0JwWmlBb1kyOXVabWxuTG1KaGMyVlZVa3dnSmlZZ0lXbHpRV0p6YjJ4MWRHVlZVa3dvWTI5dVptbG5MblZ5YkNrcElIdGNiaUFnSUNCamIyNW1hV2N1ZFhKc0lEMGdZMjl0WW1sdVpWVlNUSE1vWTI5dVptbG5MbUpoYzJWVlVrd3NJR052Ym1acFp5NTFjbXdwTzF4dUlDQjlYRzVjYmlBZ0x5OGdSVzV6ZFhKbElHaGxZV1JsY25NZ1pYaHBjM1JjYmlBZ1kyOXVabWxuTG1obFlXUmxjbk1nUFNCamIyNW1hV2N1YUdWaFpHVnljeUI4ZkNCN2ZUdGNibHh1SUNBdkx5QlVjbUZ1YzJadmNtMGdjbVZ4ZFdWemRDQmtZWFJoWEc0Z0lHTnZibVpwWnk1a1lYUmhJRDBnZEhKaGJuTm1iM0p0UkdGMFlTaGNiaUFnSUNCamIyNW1hV2N1WkdGMFlTeGNiaUFnSUNCamIyNW1hV2N1YUdWaFpHVnljeXhjYmlBZ0lDQmpiMjVtYVdjdWRISmhibk5tYjNKdFVtVnhkV1Z6ZEZ4dUlDQXBPMXh1WEc0Z0lDOHZJRVpzWVhSMFpXNGdhR1ZoWkdWeWMxeHVJQ0JqYjI1bWFXY3VhR1ZoWkdWeWN5QTlJSFYwYVd4ekxtMWxjbWRsS0Z4dUlDQWdJR052Ym1acFp5NW9aV0ZrWlhKekxtTnZiVzF2YmlCOGZDQjdmU3hjYmlBZ0lDQmpiMjVtYVdjdWFHVmhaR1Z5YzF0amIyNW1hV2N1YldWMGFHOWtYU0I4ZkNCN2ZTeGNiaUFnSUNCamIyNW1hV2N1YUdWaFpHVnljeUI4ZkNCN2ZWeHVJQ0FwTzF4dVhHNGdJSFYwYVd4ekxtWnZja1ZoWTJnb1hHNGdJQ0FnV3lka1pXeGxkR1VuTENBbloyVjBKeXdnSjJobFlXUW5MQ0FuY0c5emRDY3NJQ2R3ZFhRbkxDQW5jR0YwWTJnbkxDQW5ZMjl0Ylc5dUoxMHNYRzRnSUNBZ1puVnVZM1JwYjI0Z1kyeGxZVzVJWldGa1pYSkRiMjVtYVdjb2JXVjBhRzlrS1NCN1hHNGdJQ0FnSUNCa1pXeGxkR1VnWTI5dVptbG5MbWhsWVdSbGNuTmJiV1YwYUc5a1hUdGNiaUFnSUNCOVhHNGdJQ2s3WEc1Y2JpQWdkbUZ5SUdGa1lYQjBaWElnUFNCamIyNW1hV2N1WVdSaGNIUmxjaUI4ZkNCa1pXWmhkV3gwY3k1aFpHRndkR1Z5TzF4dVhHNGdJSEpsZEhWeWJpQmhaR0Z3ZEdWeUtHTnZibVpwWnlrdWRHaGxiaWhtZFc1amRHbHZiaUJ2YmtGa1lYQjBaWEpTWlhOdmJIVjBhVzl1S0hKbGMzQnZibk5sS1NCN1hHNGdJQ0FnZEdoeWIzZEpaa05oYm1ObGJHeGhkR2x2YmxKbGNYVmxjM1JsWkNoamIyNW1hV2NwTzF4dVhHNGdJQ0FnTHk4Z1ZISmhibk5tYjNKdElISmxjM0J2Ym5ObElHUmhkR0ZjYmlBZ0lDQnlaWE53YjI1elpTNWtZWFJoSUQwZ2RISmhibk5tYjNKdFJHRjBZU2hjYmlBZ0lDQWdJSEpsYzNCdmJuTmxMbVJoZEdFc1hHNGdJQ0FnSUNCeVpYTndiMjV6WlM1b1pXRmtaWEp6TEZ4dUlDQWdJQ0FnWTI5dVptbG5MblJ5WVc1elptOXliVkpsYzNCdmJuTmxYRzRnSUNBZ0tUdGNibHh1SUNBZ0lISmxkSFZ5YmlCeVpYTndiMjV6WlR0Y2JpQWdmU3dnWm5WdVkzUnBiMjRnYjI1QlpHRndkR1Z5VW1WcVpXTjBhVzl1S0hKbFlYTnZiaWtnZTF4dUlDQWdJR2xtSUNnaGFYTkRZVzVqWld3b2NtVmhjMjl1S1NrZ2UxeHVJQ0FnSUNBZ2RHaHliM2RKWmtOaGJtTmxiR3hoZEdsdmJsSmxjWFZsYzNSbFpDaGpiMjVtYVdjcE8xeHVYRzRnSUNBZ0lDQXZMeUJVY21GdWMyWnZjbTBnY21WemNHOXVjMlVnWkdGMFlWeHVJQ0FnSUNBZ2FXWWdLSEpsWVhOdmJpQW1KaUJ5WldGemIyNHVjbVZ6Y0c5dWMyVXBJSHRjYmlBZ0lDQWdJQ0FnY21WaGMyOXVMbkpsYzNCdmJuTmxMbVJoZEdFZ1BTQjBjbUZ1YzJadmNtMUVZWFJoS0Z4dUlDQWdJQ0FnSUNBZ0lISmxZWE52Ymk1eVpYTndiMjV6WlM1a1lYUmhMRnh1SUNBZ0lDQWdJQ0FnSUhKbFlYTnZiaTV5WlhOd2IyNXpaUzVvWldGa1pYSnpMRnh1SUNBZ0lDQWdJQ0FnSUdOdmJtWnBaeTUwY21GdWMyWnZjbTFTWlhOd2IyNXpaVnh1SUNBZ0lDQWdJQ0FwTzF4dUlDQWdJQ0FnZlZ4dUlDQWdJSDFjYmx4dUlDQWdJSEpsZEhWeWJpQlFjbTl0YVhObExuSmxhbVZqZENoeVpXRnpiMjRwTzF4dUlDQjlLVHRjYm4wN1hHNGlMQ0luZFhObElITjBjbWxqZENjN1hHNWNiaThxS2x4dUlDb2dWWEJrWVhSbElHRnVJRVZ5Y205eUlIZHBkR2dnZEdobElITndaV05wWm1sbFpDQmpiMjVtYVdjc0lHVnljbTl5SUdOdlpHVXNJR0Z1WkNCeVpYTndiMjV6WlM1Y2JpQXFYRzRnS2lCQWNHRnlZVzBnZTBWeWNtOXlmU0JsY25KdmNpQlVhR1VnWlhKeWIzSWdkRzhnZFhCa1lYUmxMbHh1SUNvZ1FIQmhjbUZ0SUh0UFltcGxZM1I5SUdOdmJtWnBaeUJVYUdVZ1kyOXVabWxuTGx4dUlDb2dRSEJoY21GdElIdHpkSEpwYm1kOUlGdGpiMlJsWFNCVWFHVWdaWEp5YjNJZ1kyOWtaU0FvWm05eUlHVjRZVzF3YkdVc0lDZEZRMDlPVGtGQ1QxSlVSVVFuS1M1Y2JpQXFJRUJ3WVhKaGJTQjdUMkpxWldOMGZTQmJjbVZ4ZFdWemRGMGdWR2hsSUhKbGNYVmxjM1F1WEc0Z0tpQkFjR0Z5WVcwZ2UwOWlhbVZqZEgwZ1czSmxjM0J2Ym5ObFhTQlVhR1VnY21WemNHOXVjMlV1WEc0Z0tpQkFjbVYwZFhKdWN5QjdSWEp5YjNKOUlGUm9aU0JsY25KdmNpNWNiaUFxTDF4dWJXOWtkV3hsTG1WNGNHOXlkSE1nUFNCbWRXNWpkR2x2YmlCbGJtaGhibU5sUlhKeWIzSW9aWEp5YjNJc0lHTnZibVpwWnl3Z1kyOWtaU3dnY21WeGRXVnpkQ3dnY21WemNHOXVjMlVwSUh0Y2JpQWdaWEp5YjNJdVkyOXVabWxuSUQwZ1kyOXVabWxuTzF4dUlDQnBaaUFvWTI5a1pTa2dlMXh1SUNBZ0lHVnljbTl5TG1OdlpHVWdQU0JqYjJSbE8xeHVJQ0I5WEc0Z0lHVnljbTl5TG5KbGNYVmxjM1FnUFNCeVpYRjFaWE4wTzF4dUlDQmxjbkp2Y2k1eVpYTndiMjV6WlNBOUlISmxjM0J2Ym5ObE8xeHVJQ0J5WlhSMWNtNGdaWEp5YjNJN1hHNTlPMXh1SWl3aUozVnpaU0J6ZEhKcFkzUW5PMXh1WEc1MllYSWdZM0psWVhSbFJYSnliM0lnUFNCeVpYRjFhWEpsS0NjdUwyTnlaV0YwWlVWeWNtOXlKeWs3WEc1Y2JpOHFLbHh1SUNvZ1VtVnpiMngyWlNCdmNpQnlaV3BsWTNRZ1lTQlFjbTl0YVhObElHSmhjMlZrSUc5dUlISmxjM0J2Ym5ObElITjBZWFIxY3k1Y2JpQXFYRzRnS2lCQWNHRnlZVzBnZTBaMWJtTjBhVzl1ZlNCeVpYTnZiSFpsSUVFZ1puVnVZM1JwYjI0Z2RHaGhkQ0J5WlhOdmJIWmxjeUIwYUdVZ2NISnZiV2x6WlM1Y2JpQXFJRUJ3WVhKaGJTQjdSblZ1WTNScGIyNTlJSEpsYW1WamRDQkJJR1oxYm1OMGFXOXVJSFJvWVhRZ2NtVnFaV04wY3lCMGFHVWdjSEp2YldselpTNWNiaUFxSUVCd1lYSmhiU0I3YjJKcVpXTjBmU0J5WlhOd2IyNXpaU0JVYUdVZ2NtVnpjRzl1YzJVdVhHNGdLaTljYm0xdlpIVnNaUzVsZUhCdmNuUnpJRDBnWm5WdVkzUnBiMjRnYzJWMGRHeGxLSEpsYzI5c2RtVXNJSEpsYW1WamRDd2djbVZ6Y0c5dWMyVXBJSHRjYmlBZ2RtRnlJSFpoYkdsa1lYUmxVM1JoZEhWeklEMGdjbVZ6Y0c5dWMyVXVZMjl1Wm1sbkxuWmhiR2xrWVhSbFUzUmhkSFZ6TzF4dUlDQXZMeUJPYjNSbE9pQnpkR0YwZFhNZ2FYTWdibTkwSUdWNGNHOXpaV1FnWW5rZ1dFUnZiV0ZwYmxKbGNYVmxjM1JjYmlBZ2FXWWdLQ0Z5WlhOd2IyNXpaUzV6ZEdGMGRYTWdmSHdnSVhaaGJHbGtZWFJsVTNSaGRIVnpJSHg4SUhaaGJHbGtZWFJsVTNSaGRIVnpLSEpsYzNCdmJuTmxMbk4wWVhSMWN5a3BJSHRjYmlBZ0lDQnlaWE52YkhabEtISmxjM0J2Ym5ObEtUdGNiaUFnZlNCbGJITmxJSHRjYmlBZ0lDQnlaV3BsWTNRb1kzSmxZWFJsUlhKeWIzSW9YRzRnSUNBZ0lDQW5VbVZ4ZFdWemRDQm1ZV2xzWldRZ2QybDBhQ0J6ZEdGMGRYTWdZMjlrWlNBbklDc2djbVZ6Y0c5dWMyVXVjM1JoZEhWekxGeHVJQ0FnSUNBZ2NtVnpjRzl1YzJVdVkyOXVabWxuTEZ4dUlDQWdJQ0FnYm5Wc2JDeGNiaUFnSUNBZ0lISmxjM0J2Ym5ObExuSmxjWFZsYzNRc1hHNGdJQ0FnSUNCeVpYTndiMjV6WlZ4dUlDQWdJQ2twTzF4dUlDQjlYRzU5TzF4dUlpd2lKM1Z6WlNCemRISnBZM1FuTzF4dVhHNTJZWElnZFhScGJITWdQU0J5WlhGMWFYSmxLQ2N1THk0dUwzVjBhV3h6SnlrN1hHNWNiaThxS2x4dUlDb2dWSEpoYm5ObWIzSnRJSFJvWlNCa1lYUmhJR1p2Y2lCaElISmxjWFZsYzNRZ2IzSWdZU0J5WlhOd2IyNXpaVnh1SUNwY2JpQXFJRUJ3WVhKaGJTQjdUMkpxWldOMGZGTjBjbWx1WjMwZ1pHRjBZU0JVYUdVZ1pHRjBZU0IwYnlCaVpTQjBjbUZ1YzJadmNtMWxaRnh1SUNvZ1FIQmhjbUZ0SUh0QmNuSmhlWDBnYUdWaFpHVnljeUJVYUdVZ2FHVmhaR1Z5Y3lCbWIzSWdkR2hsSUhKbGNYVmxjM1FnYjNJZ2NtVnpjRzl1YzJWY2JpQXFJRUJ3WVhKaGJTQjdRWEp5WVhsOFJuVnVZM1JwYjI1OUlHWnVjeUJCSUhOcGJtZHNaU0JtZFc1amRHbHZiaUJ2Y2lCQmNuSmhlU0J2WmlCbWRXNWpkR2x2Ym5OY2JpQXFJRUJ5WlhSMWNtNXpJSHNxZlNCVWFHVWdjbVZ6ZFd4MGFXNW5JSFJ5WVc1elptOXliV1ZrSUdSaGRHRmNiaUFxTDF4dWJXOWtkV3hsTG1WNGNHOXlkSE1nUFNCbWRXNWpkR2x2YmlCMGNtRnVjMlp2Y20xRVlYUmhLR1JoZEdFc0lHaGxZV1JsY25Nc0lHWnVjeWtnZTF4dUlDQXZLbVZ6YkdsdWRDQnVieTF3WVhKaGJTMXlaV0Z6YzJsbmJqb3dLaTljYmlBZ2RYUnBiSE11Wm05eVJXRmphQ2htYm5Nc0lHWjFibU4wYVc5dUlIUnlZVzV6Wm05eWJTaG1iaWtnZTF4dUlDQWdJR1JoZEdFZ1BTQm1iaWhrWVhSaExDQm9aV0ZrWlhKektUdGNiaUFnZlNrN1hHNWNiaUFnY21WMGRYSnVJR1JoZEdFN1hHNTlPMXh1SWl3aUozVnpaU0J6ZEhKcFkzUW5PMXh1WEc1MllYSWdkWFJwYkhNZ1BTQnlaWEYxYVhKbEtDY3VMM1YwYVd4ekp5azdYRzUyWVhJZ2JtOXliV0ZzYVhwbFNHVmhaR1Z5VG1GdFpTQTlJSEpsY1hWcGNtVW9KeTR2YUdWc2NHVnljeTl1YjNKdFlXeHBlbVZJWldGa1pYSk9ZVzFsSnlrN1hHNWNiblpoY2lCRVJVWkJWVXhVWDBOUFRsUkZUbFJmVkZsUVJTQTlJSHRjYmlBZ0owTnZiblJsYm5RdFZIbHdaU2M2SUNkaGNIQnNhV05oZEdsdmJpOTRMWGQzZHkxbWIzSnRMWFZ5YkdWdVkyOWtaV1FuWEc1OU8xeHVYRzVtZFc1amRHbHZiaUJ6WlhSRGIyNTBaVzUwVkhsd1pVbG1WVzV6WlhRb2FHVmhaR1Z5Y3l3Z2RtRnNkV1VwSUh0Y2JpQWdhV1lnS0NGMWRHbHNjeTVwYzFWdVpHVm1hVzVsWkNob1pXRmtaWEp6S1NBbUppQjFkR2xzY3k1cGMxVnVaR1ZtYVc1bFpDaG9aV0ZrWlhKeld5ZERiMjUwWlc1MExWUjVjR1VuWFNrcElIdGNiaUFnSUNCb1pXRmtaWEp6V3lkRGIyNTBaVzUwTFZSNWNHVW5YU0E5SUhaaGJIVmxPMXh1SUNCOVhHNTlYRzVjYm1aMWJtTjBhVzl1SUdkbGRFUmxabUYxYkhSQlpHRndkR1Z5S0NrZ2UxeHVJQ0IyWVhJZ1lXUmhjSFJsY2p0Y2JpQWdhV1lnS0hSNWNHVnZaaUJZVFV4SWRIUndVbVZ4ZFdWemRDQWhQVDBnSjNWdVpHVm1hVzVsWkNjcElIdGNiaUFnSUNBdkx5QkdiM0lnWW5KdmQzTmxjbk1nZFhObElGaElVaUJoWkdGd2RHVnlYRzRnSUNBZ1lXUmhjSFJsY2lBOUlISmxjWFZwY21Vb0p5NHZZV1JoY0hSbGNuTXZlR2h5SnlrN1hHNGdJSDBnWld4elpTQnBaaUFvZEhsd1pXOW1JSEJ5YjJObGMzTWdJVDA5SUNkMWJtUmxabWx1WldRbktTQjdYRzRnSUNBZ0x5OGdSbTl5SUc1dlpHVWdkWE5sSUVoVVZGQWdZV1JoY0hSbGNseHVJQ0FnSUdGa1lYQjBaWElnUFNCeVpYRjFhWEpsS0NjdUwyRmtZWEIwWlhKekwyaDBkSEFuS1R0Y2JpQWdmVnh1SUNCeVpYUjFjbTRnWVdSaGNIUmxjanRjYm4xY2JseHVkbUZ5SUdSbFptRjFiSFJ6SUQwZ2UxeHVJQ0JoWkdGd2RHVnlPaUJuWlhSRVpXWmhkV3gwUVdSaGNIUmxjaWdwTEZ4dVhHNGdJSFJ5WVc1elptOXliVkpsY1hWbGMzUTZJRnRtZFc1amRHbHZiaUIwY21GdWMyWnZjbTFTWlhGMVpYTjBLR1JoZEdFc0lHaGxZV1JsY25NcElIdGNiaUFnSUNCdWIzSnRZV3hwZW1WSVpXRmtaWEpPWVcxbEtHaGxZV1JsY25Nc0lDZERiMjUwWlc1MExWUjVjR1VuS1R0Y2JpQWdJQ0JwWmlBb2RYUnBiSE11YVhOR2IzSnRSR0YwWVNoa1lYUmhLU0I4ZkZ4dUlDQWdJQ0FnZFhScGJITXVhWE5CY25KaGVVSjFabVpsY2loa1lYUmhLU0I4ZkZ4dUlDQWdJQ0FnZFhScGJITXVhWE5DZFdabVpYSW9aR0YwWVNrZ2ZIeGNiaUFnSUNBZ0lIVjBhV3h6TG1selUzUnlaV0Z0S0dSaGRHRXBJSHg4WEc0Z0lDQWdJQ0IxZEdsc2N5NXBjMFpwYkdVb1pHRjBZU2tnZkh4Y2JpQWdJQ0FnSUhWMGFXeHpMbWx6UW14dllpaGtZWFJoS1Z4dUlDQWdJQ2tnZTF4dUlDQWdJQ0FnY21WMGRYSnVJR1JoZEdFN1hHNGdJQ0FnZlZ4dUlDQWdJR2xtSUNoMWRHbHNjeTVwYzBGeWNtRjVRblZtWm1WeVZtbGxkeWhrWVhSaEtTa2dlMXh1SUNBZ0lDQWdjbVYwZFhKdUlHUmhkR0V1WW5WbVptVnlPMXh1SUNBZ0lIMWNiaUFnSUNCcFppQW9kWFJwYkhNdWFYTlZVa3hUWldGeVkyaFFZWEpoYlhNb1pHRjBZU2twSUh0Y2JpQWdJQ0FnSUhObGRFTnZiblJsYm5SVWVYQmxTV1pWYm5ObGRDaG9aV0ZrWlhKekxDQW5ZWEJ3YkdsallYUnBiMjR2ZUMxM2QzY3RabTl5YlMxMWNteGxibU52WkdWa08yTm9ZWEp6WlhROWRYUm1MVGduS1R0Y2JpQWdJQ0FnSUhKbGRIVnliaUJrWVhSaExuUnZVM1J5YVc1bktDazdYRzRnSUNBZ2ZWeHVJQ0FnSUdsbUlDaDFkR2xzY3k1cGMwOWlhbVZqZENoa1lYUmhLU2tnZTF4dUlDQWdJQ0FnYzJWMFEyOXVkR1Z1ZEZSNWNHVkpabFZ1YzJWMEtHaGxZV1JsY25Nc0lDZGhjSEJzYVdOaGRHbHZiaTlxYzI5dU8yTm9ZWEp6WlhROWRYUm1MVGduS1R0Y2JpQWdJQ0FnSUhKbGRIVnliaUJLVTA5T0xuTjBjbWx1WjJsbWVTaGtZWFJoS1R0Y2JpQWdJQ0I5WEc0Z0lDQWdjbVYwZFhKdUlHUmhkR0U3WEc0Z0lIMWRMRnh1WEc0Z0lIUnlZVzV6Wm05eWJWSmxjM0J2Ym5ObE9pQmJablZ1WTNScGIyNGdkSEpoYm5ObWIzSnRVbVZ6Y0c5dWMyVW9aR0YwWVNrZ2UxeHVJQ0FnSUM4cVpYTnNhVzUwSUc1dkxYQmhjbUZ0TFhKbFlYTnphV2R1T2pBcUwxeHVJQ0FnSUdsbUlDaDBlWEJsYjJZZ1pHRjBZU0E5UFQwZ0ozTjBjbWx1WnljcElIdGNiaUFnSUNBZ0lIUnllU0I3WEc0Z0lDQWdJQ0FnSUdSaGRHRWdQU0JLVTA5T0xuQmhjbk5sS0dSaGRHRXBPMXh1SUNBZ0lDQWdmU0JqWVhSamFDQW9aU2tnZXlBdktpQkpaMjV2Y21VZ0tpOGdmVnh1SUNBZ0lIMWNiaUFnSUNCeVpYUjFjbTRnWkdGMFlUdGNiaUFnZlYwc1hHNWNiaUFnTHlvcVhHNGdJQ0FxSUVFZ2RHbHRaVzkxZENCcGJpQnRhV3hzYVhObFkyOXVaSE1nZEc4Z1lXSnZjblFnWVNCeVpYRjFaWE4wTGlCSlppQnpaWFFnZEc4Z01DQW9aR1ZtWVhWc2RDa2dZVnh1SUNBZ0tpQjBhVzFsYjNWMElHbHpJRzV2ZENCamNtVmhkR1ZrTGx4dUlDQWdLaTljYmlBZ2RHbHRaVzkxZERvZ01DeGNibHh1SUNCNGMzSm1RMjl2YTJsbFRtRnRaVG9nSjFoVFVrWXRWRTlMUlU0bkxGeHVJQ0I0YzNKbVNHVmhaR1Z5VG1GdFpUb2dKMWd0V0ZOU1JpMVVUMHRGVGljc1hHNWNiaUFnYldGNFEyOXVkR1Z1ZEV4bGJtZDBhRG9nTFRFc1hHNWNiaUFnZG1Gc2FXUmhkR1ZUZEdGMGRYTTZJR1oxYm1OMGFXOXVJSFpoYkdsa1lYUmxVM1JoZEhWektITjBZWFIxY3lrZ2UxeHVJQ0FnSUhKbGRIVnliaUJ6ZEdGMGRYTWdQajBnTWpBd0lDWW1JSE4wWVhSMWN5QThJRE13TUR0Y2JpQWdmVnh1ZlR0Y2JseHVaR1ZtWVhWc2RITXVhR1ZoWkdWeWN5QTlJSHRjYmlBZ1kyOXRiVzl1T2lCN1hHNGdJQ0FnSjBGalkyVndkQ2M2SUNkaGNIQnNhV05oZEdsdmJpOXFjMjl1TENCMFpYaDBMM0JzWVdsdUxDQXFMeW9uWEc0Z0lIMWNibjA3WEc1Y2JuVjBhV3h6TG1admNrVmhZMmdvV3lka1pXeGxkR1VuTENBbloyVjBKeXdnSjJobFlXUW5YU3dnWm5WdVkzUnBiMjRnWm05eVJXRmphRTFsZEdodlpFNXZSR0YwWVNodFpYUm9iMlFwSUh0Y2JpQWdaR1ZtWVhWc2RITXVhR1ZoWkdWeWMxdHRaWFJvYjJSZElEMGdlMzA3WEc1OUtUdGNibHh1ZFhScGJITXVabTl5UldGamFDaGJKM0J2YzNRbkxDQW5jSFYwSnl3Z0ozQmhkR05vSjEwc0lHWjFibU4wYVc5dUlHWnZja1ZoWTJoTlpYUm9iMlJYYVhSb1JHRjBZU2h0WlhSb2IyUXBJSHRjYmlBZ1pHVm1ZWFZzZEhNdWFHVmhaR1Z5YzF0dFpYUm9iMlJkSUQwZ2RYUnBiSE11YldWeVoyVW9SRVZHUVZWTVZGOURUMDVVUlU1VVgxUlpVRVVwTzF4dWZTazdYRzVjYm0xdlpIVnNaUzVsZUhCdmNuUnpJRDBnWkdWbVlYVnNkSE03WEc0aUxDSW5kWE5sSUhOMGNtbGpkQ2M3WEc1Y2JtMXZaSFZzWlM1bGVIQnZjblJ6SUQwZ1puVnVZM1JwYjI0Z1ltbHVaQ2htYml3Z2RHaHBjMEZ5WnlrZ2UxeHVJQ0J5WlhSMWNtNGdablZ1WTNScGIyNGdkM0poY0NncElIdGNiaUFnSUNCMllYSWdZWEpuY3lBOUlHNWxkeUJCY25KaGVTaGhjbWQxYldWdWRITXViR1Z1WjNSb0tUdGNiaUFnSUNCbWIzSWdLSFpoY2lCcElEMGdNRHNnYVNBOElHRnlaM011YkdWdVozUm9PeUJwS3lzcElIdGNiaUFnSUNBZ0lHRnlaM05iYVYwZ1BTQmhjbWQxYldWdWRITmJhVjA3WEc0Z0lDQWdmVnh1SUNBZ0lISmxkSFZ5YmlCbWJpNWhjSEJzZVNoMGFHbHpRWEpuTENCaGNtZHpLVHRjYmlBZ2ZUdGNibjA3WEc0aUxDSW5kWE5sSUhOMGNtbGpkQ2M3WEc1Y2JpOHZJR0owYjJFZ2NHOXNlV1pwYkd3Z1ptOXlJRWxGUERFd0lHTnZkWEowWlhONUlHaDBkSEJ6T2k4dloybDBhSFZpTG1OdmJTOWtZWFpwWkdOb1lXMWlaWEp6TDBKaGMyVTJOQzVxYzF4dVhHNTJZWElnWTJoaGNuTWdQU0FuUVVKRFJFVkdSMGhKU2t0TVRVNVBVRkZTVTFSVlZsZFlXVnBoWW1Oa1pXWm5hR2xxYTJ4dGJtOXdjWEp6ZEhWMmQzaDVlakF4TWpNME5UWTNPRGtyTHowbk8xeHVYRzVtZFc1amRHbHZiaUJGS0NrZ2UxeHVJQ0IwYUdsekxtMWxjM05oWjJVZ1BTQW5VM1J5YVc1bklHTnZiblJoYVc1eklHRnVJR2x1ZG1Gc2FXUWdZMmhoY21GamRHVnlKenRjYm4xY2JrVXVjSEp2ZEc5MGVYQmxJRDBnYm1WM0lFVnljbTl5TzF4dVJTNXdjbTkwYjNSNWNHVXVZMjlrWlNBOUlEVTdYRzVGTG5CeWIzUnZkSGx3WlM1dVlXMWxJRDBnSjBsdWRtRnNhV1JEYUdGeVlXTjBaWEpGY25KdmNpYzdYRzVjYm1aMWJtTjBhVzl1SUdKMGIyRW9hVzV3ZFhRcElIdGNiaUFnZG1GeUlITjBjaUE5SUZOMGNtbHVaeWhwYm5CMWRDazdYRzRnSUhaaGNpQnZkWFJ3ZFhRZ1BTQW5KenRjYmlBZ1ptOXlJQ2hjYmlBZ0lDQXZMeUJwYm1sMGFXRnNhWHBsSUhKbGMzVnNkQ0JoYm1RZ1kyOTFiblJsY2x4dUlDQWdJSFpoY2lCaWJHOWpheXdnWTJoaGNrTnZaR1VzSUdsa2VDQTlJREFzSUcxaGNDQTlJR05vWVhKek8xeHVJQ0FnSUM4dklHbG1JSFJvWlNCdVpYaDBJSE4wY2lCcGJtUmxlQ0JrYjJWeklHNXZkQ0JsZUdsemREcGNiaUFnSUNBdkx5QWdJR05vWVc1blpTQjBhR1VnYldGd2NHbHVaeUIwWVdKc1pTQjBieUJjSWoxY0lseHVJQ0FnSUM4dklDQWdZMmhsWTJzZ2FXWWdaQ0JvWVhNZ2JtOGdabkpoWTNScGIyNWhiQ0JrYVdkcGRITmNiaUFnSUNCemRISXVZMmhoY2tGMEtHbGtlQ0I4SURBcElIeDhJQ2h0WVhBZ1BTQW5QU2NzSUdsa2VDQWxJREVwTzF4dUlDQWdJQzh2SUZ3aU9DQXRJR2xrZUNBbElERWdLaUE0WENJZ1oyVnVaWEpoZEdWeklIUm9aU0J6WlhGMVpXNWpaU0F5TENBMExDQTJMQ0E0WEc0Z0lDQWdiM1YwY0hWMElDczlJRzFoY0M1amFHRnlRWFFvTmpNZ0ppQmliRzlqYXlBK1BpQTRJQzBnYVdSNElDVWdNU0FxSURncFhHNGdJQ2tnZTF4dUlDQWdJR05vWVhKRGIyUmxJRDBnYzNSeUxtTm9ZWEpEYjJSbFFYUW9hV1I0SUNzOUlETWdMeUEwS1R0Y2JpQWdJQ0JwWmlBb1kyaGhja052WkdVZ1BpQXdlRVpHS1NCN1hHNGdJQ0FnSUNCMGFISnZkeUJ1WlhjZ1JTZ3BPMXh1SUNBZ0lIMWNiaUFnSUNCaWJHOWpheUE5SUdKc2IyTnJJRHc4SURnZ2ZDQmphR0Z5UTI5a1pUdGNiaUFnZlZ4dUlDQnlaWFIxY200Z2IzVjBjSFYwTzF4dWZWeHVYRzV0YjJSMWJHVXVaWGh3YjNKMGN5QTlJR0owYjJFN1hHNGlMQ0luZFhObElITjBjbWxqZENjN1hHNWNiblpoY2lCMWRHbHNjeUE5SUhKbGNYVnBjbVVvSnk0dkxpNHZkWFJwYkhNbktUdGNibHh1Wm5WdVkzUnBiMjRnWlc1amIyUmxLSFpoYkNrZ2UxeHVJQ0J5WlhSMWNtNGdaVzVqYjJSbFZWSkpRMjl0Y0c5dVpXNTBLSFpoYkNrdVhHNGdJQ0FnY21Wd2JHRmpaU2d2SlRRd0wyZHBMQ0FuUUNjcExseHVJQ0FnSUhKbGNHeGhZMlVvTHlVelFTOW5hU3dnSnpvbktTNWNiaUFnSUNCeVpYQnNZV05sS0M4bE1qUXZaeXdnSnlRbktTNWNiaUFnSUNCeVpYQnNZV05sS0M4bE1rTXZaMmtzSUNjc0p5a3VYRzRnSUNBZ2NtVndiR0ZqWlNndkpUSXdMMmNzSUNjckp5a3VYRzRnSUNBZ2NtVndiR0ZqWlNndkpUVkNMMmRwTENBbld5Y3BMbHh1SUNBZ0lISmxjR3hoWTJVb0x5VTFSQzluYVN3Z0oxMG5LVHRjYm4xY2JseHVMeW9xWEc0Z0tpQkNkV2xzWkNCaElGVlNUQ0JpZVNCaGNIQmxibVJwYm1jZ2NHRnlZVzF6SUhSdklIUm9aU0JsYm1SY2JpQXFYRzRnS2lCQWNHRnlZVzBnZTNOMGNtbHVaMzBnZFhKc0lGUm9aU0JpWVhObElHOW1JSFJvWlNCMWNtd2dLR1V1Wnk0c0lHaDBkSEE2THk5M2QzY3VaMjl2WjJ4bExtTnZiU2xjYmlBcUlFQndZWEpoYlNCN2IySnFaV04wZlNCYmNHRnlZVzF6WFNCVWFHVWdjR0Z5WVcxeklIUnZJR0psSUdGd2NHVnVaR1ZrWEc0Z0tpQkFjbVYwZFhKdWN5QjdjM1J5YVc1bmZTQlVhR1VnWm05eWJXRjBkR1ZrSUhWeWJGeHVJQ292WEc1dGIyUjFiR1V1Wlhod2IzSjBjeUE5SUdaMWJtTjBhVzl1SUdKMWFXeGtWVkpNS0hWeWJDd2djR0Z5WVcxekxDQndZWEpoYlhOVFpYSnBZV3hwZW1WeUtTQjdYRzRnSUM4cVpYTnNhVzUwSUc1dkxYQmhjbUZ0TFhKbFlYTnphV2R1T2pBcUwxeHVJQ0JwWmlBb0lYQmhjbUZ0Y3lrZ2UxeHVJQ0FnSUhKbGRIVnliaUIxY213N1hHNGdJSDFjYmx4dUlDQjJZWElnYzJWeWFXRnNhWHBsWkZCaGNtRnRjenRjYmlBZ2FXWWdLSEJoY21GdGMxTmxjbWxoYkdsNlpYSXBJSHRjYmlBZ0lDQnpaWEpwWVd4cGVtVmtVR0Z5WVcxeklEMGdjR0Z5WVcxelUyVnlhV0ZzYVhwbGNpaHdZWEpoYlhNcE8xeHVJQ0I5SUdWc2MyVWdhV1lnS0hWMGFXeHpMbWx6VlZKTVUyVmhjbU5vVUdGeVlXMXpLSEJoY21GdGN5a3BJSHRjYmlBZ0lDQnpaWEpwWVd4cGVtVmtVR0Z5WVcxeklEMGdjR0Z5WVcxekxuUnZVM1J5YVc1bktDazdYRzRnSUgwZ1pXeHpaU0I3WEc0Z0lDQWdkbUZ5SUhCaGNuUnpJRDBnVzEwN1hHNWNiaUFnSUNCMWRHbHNjeTVtYjNKRllXTm9LSEJoY21GdGN5d2dablZ1WTNScGIyNGdjMlZ5YVdGc2FYcGxLSFpoYkN3Z2EyVjVLU0I3WEc0Z0lDQWdJQ0JwWmlBb2RtRnNJRDA5UFNCdWRXeHNJSHg4SUhSNWNHVnZaaUIyWVd3Z1BUMDlJQ2QxYm1SbFptbHVaV1FuS1NCN1hHNGdJQ0FnSUNBZ0lISmxkSFZ5Ymp0Y2JpQWdJQ0FnSUgxY2JseHVJQ0FnSUNBZ2FXWWdLSFYwYVd4ekxtbHpRWEp5WVhrb2RtRnNLU2tnZTF4dUlDQWdJQ0FnSUNCclpYa2dQU0JyWlhrZ0t5QW5XMTBuTzF4dUlDQWdJQ0FnZlNCbGJITmxJSHRjYmlBZ0lDQWdJQ0FnZG1Gc0lEMGdXM1poYkYwN1hHNGdJQ0FnSUNCOVhHNWNiaUFnSUNBZ0lIVjBhV3h6TG1admNrVmhZMmdvZG1Gc0xDQm1kVzVqZEdsdmJpQndZWEp6WlZaaGJIVmxLSFlwSUh0Y2JpQWdJQ0FnSUNBZ2FXWWdLSFYwYVd4ekxtbHpSR0YwWlNoMktTa2dlMXh1SUNBZ0lDQWdJQ0FnSUhZZ1BTQjJMblJ2U1ZOUFUzUnlhVzVuS0NrN1hHNGdJQ0FnSUNBZ0lIMGdaV3h6WlNCcFppQW9kWFJwYkhNdWFYTlBZbXBsWTNRb2Rpa3BJSHRjYmlBZ0lDQWdJQ0FnSUNCMklEMGdTbE5QVGk1emRISnBibWRwWm5rb2RpazdYRzRnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJQ0FnY0dGeWRITXVjSFZ6YUNobGJtTnZaR1VvYTJWNUtTQXJJQ2M5SnlBcklHVnVZMjlrWlNoMktTazdYRzRnSUNBZ0lDQjlLVHRjYmlBZ0lDQjlLVHRjYmx4dUlDQWdJSE5sY21saGJHbDZaV1JRWVhKaGJYTWdQU0J3WVhKMGN5NXFiMmx1S0NjbUp5azdYRzRnSUgxY2JseHVJQ0JwWmlBb2MyVnlhV0ZzYVhwbFpGQmhjbUZ0Y3lrZ2UxeHVJQ0FnSUhWeWJDQXJQU0FvZFhKc0xtbHVaR1Y0VDJZb0p6OG5LU0E5UFQwZ0xURWdQeUFuUHljZ09pQW5KaWNwSUNzZ2MyVnlhV0ZzYVhwbFpGQmhjbUZ0Y3p0Y2JpQWdmVnh1WEc0Z0lISmxkSFZ5YmlCMWNtdzdYRzU5TzF4dUlpd2lKM1Z6WlNCemRISnBZM1FuTzF4dVhHNHZLaXBjYmlBcUlFTnlaV0YwWlhNZ1lTQnVaWGNnVlZKTUlHSjVJR052YldKcGJtbHVaeUIwYUdVZ2MzQmxZMmxtYVdWa0lGVlNUSE5jYmlBcVhHNGdLaUJBY0dGeVlXMGdlM04wY21sdVozMGdZbUZ6WlZWU1RDQlVhR1VnWW1GelpTQlZVa3hjYmlBcUlFQndZWEpoYlNCN2MzUnlhVzVuZlNCeVpXeGhkR2wyWlZWU1RDQlVhR1VnY21Wc1lYUnBkbVVnVlZKTVhHNGdLaUJBY21WMGRYSnVjeUI3YzNSeWFXNW5mU0JVYUdVZ1kyOXRZbWx1WldRZ1ZWSk1YRzRnS2k5Y2JtMXZaSFZzWlM1bGVIQnZjblJ6SUQwZ1puVnVZM1JwYjI0Z1kyOXRZbWx1WlZWU1RITW9ZbUZ6WlZWU1RDd2djbVZzWVhScGRtVlZVa3dwSUh0Y2JpQWdjbVYwZFhKdUlISmxiR0YwYVhabFZWSk1YRzRnSUNBZ1B5QmlZWE5sVlZKTUxuSmxjR3hoWTJVb0wxeGNMeXNrTHl3Z0p5Y3BJQ3NnSnk4bklDc2djbVZzWVhScGRtVlZVa3d1Y21Wd2JHRmpaU2d2WGx4Y0x5c3ZMQ0FuSnlsY2JpQWdJQ0E2SUdKaGMyVlZVa3c3WEc1OU8xeHVJaXdpSjNWelpTQnpkSEpwWTNRbk8xeHVYRzUyWVhJZ2RYUnBiSE1nUFNCeVpYRjFhWEpsS0NjdUx5NHVMM1YwYVd4ekp5azdYRzVjYm0xdlpIVnNaUzVsZUhCdmNuUnpJRDBnS0Z4dUlDQjFkR2xzY3k1cGMxTjBZVzVrWVhKa1FuSnZkM05sY2tWdWRpZ3BJRDljYmx4dUlDQXZMeUJUZEdGdVpHRnlaQ0JpY205M2MyVnlJR1Z1ZG5NZ2MzVndjRzl5ZENCa2IyTjFiV1Z1ZEM1amIyOXJhV1ZjYmlBZ0tHWjFibU4wYVc5dUlITjBZVzVrWVhKa1FuSnZkM05sY2tWdWRpZ3BJSHRjYmlBZ0lDQnlaWFIxY200Z2UxeHVJQ0FnSUNBZ2QzSnBkR1U2SUdaMWJtTjBhVzl1SUhkeWFYUmxLRzVoYldVc0lIWmhiSFZsTENCbGVIQnBjbVZ6TENCd1lYUm9MQ0JrYjIxaGFXNHNJSE5sWTNWeVpTa2dlMXh1SUNBZ0lDQWdJQ0IyWVhJZ1kyOXZhMmxsSUQwZ1cxMDdYRzRnSUNBZ0lDQWdJR052YjJ0cFpTNXdkWE5vS0c1aGJXVWdLeUFuUFNjZ0t5QmxibU52WkdWVlVrbERiMjF3YjI1bGJuUW9kbUZzZFdVcEtUdGNibHh1SUNBZ0lDQWdJQ0JwWmlBb2RYUnBiSE11YVhOT2RXMWlaWElvWlhod2FYSmxjeWtwSUh0Y2JpQWdJQ0FnSUNBZ0lDQmpiMjlyYVdVdWNIVnphQ2duWlhod2FYSmxjejBuSUNzZ2JtVjNJRVJoZEdVb1pYaHdhWEpsY3lrdWRHOUhUVlJUZEhKcGJtY29LU2s3WEc0Z0lDQWdJQ0FnSUgxY2JseHVJQ0FnSUNBZ0lDQnBaaUFvZFhScGJITXVhWE5UZEhKcGJtY29jR0YwYUNrcElIdGNiaUFnSUNBZ0lDQWdJQ0JqYjI5cmFXVXVjSFZ6YUNnbmNHRjBhRDBuSUNzZ2NHRjBhQ2s3WEc0Z0lDQWdJQ0FnSUgxY2JseHVJQ0FnSUNBZ0lDQnBaaUFvZFhScGJITXVhWE5UZEhKcGJtY29aRzl0WVdsdUtTa2dlMXh1SUNBZ0lDQWdJQ0FnSUdOdmIydHBaUzV3ZFhOb0tDZGtiMjFoYVc0OUp5QXJJR1J2YldGcGJpazdYRzRnSUNBZ0lDQWdJSDFjYmx4dUlDQWdJQ0FnSUNCcFppQW9jMlZqZFhKbElEMDlQU0IwY25WbEtTQjdYRzRnSUNBZ0lDQWdJQ0FnWTI5dmEybGxMbkIxYzJnb0ozTmxZM1Z5WlNjcE8xeHVJQ0FnSUNBZ0lDQjlYRzVjYmlBZ0lDQWdJQ0FnWkc5amRXMWxiblF1WTI5dmEybGxJRDBnWTI5dmEybGxMbXB2YVc0b0p6c2dKeWs3WEc0Z0lDQWdJQ0I5TEZ4dVhHNGdJQ0FnSUNCeVpXRmtPaUJtZFc1amRHbHZiaUJ5WldGa0tHNWhiV1VwSUh0Y2JpQWdJQ0FnSUNBZ2RtRnlJRzFoZEdOb0lEMGdaRzlqZFcxbGJuUXVZMjl2YTJsbExtMWhkR05vS0c1bGR5QlNaV2RGZUhBb0p5aGVmRHRjWEZ4Y2N5b3BLQ2NnS3lCdVlXMWxJQ3NnSnlrOUtGdGVPMTBxS1NjcEtUdGNiaUFnSUNBZ0lDQWdjbVYwZFhKdUlDaHRZWFJqYUNBL0lHUmxZMjlrWlZWU1NVTnZiWEJ2Ym1WdWRDaHRZWFJqYUZzelhTa2dPaUJ1ZFd4c0tUdGNiaUFnSUNBZ0lIMHNYRzVjYmlBZ0lDQWdJSEpsYlc5MlpUb2dablZ1WTNScGIyNGdjbVZ0YjNabEtHNWhiV1VwSUh0Y2JpQWdJQ0FnSUNBZ2RHaHBjeTUzY21sMFpTaHVZVzFsTENBbkp5d2dSR0YwWlM1dWIzY29LU0F0SURnMk5EQXdNREF3S1R0Y2JpQWdJQ0FnSUgxY2JpQWdJQ0I5TzF4dUlDQjlLU2dwSURwY2JseHVJQ0F2THlCT2IyNGdjM1JoYm1SaGNtUWdZbkp2ZDNObGNpQmxibllnS0hkbFlpQjNiM0pyWlhKekxDQnlaV0ZqZEMxdVlYUnBkbVVwSUd4aFkyc2dibVZsWkdWa0lITjFjSEJ2Y25RdVhHNGdJQ2htZFc1amRHbHZiaUJ1YjI1VGRHRnVaR0Z5WkVKeWIzZHpaWEpGYm5Zb0tTQjdYRzRnSUNBZ2NtVjBkWEp1SUh0Y2JpQWdJQ0FnSUhkeWFYUmxPaUJtZFc1amRHbHZiaUIzY21sMFpTZ3BJSHQ5TEZ4dUlDQWdJQ0FnY21WaFpEb2dablZ1WTNScGIyNGdjbVZoWkNncElIc2djbVYwZFhKdUlHNTFiR3c3SUgwc1hHNGdJQ0FnSUNCeVpXMXZkbVU2SUdaMWJtTjBhVzl1SUhKbGJXOTJaU2dwSUh0OVhHNGdJQ0FnZlR0Y2JpQWdmU2tvS1Z4dUtUdGNiaUlzSWlkMWMyVWdjM1J5YVdOMEp6dGNibHh1THlvcVhHNGdLaUJFWlhSbGNtMXBibVZ6SUhkb1pYUm9aWElnZEdobElITndaV05wWm1sbFpDQlZVa3dnYVhNZ1lXSnpiMngxZEdWY2JpQXFYRzRnS2lCQWNHRnlZVzBnZTNOMGNtbHVaMzBnZFhKc0lGUm9aU0JWVWt3Z2RHOGdkR1Z6ZEZ4dUlDb2dRSEpsZEhWeWJuTWdlMkp2YjJ4bFlXNTlJRlJ5ZFdVZ2FXWWdkR2hsSUhOd1pXTnBabWxsWkNCVlVrd2dhWE1nWVdKemIyeDFkR1VzSUc5MGFHVnlkMmx6WlNCbVlXeHpaVnh1SUNvdlhHNXRiMlIxYkdVdVpYaHdiM0owY3lBOUlHWjFibU4wYVc5dUlHbHpRV0p6YjJ4MWRHVlZVa3dvZFhKc0tTQjdYRzRnSUM4dklFRWdWVkpNSUdseklHTnZibk5wWkdWeVpXUWdZV0p6YjJ4MWRHVWdhV1lnYVhRZ1ltVm5hVzV6SUhkcGRHZ2dYQ0k4YzJOb1pXMWxQam92TDF3aUlHOXlJRndpTHk5Y0lpQW9jSEp2ZEc5amIyd3RjbVZzWVhScGRtVWdWVkpNS1M1Y2JpQWdMeThnVWtaRElETTVPRFlnWkdWbWFXNWxjeUJ6WTJobGJXVWdibUZ0WlNCaGN5QmhJSE5sY1hWbGJtTmxJRzltSUdOb1lYSmhZM1JsY25NZ1ltVm5hVzV1YVc1bklIZHBkR2dnWVNCc1pYUjBaWElnWVc1a0lHWnZiR3h2ZDJWa1hHNGdJQzh2SUdKNUlHRnVlU0JqYjIxaWFXNWhkR2x2YmlCdlppQnNaWFIwWlhKekxDQmthV2RwZEhNc0lIQnNkWE1zSUhCbGNtbHZaQ3dnYjNJZ2FIbHdhR1Z1TGx4dUlDQnlaWFIxY200Z0wxNG9XMkV0ZWwxYllTMTZYRnhrWEZ3clhGd3RYRnd1WFNvNktUOWNYQzljWEM4dmFTNTBaWE4wS0hWeWJDazdYRzU5TzF4dUlpd2lKM1Z6WlNCemRISnBZM1FuTzF4dVhHNTJZWElnZFhScGJITWdQU0J5WlhGMWFYSmxLQ2N1THk0dUwzVjBhV3h6SnlrN1hHNWNibTF2WkhWc1pTNWxlSEJ2Y25SeklEMGdLRnh1SUNCMWRHbHNjeTVwYzFOMFlXNWtZWEprUW5KdmQzTmxja1Z1ZGlncElEOWNibHh1SUNBdkx5QlRkR0Z1WkdGeVpDQmljbTkzYzJWeUlHVnVkbk1nYUdGMlpTQm1kV3hzSUhOMWNIQnZjblFnYjJZZ2RHaGxJRUZRU1hNZ2JtVmxaR1ZrSUhSdklIUmxjM1JjYmlBZ0x5OGdkMmhsZEdobGNpQjBhR1VnY21WeGRXVnpkQ0JWVWt3Z2FYTWdiMllnZEdobElITmhiV1VnYjNKcFoybHVJR0Z6SUdOMWNuSmxiblFnYkc5allYUnBiMjR1WEc0Z0lDaG1kVzVqZEdsdmJpQnpkR0Z1WkdGeVpFSnliM2R6WlhKRmJuWW9LU0I3WEc0Z0lDQWdkbUZ5SUcxemFXVWdQU0F2S0cxemFXVjhkSEpwWkdWdWRDa3ZhUzUwWlhOMEtHNWhkbWxuWVhSdmNpNTFjMlZ5UVdkbGJuUXBPMXh1SUNBZ0lIWmhjaUIxY214UVlYSnphVzVuVG05a1pTQTlJR1J2WTNWdFpXNTBMbU55WldGMFpVVnNaVzFsYm5Rb0oyRW5LVHRjYmlBZ0lDQjJZWElnYjNKcFoybHVWVkpNTzF4dVhHNGdJQ0FnTHlvcVhHNGdJQ0FnS2lCUVlYSnpaU0JoSUZWU1RDQjBieUJrYVhOamIzWmxjaUJwZENkeklHTnZiWEJ2Ym1WdWRITmNiaUFnSUNBcVhHNGdJQ0FnS2lCQWNHRnlZVzBnZTFOMGNtbHVaMzBnZFhKc0lGUm9aU0JWVWt3Z2RHOGdZbVVnY0dGeWMyVmtYRzRnSUNBZ0tpQkFjbVYwZFhKdWN5QjdUMkpxWldOMGZWeHVJQ0FnSUNvdlhHNGdJQ0FnWm5WdVkzUnBiMjRnY21WemIyeDJaVlZTVENoMWNtd3BJSHRjYmlBZ0lDQWdJSFpoY2lCb2NtVm1JRDBnZFhKc08xeHVYRzRnSUNBZ0lDQnBaaUFvYlhOcFpTa2dlMXh1SUNBZ0lDQWdJQ0F2THlCSlJTQnVaV1ZrY3lCaGRIUnlhV0oxZEdVZ2MyVjBJSFIzYVdObElIUnZJRzV2Y20xaGJHbDZaU0J3Y205d1pYSjBhV1Z6WEc0Z0lDQWdJQ0FnSUhWeWJGQmhjbk5wYm1kT2IyUmxMbk5sZEVGMGRISnBZblYwWlNnbmFISmxaaWNzSUdoeVpXWXBPMXh1SUNBZ0lDQWdJQ0JvY21WbUlEMGdkWEpzVUdGeWMybHVaMDV2WkdVdWFISmxaanRjYmlBZ0lDQWdJSDFjYmx4dUlDQWdJQ0FnZFhKc1VHRnljMmx1WjA1dlpHVXVjMlYwUVhSMGNtbGlkWFJsS0Nkb2NtVm1KeXdnYUhKbFppazdYRzVjYmlBZ0lDQWdJQzh2SUhWeWJGQmhjbk5wYm1kT2IyUmxJSEJ5YjNacFpHVnpJSFJvWlNCVmNteFZkR2xzY3lCcGJuUmxjbVpoWTJVZ0xTQm9kSFJ3T2k4dmRYSnNMbk53WldNdWQyaGhkSGRuTG05eVp5OGpkWEpzZFhScGJITmNiaUFnSUNBZ0lISmxkSFZ5YmlCN1hHNGdJQ0FnSUNBZ0lHaHlaV1k2SUhWeWJGQmhjbk5wYm1kT2IyUmxMbWh5WldZc1hHNGdJQ0FnSUNBZ0lIQnliM1J2WTI5c09pQjFjbXhRWVhKemFXNW5UbTlrWlM1d2NtOTBiMk52YkNBL0lIVnliRkJoY25OcGJtZE9iMlJsTG5CeWIzUnZZMjlzTG5KbGNHeGhZMlVvTHpva0x5d2dKeWNwSURvZ0p5Y3NYRzRnSUNBZ0lDQWdJR2h2YzNRNklIVnliRkJoY25OcGJtZE9iMlJsTG1odmMzUXNYRzRnSUNBZ0lDQWdJSE5sWVhKamFEb2dkWEpzVUdGeWMybHVaMDV2WkdVdWMyVmhjbU5vSUQ4Z2RYSnNVR0Z5YzJsdVowNXZaR1V1YzJWaGNtTm9MbkpsY0d4aFkyVW9MMTVjWEQ4dkxDQW5KeWtnT2lBbkp5eGNiaUFnSUNBZ0lDQWdhR0Z6YURvZ2RYSnNVR0Z5YzJsdVowNXZaR1V1YUdGemFDQS9JSFZ5YkZCaGNuTnBibWRPYjJSbExtaGhjMmd1Y21Wd2JHRmpaU2d2WGlNdkxDQW5KeWtnT2lBbkp5eGNiaUFnSUNBZ0lDQWdhRzl6ZEc1aGJXVTZJSFZ5YkZCaGNuTnBibWRPYjJSbExtaHZjM1J1WVcxbExGeHVJQ0FnSUNBZ0lDQndiM0owT2lCMWNteFFZWEp6YVc1blRtOWtaUzV3YjNKMExGeHVJQ0FnSUNBZ0lDQndZWFJvYm1GdFpUb2dLSFZ5YkZCaGNuTnBibWRPYjJSbExuQmhkR2h1WVcxbExtTm9ZWEpCZENnd0tTQTlQVDBnSnk4bktTQS9YRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0IxY214UVlYSnphVzVuVG05a1pTNXdZWFJvYm1GdFpTQTZYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FuTHljZ0t5QjFjbXhRWVhKemFXNW5UbTlrWlM1d1lYUm9ibUZ0WlZ4dUlDQWdJQ0FnZlR0Y2JpQWdJQ0I5WEc1Y2JpQWdJQ0J2Y21sbmFXNVZVa3dnUFNCeVpYTnZiSFpsVlZKTUtIZHBibVJ2ZHk1c2IyTmhkR2x2Ymk1b2NtVm1LVHRjYmx4dUlDQWdJQzhxS2x4dUlDQWdJQ29nUkdWMFpYSnRhVzVsSUdsbUlHRWdWVkpNSUhOb1lYSmxjeUIwYUdVZ2MyRnRaU0J2Y21sbmFXNGdZWE1nZEdobElHTjFjbkpsYm5RZ2JHOWpZWFJwYjI1Y2JpQWdJQ0FxWEc0Z0lDQWdLaUJBY0dGeVlXMGdlMU4wY21sdVozMGdjbVZ4ZFdWemRGVlNUQ0JVYUdVZ1ZWSk1JSFJ2SUhSbGMzUmNiaUFnSUNBcUlFQnlaWFIxY201eklIdGliMjlzWldGdWZTQlVjblZsSUdsbUlGVlNUQ0J6YUdGeVpYTWdkR2hsSUhOaGJXVWdiM0pwWjJsdUxDQnZkR2hsY25kcGMyVWdabUZzYzJWY2JpQWdJQ0FxTDF4dUlDQWdJSEpsZEhWeWJpQm1kVzVqZEdsdmJpQnBjMVZTVEZOaGJXVlBjbWxuYVc0b2NtVnhkV1Z6ZEZWU1RDa2dlMXh1SUNBZ0lDQWdkbUZ5SUhCaGNuTmxaQ0E5SUNoMWRHbHNjeTVwYzFOMGNtbHVaeWh5WlhGMVpYTjBWVkpNS1NrZ1B5QnlaWE52YkhabFZWSk1LSEpsY1hWbGMzUlZVa3dwSURvZ2NtVnhkV1Z6ZEZWU1REdGNiaUFnSUNBZ0lISmxkSFZ5YmlBb2NHRnljMlZrTG5CeWIzUnZZMjlzSUQwOVBTQnZjbWxuYVc1VlVrd3VjSEp2ZEc5amIyd2dKaVpjYmlBZ0lDQWdJQ0FnSUNBZ0lIQmhjbk5sWkM1b2IzTjBJRDA5UFNCdmNtbG5hVzVWVWt3dWFHOXpkQ2s3WEc0Z0lDQWdmVHRjYmlBZ2ZTa29LU0E2WEc1Y2JpQWdMeThnVG05dUlITjBZVzVrWVhKa0lHSnliM2R6WlhJZ1pXNTJjeUFvZDJWaUlIZHZjbXRsY25Nc0lISmxZV04wTFc1aGRHbDJaU2tnYkdGamF5QnVaV1ZrWldRZ2MzVndjRzl5ZEM1Y2JpQWdLR1oxYm1OMGFXOXVJRzV2YmxOMFlXNWtZWEprUW5KdmQzTmxja1Z1ZGlncElIdGNiaUFnSUNCeVpYUjFjbTRnWm5WdVkzUnBiMjRnYVhOVlVreFRZVzFsVDNKcFoybHVLQ2tnZTF4dUlDQWdJQ0FnY21WMGRYSnVJSFJ5ZFdVN1hHNGdJQ0FnZlR0Y2JpQWdmU2tvS1Z4dUtUdGNiaUlzSWlkMWMyVWdjM1J5YVdOMEp6dGNibHh1ZG1GeUlIVjBhV3h6SUQwZ2NtVnhkV2x5WlNnbkxpNHZkWFJwYkhNbktUdGNibHh1Ylc5a2RXeGxMbVY0Y0c5eWRITWdQU0JtZFc1amRHbHZiaUJ1YjNKdFlXeHBlbVZJWldGa1pYSk9ZVzFsS0dobFlXUmxjbk1zSUc1dmNtMWhiR2w2WldST1lXMWxLU0I3WEc0Z0lIVjBhV3h6TG1admNrVmhZMmdvYUdWaFpHVnljeXdnWm5WdVkzUnBiMjRnY0hKdlkyVnpjMGhsWVdSbGNpaDJZV3gxWlN3Z2JtRnRaU2tnZTF4dUlDQWdJR2xtSUNodVlXMWxJQ0U5UFNCdWIzSnRZV3hwZW1Wa1RtRnRaU0FtSmlCdVlXMWxMblJ2VlhCd1pYSkRZWE5sS0NrZ1BUMDlJRzV2Y20xaGJHbDZaV1JPWVcxbExuUnZWWEJ3WlhKRFlYTmxLQ2twSUh0Y2JpQWdJQ0FnSUdobFlXUmxjbk5iYm05eWJXRnNhWHBsWkU1aGJXVmRJRDBnZG1Gc2RXVTdYRzRnSUNBZ0lDQmtaV3hsZEdVZ2FHVmhaR1Z5YzF0dVlXMWxYVHRjYmlBZ0lDQjlYRzRnSUgwcE8xeHVmVHRjYmlJc0lpZDFjMlVnYzNSeWFXTjBKenRjYmx4dWRtRnlJSFYwYVd4eklEMGdjbVZ4ZFdseVpTZ25MaTh1TGk5MWRHbHNjeWNwTzF4dVhHNHZMeUJJWldGa1pYSnpJSGRvYjNObElHUjFjR3hwWTJGMFpYTWdZWEpsSUdsbmJtOXlaV1FnWW5rZ2JtOWtaVnh1THk4Z1l5NW1MaUJvZEhSd2N6b3ZMMjV2WkdWcWN5NXZjbWN2WVhCcEwyaDBkSEF1YUhSdGJDTm9kSFJ3WDIxbGMzTmhaMlZmYUdWaFpHVnljMXh1ZG1GeUlHbG5ibTl5WlVSMWNHeHBZMkYwWlU5bUlEMGdXMXh1SUNBbllXZGxKeXdnSjJGMWRHaHZjbWw2WVhScGIyNG5MQ0FuWTI5dWRHVnVkQzFzWlc1bmRHZ25MQ0FuWTI5dWRHVnVkQzEwZVhCbEp5d2dKMlYwWVdjbkxGeHVJQ0FuWlhod2FYSmxjeWNzSUNkbWNtOXRKeXdnSjJodmMzUW5MQ0FuYVdZdGJXOWthV1pwWldRdGMybHVZMlVuTENBbmFXWXRkVzV0YjJScFptbGxaQzF6YVc1alpTY3NYRzRnSUNkc1lYTjBMVzF2WkdsbWFXVmtKeXdnSjJ4dlkyRjBhVzl1Snl3Z0oyMWhlQzFtYjNKM1lYSmtjeWNzSUNkd2NtOTRlUzFoZFhSb2IzSnBlbUYwYVc5dUp5eGNiaUFnSjNKbFptVnlaWEluTENBbmNtVjBjbmt0WVdaMFpYSW5MQ0FuZFhObGNpMWhaMlZ1ZENkY2JsMDdYRzVjYmk4cUtseHVJQ29nVUdGeWMyVWdhR1ZoWkdWeWN5QnBiblJ2SUdGdUlHOWlhbVZqZEZ4dUlDcGNiaUFxSUdCZ1lGeHVJQ29nUkdGMFpUb2dWMlZrTENBeU55QkJkV2NnTWpBeE5DQXdPRG8xT0RvME9TQkhUVlJjYmlBcUlFTnZiblJsYm5RdFZIbHdaVG9nWVhCd2JHbGpZWFJwYjI0dmFuTnZibHh1SUNvZ1EyOXVibVZqZEdsdmJqb2dhMlZsY0MxaGJHbDJaVnh1SUNvZ1ZISmhibk5tWlhJdFJXNWpiMlJwYm1jNklHTm9kVzVyWldSY2JpQXFJR0JnWUZ4dUlDcGNiaUFxSUVCd1lYSmhiU0I3VTNSeWFXNW5mU0JvWldGa1pYSnpJRWhsWVdSbGNuTWdibVZsWkdsdVp5QjBieUJpWlNCd1lYSnpaV1JjYmlBcUlFQnlaWFIxY201eklIdFBZbXBsWTNSOUlFaGxZV1JsY25NZ2NHRnljMlZrSUdsdWRHOGdZVzRnYjJKcVpXTjBYRzRnS2k5Y2JtMXZaSFZzWlM1bGVIQnZjblJ6SUQwZ1puVnVZM1JwYjI0Z2NHRnljMlZJWldGa1pYSnpLR2hsWVdSbGNuTXBJSHRjYmlBZ2RtRnlJSEJoY25ObFpDQTlJSHQ5TzF4dUlDQjJZWElnYTJWNU8xeHVJQ0IyWVhJZ2RtRnNPMXh1SUNCMllYSWdhVHRjYmx4dUlDQnBaaUFvSVdobFlXUmxjbk1wSUhzZ2NtVjBkWEp1SUhCaGNuTmxaRHNnZlZ4dVhHNGdJSFYwYVd4ekxtWnZja1ZoWTJnb2FHVmhaR1Z5Y3k1emNHeHBkQ2duWEZ4dUp5a3NJR1oxYm1OMGFXOXVJSEJoY25ObGNpaHNhVzVsS1NCN1hHNGdJQ0FnYVNBOUlHeHBibVV1YVc1a1pYaFBaaWduT2ljcE8xeHVJQ0FnSUd0bGVTQTlJSFYwYVd4ekxuUnlhVzBvYkdsdVpTNXpkV0p6ZEhJb01Dd2dhU2twTG5SdlRHOTNaWEpEWVhObEtDazdYRzRnSUNBZ2RtRnNJRDBnZFhScGJITXVkSEpwYlNoc2FXNWxMbk4xWW5OMGNpaHBJQ3NnTVNrcE8xeHVYRzRnSUNBZ2FXWWdLR3RsZVNrZ2UxeHVJQ0FnSUNBZ2FXWWdLSEJoY25ObFpGdHJaWGxkSUNZbUlHbG5ibTl5WlVSMWNHeHBZMkYwWlU5bUxtbHVaR1Y0VDJZb2EyVjVLU0ErUFNBd0tTQjdYRzRnSUNBZ0lDQWdJSEpsZEhWeWJqdGNiaUFnSUNBZ0lIMWNiaUFnSUNBZ0lHbG1JQ2hyWlhrZ1BUMDlJQ2R6WlhRdFkyOXZhMmxsSnlrZ2UxeHVJQ0FnSUNBZ0lDQndZWEp6WldSYmEyVjVYU0E5SUNod1lYSnpaV1JiYTJWNVhTQS9JSEJoY25ObFpGdHJaWGxkSURvZ1cxMHBMbU52Ym1OaGRDaGJkbUZzWFNrN1hHNGdJQ0FnSUNCOUlHVnNjMlVnZTF4dUlDQWdJQ0FnSUNCd1lYSnpaV1JiYTJWNVhTQTlJSEJoY25ObFpGdHJaWGxkSUQ4Z2NHRnljMlZrVzJ0bGVWMGdLeUFuTENBbklDc2dkbUZzSURvZ2RtRnNPMXh1SUNBZ0lDQWdmVnh1SUNBZ0lIMWNiaUFnZlNrN1hHNWNiaUFnY21WMGRYSnVJSEJoY25ObFpEdGNibjA3WEc0aUxDSW5kWE5sSUhOMGNtbGpkQ2M3WEc1Y2JpOHFLbHh1SUNvZ1UzbHVkR0ZqZEdsaklITjFaMkZ5SUdadmNpQnBiblp2YTJsdVp5QmhJR1oxYm1OMGFXOXVJR0Z1WkNCbGVIQmhibVJwYm1jZ1lXNGdZWEp5WVhrZ1ptOXlJR0Z5WjNWdFpXNTBjeTVjYmlBcVhHNGdLaUJEYjIxdGIyNGdkWE5sSUdOaGMyVWdkMjkxYkdRZ1ltVWdkRzhnZFhObElHQkdkVzVqZEdsdmJpNXdjbTkwYjNSNWNHVXVZWEJ3YkhsZ0xseHVJQ3BjYmlBcUlDQmdZR0JxYzF4dUlDb2dJR1oxYm1OMGFXOXVJR1lvZUN3Z2VTd2dlaWtnZTMxY2JpQXFJQ0IyWVhJZ1lYSm5jeUE5SUZzeExDQXlMQ0F6WFR0Y2JpQXFJQ0JtTG1Gd2NHeDVLRzUxYkd3c0lHRnlaM01wTzF4dUlDb2dJR0JnWUZ4dUlDcGNiaUFxSUZkcGRHZ2dZSE53Y21WaFpHQWdkR2hwY3lCbGVHRnRjR3hsSUdOaGJpQmlaU0J5WlMxM2NtbDBkR1Z1TGx4dUlDcGNiaUFxSUNCZ1lHQnFjMXh1SUNvZ0lITndjbVZoWkNobWRXNWpkR2x2YmloNExDQjVMQ0I2S1NCN2ZTa29XekVzSURJc0lETmRLVHRjYmlBcUlDQmdZR0JjYmlBcVhHNGdLaUJBY0dGeVlXMGdlMFoxYm1OMGFXOXVmU0JqWVd4c1ltRmphMXh1SUNvZ1FISmxkSFZ5Ym5NZ2UwWjFibU4wYVc5dWZWeHVJQ292WEc1dGIyUjFiR1V1Wlhod2IzSjBjeUE5SUdaMWJtTjBhVzl1SUhOd2NtVmhaQ2hqWVd4c1ltRmpheWtnZTF4dUlDQnlaWFIxY200Z1puVnVZM1JwYjI0Z2QzSmhjQ2hoY25JcElIdGNiaUFnSUNCeVpYUjFjbTRnWTJGc2JHSmhZMnN1WVhCd2JIa29iblZzYkN3Z1lYSnlLVHRjYmlBZ2ZUdGNibjA3WEc0aUxDSW5kWE5sSUhOMGNtbGpkQ2M3WEc1Y2JuWmhjaUJpYVc1a0lEMGdjbVZ4ZFdseVpTZ25MaTlvWld4d1pYSnpMMkpwYm1RbktUdGNiblpoY2lCcGMwSjFabVpsY2lBOUlISmxjWFZwY21Vb0oybHpMV0oxWm1abGNpY3BPMXh1WEc0dkttZHNiMkpoYkNCMGIxTjBjbWx1WnpwMGNuVmxLaTljYmx4dUx5OGdkWFJwYkhNZ2FYTWdZU0JzYVdKeVlYSjVJRzltSUdkbGJtVnlhV01nYUdWc2NHVnlJR1oxYm1OMGFXOXVjeUJ1YjI0dGMzQmxZMmxtYVdNZ2RHOGdZWGhwYjNOY2JseHVkbUZ5SUhSdlUzUnlhVzVuSUQwZ1QySnFaV04wTG5CeWIzUnZkSGx3WlM1MGIxTjBjbWx1Wnp0Y2JseHVMeW9xWEc0Z0tpQkVaWFJsY20xcGJtVWdhV1lnWVNCMllXeDFaU0JwY3lCaGJpQkJjbkpoZVZ4dUlDcGNiaUFxSUVCd1lYSmhiU0I3VDJKcVpXTjBmU0IyWVd3Z1ZHaGxJSFpoYkhWbElIUnZJSFJsYzNSY2JpQXFJRUJ5WlhSMWNtNXpJSHRpYjI5c1pXRnVmU0JVY25WbElHbG1JSFpoYkhWbElHbHpJR0Z1SUVGeWNtRjVMQ0J2ZEdobGNuZHBjMlVnWm1Gc2MyVmNiaUFxTDF4dVpuVnVZM1JwYjI0Z2FYTkJjbkpoZVNoMllXd3BJSHRjYmlBZ2NtVjBkWEp1SUhSdlUzUnlhVzVuTG1OaGJHd29kbUZzS1NBOVBUMGdKMXR2WW1wbFkzUWdRWEp5WVhsZEp6dGNibjFjYmx4dUx5b3FYRzRnS2lCRVpYUmxjbTFwYm1VZ2FXWWdZU0IyWVd4MVpTQnBjeUJoYmlCQmNuSmhlVUoxWm1abGNseHVJQ3BjYmlBcUlFQndZWEpoYlNCN1QySnFaV04wZlNCMllXd2dWR2hsSUhaaGJIVmxJSFJ2SUhSbGMzUmNiaUFxSUVCeVpYUjFjbTV6SUh0aWIyOXNaV0Z1ZlNCVWNuVmxJR2xtSUhaaGJIVmxJR2x6SUdGdUlFRnljbUY1UW5WbVptVnlMQ0J2ZEdobGNuZHBjMlVnWm1Gc2MyVmNiaUFxTDF4dVpuVnVZM1JwYjI0Z2FYTkJjbkpoZVVKMVptWmxjaWgyWVd3cElIdGNiaUFnY21WMGRYSnVJSFJ2VTNSeWFXNW5MbU5oYkd3b2RtRnNLU0E5UFQwZ0oxdHZZbXBsWTNRZ1FYSnlZWGxDZFdabVpYSmRKenRjYm4xY2JseHVMeW9xWEc0Z0tpQkVaWFJsY20xcGJtVWdhV1lnWVNCMllXeDFaU0JwY3lCaElFWnZjbTFFWVhSaFhHNGdLbHh1SUNvZ1FIQmhjbUZ0SUh0UFltcGxZM1I5SUhaaGJDQlVhR1VnZG1Gc2RXVWdkRzhnZEdWemRGeHVJQ29nUUhKbGRIVnlibk1nZTJKdmIyeGxZVzU5SUZSeWRXVWdhV1lnZG1Gc2RXVWdhWE1nWVc0Z1JtOXliVVJoZEdFc0lHOTBhR1Z5ZDJselpTQm1ZV3h6WlZ4dUlDb3ZYRzVtZFc1amRHbHZiaUJwYzBadmNtMUVZWFJoS0haaGJDa2dlMXh1SUNCeVpYUjFjbTRnS0hSNWNHVnZaaUJHYjNKdFJHRjBZU0FoUFQwZ0ozVnVaR1ZtYVc1bFpDY3BJQ1ltSUNoMllXd2dhVzV6ZEdGdVkyVnZaaUJHYjNKdFJHRjBZU2s3WEc1OVhHNWNiaThxS2x4dUlDb2dSR1YwWlhKdGFXNWxJR2xtSUdFZ2RtRnNkV1VnYVhNZ1lTQjJhV1YzSUc5dUlHRnVJRUZ5Y21GNVFuVm1abVZ5WEc0Z0tseHVJQ29nUUhCaGNtRnRJSHRQWW1wbFkzUjlJSFpoYkNCVWFHVWdkbUZzZFdVZ2RHOGdkR1Z6ZEZ4dUlDb2dRSEpsZEhWeWJuTWdlMkp2YjJ4bFlXNTlJRlJ5ZFdVZ2FXWWdkbUZzZFdVZ2FYTWdZU0IyYVdWM0lHOXVJR0Z1SUVGeWNtRjVRblZtWm1WeUxDQnZkR2hsY25kcGMyVWdabUZzYzJWY2JpQXFMMXh1Wm5WdVkzUnBiMjRnYVhOQmNuSmhlVUoxWm1abGNsWnBaWGNvZG1Gc0tTQjdYRzRnSUhaaGNpQnlaWE4xYkhRN1hHNGdJR2xtSUNnb2RIbHdaVzltSUVGeWNtRjVRblZtWm1WeUlDRTlQU0FuZFc1a1pXWnBibVZrSnlrZ0ppWWdLRUZ5Y21GNVFuVm1abVZ5TG1selZtbGxkeWtwSUh0Y2JpQWdJQ0J5WlhOMWJIUWdQU0JCY25KaGVVSjFabVpsY2k1cGMxWnBaWGNvZG1Gc0tUdGNiaUFnZlNCbGJITmxJSHRjYmlBZ0lDQnlaWE4xYkhRZ1BTQW9kbUZzS1NBbUppQW9kbUZzTG1KMVptWmxjaWtnSmlZZ0tIWmhiQzVpZFdabVpYSWdhVzV6ZEdGdVkyVnZaaUJCY25KaGVVSjFabVpsY2lrN1hHNGdJSDFjYmlBZ2NtVjBkWEp1SUhKbGMzVnNkRHRjYm4xY2JseHVMeW9xWEc0Z0tpQkVaWFJsY20xcGJtVWdhV1lnWVNCMllXeDFaU0JwY3lCaElGTjBjbWx1WjF4dUlDcGNiaUFxSUVCd1lYSmhiU0I3VDJKcVpXTjBmU0IyWVd3Z1ZHaGxJSFpoYkhWbElIUnZJSFJsYzNSY2JpQXFJRUJ5WlhSMWNtNXpJSHRpYjI5c1pXRnVmU0JVY25WbElHbG1JSFpoYkhWbElHbHpJR0VnVTNSeWFXNW5MQ0J2ZEdobGNuZHBjMlVnWm1Gc2MyVmNiaUFxTDF4dVpuVnVZM1JwYjI0Z2FYTlRkSEpwYm1jb2RtRnNLU0I3WEc0Z0lISmxkSFZ5YmlCMGVYQmxiMllnZG1Gc0lEMDlQU0FuYzNSeWFXNW5KenRjYm4xY2JseHVMeW9xWEc0Z0tpQkVaWFJsY20xcGJtVWdhV1lnWVNCMllXeDFaU0JwY3lCaElFNTFiV0psY2x4dUlDcGNiaUFxSUVCd1lYSmhiU0I3VDJKcVpXTjBmU0IyWVd3Z1ZHaGxJSFpoYkhWbElIUnZJSFJsYzNSY2JpQXFJRUJ5WlhSMWNtNXpJSHRpYjI5c1pXRnVmU0JVY25WbElHbG1JSFpoYkhWbElHbHpJR0VnVG5WdFltVnlMQ0J2ZEdobGNuZHBjMlVnWm1Gc2MyVmNiaUFxTDF4dVpuVnVZM1JwYjI0Z2FYTk9kVzFpWlhJb2RtRnNLU0I3WEc0Z0lISmxkSFZ5YmlCMGVYQmxiMllnZG1Gc0lEMDlQU0FuYm5WdFltVnlKenRjYm4xY2JseHVMeW9xWEc0Z0tpQkVaWFJsY20xcGJtVWdhV1lnWVNCMllXeDFaU0JwY3lCMWJtUmxabWx1WldSY2JpQXFYRzRnS2lCQWNHRnlZVzBnZTA5aWFtVmpkSDBnZG1Gc0lGUm9aU0IyWVd4MVpTQjBieUIwWlhOMFhHNGdLaUJBY21WMGRYSnVjeUI3WW05dmJHVmhibjBnVkhKMVpTQnBaaUIwYUdVZ2RtRnNkV1VnYVhNZ2RXNWtaV1pwYm1Wa0xDQnZkR2hsY25kcGMyVWdabUZzYzJWY2JpQXFMMXh1Wm5WdVkzUnBiMjRnYVhOVmJtUmxabWx1WldRb2RtRnNLU0I3WEc0Z0lISmxkSFZ5YmlCMGVYQmxiMllnZG1Gc0lEMDlQU0FuZFc1a1pXWnBibVZrSnp0Y2JuMWNibHh1THlvcVhHNGdLaUJFWlhSbGNtMXBibVVnYVdZZ1lTQjJZV3gxWlNCcGN5QmhiaUJQWW1wbFkzUmNiaUFxWEc0Z0tpQkFjR0Z5WVcwZ2UwOWlhbVZqZEgwZ2RtRnNJRlJvWlNCMllXeDFaU0IwYnlCMFpYTjBYRzRnS2lCQWNtVjBkWEp1Y3lCN1ltOXZiR1ZoYm4wZ1ZISjFaU0JwWmlCMllXeDFaU0JwY3lCaGJpQlBZbXBsWTNRc0lHOTBhR1Z5ZDJselpTQm1ZV3h6WlZ4dUlDb3ZYRzVtZFc1amRHbHZiaUJwYzA5aWFtVmpkQ2gyWVd3cElIdGNiaUFnY21WMGRYSnVJSFpoYkNBaFBUMGdiblZzYkNBbUppQjBlWEJsYjJZZ2RtRnNJRDA5UFNBbmIySnFaV04wSnp0Y2JuMWNibHh1THlvcVhHNGdLaUJFWlhSbGNtMXBibVVnYVdZZ1lTQjJZV3gxWlNCcGN5QmhJRVJoZEdWY2JpQXFYRzRnS2lCQWNHRnlZVzBnZTA5aWFtVmpkSDBnZG1Gc0lGUm9aU0IyWVd4MVpTQjBieUIwWlhOMFhHNGdLaUJBY21WMGRYSnVjeUI3WW05dmJHVmhibjBnVkhKMVpTQnBaaUIyWVd4MVpTQnBjeUJoSUVSaGRHVXNJRzkwYUdWeWQybHpaU0JtWVd4elpWeHVJQ292WEc1bWRXNWpkR2x2YmlCcGMwUmhkR1VvZG1Gc0tTQjdYRzRnSUhKbGRIVnliaUIwYjFOMGNtbHVaeTVqWVd4c0tIWmhiQ2tnUFQwOUlDZGJiMkpxWldOMElFUmhkR1ZkSnp0Y2JuMWNibHh1THlvcVhHNGdLaUJFWlhSbGNtMXBibVVnYVdZZ1lTQjJZV3gxWlNCcGN5QmhJRVpwYkdWY2JpQXFYRzRnS2lCQWNHRnlZVzBnZTA5aWFtVmpkSDBnZG1Gc0lGUm9aU0IyWVd4MVpTQjBieUIwWlhOMFhHNGdLaUJBY21WMGRYSnVjeUI3WW05dmJHVmhibjBnVkhKMVpTQnBaaUIyWVd4MVpTQnBjeUJoSUVacGJHVXNJRzkwYUdWeWQybHpaU0JtWVd4elpWeHVJQ292WEc1bWRXNWpkR2x2YmlCcGMwWnBiR1VvZG1Gc0tTQjdYRzRnSUhKbGRIVnliaUIwYjFOMGNtbHVaeTVqWVd4c0tIWmhiQ2tnUFQwOUlDZGJiMkpxWldOMElFWnBiR1ZkSnp0Y2JuMWNibHh1THlvcVhHNGdLaUJFWlhSbGNtMXBibVVnYVdZZ1lTQjJZV3gxWlNCcGN5QmhJRUpzYjJKY2JpQXFYRzRnS2lCQWNHRnlZVzBnZTA5aWFtVmpkSDBnZG1Gc0lGUm9aU0IyWVd4MVpTQjBieUIwWlhOMFhHNGdLaUJBY21WMGRYSnVjeUI3WW05dmJHVmhibjBnVkhKMVpTQnBaaUIyWVd4MVpTQnBjeUJoSUVKc2IySXNJRzkwYUdWeWQybHpaU0JtWVd4elpWeHVJQ292WEc1bWRXNWpkR2x2YmlCcGMwSnNiMklvZG1Gc0tTQjdYRzRnSUhKbGRIVnliaUIwYjFOMGNtbHVaeTVqWVd4c0tIWmhiQ2tnUFQwOUlDZGJiMkpxWldOMElFSnNiMkpkSnp0Y2JuMWNibHh1THlvcVhHNGdLaUJFWlhSbGNtMXBibVVnYVdZZ1lTQjJZV3gxWlNCcGN5QmhJRVoxYm1OMGFXOXVYRzRnS2x4dUlDb2dRSEJoY21GdElIdFBZbXBsWTNSOUlIWmhiQ0JVYUdVZ2RtRnNkV1VnZEc4Z2RHVnpkRnh1SUNvZ1FISmxkSFZ5Ym5NZ2UySnZiMnhsWVc1OUlGUnlkV1VnYVdZZ2RtRnNkV1VnYVhNZ1lTQkdkVzVqZEdsdmJpd2diM1JvWlhKM2FYTmxJR1poYkhObFhHNGdLaTljYm1aMWJtTjBhVzl1SUdselJuVnVZM1JwYjI0b2RtRnNLU0I3WEc0Z0lISmxkSFZ5YmlCMGIxTjBjbWx1Wnk1allXeHNLSFpoYkNrZ1BUMDlJQ2RiYjJKcVpXTjBJRVoxYm1OMGFXOXVYU2M3WEc1OVhHNWNiaThxS2x4dUlDb2dSR1YwWlhKdGFXNWxJR2xtSUdFZ2RtRnNkV1VnYVhNZ1lTQlRkSEpsWVcxY2JpQXFYRzRnS2lCQWNHRnlZVzBnZTA5aWFtVmpkSDBnZG1Gc0lGUm9aU0IyWVd4MVpTQjBieUIwWlhOMFhHNGdLaUJBY21WMGRYSnVjeUI3WW05dmJHVmhibjBnVkhKMVpTQnBaaUIyWVd4MVpTQnBjeUJoSUZOMGNtVmhiU3dnYjNSb1pYSjNhWE5sSUdaaGJITmxYRzRnS2k5Y2JtWjFibU4wYVc5dUlHbHpVM1J5WldGdEtIWmhiQ2tnZTF4dUlDQnlaWFIxY200Z2FYTlBZbXBsWTNRb2RtRnNLU0FtSmlCcGMwWjFibU4wYVc5dUtIWmhiQzV3YVhCbEtUdGNibjFjYmx4dUx5b3FYRzRnS2lCRVpYUmxjbTFwYm1VZ2FXWWdZU0IyWVd4MVpTQnBjeUJoSUZWU1RGTmxZWEpqYUZCaGNtRnRjeUJ2WW1wbFkzUmNiaUFxWEc0Z0tpQkFjR0Z5WVcwZ2UwOWlhbVZqZEgwZ2RtRnNJRlJvWlNCMllXeDFaU0IwYnlCMFpYTjBYRzRnS2lCQWNtVjBkWEp1Y3lCN1ltOXZiR1ZoYm4wZ1ZISjFaU0JwWmlCMllXeDFaU0JwY3lCaElGVlNURk5sWVhKamFGQmhjbUZ0Y3lCdlltcGxZM1FzSUc5MGFHVnlkMmx6WlNCbVlXeHpaVnh1SUNvdlhHNW1kVzVqZEdsdmJpQnBjMVZTVEZObFlYSmphRkJoY21GdGN5aDJZV3dwSUh0Y2JpQWdjbVYwZFhKdUlIUjVjR1Z2WmlCVlVreFRaV0Z5WTJoUVlYSmhiWE1nSVQwOUlDZDFibVJsWm1sdVpXUW5JQ1ltSUhaaGJDQnBibk4wWVc1alpXOW1JRlZTVEZObFlYSmphRkJoY21GdGN6dGNibjFjYmx4dUx5b3FYRzRnS2lCVWNtbHRJR1Y0WTJWemN5QjNhR2wwWlhOd1lXTmxJRzltWmlCMGFHVWdZbVZuYVc1dWFXNW5JR0Z1WkNCbGJtUWdiMllnWVNCemRISnBibWRjYmlBcVhHNGdLaUJBY0dGeVlXMGdlMU4wY21sdVozMGdjM1J5SUZSb1pTQlRkSEpwYm1jZ2RHOGdkSEpwYlZ4dUlDb2dRSEpsZEhWeWJuTWdlMU4wY21sdVozMGdWR2hsSUZOMGNtbHVaeUJtY21WbFpDQnZaaUJsZUdObGMzTWdkMmhwZEdWemNHRmpaVnh1SUNvdlhHNW1kVzVqZEdsdmJpQjBjbWx0S0hOMGNpa2dlMXh1SUNCeVpYUjFjbTRnYzNSeUxuSmxjR3hoWTJVb0wxNWNYSE1xTHl3Z0p5Y3BMbkpsY0d4aFkyVW9MMXhjY3lva0x5d2dKeWNwTzF4dWZWeHVYRzR2S2lwY2JpQXFJRVJsZEdWeWJXbHVaU0JwWmlCM1pTZHlaU0J5ZFc1dWFXNW5JR2x1SUdFZ2MzUmhibVJoY21RZ1luSnZkM05sY2lCbGJuWnBjbTl1YldWdWRGeHVJQ3BjYmlBcUlGUm9hWE1nWVd4c2IzZHpJR0Y0YVc5eklIUnZJSEoxYmlCcGJpQmhJSGRsWWlCM2IzSnJaWElzSUdGdVpDQnlaV0ZqZEMxdVlYUnBkbVV1WEc0Z0tpQkNiM1JvSUdWdWRtbHliMjV0Wlc1MGN5QnpkWEJ3YjNKMElGaE5URWgwZEhCU1pYRjFaWE4wTENCaWRYUWdibTkwSUdaMWJHeDVJSE4wWVc1a1lYSmtJR2RzYjJKaGJITXVYRzRnS2x4dUlDb2dkMlZpSUhkdmNtdGxjbk02WEc0Z0tpQWdkSGx3Wlc5bUlIZHBibVJ2ZHlBdFBpQjFibVJsWm1sdVpXUmNiaUFxSUNCMGVYQmxiMllnWkc5amRXMWxiblFnTFQ0Z2RXNWtaV1pwYm1Wa1hHNGdLbHh1SUNvZ2NtVmhZM1F0Ym1GMGFYWmxPbHh1SUNvZ0lHNWhkbWxuWVhSdmNpNXdjbTlrZFdOMElDMCtJQ2RTWldGamRFNWhkR2wyWlNkY2JpQXFMMXh1Wm5WdVkzUnBiMjRnYVhOVGRHRnVaR0Z5WkVKeWIzZHpaWEpGYm5Zb0tTQjdYRzRnSUdsbUlDaDBlWEJsYjJZZ2JtRjJhV2RoZEc5eUlDRTlQU0FuZFc1a1pXWnBibVZrSnlBbUppQnVZWFpwWjJGMGIzSXVjSEp2WkhWamRDQTlQVDBnSjFKbFlXTjBUbUYwYVhabEp5a2dlMXh1SUNBZ0lISmxkSFZ5YmlCbVlXeHpaVHRjYmlBZ2ZWeHVJQ0J5WlhSMWNtNGdLRnh1SUNBZ0lIUjVjR1Z2WmlCM2FXNWtiM2NnSVQwOUlDZDFibVJsWm1sdVpXUW5JQ1ltWEc0Z0lDQWdkSGx3Wlc5bUlHUnZZM1Z0Wlc1MElDRTlQU0FuZFc1a1pXWnBibVZrSjF4dUlDQXBPMXh1ZlZ4dVhHNHZLaXBjYmlBcUlFbDBaWEpoZEdVZ2IzWmxjaUJoYmlCQmNuSmhlU0J2Y2lCaGJpQlBZbXBsWTNRZ2FXNTJiMnRwYm1jZ1lTQm1kVzVqZEdsdmJpQm1iM0lnWldGamFDQnBkR1Z0TGx4dUlDcGNiaUFxSUVsbUlHQnZZbXBnSUdseklHRnVJRUZ5Y21GNUlHTmhiR3hpWVdOcklIZHBiR3dnWW1VZ1kyRnNiR1ZrSUhCaGMzTnBibWRjYmlBcUlIUm9aU0IyWVd4MVpTd2dhVzVrWlhnc0lHRnVaQ0JqYjIxd2JHVjBaU0JoY25KaGVTQm1iM0lnWldGamFDQnBkR1Z0TGx4dUlDcGNiaUFxSUVsbUlDZHZZbW9uSUdseklHRnVJRTlpYW1WamRDQmpZV3hzWW1GamF5QjNhV3hzSUdKbElHTmhiR3hsWkNCd1lYTnphVzVuWEc0Z0tpQjBhR1VnZG1Gc2RXVXNJR3RsZVN3Z1lXNWtJR052YlhCc1pYUmxJRzlpYW1WamRDQm1iM0lnWldGamFDQndjbTl3WlhKMGVTNWNiaUFxWEc0Z0tpQkFjR0Z5WVcwZ2UwOWlhbVZqZEh4QmNuSmhlWDBnYjJKcUlGUm9aU0J2WW1wbFkzUWdkRzhnYVhSbGNtRjBaVnh1SUNvZ1FIQmhjbUZ0SUh0R2RXNWpkR2x2Ym4wZ1ptNGdWR2hsSUdOaGJHeGlZV05ySUhSdklHbHVkbTlyWlNCbWIzSWdaV0ZqYUNCcGRHVnRYRzRnS2k5Y2JtWjFibU4wYVc5dUlHWnZja1ZoWTJnb2IySnFMQ0JtYmlrZ2UxeHVJQ0F2THlCRWIyNG5kQ0JpYjNSb1pYSWdhV1lnYm04Z2RtRnNkV1VnY0hKdmRtbGtaV1JjYmlBZ2FXWWdLRzlpYWlBOVBUMGdiblZzYkNCOGZDQjBlWEJsYjJZZ2IySnFJRDA5UFNBbmRXNWtaV1pwYm1Wa0p5a2dlMXh1SUNBZ0lISmxkSFZ5Ymp0Y2JpQWdmVnh1WEc0Z0lDOHZJRVp2Y21ObElHRnVJR0Z5Y21GNUlHbG1JRzV2ZENCaGJISmxZV1I1SUhOdmJXVjBhR2x1WnlCcGRHVnlZV0pzWlZ4dUlDQnBaaUFvZEhsd1pXOW1JRzlpYWlBaFBUMGdKMjlpYW1WamRDY3BJSHRjYmlBZ0lDQXZLbVZ6YkdsdWRDQnVieTF3WVhKaGJTMXlaV0Z6YzJsbmJqb3dLaTljYmlBZ0lDQnZZbW9nUFNCYmIySnFYVHRjYmlBZ2ZWeHVYRzRnSUdsbUlDaHBjMEZ5Y21GNUtHOWlhaWtwSUh0Y2JpQWdJQ0F2THlCSmRHVnlZWFJsSUc5MlpYSWdZWEp5WVhrZ2RtRnNkV1Z6WEc0Z0lDQWdabTl5SUNoMllYSWdhU0E5SURBc0lHd2dQU0J2WW1vdWJHVnVaM1JvT3lCcElEd2diRHNnYVNzcktTQjdYRzRnSUNBZ0lDQm1iaTVqWVd4c0tHNTFiR3dzSUc5aWFsdHBYU3dnYVN3Z2IySnFLVHRjYmlBZ0lDQjlYRzRnSUgwZ1pXeHpaU0I3WEc0Z0lDQWdMeThnU1hSbGNtRjBaU0J2ZG1WeUlHOWlhbVZqZENCclpYbHpYRzRnSUNBZ1ptOXlJQ2gyWVhJZ2EyVjVJR2x1SUc5aWFpa2dlMXh1SUNBZ0lDQWdhV1lnS0U5aWFtVmpkQzV3Y205MGIzUjVjR1V1YUdGelQzZHVVSEp2Y0dWeWRIa3VZMkZzYkNodlltb3NJR3RsZVNrcElIdGNiaUFnSUNBZ0lDQWdabTR1WTJGc2JDaHVkV3hzTENCdlltcGJhMlY1WFN3Z2EyVjVMQ0J2WW1vcE8xeHVJQ0FnSUNBZ2ZWeHVJQ0FnSUgxY2JpQWdmVnh1ZlZ4dVhHNHZLaXBjYmlBcUlFRmpZMlZ3ZEhNZ2RtRnlZWEpuY3lCbGVIQmxZM1JwYm1jZ1pXRmphQ0JoY21kMWJXVnVkQ0IwYnlCaVpTQmhiaUJ2WW1wbFkzUXNJSFJvWlc1Y2JpQXFJR2x0YlhWMFlXSnNlU0J0WlhKblpYTWdkR2hsSUhCeWIzQmxjblJwWlhNZ2IyWWdaV0ZqYUNCdlltcGxZM1FnWVc1a0lISmxkSFZ5Ym5NZ2NtVnpkV3gwTGx4dUlDcGNiaUFxSUZkb1pXNGdiWFZzZEdsd2JHVWdiMkpxWldOMGN5QmpiMjUwWVdsdUlIUm9aU0J6WVcxbElHdGxlU0IwYUdVZ2JHRjBaWElnYjJKcVpXTjBJR2x1WEc0Z0tpQjBhR1VnWVhKbmRXMWxiblJ6SUd4cGMzUWdkMmxzYkNCMFlXdGxJSEJ5WldObFpHVnVZMlV1WEc0Z0tseHVJQ29nUlhoaGJYQnNaVHBjYmlBcVhHNGdLaUJnWUdCcWMxeHVJQ29nZG1GeUlISmxjM1ZzZENBOUlHMWxjbWRsS0h0bWIyODZJREV5TTMwc0lIdG1iMjg2SURRMU5uMHBPMXh1SUNvZ1kyOXVjMjlzWlM1c2IyY29jbVZ6ZFd4MExtWnZieWs3SUM4dklHOTFkSEIxZEhNZ05EVTJYRzRnS2lCZ1lHQmNiaUFxWEc0Z0tpQkFjR0Z5WVcwZ2UwOWlhbVZqZEgwZ2IySnFNU0JQWW1wbFkzUWdkRzhnYldWeVoyVmNiaUFxSUVCeVpYUjFjbTV6SUh0UFltcGxZM1I5SUZKbGMzVnNkQ0J2WmlCaGJHd2diV1Z5WjJVZ2NISnZjR1Z5ZEdsbGMxeHVJQ292WEc1bWRXNWpkR2x2YmlCdFpYSm5aU2d2S2lCdlltb3hMQ0J2WW1veUxDQnZZbW96TENBdUxpNGdLaThwSUh0Y2JpQWdkbUZ5SUhKbGMzVnNkQ0E5SUh0OU8xeHVJQ0JtZFc1amRHbHZiaUJoYzNOcFoyNVdZV3gxWlNoMllXd3NJR3RsZVNrZ2UxeHVJQ0FnSUdsbUlDaDBlWEJsYjJZZ2NtVnpkV3gwVzJ0bGVWMGdQVDA5SUNkdlltcGxZM1FuSUNZbUlIUjVjR1Z2WmlCMllXd2dQVDA5SUNkdlltcGxZM1FuS1NCN1hHNGdJQ0FnSUNCeVpYTjFiSFJiYTJWNVhTQTlJRzFsY21kbEtISmxjM1ZzZEZ0clpYbGRMQ0IyWVd3cE8xeHVJQ0FnSUgwZ1pXeHpaU0I3WEc0Z0lDQWdJQ0J5WlhOMWJIUmJhMlY1WFNBOUlIWmhiRHRjYmlBZ0lDQjlYRzRnSUgxY2JseHVJQ0JtYjNJZ0tIWmhjaUJwSUQwZ01Dd2diQ0E5SUdGeVozVnRaVzUwY3k1c1pXNW5kR2c3SUdrZ1BDQnNPeUJwS3lzcElIdGNiaUFnSUNCbWIzSkZZV05vS0dGeVozVnRaVzUwYzF0cFhTd2dZWE56YVdkdVZtRnNkV1VwTzF4dUlDQjlYRzRnSUhKbGRIVnliaUJ5WlhOMWJIUTdYRzU5WEc1Y2JpOHFLbHh1SUNvZ1JYaDBaVzVrY3lCdlltcGxZM1FnWVNCaWVTQnRkWFJoWW14NUlHRmtaR2x1WnlCMGJ5QnBkQ0IwYUdVZ2NISnZjR1Z5ZEdsbGN5QnZaaUJ2WW1wbFkzUWdZaTVjYmlBcVhHNGdLaUJBY0dGeVlXMGdlMDlpYW1WamRIMGdZU0JVYUdVZ2IySnFaV04wSUhSdklHSmxJR1Y0ZEdWdVpHVmtYRzRnS2lCQWNHRnlZVzBnZTA5aWFtVmpkSDBnWWlCVWFHVWdiMkpxWldOMElIUnZJR052Y0hrZ2NISnZjR1Z5ZEdsbGN5Qm1jbTl0WEc0Z0tpQkFjR0Z5WVcwZ2UwOWlhbVZqZEgwZ2RHaHBjMEZ5WnlCVWFHVWdiMkpxWldOMElIUnZJR0pwYm1RZ1puVnVZM1JwYjI0Z2RHOWNiaUFxSUVCeVpYUjFjbTRnZTA5aWFtVmpkSDBnVkdobElISmxjM1ZzZEdsdVp5QjJZV3gxWlNCdlppQnZZbXBsWTNRZ1lWeHVJQ292WEc1bWRXNWpkR2x2YmlCbGVIUmxibVFvWVN3Z1lpd2dkR2hwYzBGeVp5a2dlMXh1SUNCbWIzSkZZV05vS0dJc0lHWjFibU4wYVc5dUlHRnpjMmxuYmxaaGJIVmxLSFpoYkN3Z2EyVjVLU0I3WEc0Z0lDQWdhV1lnS0hSb2FYTkJjbWNnSmlZZ2RIbHdaVzltSUhaaGJDQTlQVDBnSjJaMWJtTjBhVzl1SnlrZ2UxeHVJQ0FnSUNBZ1lWdHJaWGxkSUQwZ1ltbHVaQ2gyWVd3c0lIUm9hWE5CY21jcE8xeHVJQ0FnSUgwZ1pXeHpaU0I3WEc0Z0lDQWdJQ0JoVzJ0bGVWMGdQU0IyWVd3N1hHNGdJQ0FnZlZ4dUlDQjlLVHRjYmlBZ2NtVjBkWEp1SUdFN1hHNTlYRzVjYm0xdlpIVnNaUzVsZUhCdmNuUnpJRDBnZTF4dUlDQnBjMEZ5Y21GNU9pQnBjMEZ5Y21GNUxGeHVJQ0JwYzBGeWNtRjVRblZtWm1WeU9pQnBjMEZ5Y21GNVFuVm1abVZ5TEZ4dUlDQnBjMEoxWm1abGNqb2dhWE5DZFdabVpYSXNYRzRnSUdselJtOXliVVJoZEdFNklHbHpSbTl5YlVSaGRHRXNYRzRnSUdselFYSnlZWGxDZFdabVpYSldhV1YzT2lCcGMwRnljbUY1UW5WbVptVnlWbWxsZHl4Y2JpQWdhWE5UZEhKcGJtYzZJR2x6VTNSeWFXNW5MRnh1SUNCcGMwNTFiV0psY2pvZ2FYTk9kVzFpWlhJc1hHNGdJR2x6VDJKcVpXTjBPaUJwYzA5aWFtVmpkQ3hjYmlBZ2FYTlZibVJsWm1sdVpXUTZJR2x6Vlc1a1pXWnBibVZrTEZ4dUlDQnBjMFJoZEdVNklHbHpSR0YwWlN4Y2JpQWdhWE5HYVd4bE9pQnBjMFpwYkdVc1hHNGdJR2x6UW14dllqb2dhWE5DYkc5aUxGeHVJQ0JwYzBaMWJtTjBhVzl1T2lCcGMwWjFibU4wYVc5dUxGeHVJQ0JwYzFOMGNtVmhiVG9nYVhOVGRISmxZVzBzWEc0Z0lHbHpWVkpNVTJWaGNtTm9VR0Z5WVcxek9pQnBjMVZTVEZObFlYSmphRkJoY21GdGN5eGNiaUFnYVhOVGRHRnVaR0Z5WkVKeWIzZHpaWEpGYm5ZNklHbHpVM1JoYm1SaGNtUkNjbTkzYzJWeVJXNTJMRnh1SUNCbWIzSkZZV05vT2lCbWIzSkZZV05vTEZ4dUlDQnRaWEpuWlRvZ2JXVnlaMlVzWEc0Z0lHVjRkR1Z1WkRvZ1pYaDBaVzVrTEZ4dUlDQjBjbWx0T2lCMGNtbHRYRzU5TzF4dUlpd2lMeW9oWEc0Z0tpQkVaWFJsY20xcGJtVWdhV1lnWVc0Z2IySnFaV04wSUdseklHRWdRblZtWm1WeVhHNGdLbHh1SUNvZ1FHRjFkR2h2Y2lBZ0lFWmxjbTl6Y3lCQlltOTFhMmhoWkdscVpXZ2dQR2gwZEhCek9pOHZabVZ5YjNOekxtOXlaejVjYmlBcUlFQnNhV05sYm5ObElDQk5TVlJjYmlBcUwxeHVYRzR2THlCVWFHVWdYMmx6UW5WbVptVnlJR05vWldOcklHbHpJR1p2Y2lCVFlXWmhjbWtnTlMwM0lITjFjSEJ2Y25Rc0lHSmxZMkYxYzJVZ2FYUW5jeUJ0YVhOemFXNW5YRzR2THlCUFltcGxZM1F1Y0hKdmRHOTBlWEJsTG1OdmJuTjBjblZqZEc5eUxpQlNaVzF2ZG1VZ2RHaHBjeUJsZG1WdWRIVmhiR3g1WEc1dGIyUjFiR1V1Wlhod2IzSjBjeUE5SUdaMWJtTjBhVzl1SUNodlltb3BJSHRjYmlBZ2NtVjBkWEp1SUc5aWFpQWhQU0J1ZFd4c0lDWW1JQ2hwYzBKMVptWmxjaWh2WW1vcElIeDhJR2x6VTJ4dmQwSjFabVpsY2lodlltb3BJSHg4SUNFaGIySnFMbDlwYzBKMVptWmxjaWxjYm4xY2JseHVablZ1WTNScGIyNGdhWE5DZFdabVpYSWdLRzlpYWlrZ2UxeHVJQ0J5WlhSMWNtNGdJU0Z2WW1vdVkyOXVjM1J5ZFdOMGIzSWdKaVlnZEhsd1pXOW1JRzlpYWk1amIyNXpkSEoxWTNSdmNpNXBjMEoxWm1abGNpQTlQVDBnSjJaMWJtTjBhVzl1SnlBbUppQnZZbW91WTI5dWMzUnlkV04wYjNJdWFYTkNkV1ptWlhJb2IySnFLVnh1ZlZ4dVhHNHZMeUJHYjNJZ1RtOWtaU0IyTUM0eE1DQnpkWEJ3YjNKMExpQlNaVzF2ZG1VZ2RHaHBjeUJsZG1WdWRIVmhiR3g1TGx4dVpuVnVZM1JwYjI0Z2FYTlRiRzkzUW5WbVptVnlJQ2h2WW1vcElIdGNiaUFnY21WMGRYSnVJSFI1Y0dWdlppQnZZbW91Y21WaFpFWnNiMkYwVEVVZ1BUMDlJQ2RtZFc1amRHbHZiaWNnSmlZZ2RIbHdaVzltSUc5aWFpNXpiR2xqWlNBOVBUMGdKMloxYm1OMGFXOXVKeUFtSmlCcGMwSjFabVpsY2lodlltb3VjMnhwWTJVb01Dd2dNQ2twWEc1OVhHNGlMQ0l2THlCemFHbHRJR1p2Y2lCMWMybHVaeUJ3Y205alpYTnpJR2x1SUdKeWIzZHpaWEpjYm5aaGNpQndjbTlqWlhOeklEMGdiVzlrZFd4bExtVjRjRzl5ZEhNZ1BTQjdmVHRjYmx4dUx5OGdZMkZqYUdWa0lHWnliMjBnZDJoaGRHVjJaWElnWjJ4dlltRnNJR2x6SUhCeVpYTmxiblFnYzI4Z2RHaGhkQ0IwWlhOMElISjFibTVsY25NZ2RHaGhkQ0J6ZEhWaUlHbDBYRzR2THlCa2IyNG5kQ0JpY21WaGF5QjBhR2x1WjNNdUlDQkNkWFFnZDJVZ2JtVmxaQ0IwYnlCM2NtRndJR2wwSUdsdUlHRWdkSEo1SUdOaGRHTm9JR2x1SUdOaGMyVWdhWFFnYVhOY2JpOHZJSGR5WVhCd1pXUWdhVzRnYzNSeWFXTjBJRzF2WkdVZ1kyOWtaU0IzYUdsamFDQmtiMlZ6YmlkMElHUmxabWx1WlNCaGJua2daMnh2WW1Gc2N5NGdJRWwwSjNNZ2FXNXphV1JsSUdGY2JpOHZJR1oxYm1OMGFXOXVJR0psWTJGMWMyVWdkSEo1TDJOaGRHTm9aWE1nWkdWdmNIUnBiV2w2WlNCcGJpQmpaWEowWVdsdUlHVnVaMmx1WlhNdVhHNWNiblpoY2lCallXTm9aV1JUWlhSVWFXMWxiM1YwTzF4dWRtRnlJR05oWTJobFpFTnNaV0Z5VkdsdFpXOTFkRHRjYmx4dVpuVnVZM1JwYjI0Z1pHVm1ZWFZzZEZObGRGUnBiVzkxZENncElIdGNiaUFnSUNCMGFISnZkeUJ1WlhjZ1JYSnliM0lvSjNObGRGUnBiV1Z2ZFhRZ2FHRnpJRzV2ZENCaVpXVnVJR1JsWm1sdVpXUW5LVHRjYm4xY2JtWjFibU4wYVc5dUlHUmxabUYxYkhSRGJHVmhjbFJwYldWdmRYUWdLQ2tnZTF4dUlDQWdJSFJvY205M0lHNWxkeUJGY25KdmNpZ25ZMnhsWVhKVWFXMWxiM1YwSUdoaGN5QnViM1FnWW1WbGJpQmtaV1pwYm1Wa0p5azdYRzU5WEc0b1puVnVZM1JwYjI0Z0tDa2dlMXh1SUNBZ0lIUnllU0I3WEc0Z0lDQWdJQ0FnSUdsbUlDaDBlWEJsYjJZZ2MyVjBWR2x0Wlc5MWRDQTlQVDBnSjJaMWJtTjBhVzl1SnlrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnWTJGamFHVmtVMlYwVkdsdFpXOTFkQ0E5SUhObGRGUnBiV1Z2ZFhRN1hHNGdJQ0FnSUNBZ0lIMGdaV3h6WlNCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JqWVdOb1pXUlRaWFJVYVcxbGIzVjBJRDBnWkdWbVlYVnNkRk5sZEZScGJXOTFkRHRjYmlBZ0lDQWdJQ0FnZlZ4dUlDQWdJSDBnWTJGMFkyZ2dLR1VwSUh0Y2JpQWdJQ0FnSUNBZ1kyRmphR1ZrVTJWMFZHbHRaVzkxZENBOUlHUmxabUYxYkhSVFpYUlVhVzF2ZFhRN1hHNGdJQ0FnZlZ4dUlDQWdJSFJ5ZVNCN1hHNGdJQ0FnSUNBZ0lHbG1JQ2gwZVhCbGIyWWdZMnhsWVhKVWFXMWxiM1YwSUQwOVBTQW5ablZ1WTNScGIyNG5LU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQmpZV05vWldSRGJHVmhjbFJwYldWdmRYUWdQU0JqYkdWaGNsUnBiV1Z2ZFhRN1hHNGdJQ0FnSUNBZ0lIMGdaV3h6WlNCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JqWVdOb1pXUkRiR1ZoY2xScGJXVnZkWFFnUFNCa1pXWmhkV3gwUTJ4bFlYSlVhVzFsYjNWME8xeHVJQ0FnSUNBZ0lDQjlYRzRnSUNBZ2ZTQmpZWFJqYUNBb1pTa2dlMXh1SUNBZ0lDQWdJQ0JqWVdOb1pXUkRiR1ZoY2xScGJXVnZkWFFnUFNCa1pXWmhkV3gwUTJ4bFlYSlVhVzFsYjNWME8xeHVJQ0FnSUgxY2JuMGdLQ2twWEc1bWRXNWpkR2x2YmlCeWRXNVVhVzFsYjNWMEtHWjFiaWtnZTF4dUlDQWdJR2xtSUNoallXTm9aV1JUWlhSVWFXMWxiM1YwSUQwOVBTQnpaWFJVYVcxbGIzVjBLU0I3WEc0Z0lDQWdJQ0FnSUM4dmJtOXliV0ZzSUdWdWRtbHliMjFsYm5SeklHbHVJSE5oYm1VZ2MybDBkV0YwYVc5dWMxeHVJQ0FnSUNBZ0lDQnlaWFIxY200Z2MyVjBWR2x0Wlc5MWRDaG1kVzRzSURBcE8xeHVJQ0FnSUgxY2JpQWdJQ0F2THlCcFppQnpaWFJVYVcxbGIzVjBJSGRoYzI0bmRDQmhkbUZwYkdGaWJHVWdZblYwSUhkaGN5QnNZWFIwWlhJZ1pHVm1hVzVsWkZ4dUlDQWdJR2xtSUNnb1kyRmphR1ZrVTJWMFZHbHRaVzkxZENBOVBUMGdaR1ZtWVhWc2RGTmxkRlJwYlc5MWRDQjhmQ0FoWTJGamFHVmtVMlYwVkdsdFpXOTFkQ2tnSmlZZ2MyVjBWR2x0Wlc5MWRDa2dlMXh1SUNBZ0lDQWdJQ0JqWVdOb1pXUlRaWFJVYVcxbGIzVjBJRDBnYzJWMFZHbHRaVzkxZER0Y2JpQWdJQ0FnSUNBZ2NtVjBkWEp1SUhObGRGUnBiV1Z2ZFhRb1puVnVMQ0F3S1R0Y2JpQWdJQ0I5WEc0Z0lDQWdkSEo1SUh0Y2JpQWdJQ0FnSUNBZ0x5OGdkMmhsYmlCM2FHVnVJSE52YldWaWIyUjVJR2hoY3lCelkzSmxkMlZrSUhkcGRHZ2djMlYwVkdsdFpXOTFkQ0JpZFhRZ2JtOGdTUzVGTGlCdFlXUmtibVZ6YzF4dUlDQWdJQ0FnSUNCeVpYUjFjbTRnWTJGamFHVmtVMlYwVkdsdFpXOTFkQ2htZFc0c0lEQXBPMXh1SUNBZ0lIMGdZMkYwWTJnb1pTbDdYRzRnSUNBZ0lDQWdJSFJ5ZVNCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0F2THlCWGFHVnVJSGRsSUdGeVpTQnBiaUJKTGtVdUlHSjFkQ0IwYUdVZ2MyTnlhWEIwSUdoaGN5QmlaV1Z1SUdWMllXeGxaQ0J6YnlCSkxrVXVJR1J2WlhOdUozUWdkSEoxYzNRZ2RHaGxJR2RzYjJKaGJDQnZZbXBsWTNRZ2QyaGxiaUJqWVd4c1pXUWdibTl5YldGc2JIbGNiaUFnSUNBZ0lDQWdJQ0FnSUhKbGRIVnliaUJqWVdOb1pXUlRaWFJVYVcxbGIzVjBMbU5oYkd3b2JuVnNiQ3dnWm5WdUxDQXdLVHRjYmlBZ0lDQWdJQ0FnZlNCallYUmphQ2hsS1h0Y2JpQWdJQ0FnSUNBZ0lDQWdJQzh2SUhOaGJXVWdZWE1nWVdKdmRtVWdZblYwSUhkb1pXNGdhWFFuY3lCaElIWmxjbk5wYjI0Z2IyWWdTUzVGTGlCMGFHRjBJRzExYzNRZ2FHRjJaU0IwYUdVZ1oyeHZZbUZzSUc5aWFtVmpkQ0JtYjNJZ0ozUm9hWE1uTENCb2IzQm1kV3hzZVNCdmRYSWdZMjl1ZEdWNGRDQmpiM0p5WldOMElHOTBhR1Z5ZDJselpTQnBkQ0IzYVd4c0lIUm9jbTkzSUdFZ1oyeHZZbUZzSUdWeWNtOXlYRzRnSUNBZ0lDQWdJQ0FnSUNCeVpYUjFjbTRnWTJGamFHVmtVMlYwVkdsdFpXOTFkQzVqWVd4c0tIUm9hWE1zSUdaMWJpd2dNQ2s3WEc0Z0lDQWdJQ0FnSUgxY2JpQWdJQ0I5WEc1Y2JseHVmVnh1Wm5WdVkzUnBiMjRnY25WdVEyeGxZWEpVYVcxbGIzVjBLRzFoY210bGNpa2dlMXh1SUNBZ0lHbG1JQ2hqWVdOb1pXUkRiR1ZoY2xScGJXVnZkWFFnUFQwOUlHTnNaV0Z5VkdsdFpXOTFkQ2tnZTF4dUlDQWdJQ0FnSUNBdkwyNXZjbTFoYkNCbGJuWnBjbTl0Wlc1MGN5QnBiaUJ6WVc1bElITnBkSFZoZEdsdmJuTmNiaUFnSUNBZ0lDQWdjbVYwZFhKdUlHTnNaV0Z5VkdsdFpXOTFkQ2h0WVhKclpYSXBPMXh1SUNBZ0lIMWNiaUFnSUNBdkx5QnBaaUJqYkdWaGNsUnBiV1Z2ZFhRZ2QyRnpiaWQwSUdGMllXbHNZV0pzWlNCaWRYUWdkMkZ6SUd4aGRIUmxjaUJrWldacGJtVmtYRzRnSUNBZ2FXWWdLQ2hqWVdOb1pXUkRiR1ZoY2xScGJXVnZkWFFnUFQwOUlHUmxabUYxYkhSRGJHVmhjbFJwYldWdmRYUWdmSHdnSVdOaFkyaGxaRU5zWldGeVZHbHRaVzkxZENrZ0ppWWdZMnhsWVhKVWFXMWxiM1YwS1NCN1hHNGdJQ0FnSUNBZ0lHTmhZMmhsWkVOc1pXRnlWR2x0Wlc5MWRDQTlJR05zWldGeVZHbHRaVzkxZER0Y2JpQWdJQ0FnSUNBZ2NtVjBkWEp1SUdOc1pXRnlWR2x0Wlc5MWRDaHRZWEpyWlhJcE8xeHVJQ0FnSUgxY2JpQWdJQ0IwY25rZ2UxeHVJQ0FnSUNBZ0lDQXZMeUIzYUdWdUlIZG9aVzRnYzI5dFpXSnZaSGtnYUdGeklITmpjbVYzWldRZ2QybDBhQ0J6WlhSVWFXMWxiM1YwSUdKMWRDQnVieUJKTGtVdUlHMWhaR1J1WlhOelhHNGdJQ0FnSUNBZ0lISmxkSFZ5YmlCallXTm9aV1JEYkdWaGNsUnBiV1Z2ZFhRb2JXRnlhMlZ5S1R0Y2JpQWdJQ0I5SUdOaGRHTm9JQ2hsS1h0Y2JpQWdJQ0FnSUNBZ2RISjVJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDOHZJRmRvWlc0Z2QyVWdZWEpsSUdsdUlFa3VSUzRnWW5WMElIUm9aU0J6WTNKcGNIUWdhR0Z6SUdKbFpXNGdaWFpoYkdWa0lITnZJRWt1UlM0Z1pHOWxjMjRuZENBZ2RISjFjM1FnZEdobElHZHNiMkpoYkNCdlltcGxZM1FnZDJobGJpQmpZV3hzWldRZ2JtOXliV0ZzYkhsY2JpQWdJQ0FnSUNBZ0lDQWdJSEpsZEhWeWJpQmpZV05vWldSRGJHVmhjbFJwYldWdmRYUXVZMkZzYkNodWRXeHNMQ0J0WVhKclpYSXBPMXh1SUNBZ0lDQWdJQ0I5SUdOaGRHTm9JQ2hsS1h0Y2JpQWdJQ0FnSUNBZ0lDQWdJQzh2SUhOaGJXVWdZWE1nWVdKdmRtVWdZblYwSUhkb1pXNGdhWFFuY3lCaElIWmxjbk5wYjI0Z2IyWWdTUzVGTGlCMGFHRjBJRzExYzNRZ2FHRjJaU0IwYUdVZ1oyeHZZbUZzSUc5aWFtVmpkQ0JtYjNJZ0ozUm9hWE1uTENCb2IzQm1kV3hzZVNCdmRYSWdZMjl1ZEdWNGRDQmpiM0p5WldOMElHOTBhR1Z5ZDJselpTQnBkQ0IzYVd4c0lIUm9jbTkzSUdFZ1oyeHZZbUZzSUdWeWNtOXlMbHh1SUNBZ0lDQWdJQ0FnSUNBZ0x5OGdVMjl0WlNCMlpYSnphVzl1Y3lCdlppQkpMa1V1SUdoaGRtVWdaR2xtWm1WeVpXNTBJSEoxYkdWeklHWnZjaUJqYkdWaGNsUnBiV1Z2ZFhRZ2RuTWdjMlYwVkdsdFpXOTFkRnh1SUNBZ0lDQWdJQ0FnSUNBZ2NtVjBkWEp1SUdOaFkyaGxaRU5zWldGeVZHbHRaVzkxZEM1allXeHNLSFJvYVhNc0lHMWhjbXRsY2lrN1hHNGdJQ0FnSUNBZ0lIMWNiaUFnSUNCOVhHNWNibHh1WEc1OVhHNTJZWElnY1hWbGRXVWdQU0JiWFR0Y2JuWmhjaUJrY21GcGJtbHVaeUE5SUdaaGJITmxPMXh1ZG1GeUlHTjFjbkpsYm5SUmRXVjFaVHRjYm5aaGNpQnhkV1YxWlVsdVpHVjRJRDBnTFRFN1hHNWNibVoxYm1OMGFXOXVJR05zWldGdVZYQk9aWGgwVkdsamF5Z3BJSHRjYmlBZ0lDQnBaaUFvSVdSeVlXbHVhVzVuSUh4OElDRmpkWEp5Wlc1MFVYVmxkV1VwSUh0Y2JpQWdJQ0FnSUNBZ2NtVjBkWEp1TzF4dUlDQWdJSDFjYmlBZ0lDQmtjbUZwYm1sdVp5QTlJR1poYkhObE8xeHVJQ0FnSUdsbUlDaGpkWEp5Wlc1MFVYVmxkV1V1YkdWdVozUm9LU0I3WEc0Z0lDQWdJQ0FnSUhGMVpYVmxJRDBnWTNWeWNtVnVkRkYxWlhWbExtTnZibU5oZENoeGRXVjFaU2s3WEc0Z0lDQWdmU0JsYkhObElIdGNiaUFnSUNBZ0lDQWdjWFZsZFdWSmJtUmxlQ0E5SUMweE8xeHVJQ0FnSUgxY2JpQWdJQ0JwWmlBb2NYVmxkV1V1YkdWdVozUm9LU0I3WEc0Z0lDQWdJQ0FnSUdSeVlXbHVVWFZsZFdVb0tUdGNiaUFnSUNCOVhHNTlYRzVjYm1aMWJtTjBhVzl1SUdSeVlXbHVVWFZsZFdVb0tTQjdYRzRnSUNBZ2FXWWdLR1J5WVdsdWFXNW5LU0I3WEc0Z0lDQWdJQ0FnSUhKbGRIVnlianRjYmlBZ0lDQjlYRzRnSUNBZ2RtRnlJSFJwYldWdmRYUWdQU0J5ZFc1VWFXMWxiM1YwS0dOc1pXRnVWWEJPWlhoMFZHbGpheWs3WEc0Z0lDQWdaSEpoYVc1cGJtY2dQU0IwY25WbE8xeHVYRzRnSUNBZ2RtRnlJR3hsYmlBOUlIRjFaWFZsTG14bGJtZDBhRHRjYmlBZ0lDQjNhR2xzWlNoc1pXNHBJSHRjYmlBZ0lDQWdJQ0FnWTNWeWNtVnVkRkYxWlhWbElEMGdjWFZsZFdVN1hHNGdJQ0FnSUNBZ0lIRjFaWFZsSUQwZ1cxMDdYRzRnSUNBZ0lDQWdJSGRvYVd4bElDZ3JLM0YxWlhWbFNXNWtaWGdnUENCc1pXNHBJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lHbG1JQ2hqZFhKeVpXNTBVWFZsZFdVcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQmpkWEp5Wlc1MFVYVmxkV1ZiY1hWbGRXVkpibVJsZUYwdWNuVnVLQ2s3WEc0Z0lDQWdJQ0FnSUNBZ0lDQjlYRzRnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJQ0FnY1hWbGRXVkpibVJsZUNBOUlDMHhPMXh1SUNBZ0lDQWdJQ0JzWlc0Z1BTQnhkV1YxWlM1c1pXNW5kR2c3WEc0Z0lDQWdmVnh1SUNBZ0lHTjFjbkpsYm5SUmRXVjFaU0E5SUc1MWJHdzdYRzRnSUNBZ1pISmhhVzVwYm1jZ1BTQm1ZV3h6WlR0Y2JpQWdJQ0J5ZFc1RGJHVmhjbFJwYldWdmRYUW9kR2x0Wlc5MWRDazdYRzU5WEc1Y2JuQnliMk5sYzNNdWJtVjRkRlJwWTJzZ1BTQm1kVzVqZEdsdmJpQW9ablZ1S1NCN1hHNGdJQ0FnZG1GeUlHRnlaM01nUFNCdVpYY2dRWEp5WVhrb1lYSm5kVzFsYm5SekxteGxibWQwYUNBdElERXBPMXh1SUNBZ0lHbG1JQ2hoY21kMWJXVnVkSE11YkdWdVozUm9JRDRnTVNrZ2UxeHVJQ0FnSUNBZ0lDQm1iM0lnS0haaGNpQnBJRDBnTVRzZ2FTQThJR0Z5WjNWdFpXNTBjeTVzWlc1bmRHZzdJR2tyS3lrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnWVhKbmMxdHBJQzBnTVYwZ1BTQmhjbWQxYldWdWRITmJhVjA3WEc0Z0lDQWdJQ0FnSUgxY2JpQWdJQ0I5WEc0Z0lDQWdjWFZsZFdVdWNIVnphQ2h1WlhjZ1NYUmxiU2htZFc0c0lHRnlaM01wS1R0Y2JpQWdJQ0JwWmlBb2NYVmxkV1V1YkdWdVozUm9JRDA5UFNBeElDWW1JQ0ZrY21GcGJtbHVaeWtnZTF4dUlDQWdJQ0FnSUNCeWRXNVVhVzFsYjNWMEtHUnlZV2x1VVhWbGRXVXBPMXh1SUNBZ0lIMWNibjA3WEc1Y2JpOHZJSFk0SUd4cGEyVnpJSEJ5WldScFkzUnBZbXhsSUc5aWFtVmpkSE5jYm1aMWJtTjBhVzl1SUVsMFpXMG9ablZ1TENCaGNuSmhlU2tnZTF4dUlDQWdJSFJvYVhNdVpuVnVJRDBnWm5WdU8xeHVJQ0FnSUhSb2FYTXVZWEp5WVhrZ1BTQmhjbkpoZVR0Y2JuMWNia2wwWlcwdWNISnZkRzkwZVhCbExuSjFiaUE5SUdaMWJtTjBhVzl1SUNncElIdGNiaUFnSUNCMGFHbHpMbVoxYmk1aGNIQnNlU2h1ZFd4c0xDQjBhR2x6TG1GeWNtRjVLVHRjYm4wN1hHNXdjbTlqWlhOekxuUnBkR3hsSUQwZ0oySnliM2R6WlhJbk8xeHVjSEp2WTJWemN5NWljbTkzYzJWeUlEMGdkSEoxWlR0Y2JuQnliMk5sYzNNdVpXNTJJRDBnZTMwN1hHNXdjbTlqWlhOekxtRnlaM1lnUFNCYlhUdGNibkJ5YjJObGMzTXVkbVZ5YzJsdmJpQTlJQ2NuT3lBdkx5QmxiWEIwZVNCemRISnBibWNnZEc4Z1lYWnZhV1FnY21WblpYaHdJR2x6YzNWbGMxeHVjSEp2WTJWemN5NTJaWEp6YVc5dWN5QTlJSHQ5TzF4dVhHNW1kVzVqZEdsdmJpQnViMjl3S0NrZ2UzMWNibHh1Y0hKdlkyVnpjeTV2YmlBOUlHNXZiM0E3WEc1d2NtOWpaWE56TG1Ga1pFeHBjM1JsYm1WeUlEMGdibTl2Y0R0Y2JuQnliMk5sYzNNdWIyNWpaU0E5SUc1dmIzQTdYRzV3Y205alpYTnpMbTltWmlBOUlHNXZiM0E3WEc1d2NtOWpaWE56TG5KbGJXOTJaVXhwYzNSbGJtVnlJRDBnYm05dmNEdGNibkJ5YjJObGMzTXVjbVZ0YjNabFFXeHNUR2x6ZEdWdVpYSnpJRDBnYm05dmNEdGNibkJ5YjJObGMzTXVaVzFwZENBOUlHNXZiM0E3WEc1d2NtOWpaWE56TG5CeVpYQmxibVJNYVhOMFpXNWxjaUE5SUc1dmIzQTdYRzV3Y205alpYTnpMbkJ5WlhCbGJtUlBibU5sVEdsemRHVnVaWElnUFNCdWIyOXdPMXh1WEc1d2NtOWpaWE56TG14cGMzUmxibVZ5Y3lBOUlHWjFibU4wYVc5dUlDaHVZVzFsS1NCN0lISmxkSFZ5YmlCYlhTQjlYRzVjYm5CeWIyTmxjM011WW1sdVpHbHVaeUE5SUdaMWJtTjBhVzl1SUNodVlXMWxLU0I3WEc0Z0lDQWdkR2h5YjNjZ2JtVjNJRVZ5Y205eUtDZHdjbTlqWlhOekxtSnBibVJwYm1jZ2FYTWdibTkwSUhOMWNIQnZjblJsWkNjcE8xeHVmVHRjYmx4dWNISnZZMlZ6Y3k1amQyUWdQU0JtZFc1amRHbHZiaUFvS1NCN0lISmxkSFZ5YmlBbkx5Y2dmVHRjYm5CeWIyTmxjM011WTJoa2FYSWdQU0JtZFc1amRHbHZiaUFvWkdseUtTQjdYRzRnSUNBZ2RHaHliM2NnYm1WM0lFVnljbTl5S0Nkd2NtOWpaWE56TG1Ob1pHbHlJR2x6SUc1dmRDQnpkWEJ3YjNKMFpXUW5LVHRjYm4wN1hHNXdjbTlqWlhOekxuVnRZWE5ySUQwZ1puVnVZM1JwYjI0b0tTQjdJSEpsZEhWeWJpQXdPeUI5TzF4dUlpd2lhVzF3YjNKMElIdEVhWE53WVhSamFHVnlmU0JtY205dElGd2lMaTR2WlhabGJuUnpMMlJwYzNCaGRHTm9aWEpjSWp0Y2NseHVYSEpjYm1WNGNHOXlkQ0JqYkdGemN5QkRhR0Z1Ym1Wc0lHVjRkR1Z1WkhNZ1JHbHpjR0YwWTJobGNpQjdYSEpjYmlBZ0lDQmpiMjV6ZEhKMVkzUnZjaWh1WVcxbExDQndkWE5vWlhJcElIdGNjbHh1SUNBZ0lDQWdJQ0J6ZFhCbGNpZ3BPMXh5WEc1Y2NseHVJQ0FnSUNBZ0lDQjBhR2x6TG01aGJXVWdQU0J1WVcxbE8xeHlYRzRnSUNBZ0lDQWdJSFJvYVhNdWNIVnphR1Z5SUQwZ2NIVnphR1Z5TzF4eVhHNWNjbHh1SUNBZ0lDQWdJQ0JwWmlBb2RHaHBjeTV3ZFhOb1pYSXVjMjlqYTJWMExuTjBZWFJsSUQwOUlERXBJSHRjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdkR2hwY3k1emRXSnpZM0pwWW1Vb0tUdGNjbHh1SUNBZ0lDQWdJQ0I5WEhKY2JpQWdJQ0I5WEhKY2JseHlYRzRnSUNBZ2MzVmljMk55YVdKbEtDa2dlMXh5WEc0Z0lDQWdJQ0FnSUhSb2FYTXVjSFZ6YUdWeUxuTmxibVFvZTF4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0JsZG1WdWREb2dKM04xWW5OamNtbGlaU2NzWEhKY2JpQWdJQ0FnSUNBZ0lDQWdJR1JoZEdFNklIdGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR05vWVc1dVpXdzZJSFJvYVhNdWJtRnRaVnh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQjlYSEpjYmlBZ0lDQWdJQ0FnZlNrN1hISmNiaUFnSUNCOVhISmNibjBpTENKcGJYQnZjblFnZTBOb1lXNXVaV3g5SUdaeWIyMGdYQ0l1TDJOb1lXNXVaV3hjSWp0Y2NseHVhVzF3YjNKMElIdFFjbVZ6Wlc1alpVTm9ZVzV1Wld4OUlHWnliMjBnWENJdUwzQnlaWE5sYm1ObFgyTm9ZVzV1Wld4Y0lqdGNjbHh1YVcxd2IzSjBJSHRRY21sMllYUmxRMmhoYm01bGJIMGdabkp2YlNCY0lpNHZjSEpwZG1GMFpWOWphR0Z1Ym1Wc1hDSTdYSEpjYmx4eVhHNWxlSEJ2Y25RZ1kyeGhjM01nVFdGdWJtRm5aWElnZTF4eVhHNGdJQ0FnWTI5dWMzUnlkV04wYjNJb0tTQjdYSEpjYmlBZ0lDQWdJQ0FnZEdocGN5NWphR0Z1Ym1Wc2N5QTlJSHQ5TzF4eVhHNGdJQ0FnZlZ4eVhHNWNjbHh1SUNBZ0lHRmtaQ2h1WVcxbExDQndkWE5vWlhJcElIdGNjbHh1SUNBZ0lDQWdJQ0JwWmlBb0lYUm9hWE11WTJoaGJtNWxiSE5iYm1GdFpWMHBJSHRjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdkR2hwY3k1amFHRnVibVZzYzF0dVlXMWxYU0E5SUdOeVpXRjBaVU5vWVc1dVpXd29ibUZ0WlN3Z2NIVnphR1Z5S1R0Y2NseHVJQ0FnSUNBZ0lDQjlYSEpjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJSFJvYVhNdVkyaGhibTVsYkhOYmJtRnRaVjA3WEhKY2JpQWdJQ0I5WEhKY2JseHlYRzRnSUNBZ1lXeHNLQ2tnZTF4eVhHNGdJQ0FnSUNBZ0lISmxkSFZ5YmlCUFltcGxZM1F1YTJWNWN5aDBhR2x6TG1Ob1lXNXVaV3h6S1R0Y2NseHVJQ0FnSUgxY2NseHVYSEpjYmlBZ0lDQm1hVzVrS0c1aGJXVXBJSHRjY2x4dUlDQWdJQ0FnSUNCeVpYUjFjbTRnZEdocGN5NWphR0Z1Ym1Wc2MxdHVZVzFsWFR0Y2NseHVJQ0FnSUgxY2NseHVYSEpjYmlBZ0lDQnlaVzF2ZG1Vb2JtRnRaU2tnZTF4eVhHNGdJQ0FnSUNBZ0lHeGxkQ0JqYUdGdWJtVnNJRDBnZEdocGN5NWphR0Z1Ym1Wc2MxdHVZVzFsWFR0Y2NseHVJQ0FnSUNBZ0lDQmtaV3hsZEdVZ2RHaHBjeTVqYUdGdWJtVnNjMXR1WVcxbFhUdGNjbHh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdZMmhoYm01bGJEdGNjbHh1SUNBZ0lIMWNjbHh1WEhKY2JpQWdJQ0J6ZFdKelkzSnBZbVVvS1NCN1hISmNiaUFnSUNBZ0lDQWdabTl5SUNoc1pYUWdhU0JwYmlCMGFHbHpMbU5vWVc1dVpXeHpLU0I3WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJSFJvYVhNdVkyaGhibTVsYkhOYmFWMHVjM1ZpYzJOeWFXSmxLQ2s3WEhKY2JpQWdJQ0FnSUNBZ2ZWeHlYRzVjY2x4dUlDQWdJSDFjY2x4dWZWeHlYRzVjY2x4dVpuVnVZM1JwYjI0Z1kzSmxZWFJsUTJoaGJtNWxiQ2h1WVcxbExDQndkWE5vWlhJcElIdGNjbHh1SUNBZ0lHbG1JQ2h1WVcxbExtbHVaR1Y0VDJZb0ozQnlhWFpoZEdVdEp5a2dQVDA5SURBcElIdGNjbHh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdibVYzSUZCeWFYWmhkR1ZEYUdGdWJtVnNLRzVoYldVc0lIQjFjMmhsY2lrN1hISmNiaUFnSUNCOUlHVnNjMlVnYVdZZ0tHNWhiV1V1YVc1a1pYaFBaaWduY0hKbGMyVnVZMlV0SnlrZ1BUMDlJREFwSUh0Y2NseHVJQ0FnSUNBZ0lDQnlaWFIxY200Z2JtVjNJRkJ5WlhObGJtTmxRMmhoYm01bGJDaHVZVzFsTENCd2RYTm9aWElwTzF4eVhHNGdJQ0FnZlNCbGJITmxJSHRjY2x4dUlDQWdJQ0FnSUNCeVpYUjFjbTRnYm1WM0lFTm9ZVzV1Wld3b2JtRnRaU3dnY0hWemFHVnlLVHRjY2x4dUlDQWdJSDFjY2x4dWZTSXNJbWx0Y0c5eWRDQjdSR2x6Y0dGMFkyaGxjbjBnWm5KdmJTQmNJaTR1TDJWMlpXNTBjeTlrYVhOd1lYUmphR1Z5WENJN1hISmNibHh5WEc1bGVIQnZjblFnWTJ4aGMzTWdVSEpsYzJWdVkyVkRhR0Z1Ym1Wc0lHVjRkR1Z1WkhNZ1JHbHpjR0YwWTJobGNpQjdYSEpjYmlBZ0lDQmpiMjV6ZEhKMVkzUnZjaWh1WVcxbExDQndkWE5vWlhJcElIdGNjbHh1SUNBZ0lDQWdJQ0J6ZFhCbGNpZ3BPMXh5WEc1Y2NseHVJQ0FnSUNBZ0lDQjBhR2x6TG01aGJXVWdQU0J1WVcxbE8xeHlYRzRnSUNBZ0lDQWdJSFJvYVhNdWNIVnphR1Z5SUQwZ2NIVnphR1Z5TzF4eVhHNGdJQ0FnSUNBZ0lIUm9hWE11WVhWMGFDQTlJRzUxYkd3N1hISmNibHh5WEc0Z0lDQWdJQ0FnSUdsbUlDaDBhR2x6TG5CMWMyaGxjaTV6YjJOclpYUXVjM1JoZEdVZ1BUMGdNU2tnZTF4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0IwYUdsekxuTjFZbk5qY21saVpTZ3BPMXh5WEc0Z0lDQWdJQ0FnSUgxY2NseHVJQ0FnSUgxY2NseHVYSEpjYmlBZ0lDQnpkV0p6WTNKcFltVW9LU0I3WEhKY2JpQWdJQ0FnSUNBZ2RHaHBjeTV3ZFhOb1pYSXVZWFYwYUNoMGFHbHpMbTVoYldVc0lDaGxLU0E5UGlCN1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUhSb2FYTXVZWFYwYUNBOUlHVXVaR0YwWVM1aGRYUm9PMXh5WEc1Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnZEdocGN5NXdkWE5vWlhJdWMyVnVaQ2g3WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCbGRtVnVkRG9nSjNOMVluTmpjbWxpWlNjc1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQmtZWFJoT2lCN1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnWTJoaGJtNWxiRG9nZEdocGN5NXVZVzFsTEZ4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR0YxZEdnNklIUm9hWE11WVhWMGFDeGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCamFHRnVibVZzWDJSaGRHRTZJR1V1WkdGMFlTNWphR0Z1Ym1Wc1gyUmhkR0ZjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUgxY2NseHVJQ0FnSUNBZ0lDQWdJQ0FnZlNrN1hISmNiaUFnSUNBZ0lDQWdmU2s3WEhKY2JpQWdJQ0I5WEhKY2JuMGlMQ0pwYlhCdmNuUWdlMFJwYzNCaGRHTm9aWEo5SUdaeWIyMGdYQ0l1TGk5bGRtVnVkSE12WkdsemNHRjBZMmhsY2x3aU8xeHlYRzVjY2x4dVpYaHdiM0owSUdOc1lYTnpJRkJ5YVhaaGRHVkRhR0Z1Ym1Wc0lHVjRkR1Z1WkhNZ1JHbHpjR0YwWTJobGNpQjdYSEpjYmlBZ0lDQmpiMjV6ZEhKMVkzUnZjaWh1WVcxbExDQndkWE5vWlhJcElIdGNjbHh1SUNBZ0lDQWdJQ0J6ZFhCbGNpZ3BPMXh5WEc1Y2NseHVJQ0FnSUNBZ0lDQjBhR2x6TG01aGJXVWdQU0J1WVcxbE8xeHlYRzRnSUNBZ0lDQWdJSFJvYVhNdWNIVnphR1Z5SUQwZ2NIVnphR1Z5TzF4eVhHNGdJQ0FnSUNBZ0lIUm9hWE11WVhWMGFDQTlJRzUxYkd3N1hISmNibHh5WEc0Z0lDQWdJQ0FnSUdsbUlDaDBhR2x6TG5CMWMyaGxjaTV6YjJOclpYUXVjM1JoZEdVZ1BUMGdNU2tnZTF4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0IwYUdsekxuTjFZbk5qY21saVpTZ3BPMXh5WEc0Z0lDQWdJQ0FnSUgxY2NseHVJQ0FnSUgxY2NseHVYSEpjYmlBZ0lDQnpkV0p6WTNKcFltVW9LU0I3WEhKY2JpQWdJQ0FnSUNBZ2RHaHBjeTV3ZFhOb1pYSXVZWFYwYUNoMGFHbHpMbTVoYldVc0lDaGxLU0E5UGlCN1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUhSb2FYTXVZWFYwYUNBOUlHVXVaR0YwWVM1aGRYUm9PMXh5WEc1Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnZEdocGN5NXdkWE5vWlhJdWMyVnVaQ2g3WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCbGRtVnVkRG9nSjNOMVluTmpjbWxpWlNjc1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQmtZWFJoT2lCN1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnWTJoaGJtNWxiRG9nZEdocGN5NXVZVzFsTEZ4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR0YxZEdnNklIUm9hWE11WVhWMGFGeHlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdmVnh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQjlLVHRjY2x4dUlDQWdJQ0FnSUNCOUtUdGNjbHh1SUNBZ0lIMWNjbHh1ZlNJc0ltbHRjRzl5ZENCN1JHbHpjR0YwWTJobGNuMGdabkp2YlNCY0lpNHVMMlYyWlc1MGN5OWthWE53WVhSamFHVnlYQ0k3WEhKY2JseHlYRzVsZUhCdmNuUWdZMnhoYzNNZ1UyOWphMlYwSUdWNGRHVnVaSE1nUkdsemNHRjBZMmhsY2lCN1hISmNiaUFnSUNCamIyNXpkSEoxWTNSdmNpaHdkWE5vWlhJc0lHaHZjM1FwSUh0Y2NseHVJQ0FnSUNBZ0lDQnpkWEJsY2lncE8xeHlYRzVjY2x4dUlDQWdJQ0FnSUNCMGFHbHpMbkIxYzJobGNpQTlJSEIxYzJobGNqdGNjbHh1SUNBZ0lDQWdJQ0IwYUdsekxuTnZZMnRsZENBOUlHNWxkeUJYWldKVGIyTnJaWFFvYUc5emRDQXJJQ2N2SnlBcklIUm9hWE11Y0hWemFHVnlMbXRsZVNrN1hISmNibHh5WEc0Z0lDQWdJQ0FnSUhSb2FYTXVZbWx1WkV4cGMzUmxibVZ5Y3lncE8xeHlYRzRnSUNBZ2ZWeHlYRzVjY2x4dUlDQWdJR0pwYm1STWFYTjBaVzVsY25Nb0tTQjdYSEpjYmlBZ0lDQWdJQ0FnZEdocGN5NXpiMk5yWlhRdWIyNXZjR1Z1SUQwZ0tDa2dQVDRnZTF4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0IwYUdsekxtOXVUM0JsYmlncE8xeHlYRzRnSUNBZ0lDQWdJSDA3WEhKY2JpQWdJQ0FnSUNBZ2RHaHBjeTV6YjJOclpYUXViMjVsY25KdmNpQTlJQ2hsY25KdmNpa2dQVDRnZTF4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0IwYUdsekxtOXVSWEp5YjNJb1pYSnliM0lwTzF4eVhHNGdJQ0FnSUNBZ0lIMDdYSEpjYmlBZ0lDQWdJQ0FnZEdocGN5NXpiMk5yWlhRdWIyNWpiRzl6WlNBOUlDaGpiRzl6WlVWMlpXNTBLU0E5UGlCN1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUhSb2FYTXViMjVEYkc5elpTaGpiRzl6WlVWMlpXNTBLVHRjY2x4dUlDQWdJQ0FnSUNCOU8xeHlYRzRnSUNBZ0lDQWdJSFJvYVhNdWMyOWphMlYwTG05dWJXVnpjMkZuWlNBOUlDaHRaWE56WVdkbEtTQTlQaUI3WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJSFJvYVhNdWIyNU5aWE56WVdkbEtHMWxjM05oWjJVcE8xeHlYRzRnSUNBZ0lDQWdJSDA3WEhKY2JpQWdJQ0I5WEhKY2JseHlYRzRnSUNBZ2IyNVBjR1Z1S0NrZ2UxeHlYRzRnSUNBZ0lDQWdJQzh2NVlpZDVhZUw1NHEyNW9DQlhISmNiaUFnSUNBZ0lDQWdkR2hwY3k1emRHRjBaU0E5SURBN1hISmNibHh5WEc0Z0lDQWdJQ0FnSUhSb2FYTXVZbWx1WkNnbllYVjBhRzl5YVhwaGRHbHZibDl6ZFdOalpYTnpKeXdnS0dVcElEMCtJSHRjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdkR2hwY3k1emIyTnJaWFF1YzI5amEyVjBYMmxrSUQwZ1pTNXpiMk5yWlhSZmFXUTdYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lIUm9hWE11YzNSaGRHVWdQU0F4TzF4eVhHNWNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0x5L29ycUxwbUlWY2NseHVJQ0FnSUNBZ0lDQWdJQ0FnZEdocGN5NXdkWE5vWlhJdVkyaGhibTVsYkhNdWMzVmljMk55YVdKbEtDazdYSEpjYmlBZ0lDQWdJQ0FnZlNrN1hISmNibHh5WEc0Z0lDQWdJQ0FnSUhSb2FYTXVZbWx1WkNnbllYVjBhRzl5YVhwaGRHbHZibDlsY25KdmNpY3NJQ2hsS1NBOVBpQjdYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lIUm9hWE11YzNSaGRHVWdQU0F0TVR0Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnWTI5dWMyOXNaUzVsY25KdmNpaGxMbVZ5Y205eUtWeHlYRzRnSUNBZ0lDQWdJSDBwTzF4eVhHNWNjbHh1SUNBZ0lDQWdJQ0IwYUdsekxuTmxibVFvZTF4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0JsZG1WdWREb2dKMkYxZEdodmNtbDZZWFJwYjI0blhISmNiaUFnSUNBZ0lDQWdmU2s3WEhKY2JpQWdJQ0I5WEhKY2JseHlYRzRnSUNBZ2IyNUZjbkp2Y2lobGNuSnZjaWtnZTF4eVhHNGdJQ0FnSUNBZ0lHTnZibk52YkdVdVpYSnliM0lvWlhKeWIzSXBYSEpjYmlBZ0lDQjlYSEpjYmx4eVhHNGdJQ0FnYjI1RGJHOXpaU2hqYkc5elpVVjJaVzUwS1NCN1hISmNiaUFnSUNBZ0lDQWdhV1lnS0hSb2FYTXVjMjlqYTJWMExuSmxZV1I1VTNSaGRHVWdQVDBnVjJWaVUyOWphMlYwTGtOTVQxTkZSQ2tnZTF4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0JwWmlBb1kyeHZjMlZGZG1WdWRDNTBlWEJsSUQwOUlDZGpiRzl6WlNjcElIdGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR052Ym5OdmJHVXVaWEp5YjNJb0ozTnZZMnRsZE9hY2plV0tvZVczc3VhV3JlVzhnQ0VoSnlsY2NseHVJQ0FnSUNBZ0lDQWdJQ0FnZlNCbGJITmxJR2xtSUNoamJHOXpaVVYyWlc1MExuUjVjR1VnUFQwZ0oyMWxjM05oWjJVbktTQjdYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JqYjI1emIyeGxMbVZ5Y205eUtHTnNiM05sUlhabGJuUXVaR0YwWVNsY2NseHVJQ0FnSUNBZ0lDQWdJQ0FnZlNCbGJITmxJSHRjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdOdmJuTnZiR1V1WlhKeWIzSW9KK1czc3VhV3JlVzhnQ0VoSnlsY2NseHVJQ0FnSUNBZ0lDQWdJQ0FnZlZ4eVhHNGdJQ0FnSUNBZ0lIMWNjbHh1SUNBZ0lIMWNjbHh1WEhKY2JpQWdJQ0J2YmsxbGMzTmhaMlVvYldWemMyRm5aU2tnZTF4eVhHNGdJQ0FnSUNBZ0lHeGxkQ0JsUkdGMFlTQTlJRXBUVDA0dWNHRnljMlVvYldWemMyRm5aUzVrWVhSaEtUdGNjbHh1SUNBZ0lDQWdJQ0JzWlhRZ1pYWmxiblFnUFNCbFJHRjBZUzVsZG1WdWREdGNjbHh1SUNBZ0lDQWdJQ0JzWlhRZ1pHRjBZU0E5SUdWRVlYUmhMbVJoZEdFN1hISmNibHh5WEc0Z0lDQWdJQ0FnSUdsbUlDaGxSR0YwWVM1amFHRnVibVZzSUNFOVBTQjFibVJsWm1sdVpXUXBJSHRjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdkR2hwY3k1d2RYTm9aWEl1WTJoaGJtNWxiSE11Wm1sdVpDaGxSR0YwWVM1amFHRnVibVZzS1M1bGJXbDBLR1YyWlc1MExDQmtZWFJoS1R0Y2NseHVJQ0FnSUNBZ0lDQjlJR1ZzYzJVZ2UxeHlYRzRnSUNBZ0lDQWdJQ0FnSUNCMGFHbHpMbVZ0YVhRb1pYWmxiblFzSUdSaGRHRXBPMXh5WEc0Z0lDQWdJQ0FnSUgxY2NseHVYSEpjYmlBZ0lDQjlYSEpjYmx4eVhHNGdJQ0FnYzJWdVpDaHFjMjl1S1NCN1hISmNiaUFnSUNBZ0lDQWdhV1lnS0hSb2FYTXVjM1JoZEdVZ0lUMDlJQzB4S1NCN1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUhSb2FYTXVjMjlqYTJWMExuTmxibVFvU2xOUFRpNXpkSEpwYm1kcFpua29hbk52YmlrcFhISmNiaUFnSUNBZ0lDQWdmVnh5WEc0Z0lDQWdmVnh5WEc1OUlpd2laWGh3YjNKMElHTnNZWE56SUVOaGJHeGlZV05yVW1WbmFYTjBjbmtnZTF4eVhHNGdJQ0FnWTI5dWMzUnlkV04wYjNJb0tTQjdYSEpjYmlBZ0lDQWdJQ0FnZEdocGN5NWZZMkZzYkdKaFkydHpJRDBnZTMwN1hISmNiaUFnSUNCOVhISmNibHh5WEc0Z0lDQWdaMlYwS0c1aGJXVXBJSHRjY2x4dUlDQWdJQ0FnSUNCeVpYUjFjbTRnZEdocGN5NWZZMkZzYkdKaFkydHpXM0J5WldacGVDaHVZVzFsS1YwN1hISmNiaUFnSUNCOVhISmNibHh5WEc0Z0lDQWdZV1JrS0c1aGJXVXNJR05oYkd4aVlXTnJMQ0JqYjI1MFpYaDBLU0I3WEhKY2JpQWdJQ0FnSUNBZ2JHVjBJSEJ5WldacGVHVmtSWFpsYm5ST1lXMWxJRDBnY0hKbFptbDRLRzVoYldVcE8xeHlYRzRnSUNBZ0lDQWdJSFJvYVhNdVgyTmhiR3hpWVdOcmMxdHdjbVZtYVhobFpFVjJaVzUwVG1GdFpWMGdQU0IwYUdsekxsOWpZV3hzWW1GamEzTmJjSEpsWm1sNFpXUkZkbVZ1ZEU1aGJXVmRJSHg4SUZ0ZE8xeHlYRzRnSUNBZ0lDQWdJSFJvYVhNdVgyTmhiR3hpWVdOcmMxdHdjbVZtYVhobFpFVjJaVzUwVG1GdFpWMHVjSFZ6YUNoN1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUdadU9pQmpZV3hzWW1GamF5eGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ1kyOXVkR1Y0ZERvZ1kyOXVkR1Y0ZEZ4eVhHNGdJQ0FnSUNBZ0lIMHBPMXh5WEc0Z0lDQWdmVnh5WEc1Y2NseHVJQ0FnSUhKbGJXOTJaU2h1WVcxbExDQmpZV3hzWW1GamF5d2dZMjl1ZEdWNGRDa2dlMXh5WEc0Z0lDQWdJQ0FnSUdsbUlDZ2hibUZ0WlNBbUppQWhZMkZzYkdKaFkyc2dKaVlnSVdOdmJuUmxlSFFwSUh0Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnZEdocGN5NWZZMkZzYkdKaFkydHpJRDBnZTMwN1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUhKbGRIVnlianRjY2x4dUlDQWdJQ0FnSUNCOVhISmNibHh5WEc0Z0lDQWdJQ0FnSUhaaGNpQnVZVzFsY3lBOUlHNWhiV1VnUHlCYmNISmxabWw0S0c1aGJXVXBYU0E2SUU5aWFtVmpkQzVyWlhsektIUm9hWE11WDJOaGJHeGlZV05yY3lrN1hISmNibHh5WEc0Z0lDQWdJQ0FnSUdsbUlDaGpZV3hzWW1GamF5QjhmQ0JqYjI1MFpYaDBLU0I3WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJSFJvYVhNdWNtVnRiM1psUTJGc2JHSmhZMnNvYm1GdFpYTXNJR05oYkd4aVlXTnJMQ0JqYjI1MFpYaDBLVHRjY2x4dUlDQWdJQ0FnSUNCOUlHVnNjMlVnZTF4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0IwYUdsekxuSmxiVzkyWlVGc2JFTmhiR3hpWVdOcmN5aHVZVzFsY3lrN1hISmNiaUFnSUNBZ0lDQWdmVnh5WEc0Z0lDQWdmVnh5WEc1Y2NseHVJQ0FnSUhKbGJXOTJaVU5oYkd4aVlXTnJLRzVoYldWekxDQmpZV3hzWW1GamF5d2dZMjl1ZEdWNGRDa2dlMXh5WEc0Z0lDQWdJQ0FnSUdadmNpQW9iR1YwSUc1aGJXVWdhVzRnYm1GdFpYTXBJSHRjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdabTl5SUNoc1pYUWdhMlY1SUdsdUlIUm9hWE11WDJOaGJHeGlZV05yYzF0dVlXMWxYU2tnZTF4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2FXWWdLSFJvYVhNdVgyTmhiR3hpWVdOcmMxdHVZVzFsWFZ0clpYbGRMbVp1SUQwOUlHTmhiR3hpWVdOcklIeDhJSFJvYVhNdVgyTmhiR3hpWVdOcmMxdHVZVzFsWFZ0clpYbGRMbU52Ym5SbGVIUWdQVDBnWTI5dWRHVjRkQ2tnZTF4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR1JsYkdWMFpTQjBhR2x6TGw5allXeHNZbUZqYTNOYmJtRnRaVjFiYTJWNVhUdGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSDFjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdmVnh5WEc1Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnYVdZZ0tIUm9hWE11WDJOaGJHeGlZV05yYzF0dVlXMWxYUzVzWlc1bmRHZ2dQVDA5SURBcElIdGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR1JsYkdWMFpTQjBhR2x6TGw5allXeHNZbUZqYTNOYmJtRnRaVjA3WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJSDFjY2x4dUlDQWdJQ0FnSUNCOVhISmNiaUFnSUNCOVhISmNibHh5WEc0Z0lDQWdjbVZ0YjNabFFXeHNRMkZzYkdKaFkydHpLRzVoYldWektTQjdYSEpjYmlBZ0lDQWdJQ0FnWm05eUlDaHNaWFFnYm1GdFpTQnBiaUJ1WVcxbGN5a2dlMXh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQmtaV3hsZEdVZ2RHaHBjeTVmWTJGc2JHSmhZMnR6VzI1aGJXVmRPMXh5WEc0Z0lDQWdJQ0FnSUgxY2NseHVJQ0FnSUgxY2NseHVmVnh5WEc1Y2NseHVablZ1WTNScGIyNGdjSEpsWm1sNEtHNWhiV1VwSUh0Y2NseHVJQ0FnSUhKbGRIVnliaUJjSWw5Y0lpQXJJRzVoYldVN1hISmNibjBpTENKcGJYQnZjblFnZTBOaGJHeGlZV05yVW1WbmFYTjBjbmw5SUdaeWIyMGdKeTR2WTJGc2JHSmhZMnRmY21WbmFYTjBjbmtuTzF4eVhHNWNjbHh1Wlhod2IzSjBJR05zWVhOeklFUnBjM0JoZEdOb1pYSWdlMXh5WEc0Z0lDQWdZMjl1YzNSeWRXTjBiM0lvS1NCN1hISmNiaUFnSUNBZ0lDQWdkR2hwY3k1allXeHNZbUZqYTNNZ1BTQnVaWGNnUTJGc2JHSmhZMnRTWldkcGMzUnllU2dwTzF4eVhHNGdJQ0FnSUNBZ0lIUm9hWE11WjJ4dlltRnNYMk5oYkd4aVlXTnJjeUE5SUZ0ZE8xeHlYRzRnSUNBZ2ZWeHlYRzVjY2x4dUlDQWdJR0pwYm1Rb1pYWmxiblJPWVcxbExDQmpZV3hzWW1GamF5d2dZMjl1ZEdWNGRDa2dlMXh5WEc0Z0lDQWdJQ0FnSUhSb2FYTXVZMkZzYkdKaFkydHpMbUZrWkNobGRtVnVkRTVoYldVc0lHTmhiR3hpWVdOckxDQmpiMjUwWlhoMEtUdGNjbHh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdkR2hwY3p0Y2NseHVJQ0FnSUgxY2NseHVYSEpjYmlBZ0lDQmlhVzVrWDJkc2IySmhiQ2hqWVd4c1ltRmpheWtnZTF4eVhHNGdJQ0FnSUNBZ0lIUm9hWE11WjJ4dlltRnNYMk5oYkd4aVlXTnJjeTV3ZFhOb0tHTmhiR3hpWVdOcktUdGNjbHh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdkR2hwY3p0Y2NseHVJQ0FnSUgxY2NseHVYSEpjYmlBZ0lDQjFibUpwYm1Rb1pYWmxiblJPWVcxbExDQmpZV3hzWW1GamF5d2dZMjl1ZEdWNGRDa2dlMXh5WEc0Z0lDQWdJQ0FnSUhSb2FYTXVZMkZzYkdKaFkydHpMbkpsYlc5MlpTaGxkbVZ1ZEU1aGJXVXNJR05oYkd4aVlXTnJMQ0JqYjI1MFpYaDBLVHRjY2x4dUlDQWdJQ0FnSUNCeVpYUjFjbTRnZEdocGN6dGNjbHh1SUNBZ0lIMWNjbHh1WEhKY2JpQWdJQ0IxYm1KcGJtUmZaMnh2WW1Gc0tHTmhiR3hpWVdOcktTQjdYSEpjYmlBZ0lDQWdJQ0FnYVdZZ0tDRmpZV3hzWW1GamF5a2dlMXh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQjBhR2x6TG1kc2IySmhiRjlqWVd4c1ltRmphM01nUFNCYlhUdGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ2NtVjBkWEp1SUhSb2FYTTdYSEpjYmlBZ0lDQWdJQ0FnZlZ4eVhHNWNjbHh1SUNBZ0lDQWdJQ0JtYjNJZ0tHeGxkQ0JwSUdsdUlIUm9hWE11WjJ4dlltRnNYMk5oYkd4aVlXTnJjeWtnZTF4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0JwWmlBb1kyRnNiR0poWTJzZ1BUMGdkR2hwY3k1bmJHOWlZV3hmWTJGc2JHSmhZMnR6VzJsZEtTQjdYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JrWld4bGRHVWdkR2hwY3k1bmJHOWlZV3hmWTJGc2JHSmhZMnR6VzJsZE8xeHlYRzRnSUNBZ0lDQWdJQ0FnSUNCOVhISmNiaUFnSUNBZ0lDQWdmVnh5WEc0Z0lDQWdJQ0FnSUhKbGRIVnliaUIwYUdsek8xeHlYRzRnSUNBZ2ZWeHlYRzVjY2x4dUlDQWdJSFZ1WW1sdVpGOWhiR3dvS1NCN1hISmNiaUFnSUNBZ0lDQWdkR2hwY3k1MWJtSnBibVFvS1R0Y2NseHVJQ0FnSUNBZ0lDQjBhR2x6TG5WdVltbHVaRjluYkc5aVlXd29LVHRjY2x4dUlDQWdJQ0FnSUNCeVpYUjFjbTRnZEdocGN6dGNjbHh1SUNBZ0lIMWNjbHh1WEhKY2JpQWdJQ0JsYldsMEtHVjJaVzUwVG1GdFpTd2daR0YwWVNrZ2UxeHlYRzRnSUNBZ0lDQWdJR1p2Y2lBb2JHVjBJR2tnUFNBd095QnBJRHdnZEdocGN5NW5iRzlpWVd4ZlkyRnNiR0poWTJ0ekxteGxibWQwYURzZ2FTc3JLU0I3WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJSFJvYVhNdVoyeHZZbUZzWDJOaGJHeGlZV05yYzF0cFhTaGxkbVZ1ZEU1aGJXVXNJR1JoZEdFcE8xeHlYRzRnSUNBZ0lDQWdJSDFjY2x4dVhISmNiaUFnSUNBZ0lDQWdkbUZ5SUdOaGJHeGlZV05yY3lBOUlIUm9hWE11WTJGc2JHSmhZMnR6TG1kbGRDaGxkbVZ1ZEU1aGJXVXBPMXh5WEc0Z0lDQWdJQ0FnSUdsbUlDaGpZV3hzWW1GamEzTWdKaVlnWTJGc2JHSmhZMnR6TG14bGJtZDBhQ0ErSURBcElIdGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ1ptOXlJQ2hzWlhRZ2FTQTlJREE3SUdrZ1BDQmpZV3hzWW1GamEzTXViR1Z1WjNSb095QnBLeXNwSUh0Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHTmhiR3hpWVdOcmMxdHBYUzVtYmk1allXeHNLR05oYkd4aVlXTnJjMXRwWFM1amIyNTBaWGgwTENCa1lYUmhLVHRjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdmVnh5WEc0Z0lDQWdJQ0FnSUgxY2NseHVYSEpjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJSFJvYVhNN1hISmNiaUFnSUNCOVhISmNibjBpTENKcGJYQnZjblFnZTFOdlkydGxkSDBnWm5KdmJTQW5MaTlqYjI1dVpXTjBhVzl1TDNOdlkydGxkQ2M3WEhKY2JtbHRjRzl5ZENCN1JHbHpjR0YwWTJobGNuMGdabkp2YlNBbkxpOWxkbVZ1ZEhNdlpHbHpjR0YwWTJobGNpYzdYSEpjYm1sdGNHOXlkQ0I3VFdGdWJtRm5aWEo5SUdaeWIyMGdYQ0l1TDJOb1lXNXVaV3h6TDIxaGJtNWhaMlZ5WENJN1hISmNibWx0Y0c5eWRDQmhlR2x2Y3lCbWNtOXRJRndpWVhocGIzTmNJanRjY2x4dVhISmNibVY0Y0c5eWRDQmpiR0Z6Y3lCUWRYTm9aWElnZTF4eVhHNGdJQ0FnWTI5dWMzUnlkV04wYjNJb1lYQndYMnRsZVN3Z2IzQjBhVzl1Y3lrZ2UxeHlYRzRnSUNBZ0lDQWdJSFJvYVhNdVkyaGxZMnRCY0hCTFpYa29ZWEJ3WDJ0bGVTazdYSEpjYmx4eVhHNGdJQ0FnSUNBZ0lIUm9hWE11YTJWNUlEMGdZWEJ3WDJ0bGVUdGNjbHh1SUNBZ0lDQWdJQ0IwYUdsekxtOXdkR2x2Ym5NZ1BTQnZjSFJwYjI1eklIeDhJSHQ5TzF4eVhHNGdJQ0FnSUNBZ0lIUm9hWE11WkdsemNHRjBZMmhsY2lBOUlHNWxkeUJFYVhOd1lYUmphR1Z5S0NrN1hISmNiaUFnSUNBZ0lDQWdkR2hwY3k1amFHRnVibVZzY3lBOUlHNWxkeUJOWVc1dVlXZGxjaWdwTzF4eVhHNWNjbHh1SUNBZ0lDQWdJQ0IwYUdsekxtTnZibTVsWTNRb0tUdGNjbHh1SUNBZ0lIMWNjbHh1WEhKY2JpQWdJQ0JqYjI1dVpXTjBLQ2tnZTF4eVhHNGdJQ0FnSUNBZ0lIUm9hWE11YzI5amEyVjBJRDBnYm1WM0lGTnZZMnRsZENoMGFHbHpMQ0IwYUdsekxtOXdkR2x2Ym5NdWFHOXpkQ2s3WEhKY2JpQWdJQ0I5WEhKY2JseHlYRzRnSUNBZ2MzVmljMk55YVdKbEtHTm9ZVzV1Wld4ZmJtRnRaU2tnZTF4eVhHNGdJQ0FnSUNBZ0lISmxkSFZ5YmlCMGFHbHpMbU5vWVc1dVpXeHpMbUZrWkNoamFHRnVibVZzWDI1aGJXVXNJSFJvYVhNcE8xeHlYRzRnSUNBZ2ZWeHlYRzVjY2x4dUlDQWdJSFZ1YzNWaWMyTnlhV0psS0dOb1lXNXVaV3hmYm1GdFpTa2dlMXh5WEc0Z0lDQWdJQ0FnSUhSb2FYTXVZMmhoYm01bGJITXVjbVZ0YjNabEtHTm9ZVzV1Wld4ZmJtRnRaU2s3WEhKY2JpQWdJQ0I5WEhKY2JseHlYRzRnSUNBZ1oyVjBVMjlqYTJWMFNXUW9LU0I3WEhKY2JpQWdJQ0FnSUNBZ2NtVjBkWEp1SUhSb2FYTXVjMjlqYTJWMExuTnZZMnRsZEM1emIyTnJaWFJmYVdRN1hISmNiaUFnSUNCOVhISmNibHh5WEc0Z0lDQWdjMlZ1WkNocWMyOXVLU0I3WEhKY2JpQWdJQ0FnSUNBZ2RHaHBjeTV6YjJOclpYUXVjMlZ1WkNocWMyOXVLVHRjY2x4dUlDQWdJSDFjY2x4dVhISmNiaUFnSUNCamFHVmphMEZ3Y0V0bGVTaHJaWGtwSUh0Y2NseHVJQ0FnSUNBZ0lDQnlaWFIxY200Z2RISjFaVHRjY2x4dUlDQWdJSDFjY2x4dVhISmNiaUFnSUNCaGRYUm9LRzVoYldVc0lHTmhiR3hpWVdOcktTQjdYSEpjYmlBZ0lDQWdJQ0FnYkdWMElHMWxkR2h2WkNBOUlIUm9hWE11YjNCMGFXOXVjeTVoZFhSb0xtMWxkR2h2WkNCOGZDQW5jRzl6ZENjN1hISmNiaUFnSUNBZ0lDQWdiR1YwSUdSaGRHRWdQU0I3ZlR0Y2NseHVJQ0FnSUNBZ0lDQnNaWFFnY0dGeVlXMXpJRDBnZTMwN1hISmNibHh5WEc0Z0lDQWdJQ0FnSUdsbUlDaHRaWFJvYjJRZ1BUMGdKM0J2YzNRbktTQjdYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lHUmhkR0VnUFNCUFltcGxZM1F1WVhOemFXZHVLSHRjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdOb1lXNXVaV3hmYm1GdFpUb2dibUZ0WlN4Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lITnZZMnRsZEY5cFpEb2dkR2hwY3k1blpYUlRiMk5yWlhSSlpDZ3BYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lIMHBPMXh5WEc0Z0lDQWdJQ0FnSUgwZ1pXeHpaU0I3WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJSEJoY21GdGN5QTlJRTlpYW1WamRDNWhjM05wWjI0b2UxeHlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdZMmhoYm01bGJGOXVZVzFsT2lCdVlXMWxMRnh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnYzI5amEyVjBYMmxrT2lCMGFHbHpMbWRsZEZOdlkydGxkRWxrS0NsY2NseHVJQ0FnSUNBZ0lDQWdJQ0FnZlNrN1hISmNiaUFnSUNBZ0lDQWdmVnh5WEc1Y2NseHVJQ0FnSUNBZ0lDQmhlR2x2Y3loN1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUhWeWJEb2dkR2hwY3k1dmNIUnBiMjV6TG1GMWRHZ3VkWEpzTEZ4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0J0WlhSb2IyUTZJRzFsZEdodlpDeGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ2FHVmhaR1Z5Y3pvZ2RHaHBjeTV2Y0hScGIyNXpMbUYxZEdndWFHVmhaR1Z5Y3lCOGZDQjdmU3hjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdjR0Z5WVcxek9pQndZWEpoYlhNc1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUdSaGRHRTZJR1JoZEdGY2NseHVJQ0FnSUNBZ0lDQjlLUzUwYUdWdUtDaGxLU0E5UGlCN1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUdOaGJHeGlZV05yS0dVcFhISmNiaUFnSUNBZ0lDQWdmU2t1WTJGMFkyZ29LR1VwSUQwK0lIdGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ1kyOXVjMjlzWlM1bGNuSnZjaWduNTZlQjVweUo2YUtSNllHVDVwMkQ2Wm1RNUxpTjZMYXpJU2NwTzF4eVhHNGdJQ0FnSUNBZ0lIMHBPMXh5WEc0Z0lDQWdmVnh5WEc1OVhISmNibHh5WEc1M2FXNWtiM2N1VUhWemFHVnlJRDBnVUhWemFHVnlPeUpkTENKemIzVnlZMlZTYjI5MElqb2lJbjA9IiwiaW1wb3J0IHtEaXNwYXRjaGVyfSBmcm9tIFwiLi4vZXZlbnRzL2Rpc3BhdGNoZXJcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBDaGFubmVsIGV4dGVuZHMgRGlzcGF0Y2hlciB7XHJcbiAgICBjb25zdHJ1Y3RvcihuYW1lLCBwdXNoZXIpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG5cclxuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgICAgIHRoaXMucHVzaGVyID0gcHVzaGVyO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5wdXNoZXIuc29ja2V0LnN0YXRlID09IDEpIHtcclxuICAgICAgICAgICAgdGhpcy5zdWJzY3JpYmUoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc3Vic2NyaWJlKCkge1xyXG4gICAgICAgIHRoaXMucHVzaGVyLnNlbmQoe1xyXG4gICAgICAgICAgICBldmVudDogJ3N1YnNjcmliZScsXHJcbiAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgIGNoYW5uZWw6IHRoaXMubmFtZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQge0Rpc3BhdGNoZXJ9IGZyb20gXCIuLi9ldmVudHMvZGlzcGF0Y2hlclwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFByZXNlbmNlQ2hhbm5lbCBleHRlbmRzIERpc3BhdGNoZXIge1xyXG4gICAgY29uc3RydWN0b3IobmFtZSwgcHVzaGVyKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuXHJcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICAgICAgICB0aGlzLnB1c2hlciA9IHB1c2hlcjtcclxuICAgICAgICB0aGlzLmF1dGggPSBudWxsO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5wdXNoZXIuc29ja2V0LnN0YXRlID09IDEpIHtcclxuICAgICAgICAgICAgdGhpcy5zdWJzY3JpYmUoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc3Vic2NyaWJlKCkge1xyXG4gICAgICAgIHRoaXMucHVzaGVyLmF1dGgodGhpcy5uYW1lLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmF1dGggPSBlLmRhdGEuYXV0aDtcclxuXHJcbiAgICAgICAgICAgIHRoaXMucHVzaGVyLnNlbmQoe1xyXG4gICAgICAgICAgICAgICAgZXZlbnQ6ICdzdWJzY3JpYmUnLFxyXG4gICAgICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgICAgIGNoYW5uZWw6IHRoaXMubmFtZSxcclxuICAgICAgICAgICAgICAgICAgICBhdXRoOiB0aGlzLmF1dGgsXHJcbiAgICAgICAgICAgICAgICAgICAgY2hhbm5lbF9kYXRhOiBlLmRhdGEuY2hhbm5lbF9kYXRhXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHtEaXNwYXRjaGVyfSBmcm9tIFwiLi4vZXZlbnRzL2Rpc3BhdGNoZXJcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBQcml2YXRlQ2hhbm5lbCBleHRlbmRzIERpc3BhdGNoZXIge1xyXG4gICAgY29uc3RydWN0b3IobmFtZSwgcHVzaGVyKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuXHJcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICAgICAgICB0aGlzLnB1c2hlciA9IHB1c2hlcjtcclxuICAgICAgICB0aGlzLmF1dGggPSBudWxsO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5wdXNoZXIuc29ja2V0LnN0YXRlID09IDEpIHtcclxuICAgICAgICAgICAgdGhpcy5zdWJzY3JpYmUoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc3Vic2NyaWJlKCkge1xyXG4gICAgICAgIHRoaXMucHVzaGVyLmF1dGgodGhpcy5uYW1lLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmF1dGggPSBlLmRhdGEuYXV0aDtcclxuXHJcbiAgICAgICAgICAgIHRoaXMucHVzaGVyLnNlbmQoe1xyXG4gICAgICAgICAgICAgICAgZXZlbnQ6ICdzdWJzY3JpYmUnLFxyXG4gICAgICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgICAgIGNoYW5uZWw6IHRoaXMubmFtZSxcclxuICAgICAgICAgICAgICAgICAgICBhdXRoOiB0aGlzLmF1dGhcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn0iLCJleHBvcnQgY2xhc3MgQ2FsbGJhY2tSZWdpc3RyeSB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLl9jYWxsYmFja3MgPSB7fTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQobmFtZSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9jYWxsYmFja3NbcHJlZml4KG5hbWUpXTtcclxuICAgIH1cclxuXHJcbiAgICBhZGQobmFtZSwgY2FsbGJhY2ssIGNvbnRleHQpIHtcclxuICAgICAgICBsZXQgcHJlZml4ZWRFdmVudE5hbWUgPSBwcmVmaXgobmFtZSk7XHJcbiAgICAgICAgdGhpcy5fY2FsbGJhY2tzW3ByZWZpeGVkRXZlbnROYW1lXSA9IHRoaXMuX2NhbGxiYWNrc1twcmVmaXhlZEV2ZW50TmFtZV0gfHwgW107XHJcbiAgICAgICAgdGhpcy5fY2FsbGJhY2tzW3ByZWZpeGVkRXZlbnROYW1lXS5wdXNoKHtcclxuICAgICAgICAgICAgZm46IGNhbGxiYWNrLFxyXG4gICAgICAgICAgICBjb250ZXh0OiBjb250ZXh0XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVtb3ZlKG5hbWUsIGNhbGxiYWNrLCBjb250ZXh0KSB7XHJcbiAgICAgICAgaWYgKCFuYW1lICYmICFjYWxsYmFjayAmJiAhY29udGV4dCkge1xyXG4gICAgICAgICAgICB0aGlzLl9jYWxsYmFja3MgPSB7fTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIG5hbWVzID0gbmFtZSA/IFtwcmVmaXgobmFtZSldIDogT2JqZWN0LmtleXModGhpcy5fY2FsbGJhY2tzKTtcclxuXHJcbiAgICAgICAgaWYgKGNhbGxiYWNrIHx8IGNvbnRleHQpIHtcclxuICAgICAgICAgICAgdGhpcy5yZW1vdmVDYWxsYmFjayhuYW1lcywgY2FsbGJhY2ssIGNvbnRleHQpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlQWxsQ2FsbGJhY2tzKG5hbWVzKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmVtb3ZlQ2FsbGJhY2sobmFtZXMsIGNhbGxiYWNrLCBjb250ZXh0KSB7XHJcbiAgICAgICAgZm9yIChsZXQgbmFtZSBpbiBuYW1lcykge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBrZXkgaW4gdGhpcy5fY2FsbGJhY2tzW25hbWVdKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fY2FsbGJhY2tzW25hbWVdW2tleV0uZm4gPT0gY2FsbGJhY2sgfHwgdGhpcy5fY2FsbGJhY2tzW25hbWVdW2tleV0uY29udGV4dCA9PSBjb250ZXh0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIHRoaXMuX2NhbGxiYWNrc1tuYW1lXVtrZXldO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5fY2FsbGJhY2tzW25hbWVdLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgZGVsZXRlIHRoaXMuX2NhbGxiYWNrc1tuYW1lXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZW1vdmVBbGxDYWxsYmFja3MobmFtZXMpIHtcclxuICAgICAgICBmb3IgKGxldCBuYW1lIGluIG5hbWVzKSB7XHJcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLl9jYWxsYmFja3NbbmFtZV07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBwcmVmaXgobmFtZSkge1xyXG4gICAgcmV0dXJuIFwiX1wiICsgbmFtZTtcclxufSIsImltcG9ydCB7Q2FsbGJhY2tSZWdpc3RyeX0gZnJvbSAnLi9jYWxsYmFja19yZWdpc3RyeSc7XHJcblxyXG5leHBvcnQgY2xhc3MgRGlzcGF0Y2hlciB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLmNhbGxiYWNrcyA9IG5ldyBDYWxsYmFja1JlZ2lzdHJ5KCk7XHJcbiAgICAgICAgdGhpcy5nbG9iYWxfY2FsbGJhY2tzID0gW107XHJcbiAgICB9XHJcblxyXG4gICAgYmluZChldmVudE5hbWUsIGNhbGxiYWNrLCBjb250ZXh0KSB7XHJcbiAgICAgICAgdGhpcy5jYWxsYmFja3MuYWRkKGV2ZW50TmFtZSwgY2FsbGJhY2ssIGNvbnRleHQpO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIGJpbmRfZ2xvYmFsKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgdGhpcy5nbG9iYWxfY2FsbGJhY2tzLnB1c2goY2FsbGJhY2spO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHVuYmluZChldmVudE5hbWUsIGNhbGxiYWNrLCBjb250ZXh0KSB7XHJcbiAgICAgICAgdGhpcy5jYWxsYmFja3MucmVtb3ZlKGV2ZW50TmFtZSwgY2FsbGJhY2ssIGNvbnRleHQpO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHVuYmluZF9nbG9iYWwoY2FsbGJhY2spIHtcclxuICAgICAgICBpZiAoIWNhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZ2xvYmFsX2NhbGxiYWNrcyA9IFtdO1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgaW4gdGhpcy5nbG9iYWxfY2FsbGJhY2tzKSB7XHJcbiAgICAgICAgICAgIGlmIChjYWxsYmFjayA9PSB0aGlzLmdsb2JhbF9jYWxsYmFja3NbaV0pIHtcclxuICAgICAgICAgICAgICAgIGRlbGV0ZSB0aGlzLmdsb2JhbF9jYWxsYmFja3NbaV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgdW5iaW5kX2FsbCgpIHtcclxuICAgICAgICB0aGlzLnVuYmluZCgpO1xyXG4gICAgICAgIHRoaXMudW5iaW5kX2dsb2JhbCgpO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIGVtaXQoZXZlbnROYW1lLCBkYXRhKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmdsb2JhbF9jYWxsYmFja3MubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgdGhpcy5nbG9iYWxfY2FsbGJhY2tzW2ldKGV2ZW50TmFtZSwgZGF0YSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2YXIgY2FsbGJhY2tzID0gdGhpcy5jYWxsYmFja3MuZ2V0KGV2ZW50TmFtZSk7XHJcbiAgICAgICAgaWYgKGNhbGxiYWNrcyAmJiBjYWxsYmFja3MubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNhbGxiYWNrcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgY2FsbGJhY2tzW2ldLmZuLmNhbGwoY2FsbGJhY2tzW2ldLmNvbnRleHQsIGRhdGEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxufSIsImltcG9ydCB7RWNob30gZnJvbSAnLi9lY2hvJ1xyXG5cclxud2luZG93LkVjaG8gPSBuZXcgRWNobygnYjgyMzkzZDg4NmEwZTZkZGZhZTUnLCB7XHJcbiAgICBob3N0OiAnd3M6Ly8xOTIuMTY4LjEwLjEwOjgwODEnLFxyXG4gICAgYXV0aDoge1xyXG4gICAgICAgIG1ldGhvZDogJ3Bvc3QnLFxyXG4gICAgICAgIHVybDogJ2h0dHA6Ly90ZXN0cy50ZXN0L2FwaS9wdXNoZXIvYXV0aCcsXHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgICAnQXV0aG9yaXphdGlvbic6ICdCZWFyZXIgZXlKMGVYQWlPaUpLVjFRaUxDSmhiR2NpT2lKSVV6STFOaUo5LmV5SnBjM01pT2lKb2RIUndPbHd2WEM5MFpYTjBjeTUwWlhOMElpd2lhV0YwSWpveE5UTTVNalUwTWpjekxDSmxlSEFpT2pFMU16a3lOVGM0TnpNc0ltNWlaaUk2TVRVek9USTFOREkzTXl3aWFuUnBJam9pUzJsdlVXWllkMmhMYzBNNFJUZEVaQ0lzSW5OMVlpSTZNaXdpY0hKMklqb2lPRGRsTUdGbU1XVm1PV1prTVRVNE1USm1aR1ZqT1RjeE5UTmhNVFJsTUdJd05EYzFORFpoWVNKOS5KdzExYUVQcWU4S09jQmhLdzJmN2pDYU90RjB0ZFFCTl9UUE83cGIxZEVvJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHBhcmFtczoge31cclxuICAgIH0sXHJcbn0pXHJcblxyXG4vKndpbmRvdy5FY2hvLmNoYW5uZWwoJ29yZGVyJykubGlzdGVuKCduZXcnLCAoZSkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coZSlcclxufSkubGlzdGVuKCdtYWtlJywgKGUpID0+IHtcclxufSk7Ki9cclxuXHJcblxyXG53aW5kb3cuRWNoby5wcml2YXRlKCd1c2VyLjEnKS5saXN0ZW4oJ2EnLCAoZSkgPT4ge1xyXG4gICAgYWxlcnQoJ2FhYScpO1xyXG59KS5saXN0ZW4oJ2InLCAoZSkgPT4ge1xyXG4gICAgYWxlcnQoJ2JiYicpO1xyXG59KTtcclxuXHJcbndpbmRvdy5FY2hvLmpvaW4oYGNoYXQuMWApXHJcbiAgICAuaGVyZSgodXNlcnMpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZygn5YWo6YOo5Lq65ZGYJyk7XHJcbiAgICAgICAgY29uc29sZS5sb2codXNlcnMpXHJcbiAgICB9KVxyXG4gICAgLmpvaW5pbmcoKHVzZXIpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZygn5paw5Lq65Yqg5YWlJyk7XHJcbiAgICAgICAgY29uc29sZS5sb2codXNlcik7XHJcbiAgICB9KVxyXG4gICAgLmxlYXZpbmcoKHVzZXIpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZygn5pyJ5Lq66YCA5Ye6Jyk7XHJcbiAgICAgICAgY29uc29sZS5sb2codXNlcik7XHJcbiAgICB9KS5saXN0ZW4oJ05ld01lc3NhZ2UnLCAoZSkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coZSk7XHJcbn0pO1xyXG4iLCJleHBvcnQgY2xhc3MgQ2hhbm5lbCB7XHJcbiAgICBjb25zdHJ1Y3RvcihwdXNoZXIsIG5hbWUpIHtcclxuICAgICAgICB0aGlzLnB1c2hlciA9IHB1c2hlcjtcclxuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG5cclxuICAgICAgICB0aGlzLnN1YnNjcmliZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHN1YnNjcmliZSgpIHtcclxuICAgICAgICB0aGlzLnN1YnNjcmlwdGlvbiA9IHRoaXMucHVzaGVyLnN1YnNjcmliZSh0aGlzLm5hbWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHVuc3Vic2NyaWJlKCkge1xyXG4gICAgICAgIHRoaXMucHVzaGVyLnVuc3Vic2NyaWJlKHRoaXMubmFtZSk7XHJcbiAgICB9XHJcblxyXG4gICAgbGlzdGVuKGV2ZW50LCBjYWxsYmFjaykge1xyXG4gICAgICAgIHRoaXMub24oZXZlbnQsIGNhbGxiYWNrKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgc3RvcExpc3RlbmluZyhldmVudCkge1xyXG4gICAgICAgIHRoaXMuc3Vic2NyaXB0aW9uLnVuYmluZChldmVudCk7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIG9uKGV2ZW50LCBjYWxsYmFjaykge1xyXG4gICAgICAgIHRoaXMuc3Vic2NyaXB0aW9uLmJpbmQoZXZlbnQsIGNhbGxiYWNrKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgd2hpc3BlcihldmVudCwgZGF0YSkge1xyXG4gICAgICAgIHRoaXMucHVzaGVyLnNlbmQoe1xyXG4gICAgICAgICAgICBjaGFubmVsOiB0aGlzLm5hbWUsXHJcbiAgICAgICAgICAgIGRhdGE6IGRhdGEsXHJcbiAgICAgICAgICAgIGV2ZW50OiAnY2xpZW50LScgKyBldmVudFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGxpc3RlbkZvcldoaXNwZXIoZXZlbnQsIGNhbGxiYWNrKSB7XHJcbiAgICAgICAgdGhpcy5vbignY2xpZW50LScgKyBldmVudCwgY2FsbGJhY2spO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHtDaGFubmVsfSBmcm9tIFwiLi9jaGFubmVsXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgUHVzaGVyQ2hhbm5lbCBleHRlbmRzIENoYW5uZWwge1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQHBhcmFtIHB1c2hlclxyXG4gICAgICogQHBhcmFtIGNoYW5uZWxcclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IocHVzaGVyLCBuYW1lKSB7XHJcbiAgICAgICAgc3VwZXIocHVzaGVyLCBuYW1lKTtcclxuICAgIH1cclxuXHJcblxyXG59IiwiaW1wb3J0IHtDaGFubmVsfSBmcm9tIFwiLi9jaGFubmVsXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgUHVzaGVyUHJlc2VuY2VDaGFubmVsIGV4dGVuZHMgQ2hhbm5lbCB7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAcGFyYW0gcHVzaGVyXHJcbiAgICAgKiBAcGFyYW0gY2hhbm5lbFxyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3RvcihwdXNoZXIsIG5hbWUpIHtcclxuICAgICAgICBzdXBlcihwdXNoZXIsIG5hbWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGhlcmUoY2FsbGJhY2spIHtcclxuICAgICAgICBsZXQgYmFjayA9IChlKSA9PiB7XHJcbiAgICAgICAgICAgIGNhbGxiYWNrKGUucHJlc2VuY2UpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMub24oJ3B1c2hlcl9pbnRlcm5hbDpzdWJzY3JpcHRpb25fc3VjY2VlZGVkJywgYmFjayk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgam9pbmluZyhjYWxsYmFjaykge1xyXG4gICAgICAgIHRoaXMub24oJ3B1c2hlcl9pbnRlcm5hbDptZW1iZXJfYWRkZWQnLCBjYWxsYmFjayk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgbGVhdmluZyhjYWxsYmFjaykge1xyXG4gICAgICAgIHRoaXMub24oJ3B1c2hlcl9pbnRlcm5hbDptZW1iZXJfcmVtb3ZlZCcsIGNhbGxiYWNrKTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxufSIsImltcG9ydCB7Q2hhbm5lbH0gZnJvbSBcIi4vY2hhbm5lbFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFB1c2hlclByaXZhdGVDaGFubmVsIGV4dGVuZHMgQ2hhbm5lbCB7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAcGFyYW0gcHVzaGVyXHJcbiAgICAgKiBAcGFyYW0gY2hhbm5lbFxyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3RvcihwdXNoZXIsIG5hbWUpIHtcclxuICAgICAgICBzdXBlcihwdXNoZXIsIG5hbWUpO1xyXG4gICAgfVxyXG5cclxufSIsImltcG9ydCAnbHVmZnktcHVzaGVyJztcclxuaW1wb3J0IHtQdXNoZXJDaGFubmVsfSBmcm9tIFwiLi4vY2hhbm5lbC9wdXNoZXItY2hhbm5lbFwiO1xyXG5pbXBvcnQge1B1c2hlclByaXZhdGVDaGFubmVsfSBmcm9tIFwiLi4vY2hhbm5lbC9wdXNoZXItcHJpdmF0ZS1jaGFubmVsXCI7XHJcbmltcG9ydCB7UHVzaGVyUHJlc2VuY2VDaGFubmVsfSBmcm9tIFwiLi4vY2hhbm5lbC9wdXNoZXItcHJlc2VuY2UtY2hhbm5lbFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFB1c2hlckNvbm5lY3RvciB7XHJcbiAgICBjb25zdHJ1Y3RvcihhcHBfa2V5LCBvcHRpb25zKSB7XHJcbiAgICAgICAgdGhpcy5wdXNoZXIgPSBuZXcgUHVzaGVyKGFwcF9rZXksIG9wdGlvbnMpO1xyXG4gICAgICAgIHRoaXMuY2hhbm5lbHMgPSB7fTtcclxuICAgIH1cclxuXHJcbiAgICBjaGFubmVsKGNoYW5uZWwpIHtcclxuICAgICAgICBpZiAodGhpcy5jaGFubmVsc1tjaGFubmVsXSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2hhbm5lbHNbY2hhbm5lbF0gPSBuZXcgUHVzaGVyQ2hhbm5lbCh0aGlzLnB1c2hlciwgY2hhbm5lbCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5jaGFubmVsc1tjaGFubmVsXTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlQ2hhbm5lbChjaGFubmVsKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuY2hhbm5lbHNbJ3ByaXZhdGUtJyArIGNoYW5uZWxdID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5jaGFubmVsc1sncHJpdmF0ZS0nICsgY2hhbm5lbF0gPSBuZXcgUHVzaGVyUHJpdmF0ZUNoYW5uZWwodGhpcy5wdXNoZXIsICdwcml2YXRlLScgKyBjaGFubmVsKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY2hhbm5lbHNbJ3ByaXZhdGUtJyArIGNoYW5uZWxdO1xyXG4gICAgfVxyXG5cclxuICAgIHByZXNlbmNlQ2hhbm5lbChjaGFubmVsKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuY2hhbm5lbHNbJ3ByZXNlbmNlLScgKyBjaGFubmVsXSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2hhbm5lbHNbJ3ByZXNlbmNlLScgKyBjaGFubmVsXSA9IG5ldyBQdXNoZXJQcmVzZW5jZUNoYW5uZWwodGhpcy5wdXNoZXIsICdwcmVzZW5jZS0nICsgY2hhbm5lbCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLmNoYW5uZWxzWydwcmVzZW5jZS0nICsgY2hhbm5lbF07XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQge1B1c2hlckNvbm5lY3Rvcn0gZnJvbSBcIi4vY29ubmVjdG9yL3B1c2hlcl9jb25uZWN0b3JcIjtcclxuaW1wb3J0IHtQcml2YXRlQ2hhbm5lbH0gZnJvbSBcImx1ZmZ5LXB1c2hlci9zcmMvY2hhbm5lbHMvcHJpdmF0ZV9jaGFubmVsXCI7XHJcbmltcG9ydCB7UHJlc2VuY2VDaGFubmVsfSBmcm9tIFwibHVmZnktcHVzaGVyL3NyYy9jaGFubmVscy9wcmVzZW5jZV9jaGFubmVsXCI7XHJcbmltcG9ydCB7Q2hhbm5lbH0gZnJvbSBcImx1ZmZ5LXB1c2hlci9zcmMvY2hhbm5lbHMvY2hhbm5lbFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEVjaG8ge1xyXG4gICAgY29uc3RydWN0b3IoYXBwa2V5LCBvcHRpb25zKSB7XHJcbiAgICAgICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcclxuICAgICAgICB0aGlzLmNvbm5lY3RvciA9IG5ldyBQdXNoZXJDb25uZWN0b3IoYXBwa2V5LCB0aGlzLm9wdGlvbnMpO1xyXG4gICAgfVxyXG5cclxuICAgIGNoYW5uZWwoY2hhbm5lbCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNvbm5lY3Rvci5jaGFubmVsKGNoYW5uZWwpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUoY2hhbm5lbCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNvbm5lY3Rvci5wcml2YXRlQ2hhbm5lbChjaGFubmVsKTtcclxuICAgIH1cclxuXHJcbiAgICBqb2luKGNoYW5uZWwpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jb25uZWN0b3IucHJlc2VuY2VDaGFubmVsKGNoYW5uZWwpO1xyXG4gICAgfVxyXG5cclxuICAgIHN1YnNjcmliZShuYW1lKSB7XHJcbiAgICAgICAgaWYgKG5hbWUuaW5kZXhPZigncHJpdmF0ZS0nKSA9PT0gMCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wcml2YXRlKG5hbWUpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAobmFtZS5pbmRleE9mKCdwcmVzZW5jZS0nKSA9PT0gMCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5qb2luKG5hbWUpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNoYW5uZWwobmFtZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6YCA5Ye66aKR6YGTLOaagueVmVxyXG4gICAgICogQHBhcmFtIGNoYW5uZWxcclxuICAgICAqL1xyXG4gICAgbGVhdmUoY2hhbm5lbCkge1xyXG5cclxuICAgIH1cclxufVxyXG5cclxud2luZG93LkVjaG8gPSBFY2hvO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app_a_user_1.js");
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

/***/ "./src/app_a_user_1.js":
/*!*****************************!*\
  !*** ./src/app_a_user_1.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _echo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./echo */ "./src/echo.js");

window.Echo = new _echo__WEBPACK_IMPORTED_MODULE_0__["Echo"]('a82393d886a0e6ddfae5', {
  host: 'ws://192.168.10.10:8081',
  auth: {
    method: 'post',
    url: 'http://tests.test/api/pusher/auth',
    headers: {
      'Accept': 'application/json',
      'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC90ZXN0cy50ZXN0IiwiaWF0IjoxNTM5MjU1ODY0LCJleHAiOjE1MzkyNTk0NjQsIm5iZiI6MTUzOTI1NTg2NCwianRpIjoiWjhjNzJkVXk4dmRQd0YzYSIsInN1YiI6MSwicHJ2IjoiODdlMGFmMWVmOWZkMTU4MTJmZGVjOTcxNTNhMTRlMGIwNDc1NDZhYSJ9.y0KU4-O6U0CZVbwRwE5demuDwl6moQkKmdpoQsfZjUs'
    },
    params: {}
  }
});
/*window.Echo.channel('order').listen('new', (e) => {
    console.log(e)
}).listen('make', (e) => {
});*/

/*window.Echo.private('user.1').listen('a', (e) => {
    alert('aaa');
}).listen('b', (e) => {
    alert('bbb');
});*/

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2x1ZmZ5LXB1c2hlci9kaXN0L3B1c2hlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbHVmZnktcHVzaGVyL3NyYy9jaGFubmVscy9jaGFubmVsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sdWZmeS1wdXNoZXIvc3JjL2NoYW5uZWxzL3ByZXNlbmNlX2NoYW5uZWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2x1ZmZ5LXB1c2hlci9zcmMvY2hhbm5lbHMvcHJpdmF0ZV9jaGFubmVsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sdWZmeS1wdXNoZXIvc3JjL2V2ZW50cy9jYWxsYmFja19yZWdpc3RyeS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbHVmZnktcHVzaGVyL3NyYy9ldmVudHMvZGlzcGF0Y2hlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwX2FfdXNlcl8xLmpzIiwid2VicGFjazovLy8uL3NyYy9jaGFubmVsL2NoYW5uZWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NoYW5uZWwvcHVzaGVyLWNoYW5uZWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NoYW5uZWwvcHVzaGVyLXByZXNlbmNlLWNoYW5uZWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NoYW5uZWwvcHVzaGVyLXByaXZhdGUtY2hhbm5lbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29ubmVjdG9yL3B1c2hlcl9jb25uZWN0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VjaG8uanMiXSwibmFtZXMiOlsid2luZG93IiwiRWNobyIsImhvc3QiLCJhdXRoIiwibWV0aG9kIiwidXJsIiwiaGVhZGVycyIsInBhcmFtcyIsImpvaW4iLCJoZXJlIiwidXNlcnMiLCJjb25zb2xlIiwibG9nIiwiam9pbmluZyIsInVzZXIiLCJsZWF2aW5nIiwibGlzdGVuIiwiZSIsIkNoYW5uZWwiLCJwdXNoZXIiLCJuYW1lIiwic3Vic2NyaWJlIiwic3Vic2NyaXB0aW9uIiwidW5zdWJzY3JpYmUiLCJldmVudCIsImNhbGxiYWNrIiwib24iLCJ1bmJpbmQiLCJiaW5kIiwiZGF0YSIsInNlbmQiLCJjaGFubmVsIiwiUHVzaGVyQ2hhbm5lbCIsIlB1c2hlclByZXNlbmNlQ2hhbm5lbCIsImJhY2siLCJwcmVzZW5jZSIsIlB1c2hlclByaXZhdGVDaGFubmVsIiwiUHVzaGVyQ29ubmVjdG9yIiwiYXBwX2tleSIsIm9wdGlvbnMiLCJQdXNoZXIiLCJjaGFubmVscyIsInVuZGVmaW5lZCIsImFwcGtleSIsImNvbm5lY3RvciIsInByaXZhdGVDaGFubmVsIiwicHJlc2VuY2VDaGFubmVsIiwiaW5kZXhPZiIsInByaXZhdGUiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ2xGQSw2QkFBNkI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrREFBa0QsZ0NBQWdDO0FBQ2xGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdFQUFnRSxrQkFBa0I7QUFDbEY7QUFDQSx5REFBeUQsY0FBYztBQUN2RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUFpRCxpQ0FBaUM7QUFDbEYsd0hBQXdILG1CQUFtQixFQUFFO0FBQzdJO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQywwQkFBMEIsRUFBRTtBQUMvRCx5Q0FBeUMsZUFBZTtBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOERBQThELCtEQUErRDtBQUM3SDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw0Q0FBNEM7QUFDNUM7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDs7O0FBR0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixZQUFZLE1BQU07QUFDbEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7O0FBR0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7O0FBR0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxTQUFTO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQTs7O0FBR0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQSxrQ0FBa0MsY0FBYztBQUNoRDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnREFBZ0Q7QUFDaEQ7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0EsZ0RBQWdEO0FBQ2hEO0FBQ0E7QUFDQTtB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QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLHNCQUFzQjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEscUNBQXFDOztBQUVyQztBQUNBO0FBQ0E7O0FBRUEsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixVQUFVOzs7QUFHdEMsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGlHQUFpRyxnQkFBZ0IsRUFBRTtBQUNuSDtBQUNBLHVCQUF1QiwyRUFBMkUsa0NBQWtDLG1CQUFtQixHQUFHLEVBQUUsT0FBTyxrQ0FBa0MsOEhBQThILEdBQUcsRUFBRSxxQkFBcUI7O0FBRTdWLGlEQUFpRCwwQ0FBMEMsMERBQTBELEVBQUU7O0FBRXZKLDJDQUEyQyxnQkFBZ0Isa0JBQWtCLE9BQU8sMkJBQTJCLHdEQUF3RCxnQ0FBZ0MsdURBQXVELDJEQUEyRCxFQUFFOztBQUUzVCw2REFBNkQsc0VBQXNFLDhEQUE4RCxvQkFBb0I7O0FBRXJOLGlEQUFpRCwwRUFBMEUsYUFBYSxFQUFFLHFDQUFxQzs7QUFFL0ssdUNBQXVDLHVCQUF1Qix1RkFBdUYsRUFBRSxhQUFhOztBQUVwSyw2QkFBNkIsZ0dBQWdHLGdEQUFnRCxHQUFHLDJCQUEyQjs7QUFFM00sMENBQTBDLCtEQUErRCwyRUFBMkUsRUFBRSx5RUFBeUUsZUFBZSxzREFBc0QsRUFBRSxFQUFFLHVEQUF1RDs7QUFFL1gsZ0NBQWdDLDRFQUE0RSxpQkFBaUIsVUFBVSxHQUFHLDhCQUE4Qjs7O0FBR3hLO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxHQUFHOztBQUVIO0FBQ0EsQ0FBQzs7QUFFRCxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esa0dBQWtHLGlCQUFpQixFQUFFO0FBQ3JIO0FBQ0E7QUFDQTtBQUNBLGlEQUFpRCwwQ0FBMEMsMERBQTBELEVBQUU7O0FBRXZKLDJDQUEyQyxnQkFBZ0Isa0JBQWtCLE9BQU8sMkJBQTJCLHdEQUF3RCxnQ0FBZ0MsdURBQXVELDJEQUEyRCxFQUFFOztBQUUzVCw2REFBNkQsc0VBQXNFLDhEQUE4RCxvQkFBb0I7Ozs7O0FBS3JOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EseUdBQXlHLHdCQUF3QixFQUFFO0FBQ25JO0FBQ0EsdUJBQXVCLDJFQUEyRSxrQ0FBa0MsbUJBQW1CLEdBQUcsRUFBRSxPQUFPLGtDQUFrQyw4SEFBOEgsR0FBRyxFQUFFLHFCQUFxQjs7QUFFN1YsaURBQWlELDBDQUEwQywwREFBMEQsRUFBRTs7QUFFdkosMkNBQTJDLGdCQUFnQixrQkFBa0IsT0FBTywyQkFBMkIsd0RBQXdELGdDQUFnQyx1REFBdUQsMkRBQTJELEVBQUU7O0FBRTNULDZEQUE2RCxzRUFBc0UsOERBQThELG9CQUFvQjs7QUFFck4saURBQWlELDBFQUEwRSxhQUFhLEVBQUUscUNBQXFDOztBQUUvSyx1Q0FBdUMsdUJBQXVCLHVGQUF1RixFQUFFLGFBQWE7O0FBRXBLLDZCQUE2QixnR0FBZ0csZ0RBQWdELEdBQUcsMkJBQTJCOztBQUUzTSwwQ0FBMEMsK0RBQStELDJFQUEyRSxFQUFFLHlFQUF5RSxlQUFlLHNEQUFzRCxFQUFFLEVBQUUsdURBQXVEOztBQUUvWCxnQ0FBZ0MsNEVBQTRFLGlCQUFpQixVQUFVLEdBQUcsOEJBQThCOzs7QUFHeEs7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUDtBQUNBLEdBQUc7O0FBRUg7QUFDQSxDQUFDOztBQUVELE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx3R0FBd0csdUJBQXVCLEVBQUU7QUFDakk7QUFDQSx1QkFBdUIsMkVBQTJFLGtDQUFrQyxtQkFBbUIsR0FBRyxFQUFFLE9BQU8sa0NBQWtDLDhIQUE4SCxHQUFHLEVBQUUscUJBQXFCOztBQUU3VixpREFBaUQsMENBQTBDLDBEQUEwRCxFQUFFOztBQUV2SiwyQ0FBMkMsZ0JBQWdCLGtCQUFrQixPQUFPLDJCQUEyQix3REFBd0QsZ0NBQWdDLHVEQUF1RCwyREFBMkQsRUFBRTs7QUFFM1QsNkRBQTZELHNFQUFzRSw4REFBOEQsb0JBQW9COztBQUVyTixpREFBaUQsMEVBQTBFLGFBQWEsRUFBRSxxQ0FBcUM7O0FBRS9LLHVDQUF1Qyx1QkFBdUIsdUZBQXVGLEVBQUUsYUFBYTs7QUFFcEssNkJBQTZCLGdHQUFnRyxnREFBZ0QsR0FBRywyQkFBMkI7O0FBRTNNLDBDQUEwQywrREFBK0QsMkVBQTJFLEVBQUUseUVBQXlFLGVBQWUsc0RBQXNELEVBQUUsRUFBRSx1REFBdUQ7O0FBRS9YLGdDQUFnQyw0RUFBNEUsaUJBQWlCLFVBQVUsR0FBRyw4QkFBOEI7OztBQUd4SztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUDtBQUNBLEdBQUc7O0FBRUg7QUFDQSxDQUFDOztBQUVELE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxnR0FBZ0csZUFBZSxFQUFFO0FBQ2pIO0FBQ0EsdUJBQXVCLDJFQUEyRSxrQ0FBa0MsbUJBQW1CLEdBQUcsRUFBRSxPQUFPLGtDQUFrQyw4SEFBOEgsR0FBRyxFQUFFLHFCQUFxQjs7QUFFN1YsaURBQWlELDBDQUEwQywwREFBMEQsRUFBRTs7QUFFdkosMkNBQTJDLGdCQUFnQixrQkFBa0IsT0FBTywyQkFBMkIsd0RBQXdELGdDQUFnQyx1REFBdUQsMkRBQTJELEVBQUU7O0FBRTNULDZEQUE2RCxzRUFBc0UsOERBQThELG9CQUFvQjs7QUFFck4saURBQWlELDBFQUEwRSxhQUFhLEVBQUUscUNBQXFDOztBQUUvSyx1Q0FBdUMsdUJBQXVCLHVGQUF1RixFQUFFLGFBQWE7O0FBRXBLLDZCQUE2QixnR0FBZ0csZ0RBQWdELEdBQUcsMkJBQTJCOztBQUUzTSwwQ0FBMEMsK0RBQStELDJFQUEyRSxFQUFFLHlFQUF5RSxlQUFlLHNEQUFzRCxFQUFFLEVBQUUsdURBQXVEOztBQUUvWCxnQ0FBZ0MsNEVBQTRFLGlCQUFpQixVQUFVLEdBQUcsOEJBQThCOzs7QUFHeEs7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7O0FBRXpCO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsT0FBTyxFQUFFO0FBQ1Q7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQSxDQUFDOztBQUVELE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSwwR0FBMEcseUJBQXlCLEVBQUU7QUFDckksaURBQWlELDBDQUEwQywwREFBMEQsRUFBRTs7QUFFdkosMkNBQTJDLGdCQUFnQixrQkFBa0IsT0FBTywyQkFBMkIsd0RBQXdELGdDQUFnQyx1REFBdUQsMkRBQTJELEVBQUU7O0FBRTNULDZEQUE2RCxzRUFBc0UsOERBQThELG9CQUFvQjs7QUFFck47QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBOztBQUVBLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxvR0FBb0csbUJBQW1CLEVBQUU7QUFDekg7QUFDQSxpREFBaUQsMENBQTBDLDBEQUEwRCxFQUFFOztBQUV2SiwyQ0FBMkMsZ0JBQWdCLGtCQUFrQixPQUFPLDJCQUEyQix3REFBd0QsZ0NBQWdDLHVEQUF1RCwyREFBMkQsRUFBRTs7QUFFM1QsNkRBQTZELHNFQUFzRSw4REFBOEQsb0JBQW9COzs7QUFHck47QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EscUJBQXFCLGtDQUFrQztBQUN2RDtBQUNBOztBQUVBOztBQUVBO0FBQ0Esd0JBQXdCLHVCQUF1QjtBQUMvQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQSxDQUFDOztBQUVELE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxnR0FBZ0csZUFBZSxFQUFFO0FBQ2pIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBaUQsMENBQTBDLDBEQUEwRCxFQUFFOztBQUV2SiwyQ0FBMkMsZ0JBQWdCLGtCQUFrQixPQUFPLDJCQUEyQix3REFBd0QsZ0NBQWdDLHVEQUF1RCwyREFBMkQsRUFBRTs7QUFFM1QsNkRBQTZELHNFQUFzRSw4REFBOEQsb0JBQW9COzs7Ozs7QUFNck47QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnREFBZ0Q7QUFDaEQ7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLE9BQU87QUFDUDtBQUNBLE9BQU87QUFDUDtBQUNBLEdBQUc7O0FBRUg7QUFDQSxDQUFDO0FBQ0Q7O0FBRUEsT0FBTzs7QUFFUCxVQUFVO0FBQ1YsMkNBQTJDLGNBQWMsbW4xRzs7Ozs7Ozs7Ozs7O0FDenBGekQ7QUFBQTtBQUFBO0FBQWdEOztBQUV6QyxzQkFBc0IsNkRBQVU7QUFDdkM7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEM7Ozs7Ozs7Ozs7OztBQ3RCQTtBQUFBO0FBQUE7QUFBZ0Q7O0FBRXpDLDhCQUE4Qiw2REFBVTtBQUMvQztBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0EsQzs7Ozs7Ozs7Ozs7O0FDN0JBO0FBQUE7QUFBQTtBQUFnRDs7QUFFekMsNkJBQTZCLDZEQUFVO0FBQzlDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0EsQzs7Ozs7Ozs7Ozs7O0FDNUJBO0FBQUE7QUFBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEM7Ozs7Ozs7Ozs7OztBQ3hEQTtBQUFBO0FBQUE7QUFBcUQ7O0FBRTlDO0FBQ1A7QUFDQSw2QkFBNkIsbUVBQWdCO0FBQzdDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsdUJBQXVCLGtDQUFrQztBQUN6RDtBQUNBOztBQUVBO0FBQ0E7QUFDQSwyQkFBMkIsc0JBQXNCO0FBQ2pEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQzs7Ozs7Ozs7Ozs7O0FDekRBO0FBQUE7QUFBQTtBQUVBQSxNQUFNLENBQUNDLElBQVAsR0FBYyxJQUFJQSwwQ0FBSixDQUFTLHNCQUFULEVBQWlDO0FBQzNDQyxNQUFJLEVBQUUseUJBRHFDO0FBRTNDQyxNQUFJLEVBQUU7QUFDRkMsVUFBTSxFQUFFLE1BRE47QUFFRkMsT0FBRyxFQUFFLG1DQUZIO0FBR0ZDLFdBQU8sRUFBRTtBQUNMLGdCQUFVLGtCQURMO0FBRUwsdUJBQWlCO0FBRlosS0FIUDtBQU9GQyxVQUFNLEVBQUU7QUFQTjtBQUZxQyxDQUFqQyxDQUFkO0FBYUE7Ozs7O0FBT0E7Ozs7OztBQU1BUCxNQUFNLENBQUNDLElBQVAsQ0FBWU8sSUFBWixXQUNLQyxJQURMLENBQ1UsVUFBQ0MsS0FBRCxFQUFXO0FBQ2JDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZLE1BQVo7QUFDQUQsU0FBTyxDQUFDQyxHQUFSLENBQVlGLEtBQVo7QUFDSCxDQUpMLEVBS0tHLE9BTEwsQ0FLYSxVQUFDQyxJQUFELEVBQVU7QUFDZkgsU0FBTyxDQUFDQyxHQUFSLENBQVksTUFBWjtBQUNBRCxTQUFPLENBQUNDLEdBQVIsQ0FBWUUsSUFBWjtBQUNILENBUkwsRUFTS0MsT0FUTCxDQVNhLFVBQUNELElBQUQsRUFBVTtBQUNmSCxTQUFPLENBQUNDLEdBQVIsQ0FBWSxNQUFaO0FBQ0FELFNBQU8sQ0FBQ0MsR0FBUixDQUFZRSxJQUFaO0FBQ0gsQ0FaTCxFQVlPRSxNQVpQLENBWWMsWUFaZCxFQVk0QixVQUFDQyxDQUFELEVBQU87QUFDL0JOLFNBQU8sQ0FBQ0MsR0FBUixDQUFZSyxDQUFaO0FBQ0gsQ0FkRCxFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzVCTyxJQUFNQyxPQUFiO0FBQUE7QUFBQTtBQUNJLG1CQUFZQyxNQUFaLEVBQW9CQyxJQUFwQixFQUEwQjtBQUFBOztBQUN0QixTQUFLRCxNQUFMLEdBQWNBLE1BQWQ7QUFDQSxTQUFLQyxJQUFMLEdBQVlBLElBQVo7QUFFQSxTQUFLQyxTQUFMO0FBQ0g7O0FBTkw7QUFBQTtBQUFBLGdDQVFnQjtBQUNSLFdBQUtDLFlBQUwsR0FBb0IsS0FBS0gsTUFBTCxDQUFZRSxTQUFaLENBQXNCLEtBQUtELElBQTNCLENBQXBCO0FBQ0g7QUFWTDtBQUFBO0FBQUEsa0NBWWtCO0FBQ1YsV0FBS0QsTUFBTCxDQUFZSSxXQUFaLENBQXdCLEtBQUtILElBQTdCO0FBQ0g7QUFkTDtBQUFBO0FBQUEsMkJBZ0JXSSxLQWhCWCxFQWdCa0JDLFFBaEJsQixFQWdCNEI7QUFDcEIsV0FBS0MsRUFBTCxDQUFRRixLQUFSLEVBQWVDLFFBQWY7QUFFQSxhQUFPLElBQVA7QUFDSDtBQXBCTDtBQUFBO0FBQUEsa0NBc0JrQkQsS0F0QmxCLEVBc0J5QjtBQUNqQixXQUFLRixZQUFMLENBQWtCSyxNQUFsQixDQUF5QkgsS0FBekI7QUFFQSxhQUFPLElBQVA7QUFDSDtBQTFCTDtBQUFBO0FBQUEsdUJBNEJPQSxLQTVCUCxFQTRCY0MsUUE1QmQsRUE0QndCO0FBQ2hCLFdBQUtILFlBQUwsQ0FBa0JNLElBQWxCLENBQXVCSixLQUF2QixFQUE4QkMsUUFBOUI7QUFFQSxhQUFPLElBQVA7QUFDSDtBQWhDTDtBQUFBO0FBQUEsNEJBa0NZRCxLQWxDWixFQWtDbUJLLElBbENuQixFQWtDeUI7QUFDakIsV0FBS1YsTUFBTCxDQUFZVyxJQUFaLENBQWlCO0FBQ2JDLGVBQU8sRUFBRSxLQUFLWCxJQUREO0FBRWJTLFlBQUksRUFBRUEsSUFGTztBQUdiTCxhQUFLLEVBQUUsWUFBWUE7QUFITixPQUFqQjtBQUtIO0FBeENMO0FBQUE7QUFBQSxxQ0EwQ3FCQSxLQTFDckIsRUEwQzRCQyxRQTFDNUIsRUEwQ3NDO0FBQzlCLFdBQUtDLEVBQUwsQ0FBUSxZQUFZRixLQUFwQixFQUEyQkMsUUFBM0I7QUFDSDtBQTVDTDs7QUFBQTtBQUFBLEk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7QUFFTyxJQUFNTyxhQUFiO0FBQUE7QUFBQTtBQUFBOztBQUVJOzs7O0FBSUEseUJBQVliLE1BQVosRUFBb0JDLElBQXBCLEVBQTBCO0FBQUE7O0FBQUEsc0ZBQ2hCRCxNQURnQixFQUNSQyxJQURRO0FBRXpCOztBQVJMO0FBQUEsRUFBbUNGLGdEQUFuQyxFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGQTtBQUVPLElBQU1lLHFCQUFiO0FBQUE7QUFBQTtBQUFBOztBQUVJOzs7O0FBSUEsaUNBQVlkLE1BQVosRUFBb0JDLElBQXBCLEVBQTBCO0FBQUE7O0FBQUEsOEZBQ2hCRCxNQURnQixFQUNSQyxJQURRO0FBRXpCOztBQVJMO0FBQUE7QUFBQSx5QkFVU0ssUUFWVCxFQVVtQjtBQUNYLFVBQUlTLElBQUksR0FBRyxTQUFQQSxJQUFPLENBQUNqQixDQUFELEVBQU87QUFDZFEsZ0JBQVEsQ0FBQ1IsQ0FBQyxDQUFDa0IsUUFBSCxDQUFSO0FBQ0gsT0FGRDs7QUFHQSxXQUFLVCxFQUFMLENBQVEsd0JBQVIsRUFBa0NRLElBQWxDO0FBQ0EsYUFBTyxJQUFQO0FBQ0g7QUFoQkw7QUFBQTtBQUFBLDRCQWtCWVQsUUFsQlosRUFrQnNCO0FBQ2QsV0FBS0MsRUFBTCxDQUFRLGNBQVIsRUFBd0JELFFBQXhCO0FBQ0EsYUFBTyxJQUFQO0FBQ0g7QUFyQkw7QUFBQTtBQUFBLDRCQXVCWUEsUUF2QlosRUF1QnNCO0FBQ2QsV0FBS0MsRUFBTCxDQUFRLGdCQUFSLEVBQTBCRCxRQUExQjtBQUNBLGFBQU8sSUFBUDtBQUNIO0FBMUJMOztBQUFBO0FBQUEsRUFBMkNQLGdEQUEzQyxFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0ZBO0FBRU8sSUFBTWtCLG9CQUFiO0FBQUE7QUFBQTtBQUFBOztBQUVJOzs7O0FBSUEsZ0NBQVlqQixNQUFaLEVBQW9CQyxJQUFwQixFQUEwQjtBQUFBOztBQUFBLDZGQUNoQkQsTUFEZ0IsRUFDUkMsSUFEUTtBQUV6Qjs7QUFSTDtBQUFBLEVBQTBDRixnREFBMUMsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0ZBO0FBQ0E7QUFDQTtBQUNBO0FBRU8sSUFBTW1CLGVBQWI7QUFBQTtBQUFBO0FBQ0ksMkJBQVlDLE9BQVosRUFBcUJDLE9BQXJCLEVBQThCO0FBQUE7O0FBQzFCLFNBQUtwQixNQUFMLEdBQWMsSUFBSXFCLE1BQUosQ0FBV0YsT0FBWCxFQUFvQkMsT0FBcEIsQ0FBZDtBQUNBLFNBQUtFLFFBQUwsR0FBZ0IsRUFBaEI7QUFDSDs7QUFKTDtBQUFBO0FBQUEsNEJBTVlWLFFBTlosRUFNcUI7QUFDYixVQUFJLEtBQUtVLFFBQUwsQ0FBY1YsUUFBZCxNQUEyQlcsU0FBL0IsRUFBMEM7QUFDdEMsYUFBS0QsUUFBTCxDQUFjVixRQUFkLElBQXlCLElBQUlDLHFFQUFKLENBQWtCLEtBQUtiLE1BQXZCLEVBQStCWSxRQUEvQixDQUF6QjtBQUNIOztBQUVELGFBQU8sS0FBS1UsUUFBTCxDQUFjVixRQUFkLENBQVA7QUFDSDtBQVpMO0FBQUE7QUFBQSxtQ0FjbUJBLE9BZG5CLEVBYzRCO0FBQ3BCLFVBQUksS0FBS1UsUUFBTCxDQUFjLGFBQWFWLE9BQTNCLE1BQXdDVyxTQUE1QyxFQUF1RDtBQUNuRCxhQUFLRCxRQUFMLENBQWMsYUFBYVYsT0FBM0IsSUFBc0MsSUFBSUssb0ZBQUosQ0FBeUIsS0FBS2pCLE1BQTlCLEVBQXNDLGFBQWFZLE9BQW5ELENBQXRDO0FBQ0g7O0FBQ0QsYUFBTyxLQUFLVSxRQUFMLENBQWMsYUFBYVYsT0FBM0IsQ0FBUDtBQUNIO0FBbkJMO0FBQUE7QUFBQSxvQ0FxQm9CQSxPQXJCcEIsRUFxQjZCO0FBQ3JCLFVBQUksS0FBS1UsUUFBTCxDQUFjLGNBQWNWLE9BQTVCLE1BQXlDVyxTQUE3QyxFQUF3RDtBQUNwRCxhQUFLRCxRQUFMLENBQWMsY0FBY1YsT0FBNUIsSUFBdUMsSUFBSUUsc0ZBQUosQ0FBMEIsS0FBS2QsTUFBL0IsRUFBdUMsY0FBY1ksT0FBckQsQ0FBdkM7QUFDSDs7QUFDRCxhQUFPLEtBQUtVLFFBQUwsQ0FBYyxjQUFjVixPQUE1QixDQUFQO0FBQ0g7QUExQkw7O0FBQUE7QUFBQSxJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNMQTtBQUNBO0FBQ0E7QUFDQTtBQUVPLElBQU05QixJQUFiO0FBQUE7QUFBQTtBQUNJLGdCQUFZMEMsTUFBWixFQUFvQkosT0FBcEIsRUFBNkI7QUFBQTs7QUFDekIsU0FBS0EsT0FBTCxHQUFlQSxPQUFmO0FBQ0EsU0FBS0ssU0FBTCxHQUFpQixJQUFJUCwyRUFBSixDQUFvQk0sTUFBcEIsRUFBNEIsS0FBS0osT0FBakMsQ0FBakI7QUFDSDs7QUFKTDtBQUFBO0FBQUEsNEJBTVlSLFFBTlosRUFNcUI7QUFDYixhQUFPLEtBQUthLFNBQUwsQ0FBZWIsT0FBZixDQUF1QkEsUUFBdkIsQ0FBUDtBQUNIO0FBUkw7QUFBQTtBQUFBLDZCQVVZQSxPQVZaLEVBVXFCO0FBQ2IsYUFBTyxLQUFLYSxTQUFMLENBQWVDLGNBQWYsQ0FBOEJkLE9BQTlCLENBQVA7QUFDSDtBQVpMO0FBQUE7QUFBQSx5QkFjU0EsT0FkVCxFQWNrQjtBQUNWLGFBQU8sS0FBS2EsU0FBTCxDQUFlRSxlQUFmLENBQStCZixPQUEvQixDQUFQO0FBQ0g7QUFoQkw7QUFBQTtBQUFBLDhCQWtCY1gsSUFsQmQsRUFrQm9CO0FBQ1osVUFBSUEsSUFBSSxDQUFDMkIsT0FBTCxDQUFhLFVBQWIsTUFBNkIsQ0FBakMsRUFBb0M7QUFDaEMsZUFBTyxLQUFLQyxPQUFMLENBQWE1QixJQUFiLENBQVA7QUFDSCxPQUZELE1BRU8sSUFBSUEsSUFBSSxDQUFDMkIsT0FBTCxDQUFhLFdBQWIsTUFBOEIsQ0FBbEMsRUFBcUM7QUFDeEMsZUFBTyxLQUFLdkMsSUFBTCxDQUFVWSxJQUFWLENBQVA7QUFDSCxPQUZNLE1BRUE7QUFDSCxlQUFPLEtBQUtXLE9BQUwsQ0FBYVgsSUFBYixDQUFQO0FBQ0g7QUFDSjtBQUVEOzs7OztBQTVCSjtBQUFBO0FBQUEsMEJBZ0NVVyxPQWhDVixFQWdDbUIsQ0FFZDtBQWxDTDs7QUFBQTtBQUFBO0FBcUNBL0IsTUFBTSxDQUFDQyxJQUFQLEdBQWNBLElBQWQsQyIsImZpbGUiOiJhcHBfYV91c2VyXzEuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9hcHBfYV91c2VyXzEuanNcIik7XG4iLCIvKioqKioqLyAoZnVuY3Rpb24obW9kdWxlcykgeyAvLyB3ZWJwYWNrQm9vdHN0cmFwXG4vKioqKioqLyBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbi8qKioqKiovIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4vKioqKioqLyBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4vKioqKioqLyBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbi8qKioqKiovIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuLyoqKioqKi8gXHRcdH1cbi8qKioqKiovIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuLyoqKioqKi8gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbi8qKioqKiovIFx0XHRcdGk6IG1vZHVsZUlkLFxuLyoqKioqKi8gXHRcdFx0bDogZmFsc2UsXG4vKioqKioqLyBcdFx0XHRleHBvcnRzOiB7fVxuLyoqKioqKi8gXHRcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuLyoqKioqKi8gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4vKioqKioqLyBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuLyoqKioqKi8gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbi8qKioqKiovIFx0fVxuLyoqKioqKi9cbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuLyoqKioqKi8gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbi8qKioqKiovIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuLyoqKioqKi8gXHRcdH1cbi8qKioqKiovIFx0fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuLyoqKioqKi8gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuLyoqKioqKi8gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4vKioqKioqLyBcdFx0fVxuLyoqKioqKi8gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4vKioqKioqLyBcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3Rcbi8qKioqKiovIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4vKioqKioqLyBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuLyoqKioqKi8gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3Rcbi8qKioqKiovIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuLyoqKioqKi8gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuLyoqKioqKi8gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4vKioqKioqLyBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbi8qKioqKiovIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuLyoqKioqKi8gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4vKioqKioqLyBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuLyoqKioqKi8gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbi8qKioqKiovIFx0XHRyZXR1cm4gbnM7XG4vKioqKioqLyBcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbi8qKioqKiovIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbi8qKioqKiovIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4vKioqKioqLyBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuLyoqKioqKi8gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbi8qKioqKiovIFx0XHRyZXR1cm4gZ2V0dGVyO1xuLyoqKioqKi8gXHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG4vKioqKioqL1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vKioqKioqLyBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvcHVzaGVyLmpzXCIpO1xuLyoqKioqKi8gfSlcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqLyAoe1xuXG4vKioqLyBcIi4vbm9kZV9tb2R1bGVzL2F4aW9zL2luZGV4LmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vbm9kZV9tb2R1bGVzL2F4aW9zL2luZGV4LmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cbm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9saWIvYXhpb3MgKi8gXCIuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvYXhpb3MuanNcIik7XG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9hZGFwdGVycy94aHIuanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvYWRhcHRlcnMveGhyLmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cblxudmFyIHV0aWxzID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi8uLi91dGlscyAqLyBcIi4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi91dGlscy5qc1wiKTtcbnZhciBzZXR0bGUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuLy4uL2NvcmUvc2V0dGxlICovIFwiLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvc2V0dGxlLmpzXCIpO1xudmFyIGJ1aWxkVVJMID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi8uLi9oZWxwZXJzL2J1aWxkVVJMICovIFwiLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvYnVpbGRVUkwuanNcIik7XG52YXIgcGFyc2VIZWFkZXJzID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi8uLi9oZWxwZXJzL3BhcnNlSGVhZGVycyAqLyBcIi4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL3BhcnNlSGVhZGVycy5qc1wiKTtcbnZhciBpc1VSTFNhbWVPcmlnaW4gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuLy4uL2hlbHBlcnMvaXNVUkxTYW1lT3JpZ2luICovIFwiLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvaXNVUkxTYW1lT3JpZ2luLmpzXCIpO1xudmFyIGNyZWF0ZUVycm9yID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi4vY29yZS9jcmVhdGVFcnJvciAqLyBcIi4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL2NyZWF0ZUVycm9yLmpzXCIpO1xudmFyIGJ0b2EgPSAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93LmJ0b2EgJiYgd2luZG93LmJ0b2EuYmluZCh3aW5kb3cpKSB8fCBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuLy4uL2hlbHBlcnMvYnRvYSAqLyBcIi4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2J0b2EuanNcIik7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24geGhyQWRhcHRlcihjb25maWcpIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIGRpc3BhdGNoWGhyUmVxdWVzdChyZXNvbHZlLCByZWplY3QpIHtcbiAgICB2YXIgcmVxdWVzdERhdGEgPSBjb25maWcuZGF0YTtcbiAgICB2YXIgcmVxdWVzdEhlYWRlcnMgPSBjb25maWcuaGVhZGVycztcblxuICAgIGlmICh1dGlscy5pc0Zvcm1EYXRhKHJlcXVlc3REYXRhKSkge1xuICAgICAgZGVsZXRlIHJlcXVlc3RIZWFkZXJzWydDb250ZW50LVR5cGUnXTsgLy8gTGV0IHRoZSBicm93c2VyIHNldCBpdFxuICAgIH1cblxuICAgIHZhciByZXF1ZXN0ID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgdmFyIGxvYWRFdmVudCA9ICdvbnJlYWR5c3RhdGVjaGFuZ2UnO1xuICAgIHZhciB4RG9tYWluID0gZmFsc2U7XG5cbiAgICAvLyBGb3IgSUUgOC85IENPUlMgc3VwcG9ydFxuICAgIC8vIE9ubHkgc3VwcG9ydHMgUE9TVCBhbmQgR0VUIGNhbGxzIGFuZCBkb2Vzbid0IHJldHVybnMgdGhlIHJlc3BvbnNlIGhlYWRlcnMuXG4gICAgLy8gRE9OJ1QgZG8gdGhpcyBmb3IgdGVzdGluZyBiL2MgWE1MSHR0cFJlcXVlc3QgaXMgbW9ja2VkLCBub3QgWERvbWFpblJlcXVlc3QuXG4gICAgaWYgKFwiZGV2ZWxvcG1lbnRcIiAhPT0gJ3Rlc3QnICYmXG4gICAgICAgIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmXG4gICAgICAgIHdpbmRvdy5YRG9tYWluUmVxdWVzdCAmJiAhKCd3aXRoQ3JlZGVudGlhbHMnIGluIHJlcXVlc3QpICYmXG4gICAgICAgICFpc1VSTFNhbWVPcmlnaW4oY29uZmlnLnVybCkpIHtcbiAgICAgIHJlcXVlc3QgPSBuZXcgd2luZG93LlhEb21haW5SZXF1ZXN0KCk7XG4gICAgICBsb2FkRXZlbnQgPSAnb25sb2FkJztcbiAgICAgIHhEb21haW4gPSB0cnVlO1xuICAgICAgcmVxdWVzdC5vbnByb2dyZXNzID0gZnVuY3Rpb24gaGFuZGxlUHJvZ3Jlc3MoKSB7fTtcbiAgICAgIHJlcXVlc3Qub250aW1lb3V0ID0gZnVuY3Rpb24gaGFuZGxlVGltZW91dCgpIHt9O1xuICAgIH1cblxuICAgIC8vIEhUVFAgYmFzaWMgYXV0aGVudGljYXRpb25cbiAgICBpZiAoY29uZmlnLmF1dGgpIHtcbiAgICAgIHZhciB1c2VybmFtZSA9IGNvbmZpZy5hdXRoLnVzZXJuYW1lIHx8ICcnO1xuICAgICAgdmFyIHBhc3N3b3JkID0gY29uZmlnLmF1dGgucGFzc3dvcmQgfHwgJyc7XG4gICAgICByZXF1ZXN0SGVhZGVycy5BdXRob3JpemF0aW9uID0gJ0Jhc2ljICcgKyBidG9hKHVzZXJuYW1lICsgJzonICsgcGFzc3dvcmQpO1xuICAgIH1cblxuICAgIHJlcXVlc3Qub3Blbihjb25maWcubWV0aG9kLnRvVXBwZXJDYXNlKCksIGJ1aWxkVVJMKGNvbmZpZy51cmwsIGNvbmZpZy5wYXJhbXMsIGNvbmZpZy5wYXJhbXNTZXJpYWxpemVyKSwgdHJ1ZSk7XG5cbiAgICAvLyBTZXQgdGhlIHJlcXVlc3QgdGltZW91dCBpbiBNU1xuICAgIHJlcXVlc3QudGltZW91dCA9IGNvbmZpZy50aW1lb3V0O1xuXG4gICAgLy8gTGlzdGVuIGZvciByZWFkeSBzdGF0ZVxuICAgIHJlcXVlc3RbbG9hZEV2ZW50XSA9IGZ1bmN0aW9uIGhhbmRsZUxvYWQoKSB7XG4gICAgICBpZiAoIXJlcXVlc3QgfHwgKHJlcXVlc3QucmVhZHlTdGF0ZSAhPT0gNCAmJiAheERvbWFpbikpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICAvLyBUaGUgcmVxdWVzdCBlcnJvcmVkIG91dCBhbmQgd2UgZGlkbid0IGdldCBhIHJlc3BvbnNlLCB0aGlzIHdpbGwgYmVcbiAgICAgIC8vIGhhbmRsZWQgYnkgb25lcnJvciBpbnN0ZWFkXG4gICAgICAvLyBXaXRoIG9uZSBleGNlcHRpb246IHJlcXVlc3QgdGhhdCB1c2luZyBmaWxlOiBwcm90b2NvbCwgbW9zdCBicm93c2Vyc1xuICAgICAgLy8gd2lsbCByZXR1cm4gc3RhdHVzIGFzIDAgZXZlbiB0aG91Z2ggaXQncyBhIHN1Y2Nlc3NmdWwgcmVxdWVzdFxuICAgICAgaWYgKHJlcXVlc3Quc3RhdHVzID09PSAwICYmICEocmVxdWVzdC5yZXNwb25zZVVSTCAmJiByZXF1ZXN0LnJlc3BvbnNlVVJMLmluZGV4T2YoJ2ZpbGU6JykgPT09IDApKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgLy8gUHJlcGFyZSB0aGUgcmVzcG9uc2VcbiAgICAgIHZhciByZXNwb25zZUhlYWRlcnMgPSAnZ2V0QWxsUmVzcG9uc2VIZWFkZXJzJyBpbiByZXF1ZXN0ID8gcGFyc2VIZWFkZXJzKHJlcXVlc3QuZ2V0QWxsUmVzcG9uc2VIZWFkZXJzKCkpIDogbnVsbDtcbiAgICAgIHZhciByZXNwb25zZURhdGEgPSAhY29uZmlnLnJlc3BvbnNlVHlwZSB8fCBjb25maWcucmVzcG9uc2VUeXBlID09PSAndGV4dCcgPyByZXF1ZXN0LnJlc3BvbnNlVGV4dCA6IHJlcXVlc3QucmVzcG9uc2U7XG4gICAgICB2YXIgcmVzcG9uc2UgPSB7XG4gICAgICAgIGRhdGE6IHJlc3BvbnNlRGF0YSxcbiAgICAgICAgLy8gSUUgc2VuZHMgMTIyMyBpbnN0ZWFkIG9mIDIwNCAoaHR0cHM6Ly9naXRodWIuY29tL2F4aW9zL2F4aW9zL2lzc3Vlcy8yMDEpXG4gICAgICAgIHN0YXR1czogcmVxdWVzdC5zdGF0dXMgPT09IDEyMjMgPyAyMDQgOiByZXF1ZXN0LnN0YXR1cyxcbiAgICAgICAgc3RhdHVzVGV4dDogcmVxdWVzdC5zdGF0dXMgPT09IDEyMjMgPyAnTm8gQ29udGVudCcgOiByZXF1ZXN0LnN0YXR1c1RleHQsXG4gICAgICAgIGhlYWRlcnM6IHJlc3BvbnNlSGVhZGVycyxcbiAgICAgICAgY29uZmlnOiBjb25maWcsXG4gICAgICAgIHJlcXVlc3Q6IHJlcXVlc3RcbiAgICAgIH07XG5cbiAgICAgIHNldHRsZShyZXNvbHZlLCByZWplY3QsIHJlc3BvbnNlKTtcblxuICAgICAgLy8gQ2xlYW4gdXAgcmVxdWVzdFxuICAgICAgcmVxdWVzdCA9IG51bGw7XG4gICAgfTtcblxuICAgIC8vIEhhbmRsZSBsb3cgbGV2ZWwgbmV0d29yayBlcnJvcnNcbiAgICByZXF1ZXN0Lm9uZXJyb3IgPSBmdW5jdGlvbiBoYW5kbGVFcnJvcigpIHtcbiAgICAgIC8vIFJlYWwgZXJyb3JzIGFyZSBoaWRkZW4gZnJvbSB1cyBieSB0aGUgYnJvd3NlclxuICAgICAgLy8gb25lcnJvciBzaG91bGQgb25seSBmaXJlIGlmIGl0J3MgYSBuZXR3b3JrIGVycm9yXG4gICAgICByZWplY3QoY3JlYXRlRXJyb3IoJ05ldHdvcmsgRXJyb3InLCBjb25maWcsIG51bGwsIHJlcXVlc3QpKTtcblxuICAgICAgLy8gQ2xlYW4gdXAgcmVxdWVzdFxuICAgICAgcmVxdWVzdCA9IG51bGw7XG4gICAgfTtcblxuICAgIC8vIEhhbmRsZSB0aW1lb3V0XG4gICAgcmVxdWVzdC5vbnRpbWVvdXQgPSBmdW5jdGlvbiBoYW5kbGVUaW1lb3V0KCkge1xuICAgICAgcmVqZWN0KGNyZWF0ZUVycm9yKCd0aW1lb3V0IG9mICcgKyBjb25maWcudGltZW91dCArICdtcyBleGNlZWRlZCcsIGNvbmZpZywgJ0VDT05OQUJPUlRFRCcsXG4gICAgICAgIHJlcXVlc3QpKTtcblxuICAgICAgLy8gQ2xlYW4gdXAgcmVxdWVzdFxuICAgICAgcmVxdWVzdCA9IG51bGw7XG4gICAgfTtcblxuICAgIC8vIEFkZCB4c3JmIGhlYWRlclxuICAgIC8vIFRoaXMgaXMgb25seSBkb25lIGlmIHJ1bm5pbmcgaW4gYSBzdGFuZGFyZCBicm93c2VyIGVudmlyb25tZW50LlxuICAgIC8vIFNwZWNpZmljYWxseSBub3QgaWYgd2UncmUgaW4gYSB3ZWIgd29ya2VyLCBvciByZWFjdC1uYXRpdmUuXG4gICAgaWYgKHV0aWxzLmlzU3RhbmRhcmRCcm93c2VyRW52KCkpIHtcbiAgICAgIHZhciBjb29raWVzID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi8uLi9oZWxwZXJzL2Nvb2tpZXMgKi8gXCIuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9jb29raWVzLmpzXCIpO1xuXG4gICAgICAvLyBBZGQgeHNyZiBoZWFkZXJcbiAgICAgIHZhciB4c3JmVmFsdWUgPSAoY29uZmlnLndpdGhDcmVkZW50aWFscyB8fCBpc1VSTFNhbWVPcmlnaW4oY29uZmlnLnVybCkpICYmIGNvbmZpZy54c3JmQ29va2llTmFtZSA/XG4gICAgICAgICAgY29va2llcy5yZWFkKGNvbmZpZy54c3JmQ29va2llTmFtZSkgOlxuICAgICAgICAgIHVuZGVmaW5lZDtcblxuICAgICAgaWYgKHhzcmZWYWx1ZSkge1xuICAgICAgICByZXF1ZXN0SGVhZGVyc1tjb25maWcueHNyZkhlYWRlck5hbWVdID0geHNyZlZhbHVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIEFkZCBoZWFkZXJzIHRvIHRoZSByZXF1ZXN0XG4gICAgaWYgKCdzZXRSZXF1ZXN0SGVhZGVyJyBpbiByZXF1ZXN0KSB7XG4gICAgICB1dGlscy5mb3JFYWNoKHJlcXVlc3RIZWFkZXJzLCBmdW5jdGlvbiBzZXRSZXF1ZXN0SGVhZGVyKHZhbCwga2V5KSB7XG4gICAgICAgIGlmICh0eXBlb2YgcmVxdWVzdERhdGEgPT09ICd1bmRlZmluZWQnICYmIGtleS50b0xvd2VyQ2FzZSgpID09PSAnY29udGVudC10eXBlJykge1xuICAgICAgICAgIC8vIFJlbW92ZSBDb250ZW50LVR5cGUgaWYgZGF0YSBpcyB1bmRlZmluZWRcbiAgICAgICAgICBkZWxldGUgcmVxdWVzdEhlYWRlcnNba2V5XTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBPdGhlcndpc2UgYWRkIGhlYWRlciB0byB0aGUgcmVxdWVzdFxuICAgICAgICAgIHJlcXVlc3Quc2V0UmVxdWVzdEhlYWRlcihrZXksIHZhbCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIEFkZCB3aXRoQ3JlZGVudGlhbHMgdG8gcmVxdWVzdCBpZiBuZWVkZWRcbiAgICBpZiAoY29uZmlnLndpdGhDcmVkZW50aWFscykge1xuICAgICAgcmVxdWVzdC53aXRoQ3JlZGVudGlhbHMgPSB0cnVlO1xuICAgIH1cblxuICAgIC8vIEFkZCByZXNwb25zZVR5cGUgdG8gcmVxdWVzdCBpZiBuZWVkZWRcbiAgICBpZiAoY29uZmlnLnJlc3BvbnNlVHlwZSkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgcmVxdWVzdC5yZXNwb25zZVR5cGUgPSBjb25maWcucmVzcG9uc2VUeXBlO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBFeHBlY3RlZCBET01FeGNlcHRpb24gdGhyb3duIGJ5IGJyb3dzZXJzIG5vdCBjb21wYXRpYmxlIFhNTEh0dHBSZXF1ZXN0IExldmVsIDIuXG4gICAgICAgIC8vIEJ1dCwgdGhpcyBjYW4gYmUgc3VwcHJlc3NlZCBmb3IgJ2pzb24nIHR5cGUgYXMgaXQgY2FuIGJlIHBhcnNlZCBieSBkZWZhdWx0ICd0cmFuc2Zvcm1SZXNwb25zZScgZnVuY3Rpb24uXG4gICAgICAgIGlmIChjb25maWcucmVzcG9uc2VUeXBlICE9PSAnanNvbicpIHtcbiAgICAgICAgICB0aHJvdyBlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gSGFuZGxlIHByb2dyZXNzIGlmIG5lZWRlZFxuICAgIGlmICh0eXBlb2YgY29uZmlnLm9uRG93bmxvYWRQcm9ncmVzcyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcmVxdWVzdC5hZGRFdmVudExpc3RlbmVyKCdwcm9ncmVzcycsIGNvbmZpZy5vbkRvd25sb2FkUHJvZ3Jlc3MpO1xuICAgIH1cblxuICAgIC8vIE5vdCBhbGwgYnJvd3NlcnMgc3VwcG9ydCB1cGxvYWQgZXZlbnRzXG4gICAgaWYgKHR5cGVvZiBjb25maWcub25VcGxvYWRQcm9ncmVzcyA9PT0gJ2Z1bmN0aW9uJyAmJiByZXF1ZXN0LnVwbG9hZCkge1xuICAgICAgcmVxdWVzdC51cGxvYWQuYWRkRXZlbnRMaXN0ZW5lcigncHJvZ3Jlc3MnLCBjb25maWcub25VcGxvYWRQcm9ncmVzcyk7XG4gICAgfVxuXG4gICAgaWYgKGNvbmZpZy5jYW5jZWxUb2tlbikge1xuICAgICAgLy8gSGFuZGxlIGNhbmNlbGxhdGlvblxuICAgICAgY29uZmlnLmNhbmNlbFRva2VuLnByb21pc2UudGhlbihmdW5jdGlvbiBvbkNhbmNlbGVkKGNhbmNlbCkge1xuICAgICAgICBpZiAoIXJlcXVlc3QpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICByZXF1ZXN0LmFib3J0KCk7XG4gICAgICAgIHJlamVjdChjYW5jZWwpO1xuICAgICAgICAvLyBDbGVhbiB1cCByZXF1ZXN0XG4gICAgICAgIHJlcXVlc3QgPSBudWxsO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKHJlcXVlc3REYXRhID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJlcXVlc3REYXRhID0gbnVsbDtcbiAgICB9XG5cbiAgICAvLyBTZW5kIHRoZSByZXF1ZXN0XG4gICAgcmVxdWVzdC5zZW5kKHJlcXVlc3REYXRhKTtcbiAgfSk7XG59O1xuXG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9heGlvcy5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2F4aW9zLmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG52YXIgdXRpbHMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL3V0aWxzICovIFwiLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL3V0aWxzLmpzXCIpO1xudmFyIGJpbmQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL2hlbHBlcnMvYmluZCAqLyBcIi4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2JpbmQuanNcIik7XG52YXIgQXhpb3MgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL2NvcmUvQXhpb3MgKi8gXCIuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9BeGlvcy5qc1wiKTtcbnZhciBkZWZhdWx0cyA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vZGVmYXVsdHMgKi8gXCIuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvZGVmYXVsdHMuanNcIik7XG5cbi8qKlxuICogQ3JlYXRlIGFuIGluc3RhbmNlIG9mIEF4aW9zXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGRlZmF1bHRDb25maWcgVGhlIGRlZmF1bHQgY29uZmlnIGZvciB0aGUgaW5zdGFuY2VcbiAqIEByZXR1cm4ge0F4aW9zfSBBIG5ldyBpbnN0YW5jZSBvZiBBeGlvc1xuICovXG5mdW5jdGlvbiBjcmVhdGVJbnN0YW5jZShkZWZhdWx0Q29uZmlnKSB7XG4gIHZhciBjb250ZXh0ID0gbmV3IEF4aW9zKGRlZmF1bHRDb25maWcpO1xuICB2YXIgaW5zdGFuY2UgPSBiaW5kKEF4aW9zLnByb3RvdHlwZS5yZXF1ZXN0LCBjb250ZXh0KTtcblxuICAvLyBDb3B5IGF4aW9zLnByb3RvdHlwZSB0byBpbnN0YW5jZVxuICB1dGlscy5leHRlbmQoaW5zdGFuY2UsIEF4aW9zLnByb3RvdHlwZSwgY29udGV4dCk7XG5cbiAgLy8gQ29weSBjb250ZXh0IHRvIGluc3RhbmNlXG4gIHV0aWxzLmV4dGVuZChpbnN0YW5jZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIGluc3RhbmNlO1xufVxuXG4vLyBDcmVhdGUgdGhlIGRlZmF1bHQgaW5zdGFuY2UgdG8gYmUgZXhwb3J0ZWRcbnZhciBheGlvcyA9IGNyZWF0ZUluc3RhbmNlKGRlZmF1bHRzKTtcblxuLy8gRXhwb3NlIEF4aW9zIGNsYXNzIHRvIGFsbG93IGNsYXNzIGluaGVyaXRhbmNlXG5heGlvcy5BeGlvcyA9IEF4aW9zO1xuXG4vLyBGYWN0b3J5IGZvciBjcmVhdGluZyBuZXcgaW5zdGFuY2VzXG5heGlvcy5jcmVhdGUgPSBmdW5jdGlvbiBjcmVhdGUoaW5zdGFuY2VDb25maWcpIHtcbiAgcmV0dXJuIGNyZWF0ZUluc3RhbmNlKHV0aWxzLm1lcmdlKGRlZmF1bHRzLCBpbnN0YW5jZUNvbmZpZykpO1xufTtcblxuLy8gRXhwb3NlIENhbmNlbCAmIENhbmNlbFRva2VuXG5heGlvcy5DYW5jZWwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL2NhbmNlbC9DYW5jZWwgKi8gXCIuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY2FuY2VsL0NhbmNlbC5qc1wiKTtcbmF4aW9zLkNhbmNlbFRva2VuID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9jYW5jZWwvQ2FuY2VsVG9rZW4gKi8gXCIuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY2FuY2VsL0NhbmNlbFRva2VuLmpzXCIpO1xuYXhpb3MuaXNDYW5jZWwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL2NhbmNlbC9pc0NhbmNlbCAqLyBcIi4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jYW5jZWwvaXNDYW5jZWwuanNcIik7XG5cbi8vIEV4cG9zZSBhbGwvc3ByZWFkXG5heGlvcy5hbGwgPSBmdW5jdGlvbiBhbGwocHJvbWlzZXMpIHtcbiAgcmV0dXJuIFByb21pc2UuYWxsKHByb21pc2VzKTtcbn07XG5heGlvcy5zcHJlYWQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL2hlbHBlcnMvc3ByZWFkICovIFwiLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvc3ByZWFkLmpzXCIpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGF4aW9zO1xuXG4vLyBBbGxvdyB1c2Ugb2YgZGVmYXVsdCBpbXBvcnQgc3ludGF4IGluIFR5cGVTY3JpcHRcbm1vZHVsZS5leHBvcnRzLmRlZmF1bHQgPSBheGlvcztcblxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY2FuY2VsL0NhbmNlbC5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY2FuY2VsL0NhbmNlbC5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG4vKipcbiAqIEEgYENhbmNlbGAgaXMgYW4gb2JqZWN0IHRoYXQgaXMgdGhyb3duIHdoZW4gYW4gb3BlcmF0aW9uIGlzIGNhbmNlbGVkLlxuICpcbiAqIEBjbGFzc1xuICogQHBhcmFtIHtzdHJpbmc9fSBtZXNzYWdlIFRoZSBtZXNzYWdlLlxuICovXG5mdW5jdGlvbiBDYW5jZWwobWVzc2FnZSkge1xuICB0aGlzLm1lc3NhZ2UgPSBtZXNzYWdlO1xufVxuXG5DYW5jZWwucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gIHJldHVybiAnQ2FuY2VsJyArICh0aGlzLm1lc3NhZ2UgPyAnOiAnICsgdGhpcy5tZXNzYWdlIDogJycpO1xufTtcblxuQ2FuY2VsLnByb3RvdHlwZS5fX0NBTkNFTF9fID0gdHJ1ZTtcblxubW9kdWxlLmV4cG9ydHMgPSBDYW5jZWw7XG5cblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NhbmNlbC9DYW5jZWxUb2tlbi5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jYW5jZWwvQ2FuY2VsVG9rZW4uanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG52YXIgQ2FuY2VsID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9DYW5jZWwgKi8gXCIuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY2FuY2VsL0NhbmNlbC5qc1wiKTtcblxuLyoqXG4gKiBBIGBDYW5jZWxUb2tlbmAgaXMgYW4gb2JqZWN0IHRoYXQgY2FuIGJlIHVzZWQgdG8gcmVxdWVzdCBjYW5jZWxsYXRpb24gb2YgYW4gb3BlcmF0aW9uLlxuICpcbiAqIEBjbGFzc1xuICogQHBhcmFtIHtGdW5jdGlvbn0gZXhlY3V0b3IgVGhlIGV4ZWN1dG9yIGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiBDYW5jZWxUb2tlbihleGVjdXRvcikge1xuICBpZiAodHlwZW9mIGV4ZWN1dG9yICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignZXhlY3V0b3IgbXVzdCBiZSBhIGZ1bmN0aW9uLicpO1xuICB9XG5cbiAgdmFyIHJlc29sdmVQcm9taXNlO1xuICB0aGlzLnByb21pc2UgPSBuZXcgUHJvbWlzZShmdW5jdGlvbiBwcm9taXNlRXhlY3V0b3IocmVzb2x2ZSkge1xuICAgIHJlc29sdmVQcm9taXNlID0gcmVzb2x2ZTtcbiAgfSk7XG5cbiAgdmFyIHRva2VuID0gdGhpcztcbiAgZXhlY3V0b3IoZnVuY3Rpb24gY2FuY2VsKG1lc3NhZ2UpIHtcbiAgICBpZiAodG9rZW4ucmVhc29uKSB7XG4gICAgICAvLyBDYW5jZWxsYXRpb24gaGFzIGFscmVhZHkgYmVlbiByZXF1ZXN0ZWRcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0b2tlbi5yZWFzb24gPSBuZXcgQ2FuY2VsKG1lc3NhZ2UpO1xuICAgIHJlc29sdmVQcm9taXNlKHRva2VuLnJlYXNvbik7XG4gIH0pO1xufVxuXG4vKipcbiAqIFRocm93cyBhIGBDYW5jZWxgIGlmIGNhbmNlbGxhdGlvbiBoYXMgYmVlbiByZXF1ZXN0ZWQuXG4gKi9cbkNhbmNlbFRva2VuLnByb3RvdHlwZS50aHJvd0lmUmVxdWVzdGVkID0gZnVuY3Rpb24gdGhyb3dJZlJlcXVlc3RlZCgpIHtcbiAgaWYgKHRoaXMucmVhc29uKSB7XG4gICAgdGhyb3cgdGhpcy5yZWFzb247XG4gIH1cbn07XG5cbi8qKlxuICogUmV0dXJucyBhbiBvYmplY3QgdGhhdCBjb250YWlucyBhIG5ldyBgQ2FuY2VsVG9rZW5gIGFuZCBhIGZ1bmN0aW9uIHRoYXQsIHdoZW4gY2FsbGVkLFxuICogY2FuY2VscyB0aGUgYENhbmNlbFRva2VuYC5cbiAqL1xuQ2FuY2VsVG9rZW4uc291cmNlID0gZnVuY3Rpb24gc291cmNlKCkge1xuICB2YXIgY2FuY2VsO1xuICB2YXIgdG9rZW4gPSBuZXcgQ2FuY2VsVG9rZW4oZnVuY3Rpb24gZXhlY3V0b3IoYykge1xuICAgIGNhbmNlbCA9IGM7XG4gIH0pO1xuICByZXR1cm4ge1xuICAgIHRva2VuOiB0b2tlbixcbiAgICBjYW5jZWw6IGNhbmNlbFxuICB9O1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBDYW5jZWxUb2tlbjtcblxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY2FuY2VsL2lzQ2FuY2VsLmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NhbmNlbC9pc0NhbmNlbC5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaXNDYW5jZWwodmFsdWUpIHtcbiAgcmV0dXJuICEhKHZhbHVlICYmIHZhbHVlLl9fQ0FOQ0VMX18pO1xufTtcblxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9BeGlvcy5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9BeGlvcy5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG52YXIgZGVmYXVsdHMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuLy4uL2RlZmF1bHRzICovIFwiLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2RlZmF1bHRzLmpzXCIpO1xudmFyIHV0aWxzID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi8uLi91dGlscyAqLyBcIi4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi91dGlscy5qc1wiKTtcbnZhciBJbnRlcmNlcHRvck1hbmFnZXIgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL0ludGVyY2VwdG9yTWFuYWdlciAqLyBcIi4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL0ludGVyY2VwdG9yTWFuYWdlci5qc1wiKTtcbnZhciBkaXNwYXRjaFJlcXVlc3QgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL2Rpc3BhdGNoUmVxdWVzdCAqLyBcIi4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL2Rpc3BhdGNoUmVxdWVzdC5qc1wiKTtcblxuLyoqXG4gKiBDcmVhdGUgYSBuZXcgaW5zdGFuY2Ugb2YgQXhpb3NcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gaW5zdGFuY2VDb25maWcgVGhlIGRlZmF1bHQgY29uZmlnIGZvciB0aGUgaW5zdGFuY2VcbiAqL1xuZnVuY3Rpb24gQXhpb3MoaW5zdGFuY2VDb25maWcpIHtcbiAgdGhpcy5kZWZhdWx0cyA9IGluc3RhbmNlQ29uZmlnO1xuICB0aGlzLmludGVyY2VwdG9ycyA9IHtcbiAgICByZXF1ZXN0OiBuZXcgSW50ZXJjZXB0b3JNYW5hZ2VyKCksXG4gICAgcmVzcG9uc2U6IG5ldyBJbnRlcmNlcHRvck1hbmFnZXIoKVxuICB9O1xufVxuXG4vKipcbiAqIERpc3BhdGNoIGEgcmVxdWVzdFxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWcgVGhlIGNvbmZpZyBzcGVjaWZpYyBmb3IgdGhpcyByZXF1ZXN0IChtZXJnZWQgd2l0aCB0aGlzLmRlZmF1bHRzKVxuICovXG5BeGlvcy5wcm90b3R5cGUucmVxdWVzdCA9IGZ1bmN0aW9uIHJlcXVlc3QoY29uZmlnKSB7XG4gIC8qZXNsaW50IG5vLXBhcmFtLXJlYXNzaWduOjAqL1xuICAvLyBBbGxvdyBmb3IgYXhpb3MoJ2V4YW1wbGUvdXJsJ1ssIGNvbmZpZ10pIGEgbGEgZmV0Y2ggQVBJXG4gIGlmICh0eXBlb2YgY29uZmlnID09PSAnc3RyaW5nJykge1xuICAgIGNvbmZpZyA9IHV0aWxzLm1lcmdlKHtcbiAgICAgIHVybDogYXJndW1lbnRzWzBdXG4gICAgfSwgYXJndW1lbnRzWzFdKTtcbiAgfVxuXG4gIGNvbmZpZyA9IHV0aWxzLm1lcmdlKGRlZmF1bHRzLCB7bWV0aG9kOiAnZ2V0J30sIHRoaXMuZGVmYXVsdHMsIGNvbmZpZyk7XG4gIGNvbmZpZy5tZXRob2QgPSBjb25maWcubWV0aG9kLnRvTG93ZXJDYXNlKCk7XG5cbiAgLy8gSG9vayB1cCBpbnRlcmNlcHRvcnMgbWlkZGxld2FyZVxuICB2YXIgY2hhaW4gPSBbZGlzcGF0Y2hSZXF1ZXN0LCB1bmRlZmluZWRdO1xuICB2YXIgcHJvbWlzZSA9IFByb21pc2UucmVzb2x2ZShjb25maWcpO1xuXG4gIHRoaXMuaW50ZXJjZXB0b3JzLnJlcXVlc3QuZm9yRWFjaChmdW5jdGlvbiB1bnNoaWZ0UmVxdWVzdEludGVyY2VwdG9ycyhpbnRlcmNlcHRvcikge1xuICAgIGNoYWluLnVuc2hpZnQoaW50ZXJjZXB0b3IuZnVsZmlsbGVkLCBpbnRlcmNlcHRvci5yZWplY3RlZCk7XG4gIH0pO1xuXG4gIHRoaXMuaW50ZXJjZXB0b3JzLnJlc3BvbnNlLmZvckVhY2goZnVuY3Rpb24gcHVzaFJlc3BvbnNlSW50ZXJjZXB0b3JzKGludGVyY2VwdG9yKSB7XG4gICAgY2hhaW4ucHVzaChpbnRlcmNlcHRvci5mdWxmaWxsZWQsIGludGVyY2VwdG9yLnJlamVjdGVkKTtcbiAgfSk7XG5cbiAgd2hpbGUgKGNoYWluLmxlbmd0aCkge1xuICAgIHByb21pc2UgPSBwcm9taXNlLnRoZW4oY2hhaW4uc2hpZnQoKSwgY2hhaW4uc2hpZnQoKSk7XG4gIH1cblxuICByZXR1cm4gcHJvbWlzZTtcbn07XG5cbi8vIFByb3ZpZGUgYWxpYXNlcyBmb3Igc3VwcG9ydGVkIHJlcXVlc3QgbWV0aG9kc1xudXRpbHMuZm9yRWFjaChbJ2RlbGV0ZScsICdnZXQnLCAnaGVhZCcsICdvcHRpb25zJ10sIGZ1bmN0aW9uIGZvckVhY2hNZXRob2ROb0RhdGEobWV0aG9kKSB7XG4gIC8qZXNsaW50IGZ1bmMtbmFtZXM6MCovXG4gIEF4aW9zLnByb3RvdHlwZVttZXRob2RdID0gZnVuY3Rpb24odXJsLCBjb25maWcpIHtcbiAgICByZXR1cm4gdGhpcy5yZXF1ZXN0KHV0aWxzLm1lcmdlKGNvbmZpZyB8fCB7fSwge1xuICAgICAgbWV0aG9kOiBtZXRob2QsXG4gICAgICB1cmw6IHVybFxuICAgIH0pKTtcbiAgfTtcbn0pO1xuXG51dGlscy5mb3JFYWNoKFsncG9zdCcsICdwdXQnLCAncGF0Y2gnXSwgZnVuY3Rpb24gZm9yRWFjaE1ldGhvZFdpdGhEYXRhKG1ldGhvZCkge1xuICAvKmVzbGludCBmdW5jLW5hbWVzOjAqL1xuICBBeGlvcy5wcm90b3R5cGVbbWV0aG9kXSA9IGZ1bmN0aW9uKHVybCwgZGF0YSwgY29uZmlnKSB7XG4gICAgcmV0dXJuIHRoaXMucmVxdWVzdCh1dGlscy5tZXJnZShjb25maWcgfHwge30sIHtcbiAgICAgIG1ldGhvZDogbWV0aG9kLFxuICAgICAgdXJsOiB1cmwsXG4gICAgICBkYXRhOiBkYXRhXG4gICAgfSkpO1xuICB9O1xufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gQXhpb3M7XG5cblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvSW50ZXJjZXB0b3JNYW5hZ2VyLmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9JbnRlcmNlcHRvck1hbmFnZXIuanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5cbnZhciB1dGlscyA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vLi4vdXRpbHMgKi8gXCIuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvdXRpbHMuanNcIik7XG5cbmZ1bmN0aW9uIEludGVyY2VwdG9yTWFuYWdlcigpIHtcbiAgdGhpcy5oYW5kbGVycyA9IFtdO1xufVxuXG4vKipcbiAqIEFkZCBhIG5ldyBpbnRlcmNlcHRvciB0byB0aGUgc3RhY2tcbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdWxmaWxsZWQgVGhlIGZ1bmN0aW9uIHRvIGhhbmRsZSBgdGhlbmAgZm9yIGEgYFByb21pc2VgXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSByZWplY3RlZCBUaGUgZnVuY3Rpb24gdG8gaGFuZGxlIGByZWplY3RgIGZvciBhIGBQcm9taXNlYFxuICpcbiAqIEByZXR1cm4ge051bWJlcn0gQW4gSUQgdXNlZCB0byByZW1vdmUgaW50ZXJjZXB0b3IgbGF0ZXJcbiAqL1xuSW50ZXJjZXB0b3JNYW5hZ2VyLnByb3RvdHlwZS51c2UgPSBmdW5jdGlvbiB1c2UoZnVsZmlsbGVkLCByZWplY3RlZCkge1xuICB0aGlzLmhhbmRsZXJzLnB1c2goe1xuICAgIGZ1bGZpbGxlZDogZnVsZmlsbGVkLFxuICAgIHJlamVjdGVkOiByZWplY3RlZFxuICB9KTtcbiAgcmV0dXJuIHRoaXMuaGFuZGxlcnMubGVuZ3RoIC0gMTtcbn07XG5cbi8qKlxuICogUmVtb3ZlIGFuIGludGVyY2VwdG9yIGZyb20gdGhlIHN0YWNrXG4gKlxuICogQHBhcmFtIHtOdW1iZXJ9IGlkIFRoZSBJRCB0aGF0IHdhcyByZXR1cm5lZCBieSBgdXNlYFxuICovXG5JbnRlcmNlcHRvck1hbmFnZXIucHJvdG90eXBlLmVqZWN0ID0gZnVuY3Rpb24gZWplY3QoaWQpIHtcbiAgaWYgKHRoaXMuaGFuZGxlcnNbaWRdKSB7XG4gICAgdGhpcy5oYW5kbGVyc1tpZF0gPSBudWxsO1xuICB9XG59O1xuXG4vKipcbiAqIEl0ZXJhdGUgb3ZlciBhbGwgdGhlIHJlZ2lzdGVyZWQgaW50ZXJjZXB0b3JzXG4gKlxuICogVGhpcyBtZXRob2QgaXMgcGFydGljdWxhcmx5IHVzZWZ1bCBmb3Igc2tpcHBpbmcgb3ZlciBhbnlcbiAqIGludGVyY2VwdG9ycyB0aGF0IG1heSBoYXZlIGJlY29tZSBgbnVsbGAgY2FsbGluZyBgZWplY3RgLlxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuIFRoZSBmdW5jdGlvbiB0byBjYWxsIGZvciBlYWNoIGludGVyY2VwdG9yXG4gKi9cbkludGVyY2VwdG9yTWFuYWdlci5wcm90b3R5cGUuZm9yRWFjaCA9IGZ1bmN0aW9uIGZvckVhY2goZm4pIHtcbiAgdXRpbHMuZm9yRWFjaCh0aGlzLmhhbmRsZXJzLCBmdW5jdGlvbiBmb3JFYWNoSGFuZGxlcihoKSB7XG4gICAgaWYgKGggIT09IG51bGwpIHtcbiAgICAgIGZuKGgpO1xuICAgIH1cbiAgfSk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEludGVyY2VwdG9yTWFuYWdlcjtcblxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9jcmVhdGVFcnJvci5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9jcmVhdGVFcnJvci5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG52YXIgZW5oYW5jZUVycm9yID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9lbmhhbmNlRXJyb3IgKi8gXCIuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9lbmhhbmNlRXJyb3IuanNcIik7XG5cbi8qKlxuICogQ3JlYXRlIGFuIEVycm9yIHdpdGggdGhlIHNwZWNpZmllZCBtZXNzYWdlLCBjb25maWcsIGVycm9yIGNvZGUsIHJlcXVlc3QgYW5kIHJlc3BvbnNlLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBtZXNzYWdlIFRoZSBlcnJvciBtZXNzYWdlLlxuICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZyBUaGUgY29uZmlnLlxuICogQHBhcmFtIHtzdHJpbmd9IFtjb2RlXSBUaGUgZXJyb3IgY29kZSAoZm9yIGV4YW1wbGUsICdFQ09OTkFCT1JURUQnKS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbcmVxdWVzdF0gVGhlIHJlcXVlc3QuXG4gKiBAcGFyYW0ge09iamVjdH0gW3Jlc3BvbnNlXSBUaGUgcmVzcG9uc2UuXG4gKiBAcmV0dXJucyB7RXJyb3J9IFRoZSBjcmVhdGVkIGVycm9yLlxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNyZWF0ZUVycm9yKG1lc3NhZ2UsIGNvbmZpZywgY29kZSwgcmVxdWVzdCwgcmVzcG9uc2UpIHtcbiAgdmFyIGVycm9yID0gbmV3IEVycm9yKG1lc3NhZ2UpO1xuICByZXR1cm4gZW5oYW5jZUVycm9yKGVycm9yLCBjb25maWcsIGNvZGUsIHJlcXVlc3QsIHJlc3BvbnNlKTtcbn07XG5cblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvZGlzcGF0Y2hSZXF1ZXN0LmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9kaXNwYXRjaFJlcXVlc3QuanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5cbnZhciB1dGlscyA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vLi4vdXRpbHMgKi8gXCIuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvdXRpbHMuanNcIik7XG52YXIgdHJhbnNmb3JtRGF0YSA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vdHJhbnNmb3JtRGF0YSAqLyBcIi4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL3RyYW5zZm9ybURhdGEuanNcIik7XG52YXIgaXNDYW5jZWwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuLi9jYW5jZWwvaXNDYW5jZWwgKi8gXCIuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY2FuY2VsL2lzQ2FuY2VsLmpzXCIpO1xudmFyIGRlZmF1bHRzID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi4vZGVmYXVsdHMgKi8gXCIuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvZGVmYXVsdHMuanNcIik7XG52YXIgaXNBYnNvbHV0ZVVSTCA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vLi4vaGVscGVycy9pc0Fic29sdXRlVVJMICovIFwiLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvaXNBYnNvbHV0ZVVSTC5qc1wiKTtcbnZhciBjb21iaW5lVVJMcyA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vLi4vaGVscGVycy9jb21iaW5lVVJMcyAqLyBcIi4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2NvbWJpbmVVUkxzLmpzXCIpO1xuXG4vKipcbiAqIFRocm93cyBhIGBDYW5jZWxgIGlmIGNhbmNlbGxhdGlvbiBoYXMgYmVlbiByZXF1ZXN0ZWQuXG4gKi9cbmZ1bmN0aW9uIHRocm93SWZDYW5jZWxsYXRpb25SZXF1ZXN0ZWQoY29uZmlnKSB7XG4gIGlmIChjb25maWcuY2FuY2VsVG9rZW4pIHtcbiAgICBjb25maWcuY2FuY2VsVG9rZW4udGhyb3dJZlJlcXVlc3RlZCgpO1xuICB9XG59XG5cbi8qKlxuICogRGlzcGF0Y2ggYSByZXF1ZXN0IHRvIHRoZSBzZXJ2ZXIgdXNpbmcgdGhlIGNvbmZpZ3VyZWQgYWRhcHRlci5cbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gY29uZmlnIFRoZSBjb25maWcgdGhhdCBpcyB0byBiZSB1c2VkIGZvciB0aGUgcmVxdWVzdFxuICogQHJldHVybnMge1Byb21pc2V9IFRoZSBQcm9taXNlIHRvIGJlIGZ1bGZpbGxlZFxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGRpc3BhdGNoUmVxdWVzdChjb25maWcpIHtcbiAgdGhyb3dJZkNhbmNlbGxhdGlvblJlcXVlc3RlZChjb25maWcpO1xuXG4gIC8vIFN1cHBvcnQgYmFzZVVSTCBjb25maWdcbiAgaWYgKGNvbmZpZy5iYXNlVVJMICYmICFpc0Fic29sdXRlVVJMKGNvbmZpZy51cmwpKSB7XG4gICAgY29uZmlnLnVybCA9IGNvbWJpbmVVUkxzKGNvbmZpZy5iYXNlVVJMLCBjb25maWcudXJsKTtcbiAgfVxuXG4gIC8vIEVuc3VyZSBoZWFkZXJzIGV4aXN0XG4gIGNvbmZpZy5oZWFkZXJzID0gY29uZmlnLmhlYWRlcnMgfHwge307XG5cbiAgLy8gVHJhbnNmb3JtIHJlcXVlc3QgZGF0YVxuICBjb25maWcuZGF0YSA9IHRyYW5zZm9ybURhdGEoXG4gICAgY29uZmlnLmRhdGEsXG4gICAgY29uZmlnLmhlYWRlcnMsXG4gICAgY29uZmlnLnRyYW5zZm9ybVJlcXVlc3RcbiAgKTtcblxuICAvLyBGbGF0dGVuIGhlYWRlcnNcbiAgY29uZmlnLmhlYWRlcnMgPSB1dGlscy5tZXJnZShcbiAgICBjb25maWcuaGVhZGVycy5jb21tb24gfHwge30sXG4gICAgY29uZmlnLmhlYWRlcnNbY29uZmlnLm1ldGhvZF0gfHwge30sXG4gICAgY29uZmlnLmhlYWRlcnMgfHwge31cbiAgKTtcblxuICB1dGlscy5mb3JFYWNoKFxuICAgIFsnZGVsZXRlJywgJ2dldCcsICdoZWFkJywgJ3Bvc3QnLCAncHV0JywgJ3BhdGNoJywgJ2NvbW1vbiddLFxuICAgIGZ1bmN0aW9uIGNsZWFuSGVhZGVyQ29uZmlnKG1ldGhvZCkge1xuICAgICAgZGVsZXRlIGNvbmZpZy5oZWFkZXJzW21ldGhvZF07XG4gICAgfVxuICApO1xuXG4gIHZhciBhZGFwdGVyID0gY29uZmlnLmFkYXB0ZXIgfHwgZGVmYXVsdHMuYWRhcHRlcjtcblxuICByZXR1cm4gYWRhcHRlcihjb25maWcpLnRoZW4oZnVuY3Rpb24gb25BZGFwdGVyUmVzb2x1dGlvbihyZXNwb25zZSkge1xuICAgIHRocm93SWZDYW5jZWxsYXRpb25SZXF1ZXN0ZWQoY29uZmlnKTtcblxuICAgIC8vIFRyYW5zZm9ybSByZXNwb25zZSBkYXRhXG4gICAgcmVzcG9uc2UuZGF0YSA9IHRyYW5zZm9ybURhdGEoXG4gICAgICByZXNwb25zZS5kYXRhLFxuICAgICAgcmVzcG9uc2UuaGVhZGVycyxcbiAgICAgIGNvbmZpZy50cmFuc2Zvcm1SZXNwb25zZVxuICAgICk7XG5cbiAgICByZXR1cm4gcmVzcG9uc2U7XG4gIH0sIGZ1bmN0aW9uIG9uQWRhcHRlclJlamVjdGlvbihyZWFzb24pIHtcbiAgICBpZiAoIWlzQ2FuY2VsKHJlYXNvbikpIHtcbiAgICAgIHRocm93SWZDYW5jZWxsYXRpb25SZXF1ZXN0ZWQoY29uZmlnKTtcblxuICAgICAgLy8gVHJhbnNmb3JtIHJlc3BvbnNlIGRhdGFcbiAgICAgIGlmIChyZWFzb24gJiYgcmVhc29uLnJlc3BvbnNlKSB7XG4gICAgICAgIHJlYXNvbi5yZXNwb25zZS5kYXRhID0gdHJhbnNmb3JtRGF0YShcbiAgICAgICAgICByZWFzb24ucmVzcG9uc2UuZGF0YSxcbiAgICAgICAgICByZWFzb24ucmVzcG9uc2UuaGVhZGVycyxcbiAgICAgICAgICBjb25maWcudHJhbnNmb3JtUmVzcG9uc2VcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QocmVhc29uKTtcbiAgfSk7XG59O1xuXG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL2VuaGFuY2VFcnJvci5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvZW5oYW5jZUVycm9yLmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG4vKipcbiAqIFVwZGF0ZSBhbiBFcnJvciB3aXRoIHRoZSBzcGVjaWZpZWQgY29uZmlnLCBlcnJvciBjb2RlLCBhbmQgcmVzcG9uc2UuXG4gKlxuICogQHBhcmFtIHtFcnJvcn0gZXJyb3IgVGhlIGVycm9yIHRvIHVwZGF0ZS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWcgVGhlIGNvbmZpZy5cbiAqIEBwYXJhbSB7c3RyaW5nfSBbY29kZV0gVGhlIGVycm9yIGNvZGUgKGZvciBleGFtcGxlLCAnRUNPTk5BQk9SVEVEJykuXG4gKiBAcGFyYW0ge09iamVjdH0gW3JlcXVlc3RdIFRoZSByZXF1ZXN0LlxuICogQHBhcmFtIHtPYmplY3R9IFtyZXNwb25zZV0gVGhlIHJlc3BvbnNlLlxuICogQHJldHVybnMge0Vycm9yfSBUaGUgZXJyb3IuXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZW5oYW5jZUVycm9yKGVycm9yLCBjb25maWcsIGNvZGUsIHJlcXVlc3QsIHJlc3BvbnNlKSB7XG4gIGVycm9yLmNvbmZpZyA9IGNvbmZpZztcbiAgaWYgKGNvZGUpIHtcbiAgICBlcnJvci5jb2RlID0gY29kZTtcbiAgfVxuICBlcnJvci5yZXF1ZXN0ID0gcmVxdWVzdDtcbiAgZXJyb3IucmVzcG9uc2UgPSByZXNwb25zZTtcbiAgcmV0dXJuIGVycm9yO1xufTtcblxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9zZXR0bGUuanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL3NldHRsZS5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cblxudmFyIGNyZWF0ZUVycm9yID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9jcmVhdGVFcnJvciAqLyBcIi4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL2NyZWF0ZUVycm9yLmpzXCIpO1xuXG4vKipcbiAqIFJlc29sdmUgb3IgcmVqZWN0IGEgUHJvbWlzZSBiYXNlZCBvbiByZXNwb25zZSBzdGF0dXMuXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gcmVzb2x2ZSBBIGZ1bmN0aW9uIHRoYXQgcmVzb2x2ZXMgdGhlIHByb21pc2UuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSByZWplY3QgQSBmdW5jdGlvbiB0aGF0IHJlamVjdHMgdGhlIHByb21pc2UuXG4gKiBAcGFyYW0ge29iamVjdH0gcmVzcG9uc2UgVGhlIHJlc3BvbnNlLlxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHNldHRsZShyZXNvbHZlLCByZWplY3QsIHJlc3BvbnNlKSB7XG4gIHZhciB2YWxpZGF0ZVN0YXR1cyA9IHJlc3BvbnNlLmNvbmZpZy52YWxpZGF0ZVN0YXR1cztcbiAgLy8gTm90ZTogc3RhdHVzIGlzIG5vdCBleHBvc2VkIGJ5IFhEb21haW5SZXF1ZXN0XG4gIGlmICghcmVzcG9uc2Uuc3RhdHVzIHx8ICF2YWxpZGF0ZVN0YXR1cyB8fCB2YWxpZGF0ZVN0YXR1cyhyZXNwb25zZS5zdGF0dXMpKSB7XG4gICAgcmVzb2x2ZShyZXNwb25zZSk7XG4gIH0gZWxzZSB7XG4gICAgcmVqZWN0KGNyZWF0ZUVycm9yKFxuICAgICAgJ1JlcXVlc3QgZmFpbGVkIHdpdGggc3RhdHVzIGNvZGUgJyArIHJlc3BvbnNlLnN0YXR1cyxcbiAgICAgIHJlc3BvbnNlLmNvbmZpZyxcbiAgICAgIG51bGwsXG4gICAgICByZXNwb25zZS5yZXF1ZXN0LFxuICAgICAgcmVzcG9uc2VcbiAgICApKTtcbiAgfVxufTtcblxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS90cmFuc2Zvcm1EYXRhLmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvdHJhbnNmb3JtRGF0YS5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5cbnZhciB1dGlscyA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vLi4vdXRpbHMgKi8gXCIuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvdXRpbHMuanNcIik7XG5cbi8qKlxuICogVHJhbnNmb3JtIHRoZSBkYXRhIGZvciBhIHJlcXVlc3Qgb3IgYSByZXNwb25zZVxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fFN0cmluZ30gZGF0YSBUaGUgZGF0YSB0byBiZSB0cmFuc2Zvcm1lZFxuICogQHBhcmFtIHtBcnJheX0gaGVhZGVycyBUaGUgaGVhZGVycyBmb3IgdGhlIHJlcXVlc3Qgb3IgcmVzcG9uc2VcbiAqIEBwYXJhbSB7QXJyYXl8RnVuY3Rpb259IGZucyBBIHNpbmdsZSBmdW5jdGlvbiBvciBBcnJheSBvZiBmdW5jdGlvbnNcbiAqIEByZXR1cm5zIHsqfSBUaGUgcmVzdWx0aW5nIHRyYW5zZm9ybWVkIGRhdGFcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiB0cmFuc2Zvcm1EYXRhKGRhdGEsIGhlYWRlcnMsIGZucykge1xuICAvKmVzbGludCBuby1wYXJhbS1yZWFzc2lnbjowKi9cbiAgdXRpbHMuZm9yRWFjaChmbnMsIGZ1bmN0aW9uIHRyYW5zZm9ybShmbikge1xuICAgIGRhdGEgPSBmbihkYXRhLCBoZWFkZXJzKTtcbiAgfSk7XG5cbiAgcmV0dXJuIGRhdGE7XG59O1xuXG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9kZWZhdWx0cy5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2RlZmF1bHRzLmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcbi8qIFdFQlBBQ0sgVkFSIElOSkVDVElPTiAqLyhmdW5jdGlvbihwcm9jZXNzKSB7XG5cbnZhciB1dGlscyA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vdXRpbHMgKi8gXCIuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvdXRpbHMuanNcIik7XG52YXIgbm9ybWFsaXplSGVhZGVyTmFtZSA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vaGVscGVycy9ub3JtYWxpemVIZWFkZXJOYW1lICovIFwiLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvbm9ybWFsaXplSGVhZGVyTmFtZS5qc1wiKTtcblxudmFyIERFRkFVTFRfQ09OVEVOVF9UWVBFID0ge1xuICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCdcbn07XG5cbmZ1bmN0aW9uIHNldENvbnRlbnRUeXBlSWZVbnNldChoZWFkZXJzLCB2YWx1ZSkge1xuICBpZiAoIXV0aWxzLmlzVW5kZWZpbmVkKGhlYWRlcnMpICYmIHV0aWxzLmlzVW5kZWZpbmVkKGhlYWRlcnNbJ0NvbnRlbnQtVHlwZSddKSkge1xuICAgIGhlYWRlcnNbJ0NvbnRlbnQtVHlwZSddID0gdmFsdWU7XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0RGVmYXVsdEFkYXB0ZXIoKSB7XG4gIHZhciBhZGFwdGVyO1xuICBpZiAodHlwZW9mIFhNTEh0dHBSZXF1ZXN0ICE9PSAndW5kZWZpbmVkJykge1xuICAgIC8vIEZvciBicm93c2VycyB1c2UgWEhSIGFkYXB0ZXJcbiAgICBhZGFwdGVyID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9hZGFwdGVycy94aHIgKi8gXCIuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvYWRhcHRlcnMveGhyLmpzXCIpO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBwcm9jZXNzICE9PSAndW5kZWZpbmVkJykge1xuICAgIC8vIEZvciBub2RlIHVzZSBIVFRQIGFkYXB0ZXJcbiAgICBhZGFwdGVyID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9hZGFwdGVycy9odHRwICovIFwiLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2FkYXB0ZXJzL3hoci5qc1wiKTtcbiAgfVxuICByZXR1cm4gYWRhcHRlcjtcbn1cblxudmFyIGRlZmF1bHRzID0ge1xuICBhZGFwdGVyOiBnZXREZWZhdWx0QWRhcHRlcigpLFxuXG4gIHRyYW5zZm9ybVJlcXVlc3Q6IFtmdW5jdGlvbiB0cmFuc2Zvcm1SZXF1ZXN0KGRhdGEsIGhlYWRlcnMpIHtcbiAgICBub3JtYWxpemVIZWFkZXJOYW1lKGhlYWRlcnMsICdDb250ZW50LVR5cGUnKTtcbiAgICBpZiAodXRpbHMuaXNGb3JtRGF0YShkYXRhKSB8fFxuICAgICAgdXRpbHMuaXNBcnJheUJ1ZmZlcihkYXRhKSB8fFxuICAgICAgdXRpbHMuaXNCdWZmZXIoZGF0YSkgfHxcbiAgICAgIHV0aWxzLmlzU3RyZWFtKGRhdGEpIHx8XG4gICAgICB1dGlscy5pc0ZpbGUoZGF0YSkgfHxcbiAgICAgIHV0aWxzLmlzQmxvYihkYXRhKVxuICAgICkge1xuICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfVxuICAgIGlmICh1dGlscy5pc0FycmF5QnVmZmVyVmlldyhkYXRhKSkge1xuICAgICAgcmV0dXJuIGRhdGEuYnVmZmVyO1xuICAgIH1cbiAgICBpZiAodXRpbHMuaXNVUkxTZWFyY2hQYXJhbXMoZGF0YSkpIHtcbiAgICAgIHNldENvbnRlbnRUeXBlSWZVbnNldChoZWFkZXJzLCAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkO2NoYXJzZXQ9dXRmLTgnKTtcbiAgICAgIHJldHVybiBkYXRhLnRvU3RyaW5nKCk7XG4gICAgfVxuICAgIGlmICh1dGlscy5pc09iamVjdChkYXRhKSkge1xuICAgICAgc2V0Q29udGVudFR5cGVJZlVuc2V0KGhlYWRlcnMsICdhcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTgnKTtcbiAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShkYXRhKTtcbiAgICB9XG4gICAgcmV0dXJuIGRhdGE7XG4gIH1dLFxuXG4gIHRyYW5zZm9ybVJlc3BvbnNlOiBbZnVuY3Rpb24gdHJhbnNmb3JtUmVzcG9uc2UoZGF0YSkge1xuICAgIC8qZXNsaW50IG5vLXBhcmFtLXJlYXNzaWduOjAqL1xuICAgIGlmICh0eXBlb2YgZGF0YSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGRhdGEgPSBKU09OLnBhcnNlKGRhdGEpO1xuICAgICAgfSBjYXRjaCAoZSkgeyAvKiBJZ25vcmUgKi8gfVxuICAgIH1cbiAgICByZXR1cm4gZGF0YTtcbiAgfV0sXG5cbiAgLyoqXG4gICAqIEEgdGltZW91dCBpbiBtaWxsaXNlY29uZHMgdG8gYWJvcnQgYSByZXF1ZXN0LiBJZiBzZXQgdG8gMCAoZGVmYXVsdCkgYVxuICAgKiB0aW1lb3V0IGlzIG5vdCBjcmVhdGVkLlxuICAgKi9cbiAgdGltZW91dDogMCxcblxuICB4c3JmQ29va2llTmFtZTogJ1hTUkYtVE9LRU4nLFxuICB4c3JmSGVhZGVyTmFtZTogJ1gtWFNSRi1UT0tFTicsXG5cbiAgbWF4Q29udGVudExlbmd0aDogLTEsXG5cbiAgdmFsaWRhdGVTdGF0dXM6IGZ1bmN0aW9uIHZhbGlkYXRlU3RhdHVzKHN0YXR1cykge1xuICAgIHJldHVybiBzdGF0dXMgPj0gMjAwICYmIHN0YXR1cyA8IDMwMDtcbiAgfVxufTtcblxuZGVmYXVsdHMuaGVhZGVycyA9IHtcbiAgY29tbW9uOiB7XG4gICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uLCB0ZXh0L3BsYWluLCAqLyonXG4gIH1cbn07XG5cbnV0aWxzLmZvckVhY2goWydkZWxldGUnLCAnZ2V0JywgJ2hlYWQnXSwgZnVuY3Rpb24gZm9yRWFjaE1ldGhvZE5vRGF0YShtZXRob2QpIHtcbiAgZGVmYXVsdHMuaGVhZGVyc1ttZXRob2RdID0ge307XG59KTtcblxudXRpbHMuZm9yRWFjaChbJ3Bvc3QnLCAncHV0JywgJ3BhdGNoJ10sIGZ1bmN0aW9uIGZvckVhY2hNZXRob2RXaXRoRGF0YShtZXRob2QpIHtcbiAgZGVmYXVsdHMuaGVhZGVyc1ttZXRob2RdID0gdXRpbHMubWVyZ2UoREVGQVVMVF9DT05URU5UX1RZUEUpO1xufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gZGVmYXVsdHM7XG5cbi8qIFdFQlBBQ0sgVkFSIElOSkVDVElPTiAqL30uY2FsbCh0aGlzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuLy4uLy4uL3Byb2Nlc3MvYnJvd3Nlci5qcyAqLyBcIi4vbm9kZV9tb2R1bGVzL3Byb2Nlc3MvYnJvd3Nlci5qc1wiKSkpXG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2JpbmQuanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9iaW5kLmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBiaW5kKGZuLCB0aGlzQXJnKSB7XG4gIHJldHVybiBmdW5jdGlvbiB3cmFwKCkge1xuICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGgpO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJncy5sZW5ndGg7IGkrKykge1xuICAgICAgYXJnc1tpXSA9IGFyZ3VtZW50c1tpXTtcbiAgICB9XG4gICAgcmV0dXJuIGZuLmFwcGx5KHRoaXNBcmcsIGFyZ3MpO1xuICB9O1xufTtcblxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9idG9hLmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvYnRvYS5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5cbi8vIGJ0b2EgcG9seWZpbGwgZm9yIElFPDEwIGNvdXJ0ZXN5IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXZpZGNoYW1iZXJzL0Jhc2U2NC5qc1xuXG52YXIgY2hhcnMgPSAnQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVphYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ejAxMjM0NTY3ODkrLz0nO1xuXG5mdW5jdGlvbiBFKCkge1xuICB0aGlzLm1lc3NhZ2UgPSAnU3RyaW5nIGNvbnRhaW5zIGFuIGludmFsaWQgY2hhcmFjdGVyJztcbn1cbkUucHJvdG90eXBlID0gbmV3IEVycm9yO1xuRS5wcm90b3R5cGUuY29kZSA9IDU7XG5FLnByb3RvdHlwZS5uYW1lID0gJ0ludmFsaWRDaGFyYWN0ZXJFcnJvcic7XG5cbmZ1bmN0aW9uIGJ0b2EoaW5wdXQpIHtcbiAgdmFyIHN0ciA9IFN0cmluZyhpbnB1dCk7XG4gIHZhciBvdXRwdXQgPSAnJztcbiAgZm9yIChcbiAgICAvLyBpbml0aWFsaXplIHJlc3VsdCBhbmQgY291bnRlclxuICAgIHZhciBibG9jaywgY2hhckNvZGUsIGlkeCA9IDAsIG1hcCA9IGNoYXJzO1xuICAgIC8vIGlmIHRoZSBuZXh0IHN0ciBpbmRleCBkb2VzIG5vdCBleGlzdDpcbiAgICAvLyAgIGNoYW5nZSB0aGUgbWFwcGluZyB0YWJsZSB0byBcIj1cIlxuICAgIC8vICAgY2hlY2sgaWYgZCBoYXMgbm8gZnJhY3Rpb25hbCBkaWdpdHNcbiAgICBzdHIuY2hhckF0KGlkeCB8IDApIHx8IChtYXAgPSAnPScsIGlkeCAlIDEpO1xuICAgIC8vIFwiOCAtIGlkeCAlIDEgKiA4XCIgZ2VuZXJhdGVzIHRoZSBzZXF1ZW5jZSAyLCA0LCA2LCA4XG4gICAgb3V0cHV0ICs9IG1hcC5jaGFyQXQoNjMgJiBibG9jayA+PiA4IC0gaWR4ICUgMSAqIDgpXG4gICkge1xuICAgIGNoYXJDb2RlID0gc3RyLmNoYXJDb2RlQXQoaWR4ICs9IDMgLyA0KTtcbiAgICBpZiAoY2hhckNvZGUgPiAweEZGKSB7XG4gICAgICB0aHJvdyBuZXcgRSgpO1xuICAgIH1cbiAgICBibG9jayA9IGJsb2NrIDw8IDggfCBjaGFyQ29kZTtcbiAgfVxuICByZXR1cm4gb3V0cHV0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJ0b2E7XG5cblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvYnVpbGRVUkwuanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvYnVpbGRVUkwuanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cblxudmFyIHV0aWxzID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi8uLi91dGlscyAqLyBcIi4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi91dGlscy5qc1wiKTtcblxuZnVuY3Rpb24gZW5jb2RlKHZhbCkge1xuICByZXR1cm4gZW5jb2RlVVJJQ29tcG9uZW50KHZhbCkuXG4gICAgcmVwbGFjZSgvJTQwL2dpLCAnQCcpLlxuICAgIHJlcGxhY2UoLyUzQS9naSwgJzonKS5cbiAgICByZXBsYWNlKC8lMjQvZywgJyQnKS5cbiAgICByZXBsYWNlKC8lMkMvZ2ksICcsJykuXG4gICAgcmVwbGFjZSgvJTIwL2csICcrJykuXG4gICAgcmVwbGFjZSgvJTVCL2dpLCAnWycpLlxuICAgIHJlcGxhY2UoLyU1RC9naSwgJ10nKTtcbn1cblxuLyoqXG4gKiBCdWlsZCBhIFVSTCBieSBhcHBlbmRpbmcgcGFyYW1zIHRvIHRoZSBlbmRcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gdXJsIFRoZSBiYXNlIG9mIHRoZSB1cmwgKGUuZy4sIGh0dHA6Ly93d3cuZ29vZ2xlLmNvbSlcbiAqIEBwYXJhbSB7b2JqZWN0fSBbcGFyYW1zXSBUaGUgcGFyYW1zIHRvIGJlIGFwcGVuZGVkXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBUaGUgZm9ybWF0dGVkIHVybFxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGJ1aWxkVVJMKHVybCwgcGFyYW1zLCBwYXJhbXNTZXJpYWxpemVyKSB7XG4gIC8qZXNsaW50IG5vLXBhcmFtLXJlYXNzaWduOjAqL1xuICBpZiAoIXBhcmFtcykge1xuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICB2YXIgc2VyaWFsaXplZFBhcmFtcztcbiAgaWYgKHBhcmFtc1NlcmlhbGl6ZXIpIHtcbiAgICBzZXJpYWxpemVkUGFyYW1zID0gcGFyYW1zU2VyaWFsaXplcihwYXJhbXMpO1xuICB9IGVsc2UgaWYgKHV0aWxzLmlzVVJMU2VhcmNoUGFyYW1zKHBhcmFtcykpIHtcbiAgICBzZXJpYWxpemVkUGFyYW1zID0gcGFyYW1zLnRvU3RyaW5nKCk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHBhcnRzID0gW107XG5cbiAgICB1dGlscy5mb3JFYWNoKHBhcmFtcywgZnVuY3Rpb24gc2VyaWFsaXplKHZhbCwga2V5KSB7XG4gICAgICBpZiAodmFsID09PSBudWxsIHx8IHR5cGVvZiB2YWwgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKHV0aWxzLmlzQXJyYXkodmFsKSkge1xuICAgICAgICBrZXkgPSBrZXkgKyAnW10nO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFsID0gW3ZhbF07XG4gICAgICB9XG5cbiAgICAgIHV0aWxzLmZvckVhY2godmFsLCBmdW5jdGlvbiBwYXJzZVZhbHVlKHYpIHtcbiAgICAgICAgaWYgKHV0aWxzLmlzRGF0ZSh2KSkge1xuICAgICAgICAgIHYgPSB2LnRvSVNPU3RyaW5nKCk7XG4gICAgICAgIH0gZWxzZSBpZiAodXRpbHMuaXNPYmplY3QodikpIHtcbiAgICAgICAgICB2ID0gSlNPTi5zdHJpbmdpZnkodik7XG4gICAgICAgIH1cbiAgICAgICAgcGFydHMucHVzaChlbmNvZGUoa2V5KSArICc9JyArIGVuY29kZSh2KSk7XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIHNlcmlhbGl6ZWRQYXJhbXMgPSBwYXJ0cy5qb2luKCcmJyk7XG4gIH1cblxuICBpZiAoc2VyaWFsaXplZFBhcmFtcykge1xuICAgIHVybCArPSAodXJsLmluZGV4T2YoJz8nKSA9PT0gLTEgPyAnPycgOiAnJicpICsgc2VyaWFsaXplZFBhcmFtcztcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59O1xuXG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2NvbWJpbmVVUkxzLmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2NvbWJpbmVVUkxzLmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5cbi8qKlxuICogQ3JlYXRlcyBhIG5ldyBVUkwgYnkgY29tYmluaW5nIHRoZSBzcGVjaWZpZWQgVVJMc1xuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBiYXNlVVJMIFRoZSBiYXNlIFVSTFxuICogQHBhcmFtIHtzdHJpbmd9IHJlbGF0aXZlVVJMIFRoZSByZWxhdGl2ZSBVUkxcbiAqIEByZXR1cm5zIHtzdHJpbmd9IFRoZSBjb21iaW5lZCBVUkxcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjb21iaW5lVVJMcyhiYXNlVVJMLCByZWxhdGl2ZVVSTCkge1xuICByZXR1cm4gcmVsYXRpdmVVUkxcbiAgICA/IGJhc2VVUkwucmVwbGFjZSgvXFwvKyQvLCAnJykgKyAnLycgKyByZWxhdGl2ZVVSTC5yZXBsYWNlKC9eXFwvKy8sICcnKVxuICAgIDogYmFzZVVSTDtcbn07XG5cblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvY29va2llcy5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2Nvb2tpZXMuanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG52YXIgdXRpbHMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuLy4uL3V0aWxzICovIFwiLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL3V0aWxzLmpzXCIpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IChcbiAgdXRpbHMuaXNTdGFuZGFyZEJyb3dzZXJFbnYoKSA/XG5cbiAgLy8gU3RhbmRhcmQgYnJvd3NlciBlbnZzIHN1cHBvcnQgZG9jdW1lbnQuY29va2llXG4gIChmdW5jdGlvbiBzdGFuZGFyZEJyb3dzZXJFbnYoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHdyaXRlOiBmdW5jdGlvbiB3cml0ZShuYW1lLCB2YWx1ZSwgZXhwaXJlcywgcGF0aCwgZG9tYWluLCBzZWN1cmUpIHtcbiAgICAgICAgdmFyIGNvb2tpZSA9IFtdO1xuICAgICAgICBjb29raWUucHVzaChuYW1lICsgJz0nICsgZW5jb2RlVVJJQ29tcG9uZW50KHZhbHVlKSk7XG5cbiAgICAgICAgaWYgKHV0aWxzLmlzTnVtYmVyKGV4cGlyZXMpKSB7XG4gICAgICAgICAgY29va2llLnB1c2goJ2V4cGlyZXM9JyArIG5ldyBEYXRlKGV4cGlyZXMpLnRvR01UU3RyaW5nKCkpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHV0aWxzLmlzU3RyaW5nKHBhdGgpKSB7XG4gICAgICAgICAgY29va2llLnB1c2goJ3BhdGg9JyArIHBhdGgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHV0aWxzLmlzU3RyaW5nKGRvbWFpbikpIHtcbiAgICAgICAgICBjb29raWUucHVzaCgnZG9tYWluPScgKyBkb21haW4pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHNlY3VyZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgIGNvb2tpZS5wdXNoKCdzZWN1cmUnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGRvY3VtZW50LmNvb2tpZSA9IGNvb2tpZS5qb2luKCc7ICcpO1xuICAgICAgfSxcblxuICAgICAgcmVhZDogZnVuY3Rpb24gcmVhZChuYW1lKSB7XG4gICAgICAgIHZhciBtYXRjaCA9IGRvY3VtZW50LmNvb2tpZS5tYXRjaChuZXcgUmVnRXhwKCcoXnw7XFxcXHMqKSgnICsgbmFtZSArICcpPShbXjtdKiknKSk7XG4gICAgICAgIHJldHVybiAobWF0Y2ggPyBkZWNvZGVVUklDb21wb25lbnQobWF0Y2hbM10pIDogbnVsbCk7XG4gICAgICB9LFxuXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZShuYW1lKSB7XG4gICAgICAgIHRoaXMud3JpdGUobmFtZSwgJycsIERhdGUubm93KCkgLSA4NjQwMDAwMCk7XG4gICAgICB9XG4gICAgfTtcbiAgfSkoKSA6XG5cbiAgLy8gTm9uIHN0YW5kYXJkIGJyb3dzZXIgZW52ICh3ZWIgd29ya2VycywgcmVhY3QtbmF0aXZlKSBsYWNrIG5lZWRlZCBzdXBwb3J0LlxuICAoZnVuY3Rpb24gbm9uU3RhbmRhcmRCcm93c2VyRW52KCkge1xuICAgIHJldHVybiB7XG4gICAgICB3cml0ZTogZnVuY3Rpb24gd3JpdGUoKSB7fSxcbiAgICAgIHJlYWQ6IGZ1bmN0aW9uIHJlYWQoKSB7IHJldHVybiBudWxsOyB9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH0pKClcbik7XG5cblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvaXNBYnNvbHV0ZVVSTC5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2lzQWJzb2x1dGVVUkwuanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG4vKipcbiAqIERldGVybWluZXMgd2hldGhlciB0aGUgc3BlY2lmaWVkIFVSTCBpcyBhYnNvbHV0ZVxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSB1cmwgVGhlIFVSTCB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB0aGUgc3BlY2lmaWVkIFVSTCBpcyBhYnNvbHV0ZSwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaXNBYnNvbHV0ZVVSTCh1cmwpIHtcbiAgLy8gQSBVUkwgaXMgY29uc2lkZXJlZCBhYnNvbHV0ZSBpZiBpdCBiZWdpbnMgd2l0aCBcIjxzY2hlbWU+Oi8vXCIgb3IgXCIvL1wiIChwcm90b2NvbC1yZWxhdGl2ZSBVUkwpLlxuICAvLyBSRkMgMzk4NiBkZWZpbmVzIHNjaGVtZSBuYW1lIGFzIGEgc2VxdWVuY2Ugb2YgY2hhcmFjdGVycyBiZWdpbm5pbmcgd2l0aCBhIGxldHRlciBhbmQgZm9sbG93ZWRcbiAgLy8gYnkgYW55IGNvbWJpbmF0aW9uIG9mIGxldHRlcnMsIGRpZ2l0cywgcGx1cywgcGVyaW9kLCBvciBoeXBoZW4uXG4gIHJldHVybiAvXihbYS16XVthLXpcXGRcXCtcXC1cXC5dKjopP1xcL1xcLy9pLnRlc3QodXJsKTtcbn07XG5cblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvaXNVUkxTYW1lT3JpZ2luLmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9pc1VSTFNhbWVPcmlnaW4uanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5cbnZhciB1dGlscyA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vLi4vdXRpbHMgKi8gXCIuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvdXRpbHMuanNcIik7XG5cbm1vZHVsZS5leHBvcnRzID0gKFxuICB1dGlscy5pc1N0YW5kYXJkQnJvd3NlckVudigpID9cblxuICAvLyBTdGFuZGFyZCBicm93c2VyIGVudnMgaGF2ZSBmdWxsIHN1cHBvcnQgb2YgdGhlIEFQSXMgbmVlZGVkIHRvIHRlc3RcbiAgLy8gd2hldGhlciB0aGUgcmVxdWVzdCBVUkwgaXMgb2YgdGhlIHNhbWUgb3JpZ2luIGFzIGN1cnJlbnQgbG9jYXRpb24uXG4gIChmdW5jdGlvbiBzdGFuZGFyZEJyb3dzZXJFbnYoKSB7XG4gICAgdmFyIG1zaWUgPSAvKG1zaWV8dHJpZGVudCkvaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpO1xuICAgIHZhciB1cmxQYXJzaW5nTm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICB2YXIgb3JpZ2luVVJMO1xuXG4gICAgLyoqXG4gICAgKiBQYXJzZSBhIFVSTCB0byBkaXNjb3ZlciBpdCdzIGNvbXBvbmVudHNcbiAgICAqXG4gICAgKiBAcGFyYW0ge1N0cmluZ30gdXJsIFRoZSBVUkwgdG8gYmUgcGFyc2VkXG4gICAgKiBAcmV0dXJucyB7T2JqZWN0fVxuICAgICovXG4gICAgZnVuY3Rpb24gcmVzb2x2ZVVSTCh1cmwpIHtcbiAgICAgIHZhciBocmVmID0gdXJsO1xuXG4gICAgICBpZiAobXNpZSkge1xuICAgICAgICAvLyBJRSBuZWVkcyBhdHRyaWJ1dGUgc2V0IHR3aWNlIHRvIG5vcm1hbGl6ZSBwcm9wZXJ0aWVzXG4gICAgICAgIHVybFBhcnNpbmdOb2RlLnNldEF0dHJpYnV0ZSgnaHJlZicsIGhyZWYpO1xuICAgICAgICBocmVmID0gdXJsUGFyc2luZ05vZGUuaHJlZjtcbiAgICAgIH1cblxuICAgICAgdXJsUGFyc2luZ05vZGUuc2V0QXR0cmlidXRlKCdocmVmJywgaHJlZik7XG5cbiAgICAgIC8vIHVybFBhcnNpbmdOb2RlIHByb3ZpZGVzIHRoZSBVcmxVdGlscyBpbnRlcmZhY2UgLSBodHRwOi8vdXJsLnNwZWMud2hhdHdnLm9yZy8jdXJsdXRpbHNcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGhyZWY6IHVybFBhcnNpbmdOb2RlLmhyZWYsXG4gICAgICAgIHByb3RvY29sOiB1cmxQYXJzaW5nTm9kZS5wcm90b2NvbCA/IHVybFBhcnNpbmdOb2RlLnByb3RvY29sLnJlcGxhY2UoLzokLywgJycpIDogJycsXG4gICAgICAgIGhvc3Q6IHVybFBhcnNpbmdOb2RlLmhvc3QsXG4gICAgICAgIHNlYXJjaDogdXJsUGFyc2luZ05vZGUuc2VhcmNoID8gdXJsUGFyc2luZ05vZGUuc2VhcmNoLnJlcGxhY2UoL15cXD8vLCAnJykgOiAnJyxcbiAgICAgICAgaGFzaDogdXJsUGFyc2luZ05vZGUuaGFzaCA/IHVybFBhcnNpbmdOb2RlLmhhc2gucmVwbGFjZSgvXiMvLCAnJykgOiAnJyxcbiAgICAgICAgaG9zdG5hbWU6IHVybFBhcnNpbmdOb2RlLmhvc3RuYW1lLFxuICAgICAgICBwb3J0OiB1cmxQYXJzaW5nTm9kZS5wb3J0LFxuICAgICAgICBwYXRobmFtZTogKHVybFBhcnNpbmdOb2RlLnBhdGhuYW1lLmNoYXJBdCgwKSA9PT0gJy8nKSA/XG4gICAgICAgICAgICAgICAgICB1cmxQYXJzaW5nTm9kZS5wYXRobmFtZSA6XG4gICAgICAgICAgICAgICAgICAnLycgKyB1cmxQYXJzaW5nTm9kZS5wYXRobmFtZVxuICAgICAgfTtcbiAgICB9XG5cbiAgICBvcmlnaW5VUkwgPSByZXNvbHZlVVJMKHdpbmRvdy5sb2NhdGlvbi5ocmVmKTtcblxuICAgIC8qKlxuICAgICogRGV0ZXJtaW5lIGlmIGEgVVJMIHNoYXJlcyB0aGUgc2FtZSBvcmlnaW4gYXMgdGhlIGN1cnJlbnQgbG9jYXRpb25cbiAgICAqXG4gICAgKiBAcGFyYW0ge1N0cmluZ30gcmVxdWVzdFVSTCBUaGUgVVJMIHRvIHRlc3RcbiAgICAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIFVSTCBzaGFyZXMgdGhlIHNhbWUgb3JpZ2luLCBvdGhlcndpc2UgZmFsc2VcbiAgICAqL1xuICAgIHJldHVybiBmdW5jdGlvbiBpc1VSTFNhbWVPcmlnaW4ocmVxdWVzdFVSTCkge1xuICAgICAgdmFyIHBhcnNlZCA9ICh1dGlscy5pc1N0cmluZyhyZXF1ZXN0VVJMKSkgPyByZXNvbHZlVVJMKHJlcXVlc3RVUkwpIDogcmVxdWVzdFVSTDtcbiAgICAgIHJldHVybiAocGFyc2VkLnByb3RvY29sID09PSBvcmlnaW5VUkwucHJvdG9jb2wgJiZcbiAgICAgICAgICAgIHBhcnNlZC5ob3N0ID09PSBvcmlnaW5VUkwuaG9zdCk7XG4gICAgfTtcbiAgfSkoKSA6XG5cbiAgLy8gTm9uIHN0YW5kYXJkIGJyb3dzZXIgZW52cyAod2ViIHdvcmtlcnMsIHJlYWN0LW5hdGl2ZSkgbGFjayBuZWVkZWQgc3VwcG9ydC5cbiAgKGZ1bmN0aW9uIG5vblN0YW5kYXJkQnJvd3NlckVudigpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gaXNVUkxTYW1lT3JpZ2luKCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfTtcbiAgfSkoKVxuKTtcblxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9ub3JtYWxpemVIZWFkZXJOYW1lLmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvbm9ybWFsaXplSGVhZGVyTmFtZS5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5cbnZhciB1dGlscyA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4uL3V0aWxzICovIFwiLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL3V0aWxzLmpzXCIpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIG5vcm1hbGl6ZUhlYWRlck5hbWUoaGVhZGVycywgbm9ybWFsaXplZE5hbWUpIHtcbiAgdXRpbHMuZm9yRWFjaChoZWFkZXJzLCBmdW5jdGlvbiBwcm9jZXNzSGVhZGVyKHZhbHVlLCBuYW1lKSB7XG4gICAgaWYgKG5hbWUgIT09IG5vcm1hbGl6ZWROYW1lICYmIG5hbWUudG9VcHBlckNhc2UoKSA9PT0gbm9ybWFsaXplZE5hbWUudG9VcHBlckNhc2UoKSkge1xuICAgICAgaGVhZGVyc1tub3JtYWxpemVkTmFtZV0gPSB2YWx1ZTtcbiAgICAgIGRlbGV0ZSBoZWFkZXJzW25hbWVdO1xuICAgIH1cbiAgfSk7XG59O1xuXG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL3BhcnNlSGVhZGVycy5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvcGFyc2VIZWFkZXJzLmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG52YXIgdXRpbHMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuLy4uL3V0aWxzICovIFwiLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL3V0aWxzLmpzXCIpO1xuXG4vLyBIZWFkZXJzIHdob3NlIGR1cGxpY2F0ZXMgYXJlIGlnbm9yZWQgYnkgbm9kZVxuLy8gYy5mLiBodHRwczovL25vZGVqcy5vcmcvYXBpL2h0dHAuaHRtbCNodHRwX21lc3NhZ2VfaGVhZGVyc1xudmFyIGlnbm9yZUR1cGxpY2F0ZU9mID0gW1xuICAnYWdlJywgJ2F1dGhvcml6YXRpb24nLCAnY29udGVudC1sZW5ndGgnLCAnY29udGVudC10eXBlJywgJ2V0YWcnLFxuICAnZXhwaXJlcycsICdmcm9tJywgJ2hvc3QnLCAnaWYtbW9kaWZpZWQtc2luY2UnLCAnaWYtdW5tb2RpZmllZC1zaW5jZScsXG4gICdsYXN0LW1vZGlmaWVkJywgJ2xvY2F0aW9uJywgJ21heC1mb3J3YXJkcycsICdwcm94eS1hdXRob3JpemF0aW9uJyxcbiAgJ3JlZmVyZXInLCAncmV0cnktYWZ0ZXInLCAndXNlci1hZ2VudCdcbl07XG5cbi8qKlxuICogUGFyc2UgaGVhZGVycyBpbnRvIGFuIG9iamVjdFxuICpcbiAqIGBgYFxuICogRGF0ZTogV2VkLCAyNyBBdWcgMjAxNCAwODo1ODo0OSBHTVRcbiAqIENvbnRlbnQtVHlwZTogYXBwbGljYXRpb24vanNvblxuICogQ29ubmVjdGlvbjoga2VlcC1hbGl2ZVxuICogVHJhbnNmZXItRW5jb2Rpbmc6IGNodW5rZWRcbiAqIGBgYFxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBoZWFkZXJzIEhlYWRlcnMgbmVlZGluZyB0byBiZSBwYXJzZWRcbiAqIEByZXR1cm5zIHtPYmplY3R9IEhlYWRlcnMgcGFyc2VkIGludG8gYW4gb2JqZWN0XG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gcGFyc2VIZWFkZXJzKGhlYWRlcnMpIHtcbiAgdmFyIHBhcnNlZCA9IHt9O1xuICB2YXIga2V5O1xuICB2YXIgdmFsO1xuICB2YXIgaTtcblxuICBpZiAoIWhlYWRlcnMpIHsgcmV0dXJuIHBhcnNlZDsgfVxuXG4gIHV0aWxzLmZvckVhY2goaGVhZGVycy5zcGxpdCgnXFxuJyksIGZ1bmN0aW9uIHBhcnNlcihsaW5lKSB7XG4gICAgaSA9IGxpbmUuaW5kZXhPZignOicpO1xuICAgIGtleSA9IHV0aWxzLnRyaW0obGluZS5zdWJzdHIoMCwgaSkpLnRvTG93ZXJDYXNlKCk7XG4gICAgdmFsID0gdXRpbHMudHJpbShsaW5lLnN1YnN0cihpICsgMSkpO1xuXG4gICAgaWYgKGtleSkge1xuICAgICAgaWYgKHBhcnNlZFtrZXldICYmIGlnbm9yZUR1cGxpY2F0ZU9mLmluZGV4T2Yoa2V5KSA+PSAwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmIChrZXkgPT09ICdzZXQtY29va2llJykge1xuICAgICAgICBwYXJzZWRba2V5XSA9IChwYXJzZWRba2V5XSA/IHBhcnNlZFtrZXldIDogW10pLmNvbmNhdChbdmFsXSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwYXJzZWRba2V5XSA9IHBhcnNlZFtrZXldID8gcGFyc2VkW2tleV0gKyAnLCAnICsgdmFsIDogdmFsO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIHBhcnNlZDtcbn07XG5cblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvc3ByZWFkLmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9zcHJlYWQuanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5cbi8qKlxuICogU3ludGFjdGljIHN1Z2FyIGZvciBpbnZva2luZyBhIGZ1bmN0aW9uIGFuZCBleHBhbmRpbmcgYW4gYXJyYXkgZm9yIGFyZ3VtZW50cy5cbiAqXG4gKiBDb21tb24gdXNlIGNhc2Ugd291bGQgYmUgdG8gdXNlIGBGdW5jdGlvbi5wcm90b3R5cGUuYXBwbHlgLlxuICpcbiAqICBgYGBqc1xuICogIGZ1bmN0aW9uIGYoeCwgeSwgeikge31cbiAqICB2YXIgYXJncyA9IFsxLCAyLCAzXTtcbiAqICBmLmFwcGx5KG51bGwsIGFyZ3MpO1xuICogIGBgYFxuICpcbiAqIFdpdGggYHNwcmVhZGAgdGhpcyBleGFtcGxlIGNhbiBiZSByZS13cml0dGVuLlxuICpcbiAqICBgYGBqc1xuICogIHNwcmVhZChmdW5jdGlvbih4LCB5LCB6KSB7fSkoWzEsIDIsIDNdKTtcbiAqICBgYGBcbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFja1xuICogQHJldHVybnMge0Z1bmN0aW9ufVxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHNwcmVhZChjYWxsYmFjaykge1xuICByZXR1cm4gZnVuY3Rpb24gd3JhcChhcnIpIHtcbiAgICByZXR1cm4gY2FsbGJhY2suYXBwbHkobnVsbCwgYXJyKTtcbiAgfTtcbn07XG5cblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL3V0aWxzLmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvdXRpbHMuanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5cbnZhciBiaW5kID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9oZWxwZXJzL2JpbmQgKi8gXCIuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9iaW5kLmpzXCIpO1xudmFyIGlzQnVmZmVyID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgaXMtYnVmZmVyICovIFwiLi9ub2RlX21vZHVsZXMvaXMtYnVmZmVyL2luZGV4LmpzXCIpO1xuXG4vKmdsb2JhbCB0b1N0cmluZzp0cnVlKi9cblxuLy8gdXRpbHMgaXMgYSBsaWJyYXJ5IG9mIGdlbmVyaWMgaGVscGVyIGZ1bmN0aW9ucyBub24tc3BlY2lmaWMgdG8gYXhpb3NcblxudmFyIHRvU3RyaW5nID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZztcblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhbiBBcnJheVxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGFuIEFycmF5LCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNBcnJheSh2YWwpIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwodmFsKSA9PT0gJ1tvYmplY3QgQXJyYXldJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhbiBBcnJheUJ1ZmZlclxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGFuIEFycmF5QnVmZmVyLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNBcnJheUJ1ZmZlcih2YWwpIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwodmFsKSA9PT0gJ1tvYmplY3QgQXJyYXlCdWZmZXJdJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIEZvcm1EYXRhXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYW4gRm9ybURhdGEsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0Zvcm1EYXRhKHZhbCkge1xuICByZXR1cm4gKHR5cGVvZiBGb3JtRGF0YSAhPT0gJ3VuZGVmaW5lZCcpICYmICh2YWwgaW5zdGFuY2VvZiBGb3JtRGF0YSk7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSB2aWV3IG9uIGFuIEFycmF5QnVmZmVyXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSB2aWV3IG9uIGFuIEFycmF5QnVmZmVyLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNBcnJheUJ1ZmZlclZpZXcodmFsKSB7XG4gIHZhciByZXN1bHQ7XG4gIGlmICgodHlwZW9mIEFycmF5QnVmZmVyICE9PSAndW5kZWZpbmVkJykgJiYgKEFycmF5QnVmZmVyLmlzVmlldykpIHtcbiAgICByZXN1bHQgPSBBcnJheUJ1ZmZlci5pc1ZpZXcodmFsKTtcbiAgfSBlbHNlIHtcbiAgICByZXN1bHQgPSAodmFsKSAmJiAodmFsLmJ1ZmZlcikgJiYgKHZhbC5idWZmZXIgaW5zdGFuY2VvZiBBcnJheUJ1ZmZlcik7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIFN0cmluZ1xuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgU3RyaW5nLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNTdHJpbmcodmFsKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsID09PSAnc3RyaW5nJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIE51bWJlclxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgTnVtYmVyLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNOdW1iZXIodmFsKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsID09PSAnbnVtYmVyJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyB1bmRlZmluZWRcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB0aGUgdmFsdWUgaXMgdW5kZWZpbmVkLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNVbmRlZmluZWQodmFsKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsID09PSAndW5kZWZpbmVkJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhbiBPYmplY3RcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhbiBPYmplY3QsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc09iamVjdCh2YWwpIHtcbiAgcmV0dXJuIHZhbCAhPT0gbnVsbCAmJiB0eXBlb2YgdmFsID09PSAnb2JqZWN0Jztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIERhdGVcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIERhdGUsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0RhdGUodmFsKSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKHZhbCkgPT09ICdbb2JqZWN0IERhdGVdJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIEZpbGVcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIEZpbGUsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0ZpbGUodmFsKSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKHZhbCkgPT09ICdbb2JqZWN0IEZpbGVdJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIEJsb2JcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIEJsb2IsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0Jsb2IodmFsKSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKHZhbCkgPT09ICdbb2JqZWN0IEJsb2JdJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIEZ1bmN0aW9uXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBGdW5jdGlvbiwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzRnVuY3Rpb24odmFsKSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKHZhbCkgPT09ICdbb2JqZWN0IEZ1bmN0aW9uXSc7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBTdHJlYW1cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIFN0cmVhbSwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzU3RyZWFtKHZhbCkge1xuICByZXR1cm4gaXNPYmplY3QodmFsKSAmJiBpc0Z1bmN0aW9uKHZhbC5waXBlKTtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIFVSTFNlYXJjaFBhcmFtcyBvYmplY3RcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIFVSTFNlYXJjaFBhcmFtcyBvYmplY3QsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc1VSTFNlYXJjaFBhcmFtcyh2YWwpIHtcbiAgcmV0dXJuIHR5cGVvZiBVUkxTZWFyY2hQYXJhbXMgIT09ICd1bmRlZmluZWQnICYmIHZhbCBpbnN0YW5jZW9mIFVSTFNlYXJjaFBhcmFtcztcbn1cblxuLyoqXG4gKiBUcmltIGV4Y2VzcyB3aGl0ZXNwYWNlIG9mZiB0aGUgYmVnaW5uaW5nIGFuZCBlbmQgb2YgYSBzdHJpbmdcbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RyIFRoZSBTdHJpbmcgdG8gdHJpbVxuICogQHJldHVybnMge1N0cmluZ30gVGhlIFN0cmluZyBmcmVlZCBvZiBleGNlc3Mgd2hpdGVzcGFjZVxuICovXG5mdW5jdGlvbiB0cmltKHN0cikge1xuICByZXR1cm4gc3RyLnJlcGxhY2UoL15cXHMqLywgJycpLnJlcGxhY2UoL1xccyokLywgJycpO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiB3ZSdyZSBydW5uaW5nIGluIGEgc3RhbmRhcmQgYnJvd3NlciBlbnZpcm9ubWVudFxuICpcbiAqIFRoaXMgYWxsb3dzIGF4aW9zIHRvIHJ1biBpbiBhIHdlYiB3b3JrZXIsIGFuZCByZWFjdC1uYXRpdmUuXG4gKiBCb3RoIGVudmlyb25tZW50cyBzdXBwb3J0IFhNTEh0dHBSZXF1ZXN0LCBidXQgbm90IGZ1bGx5IHN0YW5kYXJkIGdsb2JhbHMuXG4gKlxuICogd2ViIHdvcmtlcnM6XG4gKiAgdHlwZW9mIHdpbmRvdyAtPiB1bmRlZmluZWRcbiAqICB0eXBlb2YgZG9jdW1lbnQgLT4gdW5kZWZpbmVkXG4gKlxuICogcmVhY3QtbmF0aXZlOlxuICogIG5hdmlnYXRvci5wcm9kdWN0IC0+ICdSZWFjdE5hdGl2ZSdcbiAqL1xuZnVuY3Rpb24gaXNTdGFuZGFyZEJyb3dzZXJFbnYoKSB7XG4gIGlmICh0eXBlb2YgbmF2aWdhdG9yICE9PSAndW5kZWZpbmVkJyAmJiBuYXZpZ2F0b3IucHJvZHVjdCA9PT0gJ1JlYWN0TmF0aXZlJykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICByZXR1cm4gKFxuICAgIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmXG4gICAgdHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJ1xuICApO1xufVxuXG4vKipcbiAqIEl0ZXJhdGUgb3ZlciBhbiBBcnJheSBvciBhbiBPYmplY3QgaW52b2tpbmcgYSBmdW5jdGlvbiBmb3IgZWFjaCBpdGVtLlxuICpcbiAqIElmIGBvYmpgIGlzIGFuIEFycmF5IGNhbGxiYWNrIHdpbGwgYmUgY2FsbGVkIHBhc3NpbmdcbiAqIHRoZSB2YWx1ZSwgaW5kZXgsIGFuZCBjb21wbGV0ZSBhcnJheSBmb3IgZWFjaCBpdGVtLlxuICpcbiAqIElmICdvYmonIGlzIGFuIE9iamVjdCBjYWxsYmFjayB3aWxsIGJlIGNhbGxlZCBwYXNzaW5nXG4gKiB0aGUgdmFsdWUsIGtleSwgYW5kIGNvbXBsZXRlIG9iamVjdCBmb3IgZWFjaCBwcm9wZXJ0eS5cbiAqXG4gKiBAcGFyYW0ge09iamVjdHxBcnJheX0gb2JqIFRoZSBvYmplY3QgdG8gaXRlcmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm4gVGhlIGNhbGxiYWNrIHRvIGludm9rZSBmb3IgZWFjaCBpdGVtXG4gKi9cbmZ1bmN0aW9uIGZvckVhY2gob2JqLCBmbikge1xuICAvLyBEb24ndCBib3RoZXIgaWYgbm8gdmFsdWUgcHJvdmlkZWRcbiAgaWYgKG9iaiA9PT0gbnVsbCB8fCB0eXBlb2Ygb2JqID09PSAndW5kZWZpbmVkJykge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8vIEZvcmNlIGFuIGFycmF5IGlmIG5vdCBhbHJlYWR5IHNvbWV0aGluZyBpdGVyYWJsZVxuICBpZiAodHlwZW9mIG9iaiAhPT0gJ29iamVjdCcpIHtcbiAgICAvKmVzbGludCBuby1wYXJhbS1yZWFzc2lnbjowKi9cbiAgICBvYmogPSBbb2JqXTtcbiAgfVxuXG4gIGlmIChpc0FycmF5KG9iaikpIHtcbiAgICAvLyBJdGVyYXRlIG92ZXIgYXJyYXkgdmFsdWVzXG4gICAgZm9yICh2YXIgaSA9IDAsIGwgPSBvYmoubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBmbi5jYWxsKG51bGwsIG9ialtpXSwgaSwgb2JqKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgLy8gSXRlcmF0ZSBvdmVyIG9iamVjdCBrZXlzXG4gICAgZm9yICh2YXIga2V5IGluIG9iaikge1xuICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIHtcbiAgICAgICAgZm4uY2FsbChudWxsLCBvYmpba2V5XSwga2V5LCBvYmopO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIEFjY2VwdHMgdmFyYXJncyBleHBlY3RpbmcgZWFjaCBhcmd1bWVudCB0byBiZSBhbiBvYmplY3QsIHRoZW5cbiAqIGltbXV0YWJseSBtZXJnZXMgdGhlIHByb3BlcnRpZXMgb2YgZWFjaCBvYmplY3QgYW5kIHJldHVybnMgcmVzdWx0LlxuICpcbiAqIFdoZW4gbXVsdGlwbGUgb2JqZWN0cyBjb250YWluIHRoZSBzYW1lIGtleSB0aGUgbGF0ZXIgb2JqZWN0IGluXG4gKiB0aGUgYXJndW1lbnRzIGxpc3Qgd2lsbCB0YWtlIHByZWNlZGVuY2UuXG4gKlxuICogRXhhbXBsZTpcbiAqXG4gKiBgYGBqc1xuICogdmFyIHJlc3VsdCA9IG1lcmdlKHtmb286IDEyM30sIHtmb286IDQ1Nn0pO1xuICogY29uc29sZS5sb2cocmVzdWx0LmZvbyk7IC8vIG91dHB1dHMgNDU2XG4gKiBgYGBcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqMSBPYmplY3QgdG8gbWVyZ2VcbiAqIEByZXR1cm5zIHtPYmplY3R9IFJlc3VsdCBvZiBhbGwgbWVyZ2UgcHJvcGVydGllc1xuICovXG5mdW5jdGlvbiBtZXJnZSgvKiBvYmoxLCBvYmoyLCBvYmozLCAuLi4gKi8pIHtcbiAgdmFyIHJlc3VsdCA9IHt9O1xuICBmdW5jdGlvbiBhc3NpZ25WYWx1ZSh2YWwsIGtleSkge1xuICAgIGlmICh0eXBlb2YgcmVzdWx0W2tleV0gPT09ICdvYmplY3QnICYmIHR5cGVvZiB2YWwgPT09ICdvYmplY3QnKSB7XG4gICAgICByZXN1bHRba2V5XSA9IG1lcmdlKHJlc3VsdFtrZXldLCB2YWwpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXN1bHRba2V5XSA9IHZhbDtcbiAgICB9XG4gIH1cblxuICBmb3IgKHZhciBpID0gMCwgbCA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBmb3JFYWNoKGFyZ3VtZW50c1tpXSwgYXNzaWduVmFsdWUpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogRXh0ZW5kcyBvYmplY3QgYSBieSBtdXRhYmx5IGFkZGluZyB0byBpdCB0aGUgcHJvcGVydGllcyBvZiBvYmplY3QgYi5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gYSBUaGUgb2JqZWN0IHRvIGJlIGV4dGVuZGVkXG4gKiBAcGFyYW0ge09iamVjdH0gYiBUaGUgb2JqZWN0IHRvIGNvcHkgcHJvcGVydGllcyBmcm9tXG4gKiBAcGFyYW0ge09iamVjdH0gdGhpc0FyZyBUaGUgb2JqZWN0IHRvIGJpbmQgZnVuY3Rpb24gdG9cbiAqIEByZXR1cm4ge09iamVjdH0gVGhlIHJlc3VsdGluZyB2YWx1ZSBvZiBvYmplY3QgYVxuICovXG5mdW5jdGlvbiBleHRlbmQoYSwgYiwgdGhpc0FyZykge1xuICBmb3JFYWNoKGIsIGZ1bmN0aW9uIGFzc2lnblZhbHVlKHZhbCwga2V5KSB7XG4gICAgaWYgKHRoaXNBcmcgJiYgdHlwZW9mIHZhbCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgYVtrZXldID0gYmluZCh2YWwsIHRoaXNBcmcpO1xuICAgIH0gZWxzZSB7XG4gICAgICBhW2tleV0gPSB2YWw7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIGE7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBpc0FycmF5OiBpc0FycmF5LFxuICBpc0FycmF5QnVmZmVyOiBpc0FycmF5QnVmZmVyLFxuICBpc0J1ZmZlcjogaXNCdWZmZXIsXG4gIGlzRm9ybURhdGE6IGlzRm9ybURhdGEsXG4gIGlzQXJyYXlCdWZmZXJWaWV3OiBpc0FycmF5QnVmZmVyVmlldyxcbiAgaXNTdHJpbmc6IGlzU3RyaW5nLFxuICBpc051bWJlcjogaXNOdW1iZXIsXG4gIGlzT2JqZWN0OiBpc09iamVjdCxcbiAgaXNVbmRlZmluZWQ6IGlzVW5kZWZpbmVkLFxuICBpc0RhdGU6IGlzRGF0ZSxcbiAgaXNGaWxlOiBpc0ZpbGUsXG4gIGlzQmxvYjogaXNCbG9iLFxuICBpc0Z1bmN0aW9uOiBpc0Z1bmN0aW9uLFxuICBpc1N0cmVhbTogaXNTdHJlYW0sXG4gIGlzVVJMU2VhcmNoUGFyYW1zOiBpc1VSTFNlYXJjaFBhcmFtcyxcbiAgaXNTdGFuZGFyZEJyb3dzZXJFbnY6IGlzU3RhbmRhcmRCcm93c2VyRW52LFxuICBmb3JFYWNoOiBmb3JFYWNoLFxuICBtZXJnZTogbWVyZ2UsXG4gIGV4dGVuZDogZXh0ZW5kLFxuICB0cmltOiB0cmltXG59O1xuXG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vbm9kZV9tb2R1bGVzL2lzLWJ1ZmZlci9pbmRleC5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9ub2RlX21vZHVsZXMvaXMtYnVmZmVyL2luZGV4LmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG4vKiFcbiAqIERldGVybWluZSBpZiBhbiBvYmplY3QgaXMgYSBCdWZmZXJcbiAqXG4gKiBAYXV0aG9yICAgRmVyb3NzIEFib3VraGFkaWplaCA8aHR0cHM6Ly9mZXJvc3Mub3JnPlxuICogQGxpY2Vuc2UgIE1JVFxuICovXG5cbi8vIFRoZSBfaXNCdWZmZXIgY2hlY2sgaXMgZm9yIFNhZmFyaSA1LTcgc3VwcG9ydCwgYmVjYXVzZSBpdCdzIG1pc3Npbmdcbi8vIE9iamVjdC5wcm90b3R5cGUuY29uc3RydWN0b3IuIFJlbW92ZSB0aGlzIGV2ZW50dWFsbHlcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG9iaikge1xuICByZXR1cm4gb2JqICE9IG51bGwgJiYgKGlzQnVmZmVyKG9iaikgfHwgaXNTbG93QnVmZmVyKG9iaikgfHwgISFvYmouX2lzQnVmZmVyKVxufVxuXG5mdW5jdGlvbiBpc0J1ZmZlciAob2JqKSB7XG4gIHJldHVybiAhIW9iai5jb25zdHJ1Y3RvciAmJiB0eXBlb2Ygb2JqLmNvbnN0cnVjdG9yLmlzQnVmZmVyID09PSAnZnVuY3Rpb24nICYmIG9iai5jb25zdHJ1Y3Rvci5pc0J1ZmZlcihvYmopXG59XG5cbi8vIEZvciBOb2RlIHYwLjEwIHN1cHBvcnQuIFJlbW92ZSB0aGlzIGV2ZW50dWFsbHkuXG5mdW5jdGlvbiBpc1Nsb3dCdWZmZXIgKG9iaikge1xuICByZXR1cm4gdHlwZW9mIG9iai5yZWFkRmxvYXRMRSA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2Ygb2JqLnNsaWNlID09PSAnZnVuY3Rpb24nICYmIGlzQnVmZmVyKG9iai5zbGljZSgwLCAwKSlcbn1cblxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL25vZGVfbW9kdWxlcy9wcm9jZXNzL2Jyb3dzZXIuanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vbm9kZV9tb2R1bGVzL3Byb2Nlc3MvYnJvd3Nlci5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxuLy8gc2hpbSBmb3IgdXNpbmcgcHJvY2VzcyBpbiBicm93c2VyXG52YXIgcHJvY2VzcyA9IG1vZHVsZS5leHBvcnRzID0ge307XG5cbi8vIGNhY2hlZCBmcm9tIHdoYXRldmVyIGdsb2JhbCBpcyBwcmVzZW50IHNvIHRoYXQgdGVzdCBydW5uZXJzIHRoYXQgc3R1YiBpdFxuLy8gZG9uJ3QgYnJlYWsgdGhpbmdzLiAgQnV0IHdlIG5lZWQgdG8gd3JhcCBpdCBpbiBhIHRyeSBjYXRjaCBpbiBjYXNlIGl0IGlzXG4vLyB3cmFwcGVkIGluIHN0cmljdCBtb2RlIGNvZGUgd2hpY2ggZG9lc24ndCBkZWZpbmUgYW55IGdsb2JhbHMuICBJdCdzIGluc2lkZSBhXG4vLyBmdW5jdGlvbiBiZWNhdXNlIHRyeS9jYXRjaGVzIGRlb3B0aW1pemUgaW4gY2VydGFpbiBlbmdpbmVzLlxuXG52YXIgY2FjaGVkU2V0VGltZW91dDtcbnZhciBjYWNoZWRDbGVhclRpbWVvdXQ7XG5cbmZ1bmN0aW9uIGRlZmF1bHRTZXRUaW1vdXQoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdzZXRUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG5mdW5jdGlvbiBkZWZhdWx0Q2xlYXJUaW1lb3V0ICgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2NsZWFyVGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuKGZ1bmN0aW9uICgpIHtcbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIHNldFRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIGNsZWFyVGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICB9XG59ICgpKVxuZnVuY3Rpb24gcnVuVGltZW91dChmdW4pIHtcbiAgICBpZiAoY2FjaGVkU2V0VGltZW91dCA9PT0gc2V0VGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgLy8gaWYgc2V0VGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZFNldFRpbWVvdXQgPT09IGRlZmF1bHRTZXRUaW1vdXQgfHwgIWNhY2hlZFNldFRpbWVvdXQpICYmIHNldFRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9IGNhdGNoKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0IHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKG51bGwsIGZ1biwgMCk7XG4gICAgICAgIH0gY2F0Y2goZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvclxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbCh0aGlzLCBmdW4sIDApO1xuICAgICAgICB9XG4gICAgfVxuXG5cbn1cbmZ1bmN0aW9uIHJ1bkNsZWFyVGltZW91dChtYXJrZXIpIHtcbiAgICBpZiAoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgLy8gaWYgY2xlYXJUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBkZWZhdWx0Q2xlYXJUaW1lb3V0IHx8ICFjYWNoZWRDbGVhclRpbWVvdXQpICYmIGNsZWFyVGltZW91dCkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfSBjYXRjaCAoZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgIHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwobnVsbCwgbWFya2VyKTtcbiAgICAgICAgfSBjYXRjaCAoZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvci5cbiAgICAgICAgICAgIC8vIFNvbWUgdmVyc2lvbnMgb2YgSS5FLiBoYXZlIGRpZmZlcmVudCBydWxlcyBmb3IgY2xlYXJUaW1lb3V0IHZzIHNldFRpbWVvdXRcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbCh0aGlzLCBtYXJrZXIpO1xuICAgICAgICB9XG4gICAgfVxuXG5cblxufVxudmFyIHF1ZXVlID0gW107XG52YXIgZHJhaW5pbmcgPSBmYWxzZTtcbnZhciBjdXJyZW50UXVldWU7XG52YXIgcXVldWVJbmRleCA9IC0xO1xuXG5mdW5jdGlvbiBjbGVhblVwTmV4dFRpY2soKSB7XG4gICAgaWYgKCFkcmFpbmluZyB8fCAhY3VycmVudFF1ZXVlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBpZiAoY3VycmVudFF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBxdWV1ZSA9IGN1cnJlbnRRdWV1ZS5jb25jYXQocXVldWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICB9XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBkcmFpblF1ZXVlKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBkcmFpblF1ZXVlKCkge1xuICAgIGlmIChkcmFpbmluZykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciB0aW1lb3V0ID0gcnVuVGltZW91dChjbGVhblVwTmV4dFRpY2spO1xuICAgIGRyYWluaW5nID0gdHJ1ZTtcblxuICAgIHZhciBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgd2hpbGUobGVuKSB7XG4gICAgICAgIGN1cnJlbnRRdWV1ZSA9IHF1ZXVlO1xuICAgICAgICBxdWV1ZSA9IFtdO1xuICAgICAgICB3aGlsZSAoKytxdWV1ZUluZGV4IDwgbGVuKSB7XG4gICAgICAgICAgICBpZiAoY3VycmVudFF1ZXVlKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudFF1ZXVlW3F1ZXVlSW5kZXhdLnJ1bigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICAgICAgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIH1cbiAgICBjdXJyZW50UXVldWUgPSBudWxsO1xuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgcnVuQ2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xufVxuXG5wcm9jZXNzLm5leHRUaWNrID0gZnVuY3Rpb24gKGZ1bikge1xuICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGggLSAxKTtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGFyZ3NbaSAtIDFdID0gYXJndW1lbnRzW2ldO1xuICAgICAgICB9XG4gICAgfVxuICAgIHF1ZXVlLnB1c2gobmV3IEl0ZW0oZnVuLCBhcmdzKSk7XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCA9PT0gMSAmJiAhZHJhaW5pbmcpIHtcbiAgICAgICAgcnVuVGltZW91dChkcmFpblF1ZXVlKTtcbiAgICB9XG59O1xuXG4vLyB2OCBsaWtlcyBwcmVkaWN0aWJsZSBvYmplY3RzXG5mdW5jdGlvbiBJdGVtKGZ1biwgYXJyYXkpIHtcbiAgICB0aGlzLmZ1biA9IGZ1bjtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG59XG5JdGVtLnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5mdW4uYXBwbHkobnVsbCwgdGhpcy5hcnJheSk7XG59O1xucHJvY2Vzcy50aXRsZSA9ICdicm93c2VyJztcbnByb2Nlc3MuYnJvd3NlciA9IHRydWU7XG5wcm9jZXNzLmVudiA9IHt9O1xucHJvY2Vzcy5hcmd2ID0gW107XG5wcm9jZXNzLnZlcnNpb24gPSAnJzsgLy8gZW1wdHkgc3RyaW5nIHRvIGF2b2lkIHJlZ2V4cCBpc3N1ZXNcbnByb2Nlc3MudmVyc2lvbnMgPSB7fTtcblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbnByb2Nlc3Mub24gPSBub29wO1xucHJvY2Vzcy5hZGRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLm9uY2UgPSBub29wO1xucHJvY2Vzcy5vZmYgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUFsbExpc3RlbmVycyA9IG5vb3A7XG5wcm9jZXNzLmVtaXQgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kT25jZUxpc3RlbmVyID0gbm9vcDtcblxucHJvY2Vzcy5saXN0ZW5lcnMgPSBmdW5jdGlvbiAobmFtZSkgeyByZXR1cm4gW10gfVxuXG5wcm9jZXNzLmJpbmRpbmcgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5iaW5kaW5nIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5cbnByb2Nlc3MuY3dkID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gJy8nIH07XG5wcm9jZXNzLmNoZGlyID0gZnVuY3Rpb24gKGRpcikge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5jaGRpciBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xucHJvY2Vzcy51bWFzayA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gMDsgfTtcblxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL3NyYy9jaGFubmVscy9jaGFubmVsLmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9zcmMvY2hhbm5lbHMvY2hhbm5lbC5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIGV4cG9ydHMgcHJvdmlkZWQ6IENoYW5uZWwgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIF9fd2VicGFja19leHBvcnRzX18sIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIoX193ZWJwYWNrX2V4cG9ydHNfXyk7XG4vKiBoYXJtb255IGV4cG9ydCAoYmluZGluZykgKi8gX193ZWJwYWNrX3JlcXVpcmVfXy5kKF9fd2VicGFja19leHBvcnRzX18sIFwiQ2hhbm5lbFwiLCBmdW5jdGlvbigpIHsgcmV0dXJuIENoYW5uZWw7IH0pO1xuLyogaGFybW9ueSBpbXBvcnQgKi8gdmFyIF9ldmVudHNfZGlzcGF0Y2hlcl9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi4vZXZlbnRzL2Rpc3BhdGNoZXIgKi8gXCIuL3NyYy9ldmVudHMvZGlzcGF0Y2hlci5qc1wiKTtcbmZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH07IH0gZWxzZSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTsgfSByZXR1cm4gX3R5cGVvZihvYmopOyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoY2FsbCAmJiAoX3R5cGVvZihjYWxsKSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSkgeyByZXR1cm4gY2FsbDsgfSByZXR1cm4gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKTsgfVxuXG5mdW5jdGlvbiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpIHsgaWYgKHNlbGYgPT09IHZvaWQgMCkgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIHNlbGY7IH1cblxuZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgX2dldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LmdldFByb3RvdHlwZU9mIDogZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgcmV0dXJuIG8uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihvKTsgfTsgcmV0dXJuIF9nZXRQcm90b3R5cGVPZihvKTsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgX3NldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKTsgfVxuXG5mdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgby5fX3Byb3RvX18gPSBwOyByZXR1cm4gbzsgfTsgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihvLCBwKTsgfVxuXG5cbnZhciBDaGFubmVsID1cbi8qI19fUFVSRV9fKi9cbmZ1bmN0aW9uIChfRGlzcGF0Y2hlcikge1xuICBfaW5oZXJpdHMoQ2hhbm5lbCwgX0Rpc3BhdGNoZXIpO1xuXG4gIGZ1bmN0aW9uIENoYW5uZWwobmFtZSwgcHVzaGVyKSB7XG4gICAgdmFyIF90aGlzO1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIENoYW5uZWwpO1xuXG4gICAgX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfZ2V0UHJvdG90eXBlT2YoQ2hhbm5lbCkuY2FsbCh0aGlzKSk7XG4gICAgX3RoaXMubmFtZSA9IG5hbWU7XG4gICAgX3RoaXMucHVzaGVyID0gcHVzaGVyO1xuXG4gICAgaWYgKF90aGlzLnB1c2hlci5zb2NrZXQuc3RhdGUgPT0gMSkge1xuICAgICAgX3RoaXMuc3Vic2NyaWJlKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKENoYW5uZWwsIFt7XG4gICAga2V5OiBcInN1YnNjcmliZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzdWJzY3JpYmUoKSB7XG4gICAgICB0aGlzLnB1c2hlci5zZW5kKHtcbiAgICAgICAgZXZlbnQ6ICdzdWJzY3JpYmUnLFxuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgY2hhbm5lbDogdGhpcy5uYW1lXG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBDaGFubmVsO1xufShfZXZlbnRzX2Rpc3BhdGNoZXJfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfX1tcIkRpc3BhdGNoZXJcIl0pO1xuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL3NyYy9jaGFubmVscy9tYW5uYWdlci5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL3NyYy9jaGFubmVscy9tYW5uYWdlci5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBleHBvcnRzIHByb3ZpZGVkOiBNYW5uYWdlciAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgX193ZWJwYWNrX2V4cG9ydHNfXywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcbl9fd2VicGFja19yZXF1aXJlX18ucihfX3dlYnBhY2tfZXhwb3J0c19fKTtcbi8qIGhhcm1vbnkgZXhwb3J0IChiaW5kaW5nKSAqLyBfX3dlYnBhY2tfcmVxdWlyZV9fLmQoX193ZWJwYWNrX2V4cG9ydHNfXywgXCJNYW5uYWdlclwiLCBmdW5jdGlvbigpIHsgcmV0dXJuIE1hbm5hZ2VyOyB9KTtcbi8qIGhhcm1vbnkgaW1wb3J0ICovIHZhciBfY2hhbm5lbF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9jaGFubmVsICovIFwiLi9zcmMvY2hhbm5lbHMvY2hhbm5lbC5qc1wiKTtcbi8qIGhhcm1vbnkgaW1wb3J0ICovIHZhciBfcHJlc2VuY2VfY2hhbm5lbF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMV9fID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9wcmVzZW5jZV9jaGFubmVsICovIFwiLi9zcmMvY2hhbm5lbHMvcHJlc2VuY2VfY2hhbm5lbC5qc1wiKTtcbi8qIGhhcm1vbnkgaW1wb3J0ICovIHZhciBfcHJpdmF0ZV9jaGFubmVsX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8yX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL3ByaXZhdGVfY2hhbm5lbCAqLyBcIi4vc3JjL2NoYW5uZWxzL3ByaXZhdGVfY2hhbm5lbC5qc1wiKTtcbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH1cblxuXG5cblxudmFyIE1hbm5hZ2VyID1cbi8qI19fUFVSRV9fKi9cbmZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gTWFubmFnZXIoKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIE1hbm5hZ2VyKTtcblxuICAgIHRoaXMuY2hhbm5lbHMgPSB7fTtcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhNYW5uYWdlciwgW3tcbiAgICBrZXk6IFwiYWRkXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGFkZChuYW1lLCBwdXNoZXIpIHtcbiAgICAgIGlmICghdGhpcy5jaGFubmVsc1tuYW1lXSkge1xuICAgICAgICB0aGlzLmNoYW5uZWxzW25hbWVdID0gY3JlYXRlQ2hhbm5lbChuYW1lLCBwdXNoZXIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5jaGFubmVsc1tuYW1lXTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiYWxsXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGFsbCgpIHtcbiAgICAgIHJldHVybiBPYmplY3Qua2V5cyh0aGlzLmNoYW5uZWxzKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZmluZFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBmaW5kKG5hbWUpIHtcbiAgICAgIHJldHVybiB0aGlzLmNoYW5uZWxzW25hbWVdO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJyZW1vdmVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVtb3ZlKG5hbWUpIHtcbiAgICAgIHZhciBjaGFubmVsID0gdGhpcy5jaGFubmVsc1tuYW1lXTtcbiAgICAgIGRlbGV0ZSB0aGlzLmNoYW5uZWxzW25hbWVdO1xuICAgICAgcmV0dXJuIGNoYW5uZWw7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInN1YnNjcmliZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzdWJzY3JpYmUoKSB7XG4gICAgICBmb3IgKHZhciBpIGluIHRoaXMuY2hhbm5lbHMpIHtcbiAgICAgICAgdGhpcy5jaGFubmVsc1tpXS5zdWJzY3JpYmUoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gTWFubmFnZXI7XG59KCk7XG5cbmZ1bmN0aW9uIGNyZWF0ZUNoYW5uZWwobmFtZSwgcHVzaGVyKSB7XG4gIGlmIChuYW1lLmluZGV4T2YoJ3ByaXZhdGUtJykgPT09IDApIHtcbiAgICByZXR1cm4gbmV3IF9wcml2YXRlX2NoYW5uZWxfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzJfX1tcIlByaXZhdGVDaGFubmVsXCJdKG5hbWUsIHB1c2hlcik7XG4gIH0gZWxzZSBpZiAobmFtZS5pbmRleE9mKCdwcmVzZW5jZS0nKSA9PT0gMCkge1xuICAgIHJldHVybiBuZXcgX3ByZXNlbmNlX2NoYW5uZWxfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzFfX1tcIlByZXNlbmNlQ2hhbm5lbFwiXShuYW1lLCBwdXNoZXIpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBuZXcgX2NoYW5uZWxfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfX1tcIkNoYW5uZWxcIl0obmFtZSwgcHVzaGVyKTtcbiAgfVxufVxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL3NyYy9jaGFubmVscy9wcmVzZW5jZV9jaGFubmVsLmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9zcmMvY2hhbm5lbHMvcHJlc2VuY2VfY2hhbm5lbC5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIGV4cG9ydHMgcHJvdmlkZWQ6IFByZXNlbmNlQ2hhbm5lbCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgX193ZWJwYWNrX2V4cG9ydHNfXywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcbl9fd2VicGFja19yZXF1aXJlX18ucihfX3dlYnBhY2tfZXhwb3J0c19fKTtcbi8qIGhhcm1vbnkgZXhwb3J0IChiaW5kaW5nKSAqLyBfX3dlYnBhY2tfcmVxdWlyZV9fLmQoX193ZWJwYWNrX2V4cG9ydHNfXywgXCJQcmVzZW5jZUNoYW5uZWxcIiwgZnVuY3Rpb24oKSB7IHJldHVybiBQcmVzZW5jZUNoYW5uZWw7IH0pO1xuLyogaGFybW9ueSBpbXBvcnQgKi8gdmFyIF9ldmVudHNfZGlzcGF0Y2hlcl9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi4vZXZlbnRzL2Rpc3BhdGNoZXIgKi8gXCIuL3NyYy9ldmVudHMvZGlzcGF0Y2hlci5qc1wiKTtcbmZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH07IH0gZWxzZSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTsgfSByZXR1cm4gX3R5cGVvZihvYmopOyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoY2FsbCAmJiAoX3R5cGVvZihjYWxsKSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSkgeyByZXR1cm4gY2FsbDsgfSByZXR1cm4gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKTsgfVxuXG5mdW5jdGlvbiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpIHsgaWYgKHNlbGYgPT09IHZvaWQgMCkgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIHNlbGY7IH1cblxuZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgX2dldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LmdldFByb3RvdHlwZU9mIDogZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgcmV0dXJuIG8uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihvKTsgfTsgcmV0dXJuIF9nZXRQcm90b3R5cGVPZihvKTsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgX3NldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKTsgfVxuXG5mdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgby5fX3Byb3RvX18gPSBwOyByZXR1cm4gbzsgfTsgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihvLCBwKTsgfVxuXG5cbnZhciBQcmVzZW5jZUNoYW5uZWwgPVxuLyojX19QVVJFX18qL1xuZnVuY3Rpb24gKF9EaXNwYXRjaGVyKSB7XG4gIF9pbmhlcml0cyhQcmVzZW5jZUNoYW5uZWwsIF9EaXNwYXRjaGVyKTtcblxuICBmdW5jdGlvbiBQcmVzZW5jZUNoYW5uZWwobmFtZSwgcHVzaGVyKSB7XG4gICAgdmFyIF90aGlzO1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFByZXNlbmNlQ2hhbm5lbCk7XG5cbiAgICBfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9nZXRQcm90b3R5cGVPZihQcmVzZW5jZUNoYW5uZWwpLmNhbGwodGhpcykpO1xuICAgIF90aGlzLm5hbWUgPSBuYW1lO1xuICAgIF90aGlzLnB1c2hlciA9IHB1c2hlcjtcbiAgICBfdGhpcy5hdXRoID0gbnVsbDtcblxuICAgIGlmIChfdGhpcy5wdXNoZXIuc29ja2V0LnN0YXRlID09IDEpIHtcbiAgICAgIF90aGlzLnN1YnNjcmliZSgpO1xuICAgIH1cblxuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhQcmVzZW5jZUNoYW5uZWwsIFt7XG4gICAga2V5OiBcInN1YnNjcmliZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzdWJzY3JpYmUoKSB7XG4gICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgdGhpcy5wdXNoZXIuYXV0aCh0aGlzLm5hbWUsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIF90aGlzMi5hdXRoID0gZS5kYXRhLmF1dGg7XG5cbiAgICAgICAgX3RoaXMyLnB1c2hlci5zZW5kKHtcbiAgICAgICAgICBldmVudDogJ3N1YnNjcmliZScsXG4gICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgY2hhbm5lbDogX3RoaXMyLm5hbWUsXG4gICAgICAgICAgICBhdXRoOiBfdGhpczIuYXV0aCxcbiAgICAgICAgICAgIGNoYW5uZWxfZGF0YTogZS5kYXRhLmNoYW5uZWxfZGF0YVxuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gUHJlc2VuY2VDaGFubmVsO1xufShfZXZlbnRzX2Rpc3BhdGNoZXJfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfX1tcIkRpc3BhdGNoZXJcIl0pO1xuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL3NyYy9jaGFubmVscy9wcml2YXRlX2NoYW5uZWwuanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vc3JjL2NoYW5uZWxzL3ByaXZhdGVfY2hhbm5lbC5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgZXhwb3J0cyBwcm92aWRlZDogUHJpdmF0ZUNoYW5uZWwgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIF9fd2VicGFja19leHBvcnRzX18sIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIoX193ZWJwYWNrX2V4cG9ydHNfXyk7XG4vKiBoYXJtb255IGV4cG9ydCAoYmluZGluZykgKi8gX193ZWJwYWNrX3JlcXVpcmVfXy5kKF9fd2VicGFja19leHBvcnRzX18sIFwiUHJpdmF0ZUNoYW5uZWxcIiwgZnVuY3Rpb24oKSB7IHJldHVybiBQcml2YXRlQ2hhbm5lbDsgfSk7XG4vKiBoYXJtb255IGltcG9ydCAqLyB2YXIgX2V2ZW50c19kaXNwYXRjaGVyX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuLi9ldmVudHMvZGlzcGF0Y2hlciAqLyBcIi4vc3JjL2V2ZW50cy9kaXNwYXRjaGVyLmpzXCIpO1xuZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfTsgfSBlbHNlIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9OyB9IHJldHVybiBfdHlwZW9mKG9iaik7IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfVxuXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmIChjYWxsICYmIChfdHlwZW9mKGNhbGwpID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpKSB7IHJldHVybiBjYWxsOyB9IHJldHVybiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpOyB9XG5cbmZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikgeyBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gc2VsZjsgfVxuXG5mdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyBfZ2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3QuZ2V0UHJvdG90eXBlT2YgOiBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyByZXR1cm4gby5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKG8pOyB9OyByZXR1cm4gX2dldFByb3RvdHlwZU9mKG8pOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBfc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpOyB9XG5cbmZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBvLl9fcHJvdG9fXyA9IHA7IHJldHVybiBvOyB9OyByZXR1cm4gX3NldFByb3RvdHlwZU9mKG8sIHApOyB9XG5cblxudmFyIFByaXZhdGVDaGFubmVsID1cbi8qI19fUFVSRV9fKi9cbmZ1bmN0aW9uIChfRGlzcGF0Y2hlcikge1xuICBfaW5oZXJpdHMoUHJpdmF0ZUNoYW5uZWwsIF9EaXNwYXRjaGVyKTtcblxuICBmdW5jdGlvbiBQcml2YXRlQ2hhbm5lbChuYW1lLCBwdXNoZXIpIHtcbiAgICB2YXIgX3RoaXM7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgUHJpdmF0ZUNoYW5uZWwpO1xuXG4gICAgX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfZ2V0UHJvdG90eXBlT2YoUHJpdmF0ZUNoYW5uZWwpLmNhbGwodGhpcykpO1xuICAgIF90aGlzLm5hbWUgPSBuYW1lO1xuICAgIF90aGlzLnB1c2hlciA9IHB1c2hlcjtcbiAgICBfdGhpcy5hdXRoID0gbnVsbDtcblxuICAgIGlmIChfdGhpcy5wdXNoZXIuc29ja2V0LnN0YXRlID09IDEpIHtcbiAgICAgIF90aGlzLnN1YnNjcmliZSgpO1xuICAgIH1cblxuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhQcml2YXRlQ2hhbm5lbCwgW3tcbiAgICBrZXk6IFwic3Vic2NyaWJlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHN1YnNjcmliZSgpIHtcbiAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICB0aGlzLnB1c2hlci5hdXRoKHRoaXMubmFtZSwgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgX3RoaXMyLmF1dGggPSBlLmRhdGEuYXV0aDtcblxuICAgICAgICBfdGhpczIucHVzaGVyLnNlbmQoe1xuICAgICAgICAgIGV2ZW50OiAnc3Vic2NyaWJlJyxcbiAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICBjaGFubmVsOiBfdGhpczIubmFtZSxcbiAgICAgICAgICAgIGF1dGg6IF90aGlzMi5hdXRoXG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBQcml2YXRlQ2hhbm5lbDtcbn0oX2V2ZW50c19kaXNwYXRjaGVyX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX19bXCJEaXNwYXRjaGVyXCJdKTtcblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9zcmMvY29ubmVjdGlvbi9zb2NrZXQuanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9zcmMvY29ubmVjdGlvbi9zb2NrZXQuanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgZXhwb3J0cyBwcm92aWRlZDogU29ja2V0ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBfX3dlYnBhY2tfZXhwb3J0c19fLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yKF9fd2VicGFja19leHBvcnRzX18pO1xuLyogaGFybW9ueSBleHBvcnQgKGJpbmRpbmcpICovIF9fd2VicGFja19yZXF1aXJlX18uZChfX3dlYnBhY2tfZXhwb3J0c19fLCBcIlNvY2tldFwiLCBmdW5jdGlvbigpIHsgcmV0dXJuIFNvY2tldDsgfSk7XG4vKiBoYXJtb255IGltcG9ydCAqLyB2YXIgX2V2ZW50c19kaXNwYXRjaGVyX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuLi9ldmVudHMvZGlzcGF0Y2hlciAqLyBcIi4vc3JjL2V2ZW50cy9kaXNwYXRjaGVyLmpzXCIpO1xuZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfTsgfSBlbHNlIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9OyB9IHJldHVybiBfdHlwZW9mKG9iaik7IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfVxuXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmIChjYWxsICYmIChfdHlwZW9mKGNhbGwpID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpKSB7IHJldHVybiBjYWxsOyB9IHJldHVybiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpOyB9XG5cbmZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikgeyBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gc2VsZjsgfVxuXG5mdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyBfZ2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3QuZ2V0UHJvdG90eXBlT2YgOiBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyByZXR1cm4gby5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKG8pOyB9OyByZXR1cm4gX2dldFByb3RvdHlwZU9mKG8pOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBfc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpOyB9XG5cbmZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBvLl9fcHJvdG9fXyA9IHA7IHJldHVybiBvOyB9OyByZXR1cm4gX3NldFByb3RvdHlwZU9mKG8sIHApOyB9XG5cblxudmFyIFNvY2tldCA9XG4vKiNfX1BVUkVfXyovXG5mdW5jdGlvbiAoX0Rpc3BhdGNoZXIpIHtcbiAgX2luaGVyaXRzKFNvY2tldCwgX0Rpc3BhdGNoZXIpO1xuXG4gIGZ1bmN0aW9uIFNvY2tldChwdXNoZXIsIGhvc3QpIHtcbiAgICB2YXIgX3RoaXM7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgU29ja2V0KTtcblxuICAgIF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX2dldFByb3RvdHlwZU9mKFNvY2tldCkuY2FsbCh0aGlzKSk7XG4gICAgX3RoaXMucHVzaGVyID0gcHVzaGVyO1xuICAgIF90aGlzLnNvY2tldCA9IG5ldyBXZWJTb2NrZXQoaG9zdCArICcvJyArIF90aGlzLnB1c2hlci5rZXkpO1xuXG4gICAgX3RoaXMuYmluZExpc3RlbmVycygpO1xuXG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKFNvY2tldCwgW3tcbiAgICBrZXk6IFwiYmluZExpc3RlbmVyc1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBiaW5kTGlzdGVuZXJzKCkge1xuICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgIHRoaXMuc29ja2V0Lm9ub3BlbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgX3RoaXMyLm9uT3BlbigpO1xuICAgICAgfTtcblxuICAgICAgdGhpcy5zb2NrZXQub25lcnJvciA9IGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICBfdGhpczIub25FcnJvcihlcnJvcik7XG4gICAgICB9O1xuXG4gICAgICB0aGlzLnNvY2tldC5vbmNsb3NlID0gZnVuY3Rpb24gKGNsb3NlRXZlbnQpIHtcbiAgICAgICAgX3RoaXMyLm9uQ2xvc2UoY2xvc2VFdmVudCk7XG4gICAgICB9O1xuXG4gICAgICB0aGlzLnNvY2tldC5vbm1lc3NhZ2UgPSBmdW5jdGlvbiAobWVzc2FnZSkge1xuICAgICAgICBfdGhpczIub25NZXNzYWdlKG1lc3NhZ2UpO1xuICAgICAgfTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwib25PcGVuXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG9uT3BlbigpIHtcbiAgICAgIHZhciBfdGhpczMgPSB0aGlzO1xuXG4gICAgICAvL+WIneWni+eKtuaAgVxuICAgICAgdGhpcy5zdGF0ZSA9IDA7XG4gICAgICB0aGlzLmJpbmQoJ2Nvbm5lY3RlZCcsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIF90aGlzMy5zb2NrZXQuc29ja2V0X2lkID0gZS5zb2NrZXRfaWQ7XG4gICAgICAgIF90aGlzMy5zdGF0ZSA9IDE7IC8v6K6i6ZiFXG5cbiAgICAgICAgX3RoaXMzLnB1c2hlci5jaGFubmVscy5zdWJzY3JpYmUoKTtcbiAgICAgIH0pO1xuICAgICAgdGhpcy5iaW5kKCdjb25uZWN0aW9uX2ZhaWxlZCcsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIF90aGlzMy5zdGF0ZSA9IC0xO1xuICAgICAgICBjb25zb2xlLmVycm9yKGUuZXJyb3IpO1xuICAgICAgfSk7XG4gICAgICAvKnRoaXMuc2VuZCh7XHJcbiAgICAgICAgICBldmVudDogJ2F1dGhvcml6YXRpb24nXHJcbiAgICAgIH0pOyovXG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcIm9uRXJyb3JcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gb25FcnJvcihlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcIm9uQ2xvc2VcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gb25DbG9zZShjbG9zZUV2ZW50KSB7XG4gICAgICBpZiAodGhpcy5zb2NrZXQucmVhZHlTdGF0ZSA9PSBXZWJTb2NrZXQuQ0xPU0VEKSB7XG4gICAgICAgIGlmIChjbG9zZUV2ZW50LnR5cGUgPT0gJ2Nsb3NlJykge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ3NvY2tldOacjeWKoeW3suaWreW8gCEhJyk7XG4gICAgICAgIH0gZWxzZSBpZiAoY2xvc2VFdmVudC50eXBlID09ICdtZXNzYWdlJykge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoY2xvc2VFdmVudC5kYXRhKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCflt7Lmlq3lvIAhIScpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcIm9uTWVzc2FnZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBvbk1lc3NhZ2UobWVzc2FnZSkge1xuICAgICAgdmFyIGVEYXRhID0gSlNPTi5wYXJzZShtZXNzYWdlLmRhdGEpO1xuICAgICAgdmFyIGV2ZW50ID0gZURhdGEuZXZlbnQ7XG4gICAgICB2YXIgZGF0YSA9IGVEYXRhLmRhdGE7XG5cbiAgICAgIGlmIChlRGF0YS5jaGFubmVsICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdGhpcy5wdXNoZXIuY2hhbm5lbHMuZmluZChlRGF0YS5jaGFubmVsKS5lbWl0KGV2ZW50LCBkYXRhKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuZW1pdChldmVudCwgZGF0YSk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInNlbmRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2VuZChqc29uKSB7XG4gICAgICBpZiAodGhpcy5zdGF0ZSAhPT0gLTEpIHtcbiAgICAgICAgdGhpcy5zb2NrZXQuc2VuZChKU09OLnN0cmluZ2lmeShqc29uKSk7XG4gICAgICB9XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIFNvY2tldDtcbn0oX2V2ZW50c19kaXNwYXRjaGVyX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX19bXCJEaXNwYXRjaGVyXCJdKTtcblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9zcmMvZXZlbnRzL2NhbGxiYWNrX3JlZ2lzdHJ5LmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL3NyYy9ldmVudHMvY2FsbGJhY2tfcmVnaXN0cnkuanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIGV4cG9ydHMgcHJvdmlkZWQ6IENhbGxiYWNrUmVnaXN0cnkgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIF9fd2VicGFja19leHBvcnRzX18sIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIoX193ZWJwYWNrX2V4cG9ydHNfXyk7XG4vKiBoYXJtb255IGV4cG9ydCAoYmluZGluZykgKi8gX193ZWJwYWNrX3JlcXVpcmVfXy5kKF9fd2VicGFja19leHBvcnRzX18sIFwiQ2FsbGJhY2tSZWdpc3RyeVwiLCBmdW5jdGlvbigpIHsgcmV0dXJuIENhbGxiYWNrUmVnaXN0cnk7IH0pO1xuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfVxuXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfVxuXG52YXIgQ2FsbGJhY2tSZWdpc3RyeSA9XG4vKiNfX1BVUkVfXyovXG5mdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIENhbGxiYWNrUmVnaXN0cnkoKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIENhbGxiYWNrUmVnaXN0cnkpO1xuXG4gICAgdGhpcy5fY2FsbGJhY2tzID0ge307XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoQ2FsbGJhY2tSZWdpc3RyeSwgW3tcbiAgICBrZXk6IFwiZ2V0XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldChuYW1lKSB7XG4gICAgICByZXR1cm4gdGhpcy5fY2FsbGJhY2tzW3ByZWZpeChuYW1lKV07XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImFkZFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBhZGQobmFtZSwgY2FsbGJhY2ssIGNvbnRleHQpIHtcbiAgICAgIHZhciBwcmVmaXhlZEV2ZW50TmFtZSA9IHByZWZpeChuYW1lKTtcbiAgICAgIHRoaXMuX2NhbGxiYWNrc1twcmVmaXhlZEV2ZW50TmFtZV0gPSB0aGlzLl9jYWxsYmFja3NbcHJlZml4ZWRFdmVudE5hbWVdIHx8IFtdO1xuXG4gICAgICB0aGlzLl9jYWxsYmFja3NbcHJlZml4ZWRFdmVudE5hbWVdLnB1c2goe1xuICAgICAgICBmbjogY2FsbGJhY2ssXG4gICAgICAgIGNvbnRleHQ6IGNvbnRleHRcbiAgICAgIH0pO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJyZW1vdmVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVtb3ZlKG5hbWUsIGNhbGxiYWNrLCBjb250ZXh0KSB7XG4gICAgICBpZiAoIW5hbWUgJiYgIWNhbGxiYWNrICYmICFjb250ZXh0KSB7XG4gICAgICAgIHRoaXMuX2NhbGxiYWNrcyA9IHt9O1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHZhciBuYW1lcyA9IG5hbWUgPyBbcHJlZml4KG5hbWUpXSA6IE9iamVjdC5rZXlzKHRoaXMuX2NhbGxiYWNrcyk7XG5cbiAgICAgIGlmIChjYWxsYmFjayB8fCBjb250ZXh0KSB7XG4gICAgICAgIHRoaXMucmVtb3ZlQ2FsbGJhY2sobmFtZXMsIGNhbGxiYWNrLCBjb250ZXh0KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMucmVtb3ZlQWxsQ2FsbGJhY2tzKG5hbWVzKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwicmVtb3ZlQ2FsbGJhY2tcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVtb3ZlQ2FsbGJhY2sobmFtZXMsIGNhbGxiYWNrLCBjb250ZXh0KSB7XG4gICAgICBmb3IgKHZhciBuYW1lIGluIG5hbWVzKSB7XG4gICAgICAgIGZvciAodmFyIGtleSBpbiB0aGlzLl9jYWxsYmFja3NbbmFtZV0pIHtcbiAgICAgICAgICBpZiAodGhpcy5fY2FsbGJhY2tzW25hbWVdW2tleV0uZm4gPT0gY2FsbGJhY2sgfHwgdGhpcy5fY2FsbGJhY2tzW25hbWVdW2tleV0uY29udGV4dCA9PSBjb250ZXh0KSB7XG4gICAgICAgICAgICBkZWxldGUgdGhpcy5fY2FsbGJhY2tzW25hbWVdW2tleV07XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuX2NhbGxiYWNrc1tuYW1lXS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICBkZWxldGUgdGhpcy5fY2FsbGJhY2tzW25hbWVdO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInJlbW92ZUFsbENhbGxiYWNrc1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW1vdmVBbGxDYWxsYmFja3MobmFtZXMpIHtcbiAgICAgIGZvciAodmFyIG5hbWUgaW4gbmFtZXMpIHtcbiAgICAgICAgZGVsZXRlIHRoaXMuX2NhbGxiYWNrc1tuYW1lXTtcbiAgICAgIH1cbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gQ2FsbGJhY2tSZWdpc3RyeTtcbn0oKTtcblxuZnVuY3Rpb24gcHJlZml4KG5hbWUpIHtcbiAgcmV0dXJuIFwiX1wiICsgbmFtZTtcbn1cblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9zcmMvZXZlbnRzL2Rpc3BhdGNoZXIuanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9zcmMvZXZlbnRzL2Rpc3BhdGNoZXIuanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgZXhwb3J0cyBwcm92aWRlZDogRGlzcGF0Y2hlciAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgX193ZWJwYWNrX2V4cG9ydHNfXywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcbl9fd2VicGFja19yZXF1aXJlX18ucihfX3dlYnBhY2tfZXhwb3J0c19fKTtcbi8qIGhhcm1vbnkgZXhwb3J0IChiaW5kaW5nKSAqLyBfX3dlYnBhY2tfcmVxdWlyZV9fLmQoX193ZWJwYWNrX2V4cG9ydHNfXywgXCJEaXNwYXRjaGVyXCIsIGZ1bmN0aW9uKCkgeyByZXR1cm4gRGlzcGF0Y2hlcjsgfSk7XG4vKiBoYXJtb255IGltcG9ydCAqLyB2YXIgX2NhbGxiYWNrX3JlZ2lzdHJ5X19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL2NhbGxiYWNrX3JlZ2lzdHJ5ICovIFwiLi9zcmMvZXZlbnRzL2NhbGxiYWNrX3JlZ2lzdHJ5LmpzXCIpO1xuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfVxuXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfVxuXG5cbnZhciBEaXNwYXRjaGVyID1cbi8qI19fUFVSRV9fKi9cbmZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gRGlzcGF0Y2hlcigpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgRGlzcGF0Y2hlcik7XG5cbiAgICB0aGlzLmNhbGxiYWNrcyA9IG5ldyBfY2FsbGJhY2tfcmVnaXN0cnlfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfX1tcIkNhbGxiYWNrUmVnaXN0cnlcIl0oKTtcbiAgICB0aGlzLmdsb2JhbF9jYWxsYmFja3MgPSBbXTtcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhEaXNwYXRjaGVyLCBbe1xuICAgIGtleTogXCJiaW5kXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGJpbmQoZXZlbnROYW1lLCBjYWxsYmFjaywgY29udGV4dCkge1xuICAgICAgdGhpcy5jYWxsYmFja3MuYWRkKGV2ZW50TmFtZSwgY2FsbGJhY2ssIGNvbnRleHQpO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImJpbmRfZ2xvYmFsXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGJpbmRfZ2xvYmFsKGNhbGxiYWNrKSB7XG4gICAgICB0aGlzLmdsb2JhbF9jYWxsYmFja3MucHVzaChjYWxsYmFjayk7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwidW5iaW5kXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHVuYmluZChldmVudE5hbWUsIGNhbGxiYWNrLCBjb250ZXh0KSB7XG4gICAgICB0aGlzLmNhbGxiYWNrcy5yZW1vdmUoZXZlbnROYW1lLCBjYWxsYmFjaywgY29udGV4dCk7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwidW5iaW5kX2dsb2JhbFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiB1bmJpbmRfZ2xvYmFsKGNhbGxiYWNrKSB7XG4gICAgICBpZiAoIWNhbGxiYWNrKSB7XG4gICAgICAgIHRoaXMuZ2xvYmFsX2NhbGxiYWNrcyA9IFtdO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgIH1cblxuICAgICAgZm9yICh2YXIgaSBpbiB0aGlzLmdsb2JhbF9jYWxsYmFja3MpIHtcbiAgICAgICAgaWYgKGNhbGxiYWNrID09IHRoaXMuZ2xvYmFsX2NhbGxiYWNrc1tpXSkge1xuICAgICAgICAgIGRlbGV0ZSB0aGlzLmdsb2JhbF9jYWxsYmFja3NbaV07XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInVuYmluZF9hbGxcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gdW5iaW5kX2FsbCgpIHtcbiAgICAgIHRoaXMudW5iaW5kKCk7XG4gICAgICB0aGlzLnVuYmluZF9nbG9iYWwoKTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJlbWl0XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGVtaXQoZXZlbnROYW1lLCBkYXRhKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuZ2xvYmFsX2NhbGxiYWNrcy5sZW5ndGg7IGkrKykge1xuICAgICAgICB0aGlzLmdsb2JhbF9jYWxsYmFja3NbaV0oZXZlbnROYW1lLCBkYXRhKTtcbiAgICAgIH1cblxuICAgICAgdmFyIGNhbGxiYWNrcyA9IHRoaXMuY2FsbGJhY2tzLmdldChldmVudE5hbWUpO1xuXG4gICAgICBpZiAoY2FsbGJhY2tzICYmIGNhbGxiYWNrcy5sZW5ndGggPiAwKSB7XG4gICAgICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBjYWxsYmFja3MubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgY2FsbGJhY2tzW19pXS5mbi5jYWxsKGNhbGxiYWNrc1tfaV0uY29udGV4dCwgZGF0YSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIERpc3BhdGNoZXI7XG59KCk7XG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vc3JjL3B1c2hlci5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9zcmMvcHVzaGVyLmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBleHBvcnRzIHByb3ZpZGVkOiBQdXNoZXIgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIF9fd2VicGFja19leHBvcnRzX18sIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIoX193ZWJwYWNrX2V4cG9ydHNfXyk7XG4vKiBoYXJtb255IGV4cG9ydCAoYmluZGluZykgKi8gX193ZWJwYWNrX3JlcXVpcmVfXy5kKF9fd2VicGFja19leHBvcnRzX18sIFwiUHVzaGVyXCIsIGZ1bmN0aW9uKCkgeyByZXR1cm4gUHVzaGVyOyB9KTtcbi8qIGhhcm1vbnkgaW1wb3J0ICovIHZhciBfY29ubmVjdGlvbl9zb2NrZXRfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfXyA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vY29ubmVjdGlvbi9zb2NrZXQgKi8gXCIuL3NyYy9jb25uZWN0aW9uL3NvY2tldC5qc1wiKTtcbi8qIGhhcm1vbnkgaW1wb3J0ICovIHZhciBfZXZlbnRzX2Rpc3BhdGNoZXJfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzFfXyA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vZXZlbnRzL2Rpc3BhdGNoZXIgKi8gXCIuL3NyYy9ldmVudHMvZGlzcGF0Y2hlci5qc1wiKTtcbi8qIGhhcm1vbnkgaW1wb3J0ICovIHZhciBfY2hhbm5lbHNfbWFubmFnZXJfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzJfXyA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vY2hhbm5lbHMvbWFubmFnZXIgKi8gXCIuL3NyYy9jaGFubmVscy9tYW5uYWdlci5qc1wiKTtcbi8qIGhhcm1vbnkgaW1wb3J0ICovIHZhciBheGlvc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfM19fID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgYXhpb3MgKi8gXCIuL25vZGVfbW9kdWxlcy9heGlvcy9pbmRleC5qc1wiKTtcbi8qIGhhcm1vbnkgaW1wb3J0ICovIHZhciBheGlvc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfM19fX2RlZmF1bHQgPSAvKiNfX1BVUkVfXyovX193ZWJwYWNrX3JlcXVpcmVfXy5uKGF4aW9zX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8zX18pO1xuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfVxuXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfVxuXG5cblxuXG5cbnZhciBQdXNoZXIgPVxuLyojX19QVVJFX18qL1xuZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBQdXNoZXIoYXBwX2tleSwgb3B0aW9ucykge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBQdXNoZXIpO1xuXG4gICAgdGhpcy5jaGVja0FwcEtleShhcHBfa2V5KTtcbiAgICB0aGlzLmtleSA9IGFwcF9rZXk7XG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgICB0aGlzLmRpc3BhdGNoZXIgPSBuZXcgX2V2ZW50c19kaXNwYXRjaGVyX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8xX19bXCJEaXNwYXRjaGVyXCJdKCk7XG4gICAgdGhpcy5jaGFubmVscyA9IG5ldyBfY2hhbm5lbHNfbWFubmFnZXJfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzJfX1tcIk1hbm5hZ2VyXCJdKCk7XG4gICAgdGhpcy5jb25uZWN0KCk7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoUHVzaGVyLCBbe1xuICAgIGtleTogXCJjb25uZWN0XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbm5lY3QoKSB7XG4gICAgICB0aGlzLnNvY2tldCA9IG5ldyBfY29ubmVjdGlvbl9zb2NrZXRfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfX1tcIlNvY2tldFwiXSh0aGlzLCB0aGlzLm9wdGlvbnMuaG9zdCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInN1YnNjcmliZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzdWJzY3JpYmUoY2hhbm5lbF9uYW1lKSB7XG4gICAgICByZXR1cm4gdGhpcy5jaGFubmVscy5hZGQoY2hhbm5lbF9uYW1lLCB0aGlzKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwidW5zdWJzY3JpYmVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gdW5zdWJzY3JpYmUoY2hhbm5lbF9uYW1lKSB7XG4gICAgICB0aGlzLmNoYW5uZWxzLnJlbW92ZShjaGFubmVsX25hbWUpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJnZXRTb2NrZXRJZFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRTb2NrZXRJZCgpIHtcbiAgICAgIHJldHVybiB0aGlzLnNvY2tldC5zb2NrZXQuc29ja2V0X2lkO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJzZW5kXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNlbmQoanNvbikge1xuICAgICAgdGhpcy5zb2NrZXQuc2VuZChqc29uKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiY2hlY2tBcHBLZXlcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gY2hlY2tBcHBLZXkoa2V5KSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiYXV0aFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBhdXRoKG5hbWUsIGNhbGxiYWNrKSB7XG4gICAgICB2YXIgbWV0aG9kID0gdGhpcy5vcHRpb25zLmF1dGgubWV0aG9kIHx8ICdwb3N0JztcbiAgICAgIHZhciBkYXRhID0ge307XG4gICAgICB2YXIgcGFyYW1zID0ge307XG5cbiAgICAgIGlmIChtZXRob2QgPT0gJ3Bvc3QnKSB7XG4gICAgICAgIGRhdGEgPSBPYmplY3QuYXNzaWduKHtcbiAgICAgICAgICBjaGFubmVsX25hbWU6IG5hbWUsXG4gICAgICAgICAgc29ja2V0X2lkOiB0aGlzLmdldFNvY2tldElkKClcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwYXJhbXMgPSBPYmplY3QuYXNzaWduKHtcbiAgICAgICAgICBjaGFubmVsX25hbWU6IG5hbWUsXG4gICAgICAgICAgc29ja2V0X2lkOiB0aGlzLmdldFNvY2tldElkKClcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIGF4aW9zX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8zX19fZGVmYXVsdCgpKHtcbiAgICAgICAgdXJsOiB0aGlzLm9wdGlvbnMuYXV0aC51cmwsXG4gICAgICAgIG1ldGhvZDogbWV0aG9kLFxuICAgICAgICBoZWFkZXJzOiB0aGlzLm9wdGlvbnMuYXV0aC5oZWFkZXJzIHx8IHt9LFxuICAgICAgICBwYXJhbXM6IHBhcmFtcyxcbiAgICAgICAgZGF0YTogZGF0YVxuICAgICAgfSkudGhlbihmdW5jdGlvbiAoZSkge1xuICAgICAgICBjYWxsYmFjayhlKTtcbiAgICAgIH0pLmNhdGNoKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ+engeaciemikemBk+adg+mZkOS4jei2syEnKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBQdXNoZXI7XG59KCk7XG53aW5kb3cuUHVzaGVyID0gUHVzaGVyO1xuXG4vKioqLyB9KVxuXG4vKioqKioqLyB9KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluZGxZbkJoWTJzNkx5OHZkMlZpY0dGamF5OWliMjkwYzNSeVlYQWlMQ0ozWldKd1lXTnJPaTh2THk0dmJtOWtaVjl0YjJSMWJHVnpMMkY0YVc5ekwybHVaR1Y0TG1weklpd2lkMlZpY0dGamF6b3ZMeTh1TDI1dlpHVmZiVzlrZFd4bGN5OWhlR2x2Y3k5c2FXSXZZV1JoY0hSbGNuTXZlR2h5TG1weklpd2lkMlZpY0dGamF6b3ZMeTh1TDI1dlpHVmZiVzlrZFd4bGN5OWhlR2x2Y3k5c2FXSXZZWGhwYjNNdWFuTWlMQ0ozWldKd1lXTnJPaTh2THk0dmJtOWtaVjl0YjJSMWJHVnpMMkY0YVc5ekwyeHBZaTlqWVc1alpXd3ZRMkZ1WTJWc0xtcHpJaXdpZDJWaWNHRmphem92THk4dUwyNXZaR1ZmYlc5a2RXeGxjeTloZUdsdmN5OXNhV0l2WTJGdVkyVnNMME5oYm1ObGJGUnZhMlZ1TG1weklpd2lkMlZpY0dGamF6b3ZMeTh1TDI1dlpHVmZiVzlrZFd4bGN5OWhlR2x2Y3k5c2FXSXZZMkZ1WTJWc0wybHpRMkZ1WTJWc0xtcHpJaXdpZDJWaWNHRmphem92THk4dUwyNXZaR1ZmYlc5a2RXeGxjeTloZUdsdmN5OXNhV0l2WTI5eVpTOUJlR2x2Y3k1cWN5SXNJbmRsWW5CaFkyczZMeTh2TGk5dWIyUmxYMjF2WkhWc1pYTXZZWGhwYjNNdmJHbGlMMk52Y21VdlNXNTBaWEpqWlhCMGIzSk5ZVzVoWjJWeUxtcHpJaXdpZDJWaWNHRmphem92THk4dUwyNXZaR1ZmYlc5a2RXeGxjeTloZUdsdmN5OXNhV0l2WTI5eVpTOWpjbVZoZEdWRmNuSnZjaTVxY3lJc0luZGxZbkJoWTJzNkx5OHZMaTl1YjJSbFgyMXZaSFZzWlhNdllYaHBiM012YkdsaUwyTnZjbVV2WkdsemNHRjBZMmhTWlhGMVpYTjBMbXB6SWl3aWQyVmljR0ZqYXpvdkx5OHVMMjV2WkdWZmJXOWtkV3hsY3k5aGVHbHZjeTlzYVdJdlkyOXlaUzlsYm1oaGJtTmxSWEp5YjNJdWFuTWlMQ0ozWldKd1lXTnJPaTh2THk0dmJtOWtaVjl0YjJSMWJHVnpMMkY0YVc5ekwyeHBZaTlqYjNKbEwzTmxkSFJzWlM1cWN5SXNJbmRsWW5CaFkyczZMeTh2TGk5dWIyUmxYMjF2WkhWc1pYTXZZWGhwYjNNdmJHbGlMMk52Y21VdmRISmhibk5tYjNKdFJHRjBZUzVxY3lJc0luZGxZbkJoWTJzNkx5OHZMaTl1YjJSbFgyMXZaSFZzWlhNdllYaHBiM012YkdsaUwyUmxabUYxYkhSekxtcHpJaXdpZDJWaWNHRmphem92THk4dUwyNXZaR1ZmYlc5a2RXeGxjeTloZUdsdmN5OXNhV0l2YUdWc2NHVnljeTlpYVc1a0xtcHpJaXdpZDJWaWNHRmphem92THk4dUwyNXZaR1ZmYlc5a2RXeGxjeTloZUdsdmN5OXNhV0l2YUdWc2NHVnljeTlpZEc5aExtcHpJaXdpZDJWaWNHRmphem92THk4dUwyNXZaR1ZmYlc5a2RXeGxjeTloZUdsdmN5OXNhV0l2YUdWc2NHVnljeTlpZFdsc1pGVlNUQzVxY3lJc0luZGxZbkJoWTJzNkx5OHZMaTl1YjJSbFgyMXZaSFZzWlhNdllYaHBiM012YkdsaUwyaGxiSEJsY25NdlkyOXRZbWx1WlZWU1RITXVhbk1pTENKM1pXSndZV05yT2k4dkx5NHZibTlrWlY5dGIyUjFiR1Z6TDJGNGFXOXpMMnhwWWk5b1pXeHdaWEp6TDJOdmIydHBaWE11YW5NaUxDSjNaV0p3WVdOck9pOHZMeTR2Ym05a1pWOXRiMlIxYkdWekwyRjRhVzl6TDJ4cFlpOW9aV3h3WlhKekwybHpRV0p6YjJ4MWRHVlZVa3d1YW5NaUxDSjNaV0p3WVdOck9pOHZMeTR2Ym05a1pWOXRiMlIxYkdWekwyRjRhVzl6TDJ4cFlpOW9aV3h3WlhKekwybHpWVkpNVTJGdFpVOXlhV2RwYmk1cWN5SXNJbmRsWW5CaFkyczZMeTh2TGk5dWIyUmxYMjF2WkhWc1pYTXZZWGhwYjNNdmJHbGlMMmhsYkhCbGNuTXZibTl5YldGc2FYcGxTR1ZoWkdWeVRtRnRaUzVxY3lJc0luZGxZbkJoWTJzNkx5OHZMaTl1YjJSbFgyMXZaSFZzWlhNdllYaHBiM012YkdsaUwyaGxiSEJsY25NdmNHRnljMlZJWldGa1pYSnpMbXB6SWl3aWQyVmljR0ZqYXpvdkx5OHVMMjV2WkdWZmJXOWtkV3hsY3k5aGVHbHZjeTlzYVdJdmFHVnNjR1Z5Y3k5emNISmxZV1F1YW5NaUxDSjNaV0p3WVdOck9pOHZMeTR2Ym05a1pWOXRiMlIxYkdWekwyRjRhVzl6TDJ4cFlpOTFkR2xzY3k1cWN5SXNJbmRsWW5CaFkyczZMeTh2TGk5dWIyUmxYMjF2WkhWc1pYTXZhWE10WW5WbVptVnlMMmx1WkdWNExtcHpJaXdpZDJWaWNHRmphem92THk4dUwyNXZaR1ZmYlc5a2RXeGxjeTl3Y205alpYTnpMMkp5YjNkelpYSXVhbk1pTENKM1pXSndZV05yT2k4dkx5NHZjM0pqTDJOb1lXNXVaV3h6TDJOb1lXNXVaV3d1YW5NaUxDSjNaV0p3WVdOck9pOHZMeTR2YzNKakwyTm9ZVzV1Wld4ekwyMWhibTVoWjJWeUxtcHpJaXdpZDJWaWNHRmphem92THk4dUwzTnlZeTlqYUdGdWJtVnNjeTl3Y21WelpXNWpaVjlqYUdGdWJtVnNMbXB6SWl3aWQyVmljR0ZqYXpvdkx5OHVMM055WXk5amFHRnVibVZzY3k5d2NtbDJZWFJsWDJOb1lXNXVaV3d1YW5NaUxDSjNaV0p3WVdOck9pOHZMeTR2YzNKakwyTnZibTVsWTNScGIyNHZjMjlqYTJWMExtcHpJaXdpZDJWaWNHRmphem92THk4dUwzTnlZeTlsZG1WdWRITXZZMkZzYkdKaFkydGZjbVZuYVhOMGNua3Vhbk1pTENKM1pXSndZV05yT2k4dkx5NHZjM0pqTDJWMlpXNTBjeTlrYVhOd1lYUmphR1Z5TG1weklpd2lkMlZpY0dGamF6b3ZMeTh1TDNOeVl5OXdkWE5vWlhJdWFuTWlYU3dpYm1GdFpYTWlPbHNpUTJoaGJtNWxiQ0lzSW01aGJXVWlMQ0p3ZFhOb1pYSWlMQ0p6YjJOclpYUWlMQ0p6ZEdGMFpTSXNJbk4xWW5OamNtbGlaU0lzSW5ObGJtUWlMQ0psZG1WdWRDSXNJbVJoZEdFaUxDSmphR0Z1Ym1Wc0lpd2lSR2x6Y0dGMFkyaGxjaUlzSWsxaGJtNWhaMlZ5SWl3aVkyaGhibTVsYkhNaUxDSmpjbVZoZEdWRGFHRnVibVZzSWl3aVQySnFaV04wSWl3aWEyVjVjeUlzSW1raUxDSnBibVJsZUU5bUlpd2lVSEpwZG1GMFpVTm9ZVzV1Wld3aUxDSlFjbVZ6Wlc1alpVTm9ZVzV1Wld3aUxDSmhkWFJvSWl3aVpTSXNJbU5vWVc1dVpXeGZaR0YwWVNJc0lsTnZZMnRsZENJc0ltaHZjM1FpTENKWFpXSlRiMk5yWlhRaUxDSnJaWGtpTENKaWFXNWtUR2x6ZEdWdVpYSnpJaXdpYjI1dmNHVnVJaXdpYjI1UGNHVnVJaXdpYjI1bGNuSnZjaUlzSW1WeWNtOXlJaXdpYjI1RmNuSnZjaUlzSW05dVkyeHZjMlVpTENKamJHOXpaVVYyWlc1MElpd2liMjVEYkc5elpTSXNJbTl1YldWemMyRm5aU0lzSW0xbGMzTmhaMlVpTENKdmJrMWxjM05oWjJVaUxDSmlhVzVrSWl3aWMyOWphMlYwWDJsa0lpd2lZMjl1YzI5c1pTSXNJbkpsWVdSNVUzUmhkR1VpTENKRFRFOVRSVVFpTENKMGVYQmxJaXdpWlVSaGRHRWlMQ0pLVTA5T0lpd2ljR0Z5YzJVaUxDSjFibVJsWm1sdVpXUWlMQ0ptYVc1a0lpd2laVzFwZENJc0ltcHpiMjRpTENKemRISnBibWRwWm5raUxDSkRZV3hzWW1GamExSmxaMmx6ZEhKNUlpd2lYMk5oYkd4aVlXTnJjeUlzSW5CeVpXWnBlQ0lzSW1OaGJHeGlZV05ySWl3aVkyOXVkR1Y0ZENJc0luQnlaV1pwZUdWa1JYWmxiblJPWVcxbElpd2ljSFZ6YUNJc0ltWnVJaXdpYm1GdFpYTWlMQ0p5WlcxdmRtVkRZV3hzWW1GamF5SXNJbkpsYlc5MlpVRnNiRU5oYkd4aVlXTnJjeUlzSW14bGJtZDBhQ0lzSW1OaGJHeGlZV05yY3lJc0ltZHNiMkpoYkY5allXeHNZbUZqYTNNaUxDSmxkbVZ1ZEU1aGJXVWlMQ0poWkdRaUxDSnlaVzF2ZG1VaUxDSjFibUpwYm1RaUxDSjFibUpwYm1SZloyeHZZbUZzSWl3aVoyVjBJaXdpWTJGc2JDSXNJbEIxYzJobGNpSXNJbUZ3Y0Y5clpYa2lMQ0p2Y0hScGIyNXpJaXdpWTJobFkydEJjSEJMWlhraUxDSmthWE53WVhSamFHVnlJaXdpWTI5dWJtVmpkQ0lzSW1Ob1lXNXVaV3hmYm1GdFpTSXNJbTFsZEdodlpDSXNJbkJoY21GdGN5SXNJbUZ6YzJsbmJpSXNJbWRsZEZOdlkydGxkRWxrSWl3aVlYaHBiM01pTENKMWNtd2lMQ0pvWldGa1pYSnpJaXdpZEdobGJpSXNJbU5oZEdOb0lpd2lkMmx1Wkc5M0lsMHNJbTFoY0hCcGJtZHpJam9pTzBGQlFVRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN096dEJRVWRCTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4clJFRkJNRU1zWjBOQlFXZERPMEZCUXpGRk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFc1owVkJRWGRFTEd0Q1FVRnJRanRCUVVNeFJUdEJRVU5CTEhsRVFVRnBSQ3hqUVVGak8wRkJReTlFT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3hwUkVGQmVVTXNhVU5CUVdsRE8wRkJRekZGTEhkSVFVRm5TQ3h0UWtGQmJVSXNSVUZCUlR0QlFVTnlTVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJMRzFEUVVFeVFpd3dRa0ZCTUVJc1JVRkJSVHRCUVVOMlJDeDVRMEZCYVVNc1pVRkJaVHRCUVVOb1JEdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRU3c0UkVGQmMwUXNLMFJCUVN0RU96dEJRVVZ5U0R0QlFVTkJPenM3UVVGSFFUdEJRVU5CT3pzN096czdPenM3T3pzN1FVTnNSa0VzYVVKQlFXbENMRzFDUVVGUExFTkJRVU1zYzBSQlFXRXNSVHM3T3pzN096czdPenM3TzBGRFFYcENPenRCUVVWaUxGbEJRVmtzYlVKQlFVOHNRMEZCUXl4eFJFRkJXVHRCUVVOb1F5eGhRVUZoTEcxQ1FVRlBMRU5CUVVNc2FVVkJRV3RDTzBGQlEzWkRMR1ZCUVdVc2JVSkJRVThzUTBGQlF5d3lSVUZCZFVJN1FVRkRPVU1zYlVKQlFXMUNMRzFDUVVGUExFTkJRVU1zYlVaQlFUSkNPMEZCUTNSRUxITkNRVUZ6UWl4dFFrRkJUeXhEUVVGRExIbEdRVUU0UWp0QlFVTTFSQ3hyUWtGQmEwSXNiVUpCUVU4c1EwRkJReXg1UlVGQmNVSTdRVUZETDBNc2VVWkJRWGxHTEcxQ1FVRlBMRU5CUVVNc2JVVkJRVzFDT3p0QlFVVndTRHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJMRFJEUVVFMFF6dEJRVU0xUXpzN1FVRkZRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFc1VVRkJVU3hoUVVGdlFqdEJRVU0xUWp0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPenRCUVVWQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN08wRkJSVUU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJMRzlDUVVGdlFpeHRRa0ZCVHl4RFFVRkRMSGxGUVVGelFqczdRVUZGYkVRN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFc1UwRkJVenRCUVVOVU8wRkJRMEU3UVVGRFFUdEJRVU5CTEU5QlFVODdRVUZEVURzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxFOUJRVTg3UVVGRFVEdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3hQUVVGUE8wRkJRMUE3TzBGQlJVRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFTeEhRVUZITzBGQlEwZzdPenM3T3pzN096czdPenM3UVVOdVRHRTdPMEZCUldJc1dVRkJXU3h0UWtGQlR5eERRVUZETEd0RVFVRlRPMEZCUXpkQ0xGZEJRVmNzYlVKQlFVOHNRMEZCUXl4blJVRkJaMEk3UVVGRGJrTXNXVUZCV1N4dFFrRkJUeXhEUVVGRExEUkVRVUZqTzBGQlEyeERMR1ZCUVdVc2JVSkJRVThzUTBGQlF5eDNSRUZCV1RzN1FVRkZia003UVVGRFFUdEJRVU5CTzBGQlEwRXNWMEZCVnl4UFFVRlBPMEZCUTJ4Q0xGbEJRVmtzVFVGQlRUdEJRVU5zUWp0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUczdRVUZGUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFTeGxRVUZsTEcxQ1FVRlBMRU5CUVVNc2EwVkJRV2xDTzBGQlEzaERMRzlDUVVGdlFpeHRRa0ZCVHl4RFFVRkRMRFJGUVVGelFqdEJRVU5zUkN4cFFrRkJhVUlzYlVKQlFVOHNRMEZCUXl4elJVRkJiVUk3TzBGQlJUVkRPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEVzWlVGQlpTeHRRa0ZCVHl4RFFVRkRMRzlGUVVGclFqczdRVUZGZWtNN08wRkJSVUU3UVVGRFFUczdPenM3T3pzN096czdPenRCUTI1RVlUczdRVUZGWWp0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxGZEJRVmNzVVVGQlVUdEJRVU51UWp0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN08wRkJSVUU3T3pzN096czdPenM3T3pzN1FVTnNRbUU3TzBGQlJXSXNZVUZCWVN4dFFrRkJUeXhEUVVGRExESkVRVUZWT3p0QlFVVXZRanRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEZkQlFWY3NVMEZCVXp0QlFVTndRanRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxFZEJRVWM3TzBGQlJVZzdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVN4SFFVRkhPMEZCUTBnN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEVzUjBGQlJ6dEJRVU5JTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3T3pzN096czdPenM3T3pzN1FVTjRSR0U3TzBGQlJXSTdRVUZEUVR0QlFVTkJPenM3T3pzN096czdPenM3TzBGRFNtRTdPMEZCUldJc1pVRkJaU3h0UWtGQlR5eERRVUZETERKRVFVRmxPMEZCUTNSRExGbEJRVmtzYlVKQlFVOHNRMEZCUXl4eFJFRkJXVHRCUVVOb1F5eDVRa0ZCZVVJc2JVSkJRVThzUTBGQlF5eHBSa0ZCYzBJN1FVRkRka1FzYzBKQlFYTkNMRzFDUVVGUExFTkJRVU1zTWtWQlFXMUNPenRCUVVWcVJEdEJRVU5CTzBGQlEwRTdRVUZEUVN4WFFVRlhMRTlCUVU4N1FVRkRiRUk3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4WFFVRlhMRTlCUVU4N1FVRkRiRUk3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3hMUVVGTE8wRkJRMHc3TzBGQlJVRXNhME5CUVd0RExHTkJRV003UVVGRGFFUTdPMEZCUlVFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVN4SFFVRkhPenRCUVVWSU8wRkJRMEU3UVVGRFFTeEhRVUZIT3p0QlFVVklPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEVzWjBSQlFXZEVPMEZCUTJoRU8wRkJRMEU3UVVGRFFTeExRVUZMTzBGQlEwdzdRVUZEUVN4RFFVRkRPenRCUVVWRU8wRkJRMEU3UVVGRFFUdEJRVU5CTEdkRVFVRm5SRHRCUVVOb1JEdEJRVU5CTzBGQlEwRTdRVUZEUVN4TFFVRkxPMEZCUTB3N1FVRkRRU3hEUVVGRE96dEJRVVZFT3pzN096czdPenM3T3pzN08wRkRPVVZoT3p0QlFVVmlMRmxCUVZrc2JVSkJRVThzUTBGQlF5eHhSRUZCV1RzN1FVRkZhRU03UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxGZEJRVmNzVTBGQlV6dEJRVU53UWl4WFFVRlhMRk5CUVZNN1FVRkRjRUk3UVVGRFFTeFpRVUZaTEU5QlFVODdRVUZEYmtJN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEVkQlFVYzdRVUZEU0R0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEZkQlFWY3NUMEZCVHp0QlFVTnNRanRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRXNWMEZCVnl4VFFVRlRPMEZCUTNCQ08wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJMRWRCUVVjN1FVRkRTRHM3UVVGRlFUczdPenM3T3pzN096czdPenRCUTI1RVlUczdRVUZGWWl4dFFrRkJiVUlzYlVKQlFVOHNRMEZCUXl4eFJVRkJaMEk3TzBGQlJUTkRPMEZCUTBFN1FVRkRRVHRCUVVOQkxGZEJRVmNzVDBGQlR6dEJRVU5zUWl4WFFVRlhMRTlCUVU4N1FVRkRiRUlzVjBGQlZ5eFBRVUZQTzBGQlEyeENMRmRCUVZjc1QwRkJUenRCUVVOc1FpeFhRVUZYTEU5QlFVODdRVUZEYkVJc1lVRkJZU3hOUVVGTk8wRkJRMjVDTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN096czdPenM3T3pzN096czdRVU5xUW1FN08wRkJSV0lzV1VGQldTeHRRa0ZCVHl4RFFVRkRMSEZFUVVGWk8wRkJRMmhETEc5Q1FVRnZRaXh0UWtGQlR5eERRVUZETEhWRlFVRnBRanRCUVVNM1F5eGxRVUZsTEcxQ1FVRlBMRU5CUVVNc2RVVkJRVzlDTzBGQlF6TkRMR1ZCUVdVc2JVSkJRVThzUTBGQlF5eDVSRUZCWVR0QlFVTndReXh2UWtGQmIwSXNiVUpCUVU4c1EwRkJReXh4UmtGQk5FSTdRVUZEZUVRc2EwSkJRV3RDTEcxQ1FVRlBMRU5CUVVNc2FVWkJRVEJDT3p0QlFVVndSRHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEZkQlFWY3NUMEZCVHp0QlFVTnNRaXhoUVVGaExGRkJRVkU3UVVGRGNrSTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFTd3JRa0ZCSzBJN1FVRkRMMElzZFVOQlFYVkRPMEZCUTNaRE8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCT3p0QlFVVkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEVzUjBGQlJ6dEJRVU5JTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEVzUjBGQlJ6dEJRVU5JT3pzN096czdPenM3T3pzN08wRkRja1poT3p0QlFVVmlPMEZCUTBFN1FVRkRRVHRCUVVOQkxGZEJRVmNzVFVGQlRUdEJRVU5xUWl4WFFVRlhMRTlCUVU4N1FVRkRiRUlzVjBGQlZ5eFBRVUZQTzBGQlEyeENMRmRCUVZjc1QwRkJUenRCUVVOc1FpeFhRVUZYTEU5QlFVODdRVUZEYkVJc1lVRkJZU3hOUVVGTk8wRkJRMjVDTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3pzN096czdPenM3T3pzN08wRkRjRUpoT3p0QlFVVmlMR3RDUVVGclFpeHRRa0ZCVHl4RFFVRkRMRzFGUVVGbE96dEJRVVY2UXp0QlFVTkJPMEZCUTBFN1FVRkRRU3hYUVVGWExGTkJRVk03UVVGRGNFSXNWMEZCVnl4VFFVRlRPMEZCUTNCQ0xGZEJRVmNzVDBGQlR6dEJRVU5zUWp0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeEhRVUZITzBGQlEwZzdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3pzN096czdPenM3T3pzN08wRkRla0poT3p0QlFVVmlMRmxCUVZrc2JVSkJRVThzUTBGQlF5eHhSRUZCV1RzN1FVRkZhRU03UVVGRFFUdEJRVU5CTzBGQlEwRXNWMEZCVnl4alFVRmpPMEZCUTNwQ0xGZEJRVmNzVFVGQlRUdEJRVU5xUWl4WFFVRlhMR1ZCUVdVN1FVRkRNVUlzWVVGQllTeEZRVUZGTzBGQlEyWTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxFZEJRVWM3TzBGQlJVZzdRVUZEUVRzN096czdPenM3T3pzN096dEJRMjVDUVN3clEwRkJZVHM3UVVGRllpeFpRVUZaTEcxQ1FVRlBMRU5CUVVNc2EwUkJRVk03UVVGRE4wSXNNRUpCUVRCQ0xHMUNRVUZQTEVOQlFVTXNPRVpCUVN0Q096dEJRVVZxUlR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEdOQlFXTXNiVUpCUVU4c1EwRkJReXhuUlVGQlowSTdRVUZEZEVNc1IwRkJSenRCUVVOSU8wRkJRMEVzWTBGQll5eHRRa0ZCVHl4RFFVRkRMR2xGUVVGcFFqdEJRVU4yUXp0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeDNSVUZCZDBVN1FVRkRlRVU3UVVGRFFUdEJRVU5CTzBGQlEwRXNkVVJCUVhWRU8wRkJRM1pFTzBGQlEwRTdRVUZEUVR0QlFVTkJMRWRCUVVjN08wRkJSVWc3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJMRTlCUVU4c1dVRkJXVHRCUVVOdVFqdEJRVU5CTzBGQlEwRXNSMEZCUnpzN1FVRkZTRHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN08wRkJSVUU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEVzUTBGQlF6czdRVUZGUkR0QlFVTkJPMEZCUTBFc1EwRkJRenM3UVVGRlJEczdPenM3T3pzN096czdPenM3UVVNdlJtRTdPMEZCUldJN1FVRkRRVHRCUVVOQk8wRkJRMEVzYlVKQlFXMUNMR2xDUVVGcFFqdEJRVU53UXp0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96czdPenM3T3pzN096czdPMEZEVm1FN08wRkJSV0k3TzBGQlJVRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUczdPenM3T3pzN096czdPenRCUTI1RFlUczdRVUZGWWl4WlFVRlpMRzFDUVVGUExFTkJRVU1zY1VSQlFWazdPMEZCUldoRE8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJMRmRCUVZjc1QwRkJUenRCUVVOc1FpeFhRVUZYTEU5QlFVODdRVUZEYkVJc1lVRkJZU3hQUVVGUE8wRkJRM0JDTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4SFFVRkhPMEZCUTBnN1FVRkRRU3hIUVVGSE8wRkJRMGc3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTEU5QlFVODdRVUZEVUR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEZOQlFWTTdRVUZEVkR0QlFVTkJPMEZCUTBFN1FVRkRRU3hQUVVGUE8wRkJRMUFzUzBGQlN6czdRVUZGVER0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPenM3T3pzN096czdPenM3TzBGRGFrVmhPenRCUVVWaU8wRkJRMEU3UVVGRFFUdEJRVU5CTEZkQlFWY3NUMEZCVHp0QlFVTnNRaXhYUVVGWExFOUJRVTg3UVVGRGJFSXNZVUZCWVN4UFFVRlBPMEZCUTNCQ08wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN096czdPenM3T3pzN096dEJRMkpoT3p0QlFVVmlMRmxCUVZrc2JVSkJRVThzUTBGQlF5eHhSRUZCV1RzN1FVRkZhRU03UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CT3p0QlFVVkJMSGREUVVGM1F6dEJRVU40UXl4UFFVRlBPenRCUVVWUU8wRkJRMEVzTUVSQlFUQkVMSGRDUVVGM1FqdEJRVU5zUmp0QlFVTkJMRTlCUVU4N08wRkJSVkE3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4SFFVRkhPenRCUVVWSU8wRkJRMEU3UVVGRFFUdEJRVU5CTEdkRFFVRm5RenRCUVVOb1F5dzJRa0ZCTmtJc1lVRkJZU3hGUVVGRk8wRkJRelZETzBGQlEwRTdRVUZEUVN4SFFVRkhPMEZCUTBnN096czdPenM3T3pzN096czdRVU53UkdFN08wRkJSV0k3UVVGRFFUdEJRVU5CTzBGQlEwRXNWMEZCVnl4UFFVRlBPMEZCUTJ4Q0xHRkJRV0VzVVVGQlVUdEJRVU55UWp0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdPenM3T3pzN096czdPenRCUTJKaE96dEJRVVZpTEZsQlFWa3NiVUpCUVU4c1EwRkJReXh4UkVGQldUczdRVUZGYUVNN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRXNZMEZCWXl4UFFVRlBPMEZCUTNKQ0xHZENRVUZuUWp0QlFVTm9RanRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxHTkJRV01zVDBGQlR6dEJRVU55UWl4blFrRkJaMElzVVVGQlVUdEJRVU40UWp0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeEhRVUZIT3p0QlFVVklPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeEhRVUZITzBGQlEwZzdPenM3T3pzN096czdPenM3UVVOdVJXRTdPMEZCUldJc1dVRkJXU3h0UWtGQlR5eERRVUZETEcxRVFVRlZPenRCUVVVNVFqdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3hIUVVGSE8wRkJRMGc3T3pzN096czdPenM3T3pzN1FVTllZVHM3UVVGRllpeFpRVUZaTEcxQ1FVRlBMRU5CUVVNc2NVUkJRVms3TzBGQlJXaERPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3hYUVVGWExFOUJRVTg3UVVGRGJFSXNZVUZCWVN4UFFVRlBPMEZCUTNCQ08wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRU3hwUWtGQmFVSXNaVUZCWlRzN1FVRkZhRU03UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRXNUMEZCVHp0QlFVTlFPMEZCUTBFN1FVRkRRVHRCUVVOQkxFZEJRVWM3TzBGQlJVZzdRVUZEUVRzN096czdPenM3T3pzN096dEJRM0JFWVRzN1FVRkZZanRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRXNLMEpCUVN0Q08wRkJReTlDTzBGQlEwRTdRVUZEUVN4WFFVRlhMRk5CUVZNN1FVRkRjRUlzWVVGQllUdEJRVU5pTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3T3pzN096czdPenM3T3p0QlF6RkNZVHM3UVVGRllpeFhRVUZYTEcxQ1FVRlBMRU5CUVVNc1owVkJRV2RDTzBGQlEyNURMR1ZCUVdVc2JVSkJRVThzUTBGQlF5eHZSRUZCVnpzN1FVRkZiRU03TzBGQlJVRTdPMEZCUlVFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRXNWMEZCVnl4UFFVRlBPMEZCUTJ4Q0xHRkJRV0VzVVVGQlVUdEJRVU55UWp0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4WFFVRlhMRTlCUVU4N1FVRkRiRUlzWVVGQllTeFJRVUZSTzBGQlEzSkNPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJMRmRCUVZjc1QwRkJUenRCUVVOc1FpeGhRVUZoTEZGQlFWRTdRVUZEY2tJN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFc1YwRkJWeXhQUVVGUE8wRkJRMnhDTEdGQlFXRXNVVUZCVVR0QlFVTnlRanRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRXNSMEZCUnp0QlFVTklPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJMRmRCUVZjc1QwRkJUenRCUVVOc1FpeGhRVUZoTEZGQlFWRTdRVUZEY2tJN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFc1YwRkJWeXhQUVVGUE8wRkJRMnhDTEdGQlFXRXNVVUZCVVR0QlFVTnlRanRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3hYUVVGWExFOUJRVTg3UVVGRGJFSXNZVUZCWVN4UlFVRlJPMEZCUTNKQ08wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxGZEJRVmNzVDBGQlR6dEJRVU5zUWl4aFFVRmhMRkZCUVZFN1FVRkRja0k3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEVzVjBGQlZ5eFBRVUZQTzBGQlEyeENMR0ZCUVdFc1VVRkJVVHRCUVVOeVFqdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeFhRVUZYTEU5QlFVODdRVUZEYkVJc1lVRkJZU3hSUVVGUk8wRkJRM0pDTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEZkQlFWY3NUMEZCVHp0QlFVTnNRaXhoUVVGaExGRkJRVkU3UVVGRGNrSTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRXNWMEZCVnl4UFFVRlBPMEZCUTJ4Q0xHRkJRV0VzVVVGQlVUdEJRVU55UWp0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4WFFVRlhMRTlCUVU4N1FVRkRiRUlzWVVGQllTeFJRVUZSTzBGQlEzSkNPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJMRmRCUVZjc1QwRkJUenRCUVVOc1FpeGhRVUZoTEZGQlFWRTdRVUZEY2tJN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFc1YwRkJWeXhQUVVGUE8wRkJRMnhDTEdGQlFXRXNUMEZCVHp0QlFVTndRanRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeFhRVUZYTEdGQlFXRTdRVUZEZUVJc1YwRkJWeXhUUVVGVE8wRkJRM0JDTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFTeHRRMEZCYlVNc1QwRkJUenRCUVVNeFF6dEJRVU5CTzBGQlEwRXNSMEZCUnp0QlFVTklPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3gxUWtGQmRVSXNVMEZCVXl4SFFVRkhMRk5CUVZNN1FVRkROVU1zTWtKQlFUSkNPMEZCUXpOQ08wRkJRMEU3UVVGRFFTeFhRVUZYTEU5QlFVODdRVUZEYkVJc1lVRkJZU3hQUVVGUE8wRkJRM0JDTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxFdEJRVXM3UVVGRFREdEJRVU5CTzBGQlEwRTdPMEZCUlVFc2RVTkJRWFZETEU5QlFVODdRVUZET1VNN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFc1YwRkJWeXhQUVVGUE8wRkJRMnhDTEZkQlFWY3NUMEZCVHp0QlFVTnNRaXhYUVVGWExFOUJRVTg3UVVGRGJFSXNXVUZCV1N4UFFVRlBPMEZCUTI1Q08wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4TFFVRkxPMEZCUTB3N1FVRkRRVHRCUVVOQkxFZEJRVWM3UVVGRFNEdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96czdPenM3T3pzN096czdRVU01VTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3pzN096czdPenM3T3pzN1FVTndRa0U3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFc1UwRkJVenRCUVVOVU8wRkJRMEU3UVVGRFFTeExRVUZMTzBGQlEwdzdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxGTkJRVk03UVVGRFZEdEJRVU5CTzBGQlEwRXNTMEZCU3p0QlFVTk1PMEZCUTBFN1FVRkRRU3hEUVVGRE8wRkJRMFE3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4TFFVRkxPMEZCUTB3N1FVRkRRVHRCUVVOQk8wRkJRMEVzVTBGQlV6dEJRVU5VTzBGQlEwRTdRVUZEUVR0QlFVTkJPenM3UVVGSFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFc1MwRkJTenRCUVVOTU8wRkJRMEU3UVVGRFFUdEJRVU5CTEZOQlFWTTdRVUZEVkR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96czdPMEZCU1VFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEV0QlFVczdRVUZEVER0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJMSFZDUVVGMVFpeHpRa0ZCYzBJN1FVRkROME03UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4eFFrRkJjVUk3UVVGRGNrSTdPMEZCUlVFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTEhGRFFVRnhRenM3UVVGRmNrTTdRVUZEUVR0QlFVTkJPenRCUVVWQkxESkNRVUV5UWp0QlFVTXpRanRCUVVOQk8wRkJRMEU3UVVGRFFTdzBRa0ZCTkVJc1ZVRkJWVHM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096dEJRM1pNZEVNN1FVRkZUeXhKUVVGTlFTeFBRVUZpTzBGQlFVRTdRVUZCUVR0QlFVRkJPenRCUVVOSkxHMUNRVUZaUXl4SlFVRmFMRVZCUVd0Q1F5eE5RVUZzUWl4RlFVRXdRanRCUVVGQk96dEJRVUZCT3p0QlFVTjBRanRCUVVWQkxGVkJRVXRFTEVsQlFVd3NSMEZCV1VFc1NVRkJXanRCUVVOQkxGVkJRVXRETEUxQlFVd3NSMEZCWTBFc1RVRkJaRHM3UVVGRlFTeFJRVUZKTEUxQlFVdEJMRTFCUVV3c1EwRkJXVU1zVFVGQldpeERRVUZ0UWtNc1MwRkJia0lzU1VGQk5FSXNRMEZCYUVNc1JVRkJiVU03UVVGREwwSXNXVUZCUzBNc1UwRkJURHRCUVVOSU96dEJRVkp4UWp0QlFWTjZRanM3UVVGV1REdEJRVUZCTzBGQlFVRXNaME5CV1dkQ08wRkJRMUlzVjBGQlMwZ3NUVUZCVEN4RFFVRlpTU3hKUVVGYUxFTkJRV2xDTzBGQlEySkRMR0ZCUVVzc1JVRkJSU3hYUVVSTk8wRkJSV0pETEZsQlFVa3NSVUZCUlR0QlFVTkdReXhwUWtGQlR5eEZRVUZGTEV0QlFVdFNPMEZCUkZvN1FVRkdUeXhQUVVGcVFqdEJRVTFJTzBGQmJrSk1PenRCUVVGQk8wRkJRVUVzUlVGQk5rSlRMRFpFUVVFM1FpeEZPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3p0QlEwWkJPMEZCUTBFN1FVRkRRVHRCUVVWUExFbEJRVTFETEZGQlFXSTdRVUZCUVR0QlFVRkJPMEZCUTBrc2MwSkJRV003UVVGQlFUczdRVUZEVml4VFFVRkxReXhSUVVGTUxFZEJRV2RDTEVWQlFXaENPMEZCUTBnN08wRkJTRXc3UVVGQlFUdEJRVUZCTEhkQ1FVdFJXQ3hKUVV4U0xFVkJTMk5ETEUxQlRHUXNSVUZMYzBJN1FVRkRaQ3hWUVVGSkxFTkJRVU1zUzBGQlMxVXNVVUZCVEN4RFFVRmpXQ3hKUVVGa0xFTkJRVXdzUlVGQk1FSTdRVUZEZEVJc1lVRkJTMWNzVVVGQlRDeERRVUZqV0N4SlFVRmtMRWxCUVhOQ1dTeGhRVUZoTEVOQlFVTmFMRWxCUVVRc1JVRkJUME1zVFVGQlVDeERRVUZ1UXp0QlFVTklPenRCUVVORUxHRkJRVThzUzBGQlMxVXNVVUZCVEN4RFFVRmpXQ3hKUVVGa0xFTkJRVkE3UVVGRFNEdEJRVlpNTzBGQlFVRTdRVUZCUVN3d1FrRlpWVHRCUVVOR0xHRkJRVTloTEUxQlFVMHNRMEZCUTBNc1NVRkJVQ3hEUVVGWkxFdEJRVXRJTEZGQlFXcENMRU5CUVZBN1FVRkRTRHRCUVdSTU8wRkJRVUU3UVVGQlFTeDVRa0ZuUWxOWUxFbEJhRUpVTEVWQlowSmxPMEZCUTFBc1lVRkJUeXhMUVVGTFZ5eFJRVUZNTEVOQlFXTllMRWxCUVdRc1EwRkJVRHRCUVVOSU8wRkJiRUpNTzBGQlFVRTdRVUZCUVN3eVFrRnZRbGRCTEVsQmNFSllMRVZCYjBKcFFqdEJRVU5VTEZWQlFVbFJMRTlCUVU4c1IwRkJSeXhMUVVGTFJ5eFJRVUZNTEVOQlFXTllMRWxCUVdRc1EwRkJaRHRCUVVOQkxHRkJRVThzUzBGQlMxY3NVVUZCVEN4RFFVRmpXQ3hKUVVGa0xFTkJRVkE3UVVGRFFTeGhRVUZQVVN4UFFVRlFPMEZCUTBnN1FVRjRRa3c3UVVGQlFUdEJRVUZCTEdkRFFUQkNaMEk3UVVGRFVpeFhRVUZMTEVsQlFVbFBMRU5CUVZRc1NVRkJZeXhMUVVGTFNpeFJRVUZ1UWl4RlFVRTJRanRCUVVONlFpeGhRVUZMUVN4UlFVRk1MRU5CUVdOSkxFTkJRV1FzUlVGQmFVSllMRk5CUVdwQ08wRkJRMGc3UVVGRlNqdEJRUzlDVERzN1FVRkJRVHRCUVVGQk96dEJRV3REUVN4VFFVRlRVU3hoUVVGVUxFTkJRWFZDV2l4SlFVRjJRaXhGUVVFMlFrTXNUVUZCTjBJc1JVRkJjVU03UVVGRGFrTXNUVUZCU1VRc1NVRkJTU3hEUVVGRFowSXNUMEZCVEN4RFFVRmhMRlZCUVdJc1RVRkJOa0lzUTBGQmFrTXNSVUZCYjBNN1FVRkRhRU1zVjBGQlR5eEpRVUZKUXl3clJFRkJTaXhEUVVGdFFtcENMRWxCUVc1Q0xFVkJRWGxDUXl4TlFVRjZRaXhEUVVGUU8wRkJRMGdzUjBGR1JDeE5RVVZQTEVsQlFVbEVMRWxCUVVrc1EwRkJRMmRDTEU5QlFVd3NRMEZCWVN4WFFVRmlMRTFCUVRoQ0xFTkJRV3hETEVWQlFYRkRPMEZCUTNoRExGZEJRVThzU1VGQlNVVXNhVVZCUVVvc1EwRkJiMEpzUWl4SlFVRndRaXhGUVVFd1FrTXNUVUZCTVVJc1EwRkJVRHRCUVVOSUxFZEJSazBzVFVGRlFUdEJRVU5JTEZkQlFVOHNTVUZCU1VZc1owUkJRVW9zUTBGQldVTXNTVUZCV2l4RlFVRnJRa01zVFVGQmJFSXNRMEZCVUR0QlFVTklPMEZCUTBvc1F6czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3TzBGRE9VTkVPMEZCUlU4c1NVRkJUV2xDTEdWQlFXSTdRVUZCUVR0QlFVRkJPMEZCUVVFN08wRkJRMGtzTWtKQlFWbHNRaXhKUVVGYUxFVkJRV3RDUXl4TlFVRnNRaXhGUVVFd1FqdEJRVUZCT3p0QlFVRkJPenRCUVVOMFFqdEJRVVZCTEZWQlFVdEVMRWxCUVV3c1IwRkJXVUVzU1VGQldqdEJRVU5CTEZWQlFVdERMRTFCUVV3c1IwRkJZMEVzVFVGQlpEdEJRVU5CTEZWQlFVdHJRaXhKUVVGTUxFZEJRVmtzU1VGQldqczdRVUZGUVN4UlFVRkpMRTFCUVV0c1FpeE5RVUZNTEVOQlFWbERMRTFCUVZvc1EwRkJiVUpETEV0QlFXNUNMRWxCUVRSQ0xFTkJRV2hETEVWQlFXMURPMEZCUXk5Q0xGbEJRVXRETEZOQlFVdzdRVUZEU0RzN1FVRlVjVUk3UVVGVmVrSTdPMEZCV0V3N1FVRkJRVHRCUVVGQkxHZERRV0ZuUWp0QlFVRkJPenRCUVVOU0xGZEJRVXRJTEUxQlFVd3NRMEZCV1d0Q0xFbEJRVm9zUTBGQmFVSXNTMEZCUzI1Q0xFbEJRWFJDTEVWQlFUUkNMRlZCUVVOdlFpeERRVUZFTEVWQlFVODdRVUZETDBJc1kwRkJTU3hEUVVGRFJDeEpRVUZNTEVkQlFWbERMRU5CUVVNc1EwRkJRMklzU1VGQlJpeERRVUZQV1N4SlFVRnVRanM3UVVGRlFTeGpRVUZKTEVOQlFVTnNRaXhOUVVGTUxFTkJRVmxKTEVsQlFWb3NRMEZCYVVJN1FVRkRZa01zWlVGQlN5eEZRVUZGTEZkQlJFMDdRVUZGWWtNc1kwRkJTU3hGUVVGRk8wRkJRMFpETEcxQ1FVRlBMRVZCUVVVc1RVRkJTU3hEUVVGRFVpeEpRVVJhTzBGQlJVWnRRaXhuUWtGQlNTeEZRVUZGTEUxQlFVa3NRMEZCUTBFc1NVRkdWRHRCUVVkR1JTeDNRa0ZCV1N4RlFVRkZSQ3hEUVVGRExFTkJRVU5pTEVsQlFVWXNRMEZCVDJNN1FVRklia0k3UVVGR1R5eFRRVUZxUWp0QlFWRklMRTlCV0VRN1FVRlpTRHRCUVRGQ1REczdRVUZCUVR0QlFVRkJMRVZCUVhGRFdpdzJSRUZCY2tNc1JUczdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3TzBGRFJrRTdRVUZGVHl4SlFVRk5VU3hqUVVGaU8wRkJRVUU3UVVGQlFUdEJRVUZCT3p0QlFVTkpMREJDUVVGWmFrSXNTVUZCV2l4RlFVRnJRa01zVFVGQmJFSXNSVUZCTUVJN1FVRkJRVHM3UVVGQlFUczdRVUZEZEVJN1FVRkZRU3hWUVVGTFJDeEpRVUZNTEVkQlFWbEJMRWxCUVZvN1FVRkRRU3hWUVVGTFF5eE5RVUZNTEVkQlFXTkJMRTFCUVdRN1FVRkRRU3hWUVVGTGEwSXNTVUZCVEN4SFFVRlpMRWxCUVZvN08wRkJSVUVzVVVGQlNTeE5RVUZMYkVJc1RVRkJUQ3hEUVVGWlF5eE5RVUZhTEVOQlFXMUNReXhMUVVGdVFpeEpRVUUwUWl4RFFVRm9ReXhGUVVGdFF6dEJRVU12UWl4WlFVRkxReXhUUVVGTU8wRkJRMGc3TzBGQlZIRkNPMEZCVlhwQ096dEJRVmhNTzBGQlFVRTdRVUZCUVN4blEwRmhaMEk3UVVGQlFUczdRVUZEVWl4WFFVRkxTQ3hOUVVGTUxFTkJRVmxyUWl4SlFVRmFMRU5CUVdsQ0xFdEJRVXR1UWl4SlFVRjBRaXhGUVVFMFFpeFZRVUZEYjBJc1EwRkJSQ3hGUVVGUE8wRkJReTlDTEdOQlFVa3NRMEZCUTBRc1NVRkJUQ3hIUVVGWlF5eERRVUZETEVOQlFVTmlMRWxCUVVZc1EwRkJUMWtzU1VGQmJrSTdPMEZCUlVFc1kwRkJTU3hEUVVGRGJFSXNUVUZCVEN4RFFVRlpTU3hKUVVGYUxFTkJRV2xDTzBGQlEySkRMR1ZCUVVzc1JVRkJSU3hYUVVSTk8wRkJSV0pETEdOQlFVa3NSVUZCUlR0QlFVTkdReXh0UWtGQlR5eEZRVUZGTEUxQlFVa3NRMEZCUTFJc1NVRkVXanRCUVVWR2JVSXNaMEpCUVVrc1JVRkJSU3hOUVVGSkxFTkJRVU5CTzBGQlJsUTdRVUZHVHl4VFFVRnFRanRCUVU5SUxFOUJWa1E3UVVGWFNEdEJRWHBDVERzN1FVRkJRVHRCUVVGQkxFVkJRVzlEVml3MlJFRkJjRU1zUlRzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPMEZEUmtFN1FVRkZUeXhKUVVGTllTeE5RVUZpTzBGQlFVRTdRVUZCUVR0QlFVRkJPenRCUVVOSkxHdENRVUZaY2tJc1RVRkJXaXhGUVVGdlFuTkNMRWxCUVhCQ0xFVkJRVEJDTzBGQlFVRTdPMEZCUVVFN08wRkJRM1JDTzBGQlJVRXNWVUZCUzNSQ0xFMUJRVXdzUjBGQlkwRXNUVUZCWkR0QlFVTkJMRlZCUVV0RExFMUJRVXdzUjBGQll5eEpRVUZKYzBJc1UwRkJTaXhEUVVGalJDeEpRVUZKTEVkQlFVY3NSMEZCVUN4SFFVRmhMRTFCUVV0MFFpeE5RVUZNTEVOQlFWbDNRaXhIUVVGMlF5eERRVUZrT3p0QlFVVkJMRlZCUVV0RExHRkJRVXc3TzBGQlRuTkNPMEZCVDNwQ096dEJRVkpNTzBGQlFVRTdRVUZCUVN4dlEwRlZiMEk3UVVGQlFUczdRVUZEV2l4WFFVRkxlRUlzVFVGQlRDeERRVUZaZVVJc1RVRkJXaXhIUVVGeFFpeFpRVUZOTzBGQlEzWkNMR05CUVVrc1EwRkJRME1zVFVGQlREdEJRVU5JTEU5QlJrUTdPMEZCUjBFc1YwRkJTekZDTEUxQlFVd3NRMEZCV1RKQ0xFOUJRVm9zUjBGQmMwSXNWVUZCUTBNc1MwRkJSQ3hGUVVGWE8wRkJRemRDTEdOQlFVa3NRMEZCUTBNc1QwRkJUQ3hEUVVGaFJDeExRVUZpTzBGQlEwZ3NUMEZHUkRzN1FVRkhRU3hYUVVGTE5VSXNUVUZCVEN4RFFVRlpPRUlzVDBGQldpeEhRVUZ6UWl4VlFVRkRReXhWUVVGRUxFVkJRV2RDTzBGQlEyeERMR05CUVVrc1EwRkJRME1zVDBGQlRDeERRVUZoUkN4VlFVRmlPMEZCUTBnc1QwRkdSRHM3UVVGSFFTeFhRVUZMTDBJc1RVRkJUQ3hEUVVGWmFVTXNVMEZCV2l4SFFVRjNRaXhWUVVGRFF5eFBRVUZFTEVWQlFXRTdRVUZEYWtNc1kwRkJTU3hEUVVGRFF5eFRRVUZNTEVOQlFXVkVMRTlCUVdZN1FVRkRTQ3hQUVVaRU8wRkJSMGc3UVVGMlFrdzdRVUZCUVR0QlFVRkJMRFpDUVhsQ1lUdEJRVUZCT3p0QlFVTk1PMEZCUTBFc1YwRkJTMnBETEV0QlFVd3NSMEZCWVN4RFFVRmlPMEZCUlVFc1YwRkJTMjFETEVsQlFVd3NRMEZCVlN4WFFVRldMRVZCUVhWQ0xGVkJRVU5zUWl4RFFVRkVMRVZCUVU4N1FVRkRNVUlzWTBGQlNTeERRVUZEYkVJc1RVRkJUQ3hEUVVGWmNVTXNVMEZCV2l4SFFVRjNRbTVDTEVOQlFVTXNRMEZCUTIxQ0xGTkJRVEZDTzBGQlEwRXNZMEZCU1N4RFFVRkRjRU1zUzBGQlRDeEhRVUZoTEVOQlFXSXNRMEZHTUVJc1EwRkpNVUk3TzBGQlEwRXNZMEZCU1N4RFFVRkRSaXhOUVVGTUxFTkJRVmxWTEZGQlFWb3NRMEZCY1VKUUxGTkJRWEpDTzBGQlEwZ3NUMEZPUkR0QlFWRkJMRmRCUVV0clF5eEpRVUZNTEVOQlFWVXNiVUpCUVZZc1JVRkJLMElzVlVGQlEyeENMRU5CUVVRc1JVRkJUenRCUVVOc1F5eGpRVUZKTEVOQlFVTnFRaXhMUVVGTUxFZEJRV0VzUTBGQlF5eERRVUZrTzBGQlEwRnhReXhsUVVGUExFTkJRVU5XTEV0QlFWSXNRMEZCWTFZc1EwRkJReXhEUVVGRFZTeExRVUZvUWp0QlFVTklMRTlCU0VRN1FVRkxRVHM3TzBGQlIwZzdRVUUzUTB3N1FVRkJRVHRCUVVGQkxEUkNRU3REV1VFc1MwRXZRMW9zUlVFclEyMUNPMEZCUTFoVkxHRkJRVThzUTBGQlExWXNTMEZCVWl4RFFVRmpRU3hMUVVGa08wRkJRMGc3UVVGcVJFdzdRVUZCUVR0QlFVRkJMRFJDUVcxRVdVY3NWVUZ1UkZvc1JVRnRSSGRDTzBGQlEyaENMRlZCUVVrc1MwRkJTeTlDTEUxQlFVd3NRMEZCV1hWRExGVkJRVm9zU1VGQk1FSnFRaXhUUVVGVExFTkJRVU5yUWl4TlFVRjRReXhGUVVGblJEdEJRVU0xUXl4WlFVRkpWQ3hWUVVGVkxFTkJRVU5WTEVsQlFWZ3NTVUZCYlVJc1QwRkJka0lzUlVGQlowTTdRVUZETlVKSUxHbENRVUZQTEVOQlFVTldMRXRCUVZJc1EwRkJZeXhsUVVGa08wRkJRMGdzVTBGR1JDeE5RVVZQTEVsQlFVbEhMRlZCUVZVc1EwRkJRMVVzU1VGQldDeEpRVUZ0UWl4VFFVRjJRaXhGUVVGclF6dEJRVU55UTBnc2FVSkJRVThzUTBGQlExWXNTMEZCVWl4RFFVRmpSeXhWUVVGVkxFTkJRVU14UWl4SlFVRjZRanRCUVVOSUxGTkJSazBzVFVGRlFUdEJRVU5JYVVNc2FVSkJRVThzUTBGQlExWXNTMEZCVWl4RFFVRmpMRTlCUVdRN1FVRkRTRHRCUVVOS08wRkJRMG83UVVFM1JFdzdRVUZCUVR0QlFVRkJMRGhDUVN0RVkwMHNUMEV2UkdRc1JVRXJSSFZDTzBGQlEyWXNWVUZCU1ZFc1MwRkJTeXhIUVVGSFF5eEpRVUZKTEVOQlFVTkRMRXRCUVV3c1EwRkJWMVlzVDBGQlR5eERRVUZETjBJc1NVRkJia0lzUTBGQldqdEJRVU5CTEZWQlFVbEVMRXRCUVVzc1IwRkJSM05ETEV0QlFVc3NRMEZCUTNSRExFdEJRV3hDTzBGQlEwRXNWVUZCU1VNc1NVRkJTU3hIUVVGSGNVTXNTMEZCU3l4RFFVRkRja01zU1VGQmFrSTdPMEZCUlVFc1ZVRkJTWEZETEV0QlFVc3NRMEZCUTNCRExFOUJRVTRzUzBGQmEwSjFReXhUUVVGMFFpeEZRVUZwUXp0QlFVTTNRaXhoUVVGTE9VTXNUVUZCVEN4RFFVRlpWU3hSUVVGYUxFTkJRWEZDY1VNc1NVRkJja0lzUTBGQk1FSktMRXRCUVVzc1EwRkJRM0JETEU5QlFXaERMRVZCUVhsRGVVTXNTVUZCZWtNc1EwRkJPRU16UXl4TFFVRTVReXhGUVVGeFJFTXNTVUZCY2tRN1FVRkRTQ3hQUVVaRUxFMUJSVTg3UVVGRFNDeGhRVUZMTUVNc1NVRkJUQ3hEUVVGVk0wTXNTMEZCVml4RlFVRnBRa01zU1VGQmFrSTdRVUZEU0R0QlFVVktPMEZCTVVWTU8wRkJRVUU3UVVGQlFTeDVRa0UwUlZNeVF5eEpRVFZGVkN4RlFUUkZaVHRCUVVOUUxGVkJRVWtzUzBGQlN5OURMRXRCUVV3c1MwRkJaU3hEUVVGRExFTkJRWEJDTEVWQlFYVkNPMEZCUTI1Q0xHRkJRVXRFTEUxQlFVd3NRMEZCV1Vjc1NVRkJXaXhEUVVGcFFuZERMRWxCUVVrc1EwRkJRMDBzVTBGQlRDeERRVUZsUkN4SlFVRm1MRU5CUVdwQ08wRkJRMGc3UVVGRFNqdEJRV2hHVERzN1FVRkJRVHRCUVVGQkxFVkJRVFJDZWtNc05rUkJRVFZDTEVVN096czdPenM3T3pzN096czdPenM3T3pzN08wRkRSazhzU1VGQlRUSkRMR2RDUVVGaU8wRkJRVUU3UVVGQlFUdEJRVU5KTERoQ1FVRmpPMEZCUVVFN08wRkJRMVlzVTBGQlMwTXNWVUZCVEN4SFFVRnJRaXhGUVVGc1FqdEJRVU5JT3p0QlFVaE1PMEZCUVVFN1FVRkJRU3gzUWtGTFVYSkVMRWxCVEZJc1JVRkxZenRCUVVOT0xHRkJRVThzUzBGQlMzRkVMRlZCUVV3c1EwRkJaMEpETEUxQlFVMHNRMEZCUTNSRUxFbEJRVVFzUTBGQmRFSXNRMEZCVUR0QlFVTklPMEZCVUV3N1FVRkJRVHRCUVVGQkxIZENRVk5SUVN4SlFWUlNMRVZCVTJOMVJDeFJRVlJrTEVWQlUzZENReXhQUVZSNFFpeEZRVk5wUXp0QlFVTjZRaXhWUVVGSlF5eHBRa0ZCYVVJc1IwRkJSMGdzVFVGQlRTeERRVUZEZEVRc1NVRkJSQ3hEUVVFNVFqdEJRVU5CTEZkQlFVdHhSQ3hWUVVGTUxFTkJRV2RDU1N4cFFrRkJhRUlzU1VGQmNVTXNTMEZCUzBvc1ZVRkJUQ3hEUVVGblFra3NhVUpCUVdoQ0xFdEJRWE5ETEVWQlFUTkZPenRCUVVOQkxGZEJRVXRLTEZWQlFVd3NRMEZCWjBKSkxHbENRVUZvUWl4RlFVRnRRME1zU1VGQmJrTXNRMEZCZDBNN1FVRkRjRU5ETEZWQlFVVXNSVUZCUlVvc1VVRkVaME03UVVGRmNFTkRMR1ZCUVU4c1JVRkJSVUU3UVVGR01rSXNUMEZCZUVNN1FVRkpTRHRCUVdoQ1REdEJRVUZCTzBGQlFVRXNNa0pCYTBKWGVFUXNTVUZzUWxnc1JVRnJRbWxDZFVRc1VVRnNRbXBDTEVWQmEwSXlRa01zVDBGc1FqTkNMRVZCYTBKdlF6dEJRVU0xUWl4VlFVRkpMRU5CUVVONFJDeEpRVUZFTEVsQlFWTXNRMEZCUTNWRUxGRkJRVllzU1VGQmMwSXNRMEZCUTBNc1QwRkJNMElzUlVGQmIwTTdRVUZEYUVNc1lVRkJTMGdzVlVGQlRDeEhRVUZyUWl4RlFVRnNRanRCUVVOQk8wRkJRMGc3TzBGQlJVUXNWVUZCU1U4c1MwRkJTeXhIUVVGSE5VUXNTVUZCU1N4SFFVRkhMRU5CUVVOelJDeE5RVUZOTEVOQlFVTjBSQ3hKUVVGRUxFTkJRVkFzUTBGQlNDeEhRVUZ2UW1Fc1RVRkJUU3hEUVVGRFF5eEpRVUZRTEVOQlFWa3NTMEZCUzNWRExGVkJRV3BDTEVOQlFYQkRPenRCUVVWQkxGVkJRVWxGTEZGQlFWRXNTVUZCU1VNc1QwRkJhRUlzUlVGQmVVSTdRVUZEY2tJc1lVRkJTMHNzWTBGQlRDeERRVUZ2UWtRc1MwRkJjRUlzUlVGQk1rSk1MRkZCUVROQ0xFVkJRWEZEUXl4UFFVRnlRenRCUVVOSUxFOUJSa1FzVFVGRlR6dEJRVU5JTEdGQlFVdE5MR3RDUVVGTUxFTkJRWGRDUml4TFFVRjRRanRCUVVOSU8wRkJRMG83UVVFdlFrdzdRVUZCUVR0QlFVRkJMRzFEUVdsRGJVSkJMRXRCYWtOdVFpeEZRV2xETUVKTUxGRkJha014UWl4RlFXbERiME5ETEU5QmFrTndReXhGUVdsRE5rTTdRVUZEY2tNc1YwRkJTeXhKUVVGSmVFUXNTVUZCVkN4SlFVRnBRalJFTEV0QlFXcENMRVZCUVhkQ08wRkJRM0JDTEdGQlFVc3NTVUZCU1c1RExFZEJRVlFzU1VGQlowSXNTMEZCU3pSQ0xGVkJRVXdzUTBGQlowSnlSQ3hKUVVGb1FpeERRVUZvUWl4RlFVRjFRenRCUVVOdVF5eGpRVUZKTEV0QlFVdHhSQ3hWUVVGTUxFTkJRV2RDY2tRc1NVRkJhRUlzUlVGQmMwSjVRaXhIUVVGMFFpeEZRVUV5UW10RExFVkJRVE5DTEVsQlFXbERTaXhSUVVGcVF5eEpRVUUyUXl4TFFVRkxSaXhWUVVGTUxFTkJRV2RDY2tRc1NVRkJhRUlzUlVGQmMwSjVRaXhIUVVGMFFpeEZRVUV5UWl0Q0xFOUJRVE5DTEVsQlFYTkRRU3hQUVVGMlJpeEZRVUZuUnp0QlFVTTFSaXh0UWtGQlR5eExRVUZMU0N4VlFVRk1MRU5CUVdkQ2NrUXNTVUZCYUVJc1JVRkJjMEo1UWl4SFFVRjBRaXhEUVVGUU8wRkJRMGc3UVVGRFNqczdRVUZGUkN4WlFVRkpMRXRCUVVzMFFpeFZRVUZNTEVOQlFXZENja1FzU1VGQmFFSXNSVUZCYzBJclJDeE5RVUYwUWl4TFFVRnBReXhEUVVGeVF5eEZRVUYzUXp0QlFVTndReXhwUWtGQlR5eExRVUZMVml4VlFVRk1MRU5CUVdkQ2NrUXNTVUZCYUVJc1EwRkJVRHRCUVVOSU8wRkJRMG83UVVGRFNqdEJRVGREVER0QlFVRkJPMEZCUVVFc2RVTkJLME4xUWpSRUxFdEJMME4yUWl4RlFTdERPRUk3UVVGRGRFSXNWMEZCU3l4SlFVRkpOVVFzU1VGQlZDeEpRVUZwUWpSRUxFdEJRV3BDTEVWQlFYZENPMEZCUTNCQ0xHVkJRVThzUzBGQlMxQXNWVUZCVEN4RFFVRm5RbkpFTEVsQlFXaENMRU5CUVZBN1FVRkRTRHRCUVVOS08wRkJia1JNT3p0QlFVRkJPMEZCUVVFN08wRkJjMFJCTEZOQlFWTnpSQ3hOUVVGVUxFTkJRV2RDZEVRc1NVRkJhRUlzUlVGQmMwSTdRVUZEYkVJc1UwRkJUeXhOUVVGTlFTeEpRVUZpTzBGQlEwZ3NRenM3T3pzN096czdPenM3T3pzN096czdPenM3TzBGRGVFUkVPMEZCUlU4c1NVRkJUVk1zVlVGQllqdEJRVUZCTzBGQlFVRTdRVUZEU1N4M1FrRkJZenRCUVVGQk96dEJRVU5XTEZOQlFVdDFSQ3hUUVVGTUxFZEJRV2xDTEVsQlFVbGFMRzFGUVVGS0xFVkJRV3BDTzBGQlEwRXNVMEZCUzJFc1owSkJRVXdzUjBGQmQwSXNSVUZCZUVJN1FVRkRTRHM3UVVGS1REdEJRVUZCTzBGQlFVRXNlVUpCVFZORExGTkJUbFFzUlVGTmIwSllMRkZCVG5CQ0xFVkJUVGhDUXl4UFFVNDVRaXhGUVUxMVF6dEJRVU12UWl4WFFVRkxVU3hUUVVGTUxFTkJRV1ZITEVkQlFXWXNRMEZCYlVKRUxGTkJRVzVDTEVWQlFUaENXQ3hSUVVFNVFpeEZRVUYzUTBNc1QwRkJlRU03UVVGRFFTeGhRVUZQTEVsQlFWQTdRVUZEU0R0QlFWUk1PMEZCUVVFN1FVRkJRU3huUTBGWFowSkVMRkZCV0doQ0xFVkJWekJDTzBGQlEyeENMRmRCUVV0VkxHZENRVUZNTEVOQlFYTkNVQ3hKUVVGMFFpeERRVUV5UWtnc1VVRkJNMEk3UVVGRFFTeGhRVUZQTEVsQlFWQTdRVUZEU0R0QlFXUk1PMEZCUVVFN1FVRkJRU3d5UWtGblFsZFhMRk5CYUVKWUxFVkJaMEp6UWxnc1VVRm9RblJDTEVWQlowSm5RME1zVDBGb1FtaERMRVZCWjBKNVF6dEJRVU5xUXl4WFFVRkxVU3hUUVVGTUxFTkJRV1ZKTEUxQlFXWXNRMEZCYzBKR0xGTkJRWFJDTEVWQlFXbERXQ3hSUVVGcVF5eEZRVUV5UTBNc1QwRkJNME03UVVGRFFTeGhRVUZQTEVsQlFWQTdRVUZEU0R0QlFXNUNURHRCUVVGQk8wRkJRVUVzYTBOQmNVSnJRa1FzVVVGeVFteENMRVZCY1VJMFFqdEJRVU53UWl4VlFVRkpMRU5CUVVOQkxGRkJRVXdzUlVGQlpUdEJRVU5ZTEdGQlFVdFZMR2RDUVVGTUxFZEJRWGRDTEVWQlFYaENPMEZCUTBFc1pVRkJUeXhKUVVGUU8wRkJRMGc3TzBGQlJVUXNWMEZCU3l4SlFVRkpiRVFzUTBGQlZDeEpRVUZqTEV0QlFVdHJSQ3huUWtGQmJrSXNSVUZCY1VNN1FVRkRha01zV1VGQlNWWXNVVUZCVVN4SlFVRkpMRXRCUVV0VkxHZENRVUZNTEVOQlFYTkNiRVFzUTBGQmRFSXNRMEZCYUVJc1JVRkJNRU03UVVGRGRFTXNhVUpCUVU4c1MwRkJTMnRFTEdkQ1FVRk1MRU5CUVhOQ2JFUXNRMEZCZEVJc1EwRkJVRHRCUVVOSU8wRkJRMG83TzBGQlEwUXNZVUZCVHl4SlFVRlFPMEZCUTBnN1FVRnFRMHc3UVVGQlFUdEJRVUZCTEdsRFFXMURhVUk3UVVGRFZDeFhRVUZMYzBRc1RVRkJURHRCUVVOQkxGZEJRVXRETEdGQlFVdzdRVUZEUVN4aFFVRlBMRWxCUVZBN1FVRkRTRHRCUVhaRFREdEJRVUZCTzBGQlFVRXNlVUpCZVVOVFNpeFRRWHBEVkN4RlFYbERiMEl6UkN4SlFYcERjRUlzUlVGNVF6QkNPMEZCUTJ4Q0xGZEJRVXNzU1VGQlNWRXNRMEZCUXl4SFFVRkhMRU5CUVdJc1JVRkJaMEpCTEVOQlFVTXNSMEZCUnl4TFFVRkxhMFFzWjBKQlFVd3NRMEZCYzBKR0xFMUJRVEZETEVWQlFXdEVhRVFzUTBGQlF5eEZRVUZ1UkN4RlFVRjFSRHRCUVVOdVJDeGhRVUZMYTBRc1owSkJRVXdzUTBGQmMwSnNSQ3hEUVVGMFFpeEZRVUY1UW0xRUxGTkJRWHBDTEVWQlFXOURNMFFzU1VGQmNFTTdRVUZEU0RzN1FVRkZSQ3hWUVVGSmVVUXNVMEZCVXl4SFFVRkhMRXRCUVV0QkxGTkJRVXdzUTBGQlpVOHNSMEZCWml4RFFVRnRRa3dzVTBGQmJrSXNRMEZCYUVJN08wRkJRMEVzVlVGQlNVWXNVMEZCVXl4SlFVRkpRU3hUUVVGVExFTkJRVU5FTEUxQlFWWXNSMEZCYlVJc1EwRkJjRU1zUlVGQmRVTTdRVUZEYmtNc1lVRkJTeXhKUVVGSmFFUXNSVUZCUXl4SFFVRkhMRU5CUVdJc1JVRkJaMEpCTEVWQlFVTXNSMEZCUjJsRUxGTkJRVk1zUTBGQlEwUXNUVUZCT1VJc1JVRkJjME5vUkN4RlFVRkRMRVZCUVhaRExFVkJRVEpETzBGQlEzWkRhVVFzYlVKQlFWTXNRMEZCUTJwRUxFVkJRVVFzUTBGQlZDeERRVUZoTkVNc1JVRkJZaXhEUVVGblFtRXNTVUZCYUVJc1EwRkJjVUpTTEZOQlFWTXNRMEZCUTJwRUxFVkJRVVFzUTBGQlZDeERRVUZoZVVNc1QwRkJiRU1zUlVGQk1rTnFSQ3hKUVVFelF6dEJRVU5JTzBGQlEwbzdPMEZCUlVRc1lVRkJUeXhKUVVGUU8wRkJRMGc3UVVGMFJFdzdPMEZCUVVFN1FVRkJRU3hKT3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPMEZEUmtFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRlR5eEpRVUZOYTBVc1RVRkJZanRCUVVGQk8wRkJRVUU3UVVGRFNTeHJRa0ZCV1VNc1QwRkJXaXhGUVVGeFFrTXNUMEZCY2tJc1JVRkJPRUk3UVVGQlFUczdRVUZETVVJc1UwRkJTME1zVjBGQlRDeERRVUZwUWtZc1QwRkJha0k3UVVGRlFTeFRRVUZMYWtRc1IwRkJUQ3hIUVVGWGFVUXNUMEZCV0R0QlFVTkJMRk5CUVV0RExFOUJRVXdzUjBGQlpVRXNUMEZCVHl4SlFVRkpMRVZCUVRGQ08wRkJRMEVzVTBGQlMwVXNWVUZCVEN4SFFVRnJRaXhKUVVGSmNFVXNOa1JCUVVvc1JVRkJiRUk3UVVGRFFTeFRRVUZMUlN4UlFVRk1MRWRCUVdkQ0xFbEJRVWxFTERKRVFVRktMRVZCUVdoQ08wRkJSVUVzVTBGQlMyOUZMRTlCUVV3N1FVRkRTRHM3UVVGV1REdEJRVUZCTzBGQlFVRXNPRUpCV1dNN1FVRkRUaXhYUVVGTE5VVXNUVUZCVEN4SFFVRmpMRWxCUVVsdlFpeDVSRUZCU2l4RFFVRlhMRWxCUVZnc1JVRkJhVUlzUzBGQlMzRkVMRTlCUVV3c1EwRkJZWEJFTEVsQlFUbENMRU5CUVdRN1FVRkRTRHRCUVdSTU8wRkJRVUU3UVVGQlFTdzRRa0ZuUW1OM1JDeFpRV2hDWkN4RlFXZENORUk3UVVGRGNFSXNZVUZCVHl4TFFVRkxjRVVzVVVGQlRDeERRVUZqZDBRc1IwRkJaQ3hEUVVGclFsa3NXVUZCYkVJc1JVRkJaME1zU1VGQmFFTXNRMEZCVUR0QlFVTklPMEZCYkVKTU8wRkJRVUU3UVVGQlFTeG5RMEZ2UW1kQ1FTeFpRWEJDYUVJc1JVRnZRamhDTzBGQlEzUkNMRmRCUVV0d1JTeFJRVUZNTEVOQlFXTjVSQ3hOUVVGa0xFTkJRWEZDVnl4WlFVRnlRanRCUVVOSU8wRkJkRUpNTzBGQlFVRTdRVUZCUVN4clEwRjNRbXRDTzBGQlExWXNZVUZCVHl4TFFVRkxOMFVzVFVGQlRDeERRVUZaUVN4TlFVRmFMRU5CUVcxQ2NVTXNVMEZCTVVJN1FVRkRTRHRCUVRGQ1REdEJRVUZCTzBGQlFVRXNlVUpCTkVKVFZ5eEpRVFZDVkN4RlFUUkNaVHRCUVVOUUxGZEJRVXRvUkN4TlFVRk1MRU5CUVZsSExFbEJRVm9zUTBGQmFVSTJReXhKUVVGcVFqdEJRVU5JTzBGQk9VSk1PMEZCUVVFN1FVRkJRU3huUTBGblEyZENla0lzUjBGb1EyaENMRVZCWjBOeFFqdEJRVU5pTEdGQlFVOHNTVUZCVUR0QlFVTklPMEZCYkVOTU8wRkJRVUU3UVVGQlFTeDVRa0Z2UTFONlFpeEpRWEJEVkN4RlFXOURaWFZFTEZGQmNFTm1MRVZCYjBONVFqdEJRVU5xUWl4VlFVRkplVUlzVFVGQlRTeEhRVUZITEV0QlFVdE1MRTlCUVV3c1EwRkJZWGhFTEVsQlFXSXNRMEZCYTBJMlJDeE5RVUZzUWl4SlFVRTBRaXhOUVVGNlF6dEJRVU5CTEZWQlFVbDZSU3hKUVVGSkxFZEJRVWNzUlVGQldEdEJRVU5CTEZWQlFVa3dSU3hOUVVGTkxFZEJRVWNzUlVGQllqczdRVUZGUVN4VlFVRkpSQ3hOUVVGTkxFbEJRVWtzVFVGQlpDeEZRVUZ6UWp0QlFVTnNRbnBGTEZsQlFVa3NSMEZCUjAwc1RVRkJUU3hEUVVGRGNVVXNUVUZCVUN4RFFVRmpPMEZCUTJwQ1NDeHpRa0ZCV1N4RlFVRkZMMFVzU1VGRVJ6dEJRVVZxUW5WRExHMUNRVUZUTEVWQlFVVXNTMEZCU3pSRExGZEJRVXc3UVVGR1RTeFRRVUZrTEVOQlFWQTdRVUZKU0N4UFFVeEVMRTFCUzA4N1FVRkRTRVlzWTBGQlRTeEhRVUZIY0VVc1RVRkJUU3hEUVVGRGNVVXNUVUZCVUN4RFFVRmpPMEZCUTI1Q1NDeHpRa0ZCV1N4RlFVRkZMMFVzU1VGRVN6dEJRVVZ1UW5WRExHMUNRVUZUTEVWQlFVVXNTMEZCU3pSRExGZEJRVXc3UVVGR1VTeFRRVUZrTEVOQlFWUTdRVUZKU0RzN1FVRkZSRU1zYTBSQlFVc3NRMEZCUXp0QlFVTkdReXhYUVVGSExFVkJRVVVzUzBGQlMxWXNUMEZCVEN4RFFVRmhlRVFzU1VGQllpeERRVUZyUW10RkxFZEJSSEpDTzBGQlJVWk1MR05CUVUwc1JVRkJSVUVzVFVGR1RqdEJRVWRHVFN4bFFVRlBMRVZCUVVVc1MwRkJTMWdzVDBGQlRDeERRVUZoZUVRc1NVRkJZaXhEUVVGclFtMUZMRTlCUVd4Q0xFbEJRVFpDTEVWQlNIQkRPMEZCU1VaTUxHTkJRVTBzUlVGQlJVRXNUVUZLVGp0QlFVdEdNVVVzV1VGQlNTeEZRVUZGUVR0QlFVeEtMRTlCUVVRc1EwRkJUQ3hEUVUxSFowWXNTVUZPU0N4RFFVMVJMRlZCUVVOdVJTeERRVUZFTEVWQlFVODdRVUZEV0cxRExHZENRVUZSTEVOQlFVTnVReXhEUVVGRUxFTkJRVkk3UVVGRFNDeFBRVkpFTEVWQlVVZHZSU3hMUVZKSUxFTkJVVk1zVlVGQlEzQkZMRU5CUVVRc1JVRkJUenRCUVVOYWIwSXNaVUZCVHl4RFFVRkRWaXhMUVVGU0xFTkJRV01zVjBGQlpEdEJRVU5JTEU5QlZrUTdRVUZYU0R0QlFXaEZURHM3UVVGQlFUdEJRVUZCTzBGQmJVVkJNa1FzVFVGQlRTeERRVUZEYUVJc1RVRkJVQ3hIUVVGblFrRXNUVUZCYUVJc1F5SXNJbVpwYkdVaU9pSndkWE5vWlhJdWFuTWlMQ0p6YjNWeVkyVnpRMjl1ZEdWdWRDSTZXeUlnWEhRdkx5QlVhR1VnYlc5a2RXeGxJR05oWTJobFhHNGdYSFIyWVhJZ2FXNXpkR0ZzYkdWa1RXOWtkV3hsY3lBOUlIdDlPMXh1WEc0Z1hIUXZMeUJVYUdVZ2NtVnhkV2x5WlNCbWRXNWpkR2x2Ymx4dUlGeDBablZ1WTNScGIyNGdYMTkzWldKd1lXTnJYM0psY1hWcGNtVmZYeWh0YjJSMWJHVkpaQ2tnZTF4dVhHNGdYSFJjZEM4dklFTm9aV05ySUdsbUlHMXZaSFZzWlNCcGN5QnBiaUJqWVdOb1pWeHVJRngwWEhScFppaHBibk4wWVd4c1pXUk5iMlIxYkdWelcyMXZaSFZzWlVsa1hTa2dlMXh1SUZ4MFhIUmNkSEpsZEhWeWJpQnBibk4wWVd4c1pXUk5iMlIxYkdWelcyMXZaSFZzWlVsa1hTNWxlSEJ2Y25Sek8xeHVJRngwWEhSOVhHNGdYSFJjZEM4dklFTnlaV0YwWlNCaElHNWxkeUJ0YjJSMWJHVWdLR0Z1WkNCd2RYUWdhWFFnYVc1MGJ5QjBhR1VnWTJGamFHVXBYRzRnWEhSY2RIWmhjaUJ0YjJSMWJHVWdQU0JwYm5OMFlXeHNaV1JOYjJSMWJHVnpXMjF2WkhWc1pVbGtYU0E5SUh0Y2JpQmNkRngwWEhScE9pQnRiMlIxYkdWSlpDeGNiaUJjZEZ4MFhIUnNPaUJtWVd4elpTeGNiaUJjZEZ4MFhIUmxlSEJ2Y25Sek9pQjdmVnh1SUZ4MFhIUjlPMXh1WEc0Z1hIUmNkQzh2SUVWNFpXTjFkR1VnZEdobElHMXZaSFZzWlNCbWRXNWpkR2x2Ymx4dUlGeDBYSFJ0YjJSMWJHVnpXMjF2WkhWc1pVbGtYUzVqWVd4c0tHMXZaSFZzWlM1bGVIQnZjblJ6TENCdGIyUjFiR1VzSUcxdlpIVnNaUzVsZUhCdmNuUnpMQ0JmWDNkbFluQmhZMnRmY21WeGRXbHlaVjlmS1R0Y2JseHVJRngwWEhRdkx5QkdiR0ZuSUhSb1pTQnRiMlIxYkdVZ1lYTWdiRzloWkdWa1hHNGdYSFJjZEcxdlpIVnNaUzVzSUQwZ2RISjFaVHRjYmx4dUlGeDBYSFF2THlCU1pYUjFjbTRnZEdobElHVjRjRzl5ZEhNZ2IyWWdkR2hsSUcxdlpIVnNaVnh1SUZ4MFhIUnlaWFIxY200Z2JXOWtkV3hsTG1WNGNHOXlkSE03WEc0Z1hIUjlYRzVjYmx4dUlGeDBMeThnWlhod2IzTmxJSFJvWlNCdGIyUjFiR1Z6SUc5aWFtVmpkQ0FvWDE5M1pXSndZV05yWDIxdlpIVnNaWE5mWHlsY2JpQmNkRjlmZDJWaWNHRmphMTl5WlhGMWFYSmxYMTh1YlNBOUlHMXZaSFZzWlhNN1hHNWNiaUJjZEM4dklHVjRjRzl6WlNCMGFHVWdiVzlrZFd4bElHTmhZMmhsWEc0Z1hIUmZYM2RsWW5CaFkydGZjbVZ4ZFdseVpWOWZMbU1nUFNCcGJuTjBZV3hzWldSTmIyUjFiR1Z6TzF4dVhHNGdYSFF2THlCa1pXWnBibVVnWjJWMGRHVnlJR1oxYm1OMGFXOXVJR1p2Y2lCb1lYSnRiMjU1SUdWNGNHOXlkSE5jYmlCY2RGOWZkMlZpY0dGamExOXlaWEYxYVhKbFgxOHVaQ0E5SUdaMWJtTjBhVzl1S0dWNGNHOXlkSE1zSUc1aGJXVXNJR2RsZEhSbGNpa2dlMXh1SUZ4MFhIUnBaaWdoWDE5M1pXSndZV05yWDNKbGNYVnBjbVZmWHk1dktHVjRjRzl5ZEhNc0lHNWhiV1VwS1NCN1hHNGdYSFJjZEZ4MFQySnFaV04wTG1SbFptbHVaVkJ5YjNCbGNuUjVLR1Y0Y0c5eWRITXNJRzVoYldVc0lIc2daVzUxYldWeVlXSnNaVG9nZEhKMVpTd2daMlYwT2lCblpYUjBaWElnZlNrN1hHNGdYSFJjZEgxY2JpQmNkSDA3WEc1Y2JpQmNkQzh2SUdSbFptbHVaU0JmWDJWelRXOWtkV3hsSUc5dUlHVjRjRzl5ZEhOY2JpQmNkRjlmZDJWaWNHRmphMTl5WlhGMWFYSmxYMTh1Y2lBOUlHWjFibU4wYVc5dUtHVjRjRzl5ZEhNcElIdGNiaUJjZEZ4MGFXWW9kSGx3Wlc5bUlGTjViV0p2YkNBaFBUMGdKM1Z1WkdWbWFXNWxaQ2NnSmlZZ1UzbHRZbTlzTG5SdlUzUnlhVzVuVkdGbktTQjdYRzRnWEhSY2RGeDBUMkpxWldOMExtUmxabWx1WlZCeWIzQmxjblI1S0dWNGNHOXlkSE1zSUZONWJXSnZiQzUwYjFOMGNtbHVaMVJoWnl3Z2V5QjJZV3gxWlRvZ0owMXZaSFZzWlNjZ2ZTazdYRzRnWEhSY2RIMWNiaUJjZEZ4MFQySnFaV04wTG1SbFptbHVaVkJ5YjNCbGNuUjVLR1Y0Y0c5eWRITXNJQ2RmWDJWelRXOWtkV3hsSnl3Z2V5QjJZV3gxWlRvZ2RISjFaU0I5S1R0Y2JpQmNkSDA3WEc1Y2JpQmNkQzh2SUdOeVpXRjBaU0JoSUdaaGEyVWdibUZ0WlhOd1lXTmxJRzlpYW1WamRGeHVJRngwTHk4Z2JXOWtaU0FtSURFNklIWmhiSFZsSUdseklHRWdiVzlrZFd4bElHbGtMQ0J5WlhGMWFYSmxJR2wwWEc0Z1hIUXZMeUJ0YjJSbElDWWdNam9nYldWeVoyVWdZV3hzSUhCeWIzQmxjblJwWlhNZ2IyWWdkbUZzZFdVZ2FXNTBieUIwYUdVZ2JuTmNiaUJjZEM4dklHMXZaR1VnSmlBME9pQnlaWFIxY200Z2RtRnNkV1VnZDJobGJpQmhiSEpsWVdSNUlHNXpJRzlpYW1WamRGeHVJRngwTHk4Z2JXOWtaU0FtSURoOE1Ub2dZbVZvWVhabElHeHBhMlVnY21WeGRXbHlaVnh1SUZ4MFgxOTNaV0p3WVdOclgzSmxjWFZwY21WZlh5NTBJRDBnWm5WdVkzUnBiMjRvZG1Gc2RXVXNJRzF2WkdVcElIdGNiaUJjZEZ4MGFXWW9iVzlrWlNBbUlERXBJSFpoYkhWbElEMGdYMTkzWldKd1lXTnJYM0psY1hWcGNtVmZYeWgyWVd4MVpTazdYRzRnWEhSY2RHbG1LRzF2WkdVZ0ppQTRLU0J5WlhSMWNtNGdkbUZzZFdVN1hHNGdYSFJjZEdsbUtDaHRiMlJsSUNZZ05Da2dKaVlnZEhsd1pXOW1JSFpoYkhWbElEMDlQU0FuYjJKcVpXTjBKeUFtSmlCMllXeDFaU0FtSmlCMllXeDFaUzVmWDJWelRXOWtkV3hsS1NCeVpYUjFjbTRnZG1Gc2RXVTdYRzRnWEhSY2RIWmhjaUJ1Y3lBOUlFOWlhbVZqZEM1amNtVmhkR1VvYm5Wc2JDazdYRzRnWEhSY2RGOWZkMlZpY0dGamExOXlaWEYxYVhKbFgxOHVjaWh1Y3lrN1hHNGdYSFJjZEU5aWFtVmpkQzVrWldacGJtVlFjbTl3WlhKMGVTaHVjeXdnSjJSbFptRjFiSFFuTENCN0lHVnVkVzFsY21GaWJHVTZJSFJ5ZFdVc0lIWmhiSFZsT2lCMllXeDFaU0I5S1R0Y2JpQmNkRngwYVdZb2JXOWtaU0FtSURJZ0ppWWdkSGx3Wlc5bUlIWmhiSFZsSUNFOUlDZHpkSEpwYm1jbktTQm1iM0lvZG1GeUlHdGxlU0JwYmlCMllXeDFaU2tnWDE5M1pXSndZV05yWDNKbGNYVnBjbVZmWHk1a0tHNXpMQ0JyWlhrc0lHWjFibU4wYVc5dUtHdGxlU2tnZXlCeVpYUjFjbTRnZG1Gc2RXVmJhMlY1WFRzZ2ZTNWlhVzVrS0c1MWJHd3NJR3RsZVNrcE8xeHVJRngwWEhSeVpYUjFjbTRnYm5NN1hHNGdYSFI5TzF4dVhHNGdYSFF2THlCblpYUkVaV1poZFd4MFJYaHdiM0owSUdaMWJtTjBhVzl1SUdadmNpQmpiMjF3WVhScFltbHNhWFI1SUhkcGRHZ2dibTl1TFdoaGNtMXZibmtnYlc5a2RXeGxjMXh1SUZ4MFgxOTNaV0p3WVdOclgzSmxjWFZwY21WZlh5NXVJRDBnWm5WdVkzUnBiMjRvYlc5a2RXeGxLU0I3WEc0Z1hIUmNkSFpoY2lCblpYUjBaWElnUFNCdGIyUjFiR1VnSmlZZ2JXOWtkV3hsTGw5ZlpYTk5iMlIxYkdVZ1AxeHVJRngwWEhSY2RHWjFibU4wYVc5dUlHZGxkRVJsWm1GMWJIUW9LU0I3SUhKbGRIVnliaUJ0YjJSMWJHVmJKMlJsWm1GMWJIUW5YVHNnZlNBNlhHNGdYSFJjZEZ4MFpuVnVZM1JwYjI0Z1oyVjBUVzlrZFd4bFJYaHdiM0owY3lncElIc2djbVYwZFhKdUlHMXZaSFZzWlRzZ2ZUdGNiaUJjZEZ4MFgxOTNaV0p3WVdOclgzSmxjWFZwY21WZlh5NWtLR2RsZEhSbGNpd2dKMkVuTENCblpYUjBaWElwTzF4dUlGeDBYSFJ5WlhSMWNtNGdaMlYwZEdWeU8xeHVJRngwZlR0Y2JseHVJRngwTHk4Z1QySnFaV04wTG5CeWIzUnZkSGx3WlM1b1lYTlBkMjVRY205d1pYSjBlUzVqWVd4c1hHNGdYSFJmWDNkbFluQmhZMnRmY21WeGRXbHlaVjlmTG04Z1BTQm1kVzVqZEdsdmJpaHZZbXBsWTNRc0lIQnliM0JsY25SNUtTQjdJSEpsZEhWeWJpQlBZbXBsWTNRdWNISnZkRzkwZVhCbExtaGhjMDkzYmxCeWIzQmxjblI1TG1OaGJHd29iMkpxWldOMExDQndjbTl3WlhKMGVTazdJSDA3WEc1Y2JpQmNkQzh2SUY5ZmQyVmljR0ZqYTE5d2RXSnNhV05mY0dGMGFGOWZYRzRnWEhSZlgzZGxZbkJoWTJ0ZmNtVnhkV2x5WlY5ZkxuQWdQU0JjSWx3aU8xeHVYRzVjYmlCY2RDOHZJRXh2WVdRZ1pXNTBjbmtnYlc5a2RXeGxJR0Z1WkNCeVpYUjFjbTRnWlhod2IzSjBjMXh1SUZ4MGNtVjBkWEp1SUY5ZmQyVmljR0ZqYTE5eVpYRjFhWEpsWDE4b1gxOTNaV0p3WVdOclgzSmxjWFZwY21WZlh5NXpJRDBnWENJdUwzTnlZeTl3ZFhOb1pYSXVhbk5jSWlrN1hHNGlMQ0p0YjJSMWJHVXVaWGh3YjNKMGN5QTlJSEpsY1hWcGNtVW9KeTR2YkdsaUwyRjRhVzl6SnlrN0lpd2lKM1Z6WlNCemRISnBZM1FuTzF4dVhHNTJZWElnZFhScGJITWdQU0J5WlhGMWFYSmxLQ2N1THk0dUwzVjBhV3h6SnlrN1hHNTJZWElnYzJWMGRHeGxJRDBnY21WeGRXbHlaU2duTGk4dUxpOWpiM0psTDNObGRIUnNaU2NwTzF4dWRtRnlJR0oxYVd4a1ZWSk1JRDBnY21WeGRXbHlaU2duTGk4dUxpOW9aV3h3WlhKekwySjFhV3hrVlZKTUp5azdYRzUyWVhJZ2NHRnljMlZJWldGa1pYSnpJRDBnY21WeGRXbHlaU2duTGk4dUxpOW9aV3h3WlhKekwzQmhjbk5sU0dWaFpHVnljeWNwTzF4dWRtRnlJR2x6VlZKTVUyRnRaVTl5YVdkcGJpQTlJSEpsY1hWcGNtVW9KeTR2TGk0dmFHVnNjR1Z5Y3k5cGMxVlNURk5oYldWUGNtbG5hVzRuS1R0Y2JuWmhjaUJqY21WaGRHVkZjbkp2Y2lBOUlISmxjWFZwY21Vb0p5NHVMMk52Y21VdlkzSmxZWFJsUlhKeWIzSW5LVHRjYm5aaGNpQmlkRzloSUQwZ0tIUjVjR1Z2WmlCM2FXNWtiM2NnSVQwOUlDZDFibVJsWm1sdVpXUW5JQ1ltSUhkcGJtUnZkeTVpZEc5aElDWW1JSGRwYm1SdmR5NWlkRzloTG1KcGJtUW9kMmx1Wkc5M0tTa2dmSHdnY21WeGRXbHlaU2duTGk4dUxpOW9aV3h3WlhKekwySjBiMkVuS1R0Y2JseHViVzlrZFd4bExtVjRjRzl5ZEhNZ1BTQm1kVzVqZEdsdmJpQjRhSEpCWkdGd2RHVnlLR052Ym1acFp5a2dlMXh1SUNCeVpYUjFjbTRnYm1WM0lGQnliMjFwYzJVb1puVnVZM1JwYjI0Z1pHbHpjR0YwWTJoWWFISlNaWEYxWlhOMEtISmxjMjlzZG1Vc0lISmxhbVZqZENrZ2UxeHVJQ0FnSUhaaGNpQnlaWEYxWlhOMFJHRjBZU0E5SUdOdmJtWnBaeTVrWVhSaE8xeHVJQ0FnSUhaaGNpQnlaWEYxWlhOMFNHVmhaR1Z5Y3lBOUlHTnZibVpwWnk1b1pXRmtaWEp6TzF4dVhHNGdJQ0FnYVdZZ0tIVjBhV3h6TG1selJtOXliVVJoZEdFb2NtVnhkV1Z6ZEVSaGRHRXBLU0I3WEc0Z0lDQWdJQ0JrWld4bGRHVWdjbVZ4ZFdWemRFaGxZV1JsY25OYkowTnZiblJsYm5RdFZIbHdaU2RkT3lBdkx5Qk1aWFFnZEdobElHSnliM2R6WlhJZ2MyVjBJR2wwWEc0Z0lDQWdmVnh1WEc0Z0lDQWdkbUZ5SUhKbGNYVmxjM1FnUFNCdVpYY2dXRTFNU0hSMGNGSmxjWFZsYzNRb0tUdGNiaUFnSUNCMllYSWdiRzloWkVWMlpXNTBJRDBnSjI5dWNtVmhaSGx6ZEdGMFpXTm9ZVzVuWlNjN1hHNGdJQ0FnZG1GeUlIaEViMjFoYVc0Z1BTQm1ZV3h6WlR0Y2JseHVJQ0FnSUM4dklFWnZjaUJKUlNBNEx6a2dRMDlTVXlCemRYQndiM0owWEc0Z0lDQWdMeThnVDI1c2VTQnpkWEJ3YjNKMGN5QlFUMU5VSUdGdVpDQkhSVlFnWTJGc2JITWdZVzVrSUdSdlpYTnVKM1FnY21WMGRYSnVjeUIwYUdVZ2NtVnpjRzl1YzJVZ2FHVmhaR1Z5Y3k1Y2JpQWdJQ0F2THlCRVQwNG5WQ0JrYnlCMGFHbHpJR1p2Y2lCMFpYTjBhVzVuSUdJdll5QllUVXhJZEhSd1VtVnhkV1Z6ZENCcGN5QnRiMk5yWldRc0lHNXZkQ0JZUkc5dFlXbHVVbVZ4ZFdWemRDNWNiaUFnSUNCcFppQW9jSEp2WTJWemN5NWxibll1VGs5RVJWOUZUbFlnSVQwOUlDZDBaWE4wSnlBbUpseHVJQ0FnSUNBZ0lDQjBlWEJsYjJZZ2QybHVaRzkzSUNFOVBTQW5kVzVrWldacGJtVmtKeUFtSmx4dUlDQWdJQ0FnSUNCM2FXNWtiM2N1V0VSdmJXRnBibEpsY1hWbGMzUWdKaVlnSVNnbmQybDBhRU55WldSbGJuUnBZV3h6SnlCcGJpQnlaWEYxWlhOMEtTQW1KbHh1SUNBZ0lDQWdJQ0FoYVhOVlVreFRZVzFsVDNKcFoybHVLR052Ym1acFp5NTFjbXdwS1NCN1hHNGdJQ0FnSUNCeVpYRjFaWE4wSUQwZ2JtVjNJSGRwYm1SdmR5NVlSRzl0WVdsdVVtVnhkV1Z6ZENncE8xeHVJQ0FnSUNBZ2JHOWhaRVYyWlc1MElEMGdKMjl1Ykc5aFpDYzdYRzRnSUNBZ0lDQjRSRzl0WVdsdUlEMGdkSEoxWlR0Y2JpQWdJQ0FnSUhKbGNYVmxjM1F1YjI1d2NtOW5jbVZ6Y3lBOUlHWjFibU4wYVc5dUlHaGhibVJzWlZCeWIyZHlaWE56S0NrZ2UzMDdYRzRnSUNBZ0lDQnlaWEYxWlhOMExtOXVkR2x0Wlc5MWRDQTlJR1oxYm1OMGFXOXVJR2hoYm1Sc1pWUnBiV1Z2ZFhRb0tTQjdmVHRjYmlBZ0lDQjlYRzVjYmlBZ0lDQXZMeUJJVkZSUUlHSmhjMmxqSUdGMWRHaGxiblJwWTJGMGFXOXVYRzRnSUNBZ2FXWWdLR052Ym1acFp5NWhkWFJvS1NCN1hHNGdJQ0FnSUNCMllYSWdkWE5sY201aGJXVWdQU0JqYjI1bWFXY3VZWFYwYUM1MWMyVnlibUZ0WlNCOGZDQW5KenRjYmlBZ0lDQWdJSFpoY2lCd1lYTnpkMjl5WkNBOUlHTnZibVpwWnk1aGRYUm9MbkJoYzNOM2IzSmtJSHg4SUNjbk8xeHVJQ0FnSUNBZ2NtVnhkV1Z6ZEVobFlXUmxjbk11UVhWMGFHOXlhWHBoZEdsdmJpQTlJQ2RDWVhOcFl5QW5JQ3NnWW5SdllTaDFjMlZ5Ym1GdFpTQXJJQ2M2SnlBcklIQmhjM04zYjNKa0tUdGNiaUFnSUNCOVhHNWNiaUFnSUNCeVpYRjFaWE4wTG05d1pXNG9ZMjl1Wm1sbkxtMWxkR2h2WkM1MGIxVndjR1Z5UTJGelpTZ3BMQ0JpZFdsc1pGVlNUQ2hqYjI1bWFXY3VkWEpzTENCamIyNW1hV2N1Y0dGeVlXMXpMQ0JqYjI1bWFXY3VjR0Z5WVcxelUyVnlhV0ZzYVhwbGNpa3NJSFJ5ZFdVcE8xeHVYRzRnSUNBZ0x5OGdVMlYwSUhSb1pTQnlaWEYxWlhOMElIUnBiV1Z2ZFhRZ2FXNGdUVk5jYmlBZ0lDQnlaWEYxWlhOMExuUnBiV1Z2ZFhRZ1BTQmpiMjVtYVdjdWRHbHRaVzkxZER0Y2JseHVJQ0FnSUM4dklFeHBjM1JsYmlCbWIzSWdjbVZoWkhrZ2MzUmhkR1ZjYmlBZ0lDQnlaWEYxWlhOMFcyeHZZV1JGZG1WdWRGMGdQU0JtZFc1amRHbHZiaUJvWVc1a2JHVk1iMkZrS0NrZ2UxeHVJQ0FnSUNBZ2FXWWdLQ0Z5WlhGMVpYTjBJSHg4SUNoeVpYRjFaWE4wTG5KbFlXUjVVM1JoZEdVZ0lUMDlJRFFnSmlZZ0lYaEViMjFoYVc0cEtTQjdYRzRnSUNBZ0lDQWdJSEpsZEhWeWJqdGNiaUFnSUNBZ0lIMWNibHh1SUNBZ0lDQWdMeThnVkdobElISmxjWFZsYzNRZ1pYSnliM0psWkNCdmRYUWdZVzVrSUhkbElHUnBaRzRuZENCblpYUWdZU0J5WlhOd2IyNXpaU3dnZEdocGN5QjNhV3hzSUdKbFhHNGdJQ0FnSUNBdkx5Qm9ZVzVrYkdWa0lHSjVJRzl1WlhKeWIzSWdhVzV6ZEdWaFpGeHVJQ0FnSUNBZ0x5OGdWMmwwYUNCdmJtVWdaWGhqWlhCMGFXOXVPaUJ5WlhGMVpYTjBJSFJvWVhRZ2RYTnBibWNnWm1sc1pUb2djSEp2ZEc5amIyd3NJRzF2YzNRZ1luSnZkM05sY25OY2JpQWdJQ0FnSUM4dklIZHBiR3dnY21WMGRYSnVJSE4wWVhSMWN5QmhjeUF3SUdWMlpXNGdkR2h2ZFdkb0lHbDBKM01nWVNCemRXTmpaWE56Wm5Wc0lISmxjWFZsYzNSY2JpQWdJQ0FnSUdsbUlDaHlaWEYxWlhOMExuTjBZWFIxY3lBOVBUMGdNQ0FtSmlBaEtISmxjWFZsYzNRdWNtVnpjRzl1YzJWVlVrd2dKaVlnY21WeGRXVnpkQzV5WlhOd2IyNXpaVlZTVEM1cGJtUmxlRTltS0NkbWFXeGxPaWNwSUQwOVBTQXdLU2tnZTF4dUlDQWdJQ0FnSUNCeVpYUjFjbTQ3WEc0Z0lDQWdJQ0I5WEc1Y2JpQWdJQ0FnSUM4dklGQnlaWEJoY21VZ2RHaGxJSEpsYzNCdmJuTmxYRzRnSUNBZ0lDQjJZWElnY21WemNHOXVjMlZJWldGa1pYSnpJRDBnSjJkbGRFRnNiRkpsYzNCdmJuTmxTR1ZoWkdWeWN5Y2dhVzRnY21WeGRXVnpkQ0EvSUhCaGNuTmxTR1ZoWkdWeWN5aHlaWEYxWlhOMExtZGxkRUZzYkZKbGMzQnZibk5sU0dWaFpHVnljeWdwS1NBNklHNTFiR3c3WEc0Z0lDQWdJQ0IyWVhJZ2NtVnpjRzl1YzJWRVlYUmhJRDBnSVdOdmJtWnBaeTV5WlhOd2IyNXpaVlI1Y0dVZ2ZId2dZMjl1Wm1sbkxuSmxjM0J2Ym5ObFZIbHdaU0E5UFQwZ0ozUmxlSFFuSUQ4Z2NtVnhkV1Z6ZEM1eVpYTndiMjV6WlZSbGVIUWdPaUJ5WlhGMVpYTjBMbkpsYzNCdmJuTmxPMXh1SUNBZ0lDQWdkbUZ5SUhKbGMzQnZibk5sSUQwZ2UxeHVJQ0FnSUNBZ0lDQmtZWFJoT2lCeVpYTndiMjV6WlVSaGRHRXNYRzRnSUNBZ0lDQWdJQzh2SUVsRklITmxibVJ6SURFeU1qTWdhVzV6ZEdWaFpDQnZaaUF5TURRZ0tHaDBkSEJ6T2k4dloybDBhSFZpTG1OdmJTOWhlR2x2Y3k5aGVHbHZjeTlwYzNOMVpYTXZNakF4S1Z4dUlDQWdJQ0FnSUNCemRHRjBkWE02SUhKbGNYVmxjM1F1YzNSaGRIVnpJRDA5UFNBeE1qSXpJRDhnTWpBMElEb2djbVZ4ZFdWemRDNXpkR0YwZFhNc1hHNGdJQ0FnSUNBZ0lITjBZWFIxYzFSbGVIUTZJSEpsY1hWbGMzUXVjM1JoZEhWeklEMDlQU0F4TWpJeklEOGdKMDV2SUVOdmJuUmxiblFuSURvZ2NtVnhkV1Z6ZEM1emRHRjBkWE5VWlhoMExGeHVJQ0FnSUNBZ0lDQm9aV0ZrWlhKek9pQnlaWE53YjI1elpVaGxZV1JsY25Nc1hHNGdJQ0FnSUNBZ0lHTnZibVpwWnpvZ1kyOXVabWxuTEZ4dUlDQWdJQ0FnSUNCeVpYRjFaWE4wT2lCeVpYRjFaWE4wWEc0Z0lDQWdJQ0I5TzF4dVhHNGdJQ0FnSUNCelpYUjBiR1VvY21WemIyeDJaU3dnY21WcVpXTjBMQ0J5WlhOd2IyNXpaU2s3WEc1Y2JpQWdJQ0FnSUM4dklFTnNaV0Z1SUhWd0lISmxjWFZsYzNSY2JpQWdJQ0FnSUhKbGNYVmxjM1FnUFNCdWRXeHNPMXh1SUNBZ0lIMDdYRzVjYmlBZ0lDQXZMeUJJWVc1a2JHVWdiRzkzSUd4bGRtVnNJRzVsZEhkdmNtc2daWEp5YjNKelhHNGdJQ0FnY21WeGRXVnpkQzV2Ym1WeWNtOXlJRDBnWm5WdVkzUnBiMjRnYUdGdVpHeGxSWEp5YjNJb0tTQjdYRzRnSUNBZ0lDQXZMeUJTWldGc0lHVnljbTl5Y3lCaGNtVWdhR2xrWkdWdUlHWnliMjBnZFhNZ1lua2dkR2hsSUdKeWIzZHpaWEpjYmlBZ0lDQWdJQzh2SUc5dVpYSnliM0lnYzJodmRXeGtJRzl1YkhrZ1ptbHlaU0JwWmlCcGRDZHpJR0VnYm1WMGQyOXlheUJsY25KdmNseHVJQ0FnSUNBZ2NtVnFaV04wS0dOeVpXRjBaVVZ5Y205eUtDZE9aWFIzYjNKcklFVnljbTl5Snl3Z1kyOXVabWxuTENCdWRXeHNMQ0J5WlhGMVpYTjBLU2s3WEc1Y2JpQWdJQ0FnSUM4dklFTnNaV0Z1SUhWd0lISmxjWFZsYzNSY2JpQWdJQ0FnSUhKbGNYVmxjM1FnUFNCdWRXeHNPMXh1SUNBZ0lIMDdYRzVjYmlBZ0lDQXZMeUJJWVc1a2JHVWdkR2x0Wlc5MWRGeHVJQ0FnSUhKbGNYVmxjM1F1YjI1MGFXMWxiM1YwSUQwZ1puVnVZM1JwYjI0Z2FHRnVaR3hsVkdsdFpXOTFkQ2dwSUh0Y2JpQWdJQ0FnSUhKbGFtVmpkQ2hqY21WaGRHVkZjbkp2Y2lnbmRHbHRaVzkxZENCdlppQW5JQ3NnWTI5dVptbG5MblJwYldWdmRYUWdLeUFuYlhNZ1pYaGpaV1ZrWldRbkxDQmpiMjVtYVdjc0lDZEZRMDlPVGtGQ1QxSlVSVVFuTEZ4dUlDQWdJQ0FnSUNCeVpYRjFaWE4wS1NrN1hHNWNiaUFnSUNBZ0lDOHZJRU5zWldGdUlIVndJSEpsY1hWbGMzUmNiaUFnSUNBZ0lISmxjWFZsYzNRZ1BTQnVkV3hzTzF4dUlDQWdJSDA3WEc1Y2JpQWdJQ0F2THlCQlpHUWdlSE55WmlCb1pXRmtaWEpjYmlBZ0lDQXZMeUJVYUdseklHbHpJRzl1YkhrZ1pHOXVaU0JwWmlCeWRXNXVhVzVuSUdsdUlHRWdjM1JoYm1SaGNtUWdZbkp2ZDNObGNpQmxiblpwY205dWJXVnVkQzVjYmlBZ0lDQXZMeUJUY0dWamFXWnBZMkZzYkhrZ2JtOTBJR2xtSUhkbEozSmxJR2x1SUdFZ2QyVmlJSGR2Y210bGNpd2diM0lnY21WaFkzUXRibUYwYVhabExseHVJQ0FnSUdsbUlDaDFkR2xzY3k1cGMxTjBZVzVrWVhKa1FuSnZkM05sY2tWdWRpZ3BLU0I3WEc0Z0lDQWdJQ0IyWVhJZ1kyOXZhMmxsY3lBOUlISmxjWFZwY21Vb0p5NHZMaTR2YUdWc2NHVnljeTlqYjI5cmFXVnpKeWs3WEc1Y2JpQWdJQ0FnSUM4dklFRmtaQ0I0YzNKbUlHaGxZV1JsY2x4dUlDQWdJQ0FnZG1GeUlIaHpjbVpXWVd4MVpTQTlJQ2hqYjI1bWFXY3VkMmwwYUVOeVpXUmxiblJwWVd4eklIeDhJR2x6VlZKTVUyRnRaVTl5YVdkcGJpaGpiMjVtYVdjdWRYSnNLU2tnSmlZZ1kyOXVabWxuTG5oemNtWkRiMjlyYVdWT1lXMWxJRDljYmlBZ0lDQWdJQ0FnSUNCamIyOXJhV1Z6TG5KbFlXUW9ZMjl1Wm1sbkxuaHpjbVpEYjI5cmFXVk9ZVzFsS1NBNlhHNGdJQ0FnSUNBZ0lDQWdkVzVrWldacGJtVmtPMXh1WEc0Z0lDQWdJQ0JwWmlBb2VITnlabFpoYkhWbEtTQjdYRzRnSUNBZ0lDQWdJSEpsY1hWbGMzUklaV0ZrWlhKelcyTnZibVpwWnk1NGMzSm1TR1ZoWkdWeVRtRnRaVjBnUFNCNGMzSm1WbUZzZFdVN1hHNGdJQ0FnSUNCOVhHNGdJQ0FnZlZ4dVhHNGdJQ0FnTHk4Z1FXUmtJR2hsWVdSbGNuTWdkRzhnZEdobElISmxjWFZsYzNSY2JpQWdJQ0JwWmlBb0ozTmxkRkpsY1hWbGMzUklaV0ZrWlhJbklHbHVJSEpsY1hWbGMzUXBJSHRjYmlBZ0lDQWdJSFYwYVd4ekxtWnZja1ZoWTJnb2NtVnhkV1Z6ZEVobFlXUmxjbk1zSUdaMWJtTjBhVzl1SUhObGRGSmxjWFZsYzNSSVpXRmtaWElvZG1Gc0xDQnJaWGtwSUh0Y2JpQWdJQ0FnSUNBZ2FXWWdLSFI1Y0dWdlppQnlaWEYxWlhOMFJHRjBZU0E5UFQwZ0ozVnVaR1ZtYVc1bFpDY2dKaVlnYTJWNUxuUnZURzkzWlhKRFlYTmxLQ2tnUFQwOUlDZGpiMjUwWlc1MExYUjVjR1VuS1NCN1hHNGdJQ0FnSUNBZ0lDQWdMeThnVW1WdGIzWmxJRU52Ym5SbGJuUXRWSGx3WlNCcFppQmtZWFJoSUdseklIVnVaR1ZtYVc1bFpGeHVJQ0FnSUNBZ0lDQWdJR1JsYkdWMFpTQnlaWEYxWlhOMFNHVmhaR1Z5YzF0clpYbGRPMXh1SUNBZ0lDQWdJQ0I5SUdWc2MyVWdlMXh1SUNBZ0lDQWdJQ0FnSUM4dklFOTBhR1Z5ZDJselpTQmhaR1FnYUdWaFpHVnlJSFJ2SUhSb1pTQnlaWEYxWlhOMFhHNGdJQ0FnSUNBZ0lDQWdjbVZ4ZFdWemRDNXpaWFJTWlhGMVpYTjBTR1ZoWkdWeUtHdGxlU3dnZG1Gc0tUdGNiaUFnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdmU2s3WEc0Z0lDQWdmVnh1WEc0Z0lDQWdMeThnUVdSa0lIZHBkR2hEY21Wa1pXNTBhV0ZzY3lCMGJ5QnlaWEYxWlhOMElHbG1JRzVsWldSbFpGeHVJQ0FnSUdsbUlDaGpiMjVtYVdjdWQybDBhRU55WldSbGJuUnBZV3h6S1NCN1hHNGdJQ0FnSUNCeVpYRjFaWE4wTG5kcGRHaERjbVZrWlc1MGFXRnNjeUE5SUhSeWRXVTdYRzRnSUNBZ2ZWeHVYRzRnSUNBZ0x5OGdRV1JrSUhKbGMzQnZibk5sVkhsd1pTQjBieUJ5WlhGMVpYTjBJR2xtSUc1bFpXUmxaRnh1SUNBZ0lHbG1JQ2hqYjI1bWFXY3VjbVZ6Y0c5dWMyVlVlWEJsS1NCN1hHNGdJQ0FnSUNCMGNua2dlMXh1SUNBZ0lDQWdJQ0J5WlhGMVpYTjBMbkpsYzNCdmJuTmxWSGx3WlNBOUlHTnZibVpwWnk1eVpYTndiMjV6WlZSNWNHVTdYRzRnSUNBZ0lDQjlJR05oZEdOb0lDaGxLU0I3WEc0Z0lDQWdJQ0FnSUM4dklFVjRjR1ZqZEdWa0lFUlBUVVY0WTJWd2RHbHZiaUIwYUhKdmQyNGdZbmtnWW5KdmQzTmxjbk1nYm05MElHTnZiWEJoZEdsaWJHVWdXRTFNU0hSMGNGSmxjWFZsYzNRZ1RHVjJaV3dnTWk1Y2JpQWdJQ0FnSUNBZ0x5OGdRblYwTENCMGFHbHpJR05oYmlCaVpTQnpkWEJ3Y21WemMyVmtJR1p2Y2lBbmFuTnZiaWNnZEhsd1pTQmhjeUJwZENCallXNGdZbVVnY0dGeWMyVmtJR0o1SUdSbFptRjFiSFFnSjNSeVlXNXpabTl5YlZKbGMzQnZibk5sSnlCbWRXNWpkR2x2Ymk1Y2JpQWdJQ0FnSUNBZ2FXWWdLR052Ym1acFp5NXlaWE53YjI1elpWUjVjR1VnSVQwOUlDZHFjMjl1SnlrZ2UxeHVJQ0FnSUNBZ0lDQWdJSFJvY205M0lHVTdYRzRnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJSDFjYmlBZ0lDQjlYRzVjYmlBZ0lDQXZMeUJJWVc1a2JHVWdjSEp2WjNKbGMzTWdhV1lnYm1WbFpHVmtYRzRnSUNBZ2FXWWdLSFI1Y0dWdlppQmpiMjVtYVdjdWIyNUViM2R1Ykc5aFpGQnliMmR5WlhOeklEMDlQU0FuWm5WdVkzUnBiMjRuS1NCN1hHNGdJQ0FnSUNCeVpYRjFaWE4wTG1Ga1pFVjJaVzUwVEdsemRHVnVaWElvSjNCeWIyZHlaWE56Snl3Z1kyOXVabWxuTG05dVJHOTNibXh2WVdSUWNtOW5jbVZ6Y3lrN1hHNGdJQ0FnZlZ4dVhHNGdJQ0FnTHk4Z1RtOTBJR0ZzYkNCaWNtOTNjMlZ5Y3lCemRYQndiM0owSUhWd2JHOWhaQ0JsZG1WdWRITmNiaUFnSUNCcFppQW9kSGx3Wlc5bUlHTnZibVpwWnk1dmJsVndiRzloWkZCeWIyZHlaWE56SUQwOVBTQW5ablZ1WTNScGIyNG5JQ1ltSUhKbGNYVmxjM1F1ZFhCc2IyRmtLU0I3WEc0Z0lDQWdJQ0J5WlhGMVpYTjBMblZ3Ykc5aFpDNWhaR1JGZG1WdWRFeHBjM1JsYm1WeUtDZHdjbTluY21WemN5Y3NJR052Ym1acFp5NXZibFZ3Ykc5aFpGQnliMmR5WlhOektUdGNiaUFnSUNCOVhHNWNiaUFnSUNCcFppQW9ZMjl1Wm1sbkxtTmhibU5sYkZSdmEyVnVLU0I3WEc0Z0lDQWdJQ0F2THlCSVlXNWtiR1VnWTJGdVkyVnNiR0YwYVc5dVhHNGdJQ0FnSUNCamIyNW1hV2N1WTJGdVkyVnNWRzlyWlc0dWNISnZiV2x6WlM1MGFHVnVLR1oxYm1OMGFXOXVJRzl1UTJGdVkyVnNaV1FvWTJGdVkyVnNLU0I3WEc0Z0lDQWdJQ0FnSUdsbUlDZ2hjbVZ4ZFdWemRDa2dlMXh1SUNBZ0lDQWdJQ0FnSUhKbGRIVnlianRjYmlBZ0lDQWdJQ0FnZlZ4dVhHNGdJQ0FnSUNBZ0lISmxjWFZsYzNRdVlXSnZjblFvS1R0Y2JpQWdJQ0FnSUNBZ2NtVnFaV04wS0dOaGJtTmxiQ2s3WEc0Z0lDQWdJQ0FnSUM4dklFTnNaV0Z1SUhWd0lISmxjWFZsYzNSY2JpQWdJQ0FnSUNBZ2NtVnhkV1Z6ZENBOUlHNTFiR3c3WEc0Z0lDQWdJQ0I5S1R0Y2JpQWdJQ0I5WEc1Y2JpQWdJQ0JwWmlBb2NtVnhkV1Z6ZEVSaGRHRWdQVDA5SUhWdVpHVm1hVzVsWkNrZ2UxeHVJQ0FnSUNBZ2NtVnhkV1Z6ZEVSaGRHRWdQU0J1ZFd4c08xeHVJQ0FnSUgxY2JseHVJQ0FnSUM4dklGTmxibVFnZEdobElISmxjWFZsYzNSY2JpQWdJQ0J5WlhGMVpYTjBMbk5sYm1Rb2NtVnhkV1Z6ZEVSaGRHRXBPMXh1SUNCOUtUdGNibjA3WEc0aUxDSW5kWE5sSUhOMGNtbGpkQ2M3WEc1Y2JuWmhjaUIxZEdsc2N5QTlJSEpsY1hWcGNtVW9KeTR2ZFhScGJITW5LVHRjYm5aaGNpQmlhVzVrSUQwZ2NtVnhkV2x5WlNnbkxpOW9aV3h3WlhKekwySnBibVFuS1R0Y2JuWmhjaUJCZUdsdmN5QTlJSEpsY1hWcGNtVW9KeTR2WTI5eVpTOUJlR2x2Y3ljcE8xeHVkbUZ5SUdSbFptRjFiSFJ6SUQwZ2NtVnhkV2x5WlNnbkxpOWtaV1poZFd4MGN5Y3BPMXh1WEc0dktpcGNiaUFxSUVOeVpXRjBaU0JoYmlCcGJuTjBZVzVqWlNCdlppQkJlR2x2YzF4dUlDcGNiaUFxSUVCd1lYSmhiU0I3VDJKcVpXTjBmU0JrWldaaGRXeDBRMjl1Wm1sbklGUm9aU0JrWldaaGRXeDBJR052Ym1acFp5Qm1iM0lnZEdobElHbHVjM1JoYm1ObFhHNGdLaUJBY21WMGRYSnVJSHRCZUdsdmMzMGdRU0J1WlhjZ2FXNXpkR0Z1WTJVZ2IyWWdRWGhwYjNOY2JpQXFMMXh1Wm5WdVkzUnBiMjRnWTNKbFlYUmxTVzV6ZEdGdVkyVW9aR1ZtWVhWc2RFTnZibVpwWnlrZ2UxeHVJQ0IyWVhJZ1kyOXVkR1Y0ZENBOUlHNWxkeUJCZUdsdmN5aGtaV1poZFd4MFEyOXVabWxuS1R0Y2JpQWdkbUZ5SUdsdWMzUmhibU5sSUQwZ1ltbHVaQ2hCZUdsdmN5NXdjbTkwYjNSNWNHVXVjbVZ4ZFdWemRDd2dZMjl1ZEdWNGRDazdYRzVjYmlBZ0x5OGdRMjl3ZVNCaGVHbHZjeTV3Y205MGIzUjVjR1VnZEc4Z2FXNXpkR0Z1WTJWY2JpQWdkWFJwYkhNdVpYaDBaVzVrS0dsdWMzUmhibU5sTENCQmVHbHZjeTV3Y205MGIzUjVjR1VzSUdOdmJuUmxlSFFwTzF4dVhHNGdJQzh2SUVOdmNIa2dZMjl1ZEdWNGRDQjBieUJwYm5OMFlXNWpaVnh1SUNCMWRHbHNjeTVsZUhSbGJtUW9hVzV6ZEdGdVkyVXNJR052Ym5SbGVIUXBPMXh1WEc0Z0lISmxkSFZ5YmlCcGJuTjBZVzVqWlR0Y2JuMWNibHh1THk4Z1EzSmxZWFJsSUhSb1pTQmtaV1poZFd4MElHbHVjM1JoYm1ObElIUnZJR0psSUdWNGNHOXlkR1ZrWEc1MllYSWdZWGhwYjNNZ1BTQmpjbVZoZEdWSmJuTjBZVzVqWlNoa1pXWmhkV3gwY3lrN1hHNWNiaTh2SUVWNGNHOXpaU0JCZUdsdmN5QmpiR0Z6Y3lCMGJ5QmhiR3h2ZHlCamJHRnpjeUJwYm1obGNtbDBZVzVqWlZ4dVlYaHBiM011UVhocGIzTWdQU0JCZUdsdmN6dGNibHh1THk4Z1JtRmpkRzl5ZVNCbWIzSWdZM0psWVhScGJtY2dibVYzSUdsdWMzUmhibU5sYzF4dVlYaHBiM011WTNKbFlYUmxJRDBnWm5WdVkzUnBiMjRnWTNKbFlYUmxLR2x1YzNSaGJtTmxRMjl1Wm1sbktTQjdYRzRnSUhKbGRIVnliaUJqY21WaGRHVkpibk4wWVc1alpTaDFkR2xzY3k1dFpYSm5aU2hrWldaaGRXeDBjeXdnYVc1emRHRnVZMlZEYjI1bWFXY3BLVHRjYm4wN1hHNWNiaTh2SUVWNGNHOXpaU0JEWVc1alpXd2dKaUJEWVc1alpXeFViMnRsYmx4dVlYaHBiM011UTJGdVkyVnNJRDBnY21WeGRXbHlaU2duTGk5allXNWpaV3d2UTJGdVkyVnNKeWs3WEc1aGVHbHZjeTVEWVc1alpXeFViMnRsYmlBOUlISmxjWFZwY21Vb0p5NHZZMkZ1WTJWc0wwTmhibU5sYkZSdmEyVnVKeWs3WEc1aGVHbHZjeTVwYzBOaGJtTmxiQ0E5SUhKbGNYVnBjbVVvSnk0dlkyRnVZMlZzTDJselEyRnVZMlZzSnlrN1hHNWNiaTh2SUVWNGNHOXpaU0JoYkd3dmMzQnlaV0ZrWEc1aGVHbHZjeTVoYkd3Z1BTQm1kVzVqZEdsdmJpQmhiR3dvY0hKdmJXbHpaWE1wSUh0Y2JpQWdjbVYwZFhKdUlGQnliMjFwYzJVdVlXeHNLSEJ5YjIxcGMyVnpLVHRjYm4wN1hHNWhlR2x2Y3k1emNISmxZV1FnUFNCeVpYRjFhWEpsS0NjdUwyaGxiSEJsY25NdmMzQnlaV0ZrSnlrN1hHNWNibTF2WkhWc1pTNWxlSEJ2Y25SeklEMGdZWGhwYjNNN1hHNWNiaTh2SUVGc2JHOTNJSFZ6WlNCdlppQmtaV1poZFd4MElHbHRjRzl5ZENCemVXNTBZWGdnYVc0Z1ZIbHdaVk5qY21sd2RGeHViVzlrZFd4bExtVjRjRzl5ZEhNdVpHVm1ZWFZzZENBOUlHRjRhVzl6TzF4dUlpd2lKM1Z6WlNCemRISnBZM1FuTzF4dVhHNHZLaXBjYmlBcUlFRWdZRU5oYm1ObGJHQWdhWE1nWVc0Z2IySnFaV04wSUhSb1lYUWdhWE1nZEdoeWIzZHVJSGRvWlc0Z1lXNGdiM0JsY21GMGFXOXVJR2x6SUdOaGJtTmxiR1ZrTGx4dUlDcGNiaUFxSUVCamJHRnpjMXh1SUNvZ1FIQmhjbUZ0SUh0emRISnBibWM5ZlNCdFpYTnpZV2RsSUZSb1pTQnRaWE56WVdkbExseHVJQ292WEc1bWRXNWpkR2x2YmlCRFlXNWpaV3dvYldWemMyRm5aU2tnZTF4dUlDQjBhR2x6TG0xbGMzTmhaMlVnUFNCdFpYTnpZV2RsTzF4dWZWeHVYRzVEWVc1alpXd3VjSEp2ZEc5MGVYQmxMblJ2VTNSeWFXNW5JRDBnWm5WdVkzUnBiMjRnZEc5VGRISnBibWNvS1NCN1hHNGdJSEpsZEhWeWJpQW5RMkZ1WTJWc0p5QXJJQ2gwYUdsekxtMWxjM05oWjJVZ1B5QW5PaUFuSUNzZ2RHaHBjeTV0WlhOellXZGxJRG9nSnljcE8xeHVmVHRjYmx4dVEyRnVZMlZzTG5CeWIzUnZkSGx3WlM1ZlgwTkJUa05GVEY5ZklEMGdkSEoxWlR0Y2JseHViVzlrZFd4bExtVjRjRzl5ZEhNZ1BTQkRZVzVqWld3N1hHNGlMQ0luZFhObElITjBjbWxqZENjN1hHNWNiblpoY2lCRFlXNWpaV3dnUFNCeVpYRjFhWEpsS0NjdUwwTmhibU5sYkNjcE8xeHVYRzR2S2lwY2JpQXFJRUVnWUVOaGJtTmxiRlJ2YTJWdVlDQnBjeUJoYmlCdlltcGxZM1FnZEdoaGRDQmpZVzRnWW1VZ2RYTmxaQ0IwYnlCeVpYRjFaWE4wSUdOaGJtTmxiR3hoZEdsdmJpQnZaaUJoYmlCdmNHVnlZWFJwYjI0dVhHNGdLbHh1SUNvZ1FHTnNZWE56WEc0Z0tpQkFjR0Z5WVcwZ2UwWjFibU4wYVc5dWZTQmxlR1ZqZFhSdmNpQlVhR1VnWlhobFkzVjBiM0lnWm5WdVkzUnBiMjR1WEc0Z0tpOWNibVoxYm1OMGFXOXVJRU5oYm1ObGJGUnZhMlZ1S0dWNFpXTjFkRzl5S1NCN1hHNGdJR2xtSUNoMGVYQmxiMllnWlhobFkzVjBiM0lnSVQwOUlDZG1kVzVqZEdsdmJpY3BJSHRjYmlBZ0lDQjBhSEp2ZHlCdVpYY2dWSGx3WlVWeWNtOXlLQ2RsZUdWamRYUnZjaUJ0ZFhOMElHSmxJR0VnWm5WdVkzUnBiMjR1SnlrN1hHNGdJSDFjYmx4dUlDQjJZWElnY21WemIyeDJaVkJ5YjIxcGMyVTdYRzRnSUhSb2FYTXVjSEp2YldselpTQTlJRzVsZHlCUWNtOXRhWE5sS0daMWJtTjBhVzl1SUhCeWIyMXBjMlZGZUdWamRYUnZjaWh5WlhOdmJIWmxLU0I3WEc0Z0lDQWdjbVZ6YjJ4MlpWQnliMjFwYzJVZ1BTQnlaWE52YkhabE8xeHVJQ0I5S1R0Y2JseHVJQ0IyWVhJZ2RHOXJaVzRnUFNCMGFHbHpPMXh1SUNCbGVHVmpkWFJ2Y2lobWRXNWpkR2x2YmlCallXNWpaV3dvYldWemMyRm5aU2tnZTF4dUlDQWdJR2xtSUNoMGIydGxiaTV5WldGemIyNHBJSHRjYmlBZ0lDQWdJQzh2SUVOaGJtTmxiR3hoZEdsdmJpQm9ZWE1nWVd4eVpXRmtlU0JpWldWdUlISmxjWFZsYzNSbFpGeHVJQ0FnSUNBZ2NtVjBkWEp1TzF4dUlDQWdJSDFjYmx4dUlDQWdJSFJ2YTJWdUxuSmxZWE52YmlBOUlHNWxkeUJEWVc1alpXd29iV1Z6YzJGblpTazdYRzRnSUNBZ2NtVnpiMngyWlZCeWIyMXBjMlVvZEc5clpXNHVjbVZoYzI5dUtUdGNiaUFnZlNrN1hHNTlYRzVjYmk4cUtseHVJQ29nVkdoeWIzZHpJR0VnWUVOaGJtTmxiR0FnYVdZZ1kyRnVZMlZzYkdGMGFXOXVJR2hoY3lCaVpXVnVJSEpsY1hWbGMzUmxaQzVjYmlBcUwxeHVRMkZ1WTJWc1ZHOXJaVzR1Y0hKdmRHOTBlWEJsTG5Sb2NtOTNTV1pTWlhGMVpYTjBaV1FnUFNCbWRXNWpkR2x2YmlCMGFISnZkMGxtVW1WeGRXVnpkR1ZrS0NrZ2UxeHVJQ0JwWmlBb2RHaHBjeTV5WldGemIyNHBJSHRjYmlBZ0lDQjBhSEp2ZHlCMGFHbHpMbkpsWVhOdmJqdGNiaUFnZlZ4dWZUdGNibHh1THlvcVhHNGdLaUJTWlhSMWNtNXpJR0Z1SUc5aWFtVmpkQ0IwYUdGMElHTnZiblJoYVc1eklHRWdibVYzSUdCRFlXNWpaV3hVYjJ0bGJtQWdZVzVrSUdFZ1puVnVZM1JwYjI0Z2RHaGhkQ3dnZDJobGJpQmpZV3hzWldRc1hHNGdLaUJqWVc1alpXeHpJSFJvWlNCZ1EyRnVZMlZzVkc5clpXNWdMbHh1SUNvdlhHNURZVzVqWld4VWIydGxiaTV6YjNWeVkyVWdQU0JtZFc1amRHbHZiaUJ6YjNWeVkyVW9LU0I3WEc0Z0lIWmhjaUJqWVc1alpXdzdYRzRnSUhaaGNpQjBiMnRsYmlBOUlHNWxkeUJEWVc1alpXeFViMnRsYmlobWRXNWpkR2x2YmlCbGVHVmpkWFJ2Y2loaktTQjdYRzRnSUNBZ1kyRnVZMlZzSUQwZ1l6dGNiaUFnZlNrN1hHNGdJSEpsZEhWeWJpQjdYRzRnSUNBZ2RHOXJaVzQ2SUhSdmEyVnVMRnh1SUNBZ0lHTmhibU5sYkRvZ1kyRnVZMlZzWEc0Z0lIMDdYRzU5TzF4dVhHNXRiMlIxYkdVdVpYaHdiM0owY3lBOUlFTmhibU5sYkZSdmEyVnVPMXh1SWl3aUozVnpaU0J6ZEhKcFkzUW5PMXh1WEc1dGIyUjFiR1V1Wlhod2IzSjBjeUE5SUdaMWJtTjBhVzl1SUdselEyRnVZMlZzS0haaGJIVmxLU0I3WEc0Z0lISmxkSFZ5YmlBaElTaDJZV3gxWlNBbUppQjJZV3gxWlM1ZlgwTkJUa05GVEY5ZktUdGNibjA3WEc0aUxDSW5kWE5sSUhOMGNtbGpkQ2M3WEc1Y2JuWmhjaUJrWldaaGRXeDBjeUE5SUhKbGNYVnBjbVVvSnk0dkxpNHZaR1ZtWVhWc2RITW5LVHRjYm5aaGNpQjFkR2xzY3lBOUlISmxjWFZwY21Vb0p5NHZMaTR2ZFhScGJITW5LVHRjYm5aaGNpQkpiblJsY21ObGNIUnZjazFoYm1GblpYSWdQU0J5WlhGMWFYSmxLQ2N1TDBsdWRHVnlZMlZ3ZEc5eVRXRnVZV2RsY2ljcE8xeHVkbUZ5SUdScGMzQmhkR05vVW1WeGRXVnpkQ0E5SUhKbGNYVnBjbVVvSnk0dlpHbHpjR0YwWTJoU1pYRjFaWE4wSnlrN1hHNWNiaThxS2x4dUlDb2dRM0psWVhSbElHRWdibVYzSUdsdWMzUmhibU5sSUc5bUlFRjRhVzl6WEc0Z0tseHVJQ29nUUhCaGNtRnRJSHRQWW1wbFkzUjlJR2x1YzNSaGJtTmxRMjl1Wm1sbklGUm9aU0JrWldaaGRXeDBJR052Ym1acFp5Qm1iM0lnZEdobElHbHVjM1JoYm1ObFhHNGdLaTljYm1aMWJtTjBhVzl1SUVGNGFXOXpLR2x1YzNSaGJtTmxRMjl1Wm1sbktTQjdYRzRnSUhSb2FYTXVaR1ZtWVhWc2RITWdQU0JwYm5OMFlXNWpaVU52Ym1acFp6dGNiaUFnZEdocGN5NXBiblJsY21ObGNIUnZjbk1nUFNCN1hHNGdJQ0FnY21WeGRXVnpkRG9nYm1WM0lFbHVkR1Z5WTJWd2RHOXlUV0Z1WVdkbGNpZ3BMRnh1SUNBZ0lISmxjM0J2Ym5ObE9pQnVaWGNnU1c1MFpYSmpaWEIwYjNKTllXNWhaMlZ5S0NsY2JpQWdmVHRjYm4xY2JseHVMeW9xWEc0Z0tpQkVhWE53WVhSamFDQmhJSEpsY1hWbGMzUmNiaUFxWEc0Z0tpQkFjR0Z5WVcwZ2UwOWlhbVZqZEgwZ1kyOXVabWxuSUZSb1pTQmpiMjVtYVdjZ2MzQmxZMmxtYVdNZ1ptOXlJSFJvYVhNZ2NtVnhkV1Z6ZENBb2JXVnlaMlZrSUhkcGRHZ2dkR2hwY3k1a1pXWmhkV3gwY3lsY2JpQXFMMXh1UVhocGIzTXVjSEp2ZEc5MGVYQmxMbkpsY1hWbGMzUWdQU0JtZFc1amRHbHZiaUJ5WlhGMVpYTjBLR052Ym1acFp5a2dlMXh1SUNBdkttVnpiR2x1ZENCdWJ5MXdZWEpoYlMxeVpXRnpjMmxuYmpvd0tpOWNiaUFnTHk4Z1FXeHNiM2NnWm05eUlHRjRhVzl6S0NkbGVHRnRjR3hsTDNWeWJDZGJMQ0JqYjI1bWFXZGRLU0JoSUd4aElHWmxkR05vSUVGUVNWeHVJQ0JwWmlBb2RIbHdaVzltSUdOdmJtWnBaeUE5UFQwZ0ozTjBjbWx1WnljcElIdGNiaUFnSUNCamIyNW1hV2NnUFNCMWRHbHNjeTV0WlhKblpTaDdYRzRnSUNBZ0lDQjFjbXc2SUdGeVozVnRaVzUwYzFzd1hWeHVJQ0FnSUgwc0lHRnlaM1Z0Wlc1MGMxc3hYU2s3WEc0Z0lIMWNibHh1SUNCamIyNW1hV2NnUFNCMWRHbHNjeTV0WlhKblpTaGtaV1poZFd4MGN5d2dlMjFsZEdodlpEb2dKMmRsZENkOUxDQjBhR2x6TG1SbFptRjFiSFJ6TENCamIyNW1hV2NwTzF4dUlDQmpiMjVtYVdjdWJXVjBhRzlrSUQwZ1kyOXVabWxuTG0xbGRHaHZaQzUwYjB4dmQyVnlRMkZ6WlNncE8xeHVYRzRnSUM4dklFaHZiMnNnZFhBZ2FXNTBaWEpqWlhCMGIzSnpJRzFwWkdSc1pYZGhjbVZjYmlBZ2RtRnlJR05vWVdsdUlEMGdXMlJwYzNCaGRHTm9VbVZ4ZFdWemRDd2dkVzVrWldacGJtVmtYVHRjYmlBZ2RtRnlJSEJ5YjIxcGMyVWdQU0JRY205dGFYTmxMbkpsYzI5c2RtVW9ZMjl1Wm1sbktUdGNibHh1SUNCMGFHbHpMbWx1ZEdWeVkyVndkRzl5Y3k1eVpYRjFaWE4wTG1admNrVmhZMmdvWm5WdVkzUnBiMjRnZFc1emFHbG1kRkpsY1hWbGMzUkpiblJsY21ObGNIUnZjbk1vYVc1MFpYSmpaWEIwYjNJcElIdGNiaUFnSUNCamFHRnBiaTUxYm5Ob2FXWjBLR2x1ZEdWeVkyVndkRzl5TG1aMWJHWnBiR3hsWkN3Z2FXNTBaWEpqWlhCMGIzSXVjbVZxWldOMFpXUXBPMXh1SUNCOUtUdGNibHh1SUNCMGFHbHpMbWx1ZEdWeVkyVndkRzl5Y3k1eVpYTndiMjV6WlM1bWIzSkZZV05vS0daMWJtTjBhVzl1SUhCMWMyaFNaWE53YjI1elpVbHVkR1Z5WTJWd2RHOXljeWhwYm5SbGNtTmxjSFJ2Y2lrZ2UxeHVJQ0FnSUdOb1lXbHVMbkIxYzJnb2FXNTBaWEpqWlhCMGIzSXVablZzWm1sc2JHVmtMQ0JwYm5SbGNtTmxjSFJ2Y2k1eVpXcGxZM1JsWkNrN1hHNGdJSDBwTzF4dVhHNGdJSGRvYVd4bElDaGphR0ZwYmk1c1pXNW5kR2dwSUh0Y2JpQWdJQ0J3Y205dGFYTmxJRDBnY0hKdmJXbHpaUzUwYUdWdUtHTm9ZV2x1TG5Ob2FXWjBLQ2tzSUdOb1lXbHVMbk5vYVdaMEtDa3BPMXh1SUNCOVhHNWNiaUFnY21WMGRYSnVJSEJ5YjIxcGMyVTdYRzU5TzF4dVhHNHZMeUJRY205MmFXUmxJR0ZzYVdGelpYTWdabTl5SUhOMWNIQnZjblJsWkNCeVpYRjFaWE4wSUcxbGRHaHZaSE5jYm5WMGFXeHpMbVp2Y2tWaFkyZ29XeWRrWld4bGRHVW5MQ0FuWjJWMEp5d2dKMmhsWVdRbkxDQW5iM0IwYVc5dWN5ZGRMQ0JtZFc1amRHbHZiaUJtYjNKRllXTm9UV1YwYUc5a1RtOUVZWFJoS0cxbGRHaHZaQ2tnZTF4dUlDQXZLbVZ6YkdsdWRDQm1kVzVqTFc1aGJXVnpPakFxTDF4dUlDQkJlR2x2Y3k1d2NtOTBiM1I1Y0dWYmJXVjBhRzlrWFNBOUlHWjFibU4wYVc5dUtIVnliQ3dnWTI5dVptbG5LU0I3WEc0Z0lDQWdjbVYwZFhKdUlIUm9hWE11Y21WeGRXVnpkQ2gxZEdsc2N5NXRaWEpuWlNoamIyNW1hV2NnZkh3Z2UzMHNJSHRjYmlBZ0lDQWdJRzFsZEdodlpEb2diV1YwYUc5a0xGeHVJQ0FnSUNBZ2RYSnNPaUIxY214Y2JpQWdJQ0I5S1NrN1hHNGdJSDA3WEc1OUtUdGNibHh1ZFhScGJITXVabTl5UldGamFDaGJKM0J2YzNRbkxDQW5jSFYwSnl3Z0ozQmhkR05vSjEwc0lHWjFibU4wYVc5dUlHWnZja1ZoWTJoTlpYUm9iMlJYYVhSb1JHRjBZU2h0WlhSb2IyUXBJSHRjYmlBZ0x5cGxjMnhwYm5RZ1puVnVZeTF1WVcxbGN6b3dLaTljYmlBZ1FYaHBiM011Y0hKdmRHOTBlWEJsVzIxbGRHaHZaRjBnUFNCbWRXNWpkR2x2YmloMWNtd3NJR1JoZEdFc0lHTnZibVpwWnlrZ2UxeHVJQ0FnSUhKbGRIVnliaUIwYUdsekxuSmxjWFZsYzNRb2RYUnBiSE11YldWeVoyVW9ZMjl1Wm1sbklIeDhJSHQ5TENCN1hHNGdJQ0FnSUNCdFpYUm9iMlE2SUcxbGRHaHZaQ3hjYmlBZ0lDQWdJSFZ5YkRvZ2RYSnNMRnh1SUNBZ0lDQWdaR0YwWVRvZ1pHRjBZVnh1SUNBZ0lIMHBLVHRjYmlBZ2ZUdGNibjBwTzF4dVhHNXRiMlIxYkdVdVpYaHdiM0owY3lBOUlFRjRhVzl6TzF4dUlpd2lKM1Z6WlNCemRISnBZM1FuTzF4dVhHNTJZWElnZFhScGJITWdQU0J5WlhGMWFYSmxLQ2N1THk0dUwzVjBhV3h6SnlrN1hHNWNibVoxYm1OMGFXOXVJRWx1ZEdWeVkyVndkRzl5VFdGdVlXZGxjaWdwSUh0Y2JpQWdkR2hwY3k1b1lXNWtiR1Z5Y3lBOUlGdGRPMXh1ZlZ4dVhHNHZLaXBjYmlBcUlFRmtaQ0JoSUc1bGR5QnBiblJsY21ObGNIUnZjaUIwYnlCMGFHVWdjM1JoWTJ0Y2JpQXFYRzRnS2lCQWNHRnlZVzBnZTBaMWJtTjBhVzl1ZlNCbWRXeG1hV3hzWldRZ1ZHaGxJR1oxYm1OMGFXOXVJSFJ2SUdoaGJtUnNaU0JnZEdobGJtQWdabTl5SUdFZ1lGQnliMjFwYzJWZ1hHNGdLaUJBY0dGeVlXMGdlMFoxYm1OMGFXOXVmU0J5WldwbFkzUmxaQ0JVYUdVZ1puVnVZM1JwYjI0Z2RHOGdhR0Z1Wkd4bElHQnlaV3BsWTNSZ0lHWnZjaUJoSUdCUWNtOXRhWE5sWUZ4dUlDcGNiaUFxSUVCeVpYUjFjbTRnZTA1MWJXSmxjbjBnUVc0Z1NVUWdkWE5sWkNCMGJ5QnlaVzF2ZG1VZ2FXNTBaWEpqWlhCMGIzSWdiR0YwWlhKY2JpQXFMMXh1U1c1MFpYSmpaWEIwYjNKTllXNWhaMlZ5TG5CeWIzUnZkSGx3WlM1MWMyVWdQU0JtZFc1amRHbHZiaUIxYzJVb1puVnNabWxzYkdWa0xDQnlaV3BsWTNSbFpDa2dlMXh1SUNCMGFHbHpMbWhoYm1Sc1pYSnpMbkIxYzJnb2UxeHVJQ0FnSUdaMWJHWnBiR3hsWkRvZ1puVnNabWxzYkdWa0xGeHVJQ0FnSUhKbGFtVmpkR1ZrT2lCeVpXcGxZM1JsWkZ4dUlDQjlLVHRjYmlBZ2NtVjBkWEp1SUhSb2FYTXVhR0Z1Wkd4bGNuTXViR1Z1WjNSb0lDMGdNVHRjYm4wN1hHNWNiaThxS2x4dUlDb2dVbVZ0YjNabElHRnVJR2x1ZEdWeVkyVndkRzl5SUdaeWIyMGdkR2hsSUhOMFlXTnJYRzRnS2x4dUlDb2dRSEJoY21GdElIdE9kVzFpWlhKOUlHbGtJRlJvWlNCSlJDQjBhR0YwSUhkaGN5QnlaWFIxY201bFpDQmllU0JnZFhObFlGeHVJQ292WEc1SmJuUmxjbU5sY0hSdmNrMWhibUZuWlhJdWNISnZkRzkwZVhCbExtVnFaV04wSUQwZ1puVnVZM1JwYjI0Z1pXcGxZM1FvYVdRcElIdGNiaUFnYVdZZ0tIUm9hWE11YUdGdVpHeGxjbk5iYVdSZEtTQjdYRzRnSUNBZ2RHaHBjeTVvWVc1a2JHVnljMXRwWkYwZ1BTQnVkV3hzTzF4dUlDQjlYRzU5TzF4dVhHNHZLaXBjYmlBcUlFbDBaWEpoZEdVZ2IzWmxjaUJoYkd3Z2RHaGxJSEpsWjJsemRHVnlaV1FnYVc1MFpYSmpaWEIwYjNKelhHNGdLbHh1SUNvZ1ZHaHBjeUJ0WlhSb2IyUWdhWE1nY0dGeWRHbGpkV3hoY214NUlIVnpaV1oxYkNCbWIzSWdjMnRwY0hCcGJtY2diM1psY2lCaGJubGNiaUFxSUdsdWRHVnlZMlZ3ZEc5eWN5QjBhR0YwSUcxaGVTQm9ZWFpsSUdKbFkyOXRaU0JnYm5Wc2JHQWdZMkZzYkdsdVp5QmdaV3BsWTNSZ0xseHVJQ3BjYmlBcUlFQndZWEpoYlNCN1JuVnVZM1JwYjI1OUlHWnVJRlJvWlNCbWRXNWpkR2x2YmlCMGJ5QmpZV3hzSUdadmNpQmxZV05vSUdsdWRHVnlZMlZ3ZEc5eVhHNGdLaTljYmtsdWRHVnlZMlZ3ZEc5eVRXRnVZV2RsY2k1d2NtOTBiM1I1Y0dVdVptOXlSV0ZqYUNBOUlHWjFibU4wYVc5dUlHWnZja1ZoWTJnb1ptNHBJSHRjYmlBZ2RYUnBiSE11Wm05eVJXRmphQ2gwYUdsekxtaGhibVJzWlhKekxDQm1kVzVqZEdsdmJpQm1iM0pGWVdOb1NHRnVaR3hsY2lob0tTQjdYRzRnSUNBZ2FXWWdLR2dnSVQwOUlHNTFiR3dwSUh0Y2JpQWdJQ0FnSUdadUtHZ3BPMXh1SUNBZ0lIMWNiaUFnZlNrN1hHNTlPMXh1WEc1dGIyUjFiR1V1Wlhod2IzSjBjeUE5SUVsdWRHVnlZMlZ3ZEc5eVRXRnVZV2RsY2p0Y2JpSXNJaWQxYzJVZ2MzUnlhV04wSnp0Y2JseHVkbUZ5SUdWdWFHRnVZMlZGY25KdmNpQTlJSEpsY1hWcGNtVW9KeTR2Wlc1b1lXNWpaVVZ5Y205eUp5azdYRzVjYmk4cUtseHVJQ29nUTNKbFlYUmxJR0Z1SUVWeWNtOXlJSGRwZEdnZ2RHaGxJSE53WldOcFptbGxaQ0J0WlhOellXZGxMQ0JqYjI1bWFXY3NJR1Z5Y205eUlHTnZaR1VzSUhKbGNYVmxjM1FnWVc1a0lISmxjM0J2Ym5ObExseHVJQ3BjYmlBcUlFQndZWEpoYlNCN2MzUnlhVzVuZlNCdFpYTnpZV2RsSUZSb1pTQmxjbkp2Y2lCdFpYTnpZV2RsTGx4dUlDb2dRSEJoY21GdElIdFBZbXBsWTNSOUlHTnZibVpwWnlCVWFHVWdZMjl1Wm1sbkxseHVJQ29nUUhCaGNtRnRJSHR6ZEhKcGJtZDlJRnRqYjJSbFhTQlVhR1VnWlhKeWIzSWdZMjlrWlNBb1ptOXlJR1Y0WVcxd2JHVXNJQ2RGUTA5T1RrRkNUMUpVUlVRbktTNWNiaUFxSUVCd1lYSmhiU0I3VDJKcVpXTjBmU0JiY21WeGRXVnpkRjBnVkdobElISmxjWFZsYzNRdVhHNGdLaUJBY0dGeVlXMGdlMDlpYW1WamRIMGdXM0psYzNCdmJuTmxYU0JVYUdVZ2NtVnpjRzl1YzJVdVhHNGdLaUJBY21WMGRYSnVjeUI3UlhKeWIzSjlJRlJvWlNCamNtVmhkR1ZrSUdWeWNtOXlMbHh1SUNvdlhHNXRiMlIxYkdVdVpYaHdiM0owY3lBOUlHWjFibU4wYVc5dUlHTnlaV0YwWlVWeWNtOXlLRzFsYzNOaFoyVXNJR052Ym1acFp5d2dZMjlrWlN3Z2NtVnhkV1Z6ZEN3Z2NtVnpjRzl1YzJVcElIdGNiaUFnZG1GeUlHVnljbTl5SUQwZ2JtVjNJRVZ5Y205eUtHMWxjM05oWjJVcE8xeHVJQ0J5WlhSMWNtNGdaVzVvWVc1alpVVnljbTl5S0dWeWNtOXlMQ0JqYjI1bWFXY3NJR052WkdVc0lISmxjWFZsYzNRc0lISmxjM0J2Ym5ObEtUdGNibjA3WEc0aUxDSW5kWE5sSUhOMGNtbGpkQ2M3WEc1Y2JuWmhjaUIxZEdsc2N5QTlJSEpsY1hWcGNtVW9KeTR2TGk0dmRYUnBiSE1uS1R0Y2JuWmhjaUIwY21GdWMyWnZjbTFFWVhSaElEMGdjbVZ4ZFdseVpTZ25MaTkwY21GdWMyWnZjbTFFWVhSaEp5azdYRzUyWVhJZ2FYTkRZVzVqWld3Z1BTQnlaWEYxYVhKbEtDY3VMaTlqWVc1alpXd3ZhWE5EWVc1alpXd25LVHRjYm5aaGNpQmtaV1poZFd4MGN5QTlJSEpsY1hWcGNtVW9KeTR1TDJSbFptRjFiSFJ6SnlrN1hHNTJZWElnYVhOQlluTnZiSFYwWlZWU1RDQTlJSEpsY1hWcGNtVW9KeTR2TGk0dmFHVnNjR1Z5Y3k5cGMwRmljMjlzZFhSbFZWSk1KeWs3WEc1MllYSWdZMjl0WW1sdVpWVlNUSE1nUFNCeVpYRjFhWEpsS0NjdUx5NHVMMmhsYkhCbGNuTXZZMjl0WW1sdVpWVlNUSE1uS1R0Y2JseHVMeW9xWEc0Z0tpQlVhSEp2ZDNNZ1lTQmdRMkZ1WTJWc1lDQnBaaUJqWVc1alpXeHNZWFJwYjI0Z2FHRnpJR0psWlc0Z2NtVnhkV1Z6ZEdWa0xseHVJQ292WEc1bWRXNWpkR2x2YmlCMGFISnZkMGxtUTJGdVkyVnNiR0YwYVc5dVVtVnhkV1Z6ZEdWa0tHTnZibVpwWnlrZ2UxeHVJQ0JwWmlBb1kyOXVabWxuTG1OaGJtTmxiRlJ2YTJWdUtTQjdYRzRnSUNBZ1kyOXVabWxuTG1OaGJtTmxiRlJ2YTJWdUxuUm9jbTkzU1daU1pYRjFaWE4wWldRb0tUdGNiaUFnZlZ4dWZWeHVYRzR2S2lwY2JpQXFJRVJwYzNCaGRHTm9JR0VnY21WeGRXVnpkQ0IwYnlCMGFHVWdjMlZ5ZG1WeUlIVnphVzVuSUhSb1pTQmpiMjVtYVdkMWNtVmtJR0ZrWVhCMFpYSXVYRzRnS2x4dUlDb2dRSEJoY21GdElIdHZZbXBsWTNSOUlHTnZibVpwWnlCVWFHVWdZMjl1Wm1sbklIUm9ZWFFnYVhNZ2RHOGdZbVVnZFhObFpDQm1iM0lnZEdobElISmxjWFZsYzNSY2JpQXFJRUJ5WlhSMWNtNXpJSHRRY205dGFYTmxmU0JVYUdVZ1VISnZiV2x6WlNCMGJ5QmlaU0JtZFd4bWFXeHNaV1JjYmlBcUwxeHViVzlrZFd4bExtVjRjRzl5ZEhNZ1BTQm1kVzVqZEdsdmJpQmthWE53WVhSamFGSmxjWFZsYzNRb1kyOXVabWxuS1NCN1hHNGdJSFJvY205M1NXWkRZVzVqWld4c1lYUnBiMjVTWlhGMVpYTjBaV1FvWTI5dVptbG5LVHRjYmx4dUlDQXZMeUJUZFhCd2IzSjBJR0poYzJWVlVrd2dZMjl1Wm1sblhHNGdJR2xtSUNoamIyNW1hV2N1WW1GelpWVlNUQ0FtSmlBaGFYTkJZbk52YkhWMFpWVlNUQ2hqYjI1bWFXY3VkWEpzS1NrZ2UxeHVJQ0FnSUdOdmJtWnBaeTUxY213Z1BTQmpiMjFpYVc1bFZWSk1jeWhqYjI1bWFXY3VZbUZ6WlZWU1RDd2dZMjl1Wm1sbkxuVnliQ2s3WEc0Z0lIMWNibHh1SUNBdkx5QkZibk4xY21VZ2FHVmhaR1Z5Y3lCbGVHbHpkRnh1SUNCamIyNW1hV2N1YUdWaFpHVnljeUE5SUdOdmJtWnBaeTVvWldGa1pYSnpJSHg4SUh0OU8xeHVYRzRnSUM4dklGUnlZVzV6Wm05eWJTQnlaWEYxWlhOMElHUmhkR0ZjYmlBZ1kyOXVabWxuTG1SaGRHRWdQU0IwY21GdWMyWnZjbTFFWVhSaEtGeHVJQ0FnSUdOdmJtWnBaeTVrWVhSaExGeHVJQ0FnSUdOdmJtWnBaeTVvWldGa1pYSnpMRnh1SUNBZ0lHTnZibVpwWnk1MGNtRnVjMlp2Y20xU1pYRjFaWE4wWEc0Z0lDazdYRzVjYmlBZ0x5OGdSbXhoZEhSbGJpQm9aV0ZrWlhKelhHNGdJR052Ym1acFp5NW9aV0ZrWlhKeklEMGdkWFJwYkhNdWJXVnlaMlVvWEc0Z0lDQWdZMjl1Wm1sbkxtaGxZV1JsY25NdVkyOXRiVzl1SUh4OElIdDlMRnh1SUNBZ0lHTnZibVpwWnk1b1pXRmtaWEp6VzJOdmJtWnBaeTV0WlhSb2IyUmRJSHg4SUh0OUxGeHVJQ0FnSUdOdmJtWnBaeTVvWldGa1pYSnpJSHg4SUh0OVhHNGdJQ2s3WEc1Y2JpQWdkWFJwYkhNdVptOXlSV0ZqYUNoY2JpQWdJQ0JiSjJSbGJHVjBaU2NzSUNkblpYUW5MQ0FuYUdWaFpDY3NJQ2R3YjNOMEp5d2dKM0IxZENjc0lDZHdZWFJqYUNjc0lDZGpiMjF0YjI0blhTeGNiaUFnSUNCbWRXNWpkR2x2YmlCamJHVmhia2hsWVdSbGNrTnZibVpwWnlodFpYUm9iMlFwSUh0Y2JpQWdJQ0FnSUdSbGJHVjBaU0JqYjI1bWFXY3VhR1ZoWkdWeWMxdHRaWFJvYjJSZE8xeHVJQ0FnSUgxY2JpQWdLVHRjYmx4dUlDQjJZWElnWVdSaGNIUmxjaUE5SUdOdmJtWnBaeTVoWkdGd2RHVnlJSHg4SUdSbFptRjFiSFJ6TG1Ga1lYQjBaWEk3WEc1Y2JpQWdjbVYwZFhKdUlHRmtZWEIwWlhJb1kyOXVabWxuS1M1MGFHVnVLR1oxYm1OMGFXOXVJRzl1UVdSaGNIUmxjbEpsYzI5c2RYUnBiMjRvY21WemNHOXVjMlVwSUh0Y2JpQWdJQ0IwYUhKdmQwbG1RMkZ1WTJWc2JHRjBhVzl1VW1WeGRXVnpkR1ZrS0dOdmJtWnBaeWs3WEc1Y2JpQWdJQ0F2THlCVWNtRnVjMlp2Y20wZ2NtVnpjRzl1YzJVZ1pHRjBZVnh1SUNBZ0lISmxjM0J2Ym5ObExtUmhkR0VnUFNCMGNtRnVjMlp2Y20xRVlYUmhLRnh1SUNBZ0lDQWdjbVZ6Y0c5dWMyVXVaR0YwWVN4Y2JpQWdJQ0FnSUhKbGMzQnZibk5sTG1obFlXUmxjbk1zWEc0Z0lDQWdJQ0JqYjI1bWFXY3VkSEpoYm5ObWIzSnRVbVZ6Y0c5dWMyVmNiaUFnSUNBcE8xeHVYRzRnSUNBZ2NtVjBkWEp1SUhKbGMzQnZibk5sTzF4dUlDQjlMQ0JtZFc1amRHbHZiaUJ2YmtGa1lYQjBaWEpTWldwbFkzUnBiMjRvY21WaGMyOXVLU0I3WEc0Z0lDQWdhV1lnS0NGcGMwTmhibU5sYkNoeVpXRnpiMjRwS1NCN1hHNGdJQ0FnSUNCMGFISnZkMGxtUTJGdVkyVnNiR0YwYVc5dVVtVnhkV1Z6ZEdWa0tHTnZibVpwWnlrN1hHNWNiaUFnSUNBZ0lDOHZJRlJ5WVc1elptOXliU0J5WlhOd2IyNXpaU0JrWVhSaFhHNGdJQ0FnSUNCcFppQW9jbVZoYzI5dUlDWW1JSEpsWVhOdmJpNXlaWE53YjI1elpTa2dlMXh1SUNBZ0lDQWdJQ0J5WldGemIyNHVjbVZ6Y0c5dWMyVXVaR0YwWVNBOUlIUnlZVzV6Wm05eWJVUmhkR0VvWEc0Z0lDQWdJQ0FnSUNBZ2NtVmhjMjl1TG5KbGMzQnZibk5sTG1SaGRHRXNYRzRnSUNBZ0lDQWdJQ0FnY21WaGMyOXVMbkpsYzNCdmJuTmxMbWhsWVdSbGNuTXNYRzRnSUNBZ0lDQWdJQ0FnWTI5dVptbG5MblJ5WVc1elptOXliVkpsYzNCdmJuTmxYRzRnSUNBZ0lDQWdJQ2s3WEc0Z0lDQWdJQ0I5WEc0Z0lDQWdmVnh1WEc0Z0lDQWdjbVYwZFhKdUlGQnliMjFwYzJVdWNtVnFaV04wS0hKbFlYTnZiaWs3WEc0Z0lIMHBPMXh1ZlR0Y2JpSXNJaWQxYzJVZ2MzUnlhV04wSnp0Y2JseHVMeW9xWEc0Z0tpQlZjR1JoZEdVZ1lXNGdSWEp5YjNJZ2QybDBhQ0IwYUdVZ2MzQmxZMmxtYVdWa0lHTnZibVpwWnl3Z1pYSnliM0lnWTI5a1pTd2dZVzVrSUhKbGMzQnZibk5sTGx4dUlDcGNiaUFxSUVCd1lYSmhiU0I3UlhKeWIzSjlJR1Z5Y205eUlGUm9aU0JsY25KdmNpQjBieUIxY0dSaGRHVXVYRzRnS2lCQWNHRnlZVzBnZTA5aWFtVmpkSDBnWTI5dVptbG5JRlJvWlNCamIyNW1hV2N1WEc0Z0tpQkFjR0Z5WVcwZ2UzTjBjbWx1WjMwZ1cyTnZaR1ZkSUZSb1pTQmxjbkp2Y2lCamIyUmxJQ2htYjNJZ1pYaGhiWEJzWlN3Z0owVkRUMDVPUVVKUFVsUkZSQ2NwTGx4dUlDb2dRSEJoY21GdElIdFBZbXBsWTNSOUlGdHlaWEYxWlhOMFhTQlVhR1VnY21WeGRXVnpkQzVjYmlBcUlFQndZWEpoYlNCN1QySnFaV04wZlNCYmNtVnpjRzl1YzJWZElGUm9aU0J5WlhOd2IyNXpaUzVjYmlBcUlFQnlaWFIxY201eklIdEZjbkp2Y24wZ1ZHaGxJR1Z5Y205eUxseHVJQ292WEc1dGIyUjFiR1V1Wlhod2IzSjBjeUE5SUdaMWJtTjBhVzl1SUdWdWFHRnVZMlZGY25KdmNpaGxjbkp2Y2l3Z1kyOXVabWxuTENCamIyUmxMQ0J5WlhGMVpYTjBMQ0J5WlhOd2IyNXpaU2tnZTF4dUlDQmxjbkp2Y2k1amIyNW1hV2NnUFNCamIyNW1hV2M3WEc0Z0lHbG1JQ2hqYjJSbEtTQjdYRzRnSUNBZ1pYSnliM0l1WTI5a1pTQTlJR052WkdVN1hHNGdJSDFjYmlBZ1pYSnliM0l1Y21WeGRXVnpkQ0E5SUhKbGNYVmxjM1E3WEc0Z0lHVnljbTl5TG5KbGMzQnZibk5sSUQwZ2NtVnpjRzl1YzJVN1hHNGdJSEpsZEhWeWJpQmxjbkp2Y2p0Y2JuMDdYRzRpTENJbmRYTmxJSE4wY21samRDYzdYRzVjYm5aaGNpQmpjbVZoZEdWRmNuSnZjaUE5SUhKbGNYVnBjbVVvSnk0dlkzSmxZWFJsUlhKeWIzSW5LVHRjYmx4dUx5b3FYRzRnS2lCU1pYTnZiSFpsSUc5eUlISmxhbVZqZENCaElGQnliMjFwYzJVZ1ltRnpaV1FnYjI0Z2NtVnpjRzl1YzJVZ2MzUmhkSFZ6TGx4dUlDcGNiaUFxSUVCd1lYSmhiU0I3Um5WdVkzUnBiMjU5SUhKbGMyOXNkbVVnUVNCbWRXNWpkR2x2YmlCMGFHRjBJSEpsYzI5c2RtVnpJSFJvWlNCd2NtOXRhWE5sTGx4dUlDb2dRSEJoY21GdElIdEdkVzVqZEdsdmJuMGdjbVZxWldOMElFRWdablZ1WTNScGIyNGdkR2hoZENCeVpXcGxZM1J6SUhSb1pTQndjbTl0YVhObExseHVJQ29nUUhCaGNtRnRJSHR2WW1wbFkzUjlJSEpsYzNCdmJuTmxJRlJvWlNCeVpYTndiMjV6WlM1Y2JpQXFMMXh1Ylc5a2RXeGxMbVY0Y0c5eWRITWdQU0JtZFc1amRHbHZiaUJ6WlhSMGJHVW9jbVZ6YjJ4MlpTd2djbVZxWldOMExDQnlaWE53YjI1elpTa2dlMXh1SUNCMllYSWdkbUZzYVdSaGRHVlRkR0YwZFhNZ1BTQnlaWE53YjI1elpTNWpiMjVtYVdjdWRtRnNhV1JoZEdWVGRHRjBkWE03WEc0Z0lDOHZJRTV2ZEdVNklITjBZWFIxY3lCcGN5QnViM1FnWlhod2IzTmxaQ0JpZVNCWVJHOXRZV2x1VW1WeGRXVnpkRnh1SUNCcFppQW9JWEpsYzNCdmJuTmxMbk4wWVhSMWN5QjhmQ0FoZG1Gc2FXUmhkR1ZUZEdGMGRYTWdmSHdnZG1Gc2FXUmhkR1ZUZEdGMGRYTW9jbVZ6Y0c5dWMyVXVjM1JoZEhWektTa2dlMXh1SUNBZ0lISmxjMjlzZG1Vb2NtVnpjRzl1YzJVcE8xeHVJQ0I5SUdWc2MyVWdlMXh1SUNBZ0lISmxhbVZqZENoamNtVmhkR1ZGY25KdmNpaGNiaUFnSUNBZ0lDZFNaWEYxWlhOMElHWmhhV3hsWkNCM2FYUm9JSE4wWVhSMWN5QmpiMlJsSUNjZ0t5QnlaWE53YjI1elpTNXpkR0YwZFhNc1hHNGdJQ0FnSUNCeVpYTndiMjV6WlM1amIyNW1hV2NzWEc0Z0lDQWdJQ0J1ZFd4c0xGeHVJQ0FnSUNBZ2NtVnpjRzl1YzJVdWNtVnhkV1Z6ZEN4Y2JpQWdJQ0FnSUhKbGMzQnZibk5sWEc0Z0lDQWdLU2s3WEc0Z0lIMWNibjA3WEc0aUxDSW5kWE5sSUhOMGNtbGpkQ2M3WEc1Y2JuWmhjaUIxZEdsc2N5QTlJSEpsY1hWcGNtVW9KeTR2TGk0dmRYUnBiSE1uS1R0Y2JseHVMeW9xWEc0Z0tpQlVjbUZ1YzJadmNtMGdkR2hsSUdSaGRHRWdabTl5SUdFZ2NtVnhkV1Z6ZENCdmNpQmhJSEpsYzNCdmJuTmxYRzRnS2x4dUlDb2dRSEJoY21GdElIdFBZbXBsWTNSOFUzUnlhVzVuZlNCa1lYUmhJRlJvWlNCa1lYUmhJSFJ2SUdKbElIUnlZVzV6Wm05eWJXVmtYRzRnS2lCQWNHRnlZVzBnZTBGeWNtRjVmU0JvWldGa1pYSnpJRlJvWlNCb1pXRmtaWEp6SUdadmNpQjBhR1VnY21WeGRXVnpkQ0J2Y2lCeVpYTndiMjV6WlZ4dUlDb2dRSEJoY21GdElIdEJjbkpoZVh4R2RXNWpkR2x2Ym4wZ1ptNXpJRUVnYzJsdVoyeGxJR1oxYm1OMGFXOXVJRzl5SUVGeWNtRjVJRzltSUdaMWJtTjBhVzl1YzF4dUlDb2dRSEpsZEhWeWJuTWdleXA5SUZSb1pTQnlaWE4xYkhScGJtY2dkSEpoYm5ObWIzSnRaV1FnWkdGMFlWeHVJQ292WEc1dGIyUjFiR1V1Wlhod2IzSjBjeUE5SUdaMWJtTjBhVzl1SUhSeVlXNXpabTl5YlVSaGRHRW9aR0YwWVN3Z2FHVmhaR1Z5Y3l3Z1ptNXpLU0I3WEc0Z0lDOHFaWE5zYVc1MElHNXZMWEJoY21GdExYSmxZWE56YVdkdU9qQXFMMXh1SUNCMWRHbHNjeTVtYjNKRllXTm9LR1p1Y3l3Z1puVnVZM1JwYjI0Z2RISmhibk5tYjNKdEtHWnVLU0I3WEc0Z0lDQWdaR0YwWVNBOUlHWnVLR1JoZEdFc0lHaGxZV1JsY25NcE8xeHVJQ0I5S1R0Y2JseHVJQ0J5WlhSMWNtNGdaR0YwWVR0Y2JuMDdYRzRpTENJbmRYTmxJSE4wY21samRDYzdYRzVjYm5aaGNpQjFkR2xzY3lBOUlISmxjWFZwY21Vb0p5NHZkWFJwYkhNbktUdGNiblpoY2lCdWIzSnRZV3hwZW1WSVpXRmtaWEpPWVcxbElEMGdjbVZ4ZFdseVpTZ25MaTlvWld4d1pYSnpMMjV2Y20xaGJHbDZaVWhsWVdSbGNrNWhiV1VuS1R0Y2JseHVkbUZ5SUVSRlJrRlZURlJmUTA5T1ZFVk9WRjlVV1ZCRklEMGdlMXh1SUNBblEyOXVkR1Z1ZEMxVWVYQmxKem9nSjJGd2NHeHBZMkYwYVc5dUwzZ3RkM2QzTFdadmNtMHRkWEpzWlc1amIyUmxaQ2RjYm4wN1hHNWNibVoxYm1OMGFXOXVJSE5sZEVOdmJuUmxiblJVZVhCbFNXWlZibk5sZENob1pXRmtaWEp6TENCMllXeDFaU2tnZTF4dUlDQnBaaUFvSVhWMGFXeHpMbWx6Vlc1a1pXWnBibVZrS0dobFlXUmxjbk1wSUNZbUlIVjBhV3h6TG1selZXNWtaV1pwYm1Wa0tHaGxZV1JsY25OYkowTnZiblJsYm5RdFZIbHdaU2RkS1NrZ2UxeHVJQ0FnSUdobFlXUmxjbk5iSjBOdmJuUmxiblF0Vkhsd1pTZGRJRDBnZG1Gc2RXVTdYRzRnSUgxY2JuMWNibHh1Wm5WdVkzUnBiMjRnWjJWMFJHVm1ZWFZzZEVGa1lYQjBaWElvS1NCN1hHNGdJSFpoY2lCaFpHRndkR1Z5TzF4dUlDQnBaaUFvZEhsd1pXOW1JRmhOVEVoMGRIQlNaWEYxWlhOMElDRTlQU0FuZFc1a1pXWnBibVZrSnlrZ2UxeHVJQ0FnSUM4dklFWnZjaUJpY205M2MyVnljeUIxYzJVZ1dFaFNJR0ZrWVhCMFpYSmNiaUFnSUNCaFpHRndkR1Z5SUQwZ2NtVnhkV2x5WlNnbkxpOWhaR0Z3ZEdWeWN5OTRhSEluS1R0Y2JpQWdmU0JsYkhObElHbG1JQ2gwZVhCbGIyWWdjSEp2WTJWemN5QWhQVDBnSjNWdVpHVm1hVzVsWkNjcElIdGNiaUFnSUNBdkx5QkdiM0lnYm05a1pTQjFjMlVnU0ZSVVVDQmhaR0Z3ZEdWeVhHNGdJQ0FnWVdSaGNIUmxjaUE5SUhKbGNYVnBjbVVvSnk0dllXUmhjSFJsY25NdmFIUjBjQ2NwTzF4dUlDQjlYRzRnSUhKbGRIVnliaUJoWkdGd2RHVnlPMXh1ZlZ4dVhHNTJZWElnWkdWbVlYVnNkSE1nUFNCN1hHNGdJR0ZrWVhCMFpYSTZJR2RsZEVSbFptRjFiSFJCWkdGd2RHVnlLQ2tzWEc1Y2JpQWdkSEpoYm5ObWIzSnRVbVZ4ZFdWemREb2dXMloxYm1OMGFXOXVJSFJ5WVc1elptOXliVkpsY1hWbGMzUW9aR0YwWVN3Z2FHVmhaR1Z5Y3lrZ2UxeHVJQ0FnSUc1dmNtMWhiR2w2WlVobFlXUmxjazVoYldVb2FHVmhaR1Z5Y3l3Z0owTnZiblJsYm5RdFZIbHdaU2NwTzF4dUlDQWdJR2xtSUNoMWRHbHNjeTVwYzBadmNtMUVZWFJoS0dSaGRHRXBJSHg4WEc0Z0lDQWdJQ0IxZEdsc2N5NXBjMEZ5Y21GNVFuVm1abVZ5S0dSaGRHRXBJSHg4WEc0Z0lDQWdJQ0IxZEdsc2N5NXBjMEoxWm1abGNpaGtZWFJoS1NCOGZGeHVJQ0FnSUNBZ2RYUnBiSE11YVhOVGRISmxZVzBvWkdGMFlTa2dmSHhjYmlBZ0lDQWdJSFYwYVd4ekxtbHpSbWxzWlNoa1lYUmhLU0I4ZkZ4dUlDQWdJQ0FnZFhScGJITXVhWE5DYkc5aUtHUmhkR0VwWEc0Z0lDQWdLU0I3WEc0Z0lDQWdJQ0J5WlhSMWNtNGdaR0YwWVR0Y2JpQWdJQ0I5WEc0Z0lDQWdhV1lnS0hWMGFXeHpMbWx6UVhKeVlYbENkV1ptWlhKV2FXVjNLR1JoZEdFcEtTQjdYRzRnSUNBZ0lDQnlaWFIxY200Z1pHRjBZUzVpZFdabVpYSTdYRzRnSUNBZ2ZWeHVJQ0FnSUdsbUlDaDFkR2xzY3k1cGMxVlNURk5sWVhKamFGQmhjbUZ0Y3loa1lYUmhLU2tnZTF4dUlDQWdJQ0FnYzJWMFEyOXVkR1Z1ZEZSNWNHVkpabFZ1YzJWMEtHaGxZV1JsY25Nc0lDZGhjSEJzYVdOaGRHbHZiaTk0TFhkM2R5MW1iM0p0TFhWeWJHVnVZMjlrWldRN1kyaGhjbk5sZEQxMWRHWXRPQ2NwTzF4dUlDQWdJQ0FnY21WMGRYSnVJR1JoZEdFdWRHOVRkSEpwYm1jb0tUdGNiaUFnSUNCOVhHNGdJQ0FnYVdZZ0tIVjBhV3h6TG1selQySnFaV04wS0dSaGRHRXBLU0I3WEc0Z0lDQWdJQ0J6WlhSRGIyNTBaVzUwVkhsd1pVbG1WVzV6WlhRb2FHVmhaR1Z5Y3l3Z0oyRndjR3hwWTJGMGFXOXVMMnB6YjI0N1kyaGhjbk5sZEQxMWRHWXRPQ2NwTzF4dUlDQWdJQ0FnY21WMGRYSnVJRXBUVDA0dWMzUnlhVzVuYVdaNUtHUmhkR0VwTzF4dUlDQWdJSDFjYmlBZ0lDQnlaWFIxY200Z1pHRjBZVHRjYmlBZ2ZWMHNYRzVjYmlBZ2RISmhibk5tYjNKdFVtVnpjRzl1YzJVNklGdG1kVzVqZEdsdmJpQjBjbUZ1YzJadmNtMVNaWE53YjI1elpTaGtZWFJoS1NCN1hHNGdJQ0FnTHlwbGMyeHBiblFnYm04dGNHRnlZVzB0Y21WaGMzTnBaMjQ2TUNvdlhHNGdJQ0FnYVdZZ0tIUjVjR1Z2WmlCa1lYUmhJRDA5UFNBbmMzUnlhVzVuSnlrZ2UxeHVJQ0FnSUNBZ2RISjVJSHRjYmlBZ0lDQWdJQ0FnWkdGMFlTQTlJRXBUVDA0dWNHRnljMlVvWkdGMFlTazdYRzRnSUNBZ0lDQjlJR05oZEdOb0lDaGxLU0I3SUM4cUlFbG5ibTl5WlNBcUx5QjlYRzRnSUNBZ2ZWeHVJQ0FnSUhKbGRIVnliaUJrWVhSaE8xeHVJQ0I5WFN4Y2JseHVJQ0F2S2lwY2JpQWdJQ29nUVNCMGFXMWxiM1YwSUdsdUlHMXBiR3hwYzJWamIyNWtjeUIwYnlCaFltOXlkQ0JoSUhKbGNYVmxjM1F1SUVsbUlITmxkQ0IwYnlBd0lDaGtaV1poZFd4MEtTQmhYRzRnSUNBcUlIUnBiV1Z2ZFhRZ2FYTWdibTkwSUdOeVpXRjBaV1F1WEc0Z0lDQXFMMXh1SUNCMGFXMWxiM1YwT2lBd0xGeHVYRzRnSUhoemNtWkRiMjlyYVdWT1lXMWxPaUFuV0ZOU1JpMVVUMHRGVGljc1hHNGdJSGh6Y21aSVpXRmtaWEpPWVcxbE9pQW5XQzFZVTFKR0xWUlBTMFZPSnl4Y2JseHVJQ0J0WVhoRGIyNTBaVzUwVEdWdVozUm9PaUF0TVN4Y2JseHVJQ0IyWVd4cFpHRjBaVk4wWVhSMWN6b2dablZ1WTNScGIyNGdkbUZzYVdSaGRHVlRkR0YwZFhNb2MzUmhkSFZ6S1NCN1hHNGdJQ0FnY21WMGRYSnVJSE4wWVhSMWN5QStQU0F5TURBZ0ppWWdjM1JoZEhWeklEd2dNekF3TzF4dUlDQjlYRzU5TzF4dVhHNWtaV1poZFd4MGN5NW9aV0ZrWlhKeklEMGdlMXh1SUNCamIyMXRiMjQ2SUh0Y2JpQWdJQ0FuUVdOalpYQjBKem9nSjJGd2NHeHBZMkYwYVc5dUwycHpiMjRzSUhSbGVIUXZjR3hoYVc0c0lDb3ZLaWRjYmlBZ2ZWeHVmVHRjYmx4dWRYUnBiSE11Wm05eVJXRmphQ2hiSjJSbGJHVjBaU2NzSUNkblpYUW5MQ0FuYUdWaFpDZGRMQ0JtZFc1amRHbHZiaUJtYjNKRllXTm9UV1YwYUc5a1RtOUVZWFJoS0cxbGRHaHZaQ2tnZTF4dUlDQmtaV1poZFd4MGN5NW9aV0ZrWlhKelcyMWxkR2h2WkYwZ1BTQjdmVHRjYm4wcE8xeHVYRzUxZEdsc2N5NW1iM0pGWVdOb0tGc25jRzl6ZENjc0lDZHdkWFFuTENBbmNHRjBZMmduWFN3Z1puVnVZM1JwYjI0Z1ptOXlSV0ZqYUUxbGRHaHZaRmRwZEdoRVlYUmhLRzFsZEdodlpDa2dlMXh1SUNCa1pXWmhkV3gwY3k1b1pXRmtaWEp6VzIxbGRHaHZaRjBnUFNCMWRHbHNjeTV0WlhKblpTaEVSVVpCVlV4VVgwTlBUbFJGVGxSZlZGbFFSU2s3WEc1OUtUdGNibHh1Ylc5a2RXeGxMbVY0Y0c5eWRITWdQU0JrWldaaGRXeDBjenRjYmlJc0lpZDFjMlVnYzNSeWFXTjBKenRjYmx4dWJXOWtkV3hsTG1WNGNHOXlkSE1nUFNCbWRXNWpkR2x2YmlCaWFXNWtLR1p1TENCMGFHbHpRWEpuS1NCN1hHNGdJSEpsZEhWeWJpQm1kVzVqZEdsdmJpQjNjbUZ3S0NrZ2UxeHVJQ0FnSUhaaGNpQmhjbWR6SUQwZ2JtVjNJRUZ5Y21GNUtHRnlaM1Z0Wlc1MGN5NXNaVzVuZEdncE8xeHVJQ0FnSUdadmNpQW9kbUZ5SUdrZ1BTQXdPeUJwSUR3Z1lYSm5jeTVzWlc1bmRHZzdJR2tyS3lrZ2UxeHVJQ0FnSUNBZ1lYSm5jMXRwWFNBOUlHRnlaM1Z0Wlc1MGMxdHBYVHRjYmlBZ0lDQjlYRzRnSUNBZ2NtVjBkWEp1SUdadUxtRndjR3g1S0hSb2FYTkJjbWNzSUdGeVozTXBPMXh1SUNCOU8xeHVmVHRjYmlJc0lpZDFjMlVnYzNSeWFXTjBKenRjYmx4dUx5OGdZblJ2WVNCd2IyeDVabWxzYkNCbWIzSWdTVVU4TVRBZ1kyOTFjblJsYzNrZ2FIUjBjSE02THk5bmFYUm9kV0l1WTI5dEwyUmhkbWxrWTJoaGJXSmxjbk12UW1GelpUWTBMbXB6WEc1Y2JuWmhjaUJqYUdGeWN5QTlJQ2RCUWtORVJVWkhTRWxLUzB4TlRrOVFVVkpUVkZWV1YxaFpXbUZpWTJSbFptZG9hV3ByYkcxdWIzQnhjbk4wZFhaM2VIbDZNREV5TXpRMU5qYzRPU3N2UFNjN1hHNWNibVoxYm1OMGFXOXVJRVVvS1NCN1hHNGdJSFJvYVhNdWJXVnpjMkZuWlNBOUlDZFRkSEpwYm1jZ1kyOXVkR0ZwYm5NZ1lXNGdhVzUyWVd4cFpDQmphR0Z5WVdOMFpYSW5PMXh1ZlZ4dVJTNXdjbTkwYjNSNWNHVWdQU0J1WlhjZ1JYSnliM0k3WEc1RkxuQnliM1J2ZEhsd1pTNWpiMlJsSUQwZ05UdGNia1V1Y0hKdmRHOTBlWEJsTG01aGJXVWdQU0FuU1c1MllXeHBaRU5vWVhKaFkzUmxja1Z5Y205eUp6dGNibHh1Wm5WdVkzUnBiMjRnWW5SdllTaHBibkIxZENrZ2UxeHVJQ0IyWVhJZ2MzUnlJRDBnVTNSeWFXNW5LR2x1Y0hWMEtUdGNiaUFnZG1GeUlHOTFkSEIxZENBOUlDY25PMXh1SUNCbWIzSWdLRnh1SUNBZ0lDOHZJR2x1YVhScFlXeHBlbVVnY21WemRXeDBJR0Z1WkNCamIzVnVkR1Z5WEc0Z0lDQWdkbUZ5SUdKc2IyTnJMQ0JqYUdGeVEyOWtaU3dnYVdSNElEMGdNQ3dnYldGd0lEMGdZMmhoY25NN1hHNGdJQ0FnTHk4Z2FXWWdkR2hsSUc1bGVIUWdjM1J5SUdsdVpHVjRJR1J2WlhNZ2JtOTBJR1Y0YVhOME9seHVJQ0FnSUM4dklDQWdZMmhoYm1kbElIUm9aU0J0WVhCd2FXNW5JSFJoWW14bElIUnZJRndpUFZ3aVhHNGdJQ0FnTHk4Z0lDQmphR1ZqYXlCcFppQmtJR2hoY3lCdWJ5Qm1jbUZqZEdsdmJtRnNJR1JwWjJsMGMxeHVJQ0FnSUhOMGNpNWphR0Z5UVhRb2FXUjRJSHdnTUNrZ2ZId2dLRzFoY0NBOUlDYzlKeXdnYVdSNElDVWdNU2s3WEc0Z0lDQWdMeThnWENJNElDMGdhV1I0SUNVZ01TQXFJRGhjSWlCblpXNWxjbUYwWlhNZ2RHaGxJSE5sY1hWbGJtTmxJRElzSURRc0lEWXNJRGhjYmlBZ0lDQnZkWFJ3ZFhRZ0t6MGdiV0Z3TG1Ob1lYSkJkQ2cyTXlBbUlHSnNiMk5ySUQ0K0lEZ2dMU0JwWkhnZ0pTQXhJQ29nT0NsY2JpQWdLU0I3WEc0Z0lDQWdZMmhoY2tOdlpHVWdQU0J6ZEhJdVkyaGhja052WkdWQmRDaHBaSGdnS3owZ015QXZJRFFwTzF4dUlDQWdJR2xtSUNoamFHRnlRMjlrWlNBK0lEQjRSa1lwSUh0Y2JpQWdJQ0FnSUhSb2NtOTNJRzVsZHlCRktDazdYRzRnSUNBZ2ZWeHVJQ0FnSUdKc2IyTnJJRDBnWW14dlkyc2dQRHdnT0NCOElHTm9ZWEpEYjJSbE8xeHVJQ0I5WEc0Z0lISmxkSFZ5YmlCdmRYUndkWFE3WEc1OVhHNWNibTF2WkhWc1pTNWxlSEJ2Y25SeklEMGdZblJ2WVR0Y2JpSXNJaWQxYzJVZ2MzUnlhV04wSnp0Y2JseHVkbUZ5SUhWMGFXeHpJRDBnY21WeGRXbHlaU2duTGk4dUxpOTFkR2xzY3ljcE8xeHVYRzVtZFc1amRHbHZiaUJsYm1OdlpHVW9kbUZzS1NCN1hHNGdJSEpsZEhWeWJpQmxibU52WkdWVlVrbERiMjF3YjI1bGJuUW9kbUZzS1M1Y2JpQWdJQ0J5WlhCc1lXTmxLQzhsTkRBdloya3NJQ2RBSnlrdVhHNGdJQ0FnY21Wd2JHRmpaU2d2SlROQkwyZHBMQ0FuT2ljcExseHVJQ0FnSUhKbGNHeGhZMlVvTHlVeU5DOW5MQ0FuSkNjcExseHVJQ0FnSUhKbGNHeGhZMlVvTHlVeVF5OW5hU3dnSnl3bktTNWNiaUFnSUNCeVpYQnNZV05sS0M4bE1qQXZaeXdnSnlzbktTNWNiaUFnSUNCeVpYQnNZV05sS0M4bE5VSXZaMmtzSUNkYkp5a3VYRzRnSUNBZ2NtVndiR0ZqWlNndkpUVkVMMmRwTENBblhTY3BPMXh1ZlZ4dVhHNHZLaXBjYmlBcUlFSjFhV3hrSUdFZ1ZWSk1JR0o1SUdGd2NHVnVaR2x1WnlCd1lYSmhiWE1nZEc4Z2RHaGxJR1Z1WkZ4dUlDcGNiaUFxSUVCd1lYSmhiU0I3YzNSeWFXNW5mU0IxY213Z1ZHaGxJR0poYzJVZ2IyWWdkR2hsSUhWeWJDQW9aUzVuTGl3Z2FIUjBjRG92TDNkM2R5NW5iMjluYkdVdVkyOXRLVnh1SUNvZ1FIQmhjbUZ0SUh0dlltcGxZM1I5SUZ0d1lYSmhiWE5kSUZSb1pTQndZWEpoYlhNZ2RHOGdZbVVnWVhCd1pXNWtaV1JjYmlBcUlFQnlaWFIxY201eklIdHpkSEpwYm1kOUlGUm9aU0JtYjNKdFlYUjBaV1FnZFhKc1hHNGdLaTljYm0xdlpIVnNaUzVsZUhCdmNuUnpJRDBnWm5WdVkzUnBiMjRnWW5WcGJHUlZVa3dvZFhKc0xDQndZWEpoYlhNc0lIQmhjbUZ0YzFObGNtbGhiR2w2WlhJcElIdGNiaUFnTHlwbGMyeHBiblFnYm04dGNHRnlZVzB0Y21WaGMzTnBaMjQ2TUNvdlhHNGdJR2xtSUNnaGNHRnlZVzF6S1NCN1hHNGdJQ0FnY21WMGRYSnVJSFZ5YkR0Y2JpQWdmVnh1WEc0Z0lIWmhjaUJ6WlhKcFlXeHBlbVZrVUdGeVlXMXpPMXh1SUNCcFppQW9jR0Z5WVcxelUyVnlhV0ZzYVhwbGNpa2dlMXh1SUNBZ0lITmxjbWxoYkdsNlpXUlFZWEpoYlhNZ1BTQndZWEpoYlhOVFpYSnBZV3hwZW1WeUtIQmhjbUZ0Y3lrN1hHNGdJSDBnWld4elpTQnBaaUFvZFhScGJITXVhWE5WVWt4VFpXRnlZMmhRWVhKaGJYTW9jR0Z5WVcxektTa2dlMXh1SUNBZ0lITmxjbWxoYkdsNlpXUlFZWEpoYlhNZ1BTQndZWEpoYlhNdWRHOVRkSEpwYm1jb0tUdGNiaUFnZlNCbGJITmxJSHRjYmlBZ0lDQjJZWElnY0dGeWRITWdQU0JiWFR0Y2JseHVJQ0FnSUhWMGFXeHpMbVp2Y2tWaFkyZ29jR0Z5WVcxekxDQm1kVzVqZEdsdmJpQnpaWEpwWVd4cGVtVW9kbUZzTENCclpYa3BJSHRjYmlBZ0lDQWdJR2xtSUNoMllXd2dQVDA5SUc1MWJHd2dmSHdnZEhsd1pXOW1JSFpoYkNBOVBUMGdKM1Z1WkdWbWFXNWxaQ2NwSUh0Y2JpQWdJQ0FnSUNBZ2NtVjBkWEp1TzF4dUlDQWdJQ0FnZlZ4dVhHNGdJQ0FnSUNCcFppQW9kWFJwYkhNdWFYTkJjbkpoZVNoMllXd3BLU0I3WEc0Z0lDQWdJQ0FnSUd0bGVTQTlJR3RsZVNBcklDZGJYU2M3WEc0Z0lDQWdJQ0I5SUdWc2MyVWdlMXh1SUNBZ0lDQWdJQ0IyWVd3Z1BTQmJkbUZzWFR0Y2JpQWdJQ0FnSUgxY2JseHVJQ0FnSUNBZ2RYUnBiSE11Wm05eVJXRmphQ2gyWVd3c0lHWjFibU4wYVc5dUlIQmhjbk5sVm1Gc2RXVW9kaWtnZTF4dUlDQWdJQ0FnSUNCcFppQW9kWFJwYkhNdWFYTkVZWFJsS0hZcEtTQjdYRzRnSUNBZ0lDQWdJQ0FnZGlBOUlIWXVkRzlKVTA5VGRISnBibWNvS1R0Y2JpQWdJQ0FnSUNBZ2ZTQmxiSE5sSUdsbUlDaDFkR2xzY3k1cGMwOWlhbVZqZENoMktTa2dlMXh1SUNBZ0lDQWdJQ0FnSUhZZ1BTQktVMDlPTG5OMGNtbHVaMmxtZVNoMktUdGNiaUFnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdJQ0J3WVhKMGN5NXdkWE5vS0dWdVkyOWtaU2hyWlhrcElDc2dKejBuSUNzZ1pXNWpiMlJsS0hZcEtUdGNiaUFnSUNBZ0lIMHBPMXh1SUNBZ0lIMHBPMXh1WEc0Z0lDQWdjMlZ5YVdGc2FYcGxaRkJoY21GdGN5QTlJSEJoY25SekxtcHZhVzRvSnlZbktUdGNiaUFnZlZ4dVhHNGdJR2xtSUNoelpYSnBZV3hwZW1Wa1VHRnlZVzF6S1NCN1hHNGdJQ0FnZFhKc0lDczlJQ2gxY213dWFXNWtaWGhQWmlnblB5Y3BJRDA5UFNBdE1TQS9JQ2MvSnlBNklDY21KeWtnS3lCelpYSnBZV3hwZW1Wa1VHRnlZVzF6TzF4dUlDQjlYRzVjYmlBZ2NtVjBkWEp1SUhWeWJEdGNibjA3WEc0aUxDSW5kWE5sSUhOMGNtbGpkQ2M3WEc1Y2JpOHFLbHh1SUNvZ1EzSmxZWFJsY3lCaElHNWxkeUJWVWt3Z1lua2dZMjl0WW1sdWFXNW5JSFJvWlNCemNHVmphV1pwWldRZ1ZWSk1jMXh1SUNwY2JpQXFJRUJ3WVhKaGJTQjdjM1J5YVc1bmZTQmlZWE5sVlZKTUlGUm9aU0JpWVhObElGVlNURnh1SUNvZ1FIQmhjbUZ0SUh0emRISnBibWQ5SUhKbGJHRjBhWFpsVlZKTUlGUm9aU0J5Wld4aGRHbDJaU0JWVWt4Y2JpQXFJRUJ5WlhSMWNtNXpJSHR6ZEhKcGJtZDlJRlJvWlNCamIyMWlhVzVsWkNCVlVreGNiaUFxTDF4dWJXOWtkV3hsTG1WNGNHOXlkSE1nUFNCbWRXNWpkR2x2YmlCamIyMWlhVzVsVlZKTWN5aGlZWE5sVlZKTUxDQnlaV3hoZEdsMlpWVlNUQ2tnZTF4dUlDQnlaWFIxY200Z2NtVnNZWFJwZG1WVlVreGNiaUFnSUNBL0lHSmhjMlZWVWt3dWNtVndiR0ZqWlNndlhGd3ZLeVF2TENBbkp5a2dLeUFuTHljZ0t5QnlaV3hoZEdsMlpWVlNUQzV5WlhCc1lXTmxLQzllWEZ3dkt5OHNJQ2NuS1Z4dUlDQWdJRG9nWW1GelpWVlNURHRjYm4wN1hHNGlMQ0luZFhObElITjBjbWxqZENjN1hHNWNiblpoY2lCMWRHbHNjeUE5SUhKbGNYVnBjbVVvSnk0dkxpNHZkWFJwYkhNbktUdGNibHh1Ylc5a2RXeGxMbVY0Y0c5eWRITWdQU0FvWEc0Z0lIVjBhV3h6TG1selUzUmhibVJoY21SQ2NtOTNjMlZ5Ulc1MktDa2dQMXh1WEc0Z0lDOHZJRk4wWVc1a1lYSmtJR0p5YjNkelpYSWdaVzUyY3lCemRYQndiM0owSUdSdlkzVnRaVzUwTG1OdmIydHBaVnh1SUNBb1puVnVZM1JwYjI0Z2MzUmhibVJoY21SQ2NtOTNjMlZ5Ulc1MktDa2dlMXh1SUNBZ0lISmxkSFZ5YmlCN1hHNGdJQ0FnSUNCM2NtbDBaVG9nWm5WdVkzUnBiMjRnZDNKcGRHVW9ibUZ0WlN3Z2RtRnNkV1VzSUdWNGNHbHlaWE1zSUhCaGRHZ3NJR1J2YldGcGJpd2djMlZqZFhKbEtTQjdYRzRnSUNBZ0lDQWdJSFpoY2lCamIyOXJhV1VnUFNCYlhUdGNiaUFnSUNBZ0lDQWdZMjl2YTJsbExuQjFjMmdvYm1GdFpTQXJJQ2M5SnlBcklHVnVZMjlrWlZWU1NVTnZiWEJ2Ym1WdWRDaDJZV3gxWlNrcE8xeHVYRzRnSUNBZ0lDQWdJR2xtSUNoMWRHbHNjeTVwYzA1MWJXSmxjaWhsZUhCcGNtVnpLU2tnZTF4dUlDQWdJQ0FnSUNBZ0lHTnZiMnRwWlM1d2RYTm9LQ2RsZUhCcGNtVnpQU2NnS3lCdVpYY2dSR0YwWlNobGVIQnBjbVZ6S1M1MGIwZE5WRk4wY21sdVp5Z3BLVHRjYmlBZ0lDQWdJQ0FnZlZ4dVhHNGdJQ0FnSUNBZ0lHbG1JQ2gxZEdsc2N5NXBjMU4wY21sdVp5aHdZWFJvS1NrZ2UxeHVJQ0FnSUNBZ0lDQWdJR052YjJ0cFpTNXdkWE5vS0Nkd1lYUm9QU2NnS3lCd1lYUm9LVHRjYmlBZ0lDQWdJQ0FnZlZ4dVhHNGdJQ0FnSUNBZ0lHbG1JQ2gxZEdsc2N5NXBjMU4wY21sdVp5aGtiMjFoYVc0cEtTQjdYRzRnSUNBZ0lDQWdJQ0FnWTI5dmEybGxMbkIxYzJnb0oyUnZiV0ZwYmowbklDc2daRzl0WVdsdUtUdGNiaUFnSUNBZ0lDQWdmVnh1WEc0Z0lDQWdJQ0FnSUdsbUlDaHpaV04xY21VZ1BUMDlJSFJ5ZFdVcElIdGNiaUFnSUNBZ0lDQWdJQ0JqYjI5cmFXVXVjSFZ6YUNnbmMyVmpkWEpsSnlrN1hHNGdJQ0FnSUNBZ0lIMWNibHh1SUNBZ0lDQWdJQ0JrYjJOMWJXVnVkQzVqYjI5cmFXVWdQU0JqYjI5cmFXVXVhbTlwYmlnbk95QW5LVHRjYmlBZ0lDQWdJSDBzWEc1Y2JpQWdJQ0FnSUhKbFlXUTZJR1oxYm1OMGFXOXVJSEpsWVdRb2JtRnRaU2tnZTF4dUlDQWdJQ0FnSUNCMllYSWdiV0YwWTJnZ1BTQmtiMk4xYldWdWRDNWpiMjlyYVdVdWJXRjBZMmdvYm1WM0lGSmxaMFY0Y0NnbktGNThPMXhjWEZ4ektpa29KeUFySUc1aGJXVWdLeUFuS1Qwb1cxNDdYU29wSnlrcE8xeHVJQ0FnSUNBZ0lDQnlaWFIxY200Z0tHMWhkR05vSUQ4Z1pHVmpiMlJsVlZKSlEyOXRjRzl1Wlc1MEtHMWhkR05vV3pOZEtTQTZJRzUxYkd3cE8xeHVJQ0FnSUNBZ2ZTeGNibHh1SUNBZ0lDQWdjbVZ0YjNabE9pQm1kVzVqZEdsdmJpQnlaVzF2ZG1Vb2JtRnRaU2tnZTF4dUlDQWdJQ0FnSUNCMGFHbHpMbmR5YVhSbEtHNWhiV1VzSUNjbkxDQkVZWFJsTG01dmR5Z3BJQzBnT0RZME1EQXdNREFwTzF4dUlDQWdJQ0FnZlZ4dUlDQWdJSDA3WEc0Z0lIMHBLQ2tnT2x4dVhHNGdJQzh2SUU1dmJpQnpkR0Z1WkdGeVpDQmljbTkzYzJWeUlHVnVkaUFvZDJWaUlIZHZjbXRsY25Nc0lISmxZV04wTFc1aGRHbDJaU2tnYkdGamF5QnVaV1ZrWldRZ2MzVndjRzl5ZEM1Y2JpQWdLR1oxYm1OMGFXOXVJRzV2YmxOMFlXNWtZWEprUW5KdmQzTmxja1Z1ZGlncElIdGNiaUFnSUNCeVpYUjFjbTRnZTF4dUlDQWdJQ0FnZDNKcGRHVTZJR1oxYm1OMGFXOXVJSGR5YVhSbEtDa2dlMzBzWEc0Z0lDQWdJQ0J5WldGa09pQm1kVzVqZEdsdmJpQnlaV0ZrS0NrZ2V5QnlaWFIxY200Z2JuVnNiRHNnZlN4Y2JpQWdJQ0FnSUhKbGJXOTJaVG9nWm5WdVkzUnBiMjRnY21WdGIzWmxLQ2tnZTMxY2JpQWdJQ0I5TzF4dUlDQjlLU2dwWEc0cE8xeHVJaXdpSjNWelpTQnpkSEpwWTNRbk8xeHVYRzR2S2lwY2JpQXFJRVJsZEdWeWJXbHVaWE1nZDJobGRHaGxjaUIwYUdVZ2MzQmxZMmxtYVdWa0lGVlNUQ0JwY3lCaFluTnZiSFYwWlZ4dUlDcGNiaUFxSUVCd1lYSmhiU0I3YzNSeWFXNW5mU0IxY213Z1ZHaGxJRlZTVENCMGJ5QjBaWE4wWEc0Z0tpQkFjbVYwZFhKdWN5QjdZbTl2YkdWaGJuMGdWSEoxWlNCcFppQjBhR1VnYzNCbFkybG1hV1ZrSUZWU1RDQnBjeUJoWW5OdmJIVjBaU3dnYjNSb1pYSjNhWE5sSUdaaGJITmxYRzRnS2k5Y2JtMXZaSFZzWlM1bGVIQnZjblJ6SUQwZ1puVnVZM1JwYjI0Z2FYTkJZbk52YkhWMFpWVlNUQ2gxY213cElIdGNiaUFnTHk4Z1FTQlZVa3dnYVhNZ1kyOXVjMmxrWlhKbFpDQmhZbk52YkhWMFpTQnBaaUJwZENCaVpXZHBibk1nZDJsMGFDQmNJanh6WTJobGJXVStPaTh2WENJZ2IzSWdYQ0l2TDF3aUlDaHdjbTkwYjJOdmJDMXlaV3hoZEdsMlpTQlZVa3dwTGx4dUlDQXZMeUJTUmtNZ016azROaUJrWldacGJtVnpJSE5qYUdWdFpTQnVZVzFsSUdGeklHRWdjMlZ4ZFdWdVkyVWdiMllnWTJoaGNtRmpkR1Z5Y3lCaVpXZHBibTVwYm1jZ2QybDBhQ0JoSUd4bGRIUmxjaUJoYm1RZ1ptOXNiRzkzWldSY2JpQWdMeThnWW5rZ1lXNTVJR052YldKcGJtRjBhVzl1SUc5bUlHeGxkSFJsY25Nc0lHUnBaMmwwY3l3Z2NHeDFjeXdnY0dWeWFXOWtMQ0J2Y2lCb2VYQm9aVzR1WEc0Z0lISmxkSFZ5YmlBdlhpaGJZUzE2WFZ0aExYcGNYR1JjWEN0Y1hDMWNYQzVkS2pvcFAxeGNMMXhjTHk5cExuUmxjM1FvZFhKc0tUdGNibjA3WEc0aUxDSW5kWE5sSUhOMGNtbGpkQ2M3WEc1Y2JuWmhjaUIxZEdsc2N5QTlJSEpsY1hWcGNtVW9KeTR2TGk0dmRYUnBiSE1uS1R0Y2JseHViVzlrZFd4bExtVjRjRzl5ZEhNZ1BTQW9YRzRnSUhWMGFXeHpMbWx6VTNSaGJtUmhjbVJDY205M2MyVnlSVzUyS0NrZ1AxeHVYRzRnSUM4dklGTjBZVzVrWVhKa0lHSnliM2R6WlhJZ1pXNTJjeUJvWVhabElHWjFiR3dnYzNWd2NHOXlkQ0J2WmlCMGFHVWdRVkJKY3lCdVpXVmtaV1FnZEc4Z2RHVnpkRnh1SUNBdkx5QjNhR1YwYUdWeUlIUm9aU0J5WlhGMVpYTjBJRlZTVENCcGN5QnZaaUIwYUdVZ2MyRnRaU0J2Y21sbmFXNGdZWE1nWTNWeWNtVnVkQ0JzYjJOaGRHbHZiaTVjYmlBZ0tHWjFibU4wYVc5dUlITjBZVzVrWVhKa1FuSnZkM05sY2tWdWRpZ3BJSHRjYmlBZ0lDQjJZWElnYlhOcFpTQTlJQzhvYlhOcFpYeDBjbWxrWlc1MEtTOXBMblJsYzNRb2JtRjJhV2RoZEc5eUxuVnpaWEpCWjJWdWRDazdYRzRnSUNBZ2RtRnlJSFZ5YkZCaGNuTnBibWRPYjJSbElEMGdaRzlqZFcxbGJuUXVZM0psWVhSbFJXeGxiV1Z1ZENnbllTY3BPMXh1SUNBZ0lIWmhjaUJ2Y21sbmFXNVZVa3c3WEc1Y2JpQWdJQ0F2S2lwY2JpQWdJQ0FxSUZCaGNuTmxJR0VnVlZKTUlIUnZJR1JwYzJOdmRtVnlJR2wwSjNNZ1kyOXRjRzl1Wlc1MGMxeHVJQ0FnSUNwY2JpQWdJQ0FxSUVCd1lYSmhiU0I3VTNSeWFXNW5mU0IxY213Z1ZHaGxJRlZTVENCMGJ5QmlaU0J3WVhKelpXUmNiaUFnSUNBcUlFQnlaWFIxY201eklIdFBZbXBsWTNSOVhHNGdJQ0FnS2k5Y2JpQWdJQ0JtZFc1amRHbHZiaUJ5WlhOdmJIWmxWVkpNS0hWeWJDa2dlMXh1SUNBZ0lDQWdkbUZ5SUdoeVpXWWdQU0IxY213N1hHNWNiaUFnSUNBZ0lHbG1JQ2h0YzJsbEtTQjdYRzRnSUNBZ0lDQWdJQzh2SUVsRklHNWxaV1J6SUdGMGRISnBZblYwWlNCelpYUWdkSGRwWTJVZ2RHOGdibTl5YldGc2FYcGxJSEJ5YjNCbGNuUnBaWE5jYmlBZ0lDQWdJQ0FnZFhKc1VHRnljMmx1WjA1dlpHVXVjMlYwUVhSMGNtbGlkWFJsS0Nkb2NtVm1KeXdnYUhKbFppazdYRzRnSUNBZ0lDQWdJR2h5WldZZ1BTQjFjbXhRWVhKemFXNW5UbTlrWlM1b2NtVm1PMXh1SUNBZ0lDQWdmVnh1WEc0Z0lDQWdJQ0IxY214UVlYSnphVzVuVG05a1pTNXpaWFJCZEhSeWFXSjFkR1VvSjJoeVpXWW5MQ0JvY21WbUtUdGNibHh1SUNBZ0lDQWdMeThnZFhKc1VHRnljMmx1WjA1dlpHVWdjSEp2ZG1sa1pYTWdkR2hsSUZWeWJGVjBhV3h6SUdsdWRHVnlabUZqWlNBdElHaDBkSEE2THk5MWNtd3VjM0JsWXk1M2FHRjBkMmN1YjNKbkx5TjFjbXgxZEdsc2MxeHVJQ0FnSUNBZ2NtVjBkWEp1SUh0Y2JpQWdJQ0FnSUNBZ2FISmxaam9nZFhKc1VHRnljMmx1WjA1dlpHVXVhSEpsWml4Y2JpQWdJQ0FnSUNBZ2NISnZkRzlqYjJ3NklIVnliRkJoY25OcGJtZE9iMlJsTG5CeWIzUnZZMjlzSUQ4Z2RYSnNVR0Z5YzJsdVowNXZaR1V1Y0hKdmRHOWpiMnd1Y21Wd2JHRmpaU2d2T2lRdkxDQW5KeWtnT2lBbkp5eGNiaUFnSUNBZ0lDQWdhRzl6ZERvZ2RYSnNVR0Z5YzJsdVowNXZaR1V1YUc5emRDeGNiaUFnSUNBZ0lDQWdjMlZoY21Ob09pQjFjbXhRWVhKemFXNW5UbTlrWlM1elpXRnlZMmdnUHlCMWNteFFZWEp6YVc1blRtOWtaUzV6WldGeVkyZ3VjbVZ3YkdGalpTZ3ZYbHhjUHk4c0lDY25LU0E2SUNjbkxGeHVJQ0FnSUNBZ0lDQm9ZWE5vT2lCMWNteFFZWEp6YVc1blRtOWtaUzVvWVhOb0lEOGdkWEpzVUdGeWMybHVaMDV2WkdVdWFHRnphQzV5WlhCc1lXTmxLQzllSXk4c0lDY25LU0E2SUNjbkxGeHVJQ0FnSUNBZ0lDQm9iM04wYm1GdFpUb2dkWEpzVUdGeWMybHVaMDV2WkdVdWFHOXpkRzVoYldVc1hHNGdJQ0FnSUNBZ0lIQnZjblE2SUhWeWJGQmhjbk5wYm1kT2IyUmxMbkJ2Y25Rc1hHNGdJQ0FnSUNBZ0lIQmhkR2h1WVcxbE9pQW9kWEpzVUdGeWMybHVaMDV2WkdVdWNHRjBhRzVoYldVdVkyaGhja0YwS0RBcElEMDlQU0FuTHljcElEOWNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSFZ5YkZCaGNuTnBibWRPYjJSbExuQmhkR2h1WVcxbElEcGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ2N2SnlBcklIVnliRkJoY25OcGJtZE9iMlJsTG5CaGRHaHVZVzFsWEc0Z0lDQWdJQ0I5TzF4dUlDQWdJSDFjYmx4dUlDQWdJRzl5YVdkcGJsVlNUQ0E5SUhKbGMyOXNkbVZWVWt3b2QybHVaRzkzTG14dlkyRjBhVzl1TG1oeVpXWXBPMXh1WEc0Z0lDQWdMeW9xWEc0Z0lDQWdLaUJFWlhSbGNtMXBibVVnYVdZZ1lTQlZVa3dnYzJoaGNtVnpJSFJvWlNCellXMWxJRzl5YVdkcGJpQmhjeUIwYUdVZ1kzVnljbVZ1ZENCc2IyTmhkR2x2Ymx4dUlDQWdJQ3BjYmlBZ0lDQXFJRUJ3WVhKaGJTQjdVM1J5YVc1bmZTQnlaWEYxWlhOMFZWSk1JRlJvWlNCVlVrd2dkRzhnZEdWemRGeHVJQ0FnSUNvZ1FISmxkSFZ5Ym5NZ2UySnZiMnhsWVc1OUlGUnlkV1VnYVdZZ1ZWSk1JSE5vWVhKbGN5QjBhR1VnYzJGdFpTQnZjbWxuYVc0c0lHOTBhR1Z5ZDJselpTQm1ZV3h6WlZ4dUlDQWdJQ292WEc0Z0lDQWdjbVYwZFhKdUlHWjFibU4wYVc5dUlHbHpWVkpNVTJGdFpVOXlhV2RwYmloeVpYRjFaWE4wVlZKTUtTQjdYRzRnSUNBZ0lDQjJZWElnY0dGeWMyVmtJRDBnS0hWMGFXeHpMbWx6VTNSeWFXNW5LSEpsY1hWbGMzUlZVa3dwS1NBL0lISmxjMjlzZG1WVlVrd29jbVZ4ZFdWemRGVlNUQ2tnT2lCeVpYRjFaWE4wVlZKTU8xeHVJQ0FnSUNBZ2NtVjBkWEp1SUNod1lYSnpaV1F1Y0hKdmRHOWpiMndnUFQwOUlHOXlhV2RwYmxWU1RDNXdjbTkwYjJOdmJDQW1KbHh1SUNBZ0lDQWdJQ0FnSUNBZ2NHRnljMlZrTG1odmMzUWdQVDA5SUc5eWFXZHBibFZTVEM1b2IzTjBLVHRjYmlBZ0lDQjlPMXh1SUNCOUtTZ3BJRHBjYmx4dUlDQXZMeUJPYjI0Z2MzUmhibVJoY21RZ1luSnZkM05sY2lCbGJuWnpJQ2gzWldJZ2QyOXlhMlZ5Y3l3Z2NtVmhZM1F0Ym1GMGFYWmxLU0JzWVdOcklHNWxaV1JsWkNCemRYQndiM0owTGx4dUlDQW9ablZ1WTNScGIyNGdibTl1VTNSaGJtUmhjbVJDY205M2MyVnlSVzUyS0NrZ2UxeHVJQ0FnSUhKbGRIVnliaUJtZFc1amRHbHZiaUJwYzFWU1RGTmhiV1ZQY21sbmFXNG9LU0I3WEc0Z0lDQWdJQ0J5WlhSMWNtNGdkSEoxWlR0Y2JpQWdJQ0I5TzF4dUlDQjlLU2dwWEc0cE8xeHVJaXdpSjNWelpTQnpkSEpwWTNRbk8xeHVYRzUyWVhJZ2RYUnBiSE1nUFNCeVpYRjFhWEpsS0NjdUxpOTFkR2xzY3ljcE8xeHVYRzV0YjJSMWJHVXVaWGh3YjNKMGN5QTlJR1oxYm1OMGFXOXVJRzV2Y20xaGJHbDZaVWhsWVdSbGNrNWhiV1VvYUdWaFpHVnljeXdnYm05eWJXRnNhWHBsWkU1aGJXVXBJSHRjYmlBZ2RYUnBiSE11Wm05eVJXRmphQ2hvWldGa1pYSnpMQ0JtZFc1amRHbHZiaUJ3Y205alpYTnpTR1ZoWkdWeUtIWmhiSFZsTENCdVlXMWxLU0I3WEc0Z0lDQWdhV1lnS0c1aGJXVWdJVDA5SUc1dmNtMWhiR2w2WldST1lXMWxJQ1ltSUc1aGJXVXVkRzlWY0hCbGNrTmhjMlVvS1NBOVBUMGdibTl5YldGc2FYcGxaRTVoYldVdWRHOVZjSEJsY2tOaGMyVW9LU2tnZTF4dUlDQWdJQ0FnYUdWaFpHVnljMXR1YjNKdFlXeHBlbVZrVG1GdFpWMGdQU0IyWVd4MVpUdGNiaUFnSUNBZ0lHUmxiR1YwWlNCb1pXRmtaWEp6VzI1aGJXVmRPMXh1SUNBZ0lIMWNiaUFnZlNrN1hHNTlPMXh1SWl3aUozVnpaU0J6ZEhKcFkzUW5PMXh1WEc1MllYSWdkWFJwYkhNZ1BTQnlaWEYxYVhKbEtDY3VMeTR1TDNWMGFXeHpKeWs3WEc1Y2JpOHZJRWhsWVdSbGNuTWdkMmh2YzJVZ1pIVndiR2xqWVhSbGN5QmhjbVVnYVdkdWIzSmxaQ0JpZVNCdWIyUmxYRzR2THlCakxtWXVJR2gwZEhCek9pOHZibTlrWldwekxtOXlaeTloY0drdmFIUjBjQzVvZEcxc0kyaDBkSEJmYldWemMyRm5aVjlvWldGa1pYSnpYRzUyWVhJZ2FXZHViM0psUkhWd2JHbGpZWFJsVDJZZ1BTQmJYRzRnSUNkaFoyVW5MQ0FuWVhWMGFHOXlhWHBoZEdsdmJpY3NJQ2RqYjI1MFpXNTBMV3hsYm1kMGFDY3NJQ2RqYjI1MFpXNTBMWFI1Y0dVbkxDQW5aWFJoWnljc1hHNGdJQ2RsZUhCcGNtVnpKeXdnSjJaeWIyMG5MQ0FuYUc5emRDY3NJQ2RwWmkxdGIyUnBabWxsWkMxemFXNWpaU2NzSUNkcFppMTFibTF2WkdsbWFXVmtMWE5wYm1ObEp5eGNiaUFnSjJ4aGMzUXRiVzlrYVdacFpXUW5MQ0FuYkc5allYUnBiMjRuTENBbmJXRjRMV1p2Y25kaGNtUnpKeXdnSjNCeWIzaDVMV0YxZEdodmNtbDZZWFJwYjI0bkxGeHVJQ0FuY21WbVpYSmxjaWNzSUNkeVpYUnllUzFoWm5SbGNpY3NJQ2QxYzJWeUxXRm5aVzUwSjF4dVhUdGNibHh1THlvcVhHNGdLaUJRWVhKelpTQm9aV0ZrWlhKeklHbHVkRzhnWVc0Z2IySnFaV04wWEc0Z0tseHVJQ29nWUdCZ1hHNGdLaUJFWVhSbE9pQlhaV1FzSURJM0lFRjFaeUF5TURFMElEQTRPalU0T2pRNUlFZE5WRnh1SUNvZ1EyOXVkR1Z1ZEMxVWVYQmxPaUJoY0hCc2FXTmhkR2x2Ymk5cWMyOXVYRzRnS2lCRGIyNXVaV04wYVc5dU9pQnJaV1Z3TFdGc2FYWmxYRzRnS2lCVWNtRnVjMlpsY2kxRmJtTnZaR2x1WnpvZ1kyaDFibXRsWkZ4dUlDb2dZR0JnWEc0Z0tseHVJQ29nUUhCaGNtRnRJSHRUZEhKcGJtZDlJR2hsWVdSbGNuTWdTR1ZoWkdWeWN5QnVaV1ZrYVc1bklIUnZJR0psSUhCaGNuTmxaRnh1SUNvZ1FISmxkSFZ5Ym5NZ2UwOWlhbVZqZEgwZ1NHVmhaR1Z5Y3lCd1lYSnpaV1FnYVc1MGJ5QmhiaUJ2WW1wbFkzUmNiaUFxTDF4dWJXOWtkV3hsTG1WNGNHOXlkSE1nUFNCbWRXNWpkR2x2YmlCd1lYSnpaVWhsWVdSbGNuTW9hR1ZoWkdWeWN5a2dlMXh1SUNCMllYSWdjR0Z5YzJWa0lEMGdlMzA3WEc0Z0lIWmhjaUJyWlhrN1hHNGdJSFpoY2lCMllXdzdYRzRnSUhaaGNpQnBPMXh1WEc0Z0lHbG1JQ2doYUdWaFpHVnljeWtnZXlCeVpYUjFjbTRnY0dGeWMyVmtPeUI5WEc1Y2JpQWdkWFJwYkhNdVptOXlSV0ZqYUNob1pXRmtaWEp6TG5Od2JHbDBLQ2RjWEc0bktTd2dablZ1WTNScGIyNGdjR0Z5YzJWeUtHeHBibVVwSUh0Y2JpQWdJQ0JwSUQwZ2JHbHVaUzVwYm1SbGVFOW1LQ2M2SnlrN1hHNGdJQ0FnYTJWNUlEMGdkWFJwYkhNdWRISnBiU2hzYVc1bExuTjFZbk4wY2lnd0xDQnBLU2t1ZEc5TWIzZGxja05oYzJVb0tUdGNiaUFnSUNCMllXd2dQU0IxZEdsc2N5NTBjbWx0S0d4cGJtVXVjM1ZpYzNSeUtHa2dLeUF4S1NrN1hHNWNiaUFnSUNCcFppQW9hMlY1S1NCN1hHNGdJQ0FnSUNCcFppQW9jR0Z5YzJWa1cydGxlVjBnSmlZZ2FXZHViM0psUkhWd2JHbGpZWFJsVDJZdWFXNWtaWGhQWmloclpYa3BJRDQ5SURBcElIdGNiaUFnSUNBZ0lDQWdjbVYwZFhKdU8xeHVJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ2FXWWdLR3RsZVNBOVBUMGdKM05sZEMxamIyOXJhV1VuS1NCN1hHNGdJQ0FnSUNBZ0lIQmhjbk5sWkZ0clpYbGRJRDBnS0hCaGNuTmxaRnRyWlhsZElEOGdjR0Z5YzJWa1cydGxlVjBnT2lCYlhTa3VZMjl1WTJGMEtGdDJZV3hkS1R0Y2JpQWdJQ0FnSUgwZ1pXeHpaU0I3WEc0Z0lDQWdJQ0FnSUhCaGNuTmxaRnRyWlhsZElEMGdjR0Z5YzJWa1cydGxlVjBnUHlCd1lYSnpaV1JiYTJWNVhTQXJJQ2NzSUNjZ0t5QjJZV3dnT2lCMllXdzdYRzRnSUNBZ0lDQjlYRzRnSUNBZ2ZWeHVJQ0I5S1R0Y2JseHVJQ0J5WlhSMWNtNGdjR0Z5YzJWa08xeHVmVHRjYmlJc0lpZDFjMlVnYzNSeWFXTjBKenRjYmx4dUx5b3FYRzRnS2lCVGVXNTBZV04wYVdNZ2MzVm5ZWElnWm05eUlHbHVkbTlyYVc1bklHRWdablZ1WTNScGIyNGdZVzVrSUdWNGNHRnVaR2x1WnlCaGJpQmhjbkpoZVNCbWIzSWdZWEpuZFcxbGJuUnpMbHh1SUNwY2JpQXFJRU52YlcxdmJpQjFjMlVnWTJGelpTQjNiM1ZzWkNCaVpTQjBieUIxYzJVZ1lFWjFibU4wYVc5dUxuQnliM1J2ZEhsd1pTNWhjSEJzZVdBdVhHNGdLbHh1SUNvZ0lHQmdZR3B6WEc0Z0tpQWdablZ1WTNScGIyNGdaaWg0TENCNUxDQjZLU0I3ZlZ4dUlDb2dJSFpoY2lCaGNtZHpJRDBnV3pFc0lESXNJRE5kTzF4dUlDb2dJR1l1WVhCd2JIa29iblZzYkN3Z1lYSm5jeWs3WEc0Z0tpQWdZR0JnWEc0Z0tseHVJQ29nVjJsMGFDQmdjM0J5WldGa1lDQjBhR2x6SUdWNFlXMXdiR1VnWTJGdUlHSmxJSEpsTFhkeWFYUjBaVzR1WEc0Z0tseHVJQ29nSUdCZ1lHcHpYRzRnS2lBZ2MzQnlaV0ZrS0daMWJtTjBhVzl1S0hnc0lIa3NJSG9wSUh0OUtTaGJNU3dnTWl3Z00xMHBPMXh1SUNvZ0lHQmdZRnh1SUNwY2JpQXFJRUJ3WVhKaGJTQjdSblZ1WTNScGIyNTlJR05oYkd4aVlXTnJYRzRnS2lCQWNtVjBkWEp1Y3lCN1JuVnVZM1JwYjI1OVhHNGdLaTljYm0xdlpIVnNaUzVsZUhCdmNuUnpJRDBnWm5WdVkzUnBiMjRnYzNCeVpXRmtLR05oYkd4aVlXTnJLU0I3WEc0Z0lISmxkSFZ5YmlCbWRXNWpkR2x2YmlCM2NtRndLR0Z5Y2lrZ2UxeHVJQ0FnSUhKbGRIVnliaUJqWVd4c1ltRmpheTVoY0hCc2VTaHVkV3hzTENCaGNuSXBPMXh1SUNCOU8xeHVmVHRjYmlJc0lpZDFjMlVnYzNSeWFXTjBKenRjYmx4dWRtRnlJR0pwYm1RZ1BTQnlaWEYxYVhKbEtDY3VMMmhsYkhCbGNuTXZZbWx1WkNjcE8xeHVkbUZ5SUdselFuVm1abVZ5SUQwZ2NtVnhkV2x5WlNnbmFYTXRZblZtWm1WeUp5azdYRzVjYmk4cVoyeHZZbUZzSUhSdlUzUnlhVzVuT25SeWRXVXFMMXh1WEc0dkx5QjFkR2xzY3lCcGN5QmhJR3hwWW5KaGNua2diMllnWjJWdVpYSnBZeUJvWld4d1pYSWdablZ1WTNScGIyNXpJRzV2YmkxemNHVmphV1pwWXlCMGJ5QmhlR2x2YzF4dVhHNTJZWElnZEc5VGRISnBibWNnUFNCUFltcGxZM1F1Y0hKdmRHOTBlWEJsTG5SdlUzUnlhVzVuTzF4dVhHNHZLaXBjYmlBcUlFUmxkR1Z5YldsdVpTQnBaaUJoSUhaaGJIVmxJR2x6SUdGdUlFRnljbUY1WEc0Z0tseHVJQ29nUUhCaGNtRnRJSHRQWW1wbFkzUjlJSFpoYkNCVWFHVWdkbUZzZFdVZ2RHOGdkR1Z6ZEZ4dUlDb2dRSEpsZEhWeWJuTWdlMkp2YjJ4bFlXNTlJRlJ5ZFdVZ2FXWWdkbUZzZFdVZ2FYTWdZVzRnUVhKeVlYa3NJRzkwYUdWeWQybHpaU0JtWVd4elpWeHVJQ292WEc1bWRXNWpkR2x2YmlCcGMwRnljbUY1S0haaGJDa2dlMXh1SUNCeVpYUjFjbTRnZEc5VGRISnBibWN1WTJGc2JDaDJZV3dwSUQwOVBTQW5XMjlpYW1WamRDQkJjbkpoZVYwbk8xeHVmVnh1WEc0dktpcGNiaUFxSUVSbGRHVnliV2x1WlNCcFppQmhJSFpoYkhWbElHbHpJR0Z1SUVGeWNtRjVRblZtWm1WeVhHNGdLbHh1SUNvZ1FIQmhjbUZ0SUh0UFltcGxZM1I5SUhaaGJDQlVhR1VnZG1Gc2RXVWdkRzhnZEdWemRGeHVJQ29nUUhKbGRIVnlibk1nZTJKdmIyeGxZVzU5SUZSeWRXVWdhV1lnZG1Gc2RXVWdhWE1nWVc0Z1FYSnlZWGxDZFdabVpYSXNJRzkwYUdWeWQybHpaU0JtWVd4elpWeHVJQ292WEc1bWRXNWpkR2x2YmlCcGMwRnljbUY1UW5WbVptVnlLSFpoYkNrZ2UxeHVJQ0J5WlhSMWNtNGdkRzlUZEhKcGJtY3VZMkZzYkNoMllXd3BJRDA5UFNBblcyOWlhbVZqZENCQmNuSmhlVUoxWm1abGNsMG5PMXh1ZlZ4dVhHNHZLaXBjYmlBcUlFUmxkR1Z5YldsdVpTQnBaaUJoSUhaaGJIVmxJR2x6SUdFZ1JtOXliVVJoZEdGY2JpQXFYRzRnS2lCQWNHRnlZVzBnZTA5aWFtVmpkSDBnZG1Gc0lGUm9aU0IyWVd4MVpTQjBieUIwWlhOMFhHNGdLaUJBY21WMGRYSnVjeUI3WW05dmJHVmhibjBnVkhKMVpTQnBaaUIyWVd4MVpTQnBjeUJoYmlCR2IzSnRSR0YwWVN3Z2IzUm9aWEozYVhObElHWmhiSE5sWEc0Z0tpOWNibVoxYm1OMGFXOXVJR2x6Um05eWJVUmhkR0VvZG1Gc0tTQjdYRzRnSUhKbGRIVnliaUFvZEhsd1pXOW1JRVp2Y20xRVlYUmhJQ0U5UFNBbmRXNWtaV1pwYm1Wa0p5a2dKaVlnS0haaGJDQnBibk4wWVc1alpXOW1JRVp2Y20xRVlYUmhLVHRjYm4xY2JseHVMeW9xWEc0Z0tpQkVaWFJsY20xcGJtVWdhV1lnWVNCMllXeDFaU0JwY3lCaElIWnBaWGNnYjI0Z1lXNGdRWEp5WVhsQ2RXWm1aWEpjYmlBcVhHNGdLaUJBY0dGeVlXMGdlMDlpYW1WamRIMGdkbUZzSUZSb1pTQjJZV3gxWlNCMGJ5QjBaWE4wWEc0Z0tpQkFjbVYwZFhKdWN5QjdZbTl2YkdWaGJuMGdWSEoxWlNCcFppQjJZV3gxWlNCcGN5QmhJSFpwWlhjZ2IyNGdZVzRnUVhKeVlYbENkV1ptWlhJc0lHOTBhR1Z5ZDJselpTQm1ZV3h6WlZ4dUlDb3ZYRzVtZFc1amRHbHZiaUJwYzBGeWNtRjVRblZtWm1WeVZtbGxkeWgyWVd3cElIdGNiaUFnZG1GeUlISmxjM1ZzZER0Y2JpQWdhV1lnS0NoMGVYQmxiMllnUVhKeVlYbENkV1ptWlhJZ0lUMDlJQ2QxYm1SbFptbHVaV1FuS1NBbUppQW9RWEp5WVhsQ2RXWm1aWEl1YVhOV2FXVjNLU2tnZTF4dUlDQWdJSEpsYzNWc2RDQTlJRUZ5Y21GNVFuVm1abVZ5TG1selZtbGxkeWgyWVd3cE8xeHVJQ0I5SUdWc2MyVWdlMXh1SUNBZ0lISmxjM1ZzZENBOUlDaDJZV3dwSUNZbUlDaDJZV3d1WW5WbVptVnlLU0FtSmlBb2RtRnNMbUoxWm1abGNpQnBibk4wWVc1alpXOW1JRUZ5Y21GNVFuVm1abVZ5S1R0Y2JpQWdmVnh1SUNCeVpYUjFjbTRnY21WemRXeDBPMXh1ZlZ4dVhHNHZLaXBjYmlBcUlFUmxkR1Z5YldsdVpTQnBaaUJoSUhaaGJIVmxJR2x6SUdFZ1UzUnlhVzVuWEc0Z0tseHVJQ29nUUhCaGNtRnRJSHRQWW1wbFkzUjlJSFpoYkNCVWFHVWdkbUZzZFdVZ2RHOGdkR1Z6ZEZ4dUlDb2dRSEpsZEhWeWJuTWdlMkp2YjJ4bFlXNTlJRlJ5ZFdVZ2FXWWdkbUZzZFdVZ2FYTWdZU0JUZEhKcGJtY3NJRzkwYUdWeWQybHpaU0JtWVd4elpWeHVJQ292WEc1bWRXNWpkR2x2YmlCcGMxTjBjbWx1WnloMllXd3BJSHRjYmlBZ2NtVjBkWEp1SUhSNWNHVnZaaUIyWVd3Z1BUMDlJQ2R6ZEhKcGJtY25PMXh1ZlZ4dVhHNHZLaXBjYmlBcUlFUmxkR1Z5YldsdVpTQnBaaUJoSUhaaGJIVmxJR2x6SUdFZ1RuVnRZbVZ5WEc0Z0tseHVJQ29nUUhCaGNtRnRJSHRQWW1wbFkzUjlJSFpoYkNCVWFHVWdkbUZzZFdVZ2RHOGdkR1Z6ZEZ4dUlDb2dRSEpsZEhWeWJuTWdlMkp2YjJ4bFlXNTlJRlJ5ZFdVZ2FXWWdkbUZzZFdVZ2FYTWdZU0JPZFcxaVpYSXNJRzkwYUdWeWQybHpaU0JtWVd4elpWeHVJQ292WEc1bWRXNWpkR2x2YmlCcGMwNTFiV0psY2loMllXd3BJSHRjYmlBZ2NtVjBkWEp1SUhSNWNHVnZaaUIyWVd3Z1BUMDlJQ2R1ZFcxaVpYSW5PMXh1ZlZ4dVhHNHZLaXBjYmlBcUlFUmxkR1Z5YldsdVpTQnBaaUJoSUhaaGJIVmxJR2x6SUhWdVpHVm1hVzVsWkZ4dUlDcGNiaUFxSUVCd1lYSmhiU0I3VDJKcVpXTjBmU0IyWVd3Z1ZHaGxJSFpoYkhWbElIUnZJSFJsYzNSY2JpQXFJRUJ5WlhSMWNtNXpJSHRpYjI5c1pXRnVmU0JVY25WbElHbG1JSFJvWlNCMllXeDFaU0JwY3lCMWJtUmxabWx1WldRc0lHOTBhR1Z5ZDJselpTQm1ZV3h6WlZ4dUlDb3ZYRzVtZFc1amRHbHZiaUJwYzFWdVpHVm1hVzVsWkNoMllXd3BJSHRjYmlBZ2NtVjBkWEp1SUhSNWNHVnZaaUIyWVd3Z1BUMDlJQ2QxYm1SbFptbHVaV1FuTzF4dWZWeHVYRzR2S2lwY2JpQXFJRVJsZEdWeWJXbHVaU0JwWmlCaElIWmhiSFZsSUdseklHRnVJRTlpYW1WamRGeHVJQ3BjYmlBcUlFQndZWEpoYlNCN1QySnFaV04wZlNCMllXd2dWR2hsSUhaaGJIVmxJSFJ2SUhSbGMzUmNiaUFxSUVCeVpYUjFjbTV6SUh0aWIyOXNaV0Z1ZlNCVWNuVmxJR2xtSUhaaGJIVmxJR2x6SUdGdUlFOWlhbVZqZEN3Z2IzUm9aWEozYVhObElHWmhiSE5sWEc0Z0tpOWNibVoxYm1OMGFXOXVJR2x6VDJKcVpXTjBLSFpoYkNrZ2UxeHVJQ0J5WlhSMWNtNGdkbUZzSUNFOVBTQnVkV3hzSUNZbUlIUjVjR1Z2WmlCMllXd2dQVDA5SUNkdlltcGxZM1FuTzF4dWZWeHVYRzR2S2lwY2JpQXFJRVJsZEdWeWJXbHVaU0JwWmlCaElIWmhiSFZsSUdseklHRWdSR0YwWlZ4dUlDcGNiaUFxSUVCd1lYSmhiU0I3VDJKcVpXTjBmU0IyWVd3Z1ZHaGxJSFpoYkhWbElIUnZJSFJsYzNSY2JpQXFJRUJ5WlhSMWNtNXpJSHRpYjI5c1pXRnVmU0JVY25WbElHbG1JSFpoYkhWbElHbHpJR0VnUkdGMFpTd2diM1JvWlhKM2FYTmxJR1poYkhObFhHNGdLaTljYm1aMWJtTjBhVzl1SUdselJHRjBaU2gyWVd3cElIdGNiaUFnY21WMGRYSnVJSFJ2VTNSeWFXNW5MbU5oYkd3b2RtRnNLU0E5UFQwZ0oxdHZZbXBsWTNRZ1JHRjBaVjBuTzF4dWZWeHVYRzR2S2lwY2JpQXFJRVJsZEdWeWJXbHVaU0JwWmlCaElIWmhiSFZsSUdseklHRWdSbWxzWlZ4dUlDcGNiaUFxSUVCd1lYSmhiU0I3VDJKcVpXTjBmU0IyWVd3Z1ZHaGxJSFpoYkhWbElIUnZJSFJsYzNSY2JpQXFJRUJ5WlhSMWNtNXpJSHRpYjI5c1pXRnVmU0JVY25WbElHbG1JSFpoYkhWbElHbHpJR0VnUm1sc1pTd2diM1JvWlhKM2FYTmxJR1poYkhObFhHNGdLaTljYm1aMWJtTjBhVzl1SUdselJtbHNaU2gyWVd3cElIdGNiaUFnY21WMGRYSnVJSFJ2VTNSeWFXNW5MbU5oYkd3b2RtRnNLU0E5UFQwZ0oxdHZZbXBsWTNRZ1JtbHNaVjBuTzF4dWZWeHVYRzR2S2lwY2JpQXFJRVJsZEdWeWJXbHVaU0JwWmlCaElIWmhiSFZsSUdseklHRWdRbXh2WWx4dUlDcGNiaUFxSUVCd1lYSmhiU0I3VDJKcVpXTjBmU0IyWVd3Z1ZHaGxJSFpoYkhWbElIUnZJSFJsYzNSY2JpQXFJRUJ5WlhSMWNtNXpJSHRpYjI5c1pXRnVmU0JVY25WbElHbG1JSFpoYkhWbElHbHpJR0VnUW14dllpd2diM1JvWlhKM2FYTmxJR1poYkhObFhHNGdLaTljYm1aMWJtTjBhVzl1SUdselFteHZZaWgyWVd3cElIdGNiaUFnY21WMGRYSnVJSFJ2VTNSeWFXNW5MbU5oYkd3b2RtRnNLU0E5UFQwZ0oxdHZZbXBsWTNRZ1FteHZZbDBuTzF4dWZWeHVYRzR2S2lwY2JpQXFJRVJsZEdWeWJXbHVaU0JwWmlCaElIWmhiSFZsSUdseklHRWdSblZ1WTNScGIyNWNiaUFxWEc0Z0tpQkFjR0Z5WVcwZ2UwOWlhbVZqZEgwZ2RtRnNJRlJvWlNCMllXeDFaU0IwYnlCMFpYTjBYRzRnS2lCQWNtVjBkWEp1Y3lCN1ltOXZiR1ZoYm4wZ1ZISjFaU0JwWmlCMllXeDFaU0JwY3lCaElFWjFibU4wYVc5dUxDQnZkR2hsY25kcGMyVWdabUZzYzJWY2JpQXFMMXh1Wm5WdVkzUnBiMjRnYVhOR2RXNWpkR2x2YmloMllXd3BJSHRjYmlBZ2NtVjBkWEp1SUhSdlUzUnlhVzVuTG1OaGJHd29kbUZzS1NBOVBUMGdKMXR2WW1wbFkzUWdSblZ1WTNScGIyNWRKenRjYm4xY2JseHVMeW9xWEc0Z0tpQkVaWFJsY20xcGJtVWdhV1lnWVNCMllXeDFaU0JwY3lCaElGTjBjbVZoYlZ4dUlDcGNiaUFxSUVCd1lYSmhiU0I3VDJKcVpXTjBmU0IyWVd3Z1ZHaGxJSFpoYkhWbElIUnZJSFJsYzNSY2JpQXFJRUJ5WlhSMWNtNXpJSHRpYjI5c1pXRnVmU0JVY25WbElHbG1JSFpoYkhWbElHbHpJR0VnVTNSeVpXRnRMQ0J2ZEdobGNuZHBjMlVnWm1Gc2MyVmNiaUFxTDF4dVpuVnVZM1JwYjI0Z2FYTlRkSEpsWVcwb2RtRnNLU0I3WEc0Z0lISmxkSFZ5YmlCcGMwOWlhbVZqZENoMllXd3BJQ1ltSUdselJuVnVZM1JwYjI0b2RtRnNMbkJwY0dVcE8xeHVmVnh1WEc0dktpcGNiaUFxSUVSbGRHVnliV2x1WlNCcFppQmhJSFpoYkhWbElHbHpJR0VnVlZKTVUyVmhjbU5vVUdGeVlXMXpJRzlpYW1WamRGeHVJQ3BjYmlBcUlFQndZWEpoYlNCN1QySnFaV04wZlNCMllXd2dWR2hsSUhaaGJIVmxJSFJ2SUhSbGMzUmNiaUFxSUVCeVpYUjFjbTV6SUh0aWIyOXNaV0Z1ZlNCVWNuVmxJR2xtSUhaaGJIVmxJR2x6SUdFZ1ZWSk1VMlZoY21Ob1VHRnlZVzF6SUc5aWFtVmpkQ3dnYjNSb1pYSjNhWE5sSUdaaGJITmxYRzRnS2k5Y2JtWjFibU4wYVc5dUlHbHpWVkpNVTJWaGNtTm9VR0Z5WVcxektIWmhiQ2tnZTF4dUlDQnlaWFIxY200Z2RIbHdaVzltSUZWU1RGTmxZWEpqYUZCaGNtRnRjeUFoUFQwZ0ozVnVaR1ZtYVc1bFpDY2dKaVlnZG1Gc0lHbHVjM1JoYm1ObGIyWWdWVkpNVTJWaGNtTm9VR0Z5WVcxek8xeHVmVnh1WEc0dktpcGNiaUFxSUZSeWFXMGdaWGhqWlhOeklIZG9hWFJsYzNCaFkyVWdiMlptSUhSb1pTQmlaV2RwYm01cGJtY2dZVzVrSUdWdVpDQnZaaUJoSUhOMGNtbHVaMXh1SUNwY2JpQXFJRUJ3WVhKaGJTQjdVM1J5YVc1bmZTQnpkSElnVkdobElGTjBjbWx1WnlCMGJ5QjBjbWx0WEc0Z0tpQkFjbVYwZFhKdWN5QjdVM1J5YVc1bmZTQlVhR1VnVTNSeWFXNW5JR1p5WldWa0lHOW1JR1Y0WTJWemN5QjNhR2wwWlhOd1lXTmxYRzRnS2k5Y2JtWjFibU4wYVc5dUlIUnlhVzBvYzNSeUtTQjdYRzRnSUhKbGRIVnliaUJ6ZEhJdWNtVndiR0ZqWlNndlhseGNjeW92TENBbkp5a3VjbVZ3YkdGalpTZ3ZYRnh6S2lRdkxDQW5KeWs3WEc1OVhHNWNiaThxS2x4dUlDb2dSR1YwWlhKdGFXNWxJR2xtSUhkbEozSmxJSEoxYm01cGJtY2dhVzRnWVNCemRHRnVaR0Z5WkNCaWNtOTNjMlZ5SUdWdWRtbHliMjV0Wlc1MFhHNGdLbHh1SUNvZ1ZHaHBjeUJoYkd4dmQzTWdZWGhwYjNNZ2RHOGdjblZ1SUdsdUlHRWdkMlZpSUhkdmNtdGxjaXdnWVc1a0lISmxZV04wTFc1aGRHbDJaUzVjYmlBcUlFSnZkR2dnWlc1MmFYSnZibTFsYm5SeklITjFjSEJ2Y25RZ1dFMU1TSFIwY0ZKbGNYVmxjM1FzSUdKMWRDQnViM1FnWm5Wc2JIa2djM1JoYm1SaGNtUWdaMnh2WW1Gc2N5NWNiaUFxWEc0Z0tpQjNaV0lnZDI5eWEyVnljenBjYmlBcUlDQjBlWEJsYjJZZ2QybHVaRzkzSUMwK0lIVnVaR1ZtYVc1bFpGeHVJQ29nSUhSNWNHVnZaaUJrYjJOMWJXVnVkQ0F0UGlCMWJtUmxabWx1WldSY2JpQXFYRzRnS2lCeVpXRmpkQzF1WVhScGRtVTZYRzRnS2lBZ2JtRjJhV2RoZEc5eUxuQnliMlIxWTNRZ0xUNGdKMUpsWVdOMFRtRjBhWFpsSjF4dUlDb3ZYRzVtZFc1amRHbHZiaUJwYzFOMFlXNWtZWEprUW5KdmQzTmxja1Z1ZGlncElIdGNiaUFnYVdZZ0tIUjVjR1Z2WmlCdVlYWnBaMkYwYjNJZ0lUMDlJQ2QxYm1SbFptbHVaV1FuSUNZbUlHNWhkbWxuWVhSdmNpNXdjbTlrZFdOMElEMDlQU0FuVW1WaFkzUk9ZWFJwZG1VbktTQjdYRzRnSUNBZ2NtVjBkWEp1SUdaaGJITmxPMXh1SUNCOVhHNGdJSEpsZEhWeWJpQW9YRzRnSUNBZ2RIbHdaVzltSUhkcGJtUnZkeUFoUFQwZ0ozVnVaR1ZtYVc1bFpDY2dKaVpjYmlBZ0lDQjBlWEJsYjJZZ1pHOWpkVzFsYm5RZ0lUMDlJQ2QxYm1SbFptbHVaV1FuWEc0Z0lDazdYRzU5WEc1Y2JpOHFLbHh1SUNvZ1NYUmxjbUYwWlNCdmRtVnlJR0Z1SUVGeWNtRjVJRzl5SUdGdUlFOWlhbVZqZENCcGJuWnZhMmx1WnlCaElHWjFibU4wYVc5dUlHWnZjaUJsWVdOb0lHbDBaVzB1WEc0Z0tseHVJQ29nU1dZZ1lHOWlhbUFnYVhNZ1lXNGdRWEp5WVhrZ1kyRnNiR0poWTJzZ2QybHNiQ0JpWlNCallXeHNaV1FnY0dGemMybHVaMXh1SUNvZ2RHaGxJSFpoYkhWbExDQnBibVJsZUN3Z1lXNWtJR052YlhCc1pYUmxJR0Z5Y21GNUlHWnZjaUJsWVdOb0lHbDBaVzB1WEc0Z0tseHVJQ29nU1dZZ0oyOWlhaWNnYVhNZ1lXNGdUMkpxWldOMElHTmhiR3hpWVdOcklIZHBiR3dnWW1VZ1kyRnNiR1ZrSUhCaGMzTnBibWRjYmlBcUlIUm9aU0IyWVd4MVpTd2dhMlY1TENCaGJtUWdZMjl0Y0d4bGRHVWdiMkpxWldOMElHWnZjaUJsWVdOb0lIQnliM0JsY25SNUxseHVJQ3BjYmlBcUlFQndZWEpoYlNCN1QySnFaV04wZkVGeWNtRjVmU0J2WW1vZ1ZHaGxJRzlpYW1WamRDQjBieUJwZEdWeVlYUmxYRzRnS2lCQWNHRnlZVzBnZTBaMWJtTjBhVzl1ZlNCbWJpQlVhR1VnWTJGc2JHSmhZMnNnZEc4Z2FXNTJiMnRsSUdadmNpQmxZV05vSUdsMFpXMWNiaUFxTDF4dVpuVnVZM1JwYjI0Z1ptOXlSV0ZqYUNodlltb3NJR1p1S1NCN1hHNGdJQzh2SUVSdmJpZDBJR0p2ZEdobGNpQnBaaUJ1YnlCMllXeDFaU0J3Y205MmFXUmxaRnh1SUNCcFppQW9iMkpxSUQwOVBTQnVkV3hzSUh4OElIUjVjR1Z2WmlCdlltb2dQVDA5SUNkMWJtUmxabWx1WldRbktTQjdYRzRnSUNBZ2NtVjBkWEp1TzF4dUlDQjlYRzVjYmlBZ0x5OGdSbTl5WTJVZ1lXNGdZWEp5WVhrZ2FXWWdibTkwSUdGc2NtVmhaSGtnYzI5dFpYUm9hVzVuSUdsMFpYSmhZbXhsWEc0Z0lHbG1JQ2gwZVhCbGIyWWdiMkpxSUNFOVBTQW5iMkpxWldOMEp5a2dlMXh1SUNBZ0lDOHFaWE5zYVc1MElHNXZMWEJoY21GdExYSmxZWE56YVdkdU9qQXFMMXh1SUNBZ0lHOWlhaUE5SUZ0dlltcGRPMXh1SUNCOVhHNWNiaUFnYVdZZ0tHbHpRWEp5WVhrb2IySnFLU2tnZTF4dUlDQWdJQzh2SUVsMFpYSmhkR1VnYjNabGNpQmhjbkpoZVNCMllXeDFaWE5jYmlBZ0lDQm1iM0lnS0haaGNpQnBJRDBnTUN3Z2JDQTlJRzlpYWk1c1pXNW5kR2c3SUdrZ1BDQnNPeUJwS3lzcElIdGNiaUFnSUNBZ0lHWnVMbU5oYkd3b2JuVnNiQ3dnYjJKcVcybGRMQ0JwTENCdlltb3BPMXh1SUNBZ0lIMWNiaUFnZlNCbGJITmxJSHRjYmlBZ0lDQXZMeUJKZEdWeVlYUmxJRzkyWlhJZ2IySnFaV04wSUd0bGVYTmNiaUFnSUNCbWIzSWdLSFpoY2lCclpYa2dhVzRnYjJKcUtTQjdYRzRnSUNBZ0lDQnBaaUFvVDJKcVpXTjBMbkJ5YjNSdmRIbHdaUzVvWVhOUGQyNVFjbTl3WlhKMGVTNWpZV3hzS0c5aWFpd2dhMlY1S1NrZ2UxeHVJQ0FnSUNBZ0lDQm1iaTVqWVd4c0tHNTFiR3dzSUc5aWFsdHJaWGxkTENCclpYa3NJRzlpYWlrN1hHNGdJQ0FnSUNCOVhHNGdJQ0FnZlZ4dUlDQjlYRzU5WEc1Y2JpOHFLbHh1SUNvZ1FXTmpaWEIwY3lCMllYSmhjbWR6SUdWNGNHVmpkR2x1WnlCbFlXTm9JR0Z5WjNWdFpXNTBJSFJ2SUdKbElHRnVJRzlpYW1WamRDd2dkR2hsYmx4dUlDb2dhVzF0ZFhSaFlteDVJRzFsY21kbGN5QjBhR1VnY0hKdmNHVnlkR2xsY3lCdlppQmxZV05vSUc5aWFtVmpkQ0JoYm1RZ2NtVjBkWEp1Y3lCeVpYTjFiSFF1WEc0Z0tseHVJQ29nVjJobGJpQnRkV3gwYVhCc1pTQnZZbXBsWTNSeklHTnZiblJoYVc0Z2RHaGxJSE5oYldVZ2EyVjVJSFJvWlNCc1lYUmxjaUJ2WW1wbFkzUWdhVzVjYmlBcUlIUm9aU0JoY21kMWJXVnVkSE1nYkdsemRDQjNhV3hzSUhSaGEyVWdjSEpsWTJWa1pXNWpaUzVjYmlBcVhHNGdLaUJGZUdGdGNHeGxPbHh1SUNwY2JpQXFJR0JnWUdwelhHNGdLaUIyWVhJZ2NtVnpkV3gwSUQwZ2JXVnlaMlVvZTJadmJ6b2dNVEl6ZlN3Z2UyWnZiem9nTkRVMmZTazdYRzRnS2lCamIyNXpiMnhsTG14dlp5aHlaWE4xYkhRdVptOXZLVHNnTHk4Z2IzVjBjSFYwY3lBME5UWmNiaUFxSUdCZ1lGeHVJQ3BjYmlBcUlFQndZWEpoYlNCN1QySnFaV04wZlNCdlltb3hJRTlpYW1WamRDQjBieUJ0WlhKblpWeHVJQ29nUUhKbGRIVnlibk1nZTA5aWFtVmpkSDBnVW1WemRXeDBJRzltSUdGc2JDQnRaWEpuWlNCd2NtOXdaWEowYVdWelhHNGdLaTljYm1aMWJtTjBhVzl1SUcxbGNtZGxLQzhxSUc5aWFqRXNJRzlpYWpJc0lHOWlhak1zSUM0dUxpQXFMeWtnZTF4dUlDQjJZWElnY21WemRXeDBJRDBnZTMwN1hHNGdJR1oxYm1OMGFXOXVJR0Z6YzJsbmJsWmhiSFZsS0haaGJDd2dhMlY1S1NCN1hHNGdJQ0FnYVdZZ0tIUjVjR1Z2WmlCeVpYTjFiSFJiYTJWNVhTQTlQVDBnSjI5aWFtVmpkQ2NnSmlZZ2RIbHdaVzltSUhaaGJDQTlQVDBnSjI5aWFtVmpkQ2NwSUh0Y2JpQWdJQ0FnSUhKbGMzVnNkRnRyWlhsZElEMGdiV1Z5WjJVb2NtVnpkV3gwVzJ0bGVWMHNJSFpoYkNrN1hHNGdJQ0FnZlNCbGJITmxJSHRjYmlBZ0lDQWdJSEpsYzNWc2RGdHJaWGxkSUQwZ2RtRnNPMXh1SUNBZ0lIMWNiaUFnZlZ4dVhHNGdJR1p2Y2lBb2RtRnlJR2tnUFNBd0xDQnNJRDBnWVhKbmRXMWxiblJ6TG14bGJtZDBhRHNnYVNBOElHdzdJR2tyS3lrZ2UxeHVJQ0FnSUdadmNrVmhZMmdvWVhKbmRXMWxiblJ6VzJsZExDQmhjM05wWjI1V1lXeDFaU2s3WEc0Z0lIMWNiaUFnY21WMGRYSnVJSEpsYzNWc2REdGNibjFjYmx4dUx5b3FYRzRnS2lCRmVIUmxibVJ6SUc5aWFtVmpkQ0JoSUdKNUlHMTFkR0ZpYkhrZ1lXUmthVzVuSUhSdklHbDBJSFJvWlNCd2NtOXdaWEowYVdWeklHOW1JRzlpYW1WamRDQmlMbHh1SUNwY2JpQXFJRUJ3WVhKaGJTQjdUMkpxWldOMGZTQmhJRlJvWlNCdlltcGxZM1FnZEc4Z1ltVWdaWGgwWlc1a1pXUmNiaUFxSUVCd1lYSmhiU0I3VDJKcVpXTjBmU0JpSUZSb1pTQnZZbXBsWTNRZ2RHOGdZMjl3ZVNCd2NtOXdaWEowYVdWeklHWnliMjFjYmlBcUlFQndZWEpoYlNCN1QySnFaV04wZlNCMGFHbHpRWEpuSUZSb1pTQnZZbXBsWTNRZ2RHOGdZbWx1WkNCbWRXNWpkR2x2YmlCMGIxeHVJQ29nUUhKbGRIVnliaUI3VDJKcVpXTjBmU0JVYUdVZ2NtVnpkV3gwYVc1bklIWmhiSFZsSUc5bUlHOWlhbVZqZENCaFhHNGdLaTljYm1aMWJtTjBhVzl1SUdWNGRHVnVaQ2hoTENCaUxDQjBhR2x6UVhKbktTQjdYRzRnSUdadmNrVmhZMmdvWWl3Z1puVnVZM1JwYjI0Z1lYTnphV2R1Vm1Gc2RXVW9kbUZzTENCclpYa3BJSHRjYmlBZ0lDQnBaaUFvZEdocGMwRnlaeUFtSmlCMGVYQmxiMllnZG1Gc0lEMDlQU0FuWm5WdVkzUnBiMjRuS1NCN1hHNGdJQ0FnSUNCaFcydGxlVjBnUFNCaWFXNWtLSFpoYkN3Z2RHaHBjMEZ5WnlrN1hHNGdJQ0FnZlNCbGJITmxJSHRjYmlBZ0lDQWdJR0ZiYTJWNVhTQTlJSFpoYkR0Y2JpQWdJQ0I5WEc0Z0lIMHBPMXh1SUNCeVpYUjFjbTRnWVR0Y2JuMWNibHh1Ylc5a2RXeGxMbVY0Y0c5eWRITWdQU0I3WEc0Z0lHbHpRWEp5WVhrNklHbHpRWEp5WVhrc1hHNGdJR2x6UVhKeVlYbENkV1ptWlhJNklHbHpRWEp5WVhsQ2RXWm1aWElzWEc0Z0lHbHpRblZtWm1WeU9pQnBjMEoxWm1abGNpeGNiaUFnYVhOR2IzSnRSR0YwWVRvZ2FYTkdiM0p0UkdGMFlTeGNiaUFnYVhOQmNuSmhlVUoxWm1abGNsWnBaWGM2SUdselFYSnlZWGxDZFdabVpYSldhV1YzTEZ4dUlDQnBjMU4wY21sdVp6b2dhWE5UZEhKcGJtY3NYRzRnSUdselRuVnRZbVZ5T2lCcGMwNTFiV0psY2l4Y2JpQWdhWE5QWW1wbFkzUTZJR2x6VDJKcVpXTjBMRnh1SUNCcGMxVnVaR1ZtYVc1bFpEb2dhWE5WYm1SbFptbHVaV1FzWEc0Z0lHbHpSR0YwWlRvZ2FYTkVZWFJsTEZ4dUlDQnBjMFpwYkdVNklHbHpSbWxzWlN4Y2JpQWdhWE5DYkc5aU9pQnBjMEpzYjJJc1hHNGdJR2x6Um5WdVkzUnBiMjQ2SUdselJuVnVZM1JwYjI0c1hHNGdJR2x6VTNSeVpXRnRPaUJwYzFOMGNtVmhiU3hjYmlBZ2FYTlZVa3hUWldGeVkyaFFZWEpoYlhNNklHbHpWVkpNVTJWaGNtTm9VR0Z5WVcxekxGeHVJQ0JwYzFOMFlXNWtZWEprUW5KdmQzTmxja1Z1ZGpvZ2FYTlRkR0Z1WkdGeVpFSnliM2R6WlhKRmJuWXNYRzRnSUdadmNrVmhZMmc2SUdadmNrVmhZMmdzWEc0Z0lHMWxjbWRsT2lCdFpYSm5aU3hjYmlBZ1pYaDBaVzVrT2lCbGVIUmxibVFzWEc0Z0lIUnlhVzA2SUhSeWFXMWNibjA3WEc0aUxDSXZLaUZjYmlBcUlFUmxkR1Z5YldsdVpTQnBaaUJoYmlCdlltcGxZM1FnYVhNZ1lTQkNkV1ptWlhKY2JpQXFYRzRnS2lCQVlYVjBhRzl5SUNBZ1JtVnliM056SUVGaWIzVnJhR0ZrYVdwbGFDQThhSFIwY0hNNkx5OW1aWEp2YzNNdWIzSm5QbHh1SUNvZ1FHeHBZMlZ1YzJVZ0lFMUpWRnh1SUNvdlhHNWNiaTh2SUZSb1pTQmZhWE5DZFdabVpYSWdZMmhsWTJzZ2FYTWdabTl5SUZOaFptRnlhU0ExTFRjZ2MzVndjRzl5ZEN3Z1ltVmpZWFZ6WlNCcGRDZHpJRzFwYzNOcGJtZGNiaTh2SUU5aWFtVmpkQzV3Y205MGIzUjVjR1V1WTI5dWMzUnlkV04wYjNJdUlGSmxiVzkyWlNCMGFHbHpJR1YyWlc1MGRXRnNiSGxjYm0xdlpIVnNaUzVsZUhCdmNuUnpJRDBnWm5WdVkzUnBiMjRnS0c5aWFpa2dlMXh1SUNCeVpYUjFjbTRnYjJKcUlDRTlJRzUxYkd3Z0ppWWdLR2x6UW5WbVptVnlLRzlpYWlrZ2ZId2dhWE5UYkc5M1FuVm1abVZ5S0c5aWFpa2dmSHdnSVNGdlltb3VYMmx6UW5WbVptVnlLVnh1ZlZ4dVhHNW1kVzVqZEdsdmJpQnBjMEoxWm1abGNpQW9iMkpxS1NCN1hHNGdJSEpsZEhWeWJpQWhJVzlpYWk1amIyNXpkSEoxWTNSdmNpQW1KaUIwZVhCbGIyWWdiMkpxTG1OdmJuTjBjblZqZEc5eUxtbHpRblZtWm1WeUlEMDlQU0FuWm5WdVkzUnBiMjRuSUNZbUlHOWlhaTVqYjI1emRISjFZM1J2Y2k1cGMwSjFabVpsY2lodlltb3BYRzU5WEc1Y2JpOHZJRVp2Y2lCT2IyUmxJSFl3TGpFd0lITjFjSEJ2Y25RdUlGSmxiVzkyWlNCMGFHbHpJR1YyWlc1MGRXRnNiSGt1WEc1bWRXNWpkR2x2YmlCcGMxTnNiM2RDZFdabVpYSWdLRzlpYWlrZ2UxeHVJQ0J5WlhSMWNtNGdkSGx3Wlc5bUlHOWlhaTV5WldGa1JteHZZWFJNUlNBOVBUMGdKMloxYm1OMGFXOXVKeUFtSmlCMGVYQmxiMllnYjJKcUxuTnNhV05sSUQwOVBTQW5ablZ1WTNScGIyNG5JQ1ltSUdselFuVm1abVZ5S0c5aWFpNXpiR2xqWlNnd0xDQXdLU2xjYm4xY2JpSXNJaTh2SUhOb2FXMGdabTl5SUhWemFXNW5JSEJ5YjJObGMzTWdhVzRnWW5KdmQzTmxjbHh1ZG1GeUlIQnliMk5sYzNNZ1BTQnRiMlIxYkdVdVpYaHdiM0owY3lBOUlIdDlPMXh1WEc0dkx5QmpZV05vWldRZ1puSnZiU0IzYUdGMFpYWmxjaUJuYkc5aVlXd2dhWE1nY0hKbGMyVnVkQ0J6YnlCMGFHRjBJSFJsYzNRZ2NuVnVibVZ5Y3lCMGFHRjBJSE4wZFdJZ2FYUmNiaTh2SUdSdmJpZDBJR0p5WldGcklIUm9hVzVuY3k0Z0lFSjFkQ0IzWlNCdVpXVmtJSFJ2SUhkeVlYQWdhWFFnYVc0Z1lTQjBjbmtnWTJGMFkyZ2dhVzRnWTJGelpTQnBkQ0JwYzF4dUx5OGdkM0poY0hCbFpDQnBiaUJ6ZEhKcFkzUWdiVzlrWlNCamIyUmxJSGRvYVdOb0lHUnZaWE51SjNRZ1pHVm1hVzVsSUdGdWVTQm5iRzlpWVd4ekxpQWdTWFFuY3lCcGJuTnBaR1VnWVZ4dUx5OGdablZ1WTNScGIyNGdZbVZqWVhWelpTQjBjbmt2WTJGMFkyaGxjeUJrWlc5d2RHbHRhWHBsSUdsdUlHTmxjblJoYVc0Z1pXNW5hVzVsY3k1Y2JseHVkbUZ5SUdOaFkyaGxaRk5sZEZScGJXVnZkWFE3WEc1MllYSWdZMkZqYUdWa1EyeGxZWEpVYVcxbGIzVjBPMXh1WEc1bWRXNWpkR2x2YmlCa1pXWmhkV3gwVTJWMFZHbHRiM1YwS0NrZ2UxeHVJQ0FnSUhSb2NtOTNJRzVsZHlCRmNuSnZjaWduYzJWMFZHbHRaVzkxZENCb1lYTWdibTkwSUdKbFpXNGdaR1ZtYVc1bFpDY3BPMXh1ZlZ4dVpuVnVZM1JwYjI0Z1pHVm1ZWFZzZEVOc1pXRnlWR2x0Wlc5MWRDQW9LU0I3WEc0Z0lDQWdkR2h5YjNjZ2JtVjNJRVZ5Y205eUtDZGpiR1ZoY2xScGJXVnZkWFFnYUdGeklHNXZkQ0JpWldWdUlHUmxabWx1WldRbktUdGNibjFjYmlobWRXNWpkR2x2YmlBb0tTQjdYRzRnSUNBZ2RISjVJSHRjYmlBZ0lDQWdJQ0FnYVdZZ0tIUjVjR1Z2WmlCelpYUlVhVzFsYjNWMElEMDlQU0FuWm5WdVkzUnBiMjRuS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JqWVdOb1pXUlRaWFJVYVcxbGIzVjBJRDBnYzJWMFZHbHRaVzkxZER0Y2JpQWdJQ0FnSUNBZ2ZTQmxiSE5sSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJR05oWTJobFpGTmxkRlJwYldWdmRYUWdQU0JrWldaaGRXeDBVMlYwVkdsdGIzVjBPMXh1SUNBZ0lDQWdJQ0I5WEc0Z0lDQWdmU0JqWVhSamFDQW9aU2tnZTF4dUlDQWdJQ0FnSUNCallXTm9aV1JUWlhSVWFXMWxiM1YwSUQwZ1pHVm1ZWFZzZEZObGRGUnBiVzkxZER0Y2JpQWdJQ0I5WEc0Z0lDQWdkSEo1SUh0Y2JpQWdJQ0FnSUNBZ2FXWWdLSFI1Y0dWdlppQmpiR1ZoY2xScGJXVnZkWFFnUFQwOUlDZG1kVzVqZEdsdmJpY3BJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lHTmhZMmhsWkVOc1pXRnlWR2x0Wlc5MWRDQTlJR05zWldGeVZHbHRaVzkxZER0Y2JpQWdJQ0FnSUNBZ2ZTQmxiSE5sSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJR05oWTJobFpFTnNaV0Z5VkdsdFpXOTFkQ0E5SUdSbFptRjFiSFJEYkdWaGNsUnBiV1Z2ZFhRN1hHNGdJQ0FnSUNBZ0lIMWNiaUFnSUNCOUlHTmhkR05vSUNobEtTQjdYRzRnSUNBZ0lDQWdJR05oWTJobFpFTnNaV0Z5VkdsdFpXOTFkQ0E5SUdSbFptRjFiSFJEYkdWaGNsUnBiV1Z2ZFhRN1hHNGdJQ0FnZlZ4dWZTQW9LU2xjYm1aMWJtTjBhVzl1SUhKMWJsUnBiV1Z2ZFhRb1puVnVLU0I3WEc0Z0lDQWdhV1lnS0dOaFkyaGxaRk5sZEZScGJXVnZkWFFnUFQwOUlITmxkRlJwYldWdmRYUXBJSHRjYmlBZ0lDQWdJQ0FnTHk5dWIzSnRZV3dnWlc1MmFYSnZiV1Z1ZEhNZ2FXNGdjMkZ1WlNCemFYUjFZWFJwYjI1elhHNGdJQ0FnSUNBZ0lISmxkSFZ5YmlCelpYUlVhVzFsYjNWMEtHWjFiaXdnTUNrN1hHNGdJQ0FnZlZ4dUlDQWdJQzh2SUdsbUlITmxkRlJwYldWdmRYUWdkMkZ6YmlkMElHRjJZV2xzWVdKc1pTQmlkWFFnZDJGeklHeGhkSFJsY2lCa1pXWnBibVZrWEc0Z0lDQWdhV1lnS0NoallXTm9aV1JUWlhSVWFXMWxiM1YwSUQwOVBTQmtaV1poZFd4MFUyVjBWR2x0YjNWMElIeDhJQ0ZqWVdOb1pXUlRaWFJVYVcxbGIzVjBLU0FtSmlCelpYUlVhVzFsYjNWMEtTQjdYRzRnSUNBZ0lDQWdJR05oWTJobFpGTmxkRlJwYldWdmRYUWdQU0J6WlhSVWFXMWxiM1YwTzF4dUlDQWdJQ0FnSUNCeVpYUjFjbTRnYzJWMFZHbHRaVzkxZENobWRXNHNJREFwTzF4dUlDQWdJSDFjYmlBZ0lDQjBjbmtnZTF4dUlDQWdJQ0FnSUNBdkx5QjNhR1Z1SUhkb1pXNGdjMjl0WldKdlpIa2dhR0Z6SUhOamNtVjNaV1FnZDJsMGFDQnpaWFJVYVcxbGIzVjBJR0oxZENCdWJ5QkpMa1V1SUcxaFpHUnVaWE56WEc0Z0lDQWdJQ0FnSUhKbGRIVnliaUJqWVdOb1pXUlRaWFJVYVcxbGIzVjBLR1oxYml3Z01DazdYRzRnSUNBZ2ZTQmpZWFJqYUNobEtYdGNiaUFnSUNBZ0lDQWdkSEo1SUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJQzh2SUZkb1pXNGdkMlVnWVhKbElHbHVJRWt1UlM0Z1luVjBJSFJvWlNCelkzSnBjSFFnYUdGeklHSmxaVzRnWlhaaGJHVmtJSE52SUVrdVJTNGdaRzlsYzI0bmRDQjBjblZ6ZENCMGFHVWdaMnh2WW1Gc0lHOWlhbVZqZENCM2FHVnVJR05oYkd4bFpDQnViM0p0WVd4c2VWeHVJQ0FnSUNBZ0lDQWdJQ0FnY21WMGRYSnVJR05oWTJobFpGTmxkRlJwYldWdmRYUXVZMkZzYkNodWRXeHNMQ0JtZFc0c0lEQXBPMXh1SUNBZ0lDQWdJQ0I5SUdOaGRHTm9LR1VwZTF4dUlDQWdJQ0FnSUNBZ0lDQWdMeThnYzJGdFpTQmhjeUJoWW05MlpTQmlkWFFnZDJobGJpQnBkQ2R6SUdFZ2RtVnljMmx2YmlCdlppQkpMa1V1SUhSb1lYUWdiWFZ6ZENCb1lYWmxJSFJvWlNCbmJHOWlZV3dnYjJKcVpXTjBJR1p2Y2lBbmRHaHBjeWNzSUdodmNHWjFiR3g1SUc5MWNpQmpiMjUwWlhoMElHTnZjbkpsWTNRZ2IzUm9aWEozYVhObElHbDBJSGRwYkd3Z2RHaHliM2NnWVNCbmJHOWlZV3dnWlhKeWIzSmNiaUFnSUNBZ0lDQWdJQ0FnSUhKbGRIVnliaUJqWVdOb1pXUlRaWFJVYVcxbGIzVjBMbU5oYkd3b2RHaHBjeXdnWm5WdUxDQXdLVHRjYmlBZ0lDQWdJQ0FnZlZ4dUlDQWdJSDFjYmx4dVhHNTlYRzVtZFc1amRHbHZiaUJ5ZFc1RGJHVmhjbFJwYldWdmRYUW9iV0Z5YTJWeUtTQjdYRzRnSUNBZ2FXWWdLR05oWTJobFpFTnNaV0Z5VkdsdFpXOTFkQ0E5UFQwZ1kyeGxZWEpVYVcxbGIzVjBLU0I3WEc0Z0lDQWdJQ0FnSUM4dmJtOXliV0ZzSUdWdWRtbHliMjFsYm5SeklHbHVJSE5oYm1VZ2MybDBkV0YwYVc5dWMxeHVJQ0FnSUNBZ0lDQnlaWFIxY200Z1kyeGxZWEpVYVcxbGIzVjBLRzFoY210bGNpazdYRzRnSUNBZ2ZWeHVJQ0FnSUM4dklHbG1JR05zWldGeVZHbHRaVzkxZENCM1lYTnVKM1FnWVhaaGFXeGhZbXhsSUdKMWRDQjNZWE1nYkdGMGRHVnlJR1JsWm1sdVpXUmNiaUFnSUNCcFppQW9LR05oWTJobFpFTnNaV0Z5VkdsdFpXOTFkQ0E5UFQwZ1pHVm1ZWFZzZEVOc1pXRnlWR2x0Wlc5MWRDQjhmQ0FoWTJGamFHVmtRMnhsWVhKVWFXMWxiM1YwS1NBbUppQmpiR1ZoY2xScGJXVnZkWFFwSUh0Y2JpQWdJQ0FnSUNBZ1kyRmphR1ZrUTJ4bFlYSlVhVzFsYjNWMElEMGdZMnhsWVhKVWFXMWxiM1YwTzF4dUlDQWdJQ0FnSUNCeVpYUjFjbTRnWTJ4bFlYSlVhVzFsYjNWMEtHMWhjbXRsY2lrN1hHNGdJQ0FnZlZ4dUlDQWdJSFJ5ZVNCN1hHNGdJQ0FnSUNBZ0lDOHZJSGRvWlc0Z2QyaGxiaUJ6YjIxbFltOWtlU0JvWVhNZ2MyTnlaWGRsWkNCM2FYUm9JSE5sZEZScGJXVnZkWFFnWW5WMElHNXZJRWt1UlM0Z2JXRmtaRzVsYzNOY2JpQWdJQ0FnSUNBZ2NtVjBkWEp1SUdOaFkyaGxaRU5zWldGeVZHbHRaVzkxZENodFlYSnJaWElwTzF4dUlDQWdJSDBnWTJGMFkyZ2dLR1VwZTF4dUlDQWdJQ0FnSUNCMGNua2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0x5OGdWMmhsYmlCM1pTQmhjbVVnYVc0Z1NTNUZMaUJpZFhRZ2RHaGxJSE5qY21sd2RDQm9ZWE1nWW1WbGJpQmxkbUZzWldRZ2MyOGdTUzVGTGlCa2IyVnpiaWQwSUNCMGNuVnpkQ0IwYUdVZ1oyeHZZbUZzSUc5aWFtVmpkQ0IzYUdWdUlHTmhiR3hsWkNCdWIzSnRZV3hzZVZ4dUlDQWdJQ0FnSUNBZ0lDQWdjbVYwZFhKdUlHTmhZMmhsWkVOc1pXRnlWR2x0Wlc5MWRDNWpZV3hzS0c1MWJHd3NJRzFoY210bGNpazdYRzRnSUNBZ0lDQWdJSDBnWTJGMFkyZ2dLR1VwZTF4dUlDQWdJQ0FnSUNBZ0lDQWdMeThnYzJGdFpTQmhjeUJoWW05MlpTQmlkWFFnZDJobGJpQnBkQ2R6SUdFZ2RtVnljMmx2YmlCdlppQkpMa1V1SUhSb1lYUWdiWFZ6ZENCb1lYWmxJSFJvWlNCbmJHOWlZV3dnYjJKcVpXTjBJR1p2Y2lBbmRHaHBjeWNzSUdodmNHWjFiR3g1SUc5MWNpQmpiMjUwWlhoMElHTnZjbkpsWTNRZ2IzUm9aWEozYVhObElHbDBJSGRwYkd3Z2RHaHliM2NnWVNCbmJHOWlZV3dnWlhKeWIzSXVYRzRnSUNBZ0lDQWdJQ0FnSUNBdkx5QlRiMjFsSUhabGNuTnBiMjV6SUc5bUlFa3VSUzRnYUdGMlpTQmthV1ptWlhKbGJuUWdjblZzWlhNZ1ptOXlJR05zWldGeVZHbHRaVzkxZENCMmN5QnpaWFJVYVcxbGIzVjBYRzRnSUNBZ0lDQWdJQ0FnSUNCeVpYUjFjbTRnWTJGamFHVmtRMnhsWVhKVWFXMWxiM1YwTG1OaGJHd29kR2hwY3l3Z2JXRnlhMlZ5S1R0Y2JpQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUgxY2JseHVYRzVjYm4xY2JuWmhjaUJ4ZFdWMVpTQTlJRnRkTzF4dWRtRnlJR1J5WVdsdWFXNW5JRDBnWm1Gc2MyVTdYRzUyWVhJZ1kzVnljbVZ1ZEZGMVpYVmxPMXh1ZG1GeUlIRjFaWFZsU1c1a1pYZ2dQU0F0TVR0Y2JseHVablZ1WTNScGIyNGdZMnhsWVc1VmNFNWxlSFJVYVdOcktDa2dlMXh1SUNBZ0lHbG1JQ2doWkhKaGFXNXBibWNnZkh3Z0lXTjFjbkpsYm5SUmRXVjFaU2tnZTF4dUlDQWdJQ0FnSUNCeVpYUjFjbTQ3WEc0Z0lDQWdmVnh1SUNBZ0lHUnlZV2x1YVc1bklEMGdabUZzYzJVN1hHNGdJQ0FnYVdZZ0tHTjFjbkpsYm5SUmRXVjFaUzVzWlc1bmRHZ3BJSHRjYmlBZ0lDQWdJQ0FnY1hWbGRXVWdQU0JqZFhKeVpXNTBVWFZsZFdVdVkyOXVZMkYwS0hGMVpYVmxLVHRjYmlBZ0lDQjlJR1ZzYzJVZ2UxeHVJQ0FnSUNBZ0lDQnhkV1YxWlVsdVpHVjRJRDBnTFRFN1hHNGdJQ0FnZlZ4dUlDQWdJR2xtSUNoeGRXVjFaUzVzWlc1bmRHZ3BJSHRjYmlBZ0lDQWdJQ0FnWkhKaGFXNVJkV1YxWlNncE8xeHVJQ0FnSUgxY2JuMWNibHh1Wm5WdVkzUnBiMjRnWkhKaGFXNVJkV1YxWlNncElIdGNiaUFnSUNCcFppQW9aSEpoYVc1cGJtY3BJSHRjYmlBZ0lDQWdJQ0FnY21WMGRYSnVPMXh1SUNBZ0lIMWNiaUFnSUNCMllYSWdkR2x0Wlc5MWRDQTlJSEoxYmxScGJXVnZkWFFvWTJ4bFlXNVZjRTVsZUhSVWFXTnJLVHRjYmlBZ0lDQmtjbUZwYm1sdVp5QTlJSFJ5ZFdVN1hHNWNiaUFnSUNCMllYSWdiR1Z1SUQwZ2NYVmxkV1V1YkdWdVozUm9PMXh1SUNBZ0lIZG9hV3hsS0d4bGJpa2dlMXh1SUNBZ0lDQWdJQ0JqZFhKeVpXNTBVWFZsZFdVZ1BTQnhkV1YxWlR0Y2JpQWdJQ0FnSUNBZ2NYVmxkV1VnUFNCYlhUdGNiaUFnSUNBZ0lDQWdkMmhwYkdVZ0tDc3JjWFZsZFdWSmJtUmxlQ0E4SUd4bGJpa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ2FXWWdLR04xY25KbGJuUlJkV1YxWlNrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHTjFjbkpsYm5SUmRXVjFaVnR4ZFdWMVpVbHVaR1Y0WFM1eWRXNG9LVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdJQ0J4ZFdWMVpVbHVaR1Y0SUQwZ0xURTdYRzRnSUNBZ0lDQWdJR3hsYmlBOUlIRjFaWFZsTG14bGJtZDBhRHRjYmlBZ0lDQjlYRzRnSUNBZ1kzVnljbVZ1ZEZGMVpYVmxJRDBnYm5Wc2JEdGNiaUFnSUNCa2NtRnBibWx1WnlBOUlHWmhiSE5sTzF4dUlDQWdJSEoxYmtOc1pXRnlWR2x0Wlc5MWRDaDBhVzFsYjNWMEtUdGNibjFjYmx4dWNISnZZMlZ6Y3k1dVpYaDBWR2xqYXlBOUlHWjFibU4wYVc5dUlDaG1kVzRwSUh0Y2JpQWdJQ0IyWVhJZ1lYSm5jeUE5SUc1bGR5QkJjbkpoZVNoaGNtZDFiV1Z1ZEhNdWJHVnVaM1JvSUMwZ01TazdYRzRnSUNBZ2FXWWdLR0Z5WjNWdFpXNTBjeTVzWlc1bmRHZ2dQaUF4S1NCN1hHNGdJQ0FnSUNBZ0lHWnZjaUFvZG1GeUlHa2dQU0F4T3lCcElEd2dZWEpuZFcxbGJuUnpMbXhsYm1kMGFEc2dhU3NyS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JoY21kelcya2dMU0F4WFNBOUlHRnlaM1Z0Wlc1MGMxdHBYVHRjYmlBZ0lDQWdJQ0FnZlZ4dUlDQWdJSDFjYmlBZ0lDQnhkV1YxWlM1d2RYTm9LRzVsZHlCSmRHVnRLR1oxYml3Z1lYSm5jeWtwTzF4dUlDQWdJR2xtSUNoeGRXVjFaUzVzWlc1bmRHZ2dQVDA5SURFZ0ppWWdJV1J5WVdsdWFXNW5LU0I3WEc0Z0lDQWdJQ0FnSUhKMWJsUnBiV1Z2ZFhRb1pISmhhVzVSZFdWMVpTazdYRzRnSUNBZ2ZWeHVmVHRjYmx4dUx5OGdkamdnYkdsclpYTWdjSEpsWkdsamRHbGliR1VnYjJKcVpXTjBjMXh1Wm5WdVkzUnBiMjRnU1hSbGJTaG1kVzRzSUdGeWNtRjVLU0I3WEc0Z0lDQWdkR2hwY3k1bWRXNGdQU0JtZFc0N1hHNGdJQ0FnZEdocGN5NWhjbkpoZVNBOUlHRnljbUY1TzF4dWZWeHVTWFJsYlM1d2NtOTBiM1I1Y0dVdWNuVnVJRDBnWm5WdVkzUnBiMjRnS0NrZ2UxeHVJQ0FnSUhSb2FYTXVablZ1TG1Gd2NHeDVLRzUxYkd3c0lIUm9hWE11WVhKeVlYa3BPMXh1ZlR0Y2JuQnliMk5sYzNNdWRHbDBiR1VnUFNBblluSnZkM05sY2ljN1hHNXdjbTlqWlhOekxtSnliM2R6WlhJZ1BTQjBjblZsTzF4dWNISnZZMlZ6Y3k1bGJuWWdQU0I3ZlR0Y2JuQnliMk5sYzNNdVlYSm5kaUE5SUZ0ZE8xeHVjSEp2WTJWemN5NTJaWEp6YVc5dUlEMGdKeWM3SUM4dklHVnRjSFI1SUhOMGNtbHVaeUIwYnlCaGRtOXBaQ0J5WldkbGVIQWdhWE56ZFdWelhHNXdjbTlqWlhOekxuWmxjbk5wYjI1eklEMGdlMzA3WEc1Y2JtWjFibU4wYVc5dUlHNXZiM0FvS1NCN2ZWeHVYRzV3Y205alpYTnpMbTl1SUQwZ2JtOXZjRHRjYm5CeWIyTmxjM011WVdSa1RHbHpkR1Z1WlhJZ1BTQnViMjl3TzF4dWNISnZZMlZ6Y3k1dmJtTmxJRDBnYm05dmNEdGNibkJ5YjJObGMzTXViMlptSUQwZ2JtOXZjRHRjYm5CeWIyTmxjM011Y21WdGIzWmxUR2x6ZEdWdVpYSWdQU0J1YjI5d08xeHVjSEp2WTJWemN5NXlaVzF2ZG1WQmJHeE1hWE4wWlc1bGNuTWdQU0J1YjI5d08xeHVjSEp2WTJWemN5NWxiV2wwSUQwZ2JtOXZjRHRjYm5CeWIyTmxjM011Y0hKbGNHVnVaRXhwYzNSbGJtVnlJRDBnYm05dmNEdGNibkJ5YjJObGMzTXVjSEpsY0dWdVpFOXVZMlZNYVhOMFpXNWxjaUE5SUc1dmIzQTdYRzVjYm5CeWIyTmxjM011YkdsemRHVnVaWEp6SUQwZ1puVnVZM1JwYjI0Z0tHNWhiV1VwSUhzZ2NtVjBkWEp1SUZ0ZElIMWNibHh1Y0hKdlkyVnpjeTVpYVc1a2FXNW5JRDBnWm5WdVkzUnBiMjRnS0c1aGJXVXBJSHRjYmlBZ0lDQjBhSEp2ZHlCdVpYY2dSWEp5YjNJb0ozQnliMk5sYzNNdVltbHVaR2x1WnlCcGN5QnViM1FnYzNWd2NHOXlkR1ZrSnlrN1hHNTlPMXh1WEc1d2NtOWpaWE56TG1OM1pDQTlJR1oxYm1OMGFXOXVJQ2dwSUhzZ2NtVjBkWEp1SUNjdkp5QjlPMXh1Y0hKdlkyVnpjeTVqYUdScGNpQTlJR1oxYm1OMGFXOXVJQ2hrYVhJcElIdGNiaUFnSUNCMGFISnZkeUJ1WlhjZ1JYSnliM0lvSjNCeWIyTmxjM011WTJoa2FYSWdhWE1nYm05MElITjFjSEJ2Y25SbFpDY3BPMXh1ZlR0Y2JuQnliMk5sYzNNdWRXMWhjMnNnUFNCbWRXNWpkR2x2YmlncElIc2djbVYwZFhKdUlEQTdJSDA3WEc0aUxDSnBiWEJ2Y25RZ2UwUnBjM0JoZEdOb1pYSjlJR1p5YjIwZ1hDSXVMaTlsZG1WdWRITXZaR2x6Y0dGMFkyaGxjbHdpTzF4eVhHNWNjbHh1Wlhod2IzSjBJR05zWVhOeklFTm9ZVzV1Wld3Z1pYaDBaVzVrY3lCRWFYTndZWFJqYUdWeUlIdGNjbHh1SUNBZ0lHTnZibk4wY25WamRHOXlLRzVoYldVc0lIQjFjMmhsY2lrZ2UxeHlYRzRnSUNBZ0lDQWdJSE4xY0dWeUtDazdYSEpjYmx4eVhHNGdJQ0FnSUNBZ0lIUm9hWE11Ym1GdFpTQTlJRzVoYldVN1hISmNiaUFnSUNBZ0lDQWdkR2hwY3k1d2RYTm9aWElnUFNCd2RYTm9aWEk3WEhKY2JseHlYRzRnSUNBZ0lDQWdJR2xtSUNoMGFHbHpMbkIxYzJobGNpNXpiMk5yWlhRdWMzUmhkR1VnUFQwZ01Ta2dlMXh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQjBhR2x6TG5OMVluTmpjbWxpWlNncE8xeHlYRzRnSUNBZ0lDQWdJSDFjY2x4dUlDQWdJSDFjY2x4dVhISmNiaUFnSUNCemRXSnpZM0pwWW1Vb0tTQjdYSEpjYmlBZ0lDQWdJQ0FnZEdocGN5NXdkWE5vWlhJdWMyVnVaQ2g3WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJR1YyWlc1ME9pQW5jM1ZpYzJOeWFXSmxKeXhjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdaR0YwWVRvZ2UxeHlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdZMmhoYm01bGJEb2dkR2hwY3k1dVlXMWxYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lIMWNjbHh1SUNBZ0lDQWdJQ0I5S1R0Y2NseHVJQ0FnSUgxY2NseHVmU0lzSW1sdGNHOXlkQ0I3UTJoaGJtNWxiSDBnWm5KdmJTQmNJaTR2WTJoaGJtNWxiRndpTzF4eVhHNXBiWEJ2Y25RZ2UxQnlaWE5sYm1ObFEyaGhibTVsYkgwZ1puSnZiU0JjSWk0dmNISmxjMlZ1WTJWZlkyaGhibTVsYkZ3aU8xeHlYRzVwYlhCdmNuUWdlMUJ5YVhaaGRHVkRhR0Z1Ym1Wc2ZTQm1jbTl0SUZ3aUxpOXdjbWwyWVhSbFgyTm9ZVzV1Wld4Y0lqdGNjbHh1WEhKY2JtVjRjRzl5ZENCamJHRnpjeUJOWVc1dVlXZGxjaUI3WEhKY2JpQWdJQ0JqYjI1emRISjFZM1J2Y2lncElIdGNjbHh1SUNBZ0lDQWdJQ0IwYUdsekxtTm9ZVzV1Wld4eklEMGdlMzA3WEhKY2JpQWdJQ0I5WEhKY2JseHlYRzRnSUNBZ1lXUmtLRzVoYldVc0lIQjFjMmhsY2lrZ2UxeHlYRzRnSUNBZ0lDQWdJR2xtSUNnaGRHaHBjeTVqYUdGdWJtVnNjMXR1WVcxbFhTa2dlMXh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQjBhR2x6TG1Ob1lXNXVaV3h6VzI1aGJXVmRJRDBnWTNKbFlYUmxRMmhoYm01bGJDaHVZVzFsTENCd2RYTm9aWElwTzF4eVhHNGdJQ0FnSUNBZ0lIMWNjbHh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdkR2hwY3k1amFHRnVibVZzYzF0dVlXMWxYVHRjY2x4dUlDQWdJSDFjY2x4dVhISmNiaUFnSUNCaGJHd29LU0I3WEhKY2JpQWdJQ0FnSUNBZ2NtVjBkWEp1SUU5aWFtVmpkQzVyWlhsektIUm9hWE11WTJoaGJtNWxiSE1wTzF4eVhHNGdJQ0FnZlZ4eVhHNWNjbHh1SUNBZ0lHWnBibVFvYm1GdFpTa2dlMXh5WEc0Z0lDQWdJQ0FnSUhKbGRIVnliaUIwYUdsekxtTm9ZVzV1Wld4elcyNWhiV1ZkTzF4eVhHNGdJQ0FnZlZ4eVhHNWNjbHh1SUNBZ0lISmxiVzkyWlNodVlXMWxLU0I3WEhKY2JpQWdJQ0FnSUNBZ2JHVjBJR05vWVc1dVpXd2dQU0IwYUdsekxtTm9ZVzV1Wld4elcyNWhiV1ZkTzF4eVhHNGdJQ0FnSUNBZ0lHUmxiR1YwWlNCMGFHbHpMbU5vWVc1dVpXeHpXMjVoYldWZE8xeHlYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQmphR0Z1Ym1Wc08xeHlYRzRnSUNBZ2ZWeHlYRzVjY2x4dUlDQWdJSE4xWW5OamNtbGlaU2dwSUh0Y2NseHVJQ0FnSUNBZ0lDQm1iM0lnS0d4bGRDQnBJR2x1SUhSb2FYTXVZMmhoYm01bGJITXBJSHRjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdkR2hwY3k1amFHRnVibVZzYzF0cFhTNXpkV0p6WTNKcFltVW9LVHRjY2x4dUlDQWdJQ0FnSUNCOVhISmNibHh5WEc0Z0lDQWdmVnh5WEc1OVhISmNibHh5WEc1bWRXNWpkR2x2YmlCamNtVmhkR1ZEYUdGdWJtVnNLRzVoYldVc0lIQjFjMmhsY2lrZ2UxeHlYRzRnSUNBZ2FXWWdLRzVoYldVdWFXNWtaWGhQWmlnbmNISnBkbUYwWlMwbktTQTlQVDBnTUNrZ2UxeHlYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQnVaWGNnVUhKcGRtRjBaVU5vWVc1dVpXd29ibUZ0WlN3Z2NIVnphR1Z5S1R0Y2NseHVJQ0FnSUgwZ1pXeHpaU0JwWmlBb2JtRnRaUzVwYm1SbGVFOW1LQ2R3Y21WelpXNWpaUzBuS1NBOVBUMGdNQ2tnZTF4eVhHNGdJQ0FnSUNBZ0lISmxkSFZ5YmlCdVpYY2dVSEpsYzJWdVkyVkRhR0Z1Ym1Wc0tHNWhiV1VzSUhCMWMyaGxjaWs3WEhKY2JpQWdJQ0I5SUdWc2MyVWdlMXh5WEc0Z0lDQWdJQ0FnSUhKbGRIVnliaUJ1WlhjZ1EyaGhibTVsYkNodVlXMWxMQ0J3ZFhOb1pYSXBPMXh5WEc0Z0lDQWdmVnh5WEc1OUlpd2lhVzF3YjNKMElIdEVhWE53WVhSamFHVnlmU0JtY205dElGd2lMaTR2WlhabGJuUnpMMlJwYzNCaGRHTm9aWEpjSWp0Y2NseHVYSEpjYm1WNGNHOXlkQ0JqYkdGemN5QlFjbVZ6Wlc1alpVTm9ZVzV1Wld3Z1pYaDBaVzVrY3lCRWFYTndZWFJqYUdWeUlIdGNjbHh1SUNBZ0lHTnZibk4wY25WamRHOXlLRzVoYldVc0lIQjFjMmhsY2lrZ2UxeHlYRzRnSUNBZ0lDQWdJSE4xY0dWeUtDazdYSEpjYmx4eVhHNGdJQ0FnSUNBZ0lIUm9hWE11Ym1GdFpTQTlJRzVoYldVN1hISmNiaUFnSUNBZ0lDQWdkR2hwY3k1d2RYTm9aWElnUFNCd2RYTm9aWEk3WEhKY2JpQWdJQ0FnSUNBZ2RHaHBjeTVoZFhSb0lEMGdiblZzYkR0Y2NseHVYSEpjYmlBZ0lDQWdJQ0FnYVdZZ0tIUm9hWE11Y0hWemFHVnlMbk52WTJ0bGRDNXpkR0YwWlNBOVBTQXhLU0I3WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJSFJvYVhNdWMzVmljMk55YVdKbEtDazdYSEpjYmlBZ0lDQWdJQ0FnZlZ4eVhHNGdJQ0FnZlZ4eVhHNWNjbHh1SUNBZ0lITjFZbk5qY21saVpTZ3BJSHRjY2x4dUlDQWdJQ0FnSUNCMGFHbHpMbkIxYzJobGNpNWhkWFJvS0hSb2FYTXVibUZ0WlN3Z0tHVXBJRDArSUh0Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnZEdocGN5NWhkWFJvSUQwZ1pTNWtZWFJoTG1GMWRHZzdYSEpjYmx4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0IwYUdsekxuQjFjMmhsY2k1elpXNWtLSHRjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdWMlpXNTBPaUFuYzNWaWMyTnlhV0psSnl4Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHUmhkR0U2SUh0Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JqYUdGdWJtVnNPaUIwYUdsekxtNWhiV1VzWEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdZWFYwYURvZ2RHaHBjeTVoZFhSb0xGeHlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdOb1lXNXVaV3hmWkdGMFlUb2daUzVrWVhSaExtTm9ZVzV1Wld4ZlpHRjBZVnh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZlZ4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0I5S1R0Y2NseHVJQ0FnSUNBZ0lDQjlLVHRjY2x4dUlDQWdJSDFjY2x4dWZTSXNJbWx0Y0c5eWRDQjdSR2x6Y0dGMFkyaGxjbjBnWm5KdmJTQmNJaTR1TDJWMlpXNTBjeTlrYVhOd1lYUmphR1Z5WENJN1hISmNibHh5WEc1bGVIQnZjblFnWTJ4aGMzTWdVSEpwZG1GMFpVTm9ZVzV1Wld3Z1pYaDBaVzVrY3lCRWFYTndZWFJqYUdWeUlIdGNjbHh1SUNBZ0lHTnZibk4wY25WamRHOXlLRzVoYldVc0lIQjFjMmhsY2lrZ2UxeHlYRzRnSUNBZ0lDQWdJSE4xY0dWeUtDazdYSEpjYmx4eVhHNGdJQ0FnSUNBZ0lIUm9hWE11Ym1GdFpTQTlJRzVoYldVN1hISmNiaUFnSUNBZ0lDQWdkR2hwY3k1d2RYTm9aWElnUFNCd2RYTm9aWEk3WEhKY2JpQWdJQ0FnSUNBZ2RHaHBjeTVoZFhSb0lEMGdiblZzYkR0Y2NseHVYSEpjYmlBZ0lDQWdJQ0FnYVdZZ0tIUm9hWE11Y0hWemFHVnlMbk52WTJ0bGRDNXpkR0YwWlNBOVBTQXhLU0I3WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJSFJvYVhNdWMzVmljMk55YVdKbEtDazdYSEpjYmlBZ0lDQWdJQ0FnZlZ4eVhHNGdJQ0FnZlZ4eVhHNWNjbHh1SUNBZ0lITjFZbk5qY21saVpTZ3BJSHRjY2x4dUlDQWdJQ0FnSUNCMGFHbHpMbkIxYzJobGNpNWhkWFJvS0hSb2FYTXVibUZ0WlN3Z0tHVXBJRDArSUh0Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnZEdocGN5NWhkWFJvSUQwZ1pTNWtZWFJoTG1GMWRHZzdYSEpjYmx4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0IwYUdsekxuQjFjMmhsY2k1elpXNWtLSHRjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdWMlpXNTBPaUFuYzNWaWMyTnlhV0psSnl4Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHUmhkR0U2SUh0Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JqYUdGdWJtVnNPaUIwYUdsekxtNWhiV1VzWEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdZWFYwYURvZ2RHaHBjeTVoZFhSb1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjlYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lIMHBPMXh5WEc0Z0lDQWdJQ0FnSUgwcE8xeHlYRzRnSUNBZ2ZWeHlYRzU5SWl3aWFXMXdiM0owSUh0RWFYTndZWFJqYUdWeWZTQm1jbTl0SUZ3aUxpNHZaWFpsYm5SekwyUnBjM0JoZEdOb1pYSmNJanRjY2x4dVhISmNibVY0Y0c5eWRDQmpiR0Z6Y3lCVGIyTnJaWFFnWlhoMFpXNWtjeUJFYVhOd1lYUmphR1Z5SUh0Y2NseHVJQ0FnSUdOdmJuTjBjblZqZEc5eUtIQjFjMmhsY2l3Z2FHOXpkQ2tnZTF4eVhHNGdJQ0FnSUNBZ0lITjFjR1Z5S0NrN1hISmNibHh5WEc0Z0lDQWdJQ0FnSUhSb2FYTXVjSFZ6YUdWeUlEMGdjSFZ6YUdWeU8xeHlYRzRnSUNBZ0lDQWdJSFJvYVhNdWMyOWphMlYwSUQwZ2JtVjNJRmRsWWxOdlkydGxkQ2hvYjNOMElDc2dKeThuSUNzZ2RHaHBjeTV3ZFhOb1pYSXVhMlY1S1R0Y2NseHVYSEpjYmlBZ0lDQWdJQ0FnZEdocGN5NWlhVzVrVEdsemRHVnVaWEp6S0NrN1hISmNiaUFnSUNCOVhISmNibHh5WEc0Z0lDQWdZbWx1WkV4cGMzUmxibVZ5Y3lncElIdGNjbHh1SUNBZ0lDQWdJQ0IwYUdsekxuTnZZMnRsZEM1dmJtOXdaVzRnUFNBb0tTQTlQaUI3WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJSFJvYVhNdWIyNVBjR1Z1S0NrN1hISmNiaUFnSUNBZ0lDQWdmVHRjY2x4dUlDQWdJQ0FnSUNCMGFHbHpMbk52WTJ0bGRDNXZibVZ5Y205eUlEMGdLR1Z5Y205eUtTQTlQaUI3WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJSFJvYVhNdWIyNUZjbkp2Y2lobGNuSnZjaWs3WEhKY2JpQWdJQ0FnSUNBZ2ZUdGNjbHh1SUNBZ0lDQWdJQ0IwYUdsekxuTnZZMnRsZEM1dmJtTnNiM05sSUQwZ0tHTnNiM05sUlhabGJuUXBJRDArSUh0Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnZEdocGN5NXZia05zYjNObEtHTnNiM05sUlhabGJuUXBPMXh5WEc0Z0lDQWdJQ0FnSUgwN1hISmNiaUFnSUNBZ0lDQWdkR2hwY3k1emIyTnJaWFF1YjI1dFpYTnpZV2RsSUQwZ0tHMWxjM05oWjJVcElEMCtJSHRjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdkR2hwY3k1dmJrMWxjM05oWjJVb2JXVnpjMkZuWlNrN1hISmNiaUFnSUNBZ0lDQWdmVHRjY2x4dUlDQWdJSDFjY2x4dVhISmNiaUFnSUNCdmJrOXdaVzRvS1NCN1hISmNiaUFnSUNBZ0lDQWdMeS9saUozbHA0dm5pcmJtZ0lGY2NseHVJQ0FnSUNBZ0lDQjBhR2x6TG5OMFlYUmxJRDBnTUR0Y2NseHVYSEpjYmlBZ0lDQWdJQ0FnZEdocGN5NWlhVzVrS0NkamIyNXVaV04wWldRbkxDQW9aU2tnUFQ0Z2UxeHlYRzRnSUNBZ0lDQWdJQ0FnSUNCMGFHbHpMbk52WTJ0bGRDNXpiMk5yWlhSZmFXUWdQU0JsTG5OdlkydGxkRjlwWkR0Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnZEdocGN5NXpkR0YwWlNBOUlERTdYSEpjYmx4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0F2TCtpdW91bVloVnh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQjBhR2x6TG5CMWMyaGxjaTVqYUdGdWJtVnNjeTV6ZFdKelkzSnBZbVVvS1R0Y2NseHVJQ0FnSUNBZ0lDQjlLVHRjY2x4dVhISmNiaUFnSUNBZ0lDQWdkR2hwY3k1aWFXNWtLQ2RqYjI1dVpXTjBhVzl1WDJaaGFXeGxaQ2NzSUNobEtTQTlQaUI3WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJSFJvYVhNdWMzUmhkR1VnUFNBdE1UdGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ1kyOXVjMjlzWlM1bGNuSnZjaWhsTG1WeWNtOXlLVnh5WEc0Z0lDQWdJQ0FnSUgwcE8xeHlYRzVjY2x4dUlDQWdJQ0FnSUNBdktuUm9hWE11YzJWdVpDaDdYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lHVjJaVzUwT2lBbllYVjBhRzl5YVhwaGRHbHZiaWRjY2x4dUlDQWdJQ0FnSUNCOUtUc3FMMXh5WEc0Z0lDQWdmVnh5WEc1Y2NseHVJQ0FnSUc5dVJYSnliM0lvWlhKeWIzSXBJSHRjY2x4dUlDQWdJQ0FnSUNCamIyNXpiMnhsTG1WeWNtOXlLR1Z5Y205eUtWeHlYRzRnSUNBZ2ZWeHlYRzVjY2x4dUlDQWdJRzl1UTJ4dmMyVW9ZMnh2YzJWRmRtVnVkQ2tnZTF4eVhHNGdJQ0FnSUNBZ0lHbG1JQ2gwYUdsekxuTnZZMnRsZEM1eVpXRmtlVk4wWVhSbElEMDlJRmRsWWxOdlkydGxkQzVEVEU5VFJVUXBJSHRjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdhV1lnS0dOc2IzTmxSWFpsYm5RdWRIbHdaU0E5UFNBblkyeHZjMlVuS1NCN1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQmpiMjV6YjJ4bExtVnljbTl5S0NkemIyTnJaWFRtbkkzbGlxSGx0N0xtbHEzbHZJQWhJU2NwWEhKY2JpQWdJQ0FnSUNBZ0lDQWdJSDBnWld4elpTQnBaaUFvWTJ4dmMyVkZkbVZ1ZEM1MGVYQmxJRDA5SUNkdFpYTnpZV2RsSnlrZ2UxeHlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdZMjl1YzI5c1pTNWxjbkp2Y2loamJHOXpaVVYyWlc1MExtUmhkR0VwWEhKY2JpQWdJQ0FnSUNBZ0lDQWdJSDBnWld4elpTQjdYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JqYjI1emIyeGxMbVZ5Y205eUtDZmx0N0xtbHEzbHZJQWhJU2NwWEhKY2JpQWdJQ0FnSUNBZ0lDQWdJSDFjY2x4dUlDQWdJQ0FnSUNCOVhISmNiaUFnSUNCOVhISmNibHh5WEc0Z0lDQWdiMjVOWlhOellXZGxLRzFsYzNOaFoyVXBJSHRjY2x4dUlDQWdJQ0FnSUNCc1pYUWdaVVJoZEdFZ1BTQktVMDlPTG5CaGNuTmxLRzFsYzNOaFoyVXVaR0YwWVNrN1hISmNiaUFnSUNBZ0lDQWdiR1YwSUdWMlpXNTBJRDBnWlVSaGRHRXVaWFpsYm5RN1hISmNiaUFnSUNBZ0lDQWdiR1YwSUdSaGRHRWdQU0JsUkdGMFlTNWtZWFJoTzF4eVhHNWNjbHh1SUNBZ0lDQWdJQ0JwWmlBb1pVUmhkR0V1WTJoaGJtNWxiQ0FoUFQwZ2RXNWtaV1pwYm1Wa0tTQjdYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lIUm9hWE11Y0hWemFHVnlMbU5vWVc1dVpXeHpMbVpwYm1Rb1pVUmhkR0V1WTJoaGJtNWxiQ2t1WlcxcGRDaGxkbVZ1ZEN3Z1pHRjBZU2s3WEhKY2JpQWdJQ0FnSUNBZ2ZTQmxiSE5sSUh0Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnZEdocGN5NWxiV2wwS0dWMlpXNTBMQ0JrWVhSaEtUdGNjbHh1SUNBZ0lDQWdJQ0I5WEhKY2JseHlYRzRnSUNBZ2ZWeHlYRzVjY2x4dUlDQWdJSE5sYm1Rb2FuTnZiaWtnZTF4eVhHNGdJQ0FnSUNBZ0lHbG1JQ2gwYUdsekxuTjBZWFJsSUNFOVBTQXRNU2tnZTF4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0IwYUdsekxuTnZZMnRsZEM1elpXNWtLRXBUVDA0dWMzUnlhVzVuYVdaNUtHcHpiMjRwS1Z4eVhHNGdJQ0FnSUNBZ0lIMWNjbHh1SUNBZ0lIMWNjbHh1ZlNJc0ltVjRjRzl5ZENCamJHRnpjeUJEWVd4c1ltRmphMUpsWjJsemRISjVJSHRjY2x4dUlDQWdJR052Ym5OMGNuVmpkRzl5S0NrZ2UxeHlYRzRnSUNBZ0lDQWdJSFJvYVhNdVgyTmhiR3hpWVdOcmN5QTlJSHQ5TzF4eVhHNGdJQ0FnZlZ4eVhHNWNjbHh1SUNBZ0lHZGxkQ2h1WVcxbEtTQjdYSEpjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJSFJvYVhNdVgyTmhiR3hpWVdOcmMxdHdjbVZtYVhnb2JtRnRaU2xkTzF4eVhHNGdJQ0FnZlZ4eVhHNWNjbHh1SUNBZ0lHRmtaQ2h1WVcxbExDQmpZV3hzWW1GamF5d2dZMjl1ZEdWNGRDa2dlMXh5WEc0Z0lDQWdJQ0FnSUd4bGRDQndjbVZtYVhobFpFVjJaVzUwVG1GdFpTQTlJSEJ5WldacGVDaHVZVzFsS1R0Y2NseHVJQ0FnSUNBZ0lDQjBhR2x6TGw5allXeHNZbUZqYTNOYmNISmxabWw0WldSRmRtVnVkRTVoYldWZElEMGdkR2hwY3k1ZlkyRnNiR0poWTJ0elczQnlaV1pwZUdWa1JYWmxiblJPWVcxbFhTQjhmQ0JiWFR0Y2NseHVJQ0FnSUNBZ0lDQjBhR2x6TGw5allXeHNZbUZqYTNOYmNISmxabWw0WldSRmRtVnVkRTVoYldWZExuQjFjMmdvZTF4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0JtYmpvZ1kyRnNiR0poWTJzc1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUdOdmJuUmxlSFE2SUdOdmJuUmxlSFJjY2x4dUlDQWdJQ0FnSUNCOUtUdGNjbHh1SUNBZ0lIMWNjbHh1WEhKY2JpQWdJQ0J5WlcxdmRtVW9ibUZ0WlN3Z1kyRnNiR0poWTJzc0lHTnZiblJsZUhRcElIdGNjbHh1SUNBZ0lDQWdJQ0JwWmlBb0lXNWhiV1VnSmlZZ0lXTmhiR3hpWVdOcklDWW1JQ0ZqYjI1MFpYaDBLU0I3WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJSFJvYVhNdVgyTmhiR3hpWVdOcmN5QTlJSHQ5TzF4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0J5WlhSMWNtNDdYSEpjYmlBZ0lDQWdJQ0FnZlZ4eVhHNWNjbHh1SUNBZ0lDQWdJQ0IyWVhJZ2JtRnRaWE1nUFNCdVlXMWxJRDhnVzNCeVpXWnBlQ2h1WVcxbEtWMGdPaUJQWW1wbFkzUXVhMlY1Y3loMGFHbHpMbDlqWVd4c1ltRmphM01wTzF4eVhHNWNjbHh1SUNBZ0lDQWdJQ0JwWmlBb1kyRnNiR0poWTJzZ2ZId2dZMjl1ZEdWNGRDa2dlMXh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQjBhR2x6TG5KbGJXOTJaVU5oYkd4aVlXTnJLRzVoYldWekxDQmpZV3hzWW1GamF5d2dZMjl1ZEdWNGRDazdYSEpjYmlBZ0lDQWdJQ0FnZlNCbGJITmxJSHRjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdkR2hwY3k1eVpXMXZkbVZCYkd4RFlXeHNZbUZqYTNNb2JtRnRaWE1wTzF4eVhHNGdJQ0FnSUNBZ0lIMWNjbHh1SUNBZ0lIMWNjbHh1WEhKY2JpQWdJQ0J5WlcxdmRtVkRZV3hzWW1GamF5aHVZVzFsY3l3Z1kyRnNiR0poWTJzc0lHTnZiblJsZUhRcElIdGNjbHh1SUNBZ0lDQWdJQ0JtYjNJZ0tHeGxkQ0J1WVcxbElHbHVJRzVoYldWektTQjdYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lHWnZjaUFvYkdWMElHdGxlU0JwYmlCMGFHbHpMbDlqWVd4c1ltRmphM05iYm1GdFpWMHBJSHRjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdsbUlDaDBhR2x6TGw5allXeHNZbUZqYTNOYmJtRnRaVjFiYTJWNVhTNW1iaUE5UFNCallXeHNZbUZqYXlCOGZDQjBhR2x6TGw5allXeHNZbUZqYTNOYmJtRnRaVjFiYTJWNVhTNWpiMjUwWlhoMElEMDlJR052Ym5SbGVIUXBJSHRjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQmtaV3hsZEdVZ2RHaHBjeTVmWTJGc2JHSmhZMnR6VzI1aGJXVmRXMnRsZVYwN1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjlYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lIMWNjbHh1WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJR2xtSUNoMGFHbHpMbDlqWVd4c1ltRmphM05iYm1GdFpWMHViR1Z1WjNSb0lEMDlQU0F3S1NCN1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQmtaV3hsZEdVZ2RHaHBjeTVmWTJGc2JHSmhZMnR6VzI1aGJXVmRPMXh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQjlYSEpjYmlBZ0lDQWdJQ0FnZlZ4eVhHNGdJQ0FnZlZ4eVhHNWNjbHh1SUNBZ0lISmxiVzkyWlVGc2JFTmhiR3hpWVdOcmN5aHVZVzFsY3lrZ2UxeHlYRzRnSUNBZ0lDQWdJR1p2Y2lBb2JHVjBJRzVoYldVZ2FXNGdibUZ0WlhNcElIdGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ1pHVnNaWFJsSUhSb2FYTXVYMk5oYkd4aVlXTnJjMXR1WVcxbFhUdGNjbHh1SUNBZ0lDQWdJQ0I5WEhKY2JpQWdJQ0I5WEhKY2JuMWNjbHh1WEhKY2JtWjFibU4wYVc5dUlIQnlaV1pwZUNodVlXMWxLU0I3WEhKY2JpQWdJQ0J5WlhSMWNtNGdYQ0pmWENJZ0t5QnVZVzFsTzF4eVhHNTlJaXdpYVcxd2IzSjBJSHREWVd4c1ltRmphMUpsWjJsemRISjVmU0JtY205dElDY3VMMk5oYkd4aVlXTnJYM0psWjJsemRISjVKenRjY2x4dVhISmNibVY0Y0c5eWRDQmpiR0Z6Y3lCRWFYTndZWFJqYUdWeUlIdGNjbHh1SUNBZ0lHTnZibk4wY25WamRHOXlLQ2tnZTF4eVhHNGdJQ0FnSUNBZ0lIUm9hWE11WTJGc2JHSmhZMnR6SUQwZ2JtVjNJRU5oYkd4aVlXTnJVbVZuYVhOMGNua29LVHRjY2x4dUlDQWdJQ0FnSUNCMGFHbHpMbWRzYjJKaGJGOWpZV3hzWW1GamEzTWdQU0JiWFR0Y2NseHVJQ0FnSUgxY2NseHVYSEpjYmlBZ0lDQmlhVzVrS0dWMlpXNTBUbUZ0WlN3Z1kyRnNiR0poWTJzc0lHTnZiblJsZUhRcElIdGNjbHh1SUNBZ0lDQWdJQ0IwYUdsekxtTmhiR3hpWVdOcmN5NWhaR1FvWlhabGJuUk9ZVzFsTENCallXeHNZbUZqYXl3Z1kyOXVkR1Y0ZENrN1hISmNiaUFnSUNBZ0lDQWdjbVYwZFhKdUlIUm9hWE03WEhKY2JpQWdJQ0I5WEhKY2JseHlYRzRnSUNBZ1ltbHVaRjluYkc5aVlXd29ZMkZzYkdKaFkyc3BJSHRjY2x4dUlDQWdJQ0FnSUNCMGFHbHpMbWRzYjJKaGJGOWpZV3hzWW1GamEzTXVjSFZ6YUNoallXeHNZbUZqYXlrN1hISmNiaUFnSUNBZ0lDQWdjbVYwZFhKdUlIUm9hWE03WEhKY2JpQWdJQ0I5WEhKY2JseHlYRzRnSUNBZ2RXNWlhVzVrS0dWMlpXNTBUbUZ0WlN3Z1kyRnNiR0poWTJzc0lHTnZiblJsZUhRcElIdGNjbHh1SUNBZ0lDQWdJQ0IwYUdsekxtTmhiR3hpWVdOcmN5NXlaVzF2ZG1Vb1pYWmxiblJPWVcxbExDQmpZV3hzWW1GamF5d2dZMjl1ZEdWNGRDazdYSEpjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJSFJvYVhNN1hISmNiaUFnSUNCOVhISmNibHh5WEc0Z0lDQWdkVzVpYVc1a1gyZHNiMkpoYkNoallXeHNZbUZqYXlrZ2UxeHlYRzRnSUNBZ0lDQWdJR2xtSUNnaFkyRnNiR0poWTJzcElIdGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ2RHaHBjeTVuYkc5aVlXeGZZMkZzYkdKaFkydHpJRDBnVzEwN1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUhKbGRIVnliaUIwYUdsek8xeHlYRzRnSUNBZ0lDQWdJSDFjY2x4dVhISmNiaUFnSUNBZ0lDQWdabTl5SUNoc1pYUWdhU0JwYmlCMGFHbHpMbWRzYjJKaGJGOWpZV3hzWW1GamEzTXBJSHRjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdhV1lnS0dOaGJHeGlZV05ySUQwOUlIUm9hWE11WjJ4dlltRnNYMk5oYkd4aVlXTnJjMXRwWFNrZ2UxeHlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdaR1ZzWlhSbElIUm9hWE11WjJ4dlltRnNYMk5oYkd4aVlXTnJjMXRwWFR0Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnZlZ4eVhHNGdJQ0FnSUNBZ0lIMWNjbHh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdkR2hwY3p0Y2NseHVJQ0FnSUgxY2NseHVYSEpjYmlBZ0lDQjFibUpwYm1SZllXeHNLQ2tnZTF4eVhHNGdJQ0FnSUNBZ0lIUm9hWE11ZFc1aWFXNWtLQ2s3WEhKY2JpQWdJQ0FnSUNBZ2RHaHBjeTUxYm1KcGJtUmZaMnh2WW1Gc0tDazdYSEpjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJSFJvYVhNN1hISmNiaUFnSUNCOVhISmNibHh5WEc0Z0lDQWdaVzFwZENobGRtVnVkRTVoYldVc0lHUmhkR0VwSUh0Y2NseHVJQ0FnSUNBZ0lDQm1iM0lnS0d4bGRDQnBJRDBnTURzZ2FTQThJSFJvYVhNdVoyeHZZbUZzWDJOaGJHeGlZV05yY3k1c1pXNW5kR2c3SUdrckt5a2dlMXh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQjBhR2x6TG1kc2IySmhiRjlqWVd4c1ltRmphM05iYVYwb1pYWmxiblJPWVcxbExDQmtZWFJoS1R0Y2NseHVJQ0FnSUNBZ0lDQjlYSEpjYmx4eVhHNGdJQ0FnSUNBZ0lIWmhjaUJqWVd4c1ltRmphM01nUFNCMGFHbHpMbU5oYkd4aVlXTnJjeTVuWlhRb1pYWmxiblJPWVcxbEtUdGNjbHh1SUNBZ0lDQWdJQ0JwWmlBb1kyRnNiR0poWTJ0eklDWW1JR05oYkd4aVlXTnJjeTVzWlc1bmRHZ2dQaUF3S1NCN1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUdadmNpQW9iR1YwSUdrZ1BTQXdPeUJwSUR3Z1kyRnNiR0poWTJ0ekxteGxibWQwYURzZ2FTc3JLU0I3WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCallXeHNZbUZqYTNOYmFWMHVabTR1WTJGc2JDaGpZV3hzWW1GamEzTmJhVjB1WTI5dWRHVjRkQ3dnWkdGMFlTazdYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lIMWNjbHh1SUNBZ0lDQWdJQ0I5WEhKY2JseHlYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQjBhR2x6TzF4eVhHNGdJQ0FnZlZ4eVhHNTlJaXdpYVcxd2IzSjBJSHRUYjJOclpYUjlJR1p5YjIwZ0p5NHZZMjl1Ym1WamRHbHZiaTl6YjJOclpYUW5PMXh5WEc1cGJYQnZjblFnZTBScGMzQmhkR05vWlhKOUlHWnliMjBnSnk0dlpYWmxiblJ6TDJScGMzQmhkR05vWlhJbk8xeHlYRzVwYlhCdmNuUWdlMDFoYm01aFoyVnlmU0JtY205dElGd2lMaTlqYUdGdWJtVnNjeTl0WVc1dVlXZGxjbHdpTzF4eVhHNXBiWEJ2Y25RZ1lYaHBiM01nWm5KdmJTQmNJbUY0YVc5elhDSTdYSEpjYmx4eVhHNWxlSEJ2Y25RZ1kyeGhjM01nVUhWemFHVnlJSHRjY2x4dUlDQWdJR052Ym5OMGNuVmpkRzl5S0dGd2NGOXJaWGtzSUc5d2RHbHZibk1wSUh0Y2NseHVJQ0FnSUNBZ0lDQjBhR2x6TG1Ob1pXTnJRWEJ3UzJWNUtHRndjRjlyWlhrcE8xeHlYRzVjY2x4dUlDQWdJQ0FnSUNCMGFHbHpMbXRsZVNBOUlHRndjRjlyWlhrN1hISmNiaUFnSUNBZ0lDQWdkR2hwY3k1dmNIUnBiMjV6SUQwZ2IzQjBhVzl1Y3lCOGZDQjdmVHRjY2x4dUlDQWdJQ0FnSUNCMGFHbHpMbVJwYzNCaGRHTm9aWElnUFNCdVpYY2dSR2x6Y0dGMFkyaGxjaWdwTzF4eVhHNGdJQ0FnSUNBZ0lIUm9hWE11WTJoaGJtNWxiSE1nUFNCdVpYY2dUV0Z1Ym1GblpYSW9LVHRjY2x4dVhISmNiaUFnSUNBZ0lDQWdkR2hwY3k1amIyNXVaV04wS0NrN1hISmNiaUFnSUNCOVhISmNibHh5WEc0Z0lDQWdZMjl1Ym1WamRDZ3BJSHRjY2x4dUlDQWdJQ0FnSUNCMGFHbHpMbk52WTJ0bGRDQTlJRzVsZHlCVGIyTnJaWFFvZEdocGN5d2dkR2hwY3k1dmNIUnBiMjV6TG1odmMzUXBPMXh5WEc0Z0lDQWdmVnh5WEc1Y2NseHVJQ0FnSUhOMVluTmpjbWxpWlNoamFHRnVibVZzWDI1aGJXVXBJSHRjY2x4dUlDQWdJQ0FnSUNCeVpYUjFjbTRnZEdocGN5NWphR0Z1Ym1Wc2N5NWhaR1FvWTJoaGJtNWxiRjl1WVcxbExDQjBhR2x6S1R0Y2NseHVJQ0FnSUgxY2NseHVYSEpjYmlBZ0lDQjFibk4xWW5OamNtbGlaU2hqYUdGdWJtVnNYMjVoYldVcElIdGNjbHh1SUNBZ0lDQWdJQ0IwYUdsekxtTm9ZVzV1Wld4ekxuSmxiVzkyWlNoamFHRnVibVZzWDI1aGJXVXBPMXh5WEc0Z0lDQWdmVnh5WEc1Y2NseHVJQ0FnSUdkbGRGTnZZMnRsZEVsa0tDa2dlMXh5WEc0Z0lDQWdJQ0FnSUhKbGRIVnliaUIwYUdsekxuTnZZMnRsZEM1emIyTnJaWFF1YzI5amEyVjBYMmxrTzF4eVhHNGdJQ0FnZlZ4eVhHNWNjbHh1SUNBZ0lITmxibVFvYW5OdmJpa2dlMXh5WEc0Z0lDQWdJQ0FnSUhSb2FYTXVjMjlqYTJWMExuTmxibVFvYW5OdmJpazdYSEpjYmlBZ0lDQjlYSEpjYmx4eVhHNGdJQ0FnWTJobFkydEJjSEJMWlhrb2EyVjVLU0I3WEhKY2JpQWdJQ0FnSUNBZ2NtVjBkWEp1SUhSeWRXVTdYSEpjYmlBZ0lDQjlYSEpjYmx4eVhHNGdJQ0FnWVhWMGFDaHVZVzFsTENCallXeHNZbUZqYXlrZ2UxeHlYRzRnSUNBZ0lDQWdJR3hsZENCdFpYUm9iMlFnUFNCMGFHbHpMbTl3ZEdsdmJuTXVZWFYwYUM1dFpYUm9iMlFnZkh3Z0ozQnZjM1FuTzF4eVhHNGdJQ0FnSUNBZ0lHeGxkQ0JrWVhSaElEMGdlMzA3WEhKY2JpQWdJQ0FnSUNBZ2JHVjBJSEJoY21GdGN5QTlJSHQ5TzF4eVhHNWNjbHh1SUNBZ0lDQWdJQ0JwWmlBb2JXVjBhRzlrSUQwOUlDZHdiM04wSnlrZ2UxeHlYRzRnSUNBZ0lDQWdJQ0FnSUNCa1lYUmhJRDBnVDJKcVpXTjBMbUZ6YzJsbmJpaDdYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JqYUdGdWJtVnNYMjVoYldVNklHNWhiV1VzWEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCemIyTnJaWFJmYVdRNklIUm9hWE11WjJWMFUyOWphMlYwU1dRb0tWeHlYRzRnSUNBZ0lDQWdJQ0FnSUNCOUtUdGNjbHh1SUNBZ0lDQWdJQ0I5SUdWc2MyVWdlMXh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQndZWEpoYlhNZ1BTQlBZbXBsWTNRdVlYTnphV2R1S0h0Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHTm9ZVzV1Wld4ZmJtRnRaVG9nYm1GdFpTeGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSE52WTJ0bGRGOXBaRG9nZEdocGN5NW5aWFJUYjJOclpYUkpaQ2dwWEhKY2JpQWdJQ0FnSUNBZ0lDQWdJSDBwTzF4eVhHNGdJQ0FnSUNBZ0lIMWNjbHh1WEhKY2JpQWdJQ0FnSUNBZ1lYaHBiM01vZTF4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0IxY213NklIUm9hWE11YjNCMGFXOXVjeTVoZFhSb0xuVnliQ3hjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdiV1YwYUc5a09pQnRaWFJvYjJRc1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUdobFlXUmxjbk02SUhSb2FYTXViM0IwYVc5dWN5NWhkWFJvTG1obFlXUmxjbk1nZkh3Z2UzMHNYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lIQmhjbUZ0Y3pvZ2NHRnlZVzF6TEZ4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0JrWVhSaE9pQmtZWFJoWEhKY2JpQWdJQ0FnSUNBZ2ZTa3VkR2hsYmlnb1pTa2dQVDRnZTF4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0JqWVd4c1ltRmpheWhsS1Z4eVhHNGdJQ0FnSUNBZ0lIMHBMbU5oZEdOb0tDaGxLU0E5UGlCN1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUdOdmJuTnZiR1V1WlhKeWIzSW9KK2VuZ2VhY2llbWlrZW1CaythZGcrbVprT1M0amVpMnN5RW5LVHRjY2x4dUlDQWdJQ0FnSUNCOUtUdGNjbHh1SUNBZ0lIMWNjbHh1ZlZ4eVhHNWNjbHh1ZDJsdVpHOTNMbEIxYzJobGNpQTlJRkIxYzJobGNqc2lYU3dpYzI5MWNtTmxVbTl2ZENJNklpSjkiLCJpbXBvcnQge0Rpc3BhdGNoZXJ9IGZyb20gXCIuLi9ldmVudHMvZGlzcGF0Y2hlclwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIENoYW5uZWwgZXh0ZW5kcyBEaXNwYXRjaGVyIHtcclxuICAgIGNvbnN0cnVjdG9yKG5hbWUsIHB1c2hlcikge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcblxyXG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICAgICAgdGhpcy5wdXNoZXIgPSBwdXNoZXI7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnB1c2hlci5zb2NrZXQuc3RhdGUgPT0gMSkge1xyXG4gICAgICAgICAgICB0aGlzLnN1YnNjcmliZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzdWJzY3JpYmUoKSB7XHJcbiAgICAgICAgdGhpcy5wdXNoZXIuc2VuZCh7XHJcbiAgICAgICAgICAgIGV2ZW50OiAnc3Vic2NyaWJlJyxcclxuICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgY2hhbm5lbDogdGhpcy5uYW1lXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxufSIsImltcG9ydCB7RGlzcGF0Y2hlcn0gZnJvbSBcIi4uL2V2ZW50cy9kaXNwYXRjaGVyXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgUHJlc2VuY2VDaGFubmVsIGV4dGVuZHMgRGlzcGF0Y2hlciB7XHJcbiAgICBjb25zdHJ1Y3RvcihuYW1lLCBwdXNoZXIpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG5cclxuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgICAgIHRoaXMucHVzaGVyID0gcHVzaGVyO1xyXG4gICAgICAgIHRoaXMuYXV0aCA9IG51bGw7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnB1c2hlci5zb2NrZXQuc3RhdGUgPT0gMSkge1xyXG4gICAgICAgICAgICB0aGlzLnN1YnNjcmliZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzdWJzY3JpYmUoKSB7XHJcbiAgICAgICAgdGhpcy5wdXNoZXIuYXV0aCh0aGlzLm5hbWUsIChlKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuYXV0aCA9IGUuZGF0YS5hdXRoO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5wdXNoZXIuc2VuZCh7XHJcbiAgICAgICAgICAgICAgICBldmVudDogJ3N1YnNjcmliZScsXHJcbiAgICAgICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2hhbm5lbDogdGhpcy5uYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgIGF1dGg6IHRoaXMuYXV0aCxcclxuICAgICAgICAgICAgICAgICAgICBjaGFubmVsX2RhdGE6IGUuZGF0YS5jaGFubmVsX2RhdGFcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQge0Rpc3BhdGNoZXJ9IGZyb20gXCIuLi9ldmVudHMvZGlzcGF0Y2hlclwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFByaXZhdGVDaGFubmVsIGV4dGVuZHMgRGlzcGF0Y2hlciB7XHJcbiAgICBjb25zdHJ1Y3RvcihuYW1lLCBwdXNoZXIpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG5cclxuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgICAgIHRoaXMucHVzaGVyID0gcHVzaGVyO1xyXG4gICAgICAgIHRoaXMuYXV0aCA9IG51bGw7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnB1c2hlci5zb2NrZXQuc3RhdGUgPT0gMSkge1xyXG4gICAgICAgICAgICB0aGlzLnN1YnNjcmliZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzdWJzY3JpYmUoKSB7XHJcbiAgICAgICAgdGhpcy5wdXNoZXIuYXV0aCh0aGlzLm5hbWUsIChlKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuYXV0aCA9IGUuZGF0YS5hdXRoO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5wdXNoZXIuc2VuZCh7XHJcbiAgICAgICAgICAgICAgICBldmVudDogJ3N1YnNjcmliZScsXHJcbiAgICAgICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2hhbm5lbDogdGhpcy5uYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgIGF1dGg6IHRoaXMuYXV0aFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufSIsImV4cG9ydCBjbGFzcyBDYWxsYmFja1JlZ2lzdHJ5IHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuX2NhbGxiYWNrcyA9IHt9O1xyXG4gICAgfVxyXG5cclxuICAgIGdldChuYW1lKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NhbGxiYWNrc1twcmVmaXgobmFtZSldO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZChuYW1lLCBjYWxsYmFjaywgY29udGV4dCkge1xyXG4gICAgICAgIGxldCBwcmVmaXhlZEV2ZW50TmFtZSA9IHByZWZpeChuYW1lKTtcclxuICAgICAgICB0aGlzLl9jYWxsYmFja3NbcHJlZml4ZWRFdmVudE5hbWVdID0gdGhpcy5fY2FsbGJhY2tzW3ByZWZpeGVkRXZlbnROYW1lXSB8fCBbXTtcclxuICAgICAgICB0aGlzLl9jYWxsYmFja3NbcHJlZml4ZWRFdmVudE5hbWVdLnB1c2goe1xyXG4gICAgICAgICAgICBmbjogY2FsbGJhY2ssXHJcbiAgICAgICAgICAgIGNvbnRleHQ6IGNvbnRleHRcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICByZW1vdmUobmFtZSwgY2FsbGJhY2ssIGNvbnRleHQpIHtcclxuICAgICAgICBpZiAoIW5hbWUgJiYgIWNhbGxiYWNrICYmICFjb250ZXh0KSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2NhbGxiYWNrcyA9IHt9O1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2YXIgbmFtZXMgPSBuYW1lID8gW3ByZWZpeChuYW1lKV0gOiBPYmplY3Qua2V5cyh0aGlzLl9jYWxsYmFja3MpO1xyXG5cclxuICAgICAgICBpZiAoY2FsbGJhY2sgfHwgY29udGV4dCkge1xyXG4gICAgICAgICAgICB0aGlzLnJlbW92ZUNhbGxiYWNrKG5hbWVzLCBjYWxsYmFjaywgY29udGV4dCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5yZW1vdmVBbGxDYWxsYmFja3MobmFtZXMpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZW1vdmVDYWxsYmFjayhuYW1lcywgY2FsbGJhY2ssIGNvbnRleHQpIHtcclxuICAgICAgICBmb3IgKGxldCBuYW1lIGluIG5hbWVzKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGtleSBpbiB0aGlzLl9jYWxsYmFja3NbbmFtZV0pIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9jYWxsYmFja3NbbmFtZV1ba2V5XS5mbiA9PSBjYWxsYmFjayB8fCB0aGlzLl9jYWxsYmFja3NbbmFtZV1ba2V5XS5jb250ZXh0ID09IGNvbnRleHQpIHtcclxuICAgICAgICAgICAgICAgICAgICBkZWxldGUgdGhpcy5fY2FsbGJhY2tzW25hbWVdW2tleV07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9jYWxsYmFja3NbbmFtZV0ubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICBkZWxldGUgdGhpcy5fY2FsbGJhY2tzW25hbWVdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJlbW92ZUFsbENhbGxiYWNrcyhuYW1lcykge1xyXG4gICAgICAgIGZvciAobGV0IG5hbWUgaW4gbmFtZXMpIHtcclxuICAgICAgICAgICAgZGVsZXRlIHRoaXMuX2NhbGxiYWNrc1tuYW1lXTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHByZWZpeChuYW1lKSB7XHJcbiAgICByZXR1cm4gXCJfXCIgKyBuYW1lO1xyXG59IiwiaW1wb3J0IHtDYWxsYmFja1JlZ2lzdHJ5fSBmcm9tICcuL2NhbGxiYWNrX3JlZ2lzdHJ5JztcclxuXHJcbmV4cG9ydCBjbGFzcyBEaXNwYXRjaGVyIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuY2FsbGJhY2tzID0gbmV3IENhbGxiYWNrUmVnaXN0cnkoKTtcclxuICAgICAgICB0aGlzLmdsb2JhbF9jYWxsYmFja3MgPSBbXTtcclxuICAgIH1cclxuXHJcbiAgICBiaW5kKGV2ZW50TmFtZSwgY2FsbGJhY2ssIGNvbnRleHQpIHtcclxuICAgICAgICB0aGlzLmNhbGxiYWNrcy5hZGQoZXZlbnROYW1lLCBjYWxsYmFjaywgY29udGV4dCk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgYmluZF9nbG9iYWwoY2FsbGJhY2spIHtcclxuICAgICAgICB0aGlzLmdsb2JhbF9jYWxsYmFja3MucHVzaChjYWxsYmFjayk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgdW5iaW5kKGV2ZW50TmFtZSwgY2FsbGJhY2ssIGNvbnRleHQpIHtcclxuICAgICAgICB0aGlzLmNhbGxiYWNrcy5yZW1vdmUoZXZlbnROYW1lLCBjYWxsYmFjaywgY29udGV4dCk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgdW5iaW5kX2dsb2JhbChjYWxsYmFjaykge1xyXG4gICAgICAgIGlmICghY2FsbGJhY2spIHtcclxuICAgICAgICAgICAgdGhpcy5nbG9iYWxfY2FsbGJhY2tzID0gW107XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSBpbiB0aGlzLmdsb2JhbF9jYWxsYmFja3MpIHtcclxuICAgICAgICAgICAgaWYgKGNhbGxiYWNrID09IHRoaXMuZ2xvYmFsX2NhbGxiYWNrc1tpXSkge1xyXG4gICAgICAgICAgICAgICAgZGVsZXRlIHRoaXMuZ2xvYmFsX2NhbGxiYWNrc1tpXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICB1bmJpbmRfYWxsKCkge1xyXG4gICAgICAgIHRoaXMudW5iaW5kKCk7XHJcbiAgICAgICAgdGhpcy51bmJpbmRfZ2xvYmFsKCk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgZW1pdChldmVudE5hbWUsIGRhdGEpIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuZ2xvYmFsX2NhbGxiYWNrcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICB0aGlzLmdsb2JhbF9jYWxsYmFja3NbaV0oZXZlbnROYW1lLCBkYXRhKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciBjYWxsYmFja3MgPSB0aGlzLmNhbGxiYWNrcy5nZXQoZXZlbnROYW1lKTtcclxuICAgICAgICBpZiAoY2FsbGJhY2tzICYmIGNhbGxiYWNrcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2FsbGJhY2tzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBjYWxsYmFja3NbaV0uZm4uY2FsbChjYWxsYmFja3NbaV0uY29udGV4dCwgZGF0YSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHtFY2hvfSBmcm9tICcuL2VjaG8nXHJcblxyXG53aW5kb3cuRWNobyA9IG5ldyBFY2hvKCdhODIzOTNkODg2YTBlNmRkZmFlNScsIHtcclxuICAgIGhvc3Q6ICd3czovLzE5Mi4xNjguMTAuMTA6ODA4MScsXHJcbiAgICBhdXRoOiB7XHJcbiAgICAgICAgbWV0aG9kOiAncG9zdCcsXHJcbiAgICAgICAgdXJsOiAnaHR0cDovL3Rlc3RzLnRlc3QvYXBpL3B1c2hlci9hdXRoJyxcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAgICdBdXRob3JpemF0aW9uJzogJ0JlYXJlciBleUowZVhBaU9pSktWMVFpTENKaGJHY2lPaUpJVXpJMU5pSjkuZXlKcGMzTWlPaUpvZEhSd09sd3ZYQzkwWlhOMGN5NTBaWE4wSWl3aWFXRjBJam94TlRNNU1qVTFPRFkwTENKbGVIQWlPakUxTXpreU5UazBOalFzSW01aVppSTZNVFV6T1RJMU5UZzJOQ3dpYW5ScElqb2lXamhqTnpKa1ZYazRkbVJRZDBZellTSXNJbk4xWWlJNk1Td2ljSEoySWpvaU9EZGxNR0ZtTVdWbU9XWmtNVFU0TVRKbVpHVmpPVGN4TlROaE1UUmxNR0l3TkRjMU5EWmhZU0o5LnkwS1U0LU82VTBDWlZid1J3RTVkZW11RHdsNm1vUWtLbWRwb1FzZlpqVXMnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcGFyYW1zOiB7fVxyXG4gICAgfSxcclxufSlcclxuXHJcbi8qd2luZG93LkVjaG8uY2hhbm5lbCgnb3JkZXInKS5saXN0ZW4oJ25ldycsIChlKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhlKVxyXG59KS5saXN0ZW4oJ21ha2UnLCAoZSkgPT4ge1xyXG59KTsqL1xyXG5cclxuXHJcblxyXG4vKndpbmRvdy5FY2hvLnByaXZhdGUoJ3VzZXIuMScpLmxpc3RlbignYScsIChlKSA9PiB7XHJcbiAgICBhbGVydCgnYWFhJyk7XHJcbn0pLmxpc3RlbignYicsIChlKSA9PiB7XHJcbiAgICBhbGVydCgnYmJiJyk7XHJcbn0pOyovXHJcblxyXG53aW5kb3cuRWNoby5qb2luKGBjaGF0LjFgKVxyXG4gICAgLmhlcmUoKHVzZXJzKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ+WFqOmDqOS6uuWRmCcpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHVzZXJzKVxyXG4gICAgfSlcclxuICAgIC5qb2luaW5nKCh1c2VyKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ+aWsOS6uuWKoOWFpScpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHVzZXIpO1xyXG4gICAgfSlcclxuICAgIC5sZWF2aW5nKCh1c2VyKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ+acieS6uumAgOWHuicpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHVzZXIpO1xyXG4gICAgfSkubGlzdGVuKCdOZXdNZXNzYWdlJywgKGUpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKGUpO1xyXG59KTtcclxuIiwiZXhwb3J0IGNsYXNzIENoYW5uZWwge1xyXG4gICAgY29uc3RydWN0b3IocHVzaGVyLCBuYW1lKSB7XHJcbiAgICAgICAgdGhpcy5wdXNoZXIgPSBwdXNoZXI7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcclxuXHJcbiAgICAgICAgdGhpcy5zdWJzY3JpYmUoKTtcclxuICAgIH1cclxuXHJcbiAgICBzdWJzY3JpYmUoKSB7XHJcbiAgICAgICAgdGhpcy5zdWJzY3JpcHRpb24gPSB0aGlzLnB1c2hlci5zdWJzY3JpYmUodGhpcy5uYW1lKTtcclxuICAgIH1cclxuXHJcbiAgICB1bnN1YnNjcmliZSgpIHtcclxuICAgICAgICB0aGlzLnB1c2hlci51bnN1YnNjcmliZSh0aGlzLm5hbWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGxpc3RlbihldmVudCwgY2FsbGJhY2spIHtcclxuICAgICAgICB0aGlzLm9uKGV2ZW50LCBjYWxsYmFjayk7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHN0b3BMaXN0ZW5pbmcoZXZlbnQpIHtcclxuICAgICAgICB0aGlzLnN1YnNjcmlwdGlvbi51bmJpbmQoZXZlbnQpO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBvbihldmVudCwgY2FsbGJhY2spIHtcclxuICAgICAgICB0aGlzLnN1YnNjcmlwdGlvbi5iaW5kKGV2ZW50LCBjYWxsYmFjayk7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHdoaXNwZXIoZXZlbnQsIGRhdGEpIHtcclxuICAgICAgICB0aGlzLnB1c2hlci5zZW5kKHtcclxuICAgICAgICAgICAgY2hhbm5lbDogdGhpcy5uYW1lLFxyXG4gICAgICAgICAgICBkYXRhOiBkYXRhLFxyXG4gICAgICAgICAgICBldmVudDogJ2NsaWVudC0nICsgZXZlbnRcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBsaXN0ZW5Gb3JXaGlzcGVyKGV2ZW50LCBjYWxsYmFjaykge1xyXG4gICAgICAgIHRoaXMub24oJ2NsaWVudC0nICsgZXZlbnQsIGNhbGxiYWNrKTtcclxuICAgIH1cclxufSIsImltcG9ydCB7Q2hhbm5lbH0gZnJvbSBcIi4vY2hhbm5lbFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFB1c2hlckNoYW5uZWwgZXh0ZW5kcyBDaGFubmVsIHtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEBwYXJhbSBwdXNoZXJcclxuICAgICAqIEBwYXJhbSBjaGFubmVsXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKHB1c2hlciwgbmFtZSkge1xyXG4gICAgICAgIHN1cGVyKHB1c2hlciwgbmFtZSk7XHJcbiAgICB9XHJcblxyXG5cclxufSIsImltcG9ydCB7Q2hhbm5lbH0gZnJvbSBcIi4vY2hhbm5lbFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFB1c2hlclByZXNlbmNlQ2hhbm5lbCBleHRlbmRzIENoYW5uZWwge1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQHBhcmFtIHB1c2hlclxyXG4gICAgICogQHBhcmFtIGNoYW5uZWxcclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IocHVzaGVyLCBuYW1lKSB7XHJcbiAgICAgICAgc3VwZXIocHVzaGVyLCBuYW1lKTtcclxuICAgIH1cclxuXHJcbiAgICBoZXJlKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgbGV0IGJhY2sgPSAoZSkgPT4ge1xyXG4gICAgICAgICAgICBjYWxsYmFjayhlLnByZXNlbmNlKVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLm9uKCdzdWJzY3JpcHRpb25fc3VjY2VlZGVkJywgYmFjayk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgam9pbmluZyhjYWxsYmFjaykge1xyXG4gICAgICAgIHRoaXMub24oJ21lbWJlcl9hZGRlZCcsIGNhbGxiYWNrKTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBsZWF2aW5nKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgdGhpcy5vbignbWVtYmVyX3JlbW92ZWQnLCBjYWxsYmFjayk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQge0NoYW5uZWx9IGZyb20gXCIuL2NoYW5uZWxcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBQdXNoZXJQcml2YXRlQ2hhbm5lbCBleHRlbmRzIENoYW5uZWwge1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQHBhcmFtIHB1c2hlclxyXG4gICAgICogQHBhcmFtIGNoYW5uZWxcclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IocHVzaGVyLCBuYW1lKSB7XHJcbiAgICAgICAgc3VwZXIocHVzaGVyLCBuYW1lKTtcclxuICAgIH1cclxuXHJcbn0iLCJpbXBvcnQgJ2x1ZmZ5LXB1c2hlcic7XHJcbmltcG9ydCB7UHVzaGVyQ2hhbm5lbH0gZnJvbSBcIi4uL2NoYW5uZWwvcHVzaGVyLWNoYW5uZWxcIjtcclxuaW1wb3J0IHtQdXNoZXJQcml2YXRlQ2hhbm5lbH0gZnJvbSBcIi4uL2NoYW5uZWwvcHVzaGVyLXByaXZhdGUtY2hhbm5lbFwiO1xyXG5pbXBvcnQge1B1c2hlclByZXNlbmNlQ2hhbm5lbH0gZnJvbSBcIi4uL2NoYW5uZWwvcHVzaGVyLXByZXNlbmNlLWNoYW5uZWxcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBQdXNoZXJDb25uZWN0b3Ige1xyXG4gICAgY29uc3RydWN0b3IoYXBwX2tleSwgb3B0aW9ucykge1xyXG4gICAgICAgIHRoaXMucHVzaGVyID0gbmV3IFB1c2hlcihhcHBfa2V5LCBvcHRpb25zKTtcclxuICAgICAgICB0aGlzLmNoYW5uZWxzID0ge307XHJcbiAgICB9XHJcblxyXG4gICAgY2hhbm5lbChjaGFubmVsKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuY2hhbm5lbHNbY2hhbm5lbF0gPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB0aGlzLmNoYW5uZWxzW2NoYW5uZWxdID0gbmV3IFB1c2hlckNoYW5uZWwodGhpcy5wdXNoZXIsIGNoYW5uZWwpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY2hhbm5lbHNbY2hhbm5lbF07XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZUNoYW5uZWwoY2hhbm5lbCkge1xyXG4gICAgICAgIGlmICh0aGlzLmNoYW5uZWxzWydwcml2YXRlLScgKyBjaGFubmVsXSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2hhbm5lbHNbJ3ByaXZhdGUtJyArIGNoYW5uZWxdID0gbmV3IFB1c2hlclByaXZhdGVDaGFubmVsKHRoaXMucHVzaGVyLCAncHJpdmF0ZS0nICsgY2hhbm5lbCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLmNoYW5uZWxzWydwcml2YXRlLScgKyBjaGFubmVsXTtcclxuICAgIH1cclxuXHJcbiAgICBwcmVzZW5jZUNoYW5uZWwoY2hhbm5lbCkge1xyXG4gICAgICAgIGlmICh0aGlzLmNoYW5uZWxzWydwcmVzZW5jZS0nICsgY2hhbm5lbF0gPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB0aGlzLmNoYW5uZWxzWydwcmVzZW5jZS0nICsgY2hhbm5lbF0gPSBuZXcgUHVzaGVyUHJlc2VuY2VDaGFubmVsKHRoaXMucHVzaGVyLCAncHJlc2VuY2UtJyArIGNoYW5uZWwpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy5jaGFubmVsc1sncHJlc2VuY2UtJyArIGNoYW5uZWxdO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHtQdXNoZXJDb25uZWN0b3J9IGZyb20gXCIuL2Nvbm5lY3Rvci9wdXNoZXJfY29ubmVjdG9yXCI7XHJcbmltcG9ydCB7UHJpdmF0ZUNoYW5uZWx9IGZyb20gXCJsdWZmeS1wdXNoZXIvc3JjL2NoYW5uZWxzL3ByaXZhdGVfY2hhbm5lbFwiO1xyXG5pbXBvcnQge1ByZXNlbmNlQ2hhbm5lbH0gZnJvbSBcImx1ZmZ5LXB1c2hlci9zcmMvY2hhbm5lbHMvcHJlc2VuY2VfY2hhbm5lbFwiO1xyXG5pbXBvcnQge0NoYW5uZWx9IGZyb20gXCJsdWZmeS1wdXNoZXIvc3JjL2NoYW5uZWxzL2NoYW5uZWxcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBFY2hvIHtcclxuICAgIGNvbnN0cnVjdG9yKGFwcGtleSwgb3B0aW9ucykge1xyXG4gICAgICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XHJcbiAgICAgICAgdGhpcy5jb25uZWN0b3IgPSBuZXcgUHVzaGVyQ29ubmVjdG9yKGFwcGtleSwgdGhpcy5vcHRpb25zKTtcclxuICAgIH1cclxuXHJcbiAgICBjaGFubmVsKGNoYW5uZWwpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jb25uZWN0b3IuY2hhbm5lbChjaGFubmVsKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlKGNoYW5uZWwpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jb25uZWN0b3IucHJpdmF0ZUNoYW5uZWwoY2hhbm5lbCk7XHJcbiAgICB9XHJcblxyXG4gICAgam9pbihjaGFubmVsKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY29ubmVjdG9yLnByZXNlbmNlQ2hhbm5lbChjaGFubmVsKTtcclxuICAgIH1cclxuXHJcbiAgICBzdWJzY3JpYmUobmFtZSkge1xyXG4gICAgICAgIGlmIChuYW1lLmluZGV4T2YoJ3ByaXZhdGUtJykgPT09IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMucHJpdmF0ZShuYW1lKTtcclxuICAgICAgICB9IGVsc2UgaWYgKG5hbWUuaW5kZXhPZigncHJlc2VuY2UtJykgPT09IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuam9pbihuYW1lKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jaGFubmVsKG5hbWUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOmAgOWHuumikemBkyzmmoLnlZlcclxuICAgICAqIEBwYXJhbSBjaGFubmVsXHJcbiAgICAgKi9cclxuICAgIGxlYXZlKGNoYW5uZWwpIHtcclxuICAgICAgICBcclxuICAgIH1cclxufVxyXG5cclxud2luZG93LkVjaG8gPSBFY2hvO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9
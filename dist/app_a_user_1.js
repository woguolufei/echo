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
  }, {
    key: "unsubscribe",
    value: function unsubscribe() {
      this.pusher.send({
        event: 'unsubscribe',
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
  }, {
    key: "unsubscribe",
    value: function unsubscribe() {
      this.pusher.send({
        event: 'unsubscribe',
        data: {
          channel: this.name
        }
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
  }, {
    key: "unsubscribe",
    value: function unsubscribe() {
      this.pusher.send({
        event: 'unsubscribe',
        data: {
          channel: this.name
        }
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
      var channel = this.channels.remove(channel_name);
      channel.unsubscribe();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvYWRhcHRlcnMveGhyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvYXhpb3MuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jYW5jZWwvQ2FuY2VsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY2FuY2VsL0NhbmNlbFRva2VuLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY2FuY2VsL2lzQ2FuY2VsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9BeGlvcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvSW50ZXJjZXB0b3JNYW5hZ2VyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9jcmVhdGVFcnJvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvZGlzcGF0Y2hSZXF1ZXN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9lbmhhbmNlRXJyb3IuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL3NldHRsZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvdHJhbnNmb3JtRGF0YS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2RlZmF1bHRzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9iaW5kLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9idG9hLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9idWlsZFVSTC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvY29tYmluZVVSTHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2Nvb2tpZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2lzQWJzb2x1dGVVUkwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2lzVVJMU2FtZU9yaWdpbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvbm9ybWFsaXplSGVhZGVyTmFtZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvcGFyc2VIZWFkZXJzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9zcHJlYWQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi91dGlscy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaXMtYnVmZmVyL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9wcm9jZXNzL2Jyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NoYW5uZWxzL2NoYW5uZWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NoYW5uZWxzL21hbm5hZ2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9jaGFubmVscy9wcmVzZW5jZV9jaGFubmVsLmpzIiwid2VicGFjazovLy8uL3NyYy9jaGFubmVscy9wcml2YXRlX2NoYW5uZWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Nvbm5lY3Rpb24vc29ja2V0LmpzIiwid2VicGFjazovLy8uL3NyYy9ldmVudHMvY2FsbGJhY2tfcmVnaXN0cnkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2V2ZW50cy9kaXNwYXRjaGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9wdXNoZXIuanMiXSwibmFtZXMiOlsiQ2hhbm5lbCIsIm5hbWUiLCJwdXNoZXIiLCJzb2NrZXQiLCJzdGF0ZSIsInN1YnNjcmliZSIsInNlbmQiLCJldmVudCIsImRhdGEiLCJjaGFubmVsIiwiRGlzcGF0Y2hlciIsIk1hbm5hZ2VyIiwiY2hhbm5lbHMiLCJjcmVhdGVDaGFubmVsIiwiT2JqZWN0Iiwia2V5cyIsImkiLCJpbmRleE9mIiwiUHJpdmF0ZUNoYW5uZWwiLCJQcmVzZW5jZUNoYW5uZWwiLCJhdXRoIiwiZSIsImNoYW5uZWxfZGF0YSIsIlNvY2tldCIsImhvc3QiLCJXZWJTb2NrZXQiLCJrZXkiLCJiaW5kTGlzdGVuZXJzIiwib25vcGVuIiwib25PcGVuIiwib25lcnJvciIsImVycm9yIiwib25FcnJvciIsIm9uY2xvc2UiLCJjbG9zZUV2ZW50Iiwib25DbG9zZSIsIm9ubWVzc2FnZSIsIm1lc3NhZ2UiLCJvbk1lc3NhZ2UiLCJiaW5kIiwic29ja2V0X2lkIiwiY29uc29sZSIsInJlYWR5U3RhdGUiLCJDTE9TRUQiLCJ0eXBlIiwiZURhdGEiLCJKU09OIiwicGFyc2UiLCJ1bmRlZmluZWQiLCJmaW5kIiwiZW1pdCIsImpzb24iLCJzdHJpbmdpZnkiLCJDYWxsYmFja1JlZ2lzdHJ5IiwiX2NhbGxiYWNrcyIsInByZWZpeCIsImNhbGxiYWNrIiwiY29udGV4dCIsInByZWZpeGVkRXZlbnROYW1lIiwicHVzaCIsImZuIiwibmFtZXMiLCJyZW1vdmVDYWxsYmFjayIsInJlbW92ZUFsbENhbGxiYWNrcyIsImxlbmd0aCIsImNhbGxiYWNrcyIsImdsb2JhbF9jYWxsYmFja3MiLCJldmVudE5hbWUiLCJhZGQiLCJyZW1vdmUiLCJ1bmJpbmQiLCJ1bmJpbmRfZ2xvYmFsIiwiZ2V0IiwiY2FsbCIsIlB1c2hlciIsImFwcF9rZXkiLCJvcHRpb25zIiwiY2hlY2tBcHBLZXkiLCJkaXNwYXRjaGVyIiwiY29ubmVjdCIsImNoYW5uZWxfbmFtZSIsInVuc3Vic2NyaWJlIiwibWV0aG9kIiwicGFyYW1zIiwiYXNzaWduIiwiZ2V0U29ja2V0SWQiLCJheGlvcyIsInVybCIsImhlYWRlcnMiLCJ0aGVuIiwiY2F0Y2giLCJ3aW5kb3ciXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ2xGQSxpQkFBaUIsbUJBQU8sQ0FBQyxzREFBYSxFOzs7Ozs7Ozs7Ozs7QUNBekI7O0FBRWIsWUFBWSxtQkFBTyxDQUFDLHFEQUFZO0FBQ2hDLGFBQWEsbUJBQU8sQ0FBQyxpRUFBa0I7QUFDdkMsZUFBZSxtQkFBTyxDQUFDLDJFQUF1QjtBQUM5QyxtQkFBbUIsbUJBQU8sQ0FBQyxtRkFBMkI7QUFDdEQsc0JBQXNCLG1CQUFPLENBQUMseUZBQThCO0FBQzVELGtCQUFrQixtQkFBTyxDQUFDLHlFQUFxQjtBQUMvQyx5RkFBeUYs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YXhELElBQWIsQ0FBa0JvRSxPQUFsQixJQUE2QixFQUhwQztBQUlGTCxjQUFNLEVBQUVBLE1BSk47QUFLRjNFLFlBQUksRUFBRUE7QUFMSixPQUFELENBQUwsQ0FNR2lGLElBTkgsQ0FNUSxVQUFDcEUsQ0FBRCxFQUFPO0FBQ1htQyxnQkFBUSxDQUFDbkMsQ0FBRCxDQUFSO0FBQ0gsT0FSRCxFQVFHcUUsS0FSSCxDQVFTLFVBQUNyRSxDQUFELEVBQU87QUFDWm9CLGVBQU8sQ0FBQ1YsS0FBUixDQUFjLFdBQWQ7QUFDSCxPQVZEO0FBV0g7QUFqRUw7O0FBQUE7QUFBQTtBQW9FQTRELE1BQU0sQ0FBQ2pCLE1BQVAsR0FBZ0JBLE1BQWhCLEMiLCJmaWxlIjoicHVzaGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvcHVzaGVyLmpzXCIpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2xpYi9heGlvcycpOyIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi8uLi91dGlscycpO1xudmFyIHNldHRsZSA9IHJlcXVpcmUoJy4vLi4vY29yZS9zZXR0bGUnKTtcbnZhciBidWlsZFVSTCA9IHJlcXVpcmUoJy4vLi4vaGVscGVycy9idWlsZFVSTCcpO1xudmFyIHBhcnNlSGVhZGVycyA9IHJlcXVpcmUoJy4vLi4vaGVscGVycy9wYXJzZUhlYWRlcnMnKTtcbnZhciBpc1VSTFNhbWVPcmlnaW4gPSByZXF1aXJlKCcuLy4uL2hlbHBlcnMvaXNVUkxTYW1lT3JpZ2luJyk7XG52YXIgY3JlYXRlRXJyb3IgPSByZXF1aXJlKCcuLi9jb3JlL2NyZWF0ZUVycm9yJyk7XG52YXIgYnRvYSA9ICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuYnRvYSAmJiB3aW5kb3cuYnRvYS5iaW5kKHdpbmRvdykpIHx8IHJlcXVpcmUoJy4vLi4vaGVscGVycy9idG9hJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24geGhyQWRhcHRlcihjb25maWcpIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIGRpc3BhdGNoWGhyUmVxdWVzdChyZXNvbHZlLCByZWplY3QpIHtcbiAgICB2YXIgcmVxdWVzdERhdGEgPSBjb25maWcuZGF0YTtcbiAgICB2YXIgcmVxdWVzdEhlYWRlcnMgPSBjb25maWcuaGVhZGVycztcblxuICAgIGlmICh1dGlscy5pc0Zvcm1EYXRhKHJlcXVlc3REYXRhKSkge1xuICAgICAgZGVsZXRlIHJlcXVlc3RIZWFkZXJzWydDb250ZW50LVR5cGUnXTsgLy8gTGV0IHRoZSBicm93c2VyIHNldCBpdFxuICAgIH1cblxuICAgIHZhciByZXF1ZXN0ID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgdmFyIGxvYWRFdmVudCA9ICdvbnJlYWR5c3RhdGVjaGFuZ2UnO1xuICAgIHZhciB4RG9tYWluID0gZmFsc2U7XG5cbiAgICAvLyBGb3IgSUUgOC85IENPUlMgc3VwcG9ydFxuICAgIC8vIE9ubHkgc3VwcG9ydHMgUE9TVCBhbmQgR0VUIGNhbGxzIGFuZCBkb2Vzbid0IHJldHVybnMgdGhlIHJlc3BvbnNlIGhlYWRlcnMuXG4gICAgLy8gRE9OJ1QgZG8gdGhpcyBmb3IgdGVzdGluZyBiL2MgWE1MSHR0cFJlcXVlc3QgaXMgbW9ja2VkLCBub3QgWERvbWFpblJlcXVlc3QuXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAndGVzdCcgJiZcbiAgICAgICAgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgICAgICAgd2luZG93LlhEb21haW5SZXF1ZXN0ICYmICEoJ3dpdGhDcmVkZW50aWFscycgaW4gcmVxdWVzdCkgJiZcbiAgICAgICAgIWlzVVJMU2FtZU9yaWdpbihjb25maWcudXJsKSkge1xuICAgICAgcmVxdWVzdCA9IG5ldyB3aW5kb3cuWERvbWFpblJlcXVlc3QoKTtcbiAgICAgIGxvYWRFdmVudCA9ICdvbmxvYWQnO1xuICAgICAgeERvbWFpbiA9IHRydWU7XG4gICAgICByZXF1ZXN0Lm9ucHJvZ3Jlc3MgPSBmdW5jdGlvbiBoYW5kbGVQcm9ncmVzcygpIHt9O1xuICAgICAgcmVxdWVzdC5vbnRpbWVvdXQgPSBmdW5jdGlvbiBoYW5kbGVUaW1lb3V0KCkge307XG4gICAgfVxuXG4gICAgLy8gSFRUUCBiYXNpYyBhdXRoZW50aWNhdGlvblxuICAgIGlmIChjb25maWcuYXV0aCkge1xuICAgICAgdmFyIHVzZXJuYW1lID0gY29uZmlnLmF1dGgudXNlcm5hbWUgfHwgJyc7XG4gICAgICB2YXIgcGFzc3dvcmQgPSBjb25maWcuYXV0aC5wYXNzd29yZCB8fCAnJztcbiAgICAgIHJlcXVlc3RIZWFkZXJzLkF1dGhvcml6YXRpb24gPSAnQmFzaWMgJyArIGJ0b2EodXNlcm5hbWUgKyAnOicgKyBwYXNzd29yZCk7XG4gICAgfVxuXG4gICAgcmVxdWVzdC5vcGVuKGNvbmZpZy5tZXRob2QudG9VcHBlckNhc2UoKSwgYnVpbGRVUkwoY29uZmlnLnVybCwgY29uZmlnLnBhcmFtcywgY29uZmlnLnBhcmFtc1NlcmlhbGl6ZXIpLCB0cnVlKTtcblxuICAgIC8vIFNldCB0aGUgcmVxdWVzdCB0aW1lb3V0IGluIE1TXG4gICAgcmVxdWVzdC50aW1lb3V0ID0gY29uZmlnLnRpbWVvdXQ7XG5cbiAgICAvLyBMaXN0ZW4gZm9yIHJlYWR5IHN0YXRlXG4gICAgcmVxdWVzdFtsb2FkRXZlbnRdID0gZnVuY3Rpb24gaGFuZGxlTG9hZCgpIHtcbiAgICAgIGlmICghcmVxdWVzdCB8fCAocmVxdWVzdC5yZWFkeVN0YXRlICE9PSA0ICYmICF4RG9tYWluKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8vIFRoZSByZXF1ZXN0IGVycm9yZWQgb3V0IGFuZCB3ZSBkaWRuJ3QgZ2V0IGEgcmVzcG9uc2UsIHRoaXMgd2lsbCBiZVxuICAgICAgLy8gaGFuZGxlZCBieSBvbmVycm9yIGluc3RlYWRcbiAgICAgIC8vIFdpdGggb25lIGV4Y2VwdGlvbjogcmVxdWVzdCB0aGF0IHVzaW5nIGZpbGU6IHByb3RvY29sLCBtb3N0IGJyb3dzZXJzXG4gICAgICAvLyB3aWxsIHJldHVybiBzdGF0dXMgYXMgMCBldmVuIHRob3VnaCBpdCdzIGEgc3VjY2Vzc2Z1bCByZXF1ZXN0XG4gICAgICBpZiAocmVxdWVzdC5zdGF0dXMgPT09IDAgJiYgIShyZXF1ZXN0LnJlc3BvbnNlVVJMICYmIHJlcXVlc3QucmVzcG9uc2VVUkwuaW5kZXhPZignZmlsZTonKSA9PT0gMCkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICAvLyBQcmVwYXJlIHRoZSByZXNwb25zZVxuICAgICAgdmFyIHJlc3BvbnNlSGVhZGVycyA9ICdnZXRBbGxSZXNwb25zZUhlYWRlcnMnIGluIHJlcXVlc3QgPyBwYXJzZUhlYWRlcnMocmVxdWVzdC5nZXRBbGxSZXNwb25zZUhlYWRlcnMoKSkgOiBudWxsO1xuICAgICAgdmFyIHJlc3BvbnNlRGF0YSA9ICFjb25maWcucmVzcG9uc2VUeXBlIHx8IGNvbmZpZy5yZXNwb25zZVR5cGUgPT09ICd0ZXh0JyA/IHJlcXVlc3QucmVzcG9uc2VUZXh0IDogcmVxdWVzdC5yZXNwb25zZTtcbiAgICAgIHZhciByZXNwb25zZSA9IHtcbiAgICAgICAgZGF0YTogcmVzcG9uc2VEYXRhLFxuICAgICAgICAvLyBJRSBzZW5kcyAxMjIzIGluc3RlYWQgb2YgMjA0IChodHRwczovL2dpdGh1Yi5jb20vYXhpb3MvYXhpb3MvaXNzdWVzLzIwMSlcbiAgICAgICAgc3RhdHVzOiByZXF1ZXN0LnN0YXR1cyA9PT0gMTIyMyA/IDIwNCA6IHJlcXVlc3Quc3RhdHVzLFxuICAgICAgICBzdGF0dXNUZXh0OiByZXF1ZXN0LnN0YXR1cyA9PT0gMTIyMyA/ICdObyBDb250ZW50JyA6IHJlcXVlc3Quc3RhdHVzVGV4dCxcbiAgICAgICAgaGVhZGVyczogcmVzcG9uc2VIZWFkZXJzLFxuICAgICAgICBjb25maWc6IGNvbmZpZyxcbiAgICAgICAgcmVxdWVzdDogcmVxdWVzdFxuICAgICAgfTtcblxuICAgICAgc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgcmVzcG9uc2UpO1xuXG4gICAgICAvLyBDbGVhbiB1cCByZXF1ZXN0XG4gICAgICByZXF1ZXN0ID0gbnVsbDtcbiAgICB9O1xuXG4gICAgLy8gSGFuZGxlIGxvdyBsZXZlbCBuZXR3b3JrIGVycm9yc1xuICAgIHJlcXVlc3Qub25lcnJvciA9IGZ1bmN0aW9uIGhhbmRsZUVycm9yKCkge1xuICAgICAgLy8gUmVhbCBlcnJvcnMgYXJlIGhpZGRlbiBmcm9tIHVzIGJ5IHRoZSBicm93c2VyXG4gICAgICAvLyBvbmVycm9yIHNob3VsZCBvbmx5IGZpcmUgaWYgaXQncyBhIG5ldHdvcmsgZXJyb3JcbiAgICAgIHJlamVjdChjcmVhdGVFcnJvcignTmV0d29yayBFcnJvcicsIGNvbmZpZywgbnVsbCwgcmVxdWVzdCkpO1xuXG4gICAgICAvLyBDbGVhbiB1cCByZXF1ZXN0XG4gICAgICByZXF1ZXN0ID0gbnVsbDtcbiAgICB9O1xuXG4gICAgLy8gSGFuZGxlIHRpbWVvdXRcbiAgICByZXF1ZXN0Lm9udGltZW91dCA9IGZ1bmN0aW9uIGhhbmRsZVRpbWVvdXQoKSB7XG4gICAgICByZWplY3QoY3JlYXRlRXJyb3IoJ3RpbWVvdXQgb2YgJyArIGNvbmZpZy50aW1lb3V0ICsgJ21zIGV4Y2VlZGVkJywgY29uZmlnLCAnRUNPTk5BQk9SVEVEJyxcbiAgICAgICAgcmVxdWVzdCkpO1xuXG4gICAgICAvLyBDbGVhbiB1cCByZXF1ZXN0XG4gICAgICByZXF1ZXN0ID0gbnVsbDtcbiAgICB9O1xuXG4gICAgLy8gQWRkIHhzcmYgaGVhZGVyXG4gICAgLy8gVGhpcyBpcyBvbmx5IGRvbmUgaWYgcnVubmluZyBpbiBhIHN0YW5kYXJkIGJyb3dzZXIgZW52aXJvbm1lbnQuXG4gICAgLy8gU3BlY2lmaWNhbGx5IG5vdCBpZiB3ZSdyZSBpbiBhIHdlYiB3b3JrZXIsIG9yIHJlYWN0LW5hdGl2ZS5cbiAgICBpZiAodXRpbHMuaXNTdGFuZGFyZEJyb3dzZXJFbnYoKSkge1xuICAgICAgdmFyIGNvb2tpZXMgPSByZXF1aXJlKCcuLy4uL2hlbHBlcnMvY29va2llcycpO1xuXG4gICAgICAvLyBBZGQgeHNyZiBoZWFkZXJcbiAgICAgIHZhciB4c3JmVmFsdWUgPSAoY29uZmlnLndpdGhDcmVkZW50aWFscyB8fCBpc1VSTFNhbWVPcmlnaW4oY29uZmlnLnVybCkpICYmIGNvbmZpZy54c3JmQ29va2llTmFtZSA/XG4gICAgICAgICAgY29va2llcy5yZWFkKGNvbmZpZy54c3JmQ29va2llTmFtZSkgOlxuICAgICAgICAgIHVuZGVmaW5lZDtcblxuICAgICAgaWYgKHhzcmZWYWx1ZSkge1xuICAgICAgICByZXF1ZXN0SGVhZGVyc1tjb25maWcueHNyZkhlYWRlck5hbWVdID0geHNyZlZhbHVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIEFkZCBoZWFkZXJzIHRvIHRoZSByZXF1ZXN0XG4gICAgaWYgKCdzZXRSZXF1ZXN0SGVhZGVyJyBpbiByZXF1ZXN0KSB7XG4gICAgICB1dGlscy5mb3JFYWNoKHJlcXVlc3RIZWFkZXJzLCBmdW5jdGlvbiBzZXRSZXF1ZXN0SGVhZGVyKHZhbCwga2V5KSB7XG4gICAgICAgIGlmICh0eXBlb2YgcmVxdWVzdERhdGEgPT09ICd1bmRlZmluZWQnICYmIGtleS50b0xvd2VyQ2FzZSgpID09PSAnY29udGVudC10eXBlJykge1xuICAgICAgICAgIC8vIFJlbW92ZSBDb250ZW50LVR5cGUgaWYgZGF0YSBpcyB1bmRlZmluZWRcbiAgICAgICAgICBkZWxldGUgcmVxdWVzdEhlYWRlcnNba2V5XTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBPdGhlcndpc2UgYWRkIGhlYWRlciB0byB0aGUgcmVxdWVzdFxuICAgICAgICAgIHJlcXVlc3Quc2V0UmVxdWVzdEhlYWRlcihrZXksIHZhbCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIEFkZCB3aXRoQ3JlZGVudGlhbHMgdG8gcmVxdWVzdCBpZiBuZWVkZWRcbiAgICBpZiAoY29uZmlnLndpdGhDcmVkZW50aWFscykge1xuICAgICAgcmVxdWVzdC53aXRoQ3JlZGVudGlhbHMgPSB0cnVlO1xuICAgIH1cblxuICAgIC8vIEFkZCByZXNwb25zZVR5cGUgdG8gcmVxdWVzdCBpZiBuZWVkZWRcbiAgICBpZiAoY29uZmlnLnJlc3BvbnNlVHlwZSkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgcmVxdWVzdC5yZXNwb25zZVR5cGUgPSBjb25maWcucmVzcG9uc2VUeXBlO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBFeHBlY3RlZCBET01FeGNlcHRpb24gdGhyb3duIGJ5IGJyb3dzZXJzIG5vdCBjb21wYXRpYmxlIFhNTEh0dHBSZXF1ZXN0IExldmVsIDIuXG4gICAgICAgIC8vIEJ1dCwgdGhpcyBjYW4gYmUgc3VwcHJlc3NlZCBmb3IgJ2pzb24nIHR5cGUgYXMgaXQgY2FuIGJlIHBhcnNlZCBieSBkZWZhdWx0ICd0cmFuc2Zvcm1SZXNwb25zZScgZnVuY3Rpb24uXG4gICAgICAgIGlmIChjb25maWcucmVzcG9uc2VUeXBlICE9PSAnanNvbicpIHtcbiAgICAgICAgICB0aHJvdyBlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gSGFuZGxlIHByb2dyZXNzIGlmIG5lZWRlZFxuICAgIGlmICh0eXBlb2YgY29uZmlnLm9uRG93bmxvYWRQcm9ncmVzcyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcmVxdWVzdC5hZGRFdmVudExpc3RlbmVyKCdwcm9ncmVzcycsIGNvbmZpZy5vbkRvd25sb2FkUHJvZ3Jlc3MpO1xuICAgIH1cblxuICAgIC8vIE5vdCBhbGwgYnJvd3NlcnMgc3VwcG9ydCB1cGxvYWQgZXZlbnRzXG4gICAgaWYgKHR5cGVvZiBjb25maWcub25VcGxvYWRQcm9ncmVzcyA9PT0gJ2Z1bmN0aW9uJyAmJiByZXF1ZXN0LnVwbG9hZCkge1xuICAgICAgcmVxdWVzdC51cGxvYWQuYWRkRXZlbnRMaXN0ZW5lcigncHJvZ3Jlc3MnLCBjb25maWcub25VcGxvYWRQcm9ncmVzcyk7XG4gICAgfVxuXG4gICAgaWYgKGNvbmZpZy5jYW5jZWxUb2tlbikge1xuICAgICAgLy8gSGFuZGxlIGNhbmNlbGxhdGlvblxuICAgICAgY29uZmlnLmNhbmNlbFRva2VuLnByb21pc2UudGhlbihmdW5jdGlvbiBvbkNhbmNlbGVkKGNhbmNlbCkge1xuICAgICAgICBpZiAoIXJlcXVlc3QpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICByZXF1ZXN0LmFib3J0KCk7XG4gICAgICAgIHJlamVjdChjYW5jZWwpO1xuICAgICAgICAvLyBDbGVhbiB1cCByZXF1ZXN0XG4gICAgICAgIHJlcXVlc3QgPSBudWxsO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKHJlcXVlc3REYXRhID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJlcXVlc3REYXRhID0gbnVsbDtcbiAgICB9XG5cbiAgICAvLyBTZW5kIHRoZSByZXF1ZXN0XG4gICAgcmVxdWVzdC5zZW5kKHJlcXVlc3REYXRhKTtcbiAgfSk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuL3V0aWxzJyk7XG52YXIgYmluZCA9IHJlcXVpcmUoJy4vaGVscGVycy9iaW5kJyk7XG52YXIgQXhpb3MgPSByZXF1aXJlKCcuL2NvcmUvQXhpb3MnKTtcbnZhciBkZWZhdWx0cyA9IHJlcXVpcmUoJy4vZGVmYXVsdHMnKTtcblxuLyoqXG4gKiBDcmVhdGUgYW4gaW5zdGFuY2Ugb2YgQXhpb3NcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gZGVmYXVsdENvbmZpZyBUaGUgZGVmYXVsdCBjb25maWcgZm9yIHRoZSBpbnN0YW5jZVxuICogQHJldHVybiB7QXhpb3N9IEEgbmV3IGluc3RhbmNlIG9mIEF4aW9zXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZUluc3RhbmNlKGRlZmF1bHRDb25maWcpIHtcbiAgdmFyIGNvbnRleHQgPSBuZXcgQXhpb3MoZGVmYXVsdENvbmZpZyk7XG4gIHZhciBpbnN0YW5jZSA9IGJpbmQoQXhpb3MucHJvdG90eXBlLnJlcXVlc3QsIGNvbnRleHQpO1xuXG4gIC8vIENvcHkgYXhpb3MucHJvdG90eXBlIHRvIGluc3RhbmNlXG4gIHV0aWxzLmV4dGVuZChpbnN0YW5jZSwgQXhpb3MucHJvdG90eXBlLCBjb250ZXh0KTtcblxuICAvLyBDb3B5IGNvbnRleHQgdG8gaW5zdGFuY2VcbiAgdXRpbHMuZXh0ZW5kKGluc3RhbmNlLCBjb250ZXh0KTtcblxuICByZXR1cm4gaW5zdGFuY2U7XG59XG5cbi8vIENyZWF0ZSB0aGUgZGVmYXVsdCBpbnN0YW5jZSB0byBiZSBleHBvcnRlZFxudmFyIGF4aW9zID0gY3JlYXRlSW5zdGFuY2UoZGVmYXVsdHMpO1xuXG4vLyBFeHBvc2UgQXhpb3MgY2xhc3MgdG8gYWxsb3cgY2xhc3MgaW5oZXJpdGFuY2VcbmF4aW9zLkF4aW9zID0gQXhpb3M7XG5cbi8vIEZhY3RvcnkgZm9yIGNyZWF0aW5nIG5ldyBpbnN0YW5jZXNcbmF4aW9zLmNyZWF0ZSA9IGZ1bmN0aW9uIGNyZWF0ZShpbnN0YW5jZUNvbmZpZykge1xuICByZXR1cm4gY3JlYXRlSW5zdGFuY2UodXRpbHMubWVyZ2UoZGVmYXVsdHMsIGluc3RhbmNlQ29uZmlnKSk7XG59O1xuXG4vLyBFeHBvc2UgQ2FuY2VsICYgQ2FuY2VsVG9rZW5cbmF4aW9zLkNhbmNlbCA9IHJlcXVpcmUoJy4vY2FuY2VsL0NhbmNlbCcpO1xuYXhpb3MuQ2FuY2VsVG9rZW4gPSByZXF1aXJlKCcuL2NhbmNlbC9DYW5jZWxUb2tlbicpO1xuYXhpb3MuaXNDYW5jZWwgPSByZXF1aXJlKCcuL2NhbmNlbC9pc0NhbmNlbCcpO1xuXG4vLyBFeHBvc2UgYWxsL3NwcmVhZFxuYXhpb3MuYWxsID0gZnVuY3Rpb24gYWxsKHByb21pc2VzKSB7XG4gIHJldHVybiBQcm9taXNlLmFsbChwcm9taXNlcyk7XG59O1xuYXhpb3Muc3ByZWFkID0gcmVxdWlyZSgnLi9oZWxwZXJzL3NwcmVhZCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGF4aW9zO1xuXG4vLyBBbGxvdyB1c2Ugb2YgZGVmYXVsdCBpbXBvcnQgc3ludGF4IGluIFR5cGVTY3JpcHRcbm1vZHVsZS5leHBvcnRzLmRlZmF1bHQgPSBheGlvcztcbiIsIid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBBIGBDYW5jZWxgIGlzIGFuIG9iamVjdCB0aGF0IGlzIHRocm93biB3aGVuIGFuIG9wZXJhdGlvbiBpcyBjYW5jZWxlZC5cbiAqXG4gKiBAY2xhc3NcbiAqIEBwYXJhbSB7c3RyaW5nPX0gbWVzc2FnZSBUaGUgbWVzc2FnZS5cbiAqL1xuZnVuY3Rpb24gQ2FuY2VsKG1lc3NhZ2UpIHtcbiAgdGhpcy5tZXNzYWdlID0gbWVzc2FnZTtcbn1cblxuQ2FuY2VsLnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICByZXR1cm4gJ0NhbmNlbCcgKyAodGhpcy5tZXNzYWdlID8gJzogJyArIHRoaXMubWVzc2FnZSA6ICcnKTtcbn07XG5cbkNhbmNlbC5wcm90b3R5cGUuX19DQU5DRUxfXyA9IHRydWU7XG5cbm1vZHVsZS5leHBvcnRzID0gQ2FuY2VsO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgQ2FuY2VsID0gcmVxdWlyZSgnLi9DYW5jZWwnKTtcblxuLyoqXG4gKiBBIGBDYW5jZWxUb2tlbmAgaXMgYW4gb2JqZWN0IHRoYXQgY2FuIGJlIHVzZWQgdG8gcmVxdWVzdCBjYW5jZWxsYXRpb24gb2YgYW4gb3BlcmF0aW9uLlxuICpcbiAqIEBjbGFzc1xuICogQHBhcmFtIHtGdW5jdGlvbn0gZXhlY3V0b3IgVGhlIGV4ZWN1dG9yIGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiBDYW5jZWxUb2tlbihleGVjdXRvcikge1xuICBpZiAodHlwZW9mIGV4ZWN1dG9yICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignZXhlY3V0b3IgbXVzdCBiZSBhIGZ1bmN0aW9uLicpO1xuICB9XG5cbiAgdmFyIHJlc29sdmVQcm9taXNlO1xuICB0aGlzLnByb21pc2UgPSBuZXcgUHJvbWlzZShmdW5jdGlvbiBwcm9taXNlRXhlY3V0b3IocmVzb2x2ZSkge1xuICAgIHJlc29sdmVQcm9taXNlID0gcmVzb2x2ZTtcbiAgfSk7XG5cbiAgdmFyIHRva2VuID0gdGhpcztcbiAgZXhlY3V0b3IoZnVuY3Rpb24gY2FuY2VsKG1lc3NhZ2UpIHtcbiAgICBpZiAodG9rZW4ucmVhc29uKSB7XG4gICAgICAvLyBDYW5jZWxsYXRpb24gaGFzIGFscmVhZHkgYmVlbiByZXF1ZXN0ZWRcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0b2tlbi5yZWFzb24gPSBuZXcgQ2FuY2VsKG1lc3NhZ2UpO1xuICAgIHJlc29sdmVQcm9taXNlKHRva2VuLnJlYXNvbik7XG4gIH0pO1xufVxuXG4vKipcbiAqIFRocm93cyBhIGBDYW5jZWxgIGlmIGNhbmNlbGxhdGlvbiBoYXMgYmVlbiByZXF1ZXN0ZWQuXG4gKi9cbkNhbmNlbFRva2VuLnByb3RvdHlwZS50aHJvd0lmUmVxdWVzdGVkID0gZnVuY3Rpb24gdGhyb3dJZlJlcXVlc3RlZCgpIHtcbiAgaWYgKHRoaXMucmVhc29uKSB7XG4gICAgdGhyb3cgdGhpcy5yZWFzb247XG4gIH1cbn07XG5cbi8qKlxuICogUmV0dXJucyBhbiBvYmplY3QgdGhhdCBjb250YWlucyBhIG5ldyBgQ2FuY2VsVG9rZW5gIGFuZCBhIGZ1bmN0aW9uIHRoYXQsIHdoZW4gY2FsbGVkLFxuICogY2FuY2VscyB0aGUgYENhbmNlbFRva2VuYC5cbiAqL1xuQ2FuY2VsVG9rZW4uc291cmNlID0gZnVuY3Rpb24gc291cmNlKCkge1xuICB2YXIgY2FuY2VsO1xuICB2YXIgdG9rZW4gPSBuZXcgQ2FuY2VsVG9rZW4oZnVuY3Rpb24gZXhlY3V0b3IoYykge1xuICAgIGNhbmNlbCA9IGM7XG4gIH0pO1xuICByZXR1cm4ge1xuICAgIHRva2VuOiB0b2tlbixcbiAgICBjYW5jZWw6IGNhbmNlbFxuICB9O1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBDYW5jZWxUb2tlbjtcbiIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpc0NhbmNlbCh2YWx1ZSkge1xuICByZXR1cm4gISEodmFsdWUgJiYgdmFsdWUuX19DQU5DRUxfXyk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgZGVmYXVsdHMgPSByZXF1aXJlKCcuLy4uL2RlZmF1bHRzJyk7XG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLy4uL3V0aWxzJyk7XG52YXIgSW50ZXJjZXB0b3JNYW5hZ2VyID0gcmVxdWlyZSgnLi9JbnRlcmNlcHRvck1hbmFnZXInKTtcbnZhciBkaXNwYXRjaFJlcXVlc3QgPSByZXF1aXJlKCcuL2Rpc3BhdGNoUmVxdWVzdCcpO1xuXG4vKipcbiAqIENyZWF0ZSBhIG5ldyBpbnN0YW5jZSBvZiBBeGlvc1xuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBpbnN0YW5jZUNvbmZpZyBUaGUgZGVmYXVsdCBjb25maWcgZm9yIHRoZSBpbnN0YW5jZVxuICovXG5mdW5jdGlvbiBBeGlvcyhpbnN0YW5jZUNvbmZpZykge1xuICB0aGlzLmRlZmF1bHRzID0gaW5zdGFuY2VDb25maWc7XG4gIHRoaXMuaW50ZXJjZXB0b3JzID0ge1xuICAgIHJlcXVlc3Q6IG5ldyBJbnRlcmNlcHRvck1hbmFnZXIoKSxcbiAgICByZXNwb25zZTogbmV3IEludGVyY2VwdG9yTWFuYWdlcigpXG4gIH07XG59XG5cbi8qKlxuICogRGlzcGF0Y2ggYSByZXF1ZXN0XG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZyBUaGUgY29uZmlnIHNwZWNpZmljIGZvciB0aGlzIHJlcXVlc3QgKG1lcmdlZCB3aXRoIHRoaXMuZGVmYXVsdHMpXG4gKi9cbkF4aW9zLnByb3RvdHlwZS5yZXF1ZXN0ID0gZnVuY3Rpb24gcmVxdWVzdChjb25maWcpIHtcbiAgLyplc2xpbnQgbm8tcGFyYW0tcmVhc3NpZ246MCovXG4gIC8vIEFsbG93IGZvciBheGlvcygnZXhhbXBsZS91cmwnWywgY29uZmlnXSkgYSBsYSBmZXRjaCBBUElcbiAgaWYgKHR5cGVvZiBjb25maWcgPT09ICdzdHJpbmcnKSB7XG4gICAgY29uZmlnID0gdXRpbHMubWVyZ2Uoe1xuICAgICAgdXJsOiBhcmd1bWVudHNbMF1cbiAgICB9LCBhcmd1bWVudHNbMV0pO1xuICB9XG5cbiAgY29uZmlnID0gdXRpbHMubWVyZ2UoZGVmYXVsdHMsIHttZXRob2Q6ICdnZXQnfSwgdGhpcy5kZWZhdWx0cywgY29uZmlnKTtcbiAgY29uZmlnLm1ldGhvZCA9IGNvbmZpZy5tZXRob2QudG9Mb3dlckNhc2UoKTtcblxuICAvLyBIb29rIHVwIGludGVyY2VwdG9ycyBtaWRkbGV3YXJlXG4gIHZhciBjaGFpbiA9IFtkaXNwYXRjaFJlcXVlc3QsIHVuZGVmaW5lZF07XG4gIHZhciBwcm9taXNlID0gUHJvbWlzZS5yZXNvbHZlKGNvbmZpZyk7XG5cbiAgdGhpcy5pbnRlcmNlcHRvcnMucmVxdWVzdC5mb3JFYWNoKGZ1bmN0aW9uIHVuc2hpZnRSZXF1ZXN0SW50ZXJjZXB0b3JzKGludGVyY2VwdG9yKSB7XG4gICAgY2hhaW4udW5zaGlmdChpbnRlcmNlcHRvci5mdWxmaWxsZWQsIGludGVyY2VwdG9yLnJlamVjdGVkKTtcbiAgfSk7XG5cbiAgdGhpcy5pbnRlcmNlcHRvcnMucmVzcG9uc2UuZm9yRWFjaChmdW5jdGlvbiBwdXNoUmVzcG9uc2VJbnRlcmNlcHRvcnMoaW50ZXJjZXB0b3IpIHtcbiAgICBjaGFpbi5wdXNoKGludGVyY2VwdG9yLmZ1bGZpbGxlZCwgaW50ZXJjZXB0b3IucmVqZWN0ZWQpO1xuICB9KTtcblxuICB3aGlsZSAoY2hhaW4ubGVuZ3RoKSB7XG4gICAgcHJvbWlzZSA9IHByb21pc2UudGhlbihjaGFpbi5zaGlmdCgpLCBjaGFpbi5zaGlmdCgpKTtcbiAgfVxuXG4gIHJldHVybiBwcm9taXNlO1xufTtcblxuLy8gUHJvdmlkZSBhbGlhc2VzIGZvciBzdXBwb3J0ZWQgcmVxdWVzdCBtZXRob2RzXG51dGlscy5mb3JFYWNoKFsnZGVsZXRlJywgJ2dldCcsICdoZWFkJywgJ29wdGlvbnMnXSwgZnVuY3Rpb24gZm9yRWFjaE1ldGhvZE5vRGF0YShtZXRob2QpIHtcbiAgLyplc2xpbnQgZnVuYy1uYW1lczowKi9cbiAgQXhpb3MucHJvdG90eXBlW21ldGhvZF0gPSBmdW5jdGlvbih1cmwsIGNvbmZpZykge1xuICAgIHJldHVybiB0aGlzLnJlcXVlc3QodXRpbHMubWVyZ2UoY29uZmlnIHx8IHt9LCB7XG4gICAgICBtZXRob2Q6IG1ldGhvZCxcbiAgICAgIHVybDogdXJsXG4gICAgfSkpO1xuICB9O1xufSk7XG5cbnV0aWxzLmZvckVhY2goWydwb3N0JywgJ3B1dCcsICdwYXRjaCddLCBmdW5jdGlvbiBmb3JFYWNoTWV0aG9kV2l0aERhdGEobWV0aG9kKSB7XG4gIC8qZXNsaW50IGZ1bmMtbmFtZXM6MCovXG4gIEF4aW9zLnByb3RvdHlwZVttZXRob2RdID0gZnVuY3Rpb24odXJsLCBkYXRhLCBjb25maWcpIHtcbiAgICByZXR1cm4gdGhpcy5yZXF1ZXN0KHV0aWxzLm1lcmdlKGNvbmZpZyB8fCB7fSwge1xuICAgICAgbWV0aG9kOiBtZXRob2QsXG4gICAgICB1cmw6IHVybCxcbiAgICAgIGRhdGE6IGRhdGFcbiAgICB9KSk7XG4gIH07XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBBeGlvcztcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi8uLi91dGlscycpO1xuXG5mdW5jdGlvbiBJbnRlcmNlcHRvck1hbmFnZXIoKSB7XG4gIHRoaXMuaGFuZGxlcnMgPSBbXTtcbn1cblxuLyoqXG4gKiBBZGQgYSBuZXcgaW50ZXJjZXB0b3IgdG8gdGhlIHN0YWNrXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVsZmlsbGVkIFRoZSBmdW5jdGlvbiB0byBoYW5kbGUgYHRoZW5gIGZvciBhIGBQcm9taXNlYFxuICogQHBhcmFtIHtGdW5jdGlvbn0gcmVqZWN0ZWQgVGhlIGZ1bmN0aW9uIHRvIGhhbmRsZSBgcmVqZWN0YCBmb3IgYSBgUHJvbWlzZWBcbiAqXG4gKiBAcmV0dXJuIHtOdW1iZXJ9IEFuIElEIHVzZWQgdG8gcmVtb3ZlIGludGVyY2VwdG9yIGxhdGVyXG4gKi9cbkludGVyY2VwdG9yTWFuYWdlci5wcm90b3R5cGUudXNlID0gZnVuY3Rpb24gdXNlKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpIHtcbiAgdGhpcy5oYW5kbGVycy5wdXNoKHtcbiAgICBmdWxmaWxsZWQ6IGZ1bGZpbGxlZCxcbiAgICByZWplY3RlZDogcmVqZWN0ZWRcbiAgfSk7XG4gIHJldHVybiB0aGlzLmhhbmRsZXJzLmxlbmd0aCAtIDE7XG59O1xuXG4vKipcbiAqIFJlbW92ZSBhbiBpbnRlcmNlcHRvciBmcm9tIHRoZSBzdGFja1xuICpcbiAqIEBwYXJhbSB7TnVtYmVyfSBpZCBUaGUgSUQgdGhhdCB3YXMgcmV0dXJuZWQgYnkgYHVzZWBcbiAqL1xuSW50ZXJjZXB0b3JNYW5hZ2VyLnByb3RvdHlwZS5lamVjdCA9IGZ1bmN0aW9uIGVqZWN0KGlkKSB7XG4gIGlmICh0aGlzLmhhbmRsZXJzW2lkXSkge1xuICAgIHRoaXMuaGFuZGxlcnNbaWRdID0gbnVsbDtcbiAgfVxufTtcblxuLyoqXG4gKiBJdGVyYXRlIG92ZXIgYWxsIHRoZSByZWdpc3RlcmVkIGludGVyY2VwdG9yc1xuICpcbiAqIFRoaXMgbWV0aG9kIGlzIHBhcnRpY3VsYXJseSB1c2VmdWwgZm9yIHNraXBwaW5nIG92ZXIgYW55XG4gKiBpbnRlcmNlcHRvcnMgdGhhdCBtYXkgaGF2ZSBiZWNvbWUgYG51bGxgIGNhbGxpbmcgYGVqZWN0YC5cbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmbiBUaGUgZnVuY3Rpb24gdG8gY2FsbCBmb3IgZWFjaCBpbnRlcmNlcHRvclxuICovXG5JbnRlcmNlcHRvck1hbmFnZXIucHJvdG90eXBlLmZvckVhY2ggPSBmdW5jdGlvbiBmb3JFYWNoKGZuKSB7XG4gIHV0aWxzLmZvckVhY2godGhpcy5oYW5kbGVycywgZnVuY3Rpb24gZm9yRWFjaEhhbmRsZXIoaCkge1xuICAgIGlmIChoICE9PSBudWxsKSB7XG4gICAgICBmbihoKTtcbiAgICB9XG4gIH0pO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBJbnRlcmNlcHRvck1hbmFnZXI7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBlbmhhbmNlRXJyb3IgPSByZXF1aXJlKCcuL2VuaGFuY2VFcnJvcicpO1xuXG4vKipcbiAqIENyZWF0ZSBhbiBFcnJvciB3aXRoIHRoZSBzcGVjaWZpZWQgbWVzc2FnZSwgY29uZmlnLCBlcnJvciBjb2RlLCByZXF1ZXN0IGFuZCByZXNwb25zZS5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gbWVzc2FnZSBUaGUgZXJyb3IgbWVzc2FnZS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWcgVGhlIGNvbmZpZy5cbiAqIEBwYXJhbSB7c3RyaW5nfSBbY29kZV0gVGhlIGVycm9yIGNvZGUgKGZvciBleGFtcGxlLCAnRUNPTk5BQk9SVEVEJykuXG4gKiBAcGFyYW0ge09iamVjdH0gW3JlcXVlc3RdIFRoZSByZXF1ZXN0LlxuICogQHBhcmFtIHtPYmplY3R9IFtyZXNwb25zZV0gVGhlIHJlc3BvbnNlLlxuICogQHJldHVybnMge0Vycm9yfSBUaGUgY3JlYXRlZCBlcnJvci5cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjcmVhdGVFcnJvcihtZXNzYWdlLCBjb25maWcsIGNvZGUsIHJlcXVlc3QsIHJlc3BvbnNlKSB7XG4gIHZhciBlcnJvciA9IG5ldyBFcnJvcihtZXNzYWdlKTtcbiAgcmV0dXJuIGVuaGFuY2VFcnJvcihlcnJvciwgY29uZmlnLCBjb2RlLCByZXF1ZXN0LCByZXNwb25zZSk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLy4uL3V0aWxzJyk7XG52YXIgdHJhbnNmb3JtRGF0YSA9IHJlcXVpcmUoJy4vdHJhbnNmb3JtRGF0YScpO1xudmFyIGlzQ2FuY2VsID0gcmVxdWlyZSgnLi4vY2FuY2VsL2lzQ2FuY2VsJyk7XG52YXIgZGVmYXVsdHMgPSByZXF1aXJlKCcuLi9kZWZhdWx0cycpO1xudmFyIGlzQWJzb2x1dGVVUkwgPSByZXF1aXJlKCcuLy4uL2hlbHBlcnMvaXNBYnNvbHV0ZVVSTCcpO1xudmFyIGNvbWJpbmVVUkxzID0gcmVxdWlyZSgnLi8uLi9oZWxwZXJzL2NvbWJpbmVVUkxzJyk7XG5cbi8qKlxuICogVGhyb3dzIGEgYENhbmNlbGAgaWYgY2FuY2VsbGF0aW9uIGhhcyBiZWVuIHJlcXVlc3RlZC5cbiAqL1xuZnVuY3Rpb24gdGhyb3dJZkNhbmNlbGxhdGlvblJlcXVlc3RlZChjb25maWcpIHtcbiAgaWYgKGNvbmZpZy5jYW5jZWxUb2tlbikge1xuICAgIGNvbmZpZy5jYW5jZWxUb2tlbi50aHJvd0lmUmVxdWVzdGVkKCk7XG4gIH1cbn1cblxuLyoqXG4gKiBEaXNwYXRjaCBhIHJlcXVlc3QgdG8gdGhlIHNlcnZlciB1c2luZyB0aGUgY29uZmlndXJlZCBhZGFwdGVyLlxuICpcbiAqIEBwYXJhbSB7b2JqZWN0fSBjb25maWcgVGhlIGNvbmZpZyB0aGF0IGlzIHRvIGJlIHVzZWQgZm9yIHRoZSByZXF1ZXN0XG4gKiBAcmV0dXJucyB7UHJvbWlzZX0gVGhlIFByb21pc2UgdG8gYmUgZnVsZmlsbGVkXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZGlzcGF0Y2hSZXF1ZXN0KGNvbmZpZykge1xuICB0aHJvd0lmQ2FuY2VsbGF0aW9uUmVxdWVzdGVkKGNvbmZpZyk7XG5cbiAgLy8gU3VwcG9ydCBiYXNlVVJMIGNvbmZpZ1xuICBpZiAoY29uZmlnLmJhc2VVUkwgJiYgIWlzQWJzb2x1dGVVUkwoY29uZmlnLnVybCkpIHtcbiAgICBjb25maWcudXJsID0gY29tYmluZVVSTHMoY29uZmlnLmJhc2VVUkwsIGNvbmZpZy51cmwpO1xuICB9XG5cbiAgLy8gRW5zdXJlIGhlYWRlcnMgZXhpc3RcbiAgY29uZmlnLmhlYWRlcnMgPSBjb25maWcuaGVhZGVycyB8fCB7fTtcblxuICAvLyBUcmFuc2Zvcm0gcmVxdWVzdCBkYXRhXG4gIGNvbmZpZy5kYXRhID0gdHJhbnNmb3JtRGF0YShcbiAgICBjb25maWcuZGF0YSxcbiAgICBjb25maWcuaGVhZGVycyxcbiAgICBjb25maWcudHJhbnNmb3JtUmVxdWVzdFxuICApO1xuXG4gIC8vIEZsYXR0ZW4gaGVhZGVyc1xuICBjb25maWcuaGVhZGVycyA9IHV0aWxzLm1lcmdlKFxuICAgIGNvbmZpZy5oZWFkZXJzLmNvbW1vbiB8fCB7fSxcbiAgICBjb25maWcuaGVhZGVyc1tjb25maWcubWV0aG9kXSB8fCB7fSxcbiAgICBjb25maWcuaGVhZGVycyB8fCB7fVxuICApO1xuXG4gIHV0aWxzLmZvckVhY2goXG4gICAgWydkZWxldGUnLCAnZ2V0JywgJ2hlYWQnLCAncG9zdCcsICdwdXQnLCAncGF0Y2gnLCAnY29tbW9uJ10sXG4gICAgZnVuY3Rpb24gY2xlYW5IZWFkZXJDb25maWcobWV0aG9kKSB7XG4gICAgICBkZWxldGUgY29uZmlnLmhlYWRlcnNbbWV0aG9kXTtcbiAgICB9XG4gICk7XG5cbiAgdmFyIGFkYXB0ZXIgPSBjb25maWcuYWRhcHRlciB8fCBkZWZhdWx0cy5hZGFwdGVyO1xuXG4gIHJldHVybiBhZGFwdGVyKGNvbmZpZykudGhlbihmdW5jdGlvbiBvbkFkYXB0ZXJSZXNvbHV0aW9uKHJlc3BvbnNlKSB7XG4gICAgdGhyb3dJZkNhbmNlbGxhdGlvblJlcXVlc3RlZChjb25maWcpO1xuXG4gICAgLy8gVHJhbnNmb3JtIHJlc3BvbnNlIGRhdGFcbiAgICByZXNwb25zZS5kYXRhID0gdHJhbnNmb3JtRGF0YShcbiAgICAgIHJlc3BvbnNlLmRhdGEsXG4gICAgICByZXNwb25zZS5oZWFkZXJzLFxuICAgICAgY29uZmlnLnRyYW5zZm9ybVJlc3BvbnNlXG4gICAgKTtcblxuICAgIHJldHVybiByZXNwb25zZTtcbiAgfSwgZnVuY3Rpb24gb25BZGFwdGVyUmVqZWN0aW9uKHJlYXNvbikge1xuICAgIGlmICghaXNDYW5jZWwocmVhc29uKSkge1xuICAgICAgdGhyb3dJZkNhbmNlbGxhdGlvblJlcXVlc3RlZChjb25maWcpO1xuXG4gICAgICAvLyBUcmFuc2Zvcm0gcmVzcG9uc2UgZGF0YVxuICAgICAgaWYgKHJlYXNvbiAmJiByZWFzb24ucmVzcG9uc2UpIHtcbiAgICAgICAgcmVhc29uLnJlc3BvbnNlLmRhdGEgPSB0cmFuc2Zvcm1EYXRhKFxuICAgICAgICAgIHJlYXNvbi5yZXNwb25zZS5kYXRhLFxuICAgICAgICAgIHJlYXNvbi5yZXNwb25zZS5oZWFkZXJzLFxuICAgICAgICAgIGNvbmZpZy50cmFuc2Zvcm1SZXNwb25zZVxuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBQcm9taXNlLnJlamVjdChyZWFzb24pO1xuICB9KTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbi8qKlxuICogVXBkYXRlIGFuIEVycm9yIHdpdGggdGhlIHNwZWNpZmllZCBjb25maWcsIGVycm9yIGNvZGUsIGFuZCByZXNwb25zZS5cbiAqXG4gKiBAcGFyYW0ge0Vycm9yfSBlcnJvciBUaGUgZXJyb3IgdG8gdXBkYXRlLlxuICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZyBUaGUgY29uZmlnLlxuICogQHBhcmFtIHtzdHJpbmd9IFtjb2RlXSBUaGUgZXJyb3IgY29kZSAoZm9yIGV4YW1wbGUsICdFQ09OTkFCT1JURUQnKS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbcmVxdWVzdF0gVGhlIHJlcXVlc3QuXG4gKiBAcGFyYW0ge09iamVjdH0gW3Jlc3BvbnNlXSBUaGUgcmVzcG9uc2UuXG4gKiBAcmV0dXJucyB7RXJyb3J9IFRoZSBlcnJvci5cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBlbmhhbmNlRXJyb3IoZXJyb3IsIGNvbmZpZywgY29kZSwgcmVxdWVzdCwgcmVzcG9uc2UpIHtcbiAgZXJyb3IuY29uZmlnID0gY29uZmlnO1xuICBpZiAoY29kZSkge1xuICAgIGVycm9yLmNvZGUgPSBjb2RlO1xuICB9XG4gIGVycm9yLnJlcXVlc3QgPSByZXF1ZXN0O1xuICBlcnJvci5yZXNwb25zZSA9IHJlc3BvbnNlO1xuICByZXR1cm4gZXJyb3I7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgY3JlYXRlRXJyb3IgPSByZXF1aXJlKCcuL2NyZWF0ZUVycm9yJyk7XG5cbi8qKlxuICogUmVzb2x2ZSBvciByZWplY3QgYSBQcm9taXNlIGJhc2VkIG9uIHJlc3BvbnNlIHN0YXR1cy5cbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSByZXNvbHZlIEEgZnVuY3Rpb24gdGhhdCByZXNvbHZlcyB0aGUgcHJvbWlzZS5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IHJlamVjdCBBIGZ1bmN0aW9uIHRoYXQgcmVqZWN0cyB0aGUgcHJvbWlzZS5cbiAqIEBwYXJhbSB7b2JqZWN0fSByZXNwb25zZSBUaGUgcmVzcG9uc2UuXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgcmVzcG9uc2UpIHtcbiAgdmFyIHZhbGlkYXRlU3RhdHVzID0gcmVzcG9uc2UuY29uZmlnLnZhbGlkYXRlU3RhdHVzO1xuICAvLyBOb3RlOiBzdGF0dXMgaXMgbm90IGV4cG9zZWQgYnkgWERvbWFpblJlcXVlc3RcbiAgaWYgKCFyZXNwb25zZS5zdGF0dXMgfHwgIXZhbGlkYXRlU3RhdHVzIHx8IHZhbGlkYXRlU3RhdHVzKHJlc3BvbnNlLnN0YXR1cykpIHtcbiAgICByZXNvbHZlKHJlc3BvbnNlKTtcbiAgfSBlbHNlIHtcbiAgICByZWplY3QoY3JlYXRlRXJyb3IoXG4gICAgICAnUmVxdWVzdCBmYWlsZWQgd2l0aCBzdGF0dXMgY29kZSAnICsgcmVzcG9uc2Uuc3RhdHVzLFxuICAgICAgcmVzcG9uc2UuY29uZmlnLFxuICAgICAgbnVsbCxcbiAgICAgIHJlc3BvbnNlLnJlcXVlc3QsXG4gICAgICByZXNwb25zZVxuICAgICkpO1xuICB9XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLy4uL3V0aWxzJyk7XG5cbi8qKlxuICogVHJhbnNmb3JtIHRoZSBkYXRhIGZvciBhIHJlcXVlc3Qgb3IgYSByZXNwb25zZVxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fFN0cmluZ30gZGF0YSBUaGUgZGF0YSB0byBiZSB0cmFuc2Zvcm1lZFxuICogQHBhcmFtIHtBcnJheX0gaGVhZGVycyBUaGUgaGVhZGVycyBmb3IgdGhlIHJlcXVlc3Qgb3IgcmVzcG9uc2VcbiAqIEBwYXJhbSB7QXJyYXl8RnVuY3Rpb259IGZucyBBIHNpbmdsZSBmdW5jdGlvbiBvciBBcnJheSBvZiBmdW5jdGlvbnNcbiAqIEByZXR1cm5zIHsqfSBUaGUgcmVzdWx0aW5nIHRyYW5zZm9ybWVkIGRhdGFcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiB0cmFuc2Zvcm1EYXRhKGRhdGEsIGhlYWRlcnMsIGZucykge1xuICAvKmVzbGludCBuby1wYXJhbS1yZWFzc2lnbjowKi9cbiAgdXRpbHMuZm9yRWFjaChmbnMsIGZ1bmN0aW9uIHRyYW5zZm9ybShmbikge1xuICAgIGRhdGEgPSBmbihkYXRhLCBoZWFkZXJzKTtcbiAgfSk7XG5cbiAgcmV0dXJuIGRhdGE7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuL3V0aWxzJyk7XG52YXIgbm9ybWFsaXplSGVhZGVyTmFtZSA9IHJlcXVpcmUoJy4vaGVscGVycy9ub3JtYWxpemVIZWFkZXJOYW1lJyk7XG5cbnZhciBERUZBVUxUX0NPTlRFTlRfVFlQRSA9IHtcbiAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnXG59O1xuXG5mdW5jdGlvbiBzZXRDb250ZW50VHlwZUlmVW5zZXQoaGVhZGVycywgdmFsdWUpIHtcbiAgaWYgKCF1dGlscy5pc1VuZGVmaW5lZChoZWFkZXJzKSAmJiB1dGlscy5pc1VuZGVmaW5lZChoZWFkZXJzWydDb250ZW50LVR5cGUnXSkpIHtcbiAgICBoZWFkZXJzWydDb250ZW50LVR5cGUnXSA9IHZhbHVlO1xuICB9XG59XG5cbmZ1bmN0aW9uIGdldERlZmF1bHRBZGFwdGVyKCkge1xuICB2YXIgYWRhcHRlcjtcbiAgaWYgKHR5cGVvZiBYTUxIdHRwUmVxdWVzdCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAvLyBGb3IgYnJvd3NlcnMgdXNlIFhIUiBhZGFwdGVyXG4gICAgYWRhcHRlciA9IHJlcXVpcmUoJy4vYWRhcHRlcnMveGhyJyk7XG4gIH0gZWxzZSBpZiAodHlwZW9mIHByb2Nlc3MgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgLy8gRm9yIG5vZGUgdXNlIEhUVFAgYWRhcHRlclxuICAgIGFkYXB0ZXIgPSByZXF1aXJlKCcuL2FkYXB0ZXJzL2h0dHAnKTtcbiAgfVxuICByZXR1cm4gYWRhcHRlcjtcbn1cblxudmFyIGRlZmF1bHRzID0ge1xuICBhZGFwdGVyOiBnZXREZWZhdWx0QWRhcHRlcigpLFxuXG4gIHRyYW5zZm9ybVJlcXVlc3Q6IFtmdW5jdGlvbiB0cmFuc2Zvcm1SZXF1ZXN0KGRhdGEsIGhlYWRlcnMpIHtcbiAgICBub3JtYWxpemVIZWFkZXJOYW1lKGhlYWRlcnMsICdDb250ZW50LVR5cGUnKTtcbiAgICBpZiAodXRpbHMuaXNGb3JtRGF0YShkYXRhKSB8fFxuICAgICAgdXRpbHMuaXNBcnJheUJ1ZmZlcihkYXRhKSB8fFxuICAgICAgdXRpbHMuaXNCdWZmZXIoZGF0YSkgfHxcbiAgICAgIHV0aWxzLmlzU3RyZWFtKGRhdGEpIHx8XG4gICAgICB1dGlscy5pc0ZpbGUoZGF0YSkgfHxcbiAgICAgIHV0aWxzLmlzQmxvYihkYXRhKVxuICAgICkge1xuICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfVxuICAgIGlmICh1dGlscy5pc0FycmF5QnVmZmVyVmlldyhkYXRhKSkge1xuICAgICAgcmV0dXJuIGRhdGEuYnVmZmVyO1xuICAgIH1cbiAgICBpZiAodXRpbHMuaXNVUkxTZWFyY2hQYXJhbXMoZGF0YSkpIHtcbiAgICAgIHNldENvbnRlbnRUeXBlSWZVbnNldChoZWFkZXJzLCAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkO2NoYXJzZXQ9dXRmLTgnKTtcbiAgICAgIHJldHVybiBkYXRhLnRvU3RyaW5nKCk7XG4gICAgfVxuICAgIGlmICh1dGlscy5pc09iamVjdChkYXRhKSkge1xuICAgICAgc2V0Q29udGVudFR5cGVJZlVuc2V0KGhlYWRlcnMsICdhcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTgnKTtcbiAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShkYXRhKTtcbiAgICB9XG4gICAgcmV0dXJuIGRhdGE7XG4gIH1dLFxuXG4gIHRyYW5zZm9ybVJlc3BvbnNlOiBbZnVuY3Rpb24gdHJhbnNmb3JtUmVzcG9uc2UoZGF0YSkge1xuICAgIC8qZXNsaW50IG5vLXBhcmFtLXJlYXNzaWduOjAqL1xuICAgIGlmICh0eXBlb2YgZGF0YSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGRhdGEgPSBKU09OLnBhcnNlKGRhdGEpO1xuICAgICAgfSBjYXRjaCAoZSkgeyAvKiBJZ25vcmUgKi8gfVxuICAgIH1cbiAgICByZXR1cm4gZGF0YTtcbiAgfV0sXG5cbiAgLyoqXG4gICAqIEEgdGltZW91dCBpbiBtaWxsaXNlY29uZHMgdG8gYWJvcnQgYSByZXF1ZXN0LiBJZiBzZXQgdG8gMCAoZGVmYXVsdCkgYVxuICAgKiB0aW1lb3V0IGlzIG5vdCBjcmVhdGVkLlxuICAgKi9cbiAgdGltZW91dDogMCxcblxuICB4c3JmQ29va2llTmFtZTogJ1hTUkYtVE9LRU4nLFxuICB4c3JmSGVhZGVyTmFtZTogJ1gtWFNSRi1UT0tFTicsXG5cbiAgbWF4Q29udGVudExlbmd0aDogLTEsXG5cbiAgdmFsaWRhdGVTdGF0dXM6IGZ1bmN0aW9uIHZhbGlkYXRlU3RhdHVzKHN0YXR1cykge1xuICAgIHJldHVybiBzdGF0dXMgPj0gMjAwICYmIHN0YXR1cyA8IDMwMDtcbiAgfVxufTtcblxuZGVmYXVsdHMuaGVhZGVycyA9IHtcbiAgY29tbW9uOiB7XG4gICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uLCB0ZXh0L3BsYWluLCAqLyonXG4gIH1cbn07XG5cbnV0aWxzLmZvckVhY2goWydkZWxldGUnLCAnZ2V0JywgJ2hlYWQnXSwgZnVuY3Rpb24gZm9yRWFjaE1ldGhvZE5vRGF0YShtZXRob2QpIHtcbiAgZGVmYXVsdHMuaGVhZGVyc1ttZXRob2RdID0ge307XG59KTtcblxudXRpbHMuZm9yRWFjaChbJ3Bvc3QnLCAncHV0JywgJ3BhdGNoJ10sIGZ1bmN0aW9uIGZvckVhY2hNZXRob2RXaXRoRGF0YShtZXRob2QpIHtcbiAgZGVmYXVsdHMuaGVhZGVyc1ttZXRob2RdID0gdXRpbHMubWVyZ2UoREVGQVVMVF9DT05URU5UX1RZUEUpO1xufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gZGVmYXVsdHM7XG4iLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gYmluZChmbiwgdGhpc0FyZykge1xuICByZXR1cm4gZnVuY3Rpb24gd3JhcCgpIHtcbiAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoKTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3MubGVuZ3RoOyBpKyspIHtcbiAgICAgIGFyZ3NbaV0gPSBhcmd1bWVudHNbaV07XG4gICAgfVxuICAgIHJldHVybiBmbi5hcHBseSh0aGlzQXJnLCBhcmdzKTtcbiAgfTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbi8vIGJ0b2EgcG9seWZpbGwgZm9yIElFPDEwIGNvdXJ0ZXN5IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXZpZGNoYW1iZXJzL0Jhc2U2NC5qc1xuXG52YXIgY2hhcnMgPSAnQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVphYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ejAxMjM0NTY3ODkrLz0nO1xuXG5mdW5jdGlvbiBFKCkge1xuICB0aGlzLm1lc3NhZ2UgPSAnU3RyaW5nIGNvbnRhaW5zIGFuIGludmFsaWQgY2hhcmFjdGVyJztcbn1cbkUucHJvdG90eXBlID0gbmV3IEVycm9yO1xuRS5wcm90b3R5cGUuY29kZSA9IDU7XG5FLnByb3RvdHlwZS5uYW1lID0gJ0ludmFsaWRDaGFyYWN0ZXJFcnJvcic7XG5cbmZ1bmN0aW9uIGJ0b2EoaW5wdXQpIHtcbiAgdmFyIHN0ciA9IFN0cmluZyhpbnB1dCk7XG4gIHZhciBvdXRwdXQgPSAnJztcbiAgZm9yIChcbiAgICAvLyBpbml0aWFsaXplIHJlc3VsdCBhbmQgY291bnRlclxuICAgIHZhciBibG9jaywgY2hhckNvZGUsIGlkeCA9IDAsIG1hcCA9IGNoYXJzO1xuICAgIC8vIGlmIHRoZSBuZXh0IHN0ciBpbmRleCBkb2VzIG5vdCBleGlzdDpcbiAgICAvLyAgIGNoYW5nZSB0aGUgbWFwcGluZyB0YWJsZSB0byBcIj1cIlxuICAgIC8vICAgY2hlY2sgaWYgZCBoYXMgbm8gZnJhY3Rpb25hbCBkaWdpdHNcbiAgICBzdHIuY2hhckF0KGlkeCB8IDApIHx8IChtYXAgPSAnPScsIGlkeCAlIDEpO1xuICAgIC8vIFwiOCAtIGlkeCAlIDEgKiA4XCIgZ2VuZXJhdGVzIHRoZSBzZXF1ZW5jZSAyLCA0LCA2LCA4XG4gICAgb3V0cHV0ICs9IG1hcC5jaGFyQXQoNjMgJiBibG9jayA+PiA4IC0gaWR4ICUgMSAqIDgpXG4gICkge1xuICAgIGNoYXJDb2RlID0gc3RyLmNoYXJDb2RlQXQoaWR4ICs9IDMgLyA0KTtcbiAgICBpZiAoY2hhckNvZGUgPiAweEZGKSB7XG4gICAgICB0aHJvdyBuZXcgRSgpO1xuICAgIH1cbiAgICBibG9jayA9IGJsb2NrIDw8IDggfCBjaGFyQ29kZTtcbiAgfVxuICByZXR1cm4gb3V0cHV0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJ0b2E7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vLi4vdXRpbHMnKTtcblxuZnVuY3Rpb24gZW5jb2RlKHZhbCkge1xuICByZXR1cm4gZW5jb2RlVVJJQ29tcG9uZW50KHZhbCkuXG4gICAgcmVwbGFjZSgvJTQwL2dpLCAnQCcpLlxuICAgIHJlcGxhY2UoLyUzQS9naSwgJzonKS5cbiAgICByZXBsYWNlKC8lMjQvZywgJyQnKS5cbiAgICByZXBsYWNlKC8lMkMvZ2ksICcsJykuXG4gICAgcmVwbGFjZSgvJTIwL2csICcrJykuXG4gICAgcmVwbGFjZSgvJTVCL2dpLCAnWycpLlxuICAgIHJlcGxhY2UoLyU1RC9naSwgJ10nKTtcbn1cblxuLyoqXG4gKiBCdWlsZCBhIFVSTCBieSBhcHBlbmRpbmcgcGFyYW1zIHRvIHRoZSBlbmRcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gdXJsIFRoZSBiYXNlIG9mIHRoZSB1cmwgKGUuZy4sIGh0dHA6Ly93d3cuZ29vZ2xlLmNvbSlcbiAqIEBwYXJhbSB7b2JqZWN0fSBbcGFyYW1zXSBUaGUgcGFyYW1zIHRvIGJlIGFwcGVuZGVkXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBUaGUgZm9ybWF0dGVkIHVybFxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGJ1aWxkVVJMKHVybCwgcGFyYW1zLCBwYXJhbXNTZXJpYWxpemVyKSB7XG4gIC8qZXNsaW50IG5vLXBhcmFtLXJlYXNzaWduOjAqL1xuICBpZiAoIXBhcmFtcykge1xuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICB2YXIgc2VyaWFsaXplZFBhcmFtcztcbiAgaWYgKHBhcmFtc1NlcmlhbGl6ZXIpIHtcbiAgICBzZXJpYWxpemVkUGFyYW1zID0gcGFyYW1zU2VyaWFsaXplcihwYXJhbXMpO1xuICB9IGVsc2UgaWYgKHV0aWxzLmlzVVJMU2VhcmNoUGFyYW1zKHBhcmFtcykpIHtcbiAgICBzZXJpYWxpemVkUGFyYW1zID0gcGFyYW1zLnRvU3RyaW5nKCk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHBhcnRzID0gW107XG5cbiAgICB1dGlscy5mb3JFYWNoKHBhcmFtcywgZnVuY3Rpb24gc2VyaWFsaXplKHZhbCwga2V5KSB7XG4gICAgICBpZiAodmFsID09PSBudWxsIHx8IHR5cGVvZiB2YWwgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKHV0aWxzLmlzQXJyYXkodmFsKSkge1xuICAgICAgICBrZXkgPSBrZXkgKyAnW10nO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFsID0gW3ZhbF07XG4gICAgICB9XG5cbiAgICAgIHV0aWxzLmZvckVhY2godmFsLCBmdW5jdGlvbiBwYXJzZVZhbHVlKHYpIHtcbiAgICAgICAgaWYgKHV0aWxzLmlzRGF0ZSh2KSkge1xuICAgICAgICAgIHYgPSB2LnRvSVNPU3RyaW5nKCk7XG4gICAgICAgIH0gZWxzZSBpZiAodXRpbHMuaXNPYmplY3QodikpIHtcbiAgICAgICAgICB2ID0gSlNPTi5zdHJpbmdpZnkodik7XG4gICAgICAgIH1cbiAgICAgICAgcGFydHMucHVzaChlbmNvZGUoa2V5KSArICc9JyArIGVuY29kZSh2KSk7XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIHNlcmlhbGl6ZWRQYXJhbXMgPSBwYXJ0cy5qb2luKCcmJyk7XG4gIH1cblxuICBpZiAoc2VyaWFsaXplZFBhcmFtcykge1xuICAgIHVybCArPSAodXJsLmluZGV4T2YoJz8nKSA9PT0gLTEgPyAnPycgOiAnJicpICsgc2VyaWFsaXplZFBhcmFtcztcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBuZXcgVVJMIGJ5IGNvbWJpbmluZyB0aGUgc3BlY2lmaWVkIFVSTHNcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gYmFzZVVSTCBUaGUgYmFzZSBVUkxcbiAqIEBwYXJhbSB7c3RyaW5nfSByZWxhdGl2ZVVSTCBUaGUgcmVsYXRpdmUgVVJMXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBUaGUgY29tYmluZWQgVVJMXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY29tYmluZVVSTHMoYmFzZVVSTCwgcmVsYXRpdmVVUkwpIHtcbiAgcmV0dXJuIHJlbGF0aXZlVVJMXG4gICAgPyBiYXNlVVJMLnJlcGxhY2UoL1xcLyskLywgJycpICsgJy8nICsgcmVsYXRpdmVVUkwucmVwbGFjZSgvXlxcLysvLCAnJylcbiAgICA6IGJhc2VVUkw7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLy4uL3V0aWxzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gKFxuICB1dGlscy5pc1N0YW5kYXJkQnJvd3NlckVudigpID9cblxuICAvLyBTdGFuZGFyZCBicm93c2VyIGVudnMgc3VwcG9ydCBkb2N1bWVudC5jb29raWVcbiAgKGZ1bmN0aW9uIHN0YW5kYXJkQnJvd3NlckVudigpIHtcbiAgICByZXR1cm4ge1xuICAgICAgd3JpdGU6IGZ1bmN0aW9uIHdyaXRlKG5hbWUsIHZhbHVlLCBleHBpcmVzLCBwYXRoLCBkb21haW4sIHNlY3VyZSkge1xuICAgICAgICB2YXIgY29va2llID0gW107XG4gICAgICAgIGNvb2tpZS5wdXNoKG5hbWUgKyAnPScgKyBlbmNvZGVVUklDb21wb25lbnQodmFsdWUpKTtcblxuICAgICAgICBpZiAodXRpbHMuaXNOdW1iZXIoZXhwaXJlcykpIHtcbiAgICAgICAgICBjb29raWUucHVzaCgnZXhwaXJlcz0nICsgbmV3IERhdGUoZXhwaXJlcykudG9HTVRTdHJpbmcoKSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodXRpbHMuaXNTdHJpbmcocGF0aCkpIHtcbiAgICAgICAgICBjb29raWUucHVzaCgncGF0aD0nICsgcGF0aCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodXRpbHMuaXNTdHJpbmcoZG9tYWluKSkge1xuICAgICAgICAgIGNvb2tpZS5wdXNoKCdkb21haW49JyArIGRvbWFpbik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoc2VjdXJlID09PSB0cnVlKSB7XG4gICAgICAgICAgY29va2llLnB1c2goJ3NlY3VyZScpO1xuICAgICAgICB9XG5cbiAgICAgICAgZG9jdW1lbnQuY29va2llID0gY29va2llLmpvaW4oJzsgJyk7XG4gICAgICB9LFxuXG4gICAgICByZWFkOiBmdW5jdGlvbiByZWFkKG5hbWUpIHtcbiAgICAgICAgdmFyIG1hdGNoID0gZG9jdW1lbnQuY29va2llLm1hdGNoKG5ldyBSZWdFeHAoJyhefDtcXFxccyopKCcgKyBuYW1lICsgJyk9KFteO10qKScpKTtcbiAgICAgICAgcmV0dXJuIChtYXRjaCA/IGRlY29kZVVSSUNvbXBvbmVudChtYXRjaFszXSkgOiBudWxsKTtcbiAgICAgIH0sXG5cbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKG5hbWUpIHtcbiAgICAgICAgdGhpcy53cml0ZShuYW1lLCAnJywgRGF0ZS5ub3coKSAtIDg2NDAwMDAwKTtcbiAgICAgIH1cbiAgICB9O1xuICB9KSgpIDpcblxuICAvLyBOb24gc3RhbmRhcmQgYnJvd3NlciBlbnYgKHdlYiB3b3JrZXJzLCByZWFjdC1uYXRpdmUpIGxhY2sgbmVlZGVkIHN1cHBvcnQuXG4gIChmdW5jdGlvbiBub25TdGFuZGFyZEJyb3dzZXJFbnYoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHdyaXRlOiBmdW5jdGlvbiB3cml0ZSgpIHt9LFxuICAgICAgcmVhZDogZnVuY3Rpb24gcmVhZCgpIHsgcmV0dXJuIG51bGw7IH0sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfSkoKVxuKTtcbiIsIid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIHNwZWNpZmllZCBVUkwgaXMgYWJzb2x1dGVcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gdXJsIFRoZSBVUkwgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdGhlIHNwZWNpZmllZCBVUkwgaXMgYWJzb2x1dGUsIG90aGVyd2lzZSBmYWxzZVxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGlzQWJzb2x1dGVVUkwodXJsKSB7XG4gIC8vIEEgVVJMIGlzIGNvbnNpZGVyZWQgYWJzb2x1dGUgaWYgaXQgYmVnaW5zIHdpdGggXCI8c2NoZW1lPjovL1wiIG9yIFwiLy9cIiAocHJvdG9jb2wtcmVsYXRpdmUgVVJMKS5cbiAgLy8gUkZDIDM5ODYgZGVmaW5lcyBzY2hlbWUgbmFtZSBhcyBhIHNlcXVlbmNlIG9mIGNoYXJhY3RlcnMgYmVnaW5uaW5nIHdpdGggYSBsZXR0ZXIgYW5kIGZvbGxvd2VkXG4gIC8vIGJ5IGFueSBjb21iaW5hdGlvbiBvZiBsZXR0ZXJzLCBkaWdpdHMsIHBsdXMsIHBlcmlvZCwgb3IgaHlwaGVuLlxuICByZXR1cm4gL14oW2Etel1bYS16XFxkXFwrXFwtXFwuXSo6KT9cXC9cXC8vaS50ZXN0KHVybCk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLy4uL3V0aWxzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gKFxuICB1dGlscy5pc1N0YW5kYXJkQnJvd3NlckVudigpID9cblxuICAvLyBTdGFuZGFyZCBicm93c2VyIGVudnMgaGF2ZSBmdWxsIHN1cHBvcnQgb2YgdGhlIEFQSXMgbmVlZGVkIHRvIHRlc3RcbiAgLy8gd2hldGhlciB0aGUgcmVxdWVzdCBVUkwgaXMgb2YgdGhlIHNhbWUgb3JpZ2luIGFzIGN1cnJlbnQgbG9jYXRpb24uXG4gIChmdW5jdGlvbiBzdGFuZGFyZEJyb3dzZXJFbnYoKSB7XG4gICAgdmFyIG1zaWUgPSAvKG1zaWV8dHJpZGVudCkvaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpO1xuICAgIHZhciB1cmxQYXJzaW5nTm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICB2YXIgb3JpZ2luVVJMO1xuXG4gICAgLyoqXG4gICAgKiBQYXJzZSBhIFVSTCB0byBkaXNjb3ZlciBpdCdzIGNvbXBvbmVudHNcbiAgICAqXG4gICAgKiBAcGFyYW0ge1N0cmluZ30gdXJsIFRoZSBVUkwgdG8gYmUgcGFyc2VkXG4gICAgKiBAcmV0dXJucyB7T2JqZWN0fVxuICAgICovXG4gICAgZnVuY3Rpb24gcmVzb2x2ZVVSTCh1cmwpIHtcbiAgICAgIHZhciBocmVmID0gdXJsO1xuXG4gICAgICBpZiAobXNpZSkge1xuICAgICAgICAvLyBJRSBuZWVkcyBhdHRyaWJ1dGUgc2V0IHR3aWNlIHRvIG5vcm1hbGl6ZSBwcm9wZXJ0aWVzXG4gICAgICAgIHVybFBhcnNpbmdOb2RlLnNldEF0dHJpYnV0ZSgnaHJlZicsIGhyZWYpO1xuICAgICAgICBocmVmID0gdXJsUGFyc2luZ05vZGUuaHJlZjtcbiAgICAgIH1cblxuICAgICAgdXJsUGFyc2luZ05vZGUuc2V0QXR0cmlidXRlKCdocmVmJywgaHJlZik7XG5cbiAgICAgIC8vIHVybFBhcnNpbmdOb2RlIHByb3ZpZGVzIHRoZSBVcmxVdGlscyBpbnRlcmZhY2UgLSBodHRwOi8vdXJsLnNwZWMud2hhdHdnLm9yZy8jdXJsdXRpbHNcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGhyZWY6IHVybFBhcnNpbmdOb2RlLmhyZWYsXG4gICAgICAgIHByb3RvY29sOiB1cmxQYXJzaW5nTm9kZS5wcm90b2NvbCA/IHVybFBhcnNpbmdOb2RlLnByb3RvY29sLnJlcGxhY2UoLzokLywgJycpIDogJycsXG4gICAgICAgIGhvc3Q6IHVybFBhcnNpbmdOb2RlLmhvc3QsXG4gICAgICAgIHNlYXJjaDogdXJsUGFyc2luZ05vZGUuc2VhcmNoID8gdXJsUGFyc2luZ05vZGUuc2VhcmNoLnJlcGxhY2UoL15cXD8vLCAnJykgOiAnJyxcbiAgICAgICAgaGFzaDogdXJsUGFyc2luZ05vZGUuaGFzaCA/IHVybFBhcnNpbmdOb2RlLmhhc2gucmVwbGFjZSgvXiMvLCAnJykgOiAnJyxcbiAgICAgICAgaG9zdG5hbWU6IHVybFBhcnNpbmdOb2RlLmhvc3RuYW1lLFxuICAgICAgICBwb3J0OiB1cmxQYXJzaW5nTm9kZS5wb3J0LFxuICAgICAgICBwYXRobmFtZTogKHVybFBhcnNpbmdOb2RlLnBhdGhuYW1lLmNoYXJBdCgwKSA9PT0gJy8nKSA/XG4gICAgICAgICAgICAgICAgICB1cmxQYXJzaW5nTm9kZS5wYXRobmFtZSA6XG4gICAgICAgICAgICAgICAgICAnLycgKyB1cmxQYXJzaW5nTm9kZS5wYXRobmFtZVxuICAgICAgfTtcbiAgICB9XG5cbiAgICBvcmlnaW5VUkwgPSByZXNvbHZlVVJMKHdpbmRvdy5sb2NhdGlvbi5ocmVmKTtcblxuICAgIC8qKlxuICAgICogRGV0ZXJtaW5lIGlmIGEgVVJMIHNoYXJlcyB0aGUgc2FtZSBvcmlnaW4gYXMgdGhlIGN1cnJlbnQgbG9jYXRpb25cbiAgICAqXG4gICAgKiBAcGFyYW0ge1N0cmluZ30gcmVxdWVzdFVSTCBUaGUgVVJMIHRvIHRlc3RcbiAgICAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIFVSTCBzaGFyZXMgdGhlIHNhbWUgb3JpZ2luLCBvdGhlcndpc2UgZmFsc2VcbiAgICAqL1xuICAgIHJldHVybiBmdW5jdGlvbiBpc1VSTFNhbWVPcmlnaW4ocmVxdWVzdFVSTCkge1xuICAgICAgdmFyIHBhcnNlZCA9ICh1dGlscy5pc1N0cmluZyhyZXF1ZXN0VVJMKSkgPyByZXNvbHZlVVJMKHJlcXVlc3RVUkwpIDogcmVxdWVzdFVSTDtcbiAgICAgIHJldHVybiAocGFyc2VkLnByb3RvY29sID09PSBvcmlnaW5VUkwucHJvdG9jb2wgJiZcbiAgICAgICAgICAgIHBhcnNlZC5ob3N0ID09PSBvcmlnaW5VUkwuaG9zdCk7XG4gICAgfTtcbiAgfSkoKSA6XG5cbiAgLy8gTm9uIHN0YW5kYXJkIGJyb3dzZXIgZW52cyAod2ViIHdvcmtlcnMsIHJlYWN0LW5hdGl2ZSkgbGFjayBuZWVkZWQgc3VwcG9ydC5cbiAgKGZ1bmN0aW9uIG5vblN0YW5kYXJkQnJvd3NlckVudigpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gaXNVUkxTYW1lT3JpZ2luKCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfTtcbiAgfSkoKVxuKTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi4vdXRpbHMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBub3JtYWxpemVIZWFkZXJOYW1lKGhlYWRlcnMsIG5vcm1hbGl6ZWROYW1lKSB7XG4gIHV0aWxzLmZvckVhY2goaGVhZGVycywgZnVuY3Rpb24gcHJvY2Vzc0hlYWRlcih2YWx1ZSwgbmFtZSkge1xuICAgIGlmIChuYW1lICE9PSBub3JtYWxpemVkTmFtZSAmJiBuYW1lLnRvVXBwZXJDYXNlKCkgPT09IG5vcm1hbGl6ZWROYW1lLnRvVXBwZXJDYXNlKCkpIHtcbiAgICAgIGhlYWRlcnNbbm9ybWFsaXplZE5hbWVdID0gdmFsdWU7XG4gICAgICBkZWxldGUgaGVhZGVyc1tuYW1lXTtcbiAgICB9XG4gIH0pO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi8uLi91dGlscycpO1xuXG4vLyBIZWFkZXJzIHdob3NlIGR1cGxpY2F0ZXMgYXJlIGlnbm9yZWQgYnkgbm9kZVxuLy8gYy5mLiBodHRwczovL25vZGVqcy5vcmcvYXBpL2h0dHAuaHRtbCNodHRwX21lc3NhZ2VfaGVhZGVyc1xudmFyIGlnbm9yZUR1cGxpY2F0ZU9mID0gW1xuICAnYWdlJywgJ2F1dGhvcml6YXRpb24nLCAnY29udGVudC1sZW5ndGgnLCAnY29udGVudC10eXBlJywgJ2V0YWcnLFxuICAnZXhwaXJlcycsICdmcm9tJywgJ2hvc3QnLCAnaWYtbW9kaWZpZWQtc2luY2UnLCAnaWYtdW5tb2RpZmllZC1zaW5jZScsXG4gICdsYXN0LW1vZGlmaWVkJywgJ2xvY2F0aW9uJywgJ21heC1mb3J3YXJkcycsICdwcm94eS1hdXRob3JpemF0aW9uJyxcbiAgJ3JlZmVyZXInLCAncmV0cnktYWZ0ZXInLCAndXNlci1hZ2VudCdcbl07XG5cbi8qKlxuICogUGFyc2UgaGVhZGVycyBpbnRvIGFuIG9iamVjdFxuICpcbiAqIGBgYFxuICogRGF0ZTogV2VkLCAyNyBBdWcgMjAxNCAwODo1ODo0OSBHTVRcbiAqIENvbnRlbnQtVHlwZTogYXBwbGljYXRpb24vanNvblxuICogQ29ubmVjdGlvbjoga2VlcC1hbGl2ZVxuICogVHJhbnNmZXItRW5jb2Rpbmc6IGNodW5rZWRcbiAqIGBgYFxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBoZWFkZXJzIEhlYWRlcnMgbmVlZGluZyB0byBiZSBwYXJzZWRcbiAqIEByZXR1cm5zIHtPYmplY3R9IEhlYWRlcnMgcGFyc2VkIGludG8gYW4gb2JqZWN0XG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gcGFyc2VIZWFkZXJzKGhlYWRlcnMpIHtcbiAgdmFyIHBhcnNlZCA9IHt9O1xuICB2YXIga2V5O1xuICB2YXIgdmFsO1xuICB2YXIgaTtcblxuICBpZiAoIWhlYWRlcnMpIHsgcmV0dXJuIHBhcnNlZDsgfVxuXG4gIHV0aWxzLmZvckVhY2goaGVhZGVycy5zcGxpdCgnXFxuJyksIGZ1bmN0aW9uIHBhcnNlcihsaW5lKSB7XG4gICAgaSA9IGxpbmUuaW5kZXhPZignOicpO1xuICAgIGtleSA9IHV0aWxzLnRyaW0obGluZS5zdWJzdHIoMCwgaSkpLnRvTG93ZXJDYXNlKCk7XG4gICAgdmFsID0gdXRpbHMudHJpbShsaW5lLnN1YnN0cihpICsgMSkpO1xuXG4gICAgaWYgKGtleSkge1xuICAgICAgaWYgKHBhcnNlZFtrZXldICYmIGlnbm9yZUR1cGxpY2F0ZU9mLmluZGV4T2Yoa2V5KSA+PSAwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmIChrZXkgPT09ICdzZXQtY29va2llJykge1xuICAgICAgICBwYXJzZWRba2V5XSA9IChwYXJzZWRba2V5XSA/IHBhcnNlZFtrZXldIDogW10pLmNvbmNhdChbdmFsXSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwYXJzZWRba2V5XSA9IHBhcnNlZFtrZXldID8gcGFyc2VkW2tleV0gKyAnLCAnICsgdmFsIDogdmFsO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIHBhcnNlZDtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbi8qKlxuICogU3ludGFjdGljIHN1Z2FyIGZvciBpbnZva2luZyBhIGZ1bmN0aW9uIGFuZCBleHBhbmRpbmcgYW4gYXJyYXkgZm9yIGFyZ3VtZW50cy5cbiAqXG4gKiBDb21tb24gdXNlIGNhc2Ugd291bGQgYmUgdG8gdXNlIGBGdW5jdGlvbi5wcm90b3R5cGUuYXBwbHlgLlxuICpcbiAqICBgYGBqc1xuICogIGZ1bmN0aW9uIGYoeCwgeSwgeikge31cbiAqICB2YXIgYXJncyA9IFsxLCAyLCAzXTtcbiAqICBmLmFwcGx5KG51bGwsIGFyZ3MpO1xuICogIGBgYFxuICpcbiAqIFdpdGggYHNwcmVhZGAgdGhpcyBleGFtcGxlIGNhbiBiZSByZS13cml0dGVuLlxuICpcbiAqICBgYGBqc1xuICogIHNwcmVhZChmdW5jdGlvbih4LCB5LCB6KSB7fSkoWzEsIDIsIDNdKTtcbiAqICBgYGBcbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFja1xuICogQHJldHVybnMge0Z1bmN0aW9ufVxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHNwcmVhZChjYWxsYmFjaykge1xuICByZXR1cm4gZnVuY3Rpb24gd3JhcChhcnIpIHtcbiAgICByZXR1cm4gY2FsbGJhY2suYXBwbHkobnVsbCwgYXJyKTtcbiAgfTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBiaW5kID0gcmVxdWlyZSgnLi9oZWxwZXJzL2JpbmQnKTtcbnZhciBpc0J1ZmZlciA9IHJlcXVpcmUoJ2lzLWJ1ZmZlcicpO1xuXG4vKmdsb2JhbCB0b1N0cmluZzp0cnVlKi9cblxuLy8gdXRpbHMgaXMgYSBsaWJyYXJ5IG9mIGdlbmVyaWMgaGVscGVyIGZ1bmN0aW9ucyBub24tc3BlY2lmaWMgdG8gYXhpb3NcblxudmFyIHRvU3RyaW5nID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZztcblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhbiBBcnJheVxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGFuIEFycmF5LCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNBcnJheSh2YWwpIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwodmFsKSA9PT0gJ1tvYmplY3QgQXJyYXldJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhbiBBcnJheUJ1ZmZlclxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGFuIEFycmF5QnVmZmVyLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNBcnJheUJ1ZmZlcih2YWwpIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwodmFsKSA9PT0gJ1tvYmplY3QgQXJyYXlCdWZmZXJdJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIEZvcm1EYXRhXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYW4gRm9ybURhdGEsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0Zvcm1EYXRhKHZhbCkge1xuICByZXR1cm4gKHR5cGVvZiBGb3JtRGF0YSAhPT0gJ3VuZGVmaW5lZCcpICYmICh2YWwgaW5zdGFuY2VvZiBGb3JtRGF0YSk7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSB2aWV3IG9uIGFuIEFycmF5QnVmZmVyXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSB2aWV3IG9uIGFuIEFycmF5QnVmZmVyLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNBcnJheUJ1ZmZlclZpZXcodmFsKSB7XG4gIHZhciByZXN1bHQ7XG4gIGlmICgodHlwZW9mIEFycmF5QnVmZmVyICE9PSAndW5kZWZpbmVkJykgJiYgKEFycmF5QnVmZmVyLmlzVmlldykpIHtcbiAgICByZXN1bHQgPSBBcnJheUJ1ZmZlci5pc1ZpZXcodmFsKTtcbiAgfSBlbHNlIHtcbiAgICByZXN1bHQgPSAodmFsKSAmJiAodmFsLmJ1ZmZlcikgJiYgKHZhbC5idWZmZXIgaW5zdGFuY2VvZiBBcnJheUJ1ZmZlcik7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIFN0cmluZ1xuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgU3RyaW5nLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNTdHJpbmcodmFsKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsID09PSAnc3RyaW5nJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIE51bWJlclxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgTnVtYmVyLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNOdW1iZXIodmFsKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsID09PSAnbnVtYmVyJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyB1bmRlZmluZWRcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB0aGUgdmFsdWUgaXMgdW5kZWZpbmVkLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNVbmRlZmluZWQodmFsKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsID09PSAndW5kZWZpbmVkJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhbiBPYmplY3RcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhbiBPYmplY3QsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc09iamVjdCh2YWwpIHtcbiAgcmV0dXJuIHZhbCAhPT0gbnVsbCAmJiB0eXBlb2YgdmFsID09PSAnb2JqZWN0Jztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIERhdGVcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIERhdGUsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0RhdGUodmFsKSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKHZhbCkgPT09ICdbb2JqZWN0IERhdGVdJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIEZpbGVcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIEZpbGUsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0ZpbGUodmFsKSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKHZhbCkgPT09ICdbb2JqZWN0IEZpbGVdJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIEJsb2JcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIEJsb2IsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0Jsb2IodmFsKSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKHZhbCkgPT09ICdbb2JqZWN0IEJsb2JdJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIEZ1bmN0aW9uXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBGdW5jdGlvbiwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzRnVuY3Rpb24odmFsKSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKHZhbCkgPT09ICdbb2JqZWN0IEZ1bmN0aW9uXSc7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBTdHJlYW1cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIFN0cmVhbSwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzU3RyZWFtKHZhbCkge1xuICByZXR1cm4gaXNPYmplY3QodmFsKSAmJiBpc0Z1bmN0aW9uKHZhbC5waXBlKTtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIFVSTFNlYXJjaFBhcmFtcyBvYmplY3RcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIFVSTFNlYXJjaFBhcmFtcyBvYmplY3QsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc1VSTFNlYXJjaFBhcmFtcyh2YWwpIHtcbiAgcmV0dXJuIHR5cGVvZiBVUkxTZWFyY2hQYXJhbXMgIT09ICd1bmRlZmluZWQnICYmIHZhbCBpbnN0YW5jZW9mIFVSTFNlYXJjaFBhcmFtcztcbn1cblxuLyoqXG4gKiBUcmltIGV4Y2VzcyB3aGl0ZXNwYWNlIG9mZiB0aGUgYmVnaW5uaW5nIGFuZCBlbmQgb2YgYSBzdHJpbmdcbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RyIFRoZSBTdHJpbmcgdG8gdHJpbVxuICogQHJldHVybnMge1N0cmluZ30gVGhlIFN0cmluZyBmcmVlZCBvZiBleGNlc3Mgd2hpdGVzcGFjZVxuICovXG5mdW5jdGlvbiB0cmltKHN0cikge1xuICByZXR1cm4gc3RyLnJlcGxhY2UoL15cXHMqLywgJycpLnJlcGxhY2UoL1xccyokLywgJycpO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiB3ZSdyZSBydW5uaW5nIGluIGEgc3RhbmRhcmQgYnJvd3NlciBlbnZpcm9ubWVudFxuICpcbiAqIFRoaXMgYWxsb3dzIGF4aW9zIHRvIHJ1biBpbiBhIHdlYiB3b3JrZXIsIGFuZCByZWFjdC1uYXRpdmUuXG4gKiBCb3RoIGVudmlyb25tZW50cyBzdXBwb3J0IFhNTEh0dHBSZXF1ZXN0LCBidXQgbm90IGZ1bGx5IHN0YW5kYXJkIGdsb2JhbHMuXG4gKlxuICogd2ViIHdvcmtlcnM6XG4gKiAgdHlwZW9mIHdpbmRvdyAtPiB1bmRlZmluZWRcbiAqICB0eXBlb2YgZG9jdW1lbnQgLT4gdW5kZWZpbmVkXG4gKlxuICogcmVhY3QtbmF0aXZlOlxuICogIG5hdmlnYXRvci5wcm9kdWN0IC0+ICdSZWFjdE5hdGl2ZSdcbiAqL1xuZnVuY3Rpb24gaXNTdGFuZGFyZEJyb3dzZXJFbnYoKSB7XG4gIGlmICh0eXBlb2YgbmF2aWdhdG9yICE9PSAndW5kZWZpbmVkJyAmJiBuYXZpZ2F0b3IucHJvZHVjdCA9PT0gJ1JlYWN0TmF0aXZlJykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICByZXR1cm4gKFxuICAgIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmXG4gICAgdHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJ1xuICApO1xufVxuXG4vKipcbiAqIEl0ZXJhdGUgb3ZlciBhbiBBcnJheSBvciBhbiBPYmplY3QgaW52b2tpbmcgYSBmdW5jdGlvbiBmb3IgZWFjaCBpdGVtLlxuICpcbiAqIElmIGBvYmpgIGlzIGFuIEFycmF5IGNhbGxiYWNrIHdpbGwgYmUgY2FsbGVkIHBhc3NpbmdcbiAqIHRoZSB2YWx1ZSwgaW5kZXgsIGFuZCBjb21wbGV0ZSBhcnJheSBmb3IgZWFjaCBpdGVtLlxuICpcbiAqIElmICdvYmonIGlzIGFuIE9iamVjdCBjYWxsYmFjayB3aWxsIGJlIGNhbGxlZCBwYXNzaW5nXG4gKiB0aGUgdmFsdWUsIGtleSwgYW5kIGNvbXBsZXRlIG9iamVjdCBmb3IgZWFjaCBwcm9wZXJ0eS5cbiAqXG4gKiBAcGFyYW0ge09iamVjdHxBcnJheX0gb2JqIFRoZSBvYmplY3QgdG8gaXRlcmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm4gVGhlIGNhbGxiYWNrIHRvIGludm9rZSBmb3IgZWFjaCBpdGVtXG4gKi9cbmZ1bmN0aW9uIGZvckVhY2gob2JqLCBmbikge1xuICAvLyBEb24ndCBib3RoZXIgaWYgbm8gdmFsdWUgcHJvdmlkZWRcbiAgaWYgKG9iaiA9PT0gbnVsbCB8fCB0eXBlb2Ygb2JqID09PSAndW5kZWZpbmVkJykge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8vIEZvcmNlIGFuIGFycmF5IGlmIG5vdCBhbHJlYWR5IHNvbWV0aGluZyBpdGVyYWJsZVxuICBpZiAodHlwZW9mIG9iaiAhPT0gJ29iamVjdCcpIHtcbiAgICAvKmVzbGludCBuby1wYXJhbS1yZWFzc2lnbjowKi9cbiAgICBvYmogPSBbb2JqXTtcbiAgfVxuXG4gIGlmIChpc0FycmF5KG9iaikpIHtcbiAgICAvLyBJdGVyYXRlIG92ZXIgYXJyYXkgdmFsdWVzXG4gICAgZm9yICh2YXIgaSA9IDAsIGwgPSBvYmoubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBmbi5jYWxsKG51bGwsIG9ialtpXSwgaSwgb2JqKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgLy8gSXRlcmF0ZSBvdmVyIG9iamVjdCBrZXlzXG4gICAgZm9yICh2YXIga2V5IGluIG9iaikge1xuICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIHtcbiAgICAgICAgZm4uY2FsbChudWxsLCBvYmpba2V5XSwga2V5LCBvYmopO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIEFjY2VwdHMgdmFyYXJncyBleHBlY3RpbmcgZWFjaCBhcmd1bWVudCB0byBiZSBhbiBvYmplY3QsIHRoZW5cbiAqIGltbXV0YWJseSBtZXJnZXMgdGhlIHByb3BlcnRpZXMgb2YgZWFjaCBvYmplY3QgYW5kIHJldHVybnMgcmVzdWx0LlxuICpcbiAqIFdoZW4gbXVsdGlwbGUgb2JqZWN0cyBjb250YWluIHRoZSBzYW1lIGtleSB0aGUgbGF0ZXIgb2JqZWN0IGluXG4gKiB0aGUgYXJndW1lbnRzIGxpc3Qgd2lsbCB0YWtlIHByZWNlZGVuY2UuXG4gKlxuICogRXhhbXBsZTpcbiAqXG4gKiBgYGBqc1xuICogdmFyIHJlc3VsdCA9IG1lcmdlKHtmb286IDEyM30sIHtmb286IDQ1Nn0pO1xuICogY29uc29sZS5sb2cocmVzdWx0LmZvbyk7IC8vIG91dHB1dHMgNDU2XG4gKiBgYGBcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqMSBPYmplY3QgdG8gbWVyZ2VcbiAqIEByZXR1cm5zIHtPYmplY3R9IFJlc3VsdCBvZiBhbGwgbWVyZ2UgcHJvcGVydGllc1xuICovXG5mdW5jdGlvbiBtZXJnZSgvKiBvYmoxLCBvYmoyLCBvYmozLCAuLi4gKi8pIHtcbiAgdmFyIHJlc3VsdCA9IHt9O1xuICBmdW5jdGlvbiBhc3NpZ25WYWx1ZSh2YWwsIGtleSkge1xuICAgIGlmICh0eXBlb2YgcmVzdWx0W2tleV0gPT09ICdvYmplY3QnICYmIHR5cGVvZiB2YWwgPT09ICdvYmplY3QnKSB7XG4gICAgICByZXN1bHRba2V5XSA9IG1lcmdlKHJlc3VsdFtrZXldLCB2YWwpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXN1bHRba2V5XSA9IHZhbDtcbiAgICB9XG4gIH1cblxuICBmb3IgKHZhciBpID0gMCwgbCA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBmb3JFYWNoKGFyZ3VtZW50c1tpXSwgYXNzaWduVmFsdWUpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogRXh0ZW5kcyBvYmplY3QgYSBieSBtdXRhYmx5IGFkZGluZyB0byBpdCB0aGUgcHJvcGVydGllcyBvZiBvYmplY3QgYi5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gYSBUaGUgb2JqZWN0IHRvIGJlIGV4dGVuZGVkXG4gKiBAcGFyYW0ge09iamVjdH0gYiBUaGUgb2JqZWN0IHRvIGNvcHkgcHJvcGVydGllcyBmcm9tXG4gKiBAcGFyYW0ge09iamVjdH0gdGhpc0FyZyBUaGUgb2JqZWN0IHRvIGJpbmQgZnVuY3Rpb24gdG9cbiAqIEByZXR1cm4ge09iamVjdH0gVGhlIHJlc3VsdGluZyB2YWx1ZSBvZiBvYmplY3QgYVxuICovXG5mdW5jdGlvbiBleHRlbmQoYSwgYiwgdGhpc0FyZykge1xuICBmb3JFYWNoKGIsIGZ1bmN0aW9uIGFzc2lnblZhbHVlKHZhbCwga2V5KSB7XG4gICAgaWYgKHRoaXNBcmcgJiYgdHlwZW9mIHZhbCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgYVtrZXldID0gYmluZCh2YWwsIHRoaXNBcmcpO1xuICAgIH0gZWxzZSB7XG4gICAgICBhW2tleV0gPSB2YWw7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIGE7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBpc0FycmF5OiBpc0FycmF5LFxuICBpc0FycmF5QnVmZmVyOiBpc0FycmF5QnVmZmVyLFxuICBpc0J1ZmZlcjogaXNCdWZmZXIsXG4gIGlzRm9ybURhdGE6IGlzRm9ybURhdGEsXG4gIGlzQXJyYXlCdWZmZXJWaWV3OiBpc0FycmF5QnVmZmVyVmlldyxcbiAgaXNTdHJpbmc6IGlzU3RyaW5nLFxuICBpc051bWJlcjogaXNOdW1iZXIsXG4gIGlzT2JqZWN0OiBpc09iamVjdCxcbiAgaXNVbmRlZmluZWQ6IGlzVW5kZWZpbmVkLFxuICBpc0RhdGU6IGlzRGF0ZSxcbiAgaXNGaWxlOiBpc0ZpbGUsXG4gIGlzQmxvYjogaXNCbG9iLFxuICBpc0Z1bmN0aW9uOiBpc0Z1bmN0aW9uLFxuICBpc1N0cmVhbTogaXNTdHJlYW0sXG4gIGlzVVJMU2VhcmNoUGFyYW1zOiBpc1VSTFNlYXJjaFBhcmFtcyxcbiAgaXNTdGFuZGFyZEJyb3dzZXJFbnY6IGlzU3RhbmRhcmRCcm93c2VyRW52LFxuICBmb3JFYWNoOiBmb3JFYWNoLFxuICBtZXJnZTogbWVyZ2UsXG4gIGV4dGVuZDogZXh0ZW5kLFxuICB0cmltOiB0cmltXG59O1xuIiwiLyohXG4gKiBEZXRlcm1pbmUgaWYgYW4gb2JqZWN0IGlzIGEgQnVmZmVyXG4gKlxuICogQGF1dGhvciAgIEZlcm9zcyBBYm91a2hhZGlqZWggPGh0dHBzOi8vZmVyb3NzLm9yZz5cbiAqIEBsaWNlbnNlICBNSVRcbiAqL1xuXG4vLyBUaGUgX2lzQnVmZmVyIGNoZWNrIGlzIGZvciBTYWZhcmkgNS03IHN1cHBvcnQsIGJlY2F1c2UgaXQncyBtaXNzaW5nXG4vLyBPYmplY3QucHJvdG90eXBlLmNvbnN0cnVjdG9yLiBSZW1vdmUgdGhpcyBldmVudHVhbGx5XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChvYmopIHtcbiAgcmV0dXJuIG9iaiAhPSBudWxsICYmIChpc0J1ZmZlcihvYmopIHx8IGlzU2xvd0J1ZmZlcihvYmopIHx8ICEhb2JqLl9pc0J1ZmZlcilcbn1cblxuZnVuY3Rpb24gaXNCdWZmZXIgKG9iaikge1xuICByZXR1cm4gISFvYmouY29uc3RydWN0b3IgJiYgdHlwZW9mIG9iai5jb25zdHJ1Y3Rvci5pc0J1ZmZlciA9PT0gJ2Z1bmN0aW9uJyAmJiBvYmouY29uc3RydWN0b3IuaXNCdWZmZXIob2JqKVxufVxuXG4vLyBGb3IgTm9kZSB2MC4xMCBzdXBwb3J0LiBSZW1vdmUgdGhpcyBldmVudHVhbGx5LlxuZnVuY3Rpb24gaXNTbG93QnVmZmVyIChvYmopIHtcbiAgcmV0dXJuIHR5cGVvZiBvYmoucmVhZEZsb2F0TEUgPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIG9iai5zbGljZSA9PT0gJ2Z1bmN0aW9uJyAmJiBpc0J1ZmZlcihvYmouc2xpY2UoMCwgMCkpXG59XG4iLCIvLyBzaGltIGZvciB1c2luZyBwcm9jZXNzIGluIGJyb3dzZXJcbnZhciBwcm9jZXNzID0gbW9kdWxlLmV4cG9ydHMgPSB7fTtcblxuLy8gY2FjaGVkIGZyb20gd2hhdGV2ZXIgZ2xvYmFsIGlzIHByZXNlbnQgc28gdGhhdCB0ZXN0IHJ1bm5lcnMgdGhhdCBzdHViIGl0XG4vLyBkb24ndCBicmVhayB0aGluZ3MuICBCdXQgd2UgbmVlZCB0byB3cmFwIGl0IGluIGEgdHJ5IGNhdGNoIGluIGNhc2UgaXQgaXNcbi8vIHdyYXBwZWQgaW4gc3RyaWN0IG1vZGUgY29kZSB3aGljaCBkb2Vzbid0IGRlZmluZSBhbnkgZ2xvYmFscy4gIEl0J3MgaW5zaWRlIGFcbi8vIGZ1bmN0aW9uIGJlY2F1c2UgdHJ5L2NhdGNoZXMgZGVvcHRpbWl6ZSBpbiBjZXJ0YWluIGVuZ2luZXMuXG5cbnZhciBjYWNoZWRTZXRUaW1lb3V0O1xudmFyIGNhY2hlZENsZWFyVGltZW91dDtcblxuZnVuY3Rpb24gZGVmYXVsdFNldFRpbW91dCgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3NldFRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbmZ1bmN0aW9uIGRlZmF1bHRDbGVhclRpbWVvdXQgKCkge1xuICAgIHRocm93IG5ldyBFcnJvcignY2xlYXJUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG4oZnVuY3Rpb24gKCkge1xuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2Ygc2V0VGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2YgY2xlYXJUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgIH1cbn0gKCkpXG5mdW5jdGlvbiBydW5UaW1lb3V0KGZ1bikge1xuICAgIGlmIChjYWNoZWRTZXRUaW1lb3V0ID09PSBzZXRUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICAvLyBpZiBzZXRUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkU2V0VGltZW91dCA9PT0gZGVmYXVsdFNldFRpbW91dCB8fCAhY2FjaGVkU2V0VGltZW91dCkgJiYgc2V0VGltZW91dCkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dChmdW4sIDApO1xuICAgIH0gY2F0Y2goZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwobnVsbCwgZnVuLCAwKTtcbiAgICAgICAgfSBjYXRjaChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yXG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKHRoaXMsIGZ1biwgMCk7XG4gICAgICAgIH1cbiAgICB9XG5cblxufVxuZnVuY3Rpb24gcnVuQ2xlYXJUaW1lb3V0KG1hcmtlcikge1xuICAgIGlmIChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGNsZWFyVGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICAvLyBpZiBjbGVhclRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGRlZmF1bHRDbGVhclRpbWVvdXQgfHwgIWNhY2hlZENsZWFyVGltZW91dCkgJiYgY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCAgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbChudWxsLCBtYXJrZXIpO1xuICAgICAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yLlxuICAgICAgICAgICAgLy8gU29tZSB2ZXJzaW9ucyBvZiBJLkUuIGhhdmUgZGlmZmVyZW50IHJ1bGVzIGZvciBjbGVhclRpbWVvdXQgdnMgc2V0VGltZW91dFxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKHRoaXMsIG1hcmtlcik7XG4gICAgICAgIH1cbiAgICB9XG5cblxuXG59XG52YXIgcXVldWUgPSBbXTtcbnZhciBkcmFpbmluZyA9IGZhbHNlO1xudmFyIGN1cnJlbnRRdWV1ZTtcbnZhciBxdWV1ZUluZGV4ID0gLTE7XG5cbmZ1bmN0aW9uIGNsZWFuVXBOZXh0VGljaygpIHtcbiAgICBpZiAoIWRyYWluaW5nIHx8ICFjdXJyZW50UXVldWUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIGlmIChjdXJyZW50UXVldWUubGVuZ3RoKSB7XG4gICAgICAgIHF1ZXVlID0gY3VycmVudFF1ZXVlLmNvbmNhdChxdWV1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgIH1cbiAgICBpZiAocXVldWUubGVuZ3RoKSB7XG4gICAgICAgIGRyYWluUXVldWUoKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGRyYWluUXVldWUoKSB7XG4gICAgaWYgKGRyYWluaW5nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIHRpbWVvdXQgPSBydW5UaW1lb3V0KGNsZWFuVXBOZXh0VGljayk7XG4gICAgZHJhaW5pbmcgPSB0cnVlO1xuXG4gICAgdmFyIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB3aGlsZShsZW4pIHtcbiAgICAgICAgY3VycmVudFF1ZXVlID0gcXVldWU7XG4gICAgICAgIHF1ZXVlID0gW107XG4gICAgICAgIHdoaWxlICgrK3F1ZXVlSW5kZXggPCBsZW4pIHtcbiAgICAgICAgICAgIGlmIChjdXJyZW50UXVldWUpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50UXVldWVbcXVldWVJbmRleF0ucnVuKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgICAgICBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgfVxuICAgIGN1cnJlbnRRdWV1ZSA9IG51bGw7XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBydW5DbGVhclRpbWVvdXQodGltZW91dCk7XG59XG5cbnByb2Nlc3MubmV4dFRpY2sgPSBmdW5jdGlvbiAoZnVuKSB7XG4gICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCAtIDEpO1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgYXJnc1tpIC0gMV0gPSBhcmd1bWVudHNbaV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcXVldWUucHVzaChuZXcgSXRlbShmdW4sIGFyZ3MpKTtcbiAgICBpZiAocXVldWUubGVuZ3RoID09PSAxICYmICFkcmFpbmluZykge1xuICAgICAgICBydW5UaW1lb3V0KGRyYWluUXVldWUpO1xuICAgIH1cbn07XG5cbi8vIHY4IGxpa2VzIHByZWRpY3RpYmxlIG9iamVjdHNcbmZ1bmN0aW9uIEl0ZW0oZnVuLCBhcnJheSkge1xuICAgIHRoaXMuZnVuID0gZnVuO1xuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbn1cbkl0ZW0ucHJvdG90eXBlLnJ1biA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmZ1bi5hcHBseShudWxsLCB0aGlzLmFycmF5KTtcbn07XG5wcm9jZXNzLnRpdGxlID0gJ2Jyb3dzZXInO1xucHJvY2Vzcy5icm93c2VyID0gdHJ1ZTtcbnByb2Nlc3MuZW52ID0ge307XG5wcm9jZXNzLmFyZ3YgPSBbXTtcbnByb2Nlc3MudmVyc2lvbiA9ICcnOyAvLyBlbXB0eSBzdHJpbmcgdG8gYXZvaWQgcmVnZXhwIGlzc3Vlc1xucHJvY2Vzcy52ZXJzaW9ucyA9IHt9O1xuXG5mdW5jdGlvbiBub29wKCkge31cblxucHJvY2Vzcy5vbiA9IG5vb3A7XG5wcm9jZXNzLmFkZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3Mub25jZSA9IG5vb3A7XG5wcm9jZXNzLm9mZiA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUxpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlQWxsTGlzdGVuZXJzID0gbm9vcDtcbnByb2Nlc3MuZW1pdCA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRPbmNlTGlzdGVuZXIgPSBub29wO1xuXG5wcm9jZXNzLmxpc3RlbmVycyA9IGZ1bmN0aW9uIChuYW1lKSB7IHJldHVybiBbXSB9XG5cbnByb2Nlc3MuYmluZGluZyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmJpbmRpbmcgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcblxucHJvY2Vzcy5jd2QgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAnLycgfTtcbnByb2Nlc3MuY2hkaXIgPSBmdW5jdGlvbiAoZGlyKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmNoZGlyIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5wcm9jZXNzLnVtYXNrID0gZnVuY3Rpb24oKSB7IHJldHVybiAwOyB9O1xuIiwiaW1wb3J0IHtEaXNwYXRjaGVyfSBmcm9tIFwiLi4vZXZlbnRzL2Rpc3BhdGNoZXJcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBDaGFubmVsIGV4dGVuZHMgRGlzcGF0Y2hlciB7XHJcbiAgICBjb25zdHJ1Y3RvcihuYW1lLCBwdXNoZXIpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG5cclxuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgICAgIHRoaXMucHVzaGVyID0gcHVzaGVyO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5wdXNoZXIuc29ja2V0LnN0YXRlID09IDEpIHtcclxuICAgICAgICAgICAgdGhpcy5zdWJzY3JpYmUoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc3Vic2NyaWJlKCkge1xyXG4gICAgICAgIHRoaXMucHVzaGVyLnNlbmQoe1xyXG4gICAgICAgICAgICBldmVudDogJ3N1YnNjcmliZScsXHJcbiAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgIGNoYW5uZWw6IHRoaXMubmFtZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdW5zdWJzY3JpYmUoKSB7XHJcbiAgICAgICAgdGhpcy5wdXNoZXIuc2VuZCh7XHJcbiAgICAgICAgICAgIGV2ZW50OiAndW5zdWJzY3JpYmUnLFxyXG4gICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICBjaGFubmVsOiB0aGlzLm5hbWVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHtDaGFubmVsfSBmcm9tIFwiLi9jaGFubmVsXCI7XHJcbmltcG9ydCB7UHJlc2VuY2VDaGFubmVsfSBmcm9tIFwiLi9wcmVzZW5jZV9jaGFubmVsXCI7XHJcbmltcG9ydCB7UHJpdmF0ZUNoYW5uZWx9IGZyb20gXCIuL3ByaXZhdGVfY2hhbm5lbFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIE1hbm5hZ2VyIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuY2hhbm5lbHMgPSB7fTtcclxuICAgIH1cclxuXHJcbiAgICBhZGQobmFtZSwgcHVzaGVyKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmNoYW5uZWxzW25hbWVdKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2hhbm5lbHNbbmFtZV0gPSBjcmVhdGVDaGFubmVsKG5hbWUsIHB1c2hlcik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLmNoYW5uZWxzW25hbWVdO1xyXG4gICAgfVxyXG5cclxuICAgIGFsbCgpIHtcclxuICAgICAgICByZXR1cm4gT2JqZWN0LmtleXModGhpcy5jaGFubmVscyk7XHJcbiAgICB9XHJcblxyXG4gICAgZmluZChuYW1lKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY2hhbm5lbHNbbmFtZV07XHJcbiAgICB9XHJcblxyXG4gICAgcmVtb3ZlKG5hbWUpIHtcclxuICAgICAgICBsZXQgY2hhbm5lbCA9IHRoaXMuY2hhbm5lbHNbbmFtZV07XHJcbiAgICAgICAgZGVsZXRlIHRoaXMuY2hhbm5lbHNbbmFtZV07XHJcbiAgICAgICAgcmV0dXJuIGNoYW5uZWw7XHJcbiAgICB9XHJcblxyXG4gICAgc3Vic2NyaWJlKCkge1xyXG4gICAgICAgIGZvciAobGV0IGkgaW4gdGhpcy5jaGFubmVscykge1xyXG4gICAgICAgICAgICB0aGlzLmNoYW5uZWxzW2ldLnN1YnNjcmliZSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUNoYW5uZWwobmFtZSwgcHVzaGVyKSB7XHJcbiAgICBpZiAobmFtZS5pbmRleE9mKCdwcml2YXRlLScpID09PSAwKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcml2YXRlQ2hhbm5lbChuYW1lLCBwdXNoZXIpO1xyXG4gICAgfSBlbHNlIGlmIChuYW1lLmluZGV4T2YoJ3ByZXNlbmNlLScpID09PSAwKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcmVzZW5jZUNoYW5uZWwobmFtZSwgcHVzaGVyKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBDaGFubmVsKG5hbWUsIHB1c2hlcik7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQge0Rpc3BhdGNoZXJ9IGZyb20gXCIuLi9ldmVudHMvZGlzcGF0Y2hlclwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFByZXNlbmNlQ2hhbm5lbCBleHRlbmRzIERpc3BhdGNoZXIge1xyXG4gICAgY29uc3RydWN0b3IobmFtZSwgcHVzaGVyKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuXHJcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICAgICAgICB0aGlzLnB1c2hlciA9IHB1c2hlcjtcclxuICAgICAgICB0aGlzLmF1dGggPSBudWxsO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5wdXNoZXIuc29ja2V0LnN0YXRlID09IDEpIHtcclxuICAgICAgICAgICAgdGhpcy5zdWJzY3JpYmUoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc3Vic2NyaWJlKCkge1xyXG4gICAgICAgIHRoaXMucHVzaGVyLmF1dGgodGhpcy5uYW1lLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmF1dGggPSBlLmRhdGEuYXV0aDtcclxuXHJcbiAgICAgICAgICAgIHRoaXMucHVzaGVyLnNlbmQoe1xyXG4gICAgICAgICAgICAgICAgZXZlbnQ6ICdzdWJzY3JpYmUnLFxyXG4gICAgICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgICAgIGNoYW5uZWw6IHRoaXMubmFtZSxcclxuICAgICAgICAgICAgICAgICAgICBhdXRoOiB0aGlzLmF1dGgsXHJcbiAgICAgICAgICAgICAgICAgICAgY2hhbm5lbF9kYXRhOiBlLmRhdGEuY2hhbm5lbF9kYXRhXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHVuc3Vic2NyaWJlKCkge1xyXG4gICAgICAgIHRoaXMucHVzaGVyLnNlbmQoe1xyXG4gICAgICAgICAgICBldmVudDogJ3Vuc3Vic2NyaWJlJyxcclxuICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgY2hhbm5lbDogdGhpcy5uYW1lXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxufSIsImltcG9ydCB7RGlzcGF0Y2hlcn0gZnJvbSBcIi4uL2V2ZW50cy9kaXNwYXRjaGVyXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgUHJpdmF0ZUNoYW5uZWwgZXh0ZW5kcyBEaXNwYXRjaGVyIHtcclxuICAgIGNvbnN0cnVjdG9yKG5hbWUsIHB1c2hlcikge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcblxyXG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICAgICAgdGhpcy5wdXNoZXIgPSBwdXNoZXI7XHJcbiAgICAgICAgdGhpcy5hdXRoID0gbnVsbDtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMucHVzaGVyLnNvY2tldC5zdGF0ZSA9PSAxKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3Vic2NyaWJlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHN1YnNjcmliZSgpIHtcclxuICAgICAgICB0aGlzLnB1c2hlci5hdXRoKHRoaXMubmFtZSwgKGUpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5hdXRoID0gZS5kYXRhLmF1dGg7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnB1c2hlci5zZW5kKHtcclxuICAgICAgICAgICAgICAgIGV2ZW50OiAnc3Vic2NyaWJlJyxcclxuICAgICAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgICAgICBjaGFubmVsOiB0aGlzLm5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgYXV0aDogdGhpcy5hdXRoXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHVuc3Vic2NyaWJlKCkge1xyXG4gICAgICAgIHRoaXMucHVzaGVyLnNlbmQoe1xyXG4gICAgICAgICAgICBldmVudDogJ3Vuc3Vic2NyaWJlJyxcclxuICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgY2hhbm5lbDogdGhpcy5uYW1lXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxufSIsImltcG9ydCB7RGlzcGF0Y2hlcn0gZnJvbSBcIi4uL2V2ZW50cy9kaXNwYXRjaGVyXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgU29ja2V0IGV4dGVuZHMgRGlzcGF0Y2hlciB7XHJcbiAgICBjb25zdHJ1Y3RvcihwdXNoZXIsIGhvc3QpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG5cclxuICAgICAgICB0aGlzLnB1c2hlciA9IHB1c2hlcjtcclxuICAgICAgICB0aGlzLnNvY2tldCA9IG5ldyBXZWJTb2NrZXQoaG9zdCArICcvJyArIHRoaXMucHVzaGVyLmtleSk7XHJcblxyXG4gICAgICAgIHRoaXMuYmluZExpc3RlbmVycygpO1xyXG4gICAgfVxyXG5cclxuICAgIGJpbmRMaXN0ZW5lcnMoKSB7XHJcbiAgICAgICAgdGhpcy5zb2NrZXQub25vcGVuID0gKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLm9uT3BlbigpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5zb2NrZXQub25lcnJvciA9IChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLm9uRXJyb3IoZXJyb3IpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5zb2NrZXQub25jbG9zZSA9IChjbG9zZUV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMub25DbG9zZShjbG9zZUV2ZW50KTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuc29ja2V0Lm9ubWVzc2FnZSA9IChtZXNzYWdlKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMub25NZXNzYWdlKG1lc3NhZ2UpO1xyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgb25PcGVuKCkge1xyXG4gICAgICAgIC8v5Yid5aeL54q25oCBXHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IDA7XHJcblxyXG4gICAgICAgIHRoaXMuYmluZCgnY29ubmVjdGVkJywgKGUpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5zb2NrZXQuc29ja2V0X2lkID0gZS5zb2NrZXRfaWQ7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhdGUgPSAxO1xyXG5cclxuICAgICAgICAgICAgLy/orqLpmIVcclxuICAgICAgICAgICAgdGhpcy5wdXNoZXIuY2hhbm5lbHMuc3Vic2NyaWJlKCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuYmluZCgnY29ubmVjdGlvbl9mYWlsZWQnLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnN0YXRlID0gLTE7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZS5lcnJvcilcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLyp0aGlzLnNlbmQoe1xyXG4gICAgICAgICAgICBldmVudDogJ2F1dGhvcml6YXRpb24nXHJcbiAgICAgICAgfSk7Ki9cclxuICAgIH1cclxuXHJcbiAgICBvbkVycm9yKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcilcclxuICAgIH1cclxuXHJcbiAgICBvbkNsb3NlKGNsb3NlRXZlbnQpIHtcclxuICAgICAgICBpZiAodGhpcy5zb2NrZXQucmVhZHlTdGF0ZSA9PSBXZWJTb2NrZXQuQ0xPU0VEKSB7XHJcbiAgICAgICAgICAgIGlmIChjbG9zZUV2ZW50LnR5cGUgPT0gJ2Nsb3NlJykge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignc29ja2V05pyN5Yqh5bey5pat5byAISEnKVxyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGNsb3NlRXZlbnQudHlwZSA9PSAnbWVzc2FnZScpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoY2xvc2VFdmVudC5kYXRhKVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcign5bey5pat5byAISEnKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uTWVzc2FnZShtZXNzYWdlKSB7XHJcbiAgICAgICAgbGV0IGVEYXRhID0gSlNPTi5wYXJzZShtZXNzYWdlLmRhdGEpO1xyXG4gICAgICAgIGxldCBldmVudCA9IGVEYXRhLmV2ZW50O1xyXG4gICAgICAgIGxldCBkYXRhID0gZURhdGEuZGF0YTtcclxuXHJcbiAgICAgICAgaWYgKGVEYXRhLmNoYW5uZWwgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB0aGlzLnB1c2hlci5jaGFubmVscy5maW5kKGVEYXRhLmNoYW5uZWwpLmVtaXQoZXZlbnQsIGRhdGEpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuZW1pdChldmVudCwgZGF0YSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBzZW5kKGpzb24pIHtcclxuICAgICAgICBpZiAodGhpcy5zdGF0ZSAhPT0gLTEpIHtcclxuICAgICAgICAgICAgdGhpcy5zb2NrZXQuc2VuZChKU09OLnN0cmluZ2lmeShqc29uKSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJleHBvcnQgY2xhc3MgQ2FsbGJhY2tSZWdpc3RyeSB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLl9jYWxsYmFja3MgPSB7fTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQobmFtZSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9jYWxsYmFja3NbcHJlZml4KG5hbWUpXTtcclxuICAgIH1cclxuXHJcbiAgICBhZGQobmFtZSwgY2FsbGJhY2ssIGNvbnRleHQpIHtcclxuICAgICAgICBsZXQgcHJlZml4ZWRFdmVudE5hbWUgPSBwcmVmaXgobmFtZSk7XHJcbiAgICAgICAgdGhpcy5fY2FsbGJhY2tzW3ByZWZpeGVkRXZlbnROYW1lXSA9IHRoaXMuX2NhbGxiYWNrc1twcmVmaXhlZEV2ZW50TmFtZV0gfHwgW107XHJcbiAgICAgICAgdGhpcy5fY2FsbGJhY2tzW3ByZWZpeGVkRXZlbnROYW1lXS5wdXNoKHtcclxuICAgICAgICAgICAgZm46IGNhbGxiYWNrLFxyXG4gICAgICAgICAgICBjb250ZXh0OiBjb250ZXh0XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVtb3ZlKG5hbWUsIGNhbGxiYWNrLCBjb250ZXh0KSB7XHJcbiAgICAgICAgaWYgKCFuYW1lICYmICFjYWxsYmFjayAmJiAhY29udGV4dCkge1xyXG4gICAgICAgICAgICB0aGlzLl9jYWxsYmFja3MgPSB7fTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIG5hbWVzID0gbmFtZSA/IFtwcmVmaXgobmFtZSldIDogT2JqZWN0LmtleXModGhpcy5fY2FsbGJhY2tzKTtcclxuXHJcbiAgICAgICAgaWYgKGNhbGxiYWNrIHx8IGNvbnRleHQpIHtcclxuICAgICAgICAgICAgdGhpcy5yZW1vdmVDYWxsYmFjayhuYW1lcywgY2FsbGJhY2ssIGNvbnRleHQpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlQWxsQ2FsbGJhY2tzKG5hbWVzKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmVtb3ZlQ2FsbGJhY2sobmFtZXMsIGNhbGxiYWNrLCBjb250ZXh0KSB7XHJcbiAgICAgICAgZm9yIChsZXQgbmFtZSBpbiBuYW1lcykge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBrZXkgaW4gdGhpcy5fY2FsbGJhY2tzW25hbWVdKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fY2FsbGJhY2tzW25hbWVdW2tleV0uZm4gPT0gY2FsbGJhY2sgfHwgdGhpcy5fY2FsbGJhY2tzW25hbWVdW2tleV0uY29udGV4dCA9PSBjb250ZXh0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIHRoaXMuX2NhbGxiYWNrc1tuYW1lXVtrZXldO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5fY2FsbGJhY2tzW25hbWVdLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgZGVsZXRlIHRoaXMuX2NhbGxiYWNrc1tuYW1lXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZW1vdmVBbGxDYWxsYmFja3MobmFtZXMpIHtcclxuICAgICAgICBmb3IgKGxldCBuYW1lIGluIG5hbWVzKSB7XHJcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLl9jYWxsYmFja3NbbmFtZV07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBwcmVmaXgobmFtZSkge1xyXG4gICAgcmV0dXJuIFwiX1wiICsgbmFtZTtcclxufSIsImltcG9ydCB7Q2FsbGJhY2tSZWdpc3RyeX0gZnJvbSAnLi9jYWxsYmFja19yZWdpc3RyeSc7XHJcblxyXG5leHBvcnQgY2xhc3MgRGlzcGF0Y2hlciB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLmNhbGxiYWNrcyA9IG5ldyBDYWxsYmFja1JlZ2lzdHJ5KCk7XHJcbiAgICAgICAgdGhpcy5nbG9iYWxfY2FsbGJhY2tzID0gW107XHJcbiAgICB9XHJcblxyXG4gICAgYmluZChldmVudE5hbWUsIGNhbGxiYWNrLCBjb250ZXh0KSB7XHJcbiAgICAgICAgdGhpcy5jYWxsYmFja3MuYWRkKGV2ZW50TmFtZSwgY2FsbGJhY2ssIGNvbnRleHQpO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIGJpbmRfZ2xvYmFsKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgdGhpcy5nbG9iYWxfY2FsbGJhY2tzLnB1c2goY2FsbGJhY2spO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHVuYmluZChldmVudE5hbWUsIGNhbGxiYWNrLCBjb250ZXh0KSB7XHJcbiAgICAgICAgdGhpcy5jYWxsYmFja3MucmVtb3ZlKGV2ZW50TmFtZSwgY2FsbGJhY2ssIGNvbnRleHQpO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHVuYmluZF9nbG9iYWwoY2FsbGJhY2spIHtcclxuICAgICAgICBpZiAoIWNhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZ2xvYmFsX2NhbGxiYWNrcyA9IFtdO1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgaW4gdGhpcy5nbG9iYWxfY2FsbGJhY2tzKSB7XHJcbiAgICAgICAgICAgIGlmIChjYWxsYmFjayA9PSB0aGlzLmdsb2JhbF9jYWxsYmFja3NbaV0pIHtcclxuICAgICAgICAgICAgICAgIGRlbGV0ZSB0aGlzLmdsb2JhbF9jYWxsYmFja3NbaV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgdW5iaW5kX2FsbCgpIHtcclxuICAgICAgICB0aGlzLnVuYmluZCgpO1xyXG4gICAgICAgIHRoaXMudW5iaW5kX2dsb2JhbCgpO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIGVtaXQoZXZlbnROYW1lLCBkYXRhKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmdsb2JhbF9jYWxsYmFja3MubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgdGhpcy5nbG9iYWxfY2FsbGJhY2tzW2ldKGV2ZW50TmFtZSwgZGF0YSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2YXIgY2FsbGJhY2tzID0gdGhpcy5jYWxsYmFja3MuZ2V0KGV2ZW50TmFtZSk7XHJcbiAgICAgICAgaWYgKGNhbGxiYWNrcyAmJiBjYWxsYmFja3MubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNhbGxiYWNrcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgY2FsbGJhY2tzW2ldLmZuLmNhbGwoY2FsbGJhY2tzW2ldLmNvbnRleHQsIGRhdGEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxufSIsImltcG9ydCB7U29ja2V0fSBmcm9tICcuL2Nvbm5lY3Rpb24vc29ja2V0JztcclxuaW1wb3J0IHtEaXNwYXRjaGVyfSBmcm9tICcuL2V2ZW50cy9kaXNwYXRjaGVyJztcclxuaW1wb3J0IHtNYW5uYWdlcn0gZnJvbSBcIi4vY2hhbm5lbHMvbWFubmFnZXJcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFB1c2hlciB7XHJcbiAgICBjb25zdHJ1Y3RvcihhcHBfa2V5LCBvcHRpb25zKSB7XHJcbiAgICAgICAgdGhpcy5jaGVja0FwcEtleShhcHBfa2V5KTtcclxuXHJcbiAgICAgICAgdGhpcy5rZXkgPSBhcHBfa2V5O1xyXG4gICAgICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnMgfHwge307XHJcbiAgICAgICAgdGhpcy5kaXNwYXRjaGVyID0gbmV3IERpc3BhdGNoZXIoKTtcclxuICAgICAgICB0aGlzLmNoYW5uZWxzID0gbmV3IE1hbm5hZ2VyKCk7XHJcblxyXG4gICAgICAgIHRoaXMuY29ubmVjdCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbm5lY3QoKSB7XHJcbiAgICAgICAgdGhpcy5zb2NrZXQgPSBuZXcgU29ja2V0KHRoaXMsIHRoaXMub3B0aW9ucy5ob3N0KTtcclxuICAgIH1cclxuXHJcbiAgICBzdWJzY3JpYmUoY2hhbm5lbF9uYW1lKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY2hhbm5lbHMuYWRkKGNoYW5uZWxfbmFtZSwgdGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgdW5zdWJzY3JpYmUoY2hhbm5lbF9uYW1lKSB7XHJcbiAgICAgICAgbGV0IGNoYW5uZWwgPSB0aGlzLmNoYW5uZWxzLnJlbW92ZShjaGFubmVsX25hbWUpO1xyXG4gICAgICAgIGNoYW5uZWwudW5zdWJzY3JpYmUoKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRTb2NrZXRJZCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zb2NrZXQuc29ja2V0LnNvY2tldF9pZDtcclxuICAgIH1cclxuXHJcbiAgICBzZW5kKGpzb24pIHtcclxuICAgICAgICB0aGlzLnNvY2tldC5zZW5kKGpzb24pO1xyXG4gICAgfVxyXG5cclxuICAgIGNoZWNrQXBwS2V5KGtleSkge1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIGF1dGgobmFtZSwgY2FsbGJhY2spIHtcclxuICAgICAgICBsZXQgbWV0aG9kID0gdGhpcy5vcHRpb25zLmF1dGgubWV0aG9kIHx8ICdwb3N0JztcclxuICAgICAgICBsZXQgZGF0YSA9IHt9O1xyXG4gICAgICAgIGxldCBwYXJhbXMgPSB7fTtcclxuXHJcbiAgICAgICAgaWYgKG1ldGhvZCA9PSAncG9zdCcpIHtcclxuICAgICAgICAgICAgZGF0YSA9IE9iamVjdC5hc3NpZ24oe1xyXG4gICAgICAgICAgICAgICAgY2hhbm5lbF9uYW1lOiBuYW1lLFxyXG4gICAgICAgICAgICAgICAgc29ja2V0X2lkOiB0aGlzLmdldFNvY2tldElkKClcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcGFyYW1zID0gT2JqZWN0LmFzc2lnbih7XHJcbiAgICAgICAgICAgICAgICBjaGFubmVsX25hbWU6IG5hbWUsXHJcbiAgICAgICAgICAgICAgICBzb2NrZXRfaWQ6IHRoaXMuZ2V0U29ja2V0SWQoKVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGF4aW9zKHtcclxuICAgICAgICAgICAgdXJsOiB0aGlzLm9wdGlvbnMuYXV0aC51cmwsXHJcbiAgICAgICAgICAgIG1ldGhvZDogbWV0aG9kLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiB0aGlzLm9wdGlvbnMuYXV0aC5oZWFkZXJzIHx8IHt9LFxyXG4gICAgICAgICAgICBwYXJhbXM6IHBhcmFtcyxcclxuICAgICAgICAgICAgZGF0YTogZGF0YVxyXG4gICAgICAgIH0pLnRoZW4oKGUpID0+IHtcclxuICAgICAgICAgICAgY2FsbGJhY2soZSlcclxuICAgICAgICB9KS5jYXRjaCgoZSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCfnp4HmnInpopHpgZPmnYPpmZDkuI3otrMhJyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbndpbmRvdy5QdXNoZXIgPSBQdXNoZXI7Il0sInNvdXJjZVJvb3QiOiIifQ==

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

    unsubscribe() {
        this.pusher.send({
            event: 'unsubscribe',
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

    unsubscribe() {
        this.pusher.send({
            event: 'unsubscribe',
            data: {
                channel: this.name
            }
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

    unsubscribe() {
        this.pusher.send({
            event: 'unsubscribe',
            data: {
                channel: this.name
            }
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
        callback(e);
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
  }, {
    key: "leave",
    value: function leave(name) {
      var _this = this;

      var channels = [name, 'private-' + name, 'presence-' + name];
      channels.forEach(function (name, index) {
        if (_this.channels[name]) {
          _this.channels[name].unsubscribe();

          delete _this.channels[name];
        }
      });
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
    value: function leave(channel) {
      this.connector.leave(channel);
    }
  }]);

  return Echo;
}();
window.Echo = Echo;

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2x1ZmZ5LXB1c2hlci9kaXN0L3B1c2hlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbHVmZnktcHVzaGVyL3NyYy9jaGFubmVscy9jaGFubmVsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sdWZmeS1wdXNoZXIvc3JjL2NoYW5uZWxzL3ByZXNlbmNlX2NoYW5uZWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2x1ZmZ5LXB1c2hlci9zcmMvY2hhbm5lbHMvcHJpdmF0ZV9jaGFubmVsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sdWZmeS1wdXNoZXIvc3JjL2V2ZW50cy9jYWxsYmFja19yZWdpc3RyeS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbHVmZnktcHVzaGVyL3NyYy9ldmVudHMvZGlzcGF0Y2hlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwX2FfdXNlcl8xLmpzIiwid2VicGFjazovLy8uL3NyYy9jaGFubmVsL2NoYW5uZWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NoYW5uZWwvcHVzaGVyLWNoYW5uZWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NoYW5uZWwvcHVzaGVyLXByZXNlbmNlLWNoYW5uZWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NoYW5uZWwvcHVzaGVyLXByaXZhdGUtY2hhbm5lbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29ubmVjdG9yL3B1c2hlcl9jb25uZWN0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VjaG8uanMiXSwibmFtZXMiOlsid2luZG93IiwiRWNobyIsImhvc3QiLCJhdXRoIiwibWV0aG9kIiwidXJsIiwiaGVhZGVycyIsInBhcmFtcyIsImpvaW4iLCJoZXJlIiwidXNlcnMiLCJjb25zb2xlIiwibG9nIiwiam9pbmluZyIsInVzZXIiLCJsZWF2aW5nIiwibGlzdGVuIiwiZSIsIkNoYW5uZWwiLCJwdXNoZXIiLCJuYW1lIiwic3Vic2NyaWJlIiwic3Vic2NyaXB0aW9uIiwidW5zdWJzY3JpYmUiLCJldmVudCIsImNhbGxiYWNrIiwib24iLCJ1bmJpbmQiLCJiaW5kIiwiZGF0YSIsInNlbmQiLCJjaGFubmVsIiwiUHVzaGVyQ2hhbm5lbCIsIlB1c2hlclByZXNlbmNlQ2hhbm5lbCIsImJhY2siLCJQdXNoZXJQcml2YXRlQ2hhbm5lbCIsIlB1c2hlckNvbm5lY3RvciIsImFwcF9rZXkiLCJvcHRpb25zIiwiUHVzaGVyIiwiY2hhbm5lbHMiLCJ1bmRlZmluZWQiLCJmb3JFYWNoIiwiaW5kZXgiLCJhcHBrZXkiLCJjb25uZWN0b3IiLCJwcml2YXRlQ2hhbm5lbCIsInByZXNlbmNlQ2hhbm5lbCIsImluZGV4T2YiLCJwcml2YXRlIiwibGVhdmUiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ2xGQSw2QkFBNkI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrREFBa0QsZ0NBQWdDO0FBQ2xGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdFQUFnRSxrQkFBa0I7QUFDbEY7QUFDQSx5REFBeUQsY0FBYztBQUN2RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUFpRCxpQ0FBaUM7QUFDbEYsd0hBQXdILG1CQUFtQixFQUFFO0FBQzdJO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQywwQkFBMEIsRUFBRTtBQUMvRCx5Q0FBeUMsZUFBZTtBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOERBQThELCtEQUErRDtBQUM3SDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw0Q0FBNEM7QUFDNUM7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDs7O0FBR0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixZQUFZLE1BQU07QUFDbEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7O0FBR0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7O0FBR0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxTQUFTO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQTs7O0FBR0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQSxrQ0FBa0MsY0FBYztBQUNoRDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnREFBZ0Q7QUFDaEQ7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0EsZ0RBQWdEO0FB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LFlBQVksT0FBTztBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLHNCQUFzQjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEscUNBQXFDOztBQUVyQztBQUNBO0FBQ0E7O0FBRUEsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixVQUFVOzs7QUFHdEMsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGlHQUFpRyxnQkFBZ0IsRUFBRTtBQUNuSDtBQUNBLHVCQUF1QiwyRUFBMkUsa0NBQWtDLG1CQUFtQixHQUFHLEVBQUUsT0FBTyxrQ0FBa0MsOEhBQThILEdBQUcsRUFBRSxxQkFBcUI7O0FBRTdWLGlEQUFpRCwwQ0FBMEMsMERBQTBELEVBQUU7O0FBRXZKLDJDQUEyQyxnQkFBZ0Isa0JBQWtCLE9BQU8sMkJBQTJCLHdEQUF3RCxnQ0FBZ0MsdURBQXVELDJEQUEyRCxFQUFFOztBQUUzVCw2REFBNkQsc0VBQXNFLDhEQUE4RCxvQkFBb0I7O0FBRXJOLGlEQUFpRCwwRUFBMEUsYUFBYSxFQUFFLHFDQUFxQzs7QUFFL0ssdUNBQXVDLHVCQUF1Qix1RkFBdUYsRUFBRSxhQUFhOztBQUVwSyw2QkFBNkIsZ0dBQWdHLGdEQUFnRCxHQUFHLDJCQUEyQjs7QUFFM00sMENBQTBDLCtEQUErRCwyRUFBMkUsRUFBRSx5RUFBeUUsZUFBZSxzREFBc0QsRUFBRSxFQUFFLHVEQUF1RDs7QUFFL1gsZ0NBQWdDLDRFQUE0RSxpQkFBaUIsVUFBVSxHQUFHLDhCQUE4Qjs7O0FBR3hLO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxHQUFHOztBQUVIO0FBQ0EsQ0FBQzs7QUFFRCxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esa0dBQWtHLGlCQUFpQixFQUFFO0FBQ3JIO0FBQ0E7QUFDQTtBQUNBLGlEQUFpRCwwQ0FBMEMsMERBQTBELEVBQUU7O0FBRXZKLDJDQUEyQyxnQkFBZ0Isa0JBQWtCLE9BQU8sMkJBQTJCLHdEQUF3RCxnQ0FBZ0MsdURBQXVELDJEQUEyRCxFQUFFOztBQUUzVCw2REFBNkQsc0VBQXNFLDhEQUE4RCxvQkFBb0I7Ozs7O0FBS3JOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EseUdBQXlHLHdCQUF3QixFQUFFO0FBQ25JO0FBQ0EsdUJBQXVCLDJFQUEyRSxrQ0FBa0MsbUJBQW1CLEdBQUcsRUFBRSxPQUFPLGtDQUFrQyw4SEFBOEgsR0FBRyxFQUFFLHFCQUFxQjs7QUFFN1YsaURBQWlELDBDQUEwQywwREFBMEQsRUFBRTs7QUFFdkosMkNBQTJDLGdCQUFnQixrQkFBa0IsT0FBTywyQkFBMkIsd0RBQXdELGdDQUFnQyx1REFBdUQsMkRBQTJELEVBQUU7O0FBRTNULDZEQUE2RCxzRUFBc0UsOERBQThELG9CQUFvQjs7QUFFck4saURBQWlELDBFQUEwRSxhQUFhLEVBQUUscUNBQXFDOztBQUUvSyx1Q0FBdUMsdUJBQXVCLHVGQUF1RixFQUFFLGFBQWE7O0FBRXBLLDZCQUE2QixnR0FBZ0csZ0RBQWdELEdBQUcsMkJBQTJCOztBQUUzTSwwQ0FBMEMsK0RBQStELDJFQUEyRSxFQUFFLHlFQUF5RSxlQUFlLHNEQUFzRCxFQUFFLEVBQUUsdURBQXVEOztBQUUvWCxnQ0FBZ0MsNEVBQTRFLGlCQUFpQixVQUFVLEdBQUcsOEJBQThCOzs7QUFHeEs7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLEdBQUc7O0FBRUg7QUFDQSxDQUFDOztBQUVELE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx3R0FBd0csdUJBQXVCLEVBQUU7QUFDakk7QUFDQSx1QkFBdUIsMkVBQTJFLGtDQUFrQyxtQkFBbUIsR0FBRyxFQUFFLE9BQU8sa0NBQWtDLDhIQUE4SCxHQUFHLEVBQUUscUJBQXFCOztBQUU3VixpREFBaUQsMENBQTBDLDBEQUEwRCxFQUFFOztBQUV2SiwyQ0FBMkMsZ0JBQWdCLGtCQUFrQixPQUFPLDJCQUEyQix3REFBd0QsZ0NBQWdDLHVEQUF1RCwyREFBMkQsRUFBRTs7QUFFM1QsNkRBQTZELHNFQUFzRSw4REFBOEQsb0JBQW9COztBQUVyTixpREFBaUQsMEVBQTBFLGFBQWEsRUFBRSxxQ0FBcUM7O0FBRS9LLHVDQUF1Qyx1QkFBdUIsdUZBQXVGLEVBQUUsYUFBYTs7QUFFcEssNkJBQTZCLGdHQUFnRyxnREFBZ0QsR0FBRywyQkFBMkI7O0FBRTNNLDBDQUEwQywrREFBK0QsMkVBQTJFLEVBQUUseUVBQXlFLGVBQWUsc0RBQXNELEVBQUUsRUFBRSx1REFBdUQ7O0FBRS9YLGdDQUFnQyw0RUFBNEUsaUJBQWlCLFVBQVUsR0FBRyw4QkFBOEI7OztBQUd4SztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLEdBQUc7O0FBRUg7QUFDQSxDQUFDOztBQUVELE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxnR0FBZ0csZUFBZSxFQUFFO0FBQ2pIO0FBQ0EsdUJBQXVCLDJFQUEyRSxrQ0FBa0MsbUJBQW1CLEdBQUcsRUFBRSxPQUFPLGtDQUFrQyw4SEFBOEgsR0FBRyxFQUFFLHFCQUFxQjs7QUFFN1YsaURBQWlELDBDQUEwQywwREFBMEQsRUFBRTs7QUFFdkosMkNBQTJDLGdCQUFnQixrQkFBa0IsT0FBTywyQkFBMkIsd0RBQXdELGdDQUFnQyx1REFBdUQsMkRBQTJELEVBQUU7O0FBRTNULDZEQUE2RCxzRUFBc0UsOERBQThELG9CQUFvQjs7QUFFck4saURBQWlELDBFQUEwRSxhQUFhLEVBQUUscUNBQXFDOztBQUUvSyx1Q0FBdUMsdUJBQXVCLHVGQUF1RixFQUFFLGFBQWE7O0FBRXBLLDZCQUE2QixnR0FBZ0csZ0RBQWdELEdBQUcsMkJBQTJCOztBQUUzTSwwQ0FBMEMsK0RBQStELDJFQUEyRSxFQUFFLHlFQUF5RSxlQUFlLHNEQUFzRCxFQUFFLEVBQUUsdURBQXVEOztBQUUvWCxnQ0FBZ0MsNEVBQTRFLGlCQUFpQixVQUFVLEdBQUcsOEJBQThCOzs7QUFHeEs7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7O0FBRXpCO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsT0FBTyxFQUFFO0FBQ1Q7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQSxDQUFDOztBQUVELE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSwwR0FBMEcseUJBQXlCLEVBQUU7QUFDckksaURBQWlELDBDQUEwQywwREFBMEQsRUFBRTs7QUFFdkosMkNBQTJDLGdCQUFnQixrQkFBa0IsT0FBTywyQkFBMkIsd0RBQXdELGdDQUFnQyx1REFBdUQsMkRBQTJELEVBQUU7O0FBRTNULDZEQUE2RCxzRUFBc0UsOERBQThELG9CQUFvQjs7QUFFck47QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBOztBQUVBLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxvR0FBb0csbUJBQW1CLEVBQUU7QUFDekg7QUFDQSxpREFBaUQsMENBQTBDLDBEQUEwRCxFQUFFOztBQUV2SiwyQ0FBMkMsZ0JBQWdCLGtCQUFrQixPQUFPLDJCQUEyQix3REFBd0QsZ0NBQWdDLHVEQUF1RCwyREFBMkQsRUFBRTs7QUFFM1QsNkRBQTZELHNFQUFzRSw4REFBOEQsb0JBQW9COzs7QUFHck47QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EscUJBQXFCLGtDQUFrQztBQUN2RDtBQUNBOztBQUVBOztBQUVBO0FBQ0Esd0JBQXdCLHVCQUF1QjtBQUMvQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQSxDQUFDOztBQUVELE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxnR0FBZ0csZUFBZSxFQUFFO0FBQ2pIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBaUQsMENBQTBDLDBEQUEwRCxFQUFFOztBQUV2SiwyQ0FBMkMsZ0JBQWdCLGtCQUFrQixPQUFPLDJCQUEyQix3REFBd0QsZ0NBQWdDLHVEQUF1RCwyREFBMkQsRUFBRTs7QUFFM1QsNkRBQTZELHNFQUFzRSw4REFBOEQsb0JBQW9COzs7Ozs7QUFNck47QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdEQUFnRDtBQUNoRDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsT0FBTztBQUNQO0FBQ0EsT0FBTztBQUNQO0FBQ0EsR0FBRzs7QUFFSDtBQUNBLENBQUM7QUFDRDs7QUFFQSxPQUFPOztBQUVQLFVBQVU7QUFDViwyQ0FBMkMsY0FBYywrajRHOzs7Ozs7Ozs7Ozs7QUN4ckZ6RDtBQUFBO0FBQUE7QUFBZ0Q7O0FBRXpDLHNCQUFzQiw2REFBVTtBQUN2QztBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEM7Ozs7Ozs7Ozs7OztBQy9CQTtBQUFBO0FBQUE7QUFBZ0Q7O0FBRXpDLDhCQUE4Qiw2REFBVTtBQUMvQztBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEM7Ozs7Ozs7Ozs7OztBQ3RDQTtBQUFBO0FBQUE7QUFBZ0Q7O0FBRXpDLDZCQUE2Qiw2REFBVTtBQUM5QztBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxDOzs7Ozs7Ozs7Ozs7QUNyQ0E7QUFBQTtBQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQzs7Ozs7Ozs7Ozs7O0FDeERBO0FBQUE7QUFBQTtBQUFxRDs7QUFFOUM7QUFDUDtBQUNBLDZCQUE2QixtRUFBZ0I7QUFDN0M7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx1QkFBdUIsa0NBQWtDO0FBQ3pEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDJCQUEyQixzQkFBc0I7QUFDakQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDOzs7Ozs7Ozs7Ozs7QUN6REE7QUFBQTtBQUFBO0FBRUFBLE1BQU0sQ0FBQ0MsSUFBUCxHQUFjLElBQUlBLDBDQUFKLENBQVMsc0JBQVQsRUFBaUM7QUFDM0NDLE1BQUksRUFBRSx5QkFEcUM7QUFFM0NDLE1BQUksRUFBRTtBQUNGQyxVQUFNLEVBQUUsTUFETjtBQUVGQyxPQUFHLEVBQUUsbUNBRkg7QUFHRkMsV0FBTyxFQUFFO0FBQ0wsZ0JBQVUsa0JBREw7QUFFTCx1QkFBaUI7QUFGWixLQUhQO0FBT0ZDLFVBQU0sRUFBRTtBQVBOO0FBRnFDLENBQWpDLENBQWQ7QUFhQTs7Ozs7QUFPQTs7Ozs7O0FBTUFQLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZTyxJQUFaLFdBQ0tDLElBREwsQ0FDVSxVQUFDQyxLQUFELEVBQVc7QUFDYkMsU0FBTyxDQUFDQyxHQUFSLENBQVksTUFBWjtBQUNBRCxTQUFPLENBQUNDLEdBQVIsQ0FBWUYsS0FBWjtBQUNILENBSkwsRUFLS0csT0FMTCxDQUthLFVBQUNDLElBQUQsRUFBVTtBQUNmSCxTQUFPLENBQUNDLEdBQVIsQ0FBWSxNQUFaO0FBQ0FELFNBQU8sQ0FBQ0MsR0FBUixDQUFZRSxJQUFaO0FBQ0gsQ0FSTCxFQVNLQyxPQVRMLENBU2EsVUFBQ0QsSUFBRCxFQUFVO0FBQ2ZILFNBQU8sQ0FBQ0MsR0FBUixDQUFZLE1BQVo7QUFDQUQsU0FBTyxDQUFDQyxHQUFSLENBQVlFLElBQVo7QUFDSCxDQVpMLEVBWU9FLE1BWlAsQ0FZYyxZQVpkLEVBWTRCLFVBQUNDLENBQUQsRUFBTztBQUMvQk4sU0FBTyxDQUFDQyxHQUFSLENBQVlLLENBQVo7QUFDSCxDQWRELEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNUJPLElBQU1DLE9BQWI7QUFBQTtBQUFBO0FBQ0ksbUJBQVlDLE1BQVosRUFBb0JDLElBQXBCLEVBQTBCO0FBQUE7O0FBQ3RCLFNBQUtELE1BQUwsR0FBY0EsTUFBZDtBQUNBLFNBQUtDLElBQUwsR0FBWUEsSUFBWjtBQUVBLFNBQUtDLFNBQUw7QUFDSDs7QUFOTDtBQUFBO0FBQUEsZ0NBUWdCO0FBQ1IsV0FBS0MsWUFBTCxHQUFvQixLQUFLSCxNQUFMLENBQVlFLFNBQVosQ0FBc0IsS0FBS0QsSUFBM0IsQ0FBcEI7QUFDSDtBQVZMO0FBQUE7QUFBQSxrQ0FZa0I7QUFDVixXQUFLRCxNQUFMLENBQVlJLFdBQVosQ0FBd0IsS0FBS0gsSUFBN0I7QUFDSDtBQWRMO0FBQUE7QUFBQSwyQkFnQldJLEtBaEJYLEVBZ0JrQkMsUUFoQmxCLEVBZ0I0QjtBQUNwQixXQUFLQyxFQUFMLENBQVFGLEtBQVIsRUFBZUMsUUFBZjtBQUVBLGFBQU8sSUFBUDtBQUNIO0FBcEJMO0FBQUE7QUFBQSxrQ0FzQmtCRCxLQXRCbEIsRUFzQnlCO0FBQ2pCLFdBQUtGLFlBQUwsQ0FBa0JLLE1BQWxCLENBQXlCSCxLQUF6QjtBQUVBLGFBQU8sSUFBUDtBQUNIO0FBMUJMO0FBQUE7QUFBQSx1QkE0Qk9BLEtBNUJQLEVBNEJjQyxRQTVCZCxFQTRCd0I7QUFDaEIsV0FBS0gsWUFBTCxDQUFrQk0sSUFBbEIsQ0FBdUJKLEtBQXZCLEVBQThCQyxRQUE5QjtBQUVBLGFBQU8sSUFBUDtBQUNIO0FBaENMO0FBQUE7QUFBQSw0QkFrQ1lELEtBbENaLEVBa0NtQkssSUFsQ25CLEVBa0N5QjtBQUNqQixXQUFLVixNQUFMLENBQVlXLElBQVosQ0FBaUI7QUFDYkMsZUFBTyxFQUFFLEtBQUtYLElBREQ7QUFFYlMsWUFBSSxFQUFFQSxJQUZPO0FBR2JMLGFBQUssRUFBRSxZQUFZQTtBQUhOLE9BQWpCO0FBTUEsYUFBTyxJQUFQO0FBQ0g7QUExQ0w7QUFBQTtBQUFBLHFDQTRDcUJBLEtBNUNyQixFQTRDNEJDLFFBNUM1QixFQTRDc0M7QUFDOUIsV0FBS0MsRUFBTCxDQUFRLFlBQVlGLEtBQXBCLEVBQTJCQyxRQUEzQjtBQUVBLGFBQU8sSUFBUDtBQUNIO0FBaERMOztBQUFBO0FBQUEsSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUVPLElBQU1PLGFBQWI7QUFBQTtBQUFBO0FBQUE7O0FBRUk7Ozs7QUFJQSx5QkFBWWIsTUFBWixFQUFvQkMsSUFBcEIsRUFBMEI7QUFBQTs7QUFBQSxzRkFDaEJELE1BRGdCLEVBQ1JDLElBRFE7QUFFekI7O0FBUkw7QUFBQSxFQUFtQ0YsZ0RBQW5DLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0ZBO0FBRU8sSUFBTWUscUJBQWI7QUFBQTtBQUFBO0FBQUE7O0FBRUk7Ozs7QUFJQSxpQ0FBWWQsTUFBWixFQUFvQkMsSUFBcEIsRUFBMEI7QUFBQTs7QUFBQSw4RkFDaEJELE1BRGdCLEVBQ1JDLElBRFE7QUFFekI7O0FBUkw7QUFBQTtBQUFBLHlCQVVTSyxRQVZULEVBVW1CO0FBQ1gsVUFBSVMsSUFBSSxHQUFHLFNBQVBBLElBQU8sQ0FBQ2pCLENBQUQsRUFBTztBQUNkUSxnQkFBUSxDQUFDUixDQUFELENBQVI7QUFDSCxPQUZEOztBQUdBLFdBQUtTLEVBQUwsQ0FBUSx3QkFBUixFQUFrQ1EsSUFBbEM7QUFDQSxhQUFPLElBQVA7QUFDSDtBQWhCTDtBQUFBO0FBQUEsNEJBa0JZVCxRQWxCWixFQWtCc0I7QUFDZCxXQUFLQyxFQUFMLENBQVEsY0FBUixFQUF3QkQsUUFBeEI7QUFDQSxhQUFPLElBQVA7QUFDSDtBQXJCTDtBQUFBO0FBQUEsNEJBdUJZQSxRQXZCWixFQXVCc0I7QUFDZCxXQUFLQyxFQUFMLENBQVEsZ0JBQVIsRUFBMEJELFFBQTFCO0FBQ0EsYUFBTyxJQUFQO0FBQ0g7QUExQkw7O0FBQUE7QUFBQSxFQUEyQ1AsZ0RBQTNDLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRkE7QUFFTyxJQUFNaUIsb0JBQWI7QUFBQTtBQUFBO0FBQUE7O0FBRUk7Ozs7QUFJQSxnQ0FBWWhCLE1BQVosRUFBb0JDLElBQXBCLEVBQTBCO0FBQUE7O0FBQUEsNkZBQ2hCRCxNQURnQixFQUNSQyxJQURRO0FBRXpCOztBQVJMO0FBQUEsRUFBMENGLGdEQUExQyxFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRkE7QUFDQTtBQUNBO0FBQ0E7QUFFTyxJQUFNa0IsZUFBYjtBQUFBO0FBQUE7QUFDSSwyQkFBWUMsT0FBWixFQUFxQkMsT0FBckIsRUFBOEI7QUFBQTs7QUFDMUIsU0FBS25CLE1BQUwsR0FBYyxJQUFJb0IsTUFBSixDQUFXRixPQUFYLEVBQW9CQyxPQUFwQixDQUFkO0FBQ0EsU0FBS0UsUUFBTCxHQUFnQixFQUFoQjtBQUNIOztBQUpMO0FBQUE7QUFBQSw0QkFNWVQsUUFOWixFQU1xQjtBQUNiLFVBQUksS0FBS1MsUUFBTCxDQUFjVCxRQUFkLE1BQTJCVSxTQUEvQixFQUEwQztBQUN0QyxhQUFLRCxRQUFMLENBQWNULFFBQWQsSUFBeUIsSUFBSUMscUVBQUosQ0FBa0IsS0FBS2IsTUFBdkIsRUFBK0JZLFFBQS9CLENBQXpCO0FBQ0g7O0FBRUQsYUFBTyxLQUFLUyxRQUFMLENBQWNULFFBQWQsQ0FBUDtBQUNIO0FBWkw7QUFBQTtBQUFBLG1DQWNtQkEsT0FkbkIsRUFjNEI7QUFDcEIsVUFBSSxLQUFLUyxRQUFMLENBQWMsYUFBYVQsT0FBM0IsTUFBd0NVLFNBQTVDLEVBQXVEO0FBQ25ELGFBQUtELFFBQUwsQ0FBYyxhQUFhVCxPQUEzQixJQUFzQyxJQUFJSSxvRkFBSixDQUF5QixLQUFLaEIsTUFBOUIsRUFBc0MsYUFBYVksT0FBbkQsQ0FBdEM7QUFDSDs7QUFDRCxhQUFPLEtBQUtTLFFBQUwsQ0FBYyxhQUFhVCxPQUEzQixDQUFQO0FBQ0g7QUFuQkw7QUFBQTtBQUFBLG9DQXFCb0JBLE9BckJwQixFQXFCNkI7QUFDckIsVUFBSSxLQUFLUyxRQUFMLENBQWMsY0FBY1QsT0FBNUIsTUFBeUNVLFNBQTdDLEVBQXdEO0FBQ3BELGFBQUtELFFBQUwsQ0FBYyxjQUFjVCxPQUE1QixJQUF1QyxJQUFJRSxzRkFBSixDQUEwQixLQUFLZCxNQUEvQixFQUF1QyxjQUFjWSxPQUFyRCxDQUF2QztBQUNIOztBQUNELGFBQU8sS0FBS1MsUUFBTCxDQUFjLGNBQWNULE9BQTVCLENBQVA7QUFDSDtBQTFCTDtBQUFBO0FBQUEsMEJBNEJVWCxJQTVCVixFQTRCZ0I7QUFBQTs7QUFDUixVQUFJb0IsUUFBUSxHQUFHLENBQUNwQixJQUFELEVBQU8sYUFBYUEsSUFBcEIsRUFBMEIsY0FBY0EsSUFBeEMsQ0FBZjtBQUVBb0IsY0FBUSxDQUFDRSxPQUFULENBQWlCLFVBQUN0QixJQUFELEVBQU91QixLQUFQLEVBQWlCO0FBQzlCLFlBQUksS0FBSSxDQUFDSCxRQUFMLENBQWNwQixJQUFkLENBQUosRUFBeUI7QUFDckIsZUFBSSxDQUFDb0IsUUFBTCxDQUFjcEIsSUFBZCxFQUFvQkcsV0FBcEI7O0FBRUEsaUJBQU8sS0FBSSxDQUFDaUIsUUFBTCxDQUFjcEIsSUFBZCxDQUFQO0FBQ0g7QUFDSixPQU5EO0FBT0g7QUF0Q0w7O0FBQUE7QUFBQSxJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNMQTtBQUNBO0FBQ0E7QUFDQTtBQUVPLElBQU1uQixJQUFiO0FBQUE7QUFBQTtBQUNJLGdCQUFZMkMsTUFBWixFQUFvQk4sT0FBcEIsRUFBNkI7QUFBQTs7QUFDekIsU0FBS0EsT0FBTCxHQUFlQSxPQUFmO0FBQ0EsU0FBS08sU0FBTCxHQUFpQixJQUFJVCwyRUFBSixDQUFvQlEsTUFBcEIsRUFBNEIsS0FBS04sT0FBakMsQ0FBakI7QUFDSDs7QUFKTDtBQUFBO0FBQUEsNEJBTVlQLFFBTlosRUFNcUI7QUFDYixhQUFPLEtBQUtjLFNBQUwsQ0FBZWQsT0FBZixDQUF1QkEsUUFBdkIsQ0FBUDtBQUNIO0FBUkw7QUFBQTtBQUFBLDZCQVVZQSxPQVZaLEVBVXFCO0FBQ2IsYUFBTyxLQUFLYyxTQUFMLENBQWVDLGNBQWYsQ0FBOEJmLE9BQTlCLENBQVA7QUFDSDtBQVpMO0FBQUE7QUFBQSx5QkFjU0EsT0FkVCxFQWNrQjtBQUNWLGFBQU8sS0FBS2MsU0FBTCxDQUFlRSxlQUFmLENBQStCaEIsT0FBL0IsQ0FBUDtBQUNIO0FBaEJMO0FBQUE7QUFBQSw4QkFrQmNYLElBbEJkLEVBa0JvQjtBQUNaLFVBQUlBLElBQUksQ0FBQzRCLE9BQUwsQ0FBYSxVQUFiLE1BQTZCLENBQWpDLEVBQW9DO0FBQ2hDLGVBQU8sS0FBS0MsT0FBTCxDQUFhN0IsSUFBYixDQUFQO0FBQ0gsT0FGRCxNQUVPLElBQUlBLElBQUksQ0FBQzRCLE9BQUwsQ0FBYSxXQUFiLE1BQThCLENBQWxDLEVBQXFDO0FBQ3hDLGVBQU8sS0FBS3hDLElBQUwsQ0FBVVksSUFBVixDQUFQO0FBQ0gsT0FGTSxNQUVBO0FBQ0gsZUFBTyxLQUFLVyxPQUFMLENBQWFYLElBQWIsQ0FBUDtBQUNIO0FBQ0o7QUFFRDs7Ozs7QUE1Qko7QUFBQTtBQUFBLDBCQWdDVVcsT0FoQ1YsRUFnQ21CO0FBQ1gsV0FBS2MsU0FBTCxDQUFlSyxLQUFmLENBQXFCbkIsT0FBckI7QUFDSDtBQWxDTDs7QUFBQTtBQUFBO0FBcUNBL0IsTUFBTSxDQUFDQyxJQUFQLEdBQWNBLElBQWQsQyIsImZpbGUiOiJhcHBfYV91c2VyXzEuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9hcHBfYV91c2VyXzEuanNcIik7XG4iLCIvKioqKioqLyAoZnVuY3Rpb24obW9kdWxlcykgeyAvLyB3ZWJwYWNrQm9vdHN0cmFwXG4vKioqKioqLyBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbi8qKioqKiovIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4vKioqKioqLyBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4vKioqKioqLyBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbi8qKioqKiovIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuLyoqKioqKi8gXHRcdH1cbi8qKioqKiovIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuLyoqKioqKi8gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbi8qKioqKiovIFx0XHRcdGk6IG1vZHVsZUlkLFxuLyoqKioqKi8gXHRcdFx0bDogZmFsc2UsXG4vKioqKioqLyBcdFx0XHRleHBvcnRzOiB7fVxuLyoqKioqKi8gXHRcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuLyoqKioqKi8gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4vKioqKioqLyBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuLyoqKioqKi8gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbi8qKioqKiovIFx0fVxuLyoqKioqKi9cbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuLyoqKioqKi8gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbi8qKioqKiovIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuLyoqKioqKi8gXHRcdH1cbi8qKioqKiovIFx0fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuLyoqKioqKi8gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuLyoqKioqKi8gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4vKioqKioqLyBcdFx0fVxuLyoqKioqKi8gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4vKioqKioqLyBcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3Rcbi8qKioqKiovIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4vKioqKioqLyBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuLyoqKioqKi8gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3Rcbi8qKioqKiovIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuLyoqKioqKi8gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuLyoqKioqKi8gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4vKioqKioqLyBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbi8qKioqKiovIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuLyoqKioqKi8gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4vKioqKioqLyBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuLyoqKioqKi8gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbi8qKioqKiovIFx0XHRyZXR1cm4gbnM7XG4vKioqKioqLyBcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbi8qKioqKiovIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbi8qKioqKiovIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4vKioqKioqLyBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuLyoqKioqKi8gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbi8qKioqKiovIFx0XHRyZXR1cm4gZ2V0dGVyO1xuLyoqKioqKi8gXHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG4vKioqKioqL1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vKioqKioqLyBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvcHVzaGVyLmpzXCIpO1xuLyoqKioqKi8gfSlcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqLyAoe1xuXG4vKioqLyBcIi4vbm9kZV9tb2R1bGVzL2F4aW9zL2luZGV4LmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vbm9kZV9tb2R1bGVzL2F4aW9zL2luZGV4LmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cbm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9saWIvYXhpb3MgKi8gXCIuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvYXhpb3MuanNcIik7XG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9hZGFwdGVycy94aHIuanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvYWRhcHRlcnMveGhyLmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cblxudmFyIHV0aWxzID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi8uLi91dGlscyAqLyBcIi4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi91dGlscy5qc1wiKTtcbnZhciBzZXR0bGUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuLy4uL2NvcmUvc2V0dGxlICovIFwiLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvc2V0dGxlLmpzXCIpO1xudmFyIGJ1aWxkVVJMID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi8uLi9oZWxwZXJzL2J1aWxkVVJMICovIFwiLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvYnVpbGRVUkwuanNcIik7XG52YXIgcGFyc2VIZWFkZXJzID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi8uLi9oZWxwZXJzL3BhcnNlSGVhZGVycyAqLyBcIi4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL3BhcnNlSGVhZGVycy5qc1wiKTtcbnZhciBpc1VSTFNhbWVPcmlnaW4gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuLy4uL2hlbHBlcnMvaXNVUkxTYW1lT3JpZ2luICovIFwiLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvaXNVUkxTYW1lT3JpZ2luLmpzXCIpO1xudmFyIGNyZWF0ZUVycm9yID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi4vY29yZS9jcmVhdGVFcnJvciAqLyBcIi4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL2NyZWF0ZUVycm9yLmpzXCIpO1xudmFyIGJ0b2EgPSAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93LmJ0b2EgJiYgd2luZG93LmJ0b2EuYmluZCh3aW5kb3cpKSB8fCBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuLy4uL2hlbHBlcnMvYnRvYSAqLyBcIi4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2J0b2EuanNcIik7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24geGhyQWRhcHRlcihjb25maWcpIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIGRpc3BhdGNoWGhyUmVxdWVzdChyZXNvbHZlLCByZWplY3QpIHtcbiAgICB2YXIgcmVxdWVzdERhdGEgPSBjb25maWcuZGF0YTtcbiAgICB2YXIgcmVxdWVzdEhlYWRlcnMgPSBjb25maWcuaGVhZGVycztcblxuICAgIGlmICh1dGlscy5pc0Zvcm1EYXRhKHJlcXVlc3REYXRhKSkge1xuICAgICAgZGVsZXRlIHJlcXVlc3RIZWFkZXJzWydDb250ZW50LVR5cGUnXTsgLy8gTGV0IHRoZSBicm93c2VyIHNldCBpdFxuICAgIH1cblxuICAgIHZhciByZXF1ZXN0ID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgdmFyIGxvYWRFdmVudCA9ICdvbnJlYWR5c3RhdGVjaGFuZ2UnO1xuICAgIHZhciB4RG9tYWluID0gZmFsc2U7XG5cbiAgICAvLyBGb3IgSUUgOC85IENPUlMgc3VwcG9ydFxuICAgIC8vIE9ubHkgc3VwcG9ydHMgUE9TVCBhbmQgR0VUIGNhbGxzIGFuZCBkb2Vzbid0IHJldHVybnMgdGhlIHJlc3BvbnNlIGhlYWRlcnMuXG4gICAgLy8gRE9OJ1QgZG8gdGhpcyBmb3IgdGVzdGluZyBiL2MgWE1MSHR0cFJlcXVlc3QgaXMgbW9ja2VkLCBub3QgWERvbWFpblJlcXVlc3QuXG4gICAgaWYgKFwiZGV2ZWxvcG1lbnRcIiAhPT0gJ3Rlc3QnICYmXG4gICAgICAgIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmXG4gICAgICAgIHdpbmRvdy5YRG9tYWluUmVxdWVzdCAmJiAhKCd3aXRoQ3JlZGVudGlhbHMnIGluIHJlcXVlc3QpICYmXG4gICAgICAgICFpc1VSTFNhbWVPcmlnaW4oY29uZmlnLnVybCkpIHtcbiAgICAgIHJlcXVlc3QgPSBuZXcgd2luZG93LlhEb21haW5SZXF1ZXN0KCk7XG4gICAgICBsb2FkRXZlbnQgPSAnb25sb2FkJztcbiAgICAgIHhEb21haW4gPSB0cnVlO1xuICAgICAgcmVxdWVzdC5vbnByb2dyZXNzID0gZnVuY3Rpb24gaGFuZGxlUHJvZ3Jlc3MoKSB7fTtcbiAgICAgIHJlcXVlc3Qub250aW1lb3V0ID0gZnVuY3Rpb24gaGFuZGxlVGltZW91dCgpIHt9O1xuICAgIH1cblxuICAgIC8vIEhUVFAgYmFzaWMgYXV0aGVudGljYXRpb25cbiAgICBpZiAoY29uZmlnLmF1dGgpIHtcbiAgICAgIHZhciB1c2VybmFtZSA9IGNvbmZpZy5hdXRoLnVzZXJuYW1lIHx8ICcnO1xuICAgICAgdmFyIHBhc3N3b3JkID0gY29uZmlnLmF1dGgucGFzc3dvcmQgfHwgJyc7XG4gICAgICByZXF1ZXN0SGVhZGVycy5BdXRob3JpemF0aW9uID0gJ0Jhc2ljICcgKyBidG9hKHVzZXJuYW1lICsgJzonICsgcGFzc3dvcmQpO1xuICAgIH1cblxuICAgIHJlcXVlc3Qub3Blbihjb25maWcubWV0aG9kLnRvVXBwZXJDYXNlKCksIGJ1aWxkVVJMKGNvbmZpZy51cmwsIGNvbmZpZy5wYXJhbXMsIGNvbmZpZy5wYXJhbXNTZXJpYWxpemVyKSwgdHJ1ZSk7XG5cbiAgICAvLyBTZXQgdGhlIHJlcXVlc3QgdGltZW91dCBpbiBNU1xuICAgIHJlcXVlc3QudGltZW91dCA9IGNvbmZpZy50aW1lb3V0O1xuXG4gICAgLy8gTGlzdGVuIGZvciByZWFkeSBzdGF0ZVxuICAgIHJlcXVlc3RbbG9hZEV2ZW50XSA9IGZ1bmN0aW9uIGhhbmRsZUxvYWQoKSB7XG4gICAgICBpZiAoIXJlcXVlc3QgfHwgKHJlcXVlc3QucmVhZHlTdGF0ZSAhPT0gNCAmJiAheERvbWFpbikpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICAvLyBUaGUgcmVxdWVzdCBlcnJvcmVkIG91dCBhbmQgd2UgZGlkbid0IGdldCBhIHJlc3BvbnNlLCB0aGlzIHdpbGwgYmVcbiAgICAgIC8vIGhhbmRsZWQgYnkgb25lcnJvciBpbnN0ZWFkXG4gICAgICAvLyBXaXRoIG9uZSBleGNlcHRpb246IHJlcXVlc3QgdGhhdCB1c2luZyBmaWxlOiBwcm90b2NvbCwgbW9zdCBicm93c2Vyc1xuICAgICAgLy8gd2lsbCByZXR1cm4gc3RhdHVzIGFzIDAgZXZlbiB0aG91Z2ggaXQncyBhIHN1Y2Nlc3NmdWwgcmVxdWVzdFxuICAgICAgaWYgKHJlcXVlc3Quc3RhdHVzID09PSAwICYmICEocmVxdWVzdC5yZXNwb25zZVVSTCAmJiByZXF1ZXN0LnJlc3BvbnNlVVJMLmluZGV4T2YoJ2ZpbGU6JykgPT09IDApKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgLy8gUHJlcGFyZSB0aGUgcmVzcG9uc2VcbiAgICAgIHZhciByZXNwb25zZUhlYWRlcnMgPSAnZ2V0QWxsUmVzcG9uc2VIZWFkZXJzJyBpbiByZXF1ZXN0ID8gcGFyc2VIZWFkZXJzKHJlcXVlc3QuZ2V0QWxsUmVzcG9uc2VIZWFkZXJzKCkpIDogbnVsbDtcbiAgICAgIHZhciByZXNwb25zZURhdGEgPSAhY29uZmlnLnJlc3BvbnNlVHlwZSB8fCBjb25maWcucmVzcG9uc2VUeXBlID09PSAndGV4dCcgPyByZXF1ZXN0LnJlc3BvbnNlVGV4dCA6IHJlcXVlc3QucmVzcG9uc2U7XG4gICAgICB2YXIgcmVzcG9uc2UgPSB7XG4gICAgICAgIGRhdGE6IHJlc3BvbnNlRGF0YSxcbiAgICAgICAgLy8gSUUgc2VuZHMgMTIyMyBpbnN0ZWFkIG9mIDIwNCAoaHR0cHM6Ly9naXRodWIuY29tL2F4aW9zL2F4aW9zL2lzc3Vlcy8yMDEpXG4gICAgICAgIHN0YXR1czogcmVxdWVzdC5zdGF0dXMgPT09IDEyMjMgPyAyMDQgOiByZXF1ZXN0LnN0YXR1cyxcbiAgICAgICAgc3RhdHVzVGV4dDogcmVxdWVzdC5zdGF0dXMgPT09IDEyMjMgPyAnTm8gQ29udGVudCcgOiByZXF1ZXN0LnN0YXR1c1RleHQsXG4gICAgICAgIGhlYWRlcnM6IHJlc3BvbnNlSGVhZGVycyxcbiAgICAgICAgY29uZmlnOiBjb25maWcsXG4gICAgICAgIHJlcXVlc3Q6IHJlcXVlc3RcbiAgICAgIH07XG5cbiAgICAgIHNldHRsZShyZXNvbHZlLCByZWplY3QsIHJlc3BvbnNlKTtcblxuICAgICAgLy8gQ2xlYW4gdXAgcmVxdWVzdFxuICAgICAgcmVxdWVzdCA9IG51bGw7XG4gICAgfTtcblxuICAgIC8vIEhhbmRsZSBsb3cgbGV2ZWwgbmV0d29yayBlcnJvcnNcbiAgICByZXF1ZXN0Lm9uZXJyb3IgPSBmdW5jdGlvbiBoYW5kbGVFcnJvcigpIHtcbiAgICAgIC8vIFJlYWwgZXJyb3JzIGFyZSBoaWRkZW4gZnJvbSB1cyBieSB0aGUgYnJvd3NlclxuICAgICAgLy8gb25lcnJvciBzaG91bGQgb25seSBmaXJlIGlmIGl0J3MgYSBuZXR3b3JrIGVycm9yXG4gICAgICByZWplY3QoY3JlYXRlRXJyb3IoJ05ldHdvcmsgRXJyb3InLCBjb25maWcsIG51bGwsIHJlcXVlc3QpKTtcblxuICAgICAgLy8gQ2xlYW4gdXAgcmVxdWVzdFxuICAgICAgcmVxdWVzdCA9IG51bGw7XG4gICAgfTtcblxuICAgIC8vIEhhbmRsZSB0aW1lb3V0XG4gICAgcmVxdWVzdC5vbnRpbWVvdXQgPSBmdW5jdGlvbiBoYW5kbGVUaW1lb3V0KCkge1xuICAgICAgcmVqZWN0KGNyZWF0ZUVycm9yKCd0aW1lb3V0IG9mICcgKyBjb25maWcudGltZW91dCArICdtcyBleGNlZWRlZCcsIGNvbmZpZywgJ0VDT05OQUJPUlRFRCcsXG4gICAgICAgIHJlcXVlc3QpKTtcblxuICAgICAgLy8gQ2xlYW4gdXAgcmVxdWVzdFxuICAgICAgcmVxdWVzdCA9IG51bGw7XG4gICAgfTtcblxuICAgIC8vIEFkZCB4c3JmIGhlYWRlclxuICAgIC8vIFRoaXMgaXMgb25seSBkb25lIGlmIHJ1bm5pbmcgaW4gYSBzdGFuZGFyZCBicm93c2VyIGVudmlyb25tZW50LlxuICAgIC8vIFNwZWNpZmljYWxseSBub3QgaWYgd2UncmUgaW4gYSB3ZWIgd29ya2VyLCBvciByZWFjdC1uYXRpdmUuXG4gICAgaWYgKHV0aWxzLmlzU3RhbmRhcmRCcm93c2VyRW52KCkpIHtcbiAgICAgIHZhciBjb29raWVzID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi8uLi9oZWxwZXJzL2Nvb2tpZXMgKi8gXCIuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9jb29raWVzLmpzXCIpO1xuXG4gICAgICAvLyBBZGQgeHNyZiBoZWFkZXJcbiAgICAgIHZhciB4c3JmVmFsdWUgPSAoY29uZmlnLndpdGhDcmVkZW50aWFscyB8fCBpc1VSTFNhbWVPcmlnaW4oY29uZmlnLnVybCkpICYmIGNvbmZpZy54c3JmQ29va2llTmFtZSA/XG4gICAgICAgICAgY29va2llcy5yZWFkKGNvbmZpZy54c3JmQ29va2llTmFtZSkgOlxuICAgICAgICAgIHVuZGVmaW5lZDtcblxuICAgICAgaWYgKHhzcmZWYWx1ZSkge1xuICAgICAgICByZXF1ZXN0SGVhZGVyc1tjb25maWcueHNyZkhlYWRlck5hbWVdID0geHNyZlZhbHVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIEFkZCBoZWFkZXJzIHRvIHRoZSByZXF1ZXN0XG4gICAgaWYgKCdzZXRSZXF1ZXN0SGVhZGVyJyBpbiByZXF1ZXN0KSB7XG4gICAgICB1dGlscy5mb3JFYWNoKHJlcXVlc3RIZWFkZXJzLCBmdW5jdGlvbiBzZXRSZXF1ZXN0SGVhZGVyKHZhbCwga2V5KSB7XG4gICAgICAgIGlmICh0eXBlb2YgcmVxdWVzdERhdGEgPT09ICd1bmRlZmluZWQnICYmIGtleS50b0xvd2VyQ2FzZSgpID09PSAnY29udGVudC10eXBlJykge1xuICAgICAgICAgIC8vIFJlbW92ZSBDb250ZW50LVR5cGUgaWYgZGF0YSBpcyB1bmRlZmluZWRcbiAgICAgICAgICBkZWxldGUgcmVxdWVzdEhlYWRlcnNba2V5XTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBPdGhlcndpc2UgYWRkIGhlYWRlciB0byB0aGUgcmVxdWVzdFxuICAgICAgICAgIHJlcXVlc3Quc2V0UmVxdWVzdEhlYWRlcihrZXksIHZhbCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIEFkZCB3aXRoQ3JlZGVudGlhbHMgdG8gcmVxdWVzdCBpZiBuZWVkZWRcbiAgICBpZiAoY29uZmlnLndpdGhDcmVkZW50aWFscykge1xuICAgICAgcmVxdWVzdC53aXRoQ3JlZGVudGlhbHMgPSB0cnVlO1xuICAgIH1cblxuICAgIC8vIEFkZCByZXNwb25zZVR5cGUgdG8gcmVxdWVzdCBpZiBuZWVkZWRcbiAgICBpZiAoY29uZmlnLnJlc3BvbnNlVHlwZSkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgcmVxdWVzdC5yZXNwb25zZVR5cGUgPSBjb25maWcucmVzcG9uc2VUeXBlO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBFeHBlY3RlZCBET01FeGNlcHRpb24gdGhyb3duIGJ5IGJyb3dzZXJzIG5vdCBjb21wYXRpYmxlIFhNTEh0dHBSZXF1ZXN0IExldmVsIDIuXG4gICAgICAgIC8vIEJ1dCwgdGhpcyBjYW4gYmUgc3VwcHJlc3NlZCBmb3IgJ2pzb24nIHR5cGUgYXMgaXQgY2FuIGJlIHBhcnNlZCBieSBkZWZhdWx0ICd0cmFuc2Zvcm1SZXNwb25zZScgZnVuY3Rpb24uXG4gICAgICAgIGlmIChjb25maWcucmVzcG9uc2VUeXBlICE9PSAnanNvbicpIHtcbiAgICAgICAgICB0aHJvdyBlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gSGFuZGxlIHByb2dyZXNzIGlmIG5lZWRlZFxuICAgIGlmICh0eXBlb2YgY29uZmlnLm9uRG93bmxvYWRQcm9ncmVzcyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcmVxdWVzdC5hZGRFdmVudExpc3RlbmVyKCdwcm9ncmVzcycsIGNvbmZpZy5vbkRvd25sb2FkUHJvZ3Jlc3MpO1xuICAgIH1cblxuICAgIC8vIE5vdCBhbGwgYnJvd3NlcnMgc3VwcG9ydCB1cGxvYWQgZXZlbnRzXG4gICAgaWYgKHR5cGVvZiBjb25maWcub25VcGxvYWRQcm9ncmVzcyA9PT0gJ2Z1bmN0aW9uJyAmJiByZXF1ZXN0LnVwbG9hZCkge1xuICAgICAgcmVxdWVzdC51cGxvYWQuYWRkRXZlbnRMaXN0ZW5lcigncHJvZ3Jlc3MnLCBjb25maWcub25VcGxvYWRQcm9ncmVzcyk7XG4gICAgfVxuXG4gICAgaWYgKGNvbmZpZy5jYW5jZWxUb2tlbikge1xuICAgICAgLy8gSGFuZGxlIGNhbmNlbGxhdGlvblxuICAgICAgY29uZmlnLmNhbmNlbFRva2VuLnByb21pc2UudGhlbihmdW5jdGlvbiBvbkNhbmNlbGVkKGNhbmNlbCkge1xuICAgICAgICBpZiAoIXJlcXVlc3QpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICByZXF1ZXN0LmFib3J0KCk7XG4gICAgICAgIHJlamVjdChjYW5jZWwpO1xuICAgICAgICAvLyBDbGVhbiB1cCByZXF1ZXN0XG4gICAgICAgIHJlcXVlc3QgPSBudWxsO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKHJlcXVlc3REYXRhID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJlcXVlc3REYXRhID0gbnVsbDtcbiAgICB9XG5cbiAgICAvLyBTZW5kIHRoZSByZXF1ZXN0XG4gICAgcmVxdWVzdC5zZW5kKHJlcXVlc3REYXRhKTtcbiAgfSk7XG59O1xuXG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9heGlvcy5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2F4aW9zLmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG52YXIgdXRpbHMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL3V0aWxzICovIFwiLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL3V0aWxzLmpzXCIpO1xudmFyIGJpbmQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL2hlbHBlcnMvYmluZCAqLyBcIi4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2JpbmQuanNcIik7XG52YXIgQXhpb3MgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL2NvcmUvQXhpb3MgKi8gXCIuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9BeGlvcy5qc1wiKTtcbnZhciBkZWZhdWx0cyA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vZGVmYXVsdHMgKi8gXCIuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvZGVmYXVsdHMuanNcIik7XG5cbi8qKlxuICogQ3JlYXRlIGFuIGluc3RhbmNlIG9mIEF4aW9zXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGRlZmF1bHRDb25maWcgVGhlIGRlZmF1bHQgY29uZmlnIGZvciB0aGUgaW5zdGFuY2VcbiAqIEByZXR1cm4ge0F4aW9zfSBBIG5ldyBpbnN0YW5jZSBvZiBBeGlvc1xuICovXG5mdW5jdGlvbiBjcmVhdGVJbnN0YW5jZShkZWZhdWx0Q29uZmlnKSB7XG4gIHZhciBjb250ZXh0ID0gbmV3IEF4aW9zKGRlZmF1bHRDb25maWcpO1xuICB2YXIgaW5zdGFuY2UgPSBiaW5kKEF4aW9zLnByb3RvdHlwZS5yZXF1ZXN0LCBjb250ZXh0KTtcblxuICAvLyBDb3B5IGF4aW9zLnByb3RvdHlwZSB0byBpbnN0YW5jZVxuICB1dGlscy5leHRlbmQoaW5zdGFuY2UsIEF4aW9zLnByb3RvdHlwZSwgY29udGV4dCk7XG5cbiAgLy8gQ29weSBjb250ZXh0IHRvIGluc3RhbmNlXG4gIHV0aWxzLmV4dGVuZChpbnN0YW5jZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIGluc3RhbmNlO1xufVxuXG4vLyBDcmVhdGUgdGhlIGRlZmF1bHQgaW5zdGFuY2UgdG8gYmUgZXhwb3J0ZWRcbnZhciBheGlvcyA9IGNyZWF0ZUluc3RhbmNlKGRlZmF1bHRzKTtcblxuLy8gRXhwb3NlIEF4aW9zIGNsYXNzIHRvIGFsbG93IGNsYXNzIGluaGVyaXRhbmNlXG5heGlvcy5BeGlvcyA9IEF4aW9zO1xuXG4vLyBGYWN0b3J5IGZvciBjcmVhdGluZyBuZXcgaW5zdGFuY2VzXG5heGlvcy5jcmVhdGUgPSBmdW5jdGlvbiBjcmVhdGUoaW5zdGFuY2VDb25maWcpIHtcbiAgcmV0dXJuIGNyZWF0ZUluc3RhbmNlKHV0aWxzLm1lcmdlKGRlZmF1bHRzLCBpbnN0YW5jZUNvbmZpZykpO1xufTtcblxuLy8gRXhwb3NlIENhbmNlbCAmIENhbmNlbFRva2VuXG5heGlvcy5DYW5jZWwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL2NhbmNlbC9DYW5jZWwgKi8gXCIuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY2FuY2VsL0NhbmNlbC5qc1wiKTtcbmF4aW9zLkNhbmNlbFRva2VuID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9jYW5jZWwvQ2FuY2VsVG9rZW4gKi8gXCIuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY2FuY2VsL0NhbmNlbFRva2VuLmpzXCIpO1xuYXhpb3MuaXNDYW5jZWwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL2NhbmNlbC9pc0NhbmNlbCAqLyBcIi4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jYW5jZWwvaXNDYW5jZWwuanNcIik7XG5cbi8vIEV4cG9zZSBhbGwvc3ByZWFkXG5heGlvcy5hbGwgPSBmdW5jdGlvbiBhbGwocHJvbWlzZXMpIHtcbiAgcmV0dXJuIFByb21pc2UuYWxsKHByb21pc2VzKTtcbn07XG5heGlvcy5zcHJlYWQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL2hlbHBlcnMvc3ByZWFkICovIFwiLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvc3ByZWFkLmpzXCIpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGF4aW9zO1xuXG4vLyBBbGxvdyB1c2Ugb2YgZGVmYXVsdCBpbXBvcnQgc3ludGF4IGluIFR5cGVTY3JpcHRcbm1vZHVsZS5leHBvcnRzLmRlZmF1bHQgPSBheGlvcztcblxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY2FuY2VsL0NhbmNlbC5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY2FuY2VsL0NhbmNlbC5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG4vKipcbiAqIEEgYENhbmNlbGAgaXMgYW4gb2JqZWN0IHRoYXQgaXMgdGhyb3duIHdoZW4gYW4gb3BlcmF0aW9uIGlzIGNhbmNlbGVkLlxuICpcbiAqIEBjbGFzc1xuICogQHBhcmFtIHtzdHJpbmc9fSBtZXNzYWdlIFRoZSBtZXNzYWdlLlxuICovXG5mdW5jdGlvbiBDYW5jZWwobWVzc2FnZSkge1xuICB0aGlzLm1lc3NhZ2UgPSBtZXNzYWdlO1xufVxuXG5DYW5jZWwucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gIHJldHVybiAnQ2FuY2VsJyArICh0aGlzLm1lc3NhZ2UgPyAnOiAnICsgdGhpcy5tZXNzYWdlIDogJycpO1xufTtcblxuQ2FuY2VsLnByb3RvdHlwZS5fX0NBTkNFTF9fID0gdHJ1ZTtcblxubW9kdWxlLmV4cG9ydHMgPSBDYW5jZWw7XG5cblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NhbmNlbC9DYW5jZWxUb2tlbi5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jYW5jZWwvQ2FuY2VsVG9rZW4uanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG52YXIgQ2FuY2VsID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9DYW5jZWwgKi8gXCIuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY2FuY2VsL0NhbmNlbC5qc1wiKTtcblxuLyoqXG4gKiBBIGBDYW5jZWxUb2tlbmAgaXMgYW4gb2JqZWN0IHRoYXQgY2FuIGJlIHVzZWQgdG8gcmVxdWVzdCBjYW5jZWxsYXRpb24gb2YgYW4gb3BlcmF0aW9uLlxuICpcbiAqIEBjbGFzc1xuICogQHBhcmFtIHtGdW5jdGlvbn0gZXhlY3V0b3IgVGhlIGV4ZWN1dG9yIGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiBDYW5jZWxUb2tlbihleGVjdXRvcikge1xuICBpZiAodHlwZW9mIGV4ZWN1dG9yICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignZXhlY3V0b3IgbXVzdCBiZSBhIGZ1bmN0aW9uLicpO1xuICB9XG5cbiAgdmFyIHJlc29sdmVQcm9taXNlO1xuICB0aGlzLnByb21pc2UgPSBuZXcgUHJvbWlzZShmdW5jdGlvbiBwcm9taXNlRXhlY3V0b3IocmVzb2x2ZSkge1xuICAgIHJlc29sdmVQcm9taXNlID0gcmVzb2x2ZTtcbiAgfSk7XG5cbiAgdmFyIHRva2VuID0gdGhpcztcbiAgZXhlY3V0b3IoZnVuY3Rpb24gY2FuY2VsKG1lc3NhZ2UpIHtcbiAgICBpZiAodG9rZW4ucmVhc29uKSB7XG4gICAgICAvLyBDYW5jZWxsYXRpb24gaGFzIGFscmVhZHkgYmVlbiByZXF1ZXN0ZWRcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0b2tlbi5yZWFzb24gPSBuZXcgQ2FuY2VsKG1lc3NhZ2UpO1xuICAgIHJlc29sdmVQcm9taXNlKHRva2VuLnJlYXNvbik7XG4gIH0pO1xufVxuXG4vKipcbiAqIFRocm93cyBhIGBDYW5jZWxgIGlmIGNhbmNlbGxhdGlvbiBoYXMgYmVlbiByZXF1ZXN0ZWQuXG4gKi9cbkNhbmNlbFRva2VuLnByb3RvdHlwZS50aHJvd0lmUmVxdWVzdGVkID0gZnVuY3Rpb24gdGhyb3dJZlJlcXVlc3RlZCgpIHtcbiAgaWYgKHRoaXMucmVhc29uKSB7XG4gICAgdGhyb3cgdGhpcy5yZWFzb247XG4gIH1cbn07XG5cbi8qKlxuICogUmV0dXJucyBhbiBvYmplY3QgdGhhdCBjb250YWlucyBhIG5ldyBgQ2FuY2VsVG9rZW5gIGFuZCBhIGZ1bmN0aW9uIHRoYXQsIHdoZW4gY2FsbGVkLFxuICogY2FuY2VscyB0aGUgYENhbmNlbFRva2VuYC5cbiAqL1xuQ2FuY2VsVG9rZW4uc291cmNlID0gZnVuY3Rpb24gc291cmNlKCkge1xuICB2YXIgY2FuY2VsO1xuICB2YXIgdG9rZW4gPSBuZXcgQ2FuY2VsVG9rZW4oZnVuY3Rpb24gZXhlY3V0b3IoYykge1xuICAgIGNhbmNlbCA9IGM7XG4gIH0pO1xuICByZXR1cm4ge1xuICAgIHRva2VuOiB0b2tlbixcbiAgICBjYW5jZWw6IGNhbmNlbFxuICB9O1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBDYW5jZWxUb2tlbjtcblxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY2FuY2VsL2lzQ2FuY2VsLmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NhbmNlbC9pc0NhbmNlbC5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaXNDYW5jZWwodmFsdWUpIHtcbiAgcmV0dXJuICEhKHZhbHVlICYmIHZhbHVlLl9fQ0FOQ0VMX18pO1xufTtcblxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9BeGlvcy5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9BeGlvcy5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG52YXIgZGVmYXVsdHMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuLy4uL2RlZmF1bHRzICovIFwiLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2RlZmF1bHRzLmpzXCIpO1xudmFyIHV0aWxzID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi8uLi91dGlscyAqLyBcIi4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi91dGlscy5qc1wiKTtcbnZhciBJbnRlcmNlcHRvck1hbmFnZXIgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL0ludGVyY2VwdG9yTWFuYWdlciAqLyBcIi4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL0ludGVyY2VwdG9yTWFuYWdlci5qc1wiKTtcbnZhciBkaXNwYXRjaFJlcXVlc3QgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL2Rpc3BhdGNoUmVxdWVzdCAqLyBcIi4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL2Rpc3BhdGNoUmVxdWVzdC5qc1wiKTtcblxuLyoqXG4gKiBDcmVhdGUgYSBuZXcgaW5zdGFuY2Ugb2YgQXhpb3NcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gaW5zdGFuY2VDb25maWcgVGhlIGRlZmF1bHQgY29uZmlnIGZvciB0aGUgaW5zdGFuY2VcbiAqL1xuZnVuY3Rpb24gQXhpb3MoaW5zdGFuY2VDb25maWcpIHtcbiAgdGhpcy5kZWZhdWx0cyA9IGluc3RhbmNlQ29uZmlnO1xuICB0aGlzLmludGVyY2VwdG9ycyA9IHtcbiAgICByZXF1ZXN0OiBuZXcgSW50ZXJjZXB0b3JNYW5hZ2VyKCksXG4gICAgcmVzcG9uc2U6IG5ldyBJbnRlcmNlcHRvck1hbmFnZXIoKVxuICB9O1xufVxuXG4vKipcbiAqIERpc3BhdGNoIGEgcmVxdWVzdFxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWcgVGhlIGNvbmZpZyBzcGVjaWZpYyBmb3IgdGhpcyByZXF1ZXN0IChtZXJnZWQgd2l0aCB0aGlzLmRlZmF1bHRzKVxuICovXG5BeGlvcy5wcm90b3R5cGUucmVxdWVzdCA9IGZ1bmN0aW9uIHJlcXVlc3QoY29uZmlnKSB7XG4gIC8qZXNsaW50IG5vLXBhcmFtLXJlYXNzaWduOjAqL1xuICAvLyBBbGxvdyBmb3IgYXhpb3MoJ2V4YW1wbGUvdXJsJ1ssIGNvbmZpZ10pIGEgbGEgZmV0Y2ggQVBJXG4gIGlmICh0eXBlb2YgY29uZmlnID09PSAnc3RyaW5nJykge1xuICAgIGNvbmZpZyA9IHV0aWxzLm1lcmdlKHtcbiAgICAgIHVybDogYXJndW1lbnRzWzBdXG4gICAgfSwgYXJndW1lbnRzWzFdKTtcbiAgfVxuXG4gIGNvbmZpZyA9IHV0aWxzLm1lcmdlKGRlZmF1bHRzLCB7bWV0aG9kOiAnZ2V0J30sIHRoaXMuZGVmYXVsdHMsIGNvbmZpZyk7XG4gIGNvbmZpZy5tZXRob2QgPSBjb25maWcubWV0aG9kLnRvTG93ZXJDYXNlKCk7XG5cbiAgLy8gSG9vayB1cCBpbnRlcmNlcHRvcnMgbWlkZGxld2FyZVxuICB2YXIgY2hhaW4gPSBbZGlzcGF0Y2hSZXF1ZXN0LCB1bmRlZmluZWRdO1xuICB2YXIgcHJvbWlzZSA9IFByb21pc2UucmVzb2x2ZShjb25maWcpO1xuXG4gIHRoaXMuaW50ZXJjZXB0b3JzLnJlcXVlc3QuZm9yRWFjaChmdW5jdGlvbiB1bnNoaWZ0UmVxdWVzdEludGVyY2VwdG9ycyhpbnRlcmNlcHRvcikge1xuICAgIGNoYWluLnVuc2hpZnQoaW50ZXJjZXB0b3IuZnVsZmlsbGVkLCBpbnRlcmNlcHRvci5yZWplY3RlZCk7XG4gIH0pO1xuXG4gIHRoaXMuaW50ZXJjZXB0b3JzLnJlc3BvbnNlLmZvckVhY2goZnVuY3Rpb24gcHVzaFJlc3BvbnNlSW50ZXJjZXB0b3JzKGludGVyY2VwdG9yKSB7XG4gICAgY2hhaW4ucHVzaChpbnRlcmNlcHRvci5mdWxmaWxsZWQsIGludGVyY2VwdG9yLnJlamVjdGVkKTtcbiAgfSk7XG5cbiAgd2hpbGUgKGNoYWluLmxlbmd0aCkge1xuICAgIHByb21pc2UgPSBwcm9taXNlLnRoZW4oY2hhaW4uc2hpZnQoKSwgY2hhaW4uc2hpZnQoKSk7XG4gIH1cblxuICByZXR1cm4gcHJvbWlzZTtcbn07XG5cbi8vIFByb3ZpZGUgYWxpYXNlcyBmb3Igc3VwcG9ydGVkIHJlcXVlc3QgbWV0aG9kc1xudXRpbHMuZm9yRWFjaChbJ2RlbGV0ZScsICdnZXQnLCAnaGVhZCcsICdvcHRpb25zJ10sIGZ1bmN0aW9uIGZvckVhY2hNZXRob2ROb0RhdGEobWV0aG9kKSB7XG4gIC8qZXNsaW50IGZ1bmMtbmFtZXM6MCovXG4gIEF4aW9zLnByb3RvdHlwZVttZXRob2RdID0gZnVuY3Rpb24odXJsLCBjb25maWcpIHtcbiAgICByZXR1cm4gdGhpcy5yZXF1ZXN0KHV0aWxzLm1lcmdlKGNvbmZpZyB8fCB7fSwge1xuICAgICAgbWV0aG9kOiBtZXRob2QsXG4gICAgICB1cmw6IHVybFxuICAgIH0pKTtcbiAgfTtcbn0pO1xuXG51dGlscy5mb3JFYWNoKFsncG9zdCcsICdwdXQnLCAncGF0Y2gnXSwgZnVuY3Rpb24gZm9yRWFjaE1ldGhvZFdpdGhEYXRhKG1ldGhvZCkge1xuICAvKmVzbGludCBmdW5jLW5hbWVzOjAqL1xuICBBeGlvcy5wcm90b3R5cGVbbWV0aG9kXSA9IGZ1bmN0aW9uKHVybCwgZGF0YSwgY29uZmlnKSB7XG4gICAgcmV0dXJuIHRoaXMucmVxdWVzdCh1dGlscy5tZXJnZShjb25maWcgfHwge30sIHtcbiAgICAgIG1ldGhvZDogbWV0aG9kLFxuICAgICAgdXJsOiB1cmwsXG4gICAgICBkYXRhOiBkYXRhXG4gICAgfSkpO1xuICB9O1xufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gQXhpb3M7XG5cblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvSW50ZXJjZXB0b3JNYW5hZ2VyLmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9JbnRlcmNlcHRvck1hbmFnZXIuanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5cbnZhciB1dGlscyA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vLi4vdXRpbHMgKi8gXCIuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvdXRpbHMuanNcIik7XG5cbmZ1bmN0aW9uIEludGVyY2VwdG9yTWFuYWdlcigpIHtcbiAgdGhpcy5oYW5kbGVycyA9IFtdO1xufVxuXG4vKipcbiAqIEFkZCBhIG5ldyBpbnRlcmNlcHRvciB0byB0aGUgc3RhY2tcbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdWxmaWxsZWQgVGhlIGZ1bmN0aW9uIHRvIGhhbmRsZSBgdGhlbmAgZm9yIGEgYFByb21pc2VgXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSByZWplY3RlZCBUaGUgZnVuY3Rpb24gdG8gaGFuZGxlIGByZWplY3RgIGZvciBhIGBQcm9taXNlYFxuICpcbiAqIEByZXR1cm4ge051bWJlcn0gQW4gSUQgdXNlZCB0byByZW1vdmUgaW50ZXJjZXB0b3IgbGF0ZXJcbiAqL1xuSW50ZXJjZXB0b3JNYW5hZ2VyLnByb3RvdHlwZS51c2UgPSBmdW5jdGlvbiB1c2UoZnVsZmlsbGVkLCByZWplY3RlZCkge1xuICB0aGlzLmhhbmRsZXJzLnB1c2goe1xuICAgIGZ1bGZpbGxlZDogZnVsZmlsbGVkLFxuICAgIHJlamVjdGVkOiByZWplY3RlZFxuICB9KTtcbiAgcmV0dXJuIHRoaXMuaGFuZGxlcnMubGVuZ3RoIC0gMTtcbn07XG5cbi8qKlxuICogUmVtb3ZlIGFuIGludGVyY2VwdG9yIGZyb20gdGhlIHN0YWNrXG4gKlxuICogQHBhcmFtIHtOdW1iZXJ9IGlkIFRoZSBJRCB0aGF0IHdhcyByZXR1cm5lZCBieSBgdXNlYFxuICovXG5JbnRlcmNlcHRvck1hbmFnZXIucHJvdG90eXBlLmVqZWN0ID0gZnVuY3Rpb24gZWplY3QoaWQpIHtcbiAgaWYgKHRoaXMuaGFuZGxlcnNbaWRdKSB7XG4gICAgdGhpcy5oYW5kbGVyc1tpZF0gPSBudWxsO1xuICB9XG59O1xuXG4vKipcbiAqIEl0ZXJhdGUgb3ZlciBhbGwgdGhlIHJlZ2lzdGVyZWQgaW50ZXJjZXB0b3JzXG4gKlxuICogVGhpcyBtZXRob2QgaXMgcGFydGljdWxhcmx5IHVzZWZ1bCBmb3Igc2tpcHBpbmcgb3ZlciBhbnlcbiAqIGludGVyY2VwdG9ycyB0aGF0IG1heSBoYXZlIGJlY29tZSBgbnVsbGAgY2FsbGluZyBgZWplY3RgLlxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuIFRoZSBmdW5jdGlvbiB0byBjYWxsIGZvciBlYWNoIGludGVyY2VwdG9yXG4gKi9cbkludGVyY2VwdG9yTWFuYWdlci5wcm90b3R5cGUuZm9yRWFjaCA9IGZ1bmN0aW9uIGZvckVhY2goZm4pIHtcbiAgdXRpbHMuZm9yRWFjaCh0aGlzLmhhbmRsZXJzLCBmdW5jdGlvbiBmb3JFYWNoSGFuZGxlcihoKSB7XG4gICAgaWYgKGggIT09IG51bGwpIHtcbiAgICAgIGZuKGgpO1xuICAgIH1cbiAgfSk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEludGVyY2VwdG9yTWFuYWdlcjtcblxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9jcmVhdGVFcnJvci5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9jcmVhdGVFcnJvci5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG52YXIgZW5oYW5jZUVycm9yID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9lbmhhbmNlRXJyb3IgKi8gXCIuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9lbmhhbmNlRXJyb3IuanNcIik7XG5cbi8qKlxuICogQ3JlYXRlIGFuIEVycm9yIHdpdGggdGhlIHNwZWNpZmllZCBtZXNzYWdlLCBjb25maWcsIGVycm9yIGNvZGUsIHJlcXVlc3QgYW5kIHJlc3BvbnNlLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBtZXNzYWdlIFRoZSBlcnJvciBtZXNzYWdlLlxuICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZyBUaGUgY29uZmlnLlxuICogQHBhcmFtIHtzdHJpbmd9IFtjb2RlXSBUaGUgZXJyb3IgY29kZSAoZm9yIGV4YW1wbGUsICdFQ09OTkFCT1JURUQnKS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbcmVxdWVzdF0gVGhlIHJlcXVlc3QuXG4gKiBAcGFyYW0ge09iamVjdH0gW3Jlc3BvbnNlXSBUaGUgcmVzcG9uc2UuXG4gKiBAcmV0dXJucyB7RXJyb3J9IFRoZSBjcmVhdGVkIGVycm9yLlxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNyZWF0ZUVycm9yKG1lc3NhZ2UsIGNvbmZpZywgY29kZSwgcmVxdWVzdCwgcmVzcG9uc2UpIHtcbiAgdmFyIGVycm9yID0gbmV3IEVycm9yKG1lc3NhZ2UpO1xuICByZXR1cm4gZW5oYW5jZUVycm9yKGVycm9yLCBjb25maWcsIGNvZGUsIHJlcXVlc3QsIHJlc3BvbnNlKTtcbn07XG5cblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvZGlzcGF0Y2hSZXF1ZXN0LmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9kaXNwYXRjaFJlcXVlc3QuanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5cbnZhciB1dGlscyA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vLi4vdXRpbHMgKi8gXCIuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvdXRpbHMuanNcIik7XG52YXIgdHJhbnNmb3JtRGF0YSA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vdHJhbnNmb3JtRGF0YSAqLyBcIi4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL3RyYW5zZm9ybURhdGEuanNcIik7XG52YXIgaXNDYW5jZWwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuLi9jYW5jZWwvaXNDYW5jZWwgKi8gXCIuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY2FuY2VsL2lzQ2FuY2VsLmpzXCIpO1xudmFyIGRlZmF1bHRzID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi4vZGVmYXVsdHMgKi8gXCIuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvZGVmYXVsdHMuanNcIik7XG52YXIgaXNBYnNvbHV0ZVVSTCA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vLi4vaGVscGVycy9pc0Fic29sdXRlVVJMICovIFwiLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvaXNBYnNvbHV0ZVVSTC5qc1wiKTtcbnZhciBjb21iaW5lVVJMcyA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vLi4vaGVscGVycy9jb21iaW5lVVJMcyAqLyBcIi4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2NvbWJpbmVVUkxzLmpzXCIpO1xuXG4vKipcbiAqIFRocm93cyBhIGBDYW5jZWxgIGlmIGNhbmNlbGxhdGlvbiBoYXMgYmVlbiByZXF1ZXN0ZWQuXG4gKi9cbmZ1bmN0aW9uIHRocm93SWZDYW5jZWxsYXRpb25SZXF1ZXN0ZWQoY29uZmlnKSB7XG4gIGlmIChjb25maWcuY2FuY2VsVG9rZW4pIHtcbiAgICBjb25maWcuY2FuY2VsVG9rZW4udGhyb3dJZlJlcXVlc3RlZCgpO1xuICB9XG59XG5cbi8qKlxuICogRGlzcGF0Y2ggYSByZXF1ZXN0IHRvIHRoZSBzZXJ2ZXIgdXNpbmcgdGhlIGNvbmZpZ3VyZWQgYWRhcHRlci5cbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gY29uZmlnIFRoZSBjb25maWcgdGhhdCBpcyB0byBiZSB1c2VkIGZvciB0aGUgcmVxdWVzdFxuICogQHJldHVybnMge1Byb21pc2V9IFRoZSBQcm9taXNlIHRvIGJlIGZ1bGZpbGxlZFxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGRpc3BhdGNoUmVxdWVzdChjb25maWcpIHtcbiAgdGhyb3dJZkNhbmNlbGxhdGlvblJlcXVlc3RlZChjb25maWcpO1xuXG4gIC8vIFN1cHBvcnQgYmFzZVVSTCBjb25maWdcbiAgaWYgKGNvbmZpZy5iYXNlVVJMICYmICFpc0Fic29sdXRlVVJMKGNvbmZpZy51cmwpKSB7XG4gICAgY29uZmlnLnVybCA9IGNvbWJpbmVVUkxzKGNvbmZpZy5iYXNlVVJMLCBjb25maWcudXJsKTtcbiAgfVxuXG4gIC8vIEVuc3VyZSBoZWFkZXJzIGV4aXN0XG4gIGNvbmZpZy5oZWFkZXJzID0gY29uZmlnLmhlYWRlcnMgfHwge307XG5cbiAgLy8gVHJhbnNmb3JtIHJlcXVlc3QgZGF0YVxuICBjb25maWcuZGF0YSA9IHRyYW5zZm9ybURhdGEoXG4gICAgY29uZmlnLmRhdGEsXG4gICAgY29uZmlnLmhlYWRlcnMsXG4gICAgY29uZmlnLnRyYW5zZm9ybVJlcXVlc3RcbiAgKTtcblxuICAvLyBGbGF0dGVuIGhlYWRlcnNcbiAgY29uZmlnLmhlYWRlcnMgPSB1dGlscy5tZXJnZShcbiAgICBjb25maWcuaGVhZGVycy5jb21tb24gfHwge30sXG4gICAgY29uZmlnLmhlYWRlcnNbY29uZmlnLm1ldGhvZF0gfHwge30sXG4gICAgY29uZmlnLmhlYWRlcnMgfHwge31cbiAgKTtcblxuICB1dGlscy5mb3JFYWNoKFxuICAgIFsnZGVsZXRlJywgJ2dldCcsICdoZWFkJywgJ3Bvc3QnLCAncHV0JywgJ3BhdGNoJywgJ2NvbW1vbiddLFxuICAgIGZ1bmN0aW9uIGNsZWFuSGVhZGVyQ29uZmlnKG1ldGhvZCkge1xuICAgICAgZGVsZXRlIGNvbmZpZy5oZWFkZXJzW21ldGhvZF07XG4gICAgfVxuICApO1xuXG4gIHZhciBhZGFwdGVyID0gY29uZmlnLmFkYXB0ZXIgfHwgZGVmYXVsdHMuYWRhcHRlcjtcblxuICByZXR1cm4gYWRhcHRlcihjb25maWcpLnRoZW4oZnVuY3Rpb24gb25BZGFwdGVyUmVzb2x1dGlvbihyZXNwb25zZSkge1xuICAgIHRocm93SWZDYW5jZWxsYXRpb25SZXF1ZXN0ZWQoY29uZmlnKTtcblxuICAgIC8vIFRyYW5zZm9ybSByZXNwb25zZSBkYXRhXG4gICAgcmVzcG9uc2UuZGF0YSA9IHRyYW5zZm9ybURhdGEoXG4gICAgICByZXNwb25zZS5kYXRhLFxuICAgICAgcmVzcG9uc2UuaGVhZGVycyxcbiAgICAgIGNvbmZpZy50cmFuc2Zvcm1SZXNwb25zZVxuICAgICk7XG5cbiAgICByZXR1cm4gcmVzcG9uc2U7XG4gIH0sIGZ1bmN0aW9uIG9uQWRhcHRlclJlamVjdGlvbihyZWFzb24pIHtcbiAgICBpZiAoIWlzQ2FuY2VsKHJlYXNvbikpIHtcbiAgICAgIHRocm93SWZDYW5jZWxsYXRpb25SZXF1ZXN0ZWQoY29uZmlnKTtcblxuICAgICAgLy8gVHJhbnNmb3JtIHJlc3BvbnNlIGRhdGFcbiAgICAgIGlmIChyZWFzb24gJiYgcmVhc29uLnJlc3BvbnNlKSB7XG4gICAgICAgIHJlYXNvbi5yZXNwb25zZS5kYXRhID0gdHJhbnNmb3JtRGF0YShcbiAgICAgICAgICByZWFzb24ucmVzcG9uc2UuZGF0YSxcbiAgICAgICAgICByZWFzb24ucmVzcG9uc2UuaGVhZGVycyxcbiAgICAgICAgICBjb25maWcudHJhbnNmb3JtUmVzcG9uc2VcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QocmVhc29uKTtcbiAgfSk7XG59O1xuXG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL2VuaGFuY2VFcnJvci5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvZW5oYW5jZUVycm9yLmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG4vKipcbiAqIFVwZGF0ZSBhbiBFcnJvciB3aXRoIHRoZSBzcGVjaWZpZWQgY29uZmlnLCBlcnJvciBjb2RlLCBhbmQgcmVzcG9uc2UuXG4gKlxuICogQHBhcmFtIHtFcnJvcn0gZXJyb3IgVGhlIGVycm9yIHRvIHVwZGF0ZS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWcgVGhlIGNvbmZpZy5cbiAqIEBwYXJhbSB7c3RyaW5nfSBbY29kZV0gVGhlIGVycm9yIGNvZGUgKGZvciBleGFtcGxlLCAnRUNPTk5BQk9SVEVEJykuXG4gKiBAcGFyYW0ge09iamVjdH0gW3JlcXVlc3RdIFRoZSByZXF1ZXN0LlxuICogQHBhcmFtIHtPYmplY3R9IFtyZXNwb25zZV0gVGhlIHJlc3BvbnNlLlxuICogQHJldHVybnMge0Vycm9yfSBUaGUgZXJyb3IuXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZW5oYW5jZUVycm9yKGVycm9yLCBjb25maWcsIGNvZGUsIHJlcXVlc3QsIHJlc3BvbnNlKSB7XG4gIGVycm9yLmNvbmZpZyA9IGNvbmZpZztcbiAgaWYgKGNvZGUpIHtcbiAgICBlcnJvci5jb2RlID0gY29kZTtcbiAgfVxuICBlcnJvci5yZXF1ZXN0ID0gcmVxdWVzdDtcbiAgZXJyb3IucmVzcG9uc2UgPSByZXNwb25zZTtcbiAgcmV0dXJuIGVycm9yO1xufTtcblxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9zZXR0bGUuanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL3NldHRsZS5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cblxudmFyIGNyZWF0ZUVycm9yID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9jcmVhdGVFcnJvciAqLyBcIi4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL2NyZWF0ZUVycm9yLmpzXCIpO1xuXG4vKipcbiAqIFJlc29sdmUgb3IgcmVqZWN0IGEgUHJvbWlzZSBiYXNlZCBvbiByZXNwb25zZSBzdGF0dXMuXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gcmVzb2x2ZSBBIGZ1bmN0aW9uIHRoYXQgcmVzb2x2ZXMgdGhlIHByb21pc2UuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSByZWplY3QgQSBmdW5jdGlvbiB0aGF0IHJlamVjdHMgdGhlIHByb21pc2UuXG4gKiBAcGFyYW0ge29iamVjdH0gcmVzcG9uc2UgVGhlIHJlc3BvbnNlLlxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHNldHRsZShyZXNvbHZlLCByZWplY3QsIHJlc3BvbnNlKSB7XG4gIHZhciB2YWxpZGF0ZVN0YXR1cyA9IHJlc3BvbnNlLmNvbmZpZy52YWxpZGF0ZVN0YXR1cztcbiAgLy8gTm90ZTogc3RhdHVzIGlzIG5vdCBleHBvc2VkIGJ5IFhEb21haW5SZXF1ZXN0XG4gIGlmICghcmVzcG9uc2Uuc3RhdHVzIHx8ICF2YWxpZGF0ZVN0YXR1cyB8fCB2YWxpZGF0ZVN0YXR1cyhyZXNwb25zZS5zdGF0dXMpKSB7XG4gICAgcmVzb2x2ZShyZXNwb25zZSk7XG4gIH0gZWxzZSB7XG4gICAgcmVqZWN0KGNyZWF0ZUVycm9yKFxuICAgICAgJ1JlcXVlc3QgZmFpbGVkIHdpdGggc3RhdHVzIGNvZGUgJyArIHJlc3BvbnNlLnN0YXR1cyxcbiAgICAgIHJlc3BvbnNlLmNvbmZpZyxcbiAgICAgIG51bGwsXG4gICAgICByZXNwb25zZS5yZXF1ZXN0LFxuICAgICAgcmVzcG9uc2VcbiAgICApKTtcbiAgfVxufTtcblxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS90cmFuc2Zvcm1EYXRhLmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvdHJhbnNmb3JtRGF0YS5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5cbnZhciB1dGlscyA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vLi4vdXRpbHMgKi8gXCIuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvdXRpbHMuanNcIik7XG5cbi8qKlxuICogVHJhbnNmb3JtIHRoZSBkYXRhIGZvciBhIHJlcXVlc3Qgb3IgYSByZXNwb25zZVxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fFN0cmluZ30gZGF0YSBUaGUgZGF0YSB0byBiZSB0cmFuc2Zvcm1lZFxuICogQHBhcmFtIHtBcnJheX0gaGVhZGVycyBUaGUgaGVhZGVycyBmb3IgdGhlIHJlcXVlc3Qgb3IgcmVzcG9uc2VcbiAqIEBwYXJhbSB7QXJyYXl8RnVuY3Rpb259IGZucyBBIHNpbmdsZSBmdW5jdGlvbiBvciBBcnJheSBvZiBmdW5jdGlvbnNcbiAqIEByZXR1cm5zIHsqfSBUaGUgcmVzdWx0aW5nIHRyYW5zZm9ybWVkIGRhdGFcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiB0cmFuc2Zvcm1EYXRhKGRhdGEsIGhlYWRlcnMsIGZucykge1xuICAvKmVzbGludCBuby1wYXJhbS1yZWFzc2lnbjowKi9cbiAgdXRpbHMuZm9yRWFjaChmbnMsIGZ1bmN0aW9uIHRyYW5zZm9ybShmbikge1xuICAgIGRhdGEgPSBmbihkYXRhLCBoZWFkZXJzKTtcbiAgfSk7XG5cbiAgcmV0dXJuIGRhdGE7XG59O1xuXG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9kZWZhdWx0cy5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2RlZmF1bHRzLmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcbi8qIFdFQlBBQ0sgVkFSIElOSkVDVElPTiAqLyhmdW5jdGlvbihwcm9jZXNzKSB7XG5cbnZhciB1dGlscyA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vdXRpbHMgKi8gXCIuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvdXRpbHMuanNcIik7XG52YXIgbm9ybWFsaXplSGVhZGVyTmFtZSA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vaGVscGVycy9ub3JtYWxpemVIZWFkZXJOYW1lICovIFwiLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvbm9ybWFsaXplSGVhZGVyTmFtZS5qc1wiKTtcblxudmFyIERFRkFVTFRfQ09OVEVOVF9UWVBFID0ge1xuICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCdcbn07XG5cbmZ1bmN0aW9uIHNldENvbnRlbnRUeXBlSWZVbnNldChoZWFkZXJzLCB2YWx1ZSkge1xuICBpZiAoIXV0aWxzLmlzVW5kZWZpbmVkKGhlYWRlcnMpICYmIHV0aWxzLmlzVW5kZWZpbmVkKGhlYWRlcnNbJ0NvbnRlbnQtVHlwZSddKSkge1xuICAgIGhlYWRlcnNbJ0NvbnRlbnQtVHlwZSddID0gdmFsdWU7XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0RGVmYXVsdEFkYXB0ZXIoKSB7XG4gIHZhciBhZGFwdGVyO1xuICBpZiAodHlwZW9mIFhNTEh0dHBSZXF1ZXN0ICE9PSAndW5kZWZpbmVkJykge1xuICAgIC8vIEZvciBicm93c2VycyB1c2UgWEhSIGFkYXB0ZXJcbiAgICBhZGFwdGVyID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9hZGFwdGVycy94aHIgKi8gXCIuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvYWRhcHRlcnMveGhyLmpzXCIpO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBwcm9jZXNzICE9PSAndW5kZWZpbmVkJykge1xuICAgIC8vIEZvciBub2RlIHVzZSBIVFRQIGFkYXB0ZXJcbiAgICBhZGFwdGVyID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9hZGFwdGVycy9odHRwICovIFwiLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2FkYXB0ZXJzL3hoci5qc1wiKTtcbiAgfVxuICByZXR1cm4gYWRhcHRlcjtcbn1cblxudmFyIGRlZmF1bHRzID0ge1xuICBhZGFwdGVyOiBnZXREZWZhdWx0QWRhcHRlcigpLFxuXG4gIHRyYW5zZm9ybVJlcXVlc3Q6IFtmdW5jdGlvbiB0cmFuc2Zvcm1SZXF1ZXN0KGRhdGEsIGhlYWRlcnMpIHtcbiAgICBub3JtYWxpemVIZWFkZXJOYW1lKGhlYWRlcnMsICdDb250ZW50LVR5cGUnKTtcbiAgICBpZiAodXRpbHMuaXNGb3JtRGF0YShkYXRhKSB8fFxuICAgICAgdXRpbHMuaXNBcnJheUJ1ZmZlcihkYXRhKSB8fFxuICAgICAgdXRpbHMuaXNCdWZmZXIoZGF0YSkgfHxcbiAgICAgIHV0aWxzLmlzU3RyZWFtKGRhdGEpIHx8XG4gICAgICB1dGlscy5pc0ZpbGUoZGF0YSkgfHxcbiAgICAgIHV0aWxzLmlzQmxvYihkYXRhKVxuICAgICkge1xuICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfVxuICAgIGlmICh1dGlscy5pc0FycmF5QnVmZmVyVmlldyhkYXRhKSkge1xuICAgICAgcmV0dXJuIGRhdGEuYnVmZmVyO1xuICAgIH1cbiAgICBpZiAodXRpbHMuaXNVUkxTZWFyY2hQYXJhbXMoZGF0YSkpIHtcbiAgICAgIHNldENvbnRlbnRUeXBlSWZVbnNldChoZWFkZXJzLCAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkO2NoYXJzZXQ9dXRmLTgnKTtcbiAgICAgIHJldHVybiBkYXRhLnRvU3RyaW5nKCk7XG4gICAgfVxuICAgIGlmICh1dGlscy5pc09iamVjdChkYXRhKSkge1xuICAgICAgc2V0Q29udGVudFR5cGVJZlVuc2V0KGhlYWRlcnMsICdhcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTgnKTtcbiAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShkYXRhKTtcbiAgICB9XG4gICAgcmV0dXJuIGRhdGE7XG4gIH1dLFxuXG4gIHRyYW5zZm9ybVJlc3BvbnNlOiBbZnVuY3Rpb24gdHJhbnNmb3JtUmVzcG9uc2UoZGF0YSkge1xuICAgIC8qZXNsaW50IG5vLXBhcmFtLXJlYXNzaWduOjAqL1xuICAgIGlmICh0eXBlb2YgZGF0YSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGRhdGEgPSBKU09OLnBhcnNlKGRhdGEpO1xuICAgICAgfSBjYXRjaCAoZSkgeyAvKiBJZ25vcmUgKi8gfVxuICAgIH1cbiAgICByZXR1cm4gZGF0YTtcbiAgfV0sXG5cbiAgLyoqXG4gICAqIEEgdGltZW91dCBpbiBtaWxsaXNlY29uZHMgdG8gYWJvcnQgYSByZXF1ZXN0LiBJZiBzZXQgdG8gMCAoZGVmYXVsdCkgYVxuICAgKiB0aW1lb3V0IGlzIG5vdCBjcmVhdGVkLlxuICAgKi9cbiAgdGltZW91dDogMCxcblxuICB4c3JmQ29va2llTmFtZTogJ1hTUkYtVE9LRU4nLFxuICB4c3JmSGVhZGVyTmFtZTogJ1gtWFNSRi1UT0tFTicsXG5cbiAgbWF4Q29udGVudExlbmd0aDogLTEsXG5cbiAgdmFsaWRhdGVTdGF0dXM6IGZ1bmN0aW9uIHZhbGlkYXRlU3RhdHVzKHN0YXR1cykge1xuICAgIHJldHVybiBzdGF0dXMgPj0gMjAwICYmIHN0YXR1cyA8IDMwMDtcbiAgfVxufTtcblxuZGVmYXVsdHMuaGVhZGVycyA9IHtcbiAgY29tbW9uOiB7XG4gICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uLCB0ZXh0L3BsYWluLCAqLyonXG4gIH1cbn07XG5cbnV0aWxzLmZvckVhY2goWydkZWxldGUnLCAnZ2V0JywgJ2hlYWQnXSwgZnVuY3Rpb24gZm9yRWFjaE1ldGhvZE5vRGF0YShtZXRob2QpIHtcbiAgZGVmYXVsdHMuaGVhZGVyc1ttZXRob2RdID0ge307XG59KTtcblxudXRpbHMuZm9yRWFjaChbJ3Bvc3QnLCAncHV0JywgJ3BhdGNoJ10sIGZ1bmN0aW9uIGZvckVhY2hNZXRob2RXaXRoRGF0YShtZXRob2QpIHtcbiAgZGVmYXVsdHMuaGVhZGVyc1ttZXRob2RdID0gdXRpbHMubWVyZ2UoREVGQVVMVF9DT05URU5UX1RZUEUpO1xufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gZGVmYXVsdHM7XG5cbi8qIFdFQlBBQ0sgVkFSIElOSkVDVElPTiAqL30uY2FsbCh0aGlzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuLy4uLy4uL3Byb2Nlc3MvYnJvd3Nlci5qcyAqLyBcIi4vbm9kZV9tb2R1bGVzL3Byb2Nlc3MvYnJvd3Nlci5qc1wiKSkpXG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2JpbmQuanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9iaW5kLmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBiaW5kKGZuLCB0aGlzQXJnKSB7XG4gIHJldHVybiBmdW5jdGlvbiB3cmFwKCkge1xuICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGgpO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJncy5sZW5ndGg7IGkrKykge1xuICAgICAgYXJnc1tpXSA9IGFyZ3VtZW50c1tpXTtcbiAgICB9XG4gICAgcmV0dXJuIGZuLmFwcGx5KHRoaXNBcmcsIGFyZ3MpO1xuICB9O1xufTtcblxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9idG9hLmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvYnRvYS5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5cbi8vIGJ0b2EgcG9seWZpbGwgZm9yIElFPDEwIGNvdXJ0ZXN5IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXZpZGNoYW1iZXJzL0Jhc2U2NC5qc1xuXG52YXIgY2hhcnMgPSAnQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVphYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ejAxMjM0NTY3ODkrLz0nO1xuXG5mdW5jdGlvbiBFKCkge1xuICB0aGlzLm1lc3NhZ2UgPSAnU3RyaW5nIGNvbnRhaW5zIGFuIGludmFsaWQgY2hhcmFjdGVyJztcbn1cbkUucHJvdG90eXBlID0gbmV3IEVycm9yO1xuRS5wcm90b3R5cGUuY29kZSA9IDU7XG5FLnByb3RvdHlwZS5uYW1lID0gJ0ludmFsaWRDaGFyYWN0ZXJFcnJvcic7XG5cbmZ1bmN0aW9uIGJ0b2EoaW5wdXQpIHtcbiAgdmFyIHN0ciA9IFN0cmluZyhpbnB1dCk7XG4gIHZhciBvdXRwdXQgPSAnJztcbiAgZm9yIChcbiAgICAvLyBpbml0aWFsaXplIHJlc3VsdCBhbmQgY291bnRlclxuICAgIHZhciBibG9jaywgY2hhckNvZGUsIGlkeCA9IDAsIG1hcCA9IGNoYXJzO1xuICAgIC8vIGlmIHRoZSBuZXh0IHN0ciBpbmRleCBkb2VzIG5vdCBleGlzdDpcbiAgICAvLyAgIGNoYW5nZSB0aGUgbWFwcGluZyB0YWJsZSB0byBcIj1cIlxuICAgIC8vICAgY2hlY2sgaWYgZCBoYXMgbm8gZnJhY3Rpb25hbCBkaWdpdHNcbiAgICBzdHIuY2hhckF0KGlkeCB8IDApIHx8IChtYXAgPSAnPScsIGlkeCAlIDEpO1xuICAgIC8vIFwiOCAtIGlkeCAlIDEgKiA4XCIgZ2VuZXJhdGVzIHRoZSBzZXF1ZW5jZSAyLCA0LCA2LCA4XG4gICAgb3V0cHV0ICs9IG1hcC5jaGFyQXQoNjMgJiBibG9jayA+PiA4IC0gaWR4ICUgMSAqIDgpXG4gICkge1xuICAgIGNoYXJDb2RlID0gc3RyLmNoYXJDb2RlQXQoaWR4ICs9IDMgLyA0KTtcbiAgICBpZiAoY2hhckNvZGUgPiAweEZGKSB7XG4gICAgICB0aHJvdyBuZXcgRSgpO1xuICAgIH1cbiAgICBibG9jayA9IGJsb2NrIDw8IDggfCBjaGFyQ29kZTtcbiAgfVxuICByZXR1cm4gb3V0cHV0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJ0b2E7XG5cblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvYnVpbGRVUkwuanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvYnVpbGRVUkwuanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cblxudmFyIHV0aWxzID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi8uLi91dGlscyAqLyBcIi4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi91dGlscy5qc1wiKTtcblxuZnVuY3Rpb24gZW5jb2RlKHZhbCkge1xuICByZXR1cm4gZW5jb2RlVVJJQ29tcG9uZW50KHZhbCkuXG4gICAgcmVwbGFjZSgvJTQwL2dpLCAnQCcpLlxuICAgIHJlcGxhY2UoLyUzQS9naSwgJzonKS5cbiAgICByZXBsYWNlKC8lMjQvZywgJyQnKS5cbiAgICByZXBsYWNlKC8lMkMvZ2ksICcsJykuXG4gICAgcmVwbGFjZSgvJTIwL2csICcrJykuXG4gICAgcmVwbGFjZSgvJTVCL2dpLCAnWycpLlxuICAgIHJlcGxhY2UoLyU1RC9naSwgJ10nKTtcbn1cblxuLyoqXG4gKiBCdWlsZCBhIFVSTCBieSBhcHBlbmRpbmcgcGFyYW1zIHRvIHRoZSBlbmRcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gdXJsIFRoZSBiYXNlIG9mIHRoZSB1cmwgKGUuZy4sIGh0dHA6Ly93d3cuZ29vZ2xlLmNvbSlcbiAqIEBwYXJhbSB7b2JqZWN0fSBbcGFyYW1zXSBUaGUgcGFyYW1zIHRvIGJlIGFwcGVuZGVkXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBUaGUgZm9ybWF0dGVkIHVybFxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGJ1aWxkVVJMKHVybCwgcGFyYW1zLCBwYXJhbXNTZXJpYWxpemVyKSB7XG4gIC8qZXNsaW50IG5vLXBhcmFtLXJlYXNzaWduOjAqL1xuICBpZiAoIXBhcmFtcykge1xuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICB2YXIgc2VyaWFsaXplZFBhcmFtcztcbiAgaWYgKHBhcmFtc1NlcmlhbGl6ZXIpIHtcbiAgICBzZXJpYWxpemVkUGFyYW1zID0gcGFyYW1zU2VyaWFsaXplcihwYXJhbXMpO1xuICB9IGVsc2UgaWYgKHV0aWxzLmlzVVJMU2VhcmNoUGFyYW1zKHBhcmFtcykpIHtcbiAgICBzZXJpYWxpemVkUGFyYW1zID0gcGFyYW1zLnRvU3RyaW5nKCk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHBhcnRzID0gW107XG5cbiAgICB1dGlscy5mb3JFYWNoKHBhcmFtcywgZnVuY3Rpb24gc2VyaWFsaXplKHZhbCwga2V5KSB7XG4gICAgICBpZiAodmFsID09PSBudWxsIHx8IHR5cGVvZiB2YWwgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKHV0aWxzLmlzQXJyYXkodmFsKSkge1xuICAgICAgICBrZXkgPSBrZXkgKyAnW10nO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFsID0gW3ZhbF07XG4gICAgICB9XG5cbiAgICAgIHV0aWxzLmZvckVhY2godmFsLCBmdW5jdGlvbiBwYXJzZVZhbHVlKHYpIHtcbiAgICAgICAgaWYgKHV0aWxzLmlzRGF0ZSh2KSkge1xuICAgICAgICAgIHYgPSB2LnRvSVNPU3RyaW5nKCk7XG4gICAgICAgIH0gZWxzZSBpZiAodXRpbHMuaXNPYmplY3QodikpIHtcbiAgICAgICAgICB2ID0gSlNPTi5zdHJpbmdpZnkodik7XG4gICAgICAgIH1cbiAgICAgICAgcGFydHMucHVzaChlbmNvZGUoa2V5KSArICc9JyArIGVuY29kZSh2KSk7XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIHNlcmlhbGl6ZWRQYXJhbXMgPSBwYXJ0cy5qb2luKCcmJyk7XG4gIH1cblxuICBpZiAoc2VyaWFsaXplZFBhcmFtcykge1xuICAgIHVybCArPSAodXJsLmluZGV4T2YoJz8nKSA9PT0gLTEgPyAnPycgOiAnJicpICsgc2VyaWFsaXplZFBhcmFtcztcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59O1xuXG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2NvbWJpbmVVUkxzLmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2NvbWJpbmVVUkxzLmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5cbi8qKlxuICogQ3JlYXRlcyBhIG5ldyBVUkwgYnkgY29tYmluaW5nIHRoZSBzcGVjaWZpZWQgVVJMc1xuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBiYXNlVVJMIFRoZSBiYXNlIFVSTFxuICogQHBhcmFtIHtzdHJpbmd9IHJlbGF0aXZlVVJMIFRoZSByZWxhdGl2ZSBVUkxcbiAqIEByZXR1cm5zIHtzdHJpbmd9IFRoZSBjb21iaW5lZCBVUkxcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjb21iaW5lVVJMcyhiYXNlVVJMLCByZWxhdGl2ZVVSTCkge1xuICByZXR1cm4gcmVsYXRpdmVVUkxcbiAgICA/IGJhc2VVUkwucmVwbGFjZSgvXFwvKyQvLCAnJykgKyAnLycgKyByZWxhdGl2ZVVSTC5yZXBsYWNlKC9eXFwvKy8sICcnKVxuICAgIDogYmFzZVVSTDtcbn07XG5cblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvY29va2llcy5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2Nvb2tpZXMuanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG52YXIgdXRpbHMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuLy4uL3V0aWxzICovIFwiLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL3V0aWxzLmpzXCIpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IChcbiAgdXRpbHMuaXNTdGFuZGFyZEJyb3dzZXJFbnYoKSA/XG5cbiAgLy8gU3RhbmRhcmQgYnJvd3NlciBlbnZzIHN1cHBvcnQgZG9jdW1lbnQuY29va2llXG4gIChmdW5jdGlvbiBzdGFuZGFyZEJyb3dzZXJFbnYoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHdyaXRlOiBmdW5jdGlvbiB3cml0ZShuYW1lLCB2YWx1ZSwgZXhwaXJlcywgcGF0aCwgZG9tYWluLCBzZWN1cmUpIHtcbiAgICAgICAgdmFyIGNvb2tpZSA9IFtdO1xuICAgICAgICBjb29raWUucHVzaChuYW1lICsgJz0nICsgZW5jb2RlVVJJQ29tcG9uZW50KHZhbHVlKSk7XG5cbiAgICAgICAgaWYgKHV0aWxzLmlzTnVtYmVyKGV4cGlyZXMpKSB7XG4gICAgICAgICAgY29va2llLnB1c2goJ2V4cGlyZXM9JyArIG5ldyBEYXRlKGV4cGlyZXMpLnRvR01UU3RyaW5nKCkpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHV0aWxzLmlzU3RyaW5nKHBhdGgpKSB7XG4gICAgICAgICAgY29va2llLnB1c2goJ3BhdGg9JyArIHBhdGgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHV0aWxzLmlzU3RyaW5nKGRvbWFpbikpIHtcbiAgICAgICAgICBjb29raWUucHVzaCgnZG9tYWluPScgKyBkb21haW4pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHNlY3VyZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgIGNvb2tpZS5wdXNoKCdzZWN1cmUnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGRvY3VtZW50LmNvb2tpZSA9IGNvb2tpZS5qb2luKCc7ICcpO1xuICAgICAgfSxcblxuICAgICAgcmVhZDogZnVuY3Rpb24gcmVhZChuYW1lKSB7XG4gICAgICAgIHZhciBtYXRjaCA9IGRvY3VtZW50LmNvb2tpZS5tYXRjaChuZXcgUmVnRXhwKCcoXnw7XFxcXHMqKSgnICsgbmFtZSArICcpPShbXjtdKiknKSk7XG4gICAgICAgIHJldHVybiAobWF0Y2ggPyBkZWNvZGVVUklDb21wb25lbnQobWF0Y2hbM10pIDogbnVsbCk7XG4gICAgICB9LFxuXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZShuYW1lKSB7XG4gICAgICAgIHRoaXMud3JpdGUobmFtZSwgJycsIERhdGUubm93KCkgLSA4NjQwMDAwMCk7XG4gICAgICB9XG4gICAgfTtcbiAgfSkoKSA6XG5cbiAgLy8gTm9uIHN0YW5kYXJkIGJyb3dzZXIgZW52ICh3ZWIgd29ya2VycywgcmVhY3QtbmF0aXZlKSBsYWNrIG5lZWRlZCBzdXBwb3J0LlxuICAoZnVuY3Rpb24gbm9uU3RhbmRhcmRCcm93c2VyRW52KCkge1xuICAgIHJldHVybiB7XG4gICAgICB3cml0ZTogZnVuY3Rpb24gd3JpdGUoKSB7fSxcbiAgICAgIHJlYWQ6IGZ1bmN0aW9uIHJlYWQoKSB7IHJldHVybiBudWxsOyB9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH0pKClcbik7XG5cblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvaXNBYnNvbHV0ZVVSTC5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2lzQWJzb2x1dGVVUkwuanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG4vKipcbiAqIERldGVybWluZXMgd2hldGhlciB0aGUgc3BlY2lmaWVkIFVSTCBpcyBhYnNvbHV0ZVxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSB1cmwgVGhlIFVSTCB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB0aGUgc3BlY2lmaWVkIFVSTCBpcyBhYnNvbHV0ZSwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaXNBYnNvbHV0ZVVSTCh1cmwpIHtcbiAgLy8gQSBVUkwgaXMgY29uc2lkZXJlZCBhYnNvbHV0ZSBpZiBpdCBiZWdpbnMgd2l0aCBcIjxzY2hlbWU+Oi8vXCIgb3IgXCIvL1wiIChwcm90b2NvbC1yZWxhdGl2ZSBVUkwpLlxuICAvLyBSRkMgMzk4NiBkZWZpbmVzIHNjaGVtZSBuYW1lIGFzIGEgc2VxdWVuY2Ugb2YgY2hhcmFjdGVycyBiZWdpbm5pbmcgd2l0aCBhIGxldHRlciBhbmQgZm9sbG93ZWRcbiAgLy8gYnkgYW55IGNvbWJpbmF0aW9uIG9mIGxldHRlcnMsIGRpZ2l0cywgcGx1cywgcGVyaW9kLCBvciBoeXBoZW4uXG4gIHJldHVybiAvXihbYS16XVthLXpcXGRcXCtcXC1cXC5dKjopP1xcL1xcLy9pLnRlc3QodXJsKTtcbn07XG5cblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvaXNVUkxTYW1lT3JpZ2luLmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9pc1VSTFNhbWVPcmlnaW4uanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5cbnZhciB1dGlscyA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vLi4vdXRpbHMgKi8gXCIuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvdXRpbHMuanNcIik7XG5cbm1vZHVsZS5leHBvcnRzID0gKFxuICB1dGlscy5pc1N0YW5kYXJkQnJvd3NlckVudigpID9cblxuICAvLyBTdGFuZGFyZCBicm93c2VyIGVudnMgaGF2ZSBmdWxsIHN1cHBvcnQgb2YgdGhlIEFQSXMgbmVlZGVkIHRvIHRlc3RcbiAgLy8gd2hldGhlciB0aGUgcmVxdWVzdCBVUkwgaXMgb2YgdGhlIHNhbWUgb3JpZ2luIGFzIGN1cnJlbnQgbG9jYXRpb24uXG4gIChmdW5jdGlvbiBzdGFuZGFyZEJyb3dzZXJFbnYoKSB7XG4gICAgdmFyIG1zaWUgPSAvKG1zaWV8dHJpZGVudCkvaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpO1xuICAgIHZhciB1cmxQYXJzaW5nTm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICB2YXIgb3JpZ2luVVJMO1xuXG4gICAgLyoqXG4gICAgKiBQYXJzZSBhIFVSTCB0byBkaXNjb3ZlciBpdCdzIGNvbXBvbmVudHNcbiAgICAqXG4gICAgKiBAcGFyYW0ge1N0cmluZ30gdXJsIFRoZSBVUkwgdG8gYmUgcGFyc2VkXG4gICAgKiBAcmV0dXJucyB7T2JqZWN0fVxuICAgICovXG4gICAgZnVuY3Rpb24gcmVzb2x2ZVVSTCh1cmwpIHtcbiAgICAgIHZhciBocmVmID0gdXJsO1xuXG4gICAgICBpZiAobXNpZSkge1xuICAgICAgICAvLyBJRSBuZWVkcyBhdHRyaWJ1dGUgc2V0IHR3aWNlIHRvIG5vcm1hbGl6ZSBwcm9wZXJ0aWVzXG4gICAgICAgIHVybFBhcnNpbmdOb2RlLnNldEF0dHJpYnV0ZSgnaHJlZicsIGhyZWYpO1xuICAgICAgICBocmVmID0gdXJsUGFyc2luZ05vZGUuaHJlZjtcbiAgICAgIH1cblxuICAgICAgdXJsUGFyc2luZ05vZGUuc2V0QXR0cmlidXRlKCdocmVmJywgaHJlZik7XG5cbiAgICAgIC8vIHVybFBhcnNpbmdOb2RlIHByb3ZpZGVzIHRoZSBVcmxVdGlscyBpbnRlcmZhY2UgLSBodHRwOi8vdXJsLnNwZWMud2hhdHdnLm9yZy8jdXJsdXRpbHNcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGhyZWY6IHVybFBhcnNpbmdOb2RlLmhyZWYsXG4gICAgICAgIHByb3RvY29sOiB1cmxQYXJzaW5nTm9kZS5wcm90b2NvbCA/IHVybFBhcnNpbmdOb2RlLnByb3RvY29sLnJlcGxhY2UoLzokLywgJycpIDogJycsXG4gICAgICAgIGhvc3Q6IHVybFBhcnNpbmdOb2RlLmhvc3QsXG4gICAgICAgIHNlYXJjaDogdXJsUGFyc2luZ05vZGUuc2VhcmNoID8gdXJsUGFyc2luZ05vZGUuc2VhcmNoLnJlcGxhY2UoL15cXD8vLCAnJykgOiAnJyxcbiAgICAgICAgaGFzaDogdXJsUGFyc2luZ05vZGUuaGFzaCA/IHVybFBhcnNpbmdOb2RlLmhhc2gucmVwbGFjZSgvXiMvLCAnJykgOiAnJyxcbiAgICAgICAgaG9zdG5hbWU6IHVybFBhcnNpbmdOb2RlLmhvc3RuYW1lLFxuICAgICAgICBwb3J0OiB1cmxQYXJzaW5nTm9kZS5wb3J0LFxuICAgICAgICBwYXRobmFtZTogKHVybFBhcnNpbmdOb2RlLnBhdGhuYW1lLmNoYXJBdCgwKSA9PT0gJy8nKSA/XG4gICAgICAgICAgICAgICAgICB1cmxQYXJzaW5nTm9kZS5wYXRobmFtZSA6XG4gICAgICAgICAgICAgICAgICAnLycgKyB1cmxQYXJzaW5nTm9kZS5wYXRobmFtZVxuICAgICAgfTtcbiAgICB9XG5cbiAgICBvcmlnaW5VUkwgPSByZXNvbHZlVVJMKHdpbmRvdy5sb2NhdGlvbi5ocmVmKTtcblxuICAgIC8qKlxuICAgICogRGV0ZXJtaW5lIGlmIGEgVVJMIHNoYXJlcyB0aGUgc2FtZSBvcmlnaW4gYXMgdGhlIGN1cnJlbnQgbG9jYXRpb25cbiAgICAqXG4gICAgKiBAcGFyYW0ge1N0cmluZ30gcmVxdWVzdFVSTCBUaGUgVVJMIHRvIHRlc3RcbiAgICAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIFVSTCBzaGFyZXMgdGhlIHNhbWUgb3JpZ2luLCBvdGhlcndpc2UgZmFsc2VcbiAgICAqL1xuICAgIHJldHVybiBmdW5jdGlvbiBpc1VSTFNhbWVPcmlnaW4ocmVxdWVzdFVSTCkge1xuICAgICAgdmFyIHBhcnNlZCA9ICh1dGlscy5pc1N0cmluZyhyZXF1ZXN0VVJMKSkgPyByZXNvbHZlVVJMKHJlcXVlc3RVUkwpIDogcmVxdWVzdFVSTDtcbiAgICAgIHJldHVybiAocGFyc2VkLnByb3RvY29sID09PSBvcmlnaW5VUkwucHJvdG9jb2wgJiZcbiAgICAgICAgICAgIHBhcnNlZC5ob3N0ID09PSBvcmlnaW5VUkwuaG9zdCk7XG4gICAgfTtcbiAgfSkoKSA6XG5cbiAgLy8gTm9uIHN0YW5kYXJkIGJyb3dzZXIgZW52cyAod2ViIHdvcmtlcnMsIHJlYWN0LW5hdGl2ZSkgbGFjayBuZWVkZWQgc3VwcG9ydC5cbiAgKGZ1bmN0aW9uIG5vblN0YW5kYXJkQnJvd3NlckVudigpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gaXNVUkxTYW1lT3JpZ2luKCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfTtcbiAgfSkoKVxuKTtcblxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9ub3JtYWxpemVIZWFkZXJOYW1lLmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvbm9ybWFsaXplSGVhZGVyTmFtZS5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5cbnZhciB1dGlscyA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4uL3V0aWxzICovIFwiLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL3V0aWxzLmpzXCIpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIG5vcm1hbGl6ZUhlYWRlck5hbWUoaGVhZGVycywgbm9ybWFsaXplZE5hbWUpIHtcbiAgdXRpbHMuZm9yRWFjaChoZWFkZXJzLCBmdW5jdGlvbiBwcm9jZXNzSGVhZGVyKHZhbHVlLCBuYW1lKSB7XG4gICAgaWYgKG5hbWUgIT09IG5vcm1hbGl6ZWROYW1lICYmIG5hbWUudG9VcHBlckNhc2UoKSA9PT0gbm9ybWFsaXplZE5hbWUudG9VcHBlckNhc2UoKSkge1xuICAgICAgaGVhZGVyc1tub3JtYWxpemVkTmFtZV0gPSB2YWx1ZTtcbiAgICAgIGRlbGV0ZSBoZWFkZXJzW25hbWVdO1xuICAgIH1cbiAgfSk7XG59O1xuXG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL3BhcnNlSGVhZGVycy5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvcGFyc2VIZWFkZXJzLmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG52YXIgdXRpbHMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuLy4uL3V0aWxzICovIFwiLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL3V0aWxzLmpzXCIpO1xuXG4vLyBIZWFkZXJzIHdob3NlIGR1cGxpY2F0ZXMgYXJlIGlnbm9yZWQgYnkgbm9kZVxuLy8gYy5mLiBodHRwczovL25vZGVqcy5vcmcvYXBpL2h0dHAuaHRtbCNodHRwX21lc3NhZ2VfaGVhZGVyc1xudmFyIGlnbm9yZUR1cGxpY2F0ZU9mID0gW1xuICAnYWdlJywgJ2F1dGhvcml6YXRpb24nLCAnY29udGVudC1sZW5ndGgnLCAnY29udGVudC10eXBlJywgJ2V0YWcnLFxuICAnZXhwaXJlcycsICdmcm9tJywgJ2hvc3QnLCAnaWYtbW9kaWZpZWQtc2luY2UnLCAnaWYtdW5tb2RpZmllZC1zaW5jZScsXG4gICdsYXN0LW1vZGlmaWVkJywgJ2xvY2F0aW9uJywgJ21heC1mb3J3YXJkcycsICdwcm94eS1hdXRob3JpemF0aW9uJyxcbiAgJ3JlZmVyZXInLCAncmV0cnktYWZ0ZXInLCAndXNlci1hZ2VudCdcbl07XG5cbi8qKlxuICogUGFyc2UgaGVhZGVycyBpbnRvIGFuIG9iamVjdFxuICpcbiAqIGBgYFxuICogRGF0ZTogV2VkLCAyNyBBdWcgMjAxNCAwODo1ODo0OSBHTVRcbiAqIENvbnRlbnQtVHlwZTogYXBwbGljYXRpb24vanNvblxuICogQ29ubmVjdGlvbjoga2VlcC1hbGl2ZVxuICogVHJhbnNmZXItRW5jb2Rpbmc6IGNodW5rZWRcbiAqIGBgYFxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBoZWFkZXJzIEhlYWRlcnMgbmVlZGluZyB0byBiZSBwYXJzZWRcbiAqIEByZXR1cm5zIHtPYmplY3R9IEhlYWRlcnMgcGFyc2VkIGludG8gYW4gb2JqZWN0XG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gcGFyc2VIZWFkZXJzKGhlYWRlcnMpIHtcbiAgdmFyIHBhcnNlZCA9IHt9O1xuICB2YXIga2V5O1xuICB2YXIgdmFsO1xuICB2YXIgaTtcblxuICBpZiAoIWhlYWRlcnMpIHsgcmV0dXJuIHBhcnNlZDsgfVxuXG4gIHV0aWxzLmZvckVhY2goaGVhZGVycy5zcGxpdCgnXFxuJyksIGZ1bmN0aW9uIHBhcnNlcihsaW5lKSB7XG4gICAgaSA9IGxpbmUuaW5kZXhPZignOicpO1xuICAgIGtleSA9IHV0aWxzLnRyaW0obGluZS5zdWJzdHIoMCwgaSkpLnRvTG93ZXJDYXNlKCk7XG4gICAgdmFsID0gdXRpbHMudHJpbShsaW5lLnN1YnN0cihpICsgMSkpO1xuXG4gICAgaWYgKGtleSkge1xuICAgICAgaWYgKHBhcnNlZFtrZXldICYmIGlnbm9yZUR1cGxpY2F0ZU9mLmluZGV4T2Yoa2V5KSA+PSAwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmIChrZXkgPT09ICdzZXQtY29va2llJykge1xuICAgICAgICBwYXJzZWRba2V5XSA9IChwYXJzZWRba2V5XSA/IHBhcnNlZFtrZXldIDogW10pLmNvbmNhdChbdmFsXSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwYXJzZWRba2V5XSA9IHBhcnNlZFtrZXldID8gcGFyc2VkW2tleV0gKyAnLCAnICsgdmFsIDogdmFsO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIHBhcnNlZDtcbn07XG5cblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvc3ByZWFkLmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9zcHJlYWQuanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5cbi8qKlxuICogU3ludGFjdGljIHN1Z2FyIGZvciBpbnZva2luZyBhIGZ1bmN0aW9uIGFuZCBleHBhbmRpbmcgYW4gYXJyYXkgZm9yIGFyZ3VtZW50cy5cbiAqXG4gKiBDb21tb24gdXNlIGNhc2Ugd291bGQgYmUgdG8gdXNlIGBGdW5jdGlvbi5wcm90b3R5cGUuYXBwbHlgLlxuICpcbiAqICBgYGBqc1xuICogIGZ1bmN0aW9uIGYoeCwgeSwgeikge31cbiAqICB2YXIgYXJncyA9IFsxLCAyLCAzXTtcbiAqICBmLmFwcGx5KG51bGwsIGFyZ3MpO1xuICogIGBgYFxuICpcbiAqIFdpdGggYHNwcmVhZGAgdGhpcyBleGFtcGxlIGNhbiBiZSByZS13cml0dGVuLlxuICpcbiAqICBgYGBqc1xuICogIHNwcmVhZChmdW5jdGlvbih4LCB5LCB6KSB7fSkoWzEsIDIsIDNdKTtcbiAqICBgYGBcbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFja1xuICogQHJldHVybnMge0Z1bmN0aW9ufVxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHNwcmVhZChjYWxsYmFjaykge1xuICByZXR1cm4gZnVuY3Rpb24gd3JhcChhcnIpIHtcbiAgICByZXR1cm4gY2FsbGJhY2suYXBwbHkobnVsbCwgYXJyKTtcbiAgfTtcbn07XG5cblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL3V0aWxzLmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvdXRpbHMuanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5cbnZhciBiaW5kID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9oZWxwZXJzL2JpbmQgKi8gXCIuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9iaW5kLmpzXCIpO1xudmFyIGlzQnVmZmVyID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgaXMtYnVmZmVyICovIFwiLi9ub2RlX21vZHVsZXMvaXMtYnVmZmVyL2luZGV4LmpzXCIpO1xuXG4vKmdsb2JhbCB0b1N0cmluZzp0cnVlKi9cblxuLy8gdXRpbHMgaXMgYSBsaWJyYXJ5IG9mIGdlbmVyaWMgaGVscGVyIGZ1bmN0aW9ucyBub24tc3BlY2lmaWMgdG8gYXhpb3NcblxudmFyIHRvU3RyaW5nID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZztcblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhbiBBcnJheVxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGFuIEFycmF5LCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNBcnJheSh2YWwpIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwodmFsKSA9PT0gJ1tvYmplY3QgQXJyYXldJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhbiBBcnJheUJ1ZmZlclxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGFuIEFycmF5QnVmZmVyLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNBcnJheUJ1ZmZlcih2YWwpIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwodmFsKSA9PT0gJ1tvYmplY3QgQXJyYXlCdWZmZXJdJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIEZvcm1EYXRhXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYW4gRm9ybURhdGEsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0Zvcm1EYXRhKHZhbCkge1xuICByZXR1cm4gKHR5cGVvZiBGb3JtRGF0YSAhPT0gJ3VuZGVmaW5lZCcpICYmICh2YWwgaW5zdGFuY2VvZiBGb3JtRGF0YSk7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSB2aWV3IG9uIGFuIEFycmF5QnVmZmVyXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSB2aWV3IG9uIGFuIEFycmF5QnVmZmVyLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNBcnJheUJ1ZmZlclZpZXcodmFsKSB7XG4gIHZhciByZXN1bHQ7XG4gIGlmICgodHlwZW9mIEFycmF5QnVmZmVyICE9PSAndW5kZWZpbmVkJykgJiYgKEFycmF5QnVmZmVyLmlzVmlldykpIHtcbiAgICByZXN1bHQgPSBBcnJheUJ1ZmZlci5pc1ZpZXcodmFsKTtcbiAgfSBlbHNlIHtcbiAgICByZXN1bHQgPSAodmFsKSAmJiAodmFsLmJ1ZmZlcikgJiYgKHZhbC5idWZmZXIgaW5zdGFuY2VvZiBBcnJheUJ1ZmZlcik7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIFN0cmluZ1xuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgU3RyaW5nLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNTdHJpbmcodmFsKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsID09PSAnc3RyaW5nJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIE51bWJlclxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgTnVtYmVyLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNOdW1iZXIodmFsKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsID09PSAnbnVtYmVyJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyB1bmRlZmluZWRcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB0aGUgdmFsdWUgaXMgdW5kZWZpbmVkLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNVbmRlZmluZWQodmFsKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsID09PSAndW5kZWZpbmVkJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhbiBPYmplY3RcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhbiBPYmplY3QsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc09iamVjdCh2YWwpIHtcbiAgcmV0dXJuIHZhbCAhPT0gbnVsbCAmJiB0eXBlb2YgdmFsID09PSAnb2JqZWN0Jztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIERhdGVcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIERhdGUsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0RhdGUodmFsKSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKHZhbCkgPT09ICdbb2JqZWN0IERhdGVdJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIEZpbGVcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIEZpbGUsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0ZpbGUodmFsKSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKHZhbCkgPT09ICdbb2JqZWN0IEZpbGVdJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIEJsb2JcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIEJsb2IsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0Jsb2IodmFsKSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKHZhbCkgPT09ICdbb2JqZWN0IEJsb2JdJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIEZ1bmN0aW9uXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBGdW5jdGlvbiwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzRnVuY3Rpb24odmFsKSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKHZhbCkgPT09ICdbb2JqZWN0IEZ1bmN0aW9uXSc7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBTdHJlYW1cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIFN0cmVhbSwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzU3RyZWFtKHZhbCkge1xuICByZXR1cm4gaXNPYmplY3QodmFsKSAmJiBpc0Z1bmN0aW9uKHZhbC5waXBlKTtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIFVSTFNlYXJjaFBhcmFtcyBvYmplY3RcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIFVSTFNlYXJjaFBhcmFtcyBvYmplY3QsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc1VSTFNlYXJjaFBhcmFtcyh2YWwpIHtcbiAgcmV0dXJuIHR5cGVvZiBVUkxTZWFyY2hQYXJhbXMgIT09ICd1bmRlZmluZWQnICYmIHZhbCBpbnN0YW5jZW9mIFVSTFNlYXJjaFBhcmFtcztcbn1cblxuLyoqXG4gKiBUcmltIGV4Y2VzcyB3aGl0ZXNwYWNlIG9mZiB0aGUgYmVnaW5uaW5nIGFuZCBlbmQgb2YgYSBzdHJpbmdcbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RyIFRoZSBTdHJpbmcgdG8gdHJpbVxuICogQHJldHVybnMge1N0cmluZ30gVGhlIFN0cmluZyBmcmVlZCBvZiBleGNlc3Mgd2hpdGVzcGFjZVxuICovXG5mdW5jdGlvbiB0cmltKHN0cikge1xuICByZXR1cm4gc3RyLnJlcGxhY2UoL15cXHMqLywgJycpLnJlcGxhY2UoL1xccyokLywgJycpO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiB3ZSdyZSBydW5uaW5nIGluIGEgc3RhbmRhcmQgYnJvd3NlciBlbnZpcm9ubWVudFxuICpcbiAqIFRoaXMgYWxsb3dzIGF4aW9zIHRvIHJ1biBpbiBhIHdlYiB3b3JrZXIsIGFuZCByZWFjdC1uYXRpdmUuXG4gKiBCb3RoIGVudmlyb25tZW50cyBzdXBwb3J0IFhNTEh0dHBSZXF1ZXN0LCBidXQgbm90IGZ1bGx5IHN0YW5kYXJkIGdsb2JhbHMuXG4gKlxuICogd2ViIHdvcmtlcnM6XG4gKiAgdHlwZW9mIHdpbmRvdyAtPiB1bmRlZmluZWRcbiAqICB0eXBlb2YgZG9jdW1lbnQgLT4gdW5kZWZpbmVkXG4gKlxuICogcmVhY3QtbmF0aXZlOlxuICogIG5hdmlnYXRvci5wcm9kdWN0IC0+ICdSZWFjdE5hdGl2ZSdcbiAqL1xuZnVuY3Rpb24gaXNTdGFuZGFyZEJyb3dzZXJFbnYoKSB7XG4gIGlmICh0eXBlb2YgbmF2aWdhdG9yICE9PSAndW5kZWZpbmVkJyAmJiBuYXZpZ2F0b3IucHJvZHVjdCA9PT0gJ1JlYWN0TmF0aXZlJykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICByZXR1cm4gKFxuICAgIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmXG4gICAgdHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJ1xuICApO1xufVxuXG4vKipcbiAqIEl0ZXJhdGUgb3ZlciBhbiBBcnJheSBvciBhbiBPYmplY3QgaW52b2tpbmcgYSBmdW5jdGlvbiBmb3IgZWFjaCBpdGVtLlxuICpcbiAqIElmIGBvYmpgIGlzIGFuIEFycmF5IGNhbGxiYWNrIHdpbGwgYmUgY2FsbGVkIHBhc3NpbmdcbiAqIHRoZSB2YWx1ZSwgaW5kZXgsIGFuZCBjb21wbGV0ZSBhcnJheSBmb3IgZWFjaCBpdGVtLlxuICpcbiAqIElmICdvYmonIGlzIGFuIE9iamVjdCBjYWxsYmFjayB3aWxsIGJlIGNhbGxlZCBwYXNzaW5nXG4gKiB0aGUgdmFsdWUsIGtleSwgYW5kIGNvbXBsZXRlIG9iamVjdCBmb3IgZWFjaCBwcm9wZXJ0eS5cbiAqXG4gKiBAcGFyYW0ge09iamVjdHxBcnJheX0gb2JqIFRoZSBvYmplY3QgdG8gaXRlcmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm4gVGhlIGNhbGxiYWNrIHRvIGludm9rZSBmb3IgZWFjaCBpdGVtXG4gKi9cbmZ1bmN0aW9uIGZvckVhY2gob2JqLCBmbikge1xuICAvLyBEb24ndCBib3RoZXIgaWYgbm8gdmFsdWUgcHJvdmlkZWRcbiAgaWYgKG9iaiA9PT0gbnVsbCB8fCB0eXBlb2Ygb2JqID09PSAndW5kZWZpbmVkJykge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8vIEZvcmNlIGFuIGFycmF5IGlmIG5vdCBhbHJlYWR5IHNvbWV0aGluZyBpdGVyYWJsZVxuICBpZiAodHlwZW9mIG9iaiAhPT0gJ29iamVjdCcpIHtcbiAgICAvKmVzbGludCBuby1wYXJhbS1yZWFzc2lnbjowKi9cbiAgICBvYmogPSBbb2JqXTtcbiAgfVxuXG4gIGlmIChpc0FycmF5KG9iaikpIHtcbiAgICAvLyBJdGVyYXRlIG92ZXIgYXJyYXkgdmFsdWVzXG4gICAgZm9yICh2YXIgaSA9IDAsIGwgPSBvYmoubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBmbi5jYWxsKG51bGwsIG9ialtpXSwgaSwgb2JqKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgLy8gSXRlcmF0ZSBvdmVyIG9iamVjdCBrZXlzXG4gICAgZm9yICh2YXIga2V5IGluIG9iaikge1xuICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIHtcbiAgICAgICAgZm4uY2FsbChudWxsLCBvYmpba2V5XSwga2V5LCBvYmopO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIEFjY2VwdHMgdmFyYXJncyBleHBlY3RpbmcgZWFjaCBhcmd1bWVudCB0byBiZSBhbiBvYmplY3QsIHRoZW5cbiAqIGltbXV0YWJseSBtZXJnZXMgdGhlIHByb3BlcnRpZXMgb2YgZWFjaCBvYmplY3QgYW5kIHJldHVybnMgcmVzdWx0LlxuICpcbiAqIFdoZW4gbXVsdGlwbGUgb2JqZWN0cyBjb250YWluIHRoZSBzYW1lIGtleSB0aGUgbGF0ZXIgb2JqZWN0IGluXG4gKiB0aGUgYXJndW1lbnRzIGxpc3Qgd2lsbCB0YWtlIHByZWNlZGVuY2UuXG4gKlxuICogRXhhbXBsZTpcbiAqXG4gKiBgYGBqc1xuICogdmFyIHJlc3VsdCA9IG1lcmdlKHtmb286IDEyM30sIHtmb286IDQ1Nn0pO1xuICogY29uc29sZS5sb2cocmVzdWx0LmZvbyk7IC8vIG91dHB1dHMgNDU2XG4gKiBgYGBcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqMSBPYmplY3QgdG8gbWVyZ2VcbiAqIEByZXR1cm5zIHtPYmplY3R9IFJlc3VsdCBvZiBhbGwgbWVyZ2UgcHJvcGVydGllc1xuICovXG5mdW5jdGlvbiBtZXJnZSgvKiBvYmoxLCBvYmoyLCBvYmozLCAuLi4gKi8pIHtcbiAgdmFyIHJlc3VsdCA9IHt9O1xuICBmdW5jdGlvbiBhc3NpZ25WYWx1ZSh2YWwsIGtleSkge1xuICAgIGlmICh0eXBlb2YgcmVzdWx0W2tleV0gPT09ICdvYmplY3QnICYmIHR5cGVvZiB2YWwgPT09ICdvYmplY3QnKSB7XG4gICAgICByZXN1bHRba2V5XSA9IG1lcmdlKHJlc3VsdFtrZXldLCB2YWwpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXN1bHRba2V5XSA9IHZhbDtcbiAgICB9XG4gIH1cblxuICBmb3IgKHZhciBpID0gMCwgbCA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBmb3JFYWNoKGFyZ3VtZW50c1tpXSwgYXNzaWduVmFsdWUpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogRXh0ZW5kcyBvYmplY3QgYSBieSBtdXRhYmx5IGFkZGluZyB0byBpdCB0aGUgcHJvcGVydGllcyBvZiBvYmplY3QgYi5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gYSBUaGUgb2JqZWN0IHRvIGJlIGV4dGVuZGVkXG4gKiBAcGFyYW0ge09iamVjdH0gYiBUaGUgb2JqZWN0IHRvIGNvcHkgcHJvcGVydGllcyBmcm9tXG4gKiBAcGFyYW0ge09iamVjdH0gdGhpc0FyZyBUaGUgb2JqZWN0IHRvIGJpbmQgZnVuY3Rpb24gdG9cbiAqIEByZXR1cm4ge09iamVjdH0gVGhlIHJlc3VsdGluZyB2YWx1ZSBvZiBvYmplY3QgYVxuICovXG5mdW5jdGlvbiBleHRlbmQoYSwgYiwgdGhpc0FyZykge1xuICBmb3JFYWNoKGIsIGZ1bmN0aW9uIGFzc2lnblZhbHVlKHZhbCwga2V5KSB7XG4gICAgaWYgKHRoaXNBcmcgJiYgdHlwZW9mIHZhbCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgYVtrZXldID0gYmluZCh2YWwsIHRoaXNBcmcpO1xuICAgIH0gZWxzZSB7XG4gICAgICBhW2tleV0gPSB2YWw7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIGE7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBpc0FycmF5OiBpc0FycmF5LFxuICBpc0FycmF5QnVmZmVyOiBpc0FycmF5QnVmZmVyLFxuICBpc0J1ZmZlcjogaXNCdWZmZXIsXG4gIGlzRm9ybURhdGE6IGlzRm9ybURhdGEsXG4gIGlzQXJyYXlCdWZmZXJWaWV3OiBpc0FycmF5QnVmZmVyVmlldyxcbiAgaXNTdHJpbmc6IGlzU3RyaW5nLFxuICBpc051bWJlcjogaXNOdW1iZXIsXG4gIGlzT2JqZWN0OiBpc09iamVjdCxcbiAgaXNVbmRlZmluZWQ6IGlzVW5kZWZpbmVkLFxuICBpc0RhdGU6IGlzRGF0ZSxcbiAgaXNGaWxlOiBpc0ZpbGUsXG4gIGlzQmxvYjogaXNCbG9iLFxuICBpc0Z1bmN0aW9uOiBpc0Z1bmN0aW9uLFxuICBpc1N0cmVhbTogaXNTdHJlYW0sXG4gIGlzVVJMU2VhcmNoUGFyYW1zOiBpc1VSTFNlYXJjaFBhcmFtcyxcbiAgaXNTdGFuZGFyZEJyb3dzZXJFbnY6IGlzU3RhbmRhcmRCcm93c2VyRW52LFxuICBmb3JFYWNoOiBmb3JFYWNoLFxuICBtZXJnZTogbWVyZ2UsXG4gIGV4dGVuZDogZXh0ZW5kLFxuICB0cmltOiB0cmltXG59O1xuXG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vbm9kZV9tb2R1bGVzL2lzLWJ1ZmZlci9pbmRleC5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9ub2RlX21vZHVsZXMvaXMtYnVmZmVyL2luZGV4LmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG4vKiFcbiAqIERldGVybWluZSBpZiBhbiBvYmplY3QgaXMgYSBCdWZmZXJcbiAqXG4gKiBAYXV0aG9yICAgRmVyb3NzIEFib3VraGFkaWplaCA8aHR0cHM6Ly9mZXJvc3Mub3JnPlxuICogQGxpY2Vuc2UgIE1JVFxuICovXG5cbi8vIFRoZSBfaXNCdWZmZXIgY2hlY2sgaXMgZm9yIFNhZmFyaSA1LTcgc3VwcG9ydCwgYmVjYXVzZSBpdCdzIG1pc3Npbmdcbi8vIE9iamVjdC5wcm90b3R5cGUuY29uc3RydWN0b3IuIFJlbW92ZSB0aGlzIGV2ZW50dWFsbHlcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG9iaikge1xuICByZXR1cm4gb2JqICE9IG51bGwgJiYgKGlzQnVmZmVyKG9iaikgfHwgaXNTbG93QnVmZmVyKG9iaikgfHwgISFvYmouX2lzQnVmZmVyKVxufVxuXG5mdW5jdGlvbiBpc0J1ZmZlciAob2JqKSB7XG4gIHJldHVybiAhIW9iai5jb25zdHJ1Y3RvciAmJiB0eXBlb2Ygb2JqLmNvbnN0cnVjdG9yLmlzQnVmZmVyID09PSAnZnVuY3Rpb24nICYmIG9iai5jb25zdHJ1Y3Rvci5pc0J1ZmZlcihvYmopXG59XG5cbi8vIEZvciBOb2RlIHYwLjEwIHN1cHBvcnQuIFJlbW92ZSB0aGlzIGV2ZW50dWFsbHkuXG5mdW5jdGlvbiBpc1Nsb3dCdWZmZXIgKG9iaikge1xuICByZXR1cm4gdHlwZW9mIG9iai5yZWFkRmxvYXRMRSA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2Ygb2JqLnNsaWNlID09PSAnZnVuY3Rpb24nICYmIGlzQnVmZmVyKG9iai5zbGljZSgwLCAwKSlcbn1cblxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL25vZGVfbW9kdWxlcy9wcm9jZXNzL2Jyb3dzZXIuanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vbm9kZV9tb2R1bGVzL3Byb2Nlc3MvYnJvd3Nlci5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxuLy8gc2hpbSBmb3IgdXNpbmcgcHJvY2VzcyBpbiBicm93c2VyXG52YXIgcHJvY2VzcyA9IG1vZHVsZS5leHBvcnRzID0ge307XG5cbi8vIGNhY2hlZCBmcm9tIHdoYXRldmVyIGdsb2JhbCBpcyBwcmVzZW50IHNvIHRoYXQgdGVzdCBydW5uZXJzIHRoYXQgc3R1YiBpdFxuLy8gZG9uJ3QgYnJlYWsgdGhpbmdzLiAgQnV0IHdlIG5lZWQgdG8gd3JhcCBpdCBpbiBhIHRyeSBjYXRjaCBpbiBjYXNlIGl0IGlzXG4vLyB3cmFwcGVkIGluIHN0cmljdCBtb2RlIGNvZGUgd2hpY2ggZG9lc24ndCBkZWZpbmUgYW55IGdsb2JhbHMuICBJdCdzIGluc2lkZSBhXG4vLyBmdW5jdGlvbiBiZWNhdXNlIHRyeS9jYXRjaGVzIGRlb3B0aW1pemUgaW4gY2VydGFpbiBlbmdpbmVzLlxuXG52YXIgY2FjaGVkU2V0VGltZW91dDtcbnZhciBjYWNoZWRDbGVhclRpbWVvdXQ7XG5cbmZ1bmN0aW9uIGRlZmF1bHRTZXRUaW1vdXQoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdzZXRUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG5mdW5jdGlvbiBkZWZhdWx0Q2xlYXJUaW1lb3V0ICgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2NsZWFyVGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuKGZ1bmN0aW9uICgpIHtcbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIHNldFRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIGNsZWFyVGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICB9XG59ICgpKVxuZnVuY3Rpb24gcnVuVGltZW91dChmdW4pIHtcbiAgICBpZiAoY2FjaGVkU2V0VGltZW91dCA9PT0gc2V0VGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgLy8gaWYgc2V0VGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZFNldFRpbWVvdXQgPT09IGRlZmF1bHRTZXRUaW1vdXQgfHwgIWNhY2hlZFNldFRpbWVvdXQpICYmIHNldFRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9IGNhdGNoKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0IHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKG51bGwsIGZ1biwgMCk7XG4gICAgICAgIH0gY2F0Y2goZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvclxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbCh0aGlzLCBmdW4sIDApO1xuICAgICAgICB9XG4gICAgfVxuXG5cbn1cbmZ1bmN0aW9uIHJ1bkNsZWFyVGltZW91dChtYXJrZXIpIHtcbiAgICBpZiAoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgLy8gaWYgY2xlYXJUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBkZWZhdWx0Q2xlYXJUaW1lb3V0IHx8ICFjYWNoZWRDbGVhclRpbWVvdXQpICYmIGNsZWFyVGltZW91dCkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfSBjYXRjaCAoZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgIHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwobnVsbCwgbWFya2VyKTtcbiAgICAgICAgfSBjYXRjaCAoZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvci5cbiAgICAgICAgICAgIC8vIFNvbWUgdmVyc2lvbnMgb2YgSS5FLiBoYXZlIGRpZmZlcmVudCBydWxlcyBmb3IgY2xlYXJUaW1lb3V0IHZzIHNldFRpbWVvdXRcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbCh0aGlzLCBtYXJrZXIpO1xuICAgICAgICB9XG4gICAgfVxuXG5cblxufVxudmFyIHF1ZXVlID0gW107XG52YXIgZHJhaW5pbmcgPSBmYWxzZTtcbnZhciBjdXJyZW50UXVldWU7XG52YXIgcXVldWVJbmRleCA9IC0xO1xuXG5mdW5jdGlvbiBjbGVhblVwTmV4dFRpY2soKSB7XG4gICAgaWYgKCFkcmFpbmluZyB8fCAhY3VycmVudFF1ZXVlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBpZiAoY3VycmVudFF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBxdWV1ZSA9IGN1cnJlbnRRdWV1ZS5jb25jYXQocXVldWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICB9XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBkcmFpblF1ZXVlKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBkcmFpblF1ZXVlKCkge1xuICAgIGlmIChkcmFpbmluZykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciB0aW1lb3V0ID0gcnVuVGltZW91dChjbGVhblVwTmV4dFRpY2spO1xuICAgIGRyYWluaW5nID0gdHJ1ZTtcblxuICAgIHZhciBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgd2hpbGUobGVuKSB7XG4gICAgICAgIGN1cnJlbnRRdWV1ZSA9IHF1ZXVlO1xuICAgICAgICBxdWV1ZSA9IFtdO1xuICAgICAgICB3aGlsZSAoKytxdWV1ZUluZGV4IDwgbGVuKSB7XG4gICAgICAgICAgICBpZiAoY3VycmVudFF1ZXVlKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudFF1ZXVlW3F1ZXVlSW5kZXhdLnJ1bigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICAgICAgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIH1cbiAgICBjdXJyZW50UXVldWUgPSBudWxsO1xuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgcnVuQ2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xufVxuXG5wcm9jZXNzLm5leHRUaWNrID0gZnVuY3Rpb24gKGZ1bikge1xuICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGggLSAxKTtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGFyZ3NbaSAtIDFdID0gYXJndW1lbnRzW2ldO1xuICAgICAgICB9XG4gICAgfVxuICAgIHF1ZXVlLnB1c2gobmV3IEl0ZW0oZnVuLCBhcmdzKSk7XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCA9PT0gMSAmJiAhZHJhaW5pbmcpIHtcbiAgICAgICAgcnVuVGltZW91dChkcmFpblF1ZXVlKTtcbiAgICB9XG59O1xuXG4vLyB2OCBsaWtlcyBwcmVkaWN0aWJsZSBvYmplY3RzXG5mdW5jdGlvbiBJdGVtKGZ1biwgYXJyYXkpIHtcbiAgICB0aGlzLmZ1biA9IGZ1bjtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG59XG5JdGVtLnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5mdW4uYXBwbHkobnVsbCwgdGhpcy5hcnJheSk7XG59O1xucHJvY2Vzcy50aXRsZSA9ICdicm93c2VyJztcbnByb2Nlc3MuYnJvd3NlciA9IHRydWU7XG5wcm9jZXNzLmVudiA9IHt9O1xucHJvY2Vzcy5hcmd2ID0gW107XG5wcm9jZXNzLnZlcnNpb24gPSAnJzsgLy8gZW1wdHkgc3RyaW5nIHRvIGF2b2lkIHJlZ2V4cCBpc3N1ZXNcbnByb2Nlc3MudmVyc2lvbnMgPSB7fTtcblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbnByb2Nlc3Mub24gPSBub29wO1xucHJvY2Vzcy5hZGRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLm9uY2UgPSBub29wO1xucHJvY2Vzcy5vZmYgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUFsbExpc3RlbmVycyA9IG5vb3A7XG5wcm9jZXNzLmVtaXQgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kT25jZUxpc3RlbmVyID0gbm9vcDtcblxucHJvY2Vzcy5saXN0ZW5lcnMgPSBmdW5jdGlvbiAobmFtZSkgeyByZXR1cm4gW10gfVxuXG5wcm9jZXNzLmJpbmRpbmcgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5iaW5kaW5nIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5cbnByb2Nlc3MuY3dkID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gJy8nIH07XG5wcm9jZXNzLmNoZGlyID0gZnVuY3Rpb24gKGRpcikge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5jaGRpciBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xucHJvY2Vzcy51bWFzayA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gMDsgfTtcblxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL3NyYy9jaGFubmVscy9jaGFubmVsLmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9zcmMvY2hhbm5lbHMvY2hhbm5lbC5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIGV4cG9ydHMgcHJvdmlkZWQ6IENoYW5uZWwgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIF9fd2VicGFja19leHBvcnRzX18sIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIoX193ZWJwYWNrX2V4cG9ydHNfXyk7XG4vKiBoYXJtb255IGV4cG9ydCAoYmluZGluZykgKi8gX193ZWJwYWNrX3JlcXVpcmVfXy5kKF9fd2VicGFja19leHBvcnRzX18sIFwiQ2hhbm5lbFwiLCBmdW5jdGlvbigpIHsgcmV0dXJuIENoYW5uZWw7IH0pO1xuLyogaGFybW9ueSBpbXBvcnQgKi8gdmFyIF9ldmVudHNfZGlzcGF0Y2hlcl9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi4vZXZlbnRzL2Rpc3BhdGNoZXIgKi8gXCIuL3NyYy9ldmVudHMvZGlzcGF0Y2hlci5qc1wiKTtcbmZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH07IH0gZWxzZSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTsgfSByZXR1cm4gX3R5cGVvZihvYmopOyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoY2FsbCAmJiAoX3R5cGVvZihjYWxsKSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSkgeyByZXR1cm4gY2FsbDsgfSByZXR1cm4gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKTsgfVxuXG5mdW5jdGlvbiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpIHsgaWYgKHNlbGYgPT09IHZvaWQgMCkgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIHNlbGY7IH1cblxuZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgX2dldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LmdldFByb3RvdHlwZU9mIDogZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgcmV0dXJuIG8uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihvKTsgfTsgcmV0dXJuIF9nZXRQcm90b3R5cGVPZihvKTsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgX3NldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKTsgfVxuXG5mdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgby5fX3Byb3RvX18gPSBwOyByZXR1cm4gbzsgfTsgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihvLCBwKTsgfVxuXG5cbnZhciBDaGFubmVsID1cbi8qI19fUFVSRV9fKi9cbmZ1bmN0aW9uIChfRGlzcGF0Y2hlcikge1xuICBfaW5oZXJpdHMoQ2hhbm5lbCwgX0Rpc3BhdGNoZXIpO1xuXG4gIGZ1bmN0aW9uIENoYW5uZWwobmFtZSwgcHVzaGVyKSB7XG4gICAgdmFyIF90aGlzO1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIENoYW5uZWwpO1xuXG4gICAgX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfZ2V0UHJvdG90eXBlT2YoQ2hhbm5lbCkuY2FsbCh0aGlzKSk7XG4gICAgX3RoaXMubmFtZSA9IG5hbWU7XG4gICAgX3RoaXMucHVzaGVyID0gcHVzaGVyO1xuXG4gICAgaWYgKF90aGlzLnB1c2hlci5zb2NrZXQuc3RhdGUgPT0gMSkge1xuICAgICAgX3RoaXMuc3Vic2NyaWJlKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKENoYW5uZWwsIFt7XG4gICAga2V5OiBcInN1YnNjcmliZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzdWJzY3JpYmUoKSB7XG4gICAgICB0aGlzLnB1c2hlci5zZW5kKHtcbiAgICAgICAgZXZlbnQ6ICdzdWJzY3JpYmUnLFxuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgY2hhbm5lbDogdGhpcy5uYW1lXG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJ1bnN1YnNjcmliZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiB1bnN1YnNjcmliZSgpIHtcbiAgICAgIHRoaXMucHVzaGVyLnNlbmQoe1xuICAgICAgICBldmVudDogJ3Vuc3Vic2NyaWJlJyxcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgIGNoYW5uZWw6IHRoaXMubmFtZVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gQ2hhbm5lbDtcbn0oX2V2ZW50c19kaXNwYXRjaGVyX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX19bXCJEaXNwYXRjaGVyXCJdKTtcblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9zcmMvY2hhbm5lbHMvbWFubmFnZXIuanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9zcmMvY2hhbm5lbHMvbWFubmFnZXIuanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgZXhwb3J0cyBwcm92aWRlZDogTWFubmFnZXIgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIF9fd2VicGFja19leHBvcnRzX18sIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIoX193ZWJwYWNrX2V4cG9ydHNfXyk7XG4vKiBoYXJtb255IGV4cG9ydCAoYmluZGluZykgKi8gX193ZWJwYWNrX3JlcXVpcmVfXy5kKF9fd2VicGFja19leHBvcnRzX18sIFwiTWFubmFnZXJcIiwgZnVuY3Rpb24oKSB7IHJldHVybiBNYW5uYWdlcjsgfSk7XG4vKiBoYXJtb255IGltcG9ydCAqLyB2YXIgX2NoYW5uZWxfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfXyA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vY2hhbm5lbCAqLyBcIi4vc3JjL2NoYW5uZWxzL2NoYW5uZWwuanNcIik7XG4vKiBoYXJtb255IGltcG9ydCAqLyB2YXIgX3ByZXNlbmNlX2NoYW5uZWxfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzFfXyA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vcHJlc2VuY2VfY2hhbm5lbCAqLyBcIi4vc3JjL2NoYW5uZWxzL3ByZXNlbmNlX2NoYW5uZWwuanNcIik7XG4vKiBoYXJtb255IGltcG9ydCAqLyB2YXIgX3ByaXZhdGVfY2hhbm5lbF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMl9fID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9wcml2YXRlX2NoYW5uZWwgKi8gXCIuL3NyYy9jaGFubmVscy9wcml2YXRlX2NoYW5uZWwuanNcIik7XG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9XG5cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9XG5cblxuXG5cbnZhciBNYW5uYWdlciA9XG4vKiNfX1BVUkVfXyovXG5mdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIE1hbm5hZ2VyKCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBNYW5uYWdlcik7XG5cbiAgICB0aGlzLmNoYW5uZWxzID0ge307XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoTWFubmFnZXIsIFt7XG4gICAga2V5OiBcImFkZFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBhZGQobmFtZSwgcHVzaGVyKSB7XG4gICAgICBpZiAoIXRoaXMuY2hhbm5lbHNbbmFtZV0pIHtcbiAgICAgICAgdGhpcy5jaGFubmVsc1tuYW1lXSA9IGNyZWF0ZUNoYW5uZWwobmFtZSwgcHVzaGVyKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuY2hhbm5lbHNbbmFtZV07XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImFsbFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBhbGwoKSB7XG4gICAgICByZXR1cm4gT2JqZWN0LmtleXModGhpcy5jaGFubmVscyk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImZpbmRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZmluZChuYW1lKSB7XG4gICAgICByZXR1cm4gdGhpcy5jaGFubmVsc1tuYW1lXTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwicmVtb3ZlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbW92ZShuYW1lKSB7XG4gICAgICB2YXIgY2hhbm5lbCA9IHRoaXMuY2hhbm5lbHNbbmFtZV07XG4gICAgICBkZWxldGUgdGhpcy5jaGFubmVsc1tuYW1lXTtcbiAgICAgIHJldHVybiBjaGFubmVsO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJzdWJzY3JpYmVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gc3Vic2NyaWJlKCkge1xuICAgICAgZm9yICh2YXIgaSBpbiB0aGlzLmNoYW5uZWxzKSB7XG4gICAgICAgIHRoaXMuY2hhbm5lbHNbaV0uc3Vic2NyaWJlKCk7XG4gICAgICB9XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIE1hbm5hZ2VyO1xufSgpO1xuXG5mdW5jdGlvbiBjcmVhdGVDaGFubmVsKG5hbWUsIHB1c2hlcikge1xuICBpZiAobmFtZS5pbmRleE9mKCdwcml2YXRlLScpID09PSAwKSB7XG4gICAgcmV0dXJuIG5ldyBfcHJpdmF0ZV9jaGFubmVsX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8yX19bXCJQcml2YXRlQ2hhbm5lbFwiXShuYW1lLCBwdXNoZXIpO1xuICB9IGVsc2UgaWYgKG5hbWUuaW5kZXhPZigncHJlc2VuY2UtJykgPT09IDApIHtcbiAgICByZXR1cm4gbmV3IF9wcmVzZW5jZV9jaGFubmVsX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8xX19bXCJQcmVzZW5jZUNoYW5uZWxcIl0obmFtZSwgcHVzaGVyKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gbmV3IF9jaGFubmVsX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX19bXCJDaGFubmVsXCJdKG5hbWUsIHB1c2hlcik7XG4gIH1cbn1cblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9zcmMvY2hhbm5lbHMvcHJlc2VuY2VfY2hhbm5lbC5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vc3JjL2NoYW5uZWxzL3ByZXNlbmNlX2NoYW5uZWwuanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBleHBvcnRzIHByb3ZpZGVkOiBQcmVzZW5jZUNoYW5uZWwgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIF9fd2VicGFja19leHBvcnRzX18sIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIoX193ZWJwYWNrX2V4cG9ydHNfXyk7XG4vKiBoYXJtb255IGV4cG9ydCAoYmluZGluZykgKi8gX193ZWJwYWNrX3JlcXVpcmVfXy5kKF9fd2VicGFja19leHBvcnRzX18sIFwiUHJlc2VuY2VDaGFubmVsXCIsIGZ1bmN0aW9uKCkgeyByZXR1cm4gUHJlc2VuY2VDaGFubmVsOyB9KTtcbi8qIGhhcm1vbnkgaW1wb3J0ICovIHZhciBfZXZlbnRzX2Rpc3BhdGNoZXJfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfXyA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4uL2V2ZW50cy9kaXNwYXRjaGVyICovIFwiLi9zcmMvZXZlbnRzL2Rpc3BhdGNoZXIuanNcIik7XG5mdW5jdGlvbiBfdHlwZW9mKG9iaikgeyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9OyB9IGVsc2UgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07IH0gcmV0dXJuIF90eXBlb2Yob2JqKTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9XG5cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKGNhbGwgJiYgKF90eXBlb2YoY2FsbCkgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikpIHsgcmV0dXJuIGNhbGw7IH0gcmV0dXJuIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZik7IH1cblxuZnVuY3Rpb24gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKSB7IGlmIChzZWxmID09PSB2b2lkIDApIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IF9nZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5nZXRQcm90b3R5cGVPZiA6IGZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IHJldHVybiBvLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2Yobyk7IH07IHJldHVybiBfZ2V0UHJvdG90eXBlT2Yobyk7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uXCIpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIF9zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcyk7IH1cblxuZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgX3NldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IG8uX19wcm90b19fID0gcDsgcmV0dXJuIG87IH07IHJldHVybiBfc2V0UHJvdG90eXBlT2YobywgcCk7IH1cblxuXG52YXIgUHJlc2VuY2VDaGFubmVsID1cbi8qI19fUFVSRV9fKi9cbmZ1bmN0aW9uIChfRGlzcGF0Y2hlcikge1xuICBfaW5oZXJpdHMoUHJlc2VuY2VDaGFubmVsLCBfRGlzcGF0Y2hlcik7XG5cbiAgZnVuY3Rpb24gUHJlc2VuY2VDaGFubmVsKG5hbWUsIHB1c2hlcikge1xuICAgIHZhciBfdGhpcztcblxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBQcmVzZW5jZUNoYW5uZWwpO1xuXG4gICAgX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfZ2V0UHJvdG90eXBlT2YoUHJlc2VuY2VDaGFubmVsKS5jYWxsKHRoaXMpKTtcbiAgICBfdGhpcy5uYW1lID0gbmFtZTtcbiAgICBfdGhpcy5wdXNoZXIgPSBwdXNoZXI7XG4gICAgX3RoaXMuYXV0aCA9IG51bGw7XG5cbiAgICBpZiAoX3RoaXMucHVzaGVyLnNvY2tldC5zdGF0ZSA9PSAxKSB7XG4gICAgICBfdGhpcy5zdWJzY3JpYmUoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoUHJlc2VuY2VDaGFubmVsLCBbe1xuICAgIGtleTogXCJzdWJzY3JpYmVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gc3Vic2NyaWJlKCkge1xuICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgIHRoaXMucHVzaGVyLmF1dGgodGhpcy5uYW1lLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICBfdGhpczIuYXV0aCA9IGUuZGF0YS5hdXRoO1xuXG4gICAgICAgIF90aGlzMi5wdXNoZXIuc2VuZCh7XG4gICAgICAgICAgZXZlbnQ6ICdzdWJzY3JpYmUnLFxuICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgIGNoYW5uZWw6IF90aGlzMi5uYW1lLFxuICAgICAgICAgICAgYXV0aDogX3RoaXMyLmF1dGgsXG4gICAgICAgICAgICBjaGFubmVsX2RhdGE6IGUuZGF0YS5jaGFubmVsX2RhdGFcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInVuc3Vic2NyaWJlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHVuc3Vic2NyaWJlKCkge1xuICAgICAgdGhpcy5wdXNoZXIuc2VuZCh7XG4gICAgICAgIGV2ZW50OiAndW5zdWJzY3JpYmUnLFxuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgY2hhbm5lbDogdGhpcy5uYW1lXG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBQcmVzZW5jZUNoYW5uZWw7XG59KF9ldmVudHNfZGlzcGF0Y2hlcl9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fW1wiRGlzcGF0Y2hlclwiXSk7XG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vc3JjL2NoYW5uZWxzL3ByaXZhdGVfY2hhbm5lbC5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9zcmMvY2hhbm5lbHMvcHJpdmF0ZV9jaGFubmVsLmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBleHBvcnRzIHByb3ZpZGVkOiBQcml2YXRlQ2hhbm5lbCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgX193ZWJwYWNrX2V4cG9ydHNfXywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcbl9fd2VicGFja19yZXF1aXJlX18ucihfX3dlYnBhY2tfZXhwb3J0c19fKTtcbi8qIGhhcm1vbnkgZXhwb3J0IChiaW5kaW5nKSAqLyBfX3dlYnBhY2tfcmVxdWlyZV9fLmQoX193ZWJwYWNrX2V4cG9ydHNfXywgXCJQcml2YXRlQ2hhbm5lbFwiLCBmdW5jdGlvbigpIHsgcmV0dXJuIFByaXZhdGVDaGFubmVsOyB9KTtcbi8qIGhhcm1vbnkgaW1wb3J0ICovIHZhciBfZXZlbnRzX2Rpc3BhdGNoZXJfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfXyA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4uL2V2ZW50cy9kaXNwYXRjaGVyICovIFwiLi9zcmMvZXZlbnRzL2Rpc3BhdGNoZXIuanNcIik7XG5mdW5jdGlvbiBfdHlwZW9mKG9iaikgeyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9OyB9IGVsc2UgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07IH0gcmV0dXJuIF90eXBlb2Yob2JqKTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9XG5cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKGNhbGwgJiYgKF90eXBlb2YoY2FsbCkgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikpIHsgcmV0dXJuIGNhbGw7IH0gcmV0dXJuIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZik7IH1cblxuZnVuY3Rpb24gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKSB7IGlmIChzZWxmID09PSB2b2lkIDApIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IF9nZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5nZXRQcm90b3R5cGVPZiA6IGZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IHJldHVybiBvLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2Yobyk7IH07IHJldHVybiBfZ2V0UHJvdG90eXBlT2Yobyk7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uXCIpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIF9zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcyk7IH1cblxuZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgX3NldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IG8uX19wcm90b19fID0gcDsgcmV0dXJuIG87IH07IHJldHVybiBfc2V0UHJvdG90eXBlT2YobywgcCk7IH1cblxuXG52YXIgUHJpdmF0ZUNoYW5uZWwgPVxuLyojX19QVVJFX18qL1xuZnVuY3Rpb24gKF9EaXNwYXRjaGVyKSB7XG4gIF9pbmhlcml0cyhQcml2YXRlQ2hhbm5lbCwgX0Rpc3BhdGNoZXIpO1xuXG4gIGZ1bmN0aW9uIFByaXZhdGVDaGFubmVsKG5hbWUsIHB1c2hlcikge1xuICAgIHZhciBfdGhpcztcblxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBQcml2YXRlQ2hhbm5lbCk7XG5cbiAgICBfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9nZXRQcm90b3R5cGVPZihQcml2YXRlQ2hhbm5lbCkuY2FsbCh0aGlzKSk7XG4gICAgX3RoaXMubmFtZSA9IG5hbWU7XG4gICAgX3RoaXMucHVzaGVyID0gcHVzaGVyO1xuICAgIF90aGlzLmF1dGggPSBudWxsO1xuXG4gICAgaWYgKF90aGlzLnB1c2hlci5zb2NrZXQuc3RhdGUgPT0gMSkge1xuICAgICAgX3RoaXMuc3Vic2NyaWJlKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKFByaXZhdGVDaGFubmVsLCBbe1xuICAgIGtleTogXCJzdWJzY3JpYmVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gc3Vic2NyaWJlKCkge1xuICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgIHRoaXMucHVzaGVyLmF1dGgodGhpcy5uYW1lLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICBfdGhpczIuYXV0aCA9IGUuZGF0YS5hdXRoO1xuXG4gICAgICAgIF90aGlzMi5wdXNoZXIuc2VuZCh7XG4gICAgICAgICAgZXZlbnQ6ICdzdWJzY3JpYmUnLFxuICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgIGNoYW5uZWw6IF90aGlzMi5uYW1lLFxuICAgICAgICAgICAgYXV0aDogX3RoaXMyLmF1dGhcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInVuc3Vic2NyaWJlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHVuc3Vic2NyaWJlKCkge1xuICAgICAgdGhpcy5wdXNoZXIuc2VuZCh7XG4gICAgICAgIGV2ZW50OiAndW5zdWJzY3JpYmUnLFxuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgY2hhbm5lbDogdGhpcy5uYW1lXG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBQcml2YXRlQ2hhbm5lbDtcbn0oX2V2ZW50c19kaXNwYXRjaGVyX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX19bXCJEaXNwYXRjaGVyXCJdKTtcblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9zcmMvY29ubmVjdGlvbi9zb2NrZXQuanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9zcmMvY29ubmVjdGlvbi9zb2NrZXQuanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgZXhwb3J0cyBwcm92aWRlZDogU29ja2V0ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBfX3dlYnBhY2tfZXhwb3J0c19fLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yKF9fd2VicGFja19leHBvcnRzX18pO1xuLyogaGFybW9ueSBleHBvcnQgKGJpbmRpbmcpICovIF9fd2VicGFja19yZXF1aXJlX18uZChfX3dlYnBhY2tfZXhwb3J0c19fLCBcIlNvY2tldFwiLCBmdW5jdGlvbigpIHsgcmV0dXJuIFNvY2tldDsgfSk7XG4vKiBoYXJtb255IGltcG9ydCAqLyB2YXIgX2V2ZW50c19kaXNwYXRjaGVyX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuLi9ldmVudHMvZGlzcGF0Y2hlciAqLyBcIi4vc3JjL2V2ZW50cy9kaXNwYXRjaGVyLmpzXCIpO1xuZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfTsgfSBlbHNlIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9OyB9IHJldHVybiBfdHlwZW9mKG9iaik7IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfVxuXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmIChjYWxsICYmIChfdHlwZW9mKGNhbGwpID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpKSB7IHJldHVybiBjYWxsOyB9IHJldHVybiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpOyB9XG5cbmZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikgeyBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gc2VsZjsgfVxuXG5mdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyBfZ2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3QuZ2V0UHJvdG90eXBlT2YgOiBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyByZXR1cm4gby5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKG8pOyB9OyByZXR1cm4gX2dldFByb3RvdHlwZU9mKG8pOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBfc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpOyB9XG5cbmZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBvLl9fcHJvdG9fXyA9IHA7IHJldHVybiBvOyB9OyByZXR1cm4gX3NldFByb3RvdHlwZU9mKG8sIHApOyB9XG5cblxudmFyIFNvY2tldCA9XG4vKiNfX1BVUkVfXyovXG5mdW5jdGlvbiAoX0Rpc3BhdGNoZXIpIHtcbiAgX2luaGVyaXRzKFNvY2tldCwgX0Rpc3BhdGNoZXIpO1xuXG4gIGZ1bmN0aW9uIFNvY2tldChwdXNoZXIsIGhvc3QpIHtcbiAgICB2YXIgX3RoaXM7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgU29ja2V0KTtcblxuICAgIF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX2dldFByb3RvdHlwZU9mKFNvY2tldCkuY2FsbCh0aGlzKSk7XG4gICAgX3RoaXMucHVzaGVyID0gcHVzaGVyO1xuICAgIF90aGlzLnNvY2tldCA9IG5ldyBXZWJTb2NrZXQoaG9zdCArICcvJyArIF90aGlzLnB1c2hlci5rZXkpO1xuXG4gICAgX3RoaXMuYmluZExpc3RlbmVycygpO1xuXG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKFNvY2tldCwgW3tcbiAgICBrZXk6IFwiYmluZExpc3RlbmVyc1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBiaW5kTGlzdGVuZXJzKCkge1xuICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgIHRoaXMuc29ja2V0Lm9ub3BlbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgX3RoaXMyLm9uT3BlbigpO1xuICAgICAgfTtcblxuICAgICAgdGhpcy5zb2NrZXQub25lcnJvciA9IGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICBfdGhpczIub25FcnJvcihlcnJvcik7XG4gICAgICB9O1xuXG4gICAgICB0aGlzLnNvY2tldC5vbmNsb3NlID0gZnVuY3Rpb24gKGNsb3NlRXZlbnQpIHtcbiAgICAgICAgX3RoaXMyLm9uQ2xvc2UoY2xvc2VFdmVudCk7XG4gICAgICB9O1xuXG4gICAgICB0aGlzLnNvY2tldC5vbm1lc3NhZ2UgPSBmdW5jdGlvbiAobWVzc2FnZSkge1xuICAgICAgICBfdGhpczIub25NZXNzYWdlKG1lc3NhZ2UpO1xuICAgICAgfTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwib25PcGVuXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG9uT3BlbigpIHtcbiAgICAgIHZhciBfdGhpczMgPSB0aGlzO1xuXG4gICAgICAvL+WIneWni+eKtuaAgVxuICAgICAgdGhpcy5zdGF0ZSA9IDA7XG4gICAgICB0aGlzLmJpbmQoJ2Nvbm5lY3RlZCcsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIF90aGlzMy5zb2NrZXQuc29ja2V0X2lkID0gZS5zb2NrZXRfaWQ7XG4gICAgICAgIF90aGlzMy5zdGF0ZSA9IDE7IC8v6K6i6ZiFXG5cbiAgICAgICAgX3RoaXMzLnB1c2hlci5jaGFubmVscy5zdWJzY3JpYmUoKTtcbiAgICAgIH0pO1xuICAgICAgdGhpcy5iaW5kKCdjb25uZWN0aW9uX2ZhaWxlZCcsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIF90aGlzMy5zdGF0ZSA9IC0xO1xuICAgICAgICBjb25zb2xlLmVycm9yKGUuZXJyb3IpO1xuICAgICAgfSk7XG4gICAgICAvKnRoaXMuc2VuZCh7XHJcbiAgICAgICAgICBldmVudDogJ2F1dGhvcml6YXRpb24nXHJcbiAgICAgIH0pOyovXG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcIm9uRXJyb3JcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gb25FcnJvcihlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcIm9uQ2xvc2VcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gb25DbG9zZShjbG9zZUV2ZW50KSB7XG4gICAgICBpZiAodGhpcy5zb2NrZXQucmVhZHlTdGF0ZSA9PSBXZWJTb2NrZXQuQ0xPU0VEKSB7XG4gICAgICAgIGlmIChjbG9zZUV2ZW50LnR5cGUgPT0gJ2Nsb3NlJykge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ3NvY2tldOacjeWKoeW3suaWreW8gCEhJyk7XG4gICAgICAgIH0gZWxzZSBpZiAoY2xvc2VFdmVudC50eXBlID09ICdtZXNzYWdlJykge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoY2xvc2VFdmVudC5kYXRhKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCflt7Lmlq3lvIAhIScpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcIm9uTWVzc2FnZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBvbk1lc3NhZ2UobWVzc2FnZSkge1xuICAgICAgdmFyIGVEYXRhID0gSlNPTi5wYXJzZShtZXNzYWdlLmRhdGEpO1xuICAgICAgdmFyIGV2ZW50ID0gZURhdGEuZXZlbnQ7XG4gICAgICB2YXIgZGF0YSA9IGVEYXRhLmRhdGE7XG5cbiAgICAgIGlmIChlRGF0YS5jaGFubmVsICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdGhpcy5wdXNoZXIuY2hhbm5lbHMuZmluZChlRGF0YS5jaGFubmVsKS5lbWl0KGV2ZW50LCBkYXRhKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuZW1pdChldmVudCwgZGF0YSk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInNlbmRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2VuZChqc29uKSB7XG4gICAgICBpZiAodGhpcy5zdGF0ZSAhPT0gLTEpIHtcbiAgICAgICAgdGhpcy5zb2NrZXQuc2VuZChKU09OLnN0cmluZ2lmeShqc29uKSk7XG4gICAgICB9XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIFNvY2tldDtcbn0oX2V2ZW50c19kaXNwYXRjaGVyX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX19bXCJEaXNwYXRjaGVyXCJdKTtcblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9zcmMvZXZlbnRzL2NhbGxiYWNrX3JlZ2lzdHJ5LmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL3NyYy9ldmVudHMvY2FsbGJhY2tfcmVnaXN0cnkuanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIGV4cG9ydHMgcHJvdmlkZWQ6IENhbGxiYWNrUmVnaXN0cnkgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIF9fd2VicGFja19leHBvcnRzX18sIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIoX193ZWJwYWNrX2V4cG9ydHNfXyk7XG4vKiBoYXJtb255IGV4cG9ydCAoYmluZGluZykgKi8gX193ZWJwYWNrX3JlcXVpcmVfXy5kKF9fd2VicGFja19leHBvcnRzX18sIFwiQ2FsbGJhY2tSZWdpc3RyeVwiLCBmdW5jdGlvbigpIHsgcmV0dXJuIENhbGxiYWNrUmVnaXN0cnk7IH0pO1xuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfVxuXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfVxuXG52YXIgQ2FsbGJhY2tSZWdpc3RyeSA9XG4vKiNfX1BVUkVfXyovXG5mdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIENhbGxiYWNrUmVnaXN0cnkoKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIENhbGxiYWNrUmVnaXN0cnkpO1xuXG4gICAgdGhpcy5fY2FsbGJhY2tzID0ge307XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoQ2FsbGJhY2tSZWdpc3RyeSwgW3tcbiAgICBrZXk6IFwiZ2V0XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldChuYW1lKSB7XG4gICAgICByZXR1cm4gdGhpcy5fY2FsbGJhY2tzW3ByZWZpeChuYW1lKV07XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImFkZFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBhZGQobmFtZSwgY2FsbGJhY2ssIGNvbnRleHQpIHtcbiAgICAgIHZhciBwcmVmaXhlZEV2ZW50TmFtZSA9IHByZWZpeChuYW1lKTtcbiAgICAgIHRoaXMuX2NhbGxiYWNrc1twcmVmaXhlZEV2ZW50TmFtZV0gPSB0aGlzLl9jYWxsYmFja3NbcHJlZml4ZWRFdmVudE5hbWVdIHx8IFtdO1xuXG4gICAgICB0aGlzLl9jYWxsYmFja3NbcHJlZml4ZWRFdmVudE5hbWVdLnB1c2goe1xuICAgICAgICBmbjogY2FsbGJhY2ssXG4gICAgICAgIGNvbnRleHQ6IGNvbnRleHRcbiAgICAgIH0pO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJyZW1vdmVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVtb3ZlKG5hbWUsIGNhbGxiYWNrLCBjb250ZXh0KSB7XG4gICAgICBpZiAoIW5hbWUgJiYgIWNhbGxiYWNrICYmICFjb250ZXh0KSB7XG4gICAgICAgIHRoaXMuX2NhbGxiYWNrcyA9IHt9O1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHZhciBuYW1lcyA9IG5hbWUgPyBbcHJlZml4KG5hbWUpXSA6IE9iamVjdC5rZXlzKHRoaXMuX2NhbGxiYWNrcyk7XG5cbiAgICAgIGlmIChjYWxsYmFjayB8fCBjb250ZXh0KSB7XG4gICAgICAgIHRoaXMucmVtb3ZlQ2FsbGJhY2sobmFtZXMsIGNhbGxiYWNrLCBjb250ZXh0KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMucmVtb3ZlQWxsQ2FsbGJhY2tzKG5hbWVzKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwicmVtb3ZlQ2FsbGJhY2tcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVtb3ZlQ2FsbGJhY2sobmFtZXMsIGNhbGxiYWNrLCBjb250ZXh0KSB7XG4gICAgICBmb3IgKHZhciBuYW1lIGluIG5hbWVzKSB7XG4gICAgICAgIGZvciAodmFyIGtleSBpbiB0aGlzLl9jYWxsYmFja3NbbmFtZV0pIHtcbiAgICAgICAgICBpZiAodGhpcy5fY2FsbGJhY2tzW25hbWVdW2tleV0uZm4gPT0gY2FsbGJhY2sgfHwgdGhpcy5fY2FsbGJhY2tzW25hbWVdW2tleV0uY29udGV4dCA9PSBjb250ZXh0KSB7XG4gICAgICAgICAgICBkZWxldGUgdGhpcy5fY2FsbGJhY2tzW25hbWVdW2tleV07XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuX2NhbGxiYWNrc1tuYW1lXS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICBkZWxldGUgdGhpcy5fY2FsbGJhY2tzW25hbWVdO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInJlbW92ZUFsbENhbGxiYWNrc1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW1vdmVBbGxDYWxsYmFja3MobmFtZXMpIHtcbiAgICAgIGZvciAodmFyIG5hbWUgaW4gbmFtZXMpIHtcbiAgICAgICAgZGVsZXRlIHRoaXMuX2NhbGxiYWNrc1tuYW1lXTtcbiAgICAgIH1cbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gQ2FsbGJhY2tSZWdpc3RyeTtcbn0oKTtcblxuZnVuY3Rpb24gcHJlZml4KG5hbWUpIHtcbiAgcmV0dXJuIFwiX1wiICsgbmFtZTtcbn1cblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9zcmMvZXZlbnRzL2Rpc3BhdGNoZXIuanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9zcmMvZXZlbnRzL2Rpc3BhdGNoZXIuanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgZXhwb3J0cyBwcm92aWRlZDogRGlzcGF0Y2hlciAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgX193ZWJwYWNrX2V4cG9ydHNfXywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcbl9fd2VicGFja19yZXF1aXJlX18ucihfX3dlYnBhY2tfZXhwb3J0c19fKTtcbi8qIGhhcm1vbnkgZXhwb3J0IChiaW5kaW5nKSAqLyBfX3dlYnBhY2tfcmVxdWlyZV9fLmQoX193ZWJwYWNrX2V4cG9ydHNfXywgXCJEaXNwYXRjaGVyXCIsIGZ1bmN0aW9uKCkgeyByZXR1cm4gRGlzcGF0Y2hlcjsgfSk7XG4vKiBoYXJtb255IGltcG9ydCAqLyB2YXIgX2NhbGxiYWNrX3JlZ2lzdHJ5X19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL2NhbGxiYWNrX3JlZ2lzdHJ5ICovIFwiLi9zcmMvZXZlbnRzL2NhbGxiYWNrX3JlZ2lzdHJ5LmpzXCIpO1xuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfVxuXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfVxuXG5cbnZhciBEaXNwYXRjaGVyID1cbi8qI19fUFVSRV9fKi9cbmZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gRGlzcGF0Y2hlcigpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgRGlzcGF0Y2hlcik7XG5cbiAgICB0aGlzLmNhbGxiYWNrcyA9IG5ldyBfY2FsbGJhY2tfcmVnaXN0cnlfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfX1tcIkNhbGxiYWNrUmVnaXN0cnlcIl0oKTtcbiAgICB0aGlzLmdsb2JhbF9jYWxsYmFja3MgPSBbXTtcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhEaXNwYXRjaGVyLCBbe1xuICAgIGtleTogXCJiaW5kXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGJpbmQoZXZlbnROYW1lLCBjYWxsYmFjaywgY29udGV4dCkge1xuICAgICAgdGhpcy5jYWxsYmFja3MuYWRkKGV2ZW50TmFtZSwgY2FsbGJhY2ssIGNvbnRleHQpO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImJpbmRfZ2xvYmFsXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGJpbmRfZ2xvYmFsKGNhbGxiYWNrKSB7XG4gICAgICB0aGlzLmdsb2JhbF9jYWxsYmFja3MucHVzaChjYWxsYmFjayk7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwidW5iaW5kXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHVuYmluZChldmVudE5hbWUsIGNhbGxiYWNrLCBjb250ZXh0KSB7XG4gICAgICB0aGlzLmNhbGxiYWNrcy5yZW1vdmUoZXZlbnROYW1lLCBjYWxsYmFjaywgY29udGV4dCk7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwidW5iaW5kX2dsb2JhbFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiB1bmJpbmRfZ2xvYmFsKGNhbGxiYWNrKSB7XG4gICAgICBpZiAoIWNhbGxiYWNrKSB7XG4gICAgICAgIHRoaXMuZ2xvYmFsX2NhbGxiYWNrcyA9IFtdO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgIH1cblxuICAgICAgZm9yICh2YXIgaSBpbiB0aGlzLmdsb2JhbF9jYWxsYmFja3MpIHtcbiAgICAgICAgaWYgKGNhbGxiYWNrID09IHRoaXMuZ2xvYmFsX2NhbGxiYWNrc1tpXSkge1xuICAgICAgICAgIGRlbGV0ZSB0aGlzLmdsb2JhbF9jYWxsYmFja3NbaV07XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInVuYmluZF9hbGxcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gdW5iaW5kX2FsbCgpIHtcbiAgICAgIHRoaXMudW5iaW5kKCk7XG4gICAgICB0aGlzLnVuYmluZF9nbG9iYWwoKTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJlbWl0XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGVtaXQoZXZlbnROYW1lLCBkYXRhKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuZ2xvYmFsX2NhbGxiYWNrcy5sZW5ndGg7IGkrKykge1xuICAgICAgICB0aGlzLmdsb2JhbF9jYWxsYmFja3NbaV0oZXZlbnROYW1lLCBkYXRhKTtcbiAgICAgIH1cblxuICAgICAgdmFyIGNhbGxiYWNrcyA9IHRoaXMuY2FsbGJhY2tzLmdldChldmVudE5hbWUpO1xuXG4gICAgICBpZiAoY2FsbGJhY2tzICYmIGNhbGxiYWNrcy5sZW5ndGggPiAwKSB7XG4gICAgICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBjYWxsYmFja3MubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgY2FsbGJhY2tzW19pXS5mbi5jYWxsKGNhbGxiYWNrc1tfaV0uY29udGV4dCwgZGF0YSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIERpc3BhdGNoZXI7XG59KCk7XG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vc3JjL3B1c2hlci5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9zcmMvcHVzaGVyLmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBleHBvcnRzIHByb3ZpZGVkOiBQdXNoZXIgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIF9fd2VicGFja19leHBvcnRzX18sIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIoX193ZWJwYWNrX2V4cG9ydHNfXyk7XG4vKiBoYXJtb255IGV4cG9ydCAoYmluZGluZykgKi8gX193ZWJwYWNrX3JlcXVpcmVfXy5kKF9fd2VicGFja19leHBvcnRzX18sIFwiUHVzaGVyXCIsIGZ1bmN0aW9uKCkgeyByZXR1cm4gUHVzaGVyOyB9KTtcbi8qIGhhcm1vbnkgaW1wb3J0ICovIHZhciBfY29ubmVjdGlvbl9zb2NrZXRfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfXyA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vY29ubmVjdGlvbi9zb2NrZXQgKi8gXCIuL3NyYy9jb25uZWN0aW9uL3NvY2tldC5qc1wiKTtcbi8qIGhhcm1vbnkgaW1wb3J0ICovIHZhciBfZXZlbnRzX2Rpc3BhdGNoZXJfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzFfXyA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vZXZlbnRzL2Rpc3BhdGNoZXIgKi8gXCIuL3NyYy9ldmVudHMvZGlzcGF0Y2hlci5qc1wiKTtcbi8qIGhhcm1vbnkgaW1wb3J0ICovIHZhciBfY2hhbm5lbHNfbWFubmFnZXJfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzJfXyA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vY2hhbm5lbHMvbWFubmFnZXIgKi8gXCIuL3NyYy9jaGFubmVscy9tYW5uYWdlci5qc1wiKTtcbi8qIGhhcm1vbnkgaW1wb3J0ICovIHZhciBheGlvc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfM19fID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgYXhpb3MgKi8gXCIuL25vZGVfbW9kdWxlcy9heGlvcy9pbmRleC5qc1wiKTtcbi8qIGhhcm1vbnkgaW1wb3J0ICovIHZhciBheGlvc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfM19fX2RlZmF1bHQgPSAvKiNfX1BVUkVfXyovX193ZWJwYWNrX3JlcXVpcmVfXy5uKGF4aW9zX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8zX18pO1xuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfVxuXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfVxuXG5cblxuXG5cbnZhciBQdXNoZXIgPVxuLyojX19QVVJFX18qL1xuZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBQdXNoZXIoYXBwX2tleSwgb3B0aW9ucykge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBQdXNoZXIpO1xuXG4gICAgdGhpcy5jaGVja0FwcEtleShhcHBfa2V5KTtcbiAgICB0aGlzLmtleSA9IGFwcF9rZXk7XG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgICB0aGlzLmRpc3BhdGNoZXIgPSBuZXcgX2V2ZW50c19kaXNwYXRjaGVyX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8xX19bXCJEaXNwYXRjaGVyXCJdKCk7XG4gICAgdGhpcy5jaGFubmVscyA9IG5ldyBfY2hhbm5lbHNfbWFubmFnZXJfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzJfX1tcIk1hbm5hZ2VyXCJdKCk7XG4gICAgdGhpcy5jb25uZWN0KCk7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoUHVzaGVyLCBbe1xuICAgIGtleTogXCJjb25uZWN0XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbm5lY3QoKSB7XG4gICAgICB0aGlzLnNvY2tldCA9IG5ldyBfY29ubmVjdGlvbl9zb2NrZXRfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfX1tcIlNvY2tldFwiXSh0aGlzLCB0aGlzLm9wdGlvbnMuaG9zdCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInN1YnNjcmliZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzdWJzY3JpYmUoY2hhbm5lbF9uYW1lKSB7XG4gICAgICByZXR1cm4gdGhpcy5jaGFubmVscy5hZGQoY2hhbm5lbF9uYW1lLCB0aGlzKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwidW5zdWJzY3JpYmVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gdW5zdWJzY3JpYmUoY2hhbm5lbF9uYW1lKSB7XG4gICAgICB2YXIgY2hhbm5lbCA9IHRoaXMuY2hhbm5lbHMucmVtb3ZlKGNoYW5uZWxfbmFtZSk7XG4gICAgICBjaGFubmVsLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImdldFNvY2tldElkXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldFNvY2tldElkKCkge1xuICAgICAgcmV0dXJuIHRoaXMuc29ja2V0LnNvY2tldC5zb2NrZXRfaWQ7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInNlbmRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2VuZChqc29uKSB7XG4gICAgICB0aGlzLnNvY2tldC5zZW5kKGpzb24pO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJjaGVja0FwcEtleVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjaGVja0FwcEtleShrZXkpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJhdXRoXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGF1dGgobmFtZSwgY2FsbGJhY2spIHtcbiAgICAgIHZhciBtZXRob2QgPSB0aGlzLm9wdGlvbnMuYXV0aC5tZXRob2QgfHwgJ3Bvc3QnO1xuICAgICAgdmFyIGRhdGEgPSB7fTtcbiAgICAgIHZhciBwYXJhbXMgPSB7fTtcblxuICAgICAgaWYgKG1ldGhvZCA9PSAncG9zdCcpIHtcbiAgICAgICAgZGF0YSA9IE9iamVjdC5hc3NpZ24oe1xuICAgICAgICAgIGNoYW5uZWxfbmFtZTogbmFtZSxcbiAgICAgICAgICBzb2NrZXRfaWQ6IHRoaXMuZ2V0U29ja2V0SWQoKVxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHBhcmFtcyA9IE9iamVjdC5hc3NpZ24oe1xuICAgICAgICAgIGNoYW5uZWxfbmFtZTogbmFtZSxcbiAgICAgICAgICBzb2NrZXRfaWQ6IHRoaXMuZ2V0U29ja2V0SWQoKVxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgYXhpb3NfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzNfX19kZWZhdWx0KCkoe1xuICAgICAgICB1cmw6IHRoaXMub3B0aW9ucy5hdXRoLnVybCxcbiAgICAgICAgbWV0aG9kOiBtZXRob2QsXG4gICAgICAgIGhlYWRlcnM6IHRoaXMub3B0aW9ucy5hdXRoLmhlYWRlcnMgfHwge30sXG4gICAgICAgIHBhcmFtczogcGFyYW1zLFxuICAgICAgICBkYXRhOiBkYXRhXG4gICAgICB9KS50aGVuKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGNhbGxiYWNrKGUpO1xuICAgICAgfSkuY2F0Y2goZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcign56eB5pyJ6aKR6YGT5p2D6ZmQ5LiN6LazIScpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIFB1c2hlcjtcbn0oKTtcbndpbmRvdy5QdXNoZXIgPSBQdXNoZXI7XG5cbi8qKiovIH0pXG5cbi8qKioqKiovIH0pO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5kbFluQmhZMnM2THk4dmQyVmljR0ZqYXk5aWIyOTBjM1J5WVhBaUxDSjNaV0p3WVdOck9pOHZMeTR2Ym05a1pWOXRiMlIxYkdWekwyRjRhVzl6TDJsdVpHVjRMbXB6SWl3aWQyVmljR0ZqYXpvdkx5OHVMMjV2WkdWZmJXOWtkV3hsY3k5aGVHbHZjeTlzYVdJdllXUmhjSFJsY25NdmVHaHlMbXB6SWl3aWQyVmljR0ZqYXpvdkx5OHVMMjV2WkdWZmJXOWtkV3hsY3k5aGVHbHZjeTlzYVdJdllYaHBiM011YW5NaUxDSjNaV0p3WVdOck9pOHZMeTR2Ym05a1pWOXRiMlIxYkdWekwyRjRhVzl6TDJ4cFlpOWpZVzVqWld3dlEyRnVZMlZzTG1weklpd2lkMlZpY0dGamF6b3ZMeTh1TDI1dlpHVmZiVzlrZFd4bGN5OWhlR2x2Y3k5c2FXSXZZMkZ1WTJWc0wwTmhibU5sYkZSdmEyVnVMbXB6SWl3aWQyVmljR0ZqYXpvdkx5OHVMMjV2WkdWZmJXOWtkV3hsY3k5aGVHbHZjeTlzYVdJdlkyRnVZMlZzTDJselEyRnVZMlZzTG1weklpd2lkMlZpY0dGamF6b3ZMeTh1TDI1dlpHVmZiVzlrZFd4bGN5OWhlR2x2Y3k5c2FXSXZZMjl5WlM5QmVHbHZjeTVxY3lJc0luZGxZbkJoWTJzNkx5OHZMaTl1YjJSbFgyMXZaSFZzWlhNdllYaHBiM012YkdsaUwyTnZjbVV2U1c1MFpYSmpaWEIwYjNKTllXNWhaMlZ5TG1weklpd2lkMlZpY0dGamF6b3ZMeTh1TDI1dlpHVmZiVzlrZFd4bGN5OWhlR2x2Y3k5c2FXSXZZMjl5WlM5amNtVmhkR1ZGY25KdmNpNXFjeUlzSW5kbFluQmhZMnM2THk4dkxpOXViMlJsWDIxdlpIVnNaWE12WVhocGIzTXZiR2xpTDJOdmNtVXZaR2x6Y0dGMFkyaFNaWEYxWlhOMExtcHpJaXdpZDJWaWNHRmphem92THk4dUwyNXZaR1ZmYlc5a2RXeGxjeTloZUdsdmN5OXNhV0l2WTI5eVpTOWxibWhoYm1ObFJYSnliM0l1YW5NaUxDSjNaV0p3WVdOck9pOHZMeTR2Ym05a1pWOXRiMlIxYkdWekwyRjRhVzl6TDJ4cFlpOWpiM0psTDNObGRIUnNaUzVxY3lJc0luZGxZbkJoWTJzNkx5OHZMaTl1YjJSbFgyMXZaSFZzWlhNdllYaHBiM012YkdsaUwyTnZjbVV2ZEhKaGJuTm1iM0p0UkdGMFlTNXFjeUlzSW5kbFluQmhZMnM2THk4dkxpOXViMlJsWDIxdlpIVnNaWE12WVhocGIzTXZiR2xpTDJSbFptRjFiSFJ6TG1weklpd2lkMlZpY0dGamF6b3ZMeTh1TDI1dlpHVmZiVzlrZFd4bGN5OWhlR2x2Y3k5c2FXSXZhR1ZzY0dWeWN5OWlhVzVrTG1weklpd2lkMlZpY0dGamF6b3ZMeTh1TDI1dlpHVmZiVzlrZFd4bGN5OWhlR2x2Y3k5c2FXSXZhR1ZzY0dWeWN5OWlkRzloTG1weklpd2lkMlZpY0dGamF6b3ZMeTh1TDI1dlpHVmZiVzlrZFd4bGN5OWhlR2x2Y3k5c2FXSXZhR1ZzY0dWeWN5OWlkV2xzWkZWU1RDNXFjeUlzSW5kbFluQmhZMnM2THk4dkxpOXViMlJsWDIxdlpIVnNaWE12WVhocGIzTXZiR2xpTDJobGJIQmxjbk12WTI5dFltbHVaVlZTVEhNdWFuTWlMQ0ozWldKd1lXTnJPaTh2THk0dmJtOWtaVjl0YjJSMWJHVnpMMkY0YVc5ekwyeHBZaTlvWld4d1pYSnpMMk52YjJ0cFpYTXVhbk1pTENKM1pXSndZV05yT2k4dkx5NHZibTlrWlY5dGIyUjFiR1Z6TDJGNGFXOXpMMnhwWWk5b1pXeHdaWEp6TDJselFXSnpiMngxZEdWVlVrd3Vhbk1pTENKM1pXSndZV05yT2k4dkx5NHZibTlrWlY5dGIyUjFiR1Z6TDJGNGFXOXpMMnhwWWk5b1pXeHdaWEp6TDJselZWSk1VMkZ0WlU5eWFXZHBiaTVxY3lJc0luZGxZbkJoWTJzNkx5OHZMaTl1YjJSbFgyMXZaSFZzWlhNdllYaHBiM012YkdsaUwyaGxiSEJsY25NdmJtOXliV0ZzYVhwbFNHVmhaR1Z5VG1GdFpTNXFjeUlzSW5kbFluQmhZMnM2THk4dkxpOXViMlJsWDIxdlpIVnNaWE12WVhocGIzTXZiR2xpTDJobGJIQmxjbk12Y0dGeWMyVklaV0ZrWlhKekxtcHpJaXdpZDJWaWNHRmphem92THk4dUwyNXZaR1ZmYlc5a2RXeGxjeTloZUdsdmN5OXNhV0l2YUdWc2NHVnljeTl6Y0hKbFlXUXVhbk1pTENKM1pXSndZV05yT2k4dkx5NHZibTlrWlY5dGIyUjFiR1Z6TDJGNGFXOXpMMnhwWWk5MWRHbHNjeTVxY3lJc0luZGxZbkJoWTJzNkx5OHZMaTl1YjJSbFgyMXZaSFZzWlhNdmFYTXRZblZtWm1WeUwybHVaR1Y0TG1weklpd2lkMlZpY0dGamF6b3ZMeTh1TDI1dlpHVmZiVzlrZFd4bGN5OXdjbTlqWlhOekwySnliM2R6WlhJdWFuTWlMQ0ozWldKd1lXTnJPaTh2THk0dmMzSmpMMk5vWVc1dVpXeHpMMk5vWVc1dVpXd3Vhbk1pTENKM1pXSndZV05yT2k4dkx5NHZjM0pqTDJOb1lXNXVaV3h6TDIxaGJtNWhaMlZ5TG1weklpd2lkMlZpY0dGamF6b3ZMeTh1TDNOeVl5OWphR0Z1Ym1Wc2N5OXdjbVZ6Wlc1alpWOWphR0Z1Ym1Wc0xtcHpJaXdpZDJWaWNHRmphem92THk4dUwzTnlZeTlqYUdGdWJtVnNjeTl3Y21sMllYUmxYMk5vWVc1dVpXd3Vhbk1pTENKM1pXSndZV05yT2k4dkx5NHZjM0pqTDJOdmJtNWxZM1JwYjI0dmMyOWphMlYwTG1weklpd2lkMlZpY0dGamF6b3ZMeTh1TDNOeVl5OWxkbVZ1ZEhNdlkyRnNiR0poWTJ0ZmNtVm5hWE4wY25rdWFuTWlMQ0ozWldKd1lXTnJPaTh2THk0dmMzSmpMMlYyWlc1MGN5OWthWE53WVhSamFHVnlMbXB6SWl3aWQyVmljR0ZqYXpvdkx5OHVMM055WXk5d2RYTm9aWEl1YW5NaVhTd2libUZ0WlhNaU9sc2lRMmhoYm01bGJDSXNJbTVoYldVaUxDSndkWE5vWlhJaUxDSnpiMk5yWlhRaUxDSnpkR0YwWlNJc0luTjFZbk5qY21saVpTSXNJbk5sYm1RaUxDSmxkbVZ1ZENJc0ltUmhkR0VpTENKamFHRnVibVZzSWl3aVJHbHpjR0YwWTJobGNpSXNJazFoYm01aFoyVnlJaXdpWTJoaGJtNWxiSE1pTENKamNtVmhkR1ZEYUdGdWJtVnNJaXdpVDJKcVpXTjBJaXdpYTJWNWN5SXNJbWtpTENKcGJtUmxlRTltSWl3aVVISnBkbUYwWlVOb1lXNXVaV3dpTENKUWNtVnpaVzVqWlVOb1lXNXVaV3dpTENKaGRYUm9JaXdpWlNJc0ltTm9ZVzV1Wld4ZlpHRjBZU0lzSWxOdlkydGxkQ0lzSW1odmMzUWlMQ0pYWldKVGIyTnJaWFFpTENKclpYa2lMQ0ppYVc1a1RHbHpkR1Z1WlhKeklpd2liMjV2Y0dWdUlpd2liMjVQY0dWdUlpd2liMjVsY25KdmNpSXNJbVZ5Y205eUlpd2liMjVGY25KdmNpSXNJbTl1WTJ4dmMyVWlMQ0pqYkc5elpVVjJaVzUwSWl3aWIyNURiRzl6WlNJc0ltOXViV1Z6YzJGblpTSXNJbTFsYzNOaFoyVWlMQ0p2YmsxbGMzTmhaMlVpTENKaWFXNWtJaXdpYzI5amEyVjBYMmxrSWl3aVkyOXVjMjlzWlNJc0luSmxZV1I1VTNSaGRHVWlMQ0pEVEU5VFJVUWlMQ0owZVhCbElpd2laVVJoZEdFaUxDSktVMDlPSWl3aWNHRnljMlVpTENKMWJtUmxabWx1WldRaUxDSm1hVzVrSWl3aVpXMXBkQ0lzSW1wemIyNGlMQ0p6ZEhKcGJtZHBabmtpTENKRFlXeHNZbUZqYTFKbFoybHpkSEo1SWl3aVgyTmhiR3hpWVdOcmN5SXNJbkJ5WldacGVDSXNJbU5oYkd4aVlXTnJJaXdpWTI5dWRHVjRkQ0lzSW5CeVpXWnBlR1ZrUlhabGJuUk9ZVzFsSWl3aWNIVnphQ0lzSW1adUlpd2libUZ0WlhNaUxDSnlaVzF2ZG1WRFlXeHNZbUZqYXlJc0luSmxiVzkyWlVGc2JFTmhiR3hpWVdOcmN5SXNJbXhsYm1kMGFDSXNJbU5oYkd4aVlXTnJjeUlzSW1kc2IySmhiRjlqWVd4c1ltRmphM01pTENKbGRtVnVkRTVoYldVaUxDSmhaR1FpTENKeVpXMXZkbVVpTENKMWJtSnBibVFpTENKMWJtSnBibVJmWjJ4dlltRnNJaXdpWjJWMElpd2lZMkZzYkNJc0lsQjFjMmhsY2lJc0ltRndjRjlyWlhraUxDSnZjSFJwYjI1eklpd2lZMmhsWTJ0QmNIQkxaWGtpTENKa2FYTndZWFJqYUdWeUlpd2lZMjl1Ym1WamRDSXNJbU5vWVc1dVpXeGZibUZ0WlNJc0luVnVjM1ZpYzJOeWFXSmxJaXdpYldWMGFHOWtJaXdpY0dGeVlXMXpJaXdpWVhOemFXZHVJaXdpWjJWMFUyOWphMlYwU1dRaUxDSmhlR2x2Y3lJc0luVnliQ0lzSW1obFlXUmxjbk1pTENKMGFHVnVJaXdpWTJGMFkyZ2lMQ0ozYVc1a2IzY2lYU3dpYldGd2NHbHVaM01pT2lJN1FVRkJRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUczdRVUZGUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUczdPMEZCUjBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxHdEVRVUV3UXl4blEwRkJaME03UVVGRE1VVTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeG5SVUZCZDBRc2EwSkJRV3RDTzBGQlF6RkZPMEZCUTBFc2VVUkJRV2xFTEdOQlFXTTdRVUZETDBRN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEdsRVFVRjVReXhwUTBGQmFVTTdRVUZETVVVc2QwaEJRV2RJTEcxQ1FVRnRRaXhGUVVGRk8wRkJRM0pKTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEVzYlVOQlFUSkNMREJDUVVFd1FpeEZRVUZGTzBGQlEzWkVMSGxEUVVGcFF5eGxRVUZsTzBGQlEyaEVPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTERoRVFVRnpSQ3dyUkVGQkswUTdPMEZCUlhKSU8wRkJRMEU3T3p0QlFVZEJPMEZCUTBFN096czdPenM3T3pzN096dEJRMnhHUVN4cFFrRkJhVUlzYlVKQlFVOHNRMEZCUXl4elJFRkJZU3hGT3pzN096czdPenM3T3pzN1FVTkJla0k3TzBGQlJXSXNXVUZCV1N4dFFrRkJUeXhEUVVGRExIRkVRVUZaTzBGQlEyaERMR0ZCUVdFc2JVSkJRVThzUTBGQlF5eHBSVUZCYTBJN1FVRkRka01zWlVGQlpTeHRRa0ZCVHl4RFFVRkRMREpGUVVGMVFqdEJRVU01UXl4dFFrRkJiVUlzYlVKQlFVOHNRMEZCUXl4dFJrRkJNa0k3UVVGRGRFUXNjMEpCUVhOQ0xHMUNRVUZQTEVOQlFVTXNlVVpCUVRoQ08wRkJRelZFTEd0Q1FVRnJRaXh0UWtGQlR5eERRVUZETEhsRlFVRnhRanRCUVVNdlF5eDVSa0ZCZVVZc2JVSkJRVThzUTBGQlF5eHRSVUZCYlVJN08wRkJSWEJJTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEVzTkVOQlFUUkRPMEZCUXpWRE96dEJRVVZCTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeFJRVUZSTEdGQlFXOUNPMEZCUXpWQ08wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3TzBGQlJVRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEVzYjBKQlFXOUNMRzFDUVVGUExFTkJRVU1zZVVWQlFYTkNPenRCUVVWc1JEdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeFRRVUZUTzBGQlExUTdRVUZEUVR0QlFVTkJPMEZCUTBFc1QwRkJUenRCUVVOUU96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRXNUMEZCVHp0QlFVTlFPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEU5QlFVODdRVUZEVURzN1FVRkZRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJMRWRCUVVjN1FVRkRTRHM3T3pzN096czdPenM3T3p0QlEyNU1ZVHM3UVVGRllpeFpRVUZaTEcxQ1FVRlBMRU5CUVVNc2EwUkJRVk03UVVGRE4wSXNWMEZCVnl4dFFrRkJUeXhEUVVGRExHZEZRVUZuUWp0QlFVTnVReXhaUVVGWkxHMUNRVUZQTEVOQlFVTXNORVJCUVdNN1FVRkRiRU1zWlVGQlpTeHRRa0ZCVHl4RFFVRkRMSGRFUVVGWk96dEJRVVZ1UXp0QlFVTkJPMEZCUTBFN1FVRkRRU3hYUVVGWExFOUJRVTg3UVVGRGJFSXNXVUZCV1N4TlFVRk5PMEZCUTJ4Q08wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUczdRVUZGUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJMR1ZCUVdVc2JVSkJRVThzUTBGQlF5eHJSVUZCYVVJN1FVRkRlRU1zYjBKQlFXOUNMRzFDUVVGUExFTkJRVU1zTkVWQlFYTkNPMEZCUTJ4RUxHbENRVUZwUWl4dFFrRkJUeXhEUVVGRExITkZRVUZ0UWpzN1FVRkZOVU03UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4bFFVRmxMRzFDUVVGUExFTkJRVU1zYjBWQlFXdENPenRCUVVWNlF6czdRVUZGUVR0QlFVTkJPenM3T3pzN096czdPenM3TzBGRGJrUmhPenRCUVVWaU8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRXNWMEZCVnl4UlFVRlJPMEZCUTI1Q08wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUczdRVUZGUVRzN096czdPenM3T3pzN096dEJRMnhDWVRzN1FVRkZZaXhoUVVGaExHMUNRVUZQTEVOQlFVTXNNa1JCUVZVN08wRkJSUzlDTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFc1YwRkJWeXhUUVVGVE8wRkJRM0JDTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRXNSMEZCUnpzN1FVRkZTRHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQkxFZEJRVWM3UVVGRFNEczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4SFFVRkhPMEZCUTBnN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVRzN096czdPenM3T3pzN096dEJRM2hFWVRzN1FVRkZZanRCUVVOQk8wRkJRMEU3T3pzN096czdPenM3T3pzN1FVTktZVHM3UVVGRllpeGxRVUZsTEcxQ1FVRlBMRU5CUVVNc01rUkJRV1U3UVVGRGRFTXNXVUZCV1N4dFFrRkJUeXhEUVVGRExIRkVRVUZaTzBGQlEyaERMSGxDUVVGNVFpeHRRa0ZCVHl4RFFVRkRMR2xHUVVGelFqdEJRVU4yUkN4elFrRkJjMElzYlVKQlFVOHNRMEZCUXl3eVJVRkJiVUk3TzBGQlJXcEVPMEZCUTBFN1FVRkRRVHRCUVVOQkxGZEJRVmNzVDBGQlR6dEJRVU5zUWp0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxGZEJRVmNzVDBGQlR6dEJRVU5zUWp0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEV0QlFVczdRVUZEVERzN1FVRkZRU3hyUTBGQmEwTXNZMEZCWXp0QlFVTm9SRHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQkxFZEJRVWM3TzBGQlJVZzdRVUZEUVR0QlFVTkJMRWRCUVVjN08wRkJSVWc3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4blJFRkJaMFE3UVVGRGFFUTdRVUZEUVR0QlFVTkJMRXRCUVVzN1FVRkRURHRCUVVOQkxFTkJRVU03TzBGQlJVUTdRVUZEUVR0QlFVTkJPMEZCUTBFc1owUkJRV2RFTzBGQlEyaEVPMEZCUTBFN1FVRkRRVHRCUVVOQkxFdEJRVXM3UVVGRFREdEJRVU5CTEVOQlFVTTdPMEZCUlVRN096czdPenM3T3pzN096czdRVU01UldFN08wRkJSV0lzV1VGQldTeHRRa0ZCVHl4RFFVRkRMSEZFUVVGWk96dEJRVVZvUXp0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRXNWMEZCVnl4VFFVRlRPMEZCUTNCQ0xGZEJRVmNzVTBGQlV6dEJRVU53UWp0QlFVTkJMRmxCUVZrc1QwRkJUenRCUVVOdVFqdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFc1IwRkJSenRCUVVOSU8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFc1YwRkJWeXhQUVVGUE8wRkJRMnhDTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3hYUVVGWExGTkJRVk03UVVGRGNFSTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEVzUjBGQlJ6dEJRVU5JT3p0QlFVVkJPenM3T3pzN096czdPenM3TzBGRGJrUmhPenRCUVVWaUxHMUNRVUZ0UWl4dFFrRkJUeXhEUVVGRExIRkZRVUZuUWpzN1FVRkZNME03UVVGRFFUdEJRVU5CTzBGQlEwRXNWMEZCVnl4UFFVRlBPMEZCUTJ4Q0xGZEJRVmNzVDBGQlR6dEJRVU5zUWl4WFFVRlhMRTlCUVU4N1FVRkRiRUlzVjBGQlZ5eFBRVUZQTzBGQlEyeENMRmRCUVZjc1QwRkJUenRCUVVOc1FpeGhRVUZoTEUxQlFVMDdRVUZEYmtJN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdPenM3T3pzN096czdPenRCUTJwQ1lUczdRVUZGWWl4WlFVRlpMRzFDUVVGUExFTkJRVU1zY1VSQlFWazdRVUZEYUVNc2IwSkJRVzlDTEcxQ1FVRlBMRU5CUVVNc2RVVkJRV2xDTzBGQlF6ZERMR1ZCUVdVc2JVSkJRVThzUTBGQlF5eDFSVUZCYjBJN1FVRkRNME1zWlVGQlpTeHRRa0ZCVHl4RFFVRkRMSGxFUVVGaE8wRkJRM0JETEc5Q1FVRnZRaXh0UWtGQlR5eERRVUZETEhGR1FVRTBRanRCUVVONFJDeHJRa0ZCYTBJc2JVSkJRVThzUTBGQlF5eHBSa0ZCTUVJN08wRkJSWEJFTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFc1YwRkJWeXhQUVVGUE8wRkJRMnhDTEdGQlFXRXNVVUZCVVR0QlFVTnlRanRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJMQ3RDUVVFclFqdEJRVU12UWl4MVEwRkJkVU03UVVGRGRrTTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN08wRkJSVUU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVN4SFFVRkhPMEZCUTBnN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVN4SFFVRkhPMEZCUTBnN096czdPenM3T3pzN096czdRVU55Um1FN08wRkJSV0k3UVVGRFFUdEJRVU5CTzBGQlEwRXNWMEZCVnl4TlFVRk5PMEZCUTJwQ0xGZEJRVmNzVDBGQlR6dEJRVU5zUWl4WFFVRlhMRTlCUVU4N1FVRkRiRUlzVjBGQlZ5eFBRVUZQTzBGQlEyeENMRmRCUVZjc1QwRkJUenRCUVVOc1FpeGhRVUZoTEUxQlFVMDdRVUZEYmtJN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN096czdPenM3T3pzN096czdRVU53UW1FN08wRkJSV0lzYTBKQlFXdENMRzFDUVVGUExFTkJRVU1zYlVWQlFXVTdPMEZCUlhwRE8wRkJRMEU3UVVGRFFUdEJRVU5CTEZkQlFWY3NVMEZCVXp0QlFVTndRaXhYUVVGWExGTkJRVk03UVVGRGNFSXNWMEZCVnl4UFFVRlBPMEZCUTJ4Q08wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJMRWRCUVVjN1FVRkRTRHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN096czdPenM3T3pzN096czdRVU42UW1FN08wRkJSV0lzV1VGQldTeHRRa0ZCVHl4RFFVRkRMSEZFUVVGWk96dEJRVVZvUXp0QlFVTkJPMEZCUTBFN1FVRkRRU3hYUVVGWExHTkJRV003UVVGRGVrSXNWMEZCVnl4TlFVRk5PMEZCUTJwQ0xGZEJRVmNzWlVGQlpUdEJRVU14UWl4aFFVRmhMRVZCUVVVN1FVRkRaanRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRXNSMEZCUnpzN1FVRkZTRHRCUVVOQk96czdPenM3T3pzN096czdPMEZEYmtKQkxDdERRVUZoT3p0QlFVVmlMRmxCUVZrc2JVSkJRVThzUTBGQlF5eHJSRUZCVXp0QlFVTTNRaXd3UWtGQk1FSXNiVUpCUVU4c1EwRkJReXc0UmtGQkswSTdPMEZCUldwRk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFc1kwRkJZeXh0UWtGQlR5eERRVUZETEdkRlFVRm5RanRCUVVOMFF5eEhRVUZITzBGQlEwZzdRVUZEUVN4alFVRmpMRzFDUVVGUExFTkJRVU1zYVVWQlFXbENPMEZCUTNaRE8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJMSGRGUVVGM1JUdEJRVU40UlR0QlFVTkJPMEZCUTBFN1FVRkRRU3gxUkVGQmRVUTdRVUZEZGtRN1FVRkRRVHRCUVVOQk8wRkJRMEVzUjBGQlJ6czdRVUZGU0R0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEVzVDBGQlR5eFpRVUZaTzBGQlEyNUNPMEZCUTBFN1FVRkRRU3hIUVVGSE96dEJRVVZJTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUczdRVUZGUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVN4RFFVRkRPenRCUVVWRU8wRkJRMEU3UVVGRFFTeERRVUZET3p0QlFVVkVPenM3T3pzN096czdPenM3T3p0QlF5OUdZVHM3UVVGRllqdEJRVU5CTzBGQlEwRTdRVUZEUVN4dFFrRkJiVUlzYVVKQlFXbENPMEZCUTNCRE8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPenM3T3pzN096czdPenM3UVVOV1lUczdRVUZGWWpzN1FVRkZRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPenM3T3pzN096czdPenM3TzBGRGJrTmhPenRCUVVWaUxGbEJRVmtzYlVKQlFVOHNRMEZCUXl4eFJFRkJXVHM3UVVGRmFFTTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEVzVjBGQlZ5eFBRVUZQTzBGQlEyeENMRmRCUVZjc1QwRkJUenRCUVVOc1FpeGhRVUZoTEU5QlFVODdRVUZEY0VJN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxFZEJRVWM3UVVGRFNEdEJRVU5CTEVkQlFVYzdRVUZEU0RzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFc1QwRkJUenRCUVVOUU8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFc1UwRkJVenRCUVVOVU8wRkJRMEU3UVVGRFFUdEJRVU5CTEU5QlFVODdRVUZEVUN4TFFVRkxPenRCUVVWTU8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3T3pzN096czdPenM3T3pzN1FVTnFSV0U3TzBGQlJXSTdRVUZEUVR0QlFVTkJPMEZCUTBFc1YwRkJWeXhQUVVGUE8wRkJRMnhDTEZkQlFWY3NUMEZCVHp0QlFVTnNRaXhoUVVGaExFOUJRVTg3UVVGRGNFSTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96czdPenM3T3pzN096czdPMEZEWW1FN08wRkJSV0lzV1VGQldTeHRRa0ZCVHl4RFFVRkRMSEZFUVVGWk96dEJRVVZvUXp0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN08wRkJSVUVzZDBOQlFYZERPMEZCUTNoRExFOUJRVTg3TzBGQlJWQTdRVUZEUVN3d1JFRkJNRVFzZDBKQlFYZENPMEZCUTJ4R08wRkJRMEVzVDBGQlR6czdRVUZGVUR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxFZEJRVWM3TzBGQlJVZzdRVUZEUVR0QlFVTkJPMEZCUTBFc1owTkJRV2RETzBGQlEyaERMRFpDUVVFMlFpeGhRVUZoTEVWQlFVVTdRVUZETlVNN1FVRkRRVHRCUVVOQkxFZEJRVWM3UVVGRFNEczdPenM3T3pzN096czdPenRCUTNCRVlUczdRVUZGWWp0QlFVTkJPMEZCUTBFN1FVRkRRU3hYUVVGWExFOUJRVTg3UVVGRGJFSXNZVUZCWVN4UlFVRlJPMEZCUTNKQ08wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPenM3T3pzN096czdPenM3TzBGRFltRTdPMEZCUldJc1dVRkJXU3h0UWtGQlR5eERRVUZETEhGRVFVRlpPenRCUVVWb1F6dEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3hqUVVGakxFOUJRVTg3UVVGRGNrSXNaMEpCUVdkQ08wRkJRMmhDTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRXNZMEZCWXl4UFFVRlBPMEZCUTNKQ0xHZENRVUZuUWl4UlFVRlJPMEZCUTNoQ08wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJMRWRCUVVjN08wRkJSVWc3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJMRWRCUVVjN1FVRkRTRHM3T3pzN096czdPenM3T3p0QlEyNUZZVHM3UVVGRllpeFpRVUZaTEcxQ1FVRlBMRU5CUVVNc2JVUkJRVlU3TzBGQlJUbENPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEVkQlFVYzdRVUZEU0RzN096czdPenM3T3pzN096dEJRMWhoT3p0QlFVVmlMRmxCUVZrc2JVSkJRVThzUTBGQlF5eHhSRUZCV1RzN1FVRkZhRU03UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEZkQlFWY3NUMEZCVHp0QlFVTnNRaXhoUVVGaExFOUJRVTg3UVVGRGNFSTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTEdsQ1FVRnBRaXhsUVVGbE96dEJRVVZvUXp0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3hQUVVGUE8wRkJRMUE3UVVGRFFUdEJRVU5CTzBGQlEwRXNSMEZCUnpzN1FVRkZTRHRCUVVOQk96czdPenM3T3pzN096czdPMEZEY0VSaE96dEJRVVZpTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3dyUWtGQkswSTdRVUZETDBJN1FVRkRRVHRCUVVOQkxGZEJRVmNzVTBGQlV6dEJRVU53UWl4aFFVRmhPMEZCUTJJN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3pzN096czdPenM3T3pzN08wRkRNVUpoT3p0QlFVVmlMRmRCUVZjc2JVSkJRVThzUTBGQlF5eG5SVUZCWjBJN1FVRkRia01zWlVGQlpTeHRRa0ZCVHl4RFFVRkRMRzlFUVVGWE96dEJRVVZzUXpzN1FVRkZRVHM3UVVGRlFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3hYUVVGWExFOUJRVTg3UVVGRGJFSXNZVUZCWVN4UlFVRlJPMEZCUTNKQ08wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxGZEJRVmNzVDBGQlR6dEJRVU5zUWl4aFFVRmhMRkZCUVZFN1FVRkRja0k3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEVzVjBGQlZ5eFBRVUZQTzBGQlEyeENMR0ZCUVdFc1VVRkJVVHRCUVVOeVFqdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeFhRVUZYTEU5QlFVODdRVUZEYkVJc1lVRkJZU3hSUVVGUk8wRkJRM0pDTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3hIUVVGSE8wRkJRMGc3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEVzVjBGQlZ5eFBRVUZQTzBGQlEyeENMR0ZCUVdFc1VVRkJVVHRCUVVOeVFqdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeFhRVUZYTEU5QlFVODdRVUZEYkVJc1lVRkJZU3hSUVVGUk8wRkJRM0pDTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEZkQlFWY3NUMEZCVHp0QlFVTnNRaXhoUVVGaExGRkJRVkU3UVVGRGNrSTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRXNWMEZCVnl4UFFVRlBPMEZCUTJ4Q0xHRkJRV0VzVVVGQlVUdEJRVU55UWp0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4WFFVRlhMRTlCUVU4N1FVRkRiRUlzWVVGQllTeFJRVUZSTzBGQlEzSkNPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJMRmRCUVZjc1QwRkJUenRCUVVOc1FpeGhRVUZoTEZGQlFWRTdRVUZEY2tJN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFc1YwRkJWeXhQUVVGUE8wRkJRMnhDTEdGQlFXRXNVVUZCVVR0QlFVTnlRanRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3hYUVVGWExFOUJRVTg3UVVGRGJFSXNZVUZCWVN4UlFVRlJPMEZCUTNKQ08wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxGZEJRVmNzVDBGQlR6dEJRVU5zUWl4aFFVRmhMRkZCUVZFN1FVRkRja0k3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEVzVjBGQlZ5eFBRVUZQTzBGQlEyeENMR0ZCUVdFc1VVRkJVVHRCUVVOeVFqdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeFhRVUZYTEU5QlFVODdRVUZEYkVJc1lVRkJZU3hQUVVGUE8wRkJRM0JDTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJMRmRCUVZjc1lVRkJZVHRCUVVONFFpeFhRVUZYTEZOQlFWTTdRVUZEY0VJN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJMRzFEUVVGdFF5eFBRVUZQTzBGQlF6RkRPMEZCUTBFN1FVRkRRU3hIUVVGSE8wRkJRMGc3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEhWQ1FVRjFRaXhUUVVGVExFZEJRVWNzVTBGQlV6dEJRVU0xUXl3eVFrRkJNa0k3UVVGRE0wSTdRVUZEUVR0QlFVTkJMRmRCUVZjc1QwRkJUenRCUVVOc1FpeGhRVUZoTEU5QlFVODdRVUZEY0VJN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRXNTMEZCU3p0QlFVTk1PMEZCUTBFN1FVRkRRVHM3UVVGRlFTeDFRMEZCZFVNc1QwRkJUenRCUVVNNVF6dEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeFhRVUZYTEU5QlFVODdRVUZEYkVJc1YwRkJWeXhQUVVGUE8wRkJRMnhDTEZkQlFWY3NUMEZCVHp0QlFVTnNRaXhaUVVGWkxFOUJRVTg3UVVGRGJrSTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxFdEJRVXM3UVVGRFREdEJRVU5CTzBGQlEwRXNSMEZCUnp0QlFVTklPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPenM3T3pzN096czdPenRCUXpsVFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN096czdPenM3T3pzN096dEJRM0JDUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeFRRVUZUTzBGQlExUTdRVUZEUVR0QlFVTkJMRXRCUVVzN1FVRkRURHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRXNVMEZCVXp0QlFVTlVPMEZCUTBFN1FVRkRRU3hMUVVGTE8wRkJRMHc3UVVGRFFUdEJRVU5CTEVOQlFVTTdRVUZEUkR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxFdEJRVXM3UVVGRFREdEJRVU5CTzBGQlEwRTdRVUZEUVN4VFFVRlRPMEZCUTFRN1FVRkRRVHRCUVVOQk8wRkJRMEU3T3p0QlFVZEJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeExRVUZMTzBGQlEwdzdRVUZEUVR0QlFVTkJPMEZCUTBFc1UwRkJVenRCUVVOVU8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPenM3UVVGSlFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFc1MwRkJTenRCUVVOTU8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEVzZFVKQlFYVkNMSE5DUVVGelFqdEJRVU0zUXp0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxIRkNRVUZ4UWp0QlFVTnlRanM3UVVGRlFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFc2NVTkJRWEZET3p0QlFVVnlRenRCUVVOQk8wRkJRMEU3TzBGQlJVRXNNa0pCUVRKQ08wRkJRek5DTzBGQlEwRTdRVUZEUVR0QlFVTkJMRFJDUVVFMFFpeFZRVUZWT3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPMEZEZGt4MFF6dEJRVVZQTEVsQlFVMUJMRTlCUVdJN1FVRkJRVHRCUVVGQk8wRkJRVUU3TzBGQlEwa3NiVUpCUVZsRExFbEJRVm9zUlVGQmEwSkRMRTFCUVd4Q0xFVkJRVEJDTzBGQlFVRTdPMEZCUVVFN08wRkJRM1JDTzBGQlJVRXNWVUZCUzBRc1NVRkJUQ3hIUVVGWlFTeEpRVUZhTzBGQlEwRXNWVUZCUzBNc1RVRkJUQ3hIUVVGalFTeE5RVUZrT3p0QlFVVkJMRkZCUVVrc1RVRkJTMEVzVFVGQlRDeERRVUZaUXl4TlFVRmFMRU5CUVcxQ1F5eExRVUZ1UWl4SlFVRTBRaXhEUVVGb1F5eEZRVUZ0UXp0QlFVTXZRaXhaUVVGTFF5eFRRVUZNTzBGQlEwZzdPMEZCVW5GQ08wRkJVM3BDT3p0QlFWWk1PMEZCUVVFN1FVRkJRU3huUTBGWlowSTdRVUZEVWl4WFFVRkxTQ3hOUVVGTUxFTkJRVmxKTEVsQlFWb3NRMEZCYVVJN1FVRkRZa01zWVVGQlN5eEZRVUZGTEZkQlJFMDdRVUZGWWtNc1dVRkJTU3hGUVVGRk8wRkJRMFpETEdsQ1FVRlBMRVZCUVVVc1MwRkJTMUk3UVVGRVdqdEJRVVpQTEU5QlFXcENPMEZCVFVnN1FVRnVRa3c3UVVGQlFUdEJRVUZCTEd0RFFYRkNhMEk3UVVGRFZpeFhRVUZMUXl4TlFVRk1MRU5CUVZsSkxFbEJRVm9zUTBGQmFVSTdRVUZEWWtNc1lVRkJTeXhGUVVGRkxHRkJSRTA3UVVGRllrTXNXVUZCU1N4RlFVRkZPMEZCUTBaRExHbENRVUZQTEVWQlFVVXNTMEZCUzFJN1FVRkVXanRCUVVaUExFOUJRV3BDTzBGQlRVZzdRVUUxUWt3N08wRkJRVUU3UVVGQlFTeEZRVUUyUWxNc05rUkJRVGRDTEVVN096czdPenM3T3pzN096czdPenM3T3pzN096czdPMEZEUmtFN1FVRkRRVHRCUVVOQk8wRkJSVThzU1VGQlRVTXNVVUZCWWp0QlFVRkJPMEZCUVVFN1FVRkRTU3h6UWtGQll6dEJRVUZCT3p0QlFVTldMRk5CUVV0RExGRkJRVXdzUjBGQlowSXNSVUZCYUVJN1FVRkRTRHM3UVVGSVREdEJRVUZCTzBGQlFVRXNkMEpCUzFGWUxFbEJURklzUlVGTFkwTXNUVUZNWkN4RlFVdHpRanRCUVVOa0xGVkJRVWtzUTBGQlF5eExRVUZMVlN4UlFVRk1MRU5CUVdOWUxFbEJRV1FzUTBGQlRDeEZRVUV3UWp0QlFVTjBRaXhoUVVGTFZ5eFJRVUZNTEVOQlFXTllMRWxCUVdRc1NVRkJjMEpaTEdGQlFXRXNRMEZCUTFvc1NVRkJSQ3hGUVVGUFF5eE5RVUZRTEVOQlFXNURPMEZCUTBnN08wRkJRMFFzWVVGQlR5eExRVUZMVlN4UlFVRk1MRU5CUVdOWUxFbEJRV1FzUTBGQlVEdEJRVU5JTzBGQlZrdzdRVUZCUVR0QlFVRkJMREJDUVZsVk8wRkJRMFlzWVVGQlQyRXNUVUZCVFN4RFFVRkRReXhKUVVGUUxFTkJRVmtzUzBGQlMwZ3NVVUZCYWtJc1EwRkJVRHRCUVVOSU8wRkJaRXc3UVVGQlFUdEJRVUZCTEhsQ1FXZENVMWdzU1VGb1FsUXNSVUZuUW1VN1FVRkRVQ3hoUVVGUExFdEJRVXRYTEZGQlFVd3NRMEZCWTFnc1NVRkJaQ3hEUVVGUU8wRkJRMGc3UVVGc1FrdzdRVUZCUVR0QlFVRkJMREpDUVc5Q1YwRXNTVUZ3UWxnc1JVRnZRbWxDTzBGQlExUXNWVUZCU1ZFc1QwRkJUeXhIUVVGSExFdEJRVXRITEZGQlFVd3NRMEZCWTFnc1NVRkJaQ3hEUVVGa08wRkJRMEVzWVVGQlR5eExRVUZMVnl4UlFVRk1MRU5CUVdOWUxFbEJRV1FzUTBGQlVEdEJRVU5CTEdGQlFVOVJMRTlCUVZBN1FVRkRTRHRCUVhoQ1REdEJRVUZCTzBGQlFVRXNaME5CTUVKblFqdEJRVU5TTEZkQlFVc3NTVUZCU1U4c1EwRkJWQ3hKUVVGakxFdEJRVXRLTEZGQlFXNUNMRVZCUVRaQ08wRkJRM3BDTEdGQlFVdEJMRkZCUVV3c1EwRkJZMGtzUTBGQlpDeEZRVUZwUWxnc1UwRkJha0k3UVVGRFNEdEJRVVZLTzBGQkwwSk1PenRCUVVGQk8wRkJRVUU3TzBGQmEwTkJMRk5CUVZOUkxHRkJRVlFzUTBGQmRVSmFMRWxCUVhaQ0xFVkJRVFpDUXl4TlFVRTNRaXhGUVVGeFF6dEJRVU5xUXl4TlFVRkpSQ3hKUVVGSkxFTkJRVU5uUWl4UFFVRk1MRU5CUVdFc1ZVRkJZaXhOUVVFMlFpeERRVUZxUXl4RlFVRnZRenRCUVVOb1F5eFhRVUZQTEVsQlFVbERMQ3RFUVVGS0xFTkJRVzFDYWtJc1NVRkJia0lzUlVGQmVVSkRMRTFCUVhwQ0xFTkJRVkE3UVVGRFNDeEhRVVpFTEUxQlJVOHNTVUZCU1VRc1NVRkJTU3hEUVVGRFowSXNUMEZCVEN4RFFVRmhMRmRCUVdJc1RVRkJPRUlzUTBGQmJFTXNSVUZCY1VNN1FVRkRlRU1zVjBGQlR5eEpRVUZKUlN4cFJVRkJTaXhEUVVGdlFteENMRWxCUVhCQ0xFVkJRVEJDUXl4TlFVRXhRaXhEUVVGUU8wRkJRMGdzUjBGR1RTeE5RVVZCTzBGQlEwZ3NWMEZCVHl4SlFVRkpSaXhuUkVGQlNpeERRVUZaUXl4SlFVRmFMRVZCUVd0Q1F5eE5RVUZzUWl4RFFVRlFPMEZCUTBnN1FVRkRTaXhET3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdRVU01UTBRN1FVRkZUeXhKUVVGTmFVSXNaVUZCWWp0QlFVRkJPMEZCUVVFN1FVRkJRVHM3UVVGRFNTd3lRa0ZCV1d4Q0xFbEJRVm9zUlVGQmEwSkRMRTFCUVd4Q0xFVkJRVEJDTzBGQlFVRTdPMEZCUVVFN08wRkJRM1JDTzBGQlJVRXNWVUZCUzBRc1NVRkJUQ3hIUVVGWlFTeEpRVUZhTzBGQlEwRXNWVUZCUzBNc1RVRkJUQ3hIUVVGalFTeE5RVUZrTzBGQlEwRXNWVUZCUzJ0Q0xFbEJRVXdzUjBGQldTeEpRVUZhT3p0QlFVVkJMRkZCUVVrc1RVRkJTMnhDTEUxQlFVd3NRMEZCV1VNc1RVRkJXaXhEUVVGdFFrTXNTMEZCYmtJc1NVRkJORUlzUTBGQmFFTXNSVUZCYlVNN1FVRkRMMElzV1VGQlMwTXNVMEZCVER0QlFVTklPenRCUVZSeFFqdEJRVlY2UWpzN1FVRllURHRCUVVGQk8wRkJRVUVzWjBOQllXZENPMEZCUVVFN08wRkJRMUlzVjBGQlMwZ3NUVUZCVEN4RFFVRlphMElzU1VGQldpeERRVUZwUWl4TFFVRkxia0lzU1VGQmRFSXNSVUZCTkVJc1ZVRkJRMjlDTEVOQlFVUXNSVUZCVHp0QlFVTXZRaXhqUVVGSkxFTkJRVU5FTEVsQlFVd3NSMEZCV1VNc1EwRkJReXhEUVVGRFlpeEpRVUZHTEVOQlFVOVpMRWxCUVc1Q096dEJRVVZCTEdOQlFVa3NRMEZCUTJ4Q0xFMUJRVXdzUTBGQldVa3NTVUZCV2l4RFFVRnBRanRCUVVOaVF5eGxRVUZMTEVWQlFVVXNWMEZFVFR0QlFVVmlReXhqUVVGSkxFVkJRVVU3UVVGRFJrTXNiVUpCUVU4c1JVRkJSU3hOUVVGSkxFTkJRVU5TTEVsQlJGbzdRVUZGUm0xQ0xHZENRVUZKTEVWQlFVVXNUVUZCU1N4RFFVRkRRU3hKUVVaVU8wRkJSMFpGTEhkQ1FVRlpMRVZCUVVWRUxFTkJRVU1zUTBGQlEySXNTVUZCUml4RFFVRlBZenRCUVVodVFqdEJRVVpQTEZOQlFXcENPMEZCVVVnc1QwRllSRHRCUVZsSU8wRkJNVUpNTzBGQlFVRTdRVUZCUVN4clEwRTBRbXRDTzBGQlExWXNWMEZCUzNCQ0xFMUJRVXdzUTBGQldVa3NTVUZCV2l4RFFVRnBRanRCUVVOaVF5eGhRVUZMTEVWQlFVVXNZVUZFVFR0QlFVVmlReXhaUVVGSkxFVkJRVVU3UVVGRFJrTXNhVUpCUVU4c1JVRkJSU3hMUVVGTFVqdEJRVVJhTzBGQlJrOHNUMEZCYWtJN1FVRk5TRHRCUVc1RFREczdRVUZCUVR0QlFVRkJMRVZCUVhGRFV5dzJSRUZCY2tNc1JUczdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3TzBGRFJrRTdRVUZGVHl4SlFVRk5VU3hqUVVGaU8wRkJRVUU3UVVGQlFUdEJRVUZCT3p0QlFVTkpMREJDUVVGWmFrSXNTVUZCV2l4RlFVRnJRa01zVFVGQmJFSXNSVUZCTUVJN1FVRkJRVHM3UVVGQlFUczdRVUZEZEVJN1FVRkZRU3hWUVVGTFJDeEpRVUZNTEVkQlFWbEJMRWxCUVZvN1FVRkRRU3hWUVVGTFF5eE5RVUZNTEVkQlFXTkJMRTFCUVdRN1FVRkRRU3hWUVVGTGEwSXNTVUZCVEN4SFFVRlpMRWxCUVZvN08wRkJSVUVzVVVGQlNTeE5RVUZMYkVJc1RVRkJUQ3hEUVVGWlF5eE5RVUZhTEVOQlFXMUNReXhMUVVGdVFpeEpRVUUwUWl4RFFVRm9ReXhGUVVGdFF6dEJRVU12UWl4WlFVRkxReXhUUVVGTU8wRkJRMGc3TzBGQlZIRkNPMEZCVlhwQ096dEJRVmhNTzBGQlFVRTdRVUZCUVN4blEwRmhaMEk3UVVGQlFUczdRVUZEVWl4WFFVRkxTQ3hOUVVGTUxFTkJRVmxyUWl4SlFVRmFMRU5CUVdsQ0xFdEJRVXR1UWl4SlFVRjBRaXhGUVVFMFFpeFZRVUZEYjBJc1EwRkJSQ3hGUVVGUE8wRkJReTlDTEdOQlFVa3NRMEZCUTBRc1NVRkJUQ3hIUVVGWlF5eERRVUZETEVOQlFVTmlMRWxCUVVZc1EwRkJUMWtzU1VGQmJrSTdPMEZCUlVFc1kwRkJTU3hEUVVGRGJFSXNUVUZCVEN4RFFVRlpTU3hKUVVGYUxFTkJRV2xDTzBGQlEySkRMR1ZCUVVzc1JVRkJSU3hYUVVSTk8wRkJSV0pETEdOQlFVa3NSVUZCUlR0QlFVTkdReXh0UWtGQlR5eEZRVUZGTEUxQlFVa3NRMEZCUTFJc1NVRkVXanRCUVVWR2JVSXNaMEpCUVVrc1JVRkJSU3hOUVVGSkxFTkJRVU5CTzBGQlJsUTdRVUZHVHl4VFFVRnFRanRCUVU5SUxFOUJWa1E3UVVGWFNEdEJRWHBDVER0QlFVRkJPMEZCUVVFc2EwTkJNa0pyUWp0QlFVTldMRmRCUVV0c1FpeE5RVUZNTEVOQlFWbEpMRWxCUVZvc1EwRkJhVUk3UVVGRFlrTXNZVUZCU3l4RlFVRkZMR0ZCUkUwN1FVRkZZa01zV1VGQlNTeEZRVUZGTzBGQlEwWkRMR2xDUVVGUExFVkJRVVVzUzBGQlMxSTdRVUZFV2p0QlFVWlBMRTlCUVdwQ08wRkJUVWc3UVVGc1EwdzdPMEZCUVVFN1FVRkJRU3hGUVVGdlExTXNOa1JCUVhCRExFVTdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3p0QlEwWkJPMEZCUlU4c1NVRkJUV0VzVFVGQllqdEJRVUZCTzBGQlFVRTdRVUZCUVRzN1FVRkRTU3hyUWtGQldYSkNMRTFCUVZvc1JVRkJiMEp6UWl4SlFVRndRaXhGUVVFd1FqdEJRVUZCT3p0QlFVRkJPenRCUVVOMFFqdEJRVVZCTEZWQlFVdDBRaXhOUVVGTUxFZEJRV05CTEUxQlFXUTdRVUZEUVN4VlFVRkxReXhOUVVGTUxFZEJRV01zU1VGQlNYTkNMRk5CUVVvc1EwRkJZMFFzU1VGQlNTeEhRVUZITEVkQlFWQXNSMEZCWVN4TlFVRkxkRUlzVFVGQlRDeERRVUZaZDBJc1IwRkJka01zUTBGQlpEczdRVUZGUVN4VlFVRkxReXhoUVVGTU96dEJRVTV6UWp0QlFVOTZRanM3UVVGU1REdEJRVUZCTzBGQlFVRXNiME5CVlc5Q08wRkJRVUU3TzBGQlExb3NWMEZCUzNoQ0xFMUJRVXdzUTBGQldYbENMRTFCUVZvc1IwRkJjVUlzV1VGQlRUdEJRVU4yUWl4alFVRkpMRU5CUVVORExFMUJRVXc3UVVGRFNDeFBRVVpFT3p0QlFVZEJMRmRCUVVzeFFpeE5RVUZNTEVOQlFWa3lRaXhQUVVGYUxFZEJRWE5DTEZWQlFVTkRMRXRCUVVRc1JVRkJWenRCUVVNM1FpeGpRVUZKTEVOQlFVTkRMRTlCUVV3c1EwRkJZVVFzUzBGQllqdEJRVU5JTEU5QlJrUTdPMEZCUjBFc1YwRkJTelZDTEUxQlFVd3NRMEZCV1RoQ0xFOUJRVm9zUjBGQmMwSXNWVUZCUTBNc1ZVRkJSQ3hGUVVGblFqdEJRVU5zUXl4alFVRkpMRU5CUVVORExFOUJRVXdzUTBGQllVUXNWVUZCWWp0QlFVTklMRTlCUmtRN08wRkJSMEVzVjBGQlN5OUNMRTFCUVV3c1EwRkJXV2xETEZOQlFWb3NSMEZCZDBJc1ZVRkJRME1zVDBGQlJDeEZRVUZoTzBGQlEycERMR05CUVVrc1EwRkJRME1zVTBGQlRDeERRVUZsUkN4UFFVRm1PMEZCUTBnc1QwRkdSRHRCUVVkSU8wRkJka0pNTzBGQlFVRTdRVUZCUVN3MlFrRjVRbUU3UVVGQlFUczdRVUZEVER0QlFVTkJMRmRCUVV0cVF5eExRVUZNTEVkQlFXRXNRMEZCWWp0QlFVVkJMRmRCUVV0dFF5eEpRVUZNTEVOQlFWVXNWMEZCVml4RlFVRjFRaXhWUVVGRGJFSXNRMEZCUkN4RlFVRlBPMEZCUXpGQ0xHTkJRVWtzUTBGQlEyeENMRTFCUVV3c1EwRkJXWEZETEZOQlFWb3NSMEZCZDBKdVFpeERRVUZETEVOQlFVTnRRaXhUUVVFeFFqdEJRVU5CTEdOQlFVa3NRMEZCUTNCRExFdEJRVXdzUjBGQllTeERRVUZpTEVOQlJqQkNMRU5CU1RGQ096dEJRVU5CTEdOQlFVa3NRMEZCUTBZc1RVRkJUQ3hEUVVGWlZTeFJRVUZhTEVOQlFYRkNVQ3hUUVVGeVFqdEJRVU5JTEU5QlRrUTdRVUZSUVN4WFFVRkxhME1zU1VGQlRDeERRVUZWTEcxQ1FVRldMRVZCUVN0Q0xGVkJRVU5zUWl4RFFVRkVMRVZCUVU4N1FVRkRiRU1zWTBGQlNTeERRVUZEYWtJc1MwRkJUQ3hIUVVGaExFTkJRVU1zUTBGQlpEdEJRVU5CY1VNc1pVRkJUeXhEUVVGRFZpeExRVUZTTEVOQlFXTldMRU5CUVVNc1EwRkJRMVVzUzBGQmFFSTdRVUZEU0N4UFFVaEVPMEZCUzBFN096dEJRVWRJTzBGQk4wTk1PMEZCUVVFN1FVRkJRU3cwUWtFclExbEJMRXRCTDBOYUxFVkJLME50UWp0QlFVTllWU3hoUVVGUExFTkJRVU5XTEV0QlFWSXNRMEZCWTBFc1MwRkJaRHRCUVVOSU8wRkJha1JNTzBGQlFVRTdRVUZCUVN3MFFrRnRSRmxITEZWQmJrUmFMRVZCYlVSM1FqdEJRVU5vUWl4VlFVRkpMRXRCUVVzdlFpeE5RVUZNTEVOQlFWbDFReXhWUVVGYUxFbEJRVEJDYWtJc1UwRkJVeXhEUVVGRGEwSXNUVUZCZUVNc1JVRkJaMFE3UVVGRE5VTXNXVUZCU1ZRc1ZVRkJWU3hEUVVGRFZTeEpRVUZZTEVsQlFXMUNMRTlCUVhaQ0xFVkJRV2RETzBGQlF6VkNTQ3hwUWtGQlR5eERRVUZEVml4TFFVRlNMRU5CUVdNc1pVRkJaRHRCUVVOSUxGTkJSa1FzVFVGRlR5eEpRVUZKUnl4VlFVRlZMRU5CUVVOVkxFbEJRVmdzU1VGQmJVSXNVMEZCZGtJc1JVRkJhME03UVVGRGNrTklMR2xDUVVGUExFTkJRVU5XTEV0QlFWSXNRMEZCWTBjc1ZVRkJWU3hEUVVGRE1VSXNTVUZCZWtJN1FVRkRTQ3hUUVVaTkxFMUJSVUU3UVVGRFNHbERMR2xDUVVGUExFTkJRVU5XTEV0QlFWSXNRMEZCWXl4UFFVRmtPMEZCUTBnN1FVRkRTanRCUVVOS08wRkJOMFJNTzBGQlFVRTdRVUZCUVN3NFFrRXJSR05OTEU5QkwwUmtMRVZCSzBSMVFqdEJRVU5tTEZWQlFVbFJMRXRCUVVzc1IwRkJSME1zU1VGQlNTeERRVUZEUXl4TFFVRk1MRU5CUVZkV0xFOUJRVThzUTBGQlF6ZENMRWxCUVc1Q0xFTkJRVm83UVVGRFFTeFZRVUZKUkN4TFFVRkxMRWRCUVVkelF5eExRVUZMTEVOQlFVTjBReXhMUVVGc1FqdEJRVU5CTEZWQlFVbERMRWxCUVVrc1IwRkJSM0ZETEV0QlFVc3NRMEZCUTNKRExFbEJRV3BDT3p0QlFVVkJMRlZCUVVseFF5eExRVUZMTEVOQlFVTndReXhQUVVGT0xFdEJRV3RDZFVNc1UwRkJkRUlzUlVGQmFVTTdRVUZETjBJc1lVRkJTemxETEUxQlFVd3NRMEZCV1ZVc1VVRkJXaXhEUVVGeFFuRkRMRWxCUVhKQ0xFTkJRVEJDU2l4TFFVRkxMRU5CUVVOd1F5eFBRVUZvUXl4RlFVRjVRM2xETEVsQlFYcERMRU5CUVRoRE0wTXNTMEZCT1VNc1JVRkJjVVJETEVsQlFYSkVPMEZCUTBnc1QwRkdSQ3hOUVVWUE8wRkJRMGdzWVVGQlN6QkRMRWxCUVV3c1EwRkJWVE5ETEV0QlFWWXNSVUZCYVVKRExFbEJRV3BDTzBGQlEwZzdRVUZGU2p0QlFURkZURHRCUVVGQk8wRkJRVUVzZVVKQk5FVlRNa01zU1VFMVJWUXNSVUUwUldVN1FVRkRVQ3hWUVVGSkxFdEJRVXN2UXl4TFFVRk1MRXRCUVdVc1EwRkJReXhEUVVGd1FpeEZRVUYxUWp0QlFVTnVRaXhoUVVGTFJDeE5RVUZNTEVOQlFWbEhMRWxCUVZvc1EwRkJhVUozUXl4SlFVRkpMRU5CUVVOTkxGTkJRVXdzUTBGQlpVUXNTVUZCWml4RFFVRnFRanRCUVVOSU8wRkJRMG83UVVGb1JrdzdPMEZCUVVFN1FVRkJRU3hGUVVFMFFucERMRFpFUVVFMVFpeEZPenM3T3pzN096czdPenM3T3pzN096czdPenRCUTBaUExFbEJRVTB5UXl4blFrRkJZanRCUVVGQk8wRkJRVUU3UVVGRFNTdzRRa0ZCWXp0QlFVRkJPenRCUVVOV0xGTkJRVXRETEZWQlFVd3NSMEZCYTBJc1JVRkJiRUk3UVVGRFNEczdRVUZJVER0QlFVRkJPMEZCUVVFc2QwSkJTMUZ5UkN4SlFVeFNMRVZCUzJNN1FVRkRUaXhoUVVGUExFdEJRVXR4UkN4VlFVRk1MRU5CUVdkQ1F5eE5RVUZOTEVOQlFVTjBSQ3hKUVVGRUxFTkJRWFJDTEVOQlFWQTdRVUZEU0R0QlFWQk1PMEZCUVVFN1FVRkJRU3gzUWtGVFVVRXNTVUZVVWl4RlFWTmpkVVFzVVVGVVpDeEZRVk4zUWtNc1QwRlVlRUlzUlVGVGFVTTdRVUZEZWtJc1ZVRkJTVU1zYVVKQlFXbENMRWRCUVVkSUxFMUJRVTBzUTBGQlEzUkVMRWxCUVVRc1EwRkJPVUk3UVVGRFFTeFhRVUZMY1VRc1ZVRkJUQ3hEUVVGblFra3NhVUpCUVdoQ0xFbEJRWEZETEV0QlFVdEtMRlZCUVV3c1EwRkJaMEpKTEdsQ1FVRm9RaXhMUVVGelF5eEZRVUV6UlRzN1FVRkRRU3hYUVVGTFNpeFZRVUZNTEVOQlFXZENTU3hwUWtGQmFFSXNSVUZCYlVORExFbEJRVzVETEVOQlFYZERPMEZCUTNCRFF5eFZRVUZGTEVWQlFVVktMRkZCUkdkRE8wRkJSWEJEUXl4bFFVRlBMRVZCUVVWQk8wRkJSakpDTEU5QlFYaERPMEZCU1VnN1FVRm9Ra3c3UVVGQlFUdEJRVUZCTERKQ1FXdENWM2hFTEVsQmJFSllMRVZCYTBKcFFuVkVMRkZCYkVKcVFpeEZRV3RDTWtKRExFOUJiRUl6UWl4RlFXdENiME03UVVGRE5VSXNWVUZCU1N4RFFVRkRlRVFzU1VGQlJDeEpRVUZUTEVOQlFVTjFSQ3hSUVVGV0xFbEJRWE5DTEVOQlFVTkRMRTlCUVROQ0xFVkJRVzlETzBGQlEyaERMR0ZCUVV0SUxGVkJRVXdzUjBGQmEwSXNSVUZCYkVJN1FVRkRRVHRCUVVOSU96dEJRVVZFTEZWQlFVbFBMRXRCUVVzc1IwRkJSelZFTEVsQlFVa3NSMEZCUnl4RFFVRkRjMFFzVFVGQlRTeERRVUZEZEVRc1NVRkJSQ3hEUVVGUUxFTkJRVWdzUjBGQmIwSmhMRTFCUVUwc1EwRkJRME1zU1VGQlVDeERRVUZaTEV0QlFVdDFReXhWUVVGcVFpeERRVUZ3UXpzN1FVRkZRU3hWUVVGSlJTeFJRVUZSTEVsQlFVbERMRTlCUVdoQ0xFVkJRWGxDTzBGQlEzSkNMR0ZCUVV0TExHTkJRVXdzUTBGQmIwSkVMRXRCUVhCQ0xFVkJRVEpDVEN4UlFVRXpRaXhGUVVGeFEwTXNUMEZCY2tNN1FVRkRTQ3hQUVVaRUxFMUJSVTg3UVVGRFNDeGhRVUZMVFN4clFrRkJUQ3hEUVVGM1FrWXNTMEZCZUVJN1FVRkRTRHRCUVVOS08wRkJMMEpNTzBGQlFVRTdRVUZCUVN4dFEwRnBRMjFDUVN4TFFXcERia0lzUlVGcFF6QkNUQ3hSUVdwRE1VSXNSVUZwUTI5RFF5eFBRV3BEY0VNc1JVRnBRelpETzBGQlEzSkRMRmRCUVVzc1NVRkJTWGhFTEVsQlFWUXNTVUZCYVVJMFJDeExRVUZxUWl4RlFVRjNRanRCUVVOd1FpeGhRVUZMTEVsQlFVbHVReXhIUVVGVUxFbEJRV2RDTEV0QlFVczBRaXhWUVVGTUxFTkJRV2RDY2tRc1NVRkJhRUlzUTBGQmFFSXNSVUZCZFVNN1FVRkRia01zWTBGQlNTeExRVUZMY1VRc1ZVRkJUQ3hEUVVGblFuSkVMRWxCUVdoQ0xFVkJRWE5DZVVJc1IwRkJkRUlzUlVGQk1rSnJReXhGUVVFelFpeEpRVUZwUTBvc1VVRkJha01zU1VGQk5rTXNTMEZCUzBZc1ZVRkJUQ3hEUVVGblFuSkVMRWxCUVdoQ0xFVkJRWE5DZVVJc1IwRkJkRUlzUlVGQk1rSXJRaXhQUVVFelFpeEpRVUZ6UTBFc1QwRkJka1lzUlVGQlowYzdRVUZETlVZc2JVSkJRVThzUzBGQlMwZ3NWVUZCVEN4RFFVRm5RbkpFTEVsQlFXaENMRVZCUVhOQ2VVSXNSMEZCZEVJc1EwRkJVRHRCUVVOSU8wRkJRMG83TzBGQlJVUXNXVUZCU1N4TFFVRkxORUlzVlVGQlRDeERRVUZuUW5KRUxFbEJRV2hDTEVWQlFYTkNLMFFzVFVGQmRFSXNTMEZCYVVNc1EwRkJja01zUlVGQmQwTTdRVUZEY0VNc2FVSkJRVThzUzBGQlMxWXNWVUZCVEN4RFFVRm5RbkpFTEVsQlFXaENMRU5CUVZBN1FVRkRTRHRCUVVOS08wRkJRMG83UVVFM1EwdzdRVUZCUVR0QlFVRkJMSFZEUVN0RGRVSTBSQ3hMUVM5RGRrSXNSVUVyUXpoQ08wRkJRM1JDTEZkQlFVc3NTVUZCU1RWRUxFbEJRVlFzU1VGQmFVSTBSQ3hMUVVGcVFpeEZRVUYzUWp0QlFVTndRaXhsUVVGUExFdEJRVXRRTEZWQlFVd3NRMEZCWjBKeVJDeEpRVUZvUWl4RFFVRlFPMEZCUTBnN1FVRkRTanRCUVc1RVREczdRVUZCUVR0QlFVRkJPenRCUVhORVFTeFRRVUZUYzBRc1RVRkJWQ3hEUVVGblFuUkVMRWxCUVdoQ0xFVkJRWE5DTzBGQlEyeENMRk5CUVU4c1RVRkJUVUVzU1VGQllqdEJRVU5JTEVNN096czdPenM3T3pzN096czdPenM3T3pzN096dEJRM2hFUkR0QlFVVlBMRWxCUVUxVExGVkJRV0k3UVVGQlFUdEJRVUZCTzBGQlEwa3NkMEpCUVdNN1FVRkJRVHM3UVVGRFZpeFRRVUZMZFVRc1UwRkJUQ3hIUVVGcFFpeEpRVUZKV2l4dFJVRkJTaXhGUVVGcVFqdEJRVU5CTEZOQlFVdGhMR2RDUVVGTUxFZEJRWGRDTEVWQlFYaENPMEZCUTBnN08wRkJTa3c3UVVGQlFUdEJRVUZCTEhsQ1FVMVRReXhUUVU1VUxFVkJUVzlDV0N4UlFVNXdRaXhGUVUwNFFrTXNUMEZPT1VJc1JVRk5kVU03UVVGREwwSXNWMEZCUzFFc1UwRkJUQ3hEUVVGbFJ5eEhRVUZtTEVOQlFXMUNSQ3hUUVVGdVFpeEZRVUU0UWxnc1VVRkJPVUlzUlVGQmQwTkRMRTlCUVhoRE8wRkJRMEVzWVVGQlR5eEpRVUZRTzBGQlEwZzdRVUZVVER0QlFVRkJPMEZCUVVFc1owTkJWMmRDUkN4UlFWaG9RaXhGUVZjd1FqdEJRVU5zUWl4WFFVRkxWU3huUWtGQlRDeERRVUZ6UWxBc1NVRkJkRUlzUTBGQk1rSklMRkZCUVROQ08wRkJRMEVzWVVGQlR5eEpRVUZRTzBGQlEwZzdRVUZrVER0QlFVRkJPMEZCUVVFc01rSkJaMEpYVnl4VFFXaENXQ3hGUVdkQ2MwSllMRkZCYUVKMFFpeEZRV2RDWjBORExFOUJhRUpvUXl4RlFXZENlVU03UVVGRGFrTXNWMEZCUzFFc1UwRkJUQ3hEUVVGbFNTeE5RVUZtTEVOQlFYTkNSaXhUUVVGMFFpeEZRVUZwUTFnc1VVRkJha01zUlVGQk1rTkRMRTlCUVRORE8wRkJRMEVzWVVGQlR5eEpRVUZRTzBGQlEwZzdRVUZ1UWt3N1FVRkJRVHRCUVVGQkxHdERRWEZDYTBKRUxGRkJja0pzUWl4RlFYRkNORUk3UVVGRGNFSXNWVUZCU1N4RFFVRkRRU3hSUVVGTUxFVkJRV1U3UVVGRFdDeGhRVUZMVlN4blFrRkJUQ3hIUVVGM1FpeEZRVUY0UWp0QlFVTkJMR1ZCUVU4c1NVRkJVRHRCUVVOSU96dEJRVVZFTEZkQlFVc3NTVUZCU1d4RUxFTkJRVlFzU1VGQll5eExRVUZMYTBRc1owSkJRVzVDTEVWQlFYRkRPMEZCUTJwRExGbEJRVWxXTEZGQlFWRXNTVUZCU1N4TFFVRkxWU3huUWtGQlRDeERRVUZ6UW14RUxFTkJRWFJDTEVOQlFXaENMRVZCUVRCRE8wRkJRM1JETEdsQ1FVRlBMRXRCUVV0clJDeG5Ra0ZCVEN4RFFVRnpRbXhFTEVOQlFYUkNMRU5CUVZBN1FVRkRTRHRCUVVOS096dEJRVU5FTEdGQlFVOHNTVUZCVUR0QlFVTklPMEZCYWtOTU8wRkJRVUU3UVVGQlFTeHBRMEZ0UTJsQ08wRkJRMVFzVjBGQlMzTkVMRTFCUVV3N1FVRkRRU3hYUVVGTFF5eGhRVUZNTzBGQlEwRXNZVUZCVHl4SlFVRlFPMEZCUTBnN1FVRjJRMHc3UVVGQlFUdEJRVUZCTEhsQ1FYbERVMG9zVTBGNlExUXNSVUY1UTI5Q00wUXNTVUY2UTNCQ0xFVkJlVU13UWp0QlFVTnNRaXhYUVVGTExFbEJRVWxSTEVOQlFVTXNSMEZCUnl4RFFVRmlMRVZCUVdkQ1FTeERRVUZETEVkQlFVY3NTMEZCUzJ0RUxHZENRVUZNTEVOQlFYTkNSaXhOUVVFeFF5eEZRVUZyUkdoRUxFTkJRVU1zUlVGQmJrUXNSVUZCZFVRN1FVRkRia1FzWVVGQlMydEVMR2RDUVVGTUxFTkJRWE5DYkVRc1EwRkJkRUlzUlVGQmVVSnRSQ3hUUVVGNlFpeEZRVUZ2UXpORUxFbEJRWEJETzBGQlEwZzdPMEZCUlVRc1ZVRkJTWGxFTEZOQlFWTXNSMEZCUnl4TFFVRkxRU3hUUVVGTUxFTkJRV1ZQTEVkQlFXWXNRMEZCYlVKTUxGTkJRVzVDTEVOQlFXaENPenRCUVVOQkxGVkJRVWxHTEZOQlFWTXNTVUZCU1VFc1UwRkJVeXhEUVVGRFJDeE5RVUZXTEVkQlFXMUNMRU5CUVhCRExFVkJRWFZETzBGQlEyNURMR0ZCUVVzc1NVRkJTV2hFTEVWQlFVTXNSMEZCUnl4RFFVRmlMRVZCUVdkQ1FTeEZRVUZETEVkQlFVZHBSQ3hUUVVGVExFTkJRVU5FTEUxQlFUbENMRVZCUVhORGFFUXNSVUZCUXl4RlFVRjJReXhGUVVFeVF6dEJRVU4yUTJsRUxHMUNRVUZUTEVOQlFVTnFSQ3hGUVVGRUxFTkJRVlFzUTBGQllUUkRMRVZCUVdJc1EwRkJaMEpoTEVsQlFXaENMRU5CUVhGQ1VpeFRRVUZUTEVOQlFVTnFSQ3hGUVVGRUxFTkJRVlFzUTBGQllYbERMRTlCUVd4RExFVkJRVEpEYWtRc1NVRkJNME03UVVGRFNEdEJRVU5LT3p0QlFVVkVMR0ZCUVU4c1NVRkJVRHRCUVVOSU8wRkJkRVJNT3p0QlFVRkJPMEZCUVVFc1NUczdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3p0QlEwWkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJSVThzU1VGQlRXdEZMRTFCUVdJN1FVRkJRVHRCUVVGQk8wRkJRMGtzYTBKQlFWbERMRTlCUVZvc1JVRkJjVUpETEU5QlFYSkNMRVZCUVRoQ08wRkJRVUU3TzBGQlF6RkNMRk5CUVV0RExGZEJRVXdzUTBGQmFVSkdMRTlCUVdwQ08wRkJSVUVzVTBGQlMycEVMRWRCUVV3c1IwRkJWMmxFTEU5QlFWZzdRVUZEUVN4VFFVRkxReXhQUVVGTUxFZEJRV1ZCTEU5QlFVOHNTVUZCU1N4RlFVRXhRanRCUVVOQkxGTkJRVXRGTEZWQlFVd3NSMEZCYTBJc1NVRkJTWEJGTERaRVFVRktMRVZCUVd4Q08wRkJRMEVzVTBGQlMwVXNVVUZCVEN4SFFVRm5RaXhKUVVGSlJDd3lSRUZCU2l4RlFVRm9RanRCUVVWQkxGTkJRVXR2UlN4UFFVRk1PMEZCUTBnN08wRkJWa3c3UVVGQlFUdEJRVUZCTERoQ1FWbGpPMEZCUTA0c1YwRkJTelZGTEUxQlFVd3NSMEZCWXl4SlFVRkpiMElzZVVSQlFVb3NRMEZCVnl4SlFVRllMRVZCUVdsQ0xFdEJRVXR4UkN4UFFVRk1MRU5CUVdGd1JDeEpRVUU1UWl4RFFVRmtPMEZCUTBnN1FVRmtURHRCUVVGQk8wRkJRVUVzT0VKQlowSmpkMFFzV1VGb1FtUXNSVUZuUWpSQ08wRkJRM0JDTEdGQlFVOHNTMEZCUzNCRkxGRkJRVXdzUTBGQlkzZEVMRWRCUVdRc1EwRkJhMEpaTEZsQlFXeENMRVZCUVdkRExFbEJRV2hETEVOQlFWQTdRVUZEU0R0QlFXeENURHRCUVVGQk8wRkJRVUVzWjBOQmIwSm5Ra0VzV1VGd1FtaENMRVZCYjBJNFFqdEJRVU4wUWl4VlFVRkpka1VzVDBGQlR5eEhRVUZITEV0QlFVdEhMRkZCUVV3c1EwRkJZM2xFTEUxQlFXUXNRMEZCY1VKWExGbEJRWEpDTEVOQlFXUTdRVUZEUVhaRkxHRkJRVThzUTBGQlEzZEZMRmRCUVZJN1FVRkRTRHRCUVhaQ1REdEJRVUZCTzBGQlFVRXNhME5CZVVKclFqdEJRVU5XTEdGQlFVOHNTMEZCU3psRkxFMUJRVXdzUTBGQldVRXNUVUZCV2l4RFFVRnRRbkZETEZOQlFURkNPMEZCUTBnN1FVRXpRa3c3UVVGQlFUdEJRVUZCTEhsQ1FUWkNVMWNzU1VFM1FsUXNSVUUyUW1VN1FVRkRVQ3hYUVVGTGFFUXNUVUZCVEN4RFFVRlpSeXhKUVVGYUxFTkJRV2xDTmtNc1NVRkJha0k3UVVGRFNEdEJRUzlDVER0QlFVRkJPMEZCUVVFc1owTkJhVU5uUW5wQ0xFZEJha05vUWl4RlFXbERjVUk3UVVGRFlpeGhRVUZQTEVsQlFWQTdRVUZEU0R0QlFXNURURHRCUVVGQk8wRkJRVUVzZVVKQmNVTlRla0lzU1VGeVExUXNSVUZ4UTJWMVJDeFJRWEpEWml4RlFYRkRlVUk3UVVGRGFrSXNWVUZCU1RCQ0xFMUJRVTBzUjBGQlJ5eExRVUZMVGl4UFFVRk1MRU5CUVdGNFJDeEpRVUZpTEVOQlFXdENPRVFzVFVGQmJFSXNTVUZCTkVJc1RVRkJla003UVVGRFFTeFZRVUZKTVVVc1NVRkJTU3hIUVVGSExFVkJRVmc3UVVGRFFTeFZRVUZKTWtVc1RVRkJUU3hIUVVGSExFVkJRV0k3TzBGQlJVRXNWVUZCU1VRc1RVRkJUU3hKUVVGSkxFMUJRV1FzUlVGQmMwSTdRVUZEYkVJeFJTeFpRVUZKTEVkQlFVZE5MRTFCUVUwc1EwRkJRM05GTEUxQlFWQXNRMEZCWXp0QlFVTnFRa29zYzBKQlFWa3NSVUZCUlM5RkxFbEJSRWM3UVVGRmFrSjFReXh0UWtGQlV5eEZRVUZGTEV0QlFVczJReXhYUVVGTU8wRkJSazBzVTBGQlpDeERRVUZRTzBGQlNVZ3NUMEZNUkN4TlFVdFBPMEZCUTBoR0xHTkJRVTBzUjBGQlIzSkZMRTFCUVUwc1EwRkJRM05GTEUxQlFWQXNRMEZCWXp0QlFVTnVRa29zYzBKQlFWa3NSVUZCUlM5RkxFbEJSRXM3UVVGRmJrSjFReXh0UWtGQlV5eEZRVUZGTEV0QlFVczJReXhYUVVGTU8wRkJSbEVzVTBGQlpDeERRVUZVTzBGQlNVZzdPMEZCUlVSRExHdEVRVUZMTEVOQlFVTTdRVUZEUmtNc1YwRkJSeXhGUVVGRkxFdEJRVXRZTEU5QlFVd3NRMEZCWVhoRUxFbEJRV0lzUTBGQmEwSnRSU3hIUVVSeVFqdEJRVVZHVEN4alFVRk5MRVZCUVVWQkxFMUJSazQ3UVVGSFJrMHNaVUZCVHl4RlFVRkZMRXRCUVV0YUxFOUJRVXdzUTBGQllYaEVMRWxCUVdJc1EwRkJhMEp2UlN4UFFVRnNRaXhKUVVFMlFpeEZRVWh3UXp0QlFVbEdUQ3hqUVVGTkxFVkJRVVZCTEUxQlNrNDdRVUZMUmpORkxGbEJRVWtzUlVGQlJVRTdRVUZNU2l4UFFVRkVMRU5CUVV3c1EwRk5SMmxHTEVsQlRrZ3NRMEZOVVN4VlFVRkRjRVVzUTBGQlJDeEZRVUZQTzBGQlExaHRReXhuUWtGQlVTeERRVUZEYmtNc1EwRkJSQ3hEUVVGU08wRkJRMGdzVDBGU1JDeEZRVkZIY1VVc1MwRlNTQ3hEUVZGVExGVkJRVU55UlN4RFFVRkVMRVZCUVU4N1FVRkRXbTlDTEdWQlFVOHNRMEZCUTFZc1MwRkJVaXhEUVVGakxGZEJRV1E3UVVGRFNDeFBRVlpFTzBGQlYwZzdRVUZxUlV3N08wRkJRVUU3UVVGQlFUdEJRVzlGUVRSRUxFMUJRVTBzUTBGQlEycENMRTFCUVZBc1IwRkJaMEpCTEUxQlFXaENMRU1pTENKbWFXeGxJam9pY0hWemFHVnlMbXB6SWl3aWMyOTFjbU5sYzBOdmJuUmxiblFpT2xzaUlGeDBMeThnVkdobElHMXZaSFZzWlNCallXTm9aVnh1SUZ4MGRtRnlJR2x1YzNSaGJHeGxaRTF2WkhWc1pYTWdQU0I3ZlR0Y2JseHVJRngwTHk4Z1ZHaGxJSEpsY1hWcGNtVWdablZ1WTNScGIyNWNiaUJjZEdaMWJtTjBhVzl1SUY5ZmQyVmljR0ZqYTE5eVpYRjFhWEpsWDE4b2JXOWtkV3hsU1dRcElIdGNibHh1SUZ4MFhIUXZMeUJEYUdWamF5QnBaaUJ0YjJSMWJHVWdhWE1nYVc0Z1kyRmphR1ZjYmlCY2RGeDBhV1lvYVc1emRHRnNiR1ZrVFc5a2RXeGxjMXR0YjJSMWJHVkpaRjBwSUh0Y2JpQmNkRngwWEhSeVpYUjFjbTRnYVc1emRHRnNiR1ZrVFc5a2RXeGxjMXR0YjJSMWJHVkpaRjB1Wlhod2IzSjBjenRjYmlCY2RGeDBmVnh1SUZ4MFhIUXZMeUJEY21WaGRHVWdZU0J1WlhjZ2JXOWtkV3hsSUNoaGJtUWdjSFYwSUdsMElHbHVkRzhnZEdobElHTmhZMmhsS1Z4dUlGeDBYSFIyWVhJZ2JXOWtkV3hsSUQwZ2FXNXpkR0ZzYkdWa1RXOWtkV3hsYzF0dGIyUjFiR1ZKWkYwZ1BTQjdYRzRnWEhSY2RGeDBhVG9nYlc5a2RXeGxTV1FzWEc0Z1hIUmNkRngwYkRvZ1ptRnNjMlVzWEc0Z1hIUmNkRngwWlhod2IzSjBjem9nZTMxY2JpQmNkRngwZlR0Y2JseHVJRngwWEhRdkx5QkZlR1ZqZFhSbElIUm9aU0J0YjJSMWJHVWdablZ1WTNScGIyNWNiaUJjZEZ4MGJXOWtkV3hsYzF0dGIyUjFiR1ZKWkYwdVkyRnNiQ2h0YjJSMWJHVXVaWGh3YjNKMGN5d2diVzlrZFd4bExDQnRiMlIxYkdVdVpYaHdiM0owY3l3Z1gxOTNaV0p3WVdOclgzSmxjWFZwY21WZlh5azdYRzVjYmlCY2RGeDBMeThnUm14aFp5QjBhR1VnYlc5a2RXeGxJR0Z6SUd4dllXUmxaRnh1SUZ4MFhIUnRiMlIxYkdVdWJDQTlJSFJ5ZFdVN1hHNWNiaUJjZEZ4MEx5OGdVbVYwZFhKdUlIUm9aU0JsZUhCdmNuUnpJRzltSUhSb1pTQnRiMlIxYkdWY2JpQmNkRngwY21WMGRYSnVJRzF2WkhWc1pTNWxlSEJ2Y25Sek8xeHVJRngwZlZ4dVhHNWNiaUJjZEM4dklHVjRjRzl6WlNCMGFHVWdiVzlrZFd4bGN5QnZZbXBsWTNRZ0tGOWZkMlZpY0dGamExOXRiMlIxYkdWelgxOHBYRzRnWEhSZlgzZGxZbkJoWTJ0ZmNtVnhkV2x5WlY5ZkxtMGdQU0J0YjJSMWJHVnpPMXh1WEc0Z1hIUXZMeUJsZUhCdmMyVWdkR2hsSUcxdlpIVnNaU0JqWVdOb1pWeHVJRngwWDE5M1pXSndZV05yWDNKbGNYVnBjbVZmWHk1aklEMGdhVzV6ZEdGc2JHVmtUVzlrZFd4bGN6dGNibHh1SUZ4MEx5OGdaR1ZtYVc1bElHZGxkSFJsY2lCbWRXNWpkR2x2YmlCbWIzSWdhR0Z5Ylc5dWVTQmxlSEJ2Y25SelhHNGdYSFJmWDNkbFluQmhZMnRmY21WeGRXbHlaVjlmTG1RZ1BTQm1kVzVqZEdsdmJpaGxlSEJ2Y25SekxDQnVZVzFsTENCblpYUjBaWElwSUh0Y2JpQmNkRngwYVdZb0lWOWZkMlZpY0dGamExOXlaWEYxYVhKbFgxOHVieWhsZUhCdmNuUnpMQ0J1WVcxbEtTa2dlMXh1SUZ4MFhIUmNkRTlpYW1WamRDNWtaV1pwYm1WUWNtOXdaWEowZVNobGVIQnZjblJ6TENCdVlXMWxMQ0I3SUdWdWRXMWxjbUZpYkdVNklIUnlkV1VzSUdkbGREb2daMlYwZEdWeUlIMHBPMXh1SUZ4MFhIUjlYRzRnWEhSOU8xeHVYRzRnWEhRdkx5QmtaV1pwYm1VZ1gxOWxjMDF2WkhWc1pTQnZiaUJsZUhCdmNuUnpYRzRnWEhSZlgzZGxZbkJoWTJ0ZmNtVnhkV2x5WlY5ZkxuSWdQU0JtZFc1amRHbHZiaWhsZUhCdmNuUnpLU0I3WEc0Z1hIUmNkR2xtS0hSNWNHVnZaaUJUZVcxaWIyd2dJVDA5SUNkMWJtUmxabWx1WldRbklDWW1JRk41YldKdmJDNTBiMU4wY21sdVoxUmhaeWtnZTF4dUlGeDBYSFJjZEU5aWFtVmpkQzVrWldacGJtVlFjbTl3WlhKMGVTaGxlSEJ2Y25SekxDQlRlVzFpYjJ3dWRHOVRkSEpwYm1kVVlXY3NJSHNnZG1Gc2RXVTZJQ2ROYjJSMWJHVW5JSDBwTzF4dUlGeDBYSFI5WEc0Z1hIUmNkRTlpYW1WamRDNWtaV1pwYm1WUWNtOXdaWEowZVNobGVIQnZjblJ6TENBblgxOWxjMDF2WkhWc1pTY3NJSHNnZG1Gc2RXVTZJSFJ5ZFdVZ2ZTazdYRzRnWEhSOU8xeHVYRzRnWEhRdkx5QmpjbVZoZEdVZ1lTQm1ZV3RsSUc1aGJXVnpjR0ZqWlNCdlltcGxZM1JjYmlCY2RDOHZJRzF2WkdVZ0ppQXhPaUIyWVd4MVpTQnBjeUJoSUcxdlpIVnNaU0JwWkN3Z2NtVnhkV2x5WlNCcGRGeHVJRngwTHk4Z2JXOWtaU0FtSURJNklHMWxjbWRsSUdGc2JDQndjbTl3WlhKMGFXVnpJRzltSUhaaGJIVmxJR2x1ZEc4Z2RHaGxJRzV6WEc0Z1hIUXZMeUJ0YjJSbElDWWdORG9nY21WMGRYSnVJSFpoYkhWbElIZG9aVzRnWVd4eVpXRmtlU0J1Y3lCdlltcGxZM1JjYmlCY2RDOHZJRzF2WkdVZ0ppQTRmREU2SUdKbGFHRjJaU0JzYVd0bElISmxjWFZwY21WY2JpQmNkRjlmZDJWaWNHRmphMTl5WlhGMWFYSmxYMTh1ZENBOUlHWjFibU4wYVc5dUtIWmhiSFZsTENCdGIyUmxLU0I3WEc0Z1hIUmNkR2xtS0cxdlpHVWdKaUF4S1NCMllXeDFaU0E5SUY5ZmQyVmljR0ZqYTE5eVpYRjFhWEpsWDE4b2RtRnNkV1VwTzF4dUlGeDBYSFJwWmlodGIyUmxJQ1lnT0NrZ2NtVjBkWEp1SUhaaGJIVmxPMXh1SUZ4MFhIUnBaaWdvYlc5a1pTQW1JRFFwSUNZbUlIUjVjR1Z2WmlCMllXeDFaU0E5UFQwZ0oyOWlhbVZqZENjZ0ppWWdkbUZzZFdVZ0ppWWdkbUZzZFdVdVgxOWxjMDF2WkhWc1pTa2djbVYwZFhKdUlIWmhiSFZsTzF4dUlGeDBYSFIyWVhJZ2JuTWdQU0JQWW1wbFkzUXVZM0psWVhSbEtHNTFiR3dwTzF4dUlGeDBYSFJmWDNkbFluQmhZMnRmY21WeGRXbHlaVjlmTG5Jb2JuTXBPMXh1SUZ4MFhIUlBZbXBsWTNRdVpHVm1hVzVsVUhKdmNHVnlkSGtvYm5Nc0lDZGtaV1poZFd4MEp5d2dleUJsYm5WdFpYSmhZbXhsT2lCMGNuVmxMQ0IyWVd4MVpUb2dkbUZzZFdVZ2ZTazdYRzRnWEhSY2RHbG1LRzF2WkdVZ0ppQXlJQ1ltSUhSNWNHVnZaaUIyWVd4MVpTQWhQU0FuYzNSeWFXNW5KeWtnWm05eUtIWmhjaUJyWlhrZ2FXNGdkbUZzZFdVcElGOWZkMlZpY0dGamExOXlaWEYxYVhKbFgxOHVaQ2h1Y3l3Z2EyVjVMQ0JtZFc1amRHbHZiaWhyWlhrcElIc2djbVYwZFhKdUlIWmhiSFZsVzJ0bGVWMDdJSDB1WW1sdVpDaHVkV3hzTENCclpYa3BLVHRjYmlCY2RGeDBjbVYwZFhKdUlHNXpPMXh1SUZ4MGZUdGNibHh1SUZ4MEx5OGdaMlYwUkdWbVlYVnNkRVY0Y0c5eWRDQm1kVzVqZEdsdmJpQm1iM0lnWTI5dGNHRjBhV0pwYkdsMGVTQjNhWFJvSUc1dmJpMW9ZWEp0YjI1NUlHMXZaSFZzWlhOY2JpQmNkRjlmZDJWaWNHRmphMTl5WlhGMWFYSmxYMTh1YmlBOUlHWjFibU4wYVc5dUtHMXZaSFZzWlNrZ2UxeHVJRngwWEhSMllYSWdaMlYwZEdWeUlEMGdiVzlrZFd4bElDWW1JRzF2WkhWc1pTNWZYMlZ6VFc5a2RXeGxJRDljYmlCY2RGeDBYSFJtZFc1amRHbHZiaUJuWlhSRVpXWmhkV3gwS0NrZ2V5QnlaWFIxY200Z2JXOWtkV3hsV3lka1pXWmhkV3gwSjEwN0lIMGdPbHh1SUZ4MFhIUmNkR1oxYm1OMGFXOXVJR2RsZEUxdlpIVnNaVVY0Y0c5eWRITW9LU0I3SUhKbGRIVnliaUJ0YjJSMWJHVTdJSDA3WEc0Z1hIUmNkRjlmZDJWaWNHRmphMTl5WlhGMWFYSmxYMTh1WkNoblpYUjBaWElzSUNkaEp5d2daMlYwZEdWeUtUdGNiaUJjZEZ4MGNtVjBkWEp1SUdkbGRIUmxjanRjYmlCY2RIMDdYRzVjYmlCY2RDOHZJRTlpYW1WamRDNXdjbTkwYjNSNWNHVXVhR0Z6VDNkdVVISnZjR1Z5ZEhrdVkyRnNiRnh1SUZ4MFgxOTNaV0p3WVdOclgzSmxjWFZwY21WZlh5NXZJRDBnWm5WdVkzUnBiMjRvYjJKcVpXTjBMQ0J3Y205d1pYSjBlU2tnZXlCeVpYUjFjbTRnVDJKcVpXTjBMbkJ5YjNSdmRIbHdaUzVvWVhOUGQyNVFjbTl3WlhKMGVTNWpZV3hzS0c5aWFtVmpkQ3dnY0hKdmNHVnlkSGtwT3lCOU8xeHVYRzRnWEhRdkx5QmZYM2RsWW5CaFkydGZjSFZpYkdsalgzQmhkR2hmWDF4dUlGeDBYMTkzWldKd1lXTnJYM0psY1hWcGNtVmZYeTV3SUQwZ1hDSmNJanRjYmx4dVhHNGdYSFF2THlCTWIyRmtJR1Z1ZEhKNUlHMXZaSFZzWlNCaGJtUWdjbVYwZFhKdUlHVjRjRzl5ZEhOY2JpQmNkSEpsZEhWeWJpQmZYM2RsWW5CaFkydGZjbVZ4ZFdseVpWOWZLRjlmZDJWaWNHRmphMTl5WlhGMWFYSmxYMTh1Y3lBOUlGd2lMaTl6Y21NdmNIVnphR1Z5TG1welhDSXBPMXh1SWl3aWJXOWtkV3hsTG1WNGNHOXlkSE1nUFNCeVpYRjFhWEpsS0NjdUwyeHBZaTloZUdsdmN5Y3BPeUlzSWlkMWMyVWdjM1J5YVdOMEp6dGNibHh1ZG1GeUlIVjBhV3h6SUQwZ2NtVnhkV2x5WlNnbkxpOHVMaTkxZEdsc2N5Y3BPMXh1ZG1GeUlITmxkSFJzWlNBOUlISmxjWFZwY21Vb0p5NHZMaTR2WTI5eVpTOXpaWFIwYkdVbktUdGNiblpoY2lCaWRXbHNaRlZTVENBOUlISmxjWFZwY21Vb0p5NHZMaTR2YUdWc2NHVnljeTlpZFdsc1pGVlNUQ2NwTzF4dWRtRnlJSEJoY25ObFNHVmhaR1Z5Y3lBOUlISmxjWFZwY21Vb0p5NHZMaTR2YUdWc2NHVnljeTl3WVhKelpVaGxZV1JsY25NbktUdGNiblpoY2lCcGMxVlNURk5oYldWUGNtbG5hVzRnUFNCeVpYRjFhWEpsS0NjdUx5NHVMMmhsYkhCbGNuTXZhWE5WVWt4VFlXMWxUM0pwWjJsdUp5azdYRzUyWVhJZ1kzSmxZWFJsUlhKeWIzSWdQU0J5WlhGMWFYSmxLQ2N1TGk5amIzSmxMMk55WldGMFpVVnljbTl5SnlrN1hHNTJZWElnWW5SdllTQTlJQ2gwZVhCbGIyWWdkMmx1Wkc5M0lDRTlQU0FuZFc1a1pXWnBibVZrSnlBbUppQjNhVzVrYjNjdVluUnZZU0FtSmlCM2FXNWtiM2N1WW5SdllTNWlhVzVrS0hkcGJtUnZkeWtwSUh4OElISmxjWFZwY21Vb0p5NHZMaTR2YUdWc2NHVnljeTlpZEc5aEp5azdYRzVjYm0xdlpIVnNaUzVsZUhCdmNuUnpJRDBnWm5WdVkzUnBiMjRnZUdoeVFXUmhjSFJsY2loamIyNW1hV2NwSUh0Y2JpQWdjbVYwZFhKdUlHNWxkeUJRY205dGFYTmxLR1oxYm1OMGFXOXVJR1JwYzNCaGRHTm9XR2h5VW1WeGRXVnpkQ2h5WlhOdmJIWmxMQ0J5WldwbFkzUXBJSHRjYmlBZ0lDQjJZWElnY21WeGRXVnpkRVJoZEdFZ1BTQmpiMjVtYVdjdVpHRjBZVHRjYmlBZ0lDQjJZWElnY21WeGRXVnpkRWhsWVdSbGNuTWdQU0JqYjI1bWFXY3VhR1ZoWkdWeWN6dGNibHh1SUNBZ0lHbG1JQ2gxZEdsc2N5NXBjMFp2Y20xRVlYUmhLSEpsY1hWbGMzUkVZWFJoS1NrZ2UxeHVJQ0FnSUNBZ1pHVnNaWFJsSUhKbGNYVmxjM1JJWldGa1pYSnpXeWREYjI1MFpXNTBMVlI1Y0dVblhUc2dMeThnVEdWMElIUm9aU0JpY205M2MyVnlJSE5sZENCcGRGeHVJQ0FnSUgxY2JseHVJQ0FnSUhaaGNpQnlaWEYxWlhOMElEMGdibVYzSUZoTlRFaDBkSEJTWlhGMVpYTjBLQ2s3WEc0Z0lDQWdkbUZ5SUd4dllXUkZkbVZ1ZENBOUlDZHZibkpsWVdSNWMzUmhkR1ZqYUdGdVoyVW5PMXh1SUNBZ0lIWmhjaUI0Ukc5dFlXbHVJRDBnWm1Gc2MyVTdYRzVjYmlBZ0lDQXZMeUJHYjNJZ1NVVWdPQzg1SUVOUFVsTWdjM1Z3Y0c5eWRGeHVJQ0FnSUM4dklFOXViSGtnYzNWd2NHOXlkSE1nVUU5VFZDQmhibVFnUjBWVUlHTmhiR3h6SUdGdVpDQmtiMlZ6YmlkMElISmxkSFZ5Ym5NZ2RHaGxJSEpsYzNCdmJuTmxJR2hsWVdSbGNuTXVYRzRnSUNBZ0x5OGdSRTlPSjFRZ1pHOGdkR2hwY3lCbWIzSWdkR1Z6ZEdsdVp5QmlMMk1nV0UxTVNIUjBjRkpsY1hWbGMzUWdhWE1nYlc5amEyVmtMQ0J1YjNRZ1dFUnZiV0ZwYmxKbGNYVmxjM1F1WEc0Z0lDQWdhV1lnS0hCeWIyTmxjM011Wlc1MkxrNVBSRVZmUlU1V0lDRTlQU0FuZEdWemRDY2dKaVpjYmlBZ0lDQWdJQ0FnZEhsd1pXOW1JSGRwYm1SdmR5QWhQVDBnSjNWdVpHVm1hVzVsWkNjZ0ppWmNiaUFnSUNBZ0lDQWdkMmx1Wkc5M0xsaEViMjFoYVc1U1pYRjFaWE4wSUNZbUlDRW9KM2RwZEdoRGNtVmtaVzUwYVdGc2N5Y2dhVzRnY21WeGRXVnpkQ2tnSmlaY2JpQWdJQ0FnSUNBZ0lXbHpWVkpNVTJGdFpVOXlhV2RwYmloamIyNW1hV2N1ZFhKc0tTa2dlMXh1SUNBZ0lDQWdjbVZ4ZFdWemRDQTlJRzVsZHlCM2FXNWtiM2N1V0VSdmJXRnBibEpsY1hWbGMzUW9LVHRjYmlBZ0lDQWdJR3h2WVdSRmRtVnVkQ0E5SUNkdmJteHZZV1FuTzF4dUlDQWdJQ0FnZUVSdmJXRnBiaUE5SUhSeWRXVTdYRzRnSUNBZ0lDQnlaWEYxWlhOMExtOXVjSEp2WjNKbGMzTWdQU0JtZFc1amRHbHZiaUJvWVc1a2JHVlFjbTluY21WemN5Z3BJSHQ5TzF4dUlDQWdJQ0FnY21WeGRXVnpkQzV2Ym5ScGJXVnZkWFFnUFNCbWRXNWpkR2x2YmlCb1lXNWtiR1ZVYVcxbGIzVjBLQ2tnZTMwN1hHNGdJQ0FnZlZ4dVhHNGdJQ0FnTHk4Z1NGUlVVQ0JpWVhOcFl5QmhkWFJvWlc1MGFXTmhkR2x2Ymx4dUlDQWdJR2xtSUNoamIyNW1hV2N1WVhWMGFDa2dlMXh1SUNBZ0lDQWdkbUZ5SUhWelpYSnVZVzFsSUQwZ1kyOXVabWxuTG1GMWRHZ3VkWE5sY201aGJXVWdmSHdnSnljN1hHNGdJQ0FnSUNCMllYSWdjR0Z6YzNkdmNtUWdQU0JqYjI1bWFXY3VZWFYwYUM1d1lYTnpkMjl5WkNCOGZDQW5KenRjYmlBZ0lDQWdJSEpsY1hWbGMzUklaV0ZrWlhKekxrRjFkR2h2Y21sNllYUnBiMjRnUFNBblFtRnphV01nSnlBcklHSjBiMkVvZFhObGNtNWhiV1VnS3lBbk9pY2dLeUJ3WVhOemQyOXlaQ2s3WEc0Z0lDQWdmVnh1WEc0Z0lDQWdjbVZ4ZFdWemRDNXZjR1Z1S0dOdmJtWnBaeTV0WlhSb2IyUXVkRzlWY0hCbGNrTmhjMlVvS1N3Z1luVnBiR1JWVWt3b1kyOXVabWxuTG5WeWJDd2dZMjl1Wm1sbkxuQmhjbUZ0Y3l3Z1kyOXVabWxuTG5CaGNtRnRjMU5sY21saGJHbDZaWElwTENCMGNuVmxLVHRjYmx4dUlDQWdJQzh2SUZObGRDQjBhR1VnY21WeGRXVnpkQ0IwYVcxbGIzVjBJR2x1SUUxVFhHNGdJQ0FnY21WeGRXVnpkQzUwYVcxbGIzVjBJRDBnWTI5dVptbG5MblJwYldWdmRYUTdYRzVjYmlBZ0lDQXZMeUJNYVhOMFpXNGdabTl5SUhKbFlXUjVJSE4wWVhSbFhHNGdJQ0FnY21WeGRXVnpkRnRzYjJGa1JYWmxiblJkSUQwZ1puVnVZM1JwYjI0Z2FHRnVaR3hsVEc5aFpDZ3BJSHRjYmlBZ0lDQWdJR2xtSUNnaGNtVnhkV1Z6ZENCOGZDQW9jbVZ4ZFdWemRDNXlaV0ZrZVZOMFlYUmxJQ0U5UFNBMElDWW1JQ0Y0Ukc5dFlXbHVLU2tnZTF4dUlDQWdJQ0FnSUNCeVpYUjFjbTQ3WEc0Z0lDQWdJQ0I5WEc1Y2JpQWdJQ0FnSUM4dklGUm9aU0J5WlhGMVpYTjBJR1Z5Y205eVpXUWdiM1YwSUdGdVpDQjNaU0JrYVdSdUozUWdaMlYwSUdFZ2NtVnpjRzl1YzJVc0lIUm9hWE1nZDJsc2JDQmlaVnh1SUNBZ0lDQWdMeThnYUdGdVpHeGxaQ0JpZVNCdmJtVnljbTl5SUdsdWMzUmxZV1JjYmlBZ0lDQWdJQzh2SUZkcGRHZ2diMjVsSUdWNFkyVndkR2x2YmpvZ2NtVnhkV1Z6ZENCMGFHRjBJSFZ6YVc1bklHWnBiR1U2SUhCeWIzUnZZMjlzTENCdGIzTjBJR0p5YjNkelpYSnpYRzRnSUNBZ0lDQXZMeUIzYVd4c0lISmxkSFZ5YmlCemRHRjBkWE1nWVhNZ01DQmxkbVZ1SUhSb2IzVm5hQ0JwZENkeklHRWdjM1ZqWTJWemMyWjFiQ0J5WlhGMVpYTjBYRzRnSUNBZ0lDQnBaaUFvY21WeGRXVnpkQzV6ZEdGMGRYTWdQVDA5SURBZ0ppWWdJU2h5WlhGMVpYTjBMbkpsYzNCdmJuTmxWVkpNSUNZbUlISmxjWFZsYzNRdWNtVnpjRzl1YzJWVlVrd3VhVzVrWlhoUFppZ25abWxzWlRvbktTQTlQVDBnTUNrcElIdGNiaUFnSUNBZ0lDQWdjbVYwZFhKdU8xeHVJQ0FnSUNBZ2ZWeHVYRzRnSUNBZ0lDQXZMeUJRY21Wd1lYSmxJSFJvWlNCeVpYTndiMjV6WlZ4dUlDQWdJQ0FnZG1GeUlISmxjM0J2Ym5ObFNHVmhaR1Z5Y3lBOUlDZG5aWFJCYkd4U1pYTndiMjV6WlVobFlXUmxjbk1uSUdsdUlISmxjWFZsYzNRZ1B5QndZWEp6WlVobFlXUmxjbk1vY21WeGRXVnpkQzVuWlhSQmJHeFNaWE53YjI1elpVaGxZV1JsY25Nb0tTa2dPaUJ1ZFd4c08xeHVJQ0FnSUNBZ2RtRnlJSEpsYzNCdmJuTmxSR0YwWVNBOUlDRmpiMjVtYVdjdWNtVnpjRzl1YzJWVWVYQmxJSHg4SUdOdmJtWnBaeTV5WlhOd2IyNXpaVlI1Y0dVZ1BUMDlJQ2QwWlhoMEp5QS9JSEpsY1hWbGMzUXVjbVZ6Y0c5dWMyVlVaWGgwSURvZ2NtVnhkV1Z6ZEM1eVpYTndiMjV6WlR0Y2JpQWdJQ0FnSUhaaGNpQnlaWE53YjI1elpTQTlJSHRjYmlBZ0lDQWdJQ0FnWkdGMFlUb2djbVZ6Y0c5dWMyVkVZWFJoTEZ4dUlDQWdJQ0FnSUNBdkx5QkpSU0J6Wlc1a2N5QXhNakl6SUdsdWMzUmxZV1FnYjJZZ01qQTBJQ2hvZEhSd2N6b3ZMMmRwZEdoMVlpNWpiMjB2WVhocGIzTXZZWGhwYjNNdmFYTnpkV1Z6THpJd01TbGNiaUFnSUNBZ0lDQWdjM1JoZEhWek9pQnlaWEYxWlhOMExuTjBZWFIxY3lBOVBUMGdNVEl5TXlBL0lESXdOQ0E2SUhKbGNYVmxjM1F1YzNSaGRIVnpMRnh1SUNBZ0lDQWdJQ0J6ZEdGMGRYTlVaWGgwT2lCeVpYRjFaWE4wTG5OMFlYUjFjeUE5UFQwZ01USXlNeUEvSUNkT2J5QkRiMjUwWlc1MEp5QTZJSEpsY1hWbGMzUXVjM1JoZEhWelZHVjRkQ3hjYmlBZ0lDQWdJQ0FnYUdWaFpHVnljem9nY21WemNHOXVjMlZJWldGa1pYSnpMRnh1SUNBZ0lDQWdJQ0JqYjI1bWFXYzZJR052Ym1acFp5eGNiaUFnSUNBZ0lDQWdjbVZ4ZFdWemREb2djbVZ4ZFdWemRGeHVJQ0FnSUNBZ2ZUdGNibHh1SUNBZ0lDQWdjMlYwZEd4bEtISmxjMjlzZG1Vc0lISmxhbVZqZEN3Z2NtVnpjRzl1YzJVcE8xeHVYRzRnSUNBZ0lDQXZMeUJEYkdWaGJpQjFjQ0J5WlhGMVpYTjBYRzRnSUNBZ0lDQnlaWEYxWlhOMElEMGdiblZzYkR0Y2JpQWdJQ0I5TzF4dVhHNGdJQ0FnTHk4Z1NHRnVaR3hsSUd4dmR5QnNaWFpsYkNCdVpYUjNiM0pySUdWeWNtOXljMXh1SUNBZ0lISmxjWFZsYzNRdWIyNWxjbkp2Y2lBOUlHWjFibU4wYVc5dUlHaGhibVJzWlVWeWNtOXlLQ2tnZTF4dUlDQWdJQ0FnTHk4Z1VtVmhiQ0JsY25KdmNuTWdZWEpsSUdocFpHUmxiaUJtY205dElIVnpJR0o1SUhSb1pTQmljbTkzYzJWeVhHNGdJQ0FnSUNBdkx5QnZibVZ5Y205eUlITm9iM1ZzWkNCdmJteDVJR1pwY21VZ2FXWWdhWFFuY3lCaElHNWxkSGR2Y21zZ1pYSnliM0pjYmlBZ0lDQWdJSEpsYW1WamRDaGpjbVZoZEdWRmNuSnZjaWduVG1WMGQyOXlheUJGY25KdmNpY3NJR052Ym1acFp5d2diblZzYkN3Z2NtVnhkV1Z6ZENrcE8xeHVYRzRnSUNBZ0lDQXZMeUJEYkdWaGJpQjFjQ0J5WlhGMVpYTjBYRzRnSUNBZ0lDQnlaWEYxWlhOMElEMGdiblZzYkR0Y2JpQWdJQ0I5TzF4dVhHNGdJQ0FnTHk4Z1NHRnVaR3hsSUhScGJXVnZkWFJjYmlBZ0lDQnlaWEYxWlhOMExtOXVkR2x0Wlc5MWRDQTlJR1oxYm1OMGFXOXVJR2hoYm1Sc1pWUnBiV1Z2ZFhRb0tTQjdYRzRnSUNBZ0lDQnlaV3BsWTNRb1kzSmxZWFJsUlhKeWIzSW9KM1JwYldWdmRYUWdiMllnSnlBcklHTnZibVpwWnk1MGFXMWxiM1YwSUNzZ0oyMXpJR1Y0WTJWbFpHVmtKeXdnWTI5dVptbG5MQ0FuUlVOUFRrNUJRazlTVkVWRUp5eGNiaUFnSUNBZ0lDQWdjbVZ4ZFdWemRDa3BPMXh1WEc0Z0lDQWdJQ0F2THlCRGJHVmhiaUIxY0NCeVpYRjFaWE4wWEc0Z0lDQWdJQ0J5WlhGMVpYTjBJRDBnYm5Wc2JEdGNiaUFnSUNCOU8xeHVYRzRnSUNBZ0x5OGdRV1JrSUhoemNtWWdhR1ZoWkdWeVhHNGdJQ0FnTHk4Z1ZHaHBjeUJwY3lCdmJteDVJR1J2Ym1VZ2FXWWdjblZ1Ym1sdVp5QnBiaUJoSUhOMFlXNWtZWEprSUdKeWIzZHpaWElnWlc1MmFYSnZibTFsYm5RdVhHNGdJQ0FnTHk4Z1UzQmxZMmxtYVdOaGJHeDVJRzV2ZENCcFppQjNaU2R5WlNCcGJpQmhJSGRsWWlCM2IzSnJaWElzSUc5eUlISmxZV04wTFc1aGRHbDJaUzVjYmlBZ0lDQnBaaUFvZFhScGJITXVhWE5UZEdGdVpHRnlaRUp5YjNkelpYSkZibllvS1NrZ2UxeHVJQ0FnSUNBZ2RtRnlJR052YjJ0cFpYTWdQU0J5WlhGMWFYSmxLQ2N1THk0dUwyaGxiSEJsY25NdlkyOXZhMmxsY3ljcE8xeHVYRzRnSUNBZ0lDQXZMeUJCWkdRZ2VITnlaaUJvWldGa1pYSmNiaUFnSUNBZ0lIWmhjaUI0YzNKbVZtRnNkV1VnUFNBb1kyOXVabWxuTG5kcGRHaERjbVZrWlc1MGFXRnNjeUI4ZkNCcGMxVlNURk5oYldWUGNtbG5hVzRvWTI5dVptbG5MblZ5YkNrcElDWW1JR052Ym1acFp5NTRjM0ptUTI5dmEybGxUbUZ0WlNBL1hHNGdJQ0FnSUNBZ0lDQWdZMjl2YTJsbGN5NXlaV0ZrS0dOdmJtWnBaeTU0YzNKbVEyOXZhMmxsVG1GdFpTa2dPbHh1SUNBZ0lDQWdJQ0FnSUhWdVpHVm1hVzVsWkR0Y2JseHVJQ0FnSUNBZ2FXWWdLSGh6Y21aV1lXeDFaU2tnZTF4dUlDQWdJQ0FnSUNCeVpYRjFaWE4wU0dWaFpHVnljMXRqYjI1bWFXY3VlSE55WmtobFlXUmxjazVoYldWZElEMGdlSE55WmxaaGJIVmxPMXh1SUNBZ0lDQWdmVnh1SUNBZ0lIMWNibHh1SUNBZ0lDOHZJRUZrWkNCb1pXRmtaWEp6SUhSdklIUm9aU0J5WlhGMVpYTjBYRzRnSUNBZ2FXWWdLQ2R6WlhSU1pYRjFaWE4wU0dWaFpHVnlKeUJwYmlCeVpYRjFaWE4wS1NCN1hHNGdJQ0FnSUNCMWRHbHNjeTVtYjNKRllXTm9LSEpsY1hWbGMzUklaV0ZrWlhKekxDQm1kVzVqZEdsdmJpQnpaWFJTWlhGMVpYTjBTR1ZoWkdWeUtIWmhiQ3dnYTJWNUtTQjdYRzRnSUNBZ0lDQWdJR2xtSUNoMGVYQmxiMllnY21WeGRXVnpkRVJoZEdFZ1BUMDlJQ2QxYm1SbFptbHVaV1FuSUNZbUlHdGxlUzUwYjB4dmQyVnlRMkZ6WlNncElEMDlQU0FuWTI5dWRHVnVkQzEwZVhCbEp5a2dlMXh1SUNBZ0lDQWdJQ0FnSUM4dklGSmxiVzkyWlNCRGIyNTBaVzUwTFZSNWNHVWdhV1lnWkdGMFlTQnBjeUIxYm1SbFptbHVaV1JjYmlBZ0lDQWdJQ0FnSUNCa1pXeGxkR1VnY21WeGRXVnpkRWhsWVdSbGNuTmJhMlY1WFR0Y2JpQWdJQ0FnSUNBZ2ZTQmxiSE5sSUh0Y2JpQWdJQ0FnSUNBZ0lDQXZMeUJQZEdobGNuZHBjMlVnWVdSa0lHaGxZV1JsY2lCMGJ5QjBhR1VnY21WeGRXVnpkRnh1SUNBZ0lDQWdJQ0FnSUhKbGNYVmxjM1F1YzJWMFVtVnhkV1Z6ZEVobFlXUmxjaWhyWlhrc0lIWmhiQ2s3WEc0Z0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUgwcE8xeHVJQ0FnSUgxY2JseHVJQ0FnSUM4dklFRmtaQ0IzYVhSb1EzSmxaR1Z1ZEdsaGJITWdkRzhnY21WeGRXVnpkQ0JwWmlCdVpXVmtaV1JjYmlBZ0lDQnBaaUFvWTI5dVptbG5MbmRwZEdoRGNtVmtaVzUwYVdGc2N5a2dlMXh1SUNBZ0lDQWdjbVZ4ZFdWemRDNTNhWFJvUTNKbFpHVnVkR2xoYkhNZ1BTQjBjblZsTzF4dUlDQWdJSDFjYmx4dUlDQWdJQzh2SUVGa1pDQnlaWE53YjI1elpWUjVjR1VnZEc4Z2NtVnhkV1Z6ZENCcFppQnVaV1ZrWldSY2JpQWdJQ0JwWmlBb1kyOXVabWxuTG5KbGMzQnZibk5sVkhsd1pTa2dlMXh1SUNBZ0lDQWdkSEo1SUh0Y2JpQWdJQ0FnSUNBZ2NtVnhkV1Z6ZEM1eVpYTndiMjV6WlZSNWNHVWdQU0JqYjI1bWFXY3VjbVZ6Y0c5dWMyVlVlWEJsTzF4dUlDQWdJQ0FnZlNCallYUmphQ0FvWlNrZ2UxeHVJQ0FnSUNBZ0lDQXZMeUJGZUhCbFkzUmxaQ0JFVDAxRmVHTmxjSFJwYjI0Z2RHaHliM2R1SUdKNUlHSnliM2R6WlhKeklHNXZkQ0JqYjIxd1lYUnBZbXhsSUZoTlRFaDBkSEJTWlhGMVpYTjBJRXhsZG1Wc0lESXVYRzRnSUNBZ0lDQWdJQzh2SUVKMWRDd2dkR2hwY3lCallXNGdZbVVnYzNWd2NISmxjM05sWkNCbWIzSWdKMnB6YjI0bklIUjVjR1VnWVhNZ2FYUWdZMkZ1SUdKbElIQmhjbk5sWkNCaWVTQmtaV1poZFd4MElDZDBjbUZ1YzJadmNtMVNaWE53YjI1elpTY2dablZ1WTNScGIyNHVYRzRnSUNBZ0lDQWdJR2xtSUNoamIyNW1hV2N1Y21WemNHOXVjMlZVZVhCbElDRTlQU0FuYW5OdmJpY3BJSHRjYmlBZ0lDQWdJQ0FnSUNCMGFISnZkeUJsTzF4dUlDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNCOVhHNGdJQ0FnZlZ4dVhHNGdJQ0FnTHk4Z1NHRnVaR3hsSUhCeWIyZHlaWE56SUdsbUlHNWxaV1JsWkZ4dUlDQWdJR2xtSUNoMGVYQmxiMllnWTI5dVptbG5MbTl1Ukc5M2JteHZZV1JRY205bmNtVnpjeUE5UFQwZ0oyWjFibU4wYVc5dUp5a2dlMXh1SUNBZ0lDQWdjbVZ4ZFdWemRDNWhaR1JGZG1WdWRFeHBjM1JsYm1WeUtDZHdjbTluY21WemN5Y3NJR052Ym1acFp5NXZia1J2ZDI1c2IyRmtVSEp2WjNKbGMzTXBPMXh1SUNBZ0lIMWNibHh1SUNBZ0lDOHZJRTV2ZENCaGJHd2dZbkp2ZDNObGNuTWdjM1Z3Y0c5eWRDQjFjR3h2WVdRZ1pYWmxiblJ6WEc0Z0lDQWdhV1lnS0hSNWNHVnZaaUJqYjI1bWFXY3ViMjVWY0d4dllXUlFjbTluY21WemN5QTlQVDBnSjJaMWJtTjBhVzl1SnlBbUppQnlaWEYxWlhOMExuVndiRzloWkNrZ2UxeHVJQ0FnSUNBZ2NtVnhkV1Z6ZEM1MWNHeHZZV1F1WVdSa1JYWmxiblJNYVhOMFpXNWxjaWduY0hKdlozSmxjM01uTENCamIyNW1hV2N1YjI1VmNHeHZZV1JRY205bmNtVnpjeWs3WEc0Z0lDQWdmVnh1WEc0Z0lDQWdhV1lnS0dOdmJtWnBaeTVqWVc1alpXeFViMnRsYmlrZ2UxeHVJQ0FnSUNBZ0x5OGdTR0Z1Wkd4bElHTmhibU5sYkd4aGRHbHZibHh1SUNBZ0lDQWdZMjl1Wm1sbkxtTmhibU5sYkZSdmEyVnVMbkJ5YjIxcGMyVXVkR2hsYmlobWRXNWpkR2x2YmlCdmJrTmhibU5sYkdWa0tHTmhibU5sYkNrZ2UxeHVJQ0FnSUNBZ0lDQnBaaUFvSVhKbGNYVmxjM1FwSUh0Y2JpQWdJQ0FnSUNBZ0lDQnlaWFIxY200N1hHNGdJQ0FnSUNBZ0lIMWNibHh1SUNBZ0lDQWdJQ0J5WlhGMVpYTjBMbUZpYjNKMEtDazdYRzRnSUNBZ0lDQWdJSEpsYW1WamRDaGpZVzVqWld3cE8xeHVJQ0FnSUNBZ0lDQXZMeUJEYkdWaGJpQjFjQ0J5WlhGMVpYTjBYRzRnSUNBZ0lDQWdJSEpsY1hWbGMzUWdQU0J1ZFd4c08xeHVJQ0FnSUNBZ2ZTazdYRzRnSUNBZ2ZWeHVYRzRnSUNBZ2FXWWdLSEpsY1hWbGMzUkVZWFJoSUQwOVBTQjFibVJsWm1sdVpXUXBJSHRjYmlBZ0lDQWdJSEpsY1hWbGMzUkVZWFJoSUQwZ2JuVnNiRHRjYmlBZ0lDQjlYRzVjYmlBZ0lDQXZMeUJUWlc1a0lIUm9aU0J5WlhGMVpYTjBYRzRnSUNBZ2NtVnhkV1Z6ZEM1elpXNWtLSEpsY1hWbGMzUkVZWFJoS1R0Y2JpQWdmU2s3WEc1OU8xeHVJaXdpSjNWelpTQnpkSEpwWTNRbk8xeHVYRzUyWVhJZ2RYUnBiSE1nUFNCeVpYRjFhWEpsS0NjdUwzVjBhV3h6SnlrN1hHNTJZWElnWW1sdVpDQTlJSEpsY1hWcGNtVW9KeTR2YUdWc2NHVnljeTlpYVc1a0p5azdYRzUyWVhJZ1FYaHBiM01nUFNCeVpYRjFhWEpsS0NjdUwyTnZjbVV2UVhocGIzTW5LVHRjYm5aaGNpQmtaV1poZFd4MGN5QTlJSEpsY1hWcGNtVW9KeTR2WkdWbVlYVnNkSE1uS1R0Y2JseHVMeW9xWEc0Z0tpQkRjbVZoZEdVZ1lXNGdhVzV6ZEdGdVkyVWdiMllnUVhocGIzTmNiaUFxWEc0Z0tpQkFjR0Z5WVcwZ2UwOWlhbVZqZEgwZ1pHVm1ZWFZzZEVOdmJtWnBaeUJVYUdVZ1pHVm1ZWFZzZENCamIyNW1hV2NnWm05eUlIUm9aU0JwYm5OMFlXNWpaVnh1SUNvZ1FISmxkSFZ5YmlCN1FYaHBiM045SUVFZ2JtVjNJR2x1YzNSaGJtTmxJRzltSUVGNGFXOXpYRzRnS2k5Y2JtWjFibU4wYVc5dUlHTnlaV0YwWlVsdWMzUmhibU5sS0dSbFptRjFiSFJEYjI1bWFXY3BJSHRjYmlBZ2RtRnlJR052Ym5SbGVIUWdQU0J1WlhjZ1FYaHBiM01vWkdWbVlYVnNkRU52Ym1acFp5azdYRzRnSUhaaGNpQnBibk4wWVc1alpTQTlJR0pwYm1Rb1FYaHBiM011Y0hKdmRHOTBlWEJsTG5KbGNYVmxjM1FzSUdOdmJuUmxlSFFwTzF4dVhHNGdJQzh2SUVOdmNIa2dZWGhwYjNNdWNISnZkRzkwZVhCbElIUnZJR2x1YzNSaGJtTmxYRzRnSUhWMGFXeHpMbVY0ZEdWdVpDaHBibk4wWVc1alpTd2dRWGhwYjNNdWNISnZkRzkwZVhCbExDQmpiMjUwWlhoMEtUdGNibHh1SUNBdkx5QkRiM0I1SUdOdmJuUmxlSFFnZEc4Z2FXNXpkR0Z1WTJWY2JpQWdkWFJwYkhNdVpYaDBaVzVrS0dsdWMzUmhibU5sTENCamIyNTBaWGgwS1R0Y2JseHVJQ0J5WlhSMWNtNGdhVzV6ZEdGdVkyVTdYRzU5WEc1Y2JpOHZJRU55WldGMFpTQjBhR1VnWkdWbVlYVnNkQ0JwYm5OMFlXNWpaU0IwYnlCaVpTQmxlSEJ2Y25SbFpGeHVkbUZ5SUdGNGFXOXpJRDBnWTNKbFlYUmxTVzV6ZEdGdVkyVW9aR1ZtWVhWc2RITXBPMXh1WEc0dkx5QkZlSEJ2YzJVZ1FYaHBiM01nWTJ4aGMzTWdkRzhnWVd4c2IzY2dZMnhoYzNNZ2FXNW9aWEpwZEdGdVkyVmNibUY0YVc5ekxrRjRhVzl6SUQwZ1FYaHBiM003WEc1Y2JpOHZJRVpoWTNSdmNua2dabTl5SUdOeVpXRjBhVzVuSUc1bGR5QnBibk4wWVc1alpYTmNibUY0YVc5ekxtTnlaV0YwWlNBOUlHWjFibU4wYVc5dUlHTnlaV0YwWlNocGJuTjBZVzVqWlVOdmJtWnBaeWtnZTF4dUlDQnlaWFIxY200Z1kzSmxZWFJsU1c1emRHRnVZMlVvZFhScGJITXViV1Z5WjJVb1pHVm1ZWFZzZEhNc0lHbHVjM1JoYm1ObFEyOXVabWxuS1NrN1hHNTlPMXh1WEc0dkx5QkZlSEJ2YzJVZ1EyRnVZMlZzSUNZZ1EyRnVZMlZzVkc5clpXNWNibUY0YVc5ekxrTmhibU5sYkNBOUlISmxjWFZwY21Vb0p5NHZZMkZ1WTJWc0wwTmhibU5sYkNjcE8xeHVZWGhwYjNNdVEyRnVZMlZzVkc5clpXNGdQU0J5WlhGMWFYSmxLQ2N1TDJOaGJtTmxiQzlEWVc1alpXeFViMnRsYmljcE8xeHVZWGhwYjNNdWFYTkRZVzVqWld3Z1BTQnlaWEYxYVhKbEtDY3VMMk5oYm1ObGJDOXBjME5oYm1ObGJDY3BPMXh1WEc0dkx5QkZlSEJ2YzJVZ1lXeHNMM053Y21WaFpGeHVZWGhwYjNNdVlXeHNJRDBnWm5WdVkzUnBiMjRnWVd4c0tIQnliMjFwYzJWektTQjdYRzRnSUhKbGRIVnliaUJRY205dGFYTmxMbUZzYkNod2NtOXRhWE5sY3lrN1hHNTlPMXh1WVhocGIzTXVjM0J5WldGa0lEMGdjbVZ4ZFdseVpTZ25MaTlvWld4d1pYSnpMM053Y21WaFpDY3BPMXh1WEc1dGIyUjFiR1V1Wlhod2IzSjBjeUE5SUdGNGFXOXpPMXh1WEc0dkx5QkJiR3h2ZHlCMWMyVWdiMllnWkdWbVlYVnNkQ0JwYlhCdmNuUWdjM2x1ZEdGNElHbHVJRlI1Y0dWVFkzSnBjSFJjYm0xdlpIVnNaUzVsZUhCdmNuUnpMbVJsWm1GMWJIUWdQU0JoZUdsdmN6dGNiaUlzSWlkMWMyVWdjM1J5YVdOMEp6dGNibHh1THlvcVhHNGdLaUJCSUdCRFlXNWpaV3hnSUdseklHRnVJRzlpYW1WamRDQjBhR0YwSUdseklIUm9jbTkzYmlCM2FHVnVJR0Z1SUc5d1pYSmhkR2x2YmlCcGN5QmpZVzVqWld4bFpDNWNiaUFxWEc0Z0tpQkFZMnhoYzNOY2JpQXFJRUJ3WVhKaGJTQjdjM1J5YVc1blBYMGdiV1Z6YzJGblpTQlVhR1VnYldWemMyRm5aUzVjYmlBcUwxeHVablZ1WTNScGIyNGdRMkZ1WTJWc0tHMWxjM05oWjJVcElIdGNiaUFnZEdocGN5NXRaWE56WVdkbElEMGdiV1Z6YzJGblpUdGNibjFjYmx4dVEyRnVZMlZzTG5CeWIzUnZkSGx3WlM1MGIxTjBjbWx1WnlBOUlHWjFibU4wYVc5dUlIUnZVM1J5YVc1bktDa2dlMXh1SUNCeVpYUjFjbTRnSjBOaGJtTmxiQ2NnS3lBb2RHaHBjeTV0WlhOellXZGxJRDhnSnpvZ0p5QXJJSFJvYVhNdWJXVnpjMkZuWlNBNklDY25LVHRjYm4wN1hHNWNia05oYm1ObGJDNXdjbTkwYjNSNWNHVXVYMTlEUVU1RFJVeGZYeUE5SUhSeWRXVTdYRzVjYm0xdlpIVnNaUzVsZUhCdmNuUnpJRDBnUTJGdVkyVnNPMXh1SWl3aUozVnpaU0J6ZEhKcFkzUW5PMXh1WEc1MllYSWdRMkZ1WTJWc0lEMGdjbVZ4ZFdseVpTZ25MaTlEWVc1alpXd25LVHRjYmx4dUx5b3FYRzRnS2lCQklHQkRZVzVqWld4VWIydGxibUFnYVhNZ1lXNGdiMkpxWldOMElIUm9ZWFFnWTJGdUlHSmxJSFZ6WldRZ2RHOGdjbVZ4ZFdWemRDQmpZVzVqWld4c1lYUnBiMjRnYjJZZ1lXNGdiM0JsY21GMGFXOXVMbHh1SUNwY2JpQXFJRUJqYkdGemMxeHVJQ29nUUhCaGNtRnRJSHRHZFc1amRHbHZibjBnWlhobFkzVjBiM0lnVkdobElHVjRaV04xZEc5eUlHWjFibU4wYVc5dUxseHVJQ292WEc1bWRXNWpkR2x2YmlCRFlXNWpaV3hVYjJ0bGJpaGxlR1ZqZFhSdmNpa2dlMXh1SUNCcFppQW9kSGx3Wlc5bUlHVjRaV04xZEc5eUlDRTlQU0FuWm5WdVkzUnBiMjRuS1NCN1hHNGdJQ0FnZEdoeWIzY2dibVYzSUZSNWNHVkZjbkp2Y2lnblpYaGxZM1YwYjNJZ2JYVnpkQ0JpWlNCaElHWjFibU4wYVc5dUxpY3BPMXh1SUNCOVhHNWNiaUFnZG1GeUlISmxjMjlzZG1WUWNtOXRhWE5sTzF4dUlDQjBhR2x6TG5CeWIyMXBjMlVnUFNCdVpYY2dVSEp2YldselpTaG1kVzVqZEdsdmJpQndjbTl0YVhObFJYaGxZM1YwYjNJb2NtVnpiMngyWlNrZ2UxeHVJQ0FnSUhKbGMyOXNkbVZRY205dGFYTmxJRDBnY21WemIyeDJaVHRjYmlBZ2ZTazdYRzVjYmlBZ2RtRnlJSFJ2YTJWdUlEMGdkR2hwY3p0Y2JpQWdaWGhsWTNWMGIzSW9ablZ1WTNScGIyNGdZMkZ1WTJWc0tHMWxjM05oWjJVcElIdGNiaUFnSUNCcFppQW9kRzlyWlc0dWNtVmhjMjl1S1NCN1hHNGdJQ0FnSUNBdkx5QkRZVzVqWld4c1lYUnBiMjRnYUdGeklHRnNjbVZoWkhrZ1ltVmxiaUJ5WlhGMVpYTjBaV1JjYmlBZ0lDQWdJSEpsZEhWeWJqdGNiaUFnSUNCOVhHNWNiaUFnSUNCMGIydGxiaTV5WldGemIyNGdQU0J1WlhjZ1EyRnVZMlZzS0cxbGMzTmhaMlVwTzF4dUlDQWdJSEpsYzI5c2RtVlFjbTl0YVhObEtIUnZhMlZ1TG5KbFlYTnZiaWs3WEc0Z0lIMHBPMXh1ZlZ4dVhHNHZLaXBjYmlBcUlGUm9jbTkzY3lCaElHQkRZVzVqWld4Z0lHbG1JR05oYm1ObGJHeGhkR2x2YmlCb1lYTWdZbVZsYmlCeVpYRjFaWE4wWldRdVhHNGdLaTljYmtOaGJtTmxiRlJ2YTJWdUxuQnliM1J2ZEhsd1pTNTBhSEp2ZDBsbVVtVnhkV1Z6ZEdWa0lEMGdablZ1WTNScGIyNGdkR2h5YjNkSlpsSmxjWFZsYzNSbFpDZ3BJSHRjYmlBZ2FXWWdLSFJvYVhNdWNtVmhjMjl1S1NCN1hHNGdJQ0FnZEdoeWIzY2dkR2hwY3k1eVpXRnpiMjQ3WEc0Z0lIMWNibjA3WEc1Y2JpOHFLbHh1SUNvZ1VtVjBkWEp1Y3lCaGJpQnZZbXBsWTNRZ2RHaGhkQ0JqYjI1MFlXbHVjeUJoSUc1bGR5QmdRMkZ1WTJWc1ZHOXJaVzVnSUdGdVpDQmhJR1oxYm1OMGFXOXVJSFJvWVhRc0lIZG9aVzRnWTJGc2JHVmtMRnh1SUNvZ1kyRnVZMlZzY3lCMGFHVWdZRU5oYm1ObGJGUnZhMlZ1WUM1Y2JpQXFMMXh1UTJGdVkyVnNWRzlyWlc0dWMyOTFjbU5sSUQwZ1puVnVZM1JwYjI0Z2MyOTFjbU5sS0NrZ2UxeHVJQ0IyWVhJZ1kyRnVZMlZzTzF4dUlDQjJZWElnZEc5clpXNGdQU0J1WlhjZ1EyRnVZMlZzVkc5clpXNG9ablZ1WTNScGIyNGdaWGhsWTNWMGIzSW9ZeWtnZTF4dUlDQWdJR05oYm1ObGJDQTlJR003WEc0Z0lIMHBPMXh1SUNCeVpYUjFjbTRnZTF4dUlDQWdJSFJ2YTJWdU9pQjBiMnRsYml4Y2JpQWdJQ0JqWVc1alpXdzZJR05oYm1ObGJGeHVJQ0I5TzF4dWZUdGNibHh1Ylc5a2RXeGxMbVY0Y0c5eWRITWdQU0JEWVc1alpXeFViMnRsYmp0Y2JpSXNJaWQxYzJVZ2MzUnlhV04wSnp0Y2JseHViVzlrZFd4bExtVjRjRzl5ZEhNZ1BTQm1kVzVqZEdsdmJpQnBjME5oYm1ObGJDaDJZV3gxWlNrZ2UxeHVJQ0J5WlhSMWNtNGdJU0VvZG1Gc2RXVWdKaVlnZG1Gc2RXVXVYMTlEUVU1RFJVeGZYeWs3WEc1OU8xeHVJaXdpSjNWelpTQnpkSEpwWTNRbk8xeHVYRzUyWVhJZ1pHVm1ZWFZzZEhNZ1BTQnlaWEYxYVhKbEtDY3VMeTR1TDJSbFptRjFiSFJ6SnlrN1hHNTJZWElnZFhScGJITWdQU0J5WlhGMWFYSmxLQ2N1THk0dUwzVjBhV3h6SnlrN1hHNTJZWElnU1c1MFpYSmpaWEIwYjNKTllXNWhaMlZ5SUQwZ2NtVnhkV2x5WlNnbkxpOUpiblJsY21ObGNIUnZjazFoYm1GblpYSW5LVHRjYm5aaGNpQmthWE53WVhSamFGSmxjWFZsYzNRZ1BTQnlaWEYxYVhKbEtDY3VMMlJwYzNCaGRHTm9VbVZ4ZFdWemRDY3BPMXh1WEc0dktpcGNiaUFxSUVOeVpXRjBaU0JoSUc1bGR5QnBibk4wWVc1alpTQnZaaUJCZUdsdmMxeHVJQ3BjYmlBcUlFQndZWEpoYlNCN1QySnFaV04wZlNCcGJuTjBZVzVqWlVOdmJtWnBaeUJVYUdVZ1pHVm1ZWFZzZENCamIyNW1hV2NnWm05eUlIUm9aU0JwYm5OMFlXNWpaVnh1SUNvdlhHNW1kVzVqZEdsdmJpQkJlR2x2Y3locGJuTjBZVzVqWlVOdmJtWnBaeWtnZTF4dUlDQjBhR2x6TG1SbFptRjFiSFJ6SUQwZ2FXNXpkR0Z1WTJWRGIyNW1hV2M3WEc0Z0lIUm9hWE11YVc1MFpYSmpaWEIwYjNKeklEMGdlMXh1SUNBZ0lISmxjWFZsYzNRNklHNWxkeUJKYm5SbGNtTmxjSFJ2Y2sxaGJtRm5aWElvS1N4Y2JpQWdJQ0J5WlhOd2IyNXpaVG9nYm1WM0lFbHVkR1Z5WTJWd2RHOXlUV0Z1WVdkbGNpZ3BYRzRnSUgwN1hHNTlYRzVjYmk4cUtseHVJQ29nUkdsemNHRjBZMmdnWVNCeVpYRjFaWE4wWEc0Z0tseHVJQ29nUUhCaGNtRnRJSHRQWW1wbFkzUjlJR052Ym1acFp5QlVhR1VnWTI5dVptbG5JSE53WldOcFptbGpJR1p2Y2lCMGFHbHpJSEpsY1hWbGMzUWdLRzFsY21kbFpDQjNhWFJvSUhSb2FYTXVaR1ZtWVhWc2RITXBYRzRnS2k5Y2JrRjRhVzl6TG5CeWIzUnZkSGx3WlM1eVpYRjFaWE4wSUQwZ1puVnVZM1JwYjI0Z2NtVnhkV1Z6ZENoamIyNW1hV2NwSUh0Y2JpQWdMeXBsYzJ4cGJuUWdibTh0Y0dGeVlXMHRjbVZoYzNOcFoyNDZNQ292WEc0Z0lDOHZJRUZzYkc5M0lHWnZjaUJoZUdsdmN5Z25aWGhoYlhCc1pTOTFjbXduV3l3Z1kyOXVabWxuWFNrZ1lTQnNZU0JtWlhSamFDQkJVRWxjYmlBZ2FXWWdLSFI1Y0dWdlppQmpiMjVtYVdjZ1BUMDlJQ2R6ZEhKcGJtY25LU0I3WEc0Z0lDQWdZMjl1Wm1sbklEMGdkWFJwYkhNdWJXVnlaMlVvZTF4dUlDQWdJQ0FnZFhKc09pQmhjbWQxYldWdWRITmJNRjFjYmlBZ0lDQjlMQ0JoY21kMWJXVnVkSE5iTVYwcE8xeHVJQ0I5WEc1Y2JpQWdZMjl1Wm1sbklEMGdkWFJwYkhNdWJXVnlaMlVvWkdWbVlYVnNkSE1zSUh0dFpYUm9iMlE2SUNkblpYUW5mU3dnZEdocGN5NWtaV1poZFd4MGN5d2dZMjl1Wm1sbktUdGNiaUFnWTI5dVptbG5MbTFsZEdodlpDQTlJR052Ym1acFp5NXRaWFJvYjJRdWRHOU1iM2RsY2tOaGMyVW9LVHRjYmx4dUlDQXZMeUJJYjI5cklIVndJR2x1ZEdWeVkyVndkRzl5Y3lCdGFXUmtiR1YzWVhKbFhHNGdJSFpoY2lCamFHRnBiaUE5SUZ0a2FYTndZWFJqYUZKbGNYVmxjM1FzSUhWdVpHVm1hVzVsWkYwN1hHNGdJSFpoY2lCd2NtOXRhWE5sSUQwZ1VISnZiV2x6WlM1eVpYTnZiSFpsS0dOdmJtWnBaeWs3WEc1Y2JpQWdkR2hwY3k1cGJuUmxjbU5sY0hSdmNuTXVjbVZ4ZFdWemRDNW1iM0pGWVdOb0tHWjFibU4wYVc5dUlIVnVjMmhwWm5SU1pYRjFaWE4wU1c1MFpYSmpaWEIwYjNKektHbHVkR1Z5WTJWd2RHOXlLU0I3WEc0Z0lDQWdZMmhoYVc0dWRXNXphR2xtZENocGJuUmxjbU5sY0hSdmNpNW1kV3htYVd4c1pXUXNJR2x1ZEdWeVkyVndkRzl5TG5KbGFtVmpkR1ZrS1R0Y2JpQWdmU2s3WEc1Y2JpQWdkR2hwY3k1cGJuUmxjbU5sY0hSdmNuTXVjbVZ6Y0c5dWMyVXVabTl5UldGamFDaG1kVzVqZEdsdmJpQndkWE5vVW1WemNHOXVjMlZKYm5SbGNtTmxjSFJ2Y25Nb2FXNTBaWEpqWlhCMGIzSXBJSHRjYmlBZ0lDQmphR0ZwYmk1d2RYTm9LR2x1ZEdWeVkyVndkRzl5TG1aMWJHWnBiR3hsWkN3Z2FXNTBaWEpqWlhCMGIzSXVjbVZxWldOMFpXUXBPMXh1SUNCOUtUdGNibHh1SUNCM2FHbHNaU0FvWTJoaGFXNHViR1Z1WjNSb0tTQjdYRzRnSUNBZ2NISnZiV2x6WlNBOUlIQnliMjFwYzJVdWRHaGxiaWhqYUdGcGJpNXphR2xtZENncExDQmphR0ZwYmk1emFHbG1kQ2dwS1R0Y2JpQWdmVnh1WEc0Z0lISmxkSFZ5YmlCd2NtOXRhWE5sTzF4dWZUdGNibHh1THk4Z1VISnZkbWxrWlNCaGJHbGhjMlZ6SUdadmNpQnpkWEJ3YjNKMFpXUWdjbVZ4ZFdWemRDQnRaWFJvYjJSelhHNTFkR2xzY3k1bWIzSkZZV05vS0ZzblpHVnNaWFJsSnl3Z0oyZGxkQ2NzSUNkb1pXRmtKeXdnSjI5d2RHbHZibk1uWFN3Z1puVnVZM1JwYjI0Z1ptOXlSV0ZqYUUxbGRHaHZaRTV2UkdGMFlTaHRaWFJvYjJRcElIdGNiaUFnTHlwbGMyeHBiblFnWm5WdVl5MXVZVzFsY3pvd0tpOWNiaUFnUVhocGIzTXVjSEp2ZEc5MGVYQmxXMjFsZEdodlpGMGdQU0JtZFc1amRHbHZiaWgxY213c0lHTnZibVpwWnlrZ2UxeHVJQ0FnSUhKbGRIVnliaUIwYUdsekxuSmxjWFZsYzNRb2RYUnBiSE11YldWeVoyVW9ZMjl1Wm1sbklIeDhJSHQ5TENCN1hHNGdJQ0FnSUNCdFpYUm9iMlE2SUcxbGRHaHZaQ3hjYmlBZ0lDQWdJSFZ5YkRvZ2RYSnNYRzRnSUNBZ2ZTa3BPMXh1SUNCOU8xeHVmU2s3WEc1Y2JuVjBhV3h6TG1admNrVmhZMmdvV3lkd2IzTjBKeXdnSjNCMWRDY3NJQ2R3WVhSamFDZGRMQ0JtZFc1amRHbHZiaUJtYjNKRllXTm9UV1YwYUc5a1YybDBhRVJoZEdFb2JXVjBhRzlrS1NCN1hHNGdJQzhxWlhOc2FXNTBJR1oxYm1NdGJtRnRaWE02TUNvdlhHNGdJRUY0YVc5ekxuQnliM1J2ZEhsd1pWdHRaWFJvYjJSZElEMGdablZ1WTNScGIyNG9kWEpzTENCa1lYUmhMQ0JqYjI1bWFXY3BJSHRjYmlBZ0lDQnlaWFIxY200Z2RHaHBjeTV5WlhGMVpYTjBLSFYwYVd4ekxtMWxjbWRsS0dOdmJtWnBaeUI4ZkNCN2ZTd2dlMXh1SUNBZ0lDQWdiV1YwYUc5a09pQnRaWFJvYjJRc1hHNGdJQ0FnSUNCMWNtdzZJSFZ5YkN4Y2JpQWdJQ0FnSUdSaGRHRTZJR1JoZEdGY2JpQWdJQ0I5S1NrN1hHNGdJSDA3WEc1OUtUdGNibHh1Ylc5a2RXeGxMbVY0Y0c5eWRITWdQU0JCZUdsdmN6dGNiaUlzSWlkMWMyVWdjM1J5YVdOMEp6dGNibHh1ZG1GeUlIVjBhV3h6SUQwZ2NtVnhkV2x5WlNnbkxpOHVMaTkxZEdsc2N5Y3BPMXh1WEc1bWRXNWpkR2x2YmlCSmJuUmxjbU5sY0hSdmNrMWhibUZuWlhJb0tTQjdYRzRnSUhSb2FYTXVhR0Z1Wkd4bGNuTWdQU0JiWFR0Y2JuMWNibHh1THlvcVhHNGdLaUJCWkdRZ1lTQnVaWGNnYVc1MFpYSmpaWEIwYjNJZ2RHOGdkR2hsSUhOMFlXTnJYRzRnS2x4dUlDb2dRSEJoY21GdElIdEdkVzVqZEdsdmJuMGdablZzWm1sc2JHVmtJRlJvWlNCbWRXNWpkR2x2YmlCMGJ5Qm9ZVzVrYkdVZ1lIUm9aVzVnSUdadmNpQmhJR0JRY205dGFYTmxZRnh1SUNvZ1FIQmhjbUZ0SUh0R2RXNWpkR2x2Ym4wZ2NtVnFaV04wWldRZ1ZHaGxJR1oxYm1OMGFXOXVJSFJ2SUdoaGJtUnNaU0JnY21WcVpXTjBZQ0JtYjNJZ1lTQmdVSEp2YldselpXQmNiaUFxWEc0Z0tpQkFjbVYwZFhKdUlIdE9kVzFpWlhKOUlFRnVJRWxFSUhWelpXUWdkRzhnY21WdGIzWmxJR2x1ZEdWeVkyVndkRzl5SUd4aGRHVnlYRzRnS2k5Y2JrbHVkR1Z5WTJWd2RHOXlUV0Z1WVdkbGNpNXdjbTkwYjNSNWNHVXVkWE5sSUQwZ1puVnVZM1JwYjI0Z2RYTmxLR1oxYkdacGJHeGxaQ3dnY21WcVpXTjBaV1FwSUh0Y2JpQWdkR2hwY3k1b1lXNWtiR1Z5Y3k1d2RYTm9LSHRjYmlBZ0lDQm1kV3htYVd4c1pXUTZJR1oxYkdacGJHeGxaQ3hjYmlBZ0lDQnlaV3BsWTNSbFpEb2djbVZxWldOMFpXUmNiaUFnZlNrN1hHNGdJSEpsZEhWeWJpQjBhR2x6TG1oaGJtUnNaWEp6TG14bGJtZDBhQ0F0SURFN1hHNTlPMXh1WEc0dktpcGNiaUFxSUZKbGJXOTJaU0JoYmlCcGJuUmxjbU5sY0hSdmNpQm1jbTl0SUhSb1pTQnpkR0ZqYTF4dUlDcGNiaUFxSUVCd1lYSmhiU0I3VG5WdFltVnlmU0JwWkNCVWFHVWdTVVFnZEdoaGRDQjNZWE1nY21WMGRYSnVaV1FnWW5rZ1lIVnpaV0JjYmlBcUwxeHVTVzUwWlhKalpYQjBiM0pOWVc1aFoyVnlMbkJ5YjNSdmRIbHdaUzVsYW1WamRDQTlJR1oxYm1OMGFXOXVJR1ZxWldOMEtHbGtLU0I3WEc0Z0lHbG1JQ2gwYUdsekxtaGhibVJzWlhKelcybGtYU2tnZTF4dUlDQWdJSFJvYVhNdWFHRnVaR3hsY25OYmFXUmRJRDBnYm5Wc2JEdGNiaUFnZlZ4dWZUdGNibHh1THlvcVhHNGdLaUJKZEdWeVlYUmxJRzkyWlhJZ1lXeHNJSFJvWlNCeVpXZHBjM1JsY21Wa0lHbHVkR1Z5WTJWd2RHOXljMXh1SUNwY2JpQXFJRlJvYVhNZ2JXVjBhRzlrSUdseklIQmhjblJwWTNWc1lYSnNlU0IxYzJWbWRXd2dabTl5SUhOcmFYQndhVzVuSUc5MlpYSWdZVzU1WEc0Z0tpQnBiblJsY21ObGNIUnZjbk1nZEdoaGRDQnRZWGtnYUdGMlpTQmlaV052YldVZ1lHNTFiR3hnSUdOaGJHeHBibWNnWUdWcVpXTjBZQzVjYmlBcVhHNGdLaUJBY0dGeVlXMGdlMFoxYm1OMGFXOXVmU0JtYmlCVWFHVWdablZ1WTNScGIyNGdkRzhnWTJGc2JDQm1iM0lnWldGamFDQnBiblJsY21ObGNIUnZjbHh1SUNvdlhHNUpiblJsY21ObGNIUnZjazFoYm1GblpYSXVjSEp2ZEc5MGVYQmxMbVp2Y2tWaFkyZ2dQU0JtZFc1amRHbHZiaUJtYjNKRllXTm9LR1p1S1NCN1hHNGdJSFYwYVd4ekxtWnZja1ZoWTJnb2RHaHBjeTVvWVc1a2JHVnljeXdnWm5WdVkzUnBiMjRnWm05eVJXRmphRWhoYm1Sc1pYSW9hQ2tnZTF4dUlDQWdJR2xtSUNob0lDRTlQU0J1ZFd4c0tTQjdYRzRnSUNBZ0lDQm1iaWhvS1R0Y2JpQWdJQ0I5WEc0Z0lIMHBPMXh1ZlR0Y2JseHViVzlrZFd4bExtVjRjRzl5ZEhNZ1BTQkpiblJsY21ObGNIUnZjazFoYm1GblpYSTdYRzRpTENJbmRYTmxJSE4wY21samRDYzdYRzVjYm5aaGNpQmxibWhoYm1ObFJYSnliM0lnUFNCeVpYRjFhWEpsS0NjdUwyVnVhR0Z1WTJWRmNuSnZjaWNwTzF4dVhHNHZLaXBjYmlBcUlFTnlaV0YwWlNCaGJpQkZjbkp2Y2lCM2FYUm9JSFJvWlNCemNHVmphV1pwWldRZ2JXVnpjMkZuWlN3Z1kyOXVabWxuTENCbGNuSnZjaUJqYjJSbExDQnlaWEYxWlhOMElHRnVaQ0J5WlhOd2IyNXpaUzVjYmlBcVhHNGdLaUJBY0dGeVlXMGdlM04wY21sdVozMGdiV1Z6YzJGblpTQlVhR1VnWlhKeWIzSWdiV1Z6YzJGblpTNWNiaUFxSUVCd1lYSmhiU0I3VDJKcVpXTjBmU0JqYjI1bWFXY2dWR2hsSUdOdmJtWnBaeTVjYmlBcUlFQndZWEpoYlNCN2MzUnlhVzVuZlNCYlkyOWtaVjBnVkdobElHVnljbTl5SUdOdlpHVWdLR1p2Y2lCbGVHRnRjR3hsTENBblJVTlBUazVCUWs5U1ZFVkVKeWt1WEc0Z0tpQkFjR0Z5WVcwZ2UwOWlhbVZqZEgwZ1czSmxjWFZsYzNSZElGUm9aU0J5WlhGMVpYTjBMbHh1SUNvZ1FIQmhjbUZ0SUh0UFltcGxZM1I5SUZ0eVpYTndiMjV6WlYwZ1ZHaGxJSEpsYzNCdmJuTmxMbHh1SUNvZ1FISmxkSFZ5Ym5NZ2UwVnljbTl5ZlNCVWFHVWdZM0psWVhSbFpDQmxjbkp2Y2k1Y2JpQXFMMXh1Ylc5a2RXeGxMbVY0Y0c5eWRITWdQU0JtZFc1amRHbHZiaUJqY21WaGRHVkZjbkp2Y2lodFpYTnpZV2RsTENCamIyNW1hV2NzSUdOdlpHVXNJSEpsY1hWbGMzUXNJSEpsYzNCdmJuTmxLU0I3WEc0Z0lIWmhjaUJsY25KdmNpQTlJRzVsZHlCRmNuSnZjaWh0WlhOellXZGxLVHRjYmlBZ2NtVjBkWEp1SUdWdWFHRnVZMlZGY25KdmNpaGxjbkp2Y2l3Z1kyOXVabWxuTENCamIyUmxMQ0J5WlhGMVpYTjBMQ0J5WlhOd2IyNXpaU2s3WEc1OU8xeHVJaXdpSjNWelpTQnpkSEpwWTNRbk8xeHVYRzUyWVhJZ2RYUnBiSE1nUFNCeVpYRjFhWEpsS0NjdUx5NHVMM1YwYVd4ekp5azdYRzUyWVhJZ2RISmhibk5tYjNKdFJHRjBZU0E5SUhKbGNYVnBjbVVvSnk0dmRISmhibk5tYjNKdFJHRjBZU2NwTzF4dWRtRnlJR2x6UTJGdVkyVnNJRDBnY21WeGRXbHlaU2duTGk0dlkyRnVZMlZzTDJselEyRnVZMlZzSnlrN1hHNTJZWElnWkdWbVlYVnNkSE1nUFNCeVpYRjFhWEpsS0NjdUxpOWtaV1poZFd4MGN5Y3BPMXh1ZG1GeUlHbHpRV0p6YjJ4MWRHVlZVa3dnUFNCeVpYRjFhWEpsS0NjdUx5NHVMMmhsYkhCbGNuTXZhWE5CWW5OdmJIVjBaVlZTVENjcE8xeHVkbUZ5SUdOdmJXSnBibVZWVWt4eklEMGdjbVZ4ZFdseVpTZ25MaTh1TGk5b1pXeHdaWEp6TDJOdmJXSnBibVZWVWt4ekp5azdYRzVjYmk4cUtseHVJQ29nVkdoeWIzZHpJR0VnWUVOaGJtTmxiR0FnYVdZZ1kyRnVZMlZzYkdGMGFXOXVJR2hoY3lCaVpXVnVJSEpsY1hWbGMzUmxaQzVjYmlBcUwxeHVablZ1WTNScGIyNGdkR2h5YjNkSlprTmhibU5sYkd4aGRHbHZibEpsY1hWbGMzUmxaQ2hqYjI1bWFXY3BJSHRjYmlBZ2FXWWdLR052Ym1acFp5NWpZVzVqWld4VWIydGxiaWtnZTF4dUlDQWdJR052Ym1acFp5NWpZVzVqWld4VWIydGxiaTUwYUhKdmQwbG1VbVZ4ZFdWemRHVmtLQ2s3WEc0Z0lIMWNibjFjYmx4dUx5b3FYRzRnS2lCRWFYTndZWFJqYUNCaElISmxjWFZsYzNRZ2RHOGdkR2hsSUhObGNuWmxjaUIxYzJsdVp5QjBhR1VnWTI5dVptbG5kWEpsWkNCaFpHRndkR1Z5TGx4dUlDcGNiaUFxSUVCd1lYSmhiU0I3YjJKcVpXTjBmU0JqYjI1bWFXY2dWR2hsSUdOdmJtWnBaeUIwYUdGMElHbHpJSFJ2SUdKbElIVnpaV1FnWm05eUlIUm9aU0J5WlhGMVpYTjBYRzRnS2lCQWNtVjBkWEp1Y3lCN1VISnZiV2x6WlgwZ1ZHaGxJRkJ5YjIxcGMyVWdkRzhnWW1VZ1puVnNabWxzYkdWa1hHNGdLaTljYm0xdlpIVnNaUzVsZUhCdmNuUnpJRDBnWm5WdVkzUnBiMjRnWkdsemNHRjBZMmhTWlhGMVpYTjBLR052Ym1acFp5a2dlMXh1SUNCMGFISnZkMGxtUTJGdVkyVnNiR0YwYVc5dVVtVnhkV1Z6ZEdWa0tHTnZibVpwWnlrN1hHNWNiaUFnTHk4Z1UzVndjRzl5ZENCaVlYTmxWVkpNSUdOdmJtWnBaMXh1SUNCcFppQW9ZMjl1Wm1sbkxtSmhjMlZWVWt3Z0ppWWdJV2x6UVdKemIyeDFkR1ZWVWt3b1kyOXVabWxuTG5WeWJDa3BJSHRjYmlBZ0lDQmpiMjVtYVdjdWRYSnNJRDBnWTI5dFltbHVaVlZTVEhNb1kyOXVabWxuTG1KaGMyVlZVa3dzSUdOdmJtWnBaeTUxY213cE8xeHVJQ0I5WEc1Y2JpQWdMeThnUlc1emRYSmxJR2hsWVdSbGNuTWdaWGhwYzNSY2JpQWdZMjl1Wm1sbkxtaGxZV1JsY25NZ1BTQmpiMjVtYVdjdWFHVmhaR1Z5Y3lCOGZDQjdmVHRjYmx4dUlDQXZMeUJVY21GdWMyWnZjbTBnY21WeGRXVnpkQ0JrWVhSaFhHNGdJR052Ym1acFp5NWtZWFJoSUQwZ2RISmhibk5tYjNKdFJHRjBZU2hjYmlBZ0lDQmpiMjVtYVdjdVpHRjBZU3hjYmlBZ0lDQmpiMjVtYVdjdWFHVmhaR1Z5Y3l4Y2JpQWdJQ0JqYjI1bWFXY3VkSEpoYm5ObWIzSnRVbVZ4ZFdWemRGeHVJQ0FwTzF4dVhHNGdJQzh2SUVac1lYUjBaVzRnYUdWaFpHVnljMXh1SUNCamIyNW1hV2N1YUdWaFpHVnljeUE5SUhWMGFXeHpMbTFsY21kbEtGeHVJQ0FnSUdOdmJtWnBaeTVvWldGa1pYSnpMbU52YlcxdmJpQjhmQ0I3ZlN4Y2JpQWdJQ0JqYjI1bWFXY3VhR1ZoWkdWeWMxdGpiMjVtYVdjdWJXVjBhRzlrWFNCOGZDQjdmU3hjYmlBZ0lDQmpiMjVtYVdjdWFHVmhaR1Z5Y3lCOGZDQjdmVnh1SUNBcE8xeHVYRzRnSUhWMGFXeHpMbVp2Y2tWaFkyZ29YRzRnSUNBZ1d5ZGtaV3hsZEdVbkxDQW5aMlYwSnl3Z0oyaGxZV1FuTENBbmNHOXpkQ2NzSUNkd2RYUW5MQ0FuY0dGMFkyZ25MQ0FuWTI5dGJXOXVKMTBzWEc0Z0lDQWdablZ1WTNScGIyNGdZMnhsWVc1SVpXRmtaWEpEYjI1bWFXY29iV1YwYUc5a0tTQjdYRzRnSUNBZ0lDQmtaV3hsZEdVZ1kyOXVabWxuTG1obFlXUmxjbk5iYldWMGFHOWtYVHRjYmlBZ0lDQjlYRzRnSUNrN1hHNWNiaUFnZG1GeUlHRmtZWEIwWlhJZ1BTQmpiMjVtYVdjdVlXUmhjSFJsY2lCOGZDQmtaV1poZFd4MGN5NWhaR0Z3ZEdWeU8xeHVYRzRnSUhKbGRIVnliaUJoWkdGd2RHVnlLR052Ym1acFp5a3VkR2hsYmlobWRXNWpkR2x2YmlCdmJrRmtZWEIwWlhKU1pYTnZiSFYwYVc5dUtISmxjM0J2Ym5ObEtTQjdYRzRnSUNBZ2RHaHliM2RKWmtOaGJtTmxiR3hoZEdsdmJsSmxjWFZsYzNSbFpDaGpiMjVtYVdjcE8xeHVYRzRnSUNBZ0x5OGdWSEpoYm5ObWIzSnRJSEpsYzNCdmJuTmxJR1JoZEdGY2JpQWdJQ0J5WlhOd2IyNXpaUzVrWVhSaElEMGdkSEpoYm5ObWIzSnRSR0YwWVNoY2JpQWdJQ0FnSUhKbGMzQnZibk5sTG1SaGRHRXNYRzRnSUNBZ0lDQnlaWE53YjI1elpTNW9aV0ZrWlhKekxGeHVJQ0FnSUNBZ1kyOXVabWxuTG5SeVlXNXpabTl5YlZKbGMzQnZibk5sWEc0Z0lDQWdLVHRjYmx4dUlDQWdJSEpsZEhWeWJpQnlaWE53YjI1elpUdGNiaUFnZlN3Z1puVnVZM1JwYjI0Z2IyNUJaR0Z3ZEdWeVVtVnFaV04wYVc5dUtISmxZWE52YmlrZ2UxeHVJQ0FnSUdsbUlDZ2hhWE5EWVc1alpXd29jbVZoYzI5dUtTa2dlMXh1SUNBZ0lDQWdkR2h5YjNkSlprTmhibU5sYkd4aGRHbHZibEpsY1hWbGMzUmxaQ2hqYjI1bWFXY3BPMXh1WEc0Z0lDQWdJQ0F2THlCVWNtRnVjMlp2Y20wZ2NtVnpjRzl1YzJVZ1pHRjBZVnh1SUNBZ0lDQWdhV1lnS0hKbFlYTnZiaUFtSmlCeVpXRnpiMjR1Y21WemNHOXVjMlVwSUh0Y2JpQWdJQ0FnSUNBZ2NtVmhjMjl1TG5KbGMzQnZibk5sTG1SaGRHRWdQU0IwY21GdWMyWnZjbTFFWVhSaEtGeHVJQ0FnSUNBZ0lDQWdJSEpsWVhOdmJpNXlaWE53YjI1elpTNWtZWFJoTEZ4dUlDQWdJQ0FnSUNBZ0lISmxZWE52Ymk1eVpYTndiMjV6WlM1b1pXRmtaWEp6TEZ4dUlDQWdJQ0FnSUNBZ0lHTnZibVpwWnk1MGNtRnVjMlp2Y20xU1pYTndiMjV6WlZ4dUlDQWdJQ0FnSUNBcE8xeHVJQ0FnSUNBZ2ZWeHVJQ0FnSUgxY2JseHVJQ0FnSUhKbGRIVnliaUJRY205dGFYTmxMbkpsYW1WamRDaHlaV0Z6YjI0cE8xeHVJQ0I5S1R0Y2JuMDdYRzRpTENJbmRYTmxJSE4wY21samRDYzdYRzVjYmk4cUtseHVJQ29nVlhCa1lYUmxJR0Z1SUVWeWNtOXlJSGRwZEdnZ2RHaGxJSE53WldOcFptbGxaQ0JqYjI1bWFXY3NJR1Z5Y205eUlHTnZaR1VzSUdGdVpDQnlaWE53YjI1elpTNWNiaUFxWEc0Z0tpQkFjR0Z5WVcwZ2UwVnljbTl5ZlNCbGNuSnZjaUJVYUdVZ1pYSnliM0lnZEc4Z2RYQmtZWFJsTGx4dUlDb2dRSEJoY21GdElIdFBZbXBsWTNSOUlHTnZibVpwWnlCVWFHVWdZMjl1Wm1sbkxseHVJQ29nUUhCaGNtRnRJSHR6ZEhKcGJtZDlJRnRqYjJSbFhTQlVhR1VnWlhKeWIzSWdZMjlrWlNBb1ptOXlJR1Y0WVcxd2JHVXNJQ2RGUTA5T1RrRkNUMUpVUlVRbktTNWNiaUFxSUVCd1lYSmhiU0I3VDJKcVpXTjBmU0JiY21WeGRXVnpkRjBnVkdobElISmxjWFZsYzNRdVhHNGdLaUJBY0dGeVlXMGdlMDlpYW1WamRIMGdXM0psYzNCdmJuTmxYU0JVYUdVZ2NtVnpjRzl1YzJVdVhHNGdLaUJBY21WMGRYSnVjeUI3UlhKeWIzSjlJRlJvWlNCbGNuSnZjaTVjYmlBcUwxeHViVzlrZFd4bExtVjRjRzl5ZEhNZ1BTQm1kVzVqZEdsdmJpQmxibWhoYm1ObFJYSnliM0lvWlhKeWIzSXNJR052Ym1acFp5d2dZMjlrWlN3Z2NtVnhkV1Z6ZEN3Z2NtVnpjRzl1YzJVcElIdGNiaUFnWlhKeWIzSXVZMjl1Wm1sbklEMGdZMjl1Wm1sbk8xeHVJQ0JwWmlBb1kyOWtaU2tnZTF4dUlDQWdJR1Z5Y205eUxtTnZaR1VnUFNCamIyUmxPMXh1SUNCOVhHNGdJR1Z5Y205eUxuSmxjWFZsYzNRZ1BTQnlaWEYxWlhOME8xeHVJQ0JsY25KdmNpNXlaWE53YjI1elpTQTlJSEpsYzNCdmJuTmxPMXh1SUNCeVpYUjFjbTRnWlhKeWIzSTdYRzU5TzF4dUlpd2lKM1Z6WlNCemRISnBZM1FuTzF4dVhHNTJZWElnWTNKbFlYUmxSWEp5YjNJZ1BTQnlaWEYxYVhKbEtDY3VMMk55WldGMFpVVnljbTl5SnlrN1hHNWNiaThxS2x4dUlDb2dVbVZ6YjJ4MlpTQnZjaUJ5WldwbFkzUWdZU0JRY205dGFYTmxJR0poYzJWa0lHOXVJSEpsYzNCdmJuTmxJSE4wWVhSMWN5NWNiaUFxWEc0Z0tpQkFjR0Z5WVcwZ2UwWjFibU4wYVc5dWZTQnlaWE52YkhabElFRWdablZ1WTNScGIyNGdkR2hoZENCeVpYTnZiSFpsY3lCMGFHVWdjSEp2YldselpTNWNiaUFxSUVCd1lYSmhiU0I3Um5WdVkzUnBiMjU5SUhKbGFtVmpkQ0JCSUdaMWJtTjBhVzl1SUhSb1lYUWdjbVZxWldOMGN5QjBhR1VnY0hKdmJXbHpaUzVjYmlBcUlFQndZWEpoYlNCN2IySnFaV04wZlNCeVpYTndiMjV6WlNCVWFHVWdjbVZ6Y0c5dWMyVXVYRzRnS2k5Y2JtMXZaSFZzWlM1bGVIQnZjblJ6SUQwZ1puVnVZM1JwYjI0Z2MyVjBkR3hsS0hKbGMyOXNkbVVzSUhKbGFtVmpkQ3dnY21WemNHOXVjMlVwSUh0Y2JpQWdkbUZ5SUhaaGJHbGtZWFJsVTNSaGRIVnpJRDBnY21WemNHOXVjMlV1WTI5dVptbG5MblpoYkdsa1lYUmxVM1JoZEhWek8xeHVJQ0F2THlCT2IzUmxPaUJ6ZEdGMGRYTWdhWE1nYm05MElHVjRjRzl6WldRZ1lua2dXRVJ2YldGcGJsSmxjWFZsYzNSY2JpQWdhV1lnS0NGeVpYTndiMjV6WlM1emRHRjBkWE1nZkh3Z0lYWmhiR2xrWVhSbFUzUmhkSFZ6SUh4OElIWmhiR2xrWVhSbFUzUmhkSFZ6S0hKbGMzQnZibk5sTG5OMFlYUjFjeWtwSUh0Y2JpQWdJQ0J5WlhOdmJIWmxLSEpsYzNCdmJuTmxLVHRjYmlBZ2ZTQmxiSE5sSUh0Y2JpQWdJQ0J5WldwbFkzUW9ZM0psWVhSbFJYSnliM0lvWEc0Z0lDQWdJQ0FuVW1WeGRXVnpkQ0JtWVdsc1pXUWdkMmwwYUNCemRHRjBkWE1nWTI5a1pTQW5JQ3NnY21WemNHOXVjMlV1YzNSaGRIVnpMRnh1SUNBZ0lDQWdjbVZ6Y0c5dWMyVXVZMjl1Wm1sbkxGeHVJQ0FnSUNBZ2JuVnNiQ3hjYmlBZ0lDQWdJSEpsYzNCdmJuTmxMbkpsY1hWbGMzUXNYRzRnSUNBZ0lDQnlaWE53YjI1elpWeHVJQ0FnSUNrcE8xeHVJQ0I5WEc1OU8xeHVJaXdpSjNWelpTQnpkSEpwWTNRbk8xeHVYRzUyWVhJZ2RYUnBiSE1nUFNCeVpYRjFhWEpsS0NjdUx5NHVMM1YwYVd4ekp5azdYRzVjYmk4cUtseHVJQ29nVkhKaGJuTm1iM0p0SUhSb1pTQmtZWFJoSUdadmNpQmhJSEpsY1hWbGMzUWdiM0lnWVNCeVpYTndiMjV6WlZ4dUlDcGNiaUFxSUVCd1lYSmhiU0I3VDJKcVpXTjBmRk4wY21sdVozMGdaR0YwWVNCVWFHVWdaR0YwWVNCMGJ5QmlaU0IwY21GdWMyWnZjbTFsWkZ4dUlDb2dRSEJoY21GdElIdEJjbkpoZVgwZ2FHVmhaR1Z5Y3lCVWFHVWdhR1ZoWkdWeWN5Qm1iM0lnZEdobElISmxjWFZsYzNRZ2IzSWdjbVZ6Y0c5dWMyVmNiaUFxSUVCd1lYSmhiU0I3UVhKeVlYbDhSblZ1WTNScGIyNTlJR1p1Y3lCQklITnBibWRzWlNCbWRXNWpkR2x2YmlCdmNpQkJjbkpoZVNCdlppQm1kVzVqZEdsdmJuTmNiaUFxSUVCeVpYUjFjbTV6SUhzcWZTQlVhR1VnY21WemRXeDBhVzVuSUhSeVlXNXpabTl5YldWa0lHUmhkR0ZjYmlBcUwxeHViVzlrZFd4bExtVjRjRzl5ZEhNZ1BTQm1kVzVqZEdsdmJpQjBjbUZ1YzJadmNtMUVZWFJoS0dSaGRHRXNJR2hsWVdSbGNuTXNJR1p1Y3lrZ2UxeHVJQ0F2S21WemJHbHVkQ0J1Ynkxd1lYSmhiUzF5WldGemMybG5iam93S2k5Y2JpQWdkWFJwYkhNdVptOXlSV0ZqYUNobWJuTXNJR1oxYm1OMGFXOXVJSFJ5WVc1elptOXliU2htYmlrZ2UxeHVJQ0FnSUdSaGRHRWdQU0JtYmloa1lYUmhMQ0JvWldGa1pYSnpLVHRjYmlBZ2ZTazdYRzVjYmlBZ2NtVjBkWEp1SUdSaGRHRTdYRzU5TzF4dUlpd2lKM1Z6WlNCemRISnBZM1FuTzF4dVhHNTJZWElnZFhScGJITWdQU0J5WlhGMWFYSmxLQ2N1TDNWMGFXeHpKeWs3WEc1MllYSWdibTl5YldGc2FYcGxTR1ZoWkdWeVRtRnRaU0E5SUhKbGNYVnBjbVVvSnk0dmFHVnNjR1Z5Y3k5dWIzSnRZV3hwZW1WSVpXRmtaWEpPWVcxbEp5azdYRzVjYm5aaGNpQkVSVVpCVlV4VVgwTlBUbFJGVGxSZlZGbFFSU0E5SUh0Y2JpQWdKME52Ym5SbGJuUXRWSGx3WlNjNklDZGhjSEJzYVdOaGRHbHZiaTk0TFhkM2R5MW1iM0p0TFhWeWJHVnVZMjlrWldRblhHNTlPMXh1WEc1bWRXNWpkR2x2YmlCelpYUkRiMjUwWlc1MFZIbHdaVWxtVlc1elpYUW9hR1ZoWkdWeWN5d2dkbUZzZFdVcElIdGNiaUFnYVdZZ0tDRjFkR2xzY3k1cGMxVnVaR1ZtYVc1bFpDaG9aV0ZrWlhKektTQW1KaUIxZEdsc2N5NXBjMVZ1WkdWbWFXNWxaQ2hvWldGa1pYSnpXeWREYjI1MFpXNTBMVlI1Y0dVblhTa3BJSHRjYmlBZ0lDQm9aV0ZrWlhKeld5ZERiMjUwWlc1MExWUjVjR1VuWFNBOUlIWmhiSFZsTzF4dUlDQjlYRzU5WEc1Y2JtWjFibU4wYVc5dUlHZGxkRVJsWm1GMWJIUkJaR0Z3ZEdWeUtDa2dlMXh1SUNCMllYSWdZV1JoY0hSbGNqdGNiaUFnYVdZZ0tIUjVjR1Z2WmlCWVRVeElkSFJ3VW1WeGRXVnpkQ0FoUFQwZ0ozVnVaR1ZtYVc1bFpDY3BJSHRjYmlBZ0lDQXZMeUJHYjNJZ1luSnZkM05sY25NZ2RYTmxJRmhJVWlCaFpHRndkR1Z5WEc0Z0lDQWdZV1JoY0hSbGNpQTlJSEpsY1hWcGNtVW9KeTR2WVdSaGNIUmxjbk12ZUdoeUp5azdYRzRnSUgwZ1pXeHpaU0JwWmlBb2RIbHdaVzltSUhCeWIyTmxjM01nSVQwOUlDZDFibVJsWm1sdVpXUW5LU0I3WEc0Z0lDQWdMeThnUm05eUlHNXZaR1VnZFhObElFaFVWRkFnWVdSaGNIUmxjbHh1SUNBZ0lHRmtZWEIwWlhJZ1BTQnlaWEYxYVhKbEtDY3VMMkZrWVhCMFpYSnpMMmgwZEhBbktUdGNiaUFnZlZ4dUlDQnlaWFIxY200Z1lXUmhjSFJsY2p0Y2JuMWNibHh1ZG1GeUlHUmxabUYxYkhSeklEMGdlMXh1SUNCaFpHRndkR1Z5T2lCblpYUkVaV1poZFd4MFFXUmhjSFJsY2lncExGeHVYRzRnSUhSeVlXNXpabTl5YlZKbGNYVmxjM1E2SUZ0bWRXNWpkR2x2YmlCMGNtRnVjMlp2Y20xU1pYRjFaWE4wS0dSaGRHRXNJR2hsWVdSbGNuTXBJSHRjYmlBZ0lDQnViM0p0WVd4cGVtVklaV0ZrWlhKT1lXMWxLR2hsWVdSbGNuTXNJQ2REYjI1MFpXNTBMVlI1Y0dVbktUdGNiaUFnSUNCcFppQW9kWFJwYkhNdWFYTkdiM0p0UkdGMFlTaGtZWFJoS1NCOGZGeHVJQ0FnSUNBZ2RYUnBiSE11YVhOQmNuSmhlVUoxWm1abGNpaGtZWFJoS1NCOGZGeHVJQ0FnSUNBZ2RYUnBiSE11YVhOQ2RXWm1aWElvWkdGMFlTa2dmSHhjYmlBZ0lDQWdJSFYwYVd4ekxtbHpVM1J5WldGdEtHUmhkR0VwSUh4OFhHNGdJQ0FnSUNCMWRHbHNjeTVwYzBacGJHVW9aR0YwWVNrZ2ZIeGNiaUFnSUNBZ0lIVjBhV3h6TG1selFteHZZaWhrWVhSaEtWeHVJQ0FnSUNrZ2UxeHVJQ0FnSUNBZ2NtVjBkWEp1SUdSaGRHRTdYRzRnSUNBZ2ZWeHVJQ0FnSUdsbUlDaDFkR2xzY3k1cGMwRnljbUY1UW5WbVptVnlWbWxsZHloa1lYUmhLU2tnZTF4dUlDQWdJQ0FnY21WMGRYSnVJR1JoZEdFdVluVm1abVZ5TzF4dUlDQWdJSDFjYmlBZ0lDQnBaaUFvZFhScGJITXVhWE5WVWt4VFpXRnlZMmhRWVhKaGJYTW9aR0YwWVNrcElIdGNiaUFnSUNBZ0lITmxkRU52Ym5SbGJuUlVlWEJsU1daVmJuTmxkQ2hvWldGa1pYSnpMQ0FuWVhCd2JHbGpZWFJwYjI0dmVDMTNkM2N0Wm05eWJTMTFjbXhsYm1OdlpHVmtPMk5vWVhKelpYUTlkWFJtTFRnbktUdGNiaUFnSUNBZ0lISmxkSFZ5YmlCa1lYUmhMblJ2VTNSeWFXNW5LQ2s3WEc0Z0lDQWdmVnh1SUNBZ0lHbG1JQ2gxZEdsc2N5NXBjMDlpYW1WamRDaGtZWFJoS1NrZ2UxeHVJQ0FnSUNBZ2MyVjBRMjl1ZEdWdWRGUjVjR1ZKWmxWdWMyVjBLR2hsWVdSbGNuTXNJQ2RoY0hCc2FXTmhkR2x2Ymk5cWMyOXVPMk5vWVhKelpYUTlkWFJtTFRnbktUdGNiaUFnSUNBZ0lISmxkSFZ5YmlCS1UwOU9Mbk4wY21sdVoybG1lU2hrWVhSaEtUdGNiaUFnSUNCOVhHNGdJQ0FnY21WMGRYSnVJR1JoZEdFN1hHNGdJSDFkTEZ4dVhHNGdJSFJ5WVc1elptOXliVkpsYzNCdmJuTmxPaUJiWm5WdVkzUnBiMjRnZEhKaGJuTm1iM0p0VW1WemNHOXVjMlVvWkdGMFlTa2dlMXh1SUNBZ0lDOHFaWE5zYVc1MElHNXZMWEJoY21GdExYSmxZWE56YVdkdU9qQXFMMXh1SUNBZ0lHbG1JQ2gwZVhCbGIyWWdaR0YwWVNBOVBUMGdKM04wY21sdVp5Y3BJSHRjYmlBZ0lDQWdJSFJ5ZVNCN1hHNGdJQ0FnSUNBZ0lHUmhkR0VnUFNCS1UwOU9MbkJoY25ObEtHUmhkR0VwTzF4dUlDQWdJQ0FnZlNCallYUmphQ0FvWlNrZ2V5QXZLaUJKWjI1dmNtVWdLaThnZlZ4dUlDQWdJSDFjYmlBZ0lDQnlaWFIxY200Z1pHRjBZVHRjYmlBZ2ZWMHNYRzVjYmlBZ0x5b3FYRzRnSUNBcUlFRWdkR2x0Wlc5MWRDQnBiaUJ0YVd4c2FYTmxZMjl1WkhNZ2RHOGdZV0p2Y25RZ1lTQnlaWEYxWlhOMExpQkpaaUJ6WlhRZ2RHOGdNQ0FvWkdWbVlYVnNkQ2tnWVZ4dUlDQWdLaUIwYVcxbGIzVjBJR2x6SUc1dmRDQmpjbVZoZEdWa0xseHVJQ0FnS2k5Y2JpQWdkR2x0Wlc5MWREb2dNQ3hjYmx4dUlDQjRjM0ptUTI5dmEybGxUbUZ0WlRvZ0oxaFRVa1l0VkU5TFJVNG5MRnh1SUNCNGMzSm1TR1ZoWkdWeVRtRnRaVG9nSjFndFdGTlNSaTFVVDB0RlRpY3NYRzVjYmlBZ2JXRjRRMjl1ZEdWdWRFeGxibWQwYURvZ0xURXNYRzVjYmlBZ2RtRnNhV1JoZEdWVGRHRjBkWE02SUdaMWJtTjBhVzl1SUhaaGJHbGtZWFJsVTNSaGRIVnpLSE4wWVhSMWN5a2dlMXh1SUNBZ0lISmxkSFZ5YmlCemRHRjBkWE1nUGowZ01qQXdJQ1ltSUhOMFlYUjFjeUE4SURNd01EdGNiaUFnZlZ4dWZUdGNibHh1WkdWbVlYVnNkSE11YUdWaFpHVnljeUE5SUh0Y2JpQWdZMjl0Ylc5dU9pQjdYRzRnSUNBZ0owRmpZMlZ3ZENjNklDZGhjSEJzYVdOaGRHbHZiaTlxYzI5dUxDQjBaWGgwTDNCc1lXbHVMQ0FxTHlvblhHNGdJSDFjYm4wN1hHNWNiblYwYVd4ekxtWnZja1ZoWTJnb1d5ZGtaV3hsZEdVbkxDQW5aMlYwSnl3Z0oyaGxZV1FuWFN3Z1puVnVZM1JwYjI0Z1ptOXlSV0ZqYUUxbGRHaHZaRTV2UkdGMFlTaHRaWFJvYjJRcElIdGNiaUFnWkdWbVlYVnNkSE11YUdWaFpHVnljMXR0WlhSb2IyUmRJRDBnZTMwN1hHNTlLVHRjYmx4dWRYUnBiSE11Wm05eVJXRmphQ2hiSjNCdmMzUW5MQ0FuY0hWMEp5d2dKM0JoZEdOb0oxMHNJR1oxYm1OMGFXOXVJR1p2Y2tWaFkyaE5aWFJvYjJSWGFYUm9SR0YwWVNodFpYUm9iMlFwSUh0Y2JpQWdaR1ZtWVhWc2RITXVhR1ZoWkdWeWMxdHRaWFJvYjJSZElEMGdkWFJwYkhNdWJXVnlaMlVvUkVWR1FWVk1WRjlEVDA1VVJVNVVYMVJaVUVVcE8xeHVmU2s3WEc1Y2JtMXZaSFZzWlM1bGVIQnZjblJ6SUQwZ1pHVm1ZWFZzZEhNN1hHNGlMQ0luZFhObElITjBjbWxqZENjN1hHNWNibTF2WkhWc1pTNWxlSEJ2Y25SeklEMGdablZ1WTNScGIyNGdZbWx1WkNobWJpd2dkR2hwYzBGeVp5a2dlMXh1SUNCeVpYUjFjbTRnWm5WdVkzUnBiMjRnZDNKaGNDZ3BJSHRjYmlBZ0lDQjJZWElnWVhKbmN5QTlJRzVsZHlCQmNuSmhlU2hoY21kMWJXVnVkSE11YkdWdVozUm9LVHRjYmlBZ0lDQm1iM0lnS0haaGNpQnBJRDBnTURzZ2FTQThJR0Z5WjNNdWJHVnVaM1JvT3lCcEt5c3BJSHRjYmlBZ0lDQWdJR0Z5WjNOYmFWMGdQU0JoY21kMWJXVnVkSE5iYVYwN1hHNGdJQ0FnZlZ4dUlDQWdJSEpsZEhWeWJpQm1iaTVoY0hCc2VTaDBhR2x6UVhKbkxDQmhjbWR6S1R0Y2JpQWdmVHRjYm4wN1hHNGlMQ0luZFhObElITjBjbWxqZENjN1hHNWNiaTh2SUdKMGIyRWdjRzlzZVdacGJHd2dabTl5SUVsRlBERXdJR052ZFhKMFpYTjVJR2gwZEhCek9pOHZaMmwwYUhWaUxtTnZiUzlrWVhacFpHTm9ZVzFpWlhKekwwSmhjMlUyTkM1cWMxeHVYRzUyWVhJZ1kyaGhjbk1nUFNBblFVSkRSRVZHUjBoSlNrdE1UVTVQVUZGU1UxUlZWbGRZV1ZwaFltTmtaV1puYUdscWEyeHRibTl3Y1hKemRIVjJkM2g1ZWpBeE1qTTBOVFkzT0Rrckx6MG5PMXh1WEc1bWRXNWpkR2x2YmlCRktDa2dlMXh1SUNCMGFHbHpMbTFsYzNOaFoyVWdQU0FuVTNSeWFXNW5JR052Ym5SaGFXNXpJR0Z1SUdsdWRtRnNhV1FnWTJoaGNtRmpkR1Z5Snp0Y2JuMWNia1V1Y0hKdmRHOTBlWEJsSUQwZ2JtVjNJRVZ5Y205eU8xeHVSUzV3Y205MGIzUjVjR1V1WTI5a1pTQTlJRFU3WEc1RkxuQnliM1J2ZEhsd1pTNXVZVzFsSUQwZ0owbHVkbUZzYVdSRGFHRnlZV04wWlhKRmNuSnZjaWM3WEc1Y2JtWjFibU4wYVc5dUlHSjBiMkVvYVc1d2RYUXBJSHRjYmlBZ2RtRnlJSE4wY2lBOUlGTjBjbWx1WnlocGJuQjFkQ2s3WEc0Z0lIWmhjaUJ2ZFhSd2RYUWdQU0FuSnp0Y2JpQWdabTl5SUNoY2JpQWdJQ0F2THlCcGJtbDBhV0ZzYVhwbElISmxjM1ZzZENCaGJtUWdZMjkxYm5SbGNseHVJQ0FnSUhaaGNpQmliRzlqYXl3Z1kyaGhja052WkdVc0lHbGtlQ0E5SURBc0lHMWhjQ0E5SUdOb1lYSnpPMXh1SUNBZ0lDOHZJR2xtSUhSb1pTQnVaWGgwSUhOMGNpQnBibVJsZUNCa2IyVnpJRzV2ZENCbGVHbHpkRHBjYmlBZ0lDQXZMeUFnSUdOb1lXNW5aU0IwYUdVZ2JXRndjR2x1WnlCMFlXSnNaU0IwYnlCY0lqMWNJbHh1SUNBZ0lDOHZJQ0FnWTJobFkyc2dhV1lnWkNCb1lYTWdibThnWm5KaFkzUnBiMjVoYkNCa2FXZHBkSE5jYmlBZ0lDQnpkSEl1WTJoaGNrRjBLR2xrZUNCOElEQXBJSHg4SUNodFlYQWdQU0FuUFNjc0lHbGtlQ0FsSURFcE8xeHVJQ0FnSUM4dklGd2lPQ0F0SUdsa2VDQWxJREVnS2lBNFhDSWdaMlZ1WlhKaGRHVnpJSFJvWlNCelpYRjFaVzVqWlNBeUxDQTBMQ0EyTENBNFhHNGdJQ0FnYjNWMGNIVjBJQ3M5SUcxaGNDNWphR0Z5UVhRb05qTWdKaUJpYkc5amF5QStQaUE0SUMwZ2FXUjRJQ1VnTVNBcUlEZ3BYRzRnSUNrZ2UxeHVJQ0FnSUdOb1lYSkRiMlJsSUQwZ2MzUnlMbU5vWVhKRGIyUmxRWFFvYVdSNElDczlJRE1nTHlBMEtUdGNiaUFnSUNCcFppQW9ZMmhoY2tOdlpHVWdQaUF3ZUVaR0tTQjdYRzRnSUNBZ0lDQjBhSEp2ZHlCdVpYY2dSU2dwTzF4dUlDQWdJSDFjYmlBZ0lDQmliRzlqYXlBOUlHSnNiMk5ySUR3OElEZ2dmQ0JqYUdGeVEyOWtaVHRjYmlBZ2ZWeHVJQ0J5WlhSMWNtNGdiM1YwY0hWME8xeHVmVnh1WEc1dGIyUjFiR1V1Wlhod2IzSjBjeUE5SUdKMGIyRTdYRzRpTENJbmRYTmxJSE4wY21samRDYzdYRzVjYm5aaGNpQjFkR2xzY3lBOUlISmxjWFZwY21Vb0p5NHZMaTR2ZFhScGJITW5LVHRjYmx4dVpuVnVZM1JwYjI0Z1pXNWpiMlJsS0haaGJDa2dlMXh1SUNCeVpYUjFjbTRnWlc1amIyUmxWVkpKUTI5dGNHOXVaVzUwS0haaGJDa3VYRzRnSUNBZ2NtVndiR0ZqWlNndkpUUXdMMmRwTENBblFDY3BMbHh1SUNBZ0lISmxjR3hoWTJVb0x5VXpRUzluYVN3Z0p6b25LUzVjYmlBZ0lDQnlaWEJzWVdObEtDOGxNalF2Wnl3Z0p5UW5LUzVjYmlBZ0lDQnlaWEJzWVdObEtDOGxNa012WjJrc0lDY3NKeWt1WEc0Z0lDQWdjbVZ3YkdGalpTZ3ZKVEl3TDJjc0lDY3JKeWt1WEc0Z0lDQWdjbVZ3YkdGalpTZ3ZKVFZDTDJkcExDQW5XeWNwTGx4dUlDQWdJSEpsY0d4aFkyVW9MeVUxUkM5bmFTd2dKMTBuS1R0Y2JuMWNibHh1THlvcVhHNGdLaUJDZFdsc1pDQmhJRlZTVENCaWVTQmhjSEJsYm1ScGJtY2djR0Z5WVcxeklIUnZJSFJvWlNCbGJtUmNiaUFxWEc0Z0tpQkFjR0Z5WVcwZ2UzTjBjbWx1WjMwZ2RYSnNJRlJvWlNCaVlYTmxJRzltSUhSb1pTQjFjbXdnS0dVdVp5NHNJR2gwZEhBNkx5OTNkM2N1WjI5dloyeGxMbU52YlNsY2JpQXFJRUJ3WVhKaGJTQjdiMkpxWldOMGZTQmJjR0Z5WVcxelhTQlVhR1VnY0dGeVlXMXpJSFJ2SUdKbElHRndjR1Z1WkdWa1hHNGdLaUJBY21WMGRYSnVjeUI3YzNSeWFXNW5mU0JVYUdVZ1ptOXliV0YwZEdWa0lIVnliRnh1SUNvdlhHNXRiMlIxYkdVdVpYaHdiM0owY3lBOUlHWjFibU4wYVc5dUlHSjFhV3hrVlZKTUtIVnliQ3dnY0dGeVlXMXpMQ0J3WVhKaGJYTlRaWEpwWVd4cGVtVnlLU0I3WEc0Z0lDOHFaWE5zYVc1MElHNXZMWEJoY21GdExYSmxZWE56YVdkdU9qQXFMMXh1SUNCcFppQW9JWEJoY21GdGN5a2dlMXh1SUNBZ0lISmxkSFZ5YmlCMWNtdzdYRzRnSUgxY2JseHVJQ0IyWVhJZ2MyVnlhV0ZzYVhwbFpGQmhjbUZ0Y3p0Y2JpQWdhV1lnS0hCaGNtRnRjMU5sY21saGJHbDZaWElwSUh0Y2JpQWdJQ0J6WlhKcFlXeHBlbVZrVUdGeVlXMXpJRDBnY0dGeVlXMXpVMlZ5YVdGc2FYcGxjaWh3WVhKaGJYTXBPMXh1SUNCOUlHVnNjMlVnYVdZZ0tIVjBhV3h6TG1selZWSk1VMlZoY21Ob1VHRnlZVzF6S0hCaGNtRnRjeWtwSUh0Y2JpQWdJQ0J6WlhKcFlXeHBlbVZrVUdGeVlXMXpJRDBnY0dGeVlXMXpMblJ2VTNSeWFXNW5LQ2s3WEc0Z0lIMGdaV3h6WlNCN1hHNGdJQ0FnZG1GeUlIQmhjblJ6SUQwZ1cxMDdYRzVjYmlBZ0lDQjFkR2xzY3k1bWIzSkZZV05vS0hCaGNtRnRjeXdnWm5WdVkzUnBiMjRnYzJWeWFXRnNhWHBsS0haaGJDd2dhMlY1S1NCN1hHNGdJQ0FnSUNCcFppQW9kbUZzSUQwOVBTQnVkV3hzSUh4OElIUjVjR1Z2WmlCMllXd2dQVDA5SUNkMWJtUmxabWx1WldRbktTQjdYRzRnSUNBZ0lDQWdJSEpsZEhWeWJqdGNiaUFnSUNBZ0lIMWNibHh1SUNBZ0lDQWdhV1lnS0hWMGFXeHpMbWx6UVhKeVlYa29kbUZzS1NrZ2UxeHVJQ0FnSUNBZ0lDQnJaWGtnUFNCclpYa2dLeUFuVzEwbk8xeHVJQ0FnSUNBZ2ZTQmxiSE5sSUh0Y2JpQWdJQ0FnSUNBZ2RtRnNJRDBnVzNaaGJGMDdYRzRnSUNBZ0lDQjlYRzVjYmlBZ0lDQWdJSFYwYVd4ekxtWnZja1ZoWTJnb2RtRnNMQ0JtZFc1amRHbHZiaUJ3WVhKelpWWmhiSFZsS0hZcElIdGNiaUFnSUNBZ0lDQWdhV1lnS0hWMGFXeHpMbWx6UkdGMFpTaDJLU2tnZTF4dUlDQWdJQ0FnSUNBZ0lIWWdQU0IyTG5SdlNWTlBVM1J5YVc1bktDazdYRzRnSUNBZ0lDQWdJSDBnWld4elpTQnBaaUFvZFhScGJITXVhWE5QWW1wbFkzUW9kaWtwSUh0Y2JpQWdJQ0FnSUNBZ0lDQjJJRDBnU2xOUFRpNXpkSEpwYm1kcFpua29kaWs3WEc0Z0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUNBZ2NHRnlkSE11Y0hWemFDaGxibU52WkdVb2EyVjVLU0FySUNjOUp5QXJJR1Z1WTI5a1pTaDJLU2s3WEc0Z0lDQWdJQ0I5S1R0Y2JpQWdJQ0I5S1R0Y2JseHVJQ0FnSUhObGNtbGhiR2w2WldSUVlYSmhiWE1nUFNCd1lYSjBjeTVxYjJsdUtDY21KeWs3WEc0Z0lIMWNibHh1SUNCcFppQW9jMlZ5YVdGc2FYcGxaRkJoY21GdGN5a2dlMXh1SUNBZ0lIVnliQ0FyUFNBb2RYSnNMbWx1WkdWNFQyWW9KejhuS1NBOVBUMGdMVEVnUHlBblB5Y2dPaUFuSmljcElDc2djMlZ5YVdGc2FYcGxaRkJoY21GdGN6dGNiaUFnZlZ4dVhHNGdJSEpsZEhWeWJpQjFjbXc3WEc1OU8xeHVJaXdpSjNWelpTQnpkSEpwWTNRbk8xeHVYRzR2S2lwY2JpQXFJRU55WldGMFpYTWdZU0J1WlhjZ1ZWSk1JR0o1SUdOdmJXSnBibWx1WnlCMGFHVWdjM0JsWTJsbWFXVmtJRlZTVEhOY2JpQXFYRzRnS2lCQWNHRnlZVzBnZTNOMGNtbHVaMzBnWW1GelpWVlNUQ0JVYUdVZ1ltRnpaU0JWVWt4Y2JpQXFJRUJ3WVhKaGJTQjdjM1J5YVc1bmZTQnlaV3hoZEdsMlpWVlNUQ0JVYUdVZ2NtVnNZWFJwZG1VZ1ZWSk1YRzRnS2lCQWNtVjBkWEp1Y3lCN2MzUnlhVzVuZlNCVWFHVWdZMjl0WW1sdVpXUWdWVkpNWEc0Z0tpOWNibTF2WkhWc1pTNWxlSEJ2Y25SeklEMGdablZ1WTNScGIyNGdZMjl0WW1sdVpWVlNUSE1vWW1GelpWVlNUQ3dnY21Wc1lYUnBkbVZWVWt3cElIdGNiaUFnY21WMGRYSnVJSEpsYkdGMGFYWmxWVkpNWEc0Z0lDQWdQeUJpWVhObFZWSk1MbkpsY0d4aFkyVW9MMXhjTHlza0x5d2dKeWNwSUNzZ0p5OG5JQ3NnY21Wc1lYUnBkbVZWVWt3dWNtVndiR0ZqWlNndlhseGNMeXN2TENBbkp5bGNiaUFnSUNBNklHSmhjMlZWVWt3N1hHNTlPMXh1SWl3aUozVnpaU0J6ZEhKcFkzUW5PMXh1WEc1MllYSWdkWFJwYkhNZ1BTQnlaWEYxYVhKbEtDY3VMeTR1TDNWMGFXeHpKeWs3WEc1Y2JtMXZaSFZzWlM1bGVIQnZjblJ6SUQwZ0tGeHVJQ0IxZEdsc2N5NXBjMU4wWVc1a1lYSmtRbkp2ZDNObGNrVnVkaWdwSUQ5Y2JseHVJQ0F2THlCVGRHRnVaR0Z5WkNCaWNtOTNjMlZ5SUdWdWRuTWdjM1Z3Y0c5eWRDQmtiMk4xYldWdWRDNWpiMjlyYVdWY2JpQWdLR1oxYm1OMGFXOXVJSE4wWVc1a1lYSmtRbkp2ZDNObGNrVnVkaWdwSUh0Y2JpQWdJQ0J5WlhSMWNtNGdlMXh1SUNBZ0lDQWdkM0pwZEdVNklHWjFibU4wYVc5dUlIZHlhWFJsS0c1aGJXVXNJSFpoYkhWbExDQmxlSEJwY21WekxDQndZWFJvTENCa2IyMWhhVzRzSUhObFkzVnlaU2tnZTF4dUlDQWdJQ0FnSUNCMllYSWdZMjl2YTJsbElEMGdXMTA3WEc0Z0lDQWdJQ0FnSUdOdmIydHBaUzV3ZFhOb0tHNWhiV1VnS3lBblBTY2dLeUJsYm1OdlpHVlZVa2xEYjIxd2IyNWxiblFvZG1Gc2RXVXBLVHRjYmx4dUlDQWdJQ0FnSUNCcFppQW9kWFJwYkhNdWFYTk9kVzFpWlhJb1pYaHdhWEpsY3lrcElIdGNiaUFnSUNBZ0lDQWdJQ0JqYjI5cmFXVXVjSFZ6YUNnblpYaHdhWEpsY3owbklDc2dibVYzSUVSaGRHVW9aWGh3YVhKbGN5a3VkRzlIVFZSVGRISnBibWNvS1NrN1hHNGdJQ0FnSUNBZ0lIMWNibHh1SUNBZ0lDQWdJQ0JwWmlBb2RYUnBiSE11YVhOVGRISnBibWNvY0dGMGFDa3BJSHRjYmlBZ0lDQWdJQ0FnSUNCamIyOXJhV1V1Y0hWemFDZ25jR0YwYUQwbklDc2djR0YwYUNrN1hHNGdJQ0FnSUNBZ0lIMWNibHh1SUNBZ0lDQWdJQ0JwWmlBb2RYUnBiSE11YVhOVGRISnBibWNvWkc5dFlXbHVLU2tnZTF4dUlDQWdJQ0FnSUNBZ0lHTnZiMnRwWlM1d2RYTm9LQ2RrYjIxaGFXNDlKeUFySUdSdmJXRnBiaWs3WEc0Z0lDQWdJQ0FnSUgxY2JseHVJQ0FnSUNBZ0lDQnBaaUFvYzJWamRYSmxJRDA5UFNCMGNuVmxLU0I3WEc0Z0lDQWdJQ0FnSUNBZ1kyOXZhMmxsTG5CMWMyZ29KM05sWTNWeVpTY3BPMXh1SUNBZ0lDQWdJQ0I5WEc1Y2JpQWdJQ0FnSUNBZ1pHOWpkVzFsYm5RdVkyOXZhMmxsSUQwZ1kyOXZhMmxsTG1wdmFXNG9KenNnSnlrN1hHNGdJQ0FnSUNCOUxGeHVYRzRnSUNBZ0lDQnlaV0ZrT2lCbWRXNWpkR2x2YmlCeVpXRmtLRzVoYldVcElIdGNiaUFnSUNBZ0lDQWdkbUZ5SUcxaGRHTm9JRDBnWkc5amRXMWxiblF1WTI5dmEybGxMbTFoZEdOb0tHNWxkeUJTWldkRmVIQW9KeWhlZkR0Y1hGeGNjeW9wS0NjZ0t5QnVZVzFsSUNzZ0p5azlLRnRlTzEwcUtTY3BLVHRjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJQ2h0WVhSamFDQS9JR1JsWTI5a1pWVlNTVU52YlhCdmJtVnVkQ2h0WVhSamFGc3pYU2tnT2lCdWRXeHNLVHRjYmlBZ0lDQWdJSDBzWEc1Y2JpQWdJQ0FnSUhKbGJXOTJaVG9nWm5WdVkzUnBiMjRnY21WdGIzWmxLRzVoYldVcElIdGNiaUFnSUNBZ0lDQWdkR2hwY3k1M2NtbDBaU2h1WVcxbExDQW5KeXdnUkdGMFpTNXViM2NvS1NBdElEZzJOREF3TURBd0tUdGNiaUFnSUNBZ0lIMWNiaUFnSUNCOU8xeHVJQ0I5S1NncElEcGNibHh1SUNBdkx5Qk9iMjRnYzNSaGJtUmhjbVFnWW5KdmQzTmxjaUJsYm5ZZ0tIZGxZaUIzYjNKclpYSnpMQ0J5WldGamRDMXVZWFJwZG1VcElHeGhZMnNnYm1WbFpHVmtJSE4xY0hCdmNuUXVYRzRnSUNobWRXNWpkR2x2YmlCdWIyNVRkR0Z1WkdGeVpFSnliM2R6WlhKRmJuWW9LU0I3WEc0Z0lDQWdjbVYwZFhKdUlIdGNiaUFnSUNBZ0lIZHlhWFJsT2lCbWRXNWpkR2x2YmlCM2NtbDBaU2dwSUh0OUxGeHVJQ0FnSUNBZ2NtVmhaRG9nWm5WdVkzUnBiMjRnY21WaFpDZ3BJSHNnY21WMGRYSnVJRzUxYkd3N0lIMHNYRzRnSUNBZ0lDQnlaVzF2ZG1VNklHWjFibU4wYVc5dUlISmxiVzkyWlNncElIdDlYRzRnSUNBZ2ZUdGNiaUFnZlNrb0tWeHVLVHRjYmlJc0lpZDFjMlVnYzNSeWFXTjBKenRjYmx4dUx5b3FYRzRnS2lCRVpYUmxjbTFwYm1WeklIZG9aWFJvWlhJZ2RHaGxJSE53WldOcFptbGxaQ0JWVWt3Z2FYTWdZV0p6YjJ4MWRHVmNiaUFxWEc0Z0tpQkFjR0Z5WVcwZ2UzTjBjbWx1WjMwZ2RYSnNJRlJvWlNCVlVrd2dkRzhnZEdWemRGeHVJQ29nUUhKbGRIVnlibk1nZTJKdmIyeGxZVzU5SUZSeWRXVWdhV1lnZEdobElITndaV05wWm1sbFpDQlZVa3dnYVhNZ1lXSnpiMngxZEdVc0lHOTBhR1Z5ZDJselpTQm1ZV3h6WlZ4dUlDb3ZYRzV0YjJSMWJHVXVaWGh3YjNKMGN5QTlJR1oxYm1OMGFXOXVJR2x6UVdKemIyeDFkR1ZWVWt3b2RYSnNLU0I3WEc0Z0lDOHZJRUVnVlZKTUlHbHpJR052Ym5OcFpHVnlaV1FnWVdKemIyeDFkR1VnYVdZZ2FYUWdZbVZuYVc1eklIZHBkR2dnWENJOGMyTm9aVzFsUGpvdkwxd2lJRzl5SUZ3aUx5OWNJaUFvY0hKdmRHOWpiMnd0Y21Wc1lYUnBkbVVnVlZKTUtTNWNiaUFnTHk4Z1VrWkRJRE01T0RZZ1pHVm1hVzVsY3lCelkyaGxiV1VnYm1GdFpTQmhjeUJoSUhObGNYVmxibU5sSUc5bUlHTm9ZWEpoWTNSbGNuTWdZbVZuYVc1dWFXNW5JSGRwZEdnZ1lTQnNaWFIwWlhJZ1lXNWtJR1p2Ykd4dmQyVmtYRzRnSUM4dklHSjVJR0Z1ZVNCamIyMWlhVzVoZEdsdmJpQnZaaUJzWlhSMFpYSnpMQ0JrYVdkcGRITXNJSEJzZFhNc0lIQmxjbWx2WkN3Z2IzSWdhSGx3YUdWdUxseHVJQ0J5WlhSMWNtNGdMMTRvVzJFdGVsMWJZUzE2WEZ4a1hGd3JYRnd0WEZ3dVhTbzZLVDljWEM5Y1hDOHZhUzUwWlhOMEtIVnliQ2s3WEc1OU8xeHVJaXdpSjNWelpTQnpkSEpwWTNRbk8xeHVYRzUyWVhJZ2RYUnBiSE1nUFNCeVpYRjFhWEpsS0NjdUx5NHVMM1YwYVd4ekp5azdYRzVjYm0xdlpIVnNaUzVsZUhCdmNuUnpJRDBnS0Z4dUlDQjFkR2xzY3k1cGMxTjBZVzVrWVhKa1FuSnZkM05sY2tWdWRpZ3BJRDljYmx4dUlDQXZMeUJUZEdGdVpHRnlaQ0JpY205M2MyVnlJR1Z1ZG5NZ2FHRjJaU0JtZFd4c0lITjFjSEJ2Y25RZ2IyWWdkR2hsSUVGUVNYTWdibVZsWkdWa0lIUnZJSFJsYzNSY2JpQWdMeThnZDJobGRHaGxjaUIwYUdVZ2NtVnhkV1Z6ZENCVlVrd2dhWE1nYjJZZ2RHaGxJSE5oYldVZ2IzSnBaMmx1SUdGeklHTjFjbkpsYm5RZ2JHOWpZWFJwYjI0dVhHNGdJQ2htZFc1amRHbHZiaUJ6ZEdGdVpHRnlaRUp5YjNkelpYSkZibllvS1NCN1hHNGdJQ0FnZG1GeUlHMXphV1VnUFNBdktHMXphV1Y4ZEhKcFpHVnVkQ2t2YVM1MFpYTjBLRzVoZG1sbllYUnZjaTUxYzJWeVFXZGxiblFwTzF4dUlDQWdJSFpoY2lCMWNteFFZWEp6YVc1blRtOWtaU0E5SUdSdlkzVnRaVzUwTG1OeVpXRjBaVVZzWlcxbGJuUW9KMkVuS1R0Y2JpQWdJQ0IyWVhJZ2IzSnBaMmx1VlZKTU8xeHVYRzRnSUNBZ0x5b3FYRzRnSUNBZ0tpQlFZWEp6WlNCaElGVlNUQ0IwYnlCa2FYTmpiM1psY2lCcGRDZHpJR052YlhCdmJtVnVkSE5jYmlBZ0lDQXFYRzRnSUNBZ0tpQkFjR0Z5WVcwZ2UxTjBjbWx1WjMwZ2RYSnNJRlJvWlNCVlVrd2dkRzhnWW1VZ2NHRnljMlZrWEc0Z0lDQWdLaUJBY21WMGRYSnVjeUI3VDJKcVpXTjBmVnh1SUNBZ0lDb3ZYRzRnSUNBZ1puVnVZM1JwYjI0Z2NtVnpiMngyWlZWU1RDaDFjbXdwSUh0Y2JpQWdJQ0FnSUhaaGNpQm9jbVZtSUQwZ2RYSnNPMXh1WEc0Z0lDQWdJQ0JwWmlBb2JYTnBaU2tnZTF4dUlDQWdJQ0FnSUNBdkx5QkpSU0J1WldWa2N5QmhkSFJ5YVdKMWRHVWdjMlYwSUhSM2FXTmxJSFJ2SUc1dmNtMWhiR2w2WlNCd2NtOXdaWEowYVdWelhHNGdJQ0FnSUNBZ0lIVnliRkJoY25OcGJtZE9iMlJsTG5ObGRFRjBkSEpwWW5WMFpTZ25hSEpsWmljc0lHaHlaV1lwTzF4dUlDQWdJQ0FnSUNCb2NtVm1JRDBnZFhKc1VHRnljMmx1WjA1dlpHVXVhSEpsWmp0Y2JpQWdJQ0FnSUgxY2JseHVJQ0FnSUNBZ2RYSnNVR0Z5YzJsdVowNXZaR1V1YzJWMFFYUjBjbWxpZFhSbEtDZG9jbVZtSnl3Z2FISmxaaWs3WEc1Y2JpQWdJQ0FnSUM4dklIVnliRkJoY25OcGJtZE9iMlJsSUhCeWIzWnBaR1Z6SUhSb1pTQlZjbXhWZEdsc2N5QnBiblJsY21aaFkyVWdMU0JvZEhSd09pOHZkWEpzTG5Od1pXTXVkMmhoZEhkbkxtOXlaeThqZFhKc2RYUnBiSE5jYmlBZ0lDQWdJSEpsZEhWeWJpQjdYRzRnSUNBZ0lDQWdJR2h5WldZNklIVnliRkJoY25OcGJtZE9iMlJsTG1oeVpXWXNYRzRnSUNBZ0lDQWdJSEJ5YjNSdlkyOXNPaUIxY214UVlYSnphVzVuVG05a1pTNXdjbTkwYjJOdmJDQS9JSFZ5YkZCaGNuTnBibWRPYjJSbExuQnliM1J2WTI5c0xuSmxjR3hoWTJVb0x6b2tMeXdnSnljcElEb2dKeWNzWEc0Z0lDQWdJQ0FnSUdodmMzUTZJSFZ5YkZCaGNuTnBibWRPYjJSbExtaHZjM1FzWEc0Z0lDQWdJQ0FnSUhObFlYSmphRG9nZFhKc1VHRnljMmx1WjA1dlpHVXVjMlZoY21Ob0lEOGdkWEpzVUdGeWMybHVaMDV2WkdVdWMyVmhjbU5vTG5KbGNHeGhZMlVvTDE1Y1hEOHZMQ0FuSnlrZ09pQW5KeXhjYmlBZ0lDQWdJQ0FnYUdGemFEb2dkWEpzVUdGeWMybHVaMDV2WkdVdWFHRnphQ0EvSUhWeWJGQmhjbk5wYm1kT2IyUmxMbWhoYzJndWNtVndiR0ZqWlNndlhpTXZMQ0FuSnlrZ09pQW5KeXhjYmlBZ0lDQWdJQ0FnYUc5emRHNWhiV1U2SUhWeWJGQmhjbk5wYm1kT2IyUmxMbWh2YzNSdVlXMWxMRnh1SUNBZ0lDQWdJQ0J3YjNKME9pQjFjbXhRWVhKemFXNW5UbTlrWlM1d2IzSjBMRnh1SUNBZ0lDQWdJQ0J3WVhSb2JtRnRaVG9nS0hWeWJGQmhjbk5wYm1kT2IyUmxMbkJoZEdodVlXMWxMbU5vWVhKQmRDZ3dLU0E5UFQwZ0p5OG5LU0EvWEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCMWNteFFZWEp6YVc1blRtOWtaUzV3WVhSb2JtRnRaU0E2WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBbkx5Y2dLeUIxY214UVlYSnphVzVuVG05a1pTNXdZWFJvYm1GdFpWeHVJQ0FnSUNBZ2ZUdGNiaUFnSUNCOVhHNWNiaUFnSUNCdmNtbG5hVzVWVWt3Z1BTQnlaWE52YkhabFZWSk1LSGRwYm1SdmR5NXNiMk5oZEdsdmJpNW9jbVZtS1R0Y2JseHVJQ0FnSUM4cUtseHVJQ0FnSUNvZ1JHVjBaWEp0YVc1bElHbG1JR0VnVlZKTUlITm9ZWEpsY3lCMGFHVWdjMkZ0WlNCdmNtbG5hVzRnWVhNZ2RHaGxJR04xY25KbGJuUWdiRzlqWVhScGIyNWNiaUFnSUNBcVhHNGdJQ0FnS2lCQWNHRnlZVzBnZTFOMGNtbHVaMzBnY21WeGRXVnpkRlZTVENCVWFHVWdWVkpNSUhSdklIUmxjM1JjYmlBZ0lDQXFJRUJ5WlhSMWNtNXpJSHRpYjI5c1pXRnVmU0JVY25WbElHbG1JRlZTVENCemFHRnlaWE1nZEdobElITmhiV1VnYjNKcFoybHVMQ0J2ZEdobGNuZHBjMlVnWm1Gc2MyVmNiaUFnSUNBcUwxeHVJQ0FnSUhKbGRIVnliaUJtZFc1amRHbHZiaUJwYzFWU1RGTmhiV1ZQY21sbmFXNG9jbVZ4ZFdWemRGVlNUQ2tnZTF4dUlDQWdJQ0FnZG1GeUlIQmhjbk5sWkNBOUlDaDFkR2xzY3k1cGMxTjBjbWx1WnloeVpYRjFaWE4wVlZKTUtTa2dQeUJ5WlhOdmJIWmxWVkpNS0hKbGNYVmxjM1JWVWt3cElEb2djbVZ4ZFdWemRGVlNURHRjYmlBZ0lDQWdJSEpsZEhWeWJpQW9jR0Z5YzJWa0xuQnliM1J2WTI5c0lEMDlQU0J2Y21sbmFXNVZVa3d1Y0hKdmRHOWpiMndnSmlaY2JpQWdJQ0FnSUNBZ0lDQWdJSEJoY25ObFpDNW9iM04wSUQwOVBTQnZjbWxuYVc1VlVrd3VhRzl6ZENrN1hHNGdJQ0FnZlR0Y2JpQWdmU2tvS1NBNlhHNWNiaUFnTHk4Z1RtOXVJSE4wWVc1a1lYSmtJR0p5YjNkelpYSWdaVzUyY3lBb2QyVmlJSGR2Y210bGNuTXNJSEpsWVdOMExXNWhkR2wyWlNrZ2JHRmpheUJ1WldWa1pXUWdjM1Z3Y0c5eWRDNWNiaUFnS0daMWJtTjBhVzl1SUc1dmJsTjBZVzVrWVhKa1FuSnZkM05sY2tWdWRpZ3BJSHRjYmlBZ0lDQnlaWFIxY200Z1puVnVZM1JwYjI0Z2FYTlZVa3hUWVcxbFQzSnBaMmx1S0NrZ2UxeHVJQ0FnSUNBZ2NtVjBkWEp1SUhSeWRXVTdYRzRnSUNBZ2ZUdGNiaUFnZlNrb0tWeHVLVHRjYmlJc0lpZDFjMlVnYzNSeWFXTjBKenRjYmx4dWRtRnlJSFYwYVd4eklEMGdjbVZ4ZFdseVpTZ25MaTR2ZFhScGJITW5LVHRjYmx4dWJXOWtkV3hsTG1WNGNHOXlkSE1nUFNCbWRXNWpkR2x2YmlCdWIzSnRZV3hwZW1WSVpXRmtaWEpPWVcxbEtHaGxZV1JsY25Nc0lHNXZjbTFoYkdsNlpXUk9ZVzFsS1NCN1hHNGdJSFYwYVd4ekxtWnZja1ZoWTJnb2FHVmhaR1Z5Y3l3Z1puVnVZM1JwYjI0Z2NISnZZMlZ6YzBobFlXUmxjaWgyWVd4MVpTd2dibUZ0WlNrZ2UxeHVJQ0FnSUdsbUlDaHVZVzFsSUNFOVBTQnViM0p0WVd4cGVtVmtUbUZ0WlNBbUppQnVZVzFsTG5SdlZYQndaWEpEWVhObEtDa2dQVDA5SUc1dmNtMWhiR2w2WldST1lXMWxMblJ2VlhCd1pYSkRZWE5sS0NrcElIdGNiaUFnSUNBZ0lHaGxZV1JsY25OYmJtOXliV0ZzYVhwbFpFNWhiV1ZkSUQwZ2RtRnNkV1U3WEc0Z0lDQWdJQ0JrWld4bGRHVWdhR1ZoWkdWeWMxdHVZVzFsWFR0Y2JpQWdJQ0I5WEc0Z0lIMHBPMXh1ZlR0Y2JpSXNJaWQxYzJVZ2MzUnlhV04wSnp0Y2JseHVkbUZ5SUhWMGFXeHpJRDBnY21WeGRXbHlaU2duTGk4dUxpOTFkR2xzY3ljcE8xeHVYRzR2THlCSVpXRmtaWEp6SUhkb2IzTmxJR1IxY0d4cFkyRjBaWE1nWVhKbElHbG5ibTl5WldRZ1lua2dibTlrWlZ4dUx5OGdZeTVtTGlCb2RIUndjem92TDI1dlpHVnFjeTV2Y21jdllYQnBMMmgwZEhBdWFIUnRiQ05vZEhSd1gyMWxjM05oWjJWZmFHVmhaR1Z5YzF4dWRtRnlJR2xuYm05eVpVUjFjR3hwWTJGMFpVOW1JRDBnVzF4dUlDQW5ZV2RsSnl3Z0oyRjFkR2h2Y21sNllYUnBiMjRuTENBblkyOXVkR1Z1ZEMxc1pXNW5kR2duTENBblkyOXVkR1Z1ZEMxMGVYQmxKeXdnSjJWMFlXY25MRnh1SUNBblpYaHdhWEpsY3ljc0lDZG1jbTl0Snl3Z0oyaHZjM1FuTENBbmFXWXRiVzlrYVdacFpXUXRjMmx1WTJVbkxDQW5hV1l0ZFc1dGIyUnBabWxsWkMxemFXNWpaU2NzWEc0Z0lDZHNZWE4wTFcxdlpHbG1hV1ZrSnl3Z0oyeHZZMkYwYVc5dUp5d2dKMjFoZUMxbWIzSjNZWEprY3ljc0lDZHdjbTk0ZVMxaGRYUm9iM0pwZW1GMGFXOXVKeXhjYmlBZ0ozSmxabVZ5WlhJbkxDQW5jbVYwY25rdFlXWjBaWEluTENBbmRYTmxjaTFoWjJWdWRDZGNibDA3WEc1Y2JpOHFLbHh1SUNvZ1VHRnljMlVnYUdWaFpHVnljeUJwYm5SdklHRnVJRzlpYW1WamRGeHVJQ3BjYmlBcUlHQmdZRnh1SUNvZ1JHRjBaVG9nVjJWa0xDQXlOeUJCZFdjZ01qQXhOQ0F3T0RvMU9EbzBPU0JIVFZSY2JpQXFJRU52Ym5SbGJuUXRWSGx3WlRvZ1lYQndiR2xqWVhScGIyNHZhbk52Ymx4dUlDb2dRMjl1Ym1WamRHbHZiam9nYTJWbGNDMWhiR2wyWlZ4dUlDb2dWSEpoYm5ObVpYSXRSVzVqYjJScGJtYzZJR05vZFc1clpXUmNiaUFxSUdCZ1lGeHVJQ3BjYmlBcUlFQndZWEpoYlNCN1UzUnlhVzVuZlNCb1pXRmtaWEp6SUVobFlXUmxjbk1nYm1WbFpHbHVaeUIwYnlCaVpTQndZWEp6WldSY2JpQXFJRUJ5WlhSMWNtNXpJSHRQWW1wbFkzUjlJRWhsWVdSbGNuTWdjR0Z5YzJWa0lHbHVkRzhnWVc0Z2IySnFaV04wWEc0Z0tpOWNibTF2WkhWc1pTNWxlSEJ2Y25SeklEMGdablZ1WTNScGIyNGdjR0Z5YzJWSVpXRmtaWEp6S0dobFlXUmxjbk1wSUh0Y2JpQWdkbUZ5SUhCaGNuTmxaQ0E5SUh0OU8xeHVJQ0IyWVhJZ2EyVjVPMXh1SUNCMllYSWdkbUZzTzF4dUlDQjJZWElnYVR0Y2JseHVJQ0JwWmlBb0lXaGxZV1JsY25NcElIc2djbVYwZFhKdUlIQmhjbk5sWkRzZ2ZWeHVYRzRnSUhWMGFXeHpMbVp2Y2tWaFkyZ29hR1ZoWkdWeWN5NXpjR3hwZENnblhGeHVKeWtzSUdaMWJtTjBhVzl1SUhCaGNuTmxjaWhzYVc1bEtTQjdYRzRnSUNBZ2FTQTlJR3hwYm1VdWFXNWtaWGhQWmlnbk9pY3BPMXh1SUNBZ0lHdGxlU0E5SUhWMGFXeHpMblJ5YVcwb2JHbHVaUzV6ZFdKemRISW9NQ3dnYVNrcExuUnZURzkzWlhKRFlYTmxLQ2s3WEc0Z0lDQWdkbUZzSUQwZ2RYUnBiSE11ZEhKcGJTaHNhVzVsTG5OMVluTjBjaWhwSUNzZ01Ta3BPMXh1WEc0Z0lDQWdhV1lnS0d0bGVTa2dlMXh1SUNBZ0lDQWdhV1lnS0hCaGNuTmxaRnRyWlhsZElDWW1JR2xuYm05eVpVUjFjR3hwWTJGMFpVOW1MbWx1WkdWNFQyWW9hMlY1S1NBK1BTQXdLU0I3WEc0Z0lDQWdJQ0FnSUhKbGRIVnlianRjYmlBZ0lDQWdJSDFjYmlBZ0lDQWdJR2xtSUNoclpYa2dQVDA5SUNkelpYUXRZMjl2YTJsbEp5a2dlMXh1SUNBZ0lDQWdJQ0J3WVhKelpXUmJhMlY1WFNBOUlDaHdZWEp6WldSYmEyVjVYU0EvSUhCaGNuTmxaRnRyWlhsZElEb2dXMTBwTG1OdmJtTmhkQ2hiZG1Gc1hTazdYRzRnSUNBZ0lDQjlJR1ZzYzJVZ2UxeHVJQ0FnSUNBZ0lDQndZWEp6WldSYmEyVjVYU0E5SUhCaGNuTmxaRnRyWlhsZElEOGdjR0Z5YzJWa1cydGxlVjBnS3lBbkxDQW5JQ3NnZG1Gc0lEb2dkbUZzTzF4dUlDQWdJQ0FnZlZ4dUlDQWdJSDFjYmlBZ2ZTazdYRzVjYmlBZ2NtVjBkWEp1SUhCaGNuTmxaRHRjYm4wN1hHNGlMQ0luZFhObElITjBjbWxqZENjN1hHNWNiaThxS2x4dUlDb2dVM2x1ZEdGamRHbGpJSE4xWjJGeUlHWnZjaUJwYm5admEybHVaeUJoSUdaMWJtTjBhVzl1SUdGdVpDQmxlSEJoYm1ScGJtY2dZVzRnWVhKeVlYa2dabTl5SUdGeVozVnRaVzUwY3k1Y2JpQXFYRzRnS2lCRGIyMXRiMjRnZFhObElHTmhjMlVnZDI5MWJHUWdZbVVnZEc4Z2RYTmxJR0JHZFc1amRHbHZiaTV3Y205MGIzUjVjR1V1WVhCd2JIbGdMbHh1SUNwY2JpQXFJQ0JnWUdCcWMxeHVJQ29nSUdaMWJtTjBhVzl1SUdZb2VDd2dlU3dnZWlrZ2UzMWNiaUFxSUNCMllYSWdZWEpuY3lBOUlGc3hMQ0F5TENBelhUdGNiaUFxSUNCbUxtRndjR3g1S0c1MWJHd3NJR0Z5WjNNcE8xeHVJQ29nSUdCZ1lGeHVJQ3BjYmlBcUlGZHBkR2dnWUhOd2NtVmhaR0FnZEdocGN5QmxlR0Z0Y0d4bElHTmhiaUJpWlNCeVpTMTNjbWwwZEdWdUxseHVJQ3BjYmlBcUlDQmdZR0JxYzF4dUlDb2dJSE53Y21WaFpDaG1kVzVqZEdsdmJpaDRMQ0I1TENCNktTQjdmU2tvV3pFc0lESXNJRE5kS1R0Y2JpQXFJQ0JnWUdCY2JpQXFYRzRnS2lCQWNHRnlZVzBnZTBaMWJtTjBhVzl1ZlNCallXeHNZbUZqYTF4dUlDb2dRSEpsZEhWeWJuTWdlMFoxYm1OMGFXOXVmVnh1SUNvdlhHNXRiMlIxYkdVdVpYaHdiM0owY3lBOUlHWjFibU4wYVc5dUlITndjbVZoWkNoallXeHNZbUZqYXlrZ2UxeHVJQ0J5WlhSMWNtNGdablZ1WTNScGIyNGdkM0poY0NoaGNuSXBJSHRjYmlBZ0lDQnlaWFIxY200Z1kyRnNiR0poWTJzdVlYQndiSGtvYm5Wc2JDd2dZWEp5S1R0Y2JpQWdmVHRjYm4wN1hHNGlMQ0luZFhObElITjBjbWxqZENjN1hHNWNiblpoY2lCaWFXNWtJRDBnY21WeGRXbHlaU2duTGk5b1pXeHdaWEp6TDJKcGJtUW5LVHRjYm5aaGNpQnBjMEoxWm1abGNpQTlJSEpsY1hWcGNtVW9KMmx6TFdKMVptWmxjaWNwTzF4dVhHNHZLbWRzYjJKaGJDQjBiMU4wY21sdVp6cDBjblZsS2k5Y2JseHVMeThnZFhScGJITWdhWE1nWVNCc2FXSnlZWEo1SUc5bUlHZGxibVZ5YVdNZ2FHVnNjR1Z5SUdaMWJtTjBhVzl1Y3lCdWIyNHRjM0JsWTJsbWFXTWdkRzhnWVhocGIzTmNibHh1ZG1GeUlIUnZVM1J5YVc1bklEMGdUMkpxWldOMExuQnliM1J2ZEhsd1pTNTBiMU4wY21sdVp6dGNibHh1THlvcVhHNGdLaUJFWlhSbGNtMXBibVVnYVdZZ1lTQjJZV3gxWlNCcGN5QmhiaUJCY25KaGVWeHVJQ3BjYmlBcUlFQndZWEpoYlNCN1QySnFaV04wZlNCMllXd2dWR2hsSUhaaGJIVmxJSFJ2SUhSbGMzUmNiaUFxSUVCeVpYUjFjbTV6SUh0aWIyOXNaV0Z1ZlNCVWNuVmxJR2xtSUhaaGJIVmxJR2x6SUdGdUlFRnljbUY1TENCdmRHaGxjbmRwYzJVZ1ptRnNjMlZjYmlBcUwxeHVablZ1WTNScGIyNGdhWE5CY25KaGVTaDJZV3dwSUh0Y2JpQWdjbVYwZFhKdUlIUnZVM1J5YVc1bkxtTmhiR3dvZG1Gc0tTQTlQVDBnSjF0dlltcGxZM1FnUVhKeVlYbGRKenRjYm4xY2JseHVMeW9xWEc0Z0tpQkVaWFJsY20xcGJtVWdhV1lnWVNCMllXeDFaU0JwY3lCaGJpQkJjbkpoZVVKMVptWmxjbHh1SUNwY2JpQXFJRUJ3WVhKaGJTQjdUMkpxWldOMGZTQjJZV3dnVkdobElIWmhiSFZsSUhSdklIUmxjM1JjYmlBcUlFQnlaWFIxY201eklIdGliMjlzWldGdWZTQlVjblZsSUdsbUlIWmhiSFZsSUdseklHRnVJRUZ5Y21GNVFuVm1abVZ5TENCdmRHaGxjbmRwYzJVZ1ptRnNjMlZjYmlBcUwxeHVablZ1WTNScGIyNGdhWE5CY25KaGVVSjFabVpsY2loMllXd3BJSHRjYmlBZ2NtVjBkWEp1SUhSdlUzUnlhVzVuTG1OaGJHd29kbUZzS1NBOVBUMGdKMXR2WW1wbFkzUWdRWEp5WVhsQ2RXWm1aWEpkSnp0Y2JuMWNibHh1THlvcVhHNGdLaUJFWlhSbGNtMXBibVVnYVdZZ1lTQjJZV3gxWlNCcGN5QmhJRVp2Y20xRVlYUmhYRzRnS2x4dUlDb2dRSEJoY21GdElIdFBZbXBsWTNSOUlIWmhiQ0JVYUdVZ2RtRnNkV1VnZEc4Z2RHVnpkRnh1SUNvZ1FISmxkSFZ5Ym5NZ2UySnZiMnhsWVc1OUlGUnlkV1VnYVdZZ2RtRnNkV1VnYVhNZ1lXNGdSbTl5YlVSaGRHRXNJRzkwYUdWeWQybHpaU0JtWVd4elpWeHVJQ292WEc1bWRXNWpkR2x2YmlCcGMwWnZjbTFFWVhSaEtIWmhiQ2tnZTF4dUlDQnlaWFIxY200Z0tIUjVjR1Z2WmlCR2IzSnRSR0YwWVNBaFBUMGdKM1Z1WkdWbWFXNWxaQ2NwSUNZbUlDaDJZV3dnYVc1emRHRnVZMlZ2WmlCR2IzSnRSR0YwWVNrN1hHNTlYRzVjYmk4cUtseHVJQ29nUkdWMFpYSnRhVzVsSUdsbUlHRWdkbUZzZFdVZ2FYTWdZU0IyYVdWM0lHOXVJR0Z1SUVGeWNtRjVRblZtWm1WeVhHNGdLbHh1SUNvZ1FIQmhjbUZ0SUh0UFltcGxZM1I5SUhaaGJDQlVhR1VnZG1Gc2RXVWdkRzhnZEdWemRGeHVJQ29nUUhKbGRIVnlibk1nZTJKdmIyeGxZVzU5SUZSeWRXVWdhV1lnZG1Gc2RXVWdhWE1nWVNCMmFXVjNJRzl1SUdGdUlFRnljbUY1UW5WbVptVnlMQ0J2ZEdobGNuZHBjMlVnWm1Gc2MyVmNiaUFxTDF4dVpuVnVZM1JwYjI0Z2FYTkJjbkpoZVVKMVptWmxjbFpwWlhjb2RtRnNLU0I3WEc0Z0lIWmhjaUJ5WlhOMWJIUTdYRzRnSUdsbUlDZ29kSGx3Wlc5bUlFRnljbUY1UW5WbVptVnlJQ0U5UFNBbmRXNWtaV1pwYm1Wa0p5a2dKaVlnS0VGeWNtRjVRblZtWm1WeUxtbHpWbWxsZHlrcElIdGNiaUFnSUNCeVpYTjFiSFFnUFNCQmNuSmhlVUoxWm1abGNpNXBjMVpwWlhjb2RtRnNLVHRjYmlBZ2ZTQmxiSE5sSUh0Y2JpQWdJQ0J5WlhOMWJIUWdQU0FvZG1Gc0tTQW1KaUFvZG1Gc0xtSjFabVpsY2lrZ0ppWWdLSFpoYkM1aWRXWm1aWElnYVc1emRHRnVZMlZ2WmlCQmNuSmhlVUoxWm1abGNpazdYRzRnSUgxY2JpQWdjbVYwZFhKdUlISmxjM1ZzZER0Y2JuMWNibHh1THlvcVhHNGdLaUJFWlhSbGNtMXBibVVnYVdZZ1lTQjJZV3gxWlNCcGN5QmhJRk4wY21sdVoxeHVJQ3BjYmlBcUlFQndZWEpoYlNCN1QySnFaV04wZlNCMllXd2dWR2hsSUhaaGJIVmxJSFJ2SUhSbGMzUmNiaUFxSUVCeVpYUjFjbTV6SUh0aWIyOXNaV0Z1ZlNCVWNuVmxJR2xtSUhaaGJIVmxJR2x6SUdFZ1UzUnlhVzVuTENCdmRHaGxjbmRwYzJVZ1ptRnNjMlZjYmlBcUwxeHVablZ1WTNScGIyNGdhWE5UZEhKcGJtY29kbUZzS1NCN1hHNGdJSEpsZEhWeWJpQjBlWEJsYjJZZ2RtRnNJRDA5UFNBbmMzUnlhVzVuSnp0Y2JuMWNibHh1THlvcVhHNGdLaUJFWlhSbGNtMXBibVVnYVdZZ1lTQjJZV3gxWlNCcGN5QmhJRTUxYldKbGNseHVJQ3BjYmlBcUlFQndZWEpoYlNCN1QySnFaV04wZlNCMllXd2dWR2hsSUhaaGJIVmxJSFJ2SUhSbGMzUmNiaUFxSUVCeVpYUjFjbTV6SUh0aWIyOXNaV0Z1ZlNCVWNuVmxJR2xtSUhaaGJIVmxJR2x6SUdFZ1RuVnRZbVZ5TENCdmRHaGxjbmRwYzJVZ1ptRnNjMlZjYmlBcUwxeHVablZ1WTNScGIyNGdhWE5PZFcxaVpYSW9kbUZzS1NCN1hHNGdJSEpsZEhWeWJpQjBlWEJsYjJZZ2RtRnNJRDA5UFNBbmJuVnRZbVZ5Snp0Y2JuMWNibHh1THlvcVhHNGdLaUJFWlhSbGNtMXBibVVnYVdZZ1lTQjJZV3gxWlNCcGN5QjFibVJsWm1sdVpXUmNiaUFxWEc0Z0tpQkFjR0Z5WVcwZ2UwOWlhbVZqZEgwZ2RtRnNJRlJvWlNCMllXeDFaU0IwYnlCMFpYTjBYRzRnS2lCQWNtVjBkWEp1Y3lCN1ltOXZiR1ZoYm4wZ1ZISjFaU0JwWmlCMGFHVWdkbUZzZFdVZ2FYTWdkVzVrWldacGJtVmtMQ0J2ZEdobGNuZHBjMlVnWm1Gc2MyVmNiaUFxTDF4dVpuVnVZM1JwYjI0Z2FYTlZibVJsWm1sdVpXUW9kbUZzS1NCN1hHNGdJSEpsZEhWeWJpQjBlWEJsYjJZZ2RtRnNJRDA5UFNBbmRXNWtaV1pwYm1Wa0p6dGNibjFjYmx4dUx5b3FYRzRnS2lCRVpYUmxjbTFwYm1VZ2FXWWdZU0IyWVd4MVpTQnBjeUJoYmlCUFltcGxZM1JjYmlBcVhHNGdLaUJBY0dGeVlXMGdlMDlpYW1WamRIMGdkbUZzSUZSb1pTQjJZV3gxWlNCMGJ5QjBaWE4wWEc0Z0tpQkFjbVYwZFhKdWN5QjdZbTl2YkdWaGJuMGdWSEoxWlNCcFppQjJZV3gxWlNCcGN5QmhiaUJQWW1wbFkzUXNJRzkwYUdWeWQybHpaU0JtWVd4elpWeHVJQ292WEc1bWRXNWpkR2x2YmlCcGMwOWlhbVZqZENoMllXd3BJSHRjYmlBZ2NtVjBkWEp1SUhaaGJDQWhQVDBnYm5Wc2JDQW1KaUIwZVhCbGIyWWdkbUZzSUQwOVBTQW5iMkpxWldOMEp6dGNibjFjYmx4dUx5b3FYRzRnS2lCRVpYUmxjbTFwYm1VZ2FXWWdZU0IyWVd4MVpTQnBjeUJoSUVSaGRHVmNiaUFxWEc0Z0tpQkFjR0Z5WVcwZ2UwOWlhbVZqZEgwZ2RtRnNJRlJvWlNCMllXeDFaU0IwYnlCMFpYTjBYRzRnS2lCQWNtVjBkWEp1Y3lCN1ltOXZiR1ZoYm4wZ1ZISjFaU0JwWmlCMllXeDFaU0JwY3lCaElFUmhkR1VzSUc5MGFHVnlkMmx6WlNCbVlXeHpaVnh1SUNvdlhHNW1kVzVqZEdsdmJpQnBjMFJoZEdVb2RtRnNLU0I3WEc0Z0lISmxkSFZ5YmlCMGIxTjBjbWx1Wnk1allXeHNLSFpoYkNrZ1BUMDlJQ2RiYjJKcVpXTjBJRVJoZEdWZEp6dGNibjFjYmx4dUx5b3FYRzRnS2lCRVpYUmxjbTFwYm1VZ2FXWWdZU0IyWVd4MVpTQnBjeUJoSUVacGJHVmNiaUFxWEc0Z0tpQkFjR0Z5WVcwZ2UwOWlhbVZqZEgwZ2RtRnNJRlJvWlNCMllXeDFaU0IwYnlCMFpYTjBYRzRnS2lCQWNtVjBkWEp1Y3lCN1ltOXZiR1ZoYm4wZ1ZISjFaU0JwWmlCMllXeDFaU0JwY3lCaElFWnBiR1VzSUc5MGFHVnlkMmx6WlNCbVlXeHpaVnh1SUNvdlhHNW1kVzVqZEdsdmJpQnBjMFpwYkdVb2RtRnNLU0I3WEc0Z0lISmxkSFZ5YmlCMGIxTjBjbWx1Wnk1allXeHNLSFpoYkNrZ1BUMDlJQ2RiYjJKcVpXTjBJRVpwYkdWZEp6dGNibjFjYmx4dUx5b3FYRzRnS2lCRVpYUmxjbTFwYm1VZ2FXWWdZU0IyWVd4MVpTQnBjeUJoSUVKc2IySmNiaUFxWEc0Z0tpQkFjR0Z5WVcwZ2UwOWlhbVZqZEgwZ2RtRnNJRlJvWlNCMllXeDFaU0IwYnlCMFpYTjBYRzRnS2lCQWNtVjBkWEp1Y3lCN1ltOXZiR1ZoYm4wZ1ZISjFaU0JwWmlCMllXeDFaU0JwY3lCaElFSnNiMklzSUc5MGFHVnlkMmx6WlNCbVlXeHpaVnh1SUNvdlhHNW1kVzVqZEdsdmJpQnBjMEpzYjJJb2RtRnNLU0I3WEc0Z0lISmxkSFZ5YmlCMGIxTjBjbWx1Wnk1allXeHNLSFpoYkNrZ1BUMDlJQ2RiYjJKcVpXTjBJRUpzYjJKZEp6dGNibjFjYmx4dUx5b3FYRzRnS2lCRVpYUmxjbTFwYm1VZ2FXWWdZU0IyWVd4MVpTQnBjeUJoSUVaMWJtTjBhVzl1WEc0Z0tseHVJQ29nUUhCaGNtRnRJSHRQWW1wbFkzUjlJSFpoYkNCVWFHVWdkbUZzZFdVZ2RHOGdkR1Z6ZEZ4dUlDb2dRSEpsZEhWeWJuTWdlMkp2YjJ4bFlXNTlJRlJ5ZFdVZ2FXWWdkbUZzZFdVZ2FYTWdZU0JHZFc1amRHbHZiaXdnYjNSb1pYSjNhWE5sSUdaaGJITmxYRzRnS2k5Y2JtWjFibU4wYVc5dUlHbHpSblZ1WTNScGIyNG9kbUZzS1NCN1hHNGdJSEpsZEhWeWJpQjBiMU4wY21sdVp5NWpZV3hzS0haaGJDa2dQVDA5SUNkYmIySnFaV04wSUVaMWJtTjBhVzl1WFNjN1hHNTlYRzVjYmk4cUtseHVJQ29nUkdWMFpYSnRhVzVsSUdsbUlHRWdkbUZzZFdVZ2FYTWdZU0JUZEhKbFlXMWNiaUFxWEc0Z0tpQkFjR0Z5WVcwZ2UwOWlhbVZqZEgwZ2RtRnNJRlJvWlNCMllXeDFaU0IwYnlCMFpYTjBYRzRnS2lCQWNtVjBkWEp1Y3lCN1ltOXZiR1ZoYm4wZ1ZISjFaU0JwWmlCMllXeDFaU0JwY3lCaElGTjBjbVZoYlN3Z2IzUm9aWEozYVhObElHWmhiSE5sWEc0Z0tpOWNibVoxYm1OMGFXOXVJR2x6VTNSeVpXRnRLSFpoYkNrZ2UxeHVJQ0J5WlhSMWNtNGdhWE5QWW1wbFkzUW9kbUZzS1NBbUppQnBjMFoxYm1OMGFXOXVLSFpoYkM1d2FYQmxLVHRjYm4xY2JseHVMeW9xWEc0Z0tpQkVaWFJsY20xcGJtVWdhV1lnWVNCMllXeDFaU0JwY3lCaElGVlNURk5sWVhKamFGQmhjbUZ0Y3lCdlltcGxZM1JjYmlBcVhHNGdLaUJBY0dGeVlXMGdlMDlpYW1WamRIMGdkbUZzSUZSb1pTQjJZV3gxWlNCMGJ5QjBaWE4wWEc0Z0tpQkFjbVYwZFhKdWN5QjdZbTl2YkdWaGJuMGdWSEoxWlNCcFppQjJZV3gxWlNCcGN5QmhJRlZTVEZObFlYSmphRkJoY21GdGN5QnZZbXBsWTNRc0lHOTBhR1Z5ZDJselpTQm1ZV3h6WlZ4dUlDb3ZYRzVtZFc1amRHbHZiaUJwYzFWU1RGTmxZWEpqYUZCaGNtRnRjeWgyWVd3cElIdGNiaUFnY21WMGRYSnVJSFI1Y0dWdlppQlZVa3hUWldGeVkyaFFZWEpoYlhNZ0lUMDlJQ2QxYm1SbFptbHVaV1FuSUNZbUlIWmhiQ0JwYm5OMFlXNWpaVzltSUZWU1RGTmxZWEpqYUZCaGNtRnRjenRjYm4xY2JseHVMeW9xWEc0Z0tpQlVjbWx0SUdWNFkyVnpjeUIzYUdsMFpYTndZV05sSUc5bVppQjBhR1VnWW1WbmFXNXVhVzVuSUdGdVpDQmxibVFnYjJZZ1lTQnpkSEpwYm1kY2JpQXFYRzRnS2lCQWNHRnlZVzBnZTFOMGNtbHVaMzBnYzNSeUlGUm9aU0JUZEhKcGJtY2dkRzhnZEhKcGJWeHVJQ29nUUhKbGRIVnlibk1nZTFOMGNtbHVaMzBnVkdobElGTjBjbWx1WnlCbWNtVmxaQ0J2WmlCbGVHTmxjM01nZDJocGRHVnpjR0ZqWlZ4dUlDb3ZYRzVtZFc1amRHbHZiaUIwY21sdEtITjBjaWtnZTF4dUlDQnlaWFIxY200Z2MzUnlMbkpsY0d4aFkyVW9MMTVjWEhNcUx5d2dKeWNwTG5KbGNHeGhZMlVvTDF4Y2N5b2tMeXdnSnljcE8xeHVmVnh1WEc0dktpcGNiaUFxSUVSbGRHVnliV2x1WlNCcFppQjNaU2R5WlNCeWRXNXVhVzVuSUdsdUlHRWdjM1JoYm1SaGNtUWdZbkp2ZDNObGNpQmxiblpwY205dWJXVnVkRnh1SUNwY2JpQXFJRlJvYVhNZ1lXeHNiM2R6SUdGNGFXOXpJSFJ2SUhKMWJpQnBiaUJoSUhkbFlpQjNiM0pyWlhJc0lHRnVaQ0J5WldGamRDMXVZWFJwZG1VdVhHNGdLaUJDYjNSb0lHVnVkbWx5YjI1dFpXNTBjeUJ6ZFhCd2IzSjBJRmhOVEVoMGRIQlNaWEYxWlhOMExDQmlkWFFnYm05MElHWjFiR3g1SUhOMFlXNWtZWEprSUdkc2IySmhiSE11WEc0Z0tseHVJQ29nZDJWaUlIZHZjbXRsY25NNlhHNGdLaUFnZEhsd1pXOW1JSGRwYm1SdmR5QXRQaUIxYm1SbFptbHVaV1JjYmlBcUlDQjBlWEJsYjJZZ1pHOWpkVzFsYm5RZ0xUNGdkVzVrWldacGJtVmtYRzRnS2x4dUlDb2djbVZoWTNRdGJtRjBhWFpsT2x4dUlDb2dJRzVoZG1sbllYUnZjaTV3Y205a2RXTjBJQzArSUNkU1pXRmpkRTVoZEdsMlpTZGNiaUFxTDF4dVpuVnVZM1JwYjI0Z2FYTlRkR0Z1WkdGeVpFSnliM2R6WlhKRmJuWW9LU0I3WEc0Z0lHbG1JQ2gwZVhCbGIyWWdibUYyYVdkaGRHOXlJQ0U5UFNBbmRXNWtaV1pwYm1Wa0p5QW1KaUJ1WVhacFoyRjBiM0l1Y0hKdlpIVmpkQ0E5UFQwZ0oxSmxZV04wVG1GMGFYWmxKeWtnZTF4dUlDQWdJSEpsZEhWeWJpQm1ZV3h6WlR0Y2JpQWdmVnh1SUNCeVpYUjFjbTRnS0Z4dUlDQWdJSFI1Y0dWdlppQjNhVzVrYjNjZ0lUMDlJQ2QxYm1SbFptbHVaV1FuSUNZbVhHNGdJQ0FnZEhsd1pXOW1JR1J2WTNWdFpXNTBJQ0U5UFNBbmRXNWtaV1pwYm1Wa0oxeHVJQ0FwTzF4dWZWeHVYRzR2S2lwY2JpQXFJRWwwWlhKaGRHVWdiM1psY2lCaGJpQkJjbkpoZVNCdmNpQmhiaUJQWW1wbFkzUWdhVzUyYjJ0cGJtY2dZU0JtZFc1amRHbHZiaUJtYjNJZ1pXRmphQ0JwZEdWdExseHVJQ3BjYmlBcUlFbG1JR0J2WW1wZ0lHbHpJR0Z1SUVGeWNtRjVJR05oYkd4aVlXTnJJSGRwYkd3Z1ltVWdZMkZzYkdWa0lIQmhjM05wYm1kY2JpQXFJSFJvWlNCMllXeDFaU3dnYVc1a1pYZ3NJR0Z1WkNCamIyMXdiR1YwWlNCaGNuSmhlU0JtYjNJZ1pXRmphQ0JwZEdWdExseHVJQ3BjYmlBcUlFbG1JQ2R2WW1vbklHbHpJR0Z1SUU5aWFtVmpkQ0JqWVd4c1ltRmpheUIzYVd4c0lHSmxJR05oYkd4bFpDQndZWE56YVc1blhHNGdLaUIwYUdVZ2RtRnNkV1VzSUd0bGVTd2dZVzVrSUdOdmJYQnNaWFJsSUc5aWFtVmpkQ0JtYjNJZ1pXRmphQ0J3Y205d1pYSjBlUzVjYmlBcVhHNGdLaUJBY0dGeVlXMGdlMDlpYW1WamRIeEJjbkpoZVgwZ2IySnFJRlJvWlNCdlltcGxZM1FnZEc4Z2FYUmxjbUYwWlZ4dUlDb2dRSEJoY21GdElIdEdkVzVqZEdsdmJuMGdabTRnVkdobElHTmhiR3hpWVdOcklIUnZJR2x1ZG05clpTQm1iM0lnWldGamFDQnBkR1Z0WEc0Z0tpOWNibVoxYm1OMGFXOXVJR1p2Y2tWaFkyZ29iMkpxTENCbWJpa2dlMXh1SUNBdkx5QkViMjRuZENCaWIzUm9aWElnYVdZZ2JtOGdkbUZzZFdVZ2NISnZkbWxrWldSY2JpQWdhV1lnS0c5aWFpQTlQVDBnYm5Wc2JDQjhmQ0IwZVhCbGIyWWdiMkpxSUQwOVBTQW5kVzVrWldacGJtVmtKeWtnZTF4dUlDQWdJSEpsZEhWeWJqdGNiaUFnZlZ4dVhHNGdJQzh2SUVadmNtTmxJR0Z1SUdGeWNtRjVJR2xtSUc1dmRDQmhiSEpsWVdSNUlITnZiV1YwYUdsdVp5QnBkR1Z5WVdKc1pWeHVJQ0JwWmlBb2RIbHdaVzltSUc5aWFpQWhQVDBnSjI5aWFtVmpkQ2NwSUh0Y2JpQWdJQ0F2S21WemJHbHVkQ0J1Ynkxd1lYSmhiUzF5WldGemMybG5iam93S2k5Y2JpQWdJQ0J2WW1vZ1BTQmJiMkpxWFR0Y2JpQWdmVnh1WEc0Z0lHbG1JQ2hwYzBGeWNtRjVLRzlpYWlrcElIdGNiaUFnSUNBdkx5QkpkR1Z5WVhSbElHOTJaWElnWVhKeVlYa2dkbUZzZFdWelhHNGdJQ0FnWm05eUlDaDJZWElnYVNBOUlEQXNJR3dnUFNCdlltb3ViR1Z1WjNSb095QnBJRHdnYkRzZ2FTc3JLU0I3WEc0Z0lDQWdJQ0JtYmk1allXeHNLRzUxYkd3c0lHOWlhbHRwWFN3Z2FTd2diMkpxS1R0Y2JpQWdJQ0I5WEc0Z0lIMGdaV3h6WlNCN1hHNGdJQ0FnTHk4Z1NYUmxjbUYwWlNCdmRtVnlJRzlpYW1WamRDQnJaWGx6WEc0Z0lDQWdabTl5SUNoMllYSWdhMlY1SUdsdUlHOWlhaWtnZTF4dUlDQWdJQ0FnYVdZZ0tFOWlhbVZqZEM1d2NtOTBiM1I1Y0dVdWFHRnpUM2R1VUhKdmNHVnlkSGt1WTJGc2JDaHZZbW9zSUd0bGVTa3BJSHRjYmlBZ0lDQWdJQ0FnWm00dVkyRnNiQ2h1ZFd4c0xDQnZZbXBiYTJWNVhTd2dhMlY1TENCdlltb3BPMXh1SUNBZ0lDQWdmVnh1SUNBZ0lIMWNiaUFnZlZ4dWZWeHVYRzR2S2lwY2JpQXFJRUZqWTJWd2RITWdkbUZ5WVhKbmN5QmxlSEJsWTNScGJtY2daV0ZqYUNCaGNtZDFiV1Z1ZENCMGJ5QmlaU0JoYmlCdlltcGxZM1FzSUhSb1pXNWNiaUFxSUdsdGJYVjBZV0pzZVNCdFpYSm5aWE1nZEdobElIQnliM0JsY25ScFpYTWdiMllnWldGamFDQnZZbXBsWTNRZ1lXNWtJSEpsZEhWeWJuTWdjbVZ6ZFd4MExseHVJQ3BjYmlBcUlGZG9aVzRnYlhWc2RHbHdiR1VnYjJKcVpXTjBjeUJqYjI1MFlXbHVJSFJvWlNCellXMWxJR3RsZVNCMGFHVWdiR0YwWlhJZ2IySnFaV04wSUdsdVhHNGdLaUIwYUdVZ1lYSm5kVzFsYm5SeklHeHBjM1FnZDJsc2JDQjBZV3RsSUhCeVpXTmxaR1Z1WTJVdVhHNGdLbHh1SUNvZ1JYaGhiWEJzWlRwY2JpQXFYRzRnS2lCZ1lHQnFjMXh1SUNvZ2RtRnlJSEpsYzNWc2RDQTlJRzFsY21kbEtIdG1iMjg2SURFeU0zMHNJSHRtYjI4NklEUTFObjBwTzF4dUlDb2dZMjl1YzI5c1pTNXNiMmNvY21WemRXeDBMbVp2YnlrN0lDOHZJRzkxZEhCMWRITWdORFUyWEc0Z0tpQmdZR0JjYmlBcVhHNGdLaUJBY0dGeVlXMGdlMDlpYW1WamRIMGdiMkpxTVNCUFltcGxZM1FnZEc4Z2JXVnlaMlZjYmlBcUlFQnlaWFIxY201eklIdFBZbXBsWTNSOUlGSmxjM1ZzZENCdlppQmhiR3dnYldWeVoyVWdjSEp2Y0dWeWRHbGxjMXh1SUNvdlhHNW1kVzVqZEdsdmJpQnRaWEpuWlNndktpQnZZbW94TENCdlltb3lMQ0J2WW1vekxDQXVMaTRnS2k4cElIdGNiaUFnZG1GeUlISmxjM1ZzZENBOUlIdDlPMXh1SUNCbWRXNWpkR2x2YmlCaGMzTnBaMjVXWVd4MVpTaDJZV3dzSUd0bGVTa2dlMXh1SUNBZ0lHbG1JQ2gwZVhCbGIyWWdjbVZ6ZFd4MFcydGxlVjBnUFQwOUlDZHZZbXBsWTNRbklDWW1JSFI1Y0dWdlppQjJZV3dnUFQwOUlDZHZZbXBsWTNRbktTQjdYRzRnSUNBZ0lDQnlaWE4xYkhSYmEyVjVYU0E5SUcxbGNtZGxLSEpsYzNWc2RGdHJaWGxkTENCMllXd3BPMXh1SUNBZ0lIMGdaV3h6WlNCN1hHNGdJQ0FnSUNCeVpYTjFiSFJiYTJWNVhTQTlJSFpoYkR0Y2JpQWdJQ0I5WEc0Z0lIMWNibHh1SUNCbWIzSWdLSFpoY2lCcElEMGdNQ3dnYkNBOUlHRnlaM1Z0Wlc1MGN5NXNaVzVuZEdnN0lHa2dQQ0JzT3lCcEt5c3BJSHRjYmlBZ0lDQm1iM0pGWVdOb0tHRnlaM1Z0Wlc1MGMxdHBYU3dnWVhOemFXZHVWbUZzZFdVcE8xeHVJQ0I5WEc0Z0lISmxkSFZ5YmlCeVpYTjFiSFE3WEc1OVhHNWNiaThxS2x4dUlDb2dSWGgwWlc1a2N5QnZZbXBsWTNRZ1lTQmllU0J0ZFhSaFlteDVJR0ZrWkdsdVp5QjBieUJwZENCMGFHVWdjSEp2Y0dWeWRHbGxjeUJ2WmlCdlltcGxZM1FnWWk1Y2JpQXFYRzRnS2lCQWNHRnlZVzBnZTA5aWFtVmpkSDBnWVNCVWFHVWdiMkpxWldOMElIUnZJR0psSUdWNGRHVnVaR1ZrWEc0Z0tpQkFjR0Z5WVcwZ2UwOWlhbVZqZEgwZ1lpQlVhR1VnYjJKcVpXTjBJSFJ2SUdOdmNIa2djSEp2Y0dWeWRHbGxjeUJtY205dFhHNGdLaUJBY0dGeVlXMGdlMDlpYW1WamRIMGdkR2hwYzBGeVp5QlVhR1VnYjJKcVpXTjBJSFJ2SUdKcGJtUWdablZ1WTNScGIyNGdkRzljYmlBcUlFQnlaWFIxY200Z2UwOWlhbVZqZEgwZ1ZHaGxJSEpsYzNWc2RHbHVaeUIyWVd4MVpTQnZaaUJ2WW1wbFkzUWdZVnh1SUNvdlhHNW1kVzVqZEdsdmJpQmxlSFJsYm1Rb1lTd2dZaXdnZEdocGMwRnlaeWtnZTF4dUlDQm1iM0pGWVdOb0tHSXNJR1oxYm1OMGFXOXVJR0Z6YzJsbmJsWmhiSFZsS0haaGJDd2dhMlY1S1NCN1hHNGdJQ0FnYVdZZ0tIUm9hWE5CY21jZ0ppWWdkSGx3Wlc5bUlIWmhiQ0E5UFQwZ0oyWjFibU4wYVc5dUp5a2dlMXh1SUNBZ0lDQWdZVnRyWlhsZElEMGdZbWx1WkNoMllXd3NJSFJvYVhOQmNtY3BPMXh1SUNBZ0lIMGdaV3h6WlNCN1hHNGdJQ0FnSUNCaFcydGxlVjBnUFNCMllXdzdYRzRnSUNBZ2ZWeHVJQ0I5S1R0Y2JpQWdjbVYwZFhKdUlHRTdYRzU5WEc1Y2JtMXZaSFZzWlM1bGVIQnZjblJ6SUQwZ2UxeHVJQ0JwYzBGeWNtRjVPaUJwYzBGeWNtRjVMRnh1SUNCcGMwRnljbUY1UW5WbVptVnlPaUJwYzBGeWNtRjVRblZtWm1WeUxGeHVJQ0JwYzBKMVptWmxjam9nYVhOQ2RXWm1aWElzWEc0Z0lHbHpSbTl5YlVSaGRHRTZJR2x6Um05eWJVUmhkR0VzWEc0Z0lHbHpRWEp5WVhsQ2RXWm1aWEpXYVdWM09pQnBjMEZ5Y21GNVFuVm1abVZ5Vm1sbGR5eGNiaUFnYVhOVGRISnBibWM2SUdselUzUnlhVzVuTEZ4dUlDQnBjMDUxYldKbGNqb2dhWE5PZFcxaVpYSXNYRzRnSUdselQySnFaV04wT2lCcGMwOWlhbVZqZEN4Y2JpQWdhWE5WYm1SbFptbHVaV1E2SUdselZXNWtaV1pwYm1Wa0xGeHVJQ0JwYzBSaGRHVTZJR2x6UkdGMFpTeGNiaUFnYVhOR2FXeGxPaUJwYzBacGJHVXNYRzRnSUdselFteHZZam9nYVhOQ2JHOWlMRnh1SUNCcGMwWjFibU4wYVc5dU9pQnBjMFoxYm1OMGFXOXVMRnh1SUNCcGMxTjBjbVZoYlRvZ2FYTlRkSEpsWVcwc1hHNGdJR2x6VlZKTVUyVmhjbU5vVUdGeVlXMXpPaUJwYzFWU1RGTmxZWEpqYUZCaGNtRnRjeXhjYmlBZ2FYTlRkR0Z1WkdGeVpFSnliM2R6WlhKRmJuWTZJR2x6VTNSaGJtUmhjbVJDY205M2MyVnlSVzUyTEZ4dUlDQm1iM0pGWVdOb09pQm1iM0pGWVdOb0xGeHVJQ0J0WlhKblpUb2diV1Z5WjJVc1hHNGdJR1Y0ZEdWdVpEb2daWGgwWlc1a0xGeHVJQ0IwY21sdE9pQjBjbWx0WEc1OU8xeHVJaXdpTHlvaFhHNGdLaUJFWlhSbGNtMXBibVVnYVdZZ1lXNGdiMkpxWldOMElHbHpJR0VnUW5WbVptVnlYRzRnS2x4dUlDb2dRR0YxZEdodmNpQWdJRVpsY205emN5QkJZbTkxYTJoaFpHbHFaV2dnUEdoMGRIQnpPaTh2Wm1WeWIzTnpMbTl5Wno1Y2JpQXFJRUJzYVdObGJuTmxJQ0JOU1ZSY2JpQXFMMXh1WEc0dkx5QlVhR1VnWDJselFuVm1abVZ5SUdOb1pXTnJJR2x6SUdadmNpQlRZV1poY21rZ05TMDNJSE4xY0hCdmNuUXNJR0psWTJGMWMyVWdhWFFuY3lCdGFYTnphVzVuWEc0dkx5QlBZbXBsWTNRdWNISnZkRzkwZVhCbExtTnZibk4wY25WamRHOXlMaUJTWlcxdmRtVWdkR2hwY3lCbGRtVnVkSFZoYkd4NVhHNXRiMlIxYkdVdVpYaHdiM0owY3lBOUlHWjFibU4wYVc5dUlDaHZZbW9wSUh0Y2JpQWdjbVYwZFhKdUlHOWlhaUFoUFNCdWRXeHNJQ1ltSUNocGMwSjFabVpsY2lodlltb3BJSHg4SUdselUyeHZkMEoxWm1abGNpaHZZbW9wSUh4OElDRWhiMkpxTGw5cGMwSjFabVpsY2lsY2JuMWNibHh1Wm5WdVkzUnBiMjRnYVhOQ2RXWm1aWElnS0c5aWFpa2dlMXh1SUNCeVpYUjFjbTRnSVNGdlltb3VZMjl1YzNSeWRXTjBiM0lnSmlZZ2RIbHdaVzltSUc5aWFpNWpiMjV6ZEhKMVkzUnZjaTVwYzBKMVptWmxjaUE5UFQwZ0oyWjFibU4wYVc5dUp5QW1KaUJ2WW1vdVkyOXVjM1J5ZFdOMGIzSXVhWE5DZFdabVpYSW9iMkpxS1Z4dWZWeHVYRzR2THlCR2IzSWdUbTlrWlNCMk1DNHhNQ0J6ZFhCd2IzSjBMaUJTWlcxdmRtVWdkR2hwY3lCbGRtVnVkSFZoYkd4NUxseHVablZ1WTNScGIyNGdhWE5UYkc5M1FuVm1abVZ5SUNodlltb3BJSHRjYmlBZ2NtVjBkWEp1SUhSNWNHVnZaaUJ2WW1vdWNtVmhaRVpzYjJGMFRFVWdQVDA5SUNkbWRXNWpkR2x2YmljZ0ppWWdkSGx3Wlc5bUlHOWlhaTV6YkdsalpTQTlQVDBnSjJaMWJtTjBhVzl1SnlBbUppQnBjMEoxWm1abGNpaHZZbW91YzJ4cFkyVW9NQ3dnTUNrcFhHNTlYRzRpTENJdkx5QnphR2x0SUdadmNpQjFjMmx1WnlCd2NtOWpaWE56SUdsdUlHSnliM2R6WlhKY2JuWmhjaUJ3Y205alpYTnpJRDBnYlc5a2RXeGxMbVY0Y0c5eWRITWdQU0I3ZlR0Y2JseHVMeThnWTJGamFHVmtJR1p5YjIwZ2QyaGhkR1YyWlhJZ1oyeHZZbUZzSUdseklIQnlaWE5sYm5RZ2MyOGdkR2hoZENCMFpYTjBJSEoxYm01bGNuTWdkR2hoZENCemRIVmlJR2wwWEc0dkx5QmtiMjRuZENCaWNtVmhheUIwYUdsdVozTXVJQ0JDZFhRZ2QyVWdibVZsWkNCMGJ5QjNjbUZ3SUdsMElHbHVJR0VnZEhKNUlHTmhkR05vSUdsdUlHTmhjMlVnYVhRZ2FYTmNiaTh2SUhkeVlYQndaV1FnYVc0Z2MzUnlhV04wSUcxdlpHVWdZMjlrWlNCM2FHbGphQ0JrYjJWemJpZDBJR1JsWm1sdVpTQmhibmtnWjJ4dlltRnNjeTRnSUVsMEozTWdhVzV6YVdSbElHRmNiaTh2SUdaMWJtTjBhVzl1SUdKbFkyRjFjMlVnZEhKNUwyTmhkR05vWlhNZ1pHVnZjSFJwYldsNlpTQnBiaUJqWlhKMFlXbHVJR1Z1WjJsdVpYTXVYRzVjYm5aaGNpQmpZV05vWldSVFpYUlVhVzFsYjNWME8xeHVkbUZ5SUdOaFkyaGxaRU5zWldGeVZHbHRaVzkxZER0Y2JseHVablZ1WTNScGIyNGdaR1ZtWVhWc2RGTmxkRlJwYlc5MWRDZ3BJSHRjYmlBZ0lDQjBhSEp2ZHlCdVpYY2dSWEp5YjNJb0ozTmxkRlJwYldWdmRYUWdhR0Z6SUc1dmRDQmlaV1Z1SUdSbFptbHVaV1FuS1R0Y2JuMWNibVoxYm1OMGFXOXVJR1JsWm1GMWJIUkRiR1ZoY2xScGJXVnZkWFFnS0NrZ2UxeHVJQ0FnSUhSb2NtOTNJRzVsZHlCRmNuSnZjaWduWTJ4bFlYSlVhVzFsYjNWMElHaGhjeUJ1YjNRZ1ltVmxiaUJrWldacGJtVmtKeWs3WEc1OVhHNG9ablZ1WTNScGIyNGdLQ2tnZTF4dUlDQWdJSFJ5ZVNCN1hHNGdJQ0FnSUNBZ0lHbG1JQ2gwZVhCbGIyWWdjMlYwVkdsdFpXOTFkQ0E5UFQwZ0oyWjFibU4wYVc5dUp5a2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ1kyRmphR1ZrVTJWMFZHbHRaVzkxZENBOUlITmxkRlJwYldWdmRYUTdYRzRnSUNBZ0lDQWdJSDBnWld4elpTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCallXTm9aV1JUWlhSVWFXMWxiM1YwSUQwZ1pHVm1ZWFZzZEZObGRGUnBiVzkxZER0Y2JpQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUgwZ1kyRjBZMmdnS0dVcElIdGNiaUFnSUNBZ0lDQWdZMkZqYUdWa1UyVjBWR2x0Wlc5MWRDQTlJR1JsWm1GMWJIUlRaWFJVYVcxdmRYUTdYRzRnSUNBZ2ZWeHVJQ0FnSUhSeWVTQjdYRzRnSUNBZ0lDQWdJR2xtSUNoMGVYQmxiMllnWTJ4bFlYSlVhVzFsYjNWMElEMDlQU0FuWm5WdVkzUnBiMjRuS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JqWVdOb1pXUkRiR1ZoY2xScGJXVnZkWFFnUFNCamJHVmhjbFJwYldWdmRYUTdYRzRnSUNBZ0lDQWdJSDBnWld4elpTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCallXTm9aV1JEYkdWaGNsUnBiV1Z2ZFhRZ1BTQmtaV1poZFd4MFEyeGxZWEpVYVcxbGIzVjBPMXh1SUNBZ0lDQWdJQ0I5WEc0Z0lDQWdmU0JqWVhSamFDQW9aU2tnZTF4dUlDQWdJQ0FnSUNCallXTm9aV1JEYkdWaGNsUnBiV1Z2ZFhRZ1BTQmtaV1poZFd4MFEyeGxZWEpVYVcxbGIzVjBPMXh1SUNBZ0lIMWNibjBnS0NrcFhHNW1kVzVqZEdsdmJpQnlkVzVVYVcxbGIzVjBLR1oxYmlrZ2UxeHVJQ0FnSUdsbUlDaGpZV05vWldSVFpYUlVhVzFsYjNWMElEMDlQU0J6WlhSVWFXMWxiM1YwS1NCN1hHNGdJQ0FnSUNBZ0lDOHZibTl5YldGc0lHVnVkbWx5YjIxbGJuUnpJR2x1SUhOaGJtVWdjMmwwZFdGMGFXOXVjMXh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdjMlYwVkdsdFpXOTFkQ2htZFc0c0lEQXBPMXh1SUNBZ0lIMWNiaUFnSUNBdkx5QnBaaUJ6WlhSVWFXMWxiM1YwSUhkaGMyNG5kQ0JoZG1GcGJHRmliR1VnWW5WMElIZGhjeUJzWVhSMFpYSWdaR1ZtYVc1bFpGeHVJQ0FnSUdsbUlDZ29ZMkZqYUdWa1UyVjBWR2x0Wlc5MWRDQTlQVDBnWkdWbVlYVnNkRk5sZEZScGJXOTFkQ0I4ZkNBaFkyRmphR1ZrVTJWMFZHbHRaVzkxZENrZ0ppWWdjMlYwVkdsdFpXOTFkQ2tnZTF4dUlDQWdJQ0FnSUNCallXTm9aV1JUWlhSVWFXMWxiM1YwSUQwZ2MyVjBWR2x0Wlc5MWREdGNiaUFnSUNBZ0lDQWdjbVYwZFhKdUlITmxkRlJwYldWdmRYUW9ablZ1TENBd0tUdGNiaUFnSUNCOVhHNGdJQ0FnZEhKNUlIdGNiaUFnSUNBZ0lDQWdMeThnZDJobGJpQjNhR1Z1SUhOdmJXVmliMlI1SUdoaGN5QnpZM0psZDJWa0lIZHBkR2dnYzJWMFZHbHRaVzkxZENCaWRYUWdibThnU1M1RkxpQnRZV1JrYm1WemMxeHVJQ0FnSUNBZ0lDQnlaWFIxY200Z1kyRmphR1ZrVTJWMFZHbHRaVzkxZENobWRXNHNJREFwTzF4dUlDQWdJSDBnWTJGMFkyZ29aU2w3WEc0Z0lDQWdJQ0FnSUhSeWVTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNBdkx5QlhhR1Z1SUhkbElHRnlaU0JwYmlCSkxrVXVJR0oxZENCMGFHVWdjMk55YVhCMElHaGhjeUJpWldWdUlHVjJZV3hsWkNCemJ5QkpMa1V1SUdSdlpYTnVKM1FnZEhKMWMzUWdkR2hsSUdkc2IySmhiQ0J2WW1wbFkzUWdkMmhsYmlCallXeHNaV1FnYm05eWJXRnNiSGxjYmlBZ0lDQWdJQ0FnSUNBZ0lISmxkSFZ5YmlCallXTm9aV1JUWlhSVWFXMWxiM1YwTG1OaGJHd29iblZzYkN3Z1puVnVMQ0F3S1R0Y2JpQWdJQ0FnSUNBZ2ZTQmpZWFJqYUNobEtYdGNiaUFnSUNBZ0lDQWdJQ0FnSUM4dklITmhiV1VnWVhNZ1lXSnZkbVVnWW5WMElIZG9aVzRnYVhRbmN5QmhJSFpsY25OcGIyNGdiMllnU1M1RkxpQjBhR0YwSUcxMWMzUWdhR0YyWlNCMGFHVWdaMnh2WW1Gc0lHOWlhbVZqZENCbWIzSWdKM1JvYVhNbkxDQm9iM0JtZFd4c2VTQnZkWElnWTI5dWRHVjRkQ0JqYjNKeVpXTjBJRzkwYUdWeWQybHpaU0JwZENCM2FXeHNJSFJvY205M0lHRWdaMnh2WW1Gc0lHVnljbTl5WEc0Z0lDQWdJQ0FnSUNBZ0lDQnlaWFIxY200Z1kyRmphR1ZrVTJWMFZHbHRaVzkxZEM1allXeHNLSFJvYVhNc0lHWjFiaXdnTUNrN1hHNGdJQ0FnSUNBZ0lIMWNiaUFnSUNCOVhHNWNibHh1ZlZ4dVpuVnVZM1JwYjI0Z2NuVnVRMnhsWVhKVWFXMWxiM1YwS0cxaGNtdGxjaWtnZTF4dUlDQWdJR2xtSUNoallXTm9aV1JEYkdWaGNsUnBiV1Z2ZFhRZ1BUMDlJR05zWldGeVZHbHRaVzkxZENrZ2UxeHVJQ0FnSUNBZ0lDQXZMMjV2Y20xaGJDQmxiblpwY205dFpXNTBjeUJwYmlCellXNWxJSE5wZEhWaGRHbHZibk5jYmlBZ0lDQWdJQ0FnY21WMGRYSnVJR05zWldGeVZHbHRaVzkxZENodFlYSnJaWElwTzF4dUlDQWdJSDFjYmlBZ0lDQXZMeUJwWmlCamJHVmhjbFJwYldWdmRYUWdkMkZ6YmlkMElHRjJZV2xzWVdKc1pTQmlkWFFnZDJGeklHeGhkSFJsY2lCa1pXWnBibVZrWEc0Z0lDQWdhV1lnS0NoallXTm9aV1JEYkdWaGNsUnBiV1Z2ZFhRZ1BUMDlJR1JsWm1GMWJIUkRiR1ZoY2xScGJXVnZkWFFnZkh3Z0lXTmhZMmhsWkVOc1pXRnlWR2x0Wlc5MWRDa2dKaVlnWTJ4bFlYSlVhVzFsYjNWMEtTQjdYRzRnSUNBZ0lDQWdJR05oWTJobFpFTnNaV0Z5VkdsdFpXOTFkQ0E5SUdOc1pXRnlWR2x0Wlc5MWREdGNiaUFnSUNBZ0lDQWdjbVYwZFhKdUlHTnNaV0Z5VkdsdFpXOTFkQ2h0WVhKclpYSXBPMXh1SUNBZ0lIMWNiaUFnSUNCMGNua2dlMXh1SUNBZ0lDQWdJQ0F2THlCM2FHVnVJSGRvWlc0Z2MyOXRaV0p2WkhrZ2FHRnpJSE5qY21WM1pXUWdkMmwwYUNCelpYUlVhVzFsYjNWMElHSjFkQ0J1YnlCSkxrVXVJRzFoWkdSdVpYTnpYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQmpZV05vWldSRGJHVmhjbFJwYldWdmRYUW9iV0Z5YTJWeUtUdGNiaUFnSUNCOUlHTmhkR05vSUNobEtYdGNiaUFnSUNBZ0lDQWdkSEo1SUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJQzh2SUZkb1pXNGdkMlVnWVhKbElHbHVJRWt1UlM0Z1luVjBJSFJvWlNCelkzSnBjSFFnYUdGeklHSmxaVzRnWlhaaGJHVmtJSE52SUVrdVJTNGdaRzlsYzI0bmRDQWdkSEoxYzNRZ2RHaGxJR2RzYjJKaGJDQnZZbXBsWTNRZ2QyaGxiaUJqWVd4c1pXUWdibTl5YldGc2JIbGNiaUFnSUNBZ0lDQWdJQ0FnSUhKbGRIVnliaUJqWVdOb1pXUkRiR1ZoY2xScGJXVnZkWFF1WTJGc2JDaHVkV3hzTENCdFlYSnJaWElwTzF4dUlDQWdJQ0FnSUNCOUlHTmhkR05vSUNobEtYdGNiaUFnSUNBZ0lDQWdJQ0FnSUM4dklITmhiV1VnWVhNZ1lXSnZkbVVnWW5WMElIZG9aVzRnYVhRbmN5QmhJSFpsY25OcGIyNGdiMllnU1M1RkxpQjBhR0YwSUcxMWMzUWdhR0YyWlNCMGFHVWdaMnh2WW1Gc0lHOWlhbVZqZENCbWIzSWdKM1JvYVhNbkxDQm9iM0JtZFd4c2VTQnZkWElnWTI5dWRHVjRkQ0JqYjNKeVpXTjBJRzkwYUdWeWQybHpaU0JwZENCM2FXeHNJSFJvY205M0lHRWdaMnh2WW1Gc0lHVnljbTl5TGx4dUlDQWdJQ0FnSUNBZ0lDQWdMeThnVTI5dFpTQjJaWEp6YVc5dWN5QnZaaUJKTGtVdUlHaGhkbVVnWkdsbVptVnlaVzUwSUhKMWJHVnpJR1p2Y2lCamJHVmhjbFJwYldWdmRYUWdkbk1nYzJWMFZHbHRaVzkxZEZ4dUlDQWdJQ0FnSUNBZ0lDQWdjbVYwZFhKdUlHTmhZMmhsWkVOc1pXRnlWR2x0Wlc5MWRDNWpZV3hzS0hSb2FYTXNJRzFoY210bGNpazdYRzRnSUNBZ0lDQWdJSDFjYmlBZ0lDQjlYRzVjYmx4dVhHNTlYRzUyWVhJZ2NYVmxkV1VnUFNCYlhUdGNiblpoY2lCa2NtRnBibWx1WnlBOUlHWmhiSE5sTzF4dWRtRnlJR04xY25KbGJuUlJkV1YxWlR0Y2JuWmhjaUJ4ZFdWMVpVbHVaR1Y0SUQwZ0xURTdYRzVjYm1aMWJtTjBhVzl1SUdOc1pXRnVWWEJPWlhoMFZHbGpheWdwSUh0Y2JpQWdJQ0JwWmlBb0lXUnlZV2x1YVc1bklIeDhJQ0ZqZFhKeVpXNTBVWFZsZFdVcElIdGNiaUFnSUNBZ0lDQWdjbVYwZFhKdU8xeHVJQ0FnSUgxY2JpQWdJQ0JrY21GcGJtbHVaeUE5SUdaaGJITmxPMXh1SUNBZ0lHbG1JQ2hqZFhKeVpXNTBVWFZsZFdVdWJHVnVaM1JvS1NCN1hHNGdJQ0FnSUNBZ0lIRjFaWFZsSUQwZ1kzVnljbVZ1ZEZGMVpYVmxMbU52Ym1OaGRDaHhkV1YxWlNrN1hHNGdJQ0FnZlNCbGJITmxJSHRjYmlBZ0lDQWdJQ0FnY1hWbGRXVkpibVJsZUNBOUlDMHhPMXh1SUNBZ0lIMWNiaUFnSUNCcFppQW9jWFZsZFdVdWJHVnVaM1JvS1NCN1hHNGdJQ0FnSUNBZ0lHUnlZV2x1VVhWbGRXVW9LVHRjYmlBZ0lDQjlYRzU5WEc1Y2JtWjFibU4wYVc5dUlHUnlZV2x1VVhWbGRXVW9LU0I3WEc0Z0lDQWdhV1lnS0dSeVlXbHVhVzVuS1NCN1hHNGdJQ0FnSUNBZ0lISmxkSFZ5Ymp0Y2JpQWdJQ0I5WEc0Z0lDQWdkbUZ5SUhScGJXVnZkWFFnUFNCeWRXNVVhVzFsYjNWMEtHTnNaV0Z1VlhCT1pYaDBWR2xqYXlrN1hHNGdJQ0FnWkhKaGFXNXBibWNnUFNCMGNuVmxPMXh1WEc0Z0lDQWdkbUZ5SUd4bGJpQTlJSEYxWlhWbExteGxibWQwYUR0Y2JpQWdJQ0IzYUdsc1pTaHNaVzRwSUh0Y2JpQWdJQ0FnSUNBZ1kzVnljbVZ1ZEZGMVpYVmxJRDBnY1hWbGRXVTdYRzRnSUNBZ0lDQWdJSEYxWlhWbElEMGdXMTA3WEc0Z0lDQWdJQ0FnSUhkb2FXeGxJQ2dySzNGMVpYVmxTVzVrWlhnZ1BDQnNaVzRwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJR2xtSUNoamRYSnlaVzUwVVhWbGRXVXBJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JqZFhKeVpXNTBVWFZsZFdWYmNYVmxkV1ZKYm1SbGVGMHVjblZ1S0NrN1hHNGdJQ0FnSUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUNBZ2NYVmxkV1ZKYm1SbGVDQTlJQzB4TzF4dUlDQWdJQ0FnSUNCc1pXNGdQU0J4ZFdWMVpTNXNaVzVuZEdnN1hHNGdJQ0FnZlZ4dUlDQWdJR04xY25KbGJuUlJkV1YxWlNBOUlHNTFiR3c3WEc0Z0lDQWdaSEpoYVc1cGJtY2dQU0JtWVd4elpUdGNiaUFnSUNCeWRXNURiR1ZoY2xScGJXVnZkWFFvZEdsdFpXOTFkQ2s3WEc1OVhHNWNibkJ5YjJObGMzTXVibVY0ZEZScFkyc2dQU0JtZFc1amRHbHZiaUFvWm5WdUtTQjdYRzRnSUNBZ2RtRnlJR0Z5WjNNZ1BTQnVaWGNnUVhKeVlYa29ZWEpuZFcxbGJuUnpMbXhsYm1kMGFDQXRJREVwTzF4dUlDQWdJR2xtSUNoaGNtZDFiV1Z1ZEhNdWJHVnVaM1JvSUQ0Z01Ta2dlMXh1SUNBZ0lDQWdJQ0JtYjNJZ0tIWmhjaUJwSUQwZ01Uc2dhU0E4SUdGeVozVnRaVzUwY3k1c1pXNW5kR2c3SUdrckt5a2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ1lYSm5jMXRwSUMwZ01WMGdQU0JoY21kMWJXVnVkSE5iYVYwN1hHNGdJQ0FnSUNBZ0lIMWNiaUFnSUNCOVhHNGdJQ0FnY1hWbGRXVXVjSFZ6YUNodVpYY2dTWFJsYlNobWRXNHNJR0Z5WjNNcEtUdGNiaUFnSUNCcFppQW9jWFZsZFdVdWJHVnVaM1JvSUQwOVBTQXhJQ1ltSUNGa2NtRnBibWx1WnlrZ2UxeHVJQ0FnSUNBZ0lDQnlkVzVVYVcxbGIzVjBLR1J5WVdsdVVYVmxkV1VwTzF4dUlDQWdJSDFjYm4wN1hHNWNiaTh2SUhZNElHeHBhMlZ6SUhCeVpXUnBZM1JwWW14bElHOWlhbVZqZEhOY2JtWjFibU4wYVc5dUlFbDBaVzBvWm5WdUxDQmhjbkpoZVNrZ2UxeHVJQ0FnSUhSb2FYTXVablZ1SUQwZ1puVnVPMXh1SUNBZ0lIUm9hWE11WVhKeVlYa2dQU0JoY25KaGVUdGNibjFjYmtsMFpXMHVjSEp2ZEc5MGVYQmxMbkoxYmlBOUlHWjFibU4wYVc5dUlDZ3BJSHRjYmlBZ0lDQjBhR2x6TG1aMWJpNWhjSEJzZVNodWRXeHNMQ0IwYUdsekxtRnljbUY1S1R0Y2JuMDdYRzV3Y205alpYTnpMblJwZEd4bElEMGdKMkp5YjNkelpYSW5PMXh1Y0hKdlkyVnpjeTVpY205M2MyVnlJRDBnZEhKMVpUdGNibkJ5YjJObGMzTXVaVzUySUQwZ2UzMDdYRzV3Y205alpYTnpMbUZ5WjNZZ1BTQmJYVHRjYm5CeWIyTmxjM011ZG1WeWMybHZiaUE5SUNjbk95QXZMeUJsYlhCMGVTQnpkSEpwYm1jZ2RHOGdZWFp2YVdRZ2NtVm5aWGh3SUdsemMzVmxjMXh1Y0hKdlkyVnpjeTUyWlhKemFXOXVjeUE5SUh0OU8xeHVYRzVtZFc1amRHbHZiaUJ1YjI5d0tDa2dlMzFjYmx4dWNISnZZMlZ6Y3k1dmJpQTlJRzV2YjNBN1hHNXdjbTlqWlhOekxtRmtaRXhwYzNSbGJtVnlJRDBnYm05dmNEdGNibkJ5YjJObGMzTXViMjVqWlNBOUlHNXZiM0E3WEc1d2NtOWpaWE56TG05bVppQTlJRzV2YjNBN1hHNXdjbTlqWlhOekxuSmxiVzkyWlV4cGMzUmxibVZ5SUQwZ2JtOXZjRHRjYm5CeWIyTmxjM011Y21WdGIzWmxRV3hzVEdsemRHVnVaWEp6SUQwZ2JtOXZjRHRjYm5CeWIyTmxjM011WlcxcGRDQTlJRzV2YjNBN1hHNXdjbTlqWlhOekxuQnlaWEJsYm1STWFYTjBaVzVsY2lBOUlHNXZiM0E3WEc1d2NtOWpaWE56TG5CeVpYQmxibVJQYm1ObFRHbHpkR1Z1WlhJZ1BTQnViMjl3TzF4dVhHNXdjbTlqWlhOekxteHBjM1JsYm1WeWN5QTlJR1oxYm1OMGFXOXVJQ2h1WVcxbEtTQjdJSEpsZEhWeWJpQmJYU0I5WEc1Y2JuQnliMk5sYzNNdVltbHVaR2x1WnlBOUlHWjFibU4wYVc5dUlDaHVZVzFsS1NCN1hHNGdJQ0FnZEdoeWIzY2dibVYzSUVWeWNtOXlLQ2R3Y205alpYTnpMbUpwYm1ScGJtY2dhWE1nYm05MElITjFjSEJ2Y25SbFpDY3BPMXh1ZlR0Y2JseHVjSEp2WTJWemN5NWpkMlFnUFNCbWRXNWpkR2x2YmlBb0tTQjdJSEpsZEhWeWJpQW5MeWNnZlR0Y2JuQnliMk5sYzNNdVkyaGthWElnUFNCbWRXNWpkR2x2YmlBb1pHbHlLU0I3WEc0Z0lDQWdkR2h5YjNjZ2JtVjNJRVZ5Y205eUtDZHdjbTlqWlhOekxtTm9aR2x5SUdseklHNXZkQ0J6ZFhCd2IzSjBaV1FuS1R0Y2JuMDdYRzV3Y205alpYTnpMblZ0WVhOcklEMGdablZ1WTNScGIyNG9LU0I3SUhKbGRIVnliaUF3T3lCOU8xeHVJaXdpYVcxd2IzSjBJSHRFYVhOd1lYUmphR1Z5ZlNCbWNtOXRJRndpTGk0dlpYWmxiblJ6TDJScGMzQmhkR05vWlhKY0lqdGNjbHh1WEhKY2JtVjRjRzl5ZENCamJHRnpjeUJEYUdGdWJtVnNJR1Y0ZEdWdVpITWdSR2x6Y0dGMFkyaGxjaUI3WEhKY2JpQWdJQ0JqYjI1emRISjFZM1J2Y2lodVlXMWxMQ0J3ZFhOb1pYSXBJSHRjY2x4dUlDQWdJQ0FnSUNCemRYQmxjaWdwTzF4eVhHNWNjbHh1SUNBZ0lDQWdJQ0IwYUdsekxtNWhiV1VnUFNCdVlXMWxPMXh5WEc0Z0lDQWdJQ0FnSUhSb2FYTXVjSFZ6YUdWeUlEMGdjSFZ6YUdWeU8xeHlYRzVjY2x4dUlDQWdJQ0FnSUNCcFppQW9kR2hwY3k1d2RYTm9aWEl1YzI5amEyVjBMbk4wWVhSbElEMDlJREVwSUh0Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnZEdocGN5NXpkV0p6WTNKcFltVW9LVHRjY2x4dUlDQWdJQ0FnSUNCOVhISmNiaUFnSUNCOVhISmNibHh5WEc0Z0lDQWdjM1ZpYzJOeWFXSmxLQ2tnZTF4eVhHNGdJQ0FnSUNBZ0lIUm9hWE11Y0hWemFHVnlMbk5sYm1Rb2UxeHlYRzRnSUNBZ0lDQWdJQ0FnSUNCbGRtVnVkRG9nSjNOMVluTmpjbWxpWlNjc1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUdSaGRHRTZJSHRjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdOb1lXNXVaV3c2SUhSb2FYTXVibUZ0WlZ4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0I5WEhKY2JpQWdJQ0FnSUNBZ2ZTazdYSEpjYmlBZ0lDQjlYSEpjYmx4eVhHNGdJQ0FnZFc1emRXSnpZM0pwWW1Vb0tTQjdYSEpjYmlBZ0lDQWdJQ0FnZEdocGN5NXdkWE5vWlhJdWMyVnVaQ2g3WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJR1YyWlc1ME9pQW5kVzV6ZFdKelkzSnBZbVVuTEZ4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0JrWVhSaE9pQjdYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JqYUdGdWJtVnNPaUIwYUdsekxtNWhiV1ZjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdmVnh5WEc0Z0lDQWdJQ0FnSUgwcE8xeHlYRzRnSUNBZ2ZWeHlYRzU5SWl3aWFXMXdiM0owSUh0RGFHRnVibVZzZlNCbWNtOXRJRndpTGk5amFHRnVibVZzWENJN1hISmNibWx0Y0c5eWRDQjdVSEpsYzJWdVkyVkRhR0Z1Ym1Wc2ZTQm1jbTl0SUZ3aUxpOXdjbVZ6Wlc1alpWOWphR0Z1Ym1Wc1hDSTdYSEpjYm1sdGNHOXlkQ0I3VUhKcGRtRjBaVU5vWVc1dVpXeDlJR1p5YjIwZ1hDSXVMM0J5YVhaaGRHVmZZMmhoYm01bGJGd2lPMXh5WEc1Y2NseHVaWGh3YjNKMElHTnNZWE56SUUxaGJtNWhaMlZ5SUh0Y2NseHVJQ0FnSUdOdmJuTjBjblZqZEc5eUtDa2dlMXh5WEc0Z0lDQWdJQ0FnSUhSb2FYTXVZMmhoYm01bGJITWdQU0I3ZlR0Y2NseHVJQ0FnSUgxY2NseHVYSEpjYmlBZ0lDQmhaR1FvYm1GdFpTd2djSFZ6YUdWeUtTQjdYSEpjYmlBZ0lDQWdJQ0FnYVdZZ0tDRjBhR2x6TG1Ob1lXNXVaV3h6VzI1aGJXVmRLU0I3WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJSFJvYVhNdVkyaGhibTVsYkhOYmJtRnRaVjBnUFNCamNtVmhkR1ZEYUdGdWJtVnNLRzVoYldVc0lIQjFjMmhsY2lrN1hISmNiaUFnSUNBZ0lDQWdmVnh5WEc0Z0lDQWdJQ0FnSUhKbGRIVnliaUIwYUdsekxtTm9ZVzV1Wld4elcyNWhiV1ZkTzF4eVhHNGdJQ0FnZlZ4eVhHNWNjbHh1SUNBZ0lHRnNiQ2dwSUh0Y2NseHVJQ0FnSUNBZ0lDQnlaWFIxY200Z1QySnFaV04wTG10bGVYTW9kR2hwY3k1amFHRnVibVZzY3lrN1hISmNiaUFnSUNCOVhISmNibHh5WEc0Z0lDQWdabWx1WkNodVlXMWxLU0I3WEhKY2JpQWdJQ0FnSUNBZ2NtVjBkWEp1SUhSb2FYTXVZMmhoYm01bGJITmJibUZ0WlYwN1hISmNiaUFnSUNCOVhISmNibHh5WEc0Z0lDQWdjbVZ0YjNabEtHNWhiV1VwSUh0Y2NseHVJQ0FnSUNBZ0lDQnNaWFFnWTJoaGJtNWxiQ0E5SUhSb2FYTXVZMmhoYm01bGJITmJibUZ0WlYwN1hISmNiaUFnSUNBZ0lDQWdaR1ZzWlhSbElIUm9hWE11WTJoaGJtNWxiSE5iYm1GdFpWMDdYSEpjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJR05vWVc1dVpXdzdYSEpjYmlBZ0lDQjlYSEpjYmx4eVhHNGdJQ0FnYzNWaWMyTnlhV0psS0NrZ2UxeHlYRzRnSUNBZ0lDQWdJR1p2Y2lBb2JHVjBJR2tnYVc0Z2RHaHBjeTVqYUdGdWJtVnNjeWtnZTF4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0IwYUdsekxtTm9ZVzV1Wld4elcybGRMbk4xWW5OamNtbGlaU2dwTzF4eVhHNGdJQ0FnSUNBZ0lIMWNjbHh1WEhKY2JpQWdJQ0I5WEhKY2JuMWNjbHh1WEhKY2JtWjFibU4wYVc5dUlHTnlaV0YwWlVOb1lXNXVaV3dvYm1GdFpTd2djSFZ6YUdWeUtTQjdYSEpjYmlBZ0lDQnBaaUFvYm1GdFpTNXBibVJsZUU5bUtDZHdjbWwyWVhSbExTY3BJRDA5UFNBd0tTQjdYSEpjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJRzVsZHlCUWNtbDJZWFJsUTJoaGJtNWxiQ2h1WVcxbExDQndkWE5vWlhJcE8xeHlYRzRnSUNBZ2ZTQmxiSE5sSUdsbUlDaHVZVzFsTG1sdVpHVjRUMllvSjNCeVpYTmxibU5sTFNjcElEMDlQU0F3S1NCN1hISmNiaUFnSUNBZ0lDQWdjbVYwZFhKdUlHNWxkeUJRY21WelpXNWpaVU5vWVc1dVpXd29ibUZ0WlN3Z2NIVnphR1Z5S1R0Y2NseHVJQ0FnSUgwZ1pXeHpaU0I3WEhKY2JpQWdJQ0FnSUNBZ2NtVjBkWEp1SUc1bGR5QkRhR0Z1Ym1Wc0tHNWhiV1VzSUhCMWMyaGxjaWs3WEhKY2JpQWdJQ0I5WEhKY2JuMGlMQ0pwYlhCdmNuUWdlMFJwYzNCaGRHTm9aWEo5SUdaeWIyMGdYQ0l1TGk5bGRtVnVkSE12WkdsemNHRjBZMmhsY2x3aU8xeHlYRzVjY2x4dVpYaHdiM0owSUdOc1lYTnpJRkJ5WlhObGJtTmxRMmhoYm01bGJDQmxlSFJsYm1SeklFUnBjM0JoZEdOb1pYSWdlMXh5WEc0Z0lDQWdZMjl1YzNSeWRXTjBiM0lvYm1GdFpTd2djSFZ6YUdWeUtTQjdYSEpjYmlBZ0lDQWdJQ0FnYzNWd1pYSW9LVHRjY2x4dVhISmNiaUFnSUNBZ0lDQWdkR2hwY3k1dVlXMWxJRDBnYm1GdFpUdGNjbHh1SUNBZ0lDQWdJQ0IwYUdsekxuQjFjMmhsY2lBOUlIQjFjMmhsY2p0Y2NseHVJQ0FnSUNBZ0lDQjBhR2x6TG1GMWRHZ2dQU0J1ZFd4c08xeHlYRzVjY2x4dUlDQWdJQ0FnSUNCcFppQW9kR2hwY3k1d2RYTm9aWEl1YzI5amEyVjBMbk4wWVhSbElEMDlJREVwSUh0Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnZEdocGN5NXpkV0p6WTNKcFltVW9LVHRjY2x4dUlDQWdJQ0FnSUNCOVhISmNiaUFnSUNCOVhISmNibHh5WEc0Z0lDQWdjM1ZpYzJOeWFXSmxLQ2tnZTF4eVhHNGdJQ0FnSUNBZ0lIUm9hWE11Y0hWemFHVnlMbUYxZEdnb2RHaHBjeTV1WVcxbExDQW9aU2tnUFQ0Z2UxeHlYRzRnSUNBZ0lDQWdJQ0FnSUNCMGFHbHpMbUYxZEdnZ1BTQmxMbVJoZEdFdVlYVjBhRHRjY2x4dVhISmNiaUFnSUNBZ0lDQWdJQ0FnSUhSb2FYTXVjSFZ6YUdWeUxuTmxibVFvZTF4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1pYWmxiblE2SUNkemRXSnpZM0pwWW1VbkxGeHlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdaR0YwWVRvZ2UxeHlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdOb1lXNXVaV3c2SUhSb2FYTXVibUZ0WlN4Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JoZFhSb09pQjBhR2x6TG1GMWRHZ3NYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1kyaGhibTVsYkY5a1lYUmhPaUJsTG1SaGRHRXVZMmhoYm01bGJGOWtZWFJoWEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCOVhISmNiaUFnSUNBZ0lDQWdJQ0FnSUgwcE8xeHlYRzRnSUNBZ0lDQWdJSDBwTzF4eVhHNGdJQ0FnZlZ4eVhHNWNjbHh1SUNBZ0lIVnVjM1ZpYzJOeWFXSmxLQ2tnZTF4eVhHNGdJQ0FnSUNBZ0lIUm9hWE11Y0hWemFHVnlMbk5sYm1Rb2UxeHlYRzRnSUNBZ0lDQWdJQ0FnSUNCbGRtVnVkRG9nSjNWdWMzVmljMk55YVdKbEp5eGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ1pHRjBZVG9nZTF4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1kyaGhibTVsYkRvZ2RHaHBjeTV1WVcxbFhISmNiaUFnSUNBZ0lDQWdJQ0FnSUgxY2NseHVJQ0FnSUNBZ0lDQjlLVHRjY2x4dUlDQWdJSDFjY2x4dWZTSXNJbWx0Y0c5eWRDQjdSR2x6Y0dGMFkyaGxjbjBnWm5KdmJTQmNJaTR1TDJWMlpXNTBjeTlrYVhOd1lYUmphR1Z5WENJN1hISmNibHh5WEc1bGVIQnZjblFnWTJ4aGMzTWdVSEpwZG1GMFpVTm9ZVzV1Wld3Z1pYaDBaVzVrY3lCRWFYTndZWFJqYUdWeUlIdGNjbHh1SUNBZ0lHTnZibk4wY25WamRHOXlLRzVoYldVc0lIQjFjMmhsY2lrZ2UxeHlYRzRnSUNBZ0lDQWdJSE4xY0dWeUtDazdYSEpjYmx4eVhHNGdJQ0FnSUNBZ0lIUm9hWE11Ym1GdFpTQTlJRzVoYldVN1hISmNiaUFnSUNBZ0lDQWdkR2hwY3k1d2RYTm9aWElnUFNCd2RYTm9aWEk3WEhKY2JpQWdJQ0FnSUNBZ2RHaHBjeTVoZFhSb0lEMGdiblZzYkR0Y2NseHVYSEpjYmlBZ0lDQWdJQ0FnYVdZZ0tIUm9hWE11Y0hWemFHVnlMbk52WTJ0bGRDNXpkR0YwWlNBOVBTQXhLU0I3WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJSFJvYVhNdWMzVmljMk55YVdKbEtDazdYSEpjYmlBZ0lDQWdJQ0FnZlZ4eVhHNGdJQ0FnZlZ4eVhHNWNjbHh1SUNBZ0lITjFZbk5qY21saVpTZ3BJSHRjY2x4dUlDQWdJQ0FnSUNCMGFHbHpMbkIxYzJobGNpNWhkWFJvS0hSb2FYTXVibUZ0WlN3Z0tHVXBJRDArSUh0Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnZEdocGN5NWhkWFJvSUQwZ1pTNWtZWFJoTG1GMWRHZzdYSEpjYmx4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0IwYUdsekxuQjFjMmhsY2k1elpXNWtLSHRjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdWMlpXNTBPaUFuYzNWaWMyTnlhV0psSnl4Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHUmhkR0U2SUh0Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JqYUdGdWJtVnNPaUIwYUdsekxtNWhiV1VzWEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdZWFYwYURvZ2RHaHBjeTVoZFhSb1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjlYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lIMHBPMXh5WEc0Z0lDQWdJQ0FnSUgwcE8xeHlYRzRnSUNBZ2ZWeHlYRzVjY2x4dUlDQWdJSFZ1YzNWaWMyTnlhV0psS0NrZ2UxeHlYRzRnSUNBZ0lDQWdJSFJvYVhNdWNIVnphR1Z5TG5ObGJtUW9lMXh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQmxkbVZ1ZERvZ0ozVnVjM1ZpYzJOeWFXSmxKeXhjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdaR0YwWVRvZ2UxeHlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdZMmhoYm01bGJEb2dkR2hwY3k1dVlXMWxYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lIMWNjbHh1SUNBZ0lDQWdJQ0I5S1R0Y2NseHVJQ0FnSUgxY2NseHVmU0lzSW1sdGNHOXlkQ0I3UkdsemNHRjBZMmhsY24wZ1puSnZiU0JjSWk0dUwyVjJaVzUwY3k5a2FYTndZWFJqYUdWeVhDSTdYSEpjYmx4eVhHNWxlSEJ2Y25RZ1kyeGhjM01nVTI5amEyVjBJR1Y0ZEdWdVpITWdSR2x6Y0dGMFkyaGxjaUI3WEhKY2JpQWdJQ0JqYjI1emRISjFZM1J2Y2lod2RYTm9aWElzSUdodmMzUXBJSHRjY2x4dUlDQWdJQ0FnSUNCemRYQmxjaWdwTzF4eVhHNWNjbHh1SUNBZ0lDQWdJQ0IwYUdsekxuQjFjMmhsY2lBOUlIQjFjMmhsY2p0Y2NseHVJQ0FnSUNBZ0lDQjBhR2x6TG5OdlkydGxkQ0E5SUc1bGR5QlhaV0pUYjJOclpYUW9hRzl6ZENBcklDY3ZKeUFySUhSb2FYTXVjSFZ6YUdWeUxtdGxlU2s3WEhKY2JseHlYRzRnSUNBZ0lDQWdJSFJvYVhNdVltbHVaRXhwYzNSbGJtVnljeWdwTzF4eVhHNGdJQ0FnZlZ4eVhHNWNjbHh1SUNBZ0lHSnBibVJNYVhOMFpXNWxjbk1vS1NCN1hISmNiaUFnSUNBZ0lDQWdkR2hwY3k1emIyTnJaWFF1YjI1dmNHVnVJRDBnS0NrZ1BUNGdlMXh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQjBhR2x6TG05dVQzQmxiaWdwTzF4eVhHNGdJQ0FnSUNBZ0lIMDdYSEpjYmlBZ0lDQWdJQ0FnZEdocGN5NXpiMk5yWlhRdWIyNWxjbkp2Y2lBOUlDaGxjbkp2Y2lrZ1BUNGdlMXh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQjBhR2x6TG05dVJYSnliM0lvWlhKeWIzSXBPMXh5WEc0Z0lDQWdJQ0FnSUgwN1hISmNiaUFnSUNBZ0lDQWdkR2hwY3k1emIyTnJaWFF1YjI1amJHOXpaU0E5SUNoamJHOXpaVVYyWlc1MEtTQTlQaUI3WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJSFJvYVhNdWIyNURiRzl6WlNoamJHOXpaVVYyWlc1MEtUdGNjbHh1SUNBZ0lDQWdJQ0I5TzF4eVhHNGdJQ0FnSUNBZ0lIUm9hWE11YzI5amEyVjBMbTl1YldWemMyRm5aU0E5SUNodFpYTnpZV2RsS1NBOVBpQjdYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lIUm9hWE11YjI1TlpYTnpZV2RsS0cxbGMzTmhaMlVwTzF4eVhHNGdJQ0FnSUNBZ0lIMDdYSEpjYmlBZ0lDQjlYSEpjYmx4eVhHNGdJQ0FnYjI1UGNHVnVLQ2tnZTF4eVhHNGdJQ0FnSUNBZ0lDOHY1WWlkNWFlTDU0cTI1b0NCWEhKY2JpQWdJQ0FnSUNBZ2RHaHBjeTV6ZEdGMFpTQTlJREE3WEhKY2JseHlYRzRnSUNBZ0lDQWdJSFJvYVhNdVltbHVaQ2duWTI5dWJtVmpkR1ZrSnl3Z0tHVXBJRDArSUh0Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnZEdocGN5NXpiMk5yWlhRdWMyOWphMlYwWDJsa0lEMGdaUzV6YjJOclpYUmZhV1E3WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJSFJvYVhNdWMzUmhkR1VnUFNBeE8xeHlYRzVjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdMeS9vcnFMcG1JVmNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ2RHaHBjeTV3ZFhOb1pYSXVZMmhoYm01bGJITXVjM1ZpYzJOeWFXSmxLQ2s3WEhKY2JpQWdJQ0FnSUNBZ2ZTazdYSEpjYmx4eVhHNGdJQ0FnSUNBZ0lIUm9hWE11WW1sdVpDZ25ZMjl1Ym1WamRHbHZibDltWVdsc1pXUW5MQ0FvWlNrZ1BUNGdlMXh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQjBhR2x6TG5OMFlYUmxJRDBnTFRFN1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUdOdmJuTnZiR1V1WlhKeWIzSW9aUzVsY25KdmNpbGNjbHh1SUNBZ0lDQWdJQ0I5S1R0Y2NseHVYSEpjYmlBZ0lDQWdJQ0FnTHlwMGFHbHpMbk5sYm1Rb2UxeHlYRzRnSUNBZ0lDQWdJQ0FnSUNCbGRtVnVkRG9nSjJGMWRHaHZjbWw2WVhScGIyNG5YSEpjYmlBZ0lDQWdJQ0FnZlNrN0tpOWNjbHh1SUNBZ0lIMWNjbHh1WEhKY2JpQWdJQ0J2YmtWeWNtOXlLR1Z5Y205eUtTQjdYSEpjYmlBZ0lDQWdJQ0FnWTI5dWMyOXNaUzVsY25KdmNpaGxjbkp2Y2lsY2NseHVJQ0FnSUgxY2NseHVYSEpjYmlBZ0lDQnZia05zYjNObEtHTnNiM05sUlhabGJuUXBJSHRjY2x4dUlDQWdJQ0FnSUNCcFppQW9kR2hwY3k1emIyTnJaWFF1Y21WaFpIbFRkR0YwWlNBOVBTQlhaV0pUYjJOclpYUXVRMHhQVTBWRUtTQjdYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lHbG1JQ2hqYkc5elpVVjJaVzUwTG5SNWNHVWdQVDBnSjJOc2IzTmxKeWtnZTF4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1kyOXVjMjlzWlM1bGNuSnZjaWduYzI5amEyVjA1cHlONVlxaDViZXk1cGF0NWJ5QUlTRW5LVnh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQjlJR1ZzYzJVZ2FXWWdLR05zYjNObFJYWmxiblF1ZEhsd1pTQTlQU0FuYldWemMyRm5aU2NwSUh0Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHTnZibk52YkdVdVpYSnliM0lvWTJ4dmMyVkZkbVZ1ZEM1a1lYUmhLVnh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQjlJR1ZzYzJVZ2UxeHlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdZMjl1YzI5c1pTNWxjbkp2Y2lnbjViZXk1cGF0NWJ5QUlTRW5LVnh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQjlYSEpjYmlBZ0lDQWdJQ0FnZlZ4eVhHNGdJQ0FnZlZ4eVhHNWNjbHh1SUNBZ0lHOXVUV1Z6YzJGblpTaHRaWE56WVdkbEtTQjdYSEpjYmlBZ0lDQWdJQ0FnYkdWMElHVkVZWFJoSUQwZ1NsTlBUaTV3WVhKelpTaHRaWE56WVdkbExtUmhkR0VwTzF4eVhHNGdJQ0FnSUNBZ0lHeGxkQ0JsZG1WdWRDQTlJR1ZFWVhSaExtVjJaVzUwTzF4eVhHNGdJQ0FnSUNBZ0lHeGxkQ0JrWVhSaElEMGdaVVJoZEdFdVpHRjBZVHRjY2x4dVhISmNiaUFnSUNBZ0lDQWdhV1lnS0dWRVlYUmhMbU5vWVc1dVpXd2dJVDA5SUhWdVpHVm1hVzVsWkNrZ2UxeHlYRzRnSUNBZ0lDQWdJQ0FnSUNCMGFHbHpMbkIxYzJobGNpNWphR0Z1Ym1Wc2N5NW1hVzVrS0dWRVlYUmhMbU5vWVc1dVpXd3BMbVZ0YVhRb1pYWmxiblFzSUdSaGRHRXBPMXh5WEc0Z0lDQWdJQ0FnSUgwZ1pXeHpaU0I3WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJSFJvYVhNdVpXMXBkQ2hsZG1WdWRDd2daR0YwWVNrN1hISmNiaUFnSUNBZ0lDQWdmVnh5WEc1Y2NseHVJQ0FnSUgxY2NseHVYSEpjYmlBZ0lDQnpaVzVrS0dwemIyNHBJSHRjY2x4dUlDQWdJQ0FnSUNCcFppQW9kR2hwY3k1emRHRjBaU0FoUFQwZ0xURXBJSHRjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdkR2hwY3k1emIyTnJaWFF1YzJWdVpDaEtVMDlPTG5OMGNtbHVaMmxtZVNocWMyOXVLU2xjY2x4dUlDQWdJQ0FnSUNCOVhISmNiaUFnSUNCOVhISmNibjBpTENKbGVIQnZjblFnWTJ4aGMzTWdRMkZzYkdKaFkydFNaV2RwYzNSeWVTQjdYSEpjYmlBZ0lDQmpiMjV6ZEhKMVkzUnZjaWdwSUh0Y2NseHVJQ0FnSUNBZ0lDQjBhR2x6TGw5allXeHNZbUZqYTNNZ1BTQjdmVHRjY2x4dUlDQWdJSDFjY2x4dVhISmNiaUFnSUNCblpYUW9ibUZ0WlNrZ2UxeHlYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQjBhR2x6TGw5allXeHNZbUZqYTNOYmNISmxabWw0S0c1aGJXVXBYVHRjY2x4dUlDQWdJSDFjY2x4dVhISmNiaUFnSUNCaFpHUW9ibUZ0WlN3Z1kyRnNiR0poWTJzc0lHTnZiblJsZUhRcElIdGNjbHh1SUNBZ0lDQWdJQ0JzWlhRZ2NISmxabWw0WldSRmRtVnVkRTVoYldVZ1BTQndjbVZtYVhnb2JtRnRaU2s3WEhKY2JpQWdJQ0FnSUNBZ2RHaHBjeTVmWTJGc2JHSmhZMnR6VzNCeVpXWnBlR1ZrUlhabGJuUk9ZVzFsWFNBOUlIUm9hWE11WDJOaGJHeGlZV05yYzF0d2NtVm1hWGhsWkVWMlpXNTBUbUZ0WlYwZ2ZId2dXMTA3WEhKY2JpQWdJQ0FnSUNBZ2RHaHBjeTVmWTJGc2JHSmhZMnR6VzNCeVpXWnBlR1ZrUlhabGJuUk9ZVzFsWFM1d2RYTm9LSHRjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdabTQ2SUdOaGJHeGlZV05yTEZ4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0JqYjI1MFpYaDBPaUJqYjI1MFpYaDBYSEpjYmlBZ0lDQWdJQ0FnZlNrN1hISmNiaUFnSUNCOVhISmNibHh5WEc0Z0lDQWdjbVZ0YjNabEtHNWhiV1VzSUdOaGJHeGlZV05yTENCamIyNTBaWGgwS1NCN1hISmNiaUFnSUNBZ0lDQWdhV1lnS0NGdVlXMWxJQ1ltSUNGallXeHNZbUZqYXlBbUppQWhZMjl1ZEdWNGRDa2dlMXh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQjBhR2x6TGw5allXeHNZbUZqYTNNZ1BTQjdmVHRjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdjbVYwZFhKdU8xeHlYRzRnSUNBZ0lDQWdJSDFjY2x4dVhISmNiaUFnSUNBZ0lDQWdkbUZ5SUc1aGJXVnpJRDBnYm1GdFpTQS9JRnR3Y21WbWFYZ29ibUZ0WlNsZElEb2dUMkpxWldOMExtdGxlWE1vZEdocGN5NWZZMkZzYkdKaFkydHpLVHRjY2x4dVhISmNiaUFnSUNBZ0lDQWdhV1lnS0dOaGJHeGlZV05ySUh4OElHTnZiblJsZUhRcElIdGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ2RHaHBjeTV5WlcxdmRtVkRZV3hzWW1GamF5aHVZVzFsY3l3Z1kyRnNiR0poWTJzc0lHTnZiblJsZUhRcE8xeHlYRzRnSUNBZ0lDQWdJSDBnWld4elpTQjdYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lIUm9hWE11Y21WdGIzWmxRV3hzUTJGc2JHSmhZMnR6S0c1aGJXVnpLVHRjY2x4dUlDQWdJQ0FnSUNCOVhISmNiaUFnSUNCOVhISmNibHh5WEc0Z0lDQWdjbVZ0YjNabFEyRnNiR0poWTJzb2JtRnRaWE1zSUdOaGJHeGlZV05yTENCamIyNTBaWGgwS1NCN1hISmNiaUFnSUNBZ0lDQWdabTl5SUNoc1pYUWdibUZ0WlNCcGJpQnVZVzFsY3lrZ2UxeHlYRzRnSUNBZ0lDQWdJQ0FnSUNCbWIzSWdLR3hsZENCclpYa2dhVzRnZEdocGN5NWZZMkZzYkdKaFkydHpXMjVoYldWZEtTQjdYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JwWmlBb2RHaHBjeTVmWTJGc2JHSmhZMnR6VzI1aGJXVmRXMnRsZVYwdVptNGdQVDBnWTJGc2JHSmhZMnNnZkh3Z2RHaHBjeTVmWTJGc2JHSmhZMnR6VzI1aGJXVmRXMnRsZVYwdVkyOXVkR1Y0ZENBOVBTQmpiMjUwWlhoMEtTQjdYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1pHVnNaWFJsSUhSb2FYTXVYMk5oYkd4aVlXTnJjMXR1WVcxbFhWdHJaWGxkTzF4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2ZWeHlYRzRnSUNBZ0lDQWdJQ0FnSUNCOVhISmNibHh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQnBaaUFvZEdocGN5NWZZMkZzYkdKaFkydHpXMjVoYldWZExteGxibWQwYUNBOVBUMGdNQ2tnZTF4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1pHVnNaWFJsSUhSb2FYTXVYMk5oYkd4aVlXTnJjMXR1WVcxbFhUdGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ2ZWeHlYRzRnSUNBZ0lDQWdJSDFjY2x4dUlDQWdJSDFjY2x4dVhISmNiaUFnSUNCeVpXMXZkbVZCYkd4RFlXeHNZbUZqYTNNb2JtRnRaWE1wSUh0Y2NseHVJQ0FnSUNBZ0lDQm1iM0lnS0d4bGRDQnVZVzFsSUdsdUlHNWhiV1Z6S1NCN1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUdSbGJHVjBaU0IwYUdsekxsOWpZV3hzWW1GamEzTmJibUZ0WlYwN1hISmNiaUFnSUNBZ0lDQWdmVnh5WEc0Z0lDQWdmVnh5WEc1OVhISmNibHh5WEc1bWRXNWpkR2x2YmlCd2NtVm1hWGdvYm1GdFpTa2dlMXh5WEc0Z0lDQWdjbVYwZFhKdUlGd2lYMXdpSUNzZ2JtRnRaVHRjY2x4dWZTSXNJbWx0Y0c5eWRDQjdRMkZzYkdKaFkydFNaV2RwYzNSeWVYMGdabkp2YlNBbkxpOWpZV3hzWW1GamExOXlaV2RwYzNSeWVTYzdYSEpjYmx4eVhHNWxlSEJ2Y25RZ1kyeGhjM01nUkdsemNHRjBZMmhsY2lCN1hISmNiaUFnSUNCamIyNXpkSEoxWTNSdmNpZ3BJSHRjY2x4dUlDQWdJQ0FnSUNCMGFHbHpMbU5oYkd4aVlXTnJjeUE5SUc1bGR5QkRZV3hzWW1GamExSmxaMmx6ZEhKNUtDazdYSEpjYmlBZ0lDQWdJQ0FnZEdocGN5NW5iRzlpWVd4ZlkyRnNiR0poWTJ0eklEMGdXMTA3WEhKY2JpQWdJQ0I5WEhKY2JseHlYRzRnSUNBZ1ltbHVaQ2hsZG1WdWRFNWhiV1VzSUdOaGJHeGlZV05yTENCamIyNTBaWGgwS1NCN1hISmNiaUFnSUNBZ0lDQWdkR2hwY3k1allXeHNZbUZqYTNNdVlXUmtLR1YyWlc1MFRtRnRaU3dnWTJGc2JHSmhZMnNzSUdOdmJuUmxlSFFwTzF4eVhHNGdJQ0FnSUNBZ0lISmxkSFZ5YmlCMGFHbHpPMXh5WEc0Z0lDQWdmVnh5WEc1Y2NseHVJQ0FnSUdKcGJtUmZaMnh2WW1Gc0tHTmhiR3hpWVdOcktTQjdYSEpjYmlBZ0lDQWdJQ0FnZEdocGN5NW5iRzlpWVd4ZlkyRnNiR0poWTJ0ekxuQjFjMmdvWTJGc2JHSmhZMnNwTzF4eVhHNGdJQ0FnSUNBZ0lISmxkSFZ5YmlCMGFHbHpPMXh5WEc0Z0lDQWdmVnh5WEc1Y2NseHVJQ0FnSUhWdVltbHVaQ2hsZG1WdWRFNWhiV1VzSUdOaGJHeGlZV05yTENCamIyNTBaWGgwS1NCN1hISmNiaUFnSUNBZ0lDQWdkR2hwY3k1allXeHNZbUZqYTNNdWNtVnRiM1psS0dWMlpXNTBUbUZ0WlN3Z1kyRnNiR0poWTJzc0lHTnZiblJsZUhRcE8xeHlYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQjBhR2x6TzF4eVhHNGdJQ0FnZlZ4eVhHNWNjbHh1SUNBZ0lIVnVZbWx1WkY5bmJHOWlZV3dvWTJGc2JHSmhZMnNwSUh0Y2NseHVJQ0FnSUNBZ0lDQnBaaUFvSVdOaGJHeGlZV05yS1NCN1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUhSb2FYTXVaMnh2WW1Gc1gyTmhiR3hpWVdOcmN5QTlJRnRkTzF4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0J5WlhSMWNtNGdkR2hwY3p0Y2NseHVJQ0FnSUNBZ0lDQjlYSEpjYmx4eVhHNGdJQ0FnSUNBZ0lHWnZjaUFvYkdWMElHa2dhVzRnZEdocGN5NW5iRzlpWVd4ZlkyRnNiR0poWTJ0ektTQjdYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lHbG1JQ2hqWVd4c1ltRmpheUE5UFNCMGFHbHpMbWRzYjJKaGJGOWpZV3hzWW1GamEzTmJhVjBwSUh0Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHUmxiR1YwWlNCMGFHbHpMbWRzYjJKaGJGOWpZV3hzWW1GamEzTmJhVjA3WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJSDFjY2x4dUlDQWdJQ0FnSUNCOVhISmNiaUFnSUNBZ0lDQWdjbVYwZFhKdUlIUm9hWE03WEhKY2JpQWdJQ0I5WEhKY2JseHlYRzRnSUNBZ2RXNWlhVzVrWDJGc2JDZ3BJSHRjY2x4dUlDQWdJQ0FnSUNCMGFHbHpMblZ1WW1sdVpDZ3BPMXh5WEc0Z0lDQWdJQ0FnSUhSb2FYTXVkVzVpYVc1a1gyZHNiMkpoYkNncE8xeHlYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQjBhR2x6TzF4eVhHNGdJQ0FnZlZ4eVhHNWNjbHh1SUNBZ0lHVnRhWFFvWlhabGJuUk9ZVzFsTENCa1lYUmhLU0I3WEhKY2JpQWdJQ0FnSUNBZ1ptOXlJQ2hzWlhRZ2FTQTlJREE3SUdrZ1BDQjBhR2x6TG1kc2IySmhiRjlqWVd4c1ltRmphM011YkdWdVozUm9PeUJwS3lzcElIdGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ2RHaHBjeTVuYkc5aVlXeGZZMkZzYkdKaFkydHpXMmxkS0dWMlpXNTBUbUZ0WlN3Z1pHRjBZU2s3WEhKY2JpQWdJQ0FnSUNBZ2ZWeHlYRzVjY2x4dUlDQWdJQ0FnSUNCMllYSWdZMkZzYkdKaFkydHpJRDBnZEdocGN5NWpZV3hzWW1GamEzTXVaMlYwS0dWMlpXNTBUbUZ0WlNrN1hISmNiaUFnSUNBZ0lDQWdhV1lnS0dOaGJHeGlZV05yY3lBbUppQmpZV3hzWW1GamEzTXViR1Z1WjNSb0lENGdNQ2tnZTF4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0JtYjNJZ0tHeGxkQ0JwSUQwZ01Ec2dhU0E4SUdOaGJHeGlZV05yY3k1c1pXNW5kR2c3SUdrckt5a2dlMXh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnWTJGc2JHSmhZMnR6VzJsZExtWnVMbU5oYkd3b1kyRnNiR0poWTJ0elcybGRMbU52Ym5SbGVIUXNJR1JoZEdFcE8xeHlYRzRnSUNBZ0lDQWdJQ0FnSUNCOVhISmNiaUFnSUNBZ0lDQWdmVnh5WEc1Y2NseHVJQ0FnSUNBZ0lDQnlaWFIxY200Z2RHaHBjenRjY2x4dUlDQWdJSDFjY2x4dWZTSXNJbWx0Y0c5eWRDQjdVMjlqYTJWMGZTQm1jbTl0SUNjdUwyTnZibTVsWTNScGIyNHZjMjlqYTJWMEp6dGNjbHh1YVcxd2IzSjBJSHRFYVhOd1lYUmphR1Z5ZlNCbWNtOXRJQ2N1TDJWMlpXNTBjeTlrYVhOd1lYUmphR1Z5Snp0Y2NseHVhVzF3YjNKMElIdE5ZVzV1WVdkbGNuMGdabkp2YlNCY0lpNHZZMmhoYm01bGJITXZiV0Z1Ym1GblpYSmNJanRjY2x4dWFXMXdiM0owSUdGNGFXOXpJR1p5YjIwZ1hDSmhlR2x2YzF3aU8xeHlYRzVjY2x4dVpYaHdiM0owSUdOc1lYTnpJRkIxYzJobGNpQjdYSEpjYmlBZ0lDQmpiMjV6ZEhKMVkzUnZjaWhoY0hCZmEyVjVMQ0J2Y0hScGIyNXpLU0I3WEhKY2JpQWdJQ0FnSUNBZ2RHaHBjeTVqYUdWamEwRndjRXRsZVNoaGNIQmZhMlY1S1R0Y2NseHVYSEpjYmlBZ0lDQWdJQ0FnZEdocGN5NXJaWGtnUFNCaGNIQmZhMlY1TzF4eVhHNGdJQ0FnSUNBZ0lIUm9hWE11YjNCMGFXOXVjeUE5SUc5d2RHbHZibk1nZkh3Z2UzMDdYSEpjYmlBZ0lDQWdJQ0FnZEdocGN5NWthWE53WVhSamFHVnlJRDBnYm1WM0lFUnBjM0JoZEdOb1pYSW9LVHRjY2x4dUlDQWdJQ0FnSUNCMGFHbHpMbU5vWVc1dVpXeHpJRDBnYm1WM0lFMWhibTVoWjJWeUtDazdYSEpjYmx4eVhHNGdJQ0FnSUNBZ0lIUm9hWE11WTI5dWJtVmpkQ2dwTzF4eVhHNGdJQ0FnZlZ4eVhHNWNjbHh1SUNBZ0lHTnZibTVsWTNRb0tTQjdYSEpjYmlBZ0lDQWdJQ0FnZEdocGN5NXpiMk5yWlhRZ1BTQnVaWGNnVTI5amEyVjBLSFJvYVhNc0lIUm9hWE11YjNCMGFXOXVjeTVvYjNOMEtUdGNjbHh1SUNBZ0lIMWNjbHh1WEhKY2JpQWdJQ0J6ZFdKelkzSnBZbVVvWTJoaGJtNWxiRjl1WVcxbEtTQjdYSEpjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJSFJvYVhNdVkyaGhibTVsYkhNdVlXUmtLR05vWVc1dVpXeGZibUZ0WlN3Z2RHaHBjeWs3WEhKY2JpQWdJQ0I5WEhKY2JseHlYRzRnSUNBZ2RXNXpkV0p6WTNKcFltVW9ZMmhoYm01bGJGOXVZVzFsS1NCN1hISmNiaUFnSUNBZ0lDQWdiR1YwSUdOb1lXNXVaV3dnUFNCMGFHbHpMbU5vWVc1dVpXeHpMbkpsYlc5MlpTaGphR0Z1Ym1Wc1gyNWhiV1VwTzF4eVhHNGdJQ0FnSUNBZ0lHTm9ZVzV1Wld3dWRXNXpkV0p6WTNKcFltVW9LVHRjY2x4dUlDQWdJSDFjY2x4dVhISmNiaUFnSUNCblpYUlRiMk5yWlhSSlpDZ3BJSHRjY2x4dUlDQWdJQ0FnSUNCeVpYUjFjbTRnZEdocGN5NXpiMk5yWlhRdWMyOWphMlYwTG5OdlkydGxkRjlwWkR0Y2NseHVJQ0FnSUgxY2NseHVYSEpjYmlBZ0lDQnpaVzVrS0dwemIyNHBJSHRjY2x4dUlDQWdJQ0FnSUNCMGFHbHpMbk52WTJ0bGRDNXpaVzVrS0dwemIyNHBPMXh5WEc0Z0lDQWdmVnh5WEc1Y2NseHVJQ0FnSUdOb1pXTnJRWEJ3UzJWNUtHdGxlU2tnZTF4eVhHNGdJQ0FnSUNBZ0lISmxkSFZ5YmlCMGNuVmxPMXh5WEc0Z0lDQWdmVnh5WEc1Y2NseHVJQ0FnSUdGMWRHZ29ibUZ0WlN3Z1kyRnNiR0poWTJzcElIdGNjbHh1SUNBZ0lDQWdJQ0JzWlhRZ2JXVjBhRzlrSUQwZ2RHaHBjeTV2Y0hScGIyNXpMbUYxZEdndWJXVjBhRzlrSUh4OElDZHdiM04wSnp0Y2NseHVJQ0FnSUNBZ0lDQnNaWFFnWkdGMFlTQTlJSHQ5TzF4eVhHNGdJQ0FnSUNBZ0lHeGxkQ0J3WVhKaGJYTWdQU0I3ZlR0Y2NseHVYSEpjYmlBZ0lDQWdJQ0FnYVdZZ0tHMWxkR2h2WkNBOVBTQW5jRzl6ZENjcElIdGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ1pHRjBZU0E5SUU5aWFtVmpkQzVoYzNOcFoyNG9lMXh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnWTJoaGJtNWxiRjl1WVcxbE9pQnVZVzFsTEZ4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2MyOWphMlYwWDJsa09pQjBhR2x6TG1kbGRGTnZZMnRsZEVsa0tDbGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ2ZTazdYSEpjYmlBZ0lDQWdJQ0FnZlNCbGJITmxJSHRjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdjR0Z5WVcxeklEMGdUMkpxWldOMExtRnpjMmxuYmloN1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQmphR0Z1Ym1Wc1gyNWhiV1U2SUc1aGJXVXNYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0J6YjJOclpYUmZhV1E2SUhSb2FYTXVaMlYwVTI5amEyVjBTV1FvS1Z4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0I5S1R0Y2NseHVJQ0FnSUNBZ0lDQjlYSEpjYmx4eVhHNGdJQ0FnSUNBZ0lHRjRhVzl6S0h0Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnZFhKc09pQjBhR2x6TG05d2RHbHZibk11WVhWMGFDNTFjbXdzWEhKY2JpQWdJQ0FnSUNBZ0lDQWdJRzFsZEdodlpEb2diV1YwYUc5a0xGeHlYRzRnSUNBZ0lDQWdJQ0FnSUNCb1pXRmtaWEp6T2lCMGFHbHpMbTl3ZEdsdmJuTXVZWFYwYUM1b1pXRmtaWEp6SUh4OElIdDlMRnh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQndZWEpoYlhNNklIQmhjbUZ0Y3l4Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnWkdGMFlUb2daR0YwWVZ4eVhHNGdJQ0FnSUNBZ0lIMHBMblJvWlc0b0tHVXBJRDArSUh0Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnWTJGc2JHSmhZMnNvWlNsY2NseHVJQ0FnSUNBZ0lDQjlLUzVqWVhSamFDZ29aU2tnUFQ0Z2UxeHlYRzRnSUNBZ0lDQWdJQ0FnSUNCamIyNXpiMnhsTG1WeWNtOXlLQ2ZucDRIbW5JbnBvcEhwZ1pQbW5ZUHBtWkRrdUkzb3RyTWhKeWs3WEhKY2JpQWdJQ0FnSUNBZ2ZTazdYSEpjYmlBZ0lDQjlYSEpjYm4xY2NseHVYSEpjYm5kcGJtUnZkeTVRZFhOb1pYSWdQU0JRZFhOb1pYSTdJbDBzSW5OdmRYSmpaVkp2YjNRaU9pSWlmUT09IiwiaW1wb3J0IHtEaXNwYXRjaGVyfSBmcm9tIFwiLi4vZXZlbnRzL2Rpc3BhdGNoZXJcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBDaGFubmVsIGV4dGVuZHMgRGlzcGF0Y2hlciB7XHJcbiAgICBjb25zdHJ1Y3RvcihuYW1lLCBwdXNoZXIpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG5cclxuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgICAgIHRoaXMucHVzaGVyID0gcHVzaGVyO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5wdXNoZXIuc29ja2V0LnN0YXRlID09IDEpIHtcclxuICAgICAgICAgICAgdGhpcy5zdWJzY3JpYmUoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc3Vic2NyaWJlKCkge1xyXG4gICAgICAgIHRoaXMucHVzaGVyLnNlbmQoe1xyXG4gICAgICAgICAgICBldmVudDogJ3N1YnNjcmliZScsXHJcbiAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgIGNoYW5uZWw6IHRoaXMubmFtZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdW5zdWJzY3JpYmUoKSB7XHJcbiAgICAgICAgdGhpcy5wdXNoZXIuc2VuZCh7XHJcbiAgICAgICAgICAgIGV2ZW50OiAndW5zdWJzY3JpYmUnLFxyXG4gICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICBjaGFubmVsOiB0aGlzLm5hbWVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHtEaXNwYXRjaGVyfSBmcm9tIFwiLi4vZXZlbnRzL2Rpc3BhdGNoZXJcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBQcmVzZW5jZUNoYW5uZWwgZXh0ZW5kcyBEaXNwYXRjaGVyIHtcclxuICAgIGNvbnN0cnVjdG9yKG5hbWUsIHB1c2hlcikge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcblxyXG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICAgICAgdGhpcy5wdXNoZXIgPSBwdXNoZXI7XHJcbiAgICAgICAgdGhpcy5hdXRoID0gbnVsbDtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMucHVzaGVyLnNvY2tldC5zdGF0ZSA9PSAxKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3Vic2NyaWJlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHN1YnNjcmliZSgpIHtcclxuICAgICAgICB0aGlzLnB1c2hlci5hdXRoKHRoaXMubmFtZSwgKGUpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5hdXRoID0gZS5kYXRhLmF1dGg7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnB1c2hlci5zZW5kKHtcclxuICAgICAgICAgICAgICAgIGV2ZW50OiAnc3Vic2NyaWJlJyxcclxuICAgICAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgICAgICBjaGFubmVsOiB0aGlzLm5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgYXV0aDogdGhpcy5hdXRoLFxyXG4gICAgICAgICAgICAgICAgICAgIGNoYW5uZWxfZGF0YTogZS5kYXRhLmNoYW5uZWxfZGF0YVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICB1bnN1YnNjcmliZSgpIHtcclxuICAgICAgICB0aGlzLnB1c2hlci5zZW5kKHtcclxuICAgICAgICAgICAgZXZlbnQ6ICd1bnN1YnNjcmliZScsXHJcbiAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgIGNoYW5uZWw6IHRoaXMubmFtZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQge0Rpc3BhdGNoZXJ9IGZyb20gXCIuLi9ldmVudHMvZGlzcGF0Y2hlclwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFByaXZhdGVDaGFubmVsIGV4dGVuZHMgRGlzcGF0Y2hlciB7XHJcbiAgICBjb25zdHJ1Y3RvcihuYW1lLCBwdXNoZXIpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG5cclxuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgICAgIHRoaXMucHVzaGVyID0gcHVzaGVyO1xyXG4gICAgICAgIHRoaXMuYXV0aCA9IG51bGw7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnB1c2hlci5zb2NrZXQuc3RhdGUgPT0gMSkge1xyXG4gICAgICAgICAgICB0aGlzLnN1YnNjcmliZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzdWJzY3JpYmUoKSB7XHJcbiAgICAgICAgdGhpcy5wdXNoZXIuYXV0aCh0aGlzLm5hbWUsIChlKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuYXV0aCA9IGUuZGF0YS5hdXRoO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5wdXNoZXIuc2VuZCh7XHJcbiAgICAgICAgICAgICAgICBldmVudDogJ3N1YnNjcmliZScsXHJcbiAgICAgICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2hhbm5lbDogdGhpcy5uYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgIGF1dGg6IHRoaXMuYXV0aFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICB1bnN1YnNjcmliZSgpIHtcclxuICAgICAgICB0aGlzLnB1c2hlci5zZW5kKHtcclxuICAgICAgICAgICAgZXZlbnQ6ICd1bnN1YnNjcmliZScsXHJcbiAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgIGNoYW5uZWw6IHRoaXMubmFtZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn0iLCJleHBvcnQgY2xhc3MgQ2FsbGJhY2tSZWdpc3RyeSB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLl9jYWxsYmFja3MgPSB7fTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQobmFtZSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9jYWxsYmFja3NbcHJlZml4KG5hbWUpXTtcclxuICAgIH1cclxuXHJcbiAgICBhZGQobmFtZSwgY2FsbGJhY2ssIGNvbnRleHQpIHtcclxuICAgICAgICBsZXQgcHJlZml4ZWRFdmVudE5hbWUgPSBwcmVmaXgobmFtZSk7XHJcbiAgICAgICAgdGhpcy5fY2FsbGJhY2tzW3ByZWZpeGVkRXZlbnROYW1lXSA9IHRoaXMuX2NhbGxiYWNrc1twcmVmaXhlZEV2ZW50TmFtZV0gfHwgW107XHJcbiAgICAgICAgdGhpcy5fY2FsbGJhY2tzW3ByZWZpeGVkRXZlbnROYW1lXS5wdXNoKHtcclxuICAgICAgICAgICAgZm46IGNhbGxiYWNrLFxyXG4gICAgICAgICAgICBjb250ZXh0OiBjb250ZXh0XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVtb3ZlKG5hbWUsIGNhbGxiYWNrLCBjb250ZXh0KSB7XHJcbiAgICAgICAgaWYgKCFuYW1lICYmICFjYWxsYmFjayAmJiAhY29udGV4dCkge1xyXG4gICAgICAgICAgICB0aGlzLl9jYWxsYmFja3MgPSB7fTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIG5hbWVzID0gbmFtZSA/IFtwcmVmaXgobmFtZSldIDogT2JqZWN0LmtleXModGhpcy5fY2FsbGJhY2tzKTtcclxuXHJcbiAgICAgICAgaWYgKGNhbGxiYWNrIHx8IGNvbnRleHQpIHtcclxuICAgICAgICAgICAgdGhpcy5yZW1vdmVDYWxsYmFjayhuYW1lcywgY2FsbGJhY2ssIGNvbnRleHQpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlQWxsQ2FsbGJhY2tzKG5hbWVzKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmVtb3ZlQ2FsbGJhY2sobmFtZXMsIGNhbGxiYWNrLCBjb250ZXh0KSB7XHJcbiAgICAgICAgZm9yIChsZXQgbmFtZSBpbiBuYW1lcykge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBrZXkgaW4gdGhpcy5fY2FsbGJhY2tzW25hbWVdKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fY2FsbGJhY2tzW25hbWVdW2tleV0uZm4gPT0gY2FsbGJhY2sgfHwgdGhpcy5fY2FsbGJhY2tzW25hbWVdW2tleV0uY29udGV4dCA9PSBjb250ZXh0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIHRoaXMuX2NhbGxiYWNrc1tuYW1lXVtrZXldO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5fY2FsbGJhY2tzW25hbWVdLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgZGVsZXRlIHRoaXMuX2NhbGxiYWNrc1tuYW1lXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZW1vdmVBbGxDYWxsYmFja3MobmFtZXMpIHtcclxuICAgICAgICBmb3IgKGxldCBuYW1lIGluIG5hbWVzKSB7XHJcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLl9jYWxsYmFja3NbbmFtZV07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBwcmVmaXgobmFtZSkge1xyXG4gICAgcmV0dXJuIFwiX1wiICsgbmFtZTtcclxufSIsImltcG9ydCB7Q2FsbGJhY2tSZWdpc3RyeX0gZnJvbSAnLi9jYWxsYmFja19yZWdpc3RyeSc7XHJcblxyXG5leHBvcnQgY2xhc3MgRGlzcGF0Y2hlciB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLmNhbGxiYWNrcyA9IG5ldyBDYWxsYmFja1JlZ2lzdHJ5KCk7XHJcbiAgICAgICAgdGhpcy5nbG9iYWxfY2FsbGJhY2tzID0gW107XHJcbiAgICB9XHJcblxyXG4gICAgYmluZChldmVudE5hbWUsIGNhbGxiYWNrLCBjb250ZXh0KSB7XHJcbiAgICAgICAgdGhpcy5jYWxsYmFja3MuYWRkKGV2ZW50TmFtZSwgY2FsbGJhY2ssIGNvbnRleHQpO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIGJpbmRfZ2xvYmFsKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgdGhpcy5nbG9iYWxfY2FsbGJhY2tzLnB1c2goY2FsbGJhY2spO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHVuYmluZChldmVudE5hbWUsIGNhbGxiYWNrLCBjb250ZXh0KSB7XHJcbiAgICAgICAgdGhpcy5jYWxsYmFja3MucmVtb3ZlKGV2ZW50TmFtZSwgY2FsbGJhY2ssIGNvbnRleHQpO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHVuYmluZF9nbG9iYWwoY2FsbGJhY2spIHtcclxuICAgICAgICBpZiAoIWNhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZ2xvYmFsX2NhbGxiYWNrcyA9IFtdO1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgaW4gdGhpcy5nbG9iYWxfY2FsbGJhY2tzKSB7XHJcbiAgICAgICAgICAgIGlmIChjYWxsYmFjayA9PSB0aGlzLmdsb2JhbF9jYWxsYmFja3NbaV0pIHtcclxuICAgICAgICAgICAgICAgIGRlbGV0ZSB0aGlzLmdsb2JhbF9jYWxsYmFja3NbaV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgdW5iaW5kX2FsbCgpIHtcclxuICAgICAgICB0aGlzLnVuYmluZCgpO1xyXG4gICAgICAgIHRoaXMudW5iaW5kX2dsb2JhbCgpO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIGVtaXQoZXZlbnROYW1lLCBkYXRhKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmdsb2JhbF9jYWxsYmFja3MubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgdGhpcy5nbG9iYWxfY2FsbGJhY2tzW2ldKGV2ZW50TmFtZSwgZGF0YSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2YXIgY2FsbGJhY2tzID0gdGhpcy5jYWxsYmFja3MuZ2V0KGV2ZW50TmFtZSk7XHJcbiAgICAgICAgaWYgKGNhbGxiYWNrcyAmJiBjYWxsYmFja3MubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNhbGxiYWNrcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgY2FsbGJhY2tzW2ldLmZuLmNhbGwoY2FsbGJhY2tzW2ldLmNvbnRleHQsIGRhdGEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxufSIsImltcG9ydCB7RWNob30gZnJvbSAnLi9lY2hvJ1xyXG5cclxud2luZG93LkVjaG8gPSBuZXcgRWNobygnYTgyMzkzZDg4NmEwZTZkZGZhZTUnLCB7XHJcbiAgICBob3N0OiAnd3M6Ly8xOTIuMTY4LjEwLjEwOjgwODEnLFxyXG4gICAgYXV0aDoge1xyXG4gICAgICAgIG1ldGhvZDogJ3Bvc3QnLFxyXG4gICAgICAgIHVybDogJ2h0dHA6Ly90ZXN0cy50ZXN0L2FwaS9wdXNoZXIvYXV0aCcsXHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgICAnQXV0aG9yaXphdGlvbic6ICdCZWFyZXIgZXlKMGVYQWlPaUpLVjFRaUxDSmhiR2NpT2lKSVV6STFOaUo5LmV5SnBjM01pT2lKb2RIUndPbHd2WEM5MFpYTjBjeTUwWlhOMElpd2lhV0YwSWpveE5UTTVNalUxT0RZMExDSmxlSEFpT2pFMU16a3lOVGswTmpRc0ltNWlaaUk2TVRVek9USTFOVGcyTkN3aWFuUnBJam9pV2poak56SmtWWGs0ZG1SUWQwWXpZU0lzSW5OMVlpSTZNU3dpY0hKMklqb2lPRGRsTUdGbU1XVm1PV1prTVRVNE1USm1aR1ZqT1RjeE5UTmhNVFJsTUdJd05EYzFORFpoWVNKOS55MEtVNC1PNlUwQ1pWYndSd0U1ZGVtdUR3bDZtb1FrS21kcG9Rc2ZaalVzJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHBhcmFtczoge31cclxuICAgIH0sXHJcbn0pXHJcblxyXG4vKndpbmRvdy5FY2hvLmNoYW5uZWwoJ29yZGVyJykubGlzdGVuKCduZXcnLCAoZSkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coZSlcclxufSkubGlzdGVuKCdtYWtlJywgKGUpID0+IHtcclxufSk7Ki9cclxuXHJcblxyXG5cclxuLyp3aW5kb3cuRWNoby5wcml2YXRlKCd1c2VyLjEnKS5saXN0ZW4oJ2EnLCAoZSkgPT4ge1xyXG4gICAgYWxlcnQoJ2FhYScpO1xyXG59KS5saXN0ZW4oJ2InLCAoZSkgPT4ge1xyXG4gICAgYWxlcnQoJ2JiYicpO1xyXG59KTsqL1xyXG5cclxud2luZG93LkVjaG8uam9pbihgY2hhdC4xYClcclxuICAgIC5oZXJlKCh1c2VycykgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCflhajpg6jkurrlkZgnKTtcclxuICAgICAgICBjb25zb2xlLmxvZyh1c2VycylcclxuICAgIH0pXHJcbiAgICAuam9pbmluZygodXNlcikgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCfmlrDkurrliqDlhaUnKTtcclxuICAgICAgICBjb25zb2xlLmxvZyh1c2VyKTtcclxuICAgIH0pXHJcbiAgICAubGVhdmluZygodXNlcikgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCfmnInkurrpgIDlh7onKTtcclxuICAgICAgICBjb25zb2xlLmxvZyh1c2VyKTtcclxuICAgIH0pLmxpc3RlbignTmV3TWVzc2FnZScsIChlKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhlKTtcclxufSk7XHJcbiIsImV4cG9ydCBjbGFzcyBDaGFubmVsIHtcclxuICAgIGNvbnN0cnVjdG9yKHB1c2hlciwgbmFtZSkge1xyXG4gICAgICAgIHRoaXMucHVzaGVyID0gcHVzaGVyO1xyXG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcblxyXG4gICAgICAgIHRoaXMuc3Vic2NyaWJlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgc3Vic2NyaWJlKCkge1xyXG4gICAgICAgIHRoaXMuc3Vic2NyaXB0aW9uID0gdGhpcy5wdXNoZXIuc3Vic2NyaWJlKHRoaXMubmFtZSk7XHJcbiAgICB9XHJcblxyXG4gICAgdW5zdWJzY3JpYmUoKSB7XHJcbiAgICAgICAgdGhpcy5wdXNoZXIudW5zdWJzY3JpYmUodGhpcy5uYW1lKTtcclxuICAgIH1cclxuXHJcbiAgICBsaXN0ZW4oZXZlbnQsIGNhbGxiYWNrKSB7XHJcbiAgICAgICAgdGhpcy5vbihldmVudCwgY2FsbGJhY2spO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBzdG9wTGlzdGVuaW5nKGV2ZW50KSB7XHJcbiAgICAgICAgdGhpcy5zdWJzY3JpcHRpb24udW5iaW5kKGV2ZW50KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgb24oZXZlbnQsIGNhbGxiYWNrKSB7XHJcbiAgICAgICAgdGhpcy5zdWJzY3JpcHRpb24uYmluZChldmVudCwgY2FsbGJhY2spO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICB3aGlzcGVyKGV2ZW50LCBkYXRhKSB7XHJcbiAgICAgICAgdGhpcy5wdXNoZXIuc2VuZCh7XHJcbiAgICAgICAgICAgIGNoYW5uZWw6IHRoaXMubmFtZSxcclxuICAgICAgICAgICAgZGF0YTogZGF0YSxcclxuICAgICAgICAgICAgZXZlbnQ6ICdjbGllbnQtJyArIGV2ZW50XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIGxpc3RlbkZvcldoaXNwZXIoZXZlbnQsIGNhbGxiYWNrKSB7XHJcbiAgICAgICAgdGhpcy5vbignY2xpZW50LScgKyBldmVudCwgY2FsbGJhY2spO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxufSIsImltcG9ydCB7Q2hhbm5lbH0gZnJvbSBcIi4vY2hhbm5lbFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFB1c2hlckNoYW5uZWwgZXh0ZW5kcyBDaGFubmVsIHtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEBwYXJhbSBwdXNoZXJcclxuICAgICAqIEBwYXJhbSBjaGFubmVsXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKHB1c2hlciwgbmFtZSkge1xyXG4gICAgICAgIHN1cGVyKHB1c2hlciwgbmFtZSk7XHJcbiAgICB9XHJcblxyXG5cclxufSIsImltcG9ydCB7Q2hhbm5lbH0gZnJvbSBcIi4vY2hhbm5lbFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFB1c2hlclByZXNlbmNlQ2hhbm5lbCBleHRlbmRzIENoYW5uZWwge1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQHBhcmFtIHB1c2hlclxyXG4gICAgICogQHBhcmFtIGNoYW5uZWxcclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IocHVzaGVyLCBuYW1lKSB7XHJcbiAgICAgICAgc3VwZXIocHVzaGVyLCBuYW1lKTtcclxuICAgIH1cclxuXHJcbiAgICBoZXJlKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgbGV0IGJhY2sgPSAoZSkgPT4ge1xyXG4gICAgICAgICAgICBjYWxsYmFjayhlKVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLm9uKCdzdWJzY3JpcHRpb25fc3VjY2VlZGVkJywgYmFjayk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgam9pbmluZyhjYWxsYmFjaykge1xyXG4gICAgICAgIHRoaXMub24oJ21lbWJlcl9hZGRlZCcsIGNhbGxiYWNrKTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBsZWF2aW5nKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgdGhpcy5vbignbWVtYmVyX3JlbW92ZWQnLCBjYWxsYmFjayk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQge0NoYW5uZWx9IGZyb20gXCIuL2NoYW5uZWxcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBQdXNoZXJQcml2YXRlQ2hhbm5lbCBleHRlbmRzIENoYW5uZWwge1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQHBhcmFtIHB1c2hlclxyXG4gICAgICogQHBhcmFtIGNoYW5uZWxcclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IocHVzaGVyLCBuYW1lKSB7XHJcbiAgICAgICAgc3VwZXIocHVzaGVyLCBuYW1lKTtcclxuICAgIH1cclxuXHJcbn0iLCJpbXBvcnQgJ2x1ZmZ5LXB1c2hlcic7XHJcbmltcG9ydCB7UHVzaGVyQ2hhbm5lbH0gZnJvbSBcIi4uL2NoYW5uZWwvcHVzaGVyLWNoYW5uZWxcIjtcclxuaW1wb3J0IHtQdXNoZXJQcml2YXRlQ2hhbm5lbH0gZnJvbSBcIi4uL2NoYW5uZWwvcHVzaGVyLXByaXZhdGUtY2hhbm5lbFwiO1xyXG5pbXBvcnQge1B1c2hlclByZXNlbmNlQ2hhbm5lbH0gZnJvbSBcIi4uL2NoYW5uZWwvcHVzaGVyLXByZXNlbmNlLWNoYW5uZWxcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBQdXNoZXJDb25uZWN0b3Ige1xyXG4gICAgY29uc3RydWN0b3IoYXBwX2tleSwgb3B0aW9ucykge1xyXG4gICAgICAgIHRoaXMucHVzaGVyID0gbmV3IFB1c2hlcihhcHBfa2V5LCBvcHRpb25zKTtcclxuICAgICAgICB0aGlzLmNoYW5uZWxzID0ge307XHJcbiAgICB9XHJcblxyXG4gICAgY2hhbm5lbChjaGFubmVsKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuY2hhbm5lbHNbY2hhbm5lbF0gPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB0aGlzLmNoYW5uZWxzW2NoYW5uZWxdID0gbmV3IFB1c2hlckNoYW5uZWwodGhpcy5wdXNoZXIsIGNoYW5uZWwpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY2hhbm5lbHNbY2hhbm5lbF07XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZUNoYW5uZWwoY2hhbm5lbCkge1xyXG4gICAgICAgIGlmICh0aGlzLmNoYW5uZWxzWydwcml2YXRlLScgKyBjaGFubmVsXSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2hhbm5lbHNbJ3ByaXZhdGUtJyArIGNoYW5uZWxdID0gbmV3IFB1c2hlclByaXZhdGVDaGFubmVsKHRoaXMucHVzaGVyLCAncHJpdmF0ZS0nICsgY2hhbm5lbCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLmNoYW5uZWxzWydwcml2YXRlLScgKyBjaGFubmVsXTtcclxuICAgIH1cclxuXHJcbiAgICBwcmVzZW5jZUNoYW5uZWwoY2hhbm5lbCkge1xyXG4gICAgICAgIGlmICh0aGlzLmNoYW5uZWxzWydwcmVzZW5jZS0nICsgY2hhbm5lbF0gPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB0aGlzLmNoYW5uZWxzWydwcmVzZW5jZS0nICsgY2hhbm5lbF0gPSBuZXcgUHVzaGVyUHJlc2VuY2VDaGFubmVsKHRoaXMucHVzaGVyLCAncHJlc2VuY2UtJyArIGNoYW5uZWwpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy5jaGFubmVsc1sncHJlc2VuY2UtJyArIGNoYW5uZWxdO1xyXG4gICAgfVxyXG5cclxuICAgIGxlYXZlKG5hbWUpIHtcclxuICAgICAgICBsZXQgY2hhbm5lbHMgPSBbbmFtZSwgJ3ByaXZhdGUtJyArIG5hbWUsICdwcmVzZW5jZS0nICsgbmFtZV07XHJcblxyXG4gICAgICAgIGNoYW5uZWxzLmZvckVhY2goKG5hbWUsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmNoYW5uZWxzW25hbWVdKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNoYW5uZWxzW25hbWVdLnVuc3Vic2NyaWJlKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgZGVsZXRlIHRoaXMuY2hhbm5lbHNbbmFtZV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxufSIsImltcG9ydCB7UHVzaGVyQ29ubmVjdG9yfSBmcm9tIFwiLi9jb25uZWN0b3IvcHVzaGVyX2Nvbm5lY3RvclwiO1xyXG5pbXBvcnQge1ByaXZhdGVDaGFubmVsfSBmcm9tIFwibHVmZnktcHVzaGVyL3NyYy9jaGFubmVscy9wcml2YXRlX2NoYW5uZWxcIjtcclxuaW1wb3J0IHtQcmVzZW5jZUNoYW5uZWx9IGZyb20gXCJsdWZmeS1wdXNoZXIvc3JjL2NoYW5uZWxzL3ByZXNlbmNlX2NoYW5uZWxcIjtcclxuaW1wb3J0IHtDaGFubmVsfSBmcm9tIFwibHVmZnktcHVzaGVyL3NyYy9jaGFubmVscy9jaGFubmVsXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgRWNobyB7XHJcbiAgICBjb25zdHJ1Y3RvcihhcHBrZXksIG9wdGlvbnMpIHtcclxuICAgICAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xyXG4gICAgICAgIHRoaXMuY29ubmVjdG9yID0gbmV3IFB1c2hlckNvbm5lY3RvcihhcHBrZXksIHRoaXMub3B0aW9ucyk7XHJcbiAgICB9XHJcblxyXG4gICAgY2hhbm5lbChjaGFubmVsKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY29ubmVjdG9yLmNoYW5uZWwoY2hhbm5lbCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZShjaGFubmVsKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY29ubmVjdG9yLnByaXZhdGVDaGFubmVsKGNoYW5uZWwpO1xyXG4gICAgfVxyXG5cclxuICAgIGpvaW4oY2hhbm5lbCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNvbm5lY3Rvci5wcmVzZW5jZUNoYW5uZWwoY2hhbm5lbCk7XHJcbiAgICB9XHJcblxyXG4gICAgc3Vic2NyaWJlKG5hbWUpIHtcclxuICAgICAgICBpZiAobmFtZS5pbmRleE9mKCdwcml2YXRlLScpID09PSAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnByaXZhdGUobmFtZSk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChuYW1lLmluZGV4T2YoJ3ByZXNlbmNlLScpID09PSAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmpvaW4obmFtZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY2hhbm5lbChuYW1lKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDpgIDlh7rpopHpgZMs5pqC55WZXHJcbiAgICAgKiBAcGFyYW0gY2hhbm5lbFxyXG4gICAgICovXHJcbiAgICBsZWF2ZShjaGFubmVsKSB7XHJcbiAgICAgICAgdGhpcy5jb25uZWN0b3IubGVhdmUoY2hhbm5lbCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbndpbmRvdy5FY2hvID0gRWNobztcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==
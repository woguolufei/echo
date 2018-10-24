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
    key: "unsubscribe",
    value: function unsubscribe(name) {
      if (this.channels[name]) {
        this.channels[name].unsubscribe();
        delete this.channels[name];
      }
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
    key: "unsubscribe",
    value: function unsubscribe(channel) {
      this.connector.unsubscribe(channel);
    }
  }]);

  return Echo;
}();
window.Echo = Echo;

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2x1ZmZ5LXB1c2hlci9kaXN0L3B1c2hlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbHVmZnktcHVzaGVyL3NyYy9jaGFubmVscy9jaGFubmVsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sdWZmeS1wdXNoZXIvc3JjL2NoYW5uZWxzL3ByZXNlbmNlX2NoYW5uZWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2x1ZmZ5LXB1c2hlci9zcmMvY2hhbm5lbHMvcHJpdmF0ZV9jaGFubmVsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sdWZmeS1wdXNoZXIvc3JjL2V2ZW50cy9jYWxsYmFja19yZWdpc3RyeS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbHVmZnktcHVzaGVyL3NyYy9ldmVudHMvZGlzcGF0Y2hlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwX2FfdXNlcl8xLmpzIiwid2VicGFjazovLy8uL3NyYy9jaGFubmVsL2NoYW5uZWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NoYW5uZWwvcHVzaGVyLWNoYW5uZWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NoYW5uZWwvcHVzaGVyLXByZXNlbmNlLWNoYW5uZWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NoYW5uZWwvcHVzaGVyLXByaXZhdGUtY2hhbm5lbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29ubmVjdG9yL3B1c2hlcl9jb25uZWN0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VjaG8uanMiXSwibmFtZXMiOlsid2luZG93IiwiRWNobyIsImhvc3QiLCJhdXRoIiwibWV0aG9kIiwidXJsIiwiaGVhZGVycyIsInBhcmFtcyIsImpvaW4iLCJoZXJlIiwidXNlcnMiLCJjb25zb2xlIiwibG9nIiwiam9pbmluZyIsInVzZXIiLCJsZWF2aW5nIiwibGlzdGVuIiwiZSIsIkNoYW5uZWwiLCJwdXNoZXIiLCJuYW1lIiwic3Vic2NyaWJlIiwic3Vic2NyaXB0aW9uIiwidW5zdWJzY3JpYmUiLCJldmVudCIsImNhbGxiYWNrIiwib24iLCJ1bmJpbmQiLCJiaW5kIiwiZGF0YSIsInNlbmQiLCJjaGFubmVsIiwiUHVzaGVyQ2hhbm5lbCIsIlB1c2hlclByZXNlbmNlQ2hhbm5lbCIsImJhY2siLCJQdXNoZXJQcml2YXRlQ2hhbm5lbCIsIlB1c2hlckNvbm5lY3RvciIsImFwcF9rZXkiLCJvcHRpb25zIiwiUHVzaGVyIiwiY2hhbm5lbHMiLCJ1bmRlZmluZWQiLCJhcHBrZXkiLCJjb25uZWN0b3IiLCJwcml2YXRlQ2hhbm5lbCIsInByZXNlbmNlQ2hhbm5lbCIsImluZGV4T2YiLCJwcml2YXRlIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNsRkEsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0RBQWtELGdDQUFnQztBQUNsRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnRUFBZ0Usa0JBQWtCO0FBQ2xGO0FBQ0EseURBQXlELGNBQWM7QUFDdkU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBaUQsaUNBQWlDO0FBQ2xGLHdIQUF3SCxtQkFBbUIsRUFBRTtBQUM3STtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMsMEJBQTBCLEVBQUU7QUFDL0QseUNBQXlDLGVBQWU7QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhEQUE4RCwrREFBK0Q7QUFDN0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNENBQTRDO0FBQzVDOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7OztBQUdBLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsWUFBWSxNQUFNO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7OztBQUdBLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsUUFB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O0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FB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T0FBOUIsQ0FBUDtBQUNIO0FBWkw7QUFBQTtBQUFBLHlCQWNTQSxPQWRULEVBY2tCO0FBQ1YsYUFBTyxLQUFLWSxTQUFMLENBQWVFLGVBQWYsQ0FBK0JkLE9BQS9CLENBQVA7QUFDSDtBQWhCTDtBQUFBO0FBQUEsOEJBa0JjWCxJQWxCZCxFQWtCb0I7QUFDWixVQUFJQSxJQUFJLENBQUMwQixPQUFMLENBQWEsVUFBYixNQUE2QixDQUFqQyxFQUFvQztBQUNoQyxlQUFPLEtBQUtDLE9BQUwsQ0FBYTNCLElBQWIsQ0FBUDtBQUNILE9BRkQsTUFFTyxJQUFJQSxJQUFJLENBQUMwQixPQUFMLENBQWEsV0FBYixNQUE4QixDQUFsQyxFQUFxQztBQUN4QyxlQUFPLEtBQUt0QyxJQUFMLENBQVVZLElBQVYsQ0FBUDtBQUNILE9BRk0sTUFFQTtBQUNILGVBQU8sS0FBS1csT0FBTCxDQUFhWCxJQUFiLENBQVA7QUFDSDtBQUNKO0FBRUQ7Ozs7O0FBNUJKO0FBQUE7QUFBQSxnQ0FnQ2dCVyxPQWhDaEIsRUFnQ3lCO0FBQ2pCLFdBQUtZLFNBQUwsQ0FBZXBCLFdBQWYsQ0FBMkJRLE9BQTNCO0FBQ0g7QUFsQ0w7O0FBQUE7QUFBQTtBQXFDQS9CLE1BQU0sQ0FBQ0MsSUFBUCxHQUFjQSxJQUFkLEMiLCJmaWxlIjoiYXBwX2FfdXNlcl8xLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvYXBwX2FfdXNlcl8xLmpzXCIpO1xuIiwiLyoqKioqKi8gKGZ1bmN0aW9uKG1vZHVsZXMpIHsgLy8gd2VicGFja0Jvb3RzdHJhcFxuLyoqKioqKi8gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4vKioqKioqLyBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuLyoqKioqKi8gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuLyoqKioqKi8gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4vKioqKioqLyBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbi8qKioqKiovIFx0XHR9XG4vKioqKioqLyBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbi8qKioqKiovIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4vKioqKioqLyBcdFx0XHRpOiBtb2R1bGVJZCxcbi8qKioqKiovIFx0XHRcdGw6IGZhbHNlLFxuLyoqKioqKi8gXHRcdFx0ZXhwb3J0czoge31cbi8qKioqKiovIFx0XHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbi8qKioqKiovIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuLyoqKioqKi8gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbi8qKioqKiovIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4vKioqKioqLyBcdH1cbi8qKioqKiovXG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbi8qKioqKiovIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4vKioqKioqLyBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbi8qKioqKiovIFx0XHR9XG4vKioqKioqLyBcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbi8qKioqKiovIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbi8qKioqKiovIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuLyoqKioqKi8gXHRcdH1cbi8qKioqKiovIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuLyoqKioqKi8gXHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4vKioqKioqLyBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuLyoqKioqKi8gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbi8qKioqKiovIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4vKioqKioqLyBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbi8qKioqKiovIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbi8qKioqKiovIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuLyoqKioqKi8gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4vKioqKioqLyBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbi8qKioqKiovIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuLyoqKioqKi8gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbi8qKioqKiovIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4vKioqKioqLyBcdFx0cmV0dXJuIG5zO1xuLyoqKioqKi8gXHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4vKioqKioqLyBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4vKioqKioqLyBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuLyoqKioqKi8gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbi8qKioqKiovIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4vKioqKioqLyBcdFx0cmV0dXJuIGdldHRlcjtcbi8qKioqKiovIFx0fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuLyoqKioqKi9cbi8qKioqKiovXG4vKioqKioqLyBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLyoqKioqKi8gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL3B1c2hlci5qc1wiKTtcbi8qKioqKiovIH0pXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKi8gKHtcblxuLyoqKi8gXCIuL25vZGVfbW9kdWxlcy9heGlvcy9pbmRleC5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL25vZGVfbW9kdWxlcy9heGlvcy9pbmRleC5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5tb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vbGliL2F4aW9zICovIFwiLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2F4aW9zLmpzXCIpO1xuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvYWRhcHRlcnMveGhyLmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2FkYXB0ZXJzL3hoci5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5cbnZhciB1dGlscyA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vLi4vdXRpbHMgKi8gXCIuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvdXRpbHMuanNcIik7XG52YXIgc2V0dGxlID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi8uLi9jb3JlL3NldHRsZSAqLyBcIi4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL3NldHRsZS5qc1wiKTtcbnZhciBidWlsZFVSTCA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vLi4vaGVscGVycy9idWlsZFVSTCAqLyBcIi4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2J1aWxkVVJMLmpzXCIpO1xudmFyIHBhcnNlSGVhZGVycyA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vLi4vaGVscGVycy9wYXJzZUhlYWRlcnMgKi8gXCIuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9wYXJzZUhlYWRlcnMuanNcIik7XG52YXIgaXNVUkxTYW1lT3JpZ2luID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi8uLi9oZWxwZXJzL2lzVVJMU2FtZU9yaWdpbiAqLyBcIi4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2lzVVJMU2FtZU9yaWdpbi5qc1wiKTtcbnZhciBjcmVhdGVFcnJvciA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4uL2NvcmUvY3JlYXRlRXJyb3IgKi8gXCIuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9jcmVhdGVFcnJvci5qc1wiKTtcbnZhciBidG9hID0gKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5idG9hICYmIHdpbmRvdy5idG9hLmJpbmQod2luZG93KSkgfHwgX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi8uLi9oZWxwZXJzL2J0b2EgKi8gXCIuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9idG9hLmpzXCIpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHhockFkYXB0ZXIoY29uZmlnKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiBkaXNwYXRjaFhoclJlcXVlc3QocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgdmFyIHJlcXVlc3REYXRhID0gY29uZmlnLmRhdGE7XG4gICAgdmFyIHJlcXVlc3RIZWFkZXJzID0gY29uZmlnLmhlYWRlcnM7XG5cbiAgICBpZiAodXRpbHMuaXNGb3JtRGF0YShyZXF1ZXN0RGF0YSkpIHtcbiAgICAgIGRlbGV0ZSByZXF1ZXN0SGVhZGVyc1snQ29udGVudC1UeXBlJ107IC8vIExldCB0aGUgYnJvd3NlciBzZXQgaXRcbiAgICB9XG5cbiAgICB2YXIgcmVxdWVzdCA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgIHZhciBsb2FkRXZlbnQgPSAnb25yZWFkeXN0YXRlY2hhbmdlJztcbiAgICB2YXIgeERvbWFpbiA9IGZhbHNlO1xuXG4gICAgLy8gRm9yIElFIDgvOSBDT1JTIHN1cHBvcnRcbiAgICAvLyBPbmx5IHN1cHBvcnRzIFBPU1QgYW5kIEdFVCBjYWxscyBhbmQgZG9lc24ndCByZXR1cm5zIHRoZSByZXNwb25zZSBoZWFkZXJzLlxuICAgIC8vIERPTidUIGRvIHRoaXMgZm9yIHRlc3RpbmcgYi9jIFhNTEh0dHBSZXF1ZXN0IGlzIG1vY2tlZCwgbm90IFhEb21haW5SZXF1ZXN0LlxuICAgIGlmIChcImRldmVsb3BtZW50XCIgIT09ICd0ZXN0JyAmJlxuICAgICAgICB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJlxuICAgICAgICB3aW5kb3cuWERvbWFpblJlcXVlc3QgJiYgISgnd2l0aENyZWRlbnRpYWxzJyBpbiByZXF1ZXN0KSAmJlxuICAgICAgICAhaXNVUkxTYW1lT3JpZ2luKGNvbmZpZy51cmwpKSB7XG4gICAgICByZXF1ZXN0ID0gbmV3IHdpbmRvdy5YRG9tYWluUmVxdWVzdCgpO1xuICAgICAgbG9hZEV2ZW50ID0gJ29ubG9hZCc7XG4gICAgICB4RG9tYWluID0gdHJ1ZTtcbiAgICAgIHJlcXVlc3Qub25wcm9ncmVzcyA9IGZ1bmN0aW9uIGhhbmRsZVByb2dyZXNzKCkge307XG4gICAgICByZXF1ZXN0Lm9udGltZW91dCA9IGZ1bmN0aW9uIGhhbmRsZVRpbWVvdXQoKSB7fTtcbiAgICB9XG5cbiAgICAvLyBIVFRQIGJhc2ljIGF1dGhlbnRpY2F0aW9uXG4gICAgaWYgKGNvbmZpZy5hdXRoKSB7XG4gICAgICB2YXIgdXNlcm5hbWUgPSBjb25maWcuYXV0aC51c2VybmFtZSB8fCAnJztcbiAgICAgIHZhciBwYXNzd29yZCA9IGNvbmZpZy5hdXRoLnBhc3N3b3JkIHx8ICcnO1xuICAgICAgcmVxdWVzdEhlYWRlcnMuQXV0aG9yaXphdGlvbiA9ICdCYXNpYyAnICsgYnRvYSh1c2VybmFtZSArICc6JyArIHBhc3N3b3JkKTtcbiAgICB9XG5cbiAgICByZXF1ZXN0Lm9wZW4oY29uZmlnLm1ldGhvZC50b1VwcGVyQ2FzZSgpLCBidWlsZFVSTChjb25maWcudXJsLCBjb25maWcucGFyYW1zLCBjb25maWcucGFyYW1zU2VyaWFsaXplciksIHRydWUpO1xuXG4gICAgLy8gU2V0IHRoZSByZXF1ZXN0IHRpbWVvdXQgaW4gTVNcbiAgICByZXF1ZXN0LnRpbWVvdXQgPSBjb25maWcudGltZW91dDtcblxuICAgIC8vIExpc3RlbiBmb3IgcmVhZHkgc3RhdGVcbiAgICByZXF1ZXN0W2xvYWRFdmVudF0gPSBmdW5jdGlvbiBoYW5kbGVMb2FkKCkge1xuICAgICAgaWYgKCFyZXF1ZXN0IHx8IChyZXF1ZXN0LnJlYWR5U3RhdGUgIT09IDQgJiYgIXhEb21haW4pKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgLy8gVGhlIHJlcXVlc3QgZXJyb3JlZCBvdXQgYW5kIHdlIGRpZG4ndCBnZXQgYSByZXNwb25zZSwgdGhpcyB3aWxsIGJlXG4gICAgICAvLyBoYW5kbGVkIGJ5IG9uZXJyb3IgaW5zdGVhZFxuICAgICAgLy8gV2l0aCBvbmUgZXhjZXB0aW9uOiByZXF1ZXN0IHRoYXQgdXNpbmcgZmlsZTogcHJvdG9jb2wsIG1vc3QgYnJvd3NlcnNcbiAgICAgIC8vIHdpbGwgcmV0dXJuIHN0YXR1cyBhcyAwIGV2ZW4gdGhvdWdoIGl0J3MgYSBzdWNjZXNzZnVsIHJlcXVlc3RcbiAgICAgIGlmIChyZXF1ZXN0LnN0YXR1cyA9PT0gMCAmJiAhKHJlcXVlc3QucmVzcG9uc2VVUkwgJiYgcmVxdWVzdC5yZXNwb25zZVVSTC5pbmRleE9mKCdmaWxlOicpID09PSAwKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8vIFByZXBhcmUgdGhlIHJlc3BvbnNlXG4gICAgICB2YXIgcmVzcG9uc2VIZWFkZXJzID0gJ2dldEFsbFJlc3BvbnNlSGVhZGVycycgaW4gcmVxdWVzdCA/IHBhcnNlSGVhZGVycyhyZXF1ZXN0LmdldEFsbFJlc3BvbnNlSGVhZGVycygpKSA6IG51bGw7XG4gICAgICB2YXIgcmVzcG9uc2VEYXRhID0gIWNvbmZpZy5yZXNwb25zZVR5cGUgfHwgY29uZmlnLnJlc3BvbnNlVHlwZSA9PT0gJ3RleHQnID8gcmVxdWVzdC5yZXNwb25zZVRleHQgOiByZXF1ZXN0LnJlc3BvbnNlO1xuICAgICAgdmFyIHJlc3BvbnNlID0ge1xuICAgICAgICBkYXRhOiByZXNwb25zZURhdGEsXG4gICAgICAgIC8vIElFIHNlbmRzIDEyMjMgaW5zdGVhZCBvZiAyMDQgKGh0dHBzOi8vZ2l0aHViLmNvbS9heGlvcy9heGlvcy9pc3N1ZXMvMjAxKVxuICAgICAgICBzdGF0dXM6IHJlcXVlc3Quc3RhdHVzID09PSAxMjIzID8gMjA0IDogcmVxdWVzdC5zdGF0dXMsXG4gICAgICAgIHN0YXR1c1RleHQ6IHJlcXVlc3Quc3RhdHVzID09PSAxMjIzID8gJ05vIENvbnRlbnQnIDogcmVxdWVzdC5zdGF0dXNUZXh0LFxuICAgICAgICBoZWFkZXJzOiByZXNwb25zZUhlYWRlcnMsXG4gICAgICAgIGNvbmZpZzogY29uZmlnLFxuICAgICAgICByZXF1ZXN0OiByZXF1ZXN0XG4gICAgICB9O1xuXG4gICAgICBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCByZXNwb25zZSk7XG5cbiAgICAgIC8vIENsZWFuIHVwIHJlcXVlc3RcbiAgICAgIHJlcXVlc3QgPSBudWxsO1xuICAgIH07XG5cbiAgICAvLyBIYW5kbGUgbG93IGxldmVsIG5ldHdvcmsgZXJyb3JzXG4gICAgcmVxdWVzdC5vbmVycm9yID0gZnVuY3Rpb24gaGFuZGxlRXJyb3IoKSB7XG4gICAgICAvLyBSZWFsIGVycm9ycyBhcmUgaGlkZGVuIGZyb20gdXMgYnkgdGhlIGJyb3dzZXJcbiAgICAgIC8vIG9uZXJyb3Igc2hvdWxkIG9ubHkgZmlyZSBpZiBpdCdzIGEgbmV0d29yayBlcnJvclxuICAgICAgcmVqZWN0KGNyZWF0ZUVycm9yKCdOZXR3b3JrIEVycm9yJywgY29uZmlnLCBudWxsLCByZXF1ZXN0KSk7XG5cbiAgICAgIC8vIENsZWFuIHVwIHJlcXVlc3RcbiAgICAgIHJlcXVlc3QgPSBudWxsO1xuICAgIH07XG5cbiAgICAvLyBIYW5kbGUgdGltZW91dFxuICAgIHJlcXVlc3Qub250aW1lb3V0ID0gZnVuY3Rpb24gaGFuZGxlVGltZW91dCgpIHtcbiAgICAgIHJlamVjdChjcmVhdGVFcnJvcigndGltZW91dCBvZiAnICsgY29uZmlnLnRpbWVvdXQgKyAnbXMgZXhjZWVkZWQnLCBjb25maWcsICdFQ09OTkFCT1JURUQnLFxuICAgICAgICByZXF1ZXN0KSk7XG5cbiAgICAgIC8vIENsZWFuIHVwIHJlcXVlc3RcbiAgICAgIHJlcXVlc3QgPSBudWxsO1xuICAgIH07XG5cbiAgICAvLyBBZGQgeHNyZiBoZWFkZXJcbiAgICAvLyBUaGlzIGlzIG9ubHkgZG9uZSBpZiBydW5uaW5nIGluIGEgc3RhbmRhcmQgYnJvd3NlciBlbnZpcm9ubWVudC5cbiAgICAvLyBTcGVjaWZpY2FsbHkgbm90IGlmIHdlJ3JlIGluIGEgd2ViIHdvcmtlciwgb3IgcmVhY3QtbmF0aXZlLlxuICAgIGlmICh1dGlscy5pc1N0YW5kYXJkQnJvd3NlckVudigpKSB7XG4gICAgICB2YXIgY29va2llcyA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vLi4vaGVscGVycy9jb29raWVzICovIFwiLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvY29va2llcy5qc1wiKTtcblxuICAgICAgLy8gQWRkIHhzcmYgaGVhZGVyXG4gICAgICB2YXIgeHNyZlZhbHVlID0gKGNvbmZpZy53aXRoQ3JlZGVudGlhbHMgfHwgaXNVUkxTYW1lT3JpZ2luKGNvbmZpZy51cmwpKSAmJiBjb25maWcueHNyZkNvb2tpZU5hbWUgP1xuICAgICAgICAgIGNvb2tpZXMucmVhZChjb25maWcueHNyZkNvb2tpZU5hbWUpIDpcbiAgICAgICAgICB1bmRlZmluZWQ7XG5cbiAgICAgIGlmICh4c3JmVmFsdWUpIHtcbiAgICAgICAgcmVxdWVzdEhlYWRlcnNbY29uZmlnLnhzcmZIZWFkZXJOYW1lXSA9IHhzcmZWYWx1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBBZGQgaGVhZGVycyB0byB0aGUgcmVxdWVzdFxuICAgIGlmICgnc2V0UmVxdWVzdEhlYWRlcicgaW4gcmVxdWVzdCkge1xuICAgICAgdXRpbHMuZm9yRWFjaChyZXF1ZXN0SGVhZGVycywgZnVuY3Rpb24gc2V0UmVxdWVzdEhlYWRlcih2YWwsIGtleSkge1xuICAgICAgICBpZiAodHlwZW9mIHJlcXVlc3REYXRhID09PSAndW5kZWZpbmVkJyAmJiBrZXkudG9Mb3dlckNhc2UoKSA9PT0gJ2NvbnRlbnQtdHlwZScpIHtcbiAgICAgICAgICAvLyBSZW1vdmUgQ29udGVudC1UeXBlIGlmIGRhdGEgaXMgdW5kZWZpbmVkXG4gICAgICAgICAgZGVsZXRlIHJlcXVlc3RIZWFkZXJzW2tleV07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gT3RoZXJ3aXNlIGFkZCBoZWFkZXIgdG8gdGhlIHJlcXVlc3RcbiAgICAgICAgICByZXF1ZXN0LnNldFJlcXVlc3RIZWFkZXIoa2V5LCB2YWwpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBBZGQgd2l0aENyZWRlbnRpYWxzIHRvIHJlcXVlc3QgaWYgbmVlZGVkXG4gICAgaWYgKGNvbmZpZy53aXRoQ3JlZGVudGlhbHMpIHtcbiAgICAgIHJlcXVlc3Qud2l0aENyZWRlbnRpYWxzID0gdHJ1ZTtcbiAgICB9XG5cbiAgICAvLyBBZGQgcmVzcG9uc2VUeXBlIHRvIHJlcXVlc3QgaWYgbmVlZGVkXG4gICAgaWYgKGNvbmZpZy5yZXNwb25zZVR5cGUpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHJlcXVlc3QucmVzcG9uc2VUeXBlID0gY29uZmlnLnJlc3BvbnNlVHlwZTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gRXhwZWN0ZWQgRE9NRXhjZXB0aW9uIHRocm93biBieSBicm93c2VycyBub3QgY29tcGF0aWJsZSBYTUxIdHRwUmVxdWVzdCBMZXZlbCAyLlxuICAgICAgICAvLyBCdXQsIHRoaXMgY2FuIGJlIHN1cHByZXNzZWQgZm9yICdqc29uJyB0eXBlIGFzIGl0IGNhbiBiZSBwYXJzZWQgYnkgZGVmYXVsdCAndHJhbnNmb3JtUmVzcG9uc2UnIGZ1bmN0aW9uLlxuICAgICAgICBpZiAoY29uZmlnLnJlc3BvbnNlVHlwZSAhPT0gJ2pzb24nKSB7XG4gICAgICAgICAgdGhyb3cgZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIEhhbmRsZSBwcm9ncmVzcyBpZiBuZWVkZWRcbiAgICBpZiAodHlwZW9mIGNvbmZpZy5vbkRvd25sb2FkUHJvZ3Jlc3MgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHJlcXVlc3QuYWRkRXZlbnRMaXN0ZW5lcigncHJvZ3Jlc3MnLCBjb25maWcub25Eb3dubG9hZFByb2dyZXNzKTtcbiAgICB9XG5cbiAgICAvLyBOb3QgYWxsIGJyb3dzZXJzIHN1cHBvcnQgdXBsb2FkIGV2ZW50c1xuICAgIGlmICh0eXBlb2YgY29uZmlnLm9uVXBsb2FkUHJvZ3Jlc3MgPT09ICdmdW5jdGlvbicgJiYgcmVxdWVzdC51cGxvYWQpIHtcbiAgICAgIHJlcXVlc3QudXBsb2FkLmFkZEV2ZW50TGlzdGVuZXIoJ3Byb2dyZXNzJywgY29uZmlnLm9uVXBsb2FkUHJvZ3Jlc3MpO1xuICAgIH1cblxuICAgIGlmIChjb25maWcuY2FuY2VsVG9rZW4pIHtcbiAgICAgIC8vIEhhbmRsZSBjYW5jZWxsYXRpb25cbiAgICAgIGNvbmZpZy5jYW5jZWxUb2tlbi5wcm9taXNlLnRoZW4oZnVuY3Rpb24gb25DYW5jZWxlZChjYW5jZWwpIHtcbiAgICAgICAgaWYgKCFyZXF1ZXN0KSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgcmVxdWVzdC5hYm9ydCgpO1xuICAgICAgICByZWplY3QoY2FuY2VsKTtcbiAgICAgICAgLy8gQ2xlYW4gdXAgcmVxdWVzdFxuICAgICAgICByZXF1ZXN0ID0gbnVsbDtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmIChyZXF1ZXN0RGF0YSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXF1ZXN0RGF0YSA9IG51bGw7XG4gICAgfVxuXG4gICAgLy8gU2VuZCB0aGUgcmVxdWVzdFxuICAgIHJlcXVlc3Quc2VuZChyZXF1ZXN0RGF0YSk7XG4gIH0pO1xufTtcblxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvYXhpb3MuanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9heGlvcy5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cblxudmFyIHV0aWxzID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi91dGlscyAqLyBcIi4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi91dGlscy5qc1wiKTtcbnZhciBiaW5kID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9oZWxwZXJzL2JpbmQgKi8gXCIuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9iaW5kLmpzXCIpO1xudmFyIEF4aW9zID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9jb3JlL0F4aW9zICovIFwiLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvQXhpb3MuanNcIik7XG52YXIgZGVmYXVsdHMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL2RlZmF1bHRzICovIFwiLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2RlZmF1bHRzLmpzXCIpO1xuXG4vKipcbiAqIENyZWF0ZSBhbiBpbnN0YW5jZSBvZiBBeGlvc1xuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBkZWZhdWx0Q29uZmlnIFRoZSBkZWZhdWx0IGNvbmZpZyBmb3IgdGhlIGluc3RhbmNlXG4gKiBAcmV0dXJuIHtBeGlvc30gQSBuZXcgaW5zdGFuY2Ugb2YgQXhpb3NcbiAqL1xuZnVuY3Rpb24gY3JlYXRlSW5zdGFuY2UoZGVmYXVsdENvbmZpZykge1xuICB2YXIgY29udGV4dCA9IG5ldyBBeGlvcyhkZWZhdWx0Q29uZmlnKTtcbiAgdmFyIGluc3RhbmNlID0gYmluZChBeGlvcy5wcm90b3R5cGUucmVxdWVzdCwgY29udGV4dCk7XG5cbiAgLy8gQ29weSBheGlvcy5wcm90b3R5cGUgdG8gaW5zdGFuY2VcbiAgdXRpbHMuZXh0ZW5kKGluc3RhbmNlLCBBeGlvcy5wcm90b3R5cGUsIGNvbnRleHQpO1xuXG4gIC8vIENvcHkgY29udGV4dCB0byBpbnN0YW5jZVxuICB1dGlscy5leHRlbmQoaW5zdGFuY2UsIGNvbnRleHQpO1xuXG4gIHJldHVybiBpbnN0YW5jZTtcbn1cblxuLy8gQ3JlYXRlIHRoZSBkZWZhdWx0IGluc3RhbmNlIHRvIGJlIGV4cG9ydGVkXG52YXIgYXhpb3MgPSBjcmVhdGVJbnN0YW5jZShkZWZhdWx0cyk7XG5cbi8vIEV4cG9zZSBBeGlvcyBjbGFzcyB0byBhbGxvdyBjbGFzcyBpbmhlcml0YW5jZVxuYXhpb3MuQXhpb3MgPSBBeGlvcztcblxuLy8gRmFjdG9yeSBmb3IgY3JlYXRpbmcgbmV3IGluc3RhbmNlc1xuYXhpb3MuY3JlYXRlID0gZnVuY3Rpb24gY3JlYXRlKGluc3RhbmNlQ29uZmlnKSB7XG4gIHJldHVybiBjcmVhdGVJbnN0YW5jZSh1dGlscy5tZXJnZShkZWZhdWx0cywgaW5zdGFuY2VDb25maWcpKTtcbn07XG5cbi8vIEV4cG9zZSBDYW5jZWwgJiBDYW5jZWxUb2tlblxuYXhpb3MuQ2FuY2VsID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9jYW5jZWwvQ2FuY2VsICovIFwiLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NhbmNlbC9DYW5jZWwuanNcIik7XG5heGlvcy5DYW5jZWxUb2tlbiA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vY2FuY2VsL0NhbmNlbFRva2VuICovIFwiLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NhbmNlbC9DYW5jZWxUb2tlbi5qc1wiKTtcbmF4aW9zLmlzQ2FuY2VsID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9jYW5jZWwvaXNDYW5jZWwgKi8gXCIuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY2FuY2VsL2lzQ2FuY2VsLmpzXCIpO1xuXG4vLyBFeHBvc2UgYWxsL3NwcmVhZFxuYXhpb3MuYWxsID0gZnVuY3Rpb24gYWxsKHByb21pc2VzKSB7XG4gIHJldHVybiBQcm9taXNlLmFsbChwcm9taXNlcyk7XG59O1xuYXhpb3Muc3ByZWFkID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9oZWxwZXJzL3NwcmVhZCAqLyBcIi4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL3NwcmVhZC5qc1wiKTtcblxubW9kdWxlLmV4cG9ydHMgPSBheGlvcztcblxuLy8gQWxsb3cgdXNlIG9mIGRlZmF1bHQgaW1wb3J0IHN5bnRheCBpbiBUeXBlU2NyaXB0XG5tb2R1bGUuZXhwb3J0cy5kZWZhdWx0ID0gYXhpb3M7XG5cblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NhbmNlbC9DYW5jZWwuanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NhbmNlbC9DYW5jZWwuanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cblxuLyoqXG4gKiBBIGBDYW5jZWxgIGlzIGFuIG9iamVjdCB0aGF0IGlzIHRocm93biB3aGVuIGFuIG9wZXJhdGlvbiBpcyBjYW5jZWxlZC5cbiAqXG4gKiBAY2xhc3NcbiAqIEBwYXJhbSB7c3RyaW5nPX0gbWVzc2FnZSBUaGUgbWVzc2FnZS5cbiAqL1xuZnVuY3Rpb24gQ2FuY2VsKG1lc3NhZ2UpIHtcbiAgdGhpcy5tZXNzYWdlID0gbWVzc2FnZTtcbn1cblxuQ2FuY2VsLnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICByZXR1cm4gJ0NhbmNlbCcgKyAodGhpcy5tZXNzYWdlID8gJzogJyArIHRoaXMubWVzc2FnZSA6ICcnKTtcbn07XG5cbkNhbmNlbC5wcm90b3R5cGUuX19DQU5DRUxfXyA9IHRydWU7XG5cbm1vZHVsZS5leHBvcnRzID0gQ2FuY2VsO1xuXG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jYW5jZWwvQ2FuY2VsVG9rZW4uanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY2FuY2VsL0NhbmNlbFRva2VuLmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cblxudmFyIENhbmNlbCA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vQ2FuY2VsICovIFwiLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NhbmNlbC9DYW5jZWwuanNcIik7XG5cbi8qKlxuICogQSBgQ2FuY2VsVG9rZW5gIGlzIGFuIG9iamVjdCB0aGF0IGNhbiBiZSB1c2VkIHRvIHJlcXVlc3QgY2FuY2VsbGF0aW9uIG9mIGFuIG9wZXJhdGlvbi5cbiAqXG4gKiBAY2xhc3NcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGV4ZWN1dG9yIFRoZSBleGVjdXRvciBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gQ2FuY2VsVG9rZW4oZXhlY3V0b3IpIHtcbiAgaWYgKHR5cGVvZiBleGVjdXRvciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ2V4ZWN1dG9yIG11c3QgYmUgYSBmdW5jdGlvbi4nKTtcbiAgfVxuXG4gIHZhciByZXNvbHZlUHJvbWlzZTtcbiAgdGhpcy5wcm9taXNlID0gbmV3IFByb21pc2UoZnVuY3Rpb24gcHJvbWlzZUV4ZWN1dG9yKHJlc29sdmUpIHtcbiAgICByZXNvbHZlUHJvbWlzZSA9IHJlc29sdmU7XG4gIH0pO1xuXG4gIHZhciB0b2tlbiA9IHRoaXM7XG4gIGV4ZWN1dG9yKGZ1bmN0aW9uIGNhbmNlbChtZXNzYWdlKSB7XG4gICAgaWYgKHRva2VuLnJlYXNvbikge1xuICAgICAgLy8gQ2FuY2VsbGF0aW9uIGhhcyBhbHJlYWR5IGJlZW4gcmVxdWVzdGVkXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdG9rZW4ucmVhc29uID0gbmV3IENhbmNlbChtZXNzYWdlKTtcbiAgICByZXNvbHZlUHJvbWlzZSh0b2tlbi5yZWFzb24pO1xuICB9KTtcbn1cblxuLyoqXG4gKiBUaHJvd3MgYSBgQ2FuY2VsYCBpZiBjYW5jZWxsYXRpb24gaGFzIGJlZW4gcmVxdWVzdGVkLlxuICovXG5DYW5jZWxUb2tlbi5wcm90b3R5cGUudGhyb3dJZlJlcXVlc3RlZCA9IGZ1bmN0aW9uIHRocm93SWZSZXF1ZXN0ZWQoKSB7XG4gIGlmICh0aGlzLnJlYXNvbikge1xuICAgIHRocm93IHRoaXMucmVhc29uO1xuICB9XG59O1xuXG4vKipcbiAqIFJldHVybnMgYW4gb2JqZWN0IHRoYXQgY29udGFpbnMgYSBuZXcgYENhbmNlbFRva2VuYCBhbmQgYSBmdW5jdGlvbiB0aGF0LCB3aGVuIGNhbGxlZCxcbiAqIGNhbmNlbHMgdGhlIGBDYW5jZWxUb2tlbmAuXG4gKi9cbkNhbmNlbFRva2VuLnNvdXJjZSA9IGZ1bmN0aW9uIHNvdXJjZSgpIHtcbiAgdmFyIGNhbmNlbDtcbiAgdmFyIHRva2VuID0gbmV3IENhbmNlbFRva2VuKGZ1bmN0aW9uIGV4ZWN1dG9yKGMpIHtcbiAgICBjYW5jZWwgPSBjO1xuICB9KTtcbiAgcmV0dXJuIHtcbiAgICB0b2tlbjogdG9rZW4sXG4gICAgY2FuY2VsOiBjYW5jZWxcbiAgfTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gQ2FuY2VsVG9rZW47XG5cblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NhbmNlbC9pc0NhbmNlbC5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jYW5jZWwvaXNDYW5jZWwuanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGlzQ2FuY2VsKHZhbHVlKSB7XG4gIHJldHVybiAhISh2YWx1ZSAmJiB2YWx1ZS5fX0NBTkNFTF9fKTtcbn07XG5cblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvQXhpb3MuanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvQXhpb3MuanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cblxudmFyIGRlZmF1bHRzID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi8uLi9kZWZhdWx0cyAqLyBcIi4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9kZWZhdWx0cy5qc1wiKTtcbnZhciB1dGlscyA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vLi4vdXRpbHMgKi8gXCIuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvdXRpbHMuanNcIik7XG52YXIgSW50ZXJjZXB0b3JNYW5hZ2VyID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9JbnRlcmNlcHRvck1hbmFnZXIgKi8gXCIuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9JbnRlcmNlcHRvck1hbmFnZXIuanNcIik7XG52YXIgZGlzcGF0Y2hSZXF1ZXN0ID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9kaXNwYXRjaFJlcXVlc3QgKi8gXCIuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9kaXNwYXRjaFJlcXVlc3QuanNcIik7XG5cbi8qKlxuICogQ3JlYXRlIGEgbmV3IGluc3RhbmNlIG9mIEF4aW9zXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGluc3RhbmNlQ29uZmlnIFRoZSBkZWZhdWx0IGNvbmZpZyBmb3IgdGhlIGluc3RhbmNlXG4gKi9cbmZ1bmN0aW9uIEF4aW9zKGluc3RhbmNlQ29uZmlnKSB7XG4gIHRoaXMuZGVmYXVsdHMgPSBpbnN0YW5jZUNvbmZpZztcbiAgdGhpcy5pbnRlcmNlcHRvcnMgPSB7XG4gICAgcmVxdWVzdDogbmV3IEludGVyY2VwdG9yTWFuYWdlcigpLFxuICAgIHJlc3BvbnNlOiBuZXcgSW50ZXJjZXB0b3JNYW5hZ2VyKClcbiAgfTtcbn1cblxuLyoqXG4gKiBEaXNwYXRjaCBhIHJlcXVlc3RcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gY29uZmlnIFRoZSBjb25maWcgc3BlY2lmaWMgZm9yIHRoaXMgcmVxdWVzdCAobWVyZ2VkIHdpdGggdGhpcy5kZWZhdWx0cylcbiAqL1xuQXhpb3MucHJvdG90eXBlLnJlcXVlc3QgPSBmdW5jdGlvbiByZXF1ZXN0KGNvbmZpZykge1xuICAvKmVzbGludCBuby1wYXJhbS1yZWFzc2lnbjowKi9cbiAgLy8gQWxsb3cgZm9yIGF4aW9zKCdleGFtcGxlL3VybCdbLCBjb25maWddKSBhIGxhIGZldGNoIEFQSVxuICBpZiAodHlwZW9mIGNvbmZpZyA9PT0gJ3N0cmluZycpIHtcbiAgICBjb25maWcgPSB1dGlscy5tZXJnZSh7XG4gICAgICB1cmw6IGFyZ3VtZW50c1swXVxuICAgIH0sIGFyZ3VtZW50c1sxXSk7XG4gIH1cblxuICBjb25maWcgPSB1dGlscy5tZXJnZShkZWZhdWx0cywge21ldGhvZDogJ2dldCd9LCB0aGlzLmRlZmF1bHRzLCBjb25maWcpO1xuICBjb25maWcubWV0aG9kID0gY29uZmlnLm1ldGhvZC50b0xvd2VyQ2FzZSgpO1xuXG4gIC8vIEhvb2sgdXAgaW50ZXJjZXB0b3JzIG1pZGRsZXdhcmVcbiAgdmFyIGNoYWluID0gW2Rpc3BhdGNoUmVxdWVzdCwgdW5kZWZpbmVkXTtcbiAgdmFyIHByb21pc2UgPSBQcm9taXNlLnJlc29sdmUoY29uZmlnKTtcblxuICB0aGlzLmludGVyY2VwdG9ycy5yZXF1ZXN0LmZvckVhY2goZnVuY3Rpb24gdW5zaGlmdFJlcXVlc3RJbnRlcmNlcHRvcnMoaW50ZXJjZXB0b3IpIHtcbiAgICBjaGFpbi51bnNoaWZ0KGludGVyY2VwdG9yLmZ1bGZpbGxlZCwgaW50ZXJjZXB0b3IucmVqZWN0ZWQpO1xuICB9KTtcblxuICB0aGlzLmludGVyY2VwdG9ycy5yZXNwb25zZS5mb3JFYWNoKGZ1bmN0aW9uIHB1c2hSZXNwb25zZUludGVyY2VwdG9ycyhpbnRlcmNlcHRvcikge1xuICAgIGNoYWluLnB1c2goaW50ZXJjZXB0b3IuZnVsZmlsbGVkLCBpbnRlcmNlcHRvci5yZWplY3RlZCk7XG4gIH0pO1xuXG4gIHdoaWxlIChjaGFpbi5sZW5ndGgpIHtcbiAgICBwcm9taXNlID0gcHJvbWlzZS50aGVuKGNoYWluLnNoaWZ0KCksIGNoYWluLnNoaWZ0KCkpO1xuICB9XG5cbiAgcmV0dXJuIHByb21pc2U7XG59O1xuXG4vLyBQcm92aWRlIGFsaWFzZXMgZm9yIHN1cHBvcnRlZCByZXF1ZXN0IG1ldGhvZHNcbnV0aWxzLmZvckVhY2goWydkZWxldGUnLCAnZ2V0JywgJ2hlYWQnLCAnb3B0aW9ucyddLCBmdW5jdGlvbiBmb3JFYWNoTWV0aG9kTm9EYXRhKG1ldGhvZCkge1xuICAvKmVzbGludCBmdW5jLW5hbWVzOjAqL1xuICBBeGlvcy5wcm90b3R5cGVbbWV0aG9kXSA9IGZ1bmN0aW9uKHVybCwgY29uZmlnKSB7XG4gICAgcmV0dXJuIHRoaXMucmVxdWVzdCh1dGlscy5tZXJnZShjb25maWcgfHwge30sIHtcbiAgICAgIG1ldGhvZDogbWV0aG9kLFxuICAgICAgdXJsOiB1cmxcbiAgICB9KSk7XG4gIH07XG59KTtcblxudXRpbHMuZm9yRWFjaChbJ3Bvc3QnLCAncHV0JywgJ3BhdGNoJ10sIGZ1bmN0aW9uIGZvckVhY2hNZXRob2RXaXRoRGF0YShtZXRob2QpIHtcbiAgLyplc2xpbnQgZnVuYy1uYW1lczowKi9cbiAgQXhpb3MucHJvdG90eXBlW21ldGhvZF0gPSBmdW5jdGlvbih1cmwsIGRhdGEsIGNvbmZpZykge1xuICAgIHJldHVybiB0aGlzLnJlcXVlc3QodXRpbHMubWVyZ2UoY29uZmlnIHx8IHt9LCB7XG4gICAgICBtZXRob2Q6IG1ldGhvZCxcbiAgICAgIHVybDogdXJsLFxuICAgICAgZGF0YTogZGF0YVxuICAgIH0pKTtcbiAgfTtcbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEF4aW9zO1xuXG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL0ludGVyY2VwdG9yTWFuYWdlci5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvSW50ZXJjZXB0b3JNYW5hZ2VyLmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG52YXIgdXRpbHMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuLy4uL3V0aWxzICovIFwiLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL3V0aWxzLmpzXCIpO1xuXG5mdW5jdGlvbiBJbnRlcmNlcHRvck1hbmFnZXIoKSB7XG4gIHRoaXMuaGFuZGxlcnMgPSBbXTtcbn1cblxuLyoqXG4gKiBBZGQgYSBuZXcgaW50ZXJjZXB0b3IgdG8gdGhlIHN0YWNrXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVsZmlsbGVkIFRoZSBmdW5jdGlvbiB0byBoYW5kbGUgYHRoZW5gIGZvciBhIGBQcm9taXNlYFxuICogQHBhcmFtIHtGdW5jdGlvbn0gcmVqZWN0ZWQgVGhlIGZ1bmN0aW9uIHRvIGhhbmRsZSBgcmVqZWN0YCBmb3IgYSBgUHJvbWlzZWBcbiAqXG4gKiBAcmV0dXJuIHtOdW1iZXJ9IEFuIElEIHVzZWQgdG8gcmVtb3ZlIGludGVyY2VwdG9yIGxhdGVyXG4gKi9cbkludGVyY2VwdG9yTWFuYWdlci5wcm90b3R5cGUudXNlID0gZnVuY3Rpb24gdXNlKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpIHtcbiAgdGhpcy5oYW5kbGVycy5wdXNoKHtcbiAgICBmdWxmaWxsZWQ6IGZ1bGZpbGxlZCxcbiAgICByZWplY3RlZDogcmVqZWN0ZWRcbiAgfSk7XG4gIHJldHVybiB0aGlzLmhhbmRsZXJzLmxlbmd0aCAtIDE7XG59O1xuXG4vKipcbiAqIFJlbW92ZSBhbiBpbnRlcmNlcHRvciBmcm9tIHRoZSBzdGFja1xuICpcbiAqIEBwYXJhbSB7TnVtYmVyfSBpZCBUaGUgSUQgdGhhdCB3YXMgcmV0dXJuZWQgYnkgYHVzZWBcbiAqL1xuSW50ZXJjZXB0b3JNYW5hZ2VyLnByb3RvdHlwZS5lamVjdCA9IGZ1bmN0aW9uIGVqZWN0KGlkKSB7XG4gIGlmICh0aGlzLmhhbmRsZXJzW2lkXSkge1xuICAgIHRoaXMuaGFuZGxlcnNbaWRdID0gbnVsbDtcbiAgfVxufTtcblxuLyoqXG4gKiBJdGVyYXRlIG92ZXIgYWxsIHRoZSByZWdpc3RlcmVkIGludGVyY2VwdG9yc1xuICpcbiAqIFRoaXMgbWV0aG9kIGlzIHBhcnRpY3VsYXJseSB1c2VmdWwgZm9yIHNraXBwaW5nIG92ZXIgYW55XG4gKiBpbnRlcmNlcHRvcnMgdGhhdCBtYXkgaGF2ZSBiZWNvbWUgYG51bGxgIGNhbGxpbmcgYGVqZWN0YC5cbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmbiBUaGUgZnVuY3Rpb24gdG8gY2FsbCBmb3IgZWFjaCBpbnRlcmNlcHRvclxuICovXG5JbnRlcmNlcHRvck1hbmFnZXIucHJvdG90eXBlLmZvckVhY2ggPSBmdW5jdGlvbiBmb3JFYWNoKGZuKSB7XG4gIHV0aWxzLmZvckVhY2godGhpcy5oYW5kbGVycywgZnVuY3Rpb24gZm9yRWFjaEhhbmRsZXIoaCkge1xuICAgIGlmIChoICE9PSBudWxsKSB7XG4gICAgICBmbihoKTtcbiAgICB9XG4gIH0pO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBJbnRlcmNlcHRvck1hbmFnZXI7XG5cblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvY3JlYXRlRXJyb3IuanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvY3JlYXRlRXJyb3IuanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cblxudmFyIGVuaGFuY2VFcnJvciA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vZW5oYW5jZUVycm9yICovIFwiLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvZW5oYW5jZUVycm9yLmpzXCIpO1xuXG4vKipcbiAqIENyZWF0ZSBhbiBFcnJvciB3aXRoIHRoZSBzcGVjaWZpZWQgbWVzc2FnZSwgY29uZmlnLCBlcnJvciBjb2RlLCByZXF1ZXN0IGFuZCByZXNwb25zZS5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gbWVzc2FnZSBUaGUgZXJyb3IgbWVzc2FnZS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWcgVGhlIGNvbmZpZy5cbiAqIEBwYXJhbSB7c3RyaW5nfSBbY29kZV0gVGhlIGVycm9yIGNvZGUgKGZvciBleGFtcGxlLCAnRUNPTk5BQk9SVEVEJykuXG4gKiBAcGFyYW0ge09iamVjdH0gW3JlcXVlc3RdIFRoZSByZXF1ZXN0LlxuICogQHBhcmFtIHtPYmplY3R9IFtyZXNwb25zZV0gVGhlIHJlc3BvbnNlLlxuICogQHJldHVybnMge0Vycm9yfSBUaGUgY3JlYXRlZCBlcnJvci5cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjcmVhdGVFcnJvcihtZXNzYWdlLCBjb25maWcsIGNvZGUsIHJlcXVlc3QsIHJlc3BvbnNlKSB7XG4gIHZhciBlcnJvciA9IG5ldyBFcnJvcihtZXNzYWdlKTtcbiAgcmV0dXJuIGVuaGFuY2VFcnJvcihlcnJvciwgY29uZmlnLCBjb2RlLCByZXF1ZXN0LCByZXNwb25zZSk7XG59O1xuXG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL2Rpc3BhdGNoUmVxdWVzdC5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvZGlzcGF0Y2hSZXF1ZXN0LmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG52YXIgdXRpbHMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuLy4uL3V0aWxzICovIFwiLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL3V0aWxzLmpzXCIpO1xudmFyIHRyYW5zZm9ybURhdGEgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL3RyYW5zZm9ybURhdGEgKi8gXCIuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS90cmFuc2Zvcm1EYXRhLmpzXCIpO1xudmFyIGlzQ2FuY2VsID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi4vY2FuY2VsL2lzQ2FuY2VsICovIFwiLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NhbmNlbC9pc0NhbmNlbC5qc1wiKTtcbnZhciBkZWZhdWx0cyA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4uL2RlZmF1bHRzICovIFwiLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2RlZmF1bHRzLmpzXCIpO1xudmFyIGlzQWJzb2x1dGVVUkwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuLy4uL2hlbHBlcnMvaXNBYnNvbHV0ZVVSTCAqLyBcIi4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2lzQWJzb2x1dGVVUkwuanNcIik7XG52YXIgY29tYmluZVVSTHMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuLy4uL2hlbHBlcnMvY29tYmluZVVSTHMgKi8gXCIuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9jb21iaW5lVVJMcy5qc1wiKTtcblxuLyoqXG4gKiBUaHJvd3MgYSBgQ2FuY2VsYCBpZiBjYW5jZWxsYXRpb24gaGFzIGJlZW4gcmVxdWVzdGVkLlxuICovXG5mdW5jdGlvbiB0aHJvd0lmQ2FuY2VsbGF0aW9uUmVxdWVzdGVkKGNvbmZpZykge1xuICBpZiAoY29uZmlnLmNhbmNlbFRva2VuKSB7XG4gICAgY29uZmlnLmNhbmNlbFRva2VuLnRocm93SWZSZXF1ZXN0ZWQoKTtcbiAgfVxufVxuXG4vKipcbiAqIERpc3BhdGNoIGEgcmVxdWVzdCB0byB0aGUgc2VydmVyIHVzaW5nIHRoZSBjb25maWd1cmVkIGFkYXB0ZXIuXG4gKlxuICogQHBhcmFtIHtvYmplY3R9IGNvbmZpZyBUaGUgY29uZmlnIHRoYXQgaXMgdG8gYmUgdXNlZCBmb3IgdGhlIHJlcXVlc3RcbiAqIEByZXR1cm5zIHtQcm9taXNlfSBUaGUgUHJvbWlzZSB0byBiZSBmdWxmaWxsZWRcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBkaXNwYXRjaFJlcXVlc3QoY29uZmlnKSB7XG4gIHRocm93SWZDYW5jZWxsYXRpb25SZXF1ZXN0ZWQoY29uZmlnKTtcblxuICAvLyBTdXBwb3J0IGJhc2VVUkwgY29uZmlnXG4gIGlmIChjb25maWcuYmFzZVVSTCAmJiAhaXNBYnNvbHV0ZVVSTChjb25maWcudXJsKSkge1xuICAgIGNvbmZpZy51cmwgPSBjb21iaW5lVVJMcyhjb25maWcuYmFzZVVSTCwgY29uZmlnLnVybCk7XG4gIH1cblxuICAvLyBFbnN1cmUgaGVhZGVycyBleGlzdFxuICBjb25maWcuaGVhZGVycyA9IGNvbmZpZy5oZWFkZXJzIHx8IHt9O1xuXG4gIC8vIFRyYW5zZm9ybSByZXF1ZXN0IGRhdGFcbiAgY29uZmlnLmRhdGEgPSB0cmFuc2Zvcm1EYXRhKFxuICAgIGNvbmZpZy5kYXRhLFxuICAgIGNvbmZpZy5oZWFkZXJzLFxuICAgIGNvbmZpZy50cmFuc2Zvcm1SZXF1ZXN0XG4gICk7XG5cbiAgLy8gRmxhdHRlbiBoZWFkZXJzXG4gIGNvbmZpZy5oZWFkZXJzID0gdXRpbHMubWVyZ2UoXG4gICAgY29uZmlnLmhlYWRlcnMuY29tbW9uIHx8IHt9LFxuICAgIGNvbmZpZy5oZWFkZXJzW2NvbmZpZy5tZXRob2RdIHx8IHt9LFxuICAgIGNvbmZpZy5oZWFkZXJzIHx8IHt9XG4gICk7XG5cbiAgdXRpbHMuZm9yRWFjaChcbiAgICBbJ2RlbGV0ZScsICdnZXQnLCAnaGVhZCcsICdwb3N0JywgJ3B1dCcsICdwYXRjaCcsICdjb21tb24nXSxcbiAgICBmdW5jdGlvbiBjbGVhbkhlYWRlckNvbmZpZyhtZXRob2QpIHtcbiAgICAgIGRlbGV0ZSBjb25maWcuaGVhZGVyc1ttZXRob2RdO1xuICAgIH1cbiAgKTtcblxuICB2YXIgYWRhcHRlciA9IGNvbmZpZy5hZGFwdGVyIHx8IGRlZmF1bHRzLmFkYXB0ZXI7XG5cbiAgcmV0dXJuIGFkYXB0ZXIoY29uZmlnKS50aGVuKGZ1bmN0aW9uIG9uQWRhcHRlclJlc29sdXRpb24ocmVzcG9uc2UpIHtcbiAgICB0aHJvd0lmQ2FuY2VsbGF0aW9uUmVxdWVzdGVkKGNvbmZpZyk7XG5cbiAgICAvLyBUcmFuc2Zvcm0gcmVzcG9uc2UgZGF0YVxuICAgIHJlc3BvbnNlLmRhdGEgPSB0cmFuc2Zvcm1EYXRhKFxuICAgICAgcmVzcG9uc2UuZGF0YSxcbiAgICAgIHJlc3BvbnNlLmhlYWRlcnMsXG4gICAgICBjb25maWcudHJhbnNmb3JtUmVzcG9uc2VcbiAgICApO1xuXG4gICAgcmV0dXJuIHJlc3BvbnNlO1xuICB9LCBmdW5jdGlvbiBvbkFkYXB0ZXJSZWplY3Rpb24ocmVhc29uKSB7XG4gICAgaWYgKCFpc0NhbmNlbChyZWFzb24pKSB7XG4gICAgICB0aHJvd0lmQ2FuY2VsbGF0aW9uUmVxdWVzdGVkKGNvbmZpZyk7XG5cbiAgICAgIC8vIFRyYW5zZm9ybSByZXNwb25zZSBkYXRhXG4gICAgICBpZiAocmVhc29uICYmIHJlYXNvbi5yZXNwb25zZSkge1xuICAgICAgICByZWFzb24ucmVzcG9uc2UuZGF0YSA9IHRyYW5zZm9ybURhdGEoXG4gICAgICAgICAgcmVhc29uLnJlc3BvbnNlLmRhdGEsXG4gICAgICAgICAgcmVhc29uLnJlc3BvbnNlLmhlYWRlcnMsXG4gICAgICAgICAgY29uZmlnLnRyYW5zZm9ybVJlc3BvbnNlXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIFByb21pc2UucmVqZWN0KHJlYXNvbik7XG4gIH0pO1xufTtcblxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9lbmhhbmNlRXJyb3IuanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL2VuaGFuY2VFcnJvci5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cblxuLyoqXG4gKiBVcGRhdGUgYW4gRXJyb3Igd2l0aCB0aGUgc3BlY2lmaWVkIGNvbmZpZywgZXJyb3IgY29kZSwgYW5kIHJlc3BvbnNlLlxuICpcbiAqIEBwYXJhbSB7RXJyb3J9IGVycm9yIFRoZSBlcnJvciB0byB1cGRhdGUuXG4gKiBAcGFyYW0ge09iamVjdH0gY29uZmlnIFRoZSBjb25maWcuXG4gKiBAcGFyYW0ge3N0cmluZ30gW2NvZGVdIFRoZSBlcnJvciBjb2RlIChmb3IgZXhhbXBsZSwgJ0VDT05OQUJPUlRFRCcpLlxuICogQHBhcmFtIHtPYmplY3R9IFtyZXF1ZXN0XSBUaGUgcmVxdWVzdC5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbcmVzcG9uc2VdIFRoZSByZXNwb25zZS5cbiAqIEByZXR1cm5zIHtFcnJvcn0gVGhlIGVycm9yLlxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGVuaGFuY2VFcnJvcihlcnJvciwgY29uZmlnLCBjb2RlLCByZXF1ZXN0LCByZXNwb25zZSkge1xuICBlcnJvci5jb25maWcgPSBjb25maWc7XG4gIGlmIChjb2RlKSB7XG4gICAgZXJyb3IuY29kZSA9IGNvZGU7XG4gIH1cbiAgZXJyb3IucmVxdWVzdCA9IHJlcXVlc3Q7XG4gIGVycm9yLnJlc3BvbnNlID0gcmVzcG9uc2U7XG4gIHJldHVybiBlcnJvcjtcbn07XG5cblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvc2V0dGxlLmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9zZXR0bGUuanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5cbnZhciBjcmVhdGVFcnJvciA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vY3JlYXRlRXJyb3IgKi8gXCIuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9jcmVhdGVFcnJvci5qc1wiKTtcblxuLyoqXG4gKiBSZXNvbHZlIG9yIHJlamVjdCBhIFByb21pc2UgYmFzZWQgb24gcmVzcG9uc2Ugc3RhdHVzLlxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IHJlc29sdmUgQSBmdW5jdGlvbiB0aGF0IHJlc29sdmVzIHRoZSBwcm9taXNlLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gcmVqZWN0IEEgZnVuY3Rpb24gdGhhdCByZWplY3RzIHRoZSBwcm9taXNlLlxuICogQHBhcmFtIHtvYmplY3R9IHJlc3BvbnNlIFRoZSByZXNwb25zZS5cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCByZXNwb25zZSkge1xuICB2YXIgdmFsaWRhdGVTdGF0dXMgPSByZXNwb25zZS5jb25maWcudmFsaWRhdGVTdGF0dXM7XG4gIC8vIE5vdGU6IHN0YXR1cyBpcyBub3QgZXhwb3NlZCBieSBYRG9tYWluUmVxdWVzdFxuICBpZiAoIXJlc3BvbnNlLnN0YXR1cyB8fCAhdmFsaWRhdGVTdGF0dXMgfHwgdmFsaWRhdGVTdGF0dXMocmVzcG9uc2Uuc3RhdHVzKSkge1xuICAgIHJlc29sdmUocmVzcG9uc2UpO1xuICB9IGVsc2Uge1xuICAgIHJlamVjdChjcmVhdGVFcnJvcihcbiAgICAgICdSZXF1ZXN0IGZhaWxlZCB3aXRoIHN0YXR1cyBjb2RlICcgKyByZXNwb25zZS5zdGF0dXMsXG4gICAgICByZXNwb25zZS5jb25maWcsXG4gICAgICBudWxsLFxuICAgICAgcmVzcG9uc2UucmVxdWVzdCxcbiAgICAgIHJlc3BvbnNlXG4gICAgKSk7XG4gIH1cbn07XG5cblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvdHJhbnNmb3JtRGF0YS5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL3RyYW5zZm9ybURhdGEuanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG52YXIgdXRpbHMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuLy4uL3V0aWxzICovIFwiLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL3V0aWxzLmpzXCIpO1xuXG4vKipcbiAqIFRyYW5zZm9ybSB0aGUgZGF0YSBmb3IgYSByZXF1ZXN0IG9yIGEgcmVzcG9uc2VcbiAqXG4gKiBAcGFyYW0ge09iamVjdHxTdHJpbmd9IGRhdGEgVGhlIGRhdGEgdG8gYmUgdHJhbnNmb3JtZWRcbiAqIEBwYXJhbSB7QXJyYXl9IGhlYWRlcnMgVGhlIGhlYWRlcnMgZm9yIHRoZSByZXF1ZXN0IG9yIHJlc3BvbnNlXG4gKiBAcGFyYW0ge0FycmF5fEZ1bmN0aW9ufSBmbnMgQSBzaW5nbGUgZnVuY3Rpb24gb3IgQXJyYXkgb2YgZnVuY3Rpb25zXG4gKiBAcmV0dXJucyB7Kn0gVGhlIHJlc3VsdGluZyB0cmFuc2Zvcm1lZCBkYXRhXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gdHJhbnNmb3JtRGF0YShkYXRhLCBoZWFkZXJzLCBmbnMpIHtcbiAgLyplc2xpbnQgbm8tcGFyYW0tcmVhc3NpZ246MCovXG4gIHV0aWxzLmZvckVhY2goZm5zLCBmdW5jdGlvbiB0cmFuc2Zvcm0oZm4pIHtcbiAgICBkYXRhID0gZm4oZGF0YSwgaGVhZGVycyk7XG4gIH0pO1xuXG4gIHJldHVybiBkYXRhO1xufTtcblxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvZGVmYXVsdHMuanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9kZWZhdWx0cy5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG4vKiBXRUJQQUNLIFZBUiBJTkpFQ1RJT04gKi8oZnVuY3Rpb24ocHJvY2Vzcykge1xuXG52YXIgdXRpbHMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL3V0aWxzICovIFwiLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL3V0aWxzLmpzXCIpO1xudmFyIG5vcm1hbGl6ZUhlYWRlck5hbWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL2hlbHBlcnMvbm9ybWFsaXplSGVhZGVyTmFtZSAqLyBcIi4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL25vcm1hbGl6ZUhlYWRlck5hbWUuanNcIik7XG5cbnZhciBERUZBVUxUX0NPTlRFTlRfVFlQRSA9IHtcbiAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnXG59O1xuXG5mdW5jdGlvbiBzZXRDb250ZW50VHlwZUlmVW5zZXQoaGVhZGVycywgdmFsdWUpIHtcbiAgaWYgKCF1dGlscy5pc1VuZGVmaW5lZChoZWFkZXJzKSAmJiB1dGlscy5pc1VuZGVmaW5lZChoZWFkZXJzWydDb250ZW50LVR5cGUnXSkpIHtcbiAgICBoZWFkZXJzWydDb250ZW50LVR5cGUnXSA9IHZhbHVlO1xuICB9XG59XG5cbmZ1bmN0aW9uIGdldERlZmF1bHRBZGFwdGVyKCkge1xuICB2YXIgYWRhcHRlcjtcbiAgaWYgKHR5cGVvZiBYTUxIdHRwUmVxdWVzdCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAvLyBGb3IgYnJvd3NlcnMgdXNlIFhIUiBhZGFwdGVyXG4gICAgYWRhcHRlciA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vYWRhcHRlcnMveGhyICovIFwiLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2FkYXB0ZXJzL3hoci5qc1wiKTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgcHJvY2VzcyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAvLyBGb3Igbm9kZSB1c2UgSFRUUCBhZGFwdGVyXG4gICAgYWRhcHRlciA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vYWRhcHRlcnMvaHR0cCAqLyBcIi4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9hZGFwdGVycy94aHIuanNcIik7XG4gIH1cbiAgcmV0dXJuIGFkYXB0ZXI7XG59XG5cbnZhciBkZWZhdWx0cyA9IHtcbiAgYWRhcHRlcjogZ2V0RGVmYXVsdEFkYXB0ZXIoKSxcblxuICB0cmFuc2Zvcm1SZXF1ZXN0OiBbZnVuY3Rpb24gdHJhbnNmb3JtUmVxdWVzdChkYXRhLCBoZWFkZXJzKSB7XG4gICAgbm9ybWFsaXplSGVhZGVyTmFtZShoZWFkZXJzLCAnQ29udGVudC1UeXBlJyk7XG4gICAgaWYgKHV0aWxzLmlzRm9ybURhdGEoZGF0YSkgfHxcbiAgICAgIHV0aWxzLmlzQXJyYXlCdWZmZXIoZGF0YSkgfHxcbiAgICAgIHV0aWxzLmlzQnVmZmVyKGRhdGEpIHx8XG4gICAgICB1dGlscy5pc1N0cmVhbShkYXRhKSB8fFxuICAgICAgdXRpbHMuaXNGaWxlKGRhdGEpIHx8XG4gICAgICB1dGlscy5pc0Jsb2IoZGF0YSlcbiAgICApIHtcbiAgICAgIHJldHVybiBkYXRhO1xuICAgIH1cbiAgICBpZiAodXRpbHMuaXNBcnJheUJ1ZmZlclZpZXcoZGF0YSkpIHtcbiAgICAgIHJldHVybiBkYXRhLmJ1ZmZlcjtcbiAgICB9XG4gICAgaWYgKHV0aWxzLmlzVVJMU2VhcmNoUGFyYW1zKGRhdGEpKSB7XG4gICAgICBzZXRDb250ZW50VHlwZUlmVW5zZXQoaGVhZGVycywgJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZDtjaGFyc2V0PXV0Zi04Jyk7XG4gICAgICByZXR1cm4gZGF0YS50b1N0cmluZygpO1xuICAgIH1cbiAgICBpZiAodXRpbHMuaXNPYmplY3QoZGF0YSkpIHtcbiAgICAgIHNldENvbnRlbnRUeXBlSWZVbnNldChoZWFkZXJzLCAnYXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04Jyk7XG4gICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoZGF0YSk7XG4gICAgfVxuICAgIHJldHVybiBkYXRhO1xuICB9XSxcblxuICB0cmFuc2Zvcm1SZXNwb25zZTogW2Z1bmN0aW9uIHRyYW5zZm9ybVJlc3BvbnNlKGRhdGEpIHtcbiAgICAvKmVzbGludCBuby1wYXJhbS1yZWFzc2lnbjowKi9cbiAgICBpZiAodHlwZW9mIGRhdGEgPT09ICdzdHJpbmcnKSB7XG4gICAgICB0cnkge1xuICAgICAgICBkYXRhID0gSlNPTi5wYXJzZShkYXRhKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHsgLyogSWdub3JlICovIH1cbiAgICB9XG4gICAgcmV0dXJuIGRhdGE7XG4gIH1dLFxuXG4gIC8qKlxuICAgKiBBIHRpbWVvdXQgaW4gbWlsbGlzZWNvbmRzIHRvIGFib3J0IGEgcmVxdWVzdC4gSWYgc2V0IHRvIDAgKGRlZmF1bHQpIGFcbiAgICogdGltZW91dCBpcyBub3QgY3JlYXRlZC5cbiAgICovXG4gIHRpbWVvdXQ6IDAsXG5cbiAgeHNyZkNvb2tpZU5hbWU6ICdYU1JGLVRPS0VOJyxcbiAgeHNyZkhlYWRlck5hbWU6ICdYLVhTUkYtVE9LRU4nLFxuXG4gIG1heENvbnRlbnRMZW5ndGg6IC0xLFxuXG4gIHZhbGlkYXRlU3RhdHVzOiBmdW5jdGlvbiB2YWxpZGF0ZVN0YXR1cyhzdGF0dXMpIHtcbiAgICByZXR1cm4gc3RhdHVzID49IDIwMCAmJiBzdGF0dXMgPCAzMDA7XG4gIH1cbn07XG5cbmRlZmF1bHRzLmhlYWRlcnMgPSB7XG4gIGNvbW1vbjoge1xuICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbiwgdGV4dC9wbGFpbiwgKi8qJ1xuICB9XG59O1xuXG51dGlscy5mb3JFYWNoKFsnZGVsZXRlJywgJ2dldCcsICdoZWFkJ10sIGZ1bmN0aW9uIGZvckVhY2hNZXRob2ROb0RhdGEobWV0aG9kKSB7XG4gIGRlZmF1bHRzLmhlYWRlcnNbbWV0aG9kXSA9IHt9O1xufSk7XG5cbnV0aWxzLmZvckVhY2goWydwb3N0JywgJ3B1dCcsICdwYXRjaCddLCBmdW5jdGlvbiBmb3JFYWNoTWV0aG9kV2l0aERhdGEobWV0aG9kKSB7XG4gIGRlZmF1bHRzLmhlYWRlcnNbbWV0aG9kXSA9IHV0aWxzLm1lcmdlKERFRkFVTFRfQ09OVEVOVF9UWVBFKTtcbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGRlZmF1bHRzO1xuXG4vKiBXRUJQQUNLIFZBUiBJTkpFQ1RJT04gKi99LmNhbGwodGhpcywgX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi8uLi8uLi9wcm9jZXNzL2Jyb3dzZXIuanMgKi8gXCIuL25vZGVfbW9kdWxlcy9wcm9jZXNzL2Jyb3dzZXIuanNcIikpKVxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9iaW5kLmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvYmluZC5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gYmluZChmbiwgdGhpc0FyZykge1xuICByZXR1cm4gZnVuY3Rpb24gd3JhcCgpIHtcbiAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoKTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3MubGVuZ3RoOyBpKyspIHtcbiAgICAgIGFyZ3NbaV0gPSBhcmd1bWVudHNbaV07XG4gICAgfVxuICAgIHJldHVybiBmbi5hcHBseSh0aGlzQXJnLCBhcmdzKTtcbiAgfTtcbn07XG5cblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvYnRvYS5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2J0b2EuanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG4vLyBidG9hIHBvbHlmaWxsIGZvciBJRTwxMCBjb3VydGVzeSBodHRwczovL2dpdGh1Yi5jb20vZGF2aWRjaGFtYmVycy9CYXNlNjQuanNcblxudmFyIGNoYXJzID0gJ0FCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXowMTIzNDU2Nzg5Ky89JztcblxuZnVuY3Rpb24gRSgpIHtcbiAgdGhpcy5tZXNzYWdlID0gJ1N0cmluZyBjb250YWlucyBhbiBpbnZhbGlkIGNoYXJhY3Rlcic7XG59XG5FLnByb3RvdHlwZSA9IG5ldyBFcnJvcjtcbkUucHJvdG90eXBlLmNvZGUgPSA1O1xuRS5wcm90b3R5cGUubmFtZSA9ICdJbnZhbGlkQ2hhcmFjdGVyRXJyb3InO1xuXG5mdW5jdGlvbiBidG9hKGlucHV0KSB7XG4gIHZhciBzdHIgPSBTdHJpbmcoaW5wdXQpO1xuICB2YXIgb3V0cHV0ID0gJyc7XG4gIGZvciAoXG4gICAgLy8gaW5pdGlhbGl6ZSByZXN1bHQgYW5kIGNvdW50ZXJcbiAgICB2YXIgYmxvY2ssIGNoYXJDb2RlLCBpZHggPSAwLCBtYXAgPSBjaGFycztcbiAgICAvLyBpZiB0aGUgbmV4dCBzdHIgaW5kZXggZG9lcyBub3QgZXhpc3Q6XG4gICAgLy8gICBjaGFuZ2UgdGhlIG1hcHBpbmcgdGFibGUgdG8gXCI9XCJcbiAgICAvLyAgIGNoZWNrIGlmIGQgaGFzIG5vIGZyYWN0aW9uYWwgZGlnaXRzXG4gICAgc3RyLmNoYXJBdChpZHggfCAwKSB8fCAobWFwID0gJz0nLCBpZHggJSAxKTtcbiAgICAvLyBcIjggLSBpZHggJSAxICogOFwiIGdlbmVyYXRlcyB0aGUgc2VxdWVuY2UgMiwgNCwgNiwgOFxuICAgIG91dHB1dCArPSBtYXAuY2hhckF0KDYzICYgYmxvY2sgPj4gOCAtIGlkeCAlIDEgKiA4KVxuICApIHtcbiAgICBjaGFyQ29kZSA9IHN0ci5jaGFyQ29kZUF0KGlkeCArPSAzIC8gNCk7XG4gICAgaWYgKGNoYXJDb2RlID4gMHhGRikge1xuICAgICAgdGhyb3cgbmV3IEUoKTtcbiAgICB9XG4gICAgYmxvY2sgPSBibG9jayA8PCA4IHwgY2hhckNvZGU7XG4gIH1cbiAgcmV0dXJuIG91dHB1dDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBidG9hO1xuXG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2J1aWxkVVJMLmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2J1aWxkVVJMLmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5cbnZhciB1dGlscyA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vLi4vdXRpbHMgKi8gXCIuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvdXRpbHMuanNcIik7XG5cbmZ1bmN0aW9uIGVuY29kZSh2YWwpIHtcbiAgcmV0dXJuIGVuY29kZVVSSUNvbXBvbmVudCh2YWwpLlxuICAgIHJlcGxhY2UoLyU0MC9naSwgJ0AnKS5cbiAgICByZXBsYWNlKC8lM0EvZ2ksICc6JykuXG4gICAgcmVwbGFjZSgvJTI0L2csICckJykuXG4gICAgcmVwbGFjZSgvJTJDL2dpLCAnLCcpLlxuICAgIHJlcGxhY2UoLyUyMC9nLCAnKycpLlxuICAgIHJlcGxhY2UoLyU1Qi9naSwgJ1snKS5cbiAgICByZXBsYWNlKC8lNUQvZ2ksICddJyk7XG59XG5cbi8qKlxuICogQnVpbGQgYSBVUkwgYnkgYXBwZW5kaW5nIHBhcmFtcyB0byB0aGUgZW5kXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHVybCBUaGUgYmFzZSBvZiB0aGUgdXJsIChlLmcuLCBodHRwOi8vd3d3Lmdvb2dsZS5jb20pXG4gKiBAcGFyYW0ge29iamVjdH0gW3BhcmFtc10gVGhlIHBhcmFtcyB0byBiZSBhcHBlbmRlZFxuICogQHJldHVybnMge3N0cmluZ30gVGhlIGZvcm1hdHRlZCB1cmxcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBidWlsZFVSTCh1cmwsIHBhcmFtcywgcGFyYW1zU2VyaWFsaXplcikge1xuICAvKmVzbGludCBuby1wYXJhbS1yZWFzc2lnbjowKi9cbiAgaWYgKCFwYXJhbXMpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG5cbiAgdmFyIHNlcmlhbGl6ZWRQYXJhbXM7XG4gIGlmIChwYXJhbXNTZXJpYWxpemVyKSB7XG4gICAgc2VyaWFsaXplZFBhcmFtcyA9IHBhcmFtc1NlcmlhbGl6ZXIocGFyYW1zKTtcbiAgfSBlbHNlIGlmICh1dGlscy5pc1VSTFNlYXJjaFBhcmFtcyhwYXJhbXMpKSB7XG4gICAgc2VyaWFsaXplZFBhcmFtcyA9IHBhcmFtcy50b1N0cmluZygpO1xuICB9IGVsc2Uge1xuICAgIHZhciBwYXJ0cyA9IFtdO1xuXG4gICAgdXRpbHMuZm9yRWFjaChwYXJhbXMsIGZ1bmN0aW9uIHNlcmlhbGl6ZSh2YWwsIGtleSkge1xuICAgICAgaWYgKHZhbCA9PT0gbnVsbCB8fCB0eXBlb2YgdmFsID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmICh1dGlscy5pc0FycmF5KHZhbCkpIHtcbiAgICAgICAga2V5ID0ga2V5ICsgJ1tdJztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhbCA9IFt2YWxdO1xuICAgICAgfVxuXG4gICAgICB1dGlscy5mb3JFYWNoKHZhbCwgZnVuY3Rpb24gcGFyc2VWYWx1ZSh2KSB7XG4gICAgICAgIGlmICh1dGlscy5pc0RhdGUodikpIHtcbiAgICAgICAgICB2ID0gdi50b0lTT1N0cmluZygpO1xuICAgICAgICB9IGVsc2UgaWYgKHV0aWxzLmlzT2JqZWN0KHYpKSB7XG4gICAgICAgICAgdiA9IEpTT04uc3RyaW5naWZ5KHYpO1xuICAgICAgICB9XG4gICAgICAgIHBhcnRzLnB1c2goZW5jb2RlKGtleSkgKyAnPScgKyBlbmNvZGUodikpO1xuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICBzZXJpYWxpemVkUGFyYW1zID0gcGFydHMuam9pbignJicpO1xuICB9XG5cbiAgaWYgKHNlcmlhbGl6ZWRQYXJhbXMpIHtcbiAgICB1cmwgKz0gKHVybC5pbmRleE9mKCc/JykgPT09IC0xID8gJz8nIDogJyYnKSArIHNlcmlhbGl6ZWRQYXJhbXM7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTtcblxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9jb21iaW5lVVJMcy5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9jb21iaW5lVVJMcy5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG4vKipcbiAqIENyZWF0ZXMgYSBuZXcgVVJMIGJ5IGNvbWJpbmluZyB0aGUgc3BlY2lmaWVkIFVSTHNcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gYmFzZVVSTCBUaGUgYmFzZSBVUkxcbiAqIEBwYXJhbSB7c3RyaW5nfSByZWxhdGl2ZVVSTCBUaGUgcmVsYXRpdmUgVVJMXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBUaGUgY29tYmluZWQgVVJMXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY29tYmluZVVSTHMoYmFzZVVSTCwgcmVsYXRpdmVVUkwpIHtcbiAgcmV0dXJuIHJlbGF0aXZlVVJMXG4gICAgPyBiYXNlVVJMLnJlcGxhY2UoL1xcLyskLywgJycpICsgJy8nICsgcmVsYXRpdmVVUkwucmVwbGFjZSgvXlxcLysvLCAnJylcbiAgICA6IGJhc2VVUkw7XG59O1xuXG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2Nvb2tpZXMuanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9jb29raWVzLmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cblxudmFyIHV0aWxzID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi8uLi91dGlscyAqLyBcIi4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi91dGlscy5qc1wiKTtcblxubW9kdWxlLmV4cG9ydHMgPSAoXG4gIHV0aWxzLmlzU3RhbmRhcmRCcm93c2VyRW52KCkgP1xuXG4gIC8vIFN0YW5kYXJkIGJyb3dzZXIgZW52cyBzdXBwb3J0IGRvY3VtZW50LmNvb2tpZVxuICAoZnVuY3Rpb24gc3RhbmRhcmRCcm93c2VyRW52KCkge1xuICAgIHJldHVybiB7XG4gICAgICB3cml0ZTogZnVuY3Rpb24gd3JpdGUobmFtZSwgdmFsdWUsIGV4cGlyZXMsIHBhdGgsIGRvbWFpbiwgc2VjdXJlKSB7XG4gICAgICAgIHZhciBjb29raWUgPSBbXTtcbiAgICAgICAgY29va2llLnB1c2gobmFtZSArICc9JyArIGVuY29kZVVSSUNvbXBvbmVudCh2YWx1ZSkpO1xuXG4gICAgICAgIGlmICh1dGlscy5pc051bWJlcihleHBpcmVzKSkge1xuICAgICAgICAgIGNvb2tpZS5wdXNoKCdleHBpcmVzPScgKyBuZXcgRGF0ZShleHBpcmVzKS50b0dNVFN0cmluZygpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh1dGlscy5pc1N0cmluZyhwYXRoKSkge1xuICAgICAgICAgIGNvb2tpZS5wdXNoKCdwYXRoPScgKyBwYXRoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh1dGlscy5pc1N0cmluZyhkb21haW4pKSB7XG4gICAgICAgICAgY29va2llLnB1c2goJ2RvbWFpbj0nICsgZG9tYWluKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChzZWN1cmUgPT09IHRydWUpIHtcbiAgICAgICAgICBjb29raWUucHVzaCgnc2VjdXJlJyk7XG4gICAgICAgIH1cblxuICAgICAgICBkb2N1bWVudC5jb29raWUgPSBjb29raWUuam9pbignOyAnKTtcbiAgICAgIH0sXG5cbiAgICAgIHJlYWQ6IGZ1bmN0aW9uIHJlYWQobmFtZSkge1xuICAgICAgICB2YXIgbWF0Y2ggPSBkb2N1bWVudC5jb29raWUubWF0Y2gobmV3IFJlZ0V4cCgnKF58O1xcXFxzKikoJyArIG5hbWUgKyAnKT0oW147XSopJykpO1xuICAgICAgICByZXR1cm4gKG1hdGNoID8gZGVjb2RlVVJJQ29tcG9uZW50KG1hdGNoWzNdKSA6IG51bGwpO1xuICAgICAgfSxcblxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUobmFtZSkge1xuICAgICAgICB0aGlzLndyaXRlKG5hbWUsICcnLCBEYXRlLm5vdygpIC0gODY0MDAwMDApO1xuICAgICAgfVxuICAgIH07XG4gIH0pKCkgOlxuXG4gIC8vIE5vbiBzdGFuZGFyZCBicm93c2VyIGVudiAod2ViIHdvcmtlcnMsIHJlYWN0LW5hdGl2ZSkgbGFjayBuZWVkZWQgc3VwcG9ydC5cbiAgKGZ1bmN0aW9uIG5vblN0YW5kYXJkQnJvd3NlckVudigpIHtcbiAgICByZXR1cm4ge1xuICAgICAgd3JpdGU6IGZ1bmN0aW9uIHdyaXRlKCkge30sXG4gICAgICByZWFkOiBmdW5jdGlvbiByZWFkKCkgeyByZXR1cm4gbnVsbDsgfSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9KSgpXG4pO1xuXG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2lzQWJzb2x1dGVVUkwuanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9pc0Fic29sdXRlVVJMLmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cblxuLyoqXG4gKiBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIHNwZWNpZmllZCBVUkwgaXMgYWJzb2x1dGVcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gdXJsIFRoZSBVUkwgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdGhlIHNwZWNpZmllZCBVUkwgaXMgYWJzb2x1dGUsIG90aGVyd2lzZSBmYWxzZVxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGlzQWJzb2x1dGVVUkwodXJsKSB7XG4gIC8vIEEgVVJMIGlzIGNvbnNpZGVyZWQgYWJzb2x1dGUgaWYgaXQgYmVnaW5zIHdpdGggXCI8c2NoZW1lPjovL1wiIG9yIFwiLy9cIiAocHJvdG9jb2wtcmVsYXRpdmUgVVJMKS5cbiAgLy8gUkZDIDM5ODYgZGVmaW5lcyBzY2hlbWUgbmFtZSBhcyBhIHNlcXVlbmNlIG9mIGNoYXJhY3RlcnMgYmVnaW5uaW5nIHdpdGggYSBsZXR0ZXIgYW5kIGZvbGxvd2VkXG4gIC8vIGJ5IGFueSBjb21iaW5hdGlvbiBvZiBsZXR0ZXJzLCBkaWdpdHMsIHBsdXMsIHBlcmlvZCwgb3IgaHlwaGVuLlxuICByZXR1cm4gL14oW2Etel1bYS16XFxkXFwrXFwtXFwuXSo6KT9cXC9cXC8vaS50ZXN0KHVybCk7XG59O1xuXG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2lzVVJMU2FtZU9yaWdpbi5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvaXNVUkxTYW1lT3JpZ2luLmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG52YXIgdXRpbHMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuLy4uL3V0aWxzICovIFwiLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL3V0aWxzLmpzXCIpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IChcbiAgdXRpbHMuaXNTdGFuZGFyZEJyb3dzZXJFbnYoKSA/XG5cbiAgLy8gU3RhbmRhcmQgYnJvd3NlciBlbnZzIGhhdmUgZnVsbCBzdXBwb3J0IG9mIHRoZSBBUElzIG5lZWRlZCB0byB0ZXN0XG4gIC8vIHdoZXRoZXIgdGhlIHJlcXVlc3QgVVJMIGlzIG9mIHRoZSBzYW1lIG9yaWdpbiBhcyBjdXJyZW50IGxvY2F0aW9uLlxuICAoZnVuY3Rpb24gc3RhbmRhcmRCcm93c2VyRW52KCkge1xuICAgIHZhciBtc2llID0gLyhtc2llfHRyaWRlbnQpL2kudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KTtcbiAgICB2YXIgdXJsUGFyc2luZ05vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgdmFyIG9yaWdpblVSTDtcblxuICAgIC8qKlxuICAgICogUGFyc2UgYSBVUkwgdG8gZGlzY292ZXIgaXQncyBjb21wb25lbnRzXG4gICAgKlxuICAgICogQHBhcmFtIHtTdHJpbmd9IHVybCBUaGUgVVJMIHRvIGJlIHBhcnNlZFxuICAgICogQHJldHVybnMge09iamVjdH1cbiAgICAqL1xuICAgIGZ1bmN0aW9uIHJlc29sdmVVUkwodXJsKSB7XG4gICAgICB2YXIgaHJlZiA9IHVybDtcblxuICAgICAgaWYgKG1zaWUpIHtcbiAgICAgICAgLy8gSUUgbmVlZHMgYXR0cmlidXRlIHNldCB0d2ljZSB0byBub3JtYWxpemUgcHJvcGVydGllc1xuICAgICAgICB1cmxQYXJzaW5nTm9kZS5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCBocmVmKTtcbiAgICAgICAgaHJlZiA9IHVybFBhcnNpbmdOb2RlLmhyZWY7XG4gICAgICB9XG5cbiAgICAgIHVybFBhcnNpbmdOb2RlLnNldEF0dHJpYnV0ZSgnaHJlZicsIGhyZWYpO1xuXG4gICAgICAvLyB1cmxQYXJzaW5nTm9kZSBwcm92aWRlcyB0aGUgVXJsVXRpbHMgaW50ZXJmYWNlIC0gaHR0cDovL3VybC5zcGVjLndoYXR3Zy5vcmcvI3VybHV0aWxzXG4gICAgICByZXR1cm4ge1xuICAgICAgICBocmVmOiB1cmxQYXJzaW5nTm9kZS5ocmVmLFxuICAgICAgICBwcm90b2NvbDogdXJsUGFyc2luZ05vZGUucHJvdG9jb2wgPyB1cmxQYXJzaW5nTm9kZS5wcm90b2NvbC5yZXBsYWNlKC86JC8sICcnKSA6ICcnLFxuICAgICAgICBob3N0OiB1cmxQYXJzaW5nTm9kZS5ob3N0LFxuICAgICAgICBzZWFyY2g6IHVybFBhcnNpbmdOb2RlLnNlYXJjaCA/IHVybFBhcnNpbmdOb2RlLnNlYXJjaC5yZXBsYWNlKC9eXFw/LywgJycpIDogJycsXG4gICAgICAgIGhhc2g6IHVybFBhcnNpbmdOb2RlLmhhc2ggPyB1cmxQYXJzaW5nTm9kZS5oYXNoLnJlcGxhY2UoL14jLywgJycpIDogJycsXG4gICAgICAgIGhvc3RuYW1lOiB1cmxQYXJzaW5nTm9kZS5ob3N0bmFtZSxcbiAgICAgICAgcG9ydDogdXJsUGFyc2luZ05vZGUucG9ydCxcbiAgICAgICAgcGF0aG5hbWU6ICh1cmxQYXJzaW5nTm9kZS5wYXRobmFtZS5jaGFyQXQoMCkgPT09ICcvJykgP1xuICAgICAgICAgICAgICAgICAgdXJsUGFyc2luZ05vZGUucGF0aG5hbWUgOlxuICAgICAgICAgICAgICAgICAgJy8nICsgdXJsUGFyc2luZ05vZGUucGF0aG5hbWVcbiAgICAgIH07XG4gICAgfVxuXG4gICAgb3JpZ2luVVJMID0gcmVzb2x2ZVVSTCh3aW5kb3cubG9jYXRpb24uaHJlZik7XG5cbiAgICAvKipcbiAgICAqIERldGVybWluZSBpZiBhIFVSTCBzaGFyZXMgdGhlIHNhbWUgb3JpZ2luIGFzIHRoZSBjdXJyZW50IGxvY2F0aW9uXG4gICAgKlxuICAgICogQHBhcmFtIHtTdHJpbmd9IHJlcXVlc3RVUkwgVGhlIFVSTCB0byB0ZXN0XG4gICAgKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiBVUkwgc2hhcmVzIHRoZSBzYW1lIG9yaWdpbiwgb3RoZXJ3aXNlIGZhbHNlXG4gICAgKi9cbiAgICByZXR1cm4gZnVuY3Rpb24gaXNVUkxTYW1lT3JpZ2luKHJlcXVlc3RVUkwpIHtcbiAgICAgIHZhciBwYXJzZWQgPSAodXRpbHMuaXNTdHJpbmcocmVxdWVzdFVSTCkpID8gcmVzb2x2ZVVSTChyZXF1ZXN0VVJMKSA6IHJlcXVlc3RVUkw7XG4gICAgICByZXR1cm4gKHBhcnNlZC5wcm90b2NvbCA9PT0gb3JpZ2luVVJMLnByb3RvY29sICYmXG4gICAgICAgICAgICBwYXJzZWQuaG9zdCA9PT0gb3JpZ2luVVJMLmhvc3QpO1xuICAgIH07XG4gIH0pKCkgOlxuXG4gIC8vIE5vbiBzdGFuZGFyZCBicm93c2VyIGVudnMgKHdlYiB3b3JrZXJzLCByZWFjdC1uYXRpdmUpIGxhY2sgbmVlZGVkIHN1cHBvcnQuXG4gIChmdW5jdGlvbiBub25TdGFuZGFyZEJyb3dzZXJFbnYoKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIGlzVVJMU2FtZU9yaWdpbigpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH07XG4gIH0pKClcbik7XG5cblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvbm9ybWFsaXplSGVhZGVyTmFtZS5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL25vcm1hbGl6ZUhlYWRlck5hbWUuanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG52YXIgdXRpbHMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuLi91dGlscyAqLyBcIi4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi91dGlscy5qc1wiKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBub3JtYWxpemVIZWFkZXJOYW1lKGhlYWRlcnMsIG5vcm1hbGl6ZWROYW1lKSB7XG4gIHV0aWxzLmZvckVhY2goaGVhZGVycywgZnVuY3Rpb24gcHJvY2Vzc0hlYWRlcih2YWx1ZSwgbmFtZSkge1xuICAgIGlmIChuYW1lICE9PSBub3JtYWxpemVkTmFtZSAmJiBuYW1lLnRvVXBwZXJDYXNlKCkgPT09IG5vcm1hbGl6ZWROYW1lLnRvVXBwZXJDYXNlKCkpIHtcbiAgICAgIGhlYWRlcnNbbm9ybWFsaXplZE5hbWVdID0gdmFsdWU7XG4gICAgICBkZWxldGUgaGVhZGVyc1tuYW1lXTtcbiAgICB9XG4gIH0pO1xufTtcblxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9wYXJzZUhlYWRlcnMuanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL3BhcnNlSGVhZGVycy5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cblxudmFyIHV0aWxzID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi8uLi91dGlscyAqLyBcIi4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi91dGlscy5qc1wiKTtcblxuLy8gSGVhZGVycyB3aG9zZSBkdXBsaWNhdGVzIGFyZSBpZ25vcmVkIGJ5IG5vZGVcbi8vIGMuZi4gaHR0cHM6Ly9ub2RlanMub3JnL2FwaS9odHRwLmh0bWwjaHR0cF9tZXNzYWdlX2hlYWRlcnNcbnZhciBpZ25vcmVEdXBsaWNhdGVPZiA9IFtcbiAgJ2FnZScsICdhdXRob3JpemF0aW9uJywgJ2NvbnRlbnQtbGVuZ3RoJywgJ2NvbnRlbnQtdHlwZScsICdldGFnJyxcbiAgJ2V4cGlyZXMnLCAnZnJvbScsICdob3N0JywgJ2lmLW1vZGlmaWVkLXNpbmNlJywgJ2lmLXVubW9kaWZpZWQtc2luY2UnLFxuICAnbGFzdC1tb2RpZmllZCcsICdsb2NhdGlvbicsICdtYXgtZm9yd2FyZHMnLCAncHJveHktYXV0aG9yaXphdGlvbicsXG4gICdyZWZlcmVyJywgJ3JldHJ5LWFmdGVyJywgJ3VzZXItYWdlbnQnXG5dO1xuXG4vKipcbiAqIFBhcnNlIGhlYWRlcnMgaW50byBhbiBvYmplY3RcbiAqXG4gKiBgYGBcbiAqIERhdGU6IFdlZCwgMjcgQXVnIDIwMTQgMDg6NTg6NDkgR01UXG4gKiBDb250ZW50LVR5cGU6IGFwcGxpY2F0aW9uL2pzb25cbiAqIENvbm5lY3Rpb246IGtlZXAtYWxpdmVcbiAqIFRyYW5zZmVyLUVuY29kaW5nOiBjaHVua2VkXG4gKiBgYGBcbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gaGVhZGVycyBIZWFkZXJzIG5lZWRpbmcgdG8gYmUgcGFyc2VkXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBIZWFkZXJzIHBhcnNlZCBpbnRvIGFuIG9iamVjdFxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHBhcnNlSGVhZGVycyhoZWFkZXJzKSB7XG4gIHZhciBwYXJzZWQgPSB7fTtcbiAgdmFyIGtleTtcbiAgdmFyIHZhbDtcbiAgdmFyIGk7XG5cbiAgaWYgKCFoZWFkZXJzKSB7IHJldHVybiBwYXJzZWQ7IH1cblxuICB1dGlscy5mb3JFYWNoKGhlYWRlcnMuc3BsaXQoJ1xcbicpLCBmdW5jdGlvbiBwYXJzZXIobGluZSkge1xuICAgIGkgPSBsaW5lLmluZGV4T2YoJzonKTtcbiAgICBrZXkgPSB1dGlscy50cmltKGxpbmUuc3Vic3RyKDAsIGkpKS50b0xvd2VyQ2FzZSgpO1xuICAgIHZhbCA9IHV0aWxzLnRyaW0obGluZS5zdWJzdHIoaSArIDEpKTtcblxuICAgIGlmIChrZXkpIHtcbiAgICAgIGlmIChwYXJzZWRba2V5XSAmJiBpZ25vcmVEdXBsaWNhdGVPZi5pbmRleE9mKGtleSkgPj0gMCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAoa2V5ID09PSAnc2V0LWNvb2tpZScpIHtcbiAgICAgICAgcGFyc2VkW2tleV0gPSAocGFyc2VkW2tleV0gPyBwYXJzZWRba2V5XSA6IFtdKS5jb25jYXQoW3ZhbF0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcGFyc2VkW2tleV0gPSBwYXJzZWRba2V5XSA/IHBhcnNlZFtrZXldICsgJywgJyArIHZhbCA6IHZhbDtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBwYXJzZWQ7XG59O1xuXG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL3NwcmVhZC5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvc3ByZWFkLmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG4vKipcbiAqIFN5bnRhY3RpYyBzdWdhciBmb3IgaW52b2tpbmcgYSBmdW5jdGlvbiBhbmQgZXhwYW5kaW5nIGFuIGFycmF5IGZvciBhcmd1bWVudHMuXG4gKlxuICogQ29tbW9uIHVzZSBjYXNlIHdvdWxkIGJlIHRvIHVzZSBgRnVuY3Rpb24ucHJvdG90eXBlLmFwcGx5YC5cbiAqXG4gKiAgYGBganNcbiAqICBmdW5jdGlvbiBmKHgsIHksIHopIHt9XG4gKiAgdmFyIGFyZ3MgPSBbMSwgMiwgM107XG4gKiAgZi5hcHBseShudWxsLCBhcmdzKTtcbiAqICBgYGBcbiAqXG4gKiBXaXRoIGBzcHJlYWRgIHRoaXMgZXhhbXBsZSBjYW4gYmUgcmUtd3JpdHRlbi5cbiAqXG4gKiAgYGBganNcbiAqICBzcHJlYWQoZnVuY3Rpb24oeCwgeSwgeikge30pKFsxLCAyLCAzXSk7XG4gKiAgYGBgXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2tcbiAqIEByZXR1cm5zIHtGdW5jdGlvbn1cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBzcHJlYWQoY2FsbGJhY2spIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIHdyYXAoYXJyKSB7XG4gICAgcmV0dXJuIGNhbGxiYWNrLmFwcGx5KG51bGwsIGFycik7XG4gIH07XG59O1xuXG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi91dGlscy5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL3V0aWxzLmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG52YXIgYmluZCA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vaGVscGVycy9iaW5kICovIFwiLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvYmluZC5qc1wiKTtcbnZhciBpc0J1ZmZlciA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIGlzLWJ1ZmZlciAqLyBcIi4vbm9kZV9tb2R1bGVzL2lzLWJ1ZmZlci9pbmRleC5qc1wiKTtcblxuLypnbG9iYWwgdG9TdHJpbmc6dHJ1ZSovXG5cbi8vIHV0aWxzIGlzIGEgbGlicmFyeSBvZiBnZW5lcmljIGhlbHBlciBmdW5jdGlvbnMgbm9uLXNwZWNpZmljIHRvIGF4aW9zXG5cbnZhciB0b1N0cmluZyA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmc7XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYW4gQXJyYXlcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhbiBBcnJheSwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzQXJyYXkodmFsKSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKHZhbCkgPT09ICdbb2JqZWN0IEFycmF5XSc7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYW4gQXJyYXlCdWZmZXJcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhbiBBcnJheUJ1ZmZlciwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzQXJyYXlCdWZmZXIodmFsKSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKHZhbCkgPT09ICdbb2JqZWN0IEFycmF5QnVmZmVyXSc7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBGb3JtRGF0YVxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGFuIEZvcm1EYXRhLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNGb3JtRGF0YSh2YWwpIHtcbiAgcmV0dXJuICh0eXBlb2YgRm9ybURhdGEgIT09ICd1bmRlZmluZWQnKSAmJiAodmFsIGluc3RhbmNlb2YgRm9ybURhdGEpO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgdmlldyBvbiBhbiBBcnJheUJ1ZmZlclxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgdmlldyBvbiBhbiBBcnJheUJ1ZmZlciwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzQXJyYXlCdWZmZXJWaWV3KHZhbCkge1xuICB2YXIgcmVzdWx0O1xuICBpZiAoKHR5cGVvZiBBcnJheUJ1ZmZlciAhPT0gJ3VuZGVmaW5lZCcpICYmIChBcnJheUJ1ZmZlci5pc1ZpZXcpKSB7XG4gICAgcmVzdWx0ID0gQXJyYXlCdWZmZXIuaXNWaWV3KHZhbCk7XG4gIH0gZWxzZSB7XG4gICAgcmVzdWx0ID0gKHZhbCkgJiYgKHZhbC5idWZmZXIpICYmICh2YWwuYnVmZmVyIGluc3RhbmNlb2YgQXJyYXlCdWZmZXIpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBTdHJpbmdcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIFN0cmluZywgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzU3RyaW5nKHZhbCkge1xuICByZXR1cm4gdHlwZW9mIHZhbCA9PT0gJ3N0cmluZyc7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBOdW1iZXJcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIE51bWJlciwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzTnVtYmVyKHZhbCkge1xuICByZXR1cm4gdHlwZW9mIHZhbCA9PT0gJ251bWJlcic7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgdW5kZWZpbmVkXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdGhlIHZhbHVlIGlzIHVuZGVmaW5lZCwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzVW5kZWZpbmVkKHZhbCkge1xuICByZXR1cm4gdHlwZW9mIHZhbCA9PT0gJ3VuZGVmaW5lZCc7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYW4gT2JqZWN0XG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYW4gT2JqZWN0LCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNPYmplY3QodmFsKSB7XG4gIHJldHVybiB2YWwgIT09IG51bGwgJiYgdHlwZW9mIHZhbCA9PT0gJ29iamVjdCc7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBEYXRlXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBEYXRlLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNEYXRlKHZhbCkge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbCh2YWwpID09PSAnW29iamVjdCBEYXRlXSc7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBGaWxlXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBGaWxlLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNGaWxlKHZhbCkge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbCh2YWwpID09PSAnW29iamVjdCBGaWxlXSc7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBCbG9iXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBCbG9iLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNCbG9iKHZhbCkge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbCh2YWwpID09PSAnW29iamVjdCBCbG9iXSc7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBGdW5jdGlvblxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgRnVuY3Rpb24sIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0Z1bmN0aW9uKHZhbCkge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbCh2YWwpID09PSAnW29iamVjdCBGdW5jdGlvbl0nO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgU3RyZWFtXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBTdHJlYW0sIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc1N0cmVhbSh2YWwpIHtcbiAgcmV0dXJuIGlzT2JqZWN0KHZhbCkgJiYgaXNGdW5jdGlvbih2YWwucGlwZSk7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBVUkxTZWFyY2hQYXJhbXMgb2JqZWN0XG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBVUkxTZWFyY2hQYXJhbXMgb2JqZWN0LCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNVUkxTZWFyY2hQYXJhbXModmFsKSB7XG4gIHJldHVybiB0eXBlb2YgVVJMU2VhcmNoUGFyYW1zICE9PSAndW5kZWZpbmVkJyAmJiB2YWwgaW5zdGFuY2VvZiBVUkxTZWFyY2hQYXJhbXM7XG59XG5cbi8qKlxuICogVHJpbSBleGNlc3Mgd2hpdGVzcGFjZSBvZmYgdGhlIGJlZ2lubmluZyBhbmQgZW5kIG9mIGEgc3RyaW5nXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHN0ciBUaGUgU3RyaW5nIHRvIHRyaW1cbiAqIEByZXR1cm5zIHtTdHJpbmd9IFRoZSBTdHJpbmcgZnJlZWQgb2YgZXhjZXNzIHdoaXRlc3BhY2VcbiAqL1xuZnVuY3Rpb24gdHJpbShzdHIpIHtcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKC9eXFxzKi8sICcnKS5yZXBsYWNlKC9cXHMqJC8sICcnKTtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgd2UncmUgcnVubmluZyBpbiBhIHN0YW5kYXJkIGJyb3dzZXIgZW52aXJvbm1lbnRcbiAqXG4gKiBUaGlzIGFsbG93cyBheGlvcyB0byBydW4gaW4gYSB3ZWIgd29ya2VyLCBhbmQgcmVhY3QtbmF0aXZlLlxuICogQm90aCBlbnZpcm9ubWVudHMgc3VwcG9ydCBYTUxIdHRwUmVxdWVzdCwgYnV0IG5vdCBmdWxseSBzdGFuZGFyZCBnbG9iYWxzLlxuICpcbiAqIHdlYiB3b3JrZXJzOlxuICogIHR5cGVvZiB3aW5kb3cgLT4gdW5kZWZpbmVkXG4gKiAgdHlwZW9mIGRvY3VtZW50IC0+IHVuZGVmaW5lZFxuICpcbiAqIHJlYWN0LW5hdGl2ZTpcbiAqICBuYXZpZ2F0b3IucHJvZHVjdCAtPiAnUmVhY3ROYXRpdmUnXG4gKi9cbmZ1bmN0aW9uIGlzU3RhbmRhcmRCcm93c2VyRW52KCkge1xuICBpZiAodHlwZW9mIG5hdmlnYXRvciAhPT0gJ3VuZGVmaW5lZCcgJiYgbmF2aWdhdG9yLnByb2R1Y3QgPT09ICdSZWFjdE5hdGl2ZScpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgcmV0dXJuIChcbiAgICB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJlxuICAgIHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCdcbiAgKTtcbn1cblxuLyoqXG4gKiBJdGVyYXRlIG92ZXIgYW4gQXJyYXkgb3IgYW4gT2JqZWN0IGludm9raW5nIGEgZnVuY3Rpb24gZm9yIGVhY2ggaXRlbS5cbiAqXG4gKiBJZiBgb2JqYCBpcyBhbiBBcnJheSBjYWxsYmFjayB3aWxsIGJlIGNhbGxlZCBwYXNzaW5nXG4gKiB0aGUgdmFsdWUsIGluZGV4LCBhbmQgY29tcGxldGUgYXJyYXkgZm9yIGVhY2ggaXRlbS5cbiAqXG4gKiBJZiAnb2JqJyBpcyBhbiBPYmplY3QgY2FsbGJhY2sgd2lsbCBiZSBjYWxsZWQgcGFzc2luZ1xuICogdGhlIHZhbHVlLCBrZXksIGFuZCBjb21wbGV0ZSBvYmplY3QgZm9yIGVhY2ggcHJvcGVydHkuXG4gKlxuICogQHBhcmFtIHtPYmplY3R8QXJyYXl9IG9iaiBUaGUgb2JqZWN0IHRvIGl0ZXJhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuIFRoZSBjYWxsYmFjayB0byBpbnZva2UgZm9yIGVhY2ggaXRlbVxuICovXG5mdW5jdGlvbiBmb3JFYWNoKG9iaiwgZm4pIHtcbiAgLy8gRG9uJ3QgYm90aGVyIGlmIG5vIHZhbHVlIHByb3ZpZGVkXG4gIGlmIChvYmogPT09IG51bGwgfHwgdHlwZW9mIG9iaiA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvLyBGb3JjZSBhbiBhcnJheSBpZiBub3QgYWxyZWFkeSBzb21ldGhpbmcgaXRlcmFibGVcbiAgaWYgKHR5cGVvZiBvYmogIT09ICdvYmplY3QnKSB7XG4gICAgLyplc2xpbnQgbm8tcGFyYW0tcmVhc3NpZ246MCovXG4gICAgb2JqID0gW29ial07XG4gIH1cblxuICBpZiAoaXNBcnJheShvYmopKSB7XG4gICAgLy8gSXRlcmF0ZSBvdmVyIGFycmF5IHZhbHVlc1xuICAgIGZvciAodmFyIGkgPSAwLCBsID0gb2JqLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgZm4uY2FsbChudWxsLCBvYmpbaV0sIGksIG9iaik7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIC8vIEl0ZXJhdGUgb3ZlciBvYmplY3Qga2V5c1xuICAgIGZvciAodmFyIGtleSBpbiBvYmopIHtcbiAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSB7XG4gICAgICAgIGZuLmNhbGwobnVsbCwgb2JqW2tleV0sIGtleSwgb2JqKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBBY2NlcHRzIHZhcmFyZ3MgZXhwZWN0aW5nIGVhY2ggYXJndW1lbnQgdG8gYmUgYW4gb2JqZWN0LCB0aGVuXG4gKiBpbW11dGFibHkgbWVyZ2VzIHRoZSBwcm9wZXJ0aWVzIG9mIGVhY2ggb2JqZWN0IGFuZCByZXR1cm5zIHJlc3VsdC5cbiAqXG4gKiBXaGVuIG11bHRpcGxlIG9iamVjdHMgY29udGFpbiB0aGUgc2FtZSBrZXkgdGhlIGxhdGVyIG9iamVjdCBpblxuICogdGhlIGFyZ3VtZW50cyBsaXN0IHdpbGwgdGFrZSBwcmVjZWRlbmNlLlxuICpcbiAqIEV4YW1wbGU6XG4gKlxuICogYGBganNcbiAqIHZhciByZXN1bHQgPSBtZXJnZSh7Zm9vOiAxMjN9LCB7Zm9vOiA0NTZ9KTtcbiAqIGNvbnNvbGUubG9nKHJlc3VsdC5mb28pOyAvLyBvdXRwdXRzIDQ1NlxuICogYGBgXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IG9iajEgT2JqZWN0IHRvIG1lcmdlXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXN1bHQgb2YgYWxsIG1lcmdlIHByb3BlcnRpZXNcbiAqL1xuZnVuY3Rpb24gbWVyZ2UoLyogb2JqMSwgb2JqMiwgb2JqMywgLi4uICovKSB7XG4gIHZhciByZXN1bHQgPSB7fTtcbiAgZnVuY3Rpb24gYXNzaWduVmFsdWUodmFsLCBrZXkpIHtcbiAgICBpZiAodHlwZW9mIHJlc3VsdFtrZXldID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgdmFsID09PSAnb2JqZWN0Jykge1xuICAgICAgcmVzdWx0W2tleV0gPSBtZXJnZShyZXN1bHRba2V5XSwgdmFsKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzdWx0W2tleV0gPSB2YWw7XG4gICAgfVxuICB9XG5cbiAgZm9yICh2YXIgaSA9IDAsIGwgPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgZm9yRWFjaChhcmd1bWVudHNbaV0sIGFzc2lnblZhbHVlKTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIEV4dGVuZHMgb2JqZWN0IGEgYnkgbXV0YWJseSBhZGRpbmcgdG8gaXQgdGhlIHByb3BlcnRpZXMgb2Ygb2JqZWN0IGIuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGEgVGhlIG9iamVjdCB0byBiZSBleHRlbmRlZFxuICogQHBhcmFtIHtPYmplY3R9IGIgVGhlIG9iamVjdCB0byBjb3B5IHByb3BlcnRpZXMgZnJvbVxuICogQHBhcmFtIHtPYmplY3R9IHRoaXNBcmcgVGhlIG9iamVjdCB0byBiaW5kIGZ1bmN0aW9uIHRvXG4gKiBAcmV0dXJuIHtPYmplY3R9IFRoZSByZXN1bHRpbmcgdmFsdWUgb2Ygb2JqZWN0IGFcbiAqL1xuZnVuY3Rpb24gZXh0ZW5kKGEsIGIsIHRoaXNBcmcpIHtcbiAgZm9yRWFjaChiLCBmdW5jdGlvbiBhc3NpZ25WYWx1ZSh2YWwsIGtleSkge1xuICAgIGlmICh0aGlzQXJnICYmIHR5cGVvZiB2YWwgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGFba2V5XSA9IGJpbmQodmFsLCB0aGlzQXJnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYVtrZXldID0gdmFsO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiBhO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgaXNBcnJheTogaXNBcnJheSxcbiAgaXNBcnJheUJ1ZmZlcjogaXNBcnJheUJ1ZmZlcixcbiAgaXNCdWZmZXI6IGlzQnVmZmVyLFxuICBpc0Zvcm1EYXRhOiBpc0Zvcm1EYXRhLFxuICBpc0FycmF5QnVmZmVyVmlldzogaXNBcnJheUJ1ZmZlclZpZXcsXG4gIGlzU3RyaW5nOiBpc1N0cmluZyxcbiAgaXNOdW1iZXI6IGlzTnVtYmVyLFxuICBpc09iamVjdDogaXNPYmplY3QsXG4gIGlzVW5kZWZpbmVkOiBpc1VuZGVmaW5lZCxcbiAgaXNEYXRlOiBpc0RhdGUsXG4gIGlzRmlsZTogaXNGaWxlLFxuICBpc0Jsb2I6IGlzQmxvYixcbiAgaXNGdW5jdGlvbjogaXNGdW5jdGlvbixcbiAgaXNTdHJlYW06IGlzU3RyZWFtLFxuICBpc1VSTFNlYXJjaFBhcmFtczogaXNVUkxTZWFyY2hQYXJhbXMsXG4gIGlzU3RhbmRhcmRCcm93c2VyRW52OiBpc1N0YW5kYXJkQnJvd3NlckVudixcbiAgZm9yRWFjaDogZm9yRWFjaCxcbiAgbWVyZ2U6IG1lcmdlLFxuICBleHRlbmQ6IGV4dGVuZCxcbiAgdHJpbTogdHJpbVxufTtcblxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL25vZGVfbW9kdWxlcy9pcy1idWZmZXIvaW5kZXguanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vbm9kZV9tb2R1bGVzL2lzLWJ1ZmZlci9pbmRleC5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxuLyohXG4gKiBEZXRlcm1pbmUgaWYgYW4gb2JqZWN0IGlzIGEgQnVmZmVyXG4gKlxuICogQGF1dGhvciAgIEZlcm9zcyBBYm91a2hhZGlqZWggPGh0dHBzOi8vZmVyb3NzLm9yZz5cbiAqIEBsaWNlbnNlICBNSVRcbiAqL1xuXG4vLyBUaGUgX2lzQnVmZmVyIGNoZWNrIGlzIGZvciBTYWZhcmkgNS03IHN1cHBvcnQsIGJlY2F1c2UgaXQncyBtaXNzaW5nXG4vLyBPYmplY3QucHJvdG90eXBlLmNvbnN0cnVjdG9yLiBSZW1vdmUgdGhpcyBldmVudHVhbGx5XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChvYmopIHtcbiAgcmV0dXJuIG9iaiAhPSBudWxsICYmIChpc0J1ZmZlcihvYmopIHx8IGlzU2xvd0J1ZmZlcihvYmopIHx8ICEhb2JqLl9pc0J1ZmZlcilcbn1cblxuZnVuY3Rpb24gaXNCdWZmZXIgKG9iaikge1xuICByZXR1cm4gISFvYmouY29uc3RydWN0b3IgJiYgdHlwZW9mIG9iai5jb25zdHJ1Y3Rvci5pc0J1ZmZlciA9PT0gJ2Z1bmN0aW9uJyAmJiBvYmouY29uc3RydWN0b3IuaXNCdWZmZXIob2JqKVxufVxuXG4vLyBGb3IgTm9kZSB2MC4xMCBzdXBwb3J0LiBSZW1vdmUgdGhpcyBldmVudHVhbGx5LlxuZnVuY3Rpb24gaXNTbG93QnVmZmVyIChvYmopIHtcbiAgcmV0dXJuIHR5cGVvZiBvYmoucmVhZEZsb2F0TEUgPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIG9iai5zbGljZSA9PT0gJ2Z1bmN0aW9uJyAmJiBpc0J1ZmZlcihvYmouc2xpY2UoMCwgMCkpXG59XG5cblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9ub2RlX21vZHVsZXMvcHJvY2Vzcy9icm93c2VyLmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL25vZGVfbW9kdWxlcy9wcm9jZXNzL2Jyb3dzZXIuanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cbi8vIHNoaW0gZm9yIHVzaW5nIHByb2Nlc3MgaW4gYnJvd3NlclxudmFyIHByb2Nlc3MgPSBtb2R1bGUuZXhwb3J0cyA9IHt9O1xuXG4vLyBjYWNoZWQgZnJvbSB3aGF0ZXZlciBnbG9iYWwgaXMgcHJlc2VudCBzbyB0aGF0IHRlc3QgcnVubmVycyB0aGF0IHN0dWIgaXRcbi8vIGRvbid0IGJyZWFrIHRoaW5ncy4gIEJ1dCB3ZSBuZWVkIHRvIHdyYXAgaXQgaW4gYSB0cnkgY2F0Y2ggaW4gY2FzZSBpdCBpc1xuLy8gd3JhcHBlZCBpbiBzdHJpY3QgbW9kZSBjb2RlIHdoaWNoIGRvZXNuJ3QgZGVmaW5lIGFueSBnbG9iYWxzLiAgSXQncyBpbnNpZGUgYVxuLy8gZnVuY3Rpb24gYmVjYXVzZSB0cnkvY2F0Y2hlcyBkZW9wdGltaXplIGluIGNlcnRhaW4gZW5naW5lcy5cblxudmFyIGNhY2hlZFNldFRpbWVvdXQ7XG52YXIgY2FjaGVkQ2xlYXJUaW1lb3V0O1xuXG5mdW5jdGlvbiBkZWZhdWx0U2V0VGltb3V0KCkge1xuICAgIHRocm93IG5ldyBFcnJvcignc2V0VGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuZnVuY3Rpb24gZGVmYXVsdENsZWFyVGltZW91dCAoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdjbGVhclRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbihmdW5jdGlvbiAoKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBzZXRUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBjbGVhclRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgfVxufSAoKSlcbmZ1bmN0aW9uIHJ1blRpbWVvdXQoZnVuKSB7XG4gICAgaWYgKGNhY2hlZFNldFRpbWVvdXQgPT09IHNldFRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIC8vIGlmIHNldFRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRTZXRUaW1lb3V0ID09PSBkZWZhdWx0U2V0VGltb3V0IHx8ICFjYWNoZWRTZXRUaW1lb3V0KSAmJiBzZXRUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfSBjYXRjaChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbChudWxsLCBmdW4sIDApO1xuICAgICAgICB9IGNhdGNoKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3JcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwodGhpcywgZnVuLCAwKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG59XG5mdW5jdGlvbiBydW5DbGVhclRpbWVvdXQobWFya2VyKSB7XG4gICAgaWYgKGNhY2hlZENsZWFyVGltZW91dCA9PT0gY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIC8vIGlmIGNsZWFyVGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZENsZWFyVGltZW91dCA9PT0gZGVmYXVsdENsZWFyVGltZW91dCB8fCAhY2FjaGVkQ2xlYXJUaW1lb3V0KSAmJiBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0ICB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKG51bGwsIG1hcmtlcik7XG4gICAgICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3IuXG4gICAgICAgICAgICAvLyBTb21lIHZlcnNpb25zIG9mIEkuRS4gaGF2ZSBkaWZmZXJlbnQgcnVsZXMgZm9yIGNsZWFyVGltZW91dCB2cyBzZXRUaW1lb3V0XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwodGhpcywgbWFya2VyKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG5cbn1cbnZhciBxdWV1ZSA9IFtdO1xudmFyIGRyYWluaW5nID0gZmFsc2U7XG52YXIgY3VycmVudFF1ZXVlO1xudmFyIHF1ZXVlSW5kZXggPSAtMTtcblxuZnVuY3Rpb24gY2xlYW5VcE5leHRUaWNrKCkge1xuICAgIGlmICghZHJhaW5pbmcgfHwgIWN1cnJlbnRRdWV1ZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgaWYgKGN1cnJlbnRRdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgcXVldWUgPSBjdXJyZW50UXVldWUuY29uY2F0KHF1ZXVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgfVxuICAgIGlmIChxdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgZHJhaW5RdWV1ZSgpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZHJhaW5RdWV1ZSgpIHtcbiAgICBpZiAoZHJhaW5pbmcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgdGltZW91dCA9IHJ1blRpbWVvdXQoY2xlYW5VcE5leHRUaWNrKTtcbiAgICBkcmFpbmluZyA9IHRydWU7XG5cbiAgICB2YXIgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIHdoaWxlKGxlbikge1xuICAgICAgICBjdXJyZW50UXVldWUgPSBxdWV1ZTtcbiAgICAgICAgcXVldWUgPSBbXTtcbiAgICAgICAgd2hpbGUgKCsrcXVldWVJbmRleCA8IGxlbikge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRRdWV1ZSkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRRdWV1ZVtxdWV1ZUluZGV4XS5ydW4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgICAgIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB9XG4gICAgY3VycmVudFF1ZXVlID0gbnVsbDtcbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIHJ1bkNsZWFyVGltZW91dCh0aW1lb3V0KTtcbn1cblxucHJvY2Vzcy5uZXh0VGljayA9IGZ1bmN0aW9uIChmdW4pIHtcbiAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoIC0gMSk7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBhcmdzW2kgLSAxXSA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBxdWV1ZS5wdXNoKG5ldyBJdGVtKGZ1biwgYXJncykpO1xuICAgIGlmIChxdWV1ZS5sZW5ndGggPT09IDEgJiYgIWRyYWluaW5nKSB7XG4gICAgICAgIHJ1blRpbWVvdXQoZHJhaW5RdWV1ZSk7XG4gICAgfVxufTtcblxuLy8gdjggbGlrZXMgcHJlZGljdGlibGUgb2JqZWN0c1xuZnVuY3Rpb24gSXRlbShmdW4sIGFycmF5KSB7XG4gICAgdGhpcy5mdW4gPSBmdW47XG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xufVxuSXRlbS5wcm90b3R5cGUucnVuID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuZnVuLmFwcGx5KG51bGwsIHRoaXMuYXJyYXkpO1xufTtcbnByb2Nlc3MudGl0bGUgPSAnYnJvd3Nlcic7XG5wcm9jZXNzLmJyb3dzZXIgPSB0cnVlO1xucHJvY2Vzcy5lbnYgPSB7fTtcbnByb2Nlc3MuYXJndiA9IFtdO1xucHJvY2Vzcy52ZXJzaW9uID0gJyc7IC8vIGVtcHR5IHN0cmluZyB0byBhdm9pZCByZWdleHAgaXNzdWVzXG5wcm9jZXNzLnZlcnNpb25zID0ge307XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5wcm9jZXNzLm9uID0gbm9vcDtcbnByb2Nlc3MuYWRkTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5vbmNlID0gbm9vcDtcbnByb2Nlc3Mub2ZmID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVBbGxMaXN0ZW5lcnMgPSBub29wO1xucHJvY2Vzcy5lbWl0ID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZE9uY2VMaXN0ZW5lciA9IG5vb3A7XG5cbnByb2Nlc3MubGlzdGVuZXJzID0gZnVuY3Rpb24gKG5hbWUpIHsgcmV0dXJuIFtdIH1cblxucHJvY2Vzcy5iaW5kaW5nID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuYmluZGluZyBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xuXG5wcm9jZXNzLmN3ZCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICcvJyB9O1xucHJvY2Vzcy5jaGRpciA9IGZ1bmN0aW9uIChkaXIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuY2hkaXIgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcbnByb2Nlc3MudW1hc2sgPSBmdW5jdGlvbigpIHsgcmV0dXJuIDA7IH07XG5cblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9zcmMvY2hhbm5lbHMvY2hhbm5lbC5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vc3JjL2NoYW5uZWxzL2NoYW5uZWwuanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBleHBvcnRzIHByb3ZpZGVkOiBDaGFubmVsICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBfX3dlYnBhY2tfZXhwb3J0c19fLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yKF9fd2VicGFja19leHBvcnRzX18pO1xuLyogaGFybW9ueSBleHBvcnQgKGJpbmRpbmcpICovIF9fd2VicGFja19yZXF1aXJlX18uZChfX3dlYnBhY2tfZXhwb3J0c19fLCBcIkNoYW5uZWxcIiwgZnVuY3Rpb24oKSB7IHJldHVybiBDaGFubmVsOyB9KTtcbi8qIGhhcm1vbnkgaW1wb3J0ICovIHZhciBfZXZlbnRzX2Rpc3BhdGNoZXJfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfXyA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4uL2V2ZW50cy9kaXNwYXRjaGVyICovIFwiLi9zcmMvZXZlbnRzL2Rpc3BhdGNoZXIuanNcIik7XG5mdW5jdGlvbiBfdHlwZW9mKG9iaikgeyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9OyB9IGVsc2UgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07IH0gcmV0dXJuIF90eXBlb2Yob2JqKTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9XG5cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKGNhbGwgJiYgKF90eXBlb2YoY2FsbCkgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikpIHsgcmV0dXJuIGNhbGw7IH0gcmV0dXJuIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZik7IH1cblxuZnVuY3Rpb24gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKSB7IGlmIChzZWxmID09PSB2b2lkIDApIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IF9nZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5nZXRQcm90b3R5cGVPZiA6IGZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IHJldHVybiBvLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2Yobyk7IH07IHJldHVybiBfZ2V0UHJvdG90eXBlT2Yobyk7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uXCIpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIF9zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcyk7IH1cblxuZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgX3NldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IG8uX19wcm90b19fID0gcDsgcmV0dXJuIG87IH07IHJldHVybiBfc2V0UHJvdG90eXBlT2YobywgcCk7IH1cblxuXG52YXIgQ2hhbm5lbCA9XG4vKiNfX1BVUkVfXyovXG5mdW5jdGlvbiAoX0Rpc3BhdGNoZXIpIHtcbiAgX2luaGVyaXRzKENoYW5uZWwsIF9EaXNwYXRjaGVyKTtcblxuICBmdW5jdGlvbiBDaGFubmVsKG5hbWUsIHB1c2hlcikge1xuICAgIHZhciBfdGhpcztcblxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBDaGFubmVsKTtcblxuICAgIF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX2dldFByb3RvdHlwZU9mKENoYW5uZWwpLmNhbGwodGhpcykpO1xuICAgIF90aGlzLm5hbWUgPSBuYW1lO1xuICAgIF90aGlzLnB1c2hlciA9IHB1c2hlcjtcblxuICAgIGlmIChfdGhpcy5wdXNoZXIuc29ja2V0LnN0YXRlID09IDEpIHtcbiAgICAgIF90aGlzLnN1YnNjcmliZSgpO1xuICAgIH1cblxuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhDaGFubmVsLCBbe1xuICAgIGtleTogXCJzdWJzY3JpYmVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gc3Vic2NyaWJlKCkge1xuICAgICAgdGhpcy5wdXNoZXIuc2VuZCh7XG4gICAgICAgIGV2ZW50OiAnc3Vic2NyaWJlJyxcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgIGNoYW5uZWw6IHRoaXMubmFtZVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwidW5zdWJzY3JpYmVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gdW5zdWJzY3JpYmUoKSB7XG4gICAgICB0aGlzLnB1c2hlci5zZW5kKHtcbiAgICAgICAgZXZlbnQ6ICd1bnN1YnNjcmliZScsXG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICBjaGFubmVsOiB0aGlzLm5hbWVcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIENoYW5uZWw7XG59KF9ldmVudHNfZGlzcGF0Y2hlcl9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fW1wiRGlzcGF0Y2hlclwiXSk7XG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vc3JjL2NoYW5uZWxzL21hbm5hZ2VyLmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vc3JjL2NoYW5uZWxzL21hbm5hZ2VyLmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIGV4cG9ydHMgcHJvdmlkZWQ6IE1hbm5hZ2VyICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBfX3dlYnBhY2tfZXhwb3J0c19fLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yKF9fd2VicGFja19leHBvcnRzX18pO1xuLyogaGFybW9ueSBleHBvcnQgKGJpbmRpbmcpICovIF9fd2VicGFja19yZXF1aXJlX18uZChfX3dlYnBhY2tfZXhwb3J0c19fLCBcIk1hbm5hZ2VyXCIsIGZ1bmN0aW9uKCkgeyByZXR1cm4gTWFubmFnZXI7IH0pO1xuLyogaGFybW9ueSBpbXBvcnQgKi8gdmFyIF9jaGFubmVsX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL2NoYW5uZWwgKi8gXCIuL3NyYy9jaGFubmVscy9jaGFubmVsLmpzXCIpO1xuLyogaGFybW9ueSBpbXBvcnQgKi8gdmFyIF9wcmVzZW5jZV9jaGFubmVsX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8xX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL3ByZXNlbmNlX2NoYW5uZWwgKi8gXCIuL3NyYy9jaGFubmVscy9wcmVzZW5jZV9jaGFubmVsLmpzXCIpO1xuLyogaGFybW9ueSBpbXBvcnQgKi8gdmFyIF9wcml2YXRlX2NoYW5uZWxfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzJfXyA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vcHJpdmF0ZV9jaGFubmVsICovIFwiLi9zcmMvY2hhbm5lbHMvcHJpdmF0ZV9jaGFubmVsLmpzXCIpO1xuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfVxuXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfVxuXG5cblxuXG52YXIgTWFubmFnZXIgPVxuLyojX19QVVJFX18qL1xuZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBNYW5uYWdlcigpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgTWFubmFnZXIpO1xuXG4gICAgdGhpcy5jaGFubmVscyA9IHt9O1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKE1hbm5hZ2VyLCBbe1xuICAgIGtleTogXCJhZGRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gYWRkKG5hbWUsIHB1c2hlcikge1xuICAgICAgaWYgKCF0aGlzLmNoYW5uZWxzW25hbWVdKSB7XG4gICAgICAgIHRoaXMuY2hhbm5lbHNbbmFtZV0gPSBjcmVhdGVDaGFubmVsKG5hbWUsIHB1c2hlcik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLmNoYW5uZWxzW25hbWVdO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJhbGxcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gYWxsKCkge1xuICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKHRoaXMuY2hhbm5lbHMpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJmaW5kXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGZpbmQobmFtZSkge1xuICAgICAgcmV0dXJuIHRoaXMuY2hhbm5lbHNbbmFtZV07XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInJlbW92ZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW1vdmUobmFtZSkge1xuICAgICAgdmFyIGNoYW5uZWwgPSB0aGlzLmNoYW5uZWxzW25hbWVdO1xuICAgICAgZGVsZXRlIHRoaXMuY2hhbm5lbHNbbmFtZV07XG4gICAgICByZXR1cm4gY2hhbm5lbDtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwic3Vic2NyaWJlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHN1YnNjcmliZSgpIHtcbiAgICAgIGZvciAodmFyIGkgaW4gdGhpcy5jaGFubmVscykge1xuICAgICAgICB0aGlzLmNoYW5uZWxzW2ldLnN1YnNjcmliZSgpO1xuICAgICAgfVxuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBNYW5uYWdlcjtcbn0oKTtcblxuZnVuY3Rpb24gY3JlYXRlQ2hhbm5lbChuYW1lLCBwdXNoZXIpIHtcbiAgaWYgKG5hbWUuaW5kZXhPZigncHJpdmF0ZS0nKSA9PT0gMCkge1xuICAgIHJldHVybiBuZXcgX3ByaXZhdGVfY2hhbm5lbF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMl9fW1wiUHJpdmF0ZUNoYW5uZWxcIl0obmFtZSwgcHVzaGVyKTtcbiAgfSBlbHNlIGlmIChuYW1lLmluZGV4T2YoJ3ByZXNlbmNlLScpID09PSAwKSB7XG4gICAgcmV0dXJuIG5ldyBfcHJlc2VuY2VfY2hhbm5lbF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMV9fW1wiUHJlc2VuY2VDaGFubmVsXCJdKG5hbWUsIHB1c2hlcik7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIG5ldyBfY2hhbm5lbF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fW1wiQ2hhbm5lbFwiXShuYW1lLCBwdXNoZXIpO1xuICB9XG59XG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vc3JjL2NoYW5uZWxzL3ByZXNlbmNlX2NoYW5uZWwuanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL3NyYy9jaGFubmVscy9wcmVzZW5jZV9jaGFubmVsLmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgZXhwb3J0cyBwcm92aWRlZDogUHJlc2VuY2VDaGFubmVsICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBfX3dlYnBhY2tfZXhwb3J0c19fLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yKF9fd2VicGFja19leHBvcnRzX18pO1xuLyogaGFybW9ueSBleHBvcnQgKGJpbmRpbmcpICovIF9fd2VicGFja19yZXF1aXJlX18uZChfX3dlYnBhY2tfZXhwb3J0c19fLCBcIlByZXNlbmNlQ2hhbm5lbFwiLCBmdW5jdGlvbigpIHsgcmV0dXJuIFByZXNlbmNlQ2hhbm5lbDsgfSk7XG4vKiBoYXJtb255IGltcG9ydCAqLyB2YXIgX2V2ZW50c19kaXNwYXRjaGVyX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuLi9ldmVudHMvZGlzcGF0Y2hlciAqLyBcIi4vc3JjL2V2ZW50cy9kaXNwYXRjaGVyLmpzXCIpO1xuZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfTsgfSBlbHNlIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9OyB9IHJldHVybiBfdHlwZW9mKG9iaik7IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfVxuXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmIChjYWxsICYmIChfdHlwZW9mKGNhbGwpID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpKSB7IHJldHVybiBjYWxsOyB9IHJldHVybiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpOyB9XG5cbmZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikgeyBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gc2VsZjsgfVxuXG5mdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyBfZ2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3QuZ2V0UHJvdG90eXBlT2YgOiBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyByZXR1cm4gby5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKG8pOyB9OyByZXR1cm4gX2dldFByb3RvdHlwZU9mKG8pOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBfc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpOyB9XG5cbmZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBvLl9fcHJvdG9fXyA9IHA7IHJldHVybiBvOyB9OyByZXR1cm4gX3NldFByb3RvdHlwZU9mKG8sIHApOyB9XG5cblxudmFyIFByZXNlbmNlQ2hhbm5lbCA9XG4vKiNfX1BVUkVfXyovXG5mdW5jdGlvbiAoX0Rpc3BhdGNoZXIpIHtcbiAgX2luaGVyaXRzKFByZXNlbmNlQ2hhbm5lbCwgX0Rpc3BhdGNoZXIpO1xuXG4gIGZ1bmN0aW9uIFByZXNlbmNlQ2hhbm5lbChuYW1lLCBwdXNoZXIpIHtcbiAgICB2YXIgX3RoaXM7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgUHJlc2VuY2VDaGFubmVsKTtcblxuICAgIF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX2dldFByb3RvdHlwZU9mKFByZXNlbmNlQ2hhbm5lbCkuY2FsbCh0aGlzKSk7XG4gICAgX3RoaXMubmFtZSA9IG5hbWU7XG4gICAgX3RoaXMucHVzaGVyID0gcHVzaGVyO1xuICAgIF90aGlzLmF1dGggPSBudWxsO1xuXG4gICAgaWYgKF90aGlzLnB1c2hlci5zb2NrZXQuc3RhdGUgPT0gMSkge1xuICAgICAgX3RoaXMuc3Vic2NyaWJlKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKFByZXNlbmNlQ2hhbm5lbCwgW3tcbiAgICBrZXk6IFwic3Vic2NyaWJlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHN1YnNjcmliZSgpIHtcbiAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICB0aGlzLnB1c2hlci5hdXRoKHRoaXMubmFtZSwgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgX3RoaXMyLmF1dGggPSBlLmRhdGEuYXV0aDtcblxuICAgICAgICBfdGhpczIucHVzaGVyLnNlbmQoe1xuICAgICAgICAgIGV2ZW50OiAnc3Vic2NyaWJlJyxcbiAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICBjaGFubmVsOiBfdGhpczIubmFtZSxcbiAgICAgICAgICAgIGF1dGg6IF90aGlzMi5hdXRoLFxuICAgICAgICAgICAgY2hhbm5lbF9kYXRhOiBlLmRhdGEuY2hhbm5lbF9kYXRhXG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJ1bnN1YnNjcmliZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiB1bnN1YnNjcmliZSgpIHtcbiAgICAgIHRoaXMucHVzaGVyLnNlbmQoe1xuICAgICAgICBldmVudDogJ3Vuc3Vic2NyaWJlJyxcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgIGNoYW5uZWw6IHRoaXMubmFtZVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gUHJlc2VuY2VDaGFubmVsO1xufShfZXZlbnRzX2Rpc3BhdGNoZXJfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfX1tcIkRpc3BhdGNoZXJcIl0pO1xuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL3NyYy9jaGFubmVscy9wcml2YXRlX2NoYW5uZWwuanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vc3JjL2NoYW5uZWxzL3ByaXZhdGVfY2hhbm5lbC5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgZXhwb3J0cyBwcm92aWRlZDogUHJpdmF0ZUNoYW5uZWwgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIF9fd2VicGFja19leHBvcnRzX18sIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIoX193ZWJwYWNrX2V4cG9ydHNfXyk7XG4vKiBoYXJtb255IGV4cG9ydCAoYmluZGluZykgKi8gX193ZWJwYWNrX3JlcXVpcmVfXy5kKF9fd2VicGFja19leHBvcnRzX18sIFwiUHJpdmF0ZUNoYW5uZWxcIiwgZnVuY3Rpb24oKSB7IHJldHVybiBQcml2YXRlQ2hhbm5lbDsgfSk7XG4vKiBoYXJtb255IGltcG9ydCAqLyB2YXIgX2V2ZW50c19kaXNwYXRjaGVyX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuLi9ldmVudHMvZGlzcGF0Y2hlciAqLyBcIi4vc3JjL2V2ZW50cy9kaXNwYXRjaGVyLmpzXCIpO1xuZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfTsgfSBlbHNlIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9OyB9IHJldHVybiBfdHlwZW9mKG9iaik7IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfVxuXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmIChjYWxsICYmIChfdHlwZW9mKGNhbGwpID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpKSB7IHJldHVybiBjYWxsOyB9IHJldHVybiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpOyB9XG5cbmZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikgeyBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gc2VsZjsgfVxuXG5mdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyBfZ2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3QuZ2V0UHJvdG90eXBlT2YgOiBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyByZXR1cm4gby5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKG8pOyB9OyByZXR1cm4gX2dldFByb3RvdHlwZU9mKG8pOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBfc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpOyB9XG5cbmZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBvLl9fcHJvdG9fXyA9IHA7IHJldHVybiBvOyB9OyByZXR1cm4gX3NldFByb3RvdHlwZU9mKG8sIHApOyB9XG5cblxudmFyIFByaXZhdGVDaGFubmVsID1cbi8qI19fUFVSRV9fKi9cbmZ1bmN0aW9uIChfRGlzcGF0Y2hlcikge1xuICBfaW5oZXJpdHMoUHJpdmF0ZUNoYW5uZWwsIF9EaXNwYXRjaGVyKTtcblxuICBmdW5jdGlvbiBQcml2YXRlQ2hhbm5lbChuYW1lLCBwdXNoZXIpIHtcbiAgICB2YXIgX3RoaXM7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgUHJpdmF0ZUNoYW5uZWwpO1xuXG4gICAgX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfZ2V0UHJvdG90eXBlT2YoUHJpdmF0ZUNoYW5uZWwpLmNhbGwodGhpcykpO1xuICAgIF90aGlzLm5hbWUgPSBuYW1lO1xuICAgIF90aGlzLnB1c2hlciA9IHB1c2hlcjtcbiAgICBfdGhpcy5hdXRoID0gbnVsbDtcblxuICAgIGlmIChfdGhpcy5wdXNoZXIuc29ja2V0LnN0YXRlID09IDEpIHtcbiAgICAgIF90aGlzLnN1YnNjcmliZSgpO1xuICAgIH1cblxuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhQcml2YXRlQ2hhbm5lbCwgW3tcbiAgICBrZXk6IFwic3Vic2NyaWJlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHN1YnNjcmliZSgpIHtcbiAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICB0aGlzLnB1c2hlci5hdXRoKHRoaXMubmFtZSwgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgX3RoaXMyLmF1dGggPSBlLmRhdGEuYXV0aDtcblxuICAgICAgICBfdGhpczIucHVzaGVyLnNlbmQoe1xuICAgICAgICAgIGV2ZW50OiAnc3Vic2NyaWJlJyxcbiAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICBjaGFubmVsOiBfdGhpczIubmFtZSxcbiAgICAgICAgICAgIGF1dGg6IF90aGlzMi5hdXRoXG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJ1bnN1YnNjcmliZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiB1bnN1YnNjcmliZSgpIHtcbiAgICAgIHRoaXMucHVzaGVyLnNlbmQoe1xuICAgICAgICBldmVudDogJ3Vuc3Vic2NyaWJlJyxcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgIGNoYW5uZWw6IHRoaXMubmFtZVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gUHJpdmF0ZUNoYW5uZWw7XG59KF9ldmVudHNfZGlzcGF0Y2hlcl9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fW1wiRGlzcGF0Y2hlclwiXSk7XG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vc3JjL2Nvbm5lY3Rpb24vc29ja2V0LmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vc3JjL2Nvbm5lY3Rpb24vc29ja2V0LmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIGV4cG9ydHMgcHJvdmlkZWQ6IFNvY2tldCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgX193ZWJwYWNrX2V4cG9ydHNfXywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcbl9fd2VicGFja19yZXF1aXJlX18ucihfX3dlYnBhY2tfZXhwb3J0c19fKTtcbi8qIGhhcm1vbnkgZXhwb3J0IChiaW5kaW5nKSAqLyBfX3dlYnBhY2tfcmVxdWlyZV9fLmQoX193ZWJwYWNrX2V4cG9ydHNfXywgXCJTb2NrZXRcIiwgZnVuY3Rpb24oKSB7IHJldHVybiBTb2NrZXQ7IH0pO1xuLyogaGFybW9ueSBpbXBvcnQgKi8gdmFyIF9ldmVudHNfZGlzcGF0Y2hlcl9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi4vZXZlbnRzL2Rpc3BhdGNoZXIgKi8gXCIuL3NyYy9ldmVudHMvZGlzcGF0Y2hlci5qc1wiKTtcbmZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH07IH0gZWxzZSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTsgfSByZXR1cm4gX3R5cGVvZihvYmopOyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoY2FsbCAmJiAoX3R5cGVvZihjYWxsKSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSkgeyByZXR1cm4gY2FsbDsgfSByZXR1cm4gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKTsgfVxuXG5mdW5jdGlvbiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpIHsgaWYgKHNlbGYgPT09IHZvaWQgMCkgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIHNlbGY7IH1cblxuZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgX2dldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LmdldFByb3RvdHlwZU9mIDogZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgcmV0dXJuIG8uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihvKTsgfTsgcmV0dXJuIF9nZXRQcm90b3R5cGVPZihvKTsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgX3NldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKTsgfVxuXG5mdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgby5fX3Byb3RvX18gPSBwOyByZXR1cm4gbzsgfTsgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihvLCBwKTsgfVxuXG5cbnZhciBTb2NrZXQgPVxuLyojX19QVVJFX18qL1xuZnVuY3Rpb24gKF9EaXNwYXRjaGVyKSB7XG4gIF9pbmhlcml0cyhTb2NrZXQsIF9EaXNwYXRjaGVyKTtcblxuICBmdW5jdGlvbiBTb2NrZXQocHVzaGVyLCBob3N0KSB7XG4gICAgdmFyIF90aGlzO1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFNvY2tldCk7XG5cbiAgICBfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9nZXRQcm90b3R5cGVPZihTb2NrZXQpLmNhbGwodGhpcykpO1xuICAgIF90aGlzLnB1c2hlciA9IHB1c2hlcjtcbiAgICBfdGhpcy5zb2NrZXQgPSBuZXcgV2ViU29ja2V0KGhvc3QgKyAnLycgKyBfdGhpcy5wdXNoZXIua2V5KTtcblxuICAgIF90aGlzLmJpbmRMaXN0ZW5lcnMoKTtcblxuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhTb2NrZXQsIFt7XG4gICAga2V5OiBcImJpbmRMaXN0ZW5lcnNcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gYmluZExpc3RlbmVycygpIHtcbiAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICB0aGlzLnNvY2tldC5vbm9wZW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIF90aGlzMi5vbk9wZW4oKTtcbiAgICAgIH07XG5cbiAgICAgIHRoaXMuc29ja2V0Lm9uZXJyb3IgPSBmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgX3RoaXMyLm9uRXJyb3IoZXJyb3IpO1xuICAgICAgfTtcblxuICAgICAgdGhpcy5zb2NrZXQub25jbG9zZSA9IGZ1bmN0aW9uIChjbG9zZUV2ZW50KSB7XG4gICAgICAgIF90aGlzMi5vbkNsb3NlKGNsb3NlRXZlbnQpO1xuICAgICAgfTtcblxuICAgICAgdGhpcy5zb2NrZXQub25tZXNzYWdlID0gZnVuY3Rpb24gKG1lc3NhZ2UpIHtcbiAgICAgICAgX3RoaXMyLm9uTWVzc2FnZShtZXNzYWdlKTtcbiAgICAgIH07XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcIm9uT3BlblwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBvbk9wZW4oKSB7XG4gICAgICB2YXIgX3RoaXMzID0gdGhpcztcblxuICAgICAgLy/liJ3lp4vnirbmgIFcbiAgICAgIHRoaXMuc3RhdGUgPSAwO1xuICAgICAgdGhpcy5iaW5kKCdjb25uZWN0ZWQnLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICBfdGhpczMuc29ja2V0LnNvY2tldF9pZCA9IGUuc29ja2V0X2lkO1xuICAgICAgICBfdGhpczMuc3RhdGUgPSAxOyAvL+iuoumYhVxuXG4gICAgICAgIF90aGlzMy5wdXNoZXIuY2hhbm5lbHMuc3Vic2NyaWJlKCk7XG4gICAgICB9KTtcbiAgICAgIHRoaXMuYmluZCgnY29ubmVjdGlvbl9mYWlsZWQnLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICBfdGhpczMuc3RhdGUgPSAtMTtcbiAgICAgICAgY29uc29sZS5lcnJvcihlLmVycm9yKTtcbiAgICAgIH0pO1xuICAgICAgLyp0aGlzLnNlbmQoe1xyXG4gICAgICAgICAgZXZlbnQ6ICdhdXRob3JpemF0aW9uJ1xyXG4gICAgICB9KTsqL1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJvbkVycm9yXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG9uRXJyb3IoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJvbkNsb3NlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG9uQ2xvc2UoY2xvc2VFdmVudCkge1xuICAgICAgaWYgKHRoaXMuc29ja2V0LnJlYWR5U3RhdGUgPT0gV2ViU29ja2V0LkNMT1NFRCkge1xuICAgICAgICBpZiAoY2xvc2VFdmVudC50eXBlID09ICdjbG9zZScpIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCdzb2NrZXTmnI3liqHlt7Lmlq3lvIAhIScpO1xuICAgICAgICB9IGVsc2UgaWYgKGNsb3NlRXZlbnQudHlwZSA9PSAnbWVzc2FnZScpIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGNsb3NlRXZlbnQuZGF0YSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcign5bey5pat5byAISEnKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJvbk1lc3NhZ2VcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gb25NZXNzYWdlKG1lc3NhZ2UpIHtcbiAgICAgIHZhciBlRGF0YSA9IEpTT04ucGFyc2UobWVzc2FnZS5kYXRhKTtcbiAgICAgIHZhciBldmVudCA9IGVEYXRhLmV2ZW50O1xuICAgICAgdmFyIGRhdGEgPSBlRGF0YS5kYXRhO1xuXG4gICAgICBpZiAoZURhdGEuY2hhbm5lbCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHRoaXMucHVzaGVyLmNoYW5uZWxzLmZpbmQoZURhdGEuY2hhbm5lbCkuZW1pdChldmVudCwgZGF0YSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmVtaXQoZXZlbnQsIGRhdGEpO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJzZW5kXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNlbmQoanNvbikge1xuICAgICAgaWYgKHRoaXMuc3RhdGUgIT09IC0xKSB7XG4gICAgICAgIHRoaXMuc29ja2V0LnNlbmQoSlNPTi5zdHJpbmdpZnkoanNvbikpO1xuICAgICAgfVxuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBTb2NrZXQ7XG59KF9ldmVudHNfZGlzcGF0Y2hlcl9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fW1wiRGlzcGF0Y2hlclwiXSk7XG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vc3JjL2V2ZW50cy9jYWxsYmFja19yZWdpc3RyeS5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9zcmMvZXZlbnRzL2NhbGxiYWNrX3JlZ2lzdHJ5LmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBleHBvcnRzIHByb3ZpZGVkOiBDYWxsYmFja1JlZ2lzdHJ5ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBfX3dlYnBhY2tfZXhwb3J0c19fLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yKF9fd2VicGFja19leHBvcnRzX18pO1xuLyogaGFybW9ueSBleHBvcnQgKGJpbmRpbmcpICovIF9fd2VicGFja19yZXF1aXJlX18uZChfX3dlYnBhY2tfZXhwb3J0c19fLCBcIkNhbGxiYWNrUmVnaXN0cnlcIiwgZnVuY3Rpb24oKSB7IHJldHVybiBDYWxsYmFja1JlZ2lzdHJ5OyB9KTtcbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH1cblxudmFyIENhbGxiYWNrUmVnaXN0cnkgPVxuLyojX19QVVJFX18qL1xuZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBDYWxsYmFja1JlZ2lzdHJ5KCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBDYWxsYmFja1JlZ2lzdHJ5KTtcblxuICAgIHRoaXMuX2NhbGxiYWNrcyA9IHt9O1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKENhbGxiYWNrUmVnaXN0cnksIFt7XG4gICAga2V5OiBcImdldFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXQobmFtZSkge1xuICAgICAgcmV0dXJuIHRoaXMuX2NhbGxiYWNrc1twcmVmaXgobmFtZSldO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJhZGRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gYWRkKG5hbWUsIGNhbGxiYWNrLCBjb250ZXh0KSB7XG4gICAgICB2YXIgcHJlZml4ZWRFdmVudE5hbWUgPSBwcmVmaXgobmFtZSk7XG4gICAgICB0aGlzLl9jYWxsYmFja3NbcHJlZml4ZWRFdmVudE5hbWVdID0gdGhpcy5fY2FsbGJhY2tzW3ByZWZpeGVkRXZlbnROYW1lXSB8fCBbXTtcblxuICAgICAgdGhpcy5fY2FsbGJhY2tzW3ByZWZpeGVkRXZlbnROYW1lXS5wdXNoKHtcbiAgICAgICAgZm46IGNhbGxiYWNrLFxuICAgICAgICBjb250ZXh0OiBjb250ZXh0XG4gICAgICB9KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwicmVtb3ZlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbW92ZShuYW1lLCBjYWxsYmFjaywgY29udGV4dCkge1xuICAgICAgaWYgKCFuYW1lICYmICFjYWxsYmFjayAmJiAhY29udGV4dCkge1xuICAgICAgICB0aGlzLl9jYWxsYmFja3MgPSB7fTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB2YXIgbmFtZXMgPSBuYW1lID8gW3ByZWZpeChuYW1lKV0gOiBPYmplY3Qua2V5cyh0aGlzLl9jYWxsYmFja3MpO1xuXG4gICAgICBpZiAoY2FsbGJhY2sgfHwgY29udGV4dCkge1xuICAgICAgICB0aGlzLnJlbW92ZUNhbGxiYWNrKG5hbWVzLCBjYWxsYmFjaywgY29udGV4dCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnJlbW92ZUFsbENhbGxiYWNrcyhuYW1lcyk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInJlbW92ZUNhbGxiYWNrXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbW92ZUNhbGxiYWNrKG5hbWVzLCBjYWxsYmFjaywgY29udGV4dCkge1xuICAgICAgZm9yICh2YXIgbmFtZSBpbiBuYW1lcykge1xuICAgICAgICBmb3IgKHZhciBrZXkgaW4gdGhpcy5fY2FsbGJhY2tzW25hbWVdKSB7XG4gICAgICAgICAgaWYgKHRoaXMuX2NhbGxiYWNrc1tuYW1lXVtrZXldLmZuID09IGNhbGxiYWNrIHx8IHRoaXMuX2NhbGxiYWNrc1tuYW1lXVtrZXldLmNvbnRleHQgPT0gY29udGV4dCkge1xuICAgICAgICAgICAgZGVsZXRlIHRoaXMuX2NhbGxiYWNrc1tuYW1lXVtrZXldO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLl9jYWxsYmFja3NbbmFtZV0ubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgZGVsZXRlIHRoaXMuX2NhbGxiYWNrc1tuYW1lXTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJyZW1vdmVBbGxDYWxsYmFja3NcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVtb3ZlQWxsQ2FsbGJhY2tzKG5hbWVzKSB7XG4gICAgICBmb3IgKHZhciBuYW1lIGluIG5hbWVzKSB7XG4gICAgICAgIGRlbGV0ZSB0aGlzLl9jYWxsYmFja3NbbmFtZV07XG4gICAgICB9XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIENhbGxiYWNrUmVnaXN0cnk7XG59KCk7XG5cbmZ1bmN0aW9uIHByZWZpeChuYW1lKSB7XG4gIHJldHVybiBcIl9cIiArIG5hbWU7XG59XG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vc3JjL2V2ZW50cy9kaXNwYXRjaGVyLmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vc3JjL2V2ZW50cy9kaXNwYXRjaGVyLmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIGV4cG9ydHMgcHJvdmlkZWQ6IERpc3BhdGNoZXIgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIF9fd2VicGFja19leHBvcnRzX18sIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIoX193ZWJwYWNrX2V4cG9ydHNfXyk7XG4vKiBoYXJtb255IGV4cG9ydCAoYmluZGluZykgKi8gX193ZWJwYWNrX3JlcXVpcmVfXy5kKF9fd2VicGFja19leHBvcnRzX18sIFwiRGlzcGF0Y2hlclwiLCBmdW5jdGlvbigpIHsgcmV0dXJuIERpc3BhdGNoZXI7IH0pO1xuLyogaGFybW9ueSBpbXBvcnQgKi8gdmFyIF9jYWxsYmFja19yZWdpc3RyeV9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9jYWxsYmFja19yZWdpc3RyeSAqLyBcIi4vc3JjL2V2ZW50cy9jYWxsYmFja19yZWdpc3RyeS5qc1wiKTtcbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH1cblxuXG52YXIgRGlzcGF0Y2hlciA9XG4vKiNfX1BVUkVfXyovXG5mdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIERpc3BhdGNoZXIoKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIERpc3BhdGNoZXIpO1xuXG4gICAgdGhpcy5jYWxsYmFja3MgPSBuZXcgX2NhbGxiYWNrX3JlZ2lzdHJ5X19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX19bXCJDYWxsYmFja1JlZ2lzdHJ5XCJdKCk7XG4gICAgdGhpcy5nbG9iYWxfY2FsbGJhY2tzID0gW107XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoRGlzcGF0Y2hlciwgW3tcbiAgICBrZXk6IFwiYmluZFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBiaW5kKGV2ZW50TmFtZSwgY2FsbGJhY2ssIGNvbnRleHQpIHtcbiAgICAgIHRoaXMuY2FsbGJhY2tzLmFkZChldmVudE5hbWUsIGNhbGxiYWNrLCBjb250ZXh0KTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJiaW5kX2dsb2JhbFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBiaW5kX2dsb2JhbChjYWxsYmFjaykge1xuICAgICAgdGhpcy5nbG9iYWxfY2FsbGJhY2tzLnB1c2goY2FsbGJhY2spO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInVuYmluZFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiB1bmJpbmQoZXZlbnROYW1lLCBjYWxsYmFjaywgY29udGV4dCkge1xuICAgICAgdGhpcy5jYWxsYmFja3MucmVtb3ZlKGV2ZW50TmFtZSwgY2FsbGJhY2ssIGNvbnRleHQpO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInVuYmluZF9nbG9iYWxcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gdW5iaW5kX2dsb2JhbChjYWxsYmFjaykge1xuICAgICAgaWYgKCFjYWxsYmFjaykge1xuICAgICAgICB0aGlzLmdsb2JhbF9jYWxsYmFja3MgPSBbXTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICB9XG5cbiAgICAgIGZvciAodmFyIGkgaW4gdGhpcy5nbG9iYWxfY2FsbGJhY2tzKSB7XG4gICAgICAgIGlmIChjYWxsYmFjayA9PSB0aGlzLmdsb2JhbF9jYWxsYmFja3NbaV0pIHtcbiAgICAgICAgICBkZWxldGUgdGhpcy5nbG9iYWxfY2FsbGJhY2tzW2ldO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJ1bmJpbmRfYWxsXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHVuYmluZF9hbGwoKSB7XG4gICAgICB0aGlzLnVuYmluZCgpO1xuICAgICAgdGhpcy51bmJpbmRfZ2xvYmFsKCk7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZW1pdFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBlbWl0KGV2ZW50TmFtZSwgZGF0YSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmdsb2JhbF9jYWxsYmFja3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdGhpcy5nbG9iYWxfY2FsbGJhY2tzW2ldKGV2ZW50TmFtZSwgZGF0YSk7XG4gICAgICB9XG5cbiAgICAgIHZhciBjYWxsYmFja3MgPSB0aGlzLmNhbGxiYWNrcy5nZXQoZXZlbnROYW1lKTtcblxuICAgICAgaWYgKGNhbGxiYWNrcyAmJiBjYWxsYmFja3MubGVuZ3RoID4gMCkge1xuICAgICAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgY2FsbGJhY2tzLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgIGNhbGxiYWNrc1tfaV0uZm4uY2FsbChjYWxsYmFja3NbX2ldLmNvbnRleHQsIGRhdGEpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBEaXNwYXRjaGVyO1xufSgpO1xuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL3NyYy9wdXNoZXIuanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vc3JjL3B1c2hlci5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgZXhwb3J0cyBwcm92aWRlZDogUHVzaGVyICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBfX3dlYnBhY2tfZXhwb3J0c19fLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yKF9fd2VicGFja19leHBvcnRzX18pO1xuLyogaGFybW9ueSBleHBvcnQgKGJpbmRpbmcpICovIF9fd2VicGFja19yZXF1aXJlX18uZChfX3dlYnBhY2tfZXhwb3J0c19fLCBcIlB1c2hlclwiLCBmdW5jdGlvbigpIHsgcmV0dXJuIFB1c2hlcjsgfSk7XG4vKiBoYXJtb255IGltcG9ydCAqLyB2YXIgX2Nvbm5lY3Rpb25fc29ja2V0X19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL2Nvbm5lY3Rpb24vc29ja2V0ICovIFwiLi9zcmMvY29ubmVjdGlvbi9zb2NrZXQuanNcIik7XG4vKiBoYXJtb255IGltcG9ydCAqLyB2YXIgX2V2ZW50c19kaXNwYXRjaGVyX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8xX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL2V2ZW50cy9kaXNwYXRjaGVyICovIFwiLi9zcmMvZXZlbnRzL2Rpc3BhdGNoZXIuanNcIik7XG4vKiBoYXJtb255IGltcG9ydCAqLyB2YXIgX2NoYW5uZWxzX21hbm5hZ2VyX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8yX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL2NoYW5uZWxzL21hbm5hZ2VyICovIFwiLi9zcmMvY2hhbm5lbHMvbWFubmFnZXIuanNcIik7XG4vKiBoYXJtb255IGltcG9ydCAqLyB2YXIgYXhpb3NfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIGF4aW9zICovIFwiLi9ub2RlX21vZHVsZXMvYXhpb3MvaW5kZXguanNcIik7XG4vKiBoYXJtb255IGltcG9ydCAqLyB2YXIgYXhpb3NfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzNfX19kZWZhdWx0ID0gLyojX19QVVJFX18qL19fd2VicGFja19yZXF1aXJlX18ubihheGlvc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfM19fKTtcbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH1cblxuXG5cblxuXG52YXIgUHVzaGVyID1cbi8qI19fUFVSRV9fKi9cbmZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gUHVzaGVyKGFwcF9rZXksIG9wdGlvbnMpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgUHVzaGVyKTtcblxuICAgIHRoaXMuY2hlY2tBcHBLZXkoYXBwX2tleSk7XG4gICAgdGhpcy5rZXkgPSBhcHBfa2V5O1xuICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gICAgdGhpcy5kaXNwYXRjaGVyID0gbmV3IF9ldmVudHNfZGlzcGF0Y2hlcl9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMV9fW1wiRGlzcGF0Y2hlclwiXSgpO1xuICAgIHRoaXMuY2hhbm5lbHMgPSBuZXcgX2NoYW5uZWxzX21hbm5hZ2VyX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8yX19bXCJNYW5uYWdlclwiXSgpO1xuICAgIHRoaXMuY29ubmVjdCgpO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKFB1c2hlciwgW3tcbiAgICBrZXk6IFwiY29ubmVjdFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb25uZWN0KCkge1xuICAgICAgdGhpcy5zb2NrZXQgPSBuZXcgX2Nvbm5lY3Rpb25fc29ja2V0X19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX19bXCJTb2NrZXRcIl0odGhpcywgdGhpcy5vcHRpb25zLmhvc3QpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJzdWJzY3JpYmVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gc3Vic2NyaWJlKGNoYW5uZWxfbmFtZSkge1xuICAgICAgcmV0dXJuIHRoaXMuY2hhbm5lbHMuYWRkKGNoYW5uZWxfbmFtZSwgdGhpcyk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInVuc3Vic2NyaWJlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHVuc3Vic2NyaWJlKGNoYW5uZWxfbmFtZSkge1xuICAgICAgdmFyIGNoYW5uZWwgPSB0aGlzLmNoYW5uZWxzLnJlbW92ZShjaGFubmVsX25hbWUpO1xuICAgICAgY2hhbm5lbC51bnN1YnNjcmliZSgpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJnZXRTb2NrZXRJZFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRTb2NrZXRJZCgpIHtcbiAgICAgIHJldHVybiB0aGlzLnNvY2tldC5zb2NrZXQuc29ja2V0X2lkO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJzZW5kXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNlbmQoanNvbikge1xuICAgICAgdGhpcy5zb2NrZXQuc2VuZChqc29uKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiY2hlY2tBcHBLZXlcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gY2hlY2tBcHBLZXkoa2V5KSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiYXV0aFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBhdXRoKG5hbWUsIGNhbGxiYWNrKSB7XG4gICAgICB2YXIgbWV0aG9kID0gdGhpcy5vcHRpb25zLmF1dGgubWV0aG9kIHx8ICdwb3N0JztcbiAgICAgIHZhciBkYXRhID0ge307XG4gICAgICB2YXIgcGFyYW1zID0ge307XG5cbiAgICAgIGlmIChtZXRob2QgPT0gJ3Bvc3QnKSB7XG4gICAgICAgIGRhdGEgPSBPYmplY3QuYXNzaWduKHtcbiAgICAgICAgICBjaGFubmVsX25hbWU6IG5hbWUsXG4gICAgICAgICAgc29ja2V0X2lkOiB0aGlzLmdldFNvY2tldElkKClcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwYXJhbXMgPSBPYmplY3QuYXNzaWduKHtcbiAgICAgICAgICBjaGFubmVsX25hbWU6IG5hbWUsXG4gICAgICAgICAgc29ja2V0X2lkOiB0aGlzLmdldFNvY2tldElkKClcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIGF4aW9zX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8zX19fZGVmYXVsdCgpKHtcbiAgICAgICAgdXJsOiB0aGlzLm9wdGlvbnMuYXV0aC51cmwsXG4gICAgICAgIG1ldGhvZDogbWV0aG9kLFxuICAgICAgICBoZWFkZXJzOiB0aGlzLm9wdGlvbnMuYXV0aC5oZWFkZXJzIHx8IHt9LFxuICAgICAgICBwYXJhbXM6IHBhcmFtcyxcbiAgICAgICAgZGF0YTogZGF0YVxuICAgICAgfSkudGhlbihmdW5jdGlvbiAoZSkge1xuICAgICAgICBjYWxsYmFjayhlKTtcbiAgICAgIH0pLmNhdGNoKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ+engeaciemikemBk+adg+mZkOS4jei2syEnKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBQdXNoZXI7XG59KCk7XG53aW5kb3cuUHVzaGVyID0gUHVzaGVyO1xuXG4vKioqLyB9KVxuXG4vKioqKioqLyB9KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluZGxZbkJoWTJzNkx5OHZkMlZpY0dGamF5OWliMjkwYzNSeVlYQWlMQ0ozWldKd1lXTnJPaTh2THk0dmJtOWtaVjl0YjJSMWJHVnpMMkY0YVc5ekwybHVaR1Y0TG1weklpd2lkMlZpY0dGamF6b3ZMeTh1TDI1dlpHVmZiVzlrZFd4bGN5OWhlR2x2Y3k5c2FXSXZZV1JoY0hSbGNuTXZlR2h5TG1weklpd2lkMlZpY0dGamF6b3ZMeTh1TDI1dlpHVmZiVzlrZFd4bGN5OWhlR2x2Y3k5c2FXSXZZWGhwYjNNdWFuTWlMQ0ozWldKd1lXTnJPaTh2THk0dmJtOWtaVjl0YjJSMWJHVnpMMkY0YVc5ekwyeHBZaTlqWVc1alpXd3ZRMkZ1WTJWc0xtcHpJaXdpZDJWaWNHRmphem92THk4dUwyNXZaR1ZmYlc5a2RXeGxjeTloZUdsdmN5OXNhV0l2WTJGdVkyVnNMME5oYm1ObGJGUnZhMlZ1TG1weklpd2lkMlZpY0dGamF6b3ZMeTh1TDI1dlpHVmZiVzlrZFd4bGN5OWhlR2x2Y3k5c2FXSXZZMkZ1WTJWc0wybHpRMkZ1WTJWc0xtcHpJaXdpZDJWaWNHRmphem92THk4dUwyNXZaR1ZmYlc5a2RXeGxjeTloZUdsdmN5OXNhV0l2WTI5eVpTOUJlR2x2Y3k1cWN5SXNJbmRsWW5CaFkyczZMeTh2TGk5dWIyUmxYMjF2WkhWc1pYTXZZWGhwYjNNdmJHbGlMMk52Y21VdlNXNTBaWEpqWlhCMGIzSk5ZVzVoWjJWeUxtcHpJaXdpZDJWaWNHRmphem92THk4dUwyNXZaR1ZmYlc5a2RXeGxjeTloZUdsdmN5OXNhV0l2WTI5eVpTOWpjbVZoZEdWRmNuSnZjaTVxY3lJc0luZGxZbkJoWTJzNkx5OHZMaTl1YjJSbFgyMXZaSFZzWlhNdllYaHBiM012YkdsaUwyTnZjbVV2WkdsemNHRjBZMmhTWlhGMVpYTjBMbXB6SWl3aWQyVmljR0ZqYXpvdkx5OHVMMjV2WkdWZmJXOWtkV3hsY3k5aGVHbHZjeTlzYVdJdlkyOXlaUzlsYm1oaGJtTmxSWEp5YjNJdWFuTWlMQ0ozWldKd1lXTnJPaTh2THk0dmJtOWtaVjl0YjJSMWJHVnpMMkY0YVc5ekwyeHBZaTlqYjNKbEwzTmxkSFJzWlM1cWN5SXNJbmRsWW5CaFkyczZMeTh2TGk5dWIyUmxYMjF2WkhWc1pYTXZZWGhwYjNNdmJHbGlMMk52Y21VdmRISmhibk5tYjNKdFJHRjBZUzVxY3lJc0luZGxZbkJoWTJzNkx5OHZMaTl1YjJSbFgyMXZaSFZzWlhNdllYaHBiM012YkdsaUwyUmxabUYxYkhSekxtcHpJaXdpZDJWaWNHRmphem92THk4dUwyNXZaR1ZmYlc5a2RXeGxjeTloZUdsdmN5OXNhV0l2YUdWc2NHVnljeTlpYVc1a0xtcHpJaXdpZDJWaWNHRmphem92THk4dUwyNXZaR1ZmYlc5a2RXeGxjeTloZUdsdmN5OXNhV0l2YUdWc2NHVnljeTlpZEc5aExtcHpJaXdpZDJWaWNHRmphem92THk4dUwyNXZaR1ZmYlc5a2RXeGxjeTloZUdsdmN5OXNhV0l2YUdWc2NHVnljeTlpZFdsc1pGVlNUQzVxY3lJc0luZGxZbkJoWTJzNkx5OHZMaTl1YjJSbFgyMXZaSFZzWlhNdllYaHBiM012YkdsaUwyaGxiSEJsY25NdlkyOXRZbWx1WlZWU1RITXVhbk1pTENKM1pXSndZV05yT2k4dkx5NHZibTlrWlY5dGIyUjFiR1Z6TDJGNGFXOXpMMnhwWWk5b1pXeHdaWEp6TDJOdmIydHBaWE11YW5NaUxDSjNaV0p3WVdOck9pOHZMeTR2Ym05a1pWOXRiMlIxYkdWekwyRjRhVzl6TDJ4cFlpOW9aV3h3WlhKekwybHpRV0p6YjJ4MWRHVlZVa3d1YW5NaUxDSjNaV0p3WVdOck9pOHZMeTR2Ym05a1pWOXRiMlIxYkdWekwyRjRhVzl6TDJ4cFlpOW9aV3h3WlhKekwybHpWVkpNVTJGdFpVOXlhV2RwYmk1cWN5SXNJbmRsWW5CaFkyczZMeTh2TGk5dWIyUmxYMjF2WkhWc1pYTXZZWGhwYjNNdmJHbGlMMmhsYkhCbGNuTXZibTl5YldGc2FYcGxTR1ZoWkdWeVRtRnRaUzVxY3lJc0luZGxZbkJoWTJzNkx5OHZMaTl1YjJSbFgyMXZaSFZzWlhNdllYaHBiM012YkdsaUwyaGxiSEJsY25NdmNHRnljMlZJWldGa1pYSnpMbXB6SWl3aWQyVmljR0ZqYXpvdkx5OHVMMjV2WkdWZmJXOWtkV3hsY3k5aGVHbHZjeTlzYVdJdmFHVnNjR1Z5Y3k5emNISmxZV1F1YW5NaUxDSjNaV0p3WVdOck9pOHZMeTR2Ym05a1pWOXRiMlIxYkdWekwyRjRhVzl6TDJ4cFlpOTFkR2xzY3k1cWN5SXNJbmRsWW5CaFkyczZMeTh2TGk5dWIyUmxYMjF2WkhWc1pYTXZhWE10WW5WbVptVnlMMmx1WkdWNExtcHpJaXdpZDJWaWNHRmphem92THk4dUwyNXZaR1ZmYlc5a2RXeGxjeTl3Y205alpYTnpMMkp5YjNkelpYSXVhbk1pTENKM1pXSndZV05yT2k4dkx5NHZjM0pqTDJOb1lXNXVaV3h6TDJOb1lXNXVaV3d1YW5NaUxDSjNaV0p3WVdOck9pOHZMeTR2YzNKakwyTm9ZVzV1Wld4ekwyMWhibTVoWjJWeUxtcHpJaXdpZDJWaWNHRmphem92THk4dUwzTnlZeTlqYUdGdWJtVnNjeTl3Y21WelpXNWpaVjlqYUdGdWJtVnNMbXB6SWl3aWQyVmljR0ZqYXpvdkx5OHVMM055WXk5amFHRnVibVZzY3k5d2NtbDJZWFJsWDJOb1lXNXVaV3d1YW5NaUxDSjNaV0p3WVdOck9pOHZMeTR2YzNKakwyTnZibTVsWTNScGIyNHZjMjlqYTJWMExtcHpJaXdpZDJWaWNHRmphem92THk4dUwzTnlZeTlsZG1WdWRITXZZMkZzYkdKaFkydGZjbVZuYVhOMGNua3Vhbk1pTENKM1pXSndZV05yT2k4dkx5NHZjM0pqTDJWMlpXNTBjeTlrYVhOd1lYUmphR1Z5TG1weklpd2lkMlZpY0dGamF6b3ZMeTh1TDNOeVl5OXdkWE5vWlhJdWFuTWlYU3dpYm1GdFpYTWlPbHNpUTJoaGJtNWxiQ0lzSW01aGJXVWlMQ0p3ZFhOb1pYSWlMQ0p6YjJOclpYUWlMQ0p6ZEdGMFpTSXNJbk4xWW5OamNtbGlaU0lzSW5ObGJtUWlMQ0psZG1WdWRDSXNJbVJoZEdFaUxDSmphR0Z1Ym1Wc0lpd2lSR2x6Y0dGMFkyaGxjaUlzSWsxaGJtNWhaMlZ5SWl3aVkyaGhibTVsYkhNaUxDSmpjbVZoZEdWRGFHRnVibVZzSWl3aVQySnFaV04wSWl3aWEyVjVjeUlzSW1raUxDSnBibVJsZUU5bUlpd2lVSEpwZG1GMFpVTm9ZVzV1Wld3aUxDSlFjbVZ6Wlc1alpVTm9ZVzV1Wld3aUxDSmhkWFJvSWl3aVpTSXNJbU5vWVc1dVpXeGZaR0YwWVNJc0lsTnZZMnRsZENJc0ltaHZjM1FpTENKWFpXSlRiMk5yWlhRaUxDSnJaWGtpTENKaWFXNWtUR2x6ZEdWdVpYSnpJaXdpYjI1dmNHVnVJaXdpYjI1UGNHVnVJaXdpYjI1bGNuSnZjaUlzSW1WeWNtOXlJaXdpYjI1RmNuSnZjaUlzSW05dVkyeHZjMlVpTENKamJHOXpaVVYyWlc1MElpd2liMjVEYkc5elpTSXNJbTl1YldWemMyRm5aU0lzSW0xbGMzTmhaMlVpTENKdmJrMWxjM05oWjJVaUxDSmlhVzVrSWl3aWMyOWphMlYwWDJsa0lpd2lZMjl1YzI5c1pTSXNJbkpsWVdSNVUzUmhkR1VpTENKRFRFOVRSVVFpTENKMGVYQmxJaXdpWlVSaGRHRWlMQ0pLVTA5T0lpd2ljR0Z5YzJVaUxDSjFibVJsWm1sdVpXUWlMQ0ptYVc1a0lpd2laVzFwZENJc0ltcHpiMjRpTENKemRISnBibWRwWm5raUxDSkRZV3hzWW1GamExSmxaMmx6ZEhKNUlpd2lYMk5oYkd4aVlXTnJjeUlzSW5CeVpXWnBlQ0lzSW1OaGJHeGlZV05ySWl3aVkyOXVkR1Y0ZENJc0luQnlaV1pwZUdWa1JYWmxiblJPWVcxbElpd2ljSFZ6YUNJc0ltWnVJaXdpYm1GdFpYTWlMQ0p5WlcxdmRtVkRZV3hzWW1GamF5SXNJbkpsYlc5MlpVRnNiRU5oYkd4aVlXTnJjeUlzSW14bGJtZDBhQ0lzSW1OaGJHeGlZV05yY3lJc0ltZHNiMkpoYkY5allXeHNZbUZqYTNNaUxDSmxkbVZ1ZEU1aGJXVWlMQ0poWkdRaUxDSnlaVzF2ZG1VaUxDSjFibUpwYm1RaUxDSjFibUpwYm1SZloyeHZZbUZzSWl3aVoyVjBJaXdpWTJGc2JDSXNJbEIxYzJobGNpSXNJbUZ3Y0Y5clpYa2lMQ0p2Y0hScGIyNXpJaXdpWTJobFkydEJjSEJMWlhraUxDSmthWE53WVhSamFHVnlJaXdpWTI5dWJtVmpkQ0lzSW1Ob1lXNXVaV3hmYm1GdFpTSXNJblZ1YzNWaWMyTnlhV0psSWl3aWJXVjBhRzlrSWl3aWNHRnlZVzF6SWl3aVlYTnphV2R1SWl3aVoyVjBVMjlqYTJWMFNXUWlMQ0poZUdsdmN5SXNJblZ5YkNJc0ltaGxZV1JsY25NaUxDSjBhR1Z1SWl3aVkyRjBZMmdpTENKM2FXNWtiM2NpWFN3aWJXRndjR2x1WjNNaU9pSTdRVUZCUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHM3UVVGRlFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHM3TzBGQlIwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJMR3RFUVVFd1F5eG5RMEZCWjBNN1FVRkRNVVU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3huUlVGQmQwUXNhMEpCUVd0Q08wRkJRekZGTzBGQlEwRXNlVVJCUVdsRUxHTkJRV003UVVGREwwUTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxHbEVRVUY1UXl4cFEwRkJhVU03UVVGRE1VVXNkMGhCUVdkSUxHMUNRVUZ0UWl4RlFVRkZPMEZCUTNKSk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFc2JVTkJRVEpDTERCQ1FVRXdRaXhGUVVGRk8wRkJRM1pFTEhsRFFVRnBReXhsUVVGbE8wRkJRMmhFTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQkxEaEVRVUZ6UkN3clJFRkJLMFE3TzBGQlJYSklPMEZCUTBFN096dEJRVWRCTzBGQlEwRTdPenM3T3pzN096czdPenRCUTJ4R1FTeHBRa0ZCYVVJc2JVSkJRVThzUTBGQlF5eHpSRUZCWVN4Rk96czdPenM3T3pzN096czdRVU5CZWtJN08wRkJSV0lzV1VGQldTeHRRa0ZCVHl4RFFVRkRMSEZFUVVGWk8wRkJRMmhETEdGQlFXRXNiVUpCUVU4c1EwRkJReXhwUlVGQmEwSTdRVUZEZGtNc1pVRkJaU3h0UWtGQlR5eERRVUZETERKRlFVRjFRanRCUVVNNVF5eHRRa0ZCYlVJc2JVSkJRVThzUTBGQlF5eHRSa0ZCTWtJN1FVRkRkRVFzYzBKQlFYTkNMRzFDUVVGUExFTkJRVU1zZVVaQlFUaENPMEZCUXpWRUxHdENRVUZyUWl4dFFrRkJUeXhEUVVGRExIbEZRVUZ4UWp0QlFVTXZReXg1UmtGQmVVWXNiVUpCUVU4c1EwRkJReXh0UlVGQmJVSTdPMEZCUlhCSU8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFc05FTkJRVFJETzBGQlF6VkRPenRCUVVWQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3hSUVVGUkxHRkJRVzlDTzBGQlF6VkNPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN08wRkJSVUU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFc2IwSkJRVzlDTEcxQ1FVRlBMRU5CUVVNc2VVVkJRWE5DT3p0QlFVVnNSRHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3hUUVVGVE8wRkJRMVE3UVVGRFFUdEJRVU5CTzBGQlEwRXNUMEZCVHp0QlFVTlFPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEVzVDBGQlR6dEJRVU5RTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxFOUJRVTg3UVVGRFVEczdRVUZGUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTEVkQlFVYzdRVUZEU0RzN096czdPenM3T3pzN096dEJRMjVNWVRzN1FVRkZZaXhaUVVGWkxHMUNRVUZQTEVOQlFVTXNhMFJCUVZNN1FVRkROMElzVjBGQlZ5eHRRa0ZCVHl4RFFVRkRMR2RGUVVGblFqdEJRVU51UXl4WlFVRlpMRzFDUVVGUExFTkJRVU1zTkVSQlFXTTdRVUZEYkVNc1pVRkJaU3h0UWtGQlR5eERRVUZETEhkRVFVRlpPenRCUVVWdVF6dEJRVU5CTzBGQlEwRTdRVUZEUVN4WFFVRlhMRTlCUVU4N1FVRkRiRUlzV1VGQldTeE5RVUZOTzBGQlEyeENPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHM3UVVGRlFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTEdWQlFXVXNiVUpCUVU4c1EwRkJReXhyUlVGQmFVSTdRVUZEZUVNc2IwSkJRVzlDTEcxQ1FVRlBMRU5CUVVNc05FVkJRWE5DTzBGQlEyeEVMR2xDUVVGcFFpeHRRa0ZCVHl4RFFVRkRMSE5GUVVGdFFqczdRVUZGTlVNN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeGxRVUZsTEcxQ1FVRlBMRU5CUVVNc2IwVkJRV3RDT3p0QlFVVjZRenM3UVVGRlFUdEJRVU5CT3pzN096czdPenM3T3pzN08wRkRia1JoT3p0QlFVVmlPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEVzVjBGQlZ5eFJRVUZSTzBGQlEyNUNPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHM3UVVGRlFUczdPenM3T3pzN096czdPenRCUTJ4Q1lUczdRVUZGWWl4aFFVRmhMRzFDUVVGUExFTkJRVU1zTWtSQlFWVTdPMEZCUlM5Q08wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRXNWMEZCVnl4VFFVRlRPMEZCUTNCQ08wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEVzUjBGQlJ6czdRVUZGU0R0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJMRWRCUVVjN1FVRkRTRHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeEhRVUZITzBGQlEwZzdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUczdPenM3T3pzN096czdPenRCUTNoRVlUczdRVUZGWWp0QlFVTkJPMEZCUTBFN096czdPenM3T3pzN096czdRVU5LWVRzN1FVRkZZaXhsUVVGbExHMUNRVUZQTEVOQlFVTXNNa1JCUVdVN1FVRkRkRU1zV1VGQldTeHRRa0ZCVHl4RFFVRkRMSEZFUVVGWk8wRkJRMmhETEhsQ1FVRjVRaXh0UWtGQlR5eERRVUZETEdsR1FVRnpRanRCUVVOMlJDeHpRa0ZCYzBJc2JVSkJRVThzUTBGQlF5d3lSVUZCYlVJN08wRkJSV3BFTzBGQlEwRTdRVUZEUVR0QlFVTkJMRmRCUVZjc1QwRkJUenRCUVVOc1FqdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJMRmRCUVZjc1QwRkJUenRCUVVOc1FqdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxFdEJRVXM3UVVGRFREczdRVUZGUVN4clEwRkJhME1zWTBGQll6dEJRVU5vUkRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJMRWRCUVVjN08wRkJSVWc3UVVGRFFUdEJRVU5CTEVkQlFVYzdPMEZCUlVnN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeG5SRUZCWjBRN1FVRkRhRVE3UVVGRFFUdEJRVU5CTEV0QlFVczdRVUZEVER0QlFVTkJMRU5CUVVNN08wRkJSVVE3UVVGRFFUdEJRVU5CTzBGQlEwRXNaMFJCUVdkRU8wRkJRMmhFTzBGQlEwRTdRVUZEUVR0QlFVTkJMRXRCUVVzN1FVRkRURHRCUVVOQkxFTkJRVU03TzBGQlJVUTdPenM3T3pzN096czdPenM3UVVNNVJXRTdPMEZCUldJc1dVRkJXU3h0UWtGQlR5eERRVUZETEhGRVFVRlpPenRCUVVWb1F6dEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEVzVjBGQlZ5eFRRVUZUTzBGQlEzQkNMRmRCUVZjc1UwRkJVenRCUVVOd1FqdEJRVU5CTEZsQlFWa3NUMEZCVHp0QlFVTnVRanRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRXNSMEZCUnp0QlFVTklPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRXNWMEZCVnl4UFFVRlBPMEZCUTJ4Q08wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4WFFVRlhMRk5CUVZNN1FVRkRjRUk3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFc1IwRkJSenRCUVVOSU96dEJRVVZCT3pzN096czdPenM3T3pzN08wRkRia1JoT3p0QlFVVmlMRzFDUVVGdFFpeHRRa0ZCVHl4RFFVRkRMSEZGUVVGblFqczdRVUZGTTBNN1FVRkRRVHRCUVVOQk8wRkJRMEVzVjBGQlZ5eFBRVUZQTzBGQlEyeENMRmRCUVZjc1QwRkJUenRCUVVOc1FpeFhRVUZYTEU5QlFVODdRVUZEYkVJc1YwRkJWeXhQUVVGUE8wRkJRMnhDTEZkQlFWY3NUMEZCVHp0QlFVTnNRaXhoUVVGaExFMUJRVTA3UVVGRGJrSTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3T3pzN096czdPenM3T3p0QlEycENZVHM3UVVGRllpeFpRVUZaTEcxQ1FVRlBMRU5CUVVNc2NVUkJRVms3UVVGRGFFTXNiMEpCUVc5Q0xHMUNRVUZQTEVOQlFVTXNkVVZCUVdsQ08wRkJRemRETEdWQlFXVXNiVUpCUVU4c1EwRkJReXgxUlVGQmIwSTdRVUZETTBNc1pVRkJaU3h0UWtGQlR5eERRVUZETEhsRVFVRmhPMEZCUTNCRExHOUNRVUZ2UWl4dFFrRkJUeXhEUVVGRExIRkdRVUUwUWp0QlFVTjRSQ3hyUWtGQmEwSXNiVUpCUVU4c1EwRkJReXhwUmtGQk1FSTdPMEZCUlhCRU8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRXNWMEZCVnl4UFFVRlBPMEZCUTJ4Q0xHRkJRV0VzVVVGQlVUdEJRVU55UWp0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTEN0Q1FVRXJRanRCUVVNdlFpeDFRMEZCZFVNN1FVRkRka003UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdPMEZCUlVFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFTeEhRVUZITzBGQlEwZzdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFTeEhRVUZITzBGQlEwZzdPenM3T3pzN096czdPenM3UVVOeVJtRTdPMEZCUldJN1FVRkRRVHRCUVVOQk8wRkJRMEVzVjBGQlZ5eE5RVUZOTzBGQlEycENMRmRCUVZjc1QwRkJUenRCUVVOc1FpeFhRVUZYTEU5QlFVODdRVUZEYkVJc1YwRkJWeXhQUVVGUE8wRkJRMnhDTEZkQlFWY3NUMEZCVHp0QlFVTnNRaXhoUVVGaExFMUJRVTA3UVVGRGJrSTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPenM3T3pzN096czdPenM3UVVOd1FtRTdPMEZCUldJc2EwSkJRV3RDTEcxQ1FVRlBMRU5CUVVNc2JVVkJRV1U3TzBGQlJYcERPMEZCUTBFN1FVRkRRVHRCUVVOQkxGZEJRVmNzVTBGQlV6dEJRVU53UWl4WFFVRlhMRk5CUVZNN1FVRkRjRUlzVjBGQlZ5eFBRVUZQTzBGQlEyeENPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEVkQlFVYzdRVUZEU0R0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPenM3T3pzN096czdPenM3UVVONlFtRTdPMEZCUldJc1dVRkJXU3h0UWtGQlR5eERRVUZETEhGRVFVRlpPenRCUVVWb1F6dEJRVU5CTzBGQlEwRTdRVUZEUVN4WFFVRlhMR05CUVdNN1FVRkRla0lzVjBGQlZ5eE5RVUZOTzBGQlEycENMRmRCUVZjc1pVRkJaVHRCUVVNeFFpeGhRVUZoTEVWQlFVVTdRVUZEWmp0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEVzUjBGQlJ6czdRVUZGU0R0QlFVTkJPenM3T3pzN096czdPenM3TzBGRGJrSkJMQ3REUVVGaE96dEJRVVZpTEZsQlFWa3NiVUpCUVU4c1EwRkJReXhyUkVGQlV6dEJRVU0zUWl3d1FrRkJNRUlzYlVKQlFVOHNRMEZCUXl3NFJrRkJLMEk3TzBGQlJXcEZPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRXNZMEZCWXl4dFFrRkJUeXhEUVVGRExHZEZRVUZuUWp0QlFVTjBReXhIUVVGSE8wRkJRMGc3UVVGRFFTeGpRVUZqTEcxQ1FVRlBMRU5CUVVNc2FVVkJRV2xDTzBGQlEzWkRPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEhkRlFVRjNSVHRCUVVONFJUdEJRVU5CTzBGQlEwRTdRVUZEUVN4MVJFRkJkVVE3UVVGRGRrUTdRVUZEUVR0QlFVTkJPMEZCUTBFc1IwRkJSenM3UVVGRlNEdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFc1QwRkJUeXhaUVVGWk8wRkJRMjVDTzBGQlEwRTdRVUZEUVN4SFFVRkhPenRCUVVWSU8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHM3UVVGRlFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFTeERRVUZET3p0QlFVVkVPMEZCUTBFN1FVRkRRU3hEUVVGRE96dEJRVVZFT3pzN096czdPenM3T3pzN096dEJReTlHWVRzN1FVRkZZanRCUVVOQk8wRkJRMEU3UVVGRFFTeHRRa0ZCYlVJc2FVSkJRV2xDTzBGQlEzQkRPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3T3pzN096czdPenM3T3pzN1FVTldZVHM3UVVGRllqczdRVUZGUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCT3pzN096czdPenM3T3pzN08wRkRia05oT3p0QlFVVmlMRmxCUVZrc2JVSkJRVThzUTBGQlF5eHhSRUZCV1RzN1FVRkZhRU03UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFc1YwRkJWeXhQUVVGUE8wRkJRMnhDTEZkQlFWY3NUMEZCVHp0QlFVTnNRaXhoUVVGaExFOUJRVTg3UVVGRGNFSTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJMRWRCUVVjN1FVRkRTRHRCUVVOQkxFZEJRVWM3UVVGRFNEczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRXNUMEZCVHp0QlFVTlFPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRXNVMEZCVXp0QlFVTlVPMEZCUTBFN1FVRkRRVHRCUVVOQkxFOUJRVTg3UVVGRFVDeExRVUZMT3p0QlFVVk1PMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN096czdPenM3T3pzN096czdRVU5xUldFN08wRkJSV0k3UVVGRFFUdEJRVU5CTzBGQlEwRXNWMEZCVnl4UFFVRlBPMEZCUTJ4Q0xGZEJRVmNzVDBGQlR6dEJRVU5zUWl4aFFVRmhMRTlCUVU4N1FVRkRjRUk3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPenM3T3pzN096czdPenM3TzBGRFltRTdPMEZCUldJc1dVRkJXU3h0UWtGQlR5eERRVUZETEhGRVFVRlpPenRCUVVWb1F6dEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFc2QwTkJRWGRETzBGQlEzaERMRTlCUVU4N08wRkJSVkE3UVVGRFFTd3dSRUZCTUVRc2QwSkJRWGRDTzBGQlEyeEdPMEZCUTBFc1QwRkJUenM3UVVGRlVEdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJMRWRCUVVjN08wRkJSVWc3UVVGRFFUdEJRVU5CTzBGQlEwRXNaME5CUVdkRE8wRkJRMmhETERaQ1FVRTJRaXhoUVVGaExFVkJRVVU3UVVGRE5VTTdRVUZEUVR0QlFVTkJMRWRCUVVjN1FVRkRTRHM3T3pzN096czdPenM3T3p0QlEzQkVZVHM3UVVGRllqdEJRVU5CTzBGQlEwRTdRVUZEUVN4WFFVRlhMRTlCUVU4N1FVRkRiRUlzWVVGQllTeFJRVUZSTzBGQlEzSkNPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3pzN096czdPenM3T3pzN08wRkRZbUU3TzBGQlJXSXNXVUZCV1N4dFFrRkJUeXhEUVVGRExIRkVRVUZaT3p0QlFVVm9RenRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4alFVRmpMRTlCUVU4N1FVRkRja0lzWjBKQlFXZENPMEZCUTJoQ08wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEVzWTBGQll5eFBRVUZQTzBGQlEzSkNMR2RDUVVGblFpeFJRVUZSTzBGQlEzaENPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEVkQlFVYzdPMEZCUlVnN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEVkQlFVYzdRVUZEU0RzN096czdPenM3T3pzN096dEJRMjVGWVRzN1FVRkZZaXhaUVVGWkxHMUNRVUZQTEVOQlFVTXNiVVJCUVZVN08wRkJSVGxDTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxFZEJRVWM3UVVGRFNEczdPenM3T3pzN096czdPenRCUTFoaE96dEJRVVZpTEZsQlFWa3NiVUpCUVU4c1EwRkJReXh4UkVGQldUczdRVUZGYUVNN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxGZEJRVmNzVDBGQlR6dEJRVU5zUWl4aFFVRmhMRTlCUVU4N1FVRkRjRUk3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQkxHbENRVUZwUWl4bFFVRmxPenRCUVVWb1F6dEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4UFFVRlBPMEZCUTFBN1FVRkRRVHRCUVVOQk8wRkJRMEVzUjBGQlJ6czdRVUZGU0R0QlFVTkJPenM3T3pzN096czdPenM3TzBGRGNFUmhPenRCUVVWaU8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVN3clFrRkJLMEk3UVVGREwwSTdRVUZEUVR0QlFVTkJMRmRCUVZjc1UwRkJVenRCUVVOd1FpeGhRVUZoTzBGQlEySTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96czdPenM3T3pzN096czdPMEZETVVKaE96dEJRVVZpTEZkQlFWY3NiVUpCUVU4c1EwRkJReXhuUlVGQlowSTdRVUZEYmtNc1pVRkJaU3h0UWtGQlR5eERRVUZETEc5RVFVRlhPenRCUVVWc1F6czdRVUZGUVRzN1FVRkZRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4WFFVRlhMRTlCUVU4N1FVRkRiRUlzWVVGQllTeFJRVUZSTzBGQlEzSkNPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJMRmRCUVZjc1QwRkJUenRCUVVOc1FpeGhRVUZoTEZGQlFWRTdRVUZEY2tJN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFc1YwRkJWeXhQUVVGUE8wRkJRMnhDTEdGQlFXRXNVVUZCVVR0QlFVTnlRanRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3hYUVVGWExFOUJRVTg3UVVGRGJFSXNZVUZCWVN4UlFVRlJPMEZCUTNKQ08wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4SFFVRkhPMEZCUTBnN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFc1YwRkJWeXhQUVVGUE8wRkJRMnhDTEdGQlFXRXNVVUZCVVR0QlFVTnlRanRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3hYUVVGWExFOUJRVTg3UVVGRGJFSXNZVUZCWVN4UlFVRlJPMEZCUTNKQ08wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxGZEJRVmNzVDBGQlR6dEJRVU5zUWl4aFFVRmhMRkZCUVZFN1FVRkRja0k3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEVzVjBGQlZ5eFBRVUZQTzBGQlEyeENMR0ZCUVdFc1VVRkJVVHRCUVVOeVFqdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeFhRVUZYTEU5QlFVODdRVUZEYkVJc1lVRkJZU3hSUVVGUk8wRkJRM0pDTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEZkQlFWY3NUMEZCVHp0QlFVTnNRaXhoUVVGaExGRkJRVkU3UVVGRGNrSTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRXNWMEZCVnl4UFFVRlBPMEZCUTJ4Q0xHRkJRV0VzVVVGQlVUdEJRVU55UWp0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4WFFVRlhMRTlCUVU4N1FVRkRiRUlzWVVGQllTeFJRVUZSTzBGQlEzSkNPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJMRmRCUVZjc1QwRkJUenRCUVVOc1FpeGhRVUZoTEZGQlFWRTdRVUZEY2tJN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFc1YwRkJWeXhQUVVGUE8wRkJRMnhDTEdGQlFXRXNVVUZCVVR0QlFVTnlRanRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3hYUVVGWExFOUJRVTg3UVVGRGJFSXNZVUZCWVN4UFFVRlBPMEZCUTNCQ08wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEZkQlFWY3NZVUZCWVR0QlFVTjRRaXhYUVVGWExGTkJRVk03UVVGRGNFSTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTEcxRFFVRnRReXhQUVVGUE8wRkJRekZETzBGQlEwRTdRVUZEUVN4SFFVRkhPMEZCUTBnN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxIVkNRVUYxUWl4VFFVRlRMRWRCUVVjc1UwRkJVenRCUVVNMVF5d3lRa0ZCTWtJN1FVRkRNMEk3UVVGRFFUdEJRVU5CTEZkQlFWY3NUMEZCVHp0QlFVTnNRaXhoUVVGaExFOUJRVTg3UVVGRGNFSTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEVzUzBGQlN6dEJRVU5NTzBGQlEwRTdRVUZEUVRzN1FVRkZRU3gxUTBGQmRVTXNUMEZCVHp0QlFVTTVRenRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3hYUVVGWExFOUJRVTg3UVVGRGJFSXNWMEZCVnl4UFFVRlBPMEZCUTJ4Q0xGZEJRVmNzVDBGQlR6dEJRVU5zUWl4WlFVRlpMRTlCUVU4N1FVRkRia0k3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJMRXRCUVVzN1FVRkRURHRCUVVOQk8wRkJRMEVzUjBGQlJ6dEJRVU5JTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3T3pzN096czdPenM3T3p0QlF6bFRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPenM3T3pzN096czdPenRCUTNCQ1FUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3hUUVVGVE8wRkJRMVE3UVVGRFFUdEJRVU5CTEV0QlFVczdRVUZEVER0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEVzVTBGQlV6dEJRVU5VTzBGQlEwRTdRVUZEUVN4TFFVRkxPMEZCUTB3N1FVRkRRVHRCUVVOQkxFTkJRVU03UVVGRFJEdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJMRXRCUVVzN1FVRkRURHRCUVVOQk8wRkJRMEU3UVVGRFFTeFRRVUZUTzBGQlExUTdRVUZEUVR0QlFVTkJPMEZCUTBFN096dEJRVWRCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3hMUVVGTE8wRkJRMHc3UVVGRFFUdEJRVU5CTzBGQlEwRXNVMEZCVXp0QlFVTlVPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3T3pzN1FVRkpRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRXNTMEZCU3p0QlFVTk1PMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFc2RVSkJRWFZDTEhOQ1FVRnpRanRCUVVNM1F6dEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJMSEZDUVVGeFFqdEJRVU55UWpzN1FVRkZRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRXNjVU5CUVhGRE96dEJRVVZ5UXp0QlFVTkJPMEZCUTBFN08wRkJSVUVzTWtKQlFUSkNPMEZCUXpOQ08wRkJRMEU3UVVGRFFUdEJRVU5CTERSQ1FVRTBRaXhWUVVGVk96czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3TzBGRGRreDBRenRCUVVWUExFbEJRVTFCTEU5QlFXSTdRVUZCUVR0QlFVRkJPMEZCUVVFN08wRkJRMGtzYlVKQlFWbERMRWxCUVZvc1JVRkJhMEpETEUxQlFXeENMRVZCUVRCQ08wRkJRVUU3TzBGQlFVRTdPMEZCUTNSQ08wRkJSVUVzVlVGQlMwUXNTVUZCVEN4SFFVRlpRU3hKUVVGYU8wRkJRMEVzVlVGQlMwTXNUVUZCVEN4SFFVRmpRU3hOUVVGa096dEJRVVZCTEZGQlFVa3NUVUZCUzBFc1RVRkJUQ3hEUVVGWlF5eE5RVUZhTEVOQlFXMUNReXhMUVVGdVFpeEpRVUUwUWl4RFFVRm9ReXhGUVVGdFF6dEJRVU12UWl4WlFVRkxReXhUUVVGTU8wRkJRMGc3TzBGQlVuRkNPMEZCVTNwQ096dEJRVlpNTzBGQlFVRTdRVUZCUVN4blEwRlpaMEk3UVVGRFVpeFhRVUZMU0N4TlFVRk1MRU5CUVZsSkxFbEJRVm9zUTBGQmFVSTdRVUZEWWtNc1lVRkJTeXhGUVVGRkxGZEJSRTA3UVVGRllrTXNXVUZCU1N4RlFVRkZPMEZCUTBaRExHbENRVUZQTEVWQlFVVXNTMEZCUzFJN1FVRkVXanRCUVVaUExFOUJRV3BDTzBGQlRVZzdRVUZ1UWt3N1FVRkJRVHRCUVVGQkxHdERRWEZDYTBJN1FVRkRWaXhYUVVGTFF5eE5RVUZNTEVOQlFWbEpMRWxCUVZvc1EwRkJhVUk3UVVGRFlrTXNZVUZCU3l4RlFVRkZMR0ZCUkUwN1FVRkZZa01zV1VGQlNTeEZRVUZGTzBGQlEwWkRMR2xDUVVGUExFVkJRVVVzUzBGQlMxSTdRVUZFV2p0QlFVWlBMRTlCUVdwQ08wRkJUVWc3UVVFMVFrdzdPMEZCUVVFN1FVRkJRU3hGUVVFMlFsTXNOa1JCUVRkQ0xFVTdPenM3T3pzN096czdPenM3T3pzN096czdPenM3TzBGRFJrRTdRVUZEUVR0QlFVTkJPMEZCUlU4c1NVRkJUVU1zVVVGQllqdEJRVUZCTzBGQlFVRTdRVUZEU1N4elFrRkJZenRCUVVGQk96dEJRVU5XTEZOQlFVdERMRkZCUVV3c1IwRkJaMElzUlVGQmFFSTdRVUZEU0RzN1FVRklURHRCUVVGQk8wRkJRVUVzZDBKQlMxRllMRWxCVEZJc1JVRkxZME1zVFVGTVpDeEZRVXR6UWp0QlFVTmtMRlZCUVVrc1EwRkJReXhMUVVGTFZTeFJRVUZNTEVOQlFXTllMRWxCUVdRc1EwRkJUQ3hGUVVFd1FqdEJRVU4wUWl4aFFVRkxWeXhSUVVGTUxFTkJRV05ZTEVsQlFXUXNTVUZCYzBKWkxHRkJRV0VzUTBGQlExb3NTVUZCUkN4RlFVRlBReXhOUVVGUUxFTkJRVzVETzBGQlEwZzdPMEZCUTBRc1lVRkJUeXhMUVVGTFZTeFJRVUZNTEVOQlFXTllMRWxCUVdRc1EwRkJVRHRCUVVOSU8wRkJWa3c3UVVGQlFUdEJRVUZCTERCQ1FWbFZPMEZCUTBZc1lVRkJUMkVzVFVGQlRTeERRVUZEUXl4SlFVRlFMRU5CUVZrc1MwRkJTMGdzVVVGQmFrSXNRMEZCVUR0QlFVTklPMEZCWkV3N1FVRkJRVHRCUVVGQkxIbENRV2RDVTFnc1NVRm9RbFFzUlVGblFtVTdRVUZEVUN4aFFVRlBMRXRCUVV0WExGRkJRVXdzUTBGQlkxZ3NTVUZCWkN4RFFVRlFPMEZCUTBnN1FVRnNRa3c3UVVGQlFUdEJRVUZCTERKQ1FXOUNWMEVzU1VGd1FsZ3NSVUZ2UW1sQ08wRkJRMVFzVlVGQlNWRXNUMEZCVHl4SFFVRkhMRXRCUVV0SExGRkJRVXdzUTBGQlkxZ3NTVUZCWkN4RFFVRmtPMEZCUTBFc1lVRkJUeXhMUVVGTFZ5eFJRVUZNTEVOQlFXTllMRWxCUVdRc1EwRkJVRHRCUVVOQkxHRkJRVTlSTEU5QlFWQTdRVUZEU0R0QlFYaENURHRCUVVGQk8wRkJRVUVzWjBOQk1FSm5RanRCUVVOU0xGZEJRVXNzU1VGQlNVOHNRMEZCVkN4SlFVRmpMRXRCUVV0S0xGRkJRVzVDTEVWQlFUWkNPMEZCUTNwQ0xHRkJRVXRCTEZGQlFVd3NRMEZCWTBrc1EwRkJaQ3hGUVVGcFFsZ3NVMEZCYWtJN1FVRkRTRHRCUVVWS08wRkJMMEpNT3p0QlFVRkJPMEZCUVVFN08wRkJhME5CTEZOQlFWTlJMR0ZCUVZRc1EwRkJkVUphTEVsQlFYWkNMRVZCUVRaQ1F5eE5RVUUzUWl4RlFVRnhRenRCUVVOcVF5eE5RVUZKUkN4SlFVRkpMRU5CUVVOblFpeFBRVUZNTEVOQlFXRXNWVUZCWWl4TlFVRTJRaXhEUVVGcVF5eEZRVUZ2UXp0QlFVTm9ReXhYUVVGUExFbEJRVWxETEN0RVFVRktMRU5CUVcxQ2FrSXNTVUZCYmtJc1JVRkJlVUpETEUxQlFYcENMRU5CUVZBN1FVRkRTQ3hIUVVaRUxFMUJSVThzU1VGQlNVUXNTVUZCU1N4RFFVRkRaMElzVDBGQlRDeERRVUZoTEZkQlFXSXNUVUZCT0VJc1EwRkJiRU1zUlVGQmNVTTdRVUZEZUVNc1YwRkJUeXhKUVVGSlJTeHBSVUZCU2l4RFFVRnZRbXhDTEVsQlFYQkNMRVZCUVRCQ1F5eE5RVUV4UWl4RFFVRlFPMEZCUTBnc1IwRkdUU3hOUVVWQk8wRkJRMGdzVjBGQlR5eEpRVUZKUml4blJFRkJTaXhEUVVGWlF5eEpRVUZhTEVWQlFXdENReXhOUVVGc1FpeERRVUZRTzBGQlEwZzdRVUZEU2l4RE96czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3UVVNNVEwUTdRVUZGVHl4SlFVRk5hVUlzWlVGQllqdEJRVUZCTzBGQlFVRTdRVUZCUVRzN1FVRkRTU3d5UWtGQldXeENMRWxCUVZvc1JVRkJhMEpETEUxQlFXeENMRVZCUVRCQ08wRkJRVUU3TzBGQlFVRTdPMEZCUTNSQ08wRkJSVUVzVlVGQlMwUXNTVUZCVEN4SFFVRlpRU3hKUVVGYU8wRkJRMEVzVlVGQlMwTXNUVUZCVEN4SFFVRmpRU3hOUVVGa08wRkJRMEVzVlVGQlMydENMRWxCUVV3c1IwRkJXU3hKUVVGYU96dEJRVVZCTEZGQlFVa3NUVUZCUzJ4Q0xFMUJRVXdzUTBGQldVTXNUVUZCV2l4RFFVRnRRa01zUzBGQmJrSXNTVUZCTkVJc1EwRkJhRU1zUlVGQmJVTTdRVUZETDBJc1dVRkJTME1zVTBGQlREdEJRVU5JT3p0QlFWUnhRanRCUVZWNlFqczdRVUZZVER0QlFVRkJPMEZCUVVFc1owTkJZV2RDTzBGQlFVRTdPMEZCUTFJc1YwRkJTMGdzVFVGQlRDeERRVUZaYTBJc1NVRkJXaXhEUVVGcFFpeExRVUZMYmtJc1NVRkJkRUlzUlVGQk5FSXNWVUZCUTI5Q0xFTkJRVVFzUlVGQlR6dEJRVU12UWl4alFVRkpMRU5CUVVORUxFbEJRVXdzUjBGQldVTXNRMEZCUXl4RFFVRkRZaXhKUVVGR0xFTkJRVTlaTEVsQlFXNUNPenRCUVVWQkxHTkJRVWtzUTBGQlEyeENMRTFCUVV3c1EwRkJXVWtzU1VGQldpeERRVUZwUWp0QlFVTmlReXhsUVVGTExFVkJRVVVzVjBGRVRUdEJRVVZpUXl4alFVRkpMRVZCUVVVN1FVRkRSa01zYlVKQlFVOHNSVUZCUlN4TlFVRkpMRU5CUVVOU0xFbEJSRm83UVVGRlJtMUNMR2RDUVVGSkxFVkJRVVVzVFVGQlNTeERRVUZEUVN4SlFVWlVPMEZCUjBaRkxIZENRVUZaTEVWQlFVVkVMRU5CUVVNc1EwRkJRMklzU1VGQlJpeERRVUZQWXp0QlFVaHVRanRCUVVaUExGTkJRV3BDTzBGQlVVZ3NUMEZZUkR0QlFWbElPMEZCTVVKTU8wRkJRVUU3UVVGQlFTeHJRMEUwUW10Q08wRkJRMVlzVjBGQlMzQkNMRTFCUVV3c1EwRkJXVWtzU1VGQldpeERRVUZwUWp0QlFVTmlReXhoUVVGTExFVkJRVVVzWVVGRVRUdEJRVVZpUXl4WlFVRkpMRVZCUVVVN1FVRkRSa01zYVVKQlFVOHNSVUZCUlN4TFFVRkxVanRCUVVSYU8wRkJSazhzVDBGQmFrSTdRVUZOU0R0QlFXNURURHM3UVVGQlFUdEJRVUZCTEVWQlFYRkRVeXcyUkVGQmNrTXNSVHM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN08wRkRSa0U3UVVGRlR5eEpRVUZOVVN4alFVRmlPMEZCUVVFN1FVRkJRVHRCUVVGQk96dEJRVU5KTERCQ1FVRlpha0lzU1VGQldpeEZRVUZyUWtNc1RVRkJiRUlzUlVGQk1FSTdRVUZCUVRzN1FVRkJRVHM3UVVGRGRFSTdRVUZGUVN4VlFVRkxSQ3hKUVVGTUxFZEJRVmxCTEVsQlFWbzdRVUZEUVN4VlFVRkxReXhOUVVGTUxFZEJRV05CTEUxQlFXUTdRVUZEUVN4VlFVRkxhMElzU1VGQlRDeEhRVUZaTEVsQlFWbzdPMEZCUlVFc1VVRkJTU3hOUVVGTGJFSXNUVUZCVEN4RFFVRlpReXhOUVVGYUxFTkJRVzFDUXl4TFFVRnVRaXhKUVVFMFFpeERRVUZvUXl4RlFVRnRRenRCUVVNdlFpeFpRVUZMUXl4VFFVRk1PMEZCUTBnN08wRkJWSEZDTzBGQlZYcENPenRCUVZoTU8wRkJRVUU3UVVGQlFTeG5RMEZoWjBJN1FVRkJRVHM3UVVGRFVpeFhRVUZMU0N4TlFVRk1MRU5CUVZsclFpeEpRVUZhTEVOQlFXbENMRXRCUVV0dVFpeEpRVUYwUWl4RlFVRTBRaXhWUVVGRGIwSXNRMEZCUkN4RlFVRlBPMEZCUXk5Q0xHTkJRVWtzUTBGQlEwUXNTVUZCVEN4SFFVRlpReXhEUVVGRExFTkJRVU5pTEVsQlFVWXNRMEZCVDFrc1NVRkJia0k3TzBGQlJVRXNZMEZCU1N4RFFVRkRiRUlzVFVGQlRDeERRVUZaU1N4SlFVRmFMRU5CUVdsQ08wRkJRMkpETEdWQlFVc3NSVUZCUlN4WFFVUk5PMEZCUldKRExHTkJRVWtzUlVGQlJUdEJRVU5HUXl4dFFrRkJUeXhGUVVGRkxFMUJRVWtzUTBGQlExSXNTVUZFV2p0QlFVVkdiVUlzWjBKQlFVa3NSVUZCUlN4TlFVRkpMRU5CUVVOQk8wRkJSbFE3UVVGR1R5eFRRVUZxUWp0QlFVOUlMRTlCVmtRN1FVRlhTRHRCUVhwQ1REdEJRVUZCTzBGQlFVRXNhME5CTWtKclFqdEJRVU5XTEZkQlFVdHNRaXhOUVVGTUxFTkJRVmxKTEVsQlFWb3NRMEZCYVVJN1FVRkRZa01zWVVGQlN5eEZRVUZGTEdGQlJFMDdRVUZGWWtNc1dVRkJTU3hGUVVGRk8wRkJRMFpETEdsQ1FVRlBMRVZCUVVVc1MwRkJTMUk3UVVGRVdqdEJRVVpQTEU5QlFXcENPMEZCVFVnN1FVRnNRMHc3TzBGQlFVRTdRVUZCUVN4RlFVRnZRMU1zTmtSQlFYQkRMRVU3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096dEJRMFpCTzBGQlJVOHNTVUZCVFdFc1RVRkJZanRCUVVGQk8wRkJRVUU3UVVGQlFUczdRVUZEU1N4clFrRkJXWEpDTEUxQlFWb3NSVUZCYjBKelFpeEpRVUZ3UWl4RlFVRXdRanRCUVVGQk96dEJRVUZCT3p0QlFVTjBRanRCUVVWQkxGVkJRVXQwUWl4TlFVRk1MRWRCUVdOQkxFMUJRV1E3UVVGRFFTeFZRVUZMUXl4TlFVRk1MRWRCUVdNc1NVRkJTWE5DTEZOQlFVb3NRMEZCWTBRc1NVRkJTU3hIUVVGSExFZEJRVkFzUjBGQllTeE5RVUZMZEVJc1RVRkJUQ3hEUVVGWmQwSXNSMEZCZGtNc1EwRkJaRHM3UVVGRlFTeFZRVUZMUXl4aFFVRk1PenRCUVU1elFqdEJRVTk2UWpzN1FVRlNURHRCUVVGQk8wRkJRVUVzYjBOQlZXOUNPMEZCUVVFN08wRkJRMW9zVjBGQlMzaENMRTFCUVV3c1EwRkJXWGxDTEUxQlFWb3NSMEZCY1VJc1dVRkJUVHRCUVVOMlFpeGpRVUZKTEVOQlFVTkRMRTFCUVV3N1FVRkRTQ3hQUVVaRU96dEJRVWRCTEZkQlFVc3hRaXhOUVVGTUxFTkJRVmt5UWl4UFFVRmFMRWRCUVhOQ0xGVkJRVU5ETEV0QlFVUXNSVUZCVnp0QlFVTTNRaXhqUVVGSkxFTkJRVU5ETEU5QlFVd3NRMEZCWVVRc1MwRkJZanRCUVVOSUxFOUJSa1E3TzBGQlIwRXNWMEZCU3pWQ0xFMUJRVXdzUTBGQldUaENMRTlCUVZvc1IwRkJjMElzVlVGQlEwTXNWVUZCUkN4RlFVRm5RanRCUVVOc1F5eGpRVUZKTEVOQlFVTkRMRTlCUVV3c1EwRkJZVVFzVlVGQllqdEJRVU5JTEU5QlJrUTdPMEZCUjBFc1YwRkJTeTlDTEUxQlFVd3NRMEZCV1dsRExGTkJRVm9zUjBGQmQwSXNWVUZCUTBNc1QwRkJSQ3hGUVVGaE8wRkJRMnBETEdOQlFVa3NRMEZCUTBNc1UwRkJUQ3hEUVVGbFJDeFBRVUZtTzBGQlEwZ3NUMEZHUkR0QlFVZElPMEZCZGtKTU8wRkJRVUU3UVVGQlFTdzJRa0Y1UW1FN1FVRkJRVHM3UVVGRFREdEJRVU5CTEZkQlFVdHFReXhMUVVGTUxFZEJRV0VzUTBGQllqdEJRVVZCTEZkQlFVdHRReXhKUVVGTUxFTkJRVlVzVjBGQlZpeEZRVUYxUWl4VlFVRkRiRUlzUTBGQlJDeEZRVUZQTzBGQlF6RkNMR05CUVVrc1EwRkJRMnhDTEUxQlFVd3NRMEZCV1hGRExGTkJRVm9zUjBGQmQwSnVRaXhEUVVGRExFTkJRVU50UWl4VFFVRXhRanRCUVVOQkxHTkJRVWtzUTBGQlEzQkRMRXRCUVV3c1IwRkJZU3hEUVVGaUxFTkJSakJDTEVOQlNURkNPenRCUVVOQkxHTkJRVWtzUTBGQlEwWXNUVUZCVEN4RFFVRlpWU3hSUVVGYUxFTkJRWEZDVUN4VFFVRnlRanRCUVVOSUxFOUJUa1E3UVVGUlFTeFhRVUZMYTBNc1NVRkJUQ3hEUVVGVkxHMUNRVUZXTEVWQlFTdENMRlZCUVVOc1FpeERRVUZFTEVWQlFVODdRVUZEYkVNc1kwRkJTU3hEUVVGRGFrSXNTMEZCVEN4SFFVRmhMRU5CUVVNc1EwRkJaRHRCUVVOQmNVTXNaVUZCVHl4RFFVRkRWaXhMUVVGU0xFTkJRV05XTEVOQlFVTXNRMEZCUTFVc1MwRkJhRUk3UVVGRFNDeFBRVWhFTzBGQlMwRTdPenRCUVVkSU8wRkJOME5NTzBGQlFVRTdRVUZCUVN3MFFrRXJRMWxCTEV0QkwwTmFMRVZCSzBOdFFqdEJRVU5ZVlN4aFFVRlBMRU5CUVVOV0xFdEJRVklzUTBGQlkwRXNTMEZCWkR0QlFVTklPMEZCYWtSTU8wRkJRVUU3UVVGQlFTdzBRa0Z0UkZsSExGVkJia1JhTEVWQmJVUjNRanRCUVVOb1FpeFZRVUZKTEV0QlFVc3ZRaXhOUVVGTUxFTkJRVmwxUXl4VlFVRmFMRWxCUVRCQ2FrSXNVMEZCVXl4RFFVRkRhMElzVFVGQmVFTXNSVUZCWjBRN1FVRkROVU1zV1VGQlNWUXNWVUZCVlN4RFFVRkRWU3hKUVVGWUxFbEJRVzFDTEU5QlFYWkNMRVZCUVdkRE8wRkJRelZDU0N4cFFrRkJUeXhEUVVGRFZpeExRVUZTTEVOQlFXTXNaVUZCWkR0QlFVTklMRk5CUmtRc1RVRkZUeXhKUVVGSlJ5eFZRVUZWTEVOQlFVTlZMRWxCUVZnc1NVRkJiVUlzVTBGQmRrSXNSVUZCYTBNN1FVRkRja05JTEdsQ1FVRlBMRU5CUVVOV0xFdEJRVklzUTBGQlkwY3NWVUZCVlN4RFFVRkRNVUlzU1VGQmVrSTdRVUZEU0N4VFFVWk5MRTFCUlVFN1FVRkRTR2xETEdsQ1FVRlBMRU5CUVVOV0xFdEJRVklzUTBGQll5eFBRVUZrTzBGQlEwZzdRVUZEU2p0QlFVTktPMEZCTjBSTU8wRkJRVUU3UVVGQlFTdzRRa0VyUkdOTkxFOUJMMFJrTEVWQkswUjFRanRCUVVObUxGVkJRVWxSTEV0QlFVc3NSMEZCUjBNc1NVRkJTU3hEUVVGRFF5eExRVUZNTEVOQlFWZFdMRTlCUVU4c1EwRkJRemRDTEVsQlFXNUNMRU5CUVZvN1FVRkRRU3hWUVVGSlJDeExRVUZMTEVkQlFVZHpReXhMUVVGTExFTkJRVU4wUXl4TFFVRnNRanRCUVVOQkxGVkJRVWxETEVsQlFVa3NSMEZCUjNGRExFdEJRVXNzUTBGQlEzSkRMRWxCUVdwQ096dEJRVVZCTEZWQlFVbHhReXhMUVVGTExFTkJRVU53UXl4UFFVRk9MRXRCUVd0Q2RVTXNVMEZCZEVJc1JVRkJhVU03UVVGRE4wSXNZVUZCU3psRExFMUJRVXdzUTBGQldWVXNVVUZCV2l4RFFVRnhRbkZETEVsQlFYSkNMRU5CUVRCQ1NpeExRVUZMTEVOQlFVTndReXhQUVVGb1F5eEZRVUY1UTNsRExFbEJRWHBETEVOQlFUaERNME1zUzBGQk9VTXNSVUZCY1VSRExFbEJRWEpFTzBGQlEwZ3NUMEZHUkN4TlFVVlBPMEZCUTBnc1lVRkJTekJETEVsQlFVd3NRMEZCVlRORExFdEJRVllzUlVGQmFVSkRMRWxCUVdwQ08wRkJRMGc3UVVGRlNqdEJRVEZGVER0QlFVRkJPMEZCUVVFc2VVSkJORVZUTWtNc1NVRTFSVlFzUlVFMFJXVTdRVUZEVUN4VlFVRkpMRXRCUVVzdlF5eExRVUZNTEV0QlFXVXNRMEZCUXl4RFFVRndRaXhGUVVGMVFqdEJRVU51UWl4aFFVRkxSQ3hOUVVGTUxFTkJRVmxITEVsQlFWb3NRMEZCYVVKM1F5eEpRVUZKTEVOQlFVTk5MRk5CUVV3c1EwRkJaVVFzU1VGQlppeERRVUZxUWp0QlFVTklPMEZCUTBvN1FVRm9Sa3c3TzBGQlFVRTdRVUZCUVN4RlFVRTBRbnBETERaRVFVRTFRaXhGT3pzN096czdPenM3T3pzN096czdPenM3T3p0QlEwWlBMRWxCUVUweVF5eG5Ra0ZCWWp0QlFVRkJPMEZCUVVFN1FVRkRTU3c0UWtGQll6dEJRVUZCT3p0QlFVTldMRk5CUVV0RExGVkJRVXdzUjBGQmEwSXNSVUZCYkVJN1FVRkRTRHM3UVVGSVREdEJRVUZCTzBGQlFVRXNkMEpCUzFGeVJDeEpRVXhTTEVWQlMyTTdRVUZEVGl4aFFVRlBMRXRCUVV0eFJDeFZRVUZNTEVOQlFXZENReXhOUVVGTkxFTkJRVU4wUkN4SlFVRkVMRU5CUVhSQ0xFTkJRVkE3UVVGRFNEdEJRVkJNTzBGQlFVRTdRVUZCUVN4M1FrRlRVVUVzU1VGVVVpeEZRVk5qZFVRc1VVRlVaQ3hGUVZOM1FrTXNUMEZVZUVJc1JVRlRhVU03UVVGRGVrSXNWVUZCU1VNc2FVSkJRV2xDTEVkQlFVZElMRTFCUVUwc1EwRkJRM1JFTEVsQlFVUXNRMEZCT1VJN1FVRkRRU3hYUVVGTGNVUXNWVUZCVEN4RFFVRm5Ra2tzYVVKQlFXaENMRWxCUVhGRExFdEJRVXRLTEZWQlFVd3NRMEZCWjBKSkxHbENRVUZvUWl4TFFVRnpReXhGUVVFelJUczdRVUZEUVN4WFFVRkxTaXhWUVVGTUxFTkJRV2RDU1N4cFFrRkJhRUlzUlVGQmJVTkRMRWxCUVc1RExFTkJRWGRETzBGQlEzQkRReXhWUVVGRkxFVkJRVVZLTEZGQlJHZERPMEZCUlhCRFF5eGxRVUZQTEVWQlFVVkJPMEZCUmpKQ0xFOUJRWGhETzBGQlNVZzdRVUZvUWt3N1FVRkJRVHRCUVVGQkxESkNRV3RDVjNoRUxFbEJiRUpZTEVWQmEwSnBRblZFTEZGQmJFSnFRaXhGUVd0Q01rSkRMRTlCYkVJelFpeEZRV3RDYjBNN1FVRkROVUlzVlVGQlNTeERRVUZEZUVRc1NVRkJSQ3hKUVVGVExFTkJRVU4xUkN4UlFVRldMRWxCUVhOQ0xFTkJRVU5ETEU5QlFUTkNMRVZCUVc5RE8wRkJRMmhETEdGQlFVdElMRlZCUVV3c1IwRkJhMElzUlVGQmJFSTdRVUZEUVR0QlFVTklPenRCUVVWRUxGVkJRVWxQTEV0QlFVc3NSMEZCUnpWRUxFbEJRVWtzUjBGQlJ5eERRVUZEYzBRc1RVRkJUU3hEUVVGRGRFUXNTVUZCUkN4RFFVRlFMRU5CUVVnc1IwRkJiMEpoTEUxQlFVMHNRMEZCUTBNc1NVRkJVQ3hEUVVGWkxFdEJRVXQxUXl4VlFVRnFRaXhEUVVGd1F6czdRVUZGUVN4VlFVRkpSU3hSUVVGUkxFbEJRVWxETEU5QlFXaENMRVZCUVhsQ08wRkJRM0pDTEdGQlFVdExMR05CUVV3c1EwRkJiMEpFTEV0QlFYQkNMRVZCUVRKQ1RDeFJRVUV6UWl4RlFVRnhRME1zVDBGQmNrTTdRVUZEU0N4UFFVWkVMRTFCUlU4N1FVRkRTQ3hoUVVGTFRTeHJRa0ZCVEN4RFFVRjNRa1lzUzBGQmVFSTdRVUZEU0R0QlFVTktPMEZCTDBKTU8wRkJRVUU3UVVGQlFTeHRRMEZwUTIxQ1FTeExRV3BEYmtJc1JVRnBRekJDVEN4UlFXcERNVUlzUlVGcFEyOURReXhQUVdwRGNFTXNSVUZwUXpaRE8wRkJRM0pETEZkQlFVc3NTVUZCU1hoRUxFbEJRVlFzU1VGQmFVSTBSQ3hMUVVGcVFpeEZRVUYzUWp0QlFVTndRaXhoUVVGTExFbEJRVWx1UXl4SFFVRlVMRWxCUVdkQ0xFdEJRVXMwUWl4VlFVRk1MRU5CUVdkQ2NrUXNTVUZCYUVJc1EwRkJhRUlzUlVGQmRVTTdRVUZEYmtNc1kwRkJTU3hMUVVGTGNVUXNWVUZCVEN4RFFVRm5RbkpFTEVsQlFXaENMRVZCUVhOQ2VVSXNSMEZCZEVJc1JVRkJNa0pyUXl4RlFVRXpRaXhKUVVGcFEwb3NVVUZCYWtNc1NVRkJOa01zUzBGQlMwWXNWVUZCVEN4RFFVRm5RbkpFTEVsQlFXaENMRVZCUVhOQ2VVSXNSMEZCZEVJc1JVRkJNa0lyUWl4UFFVRXpRaXhKUVVGelEwRXNUMEZCZGtZc1JVRkJaMGM3UVVGRE5VWXNiVUpCUVU4c1MwRkJTMGdzVlVGQlRDeERRVUZuUW5KRUxFbEJRV2hDTEVWQlFYTkNlVUlzUjBGQmRFSXNRMEZCVUR0QlFVTklPMEZCUTBvN08wRkJSVVFzV1VGQlNTeExRVUZMTkVJc1ZVRkJUQ3hEUVVGblFuSkVMRWxCUVdoQ0xFVkJRWE5DSzBRc1RVRkJkRUlzUzBGQmFVTXNRMEZCY2tNc1JVRkJkME03UVVGRGNFTXNhVUpCUVU4c1MwRkJTMVlzVlVGQlRDeERRVUZuUW5KRUxFbEJRV2hDTEVOQlFWQTdRVUZEU0R0QlFVTktPMEZCUTBvN1FVRTNRMHc3UVVGQlFUdEJRVUZCTEhWRFFTdERkVUkwUkN4TFFTOURka0lzUlVFclF6aENPMEZCUTNSQ0xGZEJRVXNzU1VGQlNUVkVMRWxCUVZRc1NVRkJhVUkwUkN4TFFVRnFRaXhGUVVGM1FqdEJRVU53UWl4bFFVRlBMRXRCUVV0UUxGVkJRVXdzUTBGQlowSnlSQ3hKUVVGb1FpeERRVUZRTzBGQlEwZzdRVUZEU2p0QlFXNUVURHM3UVVGQlFUdEJRVUZCT3p0QlFYTkVRU3hUUVVGVGMwUXNUVUZCVkN4RFFVRm5RblJFTEVsQlFXaENMRVZCUVhOQ08wRkJRMnhDTEZOQlFVOHNUVUZCVFVFc1NVRkJZanRCUVVOSUxFTTdPenM3T3pzN096czdPenM3T3pzN096czdPenRCUTNoRVJEdEJRVVZQTEVsQlFVMVRMRlZCUVdJN1FVRkJRVHRCUVVGQk8wRkJRMGtzZDBKQlFXTTdRVUZCUVRzN1FVRkRWaXhUUVVGTGRVUXNVMEZCVEN4SFFVRnBRaXhKUVVGSldpeHRSVUZCU2l4RlFVRnFRanRCUVVOQkxGTkJRVXRoTEdkQ1FVRk1MRWRCUVhkQ0xFVkJRWGhDTzBGQlEwZzdPMEZCU2t3N1FVRkJRVHRCUVVGQkxIbENRVTFUUXl4VFFVNVVMRVZCVFc5Q1dDeFJRVTV3UWl4RlFVMDRRa01zVDBGT09VSXNSVUZOZFVNN1FVRkRMMElzVjBGQlMxRXNVMEZCVEN4RFFVRmxSeXhIUVVGbUxFTkJRVzFDUkN4VFFVRnVRaXhGUVVFNFFsZ3NVVUZCT1VJc1JVRkJkME5ETEU5QlFYaERPMEZCUTBFc1lVRkJUeXhKUVVGUU8wRkJRMGc3UVVGVVREdEJRVUZCTzBGQlFVRXNaME5CVjJkQ1JDeFJRVmhvUWl4RlFWY3dRanRCUVVOc1FpeFhRVUZMVlN4blFrRkJUQ3hEUVVGelFsQXNTVUZCZEVJc1EwRkJNa0pJTEZGQlFUTkNPMEZCUTBFc1lVRkJUeXhKUVVGUU8wRkJRMGc3UVVGa1REdEJRVUZCTzBGQlFVRXNNa0pCWjBKWFZ5eFRRV2hDV0N4RlFXZENjMEpZTEZGQmFFSjBRaXhGUVdkQ1owTkRMRTlCYUVKb1F5eEZRV2RDZVVNN1FVRkRha01zVjBGQlMxRXNVMEZCVEN4RFFVRmxTU3hOUVVGbUxFTkJRWE5DUml4VFFVRjBRaXhGUVVGcFExZ3NVVUZCYWtNc1JVRkJNa05ETEU5QlFUTkRPMEZCUTBFc1lVRkJUeXhKUVVGUU8wRkJRMGc3UVVGdVFrdzdRVUZCUVR0QlFVRkJMR3REUVhGQ2EwSkVMRkZCY2tKc1FpeEZRWEZDTkVJN1FVRkRjRUlzVlVGQlNTeERRVUZEUVN4UlFVRk1MRVZCUVdVN1FVRkRXQ3hoUVVGTFZTeG5Ra0ZCVEN4SFFVRjNRaXhGUVVGNFFqdEJRVU5CTEdWQlFVOHNTVUZCVUR0QlFVTklPenRCUVVWRUxGZEJRVXNzU1VGQlNXeEVMRU5CUVZRc1NVRkJZeXhMUVVGTGEwUXNaMEpCUVc1Q0xFVkJRWEZETzBGQlEycERMRmxCUVVsV0xGRkJRVkVzU1VGQlNTeExRVUZMVlN4blFrRkJUQ3hEUVVGelFteEVMRU5CUVhSQ0xFTkJRV2hDTEVWQlFUQkRPMEZCUTNSRExHbENRVUZQTEV0QlFVdHJSQ3huUWtGQlRDeERRVUZ6UW14RUxFTkJRWFJDTEVOQlFWQTdRVUZEU0R0QlFVTktPenRCUVVORUxHRkJRVThzU1VGQlVEdEJRVU5JTzBGQmFrTk1PMEZCUVVFN1FVRkJRU3hwUTBGdFEybENPMEZCUTFRc1YwRkJTM05FTEUxQlFVdzdRVUZEUVN4WFFVRkxReXhoUVVGTU8wRkJRMEVzWVVGQlR5eEpRVUZRTzBGQlEwZzdRVUYyUTB3N1FVRkJRVHRCUVVGQkxIbENRWGxEVTBvc1UwRjZRMVFzUlVGNVEyOUNNMFFzU1VGNlEzQkNMRVZCZVVNd1FqdEJRVU5zUWl4WFFVRkxMRWxCUVVsUkxFTkJRVU1zUjBGQlJ5eERRVUZpTEVWQlFXZENRU3hEUVVGRExFZEJRVWNzUzBGQlMydEVMR2RDUVVGTUxFTkJRWE5DUml4TlFVRXhReXhGUVVGclJHaEVMRU5CUVVNc1JVRkJia1FzUlVGQmRVUTdRVUZEYmtRc1lVRkJTMnRFTEdkQ1FVRk1MRU5CUVhOQ2JFUXNRMEZCZEVJc1JVRkJlVUp0UkN4VFFVRjZRaXhGUVVGdlF6TkVMRWxCUVhCRE8wRkJRMGc3TzBGQlJVUXNWVUZCU1hsRUxGTkJRVk1zUjBGQlJ5eExRVUZMUVN4VFFVRk1MRU5CUVdWUExFZEJRV1lzUTBGQmJVSk1MRk5CUVc1Q0xFTkJRV2hDT3p0QlFVTkJMRlZCUVVsR0xGTkJRVk1zU1VGQlNVRXNVMEZCVXl4RFFVRkRSQ3hOUVVGV0xFZEJRVzFDTEVOQlFYQkRMRVZCUVhWRE8wRkJRMjVETEdGQlFVc3NTVUZCU1doRUxFVkJRVU1zUjBGQlJ5eERRVUZpTEVWQlFXZENRU3hGUVVGRExFZEJRVWRwUkN4VFFVRlRMRU5CUVVORUxFMUJRVGxDTEVWQlFYTkRhRVFzUlVGQlF5eEZRVUYyUXl4RlFVRXlRenRCUVVOMlEybEVMRzFDUVVGVExFTkJRVU5xUkN4RlFVRkVMRU5CUVZRc1EwRkJZVFJETEVWQlFXSXNRMEZCWjBKaExFbEJRV2hDTEVOQlFYRkNVaXhUUVVGVExFTkJRVU5xUkN4RlFVRkVMRU5CUVZRc1EwRkJZWGxETEU5QlFXeERMRVZCUVRKRGFrUXNTVUZCTTBNN1FVRkRTRHRCUVVOS096dEJRVVZFTEdGQlFVOHNTVUZCVUR0QlFVTklPMEZCZEVSTU96dEJRVUZCTzBGQlFVRXNTVHM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096dEJRMFpCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUlU4c1NVRkJUV3RGTEUxQlFXSTdRVUZCUVR0QlFVRkJPMEZCUTBrc2EwSkJRVmxETEU5QlFWb3NSVUZCY1VKRExFOUJRWEpDTEVWQlFUaENPMEZCUVVFN08wRkJRekZDTEZOQlFVdERMRmRCUVV3c1EwRkJhVUpHTEU5QlFXcENPMEZCUlVFc1UwRkJTMnBFTEVkQlFVd3NSMEZCVjJsRUxFOUJRVmc3UVVGRFFTeFRRVUZMUXl4UFFVRk1MRWRCUVdWQkxFOUJRVThzU1VGQlNTeEZRVUV4UWp0QlFVTkJMRk5CUVV0RkxGVkJRVXdzUjBGQmEwSXNTVUZCU1hCRkxEWkVRVUZLTEVWQlFXeENPMEZCUTBFc1UwRkJTMFVzVVVGQlRDeEhRVUZuUWl4SlFVRkpSQ3d5UkVGQlNpeEZRVUZvUWp0QlFVVkJMRk5CUVV0dlJTeFBRVUZNTzBGQlEwZzdPMEZCVmt3N1FVRkJRVHRCUVVGQkxEaENRVmxqTzBGQlEwNHNWMEZCU3pWRkxFMUJRVXdzUjBGQll5eEpRVUZKYjBJc2VVUkJRVW9zUTBGQlZ5eEpRVUZZTEVWQlFXbENMRXRCUVV0eFJDeFBRVUZNTEVOQlFXRndSQ3hKUVVFNVFpeERRVUZrTzBGQlEwZzdRVUZrVER0QlFVRkJPMEZCUVVFc09FSkJaMEpqZDBRc1dVRm9RbVFzUlVGblFqUkNPMEZCUTNCQ0xHRkJRVThzUzBGQlMzQkZMRkZCUVV3c1EwRkJZM2RFTEVkQlFXUXNRMEZCYTBKWkxGbEJRV3hDTEVWQlFXZERMRWxCUVdoRExFTkJRVkE3UVVGRFNEdEJRV3hDVER0QlFVRkJPMEZCUVVFc1owTkJiMEpuUWtFc1dVRndRbWhDTEVWQmIwSTRRanRCUVVOMFFpeFZRVUZKZGtVc1QwRkJUeXhIUVVGSExFdEJRVXRITEZGQlFVd3NRMEZCWTNsRUxFMUJRV1FzUTBGQmNVSlhMRmxCUVhKQ0xFTkJRV1E3UVVGRFFYWkZMR0ZCUVU4c1EwRkJRM2RGTEZkQlFWSTdRVUZEU0R0QlFYWkNURHRCUVVGQk8wRkJRVUVzYTBOQmVVSnJRanRCUVVOV0xHRkJRVThzUzBGQlN6bEZMRTFCUVV3c1EwRkJXVUVzVFVGQldpeERRVUZ0UW5GRExGTkJRVEZDTzBGQlEwZzdRVUV6UWt3N1FVRkJRVHRCUVVGQkxIbENRVFpDVTFjc1NVRTNRbFFzUlVFMlFtVTdRVUZEVUN4WFFVRkxhRVFzVFVGQlRDeERRVUZaUnl4SlFVRmFMRU5CUVdsQ05rTXNTVUZCYWtJN1FVRkRTRHRCUVM5Q1REdEJRVUZCTzBGQlFVRXNaME5CYVVOblFucENMRWRCYWtOb1FpeEZRV2xEY1VJN1FVRkRZaXhoUVVGUExFbEJRVkE3UVVGRFNEdEJRVzVEVER0QlFVRkJPMEZCUVVFc2VVSkJjVU5UZWtJc1NVRnlRMVFzUlVGeFEyVjFSQ3hSUVhKRFppeEZRWEZEZVVJN1FVRkRha0lzVlVGQlNUQkNMRTFCUVUwc1IwRkJSeXhMUVVGTFRpeFBRVUZNTEVOQlFXRjRSQ3hKUVVGaUxFTkJRV3RDT0VRc1RVRkJiRUlzU1VGQk5FSXNUVUZCZWtNN1FVRkRRU3hWUVVGSk1VVXNTVUZCU1N4SFFVRkhMRVZCUVZnN1FVRkRRU3hWUVVGSk1rVXNUVUZCVFN4SFFVRkhMRVZCUVdJN08wRkJSVUVzVlVGQlNVUXNUVUZCVFN4SlFVRkpMRTFCUVdRc1JVRkJjMEk3UVVGRGJFSXhSU3haUVVGSkxFZEJRVWROTEUxQlFVMHNRMEZCUTNORkxFMUJRVkFzUTBGQll6dEJRVU5xUWtvc2MwSkJRVmtzUlVGQlJTOUZMRWxCUkVjN1FVRkZha0oxUXl4dFFrRkJVeXhGUVVGRkxFdEJRVXMyUXl4WFFVRk1PMEZCUmswc1UwRkJaQ3hEUVVGUU8wRkJTVWdzVDBGTVJDeE5RVXRQTzBGQlEwaEdMR05CUVUwc1IwRkJSM0pGTEUxQlFVMHNRMEZCUTNORkxFMUJRVkFzUTBGQll6dEJRVU51UWtvc2MwSkJRVmtzUlVGQlJTOUZMRWxCUkVzN1FVRkZia0oxUXl4dFFrRkJVeXhGUVVGRkxFdEJRVXMyUXl4WFFVRk1PMEZCUmxFc1UwRkJaQ3hEUVVGVU8wRkJTVWc3TzBGQlJVUkRMR3RFUVVGTExFTkJRVU03UVVGRFJrTXNWMEZCUnl4RlFVRkZMRXRCUVV0WUxFOUJRVXdzUTBGQllYaEVMRWxCUVdJc1EwRkJhMEp0UlN4SFFVUnlRanRCUVVWR1RDeGpRVUZOTEVWQlFVVkJMRTFCUms0N1FVRkhSazBzWlVGQlR5eEZRVUZGTEV0QlFVdGFMRTlCUVV3c1EwRkJZWGhFTEVsQlFXSXNRMEZCYTBKdlJTeFBRVUZzUWl4SlFVRTJRaXhGUVVod1F6dEJRVWxHVEN4alFVRk5MRVZCUVVWQkxFMUJTazQ3UVVGTFJqTkZMRmxCUVVrc1JVRkJSVUU3UVVGTVNpeFBRVUZFTEVOQlFVd3NRMEZOUjJsR0xFbEJUa2dzUTBGTlVTeFZRVUZEY0VVc1EwRkJSQ3hGUVVGUE8wRkJRMWh0UXl4blFrRkJVU3hEUVVGRGJrTXNRMEZCUkN4RFFVRlNPMEZCUTBnc1QwRlNSQ3hGUVZGSGNVVXNTMEZTU0N4RFFWRlRMRlZCUVVOeVJTeERRVUZFTEVWQlFVODdRVUZEV205Q0xHVkJRVThzUTBGQlExWXNTMEZCVWl4RFFVRmpMRmRCUVdRN1FVRkRTQ3hQUVZaRU8wRkJWMGc3UVVGcVJVdzdPMEZCUVVFN1FVRkJRVHRCUVc5RlFUUkVMRTFCUVUwc1EwRkJRMnBDTEUxQlFWQXNSMEZCWjBKQkxFMUJRV2hDTEVNaUxDSm1hV3hsSWpvaWNIVnphR1Z5TG1weklpd2ljMjkxY21ObGMwTnZiblJsYm5RaU9sc2lJRngwTHk4Z1ZHaGxJRzF2WkhWc1pTQmpZV05vWlZ4dUlGeDBkbUZ5SUdsdWMzUmhiR3hsWkUxdlpIVnNaWE1nUFNCN2ZUdGNibHh1SUZ4MEx5OGdWR2hsSUhKbGNYVnBjbVVnWm5WdVkzUnBiMjVjYmlCY2RHWjFibU4wYVc5dUlGOWZkMlZpY0dGamExOXlaWEYxYVhKbFgxOG9iVzlrZFd4bFNXUXBJSHRjYmx4dUlGeDBYSFF2THlCRGFHVmpheUJwWmlCdGIyUjFiR1VnYVhNZ2FXNGdZMkZqYUdWY2JpQmNkRngwYVdZb2FXNXpkR0ZzYkdWa1RXOWtkV3hsYzF0dGIyUjFiR1ZKWkYwcElIdGNiaUJjZEZ4MFhIUnlaWFIxY200Z2FXNXpkR0ZzYkdWa1RXOWtkV3hsYzF0dGIyUjFiR1ZKWkYwdVpYaHdiM0owY3p0Y2JpQmNkRngwZlZ4dUlGeDBYSFF2THlCRGNtVmhkR1VnWVNCdVpYY2diVzlrZFd4bElDaGhibVFnY0hWMElHbDBJR2x1ZEc4Z2RHaGxJR05oWTJobEtWeHVJRngwWEhSMllYSWdiVzlrZFd4bElEMGdhVzV6ZEdGc2JHVmtUVzlrZFd4bGMxdHRiMlIxYkdWSlpGMGdQU0I3WEc0Z1hIUmNkRngwYVRvZ2JXOWtkV3hsU1dRc1hHNGdYSFJjZEZ4MGJEb2dabUZzYzJVc1hHNGdYSFJjZEZ4MFpYaHdiM0owY3pvZ2UzMWNiaUJjZEZ4MGZUdGNibHh1SUZ4MFhIUXZMeUJGZUdWamRYUmxJSFJvWlNCdGIyUjFiR1VnWm5WdVkzUnBiMjVjYmlCY2RGeDBiVzlrZFd4bGMxdHRiMlIxYkdWSlpGMHVZMkZzYkNodGIyUjFiR1V1Wlhod2IzSjBjeXdnYlc5a2RXeGxMQ0J0YjJSMWJHVXVaWGh3YjNKMGN5d2dYMTkzWldKd1lXTnJYM0psY1hWcGNtVmZYeWs3WEc1Y2JpQmNkRngwTHk4Z1JteGhaeUIwYUdVZ2JXOWtkV3hsSUdGeklHeHZZV1JsWkZ4dUlGeDBYSFJ0YjJSMWJHVXViQ0E5SUhSeWRXVTdYRzVjYmlCY2RGeDBMeThnVW1WMGRYSnVJSFJvWlNCbGVIQnZjblJ6SUc5bUlIUm9aU0J0YjJSMWJHVmNiaUJjZEZ4MGNtVjBkWEp1SUcxdlpIVnNaUzVsZUhCdmNuUnpPMXh1SUZ4MGZWeHVYRzVjYmlCY2RDOHZJR1Y0Y0c5elpTQjBhR1VnYlc5a2RXeGxjeUJ2WW1wbFkzUWdLRjlmZDJWaWNHRmphMTl0YjJSMWJHVnpYMThwWEc0Z1hIUmZYM2RsWW5CaFkydGZjbVZ4ZFdseVpWOWZMbTBnUFNCdGIyUjFiR1Z6TzF4dVhHNGdYSFF2THlCbGVIQnZjMlVnZEdobElHMXZaSFZzWlNCallXTm9aVnh1SUZ4MFgxOTNaV0p3WVdOclgzSmxjWFZwY21WZlh5NWpJRDBnYVc1emRHRnNiR1ZrVFc5a2RXeGxjenRjYmx4dUlGeDBMeThnWkdWbWFXNWxJR2RsZEhSbGNpQm1kVzVqZEdsdmJpQm1iM0lnYUdGeWJXOXVlU0JsZUhCdmNuUnpYRzRnWEhSZlgzZGxZbkJoWTJ0ZmNtVnhkV2x5WlY5ZkxtUWdQU0JtZFc1amRHbHZiaWhsZUhCdmNuUnpMQ0J1WVcxbExDQm5aWFIwWlhJcElIdGNiaUJjZEZ4MGFXWW9JVjlmZDJWaWNHRmphMTl5WlhGMWFYSmxYMTh1YnlobGVIQnZjblJ6TENCdVlXMWxLU2tnZTF4dUlGeDBYSFJjZEU5aWFtVmpkQzVrWldacGJtVlFjbTl3WlhKMGVTaGxlSEJ2Y25SekxDQnVZVzFsTENCN0lHVnVkVzFsY21GaWJHVTZJSFJ5ZFdVc0lHZGxkRG9nWjJWMGRHVnlJSDBwTzF4dUlGeDBYSFI5WEc0Z1hIUjlPMXh1WEc0Z1hIUXZMeUJrWldacGJtVWdYMTlsYzAxdlpIVnNaU0J2YmlCbGVIQnZjblJ6WEc0Z1hIUmZYM2RsWW5CaFkydGZjbVZ4ZFdseVpWOWZMbklnUFNCbWRXNWpkR2x2YmlobGVIQnZjblJ6S1NCN1hHNGdYSFJjZEdsbUtIUjVjR1Z2WmlCVGVXMWliMndnSVQwOUlDZDFibVJsWm1sdVpXUW5JQ1ltSUZONWJXSnZiQzUwYjFOMGNtbHVaMVJoWnlrZ2UxeHVJRngwWEhSY2RFOWlhbVZqZEM1a1pXWnBibVZRY205d1pYSjBlU2hsZUhCdmNuUnpMQ0JUZVcxaWIyd3VkRzlUZEhKcGJtZFVZV2NzSUhzZ2RtRnNkV1U2SUNkTmIyUjFiR1VuSUgwcE8xeHVJRngwWEhSOVhHNGdYSFJjZEU5aWFtVmpkQzVrWldacGJtVlFjbTl3WlhKMGVTaGxlSEJ2Y25SekxDQW5YMTlsYzAxdlpIVnNaU2NzSUhzZ2RtRnNkV1U2SUhSeWRXVWdmU2s3WEc0Z1hIUjlPMXh1WEc0Z1hIUXZMeUJqY21WaGRHVWdZU0JtWVd0bElHNWhiV1Z6Y0dGalpTQnZZbXBsWTNSY2JpQmNkQzh2SUcxdlpHVWdKaUF4T2lCMllXeDFaU0JwY3lCaElHMXZaSFZzWlNCcFpDd2djbVZ4ZFdseVpTQnBkRnh1SUZ4MEx5OGdiVzlrWlNBbUlESTZJRzFsY21kbElHRnNiQ0J3Y205d1pYSjBhV1Z6SUc5bUlIWmhiSFZsSUdsdWRHOGdkR2hsSUc1elhHNGdYSFF2THlCdGIyUmxJQ1lnTkRvZ2NtVjBkWEp1SUhaaGJIVmxJSGRvWlc0Z1lXeHlaV0ZrZVNCdWN5QnZZbXBsWTNSY2JpQmNkQzh2SUcxdlpHVWdKaUE0ZkRFNklHSmxhR0YyWlNCc2FXdGxJSEpsY1hWcGNtVmNiaUJjZEY5ZmQyVmljR0ZqYTE5eVpYRjFhWEpsWDE4dWRDQTlJR1oxYm1OMGFXOXVLSFpoYkhWbExDQnRiMlJsS1NCN1hHNGdYSFJjZEdsbUtHMXZaR1VnSmlBeEtTQjJZV3gxWlNBOUlGOWZkMlZpY0dGamExOXlaWEYxYVhKbFgxOG9kbUZzZFdVcE8xeHVJRngwWEhScFppaHRiMlJsSUNZZ09Da2djbVYwZFhKdUlIWmhiSFZsTzF4dUlGeDBYSFJwWmlnb2JXOWtaU0FtSURRcElDWW1JSFI1Y0dWdlppQjJZV3gxWlNBOVBUMGdKMjlpYW1WamRDY2dKaVlnZG1Gc2RXVWdKaVlnZG1Gc2RXVXVYMTlsYzAxdlpIVnNaU2tnY21WMGRYSnVJSFpoYkhWbE8xeHVJRngwWEhSMllYSWdibk1nUFNCUFltcGxZM1F1WTNKbFlYUmxLRzUxYkd3cE8xeHVJRngwWEhSZlgzZGxZbkJoWTJ0ZmNtVnhkV2x5WlY5ZkxuSW9ibk1wTzF4dUlGeDBYSFJQWW1wbFkzUXVaR1ZtYVc1bFVISnZjR1Z5ZEhrb2JuTXNJQ2RrWldaaGRXeDBKeXdnZXlCbGJuVnRaWEpoWW14bE9pQjBjblZsTENCMllXeDFaVG9nZG1Gc2RXVWdmU2s3WEc0Z1hIUmNkR2xtS0cxdlpHVWdKaUF5SUNZbUlIUjVjR1Z2WmlCMllXeDFaU0FoUFNBbmMzUnlhVzVuSnlrZ1ptOXlLSFpoY2lCclpYa2dhVzRnZG1Gc2RXVXBJRjlmZDJWaWNHRmphMTl5WlhGMWFYSmxYMTh1WkNodWN5d2dhMlY1TENCbWRXNWpkR2x2YmloclpYa3BJSHNnY21WMGRYSnVJSFpoYkhWbFcydGxlVjA3SUgwdVltbHVaQ2h1ZFd4c0xDQnJaWGtwS1R0Y2JpQmNkRngwY21WMGRYSnVJRzV6TzF4dUlGeDBmVHRjYmx4dUlGeDBMeThnWjJWMFJHVm1ZWFZzZEVWNGNHOXlkQ0JtZFc1amRHbHZiaUJtYjNJZ1kyOXRjR0YwYVdKcGJHbDBlU0IzYVhSb0lHNXZiaTFvWVhKdGIyNTVJRzF2WkhWc1pYTmNiaUJjZEY5ZmQyVmljR0ZqYTE5eVpYRjFhWEpsWDE4dWJpQTlJR1oxYm1OMGFXOXVLRzF2WkhWc1pTa2dlMXh1SUZ4MFhIUjJZWElnWjJWMGRHVnlJRDBnYlc5a2RXeGxJQ1ltSUcxdlpIVnNaUzVmWDJWelRXOWtkV3hsSUQ5Y2JpQmNkRngwWEhSbWRXNWpkR2x2YmlCblpYUkVaV1poZFd4MEtDa2dleUJ5WlhSMWNtNGdiVzlrZFd4bFd5ZGtaV1poZFd4MEoxMDdJSDBnT2x4dUlGeDBYSFJjZEdaMWJtTjBhVzl1SUdkbGRFMXZaSFZzWlVWNGNHOXlkSE1vS1NCN0lISmxkSFZ5YmlCdGIyUjFiR1U3SUgwN1hHNGdYSFJjZEY5ZmQyVmljR0ZqYTE5eVpYRjFhWEpsWDE4dVpDaG5aWFIwWlhJc0lDZGhKeXdnWjJWMGRHVnlLVHRjYmlCY2RGeDBjbVYwZFhKdUlHZGxkSFJsY2p0Y2JpQmNkSDA3WEc1Y2JpQmNkQzh2SUU5aWFtVmpkQzV3Y205MGIzUjVjR1V1YUdGelQzZHVVSEp2Y0dWeWRIa3VZMkZzYkZ4dUlGeDBYMTkzWldKd1lXTnJYM0psY1hWcGNtVmZYeTV2SUQwZ1puVnVZM1JwYjI0b2IySnFaV04wTENCd2NtOXdaWEowZVNrZ2V5QnlaWFIxY200Z1QySnFaV04wTG5CeWIzUnZkSGx3WlM1b1lYTlBkMjVRY205d1pYSjBlUzVqWVd4c0tHOWlhbVZqZEN3Z2NISnZjR1Z5ZEhrcE95QjlPMXh1WEc0Z1hIUXZMeUJmWDNkbFluQmhZMnRmY0hWaWJHbGpYM0JoZEdoZlgxeHVJRngwWDE5M1pXSndZV05yWDNKbGNYVnBjbVZmWHk1d0lEMGdYQ0pjSWp0Y2JseHVYRzRnWEhRdkx5Qk1iMkZrSUdWdWRISjVJRzF2WkhWc1pTQmhibVFnY21WMGRYSnVJR1Y0Y0c5eWRITmNiaUJjZEhKbGRIVnliaUJmWDNkbFluQmhZMnRmY21WeGRXbHlaVjlmS0Y5ZmQyVmljR0ZqYTE5eVpYRjFhWEpsWDE4dWN5QTlJRndpTGk5emNtTXZjSFZ6YUdWeUxtcHpYQ0lwTzF4dUlpd2liVzlrZFd4bExtVjRjRzl5ZEhNZ1BTQnlaWEYxYVhKbEtDY3VMMnhwWWk5aGVHbHZjeWNwT3lJc0lpZDFjMlVnYzNSeWFXTjBKenRjYmx4dWRtRnlJSFYwYVd4eklEMGdjbVZ4ZFdseVpTZ25MaTh1TGk5MWRHbHNjeWNwTzF4dWRtRnlJSE5sZEhSc1pTQTlJSEpsY1hWcGNtVW9KeTR2TGk0dlkyOXlaUzl6WlhSMGJHVW5LVHRjYm5aaGNpQmlkV2xzWkZWU1RDQTlJSEpsY1hWcGNtVW9KeTR2TGk0dmFHVnNjR1Z5Y3k5aWRXbHNaRlZTVENjcE8xeHVkbUZ5SUhCaGNuTmxTR1ZoWkdWeWN5QTlJSEpsY1hWcGNtVW9KeTR2TGk0dmFHVnNjR1Z5Y3k5d1lYSnpaVWhsWVdSbGNuTW5LVHRjYm5aaGNpQnBjMVZTVEZOaGJXVlBjbWxuYVc0Z1BTQnlaWEYxYVhKbEtDY3VMeTR1TDJobGJIQmxjbk12YVhOVlVreFRZVzFsVDNKcFoybHVKeWs3WEc1MllYSWdZM0psWVhSbFJYSnliM0lnUFNCeVpYRjFhWEpsS0NjdUxpOWpiM0psTDJOeVpXRjBaVVZ5Y205eUp5azdYRzUyWVhJZ1luUnZZU0E5SUNoMGVYQmxiMllnZDJsdVpHOTNJQ0U5UFNBbmRXNWtaV1pwYm1Wa0p5QW1KaUIzYVc1a2IzY3VZblJ2WVNBbUppQjNhVzVrYjNjdVluUnZZUzVpYVc1a0tIZHBibVJ2ZHlrcElIeDhJSEpsY1hWcGNtVW9KeTR2TGk0dmFHVnNjR1Z5Y3k5aWRHOWhKeWs3WEc1Y2JtMXZaSFZzWlM1bGVIQnZjblJ6SUQwZ1puVnVZM1JwYjI0Z2VHaHlRV1JoY0hSbGNpaGpiMjVtYVdjcElIdGNiaUFnY21WMGRYSnVJRzVsZHlCUWNtOXRhWE5sS0daMWJtTjBhVzl1SUdScGMzQmhkR05vV0doeVVtVnhkV1Z6ZENoeVpYTnZiSFpsTENCeVpXcGxZM1FwSUh0Y2JpQWdJQ0IyWVhJZ2NtVnhkV1Z6ZEVSaGRHRWdQU0JqYjI1bWFXY3VaR0YwWVR0Y2JpQWdJQ0IyWVhJZ2NtVnhkV1Z6ZEVobFlXUmxjbk1nUFNCamIyNW1hV2N1YUdWaFpHVnljenRjYmx4dUlDQWdJR2xtSUNoMWRHbHNjeTVwYzBadmNtMUVZWFJoS0hKbGNYVmxjM1JFWVhSaEtTa2dlMXh1SUNBZ0lDQWdaR1ZzWlhSbElISmxjWFZsYzNSSVpXRmtaWEp6V3lkRGIyNTBaVzUwTFZSNWNHVW5YVHNnTHk4Z1RHVjBJSFJvWlNCaWNtOTNjMlZ5SUhObGRDQnBkRnh1SUNBZ0lIMWNibHh1SUNBZ0lIWmhjaUJ5WlhGMVpYTjBJRDBnYm1WM0lGaE5URWgwZEhCU1pYRjFaWE4wS0NrN1hHNGdJQ0FnZG1GeUlHeHZZV1JGZG1WdWRDQTlJQ2R2Ym5KbFlXUjVjM1JoZEdWamFHRnVaMlVuTzF4dUlDQWdJSFpoY2lCNFJHOXRZV2x1SUQwZ1ptRnNjMlU3WEc1Y2JpQWdJQ0F2THlCR2IzSWdTVVVnT0M4NUlFTlBVbE1nYzNWd2NHOXlkRnh1SUNBZ0lDOHZJRTl1YkhrZ2MzVndjRzl5ZEhNZ1VFOVRWQ0JoYm1RZ1IwVlVJR05oYkd4eklHRnVaQ0JrYjJWemJpZDBJSEpsZEhWeWJuTWdkR2hsSUhKbGMzQnZibk5sSUdobFlXUmxjbk11WEc0Z0lDQWdMeThnUkU5T0oxUWdaRzhnZEdocGN5Qm1iM0lnZEdWemRHbHVaeUJpTDJNZ1dFMU1TSFIwY0ZKbGNYVmxjM1FnYVhNZ2JXOWphMlZrTENCdWIzUWdXRVJ2YldGcGJsSmxjWFZsYzNRdVhHNGdJQ0FnYVdZZ0tIQnliMk5sYzNNdVpXNTJMazVQUkVWZlJVNVdJQ0U5UFNBbmRHVnpkQ2NnSmlaY2JpQWdJQ0FnSUNBZ2RIbHdaVzltSUhkcGJtUnZkeUFoUFQwZ0ozVnVaR1ZtYVc1bFpDY2dKaVpjYmlBZ0lDQWdJQ0FnZDJsdVpHOTNMbGhFYjIxaGFXNVNaWEYxWlhOMElDWW1JQ0VvSjNkcGRHaERjbVZrWlc1MGFXRnNjeWNnYVc0Z2NtVnhkV1Z6ZENrZ0ppWmNiaUFnSUNBZ0lDQWdJV2x6VlZKTVUyRnRaVTl5YVdkcGJpaGpiMjVtYVdjdWRYSnNLU2tnZTF4dUlDQWdJQ0FnY21WeGRXVnpkQ0E5SUc1bGR5QjNhVzVrYjNjdVdFUnZiV0ZwYmxKbGNYVmxjM1FvS1R0Y2JpQWdJQ0FnSUd4dllXUkZkbVZ1ZENBOUlDZHZibXh2WVdRbk8xeHVJQ0FnSUNBZ2VFUnZiV0ZwYmlBOUlIUnlkV1U3WEc0Z0lDQWdJQ0J5WlhGMVpYTjBMbTl1Y0hKdlozSmxjM01nUFNCbWRXNWpkR2x2YmlCb1lXNWtiR1ZRY205bmNtVnpjeWdwSUh0OU8xeHVJQ0FnSUNBZ2NtVnhkV1Z6ZEM1dmJuUnBiV1Z2ZFhRZ1BTQm1kVzVqZEdsdmJpQm9ZVzVrYkdWVWFXMWxiM1YwS0NrZ2UzMDdYRzRnSUNBZ2ZWeHVYRzRnSUNBZ0x5OGdTRlJVVUNCaVlYTnBZeUJoZFhSb1pXNTBhV05oZEdsdmJseHVJQ0FnSUdsbUlDaGpiMjVtYVdjdVlYVjBhQ2tnZTF4dUlDQWdJQ0FnZG1GeUlIVnpaWEp1WVcxbElEMGdZMjl1Wm1sbkxtRjFkR2d1ZFhObGNtNWhiV1VnZkh3Z0p5YzdYRzRnSUNBZ0lDQjJZWElnY0dGemMzZHZjbVFnUFNCamIyNW1hV2N1WVhWMGFDNXdZWE56ZDI5eVpDQjhmQ0FuSnp0Y2JpQWdJQ0FnSUhKbGNYVmxjM1JJWldGa1pYSnpMa0YxZEdodmNtbDZZWFJwYjI0Z1BTQW5RbUZ6YVdNZ0p5QXJJR0owYjJFb2RYTmxjbTVoYldVZ0t5QW5PaWNnS3lCd1lYTnpkMjl5WkNrN1hHNGdJQ0FnZlZ4dVhHNGdJQ0FnY21WeGRXVnpkQzV2Y0dWdUtHTnZibVpwWnk1dFpYUm9iMlF1ZEc5VmNIQmxja05oYzJVb0tTd2dZblZwYkdSVlVrd29ZMjl1Wm1sbkxuVnliQ3dnWTI5dVptbG5MbkJoY21GdGN5d2dZMjl1Wm1sbkxuQmhjbUZ0YzFObGNtbGhiR2w2WlhJcExDQjBjblZsS1R0Y2JseHVJQ0FnSUM4dklGTmxkQ0IwYUdVZ2NtVnhkV1Z6ZENCMGFXMWxiM1YwSUdsdUlFMVRYRzRnSUNBZ2NtVnhkV1Z6ZEM1MGFXMWxiM1YwSUQwZ1kyOXVabWxuTG5ScGJXVnZkWFE3WEc1Y2JpQWdJQ0F2THlCTWFYTjBaVzRnWm05eUlISmxZV1I1SUhOMFlYUmxYRzRnSUNBZ2NtVnhkV1Z6ZEZ0c2IyRmtSWFpsYm5SZElEMGdablZ1WTNScGIyNGdhR0Z1Wkd4bFRHOWhaQ2dwSUh0Y2JpQWdJQ0FnSUdsbUlDZ2hjbVZ4ZFdWemRDQjhmQ0FvY21WeGRXVnpkQzV5WldGa2VWTjBZWFJsSUNFOVBTQTBJQ1ltSUNGNFJHOXRZV2x1S1NrZ2UxeHVJQ0FnSUNBZ0lDQnlaWFIxY200N1hHNGdJQ0FnSUNCOVhHNWNiaUFnSUNBZ0lDOHZJRlJvWlNCeVpYRjFaWE4wSUdWeWNtOXlaV1FnYjNWMElHRnVaQ0IzWlNCa2FXUnVKM1FnWjJWMElHRWdjbVZ6Y0c5dWMyVXNJSFJvYVhNZ2QybHNiQ0JpWlZ4dUlDQWdJQ0FnTHk4Z2FHRnVaR3hsWkNCaWVTQnZibVZ5Y205eUlHbHVjM1JsWVdSY2JpQWdJQ0FnSUM4dklGZHBkR2dnYjI1bElHVjRZMlZ3ZEdsdmJqb2djbVZ4ZFdWemRDQjBhR0YwSUhWemFXNW5JR1pwYkdVNklIQnliM1J2WTI5c0xDQnRiM04wSUdKeWIzZHpaWEp6WEc0Z0lDQWdJQ0F2THlCM2FXeHNJSEpsZEhWeWJpQnpkR0YwZFhNZ1lYTWdNQ0JsZG1WdUlIUm9iM1ZuYUNCcGRDZHpJR0VnYzNWalkyVnpjMloxYkNCeVpYRjFaWE4wWEc0Z0lDQWdJQ0JwWmlBb2NtVnhkV1Z6ZEM1emRHRjBkWE1nUFQwOUlEQWdKaVlnSVNoeVpYRjFaWE4wTG5KbGMzQnZibk5sVlZKTUlDWW1JSEpsY1hWbGMzUXVjbVZ6Y0c5dWMyVlZVa3d1YVc1a1pYaFBaaWduWm1sc1pUb25LU0E5UFQwZ01Da3BJSHRjYmlBZ0lDQWdJQ0FnY21WMGRYSnVPMXh1SUNBZ0lDQWdmVnh1WEc0Z0lDQWdJQ0F2THlCUWNtVndZWEpsSUhSb1pTQnlaWE53YjI1elpWeHVJQ0FnSUNBZ2RtRnlJSEpsYzNCdmJuTmxTR1ZoWkdWeWN5QTlJQ2RuWlhSQmJHeFNaWE53YjI1elpVaGxZV1JsY25NbklHbHVJSEpsY1hWbGMzUWdQeUJ3WVhKelpVaGxZV1JsY25Nb2NtVnhkV1Z6ZEM1blpYUkJiR3hTWlhOd2IyNXpaVWhsWVdSbGNuTW9LU2tnT2lCdWRXeHNPMXh1SUNBZ0lDQWdkbUZ5SUhKbGMzQnZibk5sUkdGMFlTQTlJQ0ZqYjI1bWFXY3VjbVZ6Y0c5dWMyVlVlWEJsSUh4OElHTnZibVpwWnk1eVpYTndiMjV6WlZSNWNHVWdQVDA5SUNkMFpYaDBKeUEvSUhKbGNYVmxjM1F1Y21WemNHOXVjMlZVWlhoMElEb2djbVZ4ZFdWemRDNXlaWE53YjI1elpUdGNiaUFnSUNBZ0lIWmhjaUJ5WlhOd2IyNXpaU0E5SUh0Y2JpQWdJQ0FnSUNBZ1pHRjBZVG9nY21WemNHOXVjMlZFWVhSaExGeHVJQ0FnSUNBZ0lDQXZMeUJKUlNCelpXNWtjeUF4TWpJeklHbHVjM1JsWVdRZ2IyWWdNakEwSUNob2RIUndjem92TDJkcGRHaDFZaTVqYjIwdllYaHBiM012WVhocGIzTXZhWE56ZFdWekx6SXdNU2xjYmlBZ0lDQWdJQ0FnYzNSaGRIVnpPaUJ5WlhGMVpYTjBMbk4wWVhSMWN5QTlQVDBnTVRJeU15QS9JREl3TkNBNklISmxjWFZsYzNRdWMzUmhkSFZ6TEZ4dUlDQWdJQ0FnSUNCemRHRjBkWE5VWlhoME9pQnlaWEYxWlhOMExuTjBZWFIxY3lBOVBUMGdNVEl5TXlBL0lDZE9ieUJEYjI1MFpXNTBKeUE2SUhKbGNYVmxjM1F1YzNSaGRIVnpWR1Y0ZEN4Y2JpQWdJQ0FnSUNBZ2FHVmhaR1Z5Y3pvZ2NtVnpjRzl1YzJWSVpXRmtaWEp6TEZ4dUlDQWdJQ0FnSUNCamIyNW1hV2M2SUdOdmJtWnBaeXhjYmlBZ0lDQWdJQ0FnY21WeGRXVnpkRG9nY21WeGRXVnpkRnh1SUNBZ0lDQWdmVHRjYmx4dUlDQWdJQ0FnYzJWMGRHeGxLSEpsYzI5c2RtVXNJSEpsYW1WamRDd2djbVZ6Y0c5dWMyVXBPMXh1WEc0Z0lDQWdJQ0F2THlCRGJHVmhiaUIxY0NCeVpYRjFaWE4wWEc0Z0lDQWdJQ0J5WlhGMVpYTjBJRDBnYm5Wc2JEdGNiaUFnSUNCOU8xeHVYRzRnSUNBZ0x5OGdTR0Z1Wkd4bElHeHZkeUJzWlhabGJDQnVaWFIzYjNKcklHVnljbTl5YzF4dUlDQWdJSEpsY1hWbGMzUXViMjVsY25KdmNpQTlJR1oxYm1OMGFXOXVJR2hoYm1Sc1pVVnljbTl5S0NrZ2UxeHVJQ0FnSUNBZ0x5OGdVbVZoYkNCbGNuSnZjbk1nWVhKbElHaHBaR1JsYmlCbWNtOXRJSFZ6SUdKNUlIUm9aU0JpY205M2MyVnlYRzRnSUNBZ0lDQXZMeUJ2Ym1WeWNtOXlJSE5vYjNWc1pDQnZibXg1SUdacGNtVWdhV1lnYVhRbmN5QmhJRzVsZEhkdmNtc2daWEp5YjNKY2JpQWdJQ0FnSUhKbGFtVmpkQ2hqY21WaGRHVkZjbkp2Y2lnblRtVjBkMjl5YXlCRmNuSnZjaWNzSUdOdmJtWnBaeXdnYm5Wc2JDd2djbVZ4ZFdWemRDa3BPMXh1WEc0Z0lDQWdJQ0F2THlCRGJHVmhiaUIxY0NCeVpYRjFaWE4wWEc0Z0lDQWdJQ0J5WlhGMVpYTjBJRDBnYm5Wc2JEdGNiaUFnSUNCOU8xeHVYRzRnSUNBZ0x5OGdTR0Z1Wkd4bElIUnBiV1Z2ZFhSY2JpQWdJQ0J5WlhGMVpYTjBMbTl1ZEdsdFpXOTFkQ0E5SUdaMWJtTjBhVzl1SUdoaGJtUnNaVlJwYldWdmRYUW9LU0I3WEc0Z0lDQWdJQ0J5WldwbFkzUW9ZM0psWVhSbFJYSnliM0lvSjNScGJXVnZkWFFnYjJZZ0p5QXJJR052Ym1acFp5NTBhVzFsYjNWMElDc2dKMjF6SUdWNFkyVmxaR1ZrSnl3Z1kyOXVabWxuTENBblJVTlBUazVCUWs5U1ZFVkVKeXhjYmlBZ0lDQWdJQ0FnY21WeGRXVnpkQ2twTzF4dVhHNGdJQ0FnSUNBdkx5QkRiR1ZoYmlCMWNDQnlaWEYxWlhOMFhHNGdJQ0FnSUNCeVpYRjFaWE4wSUQwZ2JuVnNiRHRjYmlBZ0lDQjlPMXh1WEc0Z0lDQWdMeThnUVdSa0lIaHpjbVlnYUdWaFpHVnlYRzRnSUNBZ0x5OGdWR2hwY3lCcGN5QnZibXg1SUdSdmJtVWdhV1lnY25WdWJtbHVaeUJwYmlCaElITjBZVzVrWVhKa0lHSnliM2R6WlhJZ1pXNTJhWEp2Ym0xbGJuUXVYRzRnSUNBZ0x5OGdVM0JsWTJsbWFXTmhiR3g1SUc1dmRDQnBaaUIzWlNkeVpTQnBiaUJoSUhkbFlpQjNiM0pyWlhJc0lHOXlJSEpsWVdOMExXNWhkR2wyWlM1Y2JpQWdJQ0JwWmlBb2RYUnBiSE11YVhOVGRHRnVaR0Z5WkVKeWIzZHpaWEpGYm5Zb0tTa2dlMXh1SUNBZ0lDQWdkbUZ5SUdOdmIydHBaWE1nUFNCeVpYRjFhWEpsS0NjdUx5NHVMMmhsYkhCbGNuTXZZMjl2YTJsbGN5Y3BPMXh1WEc0Z0lDQWdJQ0F2THlCQlpHUWdlSE55WmlCb1pXRmtaWEpjYmlBZ0lDQWdJSFpoY2lCNGMzSm1WbUZzZFdVZ1BTQW9ZMjl1Wm1sbkxuZHBkR2hEY21Wa1pXNTBhV0ZzY3lCOGZDQnBjMVZTVEZOaGJXVlBjbWxuYVc0b1kyOXVabWxuTG5WeWJDa3BJQ1ltSUdOdmJtWnBaeTU0YzNKbVEyOXZhMmxsVG1GdFpTQS9YRzRnSUNBZ0lDQWdJQ0FnWTI5dmEybGxjeTV5WldGa0tHTnZibVpwWnk1NGMzSm1RMjl2YTJsbFRtRnRaU2tnT2x4dUlDQWdJQ0FnSUNBZ0lIVnVaR1ZtYVc1bFpEdGNibHh1SUNBZ0lDQWdhV1lnS0hoemNtWldZV3gxWlNrZ2UxeHVJQ0FnSUNBZ0lDQnlaWEYxWlhOMFNHVmhaR1Z5YzF0amIyNW1hV2N1ZUhOeVpraGxZV1JsY2s1aGJXVmRJRDBnZUhOeVpsWmhiSFZsTzF4dUlDQWdJQ0FnZlZ4dUlDQWdJSDFjYmx4dUlDQWdJQzh2SUVGa1pDQm9aV0ZrWlhKeklIUnZJSFJvWlNCeVpYRjFaWE4wWEc0Z0lDQWdhV1lnS0NkelpYUlNaWEYxWlhOMFNHVmhaR1Z5SnlCcGJpQnlaWEYxWlhOMEtTQjdYRzRnSUNBZ0lDQjFkR2xzY3k1bWIzSkZZV05vS0hKbGNYVmxjM1JJWldGa1pYSnpMQ0JtZFc1amRHbHZiaUJ6WlhSU1pYRjFaWE4wU0dWaFpHVnlLSFpoYkN3Z2EyVjVLU0I3WEc0Z0lDQWdJQ0FnSUdsbUlDaDBlWEJsYjJZZ2NtVnhkV1Z6ZEVSaGRHRWdQVDA5SUNkMWJtUmxabWx1WldRbklDWW1JR3RsZVM1MGIweHZkMlZ5UTJGelpTZ3BJRDA5UFNBblkyOXVkR1Z1ZEMxMGVYQmxKeWtnZTF4dUlDQWdJQ0FnSUNBZ0lDOHZJRkpsYlc5MlpTQkRiMjUwWlc1MExWUjVjR1VnYVdZZ1pHRjBZU0JwY3lCMWJtUmxabWx1WldSY2JpQWdJQ0FnSUNBZ0lDQmtaV3hsZEdVZ2NtVnhkV1Z6ZEVobFlXUmxjbk5iYTJWNVhUdGNiaUFnSUNBZ0lDQWdmU0JsYkhObElIdGNiaUFnSUNBZ0lDQWdJQ0F2THlCUGRHaGxjbmRwYzJVZ1lXUmtJR2hsWVdSbGNpQjBieUIwYUdVZ2NtVnhkV1Z6ZEZ4dUlDQWdJQ0FnSUNBZ0lISmxjWFZsYzNRdWMyVjBVbVZ4ZFdWemRFaGxZV1JsY2loclpYa3NJSFpoYkNrN1hHNGdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lIMHBPMXh1SUNBZ0lIMWNibHh1SUNBZ0lDOHZJRUZrWkNCM2FYUm9RM0psWkdWdWRHbGhiSE1nZEc4Z2NtVnhkV1Z6ZENCcFppQnVaV1ZrWldSY2JpQWdJQ0JwWmlBb1kyOXVabWxuTG5kcGRHaERjbVZrWlc1MGFXRnNjeWtnZTF4dUlDQWdJQ0FnY21WeGRXVnpkQzUzYVhSb1EzSmxaR1Z1ZEdsaGJITWdQU0IwY25WbE8xeHVJQ0FnSUgxY2JseHVJQ0FnSUM4dklFRmtaQ0J5WlhOd2IyNXpaVlI1Y0dVZ2RHOGdjbVZ4ZFdWemRDQnBaaUJ1WldWa1pXUmNiaUFnSUNCcFppQW9ZMjl1Wm1sbkxuSmxjM0J2Ym5ObFZIbHdaU2tnZTF4dUlDQWdJQ0FnZEhKNUlIdGNiaUFnSUNBZ0lDQWdjbVZ4ZFdWemRDNXlaWE53YjI1elpWUjVjR1VnUFNCamIyNW1hV2N1Y21WemNHOXVjMlZVZVhCbE8xeHVJQ0FnSUNBZ2ZTQmpZWFJqYUNBb1pTa2dlMXh1SUNBZ0lDQWdJQ0F2THlCRmVIQmxZM1JsWkNCRVQwMUZlR05sY0hScGIyNGdkR2h5YjNkdUlHSjVJR0p5YjNkelpYSnpJRzV2ZENCamIyMXdZWFJwWW14bElGaE5URWgwZEhCU1pYRjFaWE4wSUV4bGRtVnNJREl1WEc0Z0lDQWdJQ0FnSUM4dklFSjFkQ3dnZEdocGN5QmpZVzRnWW1VZ2MzVndjSEpsYzNObFpDQm1iM0lnSjJwemIyNG5JSFI1Y0dVZ1lYTWdhWFFnWTJGdUlHSmxJSEJoY25ObFpDQmllU0JrWldaaGRXeDBJQ2QwY21GdWMyWnZjbTFTWlhOd2IyNXpaU2NnWm5WdVkzUnBiMjR1WEc0Z0lDQWdJQ0FnSUdsbUlDaGpiMjVtYVdjdWNtVnpjRzl1YzJWVWVYQmxJQ0U5UFNBbmFuTnZiaWNwSUh0Y2JpQWdJQ0FnSUNBZ0lDQjBhSEp2ZHlCbE8xeHVJQ0FnSUNBZ0lDQjlYRzRnSUNBZ0lDQjlYRzRnSUNBZ2ZWeHVYRzRnSUNBZ0x5OGdTR0Z1Wkd4bElIQnliMmR5WlhOeklHbG1JRzVsWldSbFpGeHVJQ0FnSUdsbUlDaDBlWEJsYjJZZ1kyOXVabWxuTG05dVJHOTNibXh2WVdSUWNtOW5jbVZ6Y3lBOVBUMGdKMloxYm1OMGFXOXVKeWtnZTF4dUlDQWdJQ0FnY21WeGRXVnpkQzVoWkdSRmRtVnVkRXhwYzNSbGJtVnlLQ2R3Y205bmNtVnpjeWNzSUdOdmJtWnBaeTV2YmtSdmQyNXNiMkZrVUhKdlozSmxjM01wTzF4dUlDQWdJSDFjYmx4dUlDQWdJQzh2SUU1dmRDQmhiR3dnWW5KdmQzTmxjbk1nYzNWd2NHOXlkQ0IxY0d4dllXUWdaWFpsYm5SelhHNGdJQ0FnYVdZZ0tIUjVjR1Z2WmlCamIyNW1hV2N1YjI1VmNHeHZZV1JRY205bmNtVnpjeUE5UFQwZ0oyWjFibU4wYVc5dUp5QW1KaUJ5WlhGMVpYTjBMblZ3Ykc5aFpDa2dlMXh1SUNBZ0lDQWdjbVZ4ZFdWemRDNTFjR3h2WVdRdVlXUmtSWFpsYm5STWFYTjBaVzVsY2lnbmNISnZaM0psYzNNbkxDQmpiMjVtYVdjdWIyNVZjR3h2WVdSUWNtOW5jbVZ6Y3lrN1hHNGdJQ0FnZlZ4dVhHNGdJQ0FnYVdZZ0tHTnZibVpwWnk1allXNWpaV3hVYjJ0bGJpa2dlMXh1SUNBZ0lDQWdMeThnU0dGdVpHeGxJR05oYm1ObGJHeGhkR2x2Ymx4dUlDQWdJQ0FnWTI5dVptbG5MbU5oYm1ObGJGUnZhMlZ1TG5CeWIyMXBjMlV1ZEdobGJpaG1kVzVqZEdsdmJpQnZia05oYm1ObGJHVmtLR05oYm1ObGJDa2dlMXh1SUNBZ0lDQWdJQ0JwWmlBb0lYSmxjWFZsYzNRcElIdGNiaUFnSUNBZ0lDQWdJQ0J5WlhSMWNtNDdYRzRnSUNBZ0lDQWdJSDFjYmx4dUlDQWdJQ0FnSUNCeVpYRjFaWE4wTG1GaWIzSjBLQ2s3WEc0Z0lDQWdJQ0FnSUhKbGFtVmpkQ2hqWVc1alpXd3BPMXh1SUNBZ0lDQWdJQ0F2THlCRGJHVmhiaUIxY0NCeVpYRjFaWE4wWEc0Z0lDQWdJQ0FnSUhKbGNYVmxjM1FnUFNCdWRXeHNPMXh1SUNBZ0lDQWdmU2s3WEc0Z0lDQWdmVnh1WEc0Z0lDQWdhV1lnS0hKbGNYVmxjM1JFWVhSaElEMDlQU0IxYm1SbFptbHVaV1FwSUh0Y2JpQWdJQ0FnSUhKbGNYVmxjM1JFWVhSaElEMGdiblZzYkR0Y2JpQWdJQ0I5WEc1Y2JpQWdJQ0F2THlCVFpXNWtJSFJvWlNCeVpYRjFaWE4wWEc0Z0lDQWdjbVZ4ZFdWemRDNXpaVzVrS0hKbGNYVmxjM1JFWVhSaEtUdGNiaUFnZlNrN1hHNTlPMXh1SWl3aUozVnpaU0J6ZEhKcFkzUW5PMXh1WEc1MllYSWdkWFJwYkhNZ1BTQnlaWEYxYVhKbEtDY3VMM1YwYVd4ekp5azdYRzUyWVhJZ1ltbHVaQ0E5SUhKbGNYVnBjbVVvSnk0dmFHVnNjR1Z5Y3k5aWFXNWtKeWs3WEc1MllYSWdRWGhwYjNNZ1BTQnlaWEYxYVhKbEtDY3VMMk52Y21VdlFYaHBiM01uS1R0Y2JuWmhjaUJrWldaaGRXeDBjeUE5SUhKbGNYVnBjbVVvSnk0dlpHVm1ZWFZzZEhNbktUdGNibHh1THlvcVhHNGdLaUJEY21WaGRHVWdZVzRnYVc1emRHRnVZMlVnYjJZZ1FYaHBiM05jYmlBcVhHNGdLaUJBY0dGeVlXMGdlMDlpYW1WamRIMGdaR1ZtWVhWc2RFTnZibVpwWnlCVWFHVWdaR1ZtWVhWc2RDQmpiMjVtYVdjZ1ptOXlJSFJvWlNCcGJuTjBZVzVqWlZ4dUlDb2dRSEpsZEhWeWJpQjdRWGhwYjNOOUlFRWdibVYzSUdsdWMzUmhibU5sSUc5bUlFRjRhVzl6WEc0Z0tpOWNibVoxYm1OMGFXOXVJR055WldGMFpVbHVjM1JoYm1ObEtHUmxabUYxYkhSRGIyNW1hV2NwSUh0Y2JpQWdkbUZ5SUdOdmJuUmxlSFFnUFNCdVpYY2dRWGhwYjNNb1pHVm1ZWFZzZEVOdmJtWnBaeWs3WEc0Z0lIWmhjaUJwYm5OMFlXNWpaU0E5SUdKcGJtUW9RWGhwYjNNdWNISnZkRzkwZVhCbExuSmxjWFZsYzNRc0lHTnZiblJsZUhRcE8xeHVYRzRnSUM4dklFTnZjSGtnWVhocGIzTXVjSEp2ZEc5MGVYQmxJSFJ2SUdsdWMzUmhibU5sWEc0Z0lIVjBhV3h6TG1WNGRHVnVaQ2hwYm5OMFlXNWpaU3dnUVhocGIzTXVjSEp2ZEc5MGVYQmxMQ0JqYjI1MFpYaDBLVHRjYmx4dUlDQXZMeUJEYjNCNUlHTnZiblJsZUhRZ2RHOGdhVzV6ZEdGdVkyVmNiaUFnZFhScGJITXVaWGgwWlc1a0tHbHVjM1JoYm1ObExDQmpiMjUwWlhoMEtUdGNibHh1SUNCeVpYUjFjbTRnYVc1emRHRnVZMlU3WEc1OVhHNWNiaTh2SUVOeVpXRjBaU0IwYUdVZ1pHVm1ZWFZzZENCcGJuTjBZVzVqWlNCMGJ5QmlaU0JsZUhCdmNuUmxaRnh1ZG1GeUlHRjRhVzl6SUQwZ1kzSmxZWFJsU1c1emRHRnVZMlVvWkdWbVlYVnNkSE1wTzF4dVhHNHZMeUJGZUhCdmMyVWdRWGhwYjNNZ1kyeGhjM01nZEc4Z1lXeHNiM2NnWTJ4aGMzTWdhVzVvWlhKcGRHRnVZMlZjYm1GNGFXOXpMa0Y0YVc5eklEMGdRWGhwYjNNN1hHNWNiaTh2SUVaaFkzUnZjbmtnWm05eUlHTnlaV0YwYVc1bklHNWxkeUJwYm5OMFlXNWpaWE5jYm1GNGFXOXpMbU55WldGMFpTQTlJR1oxYm1OMGFXOXVJR055WldGMFpTaHBibk4wWVc1alpVTnZibVpwWnlrZ2UxeHVJQ0J5WlhSMWNtNGdZM0psWVhSbFNXNXpkR0Z1WTJVb2RYUnBiSE11YldWeVoyVW9aR1ZtWVhWc2RITXNJR2x1YzNSaGJtTmxRMjl1Wm1sbktTazdYRzU5TzF4dVhHNHZMeUJGZUhCdmMyVWdRMkZ1WTJWc0lDWWdRMkZ1WTJWc1ZHOXJaVzVjYm1GNGFXOXpMa05oYm1ObGJDQTlJSEpsY1hWcGNtVW9KeTR2WTJGdVkyVnNMME5oYm1ObGJDY3BPMXh1WVhocGIzTXVRMkZ1WTJWc1ZHOXJaVzRnUFNCeVpYRjFhWEpsS0NjdUwyTmhibU5sYkM5RFlXNWpaV3hVYjJ0bGJpY3BPMXh1WVhocGIzTXVhWE5EWVc1alpXd2dQU0J5WlhGMWFYSmxLQ2N1TDJOaGJtTmxiQzlwYzBOaGJtTmxiQ2NwTzF4dVhHNHZMeUJGZUhCdmMyVWdZV3hzTDNOd2NtVmhaRnh1WVhocGIzTXVZV3hzSUQwZ1puVnVZM1JwYjI0Z1lXeHNLSEJ5YjIxcGMyVnpLU0I3WEc0Z0lISmxkSFZ5YmlCUWNtOXRhWE5sTG1Gc2JDaHdjbTl0YVhObGN5azdYRzU5TzF4dVlYaHBiM011YzNCeVpXRmtJRDBnY21WeGRXbHlaU2duTGk5b1pXeHdaWEp6TDNOd2NtVmhaQ2NwTzF4dVhHNXRiMlIxYkdVdVpYaHdiM0owY3lBOUlHRjRhVzl6TzF4dVhHNHZMeUJCYkd4dmR5QjFjMlVnYjJZZ1pHVm1ZWFZzZENCcGJYQnZjblFnYzNsdWRHRjRJR2x1SUZSNWNHVlRZM0pwY0hSY2JtMXZaSFZzWlM1bGVIQnZjblJ6TG1SbFptRjFiSFFnUFNCaGVHbHZjenRjYmlJc0lpZDFjMlVnYzNSeWFXTjBKenRjYmx4dUx5b3FYRzRnS2lCQklHQkRZVzVqWld4Z0lHbHpJR0Z1SUc5aWFtVmpkQ0IwYUdGMElHbHpJSFJvY205M2JpQjNhR1Z1SUdGdUlHOXdaWEpoZEdsdmJpQnBjeUJqWVc1alpXeGxaQzVjYmlBcVhHNGdLaUJBWTJ4aGMzTmNiaUFxSUVCd1lYSmhiU0I3YzNSeWFXNW5QWDBnYldWemMyRm5aU0JVYUdVZ2JXVnpjMkZuWlM1Y2JpQXFMMXh1Wm5WdVkzUnBiMjRnUTJGdVkyVnNLRzFsYzNOaFoyVXBJSHRjYmlBZ2RHaHBjeTV0WlhOellXZGxJRDBnYldWemMyRm5aVHRjYm4xY2JseHVRMkZ1WTJWc0xuQnliM1J2ZEhsd1pTNTBiMU4wY21sdVp5QTlJR1oxYm1OMGFXOXVJSFJ2VTNSeWFXNW5LQ2tnZTF4dUlDQnlaWFIxY200Z0owTmhibU5sYkNjZ0t5QW9kR2hwY3k1dFpYTnpZV2RsSUQ4Z0p6b2dKeUFySUhSb2FYTXViV1Z6YzJGblpTQTZJQ2NuS1R0Y2JuMDdYRzVjYmtOaGJtTmxiQzV3Y205MGIzUjVjR1V1WDE5RFFVNURSVXhmWHlBOUlIUnlkV1U3WEc1Y2JtMXZaSFZzWlM1bGVIQnZjblJ6SUQwZ1EyRnVZMlZzTzF4dUlpd2lKM1Z6WlNCemRISnBZM1FuTzF4dVhHNTJZWElnUTJGdVkyVnNJRDBnY21WeGRXbHlaU2duTGk5RFlXNWpaV3duS1R0Y2JseHVMeW9xWEc0Z0tpQkJJR0JEWVc1alpXeFViMnRsYm1BZ2FYTWdZVzRnYjJKcVpXTjBJSFJvWVhRZ1kyRnVJR0psSUhWelpXUWdkRzhnY21WeGRXVnpkQ0JqWVc1alpXeHNZWFJwYjI0Z2IyWWdZVzRnYjNCbGNtRjBhVzl1TGx4dUlDcGNiaUFxSUVCamJHRnpjMXh1SUNvZ1FIQmhjbUZ0SUh0R2RXNWpkR2x2Ym4wZ1pYaGxZM1YwYjNJZ1ZHaGxJR1Y0WldOMWRHOXlJR1oxYm1OMGFXOXVMbHh1SUNvdlhHNW1kVzVqZEdsdmJpQkRZVzVqWld4VWIydGxiaWhsZUdWamRYUnZjaWtnZTF4dUlDQnBaaUFvZEhsd1pXOW1JR1Y0WldOMWRHOXlJQ0U5UFNBblpuVnVZM1JwYjI0bktTQjdYRzRnSUNBZ2RHaHliM2NnYm1WM0lGUjVjR1ZGY25KdmNpZ25aWGhsWTNWMGIzSWdiWFZ6ZENCaVpTQmhJR1oxYm1OMGFXOXVMaWNwTzF4dUlDQjlYRzVjYmlBZ2RtRnlJSEpsYzI5c2RtVlFjbTl0YVhObE8xeHVJQ0IwYUdsekxuQnliMjFwYzJVZ1BTQnVaWGNnVUhKdmJXbHpaU2htZFc1amRHbHZiaUJ3Y205dGFYTmxSWGhsWTNWMGIzSW9jbVZ6YjJ4MlpTa2dlMXh1SUNBZ0lISmxjMjlzZG1WUWNtOXRhWE5sSUQwZ2NtVnpiMngyWlR0Y2JpQWdmU2s3WEc1Y2JpQWdkbUZ5SUhSdmEyVnVJRDBnZEdocGN6dGNiaUFnWlhobFkzVjBiM0lvWm5WdVkzUnBiMjRnWTJGdVkyVnNLRzFsYzNOaFoyVXBJSHRjYmlBZ0lDQnBaaUFvZEc5clpXNHVjbVZoYzI5dUtTQjdYRzRnSUNBZ0lDQXZMeUJEWVc1alpXeHNZWFJwYjI0Z2FHRnpJR0ZzY21WaFpIa2dZbVZsYmlCeVpYRjFaWE4wWldSY2JpQWdJQ0FnSUhKbGRIVnlianRjYmlBZ0lDQjlYRzVjYmlBZ0lDQjBiMnRsYmk1eVpXRnpiMjRnUFNCdVpYY2dRMkZ1WTJWc0tHMWxjM05oWjJVcE8xeHVJQ0FnSUhKbGMyOXNkbVZRY205dGFYTmxLSFJ2YTJWdUxuSmxZWE52YmlrN1hHNGdJSDBwTzF4dWZWeHVYRzR2S2lwY2JpQXFJRlJvY205M2N5QmhJR0JEWVc1alpXeGdJR2xtSUdOaGJtTmxiR3hoZEdsdmJpQm9ZWE1nWW1WbGJpQnlaWEYxWlhOMFpXUXVYRzRnS2k5Y2JrTmhibU5sYkZSdmEyVnVMbkJ5YjNSdmRIbHdaUzUwYUhKdmQwbG1VbVZ4ZFdWemRHVmtJRDBnWm5WdVkzUnBiMjRnZEdoeWIzZEpabEpsY1hWbGMzUmxaQ2dwSUh0Y2JpQWdhV1lnS0hSb2FYTXVjbVZoYzI5dUtTQjdYRzRnSUNBZ2RHaHliM2NnZEdocGN5NXlaV0Z6YjI0N1hHNGdJSDFjYm4wN1hHNWNiaThxS2x4dUlDb2dVbVYwZFhKdWN5QmhiaUJ2WW1wbFkzUWdkR2hoZENCamIyNTBZV2x1Y3lCaElHNWxkeUJnUTJGdVkyVnNWRzlyWlc1Z0lHRnVaQ0JoSUdaMWJtTjBhVzl1SUhSb1lYUXNJSGRvWlc0Z1kyRnNiR1ZrTEZ4dUlDb2dZMkZ1WTJWc2N5QjBhR1VnWUVOaGJtTmxiRlJ2YTJWdVlDNWNiaUFxTDF4dVEyRnVZMlZzVkc5clpXNHVjMjkxY21ObElEMGdablZ1WTNScGIyNGdjMjkxY21ObEtDa2dlMXh1SUNCMllYSWdZMkZ1WTJWc08xeHVJQ0IyWVhJZ2RHOXJaVzRnUFNCdVpYY2dRMkZ1WTJWc1ZHOXJaVzRvWm5WdVkzUnBiMjRnWlhobFkzVjBiM0lvWXlrZ2UxeHVJQ0FnSUdOaGJtTmxiQ0E5SUdNN1hHNGdJSDBwTzF4dUlDQnlaWFIxY200Z2UxeHVJQ0FnSUhSdmEyVnVPaUIwYjJ0bGJpeGNiaUFnSUNCallXNWpaV3c2SUdOaGJtTmxiRnh1SUNCOU8xeHVmVHRjYmx4dWJXOWtkV3hsTG1WNGNHOXlkSE1nUFNCRFlXNWpaV3hVYjJ0bGJqdGNiaUlzSWlkMWMyVWdjM1J5YVdOMEp6dGNibHh1Ylc5a2RXeGxMbVY0Y0c5eWRITWdQU0JtZFc1amRHbHZiaUJwYzBOaGJtTmxiQ2gyWVd4MVpTa2dlMXh1SUNCeVpYUjFjbTRnSVNFb2RtRnNkV1VnSmlZZ2RtRnNkV1V1WDE5RFFVNURSVXhmWHlrN1hHNTlPMXh1SWl3aUozVnpaU0J6ZEhKcFkzUW5PMXh1WEc1MllYSWdaR1ZtWVhWc2RITWdQU0J5WlhGMWFYSmxLQ2N1THk0dUwyUmxabUYxYkhSekp5azdYRzUyWVhJZ2RYUnBiSE1nUFNCeVpYRjFhWEpsS0NjdUx5NHVMM1YwYVd4ekp5azdYRzUyWVhJZ1NXNTBaWEpqWlhCMGIzSk5ZVzVoWjJWeUlEMGdjbVZ4ZFdseVpTZ25MaTlKYm5SbGNtTmxjSFJ2Y2sxaGJtRm5aWEluS1R0Y2JuWmhjaUJrYVhOd1lYUmphRkpsY1hWbGMzUWdQU0J5WlhGMWFYSmxLQ2N1TDJScGMzQmhkR05vVW1WeGRXVnpkQ2NwTzF4dVhHNHZLaXBjYmlBcUlFTnlaV0YwWlNCaElHNWxkeUJwYm5OMFlXNWpaU0J2WmlCQmVHbHZjMXh1SUNwY2JpQXFJRUJ3WVhKaGJTQjdUMkpxWldOMGZTQnBibk4wWVc1alpVTnZibVpwWnlCVWFHVWdaR1ZtWVhWc2RDQmpiMjVtYVdjZ1ptOXlJSFJvWlNCcGJuTjBZVzVqWlZ4dUlDb3ZYRzVtZFc1amRHbHZiaUJCZUdsdmN5aHBibk4wWVc1alpVTnZibVpwWnlrZ2UxeHVJQ0IwYUdsekxtUmxabUYxYkhSeklEMGdhVzV6ZEdGdVkyVkRiMjVtYVdjN1hHNGdJSFJvYVhNdWFXNTBaWEpqWlhCMGIzSnpJRDBnZTF4dUlDQWdJSEpsY1hWbGMzUTZJRzVsZHlCSmJuUmxjbU5sY0hSdmNrMWhibUZuWlhJb0tTeGNiaUFnSUNCeVpYTndiMjV6WlRvZ2JtVjNJRWx1ZEdWeVkyVndkRzl5VFdGdVlXZGxjaWdwWEc0Z0lIMDdYRzU5WEc1Y2JpOHFLbHh1SUNvZ1JHbHpjR0YwWTJnZ1lTQnlaWEYxWlhOMFhHNGdLbHh1SUNvZ1FIQmhjbUZ0SUh0UFltcGxZM1I5SUdOdmJtWnBaeUJVYUdVZ1kyOXVabWxuSUhOd1pXTnBabWxqSUdadmNpQjBhR2x6SUhKbGNYVmxjM1FnS0cxbGNtZGxaQ0IzYVhSb0lIUm9hWE11WkdWbVlYVnNkSE1wWEc0Z0tpOWNia0Y0YVc5ekxuQnliM1J2ZEhsd1pTNXlaWEYxWlhOMElEMGdablZ1WTNScGIyNGdjbVZ4ZFdWemRDaGpiMjVtYVdjcElIdGNiaUFnTHlwbGMyeHBiblFnYm04dGNHRnlZVzB0Y21WaGMzTnBaMjQ2TUNvdlhHNGdJQzh2SUVGc2JHOTNJR1p2Y2lCaGVHbHZjeWduWlhoaGJYQnNaUzkxY213bld5d2dZMjl1Wm1sblhTa2dZU0JzWVNCbVpYUmphQ0JCVUVsY2JpQWdhV1lnS0hSNWNHVnZaaUJqYjI1bWFXY2dQVDA5SUNkemRISnBibWNuS1NCN1hHNGdJQ0FnWTI5dVptbG5JRDBnZFhScGJITXViV1Z5WjJVb2UxeHVJQ0FnSUNBZ2RYSnNPaUJoY21kMWJXVnVkSE5iTUYxY2JpQWdJQ0I5TENCaGNtZDFiV1Z1ZEhOYk1WMHBPMXh1SUNCOVhHNWNiaUFnWTI5dVptbG5JRDBnZFhScGJITXViV1Z5WjJVb1pHVm1ZWFZzZEhNc0lIdHRaWFJvYjJRNklDZG5aWFFuZlN3Z2RHaHBjeTVrWldaaGRXeDBjeXdnWTI5dVptbG5LVHRjYmlBZ1kyOXVabWxuTG0xbGRHaHZaQ0E5SUdOdmJtWnBaeTV0WlhSb2IyUXVkRzlNYjNkbGNrTmhjMlVvS1R0Y2JseHVJQ0F2THlCSWIyOXJJSFZ3SUdsdWRHVnlZMlZ3ZEc5eWN5QnRhV1JrYkdWM1lYSmxYRzRnSUhaaGNpQmphR0ZwYmlBOUlGdGthWE53WVhSamFGSmxjWFZsYzNRc0lIVnVaR1ZtYVc1bFpGMDdYRzRnSUhaaGNpQndjbTl0YVhObElEMGdVSEp2YldselpTNXlaWE52YkhabEtHTnZibVpwWnlrN1hHNWNiaUFnZEdocGN5NXBiblJsY21ObGNIUnZjbk11Y21WeGRXVnpkQzVtYjNKRllXTm9LR1oxYm1OMGFXOXVJSFZ1YzJocFpuUlNaWEYxWlhOMFNXNTBaWEpqWlhCMGIzSnpLR2x1ZEdWeVkyVndkRzl5S1NCN1hHNGdJQ0FnWTJoaGFXNHVkVzV6YUdsbWRDaHBiblJsY21ObGNIUnZjaTVtZFd4bWFXeHNaV1FzSUdsdWRHVnlZMlZ3ZEc5eUxuSmxhbVZqZEdWa0tUdGNiaUFnZlNrN1hHNWNiaUFnZEdocGN5NXBiblJsY21ObGNIUnZjbk11Y21WemNHOXVjMlV1Wm05eVJXRmphQ2htZFc1amRHbHZiaUJ3ZFhOb1VtVnpjRzl1YzJWSmJuUmxjbU5sY0hSdmNuTW9hVzUwWlhKalpYQjBiM0lwSUh0Y2JpQWdJQ0JqYUdGcGJpNXdkWE5vS0dsdWRHVnlZMlZ3ZEc5eUxtWjFiR1pwYkd4bFpDd2dhVzUwWlhKalpYQjBiM0l1Y21WcVpXTjBaV1FwTzF4dUlDQjlLVHRjYmx4dUlDQjNhR2xzWlNBb1kyaGhhVzR1YkdWdVozUm9LU0I3WEc0Z0lDQWdjSEp2YldselpTQTlJSEJ5YjIxcGMyVXVkR2hsYmloamFHRnBiaTV6YUdsbWRDZ3BMQ0JqYUdGcGJpNXphR2xtZENncEtUdGNiaUFnZlZ4dVhHNGdJSEpsZEhWeWJpQndjbTl0YVhObE8xeHVmVHRjYmx4dUx5OGdVSEp2ZG1sa1pTQmhiR2xoYzJWeklHWnZjaUJ6ZFhCd2IzSjBaV1FnY21WeGRXVnpkQ0J0WlhSb2IyUnpYRzUxZEdsc2N5NW1iM0pGWVdOb0tGc25aR1ZzWlhSbEp5d2dKMmRsZENjc0lDZG9aV0ZrSnl3Z0oyOXdkR2x2Ym5NblhTd2dablZ1WTNScGIyNGdabTl5UldGamFFMWxkR2h2WkU1dlJHRjBZU2h0WlhSb2IyUXBJSHRjYmlBZ0x5cGxjMnhwYm5RZ1puVnVZeTF1WVcxbGN6b3dLaTljYmlBZ1FYaHBiM011Y0hKdmRHOTBlWEJsVzIxbGRHaHZaRjBnUFNCbWRXNWpkR2x2YmloMWNtd3NJR052Ym1acFp5a2dlMXh1SUNBZ0lISmxkSFZ5YmlCMGFHbHpMbkpsY1hWbGMzUW9kWFJwYkhNdWJXVnlaMlVvWTI5dVptbG5JSHg4SUh0OUxDQjdYRzRnSUNBZ0lDQnRaWFJvYjJRNklHMWxkR2h2WkN4Y2JpQWdJQ0FnSUhWeWJEb2dkWEpzWEc0Z0lDQWdmU2twTzF4dUlDQjlPMXh1ZlNrN1hHNWNiblYwYVd4ekxtWnZja1ZoWTJnb1d5ZHdiM04wSnl3Z0ozQjFkQ2NzSUNkd1lYUmphQ2RkTENCbWRXNWpkR2x2YmlCbWIzSkZZV05vVFdWMGFHOWtWMmwwYUVSaGRHRW9iV1YwYUc5a0tTQjdYRzRnSUM4cVpYTnNhVzUwSUdaMWJtTXRibUZ0WlhNNk1Db3ZYRzRnSUVGNGFXOXpMbkJ5YjNSdmRIbHdaVnR0WlhSb2IyUmRJRDBnWm5WdVkzUnBiMjRvZFhKc0xDQmtZWFJoTENCamIyNW1hV2NwSUh0Y2JpQWdJQ0J5WlhSMWNtNGdkR2hwY3k1eVpYRjFaWE4wS0hWMGFXeHpMbTFsY21kbEtHTnZibVpwWnlCOGZDQjdmU3dnZTF4dUlDQWdJQ0FnYldWMGFHOWtPaUJ0WlhSb2IyUXNYRzRnSUNBZ0lDQjFjbXc2SUhWeWJDeGNiaUFnSUNBZ0lHUmhkR0U2SUdSaGRHRmNiaUFnSUNCOUtTazdYRzRnSUgwN1hHNTlLVHRjYmx4dWJXOWtkV3hsTG1WNGNHOXlkSE1nUFNCQmVHbHZjenRjYmlJc0lpZDFjMlVnYzNSeWFXTjBKenRjYmx4dWRtRnlJSFYwYVd4eklEMGdjbVZ4ZFdseVpTZ25MaTh1TGk5MWRHbHNjeWNwTzF4dVhHNW1kVzVqZEdsdmJpQkpiblJsY21ObGNIUnZjazFoYm1GblpYSW9LU0I3WEc0Z0lIUm9hWE11YUdGdVpHeGxjbk1nUFNCYlhUdGNibjFjYmx4dUx5b3FYRzRnS2lCQlpHUWdZU0J1WlhjZ2FXNTBaWEpqWlhCMGIzSWdkRzhnZEdobElITjBZV05yWEc0Z0tseHVJQ29nUUhCaGNtRnRJSHRHZFc1amRHbHZibjBnWm5Wc1ptbHNiR1ZrSUZSb1pTQm1kVzVqZEdsdmJpQjBieUJvWVc1a2JHVWdZSFJvWlc1Z0lHWnZjaUJoSUdCUWNtOXRhWE5sWUZ4dUlDb2dRSEJoY21GdElIdEdkVzVqZEdsdmJuMGdjbVZxWldOMFpXUWdWR2hsSUdaMWJtTjBhVzl1SUhSdklHaGhibVJzWlNCZ2NtVnFaV04wWUNCbWIzSWdZU0JnVUhKdmJXbHpaV0JjYmlBcVhHNGdLaUJBY21WMGRYSnVJSHRPZFcxaVpYSjlJRUZ1SUVsRUlIVnpaV1FnZEc4Z2NtVnRiM1psSUdsdWRHVnlZMlZ3ZEc5eUlHeGhkR1Z5WEc0Z0tpOWNia2x1ZEdWeVkyVndkRzl5VFdGdVlXZGxjaTV3Y205MGIzUjVjR1V1ZFhObElEMGdablZ1WTNScGIyNGdkWE5sS0daMWJHWnBiR3hsWkN3Z2NtVnFaV04wWldRcElIdGNiaUFnZEdocGN5NW9ZVzVrYkdWeWN5NXdkWE5vS0h0Y2JpQWdJQ0JtZFd4bWFXeHNaV1E2SUdaMWJHWnBiR3hsWkN4Y2JpQWdJQ0J5WldwbFkzUmxaRG9nY21WcVpXTjBaV1JjYmlBZ2ZTazdYRzRnSUhKbGRIVnliaUIwYUdsekxtaGhibVJzWlhKekxteGxibWQwYUNBdElERTdYRzU5TzF4dVhHNHZLaXBjYmlBcUlGSmxiVzkyWlNCaGJpQnBiblJsY21ObGNIUnZjaUJtY205dElIUm9aU0J6ZEdGamExeHVJQ3BjYmlBcUlFQndZWEpoYlNCN1RuVnRZbVZ5ZlNCcFpDQlVhR1VnU1VRZ2RHaGhkQ0IzWVhNZ2NtVjBkWEp1WldRZ1lua2dZSFZ6WldCY2JpQXFMMXh1U1c1MFpYSmpaWEIwYjNKTllXNWhaMlZ5TG5CeWIzUnZkSGx3WlM1bGFtVmpkQ0E5SUdaMWJtTjBhVzl1SUdWcVpXTjBLR2xrS1NCN1hHNGdJR2xtSUNoMGFHbHpMbWhoYm1Sc1pYSnpXMmxrWFNrZ2UxeHVJQ0FnSUhSb2FYTXVhR0Z1Wkd4bGNuTmJhV1JkSUQwZ2JuVnNiRHRjYmlBZ2ZWeHVmVHRjYmx4dUx5b3FYRzRnS2lCSmRHVnlZWFJsSUc5MlpYSWdZV3hzSUhSb1pTQnlaV2RwYzNSbGNtVmtJR2x1ZEdWeVkyVndkRzl5YzF4dUlDcGNiaUFxSUZSb2FYTWdiV1YwYUc5a0lHbHpJSEJoY25ScFkzVnNZWEpzZVNCMWMyVm1kV3dnWm05eUlITnJhWEJ3YVc1bklHOTJaWElnWVc1NVhHNGdLaUJwYm5SbGNtTmxjSFJ2Y25NZ2RHaGhkQ0J0WVhrZ2FHRjJaU0JpWldOdmJXVWdZRzUxYkd4Z0lHTmhiR3hwYm1jZ1lHVnFaV04wWUM1Y2JpQXFYRzRnS2lCQWNHRnlZVzBnZTBaMWJtTjBhVzl1ZlNCbWJpQlVhR1VnWm5WdVkzUnBiMjRnZEc4Z1kyRnNiQ0JtYjNJZ1pXRmphQ0JwYm5SbGNtTmxjSFJ2Y2x4dUlDb3ZYRzVKYm5SbGNtTmxjSFJ2Y2sxaGJtRm5aWEl1Y0hKdmRHOTBlWEJsTG1admNrVmhZMmdnUFNCbWRXNWpkR2x2YmlCbWIzSkZZV05vS0dadUtTQjdYRzRnSUhWMGFXeHpMbVp2Y2tWaFkyZ29kR2hwY3k1b1lXNWtiR1Z5Y3l3Z1puVnVZM1JwYjI0Z1ptOXlSV0ZqYUVoaGJtUnNaWElvYUNrZ2UxeHVJQ0FnSUdsbUlDaG9JQ0U5UFNCdWRXeHNLU0I3WEc0Z0lDQWdJQ0JtYmlob0tUdGNiaUFnSUNCOVhHNGdJSDBwTzF4dWZUdGNibHh1Ylc5a2RXeGxMbVY0Y0c5eWRITWdQU0JKYm5SbGNtTmxjSFJ2Y2sxaGJtRm5aWEk3WEc0aUxDSW5kWE5sSUhOMGNtbGpkQ2M3WEc1Y2JuWmhjaUJsYm1oaGJtTmxSWEp5YjNJZ1BTQnlaWEYxYVhKbEtDY3VMMlZ1YUdGdVkyVkZjbkp2Y2ljcE8xeHVYRzR2S2lwY2JpQXFJRU55WldGMFpTQmhiaUJGY25KdmNpQjNhWFJvSUhSb1pTQnpjR1ZqYVdacFpXUWdiV1Z6YzJGblpTd2dZMjl1Wm1sbkxDQmxjbkp2Y2lCamIyUmxMQ0J5WlhGMVpYTjBJR0Z1WkNCeVpYTndiMjV6WlM1Y2JpQXFYRzRnS2lCQWNHRnlZVzBnZTNOMGNtbHVaMzBnYldWemMyRm5aU0JVYUdVZ1pYSnliM0lnYldWemMyRm5aUzVjYmlBcUlFQndZWEpoYlNCN1QySnFaV04wZlNCamIyNW1hV2NnVkdobElHTnZibVpwWnk1Y2JpQXFJRUJ3WVhKaGJTQjdjM1J5YVc1bmZTQmJZMjlrWlYwZ1ZHaGxJR1Z5Y205eUlHTnZaR1VnS0dadmNpQmxlR0Z0Y0d4bExDQW5SVU5QVGs1QlFrOVNWRVZFSnlrdVhHNGdLaUJBY0dGeVlXMGdlMDlpYW1WamRIMGdXM0psY1hWbGMzUmRJRlJvWlNCeVpYRjFaWE4wTGx4dUlDb2dRSEJoY21GdElIdFBZbXBsWTNSOUlGdHlaWE53YjI1elpWMGdWR2hsSUhKbGMzQnZibk5sTGx4dUlDb2dRSEpsZEhWeWJuTWdlMFZ5Y205eWZTQlVhR1VnWTNKbFlYUmxaQ0JsY25KdmNpNWNiaUFxTDF4dWJXOWtkV3hsTG1WNGNHOXlkSE1nUFNCbWRXNWpkR2x2YmlCamNtVmhkR1ZGY25KdmNpaHRaWE56WVdkbExDQmpiMjVtYVdjc0lHTnZaR1VzSUhKbGNYVmxjM1FzSUhKbGMzQnZibk5sS1NCN1hHNGdJSFpoY2lCbGNuSnZjaUE5SUc1bGR5QkZjbkp2Y2lodFpYTnpZV2RsS1R0Y2JpQWdjbVYwZFhKdUlHVnVhR0Z1WTJWRmNuSnZjaWhsY25KdmNpd2dZMjl1Wm1sbkxDQmpiMlJsTENCeVpYRjFaWE4wTENCeVpYTndiMjV6WlNrN1hHNTlPMXh1SWl3aUozVnpaU0J6ZEhKcFkzUW5PMXh1WEc1MllYSWdkWFJwYkhNZ1BTQnlaWEYxYVhKbEtDY3VMeTR1TDNWMGFXeHpKeWs3WEc1MllYSWdkSEpoYm5ObWIzSnRSR0YwWVNBOUlISmxjWFZwY21Vb0p5NHZkSEpoYm5ObWIzSnRSR0YwWVNjcE8xeHVkbUZ5SUdselEyRnVZMlZzSUQwZ2NtVnhkV2x5WlNnbkxpNHZZMkZ1WTJWc0wybHpRMkZ1WTJWc0p5azdYRzUyWVhJZ1pHVm1ZWFZzZEhNZ1BTQnlaWEYxYVhKbEtDY3VMaTlrWldaaGRXeDBjeWNwTzF4dWRtRnlJR2x6UVdKemIyeDFkR1ZWVWt3Z1BTQnlaWEYxYVhKbEtDY3VMeTR1TDJobGJIQmxjbk12YVhOQlluTnZiSFYwWlZWU1RDY3BPMXh1ZG1GeUlHTnZiV0pwYm1WVlVreHpJRDBnY21WeGRXbHlaU2duTGk4dUxpOW9aV3h3WlhKekwyTnZiV0pwYm1WVlVreHpKeWs3WEc1Y2JpOHFLbHh1SUNvZ1ZHaHliM2R6SUdFZ1lFTmhibU5sYkdBZ2FXWWdZMkZ1WTJWc2JHRjBhVzl1SUdoaGN5QmlaV1Z1SUhKbGNYVmxjM1JsWkM1Y2JpQXFMMXh1Wm5WdVkzUnBiMjRnZEdoeWIzZEpaa05oYm1ObGJHeGhkR2x2YmxKbGNYVmxjM1JsWkNoamIyNW1hV2NwSUh0Y2JpQWdhV1lnS0dOdmJtWnBaeTVqWVc1alpXeFViMnRsYmlrZ2UxeHVJQ0FnSUdOdmJtWnBaeTVqWVc1alpXeFViMnRsYmk1MGFISnZkMGxtVW1WeGRXVnpkR1ZrS0NrN1hHNGdJSDFjYm4xY2JseHVMeW9xWEc0Z0tpQkVhWE53WVhSamFDQmhJSEpsY1hWbGMzUWdkRzhnZEdobElITmxjblpsY2lCMWMybHVaeUIwYUdVZ1kyOXVabWxuZFhKbFpDQmhaR0Z3ZEdWeUxseHVJQ3BjYmlBcUlFQndZWEpoYlNCN2IySnFaV04wZlNCamIyNW1hV2NnVkdobElHTnZibVpwWnlCMGFHRjBJR2x6SUhSdklHSmxJSFZ6WldRZ1ptOXlJSFJvWlNCeVpYRjFaWE4wWEc0Z0tpQkFjbVYwZFhKdWN5QjdVSEp2YldselpYMGdWR2hsSUZCeWIyMXBjMlVnZEc4Z1ltVWdablZzWm1sc2JHVmtYRzRnS2k5Y2JtMXZaSFZzWlM1bGVIQnZjblJ6SUQwZ1puVnVZM1JwYjI0Z1pHbHpjR0YwWTJoU1pYRjFaWE4wS0dOdmJtWnBaeWtnZTF4dUlDQjBhSEp2ZDBsbVEyRnVZMlZzYkdGMGFXOXVVbVZ4ZFdWemRHVmtLR052Ym1acFp5azdYRzVjYmlBZ0x5OGdVM1Z3Y0c5eWRDQmlZWE5sVlZKTUlHTnZibVpwWjF4dUlDQnBaaUFvWTI5dVptbG5MbUpoYzJWVlVrd2dKaVlnSVdselFXSnpiMngxZEdWVlVrd29ZMjl1Wm1sbkxuVnliQ2twSUh0Y2JpQWdJQ0JqYjI1bWFXY3VkWEpzSUQwZ1kyOXRZbWx1WlZWU1RITW9ZMjl1Wm1sbkxtSmhjMlZWVWt3c0lHTnZibVpwWnk1MWNtd3BPMXh1SUNCOVhHNWNiaUFnTHk4Z1JXNXpkWEpsSUdobFlXUmxjbk1nWlhocGMzUmNiaUFnWTI5dVptbG5MbWhsWVdSbGNuTWdQU0JqYjI1bWFXY3VhR1ZoWkdWeWN5QjhmQ0I3ZlR0Y2JseHVJQ0F2THlCVWNtRnVjMlp2Y20wZ2NtVnhkV1Z6ZENCa1lYUmhYRzRnSUdOdmJtWnBaeTVrWVhSaElEMGdkSEpoYm5ObWIzSnRSR0YwWVNoY2JpQWdJQ0JqYjI1bWFXY3VaR0YwWVN4Y2JpQWdJQ0JqYjI1bWFXY3VhR1ZoWkdWeWN5eGNiaUFnSUNCamIyNW1hV2N1ZEhKaGJuTm1iM0p0VW1WeGRXVnpkRnh1SUNBcE8xeHVYRzRnSUM4dklFWnNZWFIwWlc0Z2FHVmhaR1Z5YzF4dUlDQmpiMjVtYVdjdWFHVmhaR1Z5Y3lBOUlIVjBhV3h6TG0xbGNtZGxLRnh1SUNBZ0lHTnZibVpwWnk1b1pXRmtaWEp6TG1OdmJXMXZiaUI4ZkNCN2ZTeGNiaUFnSUNCamIyNW1hV2N1YUdWaFpHVnljMXRqYjI1bWFXY3ViV1YwYUc5a1hTQjhmQ0I3ZlN4Y2JpQWdJQ0JqYjI1bWFXY3VhR1ZoWkdWeWN5QjhmQ0I3ZlZ4dUlDQXBPMXh1WEc0Z0lIVjBhV3h6TG1admNrVmhZMmdvWEc0Z0lDQWdXeWRrWld4bGRHVW5MQ0FuWjJWMEp5d2dKMmhsWVdRbkxDQW5jRzl6ZENjc0lDZHdkWFFuTENBbmNHRjBZMmduTENBblkyOXRiVzl1SjEwc1hHNGdJQ0FnWm5WdVkzUnBiMjRnWTJ4bFlXNUlaV0ZrWlhKRGIyNW1hV2NvYldWMGFHOWtLU0I3WEc0Z0lDQWdJQ0JrWld4bGRHVWdZMjl1Wm1sbkxtaGxZV1JsY25OYmJXVjBhRzlrWFR0Y2JpQWdJQ0I5WEc0Z0lDazdYRzVjYmlBZ2RtRnlJR0ZrWVhCMFpYSWdQU0JqYjI1bWFXY3VZV1JoY0hSbGNpQjhmQ0JrWldaaGRXeDBjeTVoWkdGd2RHVnlPMXh1WEc0Z0lISmxkSFZ5YmlCaFpHRndkR1Z5S0dOdmJtWnBaeWt1ZEdobGJpaG1kVzVqZEdsdmJpQnZia0ZrWVhCMFpYSlNaWE52YkhWMGFXOXVLSEpsYzNCdmJuTmxLU0I3WEc0Z0lDQWdkR2h5YjNkSlprTmhibU5sYkd4aGRHbHZibEpsY1hWbGMzUmxaQ2hqYjI1bWFXY3BPMXh1WEc0Z0lDQWdMeThnVkhKaGJuTm1iM0p0SUhKbGMzQnZibk5sSUdSaGRHRmNiaUFnSUNCeVpYTndiMjV6WlM1a1lYUmhJRDBnZEhKaGJuTm1iM0p0UkdGMFlTaGNiaUFnSUNBZ0lISmxjM0J2Ym5ObExtUmhkR0VzWEc0Z0lDQWdJQ0J5WlhOd2IyNXpaUzVvWldGa1pYSnpMRnh1SUNBZ0lDQWdZMjl1Wm1sbkxuUnlZVzV6Wm05eWJWSmxjM0J2Ym5ObFhHNGdJQ0FnS1R0Y2JseHVJQ0FnSUhKbGRIVnliaUJ5WlhOd2IyNXpaVHRjYmlBZ2ZTd2dablZ1WTNScGIyNGdiMjVCWkdGd2RHVnlVbVZxWldOMGFXOXVLSEpsWVhOdmJpa2dlMXh1SUNBZ0lHbG1JQ2doYVhORFlXNWpaV3dvY21WaGMyOXVLU2tnZTF4dUlDQWdJQ0FnZEdoeWIzZEpaa05oYm1ObGJHeGhkR2x2YmxKbGNYVmxjM1JsWkNoamIyNW1hV2NwTzF4dVhHNGdJQ0FnSUNBdkx5QlVjbUZ1YzJadmNtMGdjbVZ6Y0c5dWMyVWdaR0YwWVZ4dUlDQWdJQ0FnYVdZZ0tISmxZWE52YmlBbUppQnlaV0Z6YjI0dWNtVnpjRzl1YzJVcElIdGNiaUFnSUNBZ0lDQWdjbVZoYzI5dUxuSmxjM0J2Ym5ObExtUmhkR0VnUFNCMGNtRnVjMlp2Y20xRVlYUmhLRnh1SUNBZ0lDQWdJQ0FnSUhKbFlYTnZiaTV5WlhOd2IyNXpaUzVrWVhSaExGeHVJQ0FnSUNBZ0lDQWdJSEpsWVhOdmJpNXlaWE53YjI1elpTNW9aV0ZrWlhKekxGeHVJQ0FnSUNBZ0lDQWdJR052Ym1acFp5NTBjbUZ1YzJadmNtMVNaWE53YjI1elpWeHVJQ0FnSUNBZ0lDQXBPMXh1SUNBZ0lDQWdmVnh1SUNBZ0lIMWNibHh1SUNBZ0lISmxkSFZ5YmlCUWNtOXRhWE5sTG5KbGFtVmpkQ2h5WldGemIyNHBPMXh1SUNCOUtUdGNibjA3WEc0aUxDSW5kWE5sSUhOMGNtbGpkQ2M3WEc1Y2JpOHFLbHh1SUNvZ1ZYQmtZWFJsSUdGdUlFVnljbTl5SUhkcGRHZ2dkR2hsSUhOd1pXTnBabWxsWkNCamIyNW1hV2NzSUdWeWNtOXlJR052WkdVc0lHRnVaQ0J5WlhOd2IyNXpaUzVjYmlBcVhHNGdLaUJBY0dGeVlXMGdlMFZ5Y205eWZTQmxjbkp2Y2lCVWFHVWdaWEp5YjNJZ2RHOGdkWEJrWVhSbExseHVJQ29nUUhCaGNtRnRJSHRQWW1wbFkzUjlJR052Ym1acFp5QlVhR1VnWTI5dVptbG5MbHh1SUNvZ1FIQmhjbUZ0SUh0emRISnBibWQ5SUZ0amIyUmxYU0JVYUdVZ1pYSnliM0lnWTI5a1pTQW9abTl5SUdWNFlXMXdiR1VzSUNkRlEwOU9Ua0ZDVDFKVVJVUW5LUzVjYmlBcUlFQndZWEpoYlNCN1QySnFaV04wZlNCYmNtVnhkV1Z6ZEYwZ1ZHaGxJSEpsY1hWbGMzUXVYRzRnS2lCQWNHRnlZVzBnZTA5aWFtVmpkSDBnVzNKbGMzQnZibk5sWFNCVWFHVWdjbVZ6Y0c5dWMyVXVYRzRnS2lCQWNtVjBkWEp1Y3lCN1JYSnliM0o5SUZSb1pTQmxjbkp2Y2k1Y2JpQXFMMXh1Ylc5a2RXeGxMbVY0Y0c5eWRITWdQU0JtZFc1amRHbHZiaUJsYm1oaGJtTmxSWEp5YjNJb1pYSnliM0lzSUdOdmJtWnBaeXdnWTI5a1pTd2djbVZ4ZFdWemRDd2djbVZ6Y0c5dWMyVXBJSHRjYmlBZ1pYSnliM0l1WTI5dVptbG5JRDBnWTI5dVptbG5PMXh1SUNCcFppQW9ZMjlrWlNrZ2UxeHVJQ0FnSUdWeWNtOXlMbU52WkdVZ1BTQmpiMlJsTzF4dUlDQjlYRzRnSUdWeWNtOXlMbkpsY1hWbGMzUWdQU0J5WlhGMVpYTjBPMXh1SUNCbGNuSnZjaTV5WlhOd2IyNXpaU0E5SUhKbGMzQnZibk5sTzF4dUlDQnlaWFIxY200Z1pYSnliM0k3WEc1OU8xeHVJaXdpSjNWelpTQnpkSEpwWTNRbk8xeHVYRzUyWVhJZ1kzSmxZWFJsUlhKeWIzSWdQU0J5WlhGMWFYSmxLQ2N1TDJOeVpXRjBaVVZ5Y205eUp5azdYRzVjYmk4cUtseHVJQ29nVW1WemIyeDJaU0J2Y2lCeVpXcGxZM1FnWVNCUWNtOXRhWE5sSUdKaGMyVmtJRzl1SUhKbGMzQnZibk5sSUhOMFlYUjFjeTVjYmlBcVhHNGdLaUJBY0dGeVlXMGdlMFoxYm1OMGFXOXVmU0J5WlhOdmJIWmxJRUVnWm5WdVkzUnBiMjRnZEdoaGRDQnlaWE52YkhabGN5QjBhR1VnY0hKdmJXbHpaUzVjYmlBcUlFQndZWEpoYlNCN1JuVnVZM1JwYjI1OUlISmxhbVZqZENCQklHWjFibU4wYVc5dUlIUm9ZWFFnY21WcVpXTjBjeUIwYUdVZ2NISnZiV2x6WlM1Y2JpQXFJRUJ3WVhKaGJTQjdiMkpxWldOMGZTQnlaWE53YjI1elpTQlVhR1VnY21WemNHOXVjMlV1WEc0Z0tpOWNibTF2WkhWc1pTNWxlSEJ2Y25SeklEMGdablZ1WTNScGIyNGdjMlYwZEd4bEtISmxjMjlzZG1Vc0lISmxhbVZqZEN3Z2NtVnpjRzl1YzJVcElIdGNiaUFnZG1GeUlIWmhiR2xrWVhSbFUzUmhkSFZ6SUQwZ2NtVnpjRzl1YzJVdVkyOXVabWxuTG5aaGJHbGtZWFJsVTNSaGRIVnpPMXh1SUNBdkx5Qk9iM1JsT2lCemRHRjBkWE1nYVhNZ2JtOTBJR1Y0Y0c5elpXUWdZbmtnV0VSdmJXRnBibEpsY1hWbGMzUmNiaUFnYVdZZ0tDRnlaWE53YjI1elpTNXpkR0YwZFhNZ2ZId2dJWFpoYkdsa1lYUmxVM1JoZEhWeklIeDhJSFpoYkdsa1lYUmxVM1JoZEhWektISmxjM0J2Ym5ObExuTjBZWFIxY3lrcElIdGNiaUFnSUNCeVpYTnZiSFpsS0hKbGMzQnZibk5sS1R0Y2JpQWdmU0JsYkhObElIdGNiaUFnSUNCeVpXcGxZM1FvWTNKbFlYUmxSWEp5YjNJb1hHNGdJQ0FnSUNBblVtVnhkV1Z6ZENCbVlXbHNaV1FnZDJsMGFDQnpkR0YwZFhNZ1kyOWtaU0FuSUNzZ2NtVnpjRzl1YzJVdWMzUmhkSFZ6TEZ4dUlDQWdJQ0FnY21WemNHOXVjMlV1WTI5dVptbG5MRnh1SUNBZ0lDQWdiblZzYkN4Y2JpQWdJQ0FnSUhKbGMzQnZibk5sTG5KbGNYVmxjM1FzWEc0Z0lDQWdJQ0J5WlhOd2IyNXpaVnh1SUNBZ0lDa3BPMXh1SUNCOVhHNTlPMXh1SWl3aUozVnpaU0J6ZEhKcFkzUW5PMXh1WEc1MllYSWdkWFJwYkhNZ1BTQnlaWEYxYVhKbEtDY3VMeTR1TDNWMGFXeHpKeWs3WEc1Y2JpOHFLbHh1SUNvZ1ZISmhibk5tYjNKdElIUm9aU0JrWVhSaElHWnZjaUJoSUhKbGNYVmxjM1FnYjNJZ1lTQnlaWE53YjI1elpWeHVJQ3BjYmlBcUlFQndZWEpoYlNCN1QySnFaV04wZkZOMGNtbHVaMzBnWkdGMFlTQlVhR1VnWkdGMFlTQjBieUJpWlNCMGNtRnVjMlp2Y20xbFpGeHVJQ29nUUhCaGNtRnRJSHRCY25KaGVYMGdhR1ZoWkdWeWN5QlVhR1VnYUdWaFpHVnljeUJtYjNJZ2RHaGxJSEpsY1hWbGMzUWdiM0lnY21WemNHOXVjMlZjYmlBcUlFQndZWEpoYlNCN1FYSnlZWGw4Um5WdVkzUnBiMjU5SUdadWN5QkJJSE5wYm1kc1pTQm1kVzVqZEdsdmJpQnZjaUJCY25KaGVTQnZaaUJtZFc1amRHbHZibk5jYmlBcUlFQnlaWFIxY201eklIc3FmU0JVYUdVZ2NtVnpkV3gwYVc1bklIUnlZVzV6Wm05eWJXVmtJR1JoZEdGY2JpQXFMMXh1Ylc5a2RXeGxMbVY0Y0c5eWRITWdQU0JtZFc1amRHbHZiaUIwY21GdWMyWnZjbTFFWVhSaEtHUmhkR0VzSUdobFlXUmxjbk1zSUdadWN5a2dlMXh1SUNBdkttVnpiR2x1ZENCdWJ5MXdZWEpoYlMxeVpXRnpjMmxuYmpvd0tpOWNiaUFnZFhScGJITXVabTl5UldGamFDaG1ibk1zSUdaMWJtTjBhVzl1SUhSeVlXNXpabTl5YlNobWJpa2dlMXh1SUNBZ0lHUmhkR0VnUFNCbWJpaGtZWFJoTENCb1pXRmtaWEp6S1R0Y2JpQWdmU2s3WEc1Y2JpQWdjbVYwZFhKdUlHUmhkR0U3WEc1OU8xeHVJaXdpSjNWelpTQnpkSEpwWTNRbk8xeHVYRzUyWVhJZ2RYUnBiSE1nUFNCeVpYRjFhWEpsS0NjdUwzVjBhV3h6SnlrN1hHNTJZWElnYm05eWJXRnNhWHBsU0dWaFpHVnlUbUZ0WlNBOUlISmxjWFZwY21Vb0p5NHZhR1ZzY0dWeWN5OXViM0p0WVd4cGVtVklaV0ZrWlhKT1lXMWxKeWs3WEc1Y2JuWmhjaUJFUlVaQlZVeFVYME5QVGxSRlRsUmZWRmxRUlNBOUlIdGNiaUFnSjBOdmJuUmxiblF0Vkhsd1pTYzZJQ2RoY0hCc2FXTmhkR2x2Ymk5NExYZDNkeTFtYjNKdExYVnliR1Z1WTI5a1pXUW5YRzU5TzF4dVhHNW1kVzVqZEdsdmJpQnpaWFJEYjI1MFpXNTBWSGx3WlVsbVZXNXpaWFFvYUdWaFpHVnljeXdnZG1Gc2RXVXBJSHRjYmlBZ2FXWWdLQ0YxZEdsc2N5NXBjMVZ1WkdWbWFXNWxaQ2hvWldGa1pYSnpLU0FtSmlCMWRHbHNjeTVwYzFWdVpHVm1hVzVsWkNob1pXRmtaWEp6V3lkRGIyNTBaVzUwTFZSNWNHVW5YU2twSUh0Y2JpQWdJQ0JvWldGa1pYSnpXeWREYjI1MFpXNTBMVlI1Y0dVblhTQTlJSFpoYkhWbE8xeHVJQ0I5WEc1OVhHNWNibVoxYm1OMGFXOXVJR2RsZEVSbFptRjFiSFJCWkdGd2RHVnlLQ2tnZTF4dUlDQjJZWElnWVdSaGNIUmxjanRjYmlBZ2FXWWdLSFI1Y0dWdlppQllUVXhJZEhSd1VtVnhkV1Z6ZENBaFBUMGdKM1Z1WkdWbWFXNWxaQ2NwSUh0Y2JpQWdJQ0F2THlCR2IzSWdZbkp2ZDNObGNuTWdkWE5sSUZoSVVpQmhaR0Z3ZEdWeVhHNGdJQ0FnWVdSaGNIUmxjaUE5SUhKbGNYVnBjbVVvSnk0dllXUmhjSFJsY25NdmVHaHlKeWs3WEc0Z0lIMGdaV3h6WlNCcFppQW9kSGx3Wlc5bUlIQnliMk5sYzNNZ0lUMDlJQ2QxYm1SbFptbHVaV1FuS1NCN1hHNGdJQ0FnTHk4Z1JtOXlJRzV2WkdVZ2RYTmxJRWhVVkZBZ1lXUmhjSFJsY2x4dUlDQWdJR0ZrWVhCMFpYSWdQU0J5WlhGMWFYSmxLQ2N1TDJGa1lYQjBaWEp6TDJoMGRIQW5LVHRjYmlBZ2ZWeHVJQ0J5WlhSMWNtNGdZV1JoY0hSbGNqdGNibjFjYmx4dWRtRnlJR1JsWm1GMWJIUnpJRDBnZTF4dUlDQmhaR0Z3ZEdWeU9pQm5aWFJFWldaaGRXeDBRV1JoY0hSbGNpZ3BMRnh1WEc0Z0lIUnlZVzV6Wm05eWJWSmxjWFZsYzNRNklGdG1kVzVqZEdsdmJpQjBjbUZ1YzJadmNtMVNaWEYxWlhOMEtHUmhkR0VzSUdobFlXUmxjbk1wSUh0Y2JpQWdJQ0J1YjNKdFlXeHBlbVZJWldGa1pYSk9ZVzFsS0dobFlXUmxjbk1zSUNkRGIyNTBaVzUwTFZSNWNHVW5LVHRjYmlBZ0lDQnBaaUFvZFhScGJITXVhWE5HYjNKdFJHRjBZU2hrWVhSaEtTQjhmRnh1SUNBZ0lDQWdkWFJwYkhNdWFYTkJjbkpoZVVKMVptWmxjaWhrWVhSaEtTQjhmRnh1SUNBZ0lDQWdkWFJwYkhNdWFYTkNkV1ptWlhJb1pHRjBZU2tnZkh4Y2JpQWdJQ0FnSUhWMGFXeHpMbWx6VTNSeVpXRnRLR1JoZEdFcElIeDhYRzRnSUNBZ0lDQjFkR2xzY3k1cGMwWnBiR1VvWkdGMFlTa2dmSHhjYmlBZ0lDQWdJSFYwYVd4ekxtbHpRbXh2WWloa1lYUmhLVnh1SUNBZ0lDa2dlMXh1SUNBZ0lDQWdjbVYwZFhKdUlHUmhkR0U3WEc0Z0lDQWdmVnh1SUNBZ0lHbG1JQ2gxZEdsc2N5NXBjMEZ5Y21GNVFuVm1abVZ5Vm1sbGR5aGtZWFJoS1NrZ2UxeHVJQ0FnSUNBZ2NtVjBkWEp1SUdSaGRHRXVZblZtWm1WeU8xeHVJQ0FnSUgxY2JpQWdJQ0JwWmlBb2RYUnBiSE11YVhOVlVreFRaV0Z5WTJoUVlYSmhiWE1vWkdGMFlTa3BJSHRjYmlBZ0lDQWdJSE5sZEVOdmJuUmxiblJVZVhCbFNXWlZibk5sZENob1pXRmtaWEp6TENBbllYQndiR2xqWVhScGIyNHZlQzEzZDNjdFptOXliUzExY214bGJtTnZaR1ZrTzJOb1lYSnpaWFE5ZFhSbUxUZ25LVHRjYmlBZ0lDQWdJSEpsZEhWeWJpQmtZWFJoTG5SdlUzUnlhVzVuS0NrN1hHNGdJQ0FnZlZ4dUlDQWdJR2xtSUNoMWRHbHNjeTVwYzA5aWFtVmpkQ2hrWVhSaEtTa2dlMXh1SUNBZ0lDQWdjMlYwUTI5dWRHVnVkRlI1Y0dWSlpsVnVjMlYwS0dobFlXUmxjbk1zSUNkaGNIQnNhV05oZEdsdmJpOXFjMjl1TzJOb1lYSnpaWFE5ZFhSbUxUZ25LVHRjYmlBZ0lDQWdJSEpsZEhWeWJpQktVMDlPTG5OMGNtbHVaMmxtZVNoa1lYUmhLVHRjYmlBZ0lDQjlYRzRnSUNBZ2NtVjBkWEp1SUdSaGRHRTdYRzRnSUgxZExGeHVYRzRnSUhSeVlXNXpabTl5YlZKbGMzQnZibk5sT2lCYlpuVnVZM1JwYjI0Z2RISmhibk5tYjNKdFVtVnpjRzl1YzJVb1pHRjBZU2tnZTF4dUlDQWdJQzhxWlhOc2FXNTBJRzV2TFhCaGNtRnRMWEpsWVhOemFXZHVPakFxTDF4dUlDQWdJR2xtSUNoMGVYQmxiMllnWkdGMFlTQTlQVDBnSjNOMGNtbHVaeWNwSUh0Y2JpQWdJQ0FnSUhSeWVTQjdYRzRnSUNBZ0lDQWdJR1JoZEdFZ1BTQktVMDlPTG5CaGNuTmxLR1JoZEdFcE8xeHVJQ0FnSUNBZ2ZTQmpZWFJqYUNBb1pTa2dleUF2S2lCSloyNXZjbVVnS2k4Z2ZWeHVJQ0FnSUgxY2JpQWdJQ0J5WlhSMWNtNGdaR0YwWVR0Y2JpQWdmVjBzWEc1Y2JpQWdMeW9xWEc0Z0lDQXFJRUVnZEdsdFpXOTFkQ0JwYmlCdGFXeHNhWE5sWTI5dVpITWdkRzhnWVdKdmNuUWdZU0J5WlhGMVpYTjBMaUJKWmlCelpYUWdkRzhnTUNBb1pHVm1ZWFZzZENrZ1lWeHVJQ0FnS2lCMGFXMWxiM1YwSUdseklHNXZkQ0JqY21WaGRHVmtMbHh1SUNBZ0tpOWNiaUFnZEdsdFpXOTFkRG9nTUN4Y2JseHVJQ0I0YzNKbVEyOXZhMmxsVG1GdFpUb2dKMWhUVWtZdFZFOUxSVTRuTEZ4dUlDQjRjM0ptU0dWaFpHVnlUbUZ0WlRvZ0oxZ3RXRk5TUmkxVVQwdEZUaWNzWEc1Y2JpQWdiV0Y0UTI5dWRHVnVkRXhsYm1kMGFEb2dMVEVzWEc1Y2JpQWdkbUZzYVdSaGRHVlRkR0YwZFhNNklHWjFibU4wYVc5dUlIWmhiR2xrWVhSbFUzUmhkSFZ6S0hOMFlYUjFjeWtnZTF4dUlDQWdJSEpsZEhWeWJpQnpkR0YwZFhNZ1BqMGdNakF3SUNZbUlITjBZWFIxY3lBOElETXdNRHRjYmlBZ2ZWeHVmVHRjYmx4dVpHVm1ZWFZzZEhNdWFHVmhaR1Z5Y3lBOUlIdGNiaUFnWTI5dGJXOXVPaUI3WEc0Z0lDQWdKMEZqWTJWd2RDYzZJQ2RoY0hCc2FXTmhkR2x2Ymk5cWMyOXVMQ0IwWlhoMEwzQnNZV2x1TENBcUx5b25YRzRnSUgxY2JuMDdYRzVjYm5WMGFXeHpMbVp2Y2tWaFkyZ29XeWRrWld4bGRHVW5MQ0FuWjJWMEp5d2dKMmhsWVdRblhTd2dablZ1WTNScGIyNGdabTl5UldGamFFMWxkR2h2WkU1dlJHRjBZU2h0WlhSb2IyUXBJSHRjYmlBZ1pHVm1ZWFZzZEhNdWFHVmhaR1Z5YzF0dFpYUm9iMlJkSUQwZ2UzMDdYRzU5S1R0Y2JseHVkWFJwYkhNdVptOXlSV0ZqYUNoYkozQnZjM1FuTENBbmNIVjBKeXdnSjNCaGRHTm9KMTBzSUdaMWJtTjBhVzl1SUdadmNrVmhZMmhOWlhSb2IyUlhhWFJvUkdGMFlTaHRaWFJvYjJRcElIdGNiaUFnWkdWbVlYVnNkSE11YUdWaFpHVnljMXR0WlhSb2IyUmRJRDBnZFhScGJITXViV1Z5WjJVb1JFVkdRVlZNVkY5RFQwNVVSVTVVWDFSWlVFVXBPMXh1ZlNrN1hHNWNibTF2WkhWc1pTNWxlSEJ2Y25SeklEMGdaR1ZtWVhWc2RITTdYRzRpTENJbmRYTmxJSE4wY21samRDYzdYRzVjYm0xdlpIVnNaUzVsZUhCdmNuUnpJRDBnWm5WdVkzUnBiMjRnWW1sdVpDaG1iaXdnZEdocGMwRnlaeWtnZTF4dUlDQnlaWFIxY200Z1puVnVZM1JwYjI0Z2QzSmhjQ2dwSUh0Y2JpQWdJQ0IyWVhJZ1lYSm5jeUE5SUc1bGR5QkJjbkpoZVNoaGNtZDFiV1Z1ZEhNdWJHVnVaM1JvS1R0Y2JpQWdJQ0JtYjNJZ0tIWmhjaUJwSUQwZ01Ec2dhU0E4SUdGeVozTXViR1Z1WjNSb095QnBLeXNwSUh0Y2JpQWdJQ0FnSUdGeVozTmJhVjBnUFNCaGNtZDFiV1Z1ZEhOYmFWMDdYRzRnSUNBZ2ZWeHVJQ0FnSUhKbGRIVnliaUJtYmk1aGNIQnNlU2gwYUdselFYSm5MQ0JoY21kektUdGNiaUFnZlR0Y2JuMDdYRzRpTENJbmRYTmxJSE4wY21samRDYzdYRzVjYmk4dklHSjBiMkVnY0c5c2VXWnBiR3dnWm05eUlFbEZQREV3SUdOdmRYSjBaWE41SUdoMGRIQnpPaTh2WjJsMGFIVmlMbU52YlM5a1lYWnBaR05vWVcxaVpYSnpMMEpoYzJVMk5DNXFjMXh1WEc1MllYSWdZMmhoY25NZ1BTQW5RVUpEUkVWR1IwaEpTa3RNVFU1UFVGRlNVMVJWVmxkWVdWcGhZbU5rWldabmFHbHFhMnh0Ym05d2NYSnpkSFYyZDNoNWVqQXhNak0wTlRZM09Ea3JMejBuTzF4dVhHNW1kVzVqZEdsdmJpQkZLQ2tnZTF4dUlDQjBhR2x6TG0xbGMzTmhaMlVnUFNBblUzUnlhVzVuSUdOdmJuUmhhVzV6SUdGdUlHbHVkbUZzYVdRZ1kyaGhjbUZqZEdWeUp6dGNibjFjYmtVdWNISnZkRzkwZVhCbElEMGdibVYzSUVWeWNtOXlPMXh1UlM1d2NtOTBiM1I1Y0dVdVkyOWtaU0E5SURVN1hHNUZMbkJ5YjNSdmRIbHdaUzV1WVcxbElEMGdKMGx1ZG1Gc2FXUkRhR0Z5WVdOMFpYSkZjbkp2Y2ljN1hHNWNibVoxYm1OMGFXOXVJR0owYjJFb2FXNXdkWFFwSUh0Y2JpQWdkbUZ5SUhOMGNpQTlJRk4wY21sdVp5aHBibkIxZENrN1hHNGdJSFpoY2lCdmRYUndkWFFnUFNBbkp6dGNiaUFnWm05eUlDaGNiaUFnSUNBdkx5QnBibWwwYVdGc2FYcGxJSEpsYzNWc2RDQmhibVFnWTI5MWJuUmxjbHh1SUNBZ0lIWmhjaUJpYkc5amF5d2dZMmhoY2tOdlpHVXNJR2xrZUNBOUlEQXNJRzFoY0NBOUlHTm9ZWEp6TzF4dUlDQWdJQzh2SUdsbUlIUm9aU0J1WlhoMElITjBjaUJwYm1SbGVDQmtiMlZ6SUc1dmRDQmxlR2x6ZERwY2JpQWdJQ0F2THlBZ0lHTm9ZVzVuWlNCMGFHVWdiV0Z3Y0dsdVp5QjBZV0pzWlNCMGJ5QmNJajFjSWx4dUlDQWdJQzh2SUNBZ1kyaGxZMnNnYVdZZ1pDQm9ZWE1nYm04Z1puSmhZM1JwYjI1aGJDQmthV2RwZEhOY2JpQWdJQ0J6ZEhJdVkyaGhja0YwS0dsa2VDQjhJREFwSUh4OElDaHRZWEFnUFNBblBTY3NJR2xrZUNBbElERXBPMXh1SUNBZ0lDOHZJRndpT0NBdElHbGtlQ0FsSURFZ0tpQTRYQ0lnWjJWdVpYSmhkR1Z6SUhSb1pTQnpaWEYxWlc1alpTQXlMQ0EwTENBMkxDQTRYRzRnSUNBZ2IzVjBjSFYwSUNzOUlHMWhjQzVqYUdGeVFYUW9Oak1nSmlCaWJHOWpheUErUGlBNElDMGdhV1I0SUNVZ01TQXFJRGdwWEc0Z0lDa2dlMXh1SUNBZ0lHTm9ZWEpEYjJSbElEMGdjM1J5TG1Ob1lYSkRiMlJsUVhRb2FXUjRJQ3M5SURNZ0x5QTBLVHRjYmlBZ0lDQnBaaUFvWTJoaGNrTnZaR1VnUGlBd2VFWkdLU0I3WEc0Z0lDQWdJQ0IwYUhKdmR5QnVaWGNnUlNncE8xeHVJQ0FnSUgxY2JpQWdJQ0JpYkc5amF5QTlJR0pzYjJOcklEdzhJRGdnZkNCamFHRnlRMjlrWlR0Y2JpQWdmVnh1SUNCeVpYUjFjbTRnYjNWMGNIVjBPMXh1ZlZ4dVhHNXRiMlIxYkdVdVpYaHdiM0owY3lBOUlHSjBiMkU3WEc0aUxDSW5kWE5sSUhOMGNtbGpkQ2M3WEc1Y2JuWmhjaUIxZEdsc2N5QTlJSEpsY1hWcGNtVW9KeTR2TGk0dmRYUnBiSE1uS1R0Y2JseHVablZ1WTNScGIyNGdaVzVqYjJSbEtIWmhiQ2tnZTF4dUlDQnlaWFIxY200Z1pXNWpiMlJsVlZKSlEyOXRjRzl1Wlc1MEtIWmhiQ2t1WEc0Z0lDQWdjbVZ3YkdGalpTZ3ZKVFF3TDJkcExDQW5RQ2NwTGx4dUlDQWdJSEpsY0d4aFkyVW9MeVV6UVM5bmFTd2dKem9uS1M1Y2JpQWdJQ0J5WlhCc1lXTmxLQzhsTWpRdlp5d2dKeVFuS1M1Y2JpQWdJQ0J5WlhCc1lXTmxLQzhsTWtNdloya3NJQ2NzSnlrdVhHNGdJQ0FnY21Wd2JHRmpaU2d2SlRJd0wyY3NJQ2NySnlrdVhHNGdJQ0FnY21Wd2JHRmpaU2d2SlRWQ0wyZHBMQ0FuV3ljcExseHVJQ0FnSUhKbGNHeGhZMlVvTHlVMVJDOW5hU3dnSjEwbktUdGNibjFjYmx4dUx5b3FYRzRnS2lCQ2RXbHNaQ0JoSUZWU1RDQmllU0JoY0hCbGJtUnBibWNnY0dGeVlXMXpJSFJ2SUhSb1pTQmxibVJjYmlBcVhHNGdLaUJBY0dGeVlXMGdlM04wY21sdVozMGdkWEpzSUZSb1pTQmlZWE5sSUc5bUlIUm9aU0IxY213Z0tHVXVaeTRzSUdoMGRIQTZMeTkzZDNjdVoyOXZaMnhsTG1OdmJTbGNiaUFxSUVCd1lYSmhiU0I3YjJKcVpXTjBmU0JiY0dGeVlXMXpYU0JVYUdVZ2NHRnlZVzF6SUhSdklHSmxJR0Z3Y0dWdVpHVmtYRzRnS2lCQWNtVjBkWEp1Y3lCN2MzUnlhVzVuZlNCVWFHVWdabTl5YldGMGRHVmtJSFZ5YkZ4dUlDb3ZYRzV0YjJSMWJHVXVaWGh3YjNKMGN5QTlJR1oxYm1OMGFXOXVJR0oxYVd4a1ZWSk1LSFZ5YkN3Z2NHRnlZVzF6TENCd1lYSmhiWE5UWlhKcFlXeHBlbVZ5S1NCN1hHNGdJQzhxWlhOc2FXNTBJRzV2TFhCaGNtRnRMWEpsWVhOemFXZHVPakFxTDF4dUlDQnBaaUFvSVhCaGNtRnRjeWtnZTF4dUlDQWdJSEpsZEhWeWJpQjFjbXc3WEc0Z0lIMWNibHh1SUNCMllYSWdjMlZ5YVdGc2FYcGxaRkJoY21GdGN6dGNiaUFnYVdZZ0tIQmhjbUZ0YzFObGNtbGhiR2w2WlhJcElIdGNiaUFnSUNCelpYSnBZV3hwZW1Wa1VHRnlZVzF6SUQwZ2NHRnlZVzF6VTJWeWFXRnNhWHBsY2lod1lYSmhiWE1wTzF4dUlDQjlJR1ZzYzJVZ2FXWWdLSFYwYVd4ekxtbHpWVkpNVTJWaGNtTm9VR0Z5WVcxektIQmhjbUZ0Y3lrcElIdGNiaUFnSUNCelpYSnBZV3hwZW1Wa1VHRnlZVzF6SUQwZ2NHRnlZVzF6TG5SdlUzUnlhVzVuS0NrN1hHNGdJSDBnWld4elpTQjdYRzRnSUNBZ2RtRnlJSEJoY25SeklEMGdXMTA3WEc1Y2JpQWdJQ0IxZEdsc2N5NW1iM0pGWVdOb0tIQmhjbUZ0Y3l3Z1puVnVZM1JwYjI0Z2MyVnlhV0ZzYVhwbEtIWmhiQ3dnYTJWNUtTQjdYRzRnSUNBZ0lDQnBaaUFvZG1Gc0lEMDlQU0J1ZFd4c0lIeDhJSFI1Y0dWdlppQjJZV3dnUFQwOUlDZDFibVJsWm1sdVpXUW5LU0I3WEc0Z0lDQWdJQ0FnSUhKbGRIVnlianRjYmlBZ0lDQWdJSDFjYmx4dUlDQWdJQ0FnYVdZZ0tIVjBhV3h6TG1selFYSnlZWGtvZG1Gc0tTa2dlMXh1SUNBZ0lDQWdJQ0JyWlhrZ1BTQnJaWGtnS3lBblcxMG5PMXh1SUNBZ0lDQWdmU0JsYkhObElIdGNiaUFnSUNBZ0lDQWdkbUZzSUQwZ1czWmhiRjA3WEc0Z0lDQWdJQ0I5WEc1Y2JpQWdJQ0FnSUhWMGFXeHpMbVp2Y2tWaFkyZ29kbUZzTENCbWRXNWpkR2x2YmlCd1lYSnpaVlpoYkhWbEtIWXBJSHRjYmlBZ0lDQWdJQ0FnYVdZZ0tIVjBhV3h6TG1selJHRjBaU2gyS1NrZ2UxeHVJQ0FnSUNBZ0lDQWdJSFlnUFNCMkxuUnZTVk5QVTNSeWFXNW5LQ2s3WEc0Z0lDQWdJQ0FnSUgwZ1pXeHpaU0JwWmlBb2RYUnBiSE11YVhOUFltcGxZM1FvZGlrcElIdGNiaUFnSUNBZ0lDQWdJQ0IySUQwZ1NsTlBUaTV6ZEhKcGJtZHBabmtvZGlrN1hHNGdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdjR0Z5ZEhNdWNIVnphQ2hsYm1OdlpHVW9hMlY1S1NBcklDYzlKeUFySUdWdVkyOWtaU2gyS1NrN1hHNGdJQ0FnSUNCOUtUdGNiaUFnSUNCOUtUdGNibHh1SUNBZ0lITmxjbWxoYkdsNlpXUlFZWEpoYlhNZ1BTQndZWEowY3k1cWIybHVLQ2NtSnlrN1hHNGdJSDFjYmx4dUlDQnBaaUFvYzJWeWFXRnNhWHBsWkZCaGNtRnRjeWtnZTF4dUlDQWdJSFZ5YkNBclBTQW9kWEpzTG1sdVpHVjRUMllvSno4bktTQTlQVDBnTFRFZ1B5QW5QeWNnT2lBbkppY3BJQ3NnYzJWeWFXRnNhWHBsWkZCaGNtRnRjenRjYmlBZ2ZWeHVYRzRnSUhKbGRIVnliaUIxY213N1hHNTlPMXh1SWl3aUozVnpaU0J6ZEhKcFkzUW5PMXh1WEc0dktpcGNiaUFxSUVOeVpXRjBaWE1nWVNCdVpYY2dWVkpNSUdKNUlHTnZiV0pwYm1sdVp5QjBhR1VnYzNCbFkybG1hV1ZrSUZWU1RITmNiaUFxWEc0Z0tpQkFjR0Z5WVcwZ2UzTjBjbWx1WjMwZ1ltRnpaVlZTVENCVWFHVWdZbUZ6WlNCVlVreGNiaUFxSUVCd1lYSmhiU0I3YzNSeWFXNW5mU0J5Wld4aGRHbDJaVlZTVENCVWFHVWdjbVZzWVhScGRtVWdWVkpNWEc0Z0tpQkFjbVYwZFhKdWN5QjdjM1J5YVc1bmZTQlVhR1VnWTI5dFltbHVaV1FnVlZKTVhHNGdLaTljYm0xdlpIVnNaUzVsZUhCdmNuUnpJRDBnWm5WdVkzUnBiMjRnWTI5dFltbHVaVlZTVEhNb1ltRnpaVlZTVEN3Z2NtVnNZWFJwZG1WVlVrd3BJSHRjYmlBZ2NtVjBkWEp1SUhKbGJHRjBhWFpsVlZKTVhHNGdJQ0FnUHlCaVlYTmxWVkpNTG5KbGNHeGhZMlVvTDF4Y0x5c2tMeXdnSnljcElDc2dKeThuSUNzZ2NtVnNZWFJwZG1WVlVrd3VjbVZ3YkdGalpTZ3ZYbHhjTHlzdkxDQW5KeWxjYmlBZ0lDQTZJR0poYzJWVlVrdzdYRzU5TzF4dUlpd2lKM1Z6WlNCemRISnBZM1FuTzF4dVhHNTJZWElnZFhScGJITWdQU0J5WlhGMWFYSmxLQ2N1THk0dUwzVjBhV3h6SnlrN1hHNWNibTF2WkhWc1pTNWxlSEJ2Y25SeklEMGdLRnh1SUNCMWRHbHNjeTVwYzFOMFlXNWtZWEprUW5KdmQzTmxja1Z1ZGlncElEOWNibHh1SUNBdkx5QlRkR0Z1WkdGeVpDQmljbTkzYzJWeUlHVnVkbk1nYzNWd2NHOXlkQ0JrYjJOMWJXVnVkQzVqYjI5cmFXVmNiaUFnS0daMWJtTjBhVzl1SUhOMFlXNWtZWEprUW5KdmQzTmxja1Z1ZGlncElIdGNiaUFnSUNCeVpYUjFjbTRnZTF4dUlDQWdJQ0FnZDNKcGRHVTZJR1oxYm1OMGFXOXVJSGR5YVhSbEtHNWhiV1VzSUhaaGJIVmxMQ0JsZUhCcGNtVnpMQ0J3WVhSb0xDQmtiMjFoYVc0c0lITmxZM1Z5WlNrZ2UxeHVJQ0FnSUNBZ0lDQjJZWElnWTI5dmEybGxJRDBnVzEwN1hHNGdJQ0FnSUNBZ0lHTnZiMnRwWlM1d2RYTm9LRzVoYldVZ0t5QW5QU2NnS3lCbGJtTnZaR1ZWVWtsRGIyMXdiMjVsYm5Rb2RtRnNkV1VwS1R0Y2JseHVJQ0FnSUNBZ0lDQnBaaUFvZFhScGJITXVhWE5PZFcxaVpYSW9aWGh3YVhKbGN5a3BJSHRjYmlBZ0lDQWdJQ0FnSUNCamIyOXJhV1V1Y0hWemFDZ25aWGh3YVhKbGN6MG5JQ3NnYm1WM0lFUmhkR1VvWlhod2FYSmxjeWt1ZEc5SFRWUlRkSEpwYm1jb0tTazdYRzRnSUNBZ0lDQWdJSDFjYmx4dUlDQWdJQ0FnSUNCcFppQW9kWFJwYkhNdWFYTlRkSEpwYm1jb2NHRjBhQ2twSUh0Y2JpQWdJQ0FnSUNBZ0lDQmpiMjlyYVdVdWNIVnphQ2duY0dGMGFEMG5JQ3NnY0dGMGFDazdYRzRnSUNBZ0lDQWdJSDFjYmx4dUlDQWdJQ0FnSUNCcFppQW9kWFJwYkhNdWFYTlRkSEpwYm1jb1pHOXRZV2x1S1NrZ2UxeHVJQ0FnSUNBZ0lDQWdJR052YjJ0cFpTNXdkWE5vS0Nka2IyMWhhVzQ5SnlBcklHUnZiV0ZwYmlrN1hHNGdJQ0FnSUNBZ0lIMWNibHh1SUNBZ0lDQWdJQ0JwWmlBb2MyVmpkWEpsSUQwOVBTQjBjblZsS1NCN1hHNGdJQ0FnSUNBZ0lDQWdZMjl2YTJsbExuQjFjMmdvSjNObFkzVnlaU2NwTzF4dUlDQWdJQ0FnSUNCOVhHNWNiaUFnSUNBZ0lDQWdaRzlqZFcxbGJuUXVZMjl2YTJsbElEMGdZMjl2YTJsbExtcHZhVzRvSnpzZ0p5azdYRzRnSUNBZ0lDQjlMRnh1WEc0Z0lDQWdJQ0J5WldGa09pQm1kVzVqZEdsdmJpQnlaV0ZrS0c1aGJXVXBJSHRjYmlBZ0lDQWdJQ0FnZG1GeUlHMWhkR05vSUQwZ1pHOWpkVzFsYm5RdVkyOXZhMmxsTG0xaGRHTm9LRzVsZHlCU1pXZEZlSEFvSnloZWZEdGNYRnhjY3lvcEtDY2dLeUJ1WVcxbElDc2dKeWs5S0Z0ZU8xMHFLU2NwS1R0Y2JpQWdJQ0FnSUNBZ2NtVjBkWEp1SUNodFlYUmphQ0EvSUdSbFkyOWtaVlZTU1VOdmJYQnZibVZ1ZENodFlYUmphRnN6WFNrZ09pQnVkV3hzS1R0Y2JpQWdJQ0FnSUgwc1hHNWNiaUFnSUNBZ0lISmxiVzkyWlRvZ1puVnVZM1JwYjI0Z2NtVnRiM1psS0c1aGJXVXBJSHRjYmlBZ0lDQWdJQ0FnZEdocGN5NTNjbWwwWlNodVlXMWxMQ0FuSnl3Z1JHRjBaUzV1YjNjb0tTQXRJRGcyTkRBd01EQXdLVHRjYmlBZ0lDQWdJSDFjYmlBZ0lDQjlPMXh1SUNCOUtTZ3BJRHBjYmx4dUlDQXZMeUJPYjI0Z2MzUmhibVJoY21RZ1luSnZkM05sY2lCbGJuWWdLSGRsWWlCM2IzSnJaWEp6TENCeVpXRmpkQzF1WVhScGRtVXBJR3hoWTJzZ2JtVmxaR1ZrSUhOMWNIQnZjblF1WEc0Z0lDaG1kVzVqZEdsdmJpQnViMjVUZEdGdVpHRnlaRUp5YjNkelpYSkZibllvS1NCN1hHNGdJQ0FnY21WMGRYSnVJSHRjYmlBZ0lDQWdJSGR5YVhSbE9pQm1kVzVqZEdsdmJpQjNjbWwwWlNncElIdDlMRnh1SUNBZ0lDQWdjbVZoWkRvZ1puVnVZM1JwYjI0Z2NtVmhaQ2dwSUhzZ2NtVjBkWEp1SUc1MWJHdzdJSDBzWEc0Z0lDQWdJQ0J5WlcxdmRtVTZJR1oxYm1OMGFXOXVJSEpsYlc5MlpTZ3BJSHQ5WEc0Z0lDQWdmVHRjYmlBZ2ZTa29LVnh1S1R0Y2JpSXNJaWQxYzJVZ2MzUnlhV04wSnp0Y2JseHVMeW9xWEc0Z0tpQkVaWFJsY20xcGJtVnpJSGRvWlhSb1pYSWdkR2hsSUhOd1pXTnBabWxsWkNCVlVrd2dhWE1nWVdKemIyeDFkR1ZjYmlBcVhHNGdLaUJBY0dGeVlXMGdlM04wY21sdVozMGdkWEpzSUZSb1pTQlZVa3dnZEc4Z2RHVnpkRnh1SUNvZ1FISmxkSFZ5Ym5NZ2UySnZiMnhsWVc1OUlGUnlkV1VnYVdZZ2RHaGxJSE53WldOcFptbGxaQ0JWVWt3Z2FYTWdZV0p6YjJ4MWRHVXNJRzkwYUdWeWQybHpaU0JtWVd4elpWeHVJQ292WEc1dGIyUjFiR1V1Wlhod2IzSjBjeUE5SUdaMWJtTjBhVzl1SUdselFXSnpiMngxZEdWVlVrd29kWEpzS1NCN1hHNGdJQzh2SUVFZ1ZWSk1JR2x6SUdOdmJuTnBaR1Z5WldRZ1lXSnpiMngxZEdVZ2FXWWdhWFFnWW1WbmFXNXpJSGRwZEdnZ1hDSThjMk5vWlcxbFBqb3ZMMXdpSUc5eUlGd2lMeTljSWlBb2NISnZkRzlqYjJ3dGNtVnNZWFJwZG1VZ1ZWSk1LUzVjYmlBZ0x5OGdVa1pESURNNU9EWWdaR1ZtYVc1bGN5QnpZMmhsYldVZ2JtRnRaU0JoY3lCaElITmxjWFZsYm1ObElHOW1JR05vWVhKaFkzUmxjbk1nWW1WbmFXNXVhVzVuSUhkcGRHZ2dZU0JzWlhSMFpYSWdZVzVrSUdadmJHeHZkMlZrWEc0Z0lDOHZJR0o1SUdGdWVTQmpiMjFpYVc1aGRHbHZiaUJ2WmlCc1pYUjBaWEp6TENCa2FXZHBkSE1zSUhCc2RYTXNJSEJsY21sdlpDd2diM0lnYUhsd2FHVnVMbHh1SUNCeVpYUjFjbTRnTDE0b1cyRXRlbDFiWVMxNlhGeGtYRndyWEZ3dFhGd3VYU282S1Q5Y1hDOWNYQzh2YVM1MFpYTjBLSFZ5YkNrN1hHNTlPMXh1SWl3aUozVnpaU0J6ZEhKcFkzUW5PMXh1WEc1MllYSWdkWFJwYkhNZ1BTQnlaWEYxYVhKbEtDY3VMeTR1TDNWMGFXeHpKeWs3WEc1Y2JtMXZaSFZzWlM1bGVIQnZjblJ6SUQwZ0tGeHVJQ0IxZEdsc2N5NXBjMU4wWVc1a1lYSmtRbkp2ZDNObGNrVnVkaWdwSUQ5Y2JseHVJQ0F2THlCVGRHRnVaR0Z5WkNCaWNtOTNjMlZ5SUdWdWRuTWdhR0YyWlNCbWRXeHNJSE4xY0hCdmNuUWdiMllnZEdobElFRlFTWE1nYm1WbFpHVmtJSFJ2SUhSbGMzUmNiaUFnTHk4Z2QyaGxkR2hsY2lCMGFHVWdjbVZ4ZFdWemRDQlZVa3dnYVhNZ2IyWWdkR2hsSUhOaGJXVWdiM0pwWjJsdUlHRnpJR04xY25KbGJuUWdiRzlqWVhScGIyNHVYRzRnSUNobWRXNWpkR2x2YmlCemRHRnVaR0Z5WkVKeWIzZHpaWEpGYm5Zb0tTQjdYRzRnSUNBZ2RtRnlJRzF6YVdVZ1BTQXZLRzF6YVdWOGRISnBaR1Z1ZENrdmFTNTBaWE4wS0c1aGRtbG5ZWFJ2Y2k1MWMyVnlRV2RsYm5RcE8xeHVJQ0FnSUhaaGNpQjFjbXhRWVhKemFXNW5UbTlrWlNBOUlHUnZZM1Z0Wlc1MExtTnlaV0YwWlVWc1pXMWxiblFvSjJFbktUdGNiaUFnSUNCMllYSWdiM0pwWjJsdVZWSk1PMXh1WEc0Z0lDQWdMeW9xWEc0Z0lDQWdLaUJRWVhKelpTQmhJRlZTVENCMGJ5QmthWE5qYjNabGNpQnBkQ2R6SUdOdmJYQnZibVZ1ZEhOY2JpQWdJQ0FxWEc0Z0lDQWdLaUJBY0dGeVlXMGdlMU4wY21sdVozMGdkWEpzSUZSb1pTQlZVa3dnZEc4Z1ltVWdjR0Z5YzJWa1hHNGdJQ0FnS2lCQWNtVjBkWEp1Y3lCN1QySnFaV04wZlZ4dUlDQWdJQ292WEc0Z0lDQWdablZ1WTNScGIyNGdjbVZ6YjJ4MlpWVlNUQ2gxY213cElIdGNiaUFnSUNBZ0lIWmhjaUJvY21WbUlEMGdkWEpzTzF4dVhHNGdJQ0FnSUNCcFppQW9iWE5wWlNrZ2UxeHVJQ0FnSUNBZ0lDQXZMeUJKUlNCdVpXVmtjeUJoZEhSeWFXSjFkR1VnYzJWMElIUjNhV05sSUhSdklHNXZjbTFoYkdsNlpTQndjbTl3WlhKMGFXVnpYRzRnSUNBZ0lDQWdJSFZ5YkZCaGNuTnBibWRPYjJSbExuTmxkRUYwZEhKcFluVjBaU2duYUhKbFppY3NJR2h5WldZcE8xeHVJQ0FnSUNBZ0lDQm9jbVZtSUQwZ2RYSnNVR0Z5YzJsdVowNXZaR1V1YUhKbFpqdGNiaUFnSUNBZ0lIMWNibHh1SUNBZ0lDQWdkWEpzVUdGeWMybHVaMDV2WkdVdWMyVjBRWFIwY21saWRYUmxLQ2RvY21WbUp5d2dhSEpsWmlrN1hHNWNiaUFnSUNBZ0lDOHZJSFZ5YkZCaGNuTnBibWRPYjJSbElIQnliM1pwWkdWeklIUm9aU0JWY214VmRHbHNjeUJwYm5SbGNtWmhZMlVnTFNCb2RIUndPaTh2ZFhKc0xuTndaV011ZDJoaGRIZG5MbTl5Wnk4amRYSnNkWFJwYkhOY2JpQWdJQ0FnSUhKbGRIVnliaUI3WEc0Z0lDQWdJQ0FnSUdoeVpXWTZJSFZ5YkZCaGNuTnBibWRPYjJSbExtaHlaV1lzWEc0Z0lDQWdJQ0FnSUhCeWIzUnZZMjlzT2lCMWNteFFZWEp6YVc1blRtOWtaUzV3Y205MGIyTnZiQ0EvSUhWeWJGQmhjbk5wYm1kT2IyUmxMbkJ5YjNSdlkyOXNMbkpsY0d4aFkyVW9Mem9rTHl3Z0p5Y3BJRG9nSnljc1hHNGdJQ0FnSUNBZ0lHaHZjM1E2SUhWeWJGQmhjbk5wYm1kT2IyUmxMbWh2YzNRc1hHNGdJQ0FnSUNBZ0lITmxZWEpqYURvZ2RYSnNVR0Z5YzJsdVowNXZaR1V1YzJWaGNtTm9JRDhnZFhKc1VHRnljMmx1WjA1dlpHVXVjMlZoY21Ob0xuSmxjR3hoWTJVb0wxNWNYRDh2TENBbkp5a2dPaUFuSnl4Y2JpQWdJQ0FnSUNBZ2FHRnphRG9nZFhKc1VHRnljMmx1WjA1dlpHVXVhR0Z6YUNBL0lIVnliRkJoY25OcGJtZE9iMlJsTG1oaGMyZ3VjbVZ3YkdGalpTZ3ZYaU12TENBbkp5a2dPaUFuSnl4Y2JpQWdJQ0FnSUNBZ2FHOXpkRzVoYldVNklIVnliRkJoY25OcGJtZE9iMlJsTG1odmMzUnVZVzFsTEZ4dUlDQWdJQ0FnSUNCd2IzSjBPaUIxY214UVlYSnphVzVuVG05a1pTNXdiM0owTEZ4dUlDQWdJQ0FnSUNCd1lYUm9ibUZ0WlRvZ0tIVnliRkJoY25OcGJtZE9iMlJsTG5CaGRHaHVZVzFsTG1Ob1lYSkJkQ2d3S1NBOVBUMGdKeThuS1NBL1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjFjbXhRWVhKemFXNW5UbTlrWlM1d1lYUm9ibUZ0WlNBNlhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQW5MeWNnS3lCMWNteFFZWEp6YVc1blRtOWtaUzV3WVhSb2JtRnRaVnh1SUNBZ0lDQWdmVHRjYmlBZ0lDQjlYRzVjYmlBZ0lDQnZjbWxuYVc1VlVrd2dQU0J5WlhOdmJIWmxWVkpNS0hkcGJtUnZkeTVzYjJOaGRHbHZiaTVvY21WbUtUdGNibHh1SUNBZ0lDOHFLbHh1SUNBZ0lDb2dSR1YwWlhKdGFXNWxJR2xtSUdFZ1ZWSk1JSE5vWVhKbGN5QjBhR1VnYzJGdFpTQnZjbWxuYVc0Z1lYTWdkR2hsSUdOMWNuSmxiblFnYkc5allYUnBiMjVjYmlBZ0lDQXFYRzRnSUNBZ0tpQkFjR0Z5WVcwZ2UxTjBjbWx1WjMwZ2NtVnhkV1Z6ZEZWU1RDQlVhR1VnVlZKTUlIUnZJSFJsYzNSY2JpQWdJQ0FxSUVCeVpYUjFjbTV6SUh0aWIyOXNaV0Z1ZlNCVWNuVmxJR2xtSUZWU1RDQnphR0Z5WlhNZ2RHaGxJSE5oYldVZ2IzSnBaMmx1TENCdmRHaGxjbmRwYzJVZ1ptRnNjMlZjYmlBZ0lDQXFMMXh1SUNBZ0lISmxkSFZ5YmlCbWRXNWpkR2x2YmlCcGMxVlNURk5oYldWUGNtbG5hVzRvY21WeGRXVnpkRlZTVENrZ2UxeHVJQ0FnSUNBZ2RtRnlJSEJoY25ObFpDQTlJQ2gxZEdsc2N5NXBjMU4wY21sdVp5aHlaWEYxWlhOMFZWSk1LU2tnUHlCeVpYTnZiSFpsVlZKTUtISmxjWFZsYzNSVlVrd3BJRG9nY21WeGRXVnpkRlZTVER0Y2JpQWdJQ0FnSUhKbGRIVnliaUFvY0dGeWMyVmtMbkJ5YjNSdlkyOXNJRDA5UFNCdmNtbG5hVzVWVWt3dWNISnZkRzlqYjJ3Z0ppWmNiaUFnSUNBZ0lDQWdJQ0FnSUhCaGNuTmxaQzVvYjNOMElEMDlQU0J2Y21sbmFXNVZVa3d1YUc5emRDazdYRzRnSUNBZ2ZUdGNiaUFnZlNrb0tTQTZYRzVjYmlBZ0x5OGdUbTl1SUhOMFlXNWtZWEprSUdKeWIzZHpaWElnWlc1MmN5QW9kMlZpSUhkdmNtdGxjbk1zSUhKbFlXTjBMVzVoZEdsMlpTa2diR0ZqYXlCdVpXVmtaV1FnYzNWd2NHOXlkQzVjYmlBZ0tHWjFibU4wYVc5dUlHNXZibE4wWVc1a1lYSmtRbkp2ZDNObGNrVnVkaWdwSUh0Y2JpQWdJQ0J5WlhSMWNtNGdablZ1WTNScGIyNGdhWE5WVWt4VFlXMWxUM0pwWjJsdUtDa2dlMXh1SUNBZ0lDQWdjbVYwZFhKdUlIUnlkV1U3WEc0Z0lDQWdmVHRjYmlBZ2ZTa29LVnh1S1R0Y2JpSXNJaWQxYzJVZ2MzUnlhV04wSnp0Y2JseHVkbUZ5SUhWMGFXeHpJRDBnY21WeGRXbHlaU2duTGk0dmRYUnBiSE1uS1R0Y2JseHViVzlrZFd4bExtVjRjRzl5ZEhNZ1BTQm1kVzVqZEdsdmJpQnViM0p0WVd4cGVtVklaV0ZrWlhKT1lXMWxLR2hsWVdSbGNuTXNJRzV2Y20xaGJHbDZaV1JPWVcxbEtTQjdYRzRnSUhWMGFXeHpMbVp2Y2tWaFkyZ29hR1ZoWkdWeWN5d2dablZ1WTNScGIyNGdjSEp2WTJWemMwaGxZV1JsY2loMllXeDFaU3dnYm1GdFpTa2dlMXh1SUNBZ0lHbG1JQ2h1WVcxbElDRTlQU0J1YjNKdFlXeHBlbVZrVG1GdFpTQW1KaUJ1WVcxbExuUnZWWEJ3WlhKRFlYTmxLQ2tnUFQwOUlHNXZjbTFoYkdsNlpXUk9ZVzFsTG5SdlZYQndaWEpEWVhObEtDa3BJSHRjYmlBZ0lDQWdJR2hsWVdSbGNuTmJibTl5YldGc2FYcGxaRTVoYldWZElEMGdkbUZzZFdVN1hHNGdJQ0FnSUNCa1pXeGxkR1VnYUdWaFpHVnljMXR1WVcxbFhUdGNiaUFnSUNCOVhHNGdJSDBwTzF4dWZUdGNiaUlzSWlkMWMyVWdjM1J5YVdOMEp6dGNibHh1ZG1GeUlIVjBhV3h6SUQwZ2NtVnhkV2x5WlNnbkxpOHVMaTkxZEdsc2N5Y3BPMXh1WEc0dkx5QklaV0ZrWlhKeklIZG9iM05sSUdSMWNHeHBZMkYwWlhNZ1lYSmxJR2xuYm05eVpXUWdZbmtnYm05a1pWeHVMeThnWXk1bUxpQm9kSFJ3Y3pvdkwyNXZaR1ZxY3k1dmNtY3ZZWEJwTDJoMGRIQXVhSFJ0YkNOb2RIUndYMjFsYzNOaFoyVmZhR1ZoWkdWeWMxeHVkbUZ5SUdsbmJtOXlaVVIxY0d4cFkyRjBaVTltSUQwZ1cxeHVJQ0FuWVdkbEp5d2dKMkYxZEdodmNtbDZZWFJwYjI0bkxDQW5ZMjl1ZEdWdWRDMXNaVzVuZEdnbkxDQW5ZMjl1ZEdWdWRDMTBlWEJsSnl3Z0oyVjBZV2NuTEZ4dUlDQW5aWGh3YVhKbGN5Y3NJQ2RtY205dEp5d2dKMmh2YzNRbkxDQW5hV1l0Ylc5a2FXWnBaV1F0YzJsdVkyVW5MQ0FuYVdZdGRXNXRiMlJwWm1sbFpDMXphVzVqWlNjc1hHNGdJQ2RzWVhOMExXMXZaR2xtYVdWa0p5d2dKMnh2WTJGMGFXOXVKeXdnSjIxaGVDMW1iM0ozWVhKa2N5Y3NJQ2R3Y205NGVTMWhkWFJvYjNKcGVtRjBhVzl1Snl4Y2JpQWdKM0psWm1WeVpYSW5MQ0FuY21WMGNua3RZV1owWlhJbkxDQW5kWE5sY2kxaFoyVnVkQ2RjYmwwN1hHNWNiaThxS2x4dUlDb2dVR0Z5YzJVZ2FHVmhaR1Z5Y3lCcGJuUnZJR0Z1SUc5aWFtVmpkRnh1SUNwY2JpQXFJR0JnWUZ4dUlDb2dSR0YwWlRvZ1YyVmtMQ0F5TnlCQmRXY2dNakF4TkNBd09EbzFPRG8wT1NCSFRWUmNiaUFxSUVOdmJuUmxiblF0Vkhsd1pUb2dZWEJ3YkdsallYUnBiMjR2YW5OdmJseHVJQ29nUTI5dWJtVmpkR2x2YmpvZ2EyVmxjQzFoYkdsMlpWeHVJQ29nVkhKaGJuTm1aWEl0Ulc1amIyUnBibWM2SUdOb2RXNXJaV1JjYmlBcUlHQmdZRnh1SUNwY2JpQXFJRUJ3WVhKaGJTQjdVM1J5YVc1bmZTQm9aV0ZrWlhKeklFaGxZV1JsY25NZ2JtVmxaR2x1WnlCMGJ5QmlaU0J3WVhKelpXUmNiaUFxSUVCeVpYUjFjbTV6SUh0UFltcGxZM1I5SUVobFlXUmxjbk1nY0dGeWMyVmtJR2x1ZEc4Z1lXNGdiMkpxWldOMFhHNGdLaTljYm0xdlpIVnNaUzVsZUhCdmNuUnpJRDBnWm5WdVkzUnBiMjRnY0dGeWMyVklaV0ZrWlhKektHaGxZV1JsY25NcElIdGNiaUFnZG1GeUlIQmhjbk5sWkNBOUlIdDlPMXh1SUNCMllYSWdhMlY1TzF4dUlDQjJZWElnZG1Gc08xeHVJQ0IyWVhJZ2FUdGNibHh1SUNCcFppQW9JV2hsWVdSbGNuTXBJSHNnY21WMGRYSnVJSEJoY25ObFpEc2dmVnh1WEc0Z0lIVjBhV3h6TG1admNrVmhZMmdvYUdWaFpHVnljeTV6Y0d4cGRDZ25YRnh1Snlrc0lHWjFibU4wYVc5dUlIQmhjbk5sY2loc2FXNWxLU0I3WEc0Z0lDQWdhU0E5SUd4cGJtVXVhVzVrWlhoUFppZ25PaWNwTzF4dUlDQWdJR3RsZVNBOUlIVjBhV3h6TG5SeWFXMG9iR2x1WlM1emRXSnpkSElvTUN3Z2FTa3BMblJ2VEc5M1pYSkRZWE5sS0NrN1hHNGdJQ0FnZG1Gc0lEMGdkWFJwYkhNdWRISnBiU2hzYVc1bExuTjFZbk4wY2locElDc2dNU2twTzF4dVhHNGdJQ0FnYVdZZ0tHdGxlU2tnZTF4dUlDQWdJQ0FnYVdZZ0tIQmhjbk5sWkZ0clpYbGRJQ1ltSUdsbmJtOXlaVVIxY0d4cFkyRjBaVTltTG1sdVpHVjRUMllvYTJWNUtTQStQU0F3S1NCN1hHNGdJQ0FnSUNBZ0lISmxkSFZ5Ymp0Y2JpQWdJQ0FnSUgxY2JpQWdJQ0FnSUdsbUlDaHJaWGtnUFQwOUlDZHpaWFF0WTI5dmEybGxKeWtnZTF4dUlDQWdJQ0FnSUNCd1lYSnpaV1JiYTJWNVhTQTlJQ2h3WVhKelpXUmJhMlY1WFNBL0lIQmhjbk5sWkZ0clpYbGRJRG9nVzEwcExtTnZibU5oZENoYmRtRnNYU2s3WEc0Z0lDQWdJQ0I5SUdWc2MyVWdlMXh1SUNBZ0lDQWdJQ0J3WVhKelpXUmJhMlY1WFNBOUlIQmhjbk5sWkZ0clpYbGRJRDhnY0dGeWMyVmtXMnRsZVYwZ0t5QW5MQ0FuSUNzZ2RtRnNJRG9nZG1Gc08xeHVJQ0FnSUNBZ2ZWeHVJQ0FnSUgxY2JpQWdmU2s3WEc1Y2JpQWdjbVYwZFhKdUlIQmhjbk5sWkR0Y2JuMDdYRzRpTENJbmRYTmxJSE4wY21samRDYzdYRzVjYmk4cUtseHVJQ29nVTNsdWRHRmpkR2xqSUhOMVoyRnlJR1p2Y2lCcGJuWnZhMmx1WnlCaElHWjFibU4wYVc5dUlHRnVaQ0JsZUhCaGJtUnBibWNnWVc0Z1lYSnlZWGtnWm05eUlHRnlaM1Z0Wlc1MGN5NWNiaUFxWEc0Z0tpQkRiMjF0YjI0Z2RYTmxJR05oYzJVZ2QyOTFiR1FnWW1VZ2RHOGdkWE5sSUdCR2RXNWpkR2x2Ymk1d2NtOTBiM1I1Y0dVdVlYQndiSGxnTGx4dUlDcGNiaUFxSUNCZ1lHQnFjMXh1SUNvZ0lHWjFibU4wYVc5dUlHWW9lQ3dnZVN3Z2Vpa2dlMzFjYmlBcUlDQjJZWElnWVhKbmN5QTlJRnN4TENBeUxDQXpYVHRjYmlBcUlDQm1MbUZ3Y0d4NUtHNTFiR3dzSUdGeVozTXBPMXh1SUNvZ0lHQmdZRnh1SUNwY2JpQXFJRmRwZEdnZ1lITndjbVZoWkdBZ2RHaHBjeUJsZUdGdGNHeGxJR05oYmlCaVpTQnlaUzEzY21sMGRHVnVMbHh1SUNwY2JpQXFJQ0JnWUdCcWMxeHVJQ29nSUhOd2NtVmhaQ2htZFc1amRHbHZiaWg0TENCNUxDQjZLU0I3ZlNrb1d6RXNJRElzSUROZEtUdGNiaUFxSUNCZ1lHQmNiaUFxWEc0Z0tpQkFjR0Z5WVcwZ2UwWjFibU4wYVc5dWZTQmpZV3hzWW1GamExeHVJQ29nUUhKbGRIVnlibk1nZTBaMWJtTjBhVzl1ZlZ4dUlDb3ZYRzV0YjJSMWJHVXVaWGh3YjNKMGN5QTlJR1oxYm1OMGFXOXVJSE53Y21WaFpDaGpZV3hzWW1GamF5a2dlMXh1SUNCeVpYUjFjbTRnWm5WdVkzUnBiMjRnZDNKaGNDaGhjbklwSUh0Y2JpQWdJQ0J5WlhSMWNtNGdZMkZzYkdKaFkyc3VZWEJ3Ykhrb2JuVnNiQ3dnWVhKeUtUdGNiaUFnZlR0Y2JuMDdYRzRpTENJbmRYTmxJSE4wY21samRDYzdYRzVjYm5aaGNpQmlhVzVrSUQwZ2NtVnhkV2x5WlNnbkxpOW9aV3h3WlhKekwySnBibVFuS1R0Y2JuWmhjaUJwYzBKMVptWmxjaUE5SUhKbGNYVnBjbVVvSjJsekxXSjFabVpsY2ljcE8xeHVYRzR2S21kc2IySmhiQ0IwYjFOMGNtbHVaenAwY25WbEtpOWNibHh1THk4Z2RYUnBiSE1nYVhNZ1lTQnNhV0p5WVhKNUlHOW1JR2RsYm1WeWFXTWdhR1ZzY0dWeUlHWjFibU4wYVc5dWN5QnViMjR0YzNCbFkybG1hV01nZEc4Z1lYaHBiM05jYmx4dWRtRnlJSFJ2VTNSeWFXNW5JRDBnVDJKcVpXTjBMbkJ5YjNSdmRIbHdaUzUwYjFOMGNtbHVaenRjYmx4dUx5b3FYRzRnS2lCRVpYUmxjbTFwYm1VZ2FXWWdZU0IyWVd4MVpTQnBjeUJoYmlCQmNuSmhlVnh1SUNwY2JpQXFJRUJ3WVhKaGJTQjdUMkpxWldOMGZTQjJZV3dnVkdobElIWmhiSFZsSUhSdklIUmxjM1JjYmlBcUlFQnlaWFIxY201eklIdGliMjlzWldGdWZTQlVjblZsSUdsbUlIWmhiSFZsSUdseklHRnVJRUZ5Y21GNUxDQnZkR2hsY25kcGMyVWdabUZzYzJWY2JpQXFMMXh1Wm5WdVkzUnBiMjRnYVhOQmNuSmhlU2gyWVd3cElIdGNiaUFnY21WMGRYSnVJSFJ2VTNSeWFXNW5MbU5oYkd3b2RtRnNLU0E5UFQwZ0oxdHZZbXBsWTNRZ1FYSnlZWGxkSnp0Y2JuMWNibHh1THlvcVhHNGdLaUJFWlhSbGNtMXBibVVnYVdZZ1lTQjJZV3gxWlNCcGN5QmhiaUJCY25KaGVVSjFabVpsY2x4dUlDcGNiaUFxSUVCd1lYSmhiU0I3VDJKcVpXTjBmU0IyWVd3Z1ZHaGxJSFpoYkhWbElIUnZJSFJsYzNSY2JpQXFJRUJ5WlhSMWNtNXpJSHRpYjI5c1pXRnVmU0JVY25WbElHbG1JSFpoYkhWbElHbHpJR0Z1SUVGeWNtRjVRblZtWm1WeUxDQnZkR2hsY25kcGMyVWdabUZzYzJWY2JpQXFMMXh1Wm5WdVkzUnBiMjRnYVhOQmNuSmhlVUoxWm1abGNpaDJZV3dwSUh0Y2JpQWdjbVYwZFhKdUlIUnZVM1J5YVc1bkxtTmhiR3dvZG1Gc0tTQTlQVDBnSjF0dlltcGxZM1FnUVhKeVlYbENkV1ptWlhKZEp6dGNibjFjYmx4dUx5b3FYRzRnS2lCRVpYUmxjbTFwYm1VZ2FXWWdZU0IyWVd4MVpTQnBjeUJoSUVadmNtMUVZWFJoWEc0Z0tseHVJQ29nUUhCaGNtRnRJSHRQWW1wbFkzUjlJSFpoYkNCVWFHVWdkbUZzZFdVZ2RHOGdkR1Z6ZEZ4dUlDb2dRSEpsZEhWeWJuTWdlMkp2YjJ4bFlXNTlJRlJ5ZFdVZ2FXWWdkbUZzZFdVZ2FYTWdZVzRnUm05eWJVUmhkR0VzSUc5MGFHVnlkMmx6WlNCbVlXeHpaVnh1SUNvdlhHNW1kVzVqZEdsdmJpQnBjMFp2Y20xRVlYUmhLSFpoYkNrZ2UxeHVJQ0J5WlhSMWNtNGdLSFI1Y0dWdlppQkdiM0p0UkdGMFlTQWhQVDBnSjNWdVpHVm1hVzVsWkNjcElDWW1JQ2gyWVd3Z2FXNXpkR0Z1WTJWdlppQkdiM0p0UkdGMFlTazdYRzU5WEc1Y2JpOHFLbHh1SUNvZ1JHVjBaWEp0YVc1bElHbG1JR0VnZG1Gc2RXVWdhWE1nWVNCMmFXVjNJRzl1SUdGdUlFRnljbUY1UW5WbVptVnlYRzRnS2x4dUlDb2dRSEJoY21GdElIdFBZbXBsWTNSOUlIWmhiQ0JVYUdVZ2RtRnNkV1VnZEc4Z2RHVnpkRnh1SUNvZ1FISmxkSFZ5Ym5NZ2UySnZiMnhsWVc1OUlGUnlkV1VnYVdZZ2RtRnNkV1VnYVhNZ1lTQjJhV1YzSUc5dUlHRnVJRUZ5Y21GNVFuVm1abVZ5TENCdmRHaGxjbmRwYzJVZ1ptRnNjMlZjYmlBcUwxeHVablZ1WTNScGIyNGdhWE5CY25KaGVVSjFabVpsY2xacFpYY29kbUZzS1NCN1hHNGdJSFpoY2lCeVpYTjFiSFE3WEc0Z0lHbG1JQ2dvZEhsd1pXOW1JRUZ5Y21GNVFuVm1abVZ5SUNFOVBTQW5kVzVrWldacGJtVmtKeWtnSmlZZ0tFRnljbUY1UW5WbVptVnlMbWx6Vm1sbGR5a3BJSHRjYmlBZ0lDQnlaWE4xYkhRZ1BTQkJjbkpoZVVKMVptWmxjaTVwYzFacFpYY29kbUZzS1R0Y2JpQWdmU0JsYkhObElIdGNiaUFnSUNCeVpYTjFiSFFnUFNBb2RtRnNLU0FtSmlBb2RtRnNMbUoxWm1abGNpa2dKaVlnS0haaGJDNWlkV1ptWlhJZ2FXNXpkR0Z1WTJWdlppQkJjbkpoZVVKMVptWmxjaWs3WEc0Z0lIMWNiaUFnY21WMGRYSnVJSEpsYzNWc2REdGNibjFjYmx4dUx5b3FYRzRnS2lCRVpYUmxjbTFwYm1VZ2FXWWdZU0IyWVd4MVpTQnBjeUJoSUZOMGNtbHVaMXh1SUNwY2JpQXFJRUJ3WVhKaGJTQjdUMkpxWldOMGZTQjJZV3dnVkdobElIWmhiSFZsSUhSdklIUmxjM1JjYmlBcUlFQnlaWFIxY201eklIdGliMjlzWldGdWZTQlVjblZsSUdsbUlIWmhiSFZsSUdseklHRWdVM1J5YVc1bkxDQnZkR2hsY25kcGMyVWdabUZzYzJWY2JpQXFMMXh1Wm5WdVkzUnBiMjRnYVhOVGRISnBibWNvZG1Gc0tTQjdYRzRnSUhKbGRIVnliaUIwZVhCbGIyWWdkbUZzSUQwOVBTQW5jM1J5YVc1bkp6dGNibjFjYmx4dUx5b3FYRzRnS2lCRVpYUmxjbTFwYm1VZ2FXWWdZU0IyWVd4MVpTQnBjeUJoSUU1MWJXSmxjbHh1SUNwY2JpQXFJRUJ3WVhKaGJTQjdUMkpxWldOMGZTQjJZV3dnVkdobElIWmhiSFZsSUhSdklIUmxjM1JjYmlBcUlFQnlaWFIxY201eklIdGliMjlzWldGdWZTQlVjblZsSUdsbUlIWmhiSFZsSUdseklHRWdUblZ0WW1WeUxDQnZkR2hsY25kcGMyVWdabUZzYzJWY2JpQXFMMXh1Wm5WdVkzUnBiMjRnYVhOT2RXMWlaWElvZG1Gc0tTQjdYRzRnSUhKbGRIVnliaUIwZVhCbGIyWWdkbUZzSUQwOVBTQW5iblZ0WW1WeUp6dGNibjFjYmx4dUx5b3FYRzRnS2lCRVpYUmxjbTFwYm1VZ2FXWWdZU0IyWVd4MVpTQnBjeUIxYm1SbFptbHVaV1JjYmlBcVhHNGdLaUJBY0dGeVlXMGdlMDlpYW1WamRIMGdkbUZzSUZSb1pTQjJZV3gxWlNCMGJ5QjBaWE4wWEc0Z0tpQkFjbVYwZFhKdWN5QjdZbTl2YkdWaGJuMGdWSEoxWlNCcFppQjBhR1VnZG1Gc2RXVWdhWE1nZFc1a1pXWnBibVZrTENCdmRHaGxjbmRwYzJVZ1ptRnNjMlZjYmlBcUwxeHVablZ1WTNScGIyNGdhWE5WYm1SbFptbHVaV1FvZG1Gc0tTQjdYRzRnSUhKbGRIVnliaUIwZVhCbGIyWWdkbUZzSUQwOVBTQW5kVzVrWldacGJtVmtKenRjYm4xY2JseHVMeW9xWEc0Z0tpQkVaWFJsY20xcGJtVWdhV1lnWVNCMllXeDFaU0JwY3lCaGJpQlBZbXBsWTNSY2JpQXFYRzRnS2lCQWNHRnlZVzBnZTA5aWFtVmpkSDBnZG1Gc0lGUm9aU0IyWVd4MVpTQjBieUIwWlhOMFhHNGdLaUJBY21WMGRYSnVjeUI3WW05dmJHVmhibjBnVkhKMVpTQnBaaUIyWVd4MVpTQnBjeUJoYmlCUFltcGxZM1FzSUc5MGFHVnlkMmx6WlNCbVlXeHpaVnh1SUNvdlhHNW1kVzVqZEdsdmJpQnBjMDlpYW1WamRDaDJZV3dwSUh0Y2JpQWdjbVYwZFhKdUlIWmhiQ0FoUFQwZ2JuVnNiQ0FtSmlCMGVYQmxiMllnZG1Gc0lEMDlQU0FuYjJKcVpXTjBKenRjYm4xY2JseHVMeW9xWEc0Z0tpQkVaWFJsY20xcGJtVWdhV1lnWVNCMllXeDFaU0JwY3lCaElFUmhkR1ZjYmlBcVhHNGdLaUJBY0dGeVlXMGdlMDlpYW1WamRIMGdkbUZzSUZSb1pTQjJZV3gxWlNCMGJ5QjBaWE4wWEc0Z0tpQkFjbVYwZFhKdWN5QjdZbTl2YkdWaGJuMGdWSEoxWlNCcFppQjJZV3gxWlNCcGN5QmhJRVJoZEdVc0lHOTBhR1Z5ZDJselpTQm1ZV3h6WlZ4dUlDb3ZYRzVtZFc1amRHbHZiaUJwYzBSaGRHVW9kbUZzS1NCN1hHNGdJSEpsZEhWeWJpQjBiMU4wY21sdVp5NWpZV3hzS0haaGJDa2dQVDA5SUNkYmIySnFaV04wSUVSaGRHVmRKenRjYm4xY2JseHVMeW9xWEc0Z0tpQkVaWFJsY20xcGJtVWdhV1lnWVNCMllXeDFaU0JwY3lCaElFWnBiR1ZjYmlBcVhHNGdLaUJBY0dGeVlXMGdlMDlpYW1WamRIMGdkbUZzSUZSb1pTQjJZV3gxWlNCMGJ5QjBaWE4wWEc0Z0tpQkFjbVYwZFhKdWN5QjdZbTl2YkdWaGJuMGdWSEoxWlNCcFppQjJZV3gxWlNCcGN5QmhJRVpwYkdVc0lHOTBhR1Z5ZDJselpTQm1ZV3h6WlZ4dUlDb3ZYRzVtZFc1amRHbHZiaUJwYzBacGJHVW9kbUZzS1NCN1hHNGdJSEpsZEhWeWJpQjBiMU4wY21sdVp5NWpZV3hzS0haaGJDa2dQVDA5SUNkYmIySnFaV04wSUVacGJHVmRKenRjYm4xY2JseHVMeW9xWEc0Z0tpQkVaWFJsY20xcGJtVWdhV1lnWVNCMllXeDFaU0JwY3lCaElFSnNiMkpjYmlBcVhHNGdLaUJBY0dGeVlXMGdlMDlpYW1WamRIMGdkbUZzSUZSb1pTQjJZV3gxWlNCMGJ5QjBaWE4wWEc0Z0tpQkFjbVYwZFhKdWN5QjdZbTl2YkdWaGJuMGdWSEoxWlNCcFppQjJZV3gxWlNCcGN5QmhJRUpzYjJJc0lHOTBhR1Z5ZDJselpTQm1ZV3h6WlZ4dUlDb3ZYRzVtZFc1amRHbHZiaUJwYzBKc2IySW9kbUZzS1NCN1hHNGdJSEpsZEhWeWJpQjBiMU4wY21sdVp5NWpZV3hzS0haaGJDa2dQVDA5SUNkYmIySnFaV04wSUVKc2IySmRKenRjYm4xY2JseHVMeW9xWEc0Z0tpQkVaWFJsY20xcGJtVWdhV1lnWVNCMllXeDFaU0JwY3lCaElFWjFibU4wYVc5dVhHNGdLbHh1SUNvZ1FIQmhjbUZ0SUh0UFltcGxZM1I5SUhaaGJDQlVhR1VnZG1Gc2RXVWdkRzhnZEdWemRGeHVJQ29nUUhKbGRIVnlibk1nZTJKdmIyeGxZVzU5SUZSeWRXVWdhV1lnZG1Gc2RXVWdhWE1nWVNCR2RXNWpkR2x2Yml3Z2IzUm9aWEozYVhObElHWmhiSE5sWEc0Z0tpOWNibVoxYm1OMGFXOXVJR2x6Um5WdVkzUnBiMjRvZG1Gc0tTQjdYRzRnSUhKbGRIVnliaUIwYjFOMGNtbHVaeTVqWVd4c0tIWmhiQ2tnUFQwOUlDZGJiMkpxWldOMElFWjFibU4wYVc5dVhTYzdYRzU5WEc1Y2JpOHFLbHh1SUNvZ1JHVjBaWEp0YVc1bElHbG1JR0VnZG1Gc2RXVWdhWE1nWVNCVGRISmxZVzFjYmlBcVhHNGdLaUJBY0dGeVlXMGdlMDlpYW1WamRIMGdkbUZzSUZSb1pTQjJZV3gxWlNCMGJ5QjBaWE4wWEc0Z0tpQkFjbVYwZFhKdWN5QjdZbTl2YkdWaGJuMGdWSEoxWlNCcFppQjJZV3gxWlNCcGN5QmhJRk4wY21WaGJTd2diM1JvWlhKM2FYTmxJR1poYkhObFhHNGdLaTljYm1aMWJtTjBhVzl1SUdselUzUnlaV0Z0S0haaGJDa2dlMXh1SUNCeVpYUjFjbTRnYVhOUFltcGxZM1FvZG1Gc0tTQW1KaUJwYzBaMWJtTjBhVzl1S0haaGJDNXdhWEJsS1R0Y2JuMWNibHh1THlvcVhHNGdLaUJFWlhSbGNtMXBibVVnYVdZZ1lTQjJZV3gxWlNCcGN5QmhJRlZTVEZObFlYSmphRkJoY21GdGN5QnZZbXBsWTNSY2JpQXFYRzRnS2lCQWNHRnlZVzBnZTA5aWFtVmpkSDBnZG1Gc0lGUm9aU0IyWVd4MVpTQjBieUIwWlhOMFhHNGdLaUJBY21WMGRYSnVjeUI3WW05dmJHVmhibjBnVkhKMVpTQnBaaUIyWVd4MVpTQnBjeUJoSUZWU1RGTmxZWEpqYUZCaGNtRnRjeUJ2WW1wbFkzUXNJRzkwYUdWeWQybHpaU0JtWVd4elpWeHVJQ292WEc1bWRXNWpkR2x2YmlCcGMxVlNURk5sWVhKamFGQmhjbUZ0Y3loMllXd3BJSHRjYmlBZ2NtVjBkWEp1SUhSNWNHVnZaaUJWVWt4VFpXRnlZMmhRWVhKaGJYTWdJVDA5SUNkMWJtUmxabWx1WldRbklDWW1JSFpoYkNCcGJuTjBZVzVqWlc5bUlGVlNURk5sWVhKamFGQmhjbUZ0Y3p0Y2JuMWNibHh1THlvcVhHNGdLaUJVY21sdElHVjRZMlZ6Y3lCM2FHbDBaWE53WVdObElHOW1aaUIwYUdVZ1ltVm5hVzV1YVc1bklHRnVaQ0JsYm1RZ2IyWWdZU0J6ZEhKcGJtZGNiaUFxWEc0Z0tpQkFjR0Z5WVcwZ2UxTjBjbWx1WjMwZ2MzUnlJRlJvWlNCVGRISnBibWNnZEc4Z2RISnBiVnh1SUNvZ1FISmxkSFZ5Ym5NZ2UxTjBjbWx1WjMwZ1ZHaGxJRk4wY21sdVp5Qm1jbVZsWkNCdlppQmxlR05sYzNNZ2QyaHBkR1Z6Y0dGalpWeHVJQ292WEc1bWRXNWpkR2x2YmlCMGNtbHRLSE4wY2lrZ2UxeHVJQ0J5WlhSMWNtNGdjM1J5TG5KbGNHeGhZMlVvTDE1Y1hITXFMeXdnSnljcExuSmxjR3hoWTJVb0wxeGNjeW9rTHl3Z0p5Y3BPMXh1ZlZ4dVhHNHZLaXBjYmlBcUlFUmxkR1Z5YldsdVpTQnBaaUIzWlNkeVpTQnlkVzV1YVc1bklHbHVJR0VnYzNSaGJtUmhjbVFnWW5KdmQzTmxjaUJsYm5acGNtOXViV1Z1ZEZ4dUlDcGNiaUFxSUZSb2FYTWdZV3hzYjNkeklHRjRhVzl6SUhSdklISjFiaUJwYmlCaElIZGxZaUIzYjNKclpYSXNJR0Z1WkNCeVpXRmpkQzF1WVhScGRtVXVYRzRnS2lCQ2IzUm9JR1Z1ZG1seWIyNXRaVzUwY3lCemRYQndiM0owSUZoTlRFaDBkSEJTWlhGMVpYTjBMQ0JpZFhRZ2JtOTBJR1oxYkd4NUlITjBZVzVrWVhKa0lHZHNiMkpoYkhNdVhHNGdLbHh1SUNvZ2QyVmlJSGR2Y210bGNuTTZYRzRnS2lBZ2RIbHdaVzltSUhkcGJtUnZkeUF0UGlCMWJtUmxabWx1WldSY2JpQXFJQ0IwZVhCbGIyWWdaRzlqZFcxbGJuUWdMVDRnZFc1a1pXWnBibVZrWEc0Z0tseHVJQ29nY21WaFkzUXRibUYwYVhabE9seHVJQ29nSUc1aGRtbG5ZWFJ2Y2k1d2NtOWtkV04wSUMwK0lDZFNaV0ZqZEU1aGRHbDJaU2RjYmlBcUwxeHVablZ1WTNScGIyNGdhWE5UZEdGdVpHRnlaRUp5YjNkelpYSkZibllvS1NCN1hHNGdJR2xtSUNoMGVYQmxiMllnYm1GMmFXZGhkRzl5SUNFOVBTQW5kVzVrWldacGJtVmtKeUFtSmlCdVlYWnBaMkYwYjNJdWNISnZaSFZqZENBOVBUMGdKMUpsWVdOMFRtRjBhWFpsSnlrZ2UxeHVJQ0FnSUhKbGRIVnliaUJtWVd4elpUdGNiaUFnZlZ4dUlDQnlaWFIxY200Z0tGeHVJQ0FnSUhSNWNHVnZaaUIzYVc1a2IzY2dJVDA5SUNkMWJtUmxabWx1WldRbklDWW1YRzRnSUNBZ2RIbHdaVzltSUdSdlkzVnRaVzUwSUNFOVBTQW5kVzVrWldacGJtVmtKMXh1SUNBcE8xeHVmVnh1WEc0dktpcGNiaUFxSUVsMFpYSmhkR1VnYjNabGNpQmhiaUJCY25KaGVTQnZjaUJoYmlCUFltcGxZM1FnYVc1MmIydHBibWNnWVNCbWRXNWpkR2x2YmlCbWIzSWdaV0ZqYUNCcGRHVnRMbHh1SUNwY2JpQXFJRWxtSUdCdlltcGdJR2x6SUdGdUlFRnljbUY1SUdOaGJHeGlZV05ySUhkcGJHd2dZbVVnWTJGc2JHVmtJSEJoYzNOcGJtZGNiaUFxSUhSb1pTQjJZV3gxWlN3Z2FXNWtaWGdzSUdGdVpDQmpiMjF3YkdWMFpTQmhjbkpoZVNCbWIzSWdaV0ZqYUNCcGRHVnRMbHh1SUNwY2JpQXFJRWxtSUNkdlltb25JR2x6SUdGdUlFOWlhbVZqZENCallXeHNZbUZqYXlCM2FXeHNJR0psSUdOaGJHeGxaQ0J3WVhOemFXNW5YRzRnS2lCMGFHVWdkbUZzZFdVc0lHdGxlU3dnWVc1a0lHTnZiWEJzWlhSbElHOWlhbVZqZENCbWIzSWdaV0ZqYUNCd2NtOXdaWEowZVM1Y2JpQXFYRzRnS2lCQWNHRnlZVzBnZTA5aWFtVmpkSHhCY25KaGVYMGdiMkpxSUZSb1pTQnZZbXBsWTNRZ2RHOGdhWFJsY21GMFpWeHVJQ29nUUhCaGNtRnRJSHRHZFc1amRHbHZibjBnWm00Z1ZHaGxJR05oYkd4aVlXTnJJSFJ2SUdsdWRtOXJaU0JtYjNJZ1pXRmphQ0JwZEdWdFhHNGdLaTljYm1aMWJtTjBhVzl1SUdadmNrVmhZMmdvYjJKcUxDQm1iaWtnZTF4dUlDQXZMeUJFYjI0bmRDQmliM1JvWlhJZ2FXWWdibThnZG1Gc2RXVWdjSEp2ZG1sa1pXUmNiaUFnYVdZZ0tHOWlhaUE5UFQwZ2JuVnNiQ0I4ZkNCMGVYQmxiMllnYjJKcUlEMDlQU0FuZFc1a1pXWnBibVZrSnlrZ2UxeHVJQ0FnSUhKbGRIVnlianRjYmlBZ2ZWeHVYRzRnSUM4dklFWnZjbU5sSUdGdUlHRnljbUY1SUdsbUlHNXZkQ0JoYkhKbFlXUjVJSE52YldWMGFHbHVaeUJwZEdWeVlXSnNaVnh1SUNCcFppQW9kSGx3Wlc5bUlHOWlhaUFoUFQwZ0oyOWlhbVZqZENjcElIdGNiaUFnSUNBdkttVnpiR2x1ZENCdWJ5MXdZWEpoYlMxeVpXRnpjMmxuYmpvd0tpOWNiaUFnSUNCdlltb2dQU0JiYjJKcVhUdGNiaUFnZlZ4dVhHNGdJR2xtSUNocGMwRnljbUY1S0c5aWFpa3BJSHRjYmlBZ0lDQXZMeUJKZEdWeVlYUmxJRzkyWlhJZ1lYSnlZWGtnZG1Gc2RXVnpYRzRnSUNBZ1ptOXlJQ2gyWVhJZ2FTQTlJREFzSUd3Z1BTQnZZbW91YkdWdVozUm9PeUJwSUR3Z2JEc2dhU3NyS1NCN1hHNGdJQ0FnSUNCbWJpNWpZV3hzS0c1MWJHd3NJRzlpYWx0cFhTd2dhU3dnYjJKcUtUdGNiaUFnSUNCOVhHNGdJSDBnWld4elpTQjdYRzRnSUNBZ0x5OGdTWFJsY21GMFpTQnZkbVZ5SUc5aWFtVmpkQ0JyWlhselhHNGdJQ0FnWm05eUlDaDJZWElnYTJWNUlHbHVJRzlpYWlrZ2UxeHVJQ0FnSUNBZ2FXWWdLRTlpYW1WamRDNXdjbTkwYjNSNWNHVXVhR0Z6VDNkdVVISnZjR1Z5ZEhrdVkyRnNiQ2h2WW1vc0lHdGxlU2twSUh0Y2JpQWdJQ0FnSUNBZ1ptNHVZMkZzYkNodWRXeHNMQ0J2WW1wYmEyVjVYU3dnYTJWNUxDQnZZbW9wTzF4dUlDQWdJQ0FnZlZ4dUlDQWdJSDFjYmlBZ2ZWeHVmVnh1WEc0dktpcGNiaUFxSUVGalkyVndkSE1nZG1GeVlYSm5jeUJsZUhCbFkzUnBibWNnWldGamFDQmhjbWQxYldWdWRDQjBieUJpWlNCaGJpQnZZbXBsWTNRc0lIUm9aVzVjYmlBcUlHbHRiWFYwWVdKc2VTQnRaWEpuWlhNZ2RHaGxJSEJ5YjNCbGNuUnBaWE1nYjJZZ1pXRmphQ0J2WW1wbFkzUWdZVzVrSUhKbGRIVnlibk1nY21WemRXeDBMbHh1SUNwY2JpQXFJRmRvWlc0Z2JYVnNkR2x3YkdVZ2IySnFaV04wY3lCamIyNTBZV2x1SUhSb1pTQnpZVzFsSUd0bGVTQjBhR1VnYkdGMFpYSWdiMkpxWldOMElHbHVYRzRnS2lCMGFHVWdZWEpuZFcxbGJuUnpJR3hwYzNRZ2QybHNiQ0IwWVd0bElIQnlaV05sWkdWdVkyVXVYRzRnS2x4dUlDb2dSWGhoYlhCc1pUcGNiaUFxWEc0Z0tpQmdZR0JxYzF4dUlDb2dkbUZ5SUhKbGMzVnNkQ0E5SUcxbGNtZGxLSHRtYjI4NklERXlNMzBzSUh0bWIyODZJRFExTm4wcE8xeHVJQ29nWTI5dWMyOXNaUzVzYjJjb2NtVnpkV3gwTG1admJ5azdJQzh2SUc5MWRIQjFkSE1nTkRVMlhHNGdLaUJnWUdCY2JpQXFYRzRnS2lCQWNHRnlZVzBnZTA5aWFtVmpkSDBnYjJKcU1TQlBZbXBsWTNRZ2RHOGdiV1Z5WjJWY2JpQXFJRUJ5WlhSMWNtNXpJSHRQWW1wbFkzUjlJRkpsYzNWc2RDQnZaaUJoYkd3Z2JXVnlaMlVnY0hKdmNHVnlkR2xsYzF4dUlDb3ZYRzVtZFc1amRHbHZiaUJ0WlhKblpTZ3ZLaUJ2WW1veExDQnZZbW95TENCdlltb3pMQ0F1TGk0Z0tpOHBJSHRjYmlBZ2RtRnlJSEpsYzNWc2RDQTlJSHQ5TzF4dUlDQm1kVzVqZEdsdmJpQmhjM05wWjI1V1lXeDFaU2gyWVd3c0lHdGxlU2tnZTF4dUlDQWdJR2xtSUNoMGVYQmxiMllnY21WemRXeDBXMnRsZVYwZ1BUMDlJQ2R2WW1wbFkzUW5JQ1ltSUhSNWNHVnZaaUIyWVd3Z1BUMDlJQ2R2WW1wbFkzUW5LU0I3WEc0Z0lDQWdJQ0J5WlhOMWJIUmJhMlY1WFNBOUlHMWxjbWRsS0hKbGMzVnNkRnRyWlhsZExDQjJZV3dwTzF4dUlDQWdJSDBnWld4elpTQjdYRzRnSUNBZ0lDQnlaWE4xYkhSYmEyVjVYU0E5SUhaaGJEdGNiaUFnSUNCOVhHNGdJSDFjYmx4dUlDQm1iM0lnS0haaGNpQnBJRDBnTUN3Z2JDQTlJR0Z5WjNWdFpXNTBjeTVzWlc1bmRHZzdJR2tnUENCc095QnBLeXNwSUh0Y2JpQWdJQ0JtYjNKRllXTm9LR0Z5WjNWdFpXNTBjMXRwWFN3Z1lYTnphV2R1Vm1Gc2RXVXBPMXh1SUNCOVhHNGdJSEpsZEhWeWJpQnlaWE4xYkhRN1hHNTlYRzVjYmk4cUtseHVJQ29nUlhoMFpXNWtjeUJ2WW1wbFkzUWdZU0JpZVNCdGRYUmhZbXg1SUdGa1pHbHVaeUIwYnlCcGRDQjBhR1VnY0hKdmNHVnlkR2xsY3lCdlppQnZZbXBsWTNRZ1lpNWNiaUFxWEc0Z0tpQkFjR0Z5WVcwZ2UwOWlhbVZqZEgwZ1lTQlVhR1VnYjJKcVpXTjBJSFJ2SUdKbElHVjRkR1Z1WkdWa1hHNGdLaUJBY0dGeVlXMGdlMDlpYW1WamRIMGdZaUJVYUdVZ2IySnFaV04wSUhSdklHTnZjSGtnY0hKdmNHVnlkR2xsY3lCbWNtOXRYRzRnS2lCQWNHRnlZVzBnZTA5aWFtVmpkSDBnZEdocGMwRnlaeUJVYUdVZ2IySnFaV04wSUhSdklHSnBibVFnWm5WdVkzUnBiMjRnZEc5Y2JpQXFJRUJ5WlhSMWNtNGdlMDlpYW1WamRIMGdWR2hsSUhKbGMzVnNkR2x1WnlCMllXeDFaU0J2WmlCdlltcGxZM1FnWVZ4dUlDb3ZYRzVtZFc1amRHbHZiaUJsZUhSbGJtUW9ZU3dnWWl3Z2RHaHBjMEZ5WnlrZ2UxeHVJQ0JtYjNKRllXTm9LR0lzSUdaMWJtTjBhVzl1SUdGemMybG5ibFpoYkhWbEtIWmhiQ3dnYTJWNUtTQjdYRzRnSUNBZ2FXWWdLSFJvYVhOQmNtY2dKaVlnZEhsd1pXOW1JSFpoYkNBOVBUMGdKMloxYm1OMGFXOXVKeWtnZTF4dUlDQWdJQ0FnWVZ0clpYbGRJRDBnWW1sdVpDaDJZV3dzSUhSb2FYTkJjbWNwTzF4dUlDQWdJSDBnWld4elpTQjdYRzRnSUNBZ0lDQmhXMnRsZVYwZ1BTQjJZV3c3WEc0Z0lDQWdmVnh1SUNCOUtUdGNiaUFnY21WMGRYSnVJR0U3WEc1OVhHNWNibTF2WkhWc1pTNWxlSEJ2Y25SeklEMGdlMXh1SUNCcGMwRnljbUY1T2lCcGMwRnljbUY1TEZ4dUlDQnBjMEZ5Y21GNVFuVm1abVZ5T2lCcGMwRnljbUY1UW5WbVptVnlMRnh1SUNCcGMwSjFabVpsY2pvZ2FYTkNkV1ptWlhJc1hHNGdJR2x6Um05eWJVUmhkR0U2SUdselJtOXliVVJoZEdFc1hHNGdJR2x6UVhKeVlYbENkV1ptWlhKV2FXVjNPaUJwYzBGeWNtRjVRblZtWm1WeVZtbGxkeXhjYmlBZ2FYTlRkSEpwYm1jNklHbHpVM1J5YVc1bkxGeHVJQ0JwYzA1MWJXSmxjam9nYVhOT2RXMWlaWElzWEc0Z0lHbHpUMkpxWldOME9pQnBjMDlpYW1WamRDeGNiaUFnYVhOVmJtUmxabWx1WldRNklHbHpWVzVrWldacGJtVmtMRnh1SUNCcGMwUmhkR1U2SUdselJHRjBaU3hjYmlBZ2FYTkdhV3hsT2lCcGMwWnBiR1VzWEc0Z0lHbHpRbXh2WWpvZ2FYTkNiRzlpTEZ4dUlDQnBjMFoxYm1OMGFXOXVPaUJwYzBaMWJtTjBhVzl1TEZ4dUlDQnBjMU4wY21WaGJUb2dhWE5UZEhKbFlXMHNYRzRnSUdselZWSk1VMlZoY21Ob1VHRnlZVzF6T2lCcGMxVlNURk5sWVhKamFGQmhjbUZ0Y3l4Y2JpQWdhWE5UZEdGdVpHRnlaRUp5YjNkelpYSkZiblk2SUdselUzUmhibVJoY21SQ2NtOTNjMlZ5Ulc1MkxGeHVJQ0JtYjNKRllXTm9PaUJtYjNKRllXTm9MRnh1SUNCdFpYSm5aVG9nYldWeVoyVXNYRzRnSUdWNGRHVnVaRG9nWlhoMFpXNWtMRnh1SUNCMGNtbHRPaUIwY21sdFhHNTlPMXh1SWl3aUx5b2hYRzRnS2lCRVpYUmxjbTFwYm1VZ2FXWWdZVzRnYjJKcVpXTjBJR2x6SUdFZ1FuVm1abVZ5WEc0Z0tseHVJQ29nUUdGMWRHaHZjaUFnSUVabGNtOXpjeUJCWW05MWEyaGhaR2xxWldnZ1BHaDBkSEJ6T2k4dlptVnliM056TG05eVp6NWNiaUFxSUVCc2FXTmxibk5sSUNCTlNWUmNiaUFxTDF4dVhHNHZMeUJVYUdVZ1gybHpRblZtWm1WeUlHTm9aV05ySUdseklHWnZjaUJUWVdaaGNta2dOUzAzSUhOMWNIQnZjblFzSUdKbFkyRjFjMlVnYVhRbmN5QnRhWE56YVc1blhHNHZMeUJQWW1wbFkzUXVjSEp2ZEc5MGVYQmxMbU52Ym5OMGNuVmpkRzl5TGlCU1pXMXZkbVVnZEdocGN5QmxkbVZ1ZEhWaGJHeDVYRzV0YjJSMWJHVXVaWGh3YjNKMGN5QTlJR1oxYm1OMGFXOXVJQ2h2WW1vcElIdGNiaUFnY21WMGRYSnVJRzlpYWlBaFBTQnVkV3hzSUNZbUlDaHBjMEoxWm1abGNpaHZZbW9wSUh4OElHbHpVMnh2ZDBKMVptWmxjaWh2WW1vcElIeDhJQ0VoYjJKcUxsOXBjMEoxWm1abGNpbGNibjFjYmx4dVpuVnVZM1JwYjI0Z2FYTkNkV1ptWlhJZ0tHOWlhaWtnZTF4dUlDQnlaWFIxY200Z0lTRnZZbW91WTI5dWMzUnlkV04wYjNJZ0ppWWdkSGx3Wlc5bUlHOWlhaTVqYjI1emRISjFZM1J2Y2k1cGMwSjFabVpsY2lBOVBUMGdKMloxYm1OMGFXOXVKeUFtSmlCdlltb3VZMjl1YzNSeWRXTjBiM0l1YVhOQ2RXWm1aWElvYjJKcUtWeHVmVnh1WEc0dkx5QkdiM0lnVG05a1pTQjJNQzR4TUNCemRYQndiM0owTGlCU1pXMXZkbVVnZEdocGN5QmxkbVZ1ZEhWaGJHeDVMbHh1Wm5WdVkzUnBiMjRnYVhOVGJHOTNRblZtWm1WeUlDaHZZbW9wSUh0Y2JpQWdjbVYwZFhKdUlIUjVjR1Z2WmlCdlltb3VjbVZoWkVac2IyRjBURVVnUFQwOUlDZG1kVzVqZEdsdmJpY2dKaVlnZEhsd1pXOW1JRzlpYWk1emJHbGpaU0E5UFQwZ0oyWjFibU4wYVc5dUp5QW1KaUJwYzBKMVptWmxjaWh2WW1vdWMyeHBZMlVvTUN3Z01Da3BYRzU5WEc0aUxDSXZMeUJ6YUdsdElHWnZjaUIxYzJsdVp5QndjbTlqWlhOeklHbHVJR0p5YjNkelpYSmNiblpoY2lCd2NtOWpaWE56SUQwZ2JXOWtkV3hsTG1WNGNHOXlkSE1nUFNCN2ZUdGNibHh1THk4Z1kyRmphR1ZrSUdaeWIyMGdkMmhoZEdWMlpYSWdaMnh2WW1Gc0lHbHpJSEJ5WlhObGJuUWdjMjhnZEdoaGRDQjBaWE4wSUhKMWJtNWxjbk1nZEdoaGRDQnpkSFZpSUdsMFhHNHZMeUJrYjI0bmRDQmljbVZoYXlCMGFHbHVaM011SUNCQ2RYUWdkMlVnYm1WbFpDQjBieUIzY21Gd0lHbDBJR2x1SUdFZ2RISjVJR05oZEdOb0lHbHVJR05oYzJVZ2FYUWdhWE5jYmk4dklIZHlZWEJ3WldRZ2FXNGdjM1J5YVdOMElHMXZaR1VnWTI5a1pTQjNhR2xqYUNCa2IyVnpiaWQwSUdSbFptbHVaU0JoYm5rZ1oyeHZZbUZzY3k0Z0lFbDBKM01nYVc1emFXUmxJR0ZjYmk4dklHWjFibU4wYVc5dUlHSmxZMkYxYzJVZ2RISjVMMk5oZEdOb1pYTWdaR1Z2Y0hScGJXbDZaU0JwYmlCalpYSjBZV2x1SUdWdVoybHVaWE11WEc1Y2JuWmhjaUJqWVdOb1pXUlRaWFJVYVcxbGIzVjBPMXh1ZG1GeUlHTmhZMmhsWkVOc1pXRnlWR2x0Wlc5MWREdGNibHh1Wm5WdVkzUnBiMjRnWkdWbVlYVnNkRk5sZEZScGJXOTFkQ2dwSUh0Y2JpQWdJQ0IwYUhKdmR5QnVaWGNnUlhKeWIzSW9KM05sZEZScGJXVnZkWFFnYUdGeklHNXZkQ0JpWldWdUlHUmxabWx1WldRbktUdGNibjFjYm1aMWJtTjBhVzl1SUdSbFptRjFiSFJEYkdWaGNsUnBiV1Z2ZFhRZ0tDa2dlMXh1SUNBZ0lIUm9jbTkzSUc1bGR5QkZjbkp2Y2lnblkyeGxZWEpVYVcxbGIzVjBJR2hoY3lCdWIzUWdZbVZsYmlCa1pXWnBibVZrSnlrN1hHNTlYRzRvWm5WdVkzUnBiMjRnS0NrZ2UxeHVJQ0FnSUhSeWVTQjdYRzRnSUNBZ0lDQWdJR2xtSUNoMGVYQmxiMllnYzJWMFZHbHRaVzkxZENBOVBUMGdKMloxYm1OMGFXOXVKeWtnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdZMkZqYUdWa1UyVjBWR2x0Wlc5MWRDQTlJSE5sZEZScGJXVnZkWFE3WEc0Z0lDQWdJQ0FnSUgwZ1pXeHpaU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQmpZV05vWldSVFpYUlVhVzFsYjNWMElEMGdaR1ZtWVhWc2RGTmxkRlJwYlc5MWREdGNiaUFnSUNBZ0lDQWdmVnh1SUNBZ0lIMGdZMkYwWTJnZ0tHVXBJSHRjYmlBZ0lDQWdJQ0FnWTJGamFHVmtVMlYwVkdsdFpXOTFkQ0E5SUdSbFptRjFiSFJUWlhSVWFXMXZkWFE3WEc0Z0lDQWdmVnh1SUNBZ0lIUnllU0I3WEc0Z0lDQWdJQ0FnSUdsbUlDaDBlWEJsYjJZZ1kyeGxZWEpVYVcxbGIzVjBJRDA5UFNBblpuVnVZM1JwYjI0bktTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCallXTm9aV1JEYkdWaGNsUnBiV1Z2ZFhRZ1BTQmpiR1ZoY2xScGJXVnZkWFE3WEc0Z0lDQWdJQ0FnSUgwZ1pXeHpaU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQmpZV05vWldSRGJHVmhjbFJwYldWdmRYUWdQU0JrWldaaGRXeDBRMnhsWVhKVWFXMWxiM1YwTzF4dUlDQWdJQ0FnSUNCOVhHNGdJQ0FnZlNCallYUmphQ0FvWlNrZ2UxeHVJQ0FnSUNBZ0lDQmpZV05vWldSRGJHVmhjbFJwYldWdmRYUWdQU0JrWldaaGRXeDBRMnhsWVhKVWFXMWxiM1YwTzF4dUlDQWdJSDFjYm4wZ0tDa3BYRzVtZFc1amRHbHZiaUJ5ZFc1VWFXMWxiM1YwS0daMWJpa2dlMXh1SUNBZ0lHbG1JQ2hqWVdOb1pXUlRaWFJVYVcxbGIzVjBJRDA5UFNCelpYUlVhVzFsYjNWMEtTQjdYRzRnSUNBZ0lDQWdJQzh2Ym05eWJXRnNJR1Z1ZG1seWIyMWxiblJ6SUdsdUlITmhibVVnYzJsMGRXRjBhVzl1YzF4dUlDQWdJQ0FnSUNCeVpYUjFjbTRnYzJWMFZHbHRaVzkxZENobWRXNHNJREFwTzF4dUlDQWdJSDFjYmlBZ0lDQXZMeUJwWmlCelpYUlVhVzFsYjNWMElIZGhjMjRuZENCaGRtRnBiR0ZpYkdVZ1luVjBJSGRoY3lCc1lYUjBaWElnWkdWbWFXNWxaRnh1SUNBZ0lHbG1JQ2dvWTJGamFHVmtVMlYwVkdsdFpXOTFkQ0E5UFQwZ1pHVm1ZWFZzZEZObGRGUnBiVzkxZENCOGZDQWhZMkZqYUdWa1UyVjBWR2x0Wlc5MWRDa2dKaVlnYzJWMFZHbHRaVzkxZENrZ2UxeHVJQ0FnSUNBZ0lDQmpZV05vWldSVFpYUlVhVzFsYjNWMElEMGdjMlYwVkdsdFpXOTFkRHRjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJSE5sZEZScGJXVnZkWFFvWm5WdUxDQXdLVHRjYmlBZ0lDQjlYRzRnSUNBZ2RISjVJSHRjYmlBZ0lDQWdJQ0FnTHk4Z2QyaGxiaUIzYUdWdUlITnZiV1ZpYjJSNUlHaGhjeUJ6WTNKbGQyVmtJSGRwZEdnZ2MyVjBWR2x0Wlc5MWRDQmlkWFFnYm04Z1NTNUZMaUJ0WVdSa2JtVnpjMXh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdZMkZqYUdWa1UyVjBWR2x0Wlc5MWRDaG1kVzRzSURBcE8xeHVJQ0FnSUgwZ1kyRjBZMmdvWlNsN1hHNGdJQ0FnSUNBZ0lIUnllU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQXZMeUJYYUdWdUlIZGxJR0Z5WlNCcGJpQkpMa1V1SUdKMWRDQjBhR1VnYzJOeWFYQjBJR2hoY3lCaVpXVnVJR1YyWVd4bFpDQnpieUJKTGtVdUlHUnZaWE51SjNRZ2RISjFjM1FnZEdobElHZHNiMkpoYkNCdlltcGxZM1FnZDJobGJpQmpZV3hzWldRZ2JtOXliV0ZzYkhsY2JpQWdJQ0FnSUNBZ0lDQWdJSEpsZEhWeWJpQmpZV05vWldSVFpYUlVhVzFsYjNWMExtTmhiR3dvYm5Wc2JDd2dablZ1TENBd0tUdGNiaUFnSUNBZ0lDQWdmU0JqWVhSamFDaGxLWHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDOHZJSE5oYldVZ1lYTWdZV0p2ZG1VZ1luVjBJSGRvWlc0Z2FYUW5jeUJoSUhabGNuTnBiMjRnYjJZZ1NTNUZMaUIwYUdGMElHMTFjM1FnYUdGMlpTQjBhR1VnWjJ4dlltRnNJRzlpYW1WamRDQm1iM0lnSjNSb2FYTW5MQ0JvYjNCbWRXeHNlU0J2ZFhJZ1kyOXVkR1Y0ZENCamIzSnlaV04wSUc5MGFHVnlkMmx6WlNCcGRDQjNhV3hzSUhSb2NtOTNJR0VnWjJ4dlltRnNJR1Z5Y205eVhHNGdJQ0FnSUNBZ0lDQWdJQ0J5WlhSMWNtNGdZMkZqYUdWa1UyVjBWR2x0Wlc5MWRDNWpZV3hzS0hSb2FYTXNJR1oxYml3Z01DazdYRzRnSUNBZ0lDQWdJSDFjYmlBZ0lDQjlYRzVjYmx4dWZWeHVablZ1WTNScGIyNGdjblZ1UTJ4bFlYSlVhVzFsYjNWMEtHMWhjbXRsY2lrZ2UxeHVJQ0FnSUdsbUlDaGpZV05vWldSRGJHVmhjbFJwYldWdmRYUWdQVDA5SUdOc1pXRnlWR2x0Wlc5MWRDa2dlMXh1SUNBZ0lDQWdJQ0F2TDI1dmNtMWhiQ0JsYm5acGNtOXRaVzUwY3lCcGJpQnpZVzVsSUhOcGRIVmhkR2x2Ym5OY2JpQWdJQ0FnSUNBZ2NtVjBkWEp1SUdOc1pXRnlWR2x0Wlc5MWRDaHRZWEpyWlhJcE8xeHVJQ0FnSUgxY2JpQWdJQ0F2THlCcFppQmpiR1ZoY2xScGJXVnZkWFFnZDJGemJpZDBJR0YyWVdsc1lXSnNaU0JpZFhRZ2QyRnpJR3hoZEhSbGNpQmtaV1pwYm1Wa1hHNGdJQ0FnYVdZZ0tDaGpZV05vWldSRGJHVmhjbFJwYldWdmRYUWdQVDA5SUdSbFptRjFiSFJEYkdWaGNsUnBiV1Z2ZFhRZ2ZId2dJV05oWTJobFpFTnNaV0Z5VkdsdFpXOTFkQ2tnSmlZZ1kyeGxZWEpVYVcxbGIzVjBLU0I3WEc0Z0lDQWdJQ0FnSUdOaFkyaGxaRU5zWldGeVZHbHRaVzkxZENBOUlHTnNaV0Z5VkdsdFpXOTFkRHRjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJR05zWldGeVZHbHRaVzkxZENodFlYSnJaWElwTzF4dUlDQWdJSDFjYmlBZ0lDQjBjbmtnZTF4dUlDQWdJQ0FnSUNBdkx5QjNhR1Z1SUhkb1pXNGdjMjl0WldKdlpIa2dhR0Z6SUhOamNtVjNaV1FnZDJsMGFDQnpaWFJVYVcxbGIzVjBJR0oxZENCdWJ5QkpMa1V1SUcxaFpHUnVaWE56WEc0Z0lDQWdJQ0FnSUhKbGRIVnliaUJqWVdOb1pXUkRiR1ZoY2xScGJXVnZkWFFvYldGeWEyVnlLVHRjYmlBZ0lDQjlJR05oZEdOb0lDaGxLWHRjYmlBZ0lDQWdJQ0FnZEhKNUlIdGNiaUFnSUNBZ0lDQWdJQ0FnSUM4dklGZG9aVzRnZDJVZ1lYSmxJR2x1SUVrdVJTNGdZblYwSUhSb1pTQnpZM0pwY0hRZ2FHRnpJR0psWlc0Z1pYWmhiR1ZrSUhOdklFa3VSUzRnWkc5bGMyNG5kQ0FnZEhKMWMzUWdkR2hsSUdkc2IySmhiQ0J2WW1wbFkzUWdkMmhsYmlCallXeHNaV1FnYm05eWJXRnNiSGxjYmlBZ0lDQWdJQ0FnSUNBZ0lISmxkSFZ5YmlCallXTm9aV1JEYkdWaGNsUnBiV1Z2ZFhRdVkyRnNiQ2h1ZFd4c0xDQnRZWEpyWlhJcE8xeHVJQ0FnSUNBZ0lDQjlJR05oZEdOb0lDaGxLWHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDOHZJSE5oYldVZ1lYTWdZV0p2ZG1VZ1luVjBJSGRvWlc0Z2FYUW5jeUJoSUhabGNuTnBiMjRnYjJZZ1NTNUZMaUIwYUdGMElHMTFjM1FnYUdGMlpTQjBhR1VnWjJ4dlltRnNJRzlpYW1WamRDQm1iM0lnSjNSb2FYTW5MQ0JvYjNCbWRXeHNlU0J2ZFhJZ1kyOXVkR1Y0ZENCamIzSnlaV04wSUc5MGFHVnlkMmx6WlNCcGRDQjNhV3hzSUhSb2NtOTNJR0VnWjJ4dlltRnNJR1Z5Y205eUxseHVJQ0FnSUNBZ0lDQWdJQ0FnTHk4Z1UyOXRaU0IyWlhKemFXOXVjeUJ2WmlCSkxrVXVJR2hoZG1VZ1pHbG1abVZ5Wlc1MElISjFiR1Z6SUdadmNpQmpiR1ZoY2xScGJXVnZkWFFnZG5NZ2MyVjBWR2x0Wlc5MWRGeHVJQ0FnSUNBZ0lDQWdJQ0FnY21WMGRYSnVJR05oWTJobFpFTnNaV0Z5VkdsdFpXOTFkQzVqWVd4c0tIUm9hWE1zSUcxaGNtdGxjaWs3WEc0Z0lDQWdJQ0FnSUgxY2JpQWdJQ0I5WEc1Y2JseHVYRzU5WEc1MllYSWdjWFZsZFdVZ1BTQmJYVHRjYm5aaGNpQmtjbUZwYm1sdVp5QTlJR1poYkhObE8xeHVkbUZ5SUdOMWNuSmxiblJSZFdWMVpUdGNiblpoY2lCeGRXVjFaVWx1WkdWNElEMGdMVEU3WEc1Y2JtWjFibU4wYVc5dUlHTnNaV0Z1VlhCT1pYaDBWR2xqYXlncElIdGNiaUFnSUNCcFppQW9JV1J5WVdsdWFXNW5JSHg4SUNGamRYSnlaVzUwVVhWbGRXVXBJSHRjYmlBZ0lDQWdJQ0FnY21WMGRYSnVPMXh1SUNBZ0lIMWNiaUFnSUNCa2NtRnBibWx1WnlBOUlHWmhiSE5sTzF4dUlDQWdJR2xtSUNoamRYSnlaVzUwVVhWbGRXVXViR1Z1WjNSb0tTQjdYRzRnSUNBZ0lDQWdJSEYxWlhWbElEMGdZM1Z5Y21WdWRGRjFaWFZsTG1OdmJtTmhkQ2h4ZFdWMVpTazdYRzRnSUNBZ2ZTQmxiSE5sSUh0Y2JpQWdJQ0FnSUNBZ2NYVmxkV1ZKYm1SbGVDQTlJQzB4TzF4dUlDQWdJSDFjYmlBZ0lDQnBaaUFvY1hWbGRXVXViR1Z1WjNSb0tTQjdYRzRnSUNBZ0lDQWdJR1J5WVdsdVVYVmxkV1VvS1R0Y2JpQWdJQ0I5WEc1OVhHNWNibVoxYm1OMGFXOXVJR1J5WVdsdVVYVmxkV1VvS1NCN1hHNGdJQ0FnYVdZZ0tHUnlZV2x1YVc1bktTQjdYRzRnSUNBZ0lDQWdJSEpsZEhWeWJqdGNiaUFnSUNCOVhHNGdJQ0FnZG1GeUlIUnBiV1Z2ZFhRZ1BTQnlkVzVVYVcxbGIzVjBLR05zWldGdVZYQk9aWGgwVkdsamF5azdYRzRnSUNBZ1pISmhhVzVwYm1jZ1BTQjBjblZsTzF4dVhHNGdJQ0FnZG1GeUlHeGxiaUE5SUhGMVpYVmxMbXhsYm1kMGFEdGNiaUFnSUNCM2FHbHNaU2hzWlc0cElIdGNiaUFnSUNBZ0lDQWdZM1Z5Y21WdWRGRjFaWFZsSUQwZ2NYVmxkV1U3WEc0Z0lDQWdJQ0FnSUhGMVpYVmxJRDBnVzEwN1hHNGdJQ0FnSUNBZ0lIZG9hV3hsSUNnckszRjFaWFZsU1c1a1pYZ2dQQ0JzWlc0cElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUdsbUlDaGpkWEp5Wlc1MFVYVmxkV1VwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCamRYSnlaVzUwVVhWbGRXVmJjWFZsZFdWSmJtUmxlRjB1Y25WdUtDazdYRzRnSUNBZ0lDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdjWFZsZFdWSmJtUmxlQ0E5SUMweE8xeHVJQ0FnSUNBZ0lDQnNaVzRnUFNCeGRXVjFaUzVzWlc1bmRHZzdYRzRnSUNBZ2ZWeHVJQ0FnSUdOMWNuSmxiblJSZFdWMVpTQTlJRzUxYkd3N1hHNGdJQ0FnWkhKaGFXNXBibWNnUFNCbVlXeHpaVHRjYmlBZ0lDQnlkVzVEYkdWaGNsUnBiV1Z2ZFhRb2RHbHRaVzkxZENrN1hHNTlYRzVjYm5CeWIyTmxjM011Ym1WNGRGUnBZMnNnUFNCbWRXNWpkR2x2YmlBb1puVnVLU0I3WEc0Z0lDQWdkbUZ5SUdGeVozTWdQU0J1WlhjZ1FYSnlZWGtvWVhKbmRXMWxiblJ6TG14bGJtZDBhQ0F0SURFcE8xeHVJQ0FnSUdsbUlDaGhjbWQxYldWdWRITXViR1Z1WjNSb0lENGdNU2tnZTF4dUlDQWdJQ0FnSUNCbWIzSWdLSFpoY2lCcElEMGdNVHNnYVNBOElHRnlaM1Z0Wlc1MGN5NXNaVzVuZEdnN0lHa3JLeWtnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdZWEpuYzF0cElDMGdNVjBnUFNCaGNtZDFiV1Z1ZEhOYmFWMDdYRzRnSUNBZ0lDQWdJSDFjYmlBZ0lDQjlYRzRnSUNBZ2NYVmxkV1V1Y0hWemFDaHVaWGNnU1hSbGJTaG1kVzRzSUdGeVozTXBLVHRjYmlBZ0lDQnBaaUFvY1hWbGRXVXViR1Z1WjNSb0lEMDlQU0F4SUNZbUlDRmtjbUZwYm1sdVp5a2dlMXh1SUNBZ0lDQWdJQ0J5ZFc1VWFXMWxiM1YwS0dSeVlXbHVVWFZsZFdVcE8xeHVJQ0FnSUgxY2JuMDdYRzVjYmk4dklIWTRJR3hwYTJWeklIQnlaV1JwWTNScFlteGxJRzlpYW1WamRITmNibVoxYm1OMGFXOXVJRWwwWlcwb1puVnVMQ0JoY25KaGVTa2dlMXh1SUNBZ0lIUm9hWE11Wm5WdUlEMGdablZ1TzF4dUlDQWdJSFJvYVhNdVlYSnlZWGtnUFNCaGNuSmhlVHRjYm4xY2JrbDBaVzB1Y0hKdmRHOTBlWEJsTG5KMWJpQTlJR1oxYm1OMGFXOXVJQ2dwSUh0Y2JpQWdJQ0IwYUdsekxtWjFiaTVoY0hCc2VTaHVkV3hzTENCMGFHbHpMbUZ5Y21GNUtUdGNibjA3WEc1d2NtOWpaWE56TG5ScGRHeGxJRDBnSjJKeWIzZHpaWEluTzF4dWNISnZZMlZ6Y3k1aWNtOTNjMlZ5SUQwZ2RISjFaVHRjYm5CeWIyTmxjM011Wlc1MklEMGdlMzA3WEc1d2NtOWpaWE56TG1GeVozWWdQU0JiWFR0Y2JuQnliMk5sYzNNdWRtVnljMmx2YmlBOUlDY25PeUF2THlCbGJYQjBlU0J6ZEhKcGJtY2dkRzhnWVhadmFXUWdjbVZuWlhod0lHbHpjM1ZsYzF4dWNISnZZMlZ6Y3k1MlpYSnphVzl1Y3lBOUlIdDlPMXh1WEc1bWRXNWpkR2x2YmlCdWIyOXdLQ2tnZTMxY2JseHVjSEp2WTJWemN5NXZiaUE5SUc1dmIzQTdYRzV3Y205alpYTnpMbUZrWkV4cGMzUmxibVZ5SUQwZ2JtOXZjRHRjYm5CeWIyTmxjM011YjI1alpTQTlJRzV2YjNBN1hHNXdjbTlqWlhOekxtOW1aaUE5SUc1dmIzQTdYRzV3Y205alpYTnpMbkpsYlc5MlpVeHBjM1JsYm1WeUlEMGdibTl2Y0R0Y2JuQnliMk5sYzNNdWNtVnRiM1psUVd4c1RHbHpkR1Z1WlhKeklEMGdibTl2Y0R0Y2JuQnliMk5sYzNNdVpXMXBkQ0E5SUc1dmIzQTdYRzV3Y205alpYTnpMbkJ5WlhCbGJtUk1hWE4wWlc1bGNpQTlJRzV2YjNBN1hHNXdjbTlqWlhOekxuQnlaWEJsYm1SUGJtTmxUR2x6ZEdWdVpYSWdQU0J1YjI5d08xeHVYRzV3Y205alpYTnpMbXhwYzNSbGJtVnljeUE5SUdaMWJtTjBhVzl1SUNodVlXMWxLU0I3SUhKbGRIVnliaUJiWFNCOVhHNWNibkJ5YjJObGMzTXVZbWx1WkdsdVp5QTlJR1oxYm1OMGFXOXVJQ2h1WVcxbEtTQjdYRzRnSUNBZ2RHaHliM2NnYm1WM0lFVnljbTl5S0Nkd2NtOWpaWE56TG1KcGJtUnBibWNnYVhNZ2JtOTBJSE4xY0hCdmNuUmxaQ2NwTzF4dWZUdGNibHh1Y0hKdlkyVnpjeTVqZDJRZ1BTQm1kVzVqZEdsdmJpQW9LU0I3SUhKbGRIVnliaUFuTHljZ2ZUdGNibkJ5YjJObGMzTXVZMmhrYVhJZ1BTQm1kVzVqZEdsdmJpQW9aR2x5S1NCN1hHNGdJQ0FnZEdoeWIzY2dibVYzSUVWeWNtOXlLQ2R3Y205alpYTnpMbU5vWkdseUlHbHpJRzV2ZENCemRYQndiM0owWldRbktUdGNibjA3WEc1d2NtOWpaWE56TG5WdFlYTnJJRDBnWm5WdVkzUnBiMjRvS1NCN0lISmxkSFZ5YmlBd095QjlPMXh1SWl3aWFXMXdiM0owSUh0RWFYTndZWFJqYUdWeWZTQm1jbTl0SUZ3aUxpNHZaWFpsYm5SekwyUnBjM0JoZEdOb1pYSmNJanRjY2x4dVhISmNibVY0Y0c5eWRDQmpiR0Z6Y3lCRGFHRnVibVZzSUdWNGRHVnVaSE1nUkdsemNHRjBZMmhsY2lCN1hISmNiaUFnSUNCamIyNXpkSEoxWTNSdmNpaHVZVzFsTENCd2RYTm9aWElwSUh0Y2NseHVJQ0FnSUNBZ0lDQnpkWEJsY2lncE8xeHlYRzVjY2x4dUlDQWdJQ0FnSUNCMGFHbHpMbTVoYldVZ1BTQnVZVzFsTzF4eVhHNGdJQ0FnSUNBZ0lIUm9hWE11Y0hWemFHVnlJRDBnY0hWemFHVnlPMXh5WEc1Y2NseHVJQ0FnSUNBZ0lDQnBaaUFvZEdocGN5NXdkWE5vWlhJdWMyOWphMlYwTG5OMFlYUmxJRDA5SURFcElIdGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ2RHaHBjeTV6ZFdKelkzSnBZbVVvS1R0Y2NseHVJQ0FnSUNBZ0lDQjlYSEpjYmlBZ0lDQjlYSEpjYmx4eVhHNGdJQ0FnYzNWaWMyTnlhV0psS0NrZ2UxeHlYRzRnSUNBZ0lDQWdJSFJvYVhNdWNIVnphR1Z5TG5ObGJtUW9lMXh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQmxkbVZ1ZERvZ0ozTjFZbk5qY21saVpTY3NYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lHUmhkR0U2SUh0Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHTm9ZVzV1Wld3NklIUm9hWE11Ym1GdFpWeHlYRzRnSUNBZ0lDQWdJQ0FnSUNCOVhISmNiaUFnSUNBZ0lDQWdmU2s3WEhKY2JpQWdJQ0I5WEhKY2JseHlYRzRnSUNBZ2RXNXpkV0p6WTNKcFltVW9LU0I3WEhKY2JpQWdJQ0FnSUNBZ2RHaHBjeTV3ZFhOb1pYSXVjMlZ1WkNoN1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUdWMlpXNTBPaUFuZFc1emRXSnpZM0pwWW1VbkxGeHlYRzRnSUNBZ0lDQWdJQ0FnSUNCa1lYUmhPaUI3WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCamFHRnVibVZzT2lCMGFHbHpMbTVoYldWY2NseHVJQ0FnSUNBZ0lDQWdJQ0FnZlZ4eVhHNGdJQ0FnSUNBZ0lIMHBPMXh5WEc0Z0lDQWdmVnh5WEc1OUlpd2lhVzF3YjNKMElIdERhR0Z1Ym1Wc2ZTQm1jbTl0SUZ3aUxpOWphR0Z1Ym1Wc1hDSTdYSEpjYm1sdGNHOXlkQ0I3VUhKbGMyVnVZMlZEYUdGdWJtVnNmU0JtY205dElGd2lMaTl3Y21WelpXNWpaVjlqYUdGdWJtVnNYQ0k3WEhKY2JtbHRjRzl5ZENCN1VISnBkbUYwWlVOb1lXNXVaV3g5SUdaeWIyMGdYQ0l1TDNCeWFYWmhkR1ZmWTJoaGJtNWxiRndpTzF4eVhHNWNjbHh1Wlhod2IzSjBJR05zWVhOeklFMWhibTVoWjJWeUlIdGNjbHh1SUNBZ0lHTnZibk4wY25WamRHOXlLQ2tnZTF4eVhHNGdJQ0FnSUNBZ0lIUm9hWE11WTJoaGJtNWxiSE1nUFNCN2ZUdGNjbHh1SUNBZ0lIMWNjbHh1WEhKY2JpQWdJQ0JoWkdRb2JtRnRaU3dnY0hWemFHVnlLU0I3WEhKY2JpQWdJQ0FnSUNBZ2FXWWdLQ0YwYUdsekxtTm9ZVzV1Wld4elcyNWhiV1ZkS1NCN1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUhSb2FYTXVZMmhoYm01bGJITmJibUZ0WlYwZ1BTQmpjbVZoZEdWRGFHRnVibVZzS0c1aGJXVXNJSEIxYzJobGNpazdYSEpjYmlBZ0lDQWdJQ0FnZlZ4eVhHNGdJQ0FnSUNBZ0lISmxkSFZ5YmlCMGFHbHpMbU5vWVc1dVpXeHpXMjVoYldWZE8xeHlYRzRnSUNBZ2ZWeHlYRzVjY2x4dUlDQWdJR0ZzYkNncElIdGNjbHh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdUMkpxWldOMExtdGxlWE1vZEdocGN5NWphR0Z1Ym1Wc2N5azdYSEpjYmlBZ0lDQjlYSEpjYmx4eVhHNGdJQ0FnWm1sdVpDaHVZVzFsS1NCN1hISmNiaUFnSUNBZ0lDQWdjbVYwZFhKdUlIUm9hWE11WTJoaGJtNWxiSE5iYm1GdFpWMDdYSEpjYmlBZ0lDQjlYSEpjYmx4eVhHNGdJQ0FnY21WdGIzWmxLRzVoYldVcElIdGNjbHh1SUNBZ0lDQWdJQ0JzWlhRZ1kyaGhibTVsYkNBOUlIUm9hWE11WTJoaGJtNWxiSE5iYm1GdFpWMDdYSEpjYmlBZ0lDQWdJQ0FnWkdWc1pYUmxJSFJvYVhNdVkyaGhibTVsYkhOYmJtRnRaVjA3WEhKY2JpQWdJQ0FnSUNBZ2NtVjBkWEp1SUdOb1lXNXVaV3c3WEhKY2JpQWdJQ0I5WEhKY2JseHlYRzRnSUNBZ2MzVmljMk55YVdKbEtDa2dlMXh5WEc0Z0lDQWdJQ0FnSUdadmNpQW9iR1YwSUdrZ2FXNGdkR2hwY3k1amFHRnVibVZzY3lrZ2UxeHlYRzRnSUNBZ0lDQWdJQ0FnSUNCMGFHbHpMbU5vWVc1dVpXeHpXMmxkTG5OMVluTmpjbWxpWlNncE8xeHlYRzRnSUNBZ0lDQWdJSDFjY2x4dVhISmNiaUFnSUNCOVhISmNibjFjY2x4dVhISmNibVoxYm1OMGFXOXVJR055WldGMFpVTm9ZVzV1Wld3b2JtRnRaU3dnY0hWemFHVnlLU0I3WEhKY2JpQWdJQ0JwWmlBb2JtRnRaUzVwYm1SbGVFOW1LQ2R3Y21sMllYUmxMU2NwSUQwOVBTQXdLU0I3WEhKY2JpQWdJQ0FnSUNBZ2NtVjBkWEp1SUc1bGR5QlFjbWwyWVhSbFEyaGhibTVsYkNodVlXMWxMQ0J3ZFhOb1pYSXBPMXh5WEc0Z0lDQWdmU0JsYkhObElHbG1JQ2h1WVcxbExtbHVaR1Y0VDJZb0ozQnlaWE5sYm1ObExTY3BJRDA5UFNBd0tTQjdYSEpjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJRzVsZHlCUWNtVnpaVzVqWlVOb1lXNXVaV3dvYm1GdFpTd2djSFZ6YUdWeUtUdGNjbHh1SUNBZ0lIMGdaV3h6WlNCN1hISmNiaUFnSUNBZ0lDQWdjbVYwZFhKdUlHNWxkeUJEYUdGdWJtVnNLRzVoYldVc0lIQjFjMmhsY2lrN1hISmNiaUFnSUNCOVhISmNibjBpTENKcGJYQnZjblFnZTBScGMzQmhkR05vWlhKOUlHWnliMjBnWENJdUxpOWxkbVZ1ZEhNdlpHbHpjR0YwWTJobGNsd2lPMXh5WEc1Y2NseHVaWGh3YjNKMElHTnNZWE56SUZCeVpYTmxibU5sUTJoaGJtNWxiQ0JsZUhSbGJtUnpJRVJwYzNCaGRHTm9aWElnZTF4eVhHNGdJQ0FnWTI5dWMzUnlkV04wYjNJb2JtRnRaU3dnY0hWemFHVnlLU0I3WEhKY2JpQWdJQ0FnSUNBZ2MzVndaWElvS1R0Y2NseHVYSEpjYmlBZ0lDQWdJQ0FnZEdocGN5NXVZVzFsSUQwZ2JtRnRaVHRjY2x4dUlDQWdJQ0FnSUNCMGFHbHpMbkIxYzJobGNpQTlJSEIxYzJobGNqdGNjbHh1SUNBZ0lDQWdJQ0IwYUdsekxtRjFkR2dnUFNCdWRXeHNPMXh5WEc1Y2NseHVJQ0FnSUNBZ0lDQnBaaUFvZEdocGN5NXdkWE5vWlhJdWMyOWphMlYwTG5OMFlYUmxJRDA5SURFcElIdGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ2RHaHBjeTV6ZFdKelkzSnBZbVVvS1R0Y2NseHVJQ0FnSUNBZ0lDQjlYSEpjYmlBZ0lDQjlYSEpjYmx4eVhHNGdJQ0FnYzNWaWMyTnlhV0psS0NrZ2UxeHlYRzRnSUNBZ0lDQWdJSFJvYVhNdWNIVnphR1Z5TG1GMWRHZ29kR2hwY3k1dVlXMWxMQ0FvWlNrZ1BUNGdlMXh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQjBhR2x6TG1GMWRHZ2dQU0JsTG1SaGRHRXVZWFYwYUR0Y2NseHVYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lIUm9hWE11Y0hWemFHVnlMbk5sYm1Rb2UxeHlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdaWFpsYm5RNklDZHpkV0p6WTNKcFltVW5MRnh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnWkdGMFlUb2dlMXh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHTm9ZVzV1Wld3NklIUm9hWE11Ym1GdFpTeGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCaGRYUm9PaUIwYUdsekxtRjFkR2dzWEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdZMmhoYm01bGJGOWtZWFJoT2lCbExtUmhkR0V1WTJoaGJtNWxiRjlrWVhSaFhISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjlYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lIMHBPMXh5WEc0Z0lDQWdJQ0FnSUgwcE8xeHlYRzRnSUNBZ2ZWeHlYRzVjY2x4dUlDQWdJSFZ1YzNWaWMyTnlhV0psS0NrZ2UxeHlYRzRnSUNBZ0lDQWdJSFJvYVhNdWNIVnphR1Z5TG5ObGJtUW9lMXh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQmxkbVZ1ZERvZ0ozVnVjM1ZpYzJOeWFXSmxKeXhjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdaR0YwWVRvZ2UxeHlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdZMmhoYm01bGJEb2dkR2hwY3k1dVlXMWxYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lIMWNjbHh1SUNBZ0lDQWdJQ0I5S1R0Y2NseHVJQ0FnSUgxY2NseHVmU0lzSW1sdGNHOXlkQ0I3UkdsemNHRjBZMmhsY24wZ1puSnZiU0JjSWk0dUwyVjJaVzUwY3k5a2FYTndZWFJqYUdWeVhDSTdYSEpjYmx4eVhHNWxlSEJ2Y25RZ1kyeGhjM01nVUhKcGRtRjBaVU5vWVc1dVpXd2daWGgwWlc1a2N5QkVhWE53WVhSamFHVnlJSHRjY2x4dUlDQWdJR052Ym5OMGNuVmpkRzl5S0c1aGJXVXNJSEIxYzJobGNpa2dlMXh5WEc0Z0lDQWdJQ0FnSUhOMWNHVnlLQ2s3WEhKY2JseHlYRzRnSUNBZ0lDQWdJSFJvYVhNdWJtRnRaU0E5SUc1aGJXVTdYSEpjYmlBZ0lDQWdJQ0FnZEdocGN5NXdkWE5vWlhJZ1BTQndkWE5vWlhJN1hISmNiaUFnSUNBZ0lDQWdkR2hwY3k1aGRYUm9JRDBnYm5Wc2JEdGNjbHh1WEhKY2JpQWdJQ0FnSUNBZ2FXWWdLSFJvYVhNdWNIVnphR1Z5TG5OdlkydGxkQzV6ZEdGMFpTQTlQU0F4S1NCN1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUhSb2FYTXVjM1ZpYzJOeWFXSmxLQ2s3WEhKY2JpQWdJQ0FnSUNBZ2ZWeHlYRzRnSUNBZ2ZWeHlYRzVjY2x4dUlDQWdJSE4xWW5OamNtbGlaU2dwSUh0Y2NseHVJQ0FnSUNBZ0lDQjBhR2x6TG5CMWMyaGxjaTVoZFhSb0tIUm9hWE11Ym1GdFpTd2dLR1VwSUQwK0lIdGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ2RHaHBjeTVoZFhSb0lEMGdaUzVrWVhSaExtRjFkR2c3WEhKY2JseHlYRzRnSUNBZ0lDQWdJQ0FnSUNCMGFHbHpMbkIxYzJobGNpNXpaVzVrS0h0Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHVjJaVzUwT2lBbmMzVmljMk55YVdKbEp5eGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR1JoZEdFNklIdGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCamFHRnVibVZzT2lCMGFHbHpMbTVoYldVc1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnWVhWMGFEb2dkR2hwY3k1aGRYUm9YSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0I5WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJSDBwTzF4eVhHNGdJQ0FnSUNBZ0lIMHBPMXh5WEc0Z0lDQWdmVnh5WEc1Y2NseHVJQ0FnSUhWdWMzVmljMk55YVdKbEtDa2dlMXh5WEc0Z0lDQWdJQ0FnSUhSb2FYTXVjSFZ6YUdWeUxuTmxibVFvZTF4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0JsZG1WdWREb2dKM1Z1YzNWaWMyTnlhV0psSnl4Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnWkdGMFlUb2dlMXh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnWTJoaGJtNWxiRG9nZEdocGN5NXVZVzFsWEhKY2JpQWdJQ0FnSUNBZ0lDQWdJSDFjY2x4dUlDQWdJQ0FnSUNCOUtUdGNjbHh1SUNBZ0lIMWNjbHh1ZlNJc0ltbHRjRzl5ZENCN1JHbHpjR0YwWTJobGNuMGdabkp2YlNCY0lpNHVMMlYyWlc1MGN5OWthWE53WVhSamFHVnlYQ0k3WEhKY2JseHlYRzVsZUhCdmNuUWdZMnhoYzNNZ1UyOWphMlYwSUdWNGRHVnVaSE1nUkdsemNHRjBZMmhsY2lCN1hISmNiaUFnSUNCamIyNXpkSEoxWTNSdmNpaHdkWE5vWlhJc0lHaHZjM1FwSUh0Y2NseHVJQ0FnSUNBZ0lDQnpkWEJsY2lncE8xeHlYRzVjY2x4dUlDQWdJQ0FnSUNCMGFHbHpMbkIxYzJobGNpQTlJSEIxYzJobGNqdGNjbHh1SUNBZ0lDQWdJQ0IwYUdsekxuTnZZMnRsZENBOUlHNWxkeUJYWldKVGIyTnJaWFFvYUc5emRDQXJJQ2N2SnlBcklIUm9hWE11Y0hWemFHVnlMbXRsZVNrN1hISmNibHh5WEc0Z0lDQWdJQ0FnSUhSb2FYTXVZbWx1WkV4cGMzUmxibVZ5Y3lncE8xeHlYRzRnSUNBZ2ZWeHlYRzVjY2x4dUlDQWdJR0pwYm1STWFYTjBaVzVsY25Nb0tTQjdYSEpjYmlBZ0lDQWdJQ0FnZEdocGN5NXpiMk5yWlhRdWIyNXZjR1Z1SUQwZ0tDa2dQVDRnZTF4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0IwYUdsekxtOXVUM0JsYmlncE8xeHlYRzRnSUNBZ0lDQWdJSDA3WEhKY2JpQWdJQ0FnSUNBZ2RHaHBjeTV6YjJOclpYUXViMjVsY25KdmNpQTlJQ2hsY25KdmNpa2dQVDRnZTF4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0IwYUdsekxtOXVSWEp5YjNJb1pYSnliM0lwTzF4eVhHNGdJQ0FnSUNBZ0lIMDdYSEpjYmlBZ0lDQWdJQ0FnZEdocGN5NXpiMk5yWlhRdWIyNWpiRzl6WlNBOUlDaGpiRzl6WlVWMlpXNTBLU0E5UGlCN1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUhSb2FYTXViMjVEYkc5elpTaGpiRzl6WlVWMlpXNTBLVHRjY2x4dUlDQWdJQ0FnSUNCOU8xeHlYRzRnSUNBZ0lDQWdJSFJvYVhNdWMyOWphMlYwTG05dWJXVnpjMkZuWlNBOUlDaHRaWE56WVdkbEtTQTlQaUI3WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJSFJvYVhNdWIyNU5aWE56WVdkbEtHMWxjM05oWjJVcE8xeHlYRzRnSUNBZ0lDQWdJSDA3WEhKY2JpQWdJQ0I5WEhKY2JseHlYRzRnSUNBZ2IyNVBjR1Z1S0NrZ2UxeHlYRzRnSUNBZ0lDQWdJQzh2NVlpZDVhZUw1NHEyNW9DQlhISmNiaUFnSUNBZ0lDQWdkR2hwY3k1emRHRjBaU0E5SURBN1hISmNibHh5WEc0Z0lDQWdJQ0FnSUhSb2FYTXVZbWx1WkNnblkyOXVibVZqZEdWa0p5d2dLR1VwSUQwK0lIdGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ2RHaHBjeTV6YjJOclpYUXVjMjlqYTJWMFgybGtJRDBnWlM1emIyTnJaWFJmYVdRN1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUhSb2FYTXVjM1JoZEdVZ1BTQXhPMXh5WEc1Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnTHkvb3JxTHBtSVZjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdkR2hwY3k1d2RYTm9aWEl1WTJoaGJtNWxiSE11YzNWaWMyTnlhV0psS0NrN1hISmNiaUFnSUNBZ0lDQWdmU2s3WEhKY2JseHlYRzRnSUNBZ0lDQWdJSFJvYVhNdVltbHVaQ2duWTI5dWJtVmpkR2x2Ymw5bVlXbHNaV1FuTENBb1pTa2dQVDRnZTF4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0IwYUdsekxuTjBZWFJsSUQwZ0xURTdYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lHTnZibk52YkdVdVpYSnliM0lvWlM1bGNuSnZjaWxjY2x4dUlDQWdJQ0FnSUNCOUtUdGNjbHh1WEhKY2JpQWdJQ0FnSUNBZ0x5cDBhR2x6TG5ObGJtUW9lMXh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQmxkbVZ1ZERvZ0oyRjFkR2h2Y21sNllYUnBiMjRuWEhKY2JpQWdJQ0FnSUNBZ2ZTazdLaTljY2x4dUlDQWdJSDFjY2x4dVhISmNiaUFnSUNCdmJrVnljbTl5S0dWeWNtOXlLU0I3WEhKY2JpQWdJQ0FnSUNBZ1kyOXVjMjlzWlM1bGNuSnZjaWhsY25KdmNpbGNjbHh1SUNBZ0lIMWNjbHh1WEhKY2JpQWdJQ0J2YmtOc2IzTmxLR05zYjNObFJYWmxiblFwSUh0Y2NseHVJQ0FnSUNBZ0lDQnBaaUFvZEdocGN5NXpiMk5yWlhRdWNtVmhaSGxUZEdGMFpTQTlQU0JYWldKVGIyTnJaWFF1UTB4UFUwVkVLU0I3WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJR2xtSUNoamJHOXpaVVYyWlc1MExuUjVjR1VnUFQwZ0oyTnNiM05sSnlrZ2UxeHlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdZMjl1YzI5c1pTNWxjbkp2Y2lnbmMyOWphMlYwNXB5TjVZcWg1YmV5NXBhdDVieUFJU0VuS1Z4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0I5SUdWc2MyVWdhV1lnS0dOc2IzTmxSWFpsYm5RdWRIbHdaU0E5UFNBbmJXVnpjMkZuWlNjcElIdGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR052Ym5OdmJHVXVaWEp5YjNJb1kyeHZjMlZGZG1WdWRDNWtZWFJoS1Z4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0I5SUdWc2MyVWdlMXh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnWTI5dWMyOXNaUzVsY25KdmNpZ241YmV5NXBhdDVieUFJU0VuS1Z4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0I5WEhKY2JpQWdJQ0FnSUNBZ2ZWeHlYRzRnSUNBZ2ZWeHlYRzVjY2x4dUlDQWdJRzl1VFdWemMyRm5aU2h0WlhOellXZGxLU0I3WEhKY2JpQWdJQ0FnSUNBZ2JHVjBJR1ZFWVhSaElEMGdTbE5QVGk1d1lYSnpaU2h0WlhOellXZGxMbVJoZEdFcE8xeHlYRzRnSUNBZ0lDQWdJR3hsZENCbGRtVnVkQ0E5SUdWRVlYUmhMbVYyWlc1ME8xeHlYRzRnSUNBZ0lDQWdJR3hsZENCa1lYUmhJRDBnWlVSaGRHRXVaR0YwWVR0Y2NseHVYSEpjYmlBZ0lDQWdJQ0FnYVdZZ0tHVkVZWFJoTG1Ob1lXNXVaV3dnSVQwOUlIVnVaR1ZtYVc1bFpDa2dlMXh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQjBhR2x6TG5CMWMyaGxjaTVqYUdGdWJtVnNjeTVtYVc1a0tHVkVZWFJoTG1Ob1lXNXVaV3dwTG1WdGFYUW9aWFpsYm5Rc0lHUmhkR0VwTzF4eVhHNGdJQ0FnSUNBZ0lIMGdaV3h6WlNCN1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUhSb2FYTXVaVzFwZENobGRtVnVkQ3dnWkdGMFlTazdYSEpjYmlBZ0lDQWdJQ0FnZlZ4eVhHNWNjbHh1SUNBZ0lIMWNjbHh1WEhKY2JpQWdJQ0J6Wlc1a0tHcHpiMjRwSUh0Y2NseHVJQ0FnSUNBZ0lDQnBaaUFvZEdocGN5NXpkR0YwWlNBaFBUMGdMVEVwSUh0Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnZEdocGN5NXpiMk5yWlhRdWMyVnVaQ2hLVTA5T0xuTjBjbWx1WjJsbWVTaHFjMjl1S1NsY2NseHVJQ0FnSUNBZ0lDQjlYSEpjYmlBZ0lDQjlYSEpjYm4waUxDSmxlSEJ2Y25RZ1kyeGhjM01nUTJGc2JHSmhZMnRTWldkcGMzUnllU0I3WEhKY2JpQWdJQ0JqYjI1emRISjFZM1J2Y2lncElIdGNjbHh1SUNBZ0lDQWdJQ0IwYUdsekxsOWpZV3hzWW1GamEzTWdQU0I3ZlR0Y2NseHVJQ0FnSUgxY2NseHVYSEpjYmlBZ0lDQm5aWFFvYm1GdFpTa2dlMXh5WEc0Z0lDQWdJQ0FnSUhKbGRIVnliaUIwYUdsekxsOWpZV3hzWW1GamEzTmJjSEpsWm1sNEtHNWhiV1VwWFR0Y2NseHVJQ0FnSUgxY2NseHVYSEpjYmlBZ0lDQmhaR1FvYm1GdFpTd2dZMkZzYkdKaFkyc3NJR052Ym5SbGVIUXBJSHRjY2x4dUlDQWdJQ0FnSUNCc1pYUWdjSEpsWm1sNFpXUkZkbVZ1ZEU1aGJXVWdQU0J3Y21WbWFYZ29ibUZ0WlNrN1hISmNiaUFnSUNBZ0lDQWdkR2hwY3k1ZlkyRnNiR0poWTJ0elczQnlaV1pwZUdWa1JYWmxiblJPWVcxbFhTQTlJSFJvYVhNdVgyTmhiR3hpWVdOcmMxdHdjbVZtYVhobFpFVjJaVzUwVG1GdFpWMGdmSHdnVzEwN1hISmNiaUFnSUNBZ0lDQWdkR2hwY3k1ZlkyRnNiR0poWTJ0elczQnlaV1pwZUdWa1JYWmxiblJPWVcxbFhTNXdkWE5vS0h0Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnWm00NklHTmhiR3hpWVdOckxGeHlYRzRnSUNBZ0lDQWdJQ0FnSUNCamIyNTBaWGgwT2lCamIyNTBaWGgwWEhKY2JpQWdJQ0FnSUNBZ2ZTazdYSEpjYmlBZ0lDQjlYSEpjYmx4eVhHNGdJQ0FnY21WdGIzWmxLRzVoYldVc0lHTmhiR3hpWVdOckxDQmpiMjUwWlhoMEtTQjdYSEpjYmlBZ0lDQWdJQ0FnYVdZZ0tDRnVZVzFsSUNZbUlDRmpZV3hzWW1GamF5QW1KaUFoWTI5dWRHVjRkQ2tnZTF4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0IwYUdsekxsOWpZV3hzWW1GamEzTWdQU0I3ZlR0Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnY21WMGRYSnVPMXh5WEc0Z0lDQWdJQ0FnSUgxY2NseHVYSEpjYmlBZ0lDQWdJQ0FnZG1GeUlHNWhiV1Z6SUQwZ2JtRnRaU0EvSUZ0d2NtVm1hWGdvYm1GdFpTbGRJRG9nVDJKcVpXTjBMbXRsZVhNb2RHaHBjeTVmWTJGc2JHSmhZMnR6S1R0Y2NseHVYSEpjYmlBZ0lDQWdJQ0FnYVdZZ0tHTmhiR3hpWVdOcklIeDhJR052Ym5SbGVIUXBJSHRjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdkR2hwY3k1eVpXMXZkbVZEWVd4c1ltRmpheWh1WVcxbGN5d2dZMkZzYkdKaFkyc3NJR052Ym5SbGVIUXBPMXh5WEc0Z0lDQWdJQ0FnSUgwZ1pXeHpaU0I3WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJSFJvYVhNdWNtVnRiM1psUVd4c1EyRnNiR0poWTJ0ektHNWhiV1Z6S1R0Y2NseHVJQ0FnSUNBZ0lDQjlYSEpjYmlBZ0lDQjlYSEpjYmx4eVhHNGdJQ0FnY21WdGIzWmxRMkZzYkdKaFkyc29ibUZ0WlhNc0lHTmhiR3hpWVdOckxDQmpiMjUwWlhoMEtTQjdYSEpjYmlBZ0lDQWdJQ0FnWm05eUlDaHNaWFFnYm1GdFpTQnBiaUJ1WVcxbGN5a2dlMXh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQm1iM0lnS0d4bGRDQnJaWGtnYVc0Z2RHaHBjeTVmWTJGc2JHSmhZMnR6VzI1aGJXVmRLU0I3WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCcFppQW9kR2hwY3k1ZlkyRnNiR0poWTJ0elcyNWhiV1ZkVzJ0bGVWMHVabTRnUFQwZ1kyRnNiR0poWTJzZ2ZId2dkR2hwY3k1ZlkyRnNiR0poWTJ0elcyNWhiV1ZkVzJ0bGVWMHVZMjl1ZEdWNGRDQTlQU0JqYjI1MFpYaDBLU0I3WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdaR1ZzWlhSbElIUm9hWE11WDJOaGJHeGlZV05yYzF0dVlXMWxYVnRyWlhsZE8xeHlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdmVnh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQjlYSEpjYmx4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0JwWmlBb2RHaHBjeTVmWTJGc2JHSmhZMnR6VzI1aGJXVmRMbXhsYm1kMGFDQTlQVDBnTUNrZ2UxeHlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdaR1ZzWlhSbElIUm9hWE11WDJOaGJHeGlZV05yYzF0dVlXMWxYVHRjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdmVnh5WEc0Z0lDQWdJQ0FnSUgxY2NseHVJQ0FnSUgxY2NseHVYSEpjYmlBZ0lDQnlaVzF2ZG1WQmJHeERZV3hzWW1GamEzTW9ibUZ0WlhNcElIdGNjbHh1SUNBZ0lDQWdJQ0JtYjNJZ0tHeGxkQ0J1WVcxbElHbHVJRzVoYldWektTQjdYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lHUmxiR1YwWlNCMGFHbHpMbDlqWVd4c1ltRmphM05iYm1GdFpWMDdYSEpjYmlBZ0lDQWdJQ0FnZlZ4eVhHNGdJQ0FnZlZ4eVhHNTlYSEpjYmx4eVhHNW1kVzVqZEdsdmJpQndjbVZtYVhnb2JtRnRaU2tnZTF4eVhHNGdJQ0FnY21WMGRYSnVJRndpWDF3aUlDc2dibUZ0WlR0Y2NseHVmU0lzSW1sdGNHOXlkQ0I3UTJGc2JHSmhZMnRTWldkcGMzUnllWDBnWm5KdmJTQW5MaTlqWVd4c1ltRmphMTl5WldkcGMzUnllU2M3WEhKY2JseHlYRzVsZUhCdmNuUWdZMnhoYzNNZ1JHbHpjR0YwWTJobGNpQjdYSEpjYmlBZ0lDQmpiMjV6ZEhKMVkzUnZjaWdwSUh0Y2NseHVJQ0FnSUNBZ0lDQjBhR2x6TG1OaGJHeGlZV05yY3lBOUlHNWxkeUJEWVd4c1ltRmphMUpsWjJsemRISjVLQ2s3WEhKY2JpQWdJQ0FnSUNBZ2RHaHBjeTVuYkc5aVlXeGZZMkZzYkdKaFkydHpJRDBnVzEwN1hISmNiaUFnSUNCOVhISmNibHh5WEc0Z0lDQWdZbWx1WkNobGRtVnVkRTVoYldVc0lHTmhiR3hpWVdOckxDQmpiMjUwWlhoMEtTQjdYSEpjYmlBZ0lDQWdJQ0FnZEdocGN5NWpZV3hzWW1GamEzTXVZV1JrS0dWMlpXNTBUbUZ0WlN3Z1kyRnNiR0poWTJzc0lHTnZiblJsZUhRcE8xeHlYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQjBhR2x6TzF4eVhHNGdJQ0FnZlZ4eVhHNWNjbHh1SUNBZ0lHSnBibVJmWjJ4dlltRnNLR05oYkd4aVlXTnJLU0I3WEhKY2JpQWdJQ0FnSUNBZ2RHaHBjeTVuYkc5aVlXeGZZMkZzYkdKaFkydHpMbkIxYzJnb1kyRnNiR0poWTJzcE8xeHlYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQjBhR2x6TzF4eVhHNGdJQ0FnZlZ4eVhHNWNjbHh1SUNBZ0lIVnVZbWx1WkNobGRtVnVkRTVoYldVc0lHTmhiR3hpWVdOckxDQmpiMjUwWlhoMEtTQjdYSEpjYmlBZ0lDQWdJQ0FnZEdocGN5NWpZV3hzWW1GamEzTXVjbVZ0YjNabEtHVjJaVzUwVG1GdFpTd2dZMkZzYkdKaFkyc3NJR052Ym5SbGVIUXBPMXh5WEc0Z0lDQWdJQ0FnSUhKbGRIVnliaUIwYUdsek8xeHlYRzRnSUNBZ2ZWeHlYRzVjY2x4dUlDQWdJSFZ1WW1sdVpGOW5iRzlpWVd3b1kyRnNiR0poWTJzcElIdGNjbHh1SUNBZ0lDQWdJQ0JwWmlBb0lXTmhiR3hpWVdOcktTQjdYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lIUm9hWE11WjJ4dlltRnNYMk5oYkd4aVlXTnJjeUE5SUZ0ZE8xeHlYRzRnSUNBZ0lDQWdJQ0FnSUNCeVpYUjFjbTRnZEdocGN6dGNjbHh1SUNBZ0lDQWdJQ0I5WEhKY2JseHlYRzRnSUNBZ0lDQWdJR1p2Y2lBb2JHVjBJR2tnYVc0Z2RHaHBjeTVuYkc5aVlXeGZZMkZzYkdKaFkydHpLU0I3WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJR2xtSUNoallXeHNZbUZqYXlBOVBTQjBhR2x6TG1kc2IySmhiRjlqWVd4c1ltRmphM05iYVYwcElIdGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR1JsYkdWMFpTQjBhR2x6TG1kc2IySmhiRjlqWVd4c1ltRmphM05iYVYwN1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUgxY2NseHVJQ0FnSUNBZ0lDQjlYSEpjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJSFJvYVhNN1hISmNiaUFnSUNCOVhISmNibHh5WEc0Z0lDQWdkVzVpYVc1a1gyRnNiQ2dwSUh0Y2NseHVJQ0FnSUNBZ0lDQjBhR2x6TG5WdVltbHVaQ2dwTzF4eVhHNGdJQ0FnSUNBZ0lIUm9hWE11ZFc1aWFXNWtYMmRzYjJKaGJDZ3BPMXh5WEc0Z0lDQWdJQ0FnSUhKbGRIVnliaUIwYUdsek8xeHlYRzRnSUNBZ2ZWeHlYRzVjY2x4dUlDQWdJR1Z0YVhRb1pYWmxiblJPWVcxbExDQmtZWFJoS1NCN1hISmNiaUFnSUNBZ0lDQWdabTl5SUNoc1pYUWdhU0E5SURBN0lHa2dQQ0IwYUdsekxtZHNiMkpoYkY5allXeHNZbUZqYTNNdWJHVnVaM1JvT3lCcEt5c3BJSHRjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdkR2hwY3k1bmJHOWlZV3hmWTJGc2JHSmhZMnR6VzJsZEtHVjJaVzUwVG1GdFpTd2daR0YwWVNrN1hISmNiaUFnSUNBZ0lDQWdmVnh5WEc1Y2NseHVJQ0FnSUNBZ0lDQjJZWElnWTJGc2JHSmhZMnR6SUQwZ2RHaHBjeTVqWVd4c1ltRmphM011WjJWMEtHVjJaVzUwVG1GdFpTazdYSEpjYmlBZ0lDQWdJQ0FnYVdZZ0tHTmhiR3hpWVdOcmN5QW1KaUJqWVd4c1ltRmphM011YkdWdVozUm9JRDRnTUNrZ2UxeHlYRzRnSUNBZ0lDQWdJQ0FnSUNCbWIzSWdLR3hsZENCcElEMGdNRHNnYVNBOElHTmhiR3hpWVdOcmN5NXNaVzVuZEdnN0lHa3JLeWtnZTF4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1kyRnNiR0poWTJ0elcybGRMbVp1TG1OaGJHd29ZMkZzYkdKaFkydHpXMmxkTG1OdmJuUmxlSFFzSUdSaGRHRXBPMXh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQjlYSEpjYmlBZ0lDQWdJQ0FnZlZ4eVhHNWNjbHh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdkR2hwY3p0Y2NseHVJQ0FnSUgxY2NseHVmU0lzSW1sdGNHOXlkQ0I3VTI5amEyVjBmU0JtY205dElDY3VMMk52Ym01bFkzUnBiMjR2YzI5amEyVjBKenRjY2x4dWFXMXdiM0owSUh0RWFYTndZWFJqYUdWeWZTQm1jbTl0SUNjdUwyVjJaVzUwY3k5a2FYTndZWFJqYUdWeUp6dGNjbHh1YVcxd2IzSjBJSHROWVc1dVlXZGxjbjBnWm5KdmJTQmNJaTR2WTJoaGJtNWxiSE12YldGdWJtRm5aWEpjSWp0Y2NseHVhVzF3YjNKMElHRjRhVzl6SUdaeWIyMGdYQ0poZUdsdmMxd2lPMXh5WEc1Y2NseHVaWGh3YjNKMElHTnNZWE56SUZCMWMyaGxjaUI3WEhKY2JpQWdJQ0JqYjI1emRISjFZM1J2Y2loaGNIQmZhMlY1TENCdmNIUnBiMjV6S1NCN1hISmNiaUFnSUNBZ0lDQWdkR2hwY3k1amFHVmphMEZ3Y0V0bGVTaGhjSEJmYTJWNUtUdGNjbHh1WEhKY2JpQWdJQ0FnSUNBZ2RHaHBjeTVyWlhrZ1BTQmhjSEJmYTJWNU8xeHlYRzRnSUNBZ0lDQWdJSFJvYVhNdWIzQjBhVzl1Y3lBOUlHOXdkR2x2Ym5NZ2ZId2dlMzA3WEhKY2JpQWdJQ0FnSUNBZ2RHaHBjeTVrYVhOd1lYUmphR1Z5SUQwZ2JtVjNJRVJwYzNCaGRHTm9aWElvS1R0Y2NseHVJQ0FnSUNBZ0lDQjBhR2x6TG1Ob1lXNXVaV3h6SUQwZ2JtVjNJRTFoYm01aFoyVnlLQ2s3WEhKY2JseHlYRzRnSUNBZ0lDQWdJSFJvYVhNdVkyOXVibVZqZENncE8xeHlYRzRnSUNBZ2ZWeHlYRzVjY2x4dUlDQWdJR052Ym01bFkzUW9LU0I3WEhKY2JpQWdJQ0FnSUNBZ2RHaHBjeTV6YjJOclpYUWdQU0J1WlhjZ1UyOWphMlYwS0hSb2FYTXNJSFJvYVhNdWIzQjBhVzl1Y3k1b2IzTjBLVHRjY2x4dUlDQWdJSDFjY2x4dVhISmNiaUFnSUNCemRXSnpZM0pwWW1Vb1kyaGhibTVsYkY5dVlXMWxLU0I3WEhKY2JpQWdJQ0FnSUNBZ2NtVjBkWEp1SUhSb2FYTXVZMmhoYm01bGJITXVZV1JrS0dOb1lXNXVaV3hmYm1GdFpTd2dkR2hwY3lrN1hISmNiaUFnSUNCOVhISmNibHh5WEc0Z0lDQWdkVzV6ZFdKelkzSnBZbVVvWTJoaGJtNWxiRjl1WVcxbEtTQjdYSEpjYmlBZ0lDQWdJQ0FnYkdWMElHTm9ZVzV1Wld3Z1BTQjBhR2x6TG1Ob1lXNXVaV3h6TG5KbGJXOTJaU2hqYUdGdWJtVnNYMjVoYldVcE8xeHlYRzRnSUNBZ0lDQWdJR05vWVc1dVpXd3VkVzV6ZFdKelkzSnBZbVVvS1R0Y2NseHVJQ0FnSUgxY2NseHVYSEpjYmlBZ0lDQm5aWFJUYjJOclpYUkpaQ2dwSUh0Y2NseHVJQ0FnSUNBZ0lDQnlaWFIxY200Z2RHaHBjeTV6YjJOclpYUXVjMjlqYTJWMExuTnZZMnRsZEY5cFpEdGNjbHh1SUNBZ0lIMWNjbHh1WEhKY2JpQWdJQ0J6Wlc1a0tHcHpiMjRwSUh0Y2NseHVJQ0FnSUNBZ0lDQjBhR2x6TG5OdlkydGxkQzV6Wlc1a0tHcHpiMjRwTzF4eVhHNGdJQ0FnZlZ4eVhHNWNjbHh1SUNBZ0lHTm9aV05yUVhCd1MyVjVLR3RsZVNrZ2UxeHlYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQjBjblZsTzF4eVhHNGdJQ0FnZlZ4eVhHNWNjbHh1SUNBZ0lHRjFkR2dvYm1GdFpTd2dZMkZzYkdKaFkyc3BJSHRjY2x4dUlDQWdJQ0FnSUNCc1pYUWdiV1YwYUc5a0lEMGdkR2hwY3k1dmNIUnBiMjV6TG1GMWRHZ3ViV1YwYUc5a0lIeDhJQ2R3YjNOMEp6dGNjbHh1SUNBZ0lDQWdJQ0JzWlhRZ1pHRjBZU0E5SUh0OU8xeHlYRzRnSUNBZ0lDQWdJR3hsZENCd1lYSmhiWE1nUFNCN2ZUdGNjbHh1WEhKY2JpQWdJQ0FnSUNBZ2FXWWdLRzFsZEdodlpDQTlQU0FuY0c5emRDY3BJSHRjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdaR0YwWVNBOUlFOWlhbVZqZEM1aGMzTnBaMjRvZTF4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1kyaGhibTVsYkY5dVlXMWxPaUJ1WVcxbExGeHlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdjMjlqYTJWMFgybGtPaUIwYUdsekxtZGxkRk52WTJ0bGRFbGtLQ2xjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdmU2s3WEhKY2JpQWdJQ0FnSUNBZ2ZTQmxiSE5sSUh0Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnY0dGeVlXMXpJRDBnVDJKcVpXTjBMbUZ6YzJsbmJpaDdYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JqYUdGdWJtVnNYMjVoYldVNklHNWhiV1VzWEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCemIyTnJaWFJmYVdRNklIUm9hWE11WjJWMFUyOWphMlYwU1dRb0tWeHlYRzRnSUNBZ0lDQWdJQ0FnSUNCOUtUdGNjbHh1SUNBZ0lDQWdJQ0I5WEhKY2JseHlYRzRnSUNBZ0lDQWdJR0Y0YVc5ektIdGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ2RYSnNPaUIwYUdsekxtOXdkR2x2Ym5NdVlYVjBhQzUxY213c1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUcxbGRHaHZaRG9nYldWMGFHOWtMRnh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQm9aV0ZrWlhKek9pQjBhR2x6TG05d2RHbHZibk11WVhWMGFDNW9aV0ZrWlhKeklIeDhJSHQ5TEZ4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0J3WVhKaGJYTTZJSEJoY21GdGN5eGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ1pHRjBZVG9nWkdGMFlWeHlYRzRnSUNBZ0lDQWdJSDBwTG5Sb1pXNG9LR1VwSUQwK0lIdGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ1kyRnNiR0poWTJzb1pTbGNjbHh1SUNBZ0lDQWdJQ0I5S1M1allYUmphQ2dvWlNrZ1BUNGdlMXh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQmpiMjV6YjJ4bExtVnljbTl5S0NmbnA0SG1uSW5wb3BIcGdaUG1uWVBwbVpEa3VJM290ck1oSnlrN1hISmNiaUFnSUNBZ0lDQWdmU2s3WEhKY2JpQWdJQ0I5WEhKY2JuMWNjbHh1WEhKY2JuZHBibVJ2ZHk1UWRYTm9aWElnUFNCUWRYTm9aWEk3SWwwc0luTnZkWEpqWlZKdmIzUWlPaUlpZlE9PSIsImltcG9ydCB7RGlzcGF0Y2hlcn0gZnJvbSBcIi4uL2V2ZW50cy9kaXNwYXRjaGVyXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgQ2hhbm5lbCBleHRlbmRzIERpc3BhdGNoZXIge1xyXG4gICAgY29uc3RydWN0b3IobmFtZSwgcHVzaGVyKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuXHJcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICAgICAgICB0aGlzLnB1c2hlciA9IHB1c2hlcjtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMucHVzaGVyLnNvY2tldC5zdGF0ZSA9PSAxKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3Vic2NyaWJlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHN1YnNjcmliZSgpIHtcclxuICAgICAgICB0aGlzLnB1c2hlci5zZW5kKHtcclxuICAgICAgICAgICAgZXZlbnQ6ICdzdWJzY3JpYmUnLFxyXG4gICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICBjaGFubmVsOiB0aGlzLm5hbWVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHVuc3Vic2NyaWJlKCkge1xyXG4gICAgICAgIHRoaXMucHVzaGVyLnNlbmQoe1xyXG4gICAgICAgICAgICBldmVudDogJ3Vuc3Vic2NyaWJlJyxcclxuICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgY2hhbm5lbDogdGhpcy5uYW1lXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxufSIsImltcG9ydCB7RGlzcGF0Y2hlcn0gZnJvbSBcIi4uL2V2ZW50cy9kaXNwYXRjaGVyXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgUHJlc2VuY2VDaGFubmVsIGV4dGVuZHMgRGlzcGF0Y2hlciB7XHJcbiAgICBjb25zdHJ1Y3RvcihuYW1lLCBwdXNoZXIpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG5cclxuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgICAgIHRoaXMucHVzaGVyID0gcHVzaGVyO1xyXG4gICAgICAgIHRoaXMuYXV0aCA9IG51bGw7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnB1c2hlci5zb2NrZXQuc3RhdGUgPT0gMSkge1xyXG4gICAgICAgICAgICB0aGlzLnN1YnNjcmliZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzdWJzY3JpYmUoKSB7XHJcbiAgICAgICAgdGhpcy5wdXNoZXIuYXV0aCh0aGlzLm5hbWUsIChlKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuYXV0aCA9IGUuZGF0YS5hdXRoO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5wdXNoZXIuc2VuZCh7XHJcbiAgICAgICAgICAgICAgICBldmVudDogJ3N1YnNjcmliZScsXHJcbiAgICAgICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2hhbm5lbDogdGhpcy5uYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgIGF1dGg6IHRoaXMuYXV0aCxcclxuICAgICAgICAgICAgICAgICAgICBjaGFubmVsX2RhdGE6IGUuZGF0YS5jaGFubmVsX2RhdGFcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdW5zdWJzY3JpYmUoKSB7XHJcbiAgICAgICAgdGhpcy5wdXNoZXIuc2VuZCh7XHJcbiAgICAgICAgICAgIGV2ZW50OiAndW5zdWJzY3JpYmUnLFxyXG4gICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICBjaGFubmVsOiB0aGlzLm5hbWVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHtEaXNwYXRjaGVyfSBmcm9tIFwiLi4vZXZlbnRzL2Rpc3BhdGNoZXJcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBQcml2YXRlQ2hhbm5lbCBleHRlbmRzIERpc3BhdGNoZXIge1xyXG4gICAgY29uc3RydWN0b3IobmFtZSwgcHVzaGVyKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuXHJcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICAgICAgICB0aGlzLnB1c2hlciA9IHB1c2hlcjtcclxuICAgICAgICB0aGlzLmF1dGggPSBudWxsO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5wdXNoZXIuc29ja2V0LnN0YXRlID09IDEpIHtcclxuICAgICAgICAgICAgdGhpcy5zdWJzY3JpYmUoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc3Vic2NyaWJlKCkge1xyXG4gICAgICAgIHRoaXMucHVzaGVyLmF1dGgodGhpcy5uYW1lLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmF1dGggPSBlLmRhdGEuYXV0aDtcclxuXHJcbiAgICAgICAgICAgIHRoaXMucHVzaGVyLnNlbmQoe1xyXG4gICAgICAgICAgICAgICAgZXZlbnQ6ICdzdWJzY3JpYmUnLFxyXG4gICAgICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgICAgIGNoYW5uZWw6IHRoaXMubmFtZSxcclxuICAgICAgICAgICAgICAgICAgICBhdXRoOiB0aGlzLmF1dGhcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdW5zdWJzY3JpYmUoKSB7XHJcbiAgICAgICAgdGhpcy5wdXNoZXIuc2VuZCh7XHJcbiAgICAgICAgICAgIGV2ZW50OiAndW5zdWJzY3JpYmUnLFxyXG4gICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICBjaGFubmVsOiB0aGlzLm5hbWVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59IiwiZXhwb3J0IGNsYXNzIENhbGxiYWNrUmVnaXN0cnkge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5fY2FsbGJhY2tzID0ge307XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0KG5hbWUpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fY2FsbGJhY2tzW3ByZWZpeChuYW1lKV07XHJcbiAgICB9XHJcblxyXG4gICAgYWRkKG5hbWUsIGNhbGxiYWNrLCBjb250ZXh0KSB7XHJcbiAgICAgICAgbGV0IHByZWZpeGVkRXZlbnROYW1lID0gcHJlZml4KG5hbWUpO1xyXG4gICAgICAgIHRoaXMuX2NhbGxiYWNrc1twcmVmaXhlZEV2ZW50TmFtZV0gPSB0aGlzLl9jYWxsYmFja3NbcHJlZml4ZWRFdmVudE5hbWVdIHx8IFtdO1xyXG4gICAgICAgIHRoaXMuX2NhbGxiYWNrc1twcmVmaXhlZEV2ZW50TmFtZV0ucHVzaCh7XHJcbiAgICAgICAgICAgIGZuOiBjYWxsYmFjayxcclxuICAgICAgICAgICAgY29udGV4dDogY29udGV4dFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbW92ZShuYW1lLCBjYWxsYmFjaywgY29udGV4dCkge1xyXG4gICAgICAgIGlmICghbmFtZSAmJiAhY2FsbGJhY2sgJiYgIWNvbnRleHQpIHtcclxuICAgICAgICAgICAgdGhpcy5fY2FsbGJhY2tzID0ge307XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciBuYW1lcyA9IG5hbWUgPyBbcHJlZml4KG5hbWUpXSA6IE9iamVjdC5rZXlzKHRoaXMuX2NhbGxiYWNrcyk7XHJcblxyXG4gICAgICAgIGlmIChjYWxsYmFjayB8fCBjb250ZXh0KSB7XHJcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlQ2FsbGJhY2sobmFtZXMsIGNhbGxiYWNrLCBjb250ZXh0KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnJlbW92ZUFsbENhbGxiYWNrcyhuYW1lcyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJlbW92ZUNhbGxiYWNrKG5hbWVzLCBjYWxsYmFjaywgY29udGV4dCkge1xyXG4gICAgICAgIGZvciAobGV0IG5hbWUgaW4gbmFtZXMpIHtcclxuICAgICAgICAgICAgZm9yIChsZXQga2V5IGluIHRoaXMuX2NhbGxiYWNrc1tuYW1lXSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX2NhbGxiYWNrc1tuYW1lXVtrZXldLmZuID09IGNhbGxiYWNrIHx8IHRoaXMuX2NhbGxiYWNrc1tuYW1lXVtrZXldLmNvbnRleHQgPT0gY29udGV4dCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZSB0aGlzLl9jYWxsYmFja3NbbmFtZV1ba2V5XTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuX2NhbGxiYWNrc1tuYW1lXS5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgICAgIGRlbGV0ZSB0aGlzLl9jYWxsYmFja3NbbmFtZV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmVtb3ZlQWxsQ2FsbGJhY2tzKG5hbWVzKSB7XHJcbiAgICAgICAgZm9yIChsZXQgbmFtZSBpbiBuYW1lcykge1xyXG4gICAgICAgICAgICBkZWxldGUgdGhpcy5fY2FsbGJhY2tzW25hbWVdO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gcHJlZml4KG5hbWUpIHtcclxuICAgIHJldHVybiBcIl9cIiArIG5hbWU7XHJcbn0iLCJpbXBvcnQge0NhbGxiYWNrUmVnaXN0cnl9IGZyb20gJy4vY2FsbGJhY2tfcmVnaXN0cnknO1xyXG5cclxuZXhwb3J0IGNsYXNzIERpc3BhdGNoZXIge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5jYWxsYmFja3MgPSBuZXcgQ2FsbGJhY2tSZWdpc3RyeSgpO1xyXG4gICAgICAgIHRoaXMuZ2xvYmFsX2NhbGxiYWNrcyA9IFtdO1xyXG4gICAgfVxyXG5cclxuICAgIGJpbmQoZXZlbnROYW1lLCBjYWxsYmFjaywgY29udGV4dCkge1xyXG4gICAgICAgIHRoaXMuY2FsbGJhY2tzLmFkZChldmVudE5hbWUsIGNhbGxiYWNrLCBjb250ZXh0KTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBiaW5kX2dsb2JhbChjYWxsYmFjaykge1xyXG4gICAgICAgIHRoaXMuZ2xvYmFsX2NhbGxiYWNrcy5wdXNoKGNhbGxiYWNrKTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICB1bmJpbmQoZXZlbnROYW1lLCBjYWxsYmFjaywgY29udGV4dCkge1xyXG4gICAgICAgIHRoaXMuY2FsbGJhY2tzLnJlbW92ZShldmVudE5hbWUsIGNhbGxiYWNrLCBjb250ZXh0KTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICB1bmJpbmRfZ2xvYmFsKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgaWYgKCFjYWxsYmFjaykge1xyXG4gICAgICAgICAgICB0aGlzLmdsb2JhbF9jYWxsYmFja3MgPSBbXTtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmb3IgKGxldCBpIGluIHRoaXMuZ2xvYmFsX2NhbGxiYWNrcykge1xyXG4gICAgICAgICAgICBpZiAoY2FsbGJhY2sgPT0gdGhpcy5nbG9iYWxfY2FsbGJhY2tzW2ldKSB7XHJcbiAgICAgICAgICAgICAgICBkZWxldGUgdGhpcy5nbG9iYWxfY2FsbGJhY2tzW2ldO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHVuYmluZF9hbGwoKSB7XHJcbiAgICAgICAgdGhpcy51bmJpbmQoKTtcclxuICAgICAgICB0aGlzLnVuYmluZF9nbG9iYWwoKTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBlbWl0KGV2ZW50TmFtZSwgZGF0YSkge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5nbG9iYWxfY2FsbGJhY2tzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZ2xvYmFsX2NhbGxiYWNrc1tpXShldmVudE5hbWUsIGRhdGEpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIGNhbGxiYWNrcyA9IHRoaXMuY2FsbGJhY2tzLmdldChldmVudE5hbWUpO1xyXG4gICAgICAgIGlmIChjYWxsYmFja3MgJiYgY2FsbGJhY2tzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjYWxsYmFja3MubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGNhbGxiYWNrc1tpXS5mbi5jYWxsKGNhbGxiYWNrc1tpXS5jb250ZXh0LCBkYXRhKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQge0VjaG99IGZyb20gJy4vZWNobydcclxuXHJcbndpbmRvdy5FY2hvID0gbmV3IEVjaG8oJ2E4MjM5M2Q4ODZhMGU2ZGRmYWU1Jywge1xyXG4gICAgaG9zdDogJ3dzOi8vMTkyLjE2OC4xMC4xMDo4MDgxJyxcclxuICAgIGF1dGg6IHtcclxuICAgICAgICBtZXRob2Q6ICdwb3N0JyxcclxuICAgICAgICB1cmw6ICdodHRwOi8vdGVzdHMudGVzdC9hcGkvcHVzaGVyL2F1dGgnLFxyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICAgJ0F1dGhvcml6YXRpb24nOiAnQmVhcmVyIGV5SjBlWEFpT2lKS1YxUWlMQ0poYkdjaU9pSklVekkxTmlKOS5leUpwYzNNaU9pSm9kSFJ3T2x3dlhDOTBaWE4wY3k1MFpYTjBJaXdpYVdGMElqb3hOVE01TWpVMU9EWTBMQ0psZUhBaU9qRTFNemt5TlRrME5qUXNJbTVpWmlJNk1UVXpPVEkxTlRnMk5Dd2lhblJwSWpvaVdqaGpOekprVlhrNGRtUlFkMFl6WVNJc0luTjFZaUk2TVN3aWNISjJJam9pT0RkbE1HRm1NV1ZtT1daa01UVTRNVEptWkdWak9UY3hOVE5oTVRSbE1HSXdORGMxTkRaaFlTSjkueTBLVTQtTzZVMENaVmJ3UndFNWRlbXVEd2w2bW9Ra0ttZHBvUXNmWmpVcycsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBwYXJhbXM6IHt9XHJcbiAgICB9LFxyXG59KVxyXG5cclxuLyp3aW5kb3cuRWNoby5jaGFubmVsKCdvcmRlcicpLmxpc3RlbignbmV3JywgKGUpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKGUpXHJcbn0pLmxpc3RlbignbWFrZScsIChlKSA9PiB7XHJcbn0pOyovXHJcblxyXG5cclxuXHJcbi8qd2luZG93LkVjaG8ucHJpdmF0ZSgndXNlci4xJykubGlzdGVuKCdhJywgKGUpID0+IHtcclxuICAgIGFsZXJ0KCdhYWEnKTtcclxufSkubGlzdGVuKCdiJywgKGUpID0+IHtcclxuICAgIGFsZXJ0KCdiYmInKTtcclxufSk7Ki9cclxuXHJcbndpbmRvdy5FY2hvLmpvaW4oYGNoYXQuMWApXHJcbiAgICAuaGVyZSgodXNlcnMpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZygn5YWo6YOo5Lq65ZGYJyk7XHJcbiAgICAgICAgY29uc29sZS5sb2codXNlcnMpXHJcbiAgICB9KVxyXG4gICAgLmpvaW5pbmcoKHVzZXIpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZygn5paw5Lq65Yqg5YWlJyk7XHJcbiAgICAgICAgY29uc29sZS5sb2codXNlcik7XHJcbiAgICB9KVxyXG4gICAgLmxlYXZpbmcoKHVzZXIpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZygn5pyJ5Lq66YCA5Ye6Jyk7XHJcbiAgICAgICAgY29uc29sZS5sb2codXNlcik7XHJcbiAgICB9KS5saXN0ZW4oJ05ld01lc3NhZ2UnLCAoZSkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coZSk7XHJcbn0pO1xyXG4iLCJleHBvcnQgY2xhc3MgQ2hhbm5lbCB7XHJcbiAgICBjb25zdHJ1Y3RvcihwdXNoZXIsIG5hbWUpIHtcclxuICAgICAgICB0aGlzLnB1c2hlciA9IHB1c2hlcjtcclxuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG5cclxuICAgICAgICB0aGlzLnN1YnNjcmliZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHN1YnNjcmliZSgpIHtcclxuICAgICAgICB0aGlzLnN1YnNjcmlwdGlvbiA9IHRoaXMucHVzaGVyLnN1YnNjcmliZSh0aGlzLm5hbWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHVuc3Vic2NyaWJlKCkge1xyXG4gICAgICAgIHRoaXMucHVzaGVyLnVuc3Vic2NyaWJlKHRoaXMubmFtZSk7XHJcbiAgICB9XHJcblxyXG4gICAgbGlzdGVuKGV2ZW50LCBjYWxsYmFjaykge1xyXG4gICAgICAgIHRoaXMub24oZXZlbnQsIGNhbGxiYWNrKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgc3RvcExpc3RlbmluZyhldmVudCkge1xyXG4gICAgICAgIHRoaXMuc3Vic2NyaXB0aW9uLnVuYmluZChldmVudCk7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIG9uKGV2ZW50LCBjYWxsYmFjaykge1xyXG4gICAgICAgIHRoaXMuc3Vic2NyaXB0aW9uLmJpbmQoZXZlbnQsIGNhbGxiYWNrKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgd2hpc3BlcihldmVudCwgZGF0YSkge1xyXG4gICAgICAgIHRoaXMucHVzaGVyLnNlbmQoe1xyXG4gICAgICAgICAgICBjaGFubmVsOiB0aGlzLm5hbWUsXHJcbiAgICAgICAgICAgIGRhdGE6IGRhdGEsXHJcbiAgICAgICAgICAgIGV2ZW50OiAnY2xpZW50LScgKyBldmVudFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBsaXN0ZW5Gb3JXaGlzcGVyKGV2ZW50LCBjYWxsYmFjaykge1xyXG4gICAgICAgIHRoaXMub24oJ2NsaWVudC0nICsgZXZlbnQsIGNhbGxiYWNrKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQge0NoYW5uZWx9IGZyb20gXCIuL2NoYW5uZWxcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBQdXNoZXJDaGFubmVsIGV4dGVuZHMgQ2hhbm5lbCB7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAcGFyYW0gcHVzaGVyXHJcbiAgICAgKiBAcGFyYW0gY2hhbm5lbFxyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3RvcihwdXNoZXIsIG5hbWUpIHtcclxuICAgICAgICBzdXBlcihwdXNoZXIsIG5hbWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbn0iLCJpbXBvcnQge0NoYW5uZWx9IGZyb20gXCIuL2NoYW5uZWxcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBQdXNoZXJQcmVzZW5jZUNoYW5uZWwgZXh0ZW5kcyBDaGFubmVsIHtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEBwYXJhbSBwdXNoZXJcclxuICAgICAqIEBwYXJhbSBjaGFubmVsXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKHB1c2hlciwgbmFtZSkge1xyXG4gICAgICAgIHN1cGVyKHB1c2hlciwgbmFtZSk7XHJcbiAgICB9XHJcblxyXG4gICAgaGVyZShjYWxsYmFjaykge1xyXG4gICAgICAgIGxldCBiYWNrID0gKGUpID0+IHtcclxuICAgICAgICAgICAgY2FsbGJhY2soZSlcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5vbignc3Vic2NyaXB0aW9uX3N1Y2NlZWRlZCcsIGJhY2spO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIGpvaW5pbmcoY2FsbGJhY2spIHtcclxuICAgICAgICB0aGlzLm9uKCdtZW1iZXJfYWRkZWQnLCBjYWxsYmFjayk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgbGVhdmluZyhjYWxsYmFjaykge1xyXG4gICAgICAgIHRoaXMub24oJ21lbWJlcl9yZW1vdmVkJywgY2FsbGJhY2spO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHtDaGFubmVsfSBmcm9tIFwiLi9jaGFubmVsXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgUHVzaGVyUHJpdmF0ZUNoYW5uZWwgZXh0ZW5kcyBDaGFubmVsIHtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEBwYXJhbSBwdXNoZXJcclxuICAgICAqIEBwYXJhbSBjaGFubmVsXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKHB1c2hlciwgbmFtZSkge1xyXG4gICAgICAgIHN1cGVyKHB1c2hlciwgbmFtZSk7XHJcbiAgICB9XHJcblxyXG59IiwiaW1wb3J0ICdsdWZmeS1wdXNoZXInO1xyXG5pbXBvcnQge1B1c2hlckNoYW5uZWx9IGZyb20gXCIuLi9jaGFubmVsL3B1c2hlci1jaGFubmVsXCI7XHJcbmltcG9ydCB7UHVzaGVyUHJpdmF0ZUNoYW5uZWx9IGZyb20gXCIuLi9jaGFubmVsL3B1c2hlci1wcml2YXRlLWNoYW5uZWxcIjtcclxuaW1wb3J0IHtQdXNoZXJQcmVzZW5jZUNoYW5uZWx9IGZyb20gXCIuLi9jaGFubmVsL3B1c2hlci1wcmVzZW5jZS1jaGFubmVsXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgUHVzaGVyQ29ubmVjdG9yIHtcclxuICAgIGNvbnN0cnVjdG9yKGFwcF9rZXksIG9wdGlvbnMpIHtcclxuICAgICAgICB0aGlzLnB1c2hlciA9IG5ldyBQdXNoZXIoYXBwX2tleSwgb3B0aW9ucyk7XHJcbiAgICAgICAgdGhpcy5jaGFubmVscyA9IHt9O1xyXG4gICAgfVxyXG5cclxuICAgIGNoYW5uZWwoY2hhbm5lbCkge1xyXG4gICAgICAgIGlmICh0aGlzLmNoYW5uZWxzW2NoYW5uZWxdID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5jaGFubmVsc1tjaGFubmVsXSA9IG5ldyBQdXNoZXJDaGFubmVsKHRoaXMucHVzaGVyLCBjaGFubmVsKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLmNoYW5uZWxzW2NoYW5uZWxdO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGVDaGFubmVsKGNoYW5uZWwpIHtcclxuICAgICAgICBpZiAodGhpcy5jaGFubmVsc1sncHJpdmF0ZS0nICsgY2hhbm5lbF0gPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB0aGlzLmNoYW5uZWxzWydwcml2YXRlLScgKyBjaGFubmVsXSA9IG5ldyBQdXNoZXJQcml2YXRlQ2hhbm5lbCh0aGlzLnB1c2hlciwgJ3ByaXZhdGUtJyArIGNoYW5uZWwpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy5jaGFubmVsc1sncHJpdmF0ZS0nICsgY2hhbm5lbF07XHJcbiAgICB9XHJcblxyXG4gICAgcHJlc2VuY2VDaGFubmVsKGNoYW5uZWwpIHtcclxuICAgICAgICBpZiAodGhpcy5jaGFubmVsc1sncHJlc2VuY2UtJyArIGNoYW5uZWxdID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5jaGFubmVsc1sncHJlc2VuY2UtJyArIGNoYW5uZWxdID0gbmV3IFB1c2hlclByZXNlbmNlQ2hhbm5lbCh0aGlzLnB1c2hlciwgJ3ByZXNlbmNlLScgKyBjaGFubmVsKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY2hhbm5lbHNbJ3ByZXNlbmNlLScgKyBjaGFubmVsXTtcclxuICAgIH1cclxuXHJcbiAgICB1bnN1YnNjcmliZShuYW1lKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuY2hhbm5lbHNbbmFtZV0pIHtcclxuICAgICAgICAgICAgdGhpcy5jaGFubmVsc1tuYW1lXS51bnN1YnNjcmliZSgpO1xyXG5cclxuICAgICAgICAgICAgZGVsZXRlIHRoaXMuY2hhbm5lbHNbbmFtZV07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiaW1wb3J0IHtQdXNoZXJDb25uZWN0b3J9IGZyb20gXCIuL2Nvbm5lY3Rvci9wdXNoZXJfY29ubmVjdG9yXCI7XHJcbmltcG9ydCB7UHJpdmF0ZUNoYW5uZWx9IGZyb20gXCJsdWZmeS1wdXNoZXIvc3JjL2NoYW5uZWxzL3ByaXZhdGVfY2hhbm5lbFwiO1xyXG5pbXBvcnQge1ByZXNlbmNlQ2hhbm5lbH0gZnJvbSBcImx1ZmZ5LXB1c2hlci9zcmMvY2hhbm5lbHMvcHJlc2VuY2VfY2hhbm5lbFwiO1xyXG5pbXBvcnQge0NoYW5uZWx9IGZyb20gXCJsdWZmeS1wdXNoZXIvc3JjL2NoYW5uZWxzL2NoYW5uZWxcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBFY2hvIHtcclxuICAgIGNvbnN0cnVjdG9yKGFwcGtleSwgb3B0aW9ucykge1xyXG4gICAgICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XHJcbiAgICAgICAgdGhpcy5jb25uZWN0b3IgPSBuZXcgUHVzaGVyQ29ubmVjdG9yKGFwcGtleSwgdGhpcy5vcHRpb25zKTtcclxuICAgIH1cclxuXHJcbiAgICBjaGFubmVsKGNoYW5uZWwpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jb25uZWN0b3IuY2hhbm5lbChjaGFubmVsKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlKGNoYW5uZWwpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jb25uZWN0b3IucHJpdmF0ZUNoYW5uZWwoY2hhbm5lbCk7XHJcbiAgICB9XHJcblxyXG4gICAgam9pbihjaGFubmVsKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY29ubmVjdG9yLnByZXNlbmNlQ2hhbm5lbChjaGFubmVsKTtcclxuICAgIH1cclxuXHJcbiAgICBzdWJzY3JpYmUobmFtZSkge1xyXG4gICAgICAgIGlmIChuYW1lLmluZGV4T2YoJ3ByaXZhdGUtJykgPT09IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMucHJpdmF0ZShuYW1lKTtcclxuICAgICAgICB9IGVsc2UgaWYgKG5hbWUuaW5kZXhPZigncHJlc2VuY2UtJykgPT09IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuam9pbihuYW1lKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jaGFubmVsKG5hbWUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOmAgOWHuumikemBkyzmmoLnlZlcclxuICAgICAqIEBwYXJhbSBjaGFubmVsXHJcbiAgICAgKi9cclxuICAgIHVuc3Vic2NyaWJlKGNoYW5uZWwpIHtcclxuICAgICAgICB0aGlzLmNvbm5lY3Rvci51bnN1YnNjcmliZShjaGFubmVsKTtcclxuICAgIH1cclxufVxyXG5cclxud2luZG93LkVjaG8gPSBFY2hvO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9
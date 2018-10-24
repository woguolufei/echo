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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app_a_user_2.js");
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

/***/ "./src/app_a_user_2.js":
/*!*****************************!*\
  !*** ./src/app_a_user_2.js ***!
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
      'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC90ZXN0cy50ZXN0IiwiaWF0IjoxNTM5MjUxNTczLCJleHAiOjE1MzkyNTUxNzMsIm5iZiI6MTUzOTI1MTU3MywianRpIjoiMlJVRVpiWGRiOUE5R0NqbSIsInN1YiI6MSwicHJ2IjoiODdlMGFmMWVmOWZkMTU4MTJmZGVjOTcxNTNhMTRlMGIwNDc1NDZhYSJ9.cvgM-PouESedkW3eEqK51dMHiKt7TuzEiKQRv4X5H_Q'
    },
    params: {}
  }
});
/*window.Echo.channel('order').listen('new', (e) => {
    console.log(e)
}).listen('make', (e) => {
});*/

/*
window.Echo.private('user.2').listen('a', (e) => {
    alert('aaa');
}).listen('b', (e) => {
    alert('bbb');
});
*/

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2x1ZmZ5LXB1c2hlci9kaXN0L3B1c2hlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbHVmZnktcHVzaGVyL3NyYy9jaGFubmVscy9jaGFubmVsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sdWZmeS1wdXNoZXIvc3JjL2NoYW5uZWxzL3ByZXNlbmNlX2NoYW5uZWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2x1ZmZ5LXB1c2hlci9zcmMvY2hhbm5lbHMvcHJpdmF0ZV9jaGFubmVsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sdWZmeS1wdXNoZXIvc3JjL2V2ZW50cy9jYWxsYmFja19yZWdpc3RyeS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbHVmZnktcHVzaGVyL3NyYy9ldmVudHMvZGlzcGF0Y2hlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwX2FfdXNlcl8yLmpzIiwid2VicGFjazovLy8uL3NyYy9jaGFubmVsL2NoYW5uZWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NoYW5uZWwvcHVzaGVyLWNoYW5uZWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NoYW5uZWwvcHVzaGVyLXByZXNlbmNlLWNoYW5uZWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NoYW5uZWwvcHVzaGVyLXByaXZhdGUtY2hhbm5lbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29ubmVjdG9yL3B1c2hlcl9jb25uZWN0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VjaG8uanMiXSwibmFtZXMiOlsid2luZG93IiwiRWNobyIsImhvc3QiLCJhdXRoIiwibWV0aG9kIiwidXJsIiwiaGVhZGVycyIsInBhcmFtcyIsImpvaW4iLCJoZXJlIiwidXNlcnMiLCJjb25zb2xlIiwibG9nIiwiam9pbmluZyIsInVzZXIiLCJsZWF2aW5nIiwibGlzdGVuIiwiZSIsIkNoYW5uZWwiLCJwdXNoZXIiLCJuYW1lIiwic3Vic2NyaWJlIiwic3Vic2NyaXB0aW9uIiwidW5zdWJzY3JpYmUiLCJldmVudCIsImNhbGxiYWNrIiwib24iLCJ1bmJpbmQiLCJiaW5kIiwiZGF0YSIsInNlbmQiLCJjaGFubmVsIiwiUHVzaGVyQ2hhbm5lbCIsIlB1c2hlclByZXNlbmNlQ2hhbm5lbCIsImJhY2siLCJwcmVzZW5jZSIsIlB1c2hlclByaXZhdGVDaGFubmVsIiwiUHVzaGVyQ29ubmVjdG9yIiwiYXBwX2tleSIsIm9wdGlvbnMiLCJQdXNoZXIiLCJjaGFubmVscyIsInVuZGVmaW5lZCIsImFwcGtleSIsImNvbm5lY3RvciIsInByaXZhdGVDaGFubmVsIiwicHJlc2VuY2VDaGFubmVsIiwiaW5kZXhPZiIsInByaXZhdGUiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ2xGQSw2QkFBNkI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrREFBa0QsZ0NBQWdDO0FBQ2xGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdFQUFnRSxrQkFBa0I7QUFDbEY7QUFDQSx5REFBeUQsY0FBYztBQUN2RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUFpRCxpQ0FBaUM7QUFDbEYsd0hBQXdILG1CQUFtQixFQUFFO0FBQzdJO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQywwQkFBMEIsRUFBRTtBQUMvRCx5Q0FBeUMsZUFBZTtBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOERBQThELCtEQUErRDtBQUM3SDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw0Q0FBNEM7QUFDNUM7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDs7O0FBR0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixZQUFZLE1BQU07QUFDbEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7O0FBR0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7O0FBR0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxTQUFTO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQTs7O0FBR0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQSxrQ0FBa0MsY0FBYztBQUNoRDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnREFBZ0Q7QUFDaEQ7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0EsZ0RBQWdEO0FBQ2hEO0FBQ0E7QUFDQTtB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QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLHNCQUFzQjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEscUNBQXFDOztBQUVyQztBQUNBO0FBQ0E7O0FBRUEsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixVQUFVOzs7QUFHdEMsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGlHQUFpRyxnQkFBZ0IsRUFBRTtBQUNuSDtBQUNBLHVCQUF1QiwyRUFBMkUsa0NBQWtDLG1CQUFtQixHQUFHLEVBQUUsT0FBTyxrQ0FBa0MsOEhBQThILEdBQUcsRUFBRSxxQkFBcUI7O0FBRTdWLGlEQUFpRCwwQ0FBMEMsMERBQTBELEVBQUU7O0FBRXZKLDJDQUEyQyxnQkFBZ0Isa0JBQWtCLE9BQU8sMkJBQTJCLHdEQUF3RCxnQ0FBZ0MsdURBQXVELDJEQUEyRCxFQUFFOztBQUUzVCw2REFBNkQsc0VBQXNFLDhEQUE4RCxvQkFBb0I7O0FBRXJOLGlEQUFpRCwwRUFBMEUsYUFBYSxFQUFFLHFDQUFxQzs7QUFFL0ssdUNBQXVDLHVCQUF1Qix1RkFBdUYsRUFBRSxhQUFhOztBQUVwSyw2QkFBNkIsZ0dBQWdHLGdEQUFnRCxHQUFHLDJCQUEyQjs7QUFFM00sMENBQTBDLCtEQUErRCwyRUFBMkUsRUFBRSx5RUFBeUUsZUFBZSxzREFBc0QsRUFBRSxFQUFFLHVEQUF1RDs7QUFFL1gsZ0NBQWdDLDRFQUE0RSxpQkFBaUIsVUFBVSxHQUFHLDhCQUE4Qjs7O0FBR3hLO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxHQUFHOztBQUVIO0FBQ0EsQ0FBQzs7QUFFRCxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esa0dBQWtHLGlCQUFpQixFQUFFO0FBQ3JIO0FBQ0E7QUFDQTtBQUNBLGlEQUFpRCwwQ0FBMEMsMERBQTBELEVBQUU7O0FBRXZKLDJDQUEyQyxnQkFBZ0Isa0JBQWtCLE9BQU8sMkJBQTJCLHdEQUF3RCxnQ0FBZ0MsdURBQXVELDJEQUEyRCxFQUFFOztBQUUzVCw2REFBNkQsc0VBQXNFLDhEQUE4RCxvQkFBb0I7Ozs7O0FBS3JOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EseUdBQXlHLHdCQUF3QixFQUFFO0FBQ25JO0FBQ0EsdUJBQXVCLDJFQUEyRSxrQ0FBa0MsbUJBQW1CLEdBQUcsRUFBRSxPQUFPLGtDQUFrQyw4SEFBOEgsR0FBRyxFQUFFLHFCQUFxQjs7QUFFN1YsaURBQWlELDBDQUEwQywwREFBMEQsRUFBRTs7QUFFdkosMkNBQTJDLGdCQUFnQixrQkFBa0IsT0FBTywyQkFBMkIsd0RBQXdELGdDQUFnQyx1REFBdUQsMkRBQTJELEVBQUU7O0FBRTNULDZEQUE2RCxzRUFBc0UsOERBQThELG9CQUFvQjs7QUFFck4saURBQWlELDBFQUEwRSxhQUFhLEVBQUUscUNBQXFDOztBQUUvSyx1Q0FBdUMsdUJBQXVCLHVGQUF1RixFQUFFLGFBQWE7O0FBRXBLLDZCQUE2QixnR0FBZ0csZ0RBQWdELEdBQUcsMkJBQTJCOztBQUUzTSwwQ0FBMEMsK0RBQStELDJFQUEyRSxFQUFFLHlFQUF5RSxlQUFlLHNEQUFzRCxFQUFFLEVBQUUsdURBQXVEOztBQUUvWCxnQ0FBZ0MsNEVBQTRFLGlCQUFpQixVQUFVLEdBQUcsOEJBQThCOzs7QUFHeEs7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUDtBQUNBLEdBQUc7O0FBRUg7QUFDQSxDQUFDOztBQUVELE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx3R0FBd0csdUJBQXVCLEVBQUU7QUFDakk7QUFDQSx1QkFBdUIsMkVBQTJFLGtDQUFrQyxtQkFBbUIsR0FBRyxFQUFFLE9BQU8sa0NBQWtDLDhIQUE4SCxHQUFHLEVBQUUscUJBQXFCOztBQUU3VixpREFBaUQsMENBQTBDLDBEQUEwRCxFQUFFOztBQUV2SiwyQ0FBMkMsZ0JBQWdCLGtCQUFrQixPQUFPLDJCQUEyQix3REFBd0QsZ0NBQWdDLHVEQUF1RCwyREFBMkQsRUFBRTs7QUFFM1QsNkRBQTZELHNFQUFzRSw4REFBOEQsb0JBQW9COztBQUVyTixpREFBaUQsMEVBQTBFLGFBQWEsRUFBRSxxQ0FBcUM7O0FBRS9LLHVDQUF1Qyx1QkFBdUIsdUZBQXVGLEVBQUUsYUFBYTs7QUFFcEssNkJBQTZCLGdHQUFnRyxnREFBZ0QsR0FBRywyQkFBMkI7O0FBRTNNLDBDQUEwQywrREFBK0QsMkVBQTJFLEVBQUUseUVBQXlFLGVBQWUsc0RBQXNELEVBQUUsRUFBRSx1REFBdUQ7O0FBRS9YLGdDQUFnQyw0RUFBNEUsaUJBQWlCLFVBQVUsR0FBRyw4QkFBOEI7OztBQUd4SztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUDtBQUNBLEdBQUc7O0FBRUg7QUFDQSxDQUFDOztBQUVELE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxnR0FBZ0csZUFBZSxFQUFFO0FBQ2pIO0FBQ0EsdUJBQXVCLDJFQUEyRSxrQ0FBa0MsbUJBQW1CLEdBQUcsRUFBRSxPQUFPLGtDQUFrQyw4SEFBOEgsR0FBRyxFQUFFLHFCQUFxQjs7QUFFN1YsaURBQWlELDBDQUEwQywwREFBMEQsRUFBRTs7QUFFdkosMkNBQTJDLGdCQUFnQixrQkFBa0IsT0FBTywyQkFBMkIsd0RBQXdELGdDQUFnQyx1REFBdUQsMkRBQTJELEVBQUU7O0FBRTNULDZEQUE2RCxzRUFBc0UsOERBQThELG9CQUFvQjs7QUFFck4saURBQWlELDBFQUEwRSxhQUFhLEVBQUUscUNBQXFDOztBQUUvSyx1Q0FBdUMsdUJBQXVCLHVGQUF1RixFQUFFLGFBQWE7O0FBRXBLLDZCQUE2QixnR0FBZ0csZ0RBQWdELEdBQUcsMkJBQTJCOztBQUUzTSwwQ0FBMEMsK0RBQStELDJFQUEyRSxFQUFFLHlFQUF5RSxlQUFlLHNEQUFzRCxFQUFFLEVBQUUsdURBQXVEOztBQUUvWCxnQ0FBZ0MsNEVBQTRFLGlCQUFpQixVQUFVLEdBQUcsOEJBQThCOzs7QUFHeEs7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7O0FBRXpCO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsT0FBTyxFQUFFO0FBQ1Q7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQSxDQUFDOztBQUVELE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSwwR0FBMEcseUJBQXlCLEVBQUU7QUFDckksaURBQWlELDBDQUEwQywwREFBMEQsRUFBRTs7QUFFdkosMkNBQTJDLGdCQUFnQixrQkFBa0IsT0FBTywyQkFBMkIsd0RBQXdELGdDQUFnQyx1REFBdUQsMkRBQTJELEVBQUU7O0FBRTNULDZEQUE2RCxzRUFBc0UsOERBQThELG9CQUFvQjs7QUFFck47QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBOztBQUVBLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxvR0FBb0csbUJBQW1CLEVBQUU7QUFDekg7QUFDQSxpREFBaUQsMENBQTBDLDBEQUEwRCxFQUFFOztBQUV2SiwyQ0FBMkMsZ0JBQWdCLGtCQUFrQixPQUFPLDJCQUEyQix3REFBd0QsZ0NBQWdDLHVEQUF1RCwyREFBMkQsRUFBRTs7QUFFM1QsNkRBQTZELHNFQUFzRSw4REFBOEQsb0JBQW9COzs7QUFHck47QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EscUJBQXFCLGtDQUFrQztBQUN2RDtBQUNBOztBQUVBOztBQUVBO0FBQ0Esd0JBQXdCLHVCQUF1QjtBQUMvQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQSxDQUFDOztBQUVELE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxnR0FBZ0csZUFBZSxFQUFFO0FBQ2pIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBaUQsMENBQTBDLDBEQUEwRCxFQUFFOztBQUV2SiwyQ0FBMkMsZ0JBQWdCLGtCQUFrQixPQUFPLDJCQUEyQix3REFBd0QsZ0NBQWdDLHVEQUF1RCwyREFBMkQsRUFBRTs7QUFFM1QsNkRBQTZELHNFQUFzRSw4REFBOEQsb0JBQW9COzs7Ozs7QUFNck47QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnREFBZ0Q7QUFDaEQ7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLE9BQU87QUFDUDtBQUNBLE9BQU87QUFDUDtBQUNBLEdBQUc7O0FBRUg7QUFDQSxDQUFDO0FBQ0Q7O0FBRUEsT0FBTzs7QUFFUCxVQUFVO0FBQ1YsMkNBQTJDLGNBQWMsbW4xRzs7Ozs7Ozs7Ozs7O0FDenBGekQ7QUFBQTtBQUFBO0FBQWdEOztBQUV6QyxzQkFBc0IsNkRBQVU7QUFDdkM7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEM7Ozs7Ozs7Ozs7OztBQ3RCQTtBQUFBO0FBQUE7QUFBZ0Q7O0FBRXpDLDhCQUE4Qiw2REFBVTtBQUMvQztBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0EsQzs7Ozs7Ozs7Ozs7O0FDN0JBO0FBQUE7QUFBQTtBQUFnRDs7QUFFekMsNkJBQTZCLDZEQUFVO0FBQzlDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0EsQzs7Ozs7Ozs7Ozs7O0FDNUJBO0FBQUE7QUFBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEM7Ozs7Ozs7Ozs7OztBQ3hEQTtBQUFBO0FBQUE7QUFBcUQ7O0FBRTlDO0FBQ1A7QUFDQSw2QkFBNkIsbUVBQWdCO0FBQzdDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsdUJBQXVCLGtDQUFrQztBQUN6RDtBQUNBOztBQUVBO0FBQ0E7QUFDQSwyQkFBMkIsc0JBQXNCO0FBQ2pEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQzs7Ozs7Ozs7Ozs7O0FDekRBO0FBQUE7QUFBQTtBQUVBQSxNQUFNLENBQUNDLElBQVAsR0FBYyxJQUFJQSwwQ0FBSixDQUFTLHNCQUFULEVBQWlDO0FBQzNDQyxNQUFJLEVBQUUseUJBRHFDO0FBRTNDQyxNQUFJLEVBQUU7QUFDRkMsVUFBTSxFQUFFLE1BRE47QUFFRkMsT0FBRyxFQUFFLG1DQUZIO0FBR0ZDLFdBQU8sRUFBRTtBQUNMLGdCQUFVLGtCQURMO0FBRUwsdUJBQWlCO0FBRlosS0FIUDtBQU9GQyxVQUFNLEVBQUU7QUFQTjtBQUZxQyxDQUFqQyxDQUFkO0FBYUE7Ozs7O0FBT0E7Ozs7Ozs7O0FBUUFQLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZTyxJQUFaLFdBQ0tDLElBREwsQ0FDVSxVQUFDQyxLQUFELEVBQVc7QUFDYkMsU0FBTyxDQUFDQyxHQUFSLENBQVksTUFBWjtBQUNBRCxTQUFPLENBQUNDLEdBQVIsQ0FBWUYsS0FBWjtBQUNILENBSkwsRUFLS0csT0FMTCxDQUthLFVBQUNDLElBQUQsRUFBVTtBQUNmSCxTQUFPLENBQUNDLEdBQVIsQ0FBWSxNQUFaO0FBQ0FELFNBQU8sQ0FBQ0MsR0FBUixDQUFZRSxJQUFaO0FBQ0gsQ0FSTCxFQVNLQyxPQVRMLENBU2EsVUFBQ0QsSUFBRCxFQUFVO0FBQ2ZILFNBQU8sQ0FBQ0MsR0FBUixDQUFZLE1BQVo7QUFDQUQsU0FBTyxDQUFDQyxHQUFSLENBQVlFLElBQVo7QUFDSCxDQVpMLEVBWU9FLE1BWlAsQ0FZYyxZQVpkLEVBWTRCLFVBQUNDLENBQUQsRUFBTztBQUMvQk4sU0FBTyxDQUFDQyxHQUFSLENBQVlLLENBQVo7QUFDSCxDQWRELEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOUJPLElBQU1DLE9BQWI7QUFBQTtBQUFBO0FBQ0ksbUJBQVlDLE1BQVosRUFBb0JDLElBQXBCLEVBQTBCO0FBQUE7O0FBQ3RCLFNBQUtELE1BQUwsR0FBY0EsTUFBZDtBQUNBLFNBQUtDLElBQUwsR0FBWUEsSUFBWjtBQUVBLFNBQUtDLFNBQUw7QUFDSDs7QUFOTDtBQUFBO0FBQUEsZ0NBUWdCO0FBQ1IsV0FBS0MsWUFBTCxHQUFvQixLQUFLSCxNQUFMLENBQVlFLFNBQVosQ0FBc0IsS0FBS0QsSUFBM0IsQ0FBcEI7QUFDSDtBQVZMO0FBQUE7QUFBQSxrQ0FZa0I7QUFDVixXQUFLRCxNQUFMLENBQVlJLFdBQVosQ0FBd0IsS0FBS0gsSUFBN0I7QUFDSDtBQWRMO0FBQUE7QUFBQSwyQkFnQldJLEtBaEJYLEVBZ0JrQkMsUUFoQmxCLEVBZ0I0QjtBQUNwQixXQUFLQyxFQUFMLENBQVFGLEtBQVIsRUFBZUMsUUFBZjtBQUVBLGFBQU8sSUFBUDtBQUNIO0FBcEJMO0FBQUE7QUFBQSxrQ0FzQmtCRCxLQXRCbEIsRUFzQnlCO0FBQ2pCLFdBQUtGLFlBQUwsQ0FBa0JLLE1BQWxCLENBQXlCSCxLQUF6QjtBQUVBLGFBQU8sSUFBUDtBQUNIO0FBMUJMO0FBQUE7QUFBQSx1QkE0Qk9BLEtBNUJQLEVBNEJjQyxRQTVCZCxFQTRCd0I7QUFDaEIsV0FBS0gsWUFBTCxDQUFrQk0sSUFBbEIsQ0FBdUJKLEtBQXZCLEVBQThCQyxRQUE5QjtBQUVBLGFBQU8sSUFBUDtBQUNIO0FBaENMO0FBQUE7QUFBQSw0QkFrQ1lELEtBbENaLEVBa0NtQkssSUFsQ25CLEVBa0N5QjtBQUNqQixXQUFLVixNQUFMLENBQVlXLElBQVosQ0FBaUI7QUFDYkMsZUFBTyxFQUFFLEtBQUtYLElBREQ7QUFFYlMsWUFBSSxFQUFFQSxJQUZPO0FBR2JMLGFBQUssRUFBRSxZQUFZQTtBQUhOLE9BQWpCO0FBS0g7QUF4Q0w7QUFBQTtBQUFBLHFDQTBDcUJBLEtBMUNyQixFQTBDNEJDLFFBMUM1QixFQTBDc0M7QUFDOUIsV0FBS0MsRUFBTCxDQUFRLFlBQVlGLEtBQXBCLEVBQTJCQyxRQUEzQjtBQUNIO0FBNUNMOztBQUFBO0FBQUEsSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUVPLElBQU1PLGFBQWI7QUFBQTtBQUFBO0FBQUE7O0FBRUk7Ozs7QUFJQSx5QkFBWWIsTUFBWixFQUFvQkMsSUFBcEIsRUFBMEI7QUFBQTs7QUFBQSxzRkFDaEJELE1BRGdCLEVBQ1JDLElBRFE7QUFFekI7O0FBUkw7QUFBQSxFQUFtQ0YsZ0RBQW5DLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0ZBO0FBRU8sSUFBTWUscUJBQWI7QUFBQTtBQUFBO0FBQUE7O0FBRUk7Ozs7QUFJQSxpQ0FBWWQsTUFBWixFQUFvQkMsSUFBcEIsRUFBMEI7QUFBQTs7QUFBQSw4RkFDaEJELE1BRGdCLEVBQ1JDLElBRFE7QUFFekI7O0FBUkw7QUFBQTtBQUFBLHlCQVVTSyxRQVZULEVBVW1CO0FBQ1gsVUFBSVMsSUFBSSxHQUFHLFNBQVBBLElBQU8sQ0FBQ2pCLENBQUQsRUFBTztBQUNkUSxnQkFBUSxDQUFDUixDQUFDLENBQUNrQixRQUFILENBQVI7QUFDSCxPQUZEOztBQUdBLFdBQUtULEVBQUwsQ0FBUSx3QkFBUixFQUFrQ1EsSUFBbEM7QUFDQSxhQUFPLElBQVA7QUFDSDtBQWhCTDtBQUFBO0FBQUEsNEJBa0JZVCxRQWxCWixFQWtCc0I7QUFDZCxXQUFLQyxFQUFMLENBQVEsY0FBUixFQUF3QkQsUUFBeEI7QUFDQSxhQUFPLElBQVA7QUFDSDtBQXJCTDtBQUFBO0FBQUEsNEJBdUJZQSxRQXZCWixFQXVCc0I7QUFDZCxXQUFLQyxFQUFMLENBQVEsZ0JBQVIsRUFBMEJELFFBQTFCO0FBQ0EsYUFBTyxJQUFQO0FBQ0g7QUExQkw7O0FBQUE7QUFBQSxFQUEyQ1AsZ0RBQTNDLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRkE7QUFFTyxJQUFNa0Isb0JBQWI7QUFBQTtBQUFBO0FBQUE7O0FBRUk7Ozs7QUFJQSxnQ0FBWWpCLE1BQVosRUFBb0JDLElBQXBCLEVBQTBCO0FBQUE7O0FBQUEsNkZBQ2hCRCxNQURnQixFQUNSQyxJQURRO0FBRXpCOztBQVJMO0FBQUEsRUFBMENGLGdEQUExQyxFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRkE7QUFDQTtBQUNBO0FBQ0E7QUFFTyxJQUFNbUIsZUFBYjtBQUFBO0FBQUE7QUFDSSwyQkFBWUMsT0FBWixFQUFxQkMsT0FBckIsRUFBOEI7QUFBQTs7QUFDMUIsU0FBS3BCLE1BQUwsR0FBYyxJQUFJcUIsTUFBSixDQUFXRixPQUFYLEVBQW9CQyxPQUFwQixDQUFkO0FBQ0EsU0FBS0UsUUFBTCxHQUFnQixFQUFoQjtBQUNIOztBQUpMO0FBQUE7QUFBQSw0QkFNWVYsUUFOWixFQU1xQjtBQUNiLFVBQUksS0FBS1UsUUFBTCxDQUFjVixRQUFkLE1BQTJCVyxTQUEvQixFQUEwQztBQUN0QyxhQUFLRCxRQUFMLENBQWNWLFFBQWQsSUFBeUIsSUFBSUMscUVBQUosQ0FBa0IsS0FBS2IsTUFBdkIsRUFBK0JZLFFBQS9CLENBQXpCO0FBQ0g7O0FBRUQsYUFBTyxLQUFLVSxRQUFMLENBQWNWLFFBQWQsQ0FBUDtBQUNIO0FBWkw7QUFBQTtBQUFBLG1DQWNtQkEsT0FkbkIsRUFjNEI7QUFDcEIsVUFBSSxLQUFLVSxRQUFMLENBQWMsYUFBYVYsT0FBM0IsTUFBd0NXLFNBQTVDLEVBQXVEO0FBQ25ELGFBQUtELFFBQUwsQ0FBYyxhQUFhVixPQUEzQixJQUFzQyxJQUFJSyxvRkFBSixDQUF5QixLQUFLakIsTUFBOUIsRUFBc0MsYUFBYVksT0FBbkQsQ0FBdEM7QUFDSDs7QUFDRCxhQUFPLEtBQUtVLFFBQUwsQ0FBYyxhQUFhVixPQUEzQixDQUFQO0FBQ0g7QUFuQkw7QUFBQTtBQUFBLG9DQXFCb0JBLE9BckJwQixFQXFCNkI7QUFDckIsVUFBSSxLQUFLVSxRQUFMLENBQWMsY0FBY1YsT0FBNUIsTUFBeUNXLFNBQTdDLEVBQXdEO0FBQ3BELGFBQUtELFFBQUwsQ0FBYyxjQUFjVixPQUE1QixJQUF1QyxJQUFJRSxzRkFBSixDQUEwQixLQUFLZCxNQUEvQixFQUF1QyxjQUFjWSxPQUFyRCxDQUF2QztBQUNIOztBQUNELGFBQU8sS0FBS1UsUUFBTCxDQUFjLGNBQWNWLE9BQTVCLENBQVA7QUFDSDtBQTFCTDs7QUFBQTtBQUFBLEk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBRU8sSUFBTTlCLElBQWI7QUFBQTtBQUFBO0FBQ0ksZ0JBQVkwQyxNQUFaLEVBQW9CSixPQUFwQixFQUE2QjtBQUFBOztBQUN6QixTQUFLQSxPQUFMLEdBQWVBLE9BQWY7QUFDQSxTQUFLSyxTQUFMLEdBQWlCLElBQUlQLDJFQUFKLENBQW9CTSxNQUFwQixFQUE0QixLQUFLSixPQUFqQyxDQUFqQjtBQUNIOztBQUpMO0FBQUE7QUFBQSw0QkFNWVIsUUFOWixFQU1xQjtBQUNiLGFBQU8sS0FBS2EsU0FBTCxDQUFlYixPQUFmLENBQXVCQSxRQUF2QixDQUFQO0FBQ0g7QUFSTDtBQUFBO0FBQUEsNkJBVVlBLE9BVlosRUFVcUI7QUFDYixhQUFPLEtBQUthLFNBQUwsQ0FBZUMsY0FBZixDQUE4QmQsT0FBOUIsQ0FBUDtBQUNIO0FBWkw7QUFBQTtBQUFBLHlCQWNTQSxPQWRULEVBY2tCO0FBQ1YsYUFBTyxLQUFLYSxTQUFMLENBQWVFLGVBQWYsQ0FBK0JmLE9BQS9CLENBQVA7QUFDSDtBQWhCTDtBQUFBO0FBQUEsOEJBa0JjWCxJQWxCZCxFQWtCb0I7QUFDWixVQUFJQSxJQUFJLENBQUMyQixPQUFMLENBQWEsVUFBYixNQUE2QixDQUFqQyxFQUFvQztBQUNoQyxlQUFPLEtBQUtDLE9BQUwsQ0FBYTVCLElBQWIsQ0FBUDtBQUNILE9BRkQsTUFFTyxJQUFJQSxJQUFJLENBQUMyQixPQUFMLENBQWEsV0FBYixNQUE4QixDQUFsQyxFQUFxQztBQUN4QyxlQUFPLEtBQUt2QyxJQUFMLENBQVVZLElBQVYsQ0FBUDtBQUNILE9BRk0sTUFFQTtBQUNILGVBQU8sS0FBS1csT0FBTCxDQUFhWCxJQUFiLENBQVA7QUFDSDtBQUNKO0FBRUQ7Ozs7O0FBNUJKO0FBQUE7QUFBQSwwQkFnQ1VXLE9BaENWLEVBZ0NtQixDQUVkO0FBbENMOztBQUFBO0FBQUE7QUFxQ0EvQixNQUFNLENBQUNDLElBQVAsR0FBY0EsSUFBZCxDIiwiZmlsZSI6ImFwcF9hX3VzZXJfMi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2FwcF9hX3VzZXJfMi5qc1wiKTtcbiIsIi8qKioqKiovIChmdW5jdGlvbihtb2R1bGVzKSB7IC8vIHdlYnBhY2tCb290c3RyYXBcbi8qKioqKiovIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuLyoqKioqKi8gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbi8qKioqKiovIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbi8qKioqKiovIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuLyoqKioqKi8gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4vKioqKioqLyBcdFx0fVxuLyoqKioqKi8gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4vKioqKioqLyBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuLyoqKioqKi8gXHRcdFx0aTogbW9kdWxlSWQsXG4vKioqKioqLyBcdFx0XHRsOiBmYWxzZSxcbi8qKioqKiovIFx0XHRcdGV4cG9ydHM6IHt9XG4vKioqKioqLyBcdFx0fTtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4vKioqKioqLyBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbi8qKioqKiovIFx0XHRtb2R1bGUubCA9IHRydWU7XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4vKioqKioqLyBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuLyoqKioqKi8gXHR9XG4vKioqKioqL1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4vKioqKioqLyBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuLyoqKioqKi8gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4vKioqKioqLyBcdFx0fVxuLyoqKioqKi8gXHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4vKioqKioqLyBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4vKioqKioqLyBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbi8qKioqKiovIFx0XHR9XG4vKioqKioqLyBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbi8qKioqKiovIFx0fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuLyoqKioqKi8gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbi8qKioqKiovIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4vKioqKioqLyBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuLyoqKioqKi8gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4vKioqKioqLyBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4vKioqKioqLyBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbi8qKioqKiovIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuLyoqKioqKi8gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4vKioqKioqLyBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbi8qKioqKiovIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4vKioqKioqLyBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuLyoqKioqKi8gXHRcdHJldHVybiBucztcbi8qKioqKiovIFx0fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuLyoqKioqKi8gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuLyoqKioqKi8gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbi8qKioqKiovIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4vKioqKioqLyBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuLyoqKioqKi8gXHRcdHJldHVybiBnZXR0ZXI7XG4vKioqKioqLyBcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcbi8qKioqKiovXG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8qKioqKiovIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9wdXNoZXIuanNcIik7XG4vKioqKioqLyB9KVxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKiovICh7XG5cbi8qKiovIFwiLi9ub2RlX21vZHVsZXMvYXhpb3MvaW5kZXguanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9ub2RlX21vZHVsZXMvYXhpb3MvaW5kZXguanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxubW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL2xpYi9heGlvcyAqLyBcIi4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9heGlvcy5qc1wiKTtcblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2FkYXB0ZXJzL3hoci5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9hZGFwdGVycy94aHIuanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG52YXIgdXRpbHMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuLy4uL3V0aWxzICovIFwiLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL3V0aWxzLmpzXCIpO1xudmFyIHNldHRsZSA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vLi4vY29yZS9zZXR0bGUgKi8gXCIuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9zZXR0bGUuanNcIik7XG52YXIgYnVpbGRVUkwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuLy4uL2hlbHBlcnMvYnVpbGRVUkwgKi8gXCIuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9idWlsZFVSTC5qc1wiKTtcbnZhciBwYXJzZUhlYWRlcnMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuLy4uL2hlbHBlcnMvcGFyc2VIZWFkZXJzICovIFwiLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvcGFyc2VIZWFkZXJzLmpzXCIpO1xudmFyIGlzVVJMU2FtZU9yaWdpbiA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vLi4vaGVscGVycy9pc1VSTFNhbWVPcmlnaW4gKi8gXCIuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9pc1VSTFNhbWVPcmlnaW4uanNcIik7XG52YXIgY3JlYXRlRXJyb3IgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuLi9jb3JlL2NyZWF0ZUVycm9yICovIFwiLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvY3JlYXRlRXJyb3IuanNcIik7XG52YXIgYnRvYSA9ICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuYnRvYSAmJiB3aW5kb3cuYnRvYS5iaW5kKHdpbmRvdykpIHx8IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vLi4vaGVscGVycy9idG9hICovIFwiLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvYnRvYS5qc1wiKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiB4aHJBZGFwdGVyKGNvbmZpZykge1xuICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gZGlzcGF0Y2hYaHJSZXF1ZXN0KHJlc29sdmUsIHJlamVjdCkge1xuICAgIHZhciByZXF1ZXN0RGF0YSA9IGNvbmZpZy5kYXRhO1xuICAgIHZhciByZXF1ZXN0SGVhZGVycyA9IGNvbmZpZy5oZWFkZXJzO1xuXG4gICAgaWYgKHV0aWxzLmlzRm9ybURhdGEocmVxdWVzdERhdGEpKSB7XG4gICAgICBkZWxldGUgcmVxdWVzdEhlYWRlcnNbJ0NvbnRlbnQtVHlwZSddOyAvLyBMZXQgdGhlIGJyb3dzZXIgc2V0IGl0XG4gICAgfVxuXG4gICAgdmFyIHJlcXVlc3QgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICB2YXIgbG9hZEV2ZW50ID0gJ29ucmVhZHlzdGF0ZWNoYW5nZSc7XG4gICAgdmFyIHhEb21haW4gPSBmYWxzZTtcblxuICAgIC8vIEZvciBJRSA4LzkgQ09SUyBzdXBwb3J0XG4gICAgLy8gT25seSBzdXBwb3J0cyBQT1NUIGFuZCBHRVQgY2FsbHMgYW5kIGRvZXNuJ3QgcmV0dXJucyB0aGUgcmVzcG9uc2UgaGVhZGVycy5cbiAgICAvLyBET04nVCBkbyB0aGlzIGZvciB0ZXN0aW5nIGIvYyBYTUxIdHRwUmVxdWVzdCBpcyBtb2NrZWQsIG5vdCBYRG9tYWluUmVxdWVzdC5cbiAgICBpZiAoXCJkZXZlbG9wbWVudFwiICE9PSAndGVzdCcgJiZcbiAgICAgICAgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgICAgICAgd2luZG93LlhEb21haW5SZXF1ZXN0ICYmICEoJ3dpdGhDcmVkZW50aWFscycgaW4gcmVxdWVzdCkgJiZcbiAgICAgICAgIWlzVVJMU2FtZU9yaWdpbihjb25maWcudXJsKSkge1xuICAgICAgcmVxdWVzdCA9IG5ldyB3aW5kb3cuWERvbWFpblJlcXVlc3QoKTtcbiAgICAgIGxvYWRFdmVudCA9ICdvbmxvYWQnO1xuICAgICAgeERvbWFpbiA9IHRydWU7XG4gICAgICByZXF1ZXN0Lm9ucHJvZ3Jlc3MgPSBmdW5jdGlvbiBoYW5kbGVQcm9ncmVzcygpIHt9O1xuICAgICAgcmVxdWVzdC5vbnRpbWVvdXQgPSBmdW5jdGlvbiBoYW5kbGVUaW1lb3V0KCkge307XG4gICAgfVxuXG4gICAgLy8gSFRUUCBiYXNpYyBhdXRoZW50aWNhdGlvblxuICAgIGlmIChjb25maWcuYXV0aCkge1xuICAgICAgdmFyIHVzZXJuYW1lID0gY29uZmlnLmF1dGgudXNlcm5hbWUgfHwgJyc7XG4gICAgICB2YXIgcGFzc3dvcmQgPSBjb25maWcuYXV0aC5wYXNzd29yZCB8fCAnJztcbiAgICAgIHJlcXVlc3RIZWFkZXJzLkF1dGhvcml6YXRpb24gPSAnQmFzaWMgJyArIGJ0b2EodXNlcm5hbWUgKyAnOicgKyBwYXNzd29yZCk7XG4gICAgfVxuXG4gICAgcmVxdWVzdC5vcGVuKGNvbmZpZy5tZXRob2QudG9VcHBlckNhc2UoKSwgYnVpbGRVUkwoY29uZmlnLnVybCwgY29uZmlnLnBhcmFtcywgY29uZmlnLnBhcmFtc1NlcmlhbGl6ZXIpLCB0cnVlKTtcblxuICAgIC8vIFNldCB0aGUgcmVxdWVzdCB0aW1lb3V0IGluIE1TXG4gICAgcmVxdWVzdC50aW1lb3V0ID0gY29uZmlnLnRpbWVvdXQ7XG5cbiAgICAvLyBMaXN0ZW4gZm9yIHJlYWR5IHN0YXRlXG4gICAgcmVxdWVzdFtsb2FkRXZlbnRdID0gZnVuY3Rpb24gaGFuZGxlTG9hZCgpIHtcbiAgICAgIGlmICghcmVxdWVzdCB8fCAocmVxdWVzdC5yZWFkeVN0YXRlICE9PSA0ICYmICF4RG9tYWluKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8vIFRoZSByZXF1ZXN0IGVycm9yZWQgb3V0IGFuZCB3ZSBkaWRuJ3QgZ2V0IGEgcmVzcG9uc2UsIHRoaXMgd2lsbCBiZVxuICAgICAgLy8gaGFuZGxlZCBieSBvbmVycm9yIGluc3RlYWRcbiAgICAgIC8vIFdpdGggb25lIGV4Y2VwdGlvbjogcmVxdWVzdCB0aGF0IHVzaW5nIGZpbGU6IHByb3RvY29sLCBtb3N0IGJyb3dzZXJzXG4gICAgICAvLyB3aWxsIHJldHVybiBzdGF0dXMgYXMgMCBldmVuIHRob3VnaCBpdCdzIGEgc3VjY2Vzc2Z1bCByZXF1ZXN0XG4gICAgICBpZiAocmVxdWVzdC5zdGF0dXMgPT09IDAgJiYgIShyZXF1ZXN0LnJlc3BvbnNlVVJMICYmIHJlcXVlc3QucmVzcG9uc2VVUkwuaW5kZXhPZignZmlsZTonKSA9PT0gMCkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICAvLyBQcmVwYXJlIHRoZSByZXNwb25zZVxuICAgICAgdmFyIHJlc3BvbnNlSGVhZGVycyA9ICdnZXRBbGxSZXNwb25zZUhlYWRlcnMnIGluIHJlcXVlc3QgPyBwYXJzZUhlYWRlcnMocmVxdWVzdC5nZXRBbGxSZXNwb25zZUhlYWRlcnMoKSkgOiBudWxsO1xuICAgICAgdmFyIHJlc3BvbnNlRGF0YSA9ICFjb25maWcucmVzcG9uc2VUeXBlIHx8IGNvbmZpZy5yZXNwb25zZVR5cGUgPT09ICd0ZXh0JyA/IHJlcXVlc3QucmVzcG9uc2VUZXh0IDogcmVxdWVzdC5yZXNwb25zZTtcbiAgICAgIHZhciByZXNwb25zZSA9IHtcbiAgICAgICAgZGF0YTogcmVzcG9uc2VEYXRhLFxuICAgICAgICAvLyBJRSBzZW5kcyAxMjIzIGluc3RlYWQgb2YgMjA0IChodHRwczovL2dpdGh1Yi5jb20vYXhpb3MvYXhpb3MvaXNzdWVzLzIwMSlcbiAgICAgICAgc3RhdHVzOiByZXF1ZXN0LnN0YXR1cyA9PT0gMTIyMyA/IDIwNCA6IHJlcXVlc3Quc3RhdHVzLFxuICAgICAgICBzdGF0dXNUZXh0OiByZXF1ZXN0LnN0YXR1cyA9PT0gMTIyMyA/ICdObyBDb250ZW50JyA6IHJlcXVlc3Quc3RhdHVzVGV4dCxcbiAgICAgICAgaGVhZGVyczogcmVzcG9uc2VIZWFkZXJzLFxuICAgICAgICBjb25maWc6IGNvbmZpZyxcbiAgICAgICAgcmVxdWVzdDogcmVxdWVzdFxuICAgICAgfTtcblxuICAgICAgc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgcmVzcG9uc2UpO1xuXG4gICAgICAvLyBDbGVhbiB1cCByZXF1ZXN0XG4gICAgICByZXF1ZXN0ID0gbnVsbDtcbiAgICB9O1xuXG4gICAgLy8gSGFuZGxlIGxvdyBsZXZlbCBuZXR3b3JrIGVycm9yc1xuICAgIHJlcXVlc3Qub25lcnJvciA9IGZ1bmN0aW9uIGhhbmRsZUVycm9yKCkge1xuICAgICAgLy8gUmVhbCBlcnJvcnMgYXJlIGhpZGRlbiBmcm9tIHVzIGJ5IHRoZSBicm93c2VyXG4gICAgICAvLyBvbmVycm9yIHNob3VsZCBvbmx5IGZpcmUgaWYgaXQncyBhIG5ldHdvcmsgZXJyb3JcbiAgICAgIHJlamVjdChjcmVhdGVFcnJvcignTmV0d29yayBFcnJvcicsIGNvbmZpZywgbnVsbCwgcmVxdWVzdCkpO1xuXG4gICAgICAvLyBDbGVhbiB1cCByZXF1ZXN0XG4gICAgICByZXF1ZXN0ID0gbnVsbDtcbiAgICB9O1xuXG4gICAgLy8gSGFuZGxlIHRpbWVvdXRcbiAgICByZXF1ZXN0Lm9udGltZW91dCA9IGZ1bmN0aW9uIGhhbmRsZVRpbWVvdXQoKSB7XG4gICAgICByZWplY3QoY3JlYXRlRXJyb3IoJ3RpbWVvdXQgb2YgJyArIGNvbmZpZy50aW1lb3V0ICsgJ21zIGV4Y2VlZGVkJywgY29uZmlnLCAnRUNPTk5BQk9SVEVEJyxcbiAgICAgICAgcmVxdWVzdCkpO1xuXG4gICAgICAvLyBDbGVhbiB1cCByZXF1ZXN0XG4gICAgICByZXF1ZXN0ID0gbnVsbDtcbiAgICB9O1xuXG4gICAgLy8gQWRkIHhzcmYgaGVhZGVyXG4gICAgLy8gVGhpcyBpcyBvbmx5IGRvbmUgaWYgcnVubmluZyBpbiBhIHN0YW5kYXJkIGJyb3dzZXIgZW52aXJvbm1lbnQuXG4gICAgLy8gU3BlY2lmaWNhbGx5IG5vdCBpZiB3ZSdyZSBpbiBhIHdlYiB3b3JrZXIsIG9yIHJlYWN0LW5hdGl2ZS5cbiAgICBpZiAodXRpbHMuaXNTdGFuZGFyZEJyb3dzZXJFbnYoKSkge1xuICAgICAgdmFyIGNvb2tpZXMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuLy4uL2hlbHBlcnMvY29va2llcyAqLyBcIi4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2Nvb2tpZXMuanNcIik7XG5cbiAgICAgIC8vIEFkZCB4c3JmIGhlYWRlclxuICAgICAgdmFyIHhzcmZWYWx1ZSA9IChjb25maWcud2l0aENyZWRlbnRpYWxzIHx8IGlzVVJMU2FtZU9yaWdpbihjb25maWcudXJsKSkgJiYgY29uZmlnLnhzcmZDb29raWVOYW1lID9cbiAgICAgICAgICBjb29raWVzLnJlYWQoY29uZmlnLnhzcmZDb29raWVOYW1lKSA6XG4gICAgICAgICAgdW5kZWZpbmVkO1xuXG4gICAgICBpZiAoeHNyZlZhbHVlKSB7XG4gICAgICAgIHJlcXVlc3RIZWFkZXJzW2NvbmZpZy54c3JmSGVhZGVyTmFtZV0gPSB4c3JmVmFsdWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gQWRkIGhlYWRlcnMgdG8gdGhlIHJlcXVlc3RcbiAgICBpZiAoJ3NldFJlcXVlc3RIZWFkZXInIGluIHJlcXVlc3QpIHtcbiAgICAgIHV0aWxzLmZvckVhY2gocmVxdWVzdEhlYWRlcnMsIGZ1bmN0aW9uIHNldFJlcXVlc3RIZWFkZXIodmFsLCBrZXkpIHtcbiAgICAgICAgaWYgKHR5cGVvZiByZXF1ZXN0RGF0YSA9PT0gJ3VuZGVmaW5lZCcgJiYga2V5LnRvTG93ZXJDYXNlKCkgPT09ICdjb250ZW50LXR5cGUnKSB7XG4gICAgICAgICAgLy8gUmVtb3ZlIENvbnRlbnQtVHlwZSBpZiBkYXRhIGlzIHVuZGVmaW5lZFxuICAgICAgICAgIGRlbGV0ZSByZXF1ZXN0SGVhZGVyc1trZXldO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIE90aGVyd2lzZSBhZGQgaGVhZGVyIHRvIHRoZSByZXF1ZXN0XG4gICAgICAgICAgcmVxdWVzdC5zZXRSZXF1ZXN0SGVhZGVyKGtleSwgdmFsKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gQWRkIHdpdGhDcmVkZW50aWFscyB0byByZXF1ZXN0IGlmIG5lZWRlZFxuICAgIGlmIChjb25maWcud2l0aENyZWRlbnRpYWxzKSB7XG4gICAgICByZXF1ZXN0LndpdGhDcmVkZW50aWFscyA9IHRydWU7XG4gICAgfVxuXG4gICAgLy8gQWRkIHJlc3BvbnNlVHlwZSB0byByZXF1ZXN0IGlmIG5lZWRlZFxuICAgIGlmIChjb25maWcucmVzcG9uc2VUeXBlKSB7XG4gICAgICB0cnkge1xuICAgICAgICByZXF1ZXN0LnJlc3BvbnNlVHlwZSA9IGNvbmZpZy5yZXNwb25zZVR5cGU7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIEV4cGVjdGVkIERPTUV4Y2VwdGlvbiB0aHJvd24gYnkgYnJvd3NlcnMgbm90IGNvbXBhdGlibGUgWE1MSHR0cFJlcXVlc3QgTGV2ZWwgMi5cbiAgICAgICAgLy8gQnV0LCB0aGlzIGNhbiBiZSBzdXBwcmVzc2VkIGZvciAnanNvbicgdHlwZSBhcyBpdCBjYW4gYmUgcGFyc2VkIGJ5IGRlZmF1bHQgJ3RyYW5zZm9ybVJlc3BvbnNlJyBmdW5jdGlvbi5cbiAgICAgICAgaWYgKGNvbmZpZy5yZXNwb25zZVR5cGUgIT09ICdqc29uJykge1xuICAgICAgICAgIHRocm93IGU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBIYW5kbGUgcHJvZ3Jlc3MgaWYgbmVlZGVkXG4gICAgaWYgKHR5cGVvZiBjb25maWcub25Eb3dubG9hZFByb2dyZXNzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICByZXF1ZXN0LmFkZEV2ZW50TGlzdGVuZXIoJ3Byb2dyZXNzJywgY29uZmlnLm9uRG93bmxvYWRQcm9ncmVzcyk7XG4gICAgfVxuXG4gICAgLy8gTm90IGFsbCBicm93c2VycyBzdXBwb3J0IHVwbG9hZCBldmVudHNcbiAgICBpZiAodHlwZW9mIGNvbmZpZy5vblVwbG9hZFByb2dyZXNzID09PSAnZnVuY3Rpb24nICYmIHJlcXVlc3QudXBsb2FkKSB7XG4gICAgICByZXF1ZXN0LnVwbG9hZC5hZGRFdmVudExpc3RlbmVyKCdwcm9ncmVzcycsIGNvbmZpZy5vblVwbG9hZFByb2dyZXNzKTtcbiAgICB9XG5cbiAgICBpZiAoY29uZmlnLmNhbmNlbFRva2VuKSB7XG4gICAgICAvLyBIYW5kbGUgY2FuY2VsbGF0aW9uXG4gICAgICBjb25maWcuY2FuY2VsVG9rZW4ucHJvbWlzZS50aGVuKGZ1bmN0aW9uIG9uQ2FuY2VsZWQoY2FuY2VsKSB7XG4gICAgICAgIGlmICghcmVxdWVzdCkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHJlcXVlc3QuYWJvcnQoKTtcbiAgICAgICAgcmVqZWN0KGNhbmNlbCk7XG4gICAgICAgIC8vIENsZWFuIHVwIHJlcXVlc3RcbiAgICAgICAgcmVxdWVzdCA9IG51bGw7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAocmVxdWVzdERhdGEgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmVxdWVzdERhdGEgPSBudWxsO1xuICAgIH1cblxuICAgIC8vIFNlbmQgdGhlIHJlcXVlc3RcbiAgICByZXF1ZXN0LnNlbmQocmVxdWVzdERhdGEpO1xuICB9KTtcbn07XG5cblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2F4aW9zLmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvYXhpb3MuanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5cbnZhciB1dGlscyA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vdXRpbHMgKi8gXCIuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvdXRpbHMuanNcIik7XG52YXIgYmluZCA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vaGVscGVycy9iaW5kICovIFwiLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvYmluZC5qc1wiKTtcbnZhciBBeGlvcyA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vY29yZS9BeGlvcyAqLyBcIi4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL0F4aW9zLmpzXCIpO1xudmFyIGRlZmF1bHRzID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9kZWZhdWx0cyAqLyBcIi4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9kZWZhdWx0cy5qc1wiKTtcblxuLyoqXG4gKiBDcmVhdGUgYW4gaW5zdGFuY2Ugb2YgQXhpb3NcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gZGVmYXVsdENvbmZpZyBUaGUgZGVmYXVsdCBjb25maWcgZm9yIHRoZSBpbnN0YW5jZVxuICogQHJldHVybiB7QXhpb3N9IEEgbmV3IGluc3RhbmNlIG9mIEF4aW9zXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZUluc3RhbmNlKGRlZmF1bHRDb25maWcpIHtcbiAgdmFyIGNvbnRleHQgPSBuZXcgQXhpb3MoZGVmYXVsdENvbmZpZyk7XG4gIHZhciBpbnN0YW5jZSA9IGJpbmQoQXhpb3MucHJvdG90eXBlLnJlcXVlc3QsIGNvbnRleHQpO1xuXG4gIC8vIENvcHkgYXhpb3MucHJvdG90eXBlIHRvIGluc3RhbmNlXG4gIHV0aWxzLmV4dGVuZChpbnN0YW5jZSwgQXhpb3MucHJvdG90eXBlLCBjb250ZXh0KTtcblxuICAvLyBDb3B5IGNvbnRleHQgdG8gaW5zdGFuY2VcbiAgdXRpbHMuZXh0ZW5kKGluc3RhbmNlLCBjb250ZXh0KTtcblxuICByZXR1cm4gaW5zdGFuY2U7XG59XG5cbi8vIENyZWF0ZSB0aGUgZGVmYXVsdCBpbnN0YW5jZSB0byBiZSBleHBvcnRlZFxudmFyIGF4aW9zID0gY3JlYXRlSW5zdGFuY2UoZGVmYXVsdHMpO1xuXG4vLyBFeHBvc2UgQXhpb3MgY2xhc3MgdG8gYWxsb3cgY2xhc3MgaW5oZXJpdGFuY2VcbmF4aW9zLkF4aW9zID0gQXhpb3M7XG5cbi8vIEZhY3RvcnkgZm9yIGNyZWF0aW5nIG5ldyBpbnN0YW5jZXNcbmF4aW9zLmNyZWF0ZSA9IGZ1bmN0aW9uIGNyZWF0ZShpbnN0YW5jZUNvbmZpZykge1xuICByZXR1cm4gY3JlYXRlSW5zdGFuY2UodXRpbHMubWVyZ2UoZGVmYXVsdHMsIGluc3RhbmNlQ29uZmlnKSk7XG59O1xuXG4vLyBFeHBvc2UgQ2FuY2VsICYgQ2FuY2VsVG9rZW5cbmF4aW9zLkNhbmNlbCA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vY2FuY2VsL0NhbmNlbCAqLyBcIi4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jYW5jZWwvQ2FuY2VsLmpzXCIpO1xuYXhpb3MuQ2FuY2VsVG9rZW4gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL2NhbmNlbC9DYW5jZWxUb2tlbiAqLyBcIi4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jYW5jZWwvQ2FuY2VsVG9rZW4uanNcIik7XG5heGlvcy5pc0NhbmNlbCA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vY2FuY2VsL2lzQ2FuY2VsICovIFwiLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NhbmNlbC9pc0NhbmNlbC5qc1wiKTtcblxuLy8gRXhwb3NlIGFsbC9zcHJlYWRcbmF4aW9zLmFsbCA9IGZ1bmN0aW9uIGFsbChwcm9taXNlcykge1xuICByZXR1cm4gUHJvbWlzZS5hbGwocHJvbWlzZXMpO1xufTtcbmF4aW9zLnNwcmVhZCA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vaGVscGVycy9zcHJlYWQgKi8gXCIuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9zcHJlYWQuanNcIik7XG5cbm1vZHVsZS5leHBvcnRzID0gYXhpb3M7XG5cbi8vIEFsbG93IHVzZSBvZiBkZWZhdWx0IGltcG9ydCBzeW50YXggaW4gVHlwZVNjcmlwdFxubW9kdWxlLmV4cG9ydHMuZGVmYXVsdCA9IGF4aW9zO1xuXG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jYW5jZWwvQ2FuY2VsLmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jYW5jZWwvQ2FuY2VsLmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5cbi8qKlxuICogQSBgQ2FuY2VsYCBpcyBhbiBvYmplY3QgdGhhdCBpcyB0aHJvd24gd2hlbiBhbiBvcGVyYXRpb24gaXMgY2FuY2VsZWQuXG4gKlxuICogQGNsYXNzXG4gKiBAcGFyYW0ge3N0cmluZz19IG1lc3NhZ2UgVGhlIG1lc3NhZ2UuXG4gKi9cbmZ1bmN0aW9uIENhbmNlbChtZXNzYWdlKSB7XG4gIHRoaXMubWVzc2FnZSA9IG1lc3NhZ2U7XG59XG5cbkNhbmNlbC5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgcmV0dXJuICdDYW5jZWwnICsgKHRoaXMubWVzc2FnZSA/ICc6ICcgKyB0aGlzLm1lc3NhZ2UgOiAnJyk7XG59O1xuXG5DYW5jZWwucHJvdG90eXBlLl9fQ0FOQ0VMX18gPSB0cnVlO1xuXG5tb2R1bGUuZXhwb3J0cyA9IENhbmNlbDtcblxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY2FuY2VsL0NhbmNlbFRva2VuLmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NhbmNlbC9DYW5jZWxUb2tlbi5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5cbnZhciBDYW5jZWwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL0NhbmNlbCAqLyBcIi4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jYW5jZWwvQ2FuY2VsLmpzXCIpO1xuXG4vKipcbiAqIEEgYENhbmNlbFRva2VuYCBpcyBhbiBvYmplY3QgdGhhdCBjYW4gYmUgdXNlZCB0byByZXF1ZXN0IGNhbmNlbGxhdGlvbiBvZiBhbiBvcGVyYXRpb24uXG4gKlxuICogQGNsYXNzXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBleGVjdXRvciBUaGUgZXhlY3V0b3IgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIENhbmNlbFRva2VuKGV4ZWN1dG9yKSB7XG4gIGlmICh0eXBlb2YgZXhlY3V0b3IgIT09ICdmdW5jdGlvbicpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdleGVjdXRvciBtdXN0IGJlIGEgZnVuY3Rpb24uJyk7XG4gIH1cblxuICB2YXIgcmVzb2x2ZVByb21pc2U7XG4gIHRoaXMucHJvbWlzZSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uIHByb21pc2VFeGVjdXRvcihyZXNvbHZlKSB7XG4gICAgcmVzb2x2ZVByb21pc2UgPSByZXNvbHZlO1xuICB9KTtcblxuICB2YXIgdG9rZW4gPSB0aGlzO1xuICBleGVjdXRvcihmdW5jdGlvbiBjYW5jZWwobWVzc2FnZSkge1xuICAgIGlmICh0b2tlbi5yZWFzb24pIHtcbiAgICAgIC8vIENhbmNlbGxhdGlvbiBoYXMgYWxyZWFkeSBiZWVuIHJlcXVlc3RlZFxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRva2VuLnJlYXNvbiA9IG5ldyBDYW5jZWwobWVzc2FnZSk7XG4gICAgcmVzb2x2ZVByb21pc2UodG9rZW4ucmVhc29uKTtcbiAgfSk7XG59XG5cbi8qKlxuICogVGhyb3dzIGEgYENhbmNlbGAgaWYgY2FuY2VsbGF0aW9uIGhhcyBiZWVuIHJlcXVlc3RlZC5cbiAqL1xuQ2FuY2VsVG9rZW4ucHJvdG90eXBlLnRocm93SWZSZXF1ZXN0ZWQgPSBmdW5jdGlvbiB0aHJvd0lmUmVxdWVzdGVkKCkge1xuICBpZiAodGhpcy5yZWFzb24pIHtcbiAgICB0aHJvdyB0aGlzLnJlYXNvbjtcbiAgfVxufTtcblxuLyoqXG4gKiBSZXR1cm5zIGFuIG9iamVjdCB0aGF0IGNvbnRhaW5zIGEgbmV3IGBDYW5jZWxUb2tlbmAgYW5kIGEgZnVuY3Rpb24gdGhhdCwgd2hlbiBjYWxsZWQsXG4gKiBjYW5jZWxzIHRoZSBgQ2FuY2VsVG9rZW5gLlxuICovXG5DYW5jZWxUb2tlbi5zb3VyY2UgPSBmdW5jdGlvbiBzb3VyY2UoKSB7XG4gIHZhciBjYW5jZWw7XG4gIHZhciB0b2tlbiA9IG5ldyBDYW5jZWxUb2tlbihmdW5jdGlvbiBleGVjdXRvcihjKSB7XG4gICAgY2FuY2VsID0gYztcbiAgfSk7XG4gIHJldHVybiB7XG4gICAgdG9rZW46IHRva2VuLFxuICAgIGNhbmNlbDogY2FuY2VsXG4gIH07XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IENhbmNlbFRva2VuO1xuXG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jYW5jZWwvaXNDYW5jZWwuanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY2FuY2VsL2lzQ2FuY2VsLmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpc0NhbmNlbCh2YWx1ZSkge1xuICByZXR1cm4gISEodmFsdWUgJiYgdmFsdWUuX19DQU5DRUxfXyk7XG59O1xuXG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL0F4aW9zLmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL0F4aW9zLmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5cbnZhciBkZWZhdWx0cyA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vLi4vZGVmYXVsdHMgKi8gXCIuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvZGVmYXVsdHMuanNcIik7XG52YXIgdXRpbHMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuLy4uL3V0aWxzICovIFwiLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL3V0aWxzLmpzXCIpO1xudmFyIEludGVyY2VwdG9yTWFuYWdlciA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vSW50ZXJjZXB0b3JNYW5hZ2VyICovIFwiLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvSW50ZXJjZXB0b3JNYW5hZ2VyLmpzXCIpO1xudmFyIGRpc3BhdGNoUmVxdWVzdCA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vZGlzcGF0Y2hSZXF1ZXN0ICovIFwiLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvZGlzcGF0Y2hSZXF1ZXN0LmpzXCIpO1xuXG4vKipcbiAqIENyZWF0ZSBhIG5ldyBpbnN0YW5jZSBvZiBBeGlvc1xuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBpbnN0YW5jZUNvbmZpZyBUaGUgZGVmYXVsdCBjb25maWcgZm9yIHRoZSBpbnN0YW5jZVxuICovXG5mdW5jdGlvbiBBeGlvcyhpbnN0YW5jZUNvbmZpZykge1xuICB0aGlzLmRlZmF1bHRzID0gaW5zdGFuY2VDb25maWc7XG4gIHRoaXMuaW50ZXJjZXB0b3JzID0ge1xuICAgIHJlcXVlc3Q6IG5ldyBJbnRlcmNlcHRvck1hbmFnZXIoKSxcbiAgICByZXNwb25zZTogbmV3IEludGVyY2VwdG9yTWFuYWdlcigpXG4gIH07XG59XG5cbi8qKlxuICogRGlzcGF0Y2ggYSByZXF1ZXN0XG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZyBUaGUgY29uZmlnIHNwZWNpZmljIGZvciB0aGlzIHJlcXVlc3QgKG1lcmdlZCB3aXRoIHRoaXMuZGVmYXVsdHMpXG4gKi9cbkF4aW9zLnByb3RvdHlwZS5yZXF1ZXN0ID0gZnVuY3Rpb24gcmVxdWVzdChjb25maWcpIHtcbiAgLyplc2xpbnQgbm8tcGFyYW0tcmVhc3NpZ246MCovXG4gIC8vIEFsbG93IGZvciBheGlvcygnZXhhbXBsZS91cmwnWywgY29uZmlnXSkgYSBsYSBmZXRjaCBBUElcbiAgaWYgKHR5cGVvZiBjb25maWcgPT09ICdzdHJpbmcnKSB7XG4gICAgY29uZmlnID0gdXRpbHMubWVyZ2Uoe1xuICAgICAgdXJsOiBhcmd1bWVudHNbMF1cbiAgICB9LCBhcmd1bWVudHNbMV0pO1xuICB9XG5cbiAgY29uZmlnID0gdXRpbHMubWVyZ2UoZGVmYXVsdHMsIHttZXRob2Q6ICdnZXQnfSwgdGhpcy5kZWZhdWx0cywgY29uZmlnKTtcbiAgY29uZmlnLm1ldGhvZCA9IGNvbmZpZy5tZXRob2QudG9Mb3dlckNhc2UoKTtcblxuICAvLyBIb29rIHVwIGludGVyY2VwdG9ycyBtaWRkbGV3YXJlXG4gIHZhciBjaGFpbiA9IFtkaXNwYXRjaFJlcXVlc3QsIHVuZGVmaW5lZF07XG4gIHZhciBwcm9taXNlID0gUHJvbWlzZS5yZXNvbHZlKGNvbmZpZyk7XG5cbiAgdGhpcy5pbnRlcmNlcHRvcnMucmVxdWVzdC5mb3JFYWNoKGZ1bmN0aW9uIHVuc2hpZnRSZXF1ZXN0SW50ZXJjZXB0b3JzKGludGVyY2VwdG9yKSB7XG4gICAgY2hhaW4udW5zaGlmdChpbnRlcmNlcHRvci5mdWxmaWxsZWQsIGludGVyY2VwdG9yLnJlamVjdGVkKTtcbiAgfSk7XG5cbiAgdGhpcy5pbnRlcmNlcHRvcnMucmVzcG9uc2UuZm9yRWFjaChmdW5jdGlvbiBwdXNoUmVzcG9uc2VJbnRlcmNlcHRvcnMoaW50ZXJjZXB0b3IpIHtcbiAgICBjaGFpbi5wdXNoKGludGVyY2VwdG9yLmZ1bGZpbGxlZCwgaW50ZXJjZXB0b3IucmVqZWN0ZWQpO1xuICB9KTtcblxuICB3aGlsZSAoY2hhaW4ubGVuZ3RoKSB7XG4gICAgcHJvbWlzZSA9IHByb21pc2UudGhlbihjaGFpbi5zaGlmdCgpLCBjaGFpbi5zaGlmdCgpKTtcbiAgfVxuXG4gIHJldHVybiBwcm9taXNlO1xufTtcblxuLy8gUHJvdmlkZSBhbGlhc2VzIGZvciBzdXBwb3J0ZWQgcmVxdWVzdCBtZXRob2RzXG51dGlscy5mb3JFYWNoKFsnZGVsZXRlJywgJ2dldCcsICdoZWFkJywgJ29wdGlvbnMnXSwgZnVuY3Rpb24gZm9yRWFjaE1ldGhvZE5vRGF0YShtZXRob2QpIHtcbiAgLyplc2xpbnQgZnVuYy1uYW1lczowKi9cbiAgQXhpb3MucHJvdG90eXBlW21ldGhvZF0gPSBmdW5jdGlvbih1cmwsIGNvbmZpZykge1xuICAgIHJldHVybiB0aGlzLnJlcXVlc3QodXRpbHMubWVyZ2UoY29uZmlnIHx8IHt9LCB7XG4gICAgICBtZXRob2Q6IG1ldGhvZCxcbiAgICAgIHVybDogdXJsXG4gICAgfSkpO1xuICB9O1xufSk7XG5cbnV0aWxzLmZvckVhY2goWydwb3N0JywgJ3B1dCcsICdwYXRjaCddLCBmdW5jdGlvbiBmb3JFYWNoTWV0aG9kV2l0aERhdGEobWV0aG9kKSB7XG4gIC8qZXNsaW50IGZ1bmMtbmFtZXM6MCovXG4gIEF4aW9zLnByb3RvdHlwZVttZXRob2RdID0gZnVuY3Rpb24odXJsLCBkYXRhLCBjb25maWcpIHtcbiAgICByZXR1cm4gdGhpcy5yZXF1ZXN0KHV0aWxzLm1lcmdlKGNvbmZpZyB8fCB7fSwge1xuICAgICAgbWV0aG9kOiBtZXRob2QsXG4gICAgICB1cmw6IHVybCxcbiAgICAgIGRhdGE6IGRhdGFcbiAgICB9KSk7XG4gIH07XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBBeGlvcztcblxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9JbnRlcmNlcHRvck1hbmFnZXIuanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL0ludGVyY2VwdG9yTWFuYWdlci5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cblxudmFyIHV0aWxzID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi8uLi91dGlscyAqLyBcIi4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi91dGlscy5qc1wiKTtcblxuZnVuY3Rpb24gSW50ZXJjZXB0b3JNYW5hZ2VyKCkge1xuICB0aGlzLmhhbmRsZXJzID0gW107XG59XG5cbi8qKlxuICogQWRkIGEgbmV3IGludGVyY2VwdG9yIHRvIHRoZSBzdGFja1xuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bGZpbGxlZCBUaGUgZnVuY3Rpb24gdG8gaGFuZGxlIGB0aGVuYCBmb3IgYSBgUHJvbWlzZWBcbiAqIEBwYXJhbSB7RnVuY3Rpb259IHJlamVjdGVkIFRoZSBmdW5jdGlvbiB0byBoYW5kbGUgYHJlamVjdGAgZm9yIGEgYFByb21pc2VgXG4gKlxuICogQHJldHVybiB7TnVtYmVyfSBBbiBJRCB1c2VkIHRvIHJlbW92ZSBpbnRlcmNlcHRvciBsYXRlclxuICovXG5JbnRlcmNlcHRvck1hbmFnZXIucHJvdG90eXBlLnVzZSA9IGZ1bmN0aW9uIHVzZShmdWxmaWxsZWQsIHJlamVjdGVkKSB7XG4gIHRoaXMuaGFuZGxlcnMucHVzaCh7XG4gICAgZnVsZmlsbGVkOiBmdWxmaWxsZWQsXG4gICAgcmVqZWN0ZWQ6IHJlamVjdGVkXG4gIH0pO1xuICByZXR1cm4gdGhpcy5oYW5kbGVycy5sZW5ndGggLSAxO1xufTtcblxuLyoqXG4gKiBSZW1vdmUgYW4gaW50ZXJjZXB0b3IgZnJvbSB0aGUgc3RhY2tcbiAqXG4gKiBAcGFyYW0ge051bWJlcn0gaWQgVGhlIElEIHRoYXQgd2FzIHJldHVybmVkIGJ5IGB1c2VgXG4gKi9cbkludGVyY2VwdG9yTWFuYWdlci5wcm90b3R5cGUuZWplY3QgPSBmdW5jdGlvbiBlamVjdChpZCkge1xuICBpZiAodGhpcy5oYW5kbGVyc1tpZF0pIHtcbiAgICB0aGlzLmhhbmRsZXJzW2lkXSA9IG51bGw7XG4gIH1cbn07XG5cbi8qKlxuICogSXRlcmF0ZSBvdmVyIGFsbCB0aGUgcmVnaXN0ZXJlZCBpbnRlcmNlcHRvcnNcbiAqXG4gKiBUaGlzIG1ldGhvZCBpcyBwYXJ0aWN1bGFybHkgdXNlZnVsIGZvciBza2lwcGluZyBvdmVyIGFueVxuICogaW50ZXJjZXB0b3JzIHRoYXQgbWF5IGhhdmUgYmVjb21lIGBudWxsYCBjYWxsaW5nIGBlamVjdGAuXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm4gVGhlIGZ1bmN0aW9uIHRvIGNhbGwgZm9yIGVhY2ggaW50ZXJjZXB0b3JcbiAqL1xuSW50ZXJjZXB0b3JNYW5hZ2VyLnByb3RvdHlwZS5mb3JFYWNoID0gZnVuY3Rpb24gZm9yRWFjaChmbikge1xuICB1dGlscy5mb3JFYWNoKHRoaXMuaGFuZGxlcnMsIGZ1bmN0aW9uIGZvckVhY2hIYW5kbGVyKGgpIHtcbiAgICBpZiAoaCAhPT0gbnVsbCkge1xuICAgICAgZm4oaCk7XG4gICAgfVxuICB9KTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gSW50ZXJjZXB0b3JNYW5hZ2VyO1xuXG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL2NyZWF0ZUVycm9yLmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL2NyZWF0ZUVycm9yLmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5cbnZhciBlbmhhbmNlRXJyb3IgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL2VuaGFuY2VFcnJvciAqLyBcIi4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL2VuaGFuY2VFcnJvci5qc1wiKTtcblxuLyoqXG4gKiBDcmVhdGUgYW4gRXJyb3Igd2l0aCB0aGUgc3BlY2lmaWVkIG1lc3NhZ2UsIGNvbmZpZywgZXJyb3IgY29kZSwgcmVxdWVzdCBhbmQgcmVzcG9uc2UuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IG1lc3NhZ2UgVGhlIGVycm9yIG1lc3NhZ2UuXG4gKiBAcGFyYW0ge09iamVjdH0gY29uZmlnIFRoZSBjb25maWcuXG4gKiBAcGFyYW0ge3N0cmluZ30gW2NvZGVdIFRoZSBlcnJvciBjb2RlIChmb3IgZXhhbXBsZSwgJ0VDT05OQUJPUlRFRCcpLlxuICogQHBhcmFtIHtPYmplY3R9IFtyZXF1ZXN0XSBUaGUgcmVxdWVzdC5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbcmVzcG9uc2VdIFRoZSByZXNwb25zZS5cbiAqIEByZXR1cm5zIHtFcnJvcn0gVGhlIGNyZWF0ZWQgZXJyb3IuXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY3JlYXRlRXJyb3IobWVzc2FnZSwgY29uZmlnLCBjb2RlLCByZXF1ZXN0LCByZXNwb25zZSkge1xuICB2YXIgZXJyb3IgPSBuZXcgRXJyb3IobWVzc2FnZSk7XG4gIHJldHVybiBlbmhhbmNlRXJyb3IoZXJyb3IsIGNvbmZpZywgY29kZSwgcmVxdWVzdCwgcmVzcG9uc2UpO1xufTtcblxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9kaXNwYXRjaFJlcXVlc3QuanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL2Rpc3BhdGNoUmVxdWVzdC5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cblxudmFyIHV0aWxzID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi8uLi91dGlscyAqLyBcIi4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi91dGlscy5qc1wiKTtcbnZhciB0cmFuc2Zvcm1EYXRhID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi90cmFuc2Zvcm1EYXRhICovIFwiLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvdHJhbnNmb3JtRGF0YS5qc1wiKTtcbnZhciBpc0NhbmNlbCA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4uL2NhbmNlbC9pc0NhbmNlbCAqLyBcIi4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jYW5jZWwvaXNDYW5jZWwuanNcIik7XG52YXIgZGVmYXVsdHMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuLi9kZWZhdWx0cyAqLyBcIi4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9kZWZhdWx0cy5qc1wiKTtcbnZhciBpc0Fic29sdXRlVVJMID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi8uLi9oZWxwZXJzL2lzQWJzb2x1dGVVUkwgKi8gXCIuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9pc0Fic29sdXRlVVJMLmpzXCIpO1xudmFyIGNvbWJpbmVVUkxzID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi8uLi9oZWxwZXJzL2NvbWJpbmVVUkxzICovIFwiLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvY29tYmluZVVSTHMuanNcIik7XG5cbi8qKlxuICogVGhyb3dzIGEgYENhbmNlbGAgaWYgY2FuY2VsbGF0aW9uIGhhcyBiZWVuIHJlcXVlc3RlZC5cbiAqL1xuZnVuY3Rpb24gdGhyb3dJZkNhbmNlbGxhdGlvblJlcXVlc3RlZChjb25maWcpIHtcbiAgaWYgKGNvbmZpZy5jYW5jZWxUb2tlbikge1xuICAgIGNvbmZpZy5jYW5jZWxUb2tlbi50aHJvd0lmUmVxdWVzdGVkKCk7XG4gIH1cbn1cblxuLyoqXG4gKiBEaXNwYXRjaCBhIHJlcXVlc3QgdG8gdGhlIHNlcnZlciB1c2luZyB0aGUgY29uZmlndXJlZCBhZGFwdGVyLlxuICpcbiAqIEBwYXJhbSB7b2JqZWN0fSBjb25maWcgVGhlIGNvbmZpZyB0aGF0IGlzIHRvIGJlIHVzZWQgZm9yIHRoZSByZXF1ZXN0XG4gKiBAcmV0dXJucyB7UHJvbWlzZX0gVGhlIFByb21pc2UgdG8gYmUgZnVsZmlsbGVkXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZGlzcGF0Y2hSZXF1ZXN0KGNvbmZpZykge1xuICB0aHJvd0lmQ2FuY2VsbGF0aW9uUmVxdWVzdGVkKGNvbmZpZyk7XG5cbiAgLy8gU3VwcG9ydCBiYXNlVVJMIGNvbmZpZ1xuICBpZiAoY29uZmlnLmJhc2VVUkwgJiYgIWlzQWJzb2x1dGVVUkwoY29uZmlnLnVybCkpIHtcbiAgICBjb25maWcudXJsID0gY29tYmluZVVSTHMoY29uZmlnLmJhc2VVUkwsIGNvbmZpZy51cmwpO1xuICB9XG5cbiAgLy8gRW5zdXJlIGhlYWRlcnMgZXhpc3RcbiAgY29uZmlnLmhlYWRlcnMgPSBjb25maWcuaGVhZGVycyB8fCB7fTtcblxuICAvLyBUcmFuc2Zvcm0gcmVxdWVzdCBkYXRhXG4gIGNvbmZpZy5kYXRhID0gdHJhbnNmb3JtRGF0YShcbiAgICBjb25maWcuZGF0YSxcbiAgICBjb25maWcuaGVhZGVycyxcbiAgICBjb25maWcudHJhbnNmb3JtUmVxdWVzdFxuICApO1xuXG4gIC8vIEZsYXR0ZW4gaGVhZGVyc1xuICBjb25maWcuaGVhZGVycyA9IHV0aWxzLm1lcmdlKFxuICAgIGNvbmZpZy5oZWFkZXJzLmNvbW1vbiB8fCB7fSxcbiAgICBjb25maWcuaGVhZGVyc1tjb25maWcubWV0aG9kXSB8fCB7fSxcbiAgICBjb25maWcuaGVhZGVycyB8fCB7fVxuICApO1xuXG4gIHV0aWxzLmZvckVhY2goXG4gICAgWydkZWxldGUnLCAnZ2V0JywgJ2hlYWQnLCAncG9zdCcsICdwdXQnLCAncGF0Y2gnLCAnY29tbW9uJ10sXG4gICAgZnVuY3Rpb24gY2xlYW5IZWFkZXJDb25maWcobWV0aG9kKSB7XG4gICAgICBkZWxldGUgY29uZmlnLmhlYWRlcnNbbWV0aG9kXTtcbiAgICB9XG4gICk7XG5cbiAgdmFyIGFkYXB0ZXIgPSBjb25maWcuYWRhcHRlciB8fCBkZWZhdWx0cy5hZGFwdGVyO1xuXG4gIHJldHVybiBhZGFwdGVyKGNvbmZpZykudGhlbihmdW5jdGlvbiBvbkFkYXB0ZXJSZXNvbHV0aW9uKHJlc3BvbnNlKSB7XG4gICAgdGhyb3dJZkNhbmNlbGxhdGlvblJlcXVlc3RlZChjb25maWcpO1xuXG4gICAgLy8gVHJhbnNmb3JtIHJlc3BvbnNlIGRhdGFcbiAgICByZXNwb25zZS5kYXRhID0gdHJhbnNmb3JtRGF0YShcbiAgICAgIHJlc3BvbnNlLmRhdGEsXG4gICAgICByZXNwb25zZS5oZWFkZXJzLFxuICAgICAgY29uZmlnLnRyYW5zZm9ybVJlc3BvbnNlXG4gICAgKTtcblxuICAgIHJldHVybiByZXNwb25zZTtcbiAgfSwgZnVuY3Rpb24gb25BZGFwdGVyUmVqZWN0aW9uKHJlYXNvbikge1xuICAgIGlmICghaXNDYW5jZWwocmVhc29uKSkge1xuICAgICAgdGhyb3dJZkNhbmNlbGxhdGlvblJlcXVlc3RlZChjb25maWcpO1xuXG4gICAgICAvLyBUcmFuc2Zvcm0gcmVzcG9uc2UgZGF0YVxuICAgICAgaWYgKHJlYXNvbiAmJiByZWFzb24ucmVzcG9uc2UpIHtcbiAgICAgICAgcmVhc29uLnJlc3BvbnNlLmRhdGEgPSB0cmFuc2Zvcm1EYXRhKFxuICAgICAgICAgIHJlYXNvbi5yZXNwb25zZS5kYXRhLFxuICAgICAgICAgIHJlYXNvbi5yZXNwb25zZS5oZWFkZXJzLFxuICAgICAgICAgIGNvbmZpZy50cmFuc2Zvcm1SZXNwb25zZVxuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBQcm9taXNlLnJlamVjdChyZWFzb24pO1xuICB9KTtcbn07XG5cblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvZW5oYW5jZUVycm9yLmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9lbmhhbmNlRXJyb3IuanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5cbi8qKlxuICogVXBkYXRlIGFuIEVycm9yIHdpdGggdGhlIHNwZWNpZmllZCBjb25maWcsIGVycm9yIGNvZGUsIGFuZCByZXNwb25zZS5cbiAqXG4gKiBAcGFyYW0ge0Vycm9yfSBlcnJvciBUaGUgZXJyb3IgdG8gdXBkYXRlLlxuICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZyBUaGUgY29uZmlnLlxuICogQHBhcmFtIHtzdHJpbmd9IFtjb2RlXSBUaGUgZXJyb3IgY29kZSAoZm9yIGV4YW1wbGUsICdFQ09OTkFCT1JURUQnKS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbcmVxdWVzdF0gVGhlIHJlcXVlc3QuXG4gKiBAcGFyYW0ge09iamVjdH0gW3Jlc3BvbnNlXSBUaGUgcmVzcG9uc2UuXG4gKiBAcmV0dXJucyB7RXJyb3J9IFRoZSBlcnJvci5cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBlbmhhbmNlRXJyb3IoZXJyb3IsIGNvbmZpZywgY29kZSwgcmVxdWVzdCwgcmVzcG9uc2UpIHtcbiAgZXJyb3IuY29uZmlnID0gY29uZmlnO1xuICBpZiAoY29kZSkge1xuICAgIGVycm9yLmNvZGUgPSBjb2RlO1xuICB9XG4gIGVycm9yLnJlcXVlc3QgPSByZXF1ZXN0O1xuICBlcnJvci5yZXNwb25zZSA9IHJlc3BvbnNlO1xuICByZXR1cm4gZXJyb3I7XG59O1xuXG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL3NldHRsZS5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvc2V0dGxlLmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG52YXIgY3JlYXRlRXJyb3IgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL2NyZWF0ZUVycm9yICovIFwiLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvY3JlYXRlRXJyb3IuanNcIik7XG5cbi8qKlxuICogUmVzb2x2ZSBvciByZWplY3QgYSBQcm9taXNlIGJhc2VkIG9uIHJlc3BvbnNlIHN0YXR1cy5cbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSByZXNvbHZlIEEgZnVuY3Rpb24gdGhhdCByZXNvbHZlcyB0aGUgcHJvbWlzZS5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IHJlamVjdCBBIGZ1bmN0aW9uIHRoYXQgcmVqZWN0cyB0aGUgcHJvbWlzZS5cbiAqIEBwYXJhbSB7b2JqZWN0fSByZXNwb25zZSBUaGUgcmVzcG9uc2UuXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgcmVzcG9uc2UpIHtcbiAgdmFyIHZhbGlkYXRlU3RhdHVzID0gcmVzcG9uc2UuY29uZmlnLnZhbGlkYXRlU3RhdHVzO1xuICAvLyBOb3RlOiBzdGF0dXMgaXMgbm90IGV4cG9zZWQgYnkgWERvbWFpblJlcXVlc3RcbiAgaWYgKCFyZXNwb25zZS5zdGF0dXMgfHwgIXZhbGlkYXRlU3RhdHVzIHx8IHZhbGlkYXRlU3RhdHVzKHJlc3BvbnNlLnN0YXR1cykpIHtcbiAgICByZXNvbHZlKHJlc3BvbnNlKTtcbiAgfSBlbHNlIHtcbiAgICByZWplY3QoY3JlYXRlRXJyb3IoXG4gICAgICAnUmVxdWVzdCBmYWlsZWQgd2l0aCBzdGF0dXMgY29kZSAnICsgcmVzcG9uc2Uuc3RhdHVzLFxuICAgICAgcmVzcG9uc2UuY29uZmlnLFxuICAgICAgbnVsbCxcbiAgICAgIHJlc3BvbnNlLnJlcXVlc3QsXG4gICAgICByZXNwb25zZVxuICAgICkpO1xuICB9XG59O1xuXG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL3RyYW5zZm9ybURhdGEuanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS90cmFuc2Zvcm1EYXRhLmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cblxudmFyIHV0aWxzID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi8uLi91dGlscyAqLyBcIi4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi91dGlscy5qc1wiKTtcblxuLyoqXG4gKiBUcmFuc2Zvcm0gdGhlIGRhdGEgZm9yIGEgcmVxdWVzdCBvciBhIHJlc3BvbnNlXG4gKlxuICogQHBhcmFtIHtPYmplY3R8U3RyaW5nfSBkYXRhIFRoZSBkYXRhIHRvIGJlIHRyYW5zZm9ybWVkXG4gKiBAcGFyYW0ge0FycmF5fSBoZWFkZXJzIFRoZSBoZWFkZXJzIGZvciB0aGUgcmVxdWVzdCBvciByZXNwb25zZVxuICogQHBhcmFtIHtBcnJheXxGdW5jdGlvbn0gZm5zIEEgc2luZ2xlIGZ1bmN0aW9uIG9yIEFycmF5IG9mIGZ1bmN0aW9uc1xuICogQHJldHVybnMgeyp9IFRoZSByZXN1bHRpbmcgdHJhbnNmb3JtZWQgZGF0YVxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHRyYW5zZm9ybURhdGEoZGF0YSwgaGVhZGVycywgZm5zKSB7XG4gIC8qZXNsaW50IG5vLXBhcmFtLXJlYXNzaWduOjAqL1xuICB1dGlscy5mb3JFYWNoKGZucywgZnVuY3Rpb24gdHJhbnNmb3JtKGZuKSB7XG4gICAgZGF0YSA9IGZuKGRhdGEsIGhlYWRlcnMpO1xuICB9KTtcblxuICByZXR1cm4gZGF0YTtcbn07XG5cblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2RlZmF1bHRzLmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvZGVmYXVsdHMuanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuLyogV0VCUEFDSyBWQVIgSU5KRUNUSU9OICovKGZ1bmN0aW9uKHByb2Nlc3MpIHtcblxudmFyIHV0aWxzID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi91dGlscyAqLyBcIi4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi91dGlscy5qc1wiKTtcbnZhciBub3JtYWxpemVIZWFkZXJOYW1lID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9oZWxwZXJzL25vcm1hbGl6ZUhlYWRlck5hbWUgKi8gXCIuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9ub3JtYWxpemVIZWFkZXJOYW1lLmpzXCIpO1xuXG52YXIgREVGQVVMVF9DT05URU5UX1RZUEUgPSB7XG4gICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJ1xufTtcblxuZnVuY3Rpb24gc2V0Q29udGVudFR5cGVJZlVuc2V0KGhlYWRlcnMsIHZhbHVlKSB7XG4gIGlmICghdXRpbHMuaXNVbmRlZmluZWQoaGVhZGVycykgJiYgdXRpbHMuaXNVbmRlZmluZWQoaGVhZGVyc1snQ29udGVudC1UeXBlJ10pKSB7XG4gICAgaGVhZGVyc1snQ29udGVudC1UeXBlJ10gPSB2YWx1ZTtcbiAgfVxufVxuXG5mdW5jdGlvbiBnZXREZWZhdWx0QWRhcHRlcigpIHtcbiAgdmFyIGFkYXB0ZXI7XG4gIGlmICh0eXBlb2YgWE1MSHR0cFJlcXVlc3QgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgLy8gRm9yIGJyb3dzZXJzIHVzZSBYSFIgYWRhcHRlclxuICAgIGFkYXB0ZXIgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL2FkYXB0ZXJzL3hociAqLyBcIi4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9hZGFwdGVycy94aHIuanNcIik7XG4gIH0gZWxzZSBpZiAodHlwZW9mIHByb2Nlc3MgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgLy8gRm9yIG5vZGUgdXNlIEhUVFAgYWRhcHRlclxuICAgIGFkYXB0ZXIgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL2FkYXB0ZXJzL2h0dHAgKi8gXCIuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvYWRhcHRlcnMveGhyLmpzXCIpO1xuICB9XG4gIHJldHVybiBhZGFwdGVyO1xufVxuXG52YXIgZGVmYXVsdHMgPSB7XG4gIGFkYXB0ZXI6IGdldERlZmF1bHRBZGFwdGVyKCksXG5cbiAgdHJhbnNmb3JtUmVxdWVzdDogW2Z1bmN0aW9uIHRyYW5zZm9ybVJlcXVlc3QoZGF0YSwgaGVhZGVycykge1xuICAgIG5vcm1hbGl6ZUhlYWRlck5hbWUoaGVhZGVycywgJ0NvbnRlbnQtVHlwZScpO1xuICAgIGlmICh1dGlscy5pc0Zvcm1EYXRhKGRhdGEpIHx8XG4gICAgICB1dGlscy5pc0FycmF5QnVmZmVyKGRhdGEpIHx8XG4gICAgICB1dGlscy5pc0J1ZmZlcihkYXRhKSB8fFxuICAgICAgdXRpbHMuaXNTdHJlYW0oZGF0YSkgfHxcbiAgICAgIHV0aWxzLmlzRmlsZShkYXRhKSB8fFxuICAgICAgdXRpbHMuaXNCbG9iKGRhdGEpXG4gICAgKSB7XG4gICAgICByZXR1cm4gZGF0YTtcbiAgICB9XG4gICAgaWYgKHV0aWxzLmlzQXJyYXlCdWZmZXJWaWV3KGRhdGEpKSB7XG4gICAgICByZXR1cm4gZGF0YS5idWZmZXI7XG4gICAgfVxuICAgIGlmICh1dGlscy5pc1VSTFNlYXJjaFBhcmFtcyhkYXRhKSkge1xuICAgICAgc2V0Q29udGVudFR5cGVJZlVuc2V0KGhlYWRlcnMsICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQ7Y2hhcnNldD11dGYtOCcpO1xuICAgICAgcmV0dXJuIGRhdGEudG9TdHJpbmcoKTtcbiAgICB9XG4gICAgaWYgKHV0aWxzLmlzT2JqZWN0KGRhdGEpKSB7XG4gICAgICBzZXRDb250ZW50VHlwZUlmVW5zZXQoaGVhZGVycywgJ2FwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtOCcpO1xuICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KGRhdGEpO1xuICAgIH1cbiAgICByZXR1cm4gZGF0YTtcbiAgfV0sXG5cbiAgdHJhbnNmb3JtUmVzcG9uc2U6IFtmdW5jdGlvbiB0cmFuc2Zvcm1SZXNwb25zZShkYXRhKSB7XG4gICAgLyplc2xpbnQgbm8tcGFyYW0tcmVhc3NpZ246MCovXG4gICAgaWYgKHR5cGVvZiBkYXRhID09PSAnc3RyaW5nJykge1xuICAgICAgdHJ5IHtcbiAgICAgICAgZGF0YSA9IEpTT04ucGFyc2UoZGF0YSk7XG4gICAgICB9IGNhdGNoIChlKSB7IC8qIElnbm9yZSAqLyB9XG4gICAgfVxuICAgIHJldHVybiBkYXRhO1xuICB9XSxcblxuICAvKipcbiAgICogQSB0aW1lb3V0IGluIG1pbGxpc2Vjb25kcyB0byBhYm9ydCBhIHJlcXVlc3QuIElmIHNldCB0byAwIChkZWZhdWx0KSBhXG4gICAqIHRpbWVvdXQgaXMgbm90IGNyZWF0ZWQuXG4gICAqL1xuICB0aW1lb3V0OiAwLFxuXG4gIHhzcmZDb29raWVOYW1lOiAnWFNSRi1UT0tFTicsXG4gIHhzcmZIZWFkZXJOYW1lOiAnWC1YU1JGLVRPS0VOJyxcblxuICBtYXhDb250ZW50TGVuZ3RoOiAtMSxcblxuICB2YWxpZGF0ZVN0YXR1czogZnVuY3Rpb24gdmFsaWRhdGVTdGF0dXMoc3RhdHVzKSB7XG4gICAgcmV0dXJuIHN0YXR1cyA+PSAyMDAgJiYgc3RhdHVzIDwgMzAwO1xuICB9XG59O1xuXG5kZWZhdWx0cy5oZWFkZXJzID0ge1xuICBjb21tb246IHtcbiAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24sIHRleHQvcGxhaW4sICovKidcbiAgfVxufTtcblxudXRpbHMuZm9yRWFjaChbJ2RlbGV0ZScsICdnZXQnLCAnaGVhZCddLCBmdW5jdGlvbiBmb3JFYWNoTWV0aG9kTm9EYXRhKG1ldGhvZCkge1xuICBkZWZhdWx0cy5oZWFkZXJzW21ldGhvZF0gPSB7fTtcbn0pO1xuXG51dGlscy5mb3JFYWNoKFsncG9zdCcsICdwdXQnLCAncGF0Y2gnXSwgZnVuY3Rpb24gZm9yRWFjaE1ldGhvZFdpdGhEYXRhKG1ldGhvZCkge1xuICBkZWZhdWx0cy5oZWFkZXJzW21ldGhvZF0gPSB1dGlscy5tZXJnZShERUZBVUxUX0NPTlRFTlRfVFlQRSk7XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBkZWZhdWx0cztcblxuLyogV0VCUEFDSyBWQVIgSU5KRUNUSU9OICovfS5jYWxsKHRoaXMsIF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vLi4vLi4vcHJvY2Vzcy9icm93c2VyLmpzICovIFwiLi9ub2RlX21vZHVsZXMvcHJvY2Vzcy9icm93c2VyLmpzXCIpKSlcblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvYmluZC5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2JpbmQuanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGJpbmQoZm4sIHRoaXNBcmcpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIHdyYXAoKSB7XG4gICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCk7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcmdzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBhcmdzW2ldID0gYXJndW1lbnRzW2ldO1xuICAgIH1cbiAgICByZXR1cm4gZm4uYXBwbHkodGhpc0FyZywgYXJncyk7XG4gIH07XG59O1xuXG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2J0b2EuanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9idG9hLmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cblxuLy8gYnRvYSBwb2x5ZmlsbCBmb3IgSUU8MTAgY291cnRlc3kgaHR0cHM6Ly9naXRodWIuY29tL2RhdmlkY2hhbWJlcnMvQmFzZTY0LmpzXG5cbnZhciBjaGFycyA9ICdBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWmFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6MDEyMzQ1Njc4OSsvPSc7XG5cbmZ1bmN0aW9uIEUoKSB7XG4gIHRoaXMubWVzc2FnZSA9ICdTdHJpbmcgY29udGFpbnMgYW4gaW52YWxpZCBjaGFyYWN0ZXInO1xufVxuRS5wcm90b3R5cGUgPSBuZXcgRXJyb3I7XG5FLnByb3RvdHlwZS5jb2RlID0gNTtcbkUucHJvdG90eXBlLm5hbWUgPSAnSW52YWxpZENoYXJhY3RlckVycm9yJztcblxuZnVuY3Rpb24gYnRvYShpbnB1dCkge1xuICB2YXIgc3RyID0gU3RyaW5nKGlucHV0KTtcbiAgdmFyIG91dHB1dCA9ICcnO1xuICBmb3IgKFxuICAgIC8vIGluaXRpYWxpemUgcmVzdWx0IGFuZCBjb3VudGVyXG4gICAgdmFyIGJsb2NrLCBjaGFyQ29kZSwgaWR4ID0gMCwgbWFwID0gY2hhcnM7XG4gICAgLy8gaWYgdGhlIG5leHQgc3RyIGluZGV4IGRvZXMgbm90IGV4aXN0OlxuICAgIC8vICAgY2hhbmdlIHRoZSBtYXBwaW5nIHRhYmxlIHRvIFwiPVwiXG4gICAgLy8gICBjaGVjayBpZiBkIGhhcyBubyBmcmFjdGlvbmFsIGRpZ2l0c1xuICAgIHN0ci5jaGFyQXQoaWR4IHwgMCkgfHwgKG1hcCA9ICc9JywgaWR4ICUgMSk7XG4gICAgLy8gXCI4IC0gaWR4ICUgMSAqIDhcIiBnZW5lcmF0ZXMgdGhlIHNlcXVlbmNlIDIsIDQsIDYsIDhcbiAgICBvdXRwdXQgKz0gbWFwLmNoYXJBdCg2MyAmIGJsb2NrID4+IDggLSBpZHggJSAxICogOClcbiAgKSB7XG4gICAgY2hhckNvZGUgPSBzdHIuY2hhckNvZGVBdChpZHggKz0gMyAvIDQpO1xuICAgIGlmIChjaGFyQ29kZSA+IDB4RkYpIHtcbiAgICAgIHRocm93IG5ldyBFKCk7XG4gICAgfVxuICAgIGJsb2NrID0gYmxvY2sgPDwgOCB8IGNoYXJDb2RlO1xuICB9XG4gIHJldHVybiBvdXRwdXQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYnRvYTtcblxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9idWlsZFVSTC5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9idWlsZFVSTC5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG52YXIgdXRpbHMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuLy4uL3V0aWxzICovIFwiLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL3V0aWxzLmpzXCIpO1xuXG5mdW5jdGlvbiBlbmNvZGUodmFsKSB7XG4gIHJldHVybiBlbmNvZGVVUklDb21wb25lbnQodmFsKS5cbiAgICByZXBsYWNlKC8lNDAvZ2ksICdAJykuXG4gICAgcmVwbGFjZSgvJTNBL2dpLCAnOicpLlxuICAgIHJlcGxhY2UoLyUyNC9nLCAnJCcpLlxuICAgIHJlcGxhY2UoLyUyQy9naSwgJywnKS5cbiAgICByZXBsYWNlKC8lMjAvZywgJysnKS5cbiAgICByZXBsYWNlKC8lNUIvZ2ksICdbJykuXG4gICAgcmVwbGFjZSgvJTVEL2dpLCAnXScpO1xufVxuXG4vKipcbiAqIEJ1aWxkIGEgVVJMIGJ5IGFwcGVuZGluZyBwYXJhbXMgdG8gdGhlIGVuZFxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSB1cmwgVGhlIGJhc2Ugb2YgdGhlIHVybCAoZS5nLiwgaHR0cDovL3d3dy5nb29nbGUuY29tKVxuICogQHBhcmFtIHtvYmplY3R9IFtwYXJhbXNdIFRoZSBwYXJhbXMgdG8gYmUgYXBwZW5kZWRcbiAqIEByZXR1cm5zIHtzdHJpbmd9IFRoZSBmb3JtYXR0ZWQgdXJsXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gYnVpbGRVUkwodXJsLCBwYXJhbXMsIHBhcmFtc1NlcmlhbGl6ZXIpIHtcbiAgLyplc2xpbnQgbm8tcGFyYW0tcmVhc3NpZ246MCovXG4gIGlmICghcGFyYW1zKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuXG4gIHZhciBzZXJpYWxpemVkUGFyYW1zO1xuICBpZiAocGFyYW1zU2VyaWFsaXplcikge1xuICAgIHNlcmlhbGl6ZWRQYXJhbXMgPSBwYXJhbXNTZXJpYWxpemVyKHBhcmFtcyk7XG4gIH0gZWxzZSBpZiAodXRpbHMuaXNVUkxTZWFyY2hQYXJhbXMocGFyYW1zKSkge1xuICAgIHNlcmlhbGl6ZWRQYXJhbXMgPSBwYXJhbXMudG9TdHJpbmcoKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgcGFydHMgPSBbXTtcblxuICAgIHV0aWxzLmZvckVhY2gocGFyYW1zLCBmdW5jdGlvbiBzZXJpYWxpemUodmFsLCBrZXkpIHtcbiAgICAgIGlmICh2YWwgPT09IG51bGwgfHwgdHlwZW9mIHZhbCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAodXRpbHMuaXNBcnJheSh2YWwpKSB7XG4gICAgICAgIGtleSA9IGtleSArICdbXSc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YWwgPSBbdmFsXTtcbiAgICAgIH1cblxuICAgICAgdXRpbHMuZm9yRWFjaCh2YWwsIGZ1bmN0aW9uIHBhcnNlVmFsdWUodikge1xuICAgICAgICBpZiAodXRpbHMuaXNEYXRlKHYpKSB7XG4gICAgICAgICAgdiA9IHYudG9JU09TdHJpbmcoKTtcbiAgICAgICAgfSBlbHNlIGlmICh1dGlscy5pc09iamVjdCh2KSkge1xuICAgICAgICAgIHYgPSBKU09OLnN0cmluZ2lmeSh2KTtcbiAgICAgICAgfVxuICAgICAgICBwYXJ0cy5wdXNoKGVuY29kZShrZXkpICsgJz0nICsgZW5jb2RlKHYpKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgc2VyaWFsaXplZFBhcmFtcyA9IHBhcnRzLmpvaW4oJyYnKTtcbiAgfVxuXG4gIGlmIChzZXJpYWxpemVkUGFyYW1zKSB7XG4gICAgdXJsICs9ICh1cmwuaW5kZXhPZignPycpID09PSAtMSA/ICc/JyA6ICcmJykgKyBzZXJpYWxpemVkUGFyYW1zO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07XG5cblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvY29tYmluZVVSTHMuanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvY29tYmluZVVSTHMuanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cblxuLyoqXG4gKiBDcmVhdGVzIGEgbmV3IFVSTCBieSBjb21iaW5pbmcgdGhlIHNwZWNpZmllZCBVUkxzXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGJhc2VVUkwgVGhlIGJhc2UgVVJMXG4gKiBAcGFyYW0ge3N0cmluZ30gcmVsYXRpdmVVUkwgVGhlIHJlbGF0aXZlIFVSTFxuICogQHJldHVybnMge3N0cmluZ30gVGhlIGNvbWJpbmVkIFVSTFxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNvbWJpbmVVUkxzKGJhc2VVUkwsIHJlbGF0aXZlVVJMKSB7XG4gIHJldHVybiByZWxhdGl2ZVVSTFxuICAgID8gYmFzZVVSTC5yZXBsYWNlKC9cXC8rJC8sICcnKSArICcvJyArIHJlbGF0aXZlVVJMLnJlcGxhY2UoL15cXC8rLywgJycpXG4gICAgOiBiYXNlVVJMO1xufTtcblxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9jb29raWVzLmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvY29va2llcy5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5cbnZhciB1dGlscyA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vLi4vdXRpbHMgKi8gXCIuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvdXRpbHMuanNcIik7XG5cbm1vZHVsZS5leHBvcnRzID0gKFxuICB1dGlscy5pc1N0YW5kYXJkQnJvd3NlckVudigpID9cblxuICAvLyBTdGFuZGFyZCBicm93c2VyIGVudnMgc3VwcG9ydCBkb2N1bWVudC5jb29raWVcbiAgKGZ1bmN0aW9uIHN0YW5kYXJkQnJvd3NlckVudigpIHtcbiAgICByZXR1cm4ge1xuICAgICAgd3JpdGU6IGZ1bmN0aW9uIHdyaXRlKG5hbWUsIHZhbHVlLCBleHBpcmVzLCBwYXRoLCBkb21haW4sIHNlY3VyZSkge1xuICAgICAgICB2YXIgY29va2llID0gW107XG4gICAgICAgIGNvb2tpZS5wdXNoKG5hbWUgKyAnPScgKyBlbmNvZGVVUklDb21wb25lbnQodmFsdWUpKTtcblxuICAgICAgICBpZiAodXRpbHMuaXNOdW1iZXIoZXhwaXJlcykpIHtcbiAgICAgICAgICBjb29raWUucHVzaCgnZXhwaXJlcz0nICsgbmV3IERhdGUoZXhwaXJlcykudG9HTVRTdHJpbmcoKSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodXRpbHMuaXNTdHJpbmcocGF0aCkpIHtcbiAgICAgICAgICBjb29raWUucHVzaCgncGF0aD0nICsgcGF0aCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodXRpbHMuaXNTdHJpbmcoZG9tYWluKSkge1xuICAgICAgICAgIGNvb2tpZS5wdXNoKCdkb21haW49JyArIGRvbWFpbik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoc2VjdXJlID09PSB0cnVlKSB7XG4gICAgICAgICAgY29va2llLnB1c2goJ3NlY3VyZScpO1xuICAgICAgICB9XG5cbiAgICAgICAgZG9jdW1lbnQuY29va2llID0gY29va2llLmpvaW4oJzsgJyk7XG4gICAgICB9LFxuXG4gICAgICByZWFkOiBmdW5jdGlvbiByZWFkKG5hbWUpIHtcbiAgICAgICAgdmFyIG1hdGNoID0gZG9jdW1lbnQuY29va2llLm1hdGNoKG5ldyBSZWdFeHAoJyhefDtcXFxccyopKCcgKyBuYW1lICsgJyk9KFteO10qKScpKTtcbiAgICAgICAgcmV0dXJuIChtYXRjaCA/IGRlY29kZVVSSUNvbXBvbmVudChtYXRjaFszXSkgOiBudWxsKTtcbiAgICAgIH0sXG5cbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKG5hbWUpIHtcbiAgICAgICAgdGhpcy53cml0ZShuYW1lLCAnJywgRGF0ZS5ub3coKSAtIDg2NDAwMDAwKTtcbiAgICAgIH1cbiAgICB9O1xuICB9KSgpIDpcblxuICAvLyBOb24gc3RhbmRhcmQgYnJvd3NlciBlbnYgKHdlYiB3b3JrZXJzLCByZWFjdC1uYXRpdmUpIGxhY2sgbmVlZGVkIHN1cHBvcnQuXG4gIChmdW5jdGlvbiBub25TdGFuZGFyZEJyb3dzZXJFbnYoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHdyaXRlOiBmdW5jdGlvbiB3cml0ZSgpIHt9LFxuICAgICAgcmVhZDogZnVuY3Rpb24gcmVhZCgpIHsgcmV0dXJuIG51bGw7IH0sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfSkoKVxuKTtcblxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9pc0Fic29sdXRlVVJMLmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvaXNBYnNvbHV0ZVVSTC5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5cbi8qKlxuICogRGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSBzcGVjaWZpZWQgVVJMIGlzIGFic29sdXRlXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHVybCBUaGUgVVJMIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHRoZSBzcGVjaWZpZWQgVVJMIGlzIGFic29sdXRlLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpc0Fic29sdXRlVVJMKHVybCkge1xuICAvLyBBIFVSTCBpcyBjb25zaWRlcmVkIGFic29sdXRlIGlmIGl0IGJlZ2lucyB3aXRoIFwiPHNjaGVtZT46Ly9cIiBvciBcIi8vXCIgKHByb3RvY29sLXJlbGF0aXZlIFVSTCkuXG4gIC8vIFJGQyAzOTg2IGRlZmluZXMgc2NoZW1lIG5hbWUgYXMgYSBzZXF1ZW5jZSBvZiBjaGFyYWN0ZXJzIGJlZ2lubmluZyB3aXRoIGEgbGV0dGVyIGFuZCBmb2xsb3dlZFxuICAvLyBieSBhbnkgY29tYmluYXRpb24gb2YgbGV0dGVycywgZGlnaXRzLCBwbHVzLCBwZXJpb2QsIG9yIGh5cGhlbi5cbiAgcmV0dXJuIC9eKFthLXpdW2EtelxcZFxcK1xcLVxcLl0qOik/XFwvXFwvL2kudGVzdCh1cmwpO1xufTtcblxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9pc1VSTFNhbWVPcmlnaW4uanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2lzVVJMU2FtZU9yaWdpbi5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cblxudmFyIHV0aWxzID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi8uLi91dGlscyAqLyBcIi4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi91dGlscy5qc1wiKTtcblxubW9kdWxlLmV4cG9ydHMgPSAoXG4gIHV0aWxzLmlzU3RhbmRhcmRCcm93c2VyRW52KCkgP1xuXG4gIC8vIFN0YW5kYXJkIGJyb3dzZXIgZW52cyBoYXZlIGZ1bGwgc3VwcG9ydCBvZiB0aGUgQVBJcyBuZWVkZWQgdG8gdGVzdFxuICAvLyB3aGV0aGVyIHRoZSByZXF1ZXN0IFVSTCBpcyBvZiB0aGUgc2FtZSBvcmlnaW4gYXMgY3VycmVudCBsb2NhdGlvbi5cbiAgKGZ1bmN0aW9uIHN0YW5kYXJkQnJvd3NlckVudigpIHtcbiAgICB2YXIgbXNpZSA9IC8obXNpZXx0cmlkZW50KS9pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCk7XG4gICAgdmFyIHVybFBhcnNpbmdOb2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgIHZhciBvcmlnaW5VUkw7XG5cbiAgICAvKipcbiAgICAqIFBhcnNlIGEgVVJMIHRvIGRpc2NvdmVyIGl0J3MgY29tcG9uZW50c1xuICAgICpcbiAgICAqIEBwYXJhbSB7U3RyaW5nfSB1cmwgVGhlIFVSTCB0byBiZSBwYXJzZWRcbiAgICAqIEByZXR1cm5zIHtPYmplY3R9XG4gICAgKi9cbiAgICBmdW5jdGlvbiByZXNvbHZlVVJMKHVybCkge1xuICAgICAgdmFyIGhyZWYgPSB1cmw7XG5cbiAgICAgIGlmIChtc2llKSB7XG4gICAgICAgIC8vIElFIG5lZWRzIGF0dHJpYnV0ZSBzZXQgdHdpY2UgdG8gbm9ybWFsaXplIHByb3BlcnRpZXNcbiAgICAgICAgdXJsUGFyc2luZ05vZGUuc2V0QXR0cmlidXRlKCdocmVmJywgaHJlZik7XG4gICAgICAgIGhyZWYgPSB1cmxQYXJzaW5nTm9kZS5ocmVmO1xuICAgICAgfVxuXG4gICAgICB1cmxQYXJzaW5nTm9kZS5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCBocmVmKTtcblxuICAgICAgLy8gdXJsUGFyc2luZ05vZGUgcHJvdmlkZXMgdGhlIFVybFV0aWxzIGludGVyZmFjZSAtIGh0dHA6Ly91cmwuc3BlYy53aGF0d2cub3JnLyN1cmx1dGlsc1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgaHJlZjogdXJsUGFyc2luZ05vZGUuaHJlZixcbiAgICAgICAgcHJvdG9jb2w6IHVybFBhcnNpbmdOb2RlLnByb3RvY29sID8gdXJsUGFyc2luZ05vZGUucHJvdG9jb2wucmVwbGFjZSgvOiQvLCAnJykgOiAnJyxcbiAgICAgICAgaG9zdDogdXJsUGFyc2luZ05vZGUuaG9zdCxcbiAgICAgICAgc2VhcmNoOiB1cmxQYXJzaW5nTm9kZS5zZWFyY2ggPyB1cmxQYXJzaW5nTm9kZS5zZWFyY2gucmVwbGFjZSgvXlxcPy8sICcnKSA6ICcnLFxuICAgICAgICBoYXNoOiB1cmxQYXJzaW5nTm9kZS5oYXNoID8gdXJsUGFyc2luZ05vZGUuaGFzaC5yZXBsYWNlKC9eIy8sICcnKSA6ICcnLFxuICAgICAgICBob3N0bmFtZTogdXJsUGFyc2luZ05vZGUuaG9zdG5hbWUsXG4gICAgICAgIHBvcnQ6IHVybFBhcnNpbmdOb2RlLnBvcnQsXG4gICAgICAgIHBhdGhuYW1lOiAodXJsUGFyc2luZ05vZGUucGF0aG5hbWUuY2hhckF0KDApID09PSAnLycpID9cbiAgICAgICAgICAgICAgICAgIHVybFBhcnNpbmdOb2RlLnBhdGhuYW1lIDpcbiAgICAgICAgICAgICAgICAgICcvJyArIHVybFBhcnNpbmdOb2RlLnBhdGhuYW1lXG4gICAgICB9O1xuICAgIH1cblxuICAgIG9yaWdpblVSTCA9IHJlc29sdmVVUkwod2luZG93LmxvY2F0aW9uLmhyZWYpO1xuXG4gICAgLyoqXG4gICAgKiBEZXRlcm1pbmUgaWYgYSBVUkwgc2hhcmVzIHRoZSBzYW1lIG9yaWdpbiBhcyB0aGUgY3VycmVudCBsb2NhdGlvblxuICAgICpcbiAgICAqIEBwYXJhbSB7U3RyaW5nfSByZXF1ZXN0VVJMIFRoZSBVUkwgdG8gdGVzdFxuICAgICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgVVJMIHNoYXJlcyB0aGUgc2FtZSBvcmlnaW4sIG90aGVyd2lzZSBmYWxzZVxuICAgICovXG4gICAgcmV0dXJuIGZ1bmN0aW9uIGlzVVJMU2FtZU9yaWdpbihyZXF1ZXN0VVJMKSB7XG4gICAgICB2YXIgcGFyc2VkID0gKHV0aWxzLmlzU3RyaW5nKHJlcXVlc3RVUkwpKSA/IHJlc29sdmVVUkwocmVxdWVzdFVSTCkgOiByZXF1ZXN0VVJMO1xuICAgICAgcmV0dXJuIChwYXJzZWQucHJvdG9jb2wgPT09IG9yaWdpblVSTC5wcm90b2NvbCAmJlxuICAgICAgICAgICAgcGFyc2VkLmhvc3QgPT09IG9yaWdpblVSTC5ob3N0KTtcbiAgICB9O1xuICB9KSgpIDpcblxuICAvLyBOb24gc3RhbmRhcmQgYnJvd3NlciBlbnZzICh3ZWIgd29ya2VycywgcmVhY3QtbmF0aXZlKSBsYWNrIG5lZWRlZCBzdXBwb3J0LlxuICAoZnVuY3Rpb24gbm9uU3RhbmRhcmRCcm93c2VyRW52KCkge1xuICAgIHJldHVybiBmdW5jdGlvbiBpc1VSTFNhbWVPcmlnaW4oKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9O1xuICB9KSgpXG4pO1xuXG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL25vcm1hbGl6ZUhlYWRlck5hbWUuanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9ub3JtYWxpemVIZWFkZXJOYW1lLmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cblxudmFyIHV0aWxzID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi4vdXRpbHMgKi8gXCIuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvdXRpbHMuanNcIik7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gbm9ybWFsaXplSGVhZGVyTmFtZShoZWFkZXJzLCBub3JtYWxpemVkTmFtZSkge1xuICB1dGlscy5mb3JFYWNoKGhlYWRlcnMsIGZ1bmN0aW9uIHByb2Nlc3NIZWFkZXIodmFsdWUsIG5hbWUpIHtcbiAgICBpZiAobmFtZSAhPT0gbm9ybWFsaXplZE5hbWUgJiYgbmFtZS50b1VwcGVyQ2FzZSgpID09PSBub3JtYWxpemVkTmFtZS50b1VwcGVyQ2FzZSgpKSB7XG4gICAgICBoZWFkZXJzW25vcm1hbGl6ZWROYW1lXSA9IHZhbHVlO1xuICAgICAgZGVsZXRlIGhlYWRlcnNbbmFtZV07XG4gICAgfVxuICB9KTtcbn07XG5cblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvcGFyc2VIZWFkZXJzLmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9wYXJzZUhlYWRlcnMuanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5cbnZhciB1dGlscyA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vLi4vdXRpbHMgKi8gXCIuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvdXRpbHMuanNcIik7XG5cbi8vIEhlYWRlcnMgd2hvc2UgZHVwbGljYXRlcyBhcmUgaWdub3JlZCBieSBub2RlXG4vLyBjLmYuIGh0dHBzOi8vbm9kZWpzLm9yZy9hcGkvaHR0cC5odG1sI2h0dHBfbWVzc2FnZV9oZWFkZXJzXG52YXIgaWdub3JlRHVwbGljYXRlT2YgPSBbXG4gICdhZ2UnLCAnYXV0aG9yaXphdGlvbicsICdjb250ZW50LWxlbmd0aCcsICdjb250ZW50LXR5cGUnLCAnZXRhZycsXG4gICdleHBpcmVzJywgJ2Zyb20nLCAnaG9zdCcsICdpZi1tb2RpZmllZC1zaW5jZScsICdpZi11bm1vZGlmaWVkLXNpbmNlJyxcbiAgJ2xhc3QtbW9kaWZpZWQnLCAnbG9jYXRpb24nLCAnbWF4LWZvcndhcmRzJywgJ3Byb3h5LWF1dGhvcml6YXRpb24nLFxuICAncmVmZXJlcicsICdyZXRyeS1hZnRlcicsICd1c2VyLWFnZW50J1xuXTtcblxuLyoqXG4gKiBQYXJzZSBoZWFkZXJzIGludG8gYW4gb2JqZWN0XG4gKlxuICogYGBgXG4gKiBEYXRlOiBXZWQsIDI3IEF1ZyAyMDE0IDA4OjU4OjQ5IEdNVFxuICogQ29udGVudC1UeXBlOiBhcHBsaWNhdGlvbi9qc29uXG4gKiBDb25uZWN0aW9uOiBrZWVwLWFsaXZlXG4gKiBUcmFuc2Zlci1FbmNvZGluZzogY2h1bmtlZFxuICogYGBgXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGhlYWRlcnMgSGVhZGVycyBuZWVkaW5nIHRvIGJlIHBhcnNlZFxuICogQHJldHVybnMge09iamVjdH0gSGVhZGVycyBwYXJzZWQgaW50byBhbiBvYmplY3RcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBwYXJzZUhlYWRlcnMoaGVhZGVycykge1xuICB2YXIgcGFyc2VkID0ge307XG4gIHZhciBrZXk7XG4gIHZhciB2YWw7XG4gIHZhciBpO1xuXG4gIGlmICghaGVhZGVycykgeyByZXR1cm4gcGFyc2VkOyB9XG5cbiAgdXRpbHMuZm9yRWFjaChoZWFkZXJzLnNwbGl0KCdcXG4nKSwgZnVuY3Rpb24gcGFyc2VyKGxpbmUpIHtcbiAgICBpID0gbGluZS5pbmRleE9mKCc6Jyk7XG4gICAga2V5ID0gdXRpbHMudHJpbShsaW5lLnN1YnN0cigwLCBpKSkudG9Mb3dlckNhc2UoKTtcbiAgICB2YWwgPSB1dGlscy50cmltKGxpbmUuc3Vic3RyKGkgKyAxKSk7XG5cbiAgICBpZiAoa2V5KSB7XG4gICAgICBpZiAocGFyc2VkW2tleV0gJiYgaWdub3JlRHVwbGljYXRlT2YuaW5kZXhPZihrZXkpID49IDApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKGtleSA9PT0gJ3NldC1jb29raWUnKSB7XG4gICAgICAgIHBhcnNlZFtrZXldID0gKHBhcnNlZFtrZXldID8gcGFyc2VkW2tleV0gOiBbXSkuY29uY2F0KFt2YWxdKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHBhcnNlZFtrZXldID0gcGFyc2VkW2tleV0gPyBwYXJzZWRba2V5XSArICcsICcgKyB2YWwgOiB2YWw7XG4gICAgICB9XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gcGFyc2VkO1xufTtcblxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9zcHJlYWQuanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL3NwcmVhZC5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cblxuLyoqXG4gKiBTeW50YWN0aWMgc3VnYXIgZm9yIGludm9raW5nIGEgZnVuY3Rpb24gYW5kIGV4cGFuZGluZyBhbiBhcnJheSBmb3IgYXJndW1lbnRzLlxuICpcbiAqIENvbW1vbiB1c2UgY2FzZSB3b3VsZCBiZSB0byB1c2UgYEZ1bmN0aW9uLnByb3RvdHlwZS5hcHBseWAuXG4gKlxuICogIGBgYGpzXG4gKiAgZnVuY3Rpb24gZih4LCB5LCB6KSB7fVxuICogIHZhciBhcmdzID0gWzEsIDIsIDNdO1xuICogIGYuYXBwbHkobnVsbCwgYXJncyk7XG4gKiAgYGBgXG4gKlxuICogV2l0aCBgc3ByZWFkYCB0aGlzIGV4YW1wbGUgY2FuIGJlIHJlLXdyaXR0ZW4uXG4gKlxuICogIGBgYGpzXG4gKiAgc3ByZWFkKGZ1bmN0aW9uKHgsIHksIHopIHt9KShbMSwgMiwgM10pO1xuICogIGBgYFxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259XG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gc3ByZWFkKGNhbGxiYWNrKSB7XG4gIHJldHVybiBmdW5jdGlvbiB3cmFwKGFycikge1xuICAgIHJldHVybiBjYWxsYmFjay5hcHBseShudWxsLCBhcnIpO1xuICB9O1xufTtcblxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvdXRpbHMuanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi91dGlscy5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cblxudmFyIGJpbmQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL2hlbHBlcnMvYmluZCAqLyBcIi4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2JpbmQuanNcIik7XG52YXIgaXNCdWZmZXIgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISBpcy1idWZmZXIgKi8gXCIuL25vZGVfbW9kdWxlcy9pcy1idWZmZXIvaW5kZXguanNcIik7XG5cbi8qZ2xvYmFsIHRvU3RyaW5nOnRydWUqL1xuXG4vLyB1dGlscyBpcyBhIGxpYnJhcnkgb2YgZ2VuZXJpYyBoZWxwZXIgZnVuY3Rpb25zIG5vbi1zcGVjaWZpYyB0byBheGlvc1xuXG52YXIgdG9TdHJpbmcgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nO1xuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGFuIEFycmF5XG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYW4gQXJyYXksIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0FycmF5KHZhbCkge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbCh2YWwpID09PSAnW29iamVjdCBBcnJheV0nO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGFuIEFycmF5QnVmZmVyXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYW4gQXJyYXlCdWZmZXIsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0FycmF5QnVmZmVyKHZhbCkge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbCh2YWwpID09PSAnW29iamVjdCBBcnJheUJ1ZmZlcl0nO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgRm9ybURhdGFcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhbiBGb3JtRGF0YSwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzRm9ybURhdGEodmFsKSB7XG4gIHJldHVybiAodHlwZW9mIEZvcm1EYXRhICE9PSAndW5kZWZpbmVkJykgJiYgKHZhbCBpbnN0YW5jZW9mIEZvcm1EYXRhKTtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIHZpZXcgb24gYW4gQXJyYXlCdWZmZXJcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIHZpZXcgb24gYW4gQXJyYXlCdWZmZXIsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0FycmF5QnVmZmVyVmlldyh2YWwpIHtcbiAgdmFyIHJlc3VsdDtcbiAgaWYgKCh0eXBlb2YgQXJyYXlCdWZmZXIgIT09ICd1bmRlZmluZWQnKSAmJiAoQXJyYXlCdWZmZXIuaXNWaWV3KSkge1xuICAgIHJlc3VsdCA9IEFycmF5QnVmZmVyLmlzVmlldyh2YWwpO1xuICB9IGVsc2Uge1xuICAgIHJlc3VsdCA9ICh2YWwpICYmICh2YWwuYnVmZmVyKSAmJiAodmFsLmJ1ZmZlciBpbnN0YW5jZW9mIEFycmF5QnVmZmVyKTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgU3RyaW5nXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBTdHJpbmcsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc1N0cmluZyh2YWwpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWwgPT09ICdzdHJpbmcnO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgTnVtYmVyXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBOdW1iZXIsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc051bWJlcih2YWwpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWwgPT09ICdudW1iZXInO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIHVuZGVmaW5lZFxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHRoZSB2YWx1ZSBpcyB1bmRlZmluZWQsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc1VuZGVmaW5lZCh2YWwpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWwgPT09ICd1bmRlZmluZWQnO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGFuIE9iamVjdFxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGFuIE9iamVjdCwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzT2JqZWN0KHZhbCkge1xuICByZXR1cm4gdmFsICE9PSBudWxsICYmIHR5cGVvZiB2YWwgPT09ICdvYmplY3QnO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgRGF0ZVxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgRGF0ZSwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzRGF0ZSh2YWwpIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwodmFsKSA9PT0gJ1tvYmplY3QgRGF0ZV0nO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgRmlsZVxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgRmlsZSwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzRmlsZSh2YWwpIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwodmFsKSA9PT0gJ1tvYmplY3QgRmlsZV0nO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgQmxvYlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgQmxvYiwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzQmxvYih2YWwpIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwodmFsKSA9PT0gJ1tvYmplY3QgQmxvYl0nO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgRnVuY3Rpb25cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIEZ1bmN0aW9uLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNGdW5jdGlvbih2YWwpIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwodmFsKSA9PT0gJ1tvYmplY3QgRnVuY3Rpb25dJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIFN0cmVhbVxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgU3RyZWFtLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNTdHJlYW0odmFsKSB7XG4gIHJldHVybiBpc09iamVjdCh2YWwpICYmIGlzRnVuY3Rpb24odmFsLnBpcGUpO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgVVJMU2VhcmNoUGFyYW1zIG9iamVjdFxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgVVJMU2VhcmNoUGFyYW1zIG9iamVjdCwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzVVJMU2VhcmNoUGFyYW1zKHZhbCkge1xuICByZXR1cm4gdHlwZW9mIFVSTFNlYXJjaFBhcmFtcyAhPT0gJ3VuZGVmaW5lZCcgJiYgdmFsIGluc3RhbmNlb2YgVVJMU2VhcmNoUGFyYW1zO1xufVxuXG4vKipcbiAqIFRyaW0gZXhjZXNzIHdoaXRlc3BhY2Ugb2ZmIHRoZSBiZWdpbm5pbmcgYW5kIGVuZCBvZiBhIHN0cmluZ1xuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHIgVGhlIFN0cmluZyB0byB0cmltXG4gKiBAcmV0dXJucyB7U3RyaW5nfSBUaGUgU3RyaW5nIGZyZWVkIG9mIGV4Y2VzcyB3aGl0ZXNwYWNlXG4gKi9cbmZ1bmN0aW9uIHRyaW0oc3RyKSB7XG4gIHJldHVybiBzdHIucmVwbGFjZSgvXlxccyovLCAnJykucmVwbGFjZSgvXFxzKiQvLCAnJyk7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIHdlJ3JlIHJ1bm5pbmcgaW4gYSBzdGFuZGFyZCBicm93c2VyIGVudmlyb25tZW50XG4gKlxuICogVGhpcyBhbGxvd3MgYXhpb3MgdG8gcnVuIGluIGEgd2ViIHdvcmtlciwgYW5kIHJlYWN0LW5hdGl2ZS5cbiAqIEJvdGggZW52aXJvbm1lbnRzIHN1cHBvcnQgWE1MSHR0cFJlcXVlc3QsIGJ1dCBub3QgZnVsbHkgc3RhbmRhcmQgZ2xvYmFscy5cbiAqXG4gKiB3ZWIgd29ya2VyczpcbiAqICB0eXBlb2Ygd2luZG93IC0+IHVuZGVmaW5lZFxuICogIHR5cGVvZiBkb2N1bWVudCAtPiB1bmRlZmluZWRcbiAqXG4gKiByZWFjdC1uYXRpdmU6XG4gKiAgbmF2aWdhdG9yLnByb2R1Y3QgLT4gJ1JlYWN0TmF0aXZlJ1xuICovXG5mdW5jdGlvbiBpc1N0YW5kYXJkQnJvd3NlckVudigpIHtcbiAgaWYgKHR5cGVvZiBuYXZpZ2F0b3IgIT09ICd1bmRlZmluZWQnICYmIG5hdmlnYXRvci5wcm9kdWN0ID09PSAnUmVhY3ROYXRpdmUnKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHJldHVybiAoXG4gICAgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgICB0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnXG4gICk7XG59XG5cbi8qKlxuICogSXRlcmF0ZSBvdmVyIGFuIEFycmF5IG9yIGFuIE9iamVjdCBpbnZva2luZyBhIGZ1bmN0aW9uIGZvciBlYWNoIGl0ZW0uXG4gKlxuICogSWYgYG9iamAgaXMgYW4gQXJyYXkgY2FsbGJhY2sgd2lsbCBiZSBjYWxsZWQgcGFzc2luZ1xuICogdGhlIHZhbHVlLCBpbmRleCwgYW5kIGNvbXBsZXRlIGFycmF5IGZvciBlYWNoIGl0ZW0uXG4gKlxuICogSWYgJ29iaicgaXMgYW4gT2JqZWN0IGNhbGxiYWNrIHdpbGwgYmUgY2FsbGVkIHBhc3NpbmdcbiAqIHRoZSB2YWx1ZSwga2V5LCBhbmQgY29tcGxldGUgb2JqZWN0IGZvciBlYWNoIHByb3BlcnR5LlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fEFycmF5fSBvYmogVGhlIG9iamVjdCB0byBpdGVyYXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmbiBUaGUgY2FsbGJhY2sgdG8gaW52b2tlIGZvciBlYWNoIGl0ZW1cbiAqL1xuZnVuY3Rpb24gZm9yRWFjaChvYmosIGZuKSB7XG4gIC8vIERvbid0IGJvdGhlciBpZiBubyB2YWx1ZSBwcm92aWRlZFxuICBpZiAob2JqID09PSBudWxsIHx8IHR5cGVvZiBvYmogPT09ICd1bmRlZmluZWQnKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLy8gRm9yY2UgYW4gYXJyYXkgaWYgbm90IGFscmVhZHkgc29tZXRoaW5nIGl0ZXJhYmxlXG4gIGlmICh0eXBlb2Ygb2JqICE9PSAnb2JqZWN0Jykge1xuICAgIC8qZXNsaW50IG5vLXBhcmFtLXJlYXNzaWduOjAqL1xuICAgIG9iaiA9IFtvYmpdO1xuICB9XG5cbiAgaWYgKGlzQXJyYXkob2JqKSkge1xuICAgIC8vIEl0ZXJhdGUgb3ZlciBhcnJheSB2YWx1ZXNcbiAgICBmb3IgKHZhciBpID0gMCwgbCA9IG9iai5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGZuLmNhbGwobnVsbCwgb2JqW2ldLCBpLCBvYmopO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICAvLyBJdGVyYXRlIG92ZXIgb2JqZWN0IGtleXNcbiAgICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XG4gICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkge1xuICAgICAgICBmbi5jYWxsKG51bGwsIG9ialtrZXldLCBrZXksIG9iaik7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogQWNjZXB0cyB2YXJhcmdzIGV4cGVjdGluZyBlYWNoIGFyZ3VtZW50IHRvIGJlIGFuIG9iamVjdCwgdGhlblxuICogaW1tdXRhYmx5IG1lcmdlcyB0aGUgcHJvcGVydGllcyBvZiBlYWNoIG9iamVjdCBhbmQgcmV0dXJucyByZXN1bHQuXG4gKlxuICogV2hlbiBtdWx0aXBsZSBvYmplY3RzIGNvbnRhaW4gdGhlIHNhbWUga2V5IHRoZSBsYXRlciBvYmplY3QgaW5cbiAqIHRoZSBhcmd1bWVudHMgbGlzdCB3aWxsIHRha2UgcHJlY2VkZW5jZS5cbiAqXG4gKiBFeGFtcGxlOlxuICpcbiAqIGBgYGpzXG4gKiB2YXIgcmVzdWx0ID0gbWVyZ2Uoe2ZvbzogMTIzfSwge2ZvbzogNDU2fSk7XG4gKiBjb25zb2xlLmxvZyhyZXN1bHQuZm9vKTsgLy8gb3V0cHV0cyA0NTZcbiAqIGBgYFxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmoxIE9iamVjdCB0byBtZXJnZVxuICogQHJldHVybnMge09iamVjdH0gUmVzdWx0IG9mIGFsbCBtZXJnZSBwcm9wZXJ0aWVzXG4gKi9cbmZ1bmN0aW9uIG1lcmdlKC8qIG9iajEsIG9iajIsIG9iajMsIC4uLiAqLykge1xuICB2YXIgcmVzdWx0ID0ge307XG4gIGZ1bmN0aW9uIGFzc2lnblZhbHVlKHZhbCwga2V5KSB7XG4gICAgaWYgKHR5cGVvZiByZXN1bHRba2V5XSA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIHZhbCA9PT0gJ29iamVjdCcpIHtcbiAgICAgIHJlc3VsdFtrZXldID0gbWVyZ2UocmVzdWx0W2tleV0sIHZhbCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3VsdFtrZXldID0gdmFsO1xuICAgIH1cbiAgfVxuXG4gIGZvciAodmFyIGkgPSAwLCBsID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIGZvckVhY2goYXJndW1lbnRzW2ldLCBhc3NpZ25WYWx1ZSk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBFeHRlbmRzIG9iamVjdCBhIGJ5IG11dGFibHkgYWRkaW5nIHRvIGl0IHRoZSBwcm9wZXJ0aWVzIG9mIG9iamVjdCBiLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBhIFRoZSBvYmplY3QgdG8gYmUgZXh0ZW5kZWRcbiAqIEBwYXJhbSB7T2JqZWN0fSBiIFRoZSBvYmplY3QgdG8gY29weSBwcm9wZXJ0aWVzIGZyb21cbiAqIEBwYXJhbSB7T2JqZWN0fSB0aGlzQXJnIFRoZSBvYmplY3QgdG8gYmluZCBmdW5jdGlvbiB0b1xuICogQHJldHVybiB7T2JqZWN0fSBUaGUgcmVzdWx0aW5nIHZhbHVlIG9mIG9iamVjdCBhXG4gKi9cbmZ1bmN0aW9uIGV4dGVuZChhLCBiLCB0aGlzQXJnKSB7XG4gIGZvckVhY2goYiwgZnVuY3Rpb24gYXNzaWduVmFsdWUodmFsLCBrZXkpIHtcbiAgICBpZiAodGhpc0FyZyAmJiB0eXBlb2YgdmFsID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBhW2tleV0gPSBiaW5kKHZhbCwgdGhpc0FyZyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFba2V5XSA9IHZhbDtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gYTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGlzQXJyYXk6IGlzQXJyYXksXG4gIGlzQXJyYXlCdWZmZXI6IGlzQXJyYXlCdWZmZXIsXG4gIGlzQnVmZmVyOiBpc0J1ZmZlcixcbiAgaXNGb3JtRGF0YTogaXNGb3JtRGF0YSxcbiAgaXNBcnJheUJ1ZmZlclZpZXc6IGlzQXJyYXlCdWZmZXJWaWV3LFxuICBpc1N0cmluZzogaXNTdHJpbmcsXG4gIGlzTnVtYmVyOiBpc051bWJlcixcbiAgaXNPYmplY3Q6IGlzT2JqZWN0LFxuICBpc1VuZGVmaW5lZDogaXNVbmRlZmluZWQsXG4gIGlzRGF0ZTogaXNEYXRlLFxuICBpc0ZpbGU6IGlzRmlsZSxcbiAgaXNCbG9iOiBpc0Jsb2IsXG4gIGlzRnVuY3Rpb246IGlzRnVuY3Rpb24sXG4gIGlzU3RyZWFtOiBpc1N0cmVhbSxcbiAgaXNVUkxTZWFyY2hQYXJhbXM6IGlzVVJMU2VhcmNoUGFyYW1zLFxuICBpc1N0YW5kYXJkQnJvd3NlckVudjogaXNTdGFuZGFyZEJyb3dzZXJFbnYsXG4gIGZvckVhY2g6IGZvckVhY2gsXG4gIG1lcmdlOiBtZXJnZSxcbiAgZXh0ZW5kOiBleHRlbmQsXG4gIHRyaW06IHRyaW1cbn07XG5cblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9ub2RlX21vZHVsZXMvaXMtYnVmZmVyL2luZGV4LmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL25vZGVfbW9kdWxlcy9pcy1idWZmZXIvaW5kZXguanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cbi8qIVxuICogRGV0ZXJtaW5lIGlmIGFuIG9iamVjdCBpcyBhIEJ1ZmZlclxuICpcbiAqIEBhdXRob3IgICBGZXJvc3MgQWJvdWtoYWRpamVoIDxodHRwczovL2Zlcm9zcy5vcmc+XG4gKiBAbGljZW5zZSAgTUlUXG4gKi9cblxuLy8gVGhlIF9pc0J1ZmZlciBjaGVjayBpcyBmb3IgU2FmYXJpIDUtNyBzdXBwb3J0LCBiZWNhdXNlIGl0J3MgbWlzc2luZ1xuLy8gT2JqZWN0LnByb3RvdHlwZS5jb25zdHJ1Y3Rvci4gUmVtb3ZlIHRoaXMgZXZlbnR1YWxseVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAob2JqKSB7XG4gIHJldHVybiBvYmogIT0gbnVsbCAmJiAoaXNCdWZmZXIob2JqKSB8fCBpc1Nsb3dCdWZmZXIob2JqKSB8fCAhIW9iai5faXNCdWZmZXIpXG59XG5cbmZ1bmN0aW9uIGlzQnVmZmVyIChvYmopIHtcbiAgcmV0dXJuICEhb2JqLmNvbnN0cnVjdG9yICYmIHR5cGVvZiBvYmouY29uc3RydWN0b3IuaXNCdWZmZXIgPT09ICdmdW5jdGlvbicgJiYgb2JqLmNvbnN0cnVjdG9yLmlzQnVmZmVyKG9iailcbn1cblxuLy8gRm9yIE5vZGUgdjAuMTAgc3VwcG9ydC4gUmVtb3ZlIHRoaXMgZXZlbnR1YWxseS5cbmZ1bmN0aW9uIGlzU2xvd0J1ZmZlciAob2JqKSB7XG4gIHJldHVybiB0eXBlb2Ygb2JqLnJlYWRGbG9hdExFID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBvYmouc2xpY2UgPT09ICdmdW5jdGlvbicgJiYgaXNCdWZmZXIob2JqLnNsaWNlKDAsIDApKVxufVxuXG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vbm9kZV9tb2R1bGVzL3Byb2Nlc3MvYnJvd3Nlci5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9ub2RlX21vZHVsZXMvcHJvY2Vzcy9icm93c2VyLmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG4vLyBzaGltIGZvciB1c2luZyBwcm9jZXNzIGluIGJyb3dzZXJcbnZhciBwcm9jZXNzID0gbW9kdWxlLmV4cG9ydHMgPSB7fTtcblxuLy8gY2FjaGVkIGZyb20gd2hhdGV2ZXIgZ2xvYmFsIGlzIHByZXNlbnQgc28gdGhhdCB0ZXN0IHJ1bm5lcnMgdGhhdCBzdHViIGl0XG4vLyBkb24ndCBicmVhayB0aGluZ3MuICBCdXQgd2UgbmVlZCB0byB3cmFwIGl0IGluIGEgdHJ5IGNhdGNoIGluIGNhc2UgaXQgaXNcbi8vIHdyYXBwZWQgaW4gc3RyaWN0IG1vZGUgY29kZSB3aGljaCBkb2Vzbid0IGRlZmluZSBhbnkgZ2xvYmFscy4gIEl0J3MgaW5zaWRlIGFcbi8vIGZ1bmN0aW9uIGJlY2F1c2UgdHJ5L2NhdGNoZXMgZGVvcHRpbWl6ZSBpbiBjZXJ0YWluIGVuZ2luZXMuXG5cbnZhciBjYWNoZWRTZXRUaW1lb3V0O1xudmFyIGNhY2hlZENsZWFyVGltZW91dDtcblxuZnVuY3Rpb24gZGVmYXVsdFNldFRpbW91dCgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3NldFRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbmZ1bmN0aW9uIGRlZmF1bHRDbGVhclRpbWVvdXQgKCkge1xuICAgIHRocm93IG5ldyBFcnJvcignY2xlYXJUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG4oZnVuY3Rpb24gKCkge1xuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2Ygc2V0VGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2YgY2xlYXJUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgIH1cbn0gKCkpXG5mdW5jdGlvbiBydW5UaW1lb3V0KGZ1bikge1xuICAgIGlmIChjYWNoZWRTZXRUaW1lb3V0ID09PSBzZXRUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICAvLyBpZiBzZXRUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkU2V0VGltZW91dCA9PT0gZGVmYXVsdFNldFRpbW91dCB8fCAhY2FjaGVkU2V0VGltZW91dCkgJiYgc2V0VGltZW91dCkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dChmdW4sIDApO1xuICAgIH0gY2F0Y2goZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwobnVsbCwgZnVuLCAwKTtcbiAgICAgICAgfSBjYXRjaChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yXG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKHRoaXMsIGZ1biwgMCk7XG4gICAgICAgIH1cbiAgICB9XG5cblxufVxuZnVuY3Rpb24gcnVuQ2xlYXJUaW1lb3V0KG1hcmtlcikge1xuICAgIGlmIChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGNsZWFyVGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICAvLyBpZiBjbGVhclRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGRlZmF1bHRDbGVhclRpbWVvdXQgfHwgIWNhY2hlZENsZWFyVGltZW91dCkgJiYgY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCAgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbChudWxsLCBtYXJrZXIpO1xuICAgICAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yLlxuICAgICAgICAgICAgLy8gU29tZSB2ZXJzaW9ucyBvZiBJLkUuIGhhdmUgZGlmZmVyZW50IHJ1bGVzIGZvciBjbGVhclRpbWVvdXQgdnMgc2V0VGltZW91dFxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKHRoaXMsIG1hcmtlcik7XG4gICAgICAgIH1cbiAgICB9XG5cblxuXG59XG52YXIgcXVldWUgPSBbXTtcbnZhciBkcmFpbmluZyA9IGZhbHNlO1xudmFyIGN1cnJlbnRRdWV1ZTtcbnZhciBxdWV1ZUluZGV4ID0gLTE7XG5cbmZ1bmN0aW9uIGNsZWFuVXBOZXh0VGljaygpIHtcbiAgICBpZiAoIWRyYWluaW5nIHx8ICFjdXJyZW50UXVldWUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIGlmIChjdXJyZW50UXVldWUubGVuZ3RoKSB7XG4gICAgICAgIHF1ZXVlID0gY3VycmVudFF1ZXVlLmNvbmNhdChxdWV1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgIH1cbiAgICBpZiAocXVldWUubGVuZ3RoKSB7XG4gICAgICAgIGRyYWluUXVldWUoKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGRyYWluUXVldWUoKSB7XG4gICAgaWYgKGRyYWluaW5nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIHRpbWVvdXQgPSBydW5UaW1lb3V0KGNsZWFuVXBOZXh0VGljayk7XG4gICAgZHJhaW5pbmcgPSB0cnVlO1xuXG4gICAgdmFyIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB3aGlsZShsZW4pIHtcbiAgICAgICAgY3VycmVudFF1ZXVlID0gcXVldWU7XG4gICAgICAgIHF1ZXVlID0gW107XG4gICAgICAgIHdoaWxlICgrK3F1ZXVlSW5kZXggPCBsZW4pIHtcbiAgICAgICAgICAgIGlmIChjdXJyZW50UXVldWUpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50UXVldWVbcXVldWVJbmRleF0ucnVuKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgICAgICBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgfVxuICAgIGN1cnJlbnRRdWV1ZSA9IG51bGw7XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBydW5DbGVhclRpbWVvdXQodGltZW91dCk7XG59XG5cbnByb2Nlc3MubmV4dFRpY2sgPSBmdW5jdGlvbiAoZnVuKSB7XG4gICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCAtIDEpO1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgYXJnc1tpIC0gMV0gPSBhcmd1bWVudHNbaV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcXVldWUucHVzaChuZXcgSXRlbShmdW4sIGFyZ3MpKTtcbiAgICBpZiAocXVldWUubGVuZ3RoID09PSAxICYmICFkcmFpbmluZykge1xuICAgICAgICBydW5UaW1lb3V0KGRyYWluUXVldWUpO1xuICAgIH1cbn07XG5cbi8vIHY4IGxpa2VzIHByZWRpY3RpYmxlIG9iamVjdHNcbmZ1bmN0aW9uIEl0ZW0oZnVuLCBhcnJheSkge1xuICAgIHRoaXMuZnVuID0gZnVuO1xuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbn1cbkl0ZW0ucHJvdG90eXBlLnJ1biA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmZ1bi5hcHBseShudWxsLCB0aGlzLmFycmF5KTtcbn07XG5wcm9jZXNzLnRpdGxlID0gJ2Jyb3dzZXInO1xucHJvY2Vzcy5icm93c2VyID0gdHJ1ZTtcbnByb2Nlc3MuZW52ID0ge307XG5wcm9jZXNzLmFyZ3YgPSBbXTtcbnByb2Nlc3MudmVyc2lvbiA9ICcnOyAvLyBlbXB0eSBzdHJpbmcgdG8gYXZvaWQgcmVnZXhwIGlzc3Vlc1xucHJvY2Vzcy52ZXJzaW9ucyA9IHt9O1xuXG5mdW5jdGlvbiBub29wKCkge31cblxucHJvY2Vzcy5vbiA9IG5vb3A7XG5wcm9jZXNzLmFkZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3Mub25jZSA9IG5vb3A7XG5wcm9jZXNzLm9mZiA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUxpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlQWxsTGlzdGVuZXJzID0gbm9vcDtcbnByb2Nlc3MuZW1pdCA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRPbmNlTGlzdGVuZXIgPSBub29wO1xuXG5wcm9jZXNzLmxpc3RlbmVycyA9IGZ1bmN0aW9uIChuYW1lKSB7IHJldHVybiBbXSB9XG5cbnByb2Nlc3MuYmluZGluZyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmJpbmRpbmcgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcblxucHJvY2Vzcy5jd2QgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAnLycgfTtcbnByb2Nlc3MuY2hkaXIgPSBmdW5jdGlvbiAoZGlyKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmNoZGlyIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5wcm9jZXNzLnVtYXNrID0gZnVuY3Rpb24oKSB7IHJldHVybiAwOyB9O1xuXG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vc3JjL2NoYW5uZWxzL2NoYW5uZWwuanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL3NyYy9jaGFubmVscy9jaGFubmVsLmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgZXhwb3J0cyBwcm92aWRlZDogQ2hhbm5lbCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgX193ZWJwYWNrX2V4cG9ydHNfXywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcbl9fd2VicGFja19yZXF1aXJlX18ucihfX3dlYnBhY2tfZXhwb3J0c19fKTtcbi8qIGhhcm1vbnkgZXhwb3J0IChiaW5kaW5nKSAqLyBfX3dlYnBhY2tfcmVxdWlyZV9fLmQoX193ZWJwYWNrX2V4cG9ydHNfXywgXCJDaGFubmVsXCIsIGZ1bmN0aW9uKCkgeyByZXR1cm4gQ2hhbm5lbDsgfSk7XG4vKiBoYXJtb255IGltcG9ydCAqLyB2YXIgX2V2ZW50c19kaXNwYXRjaGVyX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuLi9ldmVudHMvZGlzcGF0Y2hlciAqLyBcIi4vc3JjL2V2ZW50cy9kaXNwYXRjaGVyLmpzXCIpO1xuZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfTsgfSBlbHNlIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9OyB9IHJldHVybiBfdHlwZW9mKG9iaik7IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfVxuXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmIChjYWxsICYmIChfdHlwZW9mKGNhbGwpID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpKSB7IHJldHVybiBjYWxsOyB9IHJldHVybiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpOyB9XG5cbmZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikgeyBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gc2VsZjsgfVxuXG5mdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyBfZ2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3QuZ2V0UHJvdG90eXBlT2YgOiBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyByZXR1cm4gby5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKG8pOyB9OyByZXR1cm4gX2dldFByb3RvdHlwZU9mKG8pOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBfc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpOyB9XG5cbmZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBvLl9fcHJvdG9fXyA9IHA7IHJldHVybiBvOyB9OyByZXR1cm4gX3NldFByb3RvdHlwZU9mKG8sIHApOyB9XG5cblxudmFyIENoYW5uZWwgPVxuLyojX19QVVJFX18qL1xuZnVuY3Rpb24gKF9EaXNwYXRjaGVyKSB7XG4gIF9pbmhlcml0cyhDaGFubmVsLCBfRGlzcGF0Y2hlcik7XG5cbiAgZnVuY3Rpb24gQ2hhbm5lbChuYW1lLCBwdXNoZXIpIHtcbiAgICB2YXIgX3RoaXM7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQ2hhbm5lbCk7XG5cbiAgICBfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9nZXRQcm90b3R5cGVPZihDaGFubmVsKS5jYWxsKHRoaXMpKTtcbiAgICBfdGhpcy5uYW1lID0gbmFtZTtcbiAgICBfdGhpcy5wdXNoZXIgPSBwdXNoZXI7XG5cbiAgICBpZiAoX3RoaXMucHVzaGVyLnNvY2tldC5zdGF0ZSA9PSAxKSB7XG4gICAgICBfdGhpcy5zdWJzY3JpYmUoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoQ2hhbm5lbCwgW3tcbiAgICBrZXk6IFwic3Vic2NyaWJlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHN1YnNjcmliZSgpIHtcbiAgICAgIHRoaXMucHVzaGVyLnNlbmQoe1xuICAgICAgICBldmVudDogJ3N1YnNjcmliZScsXG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICBjaGFubmVsOiB0aGlzLm5hbWVcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIENoYW5uZWw7XG59KF9ldmVudHNfZGlzcGF0Y2hlcl9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fW1wiRGlzcGF0Y2hlclwiXSk7XG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vc3JjL2NoYW5uZWxzL21hbm5hZ2VyLmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vc3JjL2NoYW5uZWxzL21hbm5hZ2VyLmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIGV4cG9ydHMgcHJvdmlkZWQ6IE1hbm5hZ2VyICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBfX3dlYnBhY2tfZXhwb3J0c19fLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yKF9fd2VicGFja19leHBvcnRzX18pO1xuLyogaGFybW9ueSBleHBvcnQgKGJpbmRpbmcpICovIF9fd2VicGFja19yZXF1aXJlX18uZChfX3dlYnBhY2tfZXhwb3J0c19fLCBcIk1hbm5hZ2VyXCIsIGZ1bmN0aW9uKCkgeyByZXR1cm4gTWFubmFnZXI7IH0pO1xuLyogaGFybW9ueSBpbXBvcnQgKi8gdmFyIF9jaGFubmVsX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL2NoYW5uZWwgKi8gXCIuL3NyYy9jaGFubmVscy9jaGFubmVsLmpzXCIpO1xuLyogaGFybW9ueSBpbXBvcnQgKi8gdmFyIF9wcmVzZW5jZV9jaGFubmVsX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8xX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL3ByZXNlbmNlX2NoYW5uZWwgKi8gXCIuL3NyYy9jaGFubmVscy9wcmVzZW5jZV9jaGFubmVsLmpzXCIpO1xuLyogaGFybW9ueSBpbXBvcnQgKi8gdmFyIF9wcml2YXRlX2NoYW5uZWxfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzJfXyA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vcHJpdmF0ZV9jaGFubmVsICovIFwiLi9zcmMvY2hhbm5lbHMvcHJpdmF0ZV9jaGFubmVsLmpzXCIpO1xuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfVxuXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfVxuXG5cblxuXG52YXIgTWFubmFnZXIgPVxuLyojX19QVVJFX18qL1xuZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBNYW5uYWdlcigpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgTWFubmFnZXIpO1xuXG4gICAgdGhpcy5jaGFubmVscyA9IHt9O1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKE1hbm5hZ2VyLCBbe1xuICAgIGtleTogXCJhZGRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gYWRkKG5hbWUsIHB1c2hlcikge1xuICAgICAgaWYgKCF0aGlzLmNoYW5uZWxzW25hbWVdKSB7XG4gICAgICAgIHRoaXMuY2hhbm5lbHNbbmFtZV0gPSBjcmVhdGVDaGFubmVsKG5hbWUsIHB1c2hlcik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLmNoYW5uZWxzW25hbWVdO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJhbGxcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gYWxsKCkge1xuICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKHRoaXMuY2hhbm5lbHMpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJmaW5kXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGZpbmQobmFtZSkge1xuICAgICAgcmV0dXJuIHRoaXMuY2hhbm5lbHNbbmFtZV07XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInJlbW92ZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW1vdmUobmFtZSkge1xuICAgICAgdmFyIGNoYW5uZWwgPSB0aGlzLmNoYW5uZWxzW25hbWVdO1xuICAgICAgZGVsZXRlIHRoaXMuY2hhbm5lbHNbbmFtZV07XG4gICAgICByZXR1cm4gY2hhbm5lbDtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwic3Vic2NyaWJlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHN1YnNjcmliZSgpIHtcbiAgICAgIGZvciAodmFyIGkgaW4gdGhpcy5jaGFubmVscykge1xuICAgICAgICB0aGlzLmNoYW5uZWxzW2ldLnN1YnNjcmliZSgpO1xuICAgICAgfVxuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBNYW5uYWdlcjtcbn0oKTtcblxuZnVuY3Rpb24gY3JlYXRlQ2hhbm5lbChuYW1lLCBwdXNoZXIpIHtcbiAgaWYgKG5hbWUuaW5kZXhPZigncHJpdmF0ZS0nKSA9PT0gMCkge1xuICAgIHJldHVybiBuZXcgX3ByaXZhdGVfY2hhbm5lbF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMl9fW1wiUHJpdmF0ZUNoYW5uZWxcIl0obmFtZSwgcHVzaGVyKTtcbiAgfSBlbHNlIGlmIChuYW1lLmluZGV4T2YoJ3ByZXNlbmNlLScpID09PSAwKSB7XG4gICAgcmV0dXJuIG5ldyBfcHJlc2VuY2VfY2hhbm5lbF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMV9fW1wiUHJlc2VuY2VDaGFubmVsXCJdKG5hbWUsIHB1c2hlcik7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIG5ldyBfY2hhbm5lbF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fW1wiQ2hhbm5lbFwiXShuYW1lLCBwdXNoZXIpO1xuICB9XG59XG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vc3JjL2NoYW5uZWxzL3ByZXNlbmNlX2NoYW5uZWwuanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL3NyYy9jaGFubmVscy9wcmVzZW5jZV9jaGFubmVsLmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgZXhwb3J0cyBwcm92aWRlZDogUHJlc2VuY2VDaGFubmVsICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBfX3dlYnBhY2tfZXhwb3J0c19fLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yKF9fd2VicGFja19leHBvcnRzX18pO1xuLyogaGFybW9ueSBleHBvcnQgKGJpbmRpbmcpICovIF9fd2VicGFja19yZXF1aXJlX18uZChfX3dlYnBhY2tfZXhwb3J0c19fLCBcIlByZXNlbmNlQ2hhbm5lbFwiLCBmdW5jdGlvbigpIHsgcmV0dXJuIFByZXNlbmNlQ2hhbm5lbDsgfSk7XG4vKiBoYXJtb255IGltcG9ydCAqLyB2YXIgX2V2ZW50c19kaXNwYXRjaGVyX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuLi9ldmVudHMvZGlzcGF0Y2hlciAqLyBcIi4vc3JjL2V2ZW50cy9kaXNwYXRjaGVyLmpzXCIpO1xuZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfTsgfSBlbHNlIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9OyB9IHJldHVybiBfdHlwZW9mKG9iaik7IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfVxuXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmIChjYWxsICYmIChfdHlwZW9mKGNhbGwpID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpKSB7IHJldHVybiBjYWxsOyB9IHJldHVybiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpOyB9XG5cbmZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikgeyBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gc2VsZjsgfVxuXG5mdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyBfZ2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3QuZ2V0UHJvdG90eXBlT2YgOiBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyByZXR1cm4gby5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKG8pOyB9OyByZXR1cm4gX2dldFByb3RvdHlwZU9mKG8pOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBfc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpOyB9XG5cbmZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBvLl9fcHJvdG9fXyA9IHA7IHJldHVybiBvOyB9OyByZXR1cm4gX3NldFByb3RvdHlwZU9mKG8sIHApOyB9XG5cblxudmFyIFByZXNlbmNlQ2hhbm5lbCA9XG4vKiNfX1BVUkVfXyovXG5mdW5jdGlvbiAoX0Rpc3BhdGNoZXIpIHtcbiAgX2luaGVyaXRzKFByZXNlbmNlQ2hhbm5lbCwgX0Rpc3BhdGNoZXIpO1xuXG4gIGZ1bmN0aW9uIFByZXNlbmNlQ2hhbm5lbChuYW1lLCBwdXNoZXIpIHtcbiAgICB2YXIgX3RoaXM7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgUHJlc2VuY2VDaGFubmVsKTtcblxuICAgIF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX2dldFByb3RvdHlwZU9mKFByZXNlbmNlQ2hhbm5lbCkuY2FsbCh0aGlzKSk7XG4gICAgX3RoaXMubmFtZSA9IG5hbWU7XG4gICAgX3RoaXMucHVzaGVyID0gcHVzaGVyO1xuICAgIF90aGlzLmF1dGggPSBudWxsO1xuXG4gICAgaWYgKF90aGlzLnB1c2hlci5zb2NrZXQuc3RhdGUgPT0gMSkge1xuICAgICAgX3RoaXMuc3Vic2NyaWJlKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKFByZXNlbmNlQ2hhbm5lbCwgW3tcbiAgICBrZXk6IFwic3Vic2NyaWJlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHN1YnNjcmliZSgpIHtcbiAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICB0aGlzLnB1c2hlci5hdXRoKHRoaXMubmFtZSwgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgX3RoaXMyLmF1dGggPSBlLmRhdGEuYXV0aDtcblxuICAgICAgICBfdGhpczIucHVzaGVyLnNlbmQoe1xuICAgICAgICAgIGV2ZW50OiAnc3Vic2NyaWJlJyxcbiAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICBjaGFubmVsOiBfdGhpczIubmFtZSxcbiAgICAgICAgICAgIGF1dGg6IF90aGlzMi5hdXRoLFxuICAgICAgICAgICAgY2hhbm5lbF9kYXRhOiBlLmRhdGEuY2hhbm5lbF9kYXRhXG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBQcmVzZW5jZUNoYW5uZWw7XG59KF9ldmVudHNfZGlzcGF0Y2hlcl9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fW1wiRGlzcGF0Y2hlclwiXSk7XG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vc3JjL2NoYW5uZWxzL3ByaXZhdGVfY2hhbm5lbC5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9zcmMvY2hhbm5lbHMvcHJpdmF0ZV9jaGFubmVsLmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBleHBvcnRzIHByb3ZpZGVkOiBQcml2YXRlQ2hhbm5lbCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgX193ZWJwYWNrX2V4cG9ydHNfXywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcbl9fd2VicGFja19yZXF1aXJlX18ucihfX3dlYnBhY2tfZXhwb3J0c19fKTtcbi8qIGhhcm1vbnkgZXhwb3J0IChiaW5kaW5nKSAqLyBfX3dlYnBhY2tfcmVxdWlyZV9fLmQoX193ZWJwYWNrX2V4cG9ydHNfXywgXCJQcml2YXRlQ2hhbm5lbFwiLCBmdW5jdGlvbigpIHsgcmV0dXJuIFByaXZhdGVDaGFubmVsOyB9KTtcbi8qIGhhcm1vbnkgaW1wb3J0ICovIHZhciBfZXZlbnRzX2Rpc3BhdGNoZXJfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfXyA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4uL2V2ZW50cy9kaXNwYXRjaGVyICovIFwiLi9zcmMvZXZlbnRzL2Rpc3BhdGNoZXIuanNcIik7XG5mdW5jdGlvbiBfdHlwZW9mKG9iaikgeyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9OyB9IGVsc2UgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07IH0gcmV0dXJuIF90eXBlb2Yob2JqKTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9XG5cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKGNhbGwgJiYgKF90eXBlb2YoY2FsbCkgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikpIHsgcmV0dXJuIGNhbGw7IH0gcmV0dXJuIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZik7IH1cblxuZnVuY3Rpb24gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKSB7IGlmIChzZWxmID09PSB2b2lkIDApIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IF9nZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5nZXRQcm90b3R5cGVPZiA6IGZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IHJldHVybiBvLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2Yobyk7IH07IHJldHVybiBfZ2V0UHJvdG90eXBlT2Yobyk7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uXCIpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIF9zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcyk7IH1cblxuZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgX3NldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IG8uX19wcm90b19fID0gcDsgcmV0dXJuIG87IH07IHJldHVybiBfc2V0UHJvdG90eXBlT2YobywgcCk7IH1cblxuXG52YXIgUHJpdmF0ZUNoYW5uZWwgPVxuLyojX19QVVJFX18qL1xuZnVuY3Rpb24gKF9EaXNwYXRjaGVyKSB7XG4gIF9pbmhlcml0cyhQcml2YXRlQ2hhbm5lbCwgX0Rpc3BhdGNoZXIpO1xuXG4gIGZ1bmN0aW9uIFByaXZhdGVDaGFubmVsKG5hbWUsIHB1c2hlcikge1xuICAgIHZhciBfdGhpcztcblxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBQcml2YXRlQ2hhbm5lbCk7XG5cbiAgICBfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9nZXRQcm90b3R5cGVPZihQcml2YXRlQ2hhbm5lbCkuY2FsbCh0aGlzKSk7XG4gICAgX3RoaXMubmFtZSA9IG5hbWU7XG4gICAgX3RoaXMucHVzaGVyID0gcHVzaGVyO1xuICAgIF90aGlzLmF1dGggPSBudWxsO1xuXG4gICAgaWYgKF90aGlzLnB1c2hlci5zb2NrZXQuc3RhdGUgPT0gMSkge1xuICAgICAgX3RoaXMuc3Vic2NyaWJlKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKFByaXZhdGVDaGFubmVsLCBbe1xuICAgIGtleTogXCJzdWJzY3JpYmVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gc3Vic2NyaWJlKCkge1xuICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgIHRoaXMucHVzaGVyLmF1dGgodGhpcy5uYW1lLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICBfdGhpczIuYXV0aCA9IGUuZGF0YS5hdXRoO1xuXG4gICAgICAgIF90aGlzMi5wdXNoZXIuc2VuZCh7XG4gICAgICAgICAgZXZlbnQ6ICdzdWJzY3JpYmUnLFxuICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgIGNoYW5uZWw6IF90aGlzMi5uYW1lLFxuICAgICAgICAgICAgYXV0aDogX3RoaXMyLmF1dGhcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIFByaXZhdGVDaGFubmVsO1xufShfZXZlbnRzX2Rpc3BhdGNoZXJfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfX1tcIkRpc3BhdGNoZXJcIl0pO1xuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL3NyYy9jb25uZWN0aW9uL3NvY2tldC5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL3NyYy9jb25uZWN0aW9uL3NvY2tldC5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBleHBvcnRzIHByb3ZpZGVkOiBTb2NrZXQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIF9fd2VicGFja19leHBvcnRzX18sIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIoX193ZWJwYWNrX2V4cG9ydHNfXyk7XG4vKiBoYXJtb255IGV4cG9ydCAoYmluZGluZykgKi8gX193ZWJwYWNrX3JlcXVpcmVfXy5kKF9fd2VicGFja19leHBvcnRzX18sIFwiU29ja2V0XCIsIGZ1bmN0aW9uKCkgeyByZXR1cm4gU29ja2V0OyB9KTtcbi8qIGhhcm1vbnkgaW1wb3J0ICovIHZhciBfZXZlbnRzX2Rpc3BhdGNoZXJfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfXyA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4uL2V2ZW50cy9kaXNwYXRjaGVyICovIFwiLi9zcmMvZXZlbnRzL2Rpc3BhdGNoZXIuanNcIik7XG5mdW5jdGlvbiBfdHlwZW9mKG9iaikgeyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9OyB9IGVsc2UgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07IH0gcmV0dXJuIF90eXBlb2Yob2JqKTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9XG5cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKGNhbGwgJiYgKF90eXBlb2YoY2FsbCkgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikpIHsgcmV0dXJuIGNhbGw7IH0gcmV0dXJuIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZik7IH1cblxuZnVuY3Rpb24gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKSB7IGlmIChzZWxmID09PSB2b2lkIDApIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IF9nZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5nZXRQcm90b3R5cGVPZiA6IGZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IHJldHVybiBvLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2Yobyk7IH07IHJldHVybiBfZ2V0UHJvdG90eXBlT2Yobyk7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uXCIpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIF9zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcyk7IH1cblxuZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgX3NldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IG8uX19wcm90b19fID0gcDsgcmV0dXJuIG87IH07IHJldHVybiBfc2V0UHJvdG90eXBlT2YobywgcCk7IH1cblxuXG52YXIgU29ja2V0ID1cbi8qI19fUFVSRV9fKi9cbmZ1bmN0aW9uIChfRGlzcGF0Y2hlcikge1xuICBfaW5oZXJpdHMoU29ja2V0LCBfRGlzcGF0Y2hlcik7XG5cbiAgZnVuY3Rpb24gU29ja2V0KHB1c2hlciwgaG9zdCkge1xuICAgIHZhciBfdGhpcztcblxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBTb2NrZXQpO1xuXG4gICAgX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfZ2V0UHJvdG90eXBlT2YoU29ja2V0KS5jYWxsKHRoaXMpKTtcbiAgICBfdGhpcy5wdXNoZXIgPSBwdXNoZXI7XG4gICAgX3RoaXMuc29ja2V0ID0gbmV3IFdlYlNvY2tldChob3N0ICsgJy8nICsgX3RoaXMucHVzaGVyLmtleSk7XG5cbiAgICBfdGhpcy5iaW5kTGlzdGVuZXJzKCk7XG5cbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoU29ja2V0LCBbe1xuICAgIGtleTogXCJiaW5kTGlzdGVuZXJzXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGJpbmRMaXN0ZW5lcnMoKSB7XG4gICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgdGhpcy5zb2NrZXQub25vcGVuID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBfdGhpczIub25PcGVuKCk7XG4gICAgICB9O1xuXG4gICAgICB0aGlzLnNvY2tldC5vbmVycm9yID0gZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgIF90aGlzMi5vbkVycm9yKGVycm9yKTtcbiAgICAgIH07XG5cbiAgICAgIHRoaXMuc29ja2V0Lm9uY2xvc2UgPSBmdW5jdGlvbiAoY2xvc2VFdmVudCkge1xuICAgICAgICBfdGhpczIub25DbG9zZShjbG9zZUV2ZW50KTtcbiAgICAgIH07XG5cbiAgICAgIHRoaXMuc29ja2V0Lm9ubWVzc2FnZSA9IGZ1bmN0aW9uIChtZXNzYWdlKSB7XG4gICAgICAgIF90aGlzMi5vbk1lc3NhZ2UobWVzc2FnZSk7XG4gICAgICB9O1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJvbk9wZW5cIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gb25PcGVuKCkge1xuICAgICAgdmFyIF90aGlzMyA9IHRoaXM7XG5cbiAgICAgIC8v5Yid5aeL54q25oCBXG4gICAgICB0aGlzLnN0YXRlID0gMDtcbiAgICAgIHRoaXMuYmluZCgnY29ubmVjdGVkJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgX3RoaXMzLnNvY2tldC5zb2NrZXRfaWQgPSBlLnNvY2tldF9pZDtcbiAgICAgICAgX3RoaXMzLnN0YXRlID0gMTsgLy/orqLpmIVcblxuICAgICAgICBfdGhpczMucHVzaGVyLmNoYW5uZWxzLnN1YnNjcmliZSgpO1xuICAgICAgfSk7XG4gICAgICB0aGlzLmJpbmQoJ2Nvbm5lY3Rpb25fZmFpbGVkJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgX3RoaXMzLnN0YXRlID0gLTE7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZS5lcnJvcik7XG4gICAgICB9KTtcbiAgICAgIC8qdGhpcy5zZW5kKHtcclxuICAgICAgICAgIGV2ZW50OiAnYXV0aG9yaXphdGlvbidcclxuICAgICAgfSk7Ki9cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwib25FcnJvclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBvbkVycm9yKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwib25DbG9zZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBvbkNsb3NlKGNsb3NlRXZlbnQpIHtcbiAgICAgIGlmICh0aGlzLnNvY2tldC5yZWFkeVN0YXRlID09IFdlYlNvY2tldC5DTE9TRUQpIHtcbiAgICAgICAgaWYgKGNsb3NlRXZlbnQudHlwZSA9PSAnY2xvc2UnKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcignc29ja2V05pyN5Yqh5bey5pat5byAISEnKTtcbiAgICAgICAgfSBlbHNlIGlmIChjbG9zZUV2ZW50LnR5cGUgPT0gJ21lc3NhZ2UnKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcihjbG9zZUV2ZW50LmRhdGEpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ+W3suaWreW8gCEhJyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwib25NZXNzYWdlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG9uTWVzc2FnZShtZXNzYWdlKSB7XG4gICAgICB2YXIgZURhdGEgPSBKU09OLnBhcnNlKG1lc3NhZ2UuZGF0YSk7XG4gICAgICB2YXIgZXZlbnQgPSBlRGF0YS5ldmVudDtcbiAgICAgIHZhciBkYXRhID0gZURhdGEuZGF0YTtcblxuICAgICAgaWYgKGVEYXRhLmNoYW5uZWwgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICB0aGlzLnB1c2hlci5jaGFubmVscy5maW5kKGVEYXRhLmNoYW5uZWwpLmVtaXQoZXZlbnQsIGRhdGEpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5lbWl0KGV2ZW50LCBkYXRhKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwic2VuZFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzZW5kKGpzb24pIHtcbiAgICAgIGlmICh0aGlzLnN0YXRlICE9PSAtMSkge1xuICAgICAgICB0aGlzLnNvY2tldC5zZW5kKEpTT04uc3RyaW5naWZ5KGpzb24pKTtcbiAgICAgIH1cbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gU29ja2V0O1xufShfZXZlbnRzX2Rpc3BhdGNoZXJfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfX1tcIkRpc3BhdGNoZXJcIl0pO1xuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL3NyYy9ldmVudHMvY2FsbGJhY2tfcmVnaXN0cnkuanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vc3JjL2V2ZW50cy9jYWxsYmFja19yZWdpc3RyeS5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgZXhwb3J0cyBwcm92aWRlZDogQ2FsbGJhY2tSZWdpc3RyeSAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgX193ZWJwYWNrX2V4cG9ydHNfXywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcbl9fd2VicGFja19yZXF1aXJlX18ucihfX3dlYnBhY2tfZXhwb3J0c19fKTtcbi8qIGhhcm1vbnkgZXhwb3J0IChiaW5kaW5nKSAqLyBfX3dlYnBhY2tfcmVxdWlyZV9fLmQoX193ZWJwYWNrX2V4cG9ydHNfXywgXCJDYWxsYmFja1JlZ2lzdHJ5XCIsIGZ1bmN0aW9uKCkgeyByZXR1cm4gQ2FsbGJhY2tSZWdpc3RyeTsgfSk7XG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9XG5cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9XG5cbnZhciBDYWxsYmFja1JlZ2lzdHJ5ID1cbi8qI19fUFVSRV9fKi9cbmZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gQ2FsbGJhY2tSZWdpc3RyeSgpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQ2FsbGJhY2tSZWdpc3RyeSk7XG5cbiAgICB0aGlzLl9jYWxsYmFja3MgPSB7fTtcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhDYWxsYmFja1JlZ2lzdHJ5LCBbe1xuICAgIGtleTogXCJnZXRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0KG5hbWUpIHtcbiAgICAgIHJldHVybiB0aGlzLl9jYWxsYmFja3NbcHJlZml4KG5hbWUpXTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiYWRkXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGFkZChuYW1lLCBjYWxsYmFjaywgY29udGV4dCkge1xuICAgICAgdmFyIHByZWZpeGVkRXZlbnROYW1lID0gcHJlZml4KG5hbWUpO1xuICAgICAgdGhpcy5fY2FsbGJhY2tzW3ByZWZpeGVkRXZlbnROYW1lXSA9IHRoaXMuX2NhbGxiYWNrc1twcmVmaXhlZEV2ZW50TmFtZV0gfHwgW107XG5cbiAgICAgIHRoaXMuX2NhbGxiYWNrc1twcmVmaXhlZEV2ZW50TmFtZV0ucHVzaCh7XG4gICAgICAgIGZuOiBjYWxsYmFjayxcbiAgICAgICAgY29udGV4dDogY29udGV4dFxuICAgICAgfSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInJlbW92ZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW1vdmUobmFtZSwgY2FsbGJhY2ssIGNvbnRleHQpIHtcbiAgICAgIGlmICghbmFtZSAmJiAhY2FsbGJhY2sgJiYgIWNvbnRleHQpIHtcbiAgICAgICAgdGhpcy5fY2FsbGJhY2tzID0ge307XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdmFyIG5hbWVzID0gbmFtZSA/IFtwcmVmaXgobmFtZSldIDogT2JqZWN0LmtleXModGhpcy5fY2FsbGJhY2tzKTtcblxuICAgICAgaWYgKGNhbGxiYWNrIHx8IGNvbnRleHQpIHtcbiAgICAgICAgdGhpcy5yZW1vdmVDYWxsYmFjayhuYW1lcywgY2FsbGJhY2ssIGNvbnRleHQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5yZW1vdmVBbGxDYWxsYmFja3MobmFtZXMpO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJyZW1vdmVDYWxsYmFja1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW1vdmVDYWxsYmFjayhuYW1lcywgY2FsbGJhY2ssIGNvbnRleHQpIHtcbiAgICAgIGZvciAodmFyIG5hbWUgaW4gbmFtZXMpIHtcbiAgICAgICAgZm9yICh2YXIga2V5IGluIHRoaXMuX2NhbGxiYWNrc1tuYW1lXSkge1xuICAgICAgICAgIGlmICh0aGlzLl9jYWxsYmFja3NbbmFtZV1ba2V5XS5mbiA9PSBjYWxsYmFjayB8fCB0aGlzLl9jYWxsYmFja3NbbmFtZV1ba2V5XS5jb250ZXh0ID09IGNvbnRleHQpIHtcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLl9jYWxsYmFja3NbbmFtZV1ba2V5XTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5fY2FsbGJhY2tzW25hbWVdLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgIGRlbGV0ZSB0aGlzLl9jYWxsYmFja3NbbmFtZV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwicmVtb3ZlQWxsQ2FsbGJhY2tzXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbW92ZUFsbENhbGxiYWNrcyhuYW1lcykge1xuICAgICAgZm9yICh2YXIgbmFtZSBpbiBuYW1lcykge1xuICAgICAgICBkZWxldGUgdGhpcy5fY2FsbGJhY2tzW25hbWVdO1xuICAgICAgfVxuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBDYWxsYmFja1JlZ2lzdHJ5O1xufSgpO1xuXG5mdW5jdGlvbiBwcmVmaXgobmFtZSkge1xuICByZXR1cm4gXCJfXCIgKyBuYW1lO1xufVxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL3NyYy9ldmVudHMvZGlzcGF0Y2hlci5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL3NyYy9ldmVudHMvZGlzcGF0Y2hlci5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBleHBvcnRzIHByb3ZpZGVkOiBEaXNwYXRjaGVyICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBfX3dlYnBhY2tfZXhwb3J0c19fLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yKF9fd2VicGFja19leHBvcnRzX18pO1xuLyogaGFybW9ueSBleHBvcnQgKGJpbmRpbmcpICovIF9fd2VicGFja19yZXF1aXJlX18uZChfX3dlYnBhY2tfZXhwb3J0c19fLCBcIkRpc3BhdGNoZXJcIiwgZnVuY3Rpb24oKSB7IHJldHVybiBEaXNwYXRjaGVyOyB9KTtcbi8qIGhhcm1vbnkgaW1wb3J0ICovIHZhciBfY2FsbGJhY2tfcmVnaXN0cnlfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfXyA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vY2FsbGJhY2tfcmVnaXN0cnkgKi8gXCIuL3NyYy9ldmVudHMvY2FsbGJhY2tfcmVnaXN0cnkuanNcIik7XG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9XG5cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9XG5cblxudmFyIERpc3BhdGNoZXIgPVxuLyojX19QVVJFX18qL1xuZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBEaXNwYXRjaGVyKCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBEaXNwYXRjaGVyKTtcblxuICAgIHRoaXMuY2FsbGJhY2tzID0gbmV3IF9jYWxsYmFja19yZWdpc3RyeV9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fW1wiQ2FsbGJhY2tSZWdpc3RyeVwiXSgpO1xuICAgIHRoaXMuZ2xvYmFsX2NhbGxiYWNrcyA9IFtdO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKERpc3BhdGNoZXIsIFt7XG4gICAga2V5OiBcImJpbmRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gYmluZChldmVudE5hbWUsIGNhbGxiYWNrLCBjb250ZXh0KSB7XG4gICAgICB0aGlzLmNhbGxiYWNrcy5hZGQoZXZlbnROYW1lLCBjYWxsYmFjaywgY29udGV4dCk7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiYmluZF9nbG9iYWxcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gYmluZF9nbG9iYWwoY2FsbGJhY2spIHtcbiAgICAgIHRoaXMuZ2xvYmFsX2NhbGxiYWNrcy5wdXNoKGNhbGxiYWNrKTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJ1bmJpbmRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gdW5iaW5kKGV2ZW50TmFtZSwgY2FsbGJhY2ssIGNvbnRleHQpIHtcbiAgICAgIHRoaXMuY2FsbGJhY2tzLnJlbW92ZShldmVudE5hbWUsIGNhbGxiYWNrLCBjb250ZXh0KTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJ1bmJpbmRfZ2xvYmFsXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHVuYmluZF9nbG9iYWwoY2FsbGJhY2spIHtcbiAgICAgIGlmICghY2FsbGJhY2spIHtcbiAgICAgICAgdGhpcy5nbG9iYWxfY2FsbGJhY2tzID0gW107XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgfVxuXG4gICAgICBmb3IgKHZhciBpIGluIHRoaXMuZ2xvYmFsX2NhbGxiYWNrcykge1xuICAgICAgICBpZiAoY2FsbGJhY2sgPT0gdGhpcy5nbG9iYWxfY2FsbGJhY2tzW2ldKSB7XG4gICAgICAgICAgZGVsZXRlIHRoaXMuZ2xvYmFsX2NhbGxiYWNrc1tpXTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwidW5iaW5kX2FsbFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiB1bmJpbmRfYWxsKCkge1xuICAgICAgdGhpcy51bmJpbmQoKTtcbiAgICAgIHRoaXMudW5iaW5kX2dsb2JhbCgpO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImVtaXRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZW1pdChldmVudE5hbWUsIGRhdGEpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5nbG9iYWxfY2FsbGJhY2tzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHRoaXMuZ2xvYmFsX2NhbGxiYWNrc1tpXShldmVudE5hbWUsIGRhdGEpO1xuICAgICAgfVxuXG4gICAgICB2YXIgY2FsbGJhY2tzID0gdGhpcy5jYWxsYmFja3MuZ2V0KGV2ZW50TmFtZSk7XG5cbiAgICAgIGlmIChjYWxsYmFja3MgJiYgY2FsbGJhY2tzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGNhbGxiYWNrcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICBjYWxsYmFja3NbX2ldLmZuLmNhbGwoY2FsbGJhY2tzW19pXS5jb250ZXh0LCBkYXRhKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gRGlzcGF0Y2hlcjtcbn0oKTtcblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9zcmMvcHVzaGVyLmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL3NyYy9wdXNoZXIuanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIGV4cG9ydHMgcHJvdmlkZWQ6IFB1c2hlciAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgX193ZWJwYWNrX2V4cG9ydHNfXywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcbl9fd2VicGFja19yZXF1aXJlX18ucihfX3dlYnBhY2tfZXhwb3J0c19fKTtcbi8qIGhhcm1vbnkgZXhwb3J0IChiaW5kaW5nKSAqLyBfX3dlYnBhY2tfcmVxdWlyZV9fLmQoX193ZWJwYWNrX2V4cG9ydHNfXywgXCJQdXNoZXJcIiwgZnVuY3Rpb24oKSB7IHJldHVybiBQdXNoZXI7IH0pO1xuLyogaGFybW9ueSBpbXBvcnQgKi8gdmFyIF9jb25uZWN0aW9uX3NvY2tldF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9jb25uZWN0aW9uL3NvY2tldCAqLyBcIi4vc3JjL2Nvbm5lY3Rpb24vc29ja2V0LmpzXCIpO1xuLyogaGFybW9ueSBpbXBvcnQgKi8gdmFyIF9ldmVudHNfZGlzcGF0Y2hlcl9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMV9fID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9ldmVudHMvZGlzcGF0Y2hlciAqLyBcIi4vc3JjL2V2ZW50cy9kaXNwYXRjaGVyLmpzXCIpO1xuLyogaGFybW9ueSBpbXBvcnQgKi8gdmFyIF9jaGFubmVsc19tYW5uYWdlcl9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMl9fID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9jaGFubmVscy9tYW5uYWdlciAqLyBcIi4vc3JjL2NoYW5uZWxzL21hbm5hZ2VyLmpzXCIpO1xuLyogaGFybW9ueSBpbXBvcnQgKi8gdmFyIGF4aW9zX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8zX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISBheGlvcyAqLyBcIi4vbm9kZV9tb2R1bGVzL2F4aW9zL2luZGV4LmpzXCIpO1xuLyogaGFybW9ueSBpbXBvcnQgKi8gdmFyIGF4aW9zX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8zX19fZGVmYXVsdCA9IC8qI19fUFVSRV9fKi9fX3dlYnBhY2tfcmVxdWlyZV9fLm4oYXhpb3NfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzNfXyk7XG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9XG5cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9XG5cblxuXG5cblxudmFyIFB1c2hlciA9XG4vKiNfX1BVUkVfXyovXG5mdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIFB1c2hlcihhcHBfa2V5LCBvcHRpb25zKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFB1c2hlcik7XG5cbiAgICB0aGlzLmNoZWNrQXBwS2V5KGFwcF9rZXkpO1xuICAgIHRoaXMua2V5ID0gYXBwX2tleTtcbiAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICAgIHRoaXMuZGlzcGF0Y2hlciA9IG5ldyBfZXZlbnRzX2Rpc3BhdGNoZXJfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzFfX1tcIkRpc3BhdGNoZXJcIl0oKTtcbiAgICB0aGlzLmNoYW5uZWxzID0gbmV3IF9jaGFubmVsc19tYW5uYWdlcl9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMl9fW1wiTWFubmFnZXJcIl0oKTtcbiAgICB0aGlzLmNvbm5lY3QoKTtcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhQdXNoZXIsIFt7XG4gICAga2V5OiBcImNvbm5lY3RcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29ubmVjdCgpIHtcbiAgICAgIHRoaXMuc29ja2V0ID0gbmV3IF9jb25uZWN0aW9uX3NvY2tldF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fW1wiU29ja2V0XCJdKHRoaXMsIHRoaXMub3B0aW9ucy5ob3N0KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwic3Vic2NyaWJlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHN1YnNjcmliZShjaGFubmVsX25hbWUpIHtcbiAgICAgIHJldHVybiB0aGlzLmNoYW5uZWxzLmFkZChjaGFubmVsX25hbWUsIHRoaXMpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJ1bnN1YnNjcmliZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiB1bnN1YnNjcmliZShjaGFubmVsX25hbWUpIHtcbiAgICAgIHRoaXMuY2hhbm5lbHMucmVtb3ZlKGNoYW5uZWxfbmFtZSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImdldFNvY2tldElkXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldFNvY2tldElkKCkge1xuICAgICAgcmV0dXJuIHRoaXMuc29ja2V0LnNvY2tldC5zb2NrZXRfaWQ7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInNlbmRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2VuZChqc29uKSB7XG4gICAgICB0aGlzLnNvY2tldC5zZW5kKGpzb24pO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJjaGVja0FwcEtleVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjaGVja0FwcEtleShrZXkpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJhdXRoXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGF1dGgobmFtZSwgY2FsbGJhY2spIHtcbiAgICAgIHZhciBtZXRob2QgPSB0aGlzLm9wdGlvbnMuYXV0aC5tZXRob2QgfHwgJ3Bvc3QnO1xuICAgICAgdmFyIGRhdGEgPSB7fTtcbiAgICAgIHZhciBwYXJhbXMgPSB7fTtcblxuICAgICAgaWYgKG1ldGhvZCA9PSAncG9zdCcpIHtcbiAgICAgICAgZGF0YSA9IE9iamVjdC5hc3NpZ24oe1xuICAgICAgICAgIGNoYW5uZWxfbmFtZTogbmFtZSxcbiAgICAgICAgICBzb2NrZXRfaWQ6IHRoaXMuZ2V0U29ja2V0SWQoKVxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHBhcmFtcyA9IE9iamVjdC5hc3NpZ24oe1xuICAgICAgICAgIGNoYW5uZWxfbmFtZTogbmFtZSxcbiAgICAgICAgICBzb2NrZXRfaWQ6IHRoaXMuZ2V0U29ja2V0SWQoKVxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgYXhpb3NfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzNfX19kZWZhdWx0KCkoe1xuICAgICAgICB1cmw6IHRoaXMub3B0aW9ucy5hdXRoLnVybCxcbiAgICAgICAgbWV0aG9kOiBtZXRob2QsXG4gICAgICAgIGhlYWRlcnM6IHRoaXMub3B0aW9ucy5hdXRoLmhlYWRlcnMgfHwge30sXG4gICAgICAgIHBhcmFtczogcGFyYW1zLFxuICAgICAgICBkYXRhOiBkYXRhXG4gICAgICB9KS50aGVuKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGNhbGxiYWNrKGUpO1xuICAgICAgfSkuY2F0Y2goZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcign56eB5pyJ6aKR6YGT5p2D6ZmQ5LiN6LazIScpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIFB1c2hlcjtcbn0oKTtcbndpbmRvdy5QdXNoZXIgPSBQdXNoZXI7XG5cbi8qKiovIH0pXG5cbi8qKioqKiovIH0pO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5kbFluQmhZMnM2THk4dmQyVmljR0ZqYXk5aWIyOTBjM1J5WVhBaUxDSjNaV0p3WVdOck9pOHZMeTR2Ym05a1pWOXRiMlIxYkdWekwyRjRhVzl6TDJsdVpHVjRMbXB6SWl3aWQyVmljR0ZqYXpvdkx5OHVMMjV2WkdWZmJXOWtkV3hsY3k5aGVHbHZjeTlzYVdJdllXUmhjSFJsY25NdmVHaHlMbXB6SWl3aWQyVmljR0ZqYXpvdkx5OHVMMjV2WkdWZmJXOWtkV3hsY3k5aGVHbHZjeTlzYVdJdllYaHBiM011YW5NaUxDSjNaV0p3WVdOck9pOHZMeTR2Ym05a1pWOXRiMlIxYkdWekwyRjRhVzl6TDJ4cFlpOWpZVzVqWld3dlEyRnVZMlZzTG1weklpd2lkMlZpY0dGamF6b3ZMeTh1TDI1dlpHVmZiVzlrZFd4bGN5OWhlR2x2Y3k5c2FXSXZZMkZ1WTJWc0wwTmhibU5sYkZSdmEyVnVMbXB6SWl3aWQyVmljR0ZqYXpvdkx5OHVMMjV2WkdWZmJXOWtkV3hsY3k5aGVHbHZjeTlzYVdJdlkyRnVZMlZzTDJselEyRnVZMlZzTG1weklpd2lkMlZpY0dGamF6b3ZMeTh1TDI1dlpHVmZiVzlrZFd4bGN5OWhlR2x2Y3k5c2FXSXZZMjl5WlM5QmVHbHZjeTVxY3lJc0luZGxZbkJoWTJzNkx5OHZMaTl1YjJSbFgyMXZaSFZzWlhNdllYaHBiM012YkdsaUwyTnZjbVV2U1c1MFpYSmpaWEIwYjNKTllXNWhaMlZ5TG1weklpd2lkMlZpY0dGamF6b3ZMeTh1TDI1dlpHVmZiVzlrZFd4bGN5OWhlR2x2Y3k5c2FXSXZZMjl5WlM5amNtVmhkR1ZGY25KdmNpNXFjeUlzSW5kbFluQmhZMnM2THk4dkxpOXViMlJsWDIxdlpIVnNaWE12WVhocGIzTXZiR2xpTDJOdmNtVXZaR2x6Y0dGMFkyaFNaWEYxWlhOMExtcHpJaXdpZDJWaWNHRmphem92THk4dUwyNXZaR1ZmYlc5a2RXeGxjeTloZUdsdmN5OXNhV0l2WTI5eVpTOWxibWhoYm1ObFJYSnliM0l1YW5NaUxDSjNaV0p3WVdOck9pOHZMeTR2Ym05a1pWOXRiMlIxYkdWekwyRjRhVzl6TDJ4cFlpOWpiM0psTDNObGRIUnNaUzVxY3lJc0luZGxZbkJoWTJzNkx5OHZMaTl1YjJSbFgyMXZaSFZzWlhNdllYaHBiM012YkdsaUwyTnZjbVV2ZEhKaGJuTm1iM0p0UkdGMFlTNXFjeUlzSW5kbFluQmhZMnM2THk4dkxpOXViMlJsWDIxdlpIVnNaWE12WVhocGIzTXZiR2xpTDJSbFptRjFiSFJ6TG1weklpd2lkMlZpY0dGamF6b3ZMeTh1TDI1dlpHVmZiVzlrZFd4bGN5OWhlR2x2Y3k5c2FXSXZhR1ZzY0dWeWN5OWlhVzVrTG1weklpd2lkMlZpY0dGamF6b3ZMeTh1TDI1dlpHVmZiVzlrZFd4bGN5OWhlR2x2Y3k5c2FXSXZhR1ZzY0dWeWN5OWlkRzloTG1weklpd2lkMlZpY0dGamF6b3ZMeTh1TDI1dlpHVmZiVzlrZFd4bGN5OWhlR2x2Y3k5c2FXSXZhR1ZzY0dWeWN5OWlkV2xzWkZWU1RDNXFjeUlzSW5kbFluQmhZMnM2THk4dkxpOXViMlJsWDIxdlpIVnNaWE12WVhocGIzTXZiR2xpTDJobGJIQmxjbk12WTI5dFltbHVaVlZTVEhNdWFuTWlMQ0ozWldKd1lXTnJPaTh2THk0dmJtOWtaVjl0YjJSMWJHVnpMMkY0YVc5ekwyeHBZaTlvWld4d1pYSnpMMk52YjJ0cFpYTXVhbk1pTENKM1pXSndZV05yT2k4dkx5NHZibTlrWlY5dGIyUjFiR1Z6TDJGNGFXOXpMMnhwWWk5b1pXeHdaWEp6TDJselFXSnpiMngxZEdWVlVrd3Vhbk1pTENKM1pXSndZV05yT2k4dkx5NHZibTlrWlY5dGIyUjFiR1Z6TDJGNGFXOXpMMnhwWWk5b1pXeHdaWEp6TDJselZWSk1VMkZ0WlU5eWFXZHBiaTVxY3lJc0luZGxZbkJoWTJzNkx5OHZMaTl1YjJSbFgyMXZaSFZzWlhNdllYaHBiM012YkdsaUwyaGxiSEJsY25NdmJtOXliV0ZzYVhwbFNHVmhaR1Z5VG1GdFpTNXFjeUlzSW5kbFluQmhZMnM2THk4dkxpOXViMlJsWDIxdlpIVnNaWE12WVhocGIzTXZiR2xpTDJobGJIQmxjbk12Y0dGeWMyVklaV0ZrWlhKekxtcHpJaXdpZDJWaWNHRmphem92THk4dUwyNXZaR1ZmYlc5a2RXeGxjeTloZUdsdmN5OXNhV0l2YUdWc2NHVnljeTl6Y0hKbFlXUXVhbk1pTENKM1pXSndZV05yT2k4dkx5NHZibTlrWlY5dGIyUjFiR1Z6TDJGNGFXOXpMMnhwWWk5MWRHbHNjeTVxY3lJc0luZGxZbkJoWTJzNkx5OHZMaTl1YjJSbFgyMXZaSFZzWlhNdmFYTXRZblZtWm1WeUwybHVaR1Y0TG1weklpd2lkMlZpY0dGamF6b3ZMeTh1TDI1dlpHVmZiVzlrZFd4bGN5OXdjbTlqWlhOekwySnliM2R6WlhJdWFuTWlMQ0ozWldKd1lXTnJPaTh2THk0dmMzSmpMMk5vWVc1dVpXeHpMMk5vWVc1dVpXd3Vhbk1pTENKM1pXSndZV05yT2k4dkx5NHZjM0pqTDJOb1lXNXVaV3h6TDIxaGJtNWhaMlZ5TG1weklpd2lkMlZpY0dGamF6b3ZMeTh1TDNOeVl5OWphR0Z1Ym1Wc2N5OXdjbVZ6Wlc1alpWOWphR0Z1Ym1Wc0xtcHpJaXdpZDJWaWNHRmphem92THk4dUwzTnlZeTlqYUdGdWJtVnNjeTl3Y21sMllYUmxYMk5vWVc1dVpXd3Vhbk1pTENKM1pXSndZV05yT2k4dkx5NHZjM0pqTDJOdmJtNWxZM1JwYjI0dmMyOWphMlYwTG1weklpd2lkMlZpY0dGamF6b3ZMeTh1TDNOeVl5OWxkbVZ1ZEhNdlkyRnNiR0poWTJ0ZmNtVm5hWE4wY25rdWFuTWlMQ0ozWldKd1lXTnJPaTh2THk0dmMzSmpMMlYyWlc1MGN5OWthWE53WVhSamFHVnlMbXB6SWl3aWQyVmljR0ZqYXpvdkx5OHVMM055WXk5d2RYTm9aWEl1YW5NaVhTd2libUZ0WlhNaU9sc2lRMmhoYm01bGJDSXNJbTVoYldVaUxDSndkWE5vWlhJaUxDSnpiMk5yWlhRaUxDSnpkR0YwWlNJc0luTjFZbk5qY21saVpTSXNJbk5sYm1RaUxDSmxkbVZ1ZENJc0ltUmhkR0VpTENKamFHRnVibVZzSWl3aVJHbHpjR0YwWTJobGNpSXNJazFoYm01aFoyVnlJaXdpWTJoaGJtNWxiSE1pTENKamNtVmhkR1ZEYUdGdWJtVnNJaXdpVDJKcVpXTjBJaXdpYTJWNWN5SXNJbWtpTENKcGJtUmxlRTltSWl3aVVISnBkbUYwWlVOb1lXNXVaV3dpTENKUWNtVnpaVzVqWlVOb1lXNXVaV3dpTENKaGRYUm9JaXdpWlNJc0ltTm9ZVzV1Wld4ZlpHRjBZU0lzSWxOdlkydGxkQ0lzSW1odmMzUWlMQ0pYWldKVGIyTnJaWFFpTENKclpYa2lMQ0ppYVc1a1RHbHpkR1Z1WlhKeklpd2liMjV2Y0dWdUlpd2liMjVQY0dWdUlpd2liMjVsY25KdmNpSXNJbVZ5Y205eUlpd2liMjVGY25KdmNpSXNJbTl1WTJ4dmMyVWlMQ0pqYkc5elpVVjJaVzUwSWl3aWIyNURiRzl6WlNJc0ltOXViV1Z6YzJGblpTSXNJbTFsYzNOaFoyVWlMQ0p2YmsxbGMzTmhaMlVpTENKaWFXNWtJaXdpYzI5amEyVjBYMmxrSWl3aVkyOXVjMjlzWlNJc0luSmxZV1I1VTNSaGRHVWlMQ0pEVEU5VFJVUWlMQ0owZVhCbElpd2laVVJoZEdFaUxDSktVMDlPSWl3aWNHRnljMlVpTENKMWJtUmxabWx1WldRaUxDSm1hVzVrSWl3aVpXMXBkQ0lzSW1wemIyNGlMQ0p6ZEhKcGJtZHBabmtpTENKRFlXeHNZbUZqYTFKbFoybHpkSEo1SWl3aVgyTmhiR3hpWVdOcmN5SXNJbkJ5WldacGVDSXNJbU5oYkd4aVlXTnJJaXdpWTI5dWRHVjRkQ0lzSW5CeVpXWnBlR1ZrUlhabGJuUk9ZVzFsSWl3aWNIVnphQ0lzSW1adUlpd2libUZ0WlhNaUxDSnlaVzF2ZG1WRFlXeHNZbUZqYXlJc0luSmxiVzkyWlVGc2JFTmhiR3hpWVdOcmN5SXNJbXhsYm1kMGFDSXNJbU5oYkd4aVlXTnJjeUlzSW1kc2IySmhiRjlqWVd4c1ltRmphM01pTENKbGRtVnVkRTVoYldVaUxDSmhaR1FpTENKeVpXMXZkbVVpTENKMWJtSnBibVFpTENKMWJtSnBibVJmWjJ4dlltRnNJaXdpWjJWMElpd2lZMkZzYkNJc0lsQjFjMmhsY2lJc0ltRndjRjlyWlhraUxDSnZjSFJwYjI1eklpd2lZMmhsWTJ0QmNIQkxaWGtpTENKa2FYTndZWFJqYUdWeUlpd2lZMjl1Ym1WamRDSXNJbU5vWVc1dVpXeGZibUZ0WlNJc0ltMWxkR2h2WkNJc0luQmhjbUZ0Y3lJc0ltRnpjMmxuYmlJc0ltZGxkRk52WTJ0bGRFbGtJaXdpWVhocGIzTWlMQ0oxY213aUxDSm9aV0ZrWlhKeklpd2lkR2hsYmlJc0ltTmhkR05vSWl3aWQybHVaRzkzSWwwc0ltMWhjSEJwYm1keklqb2lPMEZCUVVFN1FVRkRRVHM3UVVGRlFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3T3p0QlFVZEJPMEZCUTBFN08wRkJSVUU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3hyUkVGQk1FTXNaME5CUVdkRE8wRkJRekZGTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEVzWjBWQlFYZEVMR3RDUVVGclFqdEJRVU14UlR0QlFVTkJMSGxFUVVGcFJDeGpRVUZqTzBGQlF5OUVPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeHBSRUZCZVVNc2FVTkJRV2xETzBGQlF6RkZMSGRJUVVGblNDeHRRa0ZCYlVJc1JVRkJSVHRCUVVOeVNUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxHMURRVUV5UWl3d1FrRkJNRUlzUlVGQlJUdEJRVU4yUkN4NVEwRkJhVU1zWlVGQlpUdEJRVU5vUkR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFTdzRSRUZCYzBRc0swUkJRU3RFT3p0QlFVVnlTRHRCUVVOQk96czdRVUZIUVR0QlFVTkJPenM3T3pzN096czdPenM3UVVOc1JrRXNhVUpCUVdsQ0xHMUNRVUZQTEVOQlFVTXNjMFJCUVdFc1JUczdPenM3T3pzN096czdPMEZEUVhwQ096dEJRVVZpTEZsQlFWa3NiVUpCUVU4c1EwRkJReXh4UkVGQldUdEJRVU5vUXl4aFFVRmhMRzFDUVVGUExFTkJRVU1zYVVWQlFXdENPMEZCUTNaRExHVkJRV1VzYlVKQlFVOHNRMEZCUXl3eVJVRkJkVUk3UVVGRE9VTXNiVUpCUVcxQ0xHMUNRVUZQTEVOQlFVTXNiVVpCUVRKQ08wRkJRM1JFTEhOQ1FVRnpRaXh0UWtGQlR5eERRVUZETEhsR1FVRTRRanRCUVVNMVJDeHJRa0ZCYTBJc2JVSkJRVThzUTBGQlF5eDVSVUZCY1VJN1FVRkRMME1zZVVaQlFYbEdMRzFDUVVGUExFTkJRVU1zYlVWQlFXMUNPenRCUVVWd1NEdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQkxEUkRRVUUwUXp0QlFVTTFRenM3UVVGRlFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEVzVVVGQlVTeGhRVUZ2UWp0QlFVTTFRanRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk96dEJRVVZCTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxHOUNRVUZ2UWl4dFFrRkJUeXhEUVVGRExIbEZRVUZ6UWpzN1FVRkZiRVE3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEVzVTBGQlV6dEJRVU5VTzBGQlEwRTdRVUZEUVR0QlFVTkJMRTlCUVU4N1FVRkRVRHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEU5QlFVODdRVUZEVUR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeFBRVUZQTzBGQlExQTdPMEZCUlVFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVN4SFFVRkhPMEZCUTBnN096czdPenM3T3pzN096czdRVU51VEdFN08wRkJSV0lzV1VGQldTeHRRa0ZCVHl4RFFVRkRMR3RFUVVGVE8wRkJRemRDTEZkQlFWY3NiVUpCUVU4c1EwRkJReXhuUlVGQlowSTdRVUZEYmtNc1dVRkJXU3h0UWtGQlR5eERRVUZETERSRVFVRmpPMEZCUTJ4RExHVkJRV1VzYlVKQlFVOHNRMEZCUXl4M1JFRkJXVHM3UVVGRmJrTTdRVUZEUVR0QlFVTkJPMEZCUTBFc1YwRkJWeXhQUVVGUE8wRkJRMnhDTEZsQlFWa3NUVUZCVFR0QlFVTnNRanRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVN4bFFVRmxMRzFDUVVGUExFTkJRVU1zYTBWQlFXbENPMEZCUTNoRExHOUNRVUZ2UWl4dFFrRkJUeXhEUVVGRExEUkZRVUZ6UWp0QlFVTnNSQ3hwUWtGQmFVSXNiVUpCUVU4c1EwRkJReXh6UlVGQmJVSTdPMEZCUlRWRE8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRXNaVUZCWlN4dFFrRkJUeXhEUVVGRExHOUZRVUZyUWpzN1FVRkZla003TzBGQlJVRTdRVUZEUVRzN096czdPenM3T3pzN096dEJRMjVFWVRzN1FVRkZZanRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEZkQlFWY3NVVUZCVVR0QlFVTnVRanRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3TzBGQlJVRTdPenM3T3pzN096czdPenM3UVVOc1FtRTdPMEZCUldJc1lVRkJZU3h0UWtGQlR5eERRVUZETERKRVFVRlZPenRCUVVVdlFqdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJMRmRCUVZjc1UwRkJVenRCUVVOd1FqdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEVkQlFVYzdPMEZCUlVnN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRU3hIUVVGSE8wRkJRMGc3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRXNSMEZCUnp0QlFVTklPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdPenM3T3pzN096czdPenM3UVVONFJHRTdPMEZCUldJN1FVRkRRVHRCUVVOQk96czdPenM3T3pzN096czdPMEZEU21FN08wRkJSV0lzWlVGQlpTeHRRa0ZCVHl4RFFVRkRMREpFUVVGbE8wRkJRM1JETEZsQlFWa3NiVUpCUVU4c1EwRkJReXh4UkVGQldUdEJRVU5vUXl4NVFrRkJlVUlzYlVKQlFVOHNRMEZCUXl4cFJrRkJjMEk3UVVGRGRrUXNjMEpCUVhOQ0xHMUNRVUZQTEVOQlFVTXNNa1ZCUVcxQ096dEJRVVZxUkR0QlFVTkJPMEZCUTBFN1FVRkRRU3hYUVVGWExFOUJRVTg3UVVGRGJFSTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3hYUVVGWExFOUJRVTg3UVVGRGJFSTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeExRVUZMTzBGQlEwdzdPMEZCUlVFc2EwTkJRV3RETEdOQlFXTTdRVUZEYUVRN08wRkJSVUU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRU3hIUVVGSE96dEJRVVZJTzBGQlEwRTdRVUZEUVN4SFFVRkhPenRCUVVWSU8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRXNaMFJCUVdkRU8wRkJRMmhFTzBGQlEwRTdRVUZEUVN4TFFVRkxPMEZCUTB3N1FVRkRRU3hEUVVGRE96dEJRVVZFTzBGQlEwRTdRVUZEUVR0QlFVTkJMR2RFUVVGblJEdEJRVU5vUkR0QlFVTkJPMEZCUTBFN1FVRkRRU3hMUVVGTE8wRkJRMHc3UVVGRFFTeERRVUZET3p0QlFVVkVPenM3T3pzN096czdPenM3TzBGRE9VVmhPenRCUVVWaUxGbEJRVmtzYlVKQlFVOHNRMEZCUXl4eFJFRkJXVHM3UVVGRmFFTTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEZkQlFWY3NVMEZCVXp0QlFVTndRaXhYUVVGWExGTkJRVk03UVVGRGNFSTdRVUZEUVN4WlFVRlpMRTlCUVU4N1FVRkRia0k3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJMRWRCUVVjN1FVRkRTRHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJMRmRCUVZjc1QwRkJUenRCUVVOc1FqdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFc1YwRkJWeXhUUVVGVE8wRkJRM0JDTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxFZEJRVWM3UVVGRFNEczdRVUZGUVRzN096czdPenM3T3pzN096dEJRMjVFWVRzN1FVRkZZaXh0UWtGQmJVSXNiVUpCUVU4c1EwRkJReXh4UlVGQlowSTdPMEZCUlRORE8wRkJRMEU3UVVGRFFUdEJRVU5CTEZkQlFWY3NUMEZCVHp0QlFVTnNRaXhYUVVGWExFOUJRVTg3UVVGRGJFSXNWMEZCVnl4UFFVRlBPMEZCUTJ4Q0xGZEJRVmNzVDBGQlR6dEJRVU5zUWl4WFFVRlhMRTlCUVU4N1FVRkRiRUlzWVVGQllTeE5RVUZOTzBGQlEyNUNPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3T3pzN096czdPenM3T3pzN1FVTnFRbUU3TzBGQlJXSXNXVUZCV1N4dFFrRkJUeXhEUVVGRExIRkVRVUZaTzBGQlEyaERMRzlDUVVGdlFpeHRRa0ZCVHl4RFFVRkRMSFZGUVVGcFFqdEJRVU0zUXl4bFFVRmxMRzFDUVVGUExFTkJRVU1zZFVWQlFXOUNPMEZCUXpORExHVkJRV1VzYlVKQlFVOHNRMEZCUXl4NVJFRkJZVHRCUVVOd1F5eHZRa0ZCYjBJc2JVSkJRVThzUTBGQlF5eHhSa0ZCTkVJN1FVRkRlRVFzYTBKQlFXdENMRzFDUVVGUExFTkJRVU1zYVVaQlFUQkNPenRCUVVWd1JEdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJMRmRCUVZjc1QwRkJUenRCUVVOc1FpeGhRVUZoTEZGQlFWRTdRVUZEY2tJN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVN3clFrRkJLMEk3UVVGREwwSXNkVU5CUVhWRE8wRkJRM1pETzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPenRCUVVWQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRXNSMEZCUnp0QlFVTklPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRXNSMEZCUnp0QlFVTklPenM3T3pzN096czdPenM3TzBGRGNrWmhPenRCUVVWaU8wRkJRMEU3UVVGRFFUdEJRVU5CTEZkQlFWY3NUVUZCVFR0QlFVTnFRaXhYUVVGWExFOUJRVTg3UVVGRGJFSXNWMEZCVnl4UFFVRlBPMEZCUTJ4Q0xGZEJRVmNzVDBGQlR6dEJRVU5zUWl4WFFVRlhMRTlCUVU4N1FVRkRiRUlzWVVGQllTeE5RVUZOTzBGQlEyNUNPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPenM3T3pzN096czdPenM3TzBGRGNFSmhPenRCUVVWaUxHdENRVUZyUWl4dFFrRkJUeXhEUVVGRExHMUZRVUZsT3p0QlFVVjZRenRCUVVOQk8wRkJRMEU3UVVGRFFTeFhRVUZYTEZOQlFWTTdRVUZEY0VJc1YwRkJWeXhUUVVGVE8wRkJRM0JDTEZkQlFWY3NUMEZCVHp0QlFVTnNRanRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4SFFVRkhPMEZCUTBnN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPenM3T3pzN096czdPenM3TzBGRGVrSmhPenRCUVVWaUxGbEJRVmtzYlVKQlFVOHNRMEZCUXl4eFJFRkJXVHM3UVVGRmFFTTdRVUZEUVR0QlFVTkJPMEZCUTBFc1YwRkJWeXhqUVVGak8wRkJRM3BDTEZkQlFWY3NUVUZCVFR0QlFVTnFRaXhYUVVGWExHVkJRV1U3UVVGRE1VSXNZVUZCWVN4RlFVRkZPMEZCUTJZN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEVkQlFVYzdPMEZCUlVnN1FVRkRRVHM3T3pzN096czdPenM3T3p0QlEyNUNRU3dyUTBGQllUczdRVUZGWWl4WlFVRlpMRzFDUVVGUExFTkJRVU1zYTBSQlFWTTdRVUZETjBJc01FSkJRVEJDTEcxQ1FVRlBMRU5CUVVNc09FWkJRU3RDT3p0QlFVVnFSVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJMR05CUVdNc2JVSkJRVThzUTBGQlF5eG5SVUZCWjBJN1FVRkRkRU1zUjBGQlJ6dEJRVU5JTzBGQlEwRXNZMEZCWXl4dFFrRkJUeXhEUVVGRExHbEZRVUZwUWp0QlFVTjJRenRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4M1JVRkJkMFU3UVVGRGVFVTdRVUZEUVR0QlFVTkJPMEZCUTBFc2RVUkJRWFZFTzBGQlEzWkVPMEZCUTBFN1FVRkRRVHRCUVVOQkxFZEJRVWM3TzBGQlJVZzdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxFOUJRVThzV1VGQldUdEJRVU51UWp0QlFVTkJPMEZCUTBFc1IwRkJSenM3UVVGRlNEdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3TzBGQlJVRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRXNRMEZCUXpzN1FVRkZSRHRCUVVOQk8wRkJRMEVzUTBGQlF6czdRVUZGUkRzN096czdPenM3T3pzN096czdRVU12Um1FN08wRkJSV0k3UVVGRFFUdEJRVU5CTzBGQlEwRXNiVUpCUVcxQ0xHbENRVUZwUWp0QlFVTndRenRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3pzN096czdPenM3T3pzN08wRkRWbUU3TzBGQlJXSTdPMEZCUlVFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVRzN096czdPenM3T3pzN096dEJRMjVEWVRzN1FVRkZZaXhaUVVGWkxHMUNRVUZQTEVOQlFVTXNjVVJCUVZrN08wRkJSV2hETzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxGZEJRVmNzVDBGQlR6dEJRVU5zUWl4WFFVRlhMRTlCUVU4N1FVRkRiRUlzWVVGQllTeFBRVUZQTzBGQlEzQkNPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3hIUVVGSE8wRkJRMGc3UVVGRFFTeEhRVUZITzBGQlEwZzdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJMRTlCUVU4N1FVRkRVRHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJMRk5CUVZNN1FVRkRWRHRCUVVOQk8wRkJRMEU3UVVGRFFTeFBRVUZQTzBGQlExQXNTMEZCU3pzN1FVRkZURHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk96czdPenM3T3pzN096czdPMEZEYWtWaE96dEJRVVZpTzBGQlEwRTdRVUZEUVR0QlFVTkJMRmRCUVZjc1QwRkJUenRCUVVOc1FpeFhRVUZYTEU5QlFVODdRVUZEYkVJc1lVRkJZU3hQUVVGUE8wRkJRM0JDTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3T3pzN096czdPenM3T3p0QlEySmhPenRCUVVWaUxGbEJRVmtzYlVKQlFVOHNRMEZCUXl4eFJFRkJXVHM3UVVGRmFFTTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPenRCUVVWQkxIZERRVUYzUXp0QlFVTjRReXhQUVVGUE96dEJRVVZRTzBGQlEwRXNNRVJCUVRCRUxIZENRVUYzUWp0QlFVTnNSanRCUVVOQkxFOUJRVTg3TzBGQlJWQTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3hIUVVGSE96dEJRVVZJTzBGQlEwRTdRVUZEUVR0QlFVTkJMR2REUVVGblF6dEJRVU5vUXl3MlFrRkJOa0lzWVVGQllTeEZRVUZGTzBGQlF6VkRPMEZCUTBFN1FVRkRRU3hIUVVGSE8wRkJRMGc3T3pzN096czdPenM3T3pzN1FVTndSR0U3TzBGQlJXSTdRVUZEUVR0QlFVTkJPMEZCUTBFc1YwRkJWeXhQUVVGUE8wRkJRMnhDTEdGQlFXRXNVVUZCVVR0QlFVTnlRanRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN096czdPenM3T3pzN096dEJRMkpoT3p0QlFVVmlMRmxCUVZrc2JVSkJRVThzUTBGQlF5eHhSRUZCV1RzN1FVRkZhRU03UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFc1kwRkJZeXhQUVVGUE8wRkJRM0pDTEdkQ1FVRm5RanRCUVVOb1FqdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEdOQlFXTXNUMEZCVHp0QlFVTnlRaXhuUWtGQlowSXNVVUZCVVR0QlFVTjRRanRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4SFFVRkhPenRCUVVWSU8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4SFFVRkhPMEZCUTBnN096czdPenM3T3pzN096czdRVU51UldFN08wRkJSV0lzV1VGQldTeHRRa0ZCVHl4RFFVRkRMRzFFUVVGVk96dEJRVVU1UWp0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeEhRVUZITzBGQlEwZzdPenM3T3pzN096czdPenM3UVVOWVlUczdRVUZGWWl4WlFVRlpMRzFDUVVGUExFTkJRVU1zY1VSQlFWazdPMEZCUldoRE8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeFhRVUZYTEU5QlFVODdRVUZEYkVJc1lVRkJZU3hQUVVGUE8wRkJRM0JDTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFTeHBRa0ZCYVVJc1pVRkJaVHM3UVVGRmFFTTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFc1QwRkJUenRCUVVOUU8wRkJRMEU3UVVGRFFUdEJRVU5CTEVkQlFVYzdPMEZCUlVnN1FVRkRRVHM3T3pzN096czdPenM3T3p0QlEzQkVZVHM3UVVGRllqdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFc0swSkJRU3RDTzBGQlF5OUNPMEZCUTBFN1FVRkRRU3hYUVVGWExGTkJRVk03UVVGRGNFSXNZVUZCWVR0QlFVTmlPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdPenM3T3pzN096czdPenRCUXpGQ1lUczdRVUZGWWl4WFFVRlhMRzFDUVVGUExFTkJRVU1zWjBWQlFXZENPMEZCUTI1RExHVkJRV1VzYlVKQlFVOHNRMEZCUXl4dlJFRkJWenM3UVVGRmJFTTdPMEZCUlVFN08wRkJSVUU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFc1YwRkJWeXhQUVVGUE8wRkJRMnhDTEdGQlFXRXNVVUZCVVR0QlFVTnlRanRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3hYUVVGWExFOUJRVTg3UVVGRGJFSXNZVUZCWVN4UlFVRlJPMEZCUTNKQ08wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxGZEJRVmNzVDBGQlR6dEJRVU5zUWl4aFFVRmhMRkZCUVZFN1FVRkRja0k3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEVzVjBGQlZ5eFBRVUZQTzBGQlEyeENMR0ZCUVdFc1VVRkJVVHRCUVVOeVFqdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFc1IwRkJSenRCUVVOSU8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxGZEJRVmNzVDBGQlR6dEJRVU5zUWl4aFFVRmhMRkZCUVZFN1FVRkRja0k3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEVzVjBGQlZ5eFBRVUZQTzBGQlEyeENMR0ZCUVdFc1VVRkJVVHRCUVVOeVFqdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeFhRVUZYTEU5QlFVODdRVUZEYkVJc1lVRkJZU3hSUVVGUk8wRkJRM0pDTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEZkQlFWY3NUMEZCVHp0QlFVTnNRaXhoUVVGaExGRkJRVkU3UVVGRGNrSTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRXNWMEZCVnl4UFFVRlBPMEZCUTJ4Q0xHRkJRV0VzVVVGQlVUdEJRVU55UWp0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4WFFVRlhMRTlCUVU4N1FVRkRiRUlzWVVGQllTeFJRVUZSTzBGQlEzSkNPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJMRmRCUVZjc1QwRkJUenRCUVVOc1FpeGhRVUZoTEZGQlFWRTdRVUZEY2tJN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFc1YwRkJWeXhQUVVGUE8wRkJRMnhDTEdGQlFXRXNVVUZCVVR0QlFVTnlRanRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3hYUVVGWExFOUJRVTg3UVVGRGJFSXNZVUZCWVN4UlFVRlJPMEZCUTNKQ08wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxGZEJRVmNzVDBGQlR6dEJRVU5zUWl4aFFVRmhMRkZCUVZFN1FVRkRja0k3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEVzVjBGQlZ5eFBRVUZQTzBGQlEyeENMR0ZCUVdFc1QwRkJUenRCUVVOd1FqdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4WFFVRlhMR0ZCUVdFN1FVRkRlRUlzVjBGQlZ5eFRRVUZUTzBGQlEzQkNPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVN4dFEwRkJiVU1zVDBGQlR6dEJRVU14UXp0QlFVTkJPMEZCUTBFc1IwRkJSenRCUVVOSU8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeDFRa0ZCZFVJc1UwRkJVeXhIUVVGSExGTkJRVk03UVVGRE5VTXNNa0pCUVRKQ08wRkJRek5DTzBGQlEwRTdRVUZEUVN4WFFVRlhMRTlCUVU4N1FVRkRiRUlzWVVGQllTeFBRVUZQTzBGQlEzQkNPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEV0QlFVczdRVUZEVER0QlFVTkJPMEZCUTBFN08wRkJSVUVzZFVOQlFYVkRMRTlCUVU4N1FVRkRPVU03UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEVzVjBGQlZ5eFBRVUZQTzBGQlEyeENMRmRCUVZjc1QwRkJUenRCUVVOc1FpeFhRVUZYTEU5QlFVODdRVUZEYkVJc1dVRkJXU3hQUVVGUE8wRkJRMjVDTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3hMUVVGTE8wRkJRMHc3UVVGRFFUdEJRVU5CTEVkQlFVYzdRVUZEU0R0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3pzN096czdPenM3T3pzN1FVTTVVMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPenM3T3pzN096czdPenM3UVVOd1FrRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEVzVTBGQlV6dEJRVU5VTzBGQlEwRTdRVUZEUVN4TFFVRkxPMEZCUTB3N1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEZOQlFWTTdRVUZEVkR0QlFVTkJPMEZCUTBFc1MwRkJTenRCUVVOTU8wRkJRMEU3UVVGRFFTeERRVUZETzBGQlEwUTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3hMUVVGTE8wRkJRMHc3UVVGRFFUdEJRVU5CTzBGQlEwRXNVMEZCVXp0QlFVTlVPMEZCUTBFN1FVRkRRVHRCUVVOQk96czdRVUZIUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEVzUzBGQlN6dEJRVU5NTzBGQlEwRTdRVUZEUVR0QlFVTkJMRk5CUVZNN1FVRkRWRHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3pzN08wRkJTVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJMRXRCUVVzN1FVRkRURHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxIVkNRVUYxUWl4elFrRkJjMEk3UVVGRE4wTTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3h4UWtGQmNVSTdRVUZEY2tJN08wRkJSVUU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJMSEZEUVVGeFF6czdRVUZGY2tNN1FVRkRRVHRCUVVOQk96dEJRVVZCTERKQ1FVRXlRanRCUVVNelFqdEJRVU5CTzBGQlEwRTdRVUZEUVN3MFFrRkJORUlzVlVGQlZUczdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3p0QlEzWk1kRU03UVVGRlR5eEpRVUZOUVN4UFFVRmlPMEZCUVVFN1FVRkJRVHRCUVVGQk96dEJRVU5KTEcxQ1FVRlpReXhKUVVGYUxFVkJRV3RDUXl4TlFVRnNRaXhGUVVFd1FqdEJRVUZCT3p0QlFVRkJPenRCUVVOMFFqdEJRVVZCTEZWQlFVdEVMRWxCUVV3c1IwRkJXVUVzU1VGQldqdEJRVU5CTEZWQlFVdERMRTFCUVV3c1IwRkJZMEVzVFVGQlpEczdRVUZGUVN4UlFVRkpMRTFCUVV0QkxFMUJRVXdzUTBGQldVTXNUVUZCV2l4RFFVRnRRa01zUzBGQmJrSXNTVUZCTkVJc1EwRkJhRU1zUlVGQmJVTTdRVUZETDBJc1dVRkJTME1zVTBGQlREdEJRVU5JT3p0QlFWSnhRanRCUVZONlFqczdRVUZXVER0QlFVRkJPMEZCUVVFc1owTkJXV2RDTzBGQlExSXNWMEZCUzBnc1RVRkJUQ3hEUVVGWlNTeEpRVUZhTEVOQlFXbENPMEZCUTJKRExHRkJRVXNzUlVGQlJTeFhRVVJOTzBGQlJXSkRMRmxCUVVrc1JVRkJSVHRCUVVOR1F5eHBRa0ZCVHl4RlFVRkZMRXRCUVV0U08wRkJSRm83UVVGR1R5eFBRVUZxUWp0QlFVMUlPMEZCYmtKTU96dEJRVUZCTzBGQlFVRXNSVUZCTmtKVExEWkVRVUUzUWl4Rk96czdPenM3T3pzN096czdPenM3T3pzN096czdPenRCUTBaQk8wRkJRMEU3UVVGRFFUdEJRVVZQTEVsQlFVMURMRkZCUVdJN1FVRkJRVHRCUVVGQk8wRkJRMGtzYzBKQlFXTTdRVUZCUVRzN1FVRkRWaXhUUVVGTFF5eFJRVUZNTEVkQlFXZENMRVZCUVdoQ08wRkJRMGc3TzBGQlNFdzdRVUZCUVR0QlFVRkJMSGRDUVV0UldDeEpRVXhTTEVWQlMyTkRMRTFCVEdRc1JVRkxjMEk3UVVGRFpDeFZRVUZKTEVOQlFVTXNTMEZCUzFVc1VVRkJUQ3hEUVVGaldDeEpRVUZrTEVOQlFVd3NSVUZCTUVJN1FVRkRkRUlzWVVGQlMxY3NVVUZCVEN4RFFVRmpXQ3hKUVVGa0xFbEJRWE5DV1N4aFFVRmhMRU5CUVVOYUxFbEJRVVFzUlVGQlQwTXNUVUZCVUN4RFFVRnVRenRCUVVOSU96dEJRVU5FTEdGQlFVOHNTMEZCUzFVc1VVRkJUQ3hEUVVGaldDeEpRVUZrTEVOQlFWQTdRVUZEU0R0QlFWWk1PMEZCUVVFN1FVRkJRU3d3UWtGWlZUdEJRVU5HTEdGQlFVOWhMRTFCUVUwc1EwRkJRME1zU1VGQlVDeERRVUZaTEV0QlFVdElMRkZCUVdwQ0xFTkJRVkE3UVVGRFNEdEJRV1JNTzBGQlFVRTdRVUZCUVN4NVFrRm5RbE5ZTEVsQmFFSlVMRVZCWjBKbE8wRkJRMUFzWVVGQlR5eExRVUZMVnl4UlFVRk1MRU5CUVdOWUxFbEJRV1FzUTBGQlVEdEJRVU5JTzBGQmJFSk1PMEZCUVVFN1FVRkJRU3d5UWtGdlFsZEJMRWxCY0VKWUxFVkJiMEpwUWp0QlFVTlVMRlZCUVVsUkxFOUJRVThzUjBGQlJ5eExRVUZMUnl4UlFVRk1MRU5CUVdOWUxFbEJRV1FzUTBGQlpEdEJRVU5CTEdGQlFVOHNTMEZCUzFjc1VVRkJUQ3hEUVVGaldDeEpRVUZrTEVOQlFWQTdRVUZEUVN4aFFVRlBVU3hQUVVGUU8wRkJRMGc3UVVGNFFrdzdRVUZCUVR0QlFVRkJMR2REUVRCQ1owSTdRVUZEVWl4WFFVRkxMRWxCUVVsUExFTkJRVlFzU1VGQll5eExRVUZMU2l4UlFVRnVRaXhGUVVFMlFqdEJRVU42UWl4aFFVRkxRU3hSUVVGTUxFTkJRV05KTEVOQlFXUXNSVUZCYVVKWUxGTkJRV3BDTzBGQlEwZzdRVUZGU2p0QlFTOUNURHM3UVVGQlFUdEJRVUZCT3p0QlFXdERRU3hUUVVGVFVTeGhRVUZVTEVOQlFYVkNXaXhKUVVGMlFpeEZRVUUyUWtNc1RVRkJOMElzUlVGQmNVTTdRVUZEYWtNc1RVRkJTVVFzU1VGQlNTeERRVUZEWjBJc1QwRkJUQ3hEUVVGaExGVkJRV0lzVFVGQk5rSXNRMEZCYWtNc1JVRkJiME03UVVGRGFFTXNWMEZCVHl4SlFVRkpReXdyUkVGQlNpeERRVUZ0UW1wQ0xFbEJRVzVDTEVWQlFYbENReXhOUVVGNlFpeERRVUZRTzBGQlEwZ3NSMEZHUkN4TlFVVlBMRWxCUVVsRUxFbEJRVWtzUTBGQlEyZENMRTlCUVV3c1EwRkJZU3hYUVVGaUxFMUJRVGhDTEVOQlFXeERMRVZCUVhGRE8wRkJRM2hETEZkQlFVOHNTVUZCU1VVc2FVVkJRVW9zUTBGQmIwSnNRaXhKUVVGd1FpeEZRVUV3UWtNc1RVRkJNVUlzUTBGQlVEdEJRVU5JTEVkQlJrMHNUVUZGUVR0QlFVTklMRmRCUVU4c1NVRkJTVVlzWjBSQlFVb3NRMEZCV1VNc1NVRkJXaXhGUVVGclFrTXNUVUZCYkVJc1EwRkJVRHRCUVVOSU8wRkJRMG9zUXpzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPMEZET1VORU8wRkJSVThzU1VGQlRXbENMR1ZCUVdJN1FVRkJRVHRCUVVGQk8wRkJRVUU3TzBGQlEwa3NNa0pCUVZsc1FpeEpRVUZhTEVWQlFXdENReXhOUVVGc1FpeEZRVUV3UWp0QlFVRkJPenRCUVVGQk96dEJRVU4wUWp0QlFVVkJMRlZCUVV0RUxFbEJRVXdzUjBGQldVRXNTVUZCV2p0QlFVTkJMRlZCUVV0RExFMUJRVXdzUjBGQlkwRXNUVUZCWkR0QlFVTkJMRlZCUVV0clFpeEpRVUZNTEVkQlFWa3NTVUZCV2pzN1FVRkZRU3hSUVVGSkxFMUJRVXRzUWl4TlFVRk1MRU5CUVZsRExFMUJRVm9zUTBGQmJVSkRMRXRCUVc1Q0xFbEJRVFJDTEVOQlFXaERMRVZCUVcxRE8wRkJReTlDTEZsQlFVdERMRk5CUVV3N1FVRkRTRHM3UVVGVWNVSTdRVUZWZWtJN08wRkJXRXc3UVVGQlFUdEJRVUZCTEdkRFFXRm5RanRCUVVGQk96dEJRVU5TTEZkQlFVdElMRTFCUVV3c1EwRkJXV3RDTEVsQlFWb3NRMEZCYVVJc1MwRkJTMjVDTEVsQlFYUkNMRVZCUVRSQ0xGVkJRVU52UWl4RFFVRkVMRVZCUVU4N1FVRkRMMElzWTBGQlNTeERRVUZEUkN4SlFVRk1MRWRCUVZsRExFTkJRVU1zUTBGQlEySXNTVUZCUml4RFFVRlBXU3hKUVVGdVFqczdRVUZGUVN4alFVRkpMRU5CUVVOc1FpeE5RVUZNTEVOQlFWbEpMRWxCUVZvc1EwRkJhVUk3UVVGRFlrTXNaVUZCU3l4RlFVRkZMRmRCUkUwN1FVRkZZa01zWTBGQlNTeEZRVUZGTzBGQlEwWkRMRzFDUVVGUExFVkJRVVVzVFVGQlNTeERRVUZEVWl4SlFVUmFPMEZCUlVadFFpeG5Ra0ZCU1N4RlFVRkZMRTFCUVVrc1EwRkJRMEVzU1VGR1ZEdEJRVWRHUlN4M1FrRkJXU3hGUVVGRlJDeERRVUZETEVOQlFVTmlMRWxCUVVZc1EwRkJUMk03UVVGSWJrSTdRVUZHVHl4VFFVRnFRanRCUVZGSUxFOUJXRVE3UVVGWlNEdEJRVEZDVERzN1FVRkJRVHRCUVVGQkxFVkJRWEZEV2l3MlJFRkJja01zUlRzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPMEZEUmtFN1FVRkZUeXhKUVVGTlVTeGpRVUZpTzBGQlFVRTdRVUZCUVR0QlFVRkJPenRCUVVOSkxEQkNRVUZaYWtJc1NVRkJXaXhGUVVGclFrTXNUVUZCYkVJc1JVRkJNRUk3UVVGQlFUczdRVUZCUVRzN1FVRkRkRUk3UVVGRlFTeFZRVUZMUkN4SlFVRk1MRWRCUVZsQkxFbEJRVm83UVVGRFFTeFZRVUZMUXl4TlFVRk1MRWRCUVdOQkxFMUJRV1E3UVVGRFFTeFZRVUZMYTBJc1NVRkJUQ3hIUVVGWkxFbEJRVm83TzBGQlJVRXNVVUZCU1N4TlFVRkxiRUlzVFVGQlRDeERRVUZaUXl4TlFVRmFMRU5CUVcxQ1F5eExRVUZ1UWl4SlFVRTBRaXhEUVVGb1F5eEZRVUZ0UXp0QlFVTXZRaXhaUVVGTFF5eFRRVUZNTzBGQlEwZzdPMEZCVkhGQ08wRkJWWHBDT3p0QlFWaE1PMEZCUVVFN1FVRkJRU3huUTBGaFowSTdRVUZCUVRzN1FVRkRVaXhYUVVGTFNDeE5RVUZNTEVOQlFWbHJRaXhKUVVGYUxFTkJRV2xDTEV0QlFVdHVRaXhKUVVGMFFpeEZRVUUwUWl4VlFVRkRiMElzUTBGQlJDeEZRVUZQTzBGQlF5OUNMR05CUVVrc1EwRkJRMFFzU1VGQlRDeEhRVUZaUXl4RFFVRkRMRU5CUVVOaUxFbEJRVVlzUTBGQlQxa3NTVUZCYmtJN08wRkJSVUVzWTBGQlNTeERRVUZEYkVJc1RVRkJUQ3hEUVVGWlNTeEpRVUZhTEVOQlFXbENPMEZCUTJKRExHVkJRVXNzUlVGQlJTeFhRVVJOTzBGQlJXSkRMR05CUVVrc1JVRkJSVHRCUVVOR1F5eHRRa0ZCVHl4RlFVRkZMRTFCUVVrc1EwRkJRMUlzU1VGRVdqdEJRVVZHYlVJc1owSkJRVWtzUlVGQlJTeE5RVUZKTEVOQlFVTkJPMEZCUmxRN1FVRkdUeXhUUVVGcVFqdEJRVTlJTEU5QlZrUTdRVUZYU0R0QlFYcENURHM3UVVGQlFUdEJRVUZCTEVWQlFXOURWaXcyUkVGQmNFTXNSVHM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN08wRkRSa0U3UVVGRlR5eEpRVUZOWVN4TlFVRmlPMEZCUVVFN1FVRkJRVHRCUVVGQk96dEJRVU5KTEd0Q1FVRlpja0lzVFVGQldpeEZRVUZ2UW5OQ0xFbEJRWEJDTEVWQlFUQkNPMEZCUVVFN08wRkJRVUU3TzBGQlEzUkNPMEZCUlVFc1ZVRkJTM1JDTEUxQlFVd3NSMEZCWTBFc1RVRkJaRHRCUVVOQkxGVkJRVXRETEUxQlFVd3NSMEZCWXl4SlFVRkpjMElzVTBGQlNpeERRVUZqUkN4SlFVRkpMRWRCUVVjc1IwRkJVQ3hIUVVGaExFMUJRVXQwUWl4TlFVRk1MRU5CUVZsM1FpeEhRVUYyUXl4RFFVRmtPenRCUVVWQkxGVkJRVXRETEdGQlFVdzdPMEZCVG5OQ08wRkJUM3BDT3p0QlFWSk1PMEZCUVVFN1FVRkJRU3h2UTBGVmIwSTdRVUZCUVRzN1FVRkRXaXhYUVVGTGVFSXNUVUZCVEN4RFFVRlplVUlzVFVGQldpeEhRVUZ4UWl4WlFVRk5PMEZCUTNaQ0xHTkJRVWtzUTBGQlEwTXNUVUZCVER0QlFVTklMRTlCUmtRN08wRkJSMEVzVjBGQlN6RkNMRTFCUVV3c1EwRkJXVEpDTEU5QlFWb3NSMEZCYzBJc1ZVRkJRME1zUzBGQlJDeEZRVUZYTzBGQlF6ZENMR05CUVVrc1EwRkJRME1zVDBGQlRDeERRVUZoUkN4TFFVRmlPMEZCUTBnc1QwRkdSRHM3UVVGSFFTeFhRVUZMTlVJc1RVRkJUQ3hEUVVGWk9FSXNUMEZCV2l4SFFVRnpRaXhWUVVGRFF5eFZRVUZFTEVWQlFXZENPMEZCUTJ4RExHTkJRVWtzUTBGQlEwTXNUMEZCVEN4RFFVRmhSQ3hWUVVGaU8wRkJRMGdzVDBGR1JEczdRVUZIUVN4WFFVRkxMMElzVFVGQlRDeERRVUZaYVVNc1UwRkJXaXhIUVVGM1FpeFZRVUZEUXl4UFFVRkVMRVZCUVdFN1FVRkRha01zWTBGQlNTeERRVUZEUXl4VFFVRk1MRU5CUVdWRUxFOUJRV1k3UVVGRFNDeFBRVVpFTzBGQlIwZzdRVUYyUWt3N1FVRkJRVHRCUVVGQkxEWkNRWGxDWVR0QlFVRkJPenRCUVVOTU8wRkJRMEVzVjBGQlMycERMRXRCUVV3c1IwRkJZU3hEUVVGaU8wRkJSVUVzVjBGQlMyMURMRWxCUVV3c1EwRkJWU3hYUVVGV0xFVkJRWFZDTEZWQlFVTnNRaXhEUVVGRUxFVkJRVTg3UVVGRE1VSXNZMEZCU1N4RFFVRkRiRUlzVFVGQlRDeERRVUZaY1VNc1UwRkJXaXhIUVVGM1FtNUNMRU5CUVVNc1EwRkJRMjFDTEZOQlFURkNPMEZCUTBFc1kwRkJTU3hEUVVGRGNFTXNTMEZCVEN4SFFVRmhMRU5CUVdJc1EwRkdNRUlzUTBGSk1VSTdPMEZCUTBFc1kwRkJTU3hEUVVGRFJpeE5RVUZNTEVOQlFWbFZMRkZCUVZvc1EwRkJjVUpRTEZOQlFYSkNPMEZCUTBnc1QwRk9SRHRCUVZGQkxGZEJRVXRyUXl4SlFVRk1MRU5CUVZVc2JVSkJRVllzUlVGQkswSXNWVUZCUTJ4Q0xFTkJRVVFzUlVGQlR6dEJRVU5zUXl4alFVRkpMRU5CUVVOcVFpeExRVUZNTEVkQlFXRXNRMEZCUXl4RFFVRmtPMEZCUTBGeFF5eGxRVUZQTEVOQlFVTldMRXRCUVZJc1EwRkJZMVlzUTBGQlF5eERRVUZEVlN4TFFVRm9RanRCUVVOSUxFOUJTRVE3UVVGTFFUczdPMEZCUjBnN1FVRTNRMHc3UVVGQlFUdEJRVUZCTERSQ1FTdERXVUVzUzBFdlExb3NSVUVyUTIxQ08wRkJRMWhWTEdGQlFVOHNRMEZCUTFZc1MwRkJVaXhEUVVGalFTeExRVUZrTzBGQlEwZzdRVUZxUkV3N1FVRkJRVHRCUVVGQkxEUkNRVzFFV1Vjc1ZVRnVSRm9zUlVGdFJIZENPMEZCUTJoQ0xGVkJRVWtzUzBGQlN5OUNMRTFCUVV3c1EwRkJXWFZETEZWQlFWb3NTVUZCTUVKcVFpeFRRVUZUTEVOQlFVTnJRaXhOUVVGNFF5eEZRVUZuUkR0QlFVTTFReXhaUVVGSlZDeFZRVUZWTEVOQlFVTlZMRWxCUVZnc1NVRkJiVUlzVDBGQmRrSXNSVUZCWjBNN1FVRkROVUpJTEdsQ1FVRlBMRU5CUVVOV0xFdEJRVklzUTBGQll5eGxRVUZrTzBGQlEwZ3NVMEZHUkN4TlFVVlBMRWxCUVVsSExGVkJRVlVzUTBGQlExVXNTVUZCV0N4SlFVRnRRaXhUUVVGMlFpeEZRVUZyUXp0QlFVTnlRMGdzYVVKQlFVOHNRMEZCUTFZc1MwRkJVaXhEUVVGalJ5eFZRVUZWTEVOQlFVTXhRaXhKUVVGNlFqdEJRVU5JTEZOQlJrMHNUVUZGUVR0QlFVTklhVU1zYVVKQlFVOHNRMEZCUTFZc1MwRkJVaXhEUVVGakxFOUJRV1E3UVVGRFNEdEJRVU5LTzBGQlEwbzdRVUUzUkV3N1FVRkJRVHRCUVVGQkxEaENRU3RFWTAwc1QwRXZSR1FzUlVFclJIVkNPMEZCUTJZc1ZVRkJTVkVzUzBGQlN5eEhRVUZIUXl4SlFVRkpMRU5CUVVORExFdEJRVXdzUTBGQlYxWXNUMEZCVHl4RFFVRkROMElzU1VGQmJrSXNRMEZCV2p0QlFVTkJMRlZCUVVsRUxFdEJRVXNzUjBGQlIzTkRMRXRCUVVzc1EwRkJRM1JETEV0QlFXeENPMEZCUTBFc1ZVRkJTVU1zU1VGQlNTeEhRVUZIY1VNc1MwRkJTeXhEUVVGRGNrTXNTVUZCYWtJN08wRkJSVUVzVlVGQlNYRkRMRXRCUVVzc1EwRkJRM0JETEU5QlFVNHNTMEZCYTBKMVF5eFRRVUYwUWl4RlFVRnBRenRCUVVNM1FpeGhRVUZMT1VNc1RVRkJUQ3hEUVVGWlZTeFJRVUZhTEVOQlFYRkNjVU1zU1VGQmNrSXNRMEZCTUVKS0xFdEJRVXNzUTBGQlEzQkRMRTlCUVdoRExFVkJRWGxEZVVNc1NVRkJla01zUTBGQk9FTXpReXhMUVVFNVF5eEZRVUZ4UkVNc1NVRkJja1E3UVVGRFNDeFBRVVpFTEUxQlJVODdRVUZEU0N4aFFVRkxNRU1zU1VGQlRDeERRVUZWTTBNc1MwRkJWaXhGUVVGcFFrTXNTVUZCYWtJN1FVRkRTRHRCUVVWS08wRkJNVVZNTzBGQlFVRTdRVUZCUVN4NVFrRTBSVk15UXl4SlFUVkZWQ3hGUVRSRlpUdEJRVU5RTEZWQlFVa3NTMEZCU3k5RExFdEJRVXdzUzBGQlpTeERRVUZETEVOQlFYQkNMRVZCUVhWQ08wRkJRMjVDTEdGQlFVdEVMRTFCUVV3c1EwRkJXVWNzU1VGQldpeERRVUZwUW5kRExFbEJRVWtzUTBGQlEwMHNVMEZCVEN4RFFVRmxSQ3hKUVVGbUxFTkJRV3BDTzBGQlEwZzdRVUZEU2p0QlFXaEdURHM3UVVGQlFUdEJRVUZCTEVWQlFUUkNla01zTmtSQlFUVkNMRVU3T3pzN096czdPenM3T3pzN096czdPenM3TzBGRFJrOHNTVUZCVFRKRExHZENRVUZpTzBGQlFVRTdRVUZCUVR0QlFVTkpMRGhDUVVGak8wRkJRVUU3TzBGQlExWXNVMEZCUzBNc1ZVRkJUQ3hIUVVGclFpeEZRVUZzUWp0QlFVTklPenRCUVVoTU8wRkJRVUU3UVVGQlFTeDNRa0ZMVVhKRUxFbEJURklzUlVGTFl6dEJRVU5PTEdGQlFVOHNTMEZCUzNGRUxGVkJRVXdzUTBGQlowSkRMRTFCUVUwc1EwRkJRM1JFTEVsQlFVUXNRMEZCZEVJc1EwRkJVRHRCUVVOSU8wRkJVRXc3UVVGQlFUdEJRVUZCTEhkQ1FWTlJRU3hKUVZSU0xFVkJVMk4xUkN4UlFWUmtMRVZCVTNkQ1F5eFBRVlI0UWl4RlFWTnBRenRCUVVONlFpeFZRVUZKUXl4cFFrRkJhVUlzUjBGQlIwZ3NUVUZCVFN4RFFVRkRkRVFzU1VGQlJDeERRVUU1UWp0QlFVTkJMRmRCUVV0eFJDeFZRVUZNTEVOQlFXZENTU3hwUWtGQmFFSXNTVUZCY1VNc1MwRkJTMG9zVlVGQlRDeERRVUZuUWtrc2FVSkJRV2hDTEV0QlFYTkRMRVZCUVRORk96dEJRVU5CTEZkQlFVdEtMRlZCUVV3c1EwRkJaMEpKTEdsQ1FVRm9RaXhGUVVGdFEwTXNTVUZCYmtNc1EwRkJkME03UVVGRGNFTkRMRlZCUVVVc1JVRkJSVW9zVVVGRVowTTdRVUZGY0VORExHVkJRVThzUlVGQlJVRTdRVUZHTWtJc1QwRkJlRU03UVVGSlNEdEJRV2hDVER0QlFVRkJPMEZCUVVFc01rSkJhMEpYZUVRc1NVRnNRbGdzUlVGclFtbENkVVFzVVVGc1FtcENMRVZCYTBJeVFrTXNUMEZzUWpOQ0xFVkJhMEp2UXp0QlFVTTFRaXhWUVVGSkxFTkJRVU40UkN4SlFVRkVMRWxCUVZNc1EwRkJRM1ZFTEZGQlFWWXNTVUZCYzBJc1EwRkJRME1zVDBGQk0wSXNSVUZCYjBNN1FVRkRhRU1zWVVGQlMwZ3NWVUZCVEN4SFFVRnJRaXhGUVVGc1FqdEJRVU5CTzBGQlEwZzdPMEZCUlVRc1ZVRkJTVThzUzBGQlN5eEhRVUZITlVRc1NVRkJTU3hIUVVGSExFTkJRVU56UkN4TlFVRk5MRU5CUVVOMFJDeEpRVUZFTEVOQlFWQXNRMEZCU0N4SFFVRnZRbUVzVFVGQlRTeERRVUZEUXl4SlFVRlFMRU5CUVZrc1MwRkJTM1ZETEZWQlFXcENMRU5CUVhCRE96dEJRVVZCTEZWQlFVbEZMRkZCUVZFc1NVRkJTVU1zVDBGQmFFSXNSVUZCZVVJN1FVRkRja0lzWVVGQlMwc3NZMEZCVEN4RFFVRnZRa1FzUzBGQmNFSXNSVUZCTWtKTUxGRkJRVE5DTEVWQlFYRkRReXhQUVVGeVF6dEJRVU5JTEU5QlJrUXNUVUZGVHp0QlFVTklMR0ZCUVV0TkxHdENRVUZNTEVOQlFYZENSaXhMUVVGNFFqdEJRVU5JTzBGQlEwbzdRVUV2UWt3N1FVRkJRVHRCUVVGQkxHMURRV2xEYlVKQkxFdEJha051UWl4RlFXbERNRUpNTEZGQmFrTXhRaXhGUVdsRGIwTkRMRTlCYWtOd1F5eEZRV2xETmtNN1FVRkRja01zVjBGQlN5eEpRVUZKZUVRc1NVRkJWQ3hKUVVGcFFqUkVMRXRCUVdwQ0xFVkJRWGRDTzBGQlEzQkNMR0ZCUVVzc1NVRkJTVzVETEVkQlFWUXNTVUZCWjBJc1MwRkJTelJDTEZWQlFVd3NRMEZCWjBKeVJDeEpRVUZvUWl4RFFVRm9RaXhGUVVGMVF6dEJRVU51UXl4alFVRkpMRXRCUVV0eFJDeFZRVUZNTEVOQlFXZENja1FzU1VGQmFFSXNSVUZCYzBKNVFpeEhRVUYwUWl4RlFVRXlRbXRETEVWQlFUTkNMRWxCUVdsRFNpeFJRVUZxUXl4SlFVRTJReXhMUVVGTFJpeFZRVUZNTEVOQlFXZENja1FzU1VGQmFFSXNSVUZCYzBKNVFpeEhRVUYwUWl4RlFVRXlRaXRDTEU5QlFUTkNMRWxCUVhORFFTeFBRVUYyUml4RlFVRm5SenRCUVVNMVJpeHRRa0ZCVHl4TFFVRkxTQ3hWUVVGTUxFTkJRV2RDY2tRc1NVRkJhRUlzUlVGQmMwSjVRaXhIUVVGMFFpeERRVUZRTzBGQlEwZzdRVUZEU2pzN1FVRkZSQ3haUVVGSkxFdEJRVXMwUWl4VlFVRk1MRU5CUVdkQ2NrUXNTVUZCYUVJc1JVRkJjMElyUkN4TlFVRjBRaXhMUVVGcFF5eERRVUZ5UXl4RlFVRjNRenRCUVVOd1F5eHBRa0ZCVHl4TFFVRkxWaXhWUVVGTUxFTkJRV2RDY2tRc1NVRkJhRUlzUTBGQlVEdEJRVU5JTzBGQlEwbzdRVUZEU2p0QlFUZERURHRCUVVGQk8wRkJRVUVzZFVOQkswTjFRalJFTEV0QkwwTjJRaXhGUVN0RE9FSTdRVUZEZEVJc1YwRkJTeXhKUVVGSk5VUXNTVUZCVkN4SlFVRnBRalJFTEV0QlFXcENMRVZCUVhkQ08wRkJRM0JDTEdWQlFVOHNTMEZCUzFBc1ZVRkJUQ3hEUVVGblFuSkVMRWxCUVdoQ0xFTkJRVkE3UVVGRFNEdEJRVU5LTzBGQmJrUk1PenRCUVVGQk8wRkJRVUU3TzBGQmMwUkJMRk5CUVZOelJDeE5RVUZVTEVOQlFXZENkRVFzU1VGQmFFSXNSVUZCYzBJN1FVRkRiRUlzVTBGQlR5eE5RVUZOUVN4SlFVRmlPMEZCUTBnc1F6czdPenM3T3pzN096czdPenM3T3pzN096czdPMEZEZUVSRU8wRkJSVThzU1VGQlRWTXNWVUZCWWp0QlFVRkJPMEZCUVVFN1FVRkRTU3gzUWtGQll6dEJRVUZCT3p0QlFVTldMRk5CUVV0MVJDeFRRVUZNTEVkQlFXbENMRWxCUVVsYUxHMUZRVUZLTEVWQlFXcENPMEZCUTBFc1UwRkJTMkVzWjBKQlFVd3NSMEZCZDBJc1JVRkJlRUk3UVVGRFNEczdRVUZLVER0QlFVRkJPMEZCUVVFc2VVSkJUVk5ETEZOQlRsUXNSVUZOYjBKWUxGRkJUbkJDTEVWQlRUaENReXhQUVU0NVFpeEZRVTExUXp0QlFVTXZRaXhYUVVGTFVTeFRRVUZNTEVOQlFXVkhMRWRCUVdZc1EwRkJiVUpFTEZOQlFXNUNMRVZCUVRoQ1dDeFJRVUU1UWl4RlFVRjNRME1zVDBGQmVFTTdRVUZEUVN4aFFVRlBMRWxCUVZBN1FVRkRTRHRCUVZSTU8wRkJRVUU3UVVGQlFTeG5RMEZYWjBKRUxGRkJXR2hDTEVWQlZ6QkNPMEZCUTJ4Q0xGZEJRVXRWTEdkQ1FVRk1MRU5CUVhOQ1VDeEpRVUYwUWl4RFFVRXlRa2dzVVVGQk0wSTdRVUZEUVN4aFFVRlBMRWxCUVZBN1FVRkRTRHRCUVdSTU8wRkJRVUU3UVVGQlFTd3lRa0ZuUWxkWExGTkJhRUpZTEVWQlowSnpRbGdzVVVGb1FuUkNMRVZCWjBKblEwTXNUMEZvUW1oRExFVkJaMEo1UXp0QlFVTnFReXhYUVVGTFVTeFRRVUZNTEVOQlFXVkpMRTFCUVdZc1EwRkJjMEpHTEZOQlFYUkNMRVZCUVdsRFdDeFJRVUZxUXl4RlFVRXlRME1zVDBGQk0wTTdRVUZEUVN4aFFVRlBMRWxCUVZBN1FVRkRTRHRCUVc1Q1REdEJRVUZCTzBGQlFVRXNhME5CY1VKclFrUXNVVUZ5UW14Q0xFVkJjVUkwUWp0QlFVTndRaXhWUVVGSkxFTkJRVU5CTEZGQlFVd3NSVUZCWlR0QlFVTllMR0ZCUVV0VkxHZENRVUZNTEVkQlFYZENMRVZCUVhoQ08wRkJRMEVzWlVGQlR5eEpRVUZRTzBGQlEwZzdPMEZCUlVRc1YwRkJTeXhKUVVGSmJFUXNRMEZCVkN4SlFVRmpMRXRCUVV0clJDeG5Ra0ZCYmtJc1JVRkJjVU03UVVGRGFrTXNXVUZCU1ZZc1VVRkJVU3hKUVVGSkxFdEJRVXRWTEdkQ1FVRk1MRU5CUVhOQ2JFUXNRMEZCZEVJc1EwRkJhRUlzUlVGQk1FTTdRVUZEZEVNc2FVSkJRVThzUzBGQlMydEVMR2RDUVVGTUxFTkJRWE5DYkVRc1EwRkJkRUlzUTBGQlVEdEJRVU5JTzBGQlEwbzdPMEZCUTBRc1lVRkJUeXhKUVVGUU8wRkJRMGc3UVVGcVEwdzdRVUZCUVR0QlFVRkJMR2xEUVcxRGFVSTdRVUZEVkN4WFFVRkxjMFFzVFVGQlREdEJRVU5CTEZkQlFVdERMR0ZCUVV3N1FVRkRRU3hoUVVGUExFbEJRVkE3UVVGRFNEdEJRWFpEVER0QlFVRkJPMEZCUVVFc2VVSkJlVU5UU2l4VFFYcERWQ3hGUVhsRGIwSXpSQ3hKUVhwRGNFSXNSVUY1UXpCQ08wRkJRMnhDTEZkQlFVc3NTVUZCU1ZFc1EwRkJReXhIUVVGSExFTkJRV0lzUlVGQlowSkJMRU5CUVVNc1IwRkJSeXhMUVVGTGEwUXNaMEpCUVV3c1EwRkJjMEpHTEUxQlFURkRMRVZCUVd0RWFFUXNRMEZCUXl4RlFVRnVSQ3hGUVVGMVJEdEJRVU51UkN4aFFVRkxhMFFzWjBKQlFVd3NRMEZCYzBKc1JDeERRVUYwUWl4RlFVRjVRbTFFTEZOQlFYcENMRVZCUVc5RE0wUXNTVUZCY0VNN1FVRkRTRHM3UVVGRlJDeFZRVUZKZVVRc1UwRkJVeXhIUVVGSExFdEJRVXRCTEZOQlFVd3NRMEZCWlU4c1IwRkJaaXhEUVVGdFFrd3NVMEZCYmtJc1EwRkJhRUk3TzBGQlEwRXNWVUZCU1VZc1UwRkJVeXhKUVVGSlFTeFRRVUZUTEVOQlFVTkVMRTFCUVZZc1IwRkJiVUlzUTBGQmNFTXNSVUZCZFVNN1FVRkRia01zWVVGQlN5eEpRVUZKYUVRc1JVRkJReXhIUVVGSExFTkJRV0lzUlVGQlowSkJMRVZCUVVNc1IwRkJSMmxFTEZOQlFWTXNRMEZCUTBRc1RVRkJPVUlzUlVGQmMwTm9SQ3hGUVVGRExFVkJRWFpETEVWQlFUSkRPMEZCUTNaRGFVUXNiVUpCUVZNc1EwRkJRMnBFTEVWQlFVUXNRMEZCVkN4RFFVRmhORU1zUlVGQllpeERRVUZuUW1Fc1NVRkJhRUlzUTBGQmNVSlNMRk5CUVZNc1EwRkJRMnBFTEVWQlFVUXNRMEZCVkN4RFFVRmhlVU1zVDBGQmJFTXNSVUZCTWtOcVJDeEpRVUV6UXp0QlFVTklPMEZCUTBvN08wRkJSVVFzWVVGQlR5eEpRVUZRTzBGQlEwZzdRVUYwUkV3N08wRkJRVUU3UVVGQlFTeEpPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN08wRkRSa0U3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZGVHl4SlFVRk5hMFVzVFVGQllqdEJRVUZCTzBGQlFVRTdRVUZEU1N4clFrRkJXVU1zVDBGQldpeEZRVUZ4UWtNc1QwRkJja0lzUlVGQk9FSTdRVUZCUVRzN1FVRkRNVUlzVTBGQlMwTXNWMEZCVEN4RFFVRnBRa1lzVDBGQmFrSTdRVUZGUVN4VFFVRkxha1FzUjBGQlRDeEhRVUZYYVVRc1QwRkJXRHRCUVVOQkxGTkJRVXRETEU5QlFVd3NSMEZCWlVFc1QwRkJUeXhKUVVGSkxFVkJRVEZDTzBGQlEwRXNVMEZCUzBVc1ZVRkJUQ3hIUVVGclFpeEpRVUZKY0VVc05rUkJRVW9zUlVGQmJFSTdRVUZEUVN4VFFVRkxSU3hSUVVGTUxFZEJRV2RDTEVsQlFVbEVMREpFUVVGS0xFVkJRV2hDTzBGQlJVRXNVMEZCUzI5RkxFOUJRVXc3UVVGRFNEczdRVUZXVER0QlFVRkJPMEZCUVVFc09FSkJXV003UVVGRFRpeFhRVUZMTlVVc1RVRkJUQ3hIUVVGakxFbEJRVWx2UWl4NVJFRkJTaXhEUVVGWExFbEJRVmdzUlVGQmFVSXNTMEZCUzNGRUxFOUJRVXdzUTBGQllYQkVMRWxCUVRsQ0xFTkJRV1E3UVVGRFNEdEJRV1JNTzBGQlFVRTdRVUZCUVN3NFFrRm5RbU4zUkN4WlFXaENaQ3hGUVdkQ05FSTdRVUZEY0VJc1lVRkJUeXhMUVVGTGNFVXNVVUZCVEN4RFFVRmpkMFFzUjBGQlpDeERRVUZyUWxrc1dVRkJiRUlzUlVGQlowTXNTVUZCYUVNc1EwRkJVRHRCUVVOSU8wRkJiRUpNTzBGQlFVRTdRVUZCUVN4blEwRnZRbWRDUVN4WlFYQkNhRUlzUlVGdlFqaENPMEZCUTNSQ0xGZEJRVXR3UlN4UlFVRk1MRU5CUVdONVJDeE5RVUZrTEVOQlFYRkNWeXhaUVVGeVFqdEJRVU5JTzBGQmRFSk1PMEZCUVVFN1FVRkJRU3hyUTBGM1FtdENPMEZCUTFZc1lVRkJUeXhMUVVGTE4wVXNUVUZCVEN4RFFVRlpRU3hOUVVGYUxFTkJRVzFDY1VNc1UwRkJNVUk3UVVGRFNEdEJRVEZDVER0QlFVRkJPMEZCUVVFc2VVSkJORUpUVnl4SlFUVkNWQ3hGUVRSQ1pUdEJRVU5RTEZkQlFVdG9SQ3hOUVVGTUxFTkJRVmxITEVsQlFWb3NRMEZCYVVJMlF5eEpRVUZxUWp0QlFVTklPMEZCT1VKTU8wRkJRVUU3UVVGQlFTeG5RMEZuUTJkQ2VrSXNSMEZvUTJoQ0xFVkJaME54UWp0QlFVTmlMR0ZCUVU4c1NVRkJVRHRCUVVOSU8wRkJiRU5NTzBGQlFVRTdRVUZCUVN4NVFrRnZRMU42UWl4SlFYQkRWQ3hGUVc5RFpYVkVMRkZCY0VObUxFVkJiME41UWp0QlFVTnFRaXhWUVVGSmVVSXNUVUZCVFN4SFFVRkhMRXRCUVV0TUxFOUJRVXdzUTBGQllYaEVMRWxCUVdJc1EwRkJhMEkyUkN4TlFVRnNRaXhKUVVFMFFpeE5RVUY2UXp0QlFVTkJMRlZCUVVsNlJTeEpRVUZKTEVkQlFVY3NSVUZCV0R0QlFVTkJMRlZCUVVrd1JTeE5RVUZOTEVkQlFVY3NSVUZCWWpzN1FVRkZRU3hWUVVGSlJDeE5RVUZOTEVsQlFVa3NUVUZCWkN4RlFVRnpRanRCUVVOc1FucEZMRmxCUVVrc1IwRkJSMDBzVFVGQlRTeERRVUZEY1VVc1RVRkJVQ3hEUVVGak8wRkJRMnBDU0N4elFrRkJXU3hGUVVGRkwwVXNTVUZFUnp0QlFVVnFRblZETEcxQ1FVRlRMRVZCUVVVc1MwRkJTelJETEZkQlFVdzdRVUZHVFN4VFFVRmtMRU5CUVZBN1FVRkpTQ3hQUVV4RUxFMUJTMDg3UVVGRFNFWXNZMEZCVFN4SFFVRkhjRVVzVFVGQlRTeERRVUZEY1VVc1RVRkJVQ3hEUVVGak8wRkJRMjVDU0N4elFrRkJXU3hGUVVGRkwwVXNTVUZFU3p0QlFVVnVRblZETEcxQ1FVRlRMRVZCUVVVc1MwRkJTelJETEZkQlFVdzdRVUZHVVN4VFFVRmtMRU5CUVZRN1FVRkpTRHM3UVVGRlJFTXNhMFJCUVVzc1EwRkJRenRCUVVOR1F5eFhRVUZITEVWQlFVVXNTMEZCUzFZc1QwRkJUQ3hEUVVGaGVFUXNTVUZCWWl4RFFVRnJRbXRGTEVkQlJISkNPMEZCUlVaTUxHTkJRVTBzUlVGQlJVRXNUVUZHVGp0QlFVZEdUU3hsUVVGUExFVkJRVVVzUzBGQlMxZ3NUMEZCVEN4RFFVRmhlRVFzU1VGQllpeERRVUZyUW0xRkxFOUJRV3hDTEVsQlFUWkNMRVZCU0hCRE8wRkJTVVpNTEdOQlFVMHNSVUZCUlVFc1RVRktUanRCUVV0R01VVXNXVUZCU1N4RlFVRkZRVHRCUVV4S0xFOUJRVVFzUTBGQlRDeERRVTFIWjBZc1NVRk9TQ3hEUVUxUkxGVkJRVU51UlN4RFFVRkVMRVZCUVU4N1FVRkRXRzFETEdkQ1FVRlJMRU5CUVVOdVF5eERRVUZFTEVOQlFWSTdRVUZEU0N4UFFWSkVMRVZCVVVkdlJTeExRVkpJTEVOQlVWTXNWVUZCUTNCRkxFTkJRVVFzUlVGQlR6dEJRVU5hYjBJc1pVRkJUeXhEUVVGRFZpeExRVUZTTEVOQlFXTXNWMEZCWkR0QlFVTklMRTlCVmtRN1FVRlhTRHRCUVdoRlREczdRVUZCUVR0QlFVRkJPMEZCYlVWQk1rUXNUVUZCVFN4RFFVRkRhRUlzVFVGQlVDeEhRVUZuUWtFc1RVRkJhRUlzUXlJc0ltWnBiR1VpT2lKd2RYTm9aWEl1YW5NaUxDSnpiM1Z5WTJWelEyOXVkR1Z1ZENJNld5SWdYSFF2THlCVWFHVWdiVzlrZFd4bElHTmhZMmhsWEc0Z1hIUjJZWElnYVc1emRHRnNiR1ZrVFc5a2RXeGxjeUE5SUh0OU8xeHVYRzRnWEhRdkx5QlVhR1VnY21WeGRXbHlaU0JtZFc1amRHbHZibHh1SUZ4MFpuVnVZM1JwYjI0Z1gxOTNaV0p3WVdOclgzSmxjWFZwY21WZlh5aHRiMlIxYkdWSlpDa2dlMXh1WEc0Z1hIUmNkQzh2SUVOb1pXTnJJR2xtSUcxdlpIVnNaU0JwY3lCcGJpQmpZV05vWlZ4dUlGeDBYSFJwWmlocGJuTjBZV3hzWldSTmIyUjFiR1Z6VzIxdlpIVnNaVWxrWFNrZ2UxeHVJRngwWEhSY2RISmxkSFZ5YmlCcGJuTjBZV3hzWldSTmIyUjFiR1Z6VzIxdlpIVnNaVWxrWFM1bGVIQnZjblJ6TzF4dUlGeDBYSFI5WEc0Z1hIUmNkQzh2SUVOeVpXRjBaU0JoSUc1bGR5QnRiMlIxYkdVZ0tHRnVaQ0J3ZFhRZ2FYUWdhVzUwYnlCMGFHVWdZMkZqYUdVcFhHNGdYSFJjZEhaaGNpQnRiMlIxYkdVZ1BTQnBibk4wWVd4c1pXUk5iMlIxYkdWelcyMXZaSFZzWlVsa1hTQTlJSHRjYmlCY2RGeDBYSFJwT2lCdGIyUjFiR1ZKWkN4Y2JpQmNkRngwWEhSc09pQm1ZV3h6WlN4Y2JpQmNkRngwWEhSbGVIQnZjblJ6T2lCN2ZWeHVJRngwWEhSOU8xeHVYRzRnWEhSY2RDOHZJRVY0WldOMWRHVWdkR2hsSUcxdlpIVnNaU0JtZFc1amRHbHZibHh1SUZ4MFhIUnRiMlIxYkdWelcyMXZaSFZzWlVsa1hTNWpZV3hzS0cxdlpIVnNaUzVsZUhCdmNuUnpMQ0J0YjJSMWJHVXNJRzF2WkhWc1pTNWxlSEJ2Y25SekxDQmZYM2RsWW5CaFkydGZjbVZ4ZFdseVpWOWZLVHRjYmx4dUlGeDBYSFF2THlCR2JHRm5JSFJvWlNCdGIyUjFiR1VnWVhNZ2JHOWhaR1ZrWEc0Z1hIUmNkRzF2WkhWc1pTNXNJRDBnZEhKMVpUdGNibHh1SUZ4MFhIUXZMeUJTWlhSMWNtNGdkR2hsSUdWNGNHOXlkSE1nYjJZZ2RHaGxJRzF2WkhWc1pWeHVJRngwWEhSeVpYUjFjbTRnYlc5a2RXeGxMbVY0Y0c5eWRITTdYRzRnWEhSOVhHNWNibHh1SUZ4MEx5OGdaWGh3YjNObElIUm9aU0J0YjJSMWJHVnpJRzlpYW1WamRDQW9YMTkzWldKd1lXTnJYMjF2WkhWc1pYTmZYeWxjYmlCY2RGOWZkMlZpY0dGamExOXlaWEYxYVhKbFgxOHViU0E5SUcxdlpIVnNaWE03WEc1Y2JpQmNkQzh2SUdWNGNHOXpaU0IwYUdVZ2JXOWtkV3hsSUdOaFkyaGxYRzRnWEhSZlgzZGxZbkJoWTJ0ZmNtVnhkV2x5WlY5ZkxtTWdQU0JwYm5OMFlXeHNaV1JOYjJSMWJHVnpPMXh1WEc0Z1hIUXZMeUJrWldacGJtVWdaMlYwZEdWeUlHWjFibU4wYVc5dUlHWnZjaUJvWVhKdGIyNTVJR1Y0Y0c5eWRITmNiaUJjZEY5ZmQyVmljR0ZqYTE5eVpYRjFhWEpsWDE4dVpDQTlJR1oxYm1OMGFXOXVLR1Y0Y0c5eWRITXNJRzVoYldVc0lHZGxkSFJsY2lrZ2UxeHVJRngwWEhScFppZ2hYMTkzWldKd1lXTnJYM0psY1hWcGNtVmZYeTV2S0dWNGNHOXlkSE1zSUc1aGJXVXBLU0I3WEc0Z1hIUmNkRngwVDJKcVpXTjBMbVJsWm1sdVpWQnliM0JsY25SNUtHVjRjRzl5ZEhNc0lHNWhiV1VzSUhzZ1pXNTFiV1Z5WVdKc1pUb2dkSEoxWlN3Z1oyVjBPaUJuWlhSMFpYSWdmU2s3WEc0Z1hIUmNkSDFjYmlCY2RIMDdYRzVjYmlCY2RDOHZJR1JsWm1sdVpTQmZYMlZ6VFc5a2RXeGxJRzl1SUdWNGNHOXlkSE5jYmlCY2RGOWZkMlZpY0dGamExOXlaWEYxYVhKbFgxOHVjaUE5SUdaMWJtTjBhVzl1S0dWNGNHOXlkSE1wSUh0Y2JpQmNkRngwYVdZb2RIbHdaVzltSUZONWJXSnZiQ0FoUFQwZ0ozVnVaR1ZtYVc1bFpDY2dKaVlnVTNsdFltOXNMblJ2VTNSeWFXNW5WR0ZuS1NCN1hHNGdYSFJjZEZ4MFQySnFaV04wTG1SbFptbHVaVkJ5YjNCbGNuUjVLR1Y0Y0c5eWRITXNJRk41YldKdmJDNTBiMU4wY21sdVoxUmhaeXdnZXlCMllXeDFaVG9nSjAxdlpIVnNaU2NnZlNrN1hHNGdYSFJjZEgxY2JpQmNkRngwVDJKcVpXTjBMbVJsWm1sdVpWQnliM0JsY25SNUtHVjRjRzl5ZEhNc0lDZGZYMlZ6VFc5a2RXeGxKeXdnZXlCMllXeDFaVG9nZEhKMVpTQjlLVHRjYmlCY2RIMDdYRzVjYmlCY2RDOHZJR055WldGMFpTQmhJR1poYTJVZ2JtRnRaWE53WVdObElHOWlhbVZqZEZ4dUlGeDBMeThnYlc5a1pTQW1JREU2SUhaaGJIVmxJR2x6SUdFZ2JXOWtkV3hsSUdsa0xDQnlaWEYxYVhKbElHbDBYRzRnWEhRdkx5QnRiMlJsSUNZZ01qb2diV1Z5WjJVZ1lXeHNJSEJ5YjNCbGNuUnBaWE1nYjJZZ2RtRnNkV1VnYVc1MGJ5QjBhR1VnYm5OY2JpQmNkQzh2SUcxdlpHVWdKaUEwT2lCeVpYUjFjbTRnZG1Gc2RXVWdkMmhsYmlCaGJISmxZV1I1SUc1eklHOWlhbVZqZEZ4dUlGeDBMeThnYlc5a1pTQW1JRGg4TVRvZ1ltVm9ZWFpsSUd4cGEyVWdjbVZ4ZFdseVpWeHVJRngwWDE5M1pXSndZV05yWDNKbGNYVnBjbVZmWHk1MElEMGdablZ1WTNScGIyNG9kbUZzZFdVc0lHMXZaR1VwSUh0Y2JpQmNkRngwYVdZb2JXOWtaU0FtSURFcElIWmhiSFZsSUQwZ1gxOTNaV0p3WVdOclgzSmxjWFZwY21WZlh5aDJZV3gxWlNrN1hHNGdYSFJjZEdsbUtHMXZaR1VnSmlBNEtTQnlaWFIxY200Z2RtRnNkV1U3WEc0Z1hIUmNkR2xtS0NodGIyUmxJQ1lnTkNrZ0ppWWdkSGx3Wlc5bUlIWmhiSFZsSUQwOVBTQW5iMkpxWldOMEp5QW1KaUIyWVd4MVpTQW1KaUIyWVd4MVpTNWZYMlZ6VFc5a2RXeGxLU0J5WlhSMWNtNGdkbUZzZFdVN1hHNGdYSFJjZEhaaGNpQnVjeUE5SUU5aWFtVmpkQzVqY21WaGRHVW9iblZzYkNrN1hHNGdYSFJjZEY5ZmQyVmljR0ZqYTE5eVpYRjFhWEpsWDE4dWNpaHVjeWs3WEc0Z1hIUmNkRTlpYW1WamRDNWtaV1pwYm1WUWNtOXdaWEowZVNodWN5d2dKMlJsWm1GMWJIUW5MQ0I3SUdWdWRXMWxjbUZpYkdVNklIUnlkV1VzSUhaaGJIVmxPaUIyWVd4MVpTQjlLVHRjYmlCY2RGeDBhV1lvYlc5a1pTQW1JRElnSmlZZ2RIbHdaVzltSUhaaGJIVmxJQ0U5SUNkemRISnBibWNuS1NCbWIzSW9kbUZ5SUd0bGVTQnBiaUIyWVd4MVpTa2dYMTkzWldKd1lXTnJYM0psY1hWcGNtVmZYeTVrS0c1ekxDQnJaWGtzSUdaMWJtTjBhVzl1S0d0bGVTa2dleUJ5WlhSMWNtNGdkbUZzZFdWYmEyVjVYVHNnZlM1aWFXNWtLRzUxYkd3c0lHdGxlU2twTzF4dUlGeDBYSFJ5WlhSMWNtNGdibk03WEc0Z1hIUjlPMXh1WEc0Z1hIUXZMeUJuWlhSRVpXWmhkV3gwUlhod2IzSjBJR1oxYm1OMGFXOXVJR1p2Y2lCamIyMXdZWFJwWW1sc2FYUjVJSGRwZEdnZ2JtOXVMV2hoY20xdmJua2diVzlrZFd4bGMxeHVJRngwWDE5M1pXSndZV05yWDNKbGNYVnBjbVZmWHk1dUlEMGdablZ1WTNScGIyNG9iVzlrZFd4bEtTQjdYRzRnWEhSY2RIWmhjaUJuWlhSMFpYSWdQU0J0YjJSMWJHVWdKaVlnYlc5a2RXeGxMbDlmWlhOTmIyUjFiR1VnUDF4dUlGeDBYSFJjZEdaMWJtTjBhVzl1SUdkbGRFUmxabUYxYkhRb0tTQjdJSEpsZEhWeWJpQnRiMlIxYkdWYkoyUmxabUYxYkhRblhUc2dmU0E2WEc0Z1hIUmNkRngwWm5WdVkzUnBiMjRnWjJWMFRXOWtkV3hsUlhod2IzSjBjeWdwSUhzZ2NtVjBkWEp1SUcxdlpIVnNaVHNnZlR0Y2JpQmNkRngwWDE5M1pXSndZV05yWDNKbGNYVnBjbVZmWHk1a0tHZGxkSFJsY2l3Z0oyRW5MQ0JuWlhSMFpYSXBPMXh1SUZ4MFhIUnlaWFIxY200Z1oyVjBkR1Z5TzF4dUlGeDBmVHRjYmx4dUlGeDBMeThnVDJKcVpXTjBMbkJ5YjNSdmRIbHdaUzVvWVhOUGQyNVFjbTl3WlhKMGVTNWpZV3hzWEc0Z1hIUmZYM2RsWW5CaFkydGZjbVZ4ZFdseVpWOWZMbThnUFNCbWRXNWpkR2x2YmlodlltcGxZM1FzSUhCeWIzQmxjblI1S1NCN0lISmxkSFZ5YmlCUFltcGxZM1F1Y0hKdmRHOTBlWEJsTG1oaGMwOTNibEJ5YjNCbGNuUjVMbU5oYkd3b2IySnFaV04wTENCd2NtOXdaWEowZVNrN0lIMDdYRzVjYmlCY2RDOHZJRjlmZDJWaWNHRmphMTl3ZFdKc2FXTmZjR0YwYUY5ZlhHNGdYSFJmWDNkbFluQmhZMnRmY21WeGRXbHlaVjlmTG5BZ1BTQmNJbHdpTzF4dVhHNWNiaUJjZEM4dklFeHZZV1FnWlc1MGNua2diVzlrZFd4bElHRnVaQ0J5WlhSMWNtNGdaWGh3YjNKMGMxeHVJRngwY21WMGRYSnVJRjlmZDJWaWNHRmphMTl5WlhGMWFYSmxYMThvWDE5M1pXSndZV05yWDNKbGNYVnBjbVZmWHk1eklEMGdYQ0l1TDNOeVl5OXdkWE5vWlhJdWFuTmNJaWs3WEc0aUxDSnRiMlIxYkdVdVpYaHdiM0owY3lBOUlISmxjWFZwY21Vb0p5NHZiR2xpTDJGNGFXOXpKeWs3SWl3aUozVnpaU0J6ZEhKcFkzUW5PMXh1WEc1MllYSWdkWFJwYkhNZ1BTQnlaWEYxYVhKbEtDY3VMeTR1TDNWMGFXeHpKeWs3WEc1MllYSWdjMlYwZEd4bElEMGdjbVZ4ZFdseVpTZ25MaTh1TGk5amIzSmxMM05sZEhSc1pTY3BPMXh1ZG1GeUlHSjFhV3hrVlZKTUlEMGdjbVZ4ZFdseVpTZ25MaTh1TGk5b1pXeHdaWEp6TDJKMWFXeGtWVkpNSnlrN1hHNTJZWElnY0dGeWMyVklaV0ZrWlhKeklEMGdjbVZ4ZFdseVpTZ25MaTh1TGk5b1pXeHdaWEp6TDNCaGNuTmxTR1ZoWkdWeWN5Y3BPMXh1ZG1GeUlHbHpWVkpNVTJGdFpVOXlhV2RwYmlBOUlISmxjWFZwY21Vb0p5NHZMaTR2YUdWc2NHVnljeTlwYzFWU1RGTmhiV1ZQY21sbmFXNG5LVHRjYm5aaGNpQmpjbVZoZEdWRmNuSnZjaUE5SUhKbGNYVnBjbVVvSnk0dUwyTnZjbVV2WTNKbFlYUmxSWEp5YjNJbktUdGNiblpoY2lCaWRHOWhJRDBnS0hSNWNHVnZaaUIzYVc1a2IzY2dJVDA5SUNkMWJtUmxabWx1WldRbklDWW1JSGRwYm1SdmR5NWlkRzloSUNZbUlIZHBibVJ2ZHk1aWRHOWhMbUpwYm1Rb2QybHVaRzkzS1NrZ2ZId2djbVZ4ZFdseVpTZ25MaTh1TGk5b1pXeHdaWEp6TDJKMGIyRW5LVHRjYmx4dWJXOWtkV3hsTG1WNGNHOXlkSE1nUFNCbWRXNWpkR2x2YmlCNGFISkJaR0Z3ZEdWeUtHTnZibVpwWnlrZ2UxeHVJQ0J5WlhSMWNtNGdibVYzSUZCeWIyMXBjMlVvWm5WdVkzUnBiMjRnWkdsemNHRjBZMmhZYUhKU1pYRjFaWE4wS0hKbGMyOXNkbVVzSUhKbGFtVmpkQ2tnZTF4dUlDQWdJSFpoY2lCeVpYRjFaWE4wUkdGMFlTQTlJR052Ym1acFp5NWtZWFJoTzF4dUlDQWdJSFpoY2lCeVpYRjFaWE4wU0dWaFpHVnljeUE5SUdOdmJtWnBaeTVvWldGa1pYSnpPMXh1WEc0Z0lDQWdhV1lnS0hWMGFXeHpMbWx6Um05eWJVUmhkR0VvY21WeGRXVnpkRVJoZEdFcEtTQjdYRzRnSUNBZ0lDQmtaV3hsZEdVZ2NtVnhkV1Z6ZEVobFlXUmxjbk5iSjBOdmJuUmxiblF0Vkhsd1pTZGRPeUF2THlCTVpYUWdkR2hsSUdKeWIzZHpaWElnYzJWMElHbDBYRzRnSUNBZ2ZWeHVYRzRnSUNBZ2RtRnlJSEpsY1hWbGMzUWdQU0J1WlhjZ1dFMU1TSFIwY0ZKbGNYVmxjM1FvS1R0Y2JpQWdJQ0IyWVhJZ2JHOWhaRVYyWlc1MElEMGdKMjl1Y21WaFpIbHpkR0YwWldOb1lXNW5aU2M3WEc0Z0lDQWdkbUZ5SUhoRWIyMWhhVzRnUFNCbVlXeHpaVHRjYmx4dUlDQWdJQzh2SUVadmNpQkpSU0E0THprZ1EwOVNVeUJ6ZFhCd2IzSjBYRzRnSUNBZ0x5OGdUMjVzZVNCemRYQndiM0owY3lCUVQxTlVJR0Z1WkNCSFJWUWdZMkZzYkhNZ1lXNWtJR1J2WlhOdUozUWdjbVYwZFhKdWN5QjBhR1VnY21WemNHOXVjMlVnYUdWaFpHVnljeTVjYmlBZ0lDQXZMeUJFVDA0blZDQmtieUIwYUdseklHWnZjaUIwWlhOMGFXNW5JR0l2WXlCWVRVeElkSFJ3VW1WeGRXVnpkQ0JwY3lCdGIyTnJaV1FzSUc1dmRDQllSRzl0WVdsdVVtVnhkV1Z6ZEM1Y2JpQWdJQ0JwWmlBb2NISnZZMlZ6Y3k1bGJuWXVUazlFUlY5RlRsWWdJVDA5SUNkMFpYTjBKeUFtSmx4dUlDQWdJQ0FnSUNCMGVYQmxiMllnZDJsdVpHOTNJQ0U5UFNBbmRXNWtaV1pwYm1Wa0p5QW1KbHh1SUNBZ0lDQWdJQ0IzYVc1a2IzY3VXRVJ2YldGcGJsSmxjWFZsYzNRZ0ppWWdJU2duZDJsMGFFTnlaV1JsYm5ScFlXeHpKeUJwYmlCeVpYRjFaWE4wS1NBbUpseHVJQ0FnSUNBZ0lDQWhhWE5WVWt4VFlXMWxUM0pwWjJsdUtHTnZibVpwWnk1MWNtd3BLU0I3WEc0Z0lDQWdJQ0J5WlhGMVpYTjBJRDBnYm1WM0lIZHBibVJ2ZHk1WVJHOXRZV2x1VW1WeGRXVnpkQ2dwTzF4dUlDQWdJQ0FnYkc5aFpFVjJaVzUwSUQwZ0oyOXViRzloWkNjN1hHNGdJQ0FnSUNCNFJHOXRZV2x1SUQwZ2RISjFaVHRjYmlBZ0lDQWdJSEpsY1hWbGMzUXViMjV3Y205bmNtVnpjeUE5SUdaMWJtTjBhVzl1SUdoaGJtUnNaVkJ5YjJkeVpYTnpLQ2tnZTMwN1hHNGdJQ0FnSUNCeVpYRjFaWE4wTG05dWRHbHRaVzkxZENBOUlHWjFibU4wYVc5dUlHaGhibVJzWlZScGJXVnZkWFFvS1NCN2ZUdGNiaUFnSUNCOVhHNWNiaUFnSUNBdkx5QklWRlJRSUdKaGMybGpJR0YxZEdobGJuUnBZMkYwYVc5dVhHNGdJQ0FnYVdZZ0tHTnZibVpwWnk1aGRYUm9LU0I3WEc0Z0lDQWdJQ0IyWVhJZ2RYTmxjbTVoYldVZ1BTQmpiMjVtYVdjdVlYVjBhQzUxYzJWeWJtRnRaU0I4ZkNBbkp6dGNiaUFnSUNBZ0lIWmhjaUJ3WVhOemQyOXlaQ0E5SUdOdmJtWnBaeTVoZFhSb0xuQmhjM04zYjNKa0lIeDhJQ2NuTzF4dUlDQWdJQ0FnY21WeGRXVnpkRWhsWVdSbGNuTXVRWFYwYUc5eWFYcGhkR2x2YmlBOUlDZENZWE5wWXlBbklDc2dZblJ2WVNoMWMyVnlibUZ0WlNBcklDYzZKeUFySUhCaGMzTjNiM0prS1R0Y2JpQWdJQ0I5WEc1Y2JpQWdJQ0J5WlhGMVpYTjBMbTl3Wlc0b1kyOXVabWxuTG0xbGRHaHZaQzUwYjFWd2NHVnlRMkZ6WlNncExDQmlkV2xzWkZWU1RDaGpiMjVtYVdjdWRYSnNMQ0JqYjI1bWFXY3VjR0Z5WVcxekxDQmpiMjVtYVdjdWNHRnlZVzF6VTJWeWFXRnNhWHBsY2lrc0lIUnlkV1VwTzF4dVhHNGdJQ0FnTHk4Z1UyVjBJSFJvWlNCeVpYRjFaWE4wSUhScGJXVnZkWFFnYVc0Z1RWTmNiaUFnSUNCeVpYRjFaWE4wTG5ScGJXVnZkWFFnUFNCamIyNW1hV2N1ZEdsdFpXOTFkRHRjYmx4dUlDQWdJQzh2SUV4cGMzUmxiaUJtYjNJZ2NtVmhaSGtnYzNSaGRHVmNiaUFnSUNCeVpYRjFaWE4wVzJ4dllXUkZkbVZ1ZEYwZ1BTQm1kVzVqZEdsdmJpQm9ZVzVrYkdWTWIyRmtLQ2tnZTF4dUlDQWdJQ0FnYVdZZ0tDRnlaWEYxWlhOMElIeDhJQ2h5WlhGMVpYTjBMbkpsWVdSNVUzUmhkR1VnSVQwOUlEUWdKaVlnSVhoRWIyMWhhVzRwS1NCN1hHNGdJQ0FnSUNBZ0lISmxkSFZ5Ymp0Y2JpQWdJQ0FnSUgxY2JseHVJQ0FnSUNBZ0x5OGdWR2hsSUhKbGNYVmxjM1FnWlhKeWIzSmxaQ0J2ZFhRZ1lXNWtJSGRsSUdScFpHNG5kQ0JuWlhRZ1lTQnlaWE53YjI1elpTd2dkR2hwY3lCM2FXeHNJR0psWEc0Z0lDQWdJQ0F2THlCb1lXNWtiR1ZrSUdKNUlHOXVaWEp5YjNJZ2FXNXpkR1ZoWkZ4dUlDQWdJQ0FnTHk4Z1YybDBhQ0J2Ym1VZ1pYaGpaWEIwYVc5dU9pQnlaWEYxWlhOMElIUm9ZWFFnZFhOcGJtY2dabWxzWlRvZ2NISnZkRzlqYjJ3c0lHMXZjM1FnWW5KdmQzTmxjbk5jYmlBZ0lDQWdJQzh2SUhkcGJHd2djbVYwZFhKdUlITjBZWFIxY3lCaGN5QXdJR1YyWlc0Z2RHaHZkV2RvSUdsMEozTWdZU0J6ZFdOalpYTnpablZzSUhKbGNYVmxjM1JjYmlBZ0lDQWdJR2xtSUNoeVpYRjFaWE4wTG5OMFlYUjFjeUE5UFQwZ01DQW1KaUFoS0hKbGNYVmxjM1F1Y21WemNHOXVjMlZWVWt3Z0ppWWdjbVZ4ZFdWemRDNXlaWE53YjI1elpWVlNUQzVwYm1SbGVFOW1LQ2RtYVd4bE9pY3BJRDA5UFNBd0tTa2dlMXh1SUNBZ0lDQWdJQ0J5WlhSMWNtNDdYRzRnSUNBZ0lDQjlYRzVjYmlBZ0lDQWdJQzh2SUZCeVpYQmhjbVVnZEdobElISmxjM0J2Ym5ObFhHNGdJQ0FnSUNCMllYSWdjbVZ6Y0c5dWMyVklaV0ZrWlhKeklEMGdKMmRsZEVGc2JGSmxjM0J2Ym5ObFNHVmhaR1Z5Y3ljZ2FXNGdjbVZ4ZFdWemRDQS9JSEJoY25ObFNHVmhaR1Z5Y3loeVpYRjFaWE4wTG1kbGRFRnNiRkpsYzNCdmJuTmxTR1ZoWkdWeWN5Z3BLU0E2SUc1MWJHdzdYRzRnSUNBZ0lDQjJZWElnY21WemNHOXVjMlZFWVhSaElEMGdJV052Ym1acFp5NXlaWE53YjI1elpWUjVjR1VnZkh3Z1kyOXVabWxuTG5KbGMzQnZibk5sVkhsd1pTQTlQVDBnSjNSbGVIUW5JRDhnY21WeGRXVnpkQzV5WlhOd2IyNXpaVlJsZUhRZ09pQnlaWEYxWlhOMExuSmxjM0J2Ym5ObE8xeHVJQ0FnSUNBZ2RtRnlJSEpsYzNCdmJuTmxJRDBnZTF4dUlDQWdJQ0FnSUNCa1lYUmhPaUJ5WlhOd2IyNXpaVVJoZEdFc1hHNGdJQ0FnSUNBZ0lDOHZJRWxGSUhObGJtUnpJREV5TWpNZ2FXNXpkR1ZoWkNCdlppQXlNRFFnS0doMGRIQnpPaTh2WjJsMGFIVmlMbU52YlM5aGVHbHZjeTloZUdsdmN5OXBjM04xWlhNdk1qQXhLVnh1SUNBZ0lDQWdJQ0J6ZEdGMGRYTTZJSEpsY1hWbGMzUXVjM1JoZEhWeklEMDlQU0F4TWpJeklEOGdNakEwSURvZ2NtVnhkV1Z6ZEM1emRHRjBkWE1zWEc0Z0lDQWdJQ0FnSUhOMFlYUjFjMVJsZUhRNklISmxjWFZsYzNRdWMzUmhkSFZ6SUQwOVBTQXhNakl6SUQ4Z0owNXZJRU52Ym5SbGJuUW5JRG9nY21WeGRXVnpkQzV6ZEdGMGRYTlVaWGgwTEZ4dUlDQWdJQ0FnSUNCb1pXRmtaWEp6T2lCeVpYTndiMjV6WlVobFlXUmxjbk1zWEc0Z0lDQWdJQ0FnSUdOdmJtWnBaem9nWTI5dVptbG5MRnh1SUNBZ0lDQWdJQ0J5WlhGMVpYTjBPaUJ5WlhGMVpYTjBYRzRnSUNBZ0lDQjlPMXh1WEc0Z0lDQWdJQ0J6WlhSMGJHVW9jbVZ6YjJ4MlpTd2djbVZxWldOMExDQnlaWE53YjI1elpTazdYRzVjYmlBZ0lDQWdJQzh2SUVOc1pXRnVJSFZ3SUhKbGNYVmxjM1JjYmlBZ0lDQWdJSEpsY1hWbGMzUWdQU0J1ZFd4c08xeHVJQ0FnSUgwN1hHNWNiaUFnSUNBdkx5QklZVzVrYkdVZ2JHOTNJR3hsZG1Wc0lHNWxkSGR2Y21zZ1pYSnliM0p6WEc0Z0lDQWdjbVZ4ZFdWemRDNXZibVZ5Y205eUlEMGdablZ1WTNScGIyNGdhR0Z1Wkd4bFJYSnliM0lvS1NCN1hHNGdJQ0FnSUNBdkx5QlNaV0ZzSUdWeWNtOXljeUJoY21VZ2FHbGtaR1Z1SUdaeWIyMGdkWE1nWW5rZ2RHaGxJR0p5YjNkelpYSmNiaUFnSUNBZ0lDOHZJRzl1WlhKeWIzSWdjMmh2ZFd4a0lHOXViSGtnWm1seVpTQnBaaUJwZENkeklHRWdibVYwZDI5eWF5Qmxjbkp2Y2x4dUlDQWdJQ0FnY21WcVpXTjBLR055WldGMFpVVnljbTl5S0NkT1pYUjNiM0pySUVWeWNtOXlKeXdnWTI5dVptbG5MQ0J1ZFd4c0xDQnlaWEYxWlhOMEtTazdYRzVjYmlBZ0lDQWdJQzh2SUVOc1pXRnVJSFZ3SUhKbGNYVmxjM1JjYmlBZ0lDQWdJSEpsY1hWbGMzUWdQU0J1ZFd4c08xeHVJQ0FnSUgwN1hHNWNiaUFnSUNBdkx5QklZVzVrYkdVZ2RHbHRaVzkxZEZ4dUlDQWdJSEpsY1hWbGMzUXViMjUwYVcxbGIzVjBJRDBnWm5WdVkzUnBiMjRnYUdGdVpHeGxWR2x0Wlc5MWRDZ3BJSHRjYmlBZ0lDQWdJSEpsYW1WamRDaGpjbVZoZEdWRmNuSnZjaWduZEdsdFpXOTFkQ0J2WmlBbklDc2dZMjl1Wm1sbkxuUnBiV1Z2ZFhRZ0t5QW5iWE1nWlhoalpXVmtaV1FuTENCamIyNW1hV2NzSUNkRlEwOU9Ua0ZDVDFKVVJVUW5MRnh1SUNBZ0lDQWdJQ0J5WlhGMVpYTjBLU2s3WEc1Y2JpQWdJQ0FnSUM4dklFTnNaV0Z1SUhWd0lISmxjWFZsYzNSY2JpQWdJQ0FnSUhKbGNYVmxjM1FnUFNCdWRXeHNPMXh1SUNBZ0lIMDdYRzVjYmlBZ0lDQXZMeUJCWkdRZ2VITnlaaUJvWldGa1pYSmNiaUFnSUNBdkx5QlVhR2x6SUdseklHOXViSGtnWkc5dVpTQnBaaUJ5ZFc1dWFXNW5JR2x1SUdFZ2MzUmhibVJoY21RZ1luSnZkM05sY2lCbGJuWnBjbTl1YldWdWRDNWNiaUFnSUNBdkx5QlRjR1ZqYVdacFkyRnNiSGtnYm05MElHbG1JSGRsSjNKbElHbHVJR0VnZDJWaUlIZHZjbXRsY2l3Z2IzSWdjbVZoWTNRdGJtRjBhWFpsTGx4dUlDQWdJR2xtSUNoMWRHbHNjeTVwYzFOMFlXNWtZWEprUW5KdmQzTmxja1Z1ZGlncEtTQjdYRzRnSUNBZ0lDQjJZWElnWTI5dmEybGxjeUE5SUhKbGNYVnBjbVVvSnk0dkxpNHZhR1ZzY0dWeWN5OWpiMjlyYVdWekp5azdYRzVjYmlBZ0lDQWdJQzh2SUVGa1pDQjRjM0ptSUdobFlXUmxjbHh1SUNBZ0lDQWdkbUZ5SUhoemNtWldZV3gxWlNBOUlDaGpiMjVtYVdjdWQybDBhRU55WldSbGJuUnBZV3h6SUh4OElHbHpWVkpNVTJGdFpVOXlhV2RwYmloamIyNW1hV2N1ZFhKc0tTa2dKaVlnWTI5dVptbG5Mbmh6Y21aRGIyOXJhV1ZPWVcxbElEOWNiaUFnSUNBZ0lDQWdJQ0JqYjI5cmFXVnpMbkpsWVdRb1kyOXVabWxuTG5oemNtWkRiMjlyYVdWT1lXMWxLU0E2WEc0Z0lDQWdJQ0FnSUNBZ2RXNWtaV1pwYm1Wa08xeHVYRzRnSUNBZ0lDQnBaaUFvZUhOeVpsWmhiSFZsS1NCN1hHNGdJQ0FnSUNBZ0lISmxjWFZsYzNSSVpXRmtaWEp6VzJOdmJtWnBaeTU0YzNKbVNHVmhaR1Z5VG1GdFpWMGdQU0I0YzNKbVZtRnNkV1U3WEc0Z0lDQWdJQ0I5WEc0Z0lDQWdmVnh1WEc0Z0lDQWdMeThnUVdSa0lHaGxZV1JsY25NZ2RHOGdkR2hsSUhKbGNYVmxjM1JjYmlBZ0lDQnBaaUFvSjNObGRGSmxjWFZsYzNSSVpXRmtaWEluSUdsdUlISmxjWFZsYzNRcElIdGNiaUFnSUNBZ0lIVjBhV3h6TG1admNrVmhZMmdvY21WeGRXVnpkRWhsWVdSbGNuTXNJR1oxYm1OMGFXOXVJSE5sZEZKbGNYVmxjM1JJWldGa1pYSW9kbUZzTENCclpYa3BJSHRjYmlBZ0lDQWdJQ0FnYVdZZ0tIUjVjR1Z2WmlCeVpYRjFaWE4wUkdGMFlTQTlQVDBnSjNWdVpHVm1hVzVsWkNjZ0ppWWdhMlY1TG5SdlRHOTNaWEpEWVhObEtDa2dQVDA5SUNkamIyNTBaVzUwTFhSNWNHVW5LU0I3WEc0Z0lDQWdJQ0FnSUNBZ0x5OGdVbVZ0YjNabElFTnZiblJsYm5RdFZIbHdaU0JwWmlCa1lYUmhJR2x6SUhWdVpHVm1hVzVsWkZ4dUlDQWdJQ0FnSUNBZ0lHUmxiR1YwWlNCeVpYRjFaWE4wU0dWaFpHVnljMXRyWlhsZE8xeHVJQ0FnSUNBZ0lDQjlJR1ZzYzJVZ2UxeHVJQ0FnSUNBZ0lDQWdJQzh2SUU5MGFHVnlkMmx6WlNCaFpHUWdhR1ZoWkdWeUlIUnZJSFJvWlNCeVpYRjFaWE4wWEc0Z0lDQWdJQ0FnSUNBZ2NtVnhkV1Z6ZEM1elpYUlNaWEYxWlhOMFNHVmhaR1Z5S0d0bGVTd2dkbUZzS1R0Y2JpQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ2ZTazdYRzRnSUNBZ2ZWeHVYRzRnSUNBZ0x5OGdRV1JrSUhkcGRHaERjbVZrWlc1MGFXRnNjeUIwYnlCeVpYRjFaWE4wSUdsbUlHNWxaV1JsWkZ4dUlDQWdJR2xtSUNoamIyNW1hV2N1ZDJsMGFFTnlaV1JsYm5ScFlXeHpLU0I3WEc0Z0lDQWdJQ0J5WlhGMVpYTjBMbmRwZEdoRGNtVmtaVzUwYVdGc2N5QTlJSFJ5ZFdVN1hHNGdJQ0FnZlZ4dVhHNGdJQ0FnTHk4Z1FXUmtJSEpsYzNCdmJuTmxWSGx3WlNCMGJ5QnlaWEYxWlhOMElHbG1JRzVsWldSbFpGeHVJQ0FnSUdsbUlDaGpiMjVtYVdjdWNtVnpjRzl1YzJWVWVYQmxLU0I3WEc0Z0lDQWdJQ0IwY25rZ2UxeHVJQ0FnSUNBZ0lDQnlaWEYxWlhOMExuSmxjM0J2Ym5ObFZIbHdaU0E5SUdOdmJtWnBaeTV5WlhOd2IyNXpaVlI1Y0dVN1hHNGdJQ0FnSUNCOUlHTmhkR05vSUNobEtTQjdYRzRnSUNBZ0lDQWdJQzh2SUVWNGNHVmpkR1ZrSUVSUFRVVjRZMlZ3ZEdsdmJpQjBhSEp2ZDI0Z1lua2dZbkp2ZDNObGNuTWdibTkwSUdOdmJYQmhkR2xpYkdVZ1dFMU1TSFIwY0ZKbGNYVmxjM1FnVEdWMlpXd2dNaTVjYmlBZ0lDQWdJQ0FnTHk4Z1FuVjBMQ0IwYUdseklHTmhiaUJpWlNCemRYQndjbVZ6YzJWa0lHWnZjaUFuYW5OdmJpY2dkSGx3WlNCaGN5QnBkQ0JqWVc0Z1ltVWdjR0Z5YzJWa0lHSjVJR1JsWm1GMWJIUWdKM1J5WVc1elptOXliVkpsYzNCdmJuTmxKeUJtZFc1amRHbHZiaTVjYmlBZ0lDQWdJQ0FnYVdZZ0tHTnZibVpwWnk1eVpYTndiMjV6WlZSNWNHVWdJVDA5SUNkcWMyOXVKeWtnZTF4dUlDQWdJQ0FnSUNBZ0lIUm9jbTkzSUdVN1hHNGdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lIMWNiaUFnSUNCOVhHNWNiaUFnSUNBdkx5QklZVzVrYkdVZ2NISnZaM0psYzNNZ2FXWWdibVZsWkdWa1hHNGdJQ0FnYVdZZ0tIUjVjR1Z2WmlCamIyNW1hV2N1YjI1RWIzZHViRzloWkZCeWIyZHlaWE56SUQwOVBTQW5ablZ1WTNScGIyNG5LU0I3WEc0Z0lDQWdJQ0J5WlhGMVpYTjBMbUZrWkVWMlpXNTBUR2x6ZEdWdVpYSW9KM0J5YjJkeVpYTnpKeXdnWTI5dVptbG5MbTl1Ukc5M2JteHZZV1JRY205bmNtVnpjeWs3WEc0Z0lDQWdmVnh1WEc0Z0lDQWdMeThnVG05MElHRnNiQ0JpY205M2MyVnljeUJ6ZFhCd2IzSjBJSFZ3Ykc5aFpDQmxkbVZ1ZEhOY2JpQWdJQ0JwWmlBb2RIbHdaVzltSUdOdmJtWnBaeTV2YmxWd2JHOWhaRkJ5YjJkeVpYTnpJRDA5UFNBblpuVnVZM1JwYjI0bklDWW1JSEpsY1hWbGMzUXVkWEJzYjJGa0tTQjdYRzRnSUNBZ0lDQnlaWEYxWlhOMExuVndiRzloWkM1aFpHUkZkbVZ1ZEV4cGMzUmxibVZ5S0Nkd2NtOW5jbVZ6Y3ljc0lHTnZibVpwWnk1dmJsVndiRzloWkZCeWIyZHlaWE56S1R0Y2JpQWdJQ0I5WEc1Y2JpQWdJQ0JwWmlBb1kyOXVabWxuTG1OaGJtTmxiRlJ2YTJWdUtTQjdYRzRnSUNBZ0lDQXZMeUJJWVc1a2JHVWdZMkZ1WTJWc2JHRjBhVzl1WEc0Z0lDQWdJQ0JqYjI1bWFXY3VZMkZ1WTJWc1ZHOXJaVzR1Y0hKdmJXbHpaUzUwYUdWdUtHWjFibU4wYVc5dUlHOXVRMkZ1WTJWc1pXUW9ZMkZ1WTJWc0tTQjdYRzRnSUNBZ0lDQWdJR2xtSUNnaGNtVnhkV1Z6ZENrZ2UxeHVJQ0FnSUNBZ0lDQWdJSEpsZEhWeWJqdGNiaUFnSUNBZ0lDQWdmVnh1WEc0Z0lDQWdJQ0FnSUhKbGNYVmxjM1F1WVdKdmNuUW9LVHRjYmlBZ0lDQWdJQ0FnY21WcVpXTjBLR05oYm1ObGJDazdYRzRnSUNBZ0lDQWdJQzh2SUVOc1pXRnVJSFZ3SUhKbGNYVmxjM1JjYmlBZ0lDQWdJQ0FnY21WeGRXVnpkQ0E5SUc1MWJHdzdYRzRnSUNBZ0lDQjlLVHRjYmlBZ0lDQjlYRzVjYmlBZ0lDQnBaaUFvY21WeGRXVnpkRVJoZEdFZ1BUMDlJSFZ1WkdWbWFXNWxaQ2tnZTF4dUlDQWdJQ0FnY21WeGRXVnpkRVJoZEdFZ1BTQnVkV3hzTzF4dUlDQWdJSDFjYmx4dUlDQWdJQzh2SUZObGJtUWdkR2hsSUhKbGNYVmxjM1JjYmlBZ0lDQnlaWEYxWlhOMExuTmxibVFvY21WeGRXVnpkRVJoZEdFcE8xeHVJQ0I5S1R0Y2JuMDdYRzRpTENJbmRYTmxJSE4wY21samRDYzdYRzVjYm5aaGNpQjFkR2xzY3lBOUlISmxjWFZwY21Vb0p5NHZkWFJwYkhNbktUdGNiblpoY2lCaWFXNWtJRDBnY21WeGRXbHlaU2duTGk5b1pXeHdaWEp6TDJKcGJtUW5LVHRjYm5aaGNpQkJlR2x2Y3lBOUlISmxjWFZwY21Vb0p5NHZZMjl5WlM5QmVHbHZjeWNwTzF4dWRtRnlJR1JsWm1GMWJIUnpJRDBnY21WeGRXbHlaU2duTGk5a1pXWmhkV3gwY3ljcE8xeHVYRzR2S2lwY2JpQXFJRU55WldGMFpTQmhiaUJwYm5OMFlXNWpaU0J2WmlCQmVHbHZjMXh1SUNwY2JpQXFJRUJ3WVhKaGJTQjdUMkpxWldOMGZTQmtaV1poZFd4MFEyOXVabWxuSUZSb1pTQmtaV1poZFd4MElHTnZibVpwWnlCbWIzSWdkR2hsSUdsdWMzUmhibU5sWEc0Z0tpQkFjbVYwZFhKdUlIdEJlR2x2YzMwZ1FTQnVaWGNnYVc1emRHRnVZMlVnYjJZZ1FYaHBiM05jYmlBcUwxeHVablZ1WTNScGIyNGdZM0psWVhSbFNXNXpkR0Z1WTJVb1pHVm1ZWFZzZEVOdmJtWnBaeWtnZTF4dUlDQjJZWElnWTI5dWRHVjRkQ0E5SUc1bGR5QkJlR2x2Y3loa1pXWmhkV3gwUTI5dVptbG5LVHRjYmlBZ2RtRnlJR2x1YzNSaGJtTmxJRDBnWW1sdVpDaEJlR2x2Y3k1d2NtOTBiM1I1Y0dVdWNtVnhkV1Z6ZEN3Z1kyOXVkR1Y0ZENrN1hHNWNiaUFnTHk4Z1EyOXdlU0JoZUdsdmN5NXdjbTkwYjNSNWNHVWdkRzhnYVc1emRHRnVZMlZjYmlBZ2RYUnBiSE11WlhoMFpXNWtLR2x1YzNSaGJtTmxMQ0JCZUdsdmN5NXdjbTkwYjNSNWNHVXNJR052Ym5SbGVIUXBPMXh1WEc0Z0lDOHZJRU52Y0hrZ1kyOXVkR1Y0ZENCMGJ5QnBibk4wWVc1alpWeHVJQ0IxZEdsc2N5NWxlSFJsYm1Rb2FXNXpkR0Z1WTJVc0lHTnZiblJsZUhRcE8xeHVYRzRnSUhKbGRIVnliaUJwYm5OMFlXNWpaVHRjYm4xY2JseHVMeThnUTNKbFlYUmxJSFJvWlNCa1pXWmhkV3gwSUdsdWMzUmhibU5sSUhSdklHSmxJR1Y0Y0c5eWRHVmtYRzUyWVhJZ1lYaHBiM01nUFNCamNtVmhkR1ZKYm5OMFlXNWpaU2hrWldaaGRXeDBjeWs3WEc1Y2JpOHZJRVY0Y0c5elpTQkJlR2x2Y3lCamJHRnpjeUIwYnlCaGJHeHZkeUJqYkdGemN5QnBibWhsY21sMFlXNWpaVnh1WVhocGIzTXVRWGhwYjNNZ1BTQkJlR2x2Y3p0Y2JseHVMeThnUm1GamRHOXllU0JtYjNJZ1kzSmxZWFJwYm1jZ2JtVjNJR2x1YzNSaGJtTmxjMXh1WVhocGIzTXVZM0psWVhSbElEMGdablZ1WTNScGIyNGdZM0psWVhSbEtHbHVjM1JoYm1ObFEyOXVabWxuS1NCN1hHNGdJSEpsZEhWeWJpQmpjbVZoZEdWSmJuTjBZVzVqWlNoMWRHbHNjeTV0WlhKblpTaGtaV1poZFd4MGN5d2dhVzV6ZEdGdVkyVkRiMjVtYVdjcEtUdGNibjA3WEc1Y2JpOHZJRVY0Y0c5elpTQkRZVzVqWld3Z0ppQkRZVzVqWld4VWIydGxibHh1WVhocGIzTXVRMkZ1WTJWc0lEMGdjbVZ4ZFdseVpTZ25MaTlqWVc1alpXd3ZRMkZ1WTJWc0p5azdYRzVoZUdsdmN5NURZVzVqWld4VWIydGxiaUE5SUhKbGNYVnBjbVVvSnk0dlkyRnVZMlZzTDBOaGJtTmxiRlJ2YTJWdUp5azdYRzVoZUdsdmN5NXBjME5oYm1ObGJDQTlJSEpsY1hWcGNtVW9KeTR2WTJGdVkyVnNMMmx6UTJGdVkyVnNKeWs3WEc1Y2JpOHZJRVY0Y0c5elpTQmhiR3d2YzNCeVpXRmtYRzVoZUdsdmN5NWhiR3dnUFNCbWRXNWpkR2x2YmlCaGJHd29jSEp2YldselpYTXBJSHRjYmlBZ2NtVjBkWEp1SUZCeWIyMXBjMlV1WVd4c0tIQnliMjFwYzJWektUdGNibjA3WEc1aGVHbHZjeTV6Y0hKbFlXUWdQU0J5WlhGMWFYSmxLQ2N1TDJobGJIQmxjbk12YzNCeVpXRmtKeWs3WEc1Y2JtMXZaSFZzWlM1bGVIQnZjblJ6SUQwZ1lYaHBiM003WEc1Y2JpOHZJRUZzYkc5M0lIVnpaU0J2WmlCa1pXWmhkV3gwSUdsdGNHOXlkQ0J6ZVc1MFlYZ2dhVzRnVkhsd1pWTmpjbWx3ZEZ4dWJXOWtkV3hsTG1WNGNHOXlkSE11WkdWbVlYVnNkQ0E5SUdGNGFXOXpPMXh1SWl3aUozVnpaU0J6ZEhKcFkzUW5PMXh1WEc0dktpcGNiaUFxSUVFZ1lFTmhibU5sYkdBZ2FYTWdZVzRnYjJKcVpXTjBJSFJvWVhRZ2FYTWdkR2h5YjNkdUlIZG9aVzRnWVc0Z2IzQmxjbUYwYVc5dUlHbHpJR05oYm1ObGJHVmtMbHh1SUNwY2JpQXFJRUJqYkdGemMxeHVJQ29nUUhCaGNtRnRJSHR6ZEhKcGJtYzlmU0J0WlhOellXZGxJRlJvWlNCdFpYTnpZV2RsTGx4dUlDb3ZYRzVtZFc1amRHbHZiaUJEWVc1alpXd29iV1Z6YzJGblpTa2dlMXh1SUNCMGFHbHpMbTFsYzNOaFoyVWdQU0J0WlhOellXZGxPMXh1ZlZ4dVhHNURZVzVqWld3dWNISnZkRzkwZVhCbExuUnZVM1J5YVc1bklEMGdablZ1WTNScGIyNGdkRzlUZEhKcGJtY29LU0I3WEc0Z0lISmxkSFZ5YmlBblEyRnVZMlZzSnlBcklDaDBhR2x6TG0xbGMzTmhaMlVnUHlBbk9pQW5JQ3NnZEdocGN5NXRaWE56WVdkbElEb2dKeWNwTzF4dWZUdGNibHh1UTJGdVkyVnNMbkJ5YjNSdmRIbHdaUzVmWDBOQlRrTkZURjlmSUQwZ2RISjFaVHRjYmx4dWJXOWtkV3hsTG1WNGNHOXlkSE1nUFNCRFlXNWpaV3c3WEc0aUxDSW5kWE5sSUhOMGNtbGpkQ2M3WEc1Y2JuWmhjaUJEWVc1alpXd2dQU0J5WlhGMWFYSmxLQ2N1TDBOaGJtTmxiQ2NwTzF4dVhHNHZLaXBjYmlBcUlFRWdZRU5oYm1ObGJGUnZhMlZ1WUNCcGN5QmhiaUJ2WW1wbFkzUWdkR2hoZENCallXNGdZbVVnZFhObFpDQjBieUJ5WlhGMVpYTjBJR05oYm1ObGJHeGhkR2x2YmlCdlppQmhiaUJ2Y0dWeVlYUnBiMjR1WEc0Z0tseHVJQ29nUUdOc1lYTnpYRzRnS2lCQWNHRnlZVzBnZTBaMWJtTjBhVzl1ZlNCbGVHVmpkWFJ2Y2lCVWFHVWdaWGhsWTNWMGIzSWdablZ1WTNScGIyNHVYRzRnS2k5Y2JtWjFibU4wYVc5dUlFTmhibU5sYkZSdmEyVnVLR1Y0WldOMWRHOXlLU0I3WEc0Z0lHbG1JQ2gwZVhCbGIyWWdaWGhsWTNWMGIzSWdJVDA5SUNkbWRXNWpkR2x2YmljcElIdGNiaUFnSUNCMGFISnZkeUJ1WlhjZ1ZIbHdaVVZ5Y205eUtDZGxlR1ZqZFhSdmNpQnRkWE4wSUdKbElHRWdablZ1WTNScGIyNHVKeWs3WEc0Z0lIMWNibHh1SUNCMllYSWdjbVZ6YjJ4MlpWQnliMjFwYzJVN1hHNGdJSFJvYVhNdWNISnZiV2x6WlNBOUlHNWxkeUJRY205dGFYTmxLR1oxYm1OMGFXOXVJSEJ5YjIxcGMyVkZlR1ZqZFhSdmNpaHlaWE52YkhabEtTQjdYRzRnSUNBZ2NtVnpiMngyWlZCeWIyMXBjMlVnUFNCeVpYTnZiSFpsTzF4dUlDQjlLVHRjYmx4dUlDQjJZWElnZEc5clpXNGdQU0IwYUdsek8xeHVJQ0JsZUdWamRYUnZjaWhtZFc1amRHbHZiaUJqWVc1alpXd29iV1Z6YzJGblpTa2dlMXh1SUNBZ0lHbG1JQ2gwYjJ0bGJpNXlaV0Z6YjI0cElIdGNiaUFnSUNBZ0lDOHZJRU5oYm1ObGJHeGhkR2x2YmlCb1lYTWdZV3h5WldGa2VTQmlaV1Z1SUhKbGNYVmxjM1JsWkZ4dUlDQWdJQ0FnY21WMGRYSnVPMXh1SUNBZ0lIMWNibHh1SUNBZ0lIUnZhMlZ1TG5KbFlYTnZiaUE5SUc1bGR5QkRZVzVqWld3b2JXVnpjMkZuWlNrN1hHNGdJQ0FnY21WemIyeDJaVkJ5YjIxcGMyVW9kRzlyWlc0dWNtVmhjMjl1S1R0Y2JpQWdmU2s3WEc1OVhHNWNiaThxS2x4dUlDb2dWR2h5YjNkeklHRWdZRU5oYm1ObGJHQWdhV1lnWTJGdVkyVnNiR0YwYVc5dUlHaGhjeUJpWldWdUlISmxjWFZsYzNSbFpDNWNiaUFxTDF4dVEyRnVZMlZzVkc5clpXNHVjSEp2ZEc5MGVYQmxMblJvY205M1NXWlNaWEYxWlhOMFpXUWdQU0JtZFc1amRHbHZiaUIwYUhKdmQwbG1VbVZ4ZFdWemRHVmtLQ2tnZTF4dUlDQnBaaUFvZEdocGN5NXlaV0Z6YjI0cElIdGNiaUFnSUNCMGFISnZkeUIwYUdsekxuSmxZWE52Ymp0Y2JpQWdmVnh1ZlR0Y2JseHVMeW9xWEc0Z0tpQlNaWFIxY201eklHRnVJRzlpYW1WamRDQjBhR0YwSUdOdmJuUmhhVzV6SUdFZ2JtVjNJR0JEWVc1alpXeFViMnRsYm1BZ1lXNWtJR0VnWm5WdVkzUnBiMjRnZEdoaGRDd2dkMmhsYmlCallXeHNaV1FzWEc0Z0tpQmpZVzVqWld4eklIUm9aU0JnUTJGdVkyVnNWRzlyWlc1Z0xseHVJQ292WEc1RFlXNWpaV3hVYjJ0bGJpNXpiM1Z5WTJVZ1BTQm1kVzVqZEdsdmJpQnpiM1Z5WTJVb0tTQjdYRzRnSUhaaGNpQmpZVzVqWld3N1hHNGdJSFpoY2lCMGIydGxiaUE5SUc1bGR5QkRZVzVqWld4VWIydGxiaWhtZFc1amRHbHZiaUJsZUdWamRYUnZjaWhqS1NCN1hHNGdJQ0FnWTJGdVkyVnNJRDBnWXp0Y2JpQWdmU2s3WEc0Z0lISmxkSFZ5YmlCN1hHNGdJQ0FnZEc5clpXNDZJSFJ2YTJWdUxGeHVJQ0FnSUdOaGJtTmxiRG9nWTJGdVkyVnNYRzRnSUgwN1hHNTlPMXh1WEc1dGIyUjFiR1V1Wlhod2IzSjBjeUE5SUVOaGJtTmxiRlJ2YTJWdU8xeHVJaXdpSjNWelpTQnpkSEpwWTNRbk8xeHVYRzV0YjJSMWJHVXVaWGh3YjNKMGN5QTlJR1oxYm1OMGFXOXVJR2x6UTJGdVkyVnNLSFpoYkhWbEtTQjdYRzRnSUhKbGRIVnliaUFoSVNoMllXeDFaU0FtSmlCMllXeDFaUzVmWDBOQlRrTkZURjlmS1R0Y2JuMDdYRzRpTENJbmRYTmxJSE4wY21samRDYzdYRzVjYm5aaGNpQmtaV1poZFd4MGN5QTlJSEpsY1hWcGNtVW9KeTR2TGk0dlpHVm1ZWFZzZEhNbktUdGNiblpoY2lCMWRHbHNjeUE5SUhKbGNYVnBjbVVvSnk0dkxpNHZkWFJwYkhNbktUdGNiblpoY2lCSmJuUmxjbU5sY0hSdmNrMWhibUZuWlhJZ1BTQnlaWEYxYVhKbEtDY3VMMGx1ZEdWeVkyVndkRzl5VFdGdVlXZGxjaWNwTzF4dWRtRnlJR1JwYzNCaGRHTm9VbVZ4ZFdWemRDQTlJSEpsY1hWcGNtVW9KeTR2WkdsemNHRjBZMmhTWlhGMVpYTjBKeWs3WEc1Y2JpOHFLbHh1SUNvZ1EzSmxZWFJsSUdFZ2JtVjNJR2x1YzNSaGJtTmxJRzltSUVGNGFXOXpYRzRnS2x4dUlDb2dRSEJoY21GdElIdFBZbXBsWTNSOUlHbHVjM1JoYm1ObFEyOXVabWxuSUZSb1pTQmtaV1poZFd4MElHTnZibVpwWnlCbWIzSWdkR2hsSUdsdWMzUmhibU5sWEc0Z0tpOWNibVoxYm1OMGFXOXVJRUY0YVc5ektHbHVjM1JoYm1ObFEyOXVabWxuS1NCN1hHNGdJSFJvYVhNdVpHVm1ZWFZzZEhNZ1BTQnBibk4wWVc1alpVTnZibVpwWnp0Y2JpQWdkR2hwY3k1cGJuUmxjbU5sY0hSdmNuTWdQU0I3WEc0Z0lDQWdjbVZ4ZFdWemREb2dibVYzSUVsdWRHVnlZMlZ3ZEc5eVRXRnVZV2RsY2lncExGeHVJQ0FnSUhKbGMzQnZibk5sT2lCdVpYY2dTVzUwWlhKalpYQjBiM0pOWVc1aFoyVnlLQ2xjYmlBZ2ZUdGNibjFjYmx4dUx5b3FYRzRnS2lCRWFYTndZWFJqYUNCaElISmxjWFZsYzNSY2JpQXFYRzRnS2lCQWNHRnlZVzBnZTA5aWFtVmpkSDBnWTI5dVptbG5JRlJvWlNCamIyNW1hV2NnYzNCbFkybG1hV01nWm05eUlIUm9hWE1nY21WeGRXVnpkQ0FvYldWeVoyVmtJSGRwZEdnZ2RHaHBjeTVrWldaaGRXeDBjeWxjYmlBcUwxeHVRWGhwYjNNdWNISnZkRzkwZVhCbExuSmxjWFZsYzNRZ1BTQm1kVzVqZEdsdmJpQnlaWEYxWlhOMEtHTnZibVpwWnlrZ2UxeHVJQ0F2S21WemJHbHVkQ0J1Ynkxd1lYSmhiUzF5WldGemMybG5iam93S2k5Y2JpQWdMeThnUVd4c2IzY2dabTl5SUdGNGFXOXpLQ2RsZUdGdGNHeGxMM1Z5YkNkYkxDQmpiMjVtYVdkZEtTQmhJR3hoSUdabGRHTm9JRUZRU1Z4dUlDQnBaaUFvZEhsd1pXOW1JR052Ym1acFp5QTlQVDBnSjNOMGNtbHVaeWNwSUh0Y2JpQWdJQ0JqYjI1bWFXY2dQU0IxZEdsc2N5NXRaWEpuWlNoN1hHNGdJQ0FnSUNCMWNtdzZJR0Z5WjNWdFpXNTBjMXN3WFZ4dUlDQWdJSDBzSUdGeVozVnRaVzUwYzFzeFhTazdYRzRnSUgxY2JseHVJQ0JqYjI1bWFXY2dQU0IxZEdsc2N5NXRaWEpuWlNoa1pXWmhkV3gwY3l3Z2UyMWxkR2h2WkRvZ0oyZGxkQ2Q5TENCMGFHbHpMbVJsWm1GMWJIUnpMQ0JqYjI1bWFXY3BPMXh1SUNCamIyNW1hV2N1YldWMGFHOWtJRDBnWTI5dVptbG5MbTFsZEdodlpDNTBiMHh2ZDJWeVEyRnpaU2dwTzF4dVhHNGdJQzh2SUVodmIyc2dkWEFnYVc1MFpYSmpaWEIwYjNKeklHMXBaR1JzWlhkaGNtVmNiaUFnZG1GeUlHTm9ZV2x1SUQwZ1cyUnBjM0JoZEdOb1VtVnhkV1Z6ZEN3Z2RXNWtaV1pwYm1Wa1hUdGNiaUFnZG1GeUlIQnliMjFwYzJVZ1BTQlFjbTl0YVhObExuSmxjMjlzZG1Vb1kyOXVabWxuS1R0Y2JseHVJQ0IwYUdsekxtbHVkR1Z5WTJWd2RHOXljeTV5WlhGMVpYTjBMbVp2Y2tWaFkyZ29ablZ1WTNScGIyNGdkVzV6YUdsbWRGSmxjWFZsYzNSSmJuUmxjbU5sY0hSdmNuTW9hVzUwWlhKalpYQjBiM0lwSUh0Y2JpQWdJQ0JqYUdGcGJpNTFibk5vYVdaMEtHbHVkR1Z5WTJWd2RHOXlMbVoxYkdacGJHeGxaQ3dnYVc1MFpYSmpaWEIwYjNJdWNtVnFaV04wWldRcE8xeHVJQ0I5S1R0Y2JseHVJQ0IwYUdsekxtbHVkR1Z5WTJWd2RHOXljeTV5WlhOd2IyNXpaUzVtYjNKRllXTm9LR1oxYm1OMGFXOXVJSEIxYzJoU1pYTndiMjV6WlVsdWRHVnlZMlZ3ZEc5eWN5aHBiblJsY21ObGNIUnZjaWtnZTF4dUlDQWdJR05vWVdsdUxuQjFjMmdvYVc1MFpYSmpaWEIwYjNJdVpuVnNabWxzYkdWa0xDQnBiblJsY21ObGNIUnZjaTV5WldwbFkzUmxaQ2s3WEc0Z0lIMHBPMXh1WEc0Z0lIZG9hV3hsSUNoamFHRnBiaTVzWlc1bmRHZ3BJSHRjYmlBZ0lDQndjbTl0YVhObElEMGdjSEp2YldselpTNTBhR1Z1S0dOb1lXbHVMbk5vYVdaMEtDa3NJR05vWVdsdUxuTm9hV1owS0NrcE8xeHVJQ0I5WEc1Y2JpQWdjbVYwZFhKdUlIQnliMjFwYzJVN1hHNTlPMXh1WEc0dkx5QlFjbTkyYVdSbElHRnNhV0Z6WlhNZ1ptOXlJSE4xY0hCdmNuUmxaQ0J5WlhGMVpYTjBJRzFsZEdodlpITmNiblYwYVd4ekxtWnZja1ZoWTJnb1d5ZGtaV3hsZEdVbkxDQW5aMlYwSnl3Z0oyaGxZV1FuTENBbmIzQjBhVzl1Y3lkZExDQm1kVzVqZEdsdmJpQm1iM0pGWVdOb1RXVjBhRzlrVG05RVlYUmhLRzFsZEdodlpDa2dlMXh1SUNBdkttVnpiR2x1ZENCbWRXNWpMVzVoYldWek9qQXFMMXh1SUNCQmVHbHZjeTV3Y205MGIzUjVjR1ZiYldWMGFHOWtYU0E5SUdaMWJtTjBhVzl1S0hWeWJDd2dZMjl1Wm1sbktTQjdYRzRnSUNBZ2NtVjBkWEp1SUhSb2FYTXVjbVZ4ZFdWemRDaDFkR2xzY3k1dFpYSm5aU2hqYjI1bWFXY2dmSHdnZTMwc0lIdGNiaUFnSUNBZ0lHMWxkR2h2WkRvZ2JXVjBhRzlrTEZ4dUlDQWdJQ0FnZFhKc09pQjFjbXhjYmlBZ0lDQjlLU2s3WEc0Z0lIMDdYRzU5S1R0Y2JseHVkWFJwYkhNdVptOXlSV0ZqYUNoYkozQnZjM1FuTENBbmNIVjBKeXdnSjNCaGRHTm9KMTBzSUdaMWJtTjBhVzl1SUdadmNrVmhZMmhOWlhSb2IyUlhhWFJvUkdGMFlTaHRaWFJvYjJRcElIdGNiaUFnTHlwbGMyeHBiblFnWm5WdVl5MXVZVzFsY3pvd0tpOWNiaUFnUVhocGIzTXVjSEp2ZEc5MGVYQmxXMjFsZEdodlpGMGdQU0JtZFc1amRHbHZiaWgxY213c0lHUmhkR0VzSUdOdmJtWnBaeWtnZTF4dUlDQWdJSEpsZEhWeWJpQjBhR2x6TG5KbGNYVmxjM1FvZFhScGJITXViV1Z5WjJVb1kyOXVabWxuSUh4OElIdDlMQ0I3WEc0Z0lDQWdJQ0J0WlhSb2IyUTZJRzFsZEdodlpDeGNiaUFnSUNBZ0lIVnliRG9nZFhKc0xGeHVJQ0FnSUNBZ1pHRjBZVG9nWkdGMFlWeHVJQ0FnSUgwcEtUdGNiaUFnZlR0Y2JuMHBPMXh1WEc1dGIyUjFiR1V1Wlhod2IzSjBjeUE5SUVGNGFXOXpPMXh1SWl3aUozVnpaU0J6ZEhKcFkzUW5PMXh1WEc1MllYSWdkWFJwYkhNZ1BTQnlaWEYxYVhKbEtDY3VMeTR1TDNWMGFXeHpKeWs3WEc1Y2JtWjFibU4wYVc5dUlFbHVkR1Z5WTJWd2RHOXlUV0Z1WVdkbGNpZ3BJSHRjYmlBZ2RHaHBjeTVvWVc1a2JHVnljeUE5SUZ0ZE8xeHVmVnh1WEc0dktpcGNiaUFxSUVGa1pDQmhJRzVsZHlCcGJuUmxjbU5sY0hSdmNpQjBieUIwYUdVZ2MzUmhZMnRjYmlBcVhHNGdLaUJBY0dGeVlXMGdlMFoxYm1OMGFXOXVmU0JtZFd4bWFXeHNaV1FnVkdobElHWjFibU4wYVc5dUlIUnZJR2hoYm1Sc1pTQmdkR2hsYm1BZ1ptOXlJR0VnWUZCeWIyMXBjMlZnWEc0Z0tpQkFjR0Z5WVcwZ2UwWjFibU4wYVc5dWZTQnlaV3BsWTNSbFpDQlVhR1VnWm5WdVkzUnBiMjRnZEc4Z2FHRnVaR3hsSUdCeVpXcGxZM1JnSUdadmNpQmhJR0JRY205dGFYTmxZRnh1SUNwY2JpQXFJRUJ5WlhSMWNtNGdlMDUxYldKbGNuMGdRVzRnU1VRZ2RYTmxaQ0IwYnlCeVpXMXZkbVVnYVc1MFpYSmpaWEIwYjNJZ2JHRjBaWEpjYmlBcUwxeHVTVzUwWlhKalpYQjBiM0pOWVc1aFoyVnlMbkJ5YjNSdmRIbHdaUzUxYzJVZ1BTQm1kVzVqZEdsdmJpQjFjMlVvWm5Wc1ptbHNiR1ZrTENCeVpXcGxZM1JsWkNrZ2UxeHVJQ0IwYUdsekxtaGhibVJzWlhKekxuQjFjMmdvZTF4dUlDQWdJR1oxYkdacGJHeGxaRG9nWm5Wc1ptbHNiR1ZrTEZ4dUlDQWdJSEpsYW1WamRHVmtPaUJ5WldwbFkzUmxaRnh1SUNCOUtUdGNiaUFnY21WMGRYSnVJSFJvYVhNdWFHRnVaR3hsY25NdWJHVnVaM1JvSUMwZ01UdGNibjA3WEc1Y2JpOHFLbHh1SUNvZ1VtVnRiM1psSUdGdUlHbHVkR1Z5WTJWd2RHOXlJR1p5YjIwZ2RHaGxJSE4wWVdOclhHNGdLbHh1SUNvZ1FIQmhjbUZ0SUh0T2RXMWlaWEo5SUdsa0lGUm9aU0JKUkNCMGFHRjBJSGRoY3lCeVpYUjFjbTVsWkNCaWVTQmdkWE5sWUZ4dUlDb3ZYRzVKYm5SbGNtTmxjSFJ2Y2sxaGJtRm5aWEl1Y0hKdmRHOTBlWEJsTG1WcVpXTjBJRDBnWm5WdVkzUnBiMjRnWldwbFkzUW9hV1FwSUh0Y2JpQWdhV1lnS0hSb2FYTXVhR0Z1Wkd4bGNuTmJhV1JkS1NCN1hHNGdJQ0FnZEdocGN5NW9ZVzVrYkdWeWMxdHBaRjBnUFNCdWRXeHNPMXh1SUNCOVhHNTlPMXh1WEc0dktpcGNiaUFxSUVsMFpYSmhkR1VnYjNabGNpQmhiR3dnZEdobElISmxaMmx6ZEdWeVpXUWdhVzUwWlhKalpYQjBiM0p6WEc0Z0tseHVJQ29nVkdocGN5QnRaWFJvYjJRZ2FYTWdjR0Z5ZEdsamRXeGhjbXg1SUhWelpXWjFiQ0JtYjNJZ2MydHBjSEJwYm1jZ2IzWmxjaUJoYm5sY2JpQXFJR2x1ZEdWeVkyVndkRzl5Y3lCMGFHRjBJRzFoZVNCb1lYWmxJR0psWTI5dFpTQmdiblZzYkdBZ1kyRnNiR2x1WnlCZ1pXcGxZM1JnTGx4dUlDcGNiaUFxSUVCd1lYSmhiU0I3Um5WdVkzUnBiMjU5SUdadUlGUm9aU0JtZFc1amRHbHZiaUIwYnlCallXeHNJR1p2Y2lCbFlXTm9JR2x1ZEdWeVkyVndkRzl5WEc0Z0tpOWNia2x1ZEdWeVkyVndkRzl5VFdGdVlXZGxjaTV3Y205MGIzUjVjR1V1Wm05eVJXRmphQ0E5SUdaMWJtTjBhVzl1SUdadmNrVmhZMmdvWm00cElIdGNiaUFnZFhScGJITXVabTl5UldGamFDaDBhR2x6TG1oaGJtUnNaWEp6TENCbWRXNWpkR2x2YmlCbWIzSkZZV05vU0dGdVpHeGxjaWhvS1NCN1hHNGdJQ0FnYVdZZ0tHZ2dJVDA5SUc1MWJHd3BJSHRjYmlBZ0lDQWdJR1p1S0dncE8xeHVJQ0FnSUgxY2JpQWdmU2s3WEc1OU8xeHVYRzV0YjJSMWJHVXVaWGh3YjNKMGN5QTlJRWx1ZEdWeVkyVndkRzl5VFdGdVlXZGxjanRjYmlJc0lpZDFjMlVnYzNSeWFXTjBKenRjYmx4dWRtRnlJR1Z1YUdGdVkyVkZjbkp2Y2lBOUlISmxjWFZwY21Vb0p5NHZaVzVvWVc1alpVVnljbTl5SnlrN1hHNWNiaThxS2x4dUlDb2dRM0psWVhSbElHRnVJRVZ5Y205eUlIZHBkR2dnZEdobElITndaV05wWm1sbFpDQnRaWE56WVdkbExDQmpiMjVtYVdjc0lHVnljbTl5SUdOdlpHVXNJSEpsY1hWbGMzUWdZVzVrSUhKbGMzQnZibk5sTGx4dUlDcGNiaUFxSUVCd1lYSmhiU0I3YzNSeWFXNW5mU0J0WlhOellXZGxJRlJvWlNCbGNuSnZjaUJ0WlhOellXZGxMbHh1SUNvZ1FIQmhjbUZ0SUh0UFltcGxZM1I5SUdOdmJtWnBaeUJVYUdVZ1kyOXVabWxuTGx4dUlDb2dRSEJoY21GdElIdHpkSEpwYm1kOUlGdGpiMlJsWFNCVWFHVWdaWEp5YjNJZ1kyOWtaU0FvWm05eUlHVjRZVzF3YkdVc0lDZEZRMDlPVGtGQ1QxSlVSVVFuS1M1Y2JpQXFJRUJ3WVhKaGJTQjdUMkpxWldOMGZTQmJjbVZ4ZFdWemRGMGdWR2hsSUhKbGNYVmxjM1F1WEc0Z0tpQkFjR0Z5WVcwZ2UwOWlhbVZqZEgwZ1czSmxjM0J2Ym5ObFhTQlVhR1VnY21WemNHOXVjMlV1WEc0Z0tpQkFjbVYwZFhKdWN5QjdSWEp5YjNKOUlGUm9aU0JqY21WaGRHVmtJR1Z5Y205eUxseHVJQ292WEc1dGIyUjFiR1V1Wlhod2IzSjBjeUE5SUdaMWJtTjBhVzl1SUdOeVpXRjBaVVZ5Y205eUtHMWxjM05oWjJVc0lHTnZibVpwWnl3Z1kyOWtaU3dnY21WeGRXVnpkQ3dnY21WemNHOXVjMlVwSUh0Y2JpQWdkbUZ5SUdWeWNtOXlJRDBnYm1WM0lFVnljbTl5S0cxbGMzTmhaMlVwTzF4dUlDQnlaWFIxY200Z1pXNW9ZVzVqWlVWeWNtOXlLR1Z5Y205eUxDQmpiMjVtYVdjc0lHTnZaR1VzSUhKbGNYVmxjM1FzSUhKbGMzQnZibk5sS1R0Y2JuMDdYRzRpTENJbmRYTmxJSE4wY21samRDYzdYRzVjYm5aaGNpQjFkR2xzY3lBOUlISmxjWFZwY21Vb0p5NHZMaTR2ZFhScGJITW5LVHRjYm5aaGNpQjBjbUZ1YzJadmNtMUVZWFJoSUQwZ2NtVnhkV2x5WlNnbkxpOTBjbUZ1YzJadmNtMUVZWFJoSnlrN1hHNTJZWElnYVhORFlXNWpaV3dnUFNCeVpYRjFhWEpsS0NjdUxpOWpZVzVqWld3dmFYTkRZVzVqWld3bktUdGNiblpoY2lCa1pXWmhkV3gwY3lBOUlISmxjWFZwY21Vb0p5NHVMMlJsWm1GMWJIUnpKeWs3WEc1MllYSWdhWE5CWW5OdmJIVjBaVlZTVENBOUlISmxjWFZwY21Vb0p5NHZMaTR2YUdWc2NHVnljeTlwYzBGaWMyOXNkWFJsVlZKTUp5azdYRzUyWVhJZ1kyOXRZbWx1WlZWU1RITWdQU0J5WlhGMWFYSmxLQ2N1THk0dUwyaGxiSEJsY25NdlkyOXRZbWx1WlZWU1RITW5LVHRjYmx4dUx5b3FYRzRnS2lCVWFISnZkM01nWVNCZ1EyRnVZMlZzWUNCcFppQmpZVzVqWld4c1lYUnBiMjRnYUdGeklHSmxaVzRnY21WeGRXVnpkR1ZrTGx4dUlDb3ZYRzVtZFc1amRHbHZiaUIwYUhKdmQwbG1RMkZ1WTJWc2JHRjBhVzl1VW1WeGRXVnpkR1ZrS0dOdmJtWnBaeWtnZTF4dUlDQnBaaUFvWTI5dVptbG5MbU5oYm1ObGJGUnZhMlZ1S1NCN1hHNGdJQ0FnWTI5dVptbG5MbU5oYm1ObGJGUnZhMlZ1TG5Sb2NtOTNTV1pTWlhGMVpYTjBaV1FvS1R0Y2JpQWdmVnh1ZlZ4dVhHNHZLaXBjYmlBcUlFUnBjM0JoZEdOb0lHRWdjbVZ4ZFdWemRDQjBieUIwYUdVZ2MyVnlkbVZ5SUhWemFXNW5JSFJvWlNCamIyNW1hV2QxY21Wa0lHRmtZWEIwWlhJdVhHNGdLbHh1SUNvZ1FIQmhjbUZ0SUh0dlltcGxZM1I5SUdOdmJtWnBaeUJVYUdVZ1kyOXVabWxuSUhSb1lYUWdhWE1nZEc4Z1ltVWdkWE5sWkNCbWIzSWdkR2hsSUhKbGNYVmxjM1JjYmlBcUlFQnlaWFIxY201eklIdFFjbTl0YVhObGZTQlVhR1VnVUhKdmJXbHpaU0IwYnlCaVpTQm1kV3htYVd4c1pXUmNiaUFxTDF4dWJXOWtkV3hsTG1WNGNHOXlkSE1nUFNCbWRXNWpkR2x2YmlCa2FYTndZWFJqYUZKbGNYVmxjM1FvWTI5dVptbG5LU0I3WEc0Z0lIUm9jbTkzU1daRFlXNWpaV3hzWVhScGIyNVNaWEYxWlhOMFpXUW9ZMjl1Wm1sbktUdGNibHh1SUNBdkx5QlRkWEJ3YjNKMElHSmhjMlZWVWt3Z1kyOXVabWxuWEc0Z0lHbG1JQ2hqYjI1bWFXY3VZbUZ6WlZWU1RDQW1KaUFoYVhOQlluTnZiSFYwWlZWU1RDaGpiMjVtYVdjdWRYSnNLU2tnZTF4dUlDQWdJR052Ym1acFp5NTFjbXdnUFNCamIyMWlhVzVsVlZKTWN5aGpiMjVtYVdjdVltRnpaVlZTVEN3Z1kyOXVabWxuTG5WeWJDazdYRzRnSUgxY2JseHVJQ0F2THlCRmJuTjFjbVVnYUdWaFpHVnljeUJsZUdsemRGeHVJQ0JqYjI1bWFXY3VhR1ZoWkdWeWN5QTlJR052Ym1acFp5NW9aV0ZrWlhKeklIeDhJSHQ5TzF4dVhHNGdJQzh2SUZSeVlXNXpabTl5YlNCeVpYRjFaWE4wSUdSaGRHRmNiaUFnWTI5dVptbG5MbVJoZEdFZ1BTQjBjbUZ1YzJadmNtMUVZWFJoS0Z4dUlDQWdJR052Ym1acFp5NWtZWFJoTEZ4dUlDQWdJR052Ym1acFp5NW9aV0ZrWlhKekxGeHVJQ0FnSUdOdmJtWnBaeTUwY21GdWMyWnZjbTFTWlhGMVpYTjBYRzRnSUNrN1hHNWNiaUFnTHk4Z1JteGhkSFJsYmlCb1pXRmtaWEp6WEc0Z0lHTnZibVpwWnk1b1pXRmtaWEp6SUQwZ2RYUnBiSE11YldWeVoyVW9YRzRnSUNBZ1kyOXVabWxuTG1obFlXUmxjbk11WTI5dGJXOXVJSHg4SUh0OUxGeHVJQ0FnSUdOdmJtWnBaeTVvWldGa1pYSnpXMk52Ym1acFp5NXRaWFJvYjJSZElIeDhJSHQ5TEZ4dUlDQWdJR052Ym1acFp5NW9aV0ZrWlhKeklIeDhJSHQ5WEc0Z0lDazdYRzVjYmlBZ2RYUnBiSE11Wm05eVJXRmphQ2hjYmlBZ0lDQmJKMlJsYkdWMFpTY3NJQ2RuWlhRbkxDQW5hR1ZoWkNjc0lDZHdiM04wSnl3Z0ozQjFkQ2NzSUNkd1lYUmphQ2NzSUNkamIyMXRiMjRuWFN4Y2JpQWdJQ0JtZFc1amRHbHZiaUJqYkdWaGJraGxZV1JsY2tOdmJtWnBaeWh0WlhSb2IyUXBJSHRjYmlBZ0lDQWdJR1JsYkdWMFpTQmpiMjVtYVdjdWFHVmhaR1Z5YzF0dFpYUm9iMlJkTzF4dUlDQWdJSDFjYmlBZ0tUdGNibHh1SUNCMllYSWdZV1JoY0hSbGNpQTlJR052Ym1acFp5NWhaR0Z3ZEdWeUlIeDhJR1JsWm1GMWJIUnpMbUZrWVhCMFpYSTdYRzVjYmlBZ2NtVjBkWEp1SUdGa1lYQjBaWElvWTI5dVptbG5LUzUwYUdWdUtHWjFibU4wYVc5dUlHOXVRV1JoY0hSbGNsSmxjMjlzZFhScGIyNG9jbVZ6Y0c5dWMyVXBJSHRjYmlBZ0lDQjBhSEp2ZDBsbVEyRnVZMlZzYkdGMGFXOXVVbVZ4ZFdWemRHVmtLR052Ym1acFp5azdYRzVjYmlBZ0lDQXZMeUJVY21GdWMyWnZjbTBnY21WemNHOXVjMlVnWkdGMFlWeHVJQ0FnSUhKbGMzQnZibk5sTG1SaGRHRWdQU0IwY21GdWMyWnZjbTFFWVhSaEtGeHVJQ0FnSUNBZ2NtVnpjRzl1YzJVdVpHRjBZU3hjYmlBZ0lDQWdJSEpsYzNCdmJuTmxMbWhsWVdSbGNuTXNYRzRnSUNBZ0lDQmpiMjVtYVdjdWRISmhibk5tYjNKdFVtVnpjRzl1YzJWY2JpQWdJQ0FwTzF4dVhHNGdJQ0FnY21WMGRYSnVJSEpsYzNCdmJuTmxPMXh1SUNCOUxDQm1kVzVqZEdsdmJpQnZia0ZrWVhCMFpYSlNaV3BsWTNScGIyNG9jbVZoYzI5dUtTQjdYRzRnSUNBZ2FXWWdLQ0ZwYzBOaGJtTmxiQ2h5WldGemIyNHBLU0I3WEc0Z0lDQWdJQ0IwYUhKdmQwbG1RMkZ1WTJWc2JHRjBhVzl1VW1WeGRXVnpkR1ZrS0dOdmJtWnBaeWs3WEc1Y2JpQWdJQ0FnSUM4dklGUnlZVzV6Wm05eWJTQnlaWE53YjI1elpTQmtZWFJoWEc0Z0lDQWdJQ0JwWmlBb2NtVmhjMjl1SUNZbUlISmxZWE52Ymk1eVpYTndiMjV6WlNrZ2UxeHVJQ0FnSUNBZ0lDQnlaV0Z6YjI0dWNtVnpjRzl1YzJVdVpHRjBZU0E5SUhSeVlXNXpabTl5YlVSaGRHRW9YRzRnSUNBZ0lDQWdJQ0FnY21WaGMyOXVMbkpsYzNCdmJuTmxMbVJoZEdFc1hHNGdJQ0FnSUNBZ0lDQWdjbVZoYzI5dUxuSmxjM0J2Ym5ObExtaGxZV1JsY25Nc1hHNGdJQ0FnSUNBZ0lDQWdZMjl1Wm1sbkxuUnlZVzV6Wm05eWJWSmxjM0J2Ym5ObFhHNGdJQ0FnSUNBZ0lDazdYRzRnSUNBZ0lDQjlYRzRnSUNBZ2ZWeHVYRzRnSUNBZ2NtVjBkWEp1SUZCeWIyMXBjMlV1Y21WcVpXTjBLSEpsWVhOdmJpazdYRzRnSUgwcE8xeHVmVHRjYmlJc0lpZDFjMlVnYzNSeWFXTjBKenRjYmx4dUx5b3FYRzRnS2lCVmNHUmhkR1VnWVc0Z1JYSnliM0lnZDJsMGFDQjBhR1VnYzNCbFkybG1hV1ZrSUdOdmJtWnBaeXdnWlhKeWIzSWdZMjlrWlN3Z1lXNWtJSEpsYzNCdmJuTmxMbHh1SUNwY2JpQXFJRUJ3WVhKaGJTQjdSWEp5YjNKOUlHVnljbTl5SUZSb1pTQmxjbkp2Y2lCMGJ5QjFjR1JoZEdVdVhHNGdLaUJBY0dGeVlXMGdlMDlpYW1WamRIMGdZMjl1Wm1sbklGUm9aU0JqYjI1bWFXY3VYRzRnS2lCQWNHRnlZVzBnZTNOMGNtbHVaMzBnVzJOdlpHVmRJRlJvWlNCbGNuSnZjaUJqYjJSbElDaG1iM0lnWlhoaGJYQnNaU3dnSjBWRFQwNU9RVUpQVWxSRlJDY3BMbHh1SUNvZ1FIQmhjbUZ0SUh0UFltcGxZM1I5SUZ0eVpYRjFaWE4wWFNCVWFHVWdjbVZ4ZFdWemRDNWNiaUFxSUVCd1lYSmhiU0I3VDJKcVpXTjBmU0JiY21WemNHOXVjMlZkSUZSb1pTQnlaWE53YjI1elpTNWNiaUFxSUVCeVpYUjFjbTV6SUh0RmNuSnZjbjBnVkdobElHVnljbTl5TGx4dUlDb3ZYRzV0YjJSMWJHVXVaWGh3YjNKMGN5QTlJR1oxYm1OMGFXOXVJR1Z1YUdGdVkyVkZjbkp2Y2lobGNuSnZjaXdnWTI5dVptbG5MQ0JqYjJSbExDQnlaWEYxWlhOMExDQnlaWE53YjI1elpTa2dlMXh1SUNCbGNuSnZjaTVqYjI1bWFXY2dQU0JqYjI1bWFXYzdYRzRnSUdsbUlDaGpiMlJsS1NCN1hHNGdJQ0FnWlhKeWIzSXVZMjlrWlNBOUlHTnZaR1U3WEc0Z0lIMWNiaUFnWlhKeWIzSXVjbVZ4ZFdWemRDQTlJSEpsY1hWbGMzUTdYRzRnSUdWeWNtOXlMbkpsYzNCdmJuTmxJRDBnY21WemNHOXVjMlU3WEc0Z0lISmxkSFZ5YmlCbGNuSnZjanRjYm4wN1hHNGlMQ0luZFhObElITjBjbWxqZENjN1hHNWNiblpoY2lCamNtVmhkR1ZGY25KdmNpQTlJSEpsY1hWcGNtVW9KeTR2WTNKbFlYUmxSWEp5YjNJbktUdGNibHh1THlvcVhHNGdLaUJTWlhOdmJIWmxJRzl5SUhKbGFtVmpkQ0JoSUZCeWIyMXBjMlVnWW1GelpXUWdiMjRnY21WemNHOXVjMlVnYzNSaGRIVnpMbHh1SUNwY2JpQXFJRUJ3WVhKaGJTQjdSblZ1WTNScGIyNTlJSEpsYzI5c2RtVWdRU0JtZFc1amRHbHZiaUIwYUdGMElISmxjMjlzZG1WeklIUm9aU0J3Y205dGFYTmxMbHh1SUNvZ1FIQmhjbUZ0SUh0R2RXNWpkR2x2Ym4wZ2NtVnFaV04wSUVFZ1puVnVZM1JwYjI0Z2RHaGhkQ0J5WldwbFkzUnpJSFJvWlNCd2NtOXRhWE5sTGx4dUlDb2dRSEJoY21GdElIdHZZbXBsWTNSOUlISmxjM0J2Ym5ObElGUm9aU0J5WlhOd2IyNXpaUzVjYmlBcUwxeHViVzlrZFd4bExtVjRjRzl5ZEhNZ1BTQm1kVzVqZEdsdmJpQnpaWFIwYkdVb2NtVnpiMngyWlN3Z2NtVnFaV04wTENCeVpYTndiMjV6WlNrZ2UxeHVJQ0IyWVhJZ2RtRnNhV1JoZEdWVGRHRjBkWE1nUFNCeVpYTndiMjV6WlM1amIyNW1hV2N1ZG1Gc2FXUmhkR1ZUZEdGMGRYTTdYRzRnSUM4dklFNXZkR1U2SUhOMFlYUjFjeUJwY3lCdWIzUWdaWGh3YjNObFpDQmllU0JZUkc5dFlXbHVVbVZ4ZFdWemRGeHVJQ0JwWmlBb0lYSmxjM0J2Ym5ObExuTjBZWFIxY3lCOGZDQWhkbUZzYVdSaGRHVlRkR0YwZFhNZ2ZId2dkbUZzYVdSaGRHVlRkR0YwZFhNb2NtVnpjRzl1YzJVdWMzUmhkSFZ6S1NrZ2UxeHVJQ0FnSUhKbGMyOXNkbVVvY21WemNHOXVjMlVwTzF4dUlDQjlJR1ZzYzJVZ2UxeHVJQ0FnSUhKbGFtVmpkQ2hqY21WaGRHVkZjbkp2Y2loY2JpQWdJQ0FnSUNkU1pYRjFaWE4wSUdaaGFXeGxaQ0IzYVhSb0lITjBZWFIxY3lCamIyUmxJQ2NnS3lCeVpYTndiMjV6WlM1emRHRjBkWE1zWEc0Z0lDQWdJQ0J5WlhOd2IyNXpaUzVqYjI1bWFXY3NYRzRnSUNBZ0lDQnVkV3hzTEZ4dUlDQWdJQ0FnY21WemNHOXVjMlV1Y21WeGRXVnpkQ3hjYmlBZ0lDQWdJSEpsYzNCdmJuTmxYRzRnSUNBZ0tTazdYRzRnSUgxY2JuMDdYRzRpTENJbmRYTmxJSE4wY21samRDYzdYRzVjYm5aaGNpQjFkR2xzY3lBOUlISmxjWFZwY21Vb0p5NHZMaTR2ZFhScGJITW5LVHRjYmx4dUx5b3FYRzRnS2lCVWNtRnVjMlp2Y20wZ2RHaGxJR1JoZEdFZ1ptOXlJR0VnY21WeGRXVnpkQ0J2Y2lCaElISmxjM0J2Ym5ObFhHNGdLbHh1SUNvZ1FIQmhjbUZ0SUh0UFltcGxZM1I4VTNSeWFXNW5mU0JrWVhSaElGUm9aU0JrWVhSaElIUnZJR0psSUhSeVlXNXpabTl5YldWa1hHNGdLaUJBY0dGeVlXMGdlMEZ5Y21GNWZTQm9aV0ZrWlhKeklGUm9aU0JvWldGa1pYSnpJR1p2Y2lCMGFHVWdjbVZ4ZFdWemRDQnZjaUJ5WlhOd2IyNXpaVnh1SUNvZ1FIQmhjbUZ0SUh0QmNuSmhlWHhHZFc1amRHbHZibjBnWm01eklFRWdjMmx1WjJ4bElHWjFibU4wYVc5dUlHOXlJRUZ5Y21GNUlHOW1JR1oxYm1OMGFXOXVjMXh1SUNvZ1FISmxkSFZ5Ym5NZ2V5cDlJRlJvWlNCeVpYTjFiSFJwYm1jZ2RISmhibk5tYjNKdFpXUWdaR0YwWVZ4dUlDb3ZYRzV0YjJSMWJHVXVaWGh3YjNKMGN5QTlJR1oxYm1OMGFXOXVJSFJ5WVc1elptOXliVVJoZEdFb1pHRjBZU3dnYUdWaFpHVnljeXdnWm01ektTQjdYRzRnSUM4cVpYTnNhVzUwSUc1dkxYQmhjbUZ0TFhKbFlYTnphV2R1T2pBcUwxeHVJQ0IxZEdsc2N5NW1iM0pGWVdOb0tHWnVjeXdnWm5WdVkzUnBiMjRnZEhKaGJuTm1iM0p0S0dadUtTQjdYRzRnSUNBZ1pHRjBZU0E5SUdadUtHUmhkR0VzSUdobFlXUmxjbk1wTzF4dUlDQjlLVHRjYmx4dUlDQnlaWFIxY200Z1pHRjBZVHRjYm4wN1hHNGlMQ0luZFhObElITjBjbWxqZENjN1hHNWNiblpoY2lCMWRHbHNjeUE5SUhKbGNYVnBjbVVvSnk0dmRYUnBiSE1uS1R0Y2JuWmhjaUJ1YjNKdFlXeHBlbVZJWldGa1pYSk9ZVzFsSUQwZ2NtVnhkV2x5WlNnbkxpOW9aV3h3WlhKekwyNXZjbTFoYkdsNlpVaGxZV1JsY2s1aGJXVW5LVHRjYmx4dWRtRnlJRVJGUmtGVlRGUmZRMDlPVkVWT1ZGOVVXVkJGSUQwZ2UxeHVJQ0FuUTI5dWRHVnVkQzFVZVhCbEp6b2dKMkZ3Y0d4cFkyRjBhVzl1TDNndGQzZDNMV1p2Y20wdGRYSnNaVzVqYjJSbFpDZGNibjA3WEc1Y2JtWjFibU4wYVc5dUlITmxkRU52Ym5SbGJuUlVlWEJsU1daVmJuTmxkQ2hvWldGa1pYSnpMQ0IyWVd4MVpTa2dlMXh1SUNCcFppQW9JWFYwYVd4ekxtbHpWVzVrWldacGJtVmtLR2hsWVdSbGNuTXBJQ1ltSUhWMGFXeHpMbWx6Vlc1a1pXWnBibVZrS0dobFlXUmxjbk5iSjBOdmJuUmxiblF0Vkhsd1pTZGRLU2tnZTF4dUlDQWdJR2hsWVdSbGNuTmJKME52Ym5SbGJuUXRWSGx3WlNkZElEMGdkbUZzZFdVN1hHNGdJSDFjYm4xY2JseHVablZ1WTNScGIyNGdaMlYwUkdWbVlYVnNkRUZrWVhCMFpYSW9LU0I3WEc0Z0lIWmhjaUJoWkdGd2RHVnlPMXh1SUNCcFppQW9kSGx3Wlc5bUlGaE5URWgwZEhCU1pYRjFaWE4wSUNFOVBTQW5kVzVrWldacGJtVmtKeWtnZTF4dUlDQWdJQzh2SUVadmNpQmljbTkzYzJWeWN5QjFjMlVnV0VoU0lHRmtZWEIwWlhKY2JpQWdJQ0JoWkdGd2RHVnlJRDBnY21WeGRXbHlaU2duTGk5aFpHRndkR1Z5Y3k5NGFISW5LVHRjYmlBZ2ZTQmxiSE5sSUdsbUlDaDBlWEJsYjJZZ2NISnZZMlZ6Y3lBaFBUMGdKM1Z1WkdWbWFXNWxaQ2NwSUh0Y2JpQWdJQ0F2THlCR2IzSWdibTlrWlNCMWMyVWdTRlJVVUNCaFpHRndkR1Z5WEc0Z0lDQWdZV1JoY0hSbGNpQTlJSEpsY1hWcGNtVW9KeTR2WVdSaGNIUmxjbk12YUhSMGNDY3BPMXh1SUNCOVhHNGdJSEpsZEhWeWJpQmhaR0Z3ZEdWeU8xeHVmVnh1WEc1MllYSWdaR1ZtWVhWc2RITWdQU0I3WEc0Z0lHRmtZWEIwWlhJNklHZGxkRVJsWm1GMWJIUkJaR0Z3ZEdWeUtDa3NYRzVjYmlBZ2RISmhibk5tYjNKdFVtVnhkV1Z6ZERvZ1cyWjFibU4wYVc5dUlIUnlZVzV6Wm05eWJWSmxjWFZsYzNRb1pHRjBZU3dnYUdWaFpHVnljeWtnZTF4dUlDQWdJRzV2Y20xaGJHbDZaVWhsWVdSbGNrNWhiV1VvYUdWaFpHVnljeXdnSjBOdmJuUmxiblF0Vkhsd1pTY3BPMXh1SUNBZ0lHbG1JQ2gxZEdsc2N5NXBjMFp2Y20xRVlYUmhLR1JoZEdFcElIeDhYRzRnSUNBZ0lDQjFkR2xzY3k1cGMwRnljbUY1UW5WbVptVnlLR1JoZEdFcElIeDhYRzRnSUNBZ0lDQjFkR2xzY3k1cGMwSjFabVpsY2loa1lYUmhLU0I4ZkZ4dUlDQWdJQ0FnZFhScGJITXVhWE5UZEhKbFlXMG9aR0YwWVNrZ2ZIeGNiaUFnSUNBZ0lIVjBhV3h6TG1selJtbHNaU2hrWVhSaEtTQjhmRnh1SUNBZ0lDQWdkWFJwYkhNdWFYTkNiRzlpS0dSaGRHRXBYRzRnSUNBZ0tTQjdYRzRnSUNBZ0lDQnlaWFIxY200Z1pHRjBZVHRjYmlBZ0lDQjlYRzRnSUNBZ2FXWWdLSFYwYVd4ekxtbHpRWEp5WVhsQ2RXWm1aWEpXYVdWM0tHUmhkR0VwS1NCN1hHNGdJQ0FnSUNCeVpYUjFjbTRnWkdGMFlTNWlkV1ptWlhJN1hHNGdJQ0FnZlZ4dUlDQWdJR2xtSUNoMWRHbHNjeTVwYzFWU1RGTmxZWEpqYUZCaGNtRnRjeWhrWVhSaEtTa2dlMXh1SUNBZ0lDQWdjMlYwUTI5dWRHVnVkRlI1Y0dWSlpsVnVjMlYwS0dobFlXUmxjbk1zSUNkaGNIQnNhV05oZEdsdmJpOTRMWGQzZHkxbWIzSnRMWFZ5YkdWdVkyOWtaV1E3WTJoaGNuTmxkRDExZEdZdE9DY3BPMXh1SUNBZ0lDQWdjbVYwZFhKdUlHUmhkR0V1ZEc5VGRISnBibWNvS1R0Y2JpQWdJQ0I5WEc0Z0lDQWdhV1lnS0hWMGFXeHpMbWx6VDJKcVpXTjBLR1JoZEdFcEtTQjdYRzRnSUNBZ0lDQnpaWFJEYjI1MFpXNTBWSGx3WlVsbVZXNXpaWFFvYUdWaFpHVnljeXdnSjJGd2NHeHBZMkYwYVc5dUwycHpiMjQ3WTJoaGNuTmxkRDExZEdZdE9DY3BPMXh1SUNBZ0lDQWdjbVYwZFhKdUlFcFRUMDR1YzNSeWFXNW5hV1o1S0dSaGRHRXBPMXh1SUNBZ0lIMWNiaUFnSUNCeVpYUjFjbTRnWkdGMFlUdGNiaUFnZlYwc1hHNWNiaUFnZEhKaGJuTm1iM0p0VW1WemNHOXVjMlU2SUZ0bWRXNWpkR2x2YmlCMGNtRnVjMlp2Y20xU1pYTndiMjV6WlNoa1lYUmhLU0I3WEc0Z0lDQWdMeXBsYzJ4cGJuUWdibTh0Y0dGeVlXMHRjbVZoYzNOcFoyNDZNQ292WEc0Z0lDQWdhV1lnS0hSNWNHVnZaaUJrWVhSaElEMDlQU0FuYzNSeWFXNW5KeWtnZTF4dUlDQWdJQ0FnZEhKNUlIdGNiaUFnSUNBZ0lDQWdaR0YwWVNBOUlFcFRUMDR1Y0dGeWMyVW9aR0YwWVNrN1hHNGdJQ0FnSUNCOUlHTmhkR05vSUNobEtTQjdJQzhxSUVsbmJtOXlaU0FxTHlCOVhHNGdJQ0FnZlZ4dUlDQWdJSEpsZEhWeWJpQmtZWFJoTzF4dUlDQjlYU3hjYmx4dUlDQXZLaXBjYmlBZ0lDb2dRU0IwYVcxbGIzVjBJR2x1SUcxcGJHeHBjMlZqYjI1a2N5QjBieUJoWW05eWRDQmhJSEpsY1hWbGMzUXVJRWxtSUhObGRDQjBieUF3SUNoa1pXWmhkV3gwS1NCaFhHNGdJQ0FxSUhScGJXVnZkWFFnYVhNZ2JtOTBJR055WldGMFpXUXVYRzRnSUNBcUwxeHVJQ0IwYVcxbGIzVjBPaUF3TEZ4dVhHNGdJSGh6Y21aRGIyOXJhV1ZPWVcxbE9pQW5XRk5TUmkxVVQwdEZUaWNzWEc0Z0lIaHpjbVpJWldGa1pYSk9ZVzFsT2lBbldDMVlVMUpHTFZSUFMwVk9KeXhjYmx4dUlDQnRZWGhEYjI1MFpXNTBUR1Z1WjNSb09pQXRNU3hjYmx4dUlDQjJZV3hwWkdGMFpWTjBZWFIxY3pvZ1puVnVZM1JwYjI0Z2RtRnNhV1JoZEdWVGRHRjBkWE1vYzNSaGRIVnpLU0I3WEc0Z0lDQWdjbVYwZFhKdUlITjBZWFIxY3lBK1BTQXlNREFnSmlZZ2MzUmhkSFZ6SUR3Z016QXdPMXh1SUNCOVhHNTlPMXh1WEc1a1pXWmhkV3gwY3k1b1pXRmtaWEp6SUQwZ2UxeHVJQ0JqYjIxdGIyNDZJSHRjYmlBZ0lDQW5RV05qWlhCMEp6b2dKMkZ3Y0d4cFkyRjBhVzl1TDJwemIyNHNJSFJsZUhRdmNHeGhhVzRzSUNvdktpZGNiaUFnZlZ4dWZUdGNibHh1ZFhScGJITXVabTl5UldGamFDaGJKMlJsYkdWMFpTY3NJQ2RuWlhRbkxDQW5hR1ZoWkNkZExDQm1kVzVqZEdsdmJpQm1iM0pGWVdOb1RXVjBhRzlrVG05RVlYUmhLRzFsZEdodlpDa2dlMXh1SUNCa1pXWmhkV3gwY3k1b1pXRmtaWEp6VzIxbGRHaHZaRjBnUFNCN2ZUdGNibjBwTzF4dVhHNTFkR2xzY3k1bWIzSkZZV05vS0ZzbmNHOXpkQ2NzSUNkd2RYUW5MQ0FuY0dGMFkyZ25YU3dnWm5WdVkzUnBiMjRnWm05eVJXRmphRTFsZEdodlpGZHBkR2hFWVhSaEtHMWxkR2h2WkNrZ2UxeHVJQ0JrWldaaGRXeDBjeTVvWldGa1pYSnpXMjFsZEdodlpGMGdQU0IxZEdsc2N5NXRaWEpuWlNoRVJVWkJWVXhVWDBOUFRsUkZUbFJmVkZsUVJTazdYRzU5S1R0Y2JseHViVzlrZFd4bExtVjRjRzl5ZEhNZ1BTQmtaV1poZFd4MGN6dGNiaUlzSWlkMWMyVWdjM1J5YVdOMEp6dGNibHh1Ylc5a2RXeGxMbVY0Y0c5eWRITWdQU0JtZFc1amRHbHZiaUJpYVc1a0tHWnVMQ0IwYUdselFYSm5LU0I3WEc0Z0lISmxkSFZ5YmlCbWRXNWpkR2x2YmlCM2NtRndLQ2tnZTF4dUlDQWdJSFpoY2lCaGNtZHpJRDBnYm1WM0lFRnljbUY1S0dGeVozVnRaVzUwY3k1c1pXNW5kR2dwTzF4dUlDQWdJR1p2Y2lBb2RtRnlJR2tnUFNBd095QnBJRHdnWVhKbmN5NXNaVzVuZEdnN0lHa3JLeWtnZTF4dUlDQWdJQ0FnWVhKbmMxdHBYU0E5SUdGeVozVnRaVzUwYzF0cFhUdGNiaUFnSUNCOVhHNGdJQ0FnY21WMGRYSnVJR1p1TG1Gd2NHeDVLSFJvYVhOQmNtY3NJR0Z5WjNNcE8xeHVJQ0I5TzF4dWZUdGNiaUlzSWlkMWMyVWdjM1J5YVdOMEp6dGNibHh1THk4Z1luUnZZU0J3YjJ4NVptbHNiQ0JtYjNJZ1NVVThNVEFnWTI5MWNuUmxjM2tnYUhSMGNITTZMeTluYVhSb2RXSXVZMjl0TDJSaGRtbGtZMmhoYldKbGNuTXZRbUZ6WlRZMExtcHpYRzVjYm5aaGNpQmphR0Z5Y3lBOUlDZEJRa05FUlVaSFNFbEtTMHhOVGs5UVVWSlRWRlZXVjFoWldtRmlZMlJsWm1kb2FXcHJiRzF1YjNCeGNuTjBkWFozZUhsNk1ERXlNelExTmpjNE9Tc3ZQU2M3WEc1Y2JtWjFibU4wYVc5dUlFVW9LU0I3WEc0Z0lIUm9hWE11YldWemMyRm5aU0E5SUNkVGRISnBibWNnWTI5dWRHRnBibk1nWVc0Z2FXNTJZV3hwWkNCamFHRnlZV04wWlhJbk8xeHVmVnh1UlM1d2NtOTBiM1I1Y0dVZ1BTQnVaWGNnUlhKeWIzSTdYRzVGTG5CeWIzUnZkSGx3WlM1amIyUmxJRDBnTlR0Y2JrVXVjSEp2ZEc5MGVYQmxMbTVoYldVZ1BTQW5TVzUyWVd4cFpFTm9ZWEpoWTNSbGNrVnljbTl5Snp0Y2JseHVablZ1WTNScGIyNGdZblJ2WVNocGJuQjFkQ2tnZTF4dUlDQjJZWElnYzNSeUlEMGdVM1J5YVc1bktHbHVjSFYwS1R0Y2JpQWdkbUZ5SUc5MWRIQjFkQ0E5SUNjbk8xeHVJQ0JtYjNJZ0tGeHVJQ0FnSUM4dklHbHVhWFJwWVd4cGVtVWdjbVZ6ZFd4MElHRnVaQ0JqYjNWdWRHVnlYRzRnSUNBZ2RtRnlJR0pzYjJOckxDQmphR0Z5UTI5a1pTd2dhV1I0SUQwZ01Dd2diV0Z3SUQwZ1kyaGhjbk03WEc0Z0lDQWdMeThnYVdZZ2RHaGxJRzVsZUhRZ2MzUnlJR2x1WkdWNElHUnZaWE1nYm05MElHVjRhWE4wT2x4dUlDQWdJQzh2SUNBZ1kyaGhibWRsSUhSb1pTQnRZWEJ3YVc1bklIUmhZbXhsSUhSdklGd2lQVndpWEc0Z0lDQWdMeThnSUNCamFHVmpheUJwWmlCa0lHaGhjeUJ1YnlCbWNtRmpkR2x2Ym1Gc0lHUnBaMmwwYzF4dUlDQWdJSE4wY2k1amFHRnlRWFFvYVdSNElId2dNQ2tnZkh3Z0tHMWhjQ0E5SUNjOUp5d2dhV1I0SUNVZ01TazdYRzRnSUNBZ0x5OGdYQ0k0SUMwZ2FXUjRJQ1VnTVNBcUlEaGNJaUJuWlc1bGNtRjBaWE1nZEdobElITmxjWFZsYm1ObElESXNJRFFzSURZc0lEaGNiaUFnSUNCdmRYUndkWFFnS3owZ2JXRndMbU5vWVhKQmRDZzJNeUFtSUdKc2IyTnJJRDQrSURnZ0xTQnBaSGdnSlNBeElDb2dPQ2xjYmlBZ0tTQjdYRzRnSUNBZ1kyaGhja052WkdVZ1BTQnpkSEl1WTJoaGNrTnZaR1ZCZENocFpIZ2dLejBnTXlBdklEUXBPMXh1SUNBZ0lHbG1JQ2hqYUdGeVEyOWtaU0ErSURCNFJrWXBJSHRjYmlBZ0lDQWdJSFJvY205M0lHNWxkeUJGS0NrN1hHNGdJQ0FnZlZ4dUlDQWdJR0pzYjJOcklEMGdZbXh2WTJzZ1BEd2dPQ0I4SUdOb1lYSkRiMlJsTzF4dUlDQjlYRzRnSUhKbGRIVnliaUJ2ZFhSd2RYUTdYRzU5WEc1Y2JtMXZaSFZzWlM1bGVIQnZjblJ6SUQwZ1luUnZZVHRjYmlJc0lpZDFjMlVnYzNSeWFXTjBKenRjYmx4dWRtRnlJSFYwYVd4eklEMGdjbVZ4ZFdseVpTZ25MaTh1TGk5MWRHbHNjeWNwTzF4dVhHNW1kVzVqZEdsdmJpQmxibU52WkdVb2RtRnNLU0I3WEc0Z0lISmxkSFZ5YmlCbGJtTnZaR1ZWVWtsRGIyMXdiMjVsYm5Rb2RtRnNLUzVjYmlBZ0lDQnlaWEJzWVdObEtDOGxOREF2WjJrc0lDZEFKeWt1WEc0Z0lDQWdjbVZ3YkdGalpTZ3ZKVE5CTDJkcExDQW5PaWNwTGx4dUlDQWdJSEpsY0d4aFkyVW9MeVV5TkM5bkxDQW5KQ2NwTGx4dUlDQWdJSEpsY0d4aFkyVW9MeVV5UXk5bmFTd2dKeXduS1M1Y2JpQWdJQ0J5WlhCc1lXTmxLQzhsTWpBdlp5d2dKeXNuS1M1Y2JpQWdJQ0J5WlhCc1lXTmxLQzhsTlVJdloya3NJQ2RiSnlrdVhHNGdJQ0FnY21Wd2JHRmpaU2d2SlRWRUwyZHBMQ0FuWFNjcE8xeHVmVnh1WEc0dktpcGNiaUFxSUVKMWFXeGtJR0VnVlZKTUlHSjVJR0Z3Y0dWdVpHbHVaeUJ3WVhKaGJYTWdkRzhnZEdobElHVnVaRnh1SUNwY2JpQXFJRUJ3WVhKaGJTQjdjM1J5YVc1bmZTQjFjbXdnVkdobElHSmhjMlVnYjJZZ2RHaGxJSFZ5YkNBb1pTNW5MaXdnYUhSMGNEb3ZMM2QzZHk1bmIyOW5iR1V1WTI5dEtWeHVJQ29nUUhCaGNtRnRJSHR2WW1wbFkzUjlJRnR3WVhKaGJYTmRJRlJvWlNCd1lYSmhiWE1nZEc4Z1ltVWdZWEJ3Wlc1a1pXUmNiaUFxSUVCeVpYUjFjbTV6SUh0emRISnBibWQ5SUZSb1pTQm1iM0p0WVhSMFpXUWdkWEpzWEc0Z0tpOWNibTF2WkhWc1pTNWxlSEJ2Y25SeklEMGdablZ1WTNScGIyNGdZblZwYkdSVlVrd29kWEpzTENCd1lYSmhiWE1zSUhCaGNtRnRjMU5sY21saGJHbDZaWElwSUh0Y2JpQWdMeXBsYzJ4cGJuUWdibTh0Y0dGeVlXMHRjbVZoYzNOcFoyNDZNQ292WEc0Z0lHbG1JQ2doY0dGeVlXMXpLU0I3WEc0Z0lDQWdjbVYwZFhKdUlIVnliRHRjYmlBZ2ZWeHVYRzRnSUhaaGNpQnpaWEpwWVd4cGVtVmtVR0Z5WVcxek8xeHVJQ0JwWmlBb2NHRnlZVzF6VTJWeWFXRnNhWHBsY2lrZ2UxeHVJQ0FnSUhObGNtbGhiR2w2WldSUVlYSmhiWE1nUFNCd1lYSmhiWE5UWlhKcFlXeHBlbVZ5S0hCaGNtRnRjeWs3WEc0Z0lIMGdaV3h6WlNCcFppQW9kWFJwYkhNdWFYTlZVa3hUWldGeVkyaFFZWEpoYlhNb2NHRnlZVzF6S1NrZ2UxeHVJQ0FnSUhObGNtbGhiR2w2WldSUVlYSmhiWE1nUFNCd1lYSmhiWE11ZEc5VGRISnBibWNvS1R0Y2JpQWdmU0JsYkhObElIdGNiaUFnSUNCMllYSWdjR0Z5ZEhNZ1BTQmJYVHRjYmx4dUlDQWdJSFYwYVd4ekxtWnZja1ZoWTJnb2NHRnlZVzF6TENCbWRXNWpkR2x2YmlCelpYSnBZV3hwZW1Vb2RtRnNMQ0JyWlhrcElIdGNiaUFnSUNBZ0lHbG1JQ2gyWVd3Z1BUMDlJRzUxYkd3Z2ZId2dkSGx3Wlc5bUlIWmhiQ0E5UFQwZ0ozVnVaR1ZtYVc1bFpDY3BJSHRjYmlBZ0lDQWdJQ0FnY21WMGRYSnVPMXh1SUNBZ0lDQWdmVnh1WEc0Z0lDQWdJQ0JwWmlBb2RYUnBiSE11YVhOQmNuSmhlU2gyWVd3cEtTQjdYRzRnSUNBZ0lDQWdJR3RsZVNBOUlHdGxlU0FySUNkYlhTYzdYRzRnSUNBZ0lDQjlJR1ZzYzJVZ2UxeHVJQ0FnSUNBZ0lDQjJZV3dnUFNCYmRtRnNYVHRjYmlBZ0lDQWdJSDFjYmx4dUlDQWdJQ0FnZFhScGJITXVabTl5UldGamFDaDJZV3dzSUdaMWJtTjBhVzl1SUhCaGNuTmxWbUZzZFdVb2Rpa2dlMXh1SUNBZ0lDQWdJQ0JwWmlBb2RYUnBiSE11YVhORVlYUmxLSFlwS1NCN1hHNGdJQ0FnSUNBZ0lDQWdkaUE5SUhZdWRHOUpVMDlUZEhKcGJtY29LVHRjYmlBZ0lDQWdJQ0FnZlNCbGJITmxJR2xtSUNoMWRHbHNjeTVwYzA5aWFtVmpkQ2gyS1NrZ2UxeHVJQ0FnSUNBZ0lDQWdJSFlnUFNCS1UwOU9Mbk4wY21sdVoybG1lU2gyS1R0Y2JpQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQndZWEowY3k1d2RYTm9LR1Z1WTI5a1pTaHJaWGtwSUNzZ0p6MG5JQ3NnWlc1amIyUmxLSFlwS1R0Y2JpQWdJQ0FnSUgwcE8xeHVJQ0FnSUgwcE8xeHVYRzRnSUNBZ2MyVnlhV0ZzYVhwbFpGQmhjbUZ0Y3lBOUlIQmhjblJ6TG1wdmFXNG9KeVluS1R0Y2JpQWdmVnh1WEc0Z0lHbG1JQ2h6WlhKcFlXeHBlbVZrVUdGeVlXMXpLU0I3WEc0Z0lDQWdkWEpzSUNzOUlDaDFjbXd1YVc1a1pYaFBaaWduUHljcElEMDlQU0F0TVNBL0lDYy9KeUE2SUNjbUp5a2dLeUJ6WlhKcFlXeHBlbVZrVUdGeVlXMXpPMXh1SUNCOVhHNWNiaUFnY21WMGRYSnVJSFZ5YkR0Y2JuMDdYRzRpTENJbmRYTmxJSE4wY21samRDYzdYRzVjYmk4cUtseHVJQ29nUTNKbFlYUmxjeUJoSUc1bGR5QlZVa3dnWW5rZ1kyOXRZbWx1YVc1bklIUm9aU0J6Y0dWamFXWnBaV1FnVlZKTWMxeHVJQ3BjYmlBcUlFQndZWEpoYlNCN2MzUnlhVzVuZlNCaVlYTmxWVkpNSUZSb1pTQmlZWE5sSUZWU1RGeHVJQ29nUUhCaGNtRnRJSHR6ZEhKcGJtZDlJSEpsYkdGMGFYWmxWVkpNSUZSb1pTQnlaV3hoZEdsMlpTQlZVa3hjYmlBcUlFQnlaWFIxY201eklIdHpkSEpwYm1kOUlGUm9aU0JqYjIxaWFXNWxaQ0JWVWt4Y2JpQXFMMXh1Ylc5a2RXeGxMbVY0Y0c5eWRITWdQU0JtZFc1amRHbHZiaUJqYjIxaWFXNWxWVkpNY3loaVlYTmxWVkpNTENCeVpXeGhkR2wyWlZWU1RDa2dlMXh1SUNCeVpYUjFjbTRnY21Wc1lYUnBkbVZWVWt4Y2JpQWdJQ0EvSUdKaGMyVlZVa3d1Y21Wd2JHRmpaU2d2WEZ3dkt5UXZMQ0FuSnlrZ0t5QW5MeWNnS3lCeVpXeGhkR2wyWlZWU1RDNXlaWEJzWVdObEtDOWVYRnd2S3k4c0lDY25LVnh1SUNBZ0lEb2dZbUZ6WlZWU1REdGNibjA3WEc0aUxDSW5kWE5sSUhOMGNtbGpkQ2M3WEc1Y2JuWmhjaUIxZEdsc2N5QTlJSEpsY1hWcGNtVW9KeTR2TGk0dmRYUnBiSE1uS1R0Y2JseHViVzlrZFd4bExtVjRjRzl5ZEhNZ1BTQW9YRzRnSUhWMGFXeHpMbWx6VTNSaGJtUmhjbVJDY205M2MyVnlSVzUyS0NrZ1AxeHVYRzRnSUM4dklGTjBZVzVrWVhKa0lHSnliM2R6WlhJZ1pXNTJjeUJ6ZFhCd2IzSjBJR1J2WTNWdFpXNTBMbU52YjJ0cFpWeHVJQ0FvWm5WdVkzUnBiMjRnYzNSaGJtUmhjbVJDY205M2MyVnlSVzUyS0NrZ2UxeHVJQ0FnSUhKbGRIVnliaUI3WEc0Z0lDQWdJQ0IzY21sMFpUb2dablZ1WTNScGIyNGdkM0pwZEdVb2JtRnRaU3dnZG1Gc2RXVXNJR1Y0Y0dseVpYTXNJSEJoZEdnc0lHUnZiV0ZwYml3Z2MyVmpkWEpsS1NCN1hHNGdJQ0FnSUNBZ0lIWmhjaUJqYjI5cmFXVWdQU0JiWFR0Y2JpQWdJQ0FnSUNBZ1kyOXZhMmxsTG5CMWMyZ29ibUZ0WlNBcklDYzlKeUFySUdWdVkyOWtaVlZTU1VOdmJYQnZibVZ1ZENoMllXeDFaU2twTzF4dVhHNGdJQ0FnSUNBZ0lHbG1JQ2gxZEdsc2N5NXBjMDUxYldKbGNpaGxlSEJwY21WektTa2dlMXh1SUNBZ0lDQWdJQ0FnSUdOdmIydHBaUzV3ZFhOb0tDZGxlSEJwY21WelBTY2dLeUJ1WlhjZ1JHRjBaU2hsZUhCcGNtVnpLUzUwYjBkTlZGTjBjbWx1WnlncEtUdGNiaUFnSUNBZ0lDQWdmVnh1WEc0Z0lDQWdJQ0FnSUdsbUlDaDFkR2xzY3k1cGMxTjBjbWx1Wnlod1lYUm9LU2tnZTF4dUlDQWdJQ0FnSUNBZ0lHTnZiMnRwWlM1d2RYTm9LQ2R3WVhSb1BTY2dLeUJ3WVhSb0tUdGNiaUFnSUNBZ0lDQWdmVnh1WEc0Z0lDQWdJQ0FnSUdsbUlDaDFkR2xzY3k1cGMxTjBjbWx1Wnloa2IyMWhhVzRwS1NCN1hHNGdJQ0FnSUNBZ0lDQWdZMjl2YTJsbExuQjFjMmdvSjJSdmJXRnBiajBuSUNzZ1pHOXRZV2x1S1R0Y2JpQWdJQ0FnSUNBZ2ZWeHVYRzRnSUNBZ0lDQWdJR2xtSUNoelpXTjFjbVVnUFQwOUlIUnlkV1VwSUh0Y2JpQWdJQ0FnSUNBZ0lDQmpiMjlyYVdVdWNIVnphQ2duYzJWamRYSmxKeWs3WEc0Z0lDQWdJQ0FnSUgxY2JseHVJQ0FnSUNBZ0lDQmtiMk4xYldWdWRDNWpiMjlyYVdVZ1BTQmpiMjlyYVdVdWFtOXBiaWduT3lBbktUdGNiaUFnSUNBZ0lIMHNYRzVjYmlBZ0lDQWdJSEpsWVdRNklHWjFibU4wYVc5dUlISmxZV1FvYm1GdFpTa2dlMXh1SUNBZ0lDQWdJQ0IyWVhJZ2JXRjBZMmdnUFNCa2IyTjFiV1Z1ZEM1amIyOXJhV1V1YldGMFkyZ29ibVYzSUZKbFowVjRjQ2duS0Y1OE8xeGNYRnh6S2lrb0p5QXJJRzVoYldVZ0t5QW5LVDBvVzE0N1hTb3BKeWtwTzF4dUlDQWdJQ0FnSUNCeVpYUjFjbTRnS0cxaGRHTm9JRDhnWkdWamIyUmxWVkpKUTI5dGNHOXVaVzUwS0cxaGRHTm9Xek5kS1NBNklHNTFiR3dwTzF4dUlDQWdJQ0FnZlN4Y2JseHVJQ0FnSUNBZ2NtVnRiM1psT2lCbWRXNWpkR2x2YmlCeVpXMXZkbVVvYm1GdFpTa2dlMXh1SUNBZ0lDQWdJQ0IwYUdsekxuZHlhWFJsS0c1aGJXVXNJQ2NuTENCRVlYUmxMbTV2ZHlncElDMGdPRFkwTURBd01EQXBPMXh1SUNBZ0lDQWdmVnh1SUNBZ0lIMDdYRzRnSUgwcEtDa2dPbHh1WEc0Z0lDOHZJRTV2YmlCemRHRnVaR0Z5WkNCaWNtOTNjMlZ5SUdWdWRpQW9kMlZpSUhkdmNtdGxjbk1zSUhKbFlXTjBMVzVoZEdsMlpTa2diR0ZqYXlCdVpXVmtaV1FnYzNWd2NHOXlkQzVjYmlBZ0tHWjFibU4wYVc5dUlHNXZibE4wWVc1a1lYSmtRbkp2ZDNObGNrVnVkaWdwSUh0Y2JpQWdJQ0J5WlhSMWNtNGdlMXh1SUNBZ0lDQWdkM0pwZEdVNklHWjFibU4wYVc5dUlIZHlhWFJsS0NrZ2UzMHNYRzRnSUNBZ0lDQnlaV0ZrT2lCbWRXNWpkR2x2YmlCeVpXRmtLQ2tnZXlCeVpYUjFjbTRnYm5Wc2JEc2dmU3hjYmlBZ0lDQWdJSEpsYlc5MlpUb2dablZ1WTNScGIyNGdjbVZ0YjNabEtDa2dlMzFjYmlBZ0lDQjlPMXh1SUNCOUtTZ3BYRzRwTzF4dUlpd2lKM1Z6WlNCemRISnBZM1FuTzF4dVhHNHZLaXBjYmlBcUlFUmxkR1Z5YldsdVpYTWdkMmhsZEdobGNpQjBhR1VnYzNCbFkybG1hV1ZrSUZWU1RDQnBjeUJoWW5OdmJIVjBaVnh1SUNwY2JpQXFJRUJ3WVhKaGJTQjdjM1J5YVc1bmZTQjFjbXdnVkdobElGVlNUQ0IwYnlCMFpYTjBYRzRnS2lCQWNtVjBkWEp1Y3lCN1ltOXZiR1ZoYm4wZ1ZISjFaU0JwWmlCMGFHVWdjM0JsWTJsbWFXVmtJRlZTVENCcGN5QmhZbk52YkhWMFpTd2diM1JvWlhKM2FYTmxJR1poYkhObFhHNGdLaTljYm0xdlpIVnNaUzVsZUhCdmNuUnpJRDBnWm5WdVkzUnBiMjRnYVhOQlluTnZiSFYwWlZWU1RDaDFjbXdwSUh0Y2JpQWdMeThnUVNCVlVrd2dhWE1nWTI5dWMybGtaWEpsWkNCaFluTnZiSFYwWlNCcFppQnBkQ0JpWldkcGJuTWdkMmwwYUNCY0lqeHpZMmhsYldVK09pOHZYQ0lnYjNJZ1hDSXZMMXdpSUNod2NtOTBiMk52YkMxeVpXeGhkR2wyWlNCVlVrd3BMbHh1SUNBdkx5QlNSa01nTXprNE5pQmtaV1pwYm1WeklITmphR1Z0WlNCdVlXMWxJR0Z6SUdFZ2MyVnhkV1Z1WTJVZ2IyWWdZMmhoY21GamRHVnljeUJpWldkcGJtNXBibWNnZDJsMGFDQmhJR3hsZEhSbGNpQmhibVFnWm05c2JHOTNaV1JjYmlBZ0x5OGdZbmtnWVc1NUlHTnZiV0pwYm1GMGFXOXVJRzltSUd4bGRIUmxjbk1zSUdScFoybDBjeXdnY0d4MWN5d2djR1Z5YVc5a0xDQnZjaUJvZVhCb1pXNHVYRzRnSUhKbGRIVnliaUF2WGloYllTMTZYVnRoTFhwY1hHUmNYQ3RjWEMxY1hDNWRLam9wUDF4Y0wxeGNMeTlwTG5SbGMzUW9kWEpzS1R0Y2JuMDdYRzRpTENJbmRYTmxJSE4wY21samRDYzdYRzVjYm5aaGNpQjFkR2xzY3lBOUlISmxjWFZwY21Vb0p5NHZMaTR2ZFhScGJITW5LVHRjYmx4dWJXOWtkV3hsTG1WNGNHOXlkSE1nUFNBb1hHNGdJSFYwYVd4ekxtbHpVM1JoYm1SaGNtUkNjbTkzYzJWeVJXNTJLQ2tnUDF4dVhHNGdJQzh2SUZOMFlXNWtZWEprSUdKeWIzZHpaWElnWlc1MmN5Qm9ZWFpsSUdaMWJHd2djM1Z3Y0c5eWRDQnZaaUIwYUdVZ1FWQkpjeUJ1WldWa1pXUWdkRzhnZEdWemRGeHVJQ0F2THlCM2FHVjBhR1Z5SUhSb1pTQnlaWEYxWlhOMElGVlNUQ0JwY3lCdlppQjBhR1VnYzJGdFpTQnZjbWxuYVc0Z1lYTWdZM1Z5Y21WdWRDQnNiMk5oZEdsdmJpNWNiaUFnS0daMWJtTjBhVzl1SUhOMFlXNWtZWEprUW5KdmQzTmxja1Z1ZGlncElIdGNiaUFnSUNCMllYSWdiWE5wWlNBOUlDOG9iWE5wWlh4MGNtbGtaVzUwS1M5cExuUmxjM1FvYm1GMmFXZGhkRzl5TG5WelpYSkJaMlZ1ZENrN1hHNGdJQ0FnZG1GeUlIVnliRkJoY25OcGJtZE9iMlJsSUQwZ1pHOWpkVzFsYm5RdVkzSmxZWFJsUld4bGJXVnVkQ2duWVNjcE8xeHVJQ0FnSUhaaGNpQnZjbWxuYVc1VlVrdzdYRzVjYmlBZ0lDQXZLaXBjYmlBZ0lDQXFJRkJoY25ObElHRWdWVkpNSUhSdklHUnBjMk52ZG1WeUlHbDBKM01nWTI5dGNHOXVaVzUwYzF4dUlDQWdJQ3BjYmlBZ0lDQXFJRUJ3WVhKaGJTQjdVM1J5YVc1bmZTQjFjbXdnVkdobElGVlNUQ0IwYnlCaVpTQndZWEp6WldSY2JpQWdJQ0FxSUVCeVpYUjFjbTV6SUh0UFltcGxZM1I5WEc0Z0lDQWdLaTljYmlBZ0lDQm1kVzVqZEdsdmJpQnlaWE52YkhabFZWSk1LSFZ5YkNrZ2UxeHVJQ0FnSUNBZ2RtRnlJR2h5WldZZ1BTQjFjbXc3WEc1Y2JpQWdJQ0FnSUdsbUlDaHRjMmxsS1NCN1hHNGdJQ0FnSUNBZ0lDOHZJRWxGSUc1bFpXUnpJR0YwZEhKcFluVjBaU0J6WlhRZ2RIZHBZMlVnZEc4Z2JtOXliV0ZzYVhwbElIQnliM0JsY25ScFpYTmNiaUFnSUNBZ0lDQWdkWEpzVUdGeWMybHVaMDV2WkdVdWMyVjBRWFIwY21saWRYUmxLQ2RvY21WbUp5d2dhSEpsWmlrN1hHNGdJQ0FnSUNBZ0lHaHlaV1lnUFNCMWNteFFZWEp6YVc1blRtOWtaUzVvY21WbU8xeHVJQ0FnSUNBZ2ZWeHVYRzRnSUNBZ0lDQjFjbXhRWVhKemFXNW5UbTlrWlM1elpYUkJkSFJ5YVdKMWRHVW9KMmh5WldZbkxDQm9jbVZtS1R0Y2JseHVJQ0FnSUNBZ0x5OGdkWEpzVUdGeWMybHVaMDV2WkdVZ2NISnZkbWxrWlhNZ2RHaGxJRlZ5YkZWMGFXeHpJR2x1ZEdWeVptRmpaU0F0SUdoMGRIQTZMeTkxY213dWMzQmxZeTUzYUdGMGQyY3ViM0puTHlOMWNteDFkR2xzYzF4dUlDQWdJQ0FnY21WMGRYSnVJSHRjYmlBZ0lDQWdJQ0FnYUhKbFpqb2dkWEpzVUdGeWMybHVaMDV2WkdVdWFISmxaaXhjYmlBZ0lDQWdJQ0FnY0hKdmRHOWpiMnc2SUhWeWJGQmhjbk5wYm1kT2IyUmxMbkJ5YjNSdlkyOXNJRDhnZFhKc1VHRnljMmx1WjA1dlpHVXVjSEp2ZEc5amIyd3VjbVZ3YkdGalpTZ3ZPaVF2TENBbkp5a2dPaUFuSnl4Y2JpQWdJQ0FnSUNBZ2FHOXpkRG9nZFhKc1VHRnljMmx1WjA1dlpHVXVhRzl6ZEN4Y2JpQWdJQ0FnSUNBZ2MyVmhjbU5vT2lCMWNteFFZWEp6YVc1blRtOWtaUzV6WldGeVkyZ2dQeUIxY214UVlYSnphVzVuVG05a1pTNXpaV0Z5WTJndWNtVndiR0ZqWlNndlhseGNQeThzSUNjbktTQTZJQ2NuTEZ4dUlDQWdJQ0FnSUNCb1lYTm9PaUIxY214UVlYSnphVzVuVG05a1pTNW9ZWE5vSUQ4Z2RYSnNVR0Z5YzJsdVowNXZaR1V1YUdGemFDNXlaWEJzWVdObEtDOWVJeThzSUNjbktTQTZJQ2NuTEZ4dUlDQWdJQ0FnSUNCb2IzTjBibUZ0WlRvZ2RYSnNVR0Z5YzJsdVowNXZaR1V1YUc5emRHNWhiV1VzWEc0Z0lDQWdJQ0FnSUhCdmNuUTZJSFZ5YkZCaGNuTnBibWRPYjJSbExuQnZjblFzWEc0Z0lDQWdJQ0FnSUhCaGRHaHVZVzFsT2lBb2RYSnNVR0Z5YzJsdVowNXZaR1V1Y0dGMGFHNWhiV1V1WTJoaGNrRjBLREFwSUQwOVBTQW5MeWNwSUQ5Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIVnliRkJoY25OcGJtZE9iMlJsTG5CaGRHaHVZVzFsSURwY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDY3ZKeUFySUhWeWJGQmhjbk5wYm1kT2IyUmxMbkJoZEdodVlXMWxYRzRnSUNBZ0lDQjlPMXh1SUNBZ0lIMWNibHh1SUNBZ0lHOXlhV2RwYmxWU1RDQTlJSEpsYzI5c2RtVlZVa3dvZDJsdVpHOTNMbXh2WTJGMGFXOXVMbWh5WldZcE8xeHVYRzRnSUNBZ0x5b3FYRzRnSUNBZ0tpQkVaWFJsY20xcGJtVWdhV1lnWVNCVlVrd2djMmhoY21WeklIUm9aU0J6WVcxbElHOXlhV2RwYmlCaGN5QjBhR1VnWTNWeWNtVnVkQ0JzYjJOaGRHbHZibHh1SUNBZ0lDcGNiaUFnSUNBcUlFQndZWEpoYlNCN1UzUnlhVzVuZlNCeVpYRjFaWE4wVlZKTUlGUm9aU0JWVWt3Z2RHOGdkR1Z6ZEZ4dUlDQWdJQ29nUUhKbGRIVnlibk1nZTJKdmIyeGxZVzU5SUZSeWRXVWdhV1lnVlZKTUlITm9ZWEpsY3lCMGFHVWdjMkZ0WlNCdmNtbG5hVzRzSUc5MGFHVnlkMmx6WlNCbVlXeHpaVnh1SUNBZ0lDb3ZYRzRnSUNBZ2NtVjBkWEp1SUdaMWJtTjBhVzl1SUdselZWSk1VMkZ0WlU5eWFXZHBiaWh5WlhGMVpYTjBWVkpNS1NCN1hHNGdJQ0FnSUNCMllYSWdjR0Z5YzJWa0lEMGdLSFYwYVd4ekxtbHpVM1J5YVc1bktISmxjWFZsYzNSVlVrd3BLU0EvSUhKbGMyOXNkbVZWVWt3b2NtVnhkV1Z6ZEZWU1RDa2dPaUJ5WlhGMVpYTjBWVkpNTzF4dUlDQWdJQ0FnY21WMGRYSnVJQ2h3WVhKelpXUXVjSEp2ZEc5amIyd2dQVDA5SUc5eWFXZHBibFZTVEM1d2NtOTBiMk52YkNBbUpseHVJQ0FnSUNBZ0lDQWdJQ0FnY0dGeWMyVmtMbWh2YzNRZ1BUMDlJRzl5YVdkcGJsVlNUQzVvYjNOMEtUdGNiaUFnSUNCOU8xeHVJQ0I5S1NncElEcGNibHh1SUNBdkx5Qk9iMjRnYzNSaGJtUmhjbVFnWW5KdmQzTmxjaUJsYm5aeklDaDNaV0lnZDI5eWEyVnljeXdnY21WaFkzUXRibUYwYVhabEtTQnNZV05ySUc1bFpXUmxaQ0J6ZFhCd2IzSjBMbHh1SUNBb1puVnVZM1JwYjI0Z2JtOXVVM1JoYm1SaGNtUkNjbTkzYzJWeVJXNTJLQ2tnZTF4dUlDQWdJSEpsZEhWeWJpQm1kVzVqZEdsdmJpQnBjMVZTVEZOaGJXVlBjbWxuYVc0b0tTQjdYRzRnSUNBZ0lDQnlaWFIxY200Z2RISjFaVHRjYmlBZ0lDQjlPMXh1SUNCOUtTZ3BYRzRwTzF4dUlpd2lKM1Z6WlNCemRISnBZM1FuTzF4dVhHNTJZWElnZFhScGJITWdQU0J5WlhGMWFYSmxLQ2N1TGk5MWRHbHNjeWNwTzF4dVhHNXRiMlIxYkdVdVpYaHdiM0owY3lBOUlHWjFibU4wYVc5dUlHNXZjbTFoYkdsNlpVaGxZV1JsY2s1aGJXVW9hR1ZoWkdWeWN5d2dibTl5YldGc2FYcGxaRTVoYldVcElIdGNiaUFnZFhScGJITXVabTl5UldGamFDaG9aV0ZrWlhKekxDQm1kVzVqZEdsdmJpQndjbTlqWlhOelNHVmhaR1Z5S0haaGJIVmxMQ0J1WVcxbEtTQjdYRzRnSUNBZ2FXWWdLRzVoYldVZ0lUMDlJRzV2Y20xaGJHbDZaV1JPWVcxbElDWW1JRzVoYldVdWRHOVZjSEJsY2tOaGMyVW9LU0E5UFQwZ2JtOXliV0ZzYVhwbFpFNWhiV1V1ZEc5VmNIQmxja05oYzJVb0tTa2dlMXh1SUNBZ0lDQWdhR1ZoWkdWeWMxdHViM0p0WVd4cGVtVmtUbUZ0WlYwZ1BTQjJZV3gxWlR0Y2JpQWdJQ0FnSUdSbGJHVjBaU0JvWldGa1pYSnpXMjVoYldWZE8xeHVJQ0FnSUgxY2JpQWdmU2s3WEc1OU8xeHVJaXdpSjNWelpTQnpkSEpwWTNRbk8xeHVYRzUyWVhJZ2RYUnBiSE1nUFNCeVpYRjFhWEpsS0NjdUx5NHVMM1YwYVd4ekp5azdYRzVjYmk4dklFaGxZV1JsY25NZ2QyaHZjMlVnWkhWd2JHbGpZWFJsY3lCaGNtVWdhV2R1YjNKbFpDQmllU0J1YjJSbFhHNHZMeUJqTG1ZdUlHaDBkSEJ6T2k4dmJtOWtaV3B6TG05eVp5OWhjR2t2YUhSMGNDNW9kRzFzSTJoMGRIQmZiV1Z6YzJGblpWOW9aV0ZrWlhKelhHNTJZWElnYVdkdWIzSmxSSFZ3YkdsallYUmxUMllnUFNCYlhHNGdJQ2RoWjJVbkxDQW5ZWFYwYUc5eWFYcGhkR2x2Ymljc0lDZGpiMjUwWlc1MExXeGxibWQwYUNjc0lDZGpiMjUwWlc1MExYUjVjR1VuTENBblpYUmhaeWNzWEc0Z0lDZGxlSEJwY21Wekp5d2dKMlp5YjIwbkxDQW5hRzl6ZENjc0lDZHBaaTF0YjJScFptbGxaQzF6YVc1alpTY3NJQ2RwWmkxMWJtMXZaR2xtYVdWa0xYTnBibU5sSnl4Y2JpQWdKMnhoYzNRdGJXOWthV1pwWldRbkxDQW5iRzlqWVhScGIyNG5MQ0FuYldGNExXWnZjbmRoY21Sekp5d2dKM0J5YjNoNUxXRjFkR2h2Y21sNllYUnBiMjRuTEZ4dUlDQW5jbVZtWlhKbGNpY3NJQ2R5WlhSeWVTMWhablJsY2ljc0lDZDFjMlZ5TFdGblpXNTBKMXh1WFR0Y2JseHVMeW9xWEc0Z0tpQlFZWEp6WlNCb1pXRmtaWEp6SUdsdWRHOGdZVzRnYjJKcVpXTjBYRzRnS2x4dUlDb2dZR0JnWEc0Z0tpQkVZWFJsT2lCWFpXUXNJREkzSUVGMVp5QXlNREUwSURBNE9qVTRPalE1SUVkTlZGeHVJQ29nUTI5dWRHVnVkQzFVZVhCbE9pQmhjSEJzYVdOaGRHbHZiaTlxYzI5dVhHNGdLaUJEYjI1dVpXTjBhVzl1T2lCclpXVndMV0ZzYVhabFhHNGdLaUJVY21GdWMyWmxjaTFGYm1OdlpHbHVaem9nWTJoMWJtdGxaRnh1SUNvZ1lHQmdYRzRnS2x4dUlDb2dRSEJoY21GdElIdFRkSEpwYm1kOUlHaGxZV1JsY25NZ1NHVmhaR1Z5Y3lCdVpXVmthVzVuSUhSdklHSmxJSEJoY25ObFpGeHVJQ29nUUhKbGRIVnlibk1nZTA5aWFtVmpkSDBnU0dWaFpHVnljeUJ3WVhKelpXUWdhVzUwYnlCaGJpQnZZbXBsWTNSY2JpQXFMMXh1Ylc5a2RXeGxMbVY0Y0c5eWRITWdQU0JtZFc1amRHbHZiaUJ3WVhKelpVaGxZV1JsY25Nb2FHVmhaR1Z5Y3lrZ2UxeHVJQ0IyWVhJZ2NHRnljMlZrSUQwZ2UzMDdYRzRnSUhaaGNpQnJaWGs3WEc0Z0lIWmhjaUIyWVd3N1hHNGdJSFpoY2lCcE8xeHVYRzRnSUdsbUlDZ2hhR1ZoWkdWeWN5a2dleUJ5WlhSMWNtNGdjR0Z5YzJWa095QjlYRzVjYmlBZ2RYUnBiSE11Wm05eVJXRmphQ2hvWldGa1pYSnpMbk53YkdsMEtDZGNYRzRuS1N3Z1puVnVZM1JwYjI0Z2NHRnljMlZ5S0d4cGJtVXBJSHRjYmlBZ0lDQnBJRDBnYkdsdVpTNXBibVJsZUU5bUtDYzZKeWs3WEc0Z0lDQWdhMlY1SUQwZ2RYUnBiSE11ZEhKcGJTaHNhVzVsTG5OMVluTjBjaWd3TENCcEtTa3VkRzlNYjNkbGNrTmhjMlVvS1R0Y2JpQWdJQ0IyWVd3Z1BTQjFkR2xzY3k1MGNtbHRLR3hwYm1VdWMzVmljM1J5S0drZ0t5QXhLU2s3WEc1Y2JpQWdJQ0JwWmlBb2EyVjVLU0I3WEc0Z0lDQWdJQ0JwWmlBb2NHRnljMlZrVzJ0bGVWMGdKaVlnYVdkdWIzSmxSSFZ3YkdsallYUmxUMll1YVc1a1pYaFBaaWhyWlhrcElENDlJREFwSUh0Y2JpQWdJQ0FnSUNBZ2NtVjBkWEp1TzF4dUlDQWdJQ0FnZlZ4dUlDQWdJQ0FnYVdZZ0tHdGxlU0E5UFQwZ0ozTmxkQzFqYjI5cmFXVW5LU0I3WEc0Z0lDQWdJQ0FnSUhCaGNuTmxaRnRyWlhsZElEMGdLSEJoY25ObFpGdHJaWGxkSUQ4Z2NHRnljMlZrVzJ0bGVWMGdPaUJiWFNrdVkyOXVZMkYwS0Z0MllXeGRLVHRjYmlBZ0lDQWdJSDBnWld4elpTQjdYRzRnSUNBZ0lDQWdJSEJoY25ObFpGdHJaWGxkSUQwZ2NHRnljMlZrVzJ0bGVWMGdQeUJ3WVhKelpXUmJhMlY1WFNBcklDY3NJQ2NnS3lCMllXd2dPaUIyWVd3N1hHNGdJQ0FnSUNCOVhHNGdJQ0FnZlZ4dUlDQjlLVHRjYmx4dUlDQnlaWFIxY200Z2NHRnljMlZrTzF4dWZUdGNiaUlzSWlkMWMyVWdjM1J5YVdOMEp6dGNibHh1THlvcVhHNGdLaUJUZVc1MFlXTjBhV01nYzNWbllYSWdabTl5SUdsdWRtOXJhVzVuSUdFZ1puVnVZM1JwYjI0Z1lXNWtJR1Y0Y0dGdVpHbHVaeUJoYmlCaGNuSmhlU0JtYjNJZ1lYSm5kVzFsYm5SekxseHVJQ3BjYmlBcUlFTnZiVzF2YmlCMWMyVWdZMkZ6WlNCM2IzVnNaQ0JpWlNCMGJ5QjFjMlVnWUVaMWJtTjBhVzl1TG5CeWIzUnZkSGx3WlM1aGNIQnNlV0F1WEc0Z0tseHVJQ29nSUdCZ1lHcHpYRzRnS2lBZ1puVnVZM1JwYjI0Z1ppaDRMQ0I1TENCNktTQjdmVnh1SUNvZ0lIWmhjaUJoY21keklEMGdXekVzSURJc0lETmRPMXh1SUNvZ0lHWXVZWEJ3Ykhrb2JuVnNiQ3dnWVhKbmN5azdYRzRnS2lBZ1lHQmdYRzRnS2x4dUlDb2dWMmwwYUNCZ2MzQnlaV0ZrWUNCMGFHbHpJR1Y0WVcxd2JHVWdZMkZ1SUdKbElISmxMWGR5YVhSMFpXNHVYRzRnS2x4dUlDb2dJR0JnWUdwelhHNGdLaUFnYzNCeVpXRmtLR1oxYm1OMGFXOXVLSGdzSUhrc0lIb3BJSHQ5S1NoYk1Td2dNaXdnTTEwcE8xeHVJQ29nSUdCZ1lGeHVJQ3BjYmlBcUlFQndZWEpoYlNCN1JuVnVZM1JwYjI1OUlHTmhiR3hpWVdOclhHNGdLaUJBY21WMGRYSnVjeUI3Um5WdVkzUnBiMjU5WEc0Z0tpOWNibTF2WkhWc1pTNWxlSEJ2Y25SeklEMGdablZ1WTNScGIyNGdjM0J5WldGa0tHTmhiR3hpWVdOcktTQjdYRzRnSUhKbGRIVnliaUJtZFc1amRHbHZiaUIzY21Gd0tHRnljaWtnZTF4dUlDQWdJSEpsZEhWeWJpQmpZV3hzWW1GamF5NWhjSEJzZVNodWRXeHNMQ0JoY25JcE8xeHVJQ0I5TzF4dWZUdGNiaUlzSWlkMWMyVWdjM1J5YVdOMEp6dGNibHh1ZG1GeUlHSnBibVFnUFNCeVpYRjFhWEpsS0NjdUwyaGxiSEJsY25NdlltbHVaQ2NwTzF4dWRtRnlJR2x6UW5WbVptVnlJRDBnY21WeGRXbHlaU2duYVhNdFluVm1abVZ5SnlrN1hHNWNiaThxWjJ4dlltRnNJSFJ2VTNSeWFXNW5PblJ5ZFdVcUwxeHVYRzR2THlCMWRHbHNjeUJwY3lCaElHeHBZbkpoY25rZ2IyWWdaMlZ1WlhKcFl5Qm9aV3h3WlhJZ1puVnVZM1JwYjI1eklHNXZiaTF6Y0dWamFXWnBZeUIwYnlCaGVHbHZjMXh1WEc1MllYSWdkRzlUZEhKcGJtY2dQU0JQWW1wbFkzUXVjSEp2ZEc5MGVYQmxMblJ2VTNSeWFXNW5PMXh1WEc0dktpcGNiaUFxSUVSbGRHVnliV2x1WlNCcFppQmhJSFpoYkhWbElHbHpJR0Z1SUVGeWNtRjVYRzRnS2x4dUlDb2dRSEJoY21GdElIdFBZbXBsWTNSOUlIWmhiQ0JVYUdVZ2RtRnNkV1VnZEc4Z2RHVnpkRnh1SUNvZ1FISmxkSFZ5Ym5NZ2UySnZiMnhsWVc1OUlGUnlkV1VnYVdZZ2RtRnNkV1VnYVhNZ1lXNGdRWEp5WVhrc0lHOTBhR1Z5ZDJselpTQm1ZV3h6WlZ4dUlDb3ZYRzVtZFc1amRHbHZiaUJwYzBGeWNtRjVLSFpoYkNrZ2UxeHVJQ0J5WlhSMWNtNGdkRzlUZEhKcGJtY3VZMkZzYkNoMllXd3BJRDA5UFNBblcyOWlhbVZqZENCQmNuSmhlVjBuTzF4dWZWeHVYRzR2S2lwY2JpQXFJRVJsZEdWeWJXbHVaU0JwWmlCaElIWmhiSFZsSUdseklHRnVJRUZ5Y21GNVFuVm1abVZ5WEc0Z0tseHVJQ29nUUhCaGNtRnRJSHRQWW1wbFkzUjlJSFpoYkNCVWFHVWdkbUZzZFdVZ2RHOGdkR1Z6ZEZ4dUlDb2dRSEpsZEhWeWJuTWdlMkp2YjJ4bFlXNTlJRlJ5ZFdVZ2FXWWdkbUZzZFdVZ2FYTWdZVzRnUVhKeVlYbENkV1ptWlhJc0lHOTBhR1Z5ZDJselpTQm1ZV3h6WlZ4dUlDb3ZYRzVtZFc1amRHbHZiaUJwYzBGeWNtRjVRblZtWm1WeUtIWmhiQ2tnZTF4dUlDQnlaWFIxY200Z2RHOVRkSEpwYm1jdVkyRnNiQ2gyWVd3cElEMDlQU0FuVzI5aWFtVmpkQ0JCY25KaGVVSjFabVpsY2wwbk8xeHVmVnh1WEc0dktpcGNiaUFxSUVSbGRHVnliV2x1WlNCcFppQmhJSFpoYkhWbElHbHpJR0VnUm05eWJVUmhkR0ZjYmlBcVhHNGdLaUJBY0dGeVlXMGdlMDlpYW1WamRIMGdkbUZzSUZSb1pTQjJZV3gxWlNCMGJ5QjBaWE4wWEc0Z0tpQkFjbVYwZFhKdWN5QjdZbTl2YkdWaGJuMGdWSEoxWlNCcFppQjJZV3gxWlNCcGN5QmhiaUJHYjNKdFJHRjBZU3dnYjNSb1pYSjNhWE5sSUdaaGJITmxYRzRnS2k5Y2JtWjFibU4wYVc5dUlHbHpSbTl5YlVSaGRHRW9kbUZzS1NCN1hHNGdJSEpsZEhWeWJpQW9kSGx3Wlc5bUlFWnZjbTFFWVhSaElDRTlQU0FuZFc1a1pXWnBibVZrSnlrZ0ppWWdLSFpoYkNCcGJuTjBZVzVqWlc5bUlFWnZjbTFFWVhSaEtUdGNibjFjYmx4dUx5b3FYRzRnS2lCRVpYUmxjbTFwYm1VZ2FXWWdZU0IyWVd4MVpTQnBjeUJoSUhacFpYY2diMjRnWVc0Z1FYSnlZWGxDZFdabVpYSmNiaUFxWEc0Z0tpQkFjR0Z5WVcwZ2UwOWlhbVZqZEgwZ2RtRnNJRlJvWlNCMllXeDFaU0IwYnlCMFpYTjBYRzRnS2lCQWNtVjBkWEp1Y3lCN1ltOXZiR1ZoYm4wZ1ZISjFaU0JwWmlCMllXeDFaU0JwY3lCaElIWnBaWGNnYjI0Z1lXNGdRWEp5WVhsQ2RXWm1aWElzSUc5MGFHVnlkMmx6WlNCbVlXeHpaVnh1SUNvdlhHNW1kVzVqZEdsdmJpQnBjMEZ5Y21GNVFuVm1abVZ5Vm1sbGR5aDJZV3dwSUh0Y2JpQWdkbUZ5SUhKbGMzVnNkRHRjYmlBZ2FXWWdLQ2gwZVhCbGIyWWdRWEp5WVhsQ2RXWm1aWElnSVQwOUlDZDFibVJsWm1sdVpXUW5LU0FtSmlBb1FYSnlZWGxDZFdabVpYSXVhWE5XYVdWM0tTa2dlMXh1SUNBZ0lISmxjM1ZzZENBOUlFRnljbUY1UW5WbVptVnlMbWx6Vm1sbGR5aDJZV3dwTzF4dUlDQjlJR1ZzYzJVZ2UxeHVJQ0FnSUhKbGMzVnNkQ0E5SUNoMllXd3BJQ1ltSUNoMllXd3VZblZtWm1WeUtTQW1KaUFvZG1Gc0xtSjFabVpsY2lCcGJuTjBZVzVqWlc5bUlFRnljbUY1UW5WbVptVnlLVHRjYmlBZ2ZWeHVJQ0J5WlhSMWNtNGdjbVZ6ZFd4ME8xeHVmVnh1WEc0dktpcGNiaUFxSUVSbGRHVnliV2x1WlNCcFppQmhJSFpoYkhWbElHbHpJR0VnVTNSeWFXNW5YRzRnS2x4dUlDb2dRSEJoY21GdElIdFBZbXBsWTNSOUlIWmhiQ0JVYUdVZ2RtRnNkV1VnZEc4Z2RHVnpkRnh1SUNvZ1FISmxkSFZ5Ym5NZ2UySnZiMnhsWVc1OUlGUnlkV1VnYVdZZ2RtRnNkV1VnYVhNZ1lTQlRkSEpwYm1jc0lHOTBhR1Z5ZDJselpTQm1ZV3h6WlZ4dUlDb3ZYRzVtZFc1amRHbHZiaUJwYzFOMGNtbHVaeWgyWVd3cElIdGNiaUFnY21WMGRYSnVJSFI1Y0dWdlppQjJZV3dnUFQwOUlDZHpkSEpwYm1jbk8xeHVmVnh1WEc0dktpcGNiaUFxSUVSbGRHVnliV2x1WlNCcFppQmhJSFpoYkhWbElHbHpJR0VnVG5WdFltVnlYRzRnS2x4dUlDb2dRSEJoY21GdElIdFBZbXBsWTNSOUlIWmhiQ0JVYUdVZ2RtRnNkV1VnZEc4Z2RHVnpkRnh1SUNvZ1FISmxkSFZ5Ym5NZ2UySnZiMnhsWVc1OUlGUnlkV1VnYVdZZ2RtRnNkV1VnYVhNZ1lTQk9kVzFpWlhJc0lHOTBhR1Z5ZDJselpTQm1ZV3h6WlZ4dUlDb3ZYRzVtZFc1amRHbHZiaUJwYzA1MWJXSmxjaWgyWVd3cElIdGNiaUFnY21WMGRYSnVJSFI1Y0dWdlppQjJZV3dnUFQwOUlDZHVkVzFpWlhJbk8xeHVmVnh1WEc0dktpcGNiaUFxSUVSbGRHVnliV2x1WlNCcFppQmhJSFpoYkhWbElHbHpJSFZ1WkdWbWFXNWxaRnh1SUNwY2JpQXFJRUJ3WVhKaGJTQjdUMkpxWldOMGZTQjJZV3dnVkdobElIWmhiSFZsSUhSdklIUmxjM1JjYmlBcUlFQnlaWFIxY201eklIdGliMjlzWldGdWZTQlVjblZsSUdsbUlIUm9aU0IyWVd4MVpTQnBjeUIxYm1SbFptbHVaV1FzSUc5MGFHVnlkMmx6WlNCbVlXeHpaVnh1SUNvdlhHNW1kVzVqZEdsdmJpQnBjMVZ1WkdWbWFXNWxaQ2gyWVd3cElIdGNiaUFnY21WMGRYSnVJSFI1Y0dWdlppQjJZV3dnUFQwOUlDZDFibVJsWm1sdVpXUW5PMXh1ZlZ4dVhHNHZLaXBjYmlBcUlFUmxkR1Z5YldsdVpTQnBaaUJoSUhaaGJIVmxJR2x6SUdGdUlFOWlhbVZqZEZ4dUlDcGNiaUFxSUVCd1lYSmhiU0I3VDJKcVpXTjBmU0IyWVd3Z1ZHaGxJSFpoYkhWbElIUnZJSFJsYzNSY2JpQXFJRUJ5WlhSMWNtNXpJSHRpYjI5c1pXRnVmU0JVY25WbElHbG1JSFpoYkhWbElHbHpJR0Z1SUU5aWFtVmpkQ3dnYjNSb1pYSjNhWE5sSUdaaGJITmxYRzRnS2k5Y2JtWjFibU4wYVc5dUlHbHpUMkpxWldOMEtIWmhiQ2tnZTF4dUlDQnlaWFIxY200Z2RtRnNJQ0U5UFNCdWRXeHNJQ1ltSUhSNWNHVnZaaUIyWVd3Z1BUMDlJQ2R2WW1wbFkzUW5PMXh1ZlZ4dVhHNHZLaXBjYmlBcUlFUmxkR1Z5YldsdVpTQnBaaUJoSUhaaGJIVmxJR2x6SUdFZ1JHRjBaVnh1SUNwY2JpQXFJRUJ3WVhKaGJTQjdUMkpxWldOMGZTQjJZV3dnVkdobElIWmhiSFZsSUhSdklIUmxjM1JjYmlBcUlFQnlaWFIxY201eklIdGliMjlzWldGdWZTQlVjblZsSUdsbUlIWmhiSFZsSUdseklHRWdSR0YwWlN3Z2IzUm9aWEozYVhObElHWmhiSE5sWEc0Z0tpOWNibVoxYm1OMGFXOXVJR2x6UkdGMFpTaDJZV3dwSUh0Y2JpQWdjbVYwZFhKdUlIUnZVM1J5YVc1bkxtTmhiR3dvZG1Gc0tTQTlQVDBnSjF0dlltcGxZM1FnUkdGMFpWMG5PMXh1ZlZ4dVhHNHZLaXBjYmlBcUlFUmxkR1Z5YldsdVpTQnBaaUJoSUhaaGJIVmxJR2x6SUdFZ1JtbHNaVnh1SUNwY2JpQXFJRUJ3WVhKaGJTQjdUMkpxWldOMGZTQjJZV3dnVkdobElIWmhiSFZsSUhSdklIUmxjM1JjYmlBcUlFQnlaWFIxY201eklIdGliMjlzWldGdWZTQlVjblZsSUdsbUlIWmhiSFZsSUdseklHRWdSbWxzWlN3Z2IzUm9aWEozYVhObElHWmhiSE5sWEc0Z0tpOWNibVoxYm1OMGFXOXVJR2x6Um1sc1pTaDJZV3dwSUh0Y2JpQWdjbVYwZFhKdUlIUnZVM1J5YVc1bkxtTmhiR3dvZG1Gc0tTQTlQVDBnSjF0dlltcGxZM1FnUm1sc1pWMG5PMXh1ZlZ4dVhHNHZLaXBjYmlBcUlFUmxkR1Z5YldsdVpTQnBaaUJoSUhaaGJIVmxJR2x6SUdFZ1FteHZZbHh1SUNwY2JpQXFJRUJ3WVhKaGJTQjdUMkpxWldOMGZTQjJZV3dnVkdobElIWmhiSFZsSUhSdklIUmxjM1JjYmlBcUlFQnlaWFIxY201eklIdGliMjlzWldGdWZTQlVjblZsSUdsbUlIWmhiSFZsSUdseklHRWdRbXh2WWl3Z2IzUm9aWEozYVhObElHWmhiSE5sWEc0Z0tpOWNibVoxYm1OMGFXOXVJR2x6UW14dllpaDJZV3dwSUh0Y2JpQWdjbVYwZFhKdUlIUnZVM1J5YVc1bkxtTmhiR3dvZG1Gc0tTQTlQVDBnSjF0dlltcGxZM1FnUW14dllsMG5PMXh1ZlZ4dVhHNHZLaXBjYmlBcUlFUmxkR1Z5YldsdVpTQnBaaUJoSUhaaGJIVmxJR2x6SUdFZ1JuVnVZM1JwYjI1Y2JpQXFYRzRnS2lCQWNHRnlZVzBnZTA5aWFtVmpkSDBnZG1Gc0lGUm9aU0IyWVd4MVpTQjBieUIwWlhOMFhHNGdLaUJBY21WMGRYSnVjeUI3WW05dmJHVmhibjBnVkhKMVpTQnBaaUIyWVd4MVpTQnBjeUJoSUVaMWJtTjBhVzl1TENCdmRHaGxjbmRwYzJVZ1ptRnNjMlZjYmlBcUwxeHVablZ1WTNScGIyNGdhWE5HZFc1amRHbHZiaWgyWVd3cElIdGNiaUFnY21WMGRYSnVJSFJ2VTNSeWFXNW5MbU5oYkd3b2RtRnNLU0E5UFQwZ0oxdHZZbXBsWTNRZ1JuVnVZM1JwYjI1ZEp6dGNibjFjYmx4dUx5b3FYRzRnS2lCRVpYUmxjbTFwYm1VZ2FXWWdZU0IyWVd4MVpTQnBjeUJoSUZOMGNtVmhiVnh1SUNwY2JpQXFJRUJ3WVhKaGJTQjdUMkpxWldOMGZTQjJZV3dnVkdobElIWmhiSFZsSUhSdklIUmxjM1JjYmlBcUlFQnlaWFIxY201eklIdGliMjlzWldGdWZTQlVjblZsSUdsbUlIWmhiSFZsSUdseklHRWdVM1J5WldGdExDQnZkR2hsY25kcGMyVWdabUZzYzJWY2JpQXFMMXh1Wm5WdVkzUnBiMjRnYVhOVGRISmxZVzBvZG1Gc0tTQjdYRzRnSUhKbGRIVnliaUJwYzA5aWFtVmpkQ2gyWVd3cElDWW1JR2x6Um5WdVkzUnBiMjRvZG1Gc0xuQnBjR1VwTzF4dWZWeHVYRzR2S2lwY2JpQXFJRVJsZEdWeWJXbHVaU0JwWmlCaElIWmhiSFZsSUdseklHRWdWVkpNVTJWaGNtTm9VR0Z5WVcxeklHOWlhbVZqZEZ4dUlDcGNiaUFxSUVCd1lYSmhiU0I3VDJKcVpXTjBmU0IyWVd3Z1ZHaGxJSFpoYkhWbElIUnZJSFJsYzNSY2JpQXFJRUJ5WlhSMWNtNXpJSHRpYjI5c1pXRnVmU0JVY25WbElHbG1JSFpoYkhWbElHbHpJR0VnVlZKTVUyVmhjbU5vVUdGeVlXMXpJRzlpYW1WamRDd2diM1JvWlhKM2FYTmxJR1poYkhObFhHNGdLaTljYm1aMWJtTjBhVzl1SUdselZWSk1VMlZoY21Ob1VHRnlZVzF6S0haaGJDa2dlMXh1SUNCeVpYUjFjbTRnZEhsd1pXOW1JRlZTVEZObFlYSmphRkJoY21GdGN5QWhQVDBnSjNWdVpHVm1hVzVsWkNjZ0ppWWdkbUZzSUdsdWMzUmhibU5sYjJZZ1ZWSk1VMlZoY21Ob1VHRnlZVzF6TzF4dWZWeHVYRzR2S2lwY2JpQXFJRlJ5YVcwZ1pYaGpaWE56SUhkb2FYUmxjM0JoWTJVZ2IyWm1JSFJvWlNCaVpXZHBibTVwYm1jZ1lXNWtJR1Z1WkNCdlppQmhJSE4wY21sdVoxeHVJQ3BjYmlBcUlFQndZWEpoYlNCN1UzUnlhVzVuZlNCemRISWdWR2hsSUZOMGNtbHVaeUIwYnlCMGNtbHRYRzRnS2lCQWNtVjBkWEp1Y3lCN1UzUnlhVzVuZlNCVWFHVWdVM1J5YVc1bklHWnlaV1ZrSUc5bUlHVjRZMlZ6Y3lCM2FHbDBaWE53WVdObFhHNGdLaTljYm1aMWJtTjBhVzl1SUhSeWFXMG9jM1J5S1NCN1hHNGdJSEpsZEhWeWJpQnpkSEl1Y21Wd2JHRmpaU2d2WGx4Y2N5b3ZMQ0FuSnlrdWNtVndiR0ZqWlNndlhGeHpLaVF2TENBbkp5azdYRzU5WEc1Y2JpOHFLbHh1SUNvZ1JHVjBaWEp0YVc1bElHbG1JSGRsSjNKbElISjFibTVwYm1jZ2FXNGdZU0J6ZEdGdVpHRnlaQ0JpY205M2MyVnlJR1Z1ZG1seWIyNXRaVzUwWEc0Z0tseHVJQ29nVkdocGN5QmhiR3h2ZDNNZ1lYaHBiM01nZEc4Z2NuVnVJR2x1SUdFZ2QyVmlJSGR2Y210bGNpd2dZVzVrSUhKbFlXTjBMVzVoZEdsMlpTNWNiaUFxSUVKdmRHZ2daVzUyYVhKdmJtMWxiblJ6SUhOMWNIQnZjblFnV0UxTVNIUjBjRkpsY1hWbGMzUXNJR0oxZENCdWIzUWdablZzYkhrZ2MzUmhibVJoY21RZ1oyeHZZbUZzY3k1Y2JpQXFYRzRnS2lCM1pXSWdkMjl5YTJWeWN6cGNiaUFxSUNCMGVYQmxiMllnZDJsdVpHOTNJQzArSUhWdVpHVm1hVzVsWkZ4dUlDb2dJSFI1Y0dWdlppQmtiMk4xYldWdWRDQXRQaUIxYm1SbFptbHVaV1JjYmlBcVhHNGdLaUJ5WldGamRDMXVZWFJwZG1VNlhHNGdLaUFnYm1GMmFXZGhkRzl5TG5CeWIyUjFZM1FnTFQ0Z0oxSmxZV04wVG1GMGFYWmxKMXh1SUNvdlhHNW1kVzVqZEdsdmJpQnBjMU4wWVc1a1lYSmtRbkp2ZDNObGNrVnVkaWdwSUh0Y2JpQWdhV1lnS0hSNWNHVnZaaUJ1WVhacFoyRjBiM0lnSVQwOUlDZDFibVJsWm1sdVpXUW5JQ1ltSUc1aGRtbG5ZWFJ2Y2k1d2NtOWtkV04wSUQwOVBTQW5VbVZoWTNST1lYUnBkbVVuS1NCN1hHNGdJQ0FnY21WMGRYSnVJR1poYkhObE8xeHVJQ0I5WEc0Z0lISmxkSFZ5YmlBb1hHNGdJQ0FnZEhsd1pXOW1JSGRwYm1SdmR5QWhQVDBnSjNWdVpHVm1hVzVsWkNjZ0ppWmNiaUFnSUNCMGVYQmxiMllnWkc5amRXMWxiblFnSVQwOUlDZDFibVJsWm1sdVpXUW5YRzRnSUNrN1hHNTlYRzVjYmk4cUtseHVJQ29nU1hSbGNtRjBaU0J2ZG1WeUlHRnVJRUZ5Y21GNUlHOXlJR0Z1SUU5aWFtVmpkQ0JwYm5admEybHVaeUJoSUdaMWJtTjBhVzl1SUdadmNpQmxZV05vSUdsMFpXMHVYRzRnS2x4dUlDb2dTV1lnWUc5aWFtQWdhWE1nWVc0Z1FYSnlZWGtnWTJGc2JHSmhZMnNnZDJsc2JDQmlaU0JqWVd4c1pXUWdjR0Z6YzJsdVoxeHVJQ29nZEdobElIWmhiSFZsTENCcGJtUmxlQ3dnWVc1a0lHTnZiWEJzWlhSbElHRnljbUY1SUdadmNpQmxZV05vSUdsMFpXMHVYRzRnS2x4dUlDb2dTV1lnSjI5aWFpY2dhWE1nWVc0Z1QySnFaV04wSUdOaGJHeGlZV05ySUhkcGJHd2dZbVVnWTJGc2JHVmtJSEJoYzNOcGJtZGNiaUFxSUhSb1pTQjJZV3gxWlN3Z2EyVjVMQ0JoYm1RZ1kyOXRjR3hsZEdVZ2IySnFaV04wSUdadmNpQmxZV05vSUhCeWIzQmxjblI1TGx4dUlDcGNiaUFxSUVCd1lYSmhiU0I3VDJKcVpXTjBmRUZ5Y21GNWZTQnZZbW9nVkdobElHOWlhbVZqZENCMGJ5QnBkR1Z5WVhSbFhHNGdLaUJBY0dGeVlXMGdlMFoxYm1OMGFXOXVmU0JtYmlCVWFHVWdZMkZzYkdKaFkyc2dkRzhnYVc1MmIydGxJR1p2Y2lCbFlXTm9JR2wwWlcxY2JpQXFMMXh1Wm5WdVkzUnBiMjRnWm05eVJXRmphQ2h2WW1vc0lHWnVLU0I3WEc0Z0lDOHZJRVJ2YmlkMElHSnZkR2hsY2lCcFppQnVieUIyWVd4MVpTQndjbTkyYVdSbFpGeHVJQ0JwWmlBb2IySnFJRDA5UFNCdWRXeHNJSHg4SUhSNWNHVnZaaUJ2WW1vZ1BUMDlJQ2QxYm1SbFptbHVaV1FuS1NCN1hHNGdJQ0FnY21WMGRYSnVPMXh1SUNCOVhHNWNiaUFnTHk4Z1JtOXlZMlVnWVc0Z1lYSnlZWGtnYVdZZ2JtOTBJR0ZzY21WaFpIa2djMjl0WlhSb2FXNW5JR2wwWlhKaFlteGxYRzRnSUdsbUlDaDBlWEJsYjJZZ2IySnFJQ0U5UFNBbmIySnFaV04wSnlrZ2UxeHVJQ0FnSUM4cVpYTnNhVzUwSUc1dkxYQmhjbUZ0TFhKbFlYTnphV2R1T2pBcUwxeHVJQ0FnSUc5aWFpQTlJRnR2WW1wZE8xeHVJQ0I5WEc1Y2JpQWdhV1lnS0dselFYSnlZWGtvYjJKcUtTa2dlMXh1SUNBZ0lDOHZJRWwwWlhKaGRHVWdiM1psY2lCaGNuSmhlU0IyWVd4MVpYTmNiaUFnSUNCbWIzSWdLSFpoY2lCcElEMGdNQ3dnYkNBOUlHOWlhaTVzWlc1bmRHZzdJR2tnUENCc095QnBLeXNwSUh0Y2JpQWdJQ0FnSUdadUxtTmhiR3dvYm5Wc2JDd2diMkpxVzJsZExDQnBMQ0J2WW1vcE8xeHVJQ0FnSUgxY2JpQWdmU0JsYkhObElIdGNiaUFnSUNBdkx5QkpkR1Z5WVhSbElHOTJaWElnYjJKcVpXTjBJR3RsZVhOY2JpQWdJQ0JtYjNJZ0tIWmhjaUJyWlhrZ2FXNGdiMkpxS1NCN1hHNGdJQ0FnSUNCcFppQW9UMkpxWldOMExuQnliM1J2ZEhsd1pTNW9ZWE5QZDI1UWNtOXdaWEowZVM1allXeHNLRzlpYWl3Z2EyVjVLU2tnZTF4dUlDQWdJQ0FnSUNCbWJpNWpZV3hzS0c1MWJHd3NJRzlpYWx0clpYbGRMQ0JyWlhrc0lHOWlhaWs3WEc0Z0lDQWdJQ0I5WEc0Z0lDQWdmVnh1SUNCOVhHNTlYRzVjYmk4cUtseHVJQ29nUVdOalpYQjBjeUIyWVhKaGNtZHpJR1Y0Y0dWamRHbHVaeUJsWVdOb0lHRnlaM1Z0Wlc1MElIUnZJR0psSUdGdUlHOWlhbVZqZEN3Z2RHaGxibHh1SUNvZ2FXMXRkWFJoWW14NUlHMWxjbWRsY3lCMGFHVWdjSEp2Y0dWeWRHbGxjeUJ2WmlCbFlXTm9JRzlpYW1WamRDQmhibVFnY21WMGRYSnVjeUJ5WlhOMWJIUXVYRzRnS2x4dUlDb2dWMmhsYmlCdGRXeDBhWEJzWlNCdlltcGxZM1J6SUdOdmJuUmhhVzRnZEdobElITmhiV1VnYTJWNUlIUm9aU0JzWVhSbGNpQnZZbXBsWTNRZ2FXNWNiaUFxSUhSb1pTQmhjbWQxYldWdWRITWdiR2x6ZENCM2FXeHNJSFJoYTJVZ2NISmxZMlZrWlc1alpTNWNiaUFxWEc0Z0tpQkZlR0Z0Y0d4bE9seHVJQ3BjYmlBcUlHQmdZR3B6WEc0Z0tpQjJZWElnY21WemRXeDBJRDBnYldWeVoyVW9lMlp2YnpvZ01USXpmU3dnZTJadmJ6b2dORFUyZlNrN1hHNGdLaUJqYjI1emIyeGxMbXh2WnloeVpYTjFiSFF1Wm05dktUc2dMeThnYjNWMGNIVjBjeUEwTlRaY2JpQXFJR0JnWUZ4dUlDcGNiaUFxSUVCd1lYSmhiU0I3VDJKcVpXTjBmU0J2WW1veElFOWlhbVZqZENCMGJ5QnRaWEpuWlZ4dUlDb2dRSEpsZEhWeWJuTWdlMDlpYW1WamRIMGdVbVZ6ZFd4MElHOW1JR0ZzYkNCdFpYSm5aU0J3Y205d1pYSjBhV1Z6WEc0Z0tpOWNibVoxYm1OMGFXOXVJRzFsY21kbEtDOHFJRzlpYWpFc0lHOWlhaklzSUc5aWFqTXNJQzR1TGlBcUx5a2dlMXh1SUNCMllYSWdjbVZ6ZFd4MElEMGdlMzA3WEc0Z0lHWjFibU4wYVc5dUlHRnpjMmxuYmxaaGJIVmxLSFpoYkN3Z2EyVjVLU0I3WEc0Z0lDQWdhV1lnS0hSNWNHVnZaaUJ5WlhOMWJIUmJhMlY1WFNBOVBUMGdKMjlpYW1WamRDY2dKaVlnZEhsd1pXOW1JSFpoYkNBOVBUMGdKMjlpYW1WamRDY3BJSHRjYmlBZ0lDQWdJSEpsYzNWc2RGdHJaWGxkSUQwZ2JXVnlaMlVvY21WemRXeDBXMnRsZVYwc0lIWmhiQ2s3WEc0Z0lDQWdmU0JsYkhObElIdGNiaUFnSUNBZ0lISmxjM1ZzZEZ0clpYbGRJRDBnZG1Gc08xeHVJQ0FnSUgxY2JpQWdmVnh1WEc0Z0lHWnZjaUFvZG1GeUlHa2dQU0F3TENCc0lEMGdZWEpuZFcxbGJuUnpMbXhsYm1kMGFEc2dhU0E4SUd3N0lHa3JLeWtnZTF4dUlDQWdJR1p2Y2tWaFkyZ29ZWEpuZFcxbGJuUnpXMmxkTENCaGMzTnBaMjVXWVd4MVpTazdYRzRnSUgxY2JpQWdjbVYwZFhKdUlISmxjM1ZzZER0Y2JuMWNibHh1THlvcVhHNGdLaUJGZUhSbGJtUnpJRzlpYW1WamRDQmhJR0o1SUcxMWRHRmliSGtnWVdSa2FXNW5JSFJ2SUdsMElIUm9aU0J3Y205d1pYSjBhV1Z6SUc5bUlHOWlhbVZqZENCaUxseHVJQ3BjYmlBcUlFQndZWEpoYlNCN1QySnFaV04wZlNCaElGUm9aU0J2WW1wbFkzUWdkRzhnWW1VZ1pYaDBaVzVrWldSY2JpQXFJRUJ3WVhKaGJTQjdUMkpxWldOMGZTQmlJRlJvWlNCdlltcGxZM1FnZEc4Z1kyOXdlU0J3Y205d1pYSjBhV1Z6SUdaeWIyMWNiaUFxSUVCd1lYSmhiU0I3VDJKcVpXTjBmU0IwYUdselFYSm5JRlJvWlNCdlltcGxZM1FnZEc4Z1ltbHVaQ0JtZFc1amRHbHZiaUIwYjF4dUlDb2dRSEpsZEhWeWJpQjdUMkpxWldOMGZTQlVhR1VnY21WemRXeDBhVzVuSUhaaGJIVmxJRzltSUc5aWFtVmpkQ0JoWEc0Z0tpOWNibVoxYm1OMGFXOXVJR1Y0ZEdWdVpDaGhMQ0JpTENCMGFHbHpRWEpuS1NCN1hHNGdJR1p2Y2tWaFkyZ29ZaXdnWm5WdVkzUnBiMjRnWVhOemFXZHVWbUZzZFdVb2RtRnNMQ0JyWlhrcElIdGNiaUFnSUNCcFppQW9kR2hwYzBGeVp5QW1KaUIwZVhCbGIyWWdkbUZzSUQwOVBTQW5ablZ1WTNScGIyNG5LU0I3WEc0Z0lDQWdJQ0JoVzJ0bGVWMGdQU0JpYVc1a0tIWmhiQ3dnZEdocGMwRnlaeWs3WEc0Z0lDQWdmU0JsYkhObElIdGNiaUFnSUNBZ0lHRmJhMlY1WFNBOUlIWmhiRHRjYmlBZ0lDQjlYRzRnSUgwcE8xeHVJQ0J5WlhSMWNtNGdZVHRjYm4xY2JseHViVzlrZFd4bExtVjRjRzl5ZEhNZ1BTQjdYRzRnSUdselFYSnlZWGs2SUdselFYSnlZWGtzWEc0Z0lHbHpRWEp5WVhsQ2RXWm1aWEk2SUdselFYSnlZWGxDZFdabVpYSXNYRzRnSUdselFuVm1abVZ5T2lCcGMwSjFabVpsY2l4Y2JpQWdhWE5HYjNKdFJHRjBZVG9nYVhOR2IzSnRSR0YwWVN4Y2JpQWdhWE5CY25KaGVVSjFabVpsY2xacFpYYzZJR2x6UVhKeVlYbENkV1ptWlhKV2FXVjNMRnh1SUNCcGMxTjBjbWx1WnpvZ2FYTlRkSEpwYm1jc1hHNGdJR2x6VG5WdFltVnlPaUJwYzA1MWJXSmxjaXhjYmlBZ2FYTlBZbXBsWTNRNklHbHpUMkpxWldOMExGeHVJQ0JwYzFWdVpHVm1hVzVsWkRvZ2FYTlZibVJsWm1sdVpXUXNYRzRnSUdselJHRjBaVG9nYVhORVlYUmxMRnh1SUNCcGMwWnBiR1U2SUdselJtbHNaU3hjYmlBZ2FYTkNiRzlpT2lCcGMwSnNiMklzWEc0Z0lHbHpSblZ1WTNScGIyNDZJR2x6Um5WdVkzUnBiMjRzWEc0Z0lHbHpVM1J5WldGdE9pQnBjMU4wY21WaGJTeGNiaUFnYVhOVlVreFRaV0Z5WTJoUVlYSmhiWE02SUdselZWSk1VMlZoY21Ob1VHRnlZVzF6TEZ4dUlDQnBjMU4wWVc1a1lYSmtRbkp2ZDNObGNrVnVkam9nYVhOVGRHRnVaR0Z5WkVKeWIzZHpaWEpGYm5Zc1hHNGdJR1p2Y2tWaFkyZzZJR1p2Y2tWaFkyZ3NYRzRnSUcxbGNtZGxPaUJ0WlhKblpTeGNiaUFnWlhoMFpXNWtPaUJsZUhSbGJtUXNYRzRnSUhSeWFXMDZJSFJ5YVcxY2JuMDdYRzRpTENJdktpRmNiaUFxSUVSbGRHVnliV2x1WlNCcFppQmhiaUJ2WW1wbFkzUWdhWE1nWVNCQ2RXWm1aWEpjYmlBcVhHNGdLaUJBWVhWMGFHOXlJQ0FnUm1WeWIzTnpJRUZpYjNWcmFHRmthV3BsYUNBOGFIUjBjSE02THk5bVpYSnZjM011YjNKblBseHVJQ29nUUd4cFkyVnVjMlVnSUUxSlZGeHVJQ292WEc1Y2JpOHZJRlJvWlNCZmFYTkNkV1ptWlhJZ1kyaGxZMnNnYVhNZ1ptOXlJRk5oWm1GeWFTQTFMVGNnYzNWd2NHOXlkQ3dnWW1WallYVnpaU0JwZENkeklHMXBjM05wYm1kY2JpOHZJRTlpYW1WamRDNXdjbTkwYjNSNWNHVXVZMjl1YzNSeWRXTjBiM0l1SUZKbGJXOTJaU0IwYUdseklHVjJaVzUwZFdGc2JIbGNibTF2WkhWc1pTNWxlSEJ2Y25SeklEMGdablZ1WTNScGIyNGdLRzlpYWlrZ2UxeHVJQ0J5WlhSMWNtNGdiMkpxSUNFOUlHNTFiR3dnSmlZZ0tHbHpRblZtWm1WeUtHOWlhaWtnZkh3Z2FYTlRiRzkzUW5WbVptVnlLRzlpYWlrZ2ZId2dJU0Z2WW1vdVgybHpRblZtWm1WeUtWeHVmVnh1WEc1bWRXNWpkR2x2YmlCcGMwSjFabVpsY2lBb2IySnFLU0I3WEc0Z0lISmxkSFZ5YmlBaElXOWlhaTVqYjI1emRISjFZM1J2Y2lBbUppQjBlWEJsYjJZZ2IySnFMbU52Ym5OMGNuVmpkRzl5TG1selFuVm1abVZ5SUQwOVBTQW5ablZ1WTNScGIyNG5JQ1ltSUc5aWFpNWpiMjV6ZEhKMVkzUnZjaTVwYzBKMVptWmxjaWh2WW1vcFhHNTlYRzVjYmk4dklFWnZjaUJPYjJSbElIWXdMakV3SUhOMWNIQnZjblF1SUZKbGJXOTJaU0IwYUdseklHVjJaVzUwZFdGc2JIa3VYRzVtZFc1amRHbHZiaUJwYzFOc2IzZENkV1ptWlhJZ0tHOWlhaWtnZTF4dUlDQnlaWFIxY200Z2RIbHdaVzltSUc5aWFpNXlaV0ZrUm14dllYUk1SU0E5UFQwZ0oyWjFibU4wYVc5dUp5QW1KaUIwZVhCbGIyWWdiMkpxTG5Oc2FXTmxJRDA5UFNBblpuVnVZM1JwYjI0bklDWW1JR2x6UW5WbVptVnlLRzlpYWk1emJHbGpaU2d3TENBd0tTbGNibjFjYmlJc0lpOHZJSE5vYVcwZ1ptOXlJSFZ6YVc1bklIQnliMk5sYzNNZ2FXNGdZbkp2ZDNObGNseHVkbUZ5SUhCeWIyTmxjM01nUFNCdGIyUjFiR1V1Wlhod2IzSjBjeUE5SUh0OU8xeHVYRzR2THlCallXTm9aV1FnWm5KdmJTQjNhR0YwWlhabGNpQm5iRzlpWVd3Z2FYTWdjSEpsYzJWdWRDQnpieUIwYUdGMElIUmxjM1FnY25WdWJtVnljeUIwYUdGMElITjBkV0lnYVhSY2JpOHZJR1J2YmlkMElHSnlaV0ZySUhSb2FXNW5jeTRnSUVKMWRDQjNaU0J1WldWa0lIUnZJSGR5WVhBZ2FYUWdhVzRnWVNCMGNua2dZMkYwWTJnZ2FXNGdZMkZ6WlNCcGRDQnBjMXh1THk4Z2QzSmhjSEJsWkNCcGJpQnpkSEpwWTNRZ2JXOWtaU0JqYjJSbElIZG9hV05vSUdSdlpYTnVKM1FnWkdWbWFXNWxJR0Z1ZVNCbmJHOWlZV3h6TGlBZ1NYUW5jeUJwYm5OcFpHVWdZVnh1THk4Z1puVnVZM1JwYjI0Z1ltVmpZWFZ6WlNCMGNua3ZZMkYwWTJobGN5QmtaVzl3ZEdsdGFYcGxJR2x1SUdObGNuUmhhVzRnWlc1bmFXNWxjeTVjYmx4dWRtRnlJR05oWTJobFpGTmxkRlJwYldWdmRYUTdYRzUyWVhJZ1kyRmphR1ZrUTJ4bFlYSlVhVzFsYjNWME8xeHVYRzVtZFc1amRHbHZiaUJrWldaaGRXeDBVMlYwVkdsdGIzVjBLQ2tnZTF4dUlDQWdJSFJvY205M0lHNWxkeUJGY25KdmNpZ25jMlYwVkdsdFpXOTFkQ0JvWVhNZ2JtOTBJR0psWlc0Z1pHVm1hVzVsWkNjcE8xeHVmVnh1Wm5WdVkzUnBiMjRnWkdWbVlYVnNkRU5zWldGeVZHbHRaVzkxZENBb0tTQjdYRzRnSUNBZ2RHaHliM2NnYm1WM0lFVnljbTl5S0NkamJHVmhjbFJwYldWdmRYUWdhR0Z6SUc1dmRDQmlaV1Z1SUdSbFptbHVaV1FuS1R0Y2JuMWNiaWhtZFc1amRHbHZiaUFvS1NCN1hHNGdJQ0FnZEhKNUlIdGNiaUFnSUNBZ0lDQWdhV1lnS0hSNWNHVnZaaUJ6WlhSVWFXMWxiM1YwSUQwOVBTQW5ablZ1WTNScGIyNG5LU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQmpZV05vWldSVFpYUlVhVzFsYjNWMElEMGdjMlYwVkdsdFpXOTFkRHRjYmlBZ0lDQWdJQ0FnZlNCbGJITmxJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lHTmhZMmhsWkZObGRGUnBiV1Z2ZFhRZ1BTQmtaV1poZFd4MFUyVjBWR2x0YjNWME8xeHVJQ0FnSUNBZ0lDQjlYRzRnSUNBZ2ZTQmpZWFJqYUNBb1pTa2dlMXh1SUNBZ0lDQWdJQ0JqWVdOb1pXUlRaWFJVYVcxbGIzVjBJRDBnWkdWbVlYVnNkRk5sZEZScGJXOTFkRHRjYmlBZ0lDQjlYRzRnSUNBZ2RISjVJSHRjYmlBZ0lDQWdJQ0FnYVdZZ0tIUjVjR1Z2WmlCamJHVmhjbFJwYldWdmRYUWdQVDA5SUNkbWRXNWpkR2x2YmljcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUdOaFkyaGxaRU5zWldGeVZHbHRaVzkxZENBOUlHTnNaV0Z5VkdsdFpXOTFkRHRjYmlBZ0lDQWdJQ0FnZlNCbGJITmxJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lHTmhZMmhsWkVOc1pXRnlWR2x0Wlc5MWRDQTlJR1JsWm1GMWJIUkRiR1ZoY2xScGJXVnZkWFE3WEc0Z0lDQWdJQ0FnSUgxY2JpQWdJQ0I5SUdOaGRHTm9JQ2hsS1NCN1hHNGdJQ0FnSUNBZ0lHTmhZMmhsWkVOc1pXRnlWR2x0Wlc5MWRDQTlJR1JsWm1GMWJIUkRiR1ZoY2xScGJXVnZkWFE3WEc0Z0lDQWdmVnh1ZlNBb0tTbGNibVoxYm1OMGFXOXVJSEoxYmxScGJXVnZkWFFvWm5WdUtTQjdYRzRnSUNBZ2FXWWdLR05oWTJobFpGTmxkRlJwYldWdmRYUWdQVDA5SUhObGRGUnBiV1Z2ZFhRcElIdGNiaUFnSUNBZ0lDQWdMeTl1YjNKdFlXd2daVzUyYVhKdmJXVnVkSE1nYVc0Z2MyRnVaU0J6YVhSMVlYUnBiMjV6WEc0Z0lDQWdJQ0FnSUhKbGRIVnliaUJ6WlhSVWFXMWxiM1YwS0daMWJpd2dNQ2s3WEc0Z0lDQWdmVnh1SUNBZ0lDOHZJR2xtSUhObGRGUnBiV1Z2ZFhRZ2QyRnpiaWQwSUdGMllXbHNZV0pzWlNCaWRYUWdkMkZ6SUd4aGRIUmxjaUJrWldacGJtVmtYRzRnSUNBZ2FXWWdLQ2hqWVdOb1pXUlRaWFJVYVcxbGIzVjBJRDA5UFNCa1pXWmhkV3gwVTJWMFZHbHRiM1YwSUh4OElDRmpZV05vWldSVFpYUlVhVzFsYjNWMEtTQW1KaUJ6WlhSVWFXMWxiM1YwS1NCN1hHNGdJQ0FnSUNBZ0lHTmhZMmhsWkZObGRGUnBiV1Z2ZFhRZ1BTQnpaWFJVYVcxbGIzVjBPMXh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdjMlYwVkdsdFpXOTFkQ2htZFc0c0lEQXBPMXh1SUNBZ0lIMWNiaUFnSUNCMGNua2dlMXh1SUNBZ0lDQWdJQ0F2THlCM2FHVnVJSGRvWlc0Z2MyOXRaV0p2WkhrZ2FHRnpJSE5qY21WM1pXUWdkMmwwYUNCelpYUlVhVzFsYjNWMElHSjFkQ0J1YnlCSkxrVXVJRzFoWkdSdVpYTnpYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQmpZV05vWldSVFpYUlVhVzFsYjNWMEtHWjFiaXdnTUNrN1hHNGdJQ0FnZlNCallYUmphQ2hsS1h0Y2JpQWdJQ0FnSUNBZ2RISjVJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDOHZJRmRvWlc0Z2QyVWdZWEpsSUdsdUlFa3VSUzRnWW5WMElIUm9aU0J6WTNKcGNIUWdhR0Z6SUdKbFpXNGdaWFpoYkdWa0lITnZJRWt1UlM0Z1pHOWxjMjRuZENCMGNuVnpkQ0IwYUdVZ1oyeHZZbUZzSUc5aWFtVmpkQ0IzYUdWdUlHTmhiR3hsWkNCdWIzSnRZV3hzZVZ4dUlDQWdJQ0FnSUNBZ0lDQWdjbVYwZFhKdUlHTmhZMmhsWkZObGRGUnBiV1Z2ZFhRdVkyRnNiQ2h1ZFd4c0xDQm1kVzRzSURBcE8xeHVJQ0FnSUNBZ0lDQjlJR05oZEdOb0tHVXBlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0x5OGdjMkZ0WlNCaGN5QmhZbTkyWlNCaWRYUWdkMmhsYmlCcGRDZHpJR0VnZG1WeWMybHZiaUJ2WmlCSkxrVXVJSFJvWVhRZ2JYVnpkQ0JvWVhabElIUm9aU0JuYkc5aVlXd2diMkpxWldOMElHWnZjaUFuZEdocGN5Y3NJR2h2Y0daMWJHeDVJRzkxY2lCamIyNTBaWGgwSUdOdmNuSmxZM1FnYjNSb1pYSjNhWE5sSUdsMElIZHBiR3dnZEdoeWIzY2dZU0JuYkc5aVlXd2daWEp5YjNKY2JpQWdJQ0FnSUNBZ0lDQWdJSEpsZEhWeWJpQmpZV05vWldSVFpYUlVhVzFsYjNWMExtTmhiR3dvZEdocGN5d2dablZ1TENBd0tUdGNiaUFnSUNBZ0lDQWdmVnh1SUNBZ0lIMWNibHh1WEc1OVhHNW1kVzVqZEdsdmJpQnlkVzVEYkdWaGNsUnBiV1Z2ZFhRb2JXRnlhMlZ5S1NCN1hHNGdJQ0FnYVdZZ0tHTmhZMmhsWkVOc1pXRnlWR2x0Wlc5MWRDQTlQVDBnWTJ4bFlYSlVhVzFsYjNWMEtTQjdYRzRnSUNBZ0lDQWdJQzh2Ym05eWJXRnNJR1Z1ZG1seWIyMWxiblJ6SUdsdUlITmhibVVnYzJsMGRXRjBhVzl1YzF4dUlDQWdJQ0FnSUNCeVpYUjFjbTRnWTJ4bFlYSlVhVzFsYjNWMEtHMWhjbXRsY2lrN1hHNGdJQ0FnZlZ4dUlDQWdJQzh2SUdsbUlHTnNaV0Z5VkdsdFpXOTFkQ0IzWVhOdUozUWdZWFpoYVd4aFlteGxJR0oxZENCM1lYTWdiR0YwZEdWeUlHUmxabWx1WldSY2JpQWdJQ0JwWmlBb0tHTmhZMmhsWkVOc1pXRnlWR2x0Wlc5MWRDQTlQVDBnWkdWbVlYVnNkRU5zWldGeVZHbHRaVzkxZENCOGZDQWhZMkZqYUdWa1EyeGxZWEpVYVcxbGIzVjBLU0FtSmlCamJHVmhjbFJwYldWdmRYUXBJSHRjYmlBZ0lDQWdJQ0FnWTJGamFHVmtRMnhsWVhKVWFXMWxiM1YwSUQwZ1kyeGxZWEpVYVcxbGIzVjBPMXh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdZMnhsWVhKVWFXMWxiM1YwS0cxaGNtdGxjaWs3WEc0Z0lDQWdmVnh1SUNBZ0lIUnllU0I3WEc0Z0lDQWdJQ0FnSUM4dklIZG9aVzRnZDJobGJpQnpiMjFsWW05a2VTQm9ZWE1nYzJOeVpYZGxaQ0IzYVhSb0lITmxkRlJwYldWdmRYUWdZblYwSUc1dklFa3VSUzRnYldGa1pHNWxjM05jYmlBZ0lDQWdJQ0FnY21WMGRYSnVJR05oWTJobFpFTnNaV0Z5VkdsdFpXOTFkQ2h0WVhKclpYSXBPMXh1SUNBZ0lIMGdZMkYwWTJnZ0tHVXBlMXh1SUNBZ0lDQWdJQ0IwY25rZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnTHk4Z1YyaGxiaUIzWlNCaGNtVWdhVzRnU1M1RkxpQmlkWFFnZEdobElITmpjbWx3ZENCb1lYTWdZbVZsYmlCbGRtRnNaV1FnYzI4Z1NTNUZMaUJrYjJWemJpZDBJQ0IwY25WemRDQjBhR1VnWjJ4dlltRnNJRzlpYW1WamRDQjNhR1Z1SUdOaGJHeGxaQ0J1YjNKdFlXeHNlVnh1SUNBZ0lDQWdJQ0FnSUNBZ2NtVjBkWEp1SUdOaFkyaGxaRU5zWldGeVZHbHRaVzkxZEM1allXeHNLRzUxYkd3c0lHMWhjbXRsY2lrN1hHNGdJQ0FnSUNBZ0lIMGdZMkYwWTJnZ0tHVXBlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0x5OGdjMkZ0WlNCaGN5QmhZbTkyWlNCaWRYUWdkMmhsYmlCcGRDZHpJR0VnZG1WeWMybHZiaUJ2WmlCSkxrVXVJSFJvWVhRZ2JYVnpkQ0JvWVhabElIUm9aU0JuYkc5aVlXd2diMkpxWldOMElHWnZjaUFuZEdocGN5Y3NJR2h2Y0daMWJHeDVJRzkxY2lCamIyNTBaWGgwSUdOdmNuSmxZM1FnYjNSb1pYSjNhWE5sSUdsMElIZHBiR3dnZEdoeWIzY2dZU0JuYkc5aVlXd2daWEp5YjNJdVhHNGdJQ0FnSUNBZ0lDQWdJQ0F2THlCVGIyMWxJSFpsY25OcGIyNXpJRzltSUVrdVJTNGdhR0YyWlNCa2FXWm1aWEpsYm5RZ2NuVnNaWE1nWm05eUlHTnNaV0Z5VkdsdFpXOTFkQ0IyY3lCelpYUlVhVzFsYjNWMFhHNGdJQ0FnSUNBZ0lDQWdJQ0J5WlhSMWNtNGdZMkZqYUdWa1EyeGxZWEpVYVcxbGIzVjBMbU5oYkd3b2RHaHBjeXdnYldGeWEyVnlLVHRjYmlBZ0lDQWdJQ0FnZlZ4dUlDQWdJSDFjYmx4dVhHNWNibjFjYm5aaGNpQnhkV1YxWlNBOUlGdGRPMXh1ZG1GeUlHUnlZV2x1YVc1bklEMGdabUZzYzJVN1hHNTJZWElnWTNWeWNtVnVkRkYxWlhWbE8xeHVkbUZ5SUhGMVpYVmxTVzVrWlhnZ1BTQXRNVHRjYmx4dVpuVnVZM1JwYjI0Z1kyeGxZVzVWY0U1bGVIUlVhV05yS0NrZ2UxeHVJQ0FnSUdsbUlDZ2haSEpoYVc1cGJtY2dmSHdnSVdOMWNuSmxiblJSZFdWMVpTa2dlMXh1SUNBZ0lDQWdJQ0J5WlhSMWNtNDdYRzRnSUNBZ2ZWeHVJQ0FnSUdSeVlXbHVhVzVuSUQwZ1ptRnNjMlU3WEc0Z0lDQWdhV1lnS0dOMWNuSmxiblJSZFdWMVpTNXNaVzVuZEdncElIdGNiaUFnSUNBZ0lDQWdjWFZsZFdVZ1BTQmpkWEp5Wlc1MFVYVmxkV1V1WTI5dVkyRjBLSEYxWlhWbEtUdGNiaUFnSUNCOUlHVnNjMlVnZTF4dUlDQWdJQ0FnSUNCeGRXVjFaVWx1WkdWNElEMGdMVEU3WEc0Z0lDQWdmVnh1SUNBZ0lHbG1JQ2h4ZFdWMVpTNXNaVzVuZEdncElIdGNiaUFnSUNBZ0lDQWdaSEpoYVc1UmRXVjFaU2dwTzF4dUlDQWdJSDFjYm4xY2JseHVablZ1WTNScGIyNGdaSEpoYVc1UmRXVjFaU2dwSUh0Y2JpQWdJQ0JwWmlBb1pISmhhVzVwYm1jcElIdGNiaUFnSUNBZ0lDQWdjbVYwZFhKdU8xeHVJQ0FnSUgxY2JpQWdJQ0IyWVhJZ2RHbHRaVzkxZENBOUlISjFibFJwYldWdmRYUW9ZMnhsWVc1VmNFNWxlSFJVYVdOcktUdGNiaUFnSUNCa2NtRnBibWx1WnlBOUlIUnlkV1U3WEc1Y2JpQWdJQ0IyWVhJZ2JHVnVJRDBnY1hWbGRXVXViR1Z1WjNSb08xeHVJQ0FnSUhkb2FXeGxLR3hsYmlrZ2UxeHVJQ0FnSUNBZ0lDQmpkWEp5Wlc1MFVYVmxkV1VnUFNCeGRXVjFaVHRjYmlBZ0lDQWdJQ0FnY1hWbGRXVWdQU0JiWFR0Y2JpQWdJQ0FnSUNBZ2QyaHBiR1VnS0NzcmNYVmxkV1ZKYm1SbGVDQThJR3hsYmlrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnYVdZZ0tHTjFjbkpsYm5SUmRXVjFaU2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdOMWNuSmxiblJSZFdWMVpWdHhkV1YxWlVsdVpHVjRYUzV5ZFc0b0tUdGNiaUFnSUNBZ0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQnhkV1YxWlVsdVpHVjRJRDBnTFRFN1hHNGdJQ0FnSUNBZ0lHeGxiaUE5SUhGMVpYVmxMbXhsYm1kMGFEdGNiaUFnSUNCOVhHNGdJQ0FnWTNWeWNtVnVkRkYxWlhWbElEMGdiblZzYkR0Y2JpQWdJQ0JrY21GcGJtbHVaeUE5SUdaaGJITmxPMXh1SUNBZ0lISjFia05zWldGeVZHbHRaVzkxZENoMGFXMWxiM1YwS1R0Y2JuMWNibHh1Y0hKdlkyVnpjeTV1WlhoMFZHbGpheUE5SUdaMWJtTjBhVzl1SUNobWRXNHBJSHRjYmlBZ0lDQjJZWElnWVhKbmN5QTlJRzVsZHlCQmNuSmhlU2hoY21kMWJXVnVkSE11YkdWdVozUm9JQzBnTVNrN1hHNGdJQ0FnYVdZZ0tHRnlaM1Z0Wlc1MGN5NXNaVzVuZEdnZ1BpQXhLU0I3WEc0Z0lDQWdJQ0FnSUdadmNpQW9kbUZ5SUdrZ1BTQXhPeUJwSUR3Z1lYSm5kVzFsYm5SekxteGxibWQwYURzZ2FTc3JLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQmhjbWR6VzJrZ0xTQXhYU0E5SUdGeVozVnRaVzUwYzF0cFhUdGNiaUFnSUNBZ0lDQWdmVnh1SUNBZ0lIMWNiaUFnSUNCeGRXVjFaUzV3ZFhOb0tHNWxkeUJKZEdWdEtHWjFiaXdnWVhKbmN5a3BPMXh1SUNBZ0lHbG1JQ2h4ZFdWMVpTNXNaVzVuZEdnZ1BUMDlJREVnSmlZZ0lXUnlZV2x1YVc1bktTQjdYRzRnSUNBZ0lDQWdJSEoxYmxScGJXVnZkWFFvWkhKaGFXNVJkV1YxWlNrN1hHNGdJQ0FnZlZ4dWZUdGNibHh1THk4Z2RqZ2diR2xyWlhNZ2NISmxaR2xqZEdsaWJHVWdiMkpxWldOMGMxeHVablZ1WTNScGIyNGdTWFJsYlNobWRXNHNJR0Z5Y21GNUtTQjdYRzRnSUNBZ2RHaHBjeTVtZFc0Z1BTQm1kVzQ3WEc0Z0lDQWdkR2hwY3k1aGNuSmhlU0E5SUdGeWNtRjVPMXh1ZlZ4dVNYUmxiUzV3Y205MGIzUjVjR1V1Y25WdUlEMGdablZ1WTNScGIyNGdLQ2tnZTF4dUlDQWdJSFJvYVhNdVpuVnVMbUZ3Y0d4NUtHNTFiR3dzSUhSb2FYTXVZWEp5WVhrcE8xeHVmVHRjYm5CeWIyTmxjM011ZEdsMGJHVWdQU0FuWW5KdmQzTmxjaWM3WEc1d2NtOWpaWE56TG1KeWIzZHpaWElnUFNCMGNuVmxPMXh1Y0hKdlkyVnpjeTVsYm5ZZ1BTQjdmVHRjYm5CeWIyTmxjM011WVhKbmRpQTlJRnRkTzF4dWNISnZZMlZ6Y3k1MlpYSnphVzl1SUQwZ0p5YzdJQzh2SUdWdGNIUjVJSE4wY21sdVp5QjBieUJoZG05cFpDQnlaV2RsZUhBZ2FYTnpkV1Z6WEc1d2NtOWpaWE56TG5abGNuTnBiMjV6SUQwZ2UzMDdYRzVjYm1aMWJtTjBhVzl1SUc1dmIzQW9LU0I3ZlZ4dVhHNXdjbTlqWlhOekxtOXVJRDBnYm05dmNEdGNibkJ5YjJObGMzTXVZV1JrVEdsemRHVnVaWElnUFNCdWIyOXdPMXh1Y0hKdlkyVnpjeTV2Ym1ObElEMGdibTl2Y0R0Y2JuQnliMk5sYzNNdWIyWm1JRDBnYm05dmNEdGNibkJ5YjJObGMzTXVjbVZ0YjNabFRHbHpkR1Z1WlhJZ1BTQnViMjl3TzF4dWNISnZZMlZ6Y3k1eVpXMXZkbVZCYkd4TWFYTjBaVzVsY25NZ1BTQnViMjl3TzF4dWNISnZZMlZ6Y3k1bGJXbDBJRDBnYm05dmNEdGNibkJ5YjJObGMzTXVjSEpsY0dWdVpFeHBjM1JsYm1WeUlEMGdibTl2Y0R0Y2JuQnliMk5sYzNNdWNISmxjR1Z1WkU5dVkyVk1hWE4wWlc1bGNpQTlJRzV2YjNBN1hHNWNibkJ5YjJObGMzTXViR2x6ZEdWdVpYSnpJRDBnWm5WdVkzUnBiMjRnS0c1aGJXVXBJSHNnY21WMGRYSnVJRnRkSUgxY2JseHVjSEp2WTJWemN5NWlhVzVrYVc1bklEMGdablZ1WTNScGIyNGdLRzVoYldVcElIdGNiaUFnSUNCMGFISnZkeUJ1WlhjZ1JYSnliM0lvSjNCeWIyTmxjM011WW1sdVpHbHVaeUJwY3lCdWIzUWdjM1Z3Y0c5eWRHVmtKeWs3WEc1OU8xeHVYRzV3Y205alpYTnpMbU4zWkNBOUlHWjFibU4wYVc5dUlDZ3BJSHNnY21WMGRYSnVJQ2N2SnlCOU8xeHVjSEp2WTJWemN5NWphR1JwY2lBOUlHWjFibU4wYVc5dUlDaGthWElwSUh0Y2JpQWdJQ0IwYUhKdmR5QnVaWGNnUlhKeWIzSW9KM0J5YjJObGMzTXVZMmhrYVhJZ2FYTWdibTkwSUhOMWNIQnZjblJsWkNjcE8xeHVmVHRjYm5CeWIyTmxjM011ZFcxaGMyc2dQU0JtZFc1amRHbHZiaWdwSUhzZ2NtVjBkWEp1SURBN0lIMDdYRzRpTENKcGJYQnZjblFnZTBScGMzQmhkR05vWlhKOUlHWnliMjBnWENJdUxpOWxkbVZ1ZEhNdlpHbHpjR0YwWTJobGNsd2lPMXh5WEc1Y2NseHVaWGh3YjNKMElHTnNZWE56SUVOb1lXNXVaV3dnWlhoMFpXNWtjeUJFYVhOd1lYUmphR1Z5SUh0Y2NseHVJQ0FnSUdOdmJuTjBjblZqZEc5eUtHNWhiV1VzSUhCMWMyaGxjaWtnZTF4eVhHNGdJQ0FnSUNBZ0lITjFjR1Z5S0NrN1hISmNibHh5WEc0Z0lDQWdJQ0FnSUhSb2FYTXVibUZ0WlNBOUlHNWhiV1U3WEhKY2JpQWdJQ0FnSUNBZ2RHaHBjeTV3ZFhOb1pYSWdQU0J3ZFhOb1pYSTdYSEpjYmx4eVhHNGdJQ0FnSUNBZ0lHbG1JQ2gwYUdsekxuQjFjMmhsY2k1emIyTnJaWFF1YzNSaGRHVWdQVDBnTVNrZ2UxeHlYRzRnSUNBZ0lDQWdJQ0FnSUNCMGFHbHpMbk4xWW5OamNtbGlaU2dwTzF4eVhHNGdJQ0FnSUNBZ0lIMWNjbHh1SUNBZ0lIMWNjbHh1WEhKY2JpQWdJQ0J6ZFdKelkzSnBZbVVvS1NCN1hISmNiaUFnSUNBZ0lDQWdkR2hwY3k1d2RYTm9aWEl1YzJWdVpDaDdYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lHVjJaVzUwT2lBbmMzVmljMk55YVdKbEp5eGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ1pHRjBZVG9nZTF4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1kyaGhibTVsYkRvZ2RHaHBjeTV1WVcxbFhISmNiaUFnSUNBZ0lDQWdJQ0FnSUgxY2NseHVJQ0FnSUNBZ0lDQjlLVHRjY2x4dUlDQWdJSDFjY2x4dWZTSXNJbWx0Y0c5eWRDQjdRMmhoYm01bGJIMGdabkp2YlNCY0lpNHZZMmhoYm01bGJGd2lPMXh5WEc1cGJYQnZjblFnZTFCeVpYTmxibU5sUTJoaGJtNWxiSDBnWm5KdmJTQmNJaTR2Y0hKbGMyVnVZMlZmWTJoaGJtNWxiRndpTzF4eVhHNXBiWEJ2Y25RZ2UxQnlhWFpoZEdWRGFHRnVibVZzZlNCbWNtOXRJRndpTGk5d2NtbDJZWFJsWDJOb1lXNXVaV3hjSWp0Y2NseHVYSEpjYm1WNGNHOXlkQ0JqYkdGemN5Qk5ZVzV1WVdkbGNpQjdYSEpjYmlBZ0lDQmpiMjV6ZEhKMVkzUnZjaWdwSUh0Y2NseHVJQ0FnSUNBZ0lDQjBhR2x6TG1Ob1lXNXVaV3h6SUQwZ2UzMDdYSEpjYmlBZ0lDQjlYSEpjYmx4eVhHNGdJQ0FnWVdSa0tHNWhiV1VzSUhCMWMyaGxjaWtnZTF4eVhHNGdJQ0FnSUNBZ0lHbG1JQ2doZEdocGN5NWphR0Z1Ym1Wc2MxdHVZVzFsWFNrZ2UxeHlYRzRnSUNBZ0lDQWdJQ0FnSUNCMGFHbHpMbU5vWVc1dVpXeHpXMjVoYldWZElEMGdZM0psWVhSbFEyaGhibTVsYkNodVlXMWxMQ0J3ZFhOb1pYSXBPMXh5WEc0Z0lDQWdJQ0FnSUgxY2NseHVJQ0FnSUNBZ0lDQnlaWFIxY200Z2RHaHBjeTVqYUdGdWJtVnNjMXR1WVcxbFhUdGNjbHh1SUNBZ0lIMWNjbHh1WEhKY2JpQWdJQ0JoYkd3b0tTQjdYSEpjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJRTlpYW1WamRDNXJaWGx6S0hSb2FYTXVZMmhoYm01bGJITXBPMXh5WEc0Z0lDQWdmVnh5WEc1Y2NseHVJQ0FnSUdacGJtUW9ibUZ0WlNrZ2UxeHlYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQjBhR2x6TG1Ob1lXNXVaV3h6VzI1aGJXVmRPMXh5WEc0Z0lDQWdmVnh5WEc1Y2NseHVJQ0FnSUhKbGJXOTJaU2h1WVcxbEtTQjdYSEpjYmlBZ0lDQWdJQ0FnYkdWMElHTm9ZVzV1Wld3Z1BTQjBhR2x6TG1Ob1lXNXVaV3h6VzI1aGJXVmRPMXh5WEc0Z0lDQWdJQ0FnSUdSbGJHVjBaU0IwYUdsekxtTm9ZVzV1Wld4elcyNWhiV1ZkTzF4eVhHNGdJQ0FnSUNBZ0lISmxkSFZ5YmlCamFHRnVibVZzTzF4eVhHNGdJQ0FnZlZ4eVhHNWNjbHh1SUNBZ0lITjFZbk5qY21saVpTZ3BJSHRjY2x4dUlDQWdJQ0FnSUNCbWIzSWdLR3hsZENCcElHbHVJSFJvYVhNdVkyaGhibTVsYkhNcElIdGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ2RHaHBjeTVqYUdGdWJtVnNjMXRwWFM1emRXSnpZM0pwWW1Vb0tUdGNjbHh1SUNBZ0lDQWdJQ0I5WEhKY2JseHlYRzRnSUNBZ2ZWeHlYRzU5WEhKY2JseHlYRzVtZFc1amRHbHZiaUJqY21WaGRHVkRhR0Z1Ym1Wc0tHNWhiV1VzSUhCMWMyaGxjaWtnZTF4eVhHNGdJQ0FnYVdZZ0tHNWhiV1V1YVc1a1pYaFBaaWduY0hKcGRtRjBaUzBuS1NBOVBUMGdNQ2tnZTF4eVhHNGdJQ0FnSUNBZ0lISmxkSFZ5YmlCdVpYY2dVSEpwZG1GMFpVTm9ZVzV1Wld3b2JtRnRaU3dnY0hWemFHVnlLVHRjY2x4dUlDQWdJSDBnWld4elpTQnBaaUFvYm1GdFpTNXBibVJsZUU5bUtDZHdjbVZ6Wlc1alpTMG5LU0E5UFQwZ01Da2dlMXh5WEc0Z0lDQWdJQ0FnSUhKbGRIVnliaUJ1WlhjZ1VISmxjMlZ1WTJWRGFHRnVibVZzS0c1aGJXVXNJSEIxYzJobGNpazdYSEpjYmlBZ0lDQjlJR1ZzYzJVZ2UxeHlYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQnVaWGNnUTJoaGJtNWxiQ2h1WVcxbExDQndkWE5vWlhJcE8xeHlYRzRnSUNBZ2ZWeHlYRzU5SWl3aWFXMXdiM0owSUh0RWFYTndZWFJqYUdWeWZTQm1jbTl0SUZ3aUxpNHZaWFpsYm5SekwyUnBjM0JoZEdOb1pYSmNJanRjY2x4dVhISmNibVY0Y0c5eWRDQmpiR0Z6Y3lCUWNtVnpaVzVqWlVOb1lXNXVaV3dnWlhoMFpXNWtjeUJFYVhOd1lYUmphR1Z5SUh0Y2NseHVJQ0FnSUdOdmJuTjBjblZqZEc5eUtHNWhiV1VzSUhCMWMyaGxjaWtnZTF4eVhHNGdJQ0FnSUNBZ0lITjFjR1Z5S0NrN1hISmNibHh5WEc0Z0lDQWdJQ0FnSUhSb2FYTXVibUZ0WlNBOUlHNWhiV1U3WEhKY2JpQWdJQ0FnSUNBZ2RHaHBjeTV3ZFhOb1pYSWdQU0J3ZFhOb1pYSTdYSEpjYmlBZ0lDQWdJQ0FnZEdocGN5NWhkWFJvSUQwZ2JuVnNiRHRjY2x4dVhISmNiaUFnSUNBZ0lDQWdhV1lnS0hSb2FYTXVjSFZ6YUdWeUxuTnZZMnRsZEM1emRHRjBaU0E5UFNBeEtTQjdYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lIUm9hWE11YzNWaWMyTnlhV0psS0NrN1hISmNiaUFnSUNBZ0lDQWdmVnh5WEc0Z0lDQWdmVnh5WEc1Y2NseHVJQ0FnSUhOMVluTmpjbWxpWlNncElIdGNjbHh1SUNBZ0lDQWdJQ0IwYUdsekxuQjFjMmhsY2k1aGRYUm9LSFJvYVhNdWJtRnRaU3dnS0dVcElEMCtJSHRjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdkR2hwY3k1aGRYUm9JRDBnWlM1a1lYUmhMbUYxZEdnN1hISmNibHh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQjBhR2x6TG5CMWMyaGxjaTV6Wlc1a0tIdGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR1YyWlc1ME9pQW5jM1ZpYzJOeWFXSmxKeXhjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdSaGRHRTZJSHRjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQmphR0Z1Ym1Wc09pQjBhR2x6TG01aGJXVXNYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1lYVjBhRG9nZEdocGN5NWhkWFJvTEZ4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR05vWVc1dVpXeGZaR0YwWVRvZ1pTNWtZWFJoTG1Ob1lXNXVaV3hmWkdGMFlWeHlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdmVnh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQjlLVHRjY2x4dUlDQWdJQ0FnSUNCOUtUdGNjbHh1SUNBZ0lIMWNjbHh1ZlNJc0ltbHRjRzl5ZENCN1JHbHpjR0YwWTJobGNuMGdabkp2YlNCY0lpNHVMMlYyWlc1MGN5OWthWE53WVhSamFHVnlYQ0k3WEhKY2JseHlYRzVsZUhCdmNuUWdZMnhoYzNNZ1VISnBkbUYwWlVOb1lXNXVaV3dnWlhoMFpXNWtjeUJFYVhOd1lYUmphR1Z5SUh0Y2NseHVJQ0FnSUdOdmJuTjBjblZqZEc5eUtHNWhiV1VzSUhCMWMyaGxjaWtnZTF4eVhHNGdJQ0FnSUNBZ0lITjFjR1Z5S0NrN1hISmNibHh5WEc0Z0lDQWdJQ0FnSUhSb2FYTXVibUZ0WlNBOUlHNWhiV1U3WEhKY2JpQWdJQ0FnSUNBZ2RHaHBjeTV3ZFhOb1pYSWdQU0J3ZFhOb1pYSTdYSEpjYmlBZ0lDQWdJQ0FnZEdocGN5NWhkWFJvSUQwZ2JuVnNiRHRjY2x4dVhISmNiaUFnSUNBZ0lDQWdhV1lnS0hSb2FYTXVjSFZ6YUdWeUxuTnZZMnRsZEM1emRHRjBaU0E5UFNBeEtTQjdYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lIUm9hWE11YzNWaWMyTnlhV0psS0NrN1hISmNiaUFnSUNBZ0lDQWdmVnh5WEc0Z0lDQWdmVnh5WEc1Y2NseHVJQ0FnSUhOMVluTmpjbWxpWlNncElIdGNjbHh1SUNBZ0lDQWdJQ0IwYUdsekxuQjFjMmhsY2k1aGRYUm9LSFJvYVhNdWJtRnRaU3dnS0dVcElEMCtJSHRjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdkR2hwY3k1aGRYUm9JRDBnWlM1a1lYUmhMbUYxZEdnN1hISmNibHh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQjBhR2x6TG5CMWMyaGxjaTV6Wlc1a0tIdGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR1YyWlc1ME9pQW5jM1ZpYzJOeWFXSmxKeXhjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdSaGRHRTZJSHRjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQmphR0Z1Ym1Wc09pQjBhR2x6TG01aGJXVXNYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1lYVjBhRG9nZEdocGN5NWhkWFJvWEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCOVhISmNiaUFnSUNBZ0lDQWdJQ0FnSUgwcE8xeHlYRzRnSUNBZ0lDQWdJSDBwTzF4eVhHNGdJQ0FnZlZ4eVhHNTlJaXdpYVcxd2IzSjBJSHRFYVhOd1lYUmphR1Z5ZlNCbWNtOXRJRndpTGk0dlpYWmxiblJ6TDJScGMzQmhkR05vWlhKY0lqdGNjbHh1WEhKY2JtVjRjRzl5ZENCamJHRnpjeUJUYjJOclpYUWdaWGgwWlc1a2N5QkVhWE53WVhSamFHVnlJSHRjY2x4dUlDQWdJR052Ym5OMGNuVmpkRzl5S0hCMWMyaGxjaXdnYUc5emRDa2dlMXh5WEc0Z0lDQWdJQ0FnSUhOMWNHVnlLQ2s3WEhKY2JseHlYRzRnSUNBZ0lDQWdJSFJvYVhNdWNIVnphR1Z5SUQwZ2NIVnphR1Z5TzF4eVhHNGdJQ0FnSUNBZ0lIUm9hWE11YzI5amEyVjBJRDBnYm1WM0lGZGxZbE52WTJ0bGRDaG9iM04wSUNzZ0p5OG5JQ3NnZEdocGN5NXdkWE5vWlhJdWEyVjVLVHRjY2x4dVhISmNiaUFnSUNBZ0lDQWdkR2hwY3k1aWFXNWtUR2x6ZEdWdVpYSnpLQ2s3WEhKY2JpQWdJQ0I5WEhKY2JseHlYRzRnSUNBZ1ltbHVaRXhwYzNSbGJtVnljeWdwSUh0Y2NseHVJQ0FnSUNBZ0lDQjBhR2x6TG5OdlkydGxkQzV2Ym05d1pXNGdQU0FvS1NBOVBpQjdYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lIUm9hWE11YjI1UGNHVnVLQ2s3WEhKY2JpQWdJQ0FnSUNBZ2ZUdGNjbHh1SUNBZ0lDQWdJQ0IwYUdsekxuTnZZMnRsZEM1dmJtVnljbTl5SUQwZ0tHVnljbTl5S1NBOVBpQjdYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lIUm9hWE11YjI1RmNuSnZjaWhsY25KdmNpazdYSEpjYmlBZ0lDQWdJQ0FnZlR0Y2NseHVJQ0FnSUNBZ0lDQjBhR2x6TG5OdlkydGxkQzV2Ym1Oc2IzTmxJRDBnS0dOc2IzTmxSWFpsYm5RcElEMCtJSHRjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdkR2hwY3k1dmJrTnNiM05sS0dOc2IzTmxSWFpsYm5RcE8xeHlYRzRnSUNBZ0lDQWdJSDA3WEhKY2JpQWdJQ0FnSUNBZ2RHaHBjeTV6YjJOclpYUXViMjV0WlhOellXZGxJRDBnS0cxbGMzTmhaMlVwSUQwK0lIdGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ2RHaHBjeTV2YmsxbGMzTmhaMlVvYldWemMyRm5aU2s3WEhKY2JpQWdJQ0FnSUNBZ2ZUdGNjbHh1SUNBZ0lIMWNjbHh1WEhKY2JpQWdJQ0J2Yms5d1pXNG9LU0I3WEhKY2JpQWdJQ0FnSUNBZ0x5L2xpSjNscDR2bmlyYm1nSUZjY2x4dUlDQWdJQ0FnSUNCMGFHbHpMbk4wWVhSbElEMGdNRHRjY2x4dVhISmNiaUFnSUNBZ0lDQWdkR2hwY3k1aWFXNWtLQ2RqYjI1dVpXTjBaV1FuTENBb1pTa2dQVDRnZTF4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0IwYUdsekxuTnZZMnRsZEM1emIyTnJaWFJmYVdRZ1BTQmxMbk52WTJ0bGRGOXBaRHRjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdkR2hwY3k1emRHRjBaU0E5SURFN1hISmNibHh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQXZMK2l1b3VtWWhWeHlYRzRnSUNBZ0lDQWdJQ0FnSUNCMGFHbHpMbkIxYzJobGNpNWphR0Z1Ym1Wc2N5NXpkV0p6WTNKcFltVW9LVHRjY2x4dUlDQWdJQ0FnSUNCOUtUdGNjbHh1WEhKY2JpQWdJQ0FnSUNBZ2RHaHBjeTVpYVc1a0tDZGpiMjV1WldOMGFXOXVYMlpoYVd4bFpDY3NJQ2hsS1NBOVBpQjdYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lIUm9hWE11YzNSaGRHVWdQU0F0TVR0Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnWTI5dWMyOXNaUzVsY25KdmNpaGxMbVZ5Y205eUtWeHlYRzRnSUNBZ0lDQWdJSDBwTzF4eVhHNWNjbHh1SUNBZ0lDQWdJQ0F2S25Sb2FYTXVjMlZ1WkNoN1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUdWMlpXNTBPaUFuWVhWMGFHOXlhWHBoZEdsdmJpZGNjbHh1SUNBZ0lDQWdJQ0I5S1RzcUwxeHlYRzRnSUNBZ2ZWeHlYRzVjY2x4dUlDQWdJRzl1UlhKeWIzSW9aWEp5YjNJcElIdGNjbHh1SUNBZ0lDQWdJQ0JqYjI1emIyeGxMbVZ5Y205eUtHVnljbTl5S1Z4eVhHNGdJQ0FnZlZ4eVhHNWNjbHh1SUNBZ0lHOXVRMnh2YzJVb1kyeHZjMlZGZG1WdWRDa2dlMXh5WEc0Z0lDQWdJQ0FnSUdsbUlDaDBhR2x6TG5OdlkydGxkQzV5WldGa2VWTjBZWFJsSUQwOUlGZGxZbE52WTJ0bGRDNURURTlUUlVRcElIdGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ2FXWWdLR05zYjNObFJYWmxiblF1ZEhsd1pTQTlQU0FuWTJ4dmMyVW5LU0I3WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCamIyNXpiMnhsTG1WeWNtOXlLQ2R6YjJOclpYVG1uSTNsaXFIbHQ3TG1scTNsdklBaElTY3BYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lIMGdaV3h6WlNCcFppQW9ZMnh2YzJWRmRtVnVkQzUwZVhCbElEMDlJQ2R0WlhOellXZGxKeWtnZTF4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1kyOXVjMjlzWlM1bGNuSnZjaWhqYkc5elpVVjJaVzUwTG1SaGRHRXBYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lIMGdaV3h6WlNCN1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQmpiMjV6YjJ4bExtVnljbTl5S0NmbHQ3TG1scTNsdklBaElTY3BYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lIMWNjbHh1SUNBZ0lDQWdJQ0I5WEhKY2JpQWdJQ0I5WEhKY2JseHlYRzRnSUNBZ2IyNU5aWE56WVdkbEtHMWxjM05oWjJVcElIdGNjbHh1SUNBZ0lDQWdJQ0JzWlhRZ1pVUmhkR0VnUFNCS1UwOU9MbkJoY25ObEtHMWxjM05oWjJVdVpHRjBZU2s3WEhKY2JpQWdJQ0FnSUNBZ2JHVjBJR1YyWlc1MElEMGdaVVJoZEdFdVpYWmxiblE3WEhKY2JpQWdJQ0FnSUNBZ2JHVjBJR1JoZEdFZ1BTQmxSR0YwWVM1a1lYUmhPMXh5WEc1Y2NseHVJQ0FnSUNBZ0lDQnBaaUFvWlVSaGRHRXVZMmhoYm01bGJDQWhQVDBnZFc1a1pXWnBibVZrS1NCN1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUhSb2FYTXVjSFZ6YUdWeUxtTm9ZVzV1Wld4ekxtWnBibVFvWlVSaGRHRXVZMmhoYm01bGJDa3VaVzFwZENobGRtVnVkQ3dnWkdGMFlTazdYSEpjYmlBZ0lDQWdJQ0FnZlNCbGJITmxJSHRjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdkR2hwY3k1bGJXbDBLR1YyWlc1MExDQmtZWFJoS1R0Y2NseHVJQ0FnSUNBZ0lDQjlYSEpjYmx4eVhHNGdJQ0FnZlZ4eVhHNWNjbHh1SUNBZ0lITmxibVFvYW5OdmJpa2dlMXh5WEc0Z0lDQWdJQ0FnSUdsbUlDaDBhR2x6TG5OMFlYUmxJQ0U5UFNBdE1Ta2dlMXh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQjBhR2x6TG5OdlkydGxkQzV6Wlc1a0tFcFRUMDR1YzNSeWFXNW5hV1o1S0dwemIyNHBLVnh5WEc0Z0lDQWdJQ0FnSUgxY2NseHVJQ0FnSUgxY2NseHVmU0lzSW1WNGNHOXlkQ0JqYkdGemN5QkRZV3hzWW1GamExSmxaMmx6ZEhKNUlIdGNjbHh1SUNBZ0lHTnZibk4wY25WamRHOXlLQ2tnZTF4eVhHNGdJQ0FnSUNBZ0lIUm9hWE11WDJOaGJHeGlZV05yY3lBOUlIdDlPMXh5WEc0Z0lDQWdmVnh5WEc1Y2NseHVJQ0FnSUdkbGRDaHVZVzFsS1NCN1hISmNiaUFnSUNBZ0lDQWdjbVYwZFhKdUlIUm9hWE11WDJOaGJHeGlZV05yYzF0d2NtVm1hWGdvYm1GdFpTbGRPMXh5WEc0Z0lDQWdmVnh5WEc1Y2NseHVJQ0FnSUdGa1pDaHVZVzFsTENCallXeHNZbUZqYXl3Z1kyOXVkR1Y0ZENrZ2UxeHlYRzRnSUNBZ0lDQWdJR3hsZENCd2NtVm1hWGhsWkVWMlpXNTBUbUZ0WlNBOUlIQnlaV1pwZUNodVlXMWxLVHRjY2x4dUlDQWdJQ0FnSUNCMGFHbHpMbDlqWVd4c1ltRmphM05iY0hKbFptbDRaV1JGZG1WdWRFNWhiV1ZkSUQwZ2RHaHBjeTVmWTJGc2JHSmhZMnR6VzNCeVpXWnBlR1ZrUlhabGJuUk9ZVzFsWFNCOGZDQmJYVHRjY2x4dUlDQWdJQ0FnSUNCMGFHbHpMbDlqWVd4c1ltRmphM05iY0hKbFptbDRaV1JGZG1WdWRFNWhiV1ZkTG5CMWMyZ29lMXh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQm1iam9nWTJGc2JHSmhZMnNzWEhKY2JpQWdJQ0FnSUNBZ0lDQWdJR052Ym5SbGVIUTZJR052Ym5SbGVIUmNjbHh1SUNBZ0lDQWdJQ0I5S1R0Y2NseHVJQ0FnSUgxY2NseHVYSEpjYmlBZ0lDQnlaVzF2ZG1Vb2JtRnRaU3dnWTJGc2JHSmhZMnNzSUdOdmJuUmxlSFFwSUh0Y2NseHVJQ0FnSUNBZ0lDQnBaaUFvSVc1aGJXVWdKaVlnSVdOaGJHeGlZV05ySUNZbUlDRmpiMjUwWlhoMEtTQjdYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lIUm9hWE11WDJOaGJHeGlZV05yY3lBOUlIdDlPMXh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQnlaWFIxY200N1hISmNiaUFnSUNBZ0lDQWdmVnh5WEc1Y2NseHVJQ0FnSUNBZ0lDQjJZWElnYm1GdFpYTWdQU0J1WVcxbElEOGdXM0J5WldacGVDaHVZVzFsS1YwZ09pQlBZbXBsWTNRdWEyVjVjeWgwYUdsekxsOWpZV3hzWW1GamEzTXBPMXh5WEc1Y2NseHVJQ0FnSUNBZ0lDQnBaaUFvWTJGc2JHSmhZMnNnZkh3Z1kyOXVkR1Y0ZENrZ2UxeHlYRzRnSUNBZ0lDQWdJQ0FnSUNCMGFHbHpMbkpsYlc5MlpVTmhiR3hpWVdOcktHNWhiV1Z6TENCallXeHNZbUZqYXl3Z1kyOXVkR1Y0ZENrN1hISmNiaUFnSUNBZ0lDQWdmU0JsYkhObElIdGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ2RHaHBjeTV5WlcxdmRtVkJiR3hEWVd4c1ltRmphM01vYm1GdFpYTXBPMXh5WEc0Z0lDQWdJQ0FnSUgxY2NseHVJQ0FnSUgxY2NseHVYSEpjYmlBZ0lDQnlaVzF2ZG1WRFlXeHNZbUZqYXlodVlXMWxjeXdnWTJGc2JHSmhZMnNzSUdOdmJuUmxlSFFwSUh0Y2NseHVJQ0FnSUNBZ0lDQm1iM0lnS0d4bGRDQnVZVzFsSUdsdUlHNWhiV1Z6S1NCN1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUdadmNpQW9iR1YwSUd0bGVTQnBiaUIwYUdsekxsOWpZV3hzWW1GamEzTmJibUZ0WlYwcElIdGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR2xtSUNoMGFHbHpMbDlqWVd4c1ltRmphM05iYm1GdFpWMWJhMlY1WFM1bWJpQTlQU0JqWVd4c1ltRmpheUI4ZkNCMGFHbHpMbDlqWVd4c1ltRmphM05iYm1GdFpWMWJhMlY1WFM1amIyNTBaWGgwSUQwOUlHTnZiblJsZUhRcElIdGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCa1pXeGxkR1VnZEdocGN5NWZZMkZzYkdKaFkydHpXMjVoYldWZFcydGxlVjA3WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCOVhISmNiaUFnSUNBZ0lDQWdJQ0FnSUgxY2NseHVYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lHbG1JQ2gwYUdsekxsOWpZV3hzWW1GamEzTmJibUZ0WlYwdWJHVnVaM1JvSUQwOVBTQXdLU0I3WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCa1pXeGxkR1VnZEdocGN5NWZZMkZzYkdKaFkydHpXMjVoYldWZE8xeHlYRzRnSUNBZ0lDQWdJQ0FnSUNCOVhISmNiaUFnSUNBZ0lDQWdmVnh5WEc0Z0lDQWdmVnh5WEc1Y2NseHVJQ0FnSUhKbGJXOTJaVUZzYkVOaGJHeGlZV05yY3lodVlXMWxjeWtnZTF4eVhHNGdJQ0FnSUNBZ0lHWnZjaUFvYkdWMElHNWhiV1VnYVc0Z2JtRnRaWE1wSUh0Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnWkdWc1pYUmxJSFJvYVhNdVgyTmhiR3hpWVdOcmMxdHVZVzFsWFR0Y2NseHVJQ0FnSUNBZ0lDQjlYSEpjYmlBZ0lDQjlYSEpjYm4xY2NseHVYSEpjYm1aMWJtTjBhVzl1SUhCeVpXWnBlQ2h1WVcxbEtTQjdYSEpjYmlBZ0lDQnlaWFIxY200Z1hDSmZYQ0lnS3lCdVlXMWxPMXh5WEc1OUlpd2lhVzF3YjNKMElIdERZV3hzWW1GamExSmxaMmx6ZEhKNWZTQm1jbTl0SUNjdUwyTmhiR3hpWVdOclgzSmxaMmx6ZEhKNUp6dGNjbHh1WEhKY2JtVjRjRzl5ZENCamJHRnpjeUJFYVhOd1lYUmphR1Z5SUh0Y2NseHVJQ0FnSUdOdmJuTjBjblZqZEc5eUtDa2dlMXh5WEc0Z0lDQWdJQ0FnSUhSb2FYTXVZMkZzYkdKaFkydHpJRDBnYm1WM0lFTmhiR3hpWVdOclVtVm5hWE4wY25rb0tUdGNjbHh1SUNBZ0lDQWdJQ0IwYUdsekxtZHNiMkpoYkY5allXeHNZbUZqYTNNZ1BTQmJYVHRjY2x4dUlDQWdJSDFjY2x4dVhISmNiaUFnSUNCaWFXNWtLR1YyWlc1MFRtRnRaU3dnWTJGc2JHSmhZMnNzSUdOdmJuUmxlSFFwSUh0Y2NseHVJQ0FnSUNBZ0lDQjBhR2x6TG1OaGJHeGlZV05yY3k1aFpHUW9aWFpsYm5ST1lXMWxMQ0JqWVd4c1ltRmpheXdnWTI5dWRHVjRkQ2s3WEhKY2JpQWdJQ0FnSUNBZ2NtVjBkWEp1SUhSb2FYTTdYSEpjYmlBZ0lDQjlYSEpjYmx4eVhHNGdJQ0FnWW1sdVpGOW5iRzlpWVd3b1kyRnNiR0poWTJzcElIdGNjbHh1SUNBZ0lDQWdJQ0IwYUdsekxtZHNiMkpoYkY5allXeHNZbUZqYTNNdWNIVnphQ2hqWVd4c1ltRmpheWs3WEhKY2JpQWdJQ0FnSUNBZ2NtVjBkWEp1SUhSb2FYTTdYSEpjYmlBZ0lDQjlYSEpjYmx4eVhHNGdJQ0FnZFc1aWFXNWtLR1YyWlc1MFRtRnRaU3dnWTJGc2JHSmhZMnNzSUdOdmJuUmxlSFFwSUh0Y2NseHVJQ0FnSUNBZ0lDQjBhR2x6TG1OaGJHeGlZV05yY3k1eVpXMXZkbVVvWlhabGJuUk9ZVzFsTENCallXeHNZbUZqYXl3Z1kyOXVkR1Y0ZENrN1hISmNiaUFnSUNBZ0lDQWdjbVYwZFhKdUlIUm9hWE03WEhKY2JpQWdJQ0I5WEhKY2JseHlYRzRnSUNBZ2RXNWlhVzVrWDJkc2IySmhiQ2hqWVd4c1ltRmpheWtnZTF4eVhHNGdJQ0FnSUNBZ0lHbG1JQ2doWTJGc2JHSmhZMnNwSUh0Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnZEdocGN5NW5iRzlpWVd4ZlkyRnNiR0poWTJ0eklEMGdXMTA3WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJSEpsZEhWeWJpQjBhR2x6TzF4eVhHNGdJQ0FnSUNBZ0lIMWNjbHh1WEhKY2JpQWdJQ0FnSUNBZ1ptOXlJQ2hzWlhRZ2FTQnBiaUIwYUdsekxtZHNiMkpoYkY5allXeHNZbUZqYTNNcElIdGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ2FXWWdLR05oYkd4aVlXTnJJRDA5SUhSb2FYTXVaMnh2WW1Gc1gyTmhiR3hpWVdOcmMxdHBYU2tnZTF4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1pHVnNaWFJsSUhSb2FYTXVaMnh2WW1Gc1gyTmhiR3hpWVdOcmMxdHBYVHRjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdmVnh5WEc0Z0lDQWdJQ0FnSUgxY2NseHVJQ0FnSUNBZ0lDQnlaWFIxY200Z2RHaHBjenRjY2x4dUlDQWdJSDFjY2x4dVhISmNiaUFnSUNCMWJtSnBibVJmWVd4c0tDa2dlMXh5WEc0Z0lDQWdJQ0FnSUhSb2FYTXVkVzVpYVc1a0tDazdYSEpjYmlBZ0lDQWdJQ0FnZEdocGN5NTFibUpwYm1SZloyeHZZbUZzS0NrN1hISmNiaUFnSUNBZ0lDQWdjbVYwZFhKdUlIUm9hWE03WEhKY2JpQWdJQ0I5WEhKY2JseHlYRzRnSUNBZ1pXMXBkQ2hsZG1WdWRFNWhiV1VzSUdSaGRHRXBJSHRjY2x4dUlDQWdJQ0FnSUNCbWIzSWdLR3hsZENCcElEMGdNRHNnYVNBOElIUm9hWE11WjJ4dlltRnNYMk5oYkd4aVlXTnJjeTVzWlc1bmRHZzdJR2tyS3lrZ2UxeHlYRzRnSUNBZ0lDQWdJQ0FnSUNCMGFHbHpMbWRzYjJKaGJGOWpZV3hzWW1GamEzTmJhVjBvWlhabGJuUk9ZVzFsTENCa1lYUmhLVHRjY2x4dUlDQWdJQ0FnSUNCOVhISmNibHh5WEc0Z0lDQWdJQ0FnSUhaaGNpQmpZV3hzWW1GamEzTWdQU0IwYUdsekxtTmhiR3hpWVdOcmN5NW5aWFFvWlhabGJuUk9ZVzFsS1R0Y2NseHVJQ0FnSUNBZ0lDQnBaaUFvWTJGc2JHSmhZMnR6SUNZbUlHTmhiR3hpWVdOcmN5NXNaVzVuZEdnZ1BpQXdLU0I3WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJR1p2Y2lBb2JHVjBJR2tnUFNBd095QnBJRHdnWTJGc2JHSmhZMnR6TG14bGJtZDBhRHNnYVNzcktTQjdYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JqWVd4c1ltRmphM05iYVYwdVptNHVZMkZzYkNoallXeHNZbUZqYTNOYmFWMHVZMjl1ZEdWNGRDd2daR0YwWVNrN1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUgxY2NseHVJQ0FnSUNBZ0lDQjlYSEpjYmx4eVhHNGdJQ0FnSUNBZ0lISmxkSFZ5YmlCMGFHbHpPMXh5WEc0Z0lDQWdmVnh5WEc1OUlpd2lhVzF3YjNKMElIdFRiMk5yWlhSOUlHWnliMjBnSnk0dlkyOXVibVZqZEdsdmJpOXpiMk5yWlhRbk8xeHlYRzVwYlhCdmNuUWdlMFJwYzNCaGRHTm9aWEo5SUdaeWIyMGdKeTR2WlhabGJuUnpMMlJwYzNCaGRHTm9aWEluTzF4eVhHNXBiWEJ2Y25RZ2UwMWhibTVoWjJWeWZTQm1jbTl0SUZ3aUxpOWphR0Z1Ym1Wc2N5OXRZVzV1WVdkbGNsd2lPMXh5WEc1cGJYQnZjblFnWVhocGIzTWdabkp2YlNCY0ltRjRhVzl6WENJN1hISmNibHh5WEc1bGVIQnZjblFnWTJ4aGMzTWdVSFZ6YUdWeUlIdGNjbHh1SUNBZ0lHTnZibk4wY25WamRHOXlLR0Z3Y0Y5clpYa3NJRzl3ZEdsdmJuTXBJSHRjY2x4dUlDQWdJQ0FnSUNCMGFHbHpMbU5vWldOclFYQndTMlY1S0dGd2NGOXJaWGtwTzF4eVhHNWNjbHh1SUNBZ0lDQWdJQ0IwYUdsekxtdGxlU0E5SUdGd2NGOXJaWGs3WEhKY2JpQWdJQ0FnSUNBZ2RHaHBjeTV2Y0hScGIyNXpJRDBnYjNCMGFXOXVjeUI4ZkNCN2ZUdGNjbHh1SUNBZ0lDQWdJQ0IwYUdsekxtUnBjM0JoZEdOb1pYSWdQU0J1WlhjZ1JHbHpjR0YwWTJobGNpZ3BPMXh5WEc0Z0lDQWdJQ0FnSUhSb2FYTXVZMmhoYm01bGJITWdQU0J1WlhjZ1RXRnVibUZuWlhJb0tUdGNjbHh1WEhKY2JpQWdJQ0FnSUNBZ2RHaHBjeTVqYjI1dVpXTjBLQ2s3WEhKY2JpQWdJQ0I5WEhKY2JseHlYRzRnSUNBZ1kyOXVibVZqZENncElIdGNjbHh1SUNBZ0lDQWdJQ0IwYUdsekxuTnZZMnRsZENBOUlHNWxkeUJUYjJOclpYUW9kR2hwY3l3Z2RHaHBjeTV2Y0hScGIyNXpMbWh2YzNRcE8xeHlYRzRnSUNBZ2ZWeHlYRzVjY2x4dUlDQWdJSE4xWW5OamNtbGlaU2hqYUdGdWJtVnNYMjVoYldVcElIdGNjbHh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdkR2hwY3k1amFHRnVibVZzY3k1aFpHUW9ZMmhoYm01bGJGOXVZVzFsTENCMGFHbHpLVHRjY2x4dUlDQWdJSDFjY2x4dVhISmNiaUFnSUNCMWJuTjFZbk5qY21saVpTaGphR0Z1Ym1Wc1gyNWhiV1VwSUh0Y2NseHVJQ0FnSUNBZ0lDQjBhR2x6TG1Ob1lXNXVaV3h6TG5KbGJXOTJaU2hqYUdGdWJtVnNYMjVoYldVcE8xeHlYRzRnSUNBZ2ZWeHlYRzVjY2x4dUlDQWdJR2RsZEZOdlkydGxkRWxrS0NrZ2UxeHlYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQjBhR2x6TG5OdlkydGxkQzV6YjJOclpYUXVjMjlqYTJWMFgybGtPMXh5WEc0Z0lDQWdmVnh5WEc1Y2NseHVJQ0FnSUhObGJtUW9hbk52YmlrZ2UxeHlYRzRnSUNBZ0lDQWdJSFJvYVhNdWMyOWphMlYwTG5ObGJtUW9hbk52YmlrN1hISmNiaUFnSUNCOVhISmNibHh5WEc0Z0lDQWdZMmhsWTJ0QmNIQkxaWGtvYTJWNUtTQjdYSEpjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJSFJ5ZFdVN1hISmNiaUFnSUNCOVhISmNibHh5WEc0Z0lDQWdZWFYwYUNodVlXMWxMQ0JqWVd4c1ltRmpheWtnZTF4eVhHNGdJQ0FnSUNBZ0lHeGxkQ0J0WlhSb2IyUWdQU0IwYUdsekxtOXdkR2x2Ym5NdVlYVjBhQzV0WlhSb2IyUWdmSHdnSjNCdmMzUW5PMXh5WEc0Z0lDQWdJQ0FnSUd4bGRDQmtZWFJoSUQwZ2UzMDdYSEpjYmlBZ0lDQWdJQ0FnYkdWMElIQmhjbUZ0Y3lBOUlIdDlPMXh5WEc1Y2NseHVJQ0FnSUNBZ0lDQnBaaUFvYldWMGFHOWtJRDA5SUNkd2IzTjBKeWtnZTF4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0JrWVhSaElEMGdUMkpxWldOMExtRnpjMmxuYmloN1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQmphR0Z1Ym1Wc1gyNWhiV1U2SUc1aGJXVXNYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0J6YjJOclpYUmZhV1E2SUhSb2FYTXVaMlYwVTI5amEyVjBTV1FvS1Z4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0I5S1R0Y2NseHVJQ0FnSUNBZ0lDQjlJR1ZzYzJVZ2UxeHlYRzRnSUNBZ0lDQWdJQ0FnSUNCd1lYSmhiWE1nUFNCUFltcGxZM1F1WVhOemFXZHVLSHRjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdOb1lXNXVaV3hmYm1GdFpUb2dibUZ0WlN4Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lITnZZMnRsZEY5cFpEb2dkR2hwY3k1blpYUlRiMk5yWlhSSlpDZ3BYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lIMHBPMXh5WEc0Z0lDQWdJQ0FnSUgxY2NseHVYSEpjYmlBZ0lDQWdJQ0FnWVhocGIzTW9lMXh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQjFjbXc2SUhSb2FYTXViM0IwYVc5dWN5NWhkWFJvTG5WeWJDeGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ2JXVjBhRzlrT2lCdFpYUm9iMlFzWEhKY2JpQWdJQ0FnSUNBZ0lDQWdJR2hsWVdSbGNuTTZJSFJvYVhNdWIzQjBhVzl1Y3k1aGRYUm9MbWhsWVdSbGNuTWdmSHdnZTMwc1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUhCaGNtRnRjem9nY0dGeVlXMXpMRnh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQmtZWFJoT2lCa1lYUmhYSEpjYmlBZ0lDQWdJQ0FnZlNrdWRHaGxiaWdvWlNrZ1BUNGdlMXh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQmpZV3hzWW1GamF5aGxLVnh5WEc0Z0lDQWdJQ0FnSUgwcExtTmhkR05vS0NobEtTQTlQaUI3WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJR052Ym5OdmJHVXVaWEp5YjNJb0orZW5nZWFjaWVtaWtlbUJrK2FkZyttWmtPUzRqZWkyc3lFbktUdGNjbHh1SUNBZ0lDQWdJQ0I5S1R0Y2NseHVJQ0FnSUgxY2NseHVmVnh5WEc1Y2NseHVkMmx1Wkc5M0xsQjFjMmhsY2lBOUlGQjFjMmhsY2pzaVhTd2ljMjkxY21ObFVtOXZkQ0k2SWlKOSIsImltcG9ydCB7RGlzcGF0Y2hlcn0gZnJvbSBcIi4uL2V2ZW50cy9kaXNwYXRjaGVyXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgQ2hhbm5lbCBleHRlbmRzIERpc3BhdGNoZXIge1xyXG4gICAgY29uc3RydWN0b3IobmFtZSwgcHVzaGVyKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuXHJcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICAgICAgICB0aGlzLnB1c2hlciA9IHB1c2hlcjtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMucHVzaGVyLnNvY2tldC5zdGF0ZSA9PSAxKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3Vic2NyaWJlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHN1YnNjcmliZSgpIHtcclxuICAgICAgICB0aGlzLnB1c2hlci5zZW5kKHtcclxuICAgICAgICAgICAgZXZlbnQ6ICdzdWJzY3JpYmUnLFxyXG4gICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICBjaGFubmVsOiB0aGlzLm5hbWVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHtEaXNwYXRjaGVyfSBmcm9tIFwiLi4vZXZlbnRzL2Rpc3BhdGNoZXJcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBQcmVzZW5jZUNoYW5uZWwgZXh0ZW5kcyBEaXNwYXRjaGVyIHtcclxuICAgIGNvbnN0cnVjdG9yKG5hbWUsIHB1c2hlcikge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcblxyXG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICAgICAgdGhpcy5wdXNoZXIgPSBwdXNoZXI7XHJcbiAgICAgICAgdGhpcy5hdXRoID0gbnVsbDtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMucHVzaGVyLnNvY2tldC5zdGF0ZSA9PSAxKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3Vic2NyaWJlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHN1YnNjcmliZSgpIHtcclxuICAgICAgICB0aGlzLnB1c2hlci5hdXRoKHRoaXMubmFtZSwgKGUpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5hdXRoID0gZS5kYXRhLmF1dGg7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnB1c2hlci5zZW5kKHtcclxuICAgICAgICAgICAgICAgIGV2ZW50OiAnc3Vic2NyaWJlJyxcclxuICAgICAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgICAgICBjaGFubmVsOiB0aGlzLm5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgYXV0aDogdGhpcy5hdXRoLFxyXG4gICAgICAgICAgICAgICAgICAgIGNoYW5uZWxfZGF0YTogZS5kYXRhLmNoYW5uZWxfZGF0YVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufSIsImltcG9ydCB7RGlzcGF0Y2hlcn0gZnJvbSBcIi4uL2V2ZW50cy9kaXNwYXRjaGVyXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgUHJpdmF0ZUNoYW5uZWwgZXh0ZW5kcyBEaXNwYXRjaGVyIHtcclxuICAgIGNvbnN0cnVjdG9yKG5hbWUsIHB1c2hlcikge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcblxyXG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICAgICAgdGhpcy5wdXNoZXIgPSBwdXNoZXI7XHJcbiAgICAgICAgdGhpcy5hdXRoID0gbnVsbDtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMucHVzaGVyLnNvY2tldC5zdGF0ZSA9PSAxKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3Vic2NyaWJlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHN1YnNjcmliZSgpIHtcclxuICAgICAgICB0aGlzLnB1c2hlci5hdXRoKHRoaXMubmFtZSwgKGUpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5hdXRoID0gZS5kYXRhLmF1dGg7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnB1c2hlci5zZW5kKHtcclxuICAgICAgICAgICAgICAgIGV2ZW50OiAnc3Vic2NyaWJlJyxcclxuICAgICAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgICAgICBjaGFubmVsOiB0aGlzLm5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgYXV0aDogdGhpcy5hdXRoXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59IiwiZXhwb3J0IGNsYXNzIENhbGxiYWNrUmVnaXN0cnkge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5fY2FsbGJhY2tzID0ge307XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0KG5hbWUpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fY2FsbGJhY2tzW3ByZWZpeChuYW1lKV07XHJcbiAgICB9XHJcblxyXG4gICAgYWRkKG5hbWUsIGNhbGxiYWNrLCBjb250ZXh0KSB7XHJcbiAgICAgICAgbGV0IHByZWZpeGVkRXZlbnROYW1lID0gcHJlZml4KG5hbWUpO1xyXG4gICAgICAgIHRoaXMuX2NhbGxiYWNrc1twcmVmaXhlZEV2ZW50TmFtZV0gPSB0aGlzLl9jYWxsYmFja3NbcHJlZml4ZWRFdmVudE5hbWVdIHx8IFtdO1xyXG4gICAgICAgIHRoaXMuX2NhbGxiYWNrc1twcmVmaXhlZEV2ZW50TmFtZV0ucHVzaCh7XHJcbiAgICAgICAgICAgIGZuOiBjYWxsYmFjayxcclxuICAgICAgICAgICAgY29udGV4dDogY29udGV4dFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbW92ZShuYW1lLCBjYWxsYmFjaywgY29udGV4dCkge1xyXG4gICAgICAgIGlmICghbmFtZSAmJiAhY2FsbGJhY2sgJiYgIWNvbnRleHQpIHtcclxuICAgICAgICAgICAgdGhpcy5fY2FsbGJhY2tzID0ge307XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciBuYW1lcyA9IG5hbWUgPyBbcHJlZml4KG5hbWUpXSA6IE9iamVjdC5rZXlzKHRoaXMuX2NhbGxiYWNrcyk7XHJcblxyXG4gICAgICAgIGlmIChjYWxsYmFjayB8fCBjb250ZXh0KSB7XHJcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlQ2FsbGJhY2sobmFtZXMsIGNhbGxiYWNrLCBjb250ZXh0KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnJlbW92ZUFsbENhbGxiYWNrcyhuYW1lcyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJlbW92ZUNhbGxiYWNrKG5hbWVzLCBjYWxsYmFjaywgY29udGV4dCkge1xyXG4gICAgICAgIGZvciAobGV0IG5hbWUgaW4gbmFtZXMpIHtcclxuICAgICAgICAgICAgZm9yIChsZXQga2V5IGluIHRoaXMuX2NhbGxiYWNrc1tuYW1lXSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX2NhbGxiYWNrc1tuYW1lXVtrZXldLmZuID09IGNhbGxiYWNrIHx8IHRoaXMuX2NhbGxiYWNrc1tuYW1lXVtrZXldLmNvbnRleHQgPT0gY29udGV4dCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZSB0aGlzLl9jYWxsYmFja3NbbmFtZV1ba2V5XTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuX2NhbGxiYWNrc1tuYW1lXS5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgICAgIGRlbGV0ZSB0aGlzLl9jYWxsYmFja3NbbmFtZV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmVtb3ZlQWxsQ2FsbGJhY2tzKG5hbWVzKSB7XHJcbiAgICAgICAgZm9yIChsZXQgbmFtZSBpbiBuYW1lcykge1xyXG4gICAgICAgICAgICBkZWxldGUgdGhpcy5fY2FsbGJhY2tzW25hbWVdO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gcHJlZml4KG5hbWUpIHtcclxuICAgIHJldHVybiBcIl9cIiArIG5hbWU7XHJcbn0iLCJpbXBvcnQge0NhbGxiYWNrUmVnaXN0cnl9IGZyb20gJy4vY2FsbGJhY2tfcmVnaXN0cnknO1xyXG5cclxuZXhwb3J0IGNsYXNzIERpc3BhdGNoZXIge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5jYWxsYmFja3MgPSBuZXcgQ2FsbGJhY2tSZWdpc3RyeSgpO1xyXG4gICAgICAgIHRoaXMuZ2xvYmFsX2NhbGxiYWNrcyA9IFtdO1xyXG4gICAgfVxyXG5cclxuICAgIGJpbmQoZXZlbnROYW1lLCBjYWxsYmFjaywgY29udGV4dCkge1xyXG4gICAgICAgIHRoaXMuY2FsbGJhY2tzLmFkZChldmVudE5hbWUsIGNhbGxiYWNrLCBjb250ZXh0KTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBiaW5kX2dsb2JhbChjYWxsYmFjaykge1xyXG4gICAgICAgIHRoaXMuZ2xvYmFsX2NhbGxiYWNrcy5wdXNoKGNhbGxiYWNrKTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICB1bmJpbmQoZXZlbnROYW1lLCBjYWxsYmFjaywgY29udGV4dCkge1xyXG4gICAgICAgIHRoaXMuY2FsbGJhY2tzLnJlbW92ZShldmVudE5hbWUsIGNhbGxiYWNrLCBjb250ZXh0KTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICB1bmJpbmRfZ2xvYmFsKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgaWYgKCFjYWxsYmFjaykge1xyXG4gICAgICAgICAgICB0aGlzLmdsb2JhbF9jYWxsYmFja3MgPSBbXTtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmb3IgKGxldCBpIGluIHRoaXMuZ2xvYmFsX2NhbGxiYWNrcykge1xyXG4gICAgICAgICAgICBpZiAoY2FsbGJhY2sgPT0gdGhpcy5nbG9iYWxfY2FsbGJhY2tzW2ldKSB7XHJcbiAgICAgICAgICAgICAgICBkZWxldGUgdGhpcy5nbG9iYWxfY2FsbGJhY2tzW2ldO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHVuYmluZF9hbGwoKSB7XHJcbiAgICAgICAgdGhpcy51bmJpbmQoKTtcclxuICAgICAgICB0aGlzLnVuYmluZF9nbG9iYWwoKTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBlbWl0KGV2ZW50TmFtZSwgZGF0YSkge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5nbG9iYWxfY2FsbGJhY2tzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZ2xvYmFsX2NhbGxiYWNrc1tpXShldmVudE5hbWUsIGRhdGEpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIGNhbGxiYWNrcyA9IHRoaXMuY2FsbGJhY2tzLmdldChldmVudE5hbWUpO1xyXG4gICAgICAgIGlmIChjYWxsYmFja3MgJiYgY2FsbGJhY2tzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjYWxsYmFja3MubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGNhbGxiYWNrc1tpXS5mbi5jYWxsKGNhbGxiYWNrc1tpXS5jb250ZXh0LCBkYXRhKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQge0VjaG99IGZyb20gJy4vZWNobydcclxuXHJcbndpbmRvdy5FY2hvID0gbmV3IEVjaG8oJ2E4MjM5M2Q4ODZhMGU2ZGRmYWU1Jywge1xyXG4gICAgaG9zdDogJ3dzOi8vMTkyLjE2OC4xMC4xMDo4MDgxJyxcclxuICAgIGF1dGg6IHtcclxuICAgICAgICBtZXRob2Q6ICdwb3N0JyxcclxuICAgICAgICB1cmw6ICdodHRwOi8vdGVzdHMudGVzdC9hcGkvcHVzaGVyL2F1dGgnLFxyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICAgJ0F1dGhvcml6YXRpb24nOiAnQmVhcmVyIGV5SjBlWEFpT2lKS1YxUWlMQ0poYkdjaU9pSklVekkxTmlKOS5leUpwYzNNaU9pSm9kSFJ3T2x3dlhDOTBaWE4wY3k1MFpYTjBJaXdpYVdGMElqb3hOVE01TWpVeE5UY3pMQ0psZUhBaU9qRTFNemt5TlRVeE56TXNJbTVpWmlJNk1UVXpPVEkxTVRVM015d2lhblJwSWpvaU1sSlZSVnBpV0dSaU9VRTVSME5xYlNJc0luTjFZaUk2TVN3aWNISjJJam9pT0RkbE1HRm1NV1ZtT1daa01UVTRNVEptWkdWak9UY3hOVE5oTVRSbE1HSXdORGMxTkRaaFlTSjkuY3ZnTS1Qb3VFU2Vka1czZUVxSzUxZE1IaUt0N1R1ekVpS1FSdjRYNUhfUScsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBwYXJhbXM6IHt9XHJcbiAgICB9LFxyXG59KVxyXG5cclxuLyp3aW5kb3cuRWNoby5jaGFubmVsKCdvcmRlcicpLmxpc3RlbignbmV3JywgKGUpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKGUpXHJcbn0pLmxpc3RlbignbWFrZScsIChlKSA9PiB7XHJcbn0pOyovXHJcblxyXG5cclxuXHJcbi8qXHJcbndpbmRvdy5FY2hvLnByaXZhdGUoJ3VzZXIuMicpLmxpc3RlbignYScsIChlKSA9PiB7XHJcbiAgICBhbGVydCgnYWFhJyk7XHJcbn0pLmxpc3RlbignYicsIChlKSA9PiB7XHJcbiAgICBhbGVydCgnYmJiJyk7XHJcbn0pO1xyXG4qL1xyXG5cclxud2luZG93LkVjaG8uam9pbihgY2hhdC4xYClcclxuICAgIC5oZXJlKCh1c2VycykgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCflhajpg6jkurrlkZgnKTtcclxuICAgICAgICBjb25zb2xlLmxvZyh1c2VycylcclxuICAgIH0pXHJcbiAgICAuam9pbmluZygodXNlcikgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCfmlrDkurrliqDlhaUnKTtcclxuICAgICAgICBjb25zb2xlLmxvZyh1c2VyKTtcclxuICAgIH0pXHJcbiAgICAubGVhdmluZygodXNlcikgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCfmnInkurrpgIDlh7onKTtcclxuICAgICAgICBjb25zb2xlLmxvZyh1c2VyKTtcclxuICAgIH0pLmxpc3RlbignTmV3TWVzc2FnZScsIChlKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhlKTtcclxufSk7XHJcbiIsImV4cG9ydCBjbGFzcyBDaGFubmVsIHtcclxuICAgIGNvbnN0cnVjdG9yKHB1c2hlciwgbmFtZSkge1xyXG4gICAgICAgIHRoaXMucHVzaGVyID0gcHVzaGVyO1xyXG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcblxyXG4gICAgICAgIHRoaXMuc3Vic2NyaWJlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgc3Vic2NyaWJlKCkge1xyXG4gICAgICAgIHRoaXMuc3Vic2NyaXB0aW9uID0gdGhpcy5wdXNoZXIuc3Vic2NyaWJlKHRoaXMubmFtZSk7XHJcbiAgICB9XHJcblxyXG4gICAgdW5zdWJzY3JpYmUoKSB7XHJcbiAgICAgICAgdGhpcy5wdXNoZXIudW5zdWJzY3JpYmUodGhpcy5uYW1lKTtcclxuICAgIH1cclxuXHJcbiAgICBsaXN0ZW4oZXZlbnQsIGNhbGxiYWNrKSB7XHJcbiAgICAgICAgdGhpcy5vbihldmVudCwgY2FsbGJhY2spO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBzdG9wTGlzdGVuaW5nKGV2ZW50KSB7XHJcbiAgICAgICAgdGhpcy5zdWJzY3JpcHRpb24udW5iaW5kKGV2ZW50KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgb24oZXZlbnQsIGNhbGxiYWNrKSB7XHJcbiAgICAgICAgdGhpcy5zdWJzY3JpcHRpb24uYmluZChldmVudCwgY2FsbGJhY2spO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICB3aGlzcGVyKGV2ZW50LCBkYXRhKSB7XHJcbiAgICAgICAgdGhpcy5wdXNoZXIuc2VuZCh7XHJcbiAgICAgICAgICAgIGNoYW5uZWw6IHRoaXMubmFtZSxcclxuICAgICAgICAgICAgZGF0YTogZGF0YSxcclxuICAgICAgICAgICAgZXZlbnQ6ICdjbGllbnQtJyArIGV2ZW50XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgbGlzdGVuRm9yV2hpc3BlcihldmVudCwgY2FsbGJhY2spIHtcclxuICAgICAgICB0aGlzLm9uKCdjbGllbnQtJyArIGV2ZW50LCBjYWxsYmFjayk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQge0NoYW5uZWx9IGZyb20gXCIuL2NoYW5uZWxcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBQdXNoZXJDaGFubmVsIGV4dGVuZHMgQ2hhbm5lbCB7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAcGFyYW0gcHVzaGVyXHJcbiAgICAgKiBAcGFyYW0gY2hhbm5lbFxyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3RvcihwdXNoZXIsIG5hbWUpIHtcclxuICAgICAgICBzdXBlcihwdXNoZXIsIG5hbWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbn0iLCJpbXBvcnQge0NoYW5uZWx9IGZyb20gXCIuL2NoYW5uZWxcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBQdXNoZXJQcmVzZW5jZUNoYW5uZWwgZXh0ZW5kcyBDaGFubmVsIHtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEBwYXJhbSBwdXNoZXJcclxuICAgICAqIEBwYXJhbSBjaGFubmVsXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKHB1c2hlciwgbmFtZSkge1xyXG4gICAgICAgIHN1cGVyKHB1c2hlciwgbmFtZSk7XHJcbiAgICB9XHJcblxyXG4gICAgaGVyZShjYWxsYmFjaykge1xyXG4gICAgICAgIGxldCBiYWNrID0gKGUpID0+IHtcclxuICAgICAgICAgICAgY2FsbGJhY2soZS5wcmVzZW5jZSlcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5vbignc3Vic2NyaXB0aW9uX3N1Y2NlZWRlZCcsIGJhY2spO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIGpvaW5pbmcoY2FsbGJhY2spIHtcclxuICAgICAgICB0aGlzLm9uKCdtZW1iZXJfYWRkZWQnLCBjYWxsYmFjayk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgbGVhdmluZyhjYWxsYmFjaykge1xyXG4gICAgICAgIHRoaXMub24oJ21lbWJlcl9yZW1vdmVkJywgY2FsbGJhY2spO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHtDaGFubmVsfSBmcm9tIFwiLi9jaGFubmVsXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgUHVzaGVyUHJpdmF0ZUNoYW5uZWwgZXh0ZW5kcyBDaGFubmVsIHtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEBwYXJhbSBwdXNoZXJcclxuICAgICAqIEBwYXJhbSBjaGFubmVsXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKHB1c2hlciwgbmFtZSkge1xyXG4gICAgICAgIHN1cGVyKHB1c2hlciwgbmFtZSk7XHJcbiAgICB9XHJcblxyXG59IiwiaW1wb3J0ICdsdWZmeS1wdXNoZXInO1xyXG5pbXBvcnQge1B1c2hlckNoYW5uZWx9IGZyb20gXCIuLi9jaGFubmVsL3B1c2hlci1jaGFubmVsXCI7XHJcbmltcG9ydCB7UHVzaGVyUHJpdmF0ZUNoYW5uZWx9IGZyb20gXCIuLi9jaGFubmVsL3B1c2hlci1wcml2YXRlLWNoYW5uZWxcIjtcclxuaW1wb3J0IHtQdXNoZXJQcmVzZW5jZUNoYW5uZWx9IGZyb20gXCIuLi9jaGFubmVsL3B1c2hlci1wcmVzZW5jZS1jaGFubmVsXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgUHVzaGVyQ29ubmVjdG9yIHtcclxuICAgIGNvbnN0cnVjdG9yKGFwcF9rZXksIG9wdGlvbnMpIHtcclxuICAgICAgICB0aGlzLnB1c2hlciA9IG5ldyBQdXNoZXIoYXBwX2tleSwgb3B0aW9ucyk7XHJcbiAgICAgICAgdGhpcy5jaGFubmVscyA9IHt9O1xyXG4gICAgfVxyXG5cclxuICAgIGNoYW5uZWwoY2hhbm5lbCkge1xyXG4gICAgICAgIGlmICh0aGlzLmNoYW5uZWxzW2NoYW5uZWxdID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5jaGFubmVsc1tjaGFubmVsXSA9IG5ldyBQdXNoZXJDaGFubmVsKHRoaXMucHVzaGVyLCBjaGFubmVsKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLmNoYW5uZWxzW2NoYW5uZWxdO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGVDaGFubmVsKGNoYW5uZWwpIHtcclxuICAgICAgICBpZiAodGhpcy5jaGFubmVsc1sncHJpdmF0ZS0nICsgY2hhbm5lbF0gPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB0aGlzLmNoYW5uZWxzWydwcml2YXRlLScgKyBjaGFubmVsXSA9IG5ldyBQdXNoZXJQcml2YXRlQ2hhbm5lbCh0aGlzLnB1c2hlciwgJ3ByaXZhdGUtJyArIGNoYW5uZWwpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy5jaGFubmVsc1sncHJpdmF0ZS0nICsgY2hhbm5lbF07XHJcbiAgICB9XHJcblxyXG4gICAgcHJlc2VuY2VDaGFubmVsKGNoYW5uZWwpIHtcclxuICAgICAgICBpZiAodGhpcy5jaGFubmVsc1sncHJlc2VuY2UtJyArIGNoYW5uZWxdID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5jaGFubmVsc1sncHJlc2VuY2UtJyArIGNoYW5uZWxdID0gbmV3IFB1c2hlclByZXNlbmNlQ2hhbm5lbCh0aGlzLnB1c2hlciwgJ3ByZXNlbmNlLScgKyBjaGFubmVsKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY2hhbm5lbHNbJ3ByZXNlbmNlLScgKyBjaGFubmVsXTtcclxuICAgIH1cclxufSIsImltcG9ydCB7UHVzaGVyQ29ubmVjdG9yfSBmcm9tIFwiLi9jb25uZWN0b3IvcHVzaGVyX2Nvbm5lY3RvclwiO1xyXG5pbXBvcnQge1ByaXZhdGVDaGFubmVsfSBmcm9tIFwibHVmZnktcHVzaGVyL3NyYy9jaGFubmVscy9wcml2YXRlX2NoYW5uZWxcIjtcclxuaW1wb3J0IHtQcmVzZW5jZUNoYW5uZWx9IGZyb20gXCJsdWZmeS1wdXNoZXIvc3JjL2NoYW5uZWxzL3ByZXNlbmNlX2NoYW5uZWxcIjtcclxuaW1wb3J0IHtDaGFubmVsfSBmcm9tIFwibHVmZnktcHVzaGVyL3NyYy9jaGFubmVscy9jaGFubmVsXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgRWNobyB7XHJcbiAgICBjb25zdHJ1Y3RvcihhcHBrZXksIG9wdGlvbnMpIHtcclxuICAgICAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xyXG4gICAgICAgIHRoaXMuY29ubmVjdG9yID0gbmV3IFB1c2hlckNvbm5lY3RvcihhcHBrZXksIHRoaXMub3B0aW9ucyk7XHJcbiAgICB9XHJcblxyXG4gICAgY2hhbm5lbChjaGFubmVsKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY29ubmVjdG9yLmNoYW5uZWwoY2hhbm5lbCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZShjaGFubmVsKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY29ubmVjdG9yLnByaXZhdGVDaGFubmVsKGNoYW5uZWwpO1xyXG4gICAgfVxyXG5cclxuICAgIGpvaW4oY2hhbm5lbCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNvbm5lY3Rvci5wcmVzZW5jZUNoYW5uZWwoY2hhbm5lbCk7XHJcbiAgICB9XHJcblxyXG4gICAgc3Vic2NyaWJlKG5hbWUpIHtcclxuICAgICAgICBpZiAobmFtZS5pbmRleE9mKCdwcml2YXRlLScpID09PSAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnByaXZhdGUobmFtZSk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChuYW1lLmluZGV4T2YoJ3ByZXNlbmNlLScpID09PSAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmpvaW4obmFtZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY2hhbm5lbChuYW1lKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDpgIDlh7rpopHpgZMs5pqC55WZXHJcbiAgICAgKiBAcGFyYW0gY2hhbm5lbFxyXG4gICAgICovXHJcbiAgICBsZWF2ZShjaGFubmVsKSB7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbn1cclxuXHJcbndpbmRvdy5FY2hvID0gRWNobztcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==
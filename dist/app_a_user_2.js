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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2x1ZmZ5LXB1c2hlci9kaXN0L3B1c2hlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbHVmZnktcHVzaGVyL3NyYy9jaGFubmVscy9jaGFubmVsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sdWZmeS1wdXNoZXIvc3JjL2NoYW5uZWxzL3ByZXNlbmNlX2NoYW5uZWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2x1ZmZ5LXB1c2hlci9zcmMvY2hhbm5lbHMvcHJpdmF0ZV9jaGFubmVsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sdWZmeS1wdXNoZXIvc3JjL2V2ZW50cy9jYWxsYmFja19yZWdpc3RyeS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbHVmZnktcHVzaGVyL3NyYy9ldmVudHMvZGlzcGF0Y2hlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwX2FfdXNlcl8yLmpzIiwid2VicGFjazovLy8uL3NyYy9jaGFubmVsL2NoYW5uZWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NoYW5uZWwvcHVzaGVyLWNoYW5uZWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NoYW5uZWwvcHVzaGVyLXByZXNlbmNlLWNoYW5uZWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NoYW5uZWwvcHVzaGVyLXByaXZhdGUtY2hhbm5lbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29ubmVjdG9yL3B1c2hlcl9jb25uZWN0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VjaG8uanMiXSwibmFtZXMiOlsid2luZG93IiwiRWNobyIsImhvc3QiLCJhdXRoIiwibWV0aG9kIiwidXJsIiwiaGVhZGVycyIsInBhcmFtcyIsImpvaW4iLCJoZXJlIiwidXNlcnMiLCJjb25zb2xlIiwibG9nIiwiam9pbmluZyIsInVzZXIiLCJsZWF2aW5nIiwibGlzdGVuIiwiZSIsIkNoYW5uZWwiLCJwdXNoZXIiLCJuYW1lIiwic3Vic2NyaWJlIiwic3Vic2NyaXB0aW9uIiwidW5zdWJzY3JpYmUiLCJldmVudCIsImNhbGxiYWNrIiwib24iLCJ1bmJpbmQiLCJiaW5kIiwiZGF0YSIsInNlbmQiLCJjaGFubmVsIiwiUHVzaGVyQ2hhbm5lbCIsIlB1c2hlclByZXNlbmNlQ2hhbm5lbCIsImJhY2siLCJwcmVzZW5jZSIsIlB1c2hlclByaXZhdGVDaGFubmVsIiwiUHVzaGVyQ29ubmVjdG9yIiwiYXBwX2tleSIsIm9wdGlvbnMiLCJQdXNoZXIiLCJjaGFubmVscyIsInVuZGVmaW5lZCIsImFwcGtleSIsImNvbm5lY3RvciIsInByaXZhdGVDaGFubmVsIiwicHJlc2VuY2VDaGFubmVsIiwiaW5kZXhPZiIsInByaXZhdGUiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ2xGQSw2QkFBNkI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrREFBa0QsZ0NBQWdDO0FBQ2xGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdFQUFnRSxrQkFBa0I7QUFDbEY7QUFDQSx5REFBeUQsY0FBYztBQUN2RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUFpRCxpQ0FBaUM7QUFDbEYsd0hBQXdILG1CQUFtQixFQUFFO0FBQzdJO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQywwQkFBMEIsRUFBRTtBQUMvRCx5Q0FBeUMsZUFBZTtBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOERBQThELCtEQUErRDtBQUM3SDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw0Q0FBNEM7QUFDNUM7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDs7O0FBR0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixZQUFZLE1BQU07QUFDbEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7O0FBR0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7O0FBR0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxTQUFTO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQTs7O0FBR0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQSxrQ0FBa0MsY0FBYztBQUNoRDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnREFBZ0Q7QUFDaEQ7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0EsZ0RBQWdEO0FBQ2hEO0FBQ0E7QUFDQTtB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QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FB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LCJmaWxlIjoiYXBwX2FfdXNlcl8yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvYXBwX2FfdXNlcl8yLmpzXCIpO1xuIiwiLyoqKioqKi8gKGZ1bmN0aW9uKG1vZHVsZXMpIHsgLy8gd2VicGFja0Jvb3RzdHJhcFxuLyoqKioqKi8gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4vKioqKioqLyBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuLyoqKioqKi8gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuLyoqKioqKi8gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4vKioqKioqLyBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbi8qKioqKiovIFx0XHR9XG4vKioqKioqLyBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbi8qKioqKiovIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4vKioqKioqLyBcdFx0XHRpOiBtb2R1bGVJZCxcbi8qKioqKiovIFx0XHRcdGw6IGZhbHNlLFxuLyoqKioqKi8gXHRcdFx0ZXhwb3J0czoge31cbi8qKioqKiovIFx0XHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbi8qKioqKiovIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuLyoqKioqKi8gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbi8qKioqKiovIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4vKioqKioqLyBcdH1cbi8qKioqKiovXG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbi8qKioqKiovIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4vKioqKioqLyBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbi8qKioqKiovIFx0XHR9XG4vKioqKioqLyBcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbi8qKioqKiovIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbi8qKioqKiovIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuLyoqKioqKi8gXHRcdH1cbi8qKioqKiovIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuLyoqKioqKi8gXHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4vKioqKioqLyBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuLyoqKioqKi8gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbi8qKioqKiovIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4vKioqKioqLyBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbi8qKioqKiovIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbi8qKioqKiovIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuLyoqKioqKi8gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4vKioqKioqLyBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbi8qKioqKiovIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuLyoqKioqKi8gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbi8qKioqKiovIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4vKioqKioqLyBcdFx0cmV0dXJuIG5zO1xuLyoqKioqKi8gXHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4vKioqKioqLyBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4vKioqKioqLyBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuLyoqKioqKi8gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbi8qKioqKiovIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4vKioqKioqLyBcdFx0cmV0dXJuIGdldHRlcjtcbi8qKioqKiovIFx0fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuLyoqKioqKi9cbi8qKioqKiovXG4vKioqKioqLyBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLyoqKioqKi8gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL3B1c2hlci5qc1wiKTtcbi8qKioqKiovIH0pXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKi8gKHtcblxuLyoqKi8gXCIuL25vZGVfbW9kdWxlcy9heGlvcy9pbmRleC5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL25vZGVfbW9kdWxlcy9heGlvcy9pbmRleC5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5tb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vbGliL2F4aW9zICovIFwiLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2F4aW9zLmpzXCIpO1xuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvYWRhcHRlcnMveGhyLmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2FkYXB0ZXJzL3hoci5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5cbnZhciB1dGlscyA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vLi4vdXRpbHMgKi8gXCIuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvdXRpbHMuanNcIik7XG52YXIgc2V0dGxlID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi8uLi9jb3JlL3NldHRsZSAqLyBcIi4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL3NldHRsZS5qc1wiKTtcbnZhciBidWlsZFVSTCA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vLi4vaGVscGVycy9idWlsZFVSTCAqLyBcIi4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2J1aWxkVVJMLmpzXCIpO1xudmFyIHBhcnNlSGVhZGVycyA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vLi4vaGVscGVycy9wYXJzZUhlYWRlcnMgKi8gXCIuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9wYXJzZUhlYWRlcnMuanNcIik7XG52YXIgaXNVUkxTYW1lT3JpZ2luID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi8uLi9oZWxwZXJzL2lzVVJMU2FtZU9yaWdpbiAqLyBcIi4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2lzVVJMU2FtZU9yaWdpbi5qc1wiKTtcbnZhciBjcmVhdGVFcnJvciA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4uL2NvcmUvY3JlYXRlRXJyb3IgKi8gXCIuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9jcmVhdGVFcnJvci5qc1wiKTtcbnZhciBidG9hID0gKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5idG9hICYmIHdpbmRvdy5idG9hLmJpbmQod2luZG93KSkgfHwgX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi8uLi9oZWxwZXJzL2J0b2EgKi8gXCIuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9idG9hLmpzXCIpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHhockFkYXB0ZXIoY29uZmlnKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiBkaXNwYXRjaFhoclJlcXVlc3QocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgdmFyIHJlcXVlc3REYXRhID0gY29uZmlnLmRhdGE7XG4gICAgdmFyIHJlcXVlc3RIZWFkZXJzID0gY29uZmlnLmhlYWRlcnM7XG5cbiAgICBpZiAodXRpbHMuaXNGb3JtRGF0YShyZXF1ZXN0RGF0YSkpIHtcbiAgICAgIGRlbGV0ZSByZXF1ZXN0SGVhZGVyc1snQ29udGVudC1UeXBlJ107IC8vIExldCB0aGUgYnJvd3NlciBzZXQgaXRcbiAgICB9XG5cbiAgICB2YXIgcmVxdWVzdCA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgIHZhciBsb2FkRXZlbnQgPSAnb25yZWFkeXN0YXRlY2hhbmdlJztcbiAgICB2YXIgeERvbWFpbiA9IGZhbHNlO1xuXG4gICAgLy8gRm9yIElFIDgvOSBDT1JTIHN1cHBvcnRcbiAgICAvLyBPbmx5IHN1cHBvcnRzIFBPU1QgYW5kIEdFVCBjYWxscyBhbmQgZG9lc24ndCByZXR1cm5zIHRoZSByZXNwb25zZSBoZWFkZXJzLlxuICAgIC8vIERPTidUIGRvIHRoaXMgZm9yIHRlc3RpbmcgYi9jIFhNTEh0dHBSZXF1ZXN0IGlzIG1vY2tlZCwgbm90IFhEb21haW5SZXF1ZXN0LlxuICAgIGlmIChcImRldmVsb3BtZW50XCIgIT09ICd0ZXN0JyAmJlxuICAgICAgICB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJlxuICAgICAgICB3aW5kb3cuWERvbWFpblJlcXVlc3QgJiYgISgnd2l0aENyZWRlbnRpYWxzJyBpbiByZXF1ZXN0KSAmJlxuICAgICAgICAhaXNVUkxTYW1lT3JpZ2luKGNvbmZpZy51cmwpKSB7XG4gICAgICByZXF1ZXN0ID0gbmV3IHdpbmRvdy5YRG9tYWluUmVxdWVzdCgpO1xuICAgICAgbG9hZEV2ZW50ID0gJ29ubG9hZCc7XG4gICAgICB4RG9tYWluID0gdHJ1ZTtcbiAgICAgIHJlcXVlc3Qub25wcm9ncmVzcyA9IGZ1bmN0aW9uIGhhbmRsZVByb2dyZXNzKCkge307XG4gICAgICByZXF1ZXN0Lm9udGltZW91dCA9IGZ1bmN0aW9uIGhhbmRsZVRpbWVvdXQoKSB7fTtcbiAgICB9XG5cbiAgICAvLyBIVFRQIGJhc2ljIGF1dGhlbnRpY2F0aW9uXG4gICAgaWYgKGNvbmZpZy5hdXRoKSB7XG4gICAgICB2YXIgdXNlcm5hbWUgPSBjb25maWcuYXV0aC51c2VybmFtZSB8fCAnJztcbiAgICAgIHZhciBwYXNzd29yZCA9IGNvbmZpZy5hdXRoLnBhc3N3b3JkIHx8ICcnO1xuICAgICAgcmVxdWVzdEhlYWRlcnMuQXV0aG9yaXphdGlvbiA9ICdCYXNpYyAnICsgYnRvYSh1c2VybmFtZSArICc6JyArIHBhc3N3b3JkKTtcbiAgICB9XG5cbiAgICByZXF1ZXN0Lm9wZW4oY29uZmlnLm1ldGhvZC50b1VwcGVyQ2FzZSgpLCBidWlsZFVSTChjb25maWcudXJsLCBjb25maWcucGFyYW1zLCBjb25maWcucGFyYW1zU2VyaWFsaXplciksIHRydWUpO1xuXG4gICAgLy8gU2V0IHRoZSByZXF1ZXN0IHRpbWVvdXQgaW4gTVNcbiAgICByZXF1ZXN0LnRpbWVvdXQgPSBjb25maWcudGltZW91dDtcblxuICAgIC8vIExpc3RlbiBmb3IgcmVhZHkgc3RhdGVcbiAgICByZXF1ZXN0W2xvYWRFdmVudF0gPSBmdW5jdGlvbiBoYW5kbGVMb2FkKCkge1xuICAgICAgaWYgKCFyZXF1ZXN0IHx8IChyZXF1ZXN0LnJlYWR5U3RhdGUgIT09IDQgJiYgIXhEb21haW4pKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgLy8gVGhlIHJlcXVlc3QgZXJyb3JlZCBvdXQgYW5kIHdlIGRpZG4ndCBnZXQgYSByZXNwb25zZSwgdGhpcyB3aWxsIGJlXG4gICAgICAvLyBoYW5kbGVkIGJ5IG9uZXJyb3IgaW5zdGVhZFxuICAgICAgLy8gV2l0aCBvbmUgZXhjZXB0aW9uOiByZXF1ZXN0IHRoYXQgdXNpbmcgZmlsZTogcHJvdG9jb2wsIG1vc3QgYnJvd3NlcnNcbiAgICAgIC8vIHdpbGwgcmV0dXJuIHN0YXR1cyBhcyAwIGV2ZW4gdGhvdWdoIGl0J3MgYSBzdWNjZXNzZnVsIHJlcXVlc3RcbiAgICAgIGlmIChyZXF1ZXN0LnN0YXR1cyA9PT0gMCAmJiAhKHJlcXVlc3QucmVzcG9uc2VVUkwgJiYgcmVxdWVzdC5yZXNwb25zZVVSTC5pbmRleE9mKCdmaWxlOicpID09PSAwKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8vIFByZXBhcmUgdGhlIHJlc3BvbnNlXG4gICAgICB2YXIgcmVzcG9uc2VIZWFkZXJzID0gJ2dldEFsbFJlc3BvbnNlSGVhZGVycycgaW4gcmVxdWVzdCA/IHBhcnNlSGVhZGVycyhyZXF1ZXN0LmdldEFsbFJlc3BvbnNlSGVhZGVycygpKSA6IG51bGw7XG4gICAgICB2YXIgcmVzcG9uc2VEYXRhID0gIWNvbmZpZy5yZXNwb25zZVR5cGUgfHwgY29uZmlnLnJlc3BvbnNlVHlwZSA9PT0gJ3RleHQnID8gcmVxdWVzdC5yZXNwb25zZVRleHQgOiByZXF1ZXN0LnJlc3BvbnNlO1xuICAgICAgdmFyIHJlc3BvbnNlID0ge1xuICAgICAgICBkYXRhOiByZXNwb25zZURhdGEsXG4gICAgICAgIC8vIElFIHNlbmRzIDEyMjMgaW5zdGVhZCBvZiAyMDQgKGh0dHBzOi8vZ2l0aHViLmNvbS9heGlvcy9heGlvcy9pc3N1ZXMvMjAxKVxuICAgICAgICBzdGF0dXM6IHJlcXVlc3Quc3RhdHVzID09PSAxMjIzID8gMjA0IDogcmVxdWVzdC5zdGF0dXMsXG4gICAgICAgIHN0YXR1c1RleHQ6IHJlcXVlc3Quc3RhdHVzID09PSAxMjIzID8gJ05vIENvbnRlbnQnIDogcmVxdWVzdC5zdGF0dXNUZXh0LFxuICAgICAgICBoZWFkZXJzOiByZXNwb25zZUhlYWRlcnMsXG4gICAgICAgIGNvbmZpZzogY29uZmlnLFxuICAgICAgICByZXF1ZXN0OiByZXF1ZXN0XG4gICAgICB9O1xuXG4gICAgICBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCByZXNwb25zZSk7XG5cbiAgICAgIC8vIENsZWFuIHVwIHJlcXVlc3RcbiAgICAgIHJlcXVlc3QgPSBudWxsO1xuICAgIH07XG5cbiAgICAvLyBIYW5kbGUgbG93IGxldmVsIG5ldHdvcmsgZXJyb3JzXG4gICAgcmVxdWVzdC5vbmVycm9yID0gZnVuY3Rpb24gaGFuZGxlRXJyb3IoKSB7XG4gICAgICAvLyBSZWFsIGVycm9ycyBhcmUgaGlkZGVuIGZyb20gdXMgYnkgdGhlIGJyb3dzZXJcbiAgICAgIC8vIG9uZXJyb3Igc2hvdWxkIG9ubHkgZmlyZSBpZiBpdCdzIGEgbmV0d29yayBlcnJvclxuICAgICAgcmVqZWN0KGNyZWF0ZUVycm9yKCdOZXR3b3JrIEVycm9yJywgY29uZmlnLCBudWxsLCByZXF1ZXN0KSk7XG5cbiAgICAgIC8vIENsZWFuIHVwIHJlcXVlc3RcbiAgICAgIHJlcXVlc3QgPSBudWxsO1xuICAgIH07XG5cbiAgICAvLyBIYW5kbGUgdGltZW91dFxuICAgIHJlcXVlc3Qub250aW1lb3V0ID0gZnVuY3Rpb24gaGFuZGxlVGltZW91dCgpIHtcbiAgICAgIHJlamVjdChjcmVhdGVFcnJvcigndGltZW91dCBvZiAnICsgY29uZmlnLnRpbWVvdXQgKyAnbXMgZXhjZWVkZWQnLCBjb25maWcsICdFQ09OTkFCT1JURUQnLFxuICAgICAgICByZXF1ZXN0KSk7XG5cbiAgICAgIC8vIENsZWFuIHVwIHJlcXVlc3RcbiAgICAgIHJlcXVlc3QgPSBudWxsO1xuICAgIH07XG5cbiAgICAvLyBBZGQgeHNyZiBoZWFkZXJcbiAgICAvLyBUaGlzIGlzIG9ubHkgZG9uZSBpZiBydW5uaW5nIGluIGEgc3RhbmRhcmQgYnJvd3NlciBlbnZpcm9ubWVudC5cbiAgICAvLyBTcGVjaWZpY2FsbHkgbm90IGlmIHdlJ3JlIGluIGEgd2ViIHdvcmtlciwgb3IgcmVhY3QtbmF0aXZlLlxuICAgIGlmICh1dGlscy5pc1N0YW5kYXJkQnJvd3NlckVudigpKSB7XG4gICAgICB2YXIgY29va2llcyA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vLi4vaGVscGVycy9jb29raWVzICovIFwiLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvY29va2llcy5qc1wiKTtcblxuICAgICAgLy8gQWRkIHhzcmYgaGVhZGVyXG4gICAgICB2YXIgeHNyZlZhbHVlID0gKGNvbmZpZy53aXRoQ3JlZGVudGlhbHMgfHwgaXNVUkxTYW1lT3JpZ2luKGNvbmZpZy51cmwpKSAmJiBjb25maWcueHNyZkNvb2tpZU5hbWUgP1xuICAgICAgICAgIGNvb2tpZXMucmVhZChjb25maWcueHNyZkNvb2tpZU5hbWUpIDpcbiAgICAgICAgICB1bmRlZmluZWQ7XG5cbiAgICAgIGlmICh4c3JmVmFsdWUpIHtcbiAgICAgICAgcmVxdWVzdEhlYWRlcnNbY29uZmlnLnhzcmZIZWFkZXJOYW1lXSA9IHhzcmZWYWx1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBBZGQgaGVhZGVycyB0byB0aGUgcmVxdWVzdFxuICAgIGlmICgnc2V0UmVxdWVzdEhlYWRlcicgaW4gcmVxdWVzdCkge1xuICAgICAgdXRpbHMuZm9yRWFjaChyZXF1ZXN0SGVhZGVycywgZnVuY3Rpb24gc2V0UmVxdWVzdEhlYWRlcih2YWwsIGtleSkge1xuICAgICAgICBpZiAodHlwZW9mIHJlcXVlc3REYXRhID09PSAndW5kZWZpbmVkJyAmJiBrZXkudG9Mb3dlckNhc2UoKSA9PT0gJ2NvbnRlbnQtdHlwZScpIHtcbiAgICAgICAgICAvLyBSZW1vdmUgQ29udGVudC1UeXBlIGlmIGRhdGEgaXMgdW5kZWZpbmVkXG4gICAgICAgICAgZGVsZXRlIHJlcXVlc3RIZWFkZXJzW2tleV07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gT3RoZXJ3aXNlIGFkZCBoZWFkZXIgdG8gdGhlIHJlcXVlc3RcbiAgICAgICAgICByZXF1ZXN0LnNldFJlcXVlc3RIZWFkZXIoa2V5LCB2YWwpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBBZGQgd2l0aENyZWRlbnRpYWxzIHRvIHJlcXVlc3QgaWYgbmVlZGVkXG4gICAgaWYgKGNvbmZpZy53aXRoQ3JlZGVudGlhbHMpIHtcbiAgICAgIHJlcXVlc3Qud2l0aENyZWRlbnRpYWxzID0gdHJ1ZTtcbiAgICB9XG5cbiAgICAvLyBBZGQgcmVzcG9uc2VUeXBlIHRvIHJlcXVlc3QgaWYgbmVlZGVkXG4gICAgaWYgKGNvbmZpZy5yZXNwb25zZVR5cGUpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHJlcXVlc3QucmVzcG9uc2VUeXBlID0gY29uZmlnLnJlc3BvbnNlVHlwZTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gRXhwZWN0ZWQgRE9NRXhjZXB0aW9uIHRocm93biBieSBicm93c2VycyBub3QgY29tcGF0aWJsZSBYTUxIdHRwUmVxdWVzdCBMZXZlbCAyLlxuICAgICAgICAvLyBCdXQsIHRoaXMgY2FuIGJlIHN1cHByZXNzZWQgZm9yICdqc29uJyB0eXBlIGFzIGl0IGNhbiBiZSBwYXJzZWQgYnkgZGVmYXVsdCAndHJhbnNmb3JtUmVzcG9uc2UnIGZ1bmN0aW9uLlxuICAgICAgICBpZiAoY29uZmlnLnJlc3BvbnNlVHlwZSAhPT0gJ2pzb24nKSB7XG4gICAgICAgICAgdGhyb3cgZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIEhhbmRsZSBwcm9ncmVzcyBpZiBuZWVkZWRcbiAgICBpZiAodHlwZW9mIGNvbmZpZy5vbkRvd25sb2FkUHJvZ3Jlc3MgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHJlcXVlc3QuYWRkRXZlbnRMaXN0ZW5lcigncHJvZ3Jlc3MnLCBjb25maWcub25Eb3dubG9hZFByb2dyZXNzKTtcbiAgICB9XG5cbiAgICAvLyBOb3QgYWxsIGJyb3dzZXJzIHN1cHBvcnQgdXBsb2FkIGV2ZW50c1xuICAgIGlmICh0eXBlb2YgY29uZmlnLm9uVXBsb2FkUHJvZ3Jlc3MgPT09ICdmdW5jdGlvbicgJiYgcmVxdWVzdC51cGxvYWQpIHtcbiAgICAgIHJlcXVlc3QudXBsb2FkLmFkZEV2ZW50TGlzdGVuZXIoJ3Byb2dyZXNzJywgY29uZmlnLm9uVXBsb2FkUHJvZ3Jlc3MpO1xuICAgIH1cblxuICAgIGlmIChjb25maWcuY2FuY2VsVG9rZW4pIHtcbiAgICAgIC8vIEhhbmRsZSBjYW5jZWxsYXRpb25cbiAgICAgIGNvbmZpZy5jYW5jZWxUb2tlbi5wcm9taXNlLnRoZW4oZnVuY3Rpb24gb25DYW5jZWxlZChjYW5jZWwpIHtcbiAgICAgICAgaWYgKCFyZXF1ZXN0KSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgcmVxdWVzdC5hYm9ydCgpO1xuICAgICAgICByZWplY3QoY2FuY2VsKTtcbiAgICAgICAgLy8gQ2xlYW4gdXAgcmVxdWVzdFxuICAgICAgICByZXF1ZXN0ID0gbnVsbDtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmIChyZXF1ZXN0RGF0YSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXF1ZXN0RGF0YSA9IG51bGw7XG4gICAgfVxuXG4gICAgLy8gU2VuZCB0aGUgcmVxdWVzdFxuICAgIHJlcXVlc3Quc2VuZChyZXF1ZXN0RGF0YSk7XG4gIH0pO1xufTtcblxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvYXhpb3MuanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9heGlvcy5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cblxudmFyIHV0aWxzID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi91dGlscyAqLyBcIi4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi91dGlscy5qc1wiKTtcbnZhciBiaW5kID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9oZWxwZXJzL2JpbmQgKi8gXCIuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9iaW5kLmpzXCIpO1xudmFyIEF4aW9zID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9jb3JlL0F4aW9zICovIFwiLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvQXhpb3MuanNcIik7XG52YXIgZGVmYXVsdHMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL2RlZmF1bHRzICovIFwiLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2RlZmF1bHRzLmpzXCIpO1xuXG4vKipcbiAqIENyZWF0ZSBhbiBpbnN0YW5jZSBvZiBBeGlvc1xuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBkZWZhdWx0Q29uZmlnIFRoZSBkZWZhdWx0IGNvbmZpZyBmb3IgdGhlIGluc3RhbmNlXG4gKiBAcmV0dXJuIHtBeGlvc30gQSBuZXcgaW5zdGFuY2Ugb2YgQXhpb3NcbiAqL1xuZnVuY3Rpb24gY3JlYXRlSW5zdGFuY2UoZGVmYXVsdENvbmZpZykge1xuICB2YXIgY29udGV4dCA9IG5ldyBBeGlvcyhkZWZhdWx0Q29uZmlnKTtcbiAgdmFyIGluc3RhbmNlID0gYmluZChBeGlvcy5wcm90b3R5cGUucmVxdWVzdCwgY29udGV4dCk7XG5cbiAgLy8gQ29weSBheGlvcy5wcm90b3R5cGUgdG8gaW5zdGFuY2VcbiAgdXRpbHMuZXh0ZW5kKGluc3RhbmNlLCBBeGlvcy5wcm90b3R5cGUsIGNvbnRleHQpO1xuXG4gIC8vIENvcHkgY29udGV4dCB0byBpbnN0YW5jZVxuICB1dGlscy5leHRlbmQoaW5zdGFuY2UsIGNvbnRleHQpO1xuXG4gIHJldHVybiBpbnN0YW5jZTtcbn1cblxuLy8gQ3JlYXRlIHRoZSBkZWZhdWx0IGluc3RhbmNlIHRvIGJlIGV4cG9ydGVkXG52YXIgYXhpb3MgPSBjcmVhdGVJbnN0YW5jZShkZWZhdWx0cyk7XG5cbi8vIEV4cG9zZSBBeGlvcyBjbGFzcyB0byBhbGxvdyBjbGFzcyBpbmhlcml0YW5jZVxuYXhpb3MuQXhpb3MgPSBBeGlvcztcblxuLy8gRmFjdG9yeSBmb3IgY3JlYXRpbmcgbmV3IGluc3RhbmNlc1xuYXhpb3MuY3JlYXRlID0gZnVuY3Rpb24gY3JlYXRlKGluc3RhbmNlQ29uZmlnKSB7XG4gIHJldHVybiBjcmVhdGVJbnN0YW5jZSh1dGlscy5tZXJnZShkZWZhdWx0cywgaW5zdGFuY2VDb25maWcpKTtcbn07XG5cbi8vIEV4cG9zZSBDYW5jZWwgJiBDYW5jZWxUb2tlblxuYXhpb3MuQ2FuY2VsID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9jYW5jZWwvQ2FuY2VsICovIFwiLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NhbmNlbC9DYW5jZWwuanNcIik7XG5heGlvcy5DYW5jZWxUb2tlbiA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vY2FuY2VsL0NhbmNlbFRva2VuICovIFwiLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NhbmNlbC9DYW5jZWxUb2tlbi5qc1wiKTtcbmF4aW9zLmlzQ2FuY2VsID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9jYW5jZWwvaXNDYW5jZWwgKi8gXCIuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY2FuY2VsL2lzQ2FuY2VsLmpzXCIpO1xuXG4vLyBFeHBvc2UgYWxsL3NwcmVhZFxuYXhpb3MuYWxsID0gZnVuY3Rpb24gYWxsKHByb21pc2VzKSB7XG4gIHJldHVybiBQcm9taXNlLmFsbChwcm9taXNlcyk7XG59O1xuYXhpb3Muc3ByZWFkID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9oZWxwZXJzL3NwcmVhZCAqLyBcIi4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL3NwcmVhZC5qc1wiKTtcblxubW9kdWxlLmV4cG9ydHMgPSBheGlvcztcblxuLy8gQWxsb3cgdXNlIG9mIGRlZmF1bHQgaW1wb3J0IHN5bnRheCBpbiBUeXBlU2NyaXB0XG5tb2R1bGUuZXhwb3J0cy5kZWZhdWx0ID0gYXhpb3M7XG5cblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NhbmNlbC9DYW5jZWwuanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NhbmNlbC9DYW5jZWwuanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cblxuLyoqXG4gKiBBIGBDYW5jZWxgIGlzIGFuIG9iamVjdCB0aGF0IGlzIHRocm93biB3aGVuIGFuIG9wZXJhdGlvbiBpcyBjYW5jZWxlZC5cbiAqXG4gKiBAY2xhc3NcbiAqIEBwYXJhbSB7c3RyaW5nPX0gbWVzc2FnZSBUaGUgbWVzc2FnZS5cbiAqL1xuZnVuY3Rpb24gQ2FuY2VsKG1lc3NhZ2UpIHtcbiAgdGhpcy5tZXNzYWdlID0gbWVzc2FnZTtcbn1cblxuQ2FuY2VsLnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICByZXR1cm4gJ0NhbmNlbCcgKyAodGhpcy5tZXNzYWdlID8gJzogJyArIHRoaXMubWVzc2FnZSA6ICcnKTtcbn07XG5cbkNhbmNlbC5wcm90b3R5cGUuX19DQU5DRUxfXyA9IHRydWU7XG5cbm1vZHVsZS5leHBvcnRzID0gQ2FuY2VsO1xuXG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jYW5jZWwvQ2FuY2VsVG9rZW4uanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY2FuY2VsL0NhbmNlbFRva2VuLmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cblxudmFyIENhbmNlbCA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vQ2FuY2VsICovIFwiLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NhbmNlbC9DYW5jZWwuanNcIik7XG5cbi8qKlxuICogQSBgQ2FuY2VsVG9rZW5gIGlzIGFuIG9iamVjdCB0aGF0IGNhbiBiZSB1c2VkIHRvIHJlcXVlc3QgY2FuY2VsbGF0aW9uIG9mIGFuIG9wZXJhdGlvbi5cbiAqXG4gKiBAY2xhc3NcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGV4ZWN1dG9yIFRoZSBleGVjdXRvciBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gQ2FuY2VsVG9rZW4oZXhlY3V0b3IpIHtcbiAgaWYgKHR5cGVvZiBleGVjdXRvciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ2V4ZWN1dG9yIG11c3QgYmUgYSBmdW5jdGlvbi4nKTtcbiAgfVxuXG4gIHZhciByZXNvbHZlUHJvbWlzZTtcbiAgdGhpcy5wcm9taXNlID0gbmV3IFByb21pc2UoZnVuY3Rpb24gcHJvbWlzZUV4ZWN1dG9yKHJlc29sdmUpIHtcbiAgICByZXNvbHZlUHJvbWlzZSA9IHJlc29sdmU7XG4gIH0pO1xuXG4gIHZhciB0b2tlbiA9IHRoaXM7XG4gIGV4ZWN1dG9yKGZ1bmN0aW9uIGNhbmNlbChtZXNzYWdlKSB7XG4gICAgaWYgKHRva2VuLnJlYXNvbikge1xuICAgICAgLy8gQ2FuY2VsbGF0aW9uIGhhcyBhbHJlYWR5IGJlZW4gcmVxdWVzdGVkXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdG9rZW4ucmVhc29uID0gbmV3IENhbmNlbChtZXNzYWdlKTtcbiAgICByZXNvbHZlUHJvbWlzZSh0b2tlbi5yZWFzb24pO1xuICB9KTtcbn1cblxuLyoqXG4gKiBUaHJvd3MgYSBgQ2FuY2VsYCBpZiBjYW5jZWxsYXRpb24gaGFzIGJlZW4gcmVxdWVzdGVkLlxuICovXG5DYW5jZWxUb2tlbi5wcm90b3R5cGUudGhyb3dJZlJlcXVlc3RlZCA9IGZ1bmN0aW9uIHRocm93SWZSZXF1ZXN0ZWQoKSB7XG4gIGlmICh0aGlzLnJlYXNvbikge1xuICAgIHRocm93IHRoaXMucmVhc29uO1xuICB9XG59O1xuXG4vKipcbiAqIFJldHVybnMgYW4gb2JqZWN0IHRoYXQgY29udGFpbnMgYSBuZXcgYENhbmNlbFRva2VuYCBhbmQgYSBmdW5jdGlvbiB0aGF0LCB3aGVuIGNhbGxlZCxcbiAqIGNhbmNlbHMgdGhlIGBDYW5jZWxUb2tlbmAuXG4gKi9cbkNhbmNlbFRva2VuLnNvdXJjZSA9IGZ1bmN0aW9uIHNvdXJjZSgpIHtcbiAgdmFyIGNhbmNlbDtcbiAgdmFyIHRva2VuID0gbmV3IENhbmNlbFRva2VuKGZ1bmN0aW9uIGV4ZWN1dG9yKGMpIHtcbiAgICBjYW5jZWwgPSBjO1xuICB9KTtcbiAgcmV0dXJuIHtcbiAgICB0b2tlbjogdG9rZW4sXG4gICAgY2FuY2VsOiBjYW5jZWxcbiAgfTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gQ2FuY2VsVG9rZW47XG5cblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NhbmNlbC9pc0NhbmNlbC5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jYW5jZWwvaXNDYW5jZWwuanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGlzQ2FuY2VsKHZhbHVlKSB7XG4gIHJldHVybiAhISh2YWx1ZSAmJiB2YWx1ZS5fX0NBTkNFTF9fKTtcbn07XG5cblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvQXhpb3MuanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvQXhpb3MuanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cblxudmFyIGRlZmF1bHRzID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi8uLi9kZWZhdWx0cyAqLyBcIi4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9kZWZhdWx0cy5qc1wiKTtcbnZhciB1dGlscyA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vLi4vdXRpbHMgKi8gXCIuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvdXRpbHMuanNcIik7XG52YXIgSW50ZXJjZXB0b3JNYW5hZ2VyID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9JbnRlcmNlcHRvck1hbmFnZXIgKi8gXCIuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9JbnRlcmNlcHRvck1hbmFnZXIuanNcIik7XG52YXIgZGlzcGF0Y2hSZXF1ZXN0ID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9kaXNwYXRjaFJlcXVlc3QgKi8gXCIuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9kaXNwYXRjaFJlcXVlc3QuanNcIik7XG5cbi8qKlxuICogQ3JlYXRlIGEgbmV3IGluc3RhbmNlIG9mIEF4aW9zXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGluc3RhbmNlQ29uZmlnIFRoZSBkZWZhdWx0IGNvbmZpZyBmb3IgdGhlIGluc3RhbmNlXG4gKi9cbmZ1bmN0aW9uIEF4aW9zKGluc3RhbmNlQ29uZmlnKSB7XG4gIHRoaXMuZGVmYXVsdHMgPSBpbnN0YW5jZUNvbmZpZztcbiAgdGhpcy5pbnRlcmNlcHRvcnMgPSB7XG4gICAgcmVxdWVzdDogbmV3IEludGVyY2VwdG9yTWFuYWdlcigpLFxuICAgIHJlc3BvbnNlOiBuZXcgSW50ZXJjZXB0b3JNYW5hZ2VyKClcbiAgfTtcbn1cblxuLyoqXG4gKiBEaXNwYXRjaCBhIHJlcXVlc3RcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gY29uZmlnIFRoZSBjb25maWcgc3BlY2lmaWMgZm9yIHRoaXMgcmVxdWVzdCAobWVyZ2VkIHdpdGggdGhpcy5kZWZhdWx0cylcbiAqL1xuQXhpb3MucHJvdG90eXBlLnJlcXVlc3QgPSBmdW5jdGlvbiByZXF1ZXN0KGNvbmZpZykge1xuICAvKmVzbGludCBuby1wYXJhbS1yZWFzc2lnbjowKi9cbiAgLy8gQWxsb3cgZm9yIGF4aW9zKCdleGFtcGxlL3VybCdbLCBjb25maWddKSBhIGxhIGZldGNoIEFQSVxuICBpZiAodHlwZW9mIGNvbmZpZyA9PT0gJ3N0cmluZycpIHtcbiAgICBjb25maWcgPSB1dGlscy5tZXJnZSh7XG4gICAgICB1cmw6IGFyZ3VtZW50c1swXVxuICAgIH0sIGFyZ3VtZW50c1sxXSk7XG4gIH1cblxuICBjb25maWcgPSB1dGlscy5tZXJnZShkZWZhdWx0cywge21ldGhvZDogJ2dldCd9LCB0aGlzLmRlZmF1bHRzLCBjb25maWcpO1xuICBjb25maWcubWV0aG9kID0gY29uZmlnLm1ldGhvZC50b0xvd2VyQ2FzZSgpO1xuXG4gIC8vIEhvb2sgdXAgaW50ZXJjZXB0b3JzIG1pZGRsZXdhcmVcbiAgdmFyIGNoYWluID0gW2Rpc3BhdGNoUmVxdWVzdCwgdW5kZWZpbmVkXTtcbiAgdmFyIHByb21pc2UgPSBQcm9taXNlLnJlc29sdmUoY29uZmlnKTtcblxuICB0aGlzLmludGVyY2VwdG9ycy5yZXF1ZXN0LmZvckVhY2goZnVuY3Rpb24gdW5zaGlmdFJlcXVlc3RJbnRlcmNlcHRvcnMoaW50ZXJjZXB0b3IpIHtcbiAgICBjaGFpbi51bnNoaWZ0KGludGVyY2VwdG9yLmZ1bGZpbGxlZCwgaW50ZXJjZXB0b3IucmVqZWN0ZWQpO1xuICB9KTtcblxuICB0aGlzLmludGVyY2VwdG9ycy5yZXNwb25zZS5mb3JFYWNoKGZ1bmN0aW9uIHB1c2hSZXNwb25zZUludGVyY2VwdG9ycyhpbnRlcmNlcHRvcikge1xuICAgIGNoYWluLnB1c2goaW50ZXJjZXB0b3IuZnVsZmlsbGVkLCBpbnRlcmNlcHRvci5yZWplY3RlZCk7XG4gIH0pO1xuXG4gIHdoaWxlIChjaGFpbi5sZW5ndGgpIHtcbiAgICBwcm9taXNlID0gcHJvbWlzZS50aGVuKGNoYWluLnNoaWZ0KCksIGNoYWluLnNoaWZ0KCkpO1xuICB9XG5cbiAgcmV0dXJuIHByb21pc2U7XG59O1xuXG4vLyBQcm92aWRlIGFsaWFzZXMgZm9yIHN1cHBvcnRlZCByZXF1ZXN0IG1ldGhvZHNcbnV0aWxzLmZvckVhY2goWydkZWxldGUnLCAnZ2V0JywgJ2hlYWQnLCAnb3B0aW9ucyddLCBmdW5jdGlvbiBmb3JFYWNoTWV0aG9kTm9EYXRhKG1ldGhvZCkge1xuICAvKmVzbGludCBmdW5jLW5hbWVzOjAqL1xuICBBeGlvcy5wcm90b3R5cGVbbWV0aG9kXSA9IGZ1bmN0aW9uKHVybCwgY29uZmlnKSB7XG4gICAgcmV0dXJuIHRoaXMucmVxdWVzdCh1dGlscy5tZXJnZShjb25maWcgfHwge30sIHtcbiAgICAgIG1ldGhvZDogbWV0aG9kLFxuICAgICAgdXJsOiB1cmxcbiAgICB9KSk7XG4gIH07XG59KTtcblxudXRpbHMuZm9yRWFjaChbJ3Bvc3QnLCAncHV0JywgJ3BhdGNoJ10sIGZ1bmN0aW9uIGZvckVhY2hNZXRob2RXaXRoRGF0YShtZXRob2QpIHtcbiAgLyplc2xpbnQgZnVuYy1uYW1lczowKi9cbiAgQXhpb3MucHJvdG90eXBlW21ldGhvZF0gPSBmdW5jdGlvbih1cmwsIGRhdGEsIGNvbmZpZykge1xuICAgIHJldHVybiB0aGlzLnJlcXVlc3QodXRpbHMubWVyZ2UoY29uZmlnIHx8IHt9LCB7XG4gICAgICBtZXRob2Q6IG1ldGhvZCxcbiAgICAgIHVybDogdXJsLFxuICAgICAgZGF0YTogZGF0YVxuICAgIH0pKTtcbiAgfTtcbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEF4aW9zO1xuXG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL0ludGVyY2VwdG9yTWFuYWdlci5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvSW50ZXJjZXB0b3JNYW5hZ2VyLmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG52YXIgdXRpbHMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuLy4uL3V0aWxzICovIFwiLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL3V0aWxzLmpzXCIpO1xuXG5mdW5jdGlvbiBJbnRlcmNlcHRvck1hbmFnZXIoKSB7XG4gIHRoaXMuaGFuZGxlcnMgPSBbXTtcbn1cblxuLyoqXG4gKiBBZGQgYSBuZXcgaW50ZXJjZXB0b3IgdG8gdGhlIHN0YWNrXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVsZmlsbGVkIFRoZSBmdW5jdGlvbiB0byBoYW5kbGUgYHRoZW5gIGZvciBhIGBQcm9taXNlYFxuICogQHBhcmFtIHtGdW5jdGlvbn0gcmVqZWN0ZWQgVGhlIGZ1bmN0aW9uIHRvIGhhbmRsZSBgcmVqZWN0YCBmb3IgYSBgUHJvbWlzZWBcbiAqXG4gKiBAcmV0dXJuIHtOdW1iZXJ9IEFuIElEIHVzZWQgdG8gcmVtb3ZlIGludGVyY2VwdG9yIGxhdGVyXG4gKi9cbkludGVyY2VwdG9yTWFuYWdlci5wcm90b3R5cGUudXNlID0gZnVuY3Rpb24gdXNlKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpIHtcbiAgdGhpcy5oYW5kbGVycy5wdXNoKHtcbiAgICBmdWxmaWxsZWQ6IGZ1bGZpbGxlZCxcbiAgICByZWplY3RlZDogcmVqZWN0ZWRcbiAgfSk7XG4gIHJldHVybiB0aGlzLmhhbmRsZXJzLmxlbmd0aCAtIDE7XG59O1xuXG4vKipcbiAqIFJlbW92ZSBhbiBpbnRlcmNlcHRvciBmcm9tIHRoZSBzdGFja1xuICpcbiAqIEBwYXJhbSB7TnVtYmVyfSBpZCBUaGUgSUQgdGhhdCB3YXMgcmV0dXJuZWQgYnkgYHVzZWBcbiAqL1xuSW50ZXJjZXB0b3JNYW5hZ2VyLnByb3RvdHlwZS5lamVjdCA9IGZ1bmN0aW9uIGVqZWN0KGlkKSB7XG4gIGlmICh0aGlzLmhhbmRsZXJzW2lkXSkge1xuICAgIHRoaXMuaGFuZGxlcnNbaWRdID0gbnVsbDtcbiAgfVxufTtcblxuLyoqXG4gKiBJdGVyYXRlIG92ZXIgYWxsIHRoZSByZWdpc3RlcmVkIGludGVyY2VwdG9yc1xuICpcbiAqIFRoaXMgbWV0aG9kIGlzIHBhcnRpY3VsYXJseSB1c2VmdWwgZm9yIHNraXBwaW5nIG92ZXIgYW55XG4gKiBpbnRlcmNlcHRvcnMgdGhhdCBtYXkgaGF2ZSBiZWNvbWUgYG51bGxgIGNhbGxpbmcgYGVqZWN0YC5cbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmbiBUaGUgZnVuY3Rpb24gdG8gY2FsbCBmb3IgZWFjaCBpbnRlcmNlcHRvclxuICovXG5JbnRlcmNlcHRvck1hbmFnZXIucHJvdG90eXBlLmZvckVhY2ggPSBmdW5jdGlvbiBmb3JFYWNoKGZuKSB7XG4gIHV0aWxzLmZvckVhY2godGhpcy5oYW5kbGVycywgZnVuY3Rpb24gZm9yRWFjaEhhbmRsZXIoaCkge1xuICAgIGlmIChoICE9PSBudWxsKSB7XG4gICAgICBmbihoKTtcbiAgICB9XG4gIH0pO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBJbnRlcmNlcHRvck1hbmFnZXI7XG5cblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvY3JlYXRlRXJyb3IuanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvY3JlYXRlRXJyb3IuanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cblxudmFyIGVuaGFuY2VFcnJvciA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vZW5oYW5jZUVycm9yICovIFwiLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvZW5oYW5jZUVycm9yLmpzXCIpO1xuXG4vKipcbiAqIENyZWF0ZSBhbiBFcnJvciB3aXRoIHRoZSBzcGVjaWZpZWQgbWVzc2FnZSwgY29uZmlnLCBlcnJvciBjb2RlLCByZXF1ZXN0IGFuZCByZXNwb25zZS5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gbWVzc2FnZSBUaGUgZXJyb3IgbWVzc2FnZS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWcgVGhlIGNvbmZpZy5cbiAqIEBwYXJhbSB7c3RyaW5nfSBbY29kZV0gVGhlIGVycm9yIGNvZGUgKGZvciBleGFtcGxlLCAnRUNPTk5BQk9SVEVEJykuXG4gKiBAcGFyYW0ge09iamVjdH0gW3JlcXVlc3RdIFRoZSByZXF1ZXN0LlxuICogQHBhcmFtIHtPYmplY3R9IFtyZXNwb25zZV0gVGhlIHJlc3BvbnNlLlxuICogQHJldHVybnMge0Vycm9yfSBUaGUgY3JlYXRlZCBlcnJvci5cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjcmVhdGVFcnJvcihtZXNzYWdlLCBjb25maWcsIGNvZGUsIHJlcXVlc3QsIHJlc3BvbnNlKSB7XG4gIHZhciBlcnJvciA9IG5ldyBFcnJvcihtZXNzYWdlKTtcbiAgcmV0dXJuIGVuaGFuY2VFcnJvcihlcnJvciwgY29uZmlnLCBjb2RlLCByZXF1ZXN0LCByZXNwb25zZSk7XG59O1xuXG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL2Rpc3BhdGNoUmVxdWVzdC5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvZGlzcGF0Y2hSZXF1ZXN0LmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG52YXIgdXRpbHMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuLy4uL3V0aWxzICovIFwiLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL3V0aWxzLmpzXCIpO1xudmFyIHRyYW5zZm9ybURhdGEgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL3RyYW5zZm9ybURhdGEgKi8gXCIuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS90cmFuc2Zvcm1EYXRhLmpzXCIpO1xudmFyIGlzQ2FuY2VsID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi4vY2FuY2VsL2lzQ2FuY2VsICovIFwiLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NhbmNlbC9pc0NhbmNlbC5qc1wiKTtcbnZhciBkZWZhdWx0cyA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4uL2RlZmF1bHRzICovIFwiLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2RlZmF1bHRzLmpzXCIpO1xudmFyIGlzQWJzb2x1dGVVUkwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuLy4uL2hlbHBlcnMvaXNBYnNvbHV0ZVVSTCAqLyBcIi4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2lzQWJzb2x1dGVVUkwuanNcIik7XG52YXIgY29tYmluZVVSTHMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuLy4uL2hlbHBlcnMvY29tYmluZVVSTHMgKi8gXCIuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9jb21iaW5lVVJMcy5qc1wiKTtcblxuLyoqXG4gKiBUaHJvd3MgYSBgQ2FuY2VsYCBpZiBjYW5jZWxsYXRpb24gaGFzIGJlZW4gcmVxdWVzdGVkLlxuICovXG5mdW5jdGlvbiB0aHJvd0lmQ2FuY2VsbGF0aW9uUmVxdWVzdGVkKGNvbmZpZykge1xuICBpZiAoY29uZmlnLmNhbmNlbFRva2VuKSB7XG4gICAgY29uZmlnLmNhbmNlbFRva2VuLnRocm93SWZSZXF1ZXN0ZWQoKTtcbiAgfVxufVxuXG4vKipcbiAqIERpc3BhdGNoIGEgcmVxdWVzdCB0byB0aGUgc2VydmVyIHVzaW5nIHRoZSBjb25maWd1cmVkIGFkYXB0ZXIuXG4gKlxuICogQHBhcmFtIHtvYmplY3R9IGNvbmZpZyBUaGUgY29uZmlnIHRoYXQgaXMgdG8gYmUgdXNlZCBmb3IgdGhlIHJlcXVlc3RcbiAqIEByZXR1cm5zIHtQcm9taXNlfSBUaGUgUHJvbWlzZSB0byBiZSBmdWxmaWxsZWRcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBkaXNwYXRjaFJlcXVlc3QoY29uZmlnKSB7XG4gIHRocm93SWZDYW5jZWxsYXRpb25SZXF1ZXN0ZWQoY29uZmlnKTtcblxuICAvLyBTdXBwb3J0IGJhc2VVUkwgY29uZmlnXG4gIGlmIChjb25maWcuYmFzZVVSTCAmJiAhaXNBYnNvbHV0ZVVSTChjb25maWcudXJsKSkge1xuICAgIGNvbmZpZy51cmwgPSBjb21iaW5lVVJMcyhjb25maWcuYmFzZVVSTCwgY29uZmlnLnVybCk7XG4gIH1cblxuICAvLyBFbnN1cmUgaGVhZGVycyBleGlzdFxuICBjb25maWcuaGVhZGVycyA9IGNvbmZpZy5oZWFkZXJzIHx8IHt9O1xuXG4gIC8vIFRyYW5zZm9ybSByZXF1ZXN0IGRhdGFcbiAgY29uZmlnLmRhdGEgPSB0cmFuc2Zvcm1EYXRhKFxuICAgIGNvbmZpZy5kYXRhLFxuICAgIGNvbmZpZy5oZWFkZXJzLFxuICAgIGNvbmZpZy50cmFuc2Zvcm1SZXF1ZXN0XG4gICk7XG5cbiAgLy8gRmxhdHRlbiBoZWFkZXJzXG4gIGNvbmZpZy5oZWFkZXJzID0gdXRpbHMubWVyZ2UoXG4gICAgY29uZmlnLmhlYWRlcnMuY29tbW9uIHx8IHt9LFxuICAgIGNvbmZpZy5oZWFkZXJzW2NvbmZpZy5tZXRob2RdIHx8IHt9LFxuICAgIGNvbmZpZy5oZWFkZXJzIHx8IHt9XG4gICk7XG5cbiAgdXRpbHMuZm9yRWFjaChcbiAgICBbJ2RlbGV0ZScsICdnZXQnLCAnaGVhZCcsICdwb3N0JywgJ3B1dCcsICdwYXRjaCcsICdjb21tb24nXSxcbiAgICBmdW5jdGlvbiBjbGVhbkhlYWRlckNvbmZpZyhtZXRob2QpIHtcbiAgICAgIGRlbGV0ZSBjb25maWcuaGVhZGVyc1ttZXRob2RdO1xuICAgIH1cbiAgKTtcblxuICB2YXIgYWRhcHRlciA9IGNvbmZpZy5hZGFwdGVyIHx8IGRlZmF1bHRzLmFkYXB0ZXI7XG5cbiAgcmV0dXJuIGFkYXB0ZXIoY29uZmlnKS50aGVuKGZ1bmN0aW9uIG9uQWRhcHRlclJlc29sdXRpb24ocmVzcG9uc2UpIHtcbiAgICB0aHJvd0lmQ2FuY2VsbGF0aW9uUmVxdWVzdGVkKGNvbmZpZyk7XG5cbiAgICAvLyBUcmFuc2Zvcm0gcmVzcG9uc2UgZGF0YVxuICAgIHJlc3BvbnNlLmRhdGEgPSB0cmFuc2Zvcm1EYXRhKFxuICAgICAgcmVzcG9uc2UuZGF0YSxcbiAgICAgIHJlc3BvbnNlLmhlYWRlcnMsXG4gICAgICBjb25maWcudHJhbnNmb3JtUmVzcG9uc2VcbiAgICApO1xuXG4gICAgcmV0dXJuIHJlc3BvbnNlO1xuICB9LCBmdW5jdGlvbiBvbkFkYXB0ZXJSZWplY3Rpb24ocmVhc29uKSB7XG4gICAgaWYgKCFpc0NhbmNlbChyZWFzb24pKSB7XG4gICAgICB0aHJvd0lmQ2FuY2VsbGF0aW9uUmVxdWVzdGVkKGNvbmZpZyk7XG5cbiAgICAgIC8vIFRyYW5zZm9ybSByZXNwb25zZSBkYXRhXG4gICAgICBpZiAocmVhc29uICYmIHJlYXNvbi5yZXNwb25zZSkge1xuICAgICAgICByZWFzb24ucmVzcG9uc2UuZGF0YSA9IHRyYW5zZm9ybURhdGEoXG4gICAgICAgICAgcmVhc29uLnJlc3BvbnNlLmRhdGEsXG4gICAgICAgICAgcmVhc29uLnJlc3BvbnNlLmhlYWRlcnMsXG4gICAgICAgICAgY29uZmlnLnRyYW5zZm9ybVJlc3BvbnNlXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIFByb21pc2UucmVqZWN0KHJlYXNvbik7XG4gIH0pO1xufTtcblxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9lbmhhbmNlRXJyb3IuanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL2VuaGFuY2VFcnJvci5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cblxuLyoqXG4gKiBVcGRhdGUgYW4gRXJyb3Igd2l0aCB0aGUgc3BlY2lmaWVkIGNvbmZpZywgZXJyb3IgY29kZSwgYW5kIHJlc3BvbnNlLlxuICpcbiAqIEBwYXJhbSB7RXJyb3J9IGVycm9yIFRoZSBlcnJvciB0byB1cGRhdGUuXG4gKiBAcGFyYW0ge09iamVjdH0gY29uZmlnIFRoZSBjb25maWcuXG4gKiBAcGFyYW0ge3N0cmluZ30gW2NvZGVdIFRoZSBlcnJvciBjb2RlIChmb3IgZXhhbXBsZSwgJ0VDT05OQUJPUlRFRCcpLlxuICogQHBhcmFtIHtPYmplY3R9IFtyZXF1ZXN0XSBUaGUgcmVxdWVzdC5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbcmVzcG9uc2VdIFRoZSByZXNwb25zZS5cbiAqIEByZXR1cm5zIHtFcnJvcn0gVGhlIGVycm9yLlxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGVuaGFuY2VFcnJvcihlcnJvciwgY29uZmlnLCBjb2RlLCByZXF1ZXN0LCByZXNwb25zZSkge1xuICBlcnJvci5jb25maWcgPSBjb25maWc7XG4gIGlmIChjb2RlKSB7XG4gICAgZXJyb3IuY29kZSA9IGNvZGU7XG4gIH1cbiAgZXJyb3IucmVxdWVzdCA9IHJlcXVlc3Q7XG4gIGVycm9yLnJlc3BvbnNlID0gcmVzcG9uc2U7XG4gIHJldHVybiBlcnJvcjtcbn07XG5cblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvc2V0dGxlLmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9zZXR0bGUuanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5cbnZhciBjcmVhdGVFcnJvciA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vY3JlYXRlRXJyb3IgKi8gXCIuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9jcmVhdGVFcnJvci5qc1wiKTtcblxuLyoqXG4gKiBSZXNvbHZlIG9yIHJlamVjdCBhIFByb21pc2UgYmFzZWQgb24gcmVzcG9uc2Ugc3RhdHVzLlxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IHJlc29sdmUgQSBmdW5jdGlvbiB0aGF0IHJlc29sdmVzIHRoZSBwcm9taXNlLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gcmVqZWN0IEEgZnVuY3Rpb24gdGhhdCByZWplY3RzIHRoZSBwcm9taXNlLlxuICogQHBhcmFtIHtvYmplY3R9IHJlc3BvbnNlIFRoZSByZXNwb25zZS5cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCByZXNwb25zZSkge1xuICB2YXIgdmFsaWRhdGVTdGF0dXMgPSByZXNwb25zZS5jb25maWcudmFsaWRhdGVTdGF0dXM7XG4gIC8vIE5vdGU6IHN0YXR1cyBpcyBub3QgZXhwb3NlZCBieSBYRG9tYWluUmVxdWVzdFxuICBpZiAoIXJlc3BvbnNlLnN0YXR1cyB8fCAhdmFsaWRhdGVTdGF0dXMgfHwgdmFsaWRhdGVTdGF0dXMocmVzcG9uc2Uuc3RhdHVzKSkge1xuICAgIHJlc29sdmUocmVzcG9uc2UpO1xuICB9IGVsc2Uge1xuICAgIHJlamVjdChjcmVhdGVFcnJvcihcbiAgICAgICdSZXF1ZXN0IGZhaWxlZCB3aXRoIHN0YXR1cyBjb2RlICcgKyByZXNwb25zZS5zdGF0dXMsXG4gICAgICByZXNwb25zZS5jb25maWcsXG4gICAgICBudWxsLFxuICAgICAgcmVzcG9uc2UucmVxdWVzdCxcbiAgICAgIHJlc3BvbnNlXG4gICAgKSk7XG4gIH1cbn07XG5cblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvdHJhbnNmb3JtRGF0YS5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL3RyYW5zZm9ybURhdGEuanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG52YXIgdXRpbHMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuLy4uL3V0aWxzICovIFwiLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL3V0aWxzLmpzXCIpO1xuXG4vKipcbiAqIFRyYW5zZm9ybSB0aGUgZGF0YSBmb3IgYSByZXF1ZXN0IG9yIGEgcmVzcG9uc2VcbiAqXG4gKiBAcGFyYW0ge09iamVjdHxTdHJpbmd9IGRhdGEgVGhlIGRhdGEgdG8gYmUgdHJhbnNmb3JtZWRcbiAqIEBwYXJhbSB7QXJyYXl9IGhlYWRlcnMgVGhlIGhlYWRlcnMgZm9yIHRoZSByZXF1ZXN0IG9yIHJlc3BvbnNlXG4gKiBAcGFyYW0ge0FycmF5fEZ1bmN0aW9ufSBmbnMgQSBzaW5nbGUgZnVuY3Rpb24gb3IgQXJyYXkgb2YgZnVuY3Rpb25zXG4gKiBAcmV0dXJucyB7Kn0gVGhlIHJlc3VsdGluZyB0cmFuc2Zvcm1lZCBkYXRhXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gdHJhbnNmb3JtRGF0YShkYXRhLCBoZWFkZXJzLCBmbnMpIHtcbiAgLyplc2xpbnQgbm8tcGFyYW0tcmVhc3NpZ246MCovXG4gIHV0aWxzLmZvckVhY2goZm5zLCBmdW5jdGlvbiB0cmFuc2Zvcm0oZm4pIHtcbiAgICBkYXRhID0gZm4oZGF0YSwgaGVhZGVycyk7XG4gIH0pO1xuXG4gIHJldHVybiBkYXRhO1xufTtcblxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvZGVmYXVsdHMuanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9kZWZhdWx0cy5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG4vKiBXRUJQQUNLIFZBUiBJTkpFQ1RJT04gKi8oZnVuY3Rpb24ocHJvY2Vzcykge1xuXG52YXIgdXRpbHMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL3V0aWxzICovIFwiLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL3V0aWxzLmpzXCIpO1xudmFyIG5vcm1hbGl6ZUhlYWRlck5hbWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL2hlbHBlcnMvbm9ybWFsaXplSGVhZGVyTmFtZSAqLyBcIi4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL25vcm1hbGl6ZUhlYWRlck5hbWUuanNcIik7XG5cbnZhciBERUZBVUxUX0NPTlRFTlRfVFlQRSA9IHtcbiAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnXG59O1xuXG5mdW5jdGlvbiBzZXRDb250ZW50VHlwZUlmVW5zZXQoaGVhZGVycywgdmFsdWUpIHtcbiAgaWYgKCF1dGlscy5pc1VuZGVmaW5lZChoZWFkZXJzKSAmJiB1dGlscy5pc1VuZGVmaW5lZChoZWFkZXJzWydDb250ZW50LVR5cGUnXSkpIHtcbiAgICBoZWFkZXJzWydDb250ZW50LVR5cGUnXSA9IHZhbHVlO1xuICB9XG59XG5cbmZ1bmN0aW9uIGdldERlZmF1bHRBZGFwdGVyKCkge1xuICB2YXIgYWRhcHRlcjtcbiAgaWYgKHR5cGVvZiBYTUxIdHRwUmVxdWVzdCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAvLyBGb3IgYnJvd3NlcnMgdXNlIFhIUiBhZGFwdGVyXG4gICAgYWRhcHRlciA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vYWRhcHRlcnMveGhyICovIFwiLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2FkYXB0ZXJzL3hoci5qc1wiKTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgcHJvY2VzcyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAvLyBGb3Igbm9kZSB1c2UgSFRUUCBhZGFwdGVyXG4gICAgYWRhcHRlciA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vYWRhcHRlcnMvaHR0cCAqLyBcIi4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9hZGFwdGVycy94aHIuanNcIik7XG4gIH1cbiAgcmV0dXJuIGFkYXB0ZXI7XG59XG5cbnZhciBkZWZhdWx0cyA9IHtcbiAgYWRhcHRlcjogZ2V0RGVmYXVsdEFkYXB0ZXIoKSxcblxuICB0cmFuc2Zvcm1SZXF1ZXN0OiBbZnVuY3Rpb24gdHJhbnNmb3JtUmVxdWVzdChkYXRhLCBoZWFkZXJzKSB7XG4gICAgbm9ybWFsaXplSGVhZGVyTmFtZShoZWFkZXJzLCAnQ29udGVudC1UeXBlJyk7XG4gICAgaWYgKHV0aWxzLmlzRm9ybURhdGEoZGF0YSkgfHxcbiAgICAgIHV0aWxzLmlzQXJyYXlCdWZmZXIoZGF0YSkgfHxcbiAgICAgIHV0aWxzLmlzQnVmZmVyKGRhdGEpIHx8XG4gICAgICB1dGlscy5pc1N0cmVhbShkYXRhKSB8fFxuICAgICAgdXRpbHMuaXNGaWxlKGRhdGEpIHx8XG4gICAgICB1dGlscy5pc0Jsb2IoZGF0YSlcbiAgICApIHtcbiAgICAgIHJldHVybiBkYXRhO1xuICAgIH1cbiAgICBpZiAodXRpbHMuaXNBcnJheUJ1ZmZlclZpZXcoZGF0YSkpIHtcbiAgICAgIHJldHVybiBkYXRhLmJ1ZmZlcjtcbiAgICB9XG4gICAgaWYgKHV0aWxzLmlzVVJMU2VhcmNoUGFyYW1zKGRhdGEpKSB7XG4gICAgICBzZXRDb250ZW50VHlwZUlmVW5zZXQoaGVhZGVycywgJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZDtjaGFyc2V0PXV0Zi04Jyk7XG4gICAgICByZXR1cm4gZGF0YS50b1N0cmluZygpO1xuICAgIH1cbiAgICBpZiAodXRpbHMuaXNPYmplY3QoZGF0YSkpIHtcbiAgICAgIHNldENvbnRlbnRUeXBlSWZVbnNldChoZWFkZXJzLCAnYXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04Jyk7XG4gICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoZGF0YSk7XG4gICAgfVxuICAgIHJldHVybiBkYXRhO1xuICB9XSxcblxuICB0cmFuc2Zvcm1SZXNwb25zZTogW2Z1bmN0aW9uIHRyYW5zZm9ybVJlc3BvbnNlKGRhdGEpIHtcbiAgICAvKmVzbGludCBuby1wYXJhbS1yZWFzc2lnbjowKi9cbiAgICBpZiAodHlwZW9mIGRhdGEgPT09ICdzdHJpbmcnKSB7XG4gICAgICB0cnkge1xuICAgICAgICBkYXRhID0gSlNPTi5wYXJzZShkYXRhKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHsgLyogSWdub3JlICovIH1cbiAgICB9XG4gICAgcmV0dXJuIGRhdGE7XG4gIH1dLFxuXG4gIC8qKlxuICAgKiBBIHRpbWVvdXQgaW4gbWlsbGlzZWNvbmRzIHRvIGFib3J0IGEgcmVxdWVzdC4gSWYgc2V0IHRvIDAgKGRlZmF1bHQpIGFcbiAgICogdGltZW91dCBpcyBub3QgY3JlYXRlZC5cbiAgICovXG4gIHRpbWVvdXQ6IDAsXG5cbiAgeHNyZkNvb2tpZU5hbWU6ICdYU1JGLVRPS0VOJyxcbiAgeHNyZkhlYWRlck5hbWU6ICdYLVhTUkYtVE9LRU4nLFxuXG4gIG1heENvbnRlbnRMZW5ndGg6IC0xLFxuXG4gIHZhbGlkYXRlU3RhdHVzOiBmdW5jdGlvbiB2YWxpZGF0ZVN0YXR1cyhzdGF0dXMpIHtcbiAgICByZXR1cm4gc3RhdHVzID49IDIwMCAmJiBzdGF0dXMgPCAzMDA7XG4gIH1cbn07XG5cbmRlZmF1bHRzLmhlYWRlcnMgPSB7XG4gIGNvbW1vbjoge1xuICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbiwgdGV4dC9wbGFpbiwgKi8qJ1xuICB9XG59O1xuXG51dGlscy5mb3JFYWNoKFsnZGVsZXRlJywgJ2dldCcsICdoZWFkJ10sIGZ1bmN0aW9uIGZvckVhY2hNZXRob2ROb0RhdGEobWV0aG9kKSB7XG4gIGRlZmF1bHRzLmhlYWRlcnNbbWV0aG9kXSA9IHt9O1xufSk7XG5cbnV0aWxzLmZvckVhY2goWydwb3N0JywgJ3B1dCcsICdwYXRjaCddLCBmdW5jdGlvbiBmb3JFYWNoTWV0aG9kV2l0aERhdGEobWV0aG9kKSB7XG4gIGRlZmF1bHRzLmhlYWRlcnNbbWV0aG9kXSA9IHV0aWxzLm1lcmdlKERFRkFVTFRfQ09OVEVOVF9UWVBFKTtcbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGRlZmF1bHRzO1xuXG4vKiBXRUJQQUNLIFZBUiBJTkpFQ1RJT04gKi99LmNhbGwodGhpcywgX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi8uLi8uLi9wcm9jZXNzL2Jyb3dzZXIuanMgKi8gXCIuL25vZGVfbW9kdWxlcy9wcm9jZXNzL2Jyb3dzZXIuanNcIikpKVxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9iaW5kLmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvYmluZC5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gYmluZChmbiwgdGhpc0FyZykge1xuICByZXR1cm4gZnVuY3Rpb24gd3JhcCgpIHtcbiAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoKTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3MubGVuZ3RoOyBpKyspIHtcbiAgICAgIGFyZ3NbaV0gPSBhcmd1bWVudHNbaV07XG4gICAgfVxuICAgIHJldHVybiBmbi5hcHBseSh0aGlzQXJnLCBhcmdzKTtcbiAgfTtcbn07XG5cblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvYnRvYS5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2J0b2EuanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG4vLyBidG9hIHBvbHlmaWxsIGZvciBJRTwxMCBjb3VydGVzeSBodHRwczovL2dpdGh1Yi5jb20vZGF2aWRjaGFtYmVycy9CYXNlNjQuanNcblxudmFyIGNoYXJzID0gJ0FCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXowMTIzNDU2Nzg5Ky89JztcblxuZnVuY3Rpb24gRSgpIHtcbiAgdGhpcy5tZXNzYWdlID0gJ1N0cmluZyBjb250YWlucyBhbiBpbnZhbGlkIGNoYXJhY3Rlcic7XG59XG5FLnByb3RvdHlwZSA9IG5ldyBFcnJvcjtcbkUucHJvdG90eXBlLmNvZGUgPSA1O1xuRS5wcm90b3R5cGUubmFtZSA9ICdJbnZhbGlkQ2hhcmFjdGVyRXJyb3InO1xuXG5mdW5jdGlvbiBidG9hKGlucHV0KSB7XG4gIHZhciBzdHIgPSBTdHJpbmcoaW5wdXQpO1xuICB2YXIgb3V0cHV0ID0gJyc7XG4gIGZvciAoXG4gICAgLy8gaW5pdGlhbGl6ZSByZXN1bHQgYW5kIGNvdW50ZXJcbiAgICB2YXIgYmxvY2ssIGNoYXJDb2RlLCBpZHggPSAwLCBtYXAgPSBjaGFycztcbiAgICAvLyBpZiB0aGUgbmV4dCBzdHIgaW5kZXggZG9lcyBub3QgZXhpc3Q6XG4gICAgLy8gICBjaGFuZ2UgdGhlIG1hcHBpbmcgdGFibGUgdG8gXCI9XCJcbiAgICAvLyAgIGNoZWNrIGlmIGQgaGFzIG5vIGZyYWN0aW9uYWwgZGlnaXRzXG4gICAgc3RyLmNoYXJBdChpZHggfCAwKSB8fCAobWFwID0gJz0nLCBpZHggJSAxKTtcbiAgICAvLyBcIjggLSBpZHggJSAxICogOFwiIGdlbmVyYXRlcyB0aGUgc2VxdWVuY2UgMiwgNCwgNiwgOFxuICAgIG91dHB1dCArPSBtYXAuY2hhckF0KDYzICYgYmxvY2sgPj4gOCAtIGlkeCAlIDEgKiA4KVxuICApIHtcbiAgICBjaGFyQ29kZSA9IHN0ci5jaGFyQ29kZUF0KGlkeCArPSAzIC8gNCk7XG4gICAgaWYgKGNoYXJDb2RlID4gMHhGRikge1xuICAgICAgdGhyb3cgbmV3IEUoKTtcbiAgICB9XG4gICAgYmxvY2sgPSBibG9jayA8PCA4IHwgY2hhckNvZGU7XG4gIH1cbiAgcmV0dXJuIG91dHB1dDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBidG9hO1xuXG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2J1aWxkVVJMLmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2J1aWxkVVJMLmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5cbnZhciB1dGlscyA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vLi4vdXRpbHMgKi8gXCIuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvdXRpbHMuanNcIik7XG5cbmZ1bmN0aW9uIGVuY29kZSh2YWwpIHtcbiAgcmV0dXJuIGVuY29kZVVSSUNvbXBvbmVudCh2YWwpLlxuICAgIHJlcGxhY2UoLyU0MC9naSwgJ0AnKS5cbiAgICByZXBsYWNlKC8lM0EvZ2ksICc6JykuXG4gICAgcmVwbGFjZSgvJTI0L2csICckJykuXG4gICAgcmVwbGFjZSgvJTJDL2dpLCAnLCcpLlxuICAgIHJlcGxhY2UoLyUyMC9nLCAnKycpLlxuICAgIHJlcGxhY2UoLyU1Qi9naSwgJ1snKS5cbiAgICByZXBsYWNlKC8lNUQvZ2ksICddJyk7XG59XG5cbi8qKlxuICogQnVpbGQgYSBVUkwgYnkgYXBwZW5kaW5nIHBhcmFtcyB0byB0aGUgZW5kXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHVybCBUaGUgYmFzZSBvZiB0aGUgdXJsIChlLmcuLCBodHRwOi8vd3d3Lmdvb2dsZS5jb20pXG4gKiBAcGFyYW0ge29iamVjdH0gW3BhcmFtc10gVGhlIHBhcmFtcyB0byBiZSBhcHBlbmRlZFxuICogQHJldHVybnMge3N0cmluZ30gVGhlIGZvcm1hdHRlZCB1cmxcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBidWlsZFVSTCh1cmwsIHBhcmFtcywgcGFyYW1zU2VyaWFsaXplcikge1xuICAvKmVzbGludCBuby1wYXJhbS1yZWFzc2lnbjowKi9cbiAgaWYgKCFwYXJhbXMpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG5cbiAgdmFyIHNlcmlhbGl6ZWRQYXJhbXM7XG4gIGlmIChwYXJhbXNTZXJpYWxpemVyKSB7XG4gICAgc2VyaWFsaXplZFBhcmFtcyA9IHBhcmFtc1NlcmlhbGl6ZXIocGFyYW1zKTtcbiAgfSBlbHNlIGlmICh1dGlscy5pc1VSTFNlYXJjaFBhcmFtcyhwYXJhbXMpKSB7XG4gICAgc2VyaWFsaXplZFBhcmFtcyA9IHBhcmFtcy50b1N0cmluZygpO1xuICB9IGVsc2Uge1xuICAgIHZhciBwYXJ0cyA9IFtdO1xuXG4gICAgdXRpbHMuZm9yRWFjaChwYXJhbXMsIGZ1bmN0aW9uIHNlcmlhbGl6ZSh2YWwsIGtleSkge1xuICAgICAgaWYgKHZhbCA9PT0gbnVsbCB8fCB0eXBlb2YgdmFsID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmICh1dGlscy5pc0FycmF5KHZhbCkpIHtcbiAgICAgICAga2V5ID0ga2V5ICsgJ1tdJztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhbCA9IFt2YWxdO1xuICAgICAgfVxuXG4gICAgICB1dGlscy5mb3JFYWNoKHZhbCwgZnVuY3Rpb24gcGFyc2VWYWx1ZSh2KSB7XG4gICAgICAgIGlmICh1dGlscy5pc0RhdGUodikpIHtcbiAgICAgICAgICB2ID0gdi50b0lTT1N0cmluZygpO1xuICAgICAgICB9IGVsc2UgaWYgKHV0aWxzLmlzT2JqZWN0KHYpKSB7XG4gICAgICAgICAgdiA9IEpTT04uc3RyaW5naWZ5KHYpO1xuICAgICAgICB9XG4gICAgICAgIHBhcnRzLnB1c2goZW5jb2RlKGtleSkgKyAnPScgKyBlbmNvZGUodikpO1xuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICBzZXJpYWxpemVkUGFyYW1zID0gcGFydHMuam9pbignJicpO1xuICB9XG5cbiAgaWYgKHNlcmlhbGl6ZWRQYXJhbXMpIHtcbiAgICB1cmwgKz0gKHVybC5pbmRleE9mKCc/JykgPT09IC0xID8gJz8nIDogJyYnKSArIHNlcmlhbGl6ZWRQYXJhbXM7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTtcblxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9jb21iaW5lVVJMcy5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9jb21iaW5lVVJMcy5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG4vKipcbiAqIENyZWF0ZXMgYSBuZXcgVVJMIGJ5IGNvbWJpbmluZyB0aGUgc3BlY2lmaWVkIFVSTHNcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gYmFzZVVSTCBUaGUgYmFzZSBVUkxcbiAqIEBwYXJhbSB7c3RyaW5nfSByZWxhdGl2ZVVSTCBUaGUgcmVsYXRpdmUgVVJMXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBUaGUgY29tYmluZWQgVVJMXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY29tYmluZVVSTHMoYmFzZVVSTCwgcmVsYXRpdmVVUkwpIHtcbiAgcmV0dXJuIHJlbGF0aXZlVVJMXG4gICAgPyBiYXNlVVJMLnJlcGxhY2UoL1xcLyskLywgJycpICsgJy8nICsgcmVsYXRpdmVVUkwucmVwbGFjZSgvXlxcLysvLCAnJylcbiAgICA6IGJhc2VVUkw7XG59O1xuXG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2Nvb2tpZXMuanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9jb29raWVzLmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cblxudmFyIHV0aWxzID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi8uLi91dGlscyAqLyBcIi4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi91dGlscy5qc1wiKTtcblxubW9kdWxlLmV4cG9ydHMgPSAoXG4gIHV0aWxzLmlzU3RhbmRhcmRCcm93c2VyRW52KCkgP1xuXG4gIC8vIFN0YW5kYXJkIGJyb3dzZXIgZW52cyBzdXBwb3J0IGRvY3VtZW50LmNvb2tpZVxuICAoZnVuY3Rpb24gc3RhbmRhcmRCcm93c2VyRW52KCkge1xuICAgIHJldHVybiB7XG4gICAgICB3cml0ZTogZnVuY3Rpb24gd3JpdGUobmFtZSwgdmFsdWUsIGV4cGlyZXMsIHBhdGgsIGRvbWFpbiwgc2VjdXJlKSB7XG4gICAgICAgIHZhciBjb29raWUgPSBbXTtcbiAgICAgICAgY29va2llLnB1c2gobmFtZSArICc9JyArIGVuY29kZVVSSUNvbXBvbmVudCh2YWx1ZSkpO1xuXG4gICAgICAgIGlmICh1dGlscy5pc051bWJlcihleHBpcmVzKSkge1xuICAgICAgICAgIGNvb2tpZS5wdXNoKCdleHBpcmVzPScgKyBuZXcgRGF0ZShleHBpcmVzKS50b0dNVFN0cmluZygpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh1dGlscy5pc1N0cmluZyhwYXRoKSkge1xuICAgICAgICAgIGNvb2tpZS5wdXNoKCdwYXRoPScgKyBwYXRoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh1dGlscy5pc1N0cmluZyhkb21haW4pKSB7XG4gICAgICAgICAgY29va2llLnB1c2goJ2RvbWFpbj0nICsgZG9tYWluKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChzZWN1cmUgPT09IHRydWUpIHtcbiAgICAgICAgICBjb29raWUucHVzaCgnc2VjdXJlJyk7XG4gICAgICAgIH1cblxuICAgICAgICBkb2N1bWVudC5jb29raWUgPSBjb29raWUuam9pbignOyAnKTtcbiAgICAgIH0sXG5cbiAgICAgIHJlYWQ6IGZ1bmN0aW9uIHJlYWQobmFtZSkge1xuICAgICAgICB2YXIgbWF0Y2ggPSBkb2N1bWVudC5jb29raWUubWF0Y2gobmV3IFJlZ0V4cCgnKF58O1xcXFxzKikoJyArIG5hbWUgKyAnKT0oW147XSopJykpO1xuICAgICAgICByZXR1cm4gKG1hdGNoID8gZGVjb2RlVVJJQ29tcG9uZW50KG1hdGNoWzNdKSA6IG51bGwpO1xuICAgICAgfSxcblxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUobmFtZSkge1xuICAgICAgICB0aGlzLndyaXRlKG5hbWUsICcnLCBEYXRlLm5vdygpIC0gODY0MDAwMDApO1xuICAgICAgfVxuICAgIH07XG4gIH0pKCkgOlxuXG4gIC8vIE5vbiBzdGFuZGFyZCBicm93c2VyIGVudiAod2ViIHdvcmtlcnMsIHJlYWN0LW5hdGl2ZSkgbGFjayBuZWVkZWQgc3VwcG9ydC5cbiAgKGZ1bmN0aW9uIG5vblN0YW5kYXJkQnJvd3NlckVudigpIHtcbiAgICByZXR1cm4ge1xuICAgICAgd3JpdGU6IGZ1bmN0aW9uIHdyaXRlKCkge30sXG4gICAgICByZWFkOiBmdW5jdGlvbiByZWFkKCkgeyByZXR1cm4gbnVsbDsgfSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9KSgpXG4pO1xuXG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2lzQWJzb2x1dGVVUkwuanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9pc0Fic29sdXRlVVJMLmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cblxuLyoqXG4gKiBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIHNwZWNpZmllZCBVUkwgaXMgYWJzb2x1dGVcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gdXJsIFRoZSBVUkwgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdGhlIHNwZWNpZmllZCBVUkwgaXMgYWJzb2x1dGUsIG90aGVyd2lzZSBmYWxzZVxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGlzQWJzb2x1dGVVUkwodXJsKSB7XG4gIC8vIEEgVVJMIGlzIGNvbnNpZGVyZWQgYWJzb2x1dGUgaWYgaXQgYmVnaW5zIHdpdGggXCI8c2NoZW1lPjovL1wiIG9yIFwiLy9cIiAocHJvdG9jb2wtcmVsYXRpdmUgVVJMKS5cbiAgLy8gUkZDIDM5ODYgZGVmaW5lcyBzY2hlbWUgbmFtZSBhcyBhIHNlcXVlbmNlIG9mIGNoYXJhY3RlcnMgYmVnaW5uaW5nIHdpdGggYSBsZXR0ZXIgYW5kIGZvbGxvd2VkXG4gIC8vIGJ5IGFueSBjb21iaW5hdGlvbiBvZiBsZXR0ZXJzLCBkaWdpdHMsIHBsdXMsIHBlcmlvZCwgb3IgaHlwaGVuLlxuICByZXR1cm4gL14oW2Etel1bYS16XFxkXFwrXFwtXFwuXSo6KT9cXC9cXC8vaS50ZXN0KHVybCk7XG59O1xuXG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2lzVVJMU2FtZU9yaWdpbi5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvaXNVUkxTYW1lT3JpZ2luLmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG52YXIgdXRpbHMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuLy4uL3V0aWxzICovIFwiLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL3V0aWxzLmpzXCIpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IChcbiAgdXRpbHMuaXNTdGFuZGFyZEJyb3dzZXJFbnYoKSA/XG5cbiAgLy8gU3RhbmRhcmQgYnJvd3NlciBlbnZzIGhhdmUgZnVsbCBzdXBwb3J0IG9mIHRoZSBBUElzIG5lZWRlZCB0byB0ZXN0XG4gIC8vIHdoZXRoZXIgdGhlIHJlcXVlc3QgVVJMIGlzIG9mIHRoZSBzYW1lIG9yaWdpbiBhcyBjdXJyZW50IGxvY2F0aW9uLlxuICAoZnVuY3Rpb24gc3RhbmRhcmRCcm93c2VyRW52KCkge1xuICAgIHZhciBtc2llID0gLyhtc2llfHRyaWRlbnQpL2kudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KTtcbiAgICB2YXIgdXJsUGFyc2luZ05vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgdmFyIG9yaWdpblVSTDtcblxuICAgIC8qKlxuICAgICogUGFyc2UgYSBVUkwgdG8gZGlzY292ZXIgaXQncyBjb21wb25lbnRzXG4gICAgKlxuICAgICogQHBhcmFtIHtTdHJpbmd9IHVybCBUaGUgVVJMIHRvIGJlIHBhcnNlZFxuICAgICogQHJldHVybnMge09iamVjdH1cbiAgICAqL1xuICAgIGZ1bmN0aW9uIHJlc29sdmVVUkwodXJsKSB7XG4gICAgICB2YXIgaHJlZiA9IHVybDtcblxuICAgICAgaWYgKG1zaWUpIHtcbiAgICAgICAgLy8gSUUgbmVlZHMgYXR0cmlidXRlIHNldCB0d2ljZSB0byBub3JtYWxpemUgcHJvcGVydGllc1xuICAgICAgICB1cmxQYXJzaW5nTm9kZS5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCBocmVmKTtcbiAgICAgICAgaHJlZiA9IHVybFBhcnNpbmdOb2RlLmhyZWY7XG4gICAgICB9XG5cbiAgICAgIHVybFBhcnNpbmdOb2RlLnNldEF0dHJpYnV0ZSgnaHJlZicsIGhyZWYpO1xuXG4gICAgICAvLyB1cmxQYXJzaW5nTm9kZSBwcm92aWRlcyB0aGUgVXJsVXRpbHMgaW50ZXJmYWNlIC0gaHR0cDovL3VybC5zcGVjLndoYXR3Zy5vcmcvI3VybHV0aWxzXG4gICAgICByZXR1cm4ge1xuICAgICAgICBocmVmOiB1cmxQYXJzaW5nTm9kZS5ocmVmLFxuICAgICAgICBwcm90b2NvbDogdXJsUGFyc2luZ05vZGUucHJvdG9jb2wgPyB1cmxQYXJzaW5nTm9kZS5wcm90b2NvbC5yZXBsYWNlKC86JC8sICcnKSA6ICcnLFxuICAgICAgICBob3N0OiB1cmxQYXJzaW5nTm9kZS5ob3N0LFxuICAgICAgICBzZWFyY2g6IHVybFBhcnNpbmdOb2RlLnNlYXJjaCA/IHVybFBhcnNpbmdOb2RlLnNlYXJjaC5yZXBsYWNlKC9eXFw/LywgJycpIDogJycsXG4gICAgICAgIGhhc2g6IHVybFBhcnNpbmdOb2RlLmhhc2ggPyB1cmxQYXJzaW5nTm9kZS5oYXNoLnJlcGxhY2UoL14jLywgJycpIDogJycsXG4gICAgICAgIGhvc3RuYW1lOiB1cmxQYXJzaW5nTm9kZS5ob3N0bmFtZSxcbiAgICAgICAgcG9ydDogdXJsUGFyc2luZ05vZGUucG9ydCxcbiAgICAgICAgcGF0aG5hbWU6ICh1cmxQYXJzaW5nTm9kZS5wYXRobmFtZS5jaGFyQXQoMCkgPT09ICcvJykgP1xuICAgICAgICAgICAgICAgICAgdXJsUGFyc2luZ05vZGUucGF0aG5hbWUgOlxuICAgICAgICAgICAgICAgICAgJy8nICsgdXJsUGFyc2luZ05vZGUucGF0aG5hbWVcbiAgICAgIH07XG4gICAgfVxuXG4gICAgb3JpZ2luVVJMID0gcmVzb2x2ZVVSTCh3aW5kb3cubG9jYXRpb24uaHJlZik7XG5cbiAgICAvKipcbiAgICAqIERldGVybWluZSBpZiBhIFVSTCBzaGFyZXMgdGhlIHNhbWUgb3JpZ2luIGFzIHRoZSBjdXJyZW50IGxvY2F0aW9uXG4gICAgKlxuICAgICogQHBhcmFtIHtTdHJpbmd9IHJlcXVlc3RVUkwgVGhlIFVSTCB0byB0ZXN0XG4gICAgKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiBVUkwgc2hhcmVzIHRoZSBzYW1lIG9yaWdpbiwgb3RoZXJ3aXNlIGZhbHNlXG4gICAgKi9cbiAgICByZXR1cm4gZnVuY3Rpb24gaXNVUkxTYW1lT3JpZ2luKHJlcXVlc3RVUkwpIHtcbiAgICAgIHZhciBwYXJzZWQgPSAodXRpbHMuaXNTdHJpbmcocmVxdWVzdFVSTCkpID8gcmVzb2x2ZVVSTChyZXF1ZXN0VVJMKSA6IHJlcXVlc3RVUkw7XG4gICAgICByZXR1cm4gKHBhcnNlZC5wcm90b2NvbCA9PT0gb3JpZ2luVVJMLnByb3RvY29sICYmXG4gICAgICAgICAgICBwYXJzZWQuaG9zdCA9PT0gb3JpZ2luVVJMLmhvc3QpO1xuICAgIH07XG4gIH0pKCkgOlxuXG4gIC8vIE5vbiBzdGFuZGFyZCBicm93c2VyIGVudnMgKHdlYiB3b3JrZXJzLCByZWFjdC1uYXRpdmUpIGxhY2sgbmVlZGVkIHN1cHBvcnQuXG4gIChmdW5jdGlvbiBub25TdGFuZGFyZEJyb3dzZXJFbnYoKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIGlzVVJMU2FtZU9yaWdpbigpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH07XG4gIH0pKClcbik7XG5cblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvbm9ybWFsaXplSGVhZGVyTmFtZS5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL25vcm1hbGl6ZUhlYWRlck5hbWUuanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG52YXIgdXRpbHMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuLi91dGlscyAqLyBcIi4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi91dGlscy5qc1wiKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBub3JtYWxpemVIZWFkZXJOYW1lKGhlYWRlcnMsIG5vcm1hbGl6ZWROYW1lKSB7XG4gIHV0aWxzLmZvckVhY2goaGVhZGVycywgZnVuY3Rpb24gcHJvY2Vzc0hlYWRlcih2YWx1ZSwgbmFtZSkge1xuICAgIGlmIChuYW1lICE9PSBub3JtYWxpemVkTmFtZSAmJiBuYW1lLnRvVXBwZXJDYXNlKCkgPT09IG5vcm1hbGl6ZWROYW1lLnRvVXBwZXJDYXNlKCkpIHtcbiAgICAgIGhlYWRlcnNbbm9ybWFsaXplZE5hbWVdID0gdmFsdWU7XG4gICAgICBkZWxldGUgaGVhZGVyc1tuYW1lXTtcbiAgICB9XG4gIH0pO1xufTtcblxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9wYXJzZUhlYWRlcnMuanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL3BhcnNlSGVhZGVycy5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cblxudmFyIHV0aWxzID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi8uLi91dGlscyAqLyBcIi4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi91dGlscy5qc1wiKTtcblxuLy8gSGVhZGVycyB3aG9zZSBkdXBsaWNhdGVzIGFyZSBpZ25vcmVkIGJ5IG5vZGVcbi8vIGMuZi4gaHR0cHM6Ly9ub2RlanMub3JnL2FwaS9odHRwLmh0bWwjaHR0cF9tZXNzYWdlX2hlYWRlcnNcbnZhciBpZ25vcmVEdXBsaWNhdGVPZiA9IFtcbiAgJ2FnZScsICdhdXRob3JpemF0aW9uJywgJ2NvbnRlbnQtbGVuZ3RoJywgJ2NvbnRlbnQtdHlwZScsICdldGFnJyxcbiAgJ2V4cGlyZXMnLCAnZnJvbScsICdob3N0JywgJ2lmLW1vZGlmaWVkLXNpbmNlJywgJ2lmLXVubW9kaWZpZWQtc2luY2UnLFxuICAnbGFzdC1tb2RpZmllZCcsICdsb2NhdGlvbicsICdtYXgtZm9yd2FyZHMnLCAncHJveHktYXV0aG9yaXphdGlvbicsXG4gICdyZWZlcmVyJywgJ3JldHJ5LWFmdGVyJywgJ3VzZXItYWdlbnQnXG5dO1xuXG4vKipcbiAqIFBhcnNlIGhlYWRlcnMgaW50byBhbiBvYmplY3RcbiAqXG4gKiBgYGBcbiAqIERhdGU6IFdlZCwgMjcgQXVnIDIwMTQgMDg6NTg6NDkgR01UXG4gKiBDb250ZW50LVR5cGU6IGFwcGxpY2F0aW9uL2pzb25cbiAqIENvbm5lY3Rpb246IGtlZXAtYWxpdmVcbiAqIFRyYW5zZmVyLUVuY29kaW5nOiBjaHVua2VkXG4gKiBgYGBcbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gaGVhZGVycyBIZWFkZXJzIG5lZWRpbmcgdG8gYmUgcGFyc2VkXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBIZWFkZXJzIHBhcnNlZCBpbnRvIGFuIG9iamVjdFxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHBhcnNlSGVhZGVycyhoZWFkZXJzKSB7XG4gIHZhciBwYXJzZWQgPSB7fTtcbiAgdmFyIGtleTtcbiAgdmFyIHZhbDtcbiAgdmFyIGk7XG5cbiAgaWYgKCFoZWFkZXJzKSB7IHJldHVybiBwYXJzZWQ7IH1cblxuICB1dGlscy5mb3JFYWNoKGhlYWRlcnMuc3BsaXQoJ1xcbicpLCBmdW5jdGlvbiBwYXJzZXIobGluZSkge1xuICAgIGkgPSBsaW5lLmluZGV4T2YoJzonKTtcbiAgICBrZXkgPSB1dGlscy50cmltKGxpbmUuc3Vic3RyKDAsIGkpKS50b0xvd2VyQ2FzZSgpO1xuICAgIHZhbCA9IHV0aWxzLnRyaW0obGluZS5zdWJzdHIoaSArIDEpKTtcblxuICAgIGlmIChrZXkpIHtcbiAgICAgIGlmIChwYXJzZWRba2V5XSAmJiBpZ25vcmVEdXBsaWNhdGVPZi5pbmRleE9mKGtleSkgPj0gMCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAoa2V5ID09PSAnc2V0LWNvb2tpZScpIHtcbiAgICAgICAgcGFyc2VkW2tleV0gPSAocGFyc2VkW2tleV0gPyBwYXJzZWRba2V5XSA6IFtdKS5jb25jYXQoW3ZhbF0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcGFyc2VkW2tleV0gPSBwYXJzZWRba2V5XSA/IHBhcnNlZFtrZXldICsgJywgJyArIHZhbCA6IHZhbDtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBwYXJzZWQ7XG59O1xuXG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL3NwcmVhZC5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvc3ByZWFkLmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG4vKipcbiAqIFN5bnRhY3RpYyBzdWdhciBmb3IgaW52b2tpbmcgYSBmdW5jdGlvbiBhbmQgZXhwYW5kaW5nIGFuIGFycmF5IGZvciBhcmd1bWVudHMuXG4gKlxuICogQ29tbW9uIHVzZSBjYXNlIHdvdWxkIGJlIHRvIHVzZSBgRnVuY3Rpb24ucHJvdG90eXBlLmFwcGx5YC5cbiAqXG4gKiAgYGBganNcbiAqICBmdW5jdGlvbiBmKHgsIHksIHopIHt9XG4gKiAgdmFyIGFyZ3MgPSBbMSwgMiwgM107XG4gKiAgZi5hcHBseShudWxsLCBhcmdzKTtcbiAqICBgYGBcbiAqXG4gKiBXaXRoIGBzcHJlYWRgIHRoaXMgZXhhbXBsZSBjYW4gYmUgcmUtd3JpdHRlbi5cbiAqXG4gKiAgYGBganNcbiAqICBzcHJlYWQoZnVuY3Rpb24oeCwgeSwgeikge30pKFsxLCAyLCAzXSk7XG4gKiAgYGBgXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2tcbiAqIEByZXR1cm5zIHtGdW5jdGlvbn1cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBzcHJlYWQoY2FsbGJhY2spIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIHdyYXAoYXJyKSB7XG4gICAgcmV0dXJuIGNhbGxiYWNrLmFwcGx5KG51bGwsIGFycik7XG4gIH07XG59O1xuXG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi91dGlscy5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL3V0aWxzLmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG52YXIgYmluZCA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vaGVscGVycy9iaW5kICovIFwiLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvYmluZC5qc1wiKTtcbnZhciBpc0J1ZmZlciA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIGlzLWJ1ZmZlciAqLyBcIi4vbm9kZV9tb2R1bGVzL2lzLWJ1ZmZlci9pbmRleC5qc1wiKTtcblxuLypnbG9iYWwgdG9TdHJpbmc6dHJ1ZSovXG5cbi8vIHV0aWxzIGlzIGEgbGlicmFyeSBvZiBnZW5lcmljIGhlbHBlciBmdW5jdGlvbnMgbm9uLXNwZWNpZmljIHRvIGF4aW9zXG5cbnZhciB0b1N0cmluZyA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmc7XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYW4gQXJyYXlcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhbiBBcnJheSwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzQXJyYXkodmFsKSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKHZhbCkgPT09ICdbb2JqZWN0IEFycmF5XSc7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYW4gQXJyYXlCdWZmZXJcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhbiBBcnJheUJ1ZmZlciwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzQXJyYXlCdWZmZXIodmFsKSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKHZhbCkgPT09ICdbb2JqZWN0IEFycmF5QnVmZmVyXSc7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBGb3JtRGF0YVxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGFuIEZvcm1EYXRhLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNGb3JtRGF0YSh2YWwpIHtcbiAgcmV0dXJuICh0eXBlb2YgRm9ybURhdGEgIT09ICd1bmRlZmluZWQnKSAmJiAodmFsIGluc3RhbmNlb2YgRm9ybURhdGEpO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgdmlldyBvbiBhbiBBcnJheUJ1ZmZlclxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgdmlldyBvbiBhbiBBcnJheUJ1ZmZlciwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzQXJyYXlCdWZmZXJWaWV3KHZhbCkge1xuICB2YXIgcmVzdWx0O1xuICBpZiAoKHR5cGVvZiBBcnJheUJ1ZmZlciAhPT0gJ3VuZGVmaW5lZCcpICYmIChBcnJheUJ1ZmZlci5pc1ZpZXcpKSB7XG4gICAgcmVzdWx0ID0gQXJyYXlCdWZmZXIuaXNWaWV3KHZhbCk7XG4gIH0gZWxzZSB7XG4gICAgcmVzdWx0ID0gKHZhbCkgJiYgKHZhbC5idWZmZXIpICYmICh2YWwuYnVmZmVyIGluc3RhbmNlb2YgQXJyYXlCdWZmZXIpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBTdHJpbmdcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIFN0cmluZywgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzU3RyaW5nKHZhbCkge1xuICByZXR1cm4gdHlwZW9mIHZhbCA9PT0gJ3N0cmluZyc7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBOdW1iZXJcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIE51bWJlciwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzTnVtYmVyKHZhbCkge1xuICByZXR1cm4gdHlwZW9mIHZhbCA9PT0gJ251bWJlcic7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgdW5kZWZpbmVkXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdGhlIHZhbHVlIGlzIHVuZGVmaW5lZCwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzVW5kZWZpbmVkKHZhbCkge1xuICByZXR1cm4gdHlwZW9mIHZhbCA9PT0gJ3VuZGVmaW5lZCc7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYW4gT2JqZWN0XG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYW4gT2JqZWN0LCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNPYmplY3QodmFsKSB7XG4gIHJldHVybiB2YWwgIT09IG51bGwgJiYgdHlwZW9mIHZhbCA9PT0gJ29iamVjdCc7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBEYXRlXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBEYXRlLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNEYXRlKHZhbCkge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbCh2YWwpID09PSAnW29iamVjdCBEYXRlXSc7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBGaWxlXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBGaWxlLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNGaWxlKHZhbCkge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbCh2YWwpID09PSAnW29iamVjdCBGaWxlXSc7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBCbG9iXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBCbG9iLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNCbG9iKHZhbCkge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbCh2YWwpID09PSAnW29iamVjdCBCbG9iXSc7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBGdW5jdGlvblxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgRnVuY3Rpb24sIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0Z1bmN0aW9uKHZhbCkge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbCh2YWwpID09PSAnW29iamVjdCBGdW5jdGlvbl0nO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgU3RyZWFtXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBTdHJlYW0sIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc1N0cmVhbSh2YWwpIHtcbiAgcmV0dXJuIGlzT2JqZWN0KHZhbCkgJiYgaXNGdW5jdGlvbih2YWwucGlwZSk7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBVUkxTZWFyY2hQYXJhbXMgb2JqZWN0XG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBVUkxTZWFyY2hQYXJhbXMgb2JqZWN0LCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNVUkxTZWFyY2hQYXJhbXModmFsKSB7XG4gIHJldHVybiB0eXBlb2YgVVJMU2VhcmNoUGFyYW1zICE9PSAndW5kZWZpbmVkJyAmJiB2YWwgaW5zdGFuY2VvZiBVUkxTZWFyY2hQYXJhbXM7XG59XG5cbi8qKlxuICogVHJpbSBleGNlc3Mgd2hpdGVzcGFjZSBvZmYgdGhlIGJlZ2lubmluZyBhbmQgZW5kIG9mIGEgc3RyaW5nXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHN0ciBUaGUgU3RyaW5nIHRvIHRyaW1cbiAqIEByZXR1cm5zIHtTdHJpbmd9IFRoZSBTdHJpbmcgZnJlZWQgb2YgZXhjZXNzIHdoaXRlc3BhY2VcbiAqL1xuZnVuY3Rpb24gdHJpbShzdHIpIHtcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKC9eXFxzKi8sICcnKS5yZXBsYWNlKC9cXHMqJC8sICcnKTtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgd2UncmUgcnVubmluZyBpbiBhIHN0YW5kYXJkIGJyb3dzZXIgZW52aXJvbm1lbnRcbiAqXG4gKiBUaGlzIGFsbG93cyBheGlvcyB0byBydW4gaW4gYSB3ZWIgd29ya2VyLCBhbmQgcmVhY3QtbmF0aXZlLlxuICogQm90aCBlbnZpcm9ubWVudHMgc3VwcG9ydCBYTUxIdHRwUmVxdWVzdCwgYnV0IG5vdCBmdWxseSBzdGFuZGFyZCBnbG9iYWxzLlxuICpcbiAqIHdlYiB3b3JrZXJzOlxuICogIHR5cGVvZiB3aW5kb3cgLT4gdW5kZWZpbmVkXG4gKiAgdHlwZW9mIGRvY3VtZW50IC0+IHVuZGVmaW5lZFxuICpcbiAqIHJlYWN0LW5hdGl2ZTpcbiAqICBuYXZpZ2F0b3IucHJvZHVjdCAtPiAnUmVhY3ROYXRpdmUnXG4gKi9cbmZ1bmN0aW9uIGlzU3RhbmRhcmRCcm93c2VyRW52KCkge1xuICBpZiAodHlwZW9mIG5hdmlnYXRvciAhPT0gJ3VuZGVmaW5lZCcgJiYgbmF2aWdhdG9yLnByb2R1Y3QgPT09ICdSZWFjdE5hdGl2ZScpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgcmV0dXJuIChcbiAgICB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJlxuICAgIHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCdcbiAgKTtcbn1cblxuLyoqXG4gKiBJdGVyYXRlIG92ZXIgYW4gQXJyYXkgb3IgYW4gT2JqZWN0IGludm9raW5nIGEgZnVuY3Rpb24gZm9yIGVhY2ggaXRlbS5cbiAqXG4gKiBJZiBgb2JqYCBpcyBhbiBBcnJheSBjYWxsYmFjayB3aWxsIGJlIGNhbGxlZCBwYXNzaW5nXG4gKiB0aGUgdmFsdWUsIGluZGV4LCBhbmQgY29tcGxldGUgYXJyYXkgZm9yIGVhY2ggaXRlbS5cbiAqXG4gKiBJZiAnb2JqJyBpcyBhbiBPYmplY3QgY2FsbGJhY2sgd2lsbCBiZSBjYWxsZWQgcGFzc2luZ1xuICogdGhlIHZhbHVlLCBrZXksIGFuZCBjb21wbGV0ZSBvYmplY3QgZm9yIGVhY2ggcHJvcGVydHkuXG4gKlxuICogQHBhcmFtIHtPYmplY3R8QXJyYXl9IG9iaiBUaGUgb2JqZWN0IHRvIGl0ZXJhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuIFRoZSBjYWxsYmFjayB0byBpbnZva2UgZm9yIGVhY2ggaXRlbVxuICovXG5mdW5jdGlvbiBmb3JFYWNoKG9iaiwgZm4pIHtcbiAgLy8gRG9uJ3QgYm90aGVyIGlmIG5vIHZhbHVlIHByb3ZpZGVkXG4gIGlmIChvYmogPT09IG51bGwgfHwgdHlwZW9mIG9iaiA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvLyBGb3JjZSBhbiBhcnJheSBpZiBub3QgYWxyZWFkeSBzb21ldGhpbmcgaXRlcmFibGVcbiAgaWYgKHR5cGVvZiBvYmogIT09ICdvYmplY3QnKSB7XG4gICAgLyplc2xpbnQgbm8tcGFyYW0tcmVhc3NpZ246MCovXG4gICAgb2JqID0gW29ial07XG4gIH1cblxuICBpZiAoaXNBcnJheShvYmopKSB7XG4gICAgLy8gSXRlcmF0ZSBvdmVyIGFycmF5IHZhbHVlc1xuICAgIGZvciAodmFyIGkgPSAwLCBsID0gb2JqLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgZm4uY2FsbChudWxsLCBvYmpbaV0sIGksIG9iaik7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIC8vIEl0ZXJhdGUgb3ZlciBvYmplY3Qga2V5c1xuICAgIGZvciAodmFyIGtleSBpbiBvYmopIHtcbiAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSB7XG4gICAgICAgIGZuLmNhbGwobnVsbCwgb2JqW2tleV0sIGtleSwgb2JqKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBBY2NlcHRzIHZhcmFyZ3MgZXhwZWN0aW5nIGVhY2ggYXJndW1lbnQgdG8gYmUgYW4gb2JqZWN0LCB0aGVuXG4gKiBpbW11dGFibHkgbWVyZ2VzIHRoZSBwcm9wZXJ0aWVzIG9mIGVhY2ggb2JqZWN0IGFuZCByZXR1cm5zIHJlc3VsdC5cbiAqXG4gKiBXaGVuIG11bHRpcGxlIG9iamVjdHMgY29udGFpbiB0aGUgc2FtZSBrZXkgdGhlIGxhdGVyIG9iamVjdCBpblxuICogdGhlIGFyZ3VtZW50cyBsaXN0IHdpbGwgdGFrZSBwcmVjZWRlbmNlLlxuICpcbiAqIEV4YW1wbGU6XG4gKlxuICogYGBganNcbiAqIHZhciByZXN1bHQgPSBtZXJnZSh7Zm9vOiAxMjN9LCB7Zm9vOiA0NTZ9KTtcbiAqIGNvbnNvbGUubG9nKHJlc3VsdC5mb28pOyAvLyBvdXRwdXRzIDQ1NlxuICogYGBgXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IG9iajEgT2JqZWN0IHRvIG1lcmdlXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXN1bHQgb2YgYWxsIG1lcmdlIHByb3BlcnRpZXNcbiAqL1xuZnVuY3Rpb24gbWVyZ2UoLyogb2JqMSwgb2JqMiwgb2JqMywgLi4uICovKSB7XG4gIHZhciByZXN1bHQgPSB7fTtcbiAgZnVuY3Rpb24gYXNzaWduVmFsdWUodmFsLCBrZXkpIHtcbiAgICBpZiAodHlwZW9mIHJlc3VsdFtrZXldID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgdmFsID09PSAnb2JqZWN0Jykge1xuICAgICAgcmVzdWx0W2tleV0gPSBtZXJnZShyZXN1bHRba2V5XSwgdmFsKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzdWx0W2tleV0gPSB2YWw7XG4gICAgfVxuICB9XG5cbiAgZm9yICh2YXIgaSA9IDAsIGwgPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgZm9yRWFjaChhcmd1bWVudHNbaV0sIGFzc2lnblZhbHVlKTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIEV4dGVuZHMgb2JqZWN0IGEgYnkgbXV0YWJseSBhZGRpbmcgdG8gaXQgdGhlIHByb3BlcnRpZXMgb2Ygb2JqZWN0IGIuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGEgVGhlIG9iamVjdCB0byBiZSBleHRlbmRlZFxuICogQHBhcmFtIHtPYmplY3R9IGIgVGhlIG9iamVjdCB0byBjb3B5IHByb3BlcnRpZXMgZnJvbVxuICogQHBhcmFtIHtPYmplY3R9IHRoaXNBcmcgVGhlIG9iamVjdCB0byBiaW5kIGZ1bmN0aW9uIHRvXG4gKiBAcmV0dXJuIHtPYmplY3R9IFRoZSByZXN1bHRpbmcgdmFsdWUgb2Ygb2JqZWN0IGFcbiAqL1xuZnVuY3Rpb24gZXh0ZW5kKGEsIGIsIHRoaXNBcmcpIHtcbiAgZm9yRWFjaChiLCBmdW5jdGlvbiBhc3NpZ25WYWx1ZSh2YWwsIGtleSkge1xuICAgIGlmICh0aGlzQXJnICYmIHR5cGVvZiB2YWwgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGFba2V5XSA9IGJpbmQodmFsLCB0aGlzQXJnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYVtrZXldID0gdmFsO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiBhO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgaXNBcnJheTogaXNBcnJheSxcbiAgaXNBcnJheUJ1ZmZlcjogaXNBcnJheUJ1ZmZlcixcbiAgaXNCdWZmZXI6IGlzQnVmZmVyLFxuICBpc0Zvcm1EYXRhOiBpc0Zvcm1EYXRhLFxuICBpc0FycmF5QnVmZmVyVmlldzogaXNBcnJheUJ1ZmZlclZpZXcsXG4gIGlzU3RyaW5nOiBpc1N0cmluZyxcbiAgaXNOdW1iZXI6IGlzTnVtYmVyLFxuICBpc09iamVjdDogaXNPYmplY3QsXG4gIGlzVW5kZWZpbmVkOiBpc1VuZGVmaW5lZCxcbiAgaXNEYXRlOiBpc0RhdGUsXG4gIGlzRmlsZTogaXNGaWxlLFxuICBpc0Jsb2I6IGlzQmxvYixcbiAgaXNGdW5jdGlvbjogaXNGdW5jdGlvbixcbiAgaXNTdHJlYW06IGlzU3RyZWFtLFxuICBpc1VSTFNlYXJjaFBhcmFtczogaXNVUkxTZWFyY2hQYXJhbXMsXG4gIGlzU3RhbmRhcmRCcm93c2VyRW52OiBpc1N0YW5kYXJkQnJvd3NlckVudixcbiAgZm9yRWFjaDogZm9yRWFjaCxcbiAgbWVyZ2U6IG1lcmdlLFxuICBleHRlbmQ6IGV4dGVuZCxcbiAgdHJpbTogdHJpbVxufTtcblxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL25vZGVfbW9kdWxlcy9pcy1idWZmZXIvaW5kZXguanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vbm9kZV9tb2R1bGVzL2lzLWJ1ZmZlci9pbmRleC5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxuLyohXG4gKiBEZXRlcm1pbmUgaWYgYW4gb2JqZWN0IGlzIGEgQnVmZmVyXG4gKlxuICogQGF1dGhvciAgIEZlcm9zcyBBYm91a2hhZGlqZWggPGh0dHBzOi8vZmVyb3NzLm9yZz5cbiAqIEBsaWNlbnNlICBNSVRcbiAqL1xuXG4vLyBUaGUgX2lzQnVmZmVyIGNoZWNrIGlzIGZvciBTYWZhcmkgNS03IHN1cHBvcnQsIGJlY2F1c2UgaXQncyBtaXNzaW5nXG4vLyBPYmplY3QucHJvdG90eXBlLmNvbnN0cnVjdG9yLiBSZW1vdmUgdGhpcyBldmVudHVhbGx5XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChvYmopIHtcbiAgcmV0dXJuIG9iaiAhPSBudWxsICYmIChpc0J1ZmZlcihvYmopIHx8IGlzU2xvd0J1ZmZlcihvYmopIHx8ICEhb2JqLl9pc0J1ZmZlcilcbn1cblxuZnVuY3Rpb24gaXNCdWZmZXIgKG9iaikge1xuICByZXR1cm4gISFvYmouY29uc3RydWN0b3IgJiYgdHlwZW9mIG9iai5jb25zdHJ1Y3Rvci5pc0J1ZmZlciA9PT0gJ2Z1bmN0aW9uJyAmJiBvYmouY29uc3RydWN0b3IuaXNCdWZmZXIob2JqKVxufVxuXG4vLyBGb3IgTm9kZSB2MC4xMCBzdXBwb3J0LiBSZW1vdmUgdGhpcyBldmVudHVhbGx5LlxuZnVuY3Rpb24gaXNTbG93QnVmZmVyIChvYmopIHtcbiAgcmV0dXJuIHR5cGVvZiBvYmoucmVhZEZsb2F0TEUgPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIG9iai5zbGljZSA9PT0gJ2Z1bmN0aW9uJyAmJiBpc0J1ZmZlcihvYmouc2xpY2UoMCwgMCkpXG59XG5cblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9ub2RlX21vZHVsZXMvcHJvY2Vzcy9icm93c2VyLmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL25vZGVfbW9kdWxlcy9wcm9jZXNzL2Jyb3dzZXIuanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cbi8vIHNoaW0gZm9yIHVzaW5nIHByb2Nlc3MgaW4gYnJvd3NlclxudmFyIHByb2Nlc3MgPSBtb2R1bGUuZXhwb3J0cyA9IHt9O1xuXG4vLyBjYWNoZWQgZnJvbSB3aGF0ZXZlciBnbG9iYWwgaXMgcHJlc2VudCBzbyB0aGF0IHRlc3QgcnVubmVycyB0aGF0IHN0dWIgaXRcbi8vIGRvbid0IGJyZWFrIHRoaW5ncy4gIEJ1dCB3ZSBuZWVkIHRvIHdyYXAgaXQgaW4gYSB0cnkgY2F0Y2ggaW4gY2FzZSBpdCBpc1xuLy8gd3JhcHBlZCBpbiBzdHJpY3QgbW9kZSBjb2RlIHdoaWNoIGRvZXNuJ3QgZGVmaW5lIGFueSBnbG9iYWxzLiAgSXQncyBpbnNpZGUgYVxuLy8gZnVuY3Rpb24gYmVjYXVzZSB0cnkvY2F0Y2hlcyBkZW9wdGltaXplIGluIGNlcnRhaW4gZW5naW5lcy5cblxudmFyIGNhY2hlZFNldFRpbWVvdXQ7XG52YXIgY2FjaGVkQ2xlYXJUaW1lb3V0O1xuXG5mdW5jdGlvbiBkZWZhdWx0U2V0VGltb3V0KCkge1xuICAgIHRocm93IG5ldyBFcnJvcignc2V0VGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuZnVuY3Rpb24gZGVmYXVsdENsZWFyVGltZW91dCAoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdjbGVhclRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbihmdW5jdGlvbiAoKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBzZXRUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBjbGVhclRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgfVxufSAoKSlcbmZ1bmN0aW9uIHJ1blRpbWVvdXQoZnVuKSB7XG4gICAgaWYgKGNhY2hlZFNldFRpbWVvdXQgPT09IHNldFRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIC8vIGlmIHNldFRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRTZXRUaW1lb3V0ID09PSBkZWZhdWx0U2V0VGltb3V0IHx8ICFjYWNoZWRTZXRUaW1lb3V0KSAmJiBzZXRUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfSBjYXRjaChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbChudWxsLCBmdW4sIDApO1xuICAgICAgICB9IGNhdGNoKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3JcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwodGhpcywgZnVuLCAwKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG59XG5mdW5jdGlvbiBydW5DbGVhclRpbWVvdXQobWFya2VyKSB7XG4gICAgaWYgKGNhY2hlZENsZWFyVGltZW91dCA9PT0gY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIC8vIGlmIGNsZWFyVGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZENsZWFyVGltZW91dCA9PT0gZGVmYXVsdENsZWFyVGltZW91dCB8fCAhY2FjaGVkQ2xlYXJUaW1lb3V0KSAmJiBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0ICB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKG51bGwsIG1hcmtlcik7XG4gICAgICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3IuXG4gICAgICAgICAgICAvLyBTb21lIHZlcnNpb25zIG9mIEkuRS4gaGF2ZSBkaWZmZXJlbnQgcnVsZXMgZm9yIGNsZWFyVGltZW91dCB2cyBzZXRUaW1lb3V0XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwodGhpcywgbWFya2VyKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG5cbn1cbnZhciBxdWV1ZSA9IFtdO1xudmFyIGRyYWluaW5nID0gZmFsc2U7XG52YXIgY3VycmVudFF1ZXVlO1xudmFyIHF1ZXVlSW5kZXggPSAtMTtcblxuZnVuY3Rpb24gY2xlYW5VcE5leHRUaWNrKCkge1xuICAgIGlmICghZHJhaW5pbmcgfHwgIWN1cnJlbnRRdWV1ZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgaWYgKGN1cnJlbnRRdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgcXVldWUgPSBjdXJyZW50UXVldWUuY29uY2F0KHF1ZXVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgfVxuICAgIGlmIChxdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgZHJhaW5RdWV1ZSgpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZHJhaW5RdWV1ZSgpIHtcbiAgICBpZiAoZHJhaW5pbmcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgdGltZW91dCA9IHJ1blRpbWVvdXQoY2xlYW5VcE5leHRUaWNrKTtcbiAgICBkcmFpbmluZyA9IHRydWU7XG5cbiAgICB2YXIgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIHdoaWxlKGxlbikge1xuICAgICAgICBjdXJyZW50UXVldWUgPSBxdWV1ZTtcbiAgICAgICAgcXVldWUgPSBbXTtcbiAgICAgICAgd2hpbGUgKCsrcXVldWVJbmRleCA8IGxlbikge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRRdWV1ZSkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRRdWV1ZVtxdWV1ZUluZGV4XS5ydW4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgICAgIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB9XG4gICAgY3VycmVudFF1ZXVlID0gbnVsbDtcbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIHJ1bkNsZWFyVGltZW91dCh0aW1lb3V0KTtcbn1cblxucHJvY2Vzcy5uZXh0VGljayA9IGZ1bmN0aW9uIChmdW4pIHtcbiAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoIC0gMSk7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBhcmdzW2kgLSAxXSA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBxdWV1ZS5wdXNoKG5ldyBJdGVtKGZ1biwgYXJncykpO1xuICAgIGlmIChxdWV1ZS5sZW5ndGggPT09IDEgJiYgIWRyYWluaW5nKSB7XG4gICAgICAgIHJ1blRpbWVvdXQoZHJhaW5RdWV1ZSk7XG4gICAgfVxufTtcblxuLy8gdjggbGlrZXMgcHJlZGljdGlibGUgb2JqZWN0c1xuZnVuY3Rpb24gSXRlbShmdW4sIGFycmF5KSB7XG4gICAgdGhpcy5mdW4gPSBmdW47XG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xufVxuSXRlbS5wcm90b3R5cGUucnVuID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuZnVuLmFwcGx5KG51bGwsIHRoaXMuYXJyYXkpO1xufTtcbnByb2Nlc3MudGl0bGUgPSAnYnJvd3Nlcic7XG5wcm9jZXNzLmJyb3dzZXIgPSB0cnVlO1xucHJvY2Vzcy5lbnYgPSB7fTtcbnByb2Nlc3MuYXJndiA9IFtdO1xucHJvY2Vzcy52ZXJzaW9uID0gJyc7IC8vIGVtcHR5IHN0cmluZyB0byBhdm9pZCByZWdleHAgaXNzdWVzXG5wcm9jZXNzLnZlcnNpb25zID0ge307XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5wcm9jZXNzLm9uID0gbm9vcDtcbnByb2Nlc3MuYWRkTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5vbmNlID0gbm9vcDtcbnByb2Nlc3Mub2ZmID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVBbGxMaXN0ZW5lcnMgPSBub29wO1xucHJvY2Vzcy5lbWl0ID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZE9uY2VMaXN0ZW5lciA9IG5vb3A7XG5cbnByb2Nlc3MubGlzdGVuZXJzID0gZnVuY3Rpb24gKG5hbWUpIHsgcmV0dXJuIFtdIH1cblxucHJvY2Vzcy5iaW5kaW5nID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuYmluZGluZyBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xuXG5wcm9jZXNzLmN3ZCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICcvJyB9O1xucHJvY2Vzcy5jaGRpciA9IGZ1bmN0aW9uIChkaXIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuY2hkaXIgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcbnByb2Nlc3MudW1hc2sgPSBmdW5jdGlvbigpIHsgcmV0dXJuIDA7IH07XG5cblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9zcmMvY2hhbm5lbHMvY2hhbm5lbC5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vc3JjL2NoYW5uZWxzL2NoYW5uZWwuanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBleHBvcnRzIHByb3ZpZGVkOiBDaGFubmVsICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBfX3dlYnBhY2tfZXhwb3J0c19fLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yKF9fd2VicGFja19leHBvcnRzX18pO1xuLyogaGFybW9ueSBleHBvcnQgKGJpbmRpbmcpICovIF9fd2VicGFja19yZXF1aXJlX18uZChfX3dlYnBhY2tfZXhwb3J0c19fLCBcIkNoYW5uZWxcIiwgZnVuY3Rpb24oKSB7IHJldHVybiBDaGFubmVsOyB9KTtcbi8qIGhhcm1vbnkgaW1wb3J0ICovIHZhciBfZXZlbnRzX2Rpc3BhdGNoZXJfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfXyA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4uL2V2ZW50cy9kaXNwYXRjaGVyICovIFwiLi9zcmMvZXZlbnRzL2Rpc3BhdGNoZXIuanNcIik7XG5mdW5jdGlvbiBfdHlwZW9mKG9iaikgeyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9OyB9IGVsc2UgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07IH0gcmV0dXJuIF90eXBlb2Yob2JqKTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9XG5cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKGNhbGwgJiYgKF90eXBlb2YoY2FsbCkgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikpIHsgcmV0dXJuIGNhbGw7IH0gcmV0dXJuIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZik7IH1cblxuZnVuY3Rpb24gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKSB7IGlmIChzZWxmID09PSB2b2lkIDApIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IF9nZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5nZXRQcm90b3R5cGVPZiA6IGZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IHJldHVybiBvLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2Yobyk7IH07IHJldHVybiBfZ2V0UHJvdG90eXBlT2Yobyk7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uXCIpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIF9zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcyk7IH1cblxuZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgX3NldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IG8uX19wcm90b19fID0gcDsgcmV0dXJuIG87IH07IHJldHVybiBfc2V0UHJvdG90eXBlT2YobywgcCk7IH1cblxuXG52YXIgQ2hhbm5lbCA9XG4vKiNfX1BVUkVfXyovXG5mdW5jdGlvbiAoX0Rpc3BhdGNoZXIpIHtcbiAgX2luaGVyaXRzKENoYW5uZWwsIF9EaXNwYXRjaGVyKTtcblxuICBmdW5jdGlvbiBDaGFubmVsKG5hbWUsIHB1c2hlcikge1xuICAgIHZhciBfdGhpcztcblxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBDaGFubmVsKTtcblxuICAgIF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX2dldFByb3RvdHlwZU9mKENoYW5uZWwpLmNhbGwodGhpcykpO1xuICAgIF90aGlzLm5hbWUgPSBuYW1lO1xuICAgIF90aGlzLnB1c2hlciA9IHB1c2hlcjtcblxuICAgIGlmIChfdGhpcy5wdXNoZXIuc29ja2V0LnN0YXRlID09IDEpIHtcbiAgICAgIF90aGlzLnN1YnNjcmliZSgpO1xuICAgIH1cblxuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhDaGFubmVsLCBbe1xuICAgIGtleTogXCJzdWJzY3JpYmVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gc3Vic2NyaWJlKCkge1xuICAgICAgdGhpcy5wdXNoZXIuc2VuZCh7XG4gICAgICAgIGV2ZW50OiAnc3Vic2NyaWJlJyxcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgIGNoYW5uZWw6IHRoaXMubmFtZVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gQ2hhbm5lbDtcbn0oX2V2ZW50c19kaXNwYXRjaGVyX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX19bXCJEaXNwYXRjaGVyXCJdKTtcblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9zcmMvY2hhbm5lbHMvbWFubmFnZXIuanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9zcmMvY2hhbm5lbHMvbWFubmFnZXIuanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgZXhwb3J0cyBwcm92aWRlZDogTWFubmFnZXIgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIF9fd2VicGFja19leHBvcnRzX18sIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIoX193ZWJwYWNrX2V4cG9ydHNfXyk7XG4vKiBoYXJtb255IGV4cG9ydCAoYmluZGluZykgKi8gX193ZWJwYWNrX3JlcXVpcmVfXy5kKF9fd2VicGFja19leHBvcnRzX18sIFwiTWFubmFnZXJcIiwgZnVuY3Rpb24oKSB7IHJldHVybiBNYW5uYWdlcjsgfSk7XG4vKiBoYXJtb255IGltcG9ydCAqLyB2YXIgX2NoYW5uZWxfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfXyA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vY2hhbm5lbCAqLyBcIi4vc3JjL2NoYW5uZWxzL2NoYW5uZWwuanNcIik7XG4vKiBoYXJtb255IGltcG9ydCAqLyB2YXIgX3ByZXNlbmNlX2NoYW5uZWxfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzFfXyA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vcHJlc2VuY2VfY2hhbm5lbCAqLyBcIi4vc3JjL2NoYW5uZWxzL3ByZXNlbmNlX2NoYW5uZWwuanNcIik7XG4vKiBoYXJtb255IGltcG9ydCAqLyB2YXIgX3ByaXZhdGVfY2hhbm5lbF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMl9fID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9wcml2YXRlX2NoYW5uZWwgKi8gXCIuL3NyYy9jaGFubmVscy9wcml2YXRlX2NoYW5uZWwuanNcIik7XG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9XG5cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9XG5cblxuXG5cbnZhciBNYW5uYWdlciA9XG4vKiNfX1BVUkVfXyovXG5mdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIE1hbm5hZ2VyKCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBNYW5uYWdlcik7XG5cbiAgICB0aGlzLmNoYW5uZWxzID0ge307XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoTWFubmFnZXIsIFt7XG4gICAga2V5OiBcImFkZFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBhZGQobmFtZSwgcHVzaGVyKSB7XG4gICAgICBpZiAoIXRoaXMuY2hhbm5lbHNbbmFtZV0pIHtcbiAgICAgICAgdGhpcy5jaGFubmVsc1tuYW1lXSA9IGNyZWF0ZUNoYW5uZWwobmFtZSwgcHVzaGVyKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuY2hhbm5lbHNbbmFtZV07XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImFsbFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBhbGwoKSB7XG4gICAgICByZXR1cm4gT2JqZWN0LmtleXModGhpcy5jaGFubmVscyk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImZpbmRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZmluZChuYW1lKSB7XG4gICAgICByZXR1cm4gdGhpcy5jaGFubmVsc1tuYW1lXTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwicmVtb3ZlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbW92ZShuYW1lKSB7XG4gICAgICB2YXIgY2hhbm5lbCA9IHRoaXMuY2hhbm5lbHNbbmFtZV07XG4gICAgICBkZWxldGUgdGhpcy5jaGFubmVsc1tuYW1lXTtcbiAgICAgIHJldHVybiBjaGFubmVsO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJzdWJzY3JpYmVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gc3Vic2NyaWJlKCkge1xuICAgICAgZm9yICh2YXIgaSBpbiB0aGlzLmNoYW5uZWxzKSB7XG4gICAgICAgIHRoaXMuY2hhbm5lbHNbaV0uc3Vic2NyaWJlKCk7XG4gICAgICB9XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIE1hbm5hZ2VyO1xufSgpO1xuXG5mdW5jdGlvbiBjcmVhdGVDaGFubmVsKG5hbWUsIHB1c2hlcikge1xuICBpZiAobmFtZS5pbmRleE9mKCdwcml2YXRlLScpID09PSAwKSB7XG4gICAgcmV0dXJuIG5ldyBfcHJpdmF0ZV9jaGFubmVsX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8yX19bXCJQcml2YXRlQ2hhbm5lbFwiXShuYW1lLCBwdXNoZXIpO1xuICB9IGVsc2UgaWYgKG5hbWUuaW5kZXhPZigncHJlc2VuY2UtJykgPT09IDApIHtcbiAgICByZXR1cm4gbmV3IF9wcmVzZW5jZV9jaGFubmVsX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8xX19bXCJQcmVzZW5jZUNoYW5uZWxcIl0obmFtZSwgcHVzaGVyKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gbmV3IF9jaGFubmVsX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX19bXCJDaGFubmVsXCJdKG5hbWUsIHB1c2hlcik7XG4gIH1cbn1cblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9zcmMvY2hhbm5lbHMvcHJlc2VuY2VfY2hhbm5lbC5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vc3JjL2NoYW5uZWxzL3ByZXNlbmNlX2NoYW5uZWwuanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBleHBvcnRzIHByb3ZpZGVkOiBQcmVzZW5jZUNoYW5uZWwgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIF9fd2VicGFja19leHBvcnRzX18sIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIoX193ZWJwYWNrX2V4cG9ydHNfXyk7XG4vKiBoYXJtb255IGV4cG9ydCAoYmluZGluZykgKi8gX193ZWJwYWNrX3JlcXVpcmVfXy5kKF9fd2VicGFja19leHBvcnRzX18sIFwiUHJlc2VuY2VDaGFubmVsXCIsIGZ1bmN0aW9uKCkgeyByZXR1cm4gUHJlc2VuY2VDaGFubmVsOyB9KTtcbi8qIGhhcm1vbnkgaW1wb3J0ICovIHZhciBfZXZlbnRzX2Rpc3BhdGNoZXJfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfXyA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4uL2V2ZW50cy9kaXNwYXRjaGVyICovIFwiLi9zcmMvZXZlbnRzL2Rpc3BhdGNoZXIuanNcIik7XG5mdW5jdGlvbiBfdHlwZW9mKG9iaikgeyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9OyB9IGVsc2UgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07IH0gcmV0dXJuIF90eXBlb2Yob2JqKTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9XG5cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKGNhbGwgJiYgKF90eXBlb2YoY2FsbCkgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikpIHsgcmV0dXJuIGNhbGw7IH0gcmV0dXJuIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZik7IH1cblxuZnVuY3Rpb24gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKSB7IGlmIChzZWxmID09PSB2b2lkIDApIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IF9nZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5nZXRQcm90b3R5cGVPZiA6IGZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IHJldHVybiBvLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2Yobyk7IH07IHJldHVybiBfZ2V0UHJvdG90eXBlT2Yobyk7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uXCIpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIF9zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcyk7IH1cblxuZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgX3NldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IG8uX19wcm90b19fID0gcDsgcmV0dXJuIG87IH07IHJldHVybiBfc2V0UHJvdG90eXBlT2YobywgcCk7IH1cblxuXG52YXIgUHJlc2VuY2VDaGFubmVsID1cbi8qI19fUFVSRV9fKi9cbmZ1bmN0aW9uIChfRGlzcGF0Y2hlcikge1xuICBfaW5oZXJpdHMoUHJlc2VuY2VDaGFubmVsLCBfRGlzcGF0Y2hlcik7XG5cbiAgZnVuY3Rpb24gUHJlc2VuY2VDaGFubmVsKG5hbWUsIHB1c2hlcikge1xuICAgIHZhciBfdGhpcztcblxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBQcmVzZW5jZUNoYW5uZWwpO1xuXG4gICAgX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfZ2V0UHJvdG90eXBlT2YoUHJlc2VuY2VDaGFubmVsKS5jYWxsKHRoaXMpKTtcbiAgICBfdGhpcy5uYW1lID0gbmFtZTtcbiAgICBfdGhpcy5wdXNoZXIgPSBwdXNoZXI7XG4gICAgX3RoaXMuYXV0aCA9IG51bGw7XG5cbiAgICBpZiAoX3RoaXMucHVzaGVyLnNvY2tldC5zdGF0ZSA9PSAxKSB7XG4gICAgICBfdGhpcy5zdWJzY3JpYmUoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoUHJlc2VuY2VDaGFubmVsLCBbe1xuICAgIGtleTogXCJzdWJzY3JpYmVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gc3Vic2NyaWJlKCkge1xuICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgIHRoaXMucHVzaGVyLmF1dGgodGhpcy5uYW1lLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICBfdGhpczIuYXV0aCA9IGUuZGF0YS5hdXRoO1xuXG4gICAgICAgIF90aGlzMi5wdXNoZXIuc2VuZCh7XG4gICAgICAgICAgZXZlbnQ6ICdzdWJzY3JpYmUnLFxuICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgIGNoYW5uZWw6IF90aGlzMi5uYW1lLFxuICAgICAgICAgICAgYXV0aDogX3RoaXMyLmF1dGgsXG4gICAgICAgICAgICBjaGFubmVsX2RhdGE6IGUuZGF0YS5jaGFubmVsX2RhdGFcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIFByZXNlbmNlQ2hhbm5lbDtcbn0oX2V2ZW50c19kaXNwYXRjaGVyX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX19bXCJEaXNwYXRjaGVyXCJdKTtcblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9zcmMvY2hhbm5lbHMvcHJpdmF0ZV9jaGFubmVsLmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL3NyYy9jaGFubmVscy9wcml2YXRlX2NoYW5uZWwuanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIGV4cG9ydHMgcHJvdmlkZWQ6IFByaXZhdGVDaGFubmVsICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBfX3dlYnBhY2tfZXhwb3J0c19fLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yKF9fd2VicGFja19leHBvcnRzX18pO1xuLyogaGFybW9ueSBleHBvcnQgKGJpbmRpbmcpICovIF9fd2VicGFja19yZXF1aXJlX18uZChfX3dlYnBhY2tfZXhwb3J0c19fLCBcIlByaXZhdGVDaGFubmVsXCIsIGZ1bmN0aW9uKCkgeyByZXR1cm4gUHJpdmF0ZUNoYW5uZWw7IH0pO1xuLyogaGFybW9ueSBpbXBvcnQgKi8gdmFyIF9ldmVudHNfZGlzcGF0Y2hlcl9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi4vZXZlbnRzL2Rpc3BhdGNoZXIgKi8gXCIuL3NyYy9ldmVudHMvZGlzcGF0Y2hlci5qc1wiKTtcbmZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH07IH0gZWxzZSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTsgfSByZXR1cm4gX3R5cGVvZihvYmopOyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoY2FsbCAmJiAoX3R5cGVvZihjYWxsKSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSkgeyByZXR1cm4gY2FsbDsgfSByZXR1cm4gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKTsgfVxuXG5mdW5jdGlvbiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpIHsgaWYgKHNlbGYgPT09IHZvaWQgMCkgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIHNlbGY7IH1cblxuZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgX2dldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LmdldFByb3RvdHlwZU9mIDogZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgcmV0dXJuIG8uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihvKTsgfTsgcmV0dXJuIF9nZXRQcm90b3R5cGVPZihvKTsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgX3NldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKTsgfVxuXG5mdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgby5fX3Byb3RvX18gPSBwOyByZXR1cm4gbzsgfTsgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihvLCBwKTsgfVxuXG5cbnZhciBQcml2YXRlQ2hhbm5lbCA9XG4vKiNfX1BVUkVfXyovXG5mdW5jdGlvbiAoX0Rpc3BhdGNoZXIpIHtcbiAgX2luaGVyaXRzKFByaXZhdGVDaGFubmVsLCBfRGlzcGF0Y2hlcik7XG5cbiAgZnVuY3Rpb24gUHJpdmF0ZUNoYW5uZWwobmFtZSwgcHVzaGVyKSB7XG4gICAgdmFyIF90aGlzO1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFByaXZhdGVDaGFubmVsKTtcblxuICAgIF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX2dldFByb3RvdHlwZU9mKFByaXZhdGVDaGFubmVsKS5jYWxsKHRoaXMpKTtcbiAgICBfdGhpcy5uYW1lID0gbmFtZTtcbiAgICBfdGhpcy5wdXNoZXIgPSBwdXNoZXI7XG4gICAgX3RoaXMuYXV0aCA9IG51bGw7XG5cbiAgICBpZiAoX3RoaXMucHVzaGVyLnNvY2tldC5zdGF0ZSA9PSAxKSB7XG4gICAgICBfdGhpcy5zdWJzY3JpYmUoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoUHJpdmF0ZUNoYW5uZWwsIFt7XG4gICAga2V5OiBcInN1YnNjcmliZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzdWJzY3JpYmUoKSB7XG4gICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgdGhpcy5wdXNoZXIuYXV0aCh0aGlzLm5hbWUsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIF90aGlzMi5hdXRoID0gZS5kYXRhLmF1dGg7XG5cbiAgICAgICAgX3RoaXMyLnB1c2hlci5zZW5kKHtcbiAgICAgICAgICBldmVudDogJ3N1YnNjcmliZScsXG4gICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgY2hhbm5lbDogX3RoaXMyLm5hbWUsXG4gICAgICAgICAgICBhdXRoOiBfdGhpczIuYXV0aFxuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gUHJpdmF0ZUNoYW5uZWw7XG59KF9ldmVudHNfZGlzcGF0Y2hlcl9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fW1wiRGlzcGF0Y2hlclwiXSk7XG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vc3JjL2Nvbm5lY3Rpb24vc29ja2V0LmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vc3JjL2Nvbm5lY3Rpb24vc29ja2V0LmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIGV4cG9ydHMgcHJvdmlkZWQ6IFNvY2tldCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgX193ZWJwYWNrX2V4cG9ydHNfXywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcbl9fd2VicGFja19yZXF1aXJlX18ucihfX3dlYnBhY2tfZXhwb3J0c19fKTtcbi8qIGhhcm1vbnkgZXhwb3J0IChiaW5kaW5nKSAqLyBfX3dlYnBhY2tfcmVxdWlyZV9fLmQoX193ZWJwYWNrX2V4cG9ydHNfXywgXCJTb2NrZXRcIiwgZnVuY3Rpb24oKSB7IHJldHVybiBTb2NrZXQ7IH0pO1xuLyogaGFybW9ueSBpbXBvcnQgKi8gdmFyIF9ldmVudHNfZGlzcGF0Y2hlcl9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi4vZXZlbnRzL2Rpc3BhdGNoZXIgKi8gXCIuL3NyYy9ldmVudHMvZGlzcGF0Y2hlci5qc1wiKTtcbmZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH07IH0gZWxzZSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTsgfSByZXR1cm4gX3R5cGVvZihvYmopOyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoY2FsbCAmJiAoX3R5cGVvZihjYWxsKSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSkgeyByZXR1cm4gY2FsbDsgfSByZXR1cm4gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKTsgfVxuXG5mdW5jdGlvbiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpIHsgaWYgKHNlbGYgPT09IHZvaWQgMCkgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIHNlbGY7IH1cblxuZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgX2dldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LmdldFByb3RvdHlwZU9mIDogZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgcmV0dXJuIG8uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihvKTsgfTsgcmV0dXJuIF9nZXRQcm90b3R5cGVPZihvKTsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgX3NldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKTsgfVxuXG5mdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgby5fX3Byb3RvX18gPSBwOyByZXR1cm4gbzsgfTsgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihvLCBwKTsgfVxuXG5cbnZhciBTb2NrZXQgPVxuLyojX19QVVJFX18qL1xuZnVuY3Rpb24gKF9EaXNwYXRjaGVyKSB7XG4gIF9pbmhlcml0cyhTb2NrZXQsIF9EaXNwYXRjaGVyKTtcblxuICBmdW5jdGlvbiBTb2NrZXQocHVzaGVyLCBob3N0KSB7XG4gICAgdmFyIF90aGlzO1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFNvY2tldCk7XG5cbiAgICBfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9nZXRQcm90b3R5cGVPZihTb2NrZXQpLmNhbGwodGhpcykpO1xuICAgIF90aGlzLnB1c2hlciA9IHB1c2hlcjtcbiAgICBfdGhpcy5zb2NrZXQgPSBuZXcgV2ViU29ja2V0KGhvc3QgKyAnLycgKyBfdGhpcy5wdXNoZXIua2V5KTtcblxuICAgIF90aGlzLmJpbmRMaXN0ZW5lcnMoKTtcblxuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhTb2NrZXQsIFt7XG4gICAga2V5OiBcImJpbmRMaXN0ZW5lcnNcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gYmluZExpc3RlbmVycygpIHtcbiAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICB0aGlzLnNvY2tldC5vbm9wZW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIF90aGlzMi5vbk9wZW4oKTtcbiAgICAgIH07XG5cbiAgICAgIHRoaXMuc29ja2V0Lm9uZXJyb3IgPSBmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgX3RoaXMyLm9uRXJyb3IoZXJyb3IpO1xuICAgICAgfTtcblxuICAgICAgdGhpcy5zb2NrZXQub25jbG9zZSA9IGZ1bmN0aW9uIChjbG9zZUV2ZW50KSB7XG4gICAgICAgIF90aGlzMi5vbkNsb3NlKGNsb3NlRXZlbnQpO1xuICAgICAgfTtcblxuICAgICAgdGhpcy5zb2NrZXQub25tZXNzYWdlID0gZnVuY3Rpb24gKG1lc3NhZ2UpIHtcbiAgICAgICAgX3RoaXMyLm9uTWVzc2FnZShtZXNzYWdlKTtcbiAgICAgIH07XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcIm9uT3BlblwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBvbk9wZW4oKSB7XG4gICAgICB2YXIgX3RoaXMzID0gdGhpcztcblxuICAgICAgLy/liJ3lp4vnirbmgIFcbiAgICAgIHRoaXMuc3RhdGUgPSAwO1xuICAgICAgdGhpcy5iaW5kKCdhdXRob3JpemF0aW9uX3N1Y2Nlc3MnLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICBfdGhpczMuc29ja2V0LnNvY2tldF9pZCA9IGUuc29ja2V0X2lkO1xuICAgICAgICBfdGhpczMuc3RhdGUgPSAxOyAvL+iuoumYhVxuXG4gICAgICAgIF90aGlzMy5wdXNoZXIuY2hhbm5lbHMuc3Vic2NyaWJlKCk7XG4gICAgICB9KTtcbiAgICAgIHRoaXMuYmluZCgnYXV0aG9yaXphdGlvbl9lcnJvcicsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIF90aGlzMy5zdGF0ZSA9IC0xO1xuICAgICAgICBjb25zb2xlLmVycm9yKGUuZXJyb3IpO1xuICAgICAgfSk7XG4gICAgICB0aGlzLnNlbmQoe1xuICAgICAgICBldmVudDogJ2F1dGhvcml6YXRpb24nXG4gICAgICB9KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwib25FcnJvclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBvbkVycm9yKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwib25DbG9zZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBvbkNsb3NlKGNsb3NlRXZlbnQpIHtcbiAgICAgIGlmICh0aGlzLnNvY2tldC5yZWFkeVN0YXRlID09IFdlYlNvY2tldC5DTE9TRUQpIHtcbiAgICAgICAgaWYgKGNsb3NlRXZlbnQudHlwZSA9PSAnY2xvc2UnKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcignc29ja2V05pyN5Yqh5bey5pat5byAISEnKTtcbiAgICAgICAgfSBlbHNlIGlmIChjbG9zZUV2ZW50LnR5cGUgPT0gJ21lc3NhZ2UnKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcihjbG9zZUV2ZW50LmRhdGEpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ+W3suaWreW8gCEhJyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwib25NZXNzYWdlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG9uTWVzc2FnZShtZXNzYWdlKSB7XG4gICAgICB2YXIgZURhdGEgPSBKU09OLnBhcnNlKG1lc3NhZ2UuZGF0YSk7XG4gICAgICB2YXIgZXZlbnQgPSBlRGF0YS5ldmVudDtcbiAgICAgIHZhciBkYXRhID0gZURhdGEuZGF0YTtcblxuICAgICAgaWYgKGVEYXRhLmNoYW5uZWwgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICB0aGlzLnB1c2hlci5jaGFubmVscy5maW5kKGVEYXRhLmNoYW5uZWwpLmVtaXQoZXZlbnQsIGRhdGEpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5lbWl0KGV2ZW50LCBkYXRhKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwic2VuZFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzZW5kKGpzb24pIHtcbiAgICAgIGlmICh0aGlzLnN0YXRlICE9PSAtMSkge1xuICAgICAgICB0aGlzLnNvY2tldC5zZW5kKEpTT04uc3RyaW5naWZ5KGpzb24pKTtcbiAgICAgIH1cbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gU29ja2V0O1xufShfZXZlbnRzX2Rpc3BhdGNoZXJfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfX1tcIkRpc3BhdGNoZXJcIl0pO1xuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL3NyYy9ldmVudHMvY2FsbGJhY2tfcmVnaXN0cnkuanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vc3JjL2V2ZW50cy9jYWxsYmFja19yZWdpc3RyeS5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgZXhwb3J0cyBwcm92aWRlZDogQ2FsbGJhY2tSZWdpc3RyeSAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgX193ZWJwYWNrX2V4cG9ydHNfXywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcbl9fd2VicGFja19yZXF1aXJlX18ucihfX3dlYnBhY2tfZXhwb3J0c19fKTtcbi8qIGhhcm1vbnkgZXhwb3J0IChiaW5kaW5nKSAqLyBfX3dlYnBhY2tfcmVxdWlyZV9fLmQoX193ZWJwYWNrX2V4cG9ydHNfXywgXCJDYWxsYmFja1JlZ2lzdHJ5XCIsIGZ1bmN0aW9uKCkgeyByZXR1cm4gQ2FsbGJhY2tSZWdpc3RyeTsgfSk7XG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9XG5cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9XG5cbnZhciBDYWxsYmFja1JlZ2lzdHJ5ID1cbi8qI19fUFVSRV9fKi9cbmZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gQ2FsbGJhY2tSZWdpc3RyeSgpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQ2FsbGJhY2tSZWdpc3RyeSk7XG5cbiAgICB0aGlzLl9jYWxsYmFja3MgPSB7fTtcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhDYWxsYmFja1JlZ2lzdHJ5LCBbe1xuICAgIGtleTogXCJnZXRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0KG5hbWUpIHtcbiAgICAgIHJldHVybiB0aGlzLl9jYWxsYmFja3NbcHJlZml4KG5hbWUpXTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiYWRkXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGFkZChuYW1lLCBjYWxsYmFjaywgY29udGV4dCkge1xuICAgICAgdmFyIHByZWZpeGVkRXZlbnROYW1lID0gcHJlZml4KG5hbWUpO1xuICAgICAgdGhpcy5fY2FsbGJhY2tzW3ByZWZpeGVkRXZlbnROYW1lXSA9IHRoaXMuX2NhbGxiYWNrc1twcmVmaXhlZEV2ZW50TmFtZV0gfHwgW107XG5cbiAgICAgIHRoaXMuX2NhbGxiYWNrc1twcmVmaXhlZEV2ZW50TmFtZV0ucHVzaCh7XG4gICAgICAgIGZuOiBjYWxsYmFjayxcbiAgICAgICAgY29udGV4dDogY29udGV4dFxuICAgICAgfSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInJlbW92ZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW1vdmUobmFtZSwgY2FsbGJhY2ssIGNvbnRleHQpIHtcbiAgICAgIGlmICghbmFtZSAmJiAhY2FsbGJhY2sgJiYgIWNvbnRleHQpIHtcbiAgICAgICAgdGhpcy5fY2FsbGJhY2tzID0ge307XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdmFyIG5hbWVzID0gbmFtZSA/IFtwcmVmaXgobmFtZSldIDogT2JqZWN0LmtleXModGhpcy5fY2FsbGJhY2tzKTtcblxuICAgICAgaWYgKGNhbGxiYWNrIHx8IGNvbnRleHQpIHtcbiAgICAgICAgdGhpcy5yZW1vdmVDYWxsYmFjayhuYW1lcywgY2FsbGJhY2ssIGNvbnRleHQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5yZW1vdmVBbGxDYWxsYmFja3MobmFtZXMpO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJyZW1vdmVDYWxsYmFja1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW1vdmVDYWxsYmFjayhuYW1lcywgY2FsbGJhY2ssIGNvbnRleHQpIHtcbiAgICAgIGZvciAodmFyIG5hbWUgaW4gbmFtZXMpIHtcbiAgICAgICAgZm9yICh2YXIga2V5IGluIHRoaXMuX2NhbGxiYWNrc1tuYW1lXSkge1xuICAgICAgICAgIGlmICh0aGlzLl9jYWxsYmFja3NbbmFtZV1ba2V5XS5mbiA9PSBjYWxsYmFjayB8fCB0aGlzLl9jYWxsYmFja3NbbmFtZV1ba2V5XS5jb250ZXh0ID09IGNvbnRleHQpIHtcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLl9jYWxsYmFja3NbbmFtZV1ba2V5XTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5fY2FsbGJhY2tzW25hbWVdLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgIGRlbGV0ZSB0aGlzLl9jYWxsYmFja3NbbmFtZV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwicmVtb3ZlQWxsQ2FsbGJhY2tzXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbW92ZUFsbENhbGxiYWNrcyhuYW1lcykge1xuICAgICAgZm9yICh2YXIgbmFtZSBpbiBuYW1lcykge1xuICAgICAgICBkZWxldGUgdGhpcy5fY2FsbGJhY2tzW25hbWVdO1xuICAgICAgfVxuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBDYWxsYmFja1JlZ2lzdHJ5O1xufSgpO1xuXG5mdW5jdGlvbiBwcmVmaXgobmFtZSkge1xuICByZXR1cm4gXCJfXCIgKyBuYW1lO1xufVxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL3NyYy9ldmVudHMvZGlzcGF0Y2hlci5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL3NyYy9ldmVudHMvZGlzcGF0Y2hlci5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBleHBvcnRzIHByb3ZpZGVkOiBEaXNwYXRjaGVyICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBfX3dlYnBhY2tfZXhwb3J0c19fLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yKF9fd2VicGFja19leHBvcnRzX18pO1xuLyogaGFybW9ueSBleHBvcnQgKGJpbmRpbmcpICovIF9fd2VicGFja19yZXF1aXJlX18uZChfX3dlYnBhY2tfZXhwb3J0c19fLCBcIkRpc3BhdGNoZXJcIiwgZnVuY3Rpb24oKSB7IHJldHVybiBEaXNwYXRjaGVyOyB9KTtcbi8qIGhhcm1vbnkgaW1wb3J0ICovIHZhciBfY2FsbGJhY2tfcmVnaXN0cnlfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfXyA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vY2FsbGJhY2tfcmVnaXN0cnkgKi8gXCIuL3NyYy9ldmVudHMvY2FsbGJhY2tfcmVnaXN0cnkuanNcIik7XG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9XG5cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9XG5cblxudmFyIERpc3BhdGNoZXIgPVxuLyojX19QVVJFX18qL1xuZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBEaXNwYXRjaGVyKCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBEaXNwYXRjaGVyKTtcblxuICAgIHRoaXMuY2FsbGJhY2tzID0gbmV3IF9jYWxsYmFja19yZWdpc3RyeV9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fW1wiQ2FsbGJhY2tSZWdpc3RyeVwiXSgpO1xuICAgIHRoaXMuZ2xvYmFsX2NhbGxiYWNrcyA9IFtdO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKERpc3BhdGNoZXIsIFt7XG4gICAga2V5OiBcImJpbmRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gYmluZChldmVudE5hbWUsIGNhbGxiYWNrLCBjb250ZXh0KSB7XG4gICAgICB0aGlzLmNhbGxiYWNrcy5hZGQoZXZlbnROYW1lLCBjYWxsYmFjaywgY29udGV4dCk7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiYmluZF9nbG9iYWxcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gYmluZF9nbG9iYWwoY2FsbGJhY2spIHtcbiAgICAgIHRoaXMuZ2xvYmFsX2NhbGxiYWNrcy5wdXNoKGNhbGxiYWNrKTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJ1bmJpbmRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gdW5iaW5kKGV2ZW50TmFtZSwgY2FsbGJhY2ssIGNvbnRleHQpIHtcbiAgICAgIHRoaXMuY2FsbGJhY2tzLnJlbW92ZShldmVudE5hbWUsIGNhbGxiYWNrLCBjb250ZXh0KTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJ1bmJpbmRfZ2xvYmFsXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHVuYmluZF9nbG9iYWwoY2FsbGJhY2spIHtcbiAgICAgIGlmICghY2FsbGJhY2spIHtcbiAgICAgICAgdGhpcy5nbG9iYWxfY2FsbGJhY2tzID0gW107XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgfVxuXG4gICAgICBmb3IgKHZhciBpIGluIHRoaXMuZ2xvYmFsX2NhbGxiYWNrcykge1xuICAgICAgICBpZiAoY2FsbGJhY2sgPT0gdGhpcy5nbG9iYWxfY2FsbGJhY2tzW2ldKSB7XG4gICAgICAgICAgZGVsZXRlIHRoaXMuZ2xvYmFsX2NhbGxiYWNrc1tpXTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwidW5iaW5kX2FsbFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiB1bmJpbmRfYWxsKCkge1xuICAgICAgdGhpcy51bmJpbmQoKTtcbiAgICAgIHRoaXMudW5iaW5kX2dsb2JhbCgpO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImVtaXRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZW1pdChldmVudE5hbWUsIGRhdGEpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5nbG9iYWxfY2FsbGJhY2tzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHRoaXMuZ2xvYmFsX2NhbGxiYWNrc1tpXShldmVudE5hbWUsIGRhdGEpO1xuICAgICAgfVxuXG4gICAgICB2YXIgY2FsbGJhY2tzID0gdGhpcy5jYWxsYmFja3MuZ2V0KGV2ZW50TmFtZSk7XG5cbiAgICAgIGlmIChjYWxsYmFja3MgJiYgY2FsbGJhY2tzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGNhbGxiYWNrcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICBjYWxsYmFja3NbX2ldLmZuLmNhbGwoY2FsbGJhY2tzW19pXS5jb250ZXh0LCBkYXRhKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gRGlzcGF0Y2hlcjtcbn0oKTtcblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9zcmMvcHVzaGVyLmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL3NyYy9wdXNoZXIuanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIGV4cG9ydHMgcHJvdmlkZWQ6IFB1c2hlciAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgX193ZWJwYWNrX2V4cG9ydHNfXywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcbl9fd2VicGFja19yZXF1aXJlX18ucihfX3dlYnBhY2tfZXhwb3J0c19fKTtcbi8qIGhhcm1vbnkgZXhwb3J0IChiaW5kaW5nKSAqLyBfX3dlYnBhY2tfcmVxdWlyZV9fLmQoX193ZWJwYWNrX2V4cG9ydHNfXywgXCJQdXNoZXJcIiwgZnVuY3Rpb24oKSB7IHJldHVybiBQdXNoZXI7IH0pO1xuLyogaGFybW9ueSBpbXBvcnQgKi8gdmFyIF9jb25uZWN0aW9uX3NvY2tldF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9jb25uZWN0aW9uL3NvY2tldCAqLyBcIi4vc3JjL2Nvbm5lY3Rpb24vc29ja2V0LmpzXCIpO1xuLyogaGFybW9ueSBpbXBvcnQgKi8gdmFyIF9ldmVudHNfZGlzcGF0Y2hlcl9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMV9fID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9ldmVudHMvZGlzcGF0Y2hlciAqLyBcIi4vc3JjL2V2ZW50cy9kaXNwYXRjaGVyLmpzXCIpO1xuLyogaGFybW9ueSBpbXBvcnQgKi8gdmFyIF9jaGFubmVsc19tYW5uYWdlcl9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMl9fID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9jaGFubmVscy9tYW5uYWdlciAqLyBcIi4vc3JjL2NoYW5uZWxzL21hbm5hZ2VyLmpzXCIpO1xuLyogaGFybW9ueSBpbXBvcnQgKi8gdmFyIGF4aW9zX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8zX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISBheGlvcyAqLyBcIi4vbm9kZV9tb2R1bGVzL2F4aW9zL2luZGV4LmpzXCIpO1xuLyogaGFybW9ueSBpbXBvcnQgKi8gdmFyIGF4aW9zX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8zX19fZGVmYXVsdCA9IC8qI19fUFVSRV9fKi9fX3dlYnBhY2tfcmVxdWlyZV9fLm4oYXhpb3NfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzNfXyk7XG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9XG5cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9XG5cblxuXG5cblxudmFyIFB1c2hlciA9XG4vKiNfX1BVUkVfXyovXG5mdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIFB1c2hlcihhcHBfa2V5LCBvcHRpb25zKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFB1c2hlcik7XG5cbiAgICB0aGlzLmNoZWNrQXBwS2V5KGFwcF9rZXkpO1xuICAgIHRoaXMua2V5ID0gYXBwX2tleTtcbiAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICAgIHRoaXMuZGlzcGF0Y2hlciA9IG5ldyBfZXZlbnRzX2Rpc3BhdGNoZXJfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzFfX1tcIkRpc3BhdGNoZXJcIl0oKTtcbiAgICB0aGlzLmNoYW5uZWxzID0gbmV3IF9jaGFubmVsc19tYW5uYWdlcl9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMl9fW1wiTWFubmFnZXJcIl0oKTtcbiAgICB0aGlzLmNvbm5lY3QoKTtcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhQdXNoZXIsIFt7XG4gICAga2V5OiBcImNvbm5lY3RcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29ubmVjdCgpIHtcbiAgICAgIHRoaXMuc29ja2V0ID0gbmV3IF9jb25uZWN0aW9uX3NvY2tldF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fW1wiU29ja2V0XCJdKHRoaXMsIHRoaXMub3B0aW9ucy5ob3N0KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwic3Vic2NyaWJlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHN1YnNjcmliZShjaGFubmVsX25hbWUpIHtcbiAgICAgIHJldHVybiB0aGlzLmNoYW5uZWxzLmFkZChjaGFubmVsX25hbWUsIHRoaXMpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJ1bnN1YnNjcmliZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiB1bnN1YnNjcmliZShjaGFubmVsX25hbWUpIHtcbiAgICAgIHRoaXMuY2hhbm5lbHMucmVtb3ZlKGNoYW5uZWxfbmFtZSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImdldFNvY2tldElkXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldFNvY2tldElkKCkge1xuICAgICAgcmV0dXJuIHRoaXMuc29ja2V0LnNvY2tldC5zb2NrZXRfaWQ7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInNlbmRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2VuZChqc29uKSB7XG4gICAgICB0aGlzLnNvY2tldC5zZW5kKGpzb24pO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJjaGVja0FwcEtleVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjaGVja0FwcEtleShrZXkpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJhdXRoXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGF1dGgobmFtZSwgY2FsbGJhY2spIHtcbiAgICAgIHZhciBtZXRob2QgPSB0aGlzLm9wdGlvbnMuYXV0aC5tZXRob2QgfHwgJ3Bvc3QnO1xuICAgICAgdmFyIGRhdGEgPSB7fTtcbiAgICAgIHZhciBwYXJhbXMgPSB7fTtcblxuICAgICAgaWYgKG1ldGhvZCA9PSAncG9zdCcpIHtcbiAgICAgICAgZGF0YSA9IE9iamVjdC5hc3NpZ24oe1xuICAgICAgICAgIGNoYW5uZWxfbmFtZTogbmFtZSxcbiAgICAgICAgICBzb2NrZXRfaWQ6IHRoaXMuZ2V0U29ja2V0SWQoKVxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHBhcmFtcyA9IE9iamVjdC5hc3NpZ24oe1xuICAgICAgICAgIGNoYW5uZWxfbmFtZTogbmFtZSxcbiAgICAgICAgICBzb2NrZXRfaWQ6IHRoaXMuZ2V0U29ja2V0SWQoKVxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgYXhpb3NfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzNfX19kZWZhdWx0KCkoe1xuICAgICAgICB1cmw6IHRoaXMub3B0aW9ucy5hdXRoLnVybCxcbiAgICAgICAgbWV0aG9kOiBtZXRob2QsXG4gICAgICAgIGhlYWRlcnM6IHRoaXMub3B0aW9ucy5hdXRoLmhlYWRlcnMgfHwge30sXG4gICAgICAgIHBhcmFtczogcGFyYW1zLFxuICAgICAgICBkYXRhOiBkYXRhXG4gICAgICB9KS50aGVuKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGNhbGxiYWNrKGUpO1xuICAgICAgfSkuY2F0Y2goZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcign56eB5pyJ6aKR6YGT5p2D6ZmQ5LiN6LazIScpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIFB1c2hlcjtcbn0oKTtcbndpbmRvdy5QdXNoZXIgPSBQdXNoZXI7XG5cbi8qKiovIH0pXG5cbi8qKioqKiovIH0pO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5kbFluQmhZMnM2THk4dmQyVmljR0ZqYXk5aWIyOTBjM1J5WVhBaUxDSjNaV0p3WVdOck9pOHZMeTR2Ym05a1pWOXRiMlIxYkdWekwyRjRhVzl6TDJsdVpHVjRMbXB6SWl3aWQyVmljR0ZqYXpvdkx5OHVMMjV2WkdWZmJXOWtkV3hsY3k5aGVHbHZjeTlzYVdJdllXUmhjSFJsY25NdmVHaHlMbXB6SWl3aWQyVmljR0ZqYXpvdkx5OHVMMjV2WkdWZmJXOWtkV3hsY3k5aGVHbHZjeTlzYVdJdllYaHBiM011YW5NaUxDSjNaV0p3WVdOck9pOHZMeTR2Ym05a1pWOXRiMlIxYkdWekwyRjRhVzl6TDJ4cFlpOWpZVzVqWld3dlEyRnVZMlZzTG1weklpd2lkMlZpY0dGamF6b3ZMeTh1TDI1dlpHVmZiVzlrZFd4bGN5OWhlR2x2Y3k5c2FXSXZZMkZ1WTJWc0wwTmhibU5sYkZSdmEyVnVMbXB6SWl3aWQyVmljR0ZqYXpvdkx5OHVMMjV2WkdWZmJXOWtkV3hsY3k5aGVHbHZjeTlzYVdJdlkyRnVZMlZzTDJselEyRnVZMlZzTG1weklpd2lkMlZpY0dGamF6b3ZMeTh1TDI1dlpHVmZiVzlrZFd4bGN5OWhlR2x2Y3k5c2FXSXZZMjl5WlM5QmVHbHZjeTVxY3lJc0luZGxZbkJoWTJzNkx5OHZMaTl1YjJSbFgyMXZaSFZzWlhNdllYaHBiM012YkdsaUwyTnZjbVV2U1c1MFpYSmpaWEIwYjNKTllXNWhaMlZ5TG1weklpd2lkMlZpY0dGamF6b3ZMeTh1TDI1dlpHVmZiVzlrZFd4bGN5OWhlR2x2Y3k5c2FXSXZZMjl5WlM5amNtVmhkR1ZGY25KdmNpNXFjeUlzSW5kbFluQmhZMnM2THk4dkxpOXViMlJsWDIxdlpIVnNaWE12WVhocGIzTXZiR2xpTDJOdmNtVXZaR2x6Y0dGMFkyaFNaWEYxWlhOMExtcHpJaXdpZDJWaWNHRmphem92THk4dUwyNXZaR1ZmYlc5a2RXeGxjeTloZUdsdmN5OXNhV0l2WTI5eVpTOWxibWhoYm1ObFJYSnliM0l1YW5NaUxDSjNaV0p3WVdOck9pOHZMeTR2Ym05a1pWOXRiMlIxYkdWekwyRjRhVzl6TDJ4cFlpOWpiM0psTDNObGRIUnNaUzVxY3lJc0luZGxZbkJoWTJzNkx5OHZMaTl1YjJSbFgyMXZaSFZzWlhNdllYaHBiM012YkdsaUwyTnZjbVV2ZEhKaGJuTm1iM0p0UkdGMFlTNXFjeUlzSW5kbFluQmhZMnM2THk4dkxpOXViMlJsWDIxdlpIVnNaWE12WVhocGIzTXZiR2xpTDJSbFptRjFiSFJ6TG1weklpd2lkMlZpY0dGamF6b3ZMeTh1TDI1dlpHVmZiVzlrZFd4bGN5OWhlR2x2Y3k5c2FXSXZhR1ZzY0dWeWN5OWlhVzVrTG1weklpd2lkMlZpY0dGamF6b3ZMeTh1TDI1dlpHVmZiVzlrZFd4bGN5OWhlR2x2Y3k5c2FXSXZhR1ZzY0dWeWN5OWlkRzloTG1weklpd2lkMlZpY0dGamF6b3ZMeTh1TDI1dlpHVmZiVzlrZFd4bGN5OWhlR2x2Y3k5c2FXSXZhR1ZzY0dWeWN5OWlkV2xzWkZWU1RDNXFjeUlzSW5kbFluQmhZMnM2THk4dkxpOXViMlJsWDIxdlpIVnNaWE12WVhocGIzTXZiR2xpTDJobGJIQmxjbk12WTI5dFltbHVaVlZTVEhNdWFuTWlMQ0ozWldKd1lXTnJPaTh2THk0dmJtOWtaVjl0YjJSMWJHVnpMMkY0YVc5ekwyeHBZaTlvWld4d1pYSnpMMk52YjJ0cFpYTXVhbk1pTENKM1pXSndZV05yT2k4dkx5NHZibTlrWlY5dGIyUjFiR1Z6TDJGNGFXOXpMMnhwWWk5b1pXeHdaWEp6TDJselFXSnpiMngxZEdWVlVrd3Vhbk1pTENKM1pXSndZV05yT2k4dkx5NHZibTlrWlY5dGIyUjFiR1Z6TDJGNGFXOXpMMnhwWWk5b1pXeHdaWEp6TDJselZWSk1VMkZ0WlU5eWFXZHBiaTVxY3lJc0luZGxZbkJoWTJzNkx5OHZMaTl1YjJSbFgyMXZaSFZzWlhNdllYaHBiM012YkdsaUwyaGxiSEJsY25NdmJtOXliV0ZzYVhwbFNHVmhaR1Z5VG1GdFpTNXFjeUlzSW5kbFluQmhZMnM2THk4dkxpOXViMlJsWDIxdlpIVnNaWE12WVhocGIzTXZiR2xpTDJobGJIQmxjbk12Y0dGeWMyVklaV0ZrWlhKekxtcHpJaXdpZDJWaWNHRmphem92THk4dUwyNXZaR1ZmYlc5a2RXeGxjeTloZUdsdmN5OXNhV0l2YUdWc2NHVnljeTl6Y0hKbFlXUXVhbk1pTENKM1pXSndZV05yT2k4dkx5NHZibTlrWlY5dGIyUjFiR1Z6TDJGNGFXOXpMMnhwWWk5MWRHbHNjeTVxY3lJc0luZGxZbkJoWTJzNkx5OHZMaTl1YjJSbFgyMXZaSFZzWlhNdmFYTXRZblZtWm1WeUwybHVaR1Y0TG1weklpd2lkMlZpY0dGamF6b3ZMeTh1TDI1dlpHVmZiVzlrZFd4bGN5OXdjbTlqWlhOekwySnliM2R6WlhJdWFuTWlMQ0ozWldKd1lXTnJPaTh2THk0dmMzSmpMMk5vWVc1dVpXeHpMMk5vWVc1dVpXd3Vhbk1pTENKM1pXSndZV05yT2k4dkx5NHZjM0pqTDJOb1lXNXVaV3h6TDIxaGJtNWhaMlZ5TG1weklpd2lkMlZpY0dGamF6b3ZMeTh1TDNOeVl5OWphR0Z1Ym1Wc2N5OXdjbVZ6Wlc1alpWOWphR0Z1Ym1Wc0xtcHpJaXdpZDJWaWNHRmphem92THk4dUwzTnlZeTlqYUdGdWJtVnNjeTl3Y21sMllYUmxYMk5vWVc1dVpXd3Vhbk1pTENKM1pXSndZV05yT2k4dkx5NHZjM0pqTDJOdmJtNWxZM1JwYjI0dmMyOWphMlYwTG1weklpd2lkMlZpY0dGamF6b3ZMeTh1TDNOeVl5OWxkbVZ1ZEhNdlkyRnNiR0poWTJ0ZmNtVm5hWE4wY25rdWFuTWlMQ0ozWldKd1lXTnJPaTh2THk0dmMzSmpMMlYyWlc1MGN5OWthWE53WVhSamFHVnlMbXB6SWl3aWQyVmljR0ZqYXpvdkx5OHVMM055WXk5d2RYTm9aWEl1YW5NaVhTd2libUZ0WlhNaU9sc2lRMmhoYm01bGJDSXNJbTVoYldVaUxDSndkWE5vWlhJaUxDSnpiMk5yWlhRaUxDSnpkR0YwWlNJc0luTjFZbk5qY21saVpTSXNJbk5sYm1RaUxDSmxkbVZ1ZENJc0ltUmhkR0VpTENKamFHRnVibVZzSWl3aVJHbHpjR0YwWTJobGNpSXNJazFoYm01aFoyVnlJaXdpWTJoaGJtNWxiSE1pTENKamNtVmhkR1ZEYUdGdWJtVnNJaXdpVDJKcVpXTjBJaXdpYTJWNWN5SXNJbWtpTENKcGJtUmxlRTltSWl3aVVISnBkbUYwWlVOb1lXNXVaV3dpTENKUWNtVnpaVzVqWlVOb1lXNXVaV3dpTENKaGRYUm9JaXdpWlNJc0ltTm9ZVzV1Wld4ZlpHRjBZU0lzSWxOdlkydGxkQ0lzSW1odmMzUWlMQ0pYWldKVGIyTnJaWFFpTENKclpYa2lMQ0ppYVc1a1RHbHpkR1Z1WlhKeklpd2liMjV2Y0dWdUlpd2liMjVQY0dWdUlpd2liMjVsY25KdmNpSXNJbVZ5Y205eUlpd2liMjVGY25KdmNpSXNJbTl1WTJ4dmMyVWlMQ0pqYkc5elpVVjJaVzUwSWl3aWIyNURiRzl6WlNJc0ltOXViV1Z6YzJGblpTSXNJbTFsYzNOaFoyVWlMQ0p2YmsxbGMzTmhaMlVpTENKaWFXNWtJaXdpYzI5amEyVjBYMmxrSWl3aVkyOXVjMjlzWlNJc0luSmxZV1I1VTNSaGRHVWlMQ0pEVEU5VFJVUWlMQ0owZVhCbElpd2laVVJoZEdFaUxDSktVMDlPSWl3aWNHRnljMlVpTENKMWJtUmxabWx1WldRaUxDSm1hVzVrSWl3aVpXMXBkQ0lzSW1wemIyNGlMQ0p6ZEhKcGJtZHBabmtpTENKRFlXeHNZbUZqYTFKbFoybHpkSEo1SWl3aVgyTmhiR3hpWVdOcmN5SXNJbkJ5WldacGVDSXNJbU5oYkd4aVlXTnJJaXdpWTI5dWRHVjRkQ0lzSW5CeVpXWnBlR1ZrUlhabGJuUk9ZVzFsSWl3aWNIVnphQ0lzSW1adUlpd2libUZ0WlhNaUxDSnlaVzF2ZG1WRFlXeHNZbUZqYXlJc0luSmxiVzkyWlVGc2JFTmhiR3hpWVdOcmN5SXNJbXhsYm1kMGFDSXNJbU5oYkd4aVlXTnJjeUlzSW1kc2IySmhiRjlqWVd4c1ltRmphM01pTENKbGRtVnVkRTVoYldVaUxDSmhaR1FpTENKeVpXMXZkbVVpTENKMWJtSnBibVFpTENKMWJtSnBibVJmWjJ4dlltRnNJaXdpWjJWMElpd2lZMkZzYkNJc0lsQjFjMmhsY2lJc0ltRndjRjlyWlhraUxDSnZjSFJwYjI1eklpd2lZMmhsWTJ0QmNIQkxaWGtpTENKa2FYTndZWFJqYUdWeUlpd2lZMjl1Ym1WamRDSXNJbU5vWVc1dVpXeGZibUZ0WlNJc0ltMWxkR2h2WkNJc0luQmhjbUZ0Y3lJc0ltRnpjMmxuYmlJc0ltZGxkRk52WTJ0bGRFbGtJaXdpWVhocGIzTWlMQ0oxY213aUxDSm9aV0ZrWlhKeklpd2lkR2hsYmlJc0ltTmhkR05vSWl3aWQybHVaRzkzSWwwc0ltMWhjSEJwYm1keklqb2lPMEZCUVVFN1FVRkRRVHM3UVVGRlFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3T3p0QlFVZEJPMEZCUTBFN08wRkJSVUU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3hyUkVGQk1FTXNaME5CUVdkRE8wRkJRekZGTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEVzWjBWQlFYZEVMR3RDUVVGclFqdEJRVU14UlR0QlFVTkJMSGxFUVVGcFJDeGpRVUZqTzBGQlF5OUVPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeHBSRUZCZVVNc2FVTkJRV2xETzBGQlF6RkZMSGRJUVVGblNDeHRRa0ZCYlVJc1JVRkJSVHRCUVVOeVNUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxHMURRVUV5UWl3d1FrRkJNRUlzUlVGQlJUdEJRVU4yUkN4NVEwRkJhVU1zWlVGQlpUdEJRVU5vUkR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFTdzRSRUZCYzBRc0swUkJRU3RFT3p0QlFVVnlTRHRCUVVOQk96czdRVUZIUVR0QlFVTkJPenM3T3pzN096czdPenM3UVVOc1JrRXNhVUpCUVdsQ0xHMUNRVUZQTEVOQlFVTXNjMFJCUVdFc1JUczdPenM3T3pzN096czdPMEZEUVhwQ096dEJRVVZpTEZsQlFWa3NiVUpCUVU4c1EwRkJReXh4UkVGQldUdEJRVU5vUXl4aFFVRmhMRzFDUVVGUExFTkJRVU1zYVVWQlFXdENPMEZCUTNaRExHVkJRV1VzYlVKQlFVOHNRMEZCUXl3eVJVRkJkVUk3UVVGRE9VTXNiVUpCUVcxQ0xHMUNRVUZQTEVOQlFVTXNiVVpCUVRKQ08wRkJRM1JFTEhOQ1FVRnpRaXh0UWtGQlR5eERRVUZETEhsR1FVRTRRanRCUVVNMVJDeHJRa0ZCYTBJc2JVSkJRVThzUTBGQlF5eDVSVUZCY1VJN1FVRkRMME1zZVVaQlFYbEdMRzFDUVVGUExFTkJRVU1zYlVWQlFXMUNPenRCUVVWd1NEdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQkxEUkRRVUUwUXp0QlFVTTFRenM3UVVGRlFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEVzVVVGQlVTeGhRVUZ2UWp0QlFVTTFRanRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk96dEJRVVZCTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxHOUNRVUZ2UWl4dFFrRkJUeXhEUVVGRExIbEZRVUZ6UWpzN1FVRkZiRVE3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEVzVTBGQlV6dEJRVU5VTzBGQlEwRTdRVUZEUVR0QlFVTkJMRTlCUVU4N1FVRkRVRHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEU5QlFVODdRVUZEVUR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeFBRVUZQTzBGQlExQTdPMEZCUlVFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVN4SFFVRkhPMEZCUTBnN096czdPenM3T3pzN096czdRVU51VEdFN08wRkJSV0lzV1VGQldTeHRRa0ZCVHl4RFFVRkRMR3RFUVVGVE8wRkJRemRDTEZkQlFWY3NiVUpCUVU4c1EwRkJReXhuUlVGQlowSTdRVUZEYmtNc1dVRkJXU3h0UWtGQlR5eERRVUZETERSRVFVRmpPMEZCUTJ4RExHVkJRV1VzYlVKQlFVOHNRMEZCUXl4M1JFRkJXVHM3UVVGRmJrTTdRVUZEUVR0QlFVTkJPMEZCUTBFc1YwRkJWeXhQUVVGUE8wRkJRMnhDTEZsQlFWa3NUVUZCVFR0QlFVTnNRanRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVN4bFFVRmxMRzFDUVVGUExFTkJRVU1zYTBWQlFXbENPMEZCUTNoRExHOUNRVUZ2UWl4dFFrRkJUeXhEUVVGRExEUkZRVUZ6UWp0QlFVTnNSQ3hwUWtGQmFVSXNiVUpCUVU4c1EwRkJReXh6UlVGQmJVSTdPMEZCUlRWRE8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRXNaVUZCWlN4dFFrRkJUeXhEUVVGRExHOUZRVUZyUWpzN1FVRkZla003TzBGQlJVRTdRVUZEUVRzN096czdPenM3T3pzN096dEJRMjVFWVRzN1FVRkZZanRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEZkQlFWY3NVVUZCVVR0QlFVTnVRanRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3TzBGQlJVRTdPenM3T3pzN096czdPenM3UVVOc1FtRTdPMEZCUldJc1lVRkJZU3h0UWtGQlR5eERRVUZETERKRVFVRlZPenRCUVVVdlFqdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJMRmRCUVZjc1UwRkJVenRCUVVOd1FqdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEVkQlFVYzdPMEZCUlVnN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRU3hIUVVGSE8wRkJRMGc3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRXNSMEZCUnp0QlFVTklPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdPenM3T3pzN096czdPenM3UVVONFJHRTdPMEZCUldJN1FVRkRRVHRCUVVOQk96czdPenM3T3pzN096czdPMEZEU21FN08wRkJSV0lzWlVGQlpTeHRRa0ZCVHl4RFFVRkRMREpFUVVGbE8wRkJRM1JETEZsQlFWa3NiVUpCUVU4c1EwRkJReXh4UkVGQldUdEJRVU5vUXl4NVFrRkJlVUlzYlVKQlFVOHNRMEZCUXl4cFJrRkJjMEk3UVVGRGRrUXNjMEpCUVhOQ0xHMUNRVUZQTEVOQlFVTXNNa1ZCUVcxQ096dEJRVVZxUkR0QlFVTkJPMEZCUTBFN1FVRkRRU3hYUVVGWExFOUJRVTg3UVVGRGJFSTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3hYUVVGWExFOUJRVTg3UVVGRGJFSTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeExRVUZMTzBGQlEwdzdPMEZCUlVFc2EwTkJRV3RETEdOQlFXTTdRVUZEYUVRN08wRkJSVUU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRU3hIUVVGSE96dEJRVVZJTzBGQlEwRTdRVUZEUVN4SFFVRkhPenRCUVVWSU8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRXNaMFJCUVdkRU8wRkJRMmhFTzBGQlEwRTdRVUZEUVN4TFFVRkxPMEZCUTB3N1FVRkRRU3hEUVVGRE96dEJRVVZFTzBGQlEwRTdRVUZEUVR0QlFVTkJMR2RFUVVGblJEdEJRVU5vUkR0QlFVTkJPMEZCUTBFN1FVRkRRU3hMUVVGTE8wRkJRMHc3UVVGRFFTeERRVUZET3p0QlFVVkVPenM3T3pzN096czdPenM3TzBGRE9VVmhPenRCUVVWaUxGbEJRVmtzYlVKQlFVOHNRMEZCUXl4eFJFRkJXVHM3UVVGRmFFTTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEZkQlFWY3NVMEZCVXp0QlFVTndRaXhYUVVGWExGTkJRVk03UVVGRGNFSTdRVUZEUVN4WlFVRlpMRTlCUVU4N1FVRkRia0k3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJMRWRCUVVjN1FVRkRTRHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJMRmRCUVZjc1QwRkJUenRCUVVOc1FqdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFc1YwRkJWeXhUUVVGVE8wRkJRM0JDTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxFZEJRVWM3UVVGRFNEczdRVUZGUVRzN096czdPenM3T3pzN096dEJRMjVFWVRzN1FVRkZZaXh0UWtGQmJVSXNiVUpCUVU4c1EwRkJReXh4UlVGQlowSTdPMEZCUlRORE8wRkJRMEU3UVVGRFFUdEJRVU5CTEZkQlFWY3NUMEZCVHp0QlFVTnNRaXhYUVVGWExFOUJRVTg3UVVGRGJFSXNWMEZCVnl4UFFVRlBPMEZCUTJ4Q0xGZEJRVmNzVDBGQlR6dEJRVU5zUWl4WFFVRlhMRTlCUVU4N1FVRkRiRUlzWVVGQllTeE5RVUZOTzBGQlEyNUNPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3T3pzN096czdPenM3T3pzN1FVTnFRbUU3TzBGQlJXSXNXVUZCV1N4dFFrRkJUeXhEUVVGRExIRkVRVUZaTzBGQlEyaERMRzlDUVVGdlFpeHRRa0ZCVHl4RFFVRkRMSFZGUVVGcFFqdEJRVU0zUXl4bFFVRmxMRzFDUVVGUExFTkJRVU1zZFVWQlFXOUNPMEZCUXpORExHVkJRV1VzYlVKQlFVOHNRMEZCUXl4NVJFRkJZVHRCUVVOd1F5eHZRa0ZCYjBJc2JVSkJRVThzUTBGQlF5eHhSa0ZCTkVJN1FVRkRlRVFzYTBKQlFXdENMRzFDUVVGUExFTkJRVU1zYVVaQlFUQkNPenRCUVVWd1JEdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJMRmRCUVZjc1QwRkJUenRCUVVOc1FpeGhRVUZoTEZGQlFWRTdRVUZEY2tJN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVN3clFrRkJLMEk3UVVGREwwSXNkVU5CUVhWRE8wRkJRM1pETzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPenRCUVVWQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRXNSMEZCUnp0QlFVTklPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRXNSMEZCUnp0QlFVTklPenM3T3pzN096czdPenM3TzBGRGNrWmhPenRCUVVWaU8wRkJRMEU3UVVGRFFUdEJRVU5CTEZkQlFWY3NUVUZCVFR0QlFVTnFRaXhYUVVGWExFOUJRVTg3UVVGRGJFSXNWMEZCVnl4UFFVRlBPMEZCUTJ4Q0xGZEJRVmNzVDBGQlR6dEJRVU5zUWl4WFFVRlhMRTlCUVU4N1FVRkRiRUlzWVVGQllTeE5RVUZOTzBGQlEyNUNPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPenM3T3pzN096czdPenM3TzBGRGNFSmhPenRCUVVWaUxHdENRVUZyUWl4dFFrRkJUeXhEUVVGRExHMUZRVUZsT3p0QlFVVjZRenRCUVVOQk8wRkJRMEU3UVVGRFFTeFhRVUZYTEZOQlFWTTdRVUZEY0VJc1YwRkJWeXhUUVVGVE8wRkJRM0JDTEZkQlFWY3NUMEZCVHp0QlFVTnNRanRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4SFFVRkhPMEZCUTBnN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPenM3T3pzN096czdPenM3TzBGRGVrSmhPenRCUVVWaUxGbEJRVmtzYlVKQlFVOHNRMEZCUXl4eFJFRkJXVHM3UVVGRmFFTTdRVUZEUVR0QlFVTkJPMEZCUTBFc1YwRkJWeXhqUVVGak8wRkJRM3BDTEZkQlFWY3NUVUZCVFR0QlFVTnFRaXhYUVVGWExHVkJRV1U3UVVGRE1VSXNZVUZCWVN4RlFVRkZPMEZCUTJZN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEVkQlFVYzdPMEZCUlVnN1FVRkRRVHM3T3pzN096czdPenM3T3p0QlEyNUNRU3dyUTBGQllUczdRVUZGWWl4WlFVRlpMRzFDUVVGUExFTkJRVU1zYTBSQlFWTTdRVUZETjBJc01FSkJRVEJDTEcxQ1FVRlBMRU5CUVVNc09FWkJRU3RDT3p0QlFVVnFSVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJMR05CUVdNc2JVSkJRVThzUTBGQlF5eG5SVUZCWjBJN1FVRkRkRU1zUjBGQlJ6dEJRVU5JTzBGQlEwRXNZMEZCWXl4dFFrRkJUeXhEUVVGRExHbEZRVUZwUWp0QlFVTjJRenRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4M1JVRkJkMFU3UVVGRGVFVTdRVUZEUVR0QlFVTkJPMEZCUTBFc2RVUkJRWFZFTzBGQlEzWkVPMEZCUTBFN1FVRkRRVHRCUVVOQkxFZEJRVWM3TzBGQlJVZzdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxFOUJRVThzV1VGQldUdEJRVU51UWp0QlFVTkJPMEZCUTBFc1IwRkJSenM3UVVGRlNEdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3TzBGQlJVRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRXNRMEZCUXpzN1FVRkZSRHRCUVVOQk8wRkJRMEVzUTBGQlF6czdRVUZGUkRzN096czdPenM3T3pzN096czdRVU12Um1FN08wRkJSV0k3UVVGRFFUdEJRVU5CTzBGQlEwRXNiVUpCUVcxQ0xHbENRVUZwUWp0QlFVTndRenRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3pzN096czdPenM3T3pzN08wRkRWbUU3TzBGQlJXSTdPMEZCUlVFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVRzN096czdPenM3T3pzN096dEJRMjVEWVRzN1FVRkZZaXhaUVVGWkxHMUNRVUZQTEVOQlFVTXNjVVJCUVZrN08wRkJSV2hETzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxGZEJRVmNzVDBGQlR6dEJRVU5zUWl4WFFVRlhMRTlCUVU4N1FVRkRiRUlzWVVGQllTeFBRVUZQTzBGQlEzQkNPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3hIUVVGSE8wRkJRMGc3UVVGRFFTeEhRVUZITzBGQlEwZzdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJMRTlCUVU4N1FVRkRVRHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJMRk5CUVZNN1FVRkRWRHRCUVVOQk8wRkJRMEU3UVVGRFFTeFBRVUZQTzBGQlExQXNTMEZCU3pzN1FVRkZURHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk96czdPenM3T3pzN096czdPMEZEYWtWaE96dEJRVVZpTzBGQlEwRTdRVUZEUVR0QlFVTkJMRmRCUVZjc1QwRkJUenRCUVVOc1FpeFhRVUZYTEU5QlFVODdRVUZEYkVJc1lVRkJZU3hQUVVGUE8wRkJRM0JDTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3T3pzN096czdPenM3T3p0QlEySmhPenRCUVVWaUxGbEJRVmtzYlVKQlFVOHNRMEZCUXl4eFJFRkJXVHM3UVVGRmFFTTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPenRCUVVWQkxIZERRVUYzUXp0QlFVTjRReXhQUVVGUE96dEJRVVZRTzBGQlEwRXNNRVJCUVRCRUxIZENRVUYzUWp0QlFVTnNSanRCUVVOQkxFOUJRVTg3TzBGQlJWQTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3hIUVVGSE96dEJRVVZJTzBGQlEwRTdRVUZEUVR0QlFVTkJMR2REUVVGblF6dEJRVU5vUXl3MlFrRkJOa0lzWVVGQllTeEZRVUZGTzBGQlF6VkRPMEZCUTBFN1FVRkRRU3hIUVVGSE8wRkJRMGc3T3pzN096czdPenM3T3pzN1FVTndSR0U3TzBGQlJXSTdRVUZEUVR0QlFVTkJPMEZCUTBFc1YwRkJWeXhQUVVGUE8wRkJRMnhDTEdGQlFXRXNVVUZCVVR0QlFVTnlRanRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN096czdPenM3T3pzN096dEJRMkpoT3p0QlFVVmlMRmxCUVZrc2JVSkJRVThzUTBGQlF5eHhSRUZCV1RzN1FVRkZhRU03UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFc1kwRkJZeXhQUVVGUE8wRkJRM0pDTEdkQ1FVRm5RanRCUVVOb1FqdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEdOQlFXTXNUMEZCVHp0QlFVTnlRaXhuUWtGQlowSXNVVUZCVVR0QlFVTjRRanRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4SFFVRkhPenRCUVVWSU8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4SFFVRkhPMEZCUTBnN096czdPenM3T3pzN096czdRVU51UldFN08wRkJSV0lzV1VGQldTeHRRa0ZCVHl4RFFVRkRMRzFFUVVGVk96dEJRVVU1UWp0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeEhRVUZITzBGQlEwZzdPenM3T3pzN096czdPenM3UVVOWVlUczdRVUZGWWl4WlFVRlpMRzFDUVVGUExFTkJRVU1zY1VSQlFWazdPMEZCUldoRE8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeFhRVUZYTEU5QlFVODdRVUZEYkVJc1lVRkJZU3hQUVVGUE8wRkJRM0JDTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFTeHBRa0ZCYVVJc1pVRkJaVHM3UVVGRmFFTTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFc1QwRkJUenRCUVVOUU8wRkJRMEU3UVVGRFFUdEJRVU5CTEVkQlFVYzdPMEZCUlVnN1FVRkRRVHM3T3pzN096czdPenM3T3p0QlEzQkVZVHM3UVVGRllqdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFc0swSkJRU3RDTzBGQlF5OUNPMEZCUTBFN1FVRkRRU3hYUVVGWExGTkJRVk03UVVGRGNFSXNZVUZCWVR0QlFVTmlPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdPenM3T3pzN096czdPenRCUXpGQ1lUczdRVUZGWWl4WFFVRlhMRzFDUVVGUExFTkJRVU1zWjBWQlFXZENPMEZCUTI1RExHVkJRV1VzYlVKQlFVOHNRMEZCUXl4dlJFRkJWenM3UVVGRmJFTTdPMEZCUlVFN08wRkJSVUU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFc1YwRkJWeXhQUVVGUE8wRkJRMnhDTEdGQlFXRXNVVUZCVVR0QlFVTnlRanRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3hYUVVGWExFOUJRVTg3UVVGRGJFSXNZVUZCWVN4UlFVRlJPMEZCUTNKQ08wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxGZEJRVmNzVDBGQlR6dEJRVU5zUWl4aFFVRmhMRkZCUVZFN1FVRkRja0k3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEVzVjBGQlZ5eFBRVUZQTzBGQlEyeENMR0ZCUVdFc1VVRkJVVHRCUVVOeVFqdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFc1IwRkJSenRCUVVOSU8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxGZEJRVmNzVDBGQlR6dEJRVU5zUWl4aFFVRmhMRkZCUVZFN1FVRkRja0k3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEVzVjBGQlZ5eFBRVUZQTzBGQlEyeENMR0ZCUVdFc1VVRkJVVHRCUVVOeVFqdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeFhRVUZYTEU5QlFVODdRVUZEYkVJc1lVRkJZU3hSUVVGUk8wRkJRM0pDTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEZkQlFWY3NUMEZCVHp0QlFVTnNRaXhoUVVGaExGRkJRVkU3UVVGRGNrSTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRXNWMEZCVnl4UFFVRlBPMEZCUTJ4Q0xHRkJRV0VzVVVGQlVUdEJRVU55UWp0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4WFFVRlhMRTlCUVU4N1FVRkRiRUlzWVVGQllTeFJRVUZSTzBGQlEzSkNPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJMRmRCUVZjc1QwRkJUenRCUVVOc1FpeGhRVUZoTEZGQlFWRTdRVUZEY2tJN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFc1YwRkJWeXhQUVVGUE8wRkJRMnhDTEdGQlFXRXNVVUZCVVR0QlFVTnlRanRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3hYUVVGWExFOUJRVTg3UVVGRGJFSXNZVUZCWVN4UlFVRlJPMEZCUTNKQ08wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxGZEJRVmNzVDBGQlR6dEJRVU5zUWl4aFFVRmhMRkZCUVZFN1FVRkRja0k3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEVzVjBGQlZ5eFBRVUZQTzBGQlEyeENMR0ZCUVdFc1QwRkJUenRCUVVOd1FqdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4WFFVRlhMR0ZCUVdFN1FVRkRlRUlzVjBGQlZ5eFRRVUZUTzBGQlEzQkNPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVN4dFEwRkJiVU1zVDBGQlR6dEJRVU14UXp0QlFVTkJPMEZCUTBFc1IwRkJSenRCUVVOSU8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeDFRa0ZCZFVJc1UwRkJVeXhIUVVGSExGTkJRVk03UVVGRE5VTXNNa0pCUVRKQ08wRkJRek5DTzBGQlEwRTdRVUZEUVN4WFFVRlhMRTlCUVU4N1FVRkRiRUlzWVVGQllTeFBRVUZQTzBGQlEzQkNPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEV0QlFVczdRVUZEVER0QlFVTkJPMEZCUTBFN08wRkJSVUVzZFVOQlFYVkRMRTlCUVU4N1FVRkRPVU03UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEVzVjBGQlZ5eFBRVUZQTzBGQlEyeENMRmRCUVZjc1QwRkJUenRCUVVOc1FpeFhRVUZYTEU5QlFVODdRVUZEYkVJc1dVRkJXU3hQUVVGUE8wRkJRMjVDTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3hMUVVGTE8wRkJRMHc3UVVGRFFUdEJRVU5CTEVkQlFVYzdRVUZEU0R0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3pzN096czdPenM3T3pzN1FVTTVVMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPenM3T3pzN096czdPenM3UVVOd1FrRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEVzVTBGQlV6dEJRVU5VTzBGQlEwRTdRVUZEUVN4TFFVRkxPMEZCUTB3N1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEZOQlFWTTdRVUZEVkR0QlFVTkJPMEZCUTBFc1MwRkJTenRCUVVOTU8wRkJRMEU3UVVGRFFTeERRVUZETzBGQlEwUTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3hMUVVGTE8wRkJRMHc3UVVGRFFUdEJRVU5CTzBGQlEwRXNVMEZCVXp0QlFVTlVPMEZCUTBFN1FVRkRRVHRCUVVOQk96czdRVUZIUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEVzUzBGQlN6dEJRVU5NTzBGQlEwRTdRVUZEUVR0QlFVTkJMRk5CUVZNN1FVRkRWRHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3pzN08wRkJTVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJMRXRCUVVzN1FVRkRURHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxIVkNRVUYxUWl4elFrRkJjMEk3UVVGRE4wTTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3h4UWtGQmNVSTdRVUZEY2tJN08wRkJSVUU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJMSEZEUVVGeFF6czdRVUZGY2tNN1FVRkRRVHRCUVVOQk96dEJRVVZCTERKQ1FVRXlRanRCUVVNelFqdEJRVU5CTzBGQlEwRTdRVUZEUVN3MFFrRkJORUlzVlVGQlZUczdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3p0QlEzWk1kRU03UVVGRlR5eEpRVUZOUVN4UFFVRmlPMEZCUVVFN1FVRkJRVHRCUVVGQk96dEJRVU5KTEcxQ1FVRlpReXhKUVVGYUxFVkJRV3RDUXl4TlFVRnNRaXhGUVVFd1FqdEJRVUZCT3p0QlFVRkJPenRCUVVOMFFqdEJRVVZCTEZWQlFVdEVMRWxCUVV3c1IwRkJXVUVzU1VGQldqdEJRVU5CTEZWQlFVdERMRTFCUVV3c1IwRkJZMEVzVFVGQlpEczdRVUZGUVN4UlFVRkpMRTFCUVV0QkxFMUJRVXdzUTBGQldVTXNUVUZCV2l4RFFVRnRRa01zUzBGQmJrSXNTVUZCTkVJc1EwRkJhRU1zUlVGQmJVTTdRVUZETDBJc1dVRkJTME1zVTBGQlREdEJRVU5JT3p0QlFWSnhRanRCUVZONlFqczdRVUZXVER0QlFVRkJPMEZCUVVFc1owTkJXV2RDTzBGQlExSXNWMEZCUzBnc1RVRkJUQ3hEUVVGWlNTeEpRVUZhTEVOQlFXbENPMEZCUTJKRExHRkJRVXNzUlVGQlJTeFhRVVJOTzBGQlJXSkRMRmxCUVVrc1JVRkJSVHRCUVVOR1F5eHBRa0ZCVHl4RlFVRkZMRXRCUVV0U08wRkJSRm83UVVGR1R5eFBRVUZxUWp0QlFVMUlPMEZCYmtKTU96dEJRVUZCTzBGQlFVRXNSVUZCTmtKVExEWkVRVUUzUWl4Rk96czdPenM3T3pzN096czdPenM3T3pzN096czdPenRCUTBaQk8wRkJRMEU3UVVGRFFUdEJRVVZQTEVsQlFVMURMRkZCUVdJN1FVRkJRVHRCUVVGQk8wRkJRMGtzYzBKQlFXTTdRVUZCUVRzN1FVRkRWaXhUUVVGTFF5eFJRVUZNTEVkQlFXZENMRVZCUVdoQ08wRkJRMGc3TzBGQlNFdzdRVUZCUVR0QlFVRkJMSGRDUVV0UldDeEpRVXhTTEVWQlMyTkRMRTFCVEdRc1JVRkxjMEk3UVVGRFpDeFZRVUZKTEVOQlFVTXNTMEZCUzFVc1VVRkJUQ3hEUVVGaldDeEpRVUZrTEVOQlFVd3NSVUZCTUVJN1FVRkRkRUlzWVVGQlMxY3NVVUZCVEN4RFFVRmpXQ3hKUVVGa0xFbEJRWE5DV1N4aFFVRmhMRU5CUVVOYUxFbEJRVVFzUlVGQlQwTXNUVUZCVUN4RFFVRnVRenRCUVVOSU96dEJRVU5FTEdGQlFVOHNTMEZCUzFVc1VVRkJUQ3hEUVVGaldDeEpRVUZrTEVOQlFWQTdRVUZEU0R0QlFWWk1PMEZCUVVFN1FVRkJRU3d3UWtGWlZUdEJRVU5HTEdGQlFVOWhMRTFCUVUwc1EwRkJRME1zU1VGQlVDeERRVUZaTEV0QlFVdElMRkZCUVdwQ0xFTkJRVkE3UVVGRFNEdEJRV1JNTzBGQlFVRTdRVUZCUVN4NVFrRm5RbE5ZTEVsQmFFSlVMRVZCWjBKbE8wRkJRMUFzWVVGQlR5eExRVUZMVnl4UlFVRk1MRU5CUVdOWUxFbEJRV1FzUTBGQlVEdEJRVU5JTzBGQmJFSk1PMEZCUVVFN1FVRkJRU3d5UWtGdlFsZEJMRWxCY0VKWUxFVkJiMEpwUWp0QlFVTlVMRlZCUVVsUkxFOUJRVThzUjBGQlJ5eExRVUZMUnl4UlFVRk1MRU5CUVdOWUxFbEJRV1FzUTBGQlpEdEJRVU5CTEdGQlFVOHNTMEZCUzFjc1VVRkJUQ3hEUVVGaldDeEpRVUZrTEVOQlFWQTdRVUZEUVN4aFFVRlBVU3hQUVVGUU8wRkJRMGc3UVVGNFFrdzdRVUZCUVR0QlFVRkJMR2REUVRCQ1owSTdRVUZEVWl4WFFVRkxMRWxCUVVsUExFTkJRVlFzU1VGQll5eExRVUZMU2l4UlFVRnVRaXhGUVVFMlFqdEJRVU42UWl4aFFVRkxRU3hSUVVGTUxFTkJRV05KTEVOQlFXUXNSVUZCYVVKWUxGTkJRV3BDTzBGQlEwZzdRVUZGU2p0QlFTOUNURHM3UVVGQlFUdEJRVUZCT3p0QlFXdERRU3hUUVVGVFVTeGhRVUZVTEVOQlFYVkNXaXhKUVVGMlFpeEZRVUUyUWtNc1RVRkJOMElzUlVGQmNVTTdRVUZEYWtNc1RVRkJTVVFzU1VGQlNTeERRVUZEWjBJc1QwRkJUQ3hEUVVGaExGVkJRV0lzVFVGQk5rSXNRMEZCYWtNc1JVRkJiME03UVVGRGFFTXNWMEZCVHl4SlFVRkpReXdyUkVGQlNpeERRVUZ0UW1wQ0xFbEJRVzVDTEVWQlFYbENReXhOUVVGNlFpeERRVUZRTzBGQlEwZ3NSMEZHUkN4TlFVVlBMRWxCUVVsRUxFbEJRVWtzUTBGQlEyZENMRTlCUVV3c1EwRkJZU3hYUVVGaUxFMUJRVGhDTEVOQlFXeERMRVZCUVhGRE8wRkJRM2hETEZkQlFVOHNTVUZCU1VVc2FVVkJRVW9zUTBGQmIwSnNRaXhKUVVGd1FpeEZRVUV3UWtNc1RVRkJNVUlzUTBGQlVEdEJRVU5JTEVkQlJrMHNUVUZGUVR0QlFVTklMRmRCUVU4c1NVRkJTVVlzWjBSQlFVb3NRMEZCV1VNc1NVRkJXaXhGUVVGclFrTXNUVUZCYkVJc1EwRkJVRHRCUVVOSU8wRkJRMG9zUXpzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPMEZET1VORU8wRkJSVThzU1VGQlRXbENMR1ZCUVdJN1FVRkJRVHRCUVVGQk8wRkJRVUU3TzBGQlEwa3NNa0pCUVZsc1FpeEpRVUZhTEVWQlFXdENReXhOUVVGc1FpeEZRVUV3UWp0QlFVRkJPenRCUVVGQk96dEJRVU4wUWp0QlFVVkJMRlZCUVV0RUxFbEJRVXdzUjBGQldVRXNTVUZCV2p0QlFVTkJMRlZCUVV0RExFMUJRVXdzUjBGQlkwRXNUVUZCWkR0QlFVTkJMRlZCUVV0clFpeEpRVUZNTEVkQlFWa3NTVUZCV2pzN1FVRkZRU3hSUVVGSkxFMUJRVXRzUWl4TlFVRk1MRU5CUVZsRExFMUJRVm9zUTBGQmJVSkRMRXRCUVc1Q0xFbEJRVFJDTEVOQlFXaERMRVZCUVcxRE8wRkJReTlDTEZsQlFVdERMRk5CUVV3N1FVRkRTRHM3UVVGVWNVSTdRVUZWZWtJN08wRkJXRXc3UVVGQlFUdEJRVUZCTEdkRFFXRm5RanRCUVVGQk96dEJRVU5TTEZkQlFVdElMRTFCUVV3c1EwRkJXV3RDTEVsQlFWb3NRMEZCYVVJc1MwRkJTMjVDTEVsQlFYUkNMRVZCUVRSQ0xGVkJRVU52UWl4RFFVRkVMRVZCUVU4N1FVRkRMMElzWTBGQlNTeERRVUZEUkN4SlFVRk1MRWRCUVZsRExFTkJRVU1zUTBGQlEySXNTVUZCUml4RFFVRlBXU3hKUVVGdVFqczdRVUZGUVN4alFVRkpMRU5CUVVOc1FpeE5RVUZNTEVOQlFWbEpMRWxCUVZvc1EwRkJhVUk3UVVGRFlrTXNaVUZCU3l4RlFVRkZMRmRCUkUwN1FVRkZZa01zWTBGQlNTeEZRVUZGTzBGQlEwWkRMRzFDUVVGUExFVkJRVVVzVFVGQlNTeERRVUZEVWl4SlFVUmFPMEZCUlVadFFpeG5Ra0ZCU1N4RlFVRkZMRTFCUVVrc1EwRkJRMEVzU1VGR1ZEdEJRVWRHUlN4M1FrRkJXU3hGUVVGRlJDeERRVUZETEVOQlFVTmlMRWxCUVVZc1EwRkJUMk03UVVGSWJrSTdRVUZHVHl4VFFVRnFRanRCUVZGSUxFOUJXRVE3UVVGWlNEdEJRVEZDVERzN1FVRkJRVHRCUVVGQkxFVkJRWEZEV2l3MlJFRkJja01zUlRzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPMEZEUmtFN1FVRkZUeXhKUVVGTlVTeGpRVUZpTzBGQlFVRTdRVUZCUVR0QlFVRkJPenRCUVVOSkxEQkNRVUZaYWtJc1NVRkJXaXhGUVVGclFrTXNUVUZCYkVJc1JVRkJNRUk3UVVGQlFUczdRVUZCUVRzN1FVRkRkRUk3UVVGRlFTeFZRVUZMUkN4SlFVRk1MRWRCUVZsQkxFbEJRVm83UVVGRFFTeFZRVUZMUXl4TlFVRk1MRWRCUVdOQkxFMUJRV1E3UVVGRFFTeFZRVUZMYTBJc1NVRkJUQ3hIUVVGWkxFbEJRVm83TzBGQlJVRXNVVUZCU1N4TlFVRkxiRUlzVFVGQlRDeERRVUZaUXl4TlFVRmFMRU5CUVcxQ1F5eExRVUZ1UWl4SlFVRTBRaXhEUVVGb1F5eEZRVUZ0UXp0QlFVTXZRaXhaUVVGTFF5eFRRVUZNTzBGQlEwZzdPMEZCVkhGQ08wRkJWWHBDT3p0QlFWaE1PMEZCUVVFN1FVRkJRU3huUTBGaFowSTdRVUZCUVRzN1FVRkRVaXhYUVVGTFNDeE5RVUZNTEVOQlFWbHJRaXhKUVVGYUxFTkJRV2xDTEV0QlFVdHVRaXhKUVVGMFFpeEZRVUUwUWl4VlFVRkRiMElzUTBGQlJDeEZRVUZQTzBGQlF5OUNMR05CUVVrc1EwRkJRMFFzU1VGQlRDeEhRVUZaUXl4RFFVRkRMRU5CUVVOaUxFbEJRVVlzUTBGQlQxa3NTVUZCYmtJN08wRkJSVUVzWTBGQlNTeERRVUZEYkVJc1RVRkJUQ3hEUVVGWlNTeEpRVUZhTEVOQlFXbENPMEZCUTJKRExHVkJRVXNzUlVGQlJTeFhRVVJOTzBGQlJXSkRMR05CUVVrc1JVRkJSVHRCUVVOR1F5eHRRa0ZCVHl4RlFVRkZMRTFCUVVrc1EwRkJRMUlzU1VGRVdqdEJRVVZHYlVJc1owSkJRVWtzUlVGQlJTeE5RVUZKTEVOQlFVTkJPMEZCUmxRN1FVRkdUeXhUUVVGcVFqdEJRVTlJTEU5QlZrUTdRVUZYU0R0QlFYcENURHM3UVVGQlFUdEJRVUZCTEVWQlFXOURWaXcyUkVGQmNFTXNSVHM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN08wRkRSa0U3UVVGRlR5eEpRVUZOWVN4TlFVRmlPMEZCUVVFN1FVRkJRVHRCUVVGQk96dEJRVU5KTEd0Q1FVRlpja0lzVFVGQldpeEZRVUZ2UW5OQ0xFbEJRWEJDTEVWQlFUQkNPMEZCUVVFN08wRkJRVUU3TzBGQlEzUkNPMEZCUlVFc1ZVRkJTM1JDTEUxQlFVd3NSMEZCWTBFc1RVRkJaRHRCUVVOQkxGVkJRVXRETEUxQlFVd3NSMEZCWXl4SlFVRkpjMElzVTBGQlNpeERRVUZqUkN4SlFVRkpMRWRCUVVjc1IwRkJVQ3hIUVVGaExFMUJRVXQwUWl4TlFVRk1MRU5CUVZsM1FpeEhRVUYyUXl4RFFVRmtPenRCUVVWQkxGVkJRVXRETEdGQlFVdzdPMEZCVG5OQ08wRkJUM3BDT3p0QlFWSk1PMEZCUVVFN1FVRkJRU3h2UTBGVmIwSTdRVUZCUVRzN1FVRkRXaXhYUVVGTGVFSXNUVUZCVEN4RFFVRlplVUlzVFVGQldpeEhRVUZ4UWl4WlFVRk5PMEZCUTNaQ0xHTkJRVWtzUTBGQlEwTXNUVUZCVER0QlFVTklMRTlCUmtRN08wRkJSMEVzVjBGQlN6RkNMRTFCUVV3c1EwRkJXVEpDTEU5QlFWb3NSMEZCYzBJc1ZVRkJRME1zUzBGQlJDeEZRVUZYTzBGQlF6ZENMR05CUVVrc1EwRkJRME1zVDBGQlRDeERRVUZoUkN4TFFVRmlPMEZCUTBnc1QwRkdSRHM3UVVGSFFTeFhRVUZMTlVJc1RVRkJUQ3hEUVVGWk9FSXNUMEZCV2l4SFFVRnpRaXhWUVVGRFF5eFZRVUZFTEVWQlFXZENPMEZCUTJ4RExHTkJRVWtzUTBGQlEwTXNUMEZCVEN4RFFVRmhSQ3hWUVVGaU8wRkJRMGdzVDBGR1JEczdRVUZIUVN4WFFVRkxMMElzVFVGQlRDeERRVUZaYVVNc1UwRkJXaXhIUVVGM1FpeFZRVUZEUXl4UFFVRkVMRVZCUVdFN1FVRkRha01zWTBGQlNTeERRVUZEUXl4VFFVRk1MRU5CUVdWRUxFOUJRV1k3UVVGRFNDeFBRVVpFTzBGQlIwZzdRVUYyUWt3N1FVRkJRVHRCUVVGQkxEWkNRWGxDWVR0QlFVRkJPenRCUVVOTU8wRkJRMEVzVjBGQlMycERMRXRCUVV3c1IwRkJZU3hEUVVGaU8wRkJSVUVzVjBGQlMyMURMRWxCUVV3c1EwRkJWU3gxUWtGQlZpeEZRVUZ0UXl4VlFVRkRiRUlzUTBGQlJDeEZRVUZQTzBGQlEzUkRMR05CUVVrc1EwRkJRMnhDTEUxQlFVd3NRMEZCV1hGRExGTkJRVm9zUjBGQmQwSnVRaXhEUVVGRExFTkJRVU50UWl4VFFVRXhRanRCUVVOQkxHTkJRVWtzUTBGQlEzQkRMRXRCUVV3c1IwRkJZU3hEUVVGaUxFTkJSbk5ETEVOQlNYUkRPenRCUVVOQkxHTkJRVWtzUTBGQlEwWXNUVUZCVEN4RFFVRlpWU3hSUVVGYUxFTkJRWEZDVUN4VFFVRnlRanRCUVVOSUxFOUJUa1E3UVVGUlFTeFhRVUZMYTBNc1NVRkJUQ3hEUVVGVkxIRkNRVUZXTEVWQlFXbERMRlZCUVVOc1FpeERRVUZFTEVWQlFVODdRVUZEY0VNc1kwRkJTU3hEUVVGRGFrSXNTMEZCVEN4SFFVRmhMRU5CUVVNc1EwRkJaRHRCUVVOQmNVTXNaVUZCVHl4RFFVRkRWaXhMUVVGU0xFTkJRV05XTEVOQlFVTXNRMEZCUTFVc1MwRkJhRUk3UVVGRFNDeFBRVWhFTzBGQlMwRXNWMEZCUzNwQ0xFbEJRVXdzUTBGQlZUdEJRVU5PUXl4aFFVRkxMRVZCUVVVN1FVRkVSQ3hQUVVGV08wRkJSMGc3UVVFM1EwdzdRVUZCUVR0QlFVRkJMRFJDUVN0RFdYZENMRXRCTDBOYUxFVkJLME50UWp0QlFVTllWU3hoUVVGUExFTkJRVU5XTEV0QlFWSXNRMEZCWTBFc1MwRkJaRHRCUVVOSU8wRkJha1JNTzBGQlFVRTdRVUZCUVN3MFFrRnRSRmxITEZWQmJrUmFMRVZCYlVSM1FqdEJRVU5vUWl4VlFVRkpMRXRCUVVzdlFpeE5RVUZNTEVOQlFWbDFReXhWUVVGYUxFbEJRVEJDYWtJc1UwRkJVeXhEUVVGRGEwSXNUVUZCZUVNc1JVRkJaMFE3UVVGRE5VTXNXVUZCU1ZRc1ZVRkJWU3hEUVVGRFZTeEpRVUZZTEVsQlFXMUNMRTlCUVhaQ0xFVkJRV2RETzBGQlF6VkNTQ3hwUWtGQlR5eERRVUZEVml4TFFVRlNMRU5CUVdNc1pVRkJaRHRCUVVOSUxGTkJSa1FzVFVGRlR5eEpRVUZKUnl4VlFVRlZMRU5CUVVOVkxFbEJRVmdzU1VGQmJVSXNVMEZCZGtJc1JVRkJhME03UVVGRGNrTklMR2xDUVVGUExFTkJRVU5XTEV0QlFWSXNRMEZCWTBjc1ZVRkJWU3hEUVVGRE1VSXNTVUZCZWtJN1FVRkRTQ3hUUVVaTkxFMUJSVUU3UVVGRFNHbERMR2xDUVVGUExFTkJRVU5XTEV0QlFWSXNRMEZCWXl4UFFVRmtPMEZCUTBnN1FVRkRTanRCUVVOS08wRkJOMFJNTzBGQlFVRTdRVUZCUVN3NFFrRXJSR05OTEU5QkwwUmtMRVZCSzBSMVFqdEJRVU5tTEZWQlFVbFJMRXRCUVVzc1IwRkJSME1zU1VGQlNTeERRVUZEUXl4TFFVRk1MRU5CUVZkV0xFOUJRVThzUTBGQlF6ZENMRWxCUVc1Q0xFTkJRVm83UVVGRFFTeFZRVUZKUkN4TFFVRkxMRWRCUVVkelF5eExRVUZMTEVOQlFVTjBReXhMUVVGc1FqdEJRVU5CTEZWQlFVbERMRWxCUVVrc1IwRkJSM0ZETEV0QlFVc3NRMEZCUTNKRExFbEJRV3BDT3p0QlFVVkJMRlZCUVVseFF5eExRVUZMTEVOQlFVTndReXhQUVVGT0xFdEJRV3RDZFVNc1UwRkJkRUlzUlVGQmFVTTdRVUZETjBJc1lVRkJTemxETEUxQlFVd3NRMEZCV1ZVc1VVRkJXaXhEUVVGeFFuRkRMRWxCUVhKQ0xFTkJRVEJDU2l4TFFVRkxMRU5CUVVOd1F5eFBRVUZvUXl4RlFVRjVRM2xETEVsQlFYcERMRU5CUVRoRE0wTXNTMEZCT1VNc1JVRkJjVVJETEVsQlFYSkVPMEZCUTBnc1QwRkdSQ3hOUVVWUE8wRkJRMGdzWVVGQlN6QkRMRWxCUVV3c1EwRkJWVE5ETEV0QlFWWXNSVUZCYVVKRExFbEJRV3BDTzBGQlEwZzdRVUZGU2p0QlFURkZURHRCUVVGQk8wRkJRVUVzZVVKQk5FVlRNa01zU1VFMVJWUXNSVUUwUldVN1FVRkRVQ3hWUVVGSkxFdEJRVXN2UXl4TFFVRk1MRXRCUVdVc1EwRkJReXhEUVVGd1FpeEZRVUYxUWp0QlFVTnVRaXhoUVVGTFJDeE5RVUZNTEVOQlFWbEhMRWxCUVZvc1EwRkJhVUozUXl4SlFVRkpMRU5CUVVOTkxGTkJRVXdzUTBGQlpVUXNTVUZCWml4RFFVRnFRanRCUVVOSU8wRkJRMG83UVVGb1JrdzdPMEZCUVVFN1FVRkJRU3hGUVVFMFFucERMRFpFUVVFMVFpeEZPenM3T3pzN096czdPenM3T3pzN096czdPenRCUTBaUExFbEJRVTB5UXl4blFrRkJZanRCUVVGQk8wRkJRVUU3UVVGRFNTdzRRa0ZCWXp0QlFVRkJPenRCUVVOV0xGTkJRVXRETEZWQlFVd3NSMEZCYTBJc1JVRkJiRUk3UVVGRFNEczdRVUZJVER0QlFVRkJPMEZCUVVFc2QwSkJTMUZ5UkN4SlFVeFNMRVZCUzJNN1FVRkRUaXhoUVVGUExFdEJRVXR4UkN4VlFVRk1MRU5CUVdkQ1F5eE5RVUZOTEVOQlFVTjBSQ3hKUVVGRUxFTkJRWFJDTEVOQlFWQTdRVUZEU0R0QlFWQk1PMEZCUVVFN1FVRkJRU3gzUWtGVFVVRXNTVUZVVWl4RlFWTmpkVVFzVVVGVVpDeEZRVk4zUWtNc1QwRlVlRUlzUlVGVGFVTTdRVUZEZWtJc1ZVRkJTVU1zYVVKQlFXbENMRWRCUVVkSUxFMUJRVTBzUTBGQlEzUkVMRWxCUVVRc1EwRkJPVUk3UVVGRFFTeFhRVUZMY1VRc1ZVRkJUQ3hEUVVGblFra3NhVUpCUVdoQ0xFbEJRWEZETEV0QlFVdEtMRlZCUVV3c1EwRkJaMEpKTEdsQ1FVRm9RaXhMUVVGelF5eEZRVUV6UlRzN1FVRkRRU3hYUVVGTFNpeFZRVUZNTEVOQlFXZENTU3hwUWtGQmFFSXNSVUZCYlVORExFbEJRVzVETEVOQlFYZERPMEZCUTNCRFF5eFZRVUZGTEVWQlFVVktMRkZCUkdkRE8wRkJSWEJEUXl4bFFVRlBMRVZCUVVWQk8wRkJSakpDTEU5QlFYaERPMEZCU1VnN1FVRm9Ra3c3UVVGQlFUdEJRVUZCTERKQ1FXdENWM2hFTEVsQmJFSllMRVZCYTBKcFFuVkVMRkZCYkVKcVFpeEZRV3RDTWtKRExFOUJiRUl6UWl4RlFXdENiME03UVVGRE5VSXNWVUZCU1N4RFFVRkRlRVFzU1VGQlJDeEpRVUZUTEVOQlFVTjFSQ3hSUVVGV0xFbEJRWE5DTEVOQlFVTkRMRTlCUVROQ0xFVkJRVzlETzBGQlEyaERMR0ZCUVV0SUxGVkJRVXdzUjBGQmEwSXNSVUZCYkVJN1FVRkRRVHRCUVVOSU96dEJRVVZFTEZWQlFVbFBMRXRCUVVzc1IwRkJSelZFTEVsQlFVa3NSMEZCUnl4RFFVRkRjMFFzVFVGQlRTeERRVUZEZEVRc1NVRkJSQ3hEUVVGUUxFTkJRVWdzUjBGQmIwSmhMRTFCUVUwc1EwRkJRME1zU1VGQlVDeERRVUZaTEV0QlFVdDFReXhWUVVGcVFpeERRVUZ3UXpzN1FVRkZRU3hWUVVGSlJTeFJRVUZSTEVsQlFVbERMRTlCUVdoQ0xFVkJRWGxDTzBGQlEzSkNMR0ZCUVV0TExHTkJRVXdzUTBGQmIwSkVMRXRCUVhCQ0xFVkJRVEpDVEN4UlFVRXpRaXhGUVVGeFEwTXNUMEZCY2tNN1FVRkRTQ3hQUVVaRUxFMUJSVTg3UVVGRFNDeGhRVUZMVFN4clFrRkJUQ3hEUVVGM1FrWXNTMEZCZUVJN1FVRkRTRHRCUVVOS08wRkJMMEpNTzBGQlFVRTdRVUZCUVN4dFEwRnBRMjFDUVN4TFFXcERia0lzUlVGcFF6QkNUQ3hSUVdwRE1VSXNSVUZwUTI5RFF5eFBRV3BEY0VNc1JVRnBRelpETzBGQlEzSkRMRmRCUVVzc1NVRkJTWGhFTEVsQlFWUXNTVUZCYVVJMFJDeExRVUZxUWl4RlFVRjNRanRCUVVOd1FpeGhRVUZMTEVsQlFVbHVReXhIUVVGVUxFbEJRV2RDTEV0QlFVczBRaXhWUVVGTUxFTkJRV2RDY2tRc1NVRkJhRUlzUTBGQmFFSXNSVUZCZFVNN1FVRkRia01zWTBGQlNTeExRVUZMY1VRc1ZVRkJUQ3hEUVVGblFuSkVMRWxCUVdoQ0xFVkJRWE5DZVVJc1IwRkJkRUlzUlVGQk1rSnJReXhGUVVFelFpeEpRVUZwUTBvc1VVRkJha01zU1VGQk5rTXNTMEZCUzBZc1ZVRkJUQ3hEUVVGblFuSkVMRWxCUVdoQ0xFVkJRWE5DZVVJc1IwRkJkRUlzUlVGQk1rSXJRaXhQUVVFelFpeEpRVUZ6UTBFc1QwRkJka1lzUlVGQlowYzdRVUZETlVZc2JVSkJRVThzUzBGQlMwZ3NWVUZCVEN4RFFVRm5RbkpFTEVsQlFXaENMRVZCUVhOQ2VVSXNSMEZCZEVJc1EwRkJVRHRCUVVOSU8wRkJRMG83TzBGQlJVUXNXVUZCU1N4TFFVRkxORUlzVlVGQlRDeERRVUZuUW5KRUxFbEJRV2hDTEVWQlFYTkNLMFFzVFVGQmRFSXNTMEZCYVVNc1EwRkJja01zUlVGQmQwTTdRVUZEY0VNc2FVSkJRVThzUzBGQlMxWXNWVUZCVEN4RFFVRm5RbkpFTEVsQlFXaENMRU5CUVZBN1FVRkRTRHRCUVVOS08wRkJRMG83UVVFM1EwdzdRVUZCUVR0QlFVRkJMSFZEUVN0RGRVSTBSQ3hMUVM5RGRrSXNSVUVyUXpoQ08wRkJRM1JDTEZkQlFVc3NTVUZCU1RWRUxFbEJRVlFzU1VGQmFVSTBSQ3hMUVVGcVFpeEZRVUYzUWp0QlFVTndRaXhsUVVGUExFdEJRVXRRTEZWQlFVd3NRMEZCWjBKeVJDeEpRVUZvUWl4RFFVRlFPMEZCUTBnN1FVRkRTanRCUVc1RVREczdRVUZCUVR0QlFVRkJPenRCUVhORVFTeFRRVUZUYzBRc1RVRkJWQ3hEUVVGblFuUkVMRWxCUVdoQ0xFVkJRWE5DTzBGQlEyeENMRk5CUVU4c1RVRkJUVUVzU1VGQllqdEJRVU5JTEVNN096czdPenM3T3pzN096czdPenM3T3pzN096dEJRM2hFUkR0QlFVVlBMRWxCUVUxVExGVkJRV0k3UVVGQlFUdEJRVUZCTzBGQlEwa3NkMEpCUVdNN1FVRkJRVHM3UVVGRFZpeFRRVUZMZFVRc1UwRkJUQ3hIUVVGcFFpeEpRVUZKV2l4dFJVRkJTaXhGUVVGcVFqdEJRVU5CTEZOQlFVdGhMR2RDUVVGTUxFZEJRWGRDTEVWQlFYaENPMEZCUTBnN08wRkJTa3c3UVVGQlFUdEJRVUZCTEhsQ1FVMVRReXhUUVU1VUxFVkJUVzlDV0N4UlFVNXdRaXhGUVUwNFFrTXNUMEZPT1VJc1JVRk5kVU03UVVGREwwSXNWMEZCUzFFc1UwRkJUQ3hEUVVGbFJ5eEhRVUZtTEVOQlFXMUNSQ3hUUVVGdVFpeEZRVUU0UWxnc1VVRkJPVUlzUlVGQmQwTkRMRTlCUVhoRE8wRkJRMEVzWVVGQlR5eEpRVUZRTzBGQlEwZzdRVUZVVER0QlFVRkJPMEZCUVVFc1owTkJWMmRDUkN4UlFWaG9RaXhGUVZjd1FqdEJRVU5zUWl4WFFVRkxWU3huUWtGQlRDeERRVUZ6UWxBc1NVRkJkRUlzUTBGQk1rSklMRkZCUVROQ08wRkJRMEVzWVVGQlR5eEpRVUZRTzBGQlEwZzdRVUZrVER0QlFVRkJPMEZCUVVFc01rSkJaMEpYVnl4VFFXaENXQ3hGUVdkQ2MwSllMRkZCYUVKMFFpeEZRV2RDWjBORExFOUJhRUpvUXl4RlFXZENlVU03UVVGRGFrTXNWMEZCUzFFc1UwRkJUQ3hEUVVGbFNTeE5RVUZtTEVOQlFYTkNSaXhUUVVGMFFpeEZRVUZwUTFnc1VVRkJha01zUlVGQk1rTkRMRTlCUVRORE8wRkJRMEVzWVVGQlR5eEpRVUZRTzBGQlEwZzdRVUZ1UWt3N1FVRkJRVHRCUVVGQkxHdERRWEZDYTBKRUxGRkJja0pzUWl4RlFYRkNORUk3UVVGRGNFSXNWVUZCU1N4RFFVRkRRU3hSUVVGTUxFVkJRV1U3UVVGRFdDeGhRVUZMVlN4blFrRkJUQ3hIUVVGM1FpeEZRVUY0UWp0QlFVTkJMR1ZCUVU4c1NVRkJVRHRCUVVOSU96dEJRVVZFTEZkQlFVc3NTVUZCU1d4RUxFTkJRVlFzU1VGQll5eExRVUZMYTBRc1owSkJRVzVDTEVWQlFYRkRPMEZCUTJwRExGbEJRVWxXTEZGQlFWRXNTVUZCU1N4TFFVRkxWU3huUWtGQlRDeERRVUZ6UW14RUxFTkJRWFJDTEVOQlFXaENMRVZCUVRCRE8wRkJRM1JETEdsQ1FVRlBMRXRCUVV0clJDeG5Ra0ZCVEN4RFFVRnpRbXhFTEVOQlFYUkNMRU5CUVZBN1FVRkRTRHRCUVVOS096dEJRVU5FTEdGQlFVOHNTVUZCVUR0QlFVTklPMEZCYWtOTU8wRkJRVUU3UVVGQlFTeHBRMEZ0UTJsQ08wRkJRMVFzVjBGQlMzTkVMRTFCUVV3N1FVRkRRU3hYUVVGTFF5eGhRVUZNTzBGQlEwRXNZVUZCVHl4SlFVRlFPMEZCUTBnN1FVRjJRMHc3UVVGQlFUdEJRVUZCTEhsQ1FYbERVMG9zVTBGNlExUXNSVUY1UTI5Q00wUXNTVUY2UTNCQ0xFVkJlVU13UWp0QlFVTnNRaXhYUVVGTExFbEJRVWxSTEVOQlFVTXNSMEZCUnl4RFFVRmlMRVZCUVdkQ1FTeERRVUZETEVkQlFVY3NTMEZCUzJ0RUxHZENRVUZNTEVOQlFYTkNSaXhOUVVFeFF5eEZRVUZyUkdoRUxFTkJRVU1zUlVGQmJrUXNSVUZCZFVRN1FVRkRia1FzWVVGQlMydEVMR2RDUVVGTUxFTkJRWE5DYkVRc1EwRkJkRUlzUlVGQmVVSnRSQ3hUUVVGNlFpeEZRVUZ2UXpORUxFbEJRWEJETzBGQlEwZzdPMEZCUlVRc1ZVRkJTWGxFTEZOQlFWTXNSMEZCUnl4TFFVRkxRU3hUUVVGTUxFTkJRV1ZQTEVkQlFXWXNRMEZCYlVKTUxGTkJRVzVDTEVOQlFXaENPenRCUVVOQkxGVkJRVWxHTEZOQlFWTXNTVUZCU1VFc1UwRkJVeXhEUVVGRFJDeE5RVUZXTEVkQlFXMUNMRU5CUVhCRExFVkJRWFZETzBGQlEyNURMR0ZCUVVzc1NVRkJTV2hFTEVWQlFVTXNSMEZCUnl4RFFVRmlMRVZCUVdkQ1FTeEZRVUZETEVkQlFVZHBSQ3hUUVVGVExFTkJRVU5FTEUxQlFUbENMRVZCUVhORGFFUXNSVUZCUXl4RlFVRjJReXhGUVVFeVF6dEJRVU4yUTJsRUxHMUNRVUZUTEVOQlFVTnFSQ3hGUVVGRUxFTkJRVlFzUTBGQllUUkRMRVZCUVdJc1EwRkJaMEpoTEVsQlFXaENMRU5CUVhGQ1VpeFRRVUZUTEVOQlFVTnFSQ3hGUVVGRUxFTkJRVlFzUTBGQllYbERMRTlCUVd4RExFVkJRVEpEYWtRc1NVRkJNME03UVVGRFNEdEJRVU5LT3p0QlFVVkVMR0ZCUVU4c1NVRkJVRHRCUVVOSU8wRkJkRVJNT3p0QlFVRkJPMEZCUVVFc1NUczdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3p0QlEwWkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJSVThzU1VGQlRXdEZMRTFCUVdJN1FVRkJRVHRCUVVGQk8wRkJRMGtzYTBKQlFWbERMRTlCUVZvc1JVRkJjVUpETEU5QlFYSkNMRVZCUVRoQ08wRkJRVUU3TzBGQlF6RkNMRk5CUVV0RExGZEJRVXdzUTBGQmFVSkdMRTlCUVdwQ08wRkJSVUVzVTBGQlMycEVMRWRCUVV3c1IwRkJWMmxFTEU5QlFWZzdRVUZEUVN4VFFVRkxReXhQUVVGTUxFZEJRV1ZCTEU5QlFVOHNTVUZCU1N4RlFVRXhRanRCUVVOQkxGTkJRVXRGTEZWQlFVd3NSMEZCYTBJc1NVRkJTWEJGTERaRVFVRktMRVZCUVd4Q08wRkJRMEVzVTBGQlMwVXNVVUZCVEN4SFFVRm5RaXhKUVVGSlJDd3lSRUZCU2l4RlFVRm9RanRCUVVWQkxGTkJRVXR2UlN4UFFVRk1PMEZCUTBnN08wRkJWa3c3UVVGQlFUdEJRVUZCTERoQ1FWbGpPMEZCUTA0c1YwRkJTelZGTEUxQlFVd3NSMEZCWXl4SlFVRkpiMElzZVVSQlFVb3NRMEZCVnl4SlFVRllMRVZCUVdsQ0xFdEJRVXR4UkN4UFFVRk1MRU5CUVdGd1JDeEpRVUU1UWl4RFFVRmtPMEZCUTBnN1FVRmtURHRCUVVGQk8wRkJRVUVzT0VKQlowSmpkMFFzV1VGb1FtUXNSVUZuUWpSQ08wRkJRM0JDTEdGQlFVOHNTMEZCUzNCRkxGRkJRVXdzUTBGQlkzZEVMRWRCUVdRc1EwRkJhMEpaTEZsQlFXeENMRVZCUVdkRExFbEJRV2hETEVOQlFWQTdRVUZEU0R0QlFXeENURHRCUVVGQk8wRkJRVUVzWjBOQmIwSm5Ra0VzV1VGd1FtaENMRVZCYjBJNFFqdEJRVU4wUWl4WFFVRkxjRVVzVVVGQlRDeERRVUZqZVVRc1RVRkJaQ3hEUVVGeFFsY3NXVUZCY2tJN1FVRkRTRHRCUVhSQ1REdEJRVUZCTzBGQlFVRXNhME5CZDBKclFqdEJRVU5XTEdGQlFVOHNTMEZCU3pkRkxFMUJRVXdzUTBGQldVRXNUVUZCV2l4RFFVRnRRbkZETEZOQlFURkNPMEZCUTBnN1FVRXhRa3c3UVVGQlFUdEJRVUZCTEhsQ1FUUkNVMWNzU1VFMVFsUXNSVUUwUW1VN1FVRkRVQ3hYUVVGTGFFUXNUVUZCVEN4RFFVRlpSeXhKUVVGYUxFTkJRV2xDTmtNc1NVRkJha0k3UVVGRFNEdEJRVGxDVER0QlFVRkJPMEZCUVVFc1owTkJaME5uUW5wQ0xFZEJhRU5vUWl4RlFXZERjVUk3UVVGRFlpeGhRVUZQTEVsQlFWQTdRVUZEU0R0QlFXeERURHRCUVVGQk8wRkJRVUVzZVVKQmIwTlRla0lzU1VGd1ExUXNSVUZ2UTJWMVJDeFJRWEJEWml4RlFXOURlVUk3UVVGRGFrSXNWVUZCU1hsQ0xFMUJRVTBzUjBGQlJ5eExRVUZMVEN4UFFVRk1MRU5CUVdGNFJDeEpRVUZpTEVOQlFXdENOa1FzVFVGQmJFSXNTVUZCTkVJc1RVRkJla003UVVGRFFTeFZRVUZKZWtVc1NVRkJTU3hIUVVGSExFVkJRVmc3UVVGRFFTeFZRVUZKTUVVc1RVRkJUU3hIUVVGSExFVkJRV0k3TzBGQlJVRXNWVUZCU1VRc1RVRkJUU3hKUVVGSkxFMUJRV1FzUlVGQmMwSTdRVUZEYkVKNlJTeFpRVUZKTEVkQlFVZE5MRTFCUVUwc1EwRkJRM0ZGTEUxQlFWQXNRMEZCWXp0QlFVTnFRa2dzYzBKQlFWa3NSVUZCUlM5RkxFbEJSRWM3UVVGRmFrSjFReXh0UWtGQlV5eEZRVUZGTEV0QlFVczBReXhYUVVGTU8wRkJSazBzVTBGQlpDeERRVUZRTzBGQlNVZ3NUMEZNUkN4TlFVdFBPMEZCUTBoR0xHTkJRVTBzUjBGQlIzQkZMRTFCUVUwc1EwRkJRM0ZGTEUxQlFWQXNRMEZCWXp0QlFVTnVRa2dzYzBKQlFWa3NSVUZCUlM5RkxFbEJSRXM3UVVGRmJrSjFReXh0UWtGQlV5eEZRVUZGTEV0QlFVczBReXhYUVVGTU8wRkJSbEVzVTBGQlpDeERRVUZVTzBGQlNVZzdPMEZCUlVSRExHdEVRVUZMTEVOQlFVTTdRVUZEUmtNc1YwRkJSeXhGUVVGRkxFdEJRVXRXTEU5QlFVd3NRMEZCWVhoRUxFbEJRV0lzUTBGQmEwSnJSU3hIUVVSeVFqdEJRVVZHVEN4alFVRk5MRVZCUVVWQkxFMUJSazQ3UVVGSFJrMHNaVUZCVHl4RlFVRkZMRXRCUVV0WUxFOUJRVXdzUTBGQllYaEVMRWxCUVdJc1EwRkJhMEp0UlN4UFFVRnNRaXhKUVVFMlFpeEZRVWh3UXp0QlFVbEdUQ3hqUVVGTkxFVkJRVVZCTEUxQlNrNDdRVUZMUmpGRkxGbEJRVWtzUlVGQlJVRTdRVUZNU2l4UFFVRkVMRU5CUVV3c1EwRk5SMmRHTEVsQlRrZ3NRMEZOVVN4VlFVRkRia1VzUTBGQlJDeEZRVUZQTzBGQlExaHRReXhuUWtGQlVTeERRVUZEYmtNc1EwRkJSQ3hEUVVGU08wRkJRMGdzVDBGU1JDeEZRVkZIYjBVc1MwRlNTQ3hEUVZGVExGVkJRVU53UlN4RFFVRkVMRVZCUVU4N1FVRkRXbTlDTEdWQlFVOHNRMEZCUTFZc1MwRkJVaXhEUVVGakxGZEJRV1E3UVVGRFNDeFBRVlpFTzBGQlYwZzdRVUZvUlV3N08wRkJRVUU3UVVGQlFUdEJRVzFGUVRKRUxFMUJRVTBzUTBGQlEyaENMRTFCUVZBc1IwRkJaMEpCTEUxQlFXaENMRU1pTENKbWFXeGxJam9pY0hWemFHVnlMbXB6SWl3aWMyOTFjbU5sYzBOdmJuUmxiblFpT2xzaUlGeDBMeThnVkdobElHMXZaSFZzWlNCallXTm9aVnh1SUZ4MGRtRnlJR2x1YzNSaGJHeGxaRTF2WkhWc1pYTWdQU0I3ZlR0Y2JseHVJRngwTHk4Z1ZHaGxJSEpsY1hWcGNtVWdablZ1WTNScGIyNWNiaUJjZEdaMWJtTjBhVzl1SUY5ZmQyVmljR0ZqYTE5eVpYRjFhWEpsWDE4b2JXOWtkV3hsU1dRcElIdGNibHh1SUZ4MFhIUXZMeUJEYUdWamF5QnBaaUJ0YjJSMWJHVWdhWE1nYVc0Z1kyRmphR1ZjYmlCY2RGeDBhV1lvYVc1emRHRnNiR1ZrVFc5a2RXeGxjMXR0YjJSMWJHVkpaRjBwSUh0Y2JpQmNkRngwWEhSeVpYUjFjbTRnYVc1emRHRnNiR1ZrVFc5a2RXeGxjMXR0YjJSMWJHVkpaRjB1Wlhod2IzSjBjenRjYmlCY2RGeDBmVnh1SUZ4MFhIUXZMeUJEY21WaGRHVWdZU0J1WlhjZ2JXOWtkV3hsSUNoaGJtUWdjSFYwSUdsMElHbHVkRzhnZEdobElHTmhZMmhsS1Z4dUlGeDBYSFIyWVhJZ2JXOWtkV3hsSUQwZ2FXNXpkR0ZzYkdWa1RXOWtkV3hsYzF0dGIyUjFiR1ZKWkYwZ1BTQjdYRzRnWEhSY2RGeDBhVG9nYlc5a2RXeGxTV1FzWEc0Z1hIUmNkRngwYkRvZ1ptRnNjMlVzWEc0Z1hIUmNkRngwWlhod2IzSjBjem9nZTMxY2JpQmNkRngwZlR0Y2JseHVJRngwWEhRdkx5QkZlR1ZqZFhSbElIUm9aU0J0YjJSMWJHVWdablZ1WTNScGIyNWNiaUJjZEZ4MGJXOWtkV3hsYzF0dGIyUjFiR1ZKWkYwdVkyRnNiQ2h0YjJSMWJHVXVaWGh3YjNKMGN5d2diVzlrZFd4bExDQnRiMlIxYkdVdVpYaHdiM0owY3l3Z1gxOTNaV0p3WVdOclgzSmxjWFZwY21WZlh5azdYRzVjYmlCY2RGeDBMeThnUm14aFp5QjBhR1VnYlc5a2RXeGxJR0Z6SUd4dllXUmxaRnh1SUZ4MFhIUnRiMlIxYkdVdWJDQTlJSFJ5ZFdVN1hHNWNiaUJjZEZ4MEx5OGdVbVYwZFhKdUlIUm9aU0JsZUhCdmNuUnpJRzltSUhSb1pTQnRiMlIxYkdWY2JpQmNkRngwY21WMGRYSnVJRzF2WkhWc1pTNWxlSEJ2Y25Sek8xeHVJRngwZlZ4dVhHNWNiaUJjZEM4dklHVjRjRzl6WlNCMGFHVWdiVzlrZFd4bGN5QnZZbXBsWTNRZ0tGOWZkMlZpY0dGamExOXRiMlIxYkdWelgxOHBYRzRnWEhSZlgzZGxZbkJoWTJ0ZmNtVnhkV2x5WlY5ZkxtMGdQU0J0YjJSMWJHVnpPMXh1WEc0Z1hIUXZMeUJsZUhCdmMyVWdkR2hsSUcxdlpIVnNaU0JqWVdOb1pWeHVJRngwWDE5M1pXSndZV05yWDNKbGNYVnBjbVZmWHk1aklEMGdhVzV6ZEdGc2JHVmtUVzlrZFd4bGN6dGNibHh1SUZ4MEx5OGdaR1ZtYVc1bElHZGxkSFJsY2lCbWRXNWpkR2x2YmlCbWIzSWdhR0Z5Ylc5dWVTQmxlSEJ2Y25SelhHNGdYSFJmWDNkbFluQmhZMnRmY21WeGRXbHlaVjlmTG1RZ1BTQm1kVzVqZEdsdmJpaGxlSEJ2Y25SekxDQnVZVzFsTENCblpYUjBaWElwSUh0Y2JpQmNkRngwYVdZb0lWOWZkMlZpY0dGamExOXlaWEYxYVhKbFgxOHVieWhsZUhCdmNuUnpMQ0J1WVcxbEtTa2dlMXh1SUZ4MFhIUmNkRTlpYW1WamRDNWtaV1pwYm1WUWNtOXdaWEowZVNobGVIQnZjblJ6TENCdVlXMWxMQ0I3SUdWdWRXMWxjbUZpYkdVNklIUnlkV1VzSUdkbGREb2daMlYwZEdWeUlIMHBPMXh1SUZ4MFhIUjlYRzRnWEhSOU8xeHVYRzRnWEhRdkx5QmtaV1pwYm1VZ1gxOWxjMDF2WkhWc1pTQnZiaUJsZUhCdmNuUnpYRzRnWEhSZlgzZGxZbkJoWTJ0ZmNtVnhkV2x5WlY5ZkxuSWdQU0JtZFc1amRHbHZiaWhsZUhCdmNuUnpLU0I3WEc0Z1hIUmNkR2xtS0hSNWNHVnZaaUJUZVcxaWIyd2dJVDA5SUNkMWJtUmxabWx1WldRbklDWW1JRk41YldKdmJDNTBiMU4wY21sdVoxUmhaeWtnZTF4dUlGeDBYSFJjZEU5aWFtVmpkQzVrWldacGJtVlFjbTl3WlhKMGVTaGxlSEJ2Y25SekxDQlRlVzFpYjJ3dWRHOVRkSEpwYm1kVVlXY3NJSHNnZG1Gc2RXVTZJQ2ROYjJSMWJHVW5JSDBwTzF4dUlGeDBYSFI5WEc0Z1hIUmNkRTlpYW1WamRDNWtaV1pwYm1WUWNtOXdaWEowZVNobGVIQnZjblJ6TENBblgxOWxjMDF2WkhWc1pTY3NJSHNnZG1Gc2RXVTZJSFJ5ZFdVZ2ZTazdYRzRnWEhSOU8xeHVYRzRnWEhRdkx5QmpjbVZoZEdVZ1lTQm1ZV3RsSUc1aGJXVnpjR0ZqWlNCdlltcGxZM1JjYmlCY2RDOHZJRzF2WkdVZ0ppQXhPaUIyWVd4MVpTQnBjeUJoSUcxdlpIVnNaU0JwWkN3Z2NtVnhkV2x5WlNCcGRGeHVJRngwTHk4Z2JXOWtaU0FtSURJNklHMWxjbWRsSUdGc2JDQndjbTl3WlhKMGFXVnpJRzltSUhaaGJIVmxJR2x1ZEc4Z2RHaGxJRzV6WEc0Z1hIUXZMeUJ0YjJSbElDWWdORG9nY21WMGRYSnVJSFpoYkhWbElIZG9aVzRnWVd4eVpXRmtlU0J1Y3lCdlltcGxZM1JjYmlCY2RDOHZJRzF2WkdVZ0ppQTRmREU2SUdKbGFHRjJaU0JzYVd0bElISmxjWFZwY21WY2JpQmNkRjlmZDJWaWNHRmphMTl5WlhGMWFYSmxYMTh1ZENBOUlHWjFibU4wYVc5dUtIWmhiSFZsTENCdGIyUmxLU0I3WEc0Z1hIUmNkR2xtS0cxdlpHVWdKaUF4S1NCMllXeDFaU0E5SUY5ZmQyVmljR0ZqYTE5eVpYRjFhWEpsWDE4b2RtRnNkV1VwTzF4dUlGeDBYSFJwWmlodGIyUmxJQ1lnT0NrZ2NtVjBkWEp1SUhaaGJIVmxPMXh1SUZ4MFhIUnBaaWdvYlc5a1pTQW1JRFFwSUNZbUlIUjVjR1Z2WmlCMllXeDFaU0E5UFQwZ0oyOWlhbVZqZENjZ0ppWWdkbUZzZFdVZ0ppWWdkbUZzZFdVdVgxOWxjMDF2WkhWc1pTa2djbVYwZFhKdUlIWmhiSFZsTzF4dUlGeDBYSFIyWVhJZ2JuTWdQU0JQWW1wbFkzUXVZM0psWVhSbEtHNTFiR3dwTzF4dUlGeDBYSFJmWDNkbFluQmhZMnRmY21WeGRXbHlaVjlmTG5Jb2JuTXBPMXh1SUZ4MFhIUlBZbXBsWTNRdVpHVm1hVzVsVUhKdmNHVnlkSGtvYm5Nc0lDZGtaV1poZFd4MEp5d2dleUJsYm5WdFpYSmhZbXhsT2lCMGNuVmxMQ0IyWVd4MVpUb2dkbUZzZFdVZ2ZTazdYRzRnWEhSY2RHbG1LRzF2WkdVZ0ppQXlJQ1ltSUhSNWNHVnZaaUIyWVd4MVpTQWhQU0FuYzNSeWFXNW5KeWtnWm05eUtIWmhjaUJyWlhrZ2FXNGdkbUZzZFdVcElGOWZkMlZpY0dGamExOXlaWEYxYVhKbFgxOHVaQ2h1Y3l3Z2EyVjVMQ0JtZFc1amRHbHZiaWhyWlhrcElIc2djbVYwZFhKdUlIWmhiSFZsVzJ0bGVWMDdJSDB1WW1sdVpDaHVkV3hzTENCclpYa3BLVHRjYmlCY2RGeDBjbVYwZFhKdUlHNXpPMXh1SUZ4MGZUdGNibHh1SUZ4MEx5OGdaMlYwUkdWbVlYVnNkRVY0Y0c5eWRDQm1kVzVqZEdsdmJpQm1iM0lnWTI5dGNHRjBhV0pwYkdsMGVTQjNhWFJvSUc1dmJpMW9ZWEp0YjI1NUlHMXZaSFZzWlhOY2JpQmNkRjlmZDJWaWNHRmphMTl5WlhGMWFYSmxYMTh1YmlBOUlHWjFibU4wYVc5dUtHMXZaSFZzWlNrZ2UxeHVJRngwWEhSMllYSWdaMlYwZEdWeUlEMGdiVzlrZFd4bElDWW1JRzF2WkhWc1pTNWZYMlZ6VFc5a2RXeGxJRDljYmlCY2RGeDBYSFJtZFc1amRHbHZiaUJuWlhSRVpXWmhkV3gwS0NrZ2V5QnlaWFIxY200Z2JXOWtkV3hsV3lka1pXWmhkV3gwSjEwN0lIMGdPbHh1SUZ4MFhIUmNkR1oxYm1OMGFXOXVJR2RsZEUxdlpIVnNaVVY0Y0c5eWRITW9LU0I3SUhKbGRIVnliaUJ0YjJSMWJHVTdJSDA3WEc0Z1hIUmNkRjlmZDJWaWNHRmphMTl5WlhGMWFYSmxYMTh1WkNoblpYUjBaWElzSUNkaEp5d2daMlYwZEdWeUtUdGNiaUJjZEZ4MGNtVjBkWEp1SUdkbGRIUmxjanRjYmlCY2RIMDdYRzVjYmlCY2RDOHZJRTlpYW1WamRDNXdjbTkwYjNSNWNHVXVhR0Z6VDNkdVVISnZjR1Z5ZEhrdVkyRnNiRnh1SUZ4MFgxOTNaV0p3WVdOclgzSmxjWFZwY21WZlh5NXZJRDBnWm5WdVkzUnBiMjRvYjJKcVpXTjBMQ0J3Y205d1pYSjBlU2tnZXlCeVpYUjFjbTRnVDJKcVpXTjBMbkJ5YjNSdmRIbHdaUzVvWVhOUGQyNVFjbTl3WlhKMGVTNWpZV3hzS0c5aWFtVmpkQ3dnY0hKdmNHVnlkSGtwT3lCOU8xeHVYRzRnWEhRdkx5QmZYM2RsWW5CaFkydGZjSFZpYkdsalgzQmhkR2hmWDF4dUlGeDBYMTkzWldKd1lXTnJYM0psY1hWcGNtVmZYeTV3SUQwZ1hDSmNJanRjYmx4dVhHNGdYSFF2THlCTWIyRmtJR1Z1ZEhKNUlHMXZaSFZzWlNCaGJtUWdjbVYwZFhKdUlHVjRjRzl5ZEhOY2JpQmNkSEpsZEhWeWJpQmZYM2RsWW5CaFkydGZjbVZ4ZFdseVpWOWZLRjlmZDJWaWNHRmphMTl5WlhGMWFYSmxYMTh1Y3lBOUlGd2lMaTl6Y21NdmNIVnphR1Z5TG1welhDSXBPMXh1SWl3aWJXOWtkV3hsTG1WNGNHOXlkSE1nUFNCeVpYRjFhWEpsS0NjdUwyeHBZaTloZUdsdmN5Y3BPeUlzSWlkMWMyVWdjM1J5YVdOMEp6dGNibHh1ZG1GeUlIVjBhV3h6SUQwZ2NtVnhkV2x5WlNnbkxpOHVMaTkxZEdsc2N5Y3BPMXh1ZG1GeUlITmxkSFJzWlNBOUlISmxjWFZwY21Vb0p5NHZMaTR2WTI5eVpTOXpaWFIwYkdVbktUdGNiblpoY2lCaWRXbHNaRlZTVENBOUlISmxjWFZwY21Vb0p5NHZMaTR2YUdWc2NHVnljeTlpZFdsc1pGVlNUQ2NwTzF4dWRtRnlJSEJoY25ObFNHVmhaR1Z5Y3lBOUlISmxjWFZwY21Vb0p5NHZMaTR2YUdWc2NHVnljeTl3WVhKelpVaGxZV1JsY25NbktUdGNiblpoY2lCcGMxVlNURk5oYldWUGNtbG5hVzRnUFNCeVpYRjFhWEpsS0NjdUx5NHVMMmhsYkhCbGNuTXZhWE5WVWt4VFlXMWxUM0pwWjJsdUp5azdYRzUyWVhJZ1kzSmxZWFJsUlhKeWIzSWdQU0J5WlhGMWFYSmxLQ2N1TGk5amIzSmxMMk55WldGMFpVVnljbTl5SnlrN1hHNTJZWElnWW5SdllTQTlJQ2gwZVhCbGIyWWdkMmx1Wkc5M0lDRTlQU0FuZFc1a1pXWnBibVZrSnlBbUppQjNhVzVrYjNjdVluUnZZU0FtSmlCM2FXNWtiM2N1WW5SdllTNWlhVzVrS0hkcGJtUnZkeWtwSUh4OElISmxjWFZwY21Vb0p5NHZMaTR2YUdWc2NHVnljeTlpZEc5aEp5azdYRzVjYm0xdlpIVnNaUzVsZUhCdmNuUnpJRDBnWm5WdVkzUnBiMjRnZUdoeVFXUmhjSFJsY2loamIyNW1hV2NwSUh0Y2JpQWdjbVYwZFhKdUlHNWxkeUJRY205dGFYTmxLR1oxYm1OMGFXOXVJR1JwYzNCaGRHTm9XR2h5VW1WeGRXVnpkQ2h5WlhOdmJIWmxMQ0J5WldwbFkzUXBJSHRjYmlBZ0lDQjJZWElnY21WeGRXVnpkRVJoZEdFZ1BTQmpiMjVtYVdjdVpHRjBZVHRjYmlBZ0lDQjJZWElnY21WeGRXVnpkRWhsWVdSbGNuTWdQU0JqYjI1bWFXY3VhR1ZoWkdWeWN6dGNibHh1SUNBZ0lHbG1JQ2gxZEdsc2N5NXBjMFp2Y20xRVlYUmhLSEpsY1hWbGMzUkVZWFJoS1NrZ2UxeHVJQ0FnSUNBZ1pHVnNaWFJsSUhKbGNYVmxjM1JJWldGa1pYSnpXeWREYjI1MFpXNTBMVlI1Y0dVblhUc2dMeThnVEdWMElIUm9aU0JpY205M2MyVnlJSE5sZENCcGRGeHVJQ0FnSUgxY2JseHVJQ0FnSUhaaGNpQnlaWEYxWlhOMElEMGdibVYzSUZoTlRFaDBkSEJTWlhGMVpYTjBLQ2s3WEc0Z0lDQWdkbUZ5SUd4dllXUkZkbVZ1ZENBOUlDZHZibkpsWVdSNWMzUmhkR1ZqYUdGdVoyVW5PMXh1SUNBZ0lIWmhjaUI0Ukc5dFlXbHVJRDBnWm1Gc2MyVTdYRzVjYmlBZ0lDQXZMeUJHYjNJZ1NVVWdPQzg1SUVOUFVsTWdjM1Z3Y0c5eWRGeHVJQ0FnSUM4dklFOXViSGtnYzNWd2NHOXlkSE1nVUU5VFZDQmhibVFnUjBWVUlHTmhiR3h6SUdGdVpDQmtiMlZ6YmlkMElISmxkSFZ5Ym5NZ2RHaGxJSEpsYzNCdmJuTmxJR2hsWVdSbGNuTXVYRzRnSUNBZ0x5OGdSRTlPSjFRZ1pHOGdkR2hwY3lCbWIzSWdkR1Z6ZEdsdVp5QmlMMk1nV0UxTVNIUjBjRkpsY1hWbGMzUWdhWE1nYlc5amEyVmtMQ0J1YjNRZ1dFUnZiV0ZwYmxKbGNYVmxjM1F1WEc0Z0lDQWdhV1lnS0hCeWIyTmxjM011Wlc1MkxrNVBSRVZmUlU1V0lDRTlQU0FuZEdWemRDY2dKaVpjYmlBZ0lDQWdJQ0FnZEhsd1pXOW1JSGRwYm1SdmR5QWhQVDBnSjNWdVpHVm1hVzVsWkNjZ0ppWmNiaUFnSUNBZ0lDQWdkMmx1Wkc5M0xsaEViMjFoYVc1U1pYRjFaWE4wSUNZbUlDRW9KM2RwZEdoRGNtVmtaVzUwYVdGc2N5Y2dhVzRnY21WeGRXVnpkQ2tnSmlaY2JpQWdJQ0FnSUNBZ0lXbHpWVkpNVTJGdFpVOXlhV2RwYmloamIyNW1hV2N1ZFhKc0tTa2dlMXh1SUNBZ0lDQWdjbVZ4ZFdWemRDQTlJRzVsZHlCM2FXNWtiM2N1V0VSdmJXRnBibEpsY1hWbGMzUW9LVHRjYmlBZ0lDQWdJR3h2WVdSRmRtVnVkQ0E5SUNkdmJteHZZV1FuTzF4dUlDQWdJQ0FnZUVSdmJXRnBiaUE5SUhSeWRXVTdYRzRnSUNBZ0lDQnlaWEYxWlhOMExtOXVjSEp2WjNKbGMzTWdQU0JtZFc1amRHbHZiaUJvWVc1a2JHVlFjbTluY21WemN5Z3BJSHQ5TzF4dUlDQWdJQ0FnY21WeGRXVnpkQzV2Ym5ScGJXVnZkWFFnUFNCbWRXNWpkR2x2YmlCb1lXNWtiR1ZVYVcxbGIzVjBLQ2tnZTMwN1hHNGdJQ0FnZlZ4dVhHNGdJQ0FnTHk4Z1NGUlVVQ0JpWVhOcFl5QmhkWFJvWlc1MGFXTmhkR2x2Ymx4dUlDQWdJR2xtSUNoamIyNW1hV2N1WVhWMGFDa2dlMXh1SUNBZ0lDQWdkbUZ5SUhWelpYSnVZVzFsSUQwZ1kyOXVabWxuTG1GMWRHZ3VkWE5sY201aGJXVWdmSHdnSnljN1hHNGdJQ0FnSUNCMllYSWdjR0Z6YzNkdmNtUWdQU0JqYjI1bWFXY3VZWFYwYUM1d1lYTnpkMjl5WkNCOGZDQW5KenRjYmlBZ0lDQWdJSEpsY1hWbGMzUklaV0ZrWlhKekxrRjFkR2h2Y21sNllYUnBiMjRnUFNBblFtRnphV01nSnlBcklHSjBiMkVvZFhObGNtNWhiV1VnS3lBbk9pY2dLeUJ3WVhOemQyOXlaQ2s3WEc0Z0lDQWdmVnh1WEc0Z0lDQWdjbVZ4ZFdWemRDNXZjR1Z1S0dOdmJtWnBaeTV0WlhSb2IyUXVkRzlWY0hCbGNrTmhjMlVvS1N3Z1luVnBiR1JWVWt3b1kyOXVabWxuTG5WeWJDd2dZMjl1Wm1sbkxuQmhjbUZ0Y3l3Z1kyOXVabWxuTG5CaGNtRnRjMU5sY21saGJHbDZaWElwTENCMGNuVmxLVHRjYmx4dUlDQWdJQzh2SUZObGRDQjBhR1VnY21WeGRXVnpkQ0IwYVcxbGIzVjBJR2x1SUUxVFhHNGdJQ0FnY21WeGRXVnpkQzUwYVcxbGIzVjBJRDBnWTI5dVptbG5MblJwYldWdmRYUTdYRzVjYmlBZ0lDQXZMeUJNYVhOMFpXNGdabTl5SUhKbFlXUjVJSE4wWVhSbFhHNGdJQ0FnY21WeGRXVnpkRnRzYjJGa1JYWmxiblJkSUQwZ1puVnVZM1JwYjI0Z2FHRnVaR3hsVEc5aFpDZ3BJSHRjYmlBZ0lDQWdJR2xtSUNnaGNtVnhkV1Z6ZENCOGZDQW9jbVZ4ZFdWemRDNXlaV0ZrZVZOMFlYUmxJQ0U5UFNBMElDWW1JQ0Y0Ukc5dFlXbHVLU2tnZTF4dUlDQWdJQ0FnSUNCeVpYUjFjbTQ3WEc0Z0lDQWdJQ0I5WEc1Y2JpQWdJQ0FnSUM4dklGUm9aU0J5WlhGMVpYTjBJR1Z5Y205eVpXUWdiM1YwSUdGdVpDQjNaU0JrYVdSdUozUWdaMlYwSUdFZ2NtVnpjRzl1YzJVc0lIUm9hWE1nZDJsc2JDQmlaVnh1SUNBZ0lDQWdMeThnYUdGdVpHeGxaQ0JpZVNCdmJtVnljbTl5SUdsdWMzUmxZV1JjYmlBZ0lDQWdJQzh2SUZkcGRHZ2diMjVsSUdWNFkyVndkR2x2YmpvZ2NtVnhkV1Z6ZENCMGFHRjBJSFZ6YVc1bklHWnBiR1U2SUhCeWIzUnZZMjlzTENCdGIzTjBJR0p5YjNkelpYSnpYRzRnSUNBZ0lDQXZMeUIzYVd4c0lISmxkSFZ5YmlCemRHRjBkWE1nWVhNZ01DQmxkbVZ1SUhSb2IzVm5hQ0JwZENkeklHRWdjM1ZqWTJWemMyWjFiQ0J5WlhGMVpYTjBYRzRnSUNBZ0lDQnBaaUFvY21WeGRXVnpkQzV6ZEdGMGRYTWdQVDA5SURBZ0ppWWdJU2h5WlhGMVpYTjBMbkpsYzNCdmJuTmxWVkpNSUNZbUlISmxjWFZsYzNRdWNtVnpjRzl1YzJWVlVrd3VhVzVrWlhoUFppZ25abWxzWlRvbktTQTlQVDBnTUNrcElIdGNiaUFnSUNBZ0lDQWdjbVYwZFhKdU8xeHVJQ0FnSUNBZ2ZWeHVYRzRnSUNBZ0lDQXZMeUJRY21Wd1lYSmxJSFJvWlNCeVpYTndiMjV6WlZ4dUlDQWdJQ0FnZG1GeUlISmxjM0J2Ym5ObFNHVmhaR1Z5Y3lBOUlDZG5aWFJCYkd4U1pYTndiMjV6WlVobFlXUmxjbk1uSUdsdUlISmxjWFZsYzNRZ1B5QndZWEp6WlVobFlXUmxjbk1vY21WeGRXVnpkQzVuWlhSQmJHeFNaWE53YjI1elpVaGxZV1JsY25Nb0tTa2dPaUJ1ZFd4c08xeHVJQ0FnSUNBZ2RtRnlJSEpsYzNCdmJuTmxSR0YwWVNBOUlDRmpiMjVtYVdjdWNtVnpjRzl1YzJWVWVYQmxJSHg4SUdOdmJtWnBaeTV5WlhOd2IyNXpaVlI1Y0dVZ1BUMDlJQ2QwWlhoMEp5QS9JSEpsY1hWbGMzUXVjbVZ6Y0c5dWMyVlVaWGgwSURvZ2NtVnhkV1Z6ZEM1eVpYTndiMjV6WlR0Y2JpQWdJQ0FnSUhaaGNpQnlaWE53YjI1elpTQTlJSHRjYmlBZ0lDQWdJQ0FnWkdGMFlUb2djbVZ6Y0c5dWMyVkVZWFJoTEZ4dUlDQWdJQ0FnSUNBdkx5QkpSU0J6Wlc1a2N5QXhNakl6SUdsdWMzUmxZV1FnYjJZZ01qQTBJQ2hvZEhSd2N6b3ZMMmRwZEdoMVlpNWpiMjB2WVhocGIzTXZZWGhwYjNNdmFYTnpkV1Z6THpJd01TbGNiaUFnSUNBZ0lDQWdjM1JoZEhWek9pQnlaWEYxWlhOMExuTjBZWFIxY3lBOVBUMGdNVEl5TXlBL0lESXdOQ0E2SUhKbGNYVmxjM1F1YzNSaGRIVnpMRnh1SUNBZ0lDQWdJQ0J6ZEdGMGRYTlVaWGgwT2lCeVpYRjFaWE4wTG5OMFlYUjFjeUE5UFQwZ01USXlNeUEvSUNkT2J5QkRiMjUwWlc1MEp5QTZJSEpsY1hWbGMzUXVjM1JoZEhWelZHVjRkQ3hjYmlBZ0lDQWdJQ0FnYUdWaFpHVnljem9nY21WemNHOXVjMlZJWldGa1pYSnpMRnh1SUNBZ0lDQWdJQ0JqYjI1bWFXYzZJR052Ym1acFp5eGNiaUFnSUNBZ0lDQWdjbVZ4ZFdWemREb2djbVZ4ZFdWemRGeHVJQ0FnSUNBZ2ZUdGNibHh1SUNBZ0lDQWdjMlYwZEd4bEtISmxjMjlzZG1Vc0lISmxhbVZqZEN3Z2NtVnpjRzl1YzJVcE8xeHVYRzRnSUNBZ0lDQXZMeUJEYkdWaGJpQjFjQ0J5WlhGMVpYTjBYRzRnSUNBZ0lDQnlaWEYxWlhOMElEMGdiblZzYkR0Y2JpQWdJQ0I5TzF4dVhHNGdJQ0FnTHk4Z1NHRnVaR3hsSUd4dmR5QnNaWFpsYkNCdVpYUjNiM0pySUdWeWNtOXljMXh1SUNBZ0lISmxjWFZsYzNRdWIyNWxjbkp2Y2lBOUlHWjFibU4wYVc5dUlHaGhibVJzWlVWeWNtOXlLQ2tnZTF4dUlDQWdJQ0FnTHk4Z1VtVmhiQ0JsY25KdmNuTWdZWEpsSUdocFpHUmxiaUJtY205dElIVnpJR0o1SUhSb1pTQmljbTkzYzJWeVhHNGdJQ0FnSUNBdkx5QnZibVZ5Y205eUlITm9iM1ZzWkNCdmJteDVJR1pwY21VZ2FXWWdhWFFuY3lCaElHNWxkSGR2Y21zZ1pYSnliM0pjYmlBZ0lDQWdJSEpsYW1WamRDaGpjbVZoZEdWRmNuSnZjaWduVG1WMGQyOXlheUJGY25KdmNpY3NJR052Ym1acFp5d2diblZzYkN3Z2NtVnhkV1Z6ZENrcE8xeHVYRzRnSUNBZ0lDQXZMeUJEYkdWaGJpQjFjQ0J5WlhGMVpYTjBYRzRnSUNBZ0lDQnlaWEYxWlhOMElEMGdiblZzYkR0Y2JpQWdJQ0I5TzF4dVhHNGdJQ0FnTHk4Z1NHRnVaR3hsSUhScGJXVnZkWFJjYmlBZ0lDQnlaWEYxWlhOMExtOXVkR2x0Wlc5MWRDQTlJR1oxYm1OMGFXOXVJR2hoYm1Sc1pWUnBiV1Z2ZFhRb0tTQjdYRzRnSUNBZ0lDQnlaV3BsWTNRb1kzSmxZWFJsUlhKeWIzSW9KM1JwYldWdmRYUWdiMllnSnlBcklHTnZibVpwWnk1MGFXMWxiM1YwSUNzZ0oyMXpJR1Y0WTJWbFpHVmtKeXdnWTI5dVptbG5MQ0FuUlVOUFRrNUJRazlTVkVWRUp5eGNiaUFnSUNBZ0lDQWdjbVZ4ZFdWemRDa3BPMXh1WEc0Z0lDQWdJQ0F2THlCRGJHVmhiaUIxY0NCeVpYRjFaWE4wWEc0Z0lDQWdJQ0J5WlhGMVpYTjBJRDBnYm5Wc2JEdGNiaUFnSUNCOU8xeHVYRzRnSUNBZ0x5OGdRV1JrSUhoemNtWWdhR1ZoWkdWeVhHNGdJQ0FnTHk4Z1ZHaHBjeUJwY3lCdmJteDVJR1J2Ym1VZ2FXWWdjblZ1Ym1sdVp5QnBiaUJoSUhOMFlXNWtZWEprSUdKeWIzZHpaWElnWlc1MmFYSnZibTFsYm5RdVhHNGdJQ0FnTHk4Z1UzQmxZMmxtYVdOaGJHeDVJRzV2ZENCcFppQjNaU2R5WlNCcGJpQmhJSGRsWWlCM2IzSnJaWElzSUc5eUlISmxZV04wTFc1aGRHbDJaUzVjYmlBZ0lDQnBaaUFvZFhScGJITXVhWE5UZEdGdVpHRnlaRUp5YjNkelpYSkZibllvS1NrZ2UxeHVJQ0FnSUNBZ2RtRnlJR052YjJ0cFpYTWdQU0J5WlhGMWFYSmxLQ2N1THk0dUwyaGxiSEJsY25NdlkyOXZhMmxsY3ljcE8xeHVYRzRnSUNBZ0lDQXZMeUJCWkdRZ2VITnlaaUJvWldGa1pYSmNiaUFnSUNBZ0lIWmhjaUI0YzNKbVZtRnNkV1VnUFNBb1kyOXVabWxuTG5kcGRHaERjbVZrWlc1MGFXRnNjeUI4ZkNCcGMxVlNURk5oYldWUGNtbG5hVzRvWTI5dVptbG5MblZ5YkNrcElDWW1JR052Ym1acFp5NTRjM0ptUTI5dmEybGxUbUZ0WlNBL1hHNGdJQ0FnSUNBZ0lDQWdZMjl2YTJsbGN5NXlaV0ZrS0dOdmJtWnBaeTU0YzNKbVEyOXZhMmxsVG1GdFpTa2dPbHh1SUNBZ0lDQWdJQ0FnSUhWdVpHVm1hVzVsWkR0Y2JseHVJQ0FnSUNBZ2FXWWdLSGh6Y21aV1lXeDFaU2tnZTF4dUlDQWdJQ0FnSUNCeVpYRjFaWE4wU0dWaFpHVnljMXRqYjI1bWFXY3VlSE55WmtobFlXUmxjazVoYldWZElEMGdlSE55WmxaaGJIVmxPMXh1SUNBZ0lDQWdmVnh1SUNBZ0lIMWNibHh1SUNBZ0lDOHZJRUZrWkNCb1pXRmtaWEp6SUhSdklIUm9aU0J5WlhGMVpYTjBYRzRnSUNBZ2FXWWdLQ2R6WlhSU1pYRjFaWE4wU0dWaFpHVnlKeUJwYmlCeVpYRjFaWE4wS1NCN1hHNGdJQ0FnSUNCMWRHbHNjeTVtYjNKRllXTm9LSEpsY1hWbGMzUklaV0ZrWlhKekxDQm1kVzVqZEdsdmJpQnpaWFJTWlhGMVpYTjBTR1ZoWkdWeUtIWmhiQ3dnYTJWNUtTQjdYRzRnSUNBZ0lDQWdJR2xtSUNoMGVYQmxiMllnY21WeGRXVnpkRVJoZEdFZ1BUMDlJQ2QxYm1SbFptbHVaV1FuSUNZbUlHdGxlUzUwYjB4dmQyVnlRMkZ6WlNncElEMDlQU0FuWTI5dWRHVnVkQzEwZVhCbEp5a2dlMXh1SUNBZ0lDQWdJQ0FnSUM4dklGSmxiVzkyWlNCRGIyNTBaVzUwTFZSNWNHVWdhV1lnWkdGMFlTQnBjeUIxYm1SbFptbHVaV1JjYmlBZ0lDQWdJQ0FnSUNCa1pXeGxkR1VnY21WeGRXVnpkRWhsWVdSbGNuTmJhMlY1WFR0Y2JpQWdJQ0FnSUNBZ2ZTQmxiSE5sSUh0Y2JpQWdJQ0FnSUNBZ0lDQXZMeUJQZEdobGNuZHBjMlVnWVdSa0lHaGxZV1JsY2lCMGJ5QjBhR1VnY21WeGRXVnpkRnh1SUNBZ0lDQWdJQ0FnSUhKbGNYVmxjM1F1YzJWMFVtVnhkV1Z6ZEVobFlXUmxjaWhyWlhrc0lIWmhiQ2s3WEc0Z0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUgwcE8xeHVJQ0FnSUgxY2JseHVJQ0FnSUM4dklFRmtaQ0IzYVhSb1EzSmxaR1Z1ZEdsaGJITWdkRzhnY21WeGRXVnpkQ0JwWmlCdVpXVmtaV1JjYmlBZ0lDQnBaaUFvWTI5dVptbG5MbmRwZEdoRGNtVmtaVzUwYVdGc2N5a2dlMXh1SUNBZ0lDQWdjbVZ4ZFdWemRDNTNhWFJvUTNKbFpHVnVkR2xoYkhNZ1BTQjBjblZsTzF4dUlDQWdJSDFjYmx4dUlDQWdJQzh2SUVGa1pDQnlaWE53YjI1elpWUjVjR1VnZEc4Z2NtVnhkV1Z6ZENCcFppQnVaV1ZrWldSY2JpQWdJQ0JwWmlBb1kyOXVabWxuTG5KbGMzQnZibk5sVkhsd1pTa2dlMXh1SUNBZ0lDQWdkSEo1SUh0Y2JpQWdJQ0FnSUNBZ2NtVnhkV1Z6ZEM1eVpYTndiMjV6WlZSNWNHVWdQU0JqYjI1bWFXY3VjbVZ6Y0c5dWMyVlVlWEJsTzF4dUlDQWdJQ0FnZlNCallYUmphQ0FvWlNrZ2UxeHVJQ0FnSUNBZ0lDQXZMeUJGZUhCbFkzUmxaQ0JFVDAxRmVHTmxjSFJwYjI0Z2RHaHliM2R1SUdKNUlHSnliM2R6WlhKeklHNXZkQ0JqYjIxd1lYUnBZbXhsSUZoTlRFaDBkSEJTWlhGMVpYTjBJRXhsZG1Wc0lESXVYRzRnSUNBZ0lDQWdJQzh2SUVKMWRDd2dkR2hwY3lCallXNGdZbVVnYzNWd2NISmxjM05sWkNCbWIzSWdKMnB6YjI0bklIUjVjR1VnWVhNZ2FYUWdZMkZ1SUdKbElIQmhjbk5sWkNCaWVTQmtaV1poZFd4MElDZDBjbUZ1YzJadmNtMVNaWE53YjI1elpTY2dablZ1WTNScGIyNHVYRzRnSUNBZ0lDQWdJR2xtSUNoamIyNW1hV2N1Y21WemNHOXVjMlZVZVhCbElDRTlQU0FuYW5OdmJpY3BJSHRjYmlBZ0lDQWdJQ0FnSUNCMGFISnZkeUJsTzF4dUlDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNCOVhHNGdJQ0FnZlZ4dVhHNGdJQ0FnTHk4Z1NHRnVaR3hsSUhCeWIyZHlaWE56SUdsbUlHNWxaV1JsWkZ4dUlDQWdJR2xtSUNoMGVYQmxiMllnWTI5dVptbG5MbTl1Ukc5M2JteHZZV1JRY205bmNtVnpjeUE5UFQwZ0oyWjFibU4wYVc5dUp5a2dlMXh1SUNBZ0lDQWdjbVZ4ZFdWemRDNWhaR1JGZG1WdWRFeHBjM1JsYm1WeUtDZHdjbTluY21WemN5Y3NJR052Ym1acFp5NXZia1J2ZDI1c2IyRmtVSEp2WjNKbGMzTXBPMXh1SUNBZ0lIMWNibHh1SUNBZ0lDOHZJRTV2ZENCaGJHd2dZbkp2ZDNObGNuTWdjM1Z3Y0c5eWRDQjFjR3h2WVdRZ1pYWmxiblJ6WEc0Z0lDQWdhV1lnS0hSNWNHVnZaaUJqYjI1bWFXY3ViMjVWY0d4dllXUlFjbTluY21WemN5QTlQVDBnSjJaMWJtTjBhVzl1SnlBbUppQnlaWEYxWlhOMExuVndiRzloWkNrZ2UxeHVJQ0FnSUNBZ2NtVnhkV1Z6ZEM1MWNHeHZZV1F1WVdSa1JYWmxiblJNYVhOMFpXNWxjaWduY0hKdlozSmxjM01uTENCamIyNW1hV2N1YjI1VmNHeHZZV1JRY205bmNtVnpjeWs3WEc0Z0lDQWdmVnh1WEc0Z0lDQWdhV1lnS0dOdmJtWnBaeTVqWVc1alpXeFViMnRsYmlrZ2UxeHVJQ0FnSUNBZ0x5OGdTR0Z1Wkd4bElHTmhibU5sYkd4aGRHbHZibHh1SUNBZ0lDQWdZMjl1Wm1sbkxtTmhibU5sYkZSdmEyVnVMbkJ5YjIxcGMyVXVkR2hsYmlobWRXNWpkR2x2YmlCdmJrTmhibU5sYkdWa0tHTmhibU5sYkNrZ2UxeHVJQ0FnSUNBZ0lDQnBaaUFvSVhKbGNYVmxjM1FwSUh0Y2JpQWdJQ0FnSUNBZ0lDQnlaWFIxY200N1hHNGdJQ0FnSUNBZ0lIMWNibHh1SUNBZ0lDQWdJQ0J5WlhGMVpYTjBMbUZpYjNKMEtDazdYRzRnSUNBZ0lDQWdJSEpsYW1WamRDaGpZVzVqWld3cE8xeHVJQ0FnSUNBZ0lDQXZMeUJEYkdWaGJpQjFjQ0J5WlhGMVpYTjBYRzRnSUNBZ0lDQWdJSEpsY1hWbGMzUWdQU0J1ZFd4c08xeHVJQ0FnSUNBZ2ZTazdYRzRnSUNBZ2ZWeHVYRzRnSUNBZ2FXWWdLSEpsY1hWbGMzUkVZWFJoSUQwOVBTQjFibVJsWm1sdVpXUXBJSHRjYmlBZ0lDQWdJSEpsY1hWbGMzUkVZWFJoSUQwZ2JuVnNiRHRjYmlBZ0lDQjlYRzVjYmlBZ0lDQXZMeUJUWlc1a0lIUm9aU0J5WlhGMVpYTjBYRzRnSUNBZ2NtVnhkV1Z6ZEM1elpXNWtLSEpsY1hWbGMzUkVZWFJoS1R0Y2JpQWdmU2s3WEc1OU8xeHVJaXdpSjNWelpTQnpkSEpwWTNRbk8xeHVYRzUyWVhJZ2RYUnBiSE1nUFNCeVpYRjFhWEpsS0NjdUwzVjBhV3h6SnlrN1hHNTJZWElnWW1sdVpDQTlJSEpsY1hWcGNtVW9KeTR2YUdWc2NHVnljeTlpYVc1a0p5azdYRzUyWVhJZ1FYaHBiM01nUFNCeVpYRjFhWEpsS0NjdUwyTnZjbVV2UVhocGIzTW5LVHRjYm5aaGNpQmtaV1poZFd4MGN5QTlJSEpsY1hWcGNtVW9KeTR2WkdWbVlYVnNkSE1uS1R0Y2JseHVMeW9xWEc0Z0tpQkRjbVZoZEdVZ1lXNGdhVzV6ZEdGdVkyVWdiMllnUVhocGIzTmNiaUFxWEc0Z0tpQkFjR0Z5WVcwZ2UwOWlhbVZqZEgwZ1pHVm1ZWFZzZEVOdmJtWnBaeUJVYUdVZ1pHVm1ZWFZzZENCamIyNW1hV2NnWm05eUlIUm9aU0JwYm5OMFlXNWpaVnh1SUNvZ1FISmxkSFZ5YmlCN1FYaHBiM045SUVFZ2JtVjNJR2x1YzNSaGJtTmxJRzltSUVGNGFXOXpYRzRnS2k5Y2JtWjFibU4wYVc5dUlHTnlaV0YwWlVsdWMzUmhibU5sS0dSbFptRjFiSFJEYjI1bWFXY3BJSHRjYmlBZ2RtRnlJR052Ym5SbGVIUWdQU0J1WlhjZ1FYaHBiM01vWkdWbVlYVnNkRU52Ym1acFp5azdYRzRnSUhaaGNpQnBibk4wWVc1alpTQTlJR0pwYm1Rb1FYaHBiM011Y0hKdmRHOTBlWEJsTG5KbGNYVmxjM1FzSUdOdmJuUmxlSFFwTzF4dVhHNGdJQzh2SUVOdmNIa2dZWGhwYjNNdWNISnZkRzkwZVhCbElIUnZJR2x1YzNSaGJtTmxYRzRnSUhWMGFXeHpMbVY0ZEdWdVpDaHBibk4wWVc1alpTd2dRWGhwYjNNdWNISnZkRzkwZVhCbExDQmpiMjUwWlhoMEtUdGNibHh1SUNBdkx5QkRiM0I1SUdOdmJuUmxlSFFnZEc4Z2FXNXpkR0Z1WTJWY2JpQWdkWFJwYkhNdVpYaDBaVzVrS0dsdWMzUmhibU5sTENCamIyNTBaWGgwS1R0Y2JseHVJQ0J5WlhSMWNtNGdhVzV6ZEdGdVkyVTdYRzU5WEc1Y2JpOHZJRU55WldGMFpTQjBhR1VnWkdWbVlYVnNkQ0JwYm5OMFlXNWpaU0IwYnlCaVpTQmxlSEJ2Y25SbFpGeHVkbUZ5SUdGNGFXOXpJRDBnWTNKbFlYUmxTVzV6ZEdGdVkyVW9aR1ZtWVhWc2RITXBPMXh1WEc0dkx5QkZlSEJ2YzJVZ1FYaHBiM01nWTJ4aGMzTWdkRzhnWVd4c2IzY2dZMnhoYzNNZ2FXNW9aWEpwZEdGdVkyVmNibUY0YVc5ekxrRjRhVzl6SUQwZ1FYaHBiM003WEc1Y2JpOHZJRVpoWTNSdmNua2dabTl5SUdOeVpXRjBhVzVuSUc1bGR5QnBibk4wWVc1alpYTmNibUY0YVc5ekxtTnlaV0YwWlNBOUlHWjFibU4wYVc5dUlHTnlaV0YwWlNocGJuTjBZVzVqWlVOdmJtWnBaeWtnZTF4dUlDQnlaWFIxY200Z1kzSmxZWFJsU1c1emRHRnVZMlVvZFhScGJITXViV1Z5WjJVb1pHVm1ZWFZzZEhNc0lHbHVjM1JoYm1ObFEyOXVabWxuS1NrN1hHNTlPMXh1WEc0dkx5QkZlSEJ2YzJVZ1EyRnVZMlZzSUNZZ1EyRnVZMlZzVkc5clpXNWNibUY0YVc5ekxrTmhibU5sYkNBOUlISmxjWFZwY21Vb0p5NHZZMkZ1WTJWc0wwTmhibU5sYkNjcE8xeHVZWGhwYjNNdVEyRnVZMlZzVkc5clpXNGdQU0J5WlhGMWFYSmxLQ2N1TDJOaGJtTmxiQzlEWVc1alpXeFViMnRsYmljcE8xeHVZWGhwYjNNdWFYTkRZVzVqWld3Z1BTQnlaWEYxYVhKbEtDY3VMMk5oYm1ObGJDOXBjME5oYm1ObGJDY3BPMXh1WEc0dkx5QkZlSEJ2YzJVZ1lXeHNMM053Y21WaFpGeHVZWGhwYjNNdVlXeHNJRDBnWm5WdVkzUnBiMjRnWVd4c0tIQnliMjFwYzJWektTQjdYRzRnSUhKbGRIVnliaUJRY205dGFYTmxMbUZzYkNod2NtOXRhWE5sY3lrN1hHNTlPMXh1WVhocGIzTXVjM0J5WldGa0lEMGdjbVZ4ZFdseVpTZ25MaTlvWld4d1pYSnpMM053Y21WaFpDY3BPMXh1WEc1dGIyUjFiR1V1Wlhod2IzSjBjeUE5SUdGNGFXOXpPMXh1WEc0dkx5QkJiR3h2ZHlCMWMyVWdiMllnWkdWbVlYVnNkQ0JwYlhCdmNuUWdjM2x1ZEdGNElHbHVJRlI1Y0dWVFkzSnBjSFJjYm0xdlpIVnNaUzVsZUhCdmNuUnpMbVJsWm1GMWJIUWdQU0JoZUdsdmN6dGNiaUlzSWlkMWMyVWdjM1J5YVdOMEp6dGNibHh1THlvcVhHNGdLaUJCSUdCRFlXNWpaV3hnSUdseklHRnVJRzlpYW1WamRDQjBhR0YwSUdseklIUm9jbTkzYmlCM2FHVnVJR0Z1SUc5d1pYSmhkR2x2YmlCcGN5QmpZVzVqWld4bFpDNWNiaUFxWEc0Z0tpQkFZMnhoYzNOY2JpQXFJRUJ3WVhKaGJTQjdjM1J5YVc1blBYMGdiV1Z6YzJGblpTQlVhR1VnYldWemMyRm5aUzVjYmlBcUwxeHVablZ1WTNScGIyNGdRMkZ1WTJWc0tHMWxjM05oWjJVcElIdGNiaUFnZEdocGN5NXRaWE56WVdkbElEMGdiV1Z6YzJGblpUdGNibjFjYmx4dVEyRnVZMlZzTG5CeWIzUnZkSGx3WlM1MGIxTjBjbWx1WnlBOUlHWjFibU4wYVc5dUlIUnZVM1J5YVc1bktDa2dlMXh1SUNCeVpYUjFjbTRnSjBOaGJtTmxiQ2NnS3lBb2RHaHBjeTV0WlhOellXZGxJRDhnSnpvZ0p5QXJJSFJvYVhNdWJXVnpjMkZuWlNBNklDY25LVHRjYm4wN1hHNWNia05oYm1ObGJDNXdjbTkwYjNSNWNHVXVYMTlEUVU1RFJVeGZYeUE5SUhSeWRXVTdYRzVjYm0xdlpIVnNaUzVsZUhCdmNuUnpJRDBnUTJGdVkyVnNPMXh1SWl3aUozVnpaU0J6ZEhKcFkzUW5PMXh1WEc1MllYSWdRMkZ1WTJWc0lEMGdjbVZ4ZFdseVpTZ25MaTlEWVc1alpXd25LVHRjYmx4dUx5b3FYRzRnS2lCQklHQkRZVzVqWld4VWIydGxibUFnYVhNZ1lXNGdiMkpxWldOMElIUm9ZWFFnWTJGdUlHSmxJSFZ6WldRZ2RHOGdjbVZ4ZFdWemRDQmpZVzVqWld4c1lYUnBiMjRnYjJZZ1lXNGdiM0JsY21GMGFXOXVMbHh1SUNwY2JpQXFJRUJqYkdGemMxeHVJQ29nUUhCaGNtRnRJSHRHZFc1amRHbHZibjBnWlhobFkzVjBiM0lnVkdobElHVjRaV04xZEc5eUlHWjFibU4wYVc5dUxseHVJQ292WEc1bWRXNWpkR2x2YmlCRFlXNWpaV3hVYjJ0bGJpaGxlR1ZqZFhSdmNpa2dlMXh1SUNCcFppQW9kSGx3Wlc5bUlHVjRaV04xZEc5eUlDRTlQU0FuWm5WdVkzUnBiMjRuS1NCN1hHNGdJQ0FnZEdoeWIzY2dibVYzSUZSNWNHVkZjbkp2Y2lnblpYaGxZM1YwYjNJZ2JYVnpkQ0JpWlNCaElHWjFibU4wYVc5dUxpY3BPMXh1SUNCOVhHNWNiaUFnZG1GeUlISmxjMjlzZG1WUWNtOXRhWE5sTzF4dUlDQjBhR2x6TG5CeWIyMXBjMlVnUFNCdVpYY2dVSEp2YldselpTaG1kVzVqZEdsdmJpQndjbTl0YVhObFJYaGxZM1YwYjNJb2NtVnpiMngyWlNrZ2UxeHVJQ0FnSUhKbGMyOXNkbVZRY205dGFYTmxJRDBnY21WemIyeDJaVHRjYmlBZ2ZTazdYRzVjYmlBZ2RtRnlJSFJ2YTJWdUlEMGdkR2hwY3p0Y2JpQWdaWGhsWTNWMGIzSW9ablZ1WTNScGIyNGdZMkZ1WTJWc0tHMWxjM05oWjJVcElIdGNiaUFnSUNCcFppQW9kRzlyWlc0dWNtVmhjMjl1S1NCN1hHNGdJQ0FnSUNBdkx5QkRZVzVqWld4c1lYUnBiMjRnYUdGeklHRnNjbVZoWkhrZ1ltVmxiaUJ5WlhGMVpYTjBaV1JjYmlBZ0lDQWdJSEpsZEhWeWJqdGNiaUFnSUNCOVhHNWNiaUFnSUNCMGIydGxiaTV5WldGemIyNGdQU0J1WlhjZ1EyRnVZMlZzS0cxbGMzTmhaMlVwTzF4dUlDQWdJSEpsYzI5c2RtVlFjbTl0YVhObEtIUnZhMlZ1TG5KbFlYTnZiaWs3WEc0Z0lIMHBPMXh1ZlZ4dVhHNHZLaXBjYmlBcUlGUm9jbTkzY3lCaElHQkRZVzVqWld4Z0lHbG1JR05oYm1ObGJHeGhkR2x2YmlCb1lYTWdZbVZsYmlCeVpYRjFaWE4wWldRdVhHNGdLaTljYmtOaGJtTmxiRlJ2YTJWdUxuQnliM1J2ZEhsd1pTNTBhSEp2ZDBsbVVtVnhkV1Z6ZEdWa0lEMGdablZ1WTNScGIyNGdkR2h5YjNkSlpsSmxjWFZsYzNSbFpDZ3BJSHRjYmlBZ2FXWWdLSFJvYVhNdWNtVmhjMjl1S1NCN1hHNGdJQ0FnZEdoeWIzY2dkR2hwY3k1eVpXRnpiMjQ3WEc0Z0lIMWNibjA3WEc1Y2JpOHFLbHh1SUNvZ1VtVjBkWEp1Y3lCaGJpQnZZbXBsWTNRZ2RHaGhkQ0JqYjI1MFlXbHVjeUJoSUc1bGR5QmdRMkZ1WTJWc1ZHOXJaVzVnSUdGdVpDQmhJR1oxYm1OMGFXOXVJSFJvWVhRc0lIZG9aVzRnWTJGc2JHVmtMRnh1SUNvZ1kyRnVZMlZzY3lCMGFHVWdZRU5oYm1ObGJGUnZhMlZ1WUM1Y2JpQXFMMXh1UTJGdVkyVnNWRzlyWlc0dWMyOTFjbU5sSUQwZ1puVnVZM1JwYjI0Z2MyOTFjbU5sS0NrZ2UxeHVJQ0IyWVhJZ1kyRnVZMlZzTzF4dUlDQjJZWElnZEc5clpXNGdQU0J1WlhjZ1EyRnVZMlZzVkc5clpXNG9ablZ1WTNScGIyNGdaWGhsWTNWMGIzSW9ZeWtnZTF4dUlDQWdJR05oYm1ObGJDQTlJR003WEc0Z0lIMHBPMXh1SUNCeVpYUjFjbTRnZTF4dUlDQWdJSFJ2YTJWdU9pQjBiMnRsYml4Y2JpQWdJQ0JqWVc1alpXdzZJR05oYm1ObGJGeHVJQ0I5TzF4dWZUdGNibHh1Ylc5a2RXeGxMbVY0Y0c5eWRITWdQU0JEWVc1alpXeFViMnRsYmp0Y2JpSXNJaWQxYzJVZ2MzUnlhV04wSnp0Y2JseHViVzlrZFd4bExtVjRjRzl5ZEhNZ1BTQm1kVzVqZEdsdmJpQnBjME5oYm1ObGJDaDJZV3gxWlNrZ2UxeHVJQ0J5WlhSMWNtNGdJU0VvZG1Gc2RXVWdKaVlnZG1Gc2RXVXVYMTlEUVU1RFJVeGZYeWs3WEc1OU8xeHVJaXdpSjNWelpTQnpkSEpwWTNRbk8xeHVYRzUyWVhJZ1pHVm1ZWFZzZEhNZ1BTQnlaWEYxYVhKbEtDY3VMeTR1TDJSbFptRjFiSFJ6SnlrN1hHNTJZWElnZFhScGJITWdQU0J5WlhGMWFYSmxLQ2N1THk0dUwzVjBhV3h6SnlrN1hHNTJZWElnU1c1MFpYSmpaWEIwYjNKTllXNWhaMlZ5SUQwZ2NtVnhkV2x5WlNnbkxpOUpiblJsY21ObGNIUnZjazFoYm1GblpYSW5LVHRjYm5aaGNpQmthWE53WVhSamFGSmxjWFZsYzNRZ1BTQnlaWEYxYVhKbEtDY3VMMlJwYzNCaGRHTm9VbVZ4ZFdWemRDY3BPMXh1WEc0dktpcGNiaUFxSUVOeVpXRjBaU0JoSUc1bGR5QnBibk4wWVc1alpTQnZaaUJCZUdsdmMxeHVJQ3BjYmlBcUlFQndZWEpoYlNCN1QySnFaV04wZlNCcGJuTjBZVzVqWlVOdmJtWnBaeUJVYUdVZ1pHVm1ZWFZzZENCamIyNW1hV2NnWm05eUlIUm9aU0JwYm5OMFlXNWpaVnh1SUNvdlhHNW1kVzVqZEdsdmJpQkJlR2x2Y3locGJuTjBZVzVqWlVOdmJtWnBaeWtnZTF4dUlDQjBhR2x6TG1SbFptRjFiSFJ6SUQwZ2FXNXpkR0Z1WTJWRGIyNW1hV2M3WEc0Z0lIUm9hWE11YVc1MFpYSmpaWEIwYjNKeklEMGdlMXh1SUNBZ0lISmxjWFZsYzNRNklHNWxkeUJKYm5SbGNtTmxjSFJ2Y2sxaGJtRm5aWElvS1N4Y2JpQWdJQ0J5WlhOd2IyNXpaVG9nYm1WM0lFbHVkR1Z5WTJWd2RHOXlUV0Z1WVdkbGNpZ3BYRzRnSUgwN1hHNTlYRzVjYmk4cUtseHVJQ29nUkdsemNHRjBZMmdnWVNCeVpYRjFaWE4wWEc0Z0tseHVJQ29nUUhCaGNtRnRJSHRQWW1wbFkzUjlJR052Ym1acFp5QlVhR1VnWTI5dVptbG5JSE53WldOcFptbGpJR1p2Y2lCMGFHbHpJSEpsY1hWbGMzUWdLRzFsY21kbFpDQjNhWFJvSUhSb2FYTXVaR1ZtWVhWc2RITXBYRzRnS2k5Y2JrRjRhVzl6TG5CeWIzUnZkSGx3WlM1eVpYRjFaWE4wSUQwZ1puVnVZM1JwYjI0Z2NtVnhkV1Z6ZENoamIyNW1hV2NwSUh0Y2JpQWdMeXBsYzJ4cGJuUWdibTh0Y0dGeVlXMHRjbVZoYzNOcFoyNDZNQ292WEc0Z0lDOHZJRUZzYkc5M0lHWnZjaUJoZUdsdmN5Z25aWGhoYlhCc1pTOTFjbXduV3l3Z1kyOXVabWxuWFNrZ1lTQnNZU0JtWlhSamFDQkJVRWxjYmlBZ2FXWWdLSFI1Y0dWdlppQmpiMjVtYVdjZ1BUMDlJQ2R6ZEhKcGJtY25LU0I3WEc0Z0lDQWdZMjl1Wm1sbklEMGdkWFJwYkhNdWJXVnlaMlVvZTF4dUlDQWdJQ0FnZFhKc09pQmhjbWQxYldWdWRITmJNRjFjYmlBZ0lDQjlMQ0JoY21kMWJXVnVkSE5iTVYwcE8xeHVJQ0I5WEc1Y2JpQWdZMjl1Wm1sbklEMGdkWFJwYkhNdWJXVnlaMlVvWkdWbVlYVnNkSE1zSUh0dFpYUm9iMlE2SUNkblpYUW5mU3dnZEdocGN5NWtaV1poZFd4MGN5d2dZMjl1Wm1sbktUdGNiaUFnWTI5dVptbG5MbTFsZEdodlpDQTlJR052Ym1acFp5NXRaWFJvYjJRdWRHOU1iM2RsY2tOaGMyVW9LVHRjYmx4dUlDQXZMeUJJYjI5cklIVndJR2x1ZEdWeVkyVndkRzl5Y3lCdGFXUmtiR1YzWVhKbFhHNGdJSFpoY2lCamFHRnBiaUE5SUZ0a2FYTndZWFJqYUZKbGNYVmxjM1FzSUhWdVpHVm1hVzVsWkYwN1hHNGdJSFpoY2lCd2NtOXRhWE5sSUQwZ1VISnZiV2x6WlM1eVpYTnZiSFpsS0dOdmJtWnBaeWs3WEc1Y2JpQWdkR2hwY3k1cGJuUmxjbU5sY0hSdmNuTXVjbVZ4ZFdWemRDNW1iM0pGWVdOb0tHWjFibU4wYVc5dUlIVnVjMmhwWm5SU1pYRjFaWE4wU1c1MFpYSmpaWEIwYjNKektHbHVkR1Z5WTJWd2RHOXlLU0I3WEc0Z0lDQWdZMmhoYVc0dWRXNXphR2xtZENocGJuUmxjbU5sY0hSdmNpNW1kV3htYVd4c1pXUXNJR2x1ZEdWeVkyVndkRzl5TG5KbGFtVmpkR1ZrS1R0Y2JpQWdmU2s3WEc1Y2JpQWdkR2hwY3k1cGJuUmxjbU5sY0hSdmNuTXVjbVZ6Y0c5dWMyVXVabTl5UldGamFDaG1kVzVqZEdsdmJpQndkWE5vVW1WemNHOXVjMlZKYm5SbGNtTmxjSFJ2Y25Nb2FXNTBaWEpqWlhCMGIzSXBJSHRjYmlBZ0lDQmphR0ZwYmk1d2RYTm9LR2x1ZEdWeVkyVndkRzl5TG1aMWJHWnBiR3hsWkN3Z2FXNTBaWEpqWlhCMGIzSXVjbVZxWldOMFpXUXBPMXh1SUNCOUtUdGNibHh1SUNCM2FHbHNaU0FvWTJoaGFXNHViR1Z1WjNSb0tTQjdYRzRnSUNBZ2NISnZiV2x6WlNBOUlIQnliMjFwYzJVdWRHaGxiaWhqYUdGcGJpNXphR2xtZENncExDQmphR0ZwYmk1emFHbG1kQ2dwS1R0Y2JpQWdmVnh1WEc0Z0lISmxkSFZ5YmlCd2NtOXRhWE5sTzF4dWZUdGNibHh1THk4Z1VISnZkbWxrWlNCaGJHbGhjMlZ6SUdadmNpQnpkWEJ3YjNKMFpXUWdjbVZ4ZFdWemRDQnRaWFJvYjJSelhHNTFkR2xzY3k1bWIzSkZZV05vS0ZzblpHVnNaWFJsSnl3Z0oyZGxkQ2NzSUNkb1pXRmtKeXdnSjI5d2RHbHZibk1uWFN3Z1puVnVZM1JwYjI0Z1ptOXlSV0ZqYUUxbGRHaHZaRTV2UkdGMFlTaHRaWFJvYjJRcElIdGNiaUFnTHlwbGMyeHBiblFnWm5WdVl5MXVZVzFsY3pvd0tpOWNiaUFnUVhocGIzTXVjSEp2ZEc5MGVYQmxXMjFsZEdodlpGMGdQU0JtZFc1amRHbHZiaWgxY213c0lHTnZibVpwWnlrZ2UxeHVJQ0FnSUhKbGRIVnliaUIwYUdsekxuSmxjWFZsYzNRb2RYUnBiSE11YldWeVoyVW9ZMjl1Wm1sbklIeDhJSHQ5TENCN1hHNGdJQ0FnSUNCdFpYUm9iMlE2SUcxbGRHaHZaQ3hjYmlBZ0lDQWdJSFZ5YkRvZ2RYSnNYRzRnSUNBZ2ZTa3BPMXh1SUNCOU8xeHVmU2s3WEc1Y2JuVjBhV3h6TG1admNrVmhZMmdvV3lkd2IzTjBKeXdnSjNCMWRDY3NJQ2R3WVhSamFDZGRMQ0JtZFc1amRHbHZiaUJtYjNKRllXTm9UV1YwYUc5a1YybDBhRVJoZEdFb2JXVjBhRzlrS1NCN1hHNGdJQzhxWlhOc2FXNTBJR1oxYm1NdGJtRnRaWE02TUNvdlhHNGdJRUY0YVc5ekxuQnliM1J2ZEhsd1pWdHRaWFJvYjJSZElEMGdablZ1WTNScGIyNG9kWEpzTENCa1lYUmhMQ0JqYjI1bWFXY3BJSHRjYmlBZ0lDQnlaWFIxY200Z2RHaHBjeTV5WlhGMVpYTjBLSFYwYVd4ekxtMWxjbWRsS0dOdmJtWnBaeUI4ZkNCN2ZTd2dlMXh1SUNBZ0lDQWdiV1YwYUc5a09pQnRaWFJvYjJRc1hHNGdJQ0FnSUNCMWNtdzZJSFZ5YkN4Y2JpQWdJQ0FnSUdSaGRHRTZJR1JoZEdGY2JpQWdJQ0I5S1NrN1hHNGdJSDA3WEc1OUtUdGNibHh1Ylc5a2RXeGxMbVY0Y0c5eWRITWdQU0JCZUdsdmN6dGNiaUlzSWlkMWMyVWdjM1J5YVdOMEp6dGNibHh1ZG1GeUlIVjBhV3h6SUQwZ2NtVnhkV2x5WlNnbkxpOHVMaTkxZEdsc2N5Y3BPMXh1WEc1bWRXNWpkR2x2YmlCSmJuUmxjbU5sY0hSdmNrMWhibUZuWlhJb0tTQjdYRzRnSUhSb2FYTXVhR0Z1Wkd4bGNuTWdQU0JiWFR0Y2JuMWNibHh1THlvcVhHNGdLaUJCWkdRZ1lTQnVaWGNnYVc1MFpYSmpaWEIwYjNJZ2RHOGdkR2hsSUhOMFlXTnJYRzRnS2x4dUlDb2dRSEJoY21GdElIdEdkVzVqZEdsdmJuMGdablZzWm1sc2JHVmtJRlJvWlNCbWRXNWpkR2x2YmlCMGJ5Qm9ZVzVrYkdVZ1lIUm9aVzVnSUdadmNpQmhJR0JRY205dGFYTmxZRnh1SUNvZ1FIQmhjbUZ0SUh0R2RXNWpkR2x2Ym4wZ2NtVnFaV04wWldRZ1ZHaGxJR1oxYm1OMGFXOXVJSFJ2SUdoaGJtUnNaU0JnY21WcVpXTjBZQ0JtYjNJZ1lTQmdVSEp2YldselpXQmNiaUFxWEc0Z0tpQkFjbVYwZFhKdUlIdE9kVzFpWlhKOUlFRnVJRWxFSUhWelpXUWdkRzhnY21WdGIzWmxJR2x1ZEdWeVkyVndkRzl5SUd4aGRHVnlYRzRnS2k5Y2JrbHVkR1Z5WTJWd2RHOXlUV0Z1WVdkbGNpNXdjbTkwYjNSNWNHVXVkWE5sSUQwZ1puVnVZM1JwYjI0Z2RYTmxLR1oxYkdacGJHeGxaQ3dnY21WcVpXTjBaV1FwSUh0Y2JpQWdkR2hwY3k1b1lXNWtiR1Z5Y3k1d2RYTm9LSHRjYmlBZ0lDQm1kV3htYVd4c1pXUTZJR1oxYkdacGJHeGxaQ3hjYmlBZ0lDQnlaV3BsWTNSbFpEb2djbVZxWldOMFpXUmNiaUFnZlNrN1hHNGdJSEpsZEhWeWJpQjBhR2x6TG1oaGJtUnNaWEp6TG14bGJtZDBhQ0F0SURFN1hHNTlPMXh1WEc0dktpcGNiaUFxSUZKbGJXOTJaU0JoYmlCcGJuUmxjbU5sY0hSdmNpQm1jbTl0SUhSb1pTQnpkR0ZqYTF4dUlDcGNiaUFxSUVCd1lYSmhiU0I3VG5WdFltVnlmU0JwWkNCVWFHVWdTVVFnZEdoaGRDQjNZWE1nY21WMGRYSnVaV1FnWW5rZ1lIVnpaV0JjYmlBcUwxeHVTVzUwWlhKalpYQjBiM0pOWVc1aFoyVnlMbkJ5YjNSdmRIbHdaUzVsYW1WamRDQTlJR1oxYm1OMGFXOXVJR1ZxWldOMEtHbGtLU0I3WEc0Z0lHbG1JQ2gwYUdsekxtaGhibVJzWlhKelcybGtYU2tnZTF4dUlDQWdJSFJvYVhNdWFHRnVaR3hsY25OYmFXUmRJRDBnYm5Wc2JEdGNiaUFnZlZ4dWZUdGNibHh1THlvcVhHNGdLaUJKZEdWeVlYUmxJRzkyWlhJZ1lXeHNJSFJvWlNCeVpXZHBjM1JsY21Wa0lHbHVkR1Z5WTJWd2RHOXljMXh1SUNwY2JpQXFJRlJvYVhNZ2JXVjBhRzlrSUdseklIQmhjblJwWTNWc1lYSnNlU0IxYzJWbWRXd2dabTl5SUhOcmFYQndhVzVuSUc5MlpYSWdZVzU1WEc0Z0tpQnBiblJsY21ObGNIUnZjbk1nZEdoaGRDQnRZWGtnYUdGMlpTQmlaV052YldVZ1lHNTFiR3hnSUdOaGJHeHBibWNnWUdWcVpXTjBZQzVjYmlBcVhHNGdLaUJBY0dGeVlXMGdlMFoxYm1OMGFXOXVmU0JtYmlCVWFHVWdablZ1WTNScGIyNGdkRzhnWTJGc2JDQm1iM0lnWldGamFDQnBiblJsY21ObGNIUnZjbHh1SUNvdlhHNUpiblJsY21ObGNIUnZjazFoYm1GblpYSXVjSEp2ZEc5MGVYQmxMbVp2Y2tWaFkyZ2dQU0JtZFc1amRHbHZiaUJtYjNKRllXTm9LR1p1S1NCN1hHNGdJSFYwYVd4ekxtWnZja1ZoWTJnb2RHaHBjeTVvWVc1a2JHVnljeXdnWm5WdVkzUnBiMjRnWm05eVJXRmphRWhoYm1Sc1pYSW9hQ2tnZTF4dUlDQWdJR2xtSUNob0lDRTlQU0J1ZFd4c0tTQjdYRzRnSUNBZ0lDQm1iaWhvS1R0Y2JpQWdJQ0I5WEc0Z0lIMHBPMXh1ZlR0Y2JseHViVzlrZFd4bExtVjRjRzl5ZEhNZ1BTQkpiblJsY21ObGNIUnZjazFoYm1GblpYSTdYRzRpTENJbmRYTmxJSE4wY21samRDYzdYRzVjYm5aaGNpQmxibWhoYm1ObFJYSnliM0lnUFNCeVpYRjFhWEpsS0NjdUwyVnVhR0Z1WTJWRmNuSnZjaWNwTzF4dVhHNHZLaXBjYmlBcUlFTnlaV0YwWlNCaGJpQkZjbkp2Y2lCM2FYUm9JSFJvWlNCemNHVmphV1pwWldRZ2JXVnpjMkZuWlN3Z1kyOXVabWxuTENCbGNuSnZjaUJqYjJSbExDQnlaWEYxWlhOMElHRnVaQ0J5WlhOd2IyNXpaUzVjYmlBcVhHNGdLaUJBY0dGeVlXMGdlM04wY21sdVozMGdiV1Z6YzJGblpTQlVhR1VnWlhKeWIzSWdiV1Z6YzJGblpTNWNiaUFxSUVCd1lYSmhiU0I3VDJKcVpXTjBmU0JqYjI1bWFXY2dWR2hsSUdOdmJtWnBaeTVjYmlBcUlFQndZWEpoYlNCN2MzUnlhVzVuZlNCYlkyOWtaVjBnVkdobElHVnljbTl5SUdOdlpHVWdLR1p2Y2lCbGVHRnRjR3hsTENBblJVTlBUazVCUWs5U1ZFVkVKeWt1WEc0Z0tpQkFjR0Z5WVcwZ2UwOWlhbVZqZEgwZ1czSmxjWFZsYzNSZElGUm9aU0J5WlhGMVpYTjBMbHh1SUNvZ1FIQmhjbUZ0SUh0UFltcGxZM1I5SUZ0eVpYTndiMjV6WlYwZ1ZHaGxJSEpsYzNCdmJuTmxMbHh1SUNvZ1FISmxkSFZ5Ym5NZ2UwVnljbTl5ZlNCVWFHVWdZM0psWVhSbFpDQmxjbkp2Y2k1Y2JpQXFMMXh1Ylc5a2RXeGxMbVY0Y0c5eWRITWdQU0JtZFc1amRHbHZiaUJqY21WaGRHVkZjbkp2Y2lodFpYTnpZV2RsTENCamIyNW1hV2NzSUdOdlpHVXNJSEpsY1hWbGMzUXNJSEpsYzNCdmJuTmxLU0I3WEc0Z0lIWmhjaUJsY25KdmNpQTlJRzVsZHlCRmNuSnZjaWh0WlhOellXZGxLVHRjYmlBZ2NtVjBkWEp1SUdWdWFHRnVZMlZGY25KdmNpaGxjbkp2Y2l3Z1kyOXVabWxuTENCamIyUmxMQ0J5WlhGMVpYTjBMQ0J5WlhOd2IyNXpaU2s3WEc1OU8xeHVJaXdpSjNWelpTQnpkSEpwWTNRbk8xeHVYRzUyWVhJZ2RYUnBiSE1nUFNCeVpYRjFhWEpsS0NjdUx5NHVMM1YwYVd4ekp5azdYRzUyWVhJZ2RISmhibk5tYjNKdFJHRjBZU0E5SUhKbGNYVnBjbVVvSnk0dmRISmhibk5tYjNKdFJHRjBZU2NwTzF4dWRtRnlJR2x6UTJGdVkyVnNJRDBnY21WeGRXbHlaU2duTGk0dlkyRnVZMlZzTDJselEyRnVZMlZzSnlrN1hHNTJZWElnWkdWbVlYVnNkSE1nUFNCeVpYRjFhWEpsS0NjdUxpOWtaV1poZFd4MGN5Y3BPMXh1ZG1GeUlHbHpRV0p6YjJ4MWRHVlZVa3dnUFNCeVpYRjFhWEpsS0NjdUx5NHVMMmhsYkhCbGNuTXZhWE5CWW5OdmJIVjBaVlZTVENjcE8xeHVkbUZ5SUdOdmJXSnBibVZWVWt4eklEMGdjbVZ4ZFdseVpTZ25MaTh1TGk5b1pXeHdaWEp6TDJOdmJXSnBibVZWVWt4ekp5azdYRzVjYmk4cUtseHVJQ29nVkdoeWIzZHpJR0VnWUVOaGJtTmxiR0FnYVdZZ1kyRnVZMlZzYkdGMGFXOXVJR2hoY3lCaVpXVnVJSEpsY1hWbGMzUmxaQzVjYmlBcUwxeHVablZ1WTNScGIyNGdkR2h5YjNkSlprTmhibU5sYkd4aGRHbHZibEpsY1hWbGMzUmxaQ2hqYjI1bWFXY3BJSHRjYmlBZ2FXWWdLR052Ym1acFp5NWpZVzVqWld4VWIydGxiaWtnZTF4dUlDQWdJR052Ym1acFp5NWpZVzVqWld4VWIydGxiaTUwYUhKdmQwbG1VbVZ4ZFdWemRHVmtLQ2s3WEc0Z0lIMWNibjFjYmx4dUx5b3FYRzRnS2lCRWFYTndZWFJqYUNCaElISmxjWFZsYzNRZ2RHOGdkR2hsSUhObGNuWmxjaUIxYzJsdVp5QjBhR1VnWTI5dVptbG5kWEpsWkNCaFpHRndkR1Z5TGx4dUlDcGNiaUFxSUVCd1lYSmhiU0I3YjJKcVpXTjBmU0JqYjI1bWFXY2dWR2hsSUdOdmJtWnBaeUIwYUdGMElHbHpJSFJ2SUdKbElIVnpaV1FnWm05eUlIUm9aU0J5WlhGMVpYTjBYRzRnS2lCQWNtVjBkWEp1Y3lCN1VISnZiV2x6WlgwZ1ZHaGxJRkJ5YjIxcGMyVWdkRzhnWW1VZ1puVnNabWxzYkdWa1hHNGdLaTljYm0xdlpIVnNaUzVsZUhCdmNuUnpJRDBnWm5WdVkzUnBiMjRnWkdsemNHRjBZMmhTWlhGMVpYTjBLR052Ym1acFp5a2dlMXh1SUNCMGFISnZkMGxtUTJGdVkyVnNiR0YwYVc5dVVtVnhkV1Z6ZEdWa0tHTnZibVpwWnlrN1hHNWNiaUFnTHk4Z1UzVndjRzl5ZENCaVlYTmxWVkpNSUdOdmJtWnBaMXh1SUNCcFppQW9ZMjl1Wm1sbkxtSmhjMlZWVWt3Z0ppWWdJV2x6UVdKemIyeDFkR1ZWVWt3b1kyOXVabWxuTG5WeWJDa3BJSHRjYmlBZ0lDQmpiMjVtYVdjdWRYSnNJRDBnWTI5dFltbHVaVlZTVEhNb1kyOXVabWxuTG1KaGMyVlZVa3dzSUdOdmJtWnBaeTUxY213cE8xeHVJQ0I5WEc1Y2JpQWdMeThnUlc1emRYSmxJR2hsWVdSbGNuTWdaWGhwYzNSY2JpQWdZMjl1Wm1sbkxtaGxZV1JsY25NZ1BTQmpiMjVtYVdjdWFHVmhaR1Z5Y3lCOGZDQjdmVHRjYmx4dUlDQXZMeUJVY21GdWMyWnZjbTBnY21WeGRXVnpkQ0JrWVhSaFhHNGdJR052Ym1acFp5NWtZWFJoSUQwZ2RISmhibk5tYjNKdFJHRjBZU2hjYmlBZ0lDQmpiMjVtYVdjdVpHRjBZU3hjYmlBZ0lDQmpiMjVtYVdjdWFHVmhaR1Z5Y3l4Y2JpQWdJQ0JqYjI1bWFXY3VkSEpoYm5ObWIzSnRVbVZ4ZFdWemRGeHVJQ0FwTzF4dVhHNGdJQzh2SUVac1lYUjBaVzRnYUdWaFpHVnljMXh1SUNCamIyNW1hV2N1YUdWaFpHVnljeUE5SUhWMGFXeHpMbTFsY21kbEtGeHVJQ0FnSUdOdmJtWnBaeTVvWldGa1pYSnpMbU52YlcxdmJpQjhmQ0I3ZlN4Y2JpQWdJQ0JqYjI1bWFXY3VhR1ZoWkdWeWMxdGpiMjVtYVdjdWJXVjBhRzlrWFNCOGZDQjdmU3hjYmlBZ0lDQmpiMjVtYVdjdWFHVmhaR1Z5Y3lCOGZDQjdmVnh1SUNBcE8xeHVYRzRnSUhWMGFXeHpMbVp2Y2tWaFkyZ29YRzRnSUNBZ1d5ZGtaV3hsZEdVbkxDQW5aMlYwSnl3Z0oyaGxZV1FuTENBbmNHOXpkQ2NzSUNkd2RYUW5MQ0FuY0dGMFkyZ25MQ0FuWTI5dGJXOXVKMTBzWEc0Z0lDQWdablZ1WTNScGIyNGdZMnhsWVc1SVpXRmtaWEpEYjI1bWFXY29iV1YwYUc5a0tTQjdYRzRnSUNBZ0lDQmtaV3hsZEdVZ1kyOXVabWxuTG1obFlXUmxjbk5iYldWMGFHOWtYVHRjYmlBZ0lDQjlYRzRnSUNrN1hHNWNiaUFnZG1GeUlHRmtZWEIwWlhJZ1BTQmpiMjVtYVdjdVlXUmhjSFJsY2lCOGZDQmtaV1poZFd4MGN5NWhaR0Z3ZEdWeU8xeHVYRzRnSUhKbGRIVnliaUJoWkdGd2RHVnlLR052Ym1acFp5a3VkR2hsYmlobWRXNWpkR2x2YmlCdmJrRmtZWEIwWlhKU1pYTnZiSFYwYVc5dUtISmxjM0J2Ym5ObEtTQjdYRzRnSUNBZ2RHaHliM2RKWmtOaGJtTmxiR3hoZEdsdmJsSmxjWFZsYzNSbFpDaGpiMjVtYVdjcE8xeHVYRzRnSUNBZ0x5OGdWSEpoYm5ObWIzSnRJSEpsYzNCdmJuTmxJR1JoZEdGY2JpQWdJQ0J5WlhOd2IyNXpaUzVrWVhSaElEMGdkSEpoYm5ObWIzSnRSR0YwWVNoY2JpQWdJQ0FnSUhKbGMzQnZibk5sTG1SaGRHRXNYRzRnSUNBZ0lDQnlaWE53YjI1elpTNW9aV0ZrWlhKekxGeHVJQ0FnSUNBZ1kyOXVabWxuTG5SeVlXNXpabTl5YlZKbGMzQnZibk5sWEc0Z0lDQWdLVHRjYmx4dUlDQWdJSEpsZEhWeWJpQnlaWE53YjI1elpUdGNiaUFnZlN3Z1puVnVZM1JwYjI0Z2IyNUJaR0Z3ZEdWeVVtVnFaV04wYVc5dUtISmxZWE52YmlrZ2UxeHVJQ0FnSUdsbUlDZ2hhWE5EWVc1alpXd29jbVZoYzI5dUtTa2dlMXh1SUNBZ0lDQWdkR2h5YjNkSlprTmhibU5sYkd4aGRHbHZibEpsY1hWbGMzUmxaQ2hqYjI1bWFXY3BPMXh1WEc0Z0lDQWdJQ0F2THlCVWNtRnVjMlp2Y20wZ2NtVnpjRzl1YzJVZ1pHRjBZVnh1SUNBZ0lDQWdhV1lnS0hKbFlYTnZiaUFtSmlCeVpXRnpiMjR1Y21WemNHOXVjMlVwSUh0Y2JpQWdJQ0FnSUNBZ2NtVmhjMjl1TG5KbGMzQnZibk5sTG1SaGRHRWdQU0IwY21GdWMyWnZjbTFFWVhSaEtGeHVJQ0FnSUNBZ0lDQWdJSEpsWVhOdmJpNXlaWE53YjI1elpTNWtZWFJoTEZ4dUlDQWdJQ0FnSUNBZ0lISmxZWE52Ymk1eVpYTndiMjV6WlM1b1pXRmtaWEp6TEZ4dUlDQWdJQ0FnSUNBZ0lHTnZibVpwWnk1MGNtRnVjMlp2Y20xU1pYTndiMjV6WlZ4dUlDQWdJQ0FnSUNBcE8xeHVJQ0FnSUNBZ2ZWeHVJQ0FnSUgxY2JseHVJQ0FnSUhKbGRIVnliaUJRY205dGFYTmxMbkpsYW1WamRDaHlaV0Z6YjI0cE8xeHVJQ0I5S1R0Y2JuMDdYRzRpTENJbmRYTmxJSE4wY21samRDYzdYRzVjYmk4cUtseHVJQ29nVlhCa1lYUmxJR0Z1SUVWeWNtOXlJSGRwZEdnZ2RHaGxJSE53WldOcFptbGxaQ0JqYjI1bWFXY3NJR1Z5Y205eUlHTnZaR1VzSUdGdVpDQnlaWE53YjI1elpTNWNiaUFxWEc0Z0tpQkFjR0Z5WVcwZ2UwVnljbTl5ZlNCbGNuSnZjaUJVYUdVZ1pYSnliM0lnZEc4Z2RYQmtZWFJsTGx4dUlDb2dRSEJoY21GdElIdFBZbXBsWTNSOUlHTnZibVpwWnlCVWFHVWdZMjl1Wm1sbkxseHVJQ29nUUhCaGNtRnRJSHR6ZEhKcGJtZDlJRnRqYjJSbFhTQlVhR1VnWlhKeWIzSWdZMjlrWlNBb1ptOXlJR1Y0WVcxd2JHVXNJQ2RGUTA5T1RrRkNUMUpVUlVRbktTNWNiaUFxSUVCd1lYSmhiU0I3VDJKcVpXTjBmU0JiY21WeGRXVnpkRjBnVkdobElISmxjWFZsYzNRdVhHNGdLaUJBY0dGeVlXMGdlMDlpYW1WamRIMGdXM0psYzNCdmJuTmxYU0JVYUdVZ2NtVnpjRzl1YzJVdVhHNGdLaUJBY21WMGRYSnVjeUI3UlhKeWIzSjlJRlJvWlNCbGNuSnZjaTVjYmlBcUwxeHViVzlrZFd4bExtVjRjRzl5ZEhNZ1BTQm1kVzVqZEdsdmJpQmxibWhoYm1ObFJYSnliM0lvWlhKeWIzSXNJR052Ym1acFp5d2dZMjlrWlN3Z2NtVnhkV1Z6ZEN3Z2NtVnpjRzl1YzJVcElIdGNiaUFnWlhKeWIzSXVZMjl1Wm1sbklEMGdZMjl1Wm1sbk8xeHVJQ0JwWmlBb1kyOWtaU2tnZTF4dUlDQWdJR1Z5Y205eUxtTnZaR1VnUFNCamIyUmxPMXh1SUNCOVhHNGdJR1Z5Y205eUxuSmxjWFZsYzNRZ1BTQnlaWEYxWlhOME8xeHVJQ0JsY25KdmNpNXlaWE53YjI1elpTQTlJSEpsYzNCdmJuTmxPMXh1SUNCeVpYUjFjbTRnWlhKeWIzSTdYRzU5TzF4dUlpd2lKM1Z6WlNCemRISnBZM1FuTzF4dVhHNTJZWElnWTNKbFlYUmxSWEp5YjNJZ1BTQnlaWEYxYVhKbEtDY3VMMk55WldGMFpVVnljbTl5SnlrN1hHNWNiaThxS2x4dUlDb2dVbVZ6YjJ4MlpTQnZjaUJ5WldwbFkzUWdZU0JRY205dGFYTmxJR0poYzJWa0lHOXVJSEpsYzNCdmJuTmxJSE4wWVhSMWN5NWNiaUFxWEc0Z0tpQkFjR0Z5WVcwZ2UwWjFibU4wYVc5dWZTQnlaWE52YkhabElFRWdablZ1WTNScGIyNGdkR2hoZENCeVpYTnZiSFpsY3lCMGFHVWdjSEp2YldselpTNWNiaUFxSUVCd1lYSmhiU0I3Um5WdVkzUnBiMjU5SUhKbGFtVmpkQ0JCSUdaMWJtTjBhVzl1SUhSb1lYUWdjbVZxWldOMGN5QjBhR1VnY0hKdmJXbHpaUzVjYmlBcUlFQndZWEpoYlNCN2IySnFaV04wZlNCeVpYTndiMjV6WlNCVWFHVWdjbVZ6Y0c5dWMyVXVYRzRnS2k5Y2JtMXZaSFZzWlM1bGVIQnZjblJ6SUQwZ1puVnVZM1JwYjI0Z2MyVjBkR3hsS0hKbGMyOXNkbVVzSUhKbGFtVmpkQ3dnY21WemNHOXVjMlVwSUh0Y2JpQWdkbUZ5SUhaaGJHbGtZWFJsVTNSaGRIVnpJRDBnY21WemNHOXVjMlV1WTI5dVptbG5MblpoYkdsa1lYUmxVM1JoZEhWek8xeHVJQ0F2THlCT2IzUmxPaUJ6ZEdGMGRYTWdhWE1nYm05MElHVjRjRzl6WldRZ1lua2dXRVJ2YldGcGJsSmxjWFZsYzNSY2JpQWdhV1lnS0NGeVpYTndiMjV6WlM1emRHRjBkWE1nZkh3Z0lYWmhiR2xrWVhSbFUzUmhkSFZ6SUh4OElIWmhiR2xrWVhSbFUzUmhkSFZ6S0hKbGMzQnZibk5sTG5OMFlYUjFjeWtwSUh0Y2JpQWdJQ0J5WlhOdmJIWmxLSEpsYzNCdmJuTmxLVHRjYmlBZ2ZTQmxiSE5sSUh0Y2JpQWdJQ0J5WldwbFkzUW9ZM0psWVhSbFJYSnliM0lvWEc0Z0lDQWdJQ0FuVW1WeGRXVnpkQ0JtWVdsc1pXUWdkMmwwYUNCemRHRjBkWE1nWTI5a1pTQW5JQ3NnY21WemNHOXVjMlV1YzNSaGRIVnpMRnh1SUNBZ0lDQWdjbVZ6Y0c5dWMyVXVZMjl1Wm1sbkxGeHVJQ0FnSUNBZ2JuVnNiQ3hjYmlBZ0lDQWdJSEpsYzNCdmJuTmxMbkpsY1hWbGMzUXNYRzRnSUNBZ0lDQnlaWE53YjI1elpWeHVJQ0FnSUNrcE8xeHVJQ0I5WEc1OU8xeHVJaXdpSjNWelpTQnpkSEpwWTNRbk8xeHVYRzUyWVhJZ2RYUnBiSE1nUFNCeVpYRjFhWEpsS0NjdUx5NHVMM1YwYVd4ekp5azdYRzVjYmk4cUtseHVJQ29nVkhKaGJuTm1iM0p0SUhSb1pTQmtZWFJoSUdadmNpQmhJSEpsY1hWbGMzUWdiM0lnWVNCeVpYTndiMjV6WlZ4dUlDcGNiaUFxSUVCd1lYSmhiU0I3VDJKcVpXTjBmRk4wY21sdVozMGdaR0YwWVNCVWFHVWdaR0YwWVNCMGJ5QmlaU0IwY21GdWMyWnZjbTFsWkZ4dUlDb2dRSEJoY21GdElIdEJjbkpoZVgwZ2FHVmhaR1Z5Y3lCVWFHVWdhR1ZoWkdWeWN5Qm1iM0lnZEdobElISmxjWFZsYzNRZ2IzSWdjbVZ6Y0c5dWMyVmNiaUFxSUVCd1lYSmhiU0I3UVhKeVlYbDhSblZ1WTNScGIyNTlJR1p1Y3lCQklITnBibWRzWlNCbWRXNWpkR2x2YmlCdmNpQkJjbkpoZVNCdlppQm1kVzVqZEdsdmJuTmNiaUFxSUVCeVpYUjFjbTV6SUhzcWZTQlVhR1VnY21WemRXeDBhVzVuSUhSeVlXNXpabTl5YldWa0lHUmhkR0ZjYmlBcUwxeHViVzlrZFd4bExtVjRjRzl5ZEhNZ1BTQm1kVzVqZEdsdmJpQjBjbUZ1YzJadmNtMUVZWFJoS0dSaGRHRXNJR2hsWVdSbGNuTXNJR1p1Y3lrZ2UxeHVJQ0F2S21WemJHbHVkQ0J1Ynkxd1lYSmhiUzF5WldGemMybG5iam93S2k5Y2JpQWdkWFJwYkhNdVptOXlSV0ZqYUNobWJuTXNJR1oxYm1OMGFXOXVJSFJ5WVc1elptOXliU2htYmlrZ2UxeHVJQ0FnSUdSaGRHRWdQU0JtYmloa1lYUmhMQ0JvWldGa1pYSnpLVHRjYmlBZ2ZTazdYRzVjYmlBZ2NtVjBkWEp1SUdSaGRHRTdYRzU5TzF4dUlpd2lKM1Z6WlNCemRISnBZM1FuTzF4dVhHNTJZWElnZFhScGJITWdQU0J5WlhGMWFYSmxLQ2N1TDNWMGFXeHpKeWs3WEc1MllYSWdibTl5YldGc2FYcGxTR1ZoWkdWeVRtRnRaU0E5SUhKbGNYVnBjbVVvSnk0dmFHVnNjR1Z5Y3k5dWIzSnRZV3hwZW1WSVpXRmtaWEpPWVcxbEp5azdYRzVjYm5aaGNpQkVSVVpCVlV4VVgwTlBUbFJGVGxSZlZGbFFSU0E5SUh0Y2JpQWdKME52Ym5SbGJuUXRWSGx3WlNjNklDZGhjSEJzYVdOaGRHbHZiaTk0TFhkM2R5MW1iM0p0TFhWeWJHVnVZMjlrWldRblhHNTlPMXh1WEc1bWRXNWpkR2x2YmlCelpYUkRiMjUwWlc1MFZIbHdaVWxtVlc1elpYUW9hR1ZoWkdWeWN5d2dkbUZzZFdVcElIdGNiaUFnYVdZZ0tDRjFkR2xzY3k1cGMxVnVaR1ZtYVc1bFpDaG9aV0ZrWlhKektTQW1KaUIxZEdsc2N5NXBjMVZ1WkdWbWFXNWxaQ2hvWldGa1pYSnpXeWREYjI1MFpXNTBMVlI1Y0dVblhTa3BJSHRjYmlBZ0lDQm9aV0ZrWlhKeld5ZERiMjUwWlc1MExWUjVjR1VuWFNBOUlIWmhiSFZsTzF4dUlDQjlYRzU5WEc1Y2JtWjFibU4wYVc5dUlHZGxkRVJsWm1GMWJIUkJaR0Z3ZEdWeUtDa2dlMXh1SUNCMllYSWdZV1JoY0hSbGNqdGNiaUFnYVdZZ0tIUjVjR1Z2WmlCWVRVeElkSFJ3VW1WeGRXVnpkQ0FoUFQwZ0ozVnVaR1ZtYVc1bFpDY3BJSHRjYmlBZ0lDQXZMeUJHYjNJZ1luSnZkM05sY25NZ2RYTmxJRmhJVWlCaFpHRndkR1Z5WEc0Z0lDQWdZV1JoY0hSbGNpQTlJSEpsY1hWcGNtVW9KeTR2WVdSaGNIUmxjbk12ZUdoeUp5azdYRzRnSUgwZ1pXeHpaU0JwWmlBb2RIbHdaVzltSUhCeWIyTmxjM01nSVQwOUlDZDFibVJsWm1sdVpXUW5LU0I3WEc0Z0lDQWdMeThnUm05eUlHNXZaR1VnZFhObElFaFVWRkFnWVdSaGNIUmxjbHh1SUNBZ0lHRmtZWEIwWlhJZ1BTQnlaWEYxYVhKbEtDY3VMMkZrWVhCMFpYSnpMMmgwZEhBbktUdGNiaUFnZlZ4dUlDQnlaWFIxY200Z1lXUmhjSFJsY2p0Y2JuMWNibHh1ZG1GeUlHUmxabUYxYkhSeklEMGdlMXh1SUNCaFpHRndkR1Z5T2lCblpYUkVaV1poZFd4MFFXUmhjSFJsY2lncExGeHVYRzRnSUhSeVlXNXpabTl5YlZKbGNYVmxjM1E2SUZ0bWRXNWpkR2x2YmlCMGNtRnVjMlp2Y20xU1pYRjFaWE4wS0dSaGRHRXNJR2hsWVdSbGNuTXBJSHRjYmlBZ0lDQnViM0p0WVd4cGVtVklaV0ZrWlhKT1lXMWxLR2hsWVdSbGNuTXNJQ2REYjI1MFpXNTBMVlI1Y0dVbktUdGNiaUFnSUNCcFppQW9kWFJwYkhNdWFYTkdiM0p0UkdGMFlTaGtZWFJoS1NCOGZGeHVJQ0FnSUNBZ2RYUnBiSE11YVhOQmNuSmhlVUoxWm1abGNpaGtZWFJoS1NCOGZGeHVJQ0FnSUNBZ2RYUnBiSE11YVhOQ2RXWm1aWElvWkdGMFlTa2dmSHhjYmlBZ0lDQWdJSFYwYVd4ekxtbHpVM1J5WldGdEtHUmhkR0VwSUh4OFhHNGdJQ0FnSUNCMWRHbHNjeTVwYzBacGJHVW9aR0YwWVNrZ2ZIeGNiaUFnSUNBZ0lIVjBhV3h6TG1selFteHZZaWhrWVhSaEtWeHVJQ0FnSUNrZ2UxeHVJQ0FnSUNBZ2NtVjBkWEp1SUdSaGRHRTdYRzRnSUNBZ2ZWeHVJQ0FnSUdsbUlDaDFkR2xzY3k1cGMwRnljbUY1UW5WbVptVnlWbWxsZHloa1lYUmhLU2tnZTF4dUlDQWdJQ0FnY21WMGRYSnVJR1JoZEdFdVluVm1abVZ5TzF4dUlDQWdJSDFjYmlBZ0lDQnBaaUFvZFhScGJITXVhWE5WVWt4VFpXRnlZMmhRWVhKaGJYTW9aR0YwWVNrcElIdGNiaUFnSUNBZ0lITmxkRU52Ym5SbGJuUlVlWEJsU1daVmJuTmxkQ2hvWldGa1pYSnpMQ0FuWVhCd2JHbGpZWFJwYjI0dmVDMTNkM2N0Wm05eWJTMTFjbXhsYm1OdlpHVmtPMk5vWVhKelpYUTlkWFJtTFRnbktUdGNiaUFnSUNBZ0lISmxkSFZ5YmlCa1lYUmhMblJ2VTNSeWFXNW5LQ2s3WEc0Z0lDQWdmVnh1SUNBZ0lHbG1JQ2gxZEdsc2N5NXBjMDlpYW1WamRDaGtZWFJoS1NrZ2UxeHVJQ0FnSUNBZ2MyVjBRMjl1ZEdWdWRGUjVjR1ZKWmxWdWMyVjBLR2hsWVdSbGNuTXNJQ2RoY0hCc2FXTmhkR2x2Ymk5cWMyOXVPMk5vWVhKelpYUTlkWFJtTFRnbktUdGNiaUFnSUNBZ0lISmxkSFZ5YmlCS1UwOU9Mbk4wY21sdVoybG1lU2hrWVhSaEtUdGNiaUFnSUNCOVhHNGdJQ0FnY21WMGRYSnVJR1JoZEdFN1hHNGdJSDFkTEZ4dVhHNGdJSFJ5WVc1elptOXliVkpsYzNCdmJuTmxPaUJiWm5WdVkzUnBiMjRnZEhKaGJuTm1iM0p0VW1WemNHOXVjMlVvWkdGMFlTa2dlMXh1SUNBZ0lDOHFaWE5zYVc1MElHNXZMWEJoY21GdExYSmxZWE56YVdkdU9qQXFMMXh1SUNBZ0lHbG1JQ2gwZVhCbGIyWWdaR0YwWVNBOVBUMGdKM04wY21sdVp5Y3BJSHRjYmlBZ0lDQWdJSFJ5ZVNCN1hHNGdJQ0FnSUNBZ0lHUmhkR0VnUFNCS1UwOU9MbkJoY25ObEtHUmhkR0VwTzF4dUlDQWdJQ0FnZlNCallYUmphQ0FvWlNrZ2V5QXZLaUJKWjI1dmNtVWdLaThnZlZ4dUlDQWdJSDFjYmlBZ0lDQnlaWFIxY200Z1pHRjBZVHRjYmlBZ2ZWMHNYRzVjYmlBZ0x5b3FYRzRnSUNBcUlFRWdkR2x0Wlc5MWRDQnBiaUJ0YVd4c2FYTmxZMjl1WkhNZ2RHOGdZV0p2Y25RZ1lTQnlaWEYxWlhOMExpQkpaaUJ6WlhRZ2RHOGdNQ0FvWkdWbVlYVnNkQ2tnWVZ4dUlDQWdLaUIwYVcxbGIzVjBJR2x6SUc1dmRDQmpjbVZoZEdWa0xseHVJQ0FnS2k5Y2JpQWdkR2x0Wlc5MWREb2dNQ3hjYmx4dUlDQjRjM0ptUTI5dmEybGxUbUZ0WlRvZ0oxaFRVa1l0VkU5TFJVNG5MRnh1SUNCNGMzSm1TR1ZoWkdWeVRtRnRaVG9nSjFndFdGTlNSaTFVVDB0RlRpY3NYRzVjYmlBZ2JXRjRRMjl1ZEdWdWRFeGxibWQwYURvZ0xURXNYRzVjYmlBZ2RtRnNhV1JoZEdWVGRHRjBkWE02SUdaMWJtTjBhVzl1SUhaaGJHbGtZWFJsVTNSaGRIVnpLSE4wWVhSMWN5a2dlMXh1SUNBZ0lISmxkSFZ5YmlCemRHRjBkWE1nUGowZ01qQXdJQ1ltSUhOMFlYUjFjeUE4SURNd01EdGNiaUFnZlZ4dWZUdGNibHh1WkdWbVlYVnNkSE11YUdWaFpHVnljeUE5SUh0Y2JpQWdZMjl0Ylc5dU9pQjdYRzRnSUNBZ0owRmpZMlZ3ZENjNklDZGhjSEJzYVdOaGRHbHZiaTlxYzI5dUxDQjBaWGgwTDNCc1lXbHVMQ0FxTHlvblhHNGdJSDFjYm4wN1hHNWNiblYwYVd4ekxtWnZja1ZoWTJnb1d5ZGtaV3hsZEdVbkxDQW5aMlYwSnl3Z0oyaGxZV1FuWFN3Z1puVnVZM1JwYjI0Z1ptOXlSV0ZqYUUxbGRHaHZaRTV2UkdGMFlTaHRaWFJvYjJRcElIdGNiaUFnWkdWbVlYVnNkSE11YUdWaFpHVnljMXR0WlhSb2IyUmRJRDBnZTMwN1hHNTlLVHRjYmx4dWRYUnBiSE11Wm05eVJXRmphQ2hiSjNCdmMzUW5MQ0FuY0hWMEp5d2dKM0JoZEdOb0oxMHNJR1oxYm1OMGFXOXVJR1p2Y2tWaFkyaE5aWFJvYjJSWGFYUm9SR0YwWVNodFpYUm9iMlFwSUh0Y2JpQWdaR1ZtWVhWc2RITXVhR1ZoWkdWeWMxdHRaWFJvYjJSZElEMGdkWFJwYkhNdWJXVnlaMlVvUkVWR1FWVk1WRjlEVDA1VVJVNVVYMVJaVUVVcE8xeHVmU2s3WEc1Y2JtMXZaSFZzWlM1bGVIQnZjblJ6SUQwZ1pHVm1ZWFZzZEhNN1hHNGlMQ0luZFhObElITjBjbWxqZENjN1hHNWNibTF2WkhWc1pTNWxlSEJ2Y25SeklEMGdablZ1WTNScGIyNGdZbWx1WkNobWJpd2dkR2hwYzBGeVp5a2dlMXh1SUNCeVpYUjFjbTRnWm5WdVkzUnBiMjRnZDNKaGNDZ3BJSHRjYmlBZ0lDQjJZWElnWVhKbmN5QTlJRzVsZHlCQmNuSmhlU2hoY21kMWJXVnVkSE11YkdWdVozUm9LVHRjYmlBZ0lDQm1iM0lnS0haaGNpQnBJRDBnTURzZ2FTQThJR0Z5WjNNdWJHVnVaM1JvT3lCcEt5c3BJSHRjYmlBZ0lDQWdJR0Z5WjNOYmFWMGdQU0JoY21kMWJXVnVkSE5iYVYwN1hHNGdJQ0FnZlZ4dUlDQWdJSEpsZEhWeWJpQm1iaTVoY0hCc2VTaDBhR2x6UVhKbkxDQmhjbWR6S1R0Y2JpQWdmVHRjYm4wN1hHNGlMQ0luZFhObElITjBjbWxqZENjN1hHNWNiaTh2SUdKMGIyRWdjRzlzZVdacGJHd2dabTl5SUVsRlBERXdJR052ZFhKMFpYTjVJR2gwZEhCek9pOHZaMmwwYUhWaUxtTnZiUzlrWVhacFpHTm9ZVzFpWlhKekwwSmhjMlUyTkM1cWMxeHVYRzUyWVhJZ1kyaGhjbk1nUFNBblFVSkRSRVZHUjBoSlNrdE1UVTVQVUZGU1UxUlZWbGRZV1ZwaFltTmtaV1puYUdscWEyeHRibTl3Y1hKemRIVjJkM2g1ZWpBeE1qTTBOVFkzT0Rrckx6MG5PMXh1WEc1bWRXNWpkR2x2YmlCRktDa2dlMXh1SUNCMGFHbHpMbTFsYzNOaFoyVWdQU0FuVTNSeWFXNW5JR052Ym5SaGFXNXpJR0Z1SUdsdWRtRnNhV1FnWTJoaGNtRmpkR1Z5Snp0Y2JuMWNia1V1Y0hKdmRHOTBlWEJsSUQwZ2JtVjNJRVZ5Y205eU8xeHVSUzV3Y205MGIzUjVjR1V1WTI5a1pTQTlJRFU3WEc1RkxuQnliM1J2ZEhsd1pTNXVZVzFsSUQwZ0owbHVkbUZzYVdSRGFHRnlZV04wWlhKRmNuSnZjaWM3WEc1Y2JtWjFibU4wYVc5dUlHSjBiMkVvYVc1d2RYUXBJSHRjYmlBZ2RtRnlJSE4wY2lBOUlGTjBjbWx1WnlocGJuQjFkQ2s3WEc0Z0lIWmhjaUJ2ZFhSd2RYUWdQU0FuSnp0Y2JpQWdabTl5SUNoY2JpQWdJQ0F2THlCcGJtbDBhV0ZzYVhwbElISmxjM1ZzZENCaGJtUWdZMjkxYm5SbGNseHVJQ0FnSUhaaGNpQmliRzlqYXl3Z1kyaGhja052WkdVc0lHbGtlQ0E5SURBc0lHMWhjQ0E5SUdOb1lYSnpPMXh1SUNBZ0lDOHZJR2xtSUhSb1pTQnVaWGgwSUhOMGNpQnBibVJsZUNCa2IyVnpJRzV2ZENCbGVHbHpkRHBjYmlBZ0lDQXZMeUFnSUdOb1lXNW5aU0IwYUdVZ2JXRndjR2x1WnlCMFlXSnNaU0IwYnlCY0lqMWNJbHh1SUNBZ0lDOHZJQ0FnWTJobFkyc2dhV1lnWkNCb1lYTWdibThnWm5KaFkzUnBiMjVoYkNCa2FXZHBkSE5jYmlBZ0lDQnpkSEl1WTJoaGNrRjBLR2xrZUNCOElEQXBJSHg4SUNodFlYQWdQU0FuUFNjc0lHbGtlQ0FsSURFcE8xeHVJQ0FnSUM4dklGd2lPQ0F0SUdsa2VDQWxJREVnS2lBNFhDSWdaMlZ1WlhKaGRHVnpJSFJvWlNCelpYRjFaVzVqWlNBeUxDQTBMQ0EyTENBNFhHNGdJQ0FnYjNWMGNIVjBJQ3M5SUcxaGNDNWphR0Z5UVhRb05qTWdKaUJpYkc5amF5QStQaUE0SUMwZ2FXUjRJQ1VnTVNBcUlEZ3BYRzRnSUNrZ2UxeHVJQ0FnSUdOb1lYSkRiMlJsSUQwZ2MzUnlMbU5vWVhKRGIyUmxRWFFvYVdSNElDczlJRE1nTHlBMEtUdGNiaUFnSUNCcFppQW9ZMmhoY2tOdlpHVWdQaUF3ZUVaR0tTQjdYRzRnSUNBZ0lDQjBhSEp2ZHlCdVpYY2dSU2dwTzF4dUlDQWdJSDFjYmlBZ0lDQmliRzlqYXlBOUlHSnNiMk5ySUR3OElEZ2dmQ0JqYUdGeVEyOWtaVHRjYmlBZ2ZWeHVJQ0J5WlhSMWNtNGdiM1YwY0hWME8xeHVmVnh1WEc1dGIyUjFiR1V1Wlhod2IzSjBjeUE5SUdKMGIyRTdYRzRpTENJbmRYTmxJSE4wY21samRDYzdYRzVjYm5aaGNpQjFkR2xzY3lBOUlISmxjWFZwY21Vb0p5NHZMaTR2ZFhScGJITW5LVHRjYmx4dVpuVnVZM1JwYjI0Z1pXNWpiMlJsS0haaGJDa2dlMXh1SUNCeVpYUjFjbTRnWlc1amIyUmxWVkpKUTI5dGNHOXVaVzUwS0haaGJDa3VYRzRnSUNBZ2NtVndiR0ZqWlNndkpUUXdMMmRwTENBblFDY3BMbHh1SUNBZ0lISmxjR3hoWTJVb0x5VXpRUzluYVN3Z0p6b25LUzVjYmlBZ0lDQnlaWEJzWVdObEtDOGxNalF2Wnl3Z0p5UW5LUzVjYmlBZ0lDQnlaWEJzWVdObEtDOGxNa012WjJrc0lDY3NKeWt1WEc0Z0lDQWdjbVZ3YkdGalpTZ3ZKVEl3TDJjc0lDY3JKeWt1WEc0Z0lDQWdjbVZ3YkdGalpTZ3ZKVFZDTDJkcExDQW5XeWNwTGx4dUlDQWdJSEpsY0d4aFkyVW9MeVUxUkM5bmFTd2dKMTBuS1R0Y2JuMWNibHh1THlvcVhHNGdLaUJDZFdsc1pDQmhJRlZTVENCaWVTQmhjSEJsYm1ScGJtY2djR0Z5WVcxeklIUnZJSFJvWlNCbGJtUmNiaUFxWEc0Z0tpQkFjR0Z5WVcwZ2UzTjBjbWx1WjMwZ2RYSnNJRlJvWlNCaVlYTmxJRzltSUhSb1pTQjFjbXdnS0dVdVp5NHNJR2gwZEhBNkx5OTNkM2N1WjI5dloyeGxMbU52YlNsY2JpQXFJRUJ3WVhKaGJTQjdiMkpxWldOMGZTQmJjR0Z5WVcxelhTQlVhR1VnY0dGeVlXMXpJSFJ2SUdKbElHRndjR1Z1WkdWa1hHNGdLaUJBY21WMGRYSnVjeUI3YzNSeWFXNW5mU0JVYUdVZ1ptOXliV0YwZEdWa0lIVnliRnh1SUNvdlhHNXRiMlIxYkdVdVpYaHdiM0owY3lBOUlHWjFibU4wYVc5dUlHSjFhV3hrVlZKTUtIVnliQ3dnY0dGeVlXMXpMQ0J3WVhKaGJYTlRaWEpwWVd4cGVtVnlLU0I3WEc0Z0lDOHFaWE5zYVc1MElHNXZMWEJoY21GdExYSmxZWE56YVdkdU9qQXFMMXh1SUNCcFppQW9JWEJoY21GdGN5a2dlMXh1SUNBZ0lISmxkSFZ5YmlCMWNtdzdYRzRnSUgxY2JseHVJQ0IyWVhJZ2MyVnlhV0ZzYVhwbFpGQmhjbUZ0Y3p0Y2JpQWdhV1lnS0hCaGNtRnRjMU5sY21saGJHbDZaWElwSUh0Y2JpQWdJQ0J6WlhKcFlXeHBlbVZrVUdGeVlXMXpJRDBnY0dGeVlXMXpVMlZ5YVdGc2FYcGxjaWh3WVhKaGJYTXBPMXh1SUNCOUlHVnNjMlVnYVdZZ0tIVjBhV3h6TG1selZWSk1VMlZoY21Ob1VHRnlZVzF6S0hCaGNtRnRjeWtwSUh0Y2JpQWdJQ0J6WlhKcFlXeHBlbVZrVUdGeVlXMXpJRDBnY0dGeVlXMXpMblJ2VTNSeWFXNW5LQ2s3WEc0Z0lIMGdaV3h6WlNCN1hHNGdJQ0FnZG1GeUlIQmhjblJ6SUQwZ1cxMDdYRzVjYmlBZ0lDQjFkR2xzY3k1bWIzSkZZV05vS0hCaGNtRnRjeXdnWm5WdVkzUnBiMjRnYzJWeWFXRnNhWHBsS0haaGJDd2dhMlY1S1NCN1hHNGdJQ0FnSUNCcFppQW9kbUZzSUQwOVBTQnVkV3hzSUh4OElIUjVjR1Z2WmlCMllXd2dQVDA5SUNkMWJtUmxabWx1WldRbktTQjdYRzRnSUNBZ0lDQWdJSEpsZEhWeWJqdGNiaUFnSUNBZ0lIMWNibHh1SUNBZ0lDQWdhV1lnS0hWMGFXeHpMbWx6UVhKeVlYa29kbUZzS1NrZ2UxeHVJQ0FnSUNBZ0lDQnJaWGtnUFNCclpYa2dLeUFuVzEwbk8xeHVJQ0FnSUNBZ2ZTQmxiSE5sSUh0Y2JpQWdJQ0FnSUNBZ2RtRnNJRDBnVzNaaGJGMDdYRzRnSUNBZ0lDQjlYRzVjYmlBZ0lDQWdJSFYwYVd4ekxtWnZja1ZoWTJnb2RtRnNMQ0JtZFc1amRHbHZiaUJ3WVhKelpWWmhiSFZsS0hZcElIdGNiaUFnSUNBZ0lDQWdhV1lnS0hWMGFXeHpMbWx6UkdGMFpTaDJLU2tnZTF4dUlDQWdJQ0FnSUNBZ0lIWWdQU0IyTG5SdlNWTlBVM1J5YVc1bktDazdYRzRnSUNBZ0lDQWdJSDBnWld4elpTQnBaaUFvZFhScGJITXVhWE5QWW1wbFkzUW9kaWtwSUh0Y2JpQWdJQ0FnSUNBZ0lDQjJJRDBnU2xOUFRpNXpkSEpwYm1kcFpua29kaWs3WEc0Z0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUNBZ2NHRnlkSE11Y0hWemFDaGxibU52WkdVb2EyVjVLU0FySUNjOUp5QXJJR1Z1WTI5a1pTaDJLU2s3WEc0Z0lDQWdJQ0I5S1R0Y2JpQWdJQ0I5S1R0Y2JseHVJQ0FnSUhObGNtbGhiR2w2WldSUVlYSmhiWE1nUFNCd1lYSjBjeTVxYjJsdUtDY21KeWs3WEc0Z0lIMWNibHh1SUNCcFppQW9jMlZ5YVdGc2FYcGxaRkJoY21GdGN5a2dlMXh1SUNBZ0lIVnliQ0FyUFNBb2RYSnNMbWx1WkdWNFQyWW9KejhuS1NBOVBUMGdMVEVnUHlBblB5Y2dPaUFuSmljcElDc2djMlZ5YVdGc2FYcGxaRkJoY21GdGN6dGNiaUFnZlZ4dVhHNGdJSEpsZEhWeWJpQjFjbXc3WEc1OU8xeHVJaXdpSjNWelpTQnpkSEpwWTNRbk8xeHVYRzR2S2lwY2JpQXFJRU55WldGMFpYTWdZU0J1WlhjZ1ZWSk1JR0o1SUdOdmJXSnBibWx1WnlCMGFHVWdjM0JsWTJsbWFXVmtJRlZTVEhOY2JpQXFYRzRnS2lCQWNHRnlZVzBnZTNOMGNtbHVaMzBnWW1GelpWVlNUQ0JVYUdVZ1ltRnpaU0JWVWt4Y2JpQXFJRUJ3WVhKaGJTQjdjM1J5YVc1bmZTQnlaV3hoZEdsMlpWVlNUQ0JVYUdVZ2NtVnNZWFJwZG1VZ1ZWSk1YRzRnS2lCQWNtVjBkWEp1Y3lCN2MzUnlhVzVuZlNCVWFHVWdZMjl0WW1sdVpXUWdWVkpNWEc0Z0tpOWNibTF2WkhWc1pTNWxlSEJ2Y25SeklEMGdablZ1WTNScGIyNGdZMjl0WW1sdVpWVlNUSE1vWW1GelpWVlNUQ3dnY21Wc1lYUnBkbVZWVWt3cElIdGNiaUFnY21WMGRYSnVJSEpsYkdGMGFYWmxWVkpNWEc0Z0lDQWdQeUJpWVhObFZWSk1MbkpsY0d4aFkyVW9MMXhjTHlza0x5d2dKeWNwSUNzZ0p5OG5JQ3NnY21Wc1lYUnBkbVZWVWt3dWNtVndiR0ZqWlNndlhseGNMeXN2TENBbkp5bGNiaUFnSUNBNklHSmhjMlZWVWt3N1hHNTlPMXh1SWl3aUozVnpaU0J6ZEhKcFkzUW5PMXh1WEc1MllYSWdkWFJwYkhNZ1BTQnlaWEYxYVhKbEtDY3VMeTR1TDNWMGFXeHpKeWs3WEc1Y2JtMXZaSFZzWlM1bGVIQnZjblJ6SUQwZ0tGeHVJQ0IxZEdsc2N5NXBjMU4wWVc1a1lYSmtRbkp2ZDNObGNrVnVkaWdwSUQ5Y2JseHVJQ0F2THlCVGRHRnVaR0Z5WkNCaWNtOTNjMlZ5SUdWdWRuTWdjM1Z3Y0c5eWRDQmtiMk4xYldWdWRDNWpiMjlyYVdWY2JpQWdLR1oxYm1OMGFXOXVJSE4wWVc1a1lYSmtRbkp2ZDNObGNrVnVkaWdwSUh0Y2JpQWdJQ0J5WlhSMWNtNGdlMXh1SUNBZ0lDQWdkM0pwZEdVNklHWjFibU4wYVc5dUlIZHlhWFJsS0c1aGJXVXNJSFpoYkhWbExDQmxlSEJwY21WekxDQndZWFJvTENCa2IyMWhhVzRzSUhObFkzVnlaU2tnZTF4dUlDQWdJQ0FnSUNCMllYSWdZMjl2YTJsbElEMGdXMTA3WEc0Z0lDQWdJQ0FnSUdOdmIydHBaUzV3ZFhOb0tHNWhiV1VnS3lBblBTY2dLeUJsYm1OdlpHVlZVa2xEYjIxd2IyNWxiblFvZG1Gc2RXVXBLVHRjYmx4dUlDQWdJQ0FnSUNCcFppQW9kWFJwYkhNdWFYTk9kVzFpWlhJb1pYaHdhWEpsY3lrcElIdGNiaUFnSUNBZ0lDQWdJQ0JqYjI5cmFXVXVjSFZ6YUNnblpYaHdhWEpsY3owbklDc2dibVYzSUVSaGRHVW9aWGh3YVhKbGN5a3VkRzlIVFZSVGRISnBibWNvS1NrN1hHNGdJQ0FnSUNBZ0lIMWNibHh1SUNBZ0lDQWdJQ0JwWmlBb2RYUnBiSE11YVhOVGRISnBibWNvY0dGMGFDa3BJSHRjYmlBZ0lDQWdJQ0FnSUNCamIyOXJhV1V1Y0hWemFDZ25jR0YwYUQwbklDc2djR0YwYUNrN1hHNGdJQ0FnSUNBZ0lIMWNibHh1SUNBZ0lDQWdJQ0JwWmlBb2RYUnBiSE11YVhOVGRISnBibWNvWkc5dFlXbHVLU2tnZTF4dUlDQWdJQ0FnSUNBZ0lHTnZiMnRwWlM1d2RYTm9LQ2RrYjIxaGFXNDlKeUFySUdSdmJXRnBiaWs3WEc0Z0lDQWdJQ0FnSUgxY2JseHVJQ0FnSUNBZ0lDQnBaaUFvYzJWamRYSmxJRDA5UFNCMGNuVmxLU0I3WEc0Z0lDQWdJQ0FnSUNBZ1kyOXZhMmxsTG5CMWMyZ29KM05sWTNWeVpTY3BPMXh1SUNBZ0lDQWdJQ0I5WEc1Y2JpQWdJQ0FnSUNBZ1pHOWpkVzFsYm5RdVkyOXZhMmxsSUQwZ1kyOXZhMmxsTG1wdmFXNG9KenNnSnlrN1hHNGdJQ0FnSUNCOUxGeHVYRzRnSUNBZ0lDQnlaV0ZrT2lCbWRXNWpkR2x2YmlCeVpXRmtLRzVoYldVcElIdGNiaUFnSUNBZ0lDQWdkbUZ5SUcxaGRHTm9JRDBnWkc5amRXMWxiblF1WTI5dmEybGxMbTFoZEdOb0tHNWxkeUJTWldkRmVIQW9KeWhlZkR0Y1hGeGNjeW9wS0NjZ0t5QnVZVzFsSUNzZ0p5azlLRnRlTzEwcUtTY3BLVHRjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJQ2h0WVhSamFDQS9JR1JsWTI5a1pWVlNTVU52YlhCdmJtVnVkQ2h0WVhSamFGc3pYU2tnT2lCdWRXeHNLVHRjYmlBZ0lDQWdJSDBzWEc1Y2JpQWdJQ0FnSUhKbGJXOTJaVG9nWm5WdVkzUnBiMjRnY21WdGIzWmxLRzVoYldVcElIdGNiaUFnSUNBZ0lDQWdkR2hwY3k1M2NtbDBaU2h1WVcxbExDQW5KeXdnUkdGMFpTNXViM2NvS1NBdElEZzJOREF3TURBd0tUdGNiaUFnSUNBZ0lIMWNiaUFnSUNCOU8xeHVJQ0I5S1NncElEcGNibHh1SUNBdkx5Qk9iMjRnYzNSaGJtUmhjbVFnWW5KdmQzTmxjaUJsYm5ZZ0tIZGxZaUIzYjNKclpYSnpMQ0J5WldGamRDMXVZWFJwZG1VcElHeGhZMnNnYm1WbFpHVmtJSE4xY0hCdmNuUXVYRzRnSUNobWRXNWpkR2x2YmlCdWIyNVRkR0Z1WkdGeVpFSnliM2R6WlhKRmJuWW9LU0I3WEc0Z0lDQWdjbVYwZFhKdUlIdGNiaUFnSUNBZ0lIZHlhWFJsT2lCbWRXNWpkR2x2YmlCM2NtbDBaU2dwSUh0OUxGeHVJQ0FnSUNBZ2NtVmhaRG9nWm5WdVkzUnBiMjRnY21WaFpDZ3BJSHNnY21WMGRYSnVJRzUxYkd3N0lIMHNYRzRnSUNBZ0lDQnlaVzF2ZG1VNklHWjFibU4wYVc5dUlISmxiVzkyWlNncElIdDlYRzRnSUNBZ2ZUdGNiaUFnZlNrb0tWeHVLVHRjYmlJc0lpZDFjMlVnYzNSeWFXTjBKenRjYmx4dUx5b3FYRzRnS2lCRVpYUmxjbTFwYm1WeklIZG9aWFJvWlhJZ2RHaGxJSE53WldOcFptbGxaQ0JWVWt3Z2FYTWdZV0p6YjJ4MWRHVmNiaUFxWEc0Z0tpQkFjR0Z5WVcwZ2UzTjBjbWx1WjMwZ2RYSnNJRlJvWlNCVlVrd2dkRzhnZEdWemRGeHVJQ29nUUhKbGRIVnlibk1nZTJKdmIyeGxZVzU5SUZSeWRXVWdhV1lnZEdobElITndaV05wWm1sbFpDQlZVa3dnYVhNZ1lXSnpiMngxZEdVc0lHOTBhR1Z5ZDJselpTQm1ZV3h6WlZ4dUlDb3ZYRzV0YjJSMWJHVXVaWGh3YjNKMGN5QTlJR1oxYm1OMGFXOXVJR2x6UVdKemIyeDFkR1ZWVWt3b2RYSnNLU0I3WEc0Z0lDOHZJRUVnVlZKTUlHbHpJR052Ym5OcFpHVnlaV1FnWVdKemIyeDFkR1VnYVdZZ2FYUWdZbVZuYVc1eklIZHBkR2dnWENJOGMyTm9aVzFsUGpvdkwxd2lJRzl5SUZ3aUx5OWNJaUFvY0hKdmRHOWpiMnd0Y21Wc1lYUnBkbVVnVlZKTUtTNWNiaUFnTHk4Z1VrWkRJRE01T0RZZ1pHVm1hVzVsY3lCelkyaGxiV1VnYm1GdFpTQmhjeUJoSUhObGNYVmxibU5sSUc5bUlHTm9ZWEpoWTNSbGNuTWdZbVZuYVc1dWFXNW5JSGRwZEdnZ1lTQnNaWFIwWlhJZ1lXNWtJR1p2Ykd4dmQyVmtYRzRnSUM4dklHSjVJR0Z1ZVNCamIyMWlhVzVoZEdsdmJpQnZaaUJzWlhSMFpYSnpMQ0JrYVdkcGRITXNJSEJzZFhNc0lIQmxjbWx2WkN3Z2IzSWdhSGx3YUdWdUxseHVJQ0J5WlhSMWNtNGdMMTRvVzJFdGVsMWJZUzE2WEZ4a1hGd3JYRnd0WEZ3dVhTbzZLVDljWEM5Y1hDOHZhUzUwWlhOMEtIVnliQ2s3WEc1OU8xeHVJaXdpSjNWelpTQnpkSEpwWTNRbk8xeHVYRzUyWVhJZ2RYUnBiSE1nUFNCeVpYRjFhWEpsS0NjdUx5NHVMM1YwYVd4ekp5azdYRzVjYm0xdlpIVnNaUzVsZUhCdmNuUnpJRDBnS0Z4dUlDQjFkR2xzY3k1cGMxTjBZVzVrWVhKa1FuSnZkM05sY2tWdWRpZ3BJRDljYmx4dUlDQXZMeUJUZEdGdVpHRnlaQ0JpY205M2MyVnlJR1Z1ZG5NZ2FHRjJaU0JtZFd4c0lITjFjSEJ2Y25RZ2IyWWdkR2hsSUVGUVNYTWdibVZsWkdWa0lIUnZJSFJsYzNSY2JpQWdMeThnZDJobGRHaGxjaUIwYUdVZ2NtVnhkV1Z6ZENCVlVrd2dhWE1nYjJZZ2RHaGxJSE5oYldVZ2IzSnBaMmx1SUdGeklHTjFjbkpsYm5RZ2JHOWpZWFJwYjI0dVhHNGdJQ2htZFc1amRHbHZiaUJ6ZEdGdVpHRnlaRUp5YjNkelpYSkZibllvS1NCN1hHNGdJQ0FnZG1GeUlHMXphV1VnUFNBdktHMXphV1Y4ZEhKcFpHVnVkQ2t2YVM1MFpYTjBLRzVoZG1sbllYUnZjaTUxYzJWeVFXZGxiblFwTzF4dUlDQWdJSFpoY2lCMWNteFFZWEp6YVc1blRtOWtaU0E5SUdSdlkzVnRaVzUwTG1OeVpXRjBaVVZzWlcxbGJuUW9KMkVuS1R0Y2JpQWdJQ0IyWVhJZ2IzSnBaMmx1VlZKTU8xeHVYRzRnSUNBZ0x5b3FYRzRnSUNBZ0tpQlFZWEp6WlNCaElGVlNUQ0IwYnlCa2FYTmpiM1psY2lCcGRDZHpJR052YlhCdmJtVnVkSE5jYmlBZ0lDQXFYRzRnSUNBZ0tpQkFjR0Z5WVcwZ2UxTjBjbWx1WjMwZ2RYSnNJRlJvWlNCVlVrd2dkRzhnWW1VZ2NHRnljMlZrWEc0Z0lDQWdLaUJBY21WMGRYSnVjeUI3VDJKcVpXTjBmVnh1SUNBZ0lDb3ZYRzRnSUNBZ1puVnVZM1JwYjI0Z2NtVnpiMngyWlZWU1RDaDFjbXdwSUh0Y2JpQWdJQ0FnSUhaaGNpQm9jbVZtSUQwZ2RYSnNPMXh1WEc0Z0lDQWdJQ0JwWmlBb2JYTnBaU2tnZTF4dUlDQWdJQ0FnSUNBdkx5QkpSU0J1WldWa2N5QmhkSFJ5YVdKMWRHVWdjMlYwSUhSM2FXTmxJSFJ2SUc1dmNtMWhiR2w2WlNCd2NtOXdaWEowYVdWelhHNGdJQ0FnSUNBZ0lIVnliRkJoY25OcGJtZE9iMlJsTG5ObGRFRjBkSEpwWW5WMFpTZ25hSEpsWmljc0lHaHlaV1lwTzF4dUlDQWdJQ0FnSUNCb2NtVm1JRDBnZFhKc1VHRnljMmx1WjA1dlpHVXVhSEpsWmp0Y2JpQWdJQ0FnSUgxY2JseHVJQ0FnSUNBZ2RYSnNVR0Z5YzJsdVowNXZaR1V1YzJWMFFYUjBjbWxpZFhSbEtDZG9jbVZtSnl3Z2FISmxaaWs3WEc1Y2JpQWdJQ0FnSUM4dklIVnliRkJoY25OcGJtZE9iMlJsSUhCeWIzWnBaR1Z6SUhSb1pTQlZjbXhWZEdsc2N5QnBiblJsY21aaFkyVWdMU0JvZEhSd09pOHZkWEpzTG5Od1pXTXVkMmhoZEhkbkxtOXlaeThqZFhKc2RYUnBiSE5jYmlBZ0lDQWdJSEpsZEhWeWJpQjdYRzRnSUNBZ0lDQWdJR2h5WldZNklIVnliRkJoY25OcGJtZE9iMlJsTG1oeVpXWXNYRzRnSUNBZ0lDQWdJSEJ5YjNSdlkyOXNPaUIxY214UVlYSnphVzVuVG05a1pTNXdjbTkwYjJOdmJDQS9JSFZ5YkZCaGNuTnBibWRPYjJSbExuQnliM1J2WTI5c0xuSmxjR3hoWTJVb0x6b2tMeXdnSnljcElEb2dKeWNzWEc0Z0lDQWdJQ0FnSUdodmMzUTZJSFZ5YkZCaGNuTnBibWRPYjJSbExtaHZjM1FzWEc0Z0lDQWdJQ0FnSUhObFlYSmphRG9nZFhKc1VHRnljMmx1WjA1dlpHVXVjMlZoY21Ob0lEOGdkWEpzVUdGeWMybHVaMDV2WkdVdWMyVmhjbU5vTG5KbGNHeGhZMlVvTDE1Y1hEOHZMQ0FuSnlrZ09pQW5KeXhjYmlBZ0lDQWdJQ0FnYUdGemFEb2dkWEpzVUdGeWMybHVaMDV2WkdVdWFHRnphQ0EvSUhWeWJGQmhjbk5wYm1kT2IyUmxMbWhoYzJndWNtVndiR0ZqWlNndlhpTXZMQ0FuSnlrZ09pQW5KeXhjYmlBZ0lDQWdJQ0FnYUc5emRHNWhiV1U2SUhWeWJGQmhjbk5wYm1kT2IyUmxMbWh2YzNSdVlXMWxMRnh1SUNBZ0lDQWdJQ0J3YjNKME9pQjFjbXhRWVhKemFXNW5UbTlrWlM1d2IzSjBMRnh1SUNBZ0lDQWdJQ0J3WVhSb2JtRnRaVG9nS0hWeWJGQmhjbk5wYm1kT2IyUmxMbkJoZEdodVlXMWxMbU5vWVhKQmRDZ3dLU0E5UFQwZ0p5OG5LU0EvWEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCMWNteFFZWEp6YVc1blRtOWtaUzV3WVhSb2JtRnRaU0E2WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBbkx5Y2dLeUIxY214UVlYSnphVzVuVG05a1pTNXdZWFJvYm1GdFpWeHVJQ0FnSUNBZ2ZUdGNiaUFnSUNCOVhHNWNiaUFnSUNCdmNtbG5hVzVWVWt3Z1BTQnlaWE52YkhabFZWSk1LSGRwYm1SdmR5NXNiMk5oZEdsdmJpNW9jbVZtS1R0Y2JseHVJQ0FnSUM4cUtseHVJQ0FnSUNvZ1JHVjBaWEp0YVc1bElHbG1JR0VnVlZKTUlITm9ZWEpsY3lCMGFHVWdjMkZ0WlNCdmNtbG5hVzRnWVhNZ2RHaGxJR04xY25KbGJuUWdiRzlqWVhScGIyNWNiaUFnSUNBcVhHNGdJQ0FnS2lCQWNHRnlZVzBnZTFOMGNtbHVaMzBnY21WeGRXVnpkRlZTVENCVWFHVWdWVkpNSUhSdklIUmxjM1JjYmlBZ0lDQXFJRUJ5WlhSMWNtNXpJSHRpYjI5c1pXRnVmU0JVY25WbElHbG1JRlZTVENCemFHRnlaWE1nZEdobElITmhiV1VnYjNKcFoybHVMQ0J2ZEdobGNuZHBjMlVnWm1Gc2MyVmNiaUFnSUNBcUwxeHVJQ0FnSUhKbGRIVnliaUJtZFc1amRHbHZiaUJwYzFWU1RGTmhiV1ZQY21sbmFXNG9jbVZ4ZFdWemRGVlNUQ2tnZTF4dUlDQWdJQ0FnZG1GeUlIQmhjbk5sWkNBOUlDaDFkR2xzY3k1cGMxTjBjbWx1WnloeVpYRjFaWE4wVlZKTUtTa2dQeUJ5WlhOdmJIWmxWVkpNS0hKbGNYVmxjM1JWVWt3cElEb2djbVZ4ZFdWemRGVlNURHRjYmlBZ0lDQWdJSEpsZEhWeWJpQW9jR0Z5YzJWa0xuQnliM1J2WTI5c0lEMDlQU0J2Y21sbmFXNVZVa3d1Y0hKdmRHOWpiMndnSmlaY2JpQWdJQ0FnSUNBZ0lDQWdJSEJoY25ObFpDNW9iM04wSUQwOVBTQnZjbWxuYVc1VlVrd3VhRzl6ZENrN1hHNGdJQ0FnZlR0Y2JpQWdmU2tvS1NBNlhHNWNiaUFnTHk4Z1RtOXVJSE4wWVc1a1lYSmtJR0p5YjNkelpYSWdaVzUyY3lBb2QyVmlJSGR2Y210bGNuTXNJSEpsWVdOMExXNWhkR2wyWlNrZ2JHRmpheUJ1WldWa1pXUWdjM1Z3Y0c5eWRDNWNiaUFnS0daMWJtTjBhVzl1SUc1dmJsTjBZVzVrWVhKa1FuSnZkM05sY2tWdWRpZ3BJSHRjYmlBZ0lDQnlaWFIxY200Z1puVnVZM1JwYjI0Z2FYTlZVa3hUWVcxbFQzSnBaMmx1S0NrZ2UxeHVJQ0FnSUNBZ2NtVjBkWEp1SUhSeWRXVTdYRzRnSUNBZ2ZUdGNiaUFnZlNrb0tWeHVLVHRjYmlJc0lpZDFjMlVnYzNSeWFXTjBKenRjYmx4dWRtRnlJSFYwYVd4eklEMGdjbVZ4ZFdseVpTZ25MaTR2ZFhScGJITW5LVHRjYmx4dWJXOWtkV3hsTG1WNGNHOXlkSE1nUFNCbWRXNWpkR2x2YmlCdWIzSnRZV3hwZW1WSVpXRmtaWEpPWVcxbEtHaGxZV1JsY25Nc0lHNXZjbTFoYkdsNlpXUk9ZVzFsS1NCN1hHNGdJSFYwYVd4ekxtWnZja1ZoWTJnb2FHVmhaR1Z5Y3l3Z1puVnVZM1JwYjI0Z2NISnZZMlZ6YzBobFlXUmxjaWgyWVd4MVpTd2dibUZ0WlNrZ2UxeHVJQ0FnSUdsbUlDaHVZVzFsSUNFOVBTQnViM0p0WVd4cGVtVmtUbUZ0WlNBbUppQnVZVzFsTG5SdlZYQndaWEpEWVhObEtDa2dQVDA5SUc1dmNtMWhiR2w2WldST1lXMWxMblJ2VlhCd1pYSkRZWE5sS0NrcElIdGNiaUFnSUNBZ0lHaGxZV1JsY25OYmJtOXliV0ZzYVhwbFpFNWhiV1ZkSUQwZ2RtRnNkV1U3WEc0Z0lDQWdJQ0JrWld4bGRHVWdhR1ZoWkdWeWMxdHVZVzFsWFR0Y2JpQWdJQ0I5WEc0Z0lIMHBPMXh1ZlR0Y2JpSXNJaWQxYzJVZ2MzUnlhV04wSnp0Y2JseHVkbUZ5SUhWMGFXeHpJRDBnY21WeGRXbHlaU2duTGk4dUxpOTFkR2xzY3ljcE8xeHVYRzR2THlCSVpXRmtaWEp6SUhkb2IzTmxJR1IxY0d4cFkyRjBaWE1nWVhKbElHbG5ibTl5WldRZ1lua2dibTlrWlZ4dUx5OGdZeTVtTGlCb2RIUndjem92TDI1dlpHVnFjeTV2Y21jdllYQnBMMmgwZEhBdWFIUnRiQ05vZEhSd1gyMWxjM05oWjJWZmFHVmhaR1Z5YzF4dWRtRnlJR2xuYm05eVpVUjFjR3hwWTJGMFpVOW1JRDBnVzF4dUlDQW5ZV2RsSnl3Z0oyRjFkR2h2Y21sNllYUnBiMjRuTENBblkyOXVkR1Z1ZEMxc1pXNW5kR2duTENBblkyOXVkR1Z1ZEMxMGVYQmxKeXdnSjJWMFlXY25MRnh1SUNBblpYaHdhWEpsY3ljc0lDZG1jbTl0Snl3Z0oyaHZjM1FuTENBbmFXWXRiVzlrYVdacFpXUXRjMmx1WTJVbkxDQW5hV1l0ZFc1dGIyUnBabWxsWkMxemFXNWpaU2NzWEc0Z0lDZHNZWE4wTFcxdlpHbG1hV1ZrSnl3Z0oyeHZZMkYwYVc5dUp5d2dKMjFoZUMxbWIzSjNZWEprY3ljc0lDZHdjbTk0ZVMxaGRYUm9iM0pwZW1GMGFXOXVKeXhjYmlBZ0ozSmxabVZ5WlhJbkxDQW5jbVYwY25rdFlXWjBaWEluTENBbmRYTmxjaTFoWjJWdWRDZGNibDA3WEc1Y2JpOHFLbHh1SUNvZ1VHRnljMlVnYUdWaFpHVnljeUJwYm5SdklHRnVJRzlpYW1WamRGeHVJQ3BjYmlBcUlHQmdZRnh1SUNvZ1JHRjBaVG9nVjJWa0xDQXlOeUJCZFdjZ01qQXhOQ0F3T0RvMU9EbzBPU0JIVFZSY2JpQXFJRU52Ym5SbGJuUXRWSGx3WlRvZ1lYQndiR2xqWVhScGIyNHZhbk52Ymx4dUlDb2dRMjl1Ym1WamRHbHZiam9nYTJWbGNDMWhiR2wyWlZ4dUlDb2dWSEpoYm5ObVpYSXRSVzVqYjJScGJtYzZJR05vZFc1clpXUmNiaUFxSUdCZ1lGeHVJQ3BjYmlBcUlFQndZWEpoYlNCN1UzUnlhVzVuZlNCb1pXRmtaWEp6SUVobFlXUmxjbk1nYm1WbFpHbHVaeUIwYnlCaVpTQndZWEp6WldSY2JpQXFJRUJ5WlhSMWNtNXpJSHRQWW1wbFkzUjlJRWhsWVdSbGNuTWdjR0Z5YzJWa0lHbHVkRzhnWVc0Z2IySnFaV04wWEc0Z0tpOWNibTF2WkhWc1pTNWxlSEJ2Y25SeklEMGdablZ1WTNScGIyNGdjR0Z5YzJWSVpXRmtaWEp6S0dobFlXUmxjbk1wSUh0Y2JpQWdkbUZ5SUhCaGNuTmxaQ0E5SUh0OU8xeHVJQ0IyWVhJZ2EyVjVPMXh1SUNCMllYSWdkbUZzTzF4dUlDQjJZWElnYVR0Y2JseHVJQ0JwWmlBb0lXaGxZV1JsY25NcElIc2djbVYwZFhKdUlIQmhjbk5sWkRzZ2ZWeHVYRzRnSUhWMGFXeHpMbVp2Y2tWaFkyZ29hR1ZoWkdWeWN5NXpjR3hwZENnblhGeHVKeWtzSUdaMWJtTjBhVzl1SUhCaGNuTmxjaWhzYVc1bEtTQjdYRzRnSUNBZ2FTQTlJR3hwYm1VdWFXNWtaWGhQWmlnbk9pY3BPMXh1SUNBZ0lHdGxlU0E5SUhWMGFXeHpMblJ5YVcwb2JHbHVaUzV6ZFdKemRISW9NQ3dnYVNrcExuUnZURzkzWlhKRFlYTmxLQ2s3WEc0Z0lDQWdkbUZzSUQwZ2RYUnBiSE11ZEhKcGJTaHNhVzVsTG5OMVluTjBjaWhwSUNzZ01Ta3BPMXh1WEc0Z0lDQWdhV1lnS0d0bGVTa2dlMXh1SUNBZ0lDQWdhV1lnS0hCaGNuTmxaRnRyWlhsZElDWW1JR2xuYm05eVpVUjFjR3hwWTJGMFpVOW1MbWx1WkdWNFQyWW9hMlY1S1NBK1BTQXdLU0I3WEc0Z0lDQWdJQ0FnSUhKbGRIVnlianRjYmlBZ0lDQWdJSDFjYmlBZ0lDQWdJR2xtSUNoclpYa2dQVDA5SUNkelpYUXRZMjl2YTJsbEp5a2dlMXh1SUNBZ0lDQWdJQ0J3WVhKelpXUmJhMlY1WFNBOUlDaHdZWEp6WldSYmEyVjVYU0EvSUhCaGNuTmxaRnRyWlhsZElEb2dXMTBwTG1OdmJtTmhkQ2hiZG1Gc1hTazdYRzRnSUNBZ0lDQjlJR1ZzYzJVZ2UxeHVJQ0FnSUNBZ0lDQndZWEp6WldSYmEyVjVYU0E5SUhCaGNuTmxaRnRyWlhsZElEOGdjR0Z5YzJWa1cydGxlVjBnS3lBbkxDQW5JQ3NnZG1Gc0lEb2dkbUZzTzF4dUlDQWdJQ0FnZlZ4dUlDQWdJSDFjYmlBZ2ZTazdYRzVjYmlBZ2NtVjBkWEp1SUhCaGNuTmxaRHRjYm4wN1hHNGlMQ0luZFhObElITjBjbWxqZENjN1hHNWNiaThxS2x4dUlDb2dVM2x1ZEdGamRHbGpJSE4xWjJGeUlHWnZjaUJwYm5admEybHVaeUJoSUdaMWJtTjBhVzl1SUdGdVpDQmxlSEJoYm1ScGJtY2dZVzRnWVhKeVlYa2dabTl5SUdGeVozVnRaVzUwY3k1Y2JpQXFYRzRnS2lCRGIyMXRiMjRnZFhObElHTmhjMlVnZDI5MWJHUWdZbVVnZEc4Z2RYTmxJR0JHZFc1amRHbHZiaTV3Y205MGIzUjVjR1V1WVhCd2JIbGdMbHh1SUNwY2JpQXFJQ0JnWUdCcWMxeHVJQ29nSUdaMWJtTjBhVzl1SUdZb2VDd2dlU3dnZWlrZ2UzMWNiaUFxSUNCMllYSWdZWEpuY3lBOUlGc3hMQ0F5TENBelhUdGNiaUFxSUNCbUxtRndjR3g1S0c1MWJHd3NJR0Z5WjNNcE8xeHVJQ29nSUdCZ1lGeHVJQ3BjYmlBcUlGZHBkR2dnWUhOd2NtVmhaR0FnZEdocGN5QmxlR0Z0Y0d4bElHTmhiaUJpWlNCeVpTMTNjbWwwZEdWdUxseHVJQ3BjYmlBcUlDQmdZR0JxYzF4dUlDb2dJSE53Y21WaFpDaG1kVzVqZEdsdmJpaDRMQ0I1TENCNktTQjdmU2tvV3pFc0lESXNJRE5kS1R0Y2JpQXFJQ0JnWUdCY2JpQXFYRzRnS2lCQWNHRnlZVzBnZTBaMWJtTjBhVzl1ZlNCallXeHNZbUZqYTF4dUlDb2dRSEpsZEhWeWJuTWdlMFoxYm1OMGFXOXVmVnh1SUNvdlhHNXRiMlIxYkdVdVpYaHdiM0owY3lBOUlHWjFibU4wYVc5dUlITndjbVZoWkNoallXeHNZbUZqYXlrZ2UxeHVJQ0J5WlhSMWNtNGdablZ1WTNScGIyNGdkM0poY0NoaGNuSXBJSHRjYmlBZ0lDQnlaWFIxY200Z1kyRnNiR0poWTJzdVlYQndiSGtvYm5Wc2JDd2dZWEp5S1R0Y2JpQWdmVHRjYm4wN1hHNGlMQ0luZFhObElITjBjbWxqZENjN1hHNWNiblpoY2lCaWFXNWtJRDBnY21WeGRXbHlaU2duTGk5b1pXeHdaWEp6TDJKcGJtUW5LVHRjYm5aaGNpQnBjMEoxWm1abGNpQTlJSEpsY1hWcGNtVW9KMmx6TFdKMVptWmxjaWNwTzF4dVhHNHZLbWRzYjJKaGJDQjBiMU4wY21sdVp6cDBjblZsS2k5Y2JseHVMeThnZFhScGJITWdhWE1nWVNCc2FXSnlZWEo1SUc5bUlHZGxibVZ5YVdNZ2FHVnNjR1Z5SUdaMWJtTjBhVzl1Y3lCdWIyNHRjM0JsWTJsbWFXTWdkRzhnWVhocGIzTmNibHh1ZG1GeUlIUnZVM1J5YVc1bklEMGdUMkpxWldOMExuQnliM1J2ZEhsd1pTNTBiMU4wY21sdVp6dGNibHh1THlvcVhHNGdLaUJFWlhSbGNtMXBibVVnYVdZZ1lTQjJZV3gxWlNCcGN5QmhiaUJCY25KaGVWeHVJQ3BjYmlBcUlFQndZWEpoYlNCN1QySnFaV04wZlNCMllXd2dWR2hsSUhaaGJIVmxJSFJ2SUhSbGMzUmNiaUFxSUVCeVpYUjFjbTV6SUh0aWIyOXNaV0Z1ZlNCVWNuVmxJR2xtSUhaaGJIVmxJR2x6SUdGdUlFRnljbUY1TENCdmRHaGxjbmRwYzJVZ1ptRnNjMlZjYmlBcUwxeHVablZ1WTNScGIyNGdhWE5CY25KaGVTaDJZV3dwSUh0Y2JpQWdjbVYwZFhKdUlIUnZVM1J5YVc1bkxtTmhiR3dvZG1Gc0tTQTlQVDBnSjF0dlltcGxZM1FnUVhKeVlYbGRKenRjYm4xY2JseHVMeW9xWEc0Z0tpQkVaWFJsY20xcGJtVWdhV1lnWVNCMllXeDFaU0JwY3lCaGJpQkJjbkpoZVVKMVptWmxjbHh1SUNwY2JpQXFJRUJ3WVhKaGJTQjdUMkpxWldOMGZTQjJZV3dnVkdobElIWmhiSFZsSUhSdklIUmxjM1JjYmlBcUlFQnlaWFIxY201eklIdGliMjlzWldGdWZTQlVjblZsSUdsbUlIWmhiSFZsSUdseklHRnVJRUZ5Y21GNVFuVm1abVZ5TENCdmRHaGxjbmRwYzJVZ1ptRnNjMlZjYmlBcUwxeHVablZ1WTNScGIyNGdhWE5CY25KaGVVSjFabVpsY2loMllXd3BJSHRjYmlBZ2NtVjBkWEp1SUhSdlUzUnlhVzVuTG1OaGJHd29kbUZzS1NBOVBUMGdKMXR2WW1wbFkzUWdRWEp5WVhsQ2RXWm1aWEpkSnp0Y2JuMWNibHh1THlvcVhHNGdLaUJFWlhSbGNtMXBibVVnYVdZZ1lTQjJZV3gxWlNCcGN5QmhJRVp2Y20xRVlYUmhYRzRnS2x4dUlDb2dRSEJoY21GdElIdFBZbXBsWTNSOUlIWmhiQ0JVYUdVZ2RtRnNkV1VnZEc4Z2RHVnpkRnh1SUNvZ1FISmxkSFZ5Ym5NZ2UySnZiMnhsWVc1OUlGUnlkV1VnYVdZZ2RtRnNkV1VnYVhNZ1lXNGdSbTl5YlVSaGRHRXNJRzkwYUdWeWQybHpaU0JtWVd4elpWeHVJQ292WEc1bWRXNWpkR2x2YmlCcGMwWnZjbTFFWVhSaEtIWmhiQ2tnZTF4dUlDQnlaWFIxY200Z0tIUjVjR1Z2WmlCR2IzSnRSR0YwWVNBaFBUMGdKM1Z1WkdWbWFXNWxaQ2NwSUNZbUlDaDJZV3dnYVc1emRHRnVZMlZ2WmlCR2IzSnRSR0YwWVNrN1hHNTlYRzVjYmk4cUtseHVJQ29nUkdWMFpYSnRhVzVsSUdsbUlHRWdkbUZzZFdVZ2FYTWdZU0IyYVdWM0lHOXVJR0Z1SUVGeWNtRjVRblZtWm1WeVhHNGdLbHh1SUNvZ1FIQmhjbUZ0SUh0UFltcGxZM1I5SUhaaGJDQlVhR1VnZG1Gc2RXVWdkRzhnZEdWemRGeHVJQ29nUUhKbGRIVnlibk1nZTJKdmIyeGxZVzU5SUZSeWRXVWdhV1lnZG1Gc2RXVWdhWE1nWVNCMmFXVjNJRzl1SUdGdUlFRnljbUY1UW5WbVptVnlMQ0J2ZEdobGNuZHBjMlVnWm1Gc2MyVmNiaUFxTDF4dVpuVnVZM1JwYjI0Z2FYTkJjbkpoZVVKMVptWmxjbFpwWlhjb2RtRnNLU0I3WEc0Z0lIWmhjaUJ5WlhOMWJIUTdYRzRnSUdsbUlDZ29kSGx3Wlc5bUlFRnljbUY1UW5WbVptVnlJQ0U5UFNBbmRXNWtaV1pwYm1Wa0p5a2dKaVlnS0VGeWNtRjVRblZtWm1WeUxtbHpWbWxsZHlrcElIdGNiaUFnSUNCeVpYTjFiSFFnUFNCQmNuSmhlVUoxWm1abGNpNXBjMVpwWlhjb2RtRnNLVHRjYmlBZ2ZTQmxiSE5sSUh0Y2JpQWdJQ0J5WlhOMWJIUWdQU0FvZG1Gc0tTQW1KaUFvZG1Gc0xtSjFabVpsY2lrZ0ppWWdLSFpoYkM1aWRXWm1aWElnYVc1emRHRnVZMlZ2WmlCQmNuSmhlVUoxWm1abGNpazdYRzRnSUgxY2JpQWdjbVYwZFhKdUlISmxjM1ZzZER0Y2JuMWNibHh1THlvcVhHNGdLaUJFWlhSbGNtMXBibVVnYVdZZ1lTQjJZV3gxWlNCcGN5QmhJRk4wY21sdVoxeHVJQ3BjYmlBcUlFQndZWEpoYlNCN1QySnFaV04wZlNCMllXd2dWR2hsSUhaaGJIVmxJSFJ2SUhSbGMzUmNiaUFxSUVCeVpYUjFjbTV6SUh0aWIyOXNaV0Z1ZlNCVWNuVmxJR2xtSUhaaGJIVmxJR2x6SUdFZ1UzUnlhVzVuTENCdmRHaGxjbmRwYzJVZ1ptRnNjMlZjYmlBcUwxeHVablZ1WTNScGIyNGdhWE5UZEhKcGJtY29kbUZzS1NCN1hHNGdJSEpsZEhWeWJpQjBlWEJsYjJZZ2RtRnNJRDA5UFNBbmMzUnlhVzVuSnp0Y2JuMWNibHh1THlvcVhHNGdLaUJFWlhSbGNtMXBibVVnYVdZZ1lTQjJZV3gxWlNCcGN5QmhJRTUxYldKbGNseHVJQ3BjYmlBcUlFQndZWEpoYlNCN1QySnFaV04wZlNCMllXd2dWR2hsSUhaaGJIVmxJSFJ2SUhSbGMzUmNiaUFxSUVCeVpYUjFjbTV6SUh0aWIyOXNaV0Z1ZlNCVWNuVmxJR2xtSUhaaGJIVmxJR2x6SUdFZ1RuVnRZbVZ5TENCdmRHaGxjbmRwYzJVZ1ptRnNjMlZjYmlBcUwxeHVablZ1WTNScGIyNGdhWE5PZFcxaVpYSW9kbUZzS1NCN1hHNGdJSEpsZEhWeWJpQjBlWEJsYjJZZ2RtRnNJRDA5UFNBbmJuVnRZbVZ5Snp0Y2JuMWNibHh1THlvcVhHNGdLaUJFWlhSbGNtMXBibVVnYVdZZ1lTQjJZV3gxWlNCcGN5QjFibVJsWm1sdVpXUmNiaUFxWEc0Z0tpQkFjR0Z5WVcwZ2UwOWlhbVZqZEgwZ2RtRnNJRlJvWlNCMllXeDFaU0IwYnlCMFpYTjBYRzRnS2lCQWNtVjBkWEp1Y3lCN1ltOXZiR1ZoYm4wZ1ZISjFaU0JwWmlCMGFHVWdkbUZzZFdVZ2FYTWdkVzVrWldacGJtVmtMQ0J2ZEdobGNuZHBjMlVnWm1Gc2MyVmNiaUFxTDF4dVpuVnVZM1JwYjI0Z2FYTlZibVJsWm1sdVpXUW9kbUZzS1NCN1hHNGdJSEpsZEhWeWJpQjBlWEJsYjJZZ2RtRnNJRDA5UFNBbmRXNWtaV1pwYm1Wa0p6dGNibjFjYmx4dUx5b3FYRzRnS2lCRVpYUmxjbTFwYm1VZ2FXWWdZU0IyWVd4MVpTQnBjeUJoYmlCUFltcGxZM1JjYmlBcVhHNGdLaUJBY0dGeVlXMGdlMDlpYW1WamRIMGdkbUZzSUZSb1pTQjJZV3gxWlNCMGJ5QjBaWE4wWEc0Z0tpQkFjbVYwZFhKdWN5QjdZbTl2YkdWaGJuMGdWSEoxWlNCcFppQjJZV3gxWlNCcGN5QmhiaUJQWW1wbFkzUXNJRzkwYUdWeWQybHpaU0JtWVd4elpWeHVJQ292WEc1bWRXNWpkR2x2YmlCcGMwOWlhbVZqZENoMllXd3BJSHRjYmlBZ2NtVjBkWEp1SUhaaGJDQWhQVDBnYm5Wc2JDQW1KaUIwZVhCbGIyWWdkbUZzSUQwOVBTQW5iMkpxWldOMEp6dGNibjFjYmx4dUx5b3FYRzRnS2lCRVpYUmxjbTFwYm1VZ2FXWWdZU0IyWVd4MVpTQnBjeUJoSUVSaGRHVmNiaUFxWEc0Z0tpQkFjR0Z5WVcwZ2UwOWlhbVZqZEgwZ2RtRnNJRlJvWlNCMllXeDFaU0IwYnlCMFpYTjBYRzRnS2lCQWNtVjBkWEp1Y3lCN1ltOXZiR1ZoYm4wZ1ZISjFaU0JwWmlCMllXeDFaU0JwY3lCaElFUmhkR1VzSUc5MGFHVnlkMmx6WlNCbVlXeHpaVnh1SUNvdlhHNW1kVzVqZEdsdmJpQnBjMFJoZEdVb2RtRnNLU0I3WEc0Z0lISmxkSFZ5YmlCMGIxTjBjbWx1Wnk1allXeHNLSFpoYkNrZ1BUMDlJQ2RiYjJKcVpXTjBJRVJoZEdWZEp6dGNibjFjYmx4dUx5b3FYRzRnS2lCRVpYUmxjbTFwYm1VZ2FXWWdZU0IyWVd4MVpTQnBjeUJoSUVacGJHVmNiaUFxWEc0Z0tpQkFjR0Z5WVcwZ2UwOWlhbVZqZEgwZ2RtRnNJRlJvWlNCMllXeDFaU0IwYnlCMFpYTjBYRzRnS2lCQWNtVjBkWEp1Y3lCN1ltOXZiR1ZoYm4wZ1ZISjFaU0JwWmlCMllXeDFaU0JwY3lCaElFWnBiR1VzSUc5MGFHVnlkMmx6WlNCbVlXeHpaVnh1SUNvdlhHNW1kVzVqZEdsdmJpQnBjMFpwYkdVb2RtRnNLU0I3WEc0Z0lISmxkSFZ5YmlCMGIxTjBjbWx1Wnk1allXeHNLSFpoYkNrZ1BUMDlJQ2RiYjJKcVpXTjBJRVpwYkdWZEp6dGNibjFjYmx4dUx5b3FYRzRnS2lCRVpYUmxjbTFwYm1VZ2FXWWdZU0IyWVd4MVpTQnBjeUJoSUVKc2IySmNiaUFxWEc0Z0tpQkFjR0Z5WVcwZ2UwOWlhbVZqZEgwZ2RtRnNJRlJvWlNCMllXeDFaU0IwYnlCMFpYTjBYRzRnS2lCQWNtVjBkWEp1Y3lCN1ltOXZiR1ZoYm4wZ1ZISjFaU0JwWmlCMllXeDFaU0JwY3lCaElFSnNiMklzSUc5MGFHVnlkMmx6WlNCbVlXeHpaVnh1SUNvdlhHNW1kVzVqZEdsdmJpQnBjMEpzYjJJb2RtRnNLU0I3WEc0Z0lISmxkSFZ5YmlCMGIxTjBjbWx1Wnk1allXeHNLSFpoYkNrZ1BUMDlJQ2RiYjJKcVpXTjBJRUpzYjJKZEp6dGNibjFjYmx4dUx5b3FYRzRnS2lCRVpYUmxjbTFwYm1VZ2FXWWdZU0IyWVd4MVpTQnBjeUJoSUVaMWJtTjBhVzl1WEc0Z0tseHVJQ29nUUhCaGNtRnRJSHRQWW1wbFkzUjlJSFpoYkNCVWFHVWdkbUZzZFdVZ2RHOGdkR1Z6ZEZ4dUlDb2dRSEpsZEhWeWJuTWdlMkp2YjJ4bFlXNTlJRlJ5ZFdVZ2FXWWdkbUZzZFdVZ2FYTWdZU0JHZFc1amRHbHZiaXdnYjNSb1pYSjNhWE5sSUdaaGJITmxYRzRnS2k5Y2JtWjFibU4wYVc5dUlHbHpSblZ1WTNScGIyNG9kbUZzS1NCN1hHNGdJSEpsZEhWeWJpQjBiMU4wY21sdVp5NWpZV3hzS0haaGJDa2dQVDA5SUNkYmIySnFaV04wSUVaMWJtTjBhVzl1WFNjN1hHNTlYRzVjYmk4cUtseHVJQ29nUkdWMFpYSnRhVzVsSUdsbUlHRWdkbUZzZFdVZ2FYTWdZU0JUZEhKbFlXMWNiaUFxWEc0Z0tpQkFjR0Z5WVcwZ2UwOWlhbVZqZEgwZ2RtRnNJRlJvWlNCMllXeDFaU0IwYnlCMFpYTjBYRzRnS2lCQWNtVjBkWEp1Y3lCN1ltOXZiR1ZoYm4wZ1ZISjFaU0JwWmlCMllXeDFaU0JwY3lCaElGTjBjbVZoYlN3Z2IzUm9aWEozYVhObElHWmhiSE5sWEc0Z0tpOWNibVoxYm1OMGFXOXVJR2x6VTNSeVpXRnRLSFpoYkNrZ2UxeHVJQ0J5WlhSMWNtNGdhWE5QWW1wbFkzUW9kbUZzS1NBbUppQnBjMFoxYm1OMGFXOXVLSFpoYkM1d2FYQmxLVHRjYm4xY2JseHVMeW9xWEc0Z0tpQkVaWFJsY20xcGJtVWdhV1lnWVNCMllXeDFaU0JwY3lCaElGVlNURk5sWVhKamFGQmhjbUZ0Y3lCdlltcGxZM1JjYmlBcVhHNGdLaUJBY0dGeVlXMGdlMDlpYW1WamRIMGdkbUZzSUZSb1pTQjJZV3gxWlNCMGJ5QjBaWE4wWEc0Z0tpQkFjbVYwZFhKdWN5QjdZbTl2YkdWaGJuMGdWSEoxWlNCcFppQjJZV3gxWlNCcGN5QmhJRlZTVEZObFlYSmphRkJoY21GdGN5QnZZbXBsWTNRc0lHOTBhR1Z5ZDJselpTQm1ZV3h6WlZ4dUlDb3ZYRzVtZFc1amRHbHZiaUJwYzFWU1RGTmxZWEpqYUZCaGNtRnRjeWgyWVd3cElIdGNiaUFnY21WMGRYSnVJSFI1Y0dWdlppQlZVa3hUWldGeVkyaFFZWEpoYlhNZ0lUMDlJQ2QxYm1SbFptbHVaV1FuSUNZbUlIWmhiQ0JwYm5OMFlXNWpaVzltSUZWU1RGTmxZWEpqYUZCaGNtRnRjenRjYm4xY2JseHVMeW9xWEc0Z0tpQlVjbWx0SUdWNFkyVnpjeUIzYUdsMFpYTndZV05sSUc5bVppQjBhR1VnWW1WbmFXNXVhVzVuSUdGdVpDQmxibVFnYjJZZ1lTQnpkSEpwYm1kY2JpQXFYRzRnS2lCQWNHRnlZVzBnZTFOMGNtbHVaMzBnYzNSeUlGUm9aU0JUZEhKcGJtY2dkRzhnZEhKcGJWeHVJQ29nUUhKbGRIVnlibk1nZTFOMGNtbHVaMzBnVkdobElGTjBjbWx1WnlCbWNtVmxaQ0J2WmlCbGVHTmxjM01nZDJocGRHVnpjR0ZqWlZ4dUlDb3ZYRzVtZFc1amRHbHZiaUIwY21sdEtITjBjaWtnZTF4dUlDQnlaWFIxY200Z2MzUnlMbkpsY0d4aFkyVW9MMTVjWEhNcUx5d2dKeWNwTG5KbGNHeGhZMlVvTDF4Y2N5b2tMeXdnSnljcE8xeHVmVnh1WEc0dktpcGNiaUFxSUVSbGRHVnliV2x1WlNCcFppQjNaU2R5WlNCeWRXNXVhVzVuSUdsdUlHRWdjM1JoYm1SaGNtUWdZbkp2ZDNObGNpQmxiblpwY205dWJXVnVkRnh1SUNwY2JpQXFJRlJvYVhNZ1lXeHNiM2R6SUdGNGFXOXpJSFJ2SUhKMWJpQnBiaUJoSUhkbFlpQjNiM0pyWlhJc0lHRnVaQ0J5WldGamRDMXVZWFJwZG1VdVhHNGdLaUJDYjNSb0lHVnVkbWx5YjI1dFpXNTBjeUJ6ZFhCd2IzSjBJRmhOVEVoMGRIQlNaWEYxWlhOMExDQmlkWFFnYm05MElHWjFiR3g1SUhOMFlXNWtZWEprSUdkc2IySmhiSE11WEc0Z0tseHVJQ29nZDJWaUlIZHZjbXRsY25NNlhHNGdLaUFnZEhsd1pXOW1JSGRwYm1SdmR5QXRQaUIxYm1SbFptbHVaV1JjYmlBcUlDQjBlWEJsYjJZZ1pHOWpkVzFsYm5RZ0xUNGdkVzVrWldacGJtVmtYRzRnS2x4dUlDb2djbVZoWTNRdGJtRjBhWFpsT2x4dUlDb2dJRzVoZG1sbllYUnZjaTV3Y205a2RXTjBJQzArSUNkU1pXRmpkRTVoZEdsMlpTZGNiaUFxTDF4dVpuVnVZM1JwYjI0Z2FYTlRkR0Z1WkdGeVpFSnliM2R6WlhKRmJuWW9LU0I3WEc0Z0lHbG1JQ2gwZVhCbGIyWWdibUYyYVdkaGRHOXlJQ0U5UFNBbmRXNWtaV1pwYm1Wa0p5QW1KaUJ1WVhacFoyRjBiM0l1Y0hKdlpIVmpkQ0E5UFQwZ0oxSmxZV04wVG1GMGFYWmxKeWtnZTF4dUlDQWdJSEpsZEhWeWJpQm1ZV3h6WlR0Y2JpQWdmVnh1SUNCeVpYUjFjbTRnS0Z4dUlDQWdJSFI1Y0dWdlppQjNhVzVrYjNjZ0lUMDlJQ2QxYm1SbFptbHVaV1FuSUNZbVhHNGdJQ0FnZEhsd1pXOW1JR1J2WTNWdFpXNTBJQ0U5UFNBbmRXNWtaV1pwYm1Wa0oxeHVJQ0FwTzF4dWZWeHVYRzR2S2lwY2JpQXFJRWwwWlhKaGRHVWdiM1psY2lCaGJpQkJjbkpoZVNCdmNpQmhiaUJQWW1wbFkzUWdhVzUyYjJ0cGJtY2dZU0JtZFc1amRHbHZiaUJtYjNJZ1pXRmphQ0JwZEdWdExseHVJQ3BjYmlBcUlFbG1JR0J2WW1wZ0lHbHpJR0Z1SUVGeWNtRjVJR05oYkd4aVlXTnJJSGRwYkd3Z1ltVWdZMkZzYkdWa0lIQmhjM05wYm1kY2JpQXFJSFJvWlNCMllXeDFaU3dnYVc1a1pYZ3NJR0Z1WkNCamIyMXdiR1YwWlNCaGNuSmhlU0JtYjNJZ1pXRmphQ0JwZEdWdExseHVJQ3BjYmlBcUlFbG1JQ2R2WW1vbklHbHpJR0Z1SUU5aWFtVmpkQ0JqWVd4c1ltRmpheUIzYVd4c0lHSmxJR05oYkd4bFpDQndZWE56YVc1blhHNGdLaUIwYUdVZ2RtRnNkV1VzSUd0bGVTd2dZVzVrSUdOdmJYQnNaWFJsSUc5aWFtVmpkQ0JtYjNJZ1pXRmphQ0J3Y205d1pYSjBlUzVjYmlBcVhHNGdLaUJBY0dGeVlXMGdlMDlpYW1WamRIeEJjbkpoZVgwZ2IySnFJRlJvWlNCdlltcGxZM1FnZEc4Z2FYUmxjbUYwWlZ4dUlDb2dRSEJoY21GdElIdEdkVzVqZEdsdmJuMGdabTRnVkdobElHTmhiR3hpWVdOcklIUnZJR2x1ZG05clpTQm1iM0lnWldGamFDQnBkR1Z0WEc0Z0tpOWNibVoxYm1OMGFXOXVJR1p2Y2tWaFkyZ29iMkpxTENCbWJpa2dlMXh1SUNBdkx5QkViMjRuZENCaWIzUm9aWElnYVdZZ2JtOGdkbUZzZFdVZ2NISnZkbWxrWldSY2JpQWdhV1lnS0c5aWFpQTlQVDBnYm5Wc2JDQjhmQ0IwZVhCbGIyWWdiMkpxSUQwOVBTQW5kVzVrWldacGJtVmtKeWtnZTF4dUlDQWdJSEpsZEhWeWJqdGNiaUFnZlZ4dVhHNGdJQzh2SUVadmNtTmxJR0Z1SUdGeWNtRjVJR2xtSUc1dmRDQmhiSEpsWVdSNUlITnZiV1YwYUdsdVp5QnBkR1Z5WVdKc1pWeHVJQ0JwWmlBb2RIbHdaVzltSUc5aWFpQWhQVDBnSjI5aWFtVmpkQ2NwSUh0Y2JpQWdJQ0F2S21WemJHbHVkQ0J1Ynkxd1lYSmhiUzF5WldGemMybG5iam93S2k5Y2JpQWdJQ0J2WW1vZ1BTQmJiMkpxWFR0Y2JpQWdmVnh1WEc0Z0lHbG1JQ2hwYzBGeWNtRjVLRzlpYWlrcElIdGNiaUFnSUNBdkx5QkpkR1Z5WVhSbElHOTJaWElnWVhKeVlYa2dkbUZzZFdWelhHNGdJQ0FnWm05eUlDaDJZWElnYVNBOUlEQXNJR3dnUFNCdlltb3ViR1Z1WjNSb095QnBJRHdnYkRzZ2FTc3JLU0I3WEc0Z0lDQWdJQ0JtYmk1allXeHNLRzUxYkd3c0lHOWlhbHRwWFN3Z2FTd2diMkpxS1R0Y2JpQWdJQ0I5WEc0Z0lIMGdaV3h6WlNCN1hHNGdJQ0FnTHk4Z1NYUmxjbUYwWlNCdmRtVnlJRzlpYW1WamRDQnJaWGx6WEc0Z0lDQWdabTl5SUNoMllYSWdhMlY1SUdsdUlHOWlhaWtnZTF4dUlDQWdJQ0FnYVdZZ0tFOWlhbVZqZEM1d2NtOTBiM1I1Y0dVdWFHRnpUM2R1VUhKdmNHVnlkSGt1WTJGc2JDaHZZbW9zSUd0bGVTa3BJSHRjYmlBZ0lDQWdJQ0FnWm00dVkyRnNiQ2h1ZFd4c0xDQnZZbXBiYTJWNVhTd2dhMlY1TENCdlltb3BPMXh1SUNBZ0lDQWdmVnh1SUNBZ0lIMWNiaUFnZlZ4dWZWeHVYRzR2S2lwY2JpQXFJRUZqWTJWd2RITWdkbUZ5WVhKbmN5QmxlSEJsWTNScGJtY2daV0ZqYUNCaGNtZDFiV1Z1ZENCMGJ5QmlaU0JoYmlCdlltcGxZM1FzSUhSb1pXNWNiaUFxSUdsdGJYVjBZV0pzZVNCdFpYSm5aWE1nZEdobElIQnliM0JsY25ScFpYTWdiMllnWldGamFDQnZZbXBsWTNRZ1lXNWtJSEpsZEhWeWJuTWdjbVZ6ZFd4MExseHVJQ3BjYmlBcUlGZG9aVzRnYlhWc2RHbHdiR1VnYjJKcVpXTjBjeUJqYjI1MFlXbHVJSFJvWlNCellXMWxJR3RsZVNCMGFHVWdiR0YwWlhJZ2IySnFaV04wSUdsdVhHNGdLaUIwYUdVZ1lYSm5kVzFsYm5SeklHeHBjM1FnZDJsc2JDQjBZV3RsSUhCeVpXTmxaR1Z1WTJVdVhHNGdLbHh1SUNvZ1JYaGhiWEJzWlRwY2JpQXFYRzRnS2lCZ1lHQnFjMXh1SUNvZ2RtRnlJSEpsYzNWc2RDQTlJRzFsY21kbEtIdG1iMjg2SURFeU0zMHNJSHRtYjI4NklEUTFObjBwTzF4dUlDb2dZMjl1YzI5c1pTNXNiMmNvY21WemRXeDBMbVp2YnlrN0lDOHZJRzkxZEhCMWRITWdORFUyWEc0Z0tpQmdZR0JjYmlBcVhHNGdLaUJBY0dGeVlXMGdlMDlpYW1WamRIMGdiMkpxTVNCUFltcGxZM1FnZEc4Z2JXVnlaMlZjYmlBcUlFQnlaWFIxY201eklIdFBZbXBsWTNSOUlGSmxjM1ZzZENCdlppQmhiR3dnYldWeVoyVWdjSEp2Y0dWeWRHbGxjMXh1SUNvdlhHNW1kVzVqZEdsdmJpQnRaWEpuWlNndktpQnZZbW94TENCdlltb3lMQ0J2WW1vekxDQXVMaTRnS2k4cElIdGNiaUFnZG1GeUlISmxjM1ZzZENBOUlIdDlPMXh1SUNCbWRXNWpkR2x2YmlCaGMzTnBaMjVXWVd4MVpTaDJZV3dzSUd0bGVTa2dlMXh1SUNBZ0lHbG1JQ2gwZVhCbGIyWWdjbVZ6ZFd4MFcydGxlVjBnUFQwOUlDZHZZbXBsWTNRbklDWW1JSFI1Y0dWdlppQjJZV3dnUFQwOUlDZHZZbXBsWTNRbktTQjdYRzRnSUNBZ0lDQnlaWE4xYkhSYmEyVjVYU0E5SUcxbGNtZGxLSEpsYzNWc2RGdHJaWGxkTENCMllXd3BPMXh1SUNBZ0lIMGdaV3h6WlNCN1hHNGdJQ0FnSUNCeVpYTjFiSFJiYTJWNVhTQTlJSFpoYkR0Y2JpQWdJQ0I5WEc0Z0lIMWNibHh1SUNCbWIzSWdLSFpoY2lCcElEMGdNQ3dnYkNBOUlHRnlaM1Z0Wlc1MGN5NXNaVzVuZEdnN0lHa2dQQ0JzT3lCcEt5c3BJSHRjYmlBZ0lDQm1iM0pGWVdOb0tHRnlaM1Z0Wlc1MGMxdHBYU3dnWVhOemFXZHVWbUZzZFdVcE8xeHVJQ0I5WEc0Z0lISmxkSFZ5YmlCeVpYTjFiSFE3WEc1OVhHNWNiaThxS2x4dUlDb2dSWGgwWlc1a2N5QnZZbXBsWTNRZ1lTQmllU0J0ZFhSaFlteDVJR0ZrWkdsdVp5QjBieUJwZENCMGFHVWdjSEp2Y0dWeWRHbGxjeUJ2WmlCdlltcGxZM1FnWWk1Y2JpQXFYRzRnS2lCQWNHRnlZVzBnZTA5aWFtVmpkSDBnWVNCVWFHVWdiMkpxWldOMElIUnZJR0psSUdWNGRHVnVaR1ZrWEc0Z0tpQkFjR0Z5WVcwZ2UwOWlhbVZqZEgwZ1lpQlVhR1VnYjJKcVpXTjBJSFJ2SUdOdmNIa2djSEp2Y0dWeWRHbGxjeUJtY205dFhHNGdLaUJBY0dGeVlXMGdlMDlpYW1WamRIMGdkR2hwYzBGeVp5QlVhR1VnYjJKcVpXTjBJSFJ2SUdKcGJtUWdablZ1WTNScGIyNGdkRzljYmlBcUlFQnlaWFIxY200Z2UwOWlhbVZqZEgwZ1ZHaGxJSEpsYzNWc2RHbHVaeUIyWVd4MVpTQnZaaUJ2WW1wbFkzUWdZVnh1SUNvdlhHNW1kVzVqZEdsdmJpQmxlSFJsYm1Rb1lTd2dZaXdnZEdocGMwRnlaeWtnZTF4dUlDQm1iM0pGWVdOb0tHSXNJR1oxYm1OMGFXOXVJR0Z6YzJsbmJsWmhiSFZsS0haaGJDd2dhMlY1S1NCN1hHNGdJQ0FnYVdZZ0tIUm9hWE5CY21jZ0ppWWdkSGx3Wlc5bUlIWmhiQ0E5UFQwZ0oyWjFibU4wYVc5dUp5a2dlMXh1SUNBZ0lDQWdZVnRyWlhsZElEMGdZbWx1WkNoMllXd3NJSFJvYVhOQmNtY3BPMXh1SUNBZ0lIMGdaV3h6WlNCN1hHNGdJQ0FnSUNCaFcydGxlVjBnUFNCMllXdzdYRzRnSUNBZ2ZWeHVJQ0I5S1R0Y2JpQWdjbVYwZFhKdUlHRTdYRzU5WEc1Y2JtMXZaSFZzWlM1bGVIQnZjblJ6SUQwZ2UxeHVJQ0JwYzBGeWNtRjVPaUJwYzBGeWNtRjVMRnh1SUNCcGMwRnljbUY1UW5WbVptVnlPaUJwYzBGeWNtRjVRblZtWm1WeUxGeHVJQ0JwYzBKMVptWmxjam9nYVhOQ2RXWm1aWElzWEc0Z0lHbHpSbTl5YlVSaGRHRTZJR2x6Um05eWJVUmhkR0VzWEc0Z0lHbHpRWEp5WVhsQ2RXWm1aWEpXYVdWM09pQnBjMEZ5Y21GNVFuVm1abVZ5Vm1sbGR5eGNiaUFnYVhOVGRISnBibWM2SUdselUzUnlhVzVuTEZ4dUlDQnBjMDUxYldKbGNqb2dhWE5PZFcxaVpYSXNYRzRnSUdselQySnFaV04wT2lCcGMwOWlhbVZqZEN4Y2JpQWdhWE5WYm1SbFptbHVaV1E2SUdselZXNWtaV1pwYm1Wa0xGeHVJQ0JwYzBSaGRHVTZJR2x6UkdGMFpTeGNiaUFnYVhOR2FXeGxPaUJwYzBacGJHVXNYRzRnSUdselFteHZZam9nYVhOQ2JHOWlMRnh1SUNCcGMwWjFibU4wYVc5dU9pQnBjMFoxYm1OMGFXOXVMRnh1SUNCcGMxTjBjbVZoYlRvZ2FYTlRkSEpsWVcwc1hHNGdJR2x6VlZKTVUyVmhjbU5vVUdGeVlXMXpPaUJwYzFWU1RGTmxZWEpqYUZCaGNtRnRjeXhjYmlBZ2FYTlRkR0Z1WkdGeVpFSnliM2R6WlhKRmJuWTZJR2x6VTNSaGJtUmhjbVJDY205M2MyVnlSVzUyTEZ4dUlDQm1iM0pGWVdOb09pQm1iM0pGWVdOb0xGeHVJQ0J0WlhKblpUb2diV1Z5WjJVc1hHNGdJR1Y0ZEdWdVpEb2daWGgwWlc1a0xGeHVJQ0IwY21sdE9pQjBjbWx0WEc1OU8xeHVJaXdpTHlvaFhHNGdLaUJFWlhSbGNtMXBibVVnYVdZZ1lXNGdiMkpxWldOMElHbHpJR0VnUW5WbVptVnlYRzRnS2x4dUlDb2dRR0YxZEdodmNpQWdJRVpsY205emN5QkJZbTkxYTJoaFpHbHFaV2dnUEdoMGRIQnpPaTh2Wm1WeWIzTnpMbTl5Wno1Y2JpQXFJRUJzYVdObGJuTmxJQ0JOU1ZSY2JpQXFMMXh1WEc0dkx5QlVhR1VnWDJselFuVm1abVZ5SUdOb1pXTnJJR2x6SUdadmNpQlRZV1poY21rZ05TMDNJSE4xY0hCdmNuUXNJR0psWTJGMWMyVWdhWFFuY3lCdGFYTnphVzVuWEc0dkx5QlBZbXBsWTNRdWNISnZkRzkwZVhCbExtTnZibk4wY25WamRHOXlMaUJTWlcxdmRtVWdkR2hwY3lCbGRtVnVkSFZoYkd4NVhHNXRiMlIxYkdVdVpYaHdiM0owY3lBOUlHWjFibU4wYVc5dUlDaHZZbW9wSUh0Y2JpQWdjbVYwZFhKdUlHOWlhaUFoUFNCdWRXeHNJQ1ltSUNocGMwSjFabVpsY2lodlltb3BJSHg4SUdselUyeHZkMEoxWm1abGNpaHZZbW9wSUh4OElDRWhiMkpxTGw5cGMwSjFabVpsY2lsY2JuMWNibHh1Wm5WdVkzUnBiMjRnYVhOQ2RXWm1aWElnS0c5aWFpa2dlMXh1SUNCeVpYUjFjbTRnSVNGdlltb3VZMjl1YzNSeWRXTjBiM0lnSmlZZ2RIbHdaVzltSUc5aWFpNWpiMjV6ZEhKMVkzUnZjaTVwYzBKMVptWmxjaUE5UFQwZ0oyWjFibU4wYVc5dUp5QW1KaUJ2WW1vdVkyOXVjM1J5ZFdOMGIzSXVhWE5DZFdabVpYSW9iMkpxS1Z4dWZWeHVYRzR2THlCR2IzSWdUbTlrWlNCMk1DNHhNQ0J6ZFhCd2IzSjBMaUJTWlcxdmRtVWdkR2hwY3lCbGRtVnVkSFZoYkd4NUxseHVablZ1WTNScGIyNGdhWE5UYkc5M1FuVm1abVZ5SUNodlltb3BJSHRjYmlBZ2NtVjBkWEp1SUhSNWNHVnZaaUJ2WW1vdWNtVmhaRVpzYjJGMFRFVWdQVDA5SUNkbWRXNWpkR2x2YmljZ0ppWWdkSGx3Wlc5bUlHOWlhaTV6YkdsalpTQTlQVDBnSjJaMWJtTjBhVzl1SnlBbUppQnBjMEoxWm1abGNpaHZZbW91YzJ4cFkyVW9NQ3dnTUNrcFhHNTlYRzRpTENJdkx5QnphR2x0SUdadmNpQjFjMmx1WnlCd2NtOWpaWE56SUdsdUlHSnliM2R6WlhKY2JuWmhjaUJ3Y205alpYTnpJRDBnYlc5a2RXeGxMbVY0Y0c5eWRITWdQU0I3ZlR0Y2JseHVMeThnWTJGamFHVmtJR1p5YjIwZ2QyaGhkR1YyWlhJZ1oyeHZZbUZzSUdseklIQnlaWE5sYm5RZ2MyOGdkR2hoZENCMFpYTjBJSEoxYm01bGNuTWdkR2hoZENCemRIVmlJR2wwWEc0dkx5QmtiMjRuZENCaWNtVmhheUIwYUdsdVozTXVJQ0JDZFhRZ2QyVWdibVZsWkNCMGJ5QjNjbUZ3SUdsMElHbHVJR0VnZEhKNUlHTmhkR05vSUdsdUlHTmhjMlVnYVhRZ2FYTmNiaTh2SUhkeVlYQndaV1FnYVc0Z2MzUnlhV04wSUcxdlpHVWdZMjlrWlNCM2FHbGphQ0JrYjJWemJpZDBJR1JsWm1sdVpTQmhibmtnWjJ4dlltRnNjeTRnSUVsMEozTWdhVzV6YVdSbElHRmNiaTh2SUdaMWJtTjBhVzl1SUdKbFkyRjFjMlVnZEhKNUwyTmhkR05vWlhNZ1pHVnZjSFJwYldsNlpTQnBiaUJqWlhKMFlXbHVJR1Z1WjJsdVpYTXVYRzVjYm5aaGNpQmpZV05vWldSVFpYUlVhVzFsYjNWME8xeHVkbUZ5SUdOaFkyaGxaRU5zWldGeVZHbHRaVzkxZER0Y2JseHVablZ1WTNScGIyNGdaR1ZtWVhWc2RGTmxkRlJwYlc5MWRDZ3BJSHRjYmlBZ0lDQjBhSEp2ZHlCdVpYY2dSWEp5YjNJb0ozTmxkRlJwYldWdmRYUWdhR0Z6SUc1dmRDQmlaV1Z1SUdSbFptbHVaV1FuS1R0Y2JuMWNibVoxYm1OMGFXOXVJR1JsWm1GMWJIUkRiR1ZoY2xScGJXVnZkWFFnS0NrZ2UxeHVJQ0FnSUhSb2NtOTNJRzVsZHlCRmNuSnZjaWduWTJ4bFlYSlVhVzFsYjNWMElHaGhjeUJ1YjNRZ1ltVmxiaUJrWldacGJtVmtKeWs3WEc1OVhHNG9ablZ1WTNScGIyNGdLQ2tnZTF4dUlDQWdJSFJ5ZVNCN1hHNGdJQ0FnSUNBZ0lHbG1JQ2gwZVhCbGIyWWdjMlYwVkdsdFpXOTFkQ0E5UFQwZ0oyWjFibU4wYVc5dUp5a2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ1kyRmphR1ZrVTJWMFZHbHRaVzkxZENBOUlITmxkRlJwYldWdmRYUTdYRzRnSUNBZ0lDQWdJSDBnWld4elpTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCallXTm9aV1JUWlhSVWFXMWxiM1YwSUQwZ1pHVm1ZWFZzZEZObGRGUnBiVzkxZER0Y2JpQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUgwZ1kyRjBZMmdnS0dVcElIdGNiaUFnSUNBZ0lDQWdZMkZqYUdWa1UyVjBWR2x0Wlc5MWRDQTlJR1JsWm1GMWJIUlRaWFJVYVcxdmRYUTdYRzRnSUNBZ2ZWeHVJQ0FnSUhSeWVTQjdYRzRnSUNBZ0lDQWdJR2xtSUNoMGVYQmxiMllnWTJ4bFlYSlVhVzFsYjNWMElEMDlQU0FuWm5WdVkzUnBiMjRuS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JqWVdOb1pXUkRiR1ZoY2xScGJXVnZkWFFnUFNCamJHVmhjbFJwYldWdmRYUTdYRzRnSUNBZ0lDQWdJSDBnWld4elpTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCallXTm9aV1JEYkdWaGNsUnBiV1Z2ZFhRZ1BTQmtaV1poZFd4MFEyeGxZWEpVYVcxbGIzVjBPMXh1SUNBZ0lDQWdJQ0I5WEc0Z0lDQWdmU0JqWVhSamFDQW9aU2tnZTF4dUlDQWdJQ0FnSUNCallXTm9aV1JEYkdWaGNsUnBiV1Z2ZFhRZ1BTQmtaV1poZFd4MFEyeGxZWEpVYVcxbGIzVjBPMXh1SUNBZ0lIMWNibjBnS0NrcFhHNW1kVzVqZEdsdmJpQnlkVzVVYVcxbGIzVjBLR1oxYmlrZ2UxeHVJQ0FnSUdsbUlDaGpZV05vWldSVFpYUlVhVzFsYjNWMElEMDlQU0J6WlhSVWFXMWxiM1YwS1NCN1hHNGdJQ0FnSUNBZ0lDOHZibTl5YldGc0lHVnVkbWx5YjIxbGJuUnpJR2x1SUhOaGJtVWdjMmwwZFdGMGFXOXVjMXh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdjMlYwVkdsdFpXOTFkQ2htZFc0c0lEQXBPMXh1SUNBZ0lIMWNiaUFnSUNBdkx5QnBaaUJ6WlhSVWFXMWxiM1YwSUhkaGMyNG5kQ0JoZG1GcGJHRmliR1VnWW5WMElIZGhjeUJzWVhSMFpYSWdaR1ZtYVc1bFpGeHVJQ0FnSUdsbUlDZ29ZMkZqYUdWa1UyVjBWR2x0Wlc5MWRDQTlQVDBnWkdWbVlYVnNkRk5sZEZScGJXOTFkQ0I4ZkNBaFkyRmphR1ZrVTJWMFZHbHRaVzkxZENrZ0ppWWdjMlYwVkdsdFpXOTFkQ2tnZTF4dUlDQWdJQ0FnSUNCallXTm9aV1JUWlhSVWFXMWxiM1YwSUQwZ2MyVjBWR2x0Wlc5MWREdGNiaUFnSUNBZ0lDQWdjbVYwZFhKdUlITmxkRlJwYldWdmRYUW9ablZ1TENBd0tUdGNiaUFnSUNCOVhHNGdJQ0FnZEhKNUlIdGNiaUFnSUNBZ0lDQWdMeThnZDJobGJpQjNhR1Z1SUhOdmJXVmliMlI1SUdoaGN5QnpZM0psZDJWa0lIZHBkR2dnYzJWMFZHbHRaVzkxZENCaWRYUWdibThnU1M1RkxpQnRZV1JrYm1WemMxeHVJQ0FnSUNBZ0lDQnlaWFIxY200Z1kyRmphR1ZrVTJWMFZHbHRaVzkxZENobWRXNHNJREFwTzF4dUlDQWdJSDBnWTJGMFkyZ29aU2w3WEc0Z0lDQWdJQ0FnSUhSeWVTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNBdkx5QlhhR1Z1SUhkbElHRnlaU0JwYmlCSkxrVXVJR0oxZENCMGFHVWdjMk55YVhCMElHaGhjeUJpWldWdUlHVjJZV3hsWkNCemJ5QkpMa1V1SUdSdlpYTnVKM1FnZEhKMWMzUWdkR2hsSUdkc2IySmhiQ0J2WW1wbFkzUWdkMmhsYmlCallXeHNaV1FnYm05eWJXRnNiSGxjYmlBZ0lDQWdJQ0FnSUNBZ0lISmxkSFZ5YmlCallXTm9aV1JUWlhSVWFXMWxiM1YwTG1OaGJHd29iblZzYkN3Z1puVnVMQ0F3S1R0Y2JpQWdJQ0FnSUNBZ2ZTQmpZWFJqYUNobEtYdGNiaUFnSUNBZ0lDQWdJQ0FnSUM4dklITmhiV1VnWVhNZ1lXSnZkbVVnWW5WMElIZG9aVzRnYVhRbmN5QmhJSFpsY25OcGIyNGdiMllnU1M1RkxpQjBhR0YwSUcxMWMzUWdhR0YyWlNCMGFHVWdaMnh2WW1Gc0lHOWlhbVZqZENCbWIzSWdKM1JvYVhNbkxDQm9iM0JtZFd4c2VTQnZkWElnWTI5dWRHVjRkQ0JqYjNKeVpXTjBJRzkwYUdWeWQybHpaU0JwZENCM2FXeHNJSFJvY205M0lHRWdaMnh2WW1Gc0lHVnljbTl5WEc0Z0lDQWdJQ0FnSUNBZ0lDQnlaWFIxY200Z1kyRmphR1ZrVTJWMFZHbHRaVzkxZEM1allXeHNLSFJvYVhNc0lHWjFiaXdnTUNrN1hHNGdJQ0FnSUNBZ0lIMWNiaUFnSUNCOVhHNWNibHh1ZlZ4dVpuVnVZM1JwYjI0Z2NuVnVRMnhsWVhKVWFXMWxiM1YwS0cxaGNtdGxjaWtnZTF4dUlDQWdJR2xtSUNoallXTm9aV1JEYkdWaGNsUnBiV1Z2ZFhRZ1BUMDlJR05zWldGeVZHbHRaVzkxZENrZ2UxeHVJQ0FnSUNBZ0lDQXZMMjV2Y20xaGJDQmxiblpwY205dFpXNTBjeUJwYmlCellXNWxJSE5wZEhWaGRHbHZibk5jYmlBZ0lDQWdJQ0FnY21WMGRYSnVJR05zWldGeVZHbHRaVzkxZENodFlYSnJaWElwTzF4dUlDQWdJSDFjYmlBZ0lDQXZMeUJwWmlCamJHVmhjbFJwYldWdmRYUWdkMkZ6YmlkMElHRjJZV2xzWVdKc1pTQmlkWFFnZDJGeklHeGhkSFJsY2lCa1pXWnBibVZrWEc0Z0lDQWdhV1lnS0NoallXTm9aV1JEYkdWaGNsUnBiV1Z2ZFhRZ1BUMDlJR1JsWm1GMWJIUkRiR1ZoY2xScGJXVnZkWFFnZkh3Z0lXTmhZMmhsWkVOc1pXRnlWR2x0Wlc5MWRDa2dKaVlnWTJ4bFlYSlVhVzFsYjNWMEtTQjdYRzRnSUNBZ0lDQWdJR05oWTJobFpFTnNaV0Z5VkdsdFpXOTFkQ0E5SUdOc1pXRnlWR2x0Wlc5MWREdGNiaUFnSUNBZ0lDQWdjbVYwZFhKdUlHTnNaV0Z5VkdsdFpXOTFkQ2h0WVhKclpYSXBPMXh1SUNBZ0lIMWNiaUFnSUNCMGNua2dlMXh1SUNBZ0lDQWdJQ0F2THlCM2FHVnVJSGRvWlc0Z2MyOXRaV0p2WkhrZ2FHRnpJSE5qY21WM1pXUWdkMmwwYUNCelpYUlVhVzFsYjNWMElHSjFkQ0J1YnlCSkxrVXVJRzFoWkdSdVpYTnpYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQmpZV05vWldSRGJHVmhjbFJwYldWdmRYUW9iV0Z5YTJWeUtUdGNiaUFnSUNCOUlHTmhkR05vSUNobEtYdGNiaUFnSUNBZ0lDQWdkSEo1SUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJQzh2SUZkb1pXNGdkMlVnWVhKbElHbHVJRWt1UlM0Z1luVjBJSFJvWlNCelkzSnBjSFFnYUdGeklHSmxaVzRnWlhaaGJHVmtJSE52SUVrdVJTNGdaRzlsYzI0bmRDQWdkSEoxYzNRZ2RHaGxJR2RzYjJKaGJDQnZZbXBsWTNRZ2QyaGxiaUJqWVd4c1pXUWdibTl5YldGc2JIbGNiaUFnSUNBZ0lDQWdJQ0FnSUhKbGRIVnliaUJqWVdOb1pXUkRiR1ZoY2xScGJXVnZkWFF1WTJGc2JDaHVkV3hzTENCdFlYSnJaWElwTzF4dUlDQWdJQ0FnSUNCOUlHTmhkR05vSUNobEtYdGNiaUFnSUNBZ0lDQWdJQ0FnSUM4dklITmhiV1VnWVhNZ1lXSnZkbVVnWW5WMElIZG9aVzRnYVhRbmN5QmhJSFpsY25OcGIyNGdiMllnU1M1RkxpQjBhR0YwSUcxMWMzUWdhR0YyWlNCMGFHVWdaMnh2WW1Gc0lHOWlhbVZqZENCbWIzSWdKM1JvYVhNbkxDQm9iM0JtZFd4c2VTQnZkWElnWTI5dWRHVjRkQ0JqYjNKeVpXTjBJRzkwYUdWeWQybHpaU0JwZENCM2FXeHNJSFJvY205M0lHRWdaMnh2WW1Gc0lHVnljbTl5TGx4dUlDQWdJQ0FnSUNBZ0lDQWdMeThnVTI5dFpTQjJaWEp6YVc5dWN5QnZaaUJKTGtVdUlHaGhkbVVnWkdsbVptVnlaVzUwSUhKMWJHVnpJR1p2Y2lCamJHVmhjbFJwYldWdmRYUWdkbk1nYzJWMFZHbHRaVzkxZEZ4dUlDQWdJQ0FnSUNBZ0lDQWdjbVYwZFhKdUlHTmhZMmhsWkVOc1pXRnlWR2x0Wlc5MWRDNWpZV3hzS0hSb2FYTXNJRzFoY210bGNpazdYRzRnSUNBZ0lDQWdJSDFjYmlBZ0lDQjlYRzVjYmx4dVhHNTlYRzUyWVhJZ2NYVmxkV1VnUFNCYlhUdGNiblpoY2lCa2NtRnBibWx1WnlBOUlHWmhiSE5sTzF4dWRtRnlJR04xY25KbGJuUlJkV1YxWlR0Y2JuWmhjaUJ4ZFdWMVpVbHVaR1Y0SUQwZ0xURTdYRzVjYm1aMWJtTjBhVzl1SUdOc1pXRnVWWEJPWlhoMFZHbGpheWdwSUh0Y2JpQWdJQ0JwWmlBb0lXUnlZV2x1YVc1bklIeDhJQ0ZqZFhKeVpXNTBVWFZsZFdVcElIdGNiaUFnSUNBZ0lDQWdjbVYwZFhKdU8xeHVJQ0FnSUgxY2JpQWdJQ0JrY21GcGJtbHVaeUE5SUdaaGJITmxPMXh1SUNBZ0lHbG1JQ2hqZFhKeVpXNTBVWFZsZFdVdWJHVnVaM1JvS1NCN1hHNGdJQ0FnSUNBZ0lIRjFaWFZsSUQwZ1kzVnljbVZ1ZEZGMVpYVmxMbU52Ym1OaGRDaHhkV1YxWlNrN1hHNGdJQ0FnZlNCbGJITmxJSHRjYmlBZ0lDQWdJQ0FnY1hWbGRXVkpibVJsZUNBOUlDMHhPMXh1SUNBZ0lIMWNiaUFnSUNCcFppQW9jWFZsZFdVdWJHVnVaM1JvS1NCN1hHNGdJQ0FnSUNBZ0lHUnlZV2x1VVhWbGRXVW9LVHRjYmlBZ0lDQjlYRzU5WEc1Y2JtWjFibU4wYVc5dUlHUnlZV2x1VVhWbGRXVW9LU0I3WEc0Z0lDQWdhV1lnS0dSeVlXbHVhVzVuS1NCN1hHNGdJQ0FnSUNBZ0lISmxkSFZ5Ymp0Y2JpQWdJQ0I5WEc0Z0lDQWdkbUZ5SUhScGJXVnZkWFFnUFNCeWRXNVVhVzFsYjNWMEtHTnNaV0Z1VlhCT1pYaDBWR2xqYXlrN1hHNGdJQ0FnWkhKaGFXNXBibWNnUFNCMGNuVmxPMXh1WEc0Z0lDQWdkbUZ5SUd4bGJpQTlJSEYxWlhWbExteGxibWQwYUR0Y2JpQWdJQ0IzYUdsc1pTaHNaVzRwSUh0Y2JpQWdJQ0FnSUNBZ1kzVnljbVZ1ZEZGMVpYVmxJRDBnY1hWbGRXVTdYRzRnSUNBZ0lDQWdJSEYxWlhWbElEMGdXMTA3WEc0Z0lDQWdJQ0FnSUhkb2FXeGxJQ2dySzNGMVpYVmxTVzVrWlhnZ1BDQnNaVzRwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJR2xtSUNoamRYSnlaVzUwVVhWbGRXVXBJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JqZFhKeVpXNTBVWFZsZFdWYmNYVmxkV1ZKYm1SbGVGMHVjblZ1S0NrN1hHNGdJQ0FnSUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUNBZ2NYVmxkV1ZKYm1SbGVDQTlJQzB4TzF4dUlDQWdJQ0FnSUNCc1pXNGdQU0J4ZFdWMVpTNXNaVzVuZEdnN1hHNGdJQ0FnZlZ4dUlDQWdJR04xY25KbGJuUlJkV1YxWlNBOUlHNTFiR3c3WEc0Z0lDQWdaSEpoYVc1cGJtY2dQU0JtWVd4elpUdGNiaUFnSUNCeWRXNURiR1ZoY2xScGJXVnZkWFFvZEdsdFpXOTFkQ2s3WEc1OVhHNWNibkJ5YjJObGMzTXVibVY0ZEZScFkyc2dQU0JtZFc1amRHbHZiaUFvWm5WdUtTQjdYRzRnSUNBZ2RtRnlJR0Z5WjNNZ1BTQnVaWGNnUVhKeVlYa29ZWEpuZFcxbGJuUnpMbXhsYm1kMGFDQXRJREVwTzF4dUlDQWdJR2xtSUNoaGNtZDFiV1Z1ZEhNdWJHVnVaM1JvSUQ0Z01Ta2dlMXh1SUNBZ0lDQWdJQ0JtYjNJZ0tIWmhjaUJwSUQwZ01Uc2dhU0E4SUdGeVozVnRaVzUwY3k1c1pXNW5kR2c3SUdrckt5a2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ1lYSm5jMXRwSUMwZ01WMGdQU0JoY21kMWJXVnVkSE5iYVYwN1hHNGdJQ0FnSUNBZ0lIMWNiaUFnSUNCOVhHNGdJQ0FnY1hWbGRXVXVjSFZ6YUNodVpYY2dTWFJsYlNobWRXNHNJR0Z5WjNNcEtUdGNiaUFnSUNCcFppQW9jWFZsZFdVdWJHVnVaM1JvSUQwOVBTQXhJQ1ltSUNGa2NtRnBibWx1WnlrZ2UxeHVJQ0FnSUNBZ0lDQnlkVzVVYVcxbGIzVjBLR1J5WVdsdVVYVmxkV1VwTzF4dUlDQWdJSDFjYm4wN1hHNWNiaTh2SUhZNElHeHBhMlZ6SUhCeVpXUnBZM1JwWW14bElHOWlhbVZqZEhOY2JtWjFibU4wYVc5dUlFbDBaVzBvWm5WdUxDQmhjbkpoZVNrZ2UxeHVJQ0FnSUhSb2FYTXVablZ1SUQwZ1puVnVPMXh1SUNBZ0lIUm9hWE11WVhKeVlYa2dQU0JoY25KaGVUdGNibjFjYmtsMFpXMHVjSEp2ZEc5MGVYQmxMbkoxYmlBOUlHWjFibU4wYVc5dUlDZ3BJSHRjYmlBZ0lDQjBhR2x6TG1aMWJpNWhjSEJzZVNodWRXeHNMQ0IwYUdsekxtRnljbUY1S1R0Y2JuMDdYRzV3Y205alpYTnpMblJwZEd4bElEMGdKMkp5YjNkelpYSW5PMXh1Y0hKdlkyVnpjeTVpY205M2MyVnlJRDBnZEhKMVpUdGNibkJ5YjJObGMzTXVaVzUySUQwZ2UzMDdYRzV3Y205alpYTnpMbUZ5WjNZZ1BTQmJYVHRjYm5CeWIyTmxjM011ZG1WeWMybHZiaUE5SUNjbk95QXZMeUJsYlhCMGVTQnpkSEpwYm1jZ2RHOGdZWFp2YVdRZ2NtVm5aWGh3SUdsemMzVmxjMXh1Y0hKdlkyVnpjeTUyWlhKemFXOXVjeUE5SUh0OU8xeHVYRzVtZFc1amRHbHZiaUJ1YjI5d0tDa2dlMzFjYmx4dWNISnZZMlZ6Y3k1dmJpQTlJRzV2YjNBN1hHNXdjbTlqWlhOekxtRmtaRXhwYzNSbGJtVnlJRDBnYm05dmNEdGNibkJ5YjJObGMzTXViMjVqWlNBOUlHNXZiM0E3WEc1d2NtOWpaWE56TG05bVppQTlJRzV2YjNBN1hHNXdjbTlqWlhOekxuSmxiVzkyWlV4cGMzUmxibVZ5SUQwZ2JtOXZjRHRjYm5CeWIyTmxjM011Y21WdGIzWmxRV3hzVEdsemRHVnVaWEp6SUQwZ2JtOXZjRHRjYm5CeWIyTmxjM011WlcxcGRDQTlJRzV2YjNBN1hHNXdjbTlqWlhOekxuQnlaWEJsYm1STWFYTjBaVzVsY2lBOUlHNXZiM0E3WEc1d2NtOWpaWE56TG5CeVpYQmxibVJQYm1ObFRHbHpkR1Z1WlhJZ1BTQnViMjl3TzF4dVhHNXdjbTlqWlhOekxteHBjM1JsYm1WeWN5QTlJR1oxYm1OMGFXOXVJQ2h1WVcxbEtTQjdJSEpsZEhWeWJpQmJYU0I5WEc1Y2JuQnliMk5sYzNNdVltbHVaR2x1WnlBOUlHWjFibU4wYVc5dUlDaHVZVzFsS1NCN1hHNGdJQ0FnZEdoeWIzY2dibVYzSUVWeWNtOXlLQ2R3Y205alpYTnpMbUpwYm1ScGJtY2dhWE1nYm05MElITjFjSEJ2Y25SbFpDY3BPMXh1ZlR0Y2JseHVjSEp2WTJWemN5NWpkMlFnUFNCbWRXNWpkR2x2YmlBb0tTQjdJSEpsZEhWeWJpQW5MeWNnZlR0Y2JuQnliMk5sYzNNdVkyaGthWElnUFNCbWRXNWpkR2x2YmlBb1pHbHlLU0I3WEc0Z0lDQWdkR2h5YjNjZ2JtVjNJRVZ5Y205eUtDZHdjbTlqWlhOekxtTm9aR2x5SUdseklHNXZkQ0J6ZFhCd2IzSjBaV1FuS1R0Y2JuMDdYRzV3Y205alpYTnpMblZ0WVhOcklEMGdablZ1WTNScGIyNG9LU0I3SUhKbGRIVnliaUF3T3lCOU8xeHVJaXdpYVcxd2IzSjBJSHRFYVhOd1lYUmphR1Z5ZlNCbWNtOXRJRndpTGk0dlpYWmxiblJ6TDJScGMzQmhkR05vWlhKY0lqdGNjbHh1WEhKY2JtVjRjRzl5ZENCamJHRnpjeUJEYUdGdWJtVnNJR1Y0ZEdWdVpITWdSR2x6Y0dGMFkyaGxjaUI3WEhKY2JpQWdJQ0JqYjI1emRISjFZM1J2Y2lodVlXMWxMQ0J3ZFhOb1pYSXBJSHRjY2x4dUlDQWdJQ0FnSUNCemRYQmxjaWdwTzF4eVhHNWNjbHh1SUNBZ0lDQWdJQ0IwYUdsekxtNWhiV1VnUFNCdVlXMWxPMXh5WEc0Z0lDQWdJQ0FnSUhSb2FYTXVjSFZ6YUdWeUlEMGdjSFZ6YUdWeU8xeHlYRzVjY2x4dUlDQWdJQ0FnSUNCcFppQW9kR2hwY3k1d2RYTm9aWEl1YzI5amEyVjBMbk4wWVhSbElEMDlJREVwSUh0Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnZEdocGN5NXpkV0p6WTNKcFltVW9LVHRjY2x4dUlDQWdJQ0FnSUNCOVhISmNiaUFnSUNCOVhISmNibHh5WEc0Z0lDQWdjM1ZpYzJOeWFXSmxLQ2tnZTF4eVhHNGdJQ0FnSUNBZ0lIUm9hWE11Y0hWemFHVnlMbk5sYm1Rb2UxeHlYRzRnSUNBZ0lDQWdJQ0FnSUNCbGRtVnVkRG9nSjNOMVluTmpjbWxpWlNjc1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUdSaGRHRTZJSHRjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdOb1lXNXVaV3c2SUhSb2FYTXVibUZ0WlZ4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0I5WEhKY2JpQWdJQ0FnSUNBZ2ZTazdYSEpjYmlBZ0lDQjlYSEpjYm4waUxDSnBiWEJ2Y25RZ2UwTm9ZVzV1Wld4OUlHWnliMjBnWENJdUwyTm9ZVzV1Wld4Y0lqdGNjbHh1YVcxd2IzSjBJSHRRY21WelpXNWpaVU5vWVc1dVpXeDlJR1p5YjIwZ1hDSXVMM0J5WlhObGJtTmxYMk5vWVc1dVpXeGNJanRjY2x4dWFXMXdiM0owSUh0UWNtbDJZWFJsUTJoaGJtNWxiSDBnWm5KdmJTQmNJaTR2Y0hKcGRtRjBaVjlqYUdGdWJtVnNYQ0k3WEhKY2JseHlYRzVsZUhCdmNuUWdZMnhoYzNNZ1RXRnVibUZuWlhJZ2UxeHlYRzRnSUNBZ1kyOXVjM1J5ZFdOMGIzSW9LU0I3WEhKY2JpQWdJQ0FnSUNBZ2RHaHBjeTVqYUdGdWJtVnNjeUE5SUh0OU8xeHlYRzRnSUNBZ2ZWeHlYRzVjY2x4dUlDQWdJR0ZrWkNodVlXMWxMQ0J3ZFhOb1pYSXBJSHRjY2x4dUlDQWdJQ0FnSUNCcFppQW9JWFJvYVhNdVkyaGhibTVsYkhOYmJtRnRaVjBwSUh0Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnZEdocGN5NWphR0Z1Ym1Wc2MxdHVZVzFsWFNBOUlHTnlaV0YwWlVOb1lXNXVaV3dvYm1GdFpTd2djSFZ6YUdWeUtUdGNjbHh1SUNBZ0lDQWdJQ0I5WEhKY2JpQWdJQ0FnSUNBZ2NtVjBkWEp1SUhSb2FYTXVZMmhoYm01bGJITmJibUZ0WlYwN1hISmNiaUFnSUNCOVhISmNibHh5WEc0Z0lDQWdZV3hzS0NrZ2UxeHlYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQlBZbXBsWTNRdWEyVjVjeWgwYUdsekxtTm9ZVzV1Wld4ektUdGNjbHh1SUNBZ0lIMWNjbHh1WEhKY2JpQWdJQ0JtYVc1a0tHNWhiV1VwSUh0Y2NseHVJQ0FnSUNBZ0lDQnlaWFIxY200Z2RHaHBjeTVqYUdGdWJtVnNjMXR1WVcxbFhUdGNjbHh1SUNBZ0lIMWNjbHh1WEhKY2JpQWdJQ0J5WlcxdmRtVW9ibUZ0WlNrZ2UxeHlYRzRnSUNBZ0lDQWdJR3hsZENCamFHRnVibVZzSUQwZ2RHaHBjeTVqYUdGdWJtVnNjMXR1WVcxbFhUdGNjbHh1SUNBZ0lDQWdJQ0JrWld4bGRHVWdkR2hwY3k1amFHRnVibVZzYzF0dVlXMWxYVHRjY2x4dUlDQWdJQ0FnSUNCeVpYUjFjbTRnWTJoaGJtNWxiRHRjY2x4dUlDQWdJSDFjY2x4dVhISmNiaUFnSUNCemRXSnpZM0pwWW1Vb0tTQjdYSEpjYmlBZ0lDQWdJQ0FnWm05eUlDaHNaWFFnYVNCcGJpQjBhR2x6TG1Ob1lXNXVaV3h6S1NCN1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUhSb2FYTXVZMmhoYm01bGJITmJhVjB1YzNWaWMyTnlhV0psS0NrN1hISmNiaUFnSUNBZ0lDQWdmVnh5WEc1Y2NseHVJQ0FnSUgxY2NseHVmVnh5WEc1Y2NseHVablZ1WTNScGIyNGdZM0psWVhSbFEyaGhibTVsYkNodVlXMWxMQ0J3ZFhOb1pYSXBJSHRjY2x4dUlDQWdJR2xtSUNodVlXMWxMbWx1WkdWNFQyWW9KM0J5YVhaaGRHVXRKeWtnUFQwOUlEQXBJSHRjY2x4dUlDQWdJQ0FnSUNCeVpYUjFjbTRnYm1WM0lGQnlhWFpoZEdWRGFHRnVibVZzS0c1aGJXVXNJSEIxYzJobGNpazdYSEpjYmlBZ0lDQjlJR1ZzYzJVZ2FXWWdLRzVoYldVdWFXNWtaWGhQWmlnbmNISmxjMlZ1WTJVdEp5a2dQVDA5SURBcElIdGNjbHh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdibVYzSUZCeVpYTmxibU5sUTJoaGJtNWxiQ2h1WVcxbExDQndkWE5vWlhJcE8xeHlYRzRnSUNBZ2ZTQmxiSE5sSUh0Y2NseHVJQ0FnSUNBZ0lDQnlaWFIxY200Z2JtVjNJRU5vWVc1dVpXd29ibUZ0WlN3Z2NIVnphR1Z5S1R0Y2NseHVJQ0FnSUgxY2NseHVmU0lzSW1sdGNHOXlkQ0I3UkdsemNHRjBZMmhsY24wZ1puSnZiU0JjSWk0dUwyVjJaVzUwY3k5a2FYTndZWFJqYUdWeVhDSTdYSEpjYmx4eVhHNWxlSEJ2Y25RZ1kyeGhjM01nVUhKbGMyVnVZMlZEYUdGdWJtVnNJR1Y0ZEdWdVpITWdSR2x6Y0dGMFkyaGxjaUI3WEhKY2JpQWdJQ0JqYjI1emRISjFZM1J2Y2lodVlXMWxMQ0J3ZFhOb1pYSXBJSHRjY2x4dUlDQWdJQ0FnSUNCemRYQmxjaWdwTzF4eVhHNWNjbHh1SUNBZ0lDQWdJQ0IwYUdsekxtNWhiV1VnUFNCdVlXMWxPMXh5WEc0Z0lDQWdJQ0FnSUhSb2FYTXVjSFZ6YUdWeUlEMGdjSFZ6YUdWeU8xeHlYRzRnSUNBZ0lDQWdJSFJvYVhNdVlYVjBhQ0E5SUc1MWJHdzdYSEpjYmx4eVhHNGdJQ0FnSUNBZ0lHbG1JQ2gwYUdsekxuQjFjMmhsY2k1emIyTnJaWFF1YzNSaGRHVWdQVDBnTVNrZ2UxeHlYRzRnSUNBZ0lDQWdJQ0FnSUNCMGFHbHpMbk4xWW5OamNtbGlaU2dwTzF4eVhHNGdJQ0FnSUNBZ0lIMWNjbHh1SUNBZ0lIMWNjbHh1WEhKY2JpQWdJQ0J6ZFdKelkzSnBZbVVvS1NCN1hISmNiaUFnSUNBZ0lDQWdkR2hwY3k1d2RYTm9aWEl1WVhWMGFDaDBhR2x6TG01aGJXVXNJQ2hsS1NBOVBpQjdYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lIUm9hWE11WVhWMGFDQTlJR1V1WkdGMFlTNWhkWFJvTzF4eVhHNWNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ2RHaHBjeTV3ZFhOb1pYSXVjMlZ1WkNoN1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQmxkbVZ1ZERvZ0ozTjFZbk5qY21saVpTY3NYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JrWVhSaE9pQjdYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1kyaGhibTVsYkRvZ2RHaHBjeTV1WVcxbExGeHlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdGMWRHZzZJSFJvYVhNdVlYVjBhQ3hjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQmphR0Z1Ym1Wc1gyUmhkR0U2SUdVdVpHRjBZUzVqYUdGdWJtVnNYMlJoZEdGY2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIMWNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ2ZTazdYSEpjYmlBZ0lDQWdJQ0FnZlNrN1hISmNiaUFnSUNCOVhISmNibjBpTENKcGJYQnZjblFnZTBScGMzQmhkR05vWlhKOUlHWnliMjBnWENJdUxpOWxkbVZ1ZEhNdlpHbHpjR0YwWTJobGNsd2lPMXh5WEc1Y2NseHVaWGh3YjNKMElHTnNZWE56SUZCeWFYWmhkR1ZEYUdGdWJtVnNJR1Y0ZEdWdVpITWdSR2x6Y0dGMFkyaGxjaUI3WEhKY2JpQWdJQ0JqYjI1emRISjFZM1J2Y2lodVlXMWxMQ0J3ZFhOb1pYSXBJSHRjY2x4dUlDQWdJQ0FnSUNCemRYQmxjaWdwTzF4eVhHNWNjbHh1SUNBZ0lDQWdJQ0IwYUdsekxtNWhiV1VnUFNCdVlXMWxPMXh5WEc0Z0lDQWdJQ0FnSUhSb2FYTXVjSFZ6YUdWeUlEMGdjSFZ6YUdWeU8xeHlYRzRnSUNBZ0lDQWdJSFJvYVhNdVlYVjBhQ0E5SUc1MWJHdzdYSEpjYmx4eVhHNGdJQ0FnSUNBZ0lHbG1JQ2gwYUdsekxuQjFjMmhsY2k1emIyTnJaWFF1YzNSaGRHVWdQVDBnTVNrZ2UxeHlYRzRnSUNBZ0lDQWdJQ0FnSUNCMGFHbHpMbk4xWW5OamNtbGlaU2dwTzF4eVhHNGdJQ0FnSUNBZ0lIMWNjbHh1SUNBZ0lIMWNjbHh1WEhKY2JpQWdJQ0J6ZFdKelkzSnBZbVVvS1NCN1hISmNiaUFnSUNBZ0lDQWdkR2hwY3k1d2RYTm9aWEl1WVhWMGFDaDBhR2x6TG01aGJXVXNJQ2hsS1NBOVBpQjdYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lIUm9hWE11WVhWMGFDQTlJR1V1WkdGMFlTNWhkWFJvTzF4eVhHNWNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ2RHaHBjeTV3ZFhOb1pYSXVjMlZ1WkNoN1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQmxkbVZ1ZERvZ0ozTjFZbk5qY21saVpTY3NYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JrWVhSaE9pQjdYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1kyaGhibTVsYkRvZ2RHaHBjeTV1WVcxbExGeHlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdGMWRHZzZJSFJvYVhNdVlYVjBhRnh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZlZ4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0I5S1R0Y2NseHVJQ0FnSUNBZ0lDQjlLVHRjY2x4dUlDQWdJSDFjY2x4dWZTSXNJbWx0Y0c5eWRDQjdSR2x6Y0dGMFkyaGxjbjBnWm5KdmJTQmNJaTR1TDJWMlpXNTBjeTlrYVhOd1lYUmphR1Z5WENJN1hISmNibHh5WEc1bGVIQnZjblFnWTJ4aGMzTWdVMjlqYTJWMElHVjRkR1Z1WkhNZ1JHbHpjR0YwWTJobGNpQjdYSEpjYmlBZ0lDQmpiMjV6ZEhKMVkzUnZjaWh3ZFhOb1pYSXNJR2h2YzNRcElIdGNjbHh1SUNBZ0lDQWdJQ0J6ZFhCbGNpZ3BPMXh5WEc1Y2NseHVJQ0FnSUNBZ0lDQjBhR2x6TG5CMWMyaGxjaUE5SUhCMWMyaGxjanRjY2x4dUlDQWdJQ0FnSUNCMGFHbHpMbk52WTJ0bGRDQTlJRzVsZHlCWFpXSlRiMk5yWlhRb2FHOXpkQ0FySUNjdkp5QXJJSFJvYVhNdWNIVnphR1Z5TG10bGVTazdYSEpjYmx4eVhHNGdJQ0FnSUNBZ0lIUm9hWE11WW1sdVpFeHBjM1JsYm1WeWN5Z3BPMXh5WEc0Z0lDQWdmVnh5WEc1Y2NseHVJQ0FnSUdKcGJtUk1hWE4wWlc1bGNuTW9LU0I3WEhKY2JpQWdJQ0FnSUNBZ2RHaHBjeTV6YjJOclpYUXViMjV2Y0dWdUlEMGdLQ2tnUFQ0Z2UxeHlYRzRnSUNBZ0lDQWdJQ0FnSUNCMGFHbHpMbTl1VDNCbGJpZ3BPMXh5WEc0Z0lDQWdJQ0FnSUgwN1hISmNiaUFnSUNBZ0lDQWdkR2hwY3k1emIyTnJaWFF1YjI1bGNuSnZjaUE5SUNobGNuSnZjaWtnUFQ0Z2UxeHlYRzRnSUNBZ0lDQWdJQ0FnSUNCMGFHbHpMbTl1UlhKeWIzSW9aWEp5YjNJcE8xeHlYRzRnSUNBZ0lDQWdJSDA3WEhKY2JpQWdJQ0FnSUNBZ2RHaHBjeTV6YjJOclpYUXViMjVqYkc5elpTQTlJQ2hqYkc5elpVVjJaVzUwS1NBOVBpQjdYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lIUm9hWE11YjI1RGJHOXpaU2hqYkc5elpVVjJaVzUwS1R0Y2NseHVJQ0FnSUNBZ0lDQjlPMXh5WEc0Z0lDQWdJQ0FnSUhSb2FYTXVjMjlqYTJWMExtOXViV1Z6YzJGblpTQTlJQ2h0WlhOellXZGxLU0E5UGlCN1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUhSb2FYTXViMjVOWlhOellXZGxLRzFsYzNOaFoyVXBPMXh5WEc0Z0lDQWdJQ0FnSUgwN1hISmNiaUFnSUNCOVhISmNibHh5WEc0Z0lDQWdiMjVQY0dWdUtDa2dlMXh5WEc0Z0lDQWdJQ0FnSUM4djVZaWQ1YWVMNTRxMjVvQ0JYSEpjYmlBZ0lDQWdJQ0FnZEdocGN5NXpkR0YwWlNBOUlEQTdYSEpjYmx4eVhHNGdJQ0FnSUNBZ0lIUm9hWE11WW1sdVpDZ25ZWFYwYUc5eWFYcGhkR2x2Ymw5emRXTmpaWE56Snl3Z0tHVXBJRDArSUh0Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnZEdocGN5NXpiMk5yWlhRdWMyOWphMlYwWDJsa0lEMGdaUzV6YjJOclpYUmZhV1E3WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJSFJvYVhNdWMzUmhkR1VnUFNBeE8xeHlYRzVjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdMeS9vcnFMcG1JVmNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ2RHaHBjeTV3ZFhOb1pYSXVZMmhoYm01bGJITXVjM1ZpYzJOeWFXSmxLQ2s3WEhKY2JpQWdJQ0FnSUNBZ2ZTazdYSEpjYmx4eVhHNGdJQ0FnSUNBZ0lIUm9hWE11WW1sdVpDZ25ZWFYwYUc5eWFYcGhkR2x2Ymw5bGNuSnZjaWNzSUNobEtTQTlQaUI3WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJSFJvYVhNdWMzUmhkR1VnUFNBdE1UdGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ1kyOXVjMjlzWlM1bGNuSnZjaWhsTG1WeWNtOXlLVnh5WEc0Z0lDQWdJQ0FnSUgwcE8xeHlYRzVjY2x4dUlDQWdJQ0FnSUNCMGFHbHpMbk5sYm1Rb2UxeHlYRzRnSUNBZ0lDQWdJQ0FnSUNCbGRtVnVkRG9nSjJGMWRHaHZjbWw2WVhScGIyNG5YSEpjYmlBZ0lDQWdJQ0FnZlNrN1hISmNiaUFnSUNCOVhISmNibHh5WEc0Z0lDQWdiMjVGY25KdmNpaGxjbkp2Y2lrZ2UxeHlYRzRnSUNBZ0lDQWdJR052Ym5OdmJHVXVaWEp5YjNJb1pYSnliM0lwWEhKY2JpQWdJQ0I5WEhKY2JseHlYRzRnSUNBZ2IyNURiRzl6WlNoamJHOXpaVVYyWlc1MEtTQjdYSEpjYmlBZ0lDQWdJQ0FnYVdZZ0tIUm9hWE11YzI5amEyVjBMbkpsWVdSNVUzUmhkR1VnUFQwZ1YyVmlVMjlqYTJWMExrTk1UMU5GUkNrZ2UxeHlYRzRnSUNBZ0lDQWdJQ0FnSUNCcFppQW9ZMnh2YzJWRmRtVnVkQzUwZVhCbElEMDlJQ2RqYkc5elpTY3BJSHRjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdOdmJuTnZiR1V1WlhKeWIzSW9KM052WTJ0bGRPYWNqZVdLb2VXM3N1YVdyZVc4Z0NFaEp5bGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ2ZTQmxiSE5sSUdsbUlDaGpiRzl6WlVWMlpXNTBMblI1Y0dVZ1BUMGdKMjFsYzNOaFoyVW5LU0I3WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCamIyNXpiMnhsTG1WeWNtOXlLR05zYjNObFJYWmxiblF1WkdGMFlTbGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ2ZTQmxiSE5sSUh0Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHTnZibk52YkdVdVpYSnliM0lvSitXM3N1YVdyZVc4Z0NFaEp5bGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ2ZWeHlYRzRnSUNBZ0lDQWdJSDFjY2x4dUlDQWdJSDFjY2x4dVhISmNiaUFnSUNCdmJrMWxjM05oWjJVb2JXVnpjMkZuWlNrZ2UxeHlYRzRnSUNBZ0lDQWdJR3hsZENCbFJHRjBZU0E5SUVwVFQwNHVjR0Z5YzJVb2JXVnpjMkZuWlM1a1lYUmhLVHRjY2x4dUlDQWdJQ0FnSUNCc1pYUWdaWFpsYm5RZ1BTQmxSR0YwWVM1bGRtVnVkRHRjY2x4dUlDQWdJQ0FnSUNCc1pYUWdaR0YwWVNBOUlHVkVZWFJoTG1SaGRHRTdYSEpjYmx4eVhHNGdJQ0FnSUNBZ0lHbG1JQ2hsUkdGMFlTNWphR0Z1Ym1Wc0lDRTlQU0IxYm1SbFptbHVaV1FwSUh0Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnZEdocGN5NXdkWE5vWlhJdVkyaGhibTVsYkhNdVptbHVaQ2hsUkdGMFlTNWphR0Z1Ym1Wc0tTNWxiV2wwS0dWMlpXNTBMQ0JrWVhSaEtUdGNjbHh1SUNBZ0lDQWdJQ0I5SUdWc2MyVWdlMXh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQjBhR2x6TG1WdGFYUW9aWFpsYm5Rc0lHUmhkR0VwTzF4eVhHNGdJQ0FnSUNBZ0lIMWNjbHh1WEhKY2JpQWdJQ0I5WEhKY2JseHlYRzRnSUNBZ2MyVnVaQ2hxYzI5dUtTQjdYSEpjYmlBZ0lDQWdJQ0FnYVdZZ0tIUm9hWE11YzNSaGRHVWdJVDA5SUMweEtTQjdYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lIUm9hWE11YzI5amEyVjBMbk5sYm1Rb1NsTlBUaTV6ZEhKcGJtZHBabmtvYW5OdmJpa3BYSEpjYmlBZ0lDQWdJQ0FnZlZ4eVhHNGdJQ0FnZlZ4eVhHNTlJaXdpWlhod2IzSjBJR05zWVhOeklFTmhiR3hpWVdOclVtVm5hWE4wY25rZ2UxeHlYRzRnSUNBZ1kyOXVjM1J5ZFdOMGIzSW9LU0I3WEhKY2JpQWdJQ0FnSUNBZ2RHaHBjeTVmWTJGc2JHSmhZMnR6SUQwZ2UzMDdYSEpjYmlBZ0lDQjlYSEpjYmx4eVhHNGdJQ0FnWjJWMEtHNWhiV1VwSUh0Y2NseHVJQ0FnSUNBZ0lDQnlaWFIxY200Z2RHaHBjeTVmWTJGc2JHSmhZMnR6VzNCeVpXWnBlQ2h1WVcxbEtWMDdYSEpjYmlBZ0lDQjlYSEpjYmx4eVhHNGdJQ0FnWVdSa0tHNWhiV1VzSUdOaGJHeGlZV05yTENCamIyNTBaWGgwS1NCN1hISmNiaUFnSUNBZ0lDQWdiR1YwSUhCeVpXWnBlR1ZrUlhabGJuUk9ZVzFsSUQwZ2NISmxabWw0S0c1aGJXVXBPMXh5WEc0Z0lDQWdJQ0FnSUhSb2FYTXVYMk5oYkd4aVlXTnJjMXR3Y21WbWFYaGxaRVYyWlc1MFRtRnRaVjBnUFNCMGFHbHpMbDlqWVd4c1ltRmphM05iY0hKbFptbDRaV1JGZG1WdWRFNWhiV1ZkSUh4OElGdGRPMXh5WEc0Z0lDQWdJQ0FnSUhSb2FYTXVYMk5oYkd4aVlXTnJjMXR3Y21WbWFYaGxaRVYyWlc1MFRtRnRaVjB1Y0hWemFDaDdYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lHWnVPaUJqWVd4c1ltRmpheXhjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdZMjl1ZEdWNGREb2dZMjl1ZEdWNGRGeHlYRzRnSUNBZ0lDQWdJSDBwTzF4eVhHNGdJQ0FnZlZ4eVhHNWNjbHh1SUNBZ0lISmxiVzkyWlNodVlXMWxMQ0JqWVd4c1ltRmpheXdnWTI5dWRHVjRkQ2tnZTF4eVhHNGdJQ0FnSUNBZ0lHbG1JQ2doYm1GdFpTQW1KaUFoWTJGc2JHSmhZMnNnSmlZZ0lXTnZiblJsZUhRcElIdGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ2RHaHBjeTVmWTJGc2JHSmhZMnR6SUQwZ2UzMDdYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lISmxkSFZ5Ymp0Y2NseHVJQ0FnSUNBZ0lDQjlYSEpjYmx4eVhHNGdJQ0FnSUNBZ0lIWmhjaUJ1WVcxbGN5QTlJRzVoYldVZ1B5QmJjSEpsWm1sNEtHNWhiV1VwWFNBNklFOWlhbVZqZEM1clpYbHpLSFJvYVhNdVgyTmhiR3hpWVdOcmN5azdYSEpjYmx4eVhHNGdJQ0FnSUNBZ0lHbG1JQ2hqWVd4c1ltRmpheUI4ZkNCamIyNTBaWGgwS1NCN1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUhSb2FYTXVjbVZ0YjNabFEyRnNiR0poWTJzb2JtRnRaWE1zSUdOaGJHeGlZV05yTENCamIyNTBaWGgwS1R0Y2NseHVJQ0FnSUNBZ0lDQjlJR1ZzYzJVZ2UxeHlYRzRnSUNBZ0lDQWdJQ0FnSUNCMGFHbHpMbkpsYlc5MlpVRnNiRU5oYkd4aVlXTnJjeWh1WVcxbGN5azdYSEpjYmlBZ0lDQWdJQ0FnZlZ4eVhHNGdJQ0FnZlZ4eVhHNWNjbHh1SUNBZ0lISmxiVzkyWlVOaGJHeGlZV05yS0c1aGJXVnpMQ0JqWVd4c1ltRmpheXdnWTI5dWRHVjRkQ2tnZTF4eVhHNGdJQ0FnSUNBZ0lHWnZjaUFvYkdWMElHNWhiV1VnYVc0Z2JtRnRaWE1wSUh0Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnWm05eUlDaHNaWFFnYTJWNUlHbHVJSFJvYVhNdVgyTmhiR3hpWVdOcmMxdHVZVzFsWFNrZ2UxeHlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdhV1lnS0hSb2FYTXVYMk5oYkd4aVlXTnJjMXR1WVcxbFhWdHJaWGxkTG1adUlEMDlJR05oYkd4aVlXTnJJSHg4SUhSb2FYTXVYMk5oYkd4aVlXTnJjMXR1WVcxbFhWdHJaWGxkTG1OdmJuUmxlSFFnUFQwZ1kyOXVkR1Y0ZENrZ2UxeHlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdSbGJHVjBaU0IwYUdsekxsOWpZV3hzWW1GamEzTmJibUZ0WlYxYmEyVjVYVHRjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUgxY2NseHVJQ0FnSUNBZ0lDQWdJQ0FnZlZ4eVhHNWNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ2FXWWdLSFJvYVhNdVgyTmhiR3hpWVdOcmMxdHVZVzFsWFM1c1pXNW5kR2dnUFQwOUlEQXBJSHRjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdSbGJHVjBaU0IwYUdsekxsOWpZV3hzWW1GamEzTmJibUZ0WlYwN1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUgxY2NseHVJQ0FnSUNBZ0lDQjlYSEpjYmlBZ0lDQjlYSEpjYmx4eVhHNGdJQ0FnY21WdGIzWmxRV3hzUTJGc2JHSmhZMnR6S0c1aGJXVnpLU0I3WEhKY2JpQWdJQ0FnSUNBZ1ptOXlJQ2hzWlhRZ2JtRnRaU0JwYmlCdVlXMWxjeWtnZTF4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0JrWld4bGRHVWdkR2hwY3k1ZlkyRnNiR0poWTJ0elcyNWhiV1ZkTzF4eVhHNGdJQ0FnSUNBZ0lIMWNjbHh1SUNBZ0lIMWNjbHh1ZlZ4eVhHNWNjbHh1Wm5WdVkzUnBiMjRnY0hKbFptbDRLRzVoYldVcElIdGNjbHh1SUNBZ0lISmxkSFZ5YmlCY0lsOWNJaUFySUc1aGJXVTdYSEpjYm4waUxDSnBiWEJ2Y25RZ2UwTmhiR3hpWVdOclVtVm5hWE4wY25sOUlHWnliMjBnSnk0dlkyRnNiR0poWTJ0ZmNtVm5hWE4wY25rbk8xeHlYRzVjY2x4dVpYaHdiM0owSUdOc1lYTnpJRVJwYzNCaGRHTm9aWElnZTF4eVhHNGdJQ0FnWTI5dWMzUnlkV04wYjNJb0tTQjdYSEpjYmlBZ0lDQWdJQ0FnZEdocGN5NWpZV3hzWW1GamEzTWdQU0J1WlhjZ1EyRnNiR0poWTJ0U1pXZHBjM1J5ZVNncE8xeHlYRzRnSUNBZ0lDQWdJSFJvYVhNdVoyeHZZbUZzWDJOaGJHeGlZV05yY3lBOUlGdGRPMXh5WEc0Z0lDQWdmVnh5WEc1Y2NseHVJQ0FnSUdKcGJtUW9aWFpsYm5ST1lXMWxMQ0JqWVd4c1ltRmpheXdnWTI5dWRHVjRkQ2tnZTF4eVhHNGdJQ0FnSUNBZ0lIUm9hWE11WTJGc2JHSmhZMnR6TG1Ga1pDaGxkbVZ1ZEU1aGJXVXNJR05oYkd4aVlXTnJMQ0JqYjI1MFpYaDBLVHRjY2x4dUlDQWdJQ0FnSUNCeVpYUjFjbTRnZEdocGN6dGNjbHh1SUNBZ0lIMWNjbHh1WEhKY2JpQWdJQ0JpYVc1a1gyZHNiMkpoYkNoallXeHNZbUZqYXlrZ2UxeHlYRzRnSUNBZ0lDQWdJSFJvYVhNdVoyeHZZbUZzWDJOaGJHeGlZV05yY3k1d2RYTm9LR05oYkd4aVlXTnJLVHRjY2x4dUlDQWdJQ0FnSUNCeVpYUjFjbTRnZEdocGN6dGNjbHh1SUNBZ0lIMWNjbHh1WEhKY2JpQWdJQ0IxYm1KcGJtUW9aWFpsYm5ST1lXMWxMQ0JqWVd4c1ltRmpheXdnWTI5dWRHVjRkQ2tnZTF4eVhHNGdJQ0FnSUNBZ0lIUm9hWE11WTJGc2JHSmhZMnR6TG5KbGJXOTJaU2hsZG1WdWRFNWhiV1VzSUdOaGJHeGlZV05yTENCamIyNTBaWGgwS1R0Y2NseHVJQ0FnSUNBZ0lDQnlaWFIxY200Z2RHaHBjenRjY2x4dUlDQWdJSDFjY2x4dVhISmNiaUFnSUNCMWJtSnBibVJmWjJ4dlltRnNLR05oYkd4aVlXTnJLU0I3WEhKY2JpQWdJQ0FnSUNBZ2FXWWdLQ0ZqWVd4c1ltRmpheWtnZTF4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0IwYUdsekxtZHNiMkpoYkY5allXeHNZbUZqYTNNZ1BTQmJYVHRjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdjbVYwZFhKdUlIUm9hWE03WEhKY2JpQWdJQ0FnSUNBZ2ZWeHlYRzVjY2x4dUlDQWdJQ0FnSUNCbWIzSWdLR3hsZENCcElHbHVJSFJvYVhNdVoyeHZZbUZzWDJOaGJHeGlZV05yY3lrZ2UxeHlYRzRnSUNBZ0lDQWdJQ0FnSUNCcFppQW9ZMkZzYkdKaFkyc2dQVDBnZEdocGN5NW5iRzlpWVd4ZlkyRnNiR0poWTJ0elcybGRLU0I3WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCa1pXeGxkR1VnZEdocGN5NW5iRzlpWVd4ZlkyRnNiR0poWTJ0elcybGRPMXh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQjlYSEpjYmlBZ0lDQWdJQ0FnZlZ4eVhHNGdJQ0FnSUNBZ0lISmxkSFZ5YmlCMGFHbHpPMXh5WEc0Z0lDQWdmVnh5WEc1Y2NseHVJQ0FnSUhWdVltbHVaRjloYkd3b0tTQjdYSEpjYmlBZ0lDQWdJQ0FnZEdocGN5NTFibUpwYm1Rb0tUdGNjbHh1SUNBZ0lDQWdJQ0IwYUdsekxuVnVZbWx1WkY5bmJHOWlZV3dvS1R0Y2NseHVJQ0FnSUNBZ0lDQnlaWFIxY200Z2RHaHBjenRjY2x4dUlDQWdJSDFjY2x4dVhISmNiaUFnSUNCbGJXbDBLR1YyWlc1MFRtRnRaU3dnWkdGMFlTa2dlMXh5WEc0Z0lDQWdJQ0FnSUdadmNpQW9iR1YwSUdrZ1BTQXdPeUJwSUR3Z2RHaHBjeTVuYkc5aVlXeGZZMkZzYkdKaFkydHpMbXhsYm1kMGFEc2dhU3NyS1NCN1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUhSb2FYTXVaMnh2WW1Gc1gyTmhiR3hpWVdOcmMxdHBYU2hsZG1WdWRFNWhiV1VzSUdSaGRHRXBPMXh5WEc0Z0lDQWdJQ0FnSUgxY2NseHVYSEpjYmlBZ0lDQWdJQ0FnZG1GeUlHTmhiR3hpWVdOcmN5QTlJSFJvYVhNdVkyRnNiR0poWTJ0ekxtZGxkQ2hsZG1WdWRFNWhiV1VwTzF4eVhHNGdJQ0FnSUNBZ0lHbG1JQ2hqWVd4c1ltRmphM01nSmlZZ1kyRnNiR0poWTJ0ekxteGxibWQwYUNBK0lEQXBJSHRjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdabTl5SUNoc1pYUWdhU0E5SURBN0lHa2dQQ0JqWVd4c1ltRmphM011YkdWdVozUm9PeUJwS3lzcElIdGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR05oYkd4aVlXTnJjMXRwWFM1bWJpNWpZV3hzS0dOaGJHeGlZV05yYzF0cFhTNWpiMjUwWlhoMExDQmtZWFJoS1R0Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnZlZ4eVhHNGdJQ0FnSUNBZ0lIMWNjbHh1WEhKY2JpQWdJQ0FnSUNBZ2NtVjBkWEp1SUhSb2FYTTdYSEpjYmlBZ0lDQjlYSEpjYm4waUxDSnBiWEJ2Y25RZ2UxTnZZMnRsZEgwZ1puSnZiU0FuTGk5amIyNXVaV04wYVc5dUwzTnZZMnRsZENjN1hISmNibWx0Y0c5eWRDQjdSR2x6Y0dGMFkyaGxjbjBnWm5KdmJTQW5MaTlsZG1WdWRITXZaR2x6Y0dGMFkyaGxjaWM3WEhKY2JtbHRjRzl5ZENCN1RXRnVibUZuWlhKOUlHWnliMjBnWENJdUwyTm9ZVzV1Wld4ekwyMWhibTVoWjJWeVhDSTdYSEpjYm1sdGNHOXlkQ0JoZUdsdmN5Qm1jbTl0SUZ3aVlYaHBiM05jSWp0Y2NseHVYSEpjYm1WNGNHOXlkQ0JqYkdGemN5QlFkWE5vWlhJZ2UxeHlYRzRnSUNBZ1kyOXVjM1J5ZFdOMGIzSW9ZWEJ3WDJ0bGVTd2diM0IwYVc5dWN5a2dlMXh5WEc0Z0lDQWdJQ0FnSUhSb2FYTXVZMmhsWTJ0QmNIQkxaWGtvWVhCd1gydGxlU2s3WEhKY2JseHlYRzRnSUNBZ0lDQWdJSFJvYVhNdWEyVjVJRDBnWVhCd1gydGxlVHRjY2x4dUlDQWdJQ0FnSUNCMGFHbHpMbTl3ZEdsdmJuTWdQU0J2Y0hScGIyNXpJSHg4SUh0OU8xeHlYRzRnSUNBZ0lDQWdJSFJvYVhNdVpHbHpjR0YwWTJobGNpQTlJRzVsZHlCRWFYTndZWFJqYUdWeUtDazdYSEpjYmlBZ0lDQWdJQ0FnZEdocGN5NWphR0Z1Ym1Wc2N5QTlJRzVsZHlCTllXNXVZV2RsY2lncE8xeHlYRzVjY2x4dUlDQWdJQ0FnSUNCMGFHbHpMbU52Ym01bFkzUW9LVHRjY2x4dUlDQWdJSDFjY2x4dVhISmNiaUFnSUNCamIyNXVaV04wS0NrZ2UxeHlYRzRnSUNBZ0lDQWdJSFJvYVhNdWMyOWphMlYwSUQwZ2JtVjNJRk52WTJ0bGRDaDBhR2x6TENCMGFHbHpMbTl3ZEdsdmJuTXVhRzl6ZENrN1hISmNiaUFnSUNCOVhISmNibHh5WEc0Z0lDQWdjM1ZpYzJOeWFXSmxLR05vWVc1dVpXeGZibUZ0WlNrZ2UxeHlYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQjBhR2x6TG1Ob1lXNXVaV3h6TG1Ga1pDaGphR0Z1Ym1Wc1gyNWhiV1VzSUhSb2FYTXBPMXh5WEc0Z0lDQWdmVnh5WEc1Y2NseHVJQ0FnSUhWdWMzVmljMk55YVdKbEtHTm9ZVzV1Wld4ZmJtRnRaU2tnZTF4eVhHNGdJQ0FnSUNBZ0lIUm9hWE11WTJoaGJtNWxiSE11Y21WdGIzWmxLR05vWVc1dVpXeGZibUZ0WlNrN1hISmNiaUFnSUNCOVhISmNibHh5WEc0Z0lDQWdaMlYwVTI5amEyVjBTV1FvS1NCN1hISmNiaUFnSUNBZ0lDQWdjbVYwZFhKdUlIUm9hWE11YzI5amEyVjBMbk52WTJ0bGRDNXpiMk5yWlhSZmFXUTdYSEpjYmlBZ0lDQjlYSEpjYmx4eVhHNGdJQ0FnYzJWdVpDaHFjMjl1S1NCN1hISmNiaUFnSUNBZ0lDQWdkR2hwY3k1emIyTnJaWFF1YzJWdVpDaHFjMjl1S1R0Y2NseHVJQ0FnSUgxY2NseHVYSEpjYmlBZ0lDQmphR1ZqYTBGd2NFdGxlU2hyWlhrcElIdGNjbHh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdkSEoxWlR0Y2NseHVJQ0FnSUgxY2NseHVYSEpjYmlBZ0lDQmhkWFJvS0c1aGJXVXNJR05oYkd4aVlXTnJLU0I3WEhKY2JpQWdJQ0FnSUNBZ2JHVjBJRzFsZEdodlpDQTlJSFJvYVhNdWIzQjBhVzl1Y3k1aGRYUm9MbTFsZEdodlpDQjhmQ0FuY0c5emRDYzdYSEpjYmlBZ0lDQWdJQ0FnYkdWMElHUmhkR0VnUFNCN2ZUdGNjbHh1SUNBZ0lDQWdJQ0JzWlhRZ2NHRnlZVzF6SUQwZ2UzMDdYSEpjYmx4eVhHNGdJQ0FnSUNBZ0lHbG1JQ2h0WlhSb2IyUWdQVDBnSjNCdmMzUW5LU0I3WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJR1JoZEdFZ1BTQlBZbXBsWTNRdVlYTnphV2R1S0h0Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHTm9ZVzV1Wld4ZmJtRnRaVG9nYm1GdFpTeGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSE52WTJ0bGRGOXBaRG9nZEdocGN5NW5aWFJUYjJOclpYUkpaQ2dwWEhKY2JpQWdJQ0FnSUNBZ0lDQWdJSDBwTzF4eVhHNGdJQ0FnSUNBZ0lIMGdaV3h6WlNCN1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUhCaGNtRnRjeUE5SUU5aWFtVmpkQzVoYzNOcFoyNG9lMXh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnWTJoaGJtNWxiRjl1WVcxbE9pQnVZVzFsTEZ4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2MyOWphMlYwWDJsa09pQjBhR2x6TG1kbGRGTnZZMnRsZEVsa0tDbGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ2ZTazdYSEpjYmlBZ0lDQWdJQ0FnZlZ4eVhHNWNjbHh1SUNBZ0lDQWdJQ0JoZUdsdmN5aDdYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lIVnliRG9nZEdocGN5NXZjSFJwYjI1ekxtRjFkR2d1ZFhKc0xGeHlYRzRnSUNBZ0lDQWdJQ0FnSUNCdFpYUm9iMlE2SUcxbGRHaHZaQ3hjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdhR1ZoWkdWeWN6b2dkR2hwY3k1dmNIUnBiMjV6TG1GMWRHZ3VhR1ZoWkdWeWN5QjhmQ0I3ZlN4Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnY0dGeVlXMXpPaUJ3WVhKaGJYTXNYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lHUmhkR0U2SUdSaGRHRmNjbHh1SUNBZ0lDQWdJQ0I5S1M1MGFHVnVLQ2hsS1NBOVBpQjdYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lHTmhiR3hpWVdOcktHVXBYSEpjYmlBZ0lDQWdJQ0FnZlNrdVkyRjBZMmdvS0dVcElEMCtJSHRjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdZMjl1YzI5c1pTNWxjbkp2Y2lnbjU2ZUI1cHlKNmFLUjZZR1Q1cDJENlptUTVMaU42TGF6SVNjcE8xeHlYRzRnSUNBZ0lDQWdJSDBwTzF4eVhHNGdJQ0FnZlZ4eVhHNTlYSEpjYmx4eVhHNTNhVzVrYjNjdVVIVnphR1Z5SUQwZ1VIVnphR1Z5T3lKZExDSnpiM1Z5WTJWU2IyOTBJam9pSW4wPSIsImltcG9ydCB7RGlzcGF0Y2hlcn0gZnJvbSBcIi4uL2V2ZW50cy9kaXNwYXRjaGVyXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgQ2hhbm5lbCBleHRlbmRzIERpc3BhdGNoZXIge1xyXG4gICAgY29uc3RydWN0b3IobmFtZSwgcHVzaGVyKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuXHJcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICAgICAgICB0aGlzLnB1c2hlciA9IHB1c2hlcjtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMucHVzaGVyLnNvY2tldC5zdGF0ZSA9PSAxKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3Vic2NyaWJlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHN1YnNjcmliZSgpIHtcclxuICAgICAgICB0aGlzLnB1c2hlci5zZW5kKHtcclxuICAgICAgICAgICAgZXZlbnQ6ICdzdWJzY3JpYmUnLFxyXG4gICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICBjaGFubmVsOiB0aGlzLm5hbWVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHtEaXNwYXRjaGVyfSBmcm9tIFwiLi4vZXZlbnRzL2Rpc3BhdGNoZXJcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBQcmVzZW5jZUNoYW5uZWwgZXh0ZW5kcyBEaXNwYXRjaGVyIHtcclxuICAgIGNvbnN0cnVjdG9yKG5hbWUsIHB1c2hlcikge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcblxyXG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICAgICAgdGhpcy5wdXNoZXIgPSBwdXNoZXI7XHJcbiAgICAgICAgdGhpcy5hdXRoID0gbnVsbDtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMucHVzaGVyLnNvY2tldC5zdGF0ZSA9PSAxKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3Vic2NyaWJlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHN1YnNjcmliZSgpIHtcclxuICAgICAgICB0aGlzLnB1c2hlci5hdXRoKHRoaXMubmFtZSwgKGUpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5hdXRoID0gZS5kYXRhLmF1dGg7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnB1c2hlci5zZW5kKHtcclxuICAgICAgICAgICAgICAgIGV2ZW50OiAnc3Vic2NyaWJlJyxcclxuICAgICAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgICAgICBjaGFubmVsOiB0aGlzLm5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgYXV0aDogdGhpcy5hdXRoLFxyXG4gICAgICAgICAgICAgICAgICAgIGNoYW5uZWxfZGF0YTogZS5kYXRhLmNoYW5uZWxfZGF0YVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufSIsImltcG9ydCB7RGlzcGF0Y2hlcn0gZnJvbSBcIi4uL2V2ZW50cy9kaXNwYXRjaGVyXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgUHJpdmF0ZUNoYW5uZWwgZXh0ZW5kcyBEaXNwYXRjaGVyIHtcclxuICAgIGNvbnN0cnVjdG9yKG5hbWUsIHB1c2hlcikge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcblxyXG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICAgICAgdGhpcy5wdXNoZXIgPSBwdXNoZXI7XHJcbiAgICAgICAgdGhpcy5hdXRoID0gbnVsbDtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMucHVzaGVyLnNvY2tldC5zdGF0ZSA9PSAxKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3Vic2NyaWJlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHN1YnNjcmliZSgpIHtcclxuICAgICAgICB0aGlzLnB1c2hlci5hdXRoKHRoaXMubmFtZSwgKGUpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5hdXRoID0gZS5kYXRhLmF1dGg7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnB1c2hlci5zZW5kKHtcclxuICAgICAgICAgICAgICAgIGV2ZW50OiAnc3Vic2NyaWJlJyxcclxuICAgICAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgICAgICBjaGFubmVsOiB0aGlzLm5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgYXV0aDogdGhpcy5hdXRoXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59IiwiZXhwb3J0IGNsYXNzIENhbGxiYWNrUmVnaXN0cnkge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5fY2FsbGJhY2tzID0ge307XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0KG5hbWUpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fY2FsbGJhY2tzW3ByZWZpeChuYW1lKV07XHJcbiAgICB9XHJcblxyXG4gICAgYWRkKG5hbWUsIGNhbGxiYWNrLCBjb250ZXh0KSB7XHJcbiAgICAgICAgbGV0IHByZWZpeGVkRXZlbnROYW1lID0gcHJlZml4KG5hbWUpO1xyXG4gICAgICAgIHRoaXMuX2NhbGxiYWNrc1twcmVmaXhlZEV2ZW50TmFtZV0gPSB0aGlzLl9jYWxsYmFja3NbcHJlZml4ZWRFdmVudE5hbWVdIHx8IFtdO1xyXG4gICAgICAgIHRoaXMuX2NhbGxiYWNrc1twcmVmaXhlZEV2ZW50TmFtZV0ucHVzaCh7XHJcbiAgICAgICAgICAgIGZuOiBjYWxsYmFjayxcclxuICAgICAgICAgICAgY29udGV4dDogY29udGV4dFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbW92ZShuYW1lLCBjYWxsYmFjaywgY29udGV4dCkge1xyXG4gICAgICAgIGlmICghbmFtZSAmJiAhY2FsbGJhY2sgJiYgIWNvbnRleHQpIHtcclxuICAgICAgICAgICAgdGhpcy5fY2FsbGJhY2tzID0ge307XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciBuYW1lcyA9IG5hbWUgPyBbcHJlZml4KG5hbWUpXSA6IE9iamVjdC5rZXlzKHRoaXMuX2NhbGxiYWNrcyk7XHJcblxyXG4gICAgICAgIGlmIChjYWxsYmFjayB8fCBjb250ZXh0KSB7XHJcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlQ2FsbGJhY2sobmFtZXMsIGNhbGxiYWNrLCBjb250ZXh0KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnJlbW92ZUFsbENhbGxiYWNrcyhuYW1lcyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJlbW92ZUNhbGxiYWNrKG5hbWVzLCBjYWxsYmFjaywgY29udGV4dCkge1xyXG4gICAgICAgIGZvciAobGV0IG5hbWUgaW4gbmFtZXMpIHtcclxuICAgICAgICAgICAgZm9yIChsZXQga2V5IGluIHRoaXMuX2NhbGxiYWNrc1tuYW1lXSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX2NhbGxiYWNrc1tuYW1lXVtrZXldLmZuID09IGNhbGxiYWNrIHx8IHRoaXMuX2NhbGxiYWNrc1tuYW1lXVtrZXldLmNvbnRleHQgPT0gY29udGV4dCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZSB0aGlzLl9jYWxsYmFja3NbbmFtZV1ba2V5XTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuX2NhbGxiYWNrc1tuYW1lXS5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgICAgIGRlbGV0ZSB0aGlzLl9jYWxsYmFja3NbbmFtZV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmVtb3ZlQWxsQ2FsbGJhY2tzKG5hbWVzKSB7XHJcbiAgICAgICAgZm9yIChsZXQgbmFtZSBpbiBuYW1lcykge1xyXG4gICAgICAgICAgICBkZWxldGUgdGhpcy5fY2FsbGJhY2tzW25hbWVdO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gcHJlZml4KG5hbWUpIHtcclxuICAgIHJldHVybiBcIl9cIiArIG5hbWU7XHJcbn0iLCJpbXBvcnQge0NhbGxiYWNrUmVnaXN0cnl9IGZyb20gJy4vY2FsbGJhY2tfcmVnaXN0cnknO1xyXG5cclxuZXhwb3J0IGNsYXNzIERpc3BhdGNoZXIge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5jYWxsYmFja3MgPSBuZXcgQ2FsbGJhY2tSZWdpc3RyeSgpO1xyXG4gICAgICAgIHRoaXMuZ2xvYmFsX2NhbGxiYWNrcyA9IFtdO1xyXG4gICAgfVxyXG5cclxuICAgIGJpbmQoZXZlbnROYW1lLCBjYWxsYmFjaywgY29udGV4dCkge1xyXG4gICAgICAgIHRoaXMuY2FsbGJhY2tzLmFkZChldmVudE5hbWUsIGNhbGxiYWNrLCBjb250ZXh0KTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBiaW5kX2dsb2JhbChjYWxsYmFjaykge1xyXG4gICAgICAgIHRoaXMuZ2xvYmFsX2NhbGxiYWNrcy5wdXNoKGNhbGxiYWNrKTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICB1bmJpbmQoZXZlbnROYW1lLCBjYWxsYmFjaywgY29udGV4dCkge1xyXG4gICAgICAgIHRoaXMuY2FsbGJhY2tzLnJlbW92ZShldmVudE5hbWUsIGNhbGxiYWNrLCBjb250ZXh0KTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICB1bmJpbmRfZ2xvYmFsKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgaWYgKCFjYWxsYmFjaykge1xyXG4gICAgICAgICAgICB0aGlzLmdsb2JhbF9jYWxsYmFja3MgPSBbXTtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmb3IgKGxldCBpIGluIHRoaXMuZ2xvYmFsX2NhbGxiYWNrcykge1xyXG4gICAgICAgICAgICBpZiAoY2FsbGJhY2sgPT0gdGhpcy5nbG9iYWxfY2FsbGJhY2tzW2ldKSB7XHJcbiAgICAgICAgICAgICAgICBkZWxldGUgdGhpcy5nbG9iYWxfY2FsbGJhY2tzW2ldO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHVuYmluZF9hbGwoKSB7XHJcbiAgICAgICAgdGhpcy51bmJpbmQoKTtcclxuICAgICAgICB0aGlzLnVuYmluZF9nbG9iYWwoKTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBlbWl0KGV2ZW50TmFtZSwgZGF0YSkge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5nbG9iYWxfY2FsbGJhY2tzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZ2xvYmFsX2NhbGxiYWNrc1tpXShldmVudE5hbWUsIGRhdGEpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIGNhbGxiYWNrcyA9IHRoaXMuY2FsbGJhY2tzLmdldChldmVudE5hbWUpO1xyXG4gICAgICAgIGlmIChjYWxsYmFja3MgJiYgY2FsbGJhY2tzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjYWxsYmFja3MubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGNhbGxiYWNrc1tpXS5mbi5jYWxsKGNhbGxiYWNrc1tpXS5jb250ZXh0LCBkYXRhKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQge0VjaG99IGZyb20gJy4vZWNobydcclxuXHJcbndpbmRvdy5FY2hvID0gbmV3IEVjaG8oJ2E4MjM5M2Q4ODZhMGU2ZGRmYWU1Jywge1xyXG4gICAgaG9zdDogJ3dzOi8vMTkyLjE2OC4xMC4xMDo4MDgxJyxcclxuICAgIGF1dGg6IHtcclxuICAgICAgICBtZXRob2Q6ICdwb3N0JyxcclxuICAgICAgICB1cmw6ICdodHRwOi8vdGVzdHMudGVzdC9hcGkvcHVzaGVyL2F1dGgnLFxyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICAgJ0F1dGhvcml6YXRpb24nOiAnQmVhcmVyIGV5SjBlWEFpT2lKS1YxUWlMQ0poYkdjaU9pSklVekkxTmlKOS5leUpwYzNNaU9pSm9kSFJ3T2x3dlhDOTBaWE4wY3k1MFpYTjBJaXdpYVdGMElqb3hOVE01TWpVeE5UY3pMQ0psZUhBaU9qRTFNemt5TlRVeE56TXNJbTVpWmlJNk1UVXpPVEkxTVRVM015d2lhblJwSWpvaU1sSlZSVnBpV0dSaU9VRTVSME5xYlNJc0luTjFZaUk2TVN3aWNISjJJam9pT0RkbE1HRm1NV1ZtT1daa01UVTRNVEptWkdWak9UY3hOVE5oTVRSbE1HSXdORGMxTkRaaFlTSjkuY3ZnTS1Qb3VFU2Vka1czZUVxSzUxZE1IaUt0N1R1ekVpS1FSdjRYNUhfUScsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBwYXJhbXM6IHt9XHJcbiAgICB9LFxyXG59KVxyXG5cclxuLyp3aW5kb3cuRWNoby5jaGFubmVsKCdvcmRlcicpLmxpc3RlbignbmV3JywgKGUpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKGUpXHJcbn0pLmxpc3RlbignbWFrZScsIChlKSA9PiB7XHJcbn0pOyovXHJcblxyXG5cclxuXHJcbi8qXHJcbndpbmRvdy5FY2hvLnByaXZhdGUoJ3VzZXIuMicpLmxpc3RlbignYScsIChlKSA9PiB7XHJcbiAgICBhbGVydCgnYWFhJyk7XHJcbn0pLmxpc3RlbignYicsIChlKSA9PiB7XHJcbiAgICBhbGVydCgnYmJiJyk7XHJcbn0pO1xyXG4qL1xyXG5cclxud2luZG93LkVjaG8uam9pbihgY2hhdC4xYClcclxuICAgIC5oZXJlKCh1c2VycykgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCflhajpg6jkurrlkZgnKTtcclxuICAgICAgICBjb25zb2xlLmxvZyh1c2VycylcclxuICAgIH0pXHJcbiAgICAuam9pbmluZygodXNlcikgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCfmlrDkurrliqDlhaUnKTtcclxuICAgICAgICBjb25zb2xlLmxvZyh1c2VyKTtcclxuICAgIH0pXHJcbiAgICAubGVhdmluZygodXNlcikgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCfmnInkurrpgIDlh7onKTtcclxuICAgICAgICBjb25zb2xlLmxvZyh1c2VyKTtcclxuICAgIH0pLmxpc3RlbignTmV3TWVzc2FnZScsIChlKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhlKTtcclxufSk7XHJcbiIsImV4cG9ydCBjbGFzcyBDaGFubmVsIHtcclxuICAgIGNvbnN0cnVjdG9yKHB1c2hlciwgbmFtZSkge1xyXG4gICAgICAgIHRoaXMucHVzaGVyID0gcHVzaGVyO1xyXG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcblxyXG4gICAgICAgIHRoaXMuc3Vic2NyaWJlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgc3Vic2NyaWJlKCkge1xyXG4gICAgICAgIHRoaXMuc3Vic2NyaXB0aW9uID0gdGhpcy5wdXNoZXIuc3Vic2NyaWJlKHRoaXMubmFtZSk7XHJcbiAgICB9XHJcblxyXG4gICAgdW5zdWJzY3JpYmUoKSB7XHJcbiAgICAgICAgdGhpcy5wdXNoZXIudW5zdWJzY3JpYmUodGhpcy5uYW1lKTtcclxuICAgIH1cclxuXHJcbiAgICBsaXN0ZW4oZXZlbnQsIGNhbGxiYWNrKSB7XHJcbiAgICAgICAgdGhpcy5vbihldmVudCwgY2FsbGJhY2spO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBzdG9wTGlzdGVuaW5nKGV2ZW50KSB7XHJcbiAgICAgICAgdGhpcy5zdWJzY3JpcHRpb24udW5iaW5kKGV2ZW50KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgb24oZXZlbnQsIGNhbGxiYWNrKSB7XHJcbiAgICAgICAgdGhpcy5zdWJzY3JpcHRpb24uYmluZChldmVudCwgY2FsbGJhY2spO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICB3aGlzcGVyKGV2ZW50LCBkYXRhKSB7XHJcbiAgICAgICAgdGhpcy5wdXNoZXIuc2VuZCh7XHJcbiAgICAgICAgICAgIGNoYW5uZWw6IHRoaXMubmFtZSxcclxuICAgICAgICAgICAgZGF0YTogZGF0YSxcclxuICAgICAgICAgICAgZXZlbnQ6ICdjbGllbnQtJyArIGV2ZW50XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgbGlzdGVuRm9yV2hpc3BlcihldmVudCwgY2FsbGJhY2spIHtcclxuICAgICAgICB0aGlzLm9uKCdjbGllbnQtJyArIGV2ZW50LCBjYWxsYmFjayk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQge0NoYW5uZWx9IGZyb20gXCIuL2NoYW5uZWxcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBQdXNoZXJDaGFubmVsIGV4dGVuZHMgQ2hhbm5lbCB7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAcGFyYW0gcHVzaGVyXHJcbiAgICAgKiBAcGFyYW0gY2hhbm5lbFxyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3RvcihwdXNoZXIsIG5hbWUpIHtcclxuICAgICAgICBzdXBlcihwdXNoZXIsIG5hbWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbn0iLCJpbXBvcnQge0NoYW5uZWx9IGZyb20gXCIuL2NoYW5uZWxcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBQdXNoZXJQcmVzZW5jZUNoYW5uZWwgZXh0ZW5kcyBDaGFubmVsIHtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEBwYXJhbSBwdXNoZXJcclxuICAgICAqIEBwYXJhbSBjaGFubmVsXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKHB1c2hlciwgbmFtZSkge1xyXG4gICAgICAgIHN1cGVyKHB1c2hlciwgbmFtZSk7XHJcbiAgICB9XHJcblxyXG4gICAgaGVyZShjYWxsYmFjaykge1xyXG4gICAgICAgIGxldCBiYWNrID0gKGUpID0+IHtcclxuICAgICAgICAgICAgY2FsbGJhY2soZS5wcmVzZW5jZSlcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5vbigncHVzaGVyX2ludGVybmFsOnN1YnNjcmlwdGlvbl9zdWNjZWVkZWQnLCBiYWNrKTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBqb2luaW5nKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgdGhpcy5vbigncHVzaGVyX2ludGVybmFsOm1lbWJlcl9hZGRlZCcsIGNhbGxiYWNrKTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBsZWF2aW5nKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgdGhpcy5vbigncHVzaGVyX2ludGVybmFsOm1lbWJlcl9yZW1vdmVkJywgY2FsbGJhY2spO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHtDaGFubmVsfSBmcm9tIFwiLi9jaGFubmVsXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgUHVzaGVyUHJpdmF0ZUNoYW5uZWwgZXh0ZW5kcyBDaGFubmVsIHtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEBwYXJhbSBwdXNoZXJcclxuICAgICAqIEBwYXJhbSBjaGFubmVsXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKHB1c2hlciwgbmFtZSkge1xyXG4gICAgICAgIHN1cGVyKHB1c2hlciwgbmFtZSk7XHJcbiAgICB9XHJcblxyXG59IiwiaW1wb3J0ICdsdWZmeS1wdXNoZXInO1xyXG5pbXBvcnQge1B1c2hlckNoYW5uZWx9IGZyb20gXCIuLi9jaGFubmVsL3B1c2hlci1jaGFubmVsXCI7XHJcbmltcG9ydCB7UHVzaGVyUHJpdmF0ZUNoYW5uZWx9IGZyb20gXCIuLi9jaGFubmVsL3B1c2hlci1wcml2YXRlLWNoYW5uZWxcIjtcclxuaW1wb3J0IHtQdXNoZXJQcmVzZW5jZUNoYW5uZWx9IGZyb20gXCIuLi9jaGFubmVsL3B1c2hlci1wcmVzZW5jZS1jaGFubmVsXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgUHVzaGVyQ29ubmVjdG9yIHtcclxuICAgIGNvbnN0cnVjdG9yKGFwcF9rZXksIG9wdGlvbnMpIHtcclxuICAgICAgICB0aGlzLnB1c2hlciA9IG5ldyBQdXNoZXIoYXBwX2tleSwgb3B0aW9ucyk7XHJcbiAgICAgICAgdGhpcy5jaGFubmVscyA9IHt9O1xyXG4gICAgfVxyXG5cclxuICAgIGNoYW5uZWwoY2hhbm5lbCkge1xyXG4gICAgICAgIGlmICh0aGlzLmNoYW5uZWxzW2NoYW5uZWxdID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5jaGFubmVsc1tjaGFubmVsXSA9IG5ldyBQdXNoZXJDaGFubmVsKHRoaXMucHVzaGVyLCBjaGFubmVsKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLmNoYW5uZWxzW2NoYW5uZWxdO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGVDaGFubmVsKGNoYW5uZWwpIHtcclxuICAgICAgICBpZiAodGhpcy5jaGFubmVsc1sncHJpdmF0ZS0nICsgY2hhbm5lbF0gPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB0aGlzLmNoYW5uZWxzWydwcml2YXRlLScgKyBjaGFubmVsXSA9IG5ldyBQdXNoZXJQcml2YXRlQ2hhbm5lbCh0aGlzLnB1c2hlciwgJ3ByaXZhdGUtJyArIGNoYW5uZWwpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy5jaGFubmVsc1sncHJpdmF0ZS0nICsgY2hhbm5lbF07XHJcbiAgICB9XHJcblxyXG4gICAgcHJlc2VuY2VDaGFubmVsKGNoYW5uZWwpIHtcclxuICAgICAgICBpZiAodGhpcy5jaGFubmVsc1sncHJlc2VuY2UtJyArIGNoYW5uZWxdID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5jaGFubmVsc1sncHJlc2VuY2UtJyArIGNoYW5uZWxdID0gbmV3IFB1c2hlclByZXNlbmNlQ2hhbm5lbCh0aGlzLnB1c2hlciwgJ3ByZXNlbmNlLScgKyBjaGFubmVsKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY2hhbm5lbHNbJ3ByZXNlbmNlLScgKyBjaGFubmVsXTtcclxuICAgIH1cclxufSIsImltcG9ydCB7UHVzaGVyQ29ubmVjdG9yfSBmcm9tIFwiLi9jb25uZWN0b3IvcHVzaGVyX2Nvbm5lY3RvclwiO1xyXG5pbXBvcnQge1ByaXZhdGVDaGFubmVsfSBmcm9tIFwibHVmZnktcHVzaGVyL3NyYy9jaGFubmVscy9wcml2YXRlX2NoYW5uZWxcIjtcclxuaW1wb3J0IHtQcmVzZW5jZUNoYW5uZWx9IGZyb20gXCJsdWZmeS1wdXNoZXIvc3JjL2NoYW5uZWxzL3ByZXNlbmNlX2NoYW5uZWxcIjtcclxuaW1wb3J0IHtDaGFubmVsfSBmcm9tIFwibHVmZnktcHVzaGVyL3NyYy9jaGFubmVscy9jaGFubmVsXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgRWNobyB7XHJcbiAgICBjb25zdHJ1Y3RvcihhcHBrZXksIG9wdGlvbnMpIHtcclxuICAgICAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xyXG4gICAgICAgIHRoaXMuY29ubmVjdG9yID0gbmV3IFB1c2hlckNvbm5lY3RvcihhcHBrZXksIHRoaXMub3B0aW9ucyk7XHJcbiAgICB9XHJcblxyXG4gICAgY2hhbm5lbChjaGFubmVsKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY29ubmVjdG9yLmNoYW5uZWwoY2hhbm5lbCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZShjaGFubmVsKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY29ubmVjdG9yLnByaXZhdGVDaGFubmVsKGNoYW5uZWwpO1xyXG4gICAgfVxyXG5cclxuICAgIGpvaW4oY2hhbm5lbCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNvbm5lY3Rvci5wcmVzZW5jZUNoYW5uZWwoY2hhbm5lbCk7XHJcbiAgICB9XHJcblxyXG4gICAgc3Vic2NyaWJlKG5hbWUpIHtcclxuICAgICAgICBpZiAobmFtZS5pbmRleE9mKCdwcml2YXRlLScpID09PSAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnByaXZhdGUobmFtZSk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChuYW1lLmluZGV4T2YoJ3ByZXNlbmNlLScpID09PSAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmpvaW4obmFtZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY2hhbm5lbChuYW1lKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDpgIDlh7rpopHpgZMs5pqC55WZXHJcbiAgICAgKiBAcGFyYW0gY2hhbm5lbFxyXG4gICAgICovXHJcbiAgICBsZWF2ZShjaGFubmVsKSB7XHJcblxyXG4gICAgfVxyXG59XHJcblxyXG53aW5kb3cuRWNobyA9IEVjaG87XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var lyftWebLibrary = __webpack_require__(1);

	/**
	 * lyftWebButton
	 */
	var lyftWebButton = (function(lyftWebLibrary) {

	  /* ========== */
	  /* Properties */
	  /* ========== */

	  var etaElement;
	  var priceRangeElement;
	  var modalContainerElement;
	  var modalContentElement;

	  /* =================== */
	  /* Convenience Methods */
	  /* =================== */

	  function addClass(e, c) {
	      var classList = e.className.split(' ');
	      if (classList.indexOf(c) === -1) {classList.push(c);}
	      e.className = classList.join(' ');
	  }

	  function removeClass(e, c) {
	      var classList = e.className.split(' ');
	      var classIndex = classList.indexOf(c);
	      if (classIndex !== -1) {classList.splice(classIndex, 1);}
	      e.className = classList.join(' ');
	  }

	  function createSvg(descriptions, fill, width, height) {
	    var NS = 'http://www.w3.org/2000/svg';
	    /* path */
	    var path = document.createElementNS(NS, 'path');
	    path.setAttribute('d', descriptions);
	    path.setAttribute('fill', fill);
	    path.setAttribute('fill-rule', 'evenodd');
	    /* svg */
	    var svg = document.createElementNS(NS, 'svg');
	    svg.setAttribute('version', '1.1');
	    svg.setAttribute('width', '100%');
	    svg.setAttribute('height', '100%');
	    svg.setAttribute('viewBox', '0 0 '+width+' '+height);
	    /* tree */
	    svg.insertBefore(path, svg.childNodes[0]);
	    return svg;
	  }

	  /* ======================== */
	  /* DOM Manipulation Methods */
	  /* ======================== */

	  function createButton(logoColor, arrowColor) {
	    /* priceRange (cached element reference) */
	    priceRangeElement = document.createElement('span');
	    addClass(priceRangeElement, 'price-range');
	    priceRangeElement.textContent = '';
	    /* arrow */
	    var arrowSvg = createSvg('M14,13.7506336 L14,6 L6.24936644,6 L8.93723605,8.68786953 L3,17 L11.3121305,11.062764 L14,13.7506336 Z M0,10 C0,15.5228475 4.4771525,20 10,20 C15.5228475,20 20,15.5228475 20,10 C20,4.4771525 15.5228475,0 10,0 C4.4771525,1.70234197e-14 1.48029737e-14,4.4771525 0,10 L0,10 Z', arrowColor, '20', '20');
	    var arrowSpan = document.createElement('span');
	    addClass(arrowSpan, 'arrow');
	    /* eta (cached element reference) */
	    etaElement = document.createElement('span');
	    addClass(etaElement, 'eta');
	    etaElement.textContent = '';
	    /* cta */
	    var cta = document.createElement('span');
	    addClass(cta, 'cta');
	    cta.textContent = 'Get a ride';
	    /* ctaEta */
	    var ctaEta = document.createElement('div');
	    addClass(ctaEta, 'cta-eta');
	    /* logo */
	    var logoSvg = createSvg('M2.88906093,33.1952924 C1.08064111,31.678543 0,29.0557213 0,26.1796707 L0,0.868209803 L8.50060387,0.868209803 L8.50060387,26.2675792 C8.50060387,30.6236413 10.7571142,32.9263187 11.8221878,33.8421413 C10.9646803,34.4076422 9.47150151,34.9285327 7.76427017,34.9285327 C6.48254938,34.9285327 4.59629227,34.6280694 2.88906093,33.1952924 Z M34.8430121,34.2580666 L34.8430121,12.3268685 C34.8430121,5.53036195 39.971356,-7.10542736e-15 46.6913091,-7.10542736e-15 C52.392891,-7.10542736e-15 57.149521,4.08315217 58.3534045,9.709295 L58.4195662,10.1887545 L61.1135896,10.1887545 L61.1135896,18.6881472 L58.6310242,18.6881472 L58.6310242,21.8852758 C58.6310242,23.7510349 60.2032558,25.2914014 62,25.4882114 L62,34.2055839 C55.4551808,33.9982773 50.1946769,28.5518876 50.1946769,21.8852758 L50.1946769,12.3268685 C50.1946769,10.3285906 48.670971,8.70293969 46.6913091,8.70293969 C44.8465653,8.70293969 43.4934119,10.1186599 43.2988186,11.9332484 L43.2663864,12.3268685 L43.2663864,15.3470698 L47.5178452,15.3470698 L47.5178452,23.7615567 L43.2663864,23.7615567 L43.2663864,25.5708717 C43.2663864,28.4456102 41.9322481,31.0684319 40.1238283,32.5851813 C38.7837295,33.7083105 37.1167141,34.3039889 35.3044024,34.3039889 C35.0125126,34.3039889 35.1400911,34.2882441 34.8430121,34.2580666 Z M14.4982482,43.2461032 L14.4982482,35.4782888 C15.6722941,35.9007743 16.8634499,36.2917702 18.3644125,36.2917702 C18.6329511,36.2917702 18.8975979,36.2799616 19.1531637,36.2524082 C21.7801724,35.9781862 23.5120522,34.6753038 23.78578,32.7701827 L23.9466438,31.6536138 L23.1332441,32.4290453 C23.1176766,32.443478 21.4908771,33.9602274 18.6705725,33.9602274 C17.9181453,33.9602274 17.1371778,33.8526379 16.3510211,33.640083 C12.0323485,32.4749676 11.0419098,28.893025 11.0419098,26.0930743 L11.0419098,10.1887545 L19.5262567,10.1887545 L19.5262567,23.6277006 C19.5262567,24.63668 20.6100184,25.459346 21.6270924,25.459346 C22.6441664,25.459346 23.8128596,24.63668 23.8128596,23.6277006 L23.8128596,10.1887545 L32.2972065,10.1887545 L32.2972065,31.7126568 C32.2972065,37.9869607 28.5559089,42.7432031 23.0281637,43.8282825 C21.935847,44.0434614 20.7981252,44.1510509 19.6487278,44.1510509 C17.8039839,44.1510509 16.4117484,43.790611 14.4982482,43.2461032 Z', logoColor, '62', '45');
	    var logoSpan = document.createElement('span');
	    addClass(logoSpan, 'logo');
	    /* button */
	    var button = document.createElement('button');
	    button.type = 'button';
	    addClass(button, 'lyft-web-button');
	    button.onclick = function(){addClass(modalContainerElement, 'on'); return false;};
	    /* tree */
	    button.insertBefore(priceRangeElement, button.childNodes[0]);
	    arrowSpan.insertBefore(arrowSvg, arrowSpan.childNodes[0]);
	    button.insertBefore(arrowSpan, button.childNodes[0]);
	    ctaEta.insertBefore(etaElement, ctaEta.childNodes[0]);
	    ctaEta.insertBefore(cta, ctaEta.childNodes[0]);
	    button.insertBefore(ctaEta, button.childNodes[0]);
	    logoSpan.insertBefore(logoSvg, logoSpan.childNodes[0]);
	    button.insertBefore(logoSpan, button.childNodes[0]);
	    return button;
	  }

	  function createModal() {
	    /* button */
	    var button = document.createElement('button');
	    button.type = 'button';
	    button.onclick = function(){removeClass(modalContainerElement, 'on'); return false;};
	    /* content */
	    modalContentElement = document.createElement('div');
	    addClass(modalContentElement, 'content');
	    /* modal */
	    modalContainerElement = document.createElement('div');
	    addClass(modalContainerElement, 'lyft-web-modal');
	    /* tree */
	    modalContentElement.insertBefore(button, modalContentElement.childNodes[0]);
	    modalContainerElement.insertBefore(modalContentElement, modalContainerElement.childNodes[0]);
	    return modalContainerElement;
	  }

	  function createStyle(textColor, backgroundColor) {
	    var style = document.createElement('style');
	    style.type = 'text/css';
	    style.textContent = [
	      '.lyft-web-button {padding:18px 20px;color:'+textColor+';font-family:sans-serif;background-color:'+backgroundColor+';border:none;-webkit-border-radius:8px;-moz-border-radius:8px;border-radius:8px;}',
	      '.lyft-web-button > .logo {display:inline-block;width:55px;height:auto;vertical-align:middle;}',
	      '.lyft-web-button > .cta-eta {display:inline-block;margin-left:20px;text-align:left;vertical-align:middle;}',
	      '.lyft-web-button > .cta-eta > .cta {display:block;font-size:30px;font-weight:300;}',
	      '.lyft-web-button > .cta-eta > .eta {display:block;font-size:20px;font-weight:300;}',
	      '.lyft-web-button > .arrow {display:inline-block;width:18px;height:auto;margin-left:20px;vertical-align:middle;}',
	      '.lyft-web-button > .price-range {display:inline-block;margin-left:4px;vertical-align:middle;font-size:20px;font-weight:300;}',
	      '.lyft-web-modal {position:fixed;top:0;left:0;z-index:1;display:block;visibility:hidden;opacity:0;padding-top:100px;width:100%;height:100%;overflow:auto;background-color:rgb(0,0,0);background-color:rgba(0,0,0,0.4);-webkit-transition:visibility 0.4s, opacity 0.4s;-moz-transition:visibility 0.4s, opacity 0.4s;-o-transition:visibility 0.4s, opacity 0.4s;transition:visibility 0.4s, opacity 0.4s;}',
	      '.lyft-web-modal.on {visibility:visible;opacity:1;}',
	      '.lyft-web-modal > .content {position:relative;top:-300px;opacity:0;width:80%;margin:auto;padding:0;background-color:#FFFFFF;border:none;-webkit-border-radius:8px;-moz-border-radius:8px;border-radius:8px;-webkit-box-shadow:0 0 5px rgba(0,0,0,0.3);-moz-box-shadow:0 0 5px rgba(0,0,0,0.3);box-shadow:0 0 5px rgba(0,0,0,0.3);-webkit-transition:top 0.4s, opacity 0.4s;-moz-transition:top 0.4s, opacity 0.4s;-o-transition:top 0.4s, opacity 0.4s;transition:top 0.4s, opacity 0.4s;}',
	      '.lyft-web-modal.on > .content {top:0;opacity:1;}'
	    ].join('\n');
	    return style;
	  }

	  /* ================ */
	  /* Workflow Methods */
	  /* ================ */

	  function onReceiveCosts(data) {
	    if (data.cost_estimates && data.cost_estimates.length) {
	      for (var i = 0, l = data.cost_estimates.length; i < l; i++) {
	        if (data.cost_estimates[i].ride_type === 'lyft') {
	          var min = Math.ceil(data.cost_estimates[i].estimated_cost_cents_min / 100);
	          var max = Math.ceil(data.cost_estimates[i].estimated_cost_cents_max / 100);
	          if (!isNaN(parseFloat(min)) && isFinite(min) && min > 0 &&
	              !isNaN(parseFloat(max)) && isFinite(max) && max > 0) {
	            priceRangeElement.textContent = '$'+min+((min !== max) ? ('-'+max) : '');
	          }
	        }
	      }
	    }
	  }

	  function onReceiveEtas(data) {
	    if (data.eta_estimates && data.eta_estimates.length) {
	      for (var i = 0, l = data.eta_estimates.length; i < l; i++) {
	        if (data.eta_estimates[i].ride_type === 'lyft') {
	          var eta = Math.ceil(data.eta_estimates[i].eta_seconds / 60);
	          if (!isNaN(parseFloat(eta)) && isFinite(eta) && eta > 0) {
	            etaElement.textContent = 'Lyft in '+eta+' min';
	          }
	        }
	      }
	    }
	  }

	  function initialize(clientToken, latitude, longitude, element, theme) {
	    /* parse arguments */
	    lyftWebLibrary.setClientToken(clientToken);
	    /* determine theme */
	    var textColor, backgroundColor, logoColor, arrowColor;
	    switch (theme) {
	      case 'hot-pink':       textColor = logoColor = arrowColor = '#FFFFFF'; backgroundColor = '#FF00BF'; break;
	      case 'mulberry-dark':  textColor = logoColor = arrowColor = '#FFFFFF'; backgroundColor = '#352384'; break;
	      case 'mulberry-light': textColor = logoColor = arrowColor = '#352384'; backgroundColor = '#FFFFFF'; break;
	      case 'multicolor':     textColor = arrowColor = '#000000'; backgroundColor = '#FFFFFF'; logoColor = '#FF00BF'; break;
	      default:               textColor = logoColor = arrowColor = '#FFFFFF'; backgroundColor = '#000000'; break;
	    }
	    /* insert modal */
	    element.insertBefore(createModal(), element.childNodes[0]);
	    /* insert button */
	    element.insertBefore(createButton(logoColor, arrowColor), element.childNodes[0]);
	    /* insert style */
	    element.insertBefore(createStyle(textColor, backgroundColor), element.childNodes[0]);
	    /* get device location */
	    if (navigator && navigator.geolocation && navigator.geolocation.getCurrentPosition) {
	      navigator.geolocation.getCurrentPosition(function(position) {
	        /* request costs */
	        lyftWebLibrary.getCosts({
	          start_lat: position.coords.latitude,
	          start_lng: position.coords.longitude,
	          end_lat: latitude,
	          end_lng: longitude
	        }, 'lyftWebButton.onReceiveCosts');
	        /* request etas */
	        lyftWebLibrary.getEtas({
	          lat: position.coords.latitude,
	          lng: position.coords.longitude
	        }, 'lyftWebButton.onReceiveEtas');
	      });
	    }
	  }

	  /* ===================================== */
	  /* Publicly-Exposed Properties & Methods */
	  /* ===================================== */

	  return {
	    initialize: initialize,
	    onReceiveCosts: onReceiveCosts,
	    onReceiveEtas: onReceiveEtas
	  };

	})(lyftWebLibrary);

	module.exports = window.lyftWebButton = lyftWebButton;


/***/ },
/* 1 */
/***/ function(module, exports) {

	/**
	 * lyftWebLibrary
	 */
	var lyftWebLibrary = (function() {

	  /* ========== */
	  /* Properties */
	  /* ========== */

	  var SERVER_URL = 'http://www.lyft.com/api/jsonp';

	  var client_token;
	  function setClientToken(value) {client_token = value;}

	  /* =================== */
	  /* Convenience Methods */
	  /* =================== */

	  /**
	   * Injects a script into the DOM with given options.
	   * @param {Object} options Required.
	   * @param {string} options.src Required.
	   * @param {boolean} options.async Optional.
	   * @param {function} options.callback Optional.
	   * @param {boolean} options.defer Optional.
	   */
	  function injectScript(options) {
	    if (typeof options === 'undefined' || typeof options.src === 'undefined') {
	      throw new TypeError('injectScript missing one of: options, options.src');
	    }

	    var headElement = document.getElementsByTagName('head')[0] || document.documentElement;
	    var scriptElement = document.createElement('script');
	    scriptElement.src = options.src;
	    scriptElement.async = options.async || false;
	    scriptElement.defer = options.defer || false;

	    /* polyfill `onload` event for some older browsers */
	    var isDone = false;
	    scriptElement.onload = scriptElement.onreadystatechange = function(event) {
	      /* if script is loaded... */
	      if (!isDone && (!this.readyState || this.readyState === 'loaded' || this.readyState === 'complete')) {
	        isDone = true;
	        /* invoke user callback */
	        var callbackResult =
	          (Object.prototype.toString.call(options.callback) === '[object Function]') ?
	          options.callback(event) :
	          undefined;
	        /* unset event handler (avoid memory leak) */
	        scriptElement.onload = scriptElement.onreadystatechange = null;
	        /* remove DOM element */
	        if (headElement && scriptElement.parentNode) {
	          headElement.removeChild(scriptElement);
	        }
	        /* return user callback result */
	        return callbackResult;
	      }
	    };
	    /* insertBefore instead of appendChild for browser compatibility */
	    headElement.insertBefore(scriptElement, headElement.firstChild);
	  }

	  /**
	   * Recursively serializes data as a query-parameter string.
	   * @param {Object} obj Data to serialize (required).
	   * @param {string} pfx Key prefix for data chunk (optional).
	   * @returns {string} Query-parameter string.
	   */
	  function serialize(obj, pfx) {
	    var results = [];
	    for(var prop in obj) {
	      if (obj.hasOwnProperty(prop)) {
	        var key = pfx ? (pfx + '[' + prop + ']') : prop;
	        var val = obj[prop]
	        results.push(
	          (typeof val === 'object') ?
	          serialize(val, key) :
	          (encodeURIComponent(key) + '=' + encodeURIComponent(val))
	        );
	      }
	    }
	    return results.join('&');
	  }

	  /**
	   * Performs a JSONP request.
	   * @param {Object} options Required.
	   * @param {string} options.url Required.
	   * @param {string} options.callback Callback path relative to window context (optional).
	   * @param {Object} options.data JSON-compatible data payload (optional).
	   */
	  function requestJsonp(options) {
	    if (typeof options === 'undefined' || typeof options.url === 'undefined') {
	      throw new TypeError('requestJsonp missing one of: options, options.url');
	    }
	    /* construct the request src */
	    var src = options.url +
	      (options.url.indexOf('?') !== -1 ? '&' : '?') + 'callback=' + options.callback +
	      '&' + serialize(options.data);
	    /* perform the request */
	    return injectScript({src: src});
	  }

	  /* ================ */
	  /* Workflow Methods */
	  /* ================ */

	  /**
	   * Requests JSONP with injected `client_token`.
	   * @param {Object} data Required.
	   * @param {function} callback Optional.
	   * @param {string} path Required.
	   */
	  function requestJsonpWithClientToken(data, callback, path) {
	    /* build data payload */
	    data = data || {};
	    data.client_token = client_token;
	    /* perform request */
	    return requestJsonp({
	      url: SERVER_URL + path,
	      data: data,
	      callback: callback
	    });
	  }

	  /**
	   * GETs `costs`.
	   * @param {Object} data Required.
	   * @param {string} data.start_lat Required.
	   * @param {string} data.start_lng Required.
	   * @param {string} data.end_lat Required.
	   * @param {string} data.end_lng Required.
	   * @param {string} data.ride_type Optional.
	   * @param {function} callback Optional.
	   */
	  function getCosts(data, callback) {
	    return requestJsonpWithClientToken(data, callback, '/costs');
	  }

	  /**
	   * GETs `drivers`.
	   * @param {Object} data Required.
	   * @param {string} data.lat Required.
	   * @param {string} data.lng Required.
	   * @param {function} callback Optional.
	   */
	  function getDrivers(data, callback) {
	    return requestJsonpWithClientToken(data, callback, '/drivers');
	  }

	  /**
	   * GETs `etas`.
	   * @param {Object} data Required.
	   * @param {string} data.lat Required.
	   * @param {string} data.lng Required.
	   * @param {string} data.ride_type Optional.
	   * @param {function} callback Optional.
	   */
	  function getEtas(data, callback) {
	    return requestJsonpWithClientToken(data, callback, '/etas');
	  }

	  /**
	   * GETs `ride_types`.
	   * @param {Object} data Required.
	   * @param {string} data.lat Required.
	   * @param {string} data.lng Required.
	   * @param {string} data.ride_type Optional.
	   * @param {function} callback Optional.
	   */
	  function getRideTypes(data, callback) {
	    return requestJsonpWithClientToken(data, callback, '/ride_types');
	  }

	  /* ===================================== */
	  /* Publicly-Exposed Properties & Methods */
	  /* ===================================== */

	  return {
	    getCosts: getCosts,
	    getDrivers: getDrivers,
	    getEtas: getEtas,
	    getRideTypes: getRideTypes,
	    setClientToken: setClientToken
	  };

	})();

	module.exports = window.lyftWebLibrary = lyftWebLibrary;


/***/ }
/******/ ]);
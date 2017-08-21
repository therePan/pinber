webpackJsonp([1],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(278), __esModule: true };

/***/ }),
/* 9 */,
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2016 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg)) {
				classes.push(classNames.apply(null, arg));
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if (typeof module !== 'undefined' && module.exports) {
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
			return classNames;
		}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {
		window.classNames = classNames;
	}
}());


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {(function (global, factory) {
	 true ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.BrowserSpriteSymbol = factory());
}(this, (function () { 'use strict';

var SpriteSymbol = function SpriteSymbol(ref) {
  var id = ref.id;
  var viewBox = ref.viewBox;
  var content = ref.content;

  this.id = id;
  this.viewBox = viewBox;
  this.content = content;
};

/**
 * @return {string}
 */
SpriteSymbol.prototype.stringify = function stringify () {
  return this.content;
};

/**
 * @return {string}
 */
SpriteSymbol.prototype.toString = function toString () {
  return this.stringify();
};

SpriteSymbol.prototype.destroy = function destroy () {
    var this$1 = this;

  ['id', 'viewBox', 'content'].forEach(function (prop) { return delete this$1[prop]; });
};

var hasImportNode = !!document.importNode;

/**
 * @param {string} content
 * @return {Element}
 */
var parse = function (content) {
  var doc = new DOMParser().parseFromString(content, 'image/svg+xml').documentElement;

  /**
   * Fix for browser which are throwing WrongDocumentError
   * if you insert an element which is not part of the document
   * @see http://stackoverflow.com/a/7986519/4624403
   */
  if (hasImportNode) {
    return document.importNode(doc, true);
  }

  return doc;
};

var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};





function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var index = createCommonjsModule(function (module, exports) {
(function (root, factory) {
    if (false) {
        undefined(factory);
    } else {
        module.exports = factory();
    }
}(commonjsGlobal, function () {

function isMergeableObject(val) {
    var nonNullObject = val && typeof val === 'object';

    return nonNullObject
        && Object.prototype.toString.call(val) !== '[object RegExp]'
        && Object.prototype.toString.call(val) !== '[object Date]'
}

function emptyTarget(val) {
    return Array.isArray(val) ? [] : {}
}

function cloneIfNecessary(value, optionsArgument) {
    var clone = optionsArgument && optionsArgument.clone === true;
    return (clone && isMergeableObject(value)) ? deepmerge(emptyTarget(value), value, optionsArgument) : value
}

function defaultArrayMerge(target, source, optionsArgument) {
    var destination = target.slice();
    source.forEach(function(e, i) {
        if (typeof destination[i] === 'undefined') {
            destination[i] = cloneIfNecessary(e, optionsArgument);
        } else if (isMergeableObject(e)) {
            destination[i] = deepmerge(target[i], e, optionsArgument);
        } else if (target.indexOf(e) === -1) {
            destination.push(cloneIfNecessary(e, optionsArgument));
        }
    });
    return destination
}

function mergeObject(target, source, optionsArgument) {
    var destination = {};
    if (isMergeableObject(target)) {
        Object.keys(target).forEach(function (key) {
            destination[key] = cloneIfNecessary(target[key], optionsArgument);
        });
    }
    Object.keys(source).forEach(function (key) {
        if (!isMergeableObject(source[key]) || !target[key]) {
            destination[key] = cloneIfNecessary(source[key], optionsArgument);
        } else {
            destination[key] = deepmerge(target[key], source[key], optionsArgument);
        }
    });
    return destination
}

function deepmerge(target, source, optionsArgument) {
    var array = Array.isArray(source);
    var options = optionsArgument || { arrayMerge: defaultArrayMerge };
    var arrayMerge = options.arrayMerge || defaultArrayMerge;

    if (array) {
        return Array.isArray(target) ? arrayMerge(target, source, optionsArgument) : cloneIfNecessary(source, optionsArgument)
    } else {
        return mergeObject(target, source, optionsArgument)
    }
}

deepmerge.all = function deepmergeAll(array, optionsArgument) {
    if (!Array.isArray(array) || array.length < 2) {
        throw new Error('first argument should be an array with at least two elements')
    }

    // we are sure there are at least 2 values, so it is safe to have no initial value
    return array.reduce(function(prev, next) {
        return deepmerge(prev, next, optionsArgument)
    })
};

return deepmerge

}));
});

var namespaces_1 = createCommonjsModule(function (module, exports) {
var namespaces = {
  svg: {
    name: 'xmlns',
    uri: 'http://www.w3.org/2000/svg'
  },
  xlink: {
    name: 'xmlns:xlink',
    uri: 'http://www.w3.org/1999/xlink'
  }
};

exports.default = namespaces;
module.exports = exports.default;
});

/**
 * @param {Object} attrs
 * @return {string}
 */
var objectToAttrsString = function (attrs) {
  return Object.keys(attrs).map(function (attr) {
    var value = attrs[attr].toString().replace(/"/g, '&quot;');
    return (attr + "=\"" + value + "\"");
  }).join(' ');
};

var svg = namespaces_1.svg;
var xlink = namespaces_1.xlink;

var defaultAttrs = {};
defaultAttrs[svg.name] = svg.uri;
defaultAttrs[xlink.name] = xlink.uri;

/**
 * @param {string} [content]
 * @param {Object} [attributes]
 * @return {string}
 */
var wrapInSvgString = function (content, attributes) {
  if ( content === void 0 ) content = '';

  var attrs = index(defaultAttrs, attributes || {});
  var attrsRendered = objectToAttrsString(attrs);
  return ("<svg " + attrsRendered + ">" + content + "</svg>");
};

var BrowserSpriteSymbol = (function (SpriteSymbol$$1) {
  function BrowserSpriteSymbol () {
    SpriteSymbol$$1.apply(this, arguments);
  }

  if ( SpriteSymbol$$1 ) BrowserSpriteSymbol.__proto__ = SpriteSymbol$$1;
  BrowserSpriteSymbol.prototype = Object.create( SpriteSymbol$$1 && SpriteSymbol$$1.prototype );
  BrowserSpriteSymbol.prototype.constructor = BrowserSpriteSymbol;

  var prototypeAccessors = { isMounted: {} };

  prototypeAccessors.isMounted.get = function () {
    return !!this.node;
  };

  BrowserSpriteSymbol.prototype.destroy = function destroy () {
    if (this.isMounted) {
      this.unmount();
    }
    SpriteSymbol$$1.prototype.destroy.call(this);
  };

  /**
   * @param {Element|string} target
   * @return {Element}
   */
  BrowserSpriteSymbol.prototype.mount = function mount (target) {
    if (this.isMounted) {
      return this.node;
    }

    var mountTarget = typeof target === 'string' ? document.querySelector(target) : target;
    var node = this.render();
    this.node = node;

    mountTarget.appendChild(node);

    return node;
  };

  /**
   * @return {Element}
   */
  BrowserSpriteSymbol.prototype.render = function render () {
    var content = this.stringify();
    return parse(wrapInSvgString(content)).childNodes[0];
  };

  BrowserSpriteSymbol.prototype.unmount = function unmount () {
    this.node.parentNode.removeChild(this.node);
  };

  Object.defineProperties( BrowserSpriteSymbol.prototype, prototypeAccessors );

  return BrowserSpriteSymbol;
}(SpriteSymbol));

return BrowserSpriteSymbol;

})));

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(43)))

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {(function (global, factory) {
	 true ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.BrowserSprite = factory());
}(this, (function () { 'use strict';

var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};





function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var index = createCommonjsModule(function (module, exports) {
(function (root, factory) {
    if (false) {
        undefined(factory);
    } else {
        module.exports = factory();
    }
}(commonjsGlobal, function () {

function isMergeableObject(val) {
    var nonNullObject = val && typeof val === 'object';

    return nonNullObject
        && Object.prototype.toString.call(val) !== '[object RegExp]'
        && Object.prototype.toString.call(val) !== '[object Date]'
}

function emptyTarget(val) {
    return Array.isArray(val) ? [] : {}
}

function cloneIfNecessary(value, optionsArgument) {
    var clone = optionsArgument && optionsArgument.clone === true;
    return (clone && isMergeableObject(value)) ? deepmerge(emptyTarget(value), value, optionsArgument) : value
}

function defaultArrayMerge(target, source, optionsArgument) {
    var destination = target.slice();
    source.forEach(function(e, i) {
        if (typeof destination[i] === 'undefined') {
            destination[i] = cloneIfNecessary(e, optionsArgument);
        } else if (isMergeableObject(e)) {
            destination[i] = deepmerge(target[i], e, optionsArgument);
        } else if (target.indexOf(e) === -1) {
            destination.push(cloneIfNecessary(e, optionsArgument));
        }
    });
    return destination
}

function mergeObject(target, source, optionsArgument) {
    var destination = {};
    if (isMergeableObject(target)) {
        Object.keys(target).forEach(function (key) {
            destination[key] = cloneIfNecessary(target[key], optionsArgument);
        });
    }
    Object.keys(source).forEach(function (key) {
        if (!isMergeableObject(source[key]) || !target[key]) {
            destination[key] = cloneIfNecessary(source[key], optionsArgument);
        } else {
            destination[key] = deepmerge(target[key], source[key], optionsArgument);
        }
    });
    return destination
}

function deepmerge(target, source, optionsArgument) {
    var array = Array.isArray(source);
    var options = optionsArgument || { arrayMerge: defaultArrayMerge };
    var arrayMerge = options.arrayMerge || defaultArrayMerge;

    if (array) {
        return Array.isArray(target) ? arrayMerge(target, source, optionsArgument) : cloneIfNecessary(source, optionsArgument)
    } else {
        return mergeObject(target, source, optionsArgument)
    }
}

deepmerge.all = function deepmergeAll(array, optionsArgument) {
    if (!Array.isArray(array) || array.length < 2) {
        throw new Error('first argument should be an array with at least two elements')
    }

    // we are sure there are at least 2 values, so it is safe to have no initial value
    return array.reduce(function(prev, next) {
        return deepmerge(prev, next, optionsArgument)
    })
};

return deepmerge

}));
});

//      
// An event handler can take an optional event argument
// and should not return a value
                                          
// An array of all currently registered event handlers for a type
                                            
// A map of event types and their corresponding event handlers.
                        
                                   
  

/** Mitt: Tiny (~200b) functional event emitter / pubsub.
 *  @name mitt
 *  @returns {Mitt}
 */
function mitt(all                 ) {
	all = all || Object.create(null);

	return {
		/**
		 * Register an event handler for the given type.
		 *
		 * @param  {String} type	Type of event to listen for, or `"*"` for all events
		 * @param  {Function} handler Function to call in response to given event
		 * @memberOf mitt
		 */
		on: function on(type        , handler              ) {
			(all[type] || (all[type] = [])).push(handler);
		},

		/**
		 * Remove an event handler for the given type.
		 *
		 * @param  {String} type	Type of event to unregister `handler` from, or `"*"`
		 * @param  {Function} handler Handler function to remove
		 * @memberOf mitt
		 */
		off: function off(type        , handler              ) {
			if (all[type]) {
				all[type].splice(all[type].indexOf(handler) >>> 0, 1);
			}
		},

		/**
		 * Invoke all handlers for the given type.
		 * If present, `"*"` handlers are invoked after type-matched handlers.
		 *
		 * @param {String} type  The event type to invoke
		 * @param {Any} [evt]  Any value (object is recommended and powerful), passed to each handler
		 * @memberof mitt
		 */
		emit: function emit(type        , evt     ) {
			(all[type] || []).map(function (handler) { handler(evt); });
			(all['*'] || []).map(function (handler) { handler(type, evt); });
		}
	};
}

var namespaces_1 = createCommonjsModule(function (module, exports) {
var namespaces = {
  svg: {
    name: 'xmlns',
    uri: 'http://www.w3.org/2000/svg'
  },
  xlink: {
    name: 'xmlns:xlink',
    uri: 'http://www.w3.org/1999/xlink'
  }
};

exports.default = namespaces;
module.exports = exports.default;
});

/**
 * @param {Object} attrs
 * @return {string}
 */
var objectToAttrsString = function (attrs) {
  return Object.keys(attrs).map(function (attr) {
    var value = attrs[attr].toString().replace(/"/g, '&quot;');
    return (attr + "=\"" + value + "\"");
  }).join(' ');
};

var svg = namespaces_1.svg;
var xlink = namespaces_1.xlink;

var defaultAttrs = {};
defaultAttrs[svg.name] = svg.uri;
defaultAttrs[xlink.name] = xlink.uri;

/**
 * @param {string} [content]
 * @param {Object} [attributes]
 * @return {string}
 */
var wrapInSvgString = function (content, attributes) {
  if ( content === void 0 ) content = '';

  var attrs = index(defaultAttrs, attributes || {});
  var attrsRendered = objectToAttrsString(attrs);
  return ("<svg " + attrsRendered + ">" + content + "</svg>");
};

var svg$1 = namespaces_1.svg;
var xlink$1 = namespaces_1.xlink;

var defaultConfig = {
  attrs: ( obj = {
    style: ['position: absolute', 'width: 0', 'height: 0'].join('; ')
  }, obj[svg$1.name] = svg$1.uri, obj[xlink$1.name] = xlink$1.uri, obj )
};
var obj;

var Sprite = function Sprite(config) {
  this.config = index(defaultConfig, config || {});
  this.symbols = [];
};

/**
 * Add new symbol. If symbol with the same id exists it will be replaced.
 * @param {SpriteSymbol} symbol
 * @return {boolean} `true` - symbol was added, `false` - replaced
 */
Sprite.prototype.add = function add (symbol) {
  var ref = this;
    var symbols = ref.symbols;
  var existing = this.find(symbol.id);

  if (existing) {
    symbols[symbols.indexOf(existing)] = symbol;
    return false;
  }

  symbols.push(symbol);
  return true;
};

/**
 * Remove symbol & destroy it
 * @param {string} id
 * @return {boolean} `true` - symbol was found & successfully destroyed, `false` - otherwise
 */
Sprite.prototype.remove = function remove (id) {
  var ref = this;
    var symbols = ref.symbols;
  var symbol = this.find(id);

  if (symbol) {
    symbols.splice(symbols.indexOf(symbol), 1);
    symbol.destroy();
    return true;
  }

  return false;
};

/**
 * @param {string} id
 * @return {SpriteSymbol|null}
 */
Sprite.prototype.find = function find (id) {
  return this.symbols.filter(function (s) { return s.id === id; })[0] || null;
};

/**
 * @param {string} id
 * @return {boolean}
 */
Sprite.prototype.has = function has (id) {
  return this.find(id) !== null;
};

/**
 * @return {string}
 */
Sprite.prototype.stringify = function stringify () {
  var ref = this.config;
    var attrs = ref.attrs;
  var stringifiedSymbols = this.symbols.map(function (s) { return s.stringify(); }).join('');
  return wrapInSvgString(stringifiedSymbols, attrs);
};

/**
 * @return {string}
 */
Sprite.prototype.toString = function toString () {
  return this.stringify();
};

Sprite.prototype.destroy = function destroy () {
  this.symbols.forEach(function (s) { return s.destroy(); });
};

var defaultConfig$1 = {
  /**
   * Should following options be automatically configured:
   * - `syncUrlsWithBaseTag`
   * - `locationChangeAngularEmitter`
   * - `moveGradientsOutsideSymbol`
   * @type {boolean}
   */
  autoConfigure: true,

  /**
   * Default mounting selector
   * @type {string}
   */
  mountTo: 'body',

  /**
   * Fix disappearing SVG elements when <base href> exists.
   * Executes when sprite mounted.
   * @see http://stackoverflow.com/a/18265336/796152
   * @see https://github.com/everdimension/angular-svg-base-fix
   * @see https://github.com/angular/angular.js/issues/8934#issuecomment-56568466
   * @type {boolean}
   */
  syncUrlsWithBaseTag: false,

  /**
   * Should sprite listen custom location change event
   * @type {boolean}
   */
  listenLocationChangeEvent: true,

  /**
   * Custom window event name which should be emitted to update sprite urls
   * @type {string}
   */
  locationChangeEvent: 'locationChange',

  /**
   * Emit location change event in Angular automatically
   * @type {boolean}
   */
  locationChangeAngularEmitter: false,

  /**
   * Selector to find symbols usages when updating sprite urls
   * @type {string}
   */
  usagesToUpdate: 'use[*|href]',

  /**
   * Fix Firefox bug when gradients and patterns don't work if they are within a symbol.
   * Executes when sprite is rendered, but not mounted.
   * @see https://bugzilla.mozilla.org/show_bug.cgi?id=306674
   * @see https://bugzilla.mozilla.org/show_bug.cgi?id=353575
   * @see https://bugzilla.mozilla.org/show_bug.cgi?id=1235364
   * @type {boolean}
   */
  moveGradientsOutsideSymbol: false
};

var arrayFrom = function (arrayLike) {
  return Array.prototype.slice.call(arrayLike, 0);
};

var ua = navigator.userAgent;

var browser = {
  isChrome: /chrome/i.test(ua),
  isFirefox: /firefox/i.test(ua),
  isIE: /msie/i.test(ua),
  isEdge: /edge/i.test(ua)
};

/**
 * @param {string} name
 * @param {*} data
 */
var dispatchEvent = function (name, data) {
  var event = document.createEvent('CustomEvent');
  event.initCustomEvent(name, false, false, data);
  window.dispatchEvent(event);
};

/**
 * @param {string} [url] If not provided - current URL will be used
 * @return {string}
 */
var getUrlWithoutFragment = function (url) {
  return (url || window.location.href).split('#')[0];
};

/* global angular */
/**
 * @param {string} eventName
 */
var locationChangeAngularEmitter = function (eventName) {
  angular.module('ng').run(['$rootScope', function ($rootScope) {
    $rootScope.$on('$locationChangeSuccess', function (e, newUrl) {
      dispatchEvent(eventName, {
        oldURL: window.location.href,
        newUrl: newUrl
      });
    });
  }]);
};

var defaultSelector = 'linearGradient, radialGradient, pattern';

/**
 * @param {Element} svg
 * @param {string} [selector]
 * @return {Element}
 */
var moveGradientsOutsideSymbol = function (svg, selector) {
  if ( selector === void 0 ) selector = defaultSelector;

  arrayFrom(svg.querySelectorAll('symbol')).forEach(function (symbol) {
    arrayFrom(symbol.querySelectorAll(selector)).forEach(function (node) {
      symbol.parentNode.insertBefore(node, symbol);
    });
  });
  return svg;
};

var hasImportNode = !!document.importNode;

/**
 * @param {string} content
 * @return {Element}
 */
var parse = function (content) {
  var doc = new DOMParser().parseFromString(content, 'image/svg+xml').documentElement;

  /**
   * Fix for browser which are throwing WrongDocumentError
   * if you insert an element which is not part of the document
   * @see http://stackoverflow.com/a/7986519/4624403
   */
  if (hasImportNode) {
    return document.importNode(doc, true);
  }

  return doc;
};

/**
 * @param {NodeList} nodes
 * @param {Function} [matcher]
 * @return {Attr[]}
 */
function selectAttributes(nodes, matcher) {
  var attrs = arrayFrom(nodes).reduce(function (acc, node) {
    if (!node.attributes) {
      return acc;
    }

    var arrayfied = arrayFrom(node.attributes);
    var matched = matcher ? arrayfied.filter(matcher) : arrayfied;
    return acc.concat(matched);
  }, []);

  return attrs;
}

/**
 * @param {NodeList|Node} nodes
 * @param {boolean} [clone=true]
 * @return {string}
 */

var xLinkNS = namespaces_1.xlink.uri;
var xLinkAttrName = 'xlink:href';

// eslint-disable-next-line no-useless-escape
var specialUrlCharsPattern = /[(){}|\\\^~\[\]`"<>]/g;

function encoder(url) {
  return url.replace(specialUrlCharsPattern, function (match) {
    return ("%" + (match[0].charCodeAt(0).toString(16).toUpperCase()));
  });
}

/**
 * @param {NodeList} nodes
 * @param {string} startsWith
 * @param {string} replaceWith
 * @return {NodeList}
 */
function updateReferences(nodes, startsWith, replaceWith) {
  arrayFrom(nodes).forEach(function (node) {
    var href = node.getAttribute(xLinkAttrName);
    if (href && href.indexOf(startsWith) === 0) {
      var newUrl = href.replace(startsWith, replaceWith);
      node.setAttributeNS(xLinkNS, xLinkAttrName, newUrl);
    }
  });

  return nodes;
}

/**
 * List of SVG attributes to update url() target in them
 */
var attList = [
  'clipPath',
  'colorProfile',
  'src',
  'cursor',
  'fill',
  'filter',
  'marker',
  'markerStart',
  'markerMid',
  'markerEnd',
  'mask',
  'stroke',
  'style'
];

var attSelector = attList.map(function (attr) { return ("[" + attr + "]"); }).join(',');

/**
 * Update URLs in svg image (like `fill="url(...)"`) and update referencing elements
 * @param {Element} svg
 * @param {NodeList} references
 * @param {string|RegExp} startsWith
 * @param {string} replaceWith
 * @return {void}
 *
 * @example
 * const sprite = document.querySelector('svg.sprite');
 * const usages = document.querySelectorAll('use');
 * updateUrls(sprite, usages, '#', 'prefix#');
 */
var updateUrls = function (svg, references, startsWith, replaceWith) {
  var startsWithEncoded = encoder(startsWith);
  var replaceWithEncoded = encoder(replaceWith);

  var nodes = svg.querySelectorAll(attSelector);
  var attrs = selectAttributes(nodes, function (ref) {
    var localName = ref.localName;
    var value = ref.value;

    return attList.indexOf(localName) !== -1 && value.indexOf(("url(" + startsWithEncoded)) !== -1;
  });

  attrs.forEach(function (attr) { return attr.value = attr.value.replace(startsWithEncoded, replaceWithEncoded); });
  updateReferences(references, startsWithEncoded, replaceWithEncoded);
};

/**
 * Internal emitter events
 * @enum
 * @private
 */
var Events = {
  MOUNT: 'mount'
};

var BrowserSprite = (function (Sprite$$1) {
  function BrowserSprite(cfg) {
    var this$1 = this;
    if ( cfg === void 0 ) cfg = {};

    Sprite$$1.call(this, index(defaultConfig$1, cfg));

    var emitter = mitt();
    this._emitter = emitter;
    this.node = null;

    var ref = this;
    var config = ref.config;

    if (config.autoConfigure) {
      this._autoConfigure(cfg);
    }

    if (config.syncUrlsWithBaseTag) {
      var baseUrl = document.getElementsByTagName('base')[0].getAttribute('href');
      emitter.on(Events.MOUNT, function () { return this$1.updateUrls('#', baseUrl); });
    }

    var handleLocationChange = this._handleLocationChange.bind(this);
    this._handleLocationChange = handleLocationChange;

    // Provide way to update sprite urls externally via dispatching custom window event
    if (config.listenLocationChangeEvent) {
      window.addEventListener(config.locationChangeEvent, handleLocationChange);
    }

    // Emit location change event in Angular automatically
    if (config.locationChangeAngularEmitter) {
      locationChangeAngularEmitter(config.locationChangeEvent);
    }

    if (config.moveGradientsOutsideSymbol) {
      emitter.on(Events.MOUNT, function (node) {
        moveGradientsOutsideSymbol(node);
      });
    }
  }

  if ( Sprite$$1 ) BrowserSprite.__proto__ = Sprite$$1;
  BrowserSprite.prototype = Object.create( Sprite$$1 && Sprite$$1.prototype );
  BrowserSprite.prototype.constructor = BrowserSprite;

  var prototypeAccessors = { isMounted: {} };

  /**
   * @return {boolean}
   */
  prototypeAccessors.isMounted.get = function () {
    return !!this.node;
  };

  /**
   * Automatically configure following options
   * - `syncUrlsWithBaseTag`
   * - `locationChangeAngularEmitter`
   * - `moveGradientsOutsideSymbol`
   * @param {Object} cfg
   * @private
   */
  BrowserSprite.prototype._autoConfigure = function _autoConfigure (cfg) {
    var ref = this;
    var config = ref.config;

    if (typeof cfg.syncUrlsWithBaseTag === 'undefined') {
      config.syncUrlsWithBaseTag = typeof document.getElementsByTagName('base')[0] !== 'undefined';
    }

    if (typeof cfg.locationChangeAngularEmitter === 'undefined') {
      config.locationChangeAngularEmitter = 'angular' in window;
    }

    if (typeof cfg.moveGradientsOutsideSymbol === 'undefined') {
      config.moveGradientsOutsideSymbol = browser.isFirefox;
    }
  };

  /**
   * @param {Event} event
   * @param {Object} event.detail
   * @param {string} event.detail.oldUrl
   * @param {string} event.detail.newUrl
   * @private
   */
  BrowserSprite.prototype._handleLocationChange = function _handleLocationChange (event) {
    var ref = event.detail;
    var oldUrl = ref.oldUrl;
    var newUrl = ref.newUrl;
    this.updateUrls(oldUrl, newUrl);
  };

  /**
   * Add new symbol. If symbol with the same id exists it will be replaced.
   * If sprite already mounted - `symbol.mount(sprite.node)` will be called.
   * @param {BrowserSpriteSymbol} symbol
   * @return {boolean} `true` - symbol was added, `false` - replaced
   */
  BrowserSprite.prototype.add = function add (symbol) {
    var isNewSymbol = Sprite$$1.prototype.add.call(this, symbol);

    if (this.isMounted && isNewSymbol) {
      symbol.mount(this.node);
    }

    return isNewSymbol;
  };

  BrowserSprite.prototype.destroy = function destroy () {
    var ref = this;
    var config = ref.config;
    var symbols = ref.symbols;
    var _emitter = ref._emitter;

    symbols.forEach(function (s) { return s.destroy(); });

    _emitter.off('*');
    window.removeEventListener(config.locationChangeEvent, this._handleLocationChange);

    if (this.isMounted) {
      this.unmount();
    }
  };

  /**
   * @param {Element|string} [target]
   * @param {boolean} [prepend=false]
   * @return {Element} rendered sprite node
   * @fires Events#MOUNT
   */
  BrowserSprite.prototype.mount = function mount (target, prepend) {
    if ( prepend === void 0 ) prepend = false;

    if (this.isMounted) {
      return this.node;
    }

    var mountTarget = target || this.config.mountTo;
    var parent = typeof mountTarget === 'string' ? document.querySelector(mountTarget) : mountTarget;
    var node = this.render();

    if (prepend && parent.childNodes[0]) {
      parent.insertBefore(node, parent.childNodes[0]);
    } else {
      parent.appendChild(node);
    }

    this.node = node;
    this._emitter.emit(Events.MOUNT, node);

    return node;
  };

  /**
   * @return {Element}
   */
  BrowserSprite.prototype.render = function render () {
    return parse(this.stringify());
  };

  /**
   * Detach sprite from the DOM
   */
  BrowserSprite.prototype.unmount = function unmount () {
    this.node.parentNode.removeChild(this.node);
  };

  /**
   * Update URLs in sprite and usage elements
   * @param {string} oldUrl
   * @param {string} newUrl
   * @return {boolean} `true` - URLs was updated, `false` - sprite is not mounted
   */
  BrowserSprite.prototype.updateUrls = function updateUrls$1 (oldUrl, newUrl) {
    if (!this.isMounted) {
      return false;
    }

    var usages = document.querySelectorAll(this.config.usagesToUpdate);

    updateUrls(
      this.node,
      usages,
      ((getUrlWithoutFragment(oldUrl)) + "#"),
      ((getUrlWithoutFragment(newUrl)) + "#")
    );

    return true;
  };

  Object.defineProperties( BrowserSprite.prototype, prototypeAccessors );

  return BrowserSprite;
}(Sprite));

var ready$1 = createCommonjsModule(function (module) {
/*!
  * domready (c) Dustin Diaz 2014 - License MIT
  */
!function (name, definition) {

  { module.exports = definition(); }

}('domready', function () {

  var fns = [], listener
    , doc = document
    , hack = doc.documentElement.doScroll
    , domContentLoaded = 'DOMContentLoaded'
    , loaded = (hack ? /^loaded|^c/ : /^loaded|^i|^c/).test(doc.readyState);


  if (!loaded)
  { doc.addEventListener(domContentLoaded, listener = function () {
    doc.removeEventListener(domContentLoaded, listener);
    loaded = 1;
    while (listener = fns.shift()) { listener(); }
  }); }

  return function (fn) {
    loaded ? setTimeout(fn, 0) : fns.push(fn);
  }

});
});

var sprite = new BrowserSprite();

ready$1(function () { return sprite.mount(document.body, true); });

return sprite;

})));

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(43)))

/***/ }),
/* 13 */,
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = __webpack_require__(5);

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = __webpack_require__(9);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _classCallCheck2 = __webpack_require__(1);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(4);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(2);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _ListItem = __webpack_require__(171);

var _ListItem2 = _interopRequireDefault(_ListItem);

var _classnames = __webpack_require__(10);

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var __rest = undefined && undefined.__rest || function (s, e) {
    var t = {};
    for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    }if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
    }return t;
};
/* tslint:disable:jsx-no-multiline-js */

var List = function (_React$Component) {
    (0, _inherits3['default'])(List, _React$Component);

    function List() {
        (0, _classCallCheck3['default'])(this, List);
        return (0, _possibleConstructorReturn3['default'])(this, (List.__proto__ || Object.getPrototypeOf(List)).apply(this, arguments));
    }

    (0, _createClass3['default'])(List, [{
        key: 'render',
        value: function render() {
            var _classNames;

            var _a = this.props,
                prefixCls = _a.prefixCls,
                children = _a.children,
                className = _a.className,
                style = _a.style,
                renderHeader = _a.renderHeader,
                renderFooter = _a.renderFooter,
                restProps = __rest(_a, ["prefixCls", "children", "className", "style", "renderHeader", "renderFooter"]);
            var wrapCls = (0, _classnames2['default'])((_classNames = {}, (0, _defineProperty3['default'])(_classNames, prefixCls, true), (0, _defineProperty3['default'])(_classNames, className, className), _classNames));
            return _react2['default'].createElement(
                'div',
                (0, _extends3['default'])({ className: wrapCls, style: style }, restProps),
                renderHeader ? _react2['default'].createElement(
                    'div',
                    { className: prefixCls + '-header' },
                    typeof renderHeader === 'function' ? renderHeader() : renderHeader
                ) : null,
                children ? _react2['default'].createElement(
                    'div',
                    { className: prefixCls + '-body' },
                    children
                ) : null,
                renderFooter ? _react2['default'].createElement(
                    'div',
                    { className: prefixCls + '-footer' },
                    typeof renderFooter === 'function' ? renderFooter() : renderFooter
                ) : null
            );
        }
    }]);
    return List;
}(_react2['default'].Component);

exports['default'] = List;

List.Item = _ListItem2['default'];
List.defaultProps = {
    prefixCls: 'am-list'
};
module.exports = exports['default'];

/***/ }),
/* 15 */,
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = __webpack_require__(5);

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = __webpack_require__(9);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _classCallCheck2 = __webpack_require__(1);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(4);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(2);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(10);

var _classnames2 = _interopRequireDefault(_classnames);

var _icon = __webpack_require__(18);

var _icon2 = _interopRequireDefault(_icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var __rest = undefined && undefined.__rest || function (s, e) {
    var t = {};
    for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    }if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
    }return t;
};
/* tslint:disable:jsx-no-multiline-js */

var NavBar = function (_React$Component) {
    (0, _inherits3['default'])(NavBar, _React$Component);

    function NavBar() {
        (0, _classCallCheck3['default'])(this, NavBar);
        return (0, _possibleConstructorReturn3['default'])(this, (NavBar.__proto__ || Object.getPrototypeOf(NavBar)).apply(this, arguments));
    }

    (0, _createClass3['default'])(NavBar, [{
        key: 'render',
        value: function render() {
            var _classNames;

            var _a = this.props,
                prefixCls = _a.prefixCls,
                className = _a.className,
                children = _a.children,
                mode = _a.mode,
                iconName = _a.iconName,
                leftContent = _a.leftContent,
                rightContent = _a.rightContent,
                onLeftClick = _a.onLeftClick,
                restProps = __rest(_a, ["prefixCls", "className", "children", "mode", "iconName", "leftContent", "rightContent", "onLeftClick"]);
            var wrapCls = (0, _classnames2['default'])((_classNames = {}, (0, _defineProperty3['default'])(_classNames, className, className), (0, _defineProperty3['default'])(_classNames, prefixCls, true), (0, _defineProperty3['default'])(_classNames, prefixCls + '-' + mode, true), _classNames));
            return _react2['default'].createElement(
                'div',
                (0, _extends3['default'])({}, restProps, { className: wrapCls }),
                _react2['default'].createElement(
                    'div',
                    { className: prefixCls + '-left', role: 'button', onClick: onLeftClick },
                    iconName && _react2['default'].createElement(
                        'span',
                        { className: prefixCls + '-left-icon', 'aria-hidden': 'true' },
                        _react2['default'].createElement(_icon2['default'], { type: iconName })
                    ),
                    _react2['default'].createElement(
                        'span',
                        { className: prefixCls + '-left-content' },
                        leftContent
                    )
                ),
                _react2['default'].createElement(
                    'div',
                    { className: prefixCls + '-title' },
                    children
                ),
                _react2['default'].createElement(
                    'div',
                    { className: prefixCls + '-right' },
                    rightContent
                )
            );
        }
    }]);
    return NavBar;
}(_react2['default'].Component);

exports['default'] = NavBar;

NavBar.defaultProps = {
    prefixCls: 'am-navbar',
    mode: 'dark',
    iconName: 'left',
    onLeftClick: function onLeftClick() {}
};
module.exports = exports['default'];

/***/ }),
/* 17 */,
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = __webpack_require__(5);

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = __webpack_require__(9);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _classCallCheck2 = __webpack_require__(1);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(4);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(2);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(10);

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var __rest = undefined && undefined.__rest || function (s, e) {
    var t = {};
    for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    }if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
    }return t;
};

var Icon = function (_React$Component) {
    (0, _inherits3['default'])(Icon, _React$Component);

    function Icon() {
        (0, _classCallCheck3['default'])(this, Icon);

        var _this = (0, _possibleConstructorReturn3['default'])(this, (Icon.__proto__ || Object.getPrototypeOf(Icon)).apply(this, arguments));

        _this.renderSvg = function () {
            var svg = void 0;
            try {
                svg = __webpack_require__(164)("./" + _this.props.type + '.svg');
            } catch (e) {} finally {
                return svg;
            }
        };
        return _this;
    }

    (0, _createClass3['default'])(Icon, [{
        key: 'render',
        value: function render() {
            var _classNames;

            var _a = this.props,
                type = _a.type,
                className = _a.className,
                style = _a.style,
                size = _a.size,
                restProps = __rest(_a, ["type", "className", "style", "size"]);
            var xlinkHref = this.renderSvg();
            var outerIcon = void 0;
            if (!xlinkHref) {
                outerIcon = true;
                xlinkHref = type;
            } else {
                xlinkHref = '#' + type;
            }
            var iconClassName = (0, _classnames2['default'])((_classNames = {
                'am-icon': true
            }, (0, _defineProperty3['default'])(_classNames, 'am-icon-' + (outerIcon ? type.substr(1) : type), true), (0, _defineProperty3['default'])(_classNames, 'am-icon-' + size, true), (0, _defineProperty3['default'])(_classNames, className, !!className), _classNames));
            return _react2['default'].createElement(
                'svg',
                (0, _extends3['default'])({ className: iconClassName, style: style }, restProps),
                _react2['default'].createElement('use', { xlinkHref: xlinkHref })
            );
        }
    }]);
    return Icon;
}(_react2['default'].Component);

exports['default'] = Icon;

Icon.defaultProps = {
    size: 'md'
};
module.exports = exports['default'];

/***/ }),
/* 19 */,
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _defineProperty2 = __webpack_require__(9);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _rcNotification = __webpack_require__(192);

var _rcNotification2 = _interopRequireDefault(_rcNotification);

var _icon = __webpack_require__(18);

var _icon2 = _interopRequireDefault(_icon);

var _classnames2 = __webpack_require__(10);

var _classnames3 = _interopRequireDefault(_classnames2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var messageInstance = void 0;
var prefixCls = 'am-toast';
function getMessageInstance(mask) {
    var _classnames;

    if (messageInstance) {
        messageInstance.destroy();
        messageInstance = null;
    }
    messageInstance = _rcNotification2['default'].newInstance({
        prefixCls: prefixCls,
        style: {},
        transitionName: 'am-fade',
        className: (0, _classnames3['default'])((_classnames = {}, (0, _defineProperty3['default'])(_classnames, prefixCls + '-mask', mask), (0, _defineProperty3['default'])(_classnames, prefixCls + '-nomask', !mask), _classnames))
    });
    return messageInstance;
}
function notice(content, type) {
    var duration = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 3;
    var _onClose = arguments[3];
    var mask = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : true;

    var iconType = {
        info: '',
        success: __webpack_require__(428),
        fail: __webpack_require__(427),
        offline: __webpack_require__(426),
        loading: 'loading'
    }[type];
    var instance = getMessageInstance(mask);
    instance.notice({
        duration: duration,
        style: {},
        content: !!iconType ? _react2['default'].createElement(
            'div',
            { className: prefixCls + '-text ' + prefixCls + '-text-icon', role: 'alert', 'aria-live': 'assertive' },
            _react2['default'].createElement(_icon2['default'], { type: iconType, size: 'lg' }),
            _react2['default'].createElement(
                'div',
                { className: prefixCls + '-text-info' },
                content
            )
        ) : _react2['default'].createElement(
            'div',
            { className: prefixCls + '-text', role: 'alert', 'aria-live': 'assertive' },
            _react2['default'].createElement(
                'div',
                null,
                content
            )
        ),
        onClose: function onClose() {
            if (_onClose) {
                _onClose();
            }
            instance.destroy();
            instance = null;
            messageInstance = null;
        }
    });
}
exports['default'] = {
    SHORT: 3,
    LONG: 8,
    show: function show(content, duration, mask) {
        return notice(content, 'info', duration, function () {}, mask);
    },
    info: function info(content, duration, onClose, mask) {
        return notice(content, 'info', duration, onClose, mask);
    },
    success: function success(content, duration, onClose, mask) {
        return notice(content, 'success', duration, onClose, mask);
    },
    fail: function fail(content, duration, onClose, mask) {
        return notice(content, 'fail', duration, onClose, mask);
    },
    offline: function offline(content, duration, onClose, mask) {
        return notice(content, 'offline', duration, onClose, mask);
    },
    loading: function loading(content, duration, onClose, mask) {
        return notice(content, 'loading', duration, onClose, mask);
    },
    hide: function hide() {
        if (messageInstance) {
            messageInstance.destroy();
            messageInstance = null;
        }
    }
};
module.exports = exports['default'];

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(279), __esModule: true };

/***/ }),
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = __webpack_require__(5);

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = __webpack_require__(9);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _classCallCheck2 = __webpack_require__(1);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(4);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(2);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(10);

var _classnames2 = _interopRequireDefault(_classnames);

var _index = __webpack_require__(18);

var _index2 = _interopRequireDefault(_index);

var _rcTouchable = __webpack_require__(36);

var _rcTouchable2 = _interopRequireDefault(_rcTouchable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var __rest = undefined && undefined.__rest || function (s, e) {
    var t = {};
    for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    }if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
    }return t;
};

var rxTwoCNChar = /^[\u4e00-\u9fa5]{2}$/;
var isTwoCNChar = rxTwoCNChar.test.bind(rxTwoCNChar);
function isString(str) {
    return typeof str === 'string';
}
// Insert one space between two chinese characters automatically.
function insertSpace(child) {
    if (isString(child.type) && isTwoCNChar(child.props.children)) {
        return _react2['default'].cloneElement(child, {}, child.props.children.split('').join(' '));
    }
    if (isString(child)) {
        if (isTwoCNChar(child)) {
            child = child.split('').join(' ');
        }
        return _react2['default'].createElement(
            'span',
            null,
            child
        );
    }
    return child;
}

var Button = function (_React$Component) {
    (0, _inherits3['default'])(Button, _React$Component);

    function Button() {
        (0, _classCallCheck3['default'])(this, Button);
        return (0, _possibleConstructorReturn3['default'])(this, (Button.__proto__ || Object.getPrototypeOf(Button)).apply(this, arguments));
    }

    (0, _createClass3['default'])(Button, [{
        key: 'render',
        value: function render() {
            var _wrapCls;

            var _a = this.props,
                children = _a.children,
                className = _a.className,
                prefixCls = _a.prefixCls,
                type = _a.type,
                size = _a.size,
                inline = _a.inline,
                across = _a.across,
                disabled = _a.disabled,
                icon = _a.icon,
                loading = _a.loading,
                activeStyle = _a.activeStyle,
                activeClassName = _a.activeClassName,
                onClick = _a.onClick,
                delayPressIn = _a.delayPressIn,
                delayPressOut = _a.delayPressOut,
                restProps = __rest(_a, ["children", "className", "prefixCls", "type", "size", "inline", "across", "disabled", "icon", "loading", "activeStyle", "activeClassName", "onClick", "delayPressIn", "delayPressOut"]);
            var wrapCls = (_wrapCls = {}, (0, _defineProperty3['default'])(_wrapCls, className, className), (0, _defineProperty3['default'])(_wrapCls, prefixCls, true), (0, _defineProperty3['default'])(_wrapCls, prefixCls + '-primary', type === 'primary'), (0, _defineProperty3['default'])(_wrapCls, prefixCls + '-ghost', type === 'ghost'), (0, _defineProperty3['default'])(_wrapCls, prefixCls + '-warning', type === 'warning'), (0, _defineProperty3['default'])(_wrapCls, prefixCls + '-small', size === 'small'), (0, _defineProperty3['default'])(_wrapCls, prefixCls + '-inline', inline), (0, _defineProperty3['default'])(_wrapCls, prefixCls + '-across', across), (0, _defineProperty3['default'])(_wrapCls, prefixCls + '-disabled', disabled), (0, _defineProperty3['default'])(_wrapCls, prefixCls + '-loading', loading), _wrapCls);
            var iconType = loading ? 'loading' : icon;
            var kids = _react2['default'].Children.map(children, insertSpace);
            if (iconType) {
                wrapCls[prefixCls + '-icon'] = true;
            }
            var delayProps = {};
            if (delayPressIn) {
                delayProps.delayPressIn = delayPressIn;
            }
            if (delayPressOut) {
                delayProps.delayPressOut = delayPressOut;
            }
            // use div, button native is buggy @yiminghe
            return _react2['default'].createElement(
                _rcTouchable2['default'],
                (0, _extends3['default'])({ activeClassName: activeClassName || (activeStyle ? prefixCls + '-active' : undefined), disabled: disabled, activeStyle: activeStyle }, delayProps),
                _react2['default'].createElement(
                    'a',
                    (0, _extends3['default'])({ role: 'button', className: (0, _classnames2['default'])(wrapCls) }, restProps, { onClick: disabled ? undefined : onClick, 'aria-disabled': disabled }),
                    iconType ? _react2['default'].createElement(_index2['default'], { 'aria-hidden': 'true', type: iconType, size: size === 'small' ? 'xxs' : 'md' }) : null,
                    kids
                )
            );
        }
    }]);
    return Button;
}(_react2['default'].Component);

Button.defaultProps = {
    prefixCls: 'am-button',
    size: 'large',
    inline: false,
    across: false,
    disabled: false,
    loading: false,
    activeStyle: {}
};
exports['default'] = Button;
module.exports = exports['default'];

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = __webpack_require__(5);

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = __webpack_require__(9);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _classCallCheck2 = __webpack_require__(1);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(4);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(2);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(6);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(10);

var _classnames2 = _interopRequireDefault(_classnames);

var _omit = __webpack_require__(29);

var _omit2 = _interopRequireDefault(_omit);

var _Input = __webpack_require__(168);

var _Input2 = _interopRequireDefault(_Input);

var _CustomInput = __webpack_require__(166);

var _CustomInput2 = _interopRequireDefault(_CustomInput);

var _getLocale = __webpack_require__(97);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function noop() {} /* tslint:disable:jsx-no-multiline-js */

function fixControlledValue(value) {
    if (typeof value === 'undefined' || value === null) {
        return '';
    }
    return value;
}

var InputItem = function (_React$Component) {
    (0, _inherits3['default'])(InputItem, _React$Component);

    function InputItem(props) {
        (0, _classCallCheck3['default'])(this, InputItem);

        var _this = (0, _possibleConstructorReturn3['default'])(this, (InputItem.__proto__ || Object.getPrototypeOf(InputItem)).call(this, props));

        _this.onInputChange = function (e) {
            var value = e.target.value;
            var _this$props = _this.props,
                onChange = _this$props.onChange,
                type = _this$props.type;

            switch (type) {
                case 'text':
                    break;
                case 'bankCard':
                    value = value.replace(/\D/g, '').replace(/(....)(?=.)/g, '$1 ');
                    break;
                case 'phone':
                    value = value.replace(/\D/g, '').substring(0, 11);
                    var valueLen = value.length;
                    if (valueLen > 3 && valueLen < 8) {
                        value = value.substr(0, 3) + ' ' + value.substr(3);
                    } else if (valueLen >= 8) {
                        value = value.substr(0, 3) + ' ' + value.substr(3, 4) + ' ' + value.substr(7);
                    }
                    break;
                case 'number':
                    value = value.replace(/\D/g, '');
                    break;
                case 'password':
                    break;
                default:
                    break;
            }
            if (onChange) {
                onChange(value);
            }
        };
        _this.onInputFocus = function (value) {
            if (_this.debounceTimeout) {
                clearTimeout(_this.debounceTimeout);
                _this.debounceTimeout = null;
            }
            _this.setState({
                focus: true
            });
            if (document.activeElement.tagName.toLowerCase() === 'input') {
                _this.scrollIntoViewTimeout = setTimeout(function () {
                    try {
                        document.activeElement.scrollIntoViewIfNeeded();
                    } catch (e) {}
                }, 100);
            }
            if (_this.props.onFocus) {
                _this.props.onFocus(value);
            }
        };
        _this.onInputBlur = function (value) {
            _this.debounceTimeout = setTimeout(function () {
                _this.setState({
                    focus: false
                });
            }, 200);
            if (_this.props.onBlur) {
                _this.props.onBlur(value);
            }
        };
        _this.onExtraClick = function (e) {
            if (_this.props.onExtraClick) {
                _this.props.onExtraClick(e);
            }
        };
        _this.onErrorClick = function (e) {
            if (_this.props.onErrorClick) {
                _this.props.onErrorClick(e);
            }
        };
        _this.clearInput = function () {
            if (_this.props.type !== 'password' && _this.props.updatePlaceholder) {
                _this.setState({
                    placeholder: _this.props.value
                });
            }
            if (_this.props.onChange) {
                _this.props.onChange('');
            }
        };
        _this.state = {
            placeholder: props.placeholder
        };
        return _this;
    }

    (0, _createClass3['default'])(InputItem, [{
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            if ('placeholder' in nextProps && !nextProps.updatePlaceholder) {
                this.setState({
                    placeholder: nextProps.placeholder
                });
            }
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            if (this.debounceTimeout) {
                clearTimeout(this.debounceTimeout);
                this.debounceTimeout = null;
            }
            if (this.scrollIntoViewTimeout) {
                clearTimeout(this.scrollIntoViewTimeout);
                this.scrollIntoViewTimeout = null;
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _classNames, _classNames2;

            var _props = this.props,
                prefixCls = _props.prefixCls,
                prefixListCls = _props.prefixListCls,
                type = _props.type,
                value = _props.value,
                defaultValue = _props.defaultValue,
                name = _props.name,
                editable = _props.editable,
                disabled = _props.disabled,
                style = _props.style,
                clear = _props.clear,
                children = _props.children,
                error = _props.error,
                className = _props.className,
                extra = _props.extra,
                labelNumber = _props.labelNumber,
                maxLength = _props.maxLength;
            // note: remove `placeholderTextColor` prop for rn TextInput supports placeholderTextColor

            var otherProps = (0, _omit2['default'])(this.props, ['prefixCls', 'prefixListCls', 'editable', 'style', 'clear', 'children', 'error', 'className', 'extra', 'labelNumber', 'onExtraClick', 'onErrorClick', 'updatePlaceholder', 'placeholderTextColor', 'type', 'locale']);
            var locale = (0, _getLocale.getComponentLocale)(this.props, this.context, 'InputItem', function () {
                return __webpack_require__(169);
            });
            var confirmLabel = locale.confirmLabel;
            var _state = this.state,
                placeholder = _state.placeholder,
                focus = _state.focus;

            var wrapCls = (0, _classnames2['default'])((_classNames = {}, (0, _defineProperty3['default'])(_classNames, prefixListCls + '-item', true), (0, _defineProperty3['default'])(_classNames, prefixCls + '-item', true), (0, _defineProperty3['default'])(_classNames, prefixCls + '-disabled', disabled), (0, _defineProperty3['default'])(_classNames, prefixCls + '-error', error), (0, _defineProperty3['default'])(_classNames, prefixCls + '-focus', focus), (0, _defineProperty3['default'])(_classNames, prefixCls + '-android', focus), (0, _defineProperty3['default'])(_classNames, className, className), _classNames));
            var labelCls = (0, _classnames2['default'])((_classNames2 = {}, (0, _defineProperty3['default'])(_classNames2, prefixCls + '-label', true), (0, _defineProperty3['default'])(_classNames2, prefixCls + '-label-2', labelNumber === 2), (0, _defineProperty3['default'])(_classNames2, prefixCls + '-label-3', labelNumber === 3), (0, _defineProperty3['default'])(_classNames2, prefixCls + '-label-4', labelNumber === 4), (0, _defineProperty3['default'])(_classNames2, prefixCls + '-label-5', labelNumber === 5), (0, _defineProperty3['default'])(_classNames2, prefixCls + '-label-6', labelNumber === 6), (0, _defineProperty3['default'])(_classNames2, prefixCls + '-label-7', labelNumber === 7), _classNames2));
            var controlCls = (0, _classnames2['default'])((0, _defineProperty3['default'])({}, prefixCls + '-control', true));
            var inputType = 'text';
            if (type === 'bankCard' || type === 'phone') {
                inputType = 'tel';
            } else if (type === 'password') {
                inputType = 'password';
            } else if (type === 'digit') {
                inputType = 'number';
            } else if (type !== 'text' && type !== 'number') {
                inputType = type;
            }
            var valueProps = void 0;
            if ('value' in this.props) {
                valueProps = {
                    value: fixControlledValue(value)
                };
            } else {
                valueProps = {
                    defaultValue: defaultValue
                };
            }
            var patternProps = void 0;
            if (type === 'number') {
                patternProps = {
                    pattern: '[0-9]*'
                };
            }
            var classNameProps = void 0;
            if (type === 'digit') {
                classNameProps = {
                    className: 'h5numInput'
                };
            }
            return _react2['default'].createElement(
                'div',
                { className: wrapCls, style: style },
                children ? _react2['default'].createElement(
                    'div',
                    { className: labelCls },
                    children
                ) : null,
                _react2['default'].createElement(
                    'div',
                    { className: controlCls },
                    type === 'money' ? _react2['default'].createElement(_CustomInput2['default'], (0, _extends3['default'])({ type: type, maxLength: maxLength, placeholder: placeholder, onChange: this.onInputChange, onFocus: this.onInputFocus, onBlur: this.onInputBlur, disabled: disabled, editable: editable, value: fixControlledValue(value) }, this.props.focused !== undefined ? { focused: this.props.focused } : {}, this.props.autoFocus !== undefined ? { autoFocus: this.props.autoFocus } : {}, { prefixCls: prefixCls, confirmLabel: confirmLabel })) : _react2['default'].createElement(_Input2['default'], (0, _extends3['default'])({}, patternProps, otherProps, valueProps, classNameProps, { type: inputType, maxLength: maxLength, name: name, placeholder: placeholder, onChange: this.onInputChange, onFocus: this.onInputFocus, onBlur: this.onInputBlur, readOnly: !editable, disabled: disabled }))
                ),
                clear && editable && !disabled && value && value.length > 0 ? _react2['default'].createElement('div', { className: prefixCls + '-clear', onClick: this.clearInput }) : null,
                error ? _react2['default'].createElement('div', { className: prefixCls + '-error-extra', onClick: this.onErrorClick }) : null,
                extra !== '' ? _react2['default'].createElement(
                    'div',
                    { className: prefixCls + '-extra', onClick: this.onExtraClick },
                    extra
                ) : null
            );
        }
    }]);
    return InputItem;
}(_react2['default'].Component);

InputItem.defaultProps = {
    prefixCls: 'am-input',
    prefixListCls: 'am-list',
    type: 'text',
    editable: true,
    disabled: false,
    placeholder: '',
    clear: false,
    onChange: noop,
    onBlur: noop,
    onFocus: noop,
    extra: '',
    onExtraClick: noop,
    error: false,
    onErrorClick: noop,
    labelNumber: 5,
    updatePlaceholder: false
};
InputItem.contextTypes = {
    antLocale: _propTypes2['default'].object
};
exports['default'] = InputItem;
module.exports = exports['default'];

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var assign = __webpack_require__(17);

module.exports = function omit(obj, fields) {
  var copy = assign({}, obj);
  for (var i = 0; i < fields.length; i++) {
    var key = fields[i];
    delete copy[key];
  }
  return copy;
};


/***/ }),
/* 30 */,
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Modal = __webpack_require__(52);

var _Modal2 = _interopRequireDefault(_Modal);

var _alert = __webpack_require__(175);

var _alert2 = _interopRequireDefault(_alert);

var _prompt = __webpack_require__(177);

var _prompt2 = _interopRequireDefault(_prompt);

var _operation = __webpack_require__(176);

var _operation2 = _interopRequireDefault(_operation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

_Modal2['default'].alert = _alert2['default'];
_Modal2['default'].prompt = _prompt2['default'];
_Modal2['default'].operation = _operation2['default'];
exports['default'] = _Modal2['default'];
module.exports = exports['default'];

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = __webpack_require__(5);

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = __webpack_require__(1);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(4);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(2);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Popup = __webpack_require__(382);

var _Popup2 = _interopRequireDefault(_Popup);

var _Cascader = __webpack_require__(381);

var _Cascader2 = _interopRequireDefault(_Cascader);

var _MultiPicker = __webpack_require__(88);

var _MultiPicker2 = _interopRequireDefault(_MultiPicker);

var _arrayTreeFilter = __webpack_require__(105);

var _arrayTreeFilter2 = _interopRequireDefault(_arrayTreeFilter);

var _styles = __webpack_require__(181);

var _styles2 = _interopRequireDefault(_styles);

var _popupProps = __webpack_require__(180);

var _popupProps2 = _interopRequireDefault(_popupProps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function getDefaultProps() {
    var defaultFormat = function defaultFormat(values) {
        return values.join(',');
    };
    return {
        triggerType: 'onClick',
        prefixCls: 'am-picker',
        pickerPrefixCls: 'am-picker-col',
        popupPrefixCls: 'am-picker-popup',
        format: defaultFormat,
        cols: 3,
        cascade: true,
        extra: '请选择',
        okText: '确定',
        dismissText: '取消',
        title: '',
        styles: _styles2['default']
    };
}

var Picker = function (_React$Component) {
    (0, _inherits3['default'])(Picker, _React$Component);

    function Picker() {
        (0, _classCallCheck3['default'])(this, Picker);

        var _this = (0, _possibleConstructorReturn3['default'])(this, (Picker.__proto__ || Object.getPrototypeOf(Picker)).apply(this, arguments));

        _this.getSel = function () {
            var value = _this.props.value || [];
            var treeChildren = void 0;
            if (_this.props.cascade) {
                treeChildren = (0, _arrayTreeFilter2['default'])(_this.props.data, function (c, level) {
                    return c.value === value[level];
                });
            } else {
                treeChildren = value.map(function (v, i) {
                    return _this.props.data[i].filter(function (d) {
                        return d.value === v;
                    })[0];
                });
            }
            return _this.props.format && _this.props.format(treeChildren.map(function (v) {
                return v.label;
            }));
        };
        return _this;
    }

    (0, _createClass3['default'])(Picker, [{
        key: 'render',
        value: function render() {
            var props = this.props;
            var children = props.children,
                _props$value = props.value,
                value = _props$value === undefined ? [] : _props$value,
                extra = props.extra,
                okText = props.okText,
                itemStyle = props.itemStyle,
                dismissText = props.dismissText,
                popupPrefixCls = props.popupPrefixCls,
                cascade = props.cascade;

            var cascader = void 0;
            var popupMoreProps = {};
            if (cascade) {
                cascader = _react2['default'].createElement(_Cascader2['default'], { prefixCls: props.prefixCls, pickerPrefixCls: props.pickerPrefixCls, data: props.data, cols: props.cols, onChange: props.onPickerChange, pickerItemStyle: itemStyle });
            } else {
                cascader = _react2['default'].createElement(
                    _MultiPicker2['default'],
                    { prefixCls: props.prefixCls, pickerPrefixCls: props.pickerPrefixCls, pickerItemStyle: itemStyle },
                    props.data.map(function (d) {
                        return { props: { children: d } };
                    })
                );
                popupMoreProps = {
                    pickerValueProp: 'selectedValue',
                    pickerValueChangeProp: 'onValueChange'
                };
            }
            return _react2['default'].createElement(
                _Popup2['default'],
                (0, _extends3['default'])({ cascader: cascader }, _popupProps2['default'], props, { prefixCls: popupPrefixCls, value: value, dismissText: dismissText, okText: okText }, popupMoreProps),
                _react2['default'].cloneElement(children, { extra: this.getSel() || extra })
            );
        }
    }]);
    return Picker;
}(_react2['default'].Component);

exports['default'] = Picker;

Picker.defaultProps = getDefaultProps();
module.exports = exports['default'];

/***/ }),
/* 33 */,
/* 34 */,
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(277), __esModule: true };

/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_object_assign__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_object_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_object_assign__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_dom__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__PressEvent__ = __webpack_require__(372);
// inspired by react-native










function keyMirror(obj) {
    Object.keys(obj).forEach(function (k) {
        return obj[k] = k;
    });
    return obj;
}
function copy(from, list) {
    var to = {};
    list.forEach(function (k) {
        to[k] = from[k];
    });
    return to;
}
function extractSingleTouch(_nativeEvent) {
    var nativeEvent = _nativeEvent;
    if (nativeEvent.nativeEvent) {
        nativeEvent = nativeEvent.nativeEvent;
    }
    var touches = nativeEvent.touches;
    var changedTouches = nativeEvent.changedTouches;
    var hasTouches = touches && touches.length > 0;
    var hasChangedTouches = changedTouches && changedTouches.length > 0;
    return !hasTouches && hasChangedTouches ? changedTouches[0] : hasTouches ? touches[0] : nativeEvent;
}
/**
 * Touchable states.
 */
var States = keyMirror({
    NOT_RESPONDER: null,
    RESPONDER_INACTIVE_PRESS_IN: null,
    RESPONDER_INACTIVE_PRESS_OUT: null,
    RESPONDER_ACTIVE_PRESS_IN: null,
    RESPONDER_ACTIVE_PRESS_OUT: null,
    RESPONDER_ACTIVE_LONG_PRESS_IN: null,
    RESPONDER_ACTIVE_LONG_PRESS_OUT: null,
    ERROR: null
});
/**
 * Quick lookup map for states that are considered to be "active"
 */
var IsActive = {
    RESPONDER_ACTIVE_PRESS_OUT: true,
    RESPONDER_ACTIVE_PRESS_IN: true
};
/**
 * Quick lookup for states that are considered to be "pressing" and are
 * therefore eligible to result in a "selection" if the press stops.
 */
var IsPressingIn = {
    RESPONDER_INACTIVE_PRESS_IN: true,
    RESPONDER_ACTIVE_PRESS_IN: true,
    RESPONDER_ACTIVE_LONG_PRESS_IN: true
};
var IsLongPressingIn = {
    RESPONDER_ACTIVE_LONG_PRESS_IN: true
};
/**
 * Inputs to the state machine.
 */
var Signals = keyMirror({
    DELAY: null,
    RESPONDER_GRANT: null,
    RESPONDER_RELEASE: null,
    RESPONDER_TERMINATED: null,
    ENTER_PRESS_RECT: null,
    LEAVE_PRESS_RECT: null,
    LONG_PRESS_DETECTED: null
});
/**
 * Mapping from States x Signals => States
 */
var Transitions = {
    NOT_RESPONDER: {
        DELAY: States.ERROR,
        RESPONDER_GRANT: States.RESPONDER_INACTIVE_PRESS_IN,
        RESPONDER_RELEASE: States.ERROR,
        RESPONDER_TERMINATED: States.ERROR,
        ENTER_PRESS_RECT: States.ERROR,
        LEAVE_PRESS_RECT: States.ERROR,
        LONG_PRESS_DETECTED: States.ERROR
    },
    RESPONDER_INACTIVE_PRESS_IN: {
        DELAY: States.RESPONDER_ACTIVE_PRESS_IN,
        RESPONDER_GRANT: States.ERROR,
        RESPONDER_RELEASE: States.NOT_RESPONDER,
        RESPONDER_TERMINATED: States.NOT_RESPONDER,
        ENTER_PRESS_RECT: States.RESPONDER_INACTIVE_PRESS_IN,
        LEAVE_PRESS_RECT: States.RESPONDER_INACTIVE_PRESS_OUT,
        LONG_PRESS_DETECTED: States.ERROR
    },
    RESPONDER_INACTIVE_PRESS_OUT: {
        DELAY: States.RESPONDER_ACTIVE_PRESS_OUT,
        RESPONDER_GRANT: States.ERROR,
        RESPONDER_RELEASE: States.NOT_RESPONDER,
        RESPONDER_TERMINATED: States.NOT_RESPONDER,
        ENTER_PRESS_RECT: States.RESPONDER_INACTIVE_PRESS_IN,
        LEAVE_PRESS_RECT: States.RESPONDER_INACTIVE_PRESS_OUT,
        LONG_PRESS_DETECTED: States.ERROR
    },
    RESPONDER_ACTIVE_PRESS_IN: {
        DELAY: States.ERROR,
        RESPONDER_GRANT: States.ERROR,
        RESPONDER_RELEASE: States.NOT_RESPONDER,
        RESPONDER_TERMINATED: States.NOT_RESPONDER,
        ENTER_PRESS_RECT: States.RESPONDER_ACTIVE_PRESS_IN,
        LEAVE_PRESS_RECT: States.RESPONDER_ACTIVE_PRESS_OUT,
        LONG_PRESS_DETECTED: States.RESPONDER_ACTIVE_LONG_PRESS_IN
    },
    RESPONDER_ACTIVE_PRESS_OUT: {
        DELAY: States.ERROR,
        RESPONDER_GRANT: States.ERROR,
        RESPONDER_RELEASE: States.NOT_RESPONDER,
        RESPONDER_TERMINATED: States.NOT_RESPONDER,
        ENTER_PRESS_RECT: States.RESPONDER_ACTIVE_PRESS_IN,
        LEAVE_PRESS_RECT: States.RESPONDER_ACTIVE_PRESS_OUT,
        LONG_PRESS_DETECTED: States.ERROR
    },
    RESPONDER_ACTIVE_LONG_PRESS_IN: {
        DELAY: States.ERROR,
        RESPONDER_GRANT: States.ERROR,
        RESPONDER_RELEASE: States.NOT_RESPONDER,
        RESPONDER_TERMINATED: States.NOT_RESPONDER,
        ENTER_PRESS_RECT: States.RESPONDER_ACTIVE_LONG_PRESS_IN,
        LEAVE_PRESS_RECT: States.RESPONDER_ACTIVE_LONG_PRESS_OUT,
        LONG_PRESS_DETECTED: States.RESPONDER_ACTIVE_LONG_PRESS_IN
    },
    RESPONDER_ACTIVE_LONG_PRESS_OUT: {
        DELAY: States.ERROR,
        RESPONDER_GRANT: States.ERROR,
        RESPONDER_RELEASE: States.NOT_RESPONDER,
        RESPONDER_TERMINATED: States.NOT_RESPONDER,
        ENTER_PRESS_RECT: States.RESPONDER_ACTIVE_LONG_PRESS_IN,
        LEAVE_PRESS_RECT: States.RESPONDER_ACTIVE_LONG_PRESS_OUT,
        LONG_PRESS_DETECTED: States.ERROR
    },
    error: {
        DELAY: States.NOT_RESPONDER,
        RESPONDER_GRANT: States.RESPONDER_INACTIVE_PRESS_IN,
        RESPONDER_RELEASE: States.NOT_RESPONDER,
        RESPONDER_TERMINATED: States.NOT_RESPONDER,
        ENTER_PRESS_RECT: States.NOT_RESPONDER,
        LEAVE_PRESS_RECT: States.NOT_RESPONDER,
        LONG_PRESS_DETECTED: States.NOT_RESPONDER
    }
};
// ==== Typical Constants for integrating into UI components ====
// const HIT_EXPAND_PX = 20;
// const HIT_VERT_OFFSET_PX = 10;
var HIGHLIGHT_DELAY_MS = 130;
var PRESS_EXPAND_PX = 20;
var LONG_PRESS_THRESHOLD = 500;
var LONG_PRESS_DELAY_MS = LONG_PRESS_THRESHOLD - HIGHLIGHT_DELAY_MS;
var LONG_PRESS_ALLOWED_MOVEMENT = 10;
var lastClickTime = 0;
var pressDelay = 200;
function isAllowPress() {
    // avoid click penetration
    return Date.now() - lastClickTime >= pressDelay;
}

var Touchable = function (_React$Component) {
    __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits___default()(Touchable, _React$Component);

    function Touchable() {
        __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, Touchable);

        var _this = __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn___default()(this, (Touchable.__proto__ || Object.getPrototypeOf(Touchable)).apply(this, arguments));

        _this.state = {
            active: false
        };
        _this.onTouchStart = function (e) {
            _this.callChildEvent('onTouchStart', e);
            _this.lockMouse = true;
            if (_this.releaseLockTimer) {
                clearTimeout(_this.releaseLockTimer);
            }
            _this.touchableHandleResponderGrant(e.nativeEvent);
        };
        _this.onTouchMove = function (e) {
            _this.callChildEvent('onTouchMove', e);
            _this.touchableHandleResponderMove(e.nativeEvent);
        };
        _this.onTouchEnd = function (e) {
            _this.callChildEvent('onTouchEnd', e);
            _this.releaseLockTimer = setTimeout(function () {
                _this.lockMouse = false;
            }, 300);
            _this.touchableHandleResponderRelease(new __WEBPACK_IMPORTED_MODULE_7__PressEvent__["a" /* default */](e.nativeEvent));
        };
        _this.onTouchCancel = function (e) {
            _this.callChildEvent('onTouchCancel', e);
            _this.releaseLockTimer = setTimeout(function () {
                _this.lockMouse = false;
            }, 300);
            _this.touchableHandleResponderTerminate(e.nativeEvent);
        };
        _this.onMouseDown = function (e) {
            _this.callChildEvent('onMouseDown', e);
            if (_this.lockMouse) {
                return;
            }
            _this.touchableHandleResponderGrant(e.nativeEvent);
            document.addEventListener('mousemove', _this.touchableHandleResponderMove, false);
            document.addEventListener('mouseup', _this.onMouseUp, false);
        };
        _this.onMouseUp = function (e) {
            document.removeEventListener('mousemove', _this.touchableHandleResponderMove, false);
            document.removeEventListener('mouseup', _this.onMouseUp, false);
            _this.touchableHandleResponderRelease(new __WEBPACK_IMPORTED_MODULE_7__PressEvent__["a" /* default */](e));
        };
        _this.touchableHandleResponderMove = function (e) {
            if (!_this.touchable.startMouse) {
                return;
            }
            // Measurement may not have returned yet.
            if (!_this.touchable.dimensionsOnActivate || _this.touchable.touchState === States.NOT_RESPONDER) {
                return;
            }
            // Not enough time elapsed yet, wait for highlight -
            // this is just a perf optimization.
            if (_this.touchable.touchState === States.RESPONDER_INACTIVE_PRESS_IN) {
                return;
            }
            var touch = extractSingleTouch(e);
            var pageX = touch && touch.pageX;
            var pageY = touch && touch.pageY;
            if (_this.pressInLocation) {
                var movedDistance = _this._getDistanceBetweenPoints(pageX, pageY, _this.pressInLocation.pageX, _this.pressInLocation.pageY);
                if (movedDistance > LONG_PRESS_ALLOWED_MOVEMENT) {
                    _this._cancelLongPressDelayTimeout();
                }
            }
            if (_this.checkTouchWithinActive(e)) {
                _this._receiveSignal(Signals.ENTER_PRESS_RECT, e);
                var curState = _this.touchable.touchState;
                if (curState === States.RESPONDER_INACTIVE_PRESS_IN) {
                    _this._cancelLongPressDelayTimeout();
                }
            } else {
                _this._cancelLongPressDelayTimeout();
                _this._receiveSignal(Signals.LEAVE_PRESS_RECT, e);
            }
        };
        return _this;
    }

    __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default()(Touchable, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            this.touchable = { touchState: undefined };
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.root = __WEBPACK_IMPORTED_MODULE_6_react_dom___default.a.findDOMNode(this);
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate() {
            this.root = __WEBPACK_IMPORTED_MODULE_6_react_dom___default.a.findDOMNode(this);
            // disabled auto clear active state
            if (this.props.disabled && this.state.active) {
                this.setState({
                    active: false
                });
            }
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            if (this.releaseLockTimer) {
                clearTimeout(this.releaseLockTimer);
            }
            if (this.touchableDelayTimeout) {
                clearTimeout(this.touchableDelayTimeout);
            }
            if (this.longPressDelayTimeout) {
                clearTimeout(this.longPressDelayTimeout);
            }
            if (this.pressOutDelayTimeout) {
                clearTimeout(this.pressOutDelayTimeout);
            }
        }
    }, {
        key: 'callChildEvent',
        value: function callChildEvent(event, e) {
            var childHandle = __WEBPACK_IMPORTED_MODULE_4_react___default.a.Children.only(this.props.children).props[event];
            if (childHandle) {
                childHandle(e);
            }
        }
    }, {
        key: '_remeasureMetricsOnInit',
        value: function _remeasureMetricsOnInit(e) {
            var root = this.root;

            var touch = extractSingleTouch(e);
            var boundingRect = root.getBoundingClientRect();
            this.touchable = {
                touchState: this.touchable.touchState,
                startMouse: {
                    pageX: touch.pageX,
                    pageY: touch.pageY
                },
                positionOnGrant: {
                    left: boundingRect.left + window.pageXOffset,
                    top: boundingRect.top + window.pageYOffset,
                    width: boundingRect.width,
                    height: boundingRect.height,
                    clientLeft: boundingRect.left,
                    clientTop: boundingRect.top
                }
            };
        }
    }, {
        key: 'touchableHandleResponderGrant',
        value: function touchableHandleResponderGrant(e) {
            var _this2 = this;

            this.touchable.touchState = States.NOT_RESPONDER;
            if (this.pressOutDelayTimeout) {
                clearTimeout(this.pressOutDelayTimeout);
                this.pressOutDelayTimeout = null;
            }
            if (this.props.fixClickPenetration && !isAllowPress()) {
                return;
            }
            this._remeasureMetricsOnInit(e);
            this._receiveSignal(Signals.RESPONDER_GRANT, e);
            var delayMS = this.props.delayPressIn;
            if (delayMS) {
                this.touchableDelayTimeout = setTimeout(function () {
                    _this2._handleDelay(e);
                }, delayMS);
            } else {
                this._handleDelay(e);
            }
            var longPressEvent = new __WEBPACK_IMPORTED_MODULE_7__PressEvent__["a" /* default */](e);
            var longDelayMS = this.props.delayLongPress;
            this.longPressDelayTimeout = setTimeout(function () {
                _this2._handleLongDelay(longPressEvent);
            }, longDelayMS + delayMS);
        }
    }, {
        key: 'checkScroll',
        value: function checkScroll(e) {
            var positionOnGrant = this.touchable.positionOnGrant;
            // container or window scroll
            var boundingRect = this.root.getBoundingClientRect();
            if (boundingRect.left !== positionOnGrant.clientLeft || boundingRect.top !== positionOnGrant.clientTop) {
                this._receiveSignal(Signals.RESPONDER_TERMINATED, e);
                return false;
            }
        }
    }, {
        key: 'touchableHandleResponderRelease',
        value: function touchableHandleResponderRelease(e) {
            if (!this.touchable.startMouse) {
                return;
            }
            var touch = extractSingleTouch(e);
            if (Math.abs(touch.pageX - this.touchable.startMouse.pageX) > 30 || Math.abs(touch.pageY - this.touchable.startMouse.pageY) > 30) {
                this._receiveSignal(Signals.RESPONDER_TERMINATED, e);
                return;
            }
            if (this.checkScroll(e) === false) {
                return;
            }
            this._receiveSignal(Signals.RESPONDER_RELEASE, e);
        }
    }, {
        key: 'touchableHandleResponderTerminate',
        value: function touchableHandleResponderTerminate(e) {
            if (!this.touchable.startMouse) {
                return;
            }
            this._receiveSignal(Signals.RESPONDER_TERMINATED, e);
        }
    }, {
        key: 'checkTouchWithinActive',
        value: function checkTouchWithinActive(e) {
            var positionOnGrant = this.touchable.positionOnGrant;
            var _props = this.props,
                _props$pressRetention = _props.pressRetentionOffset,
                pressRetentionOffset = _props$pressRetention === undefined ? {} : _props$pressRetention,
                hitSlop = _props.hitSlop;

            var pressExpandLeft = pressRetentionOffset.left;
            var pressExpandTop = pressRetentionOffset.top;
            var pressExpandRight = pressRetentionOffset.right;
            var pressExpandBottom = pressRetentionOffset.bottom;
            if (hitSlop) {
                pressExpandLeft += hitSlop.left;
                pressExpandTop += hitSlop.top;
                pressExpandRight += hitSlop.right;
                pressExpandBottom += hitSlop.bottom;
            }
            var touch = extractSingleTouch(e);
            var pageX = touch && touch.pageX;
            var pageY = touch && touch.pageY;
            return pageX > positionOnGrant.left - pressExpandLeft && pageY > positionOnGrant.top - pressExpandTop && pageX < positionOnGrant.left + positionOnGrant.width + pressExpandRight && pageY < positionOnGrant.top + positionOnGrant.height + pressExpandBottom;
        }
    }, {
        key: 'callProp',
        value: function callProp(name, e) {
            if (this.props[name] && !this.props.disabled) {
                this.props[name](e);
            }
        }
    }, {
        key: 'touchableHandleActivePressIn',
        value: function touchableHandleActivePressIn(e) {
            this.setActive(true);
            this.callProp('onPressIn', e);
        }
    }, {
        key: 'touchableHandleActivePressOut',
        value: function touchableHandleActivePressOut(e) {
            this.setActive(false);
            this.callProp('onPressOut', e);
        }
    }, {
        key: 'touchableHandlePress',
        value: function touchableHandlePress(e) {
            if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__PressEvent__["b" /* shouldFirePress */])(e)) {
                this.callProp('onPress', e);
            }
            lastClickTime = Date.now();
        }
    }, {
        key: 'touchableHandleLongPress',
        value: function touchableHandleLongPress(e) {
            if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__PressEvent__["b" /* shouldFirePress */])(e)) {
                this.callProp('onLongPress', e);
            }
        }
    }, {
        key: 'setActive',
        value: function setActive(active) {
            if (this.props.activeClassName || this.props.activeStyle) {
                this.setState({
                    active: active
                });
            }
        }
    }, {
        key: '_remeasureMetricsOnActivation',
        value: function _remeasureMetricsOnActivation() {
            this.touchable.dimensionsOnActivate = this.touchable.positionOnGrant;
        }
    }, {
        key: '_handleDelay',
        value: function _handleDelay(e) {
            this.touchableDelayTimeout = null;
            this._receiveSignal(Signals.DELAY, e);
        }
    }, {
        key: '_handleLongDelay',
        value: function _handleLongDelay(e) {
            this.longPressDelayTimeout = null;
            var curState = this.touchable.touchState;
            if (curState !== States.RESPONDER_ACTIVE_PRESS_IN && curState !== States.RESPONDER_ACTIVE_LONG_PRESS_IN) {
                console.error('Attempted to transition from state `' + curState + '` to `' + States.RESPONDER_ACTIVE_LONG_PRESS_IN + '`, which is not supported. This is ' + 'most likely due to `Touchable.longPressDelayTimeout` not being cancelled.');
            } else {
                this._receiveSignal(Signals.LONG_PRESS_DETECTED, e);
            }
        }
    }, {
        key: '_receiveSignal',
        value: function _receiveSignal(signal, e) {
            var curState = this.touchable.touchState;
            var nextState = Transitions[curState] && Transitions[curState][signal];
            if (!nextState) {
                return;
            }
            if (nextState === States.ERROR) {
                return;
            }
            if (curState !== nextState) {
                this._performSideEffectsForTransition(curState, nextState, signal, e);
                this.touchable.touchState = nextState;
            }
        }
    }, {
        key: '_cancelLongPressDelayTimeout',
        value: function _cancelLongPressDelayTimeout() {
            if (this.longPressDelayTimeout) {
                clearTimeout(this.longPressDelayTimeout);
                this.longPressDelayTimeout = null;
            }
        }
    }, {
        key: '_isHighlight',
        value: function _isHighlight(state) {
            return state === States.RESPONDER_ACTIVE_PRESS_IN || state === States.RESPONDER_ACTIVE_LONG_PRESS_IN;
        }
    }, {
        key: '_savePressInLocation',
        value: function _savePressInLocation(e) {
            var touch = extractSingleTouch(e);
            var pageX = touch && touch.pageX;
            var pageY = touch && touch.pageY;
            this.pressInLocation = { pageX: pageX, pageY: pageY };
        }
    }, {
        key: '_getDistanceBetweenPoints',
        value: function _getDistanceBetweenPoints(aX, aY, bX, bY) {
            var deltaX = aX - bX;
            var deltaY = aY - bY;
            return Math.sqrt(deltaX * deltaX + deltaY * deltaY);
        }
    }, {
        key: '_performSideEffectsForTransition',
        value: function _performSideEffectsForTransition(curState, nextState, signal, e) {
            var curIsHighlight = this._isHighlight(curState);
            var newIsHighlight = this._isHighlight(nextState);
            var isFinalSignal = signal === Signals.RESPONDER_TERMINATED || signal === Signals.RESPONDER_RELEASE;
            if (isFinalSignal) {
                this._cancelLongPressDelayTimeout();
            }
            if (!IsActive[curState] && IsActive[nextState]) {
                this._remeasureMetricsOnActivation();
            }
            if (IsPressingIn[curState] && signal === Signals.LONG_PRESS_DETECTED) {
                this.touchableHandleLongPress(e);
            }
            if (newIsHighlight && !curIsHighlight) {
                this._startHighlight(e);
            } else if (!newIsHighlight && curIsHighlight) {
                this._endHighlight(e);
            }
            if (IsPressingIn[curState] && signal === Signals.RESPONDER_RELEASE) {
                var hasLongPressHandler = !!this.props.onLongPress;
                var pressIsLongButStillCallOnPress = IsLongPressingIn[curState] && (!hasLongPressHandler || !this.props.longPressCancelsPress // or we're told to ignore it.
                );
                var shouldInvokePress = !IsLongPressingIn[curState] || pressIsLongButStillCallOnPress;
                if (shouldInvokePress) {
                    if (!newIsHighlight && !curIsHighlight) {
                        // we never highlighted because of delay, but we should highlight now
                        this._startHighlight(e);
                        this._endHighlight(e);
                    }
                    this.touchableHandlePress(e);
                }
            }
            if (this.touchableDelayTimeout) {
                clearTimeout(this.touchableDelayTimeout);
                this.touchableDelayTimeout = null;
            }
        }
    }, {
        key: '_startHighlight',
        value: function _startHighlight(e) {
            this._savePressInLocation(e);
            this.touchableHandleActivePressIn(e);
        }
    }, {
        key: '_endHighlight',
        value: function _endHighlight(e) {
            var _this3 = this;

            if (this.props.delayPressOut) {
                this.pressOutDelayTimeout = setTimeout(function () {
                    _this3.touchableHandleActivePressOut(e);
                }, this.props.delayPressOut);
            } else {
                this.touchableHandleActivePressOut(e);
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _props2 = this.props,
                children = _props2.children,
                disabled = _props2.disabled,
                activeStyle = _props2.activeStyle,
                activeClassName = _props2.activeClassName;

            var events = disabled ? undefined : copy(this, ['onTouchStart', 'onTouchMove', 'onTouchEnd', 'onTouchCancel', 'onMouseDown']);
            var child = __WEBPACK_IMPORTED_MODULE_4_react___default.a.Children.only(children);
            if (!disabled && this.state.active) {
                var _child$props = child.props,
                    style = _child$props.style,
                    className = _child$props.className;

                if (activeStyle) {
                    style = __WEBPACK_IMPORTED_MODULE_5_object_assign___default()({}, style, activeStyle);
                }
                if (activeClassName) {
                    if (className) {
                        className += ' ' + activeClassName;
                    } else {
                        className = activeClassName;
                    }
                }
                return __WEBPACK_IMPORTED_MODULE_4_react___default.a.cloneElement(child, __WEBPACK_IMPORTED_MODULE_5_object_assign___default()({
                    className: className,
                    style: style
                }, events));
            }
            return __WEBPACK_IMPORTED_MODULE_4_react___default.a.cloneElement(child, events);
        }
    }]);

    return Touchable;
}(__WEBPACK_IMPORTED_MODULE_4_react___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Touchable);

Touchable.defaultProps = {
    fixClickPenetration: false,
    disabled: false,
    delayPressIn: HIGHLIGHT_DELAY_MS,
    delayLongPress: LONG_PRESS_DELAY_MS,
    delayPressOut: 100,
    pressRetentionOffset: {
        left: PRESS_EXPAND_PX,
        right: PRESS_EXPAND_PX,
        top: PRESS_EXPAND_PX,
        bottom: PRESS_EXPAND_PX
    },
    hitSlop: undefined,
    longPressCancelsPress: true
};

/***/ }),
/* 37 */,
/* 38 */,
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _defineProperty2 = __webpack_require__(9);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _classCallCheck2 = __webpack_require__(1);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(4);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(2);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(10);

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var WingBlank = function (_React$Component) {
    (0, _inherits3['default'])(WingBlank, _React$Component);

    function WingBlank() {
        (0, _classCallCheck3['default'])(this, WingBlank);
        return (0, _possibleConstructorReturn3['default'])(this, (WingBlank.__proto__ || Object.getPrototypeOf(WingBlank)).apply(this, arguments));
    }

    (0, _createClass3['default'])(WingBlank, [{
        key: 'render',
        value: function render() {
            var _classNames;

            var _props = this.props,
                prefixCls = _props.prefixCls,
                size = _props.size,
                className = _props.className,
                children = _props.children,
                style = _props.style;

            var wrapCls = (0, _classnames2['default'])((_classNames = {}, (0, _defineProperty3['default'])(_classNames, '' + prefixCls, true), (0, _defineProperty3['default'])(_classNames, prefixCls + '-' + size, true), (0, _defineProperty3['default'])(_classNames, className, !!className), _classNames));
            return _react2['default'].createElement(
                'div',
                { className: wrapCls, style: style },
                children
            );
        }
    }]);
    return WingBlank;
}(_react2['default'].Component);

exports['default'] = WingBlank;

WingBlank.defaultProps = {
    prefixCls: 'am-wingblank',
    size: 'lg'
};
module.exports = exports['default'];

/***/ }),
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = __webpack_require__(5);

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = __webpack_require__(1);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(4);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(2);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _rmcListView = __webpack_require__(87);

var _rmcListView2 = _interopRequireDefault(_rmcListView);

var _handleProps2 = __webpack_require__(100);

var _handleProps3 = _interopRequireDefault(_handleProps2);

var _Indexed = __webpack_require__(170);

var _Indexed2 = _interopRequireDefault(_Indexed);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var ListView = function (_React$Component) {
    (0, _inherits3['default'])(ListView, _React$Component);

    function ListView() {
        (0, _classCallCheck3['default'])(this, ListView);

        var _this = (0, _possibleConstructorReturn3['default'])(this, (ListView.__proto__ || Object.getPrototypeOf(ListView)).apply(this, arguments));

        _this.scrollTo = function () {
            var _this$refs$listview;

            return (_this$refs$listview = _this.refs.listview).scrollTo.apply(_this$refs$listview, arguments);
        };
        return _this;
    }

    (0, _createClass3['default'])(ListView, [{
        key: 'render',
        value: function render() {
            var _handleProps = (0, _handleProps3['default'])(this.props, false),
                restProps = _handleProps.restProps,
                extraProps = _handleProps.extraProps;

            var _props = this.props,
                useZscroller = _props.useZscroller,
                refreshControl = _props.refreshControl;

            if (refreshControl) {
                useZscroller = true;
            }
            return _react2['default'].createElement(_rmcListView2['default'], (0, _extends3['default'])({ ref: 'listview' }, restProps, extraProps, { useZscroller: useZscroller }));
        }
    }]);
    return ListView;
}(_react2['default'].Component);

exports['default'] = ListView;

ListView.defaultProps = {
    prefixCls: 'am-list-view',
    listPrefixCls: 'am-list'
};
ListView.DataSource = _rmcListView2['default'].DataSource;
ListView.IndexedList = _Indexed2['default'];
module.exports = exports['default'];

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _defineProperty2 = __webpack_require__(9);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _classCallCheck2 = __webpack_require__(1);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(4);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(2);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(10);

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var WhiteSpace = function (_React$Component) {
    (0, _inherits3['default'])(WhiteSpace, _React$Component);

    function WhiteSpace() {
        (0, _classCallCheck3['default'])(this, WhiteSpace);
        return (0, _possibleConstructorReturn3['default'])(this, (WhiteSpace.__proto__ || Object.getPrototypeOf(WhiteSpace)).apply(this, arguments));
    }

    (0, _createClass3['default'])(WhiteSpace, [{
        key: 'render',
        value: function render() {
            var _classNames;

            var _props = this.props,
                prefixCls = _props.prefixCls,
                size = _props.size,
                className = _props.className,
                style = _props.style,
                onClick = _props.onClick;

            var wrapCls = (0, _classnames2['default'])((_classNames = {}, (0, _defineProperty3['default'])(_classNames, '' + prefixCls, true), (0, _defineProperty3['default'])(_classNames, prefixCls + '-' + size, true), (0, _defineProperty3['default'])(_classNames, className, !!className), _classNames));
            return _react2['default'].createElement('div', { className: wrapCls, style: style, onClick: onClick });
        }
    }]);
    return WhiteSpace;
}(_react2['default'].Component);

exports['default'] = WhiteSpace;

WhiteSpace.defaultProps = {
    prefixCls: 'am-whitespace',
    size: 'md'
};
module.exports = exports['default'];

/***/ }),
/* 46 */,
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(280), __esModule: true };

/***/ }),
/* 48 */,
/* 49 */,
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

exports['default'] = function (props) {
    return Object.keys(props).reduce(function (prev, key) {
        if (key.substr(0, 5) === 'aria-' || key.substr(0, 5) === 'data-' || key === 'role') {
            prev[key] = props[key];
        }
        return prev;
    }, {});
};

module.exports = exports['default'];

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Flex = __webpack_require__(162);

var _Flex2 = _interopRequireDefault(_Flex);

var _FlexItem = __webpack_require__(163);

var _FlexItem2 = _interopRequireDefault(_FlexItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

_Flex2['default'].Item = _FlexItem2['default'];
exports['default'] = _Flex2['default'];
module.exports = exports['default'];

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = __webpack_require__(5);

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = __webpack_require__(9);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _classCallCheck2 = __webpack_require__(1);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(4);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(2);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _rcDialog = __webpack_require__(85);

var _rcDialog2 = _interopRequireDefault(_rcDialog);

var _classnames = __webpack_require__(10);

var _classnames2 = _interopRequireDefault(_classnames);

var _objectAssign = __webpack_require__(17);

var _objectAssign2 = _interopRequireDefault(_objectAssign);

var _rcTouchable = __webpack_require__(36);

var _rcTouchable2 = _interopRequireDefault(_rcTouchable);

var _PropsType = __webpack_require__(174);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function checkIfAndroid(platform) {
    return platform === 'android' || platform === 'cross' && typeof window !== 'undefined' && !!navigator.userAgent.match(/Android/i);
}

var Modal = function (_ModalComponent) {
    (0, _inherits3['default'])(Modal, _ModalComponent);

    function Modal(props) {
        (0, _classCallCheck3['default'])(this, Modal);

        var _this = (0, _possibleConstructorReturn3['default'])(this, (Modal.__proto__ || Object.getPrototypeOf(Modal)).call(this, props));

        _this.state = {
            // in ssr, just set isAndroid false
            // since modal normally won't show at first render, componentDidMount will do double check
            isAndroid: checkIfAndroid(props.platform)
        };
        return _this;
    }

    (0, _createClass3['default'])(Modal, [{
        key: 'isInModal',
        value: function isInModal(e) {
            if (!/\biPhone\b|\biPod\b/i.test(navigator.userAgent)) {
                return;
            }
            // fix touch to scroll background page on iOS
            var prefixCls = this.props.prefixCls;
            var pNode = function (node) {
                while (node.parentNode && node.parentNode !== document.body) {
                    if (node.classList.contains(prefixCls)) {
                        return node;
                    }
                    node = node.parentNode;
                }
            }(e.target);
            if (!pNode) {
                e.preventDefault();
            }
            return true;
        }
    }, {
        key: 'renderFooterButton',
        value: function renderFooterButton(button, prefixCls, i) {
            var buttonStyle = {};
            if (button.style) {
                buttonStyle = button.style;
                if (typeof buttonStyle === 'string') {
                    var styleMap = {
                        cancel: { fontWeight: 'bold' },
                        'default': {},
                        destructive: { color: 'red' }
                    };
                    buttonStyle = styleMap[buttonStyle] || {};
                }
            }
            var onClickFn = function onClickFn(e) {
                e.preventDefault();
                if (button.onPress) {
                    button.onPress();
                }
            };
            return _react2['default'].createElement(
                _rcTouchable2['default'],
                { activeClassName: prefixCls + '-button-active', key: i },
                _react2['default'].createElement(
                    'a',
                    { className: prefixCls + '-button', role: 'button', style: buttonStyle, href: '#', onClick: onClickFn },
                    button.text || 'Button'
                )
            );
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            var isAndroid = checkIfAndroid(this.props.platform);
            if (isAndroid !== this.state.isAndroid) {
                this.setState({
                    isAndroid: isAndroid
                });
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _classNames,
                _this2 = this;

            var _props = this.props,
                prefixCls = _props.prefixCls,
                className = _props.className,
                transparent = _props.transparent,
                animated = _props.animated,
                transitionName = _props.transitionName,
                maskTransitionName = _props.maskTransitionName,
                style = _props.style,
                _props$footer = _props.footer,
                footer = _props$footer === undefined ? [] : _props$footer,
                closable = _props.closable,
                operation = _props.operation;
            var isAndroid = this.state.isAndroid;

            var wrapCls = (0, _classnames2['default'])((_classNames = {}, (0, _defineProperty3['default'])(_classNames, className, !!className), (0, _defineProperty3['default'])(_classNames, prefixCls + '-transparent', transparent), (0, _defineProperty3['default'])(_classNames, prefixCls + '-android', isAndroid), _classNames));
            var anim = transitionName || (animated ? transparent ? 'am-fade' : 'am-slide-up' : null);
            var maskAnim = maskTransitionName || (animated ? transparent ? 'am-fade' : 'am-slide-up' : null);
            var btnGroupClass = prefixCls + '-button-group-' + (footer.length === 2 && !operation ? 'h' : 'v');
            var footerDom = footer.length ? _react2['default'].createElement(
                'div',
                { className: btnGroupClass, role: 'group' },
                footer.map(function (button, i) {
                    return _this2.renderFooterButton(button, prefixCls, i);
                })
            ) : null;
            // transparent 模式下, 内容默认居中
            var rootStyle = transparent ? (0, _objectAssign2['default'])({
                width: '5.4rem',
                height: 'auto'
            }, style) : (0, _objectAssign2['default'])({
                width: '100%',
                height: '100%'
            }, style);
            var restProps = (0, _objectAssign2['default'])({}, this.props);
            ['prefixCls', 'className', 'transparent', 'animated', 'transitionName', 'maskTransitionName', 'style', 'footer', 'touchFeedback', 'wrapProps'].forEach(function (prop) {
                if (restProps.hasOwnProperty(prop)) {
                    delete restProps[prop];
                }
            });
            var wrapProps = { onTouchStart: function onTouchStart(e) {
                    return _this2.isInModal(e);
                } };
            return _react2['default'].createElement(_rcDialog2['default'], (0, _extends3['default'])({ prefixCls: prefixCls, className: wrapCls, transitionName: anim, maskTransitionName: maskAnim, style: rootStyle, footer: footerDom, wrapProps: wrapProps, closable: closable }, restProps));
        }
    }]);
    return Modal;
}(_PropsType.ModalComponent);

exports['default'] = Modal;

Modal.defaultProps = {
    prefixCls: 'am-modal',
    // transparent change to transparent by yiminghe
    transparent: false,
    animated: true,
    style: {},
    onShow: function onShow() {},

    footer: [],
    closable: false,
    operation: false,
    platform: 'cross'
};
module.exports = exports['default'];

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _rmcListView = __webpack_require__(87);

var _rmcListView2 = _interopRequireDefault(_rmcListView);

var _icon = __webpack_require__(18);

var _icon2 = _interopRequireDefault(_icon);

var _objectAssign = __webpack_require__(17);

var _objectAssign2 = _interopRequireDefault(_objectAssign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

/* tslint:disable:no-unused-variable */
var dpr = typeof window !== 'undefined' && window.devicePixelRatio || 2;
// import tsPropsType from './PropsType';

/* tslint:enable:no-unused-variable */

_rmcListView2['default'].RefreshControl.defaultProps = (0, _objectAssign2['default'])({}, _rmcListView2['default'].RefreshControl.defaultProps, {
    prefixCls: 'am-refresh-control',
    icon: [_react2['default'].createElement(
        'div',
        { key: '0', className: 'am-refresh-control-pull' },
        _react2['default'].createElement(
            'span',
            null,
            '\u4E0B\u62C9\u53EF\u4EE5\u5237\u65B0'
        )
    ), _react2['default'].createElement(
        'div',
        { key: '1', className: 'am-refresh-control-release' },
        _react2['default'].createElement(
            'span',
            null,
            '\u677E\u5F00\u7ACB\u5373\u5237\u65B0'
        )
    )],
    loading: _react2['default'].createElement(_icon2['default'], { type: 'loading' }),
    refreshing: false,
    distanceToRefresh: 50 / 2 * dpr
});
exports['default'] = _rmcListView2['default'].RefreshControl;
module.exports = exports['default'];

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = __webpack_require__(9);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

exports.toArray = toArray;
exports.getActiveIndex = getActiveIndex;
exports.getActiveKey = getActiveKey;
exports.setTransform = setTransform;
exports.isTransformSupported = isTransformSupported;
exports.setTransition = setTransition;
exports.getTransformPropValue = getTransformPropValue;
exports.isVertical = isVertical;
exports.getTransformByIndex = getTransformByIndex;
exports.getMarginStyle = getMarginStyle;
exports.getStyle = getStyle;
exports.setPxStyle = setPxStyle;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function toArray(children) {
  // allow [c,[a,b]]
  var c = [];
  _react2['default'].Children.forEach(children, function (child) {
    if (child) {
      c.push(child);
    }
  });
  return c;
}

function getActiveIndex(children, activeKey) {
  var c = toArray(children);
  for (var i = 0; i < c.length; i++) {
    if (c[i].key === activeKey) {
      return i;
    }
  }
  return -1;
}

function getActiveKey(children, index) {
  var c = toArray(children);
  return c[index].key;
}

function setTransform(style, v) {
  style.transform = v;
  style.webkitTransform = v;
  style.mozTransform = v;
}

function isTransformSupported(style) {
  return 'transform' in style || 'webkitTransform' in style || 'MozTransform' in style;
}

function setTransition(style, v) {
  style.transition = v;
  style.webkitTransition = v;
  style.MozTransition = v;
}
function getTransformPropValue(v) {
  return {
    transform: v,
    WebkitTransform: v,
    MozTransform: v
  };
}

function isVertical(tabBarPosition) {
  return tabBarPosition === 'left' || tabBarPosition === 'right';
}

function getTransformByIndex(index, tabBarPosition) {
  var translate = isVertical(tabBarPosition) ? 'translateY' : 'translateX';
  return translate + '(' + -index * 100 + '%) translateZ(0)';
}

function getMarginStyle(index, tabBarPosition) {
  var marginDirection = isVertical(tabBarPosition) ? 'marginTop' : 'marginLeft';
  return (0, _defineProperty3['default'])({}, marginDirection, -index * 100 + '%');
}

function getStyle(el, property) {
  return +getComputedStyle(el).getPropertyValue(property).replace('px', '');
}

function setPxStyle(el, value, vertical) {
  value = vertical ? '0px, ' + value + 'px, 0px' : value + 'px, 0px, 0px';
  setTransform(el.style, 'translate3d(' + value + ')');
}

/***/ }),
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

var ctx         = __webpack_require__(49)
  , call        = __webpack_require__(476)
  , isArrayIter = __webpack_require__(474)
  , anObject    = __webpack_require__(140)
  , toLength    = __webpack_require__(135)
  , getIterFn   = __webpack_require__(480)
  , BREAK       = {}
  , RETURN      = {};
var exports = module.exports = function(iterable, entries, fn, that, ITERATOR){
  var iterFn = ITERATOR ? function(){ return iterable; } : getIterFn(iterable)
    , f      = ctx(fn, that, entries ? 2 : 1)
    , index  = 0
    , length, step, iterator, result;
  if(typeof iterFn != 'function')throw TypeError(iterable + ' is not iterable!');
  // fast case for arrays with default iterator
  if(isArrayIter(iterFn))for(length = toLength(iterable.length); length > index; index++){
    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
    if(result === BREAK || result === RETURN)return result;
  } else for(iterator = iterFn.call(iterable); !(step = iterator.next()).done; ){
    result = call(iterator, f, step.value, entries);
    if(result === BREAK || result === RETURN)return result;
  }
};
exports.BREAK  = BREAK;
exports.RETURN = RETURN;

/***/ }),
/* 61 */,
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

var mixin = __webpack_require__(404);
var assign = __webpack_require__(17);

var mixinProto = mixin({
  // lifecycle stuff is as you'd expect
  componentDidMount: mixin.MANY,
  componentWillMount: mixin.MANY,
  componentWillReceiveProps: mixin.MANY,
  shouldComponentUpdate: mixin.ONCE,
  componentWillUpdate: mixin.MANY,
  componentDidUpdate: mixin.MANY,
  componentWillUnmount: mixin.MANY,
  getChildContext: mixin.MANY_MERGED
});

function setDefaultProps(reactMixin) {
  var getDefaultProps = reactMixin.getDefaultProps;

  if (getDefaultProps) {
    reactMixin.defaultProps = getDefaultProps();

    delete reactMixin.getDefaultProps;
  }
}

function setInitialState(reactMixin) {
  var getInitialState = reactMixin.getInitialState;
  var componentWillMount = reactMixin.componentWillMount;

  function applyInitialState(instance) {
    var state = instance.state || {};
    assign(state, getInitialState.call(instance));
    instance.state = state;
  }

  if (getInitialState) {
    if (!componentWillMount) {
      reactMixin.componentWillMount = function() {
        applyInitialState(this);
      };
    } else {
      reactMixin.componentWillMount = function() {
        applyInitialState(this);
        componentWillMount.call(this);
      };
    }

    delete reactMixin.getInitialState;
  }
}

function mixinClass(reactClass, reactMixin) {
  setDefaultProps(reactMixin);
  setInitialState(reactMixin);

  var prototypeMethods = {};
  var staticProps = {};

  Object.keys(reactMixin).forEach(function(key) {
    if (key === 'mixins') {
      return; // Handled below to ensure proper order regardless of property iteration order
    }
    if (key === 'statics') {
      return; // gets special handling
    } else if (typeof reactMixin[key] === 'function') {
      prototypeMethods[key] = reactMixin[key];
    } else {
      staticProps[key] = reactMixin[key];
    }
  });

  mixinProto(reactClass.prototype, prototypeMethods);

  var mergePropTypes = function(left, right, key) {
    if (!left) return right;
    if (!right) return left;

    var result = {};
    Object.keys(left).forEach(function(leftKey) {
      if (!right[leftKey]) {
        result[leftKey] = left[leftKey];
      }
    });

    Object.keys(right).forEach(function(rightKey) {
      if (left[rightKey]) {
        result[rightKey] = function checkBothContextTypes() {
          return right[rightKey].apply(this, arguments) && left[rightKey].apply(this, arguments);
        };
      } else {
        result[rightKey] = right[rightKey];
      }
    });

    return result;
  };

  mixin({
    childContextTypes: mergePropTypes,
    contextTypes: mergePropTypes,
    propTypes: mixin.MANY_MERGED_LOOSE,
    defaultProps: mixin.MANY_MERGED_LOOSE
  })(reactClass, staticProps);

  // statics is a special case because it merges directly onto the class
  if (reactMixin.statics) {
    Object.getOwnPropertyNames(reactMixin.statics).forEach(function(key) {
      var left = reactClass[key];
      var right = reactMixin.statics[key];

      if (left !== undefined && right !== undefined) {
        throw new TypeError('Cannot mixin statics because statics.' + key + ' and Component.' + key + ' are defined.');
      }

      reactClass[key] = left !== undefined ? left : right;
    });
  }

  // If more mixins are defined, they need to run. This emulate's react's behavior.
  // See behavior in code at:
  // https://github.com/facebook/react/blob/41aa3496aa632634f650edbe10d617799922d265/src/isomorphic/classic/class/ReactClass.js#L468
  // Note the .reverse(). In React, a fresh constructor is created, then all mixins are mixed in recursively,
  // then the actual spec is mixed in last.
  //
  // With ES6 classes, the properties are already there, so smart-mixin mixes functions (a, b) -> b()a(), which is
  // the opposite of how React does it. If we reverse this array, we basically do the whole logic in reverse,
  // which makes the result the same. See the test for more.
  // See also:
  // https://github.com/facebook/react/blob/41aa3496aa632634f650edbe10d617799922d265/src/isomorphic/classic/class/ReactClass.js#L853
  if (reactMixin.mixins) {
    reactMixin.mixins.reverse().forEach(mixinClass.bind(null, reactClass));
  }

  return reactClass;
}

module.exports = (function() {
  var reactMixin = mixinProto;

  reactMixin.onClass = function(reactClass, mixin) {
    // we mutate the mixin so let's clone it
    mixin = assign({}, mixin);
    return mixinClass(reactClass, mixin);
  };

  reactMixin.decorate = function(mixin) {
    return function(reactClass) {
      return reactMixin.onClass(reactClass, mixin);
    };
  };

  return reactMixin;
})();


/***/ }),
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = __webpack_require__(5);

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = __webpack_require__(9);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _classCallCheck2 = __webpack_require__(1);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(4);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(2);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(10);

var _classnames2 = _interopRequireDefault(_classnames);

var _CardHeader = __webpack_require__(155);

var _CardHeader2 = _interopRequireDefault(_CardHeader);

var _CardBody = __webpack_require__(153);

var _CardBody2 = _interopRequireDefault(_CardBody);

var _CardFooter = __webpack_require__(154);

var _CardFooter2 = _interopRequireDefault(_CardFooter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var __rest = undefined && undefined.__rest || function (s, e) {
    var t = {};
    for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    }if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
    }return t;
};

var Card = function (_React$Component) {
    (0, _inherits3['default'])(Card, _React$Component);

    function Card() {
        (0, _classCallCheck3['default'])(this, Card);
        return (0, _possibleConstructorReturn3['default'])(this, (Card.__proto__ || Object.getPrototypeOf(Card)).apply(this, arguments));
    }

    (0, _createClass3['default'])(Card, [{
        key: 'render',
        value: function render() {
            var _classNames;

            var _a = this.props,
                prefixCls = _a.prefixCls,
                full = _a.full,
                className = _a.className,
                resetProps = __rest(_a, ["prefixCls", "full", "className"]);
            var wrapCls = (0, _classnames2['default'])((_classNames = {}, (0, _defineProperty3['default'])(_classNames, prefixCls, true), (0, _defineProperty3['default'])(_classNames, prefixCls + '-full', full), (0, _defineProperty3['default'])(_classNames, className, className), _classNames));
            return _react2['default'].createElement('div', (0, _extends3['default'])({ className: wrapCls }, resetProps));
        }
    }]);
    return Card;
}(_react2['default'].Component);

exports['default'] = Card;

Card.defaultProps = {
    prefixCls: 'am-card',
    full: false
};
Card.Header = _CardHeader2['default'];
Card.Body = _CardBody2['default'];
Card.Footer = _CardFooter2['default'];
module.exports = exports['default'];

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _defineProperty2 = __webpack_require__(9);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _classCallCheck2 = __webpack_require__(1);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(4);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(2);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _rcCheckbox = __webpack_require__(124);

var _rcCheckbox2 = _interopRequireDefault(_rcCheckbox);

var _omit = __webpack_require__(29);

var _omit2 = _interopRequireDefault(_omit);

var _classnames = __webpack_require__(10);

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var Checkbox = function (_React$Component) {
    (0, _inherits3['default'])(Checkbox, _React$Component);

    function Checkbox() {
        (0, _classCallCheck3['default'])(this, Checkbox);
        return (0, _possibleConstructorReturn3['default'])(this, (Checkbox.__proto__ || Object.getPrototypeOf(Checkbox)).apply(this, arguments));
    }

    (0, _createClass3['default'])(Checkbox, [{
        key: 'render',
        value: function render() {
            var _classNames;

            var _props = this.props,
                prefixCls = _props.prefixCls,
                className = _props.className,
                style = _props.style,
                children = _props.children;

            var wrapCls = (0, _classnames2['default'])((_classNames = {}, (0, _defineProperty3['default'])(_classNames, className, !!className), (0, _defineProperty3['default'])(_classNames, prefixCls + '-wrapper', true), _classNames));
            var mark = _react2['default'].createElement(
                'label',
                { className: wrapCls, style: style },
                _react2['default'].createElement(_rcCheckbox2['default'], (0, _omit2['default'])(this.props, ['className', 'style'])),
                children
            );
            if (this.props.wrapLabel) {
                return mark;
            }
            return _react2['default'].createElement(_rcCheckbox2['default'], this.props);
        }
    }]);
    return Checkbox;
}(_react2['default'].Component);

exports['default'] = Checkbox;

Checkbox.defaultProps = {
    prefixCls: 'am-checkbox',
    wrapLabel: true
};
module.exports = exports['default'];

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = __webpack_require__(5);

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = __webpack_require__(1);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(4);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(2);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(6);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Popup = __webpack_require__(384);

var _Popup2 = _interopRequireDefault(_Popup);

var _DatePicker = __webpack_require__(383);

var _DatePicker2 = _interopRequireDefault(_DatePicker);

var _utils = __webpack_require__(161);

var _objectAssign = __webpack_require__(17);

var _objectAssign2 = _interopRequireDefault(_objectAssign);

var _getLocale = __webpack_require__(97);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function getDefaultProps() {
    return (0, _objectAssign2['default'])({
        prefixCls: 'am-picker',
        pickerPrefixCls: 'am-picker-col',
        popupPrefixCls: 'am-picker-popup',
        minuteStep: 1
    }, (0, _utils.getProps)());
} /* eslint no-console:0 */

var DatePicker = function (_React$Component) {
    (0, _inherits3['default'])(DatePicker, _React$Component);

    function DatePicker() {
        (0, _classCallCheck3['default'])(this, DatePicker);
        return (0, _possibleConstructorReturn3['default'])(this, (DatePicker.__proto__ || Object.getPrototypeOf(DatePicker)).apply(this, arguments));
    }

    (0, _createClass3['default'])(DatePicker, [{
        key: 'render',
        value: function render() {
            var props = this.props,
                context = this.context;
            var children = props.children,
                value = props.value,
                defaultDate = props.defaultDate,
                extra = props.extra,
                popupPrefixCls = props.popupPrefixCls;

            var locale = (0, _getLocale.getComponentLocale)(props, context, 'DatePicker', function () {
                return __webpack_require__(160);
            });
            var localeCode = (0, _getLocale.getLocaleCode)(context);
            var okText = locale.okText,
                dismissText = locale.dismissText,
                DatePickerLocale = locale.DatePickerLocale;

            if (localeCode) {
                if (value) {
                    value.locale(localeCode);
                }
                if (defaultDate) {
                    defaultDate.locale(localeCode);
                }
            }
            var dataPicker = _react2['default'].createElement(_DatePicker2['default'], { minuteStep: props.minuteStep, locale: DatePickerLocale, minDate: props.minDate, maxDate: props.maxDate, mode: props.mode, pickerPrefixCls: props.pickerPrefixCls, prefixCls: props.prefixCls, defaultDate: value || (0, _utils.getDefaultDate)(this.props) });
            return _react2['default'].createElement(
                _Popup2['default'],
                (0, _extends3['default'])({ datePicker: dataPicker, WrapComponent: 'div', transitionName: 'am-slide-up', maskTransitionName: 'am-fade' }, props, { prefixCls: popupPrefixCls, date: value || (0, _utils.getDefaultDate)(this.props), dismissText: dismissText, okText: okText }),
                children && _react2['default'].cloneElement(children, { extra: value ? (0, _utils.formatFn)(this, value) : extra })
            );
        }
    }]);
    return DatePicker;
}(_react2['default'].Component);

exports['default'] = DatePicker;

DatePicker.defaultProps = getDefaultProps();
DatePicker.contextTypes = {
    antLocale: _propTypes2['default'].object
};
module.exports = exports['default'];

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _defineProperty2 = __webpack_require__(9);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _classCallCheck2 = __webpack_require__(1);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(4);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(2);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _rcSwipeout = __webpack_require__(371);

var _rcSwipeout2 = _interopRequireDefault(_rcSwipeout);

var _classnames = __webpack_require__(10);

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var SwipeAction = function (_React$Component) {
    (0, _inherits3['default'])(SwipeAction, _React$Component);

    function SwipeAction() {
        (0, _classCallCheck3['default'])(this, SwipeAction);
        return (0, _possibleConstructorReturn3['default'])(this, (SwipeAction.__proto__ || Object.getPrototypeOf(SwipeAction)).apply(this, arguments));
    }

    (0, _createClass3['default'])(SwipeAction, [{
        key: 'render',
        value: function render() {
            var _classNames;

            var _props = this.props,
                className = _props.className,
                style = _props.style,
                prefixCls = _props.prefixCls,
                _props$left = _props.left,
                left = _props$left === undefined ? [] : _props$left,
                _props$right = _props.right,
                right = _props$right === undefined ? [] : _props$right,
                autoClose = _props.autoClose,
                disabled = _props.disabled,
                onOpen = _props.onOpen,
                onClose = _props.onClose,
                children = _props.children;

            var wrapClass = (0, _classnames2['default'])((_classNames = {}, (0, _defineProperty3['default'])(_classNames, '' + prefixCls, 1), (0, _defineProperty3['default'])(_classNames, className, !!className), _classNames));
            return left.length || right.length ? _react2['default'].createElement(
                'div',
                { style: style, className: className },
                _react2['default'].createElement(
                    _rcSwipeout2['default'],
                    { prefixCls: prefixCls, left: left, right: right, autoClose: autoClose, disabled: disabled, onOpen: onOpen, onClose: onClose },
                    children
                )
            ) : _react2['default'].createElement(
                'div',
                { style: style, className: wrapClass },
                children
            );
        }
    }]);
    return SwipeAction;
}(_react2['default'].Component);

SwipeAction.defaultProps = {
    prefixCls: 'am-swipe',
    title: '请确认操作',
    autoClose: false,
    disabled: false,
    left: [],
    right: [],
    onOpen: function onOpen() {},
    onClose: function onClose() {}
};
exports['default'] = SwipeAction;
module.exports = exports['default'];

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = __webpack_require__(5);

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = __webpack_require__(9);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _classCallCheck2 = __webpack_require__(1);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(4);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(2);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(10);

var _classnames2 = _interopRequireDefault(_classnames);

var _omit = __webpack_require__(29);

var _omit2 = _interopRequireDefault(_omit);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function noop() {} /* tslint:disable:jsx-no-multiline-js */

function fixControlledValue(value) {
    if (typeof value === 'undefined' || value === null) {
        return '';
    }
    return value;
}
var regexAstralSymbols = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g;
function countSymbols() {
    var text = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

    return text.replace(regexAstralSymbols, '_').length;
}

var TextareaItem = function (_React$Component) {
    (0, _inherits3['default'])(TextareaItem, _React$Component);

    function TextareaItem(props) {
        (0, _classCallCheck3['default'])(this, TextareaItem);

        var _this = (0, _possibleConstructorReturn3['default'])(this, (TextareaItem.__proto__ || Object.getPrototypeOf(TextareaItem)).call(this, props));

        _this.onChange = function (e) {
            var value = e.target.value;
            var onChange = _this.props.onChange;

            if (onChange) {
                onChange(value);
            }
            // 设置 defaultValue 时，用户输入不会触发 componentDidUpdate ，此处手工调用
            _this.componentDidUpdate();
        };
        _this.onBlur = function (e) {
            _this.debounceTimeout = setTimeout(function () {
                _this.setState({
                    focus: false
                });
            }, 100);
            if (!('focused' in _this.props)) {
                _this.setState({
                    focused: false
                });
            }
            var value = e.target.value;
            if (_this.props.onBlur) {
                _this.props.onBlur(value);
            }
        };
        _this.onFocus = function (e) {
            if (_this.debounceTimeout) {
                clearTimeout(_this.debounceTimeout);
                _this.debounceTimeout = null;
            }
            if (!('focused' in _this.props)) {
                _this.setState({
                    focused: true
                });
            }
            _this.setState({
                focus: true
            });
            var value = e.target.value;
            if (_this.props.onFocus) {
                _this.props.onFocus(value);
            }
            if (document.activeElement.tagName.toLowerCase() === 'textarea') {
                _this.scrollIntoViewTimeout = setTimeout(function () {
                    try {
                        document.activeElement.scrollIntoViewIfNeeded();
                    } catch (e) {}
                }, 100);
            }
        };
        _this.onErrorClick = function () {
            if (_this.props.onErrorClick) {
                _this.props.onErrorClick();
            }
        };
        _this.clearInput = function () {
            if (_this.props.onChange) {
                _this.props.onChange('');
            }
        };
        _this.state = {
            focus: false,
            focused: props.focused || false
        };
        return _this;
    }

    (0, _createClass3['default'])(TextareaItem, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.componentDidUpdate();
            if ((this.props.autoFocus || this.state.focused) && navigator.userAgent.indexOf('AlipayClient') > 0) {
                this.refs.textarea.focus();
            }
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate() {
            if (this.props.autoHeight) {
                var textareaDom = this.refs.textarea;
                textareaDom.style.height = ''; // 字数减少时能自动减小高度
                textareaDom.style.height = textareaDom.scrollHeight + 'px';
            }
            if (this.state.focused) {
                this.refs.textarea.focus();
            }
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            if ('focused' in nextProps) {
                this.setState({
                    focused: nextProps.focused
                });
            }
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            if (this.debounceTimeout) {
                clearTimeout(this.debounceTimeout);
                this.debounceTimeout = null;
            }
            if (this.scrollIntoViewTimeout) {
                clearTimeout(this.scrollIntoViewTimeout);
                this.scrollIntoViewTimeout = null;
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _classNames, _classNames2;

            var _props = this.props,
                prefixCls = _props.prefixCls,
                prefixListCls = _props.prefixListCls,
                style = _props.style,
                title = _props.title,
                value = _props.value,
                defaultValue = _props.defaultValue,
                clear = _props.clear,
                editable = _props.editable,
                disabled = _props.disabled,
                error = _props.error,
                className = _props.className,
                labelNumber = _props.labelNumber,
                autoHeight = _props.autoHeight;

            var count = this.props.count;
            var rows = this.props.rows;
            // note: remove `placeholderTextColor` prop for rn TextInput supports placeholderTextColor
            var otherProps = (0, _omit2['default'])(this.props, ['prefixCls', 'prefixListCls', 'editable', 'style', 'clear', 'children', 'error', 'className', 'count', 'labelNumber', 'title', 'onErrorClick', 'autoHeight', 'autoFocus', 'focused', 'placeholderTextColor']);
            var valueProps = void 0;
            if ('value' in this.props) {
                valueProps = {
                    value: fixControlledValue(value)
                };
            } else {
                valueProps = {
                    defaultValue: defaultValue
                };
            }
            var focus = this.state.focus;

            var wrapCls = (0, _classnames2['default'])((_classNames = {}, (0, _defineProperty3['default'])(_classNames, prefixListCls + '-item', true), (0, _defineProperty3['default'])(_classNames, prefixCls + '-item', true), (0, _defineProperty3['default'])(_classNames, prefixCls + '-disabled', disabled), (0, _defineProperty3['default'])(_classNames, prefixCls + '-item-single-line', rows === 1 && !autoHeight), (0, _defineProperty3['default'])(_classNames, prefixCls + '-error', error), (0, _defineProperty3['default'])(_classNames, prefixCls + '-focus', focus), (0, _defineProperty3['default'])(_classNames, className, className), _classNames));
            var labelCls = (0, _classnames2['default'])((_classNames2 = {}, (0, _defineProperty3['default'])(_classNames2, prefixCls + '-label', true), (0, _defineProperty3['default'])(_classNames2, prefixCls + '-label-2', labelNumber === 2), (0, _defineProperty3['default'])(_classNames2, prefixCls + '-label-3', labelNumber === 3), (0, _defineProperty3['default'])(_classNames2, prefixCls + '-label-4', labelNumber === 4), (0, _defineProperty3['default'])(_classNames2, prefixCls + '-label-5', labelNumber === 5), (0, _defineProperty3['default'])(_classNames2, prefixCls + '-label-6', labelNumber === 6), (0, _defineProperty3['default'])(_classNames2, prefixCls + '-label-7', labelNumber === 7), _classNames2));
            var characterLength = countSymbols(value);
            return _react2['default'].createElement(
                'div',
                { className: wrapCls, style: style },
                title && _react2['default'].createElement(
                    'div',
                    { className: labelCls },
                    title
                ),
                _react2['default'].createElement(
                    'div',
                    { className: prefixCls + '-control' },
                    _react2['default'].createElement('textarea', (0, _extends3['default'])({ ref: 'textarea', maxLength: count }, otherProps, valueProps, { onChange: this.onChange, onBlur: this.onBlur, onFocus: this.onFocus, readOnly: !editable }))
                ),
                clear && editable && value && characterLength > 0 && _react2['default'].createElement('div', { className: prefixCls + '-clear', onClick: this.clearInput, onTouchStart: this.clearInput }),
                error && _react2['default'].createElement('div', { className: prefixCls + '-error-extra', onClick: this.onErrorClick }),
                count > 0 && rows > 1 && _react2['default'].createElement(
                    'span',
                    { className: prefixCls + '-count' },
                    _react2['default'].createElement(
                        'span',
                        null,
                        value ? characterLength : 0
                    ),
                    '/',
                    count
                )
            );
        }
    }]);
    return TextareaItem;
}(_react2['default'].Component);

exports['default'] = TextareaItem;

TextareaItem.defaultProps = {
    prefixCls: 'am-textarea',
    prefixListCls: 'am-list',
    autoHeight: false,
    editable: true,
    disabled: false,
    placeholder: '',
    clear: false,
    rows: 1,
    onChange: noop,
    onBlur: noop,
    onFocus: noop,
    onErrorClick: noop,
    error: false,
    labelNumber: 5
};
module.exports = exports['default'];

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = __webpack_require__(9);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _extends2 = __webpack_require__(5);

var _extends3 = _interopRequireDefault(_extends2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classnames2 = __webpack_require__(10);

var _classnames3 = _interopRequireDefault(_classnames2);

var _warning = __webpack_require__(138);

var _warning2 = _interopRequireDefault(_warning);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var tabBarExtraContentStyle = {
  float: 'right'
};

exports['default'] = {
  getDefaultProps: function getDefaultProps() {
    return {
      styles: {}
    };
  },
  onTabClick: function onTabClick(key) {
    this.props.onTabClick(key);
  },
  getTabs: function getTabs() {
    var _this = this;

    var props = this.props;
    var children = props.panels;
    var activeKey = props.activeKey;
    var rst = [];
    var prefixCls = props.prefixCls;

    _react2['default'].Children.forEach(children, function (child) {
      if (!child) {
        return;
      }
      var key = child.key;
      var cls = activeKey === key ? prefixCls + '-tab-active' : '';
      cls += ' ' + prefixCls + '-tab';
      var events = {};
      if (child.props.disabled) {
        cls += ' ' + prefixCls + '-tab-disabled';
      } else {
        events = {
          onClick: _this.onTabClick.bind(_this, key)
        };
      }
      var ref = {};
      if (activeKey === key) {
        ref.ref = 'activeTab';
      }
      (0, _warning2['default'])('tab' in child.props, 'There must be `tab` property on children of Tabs.');
      rst.push(_react2['default'].createElement(
        'div',
        (0, _extends3['default'])({
          role: 'tab',
          'aria-disabled': child.props.disabled ? 'true' : 'false',
          'aria-selected': activeKey === key ? 'true' : 'false'
        }, events, {
          className: cls,
          key: key
        }, ref),
        child.props.tab
      ));
    });

    return rst;
  },
  getRootNode: function getRootNode(contents) {
    var _classnames;

    var _props = this.props,
        prefixCls = _props.prefixCls,
        onKeyDown = _props.onKeyDown,
        className = _props.className,
        extraContent = _props.extraContent,
        style = _props.style;

    var cls = (0, _classnames3['default'])((_classnames = {}, (0, _defineProperty3['default'])(_classnames, prefixCls + '-bar', 1), (0, _defineProperty3['default'])(_classnames, className, !!className), _classnames));
    return _react2['default'].createElement(
      'div',
      {
        role: 'tablist',
        className: cls,
        tabIndex: '0',
        ref: 'root',
        onKeyDown: onKeyDown,
        style: style
      },
      extraContent ? _react2['default'].createElement(
        'div',
        {
          style: tabBarExtraContentStyle,
          key: 'extra'
        },
        extraContent
      ) : null,
      contents
    );
  }
};
module.exports = exports['default'];

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(5);

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = __webpack_require__(9);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _createReactClass = __webpack_require__(23);

var _createReactClass2 = _interopRequireDefault(_createReactClass);

var _propTypes = __webpack_require__(6);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames2 = __webpack_require__(10);

var _classnames3 = _interopRequireDefault(_classnames2);

var _utils = __webpack_require__(54);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var TabContent = (0, _createReactClass2['default'])({
  displayName: 'TabContent',
  propTypes: {
    animated: _propTypes2['default'].bool,
    animatedWithMargin: _propTypes2['default'].bool,
    prefixCls: _propTypes2['default'].string,
    children: _propTypes2['default'].any,
    activeKey: _propTypes2['default'].string,
    style: _propTypes2['default'].any,
    tabBarPosition: _propTypes2['default'].string
  },
  getDefaultProps: function getDefaultProps() {
    return {
      animated: true
    };
  },
  getTabPanes: function getTabPanes() {
    var props = this.props;
    var activeKey = props.activeKey;
    var children = props.children;
    var newChildren = [];

    _react2['default'].Children.forEach(children, function (child) {
      if (!child) {
        return;
      }
      var key = child.key;
      var active = activeKey === key;
      newChildren.push(_react2['default'].cloneElement(child, {
        active: active,
        destroyInactiveTabPane: props.destroyInactiveTabPane,
        rootPrefixCls: props.prefixCls
      }));
    });

    return newChildren;
  },
  render: function render() {
    var _classnames;

    var props = this.props;
    var prefixCls = props.prefixCls,
        children = props.children,
        activeKey = props.activeKey,
        tabBarPosition = props.tabBarPosition,
        animated = props.animated,
        animatedWithMargin = props.animatedWithMargin;
    var style = props.style;

    var classes = (0, _classnames3['default'])((_classnames = {}, (0, _defineProperty3['default'])(_classnames, prefixCls + '-content', true), (0, _defineProperty3['default'])(_classnames, animated ? prefixCls + '-content-animated' : prefixCls + '-content-no-animated', true), _classnames));
    if (animated) {
      var activeIndex = (0, _utils.getActiveIndex)(children, activeKey);
      if (activeIndex !== -1) {
        var animatedStyle = animatedWithMargin ? (0, _utils.getMarginStyle)(activeIndex, tabBarPosition) : (0, _utils.getTransformPropValue)((0, _utils.getTransformByIndex)(activeIndex, tabBarPosition));
        style = (0, _extends3['default'])({}, style, animatedStyle);
      } else {
        style = (0, _extends3['default'])({}, style, {
          display: 'none'
        });
      }
    }
    return _react2['default'].createElement(
      'div',
      {
        className: classes,
        style: style
      },
      this.getTabPanes()
    );
  }
});

exports['default'] = TabContent;
module.exports = exports['default'];

/***/ }),
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
    if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, __webpack_require__(276), __webpack_require__(453), __webpack_require__(350)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else if (typeof exports !== "undefined") {
        factory(module, require('./clipboard-action'), require('tiny-emitter'), require('good-listener'));
    } else {
        var mod = {
            exports: {}
        };
        factory(mod, global.clipboardAction, global.tinyEmitter, global.goodListener);
        global.clipboard = mod.exports;
    }
})(this, function (module, _clipboardAction, _tinyEmitter, _goodListener) {
    'use strict';

    var _clipboardAction2 = _interopRequireDefault(_clipboardAction);

    var _tinyEmitter2 = _interopRequireDefault(_tinyEmitter);

    var _goodListener2 = _interopRequireDefault(_goodListener);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
        return typeof obj;
    } : function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var _createClass = function () {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ("value" in descriptor) descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor);
            }
        }

        return function (Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);
            if (staticProps) defineProperties(Constructor, staticProps);
            return Constructor;
        };
    }();

    function _possibleConstructorReturn(self, call) {
        if (!self) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }

        return call && (typeof call === "object" || typeof call === "function") ? call : self;
    }

    function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
        }

        subClass.prototype = Object.create(superClass && superClass.prototype, {
            constructor: {
                value: subClass,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }

    var Clipboard = function (_Emitter) {
        _inherits(Clipboard, _Emitter);

        /**
         * @param {String|HTMLElement|HTMLCollection|NodeList} trigger
         * @param {Object} options
         */
        function Clipboard(trigger, options) {
            _classCallCheck(this, Clipboard);

            var _this = _possibleConstructorReturn(this, (Clipboard.__proto__ || Object.getPrototypeOf(Clipboard)).call(this));

            _this.resolveOptions(options);
            _this.listenClick(trigger);
            return _this;
        }

        /**
         * Defines if attributes would be resolved using internal setter functions
         * or custom functions that were passed in the constructor.
         * @param {Object} options
         */


        _createClass(Clipboard, [{
            key: 'resolveOptions',
            value: function resolveOptions() {
                var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

                this.action = typeof options.action === 'function' ? options.action : this.defaultAction;
                this.target = typeof options.target === 'function' ? options.target : this.defaultTarget;
                this.text = typeof options.text === 'function' ? options.text : this.defaultText;
                this.container = _typeof(options.container) === 'object' ? options.container : document.body;
            }
        }, {
            key: 'listenClick',
            value: function listenClick(trigger) {
                var _this2 = this;

                this.listener = (0, _goodListener2.default)(trigger, 'click', function (e) {
                    return _this2.onClick(e);
                });
            }
        }, {
            key: 'onClick',
            value: function onClick(e) {
                var trigger = e.delegateTarget || e.currentTarget;

                if (this.clipboardAction) {
                    this.clipboardAction = null;
                }

                this.clipboardAction = new _clipboardAction2.default({
                    action: this.action(trigger),
                    target: this.target(trigger),
                    text: this.text(trigger),
                    container: this.container,
                    trigger: trigger,
                    emitter: this
                });
            }
        }, {
            key: 'defaultAction',
            value: function defaultAction(trigger) {
                return getAttributeValue('action', trigger);
            }
        }, {
            key: 'defaultTarget',
            value: function defaultTarget(trigger) {
                var selector = getAttributeValue('target', trigger);

                if (selector) {
                    return document.querySelector(selector);
                }
            }
        }, {
            key: 'defaultText',
            value: function defaultText(trigger) {
                return getAttributeValue('text', trigger);
            }
        }, {
            key: 'destroy',
            value: function destroy() {
                this.listener.destroy();

                if (this.clipboardAction) {
                    this.clipboardAction.destroy();
                    this.clipboardAction = null;
                }
            }
        }], [{
            key: 'isSupported',
            value: function isSupported() {
                var action = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : ['copy', 'cut'];

                var actions = typeof action === 'string' ? [action] : action;
                var support = !!document.queryCommandSupported;

                actions.forEach(function (action) {
                    support = support && !!document.queryCommandSupported(action);
                });

                return support;
            }
        }]);

        return Clipboard;
    }(_tinyEmitter2.default);

    /**
     * Helper function to retrieve attribute value.
     * @param {String} suffix
     * @param {Element} element
     */
    function getAttributeValue(suffix, element) {
        var attribute = 'data-clipboard-' + suffix;

        if (!element.hasAttribute(attribute)) {
            return;
        }

        return element.getAttribute(attribute);
    }

    module.exports = Clipboard;
});

/***/ }),
/* 82 */
/***/ (function(module, exports) {

module.exports = function(it, Constructor, name, forbiddenField){
  if(!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)){
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

var hide = __webpack_require__(141);
module.exports = function(target, src, safe){
  for(var key in src){
    if(safe && target[key])target[key] = src[key];
    else hide(target, key, src[key]);
  } return target;
};

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _classCallCheck2 = __webpack_require__(1);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(2);

var _inherits3 = _interopRequireDefault(_inherits2);

var _class, _temp2;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(6);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _piexifjs = __webpack_require__(470);

var _piexifjs2 = _interopRequireDefault(_piexifjs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var jpeg = 'image/jpeg';

var headPortrait = (_temp2 = _class = function (_React$Component) {
  (0, _inherits3.default)(headPortrait, _React$Component);

  function headPortrait() {
    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, headPortrait);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.zipImage = function (result) {
      var _this$img = _this.img,
          naturalWidth = _this$img.naturalWidth,
          naturalHeight = _this$img.naturalHeight;

      var horizontal = naturalWidth > naturalHeight;
      var shortSide = horizontal ? naturalHeight : naturalWidth;
      var destWidth = shortSide > _this.props.side ? _this.props.side : shortSide;
      var Orientation = void 0;

      if (result) {
        var exif = _piexifjs2.default.load(result);
        Orientation = exif['0th'][_piexifjs2.default.ImageIFD.Orientation];
      }

      _this.ctx.canvas.width = _this.ctx.canvas.height = destWidth;

      _this.ctx.clearRect(0, 0, destWidth, destWidth);
      switch (Orientation) {
        case 6:
          _this.ctx.translate(destWidth, 0);
          _this.ctx.rotate(90 * Math.PI / 180);
          break;
        case 3:
          _this.ctx.translate(destWidth, destWidth);
          _this.ctx.rotate(180 * Math.PI / 180);
          break;
        case 8:
          _this.ctx.translate(0, destWidth);
          _this.ctx.rotate(270 * Math.PI / 180);
          break;
        default:
      }
      _this.ctx.drawImage(_this.img, horizontal ? (naturalWidth - naturalHeight) / 2 : 0, horizontal ? 0 : (naturalHeight - naturalWidth) / 5, shortSide, shortSide, 0, 0, destWidth, destWidth);

      var base64 = _this.ctx.canvas.toDataURL('image/jpeg', 0.32);
      var blob = new Blob([toUint8Array(base64)], {
        type: 'image/jpeg',
        endings: 'transparent'
      });
      _this.props.onChange(base64, blob);
    }, _this.handleChange = function (ev) {
      var file = ev.target.files[0];
      if (file) {
        var reader = _this.reader;
        reader.readAsDataURL(file);
        reader.onload = function () {
          var base64 = reader.result;
          if (file.type === jpeg) {
            reader.readAsBinaryString(file);
            reader.onload = function () {
              _this.img.onload = function () {
                return _this.zipImage(reader.result);
              };
              _this.img.src = base64;
            };
          } else {
            _this.img.onload = function () {
              return _this.zipImage();
            };
            _this.img.src = base64;
          }
        };
      }
      ev.target.value = '';
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  headPortrait.prototype.componentWillMount = function componentWillMount() {
    this.ctx = document.createElement('canvas').getContext('2d');
    this.img = document.createElement('img');
    this.reader = new FileReader();
  };

  headPortrait.prototype.render = function render() {
    return _react2.default.createElement('input', {
      className: this.props.className,
      type: 'file',
      accept: 'image/gif,image/jpeg,image/jpg,image/png,image/svg',
      onChange: this.handleChange
    });
  };

  return headPortrait;
}(_react2.default.Component), _class.propTypes = {
  className: _propTypes2.default.string,
  onChange: _propTypes2.default.func,
  side: _propTypes2.default.number
}, _class.defaultProps = {
  side: 320
}, _temp2);
exports.default = headPortrait;


function toUint8Array(base64) {
  var data = window.atob(base64.split(',')[1]);
  var cache = new Uint8Array(data.length);
  for (var i = 0; i < data.length; i++) {
    cache[i] = data.charCodeAt(i);
  }
  return cache;
}

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _createReactClass = __webpack_require__(23);

var _createReactClass2 = _interopRequireDefault(_createReactClass);

var _Dialog = __webpack_require__(364);

var _Dialog2 = _interopRequireDefault(_Dialog);

var _getContainerRenderMixin = __webpack_require__(482);

var _getContainerRenderMixin2 = _interopRequireDefault(_getContainerRenderMixin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var __assign = undefined && undefined.__assign || Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
    }
    return t;
};

var DialogWrap = (0, _createReactClass2["default"])({
    displayName: 'DialogWrap',
    mixins: [(0, _getContainerRenderMixin2["default"])({
        isVisible: function isVisible(instance) {
            return instance.props.visible;
        },

        autoDestroy: false,
        getComponent: function getComponent(instance, extra) {
            return _react2["default"].createElement(_Dialog2["default"], __assign({}, instance.props, extra, { key: "dialog" }));
        },
        getContainer: function getContainer(instance) {
            if (instance.props.getContainer) {
                return instance.props.getContainer();
            }
            var container = document.createElement('div');
            document.body.appendChild(container);
            return container;
        }
    })],
    getDefaultProps: function getDefaultProps() {
        return {
            visible: false
        };
    },
    shouldComponentUpdate: function shouldComponentUpdate(_ref) {
        var visible = _ref.visible;

        return !!(this.props.visible || visible);
    },
    componentWillUnmount: function componentWillUnmount() {
        if (this.props.visible) {
            this.renderComponent({
                afterClose: this.removeContainer,
                onClose: function onClose() {},

                visible: false
            });
        } else {
            this.removeContainer();
        }
    },
    getElement: function getElement(part) {
        return this._component.getElement(part);
    },
    render: function render() {
        return null;
    }
});
exports["default"] = DialogWrap;
module.exports = exports['default'];

/***/ }),
/* 86 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Hammer__ = __webpack_require__(366);


/* harmony default export */ __webpack_exports__["default"] = (__WEBPACK_IMPORTED_MODULE_0__Hammer__["a" /* default */]);

/***/ }),
/* 87 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataSource", function() { return DataSource; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ListView__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Indexed__ = __webpack_require__(387);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__RefreshControl__ = __webpack_require__(390);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "IndexedList", function() { return __WEBPACK_IMPORTED_MODULE_1__Indexed__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "RefreshControl", function() { return __WEBPACK_IMPORTED_MODULE_2__RefreshControl__["a"]; });
// export this package's api



__WEBPACK_IMPORTED_MODULE_0__ListView__["a" /* default */].IndexedList = __WEBPACK_IMPORTED_MODULE_1__Indexed__["a" /* default */];
__WEBPACK_IMPORTED_MODULE_0__ListView__["a" /* default */].RefreshControl = __WEBPACK_IMPORTED_MODULE_2__RefreshControl__["a" /* default */];

var DataSource = __WEBPACK_IMPORTED_MODULE_0__ListView__["a" /* default */].DataSource;

/* harmony default export */ __webpack_exports__["default"] = (__WEBPACK_IMPORTED_MODULE_0__ListView__["a" /* default */]);

/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = __webpack_require__(5);

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = __webpack_require__(1);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(4);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(2);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(10);

var _classnames2 = _interopRequireDefault(_classnames);

var _reactMixin = __webpack_require__(62);

var _reactMixin2 = _interopRequireDefault(_reactMixin);

var _Picker = __webpack_require__(398);

var _Picker2 = _interopRequireDefault(_Picker);

var _MultiPickerMixin = __webpack_require__(397);

var _MultiPickerMixin2 = _interopRequireDefault(_MultiPickerMixin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var MultiPicker = function (_React$Component) {
    (0, _inherits3['default'])(MultiPicker, _React$Component);

    function MultiPicker() {
        (0, _classCallCheck3['default'])(this, MultiPicker);
        return (0, _possibleConstructorReturn3['default'])(this, (MultiPicker.__proto__ || Object.getPrototypeOf(MultiPicker)).apply(this, arguments));
    }

    (0, _createClass3['default'])(MultiPicker, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _props = this.props,
                prefixCls = _props.prefixCls,
                pickerPrefixCls = _props.pickerPrefixCls,
                className = _props.className,
                rootNativeProps = _props.rootNativeProps,
                disabled = _props.disabled,
                pickerItemStyle = _props.pickerItemStyle,
                indicatorStyle = _props.indicatorStyle,
                pure = _props.pure,
                children = _props.children;

            var selectedValue = this.getValue();
            var colElements = children.map(function (col, i) {
                return _react2['default'].createElement(
                    'div',
                    { key: col.key || i, className: prefixCls + '-item' },
                    _react2['default'].createElement(_Picker2['default'], (0, _extends3['default'])({ itemStyle: pickerItemStyle, disabled: disabled, pure: pure, indicatorStyle: indicatorStyle, prefixCls: pickerPrefixCls, selectedValue: selectedValue[i], onValueChange: _this2.onValueChange.bind(_this2, i) }, col.props))
                );
            });
            return _react2['default'].createElement(
                'div',
                (0, _extends3['default'])({}, rootNativeProps, { className: (0, _classnames2['default'])(className, prefixCls) }),
                colElements
            );
        }
    }]);
    return MultiPicker;
}(_react2['default'].Component);

_reactMixin2['default'].onClass(MultiPicker, _MultiPickerMixin2['default']);
exports['default'] = MultiPicker;
module.exports = exports['default'];

/***/ }),
/* 89 */,
/* 90 */,
/* 91 */,
/* 92 */,
/* 93 */,
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getComponentLocale = getComponentLocale;
exports.getLocaleCode = getLocaleCode;

var _objectAssign = __webpack_require__(17);

var _objectAssign2 = _interopRequireDefault(_objectAssign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function getComponentLocale(props, context, componentName, getDefaultLocale) {
    var locale = context && context.antLocale && context.antLocale[componentName] ? context.antLocale[componentName] : getDefaultLocale();
    var result = (0, _objectAssign2['default'])({}, locale);
    if (props.locale) {
        result = (0, _objectAssign2['default'])(result, props.locale);
        if (props.locale.lang) {
            result.lang = (0, _objectAssign2['default'])({}, locale.lang, props.locale.lang);
        }
    }
    return result;
}
function getLocaleCode(context) {
    var localeCode = context.antLocale && context.antLocale.locale;
    // Had use LocaleProvide but didn't set locale
    if (context.antLocale && context.antLocale.exist && !localeCode) {
        return 'zh-cn';
    }
    return localeCode;
}

/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _defineProperty2 = __webpack_require__(9);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _classCallCheck2 = __webpack_require__(1);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(4);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(2);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(10);

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

/* tslint:disable:jsx-no-multiline-js */
var ActivityIndicator = function (_React$Component) {
    (0, _inherits3['default'])(ActivityIndicator, _React$Component);

    function ActivityIndicator() {
        (0, _classCallCheck3['default'])(this, ActivityIndicator);
        return (0, _possibleConstructorReturn3['default'])(this, (ActivityIndicator.__proto__ || Object.getPrototypeOf(ActivityIndicator)).apply(this, arguments));
    }

    (0, _createClass3['default'])(ActivityIndicator, [{
        key: 'render',
        value: function render() {
            var _classNames, _classNames2;

            var _props = this.props,
                prefixCls = _props.prefixCls,
                className = _props.className,
                animating = _props.animating,
                toast = _props.toast,
                size = _props.size,
                text = _props.text;

            var wrapClass = (0, _classnames2['default'])((_classNames = {}, (0, _defineProperty3['default'])(_classNames, '' + prefixCls, true), (0, _defineProperty3['default'])(_classNames, prefixCls + '-lg', size === 'large'), (0, _defineProperty3['default'])(_classNames, prefixCls + '-sm', size === 'small'), (0, _defineProperty3['default'])(_classNames, className, !!className), (0, _defineProperty3['default'])(_classNames, prefixCls + '-toast', !!toast), _classNames));
            var spinnerClass = (0, _classnames2['default'])((_classNames2 = {}, (0, _defineProperty3['default'])(_classNames2, prefixCls + '-spinner', true), (0, _defineProperty3['default'])(_classNames2, prefixCls + '-spinner-lg', !!toast || size === 'large'), _classNames2));
            if (animating) {
                if (toast) {
                    return _react2['default'].createElement(
                        'div',
                        { className: wrapClass },
                        text ? _react2['default'].createElement(
                            'div',
                            { className: prefixCls + '-content' },
                            _react2['default'].createElement('span', { className: spinnerClass, 'aria-hidden': 'true' }),
                            _react2['default'].createElement(
                                'span',
                                { className: prefixCls + '-toast' },
                                text
                            )
                        ) : _react2['default'].createElement(
                            'div',
                            { className: prefixCls + '-content' },
                            _react2['default'].createElement('span', { className: spinnerClass, 'aria-label': 'Loading' })
                        )
                    );
                } else {
                    return text ? _react2['default'].createElement(
                        'div',
                        { className: wrapClass },
                        _react2['default'].createElement('span', { className: spinnerClass, 'aria-hidden': 'true' }),
                        _react2['default'].createElement(
                            'span',
                            { className: prefixCls + '-tip' },
                            text
                        )
                    ) : _react2['default'].createElement(
                        'div',
                        { className: wrapClass },
                        _react2['default'].createElement('span', { className: spinnerClass, 'aria-label': 'loading' })
                    );
                }
            } else {
                return null;
            }
        }
    }]);
    return ActivityIndicator;
}(_react2['default'].Component);

exports['default'] = ActivityIndicator;

ActivityIndicator.defaultProps = {
    prefixCls: 'am-activity-indicator',
    animating: true,
    size: 'small',
    panelColor: 'rgba(34,34,34,0.6)',
    toast: false
};
module.exports = exports['default'];

/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = __webpack_require__(5);

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = __webpack_require__(9);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _classCallCheck2 = __webpack_require__(1);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(4);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(2);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(10);

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var __rest = undefined && undefined.__rest || function (s, e) {
    var t = {};
    for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    }if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
    }return t;
};

var Badge = function (_React$Component) {
    (0, _inherits3['default'])(Badge, _React$Component);

    function Badge() {
        (0, _classCallCheck3['default'])(this, Badge);
        return (0, _possibleConstructorReturn3['default'])(this, (Badge.__proto__ || Object.getPrototypeOf(Badge)).apply(this, arguments));
    }

    (0, _createClass3['default'])(Badge, [{
        key: 'render',
        value: function render() {
            var _classNames, _classNames2;

            var _a = this.props,
                className = _a.className,
                prefixCls = _a.prefixCls,
                children = _a.children,
                text = _a.text,
                size = _a.size,
                overflowCount = _a.overflowCount,
                dot = _a.dot,
                corner = _a.corner,
                hot = _a.hot,
                restProps = __rest(_a, ["className", "prefixCls", "children", "text", "size", "overflowCount", "dot", "corner", "hot"]);
            overflowCount = overflowCount;
            text = typeof text === 'number' && text > overflowCount ? overflowCount + '+' : text;
            // dot mode don't need text
            if (dot) {
                text = '';
            }
            var scrollNumberCls = (0, _classnames2['default'])((_classNames = {}, (0, _defineProperty3['default'])(_classNames, prefixCls + '-dot', dot), (0, _defineProperty3['default'])(_classNames, prefixCls + '-dot-large', dot && size === 'large'), (0, _defineProperty3['default'])(_classNames, prefixCls + '-text', !dot && !corner), (0, _defineProperty3['default'])(_classNames, prefixCls + '-corner', corner), (0, _defineProperty3['default'])(_classNames, prefixCls + '-corner-large', corner && size === 'large'), _classNames));
            var badgeCls = (0, _classnames2['default'])((_classNames2 = {}, (0, _defineProperty3['default'])(_classNames2, className, !!className), (0, _defineProperty3['default'])(_classNames2, prefixCls, true), (0, _defineProperty3['default'])(_classNames2, prefixCls + '-not-a-wrapper', !children), (0, _defineProperty3['default'])(_classNames2, prefixCls + '-corner-wrapper', corner), (0, _defineProperty3['default'])(_classNames2, prefixCls + '-hot', !!hot), (0, _defineProperty3['default'])(_classNames2, prefixCls + '-corner-wrapper-large', corner && size === 'large'), _classNames2));
            return _react2['default'].createElement(
                'span',
                { className: badgeCls },
                children,
                (text || dot) && _react2['default'].createElement(
                    'sup',
                    (0, _extends3['default'])({ className: scrollNumberCls }, restProps),
                    text
                )
            );
        }
    }]);
    return Badge;
}(_react2['default'].Component);

exports['default'] = Badge;

Badge.defaultProps = {
    prefixCls: 'am-badge',
    size: 'small',
    overflowCount: 99,
    dot: false,
    corner: false
};
module.exports = exports['default'];

/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports['default'] = handleProps;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _index = __webpack_require__(14);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var __rest = undefined && undefined.__rest || function (s, e) {
    var t = {};
    for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    }if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
    }return t;
};
/* tslint:disable:no-unused-variable */

/* tslint:enable:no-unused-variable */
var Item = _index2['default'].Item;
function handleProps(props, isIndexed) {
    var renderHeader = props.renderHeader,
        renderFooter = props.renderFooter,
        renderSectionHeader = props.renderSectionHeader,
        renderBodyComponent = props.renderBodyComponent,
        restProps = __rest(props, ["renderHeader", "renderFooter", "renderSectionHeader", "renderBodyComponent"]);

    var listPrefixCls = props.listPrefixCls;
    var extraProps = {
        renderHeader: null,
        renderFooter: null,
        renderSectionHeader: null,
        renderBodyComponent: renderBodyComponent || function () {
            return _react2['default'].createElement('div', { className: listPrefixCls + '-body' });
        }
    };
    if (renderHeader) {
        extraProps.renderHeader = function () {
            return _react2['default'].createElement(
                'div',
                { className: listPrefixCls + '-header' },
                renderHeader()
            );
        };
    }
    if (renderFooter) {
        extraProps.renderFooter = function () {
            return _react2['default'].createElement(
                'div',
                { className: listPrefixCls + '-footer' },
                renderFooter()
            );
        };
    }
    if (renderSectionHeader) {
        extraProps.renderSectionHeader = isIndexed ? function (sectionData, sectionID) {
            return _react2['default'].createElement(
                'div',
                null,
                _react2['default'].createElement(
                    Item,
                    { prefixCls: listPrefixCls },
                    renderSectionHeader(sectionData, sectionID)
                )
            );
        } : function (sectionData, sectionID) {
            return _react2['default'].createElement(
                Item,
                { prefixCls: listPrefixCls },
                renderSectionHeader(sectionData, sectionID)
            );
        };
    }
    return { restProps: restProps, extraProps: extraProps };
}
module.exports = exports['default'];

/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _defineProperty2 = __webpack_require__(9);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _classCallCheck2 = __webpack_require__(1);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(4);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(2);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(10);

var _classnames2 = _interopRequireDefault(_classnames);

var _PropsType = __webpack_require__(183);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var SearchBar = function (_React$Component) {
    (0, _inherits3['default'])(SearchBar, _React$Component);

    function SearchBar(props) {
        (0, _classCallCheck3['default'])(this, SearchBar);

        var _this = (0, _possibleConstructorReturn3['default'])(this, (SearchBar.__proto__ || Object.getPrototypeOf(SearchBar)).call(this, props));

        _this.onSubmit = function (e) {
            e.preventDefault();
            if (_this.props.onSubmit) {
                _this.props.onSubmit(_this.state.value);
            }
            _this.refs.searchInput.blur();
        };
        _this.onChange = function (e) {
            if (!_this.state.focus) {
                _this.setState({
                    focus: true
                });
            }
            var value = e.target.value;
            if (!('value' in _this.props)) {
                _this.setState({ value: value });
            }
            if (_this.props.onChange) {
                _this.props.onChange(value);
            }
        };
        _this.onFocus = function () {
            _this.setState({
                focus: true
            });
            _this.firstFocus = true;
            if (!('focused' in _this.props)) {
                _this.setState({
                    focused: true
                });
            }
            if (_this.props.onFocus) {
                _this.props.onFocus();
            }
            if (document.activeElement.tagName.toLowerCase() === 'input') {
                _this.scrollIntoViewTimeout = setTimeout(function () {
                    try {
                        document.activeElement.scrollIntoViewIfNeeded();
                    } catch (e) {}
                }, 100);
            }
        };
        _this.onBlur = function () {
            setTimeout(function () {
                _this.setState({
                    focus: false
                });
            }, 0);
            if (!('focused' in _this.props)) {
                _this.setState({
                    focused: false
                });
            }
            if (_this.props.onBlur) {
                _this.props.onBlur();
            }
        };
        _this.onClear = function () {
            if (!('value' in _this.props)) {
                _this.setState({ value: '' });
            }
            if (_this.props.onClear) {
                _this.props.onClear('');
            }
            if (_this.props.onChange) {
                _this.props.onChange('');
            }
            // 加上setTimeout 为了解决Android的兼容性问题。
            // https://github.com/ant-design/ant-design-mobile/issues/1341
            setTimeout(function () {
                _this.refs.searchInput.focus();
            }, 0);
        };
        _this.onCancel = function () {
            if (_this.props.onCancel) {
                _this.props.onCancel(_this.state.value);
            } else {
                _this.onClear();
            }
            _this.refs.searchInput.blur();
        };
        var value = void 0;
        if ('value' in props) {
            value = props.value || '';
        } else if ('defaultValue' in props) {
            value = props.defaultValue;
        } else {
            value = '';
        }
        _this.state = {
            value: value,
            focus: false,
            focused: props.focused || false
        };
        return _this;
    }

    (0, _createClass3['default'])(SearchBar, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var initBtn = window.getComputedStyle(this.refs.rightBtn);
            this.rightBtnInitMarginleft = initBtn['margin-left'];
            if ((this.props.autoFocus || this.state.focused) && navigator.userAgent.indexOf('AlipayClient') > 0) {
                this.refs.searchInput.focus();
            }
            this.componentDidUpdate();
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate() {
            // 检测是否包含名为 ${this.props.prefixCls}-start 样式，生成动画
            // offsetWidth 某些时候是向上取整，某些时候是向下取整，不能用
            var realWidth = this.refs.syntheticPhContainer.getBoundingClientRect().width; // 包含小数
            if (this.refs.searchInputContainer.className.indexOf(this.props.prefixCls + '-start') > -1) {
                this.refs.syntheticPh.style.width = Math.ceil(realWidth) + 'px';
                if (!this.props.showCancelButton) {
                    this.refs.rightBtn.style.marginRight = 0;
                }
            } else {
                this.refs.syntheticPh.style.width = '100%';
                if (!this.props.showCancelButton) {
                    this.refs.rightBtn.style.marginRight = '-' + (this.refs.rightBtn.offsetWidth + parseInt(this.rightBtnInitMarginleft, 10)) + 'px';
                }
            }
            if (this.state.focused) {
                this.refs.searchInput.focus();
            }
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            if ('value' in nextProps) {
                this.setState({
                    value: nextProps.value
                });
            }
            if ('focused' in nextProps) {
                this.setState({
                    focused: nextProps.focused
                });
            }
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            if (this.scrollIntoViewTimeout) {
                clearTimeout(this.scrollIntoViewTimeout);
                this.scrollIntoViewTimeout = null;
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _classNames, _classNames2, _classNames3;

            var _props = this.props,
                prefixCls = _props.prefixCls,
                showCancelButton = _props.showCancelButton,
                disabled = _props.disabled,
                placeholder = _props.placeholder,
                cancelText = _props.cancelText,
                className = _props.className,
                style = _props.style;
            var _state = this.state,
                value = _state.value,
                focus = _state.focus;

            var wrapCls = (0, _classnames2['default'])((_classNames = {}, (0, _defineProperty3['default'])(_classNames, '' + prefixCls, true), (0, _defineProperty3['default'])(_classNames, prefixCls + '-start', focus || value && value.length > 0), (0, _defineProperty3['default'])(_classNames, className, className), _classNames));
            var clearCls = (0, _classnames2['default'])((_classNames2 = {}, (0, _defineProperty3['default'])(_classNames2, prefixCls + '-clear', true), (0, _defineProperty3['default'])(_classNames2, prefixCls + '-clear-show', focus && value && value.length > 0), _classNames2));
            var cancelCls = (0, _classnames2['default'])((_classNames3 = {}, (0, _defineProperty3['default'])(_classNames3, prefixCls + '-cancel', true), (0, _defineProperty3['default'])(_classNames3, prefixCls + '-cancel-show', showCancelButton || focus || value && value.length > 0), (0, _defineProperty3['default'])(_classNames3, prefixCls + '-cancel-anim', this.firstFocus), _classNames3));
            return _react2['default'].createElement(
                'form',
                { onSubmit: this.onSubmit, className: wrapCls, style: style, ref: 'searchInputContainer' },
                _react2['default'].createElement(
                    'div',
                    { className: prefixCls + '-input' },
                    _react2['default'].createElement(
                        'div',
                        { className: prefixCls + '-synthetic-ph', ref: 'syntheticPh' },
                        _react2['default'].createElement(
                            'span',
                            { className: prefixCls + '-synthetic-ph-container', ref: 'syntheticPhContainer' },
                            _react2['default'].createElement('i', { className: prefixCls + '-synthetic-ph-icon' }),
                            _react2['default'].createElement(
                                'span',
                                { className: prefixCls + '-synthetic-ph-placeholder', style: { visibility: placeholder && !value ? 'visible' : 'hidden' } },
                                placeholder
                            )
                        )
                    ),
                    _react2['default'].createElement('input', { type: 'search', className: prefixCls + '-value', value: value, disabled: disabled, placeholder: placeholder, onChange: this.onChange, onFocus: this.onFocus, onBlur: this.onBlur, ref: 'searchInput' }),
                    _react2['default'].createElement('a', { onClick: this.onClear, className: clearCls })
                ),
                _react2['default'].createElement(
                    'div',
                    { className: cancelCls, onClick: this.onCancel, ref: 'rightBtn' },
                    cancelText
                )
            );
        }
    }]);
    return SearchBar;
}(_react2['default'].Component);

exports['default'] = SearchBar;

SearchBar.defaultProps = _PropsType.defaultProps;
module.exports = exports['default'];

/***/ }),
/* 102 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_create_react_class__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_create_react_class___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_create_react_class__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_classnames__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_classnames__);






var TabPane = __WEBPACK_IMPORTED_MODULE_3_create_react_class___default()({
  displayName: 'TabPane',
  propTypes: {
    className: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string,
    active: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.bool,
    style: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.any,
    destroyInactiveTabPane: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.bool,
    forceRender: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.bool,
    placeholder: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.node
  },
  getDefaultProps: function getDefaultProps() {
    return { placeholder: null };
  },
  render: function render() {
    var _classnames;

    var props = this.props;
    var className = props.className,
        destroyInactiveTabPane = props.destroyInactiveTabPane,
        active = props.active,
        forceRender = props.forceRender;

    this._isActived = this._isActived || active;
    var prefixCls = props.rootPrefixCls + '-tabpane';
    var cls = __WEBPACK_IMPORTED_MODULE_4_classnames___default()((_classnames = {}, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_classnames, prefixCls, 1), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_classnames, prefixCls + '-inactive', !active), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_classnames, prefixCls + '-active', active), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_classnames, className, className), _classnames));
    var isRender = destroyInactiveTabPane ? active : this._isActived;
    return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
      'div',
      {
        style: props.style,
        role: 'tabpanel',
        'aria-hidden': props.active ? 'false' : 'true',
        className: cls
      },
      isRender || forceRender ? props.children : props.placeholder
    );
  }
});

/* harmony default export */ __webpack_exports__["a"] = (TabPane);

/***/ }),
/* 103 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Tabs__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__TabPane__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__TabContent__ = __webpack_require__(194);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "TabPane", function() { return __WEBPACK_IMPORTED_MODULE_1__TabPane__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "TabContent", function() { return __WEBPACK_IMPORTED_MODULE_2__TabContent__["a"]; });




/* harmony default export */ __webpack_exports__["default"] = (__WEBPACK_IMPORTED_MODULE_0__Tabs__["a" /* default */]);


/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = __webpack_require__(9);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

exports.getScroll = getScroll;

var _utils = __webpack_require__(54);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classnames2 = __webpack_require__(10);

var _classnames3 = _interopRequireDefault(_classnames2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function getScroll(w, top) {
  var ret = w['page' + (top ? 'Y' : 'X') + 'Offset'];
  var method = 'scroll' + (top ? 'Top' : 'Left');
  if (typeof ret !== 'number') {
    var d = w.document;
    // ie6,7,8 standard mode
    ret = d.documentElement[method];
    if (typeof ret !== 'number') {
      // quirks mode
      ret = d.body[method];
    }
  }
  return ret;
}

function offset(elem) {
  var box = void 0;
  var x = void 0;
  var y = void 0;
  var doc = elem.ownerDocument;
  var body = doc.body;
  var docElem = doc && doc.documentElement;
  box = elem.getBoundingClientRect();
  x = box.left;
  y = box.top;
  x -= docElem.clientLeft || body.clientLeft || 0;
  y -= docElem.clientTop || body.clientTop || 0;
  var w = doc.defaultView || doc.parentWindow;
  x += getScroll(w);
  y += getScroll(w, true);
  return {
    left: x, top: y
  };
}

function _componentDidUpdate(component, init) {
  var refs = component.refs;
  var wrapNode = refs.nav || refs.root;
  var containerOffset = offset(wrapNode);
  var inkBarNode = refs.inkBar;
  var activeTab = refs.activeTab;
  var inkBarNodeStyle = inkBarNode.style;
  var tabBarPosition = component.props.tabBarPosition;
  if (init) {
    // prevent mount animation
    inkBarNodeStyle.display = 'none';
  }
  if (activeTab) {
    var tabNode = activeTab;
    var tabOffset = offset(tabNode);
    var transformSupported = (0, _utils.isTransformSupported)(inkBarNodeStyle);
    if (tabBarPosition === 'top' || tabBarPosition === 'bottom') {
      var left = tabOffset.left - containerOffset.left;
      // use 3d gpu to optimize render
      if (transformSupported) {
        (0, _utils.setTransform)(inkBarNodeStyle, 'translate3d(' + left + 'px,0,0)');
        inkBarNodeStyle.width = tabNode.offsetWidth + 'px';
        inkBarNodeStyle.height = '';
      } else {
        inkBarNodeStyle.left = left + 'px';
        inkBarNodeStyle.top = '';
        inkBarNodeStyle.bottom = '';
        inkBarNodeStyle.right = wrapNode.offsetWidth - left - tabNode.offsetWidth + 'px';
      }
    } else {
      var top = tabOffset.top - containerOffset.top;
      if (transformSupported) {
        (0, _utils.setTransform)(inkBarNodeStyle, 'translate3d(0,' + top + 'px,0)');
        inkBarNodeStyle.height = tabNode.offsetHeight + 'px';
        inkBarNodeStyle.width = '';
      } else {
        inkBarNodeStyle.left = '';
        inkBarNodeStyle.right = '';
        inkBarNodeStyle.top = top + 'px';
        inkBarNodeStyle.bottom = wrapNode.offsetHeight - top - tabNode.offsetHeight + 'px';
      }
    }
  }
  inkBarNodeStyle.display = activeTab ? 'block' : 'none';
}

exports['default'] = {
  getDefaultProps: function getDefaultProps() {
    return {
      inkBarAnimated: true
    };
  },
  componentDidUpdate: function componentDidUpdate() {
    _componentDidUpdate(this);
  },
  componentDidMount: function componentDidMount() {
    _componentDidUpdate(this, true);
  },
  getInkBarNode: function getInkBarNode() {
    var _classnames;

    var _props = this.props,
        prefixCls = _props.prefixCls,
        styles = _props.styles,
        inkBarAnimated = _props.inkBarAnimated;

    var className = prefixCls + '-ink-bar';
    var classes = (0, _classnames3['default'])((_classnames = {}, (0, _defineProperty3['default'])(_classnames, className, true), (0, _defineProperty3['default'])(_classnames, inkBarAnimated ? className + '-animated' : className + '-no-animated', true), _classnames));
    return _react2['default'].createElement('div', {
      style: styles.inkBar,
      className: classes,
      key: 'inkBar',
      ref: 'inkBar'
    });
  }
};

/***/ }),
/* 105 */
/***/ (function(module, exports) {

function arrayTreeFilter(data, filterFn, options) {
  options = options || {};
  options.childrenKeyName = options.childrenKeyName || 'children';
  var children = data || [];
  var result = [];
  var level = 0;
  var foundItem;
  do {
    var foundItem = children.filter(function(item) {
      return filterFn(item, level);
    })[0];
    if (!foundItem) {
      break;
    }
    result.push(foundItem);
    children = foundItem[options.childrenKeyName] || [];
    level += 1;
  } while(children.length > 0);
  return result;
}

module.exports = arrayTreeFilter;


/***/ }),
/* 106 */,
/* 107 */,
/* 108 */,
/* 109 */,
/* 110 */,
/* 111 */,
/* 112 */,
/* 113 */,
/* 114 */,
/* 115 */,
/* 116 */,
/* 117 */,
/* 118 */,
/* 119 */,
/* 120 */,
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__(65)
  , core    = __webpack_require__(30)
  , fails   = __webpack_require__(147);
module.exports = function(KEY, exec){
  var fn  = (core.Object || {})[KEY] || Object[KEY]
    , exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function(){ fn(1); }), 'Object', exp);
};

/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global      = __webpack_require__(48)
  , core        = __webpack_require__(30)
  , dP          = __webpack_require__(91)
  , DESCRIPTORS = __webpack_require__(93)
  , SPECIES     = __webpack_require__(64)('species');

module.exports = function(KEY){
  var C = typeof core[KEY] == 'function' ? core[KEY] : global[KEY];
  if(DESCRIPTORS && C && !C[SPECIES])dP.f(C, SPECIES, {
    configurable: true,
    get: function(){ return this; }
  });
};

/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

var ctx                = __webpack_require__(49)
  , invoke             = __webpack_require__(289)
  , html               = __webpack_require__(473)
  , cel                = __webpack_require__(465)
  , global             = __webpack_require__(48)
  , process            = global.process
  , setTask            = global.setImmediate
  , clearTask          = global.clearImmediate
  , MessageChannel     = global.MessageChannel
  , counter            = 0
  , queue              = {}
  , ONREADYSTATECHANGE = 'onreadystatechange'
  , defer, channel, port;
var run = function(){
  var id = +this;
  if(queue.hasOwnProperty(id)){
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};
var listener = function(event){
  run.call(event.data);
};
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if(!setTask || !clearTask){
  setTask = function setImmediate(fn){
    var args = [], i = 1;
    while(arguments.length > i)args.push(arguments[i++]);
    queue[++counter] = function(){
      invoke(typeof fn == 'function' ? fn : Function(fn), args);
    };
    defer(counter);
    return counter;
  };
  clearTask = function clearImmediate(id){
    delete queue[id];
  };
  // Node.js 0.8-
  if(__webpack_require__(149)(process) == 'process'){
    defer = function(id){
      process.nextTick(ctx(run, id, 1));
    };
  // Browsers with MessageChannel, includes WebWorkers
  } else if(MessageChannel){
    channel = new MessageChannel;
    port    = channel.port2;
    channel.port1.onmessage = listener;
    defer = ctx(port.postMessage, port, 1);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if(global.addEventListener && typeof postMessage == 'function' && !global.importScripts){
    defer = function(id){
      global.postMessage(id + '', '*');
    };
    global.addEventListener('message', listener, false);
  // IE8-
  } else if(ONREADYSTATECHANGE in cel('script')){
    defer = function(id){
      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function(){
        html.removeChild(this);
        run.call(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function(id){
      setTimeout(ctx(run, id, 1), 0);
    };
  }
}
module.exports = {
  set:   setTask,
  clear: clearTask
};

/***/ }),
/* 124 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Checkbox__ = __webpack_require__(363);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return __WEBPACK_IMPORTED_MODULE_0__Checkbox__["a"]; });


/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Channel = function Channel(data) {
  _classCallCheck(this, Channel);

  var listeners = [];
  data = data || {};

  this.subscribe = function (fn) {
    listeners.push(fn);
  };

  this.unsubscribe = function (fn) {
    var idx = listeners.indexOf(fn);
    if (idx !== -1) listeners.splice(idx, 1);
  };

  this.update = function (fn) {
    if (fn) fn(data);
    listeners.forEach(function (l) {
      return l(data);
    });
  };
};

exports.default = Channel;
module.exports = exports['default'];

/***/ }),
/* 126 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_objectWithoutProperties__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_objectWithoutProperties___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_objectWithoutProperties__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_prop_types__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_react_dom__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ListViewDataSource__ = __webpack_require__(388);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ScrollView__ = __webpack_require__(392);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ScrollResponder__ = __webpack_require__(391);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__StaticRenderer__ = __webpack_require__(393);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_react_timer_mixin__ = __webpack_require__(380);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_react_timer_mixin___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_react_timer_mixin__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_react_mixin__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_react_mixin___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_react_mixin__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_autobind_decorator__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_autobind_decorator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_autobind_decorator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_react_sticky__ = __webpack_require__(378);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_react_sticky___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_16_react_sticky__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__PullUpLoadMoreMixin__ = __webpack_require__(389);



















var DEFAULT_PAGE_SIZE = 1;
var DEFAULT_INITIAL_ROWS = 10;
var DEFAULT_SCROLL_RENDER_AHEAD = 1000;
var DEFAULT_END_REACHED_THRESHOLD = 1000;
var DEFAULT_SCROLL_CALLBACK_THROTTLE = 50;
var SCROLLVIEW_REF = 'listviewscroll';

// https://github.com/facebook/react-native/blob/master/Libraries/CustomComponents/ListView/ListView.js

/* eslint react/prop-types: 0, react/sort-comp: 0, no-unused-expressions: 0 */

var ListView = function (_React$Component) {
  __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits___default()(ListView, _React$Component);

  function ListView() {
    var _ref;

    var _temp, _this, _ret;

    __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default()(this, ListView);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn___default()(this, (_ref = ListView.__proto__ || Object.getPrototypeOf(ListView)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      curRenderedRowsCount: _this.props.initialListSize,
      highlightedRow: {}

      /**
       * Exports some data, e.g. for perf investigations or analytics.
       */
    }, _this.stickyRefs = {}, _temp), __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn___default()(_this, _ret);
  }

  /**
   * React life cycle hooks.
   */

  __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass___default()(ListView, [{
    key: 'getMetrics',
    value: function getMetrics() {
      return {
        contentLength: this.scrollProperties.contentLength,
        totalRows: this.props.dataSource.getRowCount(),
        renderedRows: this.state.curRenderedRowsCount,
        visibleRows: Object.keys(this._visibleRows).length
      };
    }

    /**
     * Provides a handle to the underlying scroll responder.
     * Note that the view in `SCROLLVIEW_REF` may not be a `ScrollView`, so we
     * need to check that it responds to `getScrollResponder` before calling it.
     */

  }, {
    key: 'getScrollResponder',
    value: function getScrollResponder() {
      return this.refs[SCROLLVIEW_REF] && this.refs[SCROLLVIEW_REF].getScrollResponder && this.refs[SCROLLVIEW_REF].getScrollResponder();
    }
  }, {
    key: 'scrollTo',
    value: function scrollTo() {
      var _refs$SCROLLVIEW_REF;

      this.refs[SCROLLVIEW_REF] && this.refs[SCROLLVIEW_REF].scrollTo && (_refs$SCROLLVIEW_REF = this.refs[SCROLLVIEW_REF]).scrollTo.apply(_refs$SCROLLVIEW_REF, arguments);
    }
  }, {
    key: 'setNativeProps',
    value: function setNativeProps(props) {
      this.refs[SCROLLVIEW_REF] && this.refs[SCROLLVIEW_REF].setNativeProps(props);
    }
  }, {
    key: 'getInnerViewNode',
    value: function getInnerViewNode() {
      return this.refs[SCROLLVIEW_REF].getInnerViewNode();
    }
  }, {
    key: 'componentWillMount',
    value: function componentWillMount() {
      // this data should never trigger a render pass, so don't put in state
      this.scrollProperties = {
        visibleLength: null,
        contentLength: null,
        offset: 0
      };
      this._childFrames = [];
      this._visibleRows = {};
      this._prevRenderedRowsCount = 0;
      this._sentEndForContentLength = null;
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      // do this in animation frame until componentDidMount actually runs after
      // the component is laid out
      // this.requestAnimationFrame(() => {
      //   this._measureAndUpdateScrollProps();
      // });
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var _this2 = this;

      if (this.props.dataSource !== nextProps.dataSource || this.props.initialListSize !== nextProps.initialListSize) {
        this.setState(function (state, props) {
          _this2._prevRenderedRowsCount = 0;
          return {
            curRenderedRowsCount: Math.min(Math.max(state.curRenderedRowsCount, props.initialListSize), props.dataSource.getRowCount())
          };
        }, function () {
          return _this2._renderMoreRowsIfNeeded();
        });
      }
    }
  }, {
    key: 'onRowHighlighted',
    value: function onRowHighlighted(sectionID, rowID) {
      this.setState({ highlightedRow: { sectionID: sectionID, rowID: rowID } });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var bodyComponents = [];

      var dataSource = this.props.dataSource;
      var allRowIDs = dataSource.rowIdentities;
      var rowCount = 0;
      var sectionHeaderIndices = [];

      var header = this.props.renderHeader && this.props.renderHeader();
      var footer = this.props.renderFooter && this.props.renderFooter();
      var totalIndex = header ? 1 : 0;

      var _loop = function _loop(sectionIdx) {
        var sectionID = dataSource.sectionIdentities[sectionIdx];
        var rowIDs = allRowIDs[sectionIdx];
        if (rowIDs.length === 0) {
          return 'continue';
        }

        if (_this3.props.renderSectionHeader) {
          var shouldUpdateHeader = rowCount >= _this3._prevRenderedRowsCount && dataSource.sectionHeaderShouldUpdate(sectionIdx);

          var renderSectionHeader = __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12__StaticRenderer__["a" /* default */], {
            key: 's_' + sectionID,
            shouldUpdate: !!shouldUpdateHeader,
            render: _this3.props.renderSectionHeader.bind(null, dataSource.getSectionHeaderData(sectionIdx), sectionID)
          });
          if (_this3.props.stickyHeader) {
            renderSectionHeader = __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_16_react_sticky__["Sticky"],
              __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, _this3.props.stickyProps, { key: 's_' + sectionID,
                ref: function ref(c) {
                  _this3.stickyRefs[sectionID] = c;
                }
              }),
              renderSectionHeader
            );
          }
          bodyComponents.push(renderSectionHeader);
          sectionHeaderIndices.push(totalIndex++);
        }

        var sectionBody = [];
        for (var rowIdx = 0; rowIdx < rowIDs.length; rowIdx++) {
          var rowID = rowIDs[rowIdx];
          var comboID = sectionID + '_' + rowID;
          var shouldUpdateRow = rowCount >= _this3._prevRenderedRowsCount && dataSource.rowShouldUpdate(sectionIdx, rowIdx);
          var row = __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12__StaticRenderer__["a" /* default */], {
            key: 'r_' + comboID,
            shouldUpdate: !!shouldUpdateRow,
            render: _this3.props.renderRow.bind(null, dataSource.getRowData(sectionIdx, rowIdx), sectionID, rowID, _this3.onRowHighlighted)
          });
          // bodyComponents.push(row);
          sectionBody.push(row);
          totalIndex++;

          if (_this3.props.renderSeparator && (rowIdx !== rowIDs.length - 1 || sectionIdx === allRowIDs.length - 1)) {
            var adjacentRowHighlighted = _this3.state.highlightedRow.sectionID === sectionID && (_this3.state.highlightedRow.rowID === rowID || _this3.state.highlightedRow.rowID === rowIDs[rowIdx + 1]);
            var separator = _this3.props.renderSeparator(sectionID, rowID, adjacentRowHighlighted);
            if (separator) {
              // bodyComponents.push(separator);
              sectionBody.push(separator);
              totalIndex++;
            }
          }
          if (++rowCount === _this3.state.curRenderedRowsCount) {
            break;
          }
        }
        bodyComponents.push(__WEBPACK_IMPORTED_MODULE_6_react___default.a.cloneElement(_this3.props.renderSectionBodyWrapper(sectionID), {
          className: _this3.props.sectionBodyClassName
        }, sectionBody));
        if (rowCount >= _this3.state.curRenderedRowsCount) {
          return 'break';
        }
      };

      _loop2: for (var sectionIdx = 0; sectionIdx < allRowIDs.length; sectionIdx++) {
        var _ret2 = _loop(sectionIdx);

        switch (_ret2) {
          case 'continue':
            continue;

          case 'break':
            break _loop2;}
      }

      var _props = this.props,
          renderScrollComponent = _props.renderScrollComponent,
          props = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_objectWithoutProperties___default()(_props, ['renderScrollComponent']);

      bodyComponents = __WEBPACK_IMPORTED_MODULE_6_react___default.a.cloneElement(props.renderBodyComponent(), {}, bodyComponents);
      if (props.stickyHeader) {
        bodyComponents = __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_16_react_sticky__["StickyContainer"],
          props.stickyContainerProps,
          bodyComponents
        );
      }

      this._sc = __WEBPACK_IMPORTED_MODULE_6_react___default.a.cloneElement(renderScrollComponent(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, props, { onScroll: this._onScroll })), {
        ref: SCROLLVIEW_REF,
        onContentSizeChange: this._onContentSizeChange,
        onLayout: this._onLayout
      }, header, bodyComponents, footer, props.children);
      return this._sc;
    }

    /**
     * Private methods
     */

  }, {
    key: '_measureAndUpdateScrollProps',
    value: function _measureAndUpdateScrollProps() {
      var scrollComponent = this.getScrollResponder();
      if (!scrollComponent || !scrollComponent.getInnerViewNode) {
        return;
      }

      // RCTScrollViewManager.calculateChildFrames is not available on
      // every platform
      // RCTScrollViewManager && RCTScrollViewManager.calculateChildFrames &&
      //   RCTScrollViewManager.calculateChildFrames(
      //     React.findNodeHandle(scrollComponent),
      //     this._updateVisibleRows,
      //   );
    }
  }, {
    key: '_onContentSizeChange',
    value: function _onContentSizeChange(width, height) {
      var contentLength = !this.props.horizontal ? height : width;
      if (contentLength !== this.scrollProperties.contentLength) {
        this.scrollProperties.contentLength = contentLength;
        this._updateVisibleRows();
        this._renderMoreRowsIfNeeded();
      }
      this.props.onContentSizeChange && this.props.onContentSizeChange(width, height);
    }
  }, {
    key: '_onLayout',
    value: function _onLayout(event) {
      var _event$nativeEvent$la = event.nativeEvent.layout,
          width = _event$nativeEvent$la.width,
          height = _event$nativeEvent$la.height;

      var visibleLength = !this.props.horizontal ? height : width;
      if (visibleLength !== this.scrollProperties.visibleLength) {
        this.scrollProperties.visibleLength = visibleLength;
        this._updateVisibleRows();
        this._renderMoreRowsIfNeeded();
      }
      this.props.onLayout && this.props.onLayout(event);
    }
  }, {
    key: '_maybeCallOnEndReached',
    value: function _maybeCallOnEndReached(event) {
      // console.log(this.scrollProperties, this._getDistanceFromEnd(this.scrollProperties));
      if (this.props.onEndReached &&
      // this.scrollProperties.contentLength !== this._sentEndForContentLength &&
      this._getDistanceFromEnd(this.scrollProperties) < this.props.onEndReachedThreshold && this.state.curRenderedRowsCount === this.props.dataSource.getRowCount()) {
        this._sentEndForContentLength = this.scrollProperties.contentLength;
        this.props.onEndReached(event);
        return true;
      }
      return false;
    }
  }, {
    key: '_renderMoreRowsIfNeeded',
    value: function _renderMoreRowsIfNeeded() {
      if (this.scrollProperties.contentLength === null || this.scrollProperties.visibleLength === null || this.state.curRenderedRowsCount === this.props.dataSource.getRowCount()) {
        this._maybeCallOnEndReached();
        return;
      }

      var distanceFromEnd = this._getDistanceFromEnd(this.scrollProperties);
      // console.log(distanceFromEnd, this.props.scrollRenderAheadDistance);
      if (distanceFromEnd < this.props.scrollRenderAheadDistance) {
        this._pageInNewRows();
      }
    }
  }, {
    key: '_pageInNewRows',
    value: function _pageInNewRows() {
      var _this4 = this;

      this.setState(function (state, props) {
        var rowsToRender = Math.min(state.curRenderedRowsCount + props.pageSize, props.dataSource.getRowCount());
        _this4._prevRenderedRowsCount = state.curRenderedRowsCount;
        return {
          curRenderedRowsCount: rowsToRender
        };
      }, function () {
        _this4._measureAndUpdateScrollProps();
        _this4._prevRenderedRowsCount = _this4.state.curRenderedRowsCount;
      });
    }
  }, {
    key: '_getDistanceFromEnd',
    value: function _getDistanceFromEnd(scrollProperties) {
      return scrollProperties.contentLength - scrollProperties.visibleLength - scrollProperties.offset;
    }
  }, {
    key: '_updateVisibleRows',
    value: function _updateVisibleRows() /* updatedFrames */{
      // if (!this.props.onChangeVisibleRows) {
      //   return; // No need to compute visible rows if there is no callback
      // }
      // if (updatedFrames) {
      //   updatedFrames.forEach((newFrame) => {
      //     this._childFrames[newFrame.index] = merge(newFrame);
      //   });
      // }
      // let isVertical = !this.props.horizontal;
      // let dataSource = this.props.dataSource;
      // let visibleMin = this.scrollProperties.offset;
      // let visibleMax = visibleMin + this.scrollProperties.visibleLength;
      // let allRowIDs = dataSource.rowIdentities;
      //
      // let header = this.props.renderHeader && this.props.renderHeader();
      // let totalIndex = header ? 1 : 0;
      // let visibilityChanged = false;
      // let changedRows = {};
      // for (let sectionIdx = 0; sectionIdx < allRowIDs.length; sectionIdx++) {
      //   let rowIDs = allRowIDs[sectionIdx];
      //   if (rowIDs.length === 0) {
      //     continue;
      //   }
      //   let sectionID = dataSource.sectionIdentities[sectionIdx];
      //   if (this.props.renderSectionHeader) {
      //     totalIndex++;
      //   }
      //   let visibleSection = this._visibleRows[sectionID];
      //   if (!visibleSection) {
      //     visibleSection = {};
      //   }
      //   for (let rowIdx = 0; rowIdx < rowIDs.length; rowIdx++) {
      //     let rowID = rowIDs[rowIdx];
      //     let frame = this._childFrames[totalIndex];
      //     totalIndex++;
      //     if (!frame) {
      //       break;
      //     }
      //     let rowVisible = visibleSection[rowID];
      //     let min = isVertical ? frame.y : frame.x;
      //     let max = min + (isVertical ? frame.height : frame.width);
      //     if (min > visibleMax || max < visibleMin) {
      //       if (rowVisible) {
      //         visibilityChanged = true;
      //         delete visibleSection[rowID];
      //         if (!changedRows[sectionID]) {
      //           changedRows[sectionID] = {};
      //         }
      //         changedRows[sectionID][rowID] = false;
      //       }
      //     } else if (!rowVisible) {
      //       visibilityChanged = true;
      //       visibleSection[rowID] = true;
      //       if (!changedRows[sectionID]) {
      //         changedRows[sectionID] = {};
      //       }
      //       changedRows[sectionID][rowID] = true;
      //     }
      //   }
      //   if (!isEmpty(visibleSection)) {
      //     this._visibleRows[sectionID] = visibleSection;
      //   } else if (this._visibleRows[sectionID]) {
      //     delete this._visibleRows[sectionID];
      //   }
      // }
      // visibilityChanged && this.props.onChangeVisibleRows(this._visibleRows, changedRows);
    }
  }, {
    key: '_onScroll',
    value: function _onScroll(e) {
      var isVertical = !this.props.horizontal;
      // this.scrollProperties.visibleLength = e.nativeEvent.layoutMeasurement[
      //   isVertical ? 'height' : 'width'
      // ];
      // this.scrollProperties.contentLength = e.nativeEvent.contentSize[
      //   isVertical ? 'height' : 'width'
      // ];
      // this.scrollProperties.offset = e.nativeEvent.contentOffset[
      //   isVertical ? 'y' : 'x'
      // ];
      var ev = e;
      // when the ListView is destroyed,
      // but also will trigger scroll event after `scrollEventThrottle`
      if (!this.refs[SCROLLVIEW_REF]) {
        return;
      }
      var target = __WEBPACK_IMPORTED_MODULE_8_react_dom___default.a.findDOMNode(this.refs[SCROLLVIEW_REF]);
      if (this.props.stickyHeader || this.props.useBodyScroll) {
        this.scrollProperties.visibleLength = window[isVertical ? 'innerHeight' : 'innerWidth'];
        this.scrollProperties.contentLength = target[isVertical ? 'scrollHeight' : 'scrollWidth'];
        this.scrollProperties.offset = window.document.body[isVertical ? 'scrollTop' : 'scrollLeft'];
      } else if (this.props.useZscroller) {
        var domScroller = this.refs[SCROLLVIEW_REF].domScroller;
        ev = domScroller;
        this.scrollProperties.visibleLength = domScroller.container[isVertical ? 'clientHeight' : 'clientWidth'];
        this.scrollProperties.contentLength = domScroller.content[isVertical ? 'offsetHeight' : 'offsetWidth'];
        this.scrollProperties.offset = domScroller.scroller.getValues()[isVertical ? 'top' : 'left'];
        // console.log(this.scrollProperties, domScroller.scroller.getScrollMax())
      } else {
        this.scrollProperties.visibleLength = target[isVertical ? 'offsetHeight' : 'offsetWidth'];
        this.scrollProperties.contentLength = target[isVertical ? 'scrollHeight' : 'scrollWidth'];
        this.scrollProperties.offset = target[isVertical ? 'scrollTop' : 'scrollLeft'];
      }

      // this._updateVisibleRows(e.nativeEvent.updatedChildFrames);
      if (!this._maybeCallOnEndReached(ev)) {
        this._renderMoreRowsIfNeeded();
      }

      if (this.props.onEndReached && this._getDistanceFromEnd(this.scrollProperties) > this.props.onEndReachedThreshold) {
        // Scrolled out of the end zone, so it should be able to trigger again.
        this._sentEndForContentLength = null;
      }

      this.props.onScroll && this.props.onScroll(ev);
    }
  }]);

  return ListView;
}(__WEBPACK_IMPORTED_MODULE_6_react___default.a.Component);

ListView.DataSource = __WEBPACK_IMPORTED_MODULE_9__ListViewDataSource__["a" /* default */];
ListView.propTypes = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, __WEBPACK_IMPORTED_MODULE_10__ScrollView__["a" /* default */].propTypes, {
  dataSource: __WEBPACK_IMPORTED_MODULE_7_prop_types___default.a.instanceOf(__WEBPACK_IMPORTED_MODULE_9__ListViewDataSource__["a" /* default */]).isRequired,
  renderSeparator: __WEBPACK_IMPORTED_MODULE_7_prop_types___default.a.func,
  renderRow: __WEBPACK_IMPORTED_MODULE_7_prop_types___default.a.func.isRequired,
  initialListSize: __WEBPACK_IMPORTED_MODULE_7_prop_types___default.a.number,
  onEndReached: __WEBPACK_IMPORTED_MODULE_7_prop_types___default.a.func,
  onEndReachedThreshold: __WEBPACK_IMPORTED_MODULE_7_prop_types___default.a.number,
  pageSize: __WEBPACK_IMPORTED_MODULE_7_prop_types___default.a.number,
  renderFooter: __WEBPACK_IMPORTED_MODULE_7_prop_types___default.a.func,
  renderHeader: __WEBPACK_IMPORTED_MODULE_7_prop_types___default.a.func,
  renderSectionHeader: __WEBPACK_IMPORTED_MODULE_7_prop_types___default.a.func,
  renderScrollComponent: __WEBPACK_IMPORTED_MODULE_7_prop_types___default.a.func,
  scrollRenderAheadDistance: __WEBPACK_IMPORTED_MODULE_7_prop_types___default.a.number,
  onChangeVisibleRows: __WEBPACK_IMPORTED_MODULE_7_prop_types___default.a.func,
  scrollEventThrottle: __WEBPACK_IMPORTED_MODULE_7_prop_types___default.a.number,
  // removeClippedSubviews: PropTypes.bool,
  // stickyHeaderIndices: PropTypes.arrayOf(PropTypes.number),
  // another added
  renderBodyComponent: __WEBPACK_IMPORTED_MODULE_7_prop_types___default.a.func,
  renderSectionBodyWrapper: __WEBPACK_IMPORTED_MODULE_7_prop_types___default.a.func,
  sectionBodyClassName: __WEBPACK_IMPORTED_MODULE_7_prop_types___default.a.string,
  useZscroller: __WEBPACK_IMPORTED_MODULE_7_prop_types___default.a.bool, // for web
  useBodyScroll: __WEBPACK_IMPORTED_MODULE_7_prop_types___default.a.bool, // for web
  stickyHeader: __WEBPACK_IMPORTED_MODULE_7_prop_types___default.a.bool, // for web
  stickyProps: __WEBPACK_IMPORTED_MODULE_7_prop_types___default.a.object, // https://github.com/captivationsoftware/react-sticky/blob/master/README.md#sticky--props
  stickyContainerProps: __WEBPACK_IMPORTED_MODULE_7_prop_types___default.a.object });
ListView.defaultProps = {
  initialListSize: DEFAULT_INITIAL_ROWS,
  pageSize: DEFAULT_PAGE_SIZE,
  renderScrollComponent: function renderScrollComponent(props) {
    return __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__ScrollView__["a" /* default */], props);
  },
  renderBodyComponent: function renderBodyComponent() {
    return __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement('div', null);
  },
  renderSectionBodyWrapper: function renderSectionBodyWrapper(sectionID) {
    return __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement('div', { key: sectionID });
  },
  sectionBodyClassName: 'list-view-section-body',
  scrollRenderAheadDistance: DEFAULT_SCROLL_RENDER_AHEAD,
  onEndReachedThreshold: DEFAULT_END_REACHED_THRESHOLD,
  scrollEventThrottle: DEFAULT_SCROLL_CALLBACK_THROTTLE,
  // stickyHeaderIndices: [],
  stickyProps: {},
  stickyContainerProps: {}
};


__WEBPACK_IMPORTED_MODULE_14_react_mixin___default()(ListView.prototype, __WEBPACK_IMPORTED_MODULE_11__ScrollResponder__["a" /* default */].Mixin);
__WEBPACK_IMPORTED_MODULE_14_react_mixin___default()(ListView.prototype, __WEBPACK_IMPORTED_MODULE_13_react_timer_mixin___default.a);
__WEBPACK_IMPORTED_MODULE_14_react_mixin___default()(ListView.prototype, __WEBPACK_IMPORTED_MODULE_17__PullUpLoadMoreMixin__["a" /* default */]);
__WEBPACK_IMPORTED_MODULE_15_autobind_decorator___default()(ListView);

ListView.isReactNativeComponent = true;

/* harmony default export */ __webpack_exports__["a"] = (ListView);

/***/ }),
/* 127 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getOffsetTop;
/* harmony export (immutable) */ __webpack_exports__["b"] = _event;
/* harmony export (immutable) */ __webpack_exports__["c"] = throttle;
function getOffsetTop(elem) {
  var offsetTop = 0;
  /* eslint no-cond-assign: 0 */
  do {
    if (!isNaN(elem.offsetTop)) {
      offsetTop += elem.offsetTop;
    }
  } while (elem = elem.offsetParent);
  return offsetTop;
}

function _event(e) {
  if (e.touches && e.touches.length) {
    return e.touches[0];
  }
  if (e.changedTouches && e.changedTouches.length) {
    return e.changedTouches[0];
  }
  return e;
}

function throttle(fn, delay) {
  var allowSample = true;
  return function _throttle(e) {
    if (allowSample) {
      allowSample = false;
      setTimeout(function () {
        allowSample = true;
      }, delay);
      fn(e);
    }
  };
}

/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(1);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(4);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(2);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _rcDialog = __webpack_require__(85);

var _rcDialog2 = _interopRequireDefault(_rcDialog);

var _reactMixin = __webpack_require__(62);

var _reactMixin2 = _interopRequireDefault(_reactMixin);

var _PopupMixin = __webpack_require__(400);

var _PopupMixin2 = _interopRequireDefault(_PopupMixin);

var _rcTouchable = __webpack_require__(36);

var _rcTouchable2 = _interopRequireDefault(_rcTouchable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var PopupPicker = function (_React$Component) {
  (0, _inherits3['default'])(PopupPicker, _React$Component);

  function PopupPicker() {
    (0, _classCallCheck3['default'])(this, PopupPicker);
    return (0, _possibleConstructorReturn3['default'])(this, (PopupPicker.__proto__ || Object.getPrototypeOf(PopupPicker)).apply(this, arguments));
  }

  (0, _createClass3['default'])(PopupPicker, [{
    key: 'getModal',
    value: function getModal() {
      var props = this.props;
      if (!this.state.visible) {
        return null;
      }
      var prefixCls = props.prefixCls;

      return _react2['default'].createElement(
        _rcDialog2['default'],
        { prefixCls: '' + prefixCls, className: props.className || '', visible: true, closable: false, transitionName: props.transitionName || props.popupTransitionName, maskTransitionName: props.maskTransitionName, onClose: this.hide.bind(this), style: props.style },
        _react2['default'].createElement(
          'div',
          null,
          _react2['default'].createElement(
            'div',
            { className: prefixCls + '-header' },
            _react2['default'].createElement(
              _rcTouchable2['default'],
              { activeClassName: prefixCls + '-item-active' },
              _react2['default'].createElement(
                'div',
                { className: prefixCls + '-item ' + prefixCls + '-header-left', onClick: this.onDismiss.bind(this) },
                props.dismissText
              )
            ),
            _react2['default'].createElement(
              'div',
              { className: prefixCls + '-item ' + prefixCls + '-title' },
              props.title
            ),
            _react2['default'].createElement(
              _rcTouchable2['default'],
              { activeClassName: prefixCls + '-item-active' },
              _react2['default'].createElement(
                'div',
                { className: prefixCls + '-item ' + prefixCls + '-header-right', onClick: this.onOk.bind(this) },
                props.okText
              )
            )
          ),
          this.getContent()
        )
      );
    }
  }, {
    key: 'render',
    value: function render() {
      return this.getRender();
    }
  }]);
  return PopupPicker;
}(_react2['default'].Component);

PopupPicker.defaultProps = {
  prefixCls: 'rmc-picker-popup',
  triggerType: 'onClick',
  WrapComponent: 'span'
};
_reactMixin2['default'].onClass(PopupPicker, _PopupMixin2['default']);
exports['default'] = PopupPicker;
module.exports = exports['default'];

/***/ }),
/* 129 */,
/* 130 */,
/* 131 */,
/* 132 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Scroller__ = __webpack_require__(463);



var MIN_INDICATOR_SIZE = 8;

function setTransform(nodeStyle, value) {
  nodeStyle.transform = value;
  nodeStyle.webkitTransform = value;
  nodeStyle.MozTransform = value;
}

function setTransformOrigin(nodeStyle, value) {
  nodeStyle.transformOrigin = value;
  nodeStyle.webkitTransformOrigin = value;
  nodeStyle.MozTransformOrigin = value;
}

function DOMScroller(content) {
  var _this = this;

  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var scrollbars = void 0;
  var indicators = void 0;
  var indicatorsSize = void 0;
  var scrollbarsSize = void 0;
  var indicatorsPos = void 0;
  var scrollbarsOpacity = void 0;
  var contentSize = void 0;
  var clientSize = void 0;

  this.content = content;
  this.container = content.parentNode;
  this.options = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, options, {
    scrollingComplete: function scrollingComplete() {
      _this.clearScrollbarTimer();
      _this.timer = setTimeout(function () {
        if (_this._destroyed) {
          return;
        }
        if (options.scrollingComplete) {
          options.scrollingComplete();
        }
        if (scrollbars) {
          ['x', 'y'].forEach(function (k) {
            if (scrollbars[k]) {
              _this.setScrollbarOpacity(k, 0);
            }
          });
        }
      }, 0);
    }
  });

  if (this.options.scrollbars) {
    scrollbars = this.scrollbars = {};
    indicators = this.indicators = {};
    indicatorsSize = this.indicatorsSize = {};
    scrollbarsSize = this.scrollbarsSize = {};
    indicatorsPos = this.indicatorsPos = {};
    scrollbarsOpacity = this.scrollbarsOpacity = {};
    contentSize = this.contentSize = {};
    clientSize = this.clientSize = {};

    ['x', 'y'].forEach(function (k) {
      var optionName = k === 'x' ? 'scrollingX' : 'scrollingY';
      if (_this.options[optionName] !== false) {
        scrollbars[k] = document.createElement('div');
        scrollbars[k].className = 'zscroller-scrollbar-' + k;
        indicators[k] = document.createElement('div');
        indicators[k].className = 'zscroller-indicator-' + k;
        scrollbars[k].appendChild(indicators[k]);
        indicatorsSize[k] = -1;
        scrollbarsOpacity[k] = 0;
        indicatorsPos[k] = 0;
        _this.container.appendChild(scrollbars[k]);
      }
    });
  }

  var init = true;
  var contentStyle = content.style;

  // create Scroller instance
  this.scroller = new __WEBPACK_IMPORTED_MODULE_1__Scroller__["a" /* default */](function (left, top, zoom) {
    if (!init && options.onScroll) {
      options.onScroll();
    }
    setTransform(contentStyle, 'translate3d(' + -left + 'px,' + -top + 'px,0) scale(' + zoom + ')');
    if (scrollbars) {
      ['x', 'y'].forEach(function (k) {
        if (scrollbars[k]) {
          var pos = k === 'x' ? left : top;
          if (clientSize[k] >= contentSize[k]) {
            _this.setScrollbarOpacity(k, 0);
          } else {
            if (!init) {
              _this.setScrollbarOpacity(k, 1);
            }
            var normalIndicatorSize = clientSize[k] / contentSize[k] * scrollbarsSize[k];
            var size = normalIndicatorSize;
            var indicatorPos = void 0;
            if (pos < 0) {
              size = Math.max(normalIndicatorSize + pos, MIN_INDICATOR_SIZE);
              indicatorPos = 0;
            } else if (pos > contentSize[k] - clientSize[k]) {
              size = Math.max(normalIndicatorSize + contentSize[k] - clientSize[k] - pos, MIN_INDICATOR_SIZE);
              indicatorPos = scrollbarsSize[k] - size;
            } else {
              indicatorPos = pos / contentSize[k] * scrollbarsSize[k];
            }
            _this.setIndicatorSize(k, size);
            _this.setIndicatorPos(k, indicatorPos);
          }
        }
      });
    }
    init = false;
  }, this.options);

  // bind events
  this.bindEvents();

  // the content element needs a correct transform origin for zooming
  setTransformOrigin(content.style, 'left top');

  // reflow for the first time
  this.reflow();
}

DOMScroller.prototype.setDisabled = function setDisabled(disabled) {
  this.disabled = disabled;
};

DOMScroller.prototype.clearScrollbarTimer = function clearScrollbarTimer() {
  if (this.timer) {
    clearTimeout(this.timer);
    this.timer = null;
  }
};

DOMScroller.prototype.setScrollbarOpacity = function setScrollbarOpacity(axis, opacity) {
  if (this.scrollbarsOpacity[axis] !== opacity) {
    this.scrollbars[axis].style.opacity = opacity;
    this.scrollbarsOpacity[axis] = opacity;
  }
};

DOMScroller.prototype.setIndicatorPos = function setIndicatorPos(axis, value) {
  if (this.indicatorsPos[axis] !== value) {
    if (axis === 'x') {
      setTransform(this.indicators[axis].style, 'translate3d(' + value + 'px,0,0)');
    } else {
      setTransform(this.indicators[axis].style, 'translate3d(0, ' + value + 'px,0)');
    }
    this.indicatorsPos[axis] = value;
  }
};

DOMScroller.prototype.setIndicatorSize = function setIndicatorSize(axis, value) {
  if (this.indicatorsSize[axis] !== value) {
    this.indicators[axis].style[axis === 'x' ? 'width' : 'height'] = value + 'px';
    this.indicatorsSize[axis] = value;
  }
};

DOMScroller.prototype.reflow = function reflow() {
  if (this.scrollbars) {
    this.contentSize.x = this.content.offsetWidth;
    this.contentSize.y = this.content.offsetHeight;
    this.clientSize.x = this.container.clientWidth;
    this.clientSize.y = this.container.clientHeight;
    if (this.scrollbars.x) {
      this.scrollbarsSize.x = this.scrollbars.x.offsetWidth;
    }
    if (this.scrollbars.y) {
      this.scrollbarsSize.y = this.scrollbars.y.offsetHeight;
    }
  }
  // set the right scroller dimensions
  this.scroller.setDimensions(this.container.clientWidth, this.container.clientHeight, this.content.offsetWidth, this.content.offsetHeight);

  // refresh the position for zooming purposes
  var rect = this.container.getBoundingClientRect();
  this.scroller.setPosition(rect.x + this.container.clientLeft, rect.y + this.container.clientTop);
};

DOMScroller.prototype.destroy = function destroy() {
  this._destroyed = true;
  window.removeEventListener('resize', this.onResize, false);
  this.container.removeEventListener('touchstart', this.onTouchStart, false);
  this.container.removeEventListener('touchmove', this.onTouchMove, false);
  this.container.removeEventListener('touchend', this.onTouchEnd, false);
  this.container.removeEventListener('touchcancel', this.onTouchCancel, false);
  this.container.removeEventListener('mousedown', this.onMouseDown, false);
  document.removeEventListener('mousemove', this.onMouseMove, false);
  document.removeEventListener('mouseup', this.onMouseUp, false);
  this.container.removeEventListener('mousewheel', this.onMouseWheel, false);
};

DOMScroller.prototype.bindEvents = function bindEvents() {
  var _this2 = this;

  var that = this;

  // reflow handling
  window.addEventListener('resize', this.onResize = function () {
    that.reflow();
  }, false);

  var lockMouse = false;
  var releaseLockTimer = void 0;

  this.container.addEventListener('touchstart', this.onTouchStart = function (e) {
    lockMouse = true;
    if (releaseLockTimer) {
      clearTimeout(releaseLockTimer);
      releaseLockTimer = null;
    }
    // Don't react if initial down happens on a form element
    if (e.touches[0] && e.touches[0].target && e.touches[0].target.tagName.match(/input|textarea|select/i) || _this2.disabled) {
      return;
    }
    _this2.clearScrollbarTimer();
    // reflow since the container may have changed
    that.reflow();
    that.scroller.doTouchStart(e.touches, e.timeStamp);
  }, false);

  this.container.addEventListener('touchmove', this.onTouchMove = function (e) {
    e.preventDefault();
    that.scroller.doTouchMove(e.touches, e.timeStamp, e.scale);
  }, false);

  this.container.addEventListener('touchend', this.onTouchEnd = function (e) {
    that.scroller.doTouchEnd(e.timeStamp);
    releaseLockTimer = setTimeout(function () {
      lockMouse = false;
    }, 300);
  }, false);

  this.container.addEventListener('touchcancel', this.onTouchCancel = function (e) {
    that.scroller.doTouchEnd(e.timeStamp);
    releaseLockTimer = setTimeout(function () {
      lockMouse = false;
    }, 300);
  }, false);

  this.onMouseUp = function (e) {
    that.scroller.doTouchEnd(e.timeStamp);
    document.removeEventListener('mousemove', _this2.onMouseMove, false);
    document.removeEventListener('mouseup', _this2.onMouseUp, false);
  };

  this.onMouseMove = function (e) {
    that.scroller.doTouchMove([{
      pageX: e.pageX,
      pageY: e.pageY
    }], e.timeStamp);
  };

  this.container.addEventListener('mousedown', this.onMouseDown = function (e) {
    if (lockMouse || e.target.tagName.match(/input|textarea|select/i) || _this2.disabled) {
      return;
    }
    _this2.clearScrollbarTimer();
    that.scroller.doTouchStart([{
      pageX: e.pageX,
      pageY: e.pageY
    }], e.timeStamp);
    // reflow since the container may have changed
    that.reflow();
    e.preventDefault();
    document.addEventListener('mousemove', _this2.onMouseMove, false);
    document.addEventListener('mouseup', _this2.onMouseUp, false);
  }, false);

  this.container.addEventListener('mousewheel', this.onMouseWheel = function (e) {
    if (that.options.zooming) {
      that.scroller.doMouseZoom(e.wheelDelta, e.timeStamp, e.pageX, e.pageY);
      e.preventDefault();
    }
  }, false);
};

/* harmony default export */ __webpack_exports__["default"] = (DOMScroller);

/***/ }),
/* 133 */,
/* 134 */,
/* 135 */,
/* 136 */,
/* 137 */,
/* 138 */,
/* 139 */,
/* 140 */,
/* 141 */,
/* 142 */,
/* 143 */,
/* 144 */,
/* 145 */,
/* 146 */,
/* 147 */,
/* 148 */,
/* 149 */,
/* 150 */,
/* 151 */,
/* 152 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _defineProperty2 = __webpack_require__(9);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(15);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _rcDialog = __webpack_require__(85);

var _rcDialog2 = _interopRequireDefault(_rcDialog);

var _classnames = __webpack_require__(10);

var _classnames2 = _interopRequireDefault(_classnames);

var _index = __webpack_require__(18);

var _index2 = _interopRequireDefault(_index);

var _objectAssign = __webpack_require__(17);

var _objectAssign2 = _interopRequireDefault(_objectAssign);

var _getDataAttr = __webpack_require__(50);

var _getDataAttr2 = _interopRequireDefault(_getDataAttr);

var _rcTouchable = __webpack_require__(36);

var _rcTouchable2 = _interopRequireDefault(_rcTouchable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

/* tslint:disable:no-unused-variable */
/* tslint:disable:jsx-no-multiline-js */
var NORMAL = 'NORMAL';
/* tslint:enable:no-unused-variable */

var SHARE = 'SHARE';
function noop() {}
var queue = [];
function createActionSheet(flag, config, callback) {
    var _classNames;

    var props = (0, _objectAssign2['default'])({}, {
        prefixCls: 'am-action-sheet',
        cancelButtonText: '取消'
    }, config);
    var prefixCls = props.prefixCls,
        className = props.className,
        transitionName = props.transitionName,
        maskTransitionName = props.maskTransitionName,
        _props$maskClosable = props.maskClosable,
        maskClosable = _props$maskClosable === undefined ? true : _props$maskClosable;

    var div = document.createElement('div');
    document.body.appendChild(div);
    queue.push(close);
    function close() {
        if (div) {
            _reactDom2['default'].unmountComponentAtNode(div);
            div.parentNode.removeChild(div);
            div = null;
            var index = queue.indexOf(close);
            if (index !== -1) {
                queue.splice(index, 1);
            }
        }
    }
    function cb(index) {
        var rowIndex = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

        var res = callback(index, rowIndex);
        if (res && res.then) {
            res.then(function () {
                close();
            });
        } else {
            close();
        }
    }
    var title = props.title,
        message = props.message,
        options = props.options,
        destructiveButtonIndex = props.destructiveButtonIndex,
        cancelButtonIndex = props.cancelButtonIndex,
        cancelButtonText = props.cancelButtonText;

    var titleMsg = [title ? _react2['default'].createElement(
        'h3',
        { key: '0', className: prefixCls + '-title' },
        title
    ) : null, message ? _react2['default'].createElement(
        'div',
        { key: '1', className: prefixCls + '-message' },
        message
    ) : null];
    var children = null;
    var mode = 'normal';
    switch (flag) {
        case NORMAL:
            mode = 'normal';
            children = _react2['default'].createElement(
                'div',
                (0, _getDataAttr2['default'])(props),
                titleMsg,
                _react2['default'].createElement(
                    'div',
                    { className: prefixCls + '-button-list', role: 'group' },
                    options.map(function (item, index) {
                        var _cls;

                        var cls = (_cls = {}, (0, _defineProperty3['default'])(_cls, prefixCls + '-button-list-item', true), (0, _defineProperty3['default'])(_cls, prefixCls + '-destructive-button', destructiveButtonIndex === index), (0, _defineProperty3['default'])(_cls, prefixCls + '-cancel-button', cancelButtonIndex === index), _cls);
                        var itemProps = {
                            className: (0, _classnames2['default'])(cls),
                            onClick: function onClick() {
                                return cb(index);
                            },
                            role: 'button'
                        };
                        var bItem = _react2['default'].createElement(
                            _rcTouchable2['default'],
                            { key: index, activeClassName: prefixCls + '-button-list-item-active' },
                            _react2['default'].createElement(
                                'div',
                                itemProps,
                                item
                            )
                        );
                        if (cancelButtonIndex === index || destructiveButtonIndex === index) {
                            bItem = _react2['default'].createElement(
                                _rcTouchable2['default'],
                                { key: index, activeClassName: prefixCls + '-button-list-item-active' },
                                _react2['default'].createElement(
                                    'div',
                                    itemProps,
                                    item,
                                    cancelButtonIndex === index ? _react2['default'].createElement('span', { className: prefixCls + '-cancel-button-mask' }) : null
                                )
                            );
                        }
                        return bItem;
                    })
                )
            );
            break;
        case SHARE:
            mode = 'share';
            var multipleLine = options.length && Array.isArray(options[0]) || false;
            var createList = function createList(item, index) {
                var rowIndex = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
                return _react2['default'].createElement(
                    'div',
                    { className: prefixCls + '-share-list-item', role: 'button', key: index, onClick: function onClick() {
                            return cb(index, rowIndex);
                        } },
                    _react2['default'].createElement(
                        'div',
                        { className: prefixCls + '-share-list-item-icon' },
                        item.iconName ? _react2['default'].createElement(_index2['default'], { type: item.iconName }) : item.icon
                    ),
                    _react2['default'].createElement(
                        'div',
                        { className: prefixCls + '-share-list-item-title' },
                        item.title
                    )
                );
            };
            children = _react2['default'].createElement(
                'div',
                (0, _getDataAttr2['default'])(props),
                titleMsg,
                _react2['default'].createElement(
                    'div',
                    { className: prefixCls + '-share' },
                    multipleLine ? options.map(function (item, index) {
                        return _react2['default'].createElement(
                            'div',
                            { key: index, className: prefixCls + '-share-list' },
                            item.map(function (ii, ind) {
                                return createList(ii, ind, index);
                            })
                        );
                    }) : _react2['default'].createElement(
                        'div',
                        { className: prefixCls + '-share-list' },
                        options.map(function (item, index) {
                            return createList(item, index);
                        })
                    ),
                    _react2['default'].createElement(
                        _rcTouchable2['default'],
                        { activeClassName: prefixCls + '-share-cancel-button-active' },
                        _react2['default'].createElement(
                            'div',
                            { className: prefixCls + '-share-cancel-button', role: 'button', onClick: function onClick() {
                                    return cb(-1);
                                } },
                            cancelButtonText
                        )
                    )
                )
            );
            break;
        default:
            break;
    }
    var rootCls = (0, _classnames2['default'])((_classNames = {}, (0, _defineProperty3['default'])(_classNames, className, !!className), (0, _defineProperty3['default'])(_classNames, prefixCls + '-' + mode, true), _classNames));
    _reactDom2['default'].render(_react2['default'].createElement(
        _rcDialog2['default'],
        { visible: true, title: '', footer: '', prefixCls: prefixCls, className: rootCls, transitionName: transitionName || 'am-slide-up', maskTransitionName: maskTransitionName || 'am-fade', onClose: function onClose() {
                return cb(cancelButtonIndex || -1);
            }, maskClosable: maskClosable, wrapProps: props.wrapProps || {} },
        children
    ), div);
    return {
        close: close
    };
}
exports['default'] = {
    showActionSheetWithOptions: function showActionSheetWithOptions(config) {
        var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : noop;

        createActionSheet(NORMAL, config, callback);
    },
    showShareActionSheetWithOptions: function showShareActionSheetWithOptions(config) {
        var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : noop;

        createActionSheet(SHARE, config, callback);
    },
    close: function close() {
        queue.forEach(function (q) {
            return q();
        });
    }
};
module.exports = exports['default'];

/***/ }),
/* 153 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = __webpack_require__(5);

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = __webpack_require__(9);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _classCallCheck2 = __webpack_require__(1);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(4);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(2);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(10);

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var __rest = undefined && undefined.__rest || function (s, e) {
    var t = {};
    for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    }if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
    }return t;
};

var CardBody = function (_React$Component) {
    (0, _inherits3['default'])(CardBody, _React$Component);

    function CardBody() {
        (0, _classCallCheck3['default'])(this, CardBody);
        return (0, _possibleConstructorReturn3['default'])(this, (CardBody.__proto__ || Object.getPrototypeOf(CardBody)).apply(this, arguments));
    }

    (0, _createClass3['default'])(CardBody, [{
        key: 'render',
        value: function render() {
            var _classNames;

            var _a = this.props,
                prefixCls = _a.prefixCls,
                className = _a.className,
                restProps = __rest(_a, ["prefixCls", "className"]);
            var wrapCls = (0, _classnames2['default'])((_classNames = {}, (0, _defineProperty3['default'])(_classNames, prefixCls + '-body', true), (0, _defineProperty3['default'])(_classNames, className, className), _classNames));
            return _react2['default'].createElement('div', (0, _extends3['default'])({ className: wrapCls }, restProps));
        }
    }]);
    return CardBody;
}(_react2['default'].Component);

exports['default'] = CardBody;

CardBody.defaultProps = {
    prefixCls: 'am-card'
};
module.exports = exports['default'];

/***/ }),
/* 154 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = __webpack_require__(5);

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = __webpack_require__(9);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _classCallCheck2 = __webpack_require__(1);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(4);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(2);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(10);

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var __rest = undefined && undefined.__rest || function (s, e) {
    var t = {};
    for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    }if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
    }return t;
};

var CardFooter = function (_React$Component) {
    (0, _inherits3['default'])(CardFooter, _React$Component);

    function CardFooter() {
        (0, _classCallCheck3['default'])(this, CardFooter);
        return (0, _possibleConstructorReturn3['default'])(this, (CardFooter.__proto__ || Object.getPrototypeOf(CardFooter)).apply(this, arguments));
    }

    (0, _createClass3['default'])(CardFooter, [{
        key: 'render',
        value: function render() {
            var _classNames;

            var _a = this.props,
                prefixCls = _a.prefixCls,
                content = _a.content,
                className = _a.className,
                extra = _a.extra,
                restProps = __rest(_a, ["prefixCls", "content", "className", "extra"]);
            var wrapCls = (0, _classnames2['default'])((_classNames = {}, (0, _defineProperty3['default'])(_classNames, prefixCls + '-footer', true), (0, _defineProperty3['default'])(_classNames, className, className), _classNames));
            return _react2['default'].createElement(
                'div',
                (0, _extends3['default'])({ className: wrapCls }, restProps),
                _react2['default'].createElement(
                    'div',
                    { className: prefixCls + '-footer-content' },
                    content
                ),
                extra && _react2['default'].createElement(
                    'div',
                    { className: prefixCls + '-footer-extra' },
                    extra
                )
            );
        }
    }]);
    return CardFooter;
}(_react2['default'].Component);

exports['default'] = CardFooter;

CardFooter.defaultProps = {
    prefixCls: 'am-card'
};
module.exports = exports['default'];

/***/ }),
/* 155 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = __webpack_require__(5);

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = __webpack_require__(9);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _classCallCheck2 = __webpack_require__(1);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(4);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(2);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(10);

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var __rest = undefined && undefined.__rest || function (s, e) {
    var t = {};
    for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    }if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
    }return t;
};

var CardHeader = function (_React$Component) {
    (0, _inherits3['default'])(CardHeader, _React$Component);

    function CardHeader() {
        (0, _classCallCheck3['default'])(this, CardHeader);
        return (0, _possibleConstructorReturn3['default'])(this, (CardHeader.__proto__ || Object.getPrototypeOf(CardHeader)).apply(this, arguments));
    }

    (0, _createClass3['default'])(CardHeader, [{
        key: 'render',
        value: function render() {
            var _classNames;

            var _a = this.props,
                prefixCls = _a.prefixCls,
                className = _a.className,
                title = _a.title,
                thumb = _a.thumb,
                thumbStyle = _a.thumbStyle,
                extra = _a.extra,
                restProps = __rest(_a, ["prefixCls", "className", "title", "thumb", "thumbStyle", "extra"]);
            var wrapCls = (0, _classnames2['default'])((_classNames = {}, (0, _defineProperty3['default'])(_classNames, prefixCls + '-header', true), (0, _defineProperty3['default'])(_classNames, className, className), _classNames));
            return _react2['default'].createElement(
                'div',
                (0, _extends3['default'])({ className: wrapCls }, restProps),
                _react2['default'].createElement(
                    'div',
                    { className: prefixCls + '-header-content' },
                    typeof thumb === 'string' ? _react2['default'].createElement('img', { style: thumbStyle, src: thumb }) : thumb,
                    title
                ),
                extra ? _react2['default'].createElement(
                    'div',
                    { className: prefixCls + '-header-extra' },
                    extra
                ) : null
            );
        }
    }]);
    return CardHeader;
}(_react2['default'].Component);

exports['default'] = CardHeader;

CardHeader.defaultProps = {
    prefixCls: 'am-card',
    thumbStyle: {}
};
module.exports = exports['default'];

/***/ }),
/* 156 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = __webpack_require__(5);

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = __webpack_require__(9);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _classCallCheck2 = __webpack_require__(1);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(4);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(2);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _createReactClass = __webpack_require__(23);

var _createReactClass2 = _interopRequireDefault(_createReactClass);

var _classnames = __webpack_require__(10);

var _classnames2 = _interopRequireDefault(_classnames);

var _rmcNukaCarousel = __webpack_require__(394);

var _rmcNukaCarousel2 = _interopRequireDefault(_rmcNukaCarousel);

var _objectAssign = __webpack_require__(17);

var _objectAssign2 = _interopRequireDefault(_objectAssign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var Carousel = function (_React$Component) {
    (0, _inherits3['default'])(Carousel, _React$Component);

    function Carousel(props) {
        (0, _classCallCheck3['default'])(this, Carousel);

        var _this = (0, _possibleConstructorReturn3['default'])(this, (Carousel.__proto__ || Object.getPrototypeOf(Carousel)).call(this, props));

        _this.onChange = function (index) {
            _this.setState({
                selectedIndex: index
            }, function () {
                if (_this.props.afterChange) {
                    _this.props.afterChange(index);
                }
            });
        };
        _this.state = {
            selectedIndex: _this.props.selectedIndex
        };
        return _this;
    }

    (0, _createClass3['default'])(Carousel, [{
        key: 'render',
        value: function render() {
            var _classNames2;

            var _props = this.props,
                className = _props.className,
                prefixCls = _props.prefixCls,
                dotStyle = _props.dotStyle,
                dotActiveStyle = _props.dotActiveStyle;

            var props = (0, _objectAssign2['default'])({}, this.props);
            props = (0, _objectAssign2['default'])(props, {
                wrapAround: props.infinite,
                slideIndex: props.selectedIndex,
                beforeSlide: props.beforeChange
            });
            var Decorators = [];
            var current = this.state.selectedIndex;
            if (props.dots) {
                Decorators = [{
                    component: (0, _createReactClass2['default'])({
                        displayName: 'component',
                        render: function render() {
                            var _props2 = this.props,
                                slideCount = _props2.slideCount,
                                slidesToScroll = _props2.slidesToScroll;

                            var arr = [];
                            for (var i = 0; i < slideCount; i += slidesToScroll) {
                                arr.push(i);
                            }
                            var dotDom = arr.map(function (index) {
                                var _classNames;

                                var dotCls = (0, _classnames2['default'])((_classNames = {}, (0, _defineProperty3['default'])(_classNames, prefixCls + '-wrap-dot', true), (0, _defineProperty3['default'])(_classNames, prefixCls + '-wrap-dot-active', index === current), _classNames));
                                var _dotStyle = index === current ? dotActiveStyle : dotStyle;
                                return _react2['default'].createElement(
                                    'div',
                                    { className: dotCls, key: index },
                                    _react2['default'].createElement('span', { style: _dotStyle })
                                );
                            });
                            return _react2['default'].createElement(
                                'div',
                                { className: prefixCls + '-wrap' },
                                dotDom
                            );
                        }
                    }),
                    position: 'BottomCenter'
                }];
            }
            ['infinite', 'selectedIndex', 'beforeChange', 'afterChange', 'dots'].forEach(function (prop) {
                if (props.hasOwnProperty(prop)) {
                    delete props[prop];
                }
            });
            var wrapCls = (0, _classnames2['default'])((_classNames2 = {}, (0, _defineProperty3['default'])(_classNames2, className, className), (0, _defineProperty3['default'])(_classNames2, prefixCls, true), (0, _defineProperty3['default'])(_classNames2, prefixCls + '-vertical', props.vertical), _classNames2));
            return _react2['default'].createElement(_rmcNukaCarousel2['default'], (0, _extends3['default'])({}, props, { className: wrapCls, decorators: Decorators, afterSlide: this.onChange }));
        }
    }]);
    return Carousel;
}(_react2['default'].Component);

exports['default'] = Carousel;

Carousel.defaultProps = {
    prefixCls: 'am-carousel',
    dots: true,
    arrows: false,
    autoplay: false,
    infinite: false,
    edgeEasing: 'linear',
    cellAlign: 'center',
    selectedIndex: 0,
    dotStyle: {},
    dotActiveStyle: {}
};
module.exports = exports['default'];

/***/ }),
/* 157 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = __webpack_require__(5);

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = __webpack_require__(9);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _classCallCheck2 = __webpack_require__(1);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(4);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(2);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(10);

var _classnames2 = _interopRequireDefault(_classnames);

var _Checkbox = __webpack_require__(67);

var _Checkbox2 = _interopRequireDefault(_Checkbox);

var _getDataAttr = __webpack_require__(50);

var _getDataAttr2 = _interopRequireDefault(_getDataAttr);

var _omit = __webpack_require__(29);

var _omit2 = _interopRequireDefault(_omit);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var AgreeItem = function (_React$Component) {
    (0, _inherits3['default'])(AgreeItem, _React$Component);

    function AgreeItem() {
        (0, _classCallCheck3['default'])(this, AgreeItem);
        return (0, _possibleConstructorReturn3['default'])(this, (AgreeItem.__proto__ || Object.getPrototypeOf(AgreeItem)).apply(this, arguments));
    }

    (0, _createClass3['default'])(AgreeItem, [{
        key: 'render',
        value: function render() {
            var _classNames;

            var _props = this.props,
                prefixCls = _props.prefixCls,
                style = _props.style,
                className = _props.className;

            var wrapCls = (0, _classnames2['default'])((_classNames = {}, (0, _defineProperty3['default'])(_classNames, prefixCls + '-agree', true), (0, _defineProperty3['default'])(_classNames, className, className), _classNames));
            return _react2['default'].createElement(
                'div',
                (0, _extends3['default'])({}, (0, _getDataAttr2['default'])(this.props), { className: wrapCls, style: style }),
                _react2['default'].createElement(_Checkbox2['default'], (0, _extends3['default'])({}, (0, _omit2['default'])(this.props, ['style']), { className: prefixCls + '-agree-label' }))
            );
        }
    }]);
    return AgreeItem;
}(_react2['default'].Component);

exports['default'] = AgreeItem;

AgreeItem.defaultProps = {
    prefixCls: 'am-checkbox'
};
module.exports = exports['default'];

/***/ }),
/* 158 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = __webpack_require__(5);

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = __webpack_require__(9);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _classCallCheck2 = __webpack_require__(1);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(4);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(2);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(10);

var _classnames2 = _interopRequireDefault(_classnames);

var _index = __webpack_require__(14);

var _index2 = _interopRequireDefault(_index);

var _Checkbox = __webpack_require__(67);

var _Checkbox2 = _interopRequireDefault(_Checkbox);

var _omit = __webpack_require__(29);

var _omit2 = _interopRequireDefault(_omit);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var ListItem = _index2['default'].Item;
function noop() {}

var CheckboxItem = function (_React$Component) {
    (0, _inherits3['default'])(CheckboxItem, _React$Component);

    function CheckboxItem() {
        (0, _classCallCheck3['default'])(this, CheckboxItem);
        return (0, _possibleConstructorReturn3['default'])(this, (CheckboxItem.__proto__ || Object.getPrototypeOf(CheckboxItem)).apply(this, arguments));
    }

    (0, _createClass3['default'])(CheckboxItem, [{
        key: 'render',
        value: function render() {
            var _classNames,
                _this2 = this;

            var _props = this.props,
                prefixCls = _props.prefixCls,
                listPrefixCls = _props.listPrefixCls,
                className = _props.className,
                children = _props.children,
                disabled = _props.disabled,
                _props$checkboxProps = _props.checkboxProps,
                checkboxProps = _props$checkboxProps === undefined ? {} : _props$checkboxProps;

            var wrapCls = (0, _classnames2['default'])((_classNames = {}, (0, _defineProperty3['default'])(_classNames, prefixCls + '-item', true), (0, _defineProperty3['default'])(_classNames, prefixCls + '-item-disabled', disabled === true), (0, _defineProperty3['default'])(_classNames, className, className), _classNames));
            // Note: if not omit `onChange`, it will trigger twice on check listitem
            var otherProps = (0, _omit2['default'])(this.props, ['listPrefixCls', 'onChange', 'disabled', 'checkboxProps']);
            if (disabled) {
                delete otherProps.onClick;
            } else {
                otherProps.onClick = otherProps.onClick || noop;
            }
            var extraProps = {};
            ['name', 'defaultChecked', 'checked', 'onChange', 'disabled'].forEach(function (i) {
                if (i in _this2.props) {
                    extraProps[i] = _this2.props[i];
                }
            });
            return _react2['default'].createElement(
                ListItem,
                (0, _extends3['default'])({}, otherProps, { prefixCls: listPrefixCls, className: wrapCls, thumb: _react2['default'].createElement(_Checkbox2['default'], (0, _extends3['default'])({}, checkboxProps, extraProps)) }),
                children
            );
        }
    }]);
    return CheckboxItem;
}(_react2['default'].Component);

exports['default'] = CheckboxItem;

CheckboxItem.defaultProps = {
    prefixCls: 'am-checkbox',
    listPrefixCls: 'am-list'
};
module.exports = exports['default'];

/***/ }),
/* 159 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Checkbox = __webpack_require__(67);

var _Checkbox2 = _interopRequireDefault(_Checkbox);

var _CheckboxItem = __webpack_require__(158);

var _CheckboxItem2 = _interopRequireDefault(_CheckboxItem);

var _AgreeItem = __webpack_require__(157);

var _AgreeItem2 = _interopRequireDefault(_AgreeItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

_Checkbox2['default'].CheckboxItem = _CheckboxItem2['default'];
_Checkbox2['default'].AgreeItem = _AgreeItem2['default'];
exports['default'] = _Checkbox2['default'];
module.exports = exports['default'];

/***/ }),
/* 160 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _zh_CN = __webpack_require__(386);

var _zh_CN2 = _interopRequireDefault(_zh_CN);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

exports['default'] = {
    okText: '确定',
    dismissText: '取消',
    DatePickerLocale: _zh_CN2['default']
};
module.exports = exports['default'];

/***/ }),
/* 161 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof2 = __webpack_require__(94);

var _typeof3 = _interopRequireDefault(_typeof2);

exports.formatFn = formatFn;
exports.getProps = getProps;
exports.getDefaultDate = getDefaultDate;

var _moment = __webpack_require__(37);

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function getFormatter(type) {
    var formatter = void 0;
    if (type === 'time') {
        formatter = 'HH:mm';
    } else if (type === 'datetime') {
        formatter = 'YYYY-MM-DD HH:mm';
    } else {
        formatter = 'YYYY-MM-DD';
    }
    return formatter;
}
function formatFn(instance, value) {
    var format = instance.props.format;

    var type = typeof format === 'undefined' ? 'undefined' : (0, _typeof3['default'])(format);
    if (type === 'string') {
        return value.format(type);
    }
    if (type === 'function') {
        return format(value);
    }
    return value.format(getFormatter(instance.props.mode));
}
function getProps() {
    return {
        mode: 'datetime',
        extra: '请选择',
        onChange: function onChange() {},

        title: ''
    };
}
function getDefaultDate(props) {
    var defaultDate = props.defaultDate,
        minDate = props.minDate,
        maxDate = props.maxDate;

    if (defaultDate) {
        return defaultDate;
    }
    var now = (0, _moment2['default'])();
    if (minDate && now.isBefore(minDate)) {
        return minDate;
    }
    if (maxDate && maxDate.isBefore(now)) {
        return minDate;
    }
    return now;
}

/***/ }),
/* 162 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = __webpack_require__(5);

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = __webpack_require__(9);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _classCallCheck2 = __webpack_require__(1);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(4);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(2);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(10);

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var __rest = undefined && undefined.__rest || function (s, e) {
    var t = {};
    for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    }if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
    }return t;
};

var Flex = function (_React$Component) {
    (0, _inherits3['default'])(Flex, _React$Component);

    function Flex() {
        (0, _classCallCheck3['default'])(this, Flex);
        return (0, _possibleConstructorReturn3['default'])(this, (Flex.__proto__ || Object.getPrototypeOf(Flex)).apply(this, arguments));
    }

    (0, _createClass3['default'])(Flex, [{
        key: 'render',
        value: function render() {
            var _classNames;

            var _a = this.props,
                direction = _a.direction,
                wrap = _a.wrap,
                justify = _a.justify,
                align = _a.align,
                alignContent = _a.alignContent,
                className = _a.className,
                children = _a.children,
                prefixCls = _a.prefixCls,
                style = _a.style,
                restProps = __rest(_a, ["direction", "wrap", "justify", "align", "alignContent", "className", "children", "prefixCls", "style"]);
            var wrapCls = (0, _classnames2['default'])((_classNames = {}, (0, _defineProperty3['default'])(_classNames, prefixCls, true), (0, _defineProperty3['default'])(_classNames, prefixCls + '-dir-row', direction === 'row'), (0, _defineProperty3['default'])(_classNames, prefixCls + '-dir-row-reverse', direction === 'row-reverse'), (0, _defineProperty3['default'])(_classNames, prefixCls + '-dir-column', direction === 'column'), (0, _defineProperty3['default'])(_classNames, prefixCls + '-dir-column-reverse', direction === 'column-reverse'), (0, _defineProperty3['default'])(_classNames, prefixCls + '-nowrap', wrap === 'nowrap'), (0, _defineProperty3['default'])(_classNames, prefixCls + '-wrap', wrap === 'wrap'), (0, _defineProperty3['default'])(_classNames, prefixCls + '-wrap-reverse', wrap === 'wrap-reverse'), (0, _defineProperty3['default'])(_classNames, prefixCls + '-justify-start', justify === 'start'), (0, _defineProperty3['default'])(_classNames, prefixCls + '-justify-end', justify === 'end'), (0, _defineProperty3['default'])(_classNames, prefixCls + '-justify-center', justify === 'center'), (0, _defineProperty3['default'])(_classNames, prefixCls + '-justify-between', justify === 'between'), (0, _defineProperty3['default'])(_classNames, prefixCls + '-justify-around', justify === 'around'), (0, _defineProperty3['default'])(_classNames, prefixCls + '-align-top', align === 'top' || align === 'start'), (0, _defineProperty3['default'])(_classNames, prefixCls + '-align-middle', align === 'middle' || align === 'center'), (0, _defineProperty3['default'])(_classNames, prefixCls + '-align-bottom', align === 'bottom' || align === 'end'), (0, _defineProperty3['default'])(_classNames, prefixCls + '-align-baseline', align === 'baseline'), (0, _defineProperty3['default'])(_classNames, prefixCls + '-align-stretch', align === 'stretch'), (0, _defineProperty3['default'])(_classNames, prefixCls + '-align-content-start', alignContent === 'start'), (0, _defineProperty3['default'])(_classNames, prefixCls + '-align-content-end', alignContent === 'end'), (0, _defineProperty3['default'])(_classNames, prefixCls + '-align-content-center', alignContent === 'center'), (0, _defineProperty3['default'])(_classNames, prefixCls + '-align-content-between', alignContent === 'between'), (0, _defineProperty3['default'])(_classNames, prefixCls + '-align-content-around', alignContent === 'around'), (0, _defineProperty3['default'])(_classNames, prefixCls + '-align-content-stretch', alignContent === 'stretch'), (0, _defineProperty3['default'])(_classNames, className, className), _classNames));
            return _react2['default'].createElement(
                'div',
                (0, _extends3['default'])({ className: wrapCls, style: style }, restProps),
                children
            );
        }
    }]);
    return Flex;
}(_react2['default'].Component);

exports['default'] = Flex;

Flex.defaultProps = {
    prefixCls: 'am-flexbox',
    align: 'center'
};
module.exports = exports['default'];

/***/ }),
/* 163 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = __webpack_require__(5);

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = __webpack_require__(9);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _classCallCheck2 = __webpack_require__(1);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(4);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(2);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(10);

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var __rest = undefined && undefined.__rest || function (s, e) {
    var t = {};
    for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    }if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
    }return t;
};

var FlexItem = function (_React$Component) {
    (0, _inherits3['default'])(FlexItem, _React$Component);

    function FlexItem() {
        (0, _classCallCheck3['default'])(this, FlexItem);
        return (0, _possibleConstructorReturn3['default'])(this, (FlexItem.__proto__ || Object.getPrototypeOf(FlexItem)).apply(this, arguments));
    }

    (0, _createClass3['default'])(FlexItem, [{
        key: 'render',
        value: function render() {
            var _classNames;

            var _a = this.props,
                children = _a.children,
                className = _a.className,
                prefixCls = _a.prefixCls,
                style = _a.style,
                restProps = __rest(_a, ["children", "className", "prefixCls", "style"]);
            var wrapCls = (0, _classnames2['default'])((_classNames = {}, (0, _defineProperty3['default'])(_classNames, prefixCls + '-item', true), (0, _defineProperty3['default'])(_classNames, className, className), _classNames));
            return _react2['default'].createElement(
                'div',
                (0, _extends3['default'])({ className: wrapCls, style: style }, restProps),
                children
            );
        }
    }]);
    return FlexItem;
}(_react2['default'].Component);

exports['default'] = FlexItem;

FlexItem.defaultProps = {
    prefixCls: 'am-flexbox'
};
module.exports = exports['default'];

/***/ }),
/* 164 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./check-circle-o.svg": 406,
	"./check-circle.svg": 407,
	"./check.svg": 408,
	"./cross-circle-o.svg": 409,
	"./cross-circle.svg": 410,
	"./cross.svg": 411,
	"./down.svg": 412,
	"./ellipsis-circle.svg": 413,
	"./ellipsis.svg": 414,
	"./exclamation-circle.svg": 415,
	"./info-circle.svg": 416,
	"./koubei-o.svg": 417,
	"./koubei.svg": 418,
	"./left.svg": 419,
	"./loading.svg": 420,
	"./question-circle.svg": 421,
	"./right.svg": 422,
	"./search.svg": 423,
	"./up.svg": 424
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 164;

/***/ }),
/* 165 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _defineProperty2 = __webpack_require__(9);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _classCallCheck2 = __webpack_require__(1);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(4);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(2);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(10);

var _classnames2 = _interopRequireDefault(_classnames);

var _wingBlank = __webpack_require__(39);

var _wingBlank2 = _interopRequireDefault(_wingBlank);

var _flex = __webpack_require__(51);

var _flex2 = _interopRequireDefault(_flex);

var _toast = __webpack_require__(20);

var _toast2 = _interopRequireDefault(_toast);

var _rcTouchable = __webpack_require__(36);

var _rcTouchable2 = _interopRequireDefault(_rcTouchable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

/* tslint:disable:no-bitwise */
var Item = _flex2['default'].Item;
function noop() {}

var ImagePicker = function (_React$Component) {
    (0, _inherits3['default'])(ImagePicker, _React$Component);

    function ImagePicker() {
        (0, _classCallCheck3['default'])(this, ImagePicker);

        // http://stackoverflow.com/questions/7584794/accessing-jpeg-exif-rotation-data-in-javascript-on-the-client-side
        var _this = (0, _possibleConstructorReturn3['default'])(this, (ImagePicker.__proto__ || Object.getPrototypeOf(ImagePicker)).apply(this, arguments));

        _this.getOrientation = function (file, callback) {
            var reader = new FileReader();
            reader.onload = function (e) {
                var view = new DataView(e.target.result);
                if (view.getUint16(0, false) !== 0xFFD8) {
                    return callback(-2);
                }
                var length = view.byteLength;
                var offset = 2;
                while (offset < length) {
                    var marker = view.getUint16(offset, false);
                    offset += 2;
                    if (marker === 0xFFE1) {
                        var tmp = view.getUint32(offset += 2, false);
                        if (tmp !== 0x45786966) {
                            return callback(-1);
                        }
                        var little = view.getUint16(offset += 6, false) === 0x4949;
                        offset += view.getUint32(offset + 4, little);
                        var tags = view.getUint16(offset, little);
                        offset += 2;
                        for (var i = 0; i < tags; i++) {
                            if (view.getUint16(offset + i * 12, little) === 0x0112) {
                                return callback(view.getUint16(offset + i * 12 + 8, little));
                            }
                        }
                    } else if ((marker & 0xFF00) !== 0xFF00) {
                        break;
                    } else {
                        offset += view.getUint16(offset, false);
                    }
                }
                return callback(-1);
            };
            reader.readAsArrayBuffer(file.slice(0, 64 * 1024));
        };
        _this.getRotation = function () {
            var orientation = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;

            var imgRotation = 0;
            switch (orientation) {
                case 3:
                    imgRotation = 180;
                    break;
                case 6:
                    imgRotation = 90;
                    break;
                case 8:
                    imgRotation = 270;
                    break;
                default:
            }
            return imgRotation;
        };
        _this.removeImage = function (index) {
            var newImages = [];
            var _this$props$files = _this.props.files,
                files = _this$props$files === undefined ? [] : _this$props$files;

            files.forEach(function (image, idx) {
                if (index !== idx) {
                    newImages.push(image);
                }
            });
            if (_this.props.onChange) {
                _this.props.onChange(newImages, 'remove', index);
            }
        };
        _this.addImage = function (imgItem) {
            var _this$props$files2 = _this.props.files,
                files = _this$props$files2 === undefined ? [] : _this$props$files2;

            var newImages = files.concat(imgItem);
            if (_this.props.onChange) {
                _this.props.onChange(newImages, 'add');
            }
        };
        _this.onImageClick = function (index) {
            if (_this.props.onImageClick) {
                _this.props.onImageClick(index, _this.props.files);
            }
        };
        _this.onFileChange = function () {
            var fileSelectorEl = _this.refs.fileSelectorInput;
            if (fileSelectorEl.files && fileSelectorEl.files.length) {
                var file = fileSelectorEl.files[0];
                var reader = new FileReader();
                reader.onload = function (e) {
                    var dataURL = e.target.result;
                    if (!dataURL) {
                        _toast2['default'].fail('图片获取失败');
                        return;
                    }
                    var orientation = 1;
                    _this.getOrientation(file, function (res) {
                        // -2: not jpeg , -1: not defined
                        if (res > 0) {
                            orientation = res;
                        }
                        _this.addImage({
                            url: dataURL,
                            orientation: orientation,
                            file: file
                        });
                        fileSelectorEl.value = '';
                    });
                };
                reader.readAsDataURL(file);
            }
        };
        return _this;
    }

    (0, _createClass3['default'])(ImagePicker, [{
        key: 'render',
        value: function render() {
            var _classNames,
                _this2 = this;

            var _props = this.props,
                prefixCls = _props.prefixCls,
                style = _props.style,
                className = _props.className,
                _props$files = _props.files,
                files = _props$files === undefined ? [] : _props$files,
                selectable = _props.selectable,
                onAddImageClick = _props.onAddImageClick;

            var imgItemList = [];
            var wrapCls = (0, _classnames2['default'])((_classNames = {}, (0, _defineProperty3['default'])(_classNames, '' + prefixCls, true), (0, _defineProperty3['default'])(_classNames, className, className), _classNames));
            files.forEach(function (image, index) {
                var imgStyle = {
                    backgroundImage: 'url(' + image.url + ')',
                    transform: 'rotate(' + _this2.getRotation(image.orientation) + 'deg)'
                };
                imgItemList.push(_react2['default'].createElement(
                    Item,
                    { key: 'item-' + index },
                    _react2['default'].createElement(
                        'div',
                        { key: index, className: prefixCls + '-item' },
                        _react2['default'].createElement('div', { className: prefixCls + '-item-remove', role: 'button', 'aria-label': 'Click and Remove this image', onClick: function onClick() {
                                _this2.removeImage(index);
                            } }),
                        _react2['default'].createElement('div', { className: prefixCls + '-item-content', role: 'button', 'aria-label': 'Image can be clicked', onClick: function onClick() {
                                _this2.onImageClick(index);
                            }, style: imgStyle })
                    )
                ));
            });
            var selectEl = _react2['default'].createElement(
                _rcTouchable2['default'],
                { activeClassName: prefixCls + '-upload-btn-active', key: 'select' },
                _react2['default'].createElement(
                    Item,
                    null,
                    _react2['default'].createElement(
                        'div',
                        { className: prefixCls + '-item ' + prefixCls + '-upload-btn', onClick: onAddImageClick, role: 'button', 'aria-label': 'Choose and add image' },
                        _react2['default'].createElement('input', { ref: 'fileSelectorInput', type: 'file', accept: 'image/jpg,image/jpeg,image/png,image/gif', onChange: function onChange() {
                                _this2.onFileChange();
                            } })
                    )
                )
            );
            var allEl = selectable ? imgItemList.concat([selectEl]) : imgItemList;
            var length = allEl.length;
            if (length !== 0 && length % 4 !== 0) {
                var blankCount = 4 - length % 4;
                var fillBlankEl = [];
                for (var i = 0; i < blankCount; i++) {
                    fillBlankEl.push(_react2['default'].createElement(Item, { key: 'blank-' + i }));
                }
                allEl = allEl.concat(fillBlankEl);
            }
            var flexEl = [];
            for (var _i = 0; _i < allEl.length / 4; _i++) {
                var rowEl = allEl.slice(_i * 4, _i * 4 + 4);
                flexEl.push(rowEl);
            }
            var renderEl = flexEl.map(function (item, index) {
                return _react2['default'].createElement(
                    _flex2['default'],
                    { key: 'flex-' + index },
                    item
                );
            });
            return _react2['default'].createElement(
                'div',
                { className: wrapCls, style: style },
                _react2['default'].createElement(
                    'div',
                    { className: prefixCls + '-list', role: 'group' },
                    _react2['default'].createElement(
                        _wingBlank2['default'],
                        { size: 'md' },
                        renderEl
                    )
                )
            );
        }
    }]);
    return ImagePicker;
}(_react2['default'].Component);

exports['default'] = ImagePicker;

ImagePicker.defaultProps = {
    prefixCls: 'am-image-picker',
    files: [],
    onChange: noop,
    onImageClick: noop,
    onAddImageClick: noop,
    selectable: true
};
module.exports = exports['default'];

/***/ }),
/* 166 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _defineProperty2 = __webpack_require__(9);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _classCallCheck2 = __webpack_require__(1);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(4);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(2);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(10);

var _classnames2 = _interopRequireDefault(_classnames);

var _CustomKeyboard = __webpack_require__(167);

var _CustomKeyboard2 = _interopRequireDefault(_CustomKeyboard);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var NumberInput = function (_React$Component) {
    (0, _inherits3['default'])(NumberInput, _React$Component);

    function NumberInput(props) {
        (0, _classCallCheck3['default'])(this, NumberInput);

        var _this = (0, _possibleConstructorReturn3['default'])(this, (NumberInput.__proto__ || Object.getPrototypeOf(NumberInput)).call(this, props));

        _this._blurEventListener = function (ev) {
            var value = _this.props.value;

            if (ev.target !== _this.refs['input-container']) {
                _this.onInputBlur(value);
            }
        };
        _this.onInputBlur = function (value) {
            var focused = _this.state.focused;

            if (focused) {
                _this.setState({
                    focused: false
                });
                _this.props.onBlur(value);
            }
        };
        _this.onInputFocus = function (value) {
            _this.setState({
                focused: true
            });
            _this.props.onFocus(value);
        };
        _this.onKeyboardClick = function (KeyboardItemValue) {
            var _this$props = _this.props,
                value = _this$props.value,
                onChange = _this$props.onChange,
                maxLength = _this$props.maxLength;
            // 删除键

            if (KeyboardItemValue === 'delete') {
                onChange({ target: { value: value.substring(0, value.length - 1) } });
                // 确认键
            } else if (KeyboardItemValue === 'confirm') {
                onChange({ target: { value: value } });
                _this.onInputBlur(value);
                // 收起键
            } else if (KeyboardItemValue === 'hide') {
                _this.onInputBlur(value);
            } else {
                if (maxLength !== undefined && +maxLength >= 0 && (value + KeyboardItemValue).length > maxLength) {
                    onChange({ target: { value: (value + KeyboardItemValue).substr(0, maxLength) } });
                } else {
                    onChange({ target: { value: value + KeyboardItemValue } });
                }
            }
        };
        _this.onFakeInputClick = function () {
            var value = _this.props.value;
            var focused = _this.state.focused;

            if (!focused) {
                _this.onInputFocus(value);
            }
        };
        _this.state = {
            focused: false
        };
        return _this;
    }

    (0, _createClass3['default'])(NumberInput, [{
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            var _this2 = this;

            if ('focused' in nextProps && nextProps.focused !== this.state.focused) {
                this.debounceFocusTimeout = setTimeout(function () {
                    var _props = _this2.props,
                        disabled = _props.disabled,
                        editable = _props.editable;

                    if (nextProps.focused && !disabled && editable) {
                        _this2.onInputFocus(_this2.props.value);
                    }
                }, 10);
            }
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _props2 = this.props,
                autoFocus = _props2.autoFocus,
                focused = _props2.focused,
                value = _props2.value,
                disabled = _props2.disabled,
                editable = _props2.editable;

            if ((autoFocus || focused) && !disabled && editable) {
                this.onInputFocus(value);
            }
            document.addEventListener('click', this._blurEventListener, false);
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            document.removeEventListener('click', this._blurEventListener, false);
            if (this.debounceFocusTimeout) {
                clearTimeout(this.debounceFocusTimeout);
                this.debounceFocusTimeout = null;
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _classNames;

            var _props3 = this.props,
                placeholder = _props3.placeholder,
                value = _props3.value,
                keyboardPrefixCls = _props3.keyboardPrefixCls,
                disabled = _props3.disabled,
                editable = _props3.editable,
                confirmLabel = _props3.confirmLabel;
            var focused = this.state.focused;

            var preventKeyboard = disabled || !editable;
            var fakeInputCls = (0, _classnames2['default'])((_classNames = {}, (0, _defineProperty3['default'])(_classNames, 'fake-input', true), (0, _defineProperty3['default'])(_classNames, 'focus', focused), (0, _defineProperty3['default'])(_classNames, 'fake-input-disabled', disabled), _classNames));
            return _react2['default'].createElement(
                'div',
                { className: 'fake-input-container' },
                value === '' && _react2['default'].createElement(
                    'div',
                    { className: 'fake-input-placeholder' },
                    placeholder
                ),
                _react2['default'].createElement(
                    'div',
                    { className: fakeInputCls, ref: 'input-container', onClick: preventKeyboard ? function () {} : this.onFakeInputClick },
                    value
                ),
                !preventKeyboard && _react2['default'].createElement(_CustomKeyboard2['default'], { onClick: this.onKeyboardClick, hide: !focused, confirmDisabled: value === '', preixCls: keyboardPrefixCls, confirmLabel: confirmLabel })
            );
        }
    }]);
    return NumberInput;
}(_react2['default'].Component); /* tslint:disable:jsx-no-multiline-js */


NumberInput.defaultProps = {
    onChange: function onChange() {},
    onFocus: function onFocus() {},
    onBlur: function onBlur() {},
    placeholder: '',
    value: '',
    disabled: false,
    editable: true,
    prefixCls: 'am-input',
    keyboardPrefixCls: 'am-number-keyboard'
};
exports['default'] = NumberInput;
module.exports = exports['default'];

/***/ }),
/* 167 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.KeyboardItem = undefined;

var _extends2 = __webpack_require__(5);

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = __webpack_require__(9);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _classCallCheck2 = __webpack_require__(1);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(4);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(2);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(10);

var _classnames2 = _interopRequireDefault(_classnames);

var _rcTouchable = __webpack_require__(36);

var _rcTouchable2 = _interopRequireDefault(_rcTouchable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var __rest = undefined && undefined.__rest || function (s, e) {
    var t = {};
    for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    }if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
    }return t;
};

var KeyboardItem = exports.KeyboardItem = function (_React$Component) {
    (0, _inherits3['default'])(KeyboardItem, _React$Component);

    function KeyboardItem() {
        (0, _classCallCheck3['default'])(this, KeyboardItem);
        return (0, _possibleConstructorReturn3['default'])(this, (KeyboardItem.__proto__ || Object.getPrototypeOf(KeyboardItem)).apply(this, arguments));
    }

    (0, _createClass3['default'])(KeyboardItem, [{
        key: 'render',
        value: function render() {
            var _wrapCls;

            var _a = this.props,
                prefixCls = _a.prefixCls,
                _onClick = _a.onClick,
                className = _a.className,
                disabled = _a.disabled,
                children = _a.children,
                restProps = __rest(_a, ["prefixCls", "onClick", "className", "disabled", "children"]);
            var value = children;
            if (className === 'keyboard-delete') {
                value = 'delete';
            } else if (className === 'keyboard-hide') {
                value = 'hide';
            } else if (className === 'keyboard-confirm') {
                value = 'confirm';
            }
            var wrapCls = (_wrapCls = {}, (0, _defineProperty3['default'])(_wrapCls, className, className), (0, _defineProperty3['default'])(_wrapCls, prefixCls + '-item', true), (0, _defineProperty3['default'])(_wrapCls, prefixCls + '-item-disabled', disabled), _wrapCls);
            return _react2['default'].createElement(
                _rcTouchable2['default'],
                { activeClassName: prefixCls + '-item-active' },
                _react2['default'].createElement(
                    'td',
                    (0, _extends3['default'])({ onClick: function onClick(e) {
                            _onClick(e, value);
                        }, className: (0, _classnames2['default'])(wrapCls) }, restProps),
                    children
                )
            );
        }
    }]);
    return KeyboardItem;
}(_react2['default'].Component);

KeyboardItem.defaultProps = {
    prefixCls: 'am-number-keyboard',
    onClick: function onClick() {},
    disabled: false
};

var CustomKeyboard = function (_React$Component2) {
    (0, _inherits3['default'])(CustomKeyboard, _React$Component2);

    function CustomKeyboard() {
        (0, _classCallCheck3['default'])(this, CustomKeyboard);

        var _this2 = (0, _possibleConstructorReturn3['default'])(this, (CustomKeyboard.__proto__ || Object.getPrototypeOf(CustomKeyboard)).apply(this, arguments));

        _this2.onKeyboardClick = function (e, value) {
            e.nativeEvent.stopImmediatePropagation();
            var confirmDisabled = _this2.props.confirmDisabled;

            if (value === 'confirm' && confirmDisabled) {
                return null;
            } else {
                _this2.props.onClick(value);
            }
        };
        _this2.renderKetboardItem = function (item, index) {
            return _react2['default'].createElement(
                KeyboardItem,
                { onClick: _this2.onKeyboardClick, key: 'item-' + item + '-' + index },
                item
            );
        };
        return _this2;
    }

    (0, _createClass3['default'])(CustomKeyboard, [{
        key: 'render',
        value: function render() {
            var _classNames,
                _this3 = this;

            var _props = this.props,
                prefixCls = _props.prefixCls,
                confirmDisabled = _props.confirmDisabled,
                hide = _props.hide,
                confirmLabel = _props.confirmLabel;

            var wrapperCls = (0, _classnames2['default'])((_classNames = {}, (0, _defineProperty3['default'])(_classNames, prefixCls + '-wrapper', true), (0, _defineProperty3['default'])(_classNames, prefixCls + '-wrapper-hide', hide), _classNames));
            return _react2['default'].createElement(
                'div',
                { className: wrapperCls },
                _react2['default'].createElement(
                    'table',
                    null,
                    _react2['default'].createElement(
                        'tbody',
                        null,
                        _react2['default'].createElement(
                            'tr',
                            null,
                            ['1', '2', '3'].map(function (item, index) {
                                return _this3.renderKetboardItem(item, index);
                            }),
                            _react2['default'].createElement(KeyboardItem, { className: 'keyboard-delete', rowSpan: 2, onClick: this.onKeyboardClick })
                        ),
                        _react2['default'].createElement(
                            'tr',
                            null,
                            ['4', '5', '6'].map(function (item, index) {
                                return _this3.renderKetboardItem(item, index);
                            })
                        ),
                        _react2['default'].createElement(
                            'tr',
                            null,
                            ['7', '8', '9'].map(function (item, index) {
                                return _this3.renderKetboardItem(item, index);
                            }),
                            _react2['default'].createElement(
                                KeyboardItem,
                                { className: 'keyboard-confirm', disabled: confirmDisabled, rowSpan: 2, onClick: this.onKeyboardClick },
                                confirmLabel
                            )
                        ),
                        _react2['default'].createElement(
                            'tr',
                            null,
                            ['.', '0'].map(function (item, index) {
                                return _this3.renderKetboardItem(item, index);
                            }),
                            _react2['default'].createElement(KeyboardItem, { className: 'keyboard-hide', onClick: this.onKeyboardClick })
                        )
                    )
                )
            );
        }
    }]);
    return CustomKeyboard;
}(_react2['default'].Component);

CustomKeyboard.defaultProps = {
    prefixCls: 'am-number-keyboard',
    onClick: function onClick() {},
    confirmDisabled: false
};
exports['default'] = CustomKeyboard;

/***/ }),
/* 168 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = __webpack_require__(5);

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = __webpack_require__(1);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(4);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(2);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _omit = __webpack_require__(29);

var _omit2 = _interopRequireDefault(_omit);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var Input = function (_React$Component) {
    (0, _inherits3['default'])(Input, _React$Component);

    function Input(props) {
        (0, _classCallCheck3['default'])(this, Input);

        var _this = (0, _possibleConstructorReturn3['default'])(this, (Input.__proto__ || Object.getPrototypeOf(Input)).call(this, props));

        _this.onInputBlur = function (e) {
            if (!('focused' in _this.props)) {
                _this.setState({
                    focused: false
                });
            }
            var value = e.target.value;
            if (_this.props.onBlur) {
                _this.props.onBlur(value);
            }
        };
        _this.onInputFocus = function (e) {
            if (!('focused' in _this.props)) {
                _this.setState({
                    focused: true
                });
            }
            var value = e.target.value;
            if (_this.props.onFocus) {
                _this.props.onFocus(value);
            }
        };
        _this.state = {
            focused: props.focused || false
        };
        return _this;
    }

    (0, _createClass3['default'])(Input, [{
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            if ('focused' in nextProps) {
                this.setState({
                    focused: nextProps.focused
                });
            }
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            if ((this.props.autoFocus || this.state.focused) && navigator.userAgent.indexOf('AlipayClient') > 0) {
                this.refs.input.focus();
            }
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate() {
            if (this.state.focused) {
                this.refs.input.focus();
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var otherProps = (0, _omit2['default'])(this.props, ['onBlur', 'onFocus', 'focused', 'autoFocus']);
            return _react2['default'].createElement('input', (0, _extends3['default'])({ ref: 'input', onBlur: this.onInputBlur, onFocus: this.onInputFocus }, otherProps));
        }
    }]);
    return Input;
}(_react2['default'].Component);

exports['default'] = Input;
module.exports = exports['default'];

/***/ }),
/* 169 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports['default'] = {
    confirmLabel: '确定'
};
module.exports = exports['default'];

/***/ }),
/* 170 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = __webpack_require__(5);

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = __webpack_require__(1);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(4);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(2);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _rmcListView = __webpack_require__(87);

var _rmcListView2 = _interopRequireDefault(_rmcListView);

var _handleProps2 = __webpack_require__(100);

var _handleProps3 = _interopRequireDefault(_handleProps2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var IndexedList = _rmcListView2['default'].IndexedList;

var MIndexedList = function (_React$Component) {
    (0, _inherits3['default'])(MIndexedList, _React$Component);

    function MIndexedList() {
        (0, _classCallCheck3['default'])(this, MIndexedList);
        return (0, _possibleConstructorReturn3['default'])(this, (MIndexedList.__proto__ || Object.getPrototypeOf(MIndexedList)).apply(this, arguments));
    }

    (0, _createClass3['default'])(MIndexedList, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                prefixCls = _props.prefixCls,
                listPrefixCls = _props.listPrefixCls;

            var _handleProps = (0, _handleProps3['default'])(this.props, true),
                restProps = _handleProps.restProps,
                extraProps = _handleProps.extraProps;

            return _react2['default'].createElement(
                IndexedList,
                (0, _extends3['default'])({ ref: 'indexedList', sectionHeaderClassName: prefixCls + '-section-header ' + listPrefixCls + '-body', sectionBodyClassName: prefixCls + '-section-body ' + listPrefixCls + '-body' }, restProps, extraProps),
                this.props.children
            );
        }
    }]);
    return MIndexedList;
}(_react2['default'].Component);

exports['default'] = MIndexedList;

MIndexedList.defaultProps = {
    prefixCls: 'am-indexed-list',
    listPrefixCls: 'am-list',
    listViewPrefixCls: 'am-list-view'
};
module.exports = exports['default'];

/***/ }),
/* 171 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Brief = undefined;

var _extends2 = __webpack_require__(5);

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = __webpack_require__(9);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _classCallCheck2 = __webpack_require__(1);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(4);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(2);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(10);

var _classnames2 = _interopRequireDefault(_classnames);

var _rcTouchable = __webpack_require__(36);

var _rcTouchable2 = _interopRequireDefault(_rcTouchable);

var _omit = __webpack_require__(29);

var _omit2 = _interopRequireDefault(_omit);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var __rest = undefined && undefined.__rest || function (s, e) {
    var t = {};
    for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    }if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
    }return t;
};
/* tslint:disable:jsx-no-multiline-js */

var Brief = exports.Brief = function (_React$Component) {
    (0, _inherits3['default'])(Brief, _React$Component);

    function Brief() {
        (0, _classCallCheck3['default'])(this, Brief);
        return (0, _possibleConstructorReturn3['default'])(this, (Brief.__proto__ || Object.getPrototypeOf(Brief)).apply(this, arguments));
    }

    (0, _createClass3['default'])(Brief, [{
        key: 'render',
        value: function render() {
            return _react2['default'].createElement(
                'div',
                { className: 'am-list-brief', style: this.props.style },
                this.props.children
            );
        }
    }]);
    return Brief;
}(_react2['default'].Component);

var ListItem = function (_React$Component2) {
    (0, _inherits3['default'])(ListItem, _React$Component2);

    function ListItem(props) {
        (0, _classCallCheck3['default'])(this, ListItem);

        var _this2 = (0, _possibleConstructorReturn3['default'])(this, (ListItem.__proto__ || Object.getPrototypeOf(ListItem)).call(this, props));

        _this2.onClick = function (ev) {
            var _this2$props = _this2.props,
                onClick = _this2$props.onClick,
                platform = _this2$props.platform;

            var isAndroid = platform === 'android' || platform === 'cross' && !!navigator.userAgent.match(/Android/i);
            if (!!onClick && isAndroid) {
                if (_this2.debounceTimeout) {
                    clearTimeout(_this2.debounceTimeout);
                    _this2.debounceTimeout = null;
                }
                var Item = ev.currentTarget;
                var RippleWidth = Math.max(Item.offsetHeight, Item.offsetWidth);
                var ClientRect = ev.currentTarget.getBoundingClientRect();
                var pointX = ev.clientX - ClientRect.left - Item.offsetWidth / 2;
                var pointY = ev.clientY - ClientRect.top - Item.offsetWidth / 2;
                var coverRippleStyle = {
                    width: RippleWidth + 'px',
                    height: RippleWidth + 'px',
                    left: pointX + 'px',
                    top: pointY + 'px'
                };
                _this2.setState({
                    coverRippleStyle: coverRippleStyle,
                    RippleClicked: true
                }, function () {
                    _this2.debounceTimeout = setTimeout(function () {
                        _this2.setState({
                            coverRippleStyle: { display: 'none' },
                            RippleClicked: false
                        });
                    }, 1000);
                });
            }
            if (onClick) {
                onClick(ev);
            }
        };
        _this2.state = {
            coverRippleStyle: { display: 'none' },
            RippleClicked: false
        };
        return _this2;
    }

    (0, _createClass3['default'])(ListItem, [{
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            if (this.debounceTimeout) {
                clearTimeout(this.debounceTimeout);
                this.debounceTimeout = null;
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _wrapCls,
                _classNames,
                _classNames2,
                _classNames3,
                _this3 = this;

            var _a = this.props,
                prefixCls = _a.prefixCls,
                className = _a.className,
                activeStyle = _a.activeStyle,
                error = _a.error,
                align = _a.align,
                wrap = _a.wrap,
                disabled = _a.disabled,
                children = _a.children,
                multipleLine = _a.multipleLine,
                thumb = _a.thumb,
                extra = _a.extra,
                arrow = _a.arrow,
                onClick = _a.onClick,
                restProps = __rest(_a, ["prefixCls", "className", "activeStyle", "error", "align", "wrap", "disabled", "children", "multipleLine", "thumb", "extra", "arrow", "onClick"]);var _state = this.state,
                coverRippleStyle = _state.coverRippleStyle,
                RippleClicked = _state.RippleClicked;

            var wrapCls = (_wrapCls = {}, (0, _defineProperty3['default'])(_wrapCls, className, className), (0, _defineProperty3['default'])(_wrapCls, prefixCls + '-item', true), (0, _defineProperty3['default'])(_wrapCls, prefixCls + '-item-disabled', disabled), (0, _defineProperty3['default'])(_wrapCls, prefixCls + '-item-error', error), (0, _defineProperty3['default'])(_wrapCls, prefixCls + '-item-top', align === 'top'), (0, _defineProperty3['default'])(_wrapCls, prefixCls + '-item-middle', align === 'middle'), (0, _defineProperty3['default'])(_wrapCls, prefixCls + '-item-bottom', align === 'bottom'), _wrapCls);
            var rippleCls = (0, _classnames2['default'])((_classNames = {}, (0, _defineProperty3['default'])(_classNames, prefixCls + '-ripple', true), (0, _defineProperty3['default'])(_classNames, prefixCls + '-ripple-animate', RippleClicked), _classNames));
            var lineCls = (0, _classnames2['default'])((_classNames2 = {}, (0, _defineProperty3['default'])(_classNames2, prefixCls + '-line', true), (0, _defineProperty3['default'])(_classNames2, prefixCls + '-line-multiple', multipleLine), (0, _defineProperty3['default'])(_classNames2, prefixCls + '-line-wrap', wrap), _classNames2));
            var arrowCls = (0, _classnames2['default'])((_classNames3 = {}, (0, _defineProperty3['default'])(_classNames3, prefixCls + '-arrow', true), (0, _defineProperty3['default'])(_classNames3, prefixCls + '-arrow-horizontal', arrow === 'horizontal'), (0, _defineProperty3['default'])(_classNames3, prefixCls + '-arrow-vertical', arrow === 'down' || arrow === 'up'), (0, _defineProperty3['default'])(_classNames3, prefixCls + '-arrow-vertical-up', arrow === 'up'), _classNames3));
            var content = _react2['default'].createElement(
                'div',
                (0, _extends3['default'])({}, (0, _omit2['default'])(restProps, ['platform']), { onClick: function onClick(ev) {
                        _this3.onClick(ev);
                    }, className: (0, _classnames2['default'])(wrapCls) }),
                thumb ? _react2['default'].createElement(
                    'div',
                    { className: prefixCls + '-thumb' },
                    typeof thumb === 'string' ? _react2['default'].createElement('img', { src: thumb }) : thumb
                ) : null,
                _react2['default'].createElement(
                    'div',
                    { className: lineCls },
                    children !== undefined && _react2['default'].createElement(
                        'div',
                        { className: prefixCls + '-content' },
                        children
                    ),
                    extra !== undefined && _react2['default'].createElement(
                        'div',
                        { className: prefixCls + '-extra' },
                        extra
                    ),
                    arrow && _react2['default'].createElement('div', { className: arrowCls, 'aria-hidden': 'true' })
                ),
                _react2['default'].createElement('div', { style: coverRippleStyle, className: rippleCls })
            );
            return _react2['default'].createElement(
                _rcTouchable2['default'],
                { disabled: disabled || !onClick, activeStyle: activeStyle, activeClassName: prefixCls + '-item-active' },
                content
            );
        }
    }]);
    return ListItem;
}(_react2['default'].Component);

ListItem.defaultProps = {
    prefixCls: 'am-list',
    align: 'middle',
    error: false,
    multipleLine: false,
    wrap: false,
    platform: 'cross'
};
ListItem.Brief = Brief;
exports['default'] = ListItem;

/***/ }),
/* 172 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _defineProperty2 = __webpack_require__(9);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

exports['default'] = SubMenu;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(10);

var _classnames2 = _interopRequireDefault(_classnames);

var _index = __webpack_require__(14);

var _index2 = _interopRequireDefault(_index);

var _Radio = __webpack_require__(182);

var _Radio2 = _interopRequireDefault(_Radio);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

/* tslint:disable:jsx-no-multiline-js */
function SubMenu(props) {
    var onClick = function onClick(dataItem) {
        if (props.onSel) {
            props.onSel(dataItem);
        }
    };
    var subMenuPrefixCls = props.subMenuPrefixCls,
        radioPrefixCls = props.radioPrefixCls,
        subMenuData = props.subMenuData,
        showSelect = props.showSelect,
        selItem = props.selItem;

    var selected = function selected(dataItem) {
        return showSelect && selItem.length > 0 && selItem[0].value === dataItem.value;
    };
    return _react2['default'].createElement(
        _index2['default'],
        { style: { paddingTop: 0 }, className: subMenuPrefixCls },
        subMenuData.map(function (dataItem, idx) {
            var _classNames;

            return _react2['default'].createElement(
                _index2['default'].Item,
                { className: (0, _classnames2['default'])((_classNames = {}, (0, _defineProperty3['default'])(_classNames, radioPrefixCls + '-item', true), (0, _defineProperty3['default'])(_classNames, subMenuPrefixCls + '-item-selected', selected(dataItem)), (0, _defineProperty3['default'])(_classNames, subMenuPrefixCls + '-item-disabled', dataItem.disabled), _classNames)), key: idx, extra: _react2['default'].createElement(_Radio2['default'], { checked: selected(dataItem), disabled: dataItem.disabled, onChange: function onChange() {
                            return onClick(dataItem);
                        } }) },
                dataItem.label
            );
        })
    );
}
module.exports = exports['default'];

/***/ }),
/* 173 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _defineProperty2 = __webpack_require__(9);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _classCallCheck2 = __webpack_require__(1);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(4);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(2);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(10);

var _classnames2 = _interopRequireDefault(_classnames);

var _objectAssign = __webpack_require__(17);

var _objectAssign2 = _interopRequireDefault(_objectAssign);

var _index = __webpack_require__(14);

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(51);

var _index4 = _interopRequireDefault(_index3);

var _SubMenu = __webpack_require__(172);

var _SubMenu2 = _interopRequireDefault(_SubMenu);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

/* tslint:disable:jsx-no-multiline-js */
var Menu = function (_React$Component) {
    (0, _inherits3['default'])(Menu, _React$Component);

    function Menu(props) {
        (0, _classCallCheck3['default'])(this, Menu);

        var _this = (0, _possibleConstructorReturn3['default'])(this, (Menu.__proto__ || Object.getPrototypeOf(Menu)).call(this, props));

        _this.onClickFirstLevelItem = function (dataItem) {
            var onChange = _this.props.onChange;

            _this.setState({
                firstLevelSelectValue: dataItem.value
            });
            if (dataItem.isLeaf && onChange) {
                onChange([dataItem.value]);
            }
        };
        _this.onClickSubMenuItem = function (dataItem) {
            var _this$props = _this.props,
                level = _this$props.level,
                onChange = _this$props.onChange;

            var value = level === 2 ? [_this.state.firstLevelSelectValue, dataItem.value] : [dataItem.value];
            _this.setState({ value: value });
            setTimeout(function () {
                if (onChange) {
                    onChange(value);
                }
            }, 300);
        };
        _this.state = {
            firstLevelSelectValue: _this.getNewFsv(props),
            value: props.value
        };
        return _this;
    }

    (0, _createClass3['default'])(Menu, [{
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            if (nextProps.value !== this.props.value) {
                this.setState({
                    firstLevelSelectValue: this.getNewFsv(nextProps),
                    value: nextProps.value
                });
            }
        }
    }, {
        key: 'getNewFsv',
        value: function getNewFsv(props) {
            var value = props.value,
                data = props.data;

            var firstValue = '';
            if (value && value.length) {
                firstValue = value[0];
            } else if (!data[0].isLeaf) {
                firstValue = data[0].value;
            }
            return firstValue;
        }
    }, {
        key: 'render',
        value: function render() {
            var _classNames,
                _this2 = this;

            var _props = this.props,
                className = _props.className,
                style = _props.style,
                height = _props.height,
                _props$data = _props.data,
                data = _props$data === undefined ? [] : _props$data,
                prefixCls = _props.prefixCls,
                level = _props.level;
            var _state = this.state,
                firstLevelSelectValue = _state.firstLevelSelectValue,
                value = _state.value;

            var subMenuData = data; // menu only has one level as init
            if (level === 2) {
                var parent = data;
                if (firstLevelSelectValue && firstLevelSelectValue !== '') {
                    parent = data.filter(function (dataItem) {
                        return dataItem.value === firstLevelSelectValue;
                    });
                }
                if (parent[0] && parent[0].children && parent[0].isLeaf !== true) {
                    subMenuData = parent[0].children;
                } else {
                    subMenuData = [];
                }
            }
            var subValue = value && value.length > 0 && value[value.length - 1];
            var parentValue = value && value.length > 1 ? value[0] : null;
            var subSelInitItem = subMenuData.filter(function (dataItem) {
                return dataItem.value === subValue;
            });
            var showSelect = true;
            if (level === 2 && parentValue !== firstLevelSelectValue) {
                showSelect = false;
            }
            var heightStyle = {
                height: Math.round(height || document.documentElement.clientHeight / 2) + 'px'
            };
            return _react2['default'].createElement(
                'div',
                { className: (0, _classnames2['default'])((_classNames = {}, (0, _defineProperty3['default'])(_classNames, prefixCls, true), (0, _defineProperty3['default'])(_classNames, className, !!className), _classNames)), style: (0, _objectAssign2['default'])({}, style, heightStyle) },
                _react2['default'].createElement(
                    _index4['default'],
                    { align: 'top' },
                    level === 2 && _react2['default'].createElement(
                        _index4['default'].Item,
                        { style: heightStyle },
                        _react2['default'].createElement(
                            _index2['default'],
                            { role: 'tablist' },
                            data.map(function (dataItem, index) {
                                return _react2['default'].createElement(
                                    _index2['default'].Item,
                                    { className: dataItem.value === firstLevelSelectValue ? prefixCls + '-selected' : '', onClick: function onClick() {
                                            return _this2.onClickFirstLevelItem(dataItem);
                                        }, key: 'listitem-1-' + index, role: 'tab', 'aria-selected': dataItem.value === firstLevelSelectValue },
                                    dataItem.label
                                );
                            })
                        )
                    ),
                    _react2['default'].createElement(
                        _index4['default'].Item,
                        { style: heightStyle, role: 'tabpanel', 'aria-hidden': 'false' },
                        _react2['default'].createElement(_SubMenu2['default'], { subMenuPrefixCls: this.props.subMenuPrefixCls, radioPrefixCls: this.props.radioPrefixCls, subMenuData: subMenuData, selItem: subSelInitItem, onSel: this.onClickSubMenuItem, showSelect: showSelect })
                    )
                )
            );
        }
    }]);
    return Menu;
}(_react2['default'].Component);

exports['default'] = Menu;

Menu.defaultProps = {
    prefixCls: 'am-menu',
    subMenuPrefixCls: 'am-sub-menu',
    radioPrefixCls: 'am-radio',
    data: [],
    level: 2,
    onChange: function onChange() {}
};
module.exports = exports['default'];

/***/ }),
/* 174 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ModalComponent = undefined;

var _classCallCheck2 = __webpack_require__(1);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(2);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var ModalComponent = exports.ModalComponent = function (_React$Component) {
  (0, _inherits3['default'])(ModalComponent, _React$Component);

  function ModalComponent() {
    (0, _classCallCheck3['default'])(this, ModalComponent);
    return (0, _possibleConstructorReturn3['default'])(this, (ModalComponent.__proto__ || Object.getPrototypeOf(ModalComponent)).apply(this, arguments));
  }

  return ModalComponent;
}(_react2['default'].Component);

/***/ }),
/* 175 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports['default'] = a;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(15);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _Modal = __webpack_require__(52);

var _Modal2 = _interopRequireDefault(_Modal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

/* tslint:enable:no-unused-variable */
function a() {
    var title = arguments.length <= 0 ? undefined : arguments[0];
    var content = arguments.length <= 1 ? undefined : arguments[1];
    var actions = (arguments.length <= 2 ? undefined : arguments[2]) || [{ text: '确定' }];
    if (!title && !content) {
        // console.log('Must specify either an alert title, or message, or both');
        return {
            close: function close() {}
        };
    }
    var prefixCls = 'am-modal';
    var div = document.createElement('div');
    document.body.appendChild(div);
    function close() {
        _reactDom2['default'].unmountComponentAtNode(div);
        if (div && div.parentNode) {
            div.parentNode.removeChild(div);
        }
    }
    var footer = actions.map(function (button) {
        var orginPress = button.onPress || function () {};
        button.onPress = function () {
            var res = orginPress();
            if (res && res.then) {
                res.then(function () {
                    close();
                });
            } else {
                close();
            }
        };
        return button;
    });
    _reactDom2['default'].render(_react2['default'].createElement(
        _Modal2['default'],
        { visible: true, transparent: true, prefixCls: prefixCls, title: title, transitionName: 'am-zoom', closable: false, maskClosable: false, footer: footer, maskTransitionName: 'am-fade' },
        _react2['default'].createElement(
            'div',
            { style: { zoom: 1, overflow: 'hidden' } },
            content
        )
    ), div);
    return {
        close: close
    };
} /* tslint:disable:no-unused-variable */
module.exports = exports['default'];

/***/ }),
/* 176 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports['default'] = a;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(15);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _Modal = __webpack_require__(52);

var _Modal2 = _interopRequireDefault(_Modal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

/* tslint:enable:no-unused-variable */
function a() {
    var actions = (arguments.length <= 0 ? undefined : arguments[0]) || [{ text: '确定' }];
    var prefixCls = 'am-modal';
    var div = document.createElement('div');
    document.body.appendChild(div);
    function close() {
        _reactDom2['default'].unmountComponentAtNode(div);
        if (div && div.parentNode) {
            div.parentNode.removeChild(div);
        }
    }
    var footer = actions.map(function (button) {
        var orginPress = button.onPress || function () {};
        button.onPress = function () {
            var res = orginPress();
            if (res && res.then) {
                res.then(function () {
                    close();
                });
            } else {
                close();
            }
        };
        return button;
    });
    _reactDom2['default'].render(_react2['default'].createElement(_Modal2['default'], { visible: true, operation: true, transparent: true, prefixCls: prefixCls, transitionName: 'am-zoom', closable: false, maskClosable: true, onClose: close, footer: footer, maskTransitionName: 'am-fade', className: 'am-modal-operation' }), div);
    return {
        close: close
    };
} /* tslint:disable:no-unused-variable */
module.exports = exports['default'];

/***/ }),
/* 177 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports['default'] = a;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(15);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _Modal = __webpack_require__(52);

var _Modal2 = _interopRequireDefault(_Modal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

/* tslint:enable:no-unused-variable */
function a() {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
    }

    if (!args || !args[2]) {
        // console.log('Must specify callbackOrActions');
        return {
            close: function close() {}
        };
    }
    var prefixCls = 'am-modal';
    var title = args[0];
    var type = args[3] || 'default';
    var defaultValue = args[4] || '';
    var data = {};
    function onChange(e) {
        var target = e.target;
        var inputType = target.getAttribute('type');
        data[inputType] = target.value;
    }
    var inputDom = void 0;
    var focusFn = function focusFn(input) {
        setTimeout(function () {
            if (input) {
                input.focus();
            }
        }, 500);
    };
    switch (type) {
        case 'login-password':
            inputDom = _react2['default'].createElement(
                'div',
                null,
                _react2['default'].createElement(
                    'div',
                    { className: prefixCls + '-input' },
                    _react2['default'].createElement('input', { type: 'text', defaultValue: defaultValue, ref: function ref(input) {
                            return focusFn(input);
                        }, onChange: onChange })
                ),
                _react2['default'].createElement(
                    'div',
                    { className: prefixCls + '-input' },
                    _react2['default'].createElement('input', { type: 'password', defaultValue: '', onChange: onChange })
                )
            );
            break;
        case 'secure-text':
            inputDom = _react2['default'].createElement(
                'div',
                null,
                _react2['default'].createElement(
                    'div',
                    { className: prefixCls + '-input' },
                    _react2['default'].createElement('input', { type: 'password', defaultValue: '', ref: function ref(input) {
                            return focusFn(input);
                        }, onChange: onChange })
                )
            );
            break;
        case 'plain-text':
        case 'default':
        default:
            inputDom = _react2['default'].createElement(
                'div',
                null,
                _react2['default'].createElement(
                    'div',
                    { className: prefixCls + '-input' },
                    _react2['default'].createElement('input', { type: 'text', defaultValue: defaultValue, ref: function ref(input) {
                            return focusFn(input);
                        }, onChange: onChange })
                )
            );
            break;
    }
    var content = _react2['default'].createElement(
        'div',
        null,
        args[1],
        inputDom
    );
    var div = document.createElement('div');
    document.body.appendChild(div);
    function close() {
        _reactDom2['default'].unmountComponentAtNode(div);
        if (div && div.parentNode) {
            div.parentNode.removeChild(div);
        }
    }
    function getArgs(func) {
        var text = data.text || '';
        var password = data.password || '';
        if (type === 'login-password') {
            return func(text, password);
        } else if (type === 'secure-text') {
            return func(password);
        }
        return func(text);
    }
    var actions = void 0;
    if (typeof args[2] === 'function') {
        actions = [{ text: '取消' }, { text: '确定', onPress: function onPress() {
                getArgs(args[2]);
            } }];
    } else {
        actions = args[2].map(function (item) {
            return {
                text: item.text,
                onPress: function onPress() {
                    if (item.onPress) {
                        return getArgs(item.onPress);
                    }
                }
            };
        });
    }
    var footer = actions.map(function (button) {
        var orginPress = button.onPress || function () {};
        button.onPress = function () {
            var res = orginPress();
            if (res && res.then) {
                res.then(function () {
                    close();
                });
            } else {
                close();
            }
        };
        return button;
    });
    _reactDom2['default'].render(_react2['default'].createElement(
        _Modal2['default'],
        { visible: true, transparent: true, prefixCls: prefixCls, title: title, closable: false, maskClosable: false, transitionName: 'am-zoom', footer: footer, maskTransitionName: 'am-fade' },
        _react2['default'].createElement(
            'div',
            { style: { zoom: 1, overflow: 'hidden' } },
            content
        )
    ), div);
    return {
        close: close
    };
} /* tslint:disable:no-switch-case-fall-through */
/* tslint:disable:no-unused-variable */
module.exports = exports['default'];

/***/ }),
/* 178 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _createReactClass = __webpack_require__(23);

var _createReactClass2 = _interopRequireDefault(_createReactClass);

var _reactDom = __webpack_require__(15);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _objectAssign = __webpack_require__(17);

var _objectAssign2 = _interopRequireDefault(_objectAssign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

/*
 * https://github.com/jasonslyvia/react-marquee
 * remove PC
 * support React Element for text prop
*/
var Marquee = (0, _createReactClass2['default'])({
    displayName: 'Marquee',
    getDefaultProps: function getDefaultProps() {
        return {
            text: '',
            loop: false,
            leading: 500,
            trailing: 800,
            fps: 40,
            className: ''
        };
    },
    getInitialState: function getInitialState() {
        return {
            animatedWidth: 0,
            overflowWidth: 0
        };
    },
    componentDidMount: function componentDidMount() {
        this._measureText();
        this._startAnimation();
    },
    componentDidUpdate: function componentDidUpdate() {
        this._measureText();
        if (!this._marqueeTimer) {
            this._startAnimation();
        }
    },
    componentWillUnmount: function componentWillUnmount() {
        clearTimeout(this._marqueeTimer);
    },
    render: function render() {
        var _props = this.props,
            prefixCls = _props.prefixCls,
            className = _props.className,
            text = _props.text;

        var style = (0, _objectAssign2['default'])({
            position: 'relative',
            right: this.state.animatedWidth,
            whiteSpace: 'nowrap',
            display: 'inline-block'
        }, this.props.style);
        return _react2['default'].createElement(
            'div',
            { className: prefixCls + '-marquee-wrap ' + className, style: { overflow: 'hidden' }, role: 'marquee' },
            _react2['default'].createElement(
                'div',
                { ref: 'text', className: prefixCls + '-marquee', style: style },
                text,
                ' '
            )
        );
    },
    _startAnimation: function _startAnimation() {
        var _this = this;

        clearTimeout(this._marqueeTimer);
        var TIMEOUT = 1 / this.props.fps * 1000;
        var isLeading = this.state.animatedWidth === 0;
        var timeout = isLeading ? this.props.leading : TIMEOUT;
        var animate = function animate() {
            var overflowWidth = _this.state.overflowWidth;

            var animatedWidth = _this.state.animatedWidth + 1;
            var isRoundOver = animatedWidth > overflowWidth;
            if (isRoundOver) {
                if (_this.props.loop) {
                    animatedWidth = 0;
                } else {
                    return;
                }
            }
            if (isRoundOver && _this.props.trailing) {
                _this._marqueeTimer = setTimeout(function () {
                    _this.setState({
                        animatedWidth: animatedWidth
                    });
                    _this._marqueeTimer = setTimeout(animate, TIMEOUT);
                }, _this.props.trailing);
            } else {
                _this.setState({
                    animatedWidth: animatedWidth
                });
                _this._marqueeTimer = setTimeout(animate, TIMEOUT);
            }
        };
        if (this.state.overflowWidth !== 0) {
            this._marqueeTimer = setTimeout(animate, timeout);
        }
    },
    _measureText: function _measureText() {
        var container = _reactDom2['default'].findDOMNode(this);
        var node = _reactDom2['default'].findDOMNode(this.refs.text);
        if (container && node) {
            var containerWidth = container.offsetWidth;
            var textWidth = node.offsetWidth;
            var overflowWidth = textWidth - containerWidth;
            if (overflowWidth !== this.state.overflowWidth) {
                this.setState({
                    overflowWidth: overflowWidth
                });
            }
        }
    }
});
exports['default'] = Marquee;
module.exports = exports['default'];

/***/ }),
/* 179 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = __webpack_require__(5);

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = __webpack_require__(9);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _classCallCheck2 = __webpack_require__(1);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(4);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(2);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _objectAssign = __webpack_require__(17);

var _objectAssign2 = _interopRequireDefault(_objectAssign);

var _classnames = __webpack_require__(10);

var _classnames2 = _interopRequireDefault(_classnames);

var _icon = __webpack_require__(18);

var _icon2 = _interopRequireDefault(_icon);

var _Marquee = __webpack_require__(178);

var _Marquee2 = _interopRequireDefault(_Marquee);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var __rest = undefined && undefined.__rest || function (s, e) {
    var t = {};
    for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    }if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
    }return t;
};

var NoticeBar = function (_React$Component) {
    (0, _inherits3['default'])(NoticeBar, _React$Component);

    function NoticeBar(props) {
        (0, _classCallCheck3['default'])(this, NoticeBar);

        var _this = (0, _possibleConstructorReturn3['default'])(this, (NoticeBar.__proto__ || Object.getPrototypeOf(NoticeBar)).call(this, props));

        _this.onClick = function () {
            var _this$props = _this.props,
                mode = _this$props.mode,
                onClick = _this$props.onClick;

            if (onClick) {
                onClick();
            }
            if (mode === 'closable') {
                _this.setState({
                    show: false
                });
            }
        };
        _this.state = {
            show: true
        };
        return _this;
    }

    (0, _createClass3['default'])(NoticeBar, [{
        key: 'render',
        value: function render() {
            var _classNames;

            var _a = this.props,
                mode = _a.mode,
                icon = _a.icon,
                onClick = _a.onClick,
                children = _a.children,
                className = _a.className,
                prefixCls = _a.prefixCls,
                marqueeProps = _a.marqueeProps,
                restProps = __rest(_a, ["mode", "icon", "onClick", "children", "className", "prefixCls", "marqueeProps"]);
            var extraProps = {};
            var operationDom = null;
            if (mode === 'closable') {
                operationDom = _react2['default'].createElement(
                    'div',
                    { className: prefixCls + '-operation', onClick: this.onClick, role: 'button', 'aria-label': 'close' },
                    _react2['default'].createElement(_icon2['default'], { type: 'cross', size: 'md' })
                );
            } else {
                if (mode === 'link') {
                    operationDom = _react2['default'].createElement(
                        'div',
                        { className: prefixCls + '-operation', role: 'button', 'aria-label': 'go to detail' },
                        _react2['default'].createElement(_icon2['default'], { type: 'right', size: 'md' })
                    );
                }
                extraProps.onClick = onClick;
            }
            var wrapCls = (0, _classnames2['default'])((_classNames = {}, (0, _defineProperty3['default'])(_classNames, prefixCls, true), (0, _defineProperty3['default'])(_classNames, className, !!className), _classNames));
            var marquee = (0, _objectAssign2['default'])({}, {
                loop: false,
                leading: 500,
                trailing: 800,
                fps: 40,
                style: {}
            }, marqueeProps);
            return this.state.show ? _react2['default'].createElement(
                'div',
                (0, _extends3['default'])({ className: wrapCls }, restProps, extraProps, { role: 'alert' }),
                icon ? _react2['default'].createElement(
                    'div',
                    { className: prefixCls + '-icon', 'aria-hidden': 'true' },
                    ' ',
                    icon,
                    ' '
                ) : null,
                _react2['default'].createElement(
                    'div',
                    { className: prefixCls + '-content' },
                    _react2['default'].createElement(_Marquee2['default'], (0, _extends3['default'])({ prefixCls: prefixCls, text: children }, marquee))
                ),
                operationDom
            ) : null;
        }
    }]);
    return NoticeBar;
}(_react2['default'].Component);

exports['default'] = NoticeBar;

NoticeBar.defaultProps = {
    prefixCls: 'am-notice-bar',
    mode: '',
    icon: _react2['default'].createElement(_icon2['default'], { type: __webpack_require__(425), size: 'xxs' }),
    onClick: function onClick() {}
};
module.exports = exports['default'];

/***/ }),
/* 180 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports['default'] = {
    WrapComponent: 'div',
    transitionName: 'am-slide-up',
    maskTransitionName: 'am-fade'
};
module.exports = exports['default'];

/***/ }),
/* 181 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = {};
module.exports = exports["default"];

/***/ }),
/* 182 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = __webpack_require__(5);

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = __webpack_require__(9);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _classCallCheck2 = __webpack_require__(1);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(4);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(2);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _rcCheckbox = __webpack_require__(124);

var _rcCheckbox2 = _interopRequireDefault(_rcCheckbox);

var _omit = __webpack_require__(29);

var _omit2 = _interopRequireDefault(_omit);

var _classnames = __webpack_require__(10);

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var Radio = function (_React$Component) {
    (0, _inherits3['default'])(Radio, _React$Component);

    function Radio() {
        (0, _classCallCheck3['default'])(this, Radio);
        return (0, _possibleConstructorReturn3['default'])(this, (Radio.__proto__ || Object.getPrototypeOf(Radio)).apply(this, arguments));
    }

    (0, _createClass3['default'])(Radio, [{
        key: 'render',
        value: function render() {
            var _classNames;

            var _props = this.props,
                prefixCls = _props.prefixCls,
                className = _props.className,
                style = _props.style,
                children = _props.children;

            var wrapCls = (0, _classnames2['default'])((_classNames = {}, (0, _defineProperty3['default'])(_classNames, className, !!className), (0, _defineProperty3['default'])(_classNames, prefixCls + '-wrapper', true), _classNames));
            var mark = _react2['default'].createElement(
                'label',
                { className: wrapCls, style: style },
                _react2['default'].createElement(_rcCheckbox2['default'], (0, _extends3['default'])({}, (0, _omit2['default'])(this.props, ['className', 'style']), { type: 'radio' })),
                children
            );
            if (this.props.wrapLabel) {
                return mark;
            }
            return _react2['default'].createElement(_rcCheckbox2['default'], (0, _extends3['default'])({}, this.props, { type: 'radio' }));
        }
    }]);
    return Radio;
}(_react2['default'].Component);

exports['default'] = Radio;

Radio.defaultProps = {
    prefixCls: 'am-radio',
    wrapLabel: true
};
module.exports = exports['default'];

/***/ }),
/* 183 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
function noop() {}
var defaultProps = exports.defaultProps = {
    prefixCls: 'am-search',
    placeholder: '',
    onSubmit: noop,
    onChange: noop,
    onFocus: noop,
    onBlur: noop,
    onClear: noop,
    showCancelButton: false,
    cancelText: '取消',
    disabled: false
};

/***/ }),
/* 184 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = __webpack_require__(5);

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = __webpack_require__(1);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(4);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(2);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _rcSteps = __webpack_require__(369);

var _rcSteps2 = _interopRequireDefault(_rcSteps);

var _index = __webpack_require__(18);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var Steps = function (_React$Component) {
    (0, _inherits3['default'])(Steps, _React$Component);

    function Steps() {
        (0, _classCallCheck3['default'])(this, Steps);
        return (0, _possibleConstructorReturn3['default'])(this, (Steps.__proto__ || Object.getPrototypeOf(Steps)).apply(this, arguments));
    }

    (0, _createClass3['default'])(Steps, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.componentDidUpdate();
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate() {
            if (this.props.direction !== 'horizontal') {
                return;
            }
            // set tail's left position based on main's width for each step dynamically.
            this.stepRefs.forEach(function (s) {
                if (s.refs.tail) {
                    s.refs.tail.style.left = s.refs.main.offsetWidth / 2 + 'px';
                }
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            this.stepRefs = [];
            var _props = this.props,
                children = _props.children,
                status = _props.status;

            var current = this.props.current;
            // flattern the array at first https://github.com/ant-design/ant-design-mobile/issues/934
            var newChildren = _react2['default'].Children.map(children, function (item) {
                return item;
            });
            newChildren = _react2['default'].Children.map(newChildren, function (item, index) {
                var className = item.props.className;
                if (index < newChildren.length - 1 && newChildren[index + 1].props.status === 'error') {
                    className = className ? className + ' error-tail' : 'error-tail';
                }
                var icon = item.props.icon;
                if (!icon) {
                    if (index < current) {
                        // 对应 state: finish
                        icon = 'check-circle-o';
                    } else if (index > current) {
                        // 对应 state: wait
                        icon = 'ellipsis';
                        className = className ? className + ' ellipsis-item' : 'ellipsis-item';
                    }
                    if (status === 'error' && index === current || item.props.status === 'error') {
                        icon = 'cross-circle-o';
                    }
                }
                icon = typeof icon === 'string' ? _react2['default'].createElement(_index2['default'], { type: icon }) : icon;
                return _react2['default'].cloneElement(item, { icon: icon, className: className, ref: function ref(c) {
                        return _this2.stepRefs[index] = c;
                    } });
            });
            return _react2['default'].createElement(
                _rcSteps2['default'],
                (0, _extends3['default'])({ ref: 'rcSteps' }, this.props),
                newChildren
            );
        }
    }]);
    return Steps;
}(_react2['default'].Component);

exports['default'] = Steps;

Steps.Step = _rcSteps2['default'].Step;
Steps.defaultProps = {
    prefixCls: 'am-steps',
    iconPrefix: 'ant',
    labelPlacement: 'vertical',
    direction: 'vertical',
    current: 0
};
module.exports = exports['default'];

/***/ }),
/* 185 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = __webpack_require__(5);

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = __webpack_require__(9);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _classCallCheck2 = __webpack_require__(1);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(4);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(2);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(10);

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var __rest = undefined && undefined.__rest || function (s, e) {
    var t = {};
    for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    }if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
    }return t;
};

var Switch = function (_React$Component) {
    (0, _inherits3['default'])(Switch, _React$Component);

    function Switch() {
        (0, _classCallCheck3['default'])(this, Switch);

        var _this = (0, _possibleConstructorReturn3['default'])(this, (Switch.__proto__ || Object.getPrototypeOf(Switch)).apply(this, arguments));

        _this.onChange = function (e) {
            var checked = e.target.checked;
            if (_this.props.onChange) {
                _this.props.onChange(checked);
            }
        };
        _this.onClick = function (e) {
            if (_this.props.onClick) {
                var val = void 0;
                if (e && e.target && e.target.checked !== undefined) {
                    val = e.target.checked;
                } else {
                    val = _this.props.checked;
                }
                _this.props.onClick(val);
            }
        };
        return _this;
    }

    (0, _createClass3['default'])(Switch, [{
        key: 'render',
        value: function render() {
            var _classNames, _classNames2;

            var _a = this.props,
                prefixCls = _a.prefixCls,
                style = _a.style,
                name = _a.name,
                checked = _a.checked,
                disabled = _a.disabled,
                className = _a.className,
                platform = _a.platform,
                restProps = __rest(_a, ["prefixCls", "style", "name", "checked", "disabled", "className", "platform"]);
            var isAndroid = platform === 'android' || platform === 'cross' && typeof navigator !== 'undefined' && !!navigator.userAgent.match(/Android/i);
            var wrapCls = (0, _classnames2['default'])((_classNames = {}, (0, _defineProperty3['default'])(_classNames, '' + prefixCls, true), (0, _defineProperty3['default'])(_classNames, className, className), (0, _defineProperty3['default'])(_classNames, prefixCls + '-android', isAndroid), _classNames));
            var fackInputCls = (0, _classnames2['default'])((_classNames2 = {}, (0, _defineProperty3['default'])(_classNames2, 'checkbox', true), (0, _defineProperty3['default'])(_classNames2, 'checkbox-disabled', disabled), _classNames2));
            var globalProps = Object.keys(restProps).reduce(function (prev, key) {
                if (key.substr(0, 5) === 'aria-' || key.substr(0, 5) === 'data-' || key === 'role') {
                    prev[key] = restProps[key];
                }
                return prev;
            }, {});
            return _react2['default'].createElement(
                'label',
                { className: wrapCls, style: style },
                _react2['default'].createElement('input', (0, _extends3['default'])({ type: 'checkbox', name: name, className: prefixCls + '-checkbox', disabled: disabled, checked: checked, onChange: this.onChange }, !disabled ? { onClick: this.onClick } : {}, globalProps)),
                _react2['default'].createElement('div', (0, _extends3['default'])({ className: fackInputCls }, disabled ? { onClick: this.onClick } : {}))
            );
        }
    }]);
    return Switch;
}(_react2['default'].Component);

exports['default'] = Switch;

Switch.defaultProps = {
    prefixCls: 'am-switch',
    name: '',
    checked: false,
    disabled: false,
    onChange: function onChange() {},

    platform: 'cross',
    onClick: function onClick() {}
};
module.exports = exports['default'];

/***/ }),
/* 186 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _classCallCheck2 = __webpack_require__(1);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(4);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(2);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _badge = __webpack_require__(99);

var _badge2 = _interopRequireDefault(_badge);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var Tab = function (_React$Component) {
    (0, _inherits3['default'])(Tab, _React$Component);

    function Tab() {
        (0, _classCallCheck3['default'])(this, Tab);

        var _this = (0, _possibleConstructorReturn3['default'])(this, (Tab.__proto__ || Object.getPrototypeOf(Tab)).apply(this, arguments));

        _this.renderIcon = function () {
            var _this$props = _this.props,
                dot = _this$props.dot,
                badge = _this$props.badge,
                selected = _this$props.selected,
                selectedIcon = _this$props.selectedIcon,
                icon = _this$props.icon,
                title = _this$props.title,
                prefixCls = _this$props.prefixCls;

            var iconRes = selected ? selectedIcon : icon;
            var iconDom = _react2['default'].isValidElement(iconRes) ? iconRes : _react2['default'].createElement('img', { className: prefixCls + '-image', src: iconRes.uri || iconRes, alt: title });
            if (badge) {
                return _react2['default'].createElement(
                    _badge2['default'],
                    { text: badge, className: prefixCls + '-badge tab-badge' },
                    ' ',
                    iconDom,
                    ' '
                );
            }
            if (dot) {
                return _react2['default'].createElement(
                    _badge2['default'],
                    { dot: true, className: prefixCls + '-badge tab-dot' },
                    iconDom
                );
            }
            return iconDom;
        };
        return _this;
    }

    (0, _createClass3['default'])(Tab, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                title = _props.title,
                prefixCls = _props.prefixCls,
                selected = _props.selected,
                unselectedTintColor = _props.unselectedTintColor,
                tintColor = _props.tintColor;

            var iconColor = selected ? tintColor : unselectedTintColor;
            return _react2['default'].createElement(
                'div',
                this.props.dataAttrs,
                _react2['default'].createElement(
                    'div',
                    { className: prefixCls + '-icon', style: { color: iconColor } },
                    this.renderIcon()
                ),
                _react2['default'].createElement(
                    'p',
                    { className: prefixCls + '-title', style: { color: selected ? tintColor : unselectedTintColor } },
                    title
                )
            );
        }
    }]);
    return Tab;
}(_react2['default'].Component);

exports['default'] = Tab;
module.exports = exports['default'];

/***/ }),
/* 187 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Item = undefined;

var _classCallCheck2 = __webpack_require__(1);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(4);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(2);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _rcTabs = __webpack_require__(103);

var _rcTabs2 = _interopRequireDefault(_rcTabs);

var _warning = __webpack_require__(138);

var _warning2 = _interopRequireDefault(_warning);

var _Tab = __webpack_require__(186);

var _Tab2 = _interopRequireDefault(_Tab);

var _TabContent = __webpack_require__(72);

var _TabContent2 = _interopRequireDefault(_TabContent);

var _TabBar = __webpack_require__(201);

var _TabBar2 = _interopRequireDefault(_TabBar);

var _getDataAttr = __webpack_require__(50);

var _getDataAttr2 = _interopRequireDefault(_getDataAttr);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var Item = exports.Item = function (_React$Component) {
    (0, _inherits3['default'])(Item, _React$Component);

    function Item() {
        (0, _classCallCheck3['default'])(this, Item);
        return (0, _possibleConstructorReturn3['default'])(this, (Item.__proto__ || Object.getPrototypeOf(Item)).apply(this, arguments));
    }

    (0, _createClass3['default'])(Item, [{
        key: 'render',
        value: function render() {
            return null;
        }
    }]);
    return Item;
}(_react2['default'].Component);

var AntTabBar = function (_React$Component2) {
    (0, _inherits3['default'])(AntTabBar, _React$Component2);

    function AntTabBar() {
        (0, _classCallCheck3['default'])(this, AntTabBar);

        var _this2 = (0, _possibleConstructorReturn3['default'])(this, (AntTabBar.__proto__ || Object.getPrototypeOf(AntTabBar)).apply(this, arguments));

        _this2.onChange = function (key) {
            _react2['default'].Children.forEach(_this2.props.children, function (c) {
                if (c.key === key && c.props.onPress) {
                    c.props.onPress();
                }
            });
        };
        _this2.renderTabBar = function () {
            var _this2$props = _this2.props,
                barTintColor = _this2$props.barTintColor,
                hidden = _this2$props.hidden,
                prefixCls = _this2$props.prefixCls;

            var barCls = hidden ? prefixCls + '-bar-hidden' : '';
            return _react2['default'].createElement(_TabBar2['default'], { className: barCls, style: { backgroundColor: barTintColor } });
        };
        _this2.renderTabContent = function () {
            return _react2['default'].createElement(_TabContent2['default'], { animated: false });
        };
        return _this2;
    }

    (0, _createClass3['default'])(AntTabBar, [{
        key: 'render',
        value: function render() {
            var _this3 = this;

            var activeKey = void 0;
            var children = [];
            var _allKeys = [];
            _react2['default'].Children.forEach(this.props.children, function (c) {
                var hasKey = !!c.key;
                var isUnique = _allKeys.indexOf(c.key) === -1;
                (0, _warning2['default'])(hasKey && isUnique, 'TabBar.Item must have a unique key!');
                _allKeys.push(c.key);
                if (c.props.selected) {
                    activeKey = c.key;
                }
                children.push(c);
            });
            var _props = this.props,
                tintColor = _props.tintColor,
                unselectedTintColor = _props.unselectedTintColor;

            var panels = children.map(function (c) {
                var cProps = c.props;
                var tab = _react2['default'].createElement(_Tab2['default'], { prefixCls: _this3.props.prefixCls + '-tab', badge: cProps.badge, dot: cProps.dot, selected: cProps.selected, icon: cProps.icon, selectedIcon: cProps.selectedIcon, title: cProps.title, tintColor: tintColor, unselectedTintColor: unselectedTintColor, dataAttrs: (0, _getDataAttr2['default'])(cProps) });
                return _react2['default'].createElement(
                    _rcTabs.TabPane,
                    { placeholder: _this3.props.placeholder, tab: tab, key: c.key },
                    cProps.children
                );
            });
            return _react2['default'].createElement(
                _rcTabs2['default'],
                { renderTabBar: this.renderTabBar, renderTabContent: this.renderTabContent, tabBarPosition: 'bottom', prefixCls: this.props.prefixCls, activeKey: activeKey, onChange: this.onChange },
                panels
            );
        }
    }]);
    return AntTabBar;
}(_react2['default'].Component);

AntTabBar.defaultProps = {
    prefixCls: 'am-tab-bar',
    barTintColor: 'white',
    tintColor: '#108ee9',
    hidden: false,
    unselectedTintColor: '#888',
    placeholder: '正在加载'
};
AntTabBar.Item = Item;
exports['default'] = AntTabBar;

/***/ }),
/* 188 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = __webpack_require__(5);

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = __webpack_require__(1);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(4);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(2);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _rcTabs = __webpack_require__(103);

var _rcTabs2 = _interopRequireDefault(_rcTabs);

var _SwipeableTabContent = __webpack_require__(200);

var _SwipeableTabContent2 = _interopRequireDefault(_SwipeableTabContent);

var _TabContent = __webpack_require__(72);

var _TabContent2 = _interopRequireDefault(_TabContent);

var _InkTabBar = __webpack_require__(197);

var _InkTabBar2 = _interopRequireDefault(_InkTabBar);

var _SwipeableInkTabBar = __webpack_require__(198);

var _SwipeableInkTabBar2 = _interopRequireDefault(_SwipeableInkTabBar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var Tabs = function (_React$Component) {
    (0, _inherits3['default'])(Tabs, _React$Component);

    function Tabs() {
        (0, _classCallCheck3['default'])(this, Tabs);

        var _this = (0, _possibleConstructorReturn3['default'])(this, (Tabs.__proto__ || Object.getPrototypeOf(Tabs)).apply(this, arguments));

        _this.renderTabBar = function () {
            var _this$props = _this.props,
                children = _this$props.children,
                animated = _this$props.animated,
                speed = _this$props.speed,
                pageSize = _this$props.pageSize,
                tabBarhammerOptions = _this$props.tabBarhammerOptions,
                onTabClick = _this$props.onTabClick;

            if (children.length > pageSize) {
                return _react2['default'].createElement(_SwipeableInkTabBar2['default'], { onTabClick: onTabClick, speed: speed, pageSize: pageSize, hammerOptions: tabBarhammerOptions });
            }
            return _react2['default'].createElement(_InkTabBar2['default'], { inkBarAnimated: animated, onTabClick: onTabClick });
        };
        _this.renderTabContent = function () {
            var _this$props2 = _this.props,
                animated = _this$props2.animated,
                swipeable = _this$props2.swipeable,
                hammerOptions = _this$props2.hammerOptions;

            return swipeable ? _react2['default'].createElement(_SwipeableTabContent2['default'], { animated: animated, hammerOptions: hammerOptions }) : _react2['default'].createElement(_TabContent2['default'], { animated: animated });
        };
        return _this;
    }

    (0, _createClass3['default'])(Tabs, [{
        key: 'render',
        value: function render() {
            return _react2['default'].createElement(_rcTabs2['default'], (0, _extends3['default'])({ renderTabBar: this.renderTabBar, renderTabContent: this.renderTabContent }, this.props));
        }
    }]);
    return Tabs;
}(_react2['default'].Component);

exports['default'] = Tabs;

Tabs.TabPane = _rcTabs.TabPane;
Tabs.defaultProps = {
    prefixCls: 'am-tabs',
    animated: true,
    swipeable: true,
    tabBarPosition: 'top',
    hammerOptions: {},
    tabBarhammerOptions: {},
    pageSize: 5,
    speed: 10,
    onChange: function onChange() {},
    onTabClick: function onTabClick() {}
};
module.exports = exports['default'];

/***/ }),
/* 189 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = __webpack_require__(5);

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = __webpack_require__(9);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _classCallCheck2 = __webpack_require__(1);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(4);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(2);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(10);

var _classnames2 = _interopRequireDefault(_classnames);

var _icon = __webpack_require__(18);

var _icon2 = _interopRequireDefault(_icon);

var _getDataAttr = __webpack_require__(50);

var _getDataAttr2 = _interopRequireDefault(_getDataAttr);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var Tag = function (_React$Component) {
    (0, _inherits3['default'])(Tag, _React$Component);

    function Tag(props) {
        (0, _classCallCheck3['default'])(this, Tag);

        var _this = (0, _possibleConstructorReturn3['default'])(this, (Tag.__proto__ || Object.getPrototypeOf(Tag)).call(this, props));

        _this.onClick = function () {
            var _this$props = _this.props,
                disabled = _this$props.disabled,
                onChange = _this$props.onChange;

            if (disabled) {
                return;
            }
            var isSelect = _this.state.selected;
            _this.setState({
                selected: !isSelect
            }, function () {
                if (onChange) {
                    onChange(!isSelect);
                }
            });
        };
        _this.onTagClose = function () {
            if (_this.props.onClose) {
                _this.props.onClose();
            }
            _this.setState({
                closed: true
            }, _this.props.afterClose);
        };
        _this.state = {
            selected: props.selected,
            closed: false
        };
        return _this;
    }

    (0, _createClass3['default'])(Tag, [{
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            if (this.props.selected !== nextProps.selected) {
                this.setState({
                    selected: nextProps.selected
                });
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _classNames;

            var _props = this.props,
                children = _props.children,
                className = _props.className,
                prefixCls = _props.prefixCls,
                disabled = _props.disabled,
                closable = _props.closable,
                small = _props.small,
                style = _props.style;

            var wrapCls = (0, _classnames2['default'])((_classNames = {}, (0, _defineProperty3['default'])(_classNames, className, !!className), (0, _defineProperty3['default'])(_classNames, '' + prefixCls, true), (0, _defineProperty3['default'])(_classNames, prefixCls + '-normal', !disabled && (!this.state.selected || small || closable)), (0, _defineProperty3['default'])(_classNames, prefixCls + '-small', small), (0, _defineProperty3['default'])(_classNames, prefixCls + '-active', this.state.selected && !disabled && !small && !closable), (0, _defineProperty3['default'])(_classNames, prefixCls + '-disabled', disabled), (0, _defineProperty3['default'])(_classNames, prefixCls + '-closable', closable), _classNames));
            var closableDom = closable && !disabled && !small ? _react2['default'].createElement(
                'div',
                { className: prefixCls + '-close', role: 'button', onClick: this.onTagClose, 'aria-label': 'remove tag' },
                _react2['default'].createElement(_icon2['default'], { type: 'cross-circle', size: 'xs', 'aria-hidden': 'true' })
            ) : null;
            return !this.state.closed ? _react2['default'].createElement(
                'div',
                (0, _extends3['default'])({}, (0, _getDataAttr2['default'])(this.props), { className: wrapCls, onClick: this.onClick, style: style }),
                _react2['default'].createElement(
                    'div',
                    { className: prefixCls + '-text' },
                    children
                ),
                closableDom
            ) : null;
        }
    }]);
    return Tag;
}(_react2['default'].Component);

exports['default'] = Tag;

Tag.defaultProps = {
    prefixCls: 'am-tag',
    disabled: false,
    selected: false,
    closable: false,
    small: false,
    onChange: function onChange() {},
    onClose: function onClose() {},
    afterClose: function afterClose() {}
};
module.exports = exports['default'];

/***/ }),
/* 190 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_classnames__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_prop_types__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_prop_types__);









var Notice = function (_Component) {
  __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default()(Notice, _Component);

  function Notice() {
    var _ref;

    var _temp, _this, _ret;

    __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default()(this, Notice);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default()(this, (_ref = Notice.__proto__ || Object.getPrototypeOf(Notice)).call.apply(_ref, [this].concat(args))), _this), _this.clearCloseTimer = function () {
      if (_this.closeTimer) {
        clearTimeout(_this.closeTimer);
        _this.closeTimer = null;
      }
    }, _this.close = function () {
      _this.clearCloseTimer();
      _this.props.onClose();
    }, _temp), __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default()(_this, _ret);
  }

  __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default()(Notice, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      if (this.props.duration) {
        this.closeTimer = setTimeout(function () {
          _this2.close();
        }, this.props.duration * 1000);
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.clearCloseTimer();
    }
  }, {
    key: 'render',
    value: function render() {
      var _className;

      var props = this.props;
      var componentClass = props.prefixCls + '-notice';
      var className = (_className = {}, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_className, '' + componentClass, 1), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_className, componentClass + '-closable', props.closable), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_className, props.className, !!props.className), _className);
      return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
        'div',
        { className: __WEBPACK_IMPORTED_MODULE_6_classnames___default()(className), style: props.style },
        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
          'div',
          { className: componentClass + '-content' },
          props.children
        ),
        props.closable ? __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
          'a',
          { tabIndex: '0', onClick: this.close, className: componentClass + '-close' },
          __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement('span', { className: componentClass + '-close-x' })
        ) : null
      );
    }
  }]);

  return Notice;
}(__WEBPACK_IMPORTED_MODULE_5_react__["Component"]);

Notice.propTypes = {
  duration: __WEBPACK_IMPORTED_MODULE_7_prop_types___default.a.number,
  onClose: __WEBPACK_IMPORTED_MODULE_7_prop_types___default.a.func,
  children: __WEBPACK_IMPORTED_MODULE_7_prop_types___default.a.any
};
Notice.defaultProps = {
  onEnd: function onEnd() {},
  onClose: function onClose() {},

  duration: 1.5,
  style: {
    right: '50%'
  }
};
/* harmony default export */ __webpack_exports__["a"] = (Notice);

/***/ }),
/* 191 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_objectWithoutProperties__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_objectWithoutProperties___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_objectWithoutProperties__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_defineProperty__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_defineProperty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_defineProperty__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_extends__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_prop_types__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_react_dom__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rc_animate__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rc_animate___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_rc_animate__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_rc_util_es_createChainedFunction__ = __webpack_require__(374);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_classnames__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__Notice__ = __webpack_require__(190);















var seed = 0;
var now = Date.now();

function getUuid() {
  return 'rcNotification_' + now + '_' + seed++;
}

var Notification = function (_Component) {
  __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits___default()(Notification, _Component);

  function Notification() {
    var _ref;

    var _temp, _this, _ret;

    __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck___default()(this, Notification);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn___default()(this, (_ref = Notification.__proto__ || Object.getPrototypeOf(Notification)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      notices: []
    }, _this.add = function (notice) {
      var key = notice.key = notice.key || getUuid();
      _this.setState(function (previousState) {
        var notices = previousState.notices;
        if (!notices.filter(function (v) {
          return v.key === key;
        }).length) {
          return {
            notices: notices.concat(notice)
          };
        }
      });
    }, _this.remove = function (key) {
      _this.setState(function (previousState) {
        return {
          notices: previousState.notices.filter(function (notice) {
            return notice.key !== key;
          })
        };
      });
    }, _temp), __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn___default()(_this, _ret);
  }

  __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass___default()(Notification, [{
    key: 'getTransitionName',
    value: function getTransitionName() {
      var props = this.props;
      var transitionName = props.transitionName;
      if (!transitionName && props.animation) {
        transitionName = props.prefixCls + '-' + props.animation;
      }
      return transitionName;
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this,
          _className;

      var props = this.props;
      var noticeNodes = this.state.notices.map(function (notice) {
        var onClose = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_11_rc_util_es_createChainedFunction__["a" /* default */])(_this2.remove.bind(_this2, notice.key), notice.onClose);
        return __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_13__Notice__["a" /* default */],
          __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_extends___default()({
            prefixCls: props.prefixCls
          }, notice, {
            onClose: onClose
          }),
          notice.content
        );
      });
      var className = (_className = {}, __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_defineProperty___default()(_className, props.prefixCls, 1), __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_defineProperty___default()(_className, props.className, !!props.className), _className);
      var animateProps = {};
      if (this.state.notices.length <= 1) {
        animateProps.component = '';
      }
      return __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
        'div',
        { className: __WEBPACK_IMPORTED_MODULE_12_classnames___default()(className), style: props.style },
        __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_10_rc_animate___default.a,
          __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_extends___default()({ transitionName: this.getTransitionName() }, animateProps),
          noticeNodes
        )
      );
    }
  }]);

  return Notification;
}(__WEBPACK_IMPORTED_MODULE_7_react__["Component"]);

Notification.propTypes = {
  prefixCls: __WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.string,
  transitionName: __WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.string,
  animation: __WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.string, __WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.object]),
  style: __WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.object
};
Notification.defaultProps = {
  prefixCls: 'rc-notification',
  animation: 'fade',
  style: {
    top: 65,
    left: '50%'
  }
};


Notification.newInstance = function newNotificationInstance(properties) {
  var _ref2 = properties || {},
      getContainer = _ref2.getContainer,
      props = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_objectWithoutProperties___default()(_ref2, ['getContainer']);

  var div = void 0;
  if (getContainer) {
    div = getContainer();
  } else {
    div = document.createElement('div');
    document.body.appendChild(div);
  }
  var notification = __WEBPACK_IMPORTED_MODULE_9_react_dom___default.a.render(__WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(Notification, props), div);
  return {
    notice: function notice(noticeProps) {
      notification.add(noticeProps);
    },
    removeNotice: function removeNotice(key) {
      notification.remove(key);
    },

    component: notification,
    destroy: function destroy() {
      __WEBPACK_IMPORTED_MODULE_9_react_dom___default.a.unmountComponentAtNode(div);
      document.body.removeChild(div);
    }
  };
};

/* harmony default export */ __webpack_exports__["a"] = (Notification);

/***/ }),
/* 192 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Notification__ = __webpack_require__(191);

/* harmony default export */ __webpack_exports__["default"] = (__WEBPACK_IMPORTED_MODULE_0__Notification__["a" /* default */]);

/***/ }),
/* 193 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  /**
   * LEFT
   */
  LEFT: 37, // also NUM_WEST
  /**
   * UP
   */
  UP: 38, // also NUM_NORTH
  /**
   * RIGHT
   */
  RIGHT: 39, // also NUM_EAST
  /**
   * DOWN
   */
  DOWN: 40 // also NUM_SOUTH
});

/***/ }),
/* 194 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_defineProperty__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_defineProperty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_defineProperty__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_create_react_class__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_create_react_class___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_create_react_class__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_prop_types__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_classnames__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__utils__ = __webpack_require__(196);








var TabContent = __WEBPACK_IMPORTED_MODULE_3_create_react_class___default()({
  displayName: 'TabContent',
  propTypes: {
    animated: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.bool,
    animatedWithMargin: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.bool,
    prefixCls: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.string,
    children: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.any,
    activeKey: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.string,
    style: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.any,
    tabBarPosition: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.string
  },
  getDefaultProps: function getDefaultProps() {
    return {
      animated: true
    };
  },
  getTabPanes: function getTabPanes() {
    var props = this.props;
    var activeKey = props.activeKey;
    var children = props.children;
    var newChildren = [];

    __WEBPACK_IMPORTED_MODULE_2_react___default.a.Children.forEach(children, function (child) {
      if (!child) {
        return;
      }
      var key = child.key;
      var active = activeKey === key;
      newChildren.push(__WEBPACK_IMPORTED_MODULE_2_react___default.a.cloneElement(child, {
        active: active,
        destroyInactiveTabPane: props.destroyInactiveTabPane,
        rootPrefixCls: props.prefixCls
      }));
    });

    return newChildren;
  },
  render: function render() {
    var _classnames;

    var props = this.props;
    var prefixCls = props.prefixCls,
        children = props.children,
        activeKey = props.activeKey,
        tabBarPosition = props.tabBarPosition,
        animated = props.animated,
        animatedWithMargin = props.animatedWithMargin;
    var style = props.style;

    var classes = __WEBPACK_IMPORTED_MODULE_5_classnames___default()((_classnames = {}, __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_defineProperty___default()(_classnames, prefixCls + '-content', true), __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_defineProperty___default()(_classnames, animated ? prefixCls + '-content-animated' : prefixCls + '-content-no-animated', true), _classnames));
    if (animated) {
      var activeIndex = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__utils__["a" /* getActiveIndex */])(children, activeKey);
      if (activeIndex !== -1) {
        var animatedStyle = animatedWithMargin ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__utils__["b" /* getMarginStyle */])(activeIndex, tabBarPosition) : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__utils__["c" /* getTransformPropValue */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__utils__["d" /* getTransformByIndex */])(activeIndex, tabBarPosition));
        style = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, style, animatedStyle);
      } else {
        style = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, style, {
          display: 'none'
        });
      }
    }
    return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
      'div',
      {
        className: classes,
        style: style
      },
      this.getTabPanes()
    );
  }
});

/* harmony default export */ __webpack_exports__["a"] = (TabContent);

/***/ }),
/* 195 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_prop_types__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__KeyCode__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__TabPane__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_classnames__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_classnames__);











function noop() {}

function getDefaultActiveKey(props) {
  var activeKey = void 0;
  __WEBPACK_IMPORTED_MODULE_5_react___default.a.Children.forEach(props.children, function (child) {
    if (child && !activeKey && !child.props.disabled) {
      activeKey = child.key;
    }
  });
  return activeKey;
}

var Tabs = function (_React$Component) {
  __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default()(Tabs, _React$Component);

  function Tabs(props) {
    __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default()(this, Tabs);

    var _this = __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default()(this, (Tabs.__proto__ || Object.getPrototypeOf(Tabs)).call(this, props));

    _this.render = _this.render.bind(_this);
    _this.componentWillReceiveProps = _this.componentWillReceiveProps.bind(_this);
    _this.onTabClick = _this.onTabClick.bind(_this);
    _this.onNavKeyDown = _this.onNavKeyDown.bind(_this);
    _this.setActiveKey = _this.setActiveKey.bind(_this);
    _this.getNextActiveKey = _this.getNextActiveKey.bind(_this);
    _this.onTabClick = _this.onTabClick.bind(_this);
    _this.onTabClick = _this.onTabClick.bind(_this);

    var activeKey = void 0;
    if ('activeKey' in props) {
      activeKey = props.activeKey;
    } else if ('defaultActiveKey' in props) {
      activeKey = props.defaultActiveKey;
    } else {
      activeKey = getDefaultActiveKey(props);
    }

    _this.state = {
      activeKey: activeKey
    };
    return _this;
  }

  __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default()(Tabs, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if ('activeKey' in nextProps) {
        this.setState({
          activeKey: nextProps.activeKey
        });
      }
    }
  }, {
    key: 'onTabClick',
    value: function onTabClick(activeKey) {
      if (this.tabBar.props.onTabClick) {
        this.tabBar.props.onTabClick(activeKey);
      }
      this.setActiveKey(activeKey);
    }
  }, {
    key: 'onNavKeyDown',
    value: function onNavKeyDown(e) {
      var eventKeyCode = e.keyCode;
      if (eventKeyCode === __WEBPACK_IMPORTED_MODULE_7__KeyCode__["a" /* default */].RIGHT || eventKeyCode === __WEBPACK_IMPORTED_MODULE_7__KeyCode__["a" /* default */].DOWN) {
        e.preventDefault();
        var nextKey = this.getNextActiveKey(true);
        this.onTabClick(nextKey);
      } else if (eventKeyCode === __WEBPACK_IMPORTED_MODULE_7__KeyCode__["a" /* default */].LEFT || eventKeyCode === __WEBPACK_IMPORTED_MODULE_7__KeyCode__["a" /* default */].UP) {
        e.preventDefault();
        var previousKey = this.getNextActiveKey(false);
        this.onTabClick(previousKey);
      }
    }
  }, {
    key: 'setActiveKey',
    value: function setActiveKey(activeKey) {
      if (this.state.activeKey !== activeKey) {
        if (!('activeKey' in this.props)) {
          this.setState({
            activeKey: activeKey
          });
        }
        this.props.onChange(activeKey);
      }
    }
  }, {
    key: 'getNextActiveKey',
    value: function getNextActiveKey(next) {
      var activeKey = this.state.activeKey;
      var children = [];
      __WEBPACK_IMPORTED_MODULE_5_react___default.a.Children.forEach(this.props.children, function (c) {
        if (c && !c.props.disabled) {
          if (next) {
            children.push(c);
          } else {
            children.unshift(c);
          }
        }
      });
      var length = children.length;
      var ret = length && children[0].key;
      children.forEach(function (child, i) {
        if (child.key === activeKey) {
          if (i === length - 1) {
            ret = children[0].key;
          } else {
            ret = children[i + 1].key;
          }
        }
      });
      return ret;
    }
  }, {
    key: 'render',
    value: function render() {
      var _classnames;

      var props = this.props;
      var prefixCls = props.prefixCls,
          tabBarPosition = props.tabBarPosition,
          className = props.className,
          renderTabContent = props.renderTabContent,
          renderTabBar = props.renderTabBar;

      var cls = __WEBPACK_IMPORTED_MODULE_9_classnames___default()((_classnames = {}, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_classnames, prefixCls, 1), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_classnames, prefixCls + '-' + tabBarPosition, 1), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_classnames, className, !!className), _classnames));

      this.tabBar = renderTabBar();
      var contents = [__WEBPACK_IMPORTED_MODULE_5_react___default.a.cloneElement(this.tabBar, {
        prefixCls: prefixCls,
        key: 'tabBar',
        onKeyDown: this.onNavKeyDown,
        tabBarPosition: tabBarPosition,
        onTabClick: this.onTabClick,
        panels: props.children,
        activeKey: this.state.activeKey
      }), __WEBPACK_IMPORTED_MODULE_5_react___default.a.cloneElement(renderTabContent(), {
        prefixCls: prefixCls,
        tabBarPosition: tabBarPosition,
        activeKey: this.state.activeKey,
        destroyInactiveTabPane: props.destroyInactiveTabPane,
        children: props.children,
        onChange: this.setActiveKey,
        key: 'tabContent'
      })];
      if (tabBarPosition === 'bottom') {
        contents.reverse();
      }
      return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
        'div',
        {
          className: cls,
          style: props.style
        },
        contents
      );
    }
  }]);

  return Tabs;
}(__WEBPACK_IMPORTED_MODULE_5_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (Tabs);


Tabs.propTypes = {
  destroyInactiveTabPane: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.bool,
  renderTabBar: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.func.isRequired,
  renderTabContent: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.func.isRequired,
  onChange: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.func,
  children: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.any,
  prefixCls: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.string,
  className: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.string,
  tabBarPosition: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.string,
  style: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.object,
  activeKey: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.string,
  defaultActiveKey: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.string
};

Tabs.defaultProps = {
  prefixCls: 'rc-tabs',
  destroyInactiveTabPane: false,
  onChange: noop,
  tabBarPosition: 'top',
  style: {}
};

Tabs.TabPane = __WEBPACK_IMPORTED_MODULE_8__TabPane__["a" /* default */];

/***/ }),
/* 196 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export toArray */
/* harmony export (immutable) */ __webpack_exports__["a"] = getActiveIndex;
/* unused harmony export getActiveKey */
/* unused harmony export setTransform */
/* unused harmony export isTransformSupported */
/* unused harmony export setTransition */
/* harmony export (immutable) */ __webpack_exports__["c"] = getTransformPropValue;
/* unused harmony export isVertical */
/* harmony export (immutable) */ __webpack_exports__["d"] = getTransformByIndex;
/* harmony export (immutable) */ __webpack_exports__["b"] = getMarginStyle;
/* unused harmony export getStyle */
/* unused harmony export setPxStyle */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);



function toArray(children) {
  // allow [c,[a,b]]
  var c = [];
  __WEBPACK_IMPORTED_MODULE_1_react___default.a.Children.forEach(children, function (child) {
    if (child) {
      c.push(child);
    }
  });
  return c;
}

function getActiveIndex(children, activeKey) {
  var c = toArray(children);
  for (var i = 0; i < c.length; i++) {
    if (c[i].key === activeKey) {
      return i;
    }
  }
  return -1;
}

function getActiveKey(children, index) {
  var c = toArray(children);
  return c[index].key;
}

function setTransform(style, v) {
  style.transform = v;
  style.webkitTransform = v;
  style.mozTransform = v;
}

function isTransformSupported(style) {
  return 'transform' in style || 'webkitTransform' in style || 'MozTransform' in style;
}

function setTransition(style, v) {
  style.transition = v;
  style.webkitTransition = v;
  style.MozTransition = v;
}
function getTransformPropValue(v) {
  return {
    transform: v,
    WebkitTransform: v,
    MozTransform: v
  };
}

function isVertical(tabBarPosition) {
  return tabBarPosition === 'left' || tabBarPosition === 'right';
}

function getTransformByIndex(index, tabBarPosition) {
  var translate = isVertical(tabBarPosition) ? 'translateY' : 'translateX';
  return translate + '(' + -index * 100 + '%) translateZ(0)';
}

function getMarginStyle(index, tabBarPosition) {
  var marginDirection = isVertical(tabBarPosition) ? 'marginTop' : 'marginLeft';
  return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()({}, marginDirection, -index * 100 + '%');
}

function getStyle(el, property) {
  return +getComputedStyle(el).getPropertyValue(property).replace('px', '');
}

function setPxStyle(el, value, vertical) {
  value = vertical ? '0px, ' + value + 'px, 0px' : value + 'px, 0px, 0px';
  setTransform(el.style, 'translate3d(' + value + ')');
}

/***/ }),
/* 197 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createReactClass = __webpack_require__(23);

var _createReactClass2 = _interopRequireDefault(_createReactClass);

var _InkTabBarMixin = __webpack_require__(104);

var _InkTabBarMixin2 = _interopRequireDefault(_InkTabBarMixin);

var _TabBarMixin = __webpack_require__(71);

var _TabBarMixin2 = _interopRequireDefault(_TabBarMixin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var InkTabBar = (0, _createReactClass2['default'])({
  displayName: 'InkTabBar',
  mixins: [_TabBarMixin2['default'], _InkTabBarMixin2['default']],
  render: function render() {
    var inkBarNode = this.getInkBarNode();
    var tabs = this.getTabs();
    return this.getRootNode([inkBarNode, tabs]);
  }
});

exports['default'] = InkTabBar;
module.exports = exports['default'];

/***/ }),
/* 198 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(5);

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = __webpack_require__(9);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _createReactClass = __webpack_require__(23);

var _createReactClass2 = _interopRequireDefault(_createReactClass);

var _classnames2 = __webpack_require__(10);

var _classnames3 = _interopRequireDefault(_classnames2);

var _InkTabBarMixin = __webpack_require__(104);

var _InkTabBarMixin2 = _interopRequireDefault(_InkTabBarMixin);

var _SwipeableTabBarMixin = __webpack_require__(199);

var _SwipeableTabBarMixin2 = _interopRequireDefault(_SwipeableTabBarMixin);

var _TabBarMixin = __webpack_require__(71);

var _TabBarMixin2 = _interopRequireDefault(_TabBarMixin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var SwipeableInkTabBar = (0, _createReactClass2['default'])({
  displayName: 'SwipeableInkTabBar',

  mixins: [_TabBarMixin2['default'], _InkTabBarMixin2['default'], _SwipeableTabBarMixin2['default']],

  getSwipeableTabs: function getSwipeableTabs() {
    var _this = this;

    var props = this.props;
    var children = props.panels;
    var activeKey = props.activeKey;
    var rst = [];
    var prefixCls = props.prefixCls;

    var _flexWidth = 1 / props.pageSize * 100 + '%';
    var tabStyle = {
      WebkitFlexBasis: _flexWidth,
      flexBasis: _flexWidth
    };

    _react2['default'].Children.forEach(children, function (child) {
      var _classnames;

      if (!child) {
        return;
      }
      var key = child.key;
      var cls = (0, _classnames3['default'])(prefixCls + '-tab', (_classnames = {}, (0, _defineProperty3['default'])(_classnames, prefixCls + '-tab-active', activeKey === key), (0, _defineProperty3['default'])(_classnames, prefixCls + '-tab-disabled', child.props.disabled), _classnames));
      var events = {};
      if (!child.props.disabled) {
        events = {
          onClick: _this.onTabClick.bind(_this, key)
        };
      }
      var refProps = {};
      if (activeKey === key) {
        refProps.ref = 'activeTab';
      }
      rst.push(_react2['default'].createElement(
        'div',
        (0, _extends3['default'])({
          role: 'tab',
          style: tabStyle,
          'aria-disabled': child.props.disabled ? 'true' : 'false',
          'aria-selected': activeKey === key ? 'true' : 'false'
        }, events, {
          className: cls,
          key: key
        }, refProps),
        child.props.tab
      ));
    });

    return rst;
  },
  render: function render() {
    var inkBarNode = this.getInkBarNode();
    var tabs = this.getSwipeableTabs();
    var scrollbarNode = this.getSwipeBarNode([inkBarNode, tabs]);
    return this.getRootNode(scrollbarNode);
  }
});

exports['default'] = SwipeableInkTabBar;
module.exports = exports['default'];

/***/ }),
/* 199 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(5);

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = __webpack_require__(9);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classnames3 = __webpack_require__(10);

var _classnames4 = _interopRequireDefault(_classnames3);

var _rcHammerjs = __webpack_require__(86);

var _rcHammerjs2 = _interopRequireDefault(_rcHammerjs);

var _reactDom = __webpack_require__(15);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _utils = __webpack_require__(54);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

exports['default'] = {
  getInitialState: function getInitialState() {
    var _checkPaginationByKey = this.checkPaginationByKey(this.props.activeKey),
        hasPrevPage = _checkPaginationByKey.hasPrevPage,
        hasNextPage = _checkPaginationByKey.hasNextPage;

    return {
      hasPrevPage: hasPrevPage,
      hasNextPage: hasNextPage
    };
  },
  getDefaultProps: function getDefaultProps() {
    return {
      hammerOptions: {},
      pageSize: 5, // per page show how many tabs
      speed: 7 // swipe speed, 1 to 10, more bigger more faster
    };
  },
  checkPaginationByKey: function checkPaginationByKey(activeKey) {
    var _props = this.props,
        panels = _props.panels,
        pageSize = _props.pageSize;

    var index = this.getIndexByKey(activeKey);
    var centerTabCount = Math.floor(pageSize / 2);
    // the basic rule is to make activeTab be shown in the center of TabBar viewport
    return {
      hasPrevPage: index - centerTabCount > 0,
      hasNextPage: index + centerTabCount < panels.length
    };
  },

  /**
   * used for props.activeKey setting, not for swipe callback
   */
  getDeltaByKey: function getDeltaByKey(activeKey) {
    var pageSize = this.props.pageSize;

    var index = this.getIndexByKey(activeKey);
    var centerTabCount = Math.floor(pageSize / 2);
    var tabWidth = this.cache.tabWidth;

    var delta = (index - centerTabCount) * tabWidth * -1;
    return delta;
  },
  getIndexByKey: function getIndexByKey(activeKey) {
    var panels = this.props.panels;

    var length = panels.length;
    for (var i = 0; i <= length; i++) {
      if (panels[i].key === activeKey) {
        return i;
      }
    }
    return -1;
  },
  checkPaginationByDelta: function checkPaginationByDelta(delta) {
    var totalAvaliableDelta = this.cache.totalAvaliableDelta;

    return {
      hasPrevPage: delta < 0,
      hasNextPage: -delta < totalAvaliableDelta
    };
  },
  setSwipePositionByKey: function setSwipePositionByKey(activeKey) {
    var _checkPaginationByKey2 = this.checkPaginationByKey(activeKey),
        hasPrevPage = _checkPaginationByKey2.hasPrevPage,
        hasNextPage = _checkPaginationByKey2.hasNextPage;

    var totalAvaliableDelta = this.cache.totalAvaliableDelta;

    this.setState({
      hasPrevPage: hasPrevPage,
      hasNextPage: hasNextPage
    });
    var delta = void 0;
    if (!hasPrevPage) {
      // the first page
      delta = 0;
    } else if (!hasNextPage) {
      // the last page
      delta = -totalAvaliableDelta;
    } else if (hasNextPage) {
      // the middle page
      delta = this.getDeltaByKey(activeKey);
    }
    this.cache.totalDelta = delta;
    this.setSwipePosition();
  },
  setSwipePosition: function setSwipePosition() {
    var _cache = this.cache,
        totalDelta = _cache.totalDelta,
        vertical = _cache.vertical;

    (0, _utils.setPxStyle)(this.swipeNode, totalDelta, vertical);
  },
  componentDidMount: function componentDidMount() {
    var _refs = this.refs,
        swipe = _refs.swipe,
        nav = _refs.nav;
    var _props2 = this.props,
        tabBarPosition = _props2.tabBarPosition,
        pageSize = _props2.pageSize,
        panels = _props2.panels,
        activeKey = _props2.activeKey;

    this.swipeNode = _reactDom2['default'].findDOMNode(swipe); // dom which scroll (9999px)
    this.realNode = _reactDom2['default'].findDOMNode(nav); // dom which visiable in screen (viewport)
    var _isVertical = (0, _utils.isVertical)(tabBarPosition);
    var _viewSize = (0, _utils.getStyle)(this.realNode, _isVertical ? 'height' : 'width');
    var _tabWidth = _viewSize / pageSize;
    this.cache = {
      vertical: _isVertical,
      totalAvaliableDelta: _tabWidth * panels.length - _viewSize,
      tabWidth: _tabWidth
    };
    this.setSwipePositionByKey(activeKey);
  },
  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
    if (nextProps.activeKey && nextProps.activeKey !== this.props.activeKey) {
      this.setSwipePositionByKey(nextProps.activeKey);
    }
  },
  onPan: function onPan(e) {
    var _cache2 = this.cache,
        vertical = _cache2.vertical,
        totalAvaliableDelta = _cache2.totalAvaliableDelta,
        totalDelta = _cache2.totalDelta;
    var speed = this.props.speed;
    // calculate touch distance

    var nowDelta = vertical ? e.deltaY : e.deltaX;
    nowDelta = nowDelta * (speed / 10);

    // calculate distance dom need transform
    var _nextDelta = nowDelta + totalDelta;
    if (_nextDelta >= 0) {
      _nextDelta = 0;
    } else if (_nextDelta <= -totalAvaliableDelta) {
      _nextDelta = -totalAvaliableDelta;
    }

    this.cache.totalDelta = _nextDelta;
    this.setSwipePosition();

    // calculate pagination display

    var _checkPaginationByDel = this.checkPaginationByDelta(this.cache.totalDelta),
        hasPrevPage = _checkPaginationByDel.hasPrevPage,
        hasNextPage = _checkPaginationByDel.hasNextPage;

    if (hasPrevPage !== this.state.hasPrevPage || hasNextPage !== this.state.hasNextPage) {
      this.setState({
        hasPrevPage: hasPrevPage,
        hasNextPage: hasNextPage
      });
    }
  },
  getSwipeBarNode: function getSwipeBarNode(tabs) {
    var _classnames2;

    var _props3 = this.props,
        prefixCls = _props3.prefixCls,
        hammerOptions = _props3.hammerOptions,
        tabBarPosition = _props3.tabBarPosition;
    var _state = this.state,
        hasPrevPage = _state.hasPrevPage,
        hasNextPage = _state.hasNextPage;

    var navClassName = prefixCls + '-nav';
    var navClasses = (0, _classnames4['default'])((0, _defineProperty3['default'])({}, navClassName, true));
    var events = {
      onPan: this.onPan
    };
    return _react2['default'].createElement(
      'div',
      {
        className: (0, _classnames4['default'])((_classnames2 = {}, (0, _defineProperty3['default'])(_classnames2, prefixCls + '-nav-container', 1), (0, _defineProperty3['default'])(_classnames2, prefixCls + '-nav-swipe-container', 1), (0, _defineProperty3['default'])(_classnames2, prefixCls + '-prevpage', hasPrevPage), (0, _defineProperty3['default'])(_classnames2, prefixCls + '-nextpage', hasNextPage), _classnames2)),
        key: 'container',
        ref: 'container'
      },
      _react2['default'].createElement(
        'div',
        { className: prefixCls + '-nav-wrap', ref: 'navWrap' },
        _react2['default'].createElement(
          _rcHammerjs2['default'],
          (0, _extends3['default'])({}, events, {
            direction: (0, _utils.isVertical)(tabBarPosition) ? 'DIRECTION_ALL' : 'DIRECTION_HORIZONTAL',
            options: hammerOptions
          }),
          _react2['default'].createElement(
            'div',
            { className: prefixCls + '-nav-swipe', ref: 'swipe' },
            _react2['default'].createElement(
              'div',
              { className: navClasses, ref: 'nav' },
              tabs
            )
          )
        )
      )
    );
  }
};
module.exports = exports['default'];

/***/ }),
/* 200 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(5);

var _extends3 = _interopRequireDefault(_extends2);

var _TabContent = __webpack_require__(72);

var _TabContent2 = _interopRequireDefault(_TabContent);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(6);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _createReactClass = __webpack_require__(23);

var _createReactClass2 = _interopRequireDefault(_createReactClass);

var _rcHammerjs = __webpack_require__(86);

var _rcHammerjs2 = _interopRequireDefault(_rcHammerjs);

var _reactDom = __webpack_require__(15);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _utils = __webpack_require__(54);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var RESISTANCE_COEF = 0.6;

function computeIndex(_ref) {
  var maxIndex = _ref.maxIndex,
      startIndex = _ref.startIndex,
      delta = _ref.delta,
      viewSize = _ref.viewSize;

  var index = startIndex + -delta / viewSize;
  if (index < 0) {
    index = Math.exp(index * RESISTANCE_COEF) - 1;
  } else if (index > maxIndex) {
    index = maxIndex + 1 - Math.exp((maxIndex - index) * RESISTANCE_COEF);
  }
  return index;
}

function getIndexByDelta(e) {
  var delta = (0, _utils.isVertical)(this.props.tabBarPosition) ? e.deltaY : e.deltaX;
  var currentIndex = computeIndex({
    maxIndex: this.maxIndex,
    viewSize: this.viewSize,
    startIndex: this.startIndex,
    delta: delta
  });
  var showIndex = delta < 0 ? Math.floor(currentIndex + 1) : Math.floor(currentIndex);
  if (showIndex < 0) {
    showIndex = 0;
  } else if (showIndex > this.maxIndex) {
    showIndex = this.maxIndex;
  }
  if (this.children[showIndex].props.disabled) {
    return undefined;
  }
  return currentIndex;
}

var SwipeableTabContent = (0, _createReactClass2['default'])({
  displayName: 'SwipeableTabContent',

  propTypes: {
    tabBarPosition: _propTypes2['default'].string,
    onChange: _propTypes2['default'].func,
    children: _propTypes2['default'].any,
    hammerOptions: _propTypes2['default'].any,
    animated: _propTypes2['default'].bool,
    activeKey: _propTypes2['default'].string
  },

  getDefaultProps: function getDefaultProps() {
    return {
      animated: true
    };
  },
  componentDidMount: function componentDidMount() {
    this.rootNode = _reactDom2['default'].findDOMNode(this);
  },
  onPanStart: function onPanStart() {
    var _props = this.props,
        tabBarPosition = _props.tabBarPosition,
        children = _props.children,
        activeKey = _props.activeKey,
        animated = _props.animated;

    var startIndex = this.startIndex = (0, _utils.getActiveIndex)(children, activeKey);
    if (startIndex === -1) {
      return;
    }
    if (animated) {
      (0, _utils.setTransition)(this.rootNode.style, 'none');
    }
    this.startDrag = true;
    this.children = (0, _utils.toArray)(children);
    this.maxIndex = this.children.length - 1;
    this.viewSize = (0, _utils.isVertical)(tabBarPosition) ? this.rootNode.offsetHeight : this.rootNode.offsetWidth;
  },
  onPan: function onPan(e) {
    if (!this.startDrag) {
      return;
    }
    var tabBarPosition = this.props.tabBarPosition;

    var currentIndex = getIndexByDelta.call(this, e);
    if (currentIndex !== undefined) {
      (0, _utils.setTransform)(this.rootNode.style, (0, _utils.getTransformByIndex)(currentIndex, tabBarPosition));
    }
  },
  onPanEnd: function onPanEnd(e) {
    if (!this.startDrag) {
      return;
    }
    this.end(e);
  },
  onSwipe: function onSwipe(e) {
    this.end(e, true);
  },
  end: function end(e, swipe) {
    var _props2 = this.props,
        tabBarPosition = _props2.tabBarPosition,
        animated = _props2.animated;

    this.startDrag = false;
    if (animated) {
      (0, _utils.setTransition)(this.rootNode.style, '');
    }
    var currentIndex = getIndexByDelta.call(this, e);
    var finalIndex = this.startIndex;
    if (currentIndex !== undefined) {
      if (currentIndex < 0) {
        finalIndex = 0;
      } else if (currentIndex > this.maxIndex) {
        finalIndex = this.maxIndex;
      } else if (swipe) {
        var delta = (0, _utils.isVertical)(tabBarPosition) ? e.deltaY : e.deltaX;
        finalIndex = delta < 0 ? Math.ceil(currentIndex) : Math.floor(currentIndex);
      } else {
        var floorIndex = Math.floor(currentIndex);
        if (currentIndex - floorIndex > 0.6) {
          finalIndex = floorIndex + 1;
        } else {
          finalIndex = floorIndex;
        }
      }
    }
    if (this.children[finalIndex].props.disabled) {
      return;
    }
    if (this.startIndex === finalIndex) {
      if (animated) {
        (0, _utils.setTransform)(this.rootNode.style, (0, _utils.getTransformByIndex)(finalIndex, this.props.tabBarPosition));
      }
    } else {
      this.props.onChange((0, _utils.getActiveKey)(this.props.children, finalIndex));
    }
  },
  render: function render() {
    var _props3 = this.props,
        tabBarPosition = _props3.tabBarPosition,
        hammerOptions = _props3.hammerOptions,
        animated = _props3.animated;

    var events = {
      onSwipe: this.onSwipe,
      onPanStart: this.onPanStart
    };
    if (animated !== false) {
      events = (0, _extends3['default'])({}, events, {
        onPan: this.onPan,
        onPanEnd: this.onPanEnd
      });
    }
    return _react2['default'].createElement(
      _rcHammerjs2['default'],
      (0, _extends3['default'])({}, events, {
        direction: (0, _utils.isVertical)(tabBarPosition) ? 'DIRECTION_ALL' : 'DIRECTION_HORIZONTAL',
        options: hammerOptions
      }),
      _react2['default'].createElement(_TabContent2['default'], this.props)
    );
  }
});

exports['default'] = SwipeableTabContent;
module.exports = exports['default'];

/***/ }),
/* 201 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createReactClass = __webpack_require__(23);

var _createReactClass2 = _interopRequireDefault(_createReactClass);

var _TabBarMixin = __webpack_require__(71);

var _TabBarMixin2 = _interopRequireDefault(_TabBarMixin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var TabBar = (0, _createReactClass2['default'])({
  displayName: 'TabBar',
  mixins: [_TabBarMixin2['default']],
  render: function render() {
    var tabs = this.getTabs();
    return this.getRootNode(tabs);
  }
});

exports['default'] = TabBar;
module.exports = exports['default'];

/***/ }),
/* 202 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @copyright 2015, Andrey Popp <8mayday@gmail.com>
 *
 * The decorator may be used on classes or methods
 * ```
 * @autobind
 * class FullBound {}
 *
 * class PartBound {
 *   @autobind
 *   method () {}
 * }
 * ```
 */


Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = autobind;

function autobind() {
  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  if (args.length === 1) {
    return boundClass.apply(undefined, args);
  } else {
    return boundMethod.apply(undefined, args);
  }
}

/**
 * Use boundMethod to bind all methods on the target.prototype
 */
function boundClass(target) {
  // (Using reflect to get all keys including symbols)
  var keys = undefined;
  // Use Reflect if exists
  if (typeof Reflect !== 'undefined' && typeof Reflect.ownKeys === 'function') {
    keys = Reflect.ownKeys(target.prototype);
  } else {
    keys = Object.getOwnPropertyNames(target.prototype);
    // use symbols if support is provided
    if (typeof Object.getOwnPropertySymbols === 'function') {
      keys = keys.concat(Object.getOwnPropertySymbols(target.prototype));
    }
  }

  keys.forEach(function (key) {
    // Ignore special case target method
    if (key === 'constructor') {
      return;
    }

    var descriptor = Object.getOwnPropertyDescriptor(target.prototype, key);

    // Only methods need binding
    if (typeof descriptor.value === 'function') {
      Object.defineProperty(target.prototype, key, boundMethod(target, key, descriptor));
    }
  });
  return target;
}

/**
 * Return a descriptor removing the value and returning a getter
 * The getter will return a .bind version of the function
 * and memoize the result against a symbol on the instance
 */
function boundMethod(target, key, descriptor) {
  var fn = descriptor.value;

  if (typeof fn !== 'function') {
    throw new Error('@autobind decorator can only be applied to methods not: ' + typeof fn);
  }

  // In IE11 calling Object.defineProperty has a side-effect of evaluating the
  // getter for the property which is being replaced. This causes infinite
  // recursion and an "Out of stack space" error.
  var definingProperty = false;

  return {
    configurable: true,
    get: function get() {
      if (definingProperty || this === target.prototype || this.hasOwnProperty(key)) {
        return fn;
      }

      var boundFn = fn.bind(this);
      definingProperty = true;
      Object.defineProperty(this, key, {
        value: boundFn,
        configurable: true,
        writable: true
      });
      definingProperty = false;
      return boundFn;
    }
  };
}
module.exports = exports['default'];


/***/ }),
/* 203 */,
/* 204 */,
/* 205 */,
/* 206 */,
/* 207 */,
/* 208 */,
/* 209 */,
/* 210 */,
/* 211 */,
/* 212 */,
/* 213 */,
/* 214 */,
/* 215 */,
/* 216 */,
/* 217 */,
/* 218 */,
/* 219 */,
/* 220 */,
/* 221 */,
/* 222 */,
/* 223 */,
/* 224 */,
/* 225 */,
/* 226 */,
/* 227 */,
/* 228 */,
/* 229 */,
/* 230 */,
/* 231 */,
/* 232 */,
/* 233 */,
/* 234 */,
/* 235 */,
/* 236 */,
/* 237 */,
/* 238 */,
/* 239 */,
/* 240 */,
/* 241 */,
/* 242 */,
/* 243 */,
/* 244 */,
/* 245 */,
/* 246 */,
/* 247 */,
/* 248 */,
/* 249 */,
/* 250 */,
/* 251 */,
/* 252 */,
/* 253 */,
/* 254 */,
/* 255 */,
/* 256 */,
/* 257 */,
/* 258 */,
/* 259 */,
/* 260 */,
/* 261 */,
/* 262 */,
/* 263 */,
/* 264 */,
/* 265 */,
/* 266 */,
/* 267 */,
/* 268 */,
/* 269 */,
/* 270 */,
/* 271 */,
/* 272 */,
/* 273 */,
/* 274 */,
/* 275 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(281), __esModule: true };

/***/ }),
/* 276 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
    if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, __webpack_require__(402)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else if (typeof exports !== "undefined") {
        factory(module, require('select'));
    } else {
        var mod = {
            exports: {}
        };
        factory(mod, global.select);
        global.clipboardAction = mod.exports;
    }
})(this, function (module, _select) {
    'use strict';

    var _select2 = _interopRequireDefault(_select);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
        return typeof obj;
    } : function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var _createClass = function () {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ("value" in descriptor) descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor);
            }
        }

        return function (Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);
            if (staticProps) defineProperties(Constructor, staticProps);
            return Constructor;
        };
    }();

    var ClipboardAction = function () {
        /**
         * @param {Object} options
         */
        function ClipboardAction(options) {
            _classCallCheck(this, ClipboardAction);

            this.resolveOptions(options);
            this.initSelection();
        }

        /**
         * Defines base properties passed from constructor.
         * @param {Object} options
         */


        _createClass(ClipboardAction, [{
            key: 'resolveOptions',
            value: function resolveOptions() {
                var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

                this.action = options.action;
                this.container = options.container;
                this.emitter = options.emitter;
                this.target = options.target;
                this.text = options.text;
                this.trigger = options.trigger;

                this.selectedText = '';
            }
        }, {
            key: 'initSelection',
            value: function initSelection() {
                if (this.text) {
                    this.selectFake();
                } else if (this.target) {
                    this.selectTarget();
                }
            }
        }, {
            key: 'selectFake',
            value: function selectFake() {
                var _this = this;

                var isRTL = document.documentElement.getAttribute('dir') == 'rtl';

                this.removeFake();

                this.fakeHandlerCallback = function () {
                    return _this.removeFake();
                };
                this.fakeHandler = this.container.addEventListener('click', this.fakeHandlerCallback) || true;

                this.fakeElem = document.createElement('textarea');
                // Prevent zooming on iOS
                this.fakeElem.style.fontSize = '12pt';
                // Reset box model
                this.fakeElem.style.border = '0';
                this.fakeElem.style.padding = '0';
                this.fakeElem.style.margin = '0';
                // Move element out of screen horizontally
                this.fakeElem.style.position = 'absolute';
                this.fakeElem.style[isRTL ? 'right' : 'left'] = '-9999px';
                // Move element to the same position vertically
                var yPosition = window.pageYOffset || document.documentElement.scrollTop;
                this.fakeElem.style.top = yPosition + 'px';

                this.fakeElem.setAttribute('readonly', '');
                this.fakeElem.value = this.text;

                this.container.appendChild(this.fakeElem);

                this.selectedText = (0, _select2.default)(this.fakeElem);
                this.copyText();
            }
        }, {
            key: 'removeFake',
            value: function removeFake() {
                if (this.fakeHandler) {
                    this.container.removeEventListener('click', this.fakeHandlerCallback);
                    this.fakeHandler = null;
                    this.fakeHandlerCallback = null;
                }

                if (this.fakeElem) {
                    this.container.removeChild(this.fakeElem);
                    this.fakeElem = null;
                }
            }
        }, {
            key: 'selectTarget',
            value: function selectTarget() {
                this.selectedText = (0, _select2.default)(this.target);
                this.copyText();
            }
        }, {
            key: 'copyText',
            value: function copyText() {
                var succeeded = void 0;

                try {
                    succeeded = document.execCommand(this.action);
                } catch (err) {
                    succeeded = false;
                }

                this.handleResult(succeeded);
            }
        }, {
            key: 'handleResult',
            value: function handleResult(succeeded) {
                this.emitter.emit(succeeded ? 'success' : 'error', {
                    action: this.action,
                    text: this.selectedText,
                    trigger: this.trigger,
                    clearSelection: this.clearSelection.bind(this)
                });
            }
        }, {
            key: 'clearSelection',
            value: function clearSelection() {
                if (this.trigger) {
                    this.trigger.focus();
                }

                window.getSelection().removeAllRanges();
            }
        }, {
            key: 'destroy',
            value: function destroy() {
                this.removeFake();
            }
        }, {
            key: 'action',
            set: function set() {
                var action = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'copy';

                this._action = action;

                if (this._action !== 'copy' && this._action !== 'cut') {
                    throw new Error('Invalid "action" value, use either "copy" or "cut"');
                }
            },
            get: function get() {
                return this._action;
            }
        }, {
            key: 'target',
            set: function set(target) {
                if (target !== undefined) {
                    if (target && (typeof target === 'undefined' ? 'undefined' : _typeof(target)) === 'object' && target.nodeType === 1) {
                        if (this.action === 'copy' && target.hasAttribute('disabled')) {
                            throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');
                        }

                        if (this.action === 'cut' && (target.hasAttribute('readonly') || target.hasAttribute('disabled'))) {
                            throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');
                        }

                        this._target = target;
                    } else {
                        throw new Error('Invalid "target" value, use a valid Element');
                    }
                }
            },
            get: function get() {
                return this._target;
            }
        }]);

        return ClipboardAction;
    }();

    module.exports = ClipboardAction;
});

/***/ }),
/* 277 */
/***/ (function(module, exports, __webpack_require__) {

var core  = __webpack_require__(30)
  , $JSON = core.JSON || (core.JSON = {stringify: JSON.stringify});
module.exports = function stringify(it){ // eslint-disable-line no-unused-vars
  return $JSON.stringify.apply($JSON, arguments);
};

/***/ }),
/* 278 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(292);
module.exports = __webpack_require__(30).Object.getPrototypeOf;

/***/ }),
/* 279 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(293);
module.exports = __webpack_require__(30).Object.keys;

/***/ }),
/* 280 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(145);
__webpack_require__(136);
__webpack_require__(146);
__webpack_require__(294);
module.exports = __webpack_require__(30).Promise;

/***/ }),
/* 281 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(145);
__webpack_require__(136);
__webpack_require__(146);
__webpack_require__(295);
__webpack_require__(296);
module.exports = __webpack_require__(30).Set;

/***/ }),
/* 282 */
/***/ (function(module, exports, __webpack_require__) {

var forOf = __webpack_require__(60);

module.exports = function(iter, ITERATOR){
  var result = [];
  forOf(iter, false, result.push, result, ITERATOR);
  return result;
};


/***/ }),
/* 283 */
/***/ (function(module, exports, __webpack_require__) {

// 0 -> Array#forEach
// 1 -> Array#map
// 2 -> Array#filter
// 3 -> Array#some
// 4 -> Array#every
// 5 -> Array#find
// 6 -> Array#findIndex
var ctx      = __webpack_require__(49)
  , IObject  = __webpack_require__(466)
  , toObject = __webpack_require__(96)
  , toLength = __webpack_require__(135)
  , asc      = __webpack_require__(285);
module.exports = function(TYPE, $create){
  var IS_MAP        = TYPE == 1
    , IS_FILTER     = TYPE == 2
    , IS_SOME       = TYPE == 3
    , IS_EVERY      = TYPE == 4
    , IS_FIND_INDEX = TYPE == 6
    , NO_HOLES      = TYPE == 5 || IS_FIND_INDEX
    , create        = $create || asc;
  return function($this, callbackfn, that){
    var O      = toObject($this)
      , self   = IObject(O)
      , f      = ctx(callbackfn, that, 3)
      , length = toLength(self.length)
      , index  = 0
      , result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined
      , val, res;
    for(;length > index; index++)if(NO_HOLES || index in self){
      val = self[index];
      res = f(val, index, O);
      if(TYPE){
        if(IS_MAP)result[index] = res;            // map
        else if(res)switch(TYPE){
          case 3: return true;                    // some
          case 5: return val;                     // find
          case 6: return index;                   // findIndex
          case 2: result.push(val);               // filter
        } else if(IS_EVERY)return false;          // every
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
  };
};

/***/ }),
/* 284 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(95)
  , isArray  = __webpack_require__(475)
  , SPECIES  = __webpack_require__(64)('species');

module.exports = function(original){
  var C;
  if(isArray(original)){
    C = original.constructor;
    // cross-realm fallback
    if(typeof C == 'function' && (C === Array || isArray(C.prototype)))C = undefined;
    if(isObject(C)){
      C = C[SPECIES];
      if(C === null)C = undefined;
    }
  } return C === undefined ? Array : C;
};

/***/ }),
/* 285 */
/***/ (function(module, exports, __webpack_require__) {

// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
var speciesConstructor = __webpack_require__(284);

module.exports = function(original, length){
  return new (speciesConstructor(original))(length);
};

/***/ }),
/* 286 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var dP          = __webpack_require__(91).f
  , create      = __webpack_require__(485)
  , redefineAll = __webpack_require__(83)
  , ctx         = __webpack_require__(49)
  , anInstance  = __webpack_require__(82)
  , defined     = __webpack_require__(483)
  , forOf       = __webpack_require__(60)
  , $iterDefine = __webpack_require__(467)
  , step        = __webpack_require__(478)
  , setSpecies  = __webpack_require__(122)
  , DESCRIPTORS = __webpack_require__(93)
  , fastKey     = __webpack_require__(144).fastKey
  , SIZE        = DESCRIPTORS ? '_s' : 'size';

var getEntry = function(that, key){
  // fast case
  var index = fastKey(key), entry;
  if(index !== 'F')return that._i[index];
  // frozen object case
  for(entry = that._f; entry; entry = entry.n){
    if(entry.k == key)return entry;
  }
};

module.exports = {
  getConstructor: function(wrapper, NAME, IS_MAP, ADDER){
    var C = wrapper(function(that, iterable){
      anInstance(that, C, NAME, '_i');
      that._i = create(null); // index
      that._f = undefined;    // first entry
      that._l = undefined;    // last entry
      that[SIZE] = 0;         // size
      if(iterable != undefined)forOf(iterable, IS_MAP, that[ADDER], that);
    });
    redefineAll(C.prototype, {
      // 23.1.3.1 Map.prototype.clear()
      // 23.2.3.2 Set.prototype.clear()
      clear: function clear(){
        for(var that = this, data = that._i, entry = that._f; entry; entry = entry.n){
          entry.r = true;
          if(entry.p)entry.p = entry.p.n = undefined;
          delete data[entry.i];
        }
        that._f = that._l = undefined;
        that[SIZE] = 0;
      },
      // 23.1.3.3 Map.prototype.delete(key)
      // 23.2.3.4 Set.prototype.delete(value)
      'delete': function(key){
        var that  = this
          , entry = getEntry(that, key);
        if(entry){
          var next = entry.n
            , prev = entry.p;
          delete that._i[entry.i];
          entry.r = true;
          if(prev)prev.n = next;
          if(next)next.p = prev;
          if(that._f == entry)that._f = next;
          if(that._l == entry)that._l = prev;
          that[SIZE]--;
        } return !!entry;
      },
      // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
      // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
      forEach: function forEach(callbackfn /*, that = undefined */){
        anInstance(this, C, 'forEach');
        var f = ctx(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3)
          , entry;
        while(entry = entry ? entry.n : this._f){
          f(entry.v, entry.k, this);
          // revert to the last existing entry
          while(entry && entry.r)entry = entry.p;
        }
      },
      // 23.1.3.7 Map.prototype.has(key)
      // 23.2.3.7 Set.prototype.has(value)
      has: function has(key){
        return !!getEntry(this, key);
      }
    });
    if(DESCRIPTORS)dP(C.prototype, 'size', {
      get: function(){
        return defined(this[SIZE]);
      }
    });
    return C;
  },
  def: function(that, key, value){
    var entry = getEntry(that, key)
      , prev, index;
    // change existing entry
    if(entry){
      entry.v = value;
    // create new entry
    } else {
      that._l = entry = {
        i: index = fastKey(key, true), // <- index
        k: key,                        // <- key
        v: value,                      // <- value
        p: prev = that._l,             // <- previous entry
        n: undefined,                  // <- next entry
        r: false                       // <- removed
      };
      if(!that._f)that._f = entry;
      if(prev)prev.n = entry;
      that[SIZE]++;
      // add to index
      if(index !== 'F')that._i[index] = entry;
    } return that;
  },
  getEntry: getEntry,
  setStrong: function(C, NAME, IS_MAP){
    // add .keys, .values, .entries, [@@iterator]
    // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
    $iterDefine(C, NAME, function(iterated, kind){
      this._t = iterated;  // target
      this._k = kind;      // kind
      this._l = undefined; // previous
    }, function(){
      var that  = this
        , kind  = that._k
        , entry = that._l;
      // revert to the last existing entry
      while(entry && entry.r)entry = entry.p;
      // get next entry
      if(!that._t || !(that._l = entry = entry ? entry.n : that._t._f)){
        // or finish the iteration
        that._t = undefined;
        return step(1);
      }
      // return step by kind
      if(kind == 'keys'  )return step(0, entry.k);
      if(kind == 'values')return step(0, entry.v);
      return step(0, [entry.k, entry.v]);
    }, IS_MAP ? 'entries' : 'values' , !IS_MAP, true);

    // add [@@species], 23.1.2.2, 23.2.2.2
    setSpecies(NAME);
  }
};

/***/ }),
/* 287 */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/DavidBruant/Map-Set.prototype.toJSON
var classof = __webpack_require__(143)
  , from    = __webpack_require__(282);
module.exports = function(NAME){
  return function toJSON(){
    if(classof(this) != NAME)throw TypeError(NAME + "#toJSON isn't generic");
    return from(this);
  };
};

/***/ }),
/* 288 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global         = __webpack_require__(48)
  , $export        = __webpack_require__(65)
  , meta           = __webpack_require__(144)
  , fails          = __webpack_require__(147)
  , hide           = __webpack_require__(141)
  , redefineAll    = __webpack_require__(83)
  , forOf          = __webpack_require__(60)
  , anInstance     = __webpack_require__(82)
  , isObject       = __webpack_require__(95)
  , setToStringTag = __webpack_require__(150)
  , dP             = __webpack_require__(91).f
  , each           = __webpack_require__(283)(0)
  , DESCRIPTORS    = __webpack_require__(93);

module.exports = function(NAME, wrapper, methods, common, IS_MAP, IS_WEAK){
  var Base  = global[NAME]
    , C     = Base
    , ADDER = IS_MAP ? 'set' : 'add'
    , proto = C && C.prototype
    , O     = {};
  if(!DESCRIPTORS || typeof C != 'function' || !(IS_WEAK || proto.forEach && !fails(function(){
    new C().entries().next();
  }))){
    // create collection constructor
    C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);
    redefineAll(C.prototype, methods);
    meta.NEED = true;
  } else {
    C = wrapper(function(target, iterable){
      anInstance(target, C, NAME, '_c');
      target._c = new Base;
      if(iterable != undefined)forOf(iterable, IS_MAP, target[ADDER], target);
    });
    each('add,clear,delete,forEach,get,has,set,keys,values,entries,toJSON'.split(','),function(KEY){
      var IS_ADDER = KEY == 'add' || KEY == 'set';
      if(KEY in proto && !(IS_WEAK && KEY == 'clear'))hide(C.prototype, KEY, function(a, b){
        anInstance(this, C, KEY);
        if(!IS_ADDER && IS_WEAK && !isObject(a))return KEY == 'get' ? undefined : false;
        var result = this._c[KEY](a === 0 ? 0 : a, b);
        return IS_ADDER ? this : result;
      });
    });
    if('size' in proto)dP(C.prototype, 'size', {
      get: function(){
        return this._c.size;
      }
    });
  }

  setToStringTag(C, NAME);

  O[NAME] = C;
  $export($export.G + $export.W + $export.F, O);

  if(!IS_WEAK)common.setStrong(C, NAME, IS_MAP);

  return C;
};

/***/ }),
/* 289 */
/***/ (function(module, exports) {

// fast apply, http://jsperf.lnkit.com/fast-apply/5
module.exports = function(fn, args, that){
  var un = that === undefined;
  switch(args.length){
    case 0: return un ? fn()
                      : fn.call(that);
    case 1: return un ? fn(args[0])
                      : fn.call(that, args[0]);
    case 2: return un ? fn(args[0], args[1])
                      : fn.call(that, args[0], args[1]);
    case 3: return un ? fn(args[0], args[1], args[2])
                      : fn.call(that, args[0], args[1], args[2]);
    case 4: return un ? fn(args[0], args[1], args[2], args[3])
                      : fn.call(that, args[0], args[1], args[2], args[3]);
  } return              fn.apply(that, args);
};

/***/ }),
/* 290 */
/***/ (function(module, exports, __webpack_require__) {

var global    = __webpack_require__(48)
  , macrotask = __webpack_require__(123).set
  , Observer  = global.MutationObserver || global.WebKitMutationObserver
  , process   = global.process
  , Promise   = global.Promise
  , isNode    = __webpack_require__(149)(process) == 'process';

module.exports = function(){
  var head, last, notify;

  var flush = function(){
    var parent, fn;
    if(isNode && (parent = process.domain))parent.exit();
    while(head){
      fn   = head.fn;
      head = head.next;
      try {
        fn();
      } catch(e){
        if(head)notify();
        else last = undefined;
        throw e;
      }
    } last = undefined;
    if(parent)parent.enter();
  };

  // Node.js
  if(isNode){
    notify = function(){
      process.nextTick(flush);
    };
  // browsers with MutationObserver
  } else if(Observer){
    var toggle = true
      , node   = document.createTextNode('');
    new Observer(flush).observe(node, {characterData: true}); // eslint-disable-line no-new
    notify = function(){
      node.data = toggle = !toggle;
    };
  // environments with maybe non-completely correct, but existent Promise
  } else if(Promise && Promise.resolve){
    var promise = Promise.resolve();
    notify = function(){
      promise.then(flush);
    };
  // for other environments - macrotask based on:
  // - setImmediate
  // - MessageChannel
  // - window.postMessag
  // - onreadystatechange
  // - setTimeout
  } else {
    notify = function(){
      // strange IE + webpack dev server bug - use .call(global)
      macrotask.call(global, flush);
    };
  }

  return function(fn){
    var task = {fn: fn, next: undefined};
    if(last)last.next = task;
    if(!head){
      head = task;
      notify();
    } last = task;
  };
};

/***/ }),
/* 291 */
/***/ (function(module, exports, __webpack_require__) {

// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject  = __webpack_require__(140)
  , aFunction = __webpack_require__(142)
  , SPECIES   = __webpack_require__(64)('species');
module.exports = function(O, D){
  var C = anObject(O).constructor, S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
};

/***/ }),
/* 292 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 Object.getPrototypeOf(O)
var toObject        = __webpack_require__(96)
  , $getPrototypeOf = __webpack_require__(479);

__webpack_require__(121)('getPrototypeOf', function(){
  return function getPrototypeOf(it){
    return $getPrototypeOf(toObject(it));
  };
});

/***/ }),
/* 293 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 Object.keys(O)
var toObject = __webpack_require__(96)
  , $keys    = __webpack_require__(481);

__webpack_require__(121)('keys', function(){
  return function keys(it){
    return $keys(toObject(it));
  };
});

/***/ }),
/* 294 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY            = __webpack_require__(484)
  , global             = __webpack_require__(48)
  , ctx                = __webpack_require__(49)
  , classof            = __webpack_require__(143)
  , $export            = __webpack_require__(65)
  , isObject           = __webpack_require__(95)
  , aFunction          = __webpack_require__(142)
  , anInstance         = __webpack_require__(82)
  , forOf              = __webpack_require__(60)
  , speciesConstructor = __webpack_require__(291)
  , task               = __webpack_require__(123).set
  , microtask          = __webpack_require__(290)()
  , PROMISE            = 'Promise'
  , TypeError          = global.TypeError
  , process            = global.process
  , $Promise           = global[PROMISE]
  , process            = global.process
  , isNode             = classof(process) == 'process'
  , empty              = function(){ /* empty */ }
  , Internal, GenericPromiseCapability, Wrapper;

var USE_NATIVE = !!function(){
  try {
    // correct subclassing with @@species support
    var promise     = $Promise.resolve(1)
      , FakePromise = (promise.constructor = {})[__webpack_require__(64)('species')] = function(exec){ exec(empty, empty); };
    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
    return (isNode || typeof PromiseRejectionEvent == 'function') && promise.then(empty) instanceof FakePromise;
  } catch(e){ /* empty */ }
}();

// helpers
var sameConstructor = function(a, b){
  // with library wrapper special case
  return a === b || a === $Promise && b === Wrapper;
};
var isThenable = function(it){
  var then;
  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
};
var newPromiseCapability = function(C){
  return sameConstructor($Promise, C)
    ? new PromiseCapability(C)
    : new GenericPromiseCapability(C);
};
var PromiseCapability = GenericPromiseCapability = function(C){
  var resolve, reject;
  this.promise = new C(function($$resolve, $$reject){
    if(resolve !== undefined || reject !== undefined)throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject  = $$reject;
  });
  this.resolve = aFunction(resolve);
  this.reject  = aFunction(reject);
};
var perform = function(exec){
  try {
    exec();
  } catch(e){
    return {error: e};
  }
};
var notify = function(promise, isReject){
  if(promise._n)return;
  promise._n = true;
  var chain = promise._c;
  microtask(function(){
    var value = promise._v
      , ok    = promise._s == 1
      , i     = 0;
    var run = function(reaction){
      var handler = ok ? reaction.ok : reaction.fail
        , resolve = reaction.resolve
        , reject  = reaction.reject
        , domain  = reaction.domain
        , result, then;
      try {
        if(handler){
          if(!ok){
            if(promise._h == 2)onHandleUnhandled(promise);
            promise._h = 1;
          }
          if(handler === true)result = value;
          else {
            if(domain)domain.enter();
            result = handler(value);
            if(domain)domain.exit();
          }
          if(result === reaction.promise){
            reject(TypeError('Promise-chain cycle'));
          } else if(then = isThenable(result)){
            then.call(result, resolve, reject);
          } else resolve(result);
        } else reject(value);
      } catch(e){
        reject(e);
      }
    };
    while(chain.length > i)run(chain[i++]); // variable length - can't use forEach
    promise._c = [];
    promise._n = false;
    if(isReject && !promise._h)onUnhandled(promise);
  });
};
var onUnhandled = function(promise){
  task.call(global, function(){
    var value = promise._v
      , abrupt, handler, console;
    if(isUnhandled(promise)){
      abrupt = perform(function(){
        if(isNode){
          process.emit('unhandledRejection', value, promise);
        } else if(handler = global.onunhandledrejection){
          handler({promise: promise, reason: value});
        } else if((console = global.console) && console.error){
          console.error('Unhandled promise rejection', value);
        }
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
    } promise._a = undefined;
    if(abrupt)throw abrupt.error;
  });
};
var isUnhandled = function(promise){
  if(promise._h == 1)return false;
  var chain = promise._a || promise._c
    , i     = 0
    , reaction;
  while(chain.length > i){
    reaction = chain[i++];
    if(reaction.fail || !isUnhandled(reaction.promise))return false;
  } return true;
};
var onHandleUnhandled = function(promise){
  task.call(global, function(){
    var handler;
    if(isNode){
      process.emit('rejectionHandled', promise);
    } else if(handler = global.onrejectionhandled){
      handler({promise: promise, reason: promise._v});
    }
  });
};
var $reject = function(value){
  var promise = this;
  if(promise._d)return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  promise._v = value;
  promise._s = 2;
  if(!promise._a)promise._a = promise._c.slice();
  notify(promise, true);
};
var $resolve = function(value){
  var promise = this
    , then;
  if(promise._d)return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  try {
    if(promise === value)throw TypeError("Promise can't be resolved itself");
    if(then = isThenable(value)){
      microtask(function(){
        var wrapper = {_w: promise, _d: false}; // wrap
        try {
          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
        } catch(e){
          $reject.call(wrapper, e);
        }
      });
    } else {
      promise._v = value;
      promise._s = 1;
      notify(promise, false);
    }
  } catch(e){
    $reject.call({_w: promise, _d: false}, e); // wrap
  }
};

// constructor polyfill
if(!USE_NATIVE){
  // 25.4.3.1 Promise(executor)
  $Promise = function Promise(executor){
    anInstance(this, $Promise, PROMISE, '_h');
    aFunction(executor);
    Internal.call(this);
    try {
      executor(ctx($resolve, this, 1), ctx($reject, this, 1));
    } catch(err){
      $reject.call(this, err);
    }
  };
  Internal = function Promise(executor){
    this._c = [];             // <- awaiting reactions
    this._a = undefined;      // <- checked in isUnhandled reactions
    this._s = 0;              // <- state
    this._d = false;          // <- done
    this._v = undefined;      // <- value
    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
    this._n = false;          // <- notify
  };
  Internal.prototype = __webpack_require__(83)($Promise.prototype, {
    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
    then: function then(onFulfilled, onRejected){
      var reaction    = newPromiseCapability(speciesConstructor(this, $Promise));
      reaction.ok     = typeof onFulfilled == 'function' ? onFulfilled : true;
      reaction.fail   = typeof onRejected == 'function' && onRejected;
      reaction.domain = isNode ? process.domain : undefined;
      this._c.push(reaction);
      if(this._a)this._a.push(reaction);
      if(this._s)notify(this, false);
      return reaction.promise;
    },
    // 25.4.5.1 Promise.prototype.catch(onRejected)
    'catch': function(onRejected){
      return this.then(undefined, onRejected);
    }
  });
  PromiseCapability = function(){
    var promise  = new Internal;
    this.promise = promise;
    this.resolve = ctx($resolve, promise, 1);
    this.reject  = ctx($reject, promise, 1);
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, {Promise: $Promise});
__webpack_require__(150)($Promise, PROMISE);
__webpack_require__(122)(PROMISE);
Wrapper = __webpack_require__(30)[PROMISE];

// statics
$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
  // 25.4.4.5 Promise.reject(r)
  reject: function reject(r){
    var capability = newPromiseCapability(this)
      , $$reject   = capability.reject;
    $$reject(r);
    return capability.promise;
  }
});
$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
  // 25.4.4.6 Promise.resolve(x)
  resolve: function resolve(x){
    // instanceof instead of internal slot check because we should fix it without replacement native Promise core
    if(x instanceof $Promise && sameConstructor(x.constructor, this))return x;
    var capability = newPromiseCapability(this)
      , $$resolve  = capability.resolve;
    $$resolve(x);
    return capability.promise;
  }
});
$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(477)(function(iter){
  $Promise.all(iter)['catch'](empty);
})), PROMISE, {
  // 25.4.4.1 Promise.all(iterable)
  all: function all(iterable){
    var C          = this
      , capability = newPromiseCapability(C)
      , resolve    = capability.resolve
      , reject     = capability.reject;
    var abrupt = perform(function(){
      var values    = []
        , index     = 0
        , remaining = 1;
      forOf(iterable, false, function(promise){
        var $index        = index++
          , alreadyCalled = false;
        values.push(undefined);
        remaining++;
        C.resolve(promise).then(function(value){
          if(alreadyCalled)return;
          alreadyCalled  = true;
          values[$index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if(abrupt)reject(abrupt.error);
    return capability.promise;
  },
  // 25.4.4.4 Promise.race(iterable)
  race: function race(iterable){
    var C          = this
      , capability = newPromiseCapability(C)
      , reject     = capability.reject;
    var abrupt = perform(function(){
      forOf(iterable, false, function(promise){
        C.resolve(promise).then(capability.resolve, reject);
      });
    });
    if(abrupt)reject(abrupt.error);
    return capability.promise;
  }
});

/***/ }),
/* 295 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var strong = __webpack_require__(286);

// 23.2 Set Objects
module.exports = __webpack_require__(288)('Set', function(get){
  return function Set(){ return get(this, arguments.length > 0 ? arguments[0] : undefined); };
}, {
  // 23.2.3.1 Set.prototype.add(value)
  add: function add(value){
    return strong.def(this, value = value === 0 ? 0 : value, value);
  }
}, strong);

/***/ }),
/* 296 */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/DavidBruant/Map-Set.prototype.toJSON
var $export  = __webpack_require__(65);

$export($export.P + $export.R, 'Set', {toJSON: __webpack_require__(287)('Set')});

/***/ }),
/* 297 */
/***/ (function(module, exports) {

var DOCUMENT_NODE_TYPE = 9;

/**
 * A polyfill for Element.matches()
 */
if (typeof Element !== 'undefined' && !Element.prototype.matches) {
    var proto = Element.prototype;

    proto.matches = proto.matchesSelector ||
                    proto.mozMatchesSelector ||
                    proto.msMatchesSelector ||
                    proto.oMatchesSelector ||
                    proto.webkitMatchesSelector;
}

/**
 * Finds the closest parent that matches a selector.
 *
 * @param {Element} element
 * @param {String} selector
 * @return {Function}
 */
function closest (element, selector) {
    while (element && element.nodeType !== DOCUMENT_NODE_TYPE) {
        if (typeof element.matches === 'function' &&
            element.matches(selector)) {
          return element;
        }
        element = element.parentNode;
    }
}

module.exports = closest;


/***/ }),
/* 298 */
/***/ (function(module, exports, __webpack_require__) {

var closest = __webpack_require__(297);

/**
 * Delegates event to a selector.
 *
 * @param {Element} element
 * @param {String} selector
 * @param {String} type
 * @param {Function} callback
 * @param {Boolean} useCapture
 * @return {Object}
 */
function delegate(element, selector, type, callback, useCapture) {
    var listenerFn = listener.apply(this, arguments);

    element.addEventListener(type, listenerFn, useCapture);

    return {
        destroy: function() {
            element.removeEventListener(type, listenerFn, useCapture);
        }
    }
}

/**
 * Finds closest match and invokes callback.
 *
 * @param {Element} element
 * @param {String} selector
 * @param {String} type
 * @param {Function} callback
 * @return {Function}
 */
function listener(element, selector, type, callback) {
    return function(e) {
        e.delegateTarget = closest(e.target, selector);

        if (e.delegateTarget) {
            callback.call(element, e);
        }
    }
}

module.exports = delegate;


/***/ }),
/* 299 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2015 Jed Watson.
  Based on code that is Copyright 2013-2015, Facebook, Inc.
  All rights reserved.
*/
/* global define */

(function () {
	'use strict';

	var canUseDOM = !!(
		typeof window !== 'undefined' &&
		window.document &&
		window.document.createElement
	);

	var ExecutionEnvironment = {

		canUseDOM: canUseDOM,

		canUseWorkers: typeof Worker !== 'undefined',

		canUseEventListeners:
			canUseDOM && !!(window.addEventListener || window.attachEvent),

		canUseViewport: canUseDOM && !!window.screen

	};

	if (true) {
		!(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
			return ExecutionEnvironment;
		}.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else if (typeof module !== 'undefined' && module.exports) {
		module.exports = ExecutionEnvironment;
	} else {
		window.ExecutionEnvironment = ExecutionEnvironment;
	}

}());


/***/ }),
/* 300 */,
/* 301 */,
/* 302 */,
/* 303 */,
/* 304 */,
/* 305 */,
/* 306 */,
/* 307 */,
/* 308 */,
/* 309 */,
/* 310 */,
/* 311 */,
/* 312 */,
/* 313 */,
/* 314 */,
/* 315 */,
/* 316 */,
/* 317 */,
/* 318 */,
/* 319 */,
/* 320 */,
/* 321 */,
/* 322 */,
/* 323 */,
/* 324 */,
/* 325 */,
/* 326 */,
/* 327 */,
/* 328 */,
/* 329 */,
/* 330 */,
/* 331 */,
/* 332 */,
/* 333 */,
/* 334 */,
/* 335 */,
/* 336 */,
/* 337 */,
/* 338 */,
/* 339 */,
/* 340 */,
/* 341 */,
/* 342 */,
/* 343 */,
/* 344 */,
/* 345 */,
/* 346 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * 
 */



/* eslint-disable fb-www/typeof-undefined */
/* eslint-disable no-unused-vars */

var invariant = __webpack_require__(137);

/**
 * Checks if a value is empty.
 */
function isEmpty(value) {
  if (Array.isArray(value)) {
    return value.length === 0;
  } else if (typeof value === 'object') {
    if (value) {
      !(!isIterable(value) || value.size === undefined) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'isEmpty() does not support iterable collections.') : invariant(false) : void 0;
      for (var _ in value) {
        return false;
      }
    }
    return true;
  } else {
    return !value;
  }
}

function isIterable(value) {
  if (typeof Symbol === 'undefined') {
    return false;
  }
  return value[Symbol.iterator];
}

module.exports = isEmpty;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(133)))

/***/ }),
/* 347 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * for-in <https://github.com/jonschlinkert/for-in>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */



module.exports = function forIn(obj, fn, thisArg) {
  for (var key in obj) {
    if (fn.call(thisArg, obj[key], key, obj) === false) {
      break;
    }
  }
};


/***/ }),
/* 348 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * for-own <https://github.com/jonschlinkert/for-own>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */



var forIn = __webpack_require__(347);
var hasOwn = Object.prototype.hasOwnProperty;

module.exports = function forOwn(obj, fn, thisArg) {
  forIn(obj, function(val, key) {
    if (hasOwn.call(obj, key)) {
      return fn.call(thisArg, obj[key], key, obj);
    }
  });
};


/***/ }),
/* 349 */
/***/ (function(module, exports) {

/**
 * Check if argument is a HTML element.
 *
 * @param {Object} value
 * @return {Boolean}
 */
exports.node = function(value) {
    return value !== undefined
        && value instanceof HTMLElement
        && value.nodeType === 1;
};

/**
 * Check if argument is a list of HTML elements.
 *
 * @param {Object} value
 * @return {Boolean}
 */
exports.nodeList = function(value) {
    var type = Object.prototype.toString.call(value);

    return value !== undefined
        && (type === '[object NodeList]' || type === '[object HTMLCollection]')
        && ('length' in value)
        && (value.length === 0 || exports.node(value[0]));
};

/**
 * Check if argument is a string.
 *
 * @param {Object} value
 * @return {Boolean}
 */
exports.string = function(value) {
    return typeof value === 'string'
        || value instanceof String;
};

/**
 * Check if argument is a function.
 *
 * @param {Object} value
 * @return {Boolean}
 */
exports.fn = function(value) {
    var type = Object.prototype.toString.call(value);

    return type === '[object Function]';
};


/***/ }),
/* 350 */
/***/ (function(module, exports, __webpack_require__) {

var is = __webpack_require__(349);
var delegate = __webpack_require__(298);

/**
 * Validates all params and calls the right
 * listener function based on its target type.
 *
 * @param {String|HTMLElement|HTMLCollection|NodeList} target
 * @param {String} type
 * @param {Function} callback
 * @return {Object}
 */
function listen(target, type, callback) {
    if (!target && !type && !callback) {
        throw new Error('Missing required arguments');
    }

    if (!is.string(type)) {
        throw new TypeError('Second argument must be a String');
    }

    if (!is.fn(callback)) {
        throw new TypeError('Third argument must be a Function');
    }

    if (is.node(target)) {
        return listenNode(target, type, callback);
    }
    else if (is.nodeList(target)) {
        return listenNodeList(target, type, callback);
    }
    else if (is.string(target)) {
        return listenSelector(target, type, callback);
    }
    else {
        throw new TypeError('First argument must be a String, HTMLElement, HTMLCollection, or NodeList');
    }
}

/**
 * Adds an event listener to a HTML element
 * and returns a remove listener function.
 *
 * @param {HTMLElement} node
 * @param {String} type
 * @param {Function} callback
 * @return {Object}
 */
function listenNode(node, type, callback) {
    node.addEventListener(type, callback);

    return {
        destroy: function() {
            node.removeEventListener(type, callback);
        }
    }
}

/**
 * Add an event listener to a list of HTML elements
 * and returns a remove listener function.
 *
 * @param {NodeList|HTMLCollection} nodeList
 * @param {String} type
 * @param {Function} callback
 * @return {Object}
 */
function listenNodeList(nodeList, type, callback) {
    Array.prototype.forEach.call(nodeList, function(node) {
        node.addEventListener(type, callback);
    });

    return {
        destroy: function() {
            Array.prototype.forEach.call(nodeList, function(node) {
                node.removeEventListener(type, callback);
            });
        }
    }
}

/**
 * Add an event listener to a selector
 * and returns a remove listener function.
 *
 * @param {String} selector
 * @param {String} type
 * @param {Function} callback
 * @return {Object}
 */
function listenSelector(selector, type, callback) {
    return delegate(document.body, selector, type, callback);
}

module.exports = listen;


/***/ }),
/* 351 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/*! Hammer.JS - v2.0.7 - 2016-04-22
 * http://hammerjs.github.io/
 *
 * Copyright (c) 2016 Jorik Tangelder;
 * Licensed under the MIT license */
(function(window, document, exportName, undefined) {
  'use strict';

var VENDOR_PREFIXES = ['', 'webkit', 'Moz', 'MS', 'ms', 'o'];
var TEST_ELEMENT = document.createElement('div');

var TYPE_FUNCTION = 'function';

var round = Math.round;
var abs = Math.abs;
var now = Date.now;

/**
 * set a timeout with a given scope
 * @param {Function} fn
 * @param {Number} timeout
 * @param {Object} context
 * @returns {number}
 */
function setTimeoutContext(fn, timeout, context) {
    return setTimeout(bindFn(fn, context), timeout);
}

/**
 * if the argument is an array, we want to execute the fn on each entry
 * if it aint an array we don't want to do a thing.
 * this is used by all the methods that accept a single and array argument.
 * @param {*|Array} arg
 * @param {String} fn
 * @param {Object} [context]
 * @returns {Boolean}
 */
function invokeArrayArg(arg, fn, context) {
    if (Array.isArray(arg)) {
        each(arg, context[fn], context);
        return true;
    }
    return false;
}

/**
 * walk objects and arrays
 * @param {Object} obj
 * @param {Function} iterator
 * @param {Object} context
 */
function each(obj, iterator, context) {
    var i;

    if (!obj) {
        return;
    }

    if (obj.forEach) {
        obj.forEach(iterator, context);
    } else if (obj.length !== undefined) {
        i = 0;
        while (i < obj.length) {
            iterator.call(context, obj[i], i, obj);
            i++;
        }
    } else {
        for (i in obj) {
            obj.hasOwnProperty(i) && iterator.call(context, obj[i], i, obj);
        }
    }
}

/**
 * wrap a method with a deprecation warning and stack trace
 * @param {Function} method
 * @param {String} name
 * @param {String} message
 * @returns {Function} A new function wrapping the supplied method.
 */
function deprecate(method, name, message) {
    var deprecationMessage = 'DEPRECATED METHOD: ' + name + '\n' + message + ' AT \n';
    return function() {
        var e = new Error('get-stack-trace');
        var stack = e && e.stack ? e.stack.replace(/^[^\(]+?[\n$]/gm, '')
            .replace(/^\s+at\s+/gm, '')
            .replace(/^Object.<anonymous>\s*\(/gm, '{anonymous}()@') : 'Unknown Stack Trace';

        var log = window.console && (window.console.warn || window.console.log);
        if (log) {
            log.call(window.console, deprecationMessage, stack);
        }
        return method.apply(this, arguments);
    };
}

/**
 * extend object.
 * means that properties in dest will be overwritten by the ones in src.
 * @param {Object} target
 * @param {...Object} objects_to_assign
 * @returns {Object} target
 */
var assign;
if (typeof Object.assign !== 'function') {
    assign = function assign(target) {
        if (target === undefined || target === null) {
            throw new TypeError('Cannot convert undefined or null to object');
        }

        var output = Object(target);
        for (var index = 1; index < arguments.length; index++) {
            var source = arguments[index];
            if (source !== undefined && source !== null) {
                for (var nextKey in source) {
                    if (source.hasOwnProperty(nextKey)) {
                        output[nextKey] = source[nextKey];
                    }
                }
            }
        }
        return output;
    };
} else {
    assign = Object.assign;
}

/**
 * extend object.
 * means that properties in dest will be overwritten by the ones in src.
 * @param {Object} dest
 * @param {Object} src
 * @param {Boolean} [merge=false]
 * @returns {Object} dest
 */
var extend = deprecate(function extend(dest, src, merge) {
    var keys = Object.keys(src);
    var i = 0;
    while (i < keys.length) {
        if (!merge || (merge && dest[keys[i]] === undefined)) {
            dest[keys[i]] = src[keys[i]];
        }
        i++;
    }
    return dest;
}, 'extend', 'Use `assign`.');

/**
 * merge the values from src in the dest.
 * means that properties that exist in dest will not be overwritten by src
 * @param {Object} dest
 * @param {Object} src
 * @returns {Object} dest
 */
var merge = deprecate(function merge(dest, src) {
    return extend(dest, src, true);
}, 'merge', 'Use `assign`.');

/**
 * simple class inheritance
 * @param {Function} child
 * @param {Function} base
 * @param {Object} [properties]
 */
function inherit(child, base, properties) {
    var baseP = base.prototype,
        childP;

    childP = child.prototype = Object.create(baseP);
    childP.constructor = child;
    childP._super = baseP;

    if (properties) {
        assign(childP, properties);
    }
}

/**
 * simple function bind
 * @param {Function} fn
 * @param {Object} context
 * @returns {Function}
 */
function bindFn(fn, context) {
    return function boundFn() {
        return fn.apply(context, arguments);
    };
}

/**
 * let a boolean value also be a function that must return a boolean
 * this first item in args will be used as the context
 * @param {Boolean|Function} val
 * @param {Array} [args]
 * @returns {Boolean}
 */
function boolOrFn(val, args) {
    if (typeof val == TYPE_FUNCTION) {
        return val.apply(args ? args[0] || undefined : undefined, args);
    }
    return val;
}

/**
 * use the val2 when val1 is undefined
 * @param {*} val1
 * @param {*} val2
 * @returns {*}
 */
function ifUndefined(val1, val2) {
    return (val1 === undefined) ? val2 : val1;
}

/**
 * addEventListener with multiple events at once
 * @param {EventTarget} target
 * @param {String} types
 * @param {Function} handler
 */
function addEventListeners(target, types, handler) {
    each(splitStr(types), function(type) {
        target.addEventListener(type, handler, false);
    });
}

/**
 * removeEventListener with multiple events at once
 * @param {EventTarget} target
 * @param {String} types
 * @param {Function} handler
 */
function removeEventListeners(target, types, handler) {
    each(splitStr(types), function(type) {
        target.removeEventListener(type, handler, false);
    });
}

/**
 * find if a node is in the given parent
 * @method hasParent
 * @param {HTMLElement} node
 * @param {HTMLElement} parent
 * @return {Boolean} found
 */
function hasParent(node, parent) {
    while (node) {
        if (node == parent) {
            return true;
        }
        node = node.parentNode;
    }
    return false;
}

/**
 * small indexOf wrapper
 * @param {String} str
 * @param {String} find
 * @returns {Boolean} found
 */
function inStr(str, find) {
    return str.indexOf(find) > -1;
}

/**
 * split string on whitespace
 * @param {String} str
 * @returns {Array} words
 */
function splitStr(str) {
    return str.trim().split(/\s+/g);
}

/**
 * find if a array contains the object using indexOf or a simple polyFill
 * @param {Array} src
 * @param {String} find
 * @param {String} [findByKey]
 * @return {Boolean|Number} false when not found, or the index
 */
function inArray(src, find, findByKey) {
    if (src.indexOf && !findByKey) {
        return src.indexOf(find);
    } else {
        var i = 0;
        while (i < src.length) {
            if ((findByKey && src[i][findByKey] == find) || (!findByKey && src[i] === find)) {
                return i;
            }
            i++;
        }
        return -1;
    }
}

/**
 * convert array-like objects to real arrays
 * @param {Object} obj
 * @returns {Array}
 */
function toArray(obj) {
    return Array.prototype.slice.call(obj, 0);
}

/**
 * unique array with objects based on a key (like 'id') or just by the array's value
 * @param {Array} src [{id:1},{id:2},{id:1}]
 * @param {String} [key]
 * @param {Boolean} [sort=False]
 * @returns {Array} [{id:1},{id:2}]
 */
function uniqueArray(src, key, sort) {
    var results = [];
    var values = [];
    var i = 0;

    while (i < src.length) {
        var val = key ? src[i][key] : src[i];
        if (inArray(values, val) < 0) {
            results.push(src[i]);
        }
        values[i] = val;
        i++;
    }

    if (sort) {
        if (!key) {
            results = results.sort();
        } else {
            results = results.sort(function sortUniqueArray(a, b) {
                return a[key] > b[key];
            });
        }
    }

    return results;
}

/**
 * get the prefixed property
 * @param {Object} obj
 * @param {String} property
 * @returns {String|Undefined} prefixed
 */
function prefixed(obj, property) {
    var prefix, prop;
    var camelProp = property[0].toUpperCase() + property.slice(1);

    var i = 0;
    while (i < VENDOR_PREFIXES.length) {
        prefix = VENDOR_PREFIXES[i];
        prop = (prefix) ? prefix + camelProp : property;

        if (prop in obj) {
            return prop;
        }
        i++;
    }
    return undefined;
}

/**
 * get a unique id
 * @returns {number} uniqueId
 */
var _uniqueId = 1;
function uniqueId() {
    return _uniqueId++;
}

/**
 * get the window object of an element
 * @param {HTMLElement} element
 * @returns {DocumentView|Window}
 */
function getWindowForElement(element) {
    var doc = element.ownerDocument || element;
    return (doc.defaultView || doc.parentWindow || window);
}

var MOBILE_REGEX = /mobile|tablet|ip(ad|hone|od)|android/i;

var SUPPORT_TOUCH = ('ontouchstart' in window);
var SUPPORT_POINTER_EVENTS = prefixed(window, 'PointerEvent') !== undefined;
var SUPPORT_ONLY_TOUCH = SUPPORT_TOUCH && MOBILE_REGEX.test(navigator.userAgent);

var INPUT_TYPE_TOUCH = 'touch';
var INPUT_TYPE_PEN = 'pen';
var INPUT_TYPE_MOUSE = 'mouse';
var INPUT_TYPE_KINECT = 'kinect';

var COMPUTE_INTERVAL = 25;

var INPUT_START = 1;
var INPUT_MOVE = 2;
var INPUT_END = 4;
var INPUT_CANCEL = 8;

var DIRECTION_NONE = 1;
var DIRECTION_LEFT = 2;
var DIRECTION_RIGHT = 4;
var DIRECTION_UP = 8;
var DIRECTION_DOWN = 16;

var DIRECTION_HORIZONTAL = DIRECTION_LEFT | DIRECTION_RIGHT;
var DIRECTION_VERTICAL = DIRECTION_UP | DIRECTION_DOWN;
var DIRECTION_ALL = DIRECTION_HORIZONTAL | DIRECTION_VERTICAL;

var PROPS_XY = ['x', 'y'];
var PROPS_CLIENT_XY = ['clientX', 'clientY'];

/**
 * create new input type manager
 * @param {Manager} manager
 * @param {Function} callback
 * @returns {Input}
 * @constructor
 */
function Input(manager, callback) {
    var self = this;
    this.manager = manager;
    this.callback = callback;
    this.element = manager.element;
    this.target = manager.options.inputTarget;

    // smaller wrapper around the handler, for the scope and the enabled state of the manager,
    // so when disabled the input events are completely bypassed.
    this.domHandler = function(ev) {
        if (boolOrFn(manager.options.enable, [manager])) {
            self.handler(ev);
        }
    };

    this.init();

}

Input.prototype = {
    /**
     * should handle the inputEvent data and trigger the callback
     * @virtual
     */
    handler: function() { },

    /**
     * bind the events
     */
    init: function() {
        this.evEl && addEventListeners(this.element, this.evEl, this.domHandler);
        this.evTarget && addEventListeners(this.target, this.evTarget, this.domHandler);
        this.evWin && addEventListeners(getWindowForElement(this.element), this.evWin, this.domHandler);
    },

    /**
     * unbind the events
     */
    destroy: function() {
        this.evEl && removeEventListeners(this.element, this.evEl, this.domHandler);
        this.evTarget && removeEventListeners(this.target, this.evTarget, this.domHandler);
        this.evWin && removeEventListeners(getWindowForElement(this.element), this.evWin, this.domHandler);
    }
};

/**
 * create new input type manager
 * called by the Manager constructor
 * @param {Hammer} manager
 * @returns {Input}
 */
function createInputInstance(manager) {
    var Type;
    var inputClass = manager.options.inputClass;

    if (inputClass) {
        Type = inputClass;
    } else if (SUPPORT_POINTER_EVENTS) {
        Type = PointerEventInput;
    } else if (SUPPORT_ONLY_TOUCH) {
        Type = TouchInput;
    } else if (!SUPPORT_TOUCH) {
        Type = MouseInput;
    } else {
        Type = TouchMouseInput;
    }
    return new (Type)(manager, inputHandler);
}

/**
 * handle input events
 * @param {Manager} manager
 * @param {String} eventType
 * @param {Object} input
 */
function inputHandler(manager, eventType, input) {
    var pointersLen = input.pointers.length;
    var changedPointersLen = input.changedPointers.length;
    var isFirst = (eventType & INPUT_START && (pointersLen - changedPointersLen === 0));
    var isFinal = (eventType & (INPUT_END | INPUT_CANCEL) && (pointersLen - changedPointersLen === 0));

    input.isFirst = !!isFirst;
    input.isFinal = !!isFinal;

    if (isFirst) {
        manager.session = {};
    }

    // source event is the normalized value of the domEvents
    // like 'touchstart, mouseup, pointerdown'
    input.eventType = eventType;

    // compute scale, rotation etc
    computeInputData(manager, input);

    // emit secret event
    manager.emit('hammer.input', input);

    manager.recognize(input);
    manager.session.prevInput = input;
}

/**
 * extend the data with some usable properties like scale, rotate, velocity etc
 * @param {Object} manager
 * @param {Object} input
 */
function computeInputData(manager, input) {
    var session = manager.session;
    var pointers = input.pointers;
    var pointersLength = pointers.length;

    // store the first input to calculate the distance and direction
    if (!session.firstInput) {
        session.firstInput = simpleCloneInputData(input);
    }

    // to compute scale and rotation we need to store the multiple touches
    if (pointersLength > 1 && !session.firstMultiple) {
        session.firstMultiple = simpleCloneInputData(input);
    } else if (pointersLength === 1) {
        session.firstMultiple = false;
    }

    var firstInput = session.firstInput;
    var firstMultiple = session.firstMultiple;
    var offsetCenter = firstMultiple ? firstMultiple.center : firstInput.center;

    var center = input.center = getCenter(pointers);
    input.timeStamp = now();
    input.deltaTime = input.timeStamp - firstInput.timeStamp;

    input.angle = getAngle(offsetCenter, center);
    input.distance = getDistance(offsetCenter, center);

    computeDeltaXY(session, input);
    input.offsetDirection = getDirection(input.deltaX, input.deltaY);

    var overallVelocity = getVelocity(input.deltaTime, input.deltaX, input.deltaY);
    input.overallVelocityX = overallVelocity.x;
    input.overallVelocityY = overallVelocity.y;
    input.overallVelocity = (abs(overallVelocity.x) > abs(overallVelocity.y)) ? overallVelocity.x : overallVelocity.y;

    input.scale = firstMultiple ? getScale(firstMultiple.pointers, pointers) : 1;
    input.rotation = firstMultiple ? getRotation(firstMultiple.pointers, pointers) : 0;

    input.maxPointers = !session.prevInput ? input.pointers.length : ((input.pointers.length >
        session.prevInput.maxPointers) ? input.pointers.length : session.prevInput.maxPointers);

    computeIntervalInputData(session, input);

    // find the correct target
    var target = manager.element;
    if (hasParent(input.srcEvent.target, target)) {
        target = input.srcEvent.target;
    }
    input.target = target;
}

function computeDeltaXY(session, input) {
    var center = input.center;
    var offset = session.offsetDelta || {};
    var prevDelta = session.prevDelta || {};
    var prevInput = session.prevInput || {};

    if (input.eventType === INPUT_START || prevInput.eventType === INPUT_END) {
        prevDelta = session.prevDelta = {
            x: prevInput.deltaX || 0,
            y: prevInput.deltaY || 0
        };

        offset = session.offsetDelta = {
            x: center.x,
            y: center.y
        };
    }

    input.deltaX = prevDelta.x + (center.x - offset.x);
    input.deltaY = prevDelta.y + (center.y - offset.y);
}

/**
 * velocity is calculated every x ms
 * @param {Object} session
 * @param {Object} input
 */
function computeIntervalInputData(session, input) {
    var last = session.lastInterval || input,
        deltaTime = input.timeStamp - last.timeStamp,
        velocity, velocityX, velocityY, direction;

    if (input.eventType != INPUT_CANCEL && (deltaTime > COMPUTE_INTERVAL || last.velocity === undefined)) {
        var deltaX = input.deltaX - last.deltaX;
        var deltaY = input.deltaY - last.deltaY;

        var v = getVelocity(deltaTime, deltaX, deltaY);
        velocityX = v.x;
        velocityY = v.y;
        velocity = (abs(v.x) > abs(v.y)) ? v.x : v.y;
        direction = getDirection(deltaX, deltaY);

        session.lastInterval = input;
    } else {
        // use latest velocity info if it doesn't overtake a minimum period
        velocity = last.velocity;
        velocityX = last.velocityX;
        velocityY = last.velocityY;
        direction = last.direction;
    }

    input.velocity = velocity;
    input.velocityX = velocityX;
    input.velocityY = velocityY;
    input.direction = direction;
}

/**
 * create a simple clone from the input used for storage of firstInput and firstMultiple
 * @param {Object} input
 * @returns {Object} clonedInputData
 */
function simpleCloneInputData(input) {
    // make a simple copy of the pointers because we will get a reference if we don't
    // we only need clientXY for the calculations
    var pointers = [];
    var i = 0;
    while (i < input.pointers.length) {
        pointers[i] = {
            clientX: round(input.pointers[i].clientX),
            clientY: round(input.pointers[i].clientY)
        };
        i++;
    }

    return {
        timeStamp: now(),
        pointers: pointers,
        center: getCenter(pointers),
        deltaX: input.deltaX,
        deltaY: input.deltaY
    };
}

/**
 * get the center of all the pointers
 * @param {Array} pointers
 * @return {Object} center contains `x` and `y` properties
 */
function getCenter(pointers) {
    var pointersLength = pointers.length;

    // no need to loop when only one touch
    if (pointersLength === 1) {
        return {
            x: round(pointers[0].clientX),
            y: round(pointers[0].clientY)
        };
    }

    var x = 0, y = 0, i = 0;
    while (i < pointersLength) {
        x += pointers[i].clientX;
        y += pointers[i].clientY;
        i++;
    }

    return {
        x: round(x / pointersLength),
        y: round(y / pointersLength)
    };
}

/**
 * calculate the velocity between two points. unit is in px per ms.
 * @param {Number} deltaTime
 * @param {Number} x
 * @param {Number} y
 * @return {Object} velocity `x` and `y`
 */
function getVelocity(deltaTime, x, y) {
    return {
        x: x / deltaTime || 0,
        y: y / deltaTime || 0
    };
}

/**
 * get the direction between two points
 * @param {Number} x
 * @param {Number} y
 * @return {Number} direction
 */
function getDirection(x, y) {
    if (x === y) {
        return DIRECTION_NONE;
    }

    if (abs(x) >= abs(y)) {
        return x < 0 ? DIRECTION_LEFT : DIRECTION_RIGHT;
    }
    return y < 0 ? DIRECTION_UP : DIRECTION_DOWN;
}

/**
 * calculate the absolute distance between two points
 * @param {Object} p1 {x, y}
 * @param {Object} p2 {x, y}
 * @param {Array} [props] containing x and y keys
 * @return {Number} distance
 */
function getDistance(p1, p2, props) {
    if (!props) {
        props = PROPS_XY;
    }
    var x = p2[props[0]] - p1[props[0]],
        y = p2[props[1]] - p1[props[1]];

    return Math.sqrt((x * x) + (y * y));
}

/**
 * calculate the angle between two coordinates
 * @param {Object} p1
 * @param {Object} p2
 * @param {Array} [props] containing x and y keys
 * @return {Number} angle
 */
function getAngle(p1, p2, props) {
    if (!props) {
        props = PROPS_XY;
    }
    var x = p2[props[0]] - p1[props[0]],
        y = p2[props[1]] - p1[props[1]];
    return Math.atan2(y, x) * 180 / Math.PI;
}

/**
 * calculate the rotation degrees between two pointersets
 * @param {Array} start array of pointers
 * @param {Array} end array of pointers
 * @return {Number} rotation
 */
function getRotation(start, end) {
    return getAngle(end[1], end[0], PROPS_CLIENT_XY) + getAngle(start[1], start[0], PROPS_CLIENT_XY);
}

/**
 * calculate the scale factor between two pointersets
 * no scale is 1, and goes down to 0 when pinched together, and bigger when pinched out
 * @param {Array} start array of pointers
 * @param {Array} end array of pointers
 * @return {Number} scale
 */
function getScale(start, end) {
    return getDistance(end[0], end[1], PROPS_CLIENT_XY) / getDistance(start[0], start[1], PROPS_CLIENT_XY);
}

var MOUSE_INPUT_MAP = {
    mousedown: INPUT_START,
    mousemove: INPUT_MOVE,
    mouseup: INPUT_END
};

var MOUSE_ELEMENT_EVENTS = 'mousedown';
var MOUSE_WINDOW_EVENTS = 'mousemove mouseup';

/**
 * Mouse events input
 * @constructor
 * @extends Input
 */
function MouseInput() {
    this.evEl = MOUSE_ELEMENT_EVENTS;
    this.evWin = MOUSE_WINDOW_EVENTS;

    this.pressed = false; // mousedown state

    Input.apply(this, arguments);
}

inherit(MouseInput, Input, {
    /**
     * handle mouse events
     * @param {Object} ev
     */
    handler: function MEhandler(ev) {
        var eventType = MOUSE_INPUT_MAP[ev.type];

        // on start we want to have the left mouse button down
        if (eventType & INPUT_START && ev.button === 0) {
            this.pressed = true;
        }

        if (eventType & INPUT_MOVE && ev.which !== 1) {
            eventType = INPUT_END;
        }

        // mouse must be down
        if (!this.pressed) {
            return;
        }

        if (eventType & INPUT_END) {
            this.pressed = false;
        }

        this.callback(this.manager, eventType, {
            pointers: [ev],
            changedPointers: [ev],
            pointerType: INPUT_TYPE_MOUSE,
            srcEvent: ev
        });
    }
});

var POINTER_INPUT_MAP = {
    pointerdown: INPUT_START,
    pointermove: INPUT_MOVE,
    pointerup: INPUT_END,
    pointercancel: INPUT_CANCEL,
    pointerout: INPUT_CANCEL
};

// in IE10 the pointer types is defined as an enum
var IE10_POINTER_TYPE_ENUM = {
    2: INPUT_TYPE_TOUCH,
    3: INPUT_TYPE_PEN,
    4: INPUT_TYPE_MOUSE,
    5: INPUT_TYPE_KINECT // see https://twitter.com/jacobrossi/status/480596438489890816
};

var POINTER_ELEMENT_EVENTS = 'pointerdown';
var POINTER_WINDOW_EVENTS = 'pointermove pointerup pointercancel';

// IE10 has prefixed support, and case-sensitive
if (window.MSPointerEvent && !window.PointerEvent) {
    POINTER_ELEMENT_EVENTS = 'MSPointerDown';
    POINTER_WINDOW_EVENTS = 'MSPointerMove MSPointerUp MSPointerCancel';
}

/**
 * Pointer events input
 * @constructor
 * @extends Input
 */
function PointerEventInput() {
    this.evEl = POINTER_ELEMENT_EVENTS;
    this.evWin = POINTER_WINDOW_EVENTS;

    Input.apply(this, arguments);

    this.store = (this.manager.session.pointerEvents = []);
}

inherit(PointerEventInput, Input, {
    /**
     * handle mouse events
     * @param {Object} ev
     */
    handler: function PEhandler(ev) {
        var store = this.store;
        var removePointer = false;

        var eventTypeNormalized = ev.type.toLowerCase().replace('ms', '');
        var eventType = POINTER_INPUT_MAP[eventTypeNormalized];
        var pointerType = IE10_POINTER_TYPE_ENUM[ev.pointerType] || ev.pointerType;

        var isTouch = (pointerType == INPUT_TYPE_TOUCH);

        // get index of the event in the store
        var storeIndex = inArray(store, ev.pointerId, 'pointerId');

        // start and mouse must be down
        if (eventType & INPUT_START && (ev.button === 0 || isTouch)) {
            if (storeIndex < 0) {
                store.push(ev);
                storeIndex = store.length - 1;
            }
        } else if (eventType & (INPUT_END | INPUT_CANCEL)) {
            removePointer = true;
        }

        // it not found, so the pointer hasn't been down (so it's probably a hover)
        if (storeIndex < 0) {
            return;
        }

        // update the event in the store
        store[storeIndex] = ev;

        this.callback(this.manager, eventType, {
            pointers: store,
            changedPointers: [ev],
            pointerType: pointerType,
            srcEvent: ev
        });

        if (removePointer) {
            // remove from the store
            store.splice(storeIndex, 1);
        }
    }
});

var SINGLE_TOUCH_INPUT_MAP = {
    touchstart: INPUT_START,
    touchmove: INPUT_MOVE,
    touchend: INPUT_END,
    touchcancel: INPUT_CANCEL
};

var SINGLE_TOUCH_TARGET_EVENTS = 'touchstart';
var SINGLE_TOUCH_WINDOW_EVENTS = 'touchstart touchmove touchend touchcancel';

/**
 * Touch events input
 * @constructor
 * @extends Input
 */
function SingleTouchInput() {
    this.evTarget = SINGLE_TOUCH_TARGET_EVENTS;
    this.evWin = SINGLE_TOUCH_WINDOW_EVENTS;
    this.started = false;

    Input.apply(this, arguments);
}

inherit(SingleTouchInput, Input, {
    handler: function TEhandler(ev) {
        var type = SINGLE_TOUCH_INPUT_MAP[ev.type];

        // should we handle the touch events?
        if (type === INPUT_START) {
            this.started = true;
        }

        if (!this.started) {
            return;
        }

        var touches = normalizeSingleTouches.call(this, ev, type);

        // when done, reset the started state
        if (type & (INPUT_END | INPUT_CANCEL) && touches[0].length - touches[1].length === 0) {
            this.started = false;
        }

        this.callback(this.manager, type, {
            pointers: touches[0],
            changedPointers: touches[1],
            pointerType: INPUT_TYPE_TOUCH,
            srcEvent: ev
        });
    }
});

/**
 * @this {TouchInput}
 * @param {Object} ev
 * @param {Number} type flag
 * @returns {undefined|Array} [all, changed]
 */
function normalizeSingleTouches(ev, type) {
    var all = toArray(ev.touches);
    var changed = toArray(ev.changedTouches);

    if (type & (INPUT_END | INPUT_CANCEL)) {
        all = uniqueArray(all.concat(changed), 'identifier', true);
    }

    return [all, changed];
}

var TOUCH_INPUT_MAP = {
    touchstart: INPUT_START,
    touchmove: INPUT_MOVE,
    touchend: INPUT_END,
    touchcancel: INPUT_CANCEL
};

var TOUCH_TARGET_EVENTS = 'touchstart touchmove touchend touchcancel';

/**
 * Multi-user touch events input
 * @constructor
 * @extends Input
 */
function TouchInput() {
    this.evTarget = TOUCH_TARGET_EVENTS;
    this.targetIds = {};

    Input.apply(this, arguments);
}

inherit(TouchInput, Input, {
    handler: function MTEhandler(ev) {
        var type = TOUCH_INPUT_MAP[ev.type];
        var touches = getTouches.call(this, ev, type);
        if (!touches) {
            return;
        }

        this.callback(this.manager, type, {
            pointers: touches[0],
            changedPointers: touches[1],
            pointerType: INPUT_TYPE_TOUCH,
            srcEvent: ev
        });
    }
});

/**
 * @this {TouchInput}
 * @param {Object} ev
 * @param {Number} type flag
 * @returns {undefined|Array} [all, changed]
 */
function getTouches(ev, type) {
    var allTouches = toArray(ev.touches);
    var targetIds = this.targetIds;

    // when there is only one touch, the process can be simplified
    if (type & (INPUT_START | INPUT_MOVE) && allTouches.length === 1) {
        targetIds[allTouches[0].identifier] = true;
        return [allTouches, allTouches];
    }

    var i,
        targetTouches,
        changedTouches = toArray(ev.changedTouches),
        changedTargetTouches = [],
        target = this.target;

    // get target touches from touches
    targetTouches = allTouches.filter(function(touch) {
        return hasParent(touch.target, target);
    });

    // collect touches
    if (type === INPUT_START) {
        i = 0;
        while (i < targetTouches.length) {
            targetIds[targetTouches[i].identifier] = true;
            i++;
        }
    }

    // filter changed touches to only contain touches that exist in the collected target ids
    i = 0;
    while (i < changedTouches.length) {
        if (targetIds[changedTouches[i].identifier]) {
            changedTargetTouches.push(changedTouches[i]);
        }

        // cleanup removed touches
        if (type & (INPUT_END | INPUT_CANCEL)) {
            delete targetIds[changedTouches[i].identifier];
        }
        i++;
    }

    if (!changedTargetTouches.length) {
        return;
    }

    return [
        // merge targetTouches with changedTargetTouches so it contains ALL touches, including 'end' and 'cancel'
        uniqueArray(targetTouches.concat(changedTargetTouches), 'identifier', true),
        changedTargetTouches
    ];
}

/**
 * Combined touch and mouse input
 *
 * Touch has a higher priority then mouse, and while touching no mouse events are allowed.
 * This because touch devices also emit mouse events while doing a touch.
 *
 * @constructor
 * @extends Input
 */

var DEDUP_TIMEOUT = 2500;
var DEDUP_DISTANCE = 25;

function TouchMouseInput() {
    Input.apply(this, arguments);

    var handler = bindFn(this.handler, this);
    this.touch = new TouchInput(this.manager, handler);
    this.mouse = new MouseInput(this.manager, handler);

    this.primaryTouch = null;
    this.lastTouches = [];
}

inherit(TouchMouseInput, Input, {
    /**
     * handle mouse and touch events
     * @param {Hammer} manager
     * @param {String} inputEvent
     * @param {Object} inputData
     */
    handler: function TMEhandler(manager, inputEvent, inputData) {
        var isTouch = (inputData.pointerType == INPUT_TYPE_TOUCH),
            isMouse = (inputData.pointerType == INPUT_TYPE_MOUSE);

        if (isMouse && inputData.sourceCapabilities && inputData.sourceCapabilities.firesTouchEvents) {
            return;
        }

        // when we're in a touch event, record touches to  de-dupe synthetic mouse event
        if (isTouch) {
            recordTouches.call(this, inputEvent, inputData);
        } else if (isMouse && isSyntheticEvent.call(this, inputData)) {
            return;
        }

        this.callback(manager, inputEvent, inputData);
    },

    /**
     * remove the event listeners
     */
    destroy: function destroy() {
        this.touch.destroy();
        this.mouse.destroy();
    }
});

function recordTouches(eventType, eventData) {
    if (eventType & INPUT_START) {
        this.primaryTouch = eventData.changedPointers[0].identifier;
        setLastTouch.call(this, eventData);
    } else if (eventType & (INPUT_END | INPUT_CANCEL)) {
        setLastTouch.call(this, eventData);
    }
}

function setLastTouch(eventData) {
    var touch = eventData.changedPointers[0];

    if (touch.identifier === this.primaryTouch) {
        var lastTouch = {x: touch.clientX, y: touch.clientY};
        this.lastTouches.push(lastTouch);
        var lts = this.lastTouches;
        var removeLastTouch = function() {
            var i = lts.indexOf(lastTouch);
            if (i > -1) {
                lts.splice(i, 1);
            }
        };
        setTimeout(removeLastTouch, DEDUP_TIMEOUT);
    }
}

function isSyntheticEvent(eventData) {
    var x = eventData.srcEvent.clientX, y = eventData.srcEvent.clientY;
    for (var i = 0; i < this.lastTouches.length; i++) {
        var t = this.lastTouches[i];
        var dx = Math.abs(x - t.x), dy = Math.abs(y - t.y);
        if (dx <= DEDUP_DISTANCE && dy <= DEDUP_DISTANCE) {
            return true;
        }
    }
    return false;
}

var PREFIXED_TOUCH_ACTION = prefixed(TEST_ELEMENT.style, 'touchAction');
var NATIVE_TOUCH_ACTION = PREFIXED_TOUCH_ACTION !== undefined;

// magical touchAction value
var TOUCH_ACTION_COMPUTE = 'compute';
var TOUCH_ACTION_AUTO = 'auto';
var TOUCH_ACTION_MANIPULATION = 'manipulation'; // not implemented
var TOUCH_ACTION_NONE = 'none';
var TOUCH_ACTION_PAN_X = 'pan-x';
var TOUCH_ACTION_PAN_Y = 'pan-y';
var TOUCH_ACTION_MAP = getTouchActionProps();

/**
 * Touch Action
 * sets the touchAction property or uses the js alternative
 * @param {Manager} manager
 * @param {String} value
 * @constructor
 */
function TouchAction(manager, value) {
    this.manager = manager;
    this.set(value);
}

TouchAction.prototype = {
    /**
     * set the touchAction value on the element or enable the polyfill
     * @param {String} value
     */
    set: function(value) {
        // find out the touch-action by the event handlers
        if (value == TOUCH_ACTION_COMPUTE) {
            value = this.compute();
        }

        if (NATIVE_TOUCH_ACTION && this.manager.element.style && TOUCH_ACTION_MAP[value]) {
            this.manager.element.style[PREFIXED_TOUCH_ACTION] = value;
        }
        this.actions = value.toLowerCase().trim();
    },

    /**
     * just re-set the touchAction value
     */
    update: function() {
        this.set(this.manager.options.touchAction);
    },

    /**
     * compute the value for the touchAction property based on the recognizer's settings
     * @returns {String} value
     */
    compute: function() {
        var actions = [];
        each(this.manager.recognizers, function(recognizer) {
            if (boolOrFn(recognizer.options.enable, [recognizer])) {
                actions = actions.concat(recognizer.getTouchAction());
            }
        });
        return cleanTouchActions(actions.join(' '));
    },

    /**
     * this method is called on each input cycle and provides the preventing of the browser behavior
     * @param {Object} input
     */
    preventDefaults: function(input) {
        var srcEvent = input.srcEvent;
        var direction = input.offsetDirection;

        // if the touch action did prevented once this session
        if (this.manager.session.prevented) {
            srcEvent.preventDefault();
            return;
        }

        var actions = this.actions;
        var hasNone = inStr(actions, TOUCH_ACTION_NONE) && !TOUCH_ACTION_MAP[TOUCH_ACTION_NONE];
        var hasPanY = inStr(actions, TOUCH_ACTION_PAN_Y) && !TOUCH_ACTION_MAP[TOUCH_ACTION_PAN_Y];
        var hasPanX = inStr(actions, TOUCH_ACTION_PAN_X) && !TOUCH_ACTION_MAP[TOUCH_ACTION_PAN_X];

        if (hasNone) {
            //do not prevent defaults if this is a tap gesture

            var isTapPointer = input.pointers.length === 1;
            var isTapMovement = input.distance < 2;
            var isTapTouchTime = input.deltaTime < 250;

            if (isTapPointer && isTapMovement && isTapTouchTime) {
                return;
            }
        }

        if (hasPanX && hasPanY) {
            // `pan-x pan-y` means browser handles all scrolling/panning, do not prevent
            return;
        }

        if (hasNone ||
            (hasPanY && direction & DIRECTION_HORIZONTAL) ||
            (hasPanX && direction & DIRECTION_VERTICAL)) {
            return this.preventSrc(srcEvent);
        }
    },

    /**
     * call preventDefault to prevent the browser's default behavior (scrolling in most cases)
     * @param {Object} srcEvent
     */
    preventSrc: function(srcEvent) {
        this.manager.session.prevented = true;
        srcEvent.preventDefault();
    }
};

/**
 * when the touchActions are collected they are not a valid value, so we need to clean things up. *
 * @param {String} actions
 * @returns {*}
 */
function cleanTouchActions(actions) {
    // none
    if (inStr(actions, TOUCH_ACTION_NONE)) {
        return TOUCH_ACTION_NONE;
    }

    var hasPanX = inStr(actions, TOUCH_ACTION_PAN_X);
    var hasPanY = inStr(actions, TOUCH_ACTION_PAN_Y);

    // if both pan-x and pan-y are set (different recognizers
    // for different directions, e.g. horizontal pan but vertical swipe?)
    // we need none (as otherwise with pan-x pan-y combined none of these
    // recognizers will work, since the browser would handle all panning
    if (hasPanX && hasPanY) {
        return TOUCH_ACTION_NONE;
    }

    // pan-x OR pan-y
    if (hasPanX || hasPanY) {
        return hasPanX ? TOUCH_ACTION_PAN_X : TOUCH_ACTION_PAN_Y;
    }

    // manipulation
    if (inStr(actions, TOUCH_ACTION_MANIPULATION)) {
        return TOUCH_ACTION_MANIPULATION;
    }

    return TOUCH_ACTION_AUTO;
}

function getTouchActionProps() {
    if (!NATIVE_TOUCH_ACTION) {
        return false;
    }
    var touchMap = {};
    var cssSupports = window.CSS && window.CSS.supports;
    ['auto', 'manipulation', 'pan-y', 'pan-x', 'pan-x pan-y', 'none'].forEach(function(val) {

        // If css.supports is not supported but there is native touch-action assume it supports
        // all values. This is the case for IE 10 and 11.
        touchMap[val] = cssSupports ? window.CSS.supports('touch-action', val) : true;
    });
    return touchMap;
}

/**
 * Recognizer flow explained; *
 * All recognizers have the initial state of POSSIBLE when a input session starts.
 * The definition of a input session is from the first input until the last input, with all it's movement in it. *
 * Example session for mouse-input: mousedown -> mousemove -> mouseup
 *
 * On each recognizing cycle (see Manager.recognize) the .recognize() method is executed
 * which determines with state it should be.
 *
 * If the recognizer has the state FAILED, CANCELLED or RECOGNIZED (equals ENDED), it is reset to
 * POSSIBLE to give it another change on the next cycle.
 *
 *               Possible
 *                  |
 *            +-----+---------------+
 *            |                     |
 *      +-----+-----+               |
 *      |           |               |
 *   Failed      Cancelled          |
 *                          +-------+------+
 *                          |              |
 *                      Recognized       Began
 *                                         |
 *                                      Changed
 *                                         |
 *                                  Ended/Recognized
 */
var STATE_POSSIBLE = 1;
var STATE_BEGAN = 2;
var STATE_CHANGED = 4;
var STATE_ENDED = 8;
var STATE_RECOGNIZED = STATE_ENDED;
var STATE_CANCELLED = 16;
var STATE_FAILED = 32;

/**
 * Recognizer
 * Every recognizer needs to extend from this class.
 * @constructor
 * @param {Object} options
 */
function Recognizer(options) {
    this.options = assign({}, this.defaults, options || {});

    this.id = uniqueId();

    this.manager = null;

    // default is enable true
    this.options.enable = ifUndefined(this.options.enable, true);

    this.state = STATE_POSSIBLE;

    this.simultaneous = {};
    this.requireFail = [];
}

Recognizer.prototype = {
    /**
     * @virtual
     * @type {Object}
     */
    defaults: {},

    /**
     * set options
     * @param {Object} options
     * @return {Recognizer}
     */
    set: function(options) {
        assign(this.options, options);

        // also update the touchAction, in case something changed about the directions/enabled state
        this.manager && this.manager.touchAction.update();
        return this;
    },

    /**
     * recognize simultaneous with an other recognizer.
     * @param {Recognizer} otherRecognizer
     * @returns {Recognizer} this
     */
    recognizeWith: function(otherRecognizer) {
        if (invokeArrayArg(otherRecognizer, 'recognizeWith', this)) {
            return this;
        }

        var simultaneous = this.simultaneous;
        otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
        if (!simultaneous[otherRecognizer.id]) {
            simultaneous[otherRecognizer.id] = otherRecognizer;
            otherRecognizer.recognizeWith(this);
        }
        return this;
    },

    /**
     * drop the simultaneous link. it doesnt remove the link on the other recognizer.
     * @param {Recognizer} otherRecognizer
     * @returns {Recognizer} this
     */
    dropRecognizeWith: function(otherRecognizer) {
        if (invokeArrayArg(otherRecognizer, 'dropRecognizeWith', this)) {
            return this;
        }

        otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
        delete this.simultaneous[otherRecognizer.id];
        return this;
    },

    /**
     * recognizer can only run when an other is failing
     * @param {Recognizer} otherRecognizer
     * @returns {Recognizer} this
     */
    requireFailure: function(otherRecognizer) {
        if (invokeArrayArg(otherRecognizer, 'requireFailure', this)) {
            return this;
        }

        var requireFail = this.requireFail;
        otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
        if (inArray(requireFail, otherRecognizer) === -1) {
            requireFail.push(otherRecognizer);
            otherRecognizer.requireFailure(this);
        }
        return this;
    },

    /**
     * drop the requireFailure link. it does not remove the link on the other recognizer.
     * @param {Recognizer} otherRecognizer
     * @returns {Recognizer} this
     */
    dropRequireFailure: function(otherRecognizer) {
        if (invokeArrayArg(otherRecognizer, 'dropRequireFailure', this)) {
            return this;
        }

        otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
        var index = inArray(this.requireFail, otherRecognizer);
        if (index > -1) {
            this.requireFail.splice(index, 1);
        }
        return this;
    },

    /**
     * has require failures boolean
     * @returns {boolean}
     */
    hasRequireFailures: function() {
        return this.requireFail.length > 0;
    },

    /**
     * if the recognizer can recognize simultaneous with an other recognizer
     * @param {Recognizer} otherRecognizer
     * @returns {Boolean}
     */
    canRecognizeWith: function(otherRecognizer) {
        return !!this.simultaneous[otherRecognizer.id];
    },

    /**
     * You should use `tryEmit` instead of `emit` directly to check
     * that all the needed recognizers has failed before emitting.
     * @param {Object} input
     */
    emit: function(input) {
        var self = this;
        var state = this.state;

        function emit(event) {
            self.manager.emit(event, input);
        }

        // 'panstart' and 'panmove'
        if (state < STATE_ENDED) {
            emit(self.options.event + stateStr(state));
        }

        emit(self.options.event); // simple 'eventName' events

        if (input.additionalEvent) { // additional event(panleft, panright, pinchin, pinchout...)
            emit(input.additionalEvent);
        }

        // panend and pancancel
        if (state >= STATE_ENDED) {
            emit(self.options.event + stateStr(state));
        }
    },

    /**
     * Check that all the require failure recognizers has failed,
     * if true, it emits a gesture event,
     * otherwise, setup the state to FAILED.
     * @param {Object} input
     */
    tryEmit: function(input) {
        if (this.canEmit()) {
            return this.emit(input);
        }
        // it's failing anyway
        this.state = STATE_FAILED;
    },

    /**
     * can we emit?
     * @returns {boolean}
     */
    canEmit: function() {
        var i = 0;
        while (i < this.requireFail.length) {
            if (!(this.requireFail[i].state & (STATE_FAILED | STATE_POSSIBLE))) {
                return false;
            }
            i++;
        }
        return true;
    },

    /**
     * update the recognizer
     * @param {Object} inputData
     */
    recognize: function(inputData) {
        // make a new copy of the inputData
        // so we can change the inputData without messing up the other recognizers
        var inputDataClone = assign({}, inputData);

        // is is enabled and allow recognizing?
        if (!boolOrFn(this.options.enable, [this, inputDataClone])) {
            this.reset();
            this.state = STATE_FAILED;
            return;
        }

        // reset when we've reached the end
        if (this.state & (STATE_RECOGNIZED | STATE_CANCELLED | STATE_FAILED)) {
            this.state = STATE_POSSIBLE;
        }

        this.state = this.process(inputDataClone);

        // the recognizer has recognized a gesture
        // so trigger an event
        if (this.state & (STATE_BEGAN | STATE_CHANGED | STATE_ENDED | STATE_CANCELLED)) {
            this.tryEmit(inputDataClone);
        }
    },

    /**
     * return the state of the recognizer
     * the actual recognizing happens in this method
     * @virtual
     * @param {Object} inputData
     * @returns {Const} STATE
     */
    process: function(inputData) { }, // jshint ignore:line

    /**
     * return the preferred touch-action
     * @virtual
     * @returns {Array}
     */
    getTouchAction: function() { },

    /**
     * called when the gesture isn't allowed to recognize
     * like when another is being recognized or it is disabled
     * @virtual
     */
    reset: function() { }
};

/**
 * get a usable string, used as event postfix
 * @param {Const} state
 * @returns {String} state
 */
function stateStr(state) {
    if (state & STATE_CANCELLED) {
        return 'cancel';
    } else if (state & STATE_ENDED) {
        return 'end';
    } else if (state & STATE_CHANGED) {
        return 'move';
    } else if (state & STATE_BEGAN) {
        return 'start';
    }
    return '';
}

/**
 * direction cons to string
 * @param {Const} direction
 * @returns {String}
 */
function directionStr(direction) {
    if (direction == DIRECTION_DOWN) {
        return 'down';
    } else if (direction == DIRECTION_UP) {
        return 'up';
    } else if (direction == DIRECTION_LEFT) {
        return 'left';
    } else if (direction == DIRECTION_RIGHT) {
        return 'right';
    }
    return '';
}

/**
 * get a recognizer by name if it is bound to a manager
 * @param {Recognizer|String} otherRecognizer
 * @param {Recognizer} recognizer
 * @returns {Recognizer}
 */
function getRecognizerByNameIfManager(otherRecognizer, recognizer) {
    var manager = recognizer.manager;
    if (manager) {
        return manager.get(otherRecognizer);
    }
    return otherRecognizer;
}

/**
 * This recognizer is just used as a base for the simple attribute recognizers.
 * @constructor
 * @extends Recognizer
 */
function AttrRecognizer() {
    Recognizer.apply(this, arguments);
}

inherit(AttrRecognizer, Recognizer, {
    /**
     * @namespace
     * @memberof AttrRecognizer
     */
    defaults: {
        /**
         * @type {Number}
         * @default 1
         */
        pointers: 1
    },

    /**
     * Used to check if it the recognizer receives valid input, like input.distance > 10.
     * @memberof AttrRecognizer
     * @param {Object} input
     * @returns {Boolean} recognized
     */
    attrTest: function(input) {
        var optionPointers = this.options.pointers;
        return optionPointers === 0 || input.pointers.length === optionPointers;
    },

    /**
     * Process the input and return the state for the recognizer
     * @memberof AttrRecognizer
     * @param {Object} input
     * @returns {*} State
     */
    process: function(input) {
        var state = this.state;
        var eventType = input.eventType;

        var isRecognized = state & (STATE_BEGAN | STATE_CHANGED);
        var isValid = this.attrTest(input);

        // on cancel input and we've recognized before, return STATE_CANCELLED
        if (isRecognized && (eventType & INPUT_CANCEL || !isValid)) {
            return state | STATE_CANCELLED;
        } else if (isRecognized || isValid) {
            if (eventType & INPUT_END) {
                return state | STATE_ENDED;
            } else if (!(state & STATE_BEGAN)) {
                return STATE_BEGAN;
            }
            return state | STATE_CHANGED;
        }
        return STATE_FAILED;
    }
});

/**
 * Pan
 * Recognized when the pointer is down and moved in the allowed direction.
 * @constructor
 * @extends AttrRecognizer
 */
function PanRecognizer() {
    AttrRecognizer.apply(this, arguments);

    this.pX = null;
    this.pY = null;
}

inherit(PanRecognizer, AttrRecognizer, {
    /**
     * @namespace
     * @memberof PanRecognizer
     */
    defaults: {
        event: 'pan',
        threshold: 10,
        pointers: 1,
        direction: DIRECTION_ALL
    },

    getTouchAction: function() {
        var direction = this.options.direction;
        var actions = [];
        if (direction & DIRECTION_HORIZONTAL) {
            actions.push(TOUCH_ACTION_PAN_Y);
        }
        if (direction & DIRECTION_VERTICAL) {
            actions.push(TOUCH_ACTION_PAN_X);
        }
        return actions;
    },

    directionTest: function(input) {
        var options = this.options;
        var hasMoved = true;
        var distance = input.distance;
        var direction = input.direction;
        var x = input.deltaX;
        var y = input.deltaY;

        // lock to axis?
        if (!(direction & options.direction)) {
            if (options.direction & DIRECTION_HORIZONTAL) {
                direction = (x === 0) ? DIRECTION_NONE : (x < 0) ? DIRECTION_LEFT : DIRECTION_RIGHT;
                hasMoved = x != this.pX;
                distance = Math.abs(input.deltaX);
            } else {
                direction = (y === 0) ? DIRECTION_NONE : (y < 0) ? DIRECTION_UP : DIRECTION_DOWN;
                hasMoved = y != this.pY;
                distance = Math.abs(input.deltaY);
            }
        }
        input.direction = direction;
        return hasMoved && distance > options.threshold && direction & options.direction;
    },

    attrTest: function(input) {
        return AttrRecognizer.prototype.attrTest.call(this, input) &&
            (this.state & STATE_BEGAN || (!(this.state & STATE_BEGAN) && this.directionTest(input)));
    },

    emit: function(input) {

        this.pX = input.deltaX;
        this.pY = input.deltaY;

        var direction = directionStr(input.direction);

        if (direction) {
            input.additionalEvent = this.options.event + direction;
        }
        this._super.emit.call(this, input);
    }
});

/**
 * Pinch
 * Recognized when two or more pointers are moving toward (zoom-in) or away from each other (zoom-out).
 * @constructor
 * @extends AttrRecognizer
 */
function PinchRecognizer() {
    AttrRecognizer.apply(this, arguments);
}

inherit(PinchRecognizer, AttrRecognizer, {
    /**
     * @namespace
     * @memberof PinchRecognizer
     */
    defaults: {
        event: 'pinch',
        threshold: 0,
        pointers: 2
    },

    getTouchAction: function() {
        return [TOUCH_ACTION_NONE];
    },

    attrTest: function(input) {
        return this._super.attrTest.call(this, input) &&
            (Math.abs(input.scale - 1) > this.options.threshold || this.state & STATE_BEGAN);
    },

    emit: function(input) {
        if (input.scale !== 1) {
            var inOut = input.scale < 1 ? 'in' : 'out';
            input.additionalEvent = this.options.event + inOut;
        }
        this._super.emit.call(this, input);
    }
});

/**
 * Press
 * Recognized when the pointer is down for x ms without any movement.
 * @constructor
 * @extends Recognizer
 */
function PressRecognizer() {
    Recognizer.apply(this, arguments);

    this._timer = null;
    this._input = null;
}

inherit(PressRecognizer, Recognizer, {
    /**
     * @namespace
     * @memberof PressRecognizer
     */
    defaults: {
        event: 'press',
        pointers: 1,
        time: 251, // minimal time of the pointer to be pressed
        threshold: 9 // a minimal movement is ok, but keep it low
    },

    getTouchAction: function() {
        return [TOUCH_ACTION_AUTO];
    },

    process: function(input) {
        var options = this.options;
        var validPointers = input.pointers.length === options.pointers;
        var validMovement = input.distance < options.threshold;
        var validTime = input.deltaTime > options.time;

        this._input = input;

        // we only allow little movement
        // and we've reached an end event, so a tap is possible
        if (!validMovement || !validPointers || (input.eventType & (INPUT_END | INPUT_CANCEL) && !validTime)) {
            this.reset();
        } else if (input.eventType & INPUT_START) {
            this.reset();
            this._timer = setTimeoutContext(function() {
                this.state = STATE_RECOGNIZED;
                this.tryEmit();
            }, options.time, this);
        } else if (input.eventType & INPUT_END) {
            return STATE_RECOGNIZED;
        }
        return STATE_FAILED;
    },

    reset: function() {
        clearTimeout(this._timer);
    },

    emit: function(input) {
        if (this.state !== STATE_RECOGNIZED) {
            return;
        }

        if (input && (input.eventType & INPUT_END)) {
            this.manager.emit(this.options.event + 'up', input);
        } else {
            this._input.timeStamp = now();
            this.manager.emit(this.options.event, this._input);
        }
    }
});

/**
 * Rotate
 * Recognized when two or more pointer are moving in a circular motion.
 * @constructor
 * @extends AttrRecognizer
 */
function RotateRecognizer() {
    AttrRecognizer.apply(this, arguments);
}

inherit(RotateRecognizer, AttrRecognizer, {
    /**
     * @namespace
     * @memberof RotateRecognizer
     */
    defaults: {
        event: 'rotate',
        threshold: 0,
        pointers: 2
    },

    getTouchAction: function() {
        return [TOUCH_ACTION_NONE];
    },

    attrTest: function(input) {
        return this._super.attrTest.call(this, input) &&
            (Math.abs(input.rotation) > this.options.threshold || this.state & STATE_BEGAN);
    }
});

/**
 * Swipe
 * Recognized when the pointer is moving fast (velocity), with enough distance in the allowed direction.
 * @constructor
 * @extends AttrRecognizer
 */
function SwipeRecognizer() {
    AttrRecognizer.apply(this, arguments);
}

inherit(SwipeRecognizer, AttrRecognizer, {
    /**
     * @namespace
     * @memberof SwipeRecognizer
     */
    defaults: {
        event: 'swipe',
        threshold: 10,
        velocity: 0.3,
        direction: DIRECTION_HORIZONTAL | DIRECTION_VERTICAL,
        pointers: 1
    },

    getTouchAction: function() {
        return PanRecognizer.prototype.getTouchAction.call(this);
    },

    attrTest: function(input) {
        var direction = this.options.direction;
        var velocity;

        if (direction & (DIRECTION_HORIZONTAL | DIRECTION_VERTICAL)) {
            velocity = input.overallVelocity;
        } else if (direction & DIRECTION_HORIZONTAL) {
            velocity = input.overallVelocityX;
        } else if (direction & DIRECTION_VERTICAL) {
            velocity = input.overallVelocityY;
        }

        return this._super.attrTest.call(this, input) &&
            direction & input.offsetDirection &&
            input.distance > this.options.threshold &&
            input.maxPointers == this.options.pointers &&
            abs(velocity) > this.options.velocity && input.eventType & INPUT_END;
    },

    emit: function(input) {
        var direction = directionStr(input.offsetDirection);
        if (direction) {
            this.manager.emit(this.options.event + direction, input);
        }

        this.manager.emit(this.options.event, input);
    }
});

/**
 * A tap is ecognized when the pointer is doing a small tap/click. Multiple taps are recognized if they occur
 * between the given interval and position. The delay option can be used to recognize multi-taps without firing
 * a single tap.
 *
 * The eventData from the emitted event contains the property `tapCount`, which contains the amount of
 * multi-taps being recognized.
 * @constructor
 * @extends Recognizer
 */
function TapRecognizer() {
    Recognizer.apply(this, arguments);

    // previous time and center,
    // used for tap counting
    this.pTime = false;
    this.pCenter = false;

    this._timer = null;
    this._input = null;
    this.count = 0;
}

inherit(TapRecognizer, Recognizer, {
    /**
     * @namespace
     * @memberof PinchRecognizer
     */
    defaults: {
        event: 'tap',
        pointers: 1,
        taps: 1,
        interval: 300, // max time between the multi-tap taps
        time: 250, // max time of the pointer to be down (like finger on the screen)
        threshold: 9, // a minimal movement is ok, but keep it low
        posThreshold: 10 // a multi-tap can be a bit off the initial position
    },

    getTouchAction: function() {
        return [TOUCH_ACTION_MANIPULATION];
    },

    process: function(input) {
        var options = this.options;

        var validPointers = input.pointers.length === options.pointers;
        var validMovement = input.distance < options.threshold;
        var validTouchTime = input.deltaTime < options.time;

        this.reset();

        if ((input.eventType & INPUT_START) && (this.count === 0)) {
            return this.failTimeout();
        }

        // we only allow little movement
        // and we've reached an end event, so a tap is possible
        if (validMovement && validTouchTime && validPointers) {
            if (input.eventType != INPUT_END) {
                return this.failTimeout();
            }

            var validInterval = this.pTime ? (input.timeStamp - this.pTime < options.interval) : true;
            var validMultiTap = !this.pCenter || getDistance(this.pCenter, input.center) < options.posThreshold;

            this.pTime = input.timeStamp;
            this.pCenter = input.center;

            if (!validMultiTap || !validInterval) {
                this.count = 1;
            } else {
                this.count += 1;
            }

            this._input = input;

            // if tap count matches we have recognized it,
            // else it has began recognizing...
            var tapCount = this.count % options.taps;
            if (tapCount === 0) {
                // no failing requirements, immediately trigger the tap event
                // or wait as long as the multitap interval to trigger
                if (!this.hasRequireFailures()) {
                    return STATE_RECOGNIZED;
                } else {
                    this._timer = setTimeoutContext(function() {
                        this.state = STATE_RECOGNIZED;
                        this.tryEmit();
                    }, options.interval, this);
                    return STATE_BEGAN;
                }
            }
        }
        return STATE_FAILED;
    },

    failTimeout: function() {
        this._timer = setTimeoutContext(function() {
            this.state = STATE_FAILED;
        }, this.options.interval, this);
        return STATE_FAILED;
    },

    reset: function() {
        clearTimeout(this._timer);
    },

    emit: function() {
        if (this.state == STATE_RECOGNIZED) {
            this._input.tapCount = this.count;
            this.manager.emit(this.options.event, this._input);
        }
    }
});

/**
 * Simple way to create a manager with a default set of recognizers.
 * @param {HTMLElement} element
 * @param {Object} [options]
 * @constructor
 */
function Hammer(element, options) {
    options = options || {};
    options.recognizers = ifUndefined(options.recognizers, Hammer.defaults.preset);
    return new Manager(element, options);
}

/**
 * @const {string}
 */
Hammer.VERSION = '2.0.7';

/**
 * default settings
 * @namespace
 */
Hammer.defaults = {
    /**
     * set if DOM events are being triggered.
     * But this is slower and unused by simple implementations, so disabled by default.
     * @type {Boolean}
     * @default false
     */
    domEvents: false,

    /**
     * The value for the touchAction property/fallback.
     * When set to `compute` it will magically set the correct value based on the added recognizers.
     * @type {String}
     * @default compute
     */
    touchAction: TOUCH_ACTION_COMPUTE,

    /**
     * @type {Boolean}
     * @default true
     */
    enable: true,

    /**
     * EXPERIMENTAL FEATURE -- can be removed/changed
     * Change the parent input target element.
     * If Null, then it is being set the to main element.
     * @type {Null|EventTarget}
     * @default null
     */
    inputTarget: null,

    /**
     * force an input class
     * @type {Null|Function}
     * @default null
     */
    inputClass: null,

    /**
     * Default recognizer setup when calling `Hammer()`
     * When creating a new Manager these will be skipped.
     * @type {Array}
     */
    preset: [
        // RecognizerClass, options, [recognizeWith, ...], [requireFailure, ...]
        [RotateRecognizer, {enable: false}],
        [PinchRecognizer, {enable: false}, ['rotate']],
        [SwipeRecognizer, {direction: DIRECTION_HORIZONTAL}],
        [PanRecognizer, {direction: DIRECTION_HORIZONTAL}, ['swipe']],
        [TapRecognizer],
        [TapRecognizer, {event: 'doubletap', taps: 2}, ['tap']],
        [PressRecognizer]
    ],

    /**
     * Some CSS properties can be used to improve the working of Hammer.
     * Add them to this method and they will be set when creating a new Manager.
     * @namespace
     */
    cssProps: {
        /**
         * Disables text selection to improve the dragging gesture. Mainly for desktop browsers.
         * @type {String}
         * @default 'none'
         */
        userSelect: 'none',

        /**
         * Disable the Windows Phone grippers when pressing an element.
         * @type {String}
         * @default 'none'
         */
        touchSelect: 'none',

        /**
         * Disables the default callout shown when you touch and hold a touch target.
         * On iOS, when you touch and hold a touch target such as a link, Safari displays
         * a callout containing information about the link. This property allows you to disable that callout.
         * @type {String}
         * @default 'none'
         */
        touchCallout: 'none',

        /**
         * Specifies whether zooming is enabled. Used by IE10>
         * @type {String}
         * @default 'none'
         */
        contentZooming: 'none',

        /**
         * Specifies that an entire element should be draggable instead of its contents. Mainly for desktop browsers.
         * @type {String}
         * @default 'none'
         */
        userDrag: 'none',

        /**
         * Overrides the highlight color shown when the user taps a link or a JavaScript
         * clickable element in iOS. This property obeys the alpha value, if specified.
         * @type {String}
         * @default 'rgba(0,0,0,0)'
         */
        tapHighlightColor: 'rgba(0,0,0,0)'
    }
};

var STOP = 1;
var FORCED_STOP = 2;

/**
 * Manager
 * @param {HTMLElement} element
 * @param {Object} [options]
 * @constructor
 */
function Manager(element, options) {
    this.options = assign({}, Hammer.defaults, options || {});

    this.options.inputTarget = this.options.inputTarget || element;

    this.handlers = {};
    this.session = {};
    this.recognizers = [];
    this.oldCssProps = {};

    this.element = element;
    this.input = createInputInstance(this);
    this.touchAction = new TouchAction(this, this.options.touchAction);

    toggleCssProps(this, true);

    each(this.options.recognizers, function(item) {
        var recognizer = this.add(new (item[0])(item[1]));
        item[2] && recognizer.recognizeWith(item[2]);
        item[3] && recognizer.requireFailure(item[3]);
    }, this);
}

Manager.prototype = {
    /**
     * set options
     * @param {Object} options
     * @returns {Manager}
     */
    set: function(options) {
        assign(this.options, options);

        // Options that need a little more setup
        if (options.touchAction) {
            this.touchAction.update();
        }
        if (options.inputTarget) {
            // Clean up existing event listeners and reinitialize
            this.input.destroy();
            this.input.target = options.inputTarget;
            this.input.init();
        }
        return this;
    },

    /**
     * stop recognizing for this session.
     * This session will be discarded, when a new [input]start event is fired.
     * When forced, the recognizer cycle is stopped immediately.
     * @param {Boolean} [force]
     */
    stop: function(force) {
        this.session.stopped = force ? FORCED_STOP : STOP;
    },

    /**
     * run the recognizers!
     * called by the inputHandler function on every movement of the pointers (touches)
     * it walks through all the recognizers and tries to detect the gesture that is being made
     * @param {Object} inputData
     */
    recognize: function(inputData) {
        var session = this.session;
        if (session.stopped) {
            return;
        }

        // run the touch-action polyfill
        this.touchAction.preventDefaults(inputData);

        var recognizer;
        var recognizers = this.recognizers;

        // this holds the recognizer that is being recognized.
        // so the recognizer's state needs to be BEGAN, CHANGED, ENDED or RECOGNIZED
        // if no recognizer is detecting a thing, it is set to `null`
        var curRecognizer = session.curRecognizer;

        // reset when the last recognizer is recognized
        // or when we're in a new session
        if (!curRecognizer || (curRecognizer && curRecognizer.state & STATE_RECOGNIZED)) {
            curRecognizer = session.curRecognizer = null;
        }

        var i = 0;
        while (i < recognizers.length) {
            recognizer = recognizers[i];

            // find out if we are allowed try to recognize the input for this one.
            // 1.   allow if the session is NOT forced stopped (see the .stop() method)
            // 2.   allow if we still haven't recognized a gesture in this session, or the this recognizer is the one
            //      that is being recognized.
            // 3.   allow if the recognizer is allowed to run simultaneous with the current recognized recognizer.
            //      this can be setup with the `recognizeWith()` method on the recognizer.
            if (session.stopped !== FORCED_STOP && ( // 1
                    !curRecognizer || recognizer == curRecognizer || // 2
                    recognizer.canRecognizeWith(curRecognizer))) { // 3
                recognizer.recognize(inputData);
            } else {
                recognizer.reset();
            }

            // if the recognizer has been recognizing the input as a valid gesture, we want to store this one as the
            // current active recognizer. but only if we don't already have an active recognizer
            if (!curRecognizer && recognizer.state & (STATE_BEGAN | STATE_CHANGED | STATE_ENDED)) {
                curRecognizer = session.curRecognizer = recognizer;
            }
            i++;
        }
    },

    /**
     * get a recognizer by its event name.
     * @param {Recognizer|String} recognizer
     * @returns {Recognizer|Null}
     */
    get: function(recognizer) {
        if (recognizer instanceof Recognizer) {
            return recognizer;
        }

        var recognizers = this.recognizers;
        for (var i = 0; i < recognizers.length; i++) {
            if (recognizers[i].options.event == recognizer) {
                return recognizers[i];
            }
        }
        return null;
    },

    /**
     * add a recognizer to the manager
     * existing recognizers with the same event name will be removed
     * @param {Recognizer} recognizer
     * @returns {Recognizer|Manager}
     */
    add: function(recognizer) {
        if (invokeArrayArg(recognizer, 'add', this)) {
            return this;
        }

        // remove existing
        var existing = this.get(recognizer.options.event);
        if (existing) {
            this.remove(existing);
        }

        this.recognizers.push(recognizer);
        recognizer.manager = this;

        this.touchAction.update();
        return recognizer;
    },

    /**
     * remove a recognizer by name or instance
     * @param {Recognizer|String} recognizer
     * @returns {Manager}
     */
    remove: function(recognizer) {
        if (invokeArrayArg(recognizer, 'remove', this)) {
            return this;
        }

        recognizer = this.get(recognizer);

        // let's make sure this recognizer exists
        if (recognizer) {
            var recognizers = this.recognizers;
            var index = inArray(recognizers, recognizer);

            if (index !== -1) {
                recognizers.splice(index, 1);
                this.touchAction.update();
            }
        }

        return this;
    },

    /**
     * bind event
     * @param {String} events
     * @param {Function} handler
     * @returns {EventEmitter} this
     */
    on: function(events, handler) {
        if (events === undefined) {
            return;
        }
        if (handler === undefined) {
            return;
        }

        var handlers = this.handlers;
        each(splitStr(events), function(event) {
            handlers[event] = handlers[event] || [];
            handlers[event].push(handler);
        });
        return this;
    },

    /**
     * unbind event, leave emit blank to remove all handlers
     * @param {String} events
     * @param {Function} [handler]
     * @returns {EventEmitter} this
     */
    off: function(events, handler) {
        if (events === undefined) {
            return;
        }

        var handlers = this.handlers;
        each(splitStr(events), function(event) {
            if (!handler) {
                delete handlers[event];
            } else {
                handlers[event] && handlers[event].splice(inArray(handlers[event], handler), 1);
            }
        });
        return this;
    },

    /**
     * emit event to the listeners
     * @param {String} event
     * @param {Object} data
     */
    emit: function(event, data) {
        // we also want to trigger dom events
        if (this.options.domEvents) {
            triggerDomEvent(event, data);
        }

        // no handlers, so skip it all
        var handlers = this.handlers[event] && this.handlers[event].slice();
        if (!handlers || !handlers.length) {
            return;
        }

        data.type = event;
        data.preventDefault = function() {
            data.srcEvent.preventDefault();
        };

        var i = 0;
        while (i < handlers.length) {
            handlers[i](data);
            i++;
        }
    },

    /**
     * destroy the manager and unbinds all events
     * it doesn't unbind dom events, that is the user own responsibility
     */
    destroy: function() {
        this.element && toggleCssProps(this, false);

        this.handlers = {};
        this.session = {};
        this.input.destroy();
        this.element = null;
    }
};

/**
 * add/remove the css properties as defined in manager.options.cssProps
 * @param {Manager} manager
 * @param {Boolean} add
 */
function toggleCssProps(manager, add) {
    var element = manager.element;
    if (!element.style) {
        return;
    }
    var prop;
    each(manager.options.cssProps, function(value, name) {
        prop = prefixed(element.style, name);
        if (add) {
            manager.oldCssProps[prop] = element.style[prop];
            element.style[prop] = value;
        } else {
            element.style[prop] = manager.oldCssProps[prop] || '';
        }
    });
    if (!add) {
        manager.oldCssProps = {};
    }
}

/**
 * trigger dom event
 * @param {String} event
 * @param {Object} data
 */
function triggerDomEvent(event, data) {
    var gestureEvent = document.createEvent('Event');
    gestureEvent.initEvent(event, true, true);
    gestureEvent.gesture = data;
    data.target.dispatchEvent(gestureEvent);
}

assign(Hammer, {
    INPUT_START: INPUT_START,
    INPUT_MOVE: INPUT_MOVE,
    INPUT_END: INPUT_END,
    INPUT_CANCEL: INPUT_CANCEL,

    STATE_POSSIBLE: STATE_POSSIBLE,
    STATE_BEGAN: STATE_BEGAN,
    STATE_CHANGED: STATE_CHANGED,
    STATE_ENDED: STATE_ENDED,
    STATE_RECOGNIZED: STATE_RECOGNIZED,
    STATE_CANCELLED: STATE_CANCELLED,
    STATE_FAILED: STATE_FAILED,

    DIRECTION_NONE: DIRECTION_NONE,
    DIRECTION_LEFT: DIRECTION_LEFT,
    DIRECTION_RIGHT: DIRECTION_RIGHT,
    DIRECTION_UP: DIRECTION_UP,
    DIRECTION_DOWN: DIRECTION_DOWN,
    DIRECTION_HORIZONTAL: DIRECTION_HORIZONTAL,
    DIRECTION_VERTICAL: DIRECTION_VERTICAL,
    DIRECTION_ALL: DIRECTION_ALL,

    Manager: Manager,
    Input: Input,
    TouchAction: TouchAction,

    TouchInput: TouchInput,
    MouseInput: MouseInput,
    PointerEventInput: PointerEventInput,
    TouchMouseInput: TouchMouseInput,
    SingleTouchInput: SingleTouchInput,

    Recognizer: Recognizer,
    AttrRecognizer: AttrRecognizer,
    Tap: TapRecognizer,
    Pan: PanRecognizer,
    Swipe: SwipeRecognizer,
    Pinch: PinchRecognizer,
    Rotate: RotateRecognizer,
    Press: PressRecognizer,

    on: addEventListeners,
    off: removeEventListeners,
    each: each,
    merge: merge,
    extend: extend,
    assign: assign,
    inherit: inherit,
    bindFn: bindFn,
    prefixed: prefixed
});

// this prevents errors when Hammer is loaded in the presence of an AMD
//  style loader but by script tag, not by the loader.
var freeGlobal = (typeof window !== 'undefined' ? window : (typeof self !== 'undefined' ? self : {})); // jshint ignore:line
freeGlobal.Hammer = Hammer;

if (true) {
    !(__WEBPACK_AMD_DEFINE_RESULT__ = function() {
        return Hammer;
    }.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
} else if (typeof module != 'undefined' && module.exports) {
    module.exports = Hammer;
} else {
    window[exportName] = Hammer;
}

})(window, document, 'Hammer');


/***/ }),
/* 352 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * is-extendable <https://github.com/jonschlinkert/is-extendable>
 *
 * Copyright (c) 2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */



module.exports = function isExtendable(val) {
  return typeof val !== 'undefined' && val !== null
    && (typeof val === 'object' || typeof val === 'function');
};


/***/ }),
/* 353 */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["tweenState"] = factory();
	else
		root["tweenState"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/*!*****************!*\
  !*** multi lib ***!
  \*****************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(/*! ./index.js */169);


/***/ },

/***/ 5:
/*!******************************!*\
  !*** ./~/process/browser.js ***!
  \******************************/
/***/ function(module, exports) {

	// shim for using process in browser
	
	var process = module.exports = {};
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;
	
	function cleanUpNextTick() {
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
	    var timeout = setTimeout(cleanUpNextTick);
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
	    clearTimeout(timeout);
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
	        setTimeout(drainQueue, 0);
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
	
	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};
	
	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ },

/***/ 169:
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _tweenFunctions = __webpack_require__(/*! tween-functions */ 170);
	
	var _tweenFunctions2 = _interopRequireDefault(_tweenFunctions);
	
	var _raf = __webpack_require__(/*! raf */ 171);
	
	var _raf2 = _interopRequireDefault(_raf);
	
	// additive is the new iOS 8 default. In most cases it simulates a physics-
	// looking overshoot behavior (especially with easeInOut. You can test that in
	// the example
	var DEFAULT_STACK_BEHAVIOR = 'ADDITIVE';
	var DEFAULT_EASING = _tweenFunctions.easeInOutQuad;
	var DEFAULT_DURATION = 300;
	var DEFAULT_DELAY = 0;
	
	var stackBehavior = {
	  ADDITIVE: 'ADDITIVE',
	  DESTRUCTIVE: 'DESTRUCTIVE'
	};
	
	var Mixin = {
	  _rafID: null,
	
	  getInitialState: function getInitialState() {
	    return {
	      tweenQueue: []
	    };
	  },
	
	  componentWillUnmount: function componentWillUnmount() {
	    _raf2['default'].cancel(this._rafID);
	    this._rafID = -1;
	  },
	
	  tweenState: function tweenState(path, _ref) {
	    var _this = this;
	
	    var easing = _ref.easing;
	    var duration = _ref.duration;
	    var delay = _ref.delay;
	    var beginValue = _ref.beginValue;
	    var endValue = _ref.endValue;
	    var onEnd = _ref.onEnd;
	    var configSB = _ref.stackBehavior;
	
	    this.setState(function (state) {
	      var cursor = state;
	      var stateName = undefined;
	      // see comment below on pash hash
	      var pathHash = undefined;
	      if (typeof path === 'string') {
	        stateName = path;
	        pathHash = path;
	      } else {
	        for (var i = 0; i < path.length - 1; i++) {
	          cursor = cursor[path[i]];
	        }
	        stateName = path[path.length - 1];
	        pathHash = path.join('|');
	      }
	      // see the reasoning for these defaults at the top of file
	      var newConfig = {
	        easing: easing || DEFAULT_EASING,
	        duration: duration == null ? DEFAULT_DURATION : duration,
	        delay: delay == null ? DEFAULT_DELAY : delay,
	        beginValue: beginValue == null ? cursor[stateName] : beginValue,
	        endValue: endValue,
	        onEnd: onEnd,
	        stackBehavior: configSB || DEFAULT_STACK_BEHAVIOR
	      };
	
	      var newTweenQueue = state.tweenQueue;
	      if (newConfig.stackBehavior === stackBehavior.DESTRUCTIVE) {
	        newTweenQueue = state.tweenQueue.filter(function (item) {
	          return item.pathHash !== pathHash;
	        });
	      }
	
	      // we store path hash, so that during value retrieval we can use hash
	      // comparison to find the path. See the kind of shitty thing you have to
	      // do when you don't have value comparison for collections?
	      newTweenQueue.push({
	        pathHash: pathHash,
	        config: newConfig,
	        initTime: Date.now() + newConfig.delay
	      });
	
	      // sorry for mutating. For perf reasons we don't want to deep clone.
	      // guys, can we please all start using persistent collections so that
	      // we can stop worrying about nonesense like this
	      cursor[stateName] = newConfig.endValue;
	      if (newTweenQueue.length === 1) {
	        _this._rafID = (0, _raf2['default'])(_this._rafCb);
	      }
	
	      // this will also include the above mutated update
	      return { tweenQueue: newTweenQueue };
	    });
	  },
	
	  getTweeningValue: function getTweeningValue(path) {
	    var state = this.state;
	
	    var tweeningValue = undefined;
	    var pathHash = undefined;
	    if (typeof path === 'string') {
	      tweeningValue = state[path];
	      pathHash = path;
	    } else {
	      tweeningValue = state;
	      for (var i = 0; i < path.length; i++) {
	        tweeningValue = tweeningValue[path[i]];
	      }
	      pathHash = path.join('|');
	    }
	    var now = Date.now();
	
	    for (var i = 0; i < state.tweenQueue.length; i++) {
	      var _state$tweenQueue$i = state.tweenQueue[i];
	      var itemPathHash = _state$tweenQueue$i.pathHash;
	      var initTime = _state$tweenQueue$i.initTime;
	      var config = _state$tweenQueue$i.config;
	
	      if (itemPathHash !== pathHash) {
	        continue;
	      }
	
	      var progressTime = now - initTime > config.duration ? config.duration : Math.max(0, now - initTime);
	      // `now - initTime` can be negative if initTime is scheduled in the
	      // future by a delay. In this case we take 0
	
	      // if duration is 0, consider that as jumping to endValue directly. This
	      // is needed because the easing functino might have undefined behavior for
	      // duration = 0
	      var easeValue = config.duration === 0 ? config.endValue : config.easing(progressTime, config.beginValue, config.endValue, config.duration);
	
	      // TODO: some funcs accept a 5th param
	      var contrib = easeValue - config.endValue;
	      tweeningValue += contrib;
	    }
	
	    return tweeningValue;
	  },
	
	  _rafCb: function _rafCb() {
	    var state = this.state;
	    if (state.tweenQueue.length === 0) {
	      return;
	    }
	
	    var now = Date.now();
	    var newTweenQueue = [];
	
	    for (var i = 0; i < state.tweenQueue.length; i++) {
	      var item = state.tweenQueue[i];
	      var initTime = item.initTime;
	      var config = item.config;
	
	      if (now - initTime < config.duration) {
	        newTweenQueue.push(item);
	      } else {
	        config.onEnd && config.onEnd();
	      }
	    }
	
	    // onEnd might trigger a parent callback that removes this component
	    // -1 means we've canceled it in componentWillUnmount
	    if (this._rafID === -1) {
	      return;
	    }
	
	    this.setState({
	      tweenQueue: newTweenQueue
	    });
	
	    this._rafID = (0, _raf2['default'])(this._rafCb);
	  }
	};
	
	exports['default'] = {
	  Mixin: Mixin,
	  easingTypes: _tweenFunctions2['default'],
	  stackBehavior: stackBehavior
	};
	module.exports = exports['default'];

/***/ },

/***/ 170:
/*!************************************!*\
  !*** ./~/tween-functions/index.js ***!
  \************************************/
/***/ function(module, exports) {

	'use strict';
	
	// t: current time, b: beginning value, _c: final value, d: total duration
	var tweenFunctions = {
	  linear: function(t, b, _c, d) {
	    var c = _c - b;
	    return c * t / d + b;
	  },
	  easeInQuad: function(t, b, _c, d) {
	    var c = _c - b;
	    return c * (t /= d) * t + b;
	  },
	  easeOutQuad: function(t, b, _c, d) {
	    var c = _c - b;
	    return -c * (t /= d) * (t - 2) + b;
	  },
	  easeInOutQuad: function(t, b, _c, d) {
	    var c = _c - b;
	    if ((t /= d / 2) < 1) {
	      return c / 2 * t * t + b;
	    } else {
	      return -c / 2 * ((--t) * (t - 2) - 1) + b;
	    }
	  },
	  easeInCubic: function(t, b, _c, d) {
	    var c = _c - b;
	    return c * (t /= d) * t * t + b;
	  },
	  easeOutCubic: function(t, b, _c, d) {
	    var c = _c - b;
	    return c * ((t = t / d - 1) * t * t + 1) + b;
	  },
	  easeInOutCubic: function(t, b, _c, d) {
	    var c = _c - b;
	    if ((t /= d / 2) < 1) {
	      return c / 2 * t * t * t + b;
	    } else {
	      return c / 2 * ((t -= 2) * t * t + 2) + b;
	    }
	  },
	  easeInQuart: function(t, b, _c, d) {
	    var c = _c - b;
	    return c * (t /= d) * t * t * t + b;
	  },
	  easeOutQuart: function(t, b, _c, d) {
	    var c = _c - b;
	    return -c * ((t = t / d - 1) * t * t * t - 1) + b;
	  },
	  easeInOutQuart: function(t, b, _c, d) {
	    var c = _c - b;
	    if ((t /= d / 2) < 1) {
	      return c / 2 * t * t * t * t + b;
	    } else {
	      return -c / 2 * ((t -= 2) * t * t * t - 2) + b;
	    }
	  },
	  easeInQuint: function(t, b, _c, d) {
	    var c = _c - b;
	    return c * (t /= d) * t * t * t * t + b;
	  },
	  easeOutQuint: function(t, b, _c, d) {
	    var c = _c - b;
	    return c * ((t = t / d - 1) * t * t * t * t + 1) + b;
	  },
	  easeInOutQuint: function(t, b, _c, d) {
	    var c = _c - b;
	    if ((t /= d / 2) < 1) {
	      return c / 2 * t * t * t * t * t + b;
	    } else {
	      return c / 2 * ((t -= 2) * t * t * t * t + 2) + b;
	    }
	  },
	  easeInSine: function(t, b, _c, d) {
	    var c = _c - b;
	    return -c * Math.cos(t / d * (Math.PI / 2)) + c + b;
	  },
	  easeOutSine: function(t, b, _c, d) {
	    var c = _c - b;
	    return c * Math.sin(t / d * (Math.PI / 2)) + b;
	  },
	  easeInOutSine: function(t, b, _c, d) {
	    var c = _c - b;
	    return -c / 2 * (Math.cos(Math.PI * t / d) - 1) + b;
	  },
	  easeInExpo: function(t, b, _c, d) {
	    var c = _c - b;
	    return (t==0) ? b : c * Math.pow(2, 10 * (t/d - 1)) + b;
	  },
	  easeOutExpo: function(t, b, _c, d) {
	    var c = _c - b;
	    return (t==d) ? b+c : c * (-Math.pow(2, -10 * t/d) + 1) + b;
	  },
	  easeInOutExpo: function(t, b, _c, d) {
	    var c = _c - b;
	    if (t === 0) {
	      return b;
	    }
	    if (t === d) {
	      return b + c;
	    }
	    if ((t /= d / 2) < 1) {
	      return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
	    } else {
	      return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;
	    }
	  },
	  easeInCirc: function(t, b, _c, d) {
	    var c = _c - b;
	    return -c * (Math.sqrt(1 - (t /= d) * t) - 1) + b;
	  },
	  easeOutCirc: function(t, b, _c, d) {
	    var c = _c - b;
	    return c * Math.sqrt(1 - (t = t / d - 1) * t) + b;
	  },
	  easeInOutCirc: function(t, b, _c, d) {
	    var c = _c - b;
	    if ((t /= d / 2) < 1) {
	      return -c / 2 * (Math.sqrt(1 - t * t) - 1) + b;
	    } else {
	      return c / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + b;
	    }
	  },
	  easeInElastic: function(t, b, _c, d) {
	    var c = _c - b;
	    var a, p, s;
	    s = 1.70158;
	    p = 0;
	    a = c;
	    if (t === 0) {
	      return b;
	    } else if ((t /= d) === 1) {
	      return b + c;
	    }
	    if (!p) {
	      p = d * 0.3;
	    }
	    if (a < Math.abs(c)) {
	      a = c;
	      s = p / 4;
	    } else {
	      s = p / (2 * Math.PI) * Math.asin(c / a);
	    }
	    return -(a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
	  },
	  easeOutElastic: function(t, b, _c, d) {
	    var c = _c - b;
	    var a, p, s;
	    s = 1.70158;
	    p = 0;
	    a = c;
	    if (t === 0) {
	      return b;
	    } else if ((t /= d) === 1) {
	      return b + c;
	    }
	    if (!p) {
	      p = d * 0.3;
	    }
	    if (a < Math.abs(c)) {
	      a = c;
	      s = p / 4;
	    } else {
	      s = p / (2 * Math.PI) * Math.asin(c / a);
	    }
	    return a * Math.pow(2, -10 * t) * Math.sin((t * d - s) * (2 * Math.PI) / p) + c + b;
	  },
	  easeInOutElastic: function(t, b, _c, d) {
	    var c = _c - b;
	    var a, p, s;
	    s = 1.70158;
	    p = 0;
	    a = c;
	    if (t === 0) {
	      return b;
	    } else if ((t /= d / 2) === 2) {
	      return b + c;
	    }
	    if (!p) {
	      p = d * (0.3 * 1.5);
	    }
	    if (a < Math.abs(c)) {
	      a = c;
	      s = p / 4;
	    } else {
	      s = p / (2 * Math.PI) * Math.asin(c / a);
	    }
	    if (t < 1) {
	      return -0.5 * (a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
	    } else {
	      return a * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p) * 0.5 + c + b;
	    }
	  },
	  easeInBack: function(t, b, _c, d, s) {
	    var c = _c - b;
	    if (s === void 0) {
	      s = 1.70158;
	    }
	    return c * (t /= d) * t * ((s + 1) * t - s) + b;
	  },
	  easeOutBack: function(t, b, _c, d, s) {
	    var c = _c - b;
	    if (s === void 0) {
	      s = 1.70158;
	    }
	    return c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b;
	  },
	  easeInOutBack: function(t, b, _c, d, s) {
	    var c = _c - b;
	    if (s === void 0) {
	      s = 1.70158;
	    }
	    if ((t /= d / 2) < 1) {
	      return c / 2 * (t * t * (((s *= 1.525) + 1) * t - s)) + b;
	    } else {
	      return c / 2 * ((t -= 2) * t * (((s *= 1.525) + 1) * t + s) + 2) + b;
	    }
	  },
	  easeInBounce: function(t, b, _c, d) {
	    var c = _c - b;
	    var v;
	    v = tweenFunctions.easeOutBounce(d - t, 0, c, d);
	    return c - v + b;
	  },
	  easeOutBounce: function(t, b, _c, d) {
	    var c = _c - b;
	    if ((t /= d) < 1 / 2.75) {
	      return c * (7.5625 * t * t) + b;
	    } else if (t < 2 / 2.75) {
	      return c * (7.5625 * (t -= 1.5 / 2.75) * t + 0.75) + b;
	    } else if (t < 2.5 / 2.75) {
	      return c * (7.5625 * (t -= 2.25 / 2.75) * t + 0.9375) + b;
	    } else {
	      return c * (7.5625 * (t -= 2.625 / 2.75) * t + 0.984375) + b;
	    }
	  },
	  easeInOutBounce: function(t, b, _c, d) {
	    var c = _c - b;
	    var v;
	    if (t < d / 2) {
	      v = tweenFunctions.easeInBounce(t * 2, 0, c, d);
	      return v * 0.5 + b;
	    } else {
	      v = tweenFunctions.easeOutBounce(t * 2 - d, 0, c, d);
	      return v * 0.5 + c * 0.5 + b;
	    }
	  }
	};
	
	module.exports = tweenFunctions;


/***/ },

/***/ 171:
/*!************************!*\
  !*** ./~/raf/index.js ***!
  \************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {var now = __webpack_require__(/*! performance-now */ 172)
	  , root = typeof window === 'undefined' ? global : window
	  , vendors = ['moz', 'webkit']
	  , suffix = 'AnimationFrame'
	  , raf = root['request' + suffix]
	  , caf = root['cancel' + suffix] || root['cancelRequest' + suffix]
	
	for(var i = 0; !raf && i < vendors.length; i++) {
	  raf = root[vendors[i] + 'Request' + suffix]
	  caf = root[vendors[i] + 'Cancel' + suffix]
	      || root[vendors[i] + 'CancelRequest' + suffix]
	}
	
	// Some versions of FF have rAF but not cAF
	if(!raf || !caf) {
	  var last = 0
	    , id = 0
	    , queue = []
	    , frameDuration = 1000 / 60
	
	  raf = function(callback) {
	    if(queue.length === 0) {
	      var _now = now()
	        , next = Math.max(0, frameDuration - (_now - last))
	      last = next + _now
	      setTimeout(function() {
	        var cp = queue.slice(0)
	        // Clear queue here to prevent
	        // callbacks from appending listeners
	        // to the current frame's queue
	        queue.length = 0
	        for(var i = 0; i < cp.length; i++) {
	          if(!cp[i].cancelled) {
	            try{
	              cp[i].callback(last)
	            } catch(e) {
	              setTimeout(function() { throw e }, 0)
	            }
	          }
	        }
	      }, Math.round(next))
	    }
	    queue.push({
	      handle: ++id,
	      callback: callback,
	      cancelled: false
	    })
	    return id
	  }
	
	  caf = function(handle) {
	    for(var i = 0; i < queue.length; i++) {
	      if(queue[i].handle === handle) {
	        queue[i].cancelled = true
	      }
	    }
	  }
	}
	
	module.exports = function(fn) {
	  // Wrap in a new function to prevent
	  // `cancel` potentially being assigned
	  // to the native rAF function
	  return raf.call(root, fn)
	}
	module.exports.cancel = function() {
	  caf.apply(root, arguments)
	}
	module.exports.polyfill = function() {
	  root.requestAnimationFrame = raf
	  root.cancelAnimationFrame = caf
	}
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },

/***/ 172:
/*!**************************************************!*\
  !*** ./~/performance-now/lib/performance-now.js ***!
  \**************************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {// Generated by CoffeeScript 1.7.1
	(function() {
	  var getNanoSeconds, hrtime, loadTime;
	
	  if ((typeof performance !== "undefined" && performance !== null) && performance.now) {
	    module.exports = function() {
	      return performance.now();
	    };
	  } else if ((typeof process !== "undefined" && process !== null) && process.hrtime) {
	    module.exports = function() {
	      return (getNanoSeconds() - loadTime) / 1e6;
	    };
	    hrtime = process.hrtime;
	    getNanoSeconds = function() {
	      var hr;
	      hr = hrtime();
	      return hr[0] * 1e9 + hr[1];
	    };
	    loadTime = getNanoSeconds();
	  } else if (Date.now) {
	    module.exports = function() {
	      return Date.now() - loadTime;
	    };
	    loadTime = Date.now();
	  } else {
	    module.exports = function() {
	      return new Date().getTime() - loadTime;
	    };
	    loadTime = new Date().getTime();
	  }
	
	}).call(this);
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./~/process/browser.js */ 5)))

/***/ }

/******/ })
});
;
//# sourceMappingURL=index.js.map

/***/ }),
/* 354 */
/***/ (function(module, exports) {

/**
 * lodash 3.9.1 (Custom Build) <https://lodash.com/>
 * Build: `lodash modern modularize exports="npm" -o ./`
 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <https://lodash.com/license>
 */

/** `Object#toString` result references. */
var funcTag = '[object Function]';

/** Used to detect host constructors (Safari > 5). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/**
 * Checks if `value` is object-like.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/** Used for native method references. */
var objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var fnToString = Function.prototype.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
 * of values.
 */
var objToString = objectProto.toString;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  fnToString.call(hasOwnProperty).replace(/[\\^$.*+?()[\]{}|]/g, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = object == null ? undefined : object[key];
  return isNative(value) ? value : undefined;
}

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in older versions of Chrome and Safari which return 'function' for regexes
  // and Safari 8 equivalents which return 'object' for typed array constructors.
  return isObject(value) && objToString.call(value) == funcTag;
}

/**
 * Checks if `value` is the [language type](https://es5.github.io/#x8) of `Object`.
 * (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(1);
 * // => false
 */
function isObject(value) {
  // Avoid a V8 JIT bug in Chrome 19-20.
  // See https://code.google.com/p/v8/issues/detail?id=2291 for more details.
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is a native function.
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function, else `false`.
 * @example
 *
 * _.isNative(Array.prototype.push);
 * // => true
 *
 * _.isNative(_);
 * // => false
 */
function isNative(value) {
  if (value == null) {
    return false;
  }
  if (isFunction(value)) {
    return reIsNative.test(fnToString.call(value));
  }
  return isObjectLike(value) && reIsHostCtor.test(value);
}

module.exports = getNative;


/***/ }),
/* 355 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the `TypeError` message for "Functions" methods. */
var FUNC_ERROR_TEXT = 'Expected a function';

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/** Used to match leading and trailing whitespace. */
var reTrim = /^\s+|\s+$/g;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max,
    nativeMin = Math.min;

/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */
var now = function() {
  return root.Date.now();
};

/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */
function debounce(func, wait, options) {
  var lastArgs,
      lastThis,
      maxWait,
      result,
      timerId,
      lastCallTime,
      lastInvokeTime = 0,
      leading = false,
      maxing = false,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  wait = toNumber(wait) || 0;
  if (isObject(options)) {
    leading = !!options.leading;
    maxing = 'maxWait' in options;
    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }

  function invokeFunc(time) {
    var args = lastArgs,
        thisArg = lastThis;

    lastArgs = lastThis = undefined;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }

  function leadingEdge(time) {
    // Reset any `maxWait` timer.
    lastInvokeTime = time;
    // Start the timer for the trailing edge.
    timerId = setTimeout(timerExpired, wait);
    // Invoke the leading edge.
    return leading ? invokeFunc(time) : result;
  }

  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime,
        result = wait - timeSinceLastCall;

    return maxing ? nativeMin(result, maxWait - timeSinceLastInvoke) : result;
  }

  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime;

    // Either this is the first call, activity has stopped and we're at the
    // trailing edge, the system time has gone backwards and we're treating
    // it as the trailing edge, or we've hit the `maxWait` limit.
    return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
      (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
  }

  function timerExpired() {
    var time = now();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    // Restart the timer.
    timerId = setTimeout(timerExpired, remainingWait(time));
  }

  function trailingEdge(time) {
    timerId = undefined;

    // Only invoke if we have `lastArgs` which means `func` has been
    // debounced at least once.
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = undefined;
    return result;
  }

  function cancel() {
    if (timerId !== undefined) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = undefined;
  }

  function flush() {
    return timerId === undefined ? result : trailingEdge(now());
  }

  function debounced() {
    var time = now(),
        isInvoking = shouldInvoke(time);

    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;

    if (isInvoking) {
      if (timerId === undefined) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        // Handle invocations in a tight loop.
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === undefined) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && objectToString.call(value) == symbolTag);
}

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = value.replace(reTrim, '');
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

module.exports = debounce;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(43)))

/***/ }),
/* 356 */
/***/ (function(module, exports) {

/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
function isArguments(value) {
  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
  return isArrayLikeObject(value) && hasOwnProperty.call(value, 'callee') &&
    (!propertyIsEnumerable.call(value, 'callee') || objectToString.call(value) == argsTag);
}

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

/**
 * This method is like `_.isArrayLike` except that it also checks if `value`
 * is an object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array-like object,
 *  else `false`.
 * @example
 *
 * _.isArrayLikeObject([1, 2, 3]);
 * // => true
 *
 * _.isArrayLikeObject(document.body.children);
 * // => true
 *
 * _.isArrayLikeObject('abc');
 * // => false
 *
 * _.isArrayLikeObject(_.noop);
 * // => false
 */
function isArrayLikeObject(value) {
  return isObjectLike(value) && isArrayLike(value);
}

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 8-9 which returns 'object' for typed array and other constructors.
  var tag = isObject(value) ? objectToString.call(value) : '';
  return tag == funcTag || tag == genTag;
}

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

module.exports = isArguments;


/***/ }),
/* 357 */
/***/ (function(module, exports) {

/**
 * lodash 3.0.4 (Custom Build) <https://lodash.com/>
 * Build: `lodash modern modularize exports="npm" -o ./`
 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <https://lodash.com/license>
 */

/** `Object#toString` result references. */
var arrayTag = '[object Array]',
    funcTag = '[object Function]';

/** Used to detect host constructors (Safari > 5). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/**
 * Checks if `value` is object-like.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/** Used for native method references. */
var objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var fnToString = Function.prototype.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
 * of values.
 */
var objToString = objectProto.toString;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  fnToString.call(hasOwnProperty).replace(/[\\^$.*+?()[\]{}|]/g, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/* Native method references for those with the same name as other `lodash` methods. */
var nativeIsArray = getNative(Array, 'isArray');

/**
 * Used as the [maximum length](http://ecma-international.org/ecma-262/6.0/#sec-number.max_safe_integer)
 * of an array-like value.
 */
var MAX_SAFE_INTEGER = 9007199254740991;

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = object == null ? undefined : object[key];
  return isNative(value) ? value : undefined;
}

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This function is based on [`ToLength`](http://ecma-international.org/ecma-262/6.0/#sec-tolength).
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 */
function isLength(value) {
  return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(function() { return arguments; }());
 * // => false
 */
var isArray = nativeIsArray || function(value) {
  return isObjectLike(value) && isLength(value.length) && objToString.call(value) == arrayTag;
};

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in older versions of Chrome and Safari which return 'function' for regexes
  // and Safari 8 equivalents which return 'object' for typed array constructors.
  return isObject(value) && objToString.call(value) == funcTag;
}

/**
 * Checks if `value` is the [language type](https://es5.github.io/#x8) of `Object`.
 * (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(1);
 * // => false
 */
function isObject(value) {
  // Avoid a V8 JIT bug in Chrome 19-20.
  // See https://code.google.com/p/v8/issues/detail?id=2291 for more details.
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is a native function.
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function, else `false`.
 * @example
 *
 * _.isNative(Array.prototype.push);
 * // => true
 *
 * _.isNative(_);
 * // => false
 */
function isNative(value) {
  if (value == null) {
    return false;
  }
  if (isFunction(value)) {
    return reIsNative.test(fnToString.call(value));
  }
  return isObjectLike(value) && reIsHostCtor.test(value);
}

module.exports = isArray;


/***/ }),
/* 358 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * lodash 3.1.2 (Custom Build) <https://lodash.com/>
 * Build: `lodash modern modularize exports="npm" -o ./`
 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <https://lodash.com/license>
 */
var getNative = __webpack_require__(354),
    isArguments = __webpack_require__(356),
    isArray = __webpack_require__(357);

/** Used to detect unsigned integer values. */
var reIsUint = /^\d+$/;

/** Used for native method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/* Native method references for those with the same name as other `lodash` methods. */
var nativeKeys = getNative(Object, 'keys');

/**
 * Used as the [maximum length](http://ecma-international.org/ecma-262/6.0/#sec-number.max_safe_integer)
 * of an array-like value.
 */
var MAX_SAFE_INTEGER = 9007199254740991;

/**
 * The base implementation of `_.property` without support for deep paths.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @returns {Function} Returns the new function.
 */
function baseProperty(key) {
  return function(object) {
    return object == null ? undefined : object[key];
  };
}

/**
 * Gets the "length" property value of `object`.
 *
 * **Note:** This function is used to avoid a [JIT bug](https://bugs.webkit.org/show_bug.cgi?id=142792)
 * that affects Safari on at least iOS 8.1-8.3 ARM64.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {*} Returns the "length" value.
 */
var getLength = baseProperty('length');

/**
 * Checks if `value` is array-like.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 */
function isArrayLike(value) {
  return value != null && isLength(getLength(value));
}

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  value = (typeof value == 'number' || reIsUint.test(value)) ? +value : -1;
  length = length == null ? MAX_SAFE_INTEGER : length;
  return value > -1 && value % 1 == 0 && value < length;
}

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This function is based on [`ToLength`](http://ecma-international.org/ecma-262/6.0/#sec-tolength).
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 */
function isLength(value) {
  return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

/**
 * A fallback implementation of `Object.keys` which creates an array of the
 * own enumerable property names of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function shimKeys(object) {
  var props = keysIn(object),
      propsLength = props.length,
      length = propsLength && object.length;

  var allowIndexes = !!length && isLength(length) &&
    (isArray(object) || isArguments(object));

  var index = -1,
      result = [];

  while (++index < propsLength) {
    var key = props[index];
    if ((allowIndexes && isIndex(key, length)) || hasOwnProperty.call(object, key)) {
      result.push(key);
    }
  }
  return result;
}

/**
 * Checks if `value` is the [language type](https://es5.github.io/#x8) of `Object`.
 * (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(1);
 * // => false
 */
function isObject(value) {
  // Avoid a V8 JIT bug in Chrome 19-20.
  // See https://code.google.com/p/v8/issues/detail?id=2291 for more details.
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/6.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
var keys = !nativeKeys ? shimKeys : function(object) {
  var Ctor = object == null ? undefined : object.constructor;
  if ((typeof Ctor == 'function' && Ctor.prototype === object) ||
      (typeof object != 'function' && isArrayLike(object))) {
    return shimKeys(object);
  }
  return isObject(object) ? nativeKeys(object) : [];
};

/**
 * Creates an array of the own and inherited enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keysIn(new Foo);
 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
 */
function keysIn(object) {
  if (object == null) {
    return [];
  }
  if (!isObject(object)) {
    object = Object(object);
  }
  var length = object.length;
  length = (length && isLength(length) &&
    (isArray(object) || isArguments(object)) && length) || 0;

  var Ctor = object.constructor,
      index = -1,
      isProto = typeof Ctor == 'function' && Ctor.prototype === object,
      result = Array(length),
      skipIndexes = length > 0;

  while (++index < length) {
    result[index] = (index + '');
  }
  for (var key in object) {
    if (!(skipIndexes && isIndex(key, length)) &&
        !(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
      result.push(key);
    }
  }
  return result;
}

module.exports = keys;


/***/ }),
/* 359 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * object.omit <https://github.com/jonschlinkert/object.omit>
 *
 * Copyright (c) 2014-2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */



var isObject = __webpack_require__(352);
var forOwn = __webpack_require__(348);

module.exports = function omit(obj, keys) {
  if (!isObject(obj)) return {};

  keys = [].concat.apply([], [].slice.call(arguments, 1));
  var last = keys[keys.length - 1];
  var res = {}, fn;

  if (typeof last === 'function') {
    fn = keys.pop();
  }

  var isFunction = typeof fn === 'function';
  if (!keys.length && !isFunction) {
    return obj;
  }

  forOwn(obj, function(value, key) {
    if (keys.indexOf(key) === -1) {

      if (!isFunction) {
        res[key] = value;
      } else if (fn(value, key, obj)) {
        res[key] = value;
      }
    }
  });
  return res;
};


/***/ }),
/* 360 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var strictUriEncode = __webpack_require__(405);
var objectAssign = __webpack_require__(17);

function encoderForArrayFormat(opts) {
	switch (opts.arrayFormat) {
		case 'index':
			return function (key, value, index) {
				return value === null ? [
					encode(key, opts),
					'[',
					index,
					']'
				].join('') : [
					encode(key, opts),
					'[',
					encode(index, opts),
					']=',
					encode(value, opts)
				].join('');
			};

		case 'bracket':
			return function (key, value) {
				return value === null ? encode(key, opts) : [
					encode(key, opts),
					'[]=',
					encode(value, opts)
				].join('');
			};

		default:
			return function (key, value) {
				return value === null ? encode(key, opts) : [
					encode(key, opts),
					'=',
					encode(value, opts)
				].join('');
			};
	}
}

function parserForArrayFormat(opts) {
	var result;

	switch (opts.arrayFormat) {
		case 'index':
			return function (key, value, accumulator) {
				result = /\[(\d*)\]$/.exec(key);

				key = key.replace(/\[\d*\]$/, '');

				if (!result) {
					accumulator[key] = value;
					return;
				}

				if (accumulator[key] === undefined) {
					accumulator[key] = {};
				}

				accumulator[key][result[1]] = value;
			};

		case 'bracket':
			return function (key, value, accumulator) {
				result = /(\[\])$/.exec(key);
				key = key.replace(/\[\]$/, '');

				if (!result) {
					accumulator[key] = value;
					return;
				} else if (accumulator[key] === undefined) {
					accumulator[key] = [value];
					return;
				}

				accumulator[key] = [].concat(accumulator[key], value);
			};

		default:
			return function (key, value, accumulator) {
				if (accumulator[key] === undefined) {
					accumulator[key] = value;
					return;
				}

				accumulator[key] = [].concat(accumulator[key], value);
			};
	}
}

function encode(value, opts) {
	if (opts.encode) {
		return opts.strict ? strictUriEncode(value) : encodeURIComponent(value);
	}

	return value;
}

function keysSorter(input) {
	if (Array.isArray(input)) {
		return input.sort();
	} else if (typeof input === 'object') {
		return keysSorter(Object.keys(input)).sort(function (a, b) {
			return Number(a) - Number(b);
		}).map(function (key) {
			return input[key];
		});
	}

	return input;
}

exports.extract = function (str) {
	return str.split('?')[1] || '';
};

exports.parse = function (str, opts) {
	opts = objectAssign({arrayFormat: 'none'}, opts);

	var formatter = parserForArrayFormat(opts);

	// Create an object with no prototype
	// https://github.com/sindresorhus/query-string/issues/47
	var ret = Object.create(null);

	if (typeof str !== 'string') {
		return ret;
	}

	str = str.trim().replace(/^(\?|#|&)/, '');

	if (!str) {
		return ret;
	}

	str.split('&').forEach(function (param) {
		var parts = param.replace(/\+/g, ' ').split('=');
		// Firefox (pre 40) decodes `%3D` to `=`
		// https://github.com/sindresorhus/query-string/pull/37
		var key = parts.shift();
		var val = parts.length > 0 ? parts.join('=') : undefined;

		// missing `=` should be `null`:
		// http://w3.org/TR/2012/WD-url-20120524/#collect-url-parameters
		val = val === undefined ? null : decodeURIComponent(val);

		formatter(decodeURIComponent(key), val, ret);
	});

	return Object.keys(ret).sort().reduce(function (result, key) {
		var val = ret[key];
		if (Boolean(val) && typeof val === 'object' && !Array.isArray(val)) {
			// Sort object keys, not values
			result[key] = keysSorter(val);
		} else {
			result[key] = val;
		}

		return result;
	}, Object.create(null));
};

exports.stringify = function (obj, opts) {
	var defaults = {
		encode: true,
		strict: true,
		arrayFormat: 'none'
	};

	opts = objectAssign(defaults, opts);

	var formatter = encoderForArrayFormat(opts);

	return obj ? Object.keys(obj).sort().map(function (key) {
		var val = obj[key];

		if (val === undefined) {
			return '';
		}

		if (val === null) {
			return encode(key, opts);
		}

		if (Array.isArray(val)) {
			var result = [];

			val.slice().forEach(function (val2) {
				if (val2 === undefined) {
					return;
				}

				result.push(formatter(key, val2, result.length));
			});

			return result.join('&');
		}

		return encode(key, opts) + '=' + encode(val, opts);
	}).filter(function (x) {
		return x.length > 0;
	}).join('&') : '';
};


/***/ }),
/* 361 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var now = __webpack_require__(362)
  , root = typeof window === 'undefined' ? global : window
  , vendors = ['moz', 'webkit']
  , suffix = 'AnimationFrame'
  , raf = root['request' + suffix]
  , caf = root['cancel' + suffix] || root['cancelRequest' + suffix]

for(var i = 0; !raf && i < vendors.length; i++) {
  raf = root[vendors[i] + 'Request' + suffix]
  caf = root[vendors[i] + 'Cancel' + suffix]
      || root[vendors[i] + 'CancelRequest' + suffix]
}

// Some versions of FF have rAF but not cAF
if(!raf || !caf) {
  var last = 0
    , id = 0
    , queue = []
    , frameDuration = 1000 / 60

  raf = function(callback) {
    if(queue.length === 0) {
      var _now = now()
        , next = Math.max(0, frameDuration - (_now - last))
      last = next + _now
      setTimeout(function() {
        var cp = queue.slice(0)
        // Clear queue here to prevent
        // callbacks from appending listeners
        // to the current frame's queue
        queue.length = 0
        for(var i = 0; i < cp.length; i++) {
          if(!cp[i].cancelled) {
            try{
              cp[i].callback(last)
            } catch(e) {
              setTimeout(function() { throw e }, 0)
            }
          }
        }
      }, Math.round(next))
    }
    queue.push({
      handle: ++id,
      callback: callback,
      cancelled: false
    })
    return id
  }

  caf = function(handle) {
    for(var i = 0; i < queue.length; i++) {
      if(queue[i].handle === handle) {
        queue[i].cancelled = true
      }
    }
  }
}

module.exports = function(fn) {
  // Wrap in a new function to prevent
  // `cancel` potentially being assigned
  // to the native rAF function
  return raf.call(root, fn)
}
module.exports.cancel = function() {
  caf.apply(root, arguments)
}
module.exports.polyfill = function() {
  root.requestAnimationFrame = raf
  root.cancelAnimationFrame = caf
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(43)))

/***/ }),
/* 362 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {// Generated by CoffeeScript 1.12.2
(function() {
  var getNanoSeconds, hrtime, loadTime, moduleLoadTime, nodeLoadTime, upTime;

  if ((typeof performance !== "undefined" && performance !== null) && performance.now) {
    module.exports = function() {
      return performance.now();
    };
  } else if ((typeof process !== "undefined" && process !== null) && process.hrtime) {
    module.exports = function() {
      return (getNanoSeconds() - nodeLoadTime) / 1e6;
    };
    hrtime = process.hrtime;
    getNanoSeconds = function() {
      var hr;
      hr = hrtime();
      return hr[0] * 1e9 + hr[1];
    };
    moduleLoadTime = getNanoSeconds();
    upTime = process.uptime() * 1e9;
    nodeLoadTime = moduleLoadTime - upTime;
  } else if (Date.now) {
    module.exports = function() {
      return Date.now() - loadTime;
    };
    loadTime = Date.now();
  } else {
    module.exports = function() {
      return new Date().getTime() - loadTime;
    };
    loadTime = new Date().getTime();
  }

}).call(this);

//# sourceMappingURL=performance-now.js.map

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(133)))

/***/ }),
/* 363 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_defineProperty__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_defineProperty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_defineProperty__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_objectWithoutProperties__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_objectWithoutProperties___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_objectWithoutProperties__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_prop_types__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rc_util_es_PureRenderMixin__ = __webpack_require__(373);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rc_util_es_PureRenderMixin___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_rc_util_es_PureRenderMixin__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_classnames__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_classnames__);












var Checkbox = function (_React$Component) {
  __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits___default()(Checkbox, _React$Component);

  function Checkbox(props) {
    __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck___default()(this, Checkbox);

    var _this = __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn___default()(this, (Checkbox.__proto__ || Object.getPrototypeOf(Checkbox)).call(this, props));

    _initialiseProps.call(_this);

    var checked = 'checked' in props ? props.checked : props.defaultChecked;

    _this.state = {
      checked: checked
    };
    return _this;
  }

  __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass___default()(Checkbox, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if ('checked' in nextProps) {
        this.setState({
          checked: nextProps.checked
        });
      }
    }
  }, {
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate() {
      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return __WEBPACK_IMPORTED_MODULE_9_rc_util_es_PureRenderMixin___default.a.shouldComponentUpdate.apply(this, args);
    }
  }, {
    key: 'render',
    value: function render() {
      var _classNames;

      var _props = this.props,
          prefixCls = _props.prefixCls,
          className = _props.className,
          style = _props.style,
          name = _props.name,
          type = _props.type,
          disabled = _props.disabled,
          readOnly = _props.readOnly,
          tabIndex = _props.tabIndex,
          onClick = _props.onClick,
          onFocus = _props.onFocus,
          onBlur = _props.onBlur,
          others = __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_objectWithoutProperties___default()(_props, ['prefixCls', 'className', 'style', 'name', 'type', 'disabled', 'readOnly', 'tabIndex', 'onClick', 'onFocus', 'onBlur']);

      var globalProps = Object.keys(others).reduce(function (prev, key) {
        if (key.substr(0, 5) === 'aria-' || key.substr(0, 5) === 'data-' || key === 'role') {
          prev[key] = others[key];
        }
        return prev;
      }, {});

      var checked = this.state.checked;

      var classString = __WEBPACK_IMPORTED_MODULE_10_classnames___default()(prefixCls, className, (_classNames = {}, __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_defineProperty___default()(_classNames, prefixCls + '-checked', checked), __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_defineProperty___default()(_classNames, prefixCls + '-disabled', disabled), _classNames));

      return __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
        'span',
        { className: classString, style: style },
        __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement('input', __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({
          name: name,
          type: type,
          readOnly: readOnly,
          disabled: disabled,
          tabIndex: tabIndex,
          className: prefixCls + '-input',
          checked: !!checked,
          onClick: onClick,
          onFocus: onFocus,
          onBlur: onBlur,
          onChange: this.handleChange
        }, globalProps)),
        __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement('span', { className: prefixCls + '-inner' })
      );
    }
  }]);

  return Checkbox;
}(__WEBPACK_IMPORTED_MODULE_7_react___default.a.Component);

Checkbox.propTypes = {
  prefixCls: __WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.string,
  className: __WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.string,
  style: __WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.object,
  name: __WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.string,
  type: __WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.string,
  defaultChecked: __WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.number, __WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.bool]),
  checked: __WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.number, __WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.bool]),
  disabled: __WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.bool,
  onFocus: __WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.func,
  onBlur: __WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.func,
  onChange: __WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.func,
  onClick: __WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.func,
  tabIndex: __WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.string,
  readOnly: __WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.bool
};
Checkbox.defaultProps = {
  prefixCls: 'rc-checkbox',
  className: '',
  style: {},
  type: 'checkbox',
  defaultChecked: false,
  onFocus: function onFocus() {},
  onBlur: function onBlur() {},
  onChange: function onChange() {}
};

var _initialiseProps = function _initialiseProps() {
  var _this2 = this;

  this.handleChange = function (e) {
    var props = _this2.props;

    if (props.disabled) {
      return;
    }
    if (!('checked' in props)) {
      _this2.setState({
        checked: e.target.checked
      });
    }
    props.onChange({
      target: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, props, {
        checked: e.target.checked
      }),
      stopPropagation: function stopPropagation() {
        e.stopPropagation();
      },
      preventDefault: function preventDefault() {
        e.preventDefault();
      }
    });
  };
};

/* harmony default export */ __webpack_exports__["a"] = (Checkbox);

/***/ }),
/* 364 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _classCallCheck2 = __webpack_require__(1);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(2);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(15);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _KeyCode = __webpack_require__(375);

var _KeyCode2 = _interopRequireDefault(_KeyCode);

var _rcAnimate = __webpack_require__(148);

var _rcAnimate2 = _interopRequireDefault(_rcAnimate);

var _LazyRenderBox = __webpack_require__(365);

var _LazyRenderBox2 = _interopRequireDefault(_LazyRenderBox);

var _getScrollBarSize = __webpack_require__(376);

var _getScrollBarSize2 = _interopRequireDefault(_getScrollBarSize);

var _objectAssign = __webpack_require__(17);

var _objectAssign2 = _interopRequireDefault(_objectAssign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var __assign = undefined && undefined.__assign || Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
    }
    return t;
};

var uuid = 0;
var openCount = 0;
/* eslint react/no-is-mounted:0 */
function noop() {}
function getScroll(w, top) {
    var ret = w['page' + (top ? 'Y' : 'X') + 'Offset'];
    var method = 'scroll' + (top ? 'Top' : 'Left');
    if (typeof ret !== 'number') {
        var d = w.document;
        ret = d.documentElement[method];
        if (typeof ret !== 'number') {
            ret = d.body[method];
        }
    }
    return ret;
}
function setTransformOrigin(node, value) {
    var style = node.style;
    ['Webkit', 'Moz', 'Ms', 'ms'].forEach(function (prefix) {
        style[prefix + 'TransformOrigin'] = value;
    });
    style['transformOrigin'] = value;
}
function offset(el) {
    var rect = el.getBoundingClientRect();
    var pos = {
        left: rect.left,
        top: rect.top
    };
    var doc = el.ownerDocument;
    var w = doc.defaultView || doc.parentWindow;
    pos.left += getScroll(w);
    pos.top += getScroll(w, true);
    return pos;
}

var Dialog = function (_React$Component) {
    (0, _inherits3["default"])(Dialog, _React$Component);

    function Dialog() {
        (0, _classCallCheck3["default"])(this, Dialog);

        var _this = (0, _possibleConstructorReturn3["default"])(this, _React$Component.apply(this, arguments));

        _this.onAnimateLeave = function () {
            // need demo?
            // https://github.com/react-component/dialog/pull/28
            if (_this.refs.wrap) {
                _this.refs.wrap.style.display = 'none';
            }
            _this.inTransition = false;
            _this.removeScrollingEffect();
            _this.props.afterClose();
        };
        _this.onMaskClick = function (e) {
            // android trigger click on open (fastclick??)
            if (Date.now() - _this.openTime < 300) {
                return;
            }
            if (e.target === e.currentTarget) {
                _this.close(e);
            }
        };
        _this.onKeyDown = function (e) {
            var props = _this.props;
            if (props.keyboard && e.keyCode === _KeyCode2["default"].ESC) {
                _this.close(e);
            }
            // keep focus inside dialog
            if (props.visible) {
                if (e.keyCode === _KeyCode2["default"].TAB) {
                    var activeElement = document.activeElement;
                    var dialogRoot = _this.refs.wrap;
                    var sentinel = _this.refs.sentinel;
                    if (e.shiftKey) {
                        if (activeElement === dialogRoot) {
                            sentinel.focus();
                        }
                    } else if (activeElement === _this.refs.sentinel) {
                        dialogRoot.focus();
                    }
                }
            }
        };
        _this.getDialogElement = function () {
            var props = _this.props;
            var closable = props.closable;
            var prefixCls = props.prefixCls;
            var dest = {};
            if (props.width !== undefined) {
                dest.width = props.width;
            }
            if (props.height !== undefined) {
                dest.height = props.height;
            }
            var footer = void 0;
            if (props.footer) {
                footer = _react2["default"].createElement("div", { className: prefixCls + '-footer', ref: "footer" }, props.footer);
            }
            var header = void 0;
            if (props.title) {
                header = _react2["default"].createElement("div", { className: prefixCls + '-header', ref: "header" }, _react2["default"].createElement("div", { className: prefixCls + '-title', id: _this.titleId }, props.title));
            }
            var closer = void 0;
            if (closable) {
                closer = _react2["default"].createElement("button", { onClick: _this.close, "aria-label": "Close", className: prefixCls + '-close' }, _react2["default"].createElement("span", { className: prefixCls + '-close-x' }));
            }
            var style = (0, _objectAssign2["default"])({}, props.style, dest);
            var transitionName = _this.getTransitionName();
            var dialogElement = _react2["default"].createElement(_LazyRenderBox2["default"], { key: "dialog-element", role: "document", ref: "dialog", style: style, className: prefixCls + ' ' + (props.className || ''), visible: props.visible }, _react2["default"].createElement("div", { className: prefixCls + '-content' }, closer, header, _react2["default"].createElement("div", __assign({ className: prefixCls + '-body', style: props.bodyStyle, ref: "body" }, props.bodyProps), props.children), footer), _react2["default"].createElement("div", { tabIndex: 0, ref: "sentinel", style: { width: 0, height: 0, overflow: 'hidden' } }, "sentinel"));
            return _react2["default"].createElement(_rcAnimate2["default"], { key: "dialog", showProp: "visible", onLeave: _this.onAnimateLeave, transitionName: transitionName, component: "", transitionAppear: true }, dialogElement);
        };
        _this.getZIndexStyle = function () {
            var style = {};
            var props = _this.props;
            if (props.zIndex !== undefined) {
                style.zIndex = props.zIndex;
            }
            return style;
        };
        _this.getWrapStyle = function () {
            return (0, _objectAssign2["default"])({}, _this.getZIndexStyle(), _this.props.wrapStyle);
        };
        _this.getMaskStyle = function () {
            return (0, _objectAssign2["default"])({}, _this.getZIndexStyle(), _this.props.maskStyle);
        };
        _this.getMaskElement = function () {
            var props = _this.props;
            var maskElement = void 0;
            if (props.mask) {
                var maskTransition = _this.getMaskTransitionName();
                maskElement = _react2["default"].createElement(_LazyRenderBox2["default"], __assign({ style: _this.getMaskStyle(), key: "mask", className: props.prefixCls + '-mask', hiddenClassName: props.prefixCls + '-mask-hidden', visible: props.visible }, props.maskProps));
                if (maskTransition) {
                    maskElement = _react2["default"].createElement(_rcAnimate2["default"], { key: "mask", showProp: "visible", transitionAppear: true, component: "", transitionName: maskTransition }, maskElement);
                }
            }
            return maskElement;
        };
        _this.getMaskTransitionName = function () {
            var props = _this.props;
            var transitionName = props.maskTransitionName;
            var animation = props.maskAnimation;
            if (!transitionName && animation) {
                transitionName = props.prefixCls + '-' + animation;
            }
            return transitionName;
        };
        _this.getTransitionName = function () {
            var props = _this.props;
            var transitionName = props.transitionName;
            var animation = props.animation;
            if (!transitionName && animation) {
                transitionName = props.prefixCls + '-' + animation;
            }
            return transitionName;
        };
        _this.getElement = function (part) {
            return _this.refs[part];
        };
        _this.setScrollbar = function () {
            if (_this.bodyIsOverflowing && _this.scrollbarWidth !== undefined) {
                document.body.style.paddingRight = _this.scrollbarWidth + 'px';
            }
        };
        _this.addScrollingEffect = function () {
            openCount++;
            if (openCount !== 1) {
                return;
            }
            _this.checkScrollbar();
            _this.setScrollbar();
            document.body.style.overflow = 'hidden';
            // this.adjustDialog();
        };
        _this.removeScrollingEffect = function () {
            openCount--;
            if (openCount !== 0) {
                return;
            }
            document.body.style.overflow = '';
            _this.resetScrollbar();
            // this.resetAdjustments();
        };
        _this.close = function (e) {
            _this.props.onClose(e);
        };
        _this.checkScrollbar = function () {
            var fullWindowWidth = window.innerWidth;
            if (!fullWindowWidth) {
                var documentElementRect = document.documentElement.getBoundingClientRect();
                fullWindowWidth = documentElementRect.right - Math.abs(documentElementRect.left);
            }
            _this.bodyIsOverflowing = document.body.clientWidth < fullWindowWidth;
            if (_this.bodyIsOverflowing) {
                _this.scrollbarWidth = (0, _getScrollBarSize2["default"])();
            }
        };
        _this.resetScrollbar = function () {
            document.body.style.paddingRight = '';
        };
        _this.adjustDialog = function () {
            if (_this.refs.wrap && _this.scrollbarWidth !== undefined) {
                var modalIsOverflowing = _this.refs.wrap.scrollHeight > document.documentElement.clientHeight;
                _this.refs.wrap.style.paddingLeft = (!_this.bodyIsOverflowing && modalIsOverflowing ? _this.scrollbarWidth : '') + 'px';
                _this.refs.wrap.style.paddingRight = (_this.bodyIsOverflowing && !modalIsOverflowing ? _this.scrollbarWidth : '') + 'px';
            }
        };
        _this.resetAdjustments = function () {
            if (_this.refs.wrap) {
                _this.refs.wrap.style.paddingLeft = _this.refs.wrap.style.paddingLeft = '';
            }
        };
        return _this;
    }

    Dialog.prototype.componentWillMount = function componentWillMount() {
        this.inTransition = false;
        this.titleId = 'rcDialogTitle' + uuid++;
    };

    Dialog.prototype.componentDidMount = function componentDidMount() {
        this.componentDidUpdate({});
    };

    Dialog.prototype.componentDidUpdate = function componentDidUpdate(prevProps) {
        var props = this.props;
        var mousePosition = this.props.mousePosition;
        if (props.visible) {
            // first show
            if (!prevProps.visible) {
                this.openTime = Date.now();
                this.lastOutSideFocusNode = document.activeElement;
                this.addScrollingEffect();
                this.refs.wrap.focus();
                var dialogNode = _reactDom2["default"].findDOMNode(this.refs.dialog);
                if (mousePosition) {
                    var elOffset = offset(dialogNode);
                    setTransformOrigin(dialogNode, mousePosition.x - elOffset.left + 'px ' + (mousePosition.y - elOffset.top) + 'px');
                } else {
                    setTransformOrigin(dialogNode, '');
                }
            }
        } else if (prevProps.visible) {
            this.inTransition = true;
            if (props.mask && this.lastOutSideFocusNode) {
                try {
                    this.lastOutSideFocusNode.focus();
                } catch (e) {
                    this.lastOutSideFocusNode = null;
                }
                this.lastOutSideFocusNode = null;
            }
        }
    };

    Dialog.prototype.componentWillUnmount = function componentWillUnmount() {
        if (this.props.visible || this.inTransition) {
            this.removeScrollingEffect();
        }
    };

    Dialog.prototype.render = function render() {
        var props = this.props;
        var prefixCls = props.prefixCls,
            maskClosable = props.maskClosable;

        var style = this.getWrapStyle();
        // clear hide display
        // and only set display after async anim, not here for hide
        if (props.visible) {
            style.display = null;
        }
        return _react2["default"].createElement("div", null, this.getMaskElement(), _react2["default"].createElement("div", __assign({ tabIndex: -1, onKeyDown: this.onKeyDown, className: prefixCls + '-wrap ' + (props.wrapClassName || ''), ref: "wrap", onClick: maskClosable ? this.onMaskClick : undefined, role: "dialog", "aria-labelledby": props.title ? this.titleId : null, style: style }, props.wrapProps), this.getDialogElement()));
    };

    return Dialog;
}(_react2["default"].Component);

exports["default"] = Dialog;

Dialog.defaultProps = {
    afterClose: noop,
    className: '',
    mask: true,
    visible: false,
    keyboard: true,
    closable: true,
    maskClosable: true,
    prefixCls: 'rc-dialog',
    onClose: noop
};
module.exports = exports['default'];

/***/ }),
/* 365 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _classCallCheck2 = __webpack_require__(1);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(2);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _objectAssign = __webpack_require__(17);

var _objectAssign2 = _interopRequireDefault(_objectAssign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var __assign = undefined && undefined.__assign || Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
    }
    return t;
};

var LazyRenderBox = function (_React$Component) {
    (0, _inherits3["default"])(LazyRenderBox, _React$Component);

    function LazyRenderBox() {
        (0, _classCallCheck3["default"])(this, LazyRenderBox);
        return (0, _possibleConstructorReturn3["default"])(this, _React$Component.apply(this, arguments));
    }

    LazyRenderBox.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps) {
        return !!nextProps.hiddenClassName || !!nextProps.visible;
    };

    LazyRenderBox.prototype.render = function render() {
        var className = this.props.className;
        if (!!this.props.hiddenClassName && !this.props.visible) {
            className += ' ' + this.props.hiddenClassName;
        }
        var props = (0, _objectAssign2["default"])({}, this.props);
        delete props.hiddenClassName;
        delete props.visible;
        props.className = className;
        return _react2["default"].createElement("div", __assign({}, props));
    };

    return LazyRenderBox;
}(_react2["default"].Component);

exports["default"] = LazyRenderBox;
module.exports = exports['default'];

/***/ }),
/* 366 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_prop_types__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_dom__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_hammerjs__ = __webpack_require__(351);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_hammerjs__);








// https://github.com/hammerjs/hammer.js/issues/930
// https://github.com/JedWatson/react-hammerjs/issues/14
// wait to see if we need the condition require hack for ssr


var privateProps = {
	children: true,
	direction: true,
	options: true,
	recognizeWith: true,
	vertical: true
};

/**
 * Hammer Component
 * ================
 */

var handlerToEvent = {
	action: 'tap press',
	onDoubleTap: 'doubletap',
	onPan: 'pan',
	onPanCancel: 'pancancel',
	onPanEnd: 'panend',
	onPanStart: 'panstart',
	onPinch: 'pinch',
	onPinchCancel: 'pinchcancel',
	onPinchEnd: 'pinchend',
	onPinchIn: 'pinchin',
	onPinchOut: 'pinchout',
	onPinchStart: 'pinchstart',
	onPress: 'press',
	onPressUp: 'pressup',
	onRotate: 'rotate',
	onRotateCancel: 'rotatecancel',
	onRotateEnd: 'rotateend',
	onRotateMove: 'rotatemove',
	onRotateStart: 'rotatestart',
	onSwipe: 'swipe',
	onSwipeRight: 'swiperight',
	onSwipeLeft: 'swipeleft',
	onSwipeUp: 'swipeup',
	onSwipeDown: 'swipedown',
	onTap: 'tap'
};

Object.keys(handlerToEvent).forEach(function (i) {
	privateProps[i] = true;
});

function updateHammer(hammer, props) {
	var _this = this;

	if (props.hasOwnProperty('vertical')) {
		console.warn('vertical is deprecated, please use `direction` instead');
	}

	var directionProp = props.direction;
	if (directionProp || props.hasOwnProperty('vertical')) {
		var direction = directionProp ? directionProp : props.vertical ? 'DIRECTION_ALL' : 'DIRECTION_HORIZONTAL';
		hammer.get('pan').set({ direction: __WEBPACK_IMPORTED_MODULE_7_hammerjs___default.a[direction] });
		hammer.get('swipe').set({ direction: __WEBPACK_IMPORTED_MODULE_7_hammerjs___default.a[direction] });
	}

	if (props.options) {
		Object.keys(props.options).forEach(function (option) {
			if (option === 'recognizers') {
				Object.keys(props.options.recognizers).forEach(function (gesture) {
					var recognizer = hammer.get(gesture);
					recognizer.set(props.options.recognizers[gesture]);
					if (props.options.recognizers[gesture].requireFailure) {
						recognizer.requireFailure(props.options.recognizers[gesture].requireFailure);
					}
				}, _this);
			} else {
				var key = option;
				var optionObj = {};
				optionObj[key] = props.options[option];
				hammer.set(optionObj);
			}
		}, this);
	}

	if (props.recognizeWith) {
		Object.keys(props.recognizeWith).forEach(function (gesture) {
			var recognizer = hammer.get(gesture);
			recognizer.recognizeWith(props.recognizeWith[gesture]);
		}, this);
	}

	Object.keys(props).forEach(function (p) {
		var e = handlerToEvent[p];
		if (e) {
			hammer.off(e);
			hammer.on(e, props[p]);
		}
	});
}

var HammerComponent = function (_React$Component) {
	__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits___default()(HammerComponent, _React$Component);

	function HammerComponent() {
		__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, HammerComponent);

		return __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn___default()(this, (HammerComponent.__proto__ || Object.getPrototypeOf(HammerComponent)).apply(this, arguments));
	}

	__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default()(HammerComponent, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			this.hammer = new __WEBPACK_IMPORTED_MODULE_7_hammerjs___default.a(__WEBPACK_IMPORTED_MODULE_6_react_dom___default.a.findDOMNode(this));
			updateHammer(this.hammer, this.props);
		}
	}, {
		key: 'componentDidUpdate',
		value: function componentDidUpdate() {
			if (this.hammer) {
				updateHammer(this.hammer, this.props);
			}
		}
	}, {
		key: 'componentWillUnmount',
		value: function componentWillUnmount() {
			if (this.hammer) {
				this.hammer.stop();
				this.hammer.destroy();
			}
			this.hammer = null;
		}
	}, {
		key: 'render',
		value: function render() {
			var props = {};

			Object.keys(this.props).forEach(function (i) {
				if (!privateProps[i]) {
					props[i] = this.props[i];
				}
			}, this);

			// Reuse the child provided
			// This makes it flexible to use whatever element is wanted (div, ul, etc)
			return __WEBPACK_IMPORTED_MODULE_4_react___default.a.cloneElement(__WEBPACK_IMPORTED_MODULE_4_react___default.a.Children.only(this.props.children), props);
		}
	}]);

	return HammerComponent;
}(__WEBPACK_IMPORTED_MODULE_4_react___default.a.Component);

HammerComponent.displayName = 'Hammer';
HammerComponent.propTypes = {
	className: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.string
};
/* harmony default export */ __webpack_exports__["a"] = (HammerComponent);

/***/ }),
/* 367 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(6);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(10);

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

function isString(str) {
  return typeof str === 'string';
}

var Step = function (_React$Component) {
  _inherits(Step, _React$Component);

  function Step() {
    _classCallCheck(this, Step);

    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
  }

  Step.prototype.render = function render() {
    var _classNames, _classNames2;

    var _props = this.props;
    var className = _props.className;
    var prefixCls = _props.prefixCls;
    var style = _props.style;
    var itemWidth = _props.itemWidth;
    var _props$status = _props.status;
    var status = _props$status === undefined ? 'wait' : _props$status;
    var iconPrefix = _props.iconPrefix;
    var icon = _props.icon;
    var wrapperStyle = _props.wrapperStyle;
    var adjustMarginRight = _props.adjustMarginRight;
    var stepNumber = _props.stepNumber;
    var description = _props.description;
    var title = _props.title;
    var progressDot = _props.progressDot;

    var restProps = _objectWithoutProperties(_props, ['className', 'prefixCls', 'style', 'itemWidth', 'status', 'iconPrefix', 'icon', 'wrapperStyle', 'adjustMarginRight', 'stepNumber', 'description', 'title', 'progressDot']);

    var iconClassName = (0, _classnames2["default"])((_classNames = {}, _defineProperty(_classNames, prefixCls + '-icon', true), _defineProperty(_classNames, iconPrefix + 'icon', true), _defineProperty(_classNames, iconPrefix + 'icon-' + icon, icon && isString(icon)), _defineProperty(_classNames, iconPrefix + 'icon-check', !icon && status === 'finish'), _defineProperty(_classNames, iconPrefix + 'icon-cross', !icon && status === 'error'), _classNames));

    var iconNode = void 0;
    var iconDot = _react2["default"].createElement('span', { className: prefixCls + '-icon-dot' });
    // `progressDot` enjoy the highest priority
    if (!!progressDot) {
      if (typeof progressDot === 'function') {
        iconNode = _react2["default"].createElement(
          'span',
          { className: prefixCls + '-icon' },
          progressDot(iconDot, { index: stepNumber - 1, status: status, title: title, description: description })
        );
      } else {
        iconNode = _react2["default"].createElement(
          'span',
          { className: prefixCls + '-icon' },
          iconDot
        );
      }
    } else if (icon && !isString(icon)) {
      iconNode = _react2["default"].createElement(
        'span',
        { className: prefixCls + '-icon' },
        icon
      );
    } else if (icon || status === 'finish' || status === 'error') {
      iconNode = _react2["default"].createElement('span', { className: iconClassName });
    } else {
      iconNode = _react2["default"].createElement(
        'span',
        { className: prefixCls + '-icon' },
        stepNumber
      );
    }
    var classString = (0, _classnames2["default"])((_classNames2 = {}, _defineProperty(_classNames2, prefixCls + '-item', true), _defineProperty(_classNames2, prefixCls + '-status-' + status, true), _defineProperty(_classNames2, prefixCls + '-custom', icon), _defineProperty(_classNames2, className, !!className), _classNames2));
    return _react2["default"].createElement(
      'div',
      _extends({}, restProps, {
        className: classString,
        style: _extends({ width: itemWidth, marginRight: adjustMarginRight }, style)
      }),
      _react2["default"].createElement(
        'div',
        {
          ref: 'tail',
          className: prefixCls + '-tail',
          style: { paddingRight: -adjustMarginRight }
        },
        _react2["default"].createElement('i', null)
      ),
      _react2["default"].createElement(
        'div',
        { className: prefixCls + '-step' },
        _react2["default"].createElement(
          'div',
          {
            className: prefixCls + '-head',
            style: { background: wrapperStyle.background || wrapperStyle.backgroundColor }
          },
          _react2["default"].createElement(
            'div',
            { className: prefixCls + '-head-inner' },
            iconNode
          )
        ),
        _react2["default"].createElement(
          'div',
          { ref: 'main', className: prefixCls + '-main' },
          _react2["default"].createElement(
            'div',
            {
              className: prefixCls + '-title',
              style: { background: wrapperStyle.background || wrapperStyle.backgroundColor }
            },
            title
          ),
          description ? _react2["default"].createElement(
            'div',
            { className: prefixCls + '-description' },
            description
          ) : ''
        )
      )
    );
  };

  return Step;
}(_react2["default"].Component);

exports["default"] = Step;


Step.propTypes = {
  className: _propTypes2["default"].string,
  prefixCls: _propTypes2["default"].string,
  style: _propTypes2["default"].object,
  wrapperStyle: _propTypes2["default"].object,
  itemWidth: _propTypes2["default"].oneOfType([_propTypes2["default"].number, _propTypes2["default"].string]),
  status: _propTypes2["default"].string,
  iconPrefix: _propTypes2["default"].string,
  icon: _propTypes2["default"].node,
  adjustMarginRight: _propTypes2["default"].oneOfType([_propTypes2["default"].number, _propTypes2["default"].string]),
  stepNumber: _propTypes2["default"].string,
  description: _propTypes2["default"].any,
  title: _propTypes2["default"].any,
  progressDot: _propTypes2["default"].oneOfType([_propTypes2["default"].bool, _propTypes2["default"].func])
};
module.exports = exports['default'];

/***/ }),
/* 368 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(6);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactDom = __webpack_require__(15);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _classnames = __webpack_require__(10);

var _classnames2 = _interopRequireDefault(_classnames);

var _lodash = __webpack_require__(355);

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var Steps = function (_React$Component) {
  _inherits(Steps, _React$Component);

  function Steps(props) {
    _classCallCheck(this, Steps);

    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

    _this.calcStepOffsetWidth = function () {
      var domNode = _reactDom2["default"].findDOMNode(_this);
      if (domNode.children.length > 0) {
        if (_this.calcTimeout) {
          clearTimeout(_this.calcTimeout);
        }
        _this.calcTimeout = setTimeout(function () {
          // +1 for fit edge bug of digit width, like 35.4px
          var lastStepOffsetWidth = (domNode.lastChild.offsetWidth || 0) + 1;
          // Reduce shake bug
          if (_this.state.lastStepOffsetWidth === lastStepOffsetWidth || Math.abs(_this.state.lastStepOffsetWidth - lastStepOffsetWidth) <= 3) {
            return;
          }
          _this.setState({ lastStepOffsetWidth: lastStepOffsetWidth });
        });
      }
    };

    _this.state = {
      lastStepOffsetWidth: 0
    };
    _this.calcStepOffsetWidth = (0, _lodash2["default"])(_this.calcStepOffsetWidth, 150);
    return _this;
  }

  Steps.prototype.componentDidMount = function componentDidMount() {
    this.calcStepOffsetWidth();
  };

  Steps.prototype.componentDidUpdate = function componentDidUpdate() {
    this.calcStepOffsetWidth();
  };

  Steps.prototype.componentWillUnmount = function componentWillUnmount() {
    if (this.calcTimeout) {
      clearTimeout(this.calcTimeout);
    }
    if (this.calcStepOffsetWidth.cancel) {
      this.calcStepOffsetWidth.cancel();
    }
  };

  Steps.prototype.render = function render() {
    var _classNames,
        _this2 = this;

    var props = this.props;
    var prefixCls = props.prefixCls;
    var _props$style = props.style;
    var style = _props$style === undefined ? {} : _props$style;
    var className = props.className;
    var children = props.children;
    var direction = props.direction;
    var labelPlacement = props.labelPlacement;
    var iconPrefix = props.iconPrefix;
    var status = props.status;
    var size = props.size;
    var current = props.current;
    var progressDot = props.progressDot;

    var restProps = _objectWithoutProperties(props, ['prefixCls', 'style', 'className', 'children', 'direction', 'labelPlacement', 'iconPrefix', 'status', 'size', 'current', 'progressDot']);

    var lastIndex = children.length - 1;
    var reLayouted = this.state.lastStepOffsetWidth > 0;
    var adjustedlabelPlacement = !!progressDot ? 'vertical' : labelPlacement;
    var classString = (0, _classnames2["default"])((_classNames = {}, _defineProperty(_classNames, prefixCls, true), _defineProperty(_classNames, prefixCls + '-' + size, size), _defineProperty(_classNames, prefixCls + '-' + direction, true), _defineProperty(_classNames, prefixCls + '-label-' + adjustedlabelPlacement, direction === 'horizontal'), _defineProperty(_classNames, prefixCls + '-hidden', !reLayouted), _defineProperty(_classNames, prefixCls + '-dot', !!progressDot), _defineProperty(_classNames, className, className), _classNames));

    return _react2["default"].createElement(
      'div',
      _extends({ className: classString, style: style }, restProps),
      _react2["default"].Children.map(children, function (ele, idx) {
        var itemWidth = direction === 'vertical' || idx === lastIndex || !reLayouted ? null : 100 / lastIndex + '%';
        var adjustMarginRight = direction === 'vertical' || idx === lastIndex ? null : -Math.round(_this2.state.lastStepOffsetWidth / lastIndex + 1);
        var np = {
          stepNumber: (idx + 1).toString(),
          itemWidth: itemWidth,
          adjustMarginRight: adjustMarginRight,
          prefixCls: prefixCls,
          iconPrefix: iconPrefix,
          wrapperStyle: style,
          progressDot: progressDot
        };

        // fix tail color
        if (status === 'error' && idx === current - 1) {
          np.className = props.prefixCls + '-next-error';
        }

        if (!ele.props.status) {
          if (idx === current) {
            np.status = status;
          } else if (idx < current) {
            np.status = 'finish';
          } else {
            np.status = 'wait';
          }
        }
        return _react2["default"].cloneElement(ele, np);
      }, this)
    );
  };

  return Steps;
}(_react2["default"].Component);

exports["default"] = Steps;


Steps.propTypes = {
  prefixCls: _propTypes2["default"].string,
  iconPrefix: _propTypes2["default"].string,
  direction: _propTypes2["default"].string,
  labelPlacement: _propTypes2["default"].string,
  children: _propTypes2["default"].any,
  status: _propTypes2["default"].string,
  size: _propTypes2["default"].string,
  progressDot: _propTypes2["default"].oneOfType([_propTypes2["default"].bool, _propTypes2["default"].func])
};

Steps.defaultProps = {
  prefixCls: 'rc-steps',
  iconPrefix: 'rc',
  direction: 'horizontal',
  labelPlacement: 'horizontal',
  current: 0,
  status: 'process',
  size: '',
  progressDot: false
};
module.exports = exports['default'];

/***/ }),
/* 369 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Steps = __webpack_require__(368);

var _Steps2 = _interopRequireDefault(_Steps);

var _Step = __webpack_require__(367);

var _Step2 = _interopRequireDefault(_Step);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_Steps2["default"].Step = _Step2["default"];
exports["default"] = _Steps2["default"];
module.exports = exports['default'];

/***/ }),
/* 370 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_dom__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rc_hammerjs__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_object_omit__ = __webpack_require__(359);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_object_omit___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_object_omit__);





var __rest = this && this.__rest || function (s, e) {
    var t = {};
    for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    }if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
    }return t;
};





var Swipeout = function (_React$Component) {
    __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default()(Swipeout, _React$Component);

    function Swipeout(props) {
        __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default()(this, Swipeout);

        var _this = __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default()(this, (Swipeout.__proto__ || Object.getPrototypeOf(Swipeout)).call(this, props));

        _this.onPanStart = _this.onPanStart.bind(_this);
        _this.onPan = _this.onPan.bind(_this);
        _this.onPanEnd = _this.onPanEnd.bind(_this);
        _this.onCloseSwipe = _this.onCloseSwipe.bind(_this);
        _this.openedLeft = false;
        _this.openedRight = false;
        return _this;
    }

    __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default()(Swipeout, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _props = this.props,
                _props$left = _props.left,
                left = _props$left === undefined ? [] : _props$left,
                _props$right = _props.right,
                right = _props$right === undefined ? [] : _props$right;

            var width = this.content.offsetWidth;
            if (this.cover) {
                this.cover.style.width = width + 'px';
            }
            this.contentWidth = width;
            this.btnsLeftWidth = width / 5 * left.length;
            this.btnsRightWidth = width / 5 * right.length;
            document.body.addEventListener('touchstart', this.onCloseSwipe, true);
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            document.body.removeEventListener('touchstart', this.onCloseSwipe);
        }
    }, {
        key: 'onCloseSwipe',
        value: function onCloseSwipe(ev) {
            var _this2 = this;

            if (this.openedLeft || this.openedRight) {
                var pNode = function (node) {
                    while (node.parentNode && node.parentNode !== document.body) {
                        if (node.className.indexOf(_this2.props.prefixCls + '-actions') > -1) {
                            return node;
                        }
                        node = node.parentNode;
                    }
                }(ev.target);
                if (!pNode) {
                    ev.preventDefault();
                    this.close();
                }
            }
        }
    }, {
        key: 'onPanStart',
        value: function onPanStart(e) {
            if (this.props.disabled) {
                return;
            }
            this.panStartX = e.deltaX;
        }
    }, {
        key: 'onPan',
        value: function onPan(e) {
            if (this.props.disabled) {
                return;
            }
            var _props2 = this.props,
                _props2$left = _props2.left,
                left = _props2$left === undefined ? [] : _props2$left,
                _props2$right = _props2.right,
                right = _props2$right === undefined ? [] : _props2$right;

            var posX = e.deltaX - this.panStartX;
            if (posX < 0 && right.length) {
                this._setStyle(Math.min(posX, 0));
            } else if (posX > 0 && left.length) {
                this._setStyle(Math.max(posX, 0));
            }
        }
    }, {
        key: 'onPanEnd',
        value: function onPanEnd(e) {
            if (this.props.disabled) {
                return;
            }
            var _props3 = this.props,
                _props3$left = _props3.left,
                left = _props3$left === undefined ? [] : _props3$left,
                _props3$right = _props3.right,
                right = _props3$right === undefined ? [] : _props3$right;

            var posX = e.deltaX - this.panStartX;
            var contentWidth = this.contentWidth;
            var btnsLeftWidth = this.btnsLeftWidth;
            var btnsRightWidth = this.btnsRightWidth;
            var openX = contentWidth * 0.33;
            var openLeft = posX > openX || posX > btnsLeftWidth / 2;
            var openRight = posX < -openX || posX < -btnsRightWidth / 2;
            if (openRight && posX < 0 && right.length) {
                this.open(-btnsRightWidth, false, true);
            } else if (openLeft && posX > 0 && left.length) {
                this.open(btnsLeftWidth, true, false);
            } else {
                this.close();
            }
        }
        // left & right button click

    }, {
        key: 'onBtnClick',
        value: function onBtnClick(ev, btn) {
            var onPress = btn.onPress;
            if (onPress) {
                onPress(ev);
            }
            if (this.props.autoClose) {
                this.close();
            }
        }
    }, {
        key: '_getContentEasing',
        value: function _getContentEasing(value, limit) {
            // limit content style left when value > actions width
            if (value < 0 && value < limit) {
                return limit - Math.pow(limit - value, 0.85);
            } else if (value > 0 && value > limit) {
                return limit + Math.pow(value - limit, 0.85);
            }
            return value;
        }
        // set content & actions style

    }, {
        key: '_setStyle',
        value: function _setStyle(value) {
            var _props4 = this.props,
                _props4$left = _props4.left,
                left = _props4$left === undefined ? [] : _props4$left,
                _props4$right = _props4.right,
                right = _props4$right === undefined ? [] : _props4$right;

            var limit = value > 0 ? this.btnsLeftWidth : -this.btnsRightWidth;
            var contentLeft = this._getContentEasing(value, limit);
            this.content.style.left = contentLeft + 'px';
            if (this.cover) {
                this.cover.style.display = Math.abs(value) > 0 ? 'block' : 'none';
                this.cover.style.left = contentLeft + 'px';
            }
            if (left.length) {
                var leftWidth = Math.max(Math.min(value, Math.abs(limit)), 0);
                this.left.style.width = leftWidth + 'px';
            }
            if (right.length) {
                var rightWidth = Math.max(Math.min(-value, Math.abs(limit)), 0);
                this.right.style.width = rightWidth + 'px';
            }
        }
    }, {
        key: 'open',
        value: function open(value, openedLeft, openedRight) {
            if (!this.openedLeft && !this.openedRight && this.props.onOpen) {
                this.props.onOpen();
            }
            this.openedLeft = openedLeft;
            this.openedRight = openedRight;
            this._setStyle(value);
        }
    }, {
        key: 'close',
        value: function close() {
            if ((this.openedLeft || this.openedRight) && this.props.onClose) {
                this.props.onClose();
            }
            this._setStyle(0);
            this.openedLeft = false;
            this.openedRight = false;
        }
    }, {
        key: 'renderButtons',
        value: function renderButtons(buttons, _ref) {
            var _this3 = this;

            var prefixCls = this.props.prefixCls;
            return buttons && buttons.length ? __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                'div',
                { className: prefixCls + '-actions ' + prefixCls + '-actions-' + _ref, ref: function ref(el) {
                        return _this3[_ref] = __WEBPACK_IMPORTED_MODULE_6_react_dom___default.a.findDOMNode(el);
                    } },
                buttons.map(function (btn, i) {
                    return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                        'div',
                        { key: i, className: prefixCls + '-btn ' + (btn.hasOwnProperty('className') ? btn.className : ''), style: btn.style, role: 'button', onClick: function onClick(e) {
                                return _this3.onBtnClick(e, btn);
                            } },
                        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                            'div',
                            { className: prefixCls + '-text' },
                            btn.text || 'Click'
                        )
                    );
                })
            ) : null;
        }
    }, {
        key: 'render',
        value: function render() {
            var _this4 = this;

            var _a = this.props,
                prefixCls = _a.prefixCls,
                _a$left = _a.left,
                left = _a$left === undefined ? [] : _a$left,
                _a$right = _a.right,
                right = _a$right === undefined ? [] : _a$right,
                children = _a.children,
                restProps = __rest(_a, ["prefixCls", "left", "right", "children"]);
            var divProps = __WEBPACK_IMPORTED_MODULE_8_object_omit___default()(restProps, ['disabled', 'autoClose', 'onOpen', 'onClose']);
            var refProps = {
                ref: function ref(el) {
                    return _this4.content = __WEBPACK_IMPORTED_MODULE_6_react_dom___default.a.findDOMNode(el);
                }
            };
            return left.length || right.length ? __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                'div',
                __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({ className: '' + prefixCls }, divProps),
                __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement('div', { className: prefixCls + '-cover', ref: function ref(el) {
                        return _this4.cover = __WEBPACK_IMPORTED_MODULE_6_react_dom___default.a.findDOMNode(el);
                    } }),
                this.renderButtons(left, 'left'),
                this.renderButtons(right, 'right'),
                __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_7_rc_hammerjs__["default"],
                    __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({ direction: 'DIRECTION_HORIZONTAL', onPanStart: this.onPanStart, onPan: this.onPan, onPanEnd: this.onPanEnd }, refProps),
                    __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                        'div',
                        { className: prefixCls + '-content' },
                        children
                    )
                )
            ) : __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                'div',
                __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, refProps, divProps),
                children
            );
        }
    }]);

    return Swipeout;
}(__WEBPACK_IMPORTED_MODULE_5_react___default.a.Component);

Swipeout.defaultProps = {
    prefixCls: 'rc-swipeout',
    autoClose: false,
    disabled: false,
    left: [],
    right: [],
    onOpen: function onOpen() {},
    onClose: function onClose() {}
};
/* harmony default export */ __webpack_exports__["a"] = (Swipeout);

/***/ }),
/* 371 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Swipeout__ = __webpack_require__(370);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return __WEBPACK_IMPORTED_MODULE_0__Swipeout__["a"]; });


/***/ }),
/* 372 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = shouldFirePress;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_object_assign__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_object_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_object_assign__);

function PressEvent(nativeEvent) {
    var _this = this;

    this.nativeEvent = nativeEvent;
    ['type', 'currentTarget', 'target', 'touches', 'changedTouches'].forEach(function (m) {
        _this[m] = nativeEvent[m];
    });
    if (!nativeEvent.$pressSeq) {
        nativeEvent.$pressSeq = 1;
    } else {
        nativeEvent.$pressSeq += 1;
    }
    this.$pressSeq = nativeEvent.$pressSeq;
}
__WEBPACK_IMPORTED_MODULE_0_object_assign___default()(PressEvent.prototype, {
    preventDefault: function preventDefault() {
        this.nativeEvent.preventDefault();
    },
    stopPropagation: function stopPropagation() {
        var nativeEvent = this.nativeEvent,
            $pressSeq = this.$pressSeq;

        if (nativeEvent.$stopPressSeq) {
            return;
        }
        nativeEvent.$stopPressSeq = $pressSeq;
    }
});
function shouldFirePress(e) {
    var nativeEvent = e.nativeEvent,
        $pressSeq = e.$pressSeq;

    if (!nativeEvent.$stopPressSeq) {
        return true;
    }
    return nativeEvent.$stopPressSeq >= $pressSeq;
}
/* harmony default export */ __webpack_exports__["a"] = (PressEvent);

/***/ }),
/* 373 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactComponentWithPureRenderMixin
 */

var shallowEqual = __webpack_require__(403);

function shallowCompare(instance, nextProps, nextState) {
  return !shallowEqual(instance.props, nextProps) || !shallowEqual(instance.state, nextState);
}

/**
 * If your React component's render function is "pure", e.g. it will render the
 * same result given the same props and state, provide this mixin for a
 * considerable performance boost.
 *
 * Most React components have pure render functions.
 *
 * Example:
 *
 *   var ReactComponentWithPureRenderMixin =
 *     require('ReactComponentWithPureRenderMixin');
 *   React.createClass({
 *     mixins: [ReactComponentWithPureRenderMixin],
 *
 *     render: function() {
 *       return <div className={this.props.className}>foo</div>;
 *     }
 *   });
 *
 * Note: This only checks shallow equality for props and state. If these contain
 * complex data structures this mixin may have false-negatives for deeper
 * differences. Only mixin to components which have simple props and state, or
 * use `forceUpdate()` when you know deep data structures have changed.
 *
 * See https://facebook.github.io/react/docs/pure-render-mixin.html
 */
var ReactComponentWithPureRenderMixin = {
  shouldComponentUpdate: function shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }
};

module.exports = ReactComponentWithPureRenderMixin;

/***/ }),
/* 374 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = createChainedFunction;
/**
 * Safe chained function
 *
 * Will only create a new function if needed,
 * otherwise will pass back existing functions or null.
 *
 * @returns {function|null}
 */
function createChainedFunction() {
  var args = [].slice.call(arguments, 0);
  if (args.length === 1) {
    return args[0];
  }

  return function chainedFunction() {
    for (var i = 0; i < args.length; i++) {
      if (args[i] && args[i].apply) {
        args[i].apply(this, arguments);
      }
    }
  };
}

/***/ }),
/* 375 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * @ignore
 * some key-codes definition and utils from closure-library
 * @author yiminghe@gmail.com
 */

var KeyCode = {
  /**
   * MAC_ENTER
   */
  MAC_ENTER: 3,
  /**
   * BACKSPACE
   */
  BACKSPACE: 8,
  /**
   * TAB
   */
  TAB: 9,
  /**
   * NUMLOCK on FF/Safari Mac
   */
  NUM_CENTER: 12, // NUMLOCK on FF/Safari Mac
  /**
   * ENTER
   */
  ENTER: 13,
  /**
   * SHIFT
   */
  SHIFT: 16,
  /**
   * CTRL
   */
  CTRL: 17,
  /**
   * ALT
   */
  ALT: 18,
  /**
   * PAUSE
   */
  PAUSE: 19,
  /**
   * CAPS_LOCK
   */
  CAPS_LOCK: 20,
  /**
   * ESC
   */
  ESC: 27,
  /**
   * SPACE
   */
  SPACE: 32,
  /**
   * PAGE_UP
   */
  PAGE_UP: 33, // also NUM_NORTH_EAST
  /**
   * PAGE_DOWN
   */
  PAGE_DOWN: 34, // also NUM_SOUTH_EAST
  /**
   * END
   */
  END: 35, // also NUM_SOUTH_WEST
  /**
   * HOME
   */
  HOME: 36, // also NUM_NORTH_WEST
  /**
   * LEFT
   */
  LEFT: 37, // also NUM_WEST
  /**
   * UP
   */
  UP: 38, // also NUM_NORTH
  /**
   * RIGHT
   */
  RIGHT: 39, // also NUM_EAST
  /**
   * DOWN
   */
  DOWN: 40, // also NUM_SOUTH
  /**
   * PRINT_SCREEN
   */
  PRINT_SCREEN: 44,
  /**
   * INSERT
   */
  INSERT: 45, // also NUM_INSERT
  /**
   * DELETE
   */
  DELETE: 46, // also NUM_DELETE
  /**
   * ZERO
   */
  ZERO: 48,
  /**
   * ONE
   */
  ONE: 49,
  /**
   * TWO
   */
  TWO: 50,
  /**
   * THREE
   */
  THREE: 51,
  /**
   * FOUR
   */
  FOUR: 52,
  /**
   * FIVE
   */
  FIVE: 53,
  /**
   * SIX
   */
  SIX: 54,
  /**
   * SEVEN
   */
  SEVEN: 55,
  /**
   * EIGHT
   */
  EIGHT: 56,
  /**
   * NINE
   */
  NINE: 57,
  /**
   * QUESTION_MARK
   */
  QUESTION_MARK: 63, // needs localization
  /**
   * A
   */
  A: 65,
  /**
   * B
   */
  B: 66,
  /**
   * C
   */
  C: 67,
  /**
   * D
   */
  D: 68,
  /**
   * E
   */
  E: 69,
  /**
   * F
   */
  F: 70,
  /**
   * G
   */
  G: 71,
  /**
   * H
   */
  H: 72,
  /**
   * I
   */
  I: 73,
  /**
   * J
   */
  J: 74,
  /**
   * K
   */
  K: 75,
  /**
   * L
   */
  L: 76,
  /**
   * M
   */
  M: 77,
  /**
   * N
   */
  N: 78,
  /**
   * O
   */
  O: 79,
  /**
   * P
   */
  P: 80,
  /**
   * Q
   */
  Q: 81,
  /**
   * R
   */
  R: 82,
  /**
   * S
   */
  S: 83,
  /**
   * T
   */
  T: 84,
  /**
   * U
   */
  U: 85,
  /**
   * V
   */
  V: 86,
  /**
   * W
   */
  W: 87,
  /**
   * X
   */
  X: 88,
  /**
   * Y
   */
  Y: 89,
  /**
   * Z
   */
  Z: 90,
  /**
   * META
   */
  META: 91, // WIN_KEY_LEFT
  /**
   * WIN_KEY_RIGHT
   */
  WIN_KEY_RIGHT: 92,
  /**
   * CONTEXT_MENU
   */
  CONTEXT_MENU: 93,
  /**
   * NUM_ZERO
   */
  NUM_ZERO: 96,
  /**
   * NUM_ONE
   */
  NUM_ONE: 97,
  /**
   * NUM_TWO
   */
  NUM_TWO: 98,
  /**
   * NUM_THREE
   */
  NUM_THREE: 99,
  /**
   * NUM_FOUR
   */
  NUM_FOUR: 100,
  /**
   * NUM_FIVE
   */
  NUM_FIVE: 101,
  /**
   * NUM_SIX
   */
  NUM_SIX: 102,
  /**
   * NUM_SEVEN
   */
  NUM_SEVEN: 103,
  /**
   * NUM_EIGHT
   */
  NUM_EIGHT: 104,
  /**
   * NUM_NINE
   */
  NUM_NINE: 105,
  /**
   * NUM_MULTIPLY
   */
  NUM_MULTIPLY: 106,
  /**
   * NUM_PLUS
   */
  NUM_PLUS: 107,
  /**
   * NUM_MINUS
   */
  NUM_MINUS: 109,
  /**
   * NUM_PERIOD
   */
  NUM_PERIOD: 110,
  /**
   * NUM_DIVISION
   */
  NUM_DIVISION: 111,
  /**
   * F1
   */
  F1: 112,
  /**
   * F2
   */
  F2: 113,
  /**
   * F3
   */
  F3: 114,
  /**
   * F4
   */
  F4: 115,
  /**
   * F5
   */
  F5: 116,
  /**
   * F6
   */
  F6: 117,
  /**
   * F7
   */
  F7: 118,
  /**
   * F8
   */
  F8: 119,
  /**
   * F9
   */
  F9: 120,
  /**
   * F10
   */
  F10: 121,
  /**
   * F11
   */
  F11: 122,
  /**
   * F12
   */
  F12: 123,
  /**
   * NUMLOCK
   */
  NUMLOCK: 144,
  /**
   * SEMICOLON
   */
  SEMICOLON: 186, // needs localization
  /**
   * DASH
   */
  DASH: 189, // needs localization
  /**
   * EQUALS
   */
  EQUALS: 187, // needs localization
  /**
   * COMMA
   */
  COMMA: 188, // needs localization
  /**
   * PERIOD
   */
  PERIOD: 190, // needs localization
  /**
   * SLASH
   */
  SLASH: 191, // needs localization
  /**
   * APOSTROPHE
   */
  APOSTROPHE: 192, // needs localization
  /**
   * SINGLE_QUOTE
   */
  SINGLE_QUOTE: 222, // needs localization
  /**
   * OPEN_SQUARE_BRACKET
   */
  OPEN_SQUARE_BRACKET: 219, // needs localization
  /**
   * BACKSLASH
   */
  BACKSLASH: 220, // needs localization
  /**
   * CLOSE_SQUARE_BRACKET
   */
  CLOSE_SQUARE_BRACKET: 221, // needs localization
  /**
   * WIN_KEY
   */
  WIN_KEY: 224,
  /**
   * MAC_FF_META
   */
  MAC_FF_META: 224, // Firefox (Gecko) fires this for the meta key instead of 91
  /**
   * WIN_IME
   */
  WIN_IME: 229
};

/*
 whether text and modified key is entered at the same time.
 */
KeyCode.isTextModifyingKeyEvent = function isTextModifyingKeyEvent(e) {
  var keyCode = e.keyCode;
  if (e.altKey && !e.ctrlKey || e.metaKey ||
  // Function keys don't generate text
  keyCode >= KeyCode.F1 && keyCode <= KeyCode.F12) {
    return false;
  }

  // The following keys are quite harmless, even in combination with
  // CTRL, ALT or SHIFT.
  switch (keyCode) {
    case KeyCode.ALT:
    case KeyCode.CAPS_LOCK:
    case KeyCode.CONTEXT_MENU:
    case KeyCode.CTRL:
    case KeyCode.DOWN:
    case KeyCode.END:
    case KeyCode.ESC:
    case KeyCode.HOME:
    case KeyCode.INSERT:
    case KeyCode.LEFT:
    case KeyCode.MAC_FF_META:
    case KeyCode.META:
    case KeyCode.NUMLOCK:
    case KeyCode.NUM_CENTER:
    case KeyCode.PAGE_DOWN:
    case KeyCode.PAGE_UP:
    case KeyCode.PAUSE:
    case KeyCode.PRINT_SCREEN:
    case KeyCode.RIGHT:
    case KeyCode.SHIFT:
    case KeyCode.UP:
    case KeyCode.WIN_KEY:
    case KeyCode.WIN_KEY_RIGHT:
      return false;
    default:
      return true;
  }
};

/*
 whether character is entered.
 */
KeyCode.isCharacterKey = function isCharacterKey(keyCode) {
  if (keyCode >= KeyCode.ZERO && keyCode <= KeyCode.NINE) {
    return true;
  }

  if (keyCode >= KeyCode.NUM_ZERO && keyCode <= KeyCode.NUM_MULTIPLY) {
    return true;
  }

  if (keyCode >= KeyCode.A && keyCode <= KeyCode.Z) {
    return true;
  }

  // Safari sends zero key code for non-latin characters.
  if (window.navigation.userAgent.indexOf('WebKit') !== -1 && keyCode === 0) {
    return true;
  }

  switch (keyCode) {
    case KeyCode.SPACE:
    case KeyCode.QUESTION_MARK:
    case KeyCode.NUM_PLUS:
    case KeyCode.NUM_MINUS:
    case KeyCode.NUM_PERIOD:
    case KeyCode.NUM_DIVISION:
    case KeyCode.SEMICOLON:
    case KeyCode.DASH:
    case KeyCode.EQUALS:
    case KeyCode.COMMA:
    case KeyCode.PERIOD:
    case KeyCode.SLASH:
    case KeyCode.APOSTROPHE:
    case KeyCode.SINGLE_QUOTE:
    case KeyCode.OPEN_SQUARE_BRACKET:
    case KeyCode.BACKSLASH:
    case KeyCode.CLOSE_SQUARE_BRACKET:
      return true;
    default:
      return false;
  }
};

exports['default'] = KeyCode;
module.exports = exports['default'];

/***/ }),
/* 376 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports['default'] = getScrollBarSize;
var cached = void 0;

function getScrollBarSize(fresh) {
  if (fresh || cached === undefined) {
    var inner = document.createElement('div');
    inner.style.width = '100%';
    inner.style.height = '200px';

    var outer = document.createElement('div');
    var outerStyle = outer.style;

    outerStyle.position = 'absolute';
    outerStyle.top = 0;
    outerStyle.left = 0;
    outerStyle.pointerEvents = 'none';
    outerStyle.visibility = 'hidden';
    outerStyle.width = '200px';
    outerStyle.height = '150px';
    outerStyle.overflow = 'hidden';

    outer.appendChild(inner);

    document.body.appendChild(outer);

    var widthContained = inner.offsetWidth;
    outer.style.overflow = 'scroll';
    var widthScroll = inner.offsetWidth;

    if (widthContained === widthScroll) {
      widthScroll = outer.clientWidth;
    }

    document.body.removeChild(outer);

    cached = widthContained - widthScroll;
  }
  return cached;
}
module.exports = exports['default'];

/***/ }),
/* 377 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(6);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactDom = __webpack_require__(15);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _channel = __webpack_require__(125);

var _channel2 = _interopRequireDefault(_channel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Container = function (_React$Component) {
  _inherits(Container, _React$Component);

  function Container(props) {
    _classCallCheck(this, Container);

    var _this = _possibleConstructorReturn(this, (Container.__proto__ || Object.getPrototypeOf(Container)).call(this, props));

    _this.updateOffset = function (_ref) {
      var inherited = _ref.inherited,
          offset = _ref.offset;

      _this.channel.update(function (data) {
        data.inherited = inherited + offset;
      });
    };

    _this.channel = new _channel2.default({ inherited: 0, offset: 0, node: null });
    return _this;
  }

  _createClass(Container, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return { 'sticky-channel': this.channel };
    }
  }, {
    key: 'componentWillMount',
    value: function componentWillMount() {
      var parentChannel = this.context['sticky-channel'];
      if (parentChannel) parentChannel.subscribe(this.updateOffset);
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var node = _reactDom2.default.findDOMNode(this);
      this.channel.update(function (data) {
        data.node = node;
      });
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.channel.update(function (data) {
        data.node = null;
      });

      var parentChannel = this.context['sticky-channel'];
      if (parentChannel) parentChannel.unsubscribe(this.updateOffset);
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        this.props,
        this.props.children
      );
    }
  }]);

  return Container;
}(_react2.default.Component);

Container.contextTypes = {
  'sticky-channel': _propTypes2.default.any
};
Container.childContextTypes = {
  'sticky-channel': _propTypes2.default.any
};
exports.default = Container;
module.exports = exports['default'];

/***/ }),
/* 378 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Channel = exports.StickyContainer = exports.Sticky = undefined;

var _sticky = __webpack_require__(379);

var _sticky2 = _interopRequireDefault(_sticky);

var _container = __webpack_require__(377);

var _container2 = _interopRequireDefault(_container);

var _channel = __webpack_require__(125);

var _channel2 = _interopRequireDefault(_channel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Sticky = _sticky2.default;
exports.StickyContainer = _container2.default;
exports.Channel = _channel2.default;
exports.default = _sticky2.default;

/***/ }),
/* 379 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(6);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactDom = __webpack_require__(15);

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Sticky = function (_React$Component) {
  _inherits(Sticky, _React$Component);

  function Sticky(props) {
    _classCallCheck(this, Sticky);

    var _this = _possibleConstructorReturn(this, (Sticky.__proto__ || Object.getPrototypeOf(Sticky)).call(this, props));

    _this.updateContext = function (_ref) {
      var inherited = _ref.inherited,
          node = _ref.node;

      _this.containerNode = node;
      _this.setState({
        containerOffset: inherited,
        distanceFromBottom: _this.getDistanceFromBottom()
      });
    };

    _this.recomputeState = function () {
      var isSticky = _this.isSticky();
      var height = _this.getHeight();
      var width = _this.getWidth();
      var xOffset = _this.getXOffset();
      var distanceFromBottom = _this.getDistanceFromBottom();
      var hasChanged = _this.state.isSticky !== isSticky;

      _this.setState({ isSticky: isSticky, height: height, width: width, xOffset: xOffset, distanceFromBottom: distanceFromBottom });

      if (hasChanged) {
        if (_this.channel) {
          _this.channel.update(function (data) {
            data.offset = isSticky ? _this.state.height : 0;
          });
        }

        _this.props.onStickyStateChange(isSticky);
      }
    };

    _this.state = {};
    return _this;
  }

  _createClass(Sticky, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.channel = this.context['sticky-channel'];
      this.channel.subscribe(this.updateContext);
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.on(['resize', 'scroll', 'touchstart', 'touchmove', 'touchend', 'pageshow', 'load'], this.recomputeState);
      this.recomputeState();
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps() {
      this.recomputeState();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.off(['resize', 'scroll', 'touchstart', 'touchmove', 'touchend', 'pageshow', 'load'], this.recomputeState);
      this.channel.unsubscribe(this.updateContext);
    }
  }, {
    key: 'getXOffset',
    value: function getXOffset() {
      return this.refs.placeholder.getBoundingClientRect().left;
    }
  }, {
    key: 'getWidth',
    value: function getWidth() {
      return this.refs.placeholder.getBoundingClientRect().width;
    }
  }, {
    key: 'getHeight',
    value: function getHeight() {
      return _reactDom2.default.findDOMNode(this.refs.children).getBoundingClientRect().height;
    }
  }, {
    key: 'getDistanceFromTop',
    value: function getDistanceFromTop() {
      return this.refs.placeholder.getBoundingClientRect().top;
    }
  }, {
    key: 'getDistanceFromBottom',
    value: function getDistanceFromBottom() {
      if (!this.containerNode) return 0;
      return this.containerNode.getBoundingClientRect().bottom;
    }
  }, {
    key: 'isSticky',
    value: function isSticky() {
      if (!this.props.isActive) return false;

      var fromTop = this.getDistanceFromTop();
      var fromBottom = this.getDistanceFromBottom();

      var topBreakpoint = this.state.containerOffset - this.props.topOffset;
      var bottomBreakpoint = this.state.containerOffset + this.props.bottomOffset;

      return fromTop <= topBreakpoint && fromBottom >= bottomBreakpoint;
    }
  }, {
    key: 'on',
    value: function on(events, callback) {
      events.forEach(function (evt) {
        window.addEventListener(evt, callback);
      });
    }
  }, {
    key: 'off',
    value: function off(events, callback) {
      events.forEach(function (evt) {
        window.removeEventListener(evt, callback);
      });
    }
  }, {
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(newProps, newState) {
      var _this2 = this;

      // Have we changed the number of props?
      var propNames = Object.keys(this.props);
      if (Object.keys(newProps).length != propNames.length) return true;

      // Have we changed any prop values?
      var valuesMatch = propNames.every(function (key) {
        return newProps.hasOwnProperty(key) && newProps[key] === _this2.props[key];
      });
      if (!valuesMatch) return true;

      // Have we changed any state that will always impact rendering?
      var state = this.state;
      if (newState.isSticky !== state.isSticky) return true;

      // If we are sticky, have we changed any state that will impact rendering?
      if (state.isSticky) {
        if (newState.height !== state.height) return true;
        if (newState.width !== state.width) return true;
        if (newState.xOffset !== state.xOffset) return true;
        if (newState.containerOffset !== state.containerOffset) return true;
        if (newState.distanceFromBottom !== state.distanceFromBottom) return true;
      }

      return false;
    }

    /*
     * The special sauce.
     */

  }, {
    key: 'render',
    value: function render() {
      var placeholderStyle = { paddingBottom: 0 };
      var className = this.props.className;

      // To ensure that this component becomes sticky immediately on mobile devices instead
      // of disappearing until the scroll event completes, we add `transform: translateZ(0)`
      // to 'kick' rendering of this element to the GPU
      // @see http://stackoverflow.com/questions/32875046
      var style = _extends({}, { transform: 'translateZ(0)' }, this.props.style);

      if (this.state.isSticky) {
        var _stickyStyle = {
          position: 'fixed',
          top: this.state.containerOffset,
          left: this.state.xOffset,
          width: this.state.width
        };

        var bottomLimit = this.state.distanceFromBottom - this.state.height - this.props.bottomOffset;
        if (this.state.containerOffset > bottomLimit) {
          _stickyStyle.top = bottomLimit;
        }

        placeholderStyle.paddingBottom = this.state.height;

        className += ' ' + this.props.stickyClassName;
        style = _extends({}, style, _stickyStyle, this.props.stickyStyle);
      }

      var _props = this.props,
          topOffset = _props.topOffset,
          isActive = _props.isActive,
          stickyClassName = _props.stickyClassName,
          stickyStyle = _props.stickyStyle,
          bottomOffset = _props.bottomOffset,
          onStickyStateChange = _props.onStickyStateChange,
          props = _objectWithoutProperties(_props, ['topOffset', 'isActive', 'stickyClassName', 'stickyStyle', 'bottomOffset', 'onStickyStateChange']);

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement('div', { ref: 'placeholder', style: placeholderStyle }),
        _react2.default.createElement(
          'div',
          _extends({}, props, { ref: 'children', className: className, style: style }),
          this.props.children
        )
      );
    }
  }]);

  return Sticky;
}(_react2.default.Component);

Sticky.propTypes = {
  isActive: _propTypes2.default.bool,
  className: _propTypes2.default.string,
  style: _propTypes2.default.object,
  stickyClassName: _propTypes2.default.string,
  stickyStyle: _propTypes2.default.object,
  topOffset: _propTypes2.default.number,
  bottomOffset: _propTypes2.default.number,
  onStickyStateChange: _propTypes2.default.func
};
Sticky.defaultProps = {
  isActive: true,
  className: '',
  style: {},
  stickyClassName: 'sticky',
  stickyStyle: {},
  topOffset: 0,
  bottomOffset: 0,
  onStickyStateChange: function onStickyStateChange() {}
};
Sticky.contextTypes = {
  'sticky-channel': _propTypes2.default.any
};
exports.default = Sticky;
module.exports = exports['default'];

/***/ }),
/* 380 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/*
 *  Copyright (c) 2015-present, Facebook, Inc.
 *  All rights reserved.
 *
 *  This source code is licensed under the BSD-style license found in the
 *  LICENSE file in the root directory of this source tree. An additional grant
 *  of patent rights can be found in the PATENTS file in the same directory.
 *
 */


var GLOBAL = typeof window === 'undefined' ? global : window;

var setter = function(_setter, _clearer, array) {
  return function(callback, delta) {
    var id = _setter(function() {
      _clearer.call(this, id);
      callback.apply(this, arguments);
    }.bind(this), delta);

    if (!this[array]) {
      this[array] = [id];
    } else {
      this[array].push(id);
    }
    return id;
  };
};

var clearer = function(_clearer, array) {
  return function(id) {
    if (this[array]) {
      var index = this[array].indexOf(id);
      if (index !== -1) {
        this[array].splice(index, 1);
      }
    }
    _clearer(id);
  };
};

var _timeouts = 'TimerMixin_timeouts';
var _clearTimeout = clearer(GLOBAL.clearTimeout, _timeouts);
var _setTimeout = setter(GLOBAL.setTimeout, _clearTimeout, _timeouts);

var _intervals = 'TimerMixin_intervals';
var _clearInterval = clearer(GLOBAL.clearInterval, _intervals);
var _setInterval = setter(GLOBAL.setInterval, function() {/* noop */}, _intervals);

var _immediates = 'TimerMixin_immediates';
var _clearImmediate = clearer(GLOBAL.clearImmediate, _immediates);
var _setImmediate = setter(GLOBAL.setImmediate, _clearImmediate, _immediates);

var _rafs = 'TimerMixin_rafs';
var _cancelAnimationFrame = clearer(GLOBAL.cancelAnimationFrame, _rafs);
var _requestAnimationFrame = setter(GLOBAL.requestAnimationFrame, _cancelAnimationFrame, _rafs);

var TimerMixin = {
  componentWillUnmount: function() {
    this[_timeouts] && this[_timeouts].forEach(function(id) {
      GLOBAL.clearTimeout(id);
    });
    this[_timeouts] = null;
    this[_intervals] && this[_intervals].forEach(function(id) {
      GLOBAL.clearInterval(id);
    });
    this[_intervals] = null;
    this[_immediates] && this[_immediates].forEach(function(id) {
      GLOBAL.clearImmediate(id);
    });
    this[_immediates] = null;
    this[_rafs] && this[_rafs].forEach(function(id) {
      GLOBAL.cancelAnimationFrame(id);
    });
    this[_rafs] = null;
  },

  setTimeout: _setTimeout,
  clearTimeout: _clearTimeout,

  setInterval: _setInterval,
  clearInterval: _clearInterval,

  setImmediate: _setImmediate,
  clearImmediate: _clearImmediate,

  requestAnimationFrame: _requestAnimationFrame,
  cancelAnimationFrame: _cancelAnimationFrame,
};

module.exports = TimerMixin;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(43)))

/***/ }),
/* 381 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _arrayTreeFilter = __webpack_require__(105);

var _arrayTreeFilter2 = _interopRequireDefault(_arrayTreeFilter);

var _MultiPicker = __webpack_require__(88);

var _MultiPicker2 = _interopRequireDefault(_MultiPicker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var Cascader = _react2['default'].createClass({
    displayName: 'Cascader',
    getDefaultProps: function getDefaultProps() {
        return {
            cols: 3,
            prefixCls: 'rmc-cascader',
            pickerPrefixCls: 'rmc-picker',
            data: [],
            disabled: false
        };
    },
    getInitialState: function getInitialState() {
        return {
            value: this.getValue(this.props.data, this.props.defaultValue || this.props.value)
        };
    },
    componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
        if ('value' in nextProps) {
            this.setState({
                value: this.getValue(nextProps.data, nextProps.value)
            });
        }
    },
    onValueChange: function onValueChange(value, index) {
        var children = (0, _arrayTreeFilter2['default'])(this.props.data, function (c, level) {
            return level <= index && c.value === value[level];
        });
        var data = children[index];
        var i = void 0;
        for (i = index + 1; data && data.children && data.children.length && i < this.props.cols; i++) {
            data = data.children[0];
            value[i] = data.value;
        }
        value.length = i;
        if (!('value' in this.props)) {
            this.setState({
                value: value
            });
        }
        this.props.onChange(value);
    },
    getValue: function getValue(d, val) {
        var data = d || this.props.data;
        var value = val || this.props.value || this.props.defaultValue;
        if (!value || !value.length) {
            value = [];
            for (var i = 0; i < this.props.cols; i++) {
                if (data && data.length) {
                    value[i] = data[0].value;
                    data = data[0].children;
                }
            }
        }
        return value;
    },
    getCols: function getCols() {
        var _props = this.props,
            data = _props.data,
            cols = _props.cols;

        var value = this.state.value;
        var childrenTree = (0, _arrayTreeFilter2['default'])(data, function (c, level) {
            return c.value === value[level];
        }).map(function (c) {
            return c.children;
        });
        childrenTree.length = cols - 1;
        childrenTree.unshift(data);
        return childrenTree.map(function (children) {
            return {
                props: {
                    children: children || []
                }
            };
        });
    },
    render: function render() {
        var props = this.props;
        var prefixCls = props.prefixCls,
            pickerPrefixCls = props.pickerPrefixCls,
            className = props.className,
            rootNativeProps = props.rootNativeProps,
            disabled = props.disabled,
            pickerItemStyle = props.pickerItemStyle,
            indicatorStyle = props.indicatorStyle;

        return _react2['default'].createElement(_MultiPicker2['default'], { prefixCls: prefixCls, pickerPrefixCls: pickerPrefixCls, disabled: disabled, className: className, selectedValue: this.state.value, rootNativeProps: rootNativeProps, indicatorStyle: indicatorStyle, pickerItemStyle: pickerItemStyle, onValueChange: this.onValueChange }, this.getCols());
    }
});
exports['default'] = Cascader;
module.exports = exports['default'];

/***/ }),
/* 382 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Popup = __webpack_require__(128);

var _Popup2 = _interopRequireDefault(_Popup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var __assign = undefined && undefined.__assign || Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
    }
    return t;
};

var PopupCascader = _react2['default'].createClass({
    displayName: 'PopupCascader',
    getDefaultProps: function getDefaultProps() {
        return {
            pickerValueProp: 'value',
            pickerValueChangeProp: 'onChange'
        };
    },
    onOk: function onOk(v) {
        var _props = this.props,
            onChange = _props.onChange,
            onOk = _props.onOk;

        if (onChange) {
            onChange(v);
        }
        if (onOk) {
            onOk(v);
        }
    },
    render: function render() {
        return _react2['default'].createElement(_Popup2['default'], __assign({ picker: this.props.cascader }, this.props, { onOk: this.onOk }));
    }
});
exports['default'] = PopupCascader;
module.exports = exports['default'];

/***/ }),
/* 383 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _MultiPicker = __webpack_require__(88);

var _MultiPicker2 = _interopRequireDefault(_MultiPicker);

var _moment = __webpack_require__(37);

var _moment2 = _interopRequireDefault(_moment);

var _en_US = __webpack_require__(385);

var _en_US2 = _interopRequireDefault(_en_US);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function getDaysInMonth(now) {
    return now.clone().endOf('month').date();
}
function pad(n) {
    return n < 10 ? '0' + n : n + '';
}
var smallPickerItem = {
    fontSize: 20
};
var DATETIME = 'datetime';
var DATE = 'date';
var TIME = 'time';
var MONTH = 'month';
var YEAR = 'year';
var DatePicker = _react2['default'].createClass({
    displayName: 'DatePicker',
    getDefaultProps: function getDefaultProps() {
        return {
            prefixCls: 'rmc-date-picker',
            pickerPrefixCls: 'rmc-picker',
            locale: _en_US2['default'],
            mode: DATE,
            minuteStep: 1,
            onDateChange: function onDateChange() {}
        };
    },
    getInitialState: function getInitialState() {
        return {
            date: this.props.date || this.props.defaultDate
        };
    },
    componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
        if ('date' in nextProps) {
            this.setState({
                date: nextProps.date || nextProps.defaultDate
            });
        }
    },
    onValueChange: function onValueChange(values, index) {
        var value = parseInt(values[index], 10);
        var props = this.props;
        var mode = props.mode;

        var newValue = this.getDate().clone();
        if (mode === DATETIME || mode === DATE || mode === YEAR || mode === MONTH) {
            switch (index) {
                case 0:
                    newValue.year(value);
                    break;
                case 1:
                    newValue.month(value);
                    break;
                case 2:
                    newValue.date(value);
                    break;
                case 3:
                    newValue.hour(value);
                    break;
                case 4:
                    newValue.minute(value);
                    break;
                default:
                    break;
            }
        } else {
            switch (index) {
                case 0:
                    newValue.hour(value);
                    break;
                case 1:
                    newValue.minute(value);
                    break;
                default:
                    break;
            }
        }
        newValue = this.clipDate(newValue);
        if (!('date' in props)) {
            this.setState({
                date: newValue
            });
        }
        props.onDateChange(newValue);
    },
    getDefaultMinDate: function getDefaultMinDate() {
        if (!this.defaultMinDate) {
            this.defaultMinDate = this.getGregorianCalendar([2000, 1, 1, 0, 0, 0]);
        }
        return this.defaultMinDate;
    },
    getDefaultMaxDate: function getDefaultMaxDate() {
        if (!this.defaultMaxDate) {
            this.defaultMaxDate = this.getGregorianCalendar([2030, 1, 1, 23, 59, 59]);
        }
        return this.defaultMaxDate;
    },
    getDate: function getDate() {
        return this.state.date || this.getDefaultMinDate();
    },
    getValue: function getValue() {
        return this.getDate();
    },
    getMinYear: function getMinYear() {
        return this.getMinDate().year();
    },
    getMaxYear: function getMaxYear() {
        return this.getMaxDate().year();
    },
    getMinMonth: function getMinMonth() {
        return this.getMinDate().month();
    },
    getMaxMonth: function getMaxMonth() {
        return this.getMaxDate().month();
    },
    getMinDay: function getMinDay() {
        return this.getMinDate().date();
    },
    getMaxDay: function getMaxDay() {
        return this.getMaxDate().date();
    },
    getMinHour: function getMinHour() {
        return this.getMinDate().hour();
    },
    getMaxHour: function getMaxHour() {
        return this.getMaxDate().hour();
    },
    getMinMinute: function getMinMinute() {
        return this.getMinDate().minute();
    },
    getMaxMinute: function getMaxMinute() {
        return this.getMaxDate().minute();
    },
    getMinDate: function getMinDate() {
        return this.props.minDate || this.getDefaultMinDate();
    },
    getMaxDate: function getMaxDate() {
        return this.props.maxDate || this.getDefaultMaxDate();
    },
    getDateData: function getDateData() {
        var _props = this.props,
            locale = _props.locale,
            formatMonth = _props.formatMonth,
            formatDay = _props.formatDay,
            mode = _props.mode;

        var date = this.getDate();
        var selYear = date.year();
        var selMonth = date.month();
        var minDateYear = this.getMinYear();
        var maxDateYear = this.getMaxYear();
        var minDateMonth = this.getMinMonth();
        var maxDateMonth = this.getMaxMonth();
        var minDateDay = this.getMinDay();
        var maxDateDay = this.getMaxDay();
        var years = [];
        for (var i = minDateYear; i <= maxDateYear; i++) {
            years.push({
                value: i + '',
                label: i + locale.year + ''
            });
        }
        var yearCol = { key: 'year', props: { children: years } };
        if (mode === YEAR) {
            return [yearCol];
        }
        var months = [];
        var minMonth = 0;
        var maxMonth = 11;
        if (minDateYear === selYear) {
            minMonth = minDateMonth;
        }
        if (maxDateYear === selYear) {
            maxMonth = maxDateMonth;
        }
        for (var _i = minMonth; _i <= maxMonth; _i++) {
            var label = formatMonth ? formatMonth(_i, date) : _i + 1 + locale.month + '';
            months.push({
                value: _i + '',
                label: label
            });
        }
        var monthCol = { key: 'month', props: { children: months } };
        if (mode === MONTH) {
            return [yearCol, monthCol];
        }
        var days = [];
        var minDay = 1;
        var maxDay = getDaysInMonth(date);
        if (minDateYear === selYear && minDateMonth === selMonth) {
            minDay = minDateDay;
        }
        if (maxDateYear === selYear && maxDateMonth === selMonth) {
            maxDay = maxDateDay;
        }
        for (var _i2 = minDay; _i2 <= maxDay; _i2++) {
            var _label = formatDay ? formatDay(_i2, date) : _i2 + locale.day + '';
            days.push({
                value: _i2 + '',
                label: _label
            });
        }
        return [yearCol, monthCol, { key: 'day', props: { children: days } }];
    },
    getTimeData: function getTimeData() {
        var minHour = 0;
        var maxHour = 23;
        var minMinute = 0;
        var maxMinute = 59;
        var _props2 = this.props,
            mode = _props2.mode,
            locale = _props2.locale,
            minuteStep = _props2.minuteStep;

        var date = this.getDate();
        var minDateMinute = this.getMinMinute();
        var maxDateMinute = this.getMaxMinute();
        var minDateHour = this.getMinHour();
        var maxDateHour = this.getMaxHour();
        var hour = date.hour();
        if (mode === DATETIME) {
            var year = date.year();
            var month = date.month();
            var day = date.date();
            var minDateYear = this.getMinYear();
            var maxDateYear = this.getMaxYear();
            var minDateMonth = this.getMinMonth();
            var maxDateMonth = this.getMaxMonth();
            var minDateDay = this.getMinDay();
            var maxDateDay = this.getMaxDay();
            if (minDateYear === year && minDateMonth === month && minDateDay === day) {
                minHour = minDateHour;
                if (minDateHour === hour) {
                    minMinute = minDateMinute;
                }
            }
            if (maxDateYear === year && maxDateMonth === month && maxDateDay === day) {
                maxHour = maxDateHour;
                if (maxDateHour === hour) {
                    maxMinute = maxDateMinute;
                }
            }
        } else {
            minHour = minDateHour;
            if (minDateHour === hour) {
                minMinute = minDateMinute;
            }
            maxHour = maxDateHour;
            if (maxDateHour === hour) {
                maxMinute = maxDateMinute;
            }
        }
        var hours = [];
        for (var i = minHour; i <= maxHour; i++) {
            hours.push({
                value: i + '',
                label: locale.hour ? i + locale.hour + '' : pad(i)
            });
        }
        var minutes = [];
        for (var _i3 = minMinute; _i3 <= maxMinute; _i3 += minuteStep) {
            minutes.push({
                value: _i3 + '',
                label: locale.minute ? _i3 + locale.minute + '' : pad(_i3)
            });
        }
        return [{ key: 'hours', props: { children: hours } }, { key: 'minutes', props: { children: minutes } }];
    },
    getGregorianCalendar: function getGregorianCalendar(arg) {
        return (0, _moment2['default'])(arg);
    },
    clipDate: function clipDate(date) {
        var mode = this.props.mode;

        var minDate = this.getMinDate();
        var maxDate = this.getMaxDate();
        if (mode === DATETIME) {
            if (date.isBefore(minDate)) {
                return minDate.clone();
            }
            if (date.isAfter(maxDate)) {
                return maxDate.clone();
            }
        } else if (mode === DATE) {
            if (date.isBefore(minDate, 'day')) {
                return minDate.clone();
            }
            if (date.isAfter(maxDate, 'day')) {
                return maxDate.clone();
            }
        } else {
            var maxHour = maxDate.hour();
            var maxMinutes = maxDate.minute();
            var minHour = minDate.hour();
            var minMinutes = minDate.minute();
            var hour = date.hour();
            var minutes = date.minute();
            if (hour < minHour || hour === minHour && minutes < minMinutes) {
                return minDate.clone();
            }
            if (hour > maxHour || hour === maxHour && minutes > maxMinutes) {
                return maxDate.clone();
            }
        }
        return date;
    },
    getValueCols: function getValueCols() {
        var mode = this.props.mode;

        var date = this.getDate();
        var cols = [];
        var value = [];
        if (mode === YEAR) {
            return {
                cols: this.getDateData(),
                value: [date.year() + '']
            };
        }
        if (mode === MONTH) {
            return {
                cols: this.getDateData(),
                value: [date.year() + '', date.month() + '']
            };
        }
        if (mode === DATETIME || mode === DATE) {
            cols = this.getDateData();
            value = [date.year() + '', date.month() + '', date.date() + ''];
        }
        if (mode === DATETIME || mode === TIME) {
            cols = cols.concat(this.getTimeData());
            value = value.concat([date.hour() + '', date.minute() + '']);
        }
        return {
            value: value,
            cols: cols
        };
    },
    render: function render() {
        var _getValueCols = this.getValueCols(),
            value = _getValueCols.value,
            cols = _getValueCols.cols;

        var _props3 = this.props,
            mode = _props3.mode,
            prefixCls = _props3.prefixCls,
            pickerPrefixCls = _props3.pickerPrefixCls,
            rootNativeProps = _props3.rootNativeProps,
            className = _props3.className;

        return _react2['default'].createElement(_MultiPicker2['default'], { rootNativeProps: rootNativeProps, className: className, prefixCls: prefixCls, pickerPrefixCls: pickerPrefixCls, pickerItemStyle: typeof window === 'undefined' && mode === 'datetime' ? smallPickerItem : undefined, selectedValue: value, onValueChange: this.onValueChange }, cols);
    }
});
exports['default'] = DatePicker;
module.exports = exports['default'];

/***/ }),
/* 384 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Popup = __webpack_require__(128);

var _Popup2 = _interopRequireDefault(_Popup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var __assign = undefined && undefined.__assign || Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
    }
    return t;
};

var PopupDatePicker = _react2['default'].createClass({
    displayName: 'PopupDatePicker',
    getDefaultProps: function getDefaultProps() {
        return {
            pickerValueProp: 'date',
            pickerValueChangeProp: 'onDateChange'
        };
    },
    onOk: function onOk(v) {
        var _props = this.props,
            onChange = _props.onChange,
            onOk = _props.onOk;

        if (onChange) {
            onChange(v);
        }
        if (onOk) {
            onOk(v);
        }
    },
    render: function render() {
        return _react2['default'].createElement(_Popup2['default'], __assign({ picker: this.props.datePicker, value: this.props.date }, this.props, { onOk: this.onOk }));
    }
});
exports['default'] = PopupDatePicker;
module.exports = exports['default'];

/***/ }),
/* 385 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports['default'] = {
    year: '',
    month: '',
    day: '',
    hour: '',
    minute: ''
};
module.exports = exports['default'];

/***/ }),
/* 386 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports['default'] = {
    year: '年',
    month: '月',
    day: '日',
    hour: '时',
    minute: '分'
};
module.exports = exports['default'];

/***/ }),
/* 387 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_defineProperty__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_defineProperty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_defineProperty__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_objectWithoutProperties__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_objectWithoutProperties___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_objectWithoutProperties__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_prop_types__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_react_dom__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_classnames__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ListView__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__util__ = __webpack_require__(127);














/* eslint react/prop-types: 0 */

var IndexedList = function (_React$Component) {
  __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits___default()(IndexedList, _React$Component);

  function IndexedList(props) {
    __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck___default()(this, IndexedList);

    var _this = __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn___default()(this, (IndexedList.__proto__ || Object.getPrototypeOf(IndexedList)).call(this, props));

    _initialiseProps.call(_this);

    _this.state = {
      pageSize: props.pageSize,
      _delay: false
    };
    return _this;
  }

  __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass___default()(IndexedList, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.dataChange(this.props);
      // handle quickSearchBar
      this.getQsInfo();
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (this.props.dataSource !== nextProps.dataSource) {
        this.dataChange(nextProps);
      }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      this.getQsInfo();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (this._timer) {
        clearTimeout(this._timer);
      }
      this._hCache = null;
    }
  }, {
    key: 'renderQuickSearchBar',
    value: function renderQuickSearchBar(quickSearchBarTop, quickSearchBarStyle) {
      var _this2 = this;

      var _props = this.props,
          dataSource = _props.dataSource,
          prefixCls = _props.prefixCls;

      var sectionKvs = dataSource.sectionIdentities.map(function (i) {
        return {
          value: i,
          label: dataSource._getSectionHeaderData(dataSource._dataBlob, i)
        };
      });
      return __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
        'ul',
        { ref: 'quickSearchBar',
          className: prefixCls + '-quick-search-bar', style: quickSearchBarStyle,
          onTouchStart: this.onTouchStart,
          onTouchMove: this.onTouchMove,
          onTouchEnd: this.onTouchEnd,
          onTouchCancel: this.onTouchEnd
        },
        __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
          'li',
          { 'data-qf-target': quickSearchBarTop.value,
            onClick: function onClick() {
              return _this2.onQuickSearchTop(undefined, quickSearchBarTop.value);
            }
          },
          quickSearchBarTop.label
        ),
        sectionKvs.map(function (i) {
          return __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
            'li',
            { key: i.value, 'data-qf-target': i.value,
              onClick: function onClick() {
                return _this2.onQuickSearch(i.value);
              }
            },
            i.label
          );
        })
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var _classNames,
          _this3 = this,
          _classNames2;

      var _state = this.state,
          _delay = _state._delay,
          pageSize = _state.pageSize;

      var _props2 = this.props,
          className = _props2.className,
          prefixCls = _props2.prefixCls,
          children = _props2.children,
          quickSearchBarTop = _props2.quickSearchBarTop,
          quickSearchBarStyle = _props2.quickSearchBarStyle,
          _props2$initialListSi = _props2.initialListSize,
          initialListSize = _props2$initialListSi === undefined ? Math.min(20, this.props.dataSource.getRowCount()) : _props2$initialListSi,
          showQuickSearchIndicator = _props2.showQuickSearchIndicator,
          _renderSectionHeader = _props2.renderSectionHeader,
          sectionHeaderClassName = _props2.sectionHeaderClassName,
          other = __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_objectWithoutProperties___default()(_props2, ['className', 'prefixCls', 'children', 'quickSearchBarTop', 'quickSearchBarStyle', 'initialListSize', 'showQuickSearchIndicator', 'renderSectionHeader', 'sectionHeaderClassName']);

      // initialListSize={this.props.dataSource.getRowCount()}


      return __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
        'div',
        { className: prefixCls + '-container' },
        _delay && this.props.delayActivityIndicator,
        __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_11__ListView__["a" /* default */],
          __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, other, {
            ref: 'indexedListView',
            className: __WEBPACK_IMPORTED_MODULE_10_classnames___default()((_classNames = {}, __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_defineProperty___default()(_classNames, className, className), __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_defineProperty___default()(_classNames, prefixCls, true), _classNames)),
            initialListSize: initialListSize,
            pageSize: pageSize,
            renderSectionHeader: function renderSectionHeader(sectionData, sectionID) {
              return __WEBPACK_IMPORTED_MODULE_7_react___default.a.cloneElement(_renderSectionHeader(sectionData, sectionID), {
                ref: function ref(c) {
                  return _this3.sectionComponents[sectionID] = c;
                },
                className: sectionHeaderClassName || prefixCls + '-section-header'
              });
            }
          }),
          children
        ),
        this.renderQuickSearchBar(quickSearchBarTop, quickSearchBarStyle),
        showQuickSearchIndicator ? __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement('div', { className: __WEBPACK_IMPORTED_MODULE_10_classnames___default()((_classNames2 = {}, __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_defineProperty___default()(_classNames2, prefixCls + '-qsindicator', true), __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_defineProperty___default()(_classNames2, prefixCls + '-qsindicator-hide', !showQuickSearchIndicator || !this.state.showQuickSearchIndicator), _classNames2)), ref: 'qsIndicator'
        }) : null
      );
    }
  }]);

  return IndexedList;
}(__WEBPACK_IMPORTED_MODULE_7_react___default.a.Component);

IndexedList.propTypes = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, __WEBPACK_IMPORTED_MODULE_11__ListView__["a" /* default */].propTypes, {
  children: __WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.any,
  prefixCls: __WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.string,
  className: __WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.string,
  sectionHeaderClassName: __WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.string,
  quickSearchBarTop: __WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.object,
  quickSearchBarStyle: __WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.object,
  onQuickSearch: __WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.func,
  showQuickSearchIndicator: __WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.bool
});
IndexedList.defaultProps = {
  prefixCls: 'rmc-indexed-list',
  quickSearchBarTop: { value: '#', label: '#' },
  onQuickSearch: function onQuickSearch() {},
  showQuickSearchIndicator: false,
  delayTime: 100,
  // delayActivityIndicator: <div style={{padding: 5, textAlign: 'center'}}>rendering more</div>,
  delayActivityIndicator: ''
};

var _initialiseProps = function _initialiseProps() {
  var _this4 = this;

  this.onQuickSearchTop = function (sectionID, topId) {
    if (_this4.props.stickyHeader) {
      window.document.body.scrollTop = 0;
    } else {
      __WEBPACK_IMPORTED_MODULE_9_react_dom___default.a.findDOMNode(_this4.refs.indexedListView.refs.listviewscroll).scrollTop = 0;
    }
    _this4.props.onQuickSearch(sectionID, topId);
  };

  this.onQuickSearch = function (sectionID) {
    var lv = __WEBPACK_IMPORTED_MODULE_9_react_dom___default.a.findDOMNode(_this4.refs.indexedListView.refs.listviewscroll);
    var sec = __WEBPACK_IMPORTED_MODULE_9_react_dom___default.a.findDOMNode(_this4.sectionComponents[sectionID]);
    if (_this4.props.stickyHeader) {
      // react-sticky 会把 header 设置为 fixed ，但提供了 placeholder 记忆原来位置
      var stickyComponent = _this4.refs.indexedListView.stickyRefs[sectionID];
      if (stickyComponent && stickyComponent.refs.placeholder) {
        sec = __WEBPACK_IMPORTED_MODULE_9_react_dom___default.a.findDOMNode(stickyComponent.refs.placeholder);
      }
      window.document.body.scrollTop = sec.getBoundingClientRect().top - lv.getBoundingClientRect().top + __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_12__util__["a" /* getOffsetTop */])(lv);
    } else {
      lv.scrollTop += sec.getBoundingClientRect().top - lv.getBoundingClientRect().top;
    }
    _this4.props.onQuickSearch(sectionID);
  };

  this.onTouchStart = function (e) {
    _this4._target = e.target;
    _this4._basePos = _this4.refs.quickSearchBar.getBoundingClientRect();
    document.addEventListener('touchmove', _this4._disableParent, false);
    document.body.className = document.body.className + ' ' + _this4.props.prefixCls + '-qsb-moving';
    _this4.updateIndicator(_this4._target);
  };

  this.onTouchMove = function (e) {
    e.preventDefault();
    if (_this4._target) {
      var ex = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_12__util__["b" /* _event */])(e);
      var basePos = _this4._basePos;
      var _pos = void 0;
      if (ex.clientY >= basePos.top && ex.clientY <= basePos.top + _this4._qsHeight) {
        _pos = Math.floor((ex.clientY - basePos.top) / _this4._avgH);
        var target = void 0;
        if (_pos in _this4._hCache) {
          target = _this4._hCache[_pos][0];
        }
        if (target) {
          var overValue = target.getAttribute('data-qf-target');
          if (_this4._target !== target) {
            if (_this4.props.quickSearchBarTop.value === overValue) {
              _this4.onQuickSearchTop(undefined, overValue);
            } else {
              _this4.onQuickSearch(overValue);
            }
            _this4.updateIndicator(target);
          }
          _this4._target = target;
        }
      }
    }
  };

  this.onTouchEnd = function () {
    if (!_this4._target) {
      return;
    }
    document.removeEventListener('touchmove', _this4._disableParent, false);
    document.body.className = document.body.className.replace(new RegExp('\\s*' + _this4.props.prefixCls + '-qsb-moving', 'g'), '');
    _this4.updateIndicator(_this4._target, true);
    _this4._target = null;
  };

  this.getQsInfo = function () {
    var quickSearchBar = _this4.refs.quickSearchBar;
    var height = quickSearchBar.offsetHeight;
    var hCache = [];
    [].slice.call(quickSearchBar.querySelectorAll('[data-qf-target]')).forEach(function (d) {
      hCache.push([d]);
    });
    var _avgH = height / hCache.length;
    var _top = 0;
    for (var i = 0, len = hCache.length; i < len; i++) {
      _top = i * _avgH;
      hCache[i][1] = [_top, _top + _avgH];
    }
    _this4._qsHeight = height;
    _this4._avgH = _avgH;
    _this4._hCache = hCache;
  };

  this.sectionComponents = {};

  this.dataChange = function (props) {
    // delay render more
    var rowCount = props.dataSource.getRowCount();
    if (!rowCount) {
      return;
    }
    _this4.setState({
      _delay: true
    });
    if (_this4._timer) {
      clearTimeout(_this4._timer);
    }
    _this4._timer = setTimeout(function () {
      _this4.setState({
        pageSize: rowCount,
        _delay: false
      }, function () {
        return _this4.refs.indexedListView._pageInNewRows();
      });
    }, props.delayTime);
  };

  this.updateIndicator = function (ele, end) {
    var el = ele;
    if (!el.getAttribute('data-qf-target')) {
      el = el.parentNode;
    }
    if (_this4.props.showQuickSearchIndicator) {
      _this4.refs.qsIndicator.innerText = el.innerText.trim();
      _this4.setState({
        showQuickSearchIndicator: true
      });
      if (_this4._indicatorTimer) {
        clearTimeout(_this4._indicatorTimer);
      }
      _this4._indicatorTimer = setTimeout(function () {
        _this4.setState({
          showQuickSearchIndicator: false
        });
      }, 1000);
    }

    var cls = _this4.props.prefixCls + '-quick-search-bar-over';
    // can not use setState to change className, it has a big performance issue!
    _this4._hCache.forEach(function (d) {
      d[0].className = d[0].className.replace(cls, '');
    });
    if (!end) {
      el.className = el.className + ' ' + cls;
    }
  };

  this._disableParent = function (e) {
    e.preventDefault();
    e.stopPropagation();
  };
};

/* harmony default export */ __webpack_exports__["a"] = (IndexedList);

/***/ }),
/* 388 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_fbjs_lib_invariant__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_fbjs_lib_invariant___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_fbjs_lib_invariant__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_fbjs_lib_isEmpty__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_fbjs_lib_isEmpty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_fbjs_lib_isEmpty__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_fbjs_lib_warning__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_fbjs_lib_warning___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_fbjs_lib_warning__);






function defaultGetRowData(dataBlob, sectionID, rowID) {
  return dataBlob[sectionID][rowID];
}

function defaultGetSectionHeaderData(dataBlob, sectionID) {
  return dataBlob[sectionID];
}

// type differType = (data1, data2) => bool;
//
// type ParamType = {
//   rowHasChanged: differType;
//   getRowData: ?typeof defaultGetRowData;
//   sectionHeaderHasChanged: ?differType;
//   getSectionHeaderData: ?typeof defaultGetSectionHeaderData;
// }

/**
 * Provides efficient data processing and access to the
 * `ListView` component.  A `ListViewDataSource` is created with functions for
 * extracting data from the input blob, and comparing elements (with default
 * implementations for convenience).  The input blob can be as simple as an
 * array of strings, or an object with rows nested inside section objects.
 *
 * To update the data in the datasource, use `cloneWithRows` (or
 * `cloneWithRowsAndSections` if you care about sections).  The data in the
 * data source is immutable, so you can't modify it directly.  The clone methods
 * suck in the new data and compute a diff for each row so ListView knows
 * whether to re-render it or not.
 *
 * In this example, a component receives data in chunks, handled by
 * `_onDataArrived`, which concats the new data onto the old data and updates the
 * data source.  We use `concat` to create a new array - mutating `this._data`,
 * e.g. with `this._data.push(newRowData)`, would be an error. `_rowHasChanged`
 * understands the shape of the row data and knows how to efficiently compare
 * it.
 *
 * ```
 * getInitialState: function() {
 *   var ds = new ListViewDataSource({rowHasChanged: this._rowHasChanged});
 *   return {ds};
 * },
 * _onDataArrived(newData) {
 *   this._data = this._data.concat(newData);
 *   this.setState({
 *     ds: this.state.ds.cloneWithRows(this._data)
 *   });
 * }
 * ```
 */

var ListViewDataSource = function () {

  /**
   * You can provide custom extraction and `hasChanged` functions for section
   * headers and rows.  If absent, data will be extracted with the
   * `defaultGetRowData` and `defaultGetSectionHeaderData` functions.
   *
   * The default extractor expects data of one of the following forms:
   *
   *      { sectionID_1: { rowID_1: <rowData1>, ... }, ... }
   *
   *    or
   *
   *      { sectionID_1: [ <rowData1>, <rowData2>, ... ], ... }
   *
   *    or
   *
   *      [ [ <rowData1>, <rowData2>, ... ], ... ]
   *
   * The constructor takes in a params argument that can contain any of the
   * following:
   *
   * - getRowData(dataBlob, sectionID, rowID);
   * - getSectionHeaderData(dataBlob, sectionID);
   * - rowHasChanged(prevRowData, nextRowData);
   * - sectionHeaderHasChanged(prevSectionData, nextSectionData);
   */
  function ListViewDataSource(params) {
    __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, ListViewDataSource);

    __WEBPACK_IMPORTED_MODULE_2_fbjs_lib_invariant___default()(params && typeof params.rowHasChanged === 'function', 'Must provide a rowHasChanged function.');
    this._rowHasChanged = params.rowHasChanged;
    this._getRowData = params.getRowData || defaultGetRowData;
    this._sectionHeaderHasChanged = params.sectionHeaderHasChanged;
    this._getSectionHeaderData = params.getSectionHeaderData || defaultGetSectionHeaderData;

    this._dataBlob = null;
    this._dirtyRows = [];
    this._dirtySections = [];
    this._cachedRowCount = 0;

    // These two private variables are accessed by outsiders because ListView
    // uses them to iterate over the data in this class.
    this.rowIdentities = [];
    this.sectionIdentities = [];
  }

  /**
   * Clones this `ListViewDataSource` with the specified `dataBlob` and
   * `rowIdentities`. The `dataBlob` is just an arbitrary blob of data. At
   * construction an extractor to get the interesting information was defined
   * (or the default was used).
   *
   * The `rowIdentities` is is a 2D array of identifiers for rows.
   * ie. [['a1', 'a2'], ['b1', 'b2', 'b3'], ...].  If not provided, it's
   * assumed that the keys of the section data are the row identities.
   *
   * Note: This function does NOT clone the data in this data source. It simply
   * passes the functions defined at construction to a new data source with
   * the data specified. If you wish to maintain the existing data you must
   * handle merging of old and new data separately and then pass that into
   * this function as the `dataBlob`.
   */


  __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default()(ListViewDataSource, [{
    key: 'cloneWithRows',
    value: function cloneWithRows(dataBlob, rowIdentities) {
      var rowIds = rowIdentities ? [rowIdentities] : null;
      if (!this._sectionHeaderHasChanged) {
        this._sectionHeaderHasChanged = function () {
          return false;
        };
      }
      return this.cloneWithRowsAndSections({ s1: dataBlob }, ['s1'], rowIds);
    }

    /**
     * This performs the same function as the `cloneWithRows` function but here
     * you also specify what your `sectionIdentities` are. If you don't care
     * about sections you should safely be able to use `cloneWithRows`.
     *
     * `sectionIdentities` is an array of identifiers for  sections.
     * ie. ['s1', 's2', ...].  If not provided, it's assumed that the
     * keys of dataBlob are the section identities.
     *
     * Note: this returns a new object!
     */

  }, {
    key: 'cloneWithRowsAndSections',
    value: function cloneWithRowsAndSections(dataBlob, sectionIdentities, rowIdentities) {
      __WEBPACK_IMPORTED_MODULE_2_fbjs_lib_invariant___default()(typeof this._sectionHeaderHasChanged === 'function', 'Must provide a sectionHeaderHasChanged function with section data.');
      __WEBPACK_IMPORTED_MODULE_2_fbjs_lib_invariant___default()(!sectionIdentities || !rowIdentities || sectionIdentities.length === rowIdentities.length, 'row and section ids lengths must be the same');

      var newSource = new ListViewDataSource({
        getRowData: this._getRowData,
        getSectionHeaderData: this._getSectionHeaderData,
        rowHasChanged: this._rowHasChanged,
        sectionHeaderHasChanged: this._sectionHeaderHasChanged
      });
      newSource._dataBlob = dataBlob;
      if (sectionIdentities) {
        newSource.sectionIdentities = sectionIdentities;
      } else {
        newSource.sectionIdentities = Object.keys(dataBlob);
      }
      if (rowIdentities) {
        newSource.rowIdentities = rowIdentities;
      } else {
        newSource.rowIdentities = [];
        newSource.sectionIdentities.forEach(function (sectionID) {
          newSource.rowIdentities.push(Object.keys(dataBlob[sectionID]));
        });
      }
      newSource._cachedRowCount = countRows(newSource.rowIdentities);

      newSource._calculateDirtyArrays(this._dataBlob, this.sectionIdentities, this.rowIdentities);

      return newSource;
    }
  }, {
    key: 'getRowCount',
    value: function getRowCount() {
      return this._cachedRowCount;
    }
  }, {
    key: 'getRowAndSectionCount',
    value: function getRowAndSectionCount() {
      return this._cachedRowCount + this.sectionIdentities.length;
    }

    /**
     * Returns if the row is dirtied and needs to be rerendered
     */

  }, {
    key: 'rowShouldUpdate',
    value: function rowShouldUpdate(sectionIndex, rowIndex) {
      var needsUpdate = this._dirtyRows[sectionIndex][rowIndex];
      __WEBPACK_IMPORTED_MODULE_4_fbjs_lib_warning___default()(needsUpdate !== undefined, 'missing dirtyBit for section, row: ' + sectionIndex + ', ' + rowIndex);
      return needsUpdate;
    }

    /**
     * Gets the data required to render the row.
     */

  }, {
    key: 'getRowData',
    value: function getRowData(sectionIndex, rowIndex) {
      var sectionID = this.sectionIdentities[sectionIndex];
      var rowID = this.rowIdentities[sectionIndex][rowIndex];
      __WEBPACK_IMPORTED_MODULE_4_fbjs_lib_warning___default()(sectionID !== undefined && rowID !== undefined, 'rendering invalid section, row: ' + sectionIndex + ', ' + rowIndex);
      return this._getRowData(this._dataBlob, sectionID, rowID);
    }

    /**
     * Gets the rowID at index provided if the dataSource arrays were flattened,
     * or null of out of range indexes.
     */

  }, {
    key: 'getRowIDForFlatIndex',
    value: function getRowIDForFlatIndex(index) {
      var accessIndex = index;
      for (var ii = 0; ii < this.sectionIdentities.length; ii++) {
        if (accessIndex >= this.rowIdentities[ii].length) {
          accessIndex -= this.rowIdentities[ii].length;
        } else {
          return this.rowIdentities[ii][accessIndex];
        }
      }
      return null;
    }

    /**
     * Gets the sectionID at index provided if the dataSource arrays were flattened,
     * or null for out of range indexes.
     */

  }, {
    key: 'getSectionIDForFlatIndex',
    value: function getSectionIDForFlatIndex(index) {
      var accessIndex = index;
      for (var ii = 0; ii < this.sectionIdentities.length; ii++) {
        if (accessIndex >= this.rowIdentities[ii].length) {
          accessIndex -= this.rowIdentities[ii].length;
        } else {
          return this.sectionIdentities[ii];
        }
      }
      return null;
    }

    /**
     * Returns an array containing the number of rows in each section
     */

  }, {
    key: 'getSectionLengths',
    value: function getSectionLengths() {
      var results = [];
      for (var ii = 0; ii < this.sectionIdentities.length; ii++) {
        results.push(this.rowIdentities[ii].length);
      }
      return results;
    }

    /**
     * Returns if the section header is dirtied and needs to be rerendered
     */

  }, {
    key: 'sectionHeaderShouldUpdate',
    value: function sectionHeaderShouldUpdate(sectionIndex) {
      var needsUpdate = this._dirtySections[sectionIndex];
      __WEBPACK_IMPORTED_MODULE_4_fbjs_lib_warning___default()(needsUpdate !== undefined, 'missing dirtyBit for section: ' + sectionIndex);
      return needsUpdate;
    }

    /**
     * Gets the data required to render the section header
     */

  }, {
    key: 'getSectionHeaderData',
    value: function getSectionHeaderData(sectionIndex) {
      if (!this._getSectionHeaderData) {
        return null;
      }
      var sectionID = this.sectionIdentities[sectionIndex];
      __WEBPACK_IMPORTED_MODULE_4_fbjs_lib_warning___default()(sectionID !== undefined, 'renderSection called on invalid section: ' + sectionIndex);
      return this._getSectionHeaderData(this._dataBlob, sectionID);
    }

    /**
     * Private members and methods.
     */

    // These two 'protected' variables are accessed by ListView to iterate over
    // the data in this class.

  }, {
    key: '_calculateDirtyArrays',
    value: function _calculateDirtyArrays(prevDataBlob, prevSectionIDs, prevRowIDs) {
      // construct a hashmap of the existing (old) id arrays
      var prevSectionsHash = keyedDictionaryFromArray(prevSectionIDs);
      var prevRowsHash = {};
      for (var ii = 0; ii < prevRowIDs.length; ii++) {
        var sectionID = prevSectionIDs[ii];
        __WEBPACK_IMPORTED_MODULE_4_fbjs_lib_warning___default()(!prevRowsHash[sectionID], 'SectionID appears more than once: ' + sectionID);
        prevRowsHash[sectionID] = keyedDictionaryFromArray(prevRowIDs[ii]);
      }

      // compare the 2 identity array and get the dirtied rows
      this._dirtySections = [];
      this._dirtyRows = [];

      var dirty;
      for (var sIndex = 0; sIndex < this.sectionIdentities.length; sIndex++) {
        var sectionID = this.sectionIdentities[sIndex];
        // dirty if the sectionHeader is new or _sectionHasChanged is true
        dirty = !prevSectionsHash[sectionID];
        var sectionHeaderHasChanged = this._sectionHeaderHasChanged;
        if (!dirty && sectionHeaderHasChanged) {
          dirty = sectionHeaderHasChanged(this._getSectionHeaderData(prevDataBlob, sectionID), this._getSectionHeaderData(this._dataBlob, sectionID));
        }
        this._dirtySections.push(!!dirty);

        this._dirtyRows[sIndex] = [];
        for (var rIndex = 0; rIndex < this.rowIdentities[sIndex].length; rIndex++) {
          var rowID = this.rowIdentities[sIndex][rIndex];
          // dirty if the section is new, row is new or _rowHasChanged is true
          dirty = !prevSectionsHash[sectionID] || !prevRowsHash[sectionID][rowID] || this._rowHasChanged(this._getRowData(prevDataBlob, sectionID, rowID), this._getRowData(this._dataBlob, sectionID, rowID));
          this._dirtyRows[sIndex].push(!!dirty);
        }
      }
    }
  }]);

  return ListViewDataSource;
}();

function countRows(allRowIDs) {
  var totalRows = 0;
  for (var sectionIdx = 0; sectionIdx < allRowIDs.length; sectionIdx++) {
    var rowIDs = allRowIDs[sectionIdx];
    totalRows += rowIDs.length;
  }
  return totalRows;
}

function keyedDictionaryFromArray(arr) {
  if (__WEBPACK_IMPORTED_MODULE_3_fbjs_lib_isEmpty___default()(arr)) {
    return {};
  }
  var result = {};
  for (var ii = 0; ii < arr.length; ii++) {
    var key = arr[ii];
    __WEBPACK_IMPORTED_MODULE_4_fbjs_lib_warning___default()(!result[key], 'Value appears more than once in array: ' + key);
    result[key] = true;
  }
  return result;
}

// module.exports = ListViewDataSource;
/* harmony default export */ __webpack_exports__["a"] = (ListViewDataSource);

/***/ }),
/* 389 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dom__);
/* eslint no-unused-vars: 0 */



/* harmony default export */ __webpack_exports__["a"] = ({
  bindEvt: function bindEvt() {
    var ele = this.getEle();
    ele.addEventListener('touchstart', this.onPullUpStart);
    ele.addEventListener('touchmove', this.onPullUpMove);
    ele.addEventListener('touchend', this.onPullUpEnd);
    ele.addEventListener('touchcancel', this.onPullUpEnd);
  },
  unBindEvt: function unBindEvt() {
    var ele = this.getEle();
    ele.removeEventListener('touchstart', this.onPullUpStart);
    ele.removeEventListener('touchmove', this.onPullUpMove);
    ele.removeEventListener('touchend', this.onPullUpEnd);
    ele.removeEventListener('touchcancel', this.onPullUpEnd);
  },
  getEle: function getEle() {
    var _props = this.props,
        stickyHeader = _props.stickyHeader,
        useBodyScroll = _props.useBodyScroll;

    var ele = void 0;
    if (stickyHeader || useBodyScroll) {
      ele = document.body;
    } else {
      ele = __WEBPACK_IMPORTED_MODULE_1_react_dom___default.a.findDOMNode(this.refs.listviewscroll.refs.ScrollView);
    }
    return ele;
  },
  componentDidMount: function componentDidMount() {
    this.bindEvt();
  },
  componentWillUnmount: function componentWillUnmount() {
    this.unBindEvt();
  },
  onPullUpStart: function onPullUpStart(e) {
    this._pullUpStartPageY = e.touches[0].screenY;
    this._isPullUp = false;
    this._pullUpEle = this.getEle();
  },
  onPullUpMove: function onPullUpMove(e) {
    // 使用 pageY 对比有问题
    if (e.touches[0].screenY < this._pullUpStartPageY && this._reachBottom()) {
      // console.log('滚动条到了底部，pull up');
      this._isPullUp = true;
    }
  },
  onPullUpEnd: function onPullUpEnd(e) {
    if (this._isPullUp && this.props.onEndReached) {
      this.props.onEndReached(e);
    }
    this._isPullUp = false;
  },
  _reachBottom: function _reachBottom() {
    var element = this._pullUpEle;
    if (element === document.body) {
      return element.scrollHeight - element.scrollTop === window.innerHeight;
    }
    return element.scrollHeight - element.scrollTop === element.clientHeight;
  }
});

/***/ }),
/* 390 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_prop_types__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_classnames__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_classnames__);









var propTypes = {
  prefixCls: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.string,
  className: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.string,
  style: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.object,
  icon: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.any,
  loading: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.any,
  distanceToRefresh: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.number,
  refreshing: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.bool,
  onRefresh: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.func.isRequired
};

var RefreshControl = function (_React$Component) {
  __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default()(RefreshControl, _React$Component);

  function RefreshControl(props) {
    __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default()(this, RefreshControl);

    var _this = __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default()(this, (RefreshControl.__proto__ || Object.getPrototypeOf(RefreshControl)).call(this, props));

    _this.state = {
      active: false,
      deactive: false,
      loadingState: false
    };
    return _this;
  }

  __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default()(RefreshControl, [{
    key: 'render',
    value: function render() {
      var _classNames;

      var _props = this.props,
          prefixCls = _props.prefixCls,
          _props$className = _props.className,
          className = _props$className === undefined ? '' : _props$className,
          style = _props.style,
          icon = _props.icon,
          loading = _props.loading,
          refreshing = _props.refreshing;
      var _state = this.state,
          active = _state.active,
          deactive = _state.deactive,
          loadingState = _state.loadingState;

      var wrapCls = __WEBPACK_IMPORTED_MODULE_7_classnames___default()((_classNames = {}, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_classNames, className, className), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_classNames, prefixCls + '-ptr', true), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_classNames, prefixCls + '-active', active), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_classNames, prefixCls + '-deactive', deactive), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_classNames, prefixCls + '-loading', loadingState || refreshing), _classNames));
      return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
        'div',
        { ref: 'ptr', className: wrapCls, style: style },
        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
          'div',
          { className: prefixCls + '-ptr-icon' },
          icon
        ),
        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
          'div',
          { className: prefixCls + '-ptr-loading' },
          loading
        )
      );
    }
  }]);

  return RefreshControl;
}(__WEBPACK_IMPORTED_MODULE_5_react___default.a.Component);

RefreshControl.propTypes = propTypes;
RefreshControl.defaultProps = {
  prefixCls: 'list-view-refresh-control',
  distanceToRefresh: 50,
  refreshing: false,
  icon: [__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
    'div',
    { key: '0', className: 'list-view-refresh-control-pull' },
    '\u2193 \u4E0B\u62C9'
  ), __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
    'div',
    { key: '1', className: 'list-view-refresh-control-release' },
    '\u2191 \u91CA\u653E'
  )],
  loading: __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
    'div',
    null,
    'loading...'
  )
};
/* harmony default export */ __webpack_exports__["a"] = (RefreshControl);

/***/ }),
/* 391 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_fbjs_lib_warning__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_fbjs_lib_warning___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_fbjs_lib_warning__);




/**
 * Mixin that can be integrated in order to handle scrolling that plays well
 * with `ResponderEventPlugin`. Integrate with your platform specific scroll
 * views, or even your custom built (every-frame animating) scroll views so that
 * all of these systems play well with the `ResponderEventPlugin`.
 *
 * iOS scroll event timing nuances:
 * ===============================
 *
 *
 * Scrolling without bouncing, if you touch down:
 * -------------------------------
 *
 * 1. `onMomentumScrollBegin` (when animation begins after letting up)
 *    ... physical touch starts ...
 * 2. `onTouchStartCapture`   (when you press down to stop the scroll)
 * 3. `onTouchStart`          (same, but bubble phase)
 * 4. `onResponderRelease`    (when lifting up - you could pause forever before * lifting)
 * 5. `onMomentumScrollEnd`
 *
 *
 * Scrolling with bouncing, if you touch down:
 * -------------------------------
 *
 * 1. `onMomentumScrollBegin` (when animation begins after letting up)
 *    ... bounce begins ...
 *    ... some time elapses ...
 *    ... physical touch during bounce ...
 * 2. `onMomentumScrollEnd`   (Makes no sense why this occurs first during bounce)
 * 3. `onTouchStartCapture`   (immediately after `onMomentumScrollEnd`)
 * 4. `onTouchStart`          (same, but bubble phase)
 * 5. `onTouchEnd`            (You could hold the touch start for a long time)
 * 6. `onMomentumScrollBegin` (When releasing the view starts bouncing back)
 *
 * So when we receive an `onTouchStart`, how can we tell if we are touching
 * *during* an animation (which then causes the animation to stop)? The only way
 * to tell is if the `touchStart` occurred immediately after the
 * `onMomentumScrollEnd`.
 *
 * This is abstracted out for you, so you can just call this.scrollResponderIsAnimating() if
 * necessary
 *
 * `ScrollResponder` also includes logic for blurring a currently focused input
 * if one is focused while scrolling. The `ScrollResponder` is a natural place
 * to put this logic since it can support not dismissing the keyboard while
 * scrolling, unless a recognized "tap"-like gesture has occurred.
 *
 * The public lifecycle API includes events for keyboard interaction, responder
 * interaction, and scrolling (among others). The keyboard callbacks
 * `onKeyboardWill/Did/*` are *global* events, but are invoked on scroll
 * responder's props so that you can guarantee that the scroll responder's
 * internal state has been updated accordingly (and deterministically) by
 * the time the props callbacks are invoke. Otherwise, you would always wonder
 * if the scroll responder is currently in a state where it recognizes new
 * keyboard positions etc. If coordinating scrolling with keyboard movement,
 * *always* use these hooks instead of listening to your own global keyboard
 * events.
 *
 * Public keyboard lifecycle API: (props callbacks)
 *
 * Standard Keyboard Appearance Sequence:
 *
 *   this.props.onKeyboardWillShow
 *   this.props.onKeyboardDidShow
 *
 * `onScrollResponderKeyboardDismissed` will be invoked if an appropriate
 * tap inside the scroll responder's scrollable region was responsible
 * for the dismissal of the keyboard. There are other reasons why the
 * keyboard could be dismissed.
 *
 *   this.props.onScrollResponderKeyboardDismissed
 *
 * Standard Keyboard Hide Sequence:
 *
 *   this.props.onKeyboardWillHide
 *   this.props.onKeyboardDidHide
 */

var IS_ANIMATING_TOUCH_START_THRESHOLD_MS = 16;

// type State = {
//     isTouching: boolean;
//     lastMomentumScrollBeginTime: number;
//     lastMomentumScrollEndTime: number;
//     observedScrollSinceBecomingResponder: boolean;
//     becameResponderWhileAnimating: boolean;
// };
// type Event = Object;

var ScrollResponderMixin = {
  // mixins: [Subscribable.Mixin],
  // statics: RCTScrollViewConsts,
  scrollResponderMixinGetInitialState: function scrollResponderMixinGetInitialState() {
    return {
      isTouching: false,
      lastMomentumScrollBeginTime: 0,
      lastMomentumScrollEndTime: 0,

      // Reset to false every time becomes responder. This is used to:
      // - Determine if the scroll view has been scrolled and therefore should
      // refuse to give up its responder lock.
      // - Determine if releasing should dismiss the keyboard when we are in
      // tap-to-dismiss mode (!this.props.keyboardShouldPersistTaps).
      observedScrollSinceBecomingResponder: false,
      becameResponderWhileAnimating: false
    };
  },

  /**
   * Invoke this from an `onScroll` event.
   */
  scrollResponderHandleScrollShouldSetResponder: function scrollResponderHandleScrollShouldSetResponder() {
    return this.state.isTouching;
  },

  /**
   * Merely touch starting is not sufficient for a scroll view to become the
   * responder. Being the "responder" means that the very next touch move/end
   * event will result in an action/movement.
   *
   * Invoke this from an `onStartShouldSetResponder` event.
   *
   * `onStartShouldSetResponder` is used when the next move/end will trigger
   * some UI movement/action, but when you want to yield priority to views
   * nested inside of the view.
   *
   * There may be some cases where scroll views actually should return `true`
   * from `onStartShouldSetResponder`: Any time we are detecting a standard tap
   * that gives priority to nested views.
   *
   * - If a single tap on the scroll view triggers an action such as
   *   recentering a map style view yet wants to give priority to interaction
   *   views inside (such as dropped pins or labels), then we would return true
   *   from this method when there is a single touch.
   *
   * - Similar to the previous case, if a two finger "tap" should trigger a
   *   zoom, we would check the `touches` count, and if `>= 2`, we would return
   *   true.
   *
   */
  scrollResponderHandleStartShouldSetResponder: function scrollResponderHandleStartShouldSetResponder() {
    return false;
  },

  /**
   * There are times when the scroll view wants to become the responder
   * (meaning respond to the next immediate `touchStart/touchEnd`), in a way
   * that *doesn't* give priority to nested views (hence the capture phase):
   *
   * - Currently animating.
   * - Tapping anywhere that is not the focused input, while the keyboard is
   *   up (which should dismiss the keyboard).
   *
   * Invoke this from an `onStartShouldSetResponderCapture` event.
   */
  scrollResponderHandleStartShouldSetResponderCapture: function scrollResponderHandleStartShouldSetResponderCapture(e) {
    // First see if we want to eat taps while the keyboard is up
    // let currentlyFocusedTextInput = TextInputState.currentlyFocusedField();
    // if (!this.props.keyboardShouldPersistTaps &&
    //   currentlyFocusedTextInput != null &&
    //   e.target !== currentlyFocusedTextInput) {
    //   return true;
    // }
    return this.scrollResponderIsAnimating();
  },

  /**
   * make sure responder is `listview` self
   *
   * Invoke this from an `onMoveShouldSetResponderCapture` event
   */
  scrollResponderHandleMoveShouldSetResponderCapture: function scrollResponderHandleMoveShouldSetResponderCapture(e) {
    return true;
  },

  /**
   * Invoke this from an `onResponderReject` event.
   *
   * Some other element is not yielding its role as responder. Normally, we'd
   * just disable the `UIScrollView`, but a touch has already began on it, the
   * `UIScrollView` will not accept being disabled after that. The easiest
   * solution for now is to accept the limitation of disallowing this
   * altogether. To improve this, find a way to disable the `UIScrollView` after
   * a touch has already started.
   */
  scrollResponderHandleResponderReject: function scrollResponderHandleResponderReject() {
    __WEBPACK_IMPORTED_MODULE_2_fbjs_lib_warning___default()(false, "ScrollView doesn't take rejection well - scrolls anyway");
  },

  /**
   * We will allow the scroll view to give up its lock iff it acquired the lock
   * during an animation. This is a very useful default that happens to satisfy
   * many common user experiences.
   *
   * - Stop a scroll on the left edge, then turn that into an outer view's
   *   backswipe.
   * - Stop a scroll mid-bounce at the top, continue pulling to have the outer
   *   view dismiss.
   * - However, without catching the scroll view mid-bounce (while it is
   *   motionless), if you drag far enough for the scroll view to become
   *   responder (and therefore drag the scroll view a bit), any backswipe
   *   navigation of a swipe gesture higher in the view hierarchy, should be
   *   rejected.
   */
  scrollResponderHandleTerminationRequest: function scrollResponderHandleTerminationRequest() {
    return !this.state.observedScrollSinceBecomingResponder;
  },

  /**
   * Invoke this from an `onTouchEnd` event.
   *
   * @param {SyntheticEvent} e Event.
   */
  scrollResponderHandleTouchEnd: function scrollResponderHandleTouchEnd(e) {
    var nativeEvent = e.nativeEvent;
    this.state.isTouching = nativeEvent.touches.length !== 0;
    this.props.onTouchEnd && this.props.onTouchEnd(e);
  },

  /**
   * Invoke this from an `onResponderRelease` event.
   */
  scrollResponderHandleResponderRelease: function scrollResponderHandleResponderRelease(e) {
    this.props.onResponderRelease && this.props.onResponderRelease(e);

    // By default scroll views will unfocus a textField
    // if another touch occurs outside of it
    // let currentlyFocusedTextInput = TextInputState.currentlyFocusedField();
    if (!this.props.keyboardShouldPersistTaps &&
    // currentlyFocusedTextInput != null && e.target !== currentlyFocusedTextInput &&
    !this.state.observedScrollSinceBecomingResponder && !this.state.becameResponderWhileAnimating) {
      this.props.onScrollResponderKeyboardDismissed && this.props.onScrollResponderKeyboardDismissed(e);
      // TextInputState.blurTextInput(currentlyFocusedTextInput);
    }
  },

  scrollResponderHandleScroll: function scrollResponderHandleScroll(e) {
    this.state.observedScrollSinceBecomingResponder = true;
    this.props.onScroll && this.props.onScroll(e);
  },

  /**
   * Invoke this from an `onResponderGrant` event.
   */
  scrollResponderHandleResponderGrant: function scrollResponderHandleResponderGrant(e) {
    this.state.observedScrollSinceBecomingResponder = false;
    this.props.onResponderGrant && this.props.onResponderGrant(e);
    this.state.becameResponderWhileAnimating = this.scrollResponderIsAnimating();
  },

  /**
   * Unfortunately, `onScrollBeginDrag` also fires when *stopping* the scroll
   * animation, and there's not an easy way to distinguish a drag vs. stopping
   * momentum.
   *
   * Invoke this from an `onScrollBeginDrag` event.
   */
  scrollResponderHandleScrollBeginDrag: function scrollResponderHandleScrollBeginDrag(e) {
    this.props.onScrollBeginDrag && this.props.onScrollBeginDrag(e);
  },

  /**
   * Invoke this from an `onScrollEndDrag` event.
   */
  scrollResponderHandleScrollEndDrag: function scrollResponderHandleScrollEndDrag(e) {
    this.props.onScrollEndDrag && this.props.onScrollEndDrag(e);
  },

  /**
   * Invoke this from an `onMomentumScrollBegin` event.
   */
  scrollResponderHandleMomentumScrollBegin: function scrollResponderHandleMomentumScrollBegin(e) {
    this.state.lastMomentumScrollBeginTime = Date.now();
    this.props.onMomentumScrollBegin && this.props.onMomentumScrollBegin(e);
  },

  /**
   * Invoke this from an `onMomentumScrollEnd` event.
   */
  scrollResponderHandleMomentumScrollEnd: function scrollResponderHandleMomentumScrollEnd(e) {
    this.state.lastMomentumScrollEndTime = Date.now();
    this.props.onMomentumScrollEnd && this.props.onMomentumScrollEnd(e);
  },

  /**
   * Invoke this from an `onTouchStart` event.
   *
   * Since we know that the `SimpleEventPlugin` occurs later in the plugin
   * order, after `ResponderEventPlugin`, we can detect that we were *not*
   * permitted to be the responder (presumably because a contained view became
   * responder). The `onResponderReject` won't fire in that case - it only
   * fires when a *current* responder rejects our request.
   *
   * @param {SyntheticEvent} e Touch Start event.
   */
  scrollResponderHandleTouchStart: function scrollResponderHandleTouchStart(e) {
    this.state.isTouching = true;
    this.props.onTouchStart && this.props.onTouchStart(e);
  },

  /**
   * Invoke this from an `onTouchMove` event.
   *
   * Since we know that the `SimpleEventPlugin` occurs later in the plugin
   * order, after `ResponderEventPlugin`, we can detect that we were *not*
   * permitted to be the responder (presumably because a contained view became
   * responder). The `onResponderReject` won't fire in that case - it only
   * fires when a *current* responder rejects our request.
   *
   * @param {SyntheticEvent} e Touch Start event.
   */
  scrollResponderHandleTouchMove: function scrollResponderHandleTouchMove(e) {
    this.props.onTouchMove && this.props.onTouchMove(e);
  },

  /**
   * A helper function for this class that lets us quickly determine if the
   * view is currently animating. This is particularly useful to know when
   * a touch has just started or ended.
   */
  scrollResponderIsAnimating: function scrollResponderIsAnimating() {
    var now = Date.now();
    var timeSinceLastMomentumScrollEnd = now - this.state.lastMomentumScrollEndTime;
    var isAnimating = timeSinceLastMomentumScrollEnd < IS_ANIMATING_TOUCH_START_THRESHOLD_MS || this.state.lastMomentumScrollEndTime < this.state.lastMomentumScrollBeginTime;
    return isAnimating;
  },

  /**
   * A helper function to scroll to a specific point  in the scrollview.
   * This is currently used to help focus on child textview's, but this
   * can also be used to quickly scroll to any element we want to focus
   */
  scrollResponderScrollTo: function scrollResponderScrollTo(offsetX, offsetY) {
    // TODO: Add scroll animation
    this.scrollResponderScrollWithouthAnimationTo(offsetX, offsetY);
  },

  /**
   * Like `scrollResponderScrollTo` but immediately scrolls to the given
   * position
   */
  scrollResponderScrollWithouthAnimationTo: function scrollResponderScrollWithouthAnimationTo(offsetX, offsetY) {

    var node = __WEBPACK_IMPORTED_MODULE_1_react_dom___default.a.findDOMNode(this);
    node.offsetX = offsetX;
    node.offsetY = offsetY;
  },

  /**
   * A helper function to zoom to a specific rect in the scrollview.
   * @param {object} rect Should have shape {x, y, width, height}
   */
  scrollResponderZoomTo: function scrollResponderZoomTo(rect) {
    // RCTUIManager.zoomToRect(React.findNodeHandle(this), rect);
    // TODO
  },

  /**
   * This method should be used as the callback to onFocus in a TextInputs'
   * parent view. Note that any module using this mixin needs to return
   * the parent view's ref in getScrollViewRef() in order to use this method.
   * @param {any} nodeHandle The TextInput node handle
   * @param {number} additionalOffset The scroll view's top "contentInset".
   *        Default is 0.
   * @param {bool} preventNegativeScrolling Whether to allow pulling the content
   *        down to make it meet the keyboard's top. Default is false.
   */
  scrollResponderScrollNativeHandleToKeyboard: function scrollResponderScrollNativeHandleToKeyboard(nodeHandle, additionalOffset, preventNegativeScrollOffset) {
    this.additionalScrollOffset = additionalOffset || 0;
    this.preventNegativeScrollOffset = !!preventNegativeScrollOffset;
    // RCTUIManager.measureLayout(
    //   nodeHandle,
    //   React.findNodeHandle(this.getInnerViewNode()),
    //   this.scrollResponderTextInputFocusError,
    //   this.scrollResponderInputMeasureAndScrollToKeyboard
    // );
  },

  /**
   * The calculations performed here assume the scroll view takes up the entire
   * screen - even if has some content inset. We then measure the offsets of the
   * keyboard, and compensate both for the scroll view's "contentInset".
   *
   * @param {number} left Position of input w.r.t. table view.
   * @param {number} top Position of input w.r.t. table view.
   * @param {number} width Width of the text input.
   * @param {number} height Height of the text input.
   */
  scrollResponderInputMeasureAndScrollToKeyboard: function scrollResponderInputMeasureAndScrollToKeyboard(left, top, width, height) {
    if (this.keyboardWillOpenTo) {
      var scrollOffsetY = top - this.keyboardWillOpenTo.endCoordinates.screenY + height + this.additionalScrollOffset;

      // By default, this can scroll with negative offset, pulling the content
      // down so that the target component's bottom meets the keyboard's top.
      // If requested otherwise, cap the offset at 0 minimum to avoid content
      // shifting down.
      if (this.preventNegativeScrollOffset) {
        scrollOffsetY = Math.max(0, scrollOffsetY);
      }
      this.scrollResponderScrollTo(0, scrollOffsetY);
    }
    this.additionalOffset = 0;
    this.preventNegativeScrollOffset = false;
  },

  scrollResponderTextInputFocusError: function scrollResponderTextInputFocusError(e) {
    console.error('Error measuring text field: ', e);
  },

  /**
   * `componentWillMount` is the closest thing to a  standard "constructor" for
   * React components.
   *
   * The `keyboardWillShow` is called before input focus.
   */
  componentWillMount: function componentWillMount() {
    // this.keyboardWillOpenTo = null;
    // this.additionalScrollOffset = 0;
    // this.addListenerOn(RCTDeviceEventEmitter, 'keyboardWillShow', this.scrollResponderKeyboardWillShow);
    // this.addListenerOn(RCTDeviceEventEmitter, 'keyboardWillHide', this.scrollResponderKeyboardWillHide);
    // this.addListenerOn(RCTDeviceEventEmitter, 'keyboardDidShow', this.scrollResponderKeyboardDidShow);
    // this.addListenerOn(RCTDeviceEventEmitter, 'keyboardDidHide', this.scrollResponderKeyboardDidHide);
    // warning(this.getInnerViewNode, 'You need to implement getInnerViewNode in '
    //    + this.constructor.displayName + ' to get full'
    //    + 'functionality from ScrollResponder mixin. See example of ListView and'
    //    + ' ScrollView.');
  },

  /**
   * Warning, this may be called several times for a single keyboard opening.
   * It's best to store the information in this method and then take any action
   * at a later point (either in `keyboardDidShow` or other).
   *
   * Here's the order that events occur in:
   * - focus
   * - willShow {startCoordinates, endCoordinates} several times
   * - didShow several times
   * - blur
   * - willHide {startCoordinates, endCoordinates} several times
   * - didHide several times
   *
   * The `ScrollResponder` providesModule callbacks for each of these events.
   * Even though any user could have easily listened to keyboard events
   * themselves, using these `props` callbacks ensures that ordering of events
   * is consistent - and not dependent on the order that the keyboard events are
   * subscribed to. This matters when telling the scroll view to scroll to where
   * the keyboard is headed - the scroll responder better have been notified of
   * the keyboard destination before being instructed to scroll to where the
   * keyboard will be. Stick to the `ScrollResponder` callbacks, and everything
   * will work.
   *
   * WARNING: These callbacks will fire even if a keyboard is displayed in a
   * different navigation pane. Filter out the events to determine if they are
   * relevant to you. (For example, only if you receive these callbacks after
   * you had explicitly focused a node etc).
   */
  scrollResponderKeyboardWillShow: function scrollResponderKeyboardWillShow(e) {
    this.keyboardWillOpenTo = e;
    this.props.onKeyboardWillShow && this.props.onKeyboardWillShow(e);
  },

  scrollResponderKeyboardWillHide: function scrollResponderKeyboardWillHide(e) {
    this.keyboardWillOpenTo = null;
    this.props.onKeyboardWillHide && this.props.onKeyboardWillHide(e);
  },

  scrollResponderKeyboardDidShow: function scrollResponderKeyboardDidShow(e) {
    // TODO(7693961): The event for DidShow is not available on iOS yet.
    // Use the one from WillShow and do not assign.
    if (e) {
      this.keyboardWillOpenTo = e;
    }
    this.props.onKeyboardDidShow && this.props.onKeyboardDidShow(e);
  },

  scrollResponderKeyboardDidHide: function scrollResponderKeyboardDidHide() {
    this.keyboardWillOpenTo = null;
    this.props.onKeyboardDidHide && this.props.onKeyboardDidHide();
  }

};

var ScrollResponder = {
  Mixin: ScrollResponderMixin
};

// module.exports = ScrollResponder;
/* harmony default export */ __webpack_exports__["a"] = (ScrollResponder);

/***/ }),
/* 392 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_prop_types__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_dom__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_zscroller__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_object_assign__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_object_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_object_assign__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_classnames__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__util__ = __webpack_require__(127);













var SCROLLVIEW = 'ScrollView';
var INNERVIEW = 'InnerScrollView';

// https://github.com/facebook/react-native/blob/master/Libraries/Components/ScrollView/ScrollView.js
// https://facebook.github.io/react-native/docs/refreshcontrol.html

/* eslint react/prop-types: 0, react/sort-comp: 0, no-unused-expressions: 0 */

var propTypes = {
  children: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.any,
  className: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.string,
  prefixCls: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.string,
  listPrefixCls: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.string,
  listViewPrefixCls: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.string,
  style: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.object,
  contentContainerStyle: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.object,
  onScroll: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.func,
  scrollEventThrottle: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.number,
  removeClippedSubviews: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.bool, // offscreen views are removed
  refreshControl: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.element
};
var styles = {
  base: {
    position: 'relative',
    overflow: 'auto',
    WebkitOverflowScrolling: 'touch',
    flex: 1
  },
  zScroller: {
    position: 'relative',
    overflow: 'hidden',
    flex: 1
  }
};

var ScrollView = function (_React$Component) {
  __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default()(ScrollView, _React$Component);

  function ScrollView() {
    var _ref;

    var _temp, _this, _ret;

    __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default()(this, ScrollView);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default()(this, (_ref = ScrollView.__proto__ || Object.getPrototypeOf(ScrollView)).call.apply(_ref, [this].concat(args))), _this), _this.throttleScroll = function () {
      var handleScroll = function handleScroll() {};
      if (_this.props.scrollEventThrottle && _this.props.onScroll) {
        handleScroll = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_11__util__["c" /* throttle */])(function (e) {
          _this.props.onScroll && _this.props.onScroll(e);
        }, _this.props.scrollEventThrottle);
      }
      return handleScroll;
    }, _this.scrollingComplete = function () {
      // console.log('scrolling complete');
      if (_this.props.refreshControl && _this.refs.refreshControl && _this.refs.refreshControl.state.deactive) {
        _this.refs.refreshControl.setState({ deactive: false });
      }
    }, _temp), __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default()(_this, _ret);
  }

  __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default()(ScrollView, [{
    key: 'componentWillUpdate',
    value: function componentWillUpdate(nextProps) {
      // https://stackoverflow.com/questions/1386696/make-scrollleft-scrolltop-changes-not-trigger-scroll-event
      // 问题情景：用户滚动内容后，改变 dataSource 触发 ListView componentWillReceiveProps
      // 内容变化后 scrollTop 如果改变、会自动触发 scroll 事件，而此事件应该避免被执行
      if ((this.props.dataSource !== nextProps.dataSource || this.props.initialListSize !== nextProps.initialListSize) && this.tsExec) {
        // console.log('componentWillUpdate');
        if (this.props.stickyHeader || this.props.useBodyScroll) {
          window.removeEventListener('scroll', this.tsExec);
        } else if (!this.props.useZscroller) {
          // not handle useZscroller now. todo
          __WEBPACK_IMPORTED_MODULE_7_react_dom___default.a.findDOMNode(this.refs[SCROLLVIEW]).removeEventListener('scroll', this.tsExec);
        }
      }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      var _this2 = this;

      // console.log('componentDidUpdate');
      if (prevProps.refreshControl && this.props.refreshControl) {
        var preRefreshing = prevProps.refreshControl.props.refreshing;
        var nowRefreshing = this.props.refreshControl.props.refreshing;
        if (preRefreshing && !nowRefreshing && this.refreshControlRefresh) {
          this.refreshControlRefresh();
        } else if (!this.manuallyRefresh && !preRefreshing && nowRefreshing) {
          this.domScroller.scroller.triggerPullToRefresh();
        }
      }
      // handle componentWillUpdate accordingly
      if ((this.props.dataSource !== prevProps.dataSource || this.props.initialListSize !== prevProps.initialListSize) && this.tsExec) {
        // console.log('componentDidUpdate');
        setTimeout(function () {
          if (_this2.props.stickyHeader || _this2.props.useBodyScroll) {
            window.addEventListener('scroll', _this2.tsExec);
          } else if (!_this2.props.useZscroller) {
            // not handle useZscroller now. todo
            __WEBPACK_IMPORTED_MODULE_7_react_dom___default.a.findDOMNode(_this2.refs[SCROLLVIEW]).addEventListener('scroll', _this2.tsExec);
          }
        }, 0);
      }
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this3 = this;

      this.tsExec = this.throttleScroll();
      // IE supports onresize on all HTML elements.
      // In all other Browsers the onresize is only available at the window object
      this.onLayout = function () {
        return _this3.props.onLayout({
          nativeEvent: { layout: { width: window.innerWidth, height: window.innerHeight } }
        });
      };
      var ele = __WEBPACK_IMPORTED_MODULE_7_react_dom___default.a.findDOMNode(this.refs[SCROLLVIEW]);

      if (this.props.stickyHeader || this.props.useBodyScroll) {
        window.addEventListener('scroll', this.tsExec);
        window.addEventListener('resize', this.onLayout);
        // todo
        // ele.addEventListener('resize', this.onContentSizeChange);
      } else {
        // todo
        // ele.addEventListener('resize', this.onLayout);
        // ReactDOM.findDOMNode(this.refs[INNERVIEW])
        // .addEventListener('resize', this.onContentSizeChange);
        if (this.props.useZscroller) {
          this.renderZscroller();
        } else {
          ele.addEventListener('scroll', this.tsExec);
        }
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (this.props.stickyHeader || this.props.useBodyScroll) {
        window.removeEventListener('scroll', this.tsExec);
        window.removeEventListener('resize', this.onLayout);
      } else if (this.props.useZscroller) {
        this.domScroller.destroy();
      } else {
        __WEBPACK_IMPORTED_MODULE_7_react_dom___default.a.findDOMNode(this.refs[SCROLLVIEW]).removeEventListener('scroll', this.tsExec);
      }
    }
  }, {
    key: 'scrollTo',
    value: function scrollTo() {
      if (this.props.stickyHeader || this.props.useBodyScroll) {
        var _window;

        (_window = window).scrollTo.apply(_window, arguments);
      } else if (this.props.useZscroller) {
        var _domScroller$scroller;

        // it will change zScroller's dimensions on data loaded, so it needs fire reflow.
        this.domScroller.reflow();
        (_domScroller$scroller = this.domScroller.scroller).scrollTo.apply(_domScroller$scroller, arguments);
      } else {
        var ele = __WEBPACK_IMPORTED_MODULE_7_react_dom___default.a.findDOMNode(this.refs[SCROLLVIEW]);
        ele.scrollLeft = arguments.length <= 0 ? undefined : arguments[0];
        ele.scrollTop = arguments.length <= 1 ? undefined : arguments[1];
      }
    }
  }, {
    key: 'renderZscroller',
    value: function renderZscroller() {
      var _this4 = this;

      var _props = this.props,
          scrollerOptions = _props.scrollerOptions,
          refreshControl = _props.refreshControl;
      // console.log('onRefresh will not change', refreshControl.props.onRefresh.toString());

      this.domScroller = new __WEBPACK_IMPORTED_MODULE_8_zscroller__["default"](__WEBPACK_IMPORTED_MODULE_7_react_dom___default.a.findDOMNode(this.refs[INNERVIEW]), __WEBPACK_IMPORTED_MODULE_9_object_assign___default()({}, {
        scrollingX: false,
        onScroll: this.tsExec,
        scrollingComplete: this.scrollingComplete
      }, scrollerOptions));
      if (refreshControl) {
        var scroller = this.domScroller.scroller;
        var _refreshControl$props = refreshControl.props,
            distanceToRefresh = _refreshControl$props.distanceToRefresh,
            onRefresh = _refreshControl$props.onRefresh;

        scroller.activatePullToRefresh(distanceToRefresh, function () {
          // console.log('first reach the distance');
          _this4.manuallyRefresh = true;
          _this4.overDistanceThenRelease = false;
          _this4.refs.refreshControl && _this4.refs.refreshControl.setState({ active: true });
        }, function () {
          // console.log('back to the distance', this.overDistanceThenRelease);
          _this4.manuallyRefresh = false;
          _this4.refs.refreshControl && _this4.refs.refreshControl.setState({
            deactive: _this4.overDistanceThenRelease,
            active: false,
            loadingState: false
          });
        }, function () {
          // console.log('Over distance and release to loading');
          _this4.overDistanceThenRelease = true;
          _this4.refs.refreshControl && _this4.refs.refreshControl.setState({
            deactive: false,
            loadingState: true
          });
          var finishPullToRefresh = function finishPullToRefresh() {
            scroller.finishPullToRefresh();
            _this4.refreshControlRefresh = null;
          };
          Promise.all([new Promise(function (resolve) {
            onRefresh();
            _this4.refreshControlRefresh = resolve;
          }),
          // at lease 1s for ux
          new Promise(function (resolve) {
            return setTimeout(resolve, 1000);
          })]).then(finishPullToRefresh, finishPullToRefresh);
        });
        if (refreshControl.props.refreshing) {
          scroller.triggerPullToRefresh();
        }
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _classNames, _classNames2;

      var _props2 = this.props,
          children = _props2.children,
          className = _props2.className,
          _props2$prefixCls = _props2.prefixCls,
          prefixCls = _props2$prefixCls === undefined ? '' : _props2$prefixCls,
          _props2$listPrefixCls = _props2.listPrefixCls,
          listPrefixCls = _props2$listPrefixCls === undefined ? '' : _props2$listPrefixCls,
          _props2$listViewPrefi = _props2.listViewPrefixCls,
          listViewPrefixCls = _props2$listViewPrefi === undefined ? 'rmc-list-view' : _props2$listViewPrefi,
          _props2$style = _props2.style,
          style = _props2$style === undefined ? {} : _props2$style,
          contentContainerStyle = _props2.contentContainerStyle,
          useZscroller = _props2.useZscroller,
          refreshControl = _props2.refreshControl,
          stickyHeader = _props2.stickyHeader,
          useBodyScroll = _props2.useBodyScroll;


      var styleBase = styles.base;
      if (stickyHeader || useBodyScroll) {
        styleBase = null;
      } else if (useZscroller) {
        styleBase = styles.zScroller;
      }

      var preCls = prefixCls || listViewPrefixCls || '';

      var containerProps = {
        ref: SCROLLVIEW,
        style: __WEBPACK_IMPORTED_MODULE_9_object_assign___default()({}, styleBase, style),
        className: __WEBPACK_IMPORTED_MODULE_10_classnames___default()((_classNames = {}, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_classNames, className, !!className), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_classNames, preCls + '-scrollview', true), _classNames))
      };
      var contentContainerProps = {
        ref: INNERVIEW,
        style: __WEBPACK_IMPORTED_MODULE_9_object_assign___default()({}, { position: 'absolute', minWidth: '100%' }, contentContainerStyle),
        className: __WEBPACK_IMPORTED_MODULE_10_classnames___default()((_classNames2 = {}, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_classNames2, preCls + '-scrollview-content', true), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_classNames2, listPrefixCls, !!listPrefixCls), _classNames2))
      };

      if (refreshControl) {
        return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
          'div',
          containerProps,
          __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
            'div',
            contentContainerProps,
            __WEBPACK_IMPORTED_MODULE_5_react___default.a.cloneElement(refreshControl, { ref: 'refreshControl' }),
            children
          )
        );
      }

      if (stickyHeader || useBodyScroll) {
        return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
          'div',
          containerProps,
          children
        );
      }
      return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
        'div',
        containerProps,
        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
          'div',
          contentContainerProps,
          children
        )
      );
    }
  }]);

  return ScrollView;
}(__WEBPACK_IMPORTED_MODULE_5_react___default.a.Component);

ScrollView.propTypes = propTypes;
/* harmony default export */ __webpack_exports__["a"] = (ScrollView);

/***/ }),
/* 393 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_prop_types__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_prop_types__);







var StaticRenderer = function (_React$Component) {
  __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits___default()(StaticRenderer, _React$Component);

  function StaticRenderer() {
    __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, StaticRenderer);

    return __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn___default()(this, (StaticRenderer.__proto__ || Object.getPrototypeOf(StaticRenderer)).apply(this, arguments));
  }

  __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default()(StaticRenderer, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps) {
      return nextProps.shouldUpdate;
    }
  }, {
    key: 'render',
    value: function render() {
      return this.props.render();
    }
  }]);

  return StaticRenderer;
}(__WEBPACK_IMPORTED_MODULE_4_react___default.a.Component);

StaticRenderer.propTypes = {
  shouldUpdate: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.bool.isRequired,
  render: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.func.isRequired
};


/* harmony default export */ __webpack_exports__["a"] = (StaticRenderer);

/***/ }),
/* 394 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Carousel = __webpack_require__(395);

module.exports = Carousel;


/***/ }),
/* 395 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(15);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _createReactClass = __webpack_require__(23);

var _createReactClass2 = _interopRequireDefault(_createReactClass);

var _propTypes = __webpack_require__(6);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _kwReactTweenState = __webpack_require__(353);

var _kwReactTweenState2 = _interopRequireDefault(_kwReactTweenState);

var _decorators = __webpack_require__(396);

var _decorators2 = _interopRequireDefault(_decorators);

var _objectAssign = __webpack_require__(17);

var _objectAssign2 = _interopRequireDefault(_objectAssign);

var _exenv = __webpack_require__(299);

var _exenv2 = _interopRequireDefault(_exenv);

var addEvent = function addEvent(elem, type, eventHandle) {
  if (elem === null || typeof elem === 'undefined') {
    return;
  }
  if (elem.addEventListener) {
    elem.addEventListener(type, eventHandle, false);
  } else if (elem.attachEvent) {
    elem.attachEvent('on' + type, eventHandle);
  } else {
    elem['on' + type] = eventHandle;
  }
};

var removeEvent = function removeEvent(elem, type, eventHandle) {
  if (elem === null || typeof elem === 'undefined') {
    return;
  }
  if (elem.removeEventListener) {
    elem.removeEventListener(type, eventHandle, false);
  } else if (elem.detachEvent) {
    elem.detachEvent('on' + type, eventHandle);
  } else {
    elem['on' + type] = null;
  }
};

var Carousel = (0, _createReactClass2['default'])({
  displayName: 'Carousel',

  mixins: [_kwReactTweenState2['default'].Mixin],

  propTypes: {
    afterSlide: _propTypes2['default'].func,
    autoplay: _propTypes2['default'].bool,
    resetAutoplay: _propTypes2['default'].bool, // by warmhug
    swipeSpeed: _propTypes2['default'].number, // by warmhug
    autoplayInterval: _propTypes2['default'].number,
    beforeSlide: _propTypes2['default'].func,
    cellAlign: _propTypes2['default'].oneOf(['left', 'center', 'right']),
    cellSpacing: _propTypes2['default'].number,
    data: _propTypes2['default'].func,
    decorators: _propTypes2['default'].arrayOf(_propTypes2['default'].shape({
      component: _propTypes2['default'].func,
      position: _propTypes2['default'].oneOf(['TopLeft', 'TopCenter', 'TopRight', 'CenterLeft', 'CenterCenter', 'CenterRight', 'BottomLeft', 'BottomCenter', 'BottomRight']),
      style: _propTypes2['default'].object
    })),
    dragging: _propTypes2['default'].bool,
    easing: _propTypes2['default'].string,
    edgeEasing: _propTypes2['default'].string,
    framePadding: _propTypes2['default'].string,
    frameOverflow: _propTypes2['default'].string,
    initialSlideHeight: _propTypes2['default'].number,
    initialSlideWidth: _propTypes2['default'].number,
    slideIndex: _propTypes2['default'].number,
    slidesToShow: _propTypes2['default'].number,
    slidesToScroll: _propTypes2['default'].oneOfType([_propTypes2['default'].number, _propTypes2['default'].oneOf(['auto'])]),
    slideWidth: _propTypes2['default'].oneOfType([_propTypes2['default'].string, _propTypes2['default'].number]),
    speed: _propTypes2['default'].number,
    swiping: _propTypes2['default'].bool,
    vertical: _propTypes2['default'].bool,
    width: _propTypes2['default'].string,
    wrapAround: _propTypes2['default'].bool
  },

  getDefaultProps: function getDefaultProps() {
    return {
      afterSlide: function afterSlide() {},
      autoplay: false,
      resetAutoplay: true,
      swipeSpeed: 5,
      autoplayInterval: 3000,
      beforeSlide: function beforeSlide() {},
      cellAlign: 'left',
      cellSpacing: 0,
      data: function data() {},
      decorators: _decorators2['default'],
      dragging: true,
      easing: 'easeOutCirc',
      edgeEasing: 'easeOutElastic',
      framePadding: '0px',
      frameOverflow: 'hidden',
      slideIndex: 0,
      slidesToScroll: 1,
      slidesToShow: 1,
      slideWidth: 1,
      speed: 500,
      swiping: true,
      vertical: false,
      width: '100%',
      wrapAround: false
    };
  },

  getInitialState: function getInitialState() {
    return {
      currentSlide: this.props.slideIndex,
      dragging: false,
      frameWidth: 0,
      left: 0,
      slideCount: 0,
      slidesToScroll: this.props.slidesToScroll,
      slideWidth: 0,
      top: 0
    };
  },

  componentWillMount: function componentWillMount() {
    this.setInitialDimensions();
  },

  componentDidMount: function componentDidMount() {
    this.setDimensions();
    this.bindEvents();
    this.setExternalData();
    if (this.props.autoplay) {
      this.startAutoplay();
    }
  },

  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
    this.setState({
      slideCount: nextProps.children.length
    });
    this.setDimensions(nextProps);
    if (this.props.slideIndex !== nextProps.slideIndex && nextProps.slideIndex !== this.state.currentSlide) {
      this.goToSlide(nextProps.slideIndex);
    }
    if (this.props.autoplay !== nextProps.autoplay) {
      if (nextProps.autoplay) {
        this.startAutoplay();
      } else {
        this.stopAutoplay();
      }
    }
  },

  componentWillUnmount: function componentWillUnmount() {
    this.unbindEvents();
    this.stopAutoplay();
  },

  render: function render() {
    var self = this;
    var children = _react2['default'].Children.count(this.props.children) > 1 ? this.formatChildren(this.props.children) : this.props.children;
    return _react2['default'].createElement(
      'div',
      { className: ['slider', this.props.className || ''].join(' '), ref: 'slider', style: (0, _objectAssign2['default'])(this.getSliderStyles(), this.props.style || {}) },
      _react2['default'].createElement(
        'div',
        _extends({ className: 'slider-frame',
          ref: 'frame',
          style: this.getFrameStyles()
        }, this.getTouchEvents(), this.getMouseEvents(), {
          onClick: this.handleClick }),
        _react2['default'].createElement(
          'ul',
          { className: 'slider-list', ref: 'list', style: this.getListStyles() },
          children
        )
      ),
      this.props.decorators ? this.props.decorators.map(function (Decorator, index) {
        return _react2['default'].createElement(
          'div',
          {
            style: (0, _objectAssign2['default'])(self.getDecoratorStyles(Decorator.position), Decorator.style || {}),
            className: 'slider-decorator-' + index,
            key: index },
          _react2['default'].createElement(Decorator.component, {
            currentSlide: self.state.currentSlide,
            slideCount: self.state.slideCount,
            frameWidth: self.state.frameWidth,
            slideWidth: self.state.slideWidth,
            slidesToScroll: self.state.slidesToScroll,
            cellSpacing: self.props.cellSpacing,
            slidesToShow: self.props.slidesToShow,
            wrapAround: self.props.wrapAround,
            nextSlide: self.nextSlide,
            previousSlide: self.previousSlide,
            goToSlide: self.goToSlide })
        );
      }) : null,
      _react2['default'].createElement('style', { type: 'text/css', dangerouslySetInnerHTML: { __html: self.getStyleTagStyles() } })
    );
  },

  // Touch Events

  touchObject: {},

  getTouchEvents: function getTouchEvents() {
    var self = this;

    if (self.props.swiping === false) {
      return null;
    }

    return {
      onTouchStart: function onTouchStart(e) {
        self.touchObject = {
          startX: e.touches[0].pageX,
          startY: e.touches[0].pageY
        };
        self.handleMouseOver();
      },
      onTouchMove: function onTouchMove(e) {
        var direction = self.swipeDirection(self.touchObject.startX, e.touches[0].pageX, self.touchObject.startY, e.touches[0].pageY);

        if (direction !== 0) {
          e.preventDefault();
        }

        var length = self.props.vertical ? Math.round(Math.sqrt(Math.pow(e.touches[0].pageY - self.touchObject.startY, 2))) : Math.round(Math.sqrt(Math.pow(e.touches[0].pageX - self.touchObject.startX, 2)));

        self.touchObject = {
          startX: self.touchObject.startX,
          startY: self.touchObject.startY,
          endX: e.touches[0].pageX,
          endY: e.touches[0].pageY,
          length: length,
          direction: direction
        };

        self.setState({
          left: self.props.vertical ? 0 : self.getTargetLeft(self.touchObject.length * self.touchObject.direction),
          top: self.props.vertical ? self.getTargetLeft(self.touchObject.length * self.touchObject.direction) : 0
        });
      },
      onTouchEnd: function onTouchEnd(e) {
        self.handleSwipe(e);
        self.handleMouseOut();
      },
      onTouchCancel: function onTouchCancel(e) {
        self.handleSwipe(e);
      }
    };
  },

  clickSafe: true,

  getMouseEvents: function getMouseEvents() {
    var self = this;

    if (this.props.dragging === false) {
      return null;
    }

    return {
      onMouseOver: function onMouseOver() {
        self.handleMouseOver();
      },
      onMouseOut: function onMouseOut() {
        self.handleMouseOut();
      },
      onMouseDown: function onMouseDown(e) {
        self.touchObject = {
          startX: e.clientX,
          startY: e.clientY
        };

        self.setState({
          dragging: true
        });
      },
      onMouseMove: function onMouseMove(e) {
        if (!self.state.dragging) {
          return;
        }

        var direction = self.swipeDirection(self.touchObject.startX, e.clientX, self.touchObject.startY, e.clientY);

        if (direction !== 0) {
          e.preventDefault();
        }

        var length = self.props.vertical ? Math.round(Math.sqrt(Math.pow(e.clientY - self.touchObject.startY, 2))) : Math.round(Math.sqrt(Math.pow(e.clientX - self.touchObject.startX, 2)));

        self.touchObject = {
          startX: self.touchObject.startX,
          startY: self.touchObject.startY,
          endX: e.clientX,
          endY: e.clientY,
          length: length,
          direction: direction
        };

        self.setState({
          left: self.props.vertical ? 0 : self.getTargetLeft(self.touchObject.length * self.touchObject.direction),
          top: self.props.vertical ? self.getTargetLeft(self.touchObject.length * self.touchObject.direction) : 0
        });
      },
      onMouseUp: function onMouseUp(e) {
        if (!self.state.dragging) {
          return;
        }

        self.handleSwipe(e);
      },
      onMouseLeave: function onMouseLeave(e) {
        if (!self.state.dragging) {
          return;
        }

        self.handleSwipe(e);
      }
    };
  },

  handleMouseOver: function handleMouseOver() {
    if (this.props.autoplay) {
      this.autoplayPaused = true;
      this.stopAutoplay();
    }
  },

  handleMouseOut: function handleMouseOut() {
    if (this.props.autoplay && this.autoplayPaused) {
      this.startAutoplay();
      this.autoplayPaused = null;
    }
  },

  handleClick: function handleClick(e) {
    if (this.clickSafe === true) {
      e.preventDefault();
      e.stopPropagation();

      if (e.nativeEvent) {
        e.nativeEvent.stopPropagation();
      }
    }
  },

  handleSwipe: function handleSwipe(e) {
    if (typeof this.touchObject.length !== 'undefined' && this.touchObject.length > 44) {
      this.clickSafe = true;
    } else {
      this.clickSafe = false;
    }

    var slidesToShow = this.props.slidesToShow;
    if (this.props.slidesToScroll === 'auto') {
      slidesToShow = this.state.slidesToScroll;
    }

    if (this.touchObject.length > this.state.slideWidth / slidesToShow / this.props.swipeSpeed) {
      if (this.touchObject.direction === 1) {
        if (this.state.currentSlide >= _react2['default'].Children.count(this.props.children) - slidesToShow && !this.props.wrapAround) {
          this.animateSlide(_kwReactTweenState2['default'].easingTypes[this.props.edgeEasing]);
        } else {
          this.nextSlide();
        }
      } else if (this.touchObject.direction === -1) {
        if (this.state.currentSlide <= 0 && !this.props.wrapAround) {
          this.animateSlide(_kwReactTweenState2['default'].easingTypes[this.props.edgeEasing]);
        } else {
          this.previousSlide();
        }
      }
    } else {
      this.goToSlide(this.state.currentSlide);
    }

    this.touchObject = {};

    this.setState({
      dragging: false
    });
  },

  swipeDirection: function swipeDirection(x1, x2, y1, y2) {

    var xDist, yDist, r, swipeAngle;

    xDist = x1 - x2;
    yDist = y1 - y2;
    r = Math.atan2(yDist, xDist);

    swipeAngle = Math.round(r * 180 / Math.PI);
    if (swipeAngle < 0) {
      swipeAngle = 360 - Math.abs(swipeAngle);
    }
    if (swipeAngle <= 45 && swipeAngle >= 0) {
      return 1;
    }
    if (swipeAngle <= 360 && swipeAngle >= 315) {
      return 1;
    }
    if (swipeAngle >= 135 && swipeAngle <= 225) {
      return -1;
    }
    if (this.props.vertical === true) {
      if (swipeAngle >= 35 && swipeAngle <= 135) {
        return 1;
      } else {
        return -1;
      }
    }
    return 0;
  },

  autoplayIterator: function autoplayIterator() {
    if (this.props.wrapAround) {
      return this.nextSlide();
    }
    if (this.state.currentSlide !== this.state.slideCount - this.state.slidesToShow) {
      this.nextSlide();
    } else {
      this.stopAutoplay();
    }
  },

  startAutoplay: function startAutoplay() {
    this.autoplayID = setInterval(this.autoplayIterator, this.props.autoplayInterval);
  },

  resetAutoplay: function resetAutoplay() {
    if (this.props.resetAutoplay && this.props.autoplay && !this.autoplayPaused) {
      // by warmhug
      this.stopAutoplay();
      this.startAutoplay();
    }
  },

  stopAutoplay: function stopAutoplay() {
    this.autoplayID && clearInterval(this.autoplayID);
  },

  // Action Methods

  goToSlide: function goToSlide(index) {
    var self = this;
    if (index >= _react2['default'].Children.count(this.props.children) || index < 0) {
      if (!this.props.wrapAround) {
        return;
      };
      if (index >= _react2['default'].Children.count(this.props.children)) {
        this.props.beforeSlide(this.state.currentSlide, 0);
        return this.setState({
          currentSlide: 0
        }, function () {
          self.animateSlide(null, null, self.getTargetLeft(null, index), function () {
            self.animateSlide(null, 0.01);
            self.props.afterSlide(0);
            self.resetAutoplay();
            self.setExternalData();
          });
        });
      } else {
        var endSlide = _react2['default'].Children.count(this.props.children) - this.state.slidesToScroll;
        this.props.beforeSlide(this.state.currentSlide, endSlide);
        return this.setState({
          currentSlide: endSlide
        }, function () {
          self.animateSlide(null, null, self.getTargetLeft(null, index), function () {
            self.animateSlide(null, 0.01);
            self.props.afterSlide(endSlide);
            self.resetAutoplay();
            self.setExternalData();
          });
        });
      }
    }

    this.props.beforeSlide(this.state.currentSlide, index);

    this.setState({
      currentSlide: index
    }, function () {
      self.animateSlide();
      this.props.afterSlide(index);
      self.resetAutoplay();
      self.setExternalData();
    });
  },

  nextSlide: function nextSlide() {
    var childrenCount = _react2['default'].Children.count(this.props.children);
    var slidesToShow = this.props.slidesToShow;
    if (this.props.slidesToScroll === 'auto') {
      slidesToShow = this.state.slidesToScroll;
    }
    if (this.state.currentSlide >= childrenCount - slidesToShow && !this.props.wrapAround) {
      return;
    }

    if (this.props.wrapAround) {
      this.goToSlide(this.state.currentSlide + this.state.slidesToScroll);
    } else {
      if (this.props.slideWidth !== 1) {
        return this.goToSlide(this.state.currentSlide + this.state.slidesToScroll);
      }
      this.goToSlide(Math.min(this.state.currentSlide + this.state.slidesToScroll, childrenCount - slidesToShow));
    }
  },

  previousSlide: function previousSlide() {
    if (this.state.currentSlide <= 0 && !this.props.wrapAround) {
      return;
    }

    if (this.props.wrapAround) {
      this.goToSlide(this.state.currentSlide - this.state.slidesToScroll);
    } else {
      this.goToSlide(Math.max(0, this.state.currentSlide - this.state.slidesToScroll));
    }
  },

  // Animation

  animateSlide: function animateSlide(easing, duration, endValue, callback) {
    this.tweenState(this.props.vertical ? 'top' : 'left', {
      easing: easing || _kwReactTweenState2['default'].easingTypes[this.props.easing],
      duration: duration || this.props.speed,
      endValue: endValue || this.getTargetLeft(),
      onEnd: callback || null
    });
  },

  getTargetLeft: function getTargetLeft(touchOffset, slide) {
    var offset;
    var target = slide || this.state.currentSlide;
    switch (this.props.cellAlign) {
      case 'left':
        {
          offset = 0;
          offset -= this.props.cellSpacing * target;
          break;
        }
      case 'center':
        {
          offset = (this.state.frameWidth - this.state.slideWidth) / 2;
          offset -= this.props.cellSpacing * target;
          break;
        }
      case 'right':
        {
          offset = this.state.frameWidth - this.state.slideWidth;
          offset -= this.props.cellSpacing * target;
          break;
        }
    }

    var left = this.state.slideWidth * target;

    var lastSlide = this.state.currentSlide > 0 && target + this.state.slidesToScroll >= this.state.slideCount;

    if (lastSlide && this.props.slideWidth !== 1 && !this.props.wrapAround && this.props.slidesToScroll === 'auto') {
      left = this.state.slideWidth * this.state.slideCount - this.state.frameWidth;
      offset = 0;
      offset -= this.props.cellSpacing * (this.state.slideCount - 1);
    }

    offset -= touchOffset || 0;

    return (left - offset) * -1;
  },

  // Bootstrapping

  bindEvents: function bindEvents() {
    var self = this;
    if (_exenv2['default'].canUseDOM) {
      addEvent(window, 'resize', self.onResize);
      addEvent(document, 'readystatechange', self.onReadyStateChange);
    }
  },

  onResize: function onResize() {
    this.setDimensions();
  },

  onReadyStateChange: function onReadyStateChange() {
    this.setDimensions();
  },

  unbindEvents: function unbindEvents() {
    var self = this;
    if (_exenv2['default'].canUseDOM) {
      removeEvent(window, 'resize', self.onResize);
      removeEvent(document, 'readystatechange', self.onReadyStateChange);
    }
  },

  formatChildren: function formatChildren(children) {
    var self = this;
    var positionValue = this.props.vertical ? this.getTweeningValue('top') : this.getTweeningValue('left');
    return _react2['default'].Children.map(children, function (child, index) {
      return _react2['default'].createElement(
        'li',
        { className: 'slider-slide', style: self.getSlideStyles(index, positionValue), key: index },
        child
      );
    });
  },

  setInitialDimensions: function setInitialDimensions() {
    var self = this,
        slideWidth,
        frameHeight,
        slideHeight;

    slideWidth = this.props.vertical ? this.props.initialSlideHeight || 0 : this.props.initialSlideWidth || 0;
    slideHeight = this.props.initialSlideHeight ? this.props.initialSlideHeight * this.props.slidesToShow : 0;

    frameHeight = slideHeight + this.props.cellSpacing * (this.props.slidesToShow - 1);

    this.setState({
      slideHeight: slideHeight,
      frameWidth: this.props.vertical ? frameHeight : '100%',
      slideCount: _react2['default'].Children.count(this.props.children),
      slideWidth: slideWidth
    }, function () {
      self.setLeft();
      self.setExternalData();
    });
  },

  setDimensions: function setDimensions(props) {
    props = props || this.props;

    var self = this,
        slideWidth,
        slidesToScroll,
        firstSlide,
        frame,
        frameWidth,
        frameHeight,
        slideHeight;

    slidesToScroll = props.slidesToScroll;
    frame = this.refs.frame;
    firstSlide = frame.childNodes[0].childNodes[0];
    if (firstSlide) {
      firstSlide.style.height = 'auto';
      slideHeight = this.props.vertical ? firstSlide.offsetHeight * props.slidesToShow : firstSlide.offsetHeight;
    } else {
      slideHeight = 100;
    }

    if (typeof props.slideWidth !== 'number') {
      slideWidth = parseInt(props.slideWidth);
    } else {
      if (props.vertical) {
        slideWidth = slideHeight / props.slidesToShow * props.slideWidth;
      } else {
        slideWidth = frame.offsetWidth / props.slidesToShow * props.slideWidth;
      }
    }

    if (!props.vertical) {
      slideWidth -= props.cellSpacing * ((100 - 100 / props.slidesToShow) / 100);
    }

    frameHeight = slideHeight + props.cellSpacing * (props.slidesToShow - 1);
    frameWidth = props.vertical ? frameHeight : frame.offsetWidth;

    if (props.slidesToScroll === 'auto') {
      slidesToScroll = Math.floor(frameWidth / (slideWidth + props.cellSpacing));
    }

    this.setState({
      slideHeight: slideHeight,
      frameWidth: frameWidth,
      slideWidth: slideWidth,
      slidesToScroll: slidesToScroll,
      left: props.vertical ? 0 : this.getTargetLeft(),
      top: props.vertical ? this.getTargetLeft() : 0
    }, function () {
      self.setLeft();
    });
  },

  setLeft: function setLeft() {
    this.setState({
      left: this.props.vertical ? 0 : this.getTargetLeft(),
      top: this.props.vertical ? this.getTargetLeft() : 0
    });
  },

  // Data

  setExternalData: function setExternalData() {
    if (this.props.data) {
      this.props.data();
    }
  },

  // Styles

  getListStyles: function getListStyles() {
    var listWidth = this.state.slideWidth * _react2['default'].Children.count(this.props.children);
    var spacingOffset = this.props.cellSpacing * _react2['default'].Children.count(this.props.children);
    var transform = 'translate3d(' + this.getTweeningValue('left') + 'px, ' + this.getTweeningValue('top') + 'px, 0)';
    return {
      transform: transform,
      WebkitTransform: transform,
      msTransform: 'translate(' + this.getTweeningValue('left') + 'px, ' + this.getTweeningValue('top') + 'px)',
      position: 'relative',
      display: 'block',
      margin: this.props.vertical ? this.props.cellSpacing / 2 * -1 + 'px 0px' : '0px ' + this.props.cellSpacing / 2 * -1 + 'px',
      padding: 0,
      height: this.props.vertical ? listWidth + spacingOffset : this.state.slideHeight,
      width: this.props.vertical ? 'auto' : listWidth + spacingOffset,
      cursor: this.state.dragging === true ? 'pointer' : 'inherit',
      boxSizing: 'border-box',
      MozBoxSizing: 'border-box'
    };
  },

  getFrameStyles: function getFrameStyles() {
    return {
      position: 'relative',
      display: 'block',
      overflow: this.props.frameOverflow,
      height: this.props.vertical ? this.state.frameWidth || 'initial' : 'auto',
      margin: this.props.framePadding,
      padding: 0,
      transform: 'translate3d(0, 0, 0)',
      WebkitTransform: 'translate3d(0, 0, 0)',
      msTransform: 'translate(0, 0)',
      boxSizing: 'border-box',
      MozBoxSizing: 'border-box'
    };
  },

  getSlideStyles: function getSlideStyles(index, positionValue) {
    var targetPosition = this.getSlideTargetPosition(index, positionValue);
    return {
      position: 'absolute',
      left: this.props.vertical ? 0 : targetPosition,
      top: this.props.vertical ? targetPosition : 0,
      display: this.props.vertical ? 'block' : 'inline-block',
      listStyleType: 'none',
      verticalAlign: 'top',
      width: this.props.vertical ? '100%' : this.state.slideWidth,
      height: 'auto',
      boxSizing: 'border-box',
      MozBoxSizing: 'border-box',
      marginLeft: this.props.vertical ? 'auto' : this.props.cellSpacing / 2,
      marginRight: this.props.vertical ? 'auto' : this.props.cellSpacing / 2,
      marginTop: this.props.vertical ? this.props.cellSpacing / 2 : 'auto',
      marginBottom: this.props.vertical ? this.props.cellSpacing / 2 : 'auto'
    };
  },

  getSlideTargetPosition: function getSlideTargetPosition(index, positionValue) {
    var slidesToShow = this.state.frameWidth / this.state.slideWidth;
    var targetPosition = (this.state.slideWidth + this.props.cellSpacing) * index;
    var end = (this.state.slideWidth + this.props.cellSpacing) * slidesToShow * -1;

    if (this.props.wrapAround) {
      var slidesBefore = Math.ceil(positionValue / this.state.slideWidth);
      if (this.state.slideCount - slidesBefore <= index) {
        return (this.state.slideWidth + this.props.cellSpacing) * (this.state.slideCount - index) * -1;
      }

      var slidesAfter = Math.ceil((Math.abs(positionValue) - Math.abs(end)) / this.state.slideWidth);

      if (this.state.slideWidth !== 1) {
        slidesAfter = Math.ceil((Math.abs(positionValue) - this.state.slideWidth) / this.state.slideWidth);
      }

      if (index <= slidesAfter - 1) {
        return (this.state.slideWidth + this.props.cellSpacing) * (this.state.slideCount + index);
      }
    }

    return targetPosition;
  },

  getSliderStyles: function getSliderStyles() {
    return {
      position: 'relative',
      display: 'block',
      width: this.props.width,
      height: 'auto',
      boxSizing: 'border-box',
      MozBoxSizing: 'border-box',
      visibility: this.state.slideWidth ? 'visible' : 'hidden'
    };
  },

  getStyleTagStyles: function getStyleTagStyles() {
    return '.slider-slide > img {width: 100%; display: block;}';
  },

  getDecoratorStyles: function getDecoratorStyles(position) {
    switch (position) {
      case 'TopLeft':
        {
          return {
            position: 'absolute',
            top: 0,
            left: 0
          };
        }
      case 'TopCenter':
        {
          return {
            position: 'absolute',
            top: 0,
            left: '50%',
            transform: 'translateX(-50%)',
            WebkitTransform: 'translateX(-50%)',
            msTransform: 'translateX(-50%)'
          };
        }
      case 'TopRight':
        {
          return {
            position: 'absolute',
            top: 0,
            right: 0
          };
        }
      case 'CenterLeft':
        {
          return {
            position: 'absolute',
            top: '50%',
            left: 0,
            transform: 'translateY(-50%)',
            WebkitTransform: 'translateY(-50%)',
            msTransform: 'translateY(-50%)'
          };
        }
      case 'CenterCenter':
        {
          return {
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%,-50%)',
            WebkitTransform: 'translate(-50%, -50%)',
            msTransform: 'translate(-50%, -50%)'
          };
        }
      case 'CenterRight':
        {
          return {
            position: 'absolute',
            top: '50%',
            right: 0,
            transform: 'translateY(-50%)',
            WebkitTransform: 'translateY(-50%)',
            msTransform: 'translateY(-50%)'
          };
        }
      case 'BottomLeft':
        {
          return {
            position: 'absolute',
            bottom: 0,
            left: 0
          };
        }
      case 'BottomCenter':
        {
          return {
            position: 'absolute',
            bottom: 0,
            width: '100%',
            textAlign: 'center'
          };
        }
      case 'BottomRight':
        {
          return {
            position: 'absolute',
            bottom: 0,
            right: 0
          };
        }
      default:
        {
          return {
            position: 'absolute',
            top: 0,
            left: 0
          };
        }
    }
  }

});

Carousel.ControllerMixin = {
  getInitialState: function getInitialState() {
    return {
      carousels: {}
    };
  },
  setCarouselData: function setCarouselData(carousel) {
    var data = this.state.carousels;
    data[carousel] = this.refs[carousel];
    this.setState({
      carousels: data
    });
  }
};

exports['default'] = Carousel;
module.exports = exports['default'];

/***/ }),
/* 396 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _createReactClass = __webpack_require__(23);

var _createReactClass2 = _interopRequireDefault(_createReactClass);

var DefaultDecorators = [{
  component: (0, _createReactClass2['default'])({
    render: function render() {
      return _react2['default'].createElement(
        'button',
        {
          style: this.getButtonStyles(this.props.currentSlide === 0 && !this.props.wrapAround),
          onClick: this.handleClick },
        'PREV'
      );
    },
    handleClick: function handleClick(e) {
      e.preventDefault();
      this.props.previousSlide();
    },
    getButtonStyles: function getButtonStyles(disabled) {
      return {
        border: 0,
        background: 'rgba(0,0,0,0.4)',
        color: 'white',
        padding: 10,
        outline: 0,
        opacity: disabled ? 0.3 : 1,
        cursor: 'pointer'
      };
    }
  }),
  position: 'CenterLeft'
}, {
  component: (0, _createReactClass2['default'])({
    render: function render() {
      return _react2['default'].createElement(
        'button',
        {
          style: this.getButtonStyles(this.props.currentSlide + this.props.slidesToScroll >= this.props.slideCount && !this.props.wrapAround),
          onClick: this.handleClick },
        'NEXT'
      );
    },
    handleClick: function handleClick(e) {
      e.preventDefault();
      this.props.nextSlide();
    },
    getButtonStyles: function getButtonStyles(disabled) {
      return {
        border: 0,
        background: 'rgba(0,0,0,0.4)',
        color: 'white',
        padding: 10,
        outline: 0,
        opacity: disabled ? 0.3 : 1,
        cursor: 'pointer'
      };
    }
  }),
  position: 'CenterRight'
}, {
  component: (0, _createReactClass2['default'])({
    render: function render() {
      var self = this;
      var indexes = this.getIndexes(self.props.slideCount, self.props.slidesToScroll);
      return _react2['default'].createElement(
        'ul',
        { style: self.getListStyles() },
        indexes.map(function (index) {
          return _react2['default'].createElement(
            'li',
            { style: self.getListItemStyles(), key: index },
            _react2['default'].createElement(
              'button',
              {
                style: self.getButtonStyles(self.props.currentSlide === index),
                onClick: self.props.goToSlide.bind(null, index) },
              '•'
            )
          );
        })
      );
    },
    getIndexes: function getIndexes(count, inc) {
      var arr = [];
      for (var i = 0; i < count; i += inc) {
        arr.push(i);
      }
      return arr;
    },
    getListStyles: function getListStyles() {
      return {
        position: 'relative',
        margin: 0,
        top: -10,
        padding: 0
      };
    },
    getListItemStyles: function getListItemStyles() {
      return {
        listStyleType: 'none',
        display: 'inline-block'
      };
    },
    getButtonStyles: function getButtonStyles(active) {
      return {
        border: 0,
        background: 'transparent',
        color: 'black',
        cursor: 'pointer',
        padding: 10,
        outline: 0,
        fontSize: 24,
        opacity: active ? 1 : 0.5
      };
    }
  }),
  position: 'BottomCenter'
}];

exports['default'] = DefaultDecorators;
module.exports = exports['default'];

/***/ }),
/* 397 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports['default'] = {
    getDefaultProps: function getDefaultProps() {
        return {
            prefixCls: 'rmc-multi-picker',
            pickerPrefixCls: 'rmc-picker',
            onValueChange: function onValueChange() {},

            disabled: false
        };
    },
    getValue: function getValue() {
        var _props = this.props,
            children = _props.children,
            selectedValue = _props.selectedValue;

        if (selectedValue && selectedValue.length) {
            return selectedValue;
        } else {
            if (!children) {
                return [];
            }
            return children.map(function (c) {
                var cc = c.props.children;
                return cc && cc[0] && cc[0].value;
            });
        }
    },
    onValueChange: function onValueChange(i, v) {
        var value = this.getValue().concat();
        value[i] = v;
        this.props.onValueChange(value, i);
    }
};
module.exports = exports['default'];

/***/ }),
/* 398 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _defineProperty2 = __webpack_require__(9);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _classCallCheck2 = __webpack_require__(1);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(4);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(2);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactMixin = __webpack_require__(62);

var _reactMixin2 = _interopRequireDefault(_reactMixin);

var _classnames = __webpack_require__(10);

var _classnames2 = _interopRequireDefault(_classnames);

var _zscroller = __webpack_require__(132);

var _zscroller2 = _interopRequireDefault(_zscroller);

var _PickerMixin = __webpack_require__(399);

var _PickerMixin2 = _interopRequireDefault(_PickerMixin);

var _isChildrenEqual = __webpack_require__(401);

var _isChildrenEqual2 = _interopRequireDefault(_isChildrenEqual);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var Picker = function (_React$Component) {
    (0, _inherits3['default'])(Picker, _React$Component);

    function Picker(props) {
        (0, _classCallCheck3['default'])(this, Picker);

        var _this = (0, _possibleConstructorReturn3['default'])(this, (Picker.__proto__ || Object.getPrototypeOf(Picker)).call(this, props));

        _this.scrollingComplete = function () {
            var _this$zscroller$scrol = _this.zscroller.scroller.getValues(),
                top = _this$zscroller$scrol.top;

            if (top >= 0) {
                _this.doScrollingComplete(top);
            }
        };
        var selectedValueState = void 0;
        var selectedValue = props.selectedValue,
            defaultSelectedValue = props.defaultSelectedValue,
            children = props.children;

        if (selectedValue !== undefined) {
            selectedValueState = selectedValue;
        } else if (defaultSelectedValue !== undefined) {
            selectedValueState = defaultSelectedValue;
        } else if (children && children.length) {
            selectedValueState = children[0].value;
        }
        _this.state = {
            selectedValue: selectedValueState
        };
        return _this;
    }

    (0, _createClass3['default'])(Picker, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            // https://github.com/react-component/m-picker/issues/18
            this.itemHeight = this.refs.indicator.getBoundingClientRect().height;
            // compact
            this.refs.content.style.padding = this.itemHeight * 3 + 'px 0';
            this.zscroller = new _zscroller2['default'](this.refs.content, {
                scrollingX: false,
                snapping: true,
                locking: false,
                penetrationDeceleration: .1,
                minVelocityToKeepDecelerating: 0.5,
                scrollingComplete: this.scrollingComplete
            });
            this.zscroller.setDisabled(this.props.disabled);
            this.zscroller.scroller.setSnapSize(0, this.itemHeight);
            this.select(this.state.selectedValue);
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            if ('selectedValue' in nextProps) {
                this.setState({
                    selectedValue: nextProps.selectedValue
                });
            }
            this.zscroller.setDisabled(nextProps.disabled);
        }
    }, {
        key: 'shouldComponentUpdate',
        value: function shouldComponentUpdate(nextProps, nextState) {
            return this.state.selectedValue !== nextState.selectedValue || !(0, _isChildrenEqual2['default'])(this.props.children, nextProps.children, this.props.pure);
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate() {
            this.zscroller.reflow();
            this.select(this.state.selectedValue);
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            this.zscroller.destroy();
        }
    }, {
        key: 'scrollTo',
        value: function scrollTo(top) {
            this.zscroller.scroller.scrollTo(0, top);
        }
    }, {
        key: 'fireValueChange',
        value: function fireValueChange(selectedValue) {
            if (selectedValue !== this.state.selectedValue) {
                if (!('selectedValue' in this.props)) {
                    this.setState({
                        selectedValue: selectedValue
                    });
                }
                if (this.props.onValueChange) {
                    this.props.onValueChange(selectedValue);
                }
            }
        }
    }, {
        key: 'getChildMember',
        value: function getChildMember(child, m) {
            return child[m];
        }
    }, {
        key: 'getValue',
        value: function getValue() {
            return this.props.selectedValue || this.props.children && this.props.children[0] && this.props.children[0].value;
        }
    }, {
        key: 'toChildrenArray',
        value: function toChildrenArray(children) {
            return children;
        }
    }, {
        key: 'render',
        value: function render() {
            var _pickerCls;

            var _props = this.props,
                children = _props.children,
                prefixCls = _props.prefixCls,
                className = _props.className,
                itemStyle = _props.itemStyle,
                indicatorStyle = _props.indicatorStyle;
            var selectedValue = this.state.selectedValue;

            var itemClassName = prefixCls + '-item';
            var selectedItemClassName = itemClassName + ' ' + prefixCls + '-item-selected';
            var items = children.map(function (item) {
                return _react2['default'].createElement(
                    'div',
                    { style: itemStyle, className: selectedValue === item.value ? selectedItemClassName : itemClassName, key: item.value },
                    item.label
                );
            });
            var pickerCls = (_pickerCls = {}, (0, _defineProperty3['default'])(_pickerCls, className, !!className), (0, _defineProperty3['default'])(_pickerCls, prefixCls, true), _pickerCls);
            return _react2['default'].createElement(
                'div',
                { className: (0, _classnames2['default'])(pickerCls) },
                _react2['default'].createElement('div', { className: prefixCls + '-mask' }),
                _react2['default'].createElement('div', { className: prefixCls + '-indicator', ref: 'indicator', style: indicatorStyle }),
                _react2['default'].createElement(
                    'div',
                    { className: prefixCls + '-content', ref: 'content' },
                    items
                )
            );
        }
    }]);
    return Picker;
}(_react2['default'].Component);

Picker.defaultProps = {
    prefixCls: 'rmc-picker',
    pure: true,
    onValueChange: function onValueChange() {}
};
_reactMixin2['default'].onClass(Picker, _PickerMixin2['default']);
exports['default'] = Picker;
module.exports = exports['default'];

/***/ }),
/* 399 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
/* tslint:disable:no-console */
exports['default'] = {
    select: function select(value) {
        var children = this.toChildrenArray(this.props.children);
        for (var i = 0, len = children.length; i < len; i++) {
            if (this.getChildMember(children[i], 'value') === value) {
                this.selectByIndex(i);
                return;
            }
        }
        this.selectByIndex(0);
    },
    selectByIndex: function selectByIndex(index) {
        if (index < 0 || index >= this.toChildrenArray(this.props.children).length || !this.itemHeight) {
            return;
        }
        this.scrollTo(index * this.itemHeight);
    },
    doScrollingComplete: function doScrollingComplete(top) {
        var index = top / this.itemHeight;
        var floor = Math.floor(index);
        if (index - floor > 0.5) {
            index = floor + 1;
        } else {
            index = floor;
        }
        var children = this.toChildrenArray(this.props.children);
        index = Math.min(index, children.length - 1);
        var child = children[index];
        if (child) {
            this.fireValueChange(this.getChildMember(child, 'value'));
        } else if (console.warn) {
            console.warn('child not found', children, index);
        }
    }
};
module.exports = exports['default'];

/***/ }),
/* 400 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _defineProperty2 = __webpack_require__(9);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function noop() {}
exports['default'] = {
    getDefaultProps: function getDefaultProps() {
        return {
            onVisibleChange: noop,
            okText: 'Ok',
            pickerValueProp: 'selectedValue',
            pickerValueChangeProp: 'onValueChange',
            dismissText: 'Dismiss',
            title: '',
            onOk: noop,
            onDismiss: noop
        };
    },
    getInitialState: function getInitialState() {
        return {
            pickerValue: 'value' in this.props ? this.props.value : null,
            visible: this.props.visible || false
        };
    },
    componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
        if ('value' in nextProps) {
            this.setState({
                pickerValue: nextProps.value
            });
        }
        if ('visible' in nextProps) {
            this.setVisibleState(nextProps.visible);
        }
    },
    onPickerChange: function onPickerChange(pickerValue) {
        if (this.state.pickerValue !== pickerValue) {
            this.setState({
                pickerValue: pickerValue
            });
            var _props = this.props,
                picker = _props.picker,
                pickerValueChangeProp = _props.pickerValueChangeProp;

            if (picker && picker.props[pickerValueChangeProp]) {
                picker.props[pickerValueChangeProp](pickerValue);
            }
        }
    },
    saveRef: function saveRef(picker) {
        this.picker = picker;
    },
    setVisibleState: function setVisibleState(visible) {
        this.setState({
            visible: visible
        });
        if (!visible) {
            this.setState({
                pickerValue: null
            });
        }
    },
    fireVisibleChange: function fireVisibleChange(visible) {
        if (this.state.visible !== visible) {
            if (!('visible' in this.props)) {
                this.setVisibleState(visible);
            }
            this.props.onVisibleChange(visible);
        }
    },
    getRender: function getRender() {
        var props = this.props;
        var children = props.children;
        if (!children) {
            return this.getModal();
        }
        var _props2 = this.props,
            WrapComponent = _props2.WrapComponent,
            disabled = _props2.disabled;

        var child = children;
        var newChildProps = {};
        if (!disabled) {
            newChildProps[props.triggerType] = this.onTriggerClick.bind(this);
        }
        return _react2['default'].createElement(
            WrapComponent,
            { style: props.wrapStyle },
            _react2['default'].cloneElement(child, newChildProps),
            this.getModal()
        );
    },
    onTriggerClick: function onTriggerClick(e) {
        var child = this.props.children;
        var childProps = child.props || {};
        if (childProps[this.props.triggerType]) {
            childProps[this.props.triggerType](e);
        }
        this.fireVisibleChange(!this.state.visible);
    },
    onOk: function onOk() {
        this.props.onOk(this.picker && this.picker.getValue());
        this.fireVisibleChange(false);
    },
    getContent: function getContent() {
        if (this.props.picker) {
            var _React$cloneElement;

            var pickerValue = this.state.pickerValue;

            if (pickerValue === null) {
                pickerValue = this.props.value;
            }
            return _react2['default'].cloneElement(this.props.picker, (_React$cloneElement = {}, (0, _defineProperty3['default'])(_React$cloneElement, this.props.pickerValueProp, pickerValue), (0, _defineProperty3['default'])(_React$cloneElement, this.props.pickerValueChangeProp, this.onPickerChange.bind(this)), (0, _defineProperty3['default'])(_React$cloneElement, 'ref', this.saveRef.bind(this)), _React$cloneElement));
        } else {
            return this.props.content;
        }
    },
    onDismiss: function onDismiss() {
        this.props.onDismiss();
        this.fireVisibleChange(false);
    },
    hide: function hide() {
        this.fireVisibleChange(false);
    }
};
module.exports = exports['default'];

/***/ }),
/* 401 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.isEmptyArray = isEmptyArray;
exports["default"] = isChildrenEqual;
function isEmptyArray(a) {
    return !a || !a.length;
}
function isChildrenEqual(c1, c2, pure) {
    if (isEmptyArray(c1) && isEmptyArray(c2)) {
        return true;
    }
    if (pure) {
        return c1 === c2;
    }
    if (c1.length !== c2.length) {
        return false;
    }
    var len = c1.length;
    for (var i = 0; i < len; i++) {
        if (c1[i].value !== c2[i].value || c1[i].label !== c2[i].label) {
            return false;
        }
    }
    return true;
}

/***/ }),
/* 402 */
/***/ (function(module, exports) {

function select(element) {
    var selectedText;

    if (element.nodeName === 'SELECT') {
        element.focus();

        selectedText = element.value;
    }
    else if (element.nodeName === 'INPUT' || element.nodeName === 'TEXTAREA') {
        var isReadOnly = element.hasAttribute('readonly');

        if (!isReadOnly) {
            element.setAttribute('readonly', '');
        }

        element.select();
        element.setSelectionRange(0, element.value.length);

        if (!isReadOnly) {
            element.removeAttribute('readonly');
        }

        selectedText = element.value;
    }
    else {
        if (element.hasAttribute('contenteditable')) {
            element.focus();
        }

        var selection = window.getSelection();
        var range = document.createRange();

        range.selectNodeContents(element);
        selection.removeAllRanges();
        selection.addRange(range);

        selectedText = selection.toString();
    }

    return selectedText;
}

module.exports = select;


/***/ }),
/* 403 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var fetchKeys = __webpack_require__(358);

module.exports = function shallowEqual(objA, objB, compare, compareContext) {

    var ret = compare ? compare.call(compareContext, objA, objB) : void 0;

    if (ret !== void 0) {
        return !!ret;
    }

    if (objA === objB) {
        return true;
    }

    if (typeof objA !== 'object' || objA === null || typeof objB !== 'object' || objB === null) {
        return false;
    }

    var keysA = fetchKeys(objA);
    var keysB = fetchKeys(objB);

    var len = keysA.length;
    if (len !== keysB.length) {
        return false;
    }

    compareContext = compareContext || null;

    // Test for A's keys different from B.
    var bHasOwnProperty = Object.prototype.hasOwnProperty.bind(objB);
    for (var i = 0; i < len; i++) {
        var key = keysA[i];
        if (!bHasOwnProperty(key)) {
            return false;
        }
        var valueA = objA[key];
        var valueB = objB[key];

        var _ret = compare ? compare.call(compareContext, valueA, valueB, key) : void 0;
        if (_ret === false || _ret === void 0 && valueA !== valueB) {
            return false;
        }
    }

    return true;
};

/***/ }),
/* 404 */
/***/ (function(module, exports) {

function objToStr(x){ return Object.prototype.toString.call(x); };

function returner(x) { return x; }

function wrapIfFunction(thing){
    return typeof thing !== "function" ? thing
    : function(){
        return thing.apply(this, arguments);
    };
}

function setNonEnumerable(target, key, value){
    if (key in target){
        target[key] = value;
    }
    else {
        Object.defineProperty(target, key, {
            value: value,
            writable: true,
            configurable: true
        });
    }
}

function defaultNonFunctionProperty(left, right, key){
    if (left !== undefined && right !== undefined) {
        var getTypeName = function(obj){
            if (obj && obj.constructor && obj.constructor.name) {
                return obj.constructor.name;
            }
            else {
                return objToStr(obj).slice(8, -1);
            }
        };
        throw new TypeError('Cannot mixin key ' + key + ' because it is provided by multiple sources, '
                + 'and the types are ' + getTypeName(left) + ' and ' + getTypeName(right));
    }
    return left === undefined ? right : left;
};

function assertObject(obj, obj2){
    var type = objToStr(obj);
    if (type !== '[object Object]') {
        var displayType = obj.constructor ? obj.constructor.name : 'Unknown';
        var displayType2 = obj2.constructor ? obj2.constructor.name : 'Unknown';
        throw new Error('cannot merge returned value of type ' + displayType + ' with an ' + displayType2);
    }
};


var mixins = module.exports = function makeMixinFunction(rules, _opts){
    var opts = _opts || {};

    if (!opts.unknownFunction) {
        opts.unknownFunction = mixins.ONCE;
    }

    if (!opts.nonFunctionProperty) {
        opts.nonFunctionProperty = defaultNonFunctionProperty;
    }

    return function applyMixin(source, mixin){
        Object.keys(mixin).forEach(function(key){
            var left = source[key], right = mixin[key], rule = rules[key];

            // this is just a weird case where the key was defined, but there's no value
            // behave like the key wasn't defined
            if (left === undefined && right === undefined) return;

            // do we have a rule for this key?
            if (rule) {
                // may throw here
                var fn = rule(left, right, key);
                setNonEnumerable(source, key, wrapIfFunction(fn));
                return;
            }

            var leftIsFn = typeof left === "function";
            var rightIsFn = typeof right === "function";

            // check to see if they're some combination of functions or undefined
            // we already know there's no rule, so use the unknown function behavior
            if (leftIsFn && right === undefined
             || rightIsFn && left === undefined
             || leftIsFn && rightIsFn) {
                // may throw, the default is ONCE so if both are functions
                // the default is to throw
                setNonEnumerable(source, key, wrapIfFunction(opts.unknownFunction(left, right, key)));
                return;
            }

            // we have no rule for them, one may be a function but one or both aren't
            // our default is MANY_MERGED_LOOSE which will merge objects, concat arrays
            // and throw if there's a type mismatch or both are primitives (how do you merge 3, and "foo"?)
            source[key] = opts.nonFunctionProperty(left, right, key);
        });
    };
};

mixins._mergeObjects = function(obj1, obj2) {
    if (Array.isArray(obj1) && Array.isArray(obj2)) {
        return obj1.concat(obj2);
    }

    assertObject(obj1, obj2);
    assertObject(obj2, obj1);

    var result = {};
    Object.keys(obj1).forEach(function(k){
        if (Object.prototype.hasOwnProperty.call(obj2, k)) {
            throw new Error('cannot merge returns because both have the ' + JSON.stringify(k) + ' key');
        }
        result[k] = obj1[k];
    });

    Object.keys(obj2).forEach(function(k){
        // we can skip the conflict check because all conflicts would already be found
        result[k] = obj2[k];
    });
    return result;
};

// define our built-in mixin types
mixins.ONCE = function(left, right, key){
    if (left && right) {
        throw new TypeError('Cannot mixin ' + key + ' because it has a unique constraint.');
    }
    return left || right;
};

mixins.MANY = function(left, right, key){
    return function(){
        if (right) right.apply(this, arguments);
        return left ? left.apply(this, arguments) : undefined;
    };
};

mixins.MANY_MERGED_LOOSE = function(left, right, key) {
    if (left && right) {
        return mixins._mergeObjects(left, right);
    }
    return left || right;
};

mixins.MANY_MERGED = function(left, right, key){
    return function(){
        var res1 = right && right.apply(this, arguments);
        var res2 = left && left.apply(this, arguments);
        if (res1 && res2) {
            return mixins._mergeObjects(res1, res2)
        }
        return res2 || res1;
    };
};

mixins.REDUCE_LEFT = function(_left, _right, key){
    var left = _left || returner;
    var right = _right || returner;
    return function(){
        return right.call(this, left.apply(this, arguments));
    };
};

mixins.REDUCE_RIGHT = function(_left, _right, key){
    var left = _left || returner;
    var right = _right || returner;
    return function(){
        return left.call(this, right.apply(this, arguments));
    };
};



/***/ }),
/* 405 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = function (str) {
	return encodeURIComponent(str).replace(/[!'()*]/g, function (c) {
		return '%' + c.charCodeAt(0).toString(16).toUpperCase();
	});
};


/***/ }),
/* 406 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_svg_baker_runtime_browser_symbol__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_svg_baker_runtime_browser_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_svg_baker_runtime_browser_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_svg_sprite_loader_runtime_browser_sprite_build__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_svg_sprite_loader_runtime_browser_sprite_build___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_svg_sprite_loader_runtime_browser_sprite_build__);


var symbol = new __WEBPACK_IMPORTED_MODULE_0_svg_baker_runtime_browser_symbol___default.a({
  "id": "check-circle-o",
  "use": "check-circle-o-usage",
  "viewBox": "0 0 48 48",
  "content": "<symbol viewBox=\"0 0 48 48\" id=\"check-circle-o\"><g fill-rule=\"evenodd\"><path d=\"M24 48c13.255 0 24-10.745 24-24S37.255 0 24 0 0 10.745 0 24s10.745 24 24 24zm0-3c11.598 0 21-9.402 21-21S35.598 3 24 3 3 12.402 3 24s9.402 21 21 21z\" /><path d=\"M12.2 23.2L10 25.3l10 9.9L37.2 15 35 13 19.8 30.8z\" /></g></symbol>"
});
var result = __WEBPACK_IMPORTED_MODULE_1_svg_sprite_loader_runtime_browser_sprite_build___default.a.add(symbol);
/* harmony default export */ __webpack_exports__["default"] = (symbol);

/***/ }),
/* 407 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_svg_baker_runtime_browser_symbol__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_svg_baker_runtime_browser_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_svg_baker_runtime_browser_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_svg_sprite_loader_runtime_browser_sprite_build__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_svg_sprite_loader_runtime_browser_sprite_build___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_svg_sprite_loader_runtime_browser_sprite_build__);


var symbol = new __WEBPACK_IMPORTED_MODULE_0_svg_baker_runtime_browser_symbol___default.a({
  "id": "check-circle",
  "use": "check-circle-usage",
  "viewBox": "0 0 48 48",
  "content": "<symbol viewBox=\"0 0 48 48\" id=\"check-circle\"><path d=\"M24 48c13.255 0 24-10.745 24-24S37.255 0 24 0 0 10.745 0 24s10.745 24 24 24zM13.1 23.2l-2.2 2.1 10 9.9L38.1 15l-2.2-2-15.2 17.8-7.6-7.6z\" fill-rule=\"evenodd\" /></symbol>"
});
var result = __WEBPACK_IMPORTED_MODULE_1_svg_sprite_loader_runtime_browser_sprite_build___default.a.add(symbol);
/* harmony default export */ __webpack_exports__["default"] = (symbol);

/***/ }),
/* 408 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_svg_baker_runtime_browser_symbol__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_svg_baker_runtime_browser_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_svg_baker_runtime_browser_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_svg_sprite_loader_runtime_browser_sprite_build__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_svg_sprite_loader_runtime_browser_sprite_build___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_svg_sprite_loader_runtime_browser_sprite_build__);


var symbol = new __WEBPACK_IMPORTED_MODULE_0_svg_baker_runtime_browser_symbol___default.a({
  "id": "check",
  "use": "check-usage",
  "viewBox": "0 0 44 44",
  "content": "<symbol viewBox=\"0 0 44 44\" id=\"check\"><title>Operation Icons Copy 6</title><path d=\"M34.538 8L38 11.518 17.808 32 8 22.033l3.462-3.518 6.346 6.45z\" fill-rule=\"evenodd\" /></symbol>"
});
var result = __WEBPACK_IMPORTED_MODULE_1_svg_sprite_loader_runtime_browser_sprite_build___default.a.add(symbol);
/* harmony default export */ __webpack_exports__["default"] = (symbol);

/***/ }),
/* 409 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_svg_baker_runtime_browser_symbol__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_svg_baker_runtime_browser_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_svg_baker_runtime_browser_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_svg_sprite_loader_runtime_browser_sprite_build__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_svg_sprite_loader_runtime_browser_sprite_build___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_svg_sprite_loader_runtime_browser_sprite_build__);


var symbol = new __WEBPACK_IMPORTED_MODULE_0_svg_baker_runtime_browser_symbol___default.a({
  "id": "cross-circle-o",
  "use": "cross-circle-o-usage",
  "viewBox": "0 0 48 48",
  "content": "<symbol viewBox=\"0 0 48 48\" id=\"cross-circle-o\"><title>step-48-错误-实心</title><path d=\"M24 48c13.255 0 24-10.745 24-24S37.255 0 24 0 0 10.745 0 24s10.745 24 24 24zm.353-25.77l-7.593-7.593c-.797-.799-1.538-.822-2.263-.207-.724.614-.56 1.617-.124 2.067l7.852 7.847-7.721 7.723c-.726.728-.558 1.646-.065 2.177.494.532 1.554.683 2.312-.174l7.587-7.584 7.644 7.623c.796.799 1.608.725 2.211.146.604-.579.72-1.442-.075-2.24l-7.657-7.669 7.544-7.521c.811-.697.9-1.76.297-2.34-.92-.885-1.849-.338-2.264.078l-7.685 7.667z\" fill-rule=\"evenodd\" /></symbol>"
});
var result = __WEBPACK_IMPORTED_MODULE_1_svg_sprite_loader_runtime_browser_sprite_build___default.a.add(symbol);
/* harmony default export */ __webpack_exports__["default"] = (symbol);

/***/ }),
/* 410 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_svg_baker_runtime_browser_symbol__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_svg_baker_runtime_browser_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_svg_baker_runtime_browser_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_svg_sprite_loader_runtime_browser_sprite_build__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_svg_sprite_loader_runtime_browser_sprite_build___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_svg_sprite_loader_runtime_browser_sprite_build__);


var symbol = new __WEBPACK_IMPORTED_MODULE_0_svg_baker_runtime_browser_symbol___default.a({
  "id": "cross-circle",
  "use": "cross-circle-usage",
  "viewBox": "0 0 48 48",
  "content": "<symbol viewBox=\"0 0 48 48\" id=\"cross-circle\"><g fill-rule=\"evenodd\"><path d=\"M24 48c13.255 0 24-10.745 24-24S37.255 0 24 0 0 10.745 0 24s10.745 24 24 24zm0-3c11.598 0 21-9.402 21-21S35.598 3 24 3 3 12.402 3 24s9.402 21 21 21z\" /><path d=\"M24.34 22.219l-7.775-7.774a1.499 1.499 0 1 0-2.121 2.121l7.774 7.774-7.774 7.775a1.499 1.499 0 1 0 2.12 2.12l7.775-7.773 7.775 7.774a1.499 1.499 0 1 0 2.121-2.121L26.46 24.34l7.774-7.774a1.499 1.499 0 1 0-2.121-2.121l-7.775 7.774z\" /></g></symbol>"
});
var result = __WEBPACK_IMPORTED_MODULE_1_svg_sprite_loader_runtime_browser_sprite_build___default.a.add(symbol);
/* harmony default export */ __webpack_exports__["default"] = (symbol);

/***/ }),
/* 411 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_svg_baker_runtime_browser_symbol__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_svg_baker_runtime_browser_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_svg_baker_runtime_browser_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_svg_sprite_loader_runtime_browser_sprite_build__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_svg_sprite_loader_runtime_browser_sprite_build___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_svg_sprite_loader_runtime_browser_sprite_build__);


var symbol = new __WEBPACK_IMPORTED_MODULE_0_svg_baker_runtime_browser_symbol___default.a({
  "id": "cross",
  "use": "cross-usage",
  "viewBox": "0 0 44 44",
  "content": "<symbol viewBox=\"0 0 44 44\" id=\"cross\"><path d=\"M24.008 21.852l8.969-8.968L31.093 11l-8.969 8.968L13.156 11l-1.884 1.884 8.968 8.968-9.24 9.24 1.884 1.885 9.24-9.24 9.24 9.24 1.885-1.884-9.24-9.24z\" fill-rule=\"evenodd\" /></symbol>"
});
var result = __WEBPACK_IMPORTED_MODULE_1_svg_sprite_loader_runtime_browser_sprite_build___default.a.add(symbol);
/* harmony default export */ __webpack_exports__["default"] = (symbol);

/***/ }),
/* 412 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_svg_baker_runtime_browser_symbol__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_svg_baker_runtime_browser_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_svg_baker_runtime_browser_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_svg_sprite_loader_runtime_browser_sprite_build__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_svg_sprite_loader_runtime_browser_sprite_build___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_svg_sprite_loader_runtime_browser_sprite_build__);


var symbol = new __WEBPACK_IMPORTED_MODULE_0_svg_baker_runtime_browser_symbol___default.a({
  "id": "down",
  "use": "down-usage",
  "viewBox": "0 0 44 44",
  "content": "<symbol viewBox=\"0 0 44 44\" id=\"down\"><title>Operation Icons Copy 4</title><path d=\"M22.355 28.237l-11.483-10.9c-.607-.576-1.714-.396-2.48.41l.674-.71c-.763.802-.73 2.071-.282 2.496l11.37 10.793-.04.039 2.088 2.196 1.098-1.043 12.308-11.682c.447-.425.48-1.694-.282-2.496l.674.71c-.766-.806-1.873-.986-2.48-.41L22.355 28.237z\" fill-rule=\"evenodd\" /></symbol>"
});
var result = __WEBPACK_IMPORTED_MODULE_1_svg_sprite_loader_runtime_browser_sprite_build___default.a.add(symbol);
/* harmony default export */ __webpack_exports__["default"] = (symbol);

/***/ }),
/* 413 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_svg_baker_runtime_browser_symbol__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_svg_baker_runtime_browser_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_svg_baker_runtime_browser_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_svg_sprite_loader_runtime_browser_sprite_build__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_svg_sprite_loader_runtime_browser_sprite_build___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_svg_sprite_loader_runtime_browser_sprite_build__);


var symbol = new __WEBPACK_IMPORTED_MODULE_0_svg_baker_runtime_browser_symbol___default.a({
  "id": "ellipsis-circle",
  "use": "ellipsis-circle-usage",
  "viewBox": "0 0 44 44",
  "content": "<symbol viewBox=\"0 0 44 44\" id=\"ellipsis-circle\"><title>ellipsis-circle-cp</title><g fill-rule=\"evenodd\"><path d=\"M22.13.109C10.049.109.255 9.903.255 21.984s9.794 21.875 21.875 21.875 21.875-9.794 21.875-21.875S34.211.109 22.13.109zm0 40.7c-10.396 0-18.825-8.429-18.825-18.825 0-10.396 8.429-18.825 18.825-18.825 10.396 0 18.825 8.429 18.825 18.825 0 10.396-8.429 18.825-18.825 18.825z\" /><circle cx=\"21.888\" cy=\"22.701\" r=\"2.445\" /><circle cx=\"12.23\" cy=\"22.701\" r=\"2.445\" /><circle cx=\"31.546\" cy=\"22.701\" r=\"2.445\" /></g></symbol>"
});
var result = __WEBPACK_IMPORTED_MODULE_1_svg_sprite_loader_runtime_browser_sprite_build___default.a.add(symbol);
/* harmony default export */ __webpack_exports__["default"] = (symbol);

/***/ }),
/* 414 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_svg_baker_runtime_browser_symbol__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_svg_baker_runtime_browser_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_svg_baker_runtime_browser_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_svg_sprite_loader_runtime_browser_sprite_build__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_svg_sprite_loader_runtime_browser_sprite_build___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_svg_sprite_loader_runtime_browser_sprite_build__);


var symbol = new __WEBPACK_IMPORTED_MODULE_0_svg_baker_runtime_browser_symbol___default.a({
  "id": "ellipsis",
  "use": "ellipsis-usage",
  "viewBox": "0 0 44 44",
  "content": "<symbol viewBox=\"0 0 44 44\" id=\"ellipsis\"><circle cx=\"21.888\" cy=\"22\" r=\"4.045\" /><circle cx=\"5.913\" cy=\"22\" r=\"4.045\" /><circle cx=\"37.863\" cy=\"22\" r=\"4.045\" /></symbol>"
});
var result = __WEBPACK_IMPORTED_MODULE_1_svg_sprite_loader_runtime_browser_sprite_build___default.a.add(symbol);
/* harmony default export */ __webpack_exports__["default"] = (symbol);

/***/ }),
/* 415 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_svg_baker_runtime_browser_symbol__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_svg_baker_runtime_browser_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_svg_baker_runtime_browser_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_svg_sprite_loader_runtime_browser_sprite_build__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_svg_sprite_loader_runtime_browser_sprite_build___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_svg_sprite_loader_runtime_browser_sprite_build__);


var symbol = new __WEBPACK_IMPORTED_MODULE_0_svg_baker_runtime_browser_symbol___default.a({
  "id": "exclamation-circle",
  "use": "exclamation-circle-usage",
  "viewBox": "0 0 64 64",
  "content": "<symbol viewBox=\"0 0 64 64\" id=\"exclamation-circle\"><title>Share Icons Copy 3</title><path d=\"M59.58 40.889L41.193 9.11C39.135 5.382 35.723 3 31.387 3c-3.11 0-6.521 2.382-8.58 6.111L4.42 40.89c-2.788 4.635-3.126 8.81-1.225 12.22C5.015 56.208 7.572 58 13 58h36.773c5.428 0 9.21-1.792 11.031-4.889 1.9-3.41 1.564-7.584-1.225-12.222zm-2.452 11c-.635 1.695-3.802 2.444-7.354 2.444H13c-3.591 0-5.493-.75-6.129-2.444-1.712-2.41-1.375-5.262 0-8.556l18.386-31.777c2.116-3.168 4.394-4.89 6.13-4.89 2.96 0 5.238 1.722 7.354 4.89l18.386 31.777c1.374 3.294 1.713 6.146 0 8.556zm-25.74-33c-.405 0-1.227.836-1.227 2.444v15.89c0 1.608.822 2.444 1.226 2.444 1.628 0 2.452-.836 2.452-2.445V21.333c0-1.608-.824-2.444-2.452-2.444zm0 23.222c-.405 0-1.227.788-1.227 1.222v2.445c0 .434.822 1.222 1.226 1.222 1.628 0 2.452-.788 2.452-1.222v-2.445c0-.434-.824-1.222-2.452-1.222z\" fill-rule=\"evenodd\" /></symbol>"
});
var result = __WEBPACK_IMPORTED_MODULE_1_svg_sprite_loader_runtime_browser_sprite_build___default.a.add(symbol);
/* harmony default export */ __webpack_exports__["default"] = (symbol);

/***/ }),
/* 416 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_svg_baker_runtime_browser_symbol__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_svg_baker_runtime_browser_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_svg_baker_runtime_browser_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_svg_sprite_loader_runtime_browser_sprite_build__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_svg_sprite_loader_runtime_browser_sprite_build___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_svg_sprite_loader_runtime_browser_sprite_build__);


var symbol = new __WEBPACK_IMPORTED_MODULE_0_svg_baker_runtime_browser_symbol___default.a({
  "id": "info-circle",
  "use": "info-circle-usage",
  "viewBox": "0 0 44 44",
  "content": "<symbol viewBox=\"0 0 44 44\" id=\"info-circle\"><circle cx=\"13.828\" cy=\"19.63\" r=\"1.938\" /><circle cx=\"21.767\" cy=\"19.63\" r=\"1.938\" /><circle cx=\"29.767\" cy=\"19.63\" r=\"1.938\" /><path d=\"M22.102 4.161c-9.918 0-17.958 7.146-17.958 15.961 0 4.935 2.522 9.345 6.481 12.273v5.667l.038.012a2.627 2.627 0 1 0 4.501 1.455l.002.001 5.026-3.539c.628.059 1.265.093 1.911.093 9.918 0 17.958-7.146 17.958-15.961-.001-8.816-8.041-15.962-17.959-15.962zm-.04 29.901c-.902 0-1.781-.081-2.642-.207l-5.882 4.234c-.024.025-.055.04-.083.06l-.008.006a.511.511 0 0 1-.284.095.525.525 0 0 1-.525-.525l.005-6.375c-3.91-2.516-6.456-6.544-6.456-11.1 0-7.628 7.107-13.812 15.875-13.812s15.875 6.184 15.875 13.812-7.107 13.812-15.875 13.812z\" /></symbol>"
});
var result = __WEBPACK_IMPORTED_MODULE_1_svg_sprite_loader_runtime_browser_sprite_build___default.a.add(symbol);
/* harmony default export */ __webpack_exports__["default"] = (symbol);

/***/ }),
/* 417 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_svg_baker_runtime_browser_symbol__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_svg_baker_runtime_browser_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_svg_baker_runtime_browser_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_svg_sprite_loader_runtime_browser_sprite_build__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_svg_sprite_loader_runtime_browser_sprite_build___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_svg_sprite_loader_runtime_browser_sprite_build__);


var symbol = new __WEBPACK_IMPORTED_MODULE_0_svg_baker_runtime_browser_symbol___default.a({
  "id": "koubei-o",
  "use": "koubei-o-usage",
  "viewBox": "0 0 43 38",
  "content": "<symbol viewBox=\"0 0 43 38\" id=\"koubei-o\"><path d=\"M37.75.227H5.25C2.125.227.66 2.652.66 4.542v8.03c0 9.346 5.751 17.213 13.64 20.35a.732.732 0 0 1 .325.246c.145.207.128.409.128.409l.001 2.033s.241.743.667 1.167c.254.254.899.545 1.201.577.929.099 2.059.226 4.716-.125a25.097 25.097 0 0 0 13.111-5.918c6.157-5.345 8.549-12.549 8.549-18.738V4.625c0-1.89-1.206-4.398-5.248-4.398zm3.287 13.045c0 5.58-2.277 11.784-7.87 16.603-3.366 2.896-7.511 4.831-11.917 5.417-2.413.317-3.347.186-4.191.096-.275-.029-.496-.076-.392-1.013.104-1.958-.194-2.156-.325-2.342-.076-.1-.261-.287-.378-.332C8.797 28.874 2.577 21.698 2.577 13.272V5.203c0-1.703.335-3.06 3.173-3.06h31.292c3.671 0 3.995 1.174 3.995 2.878v8.251z\" /><path d=\"M32.531 19.444c-.336 0-.62.171-.809.42l-.01-.007-.002-.001a11.61 11.61 0 0 1-9.682 5.196c-6.419 0-11.623-5.204-11.623-11.623h-.038a1.027 1.027 0 0 0-1.023-.995c-.556 0-1.003.443-1.023.995h-.007l.001.029-.001.007.002.012c.026 7.552 6.154 13.667 13.713 13.667 4.757 0 8.945-2.423 11.406-6.101 0 0 .127-.368.127-.57a1.031 1.031 0 0 0-1.031-1.029z\" /><ellipse cx=\"35.456\" cy=\"12.506\" rx=\"1.95\" ry=\"1.918\" /></symbol>"
});
var result = __WEBPACK_IMPORTED_MODULE_1_svg_sprite_loader_runtime_browser_sprite_build___default.a.add(symbol);
/* harmony default export */ __webpack_exports__["default"] = (symbol);

/***/ }),
/* 418 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_svg_baker_runtime_browser_symbol__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_svg_baker_runtime_browser_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_svg_baker_runtime_browser_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_svg_sprite_loader_runtime_browser_sprite_build__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_svg_sprite_loader_runtime_browser_sprite_build___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_svg_sprite_loader_runtime_browser_sprite_build__);


var symbol = new __WEBPACK_IMPORTED_MODULE_0_svg_baker_runtime_browser_symbol___default.a({
  "id": "koubei",
  "use": "koubei-usage",
  "viewBox": "0 0 43 38",
  "content": "<symbol viewBox=\"0 0 43 38\" id=\"koubei\"><title>口碑</title><g fill-rule=\"evenodd\"><path d=\"M4.921 1.227c-1.814 0-3.284 1.452-3.284 3.243v8.459c0 8.86 6.073 16.517 13.589 19.49a.701.701 0 0 1 .31.233c.138.196.122.388.122.388v2.148s-.012.463.393.865c.242.241.506.338.794.368.885.094 1.962.214 4.493-.119a23.972 23.972 0 0 0 12.492-5.61c5.866-5.067 8.145-11.896 8.145-17.763V4.563c0-1.792-1.47-3.336-3.285-3.336H4.92z\" /><path d=\"M33.506 12.506c0-1.06.873-1.918 1.95-1.918 1.078 0 1.95.858 1.95 1.918 0 1.059-.872 1.918-1.95 1.918-1.077 0-1.95-.86-1.95-1.918z\" fill=\"#FFF\" /><path d=\"M9.127 13.465c0 6.087 5.564 12.847 12.626 12.784 3.336-.03 8.006-1.522 10.778-5.784\" stroke=\"#FFF\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" /></g></symbol>"
});
var result = __WEBPACK_IMPORTED_MODULE_1_svg_sprite_loader_runtime_browser_sprite_build___default.a.add(symbol);
/* harmony default export */ __webpack_exports__["default"] = (symbol);

/***/ }),
/* 419 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_svg_baker_runtime_browser_symbol__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_svg_baker_runtime_browser_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_svg_baker_runtime_browser_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_svg_sprite_loader_runtime_browser_sprite_build__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_svg_sprite_loader_runtime_browser_sprite_build___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_svg_sprite_loader_runtime_browser_sprite_build__);


var symbol = new __WEBPACK_IMPORTED_MODULE_0_svg_baker_runtime_browser_symbol___default.a({
  "id": "left",
  "use": "left-usage",
  "viewBox": "0 0 44 44",
  "content": "<symbol viewBox=\"0 0 44 44\" id=\"left\"><title>Operation Icons Copy 4</title><defs><path id=\"left_a\" d=\"M-129-845h24v24h-24z\" /></defs><clipPath id=\"left_b\"><use xlink:href=\"#left_a\" overflow=\"visible\" /></clipPath><g clip-path=\"url(#left_b)\"><defs><path id=\"left_c\" d=\"M-903-949H947V996H-903z\" /></defs><clipPath id=\"left_d\"><use xlink:href=\"#left_c\" overflow=\"visible\" /></clipPath></g><path d=\"M16.247 21.399L28.48 9.166l2.121 2.121-10.118 10.119 10.118 10.118-2.121 2.121-12.233-12.233.007-.006z\" /></symbol>"
});
var result = __WEBPACK_IMPORTED_MODULE_1_svg_sprite_loader_runtime_browser_sprite_build___default.a.add(symbol);
/* harmony default export */ __webpack_exports__["default"] = (symbol);

/***/ }),
/* 420 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_svg_baker_runtime_browser_symbol__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_svg_baker_runtime_browser_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_svg_baker_runtime_browser_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_svg_sprite_loader_runtime_browser_sprite_build__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_svg_sprite_loader_runtime_browser_sprite_build___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_svg_sprite_loader_runtime_browser_sprite_build__);


var symbol = new __WEBPACK_IMPORTED_MODULE_0_svg_baker_runtime_browser_symbol___default.a({
  "id": "loading",
  "use": "loading-usage",
  "viewBox": "0 -2 59.75 60.25",
  "content": "<symbol viewBox=\"0 -2 59.75 60.25\" id=\"loading\"><path fill=\"#ccc\" d=\"M29.691-.527c-15.648 0-28.333 12.685-28.333 28.333s12.685 28.333 28.333 28.333c15.648 0 28.333-12.685 28.333-28.333S45.339-.527 29.691-.527zm.184 53.75c-14.037 0-25.417-11.379-25.417-25.417S15.838 2.39 29.875 2.39s25.417 11.379 25.417 25.417-11.38 25.416-25.417 25.416z\" /><path fill=\"none\" stroke=\"#108ee9\" stroke-width=\"3\" stroke-linecap=\"round\" stroke-miterlimit=\"10\" d=\"M56.587 29.766c.369-7.438-1.658-14.699-6.393-19.552\" /></symbol>"
});
var result = __WEBPACK_IMPORTED_MODULE_1_svg_sprite_loader_runtime_browser_sprite_build___default.a.add(symbol);
/* harmony default export */ __webpack_exports__["default"] = (symbol);

/***/ }),
/* 421 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_svg_baker_runtime_browser_symbol__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_svg_baker_runtime_browser_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_svg_baker_runtime_browser_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_svg_sprite_loader_runtime_browser_sprite_build__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_svg_sprite_loader_runtime_browser_sprite_build___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_svg_sprite_loader_runtime_browser_sprite_build__);


var symbol = new __WEBPACK_IMPORTED_MODULE_0_svg_baker_runtime_browser_symbol___default.a({
  "id": "question-circle",
  "use": "question-circle-usage",
  "viewBox": "0 0 44 44",
  "content": "<symbol viewBox=\"0 0 44 44\" id=\"question-circle\"><title>Operation Icons Copy 12</title><g fill-rule=\"evenodd\"><path d=\"M21.186 3C10.333 3 1.827 11.506 1.827 22.358 1.827 32.494 10.333 41 21.186 41c10.133 0 18.641-8.506 18.641-18.642C39.827 11.506 31.32 3 21.186 3m15.641 19c0 8.823-7.179 16-16 16-8.823 0-16-7.177-16-16s7.177-16 16-16c8.821 0 16 7.177 16 16z\" /><path d=\"M22.827 31.5a1.5 1.5 0 1 1-2.999.001 1.5 1.5 0 0 1 3-.001M26.827 16.02c0 .957-.203 1.822-.61 2.593-.427.792-1.117 1.612-2.073 2.457-.867.734-1.453 1.435-1.754 2.096-.302.7-.453 1.693-.453 2.979a.828.828 0 0 1-.823.855.828.828 0 0 1-.584-.22.877.877 0 0 1-.24-.635c0-1.305.168-2.38.506-3.227.336-.883.93-1.682 1.779-2.4 1.01-.883 1.71-1.692 2.1-2.428.337-.645.504-1.38.504-2.209-.018-.936-.3-1.7-.85-2.289-.654-.717-1.62-1.075-2.896-1.075-1.506 0-2.596.535-3.269 1.6-.46.754-.689 1.645-.689 2.677a.92.92 0 0 1-.266.66.747.747 0 0 1-.558.25.73.73 0 0 1-.585-.194c-.16-.164-.239-.393-.239-.69 0-1.819.584-3.272 1.754-4.357C18.644 11.486 19.927 11 21.433 11h.293c1.452 0 2.638.414 3.561 1.241 1.027.902 1.54 2.162 1.54 3.78z\" /></g></symbol>"
});
var result = __WEBPACK_IMPORTED_MODULE_1_svg_sprite_loader_runtime_browser_sprite_build___default.a.add(symbol);
/* harmony default export */ __webpack_exports__["default"] = (symbol);

/***/ }),
/* 422 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_svg_baker_runtime_browser_symbol__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_svg_baker_runtime_browser_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_svg_baker_runtime_browser_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_svg_sprite_loader_runtime_browser_sprite_build__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_svg_sprite_loader_runtime_browser_sprite_build___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_svg_sprite_loader_runtime_browser_sprite_build__);


var symbol = new __WEBPACK_IMPORTED_MODULE_0_svg_baker_runtime_browser_symbol___default.a({
  "id": "right",
  "use": "right-usage",
  "viewBox": "0 0 44 44",
  "content": "<symbol viewBox=\"0 0 44 44\" id=\"right\"><title>Operation Icons Copy 4</title><defs><path id=\"right_a\" d=\"M-129-845h24v24h-24z\" /></defs><clipPath id=\"right_b\"><use xlink:href=\"#right_a\" overflow=\"visible\" /></clipPath><g clip-path=\"url(#right_b)\"><defs><path id=\"right_c\" d=\"M-903-949H947V996H-903z\" /></defs><clipPath id=\"right_d\"><use xlink:href=\"#right_c\" overflow=\"visible\" /></clipPath></g><path d=\"M30.601 21.399L18.368 9.166l-2.121 2.121 10.118 10.119-10.118 10.118 2.121 2.121 12.233-12.233-.006-.006z\" /></symbol>"
});
var result = __WEBPACK_IMPORTED_MODULE_1_svg_sprite_loader_runtime_browser_sprite_build___default.a.add(symbol);
/* harmony default export */ __webpack_exports__["default"] = (symbol);

/***/ }),
/* 423 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_svg_baker_runtime_browser_symbol__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_svg_baker_runtime_browser_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_svg_baker_runtime_browser_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_svg_sprite_loader_runtime_browser_sprite_build__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_svg_sprite_loader_runtime_browser_sprite_build___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_svg_sprite_loader_runtime_browser_sprite_build__);


var symbol = new __WEBPACK_IMPORTED_MODULE_0_svg_baker_runtime_browser_symbol___default.a({
  "id": "search",
  "use": "search-usage",
  "viewBox": "0 0 44 44",
  "content": "<symbol viewBox=\"0 0 44 44\" id=\"search\"><title>System Icons Copy 8</title><path d=\"M32.981 29.255l8.914 8.293L39.603 40l-8.859-8.242a15.952 15.952 0 0 1-10.754 4.147C11.16 35.905 4 28.763 4 19.952 4 11.142 11.16 4 19.99 4s15.99 7.142 15.99 15.952c0 3.472-1.112 6.685-2.999 9.303zm.05-9.21c0 7.123-5.701 12.918-12.88 12.918-7.177 0-13.016-5.795-13.016-12.918 0-7.12 5.839-12.917 13.017-12.917 7.178 0 12.879 5.797 12.879 12.917z\" fill-rule=\"evenodd\" /></symbol>"
});
var result = __WEBPACK_IMPORTED_MODULE_1_svg_sprite_loader_runtime_browser_sprite_build___default.a.add(symbol);
/* harmony default export */ __webpack_exports__["default"] = (symbol);

/***/ }),
/* 424 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_svg_baker_runtime_browser_symbol__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_svg_baker_runtime_browser_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_svg_baker_runtime_browser_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_svg_sprite_loader_runtime_browser_sprite_build__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_svg_sprite_loader_runtime_browser_sprite_build___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_svg_sprite_loader_runtime_browser_sprite_build__);


var symbol = new __WEBPACK_IMPORTED_MODULE_0_svg_baker_runtime_browser_symbol___default.a({
  "id": "up",
  "use": "up-usage",
  "viewBox": "0 0 44 44",
  "content": "<symbol viewBox=\"0 0 44 44\" id=\"up\"><title>Operation Icons Copy 4</title><title>background</title><path fill=\"none\" d=\"M-1-1h46v46H-1z\" /><g><title>Layer 1</title><defs><path id=\"up_a\" d=\"M-129-845h24v24h-24z\" /></defs><clipPath id=\"up_b\"><use xlink:href=\"#up_a\" /></clipPath><g clip-path=\"url(#up_b)\"><defs><path id=\"up_c\" d=\"M-903-949H947V996H-903z\" /></defs><clipPath id=\"up_d\"><use xlink:href=\"#up_c\" /></clipPath></g><path d=\"M23.417 14.229L11.184 26.462l2.121 2.12 10.12-10.117 10.117 10.118 2.121-2.121L23.43 14.229l-.006.006z\" /></g></symbol>"
});
var result = __WEBPACK_IMPORTED_MODULE_1_svg_sprite_loader_runtime_browser_sprite_build___default.a.add(symbol);
/* harmony default export */ __webpack_exports__["default"] = (symbol);

/***/ }),
/* 425 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_svg_baker_runtime_browser_symbol__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_svg_baker_runtime_browser_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_svg_baker_runtime_browser_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_svg_sprite_loader_runtime_browser_sprite_build__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_svg_sprite_loader_runtime_browser_sprite_build___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_svg_sprite_loader_runtime_browser_sprite_build__);


var symbol = new __WEBPACK_IMPORTED_MODULE_0_svg_baker_runtime_browser_symbol___default.a({
  "id": "trips",
  "use": "trips-usage",
  "viewBox": "0 0 38 33",
  "content": "<symbol viewBox=\"0 0 38 33\" id=\"trips\"><title>trips</title><g fill-rule=\"evenodd\"><path d=\"M17.838 28.8c-.564-.468-1.192-.983-1.836-1.496-4.244-3.385-5.294-3.67-6.006-3.67-.014 0-.027.005-.04.005-.015 0-.028-.005-.042-.005H3.562c-.734 0-.903-.203-.903-.928V10.085c0-.49.058-.8.66-.8h5.782c.693 0 1.758-.28 6.4-3.628.828-.597 1.637-1.197 2.336-1.723V28.8zM19.682.19c-.463-.22-1.014-.158-1.417.157-.02.016-1.983 1.552-4.152 3.125C10.34 6.21 9.243 6.664 9.02 6.737H3.676c-.027 0-.053.003-.08.004H1.183c-.608 0-1.1.486-1.1 1.085V25.14c0 .598.492 1.084 1.1 1.084h8.71c.22.08 1.257.55 4.605 3.24 1.947 1.562 3.694 3.088 3.712 3.103.25.22.568.333.89.333.186 0 .373-.038.55-.116.48-.213.79-.684.79-1.204V1.38c0-.506-.294-.968-.758-1.19z\" mask=\"url(#mask-2)\" /><path d=\"M31.42 16.475c0-3.363-1.854-6.297-4.606-7.876-.125-.066-.42-.192-.625-.192-.612 0-1.108.488-1.108 1.09 0 .404.22.764.55.952 2.128 1.19 3.565 3.442 3.565 6.025 0 2.627-1.486 4.913-3.677 6.087-.318.19-.53.54-.53.934 0 .602.496 1.09 1.107 1.09.26.002.568-.15.568-.15 2.835-1.556 4.754-4.538 4.754-7.96\" mask=\"url(#mask-4)\" /><g><path d=\"M30.14 3.057c-.205-.122-.41-.22-.658-.22-.608 0-1.1.485-1.1 1.084 0 .433.26.78.627.977 4.043 2.323 6.762 6.636 6.762 11.578 0 4.938-2.716 9.248-6.755 11.572-.354.19-.66.55-.66.993 0 .6.494 1.084 1.102 1.084.243 0 .438-.092.65-.213 4.692-2.695 7.848-7.7 7.848-13.435 0-5.723-3.142-10.718-7.817-13.418\" mask=\"url(#mask-6)\" /></g></g></symbol>"
});
var result = __WEBPACK_IMPORTED_MODULE_1_svg_sprite_loader_runtime_browser_sprite_build___default.a.add(symbol);
/* harmony default export */ __webpack_exports__["default"] = (symbol);

/***/ }),
/* 426 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_svg_baker_runtime_browser_symbol__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_svg_baker_runtime_browser_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_svg_baker_runtime_browser_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_svg_sprite_loader_runtime_browser_sprite_build__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_svg_sprite_loader_runtime_browser_sprite_build___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_svg_sprite_loader_runtime_browser_sprite_build__);


var symbol = new __WEBPACK_IMPORTED_MODULE_0_svg_baker_runtime_browser_symbol___default.a({
  "id": "dislike",
  "use": "dislike-usage",
  "viewBox": "0 0 72 72",
  "content": "<symbol viewBox=\"0 0 72 72\" id=\"dislike\"><title>哭脸</title><g fill=\"none\" fill-rule=\"evenodd\"><path d=\"M36 72c19.882 0 36-16.118 36-36S55.882 0 36 0 0 16.118 0 36s16.118 36 36 36zm0-2c18.778 0 34-15.222 34-34S54.778 2 36 2 2 17.222 2 36s15.222 34 34 34z\" fill=\"#FFF\" /><path fill=\"#FFF\" d=\"M47 22h2v6h-2zM23 22h2v6h-2z\" /><path d=\"M21 51s4.6-7 15-7 15 7 15 7\" stroke=\"#FFF\" stroke-width=\"2\" /></g></symbol>"
});
var result = __WEBPACK_IMPORTED_MODULE_1_svg_sprite_loader_runtime_browser_sprite_build___default.a.add(symbol);
/* harmony default export */ __webpack_exports__["default"] = (symbol);

/***/ }),
/* 427 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_svg_baker_runtime_browser_symbol__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_svg_baker_runtime_browser_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_svg_baker_runtime_browser_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_svg_sprite_loader_runtime_browser_sprite_build__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_svg_sprite_loader_runtime_browser_sprite_build___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_svg_sprite_loader_runtime_browser_sprite_build__);


var symbol = new __WEBPACK_IMPORTED_MODULE_0_svg_baker_runtime_browser_symbol___default.a({
  "id": "fail",
  "use": "fail-usage",
  "viewBox": "0 0 72 72",
  "content": "<symbol viewBox=\"0 0 72 72\" id=\"fail\"><title>失败</title><g fill=\"none\" fill-rule=\"evenodd\"><path d=\"M36 72c19.882 0 36-16.118 36-36S55.882 0 36 0 0 16.118 0 36s16.118 36 36 36zm0-2c18.778 0 34-15.222 34-34S54.778 2 36 2 2 17.222 2 36s15.222 34 34 34z\" fill=\"#FFF\" /><path d=\"M22 22l28.304 28.304M22 50.304L50.304 22\" stroke=\"#FFF\" stroke-width=\"2\" /></g></symbol>"
});
var result = __WEBPACK_IMPORTED_MODULE_1_svg_sprite_loader_runtime_browser_sprite_build___default.a.add(symbol);
/* harmony default export */ __webpack_exports__["default"] = (symbol);

/***/ }),
/* 428 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_svg_baker_runtime_browser_symbol__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_svg_baker_runtime_browser_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_svg_baker_runtime_browser_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_svg_sprite_loader_runtime_browser_sprite_build__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_svg_sprite_loader_runtime_browser_sprite_build___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_svg_sprite_loader_runtime_browser_sprite_build__);


var symbol = new __WEBPACK_IMPORTED_MODULE_0_svg_baker_runtime_browser_symbol___default.a({
  "id": "success",
  "use": "success-usage",
  "viewBox": "0 0 72 72",
  "content": "<symbol viewBox=\"0 0 72 72\" id=\"success\"><title>成功</title><g fill=\"none\" fill-rule=\"evenodd\"><path d=\"M36 72c19.882 0 36-16.118 36-36S55.882 0 36 0 0 16.118 0 36s16.118 36 36 36zm0-2c18.778 0 34-15.222 34-34S54.778 2 36 2 2 17.222 2 36s15.222 34 34 34z\" fill=\"#FFF\" /><path stroke=\"#FFF\" stroke-width=\"2\" d=\"M19 34.54l11.545 11.923L52.815 24\" /></g></symbol>"
});
var result = __WEBPACK_IMPORTED_MODULE_1_svg_sprite_loader_runtime_browser_sprite_build___default.a.add(symbol);
/* harmony default export */ __webpack_exports__["default"] = (symbol);

/***/ }),
/* 429 */,
/* 430 */,
/* 431 */,
/* 432 */,
/* 433 */,
/* 434 */,
/* 435 */,
/* 436 */,
/* 437 */,
/* 438 */,
/* 439 */,
/* 440 */,
/* 441 */,
/* 442 */,
/* 443 */,
/* 444 */,
/* 445 */,
/* 446 */,
/* 447 */,
/* 448 */,
/* 449 */,
/* 450 */,
/* 451 */,
/* 452 */,
/* 453 */
/***/ (function(module, exports) {

function E () {
  // Keep this empty so it's easier to inherit from
  // (via https://github.com/lipsmack from https://github.com/scottcorgan/tiny-emitter/issues/3)
}

E.prototype = {
  on: function (name, callback, ctx) {
    var e = this.e || (this.e = {});

    (e[name] || (e[name] = [])).push({
      fn: callback,
      ctx: ctx
    });

    return this;
  },

  once: function (name, callback, ctx) {
    var self = this;
    function listener () {
      self.off(name, listener);
      callback.apply(ctx, arguments);
    };

    listener._ = callback
    return this.on(name, listener, ctx);
  },

  emit: function (name) {
    var data = [].slice.call(arguments, 1);
    var evtArr = ((this.e || (this.e = {}))[name] || []).slice();
    var i = 0;
    var len = evtArr.length;

    for (i; i < len; i++) {
      evtArr[i].fn.apply(evtArr[i].ctx, data);
    }

    return this;
  },

  off: function (name, callback) {
    var e = this.e || (this.e = {});
    var evts = e[name];
    var liveEvents = [];

    if (evts && callback) {
      for (var i = 0, len = evts.length; i < len; i++) {
        if (evts[i].fn !== callback && evts[i].fn._ !== callback)
          liveEvents.push(evts[i]);
      }
    }

    // Remove event from queue to prevent memory leak
    // Suggested by https://github.com/lazd
    // Ref: https://github.com/scottcorgan/tiny-emitter/commit/c6ebfaa9bc973b33d110a84a307742b7cf94c953#commitcomment-5024910

    (liveEvents.length)
      ? e[name] = liveEvents
      : delete e[name];

    return this;
  }
};

module.exports = E;


/***/ }),
/* 454 */,
/* 455 */,
/* 456 */,
/* 457 */,
/* 458 */,
/* 459 */,
/* 460 */,
/* 461 */,
/* 462 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_raf__ = __webpack_require__(361);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_raf___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_raf__);
/*
 * Scroller
 * http://github.com/zynga/scroller
 *
 * Copyright 2011, Zynga Inc.
 * Licensed under the MIT License.
 * https://raw.github.com/zynga/scroller/master/MIT-LICENSE.txt
 *
 * Based on the work of: Unify Project (unify-project.org)
 * http://unify-project.org
 * Copyright 2011, Deutsche Telekom AG
 * License: MIT + Apache (V2)
 */

/**
 * Generic animation class with support for dropped frames both optional easing and duration.
 *
 * Optional duration is useful when the lifetime is defined by another condition than time
 * e.g. speed of an animating object, etc.
 *
 * Dropped frame logic allows to keep using the same updater logic independent from the actual
 * rendering. This eases a lot of cases where it might be pretty complex to break down a state
 * based on the pure time difference.
 */


var desiredFrames = 60;
var millisecondsPerSecond = 1000;
var running = {};
var counter = 1;
var win = typeof window !== 'undefined' ? window : undefined;

if (!win) {
  win = typeof global !== 'undefined' ? global : {};
}

var Animate = {
  /**
   * Stops the given animation.
   *
   * @param id {Integer} Unique animation ID
   * @return {Boolean} Whether the animation was stopped (aka, was running before)
   */
  stop: function stop(id) {
    var cleared = running[id] != null;
    if (cleared) {
      running[id] = null;
    }

    return cleared;
  },

  /**
   * Whether the given animation is still running.
   *
   * @param id {Integer} Unique animation ID
   * @return {Boolean} Whether the animation is still running
   */
  isRunning: function isRunning(id) {
    return running[id] != null;
  },

  /**
   * Start the animation.
   *
   * @param stepCallback {Function} Pointer to function which is executed on every step.
   *   Signature of the method should be `function(percent, now, virtual) { return continueWithAnimation; }`
   * @param verifyCallback {Function} Executed before every animation step.
   *   Signature of the method should be `function() { return continueWithAnimation; }`
   * @param completedCallback {Function}
   *   Signature of the method should be `function(droppedFrames, finishedAnimation) {}`
   * @param duration {Integer} Milliseconds to run the animation
   * @param easingMethod {Function} Pointer to easing function
   *   Signature of the method should be `function(percent) { return modifiedValue; }`
   * @return {Integer} Identifier of animation. Can be used to stop it any time.
   */
  start: function start(stepCallback, verifyCallback, completedCallback, duration, easingMethod) {
    var start = +new Date();
    var lastFrame = start;
    var percent = 0;
    var dropCounter = 0;
    var id = counter++;

    // Compacting running db automatically every few new animations
    if (id % 20 === 0) {
      var newRunning = {};
      for (var usedId in running) {
        newRunning[usedId] = true;
      }
      running = newRunning;
    }

    // This is the internal step method which is called every few milliseconds
    var step = function step(virtual) {
      // Normalize virtual value
      var render = virtual !== true;

      // Get current time
      var now = +new Date();

      // Verification is executed before next animation step
      if (!running[id] || verifyCallback && !verifyCallback(id)) {

        running[id] = null;
        completedCallback && completedCallback(desiredFrames - dropCounter / ((now - start) / millisecondsPerSecond), id, false);
        return;
      }

      // For the current rendering to apply let's update omitted steps in memory.
      // This is important to bring internal state variables up-to-date with progress in time.
      if (render) {

        var droppedFrames = Math.round((now - lastFrame) / (millisecondsPerSecond / desiredFrames)) - 1;
        for (var j = 0; j < Math.min(droppedFrames, 4); j++) {
          step(true);
          dropCounter++;
        }
      }

      // Compute percent value
      if (duration) {
        percent = (now - start) / duration;
        if (percent > 1) {
          percent = 1;
        }
      }

      // Execute step callback, then...
      var value = easingMethod ? easingMethod(percent) : percent;
      if ((stepCallback(value, now, render) === false || percent === 1) && render) {
        running[id] = null;
        completedCallback && completedCallback(desiredFrames - dropCounter / ((now - start) / millisecondsPerSecond), id, percent === 1 || duration == null);
      } else if (render) {
        lastFrame = now;
        __WEBPACK_IMPORTED_MODULE_0_raf___default()(step);
      }
    };

    // Mark as running
    running[id] = true;

    // Init first step
    __WEBPACK_IMPORTED_MODULE_0_raf___default()(step);

    // Return unique animation ID
    return id;
  }
};

/* harmony default export */ __webpack_exports__["a"] = (Animate);
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(43)))

/***/ }),
/* 463 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Animate__ = __webpack_require__(462);
/*
 * Scroller
 * http://github.com/zynga/scroller
 *
 * Copyright 2011, Zynga Inc.
 * Licensed under the MIT License.
 * https://raw.github.com/zynga/scroller/master/MIT-LICENSE.txt
 *
 * Based on the work of: Unify Project (unify-project.org)
 * http://unify-project.org
 * Copyright 2011, Deutsche Telekom AG
 * License: MIT + Apache (V2)
 */



var Scroller;

var NOOP = function NOOP() {};

/**
 * A pure logic 'component' for 'virtual' scrolling/zooming.
 */
Scroller = function Scroller(callback, options) {

  this.__callback = callback;

  this.options = {

    /** Enable scrolling on x-axis */
    scrollingX: true,

    /** Enable scrolling on y-axis */
    scrollingY: true,

    /** Enable animations for deceleration, snap back, zooming and scrolling */
    animating: true,

    /** duration for animations triggered by scrollTo/zoomTo */
    animationDuration: 250,

    /** Enable bouncing (content can be slowly moved outside and jumps back after releasing) */
    bouncing: true,

    /** Enable locking to the main axis if user moves only slightly on one of them at start */
    locking: true,

    /** Enable pagination mode (switching between full page content panes) */
    paging: false,

    /** Enable snapping of content to a configured pixel grid */
    snapping: false,

    /** Enable zooming of content via API, fingers and mouse wheel */
    zooming: false,

    /** Minimum zoom level */
    minZoom: 0.5,

    /** Maximum zoom level */
    maxZoom: 3,

    /** Multiply or decrease scrolling speed **/
    speedMultiplier: 1,

    /** Callback that is fired on the later of touch end or deceleration end,
     provided that another scrolling action has not begun. Used to know
     when to fade out a scrollbar. */
    scrollingComplete: NOOP,

    /** This configures the amount of change applied to deceleration when reaching boundaries  **/
    penetrationDeceleration: 0.03,

    /** This configures the amount of change applied to acceleration when reaching boundaries  **/
    penetrationAcceleration: 0.08

  };

  for (var key in options) {
    this.options[key] = options[key];
  }
};

// Easing Equations (c) 2003 Robert Penner, all rights reserved.
// Open source under the BSD License.

/**
 * @param pos {Number} position between 0 (start of effect) and 1 (end of effect)
 **/
var easeOutCubic = function easeOutCubic(pos) {
  return Math.pow(pos - 1, 3) + 1;
};

/**
 * @param pos {Number} position between 0 (start of effect) and 1 (end of effect)
 **/
var easeInOutCubic = function easeInOutCubic(pos) {
  if ((pos /= 0.5) < 1) {
    return 0.5 * Math.pow(pos, 3);
  }

  return 0.5 * (Math.pow(pos - 2, 3) + 2);
};

var members = {

  /*
   ---------------------------------------------------------------------------
   INTERNAL FIELDS :: STATUS
   ---------------------------------------------------------------------------
   */

  /** {Boolean} Whether only a single finger is used in touch handling */
  __isSingleTouch: false,

  /** {Boolean} Whether a touch event sequence is in progress */
  __isTracking: false,

  /** {Boolean} Whether a deceleration animation went to completion. */
  __didDecelerationComplete: false,

  /**
   * {Boolean} Whether a gesture zoom/rotate event is in progress. Activates when
   * a gesturestart event happens. This has higher priority than dragging.
   */
  __isGesturing: false,

  /**
   * {Boolean} Whether the user has moved by such a distance that we have enabled
   * dragging mode. Hint: It's only enabled after some pixels of movement to
   * not interrupt with clicks etc.
   */
  __isDragging: false,

  /**
   * {Boolean} Not touching and dragging anymore, and smoothly animating the
   * touch sequence using deceleration.
   */
  __isDecelerating: false,

  /**
   * {Boolean} Smoothly animating the currently configured change
   */
  __isAnimating: false,

  /*
   ---------------------------------------------------------------------------
   INTERNAL FIELDS :: DIMENSIONS
   ---------------------------------------------------------------------------
   */

  /** {Integer} Available outer left position (from document perspective) */
  __clientLeft: 0,

  /** {Integer} Available outer top position (from document perspective) */
  __clientTop: 0,

  /** {Integer} Available outer width */
  __clientWidth: 0,

  /** {Integer} Available outer height */
  __clientHeight: 0,

  /** {Integer} Outer width of content */
  __contentWidth: 0,

  /** {Integer} Outer height of content */
  __contentHeight: 0,

  /** {Integer} Snapping width for content */
  __snapWidth: 100,

  /** {Integer} Snapping height for content */
  __snapHeight: 100,

  /** {Integer} Height to assign to refresh area */
  __refreshHeight: null,

  /** {Boolean} Whether the refresh process is enabled when the event is released now */
  __refreshActive: false,

  /** {Function} Callback to execute on activation. This is for signalling the user about a refresh is about to happen when he release */
  __refreshActivate: null,

  /** {Function} Callback to execute on deactivation. This is for signalling the user about the refresh being cancelled */
  __refreshDeactivate: null,

  /** {Function} Callback to execute to start the actual refresh. Call {@link #refreshFinish} when done */
  __refreshStart: null,

  /** {Number} Zoom level */
  __zoomLevel: 1,

  /** {Number} Scroll position on x-axis */
  __scrollLeft: 0,

  /** {Number} Scroll position on y-axis */
  __scrollTop: 0,

  /** {Integer} Maximum allowed scroll position on x-axis */
  __maxScrollLeft: 0,

  /** {Integer} Maximum allowed scroll position on y-axis */
  __maxScrollTop: 0,

  /* {Number} Scheduled left position (final position when animating) */
  __scheduledLeft: 0,

  /* {Number} Scheduled top position (final position when animating) */
  __scheduledTop: 0,

  /* {Number} Scheduled zoom level (final scale when animating) */
  __scheduledZoom: 0,

  /*
   ---------------------------------------------------------------------------
   INTERNAL FIELDS :: LAST POSITIONS
   ---------------------------------------------------------------------------
   */

  /** {Number} Left position of finger at start */
  __lastTouchLeft: null,

  /** {Number} Top position of finger at start */
  __lastTouchTop: null,

  /** {Date} Timestamp of last move of finger. Used to limit tracking range for deceleration speed. */
  __lastTouchMove: null,

  /** {Array} List of positions, uses three indexes for each state: left, top, timestamp */
  __positions: null,

  /*
   ---------------------------------------------------------------------------
   INTERNAL FIELDS :: DECELERATION SUPPORT
   ---------------------------------------------------------------------------
   */

  /** {Integer} Minimum left scroll position during deceleration */
  __minDecelerationScrollLeft: null,

  /** {Integer} Minimum top scroll position during deceleration */
  __minDecelerationScrollTop: null,

  /** {Integer} Maximum left scroll position during deceleration */
  __maxDecelerationScrollLeft: null,

  /** {Integer} Maximum top scroll position during deceleration */
  __maxDecelerationScrollTop: null,

  /** {Number} Current factor to modify horizontal scroll position with on every step */
  __decelerationVelocityX: null,

  /** {Number} Current factor to modify vertical scroll position with on every step */
  __decelerationVelocityY: null,

  /*
   ---------------------------------------------------------------------------
   PUBLIC API
   ---------------------------------------------------------------------------
   */

  /**
   * Configures the dimensions of the client (outer) and content (inner) elements.
   * Requires the available space for the outer element and the outer size of the inner element.
   * All values which are falsy (null or zero etc.) are ignored and the old value is kept.
   *
   * @param clientWidth {Integer ? null} Inner width of outer element
   * @param clientHeight {Integer ? null} Inner height of outer element
   * @param contentWidth {Integer ? null} Outer width of inner element
   * @param contentHeight {Integer ? null} Outer height of inner element
   */
  setDimensions: function setDimensions(clientWidth, clientHeight, contentWidth, contentHeight) {

    var self = this;

    // Only update values which are defined
    if (clientWidth === +clientWidth) {
      self.__clientWidth = clientWidth;
    }

    if (clientHeight === +clientHeight) {
      self.__clientHeight = clientHeight;
    }

    if (contentWidth === +contentWidth) {
      self.__contentWidth = contentWidth;
    }

    if (contentHeight === +contentHeight) {
      self.__contentHeight = contentHeight;
    }

    // Refresh maximums
    self.__computeScrollMax();

    // Refresh scroll position
    self.scrollTo(self.__scrollLeft, self.__scrollTop, true);
  },

  /**
   * Sets the client coordinates in relation to the document.
   *
   * @param left {Integer ? 0} Left position of outer element
   * @param top {Integer ? 0} Top position of outer element
   */
  setPosition: function setPosition(left, top) {

    var self = this;

    self.__clientLeft = left || 0;
    self.__clientTop = top || 0;
  },

  /**
   * Configures the snapping (when snapping is active)
   *
   * @param width {Integer} Snapping width
   * @param height {Integer} Snapping height
   */
  setSnapSize: function setSnapSize(width, height) {

    var self = this;

    self.__snapWidth = width;
    self.__snapHeight = height;
  },

  /**
   * Activates pull-to-refresh. A special zone on the top of the list to start a list refresh whenever
   * the user event is released during visibility of this zone. This was introduced by some apps on iOS like
   * the official Twitter client.
   *
   * @param height {Integer} Height of pull-to-refresh zone on top of rendered list
   * @param activateCallback {Function} Callback to execute on activation. This is for signalling the user about a refresh is about to happen when he release.
   * @param deactivateCallback {Function} Callback to execute on deactivation. This is for signalling the user about the refresh being cancelled.
   * @param startCallback {Function} Callback to execute to start the real async refresh action. Call {@link #finishPullToRefresh} after finish of refresh.
   */
  activatePullToRefresh: function activatePullToRefresh(height, activateCallback, deactivateCallback, startCallback) {

    var self = this;

    self.__refreshHeight = height;
    self.__refreshActivate = activateCallback;
    self.__refreshDeactivate = deactivateCallback;
    self.__refreshStart = startCallback;
  },

  /**
   * Starts pull-to-refresh manually.
   */
  triggerPullToRefresh: function triggerPullToRefresh() {
    // Use publish instead of scrollTo to allow scrolling to out of boundary position
    // We don't need to normalize scrollLeft, zoomLevel, etc. here because we only y-scrolling when pull-to-refresh is enabled
    this.__publish(this.__scrollLeft, -this.__refreshHeight, this.__zoomLevel, true);

    if (this.__refreshStart) {
      this.__refreshStart();
    }
  },

  /**
   * Signalizes that pull-to-refresh is finished.
   */
  finishPullToRefresh: function finishPullToRefresh() {

    var self = this;

    self.__refreshActive = false;
    if (self.__refreshDeactivate) {
      self.__refreshDeactivate();
    }

    self.scrollTo(self.__scrollLeft, self.__scrollTop, true);
  },

  /**
   * Returns the scroll position and zooming values
   *
   * @return {Map} `left` and `top` scroll position and `zoom` level
   */
  getValues: function getValues() {

    var self = this;

    return {
      left: self.__scrollLeft,
      top: self.__scrollTop,
      zoom: self.__zoomLevel
    };
  },

  /**
   * Returns the maximum scroll values
   *
   * @return {Map} `left` and `top` maximum scroll values
   */
  getScrollMax: function getScrollMax() {

    var self = this;

    return {
      left: self.__maxScrollLeft,
      top: self.__maxScrollTop
    };
  },

  /**
   * Zooms to the given level. Supports optional animation. Zooms
   * the center when no coordinates are given.
   *
   * @param level {Number} Level to zoom to
   * @param animate {Boolean ? false} Whether to use animation
   * @param originLeft {Number ? null} Zoom in at given left coordinate
   * @param originTop {Number ? null} Zoom in at given top coordinate
   * @param callback {Function ? null} A callback that gets fired when the zoom is complete.
   */
  zoomTo: function zoomTo(level, animate, originLeft, originTop, callback) {

    var self = this;

    if (!self.options.zooming) {
      throw new Error("Zooming is not enabled!");
    }

    // Add callback if exists
    if (callback) {
      self.__zoomComplete = callback;
    }

    // Stop deceleration
    if (self.__isDecelerating) {
      __WEBPACK_IMPORTED_MODULE_0__Animate__["a" /* default */].stop(self.__isDecelerating);
      self.__isDecelerating = false;
    }

    var oldLevel = self.__zoomLevel;

    // Normalize input origin to center of viewport if not defined
    if (originLeft == null) {
      originLeft = self.__clientWidth / 2;
    }

    if (originTop == null) {
      originTop = self.__clientHeight / 2;
    }

    // Limit level according to configuration
    level = Math.max(Math.min(level, self.options.maxZoom), self.options.minZoom);

    // Recompute maximum values while temporary tweaking maximum scroll ranges
    self.__computeScrollMax(level);

    // Recompute left and top coordinates based on new zoom level
    var left = (originLeft + self.__scrollLeft) * level / oldLevel - originLeft;
    var top = (originTop + self.__scrollTop) * level / oldLevel - originTop;

    // Limit x-axis
    if (left > self.__maxScrollLeft) {
      left = self.__maxScrollLeft;
    } else if (left < 0) {
      left = 0;
    }

    // Limit y-axis
    if (top > self.__maxScrollTop) {
      top = self.__maxScrollTop;
    } else if (top < 0) {
      top = 0;
    }

    // Push values out
    self.__publish(left, top, level, animate);
  },

  /**
   * Zooms the content by the given factor.
   *
   * @param factor {Number} Zoom by given factor
   * @param animate {Boolean ? false} Whether to use animation
   * @param originLeft {Number ? 0} Zoom in at given left coordinate
   * @param originTop {Number ? 0} Zoom in at given top coordinate
   * @param callback {Function ? null} A callback that gets fired when the zoom is complete.
   */
  zoomBy: function zoomBy(factor, animate, originLeft, originTop, callback) {

    var self = this;

    self.zoomTo(self.__zoomLevel * factor, animate, originLeft, originTop, callback);
  },

  /**
   * Scrolls to the given position. Respect limitations and snapping automatically.
   *
   * @param left {Number?null} Horizontal scroll position, keeps current if value is <code>null</code>
   * @param top {Number?null} Vertical scroll position, keeps current if value is <code>null</code>
   * @param animate {Boolean?false} Whether the scrolling should happen using an animation
   * @param zoom {Number?null} Zoom level to go to
   */
  scrollTo: function scrollTo(left, top, animate, zoom, callback) {

    var self = this;

    // Stop deceleration
    if (self.__isDecelerating) {
      __WEBPACK_IMPORTED_MODULE_0__Animate__["a" /* default */].stop(self.__isDecelerating);
      self.__isDecelerating = false;
    }

    // Correct coordinates based on new zoom level
    if (zoom != null && zoom !== self.__zoomLevel) {

      if (!self.options.zooming) {
        throw new Error("Zooming is not enabled!");
      }

      left *= zoom;
      top *= zoom;

      // Recompute maximum values while temporary tweaking maximum scroll ranges
      self.__computeScrollMax(zoom);
    } else {

      // Keep zoom when not defined
      zoom = self.__zoomLevel;
    }

    if (!self.options.scrollingX) {

      left = self.__scrollLeft;
    } else {

      if (self.options.paging) {
        left = Math.round(left / self.__clientWidth) * self.__clientWidth;
      } else if (self.options.snapping) {
        left = Math.round(left / self.__snapWidth) * self.__snapWidth;
      }
    }

    if (!self.options.scrollingY) {

      top = self.__scrollTop;
    } else {

      if (self.options.paging) {
        top = Math.round(top / self.__clientHeight) * self.__clientHeight;
      } else if (self.options.snapping) {
        top = Math.round(top / self.__snapHeight) * self.__snapHeight;
      }
    }

    // Limit for allowed ranges
    left = Math.max(Math.min(self.__maxScrollLeft, left), 0);
    top = Math.max(Math.min(self.__maxScrollTop, top), 0);

    // Don't animate when no change detected, still call publish to make sure
    // that rendered position is really in-sync with internal data
    if (left === self.__scrollLeft && top === self.__scrollTop) {
      animate = false;
      if (callback) {
        callback();
      }
    }

    // Publish new values
    if (!self.__isTracking) {
      self.__publish(left, top, zoom, animate);
    }
  },

  /**
   * Scroll by the given offset
   *
   * @param left {Number ? 0} Scroll x-axis by given offset
   * @param top {Number ? 0} Scroll x-axis by given offset
   * @param animate {Boolean ? false} Whether to animate the given change
   */
  scrollBy: function scrollBy(left, top, animate) {

    var self = this;

    var startLeft = self.__isAnimating ? self.__scheduledLeft : self.__scrollLeft;
    var startTop = self.__isAnimating ? self.__scheduledTop : self.__scrollTop;

    self.scrollTo(startLeft + (left || 0), startTop + (top || 0), animate);
  },

  /*
   ---------------------------------------------------------------------------
   EVENT CALLBACKS
   ---------------------------------------------------------------------------
   */

  /**
   * Mouse wheel handler for zooming support
   */
  doMouseZoom: function doMouseZoom(wheelDelta, timeStamp, pageX, pageY) {

    var self = this;
    var change = wheelDelta > 0 ? 0.97 : 1.03;

    return self.zoomTo(self.__zoomLevel * change, false, pageX - self.__clientLeft, pageY - self.__clientTop);
  },

  /**
   * Touch start handler for scrolling support
   */
  doTouchStart: function doTouchStart(touches, timeStamp) {

    // Array-like check is enough here
    if (touches.length == null) {
      throw new Error("Invalid touch list: " + touches);
    }

    if (timeStamp instanceof Date) {
      timeStamp = timeStamp.valueOf();
    }
    if (typeof timeStamp !== "number") {
      throw new Error("Invalid timestamp value: " + timeStamp);
    }

    var self = this;

    // Reset interruptedAnimation flag
    self.__interruptedAnimation = true;

    // Stop deceleration
    if (self.__isDecelerating) {
      __WEBPACK_IMPORTED_MODULE_0__Animate__["a" /* default */].stop(self.__isDecelerating);
      self.__isDecelerating = false;
      self.__interruptedAnimation = true;
    }

    // Stop animation
    if (self.__isAnimating) {
      __WEBPACK_IMPORTED_MODULE_0__Animate__["a" /* default */].stop(self.__isAnimating);
      self.__isAnimating = false;
      self.__interruptedAnimation = true;
    }

    // Use center point when dealing with two fingers
    var currentTouchLeft, currentTouchTop;
    var isSingleTouch = touches.length === 1;
    if (isSingleTouch) {
      currentTouchLeft = touches[0].pageX;
      currentTouchTop = touches[0].pageY;
    } else {
      currentTouchLeft = Math.abs(touches[0].pageX + touches[1].pageX) / 2;
      currentTouchTop = Math.abs(touches[0].pageY + touches[1].pageY) / 2;
    }

    // Store initial positions
    self.__initialTouchLeft = currentTouchLeft;
    self.__initialTouchTop = currentTouchTop;

    // Store current zoom level
    self.__zoomLevelStart = self.__zoomLevel;

    // Store initial touch positions
    self.__lastTouchLeft = currentTouchLeft;
    self.__lastTouchTop = currentTouchTop;

    // Store initial move time stamp
    self.__lastTouchMove = timeStamp;

    // Reset initial scale
    self.__lastScale = 1;

    // Reset locking flags
    self.__enableScrollX = !isSingleTouch && self.options.scrollingX;
    self.__enableScrollY = !isSingleTouch && self.options.scrollingY;

    // Reset tracking flag
    self.__isTracking = true;

    // Reset deceleration complete flag
    self.__didDecelerationComplete = false;

    // Dragging starts directly with two fingers, otherwise lazy with an offset
    self.__isDragging = !isSingleTouch;

    // Some features are disabled in multi touch scenarios
    self.__isSingleTouch = isSingleTouch;

    // Clearing data structure
    self.__positions = [];
  },

  /**
   * Touch move handler for scrolling support
   */
  doTouchMove: function doTouchMove(touches, timeStamp, scale) {

    // Array-like check is enough here
    if (touches.length == null) {
      throw new Error("Invalid touch list: " + touches);
    }

    if (timeStamp instanceof Date) {
      timeStamp = timeStamp.valueOf();
    }
    if (typeof timeStamp !== "number") {
      throw new Error("Invalid timestamp value: " + timeStamp);
    }

    var self = this;

    // Ignore event when tracking is not enabled (event might be outside of element)
    if (!self.__isTracking) {
      return;
    }

    var currentTouchLeft, currentTouchTop;

    // Compute move based around of center of fingers
    if (touches.length === 2) {
      currentTouchLeft = Math.abs(touches[0].pageX + touches[1].pageX) / 2;
      currentTouchTop = Math.abs(touches[0].pageY + touches[1].pageY) / 2;
    } else {
      currentTouchLeft = touches[0].pageX;
      currentTouchTop = touches[0].pageY;
    }

    var positions = self.__positions;

    // Are we already is dragging mode?
    if (self.__isDragging) {

      // Compute move distance
      var moveX = currentTouchLeft - self.__lastTouchLeft;
      var moveY = currentTouchTop - self.__lastTouchTop;

      // Read previous scroll position and zooming
      var scrollLeft = self.__scrollLeft;
      var scrollTop = self.__scrollTop;
      var level = self.__zoomLevel;

      // Work with scaling
      if (scale != null && self.options.zooming) {

        var oldLevel = level;

        // Recompute level based on previous scale and new scale
        level = level / self.__lastScale * scale;

        // Limit level according to configuration
        level = Math.max(Math.min(level, self.options.maxZoom), self.options.minZoom);

        // Only do further compution when change happened
        if (oldLevel !== level) {

          // Compute relative event position to container
          var currentTouchLeftRel = currentTouchLeft - self.__clientLeft;
          var currentTouchTopRel = currentTouchTop - self.__clientTop;

          // Recompute left and top coordinates based on new zoom level
          scrollLeft = (currentTouchLeftRel + scrollLeft) * level / oldLevel - currentTouchLeftRel;
          scrollTop = (currentTouchTopRel + scrollTop) * level / oldLevel - currentTouchTopRel;

          // Recompute max scroll values
          self.__computeScrollMax(level);
        }
      }

      if (self.__enableScrollX) {

        scrollLeft -= moveX * this.options.speedMultiplier;
        var maxScrollLeft = self.__maxScrollLeft;

        if (scrollLeft > maxScrollLeft || scrollLeft < 0) {

          // Slow down on the edges
          if (self.options.bouncing) {

            scrollLeft += moveX / 2 * this.options.speedMultiplier;
          } else if (scrollLeft > maxScrollLeft) {

            scrollLeft = maxScrollLeft;
          } else {

            scrollLeft = 0;
          }
        }
      }

      // Compute new vertical scroll position
      if (self.__enableScrollY) {

        scrollTop -= moveY * this.options.speedMultiplier;
        var maxScrollTop = self.__maxScrollTop;

        if (scrollTop > maxScrollTop || scrollTop < 0) {

          // Slow down on the edges
          if (self.options.bouncing) {

            scrollTop += moveY / 2 * this.options.speedMultiplier;

            // Support pull-to-refresh (only when only y is scrollable)
            if (!self.__enableScrollX && self.__refreshHeight != null) {

              if (!self.__refreshActive && scrollTop <= -self.__refreshHeight) {

                self.__refreshActive = true;
                if (self.__refreshActivate) {
                  self.__refreshActivate();
                }
              } else if (self.__refreshActive && scrollTop > -self.__refreshHeight) {

                self.__refreshActive = false;
                if (self.__refreshDeactivate) {
                  self.__refreshDeactivate();
                }
              }
            }
          } else if (scrollTop > maxScrollTop) {

            scrollTop = maxScrollTop;
          } else {

            scrollTop = 0;
          }
        }
      }

      // Keep list from growing infinitely (holding min 10, max 20 measure points)
      if (positions.length > 60) {
        positions.splice(0, 30);
      }

      // Track scroll movement for decleration
      positions.push(scrollLeft, scrollTop, timeStamp);

      // Sync scroll position
      self.__publish(scrollLeft, scrollTop, level);

      // Otherwise figure out whether we are switching into dragging mode now.
    } else {

      var minimumTrackingForScroll = 3;
      var minimumTrackingForDrag = 5;

      var distanceX = Math.abs(currentTouchLeft - self.__initialTouchLeft);
      var distanceY = Math.abs(currentTouchTop - self.__initialTouchTop);

      self.__enableScrollX = self.options.scrollingX && distanceX >= minimumTrackingForScroll;
      self.__enableScrollY = self.options.scrollingY && distanceY >= minimumTrackingForScroll;

      var radian = void 0;

      if (self.options.locking && self.__enableScrollY) {
        radian = radian || Math.atan2(distanceY, distanceX);
        if (radian < Math.PI / 4) {
          self.__enableScrollY = false;
        }
      }

      if (self.options.locking && self.__enableScrollX) {
        radian = radian || Math.atan2(distanceY, distanceX);
        if (radian > Math.PI / 4) {
          self.__enableScrollX = false;
        }
      }

      positions.push(self.__scrollLeft, self.__scrollTop, timeStamp);

      self.__isDragging = (self.__enableScrollX || self.__enableScrollY) && (distanceX >= minimumTrackingForDrag || distanceY >= minimumTrackingForDrag);
      if (self.__isDragging) {
        self.__interruptedAnimation = false;
      }
    }

    // Update last touch positions and time stamp for next event
    self.__lastTouchLeft = currentTouchLeft;
    self.__lastTouchTop = currentTouchTop;
    self.__lastTouchMove = timeStamp;
    self.__lastScale = scale;
  },

  /**
   * Touch end handler for scrolling support
   */
  doTouchEnd: function doTouchEnd(timeStamp) {

    if (timeStamp instanceof Date) {
      timeStamp = timeStamp.valueOf();
    }
    if (typeof timeStamp !== "number") {
      throw new Error("Invalid timestamp value: " + timeStamp);
    }

    var self = this;

    // Ignore event when tracking is not enabled (no touchstart event on element)
    // This is required as this listener ('touchmove') sits on the document and not on the element itself.
    if (!self.__isTracking) {
      return;
    }

    // Not touching anymore (when two finger hit the screen there are two touch end events)
    self.__isTracking = false;

    // Be sure to reset the dragging flag now. Here we also detect whether
    // the finger has moved fast enough to switch into a deceleration animation.
    if (self.__isDragging) {

      // Reset dragging flag
      self.__isDragging = false;

      // Start deceleration
      // Verify that the last move detected was in some relevant time frame
      if (self.__isSingleTouch && self.options.animating && timeStamp - self.__lastTouchMove <= 100) {

        // Then figure out what the scroll position was about 100ms ago
        var positions = self.__positions;
        var endPos = positions.length - 1;
        var startPos = endPos;

        // Move pointer to position measured 100ms ago
        for (var i = endPos; i > 0 && positions[i] > self.__lastTouchMove - 100; i -= 3) {
          startPos = i;
        }

        // If start and stop position is identical in a 100ms timeframe,
        // we cannot compute any useful deceleration.
        if (startPos !== endPos) {

          // Compute relative movement between these two points
          var timeOffset = positions[endPos] - positions[startPos];
          var movedLeft = self.__scrollLeft - positions[startPos - 2];
          var movedTop = self.__scrollTop - positions[startPos - 1];

          // Based on 50ms compute the movement to apply for each render step
          self.__decelerationVelocityX = movedLeft / timeOffset * (1000 / 60);
          self.__decelerationVelocityY = movedTop / timeOffset * (1000 / 60);

          // How much velocity is required to start the deceleration
          var minVelocityToStartDeceleration = self.options.paging || self.options.snapping ? 4 : 1;

          // Verify that we have enough velocity to start deceleration
          if (Math.abs(self.__decelerationVelocityX) > minVelocityToStartDeceleration || Math.abs(self.__decelerationVelocityY) > minVelocityToStartDeceleration) {

            // Deactivate pull-to-refresh when decelerating
            if (!self.__refreshActive) {
              self.__startDeceleration(timeStamp);
            }
          } else {
            self.options.scrollingComplete();
          }
        } else {
          self.options.scrollingComplete();
        }
      } else if (timeStamp - self.__lastTouchMove > 100) {
        self.options.scrollingComplete();
      }
    }

    // If this was a slower move it is per default non decelerated, but this
    // still means that we want snap back to the bounds which is done here.
    // This is placed outside the condition above to improve edge case stability
    // e.g. touchend fired without enabled dragging. This should normally do not
    // have modified the scroll positions or even showed the scrollbars though.
    if (!self.__isDecelerating) {

      if (self.__refreshActive && self.__refreshStart) {

        // Use publish instead of scrollTo to allow scrolling to out of boundary position
        // We don't need to normalize scrollLeft, zoomLevel, etc. here because we only y-scrolling when pull-to-refresh is enabled
        self.__publish(self.__scrollLeft, -self.__refreshHeight, self.__zoomLevel, true);

        if (self.__refreshStart) {
          self.__refreshStart();
        }
      } else {

        if (self.__interruptedAnimation || self.__isDragging) {
          self.options.scrollingComplete();
        }
        self.scrollTo(self.__scrollLeft, self.__scrollTop, true, self.__zoomLevel);

        // Directly signalize deactivation (nothing todo on refresh?)
        if (self.__refreshActive) {

          self.__refreshActive = false;
          if (self.__refreshDeactivate) {
            self.__refreshDeactivate();
          }
        }
      }
    }

    // Fully cleanup list
    self.__positions.length = 0;
  },

  /*
   ---------------------------------------------------------------------------
   PRIVATE API
   ---------------------------------------------------------------------------
   */

  /**
   * Applies the scroll position to the content element
   *
   * @param left {Number} Left scroll position
   * @param top {Number} Top scroll position
   * @param animate {Boolean?false} Whether animation should be used to move to the new coordinates
   */
  __publish: function __publish(left, top, zoom, animate) {

    var self = this;

    // Remember whether we had an animation, then we try to continue based on the current "drive" of the animation
    var wasAnimating = self.__isAnimating;
    if (wasAnimating) {
      __WEBPACK_IMPORTED_MODULE_0__Animate__["a" /* default */].stop(wasAnimating);
      self.__isAnimating = false;
    }

    if (animate && self.options.animating) {

      // Keep scheduled positions for scrollBy/zoomBy functionality
      self.__scheduledLeft = left;
      self.__scheduledTop = top;
      self.__scheduledZoom = zoom;

      var oldLeft = self.__scrollLeft;
      var oldTop = self.__scrollTop;
      var oldZoom = self.__zoomLevel;

      var diffLeft = left - oldLeft;
      var diffTop = top - oldTop;
      var diffZoom = zoom - oldZoom;

      var step = function step(percent, now, render) {

        if (render) {

          self.__scrollLeft = oldLeft + diffLeft * percent;
          self.__scrollTop = oldTop + diffTop * percent;
          self.__zoomLevel = oldZoom + diffZoom * percent;

          // Push values out
          if (self.__callback) {
            self.__callback(self.__scrollLeft, self.__scrollTop, self.__zoomLevel);
          }
        }
      };

      var verify = function verify(id) {
        return self.__isAnimating === id;
      };

      var completed = function completed(renderedFramesPerSecond, animationId, wasFinished) {
        if (animationId === self.__isAnimating) {
          self.__isAnimating = false;
        }

        if (self.__didDecelerationComplete || wasFinished) {
          self.options.scrollingComplete();
        }

        if (self.options.zooming) {
          self.__computeScrollMax();
          if (self.__zoomComplete) {
            self.__zoomComplete();
            self.__zoomComplete = null;
          }
        }
      };

      // When continuing based on previous animation we choose an ease-out animation instead of ease-in-out
      self.__isAnimating = __WEBPACK_IMPORTED_MODULE_0__Animate__["a" /* default */].start(step, verify, completed, self.options.animationDuration, wasAnimating ? easeOutCubic : easeInOutCubic);
    } else {

      self.__scheduledLeft = self.__scrollLeft = left;
      self.__scheduledTop = self.__scrollTop = top;
      self.__scheduledZoom = self.__zoomLevel = zoom;

      // Push values out
      if (self.__callback) {
        self.__callback(left, top, zoom);
      }

      // Fix max scroll ranges
      if (self.options.zooming) {
        self.__computeScrollMax();
        if (self.__zoomComplete) {
          self.__zoomComplete();
          self.__zoomComplete = null;
        }
      }
    }
  },

  /**
   * Recomputes scroll minimum values based on client dimensions and content dimensions.
   */
  __computeScrollMax: function __computeScrollMax(zoomLevel) {

    var self = this;

    if (zoomLevel == null) {
      zoomLevel = self.__zoomLevel;
    }

    self.__maxScrollLeft = Math.max(self.__contentWidth * zoomLevel - self.__clientWidth, 0);
    self.__maxScrollTop = Math.max(self.__contentHeight * zoomLevel - self.__clientHeight, 0);
  },

  /*
   ---------------------------------------------------------------------------
   ANIMATION (DECELERATION) SUPPORT
   ---------------------------------------------------------------------------
   */

  /**
   * Called when a touch sequence end and the speed of the finger was high enough
   * to switch into deceleration mode.
   */
  __startDeceleration: function __startDeceleration(timeStamp) {

    var self = this;

    if (self.options.paging) {

      var scrollLeft = Math.max(Math.min(self.__scrollLeft, self.__maxScrollLeft), 0);
      var scrollTop = Math.max(Math.min(self.__scrollTop, self.__maxScrollTop), 0);
      var clientWidth = self.__clientWidth;
      var clientHeight = self.__clientHeight;

      // We limit deceleration not to the min/max values of the allowed range, but to the size of the visible client area.
      // Each page should have exactly the size of the client area.
      self.__minDecelerationScrollLeft = Math.floor(scrollLeft / clientWidth) * clientWidth;
      self.__minDecelerationScrollTop = Math.floor(scrollTop / clientHeight) * clientHeight;
      self.__maxDecelerationScrollLeft = Math.ceil(scrollLeft / clientWidth) * clientWidth;
      self.__maxDecelerationScrollTop = Math.ceil(scrollTop / clientHeight) * clientHeight;
    } else {

      self.__minDecelerationScrollLeft = 0;
      self.__minDecelerationScrollTop = 0;
      self.__maxDecelerationScrollLeft = self.__maxScrollLeft;
      self.__maxDecelerationScrollTop = self.__maxScrollTop;
    }

    // Wrap class method
    var step = function step(percent, now, render) {
      self.__stepThroughDeceleration(render);
    };

    // How much velocity is required to keep the deceleration running
    // added by yiminghe
    var minVelocityToKeepDecelerating = self.options.minVelocityToKeepDecelerating;

    if (!minVelocityToKeepDecelerating) {
      minVelocityToKeepDecelerating = self.options.snapping ? 4 : 0.001;
    }

    // Detect whether it's still worth to continue animating steps
    // If we are already slow enough to not being user perceivable anymore, we stop the whole process here.
    var verify = function verify() {
      var shouldContinue = Math.abs(self.__decelerationVelocityX) >= minVelocityToKeepDecelerating || Math.abs(self.__decelerationVelocityY) >= minVelocityToKeepDecelerating;
      if (!shouldContinue) {
        self.__didDecelerationComplete = true;
      }
      return shouldContinue;
    };

    var completed = function completed(renderedFramesPerSecond, animationId, wasFinished) {
      self.__isDecelerating = false;
      // Animate to grid when snapping is active, otherwise just fix out-of-boundary positions
      // fixed by yiminghe, in case call scrollingComplete twice
      self.scrollTo(self.__scrollLeft, self.__scrollTop, self.options.snapping, null, self.__didDecelerationComplete && self.options.scrollingComplete);
    };

    // Start animation and switch on flag
    self.__isDecelerating = __WEBPACK_IMPORTED_MODULE_0__Animate__["a" /* default */].start(step, verify, completed);
  },

  /**
   * Called on every step of the animation
   *
   * @param inMemory {Boolean?false} Whether to not render the current step, but keep it in memory only. Used internally only!
   */
  __stepThroughDeceleration: function __stepThroughDeceleration(render) {

    var self = this;

    //
    // COMPUTE NEXT SCROLL POSITION
    //

    // Add deceleration to scroll position
    var scrollLeft = self.__scrollLeft + self.__decelerationVelocityX;
    var scrollTop = self.__scrollTop + self.__decelerationVelocityY;

    //
    // HARD LIMIT SCROLL POSITION FOR NON BOUNCING MODE
    //

    if (!self.options.bouncing) {

      var scrollLeftFixed = Math.max(Math.min(self.__maxDecelerationScrollLeft, scrollLeft), self.__minDecelerationScrollLeft);
      if (scrollLeftFixed !== scrollLeft) {
        scrollLeft = scrollLeftFixed;
        self.__decelerationVelocityX = 0;
      }

      var scrollTopFixed = Math.max(Math.min(self.__maxDecelerationScrollTop, scrollTop), self.__minDecelerationScrollTop);
      if (scrollTopFixed !== scrollTop) {
        scrollTop = scrollTopFixed;
        self.__decelerationVelocityY = 0;
      }
    }

    //
    // UPDATE SCROLL POSITION
    //

    if (render) {

      self.__publish(scrollLeft, scrollTop, self.__zoomLevel);
    } else {

      self.__scrollLeft = scrollLeft;
      self.__scrollTop = scrollTop;
    }

    //
    // SLOW DOWN
    //

    // Slow down velocity on every iteration
    if (!self.options.paging) {

      // This is the factor applied to every iteration of the animation
      // to slow down the process. This should emulate natural behavior where
      // objects slow down when the initiator of the movement is removed
      var frictionFactor = 0.95;

      self.__decelerationVelocityX *= frictionFactor;
      self.__decelerationVelocityY *= frictionFactor;
    }

    //
    // BOUNCING SUPPORT
    //

    if (self.options.bouncing) {

      var scrollOutsideX = 0;
      var scrollOutsideY = 0;

      // This configures the amount of change applied to deceleration/acceleration when reaching boundaries
      var penetrationDeceleration = self.options.penetrationDeceleration;
      var penetrationAcceleration = self.options.penetrationAcceleration;

      // Check limits
      if (scrollLeft < self.__minDecelerationScrollLeft) {
        scrollOutsideX = self.__minDecelerationScrollLeft - scrollLeft;
      } else if (scrollLeft > self.__maxDecelerationScrollLeft) {
        scrollOutsideX = self.__maxDecelerationScrollLeft - scrollLeft;
      }

      if (scrollTop < self.__minDecelerationScrollTop) {
        scrollOutsideY = self.__minDecelerationScrollTop - scrollTop;
      } else if (scrollTop > self.__maxDecelerationScrollTop) {
        scrollOutsideY = self.__maxDecelerationScrollTop - scrollTop;
      }

      // Slow down until slow enough, then flip back to snap position
      if (scrollOutsideX !== 0) {
        if (scrollOutsideX * self.__decelerationVelocityX <= 0) {
          self.__decelerationVelocityX += scrollOutsideX * penetrationDeceleration;
        } else {
          self.__decelerationVelocityX = scrollOutsideX * penetrationAcceleration;
        }
      }

      if (scrollOutsideY !== 0) {
        if (scrollOutsideY * self.__decelerationVelocityY <= 0) {
          self.__decelerationVelocityY += scrollOutsideY * penetrationDeceleration;
        } else {
          self.__decelerationVelocityY = scrollOutsideY * penetrationAcceleration;
        }
      }
    }
  }
};

// Copy over members to prototype
for (var key in members) {
  Scroller.prototype[key] = members[key];
}

/* harmony default export */ __webpack_exports__["a"] = (Scroller);

/***/ }),
/* 464 */,
/* 465 */,
/* 466 */,
/* 467 */,
/* 468 */,
/* 469 */,
/* 470 */,
/* 471 */,
/* 472 */,
/* 473 */,
/* 474 */,
/* 475 */,
/* 476 */,
/* 477 */,
/* 478 */,
/* 479 */,
/* 480 */,
/* 481 */,
/* 482 */,
/* 483 */,
/* 484 */,
/* 485 */,
/* 486 */,
/* 487 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ })
]);
//# sourceMappingURL=vendor-d4785d5c2023aeb2cebe.js.map
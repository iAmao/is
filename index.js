
/**
 * Methods.
 */

var methods = {
  'promise': isPromise,
  'generator': isGenerator,
  'generatorFunction': isGeneratorFunction,
  'object': isObject,
  'array': isArray,
  'number': isNumber,
  'string': isString,
  'symbol': isSymbol,
  'boolean': isBoolean,
  'error': isError
};


/**
 * `is`.
 *
 * @param {Collection} col
 * @return {Collection}
 * @api public
 */
//
module.exports = methods;


/**
 * Check if `obj` is a promise.
 *
 * @param {Object} obj
 * @return {Boolean}
 * @api private
 */

function isPromise(obj) {
  return 'function' == typeof obj.then;
}

/**
 * Check if `obj` is a generator.
 *
 * @param {Mixed} obj
 * @return {Boolean}
 * @api private
 */

function isGenerator(obj) {
  return 'function' == typeof obj.next && 'function' == typeof obj.throw;
}

/**
 * Check if `obj` is a generator function.
 *
 * @param {Mixed} obj
 * @return {Boolean}
 * @api private
 */

function isGeneratorFunction(obj) {
  var constructor = obj.constructor;
  if (!constructor) return false;
  if ('GeneratorFunction' === constructor.name || 'GeneratorFunction' === constructor.displayName) return true;
  return isGenerator(constructor.prototype);
}

/**
 * Check for plain object.
 *
 * @param {Mixed} val
 * @return {Boolean}
 * @api private
 */

function isObject(val) {
  return Object == val.constructor;
}

/**
 * Check for plain array.
 *
 * @param {Mixed} val
 * @return {Boolean}
 * @api private
 */

function isArray(val) {
  return Array == val.constructor;
}

/**
 * Check for plain number.
 *
 * @param {Mixed} val
 * @return {Boolean}
 * @api private
 */

function isNumber(val) {
  return Number == val.constructor;
}

/**
 * Check for plain string.
 *
 * @param {Mixed} val
 * @return {Boolean}
 * @api private
 */

function isString(val) {
  return String == val.constructor;
}

/**
 * Check for plain symbol.
 *
 * @param {Mixed} val
 * @return {Boolean}
 * @api private
 */

function isSymbol(val) {
  return Symbol == val.constructor;
}

/**
 * Check for plain boolean.
 *
 * @param {Mixed} val
 * @return {Boolean}
 * @api private
 */

function isBoolean(val) {
  return Boolean == val.constructor;
}

/**
 * Check for plain error.
 *
 * @param {Mixed} val
 * @return {Boolean}
 * @api private
 */

function isError(val) {
  return Error == val.constructor;
}
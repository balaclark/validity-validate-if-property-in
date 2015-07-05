module.exports = function validateIfPropertyIn(property, values, validator) {

  if (!property) {
    throw new Error('No property to check provided')
  }

  if (!Array.isArray(values)) {
    throw new Error('Values must be an array')
  }

  if (!validator || typeof validator !== 'function') {
    throw new Error('No validator function provided')
  }

  return function (key, msg, object, callback) {
    if (values.indexOf(object[property]) > -1) {
      return validator(key, msg, object, callback)
    }

    return callback(null, undefined)
  }
}

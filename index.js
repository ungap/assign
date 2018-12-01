/*! (c) Andrea Giammarchi - ISC */
var assign = Object.assign || function (target) {
  for (var o, i = 1; i < arguments.length; i++) {
    o = arguments[i] || {};
    for (var k in o) {
      if (o.hasOwnProperty(k))
        target[k] = o[k];
    }
  }
  return target;
};

var assign = require('../cjs');
test();

if (typeof process !== 'undefined') {
  delete require.cache[require.resolve('../cjs')];
  delete Object.assign;
  assign = require('../cjs');
  /*
  var i = 0;
  Object.defineProperty(Array, 'isArray', {
    get: function () {
      if (!i++)
        return void 0;
      return isArray;
    }
  });
  */
}

var isArray = require('../cjs');
test();

function test() {
  var target = {};
  console.assert(assign(target) === target);
  console.assert(assign(target, void 0, {a: 123}, Object.create({b: 456})) === target);
  console.assert(target.a === 123);
  console.assert(target.b === void 0);
}

(() => {
  'use strict';
  const assert = require('assert');
  const myHello = require('../app/foo');
  describe('Test', function() {
    it('should say hello before something', function() {
      assert.equal(myHello.hello('test'), 'hello test');
    });
  });
})();
(() => {
  'use strict';
  const assert = require('assert');
  var expect = require('chai').expect;
  var request = require('request');
    const myHello = require('../public/main');

    describe('test', function () {
        it('should change color', function () {
          request('http://localhost:63342', function (error, response, body) {
              expect(body).to.equal('Test Page');
              done();

          });
        });
    });
})();
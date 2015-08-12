/*jshint node:true, mocha:true */

'use strict';

require('should');

var anyToAny = require('../src/linear-preset-any-to-any')(require('floating-adapter'));
var lc = require('linear-converter')(require('floating-adapter'));
var temp = require('linear-presets-temperature');

describe('convert units any to any', function() {
  it('should return presets for any to any', function() {
    lc.convert(300, anyToAny(temp, 'kelvin', 'fahrenheit')).should.be.exactly(80.33000000000004);
    lc.convert(40, anyToAny(temp, 'celsius', 'fahrenheit')).should.be.exactly(104);
    lc.convert(104, anyToAny(temp, 'fahrenheit', 'celsius')).should.be.exactly(40);
    lc.convert(10, anyToAny(temp, 'celsius', 'celsius')).should.be.exactly(10);
  });
});

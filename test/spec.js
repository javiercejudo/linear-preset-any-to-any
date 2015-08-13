/*jshint node:true, mocha:true */

'use strict';

require('should');

var adapter = require('floating-adapter');
var anyToAny = require('../src/linear-preset-any-to-any')(adapter);
var temp = require('linear-presets-temperature');

describe('convert units any to any', function() {
  it('should return presets for any to any', function() {
    anyToAny(temp, 'kelvin', 'fahrenheit').should.eql([[273.15, 373.15], [32, 212]]);
    anyToAny(temp, 'celsius', 'fahrenheit').should.eql([[0, 100], [32, 212]]);
    anyToAny(temp, 'fahrenheit', 'celsius').should.eql([[32, 212], [0, 100]]);
    anyToAny(temp, 'celsius', 'celsius').should.eql([[0, 1], [0, 1]]);
  });
});

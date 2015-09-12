/*jshint node:true, mocha:true */

'use strict';

require('should');

var adapter = require('floating-adapter');
var Decimal = require('linear-arbitrary-precision')(adapter);
var anyToAny = require('../src/linear-preset-any-to-any')(Decimal);
var temp = require('linear-presets-temperature').conversions;

function scaleVals(scale) {
  return scale.map(Number)
}

describe('convert units any to any', function() {
  it('should return presets for any to any', function() {
    anyToAny(temp, 'kelvin', 'fahrenheit').map(scaleVals)
      .should.eql([[273.15, 373.15], [32, 212]]);

    anyToAny(temp, 'celsius', 'fahrenheit').map(scaleVals)
      .should.eql([[0, 1], [32, 33.8]]);

    anyToAny(temp, 'fahrenheit', 'celsius').map(scaleVals)
      .should.eql([[32, 212], [0, 100]]);

    anyToAny(temp, 'celsius', 'celsius').map(scaleVals)
      .should.eql([[0, 1], [0, 1]]);
  });
});

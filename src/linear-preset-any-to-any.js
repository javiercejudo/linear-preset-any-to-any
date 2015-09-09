/*jshint node:true */

'use strict';

var lcFactory = require('linear-converter');
var identityPreset = require('unit-preset');

module.exports = function anyToAnyFactory(Decimal) {
  var lc = lcFactory(Decimal);

  return function anyToAny(data, fromUnit, destUnit) {
    var conversions = data.conversions;
    var fromUnitToBase = identityPreset;
    var fromBaseToDestUnit = identityPreset;

    if (data.base === fromUnit) {
      fromBaseToDestUnit = conversions[destUnit];
    } else if (data.base === destUnit) {
      fromUnitToBase = lc.invertPreset(conversions[fromUnit]);
    } else {
      fromUnitToBase = lc.invertPreset(conversions[fromUnit]);
      fromBaseToDestUnit = conversions[destUnit];
    }

    return lc.composePresets(fromUnitToBase, fromBaseToDestUnit);
  };
};

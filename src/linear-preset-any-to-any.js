/*jshint node:true */

'use strict';

var lcFactory = require('linear-converter');

module.exports = function anyToAnyFactory(adapter) {
  var lc = lcFactory(adapter);

  return function anyToAny(data, fromUnit, destUnit) {
    var conversions = data.conversions;

    if (data.base === fromUnit) {
      return conversions[destUnit];
    }

    if (data.base === destUnit) {
      return lc.invertPreset(conversions[fromUnit]);
    }

    var fromUnitToBase = lc.invertPreset(conversions[fromUnit]);
    var fromBaseToDestUnit = conversions[destUnit];

    return lc.composePresets([fromUnitToBase, fromBaseToDestUnit]);
  };
};

/*jshint node:true */

'use strict';

var lcFactory = require('linear-converter');

module.exports = function anyToAnyFactory(Decimal) {
  var lc = lcFactory(Decimal);

  return function anyToAny(conversions, fromUnit, destUnit) {
    return lc.composeConversions(
      lc.invertConversion(conversions[fromUnit]),
      conversions[destUnit]
    );
  };
};

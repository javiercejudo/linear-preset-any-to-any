# linear-preset-any-to-any

[![Build Status](https://travis-ci.org/javiercejudo/linear-preset-any-to-any.svg)](https://travis-ci.org/javiercejudo/linear-preset-any-to-any)
[![Coverage Status](https://coveralls.io/repos/javiercejudo/linear-preset-any-to-any/badge.svg?branch=master)](https://coveralls.io/r/javiercejudo/linear-preset-any-to-any?branch=master)
[![Code Climate](https://codeclimate.com/github/javiercejudo/linear-preset-any-to-any/badges/gpa.svg)](https://codeclimate.com/github/javiercejudo/linear-preset-any-to-any)

Generate linear presets for any to any conversions

## Install

    npm i linear-preset-any-to-any

## Usage

```js
var Decimal = require('linear-arbitrary-precision')(require('floating-adapter'));
var anyToAny = require('linear-preset-any-to-any')(Decimal);
var temp = require('linear-presets-temperature').conversions;

// all numbers are Decimal
anyToAny(temp, 'kelvin', 'fahrenheit');  // => [[273.15, 373.15], [32, 212]]
anyToAny(temp, 'celsius', 'fahrenheit'); // => [[0, 100], [32, 212]]
anyToAny(temp, 'fahrenheit', 'celsius'); // => [[32, 212], [0, 100]]
anyToAny(temp, 'celsius', 'celsius');    // => [[0, 1], [0, 1]]
```

## Related projects

- [linear-presets](https://github.com/javiercejudo/linear-presets): linear presets for common units.
- [linear-converter](https://github.com/javiercejudo/linear-converter): flexible linear converter.

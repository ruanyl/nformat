nformat
========
[![build status](https://secure.travis-ci.org/ruanyl/nformat.svg)](http://travis-ci.org/ruanyl/nformat)
[![NPM version](https://badge.fury.io/js/nformat.svg)](http://badge.fury.io/js/nformat)

simple number/string format

## Installation

This module is installed via npm:

``` bash
$ npm install nformat
```

## Example Usage

``` js
var nFormat = require('nformat');
assert.equal(nFormat(12345678, '***-***:*** *'), '123-456:78');
assert.equal(nFormat(123456789, '***-***-***'), '123-456-789');
```

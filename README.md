[![npm version](https://badge.fury.io/js/tsl-umd.svg)](https://badge.fury.io/js/tsl-umd)
[![Downloads](https://img.shields.io/npm/dm/tsl-umd.svg)](https://npmjs.com/tsl-umd)
[![Dependency Status](https://david-dm.org/willosof/tsl-umd.svg)](https://david-dm.org/willosof/tsl-umd)
[![Build Status](https://travis-ci.org/willosof/tsl-umd.svg?branch=master)](https://travis-ci.org/willosof/tsl-umd)
[![MIT license](http://img.shields.io/badge/license-MIT-brightgreen.svg)](http://opensource.org/licenses/MIT)
[![GitHub issues](https://img.shields.io/github/issues/willosof/tsl-umd.svg?style=plastic)](https://github.com/willosof/tsl-umd/issues)
[![GitHub forks](https://img.shields.io/github/forks/willosof/tsl-umd.svg?style=plastic)](https://github.com/willosof/tsl-umd/network)
[![GitHub stars](https://img.shields.io/github/stars/willosof/tsl-umd.svg?style=plastic)](https://github.com/willosof/tsl-umd/stargazers)

### Getting Started

```
npm install tsl-umd
```

### Example ###
```javascript
var UMD = require('tsl-umd');
var umd = new UMD(5001);

umd.on('message', function(tally) {
	console.log("Tally update:", tally);
);
```

### Tested OK with
* tslumd_1.0 on Ross Carbonite mixers
* [Axon Cerebrum](https://www.axon.tv/productgroup/cerebrum/)

### Git
* [https://github.com/willosof/tsl-umd](https://github.com/willosof/tsl-umd)
* `git@github.com:willosof/tsl-umd.git`

### Author
William Viker <<william.viker@gmail.com>>

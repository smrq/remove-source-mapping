# remove-source-mapping

Remove a source file from a sourcemap

[![NPM version](https://badge.fury.io/js/remove-source-mapping.png)](http://badge.fury.io/js/remove-source-mapping)
[![build status](https://secure.travis-ci.org/smrq/remove-source-mapping.png)](http://travis-ci.org/smrq/remove-source-mapping)
[![Dependency status](https://david-dm.org/smrq/remove-source-mapping.png)](https://david-dm.org/smrq/remove-source-mapping) [![devDependency Status](https://david-dm.org/smrq/remove-source-mapping/dev-status.png)](https://david-dm.org/smrq/remove-source-mapping#info=devDependencies)

# usage

Accepts either a JSON object or string.

``` js
var removeMapping = require('remove-source-mapping');

var newMap = removeMapping('sourceToRemove.js', mySourceMap);
```

# installation

``` sh
npm install remove-source-mapping
```

# license

MIT

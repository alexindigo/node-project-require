# project-require [![Build Status](https://travis-ci.org/alexindigo/node-project-require.svg?branch=master)](https://travis-ci.org/alexindigo/node-project-require)

Allows to require project files as absolute paths, relative to the root of your node project.
Because how often you're using absolute path in your requires? :)

### Example

```
// override require
var require = require('project-require');

// use it to require everything else,
// and using absolute path, but relative
// to the project's root
var common = require('/lib/common');

// instead of
var worksToo = require('../../../lib/common');

// in rare case when full path needed to be required
var anotherLib = require.thru('/real/absolute/path');
```

### Notes

- Meant for the projects with deep nested structure.
- Doesn't affect other modules or files
- Not meant to be used in shared modules, just for apps

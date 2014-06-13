# project-require

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
```

### Notes

- Meant for the projects with deep nested structure.
- Doesn't affect other modules or files

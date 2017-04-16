var project = 'project-require',
    projectFile = './index.js'
    , require = require(projectFile);

// check default behavior
console.assert(require('/package.json').name == project);

// check custom path
require.projectPath(__dirname + '/index.js');
console.assert(require('/../package.json').name == project);

// check regular modules
console.assert(typeof require(projectFile).projectPath == 'function');

// check built-in modules
console.assert(typeof require('path').join == 'function');

// check passing through
console.assert(require.thru(process.cwd() + '/package.json').name == project);

return 0;

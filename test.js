var project = 'project-require'
  , require = require(project)
  ;

// check default behavior
console.assert(require('/package.json').name == project);

// check custom path
require.projectPath(__dirname+'/node_modules/'+project);
console.assert(require('/../../package.json').name == project);

// check regular modules
console.assert(typeof require(project).projectPath == 'function');

// check built-in modules
console.assert(typeof require('path').join == 'function');

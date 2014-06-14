var path        = require('path')
  , projectPath = projectPathDefault()
  ;

// public api
module.exports             = pretendRequire;
module.exports.projectPath = projectPathGetterSetter;
// expose original require
module.exports.thru = require;

// check for requested path, if it starts with "/"
// treat it as path relative to the project's root
// and replace it with absolute path
function pretendRequire(file)
{
  if (file && file.substr(0, 1) == '/')
  {
    file = path.join(projectPath, file.substr(1));
  }

  return require(file);
}

// setter/getter for projectPath
// useful when you run your app
// from other than base location
function projectPathGetterSetter(newPath)
{
  if (arguments.length > 0)
  {
    projectPath = newPath;
  }

  return projectPath;
}

// Determines base path to the root of the project
// that contains current module
function projectPathDefault()
{
  return path.dirname(module.id).split('/node_modules/', 2)[0];
}

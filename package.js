Package.describe({
  name: 'mpk-demo',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'Test package',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

// Adding an NPM package dependency

Npm.depends({
  faker: "2.1.2"
});

Package.onUse(function(api) {
  api.versionsFrom('1.4.1.3');
  api.use('ecmascript');

  // Deploy template to the client

  api.use('templating','client');                               // Required to support templates in the package
  api.add_files("aTemplate.html","client");                     // Export the file to the client
  api.add_files("aTemplate.css","client");
  api.add_files("aTemplate.js","client");

  // Deploy some javascript to the server

  api.add_files("server.js","server");                          // Add the js file to the server
  api.export( 'testServerFunction', 'server' );                 // Export the variables to make visible to the application
  api.export( 'fakeName', 'server' );

  // Deploy some javascript to both the client and server

  api.add_files("lib.js", ["client", "server"]);                // Add the js file to the client and server
  api.export( 'clientAndServerFunction', ["client","server"]);  // Export the variables to make visible to the application

  // Exporting an NPM package (see server.js)

  api.export( 'faker1', 'server');

});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
});

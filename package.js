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

Package.onUse(function(api) {
  api.versionsFrom('1.4.1.3');
  api.use('ecmascript');
  api.use('templating','client');
  api.add_files("aTemplate.html","client");
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
});

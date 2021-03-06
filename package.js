Package.describe({
  name: 'classcraft:meteor-wkhtmltopdf',
  summary: "Meteor smart package for wkhtmltopdf (requires binaries on the server).",
  version: "0.3.1",
  git: "https://github.com/classcraft/classcraft-meteor-wkhtmltopdf"
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@0.9.0');
  api.addFiles('classcraft:meteor-wkhtmltopdf.js', 'server');
  api.export('wkhtmltopdf', 'server');
});

Npm.depends({
  "wkhtmltopdf": "0.1.5"
});
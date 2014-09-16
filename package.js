Package.describe({
  summary: "Meteor smart package for meteor-wkhtmltopdf.",
  version: "0.1.5",
  git: "https://github.com/classcraft/classcraft-meteor-wkhtmltopdf"
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@0.9.0');
  api.addFiles('cc:meteor-wkhtmltopdf.js', 'server');
  api.export('wkhtmltopdf', 'server');
});

Npm.depends({
  "wkhtmltopdf": "0.1.5"
});
var path = require('path');
var express = require('express');
var ejs = require('ejs');
var serializeRoutes = require('./serialize-routes');

var app = express();
var indexHTML = path.join(__dirname, 'views', 'index.ejs');

app.use('/assets', express.static(path.join(__dirname, 'assets')));

module.exports = function (router) {
  var data = serializeRoutes(router);

  app.get('/', function (req, res) {
    data.namespace = req.originalUrl.replace(/\/$/,'');
    ejs.renderFile(indexHTML, data, function (err, html) {
      res.send(html);
    });
  });

  return app;
};

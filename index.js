var path = require('path');
var express = require('express');
var serializeRoutes = require('./serialize-routes');

var app = express();

app.use('/assets', express.static(path.join(__dirname, 'assets')));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

module.exports = function (router) {
  var data = serializeRoutes(router);

  app.get('/', function (req, res) {
    data.namespace = req.originalUrl.replace(/\/$/,'');
    res.render('index', data);
  });

  return app;
};

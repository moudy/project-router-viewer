var app = require('express')();
var projectRouter = require('project-router');
var projectRouterViewer = require('../index');
var supertest = require('supertest');
var expect = require('chai').expect;

var router = projectRouter.map(function () {
  this.resource('users');
});

app.use('/routes', projectRouterViewer(router));

describe('projectRouterViewer', function () {

  before(function (done) {
    var self = this;
    supertest(app).get('/routes').expect(200).end(function(err, res){
      if (err) return done(err);
      self.html = res.text;
      done();
    });
  });

  it('shows routes', function () {
    [
      '/users',
      '/users/new',
      '/users/:id',
      '/users/:id/edit',
      '/users/:id',
      'users/index',
      'users/show',
      'users/new',
      'users/create',
      'users/edit',
      'users/update',
      'users/destroy'
    ].forEach(function (s) {
        expect(this.html).to.have.string(s);
    }, this);
  });

  it('shows counts', function () {
    [
      '7 Routes',
      '4 get',
      '1 post',
      '1 put',
      '1 delete'
    ].forEach(function (s) {
        expect(this.html).to.have.string(s);
    }, this);
  });

});


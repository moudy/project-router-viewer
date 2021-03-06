## Project Router Viewer

[![Build Status](https://travis-ci.org/moudy/project-router-viewer.svg)](https://travis-ci.org/moudy/project-router-viewer)

See a list of route mappings for [Project Router](https://github.com/moudy/project-router).

![Project Router Viewer Screenshot](https://raw.githubusercontent.com/moudy/project-router-viewer/screenshot/screenshot.png)

### Install
```
npm install --save-dev project-router-viewer
```

### Setup
To see routes listed at `/routes` mount as middleware.

```js
var projectRouterViewer = require('project-router-viewer');
var router = projectRouter.map(require('./routes'));

if ('development' === app.get('env')) {
  app.use('/routes', projectRouterViewer(router));
}

app.use(router);
```

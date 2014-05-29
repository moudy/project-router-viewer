module.exports = function (router) {
  var counts = {
    get: 0
  , post: 0
  , put: 0
  , delete: 0
  , total: 0
  };

  var stack = router.stack;
  var routes = stack.map(function (s) {
    var route = s.route.stack[0].handle.route;
    counts[route.method]++;
    counts.total++;
    return route;
  });

  return {
    routes: routes
  , counts: counts
  };
};

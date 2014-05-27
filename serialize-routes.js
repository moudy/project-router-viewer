module.exports = function (router) {
  var stack = router.stack;
  var routes = stack.map(function (s) {
    return s.route.stack[0].handle.route;
  });

  return routes;
};

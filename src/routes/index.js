module.exports = function(server){
  // Bad Route
  server.route({
      method: 'GET',
      path:'/',
      handler: function (request, reply) {
          return reply(Boom.badRequest('Unsupported parameter'));
      }
  });

  // Good Route
  server.route({
      method: 'GET',
      path:'/',
      handler: function (request, reply) {
          return reply("<h1>Hello</h1>");
      }
  });

}

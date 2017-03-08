const fs = require("fs");

module.exports = function(server){
  // Bad Route
  server.route({
      method: 'GET',
      path:'/bad',
      handler: function (request, reply) {
          return reply(Boom.badRequest('Unsupported parameter'));
      }
  });

  // Good Route
  server.route({
      method: 'GET',
      path:'/',
      handler: function (request, reply) {
        fs.readFile("./serve/html/index.html", 'utf8', function(err, content){
          return reply(content);
        });
      }
  });

}

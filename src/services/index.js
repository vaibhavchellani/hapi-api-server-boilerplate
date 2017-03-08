module.exports = function(server){
  // Post up
  server.route({
      method: 'POST',
      path:'/',
      handler: function (request, reply) {
          return reply('ok');
      }
  });

}

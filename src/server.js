'use strict';

const Hapi = require('hapi');
const Boom = require('boom');
const server = new Hapi.Server();

module.exports = function(){

  // create connection
  server.connection({
      host: 'localhost',
      port: process.env.PORT
  });

  // set cookie session
  server.state('session', {
    ttl: 24 * 60 * 60 * 1000 * 30,     // One Month
    isSecure: true,
    path: '/',
    encoding: 'base64json'
  });

  require("./routes/index.js")(server);
  require("./services/index.js")(server);

  // Start the server
  server.start((err) => {
      if (err) {
          throw err;
      }
      console.log('Server running at:', server.info.uri);
  });
}

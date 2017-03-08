// load environment manager to perform checks
const envManager = require("envmanager");
const manager = new envManager();

if(manager.checkVariables()){
  require("dotenv").load(); // load environmental variables
  require("./src/server.js")(); // run the server
}

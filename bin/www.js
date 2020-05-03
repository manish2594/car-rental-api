const http = require("http");
const config = require("../config/environment");
const app = require("../app");

var server = http.createServer(app);
const port = config.port;
server.listen(port, () => {
  console.log("Server is listening on port", port);
});

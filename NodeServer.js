const http = require("http");

// Creates server instance
const server = http.createServer((req, res) => {
  // Write server code here
  const { method } = req;

  switch (method) {
    case "GET":
      handleGetRequest(req, res);
      break;
  }
});

// Handle GET requests
const handleGetRequest = (req, res) => {
  const { pathname } = req;

  if (pathname === "/") {
    res.statusCode = 200;
    return res.end("We are up and running");
  }
};

// Starts server listening on specified port
server.listen(4001, () => {
  const { address, port } = server.address();
  console.log(`Server is listening on: http://${address}:${port}`);
});

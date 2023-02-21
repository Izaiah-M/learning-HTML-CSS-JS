// const fs = require("fs");
const http = require("http");

const server = http.createServer((req, res) => {
  const url = new URL(request.url, `http://${request.headers.host}`);

  switch (url.pathname) {
    case "/":
      if (req.method === "GET") {
        break;
      } else if (req.method === "POST") {
        break;
      }

    default:
      console.log("Location nun existant");
      break;
  }
});

server.listen(8080, () => {
  console.log(
    `Server is listening on: http://localhost:${server.address().port}`
  );
});

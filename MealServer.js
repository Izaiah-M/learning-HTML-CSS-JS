// const fs = require("fs");
const http = require("http");

const server = http.createServer((req, res) => {
  const url = new URL(req.url, `http://${req.headers.host}`);

  switch (url.pathname) {
    case "/home":
      if (req.method === "GET") {
        // Can be changed to text/html
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end("Hey there we are live!!");
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

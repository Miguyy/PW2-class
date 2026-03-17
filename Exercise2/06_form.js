const http = require("http");
const fs = require("fs");

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  const { method, url } = req;
  console.log(`Received ${method} request for ${url}`);

  const parsedUrl = new URL(url, `http://${req.headers.host}`);

  const fileName = parsedUrl.searchParams.get("../Exercise2/06_form.html");

  /* switch (url) {
    case "/":
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end("<h1>Welcome</h1>");
      break;
    case "/message":
      res.writeHead(200, { "Content-Type": "text/html" });
      break;
    default:
      res.writeHead(404, { "Content-Type": "text/html" });
      res.end("<h1>404 - Page Not Found</h1>");
  } */
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});

//console.log("Hello Node");

//console.log(process.argv.slice(2));

//console.log(process.argv.slice.PORT);

//node basic server
const http = require("http");

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  /* res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Hello, World!"); */
  const { method, url } = req;
  console.log(`Received ${method} request for ${url}`);

  switch (url) {
    case "/":
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end("Welcome to my server");
      break;
    case "/about":
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end("This is a Node.js server");
      break;
    case "/time":
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end(`Current server time is: ${new Date().toLocaleTimeString()}`);
      break;
    default:
      res.writeHead(404, { "Content-Type": "text/plain" });
      res.end("Page Not Found");
  }
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});

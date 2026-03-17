const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = process.env.PORT || 5000;

const server = http.createServer((req, res) => {
  const { method, url } = req;
  if (method === "GET" && url === "/") {
    res.statusCode = 405;
    res.end("405 - Method Not Allowed");
    return;
  }

  const parsedUrl = new URL(url, `http://${PORT}`);
  console.log(parsedUrl);
  let fileName = parsedUrl.searchParams.get("file");

  if (parsedUrl.pathname === "/" && fileName != null) {
    let fullPath = path.join(__dirname, "public", fileName);
    /* fs.readFile(fileName, "utf8", (err, data) => {
      if (err) {
        res.statusCode = 404;
        res.end("404 - File Not Found");
        return;
      }
      res.statusCode = 200;
      res.setHeader("Content-Type", "text/plain");
      res.end(data);
    }); */

    if (!fullPath.startsWith(path.join(__dirname, "public"))) {
      res.statusCode = 403;
      res.end("403 - Forbidden");
      return;
    }

    fs.readFile(fullPath, "utf8", (err, data) => {
      if (err) {
        res.statusCode = 404;
        res.end("404 - File Not Found");
        return;
      }
      res.statusCode = 200;
      res.end(data);
    });
  } else {
    res.statusCode = 400;
    res.end("400 - Bad Request");
    return;
  }

  res.statusCode = 404;
  res.end("404 - Not Found");
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});

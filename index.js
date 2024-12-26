import http from "http";
import url from "url";
import fs from "fs/promises";

http
  .createServer(async (req, res) => {
    const q = url.parse(req.url, true);
    const fileName =
      q.pathname === "/" ? "./index.html" : `.${q.pathname}.html`;

    try {
      const data = await fs.readFile(fileName);
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
    } catch (err) {
      try {
        const errorData = await fs.readFile("./404.html");
        res.writeHead(404, { "Content-Type": "text/html" });
        res.write(errorData);
      } catch {
        res.writeHead(404, { "Content-Type": "text/html" });
        res.write("<h1>404 Not Found</h1>");
      }
    }
    res.end();
  })
  .listen(8080);

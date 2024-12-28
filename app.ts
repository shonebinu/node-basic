import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname, "about.html"));
});

app.get("/contact-me", (req, res) => {
  res.sendFile(path.join(__dirname, "contact-me.html"));
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "404.html"));
});

const PORT = process.env.PORT ?? 3000;

app.listen(PORT, () => {
  console.log(`Express app running on port ${PORT}`);
});

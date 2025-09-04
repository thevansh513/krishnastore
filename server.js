const express = require("express");
const path = require("path");
const app = express();
const port = 8080;

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public/index.html"));
});

app.get("/buy", (req, res) => {
  res.sendFile(path.join(__dirname, "public/buy.html"));
});

app.get("/pay", (req, res) => {
  res.sendFile(path.join(__dirname, "public/cap/index.html"));
});

app.get("/download", (req, res) => {
  res.sendFile(path.join(__dirname, "public/cap/download.html"));
});

app.get("/vpn", (req, res) => {
  res.sendFile(path.join(__dirname, "public/vpn/index.html"));
});

app.get("/vpn/download", (req, res) => {
  res.sendFile(path.join(__dirname, "public/vpn/download.html"));
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

const express = require("express");
const fs = require("fs/promises");
const app = express();
const port = 8080

async function readFile(fileName) {
  try {
    const content = await fs.readFile(`./${fileName}`, { encoding: "utf8" });
    return content;
  } catch (error) {
    console.log(error);
  }
}

app.get("/", (req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  readFile("index.html").then((content) => {
    res.write(content);
    res.end();
  });
});

app.get("/about", (req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  readFile("about.html").then((content) => {
    res.write(content);
    res.end();
  });
});

app.get("/contact-me", (req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  readFile("contact-me.html").then((content) => {
    res.write(content);
    res.end();
  });
});

app.all("*", (req, res)=>{
    res.writeHead(404, { "Content-Type": "text/html" });
    readFile("404.html").then((content) => {
      res.write(content);
      res.end();
    });
})

app.listen(port, ()=>{console.log(`Example app running on port: ${port}`)});



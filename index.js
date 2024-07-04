const http = require("http");
const path = require('path');
const fs = require("fs");
const url = require('url');
 
http.createServer(function (req, res) {
  console.log(req.url)
  res.setHeader('Content-Type', 'text/html');

  let path = './'

  switch (req.url) {
    case '/':
      path += 'index.html';
      break;
    case '/about':
      path += 'about.html';
      break;
    case '/contact-me':
      path += 'contact-me.html';
      break;
    default:
      path += '404.html';
      break;
  }

  fs.readFile(path, (error, data) => {
    if (error) {
      console.log(error);
      res.end();
    }
    res.end(data);
  });

  }).listen(8080);
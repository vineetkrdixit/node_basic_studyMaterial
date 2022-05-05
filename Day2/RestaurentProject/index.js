const http = require("http");
const file = require("fs");
const url = require("url");
http
  .createServer((req, res) => {
    if (req.url === "/foodmenu" && req.method === "GET") {
      file.readFile("foodmenu.json", "utf-8", (err, data) => {
        if (err) {
          console.log("Error Occured");
        } else {
          res.writeHead(200, { "Content-Type": "application/json" });
          res.end(data);
        }
      });
    } else if (req.url === "/drinksmenu" && req.method === "GET") {
      file.readFile("drinksmenu.json", "utf-8", (err, drinkData) => {
        if (err) {
          console.log("Error Occurred");
        } else {
          res.writeHead(200, { "Content-Type": "application/json" });
          res.end(drinkData);
        }
      });
    } else if (req.url === "/Mojito" && req.method === "GET") {
      file.readFile("drinksmenu.json", "utf-8", (err, data) => {
        if (err) {
          console.log("error Occured");
        } else {
          // console.log(data);
          let data1 = JSON.parse(data);
          for (let i of Object.keys(data1)) {
            // console.log(i);
            for (let j = 0; j < data1[i].length; j++) {
              if (data1[i][j].rDish === "Mojito") {
                // console.log(data1[i][j].rDish);
                // console.log(JSON.stringify(data1[i][j].rDish));
                res.writeHead(200, { "Content-Type": "application/json" });
                res.write(JSON.stringify(data1[i][j]));
                res.end();
              }
            }
          }
        }
      });
    } else if (req.method === "GET") {
      let search = url.parse(req.url, true).path;
      console.log(search);
      let trim = search.slice(1);
      console.log(trim);

      file.readFile("drinksmenu.json", "utf-8", (err, data) => {
        if (err) {
          console.log("error Occured");
        } else {
          // console.log(data);
          let data1 = JSON.parse(data);
          for (let i of Object.keys(data1)) {
            // console.log(i);
            for (let j = 0; j < data1[i].length; j++) {
              if (data1[i][j].rDish === trim) {
                console.log(data1[i][j]);
                console.log(JSON.stringify(data1[i][j]));
                res.writeHead(200, { "Content-Type": "application/json" });
                res.write(JSON.stringify(data1[i][j]));
                res.end();
              }
            }
          }
        }
      });
    } else {
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(" req not supported");
    }
  })
  .listen(3002);

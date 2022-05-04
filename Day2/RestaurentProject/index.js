const http = require("http");
const file = require("fs");
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
    } else if (req.url === "/mojito" && req.method === "GET") {
      file.readFile("drinksmenu.json", "utf-8", (err, drinkData) => {
        if (err) {
          console.log("Error Occurred");
        } else {
          res.writeHead(200, { "Content-Type": "application/json" });
          let newData = JSON.stringify(drinkData);

          console.log(newData.drinksMenu);
          // for (let [key, value] of Object.entries(newData)) {
          // console.log([key], [value]);
        }
        res.end();

        //}
      });
    }
  })
  .listen(3002);

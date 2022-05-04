const http = require("http");
const mainCouseData = [
  {
    rType: "Veg",
    rDish: "Dal Makhni",
    rPrice: "200",
  },
  {
    rType: "NonVeg",
    rDish: "Chicken Korma",
    rPrice: "380",
  },
  {
    rType: "NonVeg",
    rDish: "Mutton Biryani",
    rPrice: "300",
  },
  {
    rType: "Veg",
    rDish: "Palak Paneer",
    rPrice: "250",
  },
  {
    rType: "Veg",
    rDish: "Kadhai Paneer",
    rPrice: "250",
  },
];

http
  .createServer((req, res) => {
    if (req.url === "/menu" && req.method === "GET") {
      res.writeHead(200, { "Content-Type": "application/json" });
      res.write(JSON.stringify(mainCouseData));
      res.end();
    } else {
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end("Error: Request Not Found");
    }
  })
  .listen(3007);

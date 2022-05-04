const http = require("http");
http.get("http://localhost:3007/menu", (res) => {
  let arr = [];
  res.on("data", (arrData) => {
    console.log("you are in array data");
    arr.push(arrData);
  });
  res.on("end", () => {
    console.log("you are in the end");
    console.log(JSON.parse(Buffer.concat(arr).toString()));
  });
});

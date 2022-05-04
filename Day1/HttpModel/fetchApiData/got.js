const got = require("got");

got
  .get("http://localhost:3007/menu", { responseType: "json" })
  .then((res) => {
    console.log(res.body);
  })
  .catch((err) => {
    console.log("Error Occured");
  });

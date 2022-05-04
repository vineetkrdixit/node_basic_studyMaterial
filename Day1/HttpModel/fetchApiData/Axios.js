const axios = require("axios");
axios
  .get("http://localhost:3007/menu")
  .then((res) => {
    console.log(res.data);
  })
  .catch((err) => {
    console.log("error Occured");
  });

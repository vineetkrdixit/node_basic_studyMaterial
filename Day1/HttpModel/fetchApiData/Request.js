const request = require("request");
request.get("http://localhost:3007/menu", (err, req) => {
  if (err) {
    console.log("Error Occured");
  } else {
    console.log(req.body);
  }
});

const request = require("request");
let promise = new Promise((resolve, reject) => {
  request.get("http://localhost:3007/menu", (err, req) => {
    if (err) {
      console.log("Error occured in request method line ");
      reject();
    } else {
      console.log("Work has been done and its a sucess");
      console.log(req.body);
      resolve();
    }
  });
})
  .then(() => {
    console.log("Its a sucess in then line");
  })
  .catch(() => {
    console.log('"its an error in catch ');
  });

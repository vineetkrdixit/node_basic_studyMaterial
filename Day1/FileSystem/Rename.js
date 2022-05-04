const file = require("fs");
file.rename("data.txt", "data1.txt", function (err, data) {
  if (err) {
    console.log("Error Occured");
  } else {
    console.log("Rename Successfull");
  }
});

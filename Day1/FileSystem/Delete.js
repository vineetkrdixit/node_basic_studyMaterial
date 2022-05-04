const file = require("fs");
file.unlink("data2.txt", function (err) {
  if (err) {
    console.log("Unable to Delete");
  } else {
    console.log("File Deleted");
  }
});

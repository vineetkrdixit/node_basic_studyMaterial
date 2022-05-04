//This will append one file
const file = require("fs");
const str = "Hi this one of the addition text to append";
file.appendFile("data2", str, function (err) {
  if (err) {
    console.log("error Occured");
  } else {
    console.log("data Appended");
  }
});

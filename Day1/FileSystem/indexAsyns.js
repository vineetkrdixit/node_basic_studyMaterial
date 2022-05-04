const file = require("fs");
//this function is for read the file
file.readFile("data.txt", "utf-8", function (err, data) {
  if (err) {
    console.log("Cant load data");
  } else {
    console.log(data);
  }
});

//this function show how to write into a new file
file.writeFile("data2", "data.txt", function (err, data) {
  if (err) {
    console.log("Error Occured");
  } else {
    console.log(data);
  }
});
//doing above write function by fetching 1st file data and copy to new file
file.readFile("data.txt", "utf-8", function (err, data) {
  if (err) {
    console.log("Error Occured");
  } else {
    file.writeFile("data3", data, function (err, data) {
      if (err) {
        console.log("error");
      } else {
        console.log(data);
      }
    });
  }
});

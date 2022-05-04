console.log("hey node here");

//import customModule to get the exported function to use here

const file = require("./customModule");
console.log(file.add(2, 3));
console.log(file.sub(34, 12));

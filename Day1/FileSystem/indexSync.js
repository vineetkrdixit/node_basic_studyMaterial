const file = require("fs");
const filedata = file.readFileSync("data.txt", "utf-8");
console.log(filedata);

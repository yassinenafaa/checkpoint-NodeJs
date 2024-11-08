const fs = require("fs");
// console.log(fs);
fs.readFile("./welcome.txt", (err, data) => {
    err ? console.log(err) : console.log(data.toString());
});

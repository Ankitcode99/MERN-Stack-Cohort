const fs = require('fs');
const path = require('path');

function cleanFile () {
    let data = fs.readFileSync(path.join(__dirname, "data.txt"), "utf8");
    data = data.replace(/\s+/g, ' ');
    fs.writeFileSync(path.join(__dirname,"clean-data.txt"), data);
}


cleanFile();
const fs = require('fs');
const path = require('path');

const text = "The quick brown fox jumps over the lazy dog."
const text2 = " Lorem ipsum dolor sit amet consectetur and consectetur adipiscing elit."

// Write text1 and text2 to file

fs.writeFileSync(path.join(__dirname,"output.txt"), text.concat(text2));

// append text to file again

fs.appendFileSync(path.join(__dirname,"output.txt"), text, "utf8");
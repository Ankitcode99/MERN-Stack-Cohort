const calculateTime = require('../Medium/times')


let range = 100;
for(let i = 1; i <= 4; i++) {
    console.log(`Time taken to sum up from 1 to ${range}`, calculateTime(range));
    range *= 100;
}
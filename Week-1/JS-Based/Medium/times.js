function calculateTime(n) {
    let sum = 0;
    const startTime = Date.now();
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    const endTime = Date.now();
    return (endTime - startTime)/1000;
}

module.exports = calculateTime
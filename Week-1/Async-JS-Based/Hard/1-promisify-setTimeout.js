function wait(n) {
    return new Promise(resolve => {
        setTimeout(()=>resolve("The promise has resolved"), n*1000)
    });
}

wait(5).then(res => {
    console.log(res);
});
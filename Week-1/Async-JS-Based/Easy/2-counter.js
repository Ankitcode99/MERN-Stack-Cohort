let counter = 1;

for(var i=1;i<10;i++){
    setTimeout(()=>{
        console.log(counter);
        counter++;
    }, i*1000)
}
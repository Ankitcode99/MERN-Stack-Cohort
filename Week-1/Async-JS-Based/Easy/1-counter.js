// let time = 1;

// setInterval(()=>{
//     console.log(time)
//     time++
// },1000)

// The code used in above demonstration.

var counter = 1;

function printCounter(){
  console.clear();
  console.log(counter);
  counter = counter+1;
}

setTimeout(printCounter, 3000);

var counter = 0;
for(var i = 0; i < 3; i++){
    counter = counter + i;
}
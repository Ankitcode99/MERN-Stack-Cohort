function busyWait(milliseconds) {
    const startTime = Date.now();
    while (true) {
      if (Date.now() - startTime > milliseconds) {
        break;
      }
    }
  }
  
  // Usage
  console.log("Before busy wait");
  busyWait(10000); // This will make the thread busy-wait for 3000 milliseconds
  console.log("After busy wait");
  
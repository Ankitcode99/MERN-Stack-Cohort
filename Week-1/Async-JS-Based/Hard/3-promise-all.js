function waitOneSecond() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve("Resolved after 1 second");
      }, 1000);
    });
  }
  
  function waitTwoSeconds() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve("Resolved after 2 seconds");
      }, 2000);
    });
  }
  
  function waitThreeSeconds() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve("Resolved after 3 seconds");
      }, 3000);
    });
  }
  
  function calculateTime() {
    const startTime = Date.now();
  
    Promise.all([waitOneSecond(), waitTwoSeconds(), waitThreeSeconds()])
      .then(results => {
        const endTime = Date.now();
        const duration = endTime - startTime;
        console.log("All promises resolved in", duration, "milliseconds");
        console.log("Results:", results);
      })
      .catch(error => {
        console.error("An error occurred:", error);
      });
  }
  
  calculateTime();
  
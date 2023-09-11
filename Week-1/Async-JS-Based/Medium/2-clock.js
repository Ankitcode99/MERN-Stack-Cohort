function getCurrentTime() {
    const now = new Date();
    let meridian = "AM"
    const hours = parseInt(String(now.getHours()).padStart(2, '0'), 10);
    if(hours > 12){
        hours -= 12;
        meridian = "PM"
    }
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    
    console.log( `${hours}:${minutes}:${seconds}  ${meridian}`);
}

setInterval(getCurrentTime, 1000)

// else if

function checkTime(time){

        // 22-4 -> night - done.
        // 5-12-> morning
        // 13=> 16 -> afternoon
        // 16-22 => evening.
    if(time<4 && time >=22){
        console.log("This is night")
    }
    else if(time>=4 && time<=12){
        console.log("morning");
    }else if(time>12 && time <=16){
        console.log("afternoon");
    }else if(time>16 && time <=22){
        console.log("evening");
    }else{
        console.log("Invalid time");
    }
}

checkTime(23); // morning
checkTime(20); // evening
checkTime(28); // invalid
checkTime(14); // afternoon.
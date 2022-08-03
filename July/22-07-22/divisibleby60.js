
// 4320 => 4444, 3333, 2222, 0000, 4333, 4322,

function divisibleBy60(num){
    var found=true;
    var numStr = num.toString(); // 4320
    for(let i=1020; i<=9999; i+=60){
        found=true;
        for(let j=0; j<4; j++){
            if(!numStr.includes(i.toString()[j])){ // 4
                found=false;
                break;
            }
        }
        if(found){
            console.log(i);
        }
    }

}

// divisibleBy60(1111);
divisibleBy60(4320);
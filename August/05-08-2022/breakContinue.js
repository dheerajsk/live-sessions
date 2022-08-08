
function demoContinueAndBreak(){

    let n=9;
    // loop starts at a point
    // ends at a point
    // increament/decreament
    // 
    // for(let i=0; i<=n; i++){
    //     if(i==5){
    //         // skip all remaining interations
    //         break;
    //     }
    //     console.log(i);
    // }

    for(let i=0; i<=n; i++){
        if(i==5){
            continue;
        }
        console.log(i);
    }
}
demoContinueAndBreak();
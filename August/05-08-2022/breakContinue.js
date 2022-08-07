


function demoContinueAndBreak(){

    let n=9;
    for(let i=0; i<=n; i++){
        if(i==5){
            // skip all remaining interations
            break;
        }
        console.log(i);
    }

    for(let i=0; i<=n; i++){
        if(i==5){
            // skip this iteration
            continue;
        }
        console.log(i);
    }

}
demoContinueAndBreak();
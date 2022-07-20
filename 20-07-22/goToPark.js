

function canDoToPark(temp, isRaining){

    if(temp>=20 && temp<=25 && !isRaining){
        console.log("Children can go to park");
    }
    else if(temp>=18 && temp <=20 && isRaining){
        console.log("Children can't go to park");
    }else{
        console.log("Stay at home");
    }
}

canDoToPark(22, false); // can go.
canDoToPark(18, true); // can't go.
canDoToPark(20, true); // invalid

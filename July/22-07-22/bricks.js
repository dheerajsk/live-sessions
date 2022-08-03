

function calculateBricks(){

    let lOfWall = 24;
    let hOfWall = 8;
    let thickness = 0.6;
    let volumeOfWall = lOfWall*hOfWall*thickness;
    let volumneOfBrick = 24*12*8;
    let mortar = 15;

    let noOfBricks = (((100-mortar)/100) * volumeOfWall * (100*100*100) / volumneOfBrick);
    console.log(Math.ceil(noOfBricks));
    
}

calculateBricks();
console.log(Math.round(10.2));
console.log(Math.ceil(10.9));

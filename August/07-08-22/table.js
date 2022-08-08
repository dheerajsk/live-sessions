

function printTable(num){
    for(let i=1; i<=num; i++){
        // print table of i.
        let table="";
        for(let j=1; j<=10; j++){
            table+=(i*j).toString()+" ";
        }
        console.log(table);
    }
}

printTable(10);
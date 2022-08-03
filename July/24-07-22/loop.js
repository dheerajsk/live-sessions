function palin(num){
    var rev=0;
    var x;
    original = num;
    while (num>0){
    x=num%10; //50/10=5
    rev=rev*10+x; // 5
    num=parseInt(num/10) //5
    
    }
    if (original==rev){ //50 . 5
        console.log(rev);
    }
    }
    for (let i=0;i<=50; i++){
        palin(i);
    }


function attendClass(userType){

    if(userType=="student" || userType=="instructor"){
        // allow to attend.
        console.log("allow");
    } else if(userType=="instructor"){
        console.log("allow");
    }else{
        console.log("deny");
    }

}

attendClass("student");
attendClass("instructor");
attendClass("unknown");
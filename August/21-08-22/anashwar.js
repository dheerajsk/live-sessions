function greet(name)
{
    function displayName()
    {
        console.log(name);
    }
    return displayName;
}

const g1 = greet('raj');
console.log(g1);
g1();
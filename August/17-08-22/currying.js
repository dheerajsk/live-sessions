

const add = (a,b,c)=> a+b+c;

console.log(add(4,5,6));

const curryAdd = (sum)=>{
    return (a)=>{
        return (b)=>{
            return (c)=>{
                return sum(a,b,c);
            }
        }
    }
}

const result = curryAdd(add);
console.log(result(1)(2)(3));
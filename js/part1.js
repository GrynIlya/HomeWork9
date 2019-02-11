function applyAll(func,...rest) {
    return func(rest);
}

let getSum=(array)=>{
    return array.reduce((sum,addend) => (sum + addend));
}

let getMultiply = (array) =>{
    return array.reduce((sum,addend) => (sum * addend));
}

console.log(applyAll(getSum,1,2,3));
console.log(applyAll(getMultiply,1,2,3,4));

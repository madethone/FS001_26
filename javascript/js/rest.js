

// Rest paramater
function restValue(...val) {
    return val;
}

console.log(restValue(1,2,3,4));
console.log(restValue('a','b','c','d'));
console.log(restValue(true,false,true,false));
console.log(restValue({name: 'test'},{},{},{}));
console.log(restValue([],[],[],[]));
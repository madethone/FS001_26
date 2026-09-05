let array = [1, 2, 3];
let array2 = [4, 5 ,6];
let array3 = [];

array.forEach((ele) => {
    console.log(ele);
    array3.push(ele);
})

array2.forEach((ele) => {
    console.log(ele);
    array3.push(ele);
})

console.log(array3);

let array4 = [1, 2, 3];
let array5 = [4, 5 ,6];
let array6 = [...array4, ...array5];

console.log(array6);

let array7 = [{ name: 'test' }, { name: '123' }];
let array8 = [4, 5 ,6];
let array9 = [...array7, ...array8];

console.log(array9)



// String
let fullName = "Vireak Dara";
let fruiteName = 'Apple';
let carName = `Tesla`;

console.log(fullName);
console.log(fruiteName);
console.log(carName);

let greeting = "Hello! I'm";

let studentName = "Dara";
let studentAge = "20 Yearsold";
let student = "Student Name:" + studentName + "," + "Student Age:" + studentAge;
console.log(student);
let student2 = `Student Name:${studentName},Student Age:${studentAge}`;
console.log(student2);

// Number
let price = 10.50;
let soldItem = 10;
console.log(price * soldItem);

//Boolean
let isPrimaryUser = true;
let isActiveUser = false;

console.log(isPrimaryUser);
console.log(isActiveUser);

// Null
const a = null;

//Undefined
let b;
console.log(b);
b = 1;//assign number value
console.log(b);


//array
let items = [];
let data = [10, 2, 5];
let data2 = [10, 2, ['a', 'b', 'c']];
let data3 =  [10, 2, ['a', ['apple','book', 'orange'], 'c']];

console.log(items);
console.log(data);
console.log('first element of data', data[0]);
console.log('last element of data', data[2]);

console.log(data2);
console.log(data2[2]);
console.log(data2[2][2])
console.log(data2[2][0])
console.log(data2[2][1])

console.log(data3);
console.log(data3[2]);
console.log(data3[2][1]);
console.log(data3[2][1][2]);


// Object
let classObject = {
    roomNumber: '001',
    name: 'Fullstack Development',
    code: 'FD0001',
    lessons: [ 'HTML', 'CSS', 'Tailwind', 'JavaScript']
};

console.log(classObject);
console.log(classObject.name);
console.log(classObject['code']);

//Type Of

let c = true;
console.log(typeof c);






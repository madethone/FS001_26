// Arithmetic:

// additional(+)
let a = 10;
let b = 20;
let c = 30;
let sumABC = a + b + c;
document.write(sumABC);
document.write("<br><br><br>");
console.log('A + C + C = ',sumABC);

//substaction(-)
let d = 40;
let e = 10;
let subsDE = d - e;
console.log('D - E = ',subsDE);

//multiplicaiton(*)
let f = 20;
let g = 2;
let mulFG = f * g;
console.log('F x G =', mulFG)

//division(/)
let h = 10;
let i = 2;
let divHI = h % i;
console.log('H / I =',divHI);

//remainder(%) -> class practice

//Comparison

//check equal value (== and === )
const username = 'test';
const password = 123456;//Number
const password2 = '123456';//String

console.log(username === 'test');
console.log(password === password2);
console.log(password == password2);

//check not equal value (!= and !==)
const subjectStatus = true;
const isPassed = true;
const isPassed2 = 'true';

console.log(subjectStatus !== isPassed);
console.log('>>>>',subjectStatus != isPassed2);

let uppercase = 'A';
let lowercase = 'a';
console.log(uppercase !== lowercase);

let sellPrice = '10';
let discountPrice = 10;
console.log(sellPrice !== discountPrice);
console.log(sellPrice != discountPrice);

//Greater then(>), Less then,(<), Gerater or equal 
let AB = 10;
let AC = 20;
let AD = 10;
console.log(AB > AC);
console.log(AB < AC);
console.log(AC >= AB);
console.log(AB >= AD);


//Logical && condition statement
let loginInfo = { username: "abc", password: '123', isActive: false };

//considtion statement(if else)
//check if valid username AND password
if(loginInfo.username === 'abc' && loginInfo.password === 123){
    console.log('Login successfully!');
} else {
    console.log('Invalid username or password');
}

//considtion statement(if else)
//check if valid username AND password can be number OR string
if(loginInfo.username === 'abc' && (loginInfo.password === 123 || loginInfo.password === '123')){
    console.log('Login successfully!');
} else {
    console.log('Invalid username or password');
}


//considtion statement(if else)
//check if valid username AND password can be number OR string
//check user status if not active use NOT logical
if(loginInfo.username === 'abc' && (loginInfo.password === 123 || loginInfo.password === '123')){

    //not logical(!)
    if(!loginInfo.isActive){

        console.log('Your user inactive');

    } else {
        
        console.log('Login successfully!');
    }

} else {
    console.log('Invalid username or password');
}


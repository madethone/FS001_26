// 1. declare initial value = where it start
// 2. where it stop
// 3. step
for(let i = 1; i <= 5; i = i + 1){
    document.write(`<p class='card'>${i}</p>` + '<br>');
    console.log(i);
}

document.write('<hr>');
console.log('----------------')

for(let i = 1; i <= 10; i = i + 1){
    document.write(i + '<br>');
    console.log(i);
}

document.write('<hr>');
console.log('----------------')

for(let i = 5; i <= 10; i = i + 1){
    document.write(i + '<br>');
    console.log(i);
}
document.write('<hr>');
console.log('----------------')

for(let i = 1; i <= 10; i = i + 2){
    document.write(i + '<br>');
    console.log(i);
}

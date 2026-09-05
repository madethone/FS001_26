//1. element selecor

// First element
// document.querySelector('h1').innerText = 'Hi';

// All element
console.log(document.querySelectorAll('h1'))

document.querySelectorAll('h1').forEach(element => {
    element.innerText = 'Hi';
});

// document.querySelectorAll('h1')[0].innerText = 'Hi';
// document.querySelectorAll('h1')[1].innerText = 'Hi';


//2. class selector
document.querySelector('.first-div').innerHTML = '<p>hello</p>';


//3. ID selector
document.querySelector('#first-section').innerHTML = '<div><p>Hello</p></div>'
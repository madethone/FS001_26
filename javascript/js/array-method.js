let array = [10, 20, 50, 70, 90];

//Loop data from array
array.forEach((ele) => {
    document.getElementById('originall-score')
        .innerHTML += `<li>${ele}</li>`
})

//Transform array
function handleTranfrom() {

    //Get input element
    const input = document.getElementById('inputValue');
    console.log(Number(input.value));

    let newArray = array.map((ele) => ele * Number(input.value));

    document.getElementById('new-score').innerHTML = '';

    newArray.forEach((ele) => {
        document.getElementById('new-score')
            .innerHTML += `<li>${ele}</li>`
    })

}

//Find array
function handleFilterValue() {

    //Get input element
    const input = document.getElementById('inputValue');
    console.log(Number(input.value));

    let newArray = array.filter((ele) => ele >= Number(input.value));
    console.log(newArray);

    document.getElementById('new-score').innerHTML = '';

    if (newArray.length === 0) {
        return document.getElementById('new-score').innerHTML = '<li>Not found!</li>';
    }

    newArray.forEach((ele) => {
        document.getElementById('new-score')
            .innerHTML += `<li>${ele}</li>`
    })

}

//Find array
function handleFindValue() {

    //Get input element
    const input = document.getElementById('inputValue');
    console.log(Number(input.value));

    let result = array.find((ele) => ele === Number(input.value));
    console.log(result);

    document.getElementById('new-score').innerHTML = '';

    if (!result) {
        return document.getElementById('new-score').innerHTML = '<li>Not found!</li>';
    }

    document.getElementById('new-score')
        .innerHTML += `<li>${result}</li>`

}

function handleAdd(){

    const input = document.getElementById('inputValue');

    array.push(input.value);

    console.log(Number(input.value));

    document.getElementById('originall-score').innerHTML = '';

    array.forEach((ele) => {
        document.getElementById('originall-score')
            .innerHTML += `<li>${ele}</li>`
    })


}

//Reduce: Homework


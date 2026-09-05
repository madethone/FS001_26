
//Global variable
// let userAnswer = document.getElementById('answer').value;

function handleSubmitAnawer() {

    // Local variable
    let userAnswer = document.getElementById('answer');
    let alertResult = document.getElementById('alert');

    if(userAnswer.value === 30){
        alertResult.innerText = 'Your answer is corrected!'
        alertResult.style.backgroundColor = 'Green';
    } else if (userAnswer.value === '30'){
        alertResult.innerText = 'Your answer is corrected!';
        alertResult.style.backgroundColor = 'Green';
        alertResult.style.color = 'white';
        alertResult.style.padding = '10px';
        alertResult.style.borderRadius = '10px';

    } else {
        alertResult.innerText = 'Your answer is incorrected!'
        alertResult.style.backgroundColor = 'Red';
        alertResult.style.color = 'white';
        alertResult.style.padding = '10px';
        alertResult.style.borderRadius = '10px';
    }

}


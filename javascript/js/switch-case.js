

function handleSubmitAnawer() {

    // Local variable
    let userAnswer = document.getElementById('answer');
    let alertResult = document.getElementById('alert');

    switch (userAnswer.value) {
        case 30:
            alertResult.innerText = 'Your answer is corrected!';
            alertResult.style.backgroundColor = 'Green';
            alertResult.style.color = 'white';
            alertResult.style.padding = '10px';
            alertResult.style.borderRadius = '10px';
            break;
        case '30':
            alertResult.innerText = 'Your answer is corrected!';
            alertResult.style.backgroundColor = 'Green';
            alertResult.style.color = 'white';
            alertResult.style.padding = '10px';
            alertResult.style.borderRadius = '10px';
            break;
        case 10:
            alertResult.innerText = 'Your answer is corrected!';
            alertResult.style.backgroundColor = 'Green';
            alertResult.style.color = 'white';
            alertResult.style.padding = '10px';
            alertResult.style.borderRadius = '10px';
            break;
        case '10':
            alertResult.innerText = 'Your answer is corrected!';
            alertResult.style.backgroundColor = 'Green';
            alertResult.style.color = 'white';
            alertResult.style.padding = '10px';
            alertResult.style.borderRadius = '10px';
            break;
        default:
            alertResult.innerText = 'Your answer is incorrected!'
            alertResult.style.backgroundColor = 'Red';
            alertResult.style.color = 'white';
            alertResult.style.padding = '10px';
            alertResult.style.borderRadius = '10px';
            break;
    }

}


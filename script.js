const ball = document.querySelector ('img');
const input = document.querySelector ('input');
const answer = document.querySelector ('.answer');
const error = document.querySelector ('.error');
const answersArr = ['Tak', 'Nie', 'Istnieje taka możliwość', 'Ciężko powiedzieć...', 'Nie chcesz znać odpowiedzi...', 'Oczywiście!', 'Oczywiście, że nie']

const shakeball = () => {
    ball.classList.add('shake-animation')
    setTimeout(checkInput, 1000);
}


const checkInput = () => {
    if(input.value !== '' && input.value.slice(-1) === '?') {
        generateAnswer ();
        error.textContent = '';
    } else if (input.value !== '' && input.value.slice(-1) !== '?') {
        error.textContent= 'Pytanie powinno być zakończone znakiem zapytania "?"';
        answer.textContent = '';
    } else {
        error.textContent= 'Musisz zadać pytanie.';
        answer.textContent = '';
    }
    ball.classList.remove('shake-animation');
}


const generateAnswer = () => {
const number = Math.floor(Math.random() * 7 );
answer.innerHTML = `<span>Odpowiedź: </span> ${answersArr[number]}`

}

ball.addEventListener ('click', shakeball )

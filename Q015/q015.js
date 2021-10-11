import { Algoritmos } from "../main.js"
const form = document.querySelector('.form')

form.addEventListener('submit', handleSubmit);

function handleSubmit(event){
    event.preventDefault();

    const number1 = Algoritmos.getInputNumberValue('number1');
    const number2 = Algoritmos.getInputNumberValue('number2');
    const number3 = Algoritmos.getInputNumberValue('number3');

    const questao15 = new Algoritmos(number1, number2, number3)
    questao15.questao15()
    questao15.innerResposta()
}


import { Algoritmos } from "../main.js"
const form = document.querySelector('.form')

form.addEventListener('submit', handleSubmit);

function handleSubmit(event){
    event.preventDefault();

    const number1 = Algoritmos.getInputNumberValue('number1');
    const number2 = Algoritmos.getInputNumberValue('number2');
    const number3 = Algoritmos.getInputNumberValue('number3');

    const questao14 = new Algoritmos(number1, number2, number3)
    questao14.questao14()
    questao14.innerResposta()
}


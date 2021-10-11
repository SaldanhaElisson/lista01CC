import { Algoritmos } from "../main.js"
const form = document.querySelector('.form')

form.addEventListener('submit', handleSubmit);

function handleSubmit(event){
    event.preventDefault();

    const number1 = Algoritmos.getInputNumberValue('number1');
    const number2 = Algoritmos.getInputNumberValue('number2');

    const questao13 = new Algoritmos(number1, number2)
    questao13.questao13()
    questao13.innerResposta()
}


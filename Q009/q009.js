import { Algoritmos } from "../main.js"
const form = document.querySelector('.form')

form.addEventListener('submit', handleSubmit);

function handleSubmit(event){
    event.preventDefault();

    const numberRaiz = Algoritmos.getInputNumberValue('number');
    const numberPotencia = Algoritmos.getInputNumberValue('potencia');

    const questao09 = new Algoritmos(numberRaiz, numberPotencia)
    questao09.questao09()
    questao09.innerResposta()
}


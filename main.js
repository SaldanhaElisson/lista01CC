
export class Algoritmos {
    constructor(number1, number2, number3){
        this.number1 = number1;
        this.number2 = number2;
        this.number3 = number3;
        this.resposta;
    }

    questao09(){
        const numberRaiz = this.number1 ** (1/2)
        const potencia= this.number1 ** this.number2
       
        // se o numero da raiz não for inteiro irá colocar o texto + um valor aproximado
        const raiz= Number.isInteger(numberRaiz) ? numberRaiz : `O valor da raiz se encontra nos numeros irracionais e é aproximadamente ${numberRaiz.toFixed(2)}`

        this.resposta = `
            Potencia: ${potencia} </br>  Raiz: ${raiz}
        `
        
    }

    questao10(){
        this.resposta = `Media aritmetica ${((this.number1+this.number2+this.number3)/3).toFixed(2)}`
    }

    questoa11(){
        this.resposta = ` O preço total é R$ ${(this.number1 * this.number2).toFixed(2)} `
    }

    questao12(){
        const Valuedelta = (this.number2 ** 2)-4*this.number1*this.number3 
        if(Valuedelta < 0){
            return this.resposta = `não possui valores reais`
        }
        const valueX1 = [-this.number2 + (Valuedelta ** 1/2)] / 2*this.number1
        const valueX2= [-this.number2 - (Valuedelta ** 1/2)] / 2*this.number1
        this.resposta = ` X1 = ${valueX1} e X2 = ${valueX2} `
        
    }

    questao13(){
        this.number3 = this.number1
        this.number1 = this.number2
        this.number2 = this.number3

        this.resposta = `A = ${this.number1} B = ${this.number2}`
    }

    questao14(){
        this.resposta = `A resposta é ${this.number1 + ( this.number2 - 1)* this.number3}`
    }

    questao15(){
        this.resposta = `A resposta é ${this.number1 * [this.number2 ** (this.number3-1)]} `
    }

   innerResposta(){
        const result = document.getElementById('innerResult')
        console.log(result)
        result.innerHTML = `<p> ${this.resposta} </p>`
    }

    static getInputNumberValue(id) {
        return Number(document.getElementById(id).value);
      }
}


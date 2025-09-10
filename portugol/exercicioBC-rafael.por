programa {
  funcao inicio() {
    //1005
    real a,b, media
    escreva("Valor A: ")
    leia(a)
    escreva("Valor B: ")
    leia(b)
    media=(a*3.5+b*7.5)/11
    escreva("Valor da média é:"+ media)

   //1006
   real a,b,c, media
    escreva("Valor A: ")
    leia(a)
    escreva("Valor B: ")
    leia(b)
    escreva("Valor C: ")
    leia(c)
    media=(a*2+b*3+c*5)/10
    escreva("Valor da média é:"+ media)

    //1008

    inteiro numero,valor,horas
    real salario, valorHora
    escreva("Número de funcionários:")
    leia(numero)
    escreva("horas trabalhadas: ")
    leia(horas)
    escreva("Valor por hora: ")
    leia(valor)
    salario=horas*valorHora
    escreva("Salário R$ "+salario, ",00")

    //1009

    real nome, salario, vendas
    inteiro vendasMesal
    escreva("Nome do vendedor: ")
    leia(nome)
    escreva("Salário mensal do vendedor R$ ")
    leia(salario)
    escreva("valor de vendas mensais R$ ")
    leia(vendas)
    vendasMesal= (salario+vendas)*(15/100)
    escreva("Salário mensal R$ "+ vendasMesal,",00")

    //1010

   inteiro codPeca1, codPeca2, qtdPeca1, qtdPeca2, valor_total_pecas
   real valorUnit1, valorUnit2, total
   escreva("Digite o código da peça 1: ")
   leia(codPeca1)
   escreva("Digite a quantidade da peça 1: ")
   leia(qtdPeca1)
   escreva("valor unitário da peça 1: ")
   leia(valorUnit1)
   escreva("Digite o código da peça 2: ")
   leia(codPeca2)
   escreva("Digite a quantidade da peça 2: ")
   leia(qtdPeca2)
   escreva(" valor unitário da peça 2: ")
   leia(valorUnit2)
   total= (qtdPeca1*valorUnit1)+(qtdPeca2*valorUnit2)
   escreval("Total a pagar: R$ "+ total)

   //1014

  real distancia, gasolina
  inteiro consumoMedio
   escreva("Distância total percorrida: ")
   leia(distancia)
   escreva("Digite o total de combustível gasto: ")
   leia(gasolina)
   consumoMedio= distancia / gasolina
   escreval("Consumo médio do automóvel: "+ consumoMedio, " km/l")


   //1018

     inteiro valor_original, valor, notas100, notas50, notas20, notas10, notas5, notas2, notas1
     escreva("Digite o valor em reai: ")
     leia(valor_original)
    valor=valor_original

    notas100= valor/100 //5
    valor= valor%100  //76
    
    notas50= valor/50 //1
    valor= valor%50  //26
    
    notas20= valor/20 //1
    valor= valor%20  //6
    
    notas10= valor/10  //0
    valor= valor%10  //6
    
    notas5= valor/5  //1
    valor= valor%5  //1

    notas2= valor/2  //1
    valor= valor%2  //1
    
    notas1= valor/1
    valor= valor%1

    notas1=valor
    escreva("Valor: R$" + valor_original)
    escreva("\nNotas R$100: "+ notas100)
    escreva("\nNotas R$50: "+ notas50)
    escreva("\nNotas R$20: "+ notas20)
    escreva("\nNotas R$10: "+ notas10)
    escreva("\nNotas R$5: "+ notas5)
    escreva("\nNotas R$2: "+ notas2)
    escreva("\nNotas R$1: "+ notas1)

  }
}

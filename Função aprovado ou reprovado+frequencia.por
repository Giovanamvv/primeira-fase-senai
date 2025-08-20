programa {
  funcao inicio() {
    real nota1, nota2, nota3, media, frequencia
    nota1= 8
    nota2= 7
    nota3= 10
    media = (nota1+nota2+nota3)/3
    frequencia=0.8
  
    escreva(media, "\n")
    se(media>=7 e frequencia >=0.7){
      escreva("aprovado")
    }senao{
      escreva("reprovado")
    }
     

  }
}

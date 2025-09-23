// alert("ex01 executando ok bem bom!")

//  let idade
// idade= Number(prompt("Digite sua idade:"))
// if(idade>=18){
//     alert("Maior de idade")
//     alert("Pode sair para o intervalo")
// }else{
//     alert("Dimenó")
//     alert("Pode sair pro recreio")
// }
// console.log(idade);


// //Ex04////////// %2==0-DIVISAO POR DOIS SE0PAR SE1IMPAR
// alert("ex04 ta prestando!")
// let numero
// numero= Number(prompt("Digite o número: "))
// if(numero%2==0){
//     alert("par")
// }else{
//     alert("ímpar")
// }


// ///Ex05.1//////////
// let senha

// senha = prompt("Digite a senha:")
// if(senha == 1234){
//     alert("ACESSO PERMITIDO")
// }else{
//     alert("Acesso negado 🚫")


// }

// //Ex05.2//////////
// let A, B
// A = Number(prompt("Digite o primeiro número:"))
// B = Number(prompt("Digite o segundo número:"))
// if(A > B){
//     alert("Primeiro: "+ A )
//     // alert("Primeiro ("+ A +") é maior que o segundo ("+ B +")")
// }else if(B > A){
//     alert("Segundo: "+ B)
//     // alert("Segundo ("+ B +") é maior que o primeiro ("+ A +")")
// }else{
//     alert("São iguais")

// }




//Ex5.3//////////
// let placa
// placa= Number(prompt("Último número da placa:  "))

// if(placa==0){
//     alert("Não pode rodar ma segunda-feira")
// }
// if(placa==1){
//     alert(" Não pode rodar na segunda-feira")
// }
//  //outro jeito//--->5.3
//  let placa
// placa= Number(prompt("Último número da placa:  "))

// if(placa==0 || placa==1){
//     alert("Não pode rodar na segunda-feira")
// }else if(placa==2 || placa==3){
//     alert("Não pode rodar na terça-feira")
// }else if(placa==4 || placa==5){
//     alert("Não pode rodar na quarta-feira")
// }else if(placa==6 || placa==7){
//     alert("Não pode rodar na quinta-feira")
// }else if(placa==8 || placa==9){
//     alert("Não pode rodar na sexta-feira")
// }else{
//     alert("Sai do celular e digita direito")
// }



// //Ex5.4//////////
// let  horario, local, palestra, nome
// palestra= Number(prompt("Número da palestra:"))
// if(palestra==1){
//    alert("Animações com Scratch, 19h, Laboratório 305")
   
// }else if(palestra==2){
//    alert ("Scratch para gamers, 20h, Laboratório 512")
  
// }else if(palestra==3){
//   alert ( "JavaScript para leigos, 19h, Laboratório 101")
   
// }else if(palestra==4){
//  alert ("Tópicos avançados de JavaScript, 20h, laboratório 305")
 
// }else if(palestra==5){
//   alert  ("Vida e carreira, 21h, Auditório")
  
// }   


// //Ex5.5//////////
// let media1, media2, mediaFinal
// media1= Number(prompt("Digite a primeira média: "))
// media2= Number(prompt("Digite a segunda média: "))
// mediaFinal= (media1 + media2) / 2
// if(mediaFinal>=7){
//    alert("Aprovado com média: "+ mediaFinal)
// }else{
//    alert("Aprovado com média: "+ mediaFinal)
// }


// //Ex5.6//////////
// let pontuacao
// pontuação= Number(prompt("Digite a pontuação: "))
// if(pontuacao<=10){
//     alert("PÉSSIMO!!!! Não leve a vida tão a sério. Afinal, você nem sairá vivo dela")
// }else if(pontuacao>10 &  pontuacao<=100){
//      alert("GOOD GOOD!!!! Grandes coisas nunca vêm da zona de conforto ")

// }else if(pontuacao>100 & pontuacao<=200){
//      alert("EXCELENTE!!!! A vida é 10% o que acontece com você e 90% como você reage a isso")
    
// }else if(pontuacao>200){ 
//      alert("PERFEITO!!!! Seja a mudança que você quer ver no mundo")
// }

//Ex5.7//////////
let dias
let valorDiaria
let totalBruto, totalLiquido
let desconto10, desconto15, multa=150



dias= Number(prompt("Número de dias: "))
if(dias<=5){
  valorDiaria = 100

}else if(dias<=10){
 valorDiaria =90

}else if(dias>=11){
   valorDiaria= 80
}

totalBruto=dias*valorDiaria
console.log(totalBruto);

desconto10= totalBruto*10/100
desconto15= totalBruto*15/100

totalLiquido= totalBruto-(desconto10+desconto15)+multa

//dias
//valorDiaria
//totalBruto
//desconto10
//desconto15
//multa

 alert("Número de dias: "+ dias +
   "\nValor da diária: R$"+ valorDiaria.toFixed(2) +
   "\nTotal bruto: R$"+ totalBruto.toFixed(2) +
   "\nDesconto 10%: R$"+ desconto10.toFixed(2) +
   "\nDesconto 15%: R$"+ desconto15.toFixed(2) +
   "\nMulta: R$"+ multa +"\n============="+
   "\nTotal a pagar: R$ " + totalLiquido.toFixed(2).replace(".",",") )



// //Ex5.8//////////
// let idade

idade= Number(prompt("Digite sua idade:"))
if(idade<=16){
   alert("Não pode votar!")
}else if(idade>16 & idade<=17){
   alert("Voto Facultivo!")
}else if(idade>=18 & idade<=65){
   alert("Voto Obrigatório!")
}else if(idade>65){
   alert("Voto Facultativo!")
}
   
//Ex5.9//////////
let metros, genero
metros= Number(prompt("Digite a altura em metros: "))
genero= prompt("Digite o gênero (M/F): ")




///Ex5.10//////////
let maca
maca= Number(prompt("Número de maçãs: "))
if(maca<12){ 
   alert("R$0,30 por maçã")
}else if(maca>=12){
   alert("R$0,25 por maçã")
}

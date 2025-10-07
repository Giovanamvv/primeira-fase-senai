// ex.2-Imprima os números de 10 a 1 em ordem decrescente.

// for(let i=10; i>1; i--){
//    alert(i)
    // }

//ex.3-Calcule a soma dos números de 1 a 100.
// let soma=0 
// alert(soma);
// for(let i=1; i<=100; i++){
//    soma=soma+i
// }
// alert(soma);

//ex.4-Imprima a tabuada do 5.
// for(let i=1; i<=10;i++){
//     alert("5 x " + i + " = " + (5 * i))
// }

// ex.5-Altere o programa anterior para fornecer a tabuada do número que o usuário pedir.

let numero= Number(prompt("Tabuada de que? "))   
for(let i=1; i<=10; i++){
  
   alert(numero + "x" + i+ " = " + (numero * i))
   
}

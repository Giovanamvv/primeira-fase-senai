// setInterval(()=>{
//     console.log("executei")
// },2000)

const prompt = require('prompt-sync') ()

let contadorInicial = Number(prompt("Digite um valor inicial: "))
let contadorFinal = Number(prompt("Digite um valor final: "))

let intervalo = setInterval(()=>{
    contadorInicial++
    console.log(contadorInicial)
    if(contadorInicial === contadorFinal){
        clearInterval(intervalo)
    }
},500)


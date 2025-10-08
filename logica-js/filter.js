// const numeros = [2,3,5,8,10]

// const numerosMaioresQueCinco = numeros.filter(valor => valor>5)
// console.log(numerosMaioresQueCinco)

// const numerosPares = numeros.filter(valor => valor % 2 == 0)
// console.log(numerosPares)



const usuarios = [
    {nome: "João", idade:32},
    {nome: "Mary", idade:17},
    {nome: "Jurandir", idade:28}
]

const usuariosMenoresDeIdade = usuarios.filter(usuario => usuario.idade<18)
console.log(usuariosMenoresDeIdade)

// const numeros = [3,5,8,10]

// //map- manipulador de array
// const valoresDobrados = numeros.map((valor) => valor*2 )
// console.log(numeros)
// console.log(valoresDobrados)

//--------------------------------

const usuarios = [
    {nome: "João", idade:32},
    {nome: "Mari", idade:17},
    {nome: "Jurandir", idade:28}
]

// const nomesUsuarios= usuarios.map(usuario => usuario.nome)
// console.log(nomesUsuarios)

const idadeUsuarios= usuarios.map(usuario => usuario.idade)
console.log(idadeUsuarios)

for(let usuario of idadeUsuarios){
    console.log(usuario)
}


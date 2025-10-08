let i = 0
while(i<3){
    alert("Valor do i: "+i)
    i++
}

for(let i = 0; i<3; i++){
     alert("Valor do i: "+i)
}

let soma = 0
for(let i=0; i<10; i++){
    let nota =Number(prompt(`Digite a ${i} +  ªnota`))
    soma+= nota
    
    //+= atalho
}
 alert("Soma: "+ soma)

 const nomes=["Dona Bete", "Mano Juca","Lucio fernando", "Capitão Ganso"]
 for(let i= 0; i<4; i++){
    alert(nome[i])
 }

 let alunos = ["João", "Maria", "Ricardo", "Joana"]
 alunos.push("João")
 for(let i=0; i<alunos.length; i++){
    console.log("aluno: ", alunos[i])
 }

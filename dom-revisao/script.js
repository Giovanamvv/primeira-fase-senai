let usuario 

function cadastrarUsuario(){
    // console.log("até aqui deu");
usuario = document.getElementById("inputUsuario").value
document.getElementById("inputUsuario").value = ``

document.getElementById("resultado").innerHTML = "Usuário cadastrado com sucesso: " + usuario


}
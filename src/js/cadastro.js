let url = "http://localhost:3100/api/jogadores";

let cadastra = async () => {
    let player = {
        email: document.getElementById("email").value,
        senha: document.getElementById("psw").value
    }
    const response = await fetch(url);
    const myJson = await response.json(); 

    for(var i = 0; i < myJson.length; i++) {
        if(myJson[i].email == player.email){
            alert("Esse email já está em uso!");
            throw new Error("Este email já está cadastrado no sistema!");
        }
    }

    try {
        const config = {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(player)
    }
    const response =  await fetch(url, config);
    if (response.ok)
        alert("Usuário criado com sucesso!"); 
        window.location.href = "file:///C:/Users/joaos/repository/valorant-free-agents-brazil/src/views/edita-perfil.html";
    } catch (error) {
        console.log(error);
    }
}
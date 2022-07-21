document.addEventListener("DOMContentLoaded", function() {
    preencheForm();
});

let preencheForm = async () => {
    const response = await fetch('http://localhost:3100/api/jogadores/' + sessionStorage.getItem("usuario-logado"));
    const myJson = await response.json(); 

    document.getElementById("email").value = myJson.email;
    document.getElementById("senha").value = myJson.senha;
    document.getElementById("fName").value = myJson.fName;
    document.getElementById("lName").value = myJson.lName;
    document.getElementById("nickName").value = myJson.nickName;
    document.getElementById("role").value = myJson.role;
    document.getElementById("rank").value = myJson.rank;
    document.getElementById("birthDate").value = myJson.birthDate;
    document.getElementById("profilePic").value = myJson.profilePic;
}

function atualizaPerfil ()  {
    let url = "http://localhost:3100/api/jogadores/";

    let player = {
        email: document.getElementById("email").value,
        senha: document.getElementById("senha").value,
        id: sessionStorage.getItem("usuario-logado"),
        fName: document.getElementById("fName").value,
        lName: document.getElementById("lName").value,
        nickName: document.getElementById("nickName").value,
        role: document.getElementById("role").value,
        rank: document.getElementById("rank").value,
        birthDate: document.getElementById("birthDate").value,
        profilePic: document.getElementById("profilePic").value,
        rating: 5,
        sexo: 'm'
    }
    console.log(player);

    try {
        const config = {
            method: "PUT",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(player)
    }
    const response =  fetch(url + player.id, config);
    if (response.ok){ 
        alert("Perfil atualizado!");
        console.log(response);
    }
    } catch (error) {
        console.log(error);
    }

}
let url = "http://localhost:3100/api/jogadores/";

async function realizaLogin () {
    let email = document.getElementById("email").value;
    let senha = document.getElementById("senha").value;

    console.log(email);
    
    console.log(senha);

    try{
        const response = await fetch(url);
        if(!response.ok){
            throw new Error(`Error! Status: ${response.status}`);
        }
    
        const myJson = await response.json();
        for(var i = 0; i < myJson.length; i++) {
            if(myJson[i].email == email && myJson[i].senha == senha){
                sessionStorage.setItem("usuario-logado", myJson[i].id);
                console.log(sessionStorage.getItem("usuario-logado"));
                alert("Logado com sucesso!");
            }
        }

        
    } catch (err) {
        console.log(err);
    }
}
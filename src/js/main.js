function toggleMenu(){
    const toggle = document.querySelector('.toggle');
    const navigation = document.querySelector('.navigation');
    toggle.classList.toggle('active');
    navigation.classList.toggle('active');
}

function masc(){
	sessionStorage.setItem("cenario-selecionado", "m");
	console.log(sessionStorage.getItem("cenario-selecionado"));
	location.reload();
}
function fem(){
	sessionStorage.setItem("cenario-selecionado", "f");
	console.log(sessionStorage.getItem("cenario-selecionado"));
	location.reload();
}

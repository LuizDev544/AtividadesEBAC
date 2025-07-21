document.addEventListener('DOMContentLoaded', function () {

const avatar = document.querySelector('#avatar');
const name = document.querySelector('#name');
const usarname = document.querySelector('#usarname');
const repositorio = document.querySelector('#repositorio');
const seguidores = document.querySelector('#seguidores');
const seguindo = document.querySelector('#seguindo');
const link = document.querySelector('#link');

fetch('https://api.github.com/users/LuizDev544')
    .then(function(resposta) {
        return resposta.json();
    }) 

    .then(function(dados) {
        console.log(dados)

        avatar.src = dados.avatar_url;
        name.innerText = dados.name;
        usarname.innerText = dados.login;
        repositorio.innerText = dados.public_repos;
        seguidores.innerText = dados.followers;
        seguindo.innerText = dados.following;
        link.href = dados.html_url;
    })

    .catch(function(erro) {
        alert('erro:', erro)
    })
})
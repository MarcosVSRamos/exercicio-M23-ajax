document.addEventListener('DOMContentLoaded', function() {

    const nameElement = document.querySelector('#name');
    const usernameElement = document.querySelector('#username');
    const avatarElement = document.querySelector('#avatar');
    const reposElement = document.querySelector('#repos');
    const followersElement = document.querySelector('#followers');
    const followingElement = document.querySelector('#following');

    fetch('https://api.github.com/users/marcosVSRamos')
        .then(function(res) {

            if (!res.ok) {
                throw new Error('Usuário não encontrado');
            }
            return res.json();
        })
        .then(function(json) {

            nameElement.innerText = json.name;
            usernameElement.innerText = json.login;
            avatarElement.src = json.avatar_url;
            followersElement.innerText = json.followers;
            followingElement.innerText = json.following;
            reposElement.innerText = json.public_repos;

        })
        .catch(function(erro) {
            alert('Ocorreu um erro, tente novamente');
            console.error(erro);
        });

})
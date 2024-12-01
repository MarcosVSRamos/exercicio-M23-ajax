$(document).ready(function(){

    const nameElement = $('#name');
    const usernameElement = $('#username');
    const avatarElement = $('#avatar');
    const reposElement = $('#repos');
    const followersElement = $('#followers');
    const followingElement = $('#following');
    const linkElement = $('#link');

    const endpoint = 'https://api.github.com/users/marcosVSRamos';
        
        $.ajax(endpoint).done(function(resposta) {

            nameElement.text(resposta.name);
            usernameElement.text(resposta.login);
            avatarElement.attr('src', resposta.avatar_url);
            followersElement.text(resposta.followers);
            followingElement.text(resposta.following);
            reposElement.text(resposta.public_repos);
            linkElement.attr('href', resposta.html_url);
            
        })

})
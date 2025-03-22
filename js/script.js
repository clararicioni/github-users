var usersHistory = []

function search(){
    var username = document.getElementById("inputUsername").value
    var url = `https://api.github.com/users/${username}`;
    $.getJSON(url, (user) => {
        showUserData(user);
        if(isNew(user)){
            saveUser(user);
           showNewUserHistory(user); 
        }
        clearError();
    }).fail( () => {
        showUserData({});
        showError("Erro: Não encontrado");
    });
}

function saveUser(user){
    usersHistory.push(user);
}

function isNew(user){
    return usersHistory.filter( (usr) => usr.login === user.login ).length === 0;
}

function showNewUserHistory(user){
    document.getElementById("history").innerHTML += `<div class="col"><img src=${user.avatar_url} width="110"
                                                        height="110" class="shadow rounded"></div>`
}

function showError(msg){
    document.getElementById("error").innerHTML = `<div class='alert alert-danger mt-1' role='alert'>${msg}</div>`;
}

function clearError(){
    document.getElementById("error").innerHTML = "";
}

function showUserData(user){
    document.getElementById("title").innerHTML = user.html_url ? `<div class="display-6 mt-5 mb-2 fw-bold">
                    Dados do Usuário:
                </div>` : "";
    document.getElementById("name").innerHTML = user.name || "";
    document.getElementById("html_url").innerHTML = user.html_url ? `<a href="${user.html_url}" target="_blank">${user.html_url}</a>` : "";
    document.getElementById("company").innerHTML = user.company || "";
    document.getElementById("avatar_url").innerHTML = user.avatar_url ?  
                                                                    `<img src=${user.avatar_url} width='220' height='220' class='shadow rounded'>`
                                                                    :
                                                                    "";  
    document.getElementById("titleHistory").innerHTML = `<div class="display-6 mt-5 fw-bold">Usuários Pesquisados:</div>`;
                                                                                                                           
}
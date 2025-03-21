function search(){
    var username = document.getElementById("inputUsername").value
    var url = `https://api.github.com/users/${username}`;
    $.getJSON(url, (user) => {
        document.getElementById("name").innerHTML = user.name;
        document.getElementById("html_url").innerHTML = user.html_url;
        document.getElementById("company").innerHTML = user.company;
        document.getElementById("avatar_url").innerHTML = `<img id="avatar_url" src=${user.avatar_url} width="110"
        height="110" class="shadow rounded">`
    });
}
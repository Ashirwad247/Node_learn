document.querySelector('.button')
.querySelector('click', loadUsers);

function loadUsers(){
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://api.github.com/users', true)
    console.log('lsjlkdjslj')
    xhr.onload = function(){
        if(this.status == 200){
            let users = JSON.parse(this.responseText);
            console.log(users)
        }
    }

    xhr.send();
}
var a = document.querySelector('p')
function login() {
    var name = document.getElementById('name').value;
    var password = document.getElementById('password').value;

    if (name === 'fayzulloh' && password === '123456789') {
        alert('Добро пожаловать!');
        a.classList.add('pi')
    } else {
        a.textContent = 'Ошибка: неверное имя пользователя или пароль';
        a.style.color=('red')
        a.classList.add('po')
    }
}
var names = [];
var userName;
var flag = false;

for (var i = 1; i <= 5; i++){
    names.push( prompt("Введите любое имя:", "") );
}

userName = prompt("Введите имя пользователя:", "Имя пользователя");

for (var i = 0; i < 5; i++){
    if (names[i] == userName){
        flag = true;
    }
}

if (flag){
    alert(userName + ", Вы успешно вошли!");
}else {
    alert("Это имя отсутствует в списке");
}

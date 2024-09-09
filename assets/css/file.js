// задание 1

let num1 = prompt ('Введите число для переменной a');
let num2 = prompt ('Введите число для переменной b');

num1 = parseInt(num1);
num2 = parseInt(num2);

function task1(a,b){
    for (let start = a; start <= b; start++){

        if (start !== 0 && start % 2 === 0){
            alert (start);
        }

    }
}

task1(num1,num2);



// задание 2

let i = 0;
while (i < 3) {
    alert( `number ${i}!`);
    i++;
}



// задание 3

let GuestNumber = prompt('Введите значение больше 10');

while (GuestNumber < 10){
    GuestNumber = prompt('Введите значение больше 10. Попробуйте еще раз!');
}



// задание 4

let set1 = prompt ('Введите число для переменной a');
let set2 = prompt ('Введите число для переменной b');

set1 = parseFloat(set1);
set2 = parseFloat(set2);

function FindMin(a,b){
    if (a > b){
        let min = b;
        answer = `Наименьшее число это ${min}`;
    }

    else if (a < b) {
        min = a;
        answer = `Наименьшее число это ${min}`;
    }

    else {
        answer = `Оба числа одинаковы`;
    }

    alert(answer);
}

FindMin(set1,set2);



// задание 5

function ask(question, yes, no) {
    (confirm (question, yes, no)) ? yes() : no();
}

ask(
    "Вы согласны?",
    function() { alert("Вы согласились."); },
    function() { alert("Вы отменили выполнение."); }
);



// задание 6

function checkAge(age) {
    (age > 18) ? true : confirm('Родители разрешили?');
}

checkAge(17);


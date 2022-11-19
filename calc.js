let screen = document.querySelector('.screen');
let buttons = document.querySelectorAll('.btn');
let clear = document.querySelectorAll('.btn-clear');
let result = document.querySelector('.btn-result');

buttons.forEach(function (button) {
    button.addEventListener('click', function (e) {
        let value = e.target.dataset.num;
        screen.value += value;
    })
})
result.addEventListener('click', function (e) {
        if (screen.value === "") {
            screen.value = "Input is empty";
        }else {
            let answer =eval(screen.value);
            screen.value =answer;
        }
    })
clear.forEach(function (button) {
    button.addEventListener('click', function (e) {
        screen.value = "";
    })
})

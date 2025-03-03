var input = document.getElementById('input');
var btn = document.querySelectorAll('.input-num, .operations');
var clear = document.querySelector('.clear');
var submit = document.querySelector('.submit');

expersion = "";

btn.forEach(elem => {
    elem.addEventListener('click', () => {
        let value = elem.textContent;
        if (value == 'x') {
            value = '*';
        }
        expersion += value;
        input.value = expersion;
    })
})

clear.addEventListener('click', () => {
    expersion = "";
    input.value = "";
})


submit.addEventListener('click', () => {
        expersion = eval(expersion)
        input.value = expersion;
})


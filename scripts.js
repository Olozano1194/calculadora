const btns = document.querySelectorAll('.btn');
const result =document.querySelector('.resultado');


btns.forEach(btn => {
    btn.addEventListener('click', () => {

        const btnApretado = btn.textContent;
        
    if (btnApretado === '=') {
        calculateResult();

        }else if (btn.id === 'c') {
                clear();

        }else if (btn.id === 'd') {
            limpiar();
        }

    else {
        appendToDisplay(btnApretado);
    }

    });
});

let displayValue = '';


function appendToDisplay(value) {
    displayValue += value;
    result.value = displayValue;
}

function clear() {
    displayValue = '';
    result.value = '0';
}

function calculateResult() {
    try {
        const results = eval(displayValue);
        result.value = results;
        displayValue = results.toString();
        
    } catch (error) {
        result.value = 'error';
        
    }
}

function limpiar() {

    if (result.value.length === 1) {
        result.value = '0';
        clear();

        }else {
            result.value = result.value.slice(0, -1);

    }
    
}













function sumar(num1, num2) {

    let suma = num1 + num2;
    return suma;
}

let suma = sumar(14,6);
console.log(suma);


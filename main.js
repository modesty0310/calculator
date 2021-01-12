const result = document.querySelector('.result');
const input = document.querySelector('.input');
const items = document.querySelector('.items');
const buttons = document.querySelectorAll('button')
let numberCheck = false;


buttons.forEach(btn => {
    btn.addEventListener('click', e => {
        if(e.target.className === 'number'){
            updateDisplay(e);
            numberCheck = true;
            return;
        }
        switch(btn.dataset.type) {
            case 'operator':
                if(numberCheck){
                    updateDisplay(e);
                    numberCheck = false;
                }
                input.focus();
                break;
            case 'CE' :
                result.innerText = "";
                input.value = "";
                input.focus();
                numberCheck = true;
                break;
            case 'C' :
                input.value = "";
                input.focus();
                numberCheck = true;
                break;
            case 'equal' :
                numberCheck = true;
                calculate();
                break;
            case 'back-space' :
                input.value = input.value.substring(0,input.value.length-1);
                input.focus();
                break;
        }
    })
})

function updateDisplay (e) {
    const text = e.target.innerText;
    input.value += text;
    input.focus();
}

// items.addEventListener('click', e => {
//     const text = e.target.innerText;
//     // let text = input.innerText;
//     if(text === "="){
//         calculate();
//         return;
//     }else if(text === "C"){
//         input.value = "";
//         input.focus();
//         return;
//     }else if(text === "CE"){
//         result.innerText = "";
//         input.value = "";
//         input.focus();
//         return;
//     }
//     input.value += text;
//     input.focus();
// });

input.addEventListener('keypress', e=>{
    if(e.key === 'Enter'){
        calculate();
        return;
    }

})




function numCheck(event) { 
    if(event.key === '.' 
    || event.key === '-'
    || event.key === '+'
    || event.key === '*'
    || event.key === '/')
        {if(numberCheck){
            numberCheck = false;
            return true
        }
    }
    else if(event.key === 'Eneter'
    || event.key >= 0 && event.key <= 9) {
        numberCheck = true;
    return true;
    }
    return false;
}


function calculate () {
    if(result.innerText && (input.value[0] === '+' || input.value[0] === '-' || input.value[0] === '*' || input.value[0] === '/')){
        result.innerText += input.value;
        result.innerText = eval(result.innerText);
        input.value = "";
        return;
    }
    result.innerText = eval(input.value);
    input.value = "";
    return;
}

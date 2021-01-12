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
                    updateResult(e);
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

function numCheck(e) { 
    if(e.key === '-'
    || e.key === '+'
    || e.key === '*'
    || e.key === '/'){
        if(numberCheck){
            updateResult(e);
            numberCheck = false;
        }
        input.focus();
    }else if(e.key === 'Enter'){
        console.log('엔터');
        calculate();
        numberCheck = true;
    }else if(e.key >= 0 && e.key <= 9){
        numberCheck = true;
        console.log('숫자');
        updateDisplay (e);
    }else if(e.key === '.' ){
        if(numberCheck){
            numberCheck = false;
        }
    }
    return false;
}

function updateDisplay (e) {
    const text = e.target.innerText || e.key;
    if(Number(input.value) ===  eval(result.innerText.substring(0, result.innerText.length-1)) ||
        input.value === result.innerText
    ){
        input.value = text;
        input.focus();
        return;
    };
    input.value += text;
    input.focus();
};

function updateResult (e) {
    console.log(numberCheck);
    const text = e.target.innerText || e.key;
    if(input.value === result.innerText){
        result.innerText += text;
        return;
    }
    result.innerText += input.value + text;
    input.value = eval(result.innerText.substring(0, result.innerText.length-1));
};


function calculate () {
    result.innerText += input.value;
    input.value = eval(result.innerText);
    result.innerText = input.value;
}

// function numCheck(e) { 
//     if(e.key === '.' 
//     || e.key === '-'
//     || e.key === '+'
//     || e.key === '*'
//     || e.key === '/')
//         {if(numberCheck){
//             numberCheck = false;
//             return true
//         }
//     }
//     else if(e.key === 'Eneter'
//     || e.key >= 0 && e.key <= 9) {
//         console.log(e.key);
//         numberCheck = true;
//     return true;
//     }
//     return false;
// }



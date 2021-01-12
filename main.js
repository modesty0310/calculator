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

function updateDisplay (e) {
    const text = e.target.innerText;
    if(Number(input.value) ===  eval(result.innerText.substring(0, result.innerText.length-1)) ||
        input.value === result.innerText
    ){
        console.log(1);
        input.value = text;
        input.focus();
        return;
    };
    input.value += text;
    input.focus();
};

function updateResult (e) {
    if(input.value === result.innerText){
        result.innerText += e.target.innerText;
        return;
    }
    result.innerText += input.value + e.target.innerText
    input.value = eval(result.innerText.substring(0, result.innerText.length-1));
};

input.addEventListener('keypress', e=>{
    if(e.key === 'Enter'){
        calculate();
        return;
    }

})


function calculate () {
    result.innerText += input.value;
    input.value = eval(result.innerText);
    result.innerText = input.value;
}


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

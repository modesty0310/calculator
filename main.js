const result = document.querySelector('.result');
const input = document.querySelector('.input');
const items = document.querySelector('.items');
let numberCheck = false;


items.addEventListener('click', e => {
    const text = e.target.innerText;
    // let text = input.innerText;
    if(text === "="){
        calculate();
        return;
    }else if(text === "C"){
        input.value = "";
        input.focus();
        return;
    }else if(text === "CE"){
        result.innerText = "";
        input.value = "";
        input.focus();
        return;
    }
    input.value += text;
    input.focus();
});

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
        console.log(result.innerText);
        result.innerText += input.value;
        result.innerText = eval(result.innerText);
        input.value = "";
        return;
    }
    result.innerText = eval(input.value);
    input.value = "";
    return;
}

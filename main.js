const result = document.querySelector('.result');
const input = document.querySelector('.input');
const items = document.querySelector('.items');


items.addEventListener('click', e => {
    const text = e.target.innerText;
    console.log(text);
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
    input.value = input.value+text;
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
    || event.key === '/'
    || event.key === 'Eneter'
    || event.key >= 0 && event.key <= 9) {

    return true;
    }
    return false;
}


function calculate () {
    result.innerText = eval(input.value);
    input.value = "";
    return;
}

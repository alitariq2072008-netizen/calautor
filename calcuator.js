

let numbers=document.querySelectorAll('.num');

let euqalInupt=document.querySelector('.euqal');

let clearAll=document.querySelector('.clear-All')


let DeleteAll=document.querySelector('.Delete-All');

let displayArea=document.querySelector('.display');

let operatorsIA=document.getElementById('operator1');

let euqalAI=document.getElementById('euqal1')


let operators=document.querySelectorAll('.operator');










numbers.forEach(num =>num.addEventListener(('click'),function(){
    displayArea.value+= num.value
}));



operators.forEach(op =>op.addEventListener('click',function(){
    displayArea.value += op.value
}))







clearAll.addEventListener('click', () => displayArea.value='')

euqalInupt.addEventListener('click',()=> displayArea.value= eval(displayArea.value));


DeleteAll.addEventListener('click',function(){
    displayArea.value=displayArea.value.slice(0,-1)
});


















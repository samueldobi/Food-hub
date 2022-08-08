// dishes functions
const minusBtn = document.querySelector('.minus-btn')
const addBtn = document.querySelector('.plus-btn')
// let inputHolder = document.querySelector('.input-manulator').value
// let counterValue = document.querySelector('.input-manulator').value
let counterIndex = 0
let counterValue = document.querySelector('input[name="my-input"]')


// counter increase and decrease function
function reduceCounter(){
    counterValue.value--
    if(counterValue.value <= 1){
       counterValue.value =  0
    }
}
minusBtn.addEventListener('click', reduceCounter)
function addCounter(){
    counterValue.value++
}
addBtn.addEventListener('click', addCounter)
console.log(counterValue)
// console.log(inputHolder.innerHTML++)

// document.querySelector('input[name="my-input"]').value = counterIndex --

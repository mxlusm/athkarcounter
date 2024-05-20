const counterDisplay= document.getElementById('counter');
const incrementBtn= document.getElementById('incrementBtn');
const resetBtn= document.getElementById('resetBtn');

let counter=0;

function changeCounter(){
    counterDisplay.textContent=counter;
}
incrementBtn.addEventListener('click', function(){
    counter++;
   changeCounter();
});

resetBtn.addEventListener('click', function(){
    counter=0;
    changeCounter();
    
});
changeCounter();

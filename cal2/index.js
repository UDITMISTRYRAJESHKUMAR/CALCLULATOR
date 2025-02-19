let display = document.getElementById('inputBox');

let buttons = document.querySelectorAll('button');

let string =''

let buttonsArray = Array.from(buttons)

buttonsArray.forEach(btn => {

   btn.addEventListener('click',(e)=>{
    string = e.target.innerHTML
   })

})
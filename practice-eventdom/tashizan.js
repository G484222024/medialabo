b = document.querySelector('button#calc');
b.addEventListener('click', greeting);
function greeting(){
  let i = document.querySelector('input[name="left"]');
  let a = i.value;
  let n = document.querySelector('input[name="right"]');
  let b = n.value;
  
  let numA = parseInt(a);
  let numB = parseInt(b);
  
  let sum = numA + numB;
  
  let p = document.querySelector('span#answer');
  p.textContent = sum;
}
function changeDom(){
    u.insertAdjacentElement('beforeend',l);
    l.textContent = 'ヨット';

    let i = document.querySelector('img#bluemoon');
    i.setAttribute('src',bluemoon.jpg);
    let a = document.createElement('a'); 
    let p = document.querySelector('p#takudai');
    p.insertAdjacentElement('afterend',a); 
    a.textContent='拓殖大学HP';
    a.setAttribute('href','http://www.takushoku-u.ac.jp'); 
    l = document.querySelector('li#mochi');
    l.remove(); 
    u = document.querySelector('ul#kassen');
    u.remove();
    u = document.createElement('ul');
    p = document.querySelector('p#primary');
    p.insertAdjacentElement('afterend',u); 
    l = document.createElement('li');
    u.insertAdjacentElement('beforeend',l); 
    l.textContent ='赤';
    u.insertAdjacentElement('beforeend',l);
    l = document.createElement('li');
    l.textContent = '緑'; 
    u.insertAdjacentElement('beforeend', l);
    l = document.createElement('li');
    l.textContent = '青';
    u.insertAdjacentElement('beforeend', l);
}
b = document.querySelector('button#henkou');
b.addEventListener('click',changeDom);
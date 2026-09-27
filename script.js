
let score = 0;
body = document.querySelector('body');
h1 = document.querySelector('h1');

body.addEventListener('click', () => {
    
    score ++;
    h1.textContent = score;

});
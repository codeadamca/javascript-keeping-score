
let score = 0;
body = document.querySelector('body');
h1 = document.querySelector('h1');

if (localStorage.getItem('score')) {
    score = parseInt(localStorage.getItem('score'), 10);
    h1.textContent = score;
}

body.addEventListener('click', () => {
    
    score ++;
    h1.textContent = score;

    if(score == 11) {
        h1.style.color = 'white';
        h1.style.transform = 'rotate(180deg)';
        body.style.backgroundImage = "url('images/11-stranger-things.jpeg')";
    }
    else
    {
        resetStyles();
    }
        
    localStorage.setItem('score', score);

});

document.querySelectorAll('a').forEach(function(link) {
    link.addEventListener('click', function(event) {
        event.stopPropagation();
    });
});

function resetScore() {
    score = 0;
    h1.textContent = score;
    resetStyles();
    localStorage.setItem('score', score);
    return false;
}

function resetStyles() {
    h1.style.color = '';
    h1.style.transform = '';
    body.style.backgroundImage = '';
}
'use_strict';   

let btn = document.querySelector('button'),
    panda = document.querySelector('.emoji');

// add event listener

btn.addEventListener('click', function() {
    if (panda.classList.contains('closed')) {
        panda.classList.remove('closed');
        panda.classList.add('open');
    }
});

panda.addEventListener('click', function() {
    if (panda.classList.contains('open')) {
        panda.classList.remove('open');
        panda.classList.add('closed');
    }
});
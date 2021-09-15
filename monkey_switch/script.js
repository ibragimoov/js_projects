const closedFace = document.querySelector('.closed');
const openFace = document.querySelector('.open');
const hearFace = document.querySelector('.hear');

closedFace.addEventListener('click', () => {
    if( openFace.classList.contains('open')) {
        openFace.classList.add('active');
        closedFace.classList.remove('active');
    }
});

openFace.addEventListener('click', () => {
    if( closedFace.classList.contains('closed')) {
        hearFace.classList.add('active');
        openFace.classList.remove('active');
    }
});

hearFace.addEventListener('click', () => {
    if( hearFace.classList.contains('hear')) {
        closedFace.classList.add('active');
        hearFace.classList.remove('active');
    }
});
let butn = document.getElementById('butn');

butn.addEventListener('click', function clicking() {
    butn.textContent = "you can't change perfection";
});

const selectEl = document.querySelector('.movie');

selectEl.addEventListener('change', (event) => {
    const result = document.querySelector('.result');
    result.textContent = 'No way!'
})

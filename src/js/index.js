const switchButton1 = document.getElementById('darkside');
const switchButton2 = document.getElementById('jedi');
const container = document.getElementById('container');

document.body.style.transition = 'background-color 0.6s ease';
switchButton1.addEventListener('click', () => {
    container.classList.add("right-panel-active");
    setTimeout(() => {
        document.body.style.backgroundColor = "#1f1717ff";
    }, 500);
});

switchButton2.addEventListener('click', () => {
    container.classList.remove("right-panel-active");
    setTimeout(() => {
        document.body.style.backgroundColor = "#f2f2f2";
    }, 500);
});
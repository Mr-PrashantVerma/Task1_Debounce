var input = document.getElementById('search');
var button = document.getElementById('search-btn');
var clear = document.getElementById('clear');
clear.addEventListener('click', function () {
    input.value = '';
})

console.log(input, button)

function value(e) {
    console.log(e.target.value);
}
function debounce(func, delay) {
    let timer;
    return function (...args) {
        clearTimeout(timer);
        timer = setTimeout(() => {
            func.apply(this, args);
        }, delay)
    }
};
const debounced = debounce(value, 500);
input.addEventListener('input', debounced);

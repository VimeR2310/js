let input = document.querySelector('input');
let p = document.querySelector('p');


input.onblur = () => {
    p.textContent += input.value;
}
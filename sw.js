const section = document.querySelectorAll('.container');
// const myFrag = new DocumentFragment();
// let row = document.createElement(minus)

const hideOnClick = (e => e.currentTarget
    .nextElementSibling
    .classList.toggle('hidden'));

section.forEach(container => container.addEventListener('click', hideOnClick));
//change svg for minus
//listen for click
//select closes hover-button element
//insertAdjecentHTML element
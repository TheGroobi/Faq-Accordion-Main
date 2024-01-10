const section = document.querySelectorAll('.container');
const hideOnClick = (e => e.currentTarget
    .nextElementSibling
    .classList.toggle('hidden'));

section.forEach(container => container.addEventListener('click', hideOnClick));

//change svg for minus
// figure out how to do animation from display: none;
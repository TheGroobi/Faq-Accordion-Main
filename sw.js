const section = document.querySelectorAll('.container');
const hideOnClick = (e => e.currentTarget
    .nextElementSibling
    .classList.toggle('hidden'));
function changeIconOnClick(e) {
    const svg = e.currentTarget.children[1]
    if (svg.classList.contains('plus')) {
        svg.innerHTML = `<path fill="#301534" d="M15 3.313A12.187 12.187 0 1 0 27.188 15.5 12.2 12.2 0 0 0 15 3.312Zm4.688 13.124h-9.375a.938.938 0 0 1 0-1.875h9.374a.938.938 0 0 1 0 1.876Z"/></path>`;
        svg.classList.toggle('plus');
    } else {
        svg.classList.toggle('plus');
        svg.innerHTML = `<path fill="#AD28EB" d="M15 3.313A12.187 12.187 0 1 0 27.188 15.5 12.203 12.203 0 0 0 15 3.312Zm4.688 13.124h-3.75v3.75a.938.938 0 0 1-1.876 0v-3.75h-3.75a.938.938 0 0 1 0-1.875h3.75v-3.75a.938.938 0 0 1 1.876 0v3.75h3.75a.938.938 0 0 1 0 1.876Z"/></path>`;
    };
}
section.forEach(container => container.addEventListener('click', hideOnClick));
section.forEach(container => container.addEventListener('click', changeIconOnClick));

//change svg for minus
//listen for click
//select closes hover-button element
//insertAdjecentHTML element    
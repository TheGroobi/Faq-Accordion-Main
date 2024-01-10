//listen for click on .container
//add class to all p besides the one near to hidden
//add class of border to all sections beside the one clicked
//change svg for minus
// //add animation
function hideOnClick() {
    const section = document.querySelectorAll('.container');
    const toggleBorder = section.forEach(container => container.classList.toggle('border'));
    console.log(toggleBorder);
    section.forEach(
        container => container.addEventListener('click', e => console.log(e.currentTarget)))
};
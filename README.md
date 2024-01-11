# Frontend Mentor - FAQ accordion solution

This is a solution to the [FAQ accordion challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/faq-accordion-wyfFdeBwBz). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)


### Screenshot

![Desktop Expanded](./assets/images/Screen%20Shot%202024-01-11%20at%2002.45.49.png)
![Mobile](./assets/images/Screen%20Shot%202024-01-11%20at%2002.48.51.png)
![Mobile Expanded](./assets/images/Screen%20Shot%202024-01-11%20at%2002.48.54.png)
![Desktop Hover](./assets/images/Screen%20Shot%202024-01-11%20at%2002.49.16.png)

### Links

- Solution URL: [GitHub](https://github.com/TheGroobi/Faq-Accordion-Main)
- Live Site URL: [Vercel](https://faq-accordion-main-six.vercel.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- JavaScript DOM Manipulation

### What I learned

I further expanded my still very basic knowledge of DOM Manipulation, and event listeners in JS. I feel like i'm also making progress on the quality and speed of my html/css website building and styling skills. 

```js
const proudOfThisFunc = function changeIconOnClick(e) {
    const svg = e.currentTarget.children[1]
    if (svg.classList.contains('plus')) {
        svg.innerHTML = `<path fill="#301534" d="M15 3.313A12.187 12.187 0 1 0 27.188 15.5 12.2 12.2 0 0 0 15 3.312Zm4.688 13.124h-9.375a.938.938 0 0 1 0-1.875h9.374a.938.938 0 0 1 0 1.876Z"/></path>`;
        svg.classList.toggle('plus');
    } else {
        svg.classList.toggle('plus');
        svg.innerHTML = `<path fill="#AD28EB" d="M15 3.313A12.187 12.187 0 1 0 27.188 15.5 12.203 12.203 0 0 0 15 3.312Zm4.688 13.124h-3.75v3.75a.938.938 0 0 1-1.876 0v-3.75h-3.75a.938.938 0 0 1 0-1.875h3.75v-3.75a.938.938 0 0 1 1.876 0v3.75h3.75a.938.938 0 0 1 0 1.876Z"/></path>`;
    };
}
```

### Continued development

I want to try and implement some form of animations to make the transition/hiding elements smoother and better looking. I need to focus more on making the sites responsive. Probably will use tailwind for that in the future because vanilla css is such a pain to do @media queries with.

### Useful resources

- [w3schools .innerHTML](https://www.w3schools.com/jsref/prop_html_innerhtml.asp) - Helped me understand that innerHTML deletes all of the code inside of the element lmao
- [.children mdn](https://developer.mozilla.org/en-US/docs/Web/API/Element/children) - Forgot this existed. Came in handy when selecting the e.currentTarget of the event listener

## Author
- Frontend Mentor - [@thegroobi](https://www.frontendmentor.io/profile/thegroobi)

## Acknowledgments

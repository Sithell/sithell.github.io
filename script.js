function offset(el) {
    var rect = el.getBoundingClientRect(),
        scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
}

function parallaxEffect(element, power, initial) {
    // the less power - the stronger effect
    element.style.backgroundPositionY = (window.pageYOffset - offset(element).top) * power + initial + 'px';
}

function setupParallax(element, power, initial) {
    parallaxEffect(element, power);
    window.addEventListener('scroll', function () {
        parallaxEffect(element, power, initial);
    });
}
// set initial background position
setupParallax(document.getElementById('parallax'), 0.5, -400);
setupParallax(document.getElementById('home'), 0.5, 0);


let list = document.querySelector(".gallery ul");
list.style.marginLeft = 0;
let listElems = document.querySelectorAll(".gallery li");
let position = 0;

let count = 4; // видимое количество изображений

document.querySelector('.prev').onclick = function () {
    if (position > 0) {
        let offset = listElems[position - 1].getBoundingClientRect().left - list.getBoundingClientRect().left;
        position -= 1;
        list.style.marginLeft = -offset + "px"
    }
}

document.querySelector('.next').onclick = function () {
    if (position < listElems.length - count) {
        let offset = listElems[position + 1].getBoundingClientRect().left - list.getBoundingClientRect().left;
        position += 1;
        list.style.marginLeft = -offset + "px"
    }
}
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



function hover(image) {
    let filename = image.getAttribute('src');
    image.setAttribute('src', (filename.slice(0, -4)) + '-hover.png');
}

function unhover(image) {
    let filename = image.getAttribute('src');
    image.setAttribute('src', (filename.slice(0, -10)) + '.png');
}



let list = document.querySelector(".gallery ul");
let listElems = document.querySelectorAll(".gallery li");
console.log(listElems);
let position = 0;
let width = 263 + (0.7 * window.innerWidth - 263 * 4) / 3;
let count = 1; // видимое количество изображений
document.querySelector('.prev').onclick = function () {
    // сдвиг влево
    position += width * count;
    // последнее передвижение влево может быть не на 3, а на 2 или 1 элемент
    position = Math.min(position, 0)
    list.style.marginLeft = position + 'px';
}

document.querySelector('.next').onclick = function () {
    console.log("next");
    // сдвиг вправо
    position -= width * count;
    // последнее передвижение вправо может быть не на 3, а на 2 или 1 элемент
    position = Math.max(position, -width * (listElems.length - 4));
    list.style.marginLeft = position + 'px';
}
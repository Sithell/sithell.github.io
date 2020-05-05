function offset(el) {
    var rect = el.getBoundingClientRect(),
        scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
}

function parallaxEffect(element, power, initial) {
    // the less power - the stronger effect
    element.style.backgroundPositionY = (window.pageYOffset * power) - (offset(element).top * power) + initial + 'px';
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
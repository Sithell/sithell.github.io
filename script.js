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
    window.addEventListener('scroll', function (e) {
        parallaxEffect(element, power, initial);
    });
}
// set initial background position
setupParallax(document.getElementById('parallax'), 0.5, -400);

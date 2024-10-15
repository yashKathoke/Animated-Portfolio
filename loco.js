const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true,
    lerp: 0.1, // Adjust the lerp value for smoother scrolling
    multiplier: 1, // Adjust the multiplier for scroll speed
    class: 'is-reveal' // Class to add to elements when they are revealed
});
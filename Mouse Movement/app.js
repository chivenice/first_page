const input = {
    mouseX: {
        start: 100,
        end: window.innerWidth - 200,
        current: 0,
    },
    mouseY: {},
};

input.mouseX.range = input.mouseX.end - input.mouseX.start;

const handleMouseMove = function (event) {

    input.mouseX.current = event.pageX;
    input.mouseX.fraction = (input.mouseX.current - input.mouseX.start) / input.mouseX.range;

    if (input.mouseX.fraction > 1) {
        input.mouseX.fraction = 1;
    }
    if (input.mouseX.fraction < 0) {
        input.mouseX.fraction = 0;
    }


    console.log('fraction', input.mouseX.fraction)
}

const handleResize = function () {
    input.mouseX.end = window.innerWidth - 200;
    input.mouseX.range = input.mouseX.end - input.mouseX.start;
}

window.addEventListener('mousemove', handleMouseMove);
window.addEventListener('resize', handleResize);
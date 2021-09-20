// html setup
var pupilsHTMLCollection = document.getElementsByClassName('pupil');
var pupilsArray = Array.from(pupilsHTMLCollection);


//input setup
var input = {
  mouseX: {
    start: 0,
    end: window.innerWidth,
    current: 0,
  },
  mouseY: {
    start: 0,
    end: window.innerHeight,
    current: 0
  },
};

input.mouseX.range = input.mouseX.end - input.mouseX.start;
input.mouseY.range = input.mouseY.end - input.mouseY.start;


var handleMouseMove = function (event) {
  // mouse x input
  input.mouseX.current = event.clientX;
  input.mouseX.fraction = (input.mouseX.current - input.mouseX.start) / input.mouseX.range;

  // mouse y input
  input.mouseY.current = event.clientY;
  input.mouseY.fraction = (input.mouseY.current - input.mouseY.start) / input.mouseY.range;


//output setup
var output = {
  x: {
    start: -100,
    end: 100,
    current: 0,
  },
  y: {},
};
output.x.range = output.x.end - output.x.start;

//output x

output.x.current = output.x.start + (input.mouseX.fraction * output.x.range);

//apply output to html
pupilsArray.forEach(function (pupil, k) {
  pupil.style.transform = 'translateX('+output.x.current+'px)';
});


  //console.log('output.x.current',output.x.current);
  //console.log('fraction Y',input.mouseY.fraction);

}

var handleResize = function () {
  input.mouseX.end = window.innerWidth;
  input.mouseX.range = input.mouseX.end - input.mouseX.start;
}

window.addEventListener('mousemove', handleMouseMove);
window.addEventListener('resize', handleResize);
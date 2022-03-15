// set up general
var mouse = {
  x: window.innerWidth * 0.5,
  y: window.innerHeight * 0.5,
};

// set up input
var input = {
  mouseX: {
    start: 0,
    end: window.innerWidth,
    current: mouse.x,
  },
  mouseY: {
    start: 0,
    end: window.innerWidth,
    current: mouse.y,
  },
};
input.mouseX.range = input.mouseX.end - input.mouseX.start;
input.mouseY.range = input.mouseY.end - input.mouseY.start;

//setup output
var output = {
  blur: {
    start: 0.5,
    range: 10,
  },
  x: {
    start: -150,
    end: 150,
    current: 0,
  },
  y: {
    start: -150,
    end: 150,
    current: 0,
  },
  zIndex: {
    range: 10000,
  },
};
output.x.range = output.x.end - output.x.start;
output.y.range = output.y.end - output.y.start;

// set up html
var parallaxContainer = document.getElementById("parallaxContainer");
var itemsArray = Array.from(parallaxContainer);

for (var i = 1; i < 10; i++) {
  //create a new element with parallax-container className
  var item = document.createElement("div");
  item.className = "parallax-item";
  itemsArray.push(item);
  //create new planet for inside element with planet className
  var planet = document.createElement("div");
  planet.className = "planet";
  item.appendChild(planet);

  //add element to container
  parallaxContainer.appendChild(item);

  //random width, height, depth, rotation,bg-image
  var randomNum = Math.random();
  var bgImgNum = Math.round(randomNum * 10);
  var rotateNum = 360 * randomNum;
  var depth = randomNum;
  var blur = (depth - output.blur.start) * output.blur.range;

  item.style.filter = "blur(" + blur + "px)";
  item.style.width = 500 * randomNum + 50;
  item.style.height = 500 * randomNum + 50;
  item.dataset.depth = randomNum;
  planet.style.transform = "rotate(" + rotateNum + "deg)";
  planet.style.backgroundImage =
    "url(/Users/chivenice/Desktop/Personal/dumb-art/planet" +
    bgImgNum +
    ".png)";
  item.style.top = Math.round(randomNum * window.innerHeight - 50) + "px";
  item.style.left = Math.round(randomNum * window.innerWidth - 100) + "px";
}

var updateInputs = function () {
  // input current, fraction
  input.mouseX.current = mouse.x;
  input.mouseY.current = mouse.y;
  input.mouseX.fraction =
    (input.mouseX.current - input.mouseX.start) / input.mouseX.range;
  input.mouseY.fraction =
    (input.mouseY.current - input.mouseY.start) / input.mouseY.range;
};
var updateOutputs = function () {
  // output current
  output.x.current = output.x.start + input.mouseX.fraction * output.x.range;
  output.y.current = output.y.start + input.mouseY.fraction * output.y.range;
};
var updateEachParallaxItems = function () {
  // apply to html
  itemsArray.forEach(function (item, i) {
    var depth = parseFloat(item.dataset.depth, 10);
    var itemOutput = {
      x: output.x.current * depth,
      y: output.y.current * depth,
    };
    item.style.transform =
      "translate(" + itemOutput.x + "px," + itemOutput.y + "px)";
  });
};

var handleMouseMove = function (event) {
  mouse.x = event.clientX;
  mouse.y = event.clientY;

  updateInputs();
  updateOutputs();
  updateEachParallaxItems();
};

var handleResize = function () {
  //end, range
};

window.addEventListener("mousemove", handleMouseMove);
window.addEventListener("resize", handleResize);

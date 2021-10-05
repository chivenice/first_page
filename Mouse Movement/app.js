// html setup
var itemsHTMLCollection = document.getElementsByClassName('parallax-item');
var itemsArray = Array.from(itemsHTMLCollection);



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

//output setup
var output = {
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
  zIndex:{
    range:10000
  },
  scale:{
    start:1,
    end:0.3,
  },
  blur:{
    startingDepth:.5,
    range:20
  }
};
output.scale.range = output.scale.end - output.scale.start;
output.x.range = output.x.end - output.x.start;
output.y.range = output.y.end - output.y.start;

var mouse = {
  x: 0,
  y: 0
}

var updateInputs = function() {
  // mouse x input and y input
  input.mouseX.current = mouse.x;
  input.mouseX.fraction = (input.mouseX.current - input.mouseX.start) / input.mouseX.range;

  input.mouseY.current = mouse.y;
  input.mouseY.fraction = (input.mouseY.current - input.mouseY.start) / input.mouseY.range;
}

var updateOutputs = function() { 
  //output x and y
  output.x.current = output.x.end - (input.mouseX.fraction * output.x.range);
  output.y.current = output.y.end - (input.mouseY.fraction * output.y.range);
}

var updateEachParallaxItem = function(){
    //apply output to html
    itemsArray.forEach(function (item, k) {
      var depth = parseFloat(item.dataset.depth, 10);    //10 convert a number or a piece of string to something that count by 15s; 
      var itemOutput = {
        x: output.x.current - (output.x.current * depth),
        y: output.y.current - (output.y.current * depth),
        zIndex: output.zIndex.range - ( output.zIndex.range * depth),
        scale: output.scale.start + (output.scale.range * depth),
        blur: (depth - output.blur.startingDepth)* output.blur.range
      };
      console.log(k, 'depth', depth)
      item.style.zIndex = itemOutput.zIndex;
      item.style.transform = 'scale('+ itemOutput.scale+') translate(' + itemOutput.x + 'px, ' + itemOutput.y + 'px)';
      item.style.filter = 'blur('+ itemOutput.blur+'px)';
  
  
    });
}


// De dang thay doi thong so va thiet ke
var handleMouseMove = function (event) {
  mouse.x = event.pageX;
  mouse.y = event.pageY;
  updateInputs();
  updateOutputs();
  updateEachParallaxItem();
}


var handleResize = function () {
  input.mouseX.end = window.innerWidth;
  input.mouseX.range = input.mouseX.end - input.mouseX.start;
}

window.addEventListener('mousemove', handleMouseMove);
window.addEventListener('resize', handleResize);
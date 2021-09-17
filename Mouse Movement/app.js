// html setup
const pupilsHTMLCollection = document.getElementsByClassName('pupil');
const pupilsArray = Array.from(pupilsHTMLCollection);

console.log('pupilsHTMLCollection',pupilsHTMLCollection)

//input setup
const input ={
  mouseX: {
    start: 0,
    end: window.innerWidth ,
    current:0,
  },
  mouseY:{   
    start: 0,
    end: window.innerHeigth ,
    current:0
  },
};

input.mouseX.range =input.mouseX.end - input.mouseX.start;
input.mouseY.range =input.mouseY.end - input.mouseY.start;

//output setup
const output ={
  x:{
    start:-100,
    end:100,
    current:0,
  },
  y:{
    
  },
}
//output x
output.x.range = output.x.end - output.x.start;

//apply output to html
pupilsArray.forEach(function(pupil,k){
  pupil.style.transform='translateX(50px)';
});


const handleMouseMove = function(event){
 // mouse x input
  input.mouseX.current = event.pageX;
  input.mouseX.fraction = (input.mouseX.current - input.mouseX.start) / input.mouseX.range;
  
 // mouse y input
   input.mouseY.current = event.pageY;
  input.mouseY.fraction = (input.mouseY.current - input.mouseY.start) / input.mouseY.range;
  
  output.x.current = output.x.start +(input.mouseX.fraction * output.x.range);
  
  //console.log('output.x.current',output.x.current);
  //console.log('fraction Y',input.mouseY.fraction);

}

const handleResize = function(){
  input.mouseX.end = window.innerWidth ;
  input.mouseX.range = input.mouseX.end - input.mouseX.start;
}

window.addEventListener('mousemove', handleMouseMove);
window.addEventListener('resize', handleResize);
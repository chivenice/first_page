var parallaxContainer = document.getElementById('parallaxContainer');

//setup output
var output = {
    blur:{
        start:0.2,
        range:20,
    }
}

for (var i = 0; i < 10; i++) {
    //create a new element with parallax-container className
    var item = document.createElement('div');
    item.className = 'parallax-item';
    //create new planet for inside element with planet className
    var planet = document.createElement('div');
    planet.className = 'planet';
    item.appendChild(planet);

    //add element to container
    parallaxContainer.appendChild(item);

    //random width, height, depth, rotation,bg-image
    var randomNum = Math.random();
    var bgImgNum = Math.round(randomNum * 10);
    var rotateNum = (360 * randomNum);
    var depth =randomNum;
    var blur =(depth-output.blur.start)*output.blur.range;


    item.style.filter = 'blur('+blur+'px)';
    item.style.width = 500 * randomNum + 50;
    item.style.height = 500 * randomNum + 50;
    item.dataset.depth = randomNum;
    item.style.transform = 'rotate(' + (360 * randomNum) + 'deg)';
    planet.style.backgroundImage = 'url(/Users/chivenice/Desktop/Personal/dumb-art/planet'+ bgImgNum +'.png)';
    item.style.top = Math.round(randomNum * window.innerHeight-50) + 'px';
    item.style.left = Math.round(randomNum * window.innerWidth-100) + 'px';

}
    //adjust blur on depth

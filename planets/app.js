var parallaxContainer = document.getElementById('parallaxContainer');
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

    item.style.width = 500 * randomNum + 200;
    item.style.height = 500 * randomNum + 200;
    item.dataset.depth = randomNum;
    item.style.transform = 'rotate(' + (360 * randomNum) + 'deg)';
    planet.style.backgroundImage = 'url(/Users/chivenice/Desktop/Personal/dumb-art/planet'+ bgImgNum +'.png)';

    //adjust blur on depth
    var blur =(depth-output.blur.start)*output.blur.range;
    item.style.filter = 'blur(20px)';
}
let blockSelector = document.getElementsByClassName("block");
let blocksSelector = document.getElementsByClassName("blocks");

//Creates Click Event for each block
createEventsClick = () => {
    for(let i =0; i < blockSelector.length ; i++) {
        blockSelector[i].addEventListener('click', (e) => {
            moveUp(e);
        })
    };
}

//Creates Mouse Down Event for each block
createEventsClickDown = () => {
    for(let i =0; i < blockSelector.length ; i++) {
        blockSelector[i].addEventListener('mousedown', (e) => {
            moveRight(e);
        });
        blockSelector[i].addEventListener('mouseup', (e) => {
            moveOriginal(e);
        })
    };
}


//Creates a new block on top and deletes the block from the Dom
moveUpDelete = (e) => {
    var newBlock = document.createElement("div");
    newBlock.setAttribute("class", e.target.getAttribute("class"));
    blocksSelector[0].prepend(newBlock);
    blockSelector[0].addEventListener('click', (e) => {
        moveUp(e);
    });
    e.target.remove();
};

moveUp = (e) => {
    var element = e.target;
    var position = element.getBoundingClientRect();
    var y = 73.75 - position.top;
    var myAnimation = new TweenLite.to(e.target, 1, {ease: Bounce.easeOut, y: y, onComplete:moveUpDelete, onCompleteParams:[e]});
}

moveRight = (e) => {
    var element = e.target;
    var position = element.getBoundingClientRect();
    var x = position.left + Math.random()*500 + 20;
    e.target.addEventListener('mouseleave', (e) => {
        moveOriginal(e);
    });
    var myAnimation = new TweenLite(e.target, 1, { x: x, onComplete:moveRight, onCompleteParams:[e]});
}

moveOriginal = (e) => {
    var element = e.target;
    var position = element.getBoundingClientRect();
    var x = 0 - position.left;
    x <  73.82 ? x = 0 : false;
    var myAnimation = new TweenLite(e.target, 3, {x: x});
}


// createEventsClick();
createEventsClickDown();



var loadingProgress = document.querySelector('.loading-progress');
var blurriness = document.querySelector('.bg-image');

var i = 0;
var loadingCount = setInterval(() => {
    loadingProgress.innerHTML = `${i} %`;
    i++;
    if (i >= 101) {
        clearInterval(loadingCount);
    }
}, 50);

var opacity = 1;
var loadingCountOpacity = setInterval(() => {
    loadingProgress.style.opacity = opacity;
    opacity -=0.01;
    if (opacity < 0) {
        clearInterval(loadingCountOpacity);
    }
}, 50);

var blurry = 10;
var changeBlurriness = setInterval(() => {
    blurriness.style.filter = `blur(${blurry}px)`;
    blurry -= 0.1;
    if (blurry < 0) {
        clearInterval(changeBlurriness);
    }
}, 50);
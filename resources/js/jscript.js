var i = 0;
var slideImages = [];
var slideLinks = [];
var slideDescs = [];
var slideTime = 5000;
var imageIndex = 0;

var slideLink;

var slideImgElement = document.getElementById('slideImg');
var slideDescElement = document.getElementById('slideDesc');
var slideButtonLink = document.getElementById('welcome-button');

var forwardNav = document.getElementById('wsal');

forwardNav.onclick = function () {
    manualChange();
}

slideButtonLink.onclick = function () {
    openWelcomeURL();
}

var openWelcomeURL = function () {
    window.open(slideLink, '_blank');
} 





//Image List
slideImages[0] = '-webkit-gradient(linear, left top, left bottom, from(rgba(0, 0, 0, 0.7)), to(rgba(0, 0, 0, 0.7))), url(resources/img/hp-bg1.png)';
slideImages[1] = '-webkit-gradient(linear, left top, left bottom, from(rgba(0, 0, 0, 0.7)), to(rgba(0, 0, 0, 0.7))), url(resources/img/hp-bg2.png)';
slideImages[2] = '-webkit-gradient(linear, left top, left bottom, from(rgba(0, 0, 0, 0.7)), to(rgba(0, 0, 0, 0.7))), url(resources/img/hp-bg1.png)';
slideImages[3] = '-webkit-gradient(linear, left top, left bottom, from(rgba(0, 0, 0, 0.7)), to(rgba(0, 0, 0, 0.7))), url(resources/img/hp-bg2.png)';

//Link List
slideLinks[0] = 'https://google.com';
slideLinks[1] = 'https://youtube.com';
slideLinks[2] = 'https://twitter.com';
slideLinks[3] = 'https://twitter.com';

//Desc List
slideDescs[0] = 'first descripton';
slideDescs[1] = 'second descripton';
slideDescs[2] = 'third descripton';
slideDescs[3] = 'fourth descripton';

function fadeOut(element) {
    var op = 1;  // initial opacity
    var timer = setInterval(function () {
        if (op <= 0.1){
            clearInterval(timer);
        }
        element.style.opacity = op;
        op -= 0.1;
    }, 90);
}

function fadeIn(element) {
    var op = 0.1;  // initial opacity
    var timer = setInterval(function () {
        if (op >= 1){
            clearInterval(timer);
        }
        element.style.opacity = op;
        op += 0.1;
    }, 90);
}


var stopVar;

changeSlide = function() {

    slideImgElement.style.backgroundImage = slideImages[i];
    slideDescElement.innerHTML = slideDescs[i];
    slideLink = slideLinks[i];

    if(1 === 1) {

        fadeIn(slideImgElement);
        fadeIn(slideDescElement);

    }


    if (i < slideImages.length -1) {
        i++;
    } else {
        i = 0;
    }


    stopVar = setTimeout("changeSlide()", slideTime);

    slideImgElement.style.opacity = 0;
    slideDescElement.style.opacity = 0;


};

var manualChange = function() {

    console.log('Yo');

    slideImgElement.style.backgroundImage = slideImages[i];
    slideDescElement.innerHTML = slideDescs[i];
    slideLink = slideLinks[i];

    fadeIn(slideImgElement);
    fadeIn(slideDescElement);

    if (i < slideImages.length -1) {
        i++;
    } else {
        i = 0;
    }

    clearTimeout(stopVar);
    setTimeout("changeSlide()", slideTime);

    slideImgElement.style.opacity = 0;
    slideDescElement.style.opacity = 0;

}




window.onload = changeSlide;


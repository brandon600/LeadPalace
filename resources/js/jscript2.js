var i = 0;
var slideImages = [];
var slideLinks = [];
var slideDescs = [];
var slideTime = 5000;
var imageIndex = 0;
var secondTime = false;

var slideLink;

var slideImgElement = document.getElementById('slideImg');
var slideDescElement = document.getElementById('slideDesc');
var slideButtonLink = document.getElementById('welcome-button');

var forwardNav = document.getElementById('wsal');

forwardNav.onclick = function () {
 //   manualChange();
}

slideButtonLink.onclick = function () {
    openWelcomeURL();
}

var openWelcomeURL = function () {
    window.open(slideLink, '_blank');
} 



//Image List
slideImages[0] = '-webkit-gradient(linear, left top, left bottom, from(rgba(0, 0, 0, 0.7)), to(rgba(0, 0, 0, 0.7))), url(resources/img/hp-bg2.jpg)';
slideImages[1] = '-webkit-gradient(linear, left top, left bottom, from(rgba(0, 0, 0, 0.7)), to(rgba(0, 0, 0, 0.7))), url(resources/img/hp-bg3.jpg)';
slideImages[2] = '-webkit-gradient(linear, left top, left bottom, from(rgba(0, 0, 0, 0.7)), to(rgba(0, 0, 0, 0.7))), url(resources/img/hp-bg4.jpg)';
slideImages[3] = '-webkit-gradient(linear, left top, left bottom, from(rgba(0, 0, 0, 0.7)), to(rgba(0, 0, 0, 0.7))), url(resources/img/hp-bg5.jpg)';
slideImages[4] = '-webkit-gradient(linear, left top, left bottom, from(rgba(0, 0, 0, 0.7)), to(rgba(0, 0, 0, 0.7))), url(resources/img/hp-bg6.jpg)';
slideImages[5] = '-webkit-gradient(linear, left top, left bottom, from(rgba(0, 0, 0, 0.7)), to(rgba(0, 0, 0, 0.7))), url(resources/img/hp-bg7.png)';
slideImages[6] = '-webkit-gradient(linear, left top, left bottom, from(rgba(0, 0, 0, 0.7)), to(rgba(0, 0, 0, 0.7))), url(resources/img/hp-bg1.jpg)';

//Link List
slideLinks[0] = 'http://leadpalace.io/services.html';
slideLinks[1] = 'http://leadpalace.io/services.html';
slideLinks[2] = 'http://leadpalace.io/services.html';
slideLinks[3] = 'http://leadpalace.io/services.html';
slideLinks[4] = 'http://leadpalace.io/services.html';
slideLinks[5] = 'http://leadpalace.io/services.html';
slideLinks[6] = 'http://leadpalace.io/services.html';

//Desc List
slideDescs[0] = 'Consulting';
slideDescs[1] = 'Email Marketing';
slideDescs[2] = 'Content Marketing';
slideDescs[3] = 'Social Media Marketing';
slideDescs[4] = 'SEO';
slideDescs[5] = 'Online PPC Ads';
slideDescs[6] = 'Web Design';




var stopVar;
var stopTO;

var stopFunction = function(a, b) {
    clearInterval(a);
    clearTimeout(b);
};

var imgTimeout = function() {
//    slideImgElement.classList.add('animated');
//    slideDescElement.classList.add('animated');

    slideImgElement.classList.add('fadeOutRight');
    slideDescElement.classList.add('fadeOutRight');
}

var changeSlide = function() {

    console.log('i is currently ' + i);

    slideImgElement.style.backgroundImage = slideImages[i];
    slideDescElement.innerHTML = slideDescs[i];
    slideLink = slideLinks[i];

    if(1 === 1) {

        if (secondTime = true) {
            slideImgElement.classList.remove('fadeOutRight');
            slideDescElement.classList.remove('fadeOutRight');
            console.log('Its true');
        };

        slideImgElement.classList.add('animated');
        slideDescElement.classList.add('animated');
        
        slideImgElement.classList.add('fadeInLeft');
        slideDescElement.classList.add('fadeInLeft');

    }


    if (i < slideImages.length - 1) {
        i++;
        console.log('Has been done.');
        console.log('now i is' + i);
    } else {
        i = 0;
    }


    stopTO =  setTimeout("imgTimeout()", 4400);

};

setInterval("changeSlide()", slideTime);


var onLoadFadeFunction = function () {
    slideImgElement.classList.add('fadeOutRight');
    console.log('Its not true');
    setTimeout(secondTimeTrue, 3000);
};


var onLoadAnimate = function () {
    setTimeout(onLoadFadeFunction, 4400);
}

var secondTimeTrue = function () {
    secondTime = true;
}



window.onLoad = onLoadAnimate();

var inqLink = 'http://leadpalace.io/consultation-form.php';

var inq = document.getElementById('inq-btn');

inq.onclick = function () {
    openForm();
}


var openForm = function () {
    window.open(inqLink, '_blank');
}








/** var manualChange = function() {

    console.log('Yo');

        slideImgElement.style.backgroundImage = slideImages[i];
        slideDescElement.innerHTML = slideDescs[i];
        slideLink = slideLinks[i];

        slideImgElement.classList.remove('fadeOut');
        slideDescElement.classList.remove('fadeOut');
        
        slideImgElement.classList.add('fadeIn');
        slideDescElement.classList.add('fadeIn');


    if (i < slideImages.length -1) {
        i++;
    } else {
        i = 0;
    }

   stopFunction(stopVar, stopTO);


    setInterval("changeSlide()", slideTime);

    
};   */
















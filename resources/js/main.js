var homeServiceText = document.getElementById('homeServiceText');
var homeServiceHeading = document.getElementById('homeServiceHeading');
var homeServiceMidImg = document.getElementById('homeServiceMidImg');
var homeServiceCTA = document.getElementById('homeServiceCTA');







//Web Design Service

var homeWDText = "Your website is what represents your real estate business in the online digital world, why not have the nicest place on the road? Whether you want a beautiful template or a fully-custom website unique to yourself, we got you covered with a high-quality site that is going to stand out and deliver powerful results. According to *Blue Corona, 48 percent of people cited that a website’s design is the No. 1 factor in determining the credibility of a business. You want to make sure your web design is in good hands; and with us, it is."

var homeWDHeading = "Web Design"

var homeWDImg = "resources/img/hs_middle_icon1.png"

var homeWD = document.getElementById('homeWD');

var homeWDCTA = "Want to talk to us about web design?"

homeWD.onclick = function() {
    homeWDClicked();
    cellWDClicked();
}

var homeWDClicked = function () {
    homeServiceText.innerHTML = homeWDText;
    homeServiceHeading.innerHTML = homeWDHeading;
    homeServiceMidImg.src = homeWDImg;
    homeServiceCTA.innerHTML = homeWDCTA;
}


var msWD = document.getElementById('ms-wd-mobile');

var wDIsShowing = false;



var cellWDClicked = function () {

    var mq = window.matchMedia( "(max-width: 1024px)");

    if (mq.matches) {

        if (wDIsShowing === false) {

            wDIsShowing = true;

            console.log('It was clicked');
            msWD.style.display='block';
            msWD.classList.add('animated');
            msWD.classList.add('fadeIn');
            msWD.style.height = "270px";
            msWD.style.background = "#404040";
            homeWD.style.height = "375px";

        } else if (wDIsShowing === true)  {

            console.log('It was clicked AGAIN');
            msWD.style.display='none';
            homeWD.style.height = "100px";

            wDIsShowing = false;

        }

        console.log('Is Showing is true')


    } else {
        console.log('No need for height increase.')
    }
};


//Consulting Service

var homeConsultingText = "The climate of the business market is always changing, especially when it comes to Real Estate. With fluctuating customer demands, new competition, and evolving technology, it’s important to always be adapting to the times and optimizing your marketing strategy by using the most effective strategies that are bringing results right now in the current market. We do all of the studying to provide you with the info you’ll want in order to perform at your best."

var homeConsultingHeading = "Consulting"

var homeConsultingImg = "resources/img/hs_middle_icon2@2x.png"

var homeConsulting = document.getElementById('homeConsulting');

var homeConsultingCTA = "Want to talk to us about Consulting?"

homeConsulting.onclick = function () {
    homeConsultingClicked();
    cellConsultingClicked();
};

var homeConsultingClicked = function () {
    homeServiceText.innerHTML = homeConsultingText;
    homeServiceHeading.innerHTML = homeConsultingHeading;
    homeServiceMidImg.src = homeConsultingImg;
    homeServiceCTA.innerHTML = homeConsultingCTA;
}

var msConsulting = document.getElementById('ms-consulting-mobile');

var consultingIsShowing = false;



var cellConsultingClicked = function () {

    var mq = window.matchMedia( "(max-width: 1024px)");

    if (mq.matches) {

        if (consultingIsShowing === false) {

            consultingIsShowing = true;

            console.log('It was clicked');
            msConsulting.style.display='block';
            msConsulting.classList.add('animated');
            msConsulting.classList.add('fadeIn');
            msConsulting.style.height = "270px";
            msConsulting.style.background = "#404040";
            homeConsulting.style.height = "375px";

        } else if (consultingIsShowing === true)  {

            console.log('It was clicked AGAIN');
            msConsulting.style.display='none';
            homeConsulting.style.height = "100px";

            consultingIsShowing = false;

        }

        console.log('Is Showing is true')


    } else {
        console.log('No need for height increase.')
    }
};




//SEO Service

var homeSEOText = "Methods for succeeding with SEO (Search Engine Optimization) have come and gone like a fad, but the importance of SEO has not. Search Engine Optimization is here to stay and ranking high in the search engines delivers good measurable results time and time again. If a user searches online, they might find you if you’re towards the bottom of the page, but they almost surely won’t if you come up on the second page or anything later. While the businesses who show up towards the top of the first page are getting the very large majority of the traffic. We can help you get into a position to receive some of that traffic."

var homeSEOHeading = "Search Engine Optimization"

var homeSEOImg = "resources/img/hs_middle_icon3@2x.png"

var homeSEO = document.getElementById('homeSEO');

var homeSEOCTA = "Want to talk to us about SEO?"

homeSEO.onclick = function () {
    homeSEOClicked();
    cellSEOClicked();
};

var homeSEOClicked = function () {
    homeServiceText.innerHTML = homeSEOText;
    homeServiceHeading.innerHTML = homeSEOHeading;
    homeServiceMidImg.src = homeSEOImg;
    homeServiceCTA.innerHTML = homeSEOCTA;
};



var msSEO = document.getElementById('ms-seo-mobile');

var seoIsShowing = false;



var cellSEOClicked = function () {

    var mq = window.matchMedia( "(max-width: 1024px)");

    if (mq.matches) {

        if (seoIsShowing === false) {

            seoIsShowing = true;

            console.log('It was clicked');
            msSEO.style.display='block';
            msSEO.classList.add('animated');
            msSEO.classList.add('fadeIn');
            msSEO.style.height = "245px";
            msSEO.style.background = "#404040";
            homeSEO.style.height = "375px";

        } else if (seoIsShowing === true)  {

            console.log('It was clicked AGAIN');
            msSEO.style.display='none';
            homeSEO.style.height = "100px";

            seoIsShowing = false;

        }

        console.log('Is Showing is true')


    } else {
        console.log('No need for height increase.')
    }
};








//Social Media Marketing Service

var homeSMMAText = "Marketing on social media is a very powerful tool that you can use to get your real estate business in front of more eyes, resulting in more leads. According to Sproutsocial, social media is the most relevant advertising channel for 50% of Gen Z and 42% of millennials. Engaging with people through social media can massively assist in building a strong bond of trust between you and your prospects, thus resulting in them choosing you over a competitor."

var homeSMMAHeading = "Social Media Marketing"

var homeSMMAImg = "resources/img/hs_middle_icon4@2x.png"

var homeSMMA = document.getElementById('homeSMMA');

var homeSMMACTA = "Want to talk to us about social media marketing?"

homeSMMA.onclick = function () {
    homeSMMAClicked();
    cellSMMAClicked();
};

var homeSMMAClicked = function () {
    homeServiceText.innerHTML = homeSMMAText;
    homeServiceHeading.innerHTML = homeSMMAHeading;
    homeServiceMidImg.src = homeSMMAImg;
    homeServiceCTA.innerHTML = homeSMMACTA;
};



var msSMMA = document.getElementById('ms-smma-mobile');

var smmaIsShowing = false;



var cellSMMAClicked = function () {

    var mq = window.matchMedia( "(max-width: 1024px)");

    if (mq.matches) {

        if (smmaIsShowing === false) {

            smmaIsShowing = true;

            console.log('It was clicked');
            msSMMA.style.display='block';
            msSMMA.classList.add('animated');
            msSMMA.classList.add('fadeIn');
            msSMMA.style.height = "245px";
            msSMMA.style.background = "#404040";
            homeSMMA.style.height = "375px";

        } else if (smmaIsShowing === true)  {

            console.log('It was clicked AGAIN');
            msSMMA.style.display='none';
            homeSMMA.style.height = "100px";

            smmaIsShowing = false;

        }

        console.log('Is Showing is true')


    } else {
        console.log('No need for height increase.')
    }
};





//Email Marketing Service


var homeEmailMText = "Your competitors are in your prospects email inbox, so you want to be there as well. According to Campaign Monitor, for every $1 spent on email marketing, you can expect an average of $44 in return. At ePalace, we take your businesses objectives and turn them into well-designed and created emails that land directly in the inbox of your prospects."

var homeEmailMHeading = "Email Marketing"

var homeEmailMImg = "resources/img/hs_middle_icon5@2x.png"

var homeEMailM = document.getElementById('emailM');

var homeEmailMCTA = "Want to talk to us about email marketing?"

homeEmailM.onclick = function () {
    homeEmailMClicked();
    cellEMClicked();
};

var homeEmailMClicked = function () {
    homeServiceText.innerHTML = homeEmailMText;
    homeServiceHeading.innerHTML = homeEmailMHeading;
    homeServiceMidImg.src = homeEmailMImg;
    homeServiceCTA.innerHTML = homeEmailMCTA;
};


var msEM = document.getElementById('ms-em-mobile');

var emIsShowing = false;



var cellEMClicked = function () {

    var mq = window.matchMedia( "(max-width: 1024px)");

    if (mq.matches) {

        if (emIsShowing === false) {

            emIsShowing = true;

            console.log('It was clicked');
            msEM.style.display='block';
            msEM.classList.add('animated');
            msEM.classList.add('fadeIn');
            msEM.style.height = "270px";
            msEM.style.background = "#404040";
            homeEmailM.style.height = "375px";

        } else if (emIsShowing === true)  {

            console.log('It was clicked AGAIN');
            msEM.style.display='none';
            homeEmailM.style.height = "100px";

            emIsShowing = false;

        }

        console.log('Is Showing is true')


    } else {
        console.log('No need for height increase.')
    }
};





//Content Marketing Service


var homeContentMText = "Content marketing goes hand and hand with your other marketing strategies and supports them. If you have a website you want to drive traffic to through SEO and ppc ads, it should have nice web copy, blog posts, nice photos, and other good content for users to see and navigate through. To be successful with email marketing, the content sent to your list needs to be helpful, interesting, and well-designed. This is content marketing, and we can help make sure the content you put out is great and what your prospects are interested in seeing."

var homeContentMHeading = "Content Marketing"

var homeContentMImg = "resources/img/hs_middle_icon6@2x.png"

var homeContentM = document.getElementById('homeContentM');

var homeContentMCTA = "Want to talk to us about content marketing?"

homeContentM.onclick = function () {
    homeContentMClicked();
    cellCMClicked();
};

var homeContentMClicked = function () {
    homeServiceText.innerHTML = homeContentMText;
    homeServiceHeading.innerHTML = homeContentMHeading;
    homeServiceMidImg.src = homeContentMImg;
    homeServiceCTA.innerHTML = homeContentMCTA;
};


var msCM = document.getElementById('ms-cm-mobile');

var cmIsShowing = false;



var cellCMClicked = function () {

    var mq = window.matchMedia( "(max-width: 1024px)");

    if (mq.matches) {

        if (cmIsShowing === false) {

            cmIsShowing = true;

            console.log('It was clicked');
            msCM.style.display='block';
            msCM.classList.add('animated');
            msCM.classList.add('fadeIn');
            msCM.style.height = "270px";
            msCM.style.background = "#404040";
            homeContentM.style.height = "375px";

        } else if (cmIsShowing === true)  {

            console.log('It was clicked AGAIN');
            msCM.style.display='none';
            homeContentM.style.height = "100px";

            cmIsShowing = false;

        }

        console.log('Is Showing is true')


    } else {
        console.log('No need for height increase.')
    }
};







//Online PPC Ads Service


var homeAdsText = "Pay-per click advertising is a great way to get both a nice and an immediate ROI for your efforts. According to Disruptive advertising, 86% of American consumers use the internet to search for local businesses that can take care of their wants/needs, and 46% of internet users can’t tell the difference between a ppc ad and an organic search result. By targeting the right people, you can be showing up at the top of the search results when people search for your real estate services."

var homeAdsHeading = "Online PPC Ads"

var homeAdsImg = "resources/img/hs_middle_icon7@2x.png"

var homeAds = document.getElementById('homeAds');

var homeAdsCTA = "Want to talk to us about ppc ads?"

homeAds.onclick = function () {
    homeAdsClicked();
    cellAdsClicked();
};


var homeAdsClicked = function () {
    homeServiceText.innerHTML = homeAdsText;
    homeServiceHeading.innerHTML = homeAdsHeading;
    homeServiceMidImg.src = homeAdsImg;
    homeServiceCTA.innerHTML = homeAdsCTA;
};




var msAds = document.getElementById('ms-ads-mobile');

var adsIsShowing = false;



var cellAdsClicked = function () {

    var mq = window.matchMedia( "(max-width: 1024px)");

    if (mq.matches) {

        if (adsIsShowing === false) {

            adsIsShowing = true;

            console.log('It was clicked');
            msAds.style.display='block';
            msAds.classList.add('animated');
            msAds.classList.add('fadeIn');
            msAds.style.height = "270px";
            msAds.style.background = "#404040";
            homeAds.style.height = "375px";

        } else if (adsIsShowing === true)  {

            console.log('It was clicked AGAIN');
            msAds.style.display='none';
            homeAds.style.height = "100px";

            adsIsShowing = false;

        }

        console.log('Is Showing is true')


    } else {
        console.log('No need for height increase.')
    }

};









//Branding Service



var homeBrandingText = "Having a consistent brand message across all marketing outlets is one of the most important factors to bringing in successful results with online marketing strategies. We will take your businesses objectives, beliefs, and values, and make sure they are at the base of all our marketing strategies and that they become known to your prospects. People like to do business with the brands that they relate to and hold their same values."

var homeBrandingHeading = "Branding"

var homeBrandingImg = "resources/img/hs_middle_icon8@2x.png"

document.getElementById('homeBranding');

var homeBrandingCTA = "Want to talk to us about branding?"

homeBranding.onclick = function () {
    homeBrandingClicked();
    cellBrandingClicked();
};

var homeBrandingClicked = function () {
    homeServiceText.innerHTML = homeBrandingText;
    homeServiceHeading.innerHTML = homeBrandingHeading;
    homeServiceMidImg.src = homeBrandingImg;
    homeServiceCTA.innerHTML = homeBrandingCTA;
};


var msBranding = document.getElementById('ms-branding-mobile');

var brandingIsShowing = false;



var cellBrandingClicked = function () {

    var mq = window.matchMedia( "(max-width: 1024px)");

    if (mq.matches) {

        if (brandingIsShowing === false) {

            brandingIsShowing = true;

            console.log('It was clicked');
            msBranding.style.display='block';
            msBranding.classList.add('animated');
            msBranding.classList.add('fadeIn');
            msBranding.style.height = "270px";
            msBranding.style.background = "#404040";
            homeBranding.style.height = "375px";

        } else if (brandingIsShowing === true)  {

            console.log('It was clicked AGAIN');
            msBranding.style.display='none';
            homeBranding.style.height = "100px";

            brandingIsShowing = false;

        }

        console.log('Is Showing is true')


    } else {
        console.log('No need for height increase.')
    }

};


var leadsURL = '/leads-package.html';

var leadsCTACLicked = function () {
    window.open(leadsURL, '_blank');
};

var leadsCTA = document.getElementById('hs-cta');

leadsCTA.onclick = function () {
    leadsCTACLicked();
};

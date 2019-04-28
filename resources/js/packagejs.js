var viewLeads = document.getElementById('view-leads');
var viewUpgraded = document.getElementById('view-upgraded');
var viewPremium = document.getElementById('view-premium');

var leadsLink = 'http://leadpalace.io/leads-package.html';
var upgradedLink = 'http://leadpalace.io/upgraded-package.html';
var premiumLink = 'http://leadpalace.io/premium-package.html';



viewLeads.onclick = function () {
    openLeadsURL();
}

var openLeadsURL = function () {
    window.open(leadsLink, '_blank');
}

viewUpgraded.onclick = function () {
    openUpgradedURL();
}

var openUpgradedURL = function () {
    window.open(upgradedLink, '_blank');
} 

viewPremium.onclick = function () {
    openPremiumURL();
}

var openPremiumURL = function () {
    window.open(premiumLink, '_blank');
} 


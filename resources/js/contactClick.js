var ourContactLink = 'http://leadpalace.io/contact.php';

var questionBtn = document.getElementsByClassName('have-question-contact-btn');
var packageQuestionBtn = document.getElementsByClassName('psi-text-cta-btn');

for (i = 0; i < questionBtn.length; i++) {
    var psiButtons = packageQuestionBtn[i];
    psiButtons.onclick = function () {
        contactClicked();
    };
  };



var contactClicked = function() {
    window.open(ourContactLink, '_blank');
}


for (i = 0; i < questionBtn.length; i++) {
    var questionButtons = questionBtn[i];
    questionButtons.onclick = function () {
        contactClicked();
    };
  };

  console.log(questionBtn);


//var divs = document.querySelectorAll('.love-button.love-button--loved'); 

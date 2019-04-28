<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">

    <meta name ="viewport" content="width=device-width, initial-scale=1.0">

    <title>Consultation Form</title>

    <link rel ="stylesheet" type = "text/css" href="resources/css-sass/styles.css">

    <link rel ="stylesheet" type = "text/css" href="resources/css-sass/queries.css">

    <link rel ="stylesheet" type = "text/css" href ="vendors/css/normalize.css">

    <link rel ="stylesheet" type = "text/css" href ="vendors/css/custom-grid.css">

    <link rel ="stylesheet" type = "text/css" href ="vendors/css/ionicons.min.css">

    <link rel ="stylesheet" type = "text/css" href="vendors/css/animate.css">

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>

    <link href="https://fonts.googleapis.com/css?family=Montserrat:400,400i,500,700" rel="stylesheet">

    <link href="https://unpkg.com/ionicons@4.4.4/dist/css/ionicons.min.css" rel="stylesheet">


  </head>



  <body>

  <div class="header-section js--head-sec">
    <nav>
        <ul class="header-section-ul js--nav-bar">
            <li><a href="http://leadpalace.io/index.php">Home</a></li>
            <li><a href="http://leadpalace.io/services.html">Services</a></li>
            <li><a href="http://leadpalace.io/packages.html">Packages</a></li>
            <li><a href="http://leadpalace.io/contact.php">Contact</a></li>
        </ul>
        <a class="navi-btn js--nav-icon"><i class="ion-navicon-round"></i></a>
        <span class="header-info">
            <p class="header-address">1187 N. Willow #818 Clovis, CA 93611</p>
            <p class="header-phone">(559)305-8697</p>
        </span>
        <span class="header-logo js--nav-logo">
            <img class="header-logo-img" src="resources/img/leadPalaceLogo.png" />
            <p class="header-logo-number">(559)305-8697</p>
        </span>
    </nav>
</div>



    <?php


    $error = "";
    $successMessage = "";

    if ($_POST) {


      if (!$_POST["name"]) {
        $error .="A name is required.<br>";
      }


      if (!$_POST["email"]) {
        $error .="An email is required.<br>";
      }

      if ($_POST['email'] && filter_var($_POST["email"], FILTER_VALIDATE_EMAIL) === false) {
        $error .= "The email adress is invalid.<br>";

      }

      if ($error != "") {
        $error = '<div class="alert alert-danger" role="alert"><p>Sorry, there were error(s) with this submission.</p>' . $error . '</div>';
      }

      else {
        $emailTo = "brandon@leadpalace.io";
        $subject = $_POST['name'];
        $content = $_POST['content'];
        $headers = "From: ".$_POST['email'];


        $message = "Form details below.\n\n";

        $message .= "Name: ".$subject."\n";
        $message .= "Email: ".$email."\n";
        $message .= "Phone Number: ".$phonenum."\n";
        $message .= "Job Title: ".$jobtitle."\n";
        $message .= "Company: ".$company."\n";
        $message .= "Online Marketing Goals: ".$goals."\n";
        $message .= "Current Online Markeitng Efforts: ".$current."\n";
        $message .= "Time To Be Contacted: ".$time."\n";
        $message .= "Like To Gain From Consultation: ".$gain."\n";

        if (mail($emailTo, $subject, $message, $headers)) {
          $successMessage = '<div class="alert alert-success" role="alert"><p>Your message was sent successfully. Happy to hear from you!</p></div>';

        } else {
          $error = "We're sorry, but the message was not sent successfully. Please try again.";
        }
      }
    }

   ?>

    <div class="consultation-form-container">
            <p class="contact-head">Please fill out the form below. We'll be glad to hear from you.</p>
            <div class="contact-form-section">
            <div class="contact-form">
            <div id="error"><? echo $error.$successMessage; ?></div>
                <form method="post">
                    <div class="contact-name">
                        <input type="text" name="name" id="name" placeholder="Name"/>
                    </div>
                    <div class="contact-email">
                        <input type="email" name="email" id="email" placeholder="Email" />
                    </div>
                    <div class="contact-subject">
                        <input type="text" name="phonenum" id="phonenum" placeholder="Phone Number"/>
                    </div>
                    <div class="contact-subject">
                        <input type="text" name="jobtitle" id="jobtitle" placeholder="Job Title"/>
                    </div>
                    <div class="contact-subject">
                        <input type="text" name="company" id="company" placeholder="Company Name"/>
                    </div>
                    <div class="contact-message">
                        <textarea type="text" name="goals" id="goals" placeholder="What are your online marketing goals?"></textarea>
                    </div>
                    <div class="contact-message">
                        <textarea type="text" name="current" id="current" placeholder="What online marketing strategies are you utilizing currently?"></textarea>
                    </div>
                    <div class="contact-message">
                        <textarea type="text" name="time" id="time" placeholder="What time would you like to be contacted for a consultation meeting?"></textarea>
                    </div>
                    <div class="contact-message">
                        <textarea type="text" name="gain" id="gain" placeholder="What would you like to gain from this consultation?"></textarea>
                    </div>
                    <div class="contact-submit-btn">
                    <input type="submit" value="Submit" id="submit" />
                    </div>
                </form>
            </div>
            </div>
    </div>


    <div class="clearfix"></div>


    <div class="footer">
            <div class="footer-content">
              <div class="footer-left">
                  <div class="footer-nav">
                    <ul class="footer-list">
                    <li><a href="http://leadpalace.io/index.php">Home</a></li>
                    <li><a href="http://leadpalace.io/services.html">Services</a></li>
                    <li><a href="http://leadpalace.io/packages.html">Packages</a></li>
                    <li><a href="http://leadpalace.io/contact.php">Contact</a></li>
                    </ul>
                  </div>
              </div>
              <div class="footer-mobile-right">
                  <div class="footer-middle">
                      <div class="footer-mid-block">
                          <img class="footer-mid-logo" src="resources/img/leadPalaceLogo.png" />
                      </div>
                  </div>
                  <div class="footer-right">
                      <div class="footer-right-text">
                              <p>1187 N. Willow #818 Clovis, CA 93611</p>
                              <p>(559)305-8697</p>
                              <p>brandon@leadpalace.io</p>
                      </div>
                      <div class="clearfix"></div>
                      <div class="footer-right-icons">
                          <div class="footer-right-icons-section">
                              <a href="https://www.facebook.com/Lead-Palace-264592061153498/" target="_blank"><img class="footer-icon-img fim-1" src="resources/img/footer-facebook.png" /></a>
                              <a href="https://www.instagram.com/leadpalace/" target="_blank"><img class="footer-icon-img fim-1" src="resources/img/footer-instagram.png" /></a>
                              <a href="https://twitter.com/leadpalace" target="_blank"><img class="footer-icon-img fim-1" src="resources/img/footer-twitter.png" /></a>
                          </div>
                      </div>
                  </div>
              </div>
            </div>
          </div>



</body>


</html>

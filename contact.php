<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">

    <meta name ="viewport" content="width=device-width, initial-scale=1.0">

    <title>Contact</title>

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

      if (!$_POST["subject"]) {
        $error .="A subject field is required.<br>";
      }

      if (!$_POST["content"]) {
        $error .="A content field is required.<br>";
      }

      if ($_POST['email'] && filter_var($_POST["email"], FILTER_VALIDATE_EMAIL) === false) {
        $error .= "The email adress is invalid.<br>";

      }

      if ($error != "") {
        $error = '<div class="alert alert-danger" role="alert"><p>Sorry, there were error(s) with this submission.</p>' . $error . '</div>';
      }

      else {
        $emailTo = "brandon@leadpalace.io";
        $subject = $_POST['subject'];
        $content = $_POST['content'];
        $name = $_POST['name'];
        $headers = "From: ".$_POST['email'];


        $message = "Form details below.\n\n";

        $message .= "Name: ".$name."\n";
        $message .= "Content: ".$content."\n";

        if (mail($emailTo, $subject, $message, $headers)) {
          $successMessage = '<div class="alert alert-success" role="alert"><p>Your message was sent successfully. Happy to hear from you!</p></div>';

        } else {
          $error = "We're sorry, but the message was not sent successfully. Please try again.";
        }
      }
    }

   ?>


    <div class="contact-section-main">
        <div class="home-contact-heading">
            <p>Contact</p>
            <div class="home-contact-heading-bar"></div>
        </div>
        <div class="contact-section-boxes">
            <div class="call span-1-of-2 contact-left">
                <div class="contact-left-container">
                    <p class="contact-head">We’d Be Glad To Hear From You</p>
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
                                <input type="text" name="subject" id="subject" placeholder="Subject"/>
                            </div>
                            <div class="contact-message">
                                <textarea type="text" name="content" id="content" placeholder="Message"></textarea>
                            </div>
                            <div class="contact-submit-btn">
                            <input type="submit" value="Submit" id="submit" />
                            </div>
                        </form>
                    </div>
                    </div>
                </div>
            </div>
            <div class="call span-1-of-2 contact-right">
                <div class="contact-right-container">
                    <p class="contact-head">Get A FREE Consultation</p>
                    <p class="contact-right-body">Interested in starting a project with us? Please fill out our project inquiry form below and we will provide a free consultation to discuss your ideas with you and find how we can help. The form will ask for some general info about your project idea to help us gain some insight and get the ball rolling in the right direction.</p>

                        <div class="inquiry-btn">
                        <p>Consultation Form</p>
                        </div>
                </div>
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

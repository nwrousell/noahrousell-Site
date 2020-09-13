<?php

    $errors = array('email' => '', 'message' => '');
    $email = '';
    $message = '';

    if(isset($_POST['submit'])){
        $send = True;
        $email = $_POST['email'];
        $message = $_POST['message'];

        // check email
        if(empty($email)){
            $errors['email'] = 'An email is required';
            $send = False;
        }else {
            if(!filter_var($email, FILTER_VALIDATE_EMAIL)){
                $errors['email'] = 'A proper email adress is required';
                $send = False;
            }
        }

        // check message
        if(empty($message)){
            $errors['message'] = 'A message is required';
            $send = False;
        }

        if($send){
            $mailTo = "noah@rousell.org";

            $headers = "From: " . $email;
            $msgBody = "You have recieved a message from " . $email . ".\n\nMessage: " . $message;

            mail($mailTo, $headers, $msgBody, $headers);
            header('Location: contact.php?mailsend');
        }
    } // end of form validation
 ?>
<!-- HTML -->
<div id="contact"class="frame-full hide">
    <div class="outside-container">
        <div class="container">
            <div class="form-container grey darken-3">
                <h1 class="regular-text center">Contact</h1>
                <form id="contact-form"class="" action="contact.php" method="POST">
                    <label class="regular-text text-left">Email</label>
                    <input class="grey darken-4" type="text" name="email" value="<?php echo $email ?>">
                    <div class="red-text">
                        <?php echo $errors['email']; ?>
                    </div>
                    <label class="regular-text text-left">Message</label>
                    <textarea name="message" class="regular-text grey darken-4"><?php echo $message ?></textarea>
                    <div class="red-text">
                        <?php echo $errors['message']; ?>
                    </div>
                    <div class="center-align">
                        <input type="submit" name="submit" value="submit" class="submit btn z-depth-0 regular-text grey darken-4">
                    </div>
                </form>
            </div>
        </div>
    </div>
    <div class = "arrow-left-container bottom-left">
        <i class="material-icons highlight-text large pointer-on-hover">keyboard_arrow_left</i>
    </div>
</div>

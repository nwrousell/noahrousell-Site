<?php
    // Contact Form Code
    $errors = array('email' => '', 'message' => '');
    $email = '';
    $message = '';
    $formHideClass = '';
    $successMsg = '';
    $formHeading = 'Contact';

    // Check if mailsend is in url
    if(isset($_GET['mailsend'])){
        $formHideClass = 'hide';
        $formHeading = 'Success!';
        $successMsg = "Thanks for reaching out, I'll get back to you soon :)";
    }

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
            # spam protection
            if (isset($_POST['website']) && $_POST["website"] == "") {
                # Send the Message if spam field is empty
                $mailTo = "noah@rousell.org";

                $headers = "From: " . $email;
                $msgBody = "You have recieved a message from " . $email . ".\n\nMessage: " . $message;

                mail($mailTo, $headers, $msgBody, $headers);
                header('Location: index.php?page=contact&mailsend');
            } else {
                http_response_code(400);
                exit;
            }

        }
    } // end of form validation
 ?>
<?php include 'templates/header.php'; ?>

<?php include 'home.php'; ?>

<?php include 'about.php'; ?>

<?php include 'projects.php'; ?>

<?php include 'contact.php'; ?>

<div class="transition-effect active">

</div>

<?php include 'templates/footer.php'; ?>

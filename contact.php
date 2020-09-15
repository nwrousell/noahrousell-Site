<!-- HTML -->
<div id="contact"class="frame-full hide">
    <div class="outside-container">
        <div class="container">
            <div class="form-container grey darken-3">
                <h1 class="regular-text center"><?php echo $formHeading; ?></h1>
                <form id="contact-form"class="<?php echo $formHideClass; ?>" action="index.php?page=contact" method="POST">
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
                <h3 class="regular-text"><?php echo $successMsg; ?></h3>
            </div>
        </div>
    </div>
    <div class = "arrow-left-container bottom-left">
        <i class="material-icons highlight-text large pointer-on-hover">keyboard_arrow_left</i>
    </div>
</div>

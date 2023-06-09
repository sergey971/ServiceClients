<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./style.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM" crossorigin="anonymous">
</head>
<title>Document</title>
</head>

<body>
    <div class="wrapper">
        <div class="container">
            <h1>The fieldset element</h1>
            
            <form action="#" class="form" id="form">
                <fieldset>
                    <legend>Personalia:</legend>
                    <div class="input__box">
                        <label for="fname">First name:</label>
                        <input data-required="true" type="text" id="fname" name="fname">
                    </div>
                    <div class="input__box">
                        <label for="lname">Last name:</label>
                        <input data-max-length="6" data-min-length="2" type="text" id="lname" name="lname">
                    </div>
                    <div class="input__box">    
                        <label for="email">Email:</label>
                        <input data-required="true"  type="email" id="email" name="email">
                    </div>
                    <div class="input__box">
                        <label for="birthday">Birthday:</label>
                        <input type="date" id="birthday" name="birthday">
                    </div>
                    <input type="submit" value="Submit">
                </fieldset>
            </form>
        </div>
    </div>
    <script src="./js/main.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"
    integrity="sha384-geWF76RCwLtnZ8qwWowPQNguL3RmwHVBC9FhGdlKrxdiJJigb/j/68SIy3Te4Bkz"
        crossorigin="anonymous"></script>
</body>

</html>
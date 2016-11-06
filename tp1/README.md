# TP1 : Page statique et découverte de Bootstrap 3.

Le but ici est de découvrir [Bootstrap 3](http://getbootstrap.com/).

## Etape 1

Créer une page `index.html` en s'inspirant du [Getting Started](http://getbootstrap.com/getting-started/) de Bootstrap
en utilisant les CDN, avec :

    <!DOCTYPE html>
    <html>
        <head>
            <meta charset="utf-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1">
            <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
            <title>Bootstrap 101 Template</title>

            <!-- Bootstrap -->
            <!-- Latest compiled and minified CSS -->
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"
                  integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">

            <!-- Optional theme -->
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css"
                  integrity="sha384-rHyoN1iRsVXV4nD0JutlnGaslCJuC7uwjduW9SVrLvRYooPp2bWYgmgJQIXwl/Sp" crossorigin="anonymous">

            <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
            <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
            <!--[if lt IE 9]>
            <script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
            <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
            <![endif]-->
        </head>
        <body>
            <div class="container">
                <h1>Hello, world!</h1>
            </div>

            <!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
            <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
            <!-- Include all compiled plugins (below), or include individual files as needed -->
            <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"
                integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa"
                crossorigin="anonymous"></script>
        </body>
    </html>

## Etape 2

Ajoutons une [NavBar](http://getbootstrap.com/components/#navbar-fixed-top) statique
en couleur inversées avec un nom (*brand*) maais aucun lien.

A ce stade il va falloir customiser un peu notre page pour décaller le contenu avec de css, donc créer un fichier `style.css` et l'inclure dans le fichier `index.html` en y mettant :

    body { padding-top: 70px; }

Ajoutons une [list-group](http://getbootstrap.com/components/#list-group-custom-content) décrivant les bières :




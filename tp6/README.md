# TP 6 : Ajax

Bon, an a vu brièvement de l'appel asynchrone avec [get()](https://api.jquery.com/jquery.get/) pour
charger notre liste de bière. Cette méthode (comme toutes celles concernant les appels HTTP) a cette signature :

    var jqxhr = $.get( "example.php", function() {
      alert( "success" );
    })
      .done(function() {
        alert( "second success" );
      })
      .fail(function() {
        alert( "error" );
      })
      .always(function() {
        alert( "finished" );
      });
     
L'idée est de câbler notre application sur un vrai service REST.

La documentation de ce service ce trouve là [http://vps288382.ovh.net:4567/api-doc/index.html](http://vps288382.ovh.net:4567/api-doc/index.html)

Récupérons de la liste des bières. Branchons donc cette API. 

Traitons le cas d'erreur 

    .fail(function() {
        console.error( "error" );
    })
    
Faisons de même pour le détail d'une bière, mais notre événement custom n'enverra que l'id de la bière.
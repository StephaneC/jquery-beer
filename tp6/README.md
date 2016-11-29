# TP 6 : Ajax

Bon, an a vu brièvement de l'appel asynchrone avec [get()](https://api.jquery.com/jquery.get/) pour
charger notre liste de bière. Cette méthode (comme toutes celles concernant les appels HTTP) utilise $.ajax(). 
on peut ajouter un handler générique

```js
$.ajaxSetup({
  error: function(xhr, status, error) {
    alert("An AJAX error occured: " + status + "\nError: " + error);
  }
});
```
     
L'idée est de câbler notre application sur un vrai service REST.

La documentation de ce service ce trouve là [http://vps288382.ovh.net:4567/api-doc/index.html](http://vps288382.ovh.net:4567/api-doc/index.html)

Récupérons de la liste des bières. Branchons donc cette API. 

Dans `js/beers.js` : 

```js
$.fn.beerListComponent.defaults = {
    baseUrl: "http://vps288382.ovh.net:4567/api/beers"
};
```
    
Puis pour faire l'appel ajax : 

```js
$.get($.fn.beerListComponent.defaults.baseUrl, function (data) { ...});
```

Faisons de même pour le détail d'une bière, mais notre événement custom n'enverra que l'id de la bière.

Direction le [TP7](../tp7).
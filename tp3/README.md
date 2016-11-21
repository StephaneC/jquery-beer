# TP3 : Modularisation

# Etape 1

Créons un fichier `js/beerList.js`, insérons le dans `index.html` et plaçons-y le code "métier" en utilisant
le [mécanisme d'extension](http://api.jquery.com/jQuery.fn.extend/) de JQuery :

    jQuery.fn.extend({
      beerList: function(data) {
        // ...
      },
      displayTotal : function(total) {
        // ...
      }
    });

Puis dans `js/beers.js` nous pourrons appeler directement :

    $('#beersList').beerList(data);

Attention, au sein de la fonction `Beerlist`, **this** fait référence à l'élément qui sera surchargé.
Mais au sein du `forEach`, **this** fait référence à autre chose. Il faut donc placer le **this** de
la fonction dans une variable.

# Etape 2

Ajoutons un filtre à notre liste :

    <div class="form-group">
        <label class="sr-only" for="filter">Filter</label>
        <div class="input-group">
            <input type="text" class="form-control" id="filter" placeholder="Filter"
                   onkeyup="filter(this, '#beersList')">
            <div class="input-group-addon"><span class="glyphicon glyphicon-search" aria-hidden="true"></span></div>
        </div>
    </div>
    <ul class="list-group" id="beersList"></ul>

Puis dans `js/beers.js` anjoutons une fonction :

    function filter(element, target) {
        // ...
    }

Cette fonction prend 2 arguments :
+ **element** : alimenté par *this* et correspond au champ text
+ **target** : correspond à la liste (*<ul>*)

D'abord, récupérons ce qui a été saisi :

     var value = $(element).val();

Puis pour chaque élément de la liste :

    $(target + ' > li').each(function () { .. });

On [affiche ou masque](http://api.jquery.com/category/effects/basics/)  les éléments :

    if ($(this).text().search(value) > -1) {
        $(this).show();
    } else {
        $(this).hide();
    }

Notez ici que **this** fait référence à l'élément *<li>*.

# Etape 3

Rendre ce fitre insensible à la casse

Vous avez remarqué le `onkeyup` ? Modularisons ce filtre et regadons les événements dans le [TP4](../tp4/)
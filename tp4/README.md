# TP 4 : Evénements

Le HTML et JavaScript se marient bien (en même temps, c'est fait pour). On peut attraper de [événements](http://api.jquery.com/category/events/) avec JQuery.

## Etape 1

Refactorons le filter pour en faire un "module" en utilisant l'événement [keyUp()](http://api.jquery.com/keyup/).

Créons la fonction `filter` pour n'afficher que le total des bière filtrées.

    filter: function (target, data, total) {
        this.keyup(function () {
            var dataFiltered = [];
            if (this.value !== '' && this.value !== undefined) {
                [...]
            }
            target.empty();
            total.empty();
            target.beerList(dataFiltered);
            total.displayTotal(dataFiltered.length, data.length);
        });
    }
    
Créons un "vrai" WebComponent et remplaçon les `<li>` par des `<a>` (cf [list-group](http://getbootstrap.com/components/#list-group-linked))

    beerListComponent: function () {
        var filter = $('<div></div>').load('tpl/beerListFilter.html').appendTo(this);
        var container = $('<ul></ul>').addClass('list-group').attr('id', 'beersList').appendTo(this);
        var total = $('<p></p>').appendTo(this);
        $.get('../data/beers.json', function (data) {
            filter.find('#filter').filter(container, data, total);
            container.beerList(data);
            total.displayTotal(data.length, data.length);
        });
        return this;
    },
    beerList: function (data) {
        var container = this;
        data.forEach(function (item) {
            var alc = $('<span></span>').addClass('badge').text(item.alcohol);
            var elem = $('<a></a>').addClass('list-group-item').append(alc, item.name);
            container.append(elem);
        });
        return this;
    },
    displayTotal: function (filtered, total) {
        this.empty();
        this.append('Total number of beers: ', filtered, '/', total);
        return this;
    },
    [...]
    
## Etape 2 

Ok ajoutons un événement [click()](http://api.jquery.com/click/) sur chaque item de la liste : 

    var elem = $('<a></a>').addClass('list-group-item').attr('href', '#').append(alc, item.name).click(function(event) {
        console.log(item);
    });
    
Puis ajoutons une classe CSS spéciale `active` sur l'élément cliqué en passant par l'objet `event` 
(cf [event](http://api.jquery.com/category/events/event-object/) et [target](http://api.jquery.com/event.target/))

Il faut également [retirer](http://api.jquery.com/removeClass/) cette classe `active` des autres éléments de la liste
soit en passant par le [parent](http://api.jquery.com/parent/) puis les [enfants](http://api.jquery.com/children/)
soit en passant par les [voisins](http://api.jquery.com/siblings/).

Ok, passons au détail avec le [TP 5](../tp5)
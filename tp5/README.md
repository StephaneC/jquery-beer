# TP 5 : Détail des bières

Passons au détail d'une bière. De la même manière créons un composant avec un template `tpl/beerDetail.html` :

    <div class="row well">
        <div class="col-sm-4 thumbnail"><img id="beerImg"></div>
        <div class="col-sm-8">
            <h2 id="beerName"></h2>
            <p id="beerDescription"></p>
        </div>
    </div>
    
dans `js/beers.js` :

    $('#beerListComponent').beerListComponent($('#beerDetailComponent'));
    
dans `index.html` : 

    <div class="row">
        <div class="col-md-4 col-sm-12">
            <div id="beerListComponent"></div>
        </div>
        <div class="col-md-8 col-sm-12">
            <div id="beerDetailComponent"></div>
        </div>
    </div>
    
    
enfin modifions : 
 
     beerListComponent: function (detail) { 
        [...]
        container.beerList(data, detail);
     },
     
     [...]
     
     beerList: function (data, detail) {
        [...]
        var elem = $('<a></a>').addClass('list-group-item').attr('href', '#').append(alc, item.name).click(function (event) {
            var target = $(event.target);
            target.siblings().removeClass('active');
            target.addClass('active');
            detail.empty();
            detail.beerDetail(item);
            event.preventDefault();
            
     [...]
     
     beerDetail: function (beer) {
         if (beer !== undefined) {
             this.load('tpl/beerDetail.html', function () {
                 $('#beerImg').attr('src', '..' + beer.img);
                 var alc = $('<span></span>').addClass('badge').text(beer.alcohol);
                 $('#beerName').append(alc, ' ', beer.name);
                 $('#beerDescription').text(beer.description);
             });
         }
     },
     [...]
     
Notez le handler en second argument de `this.load`, il est appelé une fois le template chargé.

# Etape 2 

Bon, on peut faire plus propre en liant un événement sur le click : [trigger()](http://api.jquery.com/trigger/)  : 

Dans `js/beers.js` :

    $(document).ready(function () {
        $('#beerListComponent').beerListComponent();
        $('#beerDetailComponent').beerDetail();
    });
    
Dans `js/beerList.js` : 

    .click(function (event) {
        var target = $(event.target);
        target.siblings().removeClass('active');
        target.addClass('active');
        $('*').trigger('beerDetail', [item]);
        event.preventDefault();
    });
     

`$('*').trigger('beerDetail', [item]);` : on envoie un événement sur tous les sélecteurs (`$('*')`) s'appelant `beerDetail`
et ayant pour paramètre : `[item]`.

Dans la fonction `beerDetail` il va falloir se mettre à l'écoute de cet événement avec [on()](http://api.jquery.com/on/)] :


    var detail = this;
    this.on('beerDetail', function (event, beer) {
        [...]
    });

Voilà, c'est quand même plus propre.

direction le [TP6](../tp6).
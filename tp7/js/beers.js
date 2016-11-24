$(document).ready(function () {
    var baseUrl = 'http://vps288382.ovh.net:4567/api/beers';
    $.fn.beerListComponent.defaults = {
        baseUrl: "http://localhost:4567/api/beers"
    };

    $('#beerListComponent').beerListComponent();
    $('#beerDetailComponent').beerDetail();
});
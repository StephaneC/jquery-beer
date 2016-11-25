$(document).ready(function () {
    $.ajaxSetup({
        error: function (xhr, status, error) {
            console.error("An AJAX error occured: " + status + "\nError: " + error);
        }
    });

    $.fn.beerListComponent.defaults = {
        baseUrl: "http://vps288382.ovh.net:4567/api/beers"
    };

    $('#beerListComponent').beerListComponent();
    $('#beerDetailComponent').beerDetail();
});
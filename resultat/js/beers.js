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

    $('#saveBtn').click(function () {
        var b = {
            id: $('#addBeer #addBeerId').val(),
            name: $('#addBeer #addBeerName').val(),
            alcohol: $('#addBeer #addBeerAlcohol').val(),
            description: $('#addBeer #addBeerDescription').val()
        };
        $.post($.fn.beerListComponent.defaults.baseUrl, JSON.stringify(b), function (data) {
            $('#myModal').modal('hide');
            $('*').trigger('beerRefresh', []);
            $('*').trigger('beerDetail', [data.id]);
        });
        event.preventDefault();
    });
});
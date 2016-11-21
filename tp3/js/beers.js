$(document).ready(function(){
        $.get("js/data/beers.json", function (data) {
            var container = $('#beersList');
            data.forEach(function(item) {
                var alc = $('<span></span>').addClass('badge').text(item.alcohol);
                var elem = $('<li></li>').addClass('list-group-item').append(alc, item.name);
                container.append(elem);
            });
            var total = $('<p></p>').append('Total number of beers: ',data.length);
            container.after(total);
        });
    });
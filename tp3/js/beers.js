$(document).ready(function(){
        $.get("js/data/beers.json", function (data) {
            var container = $('#beersList');
            data.forEach(function(item) {
                var elem = $('<li></li>').addClass('list-group-item');
                var alc = $('<span></span>').addClass('badge').text(item.alcohol);
                elem.html(alc).append(' ' + item.name);
                container.append(elem);
            });
            $(".result").html(data);
        });
    });
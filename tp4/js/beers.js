$(document).ready(function () {
    $.get("data/beers.json", function (data) {
        $('#beersList').beerList(data);
    });
});

function filter(element, target) {
    var value = $(element).val();
    $(target + ' > li').each(function () {
        if ($(this).text().search(value) > -1) {
            $(this).show();
        } else {
            $(this).hide();
        }
    });
}
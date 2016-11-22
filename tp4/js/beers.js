$(document).ready(function () {
    $('#beerListComponent').beerList();
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
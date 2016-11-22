$.fn.extend({
    beerList: function () {
        var div = this;
        $.get('../data/beers.json', function (data) {
            $('<div></div>').load('tpl/beerListFilter.html').appendTo(div);
            var container = $('<ul></ul>').addClass('list-group').attr('id', 'beersList').appendTo(div);
            data.forEach(function (item) {
                var alc = $('<span></span>').addClass('badge').text(item.alcohol);
                var elem = $('<li></li>').addClass('list-group-item').append(alc, item.name);
                container.append(elem);
            });
            $('<p></p>').displayTotal(data.length).appendTo(div);
        });
        return this;
    },
    displayTotal: function (total) {
        this.append('Total number of beers: ', total);
        return this;
    }
});
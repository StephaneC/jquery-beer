$.fn.extend({
    /**
     *
     * @param detail
     * @returns {beerListComponent}
     */
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
    /**
     *
     * @param data
     * @returns {beerList}
     */
    beerList: function (data) {
        var container = this;
        data.forEach(function (item) {
            var alc = $('<span></span>').addClass('badge').text(item.alcohol);
            var elem = $('<a></a>').addClass('list-group-item').attr('href', '#').append(alc, item.name)
                .click(function (event) {
                    var target = $(event.target);
                    target.siblings().removeClass('active');
                    target.addClass('active');
                    $('*').trigger('beerDetail', [item]);
                    event.preventDefault();
                });
            container.append(elem);
        });
        return this;
    },
    /**
     *
     * @param filtered
     * @param total
     * @returns {displayTotal}
     */
    displayTotal: function (filtered, total) {
        this.empty();
        this.append('Total number of beers: ', filtered, '/', total);
        return this;
    },
    beerDetail: function () {
        var detail = this;
        this.on('beerDetail', function (event, beer) {
            if (beer !== undefined) {
                detail.load('tpl/beerDetail.html', function () {
                    $('#beerImg').attr('src', '..' + beer.img);
                    var alc = $('<span></span>').addClass('badge').text(beer.alcohol);
                    $('#beerName').append(alc, ' ', beer.name);
                    $('#beerDescription').text(beer.description);
                });
            }
        });
    },
    /**
     *
     * @param target
     * @param data
     * @param total
     */
    filter: function (target, data, total) {
        this.keyup(function () {
            var dataFiltered = [];
            if (this.value !== '' && this.value !== undefined) {
                var regexp = new RegExp(this.value, 'i');
                data.forEach(function (b) {
                    if (regexp.test(b.name)) {
                        dataFiltered.push(b);
                    }
                });
                target.empty();
                total.empty();
                target.beerList(dataFiltered);
                total.displayTotal(dataFiltered.length, data.length);
            }
        });
    }
});
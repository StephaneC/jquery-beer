$.fn.extend({
    beerList: function (data) {
        var container = this;
        data.forEach(function (item) {
            var alc = $('<span></span>').addClass('badge').text(item.alcohol);
            var elem = $('<li></li>').addClass('list-group-item').append(alc, item.name);
            container.append(elem);
        });
        container.displayTotal(data.length);
    },
    displayTotal : function(total) {
        this.after($('<p></p>').append('Total number of beers: ', total));
    }
});
var timer_loading = setInterval(function(){
    var pos_x = parseInt($('.jumbotron').css('background-position-x'));
    pos_x--;
    $('.jumbotron').css('background-position-x', pos_x);
}, 15);

document.addEventListener('DOMContentLoaded', function () {
    var URL = "1gjSO6dzKyucIQMkM3yo4DfZf7tSPOCfZ4wSMP5NInlU"
    Tabletop.init({ key: URL, callback: showInfo, simpleSheet: true })
});

function showInfo(data) {
    var tableOptions = {
        "data": data,
        "pagination": 100,
        "tableDiv": "#fullTable",
        "filterDiv": "#fullTableFilter"
    }
    Sheetsee.makeTable(tableOptions);
    Sheetsee.initiateTableFilter(tableOptions);


    var categories = [];
    $('.item').each(function () {
        var category = $(this).data('category');
        if ($.inArray(category, categories) == -1) {
            categories.push(category);
        }
    });


    categories.sort();

    $(categories).each(function (key, elem) {
        $('.pagination').append('<li class="page-item btn_filter"><a class="page-link" href="#' + elem + '">' + elem + '</a></li>');
    })


    $('.pagination').hide().css('visibility', 'visible').fadeIn('slow', function(){
        clearInterval(timer_loading);
    });

    $('.btn_filter').click(function () {

        $('.btn_filter').removeClass('active');
        $(this).addClass('active');

        var type = $(this).find('a').attr('href').replace('#', '');

        if (type) {
            $('.item').hide();

            $('.item[data-category$="' + type + '"]').show();

        } else {
            $('.item').show();
        }

    });

    

    



    if (document.location.hash) {
        $('.btn_filter a[href$="' + decodeURI(document.location.hash.replace('#', '')) + '"]').click();
    }
}


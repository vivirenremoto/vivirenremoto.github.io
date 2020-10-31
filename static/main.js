document.addEventListener('DOMContentLoaded', function () {
    var URL = "1gjSO6dzKyucIQMkM3yo4DfZf7tSPOCfZ4wSMP5NInlU"
    Tabletop.init({ key: URL, callback: showInfo, simpleSheet: true })
})

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

            $('.pagination').append('<li class="page-item btn_filter"><a class="page-link" href="#' + category + '">' + category + '</a></li>');
        }
    });

    $('.pagination').hide().css('visibility', 'visible').fadeIn('slow');

    $('.btn_filter').click(function () {

        $('.btn_filter').removeClass('active');
        $(this).addClass('active');

        var type = $(this).find('a').attr('href').replace('#', '');

        if (type) {
            $('.item').hide();
            $('.category_' + type).show();

        } else {
            $('.item').show();
        }

    });



    if (document.location.hash) {
        $('.btn_filter a[href$=' + document.location.hash.replace('#', '') + ']').click();
    }
}


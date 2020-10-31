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

    if (document.location.hash) {
        $('.btn_filter a[href$=' + document.location.hash.replace('#', '') + ']').click();
    }
}


$(function () {
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

    })
});
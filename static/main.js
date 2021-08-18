var timer_loading = setInterval(function(){
    var pos_x = parseInt($('.jumbotron').css('background-position-x'));
    pos_x--;
    $('.jumbotron').css('background-position-x', pos_x);
}, 15);

var sf = 'https://docs.google.com/spreadsheets/d/' + id_spreadsheet + '/gviz/tq?tqx=out:json';
$.ajax({url: sf, type: 'GET', dataType: 'text'})
.done(function(data) {
  const r = data.match(/google\.visualization\.Query\.setResponse\(([\s\S\w]+)\)/);
  if (r && r.length == 2) {
    const obj = JSON.parse(r[1]);
    const table = obj.table;
    const header = table.cols.map(({label}) => label);
    const rows = table.rows.map(({c}) => c.map(({v}) => v));

    let new_table = [];
    for(let i=1; i<rows.length; i++){
        new_table.push({
            category: rows[i][0],
            title: rows[i][1],
            description: rows[i][2],
            photo: rows[i][3],
            url: rows[i][4],
        });
    }

    showInfo(new_table);
    
  }
})
.fail((e) => console.log(e.status));





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


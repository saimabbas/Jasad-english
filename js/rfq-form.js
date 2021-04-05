$(function(){

    $("#rfq-radio-id1").on("click", function(){
      $("#rfq-radio-id1").addClass("rfq-radio-active");
      $("#rfq-radio-id2").removeClass("rfq-radio-active");
    });

    $("#rfq-radio-id2").on("click", function(){
        $("#rfq-radio-id2").addClass("rfq-radio-active");
        $("#rfq-radio-id1").removeClass("rfq-radio-active");
      });

});


$('#nav-progress-rfq-2,#nav-progress-rfq-3,#nav-progress-rfq-4,#nav-progress-rfq-5,#rfq-table,#rfq-table-viewmore').css({
    display: 'none'
});

$('#rfq-pg-2,#rfq-pg-3,#rfq-pg-4,#rfq-pg-5,#rfq-finish-btn').css({
    display: 'none'
});

// topage2

$('#backto-rfq-pg-1').click(function(e) {
              
    e.preventDefault();

    //nav

    $('#nav-progress-rfq-1').css({
        display: 'flex'
    });

    $('#nav-progress-rfq-2,#nav-progress-rfq-2,#nav-progress-rfq-4,#nav-progress-rfq-5').css({
         display: 'none'
    });
    
    // content

    $('#rfq-pg-1').css({
         display: 'block'
    });

    $('#rfq-pg-2,#rfq-pg-2,#rfq-pg-4,#rfq-pg-5,#rfq-finish-btn').css({
         display: 'none'
    });
  
});

// topage2

$('#to-rfq-pg-2,#backto-rfq-pg-2').click(function(e) {
              
    e.preventDefault();

    //nav

    $('#nav-progress-rfq-2').css({
        display: 'flex'
    });

    $('#nav-progress-rfq-1,#nav-progress-rfq-3,#nav-progress-rfq-4,#nav-progress-rfq-5').css({
         display: 'none'
    });
    
    // content

    $('#rfq-pg-2').css({
         display: 'block'
    });

    $('#rfq-pg-1,#rfq-pg-3,#rfq-pg-4,#rfq-pg-5,#rfq-finish-btn').css({
         display: 'none'
    });
  
});

// topage3

$('#to-rfq-pg-3,#backto-rfq-pg-3').click(function(e) {
              
    e.preventDefault();

    //nav

    $('#nav-progress-rfq-3').css({
        display: 'flex'
    });

    $('#nav-progress-rfq-1,#nav-progress-rfq-2,#nav-progress-rfq-4,#nav-progress-rfq-5').css({
         display: 'none'
    });
    
    // content

    $('#rfq-pg-3').css({
         display: 'block'
    });

    $('#rfq-pg-1,#rfq-pg-2,#rfq-pg-4,#rfq-pg-5,#rfq-finish-btn').css({
         display: 'none'
    });
  
});


// topage4

$('#to-rfq-pg-4,#backto-rfq-pg-4').click(function(e) {
              
    e.preventDefault();

    //nav

    $('#nav-progress-rfq-4').css({
        display: 'flex'
    });

    $('#nav-progress-rfq-1,#nav-progress-rfq-2,#nav-progress-rfq-3,#nav-progress-rfq-5').css({
         display: 'none'
    });
    
    // content

    $('#rfq-pg-4').css({
         display: 'block'
    });

    $('#rfq-pg-1,#rfq-pg-2,#rfq-pg-3,#rfq-pg-5,#rfq-finish-btn').css({
         display: 'none'
    });
  
});

// topage5

$('#to-rfq-pg-5,#backto-rfq-pg-5').click(function(e) {
              
    e.preventDefault();

    //nav

    $('#nav-progress-rfq-5').css({
        display: 'flex'
    });

    $('#nav-progress-rfq-1,#nav-progress-rfq-2,#nav-progress-rfq-3,#nav-progress-rfq-4').css({
         display: 'none'
    });
    
    // content

    $('#rfq-pg-5,#rfq-finish-btn').css({
         display: 'block'
    });

    $('#rfq-pg-1,#rfq-pg-2,#rfq-pg-3,#rfq-pg-4').css({
         display: 'none'
    });
  
});

// rfq-table

$('#show-rfq-table').click(function(e) {
              
    e.preventDefault();

    $('#rfq-table').css({
         display: 'block'
    });

});

// rfq-table viewmore

$('#to-rfq-view').click(function(e) {
              
    e.preventDefault();

    $('#rfq-table-viewmore').css({
         display: 'table-cell'
    });

});

 function sright(){
    event.preventDefault();
  $('#cards-data').scrollLeft(600,0);
 }

 function sleft(){
    event.preventDefault();
  $('#cards-data').scrollLeft(-600,0);
 }

 function cright(){
    event.preventDefault();
  $('#cards-data2').scrollLeft(600,0);
 }

 function cleft(){
    event.preventDefault();
  $('#cards-data2').scrollLeft(-600,0);
 }

    

//

$('#addressform,#checkouth1,#checkoutoverview,#singleaddcheckout,#multipleaddcheckout,#checkouttotal,#blankadddiv,#checkpaymenth2,#checkoutnewpayment,#checkoutpaymentpage,#checkoutdonepage').css({
         display: 'none'
    });

// nav-progress

$('#nav-checkout-confirm,#nav-checkout-payment,#nav-checkout-done').css({
    display: 'none'
});


$('#addcheckoutadd').click(function(e) {
              
    e.preventDefault();
    
    $('#addressform,#checkouth2').css({
         display: 'block'
    });
    
    $('#checkoutaddress,#checkouth1').css({
         display: 'none'
    });
  
});

// 

$('#tocheckmain').click(function(e) {
              
    e.preventDefault();
    
    $('#addressform,#checkouth1').css({
         display: 'none'
    });
    
    $('#checkoutaddress,#checkouth2').css({
         display: 'block'
    });
  
});


$('#toconfirmcheckout').click(function(e) {
              
    e.preventDefault();
    
    $('#addressform,#checkouth1,#checkoutaddress,#checkouth2,#nav-checkout-shipping,#nav-checkout-payment,#nav-checkout-done').css({
         display: 'none'
    });
    
    $('#checkoutoverview,#singleaddcheckout,#checkouttotal').css({
         display: 'block'
    });

    $('#nav-checkout-confirm').css({
        display: 'flex'
    });
  
});


$('#toconfirmcheckoutmulti').click(function(e) {
              
    e.preventDefault();
    
    $('#addressform,#checkouth1,#checkoutaddress,#checkouth2,#singleadddiv,#nav-checkout-shipping,#nav-checkout-payment,#nav-checkout-done').css({
         display: 'none'
    });
    
    $('#checkoutoverview,#multipleaddcheckout,#checkouttotal,#blankadddiv').css({
         display: 'block'
    });

    $('#nav-checkout-confirm').css({
        display: 'flex'
    });
  
});

$('#addpaymentcheckout').click(function(e) {
              
    e.preventDefault();
    
    $('#checkoutvisa,#checkpaymenth1').css({
         display: 'none'
    });
    
    $('#checkoutnewpayment,#checkpaymenth2').css({
         display: 'block'
    });
  
});

$('#tocheckmainpayment').click(function(e) {
              
    e.preventDefault();
    
    $('#checkoutvisa,#checkpaymenth1').css({
        display: 'block'
   });
   
    $('#checkoutnewpayment,#checkpaymenth2').css({
        display: 'none'
    });
  
});

$('#tocheckoutpayment1,#tocheckoutpayment2').click(function(e) {
              
    e.preventDefault();
    
    $('#checkoutpaymentpage').css({
        display: 'block'
   });
   
    $('#checkoutshippingpage,#checkoutconfirmpage,#addressform,#nav-checkout-confirm,#nav-checkout-shipping,#nav-checkout-done').css({
        display: 'none'
    });

    $('#nav-checkout-payment').css({
        display: 'flex'
    });
  
});


$('#visa-cardsc1,#todonepage').click(function(e) {
              
    e.preventDefault();
    
    $('#checkoutdonepage').css({
        display: 'block'
   });
   
    $('#checkoutshippingpage,#checkoutconfirmpage,#checkoutpaymentpage,#addressform,#nav-checkout-payment,#nav-checkout-shipping,#nav-checkout-confirm').css({
        display: 'none'
    });

    $('#nav-checkout-done').css({
        display: 'flex'
    });
  
});



$(function(){

    $("#visa-cardsc1").on("click", function(){
      $("#visa-cardsc1").addClass("cardactive");
      $("#visa-cardsc2").removeClass("cardactive");
      $("#visa-cardsc3").removeClass("cardactive");
      $("#visa-cardsc4").removeClass("cardactive");
    });

    $("#visa-cardsc2").on("click", function(){
        $("#visa-cardsc2").addClass("cardactive");
        $("#visa-cardsc1").removeClass("cardactive");
        $("#visa-cardsc3").removeClass("cardactive");
        $("#visa-cardsc4").removeClass("cardactive");
    });

    $("#visa-cardsc3").on("click", function(){
        $("#visa-cardsc3").addClass("cardactive");
        $("#visa-cardsc1").removeClass("cardactive");
        $("#visa-cardsc2").removeClass("cardactive");
        $("#visa-cardsc4").removeClass("cardactive");
    });

    $("#visa-cardsc4").on("click", function(){
        $("#visa-cardsc4").addClass("cardactive");
        $("#visa-cardsc1").removeClass("cardactive");
        $("#visa-cardsc2").removeClass("cardactive");
        $("#visa-cardsc3").removeClass("cardactive");
    });

});

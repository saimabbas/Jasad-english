 
 var count=0;

function closeNav() {
     document.getElementById("mySidenav").style.width = "0";
     document.getElementById("b").style.right = "0";
     count--;
}   

function openNav() {

     if(count==0){  
          document.getElementById("mySidenav").style.width = "370px";
          document.getElementById("b").style.right = "370px";          
          count++; 
     }
     else{ 
          document.getElementById("mySidenav").style.width = "0";
          document.getElementById("b").style.right = "0";
          count--;
     }
}

var countmenu=0;




function openmenu() {

     if(countmenu==0){  
          $('#v-pills-tab').css({
               display: 'block'
          });
          document.getElementById("v-pills-tab").style.width = "370px";
          // document.getElementById("b").style.right = "370px";          
          countmenu++; 
     }
     else{ 
          $('#v-pills-tab').css({
               display: 'none'
          });
          document.getElementById("v-pills-tab").style.width = "0";
          // document.getElementById("b").style.right = "0";
          countmenu--;
     }
}


$('#address-toggle').click(function(e){
     e.preventDefault();
     document.getElementById("v-pills-address-tab").active();
 })

//  $("#v-pills-tab").tabs(); 
    $("address-toggle").click(function () {
            $( "#v-pills-tab" ).tabs( "option", "active", $("#v-pills-tab").tabs('option', 'active')+1 );
        });


// $(function(){
//      $("#navbar-all").load("navbar-all.html"); 
//    });
$(function () {
     $('[data-toggle="tooltip"]').tooltip();
     $(function(){});
     })


     /* Latest compiled and minified JavaScript included as External Resource */

     $(document).ready(function () {
          $('.editBtn').css("background", "white"); 
          $('.editBtn').css("border", "none"); 
          // $('.editField').css("border", "white"); //changes the background of the button
          $('.editBtn').click(function () {
              if ($('.editField').is('[readonly]')) { //checks if it is already on readonly mode
                  $('.editField').prop('readonly', false); //turns the readonly off
                  document.getElementById("img-edit").src = "../images/Icon ionic-md-save.svg";
                  document.getElementById("editf1").focus();
               //    $('[data-toggle="tooltip"]').tooltip("hide");
               //    $('.editBtn').css("background", "grey"); //changes the background of the button
                  $('.editMode').toggleClass('hide'); //hide one glyphicon
                  $('.nonEditMode').addClass('hide'); //show another glyphicon
              } else { //else we do other things
                  $('.editField').prop('readonly', true);
               //    $('[data-toggle="tooltip"]').tooltip()
                  $('.editBtn').css("background", "none");
                  document.getElementById("img-edit").src = "../images/Icon open-pencil.svg";
               //    $('.editBtn').html(<img src="../images/Icon open-pencil.svg"></img>)
                  $('.editMode').toggleClass('hide');
                  $('.nonEditMode').removeClass('hide');
              }
          });
      
      });



      $('.editFieldx').css("border", "white"); 
      $('.editFieldy').css("border", "white"); 

      $(document).ready(function () {
          $('.editBtn2').css("background", "white");
          $('.editField2').css("background", "white");
          $('.editBtn2').css("border", "none"); 
          $('.editBtn2').click(function () {
              if ($('.editField2').is('[readonly]')) {
                  $('.editField2').prop('readonly', false);
                  document.getElementById("img-edit2").src = "../images/Icon ionic-md-save.svg";
                  document.getElementById("editf2").focus();
                  $('.editMode').toggleClass('hide'); 
                  $('.nonEditMode').addClass('hide'); 
              } else {
                  $('.editField2').prop('readonly', true);
                  $('.editBtn2').css("background", "none");
                  document.getElementById("img-edit2").src = "../images/Icon open-pencil.svg";
                  $('.editMode').toggleClass('hide');
                  $('.nonEditMode').removeClass('hide');
              }
          });
      
      });


      $(document).ready(function () {
          $('.editBtn3').css("background", "white");
          $('.editField3').css("background", "white");
          $('.editBtn3').css("border", "none"); 
          $('.editBtn3').click(function () {
              if ($('.editField3').is('[readonly]')) {
                  $('.editField3').prop('readonly', false);
                  document.getElementById("img-edit3").src = "../images/Icon ionic-md-save.svg";
                  document.getElementById("editf3").focus();
                  $('.editMode').toggleClass('hide'); 
                  $('.nonEditMode').addClass('hide'); 
              } else {
                  $('.editField3').prop('readonly', true);
                  $('.editBtn3').css("background", "none");
                  document.getElementById("img-edit3").src = "../images/Icon open-pencil.svg";
                  $('.editMode').toggleClass('hide');
                  $('.nonEditMode').removeClass('hide');
              }
          });
      
      });


     // var counter=0;
     // $("p").hide();
     //  $(document).ready(function(){
          
     //      if(counter==0){  
     //           $("p").focus();          
     //           counter++;            
     //           $("p").show(); 
     //      }
     //      else{ 
     //           $("p").focus();
     //           $("p").hide();
     //           counter--;
     //      }
     //      $("#otherlink-btn2").click(function(){
               
            
     //      });
     //      $("#show").click(function(){

     //      });
     //    });
      

     $('#view-order-btn').click(function() {
          var ix = $(this).index();      
          $('#omain').toggle( ix === 0 );
          $('#odetails').toggle( ix === 1 );
      });

      $('#btn-main,#btn-main2').click(function() {      
               $('#odetails').css({
                    display: 'none'
               });
               $('#omain').css({
                    display: 'block'
               });
               $('#oship').css({
                    display: 'none'
               });
      });

      $('#oship').css({
          display: 'none'
     });

     $('#track-order-btn').click(function() {      
          $('#odetails').css({
               display: 'none'
          });
          $('#omain').css({
               display: 'none'
          });
          $('#oship').css({
               display: 'block'
          });
 });

          $('#resetpasscont').css({
               display: 'none'
          });

     $('#validatepass').click(function() {      
          $('#otpcont').css({
               display: 'none'
          });
          $('#resetpasscont').css({
               display: 'contents'
          });
 });

          $('#addressform,#addshiph1').css({
               display: 'none'
          });

      $('#addshipaddress').click(function() {      
          $('#addressform,#addshiph1').css({
               display: 'block'
          });
          $('#addresscards,#viewallbtn,#notaddshiph1').css({
               display: 'none'
          });
 });
     $('#removeshipaddress').click(function() {      
          $('#addressform,#addshiph1').css({
               display: 'none'
          });
          $('#addresscards,#viewallbtn,#notaddshiph1').css({
               display: 'contents'
          });
     });

     $('#addpaymenth1,#addpayment').css({
          display: 'none'
     });

     $('#addpaymentmethod').click(function() {      
          $('#addpaymenth1,#addpayment').css({
               display: 'contents'
          });
          $('#removepaymenth1,#row1card,#row2card,#row3card,#row4card,#viewallbtn2').css({
               display: 'none'
          });
     });

     $('#removepayment').click(function() {      
          $('#addpaymenth1,#addpayment').css({
               display: 'none'
          });
          $('#removepaymenth1,#row1card,#row2card,#row3card,#row4card,#viewallbtn2').css({
               display: 'contents'
          });
     });

     
     $('#form1').css({
          display: 'none'
     });
     $('#form2').css({
          display: 'none'
     });
     $('#form3').css({
          display: 'none'
     });
     $('#form4').css({
          display: 'none'
     });
     $('#form5').css({
          display: 'none'
     });
     $('#form6').css({
          display: 'none'
     });

     $('#tolistmain').click(function(e) { 
               e.preventDefault();
               
          $('#listmain').css({
               display: 'block'
          });
          $('#form1').css({
               display: 'none'
          });
     });

     $('#toforms').click(function(e) { 
               e.preventDefault();
               
          $('#listmain').css({
               display: 'none'
          });
          $('#form1').css({
               display: 'block'
          });
          $('#v-pills-seller').css({
               background: 'white'
          });
     });

     $('#toform1').click(function(e) { 
                   
          e.preventDefault();
  
          $('#form1').css({
               display: 'block'
          });
          $('#form2').css({
               display: 'none'
          });
          $('#form3').css({
               display: 'none'
          });
          $('#form4').css({
               display: 'none'
          });
          $('#form5').css({
               display: 'none'
          });
          $('#form6').css({
               display: 'none'
          });
     });
     
     $('#toform2').click(function(e) { 
                   
          e.preventDefault();
  
          $('#form1').css({
               display: 'none'
          });
          $('#form2').css({
               display: 'block'
          });
          $('#form3').css({
               display: 'none'
          });
          $('#form4').css({
               display: 'none'
          });
          $('#form5').css({
               display: 'none'
          });
          $('#form6').css({
               display: 'none'
          });
     });
     
     
     $('#toform3').click(function(e) { 
                   
          e.preventDefault();
  
          $('#form1').css({
               display: 'none'
          });
          $('#form2').css({
               display: 'none'
          });
          $('#form3').css({
               display: 'block'
          });
          $('#form4').css({
               display: 'none'
          });
          $('#form5').css({
               display: 'none'
          });
          $('#form6').css({
               display: 'none'
          });
     });

     $('#toform4').click(function(e) {
               
          e.preventDefault();

          $('#form1').css({
               display: 'none'
          });
          $('#form2').css({
               display: 'none'
          });
          $('#form3').css({
               display: 'none'
          });
          $('#form4').css({
               display: 'block'
          });
          $('#form5').css({
               display: 'none'
          });
          $('#form6').css({
               display: 'none'
          });
     });

     $('#toform5').click(function(e) {
               
          e.preventDefault();

          $('#form1').css({
               display: 'none'
          });
          $('#form2').css({
               display: 'none'
          });
          $('#form3').css({
               display: 'none'
          });
          $('#form4').css({
               display: 'none'
          });
          $('#form5').css({
               display: 'block'
          });
          $('#form6').css({
               display: 'none'
          });
     });

     $('#toform6').click(function(e) {
              
          e.preventDefault();

          $('#form1').css({
               display: 'none'
          });
          $('#form2').css({
               display: 'none'
          });
          $('#form3').css({
               display: 'none'
          });
          $('#form4').css({
               display: 'none'
          });
          $('#form5').css({
               display: 'none'
          });
          $('#form6').css({
               display: 'block'
          });
     });



     // task 6

     /* $('#listview,#productpage,#cartpage,#linkprodpage,#linkcheckoutpage').css({
          display: 'none'
     });

     $('#barequippage1,#barequippage2,#barequippage3').click(function(e) {
              
          e.preventDefault();

          $('#listview,#productpage,#cartpage,#linkprodpage,#linkcheckoutpage').css({
               display: 'none'
          });
          $('#productlisting').css({
               display: 'block'
          });
          $('#linkequippage,#pageno').css({
               display: 'block'
          });  
     }); */

     /* $('#cart-icon,#cart-div,#cart-text').click(function(e) {
              
          e.preventDefault();

          $('#listview,#productpage,#linkprodpage,#linkequippage,#productlisting,#pageno').css({
               display: 'none'
          });
          $('#linkcheckoutpage').css({
               display: 'block'
          });
          $('#cartpage').css({
               display: 'block'
          });    
     }); */


     $('#tolistview').click(function(e) {
              
          e.preventDefault();

          $('#gridview').css({
               display: 'none'
          });
          $('#listview').css({
               display: 'block'
          });
         
     });

     $('#togridview').click(function(e) {
              
          e.preventDefault();

          $('#gridview').css({
               display: 'block'
          });
          $('#listview').css({
               display: 'none'
          });
         
     });

     /* $('#prodcard1').click(function(e) {
              
          e.preventDefault();

          $('#productlisting,#pageno').css({
               display: 'none'
          });
          $('#productpage').css({
               display: 'block'
          });
          $('#linkprodpage').css({
               display: 'block'
          });
          $('#linkequippage').css({
               display: 'none'
          });
         
     }); */

     // task 6 end


$(function(){

     $("#visa-cards1").on("click", function(){
       $("#visa-cards1").addClass("cardactive");
       $("#visa-cards2").removeClass("cardactive");
       $("#visa-cards3").removeClass("cardactive");
       $("#visa-cards4").removeClass("cardactive");
     });

          $("#visa-cards2").on("click", function(){
       $("#visa-cards1").removeClass("cardactive");
       $("#visa-cards2").addClass("cardactive");
       $("#visa-cards3").removeClass("cardactive");
       $("#visa-cards4").removeClass("cardactive");
     });
     
          $("#visa-cards3").on("click", function(){
       $("#visa-cards1").removeClass("cardactive");
       $("#visa-cards2").removeClass("cardactive");
       $("#visa-cards3").addClass("cardactive");
       $("#visa-cards4").removeClass("cardactive");
     });

          $("#visa-cards4").on("click", function(){
       $("#visa-cards1").removeClass("cardactive");
       $("#visa-cards2").removeClass("cardactive");
       $("#visa-cards3").removeClass("cardactive");
       $("#visa-cards4").addClass("cardactive");
     });

     $("#addressbtn1").on("click", function(){
       $("#addressbtn1").removeClass("addressbtn");
       $("#addressbtn1").addClass("proceed-form-btn");
       $("#addressbtn1").html("Selected Address");
       $("#addressbtn2").removeClass("proceed-form-btn");
       $("#addressbtn2").addClass("addressbtn");
       $("#addressbtn2").html("Use this Address");
     });

     $("#addressbtn2").on("click", function(){
          $("#addressbtn2").removeClass("addressbtn");
          $("#addressbtn2").addClass("proceed-form-btn");
          $("#addressbtn2").html("Selected Address");
          $("#addressbtn1").removeClass("proceed-form-btn");
          $("#addressbtn1").addClass("addressbtn");
          $("#addressbtn1").html("Use this Address");
     });
});




function loadnav(){
     document.getElementById("navbar-all").load("navbar-all");
}

function loadPage_step_1(){
     window.location="1.2a_register_buyer_individual&business-personal_info.html";
}

function loadPage_ind_step_2(){
     window.location="1.2b_register_buyer_individual-address_info.html";
}

function loadPage_ind_step_3(){
     window.location="1.2c_register_buyer_individual-security&verification(password).html";
}

function loadPage_ind_step_4(){
     window.location="1.2d_register_buyer_individual-security&verification-otp.html";
}

function loadPage_ind_step_5(){
     window.location="1.2e_register_buyer_individual-success.html";
}

function loadPage_bus_step_2(){
     window.location="1.3b_register_buyer_business-address_info.html";
}

function loadPage_bus_step_3(){
     window.location="1.3c_register_buyer_business-primary-contact-Info.html";
}

function loadPage_bus_step_4(){
     window.location="1.3d_register_buyer_business-security&verification(password).html";
}

function loadPage_bus_step_5(){
     window.location="1.3e_register_buyer_business-security&verification-otp.html";
}

function loadPage_bus_step_6(){
     window.location="1.3f_register_buyer_business-success.html";
}

 var timerInterval;

 let minutes = 2;
 let seconds = 0;
 
 let duration = (minutes * 60) + seconds;
 let display = document.querySelector('#timer');
 
 function startTimer(duration, display) {
   var timer = duration, minutes, seconds;
   timerInterval = setInterval(function() {
     minutes = parseInt(timer / 60, 10)
     seconds = parseInt(timer % 60, 10);
 
     minutes = minutes < 10 ? "0" + minutes : minutes;
     seconds = seconds < 10 ? "0" + seconds : seconds;
 
     display.textContent = minutes + ":" + seconds;
 
     if (--timer < 0) {
       timer = duration;
       clearInterval(timerInterval);
       
     }
     else{
          document.getElementById('A').style.color = "grey";
          document.getElementById('A').onclick="this.onclick=function(){return false};"
     }
   }, 1000);
 }
 
 startTimer(duration, display);
 
 $('A').click((e) => {
      clearInterval(timerInterval);
   startTimer(duration, display);
 });

function my(){
      document.getElementById("check-failure").style.visibility = "hidden";
}

var codeCharInput = 'input.code-char';
$(codeCharInput+':first').focus();
$(codeCharInput).keyup(function(e) {
  if ((e.which == 8 || e.which == 46)) {
    $(this).prev(codeCharInput).focus().val($(this).prev().val());
  } else {
    if (this.value.length == this.maxLength) {
      $(this).next(codeCharInput).focus();
    }
  }
});


function increaseValue() {
     var value = parseInt(document.getElementById('number').value, 10);
     value = isNaN(value) ? 0 : value;
     value++;
     document.getElementById('number').value = value;
   }
   
   function decreaseValue() {
     var value = parseInt(document.getElementById('number').value, 10);
     value = isNaN(value) ? 0 : value;
     value < 1 ? value = 1 : '';
     value--;
     document.getElementById('number').value = value;
   }



// photoswipe

function photo() {
  
     var pswpElement = document.querySelectorAll('.pswp')[0];
 
     // build items array
     var items = [
         {
               src: '../images/product-img-1.svg',
               w: 964,
               h: 1024
          },
         {
               src: 'https://farm7.staticflickr.com/6175/6176698785_7dee72237e_b.jpg',
               w: 964,
               h: 1024
          },
          {
               src: 'https://farm2.staticflickr.com/1043/5186867718_06b2e9e551_b.jpg',
               w: 964,
               h: 1024
          },

     ];
     
     // define options (if needed)
     var options = {
  // history & focus options are disabled on CodePen        
       history: false,
       focus: false,
 
         showAnimationDuration: 0,
         hideAnimationDuration: 0
         
     };
     
     var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
     gallery.init();
 }
 
//  openPhotoSwipe();
 
//  document.getElementById('btn').onclick = openPhotoSwipe;

$('.smallprodimg').click(function(e){
     e.preventDefault();
 })

 $('.preventdefault').click(function(e){
     e.preventDefault();
 })


//  $(function(){

//      $("#exzoom").exzoom({
   
//        // thumbnail nav options
//        "navWidth": 60,
//        "navHeight": 60,
//        "navItemNum": 5,
//        "navItemMargin": 7,
//        "navBorder": 1,
   
//        // autoplay
//        "autoPlay": true,
   
//        // autoplay interval in milliseconds
//        "autoPlayTimeout": 2000
       
//      });
   
//    });

$('.showzoom').zoomImage();

$('.show-small-img:first-of-type').css({'border': 'solid 1px #1c9ad4', 'padding': '2px'})
$('.show-small-img:first-of-type').attr('alt', 'now').siblings().removeAttr('alt')
$('.show-small-img').click(function () {
  $('#show-img').attr('src', $(this).attr('src'))
  $('#big-img').attr('src', $(this).attr('src'))
  $(this).attr('alt', 'now').siblings().removeAttr('alt')
  $(this).css({'border': 'solid 1px #1c9ad4', 'padding': '2px'}).siblings().css({'border': 'none', 'padding': '0'})
  if ($('#small-img-roll').children().length > 4) {
    if ($(this).index() >= 3 && $(this).index() < $('#small-img-roll').children().length - 1){
      $('#small-img-roll').css('left', -($(this).index() - 2) * 76 + 'px')
    } else if ($(this).index() == $('#small-img-roll').children().length - 1) {
      $('#small-img-roll').css('left', -($('#small-img-roll').children().length - 4) * 76 + 'px')
    } else {
      $('#small-img-roll').css('left', '0')
    }
  }
})

$('#next-img').click(function (){
     $('#show-img').attr('src', $(".show-small-img[alt='now']").next().attr('src'))
     $('#big-img').attr('src', $(".show-small-img[alt='now']").next().attr('src'))
     $(".show-small-img[alt='now']").next().css({'border': 'solid 1px #1c9ad4', 'padding': '2px'}).siblings().css({'border': 'none', 'padding': '0'})
     $(".show-small-img[alt='now']").next().attr('alt', 'now').siblings().removeAttr('alt')
     if ($('#small-img-roll').children().length > 4) {
       if ($(".show-small-img[alt='now']").index() >= 3 && $(".show-small-img[alt='now']").index() < $('#small-img-roll').children().length - 1){
         $('#small-img-roll').css('left', -($(".show-small-img[alt='now']").index() - 2) * 76 + 'px')
       } else if ($(".show-small-img[alt='now']").index() == $('#small-img-roll').children().length - 1) {
         $('#small-img-roll').css('left', -($('#small-img-roll').children().length - 4) * 76 + 'px')
       } else {
         $('#small-img-roll').css('left', '0')
       }
     }
   })
   
   $('#prev-img').click(function (){
     $('#show-img').attr('src', $(".show-small-img[alt='now']").prev().attr('src'))
     $('#big-img').attr('src', $(".show-small-img[alt='now']").prev().attr('src'))
     $(".show-small-img[alt='now']").prev().css({'border': 'solid 1px #1c9ad4', 'padding': '2px'}).siblings().css({'border': 'none', 'padding': '0'})
     $(".show-small-img[alt='now']").prev().attr('alt', 'now').siblings().removeAttr('alt')
     if ($('#small-img-roll').children().length > 4) {
       if ($(".show-small-img[alt='now']").index() >= 3 && $(".show-small-img[alt='now']").index() < $('#small-img-roll').children().length - 1){
         $('#small-img-roll').css('left', -($(".show-small-img[alt='now']").index() - 2) * 76 + 'px')
       } else if ($(".show-small-img[alt='now']").index() == $('#small-img-roll').children().length - 1) {
         $('#small-img-roll').css('left', -($('#small-img-roll').children().length - 4) * 76 + 'px')
       } else {
         $('#small-img-roll').css('left', '0')
       }
     }
   });
function loadPage_seller_step_1(){
     window.location="1.4a_register_seller_individual&business-personal_info.html";
}

function loadPage_seller_step_2(){
     window.location="1.4b_register_seller_business-address_info.html";
}

function loadPage_seller_step_3(){
     window.location="1.4c_register_seller_business-primary-contact-Info.html";
}

function loadPage_seller_step_4(){
     window.location="1.4d_register_seller_business-attach-documents.html";
}

function loadPage_seller_step_5(){
     window.location="1.4e_register_seller_business-security&verification(password).html";
}

function loadPage_seller_step_6(){
     window.location="1.4f_register_seller_business-security&verification-otp.html";
}

function loadPage_seller_step_7(){
  window.location="1.4f_register_seller_membership-details.html";
}

function loadPage_seller_step_8(){
  window.location="1.4f_register_seller_business-payment.html";
}

function loadPage_seller_step_9(){
     window.location="1.4g_register_seller_business-success.html";
}

function tonewrfq(){
  window.location="rfq-form.html";
}

// 


$('#sellerpayh1,#sellernewpayment').css({
  display: 'none'
});


$('#addpaymentseller').click(function(e) {
              
  e.preventDefault();
  
  $('#sellerpayh1,#sellernewpayment').css({
       display: 'block'
  });
  
  $('#sellerpayh2,#sellerpaycards').css({
       display: 'none'
  });

});


$('#topaymentmain').click(function(e) {
              
  e.preventDefault();
  
  $('#sellerpayh1,#sellernewpayment').css({
       display: 'none'
  });
  
  $('#sellerpayh2,#sellerpaycards').css({
       display: 'block'
  });

});


$(function(){

  $("#visa-cardsell1").on("click", function(){
    $("#visa-cardsell1").addClass("cardactive");
    $("#visa-cardsell2").removeClass("cardactive");
    $("#visa-cardsell3").removeClass("cardactive");
    $("#visa-cardsell4").removeClass("cardactive");
  });

  $("#visa-cardsell2").on("click", function(){
      $("#visa-cardsell2").addClass("cardactive");
      $("#visa-cardsell1").removeClass("cardactive");
      $("#visa-cardsell3").removeClass("cardactive");
      $("#visa-cardsell4").removeClass("cardactive");
  });

  $("#visa-cardsell3").on("click", function(){
      $("#visa-cardsell3").addClass("cardactive");
      $("#visa-cardsell1").removeClass("cardactive");
      $("#visa-cardsell2").removeClass("cardactive");
      $("#visa-cardsell4").removeClass("cardactive");
  });

  $("#visa-cardsell4").on("click", function(){
      $("#visa-cardsell4").addClass("cardactive");
      $("#visa-cardsell1").removeClass("cardactive");
      $("#visa-cardsell2").removeClass("cardactive");
      $("#visa-cardsell3").removeClass("cardactive");
  });

});


// 

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
          document.getElementById('spanblue1').style.color = "grey";
          document.getElementById('spanblue1').onclick="this.onclick=function(){return false};"
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

function my() {
     var x = document.getElementById("id1");
     if (x.style.display === "none") {
       x.style.display.visibility="hidden";
     } else {
       x.style.display.visibility="visible";
     }
   }
// $.ajax({
//      xhr: function() {
//        var xhr = new window.XMLHttpRequest();
   
//        xhr.upload.addEventListener("progressbar", function(evt) {
//          if (evt.lengthComputable) {
//            var percentComplete = evt.loaded / evt.total;
//            percentComplete = parseInt(percentComplete * 100);
//            console.log(percentComplete);
   
//            if (percentComplete === 100) {
   
//            }
   
//          }
//        }, false);
   
//        return xhr;
//      },
//      url: posturlfile,
//      type: "POST",
//      data: JSON.stringify(fileuploaddata),
//      contentType: "application/json",
//      dataType: "json",
//      success: function(result) {
//        console.log(result);
//      }
//    });

   
//    $('#button1').onclick(function () {
//      $("input[type='file']").trigger('click');
//  })
 
//  $("input[type='file']").change(function () {
//      $('#val1').text(this.value.replace(/C:\\fakepath\\/i, ''))
//  })

//  $(".add_files_btn").unbind("click").bind("click", function () {
//      $("#upload_trigger_btn").click();
//   });


$(document).ready(function () {
  $('.collapse.collapse1')
      .on('shown.bs.collapse', function() {
          $('#viewmoreimg')
              .removeClass("rotateit")
      })
      .on('hidden.bs.collapse', function() {
          $('#viewmoreimg')
              .addClass("rotateit");
      });


      $('.collapse.collapse2')
      .on('shown.bs.collapse', function() {
          $('#viewmoreimg2')
              .removeClass("rotateit")
      })
      .on('hidden.bs.collapse', function() {
          $('#viewmoreimg2')
              .addClass("rotateit");
      });

      $('.collapse.collapse3')
      .on('shown.bs.collapse', function() {
          $('#viewmoreimg3')
              .removeClass("rotateit")
      })
      .on('hidden.bs.collapse', function() {
          $('#viewmoreimg3')
              .addClass("rotateit");
      });

      $('.collapse.collapse-advsearch')
      .on('shown.bs.collapse', function() {
          $('#viewmore-advsearch')
              .removeClass("rotateit")
      })
      .on('hidden.bs.collapse', function() {
          $('#viewmore-advsearch')
              .addClass("rotateit");
      });
});

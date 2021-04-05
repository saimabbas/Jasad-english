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

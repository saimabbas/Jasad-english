function loadPage(){
     window.location="1.1-b_sign_in_password.html";
}

function loadPage_verify_before(){
     window.location="2.3_reset_pass_step_2.html";
}

function loadPage_verify_after(){
     window.location="2.4_reset_pass_step_3.html";
}

function loadPage_done(){
     window.location="2.5_reset_pass_step_success.html";
}


function getemail(){
    var inputVal = document.getElementById("myemail").value;
    document.getElementById("email").innerHTML = inputVal;
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

//  $(".inputs").keyup(function () {
//      if (this.value.length == this.maxLength) {
//        $(this).next('.inputs').focus();
//      }
//  });

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

$(document).ready(function() {
  let maxLength = 140;
  $("textarea").keypress(function() {
    let textLength =  maxLength - $(this).val().length;
    // console.log(remainingLength);
    $('.counter').text(textLength);
    $(".counter").toggleClass("counter-red", textLength < 0);
  });
});



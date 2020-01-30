$(document).ready(function() {
  let maxLength = 140;
  $("textarea").on("input", function() {
    let textLength = maxLength - $(this).val().length;
    $(".counter").text(textLength);
    $(".counter").toggleClass("counter-negative", textLength < 0); //change to red class when the count is negative
  });
});

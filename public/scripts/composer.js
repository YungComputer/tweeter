//Back to top button
$(document).ready(function() {
  let btn = $("#top-button");
  let navbtn = $(".nav-button");
  $(window).scroll(function() {
    console.log($(window).scrollTop());
    if ($(window).scrollTop() > 400) {
      btn.show();
      navbtn.hide();
    } else {
      navbtn.show();
      btn.hide();
    }
  });
//New tweet form appears
  btn.on("click", function(event) {
    event.preventDefault();
    $("html, body").animate({ scrollTop: 0 }, "400");
    $(".new-tweet").slideDown("fast");
    $(this)
      .children()
      .children("textarea")
      .focus();
  });
});

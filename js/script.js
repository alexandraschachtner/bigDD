// //padding for navbar//
// var shiftWindow = function() { scrollBy(0, -70) };
// if (location.hash) shiftWindow();
// window.addEventListener("hashchange", shiftWindow);

//navbar collapse automatically when a link is clicked//
$('.navbar-collapse a:not(.dropdown-toggle)').click(function(){
    $(this).parents('.navbar-collapse').collapse('hide');
});

function couponCode() {
  var checkBox = document.getElementById ("exampleCheck1")

if (exampleCheck1.checked == true){
  alert("Thank you for subscribing!  Here's a coupon code just for you:  FREEDONUT");
} else {
  alert("Thanks!  We will get back to you as soon as possible");
}
}

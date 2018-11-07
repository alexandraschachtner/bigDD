
//navbar collapse automatically when a link is clicked//
$('.navbar-collapse a:not(.dropdown-toggle)').click(function(){
    $(this).parents('.navbar-collapse').collapse('hide');
});

//function to offer differenting alert messages dependent on the checkbox status in conjunction with the submit button//
function couponCode() {
  var checkBox = document.getElementById ("exampleCheck1")

if (checkNews.checked == true){
  alert("Thank you for subscribing!  Here's a coupon code just for you:  FREEDONUT");
} else {
  alert("Thanks!  We will get back to you as soon as possible");
}
}

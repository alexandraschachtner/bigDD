//padding for navbar//
var shiftWindow = function() { scrollBy(0, -65) };
if (location.hash) shiftWindow();
window.addEventListener("hashchange", shiftWindow);

//navbar collapse automatically when a link is clicked//
$('.navbar-collapse a:not(.dropdown-toggle)').click(function(){
    $(this).parents('.navbar-collapse').collapse('hide');
});

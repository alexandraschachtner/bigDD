
//navbar collapse automatically when a link is clicked//
$('.navbar-collapse a:not(.dropdown-toggle)').click(function(){
    $(this).parents('.navbar-collapse').collapse('hide');
});

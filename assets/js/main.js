$(document).ready(function () {
    $('.upload_div a').click(function(){
        $('.panel_expend').slideToggle();
        $('.upload_div a').toggleClass('active_icon');
    })
});
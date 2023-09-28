var navHeight = $('nav').outerHeight();

$('nav a').click(function (e) { 
    // e.preventDefault();
    
    $('nav a.active').removeClass('active');
    
    $(this).addClass('active');

    var href = $(this).attr("href");
    $("html, body").animate({ scrollTop: $(href).offset().top - navHeight}, 300);
});    

$(document).ready(function () {
    $("main").css('margin-top', navHeight);

    var section = window.location.href.split('index.html')[1];
    if (section) {
        $(`nav a[href='${section}']`).click();            
    } else {
        $(`nav a[href='#home']`).click();
    }
});
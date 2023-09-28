var navHeight = $('nav').outerHeight();

$('a.nav-link').click(function (e) { 
    // e.preventDefault();
    var href = $(this).attr("href");
    
    $("html, body").animate({ scrollTop: $(href).offset().top - navHeight}, 300);
    
    $('nav a.active').removeClass('active');
    
    $(`nav a[href='${href}']`).addClass('active');
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
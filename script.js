$('nav a').click(function (e) { 
    // e.preventDefault();
    
    $('nav a.active').removeClass('active');
    
    $(this).addClass('active');

    var href = $(this).attr("href");
    $("html, body").animate({ scrollTop: $(href).offset().top - window.innerHeight *0.1}, 300);
});
$('nav a').click(function (e) { 
    e.preventDefault();
    
    var href = $(this).attr("href");
    $("html, body").animate({ scrollTop: $(href).offset().top - window.innerHeight *0.1}, 300);
});
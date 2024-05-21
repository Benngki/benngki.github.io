var url = window.location.href.split('index.html')[1]
const resume_url = "assets/Benediktus_resume.pdf"

function navTo(href) {
    $('nav a.active').removeClass('active');
    
    $(`nav a[href='${href}']`).addClass('active');
}

function scrollTo(href){
    $("html, body").animate({ scrollTop: $(href).position().top - navHeight + 1}, 300);
}

$('a.nav-link').click(function (e) { 
    // e.preventDefault();
    var href = $(this).attr("href");
    
    scrollTo(href);
});    

// update home title
$('#home_title').text(home_title);

// update about me description
about_me_desc.forEach(e => {
    $('#about_me_desc').append(`<p>
    ${e}
  </p>`);
});

$(document).ready(function () {
    // url for resume
    $("#resume").attr('href', resume_url);

    // saat page pertama kali terbuka menu active akan menyesuaikan section yang dikunjungi
    menus.forEach(href => {
        if (window.scrollY >= $('section'+href).position().top - navHeight){
            scrollTo(href);
            navTo(href);
        }            
    });
    // saat discroll menu nav.active akan berubah sesuai section yang dikunjungi
    $(window).scroll(function (){
        menus.forEach(href => {
            if (window.scrollY >= $('section'+href).position().top - navHeight){
                navTo(href);
            }            
        });
    })
    // navigate ke section berdasarkan url
    scrollTo(window.location.href.split('index.html')[1]);
});

// index.html#portfolio web-version
Object.keys(projects).reverse().forEach(e =>{
    $('main#index #projects').append(`<div class="project col position-relative">
    <a href="project.html#${e}" class="stretched-link"></a>
    <img src="assets/projects/${e}/1.jpg" class="">
    <div class="project_info position-absolute top-50 start-50 translate-middle text-justify p-3">
        <p class="project_title">${projects[String(e)]['title']}</p>
    </div>
    </div>`);
    
    // index.html#portfolio mobile-version
    $('main#index .slide-container .card-wrapper.swiper-wrapper').append(`<div class="card swiper-slide">
    <div class="image-content">  
      <img src="assets/projects/${e}/1.jpg" class="card-image">
    </div>

    <div class="card-content">
      <h2 class="name">${projects[String(e)]['title']}</h2>
      
      <a href="project.html#${e}" role="button" class="btn btn-primary">View More</a>
    </div>
  </div>`);
    
});
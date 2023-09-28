var projects = {
    "candi-badut": {
        'title': 'Candi Badut',
        'year': 2022,
        'role': 'Project Leader',
        'work': '(Fullstack Web Developer)',
        'links': [
            "https://wibaku.000webhostapp.com/",
            "https://github.com/Benngki/web-project-wibaku"
        ],
        'desc': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni, perferendis debitis rem eaque porro consectetur? Quidem, inventore quae adipisci minima atque, quo iste sit saepe facere veritatis maiores quisquam, eveniet unde vel iure exercitationem! Accusantium a quo ipsum quos, sapiente veniam eaque velit beatae ad sit repellendus libero. Exercitationem aliquam perspiciatis vitae doloribus iure ad animi quasi. Quam excepturi at earum dolor, sapiente ullam nisi molestias quo sit in dolorem, animi asperiores recusandae blanditiis vero nulla nam minus natus modi facilis ducimus provident voluptates tenetur illum. Necessitatibus itaque tenetur corporis dicta et dolores, vitae aliquid enim, esse vel, libero ex.',
        'photos': ['1.jpg', '2.jpg', '3.jpg']
    },
    "moscilabrew": {
        'title': 'MoscilaBrew',
        'year': 2022,
        'role': 'Project Leader',
        'work': '(Fullstack Web Developer)',
        'links': [
            "https://wibaku.000webhostapp.com/",
            "https://github.com/Benngki/web-project-wibaku"
        ],
        'desc': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni, perferendis debitis rem eaque porro consectetur? Quidem, inventore quae adipisci minima atque, quo iste sit saepe facere veritatis maiores quisquam, eveniet unde vel iure exercitationem! Accusantium a quo ipsum quos, sapiente veniam eaque velit beatae ad sit repellendus libero. Exercitationem aliquam perspiciatis vitae doloribus iure ad animi quasi. Quam excepturi at earum dolor, sapiente ullam nisi molestias quo sit in dolorem, animi asperiores recusandae blanditiis vero nulla nam minus natus modi facilis ducimus provident voluptates tenetur illum. Necessitatibus itaque tenetur corporis dicta et dolores, vitae aliquid enim, esse vel, libero ex.',
        'photos': ['1.jpg', '2.jpg']
    },
    "hate-speech-detection": {
        'title': 'Hate Speech Detection',
        'year': 2022,
        'role': 'Project Leader',
        'work': '(Fullstack Web Developer)',
        'links': [
            "https://wibaku.000webhostapp.com/",
            "https://github.com/Benngki/web-project-wibaku"
        ],
        'desc': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni, perferendis debitis rem eaque porro consectetur? Quidem, inventore quae adipisci minima atque, quo iste sit saepe facere veritatis maiores quisquam, eveniet unde vel iure exercitationem! Accusantium a quo ipsum quos, sapiente veniam eaque velit beatae ad sit repellendus libero. Exercitationem aliquam perspiciatis vitae doloribus iure ad animi quasi. Quam excepturi at earum dolor, sapiente ullam nisi molestias quo sit in dolorem, animi asperiores recusandae blanditiis vero nulla nam minus natus modi facilis ducimus provident voluptates tenetur illum. Necessitatibus itaque tenetur corporis dicta et dolores, vitae aliquid enim, esse vel, libero ex.',
        'photos': ['1.jpg', '2.jpg', '3.jpg']
    },
    "dialog-diri": {
        'title': 'Dialog Diri',
        'year': 2022,
        'role': 'Project Leader',
        'work': '(Fullstack Web Developer)',
        'links': [
            "https://wibaku.000webhostapp.com/",
            "https://github.com/Benngki/web-project-wibaku"
        ],
        'desc': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni, perferendis debitis rem eaque porro consectetur? Quidem, inventore quae adipisci minima atque, quo iste sit saepe facere veritatis maiores quisquam, eveniet unde vel iure exercitationem! Accusantium a quo ipsum quos, sapiente veniam eaque velit beatae ad sit repellendus libero. Exercitationem aliquam perspiciatis vitae doloribus iure ad animi quasi. Quam excepturi at earum dolor, sapiente ullam nisi molestias quo sit in dolorem, animi asperiores recusandae blanditiis vero nulla nam minus natus modi facilis ducimus provident voluptates tenetur illum. Necessitatibus itaque tenetur corporis dicta et dolores, vitae aliquid enim, esse vel, libero ex.',
        'photos': ['1.jpg', '2.jpg']
    }
}

$(document).ready(function () {
    // project.html
    var project_title = String(window.location.href.split('project.html#')[1]);
    // title
    $("main#project #title").text(projects[project_title]['title']);
    // year
    $("main#project #year").text(projects[project_title]['year']);
    // role
    $("main#project #role").text(projects[project_title]['role']);
    // work
    $("main#project #work").text(projects[project_title]['work']);
    // links
    projects[project_title]['links'].forEach(link => {
        $('main#project #links').append(
            `<a style="width: fit-content;" class="text-dark mb-2 text-break" href="${link}">${link}</a>`
        );
    })
    // description
    $("main#project #desc").text(projects[project_title]['desc']);
    // photos
    projects[project_title]['photos'].forEach(photo => {
        $('#photos').append(
            `<div class="col">
                <img class="img-fluid" src="assets/projects/${project_title}/${photo}">
            </div>`
        );
    });

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



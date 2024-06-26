$(document).ready(function () {
    var project_title = String(window.location.href.split('project.html#')[1]);
    $('html head title').text(projects[project_title]['title']);
    // project.html
    // title
    $("main#project #title").text(projects[project_title]['title']);
    // year
    $("main#project #year").text(projects[project_title]['year']);
    // role
    $("main#project #role").text(projects[project_title]['role']);
    // work
    $("main#project #work").text(projects[project_title]['work']);
    // links
    if (projects[project_title]['links']){
        projects[project_title]['links'].forEach(link => {
            $('main#project #links').append(
                `<a style="width: fit-content;" class="text-dark mb-2 text-break" href="${link}">${link}</a>`
            );
        })
    }
    // description
    $("main#project #desc").text(projects[project_title]['desc']);
    // photos
    if (projects[project_title]['photos'].length == 1){
        $("#photos").addClass('row-cols-lg-1');
    }else {
        $("#photos").addClass('row-cols-lg-2');
    }

    if (projects[project_title]['photos']) {
        projects[project_title]['photos'].forEach(photo => {
            $('#photos').append(
                `<div class="col d-flex justify-content-center align-items-center">
                    <img class="img-fluid" src="assets/projects/${project_title}/${photo}" style="max-height:25rem;">
                </div>`
            );
        });
    }
});
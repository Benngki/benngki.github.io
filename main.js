var navHeight = $('nav').outerHeight();

function changeMode(mode) {
    if (mode === 'dark') {
        $('html').attr('data-bs-theme', 'dark');
        if ($('#toggle_switch .light_btn').hasClass('d-none')) {
            $('#toggle_switch .light_btn').removeClass('d-none');
        }
        else {
            $('#toggle_switch .dark_btn').removeClass('d-none')
            $('#toggle_switch .light_btn').addClass('d-none');
        }
    } else {
        $('html').attr('data-bs-theme', '');     
        if ($('#toggle_switch .dark_btn').hasClass('d-none')) {
            $('#toggle_switch .dark_btn').removeClass('d-none');
        }
        else {
            $('#toggle_switch .light_btn').removeClass('d-none')
            $('#toggle_switch .dark_btn').addClass('d-none');
        } 
    }
    
}

$(document).ready(function () {    
    $("main").css('margin-top', navHeight);
});
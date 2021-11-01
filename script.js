$(window).scroll(function() {
    if ($(this).scrollTop() > 300) {
        $("#buttonup").slideDown(350);
        $("#buttonup").addClass('animate')
    } else {
        $("#buttonup").slideUp(350);
    }
});

$("#buttonup i").on('click', function(e) {
    e.preventDefault();
    $("body,html").animate({
        scrollTop: 0
    }, 100);
    return false;
});


$(window).scroll(function() {
    if ($(this).scrollTop() > 300) {
        $("#logo-movil").slideDown(150);
        $("#logo-movil").addClass('animate')
    } else {
        $("#logo-movil").slideUp(10);
    }
});



document.addEventListener("DOMContentLoaded", function() {
    window.addEventListener('scroll', function() {
        if (window.scrollY > 250) {
            document.getElementById('menu').classList.add('fixed-top');
            navbar_height = document.querySelector('.navbar').offsetHeight;
            document.body.style.paddingTop = navbar_height + 'px';
        } else {
            document.getElementById('menu').classList.remove('fixed-top');

            document.body.style.paddingTop = '0';
        }
    });
});
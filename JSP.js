$(document).ready(function() {

    $("#Scroll-Top").hide();

    $(function() {
        $(window).scroll(function() {
            if ($(this).scrollTop() > 100) {
                $('#Scroll-Top').fadeIn();
            } else {
                $('#Scroll-Top').fadeOut();
            }
        });

        $('#Scroll-Top').click(function() {
            $('body,html').animate({
                scrollTop: 0
            }, 800);
            return false;
        });
    });

});

function sideMenu() {
    let menu = document.querySelector(".menu");
    let side_menu = document.querySelector(".side_menu");
    menu.classList.toggle("active");
    side_menu.classList.toggle("active");
}

Element.animate(Keyframes, duration);


var textWrapper = document.querySelector('.ev .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

Animation.timeline({ loop: true })
    .add({
        targets: '.ev .letter',
        translateY: ["1.1em", 0],
        translateX: ["0.55em", 0],
        translateZ: 0,
        rotateZ: [180, 0],
        duration: 750,
        easing: "easeOutExpo",
        delay: 1000
    }).add({
        targets: '.ev .letter',
        opacity: 0,
        duration: 1000,
        easing: "easeOutExpo",
        delay: 1000
    });
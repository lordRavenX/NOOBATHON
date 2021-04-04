$(document).ready(function () {
    $(window).scroll(function () {
        if (this.scrollY > 20) {
            $('.navbar').addClass("sticky");
        }
        else {
            $('.navbar').removeClass("sticky");
        }

    })

});

var typed = new Typed(" .typing", {
    strings: [" Research", " Alumni", " Administration", " MoUs", " Departments"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});
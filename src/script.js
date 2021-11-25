$(document).ready(function() {
    $(window).scroll(function() {
        if (this.scrollY > 20) {
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        }
        // Deslizar hacia arriba
        if (this.scrollY > 500) {
            $('.scroll-up-btn').addClass("show");
        } else {
            $('.scroll-up-btn').removeClass("show");
        }
    });


    // Script para deslizar arriba
    $('.scroll-up-btn').click(function() {
        $('html').animate({ scrollTop: 0 });
        // Eliminar el desplazamiento suave en el clic del botón deslizante
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function() {
        // Aplicando denuevo el desplazamiento suave en los elementos del menú
        $('html').css("scrollBehavior", "smooth");
    });


    ////Menu
    $('.menu-btn').click(function() {
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // Script de la animación de la clase "Typing"
    var typed = new Typed(".typing", {
        strings: ["Estudiante", "Jugador", "Fotógrafo", "Diseñador"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Estudiante", "Jugador", "Fotógrafo", "Diseñador"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

});
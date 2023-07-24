$(function () {
         $(".filter").click(function () {
            $(this).addClass("active").siblings().removeClass("active");
            let valor = $(this).attr("data-nombre");
            if (valor == "todos") {
               $(".cont-work").show("1000");
            } else {
               $(".cont-work")
                  .not("." + valor)
                  .hide("1000");
               $(".cont-work")
                  .filter("." + valor)
                  .show("1000");
            }
         });

         let catalogo = $("#catalogo").offset().top;
         servicio = $("#servicio").offset().top;
         trabajo = $("#trabajo").offset().top;
         contacto = $("#contacto").offset().top;
         

         window.addEventListener('resize', function () {
            let catalogo = $("#catalogo").offset().top;
            servicio = $("#servicio").offset().top;
            trabajo = $("#trabajo").offset().top;
            contacto = $("#contacto").offset().top;
            
         });

   $('#enlaces-inicio').on('click', function (e) {
      e.preventDefault();
      $('html, body').animate({
         scrollTop: 0
      }, 600);
   });
   $('#enlaces-catalogo').on('click', function (e) {
      e.preventDefault();
      $('html, body').animate({
         scrollTop: catalogo -100
      }, 600);
   });
   $('#enlaces-servicio').on('click', function (e) {
      e.preventDefault();
      $('html, body').animate({
         scrollTop: servicio -150
      }, 600);
   });
   $('#enlaces-trabajo').on('click', function (e) {
      e.preventDefault();
      $('html, body').animate({
         scrollTop: trabajo -80
      }, 600);
   });
   $('#enlaces-contacto').on('click', function (e) {
      e.preventDefault();
      $('html, body').animate({
         scrollTop: contacto -100
      }, 600);
   });
});
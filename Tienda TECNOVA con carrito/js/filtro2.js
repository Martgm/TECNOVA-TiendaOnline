$(function () {
    $(".filter").click(function () {
       $(this).addClass("active").siblings().removeClass("active");
       let valor = $(this).attr("data-nombre");
       if (valor == "todos") {
          $(".item").show("1000");
       } else {
          $(".item")
             .not("." + valor)
             .hide("1000");
          $(".item")
             .filter("." + valor)
             .show("1000");
       }
    });
    });


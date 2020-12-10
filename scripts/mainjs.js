$(document).ready(function(){

    $("#ball").click(function(){
      $("#ball").animate({width: "300px"});
      $("#ball").animate({height: "300px"});
    });

    $("#test").click(function(){
        $(this).hide();
      });
      
      $("#test").click(function(){
        $("#koptekst").css("color", "yellow");
      });
     
});



$(document).ready(function(){

  $(window).on('resize', function(){

    if (window.innerWidth <= 1024) {
      $(".mv2").addClass("active")
      $(".mv1").removeClass("active")
      $(".mv3").removeClass("active")
    }
    if(window.innerWidth <= 767){
      $(".mv3").addClass("active")
      $(".mv1").removeClass("active")
      $(".mv2").removeClass("active")
    }
    if(window.innerWidth > 1024){
      $(".mv1").addClass("active")
    }
});


  $(".trigger").click(function(){
    $(this).toggleClass("active");
    $(".gnb, .sns").slideToggle();
  });

  $(window).resize(function(){

    let w = $(window).width();

    if(w>768){
      $(".gnb, .sns").removeAttr('style');
    }


  });


});
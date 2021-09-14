$(function(){

    $("a").click(function(event){
      if (this.hash !== "") {
        event.preventDefault();
        
  
        var gato = this.hash;
  
        $("html, body").animate({
          scrollTop: $(gato).offset().top
        }, 800, function(){
          window.location.hash = gato;
        });
      }
    });

    $("h3").dblclick(function(){
        $(this).css({
        "color": "red",
        });
        });
        
      $('.card-title1').click(function(){
            $('.card-text1').toggle();
            $('.card-img-top1').toggle();
        });

        $('.card-title2').click(function(){
            $('.card-text2').toggle();
            $('.card-img-top2').toggle();
        });
    
        $('.card-title3').click(function(){
            $('.card-text3').toggle();
            $('.card-img-top3').toggle();
        });
    
    
  
    $(function () {
      $('[data-toggle="tooltip"]').tooltip()
    })
  
  });
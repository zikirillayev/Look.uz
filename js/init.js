(function($){
  $(function(){

    $('.sidenav').sidenav();

  }); // end of document ready
})(jQuery); // end of jQuery name space
M.AutoInit();


var instance = M.Carousel.init({
  fullWidth: true
});

// Or with jQuery

$('.carousel.carousel-slider').carousel({
  fullWidth: true
});
function closer(){
  document.querySelector('ul.sidenav').style = "transform: translateX(-105%) ; transition: 0.6s";document.querySelector('div.sidenav-overlay').style.opacity = 0
}
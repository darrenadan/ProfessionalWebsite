var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}




$(document).ready(function(){

  $('#menu-bar').click(function(){
      $(this).toggleClass('fa-times');
      $('.navbar').toggleClass('nav-toggle');
  });

  $(window).on('load scroll',function(){

      $('#menu-bar').removeClass('fa-times');
      $('.navbar').removeClass('nav-toggle');

      $('section').each(function(){

          let top = $(window).scrollTop();
          let height = $(this).height();
          let id = $(this).attr('id');
          let offset = $(this).offset().top - 200;

          if(top > offset && top < offset + height){
              $('.navbar ul li a').removeClass('active');
              $('.navbar').find(`[href="#${id}"]`).addClass('active');
          }

      });

  });

  $('.list .btn').click(function(){
      $(this).addClass('active').siblings().removeClass('active');
      let src = $(this).attr('data-src');
      $('.menu .row .image img').attr('src',src);
  });

});








$(document).ready(function(){
  $('.accordion-list > li > .answer').hide();
    
  $('.accordion-list > li').click(function() {
    if ($(this).hasClass("active")) {
      $(this).removeClass("active").find(".answer").slideUp();
    } else {
      $(".accordion-list > li.active .answer").slideUp();
      $(".accordion-list > li.active").removeClass("active");
      $(this).addClass("active").find(".answer").slideDown();
    }
    return false;
  });
  
});

$(".rotate").click(function () {
  $(this).toggleClass("down");
})

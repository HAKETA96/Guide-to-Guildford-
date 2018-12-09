/* Colour change of headings in header on hover */

$(".nav li a").on("mouseover", function() {
  console.log(1)
  $(this).css("color","yellow")
  $(".nav li a").on("mouseout", function() {
    $(this).css("color","white")
});
});

/* Colour change of explore guildford on hover */

$(".fullscreen h1").on("mouseover", function(){
  console.log(1)
  $(this).css("color","yellow")
  $(".fullscreen h1").on("mouseout", function() {
    $(this).css("color","white")
});
});

var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 4000); /* Change image every 4 seconds */
}

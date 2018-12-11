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

/* Photos slideshow */
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
  var dots = document.getElementsByClassName("dot");
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
}

/*search box*/
var $searchSection = $('<div class="student-search"></div>');
$searchSection.append('<input id = "search-criteria" placeholder="Search for students..."></input>');
$searchSection.append('<button>Search</button>');

//Append search section
$('.page-header').append($searchSection);

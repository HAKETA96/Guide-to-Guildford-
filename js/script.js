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


/*search box
var $searchSection = $('<div class="student-search"></div>');
$searchSection.append('<input id = "search-criteria" placeholder="Search for students..."></input>');
$searchSection.append('<button>Search</button>');

//Append search section
$('.page-header').append($searchSection);
*/

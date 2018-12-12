/* Colour change of headings in header on hover */
$(".nav li a").on("mouseover", function() {
  console.log(1)
  $(this).css("color","yellow")
  $(".nav li a").on("mouseout", function() {
    $(this).css("color","white")
});
});

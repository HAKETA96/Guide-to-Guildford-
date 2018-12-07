$('.nav li a').on('mouseover', function(){
  console.log(1)
  $(this).css('color', 'yellow')
/*  $(this).css('color', '#39CBE0') */
  $('.nav li a').on('mouseout', function() {
    $(this).css('color','white')
});
});

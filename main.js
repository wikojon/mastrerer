$('.tab1').click(function(){
  $('.pizza1').css('display','block');
  $('.pasta1').css('display', 'none');
  $('.starter1').css('display', 'none');
});
$('.tab2').click(function(){
  $('.pasta1').css('display', 'block')
  $('.starter1').css('display', 'none');
  $('.pizza1').css('display', 'none');
  
}); 
$('.tab3').click(function(){
  $('.starter1').css('display', 'block')
  $('.pizza1').css('display', 'none');
  $('.pasta1').css('display', 'none');
});
$(".btn-pepperonni").click(function(e){
  $(this).toggleClass('active');
  $('.pep').toggle();
  $("li:contains('pepperonni')").toggle();
  calcPrice();
});

$(".btn-mushrooms").click(function(e){
  $(this).toggleClass('active');
  $('.mushroom').toggle();
  $("li:contains('mushrooms')").toggle();
  calcPrice();
});

$(".btn-green-peppers").click(function(e){
  $(this).toggleClass('active');
  $('.green-pepper').toggle();
  $("li:contains('green peppers')").toggle();
  calcPrice();
});

$(".btn-sauce").click(function(e){
  $(this).toggleClass('active');
  $('.sauce').toggle();
  $("li:contains('white sauce')").toggle();
  calcPrice();
});

$(".btn-crust").click(function(e){
  $(this).toggleClass('active');
//  $('.crust').toggle();
  $("li:contains('gluten-free crust')").toggle();
  calcPrice();
});

function calcPrice(){
  var totalPrice=10;

  if ($('.btn-pepperonni').hasClass('active')) {
    totalPrice += 1;
  }
  if ($('.btn-mushrooms').hasClass('active')) {
    totalPrice += 1;
  }
  if ($('.btn-green-peppers').hasClass('active')) {
    totalPrice += 1;
  }
  if ($('.btn-sauce').hasClass('active')) {
    totalPrice += 3;
  }
  if ($('.btn-crust').hasClass('active')) {
    totalPrice += 5;
  }

  $('#totalPrice').html(totalPrice);
}

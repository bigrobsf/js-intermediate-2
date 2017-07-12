$(document).ready(function() {

  // 1
  console.log("Let's get ready to party with jQuery!");

  // 2
  $('article img').addClass('image-center');

  // 3
  $('article p:last-child').remove();

  // 4
  $('#title').css('font-size', Math.random() * 100 + "px");

  // 5
  var $newLi = $('<li>');
  $newLi.text("And look! There's a kitten!");
  var $newLi2 = $('<li>Look at the kitten!</li>');

  $('ol').append($newLi);
  $('ol').append($newLi2);

  // 6
  $('aside').empty();
  var $apologyP = $('<p>');
  $apologyP.text("We are terribly sorry for any inconvenience the list that previously occupied this space may have caused.");
  $('aside').append($apologyP);

  // 7
  $('.form-control').on('change', function() {
    var red = $('.form-control').eq(0).val();
    var green = $('.form-control').eq(1).val();
    var blue = $('.form-control').eq(2).val();
    $('body').css('background-color', 'rgb(' + red + ',' + green + ',' + blue + ')');
  });

  // 8
  $('img').on('click', function(event) {
    $(event.target).remove();
  });

  // something else
  $('body').click(function(event) {
    var rndRed = Math.floor(Math.random() * 256);
    var rndGreen = Math.floor(Math.random() * 256);
    var rndBlue = Math.floor(Math.random() * 256);
    $('body').css('background-color', 'rgb(' + rndRed + ',' + rndGreen + ',' + rndBlue + ')');
  });
});

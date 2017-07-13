/* jshint esversion: 6 */
/* jshint devel: true */
/* jshint node: true */
/* jshint browser: true */
/* jshint jquery: true */

'use strict';

$(function() {
  $('#search').focus();

  $('#search-btn').on('click', main);

  $('#search').on('keyup', function(event) {
    if (event.keyCode === '13') main();
  });

  $('#delete').on('click', deleteGifs);
});

function main() {
  let searchTerm = getSearchTerm();
  if (searchTerm) appendGif(searchTerm);
}

function appendGif(searchTerm) {
  let $newDiv = $('<div>');
  $newDiv.addClass('gif');

  let $newImg = $('<img>');
  $newImg.addClass('img-responsive');
  $newDiv.append($newImg);

  $('main').prepend($newDiv);
  getUrl($newImg, searchTerm);
}

function getUrl($newImg, searchTerm) {
  $.get(`http://api.giphy.com/v1/gifs/random?tag=${searchTerm}&api_key=b52d2be9600f49be88b103842725d63f&limit=1`)
    .done(function(result) {
      $newImg.attr('src', result.data.image_url);
    })
    .catch(function(error) {
      console.log("something went wrong", error);
    });
}

function getSearchTerm() {
  let searchTerm = $('#search').val();
  $('#search').val('');
  $('#search').focus();
  console.log(searchTerm);
  return searchTerm;
}

function deleteGifs() {
  console.log($('main').children());
  $('main').children().remove();
}

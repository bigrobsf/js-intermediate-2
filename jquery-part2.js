/* jshint esversion: 6 */
/* jshint devel: true */
/* jshint node: true */
/* jshint browser: true */
/* jshint jquery: true */
'use strict';

$(function() {
  $('#add-row').on('click', addRow);

  function addRow() {
    let artist = $('#artist').val();
    let rating = $('#rating').val();

    let $newArtistTd = $('<td>');
    $newArtistTd.addClass('text-center artist');
    $newArtistTd.text(artist);

    let $newRatingTd = $('<td>');
    $newRatingTd.addClass('text-center rating');
    $newRatingTd.text(rating);

    let $newBtnTd = $('<td>');
    $newBtnTd.addClass('text-center delete');
    let $newButton = createDeleteBtn();
    $newBtnTd.append($newButton);

    let $newRow = $('<tr>');
    $newRow.append($newArtistTd);
    $newRow.append($newRatingTd);
    $newRow.append($newBtnTd);

    $('tbody').append($newRow);

    $('#artist').val('');
    $('#rating').val('');

    $('#artist').focus();
  }

  function createDeleteBtn() {
    let $newButton = $('<button>');
    $newButton.attr('type', 'submit');
    $newButton.addClass('btn btn-danger btn-block');
    $newButton.text('Delete');
    $newButton.on('click', function(event) {
      $(event.target).parent().parent().remove();
    });

    return $newButton;
  }
});

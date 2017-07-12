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
    $newArtistTd.text(artist);

    let $newRatingTd = $('<td>');
    $newRatingTd.text(rating);

    let $newBtnTd = $('<td>');
    let $newButton = $('<button>');
    $newButton.attr('type', 'submit');
    $newButton.addClass('btn btn-warning');
    $newButton.text('Delete');
    $newBtnTd.append($newButton);

    let $newRow = $('<tr>');
    $newRow.append($newArtistTd);
    $newRow.append($newRatingTd);
    $newRow.append($newBtnTd);

    $('table').append($newRow);

    $('#artist').text('');
    $('#rating').text('');
  }
});

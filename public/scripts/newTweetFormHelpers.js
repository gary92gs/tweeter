$(document).ready(function() {
  //if user is editing a new tweet
  $('.new-tweet-textarea').on('input', function() {
    //check length of string inside textarea and 
    let remainingChars = 140 - this.value.length;
    // update character count element based on the current string length inside textarea
    $(this).parent().find('.counter').html(remainingChars);
    //if negative, assign negative class for styling. if positive remove negative class
    if (remainingChars < 0) {
      $(this).parent().find('.counter').addClass('negative');
    } else {
      $(this).parent().find('.counter').removeClass('negative');
    }
  });
});
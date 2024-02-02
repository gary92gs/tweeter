/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(function() {

  loadTweetDB();

  // listen for new form submissions
  $('.new-tweet-container form').on('submit', function(event) {
    //stop browser from redirecting automatically
    event.preventDefault();
    const tweetSubmission = $('.new-tweet-textarea').val();
    if (tweetSubmission === '') {
      renderTweetPostError('too short');
      return;
    }
    if (tweetSubmission.length > 140) {
      renderTweetPostError('too long');
      return;
    }

    //encode form data submission in urlencoding
    const data = $('.new-tweet-container form').serialize();
    $.ajax({
      url: '/tweets',
      method: 'POST',
      // encode post request to urlencoding
      data: data,
      success: () => {
        loadTweetDB();
      },
      error: (error) => {
        console.log(error);
      },
    });
    //clear new tweet textarea when post is attempted (regardless of success or error)
    $(this).find('textarea').val('');
    //reset character counter (it only resets when you type inside it otherwise)
    $(this).find('.counter').val(140);
  });
});


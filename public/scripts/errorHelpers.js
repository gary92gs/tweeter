const renderTweetPostError = function(tweetErr) {
  //determine correct error message
  let image = '';
  let span = '';
  if (tweetErr === 'too long') {
    image = 'bird-talking-too-much';
    span = "A little birdie is a bit of an over-sharer, don't you think? Try limiting your post to 140 characters.";
  }
  if (tweetErr === 'too short') {
    image = 'bird-talking-too-little';
    span = "What's the matter? Cat got your tongue? Try entering some characters... seriously.";
  }

  //generate error message
  const errorHTML = $(`
    <div class="new-tweet-error">
      <div class="new-tweet-error-message">
        <h2>Error</h2>
        <span>${span}</span>
        <button class="new-tweet-error-button">OK</button>
      </div>
      <img class="new-tweet-error-image full" src="/images/${image}.png" alt="">
    </div>
  `);
  //create html element for error on DOM
  $('body').prepend(errorHTML);
  //animate error message appearance
  $('.new-tweet-error').hide().slideDown();
  //allow user to remove the invalid tweet error message
  //need event handler to be issued when error message rendered, or button won't work
  $('.new-tweet-error-button').on('click', function() {
    $(this).parent().parent().slideUp(400, function() {
      $(this).remove();
    });
  });
};
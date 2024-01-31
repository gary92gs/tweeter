/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

const createTweetElement = function(tweetObj) {
  return `<article class="post-tweet-container">   
      <header>
        <div class="tweeted-user">
          <i class="fa-regular fa-user"></i>
          <span>Username</span>
        </div>
        <span>User-Tag</span>
      </header>
      <h3>Tweet Contents</h3>
      <footer class="post-tweet-footer">
        <span>Post-Age</span>
        <div>
          <i class="fa-solid fa-flag"></i>
          <i class="fa-solid fa-retweet"></i>
          <i class="fa-solid fa-heart"></i>
        </div>
      </footer>
    </article>`;
};


$(document).ready(function() {

});


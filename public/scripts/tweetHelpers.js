
//helper function that prevents app from running user-injected script (provided by lhl compass)
const escapeFilter = function(str) {
  let div = document.createElement("div");
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
};

//note: asynchronous request to database (ajax), then call this function to generate html (because we are returning)
const createTweetElement = function(tweetObj) {
  //determine post age in days with timeago library (imported in index.html header)
  const postAge = timeago.format(new Date(tweetObj.created_at));
  //create html structure for individual tweet
  const tweet = $(`
    <article class="post-tweet">   
      <header class="post-tweet-header">
        <div class="tweeted-user">
          <img src="${tweetObj.user.avatars}" alt="user profile image"/>
          <span>${tweetObj.user.name}</span>
        </div>
        <span>${tweetObj.user.handle}</span>
      </header>
      <h3>${escapeFilter(tweetObj.content.text)}</h3>
      <footer class="post-tweet-footer">
        <span>${postAge}</span>
        <div>
          <i class="fa-solid fa-flag"></i>
          <i class="fa-solid fa-retweet"></i>
          <i class="fa-solid fa-heart"></i>
        </div>
      </footer>
    </article>
  `);
  return tweet;
};

//loads pre-existing tweets into DOM. all function calls must exist in document.ready function
const renderPostedTweets = function(tweetDBarr) {
  //clear DOM before rendering current database
  $('.post-tweet-container').empty();
  //append each tweet at the top of the list (prepend)
  for (const tweet of tweetDBarr) {
    $('.post-tweet-container').prepend(createTweetElement(tweet));
  }
};

//gets current tweet database
const loadTweetDB = function() {
  //request tweets from server database
  $.ajax({
    url: '/tweets',
    method: 'GET',
    //wait for data, then render all tweets based on data from server database
    success: (tweetDatabase) => {
      renderPostedTweets(tweetDatabase);
    },
    error: (error) => {
      console.log(error);
    },
  });
};


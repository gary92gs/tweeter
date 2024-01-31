/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

//START TEMP HARD-CODED SECTION (to-be-removed after testing)
const tweetDatabase = [
  {
    user: {
      name: "Newton",
      avatars: "https://i.imgur.com/73hZDYK.png",
      handle: "@SirIsaac"
    },
    content: {
      text: "If I have seen further it is by standing on the shoulders of giants"
    },
    created_at: 1706490154190
  },
  {
    user: {
      name: "Descartes",
      avatars: "https://i.imgur.com/nlhLi3I.png",
      handle: "@rd"
    },
    content: {
      text: "Je pense , donc je suis"
    },
    created_at: 1706576554190
  }
];
//END TEMP HARD-CODED SECTION


//note: asynchronous request to database (ajax), then call this function to generate html (because we are returning)
const createTweetElement = function(tweetObj) {
  //determine post age in days
  const postDate = new Date(tweetObj.created_at);
  const currentDate = new Date();
  const yearsDiff = currentDate.getFullYear() - postDate.getFullYear();
  let postAge = currentDate.getDay() - postDate.getDay();
  if(yearsDiff > 0){
    postAge += (365 * yearsDiff);
  }

  //create html structure for individual tweet
  const tweet = $(
    `<article class="post-tweet">   
      <header>
        <div class="tweeted-user">
          <img src="${tweetObj.user.avatars}" alt="user profile image"/>
          <span>${tweetObj.user.name}</span>
        </div>
        <span>${tweetObj.user.handle}</span>
      </header>
      <h3>${tweetObj.content.text}</h3>
      <footer class="post-tweet-footer">
        <span>${postAge} days ago</span>
        <div>
          <i class="fa-solid fa-flag"></i>
          <i class="fa-solid fa-retweet"></i>
          <i class="fa-solid fa-heart"></i>
        </div>
      </footer>
    </article>`
  );
  return tweet;
};

//loads pre-existing tweets into DOM. all function calls must exist in document.ready function
const renderPostedTweets = function(tweetDBarr) {
  for (const tweet of tweetDBarr) {
    $('.post-tweet-container').append(createTweetElement(tweet));
  }
};

//for posting new tweets (undecided if it will handle dom only or also push post to database)
const postNewTweet = function() { 

};


$(document).ready(function() {
  renderPostedTweets(tweetDatabase);



});


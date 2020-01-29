/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(function() {
  const renderTweets = function(tweets) {
    for (const property of tweets) {
      const $tweet = createTweetElement(property);
      $("#tweet-container").prepend($tweet);
    }
  };

  const createTweetElement = function(tweet) {
    let render = `
  <article class="tweet-container">
          <header class="tweet-header">
            <img
              src= ${tweet.user.avatars}
              alt="head"
              width="40"
              height="40"
            />
            <span class="name">${tweet.user.name}</span>
            <span class="handle">${tweet.user.handle}</span>
          </header>
          <textarea class="tweet-textarea">
            ${tweet.content.text}
          </textarea>
          <footer class="tweet-footer">
            <span class="date-posted">${moment(tweet.created_at).fromNow()}</span>
            <span class="twitter-icons">
              <img src="https://img.icons8.com/small/2x/retweet.png" alt="retweet
              width="20" height="20" />
              <img
                src="https://img.icons8.com/metro/2x/like.png"
                alt="love"
                width="20"
                height="20"
              />
              <img
                src="https://img.icons8.com/material/2x/empty-flag.png"
                alt="flag"
                width="20"
                height="20"
              />
            </span>
          </footer>
        </article>
  `;

    return render;
  };

  // console.log(moment());

  let getTweets = function() {
    $.get("/tweets").done(data => {
      renderTweets(data);
    });
  };
  getTweets();

  const validateTweet = function(inputContent) {
    if (!inputContent) {
      alert("Tweet is not present")
      return false;
    } else if (inputContent.length > 140) {
      alert("Tweet too long")
      return false;
    } 
    return true;
  }

  $("#tweet-form").submit(function(event) {
    event.preventDefault();
    const contents = $(this).find("textarea").val().trim();
    if (!validateTweet(contents)) {
      return
    }
    const serializedForm = $("#tweet-form").serialize();
    $.post("/tweets/", serializedForm).done(data => {
        getTweets();
    });
  });
});

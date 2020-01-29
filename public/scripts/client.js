/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

// Test / driver code (temporary). Eventually will get this from the server.
$(document).ready(function() {
  const tweetData = [
    {
      user: {
        name: "Newton",
        avatars: "https://i.imgur.com/73hZDYK.png",
        handle: "@SirIsaac"
      },
      content: {
        text:
          "If I have seen further it is by standing on the shoulders of giants"
      },
      created_at: 1461116232227
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
      created_at: 1461113959088
    }
  ];

  const renderTweets = function(tweets) {
    for (const property of tweets) {
      const $tweet = createTweetElement(property);
      $("#tweet-container").append($tweet);
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
            <span class="date-posted">${tweet.created_at}</span>
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


renderTweets(tweetData);
});

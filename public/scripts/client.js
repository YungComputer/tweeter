/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

// Test / driver code (temporary). Eventually will get this from the server.
const tweetData = {
  user: {
    name: "Newton",
    avatars: "https://i.imgur.com/73hZDYK.png",
    handle: "@SirIsaac"
  },
  content: {
    text: "If I have seen further it is by standing on the shoulders of giants"
  },
  created_at: 1461116232227
};

// console.log(tweetData.user.handle);

const createTweetElement = function(tweetObj) {
  const markup = `
  <article class="tweet-container">
          <header class="tweet-header">
            <img
              src= ${tweetObj.user.avatars}
              alt="head"
              width="40"
              height="40"
            />
            <span class="name">${tweetObj.user.name}</span>
            <span class="handle">${tweetObj.user.handle}</span>
          </header>
          <textarea class="tweet-textarea">
            ${tweetObj.content.text}
          </textarea>
          <footer class="tweet-footer">
            <span class="date-posted">${tweetObj.created_at}</span>
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

  return markup;
};

const $tweet = createTweetElement(tweetData);

// Test / driver code (temporary)
console.log($tweet); // to see what it looks like
// $("#tweets-container").append($tweet);

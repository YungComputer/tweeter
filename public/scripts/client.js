$(document).ready(function() {
  const renderTweets = function(tweets) {
    for (const property of tweets) {
      const $tweet = createTweetElement(property);
      $("#tweet-container").prepend($tweet);
    }
  };
  //Escaping Text
  const escape = function(str) {
    let div = document.createElement("div");
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  };
  const createTweetElement = function(tweet) {
    let tweetFromUser = tweet.content.text;
    const safeHTML = `<p>${escape(tweetFromUser)}</p>`;
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
          <div class="tweet-textarea">
            ${safeHTML}
          </div>
          <footer class="tweet-footer">
            <span class="date-posted">${moment(
              tweet.created_at
            ).fromNow()}</span>
            <div class="twitter-icons">
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
  let getTweets = function() {
    $.get("/tweets").done(data => {
      renderTweets(data);
    });
  };
  getTweets();

  //Hide Errors until called
  $(".error-null").hide();
  $(".error-long").hide();

  const validateTweet = function(inputContent) {
    if (!inputContent) {
      $(".error-null").slideDown("fast");
      return false;
    } else if (inputContent.length > 140) {
      $(".error-null").slideUp("fast");
      $(".error-long").slideDown("fast");
      return false;
    }
    $(".error-long").slideUp("fast");
    $(".error-null").slideUp("fast");
    return true;
  };

  $("#tweet-form").submit(function(event) {
    event.preventDefault();
    const contents = $(this)
      .find("textarea")
      .val()
      .trim();
    if (!validateTweet(contents)) {
      return;
    } else {
      const serializedForm = $("#tweet-form").serialize();
      $.post("/tweets/", serializedForm).done(data => {
        getTweets();
      });
      $("textarea").val("");
      $(".counter").text(maxLength);
    }
  });
  //Focus on new Tweet textarea upon toggle
  $(".new-tweet").hide();
  $("button").on("click", function() {
    $(".new-tweet").slideToggle("fast", function() {
      $(this)
        .children()
        .children("textarea")
        .focus();
    });
  });
});

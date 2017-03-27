$('#toggleOn, #list').hide();
$('#toggleOff,#toggleOn').on("click", function() {
$('#toggleOff, #toggleOn').toggle();
  $("#list").toggle();
});

const quotesArr = ["Strive not to be a success, but rather to be of value. – Albert Einstein", "I attribute my success to this: I never gave or took any excuse. – Florence Nightingale", "The most difficult thing is the decision to act, the rest is merely tenacity. – Amelia Earhart", "The mind is everything. What you think you become.  – Buddha", "The best time to plant a tree was 20 years ago. The second best time is now. – Chinese Proverb", "Eighty percent of success is showing up. – Woody Allen", "Your time is limited, so don’t waste it living someone else’s life. - Steve Jobs", "Every child is an artist.  The problem is how to remain an artist once he grows up. – Pablo Picasso", "I’ve learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel. – Maya Angelou", "Whatever you can do, or dream you can, begin it.  Boldness has genius, power and magic in it. – Johann Wolfgang von Goethe"];

$("button").click(function() {
  let randNum = Math.floor(Math.random() * quotesArr.length);
  let randQuote = quotesArr[randNum];

  $('#quote').html(randQuote);

  $('#tweet').empty();
  twttr.widgets.createShareButton(
    "http:\/\/taylorstallworth.tech",
    document.getElementById('tweet'), {
      text: randQuote,
      via: "tay_llure",
    }
  );
});

window.twttr = (function(d, s, id) {
   var js, fjs = d.getElementsByTagName(s)[0],
     t = window.twttr || {};
   if (d.getElementById(id)) return t;
   js = d.createElement(s);
   js.id = id;
   js.src = "https://platform.twitter.com/widgets.js";
   fjs.parentNode.insertBefore(js, fjs);

   t._e = [];
   t.ready = function(f) {
     t._e.push(f);
   };

   return t;
 }(document, "script", "twitter-wjs"));

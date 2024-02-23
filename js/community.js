document.getElementById("community-tweet").style.opacity = 1;
document.getElementById("community-blog").style.opacity = 0;

let tweetVisible = true;

setInterval(() => {
  if (tweetVisible) {
    document.getElementById("community-tweet").style.opacity = 0;
    document.getElementById("community-blog").style.opacity = 1;
    tweetVisible = false;
  } else {
    document.getElementById("community-tweet").style.opacity = 1;
    document.getElementById("community-blog").style.opacity = 0;
    tweetVisible = true;
  }
}, 2000)
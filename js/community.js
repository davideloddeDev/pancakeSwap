document.getElementById("community-tweet").style.opacity = 1;
document.getElementById("community-tweet").style.zIndex = 1;
document.getElementById("community-blog").style.opacity = 0;
document.getElementById("community-blog").style.zIndex = 0;
document.getElementById("community-tweet-bar").classList.add("active");

let tweetVisible = true;

setInterval(() => {
  if (tweetVisible) {
    document.getElementById("community-tweet").style.opacity = 0;
    document.getElementById("community-tweet").style.zIndex = 0;
    document.getElementById("community-blog").style.opacity = 1;
    document.getElementById("community-blog").style.zIndex = 1;
    tweetVisible = false;
  } else {
    document.getElementById("community-tweet").style.opacity = 1;
    document.getElementById("community-tweet").style.zIndex = 1;
    document.getElementById("community-blog").style.opacity = 0;
    document.getElementById("community-blog").style.zIndex = 0;
    tweetVisible = true;
  }
  document.getElementById("community-tweet-bar").classList.toggle("active");
  document.getElementById("community-blog-bar").classList.toggle("active");
}, 5000)


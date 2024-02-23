const tweet = document.getElementById("community-tweet");
const tweetBar = document.getElementById("community-tweet-bar");
const blog = document.getElementById("community-blog");
const blogBar = document.getElementById("community-blog-bar");

tweet.style.opacity = 1;
tweet.style.zIndex = 1;
blog.style.opacity = 0;
blog.style.zIndex = 0;
tweetBar.classList.add("active");

let tweetVisible = true;

function showTweet() {
  tweet.style.opacity = 1;
  tweet.style.zIndex = 1;
  blog.style.opacity = 0;
  blog.style.zIndex = 0;
  tweetVisible = true;
  tweetBar.classList.toggle("active");
  blogBar.classList.toggle("active");
}

function showBlog() {
  tweet.style.opacity = 0;
  tweet.style.zIndex = 0;
  blog.style.opacity = 1;
  blog.style.zIndex = 1;
  tweetVisible = false;
  tweetBar.classList.toggle("active");
  blogBar.classList.toggle("active");
}

setInterval(() => {
  if (tweetVisible) {
    showBlog()
  } else {
    showTweet()
  }
}, 5000)

tweetBar.addEventListener("click", () => {
  showTweet()
})

blogBar.addEventListener("click", () => {
  showBlog()
})
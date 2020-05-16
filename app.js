var videoBg = document.querySelectorAll(".video-background");
var videos = document.querySelectorAll("#video");

videoBg.forEach(function (el) {
  var vidId = el.getAttribute("data-id");
  el.addEventListener("click", function (e) {
    if (e.currentTarget.getAttribute("data-id") === vidId) {
      el.classList.add("hide-background");

      videos.forEach(function (video) {
        var player = $f(video);
        player.api("play");
      });
    }
  });
});

/*
var audio = document.getElementById('my_audio');
audio.play();
audio.volume = 0.2;
audio.loop = false;
*/

/* Start scroll up-down controller */
var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos < currentScrollPos) {
    document.getElementById("my-header-top").style.marginTop = "-40px";
  } else {
    document.getElementById("my-header-top").style.marginTop = "0px";
  }
  prevScrollpos = currentScrollPos;
};
/* End scroll up-down controller */

/* Start preloader */
$(window).on("load", function () {
  $("#loader-container").fadeOut(1000);
});
/* End preloader */

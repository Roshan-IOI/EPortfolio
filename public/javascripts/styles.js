//snippet of code from https://www.geeksforgeeks.org/how-to-play-video-on-mouse-hover-and-pause-on-mouseout-using-javascript/ 
//for video play on mouse hover action

// Targeting video element 
let clip = document.querySelector(".vid")
  
/* Applying mouseover event on video clip 
and then we call play() function to play 
the video when the mouse is over the video */
clip.addEventListener("mouseover", function (e) {
    clip.play();
})

/* Applying mouseout event on video clip 
and then we call pause() function to stop 
the video when the mouse is out the video */
clip.addEventListener("mouseout", function (e) {
    clip.pause();
})
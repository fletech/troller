const iframeLayout = document.querySelector("#iframe-container .iframe-layout");
const youtubePlayer = document.querySelector("#ytplayer");

export const interaction_youtube = (state, items) => {
  if (state) {
    youtubePlayer.classList.add("element-visible");
    iframeLayout.classList.add("element-visible");
    let videoId = items[0].id.videoId;
    console.log(items);
    let src = `https://www.youtube.com/embed/${videoId}?autoplay=1&modestbranding=1&showinfo=0&rel=0&fs=0&color=white&mute=1`;
    //console.log(`https://www.youtube.com/watch?v=${videoId}`);
    youtubePlayer.src = src;
  } else {
    youtubePlayer.classList.remove("visible");
    youtubePlayer.src = "";
  }
  if (!state) {
    youtubePlayer.classList.remove("element-visible");
    iframeLayout.classList.remove("element-visible");
  }
};

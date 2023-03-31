const videoPreviewInit = () => {
  const videoWrappers = document.querySelectorAll(
    ".about-company-hero__video-wrapper"
  );
  videoWrappers.forEach(wrapper => {
    const preview = wrapper.querySelector(".video__preview");
    const video = wrapper.querySelector("video");
    let firstPlay = true;

    wrapper.addEventListener("click", () => {
      if (!firstPlay) return;
      console.log(firstPlay);
      if (video.paused) {
        firstPlay = false;
        video.play();
        preview.classList.remove("video__preview--show");
      } else {
        video.pause();
      }
    });
  });
};
export default videoPreviewInit;

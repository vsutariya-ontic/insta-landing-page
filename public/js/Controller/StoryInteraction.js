const storyList = document.getElementById("story-list");
const scrollStoryRightButton = document.getElementById(
  "scroll-story-right-button"
);
const scrollStoryLeftButton = document.getElementById(
  "scroll-story-left-button"
);
document.addEventListener("DOMContentLoaded", async () => {
  addEventHandlersToStories();
});

const addEventHandlersToStories = () => {
  storyList.addEventListener("scroll", () => {
    if (storyList.scrollLeft > 0) {
      scrollStoryLeftButton.removeAttribute("hidden");
    } else {
      scrollStoryLeftButton.setAttribute("hidden", "true");
    }
  });

  scrollStoryRightButton.addEventListener("click", () => {
    storyList.scrollBy(250, 0);
  });

  scrollStoryLeftButton.addEventListener("click", () => {
    storyList.scrollBy(-250, 0);
  });
};

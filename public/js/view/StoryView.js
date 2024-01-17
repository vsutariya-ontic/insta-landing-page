import { fetchStoryList } from "/public/js/Model/StoryModel.js";
import { NodeMaker } from "/public/js/View/NodeMaker.js";
const storyList = document.getElementById("story-list");
const stories = await fetchStoryList();

export const renderStories = (stories) => {
  stories.forEach((element, index) => {
    const newStory = NodeMaker.createStory({
      username: element.username,
      index: index,
    });
    storyList.appendChild(newStory);
  });
};
renderStories(stories);

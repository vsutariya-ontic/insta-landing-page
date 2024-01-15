// fetch data and show it
import { generateStoryData, generateSuggestedUsers, generatePostList, } from "/public/js/helper-functions.js";

document.addEventListener('DOMContentLoaded', async() => {
  const suggestedUserList = await generateSuggestedUsers();
  const storyUserList = await generateStoryData();
  const postList = await generatePostList();

  loadPosts(postList);
  loadSuggestions(suggestedUserList);
  loadStories(storyUserList);
  console.log('dom loaded');

  // console.log(document.querySelectorAll('#suggestion-demo'))

});
console.log('script');
// Completed!
const loadSuggestions = (toBeRenderedList) => {
  const suggestionList = document.getElementById("suggestion-list");
  const suggestionDemo = document.getElementById("suggestion-demo");
  toBeRenderedList.forEach((suggestedUser, index) => {
    const newSuggestedUser = suggestionDemo.cloneNode(true);

    newSuggestedUser.setAttribute('id', index);
    const followButton = newSuggestedUser.querySelector('#follow-button');
    followButton.addEventListener('click', () => {
      const text = followButton.querySelector('#follow-button-text');
      if(text.textContent === "Follow"){
        text.textContent = "Requested";
      }
      else{
        text.textContent = 'Follow';
      }
    })
    newSuggestedUser.querySelector("#username").textContent = suggestedUser.username;
    newSuggestedUser.querySelector("#mutual-followers").textContent = `${suggestedUser.mutualFollowers} mutual followers`;

    suggestionList.appendChild(newSuggestedUser);
  });
  suggestionDemo.remove();
};

const loadStories = (toBeRenderedStories) => {
  const storyList = document.getElementById("story-list");
  const storyDemo = document.getElementById("story-demo");
  // if (storyDemo.getAttribute("key") == "demo-key") {
  //   console.log("Yeyyyy works!");
  // }
  toBeRenderedStories.forEach((element, index) => {
    const {username, name} = element;
    const newStoryItem = storyDemo.cloneNode(true);

    newStoryItem.setAttribute('id', index);
    newStoryItem.querySelector("#username").textContent = username;
    
    storyList.appendChild(newStoryItem);
  });
  storyDemo.remove();

  const scrollButtonRight = document.getElementById("scroll-story-right-button");
  const scrollButtonLeft = document.getElementById("scroll-story-left-button");

  storyList.addEventListener("scroll", () => {
    if (storyList.scrollLeft > 0) {
      scrollButtonLeft.removeAttribute("hidden");
    } else {
      scrollButtonLeft.setAttribute("hidden", "true");
    }
  });

  scrollButtonRight.addEventListener("click", () => {
    storyList.scrollBy(250, 0);
  });

  scrollButtonLeft.addEventListener("click", () => {
    storyList.scrollBy(-250, 0);
  });
};

const loadPosts = (toBeRenderedPosts) => {
  const overlay = document.getElementById("overlay");
  const postList = document.getElementById("post-list");
  const postDemo = document.getElementById("post-demo");
  const postOptionsList = postList.querySelector("#post-options-list");

  toBeRenderedPosts.forEach((element, index) => {
    const { username, likeCount, timeSincePosted, caption, commentCount } = element;
    const newPost = postDemo.cloneNode(true);

    const postOptionsButton = newPost.querySelector("#post-options-button");
    

    newPost.querySelectorAll("#username").forEach((item) => { item.textContent = username; });
    newPost.querySelector("#like-count").textContent = `${likeCount} likes`;
    newPost.querySelector("#time-since-posted").textContent = `~ ${timeSincePosted}`;
    newPost.querySelector("#caption").textContent = caption;
    newPost.querySelector("#comment-count").textContent = `View all ${commentCount} comments`;
    
    // document.body.addEventListener('click', () => {
    //   postOptionsList.setAttribute('hidden', 'true');
    // })

    postOptionsButton.addEventListener("click", () => {
      const initialStatus = postOptionsList.style.display;
      // console.log('clicked');
      // console.log(initialStatus);
      if (initialStatus === "" || initialStatus === "none") {
        postOptionsList.style.display = "flex";
        overlay.style.display = "block";
        console.log('got it');
        // Add a click event listener to the document to close the options list if clicked outside
        document.addEventListener("click", handleClickOutside);
      } else {
        postOptionsList.style.display = "none";
      }
    });

    // Function to handle clicks outside the options list
    function handleClickOutside(event) {
      // Check if the clicked element is outside the options list
      if (!postOptionsButton.contains(event.target) && !postOptionsList.contains(event.target)) {
        postOptionsList.style.display = "none";
        overlay.style.display = "none";

        // Remove the click event listener when the options list is closed
        document.removeEventListener("click", handleClickOutside);
      }
    }
    // hide options with scroll with below callback
    // document.addEventListener("scroll", () => {
    //   postOptionsList.style.display = "none";
    //   overlay.style.display = "none";
    // });
    newPost.setAttribute('id', index);
    postList.appendChild(newPost);
  });

  postDemo.remove();
};

// story scroll buttons
const storyListScroll = document.getElementById("story-list");
const scrollButtonRight = document.getElementById("scroll-story-right-button");
const scrollButtonLeft = document.getElementById("scroll-story-left-button");

storyListScroll.addEventListener("scroll", () => {
  if (storyListScroll.scrollLeft > 0) {
    scrollButtonLeft.removeAttribute("hidden");
  } else {
    scrollButtonLeft.setAttribute("hidden", "true");
  }
});

scrollButtonRight.addEventListener("click", () => {
  storyListScroll.scrollBy(250, 0);
});

scrollButtonLeft.addEventListener("click", () => {
  storyListScroll.scrollBy(-250, 0);
});


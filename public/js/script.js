// fetch
// style.display krva ma disadvantage chhe, for later
import {
  generateStoryData,
  generateSuggestedUsers,
  generatePostList,
  addCommentToPost,
  reportPost,
} from "/public/js/helper-functions.js";

import NodeMaker from "/public/js/NodeMaker.js";

const randomImageURL = "public/images/post.webp";
const loggedInUsername = "vatsal_1133";

const postList = document.getElementById("post-list");
const postDemo = document.getElementById("post-demo");
const postOptionsList = document.getElementById("post-options-list");
const storyList = document.getElementById("story-list");
const storyDemo = document.getElementById("story-demo");
const scrollStoryRightButton = document.getElementById(
  "scroll-story-right-button"
);
const scrollStoryLeftButton = document.getElementById(
  "scroll-story-left-button"
);
const suggestionList = document.getElementById("suggestion-list");
const suggestionDemo = document.getElementById("suggestion-demo");
const overlay = document.getElementById("overlay");
const reportButton = document.getElementById("report-button");

document.addEventListener("DOMContentLoaded", async () => {
  const suggestedUserList = await generateSuggestedUsers();
  const storyUserList = await generateStoryData();
  const posts = await generatePostList();

  renderPosts(posts);
  renderSuggestedUsers(suggestedUserList);
  renderStories(storyUserList);

  const testNode = NodeMaker.getButtons.comment();
  console.log(testNode);
  const testThis = document.getElementById("test-this");
  console.log(testThis);
  testThis.append(testNode);
});

const renderSuggestedUsers = (suggestions) => {
  suggestions.forEach((suggestedUser, index) => {
    const newSuggestedUser = NodeMaker.createSuggestedUser({
      username: suggestedUser.username,
      mutualFollowersCount: suggestedUser.mutualFollowersCount,
      index: index,
    });
    suggestionList.appendChild(newSuggestedUser);

    const followButton = newSuggestedUser.querySelector("#follow-button");
    followButton.addEventListener("click", () => {
      const text = followButton.querySelector("#follow-button-text");
      if (text.textContent === "Follow") {
        text.textContent = "Requested";
      } else {
        text.textContent = "Follow";
      }
    });
  });
  suggestionDemo.remove();
};

const renderStories = (stories) => {
  stories.forEach((element, index) => {
    const newStory = NodeMaker.createStory({
      username: element.username,
      index: index,
    });
    storyList.appendChild(newStory);
  });
  storyDemo.remove();

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

const renderPosts = async (posts) => {
  // const emptyList = async () => {
  //   let counter = 0;
  //   console.log(postList.children);
  //   postList.childNodes.forEach((item) => {
  //     console.log(item["id"]);
  //     if (item.id !== "post-demo" && item.id !== "post-options-list") {
  //       item.remove();
  //       counter++;
  //     } else {
  //       console.log(item);
  //     }
  //   });
  //   console.log(counter);
  // };
  // await emptyList();

  posts.forEach((element, index) => {
    const { username, likeCount, timeSincePosted, caption, commentCount } =
      element;
    const newPost = postDemo.cloneNode(true);
    newPost.style.display = "block";
    if (index === 0) {
      newPost.style.marginTop = "-1px";
    }

    const postOptionsButton = newPost.querySelector("#post-options-button");

    newPost.querySelectorAll("#username").forEach((item) => {
      item.textContent = username;
    });
    newPost.querySelector("#like-count").textContent = `${likeCount} likes`;
    newPost.querySelector(
      "#time-since-posted"
    ).textContent = `~ ${timeSincePosted}`;
    newPost.querySelector("#caption").textContent = caption;
    newPost.querySelector(
      "#comment-count"
    ).textContent = `View all ${commentCount} comments`;

    // document.body.addEventListener('click', () => {
    //   postOptionsList.setAttribute('hidden', 'true');
    // })

    // OPTION BUTTON EVENT HANDLING
    postOptionsButton.addEventListener("click", () => {
      const initialStatus = postOptionsList.style.display;
      // console.log('clicked');
      // console.log(initialStatus);
      if (initialStatus === "" || initialStatus === "none") {
        postOptionsList.style.display = "flex";

        overlay.style.display = "block";
        console.log("got it");
        const boundedReportHandler = handleReportButtonClick.bind(
          toBeRenderedPosts[index]
        );
        reportButton.addEventListener("click", boundedReportHandler);
        console.log(boundedReportHandler);
        // Add a click event listener to the document to close the options list if clicked outside
        document.addEventListener("click", handleClickOutside);
      } else {
        postOptionsList.style.display = "none";
      }
    });
    // Handling options buttons
    // Report button

    // Function to handle clicks outside the options list
    const handleClickOutside = (event) => {
      // Check if the clicked element is outside the options list
      if (
        !postOptionsButton.contains(event.target) &&
        !postOptionsList.contains(event.target)
      ) {
        postOptionsList.style.display = "none";
        overlay.style.display = "none";

        // Remove the click event listener when the options list is closed
        document.removeEventListener("click", handleClickOutside);
      }
    };
    // hide options with scroll with below callback
    // document.addEventListener("scroll", () => {
    //   postOptionsList.style.display = "none";
    //   overlay.style.display = "none";
    // });

    //  COMMENT BOX HANDLING

    const commentBox = newPost.querySelector("#comment-box");

    const firstCommentView = newPost.querySelector("#comment-icon");
    const secondCommentView = newPost.querySelector("#view-comments");
    [firstCommentView, secondCommentView].forEach((item) => {
      item.addEventListener("click", () => {
        // commentBox.style.display = "block";
        console.log("viewing comments");
        commentBox.style.display = "flex";
        newPost.querySelector("#hide-comments").style.display = "inline-block";
        newPost.querySelector("#view-comments").style.display = "none";
        loadComments(index); // userID
        console.log(commentBox);
        commentBox.style.display = "flex";
        // console.log(index);
      });
    });
    newPost.querySelectorAll("img").forEach((element) => {
      // element.setAttribute("src", randomImageURL);
    });

    const hideCommentButton = newPost.querySelector("#hide-comments");
    hideCommentButton.addEventListener("click", () => {
      commentBox.style.display = "none";
      newPost.querySelector("#hide-comments").style.display = "none";
      newPost.querySelector("#view-comments").style.display = "inline-block";
    });

    const postCommentButton = newPost.querySelector("#post-comment");
    postCommentButton.addEventListener("click", () => {
      // console.log("comment-added");
      const commentText = newPost.querySelector("#add-comment").value;
      // console.log(newPost.querySelector("#add-comment"));
      // console.log(commentText);
      if (commentText.length > 0) {
        // console.log("umm");
        addCommentToPost(loggedInUsername, index, commentText);
        newPost.querySelector("#add-comment").value = "";
        loadComments(index);
        commentBox.style.display = "block";
        newPost.querySelector("#hide-comments").style.display = "inline-block";
        newPost.querySelector("#view-comments").style.display = "none";
      }
    });
    // LIKE EFFECT
    const likeButton = newPost.querySelector("#like-button");
    const notLikedIcon = newPost.querySelector("#not-liked");
    const likedIcon = newPost.querySelector("#liked");
    const bigLikeIcon = newPost.querySelector("#big-like-icon");
    const imgElement = newPost.querySelector("#double-tap-area");

    likeButton.addEventListener("click", () => {
      if (likedIcon.style.display === "none") {
        notLikedIcon.style.display = "none";
        likedIcon.style.display = "block";
        likedIcon.style.animation = "singleHeartBeat 1s";
        setTimeout(() => {
          likedIcon.style.opacity = "100%";
        }, 1000);
      } else {
        likedIcon.style.display = "none";
        notLikedIcon.style.display = "block";
      }
    });
    imgElement.addEventListener("dblclick", (event) => {
      // event.preventDefault();
      // bigLikeIcon.style.display = "block";
      // console.log(bigLikeIcon.style.animation);
      notLikedIcon.style.display = "none";
      likedIcon.style.display = "block";
      likedIcon.style.animation = "singleHeartBeat 1s";
      setTimeout(() => {
        bigLikeIcon.style.animation = "onImageSingleHeartBeat 1.5s";
      }, 0);
      setTimeout(() => {
        likedIcon.style.opacity = "100%";
      }, 1000);
      bigLikeIcon.style.animation = "";
    });
    // newPost.setAttribute("id", index);
    // console.log(index);
    postList.appendChild(newPost);
  });
  postDemo.display = "none";
  // postList.scrollBy(0, 30);
};

const loadComments = async (index) => {
  const posts = await generatePostList();
  const targetPost = postList.children[index + 2];
  const commentList = targetPost.querySelector("#comment-list");
  const commentDemo = targetPost.querySelector("#comment-demo");
  commentList.childNodes.forEach((item) => {
    if (item.localName === "li" && item.id !== "comment-demo") {
      item.remove();
    }
  });
  posts[index]["comments"].forEach(({ username, val }, index) => {
    console.log(username, val);
    const newComment = commentDemo.cloneNode(true);
    newComment.querySelector("#username").textContent = username;
    newComment.querySelector("#the-comment").textContent = val;
    newComment.setAttribute("id", index);
    newComment.style.display = "flex";
    commentList.append(newComment);
  });
};
// story scroll buttons

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

async function handleReportButtonClick() {
  this.isReported = true;
  postOptionsList.style.display = "none";
  overlay.style.display = "none";
  const lp = await generatePostList();
  console.log(lp);
  renderPosts(lp);
}
// const testNode = NodeMaker.createSuggestedUser({
//   username: "usernamafe",
//   mutualFollowersCount: 20,
//   index: 6,
// });
// const testNode = NodeMaker.createSuggestedUser();
// const testNode2 = NodeMaker.createSuggestedUser();
// suggestionList.appendChild(testNode2);

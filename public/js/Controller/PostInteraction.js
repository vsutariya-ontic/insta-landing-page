import {
  fetchComments,
  addCommentToPost,
} from "/public/js/Model/CommentModel.js";
import { fetchPostList } from "/public/js/Model/PostModel.js";
import { renderPosts } from "/public/js/View/PostView.js";
import { NodeMaker } from "/public/js/View/NodeMaker.js";
const loggedInUsername = "vatsal_1133";

const postList = document.getElementById("post-list");
const postOptionsList = document.getElementById("post-options-list");
const overlay = document.getElementById("overlay");
const reportButton = document.getElementById("report-button");

async function handleReportButtonClick() {
  this.isReported = true;
  postOptionsList.style.display = "none";
  overlay.style.display = "none";
  const lp = await fetchPostList();
  renderPosts(lp);
  addEventHandlersToPosts();
}
document.addEventListener("DOMContentLoaded", async () => {
  addEventHandlersToPosts();
});

const addEventHandlersToPosts = async () => {
  const posts = await fetchPostList();
  const postItems = postList.querySelectorAll("#post-item");

  postItems.forEach((newPost, index) => {
    // OPTION BUTTON EVENT HANDLING
    const postOptionsButton = newPost.querySelector("#post-options-button");
    const handleClickOutside = (event) => {
      if (
        !postOptionsButton.contains(event.target) &&
        !postOptionsList.contains(event.target)
      ) {
        postOptionsList.style.display = "none";
        overlay.style.display = "none";
        document.removeEventListener("click", handleClickOutside);
      }
    };
    const handleViewOptions = (event) => {
      const initialStatus = postOptionsList.style.display;
      if (initialStatus === "" || initialStatus === "none") {
        postOptionsList.style.display = "flex";

        overlay.style.display = "block";
        const boundedReportHandler = handleReportButtonClick.bind(
          posts.find((item) => item.postID === newPost.dataset.key)
        );
        reportButton.addEventListener("click", boundedReportHandler);
        document.addEventListener("click", handleClickOutside);
      } else {
        postOptionsList.style.display = "none";
      }
    };
    postOptionsButton.addEventListener("click", handleViewOptions);

    // DISPLAYING COMMENTS
    const commentBox = newPost.querySelector("#comment-box");
    const commentIconButton = newPost.querySelector("#comment-icon");
    const viewCommentButton = newPost.querySelector("#view-comments");
    const hideCommentButton = newPost.querySelector("#hide-comments");
    const postCommentButton = newPost.querySelector("#post-comment");
    const handleHideComment = (event) => {
      commentBox.style.display = "none";
      newPost.querySelector("#hide-comments").style.display = "none";
      newPost.querySelector("#view-comments").style.display = "inline-block";
    };
    const handleViewComment = (event) => {
      commentBox.style.display = "flex";
      newPost.querySelector("#hide-comments").style.display = "inline-block";
      newPost.querySelector("#view-comments").style.display = "none";
      loadComments(newPost.dataset.key); // userID
      commentBox.style.display = "flex";
    };
    commentIconButton.addEventListener("click", handleViewComment);
    viewCommentButton.addEventListener("click", handleViewComment);
    hideCommentButton.addEventListener("click", handleHideComment);

    // ADDING COMMENTS
    const handlePostComment = (event) => {
      const commentText = newPost.querySelector("#add-comment").value;
      if (commentText.length > 0) {
        addCommentToPost(loggedInUsername, newPost.dataset.key, commentText);
        newPost.querySelector("#add-comment").value = "";
        loadComments(newPost.dataset.key);
        updatePost(newPost.dataset.key);
      }
    };
    postCommentButton.addEventListener("click", handlePostComment);

    // LIKE EFFECT
    const likeButton = newPost.querySelector("#like-button");
    const notLikedIcon = newPost.querySelector("#not-liked");
    const likedIcon = newPost.querySelector("#liked");
    const bigLikeIcon = newPost.querySelector("#big-like-icon");
    const imgElement = newPost.querySelector("#double-tap-area");
    const targetData = posts.find(
      (item) => item.postID === newPost.dataset.key
    );
    const handleLikeButton = (event) => {
      if (
        likedIcon.style.display === "none" ||
        likedIcon.style.display === ""
      ) {
        targetData.likeCount++;
        notLikedIcon.style.display = "none";
        likedIcon.style.display = "block";
        likedIcon.style.animation = "singleHeartBeat 1s";
        setTimeout(() => {
          likedIcon.style.opacity = "100%";
        }, 1000);
      } else {
        targetData.likeCount--;
        likedIcon.style.display = "none";
        notLikedIcon.style.display = "block";
      }
      updatePost(newPost.dataset.key);
    };
    const handleDoubleClickLike = (event) => {
      if (
        likedIcon.style.display === "none" ||
        likedIcon.style.display === ""
      ) {
        targetData.likeCount++;
      }
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
      updatePost(newPost.dataset.key);
    };
    likeButton.addEventListener("click", handleLikeButton);
    imgElement.addEventListener("dblclick", handleDoubleClickLike);
    if (newPost.dataset.isLiked == "true") {
      likeButton.click();
    }
  });
};

const loadComments = async (postID) => {
  const comments = await fetchComments();
  // const targetPost = postList.children[index];
  const commentList = postList
    .querySelector(`#post-item[data-key="${postID}"]`)
    .querySelector("#comment-list");
  commentList.innerHTML = "";
  // const oldComments =
  comments
    .find((item) => item.postID == postID)
    .comments.forEach(({ commenterUsername, commentText }, index) => {
      const newComment = NodeMaker.createComment({
        commenterUsername: commenterUsername,
        commentText: commentText,
        index: index,
      });
      commentList.append(newComment);
    });
};
// story scroll buttons

const updatePost = async (queryPostID) => {
  const post = postList.querySelector(`[data-key="${queryPostID}"]`);
  const posts = await fetchPostList();
  const data = posts.find((item) => item.postID === queryPostID);
  if (!data || !post) {
    return;
  }
  const {
    postID,
    username,
    timeSincePosted,
    imageURL,
    caption,
    likeCount,
    commentCount,
    isLiked,
    isReported,
  } = data;

  post.querySelector("#like-count").textContent = `${likeCount} likes`;
  post.querySelector(
    "#comment-count"
  ).textContent = `View all ${commentCount} comments`;

  return;
};

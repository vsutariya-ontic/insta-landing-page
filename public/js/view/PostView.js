import { fetchPostList } from "/public/js/Model/PostModel.js";
import { NodeMaker } from "/public/js/View/NodeMaker.js";

const posts = await fetchPostList();
const postList = document.getElementById("post-list");

export const renderPosts = async (posts) => {
  const oldPosts = postList.querySelectorAll("#post-item");
  // console
  oldPosts.forEach((item) => {
    item.remove();
  });
  posts.forEach((element, index) => {
    /* 
      const { postID, username, timeSincePosted, imageURL, caption, likeCount, isLiked, isReported } = element;
    */
    const newPost = NodeMaker.createPost(element);
    if (newPost.style.display !== "none" && newPost.style.display !== "") {
      postList.appendChild(newPost);
    }
  });
};
renderPosts(posts);
// renderSuggestedUsers(suggestedUserList);

export class NodeMaker {
  static createSuggestedUser = (props) => {
    const { username, mutualFollowersCount, index } = props;
    const newSuggestion = document.createElement("div");
    newSuggestion.id = "suggestion-item";
    newSuggestion.classList.add(
      "flex",
      "justify-between",
      "items-center",
      "mt-2",
      "px-4"
    );
    newSuggestion.setAttribute("data-key", "2");

    const profileInfoDiv = document.createElement("div");
    profileInfoDiv.classList.add("flex", "items-center");

    const profileImage = document.createElement("img");
    profileImage.src = "public/images/profile-pic.webp";
    profileImage.classList.add("max-w-16", "rounded-full");
    profileImage.style.marginTop = "4px";
    profileImage.style.maxWidth = "3.6rem";

    const textInfoDiv = document.createElement("div");
    textInfoDiv.classList.add("text-sm", "items-center", "ml-4");

    const usernameParagraph = document.createElement("p");
    usernameParagraph.classList.add("font-bold");
    usernameParagraph.id = "username";
    usernameParagraph.textContent = username;

    const mutualFollowersParagraph = document.createElement("p");
    mutualFollowersParagraph.classList.add("text-gray-400", "text-xs");
    mutualFollowersParagraph.id = "mutual-followers";
    mutualFollowersParagraph.textContent = `${mutualFollowersCount} mutual followers`;

    profileInfoDiv.appendChild(profileImage);
    profileInfoDiv.appendChild(textInfoDiv);

    textInfoDiv.appendChild(usernameParagraph);
    textInfoDiv.appendChild(mutualFollowersParagraph);

    const followButtonDiv = document.createElement("div");

    const followButton = document.createElement("button");
    followButton.id = "follow-button";
    const followButtonText = document.createElement("p");
    followButtonText.classList.add(
      "text-blue-700",
      "font-semibold",
      "px-3",
      "py-1",
      "hover:bg-sky-950",
      "rounded-full"
    );
    followButtonText.id = "follow-button-text";
    followButtonText.textContent = "Follow";

    followButton.appendChild(followButtonText);

    newSuggestion.appendChild(profileInfoDiv);
    newSuggestion.appendChild(followButtonDiv);
    followButtonDiv.appendChild(followButton);

    newSuggestion.dataset.key = `${index}`;
    return newSuggestion;
  };

  static createStory = (props) => {
    const { username, index } = props;

    const newStory = document.createElement("div");
    newStory.id = "story-item";

    const buttonElement = document.createElement("button");
    buttonElement.classList.add(
      "min-w-16",
      "min-h-16",
      "max-w-16",
      "max-h-16",
      "rounded-full",
      "justify-center",
      "flex",
      "bg-red-500"
    );
    buttonElement.style.background =
      "linear-gradient(125deg, #b000ef, #f27d00)";

    const imageElement = document.createElement("img");
    imageElement.src = "public/images/profile-pic.webp";
    imageElement.classList.add("max-w-16", "rounded-full");
    imageElement.style.marginTop = "4px";
    imageElement.style.maxWidth = "3.6rem";

    buttonElement.appendChild(imageElement);

    const usernameParagraph = document.createElement("p");
    usernameParagraph.classList.add("text-xs", "mt-2");
    usernameParagraph.id = "username";
    usernameParagraph.textContent = username;

    newStory.appendChild(buttonElement);
    newStory.appendChild(usernameParagraph);
    newStory.dataset.key = index;
    return newStory;
  };

  static createPost = (props) => {
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
    } = props;
    const post = document.createElement("div");
    post.classList.add("border-b-[0.5px]", "border-gray-600");
    post.dataset.key = postID;
    post.dataset.name = "post-item";
    post.id = "post-item";
    post.innerHTML = `<div class="justify-between flex">
    <div class="flex">
        <img src="public/images/profile-pic.webp" class="min-w-7 max-w-7 rounded-full mt-1" />
        <!-- <img src="https://random.imagecdn.app/500/150" class="min-w-7 max-w-7 rounded-full mt-1" /> -->
        <button class="text-[0.9rem] font-bold mt-1 ml-3 hover:underline">
            <p id="username" >${username}</p>
        </button>
        <img src="public/images/verified.webp" class="min-w-3 max-w-3 min-h-3 max-h-3 rounded-full mt-[0.85rem] ml-1" />
        <p id="time-since-posted" class="text-[0.9rem] font-bold text-gray-500 mt-[0.6rem] ml-3">~ ${timeSincePosted}</p>
    </div>
    <div>
        <button class="hover:bg-gray-900 rounded-full p-2 pb-2" id="post-options-button">
            <p class="text-2xl -mt-3">...</p>
        </button>
    </div>

</div>
<div class="mt-3">
    <div class="relative">
<div id="double-tap-area" class="absolute flex justify-center items-center w-full h-full select-none">
<svg xmlns="http://www.w3.org/2000/svg" id="big-like-icon" class="opacity-0 transition duration-1000" height="26" width="26" fill="red" viewBox="0 0 512 512"><path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"/></svg>
</div>
        <img src="public/images/post.webp" id="post-picture" class="min-w-full rounded-md" />
    </div>
    <div>
        <div class="flex mt-5 space-x-2 justify-start" id="test-this">
            <button id='like-button' class="max-w-fit">
<svg xmlns="http://www.w3.org/2000/svg" id="liked" class="opacity-100 hidden transition duration-1000" height="26" width="26" fill="red" viewBox="0 0 500 500"><path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"/></svg>
<svg xmlns="http://www.w3.org/2000/svg" id="not-liked" class="transition duration-1000 " height="26" width="26" fill="white" viewBox="0 0 500 500"><path d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8v-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5v3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20c0 0-.1-.1-.1-.1c0 0 0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5v3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2v-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z"/></svg>
            </button>
            <!-- <button id="like-button" class="max-w-fit">
                <svg xmlns="http://www.w3.org/2000/svg" id="liked" class="opacity-100 hidden transition duration-1000" height="26" width="26" fill="red" viewbox="0 0 500 500"><path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"></path></svg>
                <svg xmlns="http://www.w3.org/2000/svg" id="not-liked" class="transition duration-1000" height="26" width="26" fill="white" viewbox="0 0 500 500"><path d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8v-3.3c0-70.4 50-130.8 119.2-144C158.6 36.5 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5v3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20c0 0-.1-.1-.1-.1c0 0 0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5v3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2v-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z"></path></svg>
            </button> -->
            <button id="comment-icon">
                <svg aria-label="Comment" class="x1lliihq x1n2onr6 x5n08af" fill="currentColor" height="24" role="img" viewBox="0 0 24 24" width="24"><title>Comment</title><path d="M20.656 17.008a9.993 9.993 0 1 0-3.59 3.615L22 22Z" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2"></path></svg>
            </button>
            <button>
                <svg aria-label="Share Post" class="x1lliihq x1n2onr6 x5n08af" fill="currentColor" height="24" role="img" viewBox="0 0 24 24" width="24"><title>Share Post</title><line fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2" x1="22" x2="9.218" y1="3" y2="10.083"></line><polygon fill="none" points="11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334" stroke="currentColor" stroke-linejoin="round" stroke-width="2"></polygon></svg>
            </button> 
        </div>
        <div class="mt-3">
            <div id="like-count">${likeCount} likes</div>
            <div class="flex space-x-2">
                <p>
                  <button class="hover:underline"> <span class="font-semibold" id="username">${username}</span> </button>
                  <span id='caption'> ${caption}</span>
                </p>
            </div>
            <div class="text-gray-500">
                <button id="view-comments" class="inline-block"><p class="hover:underline" id="comment-count">View all ${commentCount} comments</p></button>
                <button id="hide-comments" class="hidden"><p class="hover:underline" >Hide the comments</p></button>
                <br>
                <div class="flex justify-between space-x-5 space-y-2 mb-2 items-center">
                    <input type="text" id="add-comment" placeholder="Add a comment..." class="bg-transparent w-full text-xs focus:border-0 focus:px-2 focus:py-2 rounded-lg border-0" />
                    <!-- <div contenteditable="true" data-placeholder="Add a comment..." id="add-comment" class="bg-transparent w-full text-xs focus:border-0 focus:px-2 focus:py-2 rounded-lg border-0" > </div> -->
                    <button id="post-comment" class="text-blue-600"> Post </button>
                </div>
            </div>
            <div id="comment-box" class="hidden max-h-32 overflow-auto">
                <ul id="comment-list" >
                    
                </ul>
            </div>
        </div>
    </div>
</div>`;
    if (isReported === true) {
      post.style.display = "none";
    } else {
      post.style.display = "block";
    }
    post.dataset.isLiked = isLiked;
    return post;
  };

  static createComment = (props) => {
    const { commenterUsername, commentText, index } = props;

    const comment = document.createElement("li");
    comment.classList.add(
      "text-[0.85rem]",
      "items-center",
      "space-x-2",
      "mt-2",
      "flex"
    );
    comment.id = "comment-item";

    comment.innerHTML = `<img src="public/images/profile-pic.webp" class="min-w-7 max-w-7 rounded-full" />
    <span class="font-bold" id="username">${commenterUsername}</span>
    <span id="the-comment">${commentText}</span>`;
    comment.dataset.key = index;
    return comment;
  };

  static #getPostTopBar = (props) => {
    const { username, timeSincePosted } = props;
    const postTopBar = document.createElement("div");
    postTopBar.classList.add("justify-between", "flex");

    const userInformationDiv = document.createElement("div");
    userInformationDiv.classList.add("flex");

    const profileImage = document.createElement("img");
    profileImage.src = "public/images/profile-pic.webp";
    profileImage.classList.add("min-w-7", "max-w-7", "rounded-full", "mt-1");

    const usernameButton = document.createElement("button");
    usernameButton.classList.add(
      "text-[0.9rem]",
      "font-bold",
      "mt-1",
      "ml-3",
      "hover:underline"
    );

    const usernameParagraph = document.createElement("p");
    usernameParagraph.id = "username";
    usernameParagraph.textContent = username;

    const verifiedBadge = document.createElement("img");
    verifiedBadge.src = "public/images/verified.webp";
    verifiedBadge.classList.add(
      "min-w-3",
      "max-w-3",
      "min-h-3",
      "max-h-3",
      "rounded-full",
      "mt-[0.85rem]",
      "ml-1"
    );

    const timeSincePostedParagraph = document.createElement("p");
    timeSincePostedParagraph.id = "time-since-posted";
    timeSincePostedParagraph.classList.add(
      "text-[0.9rem]",
      "font-bold",
      "text-gray-500",
      "mt-[0.6rem]",
      "ml-3"
    );
    timeSincePostedParagraph.textContent = timeSincePosted;

    usernameButton.appendChild(usernameParagraph);
    userInformationDiv.appendChild(profileImage);
    userInformationDiv.appendChild(usernameButton);
    userInformationDiv.appendChild(verifiedBadge);
    userInformationDiv.appendChild(timeSincePostedParagraph);

    const postOptionsButtonDiv = document.createElement("div");

    const postOptionsButton = document.createElement("button");
    postOptionsButton.id = "post-options-button";
    postOptionsButton.classList.add(
      "hover:bg-gray-900",
      "rounded-full",
      "p-2",
      "pb-2"
    );

    const ellipsisIcon = document.createElement("p");
    ellipsisIcon.classList.add("text-2xl", "-mt-3");
    ellipsisIcon.textContent = "...";

    postOptionsButton.appendChild(ellipsisIcon);
    postOptionsButtonDiv.appendChild(postOptionsButton);

    postTopBar.appendChild(userInformationDiv);
    postTopBar.appendChild(postOptionsButtonDiv);

    return postTopBar;
  };

  static #getPostBottomSection = (props) => {
    const mainDiv = document.createElement("div");

    const firstChildDiv = document.createElement("div");
    firstChildDiv.classList.add("flex", "mt-5", "space-x-2", "justify-start");
    firstChildDiv.id = "test-this";
    const likeButton = this.getButtons.like();
    const commentButton = this.getButtons.comment();
    const shareButton = this.getButtons.share();
    firstChildDiv.appendChild(likeButton);
    firstChildDiv.appendChild(commentButton);
    firstChildDiv.appendChild(shareButton);
    const secondChildDiv = document.createElement("div");
    secondChildDiv.classList.add("mt-3");

    const likeCountDiv = document.createElement("div");
    likeCountDiv.id = "like-count";
    likeCountDiv.textContent = "777k likes";

    const secondInnerDiv = document.createElement("div");
    secondInnerDiv.classList.add("flex", "space-x-2");

    const usernameParagraph = document.createElement("p");
    usernameParagraph.classList.add("font-semibold");
    usernameParagraph.id = "username";
    usernameParagraph.textContent = "vkohli_09";

    const captionParagraph = document.createElement("p");
    captionParagraph.id = "caption";
    captionParagraph.textContent = "Here comes the caption!😁😁";

    secondInnerDiv.appendChild(usernameParagraph);
    secondInnerDiv.appendChild(captionParagraph);

    const thirdInnerDiv = document.createElement("div");
    thirdInnerDiv.classList.add("text-gray-500");

    const viewCommentsButton = document.createElement("button");
    viewCommentsButton.id = "view-comments";

    const viewCommentsParagraph = document.createElement("p");
    viewCommentsParagraph.classList.add("hover:underline");
    viewCommentsParagraph.id = "comment-count";
    viewCommentsParagraph.textContent = "View all 578 comments";

    const hideCommentsButton = document.createElement("button");
    hideCommentsButton.id = "hide-comments";
    hideCommentsButton.classList.add("hidden");

    const hideCommentsParagraph = document.createElement("p");
    hideCommentsParagraph.classList.add("hover:underline");
    hideCommentsParagraph.id = "comment-count";
    hideCommentsParagraph.textContent = "Hide the comments";

    const lineBreak = document.createElement("br");

    const fourthInnerDiv = document.createElement("div");
    fourthInnerDiv.classList.add(
      "flex",
      "justify-between",
      "space-x-5",
      "space-y-2",
      "mb-2",
      "items-center"
    );

    const addCommentInput = document.createElement("input");
    addCommentInput.type = "text";
    addCommentInput.id = "add-comment";
    addCommentInput.placeholder = "Add a comment...";
    addCommentInput.classList.add(
      "bg-transparent",
      "w-full",
      "text-xs",
      "focus:border-0",
      "focus:px-2",
      "focus:py-2",
      "rounded-lg",
      "border-0"
    );

    const postCommentButton = document.createElement("button");
    postCommentButton.id = "post-comment";
    postCommentButton.classList.add("text-blue-600");
    postCommentButton.textContent = "Post";

    fourthInnerDiv.appendChild(addCommentInput);
    fourthInnerDiv.appendChild(postCommentButton);

    const fifthInnerDiv = document.createElement("div");
    fifthInnerDiv.id = "comment-box";
    fifthInnerDiv.classList.add("hidden", "max-h-32", "overflow-auto");

    const commentList = this.getCommentBox();
    fifthInnerDiv.appendChild(commentList);

    secondChildDiv.appendChild(likeCountDiv);
    secondChildDiv.appendChild(secondInnerDiv);
    secondChildDiv.appendChild(thirdInnerDiv);
    secondChildDiv.appendChild(viewCommentsButton);
    secondChildDiv.appendChild(hideCommentsButton);
    secondChildDiv.appendChild(lineBreak);
    secondChildDiv.appendChild(fourthInnerDiv);
    secondChildDiv.appendChild(fifthInnerDiv);

    mainDiv.appendChild(firstChildDiv);
    mainDiv.appendChild(secondChildDiv);

    const mainContainer = document.createElement("div");
    mainContainer.classList.add("mt-3");

    const relativeContainer = document.createElement("div");
    relativeContainer.classList.add("relative");

    const doubleTapArea = document.createElement("div");
    doubleTapArea.id = "double-tap-area";
    doubleTapArea.classList.add(
      "absolute",
      "flex",
      "justify-center",
      "items-center",
      "w-full",
      "h-full",
      "select-none"
    );

    const likeIconSvg = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "svg"
    );
    likeIconSvg.id = "big-like-icon";
    likeIconSvg.classList.add("opacity-0", "transition", "duration-1000");
    likeIconSvg.setAttribute("height", "26");
    likeIconSvg.setAttribute("width", "26");
    likeIconSvg.setAttribute("fill", "red");
    likeIconSvg.setAttribute("viewBox", "0 0 512 512");

    const likeIconPath = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "path"
    );
    likeIconPath.setAttribute(
      "d",
      "M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v-5.8c0 41.5 17.2 81.2 47.6 109.5z"
    );

    likeIconSvg.appendChild(likeIconPath);

    doubleTapArea.appendChild(likeIconSvg);

    const postImage = document.createElement("img");
    postImage.src = "public/images/post.webp";
    postImage.id = "post-picture";
    postImage.classList.add("min-w-full", "rounded-md");

    relativeContainer.appendChild(doubleTapArea);
    relativeContainer.appendChild(postImage);

    mainContainer.appendChild(relativeContainer);
    mainContainer.appendChild(mainDiv);

    return mainContainer;
  };

  static #getCommentBox = () => {
    const commentList = document.createElement("ul");
    commentList.id = "comment-list";

    const comment = this.createComment({
      commenterUsername: "vatsal_1133",
      commentText: "This is the comment guys",
      index: 9,
    });

    commentList.appendChild(comment);
    return commentList;
  };
}

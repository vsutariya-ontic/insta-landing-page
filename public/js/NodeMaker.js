export default class NodeMaker {
  static createSuggestedUser = (props) => {
    const { username, mutualFollowersCount, index } = props;
    // Create the outermost div element
    const newSuggestion = document.createElement("div");
    newSuggestion.id = "suggestion-demo";
    newSuggestion.classList.add(
      "flex",
      "justify-between",
      "items-center",
      "mt-2",
      "px-4"
    );
    newSuggestion.setAttribute("data-key", "2");

    // Create the first inner div for the profile information
    const profileInfoDiv = document.createElement("div");
    profileInfoDiv.classList.add("flex", "items-center");

    // Create the image element
    const profileImage = document.createElement("img");
    profileImage.src = "public/images/profile-pic.webp";
    profileImage.classList.add("max-w-16", "rounded-full");
    profileImage.style.marginTop = "4px";
    profileImage.style.maxWidth = "3.6rem";

    // Create the second inner div for text information
    const textInfoDiv = document.createElement("div");
    textInfoDiv.classList.add("text-sm", "items-center", "ml-4");

    // Create the first paragraph for the username
    const usernameParagraph = document.createElement("p");
    usernameParagraph.classList.add("font-bold");
    usernameParagraph.id = "username";
    usernameParagraph.textContent = username;

    // Create the second paragraph for mutual followers
    const mutualFollowersParagraph = document.createElement("p");
    mutualFollowersParagraph.classList.add("text-gray-400", "text-xs");
    mutualFollowersParagraph.id = "mutual-followers";
    mutualFollowersParagraph.textContent = `${mutualFollowersCount} mutual followers`;

    // Append image and text elements to profile information div
    profileInfoDiv.appendChild(profileImage);
    profileInfoDiv.appendChild(textInfoDiv);

    // Append paragraphs to text information div
    textInfoDiv.appendChild(usernameParagraph);
    textInfoDiv.appendChild(mutualFollowersParagraph);

    // Create the second div for the follow button
    const followButtonDiv = document.createElement("div");

    // Create the button element
    const followButton = document.createElement("button");
    followButton.id = "follow-button";

    // Create the paragraph inside the button
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

    // Append the paragraph to the button
    followButton.appendChild(followButtonText);

    // Append the two inner divs and the button to the outermost div
    newSuggestion.appendChild(profileInfoDiv);
    newSuggestion.appendChild(followButtonDiv);
    followButtonDiv.appendChild(followButton);

    // Append the created structure to the document or a specific parent element
    newSuggestion.dataset.key = `${index}`;
    return newSuggestion;
  };

  static createStory = (props) => {
    const { username, index } = props;

    // Create the outermost div element
    const newStory = document.createElement("div");
    newStory.id = "story-item";

    // Create the button element
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

    // Create the image element inside the button
    const imageElement = document.createElement("img");
    imageElement.src = "public/images/profile-pic.webp";
    imageElement.classList.add("max-w-16", "rounded-full");
    imageElement.style.marginTop = "4px";
    imageElement.style.maxWidth = "3.6rem";

    // Append the image element to the button
    buttonElement.appendChild(imageElement);

    // Create the paragraph element
    const usernameParagraph = document.createElement("p");
    usernameParagraph.classList.add("text-xs", "mt-2");
    usernameParagraph.id = "username";
    usernameParagraph.textContent = username;

    // Append the button and paragraph to the outermost div
    newStory.appendChild(buttonElement);
    newStory.appendChild(usernameParagraph);
    newStory.dataset.key = index;
    // Append the created structure to the document or a specific parent element
    return newStory;
  };

  static getPostTopBar = (props) => {
    const { username, timeSincePosted } = props;
    // Create the parent div with flex container
    const postTopBar = document.createElement("div");
    postTopBar.classList.add("justify-between", "flex");

    // Create the left side with user information
    const userInformationDiv = document.createElement("div");
    userInformationDiv.classList.add("flex");

    // Create profile image
    const profileImage = document.createElement("img");
    profileImage.src = "public/images/profile-pic.webp";
    profileImage.classList.add("min-w-7", "max-w-7", "rounded-full", "mt-1");

    // Create username button
    const usernameButton = document.createElement("button");
    usernameButton.classList.add(
      "text-[0.9rem]",
      "font-bold",
      "mt-1",
      "ml-3",
      "hover:underline"
    );

    // Create username paragraph
    const usernameParagraph = document.createElement("p");
    usernameParagraph.id = "username";
    usernameParagraph.textContent = username;

    // Create verified badge
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

    // Create time since posted paragraph
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

    // Append elements to the left side
    usernameButton.appendChild(usernameParagraph);
    userInformationDiv.appendChild(profileImage);
    userInformationDiv.appendChild(usernameButton);
    userInformationDiv.appendChild(verifiedBadge);
    userInformationDiv.appendChild(timeSincePostedParagraph);

    // Create the right side with post options button
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

    // Append the left and right sides to the flex container
    postTopBar.appendChild(userInformationDiv);
    postTopBar.appendChild(postOptionsButtonDiv);

    // Append the created structure to the document or a specific parent element
    return postTopBar;
  };

  static getPostBottomSection = (props) => {
    const mainDiv = document.createElement("div");

    // Create the first child div with class "flex mt-5 space-x-2 justify-start"
    const firstChildDiv = document.createElement("div");
    firstChildDiv.classList.add("flex", "mt-5", "space-x-2", "justify-start");
    firstChildDiv.id = "test-this";
    const likeButton = this.getButtons.like();
    const commentButton = this.getButtons.comment();
    const shareButton = this.getButtons.share();
    firstChildDiv.appendChild(likeButton);
    firstChildDiv.appendChild(commentButton);
    firstChildDiv.appendChild(shareButton);
    // Create the second child div with class "mt-3"
    const secondChildDiv = document.createElement("div");
    secondChildDiv.classList.add("mt-3");

    // Create the first inner div with id "like-count"
    const likeCountDiv = document.createElement("div");
    likeCountDiv.id = "like-count";
    likeCountDiv.textContent = "777k likes";

    // Create the second inner div with class "flex space-x-2"
    const secondInnerDiv = document.createElement("div");
    secondInnerDiv.classList.add("flex", "space-x-2");

    // Create the paragraph with class "font-semibold" and id "username"
    const usernameParagraph = document.createElement("p");
    usernameParagraph.classList.add("font-semibold");
    usernameParagraph.id = "username";
    usernameParagraph.textContent = "vkohli_09";

    // Create the paragraph with id "caption"
    const captionParagraph = document.createElement("p");
    captionParagraph.id = "caption";
    captionParagraph.textContent = "Here comes the caption!😁😁";

    // Append username and caption paragraphs to the second inner div
    secondInnerDiv.appendChild(usernameParagraph);
    secondInnerDiv.appendChild(captionParagraph);

    // Create the third inner div with class "text-gray-500"
    const thirdInnerDiv = document.createElement("div");
    thirdInnerDiv.classList.add("text-gray-500");

    // Create the button for viewing comments with id "view-comments"
    const viewCommentsButton = document.createElement("button");
    viewCommentsButton.id = "view-comments";

    // Create the paragraph inside the button with class "hover:underline" and id "comment-count"
    const viewCommentsParagraph = document.createElement("p");
    viewCommentsParagraph.classList.add("hover:underline");
    viewCommentsParagraph.id = "comment-count";
    viewCommentsParagraph.textContent = "View all 578 comments";

    // Create the button for hiding comments with id "hide-comments" and class "hidden"
    const hideCommentsButton = document.createElement("button");
    hideCommentsButton.id = "hide-comments";
    hideCommentsButton.classList.add("hidden");

    // Create the paragraph inside the button with class "hover:underline" and id "comment-count"
    const hideCommentsParagraph = document.createElement("p");
    hideCommentsParagraph.classList.add("hover:underline");
    hideCommentsParagraph.id = "comment-count";
    hideCommentsParagraph.textContent = "Hide the comments";

    // Create line break element
    const lineBreak = document.createElement("br");

    // Create the fourth inner div with class "flex justify-between space-x-5 space-y-2 mb-2 items-center"
    const fourthInnerDiv = document.createElement("div");
    fourthInnerDiv.classList.add(
      "flex",
      "justify-between",
      "space-x-5",
      "space-y-2",
      "mb-2",
      "items-center"
    );

    // Create the input field for adding comments with type "text" and id "add-comment"
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

    // Create the button for posting comments with id "post-comment" and class "text-blue-600"
    const postCommentButton = document.createElement("button");
    postCommentButton.id = "post-comment";
    postCommentButton.classList.add("text-blue-600");
    postCommentButton.textContent = "Post";

    // Append the input field and button to the fourth inner div
    fourthInnerDiv.appendChild(addCommentInput);
    fourthInnerDiv.appendChild(postCommentButton);

    // Create the fifth inner div with id "comment-box" and class "hidden max-h-32 overflow-auto"
    const fifthInnerDiv = document.createElement("div");
    fifthInnerDiv.id = "comment-box";
    fifthInnerDiv.classList.add("hidden", "max-h-32", "overflow-auto");

    // Append the comment list to the fifth inner div
    const commentList = this.getCommentBox();
    fifthInnerDiv.appendChild(commentList);

    // Append all inner divs and elements to the second child div
    secondChildDiv.appendChild(likeCountDiv);
    secondChildDiv.appendChild(secondInnerDiv);
    secondChildDiv.appendChild(thirdInnerDiv);
    secondChildDiv.appendChild(viewCommentsButton);
    secondChildDiv.appendChild(hideCommentsButton);
    secondChildDiv.appendChild(lineBreak);
    secondChildDiv.appendChild(fourthInnerDiv);
    secondChildDiv.appendChild(fifthInnerDiv);

    // Append the first and second child divs to the main div
    mainDiv.appendChild(firstChildDiv);
    mainDiv.appendChild(secondChildDiv);

    // Append the main div to the document body or any other parent element
    // document.body.appendChild(mainDiv);
    // Create the main parent div with class "mt-3"
    var mainContainer = document.createElement("div");
    mainContainer.classList.add("mt-3");

    // Create the first child div with class "relative"
    var relativeContainer = document.createElement("div");
    relativeContainer.classList.add("relative");

    // Create the second child div with id "double-tap-area" and class "absolute flex justify-center items-center w-full h-full select-none"
    var doubleTapArea = document.createElement("div");
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

    // Create the svg element with xmlns, id "big-like-icon", class "opacity-0 transition duration-1000", height, width, fill, and viewBox attributes
    var likeIconSvg = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "svg"
    );
    likeIconSvg.id = "big-like-icon";
    likeIconSvg.classList.add("opacity-0", "transition", "duration-1000");
    likeIconSvg.setAttribute("height", "26");
    likeIconSvg.setAttribute("width", "26");
    likeIconSvg.setAttribute("fill", "red");
    likeIconSvg.setAttribute("viewBox", "0 0 512 512");

    // Create the path element with d attribute
    var likeIconPath = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "path"
    );
    likeIconPath.setAttribute(
      "d",
      "M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v-5.8c0 41.5 17.2 81.2 47.6 109.5z"
    );

    // Append the path element to the svg element
    likeIconSvg.appendChild(likeIconPath);

    // Append the svg element to the doubleTapArea
    doubleTapArea.appendChild(likeIconSvg);

    // Create the third child element with tag "img", src attribute, id "post-picture", class "min-w-full rounded-md"
    var postImage = document.createElement("img");
    postImage.src = "public/images/post.webp";
    postImage.id = "post-picture";
    postImage.classList.add("min-w-full", "rounded-md");

    // Append the doubleTapArea and postImage to the relativeContainer
    relativeContainer.appendChild(doubleTapArea);
    relativeContainer.appendChild(postImage);

    // Append the relativeContainer to the mainContainer
    mainContainer.appendChild(relativeContainer);
    mainContainer.appendChild(mainDiv);
    // Append the mainContainer to the document body or any other parent element

    return mainContainer;
  };

  static getButtons = {
    comment: () => {
      const commentButton = document.createElement("button");
      commentButton.id = "comment-icon";

      const commentIcon = document.createElement("svg");
      commentIcon.setAttribute("aria-label", "Comment");
      commentIcon.setAttribute("xmlns", "http://www.w3.org/2000/svg");
      commentIcon.classList.add("x1lliihq", "x1n2onr6", "x5n08af");
      commentIcon.setAttribute("fill", "currentColor");
      commentIcon.setAttribute("height", "24");
      commentIcon.setAttribute("role", "img");
      commentIcon.setAttribute("viewBox", "0 0 24 24");
      commentIcon.setAttribute("width", "24");

      const commentIconPath = document.createElement("path");
      commentIconPath.setAttribute(
        "d",
        "M20.656 17.008a9.993 9.993 0 1 0-3.59 3.615L22 22Z"
      );
      commentIconPath.setAttribute("fill", "none");
      commentIconPath.setAttribute("stroke", "currentColor");
      commentIconPath.setAttribute("stroke-linejoin", "round");
      commentIconPath.setAttribute("stroke-width", "2");
      commentIcon.appendChild(commentIconPath);

      commentButton.appendChild(commentIcon);
      return commentButton;
    },
    like: () => {
      const likeButton = document.createElement("button");
      likeButton.id = "like-button";
      likeButton.classList.add("max-w-fit");

      const likedIcon = document.createElement("svg");
      likedIcon.setAttribute("xmlns", "http://www.w3.org/2000/svg");
      likedIcon.id = "liked";
      likedIcon.classList.add(
        "opacity-100",
        "hidden",
        "transition",
        "duration-1000"
      );
      likedIcon.setAttribute("height", "26");
      likedIcon.setAttribute("width", "26");
      likedIcon.setAttribute("fill", "red");
      likedIcon.setAttribute("viewBox", "0 0 500 500");

      const likedIconPath = document.createElement("path");
      likedIconPath.setAttribute(
        "d",
        "M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"
      );
      likedIcon.appendChild(likedIconPath);

      const notLikedIcon = document.createElement("svg");
      notLikedIcon.setAttribute("xmlns", "http://www.w3.org/2000/svg");
      notLikedIcon.id = "not-liked";
      notLikedIcon.classList.add("transition", "duration-1000");
      notLikedIcon.setAttribute("height", "26");
      notLikedIcon.setAttribute("width", "26");
      notLikedIcon.setAttribute("fill", "white");
      notLikedIcon.setAttribute("viewBox", "0 0 500 500");

      const notLikedIconPath = document.createElement("path");
      notLikedIconPath.setAttribute(
        "d",
        "M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8v-3.3c0-70.4 50-130.8 119.2-144C158.6 36.5 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5v3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20c0 0-.1-.1-.1-.1c0 0 0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5v3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2v-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z"
      );
      notLikedIcon.appendChild(notLikedIconPath);

      likeButton.appendChild(likedIcon);
      likeButton.appendChild(notLikedIcon);
      return likeButton;
    },
    share: () => {
      const shareButton = document.createElement("button");

      const shareIcon = document.createElement("svg");
      shareIcon.setAttribute("aria-label", "Share Post");
      shareIcon.setAttribute("xmlns", "http://www.w3.org/2000/svg");
      shareIcon.classList.add("x1lliihq", "x1n2onr6", "x5n08af");
      shareIcon.setAttribute("fill", "currentColor");
      shareIcon.setAttribute("height", "24");
      shareIcon.setAttribute("role", "img");
      shareIcon.setAttribute("viewBox", "0 0 24 24");
      shareIcon.setAttribute("width", "24");

      const shareIconLine = document.createElement("line");
      shareIconLine.setAttribute("fill", "none");
      shareIconLine.setAttribute("stroke", "currentColor");
      shareIconLine.setAttribute("stroke-linejoin", "round");
      shareIconLine.setAttribute("stroke-width", "2");
      shareIconLine.setAttribute("x1", "22");
      shareIconLine.setAttribute("x2", "9.218");
      shareIconLine.setAttribute("y1", "3");
      shareIconLine.setAttribute("y2", "10.083");
      shareIcon.appendChild(shareIconLine);

      const shareIconPolygon = document.createElement("polygon");
      shareIconPolygon.setAttribute("fill", "none");
      shareIconPolygon.setAttribute(
        "points",
        "11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334"
      );
      shareIconPolygon.setAttribute("stroke", "currentColor");
      shareIconPolygon.setAttribute("stroke-linejoin", "round");
      shareIconPolygon.setAttribute("stroke-width", "2");
      shareIcon.appendChild(shareIconPolygon);

      shareButton.appendChild(shareIcon);
    },
  };
  static createComment = (props) => {
    const { commenterUsername, commentText, index } = props;

    const comment = document.createElement("li");
    comment.classList.add(
      "text-[0.85rem]",
      "items-center",
      "space-x-2",
      "mt-2",
      "hidden"
    );
    comment.id = "comment-demo";

    // Create the image for the profile picture
    const profilePicImage = document.createElement("img");
    profilePicImage.src = "public/images/profile-pic.webp";
    profilePicImage.classList.add("min-w-7", "max-w-7", "rounded-full");

    // Create the span with class "font-bold" and id "username"
    const usernameSpan = document.createElement("span");
    usernameSpan.classList.add("font-bold");
    usernameSpan.id = "username";
    usernameSpan.textContent = commenterUsername;

    // Create the span with id "the-comment"
    const commentSpan = document.createElement("span");
    commentSpan.id = "the-comment";
    commentSpan.textContent = commentText;

    // Append the image, username span, and comment span to the comment demo item
    comment.appendChild(profilePicImage);
    comment.appendChild(usernameSpan);
    comment.appendChild(commentSpan);
    comment.dataset.key = index;
    return comment;
  };

  static getCommentBox = () => {
    const commentList = document.createElement("ul");
    commentList.id = "comment-list";

    const comment = this.createComment({
      commenterUsername: "vatsal_1133",
      commentText: "This is the comment guys",
      index: 9,
    });

    // Append the comment demo item to the comment list
    commentList.appendChild(comment);
    return commentList;
  };

  static createPost = (props) => {
    var post = document.createElement("div");
    post.id = "post-demo";
    post.classList.add("hidden", "border-b-[0.5px]", "border-gray-600");

    const topBar = this.getPostTopBar();
    const bottomSection = this.getPostBottomSection();
    post.appendChild(topBar);
    post.appendChild(bottomSection);
  };
}

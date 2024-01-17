import { fetchSuggestedUserList } from "/public/js/Model/UserModel.js";
import { NodeMaker } from "/public/js/View/NodeMaker.js";

const suggestedUserList = await fetchSuggestedUserList();
const suggestionList = document.getElementById("suggestion-list");

export const renderSuggestedUsers = (suggestions) => {
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
};
renderSuggestedUsers(suggestedUserList);

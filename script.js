const doc = document.getElementsByTagName('body');

// const suggestionObject = document.getElementById('suggestion-demo');

// const suggestionList = document.getElementById('suggestion-list');

// suggestionList.appendChild(suggestionObject);

// document.addEventListener('DOMContentLoaded', function() {
//     const suggestionObject = document.getElementById('suggestion-demo');
//     const suggestionList = document.getElementById('suggestion-list');
//     suggestionList.appendChild();
// });

// <ul id="list-id">
//     <li id="item-id">First item</li>
// </ul>

// const list = document.getElementById('list-id');
// const item = document.getElementById('item-id');
// const newItem = item.cloneNode(true);
// newItem.textContent = 'Second Item';
// list.appendChild(newItem);
// console.log(list);
// console.log(item);
// list.append(item);
// console.log('added')

const test = document.getElementById('test');
test.classList.forEach(item=>{
    console.log(item);
})
// console.log(test.classList);÷


import { generateStoryData, generateSuggestedUsers } from "/helper-functions.js";
const suggestedUserList = generateSuggestedUsers();
const storyUserList = generateStoryData();

const loadSuggestions = (toBeRenderedList) => {
    const suggestionList = document.getElementById('suggestion-list');
    const suggestionDemo = document.getElementById('suggestion-demo');

    toBeRenderedList.forEach((suggestedUser) => {
        const newSuggestedUser = suggestionDemo.cloneNode(true);
        const userContent = newSuggestedUser.querySelector('#username');
        const mutualFollowers = newSuggestedUser.querySelector('#mutual-followers');
        userContent.textContent = suggestedUser.username;
        mutualFollowers.textContent = `${suggestedUser.mutualFollowers} mutual followers`;
        suggestionList.appendChild(newSuggestedUser);
    });
    suggestionDemo.remove();
};

const loadStories = (toBeRenderedStories) => {
    const storyList = document.getElementById('story-list');
    const storyDemo = document.getElementById('story-demo');
    
    toBeRenderedStories.forEach(element => {
        const newStoryItem = storyDemo.cloneNode(true);
        const usernameContent = newStoryItem.querySelector('#username');
        usernameContent.textContent = element.username;
        storyList.appendChild(newStoryItem);
    });
    storyDemo.remove();
};

loadSuggestions(suggestedUserList);
loadStories(storyUserList);
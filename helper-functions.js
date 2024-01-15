const suggestedUserList = [
    {
        username: "vicky_323",
        mutualFollowers: 24
    },
    {
        username: "vijay_777",
        mutualFollowers: 17
    },
    {
        username: "alex_123",
        mutualFollowers: 10
    },
    {
        username: "sara_456",
        mutualFollowers: 32
    },
    {
        username: "lisa_789",
        mutualFollowers: 5
    },
];
const storyUserList = [
    {
        username: 'john_doe123',
        name: 'John Doe'
    },
    {
        username: 'emily_789',
        name: 'Emily Johnson'
    },
    {
        username: 'alex_456',
        name: 'Alex Smith'
    },
    {
        username: 'sara_654',
        name: 'Sara Davis'
    },
    {
        username: 'mike_1122',
        name: 'Mike Thompson'
    },
    {
        username: 'lisa_321',
        name: 'Lisa Williams'
    },
    {
        username: 'chris_987',
        name: 'Chris Brown'
    },
    {
        username: 'olivia_456',
        name: 'Olivia White'
    },
    {
        username: 'david_789',
        name: 'David Robinson'
    },
    {
        username: 'julia_456',
        name: 'Julia Turner'
    },
    {
        username: 'ryan_321',
        name: 'Ryan Johnson'
    },
    {
        username: 'nancy_789',
        name: 'Nancy Miller'
    },
    {
        username: 'sam_1122',
        name: 'Samuel Davis'
    },
    {
        username: 'amy_321',
        name: 'Amy Clark'
    },
    {
        username: 'peter_987',
        name: 'Peter Walker'
    },
    {
        username: 'mia_456',
        name: 'Mia Turner'
    },
    {
        username: 'eric_789',
        name: 'Eric Anderson'
    },
    {
        username: 'grace_1122',
        name: 'Grace White'
    },
    {
        username: 'jason_321',
        name: 'Jason Carter'
    },
];

const postList = [
    {
        username: "vkohli_89",
        timeSincePosted: "3 minutes ago",
        likeCount: 78,
        commentCount: 21,
        caption: "Throwback to an unforgettable vacation. 🌊🏖️"
    },
    {
        username: "john_doe123",
        timeSincePosted: "2 hours ago",
        likeCount: 32,
        commentCount: 15,
        caption: "Enjoying a beautiful day at the beach! 🌴☀️"
    },
    {
        username: "sara_456",
        timeSincePosted: "1 day ago",
        likeCount: 45,
        commentCount: 28,
        caption: "Exploring new places and making memories. 🗺️"
    },
    {
        username: "mike_1122",
        timeSincePosted: "3 days ago",
        likeCount: 18,
        commentCount: 10,
        caption: "Chasing sunsets. 🌅 #NatureLover"
    },
    {
        username: "lisa_321",
        timeSincePosted: "4 days ago",
        likeCount: 27,
        commentCount: 12,
        caption: "Cooking up a storm in the kitchen! 🍳🔥"
    },
    {
        username: "chris_987",
        timeSincePosted: "5 days ago",
        likeCount: 21,
        commentCount: 8,
        caption: "Morning run to kickstart the day. 🏃‍♂️ #FitnessGoals"
    },
    {
        username: "olivia_456",
        timeSincePosted: "1 week ago",
        likeCount: 36,
        commentCount: 18,
        caption: "Lazy Sundays and good books. 📚☕"
    },
    {
        username: "david_789",
        timeSincePosted: "2 weeks ago",
        likeCount: 15,
        commentCount: 6,
        caption: "Guitar sessions by the fireplace. 🎸🔥"
    },
    {
        username: "julia_456",
        timeSincePosted: "3 weeks ago",
        likeCount: 23,
        commentCount: 10,
        caption: "Road trip adventures! 🚗🏞️"
    },
    {
        username: "ryan_321",
        timeSincePosted: "1 month ago",
        likeCount: 42,
        commentCount: 25,
        caption: "Throwback to an unforgettable vacation. 🌊🏖️"
    },
    {
        username: "nancy_789",
        timeSincePosted: "2 months ago",
        likeCount: 30,
        commentCount: 14,
        caption: "Artistic vibes in the city. 🎨🏙️"
    },
];

export const generateStoryData = async () => {
    // run some api calls
    return storyUserList;
};

export const generateSuggestedUsers = async () => {
    // run some api calls
    return suggestedUserList;
};

export const generatePostList = async () => {
    // run api calls and fetch posts
    return postList;
}
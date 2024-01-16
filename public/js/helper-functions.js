const suggestedUserList = [
  {
    username: "vicky_323",
    mutualFollowersCount: 24,
  },
  {
    username: "vijay_777",
    mutualFollowersCount: 17,
  },
  {
    username: "alex_123",
    mutualFollowersCount: 10,
  },
  {
    username: "sara_456",
    mutualFollowersCount: 32,
  },
  {
    username: "lisa_789",
    mutualFollowersCount: 5,
  },
];
const storyUserList = [
  {
    username: "john_doe123",
    name: "John Doe",
  },
  {
    username: "emily_789",
    name: "Emily Johnson",
  },
  {
    username: "alex_456",
    name: "Alex Smith",
  },
  {
    username: "sara_654",
    name: "Sara Davis",
  },
  {
    username: "mike_1122",
    name: "Mike Thompson",
  },
  {
    username: "lisa_321",
    name: "Lisa Williams",
  },
  {
    username: "chris_987",
    name: "Chris Brown",
  },
  {
    username: "olivia_456",
    name: "Olivia White",
  },
  {
    username: "david_789",
    name: "David Robinson",
  },
  {
    username: "julia_456",
    name: "Julia Turner",
  },
  {
    username: "ryan_321",
    name: "Ryan Johnson",
  },
  {
    username: "nancy_789",
    name: "Nancy Miller",
  },
  {
    username: "sam_1122",
    name: "Samuel Davis",
  },
  {
    username: "amy_321",
    name: "Amy Clark",
  },
  {
    username: "peter_987",
    name: "Peter Walker",
  },
  {
    username: "mia_456",
    name: "Mia Turner",
  },
  {
    username: "eric_789",
    name: "Eric Anderson",
  },
  {
    username: "grace_1122",
    name: "Grace White",
  },
  {
    username: "jason_321",
    name: "Jason Carter",
  },
];

const posts = [
  {
    postID: "1eg26g8",
    username: "name_4218",
    timeSincePosted: "3 minutes ago",
    imageURL: "",
    caption:
      "Enjoying a peaceful morning in the garden, surrounded by the beauty of nature. #MorningBliss",
    likeCount: 92,
    isLiked: false,
    isReported: false,
  },
  {
    postID: "2ab34cd",
    username: "adventure_seeker",
    timeSincePosted: "10 minutes ago",
    imageURL: "https://example.com/image1.jpg",
    caption:
      "Embarking on a thrilling mountain hike, where every step is a step closer to conquering new heights. #AdventureAwaits",
    likeCount: 75,
    isLiked: true,
    isReported: false,
  },
  {
    postID: "3cd56ef",
    username: "foodie_delight",
    timeSincePosted: "20 minutes ago",
    imageURL: "https://example.com/image2.jpg",
    caption:
      "Indulging in a culinary masterpiece – homemade chocolate cake with a sprinkle of love. #BakingJoy",
    likeCount: 120,
    isLiked: false,
    isReported: true,
  },
  {
    postID: "4gh78ij",
    username: "workout_warrior",
    timeSincePosted: "30 minutes ago",
    imageURL: "https://example.com/image3.jpg",
    caption:
      "Pushing the limits in the gym and embracing the burn. Fitness is not just a goal; it's a lifestyle. #FitLife",
    likeCount: 50,
    isLiked: true,
    isReported: false,
  },
  {
    postID: "5kl90mn",
    username: "artsy_soul",
    timeSincePosted: "40 minutes ago",
    imageURL: "https://example.com/image4.jpg",
    caption:
      "Diving into the world of colors and creativity, where imagination knows no bounds. #ArtisticExpression",
    likeCount: 80,
    isLiked: false,
    isReported: false,
  },
  {
    postID: "6op12qr",
    username: "tech_enthusiast",
    timeSincePosted: "50 minutes ago",
    imageURL: "https://example.com/image5.jpg",
    caption:
      "Unboxing the latest tech gadget and exploring its futuristic features. Geek mode: activated! #TechJunkie",
    likeCount: 110,
    isLiked: true,
    isReported: true,
  },
  {
    postID: "7st34uv",
    username: "music_melody",
    timeSincePosted: "1 hour ago",
    imageURL: "https://example.com/image6.jpg",
    caption:
      "Immersed in the soulful melodies that resonate through the heart. Music is the universal language of emotions. 🎶 #MusicalJourney",
    likeCount: 95,
    isLiked: false,
    isReported: false,
  },
  {
    postID: "8wx56yz",
    username: "bookworm_reader",
    timeSincePosted: "1 hour ago",
    imageURL: "https://example.com/image7.jpg",
    caption:
      "Lost in the enchanting world of words, where every page turns into a new adventure. 📚 #BookLover",
    likeCount: 65,
    isLiked: true,
    isReported: false,
  },
  {
    postID: "9ab78cd",
    username: "travel_explorer",
    timeSincePosted: "2 hours ago",
    imageURL: "https://example.com/image8.jpg",
    caption:
      "Discovering hidden gems in a foreign land, capturing moments that become memories to last a lifetime. #Wanderlust",
    likeCount: 75,
    isLiked: false,
    isReported: true,
  },
  {
    postID: "0ef12gh",
    username: "fashionista_style",
    timeSincePosted: "3 hours ago",
    imageURL: "https://example.com/image9.jpg",
    caption:
      "Strutting down the fashion lane, embracing trends, and creating a style statement that speaks volumes. 👗🕶️ #FashionForward",
    likeCount: 85,
    isLiked: true,
    isReported: false,
  },
];

const comments = [
  {
    postID: "1eg26g8",
    comments: [
      {
        commenterUsername: "vatsal_1829",
        commentText:
          "Here comes the comment text. Love the serene atmosphere in the photo!",
      },
      {
        commenterUsername: "commenter2",
        commentText:
          "Beautiful capture! The reflection on the lake is mesmerizing.",
      },
      {
        commenterUsername: "commenter3",
        commentText: "Nature's artwork at its finest! Thanks for sharing.",
      },
    ],
  },
  {
    postID: "2ab34cd",
    comments: [
      {
        commenterUsername: "commenter4",
        commentText:
          "Fantastic shot! The city lights create a magical ambiance.",
      },
      {
        commenterUsername: "commenter5",
        commentText:
          "I can feel the energy of the city through your photo. Well done!",
      },
      {
        commenterUsername: "commenter6",
        commentText:
          "Cityscapes always have a unique charm. Great composition!",
      },
    ],
  },
  {
    postID: "3cd56ef",
    comments: [
      {
        commenterUsername: "commenter7",
        commentText: "That chocolate cake looks divine! Recipe, please?",
      },
      {
        commenterUsername: "commenter8",
        commentText:
          "Homemade treats are the best! Looks like a slice of heaven.",
      },
      {
        commenterUsername: "commenter9",
        commentText:
          "I can almost smell the sweetness through the screen. Yum!",
      },
    ],
  },
  {
    postID: "4gh78ij",
    comments: [
      {
        commenterUsername: "commenter10",
        commentText:
          "Pushing the limits and embracing the burn. That's the spirit!",
      },
      {
        commenterUsername: "commenter11",
        commentText: "Fitness goals! Keep inspiring us with your dedication.",
      },
      {
        commenterUsername: "commenter12",
        commentText: "Working out is a journey, not a destination. Keep it up!",
      },
    ],
  },
  {
    postID: "5kl90mn",
    comments: [
      {
        commenterUsername: "commenter13",
        commentText: "Your artistic expression is truly captivating. Love it!",
      },
      {
        commenterUsername: "commenter14",
        commentText: "Colors speak louder than words. Beautiful artwork!",
      },
      {
        commenterUsername: "commenter15",
        commentText: "Art that evokes emotions. Well done!",
      },
    ],
  },
  {
    postID: "6op12qr",
    comments: [
      {
        commenterUsername: "commenter16",
        commentText:
          "Geek mode activated! Which tech gadget are you exploring?",
      },
      {
        commenterUsername: "commenter17",
        commentText: "Tech enthusiasts unite! What's your latest gadget find?",
      },
      {
        commenterUsername: "commenter18",
        commentText:
          "Living in the future with those futuristic features. Cool!",
      },
    ],
  },
  {
    postID: "7st34uv",
    comments: [
      {
        commenterUsername: "commenter19",
        commentText:
          "Your musical journey is pure bliss. What's on your playlist?",
      },
      {
        commenterUsername: "commenter20",
        commentText: "Melodies that touch the soul. Keep sharing the magic!",
      },
      {
        commenterUsername: "commenter21",
        commentText:
          "Lost in the music, found in the moment. Beautiful capture!",
      },
    ],
  },
  {
    postID: "8wx56yz",
    comments: [
      {
        commenterUsername: "commenter22",
        commentText:
          "Diving into a good book is always a rewarding adventure. What are you currently reading?",
      },
      {
        commenterUsername: "commenter23",
        commentText: "Books open doors to new worlds. Love your reading space!",
      },
      {
        commenterUsername: "commenter24",
        commentText: "Bookworm goals achieved! Keep turning those pages.",
      },
    ],
  },
  {
    postID: "9ab78cd",
    comments: [
      {
        commenterUsername: "commenter25",
        commentText:
          "Wanderlust at its finest! Which hidden gem did you discover?",
      },
      {
        commenterUsername: "commenter26",
        commentText:
          "Traveling is the only thing that makes you richer. Safe travels!",
      },
      {
        commenterUsername: "commenter27",
        commentText:
          "Exploring new places is an adventure that never gets old. Enjoy!",
      },
    ],
  },
  {
    postID: "0ef12gh",
    comments: [
      {
        commenterUsername: "commenter28",
        commentText:
          "Fashion forward and fabulous! Where do you find your style inspiration?",
      },
      {
        commenterUsername: "commenter29",
        commentText:
          "Strutting down the fashion lane with confidence. Love your look!",
      },
      {
        commenterUsername: "commenter30",
        commentText: "Fashion is an expression of yourself. Keep slaying!",
      },
    ],
  },
];

const postList = [
  {
    username: "vkohli_89",
    timeSincePosted: "3 minutes ago",
    likeCount: 78,
    commentCount: 21,
    caption: "Throwback to an unforgettable vacation. 🌊🏖️",
    comments: [
      {
        username: "commenter",
        val: "The comment hihi,ffafa",
      },
      {
        username: "commenter",
        val: "The comment hihi,ffafa",
      },
      {
        username: "commenter",
        val: "The comment hihi,ffafa",
      },
      {
        username: "commenter",
        val: "The comment hihi,ffafa",
      },
      {
        username: "commenter",
        val: "The comment hihi,ffafa",
      },
      {
        username: "commenter",
        val: "The comment hihi,ffafa",
      },
      {
        username: "commenter",
        val: "The comment hihi,ffafa",
      },
    ],
  },
  {
    username: "john_doe123",
    timeSincePosted: "2 hours ago",
    likeCount: 32,
    commentCount: 15,
    caption: "Enjoying a beautiful day at the beach! 🌴☀️",
    comments: [
      {
        username: "commenter",
        val: "The comment hihi,ffafa",
      },
    ],
  },
  {
    username: "sara_456",
    timeSincePosted: "1 day ago",
    likeCount: 45,
    commentCount: 28,
    caption: "Exploring new places and making memories. 🗺️",
    comments: [
      {
        username: "commenter",
        val: "The comment hihi,ffafa",
      },
    ],
  },
  {
    username: "mike_1122",
    timeSincePosted: "3 days ago",
    likeCount: 18,
    commentCount: 10,
    caption: "Chasing sunsets. 🌅 #NatureLover",
    comments: [
      {
        username: "commenter",
        val: "The comment hihi,ffafa",
      },
    ],
  },
  {
    username: "lisa_321",
    timeSincePosted: "4 days ago",
    likeCount: 27,
    commentCount: 12,
    caption: "Cooking up a storm in the kitchen! 🍳🔥",
    comments: [],
  },
  {
    username: "chris_987",
    timeSincePosted: "5 days ago",
    likeCount: 21,
    commentCount: 8,
    caption: "Morning run to kickstart the day. 🏃‍♂️ #FitnessGoals",
    comments: [],
  },
  {
    username: "olivia_456",
    timeSincePosted: "1 week ago",
    likeCount: 36,
    commentCount: 18,
    caption: "Lazy Sundays and good books. 📚☕",
    comments: [],
  },
  {
    username: "david_789",
    timeSincePosted: "2 weeks ago",
    likeCount: 15,
    commentCount: 6,
    caption: "Guitar sessions by the fireplace. 🎸🔥",
    comments: [],
  },
  {
    username: "julia_456",
    timeSincePosted: "3 weeks ago",
    likeCount: 23,
    commentCount: 10,
    caption: "Road trip adventures! 🚗🏞️",
    comments: [],
  },
  {
    username: "ryan_321",
    timeSincePosted: "1 month ago",
    likeCount: 42,
    commentCount: 25,
    caption: "Throwback to an unforgettable vacation. 🌊🏖️",
    comments: [],
  },
  {
    username: "nancy_789",
    timeSincePosted: "2 months ago",
    likeCount: 30,
    commentCount: 14,
    caption: "Artistic vibes in the city. 🎨🏙️",
    comments: [],
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
};

export const addCommentToPost = (commenterUsername, index, comment) => {
  if (postList[index]) {
    postList[index].comments.unshift({
      username: commenterUsername,
      val: comment,
    });
    console.log("Comment added successfully!");
  }
};

export const reportPost = (postIndex) => {
  if (postList[postIndex]) {
    postList[postIndex].isReported = true;
  }
};

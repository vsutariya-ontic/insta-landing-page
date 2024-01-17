const posts = [
  {
    postID: "1eg26g8",
    username: "name_4218",
    timeSincePosted: "3 minutes ago",
    imageURL: "",
    caption:
      "Enjoying a peaceful morning in the garden, surrounded by the beauty of nature. #MorningBliss",
    likeCount: 92,
    commentCount: 3,
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
    commentCount: 3,
    isLiked: false,
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
    commentCount: 3,
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
    commentCount: 3,
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
    commentCount: 3,
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
    commentCount: 3,
    isLiked: false,
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
    commentCount: 3,
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
    commentCount: 3,
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
    commentCount: 3,
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
    commentCount: 3,
    isLiked: true,
    isReported: false,
  },
];

export const fetchPostList = async () => {
  // run api calls and fetch posts
  return posts;
};

export const reportPost = (postIndex) => {
  if (postList[postIndex]) {
    postList[postIndex].isReported = true;
  }
};

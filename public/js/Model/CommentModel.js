import { fetchPostList } from "/public/js/Model/PostModel.js";
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

export const fetchComments = async () => {
  // runn api calls
  return comments;
};

export const addCommentToPost = async (commenterUsername, postID, comment) => {
  const targetCommentObject = comments.find((item) => item.postID === postID);
  if (targetCommentObject) {
    targetCommentObject.comments.unshift({
      commenterUsername: commenterUsername,
      commentText: comment,
    });
    const posts = await fetchPostList();
    posts.find((item) => item.postID === postID).commentCount++;
  }
};

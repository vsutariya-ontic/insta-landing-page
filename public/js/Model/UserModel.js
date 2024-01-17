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

export const fetchSuggestedUserList = async () => {
  // run some api calls and do some logic to choose which users to show as suggestions
  return suggestedUserList;
};

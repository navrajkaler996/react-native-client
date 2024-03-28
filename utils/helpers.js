export const createNewDiscussionBody = (newDiscussion) => {
  let body = {
    operation: "add",
    payload: {
      discussion_id: 12,
      title: newDiscussion.title,
      description: newDiscussion.description,
      community: newDiscussion.community,
      comments: [],
      likes: 0,
      dislikes: 0,
    },
  };

  return body;
};

import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { COLORS } from "../utils/constants";
import Discussion from "./components/Discussion";

import CommentSection from "../components/CommentSection";

// const discussion = {
//   title: "Work permit help needed",
//   description:
//     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sed facilisis diam. Sed quis dolor at metus pharetra porttitor. Aliquamerat volutpat. Nulla ornare nunc vel felis dignissim, et sodales metus faucibus. Proin porttitor mi sed volutpat porttitor. Quisque sit amet mauris a odio porttitor congue.",
// };

const comments = [
  {
    name: "abc",
    text: "Lorem ipsum dolor sit amet",
    likes: 13,
    dislikes: 21,

    replies: [
      {
        name: "xyz",
        text: "Lorem ipsum dolor sit amet",
        likes: 9,
        dislikes: 1,
      },
      {
        name: "xyz",
        text: "Lorem ipsum dolor sit amet",
        likes: 10,
        dislikes: 2,
      },
      {
        name: "xyz",
        text: "Lorem ipsum dolor sit amet",
        likes: 3,
        dislikes: 1,
      },
    ],
  },
  {
    name: "abc",
    text: "Lorem ipsum dolor sit amet",
    likes: 13,
    dislikes: 21,

    replies: [
      {
        name: "xyz",
        text: "Lorem ipsum dolor sit amet",
        likes: 3,
        dislikes: 0,
      },
      {
        name: "xyz",
        text: "Lorem ipsum dolor sit amet",
        likes: 11,
        dislikes: 2,
      },
      {
        name: "xyz",
        text: "Lorem ipsum dolor sit amet",
        likes: 9,
        dislikes: 2,
      },
    ],
  },
];

const DiscussionOverviewScreen = ({ route }) => {
  const { discussion } = route.params;
  return (
    <View
      id="discussion-overview-container"
      style={discussionOverviewStyles["discussion-overview-container"]}>
      <Text
        id="discussion-overview-heading"
        style={discussionOverviewStyles["discussion-overview-heading"]}>
        Winnipeg
      </Text>

      <Discussion discussion={discussion} pressHandler={null} />
      <CommentSection comments={discussion.comments} />
    </View>
  );
};

const discussionOverviewStyles = StyleSheet.create({
  "discussion-overview-container": {
    flex: 1,
    backgroundColor: "#fff",
  },
  "discussion-overview-heading": {
    marginTop: 24,
    marginBottom: 12,
    fontSize: 26,
    letterSpacing: 1.5,
    backgroundColor: COLORS.primary,
    alignSelf: "center",
    paddingLeft: 12,
    paddingRight: 12,
    paddingBottom: 4,
    paddingTop: 4,
  },
  "discussion-overview-info": {
    alignSelf: "center",
  },
});

export default DiscussionOverviewScreen;

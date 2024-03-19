import React, { useState } from "react";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import Comment from "./Comment";

import { COLORS } from "../utils/constants";

//Create a comment section
const CommentSection = ({ comments }) => {
  const [viewReplies, setViewReplies] = useState({
    index: [],
  });

  const viewPressHandler = (i) => {
    let index = viewReplies.index;
    index.push(i);
    const view = {
      index: index,
    };

    setViewReplies(view);
  };

  const hidePressHandler = (i) => {
    let index = viewReplies.index;
    index.pop(i);
    const view = {
      index: index,
    };

    setViewReplies(view);
  };

  return (
    <ScrollView id="comment-section-container">
      {comments.map((comment, i) => {
        return (
          <View
            id="comment-section"
            style={commentSectionStyles["comment-section"]}>
            <Comment comment={comment} />

            {comment?.replies && !viewReplies.index?.includes(i) ? (
              <Pressable onPress={() => viewPressHandler(i)}>
                <Text
                  id="comment-view-replies"
                  style={commentSectionStyles["comment-view-replies"]}>
                  View replies...
                </Text>
              </Pressable>
            ) : (
              comment.replies.map((reply, i) => {
                return (
                  <View
                    id="comment-replies"
                    style={commentSectionStyles["comment-replies"]}
                    key={i}>
                    <Comment comment={reply} />
                  </View>
                );
              })
            )}
            {comment?.replies && viewReplies.index?.includes(i) && (
              <Pressable onPress={() => hidePressHandler(i)}>
                <Text
                  id="comment-view-replies"
                  style={commentSectionStyles["comment-view-replies"]}>
                  Hide replies...
                </Text>
              </Pressable>
            )}
            {/* {comment?.replies &&
              comment.replies.map((reply, i) => {
                return (
                  <View
                    id="comment-replies"
                    style={commentSectionStyles["comment-replies"]}>
                    <Comment comment={reply} />
                  </View>
                );
              })} */}
          </View>
        );
      })}

      {/* <Comment />
      <View
        id="comment-replies"
        style={commentSectionStyles["comment-replies"]}>
        <Comment />
      </View> */}
    </ScrollView>
  );
};

const commentSectionStyles = StyleSheet.create({
  "comment-section": {
    marginBottom: 10,
  },
  "comment-replies": {
    marginLeft: 36,
    marginTop: 10,
  },
  "comment-view-replies": {
    marginLeft: 36,
    marginTop: 10,
    marginBottom: 10,
    fontSize: 10,
    color: COLORS["text-gray-1"],
    fontWeight: "bold",
    letterSpacing: 0.2,
  },
});

export default CommentSection;

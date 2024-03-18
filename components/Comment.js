import React from "react";
import { StyleSheet, View, Text } from "react-native";

import { EvilIcons } from "@expo/vector-icons";
import { COLORS } from "../utils/constants";

const Comment = ({ comment }) => {
  return (
    <View id="comment-container" style={commentStyles["comment-container"]}>
      <View
        id="comment-user"
        style={commentStyles["comment-view-info-container"]}>
        <EvilIcons name="user" size={36} color="black" />
        <View id="comment-user-info">
          <Text
            id="comment-user-info-1"
            style={commentStyles["comment-view-info-1"]}>
            {comment.name}
          </Text>
          <Text
            id="comment-user-info-2"
            style={commentStyles["comment-view-info-2"]}>
            Student + Winnipeg
          </Text>
          <Text
            id="comment-user-info-3"
            style={commentStyles["comment-view-info-3"]}>
            2h ago
          </Text>
        </View>
      </View>
      <View>
        <Text
          id="comment-description"
          style={commentStyles["comment-description"]}>
          {comment.text}
        </Text>
      </View>
    </View>
  );
};

const commentStyles = StyleSheet.create({
  "comment-container": {},
  "comment-view-info-container": {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    marginBottom: 10,
  },
  "comment-view-info": {},
  "comment-view-info-1": { fontSize: 8 },
  "comment-view-info-2": {
    fontSize: 8,
    color: COLORS["text-gray-1"],
  },
  "comment-view-info-3": {
    fontSize: 8,
    color: COLORS["text-gray-1"],
  },
  "comment-description": {
    fontSize: 10,
    paddingLeft: 12,
    paddingRight: 12,
  },
});

export default Comment;

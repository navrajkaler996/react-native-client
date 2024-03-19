import React, { useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

import { AntDesign } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { COLORS } from "../utils/constants";

const Comment = ({ comment }) => {
  const [reactions, setReactions] = useState({
    likes: 0,
    dislikes: 0,
    liked: false,
    disliked: false,
  });

  useState(() => {
    const reactions = {
      likes: comment.likes,
      dislikes: comment.dislikes,
    };
    setReactions(reactions);
  }, []);

  const likePressHandler = () => {
    const likes = reactions.likes + 1;

    setReactions({
      ...reactions,
      likes: likes,
      dislikes: reactions.disliked
        ? reactions.dislikes + 1
        : reactions.dislikes,
      liked: true,
      disliked: false,
    });
  };

  const dislikePressHandler = () => {
    const dislikes = reactions.dislikes - 1;
    setReactions({
      ...reactions,
      likes: reactions.likes ? reactions.likes - 1 : reactions.likes,
      dislikes: dislikes,
      disliked: true,
      liked: false,
    });
  };

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
      <View
        id="comment-reactions-container"
        style={commentStyles["comment-reactions-container"]}>
        <View
          id="comment-reaction-like"
          style={commentStyles["comment-reaction-like"]}>
          <TouchableOpacity
            onPress={likePressHandler}
            disabled={reactions.liked}
            style={{ padding: "5px 20px" }}>
            <AntDesign
              name="like2"
              size={18}
              color="black"
              style={reactions.liked ? { color: COLORS.primary } : {}}
            />
          </TouchableOpacity>
          <Text style={{ fontSize: 12 }}>{reactions.likes} </Text>
        </View>
        <View style={commentStyles["comment-reaction-like"]}>
          <TouchableOpacity
            // onPress={dislikePressHandler}
            disabled={reactions.disliked}
            style={{ padding: "5px 20px" }}>
            <FontAwesome5 name="comment-alt" size={14} color="black" />
          </TouchableOpacity>
          <Text style={{ fontSize: 12 }}>21 </Text>
        </View>
        <View
          id="comment-reaction-dislike"
          style={commentStyles["comment-reaction-dislike"]}>
          <TouchableOpacity
            onPress={dislikePressHandler}
            disabled={reactions.disliked}
            style={{ padding: "5px 20px" }}>
            <AntDesign
              name="dislike2"
              size={18}
              color="black"
              style={reactions.disliked ? { color: COLORS.primary } : {}}
            />
          </TouchableOpacity>
          <Text style={{ fontSize: 12 }}>{reactions.dislikes} </Text>
        </View>
      </View>
    </View>
  );
};

const commentStyles = StyleSheet.create({
  "comment-container": {
    position: "relative",
    marginBottom: 6,
  },
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
    fontSize: 12,
    paddingLeft: 12,
    paddingRight: 12,
  },
  "comment-reactions-container": {
    flexDirection: "row",
    // alignItems: "center",
    alignItems: "baseline",

    marginTop: 8,
    marginLeft: 12,
    gap: 12,
  },
  "comment-reaction-like": {
    flexDirection: "row",
    alignItems: "baseline",
    gap: 5,
  },
  "comment-reaction-dislike": {
    flexDirection: "row",
    alignItems: "baseline",
    gap: 5,
  },
});

export default Comment;

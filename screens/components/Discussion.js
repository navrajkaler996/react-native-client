import { StyleSheet, View, Text } from "react-native";

import { EvilIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

import { COLORS } from "../../utils/constants";

//Displays a single discussion
const Discussion = ({ discussion }) => {
  return (
    <View
      id="discussion-view-container"
      style={DiscussionStyles["discussion-view-container"]}>
      <View
        id="discussion-view-container-1"
        style={DiscussionStyles["discussion-view-container-1"]}>
        <View
          id="discussion-view-info-container"
          style={DiscussionStyles["discussion-view-info-container"]}>
          <EvilIcons name="user" size={60} color="black" />
          <View id="discussion-view-info">
            <Text
              id="discussion-view-info-1"
              style={DiscussionStyles["discussion-view-info-1"]}>
              xyz
            </Text>
            <Text
              id="discussion-view-info-2"
              style={DiscussionStyles["discussion-view-info-2"]}>
              Student + Winnipeg
            </Text>
            <Text
              id="discussion-view-info-3"
              style={DiscussionStyles["discussion-view-info-3"]}>
              2h ago
            </Text>
          </View>
        </View>
        <View
          id="discussion-view-menu-container"
          style={DiscussionStyles["discussion-view-menu-container"]}>
          <Entypo
            name="dots-three-vertical"
            size={24}
            color="black"
            id="discussion-view-menu"
            style={DiscussionStyles["discussion-view-menu"]}
          />
        </View>
      </View>
      <View
        id="discussion-view-container-2"
        style={DiscussionStyles["discussion-view-container-2"]}>
        <Text
          id="discussion-view-title"
          style={DiscussionStyles["discussion-view-title"]}>
          {discussion.title}
        </Text>
        <Text
          id="discussion-view-description"
          style={DiscussionStyles["discussion-view-description"]}>
          {discussion.description}
        </Text>
        <View
          id="discussion-view-response"
          style={DiscussionStyles["discussion-view-response-conatiner"]}>
          <View
            id="discussion-view-response-like"
            style={DiscussionStyles["discussion-view-response"]}>
            <AntDesign name="like2" size={20} color="black" />
            <Text>21 </Text>
          </View>
          <View style={DiscussionStyles["discussion-view-response"]}>
            <FontAwesome5 name="comment-alt" size={18} color="black" />
            <Text>21 </Text>
          </View>
          <View style={DiscussionStyles["discussion-view-response"]}>
            <AntDesign name="dislike2" size={20} color="black" />
            <Text>21 </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const DiscussionStyles = StyleSheet.create({
  "discussion-view-container": { marginTop: 10, marginBottom: 10 },
  "discussion-view-container-1": {
    position: "relative",
  },
  "discussion-view-info-container": {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    height: 60,
  },
  "discussion-view-info": {},
  "discussion-view-info-1": {},
  "discussion-view-info-2": {
    fontSize: 10,
    color: COLORS["text-gray-1"],
  },
  "discussion-view-info-3": {
    fontSize: 10,
    color: COLORS["text-gray-1"],
  },
  "discussion-view-menu-container": {
    position: "absolute",
    right: 0,
    top: 15,
  },
  "discussion-view-container-2": {
    paddingLeft: 10,
    marginTop: 4,
    marginBottom: 4,
  },
  "discussion-view-title": {
    fontSize: 16,
    fontWeight: "bold",
    textTransform: "capitalize",
    marginBottom: 6,
    letterSpacing: 0.4,
  },
  "discussion-view-description": {
    fontSize: 12,
    marginBottom: 6,
  },
  "discussion-view-response-conatiner": {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    // borderWidth: 0.5,
    borderColor: "#ddd",
    gap: 5,
    width: "fit-content",
  },
  "discussion-view-response": {
    flexDirection: "row",
    alignItems: "baseline",
    gap: 5,
  },
});

export default Discussion;

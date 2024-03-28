import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { COLORS } from "../utils/constants";
import { TextInput } from "react-native-gesture-handler";
import useDiscussion from "../hooks/useDiscussion";
import { createNewDiscussionBody } from "../utils/helpers";

const AddDiscussionScreen = ({ isClicked, setIsClicked }) => {
  const [newDiscussion, setNewDiscussion] = useState({
    title: "",
    description: "",
    community: "Winnipeg",
    errors: {
      title: false,
      description: false,
    },
  });

  const { addDiscussion, requestStatus } = useDiscussion();

  useEffect(() => {
    setIsClicked(false);
  }, []);

  useEffect(() => {
    if (isClicked && newDiscussion.description.length !== 0) {
      const body = createNewDiscussionBody(newDiscussion);

      if (body) {
        addDiscussion("ADD_DISCUSSION", {
          body: body,
        });
      }
    }
  }, [isClicked]);

  return (
    <View
      id="add-discussion"
      style={addDiscussionStyles["add-discussion-container"]}>
      <Text
        id="add-discussion-heading"
        style={addDiscussionStyles["discussion-overview-heading"]}>
        Winnipeg
      </Text>
      <View
        id="add-discussion-input-container"
        style={addDiscussionStyles["add-discussion-input-container"]}>
        <Text id="title-label" style={addDiscussionStyles["title-label"]}>
          Title
        </Text>
        <TextInput
          id="title-input"
          style={addDiscussionStyles["title-input"]}
          value={newDiscussion.title}
          onChangeText={(text) =>
            setNewDiscussion({ ...newDiscussion, title: text })
          }
        />
        <Text
          id="description-label"
          style={addDiscussionStyles["description-label"]}>
          Description
        </Text>
        <TextInput
          id="description-input"
          style={addDiscussionStyles["description-input"]}
          multiline={true}
          value={newDiscussion.description}
          onChangeText={(text) =>
            setNewDiscussion({ ...newDiscussion, description: text })
          }
        />
      </View>
    </View>
  );
};

const addDiscussionStyles = StyleSheet.create({
  "add-discussion-container": {
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
  "add-discussion-input-container": {
    marginLeft: 10,
    marginRight: 10,
  },
  "title-label": {
    marginTop: 8,
    fontSize: 16,
    fontWeight: "bold",
    letterSpacing: 0.5,

    paddingLeft: 10,
  },
  "title-input": {
    borderColor: "#ddd",
    borderWidth: 0.5,

    height: 30,
    marginTop: 8,
    borderRadius: 20,
    paddingLeft: 10,
  },
  "description-label": {
    marginTop: 8,
    fontSize: 16,
    fontWeight: "bold",
    letterSpacing: 0.5,
  },

  "description-input": {
    borderColor: "#ddd",
    borderWidth: 0.5,

    height: 500,
    marginTop: 8,
    borderRadius: 20,
    paddingTop: 10,
    paddingLeft: 10,
  },
});

export default AddDiscussionScreen;

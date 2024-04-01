import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text, TextInput, Animated } from "react-native";
import RoundButton from "../components/RoundButton";
import DiscussionsList from "./components/DiscussionsList";
import { COLORS } from "../utils/constants";

import useDiscussion from "../hooks/useDiscussion";
import Loader from "../components/Loader";

const HomeScreen = ({ navigation }) => {
  const [discussionsList, setDiscussionsList] = useState([]);
  const [newDiscussion, setNewDiscussion] = useState("");
  const [inputFocused, setInputFocused] = useState(false);

  const heightAnim = new Animated.Value(40);

  const {
    data: discussionsData,
    loading: discussionsLoading,
    error: discussionsError,
  } = useDiscussion("GET_DISCUSSIONS_BY_COMMUNITY", {
    params: { community: "winnipeg" },
  });

  useEffect(() => {
    if (discussionsData?.length > 0) {
      setDiscussionsList(discussionsData);
    }
  }, [discussionsData]);

  function pressHandler(discussion) {
    navigation.navigate("DiscussionOverviewScreen", {
      discussion,
    });
  }

  function addDiscussionPressHandler() {
    navigation.navigate("AddDiscussionScreen");
  }

  const handleBlur = () => {
    setInputFocused(false);
    Animated.timing(heightAnim, {
      toValue: 40,
      duration: 200, // Adjust the duration as needed
      useNativeDriver: false,
    }).start();
  };

  return (
    <View style={styles.root}>
      <Text id="primary-heading-1" style={styles["primary-heading-1"]}>
        New discussions in{" "}
        <Text
          id="primary-heading-title"
          style={styles["primary-heading-title"]}>
          {" "}
          Winnipeg{" "}
        </Text>
      </Text>
      <View
        id="discussion-input-container"
        style={styles["discussion-input-container"]}>
        <RoundButton type="FILTER" styles={{ height: 40, width: "33%" }} />
        <RoundButton
          type="ADD"
          styles={{ height: 40, width: "33%" }}
          pressHandler={addDiscussionPressHandler}
        />
        <RoundButton type="SEARCH" styles={{ height: 40, width: "33%" }} />
      </View>

      {discussionsLoading && <Loader />}

      {!discussionsLoading && discussionsList?.length > 0 && (
        <DiscussionsList
          pressHandler={pressHandler}
          discussionsList={discussionsList}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    backgroundColor: "#fff",
    flex: 1,
    alignItems: "center",
  },
  "primary-heading-1": {
    marginTop: 24,
    marginBottom: 24,
    fontSize: 26,
    letterSpacing: 1.5,
  },
  "primary-heading-title": {
    backgroundColor: COLORS.primary,
  },
  "discussion-input-container": {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    marginBottom: 24,
  },
  userInput: {
    height: 40,
    width: "80%",
    borderColor: "#ddd",
    borderWidth: 1,
    borderRadius: 50,
    backgroundColor: "#fff",
    fontSize: 14,
    paddingLeft: 8,
  },
});

export default HomeScreen;

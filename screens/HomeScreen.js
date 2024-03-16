import React from "react";
import { View, StyleSheet, Text, TextInput } from "react-native";
import { COLORS } from "../utils/constants";
import RoundButton from "../components/RoundButton";

const HomeScreen = () => {
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
        <TextInput
          id="userInput"
          value="Enter a discussion..."
          style={styles.userInput}
        />

        <RoundButton styles={{ height: 40, width: 40 }} />
      </View>
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
    justifyContent: "space-around",
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
    color: "#BABABA",
  },
});

export default HomeScreen;

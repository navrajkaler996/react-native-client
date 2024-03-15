import React from "react";
import { View, StyleSheet, Text } from "react-native";

const HomeScreen = () => {
  return (
    <View style={styles.root}>
      <Text>Home</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    backgroundColor: "#F3FFFE",
    flex: 1,
  },
});

export default HomeScreen;

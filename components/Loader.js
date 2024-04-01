import React from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";
import { COLORS } from "../utils/constants";

const Loader = () => {
  return (
    <View style={[loaderStyles.container, loaderStyles.horizontal]}>
      <ActivityIndicator size="large" color={COLORS.primary} />
    </View>
  );
};

const loaderStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  horizontal: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10,
  },
});

export default Loader;

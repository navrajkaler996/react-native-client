import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { Pressable, StyleSheet } from "react-native";

const Notification = () => {
  return (
    <Pressable>
      <AntDesign name="bells" size={24} color="black" style={styles.bell} />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  bell: {
    marginRight: 12,
  },
});

export default Notification;

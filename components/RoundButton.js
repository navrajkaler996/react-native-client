import { TouchableOpacity, StyleSheet } from "react-native";

import { AntDesign } from "@expo/vector-icons";

import { COLORS } from "../utils/constants";
const RoundButton = ({ type, styles, pressHandler }) => {
  return (
    <TouchableOpacity
      style={{ ...roundButtonStyles["round-button"], ...styles }}
      onPress={pressHandler}>
      {type === "ADD" && <AntDesign name="plus" size={18} color="black" />}
      {type === "SEARCH" && (
        <AntDesign name="search1" size={18} color="black" />
      )}
      {type === "FILTER" && <AntDesign name="filter" size={18} color="black" />}
    </TouchableOpacity>
  );
};

const roundButtonStyles = StyleSheet.create({
  "round-button": {
    backgroundColor: COLORS.primary,
    width: 24,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default RoundButton;

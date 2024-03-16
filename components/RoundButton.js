import { TouchableOpacity, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";

import { COLORS } from "../utils/constants";
const RoundButton = ({ styles }) => {
  return (
    <TouchableOpacity
      style={{ ...roundButtonStyles["round-button"], ...styles }}>
      <AntDesign name="arrowright" size={24} color="black" />
    </TouchableOpacity>
  );
};

const roundButtonStyles = StyleSheet.create({
  "round-button": {
    borderRadius: 50,
    backgroundColor: COLORS.primary,
    width: 24,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default RoundButton;

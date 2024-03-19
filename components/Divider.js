import { View, StyleSheet } from "react-native";
import { COLORS } from "../utils/constants";

const Divider = () => {
  return <View id="divider" style={DividerStyles.divider}></View>;
};

const DividerStyles = StyleSheet.create({
  divider: {
    width: "100%",
    height: 0.5,
    backgroundColor: "#ddd",
  },
});

export default Divider;

import React from "react";
import { Text, View } from "react-native";
import { COLORS } from "../contants/colors";
import { SIZES } from "../contants/sizes";

const Tv = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLORS.bgColor,
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <Text
        style={{
          fontSize: SIZES.big,
          color: COLORS.fontColor
        }}
      >
        TV
      </Text>
    </View>
  );
};

export default Tv;

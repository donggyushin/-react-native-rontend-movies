import React from "react";
import { View, Text } from "react-native";
import { SIZES } from "../../contants/sizes";
import { COLORS } from "../../contants/colors";

const Detail = () => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "black"
      }}
    >
      <Text
        style={{
          fontSize: SIZES.big,
          color: COLORS.fontColor
        }}
      >
        Detail
      </Text>
    </View>
  );
};

export default Detail;

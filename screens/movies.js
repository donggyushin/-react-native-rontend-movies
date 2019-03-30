import React from "react";
import { View, Text, StatusBar } from "react-native";
import { COLORS } from "../contants/colors";
import { SIZES } from "../contants/sizes";

const Movies = () => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: COLORS.bgColor
      }}
    >
      <StatusBar barStyle={"light-content"} />
      <Text
        style={{
          color: COLORS.fontColor,
          fontSize: SIZES.big
        }}
      >
        Movies
      </Text>
    </View>
  );
};

export default Movies;

import React from "react";
import { View, Text } from "react-native";
import { COLORS } from "../../contants/colors";
import { SIZES } from "../../contants/sizes";

const Search = () => {
  return (
    <View
      style={{
        backgroundColor: COLORS.bgColor,
        justifyContent: "center",
        alignItems: "center",
        flex: 1
      }}
    >
      <Text
        style={{
          color: COLORS.fontColor,
          fontSize: SIZES.big
        }}
      >
        Search
      </Text>
    </View>
  );
};

export default Search;

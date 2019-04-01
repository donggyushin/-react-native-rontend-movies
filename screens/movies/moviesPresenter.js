import React from "react";
import { View, Text, StatusBar, Button } from "react-native";
import { COLORS } from "../../contants/colors";
import { SIZES } from "../../contants/sizes";

const MoviesPresenter = ({ _goToDetails }) => (
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
    <Button onPress={_goToDetails} title={"Go To Details"} />
  </View>
);

export default MoviesPresenter;
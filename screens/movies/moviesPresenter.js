import React from "react";
import { View, Text, StatusBar, Button, ActivityIndicator } from "react-native";
import { COLORS } from "../../contants/colors";
import { SIZES } from "../../contants/sizes";

const MoviesPresenter = ({ _goToDetails, loading }) => (
  <View
    style={{
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: COLORS.bgColor
    }}
  >
    {loading ? (
      <ActivityIndicator size={"large"} />
    ) : (
      <>
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
      </>
    )}
  </View>
);

export default MoviesPresenter;

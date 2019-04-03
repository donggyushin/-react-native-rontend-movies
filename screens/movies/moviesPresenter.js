import React from "react";
import { View, Text, StatusBar, Button, ActivityIndicator } from "react-native";
import { COLORS } from "../../contants/colors";
import { SIZES } from "../../contants/sizes";
import LoadingComponent from "../../components/loadingComponent";

const MoviesPresenter = ({ _goToDetails, loading }) => {
  if (loading) {
    return <LoadingComponent />;
  }
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
      <Button onPress={_goToDetails} title={"Go To Details"} />
    </View>
  );
};

export default MoviesPresenter;

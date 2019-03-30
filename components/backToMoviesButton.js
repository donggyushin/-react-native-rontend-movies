import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { COLORS } from "../contants/colors";
import { SIZES } from "../contants/sizes";

class BackToMoviesButton extends React.Component {
  render() {
    const { _goBack } = this;
    return (
      <View
        style={{
          flexDirection: "row"
        }}
      >
        <TouchableOpacity onPress={_goBack}>
          <Text style={{ color: COLORS.fontColor, fontSize: SIZES.middle }}>
            Back
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
  _goBack = () => {
    const { navigation } = this.props;
    navigation.goBack();
  };
}

export default BackToMoviesButton;

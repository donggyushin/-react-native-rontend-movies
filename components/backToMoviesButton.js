import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { COLORS } from "../contants/colors";
import { SIZES } from "../contants/sizes";
import { Ionicons } from "@expo/vector-icons";

class BackToMoviesButton extends React.Component {
  render() {
    const { _goBack } = this;
    return (
      <View
        style={{
          flexDirection: "row",
          paddingLeft: 10
        }}
      >
        <TouchableOpacity
          style={{
            flexDirection: "row"
          }}
          onPress={_goBack}
        >
          <Ionicons
            style={{ marginRight: 10 }}
            name={"md-arrow-back"}
            size={32}
            color={"white"}
          />
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

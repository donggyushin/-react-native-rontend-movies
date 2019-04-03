import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import styled from "styled-components";

const Container = styled.View`
  flex-direction: row;
`;

const TouchableButton = styled.TouchableOpacity`
  flex-direction: row;
  padding-left: 15px;
  padding-right: 10px;
`;

class BackToMoviesButton extends React.Component {
  render() {
    const { _goBack } = this;
    return (
      <Container>
        <TouchableButton onPress={_goBack}>
          <Ionicons
            style={{ marginRight: 10 }}
            name={"md-arrow-back"}
            size={32}
            color={"white"}
          />
          {/* <Text style={{ color: COLORS.fontColor, fontSize: SIZES.middle }}>
            Back
          </Text> */}
        </TouchableButton>
      </Container>
    );
  }
  _goBack = () => {
    const { navigation } = this.props;
    navigation.goBack();
  };
}

export default BackToMoviesButton;

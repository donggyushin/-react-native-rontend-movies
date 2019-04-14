import React from "react";
import styled from "styled-components";
import { COLORS } from "../contants/colors";
import WEIGHT from "../contants/weight";
import { withNavigation } from "react-navigation";

const Button = styled.TouchableOpacity`
  background-color: ${COLORS.grapeFruit};
  padding: 3.5px;
  border-radius: 2.5px;
`;
const Title = styled.Text`
  color: ${COLORS.fontColor};
  font-weight: ${WEIGHT.middle};
`;

const RedButton = ({ title, navigation, id, movieTitle }) => (
  <Button
    onPress={() => {
      navigation.navigate("Details", {
        id,
        title: movieTitle,
        isMovie: true
      });
    }}
  >
    <Title>{title}</Title>
  </Button>
);

export default withNavigation(RedButton);

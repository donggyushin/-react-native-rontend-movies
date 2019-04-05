import React from "react";
import { Text, View } from "react-native";
import { COLORS } from "../../contants/colors";
import { SIZES } from "../../contants/sizes";
import styled from "styled-components";

const Container = styled.View`
  flex: 1;
  background-color: ${COLORS.bgColor};
  justify-content: center;
  align-items: center;
`;

const Title = styled.Text`
  font-size: ${SIZES.big};
  color: ${COLORS.fontColor};
`;

const Tv = () => {
  return (
    <Container>
      <Title>TV</Title>
    </Container>
  );
};

export default Tv;

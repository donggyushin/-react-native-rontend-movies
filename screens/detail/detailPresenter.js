import React from "react";
import { View, Text } from "react-native";
import { SIZES } from "../../contants/sizes";
import { COLORS } from "../../contants/colors";
import styled from "styled-components";

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${COLORS.bgColor};
`;

const Title = styled.Text`
  font-size: ${SIZES.big};
  color: ${COLORS.fontColor};
`;

const Detail = () => {
  return (
    <Container>
      <Title>Detail</Title>
    </Container>
  );
};

export default Detail;

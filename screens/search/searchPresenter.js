import React from "react";
import { View, Text } from "react-native";
import { COLORS } from "../../contants/colors";
import { SIZES } from "../../contants/sizes";
import styled from "styled-components";

const Container = styled.View`
  background-color: ${COLORS.bgColor};
  justify-content: center;
  align-items: center;
  flex: 1;
`;

const Title = styled.Text`
  color: ${COLORS.fontColor};
  font-size: ${SIZES.big};
`;

const Search = () => {
  return (
    <Container>
      <Title>Search</Title>
    </Container>
  );
};

export default Search;

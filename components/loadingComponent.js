import React from "react";
import { ActivityIndicator } from "react-native";
import styled from "styled-components";
import { COLORS } from "../contants/colors";

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${COLORS.bgColor};
`;

const LoadingComponent = () => (
  <Container>
    <ActivityIndicator />
  </Container>
);

export default LoadingComponent;

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

const Error = styled.Text`
  color: white;
`;

const LoadingComponent = ({ error }) => (
  <Container>
    <ActivityIndicator />
    {error ? <Error>{error}</Error> : null}
  </Container>
);

export default LoadingComponent;

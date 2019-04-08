import React from "react";
import styled from "styled-components";
import { COLORS } from "../contants/colors";
import WEIGHT from "../contants/weight";

const Button = styled.TouchableOpacity`
  background-color: ${COLORS.grapeFruit};
  padding: 3.5px;
  border-radius: 2.5px;
`;
const Title = styled.Text`
  color: ${COLORS.fontColor};
  font-weight: ${WEIGHT.middle};
`;

const RedButton = ({ title }) => (
  <Button>
    <Title>{title}</Title>
  </Button>
);

export default RedButton;

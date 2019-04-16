import React from "react";
import styled from "styled-components";
import { COLORS } from "../contants/colors";
import { LAYOUTS } from "../contants/layouts";

const InputComponent = styled.TextInput`
  background-color: ${COLORS.inputBackground};
  width: ${LAYOUTS.width / 1.3};
  border-radius: 20px;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 20px;
  padding-right: 20px;
`;

const Input = ({ searchTerm, handleInput, searchMoviesAndTVs }) => (
  <InputComponent
    autoCapitalize="sentences"
    placeholderTextColor={COLORS.greyColor}
    placeholder="Search For Movies and Tvs"
    returnKeyType="search"
    autoCorrect={false}
    onChangeText={handleInput}
    value={searchTerm}
    onSubmitEditing={searchMoviesAndTVs}
  />
);

export default Input;

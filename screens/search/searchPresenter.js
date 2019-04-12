import React from "react";
import { COLORS } from "../../contants/colors";
import styled from "styled-components";
import { LAYOUTS } from "../../contants/layouts";
import Input from "../../components/InputComponent";
import HorizontalMovies from "../../components/horizontalMovies";
import LoadingComponent from "../../components/loadingComponent";

const Container = styled.View`
  background-color: ${COLORS.bgColor};
  flex: 1;
`;

const InputContainer = styled.View`
  align-items: center;
  width: ${LAYOUTS.width};
  margin-top: 20px;
`;

const MovieAndTvContainer = styled.ScrollView`
  margin-top: 20px;
`;

const Margin = styled.View`
  margin-top: 20px;
  margin-bottom: 20px;
`;

const Text = styled.Text`
  color: ${COLORS.fontColor};
`;

const Search = ({
  handleInput,
  searchTerm,
  searchMoviesAndTVs,
  loading,
  error,
  movies,
  tvs
}) => {
  return (
    <Container>
      <InputContainer>
        <Input
          searchMoviesAndTVs={searchMoviesAndTVs}
          searchTerm={searchTerm}
          handleInput={handleInput}
        />
      </InputContainer>
      <MovieAndTvContainer>
        {loading ? (
          <LoadingComponent />
        ) : movies ? (
          movies.length !== 0 ? (
            <HorizontalMovies title="Movies" movies={movies} />
          ) : (
            <Text>There is no movie like that. </Text>
          )
        ) : null}
        <Margin />
        {loading ? (
          <LoadingComponent />
        ) : tvs ? (
          tvs.length !== 0 ? (
            <HorizontalMovies title="TVs" movies={tvs} />
          ) : (
            <Text>There is no TV shows like that. </Text>
          )
        ) : null}
      </MovieAndTvContainer>
    </Container>
  );
};

export default Search;

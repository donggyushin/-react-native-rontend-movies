import React from "react";
import styled from "styled-components";
import { youtubeBaseURL } from "../contants/baseURL";
import { COLORS } from "../contants/colors";
import { LAYOUTS } from "../contants/layouts";
import { Linking } from "react-native";

const Container = styled.View``;

const MovieTitle = styled.Text`
  color: ${COLORS.fontColor};
`;
const TagLine = styled.Text`
  color: ${COLORS.fontColor};
`;
const Homepage = styled.Text`
  color: ${COLORS.fontColor};
`;
const Genres = styled.View``;
const Genre = styled.Text`
  color: ${COLORS.fontColor};
`;
const OverviewContainer = styled.View``;
const Overview = styled.Text`
  color: ${COLORS.fontColor};
`;
const ProductionCompaniesContainer = styled.View``;
const ProductionCompanie = styled.Text`
  color: ${COLORS.fontColor};
`;
const ReleaseDate = styled.Text`
  color: ${COLORS.fontColor};
`;
const Status = styled.Text`
  color: ${COLORS.fontColor};
`;
const VoteAverage = styled.Text`
  color: ${COLORS.fontColor};
`;

const MovieInfo = ({
  original_title,
  homepage,
  genres,
  overview,
  production_companies,
  release_date,
  status,
  tagline,
  video,
  vote_average
}) => (
  <Container>
    <MovieTitle>{original_title}</MovieTitle>
    <TagLine>{tagline}</TagLine>
    <Homepage onPress={() => Linking.openURL(homepage)}>{homepage}</Homepage>
    <Genres>
      {genres.map(genre => (
        <Genre key={genre.id}>{genre.name}</Genre>
      ))}
    </Genres>
    <ProductionCompaniesContainer>
      {production_companies.map(company => (
        <ProductionCompanie key={company.id}>{company.name}</ProductionCompanie>
      ))}
    </ProductionCompaniesContainer>
    <ReleaseDate>{release_date}</ReleaseDate>
    <Status>{status}</Status>
    <VoteAverage>{vote_average}</VoteAverage>
    <OverviewContainer>
      <Overview>{overview}</Overview>
    </OverviewContainer>
  </Container>
);

export default MovieInfo;

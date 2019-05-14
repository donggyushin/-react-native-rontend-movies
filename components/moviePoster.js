import React from "react";
import styled from "styled-components";
import setImageUrl from "../utils/setImageUrl";
import { withNavigation } from "react-navigation";

const MoviePosterImage = styled.Image`
  width: 135px;
  height: 190px;
`;

const MoviePosterButton = styled.TouchableOpacity``;

const MoviePoster = ({ moviePosterUri, id, navigation, title, isMovie }) => (
  <MoviePosterButton
    onPress={() => {
      navigation.navigate("Details", {
        id,
        title,
        isMovie: isMovie
      });
    }}
  >
    <MoviePosterImage
      // resizeMode="contain"
      source={{
        uri: setImageUrl(moviePosterUri)
      }}
    />
  </MoviePosterButton>
);

export default withNavigation(MoviePoster);

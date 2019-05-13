import React from "react";
import { SIZES } from "../../contants/sizes";
import { COLORS } from "../../contants/colors";
import styled from "styled-components";
import LoadingComponent from "../../components/loadingComponent";
import BigMoviePoster from "../../components/bigMoviePoster";
import MovieInfo from "../../components/movieInfo";

const Container = styled.ScrollView`
  flex: 1;
  background-color: ${COLORS.bgColor};
`;

const Detail = ({ movie, tv, error, loading, isMovie }) => {
  if (loading) {
    return <LoadingComponent />;
  }
  console.log(movie);
  return (
    <Container>
      <BigMoviePoster moviePoster={movie.backdrop_path} />
      <MovieInfo
        original_title={movie.original_title}
        homepage={movie.homepage}
        genres={movie.genres}
        overview={movie.overview}
        production_companies={movie.production_companies}
        release_date={movie.release_date}
        status={movie.status}
        tagline={movie.tagline}
        video={movie.videos.results[0]}
        vote_average={movie.vote_average}
      />
    </Container>
  );
};

export default Detail;

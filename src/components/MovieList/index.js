import React from "react";
import Movie from "../Movie";
//import MovieInfo from '../../pages/MovieInfo';

const MovieList = (props) => {
  const { 
    movies, 
    genres, 
    viewMovieDetail
  } = props;
  return (
    <div className="container">
      {movies.map((movie) => {
        return (
          <Movie
            key={movie.id}
            id={movie.id}
            image={movie.poster_path}
            title={movie.title}
            date={movie.release_date}
            rating={movie.vote_average}
            resumo={movie.overview}
            genre={movie.genre_ids} //Pega somente os IDs dos generos no result[]
            genres={genres}
            viewMovieDetail={viewMovieDetail}

            statusLancamento={movie.status}
            idiomaOriginal={movie.original_language}
            orcamento={movie.budget}
            receita={movie.revenue}    
          />
        );
      })}
    </div>
  );
};

export default MovieList;
import React from "react";

import "./style.css";

const MovieInfo = (props) => {
  const { 
    closeMovieDetails, 
    currentMovie, 
    id,
  } = props;

  return (
    <div className="container">
      {/*<div className="row" onClick={closeMovieDetails}>
        <i className="fas fa-arrow-left"></i>
        <span className="goBack"> Voltar </span>
      </div>*/}

      <div className="row2">
        <div className="header-info">
          <p className="header-title"> {currentMovie.title} </p>
          <p className="header-data">
            {" "}
            {currentMovie.release_date
              .substring(5)
              .split("-")
              .reverse()
              .concat(currentMovie.release_date.substring(0, 4))
              .join("/")}
          </p>
        </div>

        <div className="div-info-container">
          <div>
            <h2>Sinopse</h2>
            <hr />
            <p className="ov-p"> {currentMovie.overview} </p>
            <br />
            <h2>Informações</h2>
            <hr />

            <div className="info-flex">
              <ul>
                <li>
                  <h2>Situação</h2>
                  <p> {currentMovie.status} </p>
                </li>
                <li>
                  <h2>Idioma</h2>
                  <p> {currentMovie.original_language} </p>
                </li>
                <li>
                  <h2>Duração</h2>
                  <p> {currentMovie.runtime} </p>
                </li>
                <li>
                  <h2>Orçamento</h2>
                  <p> {currentMovie.budget} </p>
                </li>
                <li>
                  <h2>Receita</h2>
                  <p> {currentMovie.revenue} </p>
                </li>
                {/*<li>
                  <h2>Lucro</h2>
                  <p> {lucro} SOL </p>
                </li>*/}
              </ul>
            </div>
          </div>

          <div className="inner-row-img">
            {currentMovie.poster_path == null ? (
              <img
                className=".img-details"
                src={`https://s3-ap-southeast-1.amazonaws.com/upcode/static/default-image.jpg`}
                alt="default img"
              />
            ) : (
              <img
                className=".img-details"
                src={`http://image.tmdb.org/t/p/original${currentMovie.poster_path}`}
                alt="img"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieInfo;

import React, { useState, useEffect } from "react";
import "./style.css";

const Movie = (props) => {
  const { image, title, resumo, date, genre, genres, id, rating, viewMovieDetail } = props;
  const { REACT_APP_API } = process.env;
  const [filteredGenres, setFilteredGenres] = useState([]);

  const handleMovieClick = (movieID) => {
    fetch(
      `https://api.themoviedb.org/3/movie/${movieID}?api_key=${REACT_APP_API}&language=pt-BR`
    )
      .then((data) => data.json())
      .then((data) => {
        console.log(data);
      });
  };

  //só vai chamar os components se as variáveis genres e genre estiverem carregadas
  useEffect(() => {
    const handleCategories = () => {
      let filteredCategories = [];
      genres.forEach((array_el) => {
        //pega os dados do genero na api /search (onde tem só id)
        genre.forEach((anotherOne_el) => {
          //pega os dados do genero na api /movie (onde tem id e nome)
          if (anotherOne_el === array_el.id) {
            //compara se ambos tem o mesmo valor
            filteredCategories.push(array_el); //faz o filtro dos generos
          }
        });
      });
      setFilteredGenres(filteredCategories); //atribui todos os generos
    };
    handleCategories();
  }, [genres, genre]);

  return (
    <section className="grid-container">
      <button
        onClick={() => handleMovieClick(id)}
        className="container-movie"
        href="#"
      >
        {/* Condição para requisição da imagem, se não existe ele pega uma imagem default */}
        {image == null ? (
          <img
            className="img"
            src={`https://s3-ap-southeast-1.amazonaws.com/upcode/static/default-image.jpg`}
            alt="default img"
          />
        ) : (
          <img
            className="img"
            src={`http://image.tmdb.org/t/p/original${image}`}
            alt="img"
          />
        )}

        {/* Abre o titulo escolhido na mesma página para ver detalhes */}
        <a
          onClick={() => viewMovieDetail(id)}
          href="#"
          //href={`https://www.themoviedb.org/movie/${id}&language=pt-Br`}
          className="title-movie"
          //target="_blank"
          rel="noopener noreferrer"
        >
          {title}
        </a>

        {/* Círculo com porcentagem de avaliação */}
        <div className="rating">
          <span className="rating-circle">
            {Math.min(rating).toFixed(1).replace(".", "") + "%"}
          </span>
        </div>

        {/* Data de lançamento do filme */}
        <p className="date"> 
          {
            date
            .substring(5)
            .split("-")
            .reverse()
            .concat(date.substring(0, 4))
            .join("/")
          } 
        </p>

        {/* Sinopse do filme */}
        <p className="resume"> {resumo} </p>

        {/* Genero do filme */}
        <ul className="generos">
          {filteredGenres.map((categorie, index) => (
            <li key={index}>{categorie.name}</li>
          ))}
        </ul>
      </button>
    </section>
  );
};

export default Movie;
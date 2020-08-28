// Filme: Joker
// URL da API do The Movie DB:
// Key: 060f9412f18e1fe6697618a8f251d021
// https://api.themoviedb.org/3/movie/475557?api_key=060f9412f18e1fe6697618a8f251d021&language=pt-BR

import React, { Component } from "react";

import Search from "../../components/Search";
import MovieList from "../../components/MovieList";
import MovieInfo from '../MovieInfo';

//import { Link } from 'react-router-dom';

class Home extends Component {
  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
    this.change = this.change.bind(this);
    this.state = {
      movies: [],
      genres: [],
      searchParms: "",
      title: "",
      currentMovie: null
    };
    this.apiKey = process.env.REACT_APP_API;
  }

  submit = (event) => {
    event.preventDefault();
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${this.apiKey}&query=${this.state.searchParms}&language=pt-BR`
    )
      .then((data) => data.json())
      .then((data) => {
        console.log(data);
        this.setState({
          movies: [...data.results],
          totalResults: data.total_results,
        });
      });
  };

  change = (event) => {
    this.setState({ searchParms: event.target.value });
  };

  componentDidMount() {
    fetch(
      `https://api.themoviedb.org/3/genre/movie/list?api_key=${this.apiKey}&language=pt-BR`,
      {}
    )
      .then((response) => response.json())
      .then((data) => {
        console.log("alguma data", data);
        this.setState({
          genres: data.genres,
        });
      });
  }

  viewMovieDetail = (id) => {
    const filteredMovie = this.state.movies.filter(movie => movie.id == id)
    const newCurrentMovie = filteredMovie.length > 0 ? filteredMovie[0] : null
    
    this.setState({ currentMovie: newCurrentMovie })
    console.log(filteredMovie);
  }

  closeMovieDetail = () => {
    this.setState({ currentMovie: null })
  }

  render() {
    return (
      <div className="container">
        
        { this.state.currentMovie == null ? 
          <div className="container">
            <Search 
              submit={this.submit} 
              change={this.change} 
            />

            <MovieList
              viewMovieDetail={this.viewMovieDetail}
              movies={this.state.movies}
              title={this.state.title}
              genres={this.state.genres}
            />
          </div>
          :
          <MovieInfo 
            currentMovie={this.state.currentMovie}
            closeMovieDetail={this.closeMovieDetail} 
            genres={this.state.genres}
          />
        }

      </div>
    );
  }
}

export default Home;

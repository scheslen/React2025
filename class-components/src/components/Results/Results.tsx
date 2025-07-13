import "./results.css";
import { Component } from "react";
import { IMovie } from "../../app/types";

export class Results extends Component {
  render() {
    let aMovies: IMovie[] = [];
    const sMovies = localStorage.getItem("movies");

    if (sMovies) {
      aMovies = JSON.parse(sMovies);
    }

    return (
      <div className="results">
        <div className="results__list">
          {aMovies.map((movie: IMovie) => (
            <MovieCard key={movie.uid} />
          ))}
        </div>
      </div>
    );
  }
}

export class MovieCard extends Component {
  constructor(movie:IMovie){
    super(movie)
    // this.name=movie.title
  }
  render() {
    return (
      <div className="results__item">
        <div className="name">movie.title</div>
        <div className="description">description</div>

      </div>
    )
  }}
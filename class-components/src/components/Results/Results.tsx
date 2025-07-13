import "./results.css";
import { Component } from "react";
import { IMovie, IpropsMovie } from "../../app/types";

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
          {aMovies.map((imovie: IMovie) => (
            <MovieCard  movie={imovie} />
          ))}
        </div>
      </div>
    );
  }
}

export class MovieCard extends Component <IpropsMovie>{
  // mM : IMovie
  // constructor(movie:IMovie){
  //   super(movie)
  //   this.mM = movie
  //  }
  render() {
    let description=''
    description += this.props.movie.usReleaseDate
    description += ` ${this.props.movie.mainDirector.name}`
    description += ` ( years from ${this.props.movie.yearFrom} to ${this.props.movie.yearTo} ) `


    return (
      <div className="results__item" key={this.props.movie.uid} >
        <div className="results__item-name">{this.props.movie.title}</div>
        <div className="results__item-description">{description}</div>

      </div>
    )
  }}
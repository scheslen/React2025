import "./results.css";
import { Component } from "react";
import { IMovie, IpropsMovie } from "../../app/types";

export class Results extends Component {
  render() {
    let aMovies: IMovie[] = [];
    const status = localStorage.getItem("status");

    if (status && Number(status) === 200) {
      const sMovies = localStorage.getItem("movies");

      if (sMovies) {
        aMovies = JSON.parse(sMovies);
      }
    }
    return (
      <div className="results">
        {Number(status) === 200 ? (
          <div className="results__list">
            {aMovies.map((imovie: IMovie) => (
              <MovieCard movie={imovie} key={imovie.uid} />
            ))}
          </div>
        ) : (
          <div className="results__null">
            <p>No data found for request</p>
            <p>Status {status}</p>
          </div>
        )}
      </div>
    );
  }
}

export class MovieCard extends Component<IpropsMovie> {
  render() {
    let description = "";
    description += this.props.movie.usReleaseDate;
    description += ` ${this.props.movie.mainDirector.name}`;
    description += ` ( years from ${this.props.movie.yearFrom} to ${this.props.movie.yearTo} ) `;

    return (
      <div className="results__item">
        <div className="results__item-name">{this.props.movie.title}</div>
        <div className="results__item-description">{description}</div>
      </div>
    );
  }
}

import "./results.css";
import { ICharacter, IpropsCharacter } from "../../app/types";

export const Results = () => {
  let aCharacters: ICharacter[] = [];
  const status = localStorage.getItem("status");

  if (status && Number(status) === 200) {
    const sMovies = localStorage.getItem("movies");

    if (sMovies) {
      aCharacters = JSON.parse(sMovies);
    }
  }

  return (
    <div className="results">
      {Number(status) === 200 ? (
        <div className="results__list">
          {aCharacters.map((item: ICharacter) => (
            <Card item={item} key={item.uid} />
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
};

export const Card = ({ item }: IpropsCharacter) => {
  let description = "";
  description += item.uid;

  //console.log(item);
  // description += ` ${this.props.movie.mainDirector.name}`;
  // description += ` ( years from ${this.props.movie.yearFrom} to ${this.props.movie.yearTo} ) `;

  return (
    <div className="results__item">
      <div className="results__item-name">{item.name}</div>
      <div className="results__item-description">{description}</div>
    </div>
  );
};

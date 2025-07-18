export interface IMovie {
  uid: string;
  mainDirector: { uid: string; name: string };
  stardateFrom: number;
  stardateTo: number;
  title: string;
  titleBulgarian: string;
  titleCatalan: string;
  titleGerman: string;
  titleItalian: string;
  titleJapanese: string;
  titlePolish: string;
  titleRussian: string;
  titleSerbian: string;
  titleSpanish: string;
  usReleaseDate: string;
  yearFrom: number;
  yearTo: number;
}

export interface IpropsMovie {
  movie: IMovie;
}

export interface IHomeState {
  aMovies: IMovie[];
  inputRequest: string;
  load: boolean;
  error: boolean;
}

export interface IControlState {
  inputRequest: string;
}

export type ControlProps = {
  inputRequest: string;
  onClick: (value: string) => void;
};



export interface IErrorState {
    error:  boolean;
  };
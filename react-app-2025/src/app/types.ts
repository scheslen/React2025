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

export interface IItem {
  page: IPage;
  characters: ICharacter[];
}

export interface IPage {
  firstPage: boolean;
  lastPage: boolean;
  numberOfElements: number;
  pageNumber: number;
  pageSize: number;
  totalElements: number;
  totalPages: number;
}

export interface ICharacter {
  alternateReality: boolean;
  bloodType: null | string;
  dayOfBirth: null | string;
  dayOfDeath: null | string;
  deceased: null | string;
  fictionalCharacter: boolean;
  gender: null | string;
  height: null | string;
  hologram: false;
  hologramActivationDate: null | string;
  hologramDateStatus: null | string;
  hologramStatus: null | string;
  maritalStatus: null | string;
  mirror: boolean;
  monthOfBirth: null | string;
  monthOfDeath: null | string;
  name: string;
  placeOfBirth: null | string;
  placeOfDeath: null | string;
  serialNumber: null | string;
  uid: string;
  weight: null | string;
  yearOfBirth: null | string;
  yearOfDeath: null | string;
}

export interface IpropsCharacter {
  item: ICharacter;
}

// export interface IHomeState {
//   aMovies: IMovie[];
//   inputRequest: string;
//   load: boolean;
//   error: boolean;
// }

export interface IControlState {
  inputRequest: string;
}

export type ControlProps = {
  inputRequest: string;
  onClick: (value: string) => void;
};

export type PageProps = {
  pageNumber: number;
  onClick: (value: number) => void;
};

export interface IErrorState {
  error: boolean;
}

export type MenuProps = {
  onClick?: () => void;
};

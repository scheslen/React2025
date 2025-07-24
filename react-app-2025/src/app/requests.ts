import { IMovie } from "./types";

export async function sendRequest(inputRequest: string) {
  const urlAPI = `https://stapi.co/api/v1/rest/movie/`;
  const request = "search";

  let aMovies: IMovie[] = [];

  try {
    const response = await fetch(`${urlAPI}${request}`, { method: "GET" });

    if (response.status === 200) {
      const data = await response.json();
      aMovies = data.movies;

      if (inputRequest.length > 0) {
        aMovies = aMovies.filter((movie) => {
          return movie && movie.title && movie.title.includes(inputRequest);
        });
      }

      const sMovies = JSON.stringify(aMovies);

      localStorage.setItem("movies", sMovies);
    } else {
      console.error("Error request. Status:", response.status);
    }
    localStorage.setItem("status", response.status.toString());
  } catch (error) {
    console.error("Error loading data:", error);
  }
  return aMovies;
}

export async function sendRequest(inputRequest : string){

  const urlAPI = `https://stapi.co/api/v1/rest/movie`;

  // let request = `v2/rest/book/search`
  // request = `v1/rest/comics/search`
  // request = `v2/rest/element/search`
  // request =`v2/rest/astronomicalObject/search`
  // request =`v1/rest/character/search`
  // request =`v1/rest/movie/search`

  const request = inputRequest || 'search'

  const response = await fetch(`${urlAPI}/${request}`, {
    method: "GET"
  });

  console.log("response>>>>>:", response);

  if (response.status === 200) {
    const data = await response.json();
    console.log ('movies *********', data.movies)

    const sMovies = JSON.stringify(data.movies);
    localStorage.setItem("movies", sMovies);

  }
}


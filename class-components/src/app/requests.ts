export async function sendRequest(inputRequest: string) {
  const urlAPI = `https://stapi.co/api/v1/rest/movie/`;
  const request = inputRequest.trim() || "search";

  try {
    const response = await fetch(`${urlAPI}${request}`, { method: "GET" });
    //  console.log("response>>>>>:", response);
    if (response.status === 200) {
      const data = await response.json();
      // console.log ('movies *********', data.movies)
      const sMovies = JSON.stringify(data.movies);
      localStorage.setItem("movies", sMovies);
    } else {
      console.error("Error request. Status:", response.status);
    }
    localStorage.setItem("status", response.status.toString());
  } catch (error) {
    console.error("Error loading data:", error);
  }
}

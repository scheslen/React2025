import { ICharacter, IPage } from "./types";

export async function sendRequest(inputRequest: string, pageNumber: number) {
  const urlAPI = `https://stapi.co/api/v1/rest/character/`;
  const request = "search";

  let aItems: ICharacter[] = [];
  let page: IPage;

  try {
    const response = await fetch(
      `${urlAPI}${request}?pageNumber=${pageNumber}&pageSize=50`,
      { method: "GET" },
    );

    if (response.status === 200) {
      const data = await response.json();

      // console.log("data", data);
      aItems = data.characters;
      page = data.page;
      console.log(page);

      if (inputRequest.length > 0) {
        aItems = aItems.filter((item) => {
          return (
            item &&
            item.name &&
            item.name.toLowerCase().includes(inputRequest.toLowerCase())
          );
        });
      }

      const sMovies = JSON.stringify(aItems);

      localStorage.setItem("movies", sMovies);
    } else {
      console.error("Error request. Status:", response.status);
    }
    localStorage.setItem("status", response.status.toString());
  } catch (error) {
    console.error("Error loading data:", error);
  }
  return aItems;
}

import axios from "axios";

export default async function useFetch(url) {
  const apiKey = import.meta.env.VITE_RAPID_API;
  const options = {
    method: "GET",
    url,
    headers: {
      "X-RapidAPI-Key": apiKey,
      "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
    },
  };
  try {
    const resp = await axios.request(options);
    const data = await resp.data;
    return { data };
  } catch (error) {
    throw new Error(error.message);
  }
}

export async function getYoutubeVideos(query) {
  const options = {
    method: "GET",
    url: `https://youtube-search-and-download.p.rapidapi.com/search?query=${query}`,
    headers: {
      "X-RapidAPI-Key": "d9914f36b8msh855006784bd0acep12f8bcjsn96d4bb066ba1",
      "X-RapidAPI-Host": "youtube-search-and-download.p.rapidapi.com",
    },
  };
  const resp = await axios.request(options);
  const data = resp.data.contents;
  return data;
}

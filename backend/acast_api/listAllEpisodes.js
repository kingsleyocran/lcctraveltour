import axios from "axios";

export default async function listAllEpisodes(showId) {
  const url = `https://open.acast.com/rest/shows/${showId}/episodes`;

  const headers = {
    "x-api-key": process.env.ACAST_API_KEY ,
    "Access-Control-Allow-Origin": "*",
  };

  const { data } = await axios.get(url, {
    headers: headers,
  });

  return data;
}

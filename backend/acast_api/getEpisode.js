import axios from "axios";

export default async function getEpisode(showId, episodeId) {
  const url = `https://open.acast.com/rest/shows/${showId}/episodes/${episodeId}`;

  const headers = {
    "x-api-key": process.env.ACAST_API_KEY ,
    "Access-Control-Allow-Origin": "*",
  };

  const { data } = await axios.get(url, {
    headers: headers,
  });

  return data;
}

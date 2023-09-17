import axios from "axios";

export default async function listAllEpisodes(spotifyUri, limit, offset) {
  const url = `https://api.spotify.com/v1/shows/${spotifyUri}/episodes?market=ES&limit=${limit}&offset=${offset}"`;

  const headers = {
    "x-api-key": process.env.ACAST_API_KEY,
    "Access-Control-Allow-Origin": "*",
    "Authorization": `Bearer ${process.env.SPOTIFY_TOKEN}`,
    "Accept": "application/json",
    "Content-Type": "application/json"
  };
  //(show.spotifyUri.split(":"))[2]

  const { data } = await axios.get(url, {
    headers: headers,
  });

  return data;
}

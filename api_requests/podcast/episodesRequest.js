//
export default async function episodesApiRequest(dataPayload) {
  var res = await fetch("/api/episodes", {
    method: "POST",
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(dataPayload),
  });

  if (res.status == 200) {
    //console.log("Response success");
    return res.json();
  } else {
    //console.log("Response failed");
    return res.json();
  }
  
}

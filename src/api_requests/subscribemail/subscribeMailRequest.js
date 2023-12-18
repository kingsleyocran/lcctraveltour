//
export default async function subscribeApiRequest(dataPayload) {
  var response = await fetch("/api/subscribe", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(dataPayload),
  });


  if (response.status == 200) {
    console.log("Response success");
    return "success";
  } else {
    return "failed";
  }
}

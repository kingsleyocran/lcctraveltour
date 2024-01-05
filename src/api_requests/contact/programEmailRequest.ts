//
export default async function programEmailRequest(dataPayload: any) {
  var res = await fetch("/api/program", {
    method: "POST",
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(dataPayload),
  });

  var response = await res.json()
  response = JSON.parse(response)

  if (response.success == true) {
    console.log("Response success");
    return "success";
  } else if ((response.success == false)) {
    console.log("Response failed");
    return "failed";
  }
  
}

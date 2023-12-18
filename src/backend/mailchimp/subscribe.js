const client = require("@mailchimp/mailchimp_marketing");

export default async function subscribeMailChimp(email_address) {
  const data_center = "us11";
  const audience_id = "e4bf486f25";
  const api_key = process.env.MAILCHIMP_KEY;

  client.setConfig({
    apiKey: api_key,
    server: data_center,
  });

  const response = await client.lists.addListMember(audience_id, {
    email_address: email_address,
    status: "subscribed",
  });
  return response
}

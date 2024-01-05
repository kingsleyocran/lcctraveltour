import type { NextApiRequest, NextApiResponse } from "next";

export default async function contact(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  var ElasticMail = require("nodelastic");
  var client = new ElasticMail(process.env.ELASTICMAIL_API_KEY);

  client
    .send({
      from: "lcctravel.tours@gmail.com",
      fromName: "LCC Website",
      subject: "JOIN A PROGRAM FORM RESPONSE",
      //msgTo: ["ocrankingsley@gmail.com"],
      msgTo: ["lcctravel.tours@gmail.com"],
      // msgCC: ["sam@boxplayventures.com", "nana@boxplayventures.com"],
      bodyHtml: `<h3>Program Form Details</h3> \
        Name: ${req.body.name} \
        <br/> Email: ${req.body.email} \
        <br/> Phone: ${req.body.phone} \
        <br/> Program: ${req.body.typeOfProgram}`,
      textHtml: `Program Form Details \n
      Name: ${req.body.name} \n
      Email: ${req.body.email} \n
      Phone: ${req.body.phone} \n
      Program: ${req.body.typeOfProgram}`,
    })
    .then((message: any) => {
      console.log(message)
      res.status(200).json(message);
    });  

  // will print
  // {"success":true,"data":{"transactionid":"190d1b03-8b01-41a1-8003-17181c1719b0","messageid":"ilXf1Nm38mxuxemecfdbvw2"}}
}

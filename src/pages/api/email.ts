import type { NextApiRequest, NextApiResponse } from "next";

const nodemailer = require("nodemailer");

type Data = {
  name: string;
};

export default async function contact(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  var ElasticMail = require("nodelastic");
  var client = new ElasticMail(process.env.ELASTICMAIL_API_KEY);

  client
    .send({
      from: "boxplayweb@gmail.com",
      fromName: "Boxplay Ventures Website",
      subject: "BOXPLAY WEB CONTACT FORM RESPONSE",
      //msgTo: ["ocrankingsley@gmail.com"],
      msgTo: ["ventures@boxplayventures.com"],
      msgCC: ["sam@boxplayventures.com", "nana@boxplayventures.com"],
      bodyHtml: `<h3>Contact Form Details</h3> \
        Name: ${req.body.name} \
        <br/> Email: ${req.body.email} \
        <br/> Interest: ${req.body.interest} \
        <br/> Message: ${req.body.message}`,
      textHtml: `Contact Form Details \n
      Name: ${req.body.name} \n
      Email: ${req.body.email} \n
      Interest: ${req.body.interest} \n
      Message: ${req.body.message}`,
    })
    .then((message: any) => {
      console.log(message)
      res.status(200).json(message);
    });  

  // will print
  // {"success":true,"data":{"transactionid":"190d1b03-8b01-41a1-8003-17181c1719b0","messageid":"ilXf1Nm38mxuxemecfdbvw2"}}
}

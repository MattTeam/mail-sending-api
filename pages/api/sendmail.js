import allowCors from "../../allow-cors";
const nodemailer = require("nodemailer");
require('dotenv').config();

const handler = async (req, res) => {
 
    const { method } = req;

    switch (method) {
      case "POST":
        try {
          const data = req.body; // get the json object sent by the client
          //using nodemailer library to send emails
          const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
              user: process.env.USERNAME,
              pass: process.env.PASSWORD, // naturally, replace both with your real credentials or an application-specific password
            },
          });
          var mailContent =
            '<!DOCTYPE HTML><head><meta http-equiv="content-type" content="text/html"></head><body><div id="outer" style="width: 80%;margin: 0 auto;margin-top: 10px;"><div id="inner" style="width: 78%;margin: 0 auto;background-color: #fff;font-family: Open Sans,Arial,sans-serif;font-size: 13px;font-weight: normal;line-height: 1.4em;color: #444;margin-top: 10px;"><p>Name : ' +
            data.name +
            "</p><p>Email: " +
            data.email +
            "</p><p>Phone: " +
            data.phone +
            "</p><p>Subject: " +
            data.subject +
            " </p><p>Message : " +
            data.message +
            "</p></div></div></body>";
          const mailOptions = {
            from: "info@londongpclinic.co.uk",
            to: data.to,
            subject:
              "londongpclinic.co.uk | New Contact Request from " + data.name,
            html: mailContent,
          };
          const result = await transporter.sendMail(mailOptions);
          res.status(201).send({ status: "OK", result: result });
        } catch (err) {
          res.status(500).json({ status: "FAILED", error: err.message });
        }
        break;
      default:
        res.status(404).send("invalid endpoint");
        break;
    }

};

module.exports = allowCors(handler);

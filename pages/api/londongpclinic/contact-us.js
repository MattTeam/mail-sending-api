// The endpoint : https://mail-sending-api.vercel.app/api/londongpclinic/contact-us
import allowCors from "../../../allow-cors";
import middleware from"../../../utils/middleware";
import handler from"../../../utils/handler";
import initMiddleware from '../../../utils/init-middleware';
import validateMiddleware from '../../../utils/validate-middleware';
import { check, validationResult } from 'express-validator'

const nodemailer = require("nodemailer");
// require('dotenv').config();
// check('message').isIn(['@','#','%','&','*','^']).withMessage('Invalid character in messages !')
const validateBody = initMiddleware(
  validateMiddleware([
      check('name').isString().withMessage('Name should be only string !').isLength({min:4, max: 40}).withMessage('Name length should 4 to 40 charecters !'),
      check('email').exists().withMessage("Email is required").isEmail().withMessage("Invalid email address !"), 
      check('phone').matches(/^(\+\d{1,3}[- ]?)?\d{10}$/, 'g').withMessage("Phone number is invalid !"),
      check('message').matches(/^([0-9A-z\ \_]+)$/, 'g').withMessage('Message should not use uniq characters !')
  ], validationResult)
)

handler.post(async (req, res) => { 
    try {
      const data = req.body; // get the json object sent by the client
      await validateBody(req, res);
      const errors = validationResult(req) ;
      if (!errors.isEmpty()) {
        return res.status(405).json({ errors: errors.array() })
      }
      //using nodemailer library to send emails
      // const transporter = nodemailer.createTransport({
      //   service: "gmail",
      //   auth: {
      //     user: process.env.USERNAME,
      //     pass: process.env.PASSWORD, // naturally, replace both with your real credentials or an application-specific password
      //   },
      // });
      const transporter = nodemailer.createTransport({
          // host: "smtp.example.com",
          pool:true,
          host : proces.env.SMTP_HOST,
          port: proces.env.SMTP_PORT,
          secure: false, // upgrade later with STARTTLS
          auth: {
            user: proces.env.SMTP_USER,
            pass: proces.env.SMTP_PASS
          },
          tls: {
            rejectUnauthorized: false
        }
      });
      //data.to  rickydubey1986@gmail.com, bablu.developer16@gmail.com, matt@dubseo.co.uk
      var mailContent =
        '<!DOCTYPE HTML><head><meta http-equiv="content-type" content="text/html"></head><body><div id="outer" style="width: 80%;margin: 0 auto;margin-top: 10px;"><div id="inner" style="width: 78%;margin: 0 auto;background-color: #fff;font-family: Open Sans,Arial,sans-serif;font-size: 13px;font-weight: normal;line-height: 1.4em;color: #444;margin-top: 10px;"><h3> New contact request using next.js </h3><p>Name : ' +
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
        to: 'swetanshu84@gmail.com, rickydubey1986@gmail.com, bablu.developer16@gmail.com',
        subject:
          "londongpclinic.co.uk | New Contact Request from " + data.name,
        html: mailContent,
      };
      const result = await transporter.sendMail(mailOptions);
        res.status(200).send({ status: "OK", result: result });
    } catch (err) {
        res.status(500).json({ status: "FAILED", error: err.message });
    } 

});

module.exports = middleware(allowCors(handler));

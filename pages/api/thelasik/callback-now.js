// The endpoint : https://mail-sending-api.vercel.app/api/thelasik/callback-now
import allowCors from "../../../allow-cors";
import middleware from"../../../utils/middleware";
import handler from"../../../utils/handler";
import initMiddleware from '../../../utils/init-middleware';
import validateMiddleware from '../../../utils/validate-middleware';
import { check, validationResult } from 'express-validator'
import contactTmep from './lib/callback-temp';
const nodemailer = require("nodemailer");
 

const validateBody = initMiddleware(
  validateMiddleware([
      check('name').isString().withMessage('Name should be only string !').isLength({min:2, max: 40}).withMessage('Name length should 4 to 40 charecters !'),
      check('email').exists().withMessage("Email is required").isEmail().withMessage("Invalid email address !"), 
      check('phone').isLength({min:9, max: 14}).withMessage("Phone number is invalid !")
  ], validationResult)
)


// check('message').matches(/^([0-9A-z\ \_]+)$/, 'g').withMessage('Message should not use uniq characters !')
handler.post(async (req, res) => { 
  // console.log("the params : ", req.body);
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
          host : process.env.SMTP_HOST_LASIK,
          port: process.env.SMTP_PORT,
          secure: false, // upgrade later with STARTTLS
          auth: {
            user: process.env.SMTP_USER_LASIK,
            pass: process.env.SMTP_PASS_LASIK
          },
          tls: {
            rejectUnauthorized: false
        }
      });
      // console.log("SMTP HOST : ",process.env.SMTP_HOST_LASIK);
      // console.log("SMTP USER : ",process.env.SMTP_USER_LASIK);
      // console.log("SMTP PASS : ",process.env.SMTP_PASS_LASIK);
      // Just changed Client Emails : 
      //data.to  rickydubey1986@gmail.com, bablu.developer16@gmail.com, matt@dubseo.co.uk info@thelasik.co.uk, matt@dubseo.co.uk
      var mailContent =  await contactTmep(data) ;
      const mailOptions = {
        from: "info@thelasik.co.uk",
        to: 'info@thelasik.co.uk, matt@dubseo.co.uk, rickydubey1986@gmail.com',
        subject:
          "thelasik.co.uk | New Callback Request from " + data.name,
        html: mailContent,
      };
      const result = await transporter.sendMail(mailOptions);
        res.status(200).send({ status: "OK", result: result });
    } catch (err) {
      // console.log("SMTP HOST : ",process.env.SMTP_HOST_LASIK);
      // console.log("SMTP USER : ",process.env.SMTP_USER_LASIK);
      // console.log("SMTP PASS : ",process.env.SMTP_PASS_LASIK);
      res.status(500).json({ status: "FAILED", error: err.message });
    } 

});

module.exports = middleware(allowCors(handler));
